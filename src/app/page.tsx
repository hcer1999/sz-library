import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            三站图书馆 - 您的三国志战略版参考资料库
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            查询武将属性、战法、兵书、阵容搭配等信息，助您在战场上所向披靡
          </p>
          <div className="space-x-4">
            <Link href="/heroes">
              <Button size="lg">浏览武将图鉴</Button>
            </Link>
            <Link href="/formations">
              <Button variant="outline" size="lg">
                查看阵容推荐
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">武将图鉴</h3>
                <p className="text-sm text-muted-foreground">
                  详细的武将属性、技能说明，助您了解每位武将的特点
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">战法大全</h3>
                <p className="text-sm text-muted-foreground">
                  全面的战法效果说明，帮您选择最适合的战法搭配
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">兵书搭配</h3>
                <p className="text-sm text-muted-foreground">
                  精选的兵书搭配方案，让您的武将发挥最大战力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}