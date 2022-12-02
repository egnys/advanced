import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";
import {useJsApiLoader} from "@react-google-maps/api";

// const API_KEY = process.env.REACT_APP_API_KEY;
// console.log(API_KEY)
// const defaultCenter = {
//     lat: -3.745,
//     lng: -38.523
// };
function App() {
    // const { isLoaded } = useJsApiLoader({
    //     id: 'google-map-script',
    //     googleMapsApiKey: API_KEY})

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/*<Route path='/main' element={isLoaded ? <Main center={defaultCenter}/> : <h2>LOADING</h2>}/>*/}
        <Route path='/main' element={<Main/>}/>
      </Routes>

    </div>
  );
}

export default App;
