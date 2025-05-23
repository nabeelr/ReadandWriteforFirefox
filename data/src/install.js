var textHelp = textHelp || {};
textHelp.thWebReader = {};

var $th182 = null;

(function () {
	"use strict";
	this.Installer = function () {

		var TOOLBAR = '', COMMANDS = '', COMMUNICATIONMANAGER = '', STYLES = '', m_webReaderElem = null, m_extensionPath = '';
		var DOCSCONFIG = '', DOCSPARSER = '', DOCSWR = '', DOCSAPI = '', EMBEDDEDCOMMS = '', HTMLPARSER = '';
			//var GDOCS = '';
		var LOADER = '';

		// Injects jQuery into the namespace $th182
		this.injectJQuery = function (url, success) {

			var script = document.createElement('script'), body = document.documentElement.getElementsByTagName('body')[0];
			script.src = url;
			script.async = true;
			script.onload = script.onreadystatechange = function () {
				if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
					$th182 = jQuery.noConflict(true);
					script.onload = script.onreadystatechange = null;
					body.removeChild(script);
					success();
				}
			};
			body.appendChild(script);
		};

		this.onjQueryReady = function () {
			$th182.ajaxSetup({ cache: true });

			LOADER = m_extensionPath + 'src/loadingmanager.js';
			COMMANDS = m_extensionPath + 'src/commands.js';
			COMMUNICATIONMANAGER = m_extensionPath + 'src/commsMngr.js';
			EMBEDDEDCOMMS = m_extensionPath + 'src/comms/commsEmbedded.js';
            HTMLPARSER = m_extensionPath + 'src/HTMLParser/HTMLParser.js';
			STYLES = m_extensionPath + 'src/styles.css';

			$th182('#WebReader').attr('version', '0.0.1.0');

			var scriptsPlaceHolder = document.createElement('span'), doReturnElement = null, returnElement = null, returnElem = null, doReturnScript = null;
			scriptsPlaceHolder.id = 'thScripts';

			var styleSheet = document.createElement('link');
			styleSheet.href = STYLES;
			styleSheet.rel = 'stylesheet';
			styleSheet.type = 'text/css';
			styleSheet.title = 'rwstyles';
			styleSheet.onload = styleSheet.onreadystatechange = function () {
				if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
				}
			};
			m_webReaderElem.appendChild(styleSheet);

			$th182.getScript(HTMLPARSER);
			setTimeout(function () {
				$th182.getScript(LOADER);
				$th182.getScript(COMMANDS);
				$th182.getScript(EMBEDDEDCOMMS);

				$th182.getScript(COMMUNICATIONMANAGER);
			


            doReturnElement = document.getElementById('$th_texthelpReturn');
			if (doReturnElement === null) {
				doReturnScript = document.createElement('script');
				doReturnScript.type = 'text/javascript';
				doReturnScript.id = '$th_texthelpReturn';
				doReturnScript.text = "function $th_doReturn(a){var b=document.getElementById('$th_texthelpReturnValueID');b!=null&&(b.setAttribute('result',a),a=document.createEvent('Events'),a.initEvent('$th_texthelpReturnEvent',!0,!1),b.dispatchEvent(a))};";
				scriptsPlaceHolder.appendChild(doReturnScript);
			}

			returnElement = document.getElementById('th_texthelpReturnValue');
			if (returnElement === null) {
				returnElement = document.createElement('th_texthelpReturnValue');
				returnElement.setAttribute('result', '');
				returnElement.id = '$th_texthelpReturnValueID';
				scriptsPlaceHolder.appendChild(returnElement);
			}
			returnElem = document.getElementById("$th_texthelpWriteSocket");
			if (returnElem === null) {
				returnElem = document.createElement('script');
				returnElem.type = 'text/javascript';
				returnElem.id = '$th_texthelpWriteSocket';
				returnElem.text = "function rw_sendSocketMessage(aData){$th_doReturn(aData);};";
				scriptsPlaceHolder.appendChild(returnElem);
			}

			m_webReaderElem.appendChild(scriptsPlaceHolder);
			$th182.ajaxSetup({ cache: false });
			}, 1000);
		};

		this.install = function () {
			if ($th182 === undefined || $th182 === null) {
				m_webReaderElem = document.getElementById('WebReader');
				m_extensionPath = m_webReaderElem.getAttribute('path');
				this.injectJQuery(m_extensionPath + 'thirdparty/jquery-3.3.1.min.js', this.onjQueryReady);
			}
		};

	};

	this.installer = new textHelp.thWebReader.Installer();
	this.installer.install();

}).apply(textHelp.thWebReader);
