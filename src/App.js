import { useState } from 'react';
import './App.css';
import dummy_data from './component/dummy_data.json';

function App() {
const [searchTerm, setSearchTerm] = useState('')
 
const filterByName = () => {

    const newArray = dummy_data.filter(
      (ele) => ele.gender === 'Trans' 
    );
    console.log(newArray);
    return newArray || [];
  };

  return (
    <div className="App">
      <input type='text' placeholder= "search text... " onChange={event => {setSearchTerm(event.target.value)}}/>
     <ul>
    { //this is to map data as per input search term 
      dummy_data.filter((val)=> {
        if(searchTerm == ''){
          return val //if serch term is empty it will return everything in the data
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){  //toLowerCase i used this because it is case sensitive
          return val
        }
      }).map((obj) => (
             <li key={obj.id}>{obj.name}</li>
         ))
    } ,  
    </ul>

      <h1>Short Array of obj alphabetically</h1>
    { 
      dummy_data.sort(function (a, b) {
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
            if (nameA < nameB) //sort string ascending
              return -1;
            if (nameA > nameB)
              return 1;
            return 0; //default return value (no sorting)
          }).map((obj) => (
             <li key={obj.id}>{obj.name}</li>
         ))
    }
    

    {/* { //this is to map entire data 
      dummy_data.map((obj) => (
             <li key={obj.id}>{obj.name}</li>
         ))
    } ,   */}
   
    {/* { //this to filter set of array obj by a function and map the data .
      filterByName().map((obj) => (
             <li key={obj.id}>{obj.name}</li>
         ))
    }  */}

        

  
    </div>
  );
}

export default App;
