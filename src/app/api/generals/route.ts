import { NextResponse } from 'next/server'
import { sql } from '@vercel/postgres'
// 或者其他数据库客户端

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM generals`
    return NextResponse.json({ data: rows })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
} 