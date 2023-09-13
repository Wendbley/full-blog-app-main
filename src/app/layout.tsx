import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ThemeContextProvider from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'
import AuthProvider from '@/providers/AuthProvider'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Full Blog App',
	description: 'Create a full blog app',
}

/**
 * 
 * @param param0 
 * @returns 
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AuthProvider>
					<ThemeContextProvider>
						<ThemeProvider>
							<div className='container'>
								<div className='wrapper'>
									<Navbar />
									{children}
									<Footer />
								</div>
							</div>
						</ThemeProvider>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
