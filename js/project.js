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
    set image(image) {
        this.#image = image;
    }
    set video(video) {
        this.#video = video;
    }
    projectHtml(project) {
        console.log(project);
        const html = `
        <div class="project">
            <a href="${project.site}" target="_blank">
                <h1>${project.name}</h1>
                <img src="${project.image}" alt="${project.name}">
                <p>${project.description}</p>
            </a>   
        </div>
               
            `;
        return html;

    }
}