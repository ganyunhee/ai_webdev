import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from './styledComponents'
import Home from './Home'
import Game from './Game'

const App = () => {
	const isTestBegin = useSelector((state) => state.isTestBegin)
	return <Container>
		{isTestBegin ? <Game /> : <Home />}
	</Container>
}

export default App