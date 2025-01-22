import { Button } from "@/components/ui/button"
import { BookCard } from "@/components/book/BookCard"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select"

export default function BooksPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">兵书系统</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <Input placeholder="搜索兵书..." />
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="兵书类型" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="作战">作战</SelectItem>
              <SelectItem value="虚实">虚实</SelectItem>
              <SelectItem value="军形">军形</SelectItem>
              <SelectItem value="九变">九变</SelectItem>
              <SelectItem value="始计">始计</SelectItem>
              <SelectItem value="用间">用间</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="稀有度" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="R">R</SelectItem>
              <SelectItem value="SR">SR</SelectItem>
              <SelectItem value="SSR">SSR</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">重置筛选</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <BookCard
          book={{
            id: 1,
            name: "势如破竹",
            category: "作战",
            rarity: "SSR",
            description: "锐不可当的攻势，摧枯拉朽的力量",
            effects: [
              "提升部队30%攻击力",
              "战斗开始时，额外获得一次行动机会",
              "攻击时有25%概率造成暴击"
            ]
          }}
        />
      </div>
    </div>
  )
} 