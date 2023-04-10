import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./HomePage.css";
import { Calendar } from "react-feather";

export const HomePage: React.FC = () => {
  const [getDatayear, setGetDatayear] = useState<string[]>([]);
  const [getDatacommit, setGetDatacommit] = useState<number[]>([]);

  useEffect(() => {
    const getCommitdata = async () => {
      const getYear: string[] = [];
      const getCommit: number[] = [];
      const reqData = await fetch("http://localhost/reactgraphtutorial/Areachartgitgub");
      const resData = await reqData.json();
      for (let i = 0; i < resData.length; i++) {
        getYear.push(resData[i].year);
        getCommit.push(resData[i].commits);
      }
      setGetDatayear(getYear);
      setGetDatacommit(getCommit);
    };
    getCommitdata();
  }, []);

  return (
    <div className="home-page">
      <div className="container-fluid mb-3 mt-3">
        <h2>Thống kê</h2>
        <Chart
  type="area"
  width={`${1488}`}
  height={`${327}`}
  series={[    {      name: "Doanh thu",      data: [144, 159, 132, 204, 200, 206, 222, 242, 236, 240, 182,164],
    },
  ]}
  options={{
    title: {
      text: "Doanh thu",
      style: { fontSize: "20px", fontFamily: "Montserrat", fontWeight: "700" },
    },
    colors: ["#FAA05F"],
    stroke: { width: 3, curve: "smooth" },
    //fill:{opacity:1, type:'solid'},
    xaxis: {
      title: {
        text: "",
        style: { fontSize: "20px", color: "#FAA05F" },
      },
      categories: getDatayear,
    },
    yaxis: {
      title: {
        text: "",
        style: { fontSize: "20px" },
      },
    },
  }}
/>
      </div>

      <div className="total-revenue">
        Tổng doanh thu theo tuần <br/>
        <span>524.671.332</span> đồng
      </div>

      <div className="pie-chart-container" style={{width:"1440px", display:"flex"}}>
        <div className="pie-chart-container-date" style={{width:"20%"}}>
          <div>
            dd/mm/yyyy
            <Calendar className="calendar-icon"/>
          </div>
        </div>
        <div className="pie-chart-container-item" style={{width:"30%"}}>
          Gói gia đình
          <div className="item-block">
            <div className="circle-container">
              <div className="circle">
              </div>
              <div className="circle-2">
              </div>
              <div className="circle-3">
              </div>
              <div className="circle-4">
              </div>
              
            </div>
          </div>
        </div>
        <div className="pie-chart-container-item" style={{width:"30%"}}>
          Gói sự kiện
          <div className="item-block">
            <div className="circle-container">
              <div className="circle">
              </div>
              <div className="circle-2">
              </div>
              <div className="circle-3">
              </div>
              <div className="circle-4">
              </div>
            </div>
          </div>
        </div>
        <div className="pie-chart-container-item-discription " style={{width:"20%"}}>
          <div className="pie-chart-container-item-discription-item">
            <span></span>
            Vé đã sử dụng
          </div>
          <div className="pie-chart-container-item-discription-item">
            <span></span>
            Vé chưa sử dụng
          </div>
        </div>
      </div>
  </div>);
};
