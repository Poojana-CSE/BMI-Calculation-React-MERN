import React,{ useState } from 'react'
const App = () => {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [result,setResult] = useState(null);
  const [value,setValue] = useState(null);
  const [error,setError] = useState(null);
  function calBMI(){
      const isValidHeight = /^\d+$/.test(height);
      const isValidWeight = /^\d+$/.test(weight);
      if(isValidHeight && isValidWeight){
      const bmi = Number(weight) / (Number(height/100) * Number(height/100));
      setValue(bmi.toFixed(2));
      if(bmi < 19){
        setResult("UnderWeighted");
      }
      else if(bmi >= 19 && bmi<=25){
        setResult("Normal!");
      }
      else{
        setResult("OverWeight");
      }
      setError(null);
    }
    else{
      setError("Invalid Valid!, Please Enter Valid Height And Weight")
    }
  }
  function reset(){
    setHeight(0);
    setWeight(0);
    setResult(null);
    setValue(0);
    setError(null);
  }
  return (
    <div>
      <h2>BMI Calculation</h2>
      <label>Height: </label>
      <input value={height} type='text' placeholder='Enter Height' onChange={(e)=>setHeight(e.target.value)}></input>
      <label>Weight: </label>
      <input value={weight} type='text' placeholder='Enter Weight' onChange={(e)=>setWeight(e.target.value)}></input>
      <p>{error}</p>
      <button onClick={calBMI}>Calculate BMI</button>
      <button onClick={reset}>Reset</button>
      <p>Your Height: {height}</p>
      <p>Your Weight: {weight}</p>
      <p>BMI Value: {value}</p>
      <p>BMI Status: {result}</p>
    </div>
  )
}
export default App

