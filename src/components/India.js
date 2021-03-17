import React,{useState,useEffect} from 'react'
import './india.css'
import {Card} from 'react-bootstrap'
import Statedata from './Statedata'
import axios from 'axios'
import Teststate from './Teststate'

function India() {

    const [Country, setCountry] = useState([])

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            setCountry(response.data);
        })
        return () => {
            
        }
    }, [])
    return (
        <div className="row">

            <div className="col-md-12 " style={{marginTop:"-10px"}}>

                <img src="https://www.countryflags.io/in/shiny/64.png"></img>
                <h3>INDIA</h3>
            </div>

            <div className="col-md-12">
                <div className="row">

                    <div className="col-md-3">

                        <Card style={{ width: '18rem' }} className="badge badge-primary">
                            <Card.Body>
                                <Card.Title>TOTAL CASES</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{Country.cases}</Card.Subtitle>
                                <Card.Text>
                                   [TODAY case:]
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className="badge badge-warning">
                            <Card.Body>
                                <Card.Title>ACTIVE CASES</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{Country.active}</Card.Subtitle>
                                <Card.Text>
                                   [TODAY case :]
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className="badge badge-success">
                            <Card.Body>
                                <Card.Title>TOTAL RECOVERY</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{Country.recovered}</Card.Subtitle>
                                <Card.Text>
                                   [TODAY case :]
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                    <Card style={{ width: '18rem' }} className="badge badge-danger">
                            <Card.Body>
                                <Card.Title>DEATHS</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{Country.deaths}</Card.Subtitle>
                                <Card.Text>
                                   [TODAY  case :]
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                {/* <Statedata/> */}
                <Teststate></Teststate>
            </div>

        </div>
    )
}

export default India
