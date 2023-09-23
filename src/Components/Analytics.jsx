import React from 'react'
import { PieChart } from './charts/PieChart'
import { LineChart } from './charts/LineChart'
import {FcDownLeft} from "react-icons/fc"
import { useNavigate } from 'react-router-dom'

export const Analytics = () => {
    const navigate = useNavigate();
  return (
    <div className='analytics'>
        <div onClick={()=>navigate('/')}  className="back-icon"><FcDownLeft/></div>
        <h1 style={{textAlign:"center",paddingTop:"1rem"}}>ANALYTICS</h1>
        <PieChart/>
        <LineChart/>
    </div>
  )
}
