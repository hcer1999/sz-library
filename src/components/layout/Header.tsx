import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">三站图书馆</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/heroes">
              <Button variant="ghost">武将图鉴</Button>
            </Link>
            <Link href="/skills">
              <Button variant="ghost">战法大全</Button>
            </Link>
            <Link href="/books">
              <Button variant="ghost">兵书搭配</Button>
            </Link>
            <Link href="/formations">
              <Button variant="ghost">阵容推荐</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
} 