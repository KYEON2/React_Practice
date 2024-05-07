import ReactDOM from 'react-dom/client';
import App from './App';

/*const WINS = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock'
}

function getResult(left, right){
    if(WINS[left] === right) return '승리';
    else if(left === WINS[right]) return '패배';
    return '무승부';
}

const me = 'rock';
const other ='scissor';
const result = getResult(me, other);

function handleClick(){
    console.log('가위바위보');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <h1 id="title">가위바위보</h1>
        <h2>{result}</h2>
        <button onClick={handleClick}>가위</button>
        <button onClick={handleClick}>바위</button>
        <button onClick={handleClick}>보</button>
    </>
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
    </>
);


// 특정 상황이 주어졌을 때만 실행하도록 함
//useeffect-> 한번만 실행하고 싶은 함수 
//useEffect (배경을 바꾸는 함수)