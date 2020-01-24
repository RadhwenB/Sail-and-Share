function profile() {
	if(sessionStorage.getItem("firstname")!=null){
		window.location = "profile.html";
	}else{
		window.location = "select.html";

	}
	return true;
}

function lesseeProfile(){
	window.sessionStorage.setItem("profileType", "Lessee");
	window.location = "login.html"
}

function ownerProfile(){
	window.sessionStorage.setItem("profileType", "Boat Owner");
	window.location = "login.html"
}

function skipperProfile(){
	window.sessionStorage.setItem("profileType", "Skipper");
	window.location = "login.html"
}


function validate(){
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var nber = document.getElementById("nber").value;

	if (document.getElementById('yes').checked) {
	  window.sessionStorage.setItem("licence", document.getElementById('yes').value);
	}else{
		window.sessionStorage.setItem("licence", document.getElementById('no').value);
	}

	if (firstname =="" || lastname == "" || email == "" || nber == "" ){
		alert("please fill all the requested fields")
	}else{
		/*window.sessionStorage.clear();*/
		window.sessionStorage.setItem("firstname", firstname);
		window.sessionStorage.setItem("lastname", lastname);
		window.sessionStorage.setItem("email", email);
		window.sessionStorage.setItem("nber", nber);
  		/*alert(Object.keys(sessionStorage)!=null);*/
		window.location = "profile.html";
		return true;
	}
}

function sendMsg(){
	var name = document.getElementById("namo").value;
	var email = document.getElementById("emailo").value;
	var subj = document.getElementById("subj").value;
	var msg = document.getElementById("msg").value;
	if (name !="" && email != "" && subj != "" && msg != ""){
			Email.send({
    		Host : "smtp.elasticemail.com",
    		Username : "pauline.troncy@gmail.com",
    		Password : "F9E6A081A103613E854916CAC1B6A7D4FD4F",
    		To : 'pauline.troncy@gmail.com',
    		From : "pauline.troncy@gmail.com",
    		Subject : "Contact Request : "+subj,
    		Body : "From "+name+" ("+email+") : "+msg
			}).then(
  			message => window.sessionStorage.setItem("msg", message)
		);
	}
	if (sessionStorage.getItem("msg")=="OK"){
		document.getElementById("fillon").style.display = "none";
		document.getElementById("checko").style.display = "block";
		//window.sessionStorage.setItem("msg", msg);
	}

}

function compareTime(time1, time2) {
    return new Date(time1) > new Date(time2); // true if time1 is later
}

function searchO(){
	var location = document.getElementById("inputCity").value;
	var range = document.getElementById("inputrange").value;
	var size = document.getElementById("inputsize").value;
	var capacity = document.getElementById("inputCapa").value;
	var ina = document.getElementById("inputCheckIn").value;
	var out = document.getElementById("inputCheckOut").value;
	var inarray = ina.split(" ");
	var outarray = out.split(" ");

	if (location =="" || range == "" || size == "" || capacity == "" || ina =="" || out == "" ){
		alert("Please fill all the requested fields")
	}else if(compareTime([inarray[3],inarray[1],inarray[2]],[outarray[3],outarray[1],outarray[2]])){
		alert("Checkin date must be after checkout date !")
	} else{
		window.sessionStorage.setItem("location", location);
		window.sessionStorage.setItem("range", range);
		window.sessionStorage.setItem("size", size);
		window.sessionStorage.setItem("capacity", capacity);
		window.sessionStorage.setItem("ina", ina);
		window.sessionStorage.setItem("out", out);
		
		document.getElementById("hole").style.display = "none";
		if (range == "1") {
			document.getElementById("result").style.display = "block";
			document.getElementById("500").style.display = "block";
		}else if (range == "2") {
			document.getElementById("result").style.display = "block";
			document.getElementById("1000").style.display = "block";
		}else{
			document.getElementById("result").style.display = "block";
			document.getElementById("1001").style.display = "block";
		}

		return true;
	}
}

