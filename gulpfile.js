/**
 *
 * Gulpfile setup
 *
 * @since 1.0.0
 * @authors Ahmad Awais, @digisavvy, @desaiuditd, @jb510, @dmassiani and @Maxlopez
 * @package neat
 * @forks _s & some-like-it-neat
 */


// Project configuration
var project 		= 'neat', // Project name, used for build zip.
	url 		= 'neat.dev', // Local Development URL for BrowserSync. Change as-needed.
	bower 		= './assets/bower_components/'; // Not truly using this yet, more or less playing right now. TO-DO Place in Dev branch
	build 		= './buildtheme/', // Files that you want to package into a zip go here
	buildInclude 	= [
				// include common file types
				'**/*.php',
				'**/*.html',
				'**/*.css',
				'**/*.js',
				'**/*.svg',
				'**/*.ttf',
				'**/*.otf',
				'**/*.eot',
				'**/*.woff',
				'**/*.woff2',

				// include specific files and folders
				'screenshot.png',

				// exclude files and folders
				'!node_modules/**/*',
				'!assets/bower_components/**/*',
				'!style.css.map',
				'!assets/js/custom/*',
				'!assets/css/patrials/*'

			];
