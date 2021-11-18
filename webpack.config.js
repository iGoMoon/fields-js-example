const HubSpotAutoUploadPlugin = require('@hubspot/webpack-cms-plugins/HubSpotAutoUploadPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Require the package
const { FieldsPlugin } = require('@igomoon/hubspot-fields-js');

module.exports = ({ account = false , autoupload = false }) => ({
	entry: {
		main: [
			'./src/main.js',
			'./src/main.scss'
		],
	},
	output: {
		filename: 'js/main.js',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { url: false } },
					'sass-loader',
				],
			},
		],
	},
	plugins: [

		// Add in the Plugin
		new FieldsPlugin(),

		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/templates', to: 'templates' },
				{ from: 'src/modules', to: 'modules' }
			]
		}),

		new HubSpotAutoUploadPlugin({
			autoupload,
			account,
			src: 'dist',
			dest: 'my-project',
		}),

	],
});
