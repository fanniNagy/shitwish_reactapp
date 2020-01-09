import React from "react";
import {Link} from "react-router-dom";

function Logo() {
    return (
        <div className="page-title">
            <Link to="/" style={{textDecoration:"none"}}>FosFogás</Link>
        </div>
    )
}

export default Logo;