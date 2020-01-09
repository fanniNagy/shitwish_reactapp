import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputHook from "../hook/inputHook";

function AddProduct(props){
    let sellerName = InputHook();
    let phoneNumber = InputHook();
    let email = InputHook();
    let productName = InputHook();
    let price = InputHook();
    let condition = InputHook();
    let description = InputHook();
    let pictureUrl = InputHook();

    return (
        <div className={'search-container'}>
            <Form onSubmit={submitHandler}>
                <Form.Control required size="lg" type="text" placeholder="Full name" {...sellerName}/>
                <Form.Control required size="lg" type="text" placeholder="Phone number" {...phoneNumber}/>
                <Form.Control required size="lg" type="text" placeholder="Email address" {...email}/>
                <Form.Control required size="lg" type="text" placeholder="Product name" {...productName}/>
                <Form.Control required size="lg" type="text" placeholder="Price" {...price}/>
                <Form.Control as="select" {...condition}>
                    <option>NEW</option>
                    <option>RENEWED</option>
                    <option>USED_VERY_GOOD</option>
                    <option>USED_GOOD</option>
                    <option>USED_ACCEPTABLE</option> </Form.Control>
                <Form.Control required size="lg" type="text" as="textarea" rows="3" placeholder="Description" className={'search-bar'} {...description}/>
                <Form.Control required size="lg" type="text" placeholder="Picture url" className={'search-bar'} {...pictureUrl}/>
            </Form>
            <Button variant="info" type="submit" className={'search-button'} onClick={submitHandler}
                    disabled={!validateForm()}>
                Sell
            </Button>
        </div>
    );

    function submitHandler(event) {
        event.preventDefault();
        console.log(sellerName.value);
        console.log(condition.value);
        postData();
        setTimeout(()=>{props.history.push(`/`)}, 2000)
    }

    function postData(){
        const url = "http://localhost:8762/product";
        const body={productName: productName,
            description: description,
            condition: condition,
            price: price,
            pictureUrl: pictureUrl,
            sellerName: sellerName,
            phoneNumber: phoneNumber,
            email: email};
        console.log(body);
        fetch(
            url,
            {
                method:"PUT",
                body:JSON.stringify({
                    productName: productName.value,
                    description: description.value,
                    condition: condition.value,
                    price: price.value,
                    pictureUrl: pictureUrl.value,
                    sellerName: sellerName.value,
                    phoneNumber: phoneNumber.value,
                    email: email.value
                }),
                headers:{
                    'Accept':"application/json",
                    'Content-Type':"application/json"
                }
            }
        )
    }

    function validateForm() {
        return sellerName.value.length > 0;
    }
}
export default AddProduct;