export default function DateCell ({fromDate, tillDate, location}) {

    return(
        <div className="dateCell">
            <h3>{fromDate} - {tillDate}</h3>
            <h3>{location}</h3>
        </div>
    )
}