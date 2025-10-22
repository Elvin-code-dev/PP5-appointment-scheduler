// Import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3005;

// Enable static file serving
app.use(express.static("public"));

//post method submissions
app.use(express.urlencoded({ extended: true }));

//store the data
const appointments = [];

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get("/", (req, res) => {
	// Send a response to the client
	// res.send(`<h1>Welcome to Poppa\'s Pizza!</h1>`);
	res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// define a "admin route"
app.get("/admin-panel", (req, res) => {
	res.send(appointments);
});

app.post("/confirm", (req, res) => {
	// Extract form data from the request body
	const appointment = {
		fname: req.body.fname,
		lname: req.body.lname,
		date: req.body.date,
		time: req.body.time,
	};

	// Add appointment to a list
	appointments.push(appointment);

	// send the simple confirmation message back to the browser
	res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});
// Start the server and make it listen on the port
// specified above
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
