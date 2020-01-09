import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import Form from "react-bootstrap/Form";
import InputHook from "../hook/inputHook";

function PopoverAtBottom(props) {
    const id = props.id;
    let buyerName = InputHook();

    console.log(id);

    function submitHandler(event) {
        event.preventDefault();
        console.log(buyerName.value);
        sendData();
    }

    function sendData(){
        const url = `http://localhost:8762/product/${id}/buy`;
        fetch(
            url,
            {
                method:"POST",
                body:JSON.stringify({
                    name : buyerName.value
                }),
                headers:{
                    'Accept':"application/json",
                    'Content-Type':"application/json"
                }
            }
        ).then(
            () => setTimeout(()=> props.history.push(`/`), 2000)
        )
    }

    return (
        <OverlayTrigger
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
                <Popover id={`popover-positioned-bottom`}>
                    <Popover.Title as="h3">Please give me your name!</Popover.Title>
                    <Popover.Content>
                        <Form onSubmit={submitHandler}>
                            <Form.Control required size="lg" type="text" placeholder="Full name"
                                          className={'search-bar'} {...buyerName}/>
                                          <Button type="submit" variant="info" style={{alignSelf:"center"}}>Buy</Button>
                        </Form>
                    </Popover.Content>
                </Popover>
            }
        >
            <Button variant="info">Get this!</Button>
        </OverlayTrigger>
    )
}

export default PopoverAtBottom;