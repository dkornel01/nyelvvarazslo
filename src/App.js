import './App.css';
import ReactDOM from "react-route-dom";
import {BrowserRouter,Routes,Route} from "react-route-dom";
import Gepel from './pages/Gepel';
import NoPage from './pages/NoPage';
import Rendez from './pages/Rendez';
import Valszto from './pages/Valszto';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<layout/>}>
        <Route index element={<jetekok />}/>
        <Route path="Gepel" element={<Gepel />}/>
        <Route path="Rendez" element={<Rendez />}/>
        <Route path="Valszto" element={<Valszto />}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
