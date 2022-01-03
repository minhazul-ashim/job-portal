import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Alert, Button, Container} from "react-bootstrap";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_dvg6d1l",
                "template_6uw69ov",
                e.target,
                "user_6G3ltyQPq4D913yRocuZG"
            )
            .then((data) => {
                setSuccess(true);
            })
            .catch((err) => {
                setSuccess(false);
            });
        e.preventDefault();
    };

    return (
        <Container className="contact-form py-5">
            <form className="w-50" onSubmit={sendEmail}>
                <h2 className="text-primary fw-bold">Contact with us</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="form-control"
                    required
                ></input>{" "}
                <br /> <br />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your email"
                    className="form-control"
                    required
                ></input>{" "}
                <br /> <br />
                <textarea
                    name="message"
                    placeholder="Your message"
                    className="form-control"
                    required
                ></textarea>{" "}
                <br />
                <Button
                    value="send"
                    className="form-control"
                    type="submit"
                    variant="primary"
                >
                    Send
                </Button> <br /> <br />
            {success && (
                <Alert variant="primary">Your Email Send Successfully!</Alert>
            )}
            </form>
        </Container>
    );
};

export default Contact;
