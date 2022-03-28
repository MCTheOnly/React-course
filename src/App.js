import './App.css';
import Header from './Header'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        {/* <h1>{title}</h1>
        <p>{number}</p>
        <p>{obj.name}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random()}</p> */}
      </div>
    </div>
  );
}

export default App;
