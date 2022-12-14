/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  //let post = '블로그 글 제목';

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

  let [글제목, set글제목] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); // ['남자코트추천', 함수] 남음
  let[따봉, 따봉변경] = useState(0);

  function 함수(){  // onClick안에는 무조건 함수만 가능 
    console.log(1);  
  }

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4>ReactBlog</h4>
        </div>

        <button onClick={()=>{

          let arr =[1, 2, 3]; // 1,2,3이라는 값이 Ram이란 공간에 저장되어있고 arr에는 1,2,3이 있는 위치가 저장되어있음

          let copy = [...글제목]; // 기존state == 신규state는 변환 안해줘서 ...문법 사용 그냥 글제목 적으면 log에 true뜸
          copy[0] = '여자코트 추천';
          console.log(copy==글제목);
          set글제목(copy);
        }}>
          글수정
        </button>
     
      {/* <h4 style={ { color : 'red', fontSize : '16px' } }>{ post }</h4> */}
      <div className='list'>
        <h4>{글제목[0]}<span onClick={함수}>👍</span>{ 따봉 }</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}<span onClick={() => { console.log(10) }} >👍</span>{ 따봉 }</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{글제목[3]}<span onClick={() => {따봉변경(따봉+1)} }>👍</span>{ 따봉 }</h4>
        <p>2월 17일</p>
      </div>
      {/* component 컴포넌트 : html더러워서 축약함 
          1. function 만들고
          2. return() 안에 html담기
          3. <함수명></함수명? 쓰기
      */}
      <Modal></Modal>
      
    </div>
  );

  function Modal(){
    return (
    // <></> : 의미없는 div가 쓰기싫을때
    <>
      <div className='modal'> 
        <h4>제목</h4>
        <p>닐짜</p>
        <p>상세내용</p>
      </div>
      <div></div>
    </>
  )}
}
// JSX 문법
// 1. class대신 className사용
// 2. 변수넣을땐 {중괄호} = 데이터바인딩
// 3. style 넣을 땐 style={}
// 4. 자바스크립트에서 -는 진짜 마이너스기때문에 fontSizefk TJdieoa
// fontSize => 카멜케이스
// 오류는 터미널 or 브라우저(개발자도구 console)에서 확인 후 디버깅


export default App;
