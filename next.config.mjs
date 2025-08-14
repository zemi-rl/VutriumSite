/** @type {import('next').NextConfig} */
const REPO_NAME = 'VutriumSite'
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  // Generate a fully static export for GitHub Pages
  output: 'export',

  // Ensure routes work on GitHub Pages (serves folder/index.html)
  trailingSlash: true,

  // Lint/TS are ignored during builds in this project setup
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Next/Image static export
  images: {
    unoptimized: true,
  },

  // Prefix assets and routes when deploying to GitHub Pages project site
  assetPrefix: isGithubPages ? `/${REPO_NAME}/` : undefined,
  basePath: isGithubPages ? `/${REPO_NAME}` : undefined,
}

export default nextConfig
