/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
             hostname: 'example.com' /***Nom de l'url du site avec la photo */
             
            },
          ],
    } 
}

module.exports = nextConfig
