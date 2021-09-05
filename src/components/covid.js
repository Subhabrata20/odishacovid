import React, { useEffect, useState } from "react";
import './covid.css';
const Covid= ()=>{
    const [data, setData]= useState([]);
    const [dataTime, setDataTime]= useState([]);
    const getCovidData = async() =>{
        try{
            //const res = await fetch('https://data.covid19india.org/data.json');
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actaualData = await res.json();
            console.log(actaualData.OR);
            console.log(actaualData.OR.total);
            //setData(actaualData.statewise[0]);
            setDataTime(actaualData.OR.meta)
            setData(actaualData.OR.total);
            //console.log(dataTime)
            
        }catch(err){
            console.log(err);
        }
        

    }
    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <div>
        
        <h1 style={{color:'white',textAlign:'center'}}>LIVE <span style={{fontSize:20}}><br/>COVID 19 Tracker</span></h1>
        <h2 style={{color:'white',textAlign:'center'}}>ODISHA <span> {dataTime.date}</span></h2>
        <div className="startCard">
            <div className="ui cards" >
                {/* <div className="ui card" style={{backgroundColor:"blue"}}> */}
                

                <div className="ui card" >
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>Total</span> Tested</div>
                        <div className="meta"></div>
                        <div className="description">{data.tested}</div>
                    </div>
                </div>

                <div className="ui card" >
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>Total</span> Confirmed</div>
                        <div className="meta"></div>
                        <div className="description">{data.confirmed}</div>
                    </div>
                </div>

                <div className="ui card" >
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>Total</span> Recovered</div>
                        <div className="meta"></div>
                        <div className="description">{data.recovered}</div>
                    </div>
                </div>

                <div className="ui card" >
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>Total</span> Deaths</div>
                        <div className="meta"></div>
                        <div className="description">{data.deceased}</div>
                    </div>
                </div>
                <div className="ui card" >
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>1st Dose</span>Vaccinated</div>
                        <div className="meta"></div>
                        <div className="description">{data.vaccinated1}</div>
                    </div>
                </div>

                <div className="ui card">
                    <div className="content" >
                        <div className="header"><span style={{fontSize:12}}>2nd Dose</span>Vaccinated</div>
                        <div className="meta"></div>
                        <div className="description">{data.vaccinated2}</div>
                    </div>
                </div>

            </div>
        </div>
        
            {/* <h1>India</h1>
            <h2 ><span>Recovered</span>{data.recovered}</h2> */}
        </div>
    );

}
export default Covid;