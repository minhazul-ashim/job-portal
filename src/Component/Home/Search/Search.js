import React, { useState } from "react";
import {
    Button,
    Col,
    Container,
    Row,
} from "react-bootstrap";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const searchHandler = (e) => {
        e.preventDefault();
        console.log(searchTerm)
    };
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={12} lg={6} className="mx-auto">
                    <form className="my-3" onSubmit={searchHandler}>
                        <input
                            placeholder="Search By Job Title"
                            type="text"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={{
                                width: "50%",
                                borderRadius: "300px",
                                marginright: "5px",
                                padding: "8px",
                                paddingLeft: "30px",
                            }}
                        />
                        <Button
                            style={{ borderRadius: "300px", marginLeft: "5px" }}
                            type="submit"
                        >
                            Search Job
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;
