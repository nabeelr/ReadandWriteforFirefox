(function () {
    this.Toolbar = function () {


        m_webReaderElem = document.getElementById('WebReader');
        m_extensionPath = m_webReaderElem.getAttribute('path');

        this.SpeechStream = new window["textHelp"]["parsers"]["HTMLParserAPI"](true, m_extensionPath + "src/HTMLParser/");

        var continousReading = true;
        var hoverSpeakEnabled = false;

        this.currentWordNum = 0;

        this.play = function () {
            //Load math if needed.
            this.SpeechStream["forceLoadMath"]();
            this.stop();
            var text = this.SpeechStream["hiliteSelection"]();
            if (text != null) {
                this.currentWordNum = 0;
                //console.log(text);
                rw_sendSocketMessage("THStart" + JSON.stringify(text) + "THEnd");

            }
        };

        this.playSettings = function (settings) {
            this.stop();
            this.onActivated(settings);
            this.play();
        };

        this.stop = function () {
            this.currentWordNum = 0;
            rw_sendSocketMessage("THStop");
            this.SpeechStream["stop"]();
        };

        this.pause = function () { };

        this.clickAndSpeak = function (clickAndSpeak) {
            if (clickAndSpeak.toLowerCase() === "true") {
                hoverSpeakEnabled = true;
                this.SpeechStream["hoverSpeakEnabled"](true);
                return;
            }
            else {
                hoverSpeakEnabled = false;
                this.SpeechStream["hoverSpeakEnabled"](false);
            }
        };

        this.continuousReading = function (continuousReading) {
            if (continuousReading.toLowerCase() === "true") {
                continousReading = true;
                return;
            }
            continousReading = false;
        };

        this.fastforward = function () {
            this.stop();
            this.SpeechStream["hoverSpeakEnabled"](true);
            var nextSentence = this.SpeechStream["hiliteNextSentence"](continousReading);
            if (nextSentence != null) {
                //console.log(nextSentence);
                rw_sendSocketMessage("THStart" + JSON.stringify(nextSentence) + "THEnd");
            }
        };

        this.rewind = function () {
            throw new Error("Not implemented");
        };

        this.foregroundColor = function (color) {
            //throw new Error("Not implemented");
            //$rw_setSpeechWordColours("color:" + $rw_getTextColor(color) + "; background:" + color)
        };

        this.backgroundColor = function (color) {
            //throw new Error("Not implemented");
            //$rw_setSpeechRangeColours("color:" + $rw_getTextColor(color) + "; background:" + color)
        };

        this.getURL = function () {
            return "THURL" + $th182(location).attr("href")
        };

        this.highlightSelection = function (p_strColor) {
            this.SpeechStream["highlightSelection"](p_strColor);
        };

        this.clearHighlights = function () {
            this.SpeechStream["clearHighlights"]();
        };

        this.doSelection = function (p_nPosition) {
            if (p_nPosition == -1) {
                if (continousReading) {
                    this.fastforward();
                }
                else {
                    this.stop();
                }
            }
            else if (p_nPosition == -2) {
                this.stop();
            }
            else {
                if (this.currentWordNum == p_nPosition) {
                    this.currentWordNum = (p_nPosition +1);
                    this.SpeechStream["hiliteWord"](p_nPosition);
                }
            }

            
        };

        this.getSelection = function () {
            return "THGST" + JSON.stringify(this.SpeechStream["getSelection"]());
        };

        this.getSelectionLocal = function () {
            return "L" + this.getSelection();
        };

        this.getPageText = function () {
            return "THGPT" + $th182("body").text().trim()
        };

        this.onActivated = function (settings) {
            this.clickAndSpeak(settings.hoverHighlight.toString());
            this.backgroundColor(settings.backgroundColor);
            continousReading = settings.continuousReading.toString();
        };

        this.collectHighlights = function (sort) {
            this.collectHighlights(sort, "#FFFF00", "#00FFFF", "#FF00FF", "#ADFF2F", "Highlights Untitled");
        }

        this.collectHighlights = function (sort, color1, color2, color3, color4, color5) {
            var colors = [color1, color2, color3, color4, color5];
            var highlights = this.SpeechStream["collectHighlights"](sort, colors);
            var _highlights = new Object();
            _highlights.title = document.title;
            _highlights.url = $th182(location).attr("href");

            //lowercase color so client can handle.
            highlights.forEach(function (element) {
                element.color = element.color.toLowerCase();
            }, this);
            _highlights.collectedHighlights = highlights;
            return "THCOLH" + rw_encodeForHTML(JSON.stringify(_highlights));
        };

        this.getTextWithContext = function () {
            return "THTWC"
        };

        this.collectVocab = function (sort) {
            var colors = ["#FFFF00", "#00FFFF", "#FF00FF", "#ADFF2F", "Highlights Untitled"];

            var lastReturn = false;

            var highlights = this.SpeechStream['collectVocabs'](null, colors, null);

            if (highlights.length == 0) {
                return ""
            }
            var i = 0;
            var text = "";
            g_vocabWords = [];
            for (i = 0; i < highlights.length; i++) {
                text = highlights[i].trim();
                if (text.indexOf(" ") == -1) {
                    g_vocabWords.push(text)
                }
            }
            g_vocabWords.sort();
            return "THVW" + rw_encodeForHTML(JSON.stringify(g_vocabWords))
        };

        this.updateSelection = function (updates) { };

        this.getType = function () {
            return "THTwebpage"
        };

        this.mouseoverEvent = function (event) {
            if (hoverSpeakEnabled) {
                this.SpeechStream["mouseOverEvent"](event, this.play.bind(this));
            }
        }

        function rw_encodeForHTML(p_str) {
            var strText = "";
            var nLen = p_str.length;
            var i;
            for (i = 0; i < nLen; i++) {
                var c = p_str.charCodeAt(i);
                if (c < 40 && c != 33 || c == 43 || c == 47 || c == 60 || c == 62 || c == 92 || c == 96 || c > 126) {
                    strText += "&#" + c + ";"
                } else {
                    strText += p_str.charAt(i)
                }
            }
            return strText
        }

        document.addEventListener("mouseover", this.mouseoverEvent.bind(this), false);
    };

    this.toolbar = new textHelp.thWebReader.Toolbar()
}
).apply(textHelp.thWebReader);
