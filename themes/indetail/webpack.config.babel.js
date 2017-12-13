'use strict';

import webpack from 'webpack/lib/webpack';
import merge from 'webpack-merge';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

// const PATH = (str) => path.resolve(__dirname, str);
const NPM_EVENT = process.env.npm_lifecycle_event;

const PluginDefineEnv = (env) => new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(env) });

const commonWebpackPlugins = [
	new ExtractTextPlugin('../assets/style.css')
];

const webpackConfig = {
	devtool: 'source-map',
	entry: {
		styles: ['./src/css/less/style.less'],
		head: ['./src/js/head/index.js'],
		index: ['./src/js/index.js']
	},
	output: {
		path: path.resolve('assets/'),
		filename: 'bundle-[name].js',
		sourceMapFilename: '[file].map'
	},
	module: {
		loaders: [
			{
				test: /\.js$|\.json$|\.jsx$/,
				loader: 'babel-loader',
				// include: path.resolve('js/'),
				// exclude: path.resolve(__dirname, 'node_modules')
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('css-loader!less-loader')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader?module!autoprefixer-loader')
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=../assets/fonts/[name].[ext]'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '../assets/images/[hash].[ext]'
				}
			}
		]
	}
};

if (NPM_EVENT === 'prod') {
	module.exports = merge(webpackConfig, {
		module: {
			loaders: [
				{
					enforce: 'pre',
					test: /\.js$/,
					loader: 'eslint-loader',
					include: path.resolve('js/'),
					exclude: [
						path.resolve(__dirname, 'node_modules'),
						path.resolve(__dirname, 'js/head')
					]
				}
			]
		},
		plugins: [
			...commonWebpackPlugins,
			PluginDefineEnv('production'),
			new OptimizeCssAssetsPlugin({
				assetNameRegExp: /\.css$/,
				cssProcessorOptions: { discardComments: { removeAll: true } }
			}),
			new UglifyJSPlugin({
				sourceMap: true,
				uglifyOptions: {
					ie8: false,
					ecma: 8,
					warnings: false,
					output: {
						comments: false,
						beautify: false
					}
				}
			})
		]
	});
}

if (NPM_EVENT !== 'prod') {
	module.exports = merge(webpackConfig, {
		devtool: 'inline-source-map',
		plugins: [
			...commonWebpackPlugins,
			PluginDefineEnv('development')
		]
	});
}
