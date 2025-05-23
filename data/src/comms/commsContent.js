var textHelp = textHelp || {};
textHelp.content = {};


(function () {
    "use strict";

    this.ContentComms = function () {

        var m_bgPort = null;
        var m_pagePort = null;

        this.onBGMessage = function (msg) {
            window.postMessage({ type: "1457FROM_BG", text:  msg }, "*");
        };

        this.onMessage = function (evt) {
		    if(evt.source == undefined)
				return;

			if(evt.data == undefined)
				return;

			if (evt.source != window)
				return;

            if (evt.data.type == "1457FROM_EMBEDDED") {
                m_bgPort.postMessage(evt.data);
            }
			
			if (evt.data.type == "1757FROM_PAGE") {
				chrome.extension.sendRequest(evt.data, function(response){
					window.postMessage(response, "*");
				});
			}
        };

        this.activate = function () {
            if (m_bgPort == null) {
                return;
            }

            m_bgPort.postMessage({ comms: "activate" });
        };

        this.initialise = function () {
            m_bgPort = browser.runtime.connect({ name: "comms" });
            m_bgPort.onMessage.addListener(this.onBGMessage);

            m_pagePort = browser.runtime.connect();
            window.addEventListener("message", this.onMessage);

            this.activate();
        };

    };

    this.manager = new textHelp.content.ContentComms();
    this.manager.initialise();
/*
    var port = chrome.extension.connect({ name: "comms" });
    port.postMessage({ comms: "activate" });
    port.onMessage.addListener(function (msg) {


        var command = JSON.parse(msg.comms);
        var id = '$th_' + command.id;
        var code = textHelp.thWebReader.commands[command.id];
        var webReader = document.getElementById('WebReader');
        var currentScript = document.getElementById(id);
        var functionCommand = '';
        var script = document.createElement('script');

        if (currentScript !== null) {
            webReader.removeChild(currentScript);
        }

        var n = 0;
        if (command.parameters !== null) {
            for (n = command.parameters.length - 1; n > -1; n -= 1) {
                code = code.replace("%" + (n + 1), command.parameters[n]);
            }
        }

        functionCommand = 'function ' + id + '(){' + code + '}' + id + '();';
        script.type = 'text/javascript';
        script.id = id;
        script.text = functionCommand;

        webReader.appendChild(script);

    });

    window.addEventListener("message", function (event) {
        // We only accept messages from ourselves
        if (event.source != window)
            return;

        if (event.data.type && (event.data.type == "FROM_PAGE")) {
            //       port.postMessage(event.data.text);
            port.postMessage({ comms: event.data.text });
        }
    }, false);*/

}).apply(textHelp.content);