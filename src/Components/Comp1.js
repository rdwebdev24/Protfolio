import React from 'react'

function Comp1(props) {
     const {transArr} = props
     let Balance = 0;
     let income = 0;
     let expense = 0;
     transArr.forEach(element => {
          Balance += parseInt(element.Amount)
          if( parseInt(element.Amount) > 0){
               income +=  parseInt(element.Amount)
          }
          if( parseInt(element.Amount) < 0){
               expense +=  parseInt(element.Amount)
          }
     });
  return (
     <div className= 'text-start' >
      <h2>Expense Tracker</h2>
      <p className='mb-0 mt-4'>YOUR BALANCE</p>
      
     <h1 className='mb-3'>₹{Balance.toFixed(2)}</h1>
      <div id='inc_expCard' className="container text-center w-75 p-2 bg-white">
           <div  className="row fw-bold fs-5">
                <div className="col-md-6">
                     <p>INCOME</p>
                     <p className='text-success'>${income.toFixed(2)}</p>
                </div>
                <div className="col-md-6">
                     <p>EXPENSE</p>
                     <p className='text-danger'>${expense.toFixed(2)}</p>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Comp1
