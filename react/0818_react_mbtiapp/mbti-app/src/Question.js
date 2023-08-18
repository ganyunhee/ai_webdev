import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { questioncontent } from './utilities/questioncontents'
import { Title, Button } from './styledComponents'

const Question = () => {
    const questionCount = useSelector((state) => state.questionCount)
    const dispatch = useDispatch()

    return <div>
		<Title>
			<h3>{questioncontent[questionCount].number}</h3>
			<h2>{questioncontent[questionCount].question}</h2>
		</Title>
		<Title>
            <Button onClick={() => dispatch({ type: 'INCREASE', quizType: questioncontent[questionCount].type })}>
                {questioncontent[questionCount].answer1}
            </Button>
			<br />
            <Button onClick={() => dispatch({ type: 'DECREASE', quizType: questioncontent[questionCount].type })}>
                {questioncontent[questionCount].answer2}
            </Button>
		</Title>
    </div>
}

export default Question