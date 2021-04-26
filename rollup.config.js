import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
// import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssCssnext from 'postcss-cssnext';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [

		postcss({
			// inject?:
			// | boolean
			// | { [key: string]: any }
			// | ((cssVariableName: string, id: string) => string);
			// extract?: boolean | string;
			// onExtract?: onExtract;
			// modules?: boolean | { [key: string]: any };
			// extensions?: string[];
			// plugins?: any[];
			plugins: [],
			// autoModules?: boolean;
			// namedExports?: boolean | ((id: string) => string);
			// minimize?: boolean | any;
			minimize: true,
			// parser?: string | FunctionType;
			// stringifier?: string | FunctionType;
			// syntax?: string | FunctionType;
			// exec?: boolean;
			// config?:
			// | boolean
			// | {
			// 	path: string;
			// 	ctx: any;
			// };
			// to?: string;
			// name?: any[] | any[][];
			// loaders?: any[];
			// onImport?: (id: string) => void;
			// use?: string[] | { [key in 'sass' | 'stylus' | 'less']: any };
			use: {
				'sass': {
					includePaths: [
						'./theme',
						'./node_modules'
					]
				}
			},
			// /**
			//  * @default: false
			//  **/
			// sourceMap?: boolean | 'inline';
			sourceMap: true
			// include?: Parameters<CreateFilter>[0];
			// exclude?: Parameters<CreateFilter>[1];
		}),

		svelte({
			// enable run-time checks when not in production
			dev: !production,
			emitCss: true,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css', true);
			},

			preprocess: {
				style: ({ content, attributes }) => {
					if (attributes.type !== 'text/postcss') return;

					return new Promise((fulfil, reject) => {
						const plugins = [ postcssImport, postcssCssnext ];
						const from = 'src';

						postcss({
							// inject?:
							// | boolean
							// | { [key: string]: any }
							// | ((cssVariableName: string, id: string) => string);
							// extract?: boolean | string;
							// onExtract?: onExtract;
							// modules?: boolean | { [key: string]: any };
							// extensions?: string[];
							// plugins?: any[];
							plugins: [],
							// autoModules?: boolean;
							// namedExports?: boolean | ((id: string) => string);
							// minimize?: boolean | any;
							minimize: true,
							// parser?: string | FunctionType;
							// stringifier?: string | FunctionType;
							// syntax?: string | FunctionType;
							// exec?: boolean;
							// config?:
							// | boolean
							// | {
							// 	path: string;
							// 	ctx: any;
							// };
							// to?: string;
							// name?: any[] | any[][];
							// loaders?: any[];
							// onImport?: (id: string) => void;
							// use?: string[] | { [key in 'sass' | 'stylus' | 'less']: any };
							use: {
								'sass': {
									includePaths: [
										'./theme',
										'./node_modules'
									]
								}
							},
							// /**
							//  * @default: false
							//  **/
							// sourceMap?: boolean | 'inline';
							sourceMap: true
							// include?: Parameters<CreateFilter>[0];
							// exclude?: Parameters<CreateFilter>[1];
						});
					});
				}
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),

		commonjs(),

		copy({
			targets: [
				{ src: 'src/data', dest: 'public/' },
				{ src: 'src/images', dest: 'public/' },
				{ src: 'src/styles/*.css', dest: 'public/styles/' },
				{ src: 'src/styles/imports', dest: 'public/' },
				{ src: 'static/*', dest: 'public/' }
			]
		}),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}
