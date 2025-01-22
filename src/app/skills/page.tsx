"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { SkillCard } from "@/components/skill/SkillCard"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"
import { skillsApi } from "@/lib/api"
import type { Skill } from "@/types/skill"
import { useDebounce } from "@/hooks/useDebounce"

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [filters, setFilters] = useState({
    type: "",
    effect: "",
    search: ""
  })

  // 使用防抖的筛选条件
  const debouncedFilters = useDebounce(filters)

  useEffect(() => {
    setPage(1)
    fetchSkills()
  }, [debouncedFilters]) // 使用防抖后的值触发请求

  useEffect(() => {
    if (page !== 1) {
      fetchSkills()
    }
  }, [page])

  const fetchSkills = async () => {
    try {
      setLoading(true)
      const response = await skillsApi.getSkills({
        page,
        pageSize: 20,
        search: debouncedFilters.search, // 使用防抖后的搜索值
        type: debouncedFilters.type,
        effect: debouncedFilters.effect
      })
      
      setSkills(response.data.list)
      setTotal(response.data.pagination.total)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const totalPages = Math.ceil(total / 20)

  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4 sticky top-0 bg-background z-10 pb-4">
        <h1 className="text-3xl font-bold">战法大全</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input 
              placeholder="搜索战法..." 
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            />
          </div>
          <Select 
            value={filters.type}
            onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="战法类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">被动战法</SelectItem>
              <SelectItem value="2">主动战法</SelectItem>
              <SelectItem value="3">追击战法</SelectItem>
              <SelectItem value="4">突击战法</SelectItem>
              <SelectItem value="6">阵法</SelectItem>
              <SelectItem value="7">内政战法</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.effect}
            onValueChange={(value) => setFilters(prev => ({ ...prev, effect: value }))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="效果类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="增益">增益</SelectItem>
              <SelectItem value="控制">控制</SelectItem>
              <SelectItem value="治疗">治疗</SelectItem>
              <SelectItem value="兵刃群体">兵刃群体</SelectItem>
              <SelectItem value="谋略群体">谋略群体</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="outline"
            onClick={() => setFilters({ type: "", effect: "", search: "" })}
          >
            重置筛选
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-4">加载中...</div>
      ) : (
        <>
          <div className="columns-1 md:columns-2 xl:columns-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="break-inside-avoid mb-4">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(1)}
            >
              首页
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage(prev => prev - 1)}
            >
              上一页
            </Button>
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">第</span>
              <span className="text-sm font-medium">{page}</span>
              <span className="text-sm text-muted-foreground">页 / 共</span>
              <span className="text-sm font-medium">{totalPages}</span>
              <span className="text-sm text-muted-foreground">页</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage(prev => prev + 1)}
            >
              下一页
            </Button>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage(totalPages)}
            >
              末页
            </Button>
          </div>
        </>
      )}
    </div>
  )
} 