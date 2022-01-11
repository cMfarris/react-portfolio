import React from "react";
import Project from "../Project";

const projectsCard = [
  // Project list

  {
    deployedLink: "https://cmfarris.github.io/Portfilo/",
    imageIcon: "Portfilo.png",
    descriptionImage: "Portfolio",
    projectName: "Portfilo",
    projectDescription:
      "Application that is about me!",
    githubLink: "https://github.com/cMfarris/Portfilos",
    backgroundColor: "#e7eaf6",
    id: 1,
  },
  {
    deployedLink: "https://cmfarris.github.io/code-quiz/",
    imageIcon: "Code Quiz.png",
    descriptionImage: "Code Quiz",
    projectName: "code-quiz",
    projectDescription:
      "Application that test you on coding to help learn",
    githubLink: "https://github.com/cMfarris/code-quiz",
    backgroundColor: "a2a8d3",
    id: 2,
  },

function Portfolio() {
  return (
    <div>
      {projectsCard.map((project) => (
        <Project project={project} />
      ))}
    </div>
  );
}



