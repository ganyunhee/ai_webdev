import React from 'react'
import { useNavigate } from 'react-router-dom'; // useNavigate: component 이동 기록 다루는 함수


//속성으로 전달될 content 값을 받아서 화면을 구성하기
//props.content
const Detail = (props) =>{
  const navigate = useNavigate();
  return (
    <div className="wrapper" style={{paddingTop:20, textAlign:'center', color: 'white', overflow: 'hidden'}}>
      <p style={{padding: 10}}>{props.content.description}</p>
      <div dangerouslySetInnerHTML={{__html: props.content.videoSrc}} style={{position: 'absolute', top:0, left:0, width:'100%', height:'100%', userSelect: 'none', pointerEvents: 'none', zIndex: -1}}></div>
      <button style={{margin: 50, padding: 10, paddingLeft: 20, paddingRight: 20}} onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
}

export default Detail