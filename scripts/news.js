'use strict'
// api url
const api_url =
	"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6c0321d37f5743d7b7cfc504fbe40a78";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th></th>
		<th></th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.articles) {
		tab += `<tr>
	<td><img src=${r.urlToImage} width=100%> </td>
	<td>${r.title} <br> ${r.description} <br> ${r.content}</td>
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("news").innerHTML = tab;
}
