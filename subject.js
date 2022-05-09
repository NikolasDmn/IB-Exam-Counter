let subjects = [];
function addSubjectRow() {
	let name = window.prompt("Enter Subject Name");
	addData(name, "subjectRow");
	subjects.push(name);
	addMinSubject();
}

function addMinSubject() {
	let element = document.createElement("input");
	element.setAttribute("id", `subjectTime${subjects.length - 1}`);
	element.setAttribute("class", "minInput");
	element.setAttribute("type", "number");
	let parent = document.createElement("td");
	parent.appendChild(element);
	document.getElementById("timeRow").appendChild(parent);
}
function addData(text, id) {
	let element = document.createElement("td");
	let inText = document.createTextNode(text);
	element.appendChild(inText);
	document.getElementById(id).appendChild(element);
}

function clearData() {
	document.getElementById("30Row").innerHTML = "";
	addData("30 Min", "30Row");
	document.getElementById("5Row").innerHTML = "";
	addData("5 Min", "5Row");
	document.getElementById("finRow").innerHTML = "";
	addData("End Time", "finRow");
}

function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}

function startExam() {
	clearData();
	subjects.forEach((value, index) => {
		console.log(index);
		let element = document.getElementById(`subjectTime${index}`);
		tTime = element.value;
		let examTimeT = addMinutes(new Date(), tTime - 30);
		addData(
			`${examTimeT.getHours()}:${examTimeT.getMinutes()}:${examTimeT.getSeconds()}`,
			"30Row"
		);
		let examTimeF = addMinutes(new Date(), tTime - 5);
		addData(
			`${examTimeF.getHours()}:${examTimeF.getMinutes()}:${examTimeF.getSeconds()}`,
			"5Row"
		);
		let endTime = addMinutes(new Date(), tTime);
		addData(
			`${endTime.getHours()}:${endTime.getMinutes()}:${endTime.getSeconds()}`,
			"finRow"
		);
	});
	//create for loop over length of array
}
