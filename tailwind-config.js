        tailwind.config = {//configuration for the light and dark mode 
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        display: ['Sora', 'sans-serif'],
                        body: ['IBM Plex Sans', 'sans-serif']
                    },
                    colors: {
                        sky: {
                            50: '#f0f9ff',
                            100: '#e0f2fe',
                            200: '#bae6fd',
                            300: '#7dd3fc',
                            400: '#38bdf8',
                            500: '#0ea5e9',
                            600: '#0284c7',
                            700: '#0369a1',
                            800: '#075985',
                            900: '#0c4a6e'
                        },
                        ember: {
                            50: '#fff7e8',
                            100: '#ffefc8',
                            200: '#ffd98e',
                            300: '#f8b954',
                            400: '#ef9529',
                            500: '#dc7318',
                            600: '#b75a12'
                        },
                        neon: {
                            50: '#eef2f3',
                            100: '#d9dee0',
                            200: '#bdc4c8',
                            300: '#9fa8ad',
                            400: '#7e888f',
                            500: '#636d74',
                            600: '#4d565d',
                            700: '#3a4146',
                            800: '#262c30',
                            900: '#14181b'
                        }
                    },
                    boxShadow: {
                        sky: '0 18px 40px rgba(14, 116, 216, 0.18)',
                        neon: '0 18px 40px rgba(148, 163, 184, 0.12)'
                    }
                }
            }
        };
