function clearErrors(){
	for(var loopCounter = 0; loopCounter < document.forms["myForm"].elements.length; loopCounter++){
		if(document.forms["myForm"].elements[loopCounter].parentElement.className.indexOf("has-") !== -1){
			document.forms["myForm"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function resetForm(){
	clearErrors();
	document.forms["myForm"]["startingNumber"].value = "";
	document.forms["myForm"]["endingNumber"].value = "";
	document.forms["myForm"]["stepNumber"].value = "";
	document.getElementById("results").style.display = "none";
	document.getElementById("displayEvensButton").innerText = "Display Evens";
	document.forms["myForm"]["startingNumber"].focus();
}

function toFindEvenNumbers(startingNumber, endingNumber, stepNumber){
	var evenNumbers = [];
	for(var loopCounter = startingNumber; loopCounter < endingNumber; loopCounter += stepNumber){
		if(loopCounter % 2 == 0){
			evenNumbers.push(loopCounter);
		}
	}
	return evenNumbers.join(", ");
}

function submitForm(){
	var startingNumber = parseInt(document.forms["myForm"]["startingNumber"].value);
	var endingNumber = parseInt(document.forms["myForm"]["endingNumber"].value);
	var stepNumber = parseInt(document.forms["myForm"]["stepNumber"].value);

	if(startingNumber == "" || isNaN(startingNumber)){
		alert("Starting Number must be filled in with a numeric value!");
		document.forms["myForm"]["startingNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["startingNumber"].focus();
		return false;
	}

	if(endingNumber == "" || isNaN(endingNumber) || endingNumber <= startingNumber){
		alert("Ending Number must be filled in with a numeric value and must be greater than Starting Number!");
		document.forms["myForm"]["endingNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["endingNumber"].focus();
		return false;
	}

	if(stepNumber == "" || isNaN(stepNumber) || stepNumber <= 0){
		alert("Step Number must be filled in with a numeric value and must be positive number!");
		document.forms["myForm"]["stepNumber"].parentElement.className = "form-group has-error";
		document.forms["myForm"]["stepNumber"].focus();
		return false;
	}

	document.getElementById("results").style.display = "block";
	document.getElementById("displayEvensButton").innerText = "Recalculate";
	document.getElementById("resultCaption").innerText = "Here are the even numbers between " + startingNumber + " and " + endingNumber + " by " + stepNumber + "'s";
	document.getElementById("evenNumberResult").innerText = toFindEvenNumbers(startingNumber, endingNumber, stepNumber);

	return false;
}