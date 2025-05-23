var textHelp = textHelp || {};
textHelp.background = {};


(function () {

    this.WSocket = function () {

        var m_ws = null;
        var m_openScoped = null;

        this.onOpen = function () {

        };

        this.onMessage = function (e) {
			console.log('>>   ' + e.data);
            textHelp.background.manager.send(e.data);
        };

        this.onClose = function (e) {
			m_ws.close();
            m_ws = null;

//			console.log('Socket closed');
			
            if (m_openScoped == null) {
                m_openScoped = this.bind(this.open, this);
            }
			
            setTimeout(m_openScoped, 50);
        };

        this.open = function (data) {
            try {
//				console.log('Socket open');
                m_ws = new WebSocket("ws://localhost:4808");

                m_ws.onopen = this.bind(this.onOpen, this);
                m_ws.onmessage = this.bind(this.onMessage, this);
                m_ws.onclose = this.bind(this.onClose, this);

            }
            catch (err) {
                console.log(err.message);
            }

        };

        this.send = function (msg) {
            try {
				console.log('<<   ' + msg);
                m_ws.send(msg);
            }
            catch (err) {
                console.log(err.message);
            }

        };

        this.bind = function (fn, scope) {
            return function () {
                return fn.apply(scope, Array.prototype.slice.call(arguments));
            };
        }

    }

    this.socketManager = new textHelp.background.WSocket();
    this.socketManager.open();

}).apply(textHelp.background);

