/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
  images: {
    domains: [`www.mighty-delivery.com`,`digiyo.io`, `www.the-artery.com`, `sullivanmyer.com`]
  }
}