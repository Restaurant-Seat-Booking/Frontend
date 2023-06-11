import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

// ReactDOM.render(<App />,document.getElementById("root"))
export default App
