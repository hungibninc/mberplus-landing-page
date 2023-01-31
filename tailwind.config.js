const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			custom: ['Gotham-Black', 'Gotham-Book', 'Gotham-Medium'],
		},
		extend: {
			colors: {
				primary: {
					100: '#f0ffcc',
					200: '#e1ff99',
					300: '#d2ff66',
					400: '#c3ff33',
					DEFAULT: '#b4ff00',
					600: '#90cc00',
					700: '#6c9900',
					800: '#486600',
					900: '#243300',
					semibold: '#83CA32',
				},
				gray: {
					DEFAULT: '#F8FAFC',
					bold: '#475569',
				},
			},
			fontSize: {
				'14-28-c': ['14px', '28px'],
				'16-28-c': ['16px', '28px'],
				'18-32-c': ['18px', '32px'],
				'22-30-c': ['22px', '30px'],
				'24-26-c': ['24px', '26px'],
				'24-32-c': ['24px', '32px'],
				'32-36-c': ['32px', '36px'],
				'36-40-c': ['36px', '40px'],
				'38-50-c': ['38px', '50px'],
				'42-46-c': ['42px', '46px'],
				'48-52-c': ['48px', '52px'],
			},
			spacing: {
				'25c': '25px',
				'30px-c': '30px',
				'45%c': '45%',
				'55%c': '55%',
				'74c': '74px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
