import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Hero } from '@/types/hero';
import { ImageFallback } from '@/components/ui/image-fallback';
import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface HeroDialogProps {
  hero: Hero | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function getAptitudeStyle(level: number) {
  switch (level) {
    case 4:
      return {
        // S
        text: 'text-yellow-500 font-bold text-2xl',
        bg: 'bg-yellow-500/10',
      };
    case 3:
      return {
        // A
        text: 'text-red-400 font-semibold text-xl',
        bg: 'bg-red-400/10',
      };
    case 2:
      return {
        // B
        text: 'text-blue-500 text-lg',
        bg: 'bg-blue-500/10',
      };
    case 1:
      return {
        // C
        text: 'text-gray-500 text-lg',
        bg: 'bg-gray-500/10',
      };
    default:
      return {
        // 未知
        text: 'text-gray-400 text-lg',
        bg: 'bg-gray-400/10',
      };
  }
}

function getAptitudeText(level: number) {
  return ['?', 'C', 'B', 'A', 'S'][level] || '?';
}

export function HeroDialog({ hero, open, onOpenChange }: HeroDialogProps) {
  if (!hero) return null;

  const getCountryStyle = useMemo(() => {
    const styles = {
      0: {
        // 魏国
        bgColor: 'bg-blue-950/80',
        textColor: 'text-blue-100',
        borderColor: 'border-blue-400/30',
        gradientFrom: 'from-blue-500/20',
        gradientTo: 'to-background',
      },
      1: {
        // 蜀国
        bgColor: 'bg-green-950/80',
        textColor: 'text-green-100',
        borderColor: 'border-green-400/30',
        gradientFrom: 'from-green-500/20',
        gradientTo: 'to-background',
      },
      2: {
        // 吴国
        bgColor: 'bg-red-950/80',
        textColor: 'text-red-100',
        borderColor: 'border-red-400/30',
        gradientFrom: 'from-red-500/20',
        gradientTo: 'to-background',
      },
      3: {
        // 群雄
        bgColor: 'bg-yellow-950/80',
        textColor: 'text-yellow-100',
        borderColor: 'border-yellow-400/30',
        gradientFrom: 'from-yellow-500/20',
        gradientTo: 'to-background',
      },
    };
    return styles[hero.country as keyof typeof styles] || styles[3];
  }, [hero.country]);

  const getCountryText = (country: number) => {
    const countries: Record<number, string> = {
      0: '魏国',
      1: '蜀国',
      2: '吴国',
      3: '群雄',
    };
    return countries[country] || '未知';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          'max-w-2xl p-0 gap-0 overflow-hidden',
          'animate-in fade-in-0 zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'duration-200 ease-out',
          'overflow-y-scroll',
          'max-h-[90vh]',
          getCountryStyle.borderColor
        )}
      >
        <div
          className={cn(
            'relative p-4 md:p-6',
            'h-full',
            'bg-gradient-to-b',
            getCountryStyle.gradientFrom,
            getCountryStyle.gradientTo
          )}
        >
          {/* 头部信息 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="relative mx-auto md:mx-0 w-[180px] md:w-[200px] aspect-[2/3] flex-shrink-0 overflow-hidden rounded-lg shadow-lg">
              <ImageFallback
                src={hero.avatar}
                alt={hero.name}
                width={200}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                fallbackClassName="bg-primary/10"
              />
            </div>

            <div className="flex-1 space-y-4 md:space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold">{hero.name}</h2>
                  <span
                    className={cn(
                      'rounded-full px-3 py-0.5 text-sm font-medium',
                      getCountryStyle.bgColor,
                      getCountryStyle.textColor
                    )}
                  >
                    {getCountryText(hero.country)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hero.at.map((attr, index) => (
                    <span
                      key={index}
                      className={cn(
                        'rounded-full px-3 py-0.5 text-sm font-medium',
                        getCountryStyle.bgColor,
                        getCountryStyle.textColor
                      )}
                    >
                      {attr}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-6 gap-3 md:gap-4">
                {[
                  { label: '武力', value: hero.power },
                  { label: '智力', value: hero.intelligence },
                  { label: '防御', value: hero.defense },
                  { label: '速度', value: hero.speed },
                  { label: '政治', value: hero.political },
                  { label: '魅力', value: hero.charm },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-background/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
              {/* 兵种适性部分 */}
              <div className="mt-4 md:mt-6">
                <h3 className="text-base md:text-lg font-semibold mb-3">兵种适性</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-3">
                  {[
                    { name: '骑兵', value: hero.cavalry },
                    { name: '盾兵', value: hero.shield },
                    { name: '弓兵', value: hero.archers },
                    { name: '枪兵', value: hero.spearman },
                    { name: '器械', value: hero.mechanical },
                  ].map((item) => {
                    const style = getAptitudeStyle(item.value);
                    return (
                      <div key={item.name} className={cn('p-2 rounded-lg backdrop-blur-sm text-center', style.bg)}>
                        <div className="text-xs text-muted-foreground mb-1">{item.name}</div>
                        <div className={cn(style.text, 'text-base md:text-xl')}>{getAptitudeText(item.value)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* 战法信息 */}
          <div className="mt-4 md:mt-6 space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">战法信息</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-3 md:p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">专属战法</div>
                  <div className="mt-1 text-sm md:text-base font-medium">{hero.selfskill}</div>
                  <div
                    className="mt-2 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: hero.selfskill_id_info.info }}
                  ></div>
                </div>
                <div className="p-3 md:p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                  <div className="text-xs text-muted-foreground">可转化战法</div>
                  <div className="mt-1 text-sm md:text-base font-medium">{hero.convertskill}</div>
                  <div
                    className="mt-2 text-sm md:text-base"
                    dangerouslySetInnerHTML={{ __html: hero.convertskill_id_info.info }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-base md:text-lg font-semibold">基本信息</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: '赛季', value: hero.session },
                  { label: '星级', value: `${hero.star}星` },
                  { label: '统御值', value: hero.cost },
                ].map((item) => (
                  <div key={item.label} className="p-3 md:p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    <div className="mt-1 text-sm md:text-base font-medium">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
