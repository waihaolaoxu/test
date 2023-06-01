/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    env: {
        lang: 'cn', //cn：中文  en：英文  de：德文
    },
    images: { unoptimized: true }

}

module.exports = nextConfig
