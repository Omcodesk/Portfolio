// Portfolio interactions and dynamic rendering for Om Chaddha

// Render skills from skillsData
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container || !Array.isArray(skillsData)) return;

  container.innerHTML = "";

  skillsData.forEach((group) => {
    const card = document.createElement("article");
    card.className = "skill-group";

    const title = document.createElement("h4");
    title.textContent = group.category;
    card.appendChild(title);

    const list = document.createElement("ul");
    (group.items || []).forEach((item) => {
      const li = document.createElement("li");
      li.className = "skill-tag";
      li.textContent = item;
      list.appendChild(li);
    });

    card.appendChild(list);
    container.appendChild(card);
  });
}

// Render projects from projectsData
function renderProjects() {
  const engineeringContainer = document.getElementById("engineering-projects");
  const freelanceContainer = document.getElementById("freelance-projects");
  if (!engineeringContainer || !freelanceContainer || !Array.isArray(projectsData)) return;

  engineeringContainer.innerHTML = "";
  freelanceContainer.innerHTML = "";

  projectsData.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const meta = document.createElement("div");
    meta.className = "project-meta";

    const categoryPill = document.createElement("span");
    categoryPill.className = "project-pill";
    categoryPill.textContent =
      project.category === "engineering" ? "Engineering" : "Client / Freelance";

    meta.appendChild(categoryPill);

    if (project.techStack && project.techStack.length) {
      const tech = document.createElement("span");
      tech.className = "project-tech";
      tech.textContent = project.techStack.join(" · ");
      meta.appendChild(tech);
    }

    const description = document.createElement("p");
    description.textContent = project.description || "";

    const featureList = document.createElement("ul");
    featureList.className = "project-features";
    (project.features || []).forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });

    const links = document.createElement("div");
    links.className = "project-links";

    if (project.github) {
      const githubLink = document.createElement("a");
      githubLink.href = project.github;
      githubLink.target = "_blank";
      githubLink.rel = "noopener";
      githubLink.textContent = "GitHub";
      links.appendChild(githubLink);
    }

    if (project.demo) {
      const demoLink = document.createElement("a");
      demoLink.href = project.demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener";
      demoLink.textContent = "Live Demo";
      links.appendChild(demoLink);
    }

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
    if (featureList.children.length) {
      card.appendChild(featureList);
    }
    if (links.children.length) {
      card.appendChild(links);
    }

    if (project.category === "engineering") {
      engineeringContainer.appendChild(card);
    } else {
      freelanceContainer.appendChild(card);
    }
  });
}

// Render resources from resourcesData
function renderResources() {
  const container = document.getElementById("resources-container");
  if (!container || !Array.isArray(resourcesData)) return;

  container.innerHTML = "";

  resourcesData.forEach((resource) => {
    const card = document.createElement("article");
    card.className = "resource-card";

    const title = document.createElement("h3");
    title.textContent = resource.title;

    const description = document.createElement("p");
    description.textContent = resource.description || "";

    card.appendChild(title);
    card.appendChild(description);

    if (resource.link) {
      const link = document.createElement("a");
      link.href = resource.link;
      link.textContent = "View resource";
      // allow intra-page anchors or external links
      if (resource.link.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noopener";
      }
      card.appendChild(link);
    }

    container.appendChild(card);
  });
}

// Scroll reveal for sections
function initScrollReveal() {
  const revealSections = document.querySelectorAll(".section.reveal");
  if (!revealSections.length) return;

  const handleReveal = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealSections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleReveal);
  handleReveal();
}

// Navbar shadow and background on scroll
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderResources();
  initScrollReveal();
  initNavbarScroll();
});
