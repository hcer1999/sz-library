import { Hero } from '@/types/hero';
import { ImageFallback } from '@/components/ui/image-fallback';
import { cn } from '@/lib/utils';

interface HeroCardProps {
  hero: Hero;
  onClick: () => void;
}

function getAptitudeColor(level: number) {
  switch (level) {
    case 4:
      return 'text-yellow-500 font-bold'; // S
    case 3:
      return 'text-red-400 font-semibold'; // A
    case 2:
      return 'text-blue-500'; // B
    case 1:
      return 'text-gray-500'; // C
    default:
      return 'text-gray-400'; // 未知
  }
}

function getAptitudeText(level: number) {
  return ['?', 'C', 'B', 'A', 'S'][level] || '?';
}

export function HeroCard({ hero, onClick }: HeroCardProps) {
  const getCountryStyle = (country: number): { bgColor: string; hoverBgColor: string; borderColor: string; tagBgColor: string; tagTextColor: string } => {
    const styles: Record<number, { bgColor: string; hoverBgColor: string; borderColor: string; tagBgColor: string; tagTextColor: string }> = {
      0: {
        // 魏国
        bgColor: 'bg-blue-500/5',
        tagBgColor: 'bg-blue-500',
        tagTextColor: 'text-white',
        hoverBgColor: 'hover:bg-blue-500/10',
        borderColor: 'border-blue-500/20',
      }, 
      1: {
        // 蜀国
        bgColor: 'bg-green-500/5',
        tagBgColor: 'bg-green-500',
        tagTextColor: 'text-white',
        hoverBgColor: 'hover:bg-green-500/10',
        borderColor: 'border-green-500/20',
      },
      2: {
        // 吴国
        bgColor: 'bg-red-500/5',
        tagBgColor: 'bg-red-500',
        tagTextColor: 'text-white',
        hoverBgColor: 'hover:bg-red-500/10',
        borderColor: 'border-red-500/20',
      },
      3: {
        // 群雄
        bgColor: 'bg-yellow-500/5',
        tagBgColor: 'bg-yellow-500',
        tagTextColor: 'text-white',
        hoverBgColor: 'hover:bg-yellow-500/10',
        borderColor: 'border-yellow-500/20',
      },
    };
    return styles[country] || styles[3];
  };

  const getCountryText = (country: number) => {
    const countries: Record<number, string> = {
      0: '魏国',
      1: '蜀国',
      2: '吴国',
      3: '群雄',
    };
    return countries[country] || '未知';
  };

  const countryStyle = getCountryStyle(hero.country);

  return (
    <div
      className={cn(
        'w-full max-w-[500px] min-w-[300px] group relative overflow-hidden rounded-lg border',
        'bg-background transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer ripple',
        countryStyle.borderColor,
        countryStyle.bgColor,
        countryStyle.hoverBgColor
      )}
      onClick={onClick}
    >
      <div className="flex h-full">
        {/* 左侧图片 */}
        <div className="relative w-[180px] flex-shrink-0 overflow-hidden">
          <ImageFallback
            src={hero.avatar}
            alt={hero.name}
            width={180}
            height={240}
            className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-110"
            fallbackClassName="bg-primary/10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-2 left-2 right-2">
            <span
              className={cn(
                'inline-block rounded px-2 py-0.5 text-sm text-foreground backdrop-blur-sm',
                countryStyle.tagBgColor,
                countryStyle.tagTextColor
              )}
            >
              {getCountryText(hero.country)}
            </span>
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="flex-1 p-4 space-y-3">
          <div>
            <h3 className="text-xl font-bold">{hero.name}</h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {hero.at.map((attr, index) => (
                <span
                  key={index}
                  className="rounded bg-primary/10 px-2 py-0.5 text-xs transition-colors group-hover:bg-primary/20"
                >
                  {attr}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 text-sm">
            <div className="text-center">
              <div className="text-muted-foreground text-xs">骑兵</div>
              <div className={getAptitudeColor(hero.cavalry)}>{getAptitudeText(hero.cavalry)}</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-xs">盾兵</div>
              <div className={getAptitudeColor(hero.shield)}>{getAptitudeText(hero.shield)}</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-xs">弓兵</div>
              <div className={getAptitudeColor(hero.archers)}>{getAptitudeText(hero.archers)}</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-xs">枪兵</div>
              <div className={getAptitudeColor(hero.spearman)}>{getAptitudeText(hero.spearman)}</div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-xs">器械</div>
              <div className={getAptitudeColor(hero.mechanical)}>{getAptitudeText(hero.mechanical)}</div>
            </div>
          </div>

          <div className="grid text-center grid-cols-3 gap-x-4 gap-y-2 text-sm">
            <div className="space-y-1">
              <div className="text-muted-foreground">武力</div>
              <div className="text-lg font-bold">{hero.power}</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">智力</div>
              <div className="text-lg font-bold">{hero.intelligence}</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">防御</div>
              <div className="text-lg font-bold">{hero.defense}</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">速度</div>
              <div className="text-lg font-bold">{hero.speed}</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">政治</div>
              <div className="text-lg font-bold">{hero.political}</div>
            </div>
            <div className="space-y-1">
              <div className="text-muted-foreground">魅力</div>
              <div className="text-lg font-bold">{hero.charm}</div>
            </div>
          </div>

          <div className="text-center pt-2 border-t flex items-center justify-between">
            <div>
              <div className="text-xs text-muted-foreground">专属战法</div>
              <div className="text-sm font-medium truncate">{hero.selfskill}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">转化战法</div>
              <div className="text-sm font-medium truncate">{hero.convertskill}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
