import { Analytics } from './Components/Analytics';
import Wrapper from './Components/Wrapper';
import { BrowserRouter, Routes , Route, useNavigate } from 'react-router-dom';
import Style from './Style.css'
import './App.css';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Wrapper/>} />
          <Route path='/Analytics' element={<Analytics/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
