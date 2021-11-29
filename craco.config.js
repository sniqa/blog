// import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
// eslint-disable-next-line import/no-anonymous-default-export
module.exports = {
	webpack: {
		plugins: {
			add: [
				new WindiCSSWebpackPlugin({
					virtualModulePath: 'src',
				}),
			],
		},
	},
}
