/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [{ type: 'host', value: 'www.sobremesasdapaty.com' }],
                destination: 'https://sobremesasdapaty.com/:path*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
