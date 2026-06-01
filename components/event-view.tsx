'use client'
import { GithubEvent } from "@/lib/github-stats"

export type EventViewProps = {
   event: GithubEvent
   index: number
}
export default function EventView({ event, index }: EventViewProps) {
   return (
         <div
            className="bg-bg-secondary border border-border rounded-lg p-4 flex items-start gap-3 hover:border-accent-blue transition-colors duration-200"
         style={{ animation: `fadeInUp 0.4s ease-out ${0.1 * index}s both` }}
      >
         <span className="text-lg flex-shrink-0 mt-0.5">{event.emoji}</span>
         <div>
            <p className="text-sm text-text-primary font-mono">{event.description}</p>
            <p className="text-xs text-text-muted mt-1 font-mono">
               {new Date(event.created_at).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
               })}
            </p>
         </div>
      </div>
   )
}
