"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "E-commerce React ",
    description: "This website is an E-commerce platform, which serves as the final project for the React course at CoderHouse. In this project, we implemented the use of Hooks (useState, useEffect, and useContext), and of course, we also applied component creation. As for fetching information, we utilized Firebase, creating our database for products and purchase orders.",
    image: "https://res.cloudinary.com/duqilis2i/image/upload/v1695904736/Portfolio/e-commerce_callbj.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Emilianoperea1989/E-commerce-React-Perea",
    previewUrl: "https://e-commerce-emiliano-perea.netlify.app/",
  },
  {
    id: 2,
    title: "SPA Web Page",
    description: "This is a project for a client. It's built with React and TypeScript. It's a contact page where people can learn about what ecological bricks are made of and the benefits they offer. It also includes a photo gallery and a contact section where people can send an email to request more information. My brother initiated this project, and I collaborated with him despite not knowing much about TypeScript.",
    image: "https://res.cloudinary.com/duqilis2i/image/upload/v1695903409/Portfolio/eco-pre_fjrknl.png",
    tag: ["All", "Web", "Mobile" ],
    gitUrl: "https://github.com/Emilianoperea1989/EcoBrick",
    previewUrl: "https://ecopre.com.ar/",
  },

 { id: 3,
  title: "E-commerce JavaScript ",
  description: "This was my first project with JavaScript. It was the final assignment of the JavaScript section at Coderhouse. In this course, we learned how to manipulate the DOM, as well as how to handle objects and arrays along with their methods for manipulation.",
  image: "https://res.cloudinary.com/duqilis2i/image/upload/v1695908347/Portfolio/Untitled_jenvs7.png",
  tag: ["All", "Web"],
  gitUrl: "https://github.com/Emilianoperea1989/CorderHouse-Js",
  previewUrl: "https://emilianoperea1989.github.io/CorderHouse-Js/",
}]
  

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;