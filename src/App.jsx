import { useState } from 'react'
import {returnInitData} from './data/returnInitData.js'
const [personalTemplateObj, educationalTemplateObj, professionalTemplateObj] = returnInitData()
import styles from './components/form.css'
import Experience  from './components/Experience.jsx'
import './App.css'

function Row ({label, defValue, tempData}) {
  const [value, setValue] = useState("")
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

function Form ({title, stateArray, setStateArray, temporaryEntry, editedExperience, setEditedExperience}) {
  function handleSubmit() {
    let stateArrayCopy = structuredClone(stateArray)
    console.log(stateArray)
    if (editedExperience.index== null)  {
      stateArrayCopy.push(temporaryEntry)
    }
    else {
      stateArrayCopy[editedExperience.index]=temporaryEntry
    }
    console.log(stateArray)
    setStateArray(stateArrayCopy)
  }
  let rows = Object.entries(temporaryEntry).map(([key, value]) =>  {
    return (<Row label={key} defValue={value} tempData={temporaryEntry} />)
  });
    return (<div className='form'>
      <div className='form-rows'>{rows}</div>
      <div className='form-submit'>
        <button onClick={handleSubmit}>Submit</button>
      </div>


    </div>
    )
}
function Section ({title, state, setState, editedExperience, setEditedExperience}) {
  let count=0
  return (
      <div className="section">
          <div className="section-heading">
              {title}
          </div>
          <div className='section-content'>
              { 
                  state.map((State)=> {
                    count ++
                    return <Experience type="edu" state={State} stateArray={state} id={count-1} setState={setState} setEditedExperience={setEditedExperience}/>
                  })
              }
          </div>
      </div>
  )
}

function Heading ({state}) {
  return (
      <div className="personal-details">
          <div className='personal-content'>
              <h1>{state[state.length-1].FullName}</h1>  
              <h2>✉{state[state.length-1].Email} 📞{state[state.length-1].PhoneNumber} 📍{state[state.length-1].Address}</h2>
          </div>
      </div>
  );
};

function App() {
  const [personalEntries, setPersonalEntries] = useState([])
  const [educationalEntries, setEducationalEntries] = useState([])
  const [professionalEntries, setProfessionalEntries] = useState([])
  const [editedExperience, setEditedExperience] = useState({index:null, type:null})
    return (
    <>
      <div className='forms'>
        <Form title="Personal Details" stateArray={personalEntries} setStateArray={setPersonalEntries} temporaryEntry={structuredClone(returnInitData()[0])} editedExperience={editedExperience} setEditedExperience={setEditedExperience} />
        <Form title="Education" stateArray={educationalEntries} setStateArray={setEducationalEntries} temporaryEntry={structuredClone(returnInitData()[1])} editedExperience={editedExperience} setEditedExperience={setEditedExperience} />
        <Form title="Professional" stateArray={professionalEntries} setStateArray={setProfessionalEntries} temporaryEntry={structuredClone(returnInitData()[2])} editedExperience={editedExperience} setEditedExperience={setEditedExperience} />
      </div>
      <div className='resume'>
        {((JSON.stringify(personalEntries) != JSON.stringify([])) && (JSON.stringify(educationalEntries != JSON.stringify([]))) && (JSON.stringify(professionalEntries) !=([])))?
        <>
          <Heading state={personalEntries}/>
          <Section title="Education" state={educationalEntries} setState={setEducationalEntries} editedExperience={editedExperience} setEditedExperience={setEditedExperience}/>      
          <Section title="Professional Experience" state={professionalEntries} setState={setProfessionalEntries} editedExperience={editedExperience} setEditedExperience={setEditedExperience}/>
        </>:null}      
      </div>
    </>
    )
}

export default App
