document.addEventListener('DOMContentLoaded', function () {
  const projectsContainer = document.querySelector('.projects-list');
  const loadMoreBtn = document.querySelector('.load-more-button');
  const loadMoreLine = document.querySelector('.load-more-line');
  const allProjects = Array.from(document.querySelectorAll('.projects-item'));

  const projectsPerLoad = 3;
  let visibleProjectsCount = projectsPerLoad;

  function hideInitialProjects() {
    allProjects.forEach((project, index) => {
      if (index >= visibleProjectsCount) {
        project.classList.add('hidden-project');
      }
    });
  }

  function showMoreProjects() {
    const nextProjects = allProjects.slice(
      visibleProjectsCount,
      visibleProjectsCount + projectsPerLoad
    );

    nextProjects.forEach((project, index) => {
      project.classList.remove('hidden-project');
      project.style.opacity = '0';
      project.style.transition = 'opacity 0.3s ease';

      setTimeout(() => {
        project.style.opacity = '1';
      }, index * 100);
    });

    visibleProjectsCount += nextProjects.length;

    if (visibleProjectsCount >= allProjects.length) {
      loadMoreBtn.style.display = 'none';
      loadMoreLine.style.display = 'none';
    }
  }

  function init() {
    hideInitialProjects();

    if (visibleProjectsCount >= allProjects.length) {
      loadMoreBtn.style.display = 'none';
      loadMoreLine.style.display = 'none';
    }

    loadMoreBtn.addEventListener('click', showMoreProjects);
  }

  init();
});
