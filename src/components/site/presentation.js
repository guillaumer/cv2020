import React from "react"
import Button from "react-bootstrap/Button";

import resume from "../../content/CV_Guillaume_Raoult.pdf"

const Presentation = () => {
	return (
		 <div>
			 <h3>
				 Je suis un développeur web à Toulouse
			 </h3>
			 <p>
				 Issu de la "génération Internet", j'aime créer des choses simples et fonctionnelles à destination de tous.
			 </p>
			 <p>
				 J'aime aussi le vélo, le café et les livres.
			 </p>
			 <p className="text-center mt-5">
				 <Button href={resume} variant="outline-primary" type="submit" mr={2}>
					 Télécharger mon C.V.
				 </Button>
			 </p>
		 </div>
	)
}

export default Presentation
