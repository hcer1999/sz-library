import { api } from "../axios";
import type { HeroListResponse } from "@/types/hero";

export const heroesApi = {
  // 获取武将列表
  getHeroes: (params: { current?: number; pageSize?: number; search?: string; country?: string; type?: string }) =>
    api.post<any, HeroListResponse>("/v1/heroes/page", {
      current: params.current,
      pageSize: params.pageSize || 20,
      name: params.search,
      country: params.country,
      type: params.type,
    }),

  // 获取单个武将详情
  getHero: (name: string) =>
    api.post<any, HeroListResponse>("/v1/heroes/", {
      name: name,
    }),
};
