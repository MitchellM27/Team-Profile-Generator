const Manager = require('../team/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Mitchell', 27, 'mitchell@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Mitchell', 27, 'mitchell@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 