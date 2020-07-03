import Presentation from "./site/presentation";
import Skills from "./site/skills";
import Works from "./site/works";
import Contact from "./site/contact";

import React from "react";

const sections = [
	{
		title: "A propos",
		classe: "presentation",
		href: "/#presentation",
		children: <Presentation/>
	},
	{
		title: "Compétences",
		classe: "skills",
		href: "/#skills",
		children: <Skills/>
	},
	{
		title: "Réalisations",
		classe: "work",
		href: "/#work",
		children: <Works/>
	},
	{
		title: "Contact",
		classe: "contact",
		href: "/#contact",
		children: <Contact/>
	}
]

export default sections