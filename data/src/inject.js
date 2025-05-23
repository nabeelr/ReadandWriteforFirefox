(function () {
    "use strict";
    try {
		var INSTALL_SCRIPT = chrome.extension.getURL('/data/src/install.js');
		var textHelpSpan = document.getElementById('textHelp');
		if (textHelpSpan == null) {
			textHelpSpan = document.createElement('span');
			textHelpSpan.id = 'textHelp';
			document.getElementsByTagName('body')[0].appendChild(textHelpSpan);
		}

		var webReader = document.getElementById('thWebReaderPlaceHolder');
		if (webReader!=null){return;}
		


		
		webReader = document.getElementById('WebReader');

		if (webReader === null) {
			webReader = document.createElement('span');
			webReader.id = 'WebReader';
			webReader.setAttribute('path', chrome.extension.getURL('') + 'data/');


			var script = document.createElement('script');
			script.src = INSTALL_SCRIPT;
			script.id = 'webReaderModule';
			script.setAttribute("data-root", chrome.extension.getURL('/')+ 'data/');
			script.onload = script.onreadystatechange = function() {
				if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
					script.onload = script.onreadystatechange = null;
					webReader.removeChild(script);
				}
			};
			webReader.appendChild(script);

			textHelpSpan.appendChild(webReader);
		}
	}
	catch(err){
		console.log(err);
	}
})();
