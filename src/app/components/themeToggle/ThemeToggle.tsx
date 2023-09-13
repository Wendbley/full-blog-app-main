'use client'

import Image from 'next/image'
import styles from './themeToggle.module.css'
import { moon, sun } from '../../../../public'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

type Props = {}

const ThemeToggle = (props: Props) => {
	const { state, dispatch } = useContext(ThemeContext)

	return (
		<div
			className={styles.container}
			onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
			style={
				state.theme === 'dark'
					? { background: 'white' }
					: { background: '#0f172a' }
			}>
			<Image src={moon} alt='moon' width={14} height={14} />
			<div
				className={styles.ball}
				style={
					state.theme === 'dark'
						? { left: 1, background: '#0f172a' }
						: { right: 1, background: 'white' }
				}></div>
			<Image src={sun} alt='sun' width={14} height={14} />
		</div>
	)
}

export default ThemeToggle
