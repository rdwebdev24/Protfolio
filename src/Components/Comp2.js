import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Comp2({transArr , clearAll, deleteOne}) {
  const [openDescriptions, setOpenDescriptions] = useState([]);

  const toggleDescription = (index) => {
    const updatedOpenDescriptions = [...openDescriptions];
    updatedOpenDescriptions[index] = !updatedOpenDescriptions[index];
    setOpenDescriptions(updatedOpenDescriptions);
  };
  return (
    <div style={{margin:"1rem 0"}}>
      <h3 className='text-start'>History</h3>
      <hr />
      <div className="container">
           <div style={{gap:"0.5rem"}} className="row  d-flex flex-column">
                {transArr.length?"":"No transaction history"}
                {transArr.map((item , index)=>{
                     var amt = parseInt(item.Amount)
                     return  <div  onClick={() => toggleDescription(index)} id='card' key={Math.random()*Math.random()} className="bg-white col d-flex flex-column" style={{borderRight:`${(amt <= 0)?"4px solid red":"4px solid green"}`}}>
                     <div className='trans-info'>
                         <span>{item.Name}</span> 
                         <span>{amt}</span> <span style={{cursor:"pointer"}} className='delete-btn' onClick={()=>deleteOne(index)}><AiFillDelete/></span>
                    </div>
                     <div className={`description ${openDescriptions[index] ? '' : 'hidden'}`}>{item.Desc}</div>
                </div>
                })}
                <div>
                     {transArr.length?<button onClick={clearAll} className="mt-2 w-100 btn btn-danger">Clear All</button>:''}
                </div>
           </div>
      </div>
    </div>
  )
}

export default Comp2
