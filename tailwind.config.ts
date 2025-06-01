import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'spin-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'spin-reverse': {
					'0%': {
						transform: 'rotate(360deg)'
					},
					'100%': {
						transform: 'rotate(0deg)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) rotate(180deg)'
					}
				},
				'float-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)'
					},
					'50%': {
						transform: 'translateY(-30px) rotate(-180deg)'
					}
				},
				'float-particle': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(-10px) translateX(5px)'
					},
					'66%': {
						transform: 'translateY(5px) translateX(-5px)'
					}
				},
				'float-particle-delayed': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px)'
					},
					'33%': {
						transform: 'translateY(10px) translateX(-8px)'
					},
					'66%': {
						transform: 'translateY(-8px) translateX(8px)'
					}
				},
				'bounce-slow': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'bounce-delayed': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'pulse-slow-delayed': {
					'0%, 100%': {
						opacity: '0.2'
					},
					'50%': {
						opacity: '0.6'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.5',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'fade-in-up': 'fade-in-up 1s ease-out forwards',
				'slide-in-left': 'slide-in-left 1s ease-out forwards',
				'slide-in-right': 'slide-in-right 1s ease-out forwards',
				'slide-in-up': 'slide-in-up 1s ease-out forwards',
				'spin-slow': 'spin-slow 8s linear infinite',
				'spin-reverse': 'spin-reverse 10s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float-delayed 8s ease-in-out infinite',
				'float-particle': 'float-particle 4s ease-in-out infinite',
				'float-particle-delayed': 'float-particle-delayed 5s ease-in-out infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'bounce-delayed': 'bounce-delayed 3s ease-in-out infinite 1.5s',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'pulse-slow-delayed': 'pulse-slow-delayed 4s ease-in-out infinite 2s',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
