import logo from "./assets/logo.png";
import Board from "./Board";
import "./App.css";
import Button from "./Button";
import { useState } from "react";

// 함수형 컴포넌트 : 컴포넌트를 함수형으로 만든것(변수형으로도 만들 수있음)
//          함수형 컴포넌트를 만들때에는 함수명의 첫 글자는 반드시 대문자여야함
//          함수형 컴포넌트 안에서는 JSX 문법으로 만든 리액트 엘리먼트를 리턴해야함
// const style = {
//   backgroundColor: "#282828",
//   color: "#f5f5f5",
// };

// JSX에서는 객체지향 개념이 적용되기 때문에 clsss가 아니라 className으로 적어야한다.
// for ==> htmlFor, onclick/onblur ==> onClick/onBlur

function random(n) {
  return Math.ceil(Math.random() * n);
}

// let value;

// function useState(initialValue) {
//   if (value === undefined) {
//     value = initialValue;
//   }

//   const setState = (newValue) => {
//     value = newValue;
//   };

//   return [value, setState];
// }

function App() {
  // State
  // 던지기 버튼을 누르면 화면에서 주사위 이미지 변경. ==>HTML로 작성한다면 주사위 이미지마다 만들기
  // 비동기로 요소를 추가, 삭제하는 코드를 작성
  // 리액트에서는 State라는 것을 사용한다. State는 리액트에서 변수 같은 것인데 State가 바뀔때마다 리액트가 알아서 화면을 렌더링 해줌
  const nextMyNum = random(6);
  const nextOtherNum = random(6);

  // const [myNum, setMyNum] = useState(1);
  // const [otherNum, setOtherNum] = useState(1);
  const [gameHistory, setGameHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistroy] = useState([]);

  const handleRollClick = () => {
    // 주사위 숫자 뽑기.
    // setMyNum(nextMyNum);
    setGameHistory([...gameHistory, nextMyNum]); //gameHistory = [myNum];
    // setOtherNum(nextOtherNum);
    setOtherGameHistroy([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setGameHistory([]);
    setOtherGameHistroy([]);
  };

  // console.log(props.productName, props.price);
  // const { name, price } = props;
  return (
    <div className="App">
      <div>
        <img src={logo} alt="주사위게임 로고" className="App-logo" />
        <h1 className="App-title">주사위게임</h1>
        <div>
          <Button className="App-button blue" onClick={handleRollClick}>
            던지기
          </Button>
          <Button className="App-button red" onClick={handleClearClick}>
            처음부터
          </Button>
        </div>
      </div>
      <div className="App-boards">
        <Board name="나" color="blue" gameHistory={gameHistory} />
        <Board name="상대" color="red" gameHistory={otherGameHistory} />
      </div>
    </div>
  );
}

export default App;
