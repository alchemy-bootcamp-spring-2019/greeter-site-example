const test = QUnit.test;

function greetFullName(first, last) {
    return "Hello " + first + " " + last + "!";
}

test('greetFullName returns a greeting', function (assert) {
    // Arrange
    const expected = "Hello Willem Larsen!";
    const firstName = "Willem";
    const lastName = "Larsen";
    // Act 
    const result = greetFullName(firstName, lastName);
    // Assert
    assert.equal(result, expected);
});