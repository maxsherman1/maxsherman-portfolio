import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'skills.json')
    const fileContents = await fs.readFile(jsonPath, 'utf8')
    const skills = JSON.parse(fileContents)

    const response = NextResponse.json(skills)
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    
    return response
  } catch {
    return NextResponse.json(
      { error: 'Failed to load skills data' },
      { status: 500 }
    )
  }
}
