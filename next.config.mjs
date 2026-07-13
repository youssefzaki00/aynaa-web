/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	async redirects() {
		return [
			{
				source: "/gen1/setupguide",
				destination: "/start",
				permanent: true,
			},
			{
				source: "/gen1/setupguide/:path*",
				destination: "/start/:path*",
				permanent: true,
			},
			{
				source: "/gen2/setupguide",
				destination: "/start",
				permanent: true,
			},
			{
				source: "/gen2/setupguide/:path*",
				destination: "/start/:path*",
				permanent: true,
			},
			{
				source: "/setupguide/gen1/:path*",
				destination: "/setupguide/:path*",
				permanent: true,
			},
			{
				source: "/setupguide",
				destination: "/start",
				permanent: true,
			},
			{
				source: "/setupguide/:path*",
				destination: "/start/:path*",
				permanent: true,
			},
			{
				source: "/himaia",
				destination: "/start",
				permanent: true,
			},
			{
				source: "/himaia/:path*",
				destination: "/start/:path*",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
