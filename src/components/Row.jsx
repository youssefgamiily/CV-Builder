import { useState } from 'react'
export default function Row ({label, defValue, tempData, isClear}) {
  const [value, setValue] = useState("")

  if (isClear === true)  {
    console.log("in Line 11")
    setValue("")
    isClear = false
  }
  function handleChange(event) {
    setValue(event.target.value)
    tempData[label]=event.target.value
  }

 return (
  <div className="row">
    <label htmlFor={label}>{label}</label>
    <input id={label} placeholder={defValue} onChange={(event) => handleChange(event)} value={value} />
  </div>
 ) 
}