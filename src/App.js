import React from "react";
import "./style.css";
import Header from './Header' 
export default function App() {
  const [name,setName] = React.useState("")
  function handlechg(e){
    setName(e.target.value)
  }
  return (
    <div >
      <Header props = {name}/>
      <input onChange={handlechg}/>
    </div>
  );
}
