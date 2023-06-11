import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Restaurant from './components/Restaurant';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Restaurant />
    </>
  );
}

// ReactDOM.render(<App />,document.getElementById("root"))
export default App
