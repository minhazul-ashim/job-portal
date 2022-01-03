import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../Images/not-found.jpg";

const NotFound = () => {
    return (
        <div className="my-5">
            <img src={img} alt="" className="w-100%" /> <br /> <br />
            <Link to="/">
                <Button>Back to home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
