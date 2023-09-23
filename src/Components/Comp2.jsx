import React, { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Comp2({transArr , clearAll, deleteOne}) {
     const [activeIndex, setActiveIndex] = useState(null);

     const toggleDescription = (index) => {
       if (activeIndex === index) {setActiveIndex(null);}
       else {setActiveIndex(index);}
     document.querySelectorAll('.description').forEach((item,id)=>{
          const displayStyle = index === id ? 'flex' : 'none';
          item.style.display = displayStyle;
     })
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
                     return  <div  onClick={() => toggleDescription(index)} id='card' key={Math.random()*Math.random()} className="bg-white col d-flex flex-column" style={{borderRight:`${(amt < 0)?"4px solid crimson":"4px solid green"}`}}>
                     <div className='trans-info'>
                         <span>{item.Name}</span> 
                         <span>{amt}</span> <span style={{cursor:"pointer"}} className='delete-btn' onClick={()=>deleteOne(index)}><AiFillDelete/></span>
                    </div>
                     <div  className={`description ${activeIndex === index ? 'active' : ''}`}>
                         <span>{item.Desc}</span>
                         <span style={{fontSize:"0.8rem"}}> <b> {item.date} </b> </span>
                     </div>
                </div>
                })}
                <div style={{padding:0}}>
                     {transArr.length?<button onClick={clearAll} className="mt-2 w-100 btn btn-danger">Clear All</button>:''}
                </div>
           </div>
      </div>
    </div>
  )
}

export default Comp2
