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

	return isValid;
};

// Helper function
function checkFormValidity() {
	let valid = true;

	if (inputFields.fname.value.trim() == "") {
		valid = false;
		document.getElementById("err-fname").style.display = "block";
	} else{
		document.getElementById("err-fname").style.display = "none";
	}

	if (inputFields.lname.value.trim() == "") {
		valid = false;
		document.getElementById("err-lname").style.display = "block";
	} else{
		document.getElementById("err-lname").style.display = "none";
	}

	if (inputFields.date.value.trim() == "") {
		document.getElementById("err-date").style.display = "block";
		valid = false;
	} else{
		document.getElementById("err-date").style.display = "none";
		
	}

	if (inputFields.time.value.trim() == "") {
		document.getElementById("err-time").style.display = "block";
		valid = false;
	} else{
		document.getElementById("err-time").style.display = "none";
	}

	// Return validitiy
	return valid;
}
