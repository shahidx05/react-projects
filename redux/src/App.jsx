import Counter from "./Counter";
import CustomCounter from "./CustomCounter";
import './App.css'

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>

      <Counter />       
      <CustomCounter />  
    </div>
  );
};

export default App;