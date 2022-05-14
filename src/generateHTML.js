const generateManager = function (manager) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-80">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-80">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">assignment_ind</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-5 mt-5">
        <div class="card h-80">
            <div class="card-header">
                <h2>${engineer.name}</h>
                <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>

        </div>
    </div>
    `
}

generateHTML = (data) => {

    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}