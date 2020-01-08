import React, {useEffect, useState} from "react";

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
            <div>   </div>
        )
    }
}

export default ProductPage;