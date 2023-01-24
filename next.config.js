  /**  @type {import('next').NextConfig} */
  const nextConfig = { 
    reactStrictMode: true,
    swcManify: true,
    images: {
      domains:[
        'api.lorem.space', 'placeimg.com', 'wixmp.co', 'romapym'],
    },
  };

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
});

module.exports = withPWA(nextConfig);
 

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
