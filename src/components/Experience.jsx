import DataCell from "./DataCell";
import DateCell from "./DateCell";

export default function Experience ({type, state, stateArray, id, setState}) {

    function removeElemfromArr (array, elem) {
        let arr = array.slice(0, array.indexOf(elem))
        let arr2 = array.slice(array.indexOf(elem)+1)
        let arr3 = arr.concat(arr2)
        console.log("array: ",array, "\narr3: ", arr3)
        return arr3
    }
    function handleDelete (event) {
        console.log(stateArray)
        let stateArrayCopy = structuredClone(stateArray)
        let elementID = parseInt(event.target.parentNode.parentNode.id)
        console.log(elementID)
        let updatedStateCopy = removeElemfromArr(stateArrayCopy, stateArrayCopy[elementID])
        console.log(updatedStateCopy)
        setState(updatedStateCopy)
    }

    return (
    <div className="row" id={id}>
        <div className="modify-buttons delete-experience">    
            <button className="material-symbols-outlined" onClick={(event) => handleDelete(event)}>
                delete
            </button>
            <button className="material-symbols-outlined edit-experience" onClick={(event) => handleEdit(event)}>
                edit
            </button>
        </div>
        <div className="experience-content">
            <DateCell fromDate={state.StartDate} tillDate={state.EndDate} location={state.Location}/>
            <DataCell type={type} institution={state.Institution} positionTitle={state.Title} description={state.Description}/>
        </div>
    </div>
    )
}