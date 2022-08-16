import React,{useEffect,useState} from 'react';
import "./App.css";

function App(){

  const[users,setUsers]=useState([]);
  const[searchQuery,setSearch]=useState('');
  const [searched,setSearched]=useState([]);
const getData=()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setUsers(json));
}

useEffect(()=>{
  getData()
},[])

useEffect(()=>{
//if search happens
  if(searchQuery){
  setSearched(
users.filter((user)=>{
  //first convert object into array using Object.values
  //then convert all array into string using join
  return Object.values(user).join('').toLowerCase().includes(searchQuery.toLowerCase())
})
  )}
  else{
    setUsers(users);
  }
},[searchQuery])

  return(
    <div className="App">
    <input onChange={(e)=>setSearch(e.target.value)} className='search' placeholder='search users...'/>
  <div className="grid-main">
  {searchQuery.length>0?(
    searched.map((search)=>{
      return(
        <div className='grid-child'>
        <h2>{search.name}</h2>
        <p>{search.username}</p>
        </div>
      )
    })
  ):(users.map((user)=>{
    return(
    <div className='grid-child'>
    <h2>{user.name}</h2>
    <p>{user.username}</p>
    </div>
  )
}))}
    </div>   
    </div>
  )     
}

export default App;
