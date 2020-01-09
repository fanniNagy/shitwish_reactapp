import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function ProductPage({match}) {
    const id = match.params.id;

    const url = `http://localhost:8762/product/${id}`;
    const [details, setDetails] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await fetch(url, {
                method: "GET"
            });
            if (response.status > 399) {
                setError(true);
                setLoading(false);
            } else {
                const data = await response.json();
                setDetails(data);
                setError(false);
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    if (error) {
        return (<div>
            error :(
        </div>)
    } else if (loading) {
        return (
            <div>
                loading..
            </div>)
    } else{
        console.log(details);
        return (
            <div className="container">
                    <div className="picture">
                        <img src={details.pictureUrl} alt="" style={{width:"100%"}}/>
                    </div>
                    <div className="specification" >
                        <div className="product-name"><h2>{details.productName}</h2></div>
                        <div className="price"><h4><Badge variant="info">{details.price} möney</Badge></h4></div>
                        <div className="description">
                            <Table borderless={true}>
                                <thead/>
                                <tbody>
                                <tr>
                                    <td className="row">Condition</td>
                                    <td>{details.condition}</td>
                                </tr>
                                <tr>
                                    <td className="row">Description</td>
                                    <td id="description">{details.description} </td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="buy-button"><Button variant="info">Get it!</Button></div>
                    </div>
                <div className="seller-info">
                    <Accordion className="seller-acc">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">Seller info</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        )
    }
}

export default ProductPage;