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
				destination: "/guide-screenshots/:path*",
				permanent: true,
			},
			{
				source: "/setupguide",
				destination: "/start",
				permanent: true,
			},
			{
				source: "/setupguide/router",
				destination: "/start/router/step1",
				permanent: true,
			},
			{
				source: "/setupguide/android",
				destination: "/start/android",
				permanent: true,
			},
			{
				source: "/setupguide/windows",
				destination: "/start/windows",
				permanent: true,
			},
			{
				source: "/setupguide/router/step1",
				destination: "/start/router/step1",
				permanent: true,
			},
			{
				source: "/setupguide/router/step2",
				destination: "/start/router/step2",
				permanent: true,
			},
			{
				source: "/setupguide/router/step3",
				destination: "/start/router/step3",
				permanent: true,
			},
			{
				source: "/setupguide/:device(router|android|windows)/:file*",
				destination: "/guide-screenshots/:device/:file*",
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
