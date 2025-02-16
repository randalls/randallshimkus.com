import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  env: {
    EMAILJS_KEY: process.env.EMAILJS_KEY,
    EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID,
    EMAILJS_TEMPLATEID: process.env.EMAILJS_TEMPLATEID,
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
