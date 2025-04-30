import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import StyleContext from "../../contexts/StyleContext";
import "./SingleProject.scss";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";

export default function SingleProject() {
  const {id} = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        // Fetch the profile data
        const response = await fetch("/profile.json");
        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }

        const data = await response.json();
        const allProjects = data.data.user.pinnedItems.edges;

        // Find the specific project by ID
        const selectedProject = allProjects.find(
          project => project.node.id === id
        );

        if (selectedProject) {
          setProject(selectedProject.node);
        } else {
          throw new Error("Project not found");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!project) {
    return (
      <div className={isDark ? "dark-mode" : null}>
        <Header />
        <div className="main">
          <h1>Project Not Found</h1>
          <p>Sorry, the project you're looking for doesn't exist.</p>
          <Button
            text={"Back to Projects"}
            className="project-button"
            href="/#opensource"
            newTab={false}
          />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <Header />
      <div className="main single-project">
        <h1 className="project-title">{project.name}</h1>

        <div className="project-details">
          <div className="project-header">
            <div className="project-metadata">
              <p className="project-description">{project.description}</p>
              <div className="project-stats">
                <span>
                  <i className="fas fa-star"></i> {project.stargazerCount}
                </span>
                <span>
                  <i className="fas fa-code-branch"></i> {project.forkCount}
                </span>
              </div>
            </div>
          </div>

          <div className="project-topics">
            {project.repositoryTopics?.edges?.map(topic => (
              <span key={topic.node.id} className="topic">
                {topic.node.topic.name}
              </span>
            ))}
          </div>

          <div className="project-links">
            <Button
              text={"View Code"}
              className="project-button"
              href={project.url}
              newTab={true}
            />
            {project.homepageUrl && (
              <Button
                text={"Live Demo"}
                className="project-button"
                href={project.homepageUrl}
                newTab={true}
              />
            )}
          </div>

          {/* You can add more sections here like README content, screenshots, etc. */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
