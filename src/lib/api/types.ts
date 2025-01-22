// API 响应的基础类型
export interface ApiResponse<T> {
  code: number
  message: string
  timestamp: number
  data: T
}

// 分页响应类型
export interface PaginatedResponse<T> {
  list: T[]
  total: number
  current: number
  pageSize: number
}

// 查询参数类型
export interface QueryParams {
  page?: number
  pageSize?: number
  search?: string
  [key: string]: any
} 