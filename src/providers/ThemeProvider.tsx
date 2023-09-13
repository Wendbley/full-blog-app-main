'use client'

import { ThemeContext } from '@/context/ThemeContext'
import { useContext, useEffect, useState } from 'react'

type Props = {
	children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
	const { state } = useContext(ThemeContext)
	const [ mounted, setMounted ] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [setMounted])
	if (mounted) {
		return <div className={state.theme}>{children}</div>
	}
}

export default ThemeProvider
