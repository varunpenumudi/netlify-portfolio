document.addEventListener('DOMContentLoaded', () => {
    const mlTab = document.getElementById('ml-tab');
    const webTab = document.getElementById('web-tab');
    const projectsContainer = document.getElementById('all-projects-container');

    // Function to set active tab styles
    function setActiveTab(activeTab, inactiveTab) {
        activeTab.classList.add('bg-sky-400', 'text-white');
        activeTab.classList.remove('text-gray-300', 'hover:text-sky-400');
        inactiveTab.classList.remove('bg-sky-400', 'text-white');
        inactiveTab.classList.add('text-gray-300', 'hover:text-sky-400');
    }

    // Function to render projects
    function renderProjects(projectsList) {
        projectsContainer.innerHTML = '';
        projectsList.forEach(proj => {
            let demo = '';
            if (proj.demo_link) {
                demo = `
                    <a href="${proj.demo_link}" 
                       class="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold hover:bg-sky-500/20 transition-colors"
                       target="_blank" rel="noopener noreferrer">
                        Demo
                    </a>
                `;
            }

            const html = `
                <div class="rounded-lg overflow-hidden border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-transform hover:scale-105">
                    <img class="w-full h-48 object-cover p-4" src="${proj.image}" alt="${proj.name}" />
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-white mb-2">${proj.name}</h3>
                        <p class="text-sm text-gray-300 mb-4">${proj.description}</p>
                        <div class="space-x-2">
                            <a href="${proj.source_link}" 
                               class="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold hover:bg-sky-500/20 transition-colors"
                               target="_blank" rel="noopener noreferrer">
                                Source
                            </a>
                            ${demo}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.innerHTML += html;
        });
    }

    // Initial render - Machine Learning projects
    renderProjects(machine_learning);
    setActiveTab(mlTab, webTab);

    // Tab click handlers
    mlTab.addEventListener('click', () => {
        renderProjects(machine_learning);
        setActiveTab(mlTab, webTab);
    });

    webTab.addEventListener('click', () => {
        renderProjects(web_development);
        setActiveTab(webTab, mlTab);
    });
});