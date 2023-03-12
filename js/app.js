import { DataSource } from "./data-source.js";
import { Project } from "./project.js";
const dataSource = new DataSource();
async function starterFunction() {
    await dataSource.getData('https://bernster01.github.io/ASCII-video-player/', 'data/info.json', 'GET')
        .then(response => response.json())
        .then(data => {
            let project = new Project(data);
            displayProject(project);
        });

}
function displayProject(project){
    let projectDiv = document.createElement('div');
    projectDiv.innerHTML = project.html;
    document.body.appendChild(projectDiv);
}
addEventListener('load', starterFunction);