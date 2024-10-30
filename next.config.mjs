/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
               protocol: "https",
               hostname: "*",
               port: "",
               pathname: "/**",
            },
         ],
      },
      // redirects: async( ) => {
      //    return [
      //       {
      //          source: '/meals',
      //          destination: '/gallery',
      //          permanent: true,
      //        },
      //    ]
      // }
};

export default nextConfig;
