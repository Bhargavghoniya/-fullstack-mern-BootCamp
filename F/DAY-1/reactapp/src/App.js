//import logo from './logo.svg';
import './App.css';
//import Home from './Home';


function App() {
  let a =10;
  let b = "bhargav"
  let c = true
  let arr = ["red","blue","green","white","black"]
  return (
    <div>
      <h1>a</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{JSON.stringify(c)}</h1>
      {/* <h1>{arr}</h1> */}
      {
        arr.map((item,index)=>{
          return <h1>{item}</h1>
        })
      }
    </div>

  );
}

export default App;
