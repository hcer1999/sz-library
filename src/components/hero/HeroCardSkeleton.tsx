import { Skeleton } from "@/components/ui/skeleton"

export function HeroCardSkeleton() {
  return (
    <div className="w-full max-w-[320px] rounded-lg border p-4 space-y-4">
      <div className="aspect-[3/4] relative">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
} 