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
                       class="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-semibold hover:bg-sky-500/20 transition-colors"
                       target="_blank" rel="noopener noreferrer">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        Live Demo
                    </a>
                `;
            }

            const fullDescription = proj.full_description ? 
                `<div class="mt-6 p-4 bg-gray-800/50 rounded-lg">
                    <h4 class="text-sm font-semibold text-sky-400 mb-2">Full Description</h4>
                    <div class="markdown text-sm text-gray-300">${marked.parse(proj.full_description)}</div>
                </div>` : '';

            const html = `
                <div class="rounded-lg overflow-hidden border border-gray-800 bg-gray-800/50 backdrop-blur-sm p-6">
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="md:w-1/3">
                            <div class="relative group">
                                <img class="w-full h-48 md:h-64 object-cover rounded-lg transition-transform group-hover:scale-105" 
                                     src="${proj.image}" 
                                     alt="${proj.name}" />
                                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg"></div>
                            </div>
                        </div>
                        <div class="md:w-2/3">
                            <h3 class="text-xl md:text-2xl font-bold text-white mb-3">${proj.name}</h3>
                            <p class="text-gray-300 mb-4">${proj.description}</p>
                            <div class="flex flex-wrap gap-3">
                                <a href="${proj.source_link}" 
                                   class="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-sm font-semibold hover:bg-sky-500/20 transition-colors"
                                   target="_blank" rel="noopener noreferrer">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    Source Code
                                </a>
                                ${demo}
                            </div>
                        </div>
                    </div>
                    ${fullDescription}
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