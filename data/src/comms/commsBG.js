
(function () {
    "use strict";

	var _OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) _OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) _OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) _OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) _OSName="Linux";
	
    this.BGComms = function () {

        var m_allPorts = {};
        var m_activePort = null;
	//	var m_appsScript = "https://script.google.com/macros/s/AKfycbxOAGUMBJcHJlplKDQ9mvOJt1M3zDtKc1PCcuZC0s8/dev";
	//	var m_appsScript = "https://script.google.com/macros/s/AKfycbz2p8FQm9MMawLarAjummRks4RLy16L5n-JWV-XZyoINturqQQ/exec";
		var m_appsScript = "https://script.google.com/macros/s/AKfycbw09Dgfhr4qniejuWaOtoSWAhzAjxdp7GEP6k15KWzs9vwL4mE/exec";

        this.send = function (data) {
            try {
                var command = JSON.parse(data);
                if (command.all) {
                    for (var port in m_allPorts) {
                        m_allPorts[port].postMessage({ comms: data });
                    }

                    return;
				}
				
                m_allPorts[m_activePort].postMessage({ comms: data });
            }
            catch (err) {
                console.log(err.message);
            }

        };

        this.initialise = function () {
            browser.runtime.onConnect.addListener(function (port) {
                port.onMessage.addListener(function (msg) {
                    try {
						var p_id = port.sender.tab.id;
                        if (msg.comms === 'deactivate') {
                            if (!(p_id in m_allPorts)) {
                                delete m_allPorts[p_id];
                                return;
                            }
                            return;
                        }

                        if (msg.comms === 'activate') {
                            if (!(p_id in m_allPorts)) {
                                m_allPorts[p_id] = port;
                            }

                            m_activePort = p_id;
							
                        }

                        textHelp.background.socketManager.send(msg.comms);
                    }
                    catch (err) {
                        console.log(err.message);
                    }

                });

                port.onDisconnect.addListener(function (msg) {
                    try {

                        delete m_allPorts[port.sender.tab.id]
                    }
                    catch (err) {
                        console.log(err.message);
                    }

                });
            });
			
			browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
				if (request.method === "collectHighlightsRequest") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("POST", m_appsScript, true);
						xhr.onreadystatechange = function() {
							var contentType = ''; 
							if(this.readyState == 4) {
								if (this.status == 200){
									contentType = this.getResponseHeader("Content-Type");
									if (contentType.substr(0, 16) == 'application/json'){                               
										sendResponse({'method':'onCollectHighlights', 'type':'1757FROM_BG', 'payload': this.responseText.toString()});
									}
								}
							}
						}
						var payload = new FormData();

						if (request.sort < 2) {
							request.sort = 0;
						}
						else{ 
							request.sort = 1;
						}
							
						var parameter = '{"newHighlightsDocument":"Highlights Untitled", "cmd":"collectHighlights", "sort":"' + request.sort + '", "docsToCollect":["' + request.payload + '"], "colors":["' + request.colors[0] + '","' +  request.colors[1] + '","' +  request.colors[2] + '","' +  request.colors[3] + '"]}';				
						payload.append('payload', parameter);
						xhr.send(payload);
					}
				}
				if (request.method === "vocabWordsRequest") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("POST", m_appsScript, true);
						xhr.onreadystatechange = function() {
							var contentType = ''; 
							if(this.readyState == 4) {
								if (this.status == 200){
									contentType = this.getResponseHeader("Content-Type");
									if (contentType.substr(0, 16) == 'application/json'){                               
										sendResponse({'method':'onVocabWords', 'type':'1757FROM_BG', 'payload': this.responseText.toString()});
									}
								}
							}
						}
						var payload = new FormData();

						if (request.sort < 2) {
							request.sort = 0;
						}
						else{ 
							request.sort = 1;
						}
							
						var parameter = '{"cmd":"collectHighlights", "sort":"' + request.sort + '", "docsToCollect":["' + request.payload + '"], "colors":["' + request.colors[0] + '","' +  request.colors[1] + '","' +  request.colors[2] + '","' +  request.colors[3] + '"]}';				
						payload.append('payload', parameter);
						xhr.send(payload);
					}
				}
				if (request.method === "highlightSelection") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("POST", m_appsScript, true);
						var payload = new FormData();							
						var parameter = '{"cmd":"highlightSelection", "range":' + JSON.stringify(request.payload) + '}';
						payload.append('payload', parameter);
						xhr.send(payload);
					}
				}
				if (request.method === "clearHighlights") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("POST", m_appsScript, true);
						var payload = new FormData();							
						var parameter = '{"cmd":"clearHighlights", "range":' + JSON.stringify(request.payload) + '}';
						payload.append('payload', parameter);
						xhr.send(payload);
					}
				}
			   if (request.method === "authenticate") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("GET", m_appsScript, true);
						xhr.onreadystatechange = function() {
							var contentType = ''; 
							if(this.readyState == 4) {
								if (this.status == 200){
									contentType = this.getResponseHeader("Content-Type");
									if (contentType.substr(0, 9) == 'text/html'){
										sendResponse({'method':'onAuthenticate', 'cmd':'collectHighlights','type':'1757FROM_BG', 'payload': this.responseText.toString()});                         
									}
								}
							}
						}
						xhr.send();
					}
				}
				
				if (request.method === "getSelection") {
                    if (request.type == '1757FROM_PAGE'){
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", m_appsScript, true);
                        var payload = new FormData();                                                   
                        var parameter = '{"cmd":"getSelection", "range":' + JSON.stringify(request.payload) + '}';
                        payload.append('payload', parameter);
                        xhr.onreadystatechange = function() {
                            var contentType = ''; 
                            if(this.readyState == 4) {
                                if (this.status == 200){
                                    contentType = this.getResponseHeader("Content-Type");
                                    if (contentType.substr(0, 16) == 'application/json'){      
                                        sendResponse({'method':'onGetSelection','type':'1757FROM_BG', 'payload': this.responseText.toString()});                         
                                    }
                                }
                            }
                        }
                        xhr.send(payload);
                    }
                }
                if (request.method === "updateSelection") {
					if (request.type == '1757FROM_PAGE'){
						var xhr = new XMLHttpRequest();
						xhr.open("POST", m_appsScript, true);

						var payload = new FormData();							
						var parameter = '{"cmd":"updateSelection", "changes":' + JSON.stringify(request.payload) + '}';
						payload.append('payload', parameter);
						xhr.send(payload);
					}
				}
		
			});			
        };

    }

    this.manager = new textHelp.background.BGComms();
    this.manager.initialise();


}).apply(textHelp.background);