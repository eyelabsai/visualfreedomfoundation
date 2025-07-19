import fs from 'fs'
import path from 'path'

export function getSiteConfig() {
  const contentPath = path.join(process.cwd(), 'content', 'site.json')
  const content = fs.readFileSync(contentPath, 'utf8')
  return JSON.parse(content)
}

export function getPage(slug) {
  try {
    const pagePath = path.join(process.cwd(), 'content', 'pages', `${slug}.json`)
    const content = fs.readFileSync(pagePath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    return null
  }
}

export function getAllPages() {
  const siteConfig = getSiteConfig()
  return siteConfig.pages
}

export function getPost(slug) {
  try {
    const postPath = path.join(process.cwd(), 'content', 'posts', `${slug}.json`)
    const content = fs.readFileSync(postPath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    return null
  }
}

export function getAllPosts() {
  const siteConfig = getSiteConfig()
  return siteConfig.posts
} 