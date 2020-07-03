import React from "react"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Section = (props) => {
	return (
		 <section id={props.classe} className={props.classe}>
			 <Container className="content-container">
				 <Row>
					 <Col xs={12} lg={{span: 8, offset: 2}}>
						 <h2>{props.title}</h2>
						 {props.children}
					 </Col>
				 </Row>
			 </Container>
		 </section>
	)
}

export default Section
