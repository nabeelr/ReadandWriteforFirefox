(function () {
    "use strict";
    this.commands =
        {
            'P': 'textHelp.thWebReader.toolbar.play();',
            'PP': 'textHelp.thWebReader.toolbar.playSettings(%1);',
            'S': 'textHelp.thWebReader.toolbar.stop();',
            'PAUSE': 'textHelp.thWebReader.toolbar.pause();',
            'CAS': 'textHelp.thWebReader.toolbar.clickAndSpeak("%1");',
            'CR': 'textHelp.thWebReader.toolbar.continuousReading("%1");',
            'F': 'textHelp.thWebReader.toolbar.fastforward();',
            'R': 'textHelp.thWebReader.toolbar.rewind();',
            'FGC': 'textHelp.thWebReader.toolbar.foregroundColor("%1");',
            'BGC': 'textHelp.thWebReader.toolbar.backgroundColor("%1");',
            'G': '$th_doReturn(textHelp.thWebReader.toolbar.getURL());',
            'HS': 'textHelp.thWebReader.toolbar.highlightSelection("%1");',
            'CH': 'textHelp.thWebReader.toolbar.clearHighlights();',
            'HilightWord': 'textHelp.thWebReader.toolbar.doSelection(%1);',
            'GST': '$th_doReturn(textHelp.thWebReader.toolbar.getSelection());',
            'GLST': '$th_doReturn(textHelp.thWebReader.toolbar.getSelectionLocal());',
            'GAT': '$th_doReturn(textHelp.thWebReader.toolbar.getPageText());',
            'AS': 'textHelp.thWebReader.toolbar.onActivated(%1);',
            'COLH': '$th_doReturn(textHelp.thWebReader.toolbar.collectHighlights(%1));',
			'COLHWC': '$th_doReturn(textHelp.thWebReader.toolbar.collectHighlights(%1, "%2", "%3", "%4", "%5", "%6"));',
			'TWC': '$th_doReturn(textHelp.thWebReader.toolbar.getTextWithContext());',
			'IC': 'if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){$th_doReturn("THICtrue")}else{$th_doReturn("THICfalse")}',
            'GVW': '$th_doReturn(textHelp.thWebReader.toolbar.collectVocab(%1, "%2", "%3", "%4", "%5"));',
			"US": "textHelp.thWebReader.toolbar.updateSelection(%1);",
			'PT': '$th_doReturn(textHelp.thWebReader.toolbar.getType());',
        };
}).apply(textHelp.thWebReader);