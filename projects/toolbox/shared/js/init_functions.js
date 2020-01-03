	// JavaScript functions for Squeak eClean Toolbox version 00_00
	// Author:
	// Last modification: 



	
// - - - - - - - Task assessment by eunhwan

	function doEmailForTaskAssess() {
		var subjectStr = "Task assessment – Organise the cleaning storage area";
		var vbcr = "%0d%0a";
		var bodyStr = "";
		
		bodyStr += "Instructions" + vbcr;
		bodyStr += "Complete the assessment questions on this email and send it to your trainer." + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 1: What type of area is likely to be used as a cleaning storage area? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;
	
		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 2: List 4 reasons why the cleaning storage area should be kept in a clean and tidy state? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 3: What fittings and furniture might the cleaning storage area include? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 4: What contents would you expect to find in a cleaning storage area? Group the contents under the headings of cleaning chemicals, equipment, PPE, consumables, information and first aid." + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 5: How should stocks of cleaning chemicals be stored? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 6: How should you account for stocks under your control? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 7: What is one of the last things you should do before going home after completing your work duties? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 8: How often should you remove waste from your cleaning storage area? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

	
		
		//alert(String("mailto:?subject=" + subjectStr + "&body=" + bodyStr).length);
		document.location.href = "mailto:?subject=" + subjectStr + "&body=" + bodyStr;
		return;
	}
	
	
	
	
	
// - - - - - - - Workplace Assessment by eunhwan

	function doEmailForWorkplaceAssess() {
		var subjectStr = "Workplace Assessment – Organise the cleaning storage area";
		var vbcr = "%0d%0a";
		var bodyStr = "";
		
		bodyStr += "Instructions" + vbcr;
		bodyStr += "Complete the assessment questions on this email and send it to your trainer." + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 1: What type of area is likely to be used as a cleaning storage area? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;
	
		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 2: List 4 reasons why the cleaning storage area should be kept in a clean and tidy state? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 3: What fittings and furniture might the cleaning storage area include? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 4: What contents would you expect to find in a cleaning storage area? Group the contents under the headings of cleaning chemicals, equipment, PPE, consumables, information and first aid." + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 5: How should stocks of cleaning chemicals be stored? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 6: How should you account for stocks under your control?? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 7: What is one of the last things you should do before going home after completing your work duties? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

		bodyStr += "____________________________________" + vbcr;
		bodyStr += "Question 8: How often should you remove waste from your cleaning storage area? " + vbcr;
		bodyStr +=  vbcr + vbcr + vbcr;

	
		
		//alert(String("mailto:?subject=" + subjectStr + "&body=" + bodyStr).length);
		document.location.href = "mailto:?subject=" + subjectStr + "&body=" + bodyStr;
		return;
	}
	
	//function to toggle document element to hide or show
	function toggle_visibility(id) {			
	   var e = document.getElementById(id);
		 if(e.style.display == 'block')
			 e.style.display = 'none';
		 else
			 e.style.display = 'block';
	}
	
	//function to open separate windows
	function MM_openBrWindow(theURL,winName,features) { //v2.0
	  window.open(theURL,winName,features);
	}
	
	//function to validate the answer in learning activity situation1
	function checkAnswer1(obj){ //this function is to show or hide the portion of text trigged by the user
		var answer = getRadioValue(obj);
		if(answer == "eva"){
			document.getElementById('correct').style.visibility = 'visible'; 
			document.getElementById('incorrect').style.visibility = 'hidden'; 
		}
		else {
			document.getElementById('incorrect').style.visibility = 'visible'; 
			document.getElementById('correct').style.visibility = 'hidden'; 
		}
	}

	//function to validate the answer in learning activity situation2
	function checkAnswer2(obj){ //this function is to show or hide the portion of text trigged by the user
		var answer = getRadioValue(obj);
		if(answer == "end"){
			document.getElementById('correct').style.visibility = 'visible'; 
			document.getElementById('incorrect').style.visibility = 'hidden'; 
		}
		else {
			document.getElementById('incorrect').style.visibility = 'visible'; 
			document.getElementById('correct').style.visibility = 'hidden'; 
		}
	}
	
	//function to validate the answer in learning activity situation3
	function checkAnswer3(obj){ //this function is to show or hide the portion of text trigged by the user
		var answer = getRadioValue(obj);
		if(answer == "pre"){
			document.getElementById('correct').style.visibility = 'visible'; 
			document.getElementById('incorrect').style.visibility = 'hidden'; 
		}
		else {
			document.getElementById('incorrect').style.visibility = 'visible'; 
			document.getElementById('correct').style.visibility = 'hidden'; 
		}
	}
	
	//function to validate the answer in learning activity situation4
	function checkAnswer4(obj){ //this function is to show or hide the portion of text trigged by the user
		var answer = getRadioValue(obj);
		if(answer == "int"){
			document.getElementById('correct').style.visibility = 'visible'; 
			document.getElementById('incorrect').style.visibility = 'hidden'; 
		}
		else {
			document.getElementById('incorrect').style.visibility = 'visible'; 
			document.getElementById('correct').style.visibility = 'hidden'; 
		}
	}
		

	
// - - - - - - - Popup Window function  - - - - - - -

	function myPopUp(mName, mUrl) {
		var mWidth = 900;
		var mHeight = 700;
		var mFeatures = "location=no,toolbar=no,menubar=no,directories=no,status=no,resizable=yes,scrollbars=yes,height=" + mHeight + ",width=" + mWidth;
		var w = window.open(mUrl, mName, mFeatures);
		
	}
	
	function mailPopUp(emailAddress) {
		document.location.href = "mailto:" + emailAddress;
	}

// - - - - - - - Popup Window function with content - - - - - - -
	function myPopUpContent(mName, mContent) {
		var mWidth = 400;
		var mHeight = 200;
		var mFeatures = "location=no,toolbar=no,menubar=no,directories=no,status=no,resizable=yes,scrollbars=yes,height=" + mHeight + ",width=" + mWidth;
		var w = window.open("", mName, mFeatures);
		var newContent = "<div style='font-family:Arial, Helvetica, sans-serif;'>" + mContent + "</div>";
		w.document.body.innerHTML = newContent;
		w.document.title = "Answer";
		//w.moveTo(100, 100);
	}
	

	function myPopUpT(mName, mUrl) {
		var mWidth = 900;
		var mHeight = 700;
		var mFeatures = "location=yes,toolbar=yes,menubar=yes,directories=no,status=no,resizable=yes,scrollbars=yes,height=" + mHeight + ",width=" + mWidth;
		var w = window.open(mUrl, mName);
		
	}
