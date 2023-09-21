import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Comp2(props) {
     const {transArr , clearAll, deleteOne} = props
  return (
    <div className='m-3'>
      <h3 className='text-start'>History</h3>
      <hr />
      <div className="container">
           <div className="row  d-flex flex-column">
                {transArr.length?"":"No transaction history"}
                {transArr.map((item , index)=>{
                     let amt = parseInt(item.Amount)
                     return  <div key={Math.random()*Math.random()} className="bg-white col my-2 py-2 d-flex flex-row justify-content-between" style={{borderRight:`${(amt <= 0)?"4px solid red":"4px solid green"}`}}>
                     <span>{item.Name}</span> <span>{amt}</span> <span style={{cursor:"pointer"}} className='delete-btn' onClick={()=>deleteOne(index)}><AiFillDelete/></span>
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
