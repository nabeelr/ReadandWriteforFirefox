function removeClassName(oHTMLElement, classNameToRemove) {

	// if the first parameter is a string
	// assume its an id so get the element.
	if (typeof(oHTMLElement) == 'string') {
		oHTMLElement = goog.dom.getElement(oHTMLElement);
	}
	if (oHTMLElement) {
		var theClassName = oHTMLElement.className;
		if (theClassName && (theClassName.length > 0)) {
			var theClassNameArray = theClassName.split(' '),
			classNamesToRemove = classNameToRemove.split(' '),
			iEnd = theClassNameArray.length,
			aClassName,
			theNewClassNameArray = [];
			for (var i = 0; i < iEnd; i++) {
				aClassName = theClassNameArray[i];
				if (classNamesToRemove.indexOf(aClassName) === -1) {
					theNewClassNameArray.push(aClassName);
				}
			}
			 switch (true) {
				case (theNewClassNameArray.length > 1) :
					oHTMLElement.className = theNewClassNameArray.join(' ');
					break;
				case (theNewClassNameArray.length == 1) :
					oHTMLElement.className = theNewClassNameArray[0];
					break;
				case (theNewClassNameArray.length == 0) :
					oHTMLElement.className = '';
					break;
			}
		}
	}
};


function addClassName(oHTMLElement, classNameToAdd) {
	// if the first parameter is a string assume
	// its an id so get the element.
	if (typeof(oHTMLElement) == 'string') {
		oHTMLElement = goog.dom.getElement(oHTMLElement);
	}

	if (oHTMLElement) {
		var theClassName = oHTMLElement.className;
		// If oHTMLElement already has a class name,
		// some more work is needed
		if (theClassName && (theClassName.length > 0)) {
			var classNamesToAdd = classNameToAdd.split(' ');
			// If we only have one className to
			// potentially add, take the "less work" approach
			if (classNamesToAdd.length === 1 &&
				((' ' + theClassName + ' ').lastIndexOf(' ' +
				classNameToAdd + ' ') === -1))
			{
				oHTMLElement.className = oHTMLElement.className +
				' ' + classNameToAdd;
			}
			else {
				var theClassNames = theClassName.split(' '),
				iEnd = classNamesToAdd.length,
				aClassName,
				theClassNamesToAddArray = [];
				for (var i = 0; i < iEnd; i++) {
					aClassName = classNamesToAdd[i];
					if (theClassNames.indexOf(aClassName) === -1) {
						theClassNamesToAddArray.push(aClassName);
					}
				}
				oHTMLElement.className = oHTMLElement.className + ' ' +
					((theClassNamesToAddArray.length > 1) ?
					theClassNamesToAddArray.join(' ') :
					theClassNamesToAddArray[0]);
			}
		}
		else {
			// If oHTMLElement did not already
			// have a class name, just add it
			oHTMLElement.className = classNameToAdd;
		}
	}
};
			
function receiver(event) {
	var elem = document.getElementById('gdwr-placeHolder');

	var command = event.data.split(':')[0];
	var data = event.data.substr(command.length+1);

	if (command === 'content') {
		elem.innerHTML = data;

		var toShow = document.getElementById('gdwr-placeHolder');
		removeClassName(toShow, 'gdwr-hidden');

		var toHide = document.getElementById('gdwr-activity');
		addClassName(toHide, 'gdwr-hidden');

		return;
	}

	if (command === 'voice') {
		$rw_setVoice(data);

		return;
	}

	if (command === 'speed') {
		$rw_setSpeedValue(data);

		return;
	}
	
	if (command === 'clear') {
		var toShow = document.getElementById('gdwr-activity');
		removeClassName(toShow, 'gdwr-hidden');

		var toHide = document.getElementById('gdwr-placeHolder');
		addClassName(toHide, 'gdwr-hidden');

		elem.innerHTML = '';

		return;
	}
	
	
	if (command === 'selectall'){
		
		var sel = window.getSelection();
		var toSelect = document.getElementById('gdwr-placeHolder');
		toSelect.focus();
		
		var range = document.createRange();
		range.selectNodeContents(toSelect);
		
		sel.removeAllRanges();
		sel.addRange(range);
	
		return;
	}
	
	if (command === 'copyHighlights'){
	
		var sel = window.getSelection();
		var toSelect = document.getElementById('gdwr-placeHolder');
		toSelect.focus();
		
		var range = document.createRange();
		range.selectNodeContents(toSelect);
		
		sel.removeAllRanges();
		sel.addRange(range);
		
		document.execCommand("Copy", false, null);
		
		sel.removeAllRanges();
					 
		return;
	}
	
	if (command === 'stop') {
		$rw_event_stop();

		return;
	}

}
window.addEventListener('message', receiver, false);	

try{
	/* +++ User customizable parameters start here. +++ */
	eba_client_version = '160';
	eba_server_version = 'ToolbarRW';
	eba_icons = no_bar;
	eba_server='khlcpnnojomfljfplojjgafklknofead';
	eba_speech_server='rsccontrol05.speechstream.net';
	eba_login_name='rwforgdocs';
	eba_speed_value=MEDIUM_SPEED;
	eba_voice_from_lang_flag= true;
	eba_initial_speech_on = true;
	eba_continuous_reading = true;
	/* +++ End of user customizable parameters section. +++ */
	$rw_barInit(); 
}
catch(err){}	