// Global variables
const formRef = document.getElementById("schedular-form");
const inputFields = {
	fname: document.getElementById("fname"),
	lname: document.getElementById("lname"),
	date: document.getElementById("date"),
	time: document.getElementById("time"),
};
const submitBtn = document.getElementById("submit-btn");

formRef.onsubmit = () => {
	let isValid = checkFormValidity();
};

// Helper function
function checkFormValidity() {
	let valid = true;

	if (inputFields.fname.value.trim() == "") {
		valid = false;
		document.getElementById("err-fname").style.display = "block";
	}

	if (inputFields.lname.value.trim() == "") {
		valid = false;
		document.getElementById("err-lname").style.display = "block";
	}

	if (inputFields.date.value.trim() == "") {
		valid = false;
	}

	if (inputFields.time.value.trim() == "") {
		valid = false;
	}

	// Return validitiy
	return valid;
}
