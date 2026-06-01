'use client';
import { GithubEvent } from "@/lib/github-stats";

export type EventViewProps = {
   event: GithubEvent;
   index: number;
};
export default function EventView({ event, index }: EventViewProps) {
   return (
      <div
         className="bg-bg-secondary border-border hover:border-accent-blue flex items-start gap-3 rounded-lg border p-4 transition-colors duration-200"
         style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * index}s both` }}
      >
         <span className="mt-0.5 flex-shrink-0 text-lg">{event.emoji}</span>
         <div>
            <p className="text-text-primary font-mono text-sm">{event.description}</p>
            <p className="text-text-muted mt-1 font-mono text-xs">
               {new Date(event.created_at).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
               })}
            </p>
         </div>
      </div>
   );
}
