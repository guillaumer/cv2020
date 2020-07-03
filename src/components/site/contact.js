import React, {useState} from "react"
import axios from "axios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const Contact = () => {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: {ok, msg}
		});
		if (ok) {
			form.reset();
		}
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({submitting: true});
		axios({
			method: "post",
			url: "https://getform.io/f/165a70e1-5717-44ec-9741-95fa73540c65",
			data: new FormData(form)
		})
		.then(r => {
			handleServerResponse(true, "Merci !", form);
		})
		.catch(r => {
			handleServerResponse(false, "Une erreur s'est produite", form);
		});
	};
	
	return (
		 <Row>
			 <Col xs={12} lg={4}>
				 <Row className="networks text-center mb-4">
					 <Col xs={{span: 2, offset: 4}} lg={{span: 4, offset: 0}}>
						 <a href="https://www.linkedin.com/in/guillaume-raoult/" target="_blank" rel="noreferrer nofollow">
							 <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								 <path
									  fill = "#bbbbbb" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
							 </svg>
						 </a>
					 </Col>
					 <Col xs={2} lg={4}>
						 <a href="https://github.com/guillaumer" target="_blank" rel="noreferrer nofollow">
							 <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								 <path
									  fill = "#bbbbbb" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
							 </svg>
						 </a>
					 </Col>
				 </Row>
			 </Col>
			 <Col xs={12} lg={8}>
				 <Form onSubmit={handleOnSubmit} autoComplete="off">
					 <Form.Row>
						 <Form.Group as={Col} controlId="formFirstName">
							 <Form.Label className="text-muted">Prénom*</Form.Label>
							 <Form.Control required name="Prenom" type="text" placeholder=""/>
						 </Form.Group>
						 <Form.Group as={Col} controlId="formLastName">
							 <Form.Label className="text-muted">Nom*</Form.Label>
							 <Form.Control required name="Nom" type="text" placeholder=""/>
						 </Form.Group>
					 </Form.Row>
					 <Form.Group controlId="formEmail">
						 <Form.Label className="text-muted">Email*</Form.Label>
						 <Form.Control required name="Email" type="email" placeholder=""/>
					 </Form.Group>
					 <Form.Group controlId="formMessage">
						 <Form.Label className="text-muted">Message*</Form.Label>
						 <Form.Control required name="Message" as="textarea" rows="3"/>
					 </Form.Group>
					 <Button variant="outline-primary" type="submit" mr={2}>
						 Envoyer
					 </Button>
					 {serverState.status && (
						  <Alert className="mt-3" variant={!serverState.status.ok ? "danger" : "success"}>
							  {serverState.status.msg}
						  </Alert>
					 )}
				 </Form>
			 </Col>
		 </Row>
	)
}

export default Contact
