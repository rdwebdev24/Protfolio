import React, { useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

function Wrapper() {
     const [transaction , settransaction] = useState({Name:"" , Amount:""})
     const [transArr ,  settransArr] = useState([])
     const  [rerender , setrerender] = useState(false)

     const setTrans = (e) => {
          transArr.push(transaction)
          setrerender(!rerender)
          let a =  document.getElementsByClassName(e)
          Array.from(a).forEach(item=>{
               item.value = ''
          })
     }
     const clearAll = () => {
          settransArr([])
          console.log(transArr)
     }
  return (
   <div id='Wrapper' className='mx-auto' style={{width:'40%'}}>
     <Comp1 transArr={transArr}/>        
     <Comp2 transArr={transArr} clearAll={clearAll}/>
     <Comp3 transaction={transaction} settransaction={settransaction} setTrans={setTrans}/>
   </div>
  )
}

export default Wrapper
