import Img from 'gatsby-image';
import React from 'react';
import Card from "react-bootstrap/Card";

const Gallery = ({projects}) => {
	return (
		 <div className="masonry masonry--h">
			 {projects.map((project, i) => {
				 return (
					  <div key={project.key} className="masonry-brick masonry-brick--h">
						  <Card className="text-center">
							  <Card.Body>
								  <Card.Title>{project.caption}</Card.Title>
								  <Card.Text>
									  {project.desc}
								  </Card.Text>
							  </Card.Body>
							  <Card.Footer className="text-muted">{project.tech}</Card.Footer>
						  </Card>
						  <Img
							   fluid={project}
							   alt={project.caption}
						  />
					  </div>
				 )
			 })}
		 </div>
	);
};

export default Gallery;