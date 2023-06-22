function getFormvalue() {
    //Write your code here
	const fname = document.getElementById('form1').elements[0].value;
	const lname = document.getElementById('form1').elements[1].value;
	// console.log(fname);
	alert(fname+' '+lname);

}
getFormvalue();
