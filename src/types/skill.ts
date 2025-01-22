export interface Skill {
  id: number
  _id: string
  name: string
  img: string
  session: number
  type: number // 1: 被动, 2: 主动, 3: 追击, 4: 突击, 6: 阵法, 7: 内政
  quality: number
  pr: number // 基础触发概率
  pr10: string // 满级触发概率
  able: string
  effect: string // 效果类型：增益、控制、治疗等
  aims: string // 目标：自己、敌军单体、我军群体等
  self: string // 专属武将
  convert: string // 可转化武将
  event: string
  w: number
  at: string[] // 战法属性：武、谋、辅、医、控等
  match: string[] // 匹配：武、谋、政等
  bing: number
  zhen: number
  imp: number
  info: string // 战法描述
  createTime: string
  updateTime: string
}

export interface SkillListResponse {
  code: number
  data: {
    list: Skill[]
    pagination: {
      current: number
      pageSize: number
      total: number
    }
  }
  message: string
  timestamp: number
} 