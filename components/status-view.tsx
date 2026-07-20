'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

type StatusStates = 'online' | 'offline' | 'busy';
type MediaInfo = {
   title: string;
   artist: string;
   album: string;
}
type NvimInfo = {

}

const statusConfig: Record<StatusStates, { label: string; dotColor: string; dotClass: string }> = {
   online: { label: 'Connected', dotColor: 'bg-accent-green', dotClass: 'animate-pulse' },
   offline: { label: 'Disconnected', dotColor: 'bg-red-500', dotClass: '' },
   busy: { label: 'Busy', dotColor: 'bg-accent-yellow', dotClass: 'animate-pulse' },
};

function validateMediaInfo(media: Record<string, unknown>) {
   if (typeof media.title !== 'string' || typeof media.artist !== 'string' || typeof media.album !== 'string') {
      throw new TypeError('media info is not valid');
   }
   return media as MediaInfo;
}

function handleSocketConnection(
   setState: (status: StatusStates) => void,
   setMedia: (media: MediaInfo | null) => void,
   setNvim: (nvim: NvimInfo) => void,
   failCount: number = 0,
) {
   const onfail = () => {
      if (failCount < 600) {
         setTimeout(() => {
            handleSocketConnection(setState, setMedia, setNvim, failCount + 1);
         }, 1000 * failCount || 1);
      } else {
         setState('offline');
      }
   }
   const host = window.location.hostname;
   const port = window.location.port;
   const socket = new WebSocket(`ws://${host}:${port}/sock/`);
   socket.onopen = () => {
      console.log('statusd: connected');
      setState('online');
   }
   socket.onerror = (error) => {
      onfail();
      setState('offline');

   }
   socket.onmessage = (event) => {
      if (typeof event.data === 'string') {
         const message = JSON.parse(event.data);
         if (message.nvim) {
            console.log(message.nvim);
         }
         if (message.media) {
            try {
               const media = validateMediaInfo(message.media);
               setMedia(media);
            }
            catch (error: TypeError | unknown) {
               console.error(error);
               setState('offline');
               return;
            }
         } else {
            setMedia(null);
         }
      } else {
         setState('offline');
         console.error('statusd: invalid message');
      }

   }
   socket.onclose = () => {
      onfail();
      console.debug('statusd: disconnected');
      setState('offline');

   }
}
export async function getImageBlob(): Promise<Blob | null> {
   const host = window.location.hostname;
   const port = window.location.port;
   try {
      const res = await fetch(`http://${host}:${port}/sock/image`);
      if (!res.ok) {
         if (res.status === 404) {
            return null;
         } else {
            throw new Error(`statusd responded with ${res.status}`);
         }
      }

      return res.blob();
   } catch (e) {
      console.error(e);
      return null;
   }
}
export function StatusView() {
   const [status, setStatus] = useState<StatusStates>('offline');
   const [media, setMedia] = useState<MediaInfo | null>(null);
   const [nvim, setNvim] = useState<NvimInfo | null>(null);
   const [imageBlob, setImageBlob] = useState<Blob | null>(null);
   const cfg = statusConfig[status];

   useEffect(() => {
      handleSocketConnection(setStatus, setMedia, setNvim);
   }, []);
   useEffect(() => {
      if (media) {
         getImageBlob()
            .then(setImageBlob)
            .catch(console.error);
      }
   }, [media]);
   return (
      <div className="bg-bg-secondary border-border hover:border-accent-blue w-full rounded-lg border p-4 transition-all duration-200">
         <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs">
               <span className={`${cfg.dotColor} inline-block h-2 w-2 rounded-full ${cfg.dotClass}`} />
               <span className="text-text-muted">{cfg.label}</span>
            </div>
            <span className="text-text-muted font-mono text-xs">statusd</span>
         </div>

         {status === 'online' && !media && (
            <div className="flex flex-col items-center gap-1 py-6">
               <span className="text-text-muted font-mono text-sm">Online just chillin'</span>
            </div>
         )}

         {status === 'busy' && (
            <div className="flex flex-col items-center gap-1 py-6">
               <span className="text-text-muted font-mono text-sm">Busy</span>
            </div>
         )}
         {media && (
            <div className="flex items-center gap-4">
               {imageBlob !== null ? (

                  <img className="bg-bg-tertiary border-border h-14 w-14 flex-shrink-0 items-center justify-center rounded-md border" src={URL.createObjectURL(imageBlob)} alt="Media" />
               ) : (
                  <div className="bg-bg-tertiary border-border flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md border">
                     <svg className="text-text-muted h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                     </svg>
                  </div>
               )}
               <div className="min-w-0 flex-1">
                  <p className="text-text-primary truncate font-mono text-sm font-bold">{media.title}</p>
                  <p className="text-text-secondary truncate font-mono text-xs">{media.artist}</p>
                  <p className="text-text-muted truncate font-mono text-xs">{media.album}</p>
               </div>
            </div>
         )}
      </div>
   )
}
