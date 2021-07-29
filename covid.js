import React, { useEffect, useState } from 'react';
import './covid.css';



const Covid = ()=>{
    const [data,setData] =useState([]);
    const getCovidData = async()=>{
        try{
            const res = await  fetch('https://api.covid19india.org/data.json');
           const actualData = await res.json();
           console.log(actualData.statewise[0]);
           setData(actualData.statewise[0])
        }catch(err){
console.log(err);
        }
        
    }
    useEffect(()=>{
      getCovidData(); 
    }, []);
    return(
        <><h4>By SohailPatel</h4>
        <section>
     
        <h1>🔴LIVE</h1>
        <h3>Current COVID19 Cases</h3>
        <ul className="box">
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>IN</span> COUNTRY</p>
                    <p className="card__small">INDIA</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>TOTAL</span> RECOVERED</p>
                    <p className="card__small">{data.recovered}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                    <p className="card__small">{data.confirmed}</p>
                    </div>
                </div>
            </li>
           
           
        </ul><br/>
        <ul className="net"> 
        <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>TOTAL</span> DEATHS</p>
                    <p className="card__small">{data.deaths}</p>
                    </div>
                </div>
            </li>
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>TOTAL</span> ACTIVE</p>
                    <p className="card__small">{data.active}</p>
                    </div>
                </div>
            </li>
          
            <li className="card">
                <div className="card__main">
                    <div className="card__inner">
                    <p className="card__name"><span>LAST</span> UPDATED</p>
                    <p className="card__small">{data.updated}</p>
                    </div>
                </div>
            </li></ul>
        </section>
        </>
    )
}
export default Covid;