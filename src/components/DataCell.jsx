export default function DataCell({type, institution, positionTitle, description}) {
    if (type === "edu") {
        return (<div className="dataCell">
            <h3 className="institution">{institution}</h3>
            <h3 className="position">{positionTitle}</h3>
        </div>)
    }
    else if (type === "prof") {
        return(
            <div className="dataCell">
                <h3 className="institution">{institution}</h3>
                <h3 className="position">{positionTitle} ---</h3>
                <p className="description">{description}</p>
            </div>
        )
    }
} 