import { useState } from 'react'
import {returnInitData} from './data/returnInitData.js'
import styles from './components/form.css'
import Experience  from './components/Experience.jsx'
import Form from './components/Form.jsx'
import Heading from './components/Heading.jsx'
import Section from './components/Section.jsx'
import './App.css'

const [personalTemplateObj, educationalTemplateObj, professionalTemplateObj] = returnInitData()




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
