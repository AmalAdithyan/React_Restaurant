import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Restcard.css'
function Restcard({ restdata }) {
    return (
        <div id='cal1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}> 
            <Link to={`/view-restaurant/${restdata.id}`} style={{textDecoration:'none',color:'white'}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={restdata.photograph} />
            <Card.Body>
                <Card.Title>{restdata.name}</Card.Title>
                <Card.Text>

                    <p><strong>Neighborhood :</strong>{restdata.neighborhood}</p>
                    <p><strong>Address :</strong>{restdata.address}</p>
                    <p><strong>Cuisine Type :</strong>{restdata.cuisine_type}</p>
                    

                </Card.Text>

            </Card.Body>
        </Card>
    </Link>
        </div>
    )
}

export default Restcard

//link is component used in reaxt router dom for redirection