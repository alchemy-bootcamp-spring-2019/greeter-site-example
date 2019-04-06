import greetFullName from '../src/greetFullName.js';
const test = QUnit.test;

test('greetFullName returns a greeting with first, middle, and last name', function (assert) {
    // Arrange
    const expected = "Hello Willem Melvinator Larsen!";
    const firstName = "Willem";
    const middleName = "Melvinator";
    const lastName = "Larsen";
    // Act 
    const result = greetFullName(firstName, middleName, lastName);
    // Assert
    assert.equal(result, expected);
});

