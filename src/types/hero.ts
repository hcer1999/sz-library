export interface Hero {
  id: number
  hero_id: number
  name: string
  avatar: string
  session: string
  kind: number
  cost: number
  star: number
  goodat: string
  selfskill: string
  selfskill_id: number
  convertskill: string
  convertskill_id: number
  power: number
  intelligence: number
  defense: number
  speed: number
  political: number
  charm: number
  at: string[]
  location: string[]
  country: number
  cavalry: number    // 骑兵适性
  shield: number     // 盾兵适性
  archers: number    // 弓兵适性
  spearman: number   // 枪兵适性
  mechanical: number // 器械适性
}

export interface HeroListResponse {
  code: number
  data: {
    list: Hero[]
    pagination: {
      current: number
      pageSize: number
      total: number
    }
  }
  message: string
  timestamp: number
} 