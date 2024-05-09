import Button from './Button';
import Dice from './Dice';

function App() {
  return (
    <div>
      <Button>던지기</Button>
      <Button>처음부터</Button>
      <Dice color="red" num={4} />
    </div>
  );
}

export default App;





/*import HandButton from './HandButton';

function App() {
    const handleClick = (value) => console.log(value);
  return (
    <div>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App; */
