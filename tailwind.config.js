module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			custom: ['Gotham-Black', 'Gotham-Book', 'Gotham-Medium'],
		},
		extend: {
			colors: {
				primary: '#B4FF00',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
