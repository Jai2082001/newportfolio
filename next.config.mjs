/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|avi|mov|wmv|flv)$/, // Video file extensions
          type: 'asset/resource', // Emits files as separate resources
        });
        return config;
      },
};

export default nextConfig;