function searchSk(){
	var location = document.getElementById("inputCity").value;
	var range = document.getElementById("inputrange").value;
	var experience = document.getElementById("inputExperience").value;
	var ratio = document.getElementById("inputRatio").value;
	var ina = document.getElementById("inputCheckIn").value;
	var out = document.getElementById("inputCheckOut").value;
	var inarray = ina.split(" ");
	var outarray = out.split(" ");

	if (location =="" || range == "" || experience == "" || ratio == "" || ina =="" || out == "" ){
		alert("please fill all the requested fields")
	}else if(compareTime([inarray[3],inarray[1],inarray[2]],[outarray[3],outarray[1],outarray[2]])){
		alert("Checkin date must be after checkout date !")
	} else{
		window.sessionStorage.setItem("location", location);
		window.sessionStorage.setItem("range", range);
		window.sessionStorage.setItem("experience", experience);
		window.sessionStorage.setItem("ratio", ratio);
		window.sessionStorage.setItem("ina", ina);
		window.sessionStorage.setItem("out", out);
		
		document.getElementById("hole").style.display = "none";
		if (range == "1") {
			document.getElementById("profileSk").style.display = "block";
			document.getElementById("15").style.display = "block";
		}else if (range == "2") {
			document.getElementById("profileSk").style.display = "block";
			document.getElementById("30").style.display = "block";
		}else{
			document.getElementById("profileSk").style.display = "block";
			document.getElementById("31").style.display = "block";
		}

		return true;
	}
}



function details11(){
	document.getElementById("12").style.display = "none";
	document.getElementById("13").style.display = "none";
	document.getElementById("14").style.display = "none";
	document.getElementById("15").style.display = "none";
	document.getElementById("16").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}

