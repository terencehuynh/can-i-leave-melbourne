import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentPath = join(process.cwd(), 'content')

export type LocationMarkdown = {
  content: string
  meta: { title?: string; status?: string }
}

export const getLocationMarkdown = async (
  name: string
): Promise<LocationMarkdown> => {
  const fullPath = join(contentPath, `locations/${name}.md`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const data = matter(file)
  return { content: data.content, meta: data.data }
}
