import { DataSource } from "./data-source.js";
import { Project } from "./project.js";
const dataSource = new DataSource();
function starterFunction() {
    dataSource.getData('https://bernster01.github.io/ASCII-video-player/', 'data/info.json', 'GET')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    let project = document.createElement('div');
    project.innerHTML = new Project('Project 1', 'Description 1').html;
    document.body.appendChild(project);

}
addEventListener('load', starterFunction);