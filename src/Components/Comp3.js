import React from 'react'

function Comp3(props) {
     const {transaction , settransaction , setTrans} = props
  return (
    <div className='text-start m-3'>
      <h3>Add new transaction</h3>
      <hr />
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Text</label>
  <input  onChange={(e) => settransaction({...transaction , Name:e.target.value})} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Text"/>
</div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Amount(-ve or +ve Expense)</label>
  <input  onChange={(e) => settransaction({...transaction , Amount:e.target.value})} type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Amount"/>
</div>
<div>
     <button onClick={()=>setTrans('form-control')} className="add btn w-100 text-white" style={{backgroundColor:"purple"}}>Add transaction</button>
</div>

    </div>
  )
}

export default Comp3