function details12(){
	document.getElementById("11").style.display = "none";
	document.getElementById("13").style.display = "none";
	document.getElementById("14").style.display = "none";
	document.getElementById("15").style.display = "none";
	document.getElementById("16").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details13(){
	document.getElementById("12").style.display = "none";
	document.getElementById("11").style.display = "none";
	document.getElementById("14").style.display = "none";
	document.getElementById("15").style.display = "none";
	document.getElementById("16").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details14(){
	document.getElementById("12").style.display = "none";
	document.getElementById("13").style.display = "none";
	document.getElementById("11").style.display = "none";
	document.getElementById("15").style.display = "none";
	document.getElementById("16").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details15(){
	document.getElementById("12").style.display = "none";
	document.getElementById("13").style.display = "none";
	document.getElementById("14").style.display = "none";
	document.getElementById("11").style.display = "none";
	document.getElementById("16").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details16(){
	document.getElementById("12").style.display = "none";
	document.getElementById("13").style.display = "none";
	document.getElementById("14").style.display = "none";
	document.getElementById("15").style.display = "none";
	document.getElementById("11").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}

function details21(){
	document.getElementById("23").style.display = "none";
	document.getElementById("22").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}

function details22(){
	document.getElementById("21").style.display = "none";
	document.getElementById("23").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details23(){
	document.getElementById("22").style.display = "none";
	document.getElementById("21").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details31(){
	document.getElementById("32").style.display = "none";
	document.getElementById("33").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details32(){
	document.getElementById("31").style.display = "none";
	document.getElementById("33").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}
function details33(){
	document.getElementById("32").style.display = "none";
	document.getElementById("31").style.display = "none";

	document.getElementById("affDetail").style.display = "block";
	affDetail();
}

function details011(){
	document.getElementById("012").style.display = "none";
	document.getElementById("013").style.display = "none";
	document.getElementById("014").style.display = "none";
	document.getElementById("015").style.display = "none";
	document.getElementById("016").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}

function details012(){
	document.getElementById("011").style.display = "none";
	document.getElementById("013").style.display = "none";
	document.getElementById("014").style.display = "none";
	document.getElementById("015").style.display = "none";
	document.getElementById("016").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details013(){
	document.getElementById("012").style.display = "none";
	document.getElementById("011").style.display = "none";
	document.getElementById("014").style.display = "none";
	document.getElementById("015").style.display = "none";
	document.getElementById("016").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details014(){
	document.getElementById("012").style.display = "none";
	document.getElementById("013").style.display = "none";
	document.getElementById("011").style.display = "none";
	document.getElementById("015").style.display = "none";
	document.getElementById("016").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details015(){
	document.getElementById("012").style.display = "none";
	document.getElementById("013").style.display = "none";
	document.getElementById("014").style.display = "none";
	document.getElementById("011").style.display = "none";
	document.getElementById("016").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details016(){
	document.getElementById("012").style.display = "none";
	document.getElementById("013").style.display = "none";
	document.getElementById("014").style.display = "none";
	document.getElementById("015").style.display = "none";
	document.getElementById("011").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}

function details021(){
	document.getElementById("023").style.display = "none";
	document.getElementById("022").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}

function details022(){
	document.getElementById("021").style.display = "none";
	document.getElementById("023").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details023(){
	document.getElementById("022").style.display = "none";
	document.getElementById("021").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details031(){
	document.getElementById("032").style.display = "none";
	document.getElementById("033").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details032(){
	document.getElementById("031").style.display = "none";
	document.getElementById("033").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}
function details033(){
	document.getElementById("032").style.display = "none";
	document.getElementById("031").style.display = "none";

	document.getElementById("affSkDetail").style.display = "block";
	affSkDetail();
}

function affDetail(){
	
	var mymap = L.map('mapid').setView([43.587014, 7.122051], 13);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap);
	
	document.getElementById("affLocation").innerHTML = sessionStorage.getItem("location");
	if (sessionStorage.getItem("size") == "1") {
		document.getElementById("affSize").innerHTML = "0 - 20 ft";
	}else if (sessionStorage.getItem("size") == "2") {
		document.getElementById("affSize").innerHTML = "20 - 30 ft";
	}else{
		document.getElementById("affSize").innerHTML = "+ 30 ft";
	}
    if (sessionStorage.getItem("capacity") == "1") {
		document.getElementById("affCap").innerHTML = "2 Persons";
	}else if (sessionStorage.getItem("capacity") == "2") {
		document.getElementById("affCap").innerHTML = "2 - 5 Persons";
	}else{
		document.getElementById("affCap").innerHTML = "+ 10 Persons";
	}
    document.getElementById("affWhen").innerHTML = sessionStorage.getItem("ina") + ' ' + sessionStorage.getItem("out");
}

function affSkDetail(){
	document.getElementById("affLocation").innerHTML = sessionStorage.getItem("location");
	if (sessionStorage.getItem("experience") == "1") {
		document.getElementById("affExperience").innerHTML = "0 years - 2 years";
	}else if (sessionStorage.getItem("experience") == "2") {
		document.getElementById("affExperience").innerHTML = "2 years - 5 years";
	}else{
		document.getElementById("affExperience").innerHTML = "+ 5 years";
	}
    if (sessionStorage.getItem("ratio") == "1") {
		document.getElementById("affRatio").innerHTML = "0 stars - 3 starts";
	}else if (sessionStorage.getItem("ratio") == "2") {
		document.getElementById("affRatio").innerHTML = "3 stars - 4 starts";
	}else{
		document.getElementById("affRatio").innerHTML = "+ 4 stars";
	}
    document.getElementById("affWhen").innerHTML = sessionStorage.getItem("ina") + ' ' + sessionStorage.getItem("out");
}

	var tosend = "A user wants to book boat of location "+sessionStorage.getItem("location")+ "from "+sessionStorage.getItem("ina")+" to "+sessionStorage.getItem("out")+".";

function book(){
	if(sessionStorage.getItem("firstname")==null){
		alert("Please connect to your profile to book a reservation !")
		//window.location = "profile.html";
	}else{
		//window.location = "select.html";
		Email.send({
    	Host : "smtp.elasticemail.com",
    	Username : "pauline.troncy@gmail.com",
    	Password : "F9E6A081A103613E854916CAC1B6A7D4FD4F",
    	To : 'pauline.troncy@gmail.com',
    	From : "pauline.troncy@gmail.com",
    	Subject : "BOOKING RESERVATION",
    	Body : "User"+sessionStorage.getItem("firstname")+sessionStorage.getItem("lastname")+"wants to book boat of location "+sessionStorage.getItem("location")+ "from "+sessionStorage.getItem("ina")+" to "+sessionStorage.getItem("out")+". Here is his/her number 5"+sessionStorage.getItem("nber")+") and his/her email address ("+sessionStorage.getItem("email")+") to contact him/her."
		}).then(
  	message => alert(message)
		);
	}
}