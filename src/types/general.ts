export interface General {
  id: number
  name: string
  rarity: string // SR, SSR 等
  type: string // 武将类型
  camp: string // 阵营：魏、蜀、吴、群
  skills: Skill[]
  stats: Stats
  books: Book[]
}

export interface Skill {
  id: number
  name: string
  description: string
  effects: string[]
  type?: "指挥" | "主动" | "被动" | "突击" | "兵种" | "内政" | "阵法" // 战法类型
  troopType?: string[] // 适用兵种：步兵、骑兵、弓兵、军师
  cooldown?: number // 冷却回合
  cost?: number // 战法消耗
}

export interface Stats {
  leadership: number
  force: number
  intelligence: number
  politics: number
}

export interface Book {
  id: number
  name: string
  description: string
  effects: string[]
} 