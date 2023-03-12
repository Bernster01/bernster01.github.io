export class Project {
    #name;
    #description;
    #fullDescription;
    #html;
    #image;
    #video;
    constructor(projectData) {
        this.name = projectData.name;
        this.description = projectData.description;
        this.fullDescription = projectData.fullDescription;
        this.image = projectData.image;
        this.html = this.projectHtml(projectData);
    }
    projectHtml(project) {
        console.log(project);
        const html = `
        <div class="project">
            <a href="${project.site}" target="_blank">
            <div class="project-content">
                <h1>${project.name}</h1>
                <img src="${project.image}" alt="${project.name}">
                <p>${project.description}</p>
            </div>
            </a>   
        </div>
               
            `;
        return html;

    }
}