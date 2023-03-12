export class Project {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.html = projectHtml(this);
    }

    projectHtml(project) {
        const html = `
            <div class="project"></div>
            `;
        return html;
    
    }
}