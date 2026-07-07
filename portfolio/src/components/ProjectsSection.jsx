import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";

const projects = [
  {
    title: "SignSync",
    description:
      "Ferramenta de extensão para navegadores que traduz conteúdos audiovisuais em tempo real para Libras, utilizando IA, avatar 3D e integração com APIs de transcrição e tradução para promover acessibilidade digital a pessoas surdas.",
    imageSrc: photo1,
    link:"https://sign-sync-kappa.vercel.app/"
  },
  {
    title: "Game Dev",
    description:
      "Site oficial de um jogo desenvolvido na Unity, com informações sobre gameplay, novidades, downloads, atualizações e conteúdos exclusivos para a comunidade.  ⚠ Coming Soon ⚠",
    imageSrc: photo2,
  
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}

          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;