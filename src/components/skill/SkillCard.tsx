import { Skill } from "@/types/skill"
import { ImageFallback } from "@/components/ui/image-fallback"
import Link from "next/link"

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const getTypeText = (type: number) => {
    const types: Record<number, string> = {
      1: "被动战法",
      2: "主动战法",
      3: "追击战法",
      4: "突击战法",
      6: "阵法",
      7: "内政战法"
    }
    return types[type] || "未知类型"
  }

  return (
    <Link href={`#`}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-colors hover:bg-accent">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{getTypeText(skill.type)}</p>
              </div>
            </div>
            <div className="flex flex-col items-end text-sm">
              <span className="text-muted-foreground">触发率: {skill.pr}%</span>
              {skill.pr10 && (
                <span className="text-muted-foreground">满级: {skill.pr10}%</span>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {skill.at.map((attr, index) => (
                <span key={index} className="rounded bg-primary/10 px-2 py-0.5 text-xs">
                  {attr}
                </span>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">目标：</span>
              <span>{skill.aims}</span>
            </div>
            {skill.self && (
              <div className="text-sm">
                <span className="text-muted-foreground">专属：</span>
                <span>{skill.self}</span>
              </div>
            )}
            {skill.convert && (
              <div className="text-sm">
                <span className="text-muted-foreground">可转化：</span>
                <span>{skill.convert}</span>
              </div>
            )}
            <p className="text-sm text-muted-foreground" 
               dangerouslySetInnerHTML={{ __html: skill.info }} />
          </div>
        </div>
      </div>
    </Link>
  )
} 