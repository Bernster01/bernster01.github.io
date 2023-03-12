export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.html = this.projectHtml(this);
    }

    projectHtml(project) {
        const html = `
            <div class="project">
                <h1>${project.name}</h1>
                <p>${project.description}</p>   
            </div>
            `;
        return html;
    
    }
}