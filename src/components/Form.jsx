import Row from './Row.jsx'
import './form.css'
import uuid from 'react-uuid';

export default function Form ({title, stateArray, setStateArray, temporaryEntry, editedExperience, setEditedExperience}) {
  let isClear = false
  function handleSubmit() {
    let stateArrayCopy = structuredClone(stateArray)
    console.log(stateArray)
    if (editedExperience){
      if (editedExperience.index== null)  {
        stateArrayCopy.push(temporaryEntry)
      }
      else {
        stateArrayCopy[editedExperience.index]=temporaryEntry
        if (editedExperience.index != null) setEditedExperience(null)
      }
    } else{
      stateArrayCopy.push(temporaryEntry)
    }
    console.log(stateArray)
    setStateArray(stateArrayCopy)
    isClear = true
    console.log("isClear is now: ", isClear)
  }
  let rows = Object.entries(temporaryEntry).map(([key, value]) =>  {
    return (<Row label={key} defValue={value} tempData={temporaryEntry} isClear={isClear} key={uuid()}/>)
  });
    return (<div className='form'>
      <div className='form-rows'>{rows}</div>
      <div className='form-submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>


    </div>
    )
}