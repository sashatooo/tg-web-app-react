import { useEffect } from 'react'
import './App.css'
import Button from './component/Button/Button'
import Header from './component/Header/Header'
import { useTelegram } from './hooks/useTelegram'



function App() {

	const { onToggleButton, tg } = useTelegram()

	useEffect( () => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			<Header />
			<Button onClick={ onToggleButton }>toggle</Button>
		</div>
	);
}

export default App
