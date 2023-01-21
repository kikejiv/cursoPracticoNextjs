/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:[
      'api.lorem.space', 'placeimg.com', 'wixmp.co', 'romapym'
    ]
  },
 /* env:{
    customkey: 'customValue',
  },
  basePath: '/src',
  compress: true,
  async redirects(){
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent: true,
      }
    ]
  },
  */
}

module.exports = nextConfig
