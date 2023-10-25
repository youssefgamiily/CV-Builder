import Experience from "./Experience"
import styles from '../assets/Section.css'
export default function Section ({title, state, setState, editedExperience, setEditedExperience}) {
    let count=0
    let type
    if (title==="Professional Experience") type="prof"
    else type="edu"
    return (
        <div className="section">
            <div className="section-heading">
                {title}
            </div>
            <div className='section-content'>
                { 
                    state.map((State)=> {
                      count ++
                      return <Experience type={type} state={State} stateArray={state} id={count-1} setState={setState} setEditedExperience={setEditedExperience}/>
                    })
                }
            </div>
        </div>
    )
  }