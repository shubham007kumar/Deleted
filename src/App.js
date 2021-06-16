import React,{useState,useEffect} from 'react'
import "./App.css";
import { Routes } from "./Routes/Routes";
import { BoltLoader } from "react-awesome-loaders";

function App() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])
  return (  
    <div className={loading ? "second" :"App"}>
        {
          loading ?
          <BoltLoader
          className="loader"
          boltColor={"#6366F1"}
          backgroundBlurColor={"#E0E7FF"}
        />:
        <Routes />
        }
    </div>
  );
}

export default App;
