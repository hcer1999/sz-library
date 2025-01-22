import { General } from "@/types/general"
import Image from "next/image"
import Link from "next/link"

interface GeneralCardProps {
  general: General
}

export function GeneralCard({ general }: GeneralCardProps) {
  return (
    <Link href={`/generals/${general.id}`}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-colors hover:bg-accent">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative h-32 w-32 overflow-hidden rounded-lg">
            <Image
              src={`/images/generals/${general.id}.png`}
              alt={general.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold">{general.name}</h3>
            <p className="text-sm text-muted-foreground">
              {general.rarity} · {general.type}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
} 