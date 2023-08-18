import React from 'react'
import { useDispatch } from 'react-redux'
import { Title, Button } from './styledComponents'

const Home = () => {
    const dispatch = useDispatch()
    return <div style={{ textAlign: 'center' }}>
        <Title>
            <h1>MBTI Test</h1>
        </Title>
        <Button onClick={() => dispatch({ type: 'BEGIN'})}>시작하기</Button>
    </div>
}


export default Home