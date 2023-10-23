const withBoundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === true })
const withExportImages = require('next-export-optimize-images')

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        },
      },
      generator: {
        filename: 'static/chunks/images/[path][name].[hash].[ext]',
      },
    })

    return config
  },
  basePath,
  trailingSlash: true,
  experimental: {
    typedRoutes: true,
  },
}

module.exports = withExportImages(withBoundleAnalyzer({ ...config, output: 'export' }))

// HTMLエクスポートしない場合
// module.exports = withBoundleAnalyzer(config)
