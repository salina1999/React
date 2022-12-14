/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  //let post = '블로그 글 제목';

  let [글제목, set글제목1] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // ['남자코트추천', 함수] 남음
 
  // state : 자료(변수) 보관
  // usestate사용
  // 1. import usestate
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명] => a: state에 보관했던 자료나옴, b: state 변경을 도와주는 함수
  // state는 변경되면 html은 자동 랜더링 되기 때문에 변수대신 state를 쓴다.


  // let num = [1, 2]; // 여기있던걸(1,2) 변수로 빼고싶다
  // let [a, c] = [1, 2]; //Destructuring문법: 각각을 a와 b로 빼서씀
  // let a = num[0]; 
  // let c = num[1];

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <h4 style={ { color : 'red', fontSize : '16px' } }>{ post }</h4> */}
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{글제목[3]}</h4>
        <p>2월 17일</p>
      </div>
    </div>
  );
}
// JSX 문법
// 1. class대신 className사용
// 2. 변수넣을땐 {중괄호} = 데이터바인딩
// 3. style 넣을 땐 style={}
// 4. 자바스크립트에서 -는 진짜 마이너스기때문에 fontSizefk TJdieoa
// fontSize => 카멜케이스
// 오류는 터미널 or 브라우저(개발자도구 console)에서 확인 후 디버깅


export default App;
