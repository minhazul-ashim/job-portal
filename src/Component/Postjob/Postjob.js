import React, { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postJob } from "../../features/slices/jobSlice";
import useAuth from "../../hooks/useAuth";
import "./Postjob.css";

const Postjob = () => {

    const [success, setSuccess] = useState(false);

    const { user } = useAuth();

    const dispatch = useDispatch()

    const [formInfo, setFormInfo] = useState({})

    const handleInfo = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousInfo = { ...formInfo }
        previousInfo[field] = value;
        previousInfo.email = user.email;
        previousInfo.postingDate = new Date().toLocaleDateString();

        setFormInfo(previousInfo)
    }

    const handleSubmit = (e) => {

        dispatch(postJob(formInfo))

        e.target.reset();
        e.preventDefault()
    }

    return (

        <div className="p-5">

            <Container className="contact-form post-job-img">

                <div className="postJob-overlay">

                    <form onSubmit={handleSubmit} className="w-75 mx-auto">

                        <h2 className="text-dark fw-bold my-5">Post Job Requirement Informations</h2>

                        <input
                            type="text"
                            name='title'
                            placeholder="Job title"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            name='jobType'
                            placeholder="Job type"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            name='company'
                            placeholder="Company name"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            name='location'
                            placeholder="Location"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            name='deadline'
                            placeholder="Deadline"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <input
                            type="text"
                            name='job'
                            placeholder="Job"
                            className="form-control"
                            required onChange={handleInfo}
                        ></input>{" "}
                        <br /> <br />
                        <textarea
                            name="desc"
                            placeholder="Job description"
                            rows={8}
                            className="form-control"
                            required onChange={handleInfo}
                        ></textarea>{" "}
                        <br />
                        <Button
                            value="send"
                            className="form-control"
                            type="submit"
                            variant="primary"
                        >
                            Post
                        </Button>{" "}
                        <br /> <br />
                        {success && (
                            <Alert variant="primary">
                                Your post Successfully!
                            </Alert>
                        )}

                    </form>

                </div>

            </Container>
        </div>
    );
};

export default Postjob;
