(function () {
    "use strict";

    this.CommsMngr = function () {

        var m_visibilityChange = null, m_hidden = null, m_state = null;
        var m_hasFocus = true;

        this.onMessage = function (evt) {

			//console.log(evt);
            var command = JSON.parse(evt);
            var id = '$th_' + command.id;
            var code = textHelp.thWebReader.commands[command.id];
            var scriptsElem = document.getElementById('thScripts');
            var currentScript = document.getElementById(id);
            var functionCommand = '';
            var script = document.createElement('script');

            if (currentScript !== null) {
                scriptsElem.removeChild(currentScript);
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

            scriptsElem.appendChild(script);

        };

        this.sendMessage = function (msg) {
            textHelp.thWebReader.embeddedComms.sendMessage(msg);
        };

        this.onActivate = function () {
            try {
                if (m_hidden !== null) {
                    if (!document[m_hidden]) {
                        this.sendMessage('activate');
                    }
                    else {
                        textHelp.thWebReader.toolbar.stop();
                    }

                } else {
                    this.sendMessage('activate');
               }
            } catch (err) {
            }
        };
		
       this.onMouseleave = function (e) {
            try {
				if (e.relatedTarget == null){
					textHelp.thWebReader.toolbar.stop();
				}
				
				if ($th182(document).has(e.relatedTarget).length > 0){
					textHelp.thWebReader.toolbar.stop();
				}
				
		//		textHelp.thWebReader.toolbar.stop();
            } catch (err) {
            }
        };
		
		this.onVisibilitychange = function(e){
		    try {
                if (!document[m_hidden]) {
                    this.sendMessage('activate');
                    return;
                }
				
                textHelp.thWebReader.toolbar.stop();
			
			} catch (err) {
            }
		}

        this.onUnfocus = function(e){
			//console.log('this.onUnfocus');
          //  textHelp.thWebReader.toolbar.stop();
            m_hasFocus = false;
        }   

        this.onFocus = function(e){
			//console.log('this.onFocus');
			this.sendMessage('activate');
            m_hasFocus = true;
        }

        this.initialise = function () {
            var scriptsPlaceHolder = document.getElementById('thScripts');
            scriptsPlaceHolder.addEventListener('$th_texthelpReturnEvent', $th182.proxy(textHelp.thWebReader.commsMngr.OnReturn, this) , false, true);

            if (document.hidden !== undefined) {
                m_hidden = "hidden";
                m_visibilityChange = "visibilitychange";
                m_state = "visibilityState";
            } else if (document.mozHidden !== undefined) {
                m_hidden = "mozHidden";
                m_visibilityChange = "mozvisibilitychange";
                m_state = "mozVisibilityState";
            } else if (document.msHidden !== undefined) {
                m_hidden = "msHidden";
                m_visibilityChange = "msvisibilitychange";
                m_state = "msVisibilityState";
            } else if (document.webkitHidden !== undefined) {
                m_hidden = "webkitHidden";
                m_visibilityChange = "webkitvisibilitychange";
                m_state = "webkitVisibilityState";
            }

			var boundActivate = this.bind(this.onActivate, this);
			var boundLeave = this.bind(this.onMouseleave, this);
            var boundunFocus = this.bind(this.onUnfocus, this);
            var boundFocus = this.bind(this.onFocus, this);
			
		//	$th182(document).bind(m_visibilityChange, this.onVisibilitychange);
            $th182(document).bind(m_visibilityChange, boundActivate);
            $th182(window).mousedown(boundActivate);
       //     $th182(window).mouseenter(boundActivate);
	//		$th182(document).mouseleave(boundLeave);
			$th182(document).ready(boundActivate);

            $th182(window).focus(boundFocus);
      //      $th182(document).focus(boundFocus);
            $th182(window).blur(boundunFocus);
     //       $th182(document).blur(boundBlur);
			
		//	$th182(document).has(element1).length > 0
	//		window.onmouseout = boundLeave;

            this.sendMessage('activate');
        }

        this.OnReturn = function (evt) {
            var result = evt.target.getAttribute('result');
            this.sendMessage(result);
        };

        this.bind = function (fn, scope) {
            return function () {
                return fn.apply(scope, Array.prototype.slice.call(arguments));
            };
        }

        this.hasFocus = function () {
            return m_hasFocus;
        }
    };

    this.commsMngr = new textHelp.thWebReader.CommsMngr();
    this.commsMngr.initialise();

}).apply(textHelp.thWebReader);