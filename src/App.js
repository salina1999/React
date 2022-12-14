import logo from './logo.svg';
import './App.css';

function App() {
  
  let post = '블로그 글 제목';

    return (
    <div className="App"> 
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4 style={ { color : 'red', fontSize : '16px' } }>{ post }</h4>
      <img></img>
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
