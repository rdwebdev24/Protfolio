import React, { useEffect, useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

function Wrapper() {
     const [transaction , settransaction] = useState({Name:"" , Amount:""})
     const [transArr ,  settransArr] = useState(localStorage.getItem('expenseArr')?JSON.parse(localStorage.getItem('expenseArr')):[])
     const  [rerender , setrerender] = useState(false)

     const setTrans = (e) => {
          transArr.push(transaction);
          var form =  document.getElementsByClassName(e)
          Array.from(form).forEach(item=>item.value = '')
          localStorage.setItem("expenseArr",JSON.stringify(transArr))
          setrerender(!rerender)
     }
     const clearAll = () => {
          settransArr([]);
     }
     useEffect(()=>{
          localStorage.setItem("expenseArr",JSON.stringify(transArr))
     },[transArr])
     
  return (
   <div id='Wrapper' className='mx-auto' style={{width:'40%'}}>
     <Comp1 transArr={transArr}/>        
     <Comp2 transArr={transArr} clearAll={clearAll}/>
     <Comp3 transaction={transaction} settransaction={settransaction} setTrans={setTrans}/>
   </div>
  )
}

export default Wrapper
