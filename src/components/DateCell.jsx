export default function DateCell ({fromDate, tillDate, location}) {

    return(
        <div className="dateCell">
            <h4>{fromDate} - {tillDate}</h4>
            <h4>{location}</h4>
        </div>
    )
}