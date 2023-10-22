export default function DataCell({type, institution, positionTitle, description}) {
    if (type === "edu") {
        return (<div className="dataCell">
            <h2>{institution}</h2>
            <h3>{positionTitle}</h3>
        </div>)
    }
    else if (type === "prof") {
        return(
            <div className="dataCell">
                <h2>{institution}</h2>
                <h3>{positionTitle} ---</h3>
                <p>{description}</p>
            </div>
        )
    }
} 