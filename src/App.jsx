import { useState } from "react";
 import './App.css';

 function App(){
  const[weight, setWeight] = useState("");
  const[height, setHeight] = useState("");
  const[bmi, setBmi] = useState(null);
  const[status, setStatus] = useState("");

  const calculateBmi=(e)=>{
    e.preventDefault()
    if(weight>0 && height>0){
      const Result = (weight/ (height* height)).toFixed(2);
    
    setBmi(Result);

    // condition
    if(Result<18.5){
      setStatus("Under Weight");
    }
    else if(Result>=18.5 && Result<=24.8){
      setStatus("Normal Weight");
    }
    else{
      setStatus("Over Weight");
    }
    } 
    else{
      setBmi(null);
      setStatus("Please enter valid values");
    } 
  };

  return(
    <>
    <h1>BMI Calculator</h1>
    <div>
      <form >
        <div><label htmlFor="weight">Weight : </label></div>
        <div><input type="number" name="weight" id="weight" placeholder="enter your weight" onChange={(e)=>setWeight(e.target.value)}/></div>
        <div><label htmlFor="height">Height : </label></div>
        <div><input type="number" name="height" id="height" placeholder="enter your height" onChange={(e)=>setHeight(e.target.value)}/></div>
        <div><button type="submit"  onClick={calculateBmi}>Get</button></div>
      </form>
      {bmi && (
      <div>
        <h3>Your BMI: {bmi}</h3>
      <h3>Status: {status}</h3>
      </div>
     )}
    </div>
    </>
  )
 }
 export default App;