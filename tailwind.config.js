/** @type {import('tailwindcss').Config} */
export default {
  content: [
    	"./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {

		fontFamily: {
                "IBM-Plex": ['IBM-Plex', 'sans-serif'],
                "inter": ['inter', 'sans']
            },
			colors: {
				purple:{
					DEFAULT: "#E5ECF6"
				},
				light:{
					DEFAULT: "#F7F9FB"
				},
				cyan:{
					secondary: "#A8C5DA",
					DEFAULT: "#F7F9FB"
				},
				green:{
					secondary: "#A1E3CB",
					// DEFAULT: "#F7F9FB"
				},
				blue: {
					secondary: "#B1E3FF",
					DEFAULT: "#E3F5FF",
				},
				black: {
					DEFAULT: "#1C1C1C",
					// secondary: "#41415A",
					// tertiary: "#71748C",
					// quat: "#B8BAC6",
					// quin: "#D5D5DD",
				},
				grey: {
					// secondary: "#F1F1F4",
					tertiary: "#F0ECEC",
					backdrop: "#f3f3f3",
					DEFAULT: "#cfcfcf",
				},
				error: {
					// DEFAULT: "#D20832",
					// secondary: "#DB3959",
					// tertiary: "#E46B84",
					// quat: "#ED9CAC",
					// quin: "#F6CED6",
					// backdrop: "#FDF6F8",
				},
				success: {
					// DEFAULT: "#22B231",
					// secondary: "#4EC15A",
					// tertiary: "#7AD183",
					// quat: "#A7E0AD",
					// quin: "#D3F0D6",
					// backdrop: "#F7FCF8",
				},
				warning: {
					// DEFAULT: "#F07911",
					// secondary: "#F39441",
					// tertiary: "#F49B4D",
					// quat: "#F8BC88",
					// quin: "#FBDEC4",
					backdrop: "#FFF8F8",
				},
				info: {
					// text: "#139AB7",
					// bg: "#F2F6FB",
					// DEFAULT: "#139AB7",
					// secondary: "#42AEC5",
					// tertiary: "#71C2D4",
					// quat: "#A1D7E2",
					// quin: "#D0EBF1",
					// backdrop: "#F7FCFD",
				},
			},
			gridTemplateColumns: {
				"dash-layout": "14rem auto",
			},
			screens: {
				"5xl": "1200px",
				"4xs": "380px",
				"3xs": "400px",
				"2xs": "475px",
				xs: "540px",
			},
		},
  },
  plugins: [],
}
