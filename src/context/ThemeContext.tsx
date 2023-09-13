'use client'

import { Dispatch, createContext, useEffect, useReducer } from 'react'

interface Props {
	children: React.ReactNode
}

/**
 *
 * @returns
 */
const getFromLocalStorage = () => {
	if (typeof window !== 'undefined') {
		const value = localStorage.getItem('theme')!
		return value || 'light'
	}
}

type State = {
	theme: string | undefined
}
type Action = 
	{ type: 'TOGGLE_THEME' }

const initialState: State ={
	theme: getFromLocalStorage()
}

/**
 * 
 */
export const ThemeContext = createContext<{state: State,
	dispatch: Dispatch<Action>
  }>({ state: initialState, dispatch: () => null })

 
  /**
   * 
   * @param state 
   * @param action 
   * @returns 
   */
const reducer = (state: State, action: Action) => {
	switch(action.type){
		case 'TOGGLE_THEME':
			return  { ...state, theme: state.theme === 'dark' ? 'light' : 'dark'}
		default:
			return state
	}
}


/**
 *
 * @param param0
 * @returns
 */
const ThemeContextProvider = ({ children }: Props) => {
	// const [theme, setTheme] = useState(() => getFromLocalStorage())
	const [state, dispatch] = useReducer(reducer, initialState)
	const { theme } = state
   

	useEffect(() => {
		localStorage.setItem("theme", theme!);
	  }, [theme])

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider
