import axios from 'axios'
import {useState} from 'react'

function App() {

  let [count,setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={()=>{
        axios.get('/api/counter').then(result=>{
          setCount(result.data)
        })
      }}>counter</button>
      <div>
        count : {count}
      </div>
    </div>
  );
}

export default App;
