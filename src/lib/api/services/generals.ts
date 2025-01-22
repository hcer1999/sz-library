import { api } from '../axios'
import type { ApiResponse, PaginatedResponse, QueryParams } from '../types'
import type { General } from '@/types/general'

export const generalsApi = {
  getGenerals: async () => {
    const response = await fetch('/api/generals')
    return response.json()
  }
} 