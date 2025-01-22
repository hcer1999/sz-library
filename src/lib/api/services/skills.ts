import { api } from '../axios'
import type { SkillListResponse } from '@/types/skill'

export const skillsApi = {
  // 获取战法列表
  getSkills: (params: {
    page?: number
    pageSize?: number
    search?: string
    type?: string
    effect?: string
  }) =>
    api.post<any, SkillListResponse>('/v1/skills/page', {
      current: params.page,
      pageSize: params.pageSize || 20,
      name: params.search,
      type: params.type,
      effect: params.effect
    }),

  // 获取单个战法详情
  getSkill: (name: string) =>
    api.post<any, SkillListResponse>(`/v1/skills/`, {
        name: name
    }),

  // 按条件筛选战法
  filterSkills: (params: {
    name?: string
    type?: string
    effect?: string
  }) =>
    api.post<any, SkillListResponse>('/v1/skills/filter', params)
} 