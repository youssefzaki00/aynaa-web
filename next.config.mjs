/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
			{
				source: "/gen1/setupguide",
				destination: "/setupguide",
				permanent: true,
			},
			{
				source: "/gen1/setupguide/:path*",
				destination: "/setupguide/:path*",
				permanent: true,
			},
			{
				source: "/gen2/setupguide",
				destination: "/setupguide",
				permanent: true,
			},
			{
				source: "/gen2/setupguide/:path*",
				destination: "/setupguide/:path*",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
