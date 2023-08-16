import { useState } from 'react'

// react component는 상태가 변경될 때 re-rendering 된다

function App() {
    const [text, setText] = useState("")

    return <>
        <input type="text" placeholder='아무 내용' onChange={(e) => { setText(e.target.value) }}/>
        <p>{text}</p>
    </>
}

export default App