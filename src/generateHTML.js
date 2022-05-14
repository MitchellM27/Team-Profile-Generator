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
        <div class="card h-100">
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
};
