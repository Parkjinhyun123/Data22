// import "./App.css";
import HandButton from "./HandButton";
import HandIcon from "./Handicon";
import "./Handicon.css";
import Reset from "./assets/ic-reset.svg";

function App() {
  const handleButtonClick = () => {
    alert();
  };

  return (
    <div>
      <h1>가위바위보</h1>
      <img src={Reset} alt="초기화" />
      <div className="App-scores">
        <div>
          <div>0</div>
          <div>나</div>
        </div>
        <div> : </div>
        <div>
          <div>0</div>
          <div>상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는곳 */}
          <div>
            <div className="Hand">
              <HandIcon value="rock" className="Hand-icon" />
            </div>
            <div>VS</div>
            <div className="Hand">
              <HandIcon value="paper" className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div>
            <span>배점</span>
            <input type="number" min={1} max={9} value={1} />
            <span>배</span>
          </div>
          {/* 기록 */}
          <div>
            <h2>승부기록</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" />
        <HandButton value="paper" />
      </div>
    </div>
  );
}

export default App;
