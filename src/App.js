import { useEffect, useState } from 'react';
function App() {
  const [data,setData] = useState([]);
  const [search,setSearch]=useState("");
  useEffect(()=>{
    fetch("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json")
            .then((res) => res.json())
            .then((json) => {
              
                setData(JSON.parse(JSON.stringify(json)));
            });
  },[])
 
  function SearchBtn(){
    console.log(search);  
    const searched_item = data.filter(val=>val.name.indexOf(search) !==-1)
    console.log(searched_item)
    if(searched_item !==null){
      setData(searched_item) 
    }
    else{
      return(<h1>NOTHING FOUND</h1>)
    }
    
  }

  return (
    <div className="App">
      <input className='search-input'  placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <button className='search-button' onClick={()=>SearchBtn()}>Search</button>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"20px"}}>
      {data.map(item=> {
        return(
          
          <div style={{margin:"10px",backgroundColor:"gray"}}>
            <div><img src={item.flag}/></div>
            <div style={{marginLeft:"15px"}}>
              <p>
                 Population: {item.population} <br /> 
                 Region: {item.region} <br />
                 Captial: {item.capital} <br />

              </p>
            </div>
          </div>
        )
      })}
    </div>
    
    </div>
  );
}

export default App;
{/* <div>
        <div><img src={item.flag}/></div>
        <div>
          <h5>Population</h5><h6>{item.population}</h6>
          <h5>Region</h5><h6>{item.region}</h6>
          <h5>Captial</h5><h6>{item.capital}</h6>
        </div>
      </div> */}