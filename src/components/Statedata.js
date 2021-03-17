import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Accordion, Card, Button } from 'react-bootstrap'

function Statedata() {
    const [stateData, setstateData] = useState({})

    useEffect(() => {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            
            setstateData(response.data);
            // console.log(stateData)

            debugger
        });
        return () => {

        }
    }, [])

    let keys = Object.keys(stateData)
    console.log(keys)
    debugger

    return (


        <div className="row">
            <div className="col-md-12">
                <Accordion>

                    {
                        keys.map((itm, ky) => {
                            let districts = stateData[itm].districtData;
                            let district_keys = Object.keys(districts);
                            debugger;
                            // alert(district_keys)
                            let total_actived = 0;
                            let total_confirmed = 0;
                            let total_deaths = 0;
                            let total_recovery = 0;

                            let district_list = [];

                            for (let x in districts) {
                                total_actived += districts[x].active;
                                total_confirmed += districts[x].confirmed;
                                total_deaths += districts[x].deceased;
                                total_recovery += districts[x].recovered;

                                let ob = districts[x];
                                ob["district_name"] = x;

                                district_list.push(ob)
                            }
                           
                            debugger

                            return (
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="primary" eventKey={ky}>
                                            {itm} <span className="btn-dark p-1 mr-2">Total cases={ total_confirmed}</span> <span className="btn-dark p-1 mr-2">confirmed={ total_confirmed}</span> <span className="btn-dark p-1 mr-2">recovered={ total_recovery}</span> <span className="btn-dark p-1 mr-2">deaths={ total_deaths }</span> 
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={ky}>
                                        <Card.Body>
                                            <table className="table table-bordered table-stripped">
                                                <thead>
                                                    <td>Districts</td>
                                                    <td>confirmed</td>
                                                    <td>active</td>
                                                    <td>recovered</td>
                                                    <td>deaths</td>
                                                </thead>
                                                <tbody>
                                                    {
                                                        district_list.map((itm, ky) => {
                                                            debugger;
                                                            return (
                                                                <tr>
                                                                    <td>{itm.district_name}</td>
                                                                    <td>{itm.confirmed}</td>
                                                                    <td>{itm.active}</td>
                                                                    <td>{itm.recovered}</td>
                                                                    <td>{itm.deceased}</td>
                                                                    
                                                                </tr>

                                                            )

                                                        })
                                                        
                                                    }

                                                </tbody>
                                            </table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })
                    }


                </Accordion>

            </div>


        </div>
    )
}

export default Statedata
