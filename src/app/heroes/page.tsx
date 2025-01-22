"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { HeroCard } from "@/components/hero/HeroCard"
import { HeroDialog } from "@/components/hero/HeroDialog"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"
import { heroesApi } from "@/lib/api"
import type { Hero } from "@/types/hero"
import { useDebounce } from "@/hooks/useDebounce"

export default function HeroesPage() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [filters, setFilters] = useState({
    country: "",
    type: "",
    search: ""
  })

  // 使用防抖的筛选条件
  const debouncedFilters = useDebounce(filters)

  useEffect(() => {
    setPage(1)
    fetchHeroes()
  }, [debouncedFilters])

  useEffect(() => {
    if (page !== 1) {
      fetchHeroes()
    }
  }, [page])

  const fetchHeroes = async () => {
    try {
      setLoading(true)
      const response = await heroesApi.getHeroes({
        current: page,
        pageSize: 20,
        search: debouncedFilters.search,
        country: debouncedFilters.country,
        type: debouncedFilters.type
      })
      
      setHeroes(response.data.list)
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
      <div className="flex flex-col gap-4 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 pb-4 border-b">
        <h1 className="text-3xl font-bold">武将图鉴</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input 
              placeholder="搜索武将..." 
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            />
          </div>
          <Select 
            value={filters.country}
            onValueChange={(value) => setFilters(prev => ({ ...prev, country: value }))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="势力" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">魏国</SelectItem>
              <SelectItem value="1">蜀国</SelectItem>
              <SelectItem value="2">吴国</SelectItem>
              <SelectItem value="3">群雄</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="定位" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="武">武将</SelectItem>
              <SelectItem value="谋">谋士</SelectItem>
              <SelectItem value="政">政治家</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            variant="outline"
            onClick={() => setFilters({ country: "", type: "", search: "" })}
          >
            重置筛选
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center py-4">加载中...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
            {heroes.map((hero) => (
              <div key={hero.id} className="w-full flex justify-center">
                <HeroCard
                  hero={hero}
                  onClick={() => {
                    setSelectedHero(hero)
                    setDialogOpen(true)
                  }}
                />
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

      <HeroDialog
        hero={selectedHero}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
} 