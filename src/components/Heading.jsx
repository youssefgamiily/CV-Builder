export default function Heading ({state}) {
    return (
        <div className="personal-details">
            <div className='personal-content'>
                <h1>{state[state.length-1].FullName}</h1>  
                <h2>✉{state[state.length-1].Email} 📞{state[state.length-1].PhoneNumber} </h2>
                <h2>📍{state[state.length-1].Address}</h2>
            </div>
        </div>
    );
  };