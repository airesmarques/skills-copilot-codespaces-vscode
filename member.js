function skillsMember() {
    var member = {
        name: 'John Doe',
        skills: ['JavaScript', 'HTML', 'CSS'],
        age: 25
    };

    // Iterate over the member object
    for (var key in member) {
        if (key === 'skills') {
            console.log(member[key].join(', '));
        } else {
            console.log(member[key]);
        }
    }
}