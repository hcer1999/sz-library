import { api } from '../axios'
import type { ApiResponse, PaginatedResponse, QueryParams } from '../types'
import type { Book } from '@/types/book'

export const booksApi = {
  // 获取兵书列表
  getBooks: (params: QueryParams) =>
    api.get<any, ApiResponse<PaginatedResponse<Book>>>('/books', { params }),

  // 获取单个兵书详情
  getBook: (id: number) =>
    api.get<any, ApiResponse<Book>>(`/books/${id}`),

  // 按条件筛选兵书
  filterBooks: (params: {
    name?: string
    category?: string
    subCategory?: string
    rarity?: string
  }) =>
    api.get<any, ApiResponse<Book[]>>('/books/filter', { params })
} 