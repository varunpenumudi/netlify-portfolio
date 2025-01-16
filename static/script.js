document.addEventListener('DOMContentLoaded', () => {
    // Add the Ceritificates

    certificates.forEach(cert => {
      html = `
      <div class="min-w-72 m-3 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <img class="w-full px-6 pt-6 h-[50%]" src="${cert.image}" alt="${cert.name}" />
          <div class="px-6 py-4">
            <div class="mb-2 text-base font-bold">${cert.name}</div>
            <p class="text-sm"> ${cert.description}</p>
          </div>
          <div class="px-6 pb-2 text-sm">
            <a href="${cert.link}" class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">View Certificate</a>
          </div>
      </div>
      `;
      document.querySelector("#certs-container").innerHTML += html;
    });

    // Add the Projects
    console.log(projects);

    
    projects.forEach(proj => {
      demo = '';

      if (proj.demo_link != '') {
        demo = `<a href="${proj.demo_link}" class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Demo</a>`;
      }

      html = `
        <div class="min-w-72 m-3 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
            <img class="w-full px-6 pt-6 h-[50%]" src="${proj.image}" alt="${proj.name}" />
            <div class="px-6 py-4">
              <div class="mb-2 text-base font-bold">${proj.name}</div>
              <p class="text-sm"> ${proj.description}</p>
            </div>
            <div class="px-6 pb-2 text-sm">
              <a href="${proj.source_link}" class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700">Source</a>
              ${demo}
              </div>
        </div>
      `;

      document.querySelector("#projects-container").innerHTML += html;
    })

})