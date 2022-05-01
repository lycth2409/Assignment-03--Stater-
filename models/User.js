class User {
    constructor(firstname, lastname, username, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }
}
function parseUser(userData) {
	const user = new User(userData.firstname, userData.lastname, userData.username, userData.password)
	return user
}
