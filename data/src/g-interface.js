(function () {

    this.GInterface = function () {

        this.rgb2hex = function(r, g, b) {
            if (typeof g == 'boolean' && g === true) {
                var hex = r.toString(16);
                if (hex.length == 1) hex = '0' + hex;
                return hex;
            } else {
                r = (r < 10 ? '0' : '') + r.toString(16);
                g = (g !== undefined) ? (g < 10 ? '0' : '') + g.toString(16) : r;
                b = (b !== undefined) ? (b < 10 ? '0' : '') + b.toString(16) : r;
                return '#' + r + g + b;
            }
        }


        this.render = function(map, type) { // Internal Function
            var rtn = [],
                k;
            if (typeof map != 'object') {
                return;
            }
            if (type === 'rgb') {
                k = ['R', 'G', 'B', 'RGB'];
            }
            if (type === 'hsv') {
                k = ['H', 'S', 'V', 'HSV'];
            }
            if (type === 'hsl') {
                k = ['H', 'S', 'L', 'HSL'];
            }
            rtn[k[0]] = map[0];
            rtn[k[1]] = map[1];
            rtn[k[2]] = map[2];
            rtn[k[3]] = map[0] + ' ' + map[1] + ' ' + map[2];
            rtn.a = map;
            return rtn;
        }

 /*       this.complement = function(c, g, b) {
            var cval;
            if (typeof c == 'string' && /(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/.test(c)) {
                c = c.replace('#', '');
                var rtn = '#';
                if (c.length === 6) {
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(0, 2)), true);
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(2, 2)), true);
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(4, 2)), true);
                }
                if (c.length === 3) {
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(0, 1) + c.substr(0, 1)), true);
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(1, 1) + c.substr(1, 1)), true);
                    rtn += this.rgb2hex(255 - this.hex2rgb(c.substr(2, 1) + c.substr(2, 1)), true);
                }
                return rtn;
            }
            if (c != undefined && g != undefined && b != undefined) {
                cval = [(255 - c), (255 - g), (255 - b)];
            }
            if (typeof c == 'object') {
                cval = [(255 - c[0]), (255 - c[1]), (255 - c[2])];
            }
            return this.render(cval, 'rgb');
        }*/


        this.complement = function(color){
            if (color === '#000000') return '#FFFFFF';

            var r = parseInt(color.substr(01,2),16);
            var g = parseInt(color.substr(3,2),16);
            var b = parseInt(color.substr(5,2),16);
            var yiq = ((r*299)+(g*587)+(b*114))/1000;
            return (yiq >= 128) ? '#000000' : '#FFFFFF';
        }


        this.getTextColor = function(color) {
      //      var result = this.complement(parseInt(color.slice(1, 3), 16), parseInt(color.slice(3, 5), 16), parseInt(color.slice(5, 7), 16));
       //     return this.rgb2hex(result.R, result.G, result.B);
            return this.complement(color);
        }

        this.addCSSRule = function (newCSSRule) {
            if ('\v' == 'v') /* ie only */ {
                document.createStyleSheet().cssText = newCSSRule;
            } else {
                var tag = document.createElement('style'); tag.type = 'text/css'; document.getElementsByTagName('head')[0].appendChild(tag);
                tag[(typeof document.body.style.WebkitAppearance == 'string') /* webkit only */ ? 'innerText' : 'innerHTML'] = newCSSRule;
            }
        }

        this.setSentenceFromSelection = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }

        this.fastforward = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }
        
        this.rewind = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }
        
        this.play = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
        	// Fire the onWRPlay event with no parameters
            var words = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().speakSelection();
            if (words == null) return;

            rw_sendSocketMessage("THStart" + JSON.stringify(words) + "THEnd");

        }

        this.playSettings = function (settings) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
            this.onActivated(settings);

            var words = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().speakSelection();
            if (words == null) return;

            rw_sendSocketMessage("THStart" + JSON.stringify(words) + "THEnd");
        }
        
        this.highlightSelection = function (p_strColor) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().highlightSelection(p_strColor);
        }

        this.clearHighlights = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
			texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().clearHighlights();
        }

        this.pause = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }	    
        
        this.stop = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
    		texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().stop();
        }

        this.doSelection = function (p_nPosition) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
            if (p_nPosition == -1) {
                this.stop();

                var words = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().hiliteNextSentence(true);
                if (words == null) return;

                rw_sendSocketMessage("THStart" + JSON.stringify(words) + "THEnd");

                return;
            }
            if (p_nPosition == -2) {
                this.stop();

                return;
            }
            texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().hiliteWord(p_nPosition);
        }

        this.clickAndSpeak = function (clickAndSpeak) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }

        this.continuousReading = function (continuousReading) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
            this.stop();

            var continuousReadingValue = true;
            if (continuousReading.toLowerCase() === "false") {
                continuousReadingValue = false; 
            }
            
            var settingsManager = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getUserSettings();
            var settings = settingsManager.getUserSettings();

            settings['speechoptions']['continousreading'] = continuousReadingValue;

            settingsManager.saveUserSettings(settings);
        }

        this.backgroundColor = function (color) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            this.addCSSRule('.textHELPWR {color:' + this.getTextColor(color) + '; background-color:' + color + '}');
        }

        this.foregroundColor = function (color) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            this.addCSSRule('.textHELPWR.thHighlighted { color:' + this.getTextColor(color) + '; background-color:' + color + '}');
        }


        this.getSelectionCallback = function(selectedText){
            var params = [];
            params.push(selectedText.text);
            params.push(selectedText.start);
            params.push(selectedText.end);
            rw_sendSocketMessage("THGST" + JSON.stringify(params));
        }   

        this.getSelection = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            this.stop();

            texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().getSelection(this.getSelectionCallback);
        }

        this.getSelectionLocal = function () {
            var words = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().getSelectionLocal();
            return "LTHGST" + JSON.stringify(words);
        }

        this.getPageText = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
        }

        this.getURL = function () {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            rw_sendSocketMessage("THURL" + $th182(location).attr('href'));
        }

		this.collectHighlightsCallback = function(currentHighlights){
			rw_sendSocketMessage("THCOLHURI" + currentHighlights.toString());
		}		
        
		this.collectHighlights = function (sort, color1, color2, color3, color4, fileName) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
			
			var colors = [];
			
			colors.push(color1);
			colors.push(color2);
			colors.push(color3);
			colors.push(color4);
			
			texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().collectHighlights(this.collectHighlightsCallback, sort, colors, fileName);
        }

        this.vocabWordsCallback = function(currentHighlights){
            rw_sendSocketMessage("THVW" + 'N');
        }   

        this.collectVocab = function (sort, color1, color2, color3, color4) {
            if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            
            var colors = [];
            
            colors.push(color1);
            colors.push(color2);
            colors.push(color3);
            colors.push(color4);
            
            texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().collectVocabWords(this.vocabWordsCallback, sort, colors);


        }
		
		this.getTextWithContext = function () {
			var textWithContext = texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().getTextWithContext();			
			rw_sendSocketMessage("THTWC" + JSON.stringify(textWithContext));
        }

		this.updateSelection = function(updates){
			texthelp.webreaderapi.HelpersSingleton.getInst().getAPI().getParser().updateSelection(updates);	
		}

        this.onActivated = function (settings) {
			if (!texthelp.webreaderapi.HelpersSingleton.getInst().isAuthenticated()){return;}
            this.backgroundColor(settings.backgroundColor);
            this.foregroundColor(settings.foregroundColor);
        }

        this.getType = function () {
            return 'THTgdocs';
        }
	}

	this.toolbar = new textHelp.thWebReader.GInterface();

}).apply(textHelp.thWebReader);