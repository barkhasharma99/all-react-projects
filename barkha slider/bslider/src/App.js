import logo from './logo.svg';
import './App.css';
import MultiRangeSlider from './Component/Multirangeslider';

function App() {
  return (
    <div className="App">
        <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
    </div>
  );
}

export default App;
