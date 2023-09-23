import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

export const PieChart = () => {
  var CanvasJS = CanvasJSReact.CanvasJS;
  var CanvasJSChart = CanvasJSReact.CanvasJSChart;
  const [pieVal,setPieVal] = useState({income:100,expense:100})

  const options = {
    animationEnabled: true,
    theme: "light", // "light1", "dark1", "dark2"
    // title: {text: "Trip Expenses"},
    data: [
      {
        type: "pie",
        indexLabel: "{label} ({y})",
        indexLabelPlacement: "inside",
        indexLabelFontColor: "white",
        startAngle: -90,
        dataPoints: [
          { y: pieVal.income, label: "income", color:"#FF6464" },
          { y: (-1)*pieVal.expense, label: "expense",color:"#6BCB77" },
        ],
      },
    ],
  };

  useEffect(()=>{
    const transArr = JSON.parse(localStorage.getItem('expenseArr'))
    var exp=0,inc=0
    transArr.forEach((item) => {
        if(Number(item.Amount)<0) exp+=Number(item.Amount);
        else inc+=Number(item.Amount);
    });
    setPieVal({income:inc,expense:exp})
  },[])

  return (
    <div className="chart">
      <CanvasJSChart options={options} />
    </div>
  );
};
