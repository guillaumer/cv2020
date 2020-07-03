import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
	return (
		 <div>
			 <StaticQuery
				  query={graphql`
							{
								allSkillsYaml {
									edges {
										node {
											id
											title
											image {
										  		childImageSharp {
													fixed(height: 100, grayscale: true) {
													  ...GatsbyImageSharpFixed
													}
												}
											}
								  		}
									}
							  	}
							}
					  	  `}
				  render={data => (
					   <Row>
						   {data.allSkillsYaml.edges.map((edge) => {
							   return (
							   	 <Col key={edge.node.id} xs={6} lg={3} className="pb-5 text-center">
									 <Img fixed={edge.node.image.childImageSharp.fixed}  title={edge.node.title} alt={edge.node.title}/>
								 </Col>
							   )
						   })}
					   </Row>
				  )}
			 />
		 </div>
	)
}

export default Skills
