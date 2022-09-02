module.exports = {
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
					prependData: `@import "@/assets/scss/styles.scss";`
				}
			}
		}
	}
};