function toggleMobileMenu(){
    document.getElementById('menu').classList.toggle('active');
}

 
const projectContainer = document.querySelector('.bento-grid');

projects.forEach(project => {
  const projectElement = document.createElement('a');
  projectElement.href = project.link;
  projectElement.className = 'bento-item';
  projectElement.innerHTML = `<img src="${project.imageUrl}" alt="${project.title}" width="100%">`;
  projectContainer.appendChild(projectElement);
});

   
  
  