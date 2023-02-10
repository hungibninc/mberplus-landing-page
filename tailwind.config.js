const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	content: ['./public/**/*.html', './src/**/*.{html,js,jsx,ts,tsx,vue}'],
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
			animation: {
				'banner-desc': 'banner-desc 3s',
				'banner-image': 'banner-image 2s',
				'banner-bg-image': 'banner-bg-image 2s linear',
				shine: 'shine 1s',
				'spin-slow': 'spin 7s linear infinite',
				'pulse-light': 'pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				multiplication: 'multiplication 10s linear infinite',
				'multiplication-white': 'multiplication-white 5s linear infinite',
				'multiplication-plus': 'multiplication-plus 7s linear infinite',
				test: 'test 5s linear infinite',
				'ping-slow': 'ping 5s cubic-bezier(1, 1, 0.2, 1) infinite',
				// bounce: 'bounce 3s infinite',
			},
			keyframes: {
				'banner-desc': {
					'0%': {
						opacity: 0,
						transform: 'translateY(-30%)',
						'animation-timing-function': 'ease-in-out',
					},
					'100%': {
						opacity: 1,
						transform: 'translateY(0%)',
						'animation-timing-function': 'ease-in-out',
					},
				},
				'banner-image': {
					'0%, 100%': {
						opacity: 1,
						transform: 'translate(0, 0)',
						'animation-timing-function': 'ease-in-out',
					},
					'50%': {
						opacity: 0.2,
						transform: 'translate(-70%, 70%)',
						'animation-timing-function': 'ease-in-out',
					},
				},
				'banner-bg-image': {
					'0%, 100%': {
						opacity: 1,
						transform: 'translate(0, 0)',
						'animation-timing-function': 'ease-in-out',
					},
					'50%': {
						opacity: 0.2,
						transform: 'translate(70%, -70%)',
						'animation-timing-function': 'ease-in-out',
					},
				},
				shine: {
					'100%': { left: '125%' },
				},
				spin: {
					to: {
						transform: 'rotate(360deg)',
					},
				},
				'pulse-light': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.2 },
				},
				multiplication: {
					'0%, 100%': {
						transform: 'translateY(-50%)',
						'animation-timing-function': 'cubic-bezier(0.11, 0, 0.5, 0)',
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'cubic-bezier(0.11, 0, 0.5, 0)',
					},
				},
				'multiplication-white': {
					'0%, 100%': {
						transform: 'translateY(-15%)',
						'animation-timing-function': 'ease-in-out',
					},
					'50%': {
						transform: 'translateY(0)',
						'animation-timing-function': 'ease-in-out',
					},
				},
				'multiplication-plus': {
					'0%, 100%': {
						transform: 'translate(7%, -7%)',
						'animation-timing-function': 'ease-in-out',
					},
					'50%': {
						transform: 'translate(0, 0)',
						'animation-timing-function': 'ease-in-out',
					},
				},
				test: {
					'0%, 100%': {
						transform: 'translateY(-50%)',
					},
					'50%': {
						transform: 'translateY(0)',
					},
				},
				// bounce: {
				// 	'0%, 100%': {
				// 		transform: 'translateY(-50%)',
				// 		'animation-timing-function': 'cubic-bezier(0.11, 0, 0.5, 0)',
				// 	},
				// 	'50%': {
				// 		transform: 'translateY(0)',
				// 		'animation-timing-function': 'cubic-bezier(0.11, 0, 0.5, 0)',
				// 	},
				// },
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
