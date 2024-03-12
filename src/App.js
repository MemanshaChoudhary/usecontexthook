import Child1 from './Components/Child1';
import './App.css';
import { createContext } from 'react';


const data = createContext();
const data1 = createContext();
function App() {
  const name= "Memansha";
  const age = 22;
  return (

<data.Provider value={name}>
  <data1.Provider value={age}>
        <Child1/>
  </data1.Provider>
</data.Provider>
  
  );
}

export default App;
export {data,data1};
