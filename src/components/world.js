import React,{useState,useEffect} from 'react'
import axios from 'axios'


function World() {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>{
            console.log(response.data)
            setData(response.data)
            debugger
        })
        return () => {
            
        }
    }, [])

    return (
        <div className="row">
            <div className="col-md-12" >
                <table className="table table-primary table-bordered table-stripped" >
                    <thead>
                        <td>country name  </td>
                        <td>total cases</td>
                        <td>active</td>
                        <td>recovery</td>
                        <td>deaths</td>

                    </thead>
                    <tbody>
                        {
                            Data.map((itm,ky)=>{
                                return(
                                <tr>
                                    <td>{itm.country}
                                    <img src={itm.countryInfo.flag} style={{width:'64px',marginLeft:'10px'}}></img></td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.active}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            
        </div>
    )
}

export default World
