import { Button } from "@/components/ui/button"
import { GeneralCard } from "@/components/general/GeneralCard"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"

export default function GeneralsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">武将图鉴</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="搜索武将..." />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="阵营" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="魏">魏国</SelectItem>
              <SelectItem value="蜀">蜀国</SelectItem>
              <SelectItem value="吴">吴国</SelectItem>
              <SelectItem value="群">群雄</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="稀有度" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="N">N</SelectItem>
              <SelectItem value="R">R</SelectItem>
              <SelectItem value="SR">SR</SelectItem>
              <SelectItem value="SSR">SSR</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="武将类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="战士">战士</SelectItem>
              <SelectItem value="射手">射手</SelectItem>
              <SelectItem value="骑兵">骑兵</SelectItem>
              <SelectItem value="谋士">谋士</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">重置筛选</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* 这里先放一个示例数据，等后面接入 API */}
        <GeneralCard
          general={{
            id: 1,
            name: "吕布",
            rarity: "SSR",
            type: "战士",
            skills: [],
            stats: {
              leadership: 100,
              force: 100,
              intelligence: 70,
              politics: 40
            },
            books: []
          }}
        />
      </div>
    </div>
  )
} 