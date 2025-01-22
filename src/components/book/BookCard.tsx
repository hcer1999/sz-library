import { Book } from "@/types/book"
import Link from "next/link"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="group relative overflow-hidden rounded-lg border bg-background p-4 transition-colors hover:bg-accent">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{book.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{book.category}</span>
              <span className={`text-sm font-semibold ${
                book.rarity === 'SSR' ? 'text-yellow-500' :
                book.rarity === 'SR' ? 'text-purple-500' :
                'text-blue-500'
              }`}>
                {book.rarity}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {book.description}
          </p>
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">效果：</p>
            <ul className="space-y-1">
              {book.effects.map((effect, index) => (
                <li key={index} className="text-sm">
                  • {effect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  )
} 