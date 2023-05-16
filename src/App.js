import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Button from './component/Button/Button'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import ProductList from './component/ProductList/ProductList'
import { useTelegram } from './hooks/useTelegram'



function App() {

	const { onToggleButton, tg } = useTelegram()

	useEffect( () => {
		tg.ready()
	}, [])

	return (
		<div className="App">
			<Header />
			{/* <Button onClick={ onToggleButton }>toggle</Button> */}
			<Routes>
				<Route index element={ <ProductList /> } />
				<Route path={'/form'} element={ <Form /> }/>
			</Routes>
		</div>
	);
}

export default App
