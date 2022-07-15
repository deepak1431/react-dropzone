import logo from './logo.svg';
import './App.css';
import Dropzone from "./Components/Dropzone"
import Filetype from "./Components/Filetype"
import Filesize from './Components/Filesize';
function App() {
  return (
    <div className="App">
      <Dropzone/> <br/><br/>    
      <Filetype/><br/><br/>
      <Filesize/>
     </div>
  );
}

export default App;
