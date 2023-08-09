import { useState } from 'react'
import "./App06.css"

function App() {
    
    const [ lottoNumbers, setLottoNumbers ] = useState([]);
    
    const [ animate, setAnimate] = useState(false);

    const handleButtonClick = () => {
        setAnimate(true);

        setTimeout(() => {
            setAnimate(false);
        }, 500);
    };

    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    const now = `${year}년 ${month}월 ${date}일`

    return <div className='container'>
        <div className = 'lotto'>
            <h1>{"<< LOTTO NUMBERS >>"}</h1>
            <h3>{"--"}{now}{"--"}</h3>
            <div className='numbers'>
                {/* map을 이용한 컴포넌트 렌더링 시에는, 개별 요소에 key 속성을 추가한다! */}
                {lottoNumbers.map((num, idx) => {
                    return <div className={`eachnum ${animate ? 'animate__animated animate__bounceIn' : ''}`} key={idx}>{num}</div>
                })}
            </div>
            <button onClick={() => {
                const temp = []
                while(temp.length < 6){
                    let ran = Math.floor(Math.random() * 45) + 1
                    if(temp.indexOf(ran) === -1){
                        temp.push(ran)
                    }
                }
                setLottoNumbers(temp)
                handleButtonClick();
            }}>추첨</button>
            <button onClick={() => {
                setLottoNumbers([])
            }}>초기화</button>
        </div>
    </div>
}

export default App