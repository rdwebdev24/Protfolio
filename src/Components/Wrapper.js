import React, { useEffect, useState } from 'react'
import {FaPlus} from 'react-icons/fa'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'

function Wrapper() {
     const [transaction , settransaction] = useState({Name:"" , Amount:""})
     const [transArr ,  settransArr] = useState(localStorage.getItem('expenseArr')?JSON.parse(localStorage.getItem('expenseArr')):[])
     const  [rerender , setrerender] = useState(false)

     const setTrans = (e) => {
          if(transaction.Name=="" || transaction.Amount==""){alert("cant set empty transaction");return;}
          transArr.push(transaction);
          var form =  document.getElementsByClassName(e)
          Array.from(form).forEach(item=>item.value = '');
          settransaction({Name:"",Amount:""})
          localStorage.setItem("expenseArr",JSON.stringify(transArr))
          setrerender(!rerender)
     }
     const clearAll = () => {
          settransArr([]);
     }
     const deleteOne = (id) => {
          var filterArr
          filterArr = transArr.filter((item,index)=>index!=id);
          console.log(filterArr);
          settransArr(filterArr);
     }
     useEffect(()=>{
          localStorage.setItem("expenseArr",JSON.stringify(transArr))
     },[transArr])
     
  return (
   <div id='Wrapper' className='mx-auto'>
     <Comp1 transArr={transArr}/>        
     <Comp2 deleteOne={deleteOne} transArr={transArr} clearAll={clearAll}/>
     <Comp3 transaction={transaction} settransaction={settransaction} setTrans={setTrans}/>
     <div onClick={()=>{document.querySelector('#form').style.display = "block"}} className='add-btn'><FaPlus/></div>
   </div>
  )
}

export default Wrapper
