const sections = document.querySelectorAll(`.section`);
const headers = document.querySelectorAll(`.header`);

const renderSections = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`animated-section`);
      sectionsObserver.unobserve(entry.target);
    }
  });
};

const renderHeaders = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(`animated-header`);
    }
  });
};

const sectionsObserver = new IntersectionObserver(renderSections, {
  threshold: 0.1,
});

const headersObserver = new IntersectionObserver(renderHeaders, {
  threshold: 0.1,
});

sections.forEach(section => sectionsObserver.observe(section));
headers.forEach(header => headersObserver.observe(header))