import logo from './logo.svg';
import './App.css';
import Covid from "./components/covid";

function App() {
  const isBackgroundRed = true;
  
  return (
    <>
    <div  className='App'>
    <div className='App-header'>
    {/* <div style={{
      backgroundColor: isBackgroundRed ? 'black' : 'white', 
    }}> */}
    <Covid />
    {/* </div> */}
    </div>
    </div>
    </>
    
  );
}

export default App;
