
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
  HSC_city,HSC_Wx1Starttime,HSC_Wx1Endtime,HSC_Wx1,HSC_Wx2Starttime,HSC_Wx2Endtime,HSC_Wx2,HSC_Wx3,HSC_Wx3Endtime,HSC_Wx3Starttime,HSC_Pop1,HSC_Pop2,HSC_Pop3,HSC_min1,HSC_min2,HSC_min3,HSC_max1,HSC_max2,HSC_max3,
  // 花蓮縣 HWA
  WHA_city,WHA_Wx1Starttime,WHA_Wx1Endtime,WHA_Wx1,WHA_Wx2Starttime,WHA_Wx2Endtime,WHA_Wx2,WHA_Wx3,WHA_Wx3Endtime,WHA_Wx3Starttime,WHA_Pop1,WHA_Pop2,WHA_Pop3,WHA_min1,WHA_min2,WHA_min3,WHA_max1,WHA_max2,WHA_max3,
  // 台東縣 TTT
  TTT_city,TTT_Wx1Starttime,TTT_Wx1Endtime,TTT_Wx1,TTT_Wx2Starttime,TTT_Wx2Endtime,TTT_Wx2,TTT_Wx3,TTT_Wx3Endtime,TTT_Wx3Starttime,TTT_Pop1,TTT_Pop2,TTT_Pop3,TTT_min1,TTT_min2,TTT_min3,TTT_max1,TTT_max2,TTT_max3,
  // 澎湖縣 PEH
  PEH_city,PEH_Wx1Starttime,PEH_Wx1Endtime,PEH_Wx1,PEH_Wx2Starttime,PEH_Wx2Endtime,PEH_Wx2,PEH_Wx3,PEH_Wx3Endtime,PEH_Wx3Starttime,PEH_Pop1,PEH_Pop2,PEH_Pop3,PEH_min1,PEH_min2,PEH_min3,PEH_max1,PEH_max2,PEH_max3,
  // 台北市 TPI
  TPI_city,TPI_Wx1Starttime,TPI_Wx1Endtime,TPI_Wx1,TPI_Wx2Starttime,TPI_Wx2Endtime,TPI_Wx2,TPI_Wx3,TPI_Wx3Endtime,TPI_Wx3Starttime,TPI_Pop1,TPI_Pop2,TPI_Pop3,TPI_min1,TPI_min2,TPI_min3,TPI_max1,TPI_max2,TPI_max3,
  // 新北市 TPH
  TPH_city,TPH_Wx1Starttime,TPH_Wx1Endtime,TPH_Wx1,TPH_Wx2Starttime,TPH_Wx2Endtime,TPH_Wx2,TPH_Wx3,TPH_Wx3Endtime,TPH_Wx3Starttime,TPH_Pop1,TPH_Pop2,TPH_Pop3,TPH_min1,TPH_min2,TPH_min3,TPH_max1,TPH_max2,TPH_max3,
  // 桃園市 TYC
  TYC_city,TYC_Wx1Starttime,TYC_Wx1Endtime,TYC_Wx1,TYC_Wx2Starttime,TYC_Wx2Endtime,TYC_Wx2,TYC_Wx3,TYC_Wx3Endtime,TYC_Wx3Starttime,TYC_Pop1,TYC_Pop2,TYC_Pop3,TYC_min1,TYC_min2,TYC_min3,TYC_max1,TYC_max2,TYC_max3,
  // 基隆市 KLU
  KLU_city,KLU_Wx1Starttime,KLU_Wx1Endtime,KLU_Wx1,KLU_Wx2Starttime,KLU_Wx2Endtime,KLU_Wx2,KLU_Wx3,KLU_Wx3Endtime,KLU_Wx3Starttime,KLU_Pop1,KLU_Pop2,KLU_Pop3,KLU_min1,KLU_min2,KLU_min3,KLU_max1,KLU_max2,KLU_max3,
  // 新竹縣 HSH
  HSH_city,HSH_Wx1Starttime,HSH_Wx1Endtime,HSH_Wx1,HSH_Wx2Starttime,HSH_Wx2Endtime,HSH_Wx2,HSH_Wx3,HSH_Wx3Endtime,HSH_Wx3Starttime,HSH_Pop1,HSH_Pop2,HSH_Pop3,HSH_min1,HSH_min2,HSH_min3,HSH_max1,HSH_max2,HSH_max3,
  // 苗栗縣 MAL
  MAL_city,MAL_Wx1Starttime,MAL_Wx1Endtime,MAL_Wx1,MAL_Wx2Starttime,MAL_Wx2Endtime,MAL_Wx2,MAL_Wx3,MAL_Wx3Endtime,MAL_Wx3Starttime,MAL_Pop1,MAL_Pop2,MAL_Pop3,MAL_min1,MAL_min2,MAL_min3,MAL_max1,MAL_max2,MAL_max3,
  // 彰化縣 CHW
  CHW_city,CHW_Wx1Starttime,CHW_Wx1Endtime,CHW_Wx1,CHW_Wx2Starttime,CHW_Wx2Endtime,CHW_Wx2,CHW_Wx3,CHW_Wx3Endtime,CHW_Wx3Starttime,CHW_Pop1,CHW_Pop2,CHW_Pop3,CHW_min1,CHW_min2,CHW_min3,CHW_max1,CHW_max2,CHW_max3,
  // 南投縣 NTO
  NTO_city,NTO_Wx1Starttime,NTO_Wx1Endtime,NTO_Wx1,NTO_Wx2Starttime,NTO_Wx2Endtime,NTO_Wx2,NTO_Wx3,NTO_Wx3Endtime,NTO_Wx3Starttime,NTO_Pop1,NTO_Pop2,NTO_Pop3,NTO_min1,NTO_min2,NTO_min3,NTO_max1,NTO_max2,NTO_max3,
  // 雲林縣
  YLH_city,YLH_Wx1Starttime,YLH_Wx1Endtime,YLH_Wx1,YLH_Wx2Starttime,YLH_Wx2Endtime,YLH_Wx2,YLH_Wx3,YLH_Wx3Endtime,YLH_Wx3Starttime,YLH_Pop1,YLH_Pop2,YLH_Pop3,YLH_min1,YLH_min2,YLH_min3,YLH_max1,YLH_max2,YLH_max3,
  // 屏東縣
  IUH_city,IUH_Wx1Starttime,IUH_Wx1Endtime,IUH_Wx1,IUH_Wx2Starttime,IUH_Wx2Endtime,IUH_Wx2,IUH_Wx3,IUH_Wx3Endtime,IUH_Wx3Starttime,IUH_Pop1,IUH_Pop2,IUH_Pop3,IUH_min1,IUH_min2,IUH_min3,IUH_max1,IUH_max2,IUH_max3;
  

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
  //花蓮縣 HWA
  const BASE8 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%8A%B1%E8%93%AE%E7%B8%A3"
  //台東縣 TTT
  const BASE9 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%87%BA%E6%9D%B1%E7%B8%A3"
  //澎湖縣 PEH
  const BASE10 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E6%BE%8E%E6%B9%96%E7%B8%A3"
  //台北市 TPI
  const BASE11 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82"
  //新北市 TPH
  const BASE12 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E6%96%B0%E5%8C%97%E5%B8%82"
  //桃園市 TYC
  const BASE13 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%B8%82"
  //基隆市 KLU
  const BASE14 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%9F%BA%E9%9A%86%E5%B8%82"
  //新竹縣 HSH
  const BASE15 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E6%96%B0%E7%AB%B9%E7%B8%A3"
  //苗栗縣 MAL
  const BASE16 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E8%8B%97%E6%A0%97%E7%B8%A3"
  //彰化縣 CHW
  const BASE17 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%BD%B0%E5%8C%96%E7%B8%A3"
  //南投縣 NTO
  const BASE18 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%8D%97%E6%8A%95%E7%B8%A3"
  //雲林縣 YLH
  const BASE19 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E9%9B%B2%E6%9E%97%E7%B8%A3"
  //屏東縣 IUH
  const BASE20 = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-F51B3957-C9B6-47C1-820C-1EEFDDDA93E7&format=JSON&locationName=%E5%98%89%E7%BE%A9%E7%B8%A3"
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

   axios.get(BASE8).then(res => {
    // 花蓮縣
    WHA_city = res.data.records.location[0].locationName
    WHA_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    WHA_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    WHA_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    WHA_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    WHA_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    WHA_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    WHA_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    WHA_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    WHA_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    WHA_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    WHA_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    WHA_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    WHA_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    WHA_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    WHA_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    WHA_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    WHA_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    WHA_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE9).then(res => {
    // 台東 TTT
    TTT_city = res.data.records.location[0].locationName
    TTT_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TTT_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TTT_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TTT_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TTT_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TTT_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TTT_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TTT_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TTT_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TTT_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TTT_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TTT_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TTT_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TTT_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TTT_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TTT_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TTT_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TTT_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE10).then(res => {
    // 澎湖縣
    PEH_city = res.data.records.location[0].locationName
    PEH_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    PEH_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    PEH_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    PEH_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    PEH_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    PEH_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    PEH_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    PEH_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    PEH_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    PEH_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    PEH_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    PEH_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    PEH_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    PEH_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    PEH_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    PEH_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    PEH_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    PEH_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   axios.get(BASE11).then(res => {
    // 台北市
    TPI_city = res.data.records.location[0].locationName
    TPI_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TPI_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TPI_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TPI_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TPI_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TPI_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TPI_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TPI_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TPI_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TPI_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TPI_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TPI_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TPI_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TPI_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TPI_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TPI_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TPI_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TPI_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE12).then(res => {
    // 新北市
    TPH_city = res.data.records.location[0].locationName
    TPH_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TPH_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TPH_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TPH_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TPH_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TPH_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TPH_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TPH_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TPH_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TPH_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TPH_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TPH_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TPH_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TPH_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TPH_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TPH_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TPH_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TPH_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE13).then(res => {
    // 桃園市
    TYC_city = res.data.records.location[0].locationName
    TYC_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    TYC_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    TYC_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    TYC_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    TYC_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    TYC_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    TYC_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    TYC_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    TYC_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    TYC_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    TYC_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    TYC_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    TYC_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    TYC_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    TYC_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    TYC_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    TYC_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    TYC_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE14).then(res => {
    // 基隆市
    KLU_city = res.data.records.location[0].locationName
    KLU_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    KLU_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    KLU_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    KLU_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    KLU_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    KLU_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    KLU_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    KLU_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    KLU_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    KLU_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    KLU_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    KLU_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    KLU_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    KLU_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    KLU_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    KLU_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    KLU_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    KLU_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE15).then(res => {
    // 苗栗縣
    MAL_city = res.data.records.location[0].locationName
    MAL_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    MAL_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    MAL_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    MAL_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    MAL_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    MAL_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    MAL_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    MAL_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    MAL_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    MAL_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    MAL_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    MAL_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    MAL_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    MAL_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    MAL_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    MAL_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    MAL_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    MAL_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE16).then(res => {
    // 彰化縣
    CHW_city = res.data.records.location[0].locationName
    CHW_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    CHW_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    CHW_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    CHW_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    CHW_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    CHW_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    CHW_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    CHW_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    CHW_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    CHW_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    CHW_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    CHW_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    CHW_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    CHW_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    CHW_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    CHW_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    CHW_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    CHW_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE17).then(res => {
    // 南投縣
    NTO_city = res.data.records.location[0].locationName
    NTO_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    NTO_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    NTO_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    NTO_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    NTO_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    NTO_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    NTO_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    NTO_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    NTO_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    NTO_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    NTO_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    NTO_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    NTO_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    NTO_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    NTO_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    NTO_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    NTO_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    NTO_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE19).then(res => {
    // 雲林縣
    YLH_city = res.data.records.location[0].locationName
    YLH_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    YLH_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    YLH_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    YLH_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    YLH_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    YLH_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    YLH_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    YLH_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    YLH_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    YLH_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    YLH_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    YLH_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    YLH_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    YLH_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    YLH_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    YLH_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    YLH_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    YLH_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })
   axios.get(BASE20).then(res => {
    // 屏東縣
    IUH_city = res.data.records.location[0].locationName
    IUH_Wx1Starttime = res.data.records.location[0].weatherElement[0].time[0].startTime;
    IUH_Wx1Endtime = res.data.records.location[0].weatherElement[0].time[0].endTime;
    IUH_Wx1 = res.data.records.location[0].weatherElement[0].time[0].parameter.parameterName;
    IUH_Wx2Starttime = res.data.records.location[0].weatherElement[0].time[1].startTime;
    IUH_Wx2Endtime = res.data.records.location[0].weatherElement[0].time[1].endTime;
    IUH_Wx2 = res.data.records.location[0].weatherElement[0].time[1].parameter.parameterName;
    IUH_Wx3Starttime = res.data.records.location[0].weatherElement[0].time[2].startTime;
    IUH_Wx3Endtime = res.data.records.location[0].weatherElement[0].time[2].endTime;
    IUH_Wx3 = res.data.records.location[0].weatherElement[0].time[2].parameter.parameterName;
    IUH_Pop1 = res.data.records.location[0].weatherElement[1].time[0].parameter.parameterName;
    IUH_Pop2 = res.data.records.location[0].weatherElement[1].time[1].parameter.parameterName;
    IUH_Pop3 = res.data.records.location[0].weatherElement[1].time[2].parameter.parameterName;
    IUH_min1 = res.data.records.location[0].weatherElement[2].time[0].parameter.parameterName;
    IUH_min2 = res.data.records.location[0].weatherElement[2].time[1].parameter.parameterName;
    IUH_min3 = res.data.records.location[0].weatherElement[2].time[2].parameter.parameterName;
    IUH_max1 = res.data.records.location[0].weatherElement[4].time[0].parameter.parameterName;
    IUH_max2 = res.data.records.location[0].weatherElement[4].time[1].parameter.parameterName;
    IUH_max3 = res.data.records.location[0].weatherElement[4].time[2].parameter.parameterName;
   })

   function printValue(e) {
    const chosen = document.querySelector('.dropdown').value
    if (chosen === "高雄市") {
      setLocation(K_city)
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
      console.log(document.querySelector('.dropdown').value)
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
    } else if (chosen === "花蓮縣") {
      setLocation(WHA_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(WHA_Wx1)
      setWeather1Start(WHA_Wx1Starttime)
      setWeather1End(WHA_Wx1Endtime)
      setWeather2(WHA_Wx2)
      setWeather2Start(WHA_Wx2Starttime)
      setWeather2End(WHA_Wx2Endtime)
      setWeather3(WHA_Wx3)
      setWeather3Start(WHA_Wx3Starttime)
      setWeather3End(WHA_Wx3Endtime)
      setRain1(WHA_Pop1)
      setRain2(WHA_Pop2)
      setRain3(WHA_Pop3)
      setminT1(WHA_min1)
      setminT2(WHA_min2)
      setminT3(WHA_min3)
      setmaxT1(WHA_max1)
      setmaxT2(WHA_max2)
      setmaxT3(WHA_max3)
    } else if (chosen === "台東縣") {
      setLocation(TTT_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(TTT_Wx1)
      setWeather1Start(TTT_Wx1Starttime)
      setWeather1End(TTT_Wx1Endtime)
      setWeather2(TTT_Wx2)
      setWeather2Start(TTT_Wx2Starttime)
      setWeather2End(TTT_Wx2Endtime)
      setWeather3(TTT_Wx3)
      setWeather3Start(TTT_Wx3Starttime)
      setWeather3End(TTT_Wx3Endtime)
      setRain1(TTT_Pop1)
      setRain2(TTT_Pop2)
      setRain3(TTT_Pop3)
      setminT1(TTT_min1)
      setminT2(TTT_min2)
      setminT3(TTT_min3)
      setmaxT1(TTT_max1)
      setmaxT2(TTT_max2)
      setmaxT3(TTT_max3)
    } else if (chosen === "台北市") {
      setLocation(TPI_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(TPI_Wx1)
      setWeather1Start(TPI_Wx1Starttime)
      setWeather1End(TPI_Wx1Endtime)
      setWeather2(TPI_Wx2)
      setWeather2Start(TPI_Wx2Starttime)
      setWeather2End(TPI_Wx2Endtime)
      setWeather3(TPI_Wx3)
      setWeather3Start(TPI_Wx3Starttime)
      setWeather3End(TPI_Wx3Endtime)
      setRain1(TPI_Pop1)
      setRain2(TPI_Pop2)
      setRain3(TPI_Pop3)
      setminT1(TPI_min1)
      setminT2(TPI_min2)
      setminT3(TPI_min3)
      setmaxT1(TPI_max1)
      setmaxT2(TPI_max2)
      setmaxT3(TPI_max3)
    } else if (chosen === "新北市") {
      setLocation(TPH_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(TPH_Wx1)
      setWeather1Start(TPH_Wx1Starttime)
      setWeather1End(TPH_Wx1Endtime)
      setWeather2(TPH_Wx2)
      setWeather2Start(TPH_Wx2Starttime)
      setWeather2End(TPH_Wx2Endtime)
      setWeather3(TPH_Wx3)
      setWeather3Start(TPH_Wx3Starttime)
      setWeather3End(TPH_Wx3Endtime)
      setRain1(TPH_Pop1)
      setRain2(TPH_Pop2)
      setRain3(TPH_Pop3)
      setminT1(TPH_min1)
      setminT2(TPH_min2)
      setminT3(TPH_min3)
      setmaxT1(TPH_max1)
      setmaxT2(TPH_max2)
      setmaxT3(TPH_max3)
    } else if (chosen === "澎湖縣") {
      setLocation(PEH_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(PEH_Wx1)
      setWeather1Start(PEH_Wx1Starttime)
      setWeather1End(PEH_Wx1Endtime)
      setWeather2(PEH_Wx2)
      setWeather2Start(PEH_Wx2Starttime)
      setWeather2End(PEH_Wx2Endtime)
      setWeather3(PEH_Wx3)
      setWeather3Start(PEH_Wx3Starttime)
      setWeather3End(PEH_Wx3Endtime)
      setRain1(PEH_Pop1)
      setRain2(PEH_Pop2)
      setRain3(PEH_Pop3)
      setminT1(PEH_min1)
      setminT2(PEH_min2)
      setminT3(PEH_min3)
      setmaxT1(PEH_max1)
      setmaxT2(PEH_max2)
      setmaxT3(PEH_max3)
    } else if (chosen === "桃園市") {
      setLocation(TYC_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(TYC_Wx1)
      setWeather1Start(TYC_Wx1Starttime)
      setWeather1End(TYC_Wx1Endtime)
      setWeather2(TYC_Wx2)
      setWeather2Start(TYC_Wx2Starttime)
      setWeather2End(TYC_Wx2Endtime)
      setWeather3(TYC_Wx3)
      setWeather3Start(TYC_Wx3Starttime)
      setWeather3End(TYC_Wx3Endtime)
      setRain1(TYC_Pop1)
      setRain2(TYC_Pop2)
      setRain3(TYC_Pop3)
      setminT1(TYC_min1)
      setminT2(TYC_min2)
      setminT3(TYC_min3)
      setmaxT1(TYC_max1)
      setmaxT2(TYC_max2)
      setmaxT3(TYC_max3)
    } else if (chosen === "基隆市") {
      setLocation(KLU_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(KLU_Wx1)
      setWeather1Start(KLU_Wx1Starttime)
      setWeather1End(KLU_Wx1Endtime)
      setWeather2(KLU_Wx2)
      setWeather2Start(KLU_Wx2Starttime)
      setWeather2End(KLU_Wx2Endtime)
      setWeather3(KLU_Wx3)
      setWeather3Start(KLU_Wx3Starttime)
      setWeather3End(KLU_Wx3Endtime)
      setRain1(KLU_Pop1)
      setRain2(KLU_Pop2)
      setRain3(KLU_Pop3)
      setminT1(KLU_min1)
      setminT2(KLU_min2)
      setminT3(KLU_min3)
      setmaxT1(KLU_max1)
      setmaxT2(KLU_max2)
      setmaxT3(KLU_max3)
    } else if (chosen === "新竹縣") {
      setLocation(HSH_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(HSH_Wx1)
      setWeather1Start(HSH_Wx1Starttime)
      setWeather1End(HSH_Wx1Endtime)
      setWeather2(HSH_Wx2)
      setWeather2Start(HSH_Wx2Starttime)
      setWeather2End(HSH_Wx2Endtime)
      setWeather3(HSH_Wx3)
      setWeather3Start(HSH_Wx3Starttime)
      setWeather3End(HSH_Wx3Endtime)
      setRain1(HSH_Pop1)
      setRain2(HSH_Pop2)
      setRain3(HSH_Pop3)
      setminT1(HSH_min1)
      setminT2(HSH_min2)
      setminT3(HSH_min3)
      setmaxT1(HSH_max1)
      setmaxT2(HSH_max2)
      setmaxT3(HSH_max3)
    } else if (chosen === "苗栗縣") {
      setLocation(MAL_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(MAL_Wx1)
      setWeather1Start(MAL_Wx1Starttime)
      setWeather1End(MAL_Wx1Endtime)
      setWeather2(MAL_Wx2)
      setWeather2Start(MAL_Wx2Starttime)
      setWeather2End(MAL_Wx2Endtime)
      setWeather3(MAL_Wx3)
      setWeather3Start(MAL_Wx3Starttime)
      setWeather3End(MAL_Wx3Endtime)
      setRain1(MAL_Pop1)
      setRain2(MAL_Pop2)
      setRain3(MAL_Pop3)
      setminT1(MAL_min1)
      setminT2(MAL_min2)
      setminT3(MAL_min3)
      setmaxT1(MAL_max1)
      setmaxT2(MAL_max2)
      setmaxT3(MAL_max3)
    } else if (chosen === "彰化縣") {
      setLocation(CHW_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(CHW_Wx1)
      setWeather1Start(CHW_Wx1Starttime)
      setWeather1End(CHW_Wx1Endtime)
      setWeather2(CHW_Wx2)
      setWeather2Start(CHW_Wx2Starttime)
      setWeather2End(CHW_Wx2Endtime)
      setWeather3(CHW_Wx3)
      setWeather3Start(CHW_Wx3Starttime)
      setWeather3End(CHW_Wx3Endtime)
      setRain1(CHW_Pop1)
      setRain2(CHW_Pop2)
      setRain3(CHW_Pop3)
      setminT1(CHW_min1)
      setminT2(CHW_min2)
      setminT3(CHW_min3)
      setmaxT1(CHW_max1)
      setmaxT2(CHW_max2)
      setmaxT3(CHW_max3)
    } else if (chosen === "彰化縣") {
      setLocation(NTO_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(NTO_Wx1)
      setWeather1Start(NTO_Wx1Starttime)
      setWeather1End(NTO_Wx1Endtime)
      setWeather2(NTO_Wx2)
      setWeather2Start(NTO_Wx2Starttime)
      setWeather2End(NTO_Wx2Endtime)
      setWeather3(NTO_Wx3)
      setWeather3Start(NTO_Wx3Starttime)
      setWeather3End(NTO_Wx3Endtime)
      setRain1(NTO_Pop1)
      setRain2(NTO_Pop2)
      setRain3(NTO_Pop3)
      setminT1(NTO_min1)
      setminT2(NTO_min2)
      setminT3(NTO_min3)
      setmaxT1(NTO_max1)
      setmaxT2(NTO_max2)
      setmaxT3(NTO_max3)
    } else if (chosen === "雲林縣") {
      setLocation(YLH_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(YLH_Wx1)
      setWeather1Start(YLH_Wx1Starttime)
      setWeather1End(YLH_Wx1Endtime)
      setWeather2(YLH_Wx2)
      setWeather2Start(YLH_Wx2Starttime)
      setWeather2End(YLH_Wx2Endtime)
      setWeather3(YLH_Wx3)
      setWeather3Start(YLH_Wx3Starttime)
      setWeather3End(YLH_Wx3Endtime)
      setRain1(YLH_Pop1)
      setRain2(YLH_Pop2)
      setRain3(YLH_Pop3)
      setminT1(YLH_min1)
      setminT2(YLH_min2)
      setminT3(YLH_min3)
      setmaxT1(YLH_max1)
      setmaxT2(YLH_max2)
      setmaxT3(YLH_max3)
    } else if (chosen === "屏東縣") {
      setLocation(IUH_city)
      console.log(document.querySelector('.dropdown').value)
      setWeather1(IUH_Wx1)
      setWeather1Start(IUH_Wx1Starttime)
      setWeather1End(IUH_Wx1Endtime)
      setWeather2(IUH_Wx2)
      setWeather2Start(IUH_Wx2Starttime)
      setWeather2End(IUH_Wx2Endtime)
      setWeather3(IUH_Wx3)
      setWeather3Start(IUH_Wx3Starttime)
      setWeather3End(IUH_Wx3Endtime)
      setRain1(IUH_Pop1)
      setRain2(IUH_Pop2)
      setRain3(IUH_Pop3)
      setminT1(IUH_min1)
      setminT2(IUH_min2)
      setminT3(IUH_min3)
      setmaxT1(IUH_max1)
      setmaxT2(IUH_max2)
      setmaxT3(IUH_max3)
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
