
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {cityOption} from "./cityOption"




function App() {
  const [location, setLocation] = useState("請選擇城市");
  const [weather1, setWeather1] = useState("")
  const [weather1Start, setWeather1Start] = useState("")
  const [weather1End, setWeather1End] = useState("")
  const [weather2, setWeather2] = useState("")
  const [weather2Start, setWeather2Start] = useState("")
  const [weather2End, setWeather2End] = useState("")
  const [weather3, setWeather3] = useState("")
  const [weather3Start, setWeather3Start] = useState("")
  const [weather3End, setWeather3End] = useState("")
  const [rain1, setRain1] = useState("")
  const [rain2, setRain2] = useState("")
  const [rain3, setRain3] = useState("")
  const [minT1, setminT1] = useState("")
  const [minT2, setminT2] = useState("")
  const [minT3, setminT3] = useState("")
  const [maxT1, setmaxT1] = useState("")
  const [maxT2, setmaxT2] = useState("")
  const [maxT3, setmaxT3] = useState("")
  var
  //高雄市 
  K_city, K_Wx1Starttime, K_Wx1Endtime,K_Wx1,K_Wx2Starttime,K_Wx2Endtime,K_Wx2,K_Wx3,K_Wx3Endtime,K_Wx3Starttime,K_Pop1,K_Pop2,K_Pop3,K_min1,K_min2,K_min3,K_max1,K_max2,K_max3,
  // 嘉義縣
  CHY_city,CHY_Wx1Starttime,CHY_Wx1Endtime,CHY_Wx1,CHY_Wx2Starttime,CHY_Wx2Endtime,CHY_Wx2,CHY_Wx3,CHY_Wx3Endtime,CHY_Wx3Starttime,CHY_Pop1,CHY_Pop2,CHY_Pop3,CHY_min1,CHY_min2,CHY_min3,CHY_max1,CHY_max2,CHY_max3,
  // 台南市
  TN_city, TN_Wx1Starttime, TN_Wx1Endtime,TN_Wx1,TN_Wx2Starttime,TN_Wx2Endtime,TN_Wx2,TN_Wx3,TN_Wx3Endtime,TN_Wx3Starttime,TN_Pop1,TN_Pop2,TN_Pop3,TN_min1,TN_min2,TN_min3,TN_max1,TN_max2,TN_max3,
  // 宜蘭縣
IL_city,IL_Wx1Starttime,IL_Wx1Endtime,IL_Wx1,IL_Wx2Starttime,IL_Wx2Endtime,IL_Wx2,IL_Wx3,IL_Wx3Endtime,IL_Wx3Starttime,IL_Pop1,IL_Pop2,IL_Pop3,IL_min1,IL_min2,IL_min3,IL_max1,IL_max2,IL_max3,
  // 嘉義市 
  CYI_city,CYI_Wx1Starttime,CYI_Wx1Endtime,CYI_Wx1,CYI_Wx2Starttime,CYI_Wx2Endtime,CYI_Wx2,CYI_Wx3,CYI_Wx3Endtime,CYI_Wx3Starttime,CYI_Pop1,CYI_Pop2,CYI_Pop3,CYI_min1,CYI_min2,CYI_min3,CYI_max1,CYI_max2,CYI_max3,
  // 台中市 TXG
  TXG_city,TXG_Wx1Starttime,TXG_Wx1Endtime,TXG_Wx1,TXG_Wx2Starttime,TXG_Wx2Endtime,TXG_Wx2,TXG_Wx3,TXG_Wx3Endtime,TXG_Wx3Starttime,TXG_Pop1,TXG_Pop2,TXG_Pop3,TXG_min1,TXG_min2,TXG_min3,TXG_max1,TXG_max2,TXG_max3,
  // 新竹市 HSC
  HSC_city,HSC_Wx1Starttime,HSC_Wx1Endtime,HSC_Wx1,HSC_Wx2Starttime,HSC_Wx2Endtime,HSC_Wx2,HSC_Wx3,HSC_Wx3Endtime,HSC_Wx3Starttime,HSC_Pop1,HSC_Pop2,HSC_Pop3,HSC_min1,HSC_min2,HSC_min3,HSC_max1,HSC_max2,HSC_max3;
  


  //高雄 K
  const BASE1 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E9%AB%98%E9%9B%84%E5%B8%82"
  //嘉義縣 CHY
  const BASE2 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%98%89%E7%BE%A9%E7%B8%A3"
  //台南市 TN
  const BASE3 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%87%BA%E5%8D%97%E5%B8%82"
  // 宜蘭縣 YL
  const BASE4 ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%AE%9C%E8%98%AD%E7%B8%A3"
  // 嘉義市 CYI
  const BASE5 ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%98%89%E7%BE%A9%E5%B8%82"
  // 台中市 TXG
  const BASE6 ="https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%87%BA%E4%B8%AD%E5%B8%82"
  // 新竹市 HSC
  const BASE7 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E6%96%B0%E7%AB%B9%E5%B8%82"
  
  axios.get(BASE1).then(res => {
    // 高雄
    K_city = res.data.records.location[0].locationName
    K_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    K_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    K_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    K_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    K_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    K_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    K_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    K_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    K_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    K_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    K_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    K_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    K_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    K_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    K_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    K_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    K_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    K_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE2).then(res => {
    // 嘉義縣
    CHY_city = res.data.records.location[0].locationName
    CHY_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    CHY_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    CHY_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    CHY_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    CHY_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    CHY_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    CHY_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    CHY_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    CHY_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    CHY_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    CHY_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    CHY_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    CHY_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    CHY_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    CHY_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    CHY_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    CHY_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    CHY_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
  
   axios.get(BASE3).then(res => {
    // 台南市
    TN_city = res.data.records.location[0].locationName
    TN_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TN_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TN_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TN_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TN_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TN_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TN_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TN_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TN_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TN_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TN_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TN_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TN_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TN_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TN_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TN_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TN_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TN_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE4).then(res => {
    // 宜蘭縣
    IL_city = res.data.records.location[0].locationName
    IL_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    IL_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    IL_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    IL_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    IL_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    IL_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    IL_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    IL_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    IL_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    IL_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    IL_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    IL_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    IL_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    IL_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    IL_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    IL_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    IL_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    IL_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE5).then(res => {
    // 嘉義縣
    CYI_city = res.data.records.location[0].locationName
    CYI_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    CYI_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    CYI_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    CYI_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    CYI_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    CYI_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    CYI_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    CYI_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    CYI_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    CYI_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    CYI_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    CYI_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    CYI_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    CYI_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    CYI_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    CYI_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    CYI_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    CYI_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE6).then(res => {
    // 台中市
    TXG_city = res.data.records.location[0].locationName
    TXG_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TXG_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TXG_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TXG_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TXG_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TXG_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TXG_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TXG_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TXG_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TXG_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TXG_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TXG_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TXG_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TXG_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TXG_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TXG_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TXG_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TXG_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE7).then(res => {
    // 新竹市
    HSC_city = res.data.records.location[0].locationName
    HSC_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    HSC_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    HSC_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    HSC_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    HSC_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    HSC_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    HSC_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    HSC_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    HSC_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    HSC_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    HSC_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    HSC_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    HSC_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    HSC_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    HSC_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    HSC_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    HSC_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    HSC_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   function printValue(e) {
    const chosen = document.querySelector('.dropdown').value
    if (chosen === "高雄市") {
      setLocation(K_city)
      setWeather1(K_Wx1)
      setWeather1Start(K_Wx1Starttime)
      setWeather1End(K_Wx1Endtime)
      setWeather2(K_Wx2)
      setWeather2Start(K_Wx2Starttime)
      setWeather2End(K_Wx2Endtime)
      setWeather3(K_Wx3)
      setWeather3Start(K_Wx3Starttime)
      setWeather3End(K_Wx3Endtime)
      setRain1(K_Pop1)
      setRain2(K_Pop2)
      setRain3(K_Pop3)
      setminT1(K_min1)
      setminT2(K_min2)
      setminT3(K_min3)
      setmaxT1(K_max1)
      setmaxT2(K_max2)
      setmaxT3(K_max3)
    } else if (chosen === "嘉義縣") {
      setLocation(CHY_city)
      setWeather1(CHY_Wx1)
      setWeather1Start(CHY_Wx1Starttime)
      setWeather1End(CHY_Wx1Endtime)
      setWeather2(CHY_Wx2)
      setWeather2Start(CHY_Wx2Starttime)
      setWeather2End(CHY_Wx2Endtime)
      setWeather3(CHY_Wx3)
      setWeather3Start(CHY_Wx3Starttime)
      setWeather3End(CHY_Wx3Endtime)
      setRain1(CHY_Pop1)
      setRain2(CHY_Pop2)
      setRain3(CHY_Pop3)
      setminT1(CHY_min1)
      setminT2(CHY_min2)
      setminT3(CHY_min3)
      setmaxT1(CHY_max1)
      setmaxT2(CHY_max2)
      setmaxT3(CHY_max3)
    } else if (chosen === "台南市") {
      setLocation(TN_city)
      setWeather1(TN_Wx1)
      setWeather1Start(TN_Wx1Starttime)
      setWeather1End(TN_Wx1Endtime)
      setWeather2(TN_Wx2)
      setWeather2Start(TN_Wx2Starttime)
      setWeather2End(TN_Wx2Endtime)
      setWeather3(TN_Wx3)
      setWeather3Start(TN_Wx3Starttime)
      setWeather3End(TN_Wx3Endtime)
      setRain1(TN_Pop1)
      setRain2(TN_Pop2)
      setRain3(TN_Pop3)
      setminT1(TN_min1)
      setminT2(TN_min2)
      setminT3(TN_min3)
      setmaxT1(TN_max1)
      setmaxT2(TN_max2)
      setmaxT3(TN_max3)
    } else if (chosen === "宜蘭縣") {
      setLocation(IL_city)
      setWeather1(IL_Wx1)
      setWeather1Start(IL_Wx1Starttime)
      setWeather1End(IL_Wx1Endtime)
      setWeather2(IL_Wx2)
      setWeather2Start(IL_Wx2Starttime)
      setWeather2End(IL_Wx2Endtime)
      setWeather3(IL_Wx3)
      setWeather3Start(IL_Wx3Starttime)
      setWeather3End(IL_Wx3Endtime)
      setRain1(IL_Pop1)
      setRain2(IL_Pop2)
      setRain3(IL_Pop3)
      setminT1(IL_min1)
      setminT2(IL_min2)
      setminT3(IL_min3)
      setmaxT1(IL_max1)
      setmaxT2(IL_max2)
      setmaxT3(IL_max3)
    } else if (chosen === "嘉義市") {
      setLocation(CYI_city)
      setWeather1(CYI_Wx1)
      setWeather1Start(CYI_Wx1Starttime)
      setWeather1End(CYI_Wx1Endtime)
      setWeather2(CYI_Wx2)
      setWeather2Start(CYI_Wx2Starttime)
      setWeather2End(CYI_Wx2Endtime)
      setWeather3(CYI_Wx3)
      setWeather3Start(CYI_Wx3Starttime)
      setWeather3End(CYI_Wx3Endtime)
      setRain1(CYI_Pop1)
      setRain2(CYI_Pop2)
      setRain3(CYI_Pop3)
      setminT1(CYI_min1)
      setminT2(CYI_min2)
      setminT3(CYI_min3)
      setmaxT1(CYI_max1)
      setmaxT2(CYI_max2)
      setmaxT3(CYI_max3)
    } else if (chosen === "台中市") {
      setLocation(TXG_city)
      setWeather1(TXG_Wx1)
      setWeather1Start(TXG_Wx1Starttime)
      setWeather1End(TXG_Wx1Endtime)
      setWeather2(TXG_Wx2)
      setWeather2Start(TXG_Wx2Starttime)
      setWeather2End(TXG_Wx2Endtime)
      setWeather3(TXG_Wx3)
      setWeather3Start(TXG_Wx3Starttime)
      setWeather3End(TXG_Wx3Endtime)
      setRain1(TXG_Pop1)
      setRain2(TXG_Pop2)
      setRain3(TXG_Pop3)
      setminT1(TXG_min1)
      setminT2(TXG_min2)
      setminT3(TXG_min3)
      setmaxT1(TXG_max1)
      setmaxT2(TXG_max2)
      setmaxT3(TXG_max3)
    } else if (chosen === "新竹市") {
      setLocation(HSC_city)
      setWeather1(HSC_Wx1)
      setWeather1Start(HSC_Wx1Starttime)
      setWeather1End(HSC_Wx1Endtime)
      setWeather2(HSC_Wx2)
      setWeather2Start(HSC_Wx2Starttime)
      setWeather2End(HSC_Wx2Endtime)
      setWeather3(HSC_Wx3)
      setWeather3Start(HSC_Wx3Starttime)
      setWeather3End(HSC_Wx3Endtime)
      setRain1(HSC_Pop1)
      setRain2(HSC_Pop2)
      setRain3(HSC_Pop3)
      setminT1(HSC_min1)
      setminT2(HSC_min2)
      setminT3(HSC_min3)
      setmaxT1(HSC_max1)
      setmaxT2(HSC_max2)
      setmaxT3(HSC_max3)
    } 
  }


  function formateDate(date) {
    const result = new Date(date)
    var options = { day: 'numeric', month: 'numeric' };
    return result.toLocaleDateString('zh-hant', options)
  }
  function formateTime(time) {
    const result = new Date(time)
    var options = {hour: '2-digit', minute: '2-digit'}
     return result.toLocaleTimeString('zh-hant', options)
  }

 

 

  return (
    <div className='container'>
      
      <div className="city1">
        <div className='item'>
      <select className='dropdown' onChange={printValue}>
        {cityOption.map(item => {
          return <option key={item.id} className="cityOption" value={item.title}>{item.title}</option>
        })}
      </select>
      </div>
        <div className='time1'>
          <p>{formateDate(weather1Start)} {formateTime(weather1Start)} <br></br>至  <br></br>{formateDate(weather1End)} {formateTime(weather1End)} </p>
          <p>{weather1}</p>
          <p>降雨機率 {rain1} %</p>
          <p>{minT1}&#176; ~ {maxT1}&#176;</p>
        </div>
        <div className='time2'>
          <p>{formateDate(weather2Start)} {formateTime(weather2Start)} <br></br>至<br></br> {formateDate(weather2End)} {formateTime(weather2End)} </p>
          <p>{weather2}</p>
          <p>降雨機率 {rain2} %</p>
          <p>{minT2}&#176; ~ {maxT2}&#176;</p>
        </div>
        <div className='time3'>
          <p>{formateDate(weather3Start)} {formateTime(weather3Start)} <br></br>至<br></br> {formateDate(weather3End)} {formateTime(weather3End)} </p>
          <p>{weather3}</p>
          <p>降雨機率 {rain3} %</p>
          <p>{minT3}&#176; ~ {maxT3}&#176;</p>
        </div>
      </div>

    </div>
  );
}

export default App;
