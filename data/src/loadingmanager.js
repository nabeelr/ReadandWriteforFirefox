(function () {
	"use strict";
	this.LoadingManager = function () {

		var TOOLBAR = '', m_webReaderElem = null, m_extensionPath = '', msWordDocsElement = '', currentSiteHostname = '';

		this.install = function () {

            var browserIsChrome = (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase()));
			var browserIsEdge = (/Edge\/\d./i.test(navigator.userAgent));

			m_webReaderElem = document.getElementById('WebReader');
			m_extensionPath = m_webReaderElem.getAttribute('path');


			currentSiteHostname = window.location.hostname.toString();



			var gDocsReader = true, docsElement = document.getElementById('kix-appview');
			var mDocsReader = true, mdocsElement = document.getElementById('WACViewPanel_EditingElement');

			if (docsElement === null) { gDocsReader = false; }

			docsElement = document.getElementById('docs-editor');
			if (docsElement === null) { gDocsReader = false; }

			docsElement = document.getElementById('docs-header');
			if (docsElement === null) { gDocsReader = false; }


			if (currentSiteHostname === 'texthelpuk-my.sharepoint.com') {
				mDocsReader = true;
			}
			if (document.getElementById('WACContainer')) {
				mDocsReader = true;
			}
			else if (msWordDocsElement) {
				mDocsReader = true;
			}
			else {
				mDocsReader = false;
			}


			if ((gDocsReader === false) && (mDocsReader === false)){
                TOOLBAR = m_extensionPath + 'src/texthelpMain.js';
                $th182.getScript(TOOLBAR);
			} else {
                if (!browserIsChrome && !browserIsEdge) { return; }
				TOOLBAR = m_extensionPath + 'src/textHelp_WebReader.js';
				$th182.getScript(m_extensionPath + 'src/g-interface.js');
                $th182.getScript(TOOLBAR);
			}


			

		};

	};

	this.loader = new textHelp.thWebReader.LoadingManager();
	this.loader.install();

}).apply(textHelp.thWebReader);