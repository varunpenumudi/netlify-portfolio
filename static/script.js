document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Add the Certificates
    const certsContainer = document.querySelector("#certs-container");
    if (certsContainer && typeof certificates !== 'undefined') {
        certificates.forEach(cert => {
            const html = `
                <div class="flex-none w-64 sm:w-72 rounded-lg overflow-hidden border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-transform hover:scale-105">
                    <img class="w-full h-40 sm:h-48 object-cover p-4" src="${cert.image}" alt="${cert.name}" />
                    <div class="p-4">
                        <h3 class="text-base sm:text-lg font-bold text-white mb-2">${cert.name}</h3>
                        <p class="text-xs sm:text-sm text-gray-300 mb-4">${cert.description}</p>
                        <a href="${cert.link}" 
                           class="inline-block px-4 py-2 rounded-full bg-sky-500/10 text-sky-400 text-xs sm:text-sm font-semibold hover:bg-sky-500/20 transition-colors"
                           target="_blank" rel="noopener noreferrer">
                            View Certificate
                        </a>
                    </div>
                </div>
            `;
            certsContainer.innerHTML += html;
        });
    }

    // Add the Projects to main page
    const projectsContainer = document.querySelector("#projects-container");
    
    if (projectsContainer && typeof projects !== 'undefined') {
        // Show only first 3 projects on main page
        projects.slice(0, 3).forEach(addProject);
        
        // Add "View All Projects" button
        projectsContainer.innerHTML += `
            <div class="flex-none w-56 sm:w-64 rounded-lg overflow-hidden border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-transform hover:scale-105 flex items-center justify-center">
                <a href="all_projects.html" 
                   class="p-4 text-center">
                    <div class="text-6xl text-sky-400 mb-4">→</div>
                    <p class="text-lg font-semibold text-sky-400">View All Projects</p>
                </a>
            </div>
        `;
    }

    function addProject(proj) {
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
            <div class="flex-none w-52 sm:w-64 rounded-lg overflow-hidden border border-gray-800 bg-gray-800/50 backdrop-blur-sm transition-transform hover:scale-105">
                <img class="w-full h-40 sm:h-48 object-cover p-4" src="${proj.image}" alt="${proj.name}" />
                <div class="p-4">
                    <h3 class="text-base sm:text-lg font-bold text-white mb-2">${proj.name}</h3>
                    <p class="text-xs sm:text-sm text-gray-300 mb-4">${proj.description}</p>
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
    }
});