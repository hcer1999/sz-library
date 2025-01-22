export interface Book {
  id: number
  name: string
  category: "作战" | "虚实" | "军形" | "九变" | "始计" | "用间"
  subCategory?: string // 子类型，等待API数据
  rarity: "R" | "SR" | "SSR"
  description: string
  effects: string[]
} 