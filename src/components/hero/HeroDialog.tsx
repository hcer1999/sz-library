import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Hero } from "@/types/hero"
import { ImageFallback } from "@/components/ui/image-fallback"
import { useMemo } from "react"
import { cn } from "@/lib/utils"

interface HeroDialogProps {
  hero: Hero | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function getAptitudeStyle(level: number) {
  switch(level) {
    case 4: return { // S
      text: 'text-yellow-500 font-bold text-2xl',
      bg: 'bg-yellow-500/10'
    }
    case 3: return { // A
      text: 'text-red-400 font-semibold text-xl',
      bg: 'bg-red-400/10'
    }
    case 2: return { // B
      text: 'text-blue-500 text-lg',
      bg: 'bg-blue-500/10'
    }
    case 1: return { // C
      text: 'text-gray-500 text-lg',
      bg: 'bg-gray-500/10'
    }
    default: return { // 未知
      text: 'text-gray-400 text-lg',
      bg: 'bg-gray-400/10'
    }
  }
}

function getAptitudeText(level: number) {
  return ['?', 'C', 'B', 'A', 'S'][level] || '?'
}

export function HeroDialog({ hero, open, onOpenChange }: HeroDialogProps) {
  if (!hero) return null

  const getCountryStyle = useMemo(() => {
    const styles = {
      0: { // 魏国
        bgColor: 'bg-blue-950/80',
        textColor: 'text-blue-100',
        borderColor: 'border-blue-400/30',
        gradientFrom: 'from-blue-500/20',
        gradientTo: 'to-background'
      },
      1: { // 蜀国
        bgColor: 'bg-green-950/80',
        textColor: 'text-green-100',
        borderColor: 'border-green-400/30',
        gradientFrom: 'from-green-500/20',
        gradientTo: 'to-background'
      },
      2: { // 吴国
        bgColor: 'bg-red-950/80',
        textColor: 'text-red-100',
        borderColor: 'border-red-400/30',
        gradientFrom: 'from-red-500/20',
        gradientTo: 'to-background'
      },
      3: { // 群雄
        bgColor: 'bg-yellow-950/80',
        textColor: 'text-yellow-100',
        borderColor: 'border-yellow-400/30',
        gradientFrom: 'from-yellow-500/20',
        gradientTo: 'to-background'
      }
    }
    return styles[hero.country] || styles[3]
  }, [hero.country])

  const getCountryText = (country: number) => {
    const countries = {
      0: "魏国",
      1: "蜀国",
      2: "吴国",
      3: "群雄"
    }
    return countries[country] || "未知"
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={cn(
        "max-w-3xl p-0 gap-0 overflow-hidden",
        "animate-in fade-in-0 zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        "duration-200 ease-out",
        getCountryStyle.borderColor
      )}>
        <div className={cn(
          "relative min-h-[600px] p-4",
          "bg-gradient-to-b",
          getCountryStyle.gradientFrom,
          getCountryStyle.gradientTo
        )}>
          {/* 头部信息 */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative w-full lg:w-[200px] aspect-[2/3] flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
              <ImageFallback
                src={hero.avatar}
                alt={hero.name}
                width={200}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                fallbackClassName="bg-primary/10"
                priority
              />
            </div>
            
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h2 className="text-3xl font-bold">{hero.name}</h2>
                  <span className={cn(
                    "rounded-full px-3 py-0.5 text-sm font-medium",
                    getCountryStyle.bgColor,
                    getCountryStyle.textColor
                  )}>
                    {getCountryText(hero.country)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hero.at.map((attr, index) => (
                    <span 
                      key={index} 
                      className={cn(
                        "rounded-full px-3 py-0.5 text-sm font-medium",
                        getCountryStyle.bgColor,
                        getCountryStyle.textColor
                      )}
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-muted-foreground">武力</div>
                  <div className="text-2xl font-bold">{hero.power}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">智力</div>
                  <div className="text-2xl font-bold">{hero.intelligence}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">防御</div>
                  <div className="text-2xl font-bold">{hero.defense}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">速度</div>
                  <div className="text-2xl font-bold">{hero.speed}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">政治</div>
                  <div className="text-2xl font-bold">{hero.political}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">魅力</div>
                  <div className="text-2xl font-bold">{hero.charm}</div>
                </div>
              </div>
            </div>
          </div>

          {/* 添加兵种适性部分 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">兵种适性</h3>
            <div className="grid grid-cols-5 gap-3">
              {[
                { name: '骑兵', value: hero.cavalry },
                { name: '盾兵', value: hero.shield },
                { name: '弓兵', value: hero.archers },
                { name: '枪兵', value: hero.spearman },
                { name: '器械', value: hero.mechanical },
              ].map((item) => {
                const style = getAptitudeStyle(item.value)
                return (
                  <div 
                    key={item.name}
                    className={cn(
                      "p-2 rounded-lg backdrop-blur-sm text-center",
                      style.bg
                    )}
                  >
                    <div className="text-xs text-muted-foreground mb-1">{item.name}</div>
                    <div className={style.text}>
                      {getAptitudeText(item.value)}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* 战法信息 */}
          <div className="mt-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">战法信息</h3>
              <div className="grid lg:grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">专属战法</div>
                  <div className="mt-1 text-base font-medium">{hero.selfskill}</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">可转化战法</div>
                  <div className="mt-1 text-base font-medium">{hero.convertskill}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">基本信息</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">赛季</div>
                  <div className="mt-1 text-base font-medium">{hero.session}</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">星级</div>
                  <div className="mt-1 text-base font-medium">{hero.star}星</div>
                </div>
                <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">Cost</div>
                  <div className="mt-1 text-base font-medium">{hero.cost}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 