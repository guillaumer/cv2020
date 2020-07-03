import React from "react"

import Col from "react-bootstrap/Col";

export default function Footer() {
	return (
		 <Col xs={12} className="align-items-center mt-auto">
			 <footer>
				 <p>
					 Fait avec <span role="img" aria-label="coffee" className="coffee">&#9749;</span> et <a href="https://www.gatsbyjs.org/"
													target="_blank" rel="noreferrer nofollow">GatsbyJS</a>
				 </p>
			 </footer>
		 </Col>
	)
}