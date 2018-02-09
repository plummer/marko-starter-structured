module.exports = {
	configuration: function(isProduction) {
		return {
			plugins: [
				'lasso-marko', // Allow Marko templates to be compiled and transported to the browser,
				'lasso-sass'
			],
			outputDir: __dirname + '/static', // Place all generated JS/CSS/etc. files into the "static" dir
			bundlingEnabled: isProduction, // Only enable bundling in production
			minify: isProduction, // Only minify JS and CSS code in production
			fingerprintsEnabled: isProduction, // Only add fingerprints to URLs in production
		}
	}
	
}
