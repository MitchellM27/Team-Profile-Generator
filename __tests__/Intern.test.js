const Intern = require('../team/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Mitchell', 27, 'mitchell@gmail.com', 'UCSD');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Mitchell', 27, 'mitchell@gmail.com', 'UCSD');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Mitchell', 27, 'mitchell@gmail.com.com', 'UCSD');

    expect(intern.getRole()).toEqual("Intern");
}); 