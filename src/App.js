import React, {useState, useEffect} from 'react'
import "./App.css"
import All from './All'



function App  () {

  const [data,setData] = useState(null)

  useEffect(() => {
    go()
  }, [])
  
  const go = async ()=>{
    let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    let data = await resp.json()
    setData(data.drinks)
  }
  const search=(val)=>{
    let name = val
    let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
    if(name=== 'Non_Alcoholic'){
      find(name, url)
    }else if(name === 'Alcoholic'){
      find(name, url)
    }else{
      go()
    }
  }

  const find = async (name, url)=>{
    let resp  = await fetch (url+name)
    let data = await resp.json()
    setData(data.drinks)
  }

  const filterByName= async (val)=>{
    if(val !== ''){
      let resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+val)
      let data = await resp.json()
      setData(data.drinks)
    }
    else{
      go()
    }

  }
    return (
      <div >
        <div className="header">
        <h1>COCTAILS</h1>
        <input 
            placeholder="Search coctail by name"
            type="text"
            onChange={(e)=>{
              filterByName(e.target.value)
            }}
         />
        <select onChange={(e)=>{
          search(e.target.value)
        }}>
          <option value="Coctail">ALL</option>
          <option value="Non_Alcoholic">NON-ALC</option>
          <option value="Alcoholic">ALC</option>
        </select>
        </div>
        <div className="all">
        {data ? 
          data.map(elem=>{
            return (
            <All coctail = {elem}/>
            )
          }):null
        }
        </div>
      </div>
    )
      }
      export default App