import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET() {
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'projects.json')
    const fileContents = await fs.readFile(jsonPath, 'utf8')
    const projects = JSON.parse(fileContents)

    const response = NextResponse.json(projects)
    response.headers.set('Cache-Control', 's-maxage=3600, stale-while-revalidate')
    
    return response
  } catch {
    return NextResponse.json(
      { error: 'Failed to load projects data' },
      { status: 500 }
    )
  }
}
