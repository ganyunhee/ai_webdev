import { createStore } from 'redux';

// 카드 개별 항목에 대한 내용을 담은 배열
// detail : 상세 페이지에 담고 싶은 내용을 객체 literal로 표현한 키 
const contents = [
  { 
    path:"/miles_morales",
    imagePath: "https://www.acrossthespiderverse.movie/images/gallery/img14.jpg",
    title: "Miles Morales",
    character: "I'm Miles Morales",
    detail: {
      description: "This is Miles Morales as Spiderman.",
      detailImage: "spiderman.png",
      videoSrc: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/nSUXpCgMP2A?autoplay=1&controls=0&loop=1&playlist=nSUXpCgMP2A&disablekb=1&mute=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
  },{ 
    path:"/peter_b_parker",
    imagePath: "https://www.acrossthespiderverse.movie/images/gallery/img11.jpg",
    title: "Peter B. Parker",
    character: "I'm Peter B. Parker",
    detail: {
      description: "This is Peter B. Parker as Spiderman.",
      detailImage: "spiderman.png",
      videoSrc: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y1eHbus2JSY?autoplay=1&controls=0&loop=1&playlist=Y1eHbus2JSY&disablekb=1&mute=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
  },{ 
    path:"/miguel_ohara",
    imagePath: "https://www.acrossthespiderverse.movie/images/gallery/img5.jpg",
    title: "Miguel O'Hara",
    character: "I'm Miguel O'Hara",
    detail: {
      description: "This is Miguel O'Hara as Spiderman 2099.",
      detailImage: "spiderman.png",
      videoSrc: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Utxk5ankUvw?autoplay=1&controls=0&loop=1&playlist=Utxk5ankUvw&disablekb=1&mute=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
  },{
    path:"/gwen_stacy",
    imagePath: "https://www.acrossthespiderverse.movie/images/gallery/img9.jpg",
    title: "Gwen Stacy",
    character: "I'm Gwen Stacy",
    detail: {
      description: "This is Gwen Stacy as Spider-Woman.",
      detailImage: "spiderwoman.png",
      videoSrc: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Vb3tieuZR6c?autoplay=1&controls=0&loop=1&playlist=Vb3tieuZR6c&disablekb=1&mute=1&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    }
  }
]


// 이 앱에서는 상태에 대한 변경 진행하지 않음
function reducer(state, action) {
  return { contents } ;
}

// reducer : 상태관리를 담당한 함수
// reducer를 전달받아서 저장소를 생성하는 함수는 createStore
export const store = createStore(reducer);