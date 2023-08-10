
import React, { useState, useEffect } from 'react';

// 자바스크립트 배열
//const foods = ["떡만두국", "돈까스", "오렌지"];

// 요소로 구성된 배열은 알아서 렌더링된다
export default function Sample(){
    const [ foods, setFoods ] = useState(["떡만두국", "돈까스", "오렌지"]);

    useEffect(() => {
        const result = window.localStorage.getItem("Food List")
        console.log(result)
    }, [])

    return <>
    <ul>
        {foods.map((food, index) => {
            return <li key={index}>{food}</li>
        })}
    </ul>
    <button onClick={() => {
        setFoods([...foods, "꽈배기"])
    }}>꽈배기 추가</button>
    <button onClick={() => {
        window.localStorage.setItem("Food List", foods)
    }}>음식물 영구저장</button>
    </>
}