import styled from 'styled-components'

export const Menu = styled.div`
  position: sticky; top: 0;
  width: 100%; height: 100px;
  font-size: 18px;
  color: #FFFFFF;
  display: flex; 
  justify-content: center;
  align-items: center;  
`
// 카드 여러개가 포함되는 컨테이너 블록
export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%; 
  margin: 0 auto;

  @media all and (max-width: 1600px){
    width: 80%;
  }
  @media all and (max-width: 1000px){
    width: 100%;
  }
  /*Center four cards at once*/
  * {
    flex: 0 0 calc(25% - 23px);
    margin-bottom: 20px;
  }
`

// 카드 한 장
// styled component --> '&'(ampersand) : 자기 자신
export const Item = styled.div`
  cursor: pointer;
  width: 25%; height: 400px;
  margin: 1%;
  border-radius: 20px;
  color: #FFFFFF;
  background-color: #393939;
  overflow: hidden;
  &:hover{
    transform: translate(0, -20px);
  }
  @media all and (max-width: 800px){
    width: 46%;
  }
  @media all and (max-width: 500px){
    width: 98%;
  }
`
export const Image = styled.div`
  height: 250px; 
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
export const ColorBox = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`