import React, { useEffect, useState } from 'react'
import {FaPlus,FaUserCircle} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import { Sidebar } from './Sidebar'

function Wrapper() {
     const [transaction , settransaction] = useState({Name:"" , Amount:"",Desc:"no description :/",date:""})
     const [transArr ,  settransArr] = useState(localStorage.getItem('expenseArr')?JSON.parse(localStorage.getItem('expenseArr')):[])
     const  [rerender , setrerender] = useState(false)
     const [filterTransaction,setFilterTransaction] = useState([])

     const setTrans = (e) => {
          const date = new Date().toLocaleDateString().toString();
          transaction.date = date;
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
     const searchTransaction = (e) => {
          const searchval = e.target.value;
          var filterarr = [];
          filterarr = transArr.filter((item)=>{
               if(item.Name.includes(searchval) || item.Desc.includes(searchval)) return item
          })
          if(searchval.length==0)filterarr = []
          setFilterTransaction(filterarr)
     }
     useEffect(()=>{
          localStorage.setItem("expenseArr",JSON.stringify(transArr))
     },[transArr])
     
  return (
   <div id='Wrapper' className='mx-auto'>
     <Sidebar searchTransaction={searchTransaction} filterTransaction={filterTransaction}/>
     <nav id='navbar'>
          <div onClick={()=>{document.querySelector('#sidebar').style.transform = "translateX(0)"}} className="hamburger"><RxHamburgerMenu/></div>
          <div className="user"><FaUserCircle/></div>
     </nav>
     <Comp1 transArr={transArr}/>        
     <Comp2 deleteOne={deleteOne} transArr={transArr} clearAll={clearAll}/>
     <Comp3 transaction={transaction} settransaction={settransaction} setTrans={setTrans}/>
     <div onClick={()=>{document.querySelector('#form').style.display = "block"}} className='add-btn'><FaPlus/></div>
   </div>
  )
}

export default Wrapper
