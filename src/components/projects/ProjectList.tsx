"use client";

import { useState } from "react";
import { type ProjectCategory } from "@/const/ProjectCategories";
import { PROJECTS } from "@/data/projects";
import ProjectItem from "./ProjectItem";
import ProjectTabs, { matchesCategory } from "./ProjectTabs";

export default function ProjectList() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filteredProjects = PROJECTS.filter((p) =>
    matchesCategory(p.category, active),
  );

  return (
    <>
      <ProjectTabs active={active} onChange={setActive} />
      <ul>
        {filteredProjects.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </ul>
    </>
  );
}
