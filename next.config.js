module.exports = {
  reactStrictMode: true,
  images: {
		domains: ['cdn.sanity.io']
	},
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};