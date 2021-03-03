import { Provider } from "react-redux";

import './App.css';

import Home from "./components/navbar/Home";
import store from './components/store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
      <Home/>
    
    
    
    
      </Provider>
  
    </div>
  );
}

export default App;
