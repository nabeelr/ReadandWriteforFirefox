(function () {
    "use strict";

    this.EmbbededComms = function () {

         this.onContentMessage = function (evt) {
				
            if (evt.source != window)
                return;

            if (evt.data.type == "1457FROM_BG") {
                textHelp.thWebReader.commsMngr.onMessage(evt.data.text.comms);
            }
        };

        this.sendMessage = function (msg) {
            window.postMessage({ type: "1457FROM_EMBEDDED", comms: msg }, "*");
        }

        this.initialise = function () {
            window.addEventListener("message", this.onContentMessage);

        };

        this.confirmExit = function () {
            this.sendMessage('deactivate');
        }

        //      window.onbeforeunload = $th182.proxy(this, this.confirmExit);
        $th182(window).on('beforeunload',  $th182.proxy(this.confirmExit, this));  
    };

    this.embeddedComms = new textHelp.thWebReader.EmbbededComms();
    this.embeddedComms.initialise();

}).apply(textHelp.thWebReader);
