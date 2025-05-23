(function(a){with(a){
goog.net.XhrIo.prototype.getResponseJson = JSCompiler_unstubMethod(17, function($opt_xssiPrefix$$) {
  if(this.xhr_) {
    var $responseText$$ = this.xhr_.responseText;
    $opt_xssiPrefix$$ && 0 == $responseText$$.indexOf($opt_xssiPrefix$$) && ($responseText$$ = $responseText$$.substring($opt_xssiPrefix$$.length));
    return goog.json.parse($responseText$$)
  }
});
goog.net.XhrIo.prototype.getResponseXml = JSCompiler_unstubMethod(9, function() {
  try {
    return this.xhr_ ? this.xhr_.responseXML : null
  }catch($e$$) {
    return this.logger_.fine("Can not get responseXML: " + $e$$.message), null
  }
});
th.events = {};
texthelp.webreaderapi = {};
th.events.Event = function $th$events$Event$($type$$, $opt_target$$) {
  this.type = $type$$;
  this.currentTarget = this.target = $opt_target$$;
  this.m_vwCallback = this.m_ssCallback = this.m_translatorLookup = this.m_dictionaryLookup = this.m_pictureDictionaryLookup = null;
  this.m_startPosition = 0
};
goog.object.extend(th.events.Event.prototype, goog.events.Event.prototype);
texthelp.webreaderapi.WebReaderAPI = function $texthelp$webreaderapi$WebReaderAPI$() {
  try {
    this.m_parserFactory = new texthelp.webreaderapi.ParserFactory, this.m_currentWordsHTML = this.m_currentWords = null
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.initialise = function $texthelp$webreaderapi$WebReaderAPI$$initialise$() {
  try {
    var $placeHolder$$ = goog.dom.getElement(texthelp.webreaderapi.HelpersSingleton.getInstance().getPlaceHolder());
    null !== $placeHolder$$ && "true" !== $placeHolder$$.installed && (document.documentElement.setAttribute("xmlns:thRWGDns", ""), $placeHolder$$.setAttribute("installed", "true"), texthelp.webreaderapi.EventBusSingleton.getInstance().subscribe("onthAPIWord", this.onWord, this), texthelp.webreaderapi.EventBusSingleton.getInstance().subscribe("onthAPIStop", this.onStopped, this), this.m_pictureDictionaryLookup = new texthelp.webreaderapi.lookups.PictureDictionaryLookup, this.m_dictionaryLookup = 
    new texthelp.webreaderapi.lookups.DictionaryLookup, this.m_translatorLookup = new texthelp.webreaderapi.lookups.TranslatorLookup)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.speakSelection = function $texthelp$webreaderapi$WebReaderAPI$$speakSelection$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.stopWithoutRemovingSelection();
    texthelp.webreaderapi.HelpersSingleton.getInstance();
    this.m_currentWords = this.m_parserFactory.getParser().hiliteSelection();
    return null === this.m_currentWords || 0 === this.m_currentWords.length ? null : this.m_currentWords
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.stop = function $texthelp$webreaderapi$WebReaderAPI$$stop$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.m_parserFactory.getParser().stop()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.stopWithoutRemovingSelection = function $texthelp$webreaderapi$WebReaderAPI$$stopWithoutRemovingSelection$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.m_parserFactory.getParser().stop()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.forward = function $texthelp$webreaderapi$WebReaderAPI$$forward$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.m_parserFactory.getParser().stop();
    this.m_currentWords = this.m_parserFactory.getParser().hiliteNextSentence(!1)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.rewind = function $texthelp$webreaderapi$WebReaderAPI$$rewind$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.pause = function $texthelp$webreaderapi$WebReaderAPI$$pause$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.factFinder = function $texthelp$webreaderapi$WebReaderAPI$$factFinder$() {
  try {
    this.stopWithoutRemovingSelection();
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    var $words$$ = null, $words$$ = this.m_parserFactory.getParser().hasSelection() ? this.m_parserFactory.getParser().getSelection() : this.m_parserFactory.getParser().getWord();
    if(0 !== $words$$.length) {
      this.m_parserFactory.getParser().clearSelection_();
      var $searchText$$ = $words$$.join(" ");
      window.open("https://www.google.co.uk/search?hl=en&q=" + encodeURIComponent($searchText$$), "_ntthff")
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.collectHighlights = function $texthelp$webreaderapi$WebReaderAPI$$collectHighlights$($callback$$, $sort$$, $colors$$, $fileName$$) {
  try {
    this.stop();
    this.m_ssCallback = $callback$$;
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.m_parserFactory.getParser().collectHighlights($callback$$, $sort$$, $colors$$, $fileName$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.collectVocabWords = function $texthelp$webreaderapi$WebReaderAPI$$collectVocabWords$($callback$$, $sort$$, $colors$$) {
  try {
    this.stop();
    this.m_vwCallback = $callback$$;
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    this.m_parserFactory.getParser().collectVocabWords($callback$$, $sort$$, $colors$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.getVoices = function $texthelp$webreaderapi$WebReaderAPI$$getVoices$() {
  return null
};
texthelp.webreaderapi.WebReaderAPI.prototype.onWord = function $texthelp$webreaderapi$WebReaderAPI$$onWord$($params$$) {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    "start" !== $params$$[0] && this.m_parserFactory.getParser().hiliteWord($params$$[0])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.onStopped = function $texthelp$webreaderapi$WebReaderAPI$$onStopped$() {
  try {
    this.m_parserFactory.getParser().stop(), this.m_currentWords = this.m_parserFactory.getParser().hiliteNextSentence(!0), null === this.m_currentWords ? this.m_parserFactory.getParser().clearBrowserSelection() : 0 === this.m_currentWords.length && this.m_parserFactory.getParser().clearBrowserSelection()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.pictureDictionaryCurrentWord = function $texthelp$webreaderapi$WebReaderAPI$$pictureDictionaryCurrentWord$($callback$$) {
  try {
    this.stopWithoutRemovingSelection();
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    var $words$$ = this.m_parserFactory.getParser().getWord();
    return 0 === $words$$.length ? $callback$$(null) : this.m_pictureDictionaryLookup.lookup($words$$[0], $callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.dictionaryCurrentWord = function $texthelp$webreaderapi$WebReaderAPI$$dictionaryCurrentWord$($callback$$) {
  try {
    this.stopWithoutRemovingSelection();
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    var $words$$ = this.m_parserFactory.getParser().getWord();
    return 0 === $words$$.length ? $callback$$(null) : this.m_dictionaryLookup.lookup($words$$[0], $callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.translateCurrentWord = function $texthelp$webreaderapi$WebReaderAPI$$translateCurrentWord$($callback$$) {
  try {
    this.stopWithoutRemovingSelection();
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    var $words$$ = this.m_parserFactory.getParser().getWord();
    return 0 === $words$$.length ? $callback$$(null) : this.m_translatorLookup.lookup($words$$[0], $callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.hasParser = function $texthelp$webreaderapi$WebReaderAPI$$hasParser$() {
  try {
    return this.m_parserFactory.hasParser()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.getParser = function $texthelp$webreaderapi$WebReaderAPI$$getParser$() {
  try {
    if(null === this.m_parserFactory.getParser()) {
      throw Error("Could not get a reference to the current parser.");
    }
    return this.m_parserFactory.getParser()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.WebReaderAPI.prototype.getUserSettings = function $texthelp$webreaderapi$WebReaderAPI$$getUserSettings$() {
  try {
    if(null === texthelp.webreader.UserSettingsSingleton.getInstance()) {
      throw Error("Could not get a reference to the current parser.");
    }
    return texthelp.webreader.UserSettingsSingleton.getInstance()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.exportSymbol("texthelp.webreaderapi.WebReaderAPI", texthelp.webreaderapi.WebReaderAPI);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "initialise", texthelp.webreaderapi.WebReaderAPI.prototype.initialise);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "speakSelection", texthelp.webreaderapi.WebReaderAPI.prototype.speakSelection);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "stop", texthelp.webreaderapi.WebReaderAPI.prototype.stop);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "getVoices", texthelp.webreaderapi.WebReaderAPI.prototype.getVoices);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "hasParser", texthelp.webreaderapi.WebReaderAPI.prototype.hasParser);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "getParser", texthelp.webreaderapi.WebReaderAPI.prototype.getParser);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "collectHighlights", texthelp.webreaderapi.WebReaderAPI.prototype.collectHighlights);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "collectVocabWords", texthelp.webreaderapi.WebReaderAPI.prototype.collectVocabWords);
goog.exportProperty(texthelp.webreaderapi.WebReaderAPI.prototype, "getUserSettings", texthelp.webreaderapi.WebReaderAPI.prototype.getUserSettings);
texthelp.webreaderapi.DefaultParser = function $texthelp$webreaderapi$DefaultParser$() {
};
texthelp.webreaderapi.DefaultParser.prototype.hiliteSelection = function $texthelp$webreaderapi$DefaultParser$$hiliteSelection$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.getHighlightPosition = function $texthelp$webreaderapi$DefaultParser$$getHighlightPosition$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.hasSelection = function $texthelp$webreaderapi$DefaultParser$$hasSelection$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.getWord = function $texthelp$webreaderapi$DefaultParser$$getWord$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.getSelection = function $texthelp$webreaderapi$DefaultParser$$getSelection$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.hiliteWord = function $texthelp$webreaderapi$DefaultParser$$hiliteWord$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.clearBrowserSelection = function $texthelp$webreaderapi$DefaultParser$$clearBrowserSelection$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.collectHighlights = function $texthelp$webreaderapi$DefaultParser$$collectHighlights$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.collectVocabWords = function $texthelp$webreaderapi$DefaultParser$$collectVocabWords$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.stop = function $texthelp$webreaderapi$DefaultParser$$stop$() {
  throw Error("Not implemented");
};
texthelp.webreaderapi.DefaultParser.prototype.getLayeredHitWord = function $texthelp$webreaderapi$DefaultParser$$getLayeredHitWord$($x$$, $y$$) {
  var $topElemFromPoint$$ = document.elementFromPoint($x$$, $y$$);
  return $topElemFromPoint$$[0].nodeName === this.CONST_NODENAME ? $topElemFromPoint$$[0] : null
};
texthelp.webreaderapi.DefaultParser.prototype.addClassName = function $texthelp$webreaderapi$DefaultParser$$addClassName$($oHTMLElement$$, $classNameToAdd$$) {
  texthelp.webreaderapi.HelpersSingleton.getInstance().addClassName($oHTMLElement$$, $classNameToAdd$$)
};
texthelp.webreaderapi.DefaultParser.prototype.removeClassName = function $texthelp$webreaderapi$DefaultParser$$removeClassName$($oHTMLElement$$, $classNameToRemove$$) {
  texthelp.webreaderapi.HelpersSingleton.getInstance().removeClassName($oHTMLElement$$, $classNameToRemove$$)
};
texthelp.webreaderapi.DefaultParser.prototype.hasClassName = function $texthelp$webreaderapi$DefaultParser$$hasClassName$($oHTMLElement$$, $classNameToCheckFor$$) {
  return texthelp.webreaderapi.HelpersSingleton.getInstance().hasClassName($oHTMLElement$$, $classNameToCheckFor$$)
};
texthelp.webreaderapi.DefaultParser.prototype.changeClassName = function $texthelp$webreaderapi$DefaultParser$$changeClassName$($oHTMLElement$$, $currentClassName$$, $newClassName$$) {
  texthelp.webreaderapi.HelpersSingleton.getInstance().changeClassName($oHTMLElement$$, $currentClassName$$, $newClassName$$)
};
texthelp.webreaderapi.EventBusSingleton = function $texthelp$webreaderapi$EventBusSingleton$() {
  this.subscriptions = {};
  this.unsubscribeTokens = [];
  this.subscriptionPointers = []
};
goog.addSingletonGetter(texthelp.webreaderapi.EventBusSingleton);
texthelp.webreaderapi.EventBusSingleton.prototype.subscribe = function $texthelp$webreaderapi$EventBusSingleton$$subscribe$($eventName$$, $callback$$, $scopeObject$$) {
  try {
    if("string" !== typeof $eventName$$) {
      throw Error("texthelp.webreaderapi.EventBusSingleton.subscribe's  first parameter 'eventName' should be a string");
    }
    if("function" !== typeof $callback$$) {
      throw Error("texthelp.webreaderapi.EventBusSingleton.subscribe's  first parameter 'callback' should be a function");
    }
    this.subscriptions[$eventName$$] || (this.subscriptions[$eventName$$] = []);
    var $func$$ = $callback$$;
    null !== $scopeObject$$ && ($func$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind($scopeObject$$, $callback$$));
    this.subscriptions[$eventName$$].push($func$$);
    this.subscriptionPointer = {eventName:$eventName$$, callbackIndex:this.subscriptions[$eventName$$].length - 1};
    var $i$$ = this.subscriptionPointers.length;
    this.unsubscribeToken = {};
    this.subscriptionPointers[$i$$] = this.subscriptionPointer;
    return this.unsubscribeTokens[$i$$] = this.unsubscribeToken
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.EventBusSingleton.prototype.publish = function $texthelp$webreaderapi$EventBusSingleton$$publish$($eventName$$, $data$$) {
  try {
    if("string" !== typeof $eventName$$) {
      throw Error("texthelp.webreaderapi.EventBusSingleton.publish's first parameter 'eventName' should be a string");
    }
    if(!$data$$) {
      throw Error("texthelp.webreaderapi.EventBusSingleton.publish requires a second argument 'data'");
    }
    var $i$$, $callback$$;
    if(this.subscriptions[$eventName$$]) {
      for($i$$ = 0;$i$$ < this.subscriptions[$eventName$$].length;$i$$++) {
        ($callback$$ = this.subscriptions[$eventName$$][$i$$]) && $callback$$($data$$)
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.EventBusSingleton.prototype.unsubscribe = function $texthelp$webreaderapi$EventBusSingleton$$unsubscribe$($unsubscribeToken$$) {
  try {
    var $subscriptionPointer$$ = this.subscriptionPointers[this.unsubscribeTokens.indexOf($unsubscribeToken$$)];
    this.subscriptions[$subscriptionPointer$$.eventName][$subscriptionPointer$$.callbackIndex] = null
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.exportSymbol("texthelp.webreaderapi.EventBusSingleton", texthelp.webreaderapi.EventBusSingleton);
goog.exportProperty(texthelp.webreaderapi.EventBusSingleton.prototype, "unsubscribe", texthelp.webreaderapi.EventBusSingleton.prototype.unsubscribe);
goog.exportProperty(texthelp.webreaderapi.EventBusSingleton.prototype, "subscribe", texthelp.webreaderapi.EventBusSingleton.prototype.subscribe);
goog.exportProperty(texthelp.webreaderapi.EventBusSingleton.prototype, "publish", texthelp.webreaderapi.EventBusSingleton.prototype.publish);
texthelp.webreaderapi.HelpersSingleton = function $texthelp$webreaderapi$HelpersSingleton$() {
  this.CONST_PLACEHOLDER = "WebReader";
  this.m_api = null;
  this.m_authenticated = !1
};
goog.addSingletonGetter(texthelp.webreaderapi.HelpersSingleton);
texthelp.webreaderapi.HelpersSingleton.prototype.getInst = function $texthelp$webreaderapi$HelpersSingleton$$getInst$() {
  return texthelp.webreaderapi.HelpersSingleton.getInstance()
};
texthelp.webreaderapi.HelpersSingleton.prototype.isAuthenticated = function $texthelp$webreaderapi$HelpersSingleton$$isAuthenticated$() {
  try {
    return this.m_authenticated
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.setAuthentication = function $texthelp$webreaderapi$HelpersSingleton$$setAuthentication$($authenticated$$) {
  try {
    this.m_authenticated = $authenticated$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.getPlaceHolder = function $texthelp$webreaderapi$HelpersSingleton$$getPlaceHolder$() {
  try {
    return this.CONST_PLACEHOLDER
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.getRootLocation = function $texthelp$webreaderapi$HelpersSingleton$$getRootLocation$() {
  try {
    return goog.dom.getElement("WebReader").getAttribute("path")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.getLocale = function $texthelp$webreaderapi$HelpersSingleton$$getLocale$() {
  try {
    var $currentLocale$$ = goog.dom.getElement("WebReader").getAttribute("lang"), $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration();
    "undefined" !== typeof $config$$[$currentLocale$$] && ($config$$.locale = $currentLocale$$);
    return $config$$.locale
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.getGuid = function $texthelp$webreaderapi$HelpersSingleton$$getGuid$() {
  try {
    return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function($a$$, $b$$) {
      return $b$$ = 16 * Math.random(), ("y" == $a$$ ? $b$$ & 3 | 8 : $b$$ | 0).toString(16)
    })
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.toArray = function $texthelp$webreaderapi$HelpersSingleton$$toArray$($obj$$) {
  return Array.prototype.slice.call($obj$$)
};
texthelp.webreaderapi.HelpersSingleton.prototype.bind = function $texthelp$webreaderapi$HelpersSingleton$$bind$($scope$$, $fn$$) {
  return function() {
    return $fn$$.apply($scope$$, texthelp.webreaderapi.HelpersSingleton.getInstance().toArray(arguments))
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.arrayContains = function $texthelp$webreaderapi$HelpersSingleton$$arrayContains$($array$$, $valueToCheckFor$$) {
  for(var $i$$ = $array$$.length;$i$$--;) {
    if($array$$[$i$$] === $valueToCheckFor$$) {
      return!0
    }
  }
  return!1
};
texthelp.webreaderapi.HelpersSingleton.prototype.logError = function $texthelp$webreaderapi$HelpersSingleton$$logError$($err$$) {
  window.console.error($err$$.stack)
};
texthelp.webreaderapi.HelpersSingleton.prototype.logWarning = function $texthelp$webreaderapi$HelpersSingleton$$logWarning$($warning$$) {
  window.console.warn($warning$$)
};
texthelp.webreaderapi.HelpersSingleton.prototype.logInfo = function $texthelp$webreaderapi$HelpersSingleton$$logInfo$($info$$) {
  window.console.info($info$$)
};
texthelp.webreaderapi.HelpersSingleton.prototype.addClassName = function $texthelp$webreaderapi$HelpersSingleton$$addClassName$($oHTMLElement$$, $classNameToAdd$$) {
  try {
    if("string" == typeof $oHTMLElement$$ && ($oHTMLElement$$ = goog.dom.getElement($oHTMLElement$$)), $oHTMLElement$$) {
      var $theClassName_theClassNamesToAddArray$$ = $oHTMLElement$$.className;
      if($theClassName_theClassNamesToAddArray$$ && 0 < $theClassName_theClassNamesToAddArray$$.length) {
        var $classNamesToAdd$$ = $classNameToAdd$$.split(" ");
        if(1 === $classNamesToAdd$$.length && -1 === (" " + $theClassName_theClassNamesToAddArray$$ + " ").lastIndexOf(" " + $classNameToAdd$$ + " ")) {
          $oHTMLElement$$.className = $oHTMLElement$$.className + " " + $classNameToAdd$$
        }else {
          for(var $theClassNames$$ = $theClassName_theClassNamesToAddArray$$.split(" "), $iEnd$$ = $classNamesToAdd$$.length, $aClassName$$, $theClassName_theClassNamesToAddArray$$ = [], $i$$ = 0;$i$$ < $iEnd$$;$i$$++) {
            $aClassName$$ = $classNamesToAdd$$[$i$$], -1 === $theClassNames$$.indexOf($aClassName$$) && $theClassName_theClassNamesToAddArray$$.push($aClassName$$)
          }
          $oHTMLElement$$.className = $oHTMLElement$$.className + " " + (1 < $theClassName_theClassNamesToAddArray$$.length ? $theClassName_theClassNamesToAddArray$$.join(" ") : $theClassName_theClassNamesToAddArray$$[0])
        }
      }else {
        $oHTMLElement$$.className = $classNameToAdd$$
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.removeClassName = function $texthelp$webreaderapi$HelpersSingleton$$removeClassName$($oHTMLElement$$, $classNameToRemove$$) {
  try {
    if("string" == typeof $oHTMLElement$$ && ($oHTMLElement$$ = goog.dom.getElement($oHTMLElement$$)), $oHTMLElement$$) {
      var $theClassName$$ = $oHTMLElement$$.className;
      if($theClassName$$ && 0 < $theClassName$$.length) {
        for(var $theClassNameArray$$ = $theClassName$$.split(" "), $classNamesToRemove$$ = $classNameToRemove$$.split(" "), $iEnd$$ = $theClassNameArray$$.length, $aClassName$$, $theClassName$$ = [], $i$$ = 0;$i$$ < $iEnd$$;$i$$++) {
          $aClassName$$ = $theClassNameArray$$[$i$$], -1 === $classNamesToRemove$$.indexOf($aClassName$$) && $theClassName$$.push($aClassName$$)
        }
        switch(!0) {
          case 1 < $theClassName$$.length:
            $oHTMLElement$$.className = $theClassName$$.join(" ");
            break;
          case 1 == $theClassName$$.length:
            $oHTMLElement$$.className = $theClassName$$[0];
            break;
          case 0 == $theClassName$$.length:
            $oHTMLElement$$.className = ""
        }
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.hasClassName = function $texthelp$webreaderapi$HelpersSingleton$$hasClassName$($oHTMLElement$$, $classNameToCheckFor$$) {
  try {
    if(null === $oHTMLElement$$) {
      return!1
    }
    if($oHTMLElement$$.className) {
      for(var $arrList$$ = $oHTMLElement$$.className.split(" "), $strClassUpper$$ = $classNameToCheckFor$$.toUpperCase(), $i$$ = 0;$i$$ < $arrList$$.length;$i$$++) {
        if($arrList$$[$i$$].toUpperCase() == $strClassUpper$$) {
          return!0
        }
      }
    }
    return!1
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.changeClassName = function $texthelp$webreaderapi$HelpersSingleton$$changeClassName$($oHTMLElement$$, $currentClassName$$, $newClassName$$) {
  try {
    this.removeClassName($oHTMLElement$$, $currentClassName$$.toString()), this.addClassName($oHTMLElement$$, $newClassName$$.toString())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.HelpersSingleton.prototype.rgbToHex = function $texthelp$webreaderapi$HelpersSingleton$$rgbToHex$($r$$) {
  if($r$$ && "string" === typeof $r$$ && "rgb" == $r$$.substring(0, 3)) {
    var $b$$ = $r$$.substring(4, $r$$.length - 1).split(",");
    if(3 == $b$$.length && "" != $b$$[0] && "" != $b$$[1] && "" != $b$$[2] && 0 <= $b$$[0] && 255 >= $b$$[0] && 0 <= $b$$[1] && 255 >= $b$$[1] && 0 <= $b$$[2] && 255 >= $b$$[2]) {
      $r$$[0] = "00";
      $r$$ = parseInt($b$$[0], 10).toString(16);
      1 === $r$$.length && ($r$$ = "0" + $r$$);
      var $g$$ = parseInt($b$$[1], 10).toString(16);
      1 === $g$$.length && ($g$$ = "0" + $g$$);
      $b$$ = parseInt($b$$[2], 10).toString(16);
      1 === $b$$.length && ($b$$ = "0" + $b$$);
      return("#" + $r$$ + $g$$ + $b$$).toUpperCase()
    }
  }
  return""
};
texthelp.webreaderapi.HelpersSingleton.prototype.rgbToNumeric = function $texthelp$webreaderapi$HelpersSingleton$$rgbToNumeric$($rgbColor$$1_rgbColors$$) {
  if(!$rgbColor$$1_rgbColors$$ || "string" !== typeof $rgbColor$$1_rgbColors$$ || "rgb" != $rgbColor$$1_rgbColors$$.substring(0, 3)) {
    return null
  }
  $rgbColor$$1_rgbColors$$ = $rgbColor$$1_rgbColors$$.substring(4, $rgbColor$$1_rgbColors$$.length - 1).split(",");
  return!(3 == $rgbColor$$1_rgbColors$$.length && "" != $rgbColor$$1_rgbColors$$[0] && "" != $rgbColor$$1_rgbColors$$[1] && "" != $rgbColor$$1_rgbColors$$[2]) ? null : [$rgbColor$$1_rgbColors$$[0], $rgbColor$$1_rgbColors$$[1], $rgbColor$$1_rgbColors$$[2]]
};
texthelp.webreaderapi.HelpersSingleton.prototype.rgbToHsl = function $texthelp$webreaderapi$HelpersSingleton$$rgbToHsl$($r$$4_rgbColor$$) {
  if(!$r$$4_rgbColor$$ || "string" !== typeof $r$$4_rgbColor$$ || "rgb" != $r$$4_rgbColor$$.substring(0, 3)) {
    return null
  }
  var $b$$37_rgbColors$$ = $r$$4_rgbColor$$.substring(4, $r$$4_rgbColor$$.length - 1).split(",");
  if(!(3 == $b$$37_rgbColors$$.length && "" != $b$$37_rgbColors$$[0] && "" != $b$$37_rgbColors$$[1] && "" != $b$$37_rgbColors$$[2])) {
    return null
  }
  var $r$$4_rgbColor$$ = $b$$37_rgbColors$$[0], $g$$ = $b$$37_rgbColors$$[1], $b$$37_rgbColors$$ = $b$$37_rgbColors$$[2], $r$$4_rgbColor$$ = $r$$4_rgbColor$$ / 255, $g$$ = $g$$ / 255, $b$$37_rgbColors$$ = $b$$37_rgbColors$$ / 255, $max$$ = Math.max($r$$4_rgbColor$$, $g$$, $b$$37_rgbColors$$), $min$$1_s$$ = Math.min($r$$4_rgbColor$$, $g$$, $b$$37_rgbColors$$), $h$$, $l$$ = ($max$$ + $min$$1_s$$) / 2;
  if($max$$ == $min$$1_s$$) {
    $h$$ = $min$$1_s$$ = 0
  }else {
    var $d$$ = $max$$ - $min$$1_s$$, $min$$1_s$$ = 0.5 < $l$$ ? $d$$ / (2 - $max$$ - $min$$1_s$$) : $d$$ / ($max$$ + $min$$1_s$$);
    switch(parseInt($max$$, 10)) {
      case parseInt($r$$4_rgbColor$$, 10):
        $h$$ = ($g$$ - $b$$37_rgbColors$$) / $d$$ + ($g$$ < $b$$37_rgbColors$$ ? 6 : 0);
        break;
      case parseInt($g$$, 10):
        $h$$ = ($b$$37_rgbColors$$ - $r$$4_rgbColor$$) / $d$$ + 2;
        break;
      case parseInt($b$$37_rgbColors$$, 10):
        $h$$ = ($r$$4_rgbColor$$ - $g$$) / $d$$ + 4
    }
    $h$$ /= 6
  }
  return[$h$$, $min$$1_s$$, $l$$]
};
texthelp.webreaderapi.HelpersSingleton.prototype.trim = function $texthelp$webreaderapi$HelpersSingleton$$trim$($stringToTrim$$) {
  return $stringToTrim$$.replace(/^\s*([\S\s]*?)\s*$/, "$1")
};
texthelp.webreaderapi.HelpersSingleton.prototype.getTextNodesParentIn = function $texthelp$webreaderapi$HelpersSingleton$$getTextNodesParentIn$($node$$0$$, $includeWhitespaceNodes$$) {
  function $getTextNodes$$($node$$) {
    if(3 == $node$$.nodeType) {
      ($includeWhitespaceNodes$$ || !$whitespace$$.test($node$$.nodeValue)) && $textNodes$$.push($node$$.parentNode)
    }else {
      for(var $i$$ = 0, $len$$ = $node$$.childNodes.length;$i$$ < $len$$;++$i$$) {
        $getTextNodes$$($node$$.childNodes[$i$$])
      }
    }
  }
  var $textNodes$$ = [], $whitespace$$ = /^\s*$/;
  $getTextNodes$$($node$$0$$);
  return $textNodes$$
};
texthelp.webreaderapi.HelpersSingleton.prototype.getTextNodesIn = JSCompiler_stubMethod(12);
texthelp.webreaderapi.HelpersSingleton.prototype.getAPI = function $texthelp$webreaderapi$HelpersSingleton$$getAPI$() {
  return this.m_api
};
texthelp.webreaderapi.HelpersSingleton.prototype.setAPI = function $texthelp$webreaderapi$HelpersSingleton$$setAPI$($api$$) {
  this.m_api = $api$$
};
goog.exportSymbol("texthelp.webreaderapi.HelpersSingleton", texthelp.webreaderapi.HelpersSingleton);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton, "getInst", texthelp.webreaderapi.HelpersSingleton.prototype.getInst);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "isAuthenticated", texthelp.webreaderapi.HelpersSingleton.prototype.isAuthenticated);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "getPlaceHolder", texthelp.webreaderapi.HelpersSingleton.prototype.getPlaceHolder);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "getRootLocation", texthelp.webreaderapi.HelpersSingleton.prototype.getRootLocation);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "getGuid", texthelp.webreaderapi.HelpersSingleton.getGuid);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "logError", texthelp.webreaderapi.HelpersSingleton.prototype.logError);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "toArray", texthelp.webreaderapi.HelpersSingleton.prototype.toArray);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "bind", texthelp.webreaderapi.HelpersSingleton.prototype.bind);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "addClassName", texthelp.webreaderapi.HelpersSingleton.prototype.addClassName);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "removeClassName", texthelp.webreaderapi.HelpersSingleton.prototype.removeClassName);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "hasClassName", texthelp.webreaderapi.HelpersSingleton.prototype.hasClassName);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "changeClassName", texthelp.webreaderapi.HelpersSingleton.prototype.changeClassName);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "trim", texthelp.webreaderapi.HelpersSingleton.prototype.trim);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "getAPI", texthelp.webreaderapi.HelpersSingleton.prototype.getAPI);
goog.exportProperty(texthelp.webreaderapi.HelpersSingleton.prototype, "setAPI", texthelp.webreaderapi.HelpersSingleton.prototype.setAPI);
goog.Uri = function $goog$Uri$($opt_uri$$, $opt_ignoreCase$$) {
  var $m$$;
  $opt_uri$$ instanceof goog.Uri ? (this.ignoreCase_ = goog.isDef($opt_ignoreCase$$) ? $opt_ignoreCase$$ : $opt_uri$$.getIgnoreCase(), this.setScheme($opt_uri$$.getScheme()), this.setUserInfo($opt_uri$$.getUserInfo()), this.setDomain($opt_uri$$.getDomain()), this.setPort($opt_uri$$.getPort()), this.setPath($opt_uri$$.getPath()), this.setQueryData($opt_uri$$.getQueryData().clone()), this.setFragment($opt_uri$$.getFragment())) : $opt_uri$$ && ($m$$ = goog.uri.utils.split(String($opt_uri$$))) ? (this.ignoreCase_ = 
  !!$opt_ignoreCase$$, this.setScheme($m$$[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo($m$$[goog.uri.utils.ComponentIndex.USER_INFO] || "", !0), this.setDomain($m$$[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort($m$$[goog.uri.utils.ComponentIndex.PORT]), this.setPath($m$$[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData($m$$[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment($m$$[goog.uri.utils.ComponentIndex.FRAGMENT] || 
  "", !0)) : (this.ignoreCase_ = !!$opt_ignoreCase$$, this.queryData_ = new goog.Uri.QueryData(null, null, this.ignoreCase_))
};
goog.Uri.preserveParameterTypesCompatibilityFlag = !1;
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.scheme_ = "";
goog.Uri.prototype.userInfo_ = "";
goog.Uri.prototype.domain_ = "";
goog.Uri.prototype.port_ = null;
goog.Uri.prototype.path_ = "";
goog.Uri.prototype.fragment_ = "";
goog.Uri.prototype.isReadOnly_ = !1;
goog.Uri.prototype.ignoreCase_ = !1;
goog.Uri.prototype.toString = function $goog$Uri$$toString$() {
  var $out$$ = [], $domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getScheme();
  $domain_fragment$$2_path$$7_port_query$$3_scheme$$ && $out$$.push(goog.Uri.encodeSpecialChars_($domain_fragment$$2_path$$7_port_query$$3_scheme$$, goog.Uri.reDisallowedInSchemeOrUserInfo_), ":");
  if($domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getDomain()) {
    $out$$.push("//");
    var $userInfo$$ = this.getUserInfo();
    $userInfo$$ && $out$$.push(goog.Uri.encodeSpecialChars_($userInfo$$, goog.Uri.reDisallowedInSchemeOrUserInfo_), "@");
    $out$$.push(goog.string.urlEncode($domain_fragment$$2_path$$7_port_query$$3_scheme$$));
    $domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getPort();
    null != $domain_fragment$$2_path$$7_port_query$$3_scheme$$ && $out$$.push(":", String($domain_fragment$$2_path$$7_port_query$$3_scheme$$))
  }
  if($domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getPath()) {
    this.hasDomain() && "/" != $domain_fragment$$2_path$$7_port_query$$3_scheme$$.charAt(0) && $out$$.push("/"), $out$$.push(goog.Uri.encodeSpecialChars_($domain_fragment$$2_path$$7_port_query$$3_scheme$$, "/" == $domain_fragment$$2_path$$7_port_query$$3_scheme$$.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_))
  }
  ($domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getEncodedQuery()) && $out$$.push("?", $domain_fragment$$2_path$$7_port_query$$3_scheme$$);
  ($domain_fragment$$2_path$$7_port_query$$3_scheme$$ = this.getFragment()) && $out$$.push("#", goog.Uri.encodeSpecialChars_($domain_fragment$$2_path$$7_port_query$$3_scheme$$, goog.Uri.reDisallowedInFragment_));
  return $out$$.join("")
};
goog.Uri.prototype.resolve = function $goog$Uri$$resolve$($relativeUri$$) {
  var $absoluteUri$$ = this.clone(), $overridden$$ = $relativeUri$$.hasScheme();
  $overridden$$ ? $absoluteUri$$.setScheme($relativeUri$$.getScheme()) : $overridden$$ = $relativeUri$$.hasUserInfo();
  $overridden$$ ? $absoluteUri$$.setUserInfo($relativeUri$$.getUserInfo()) : $overridden$$ = $relativeUri$$.hasDomain();
  $overridden$$ ? $absoluteUri$$.setDomain($relativeUri$$.getDomain()) : $overridden$$ = $relativeUri$$.hasPort();
  var $path$$ = $relativeUri$$.getPath();
  if($overridden$$) {
    $absoluteUri$$.setPort($relativeUri$$.getPort())
  }else {
    if($overridden$$ = $relativeUri$$.hasPath()) {
      if("/" != $path$$.charAt(0)) {
        if(this.hasDomain() && !this.hasPath()) {
          $path$$ = "/" + $path$$
        }else {
          var $lastSlashIndex$$ = $absoluteUri$$.getPath().lastIndexOf("/");
          -1 != $lastSlashIndex$$ && ($path$$ = $absoluteUri$$.getPath().substr(0, $lastSlashIndex$$ + 1) + $path$$)
        }
      }
      $path$$ = goog.Uri.removeDotSegments($path$$)
    }
  }
  $overridden$$ ? $absoluteUri$$.setPath($path$$) : $overridden$$ = $relativeUri$$.hasQuery();
  $overridden$$ ? $absoluteUri$$.setQueryData($relativeUri$$.getDecodedQuery()) : $overridden$$ = $relativeUri$$.hasFragment();
  $overridden$$ && $absoluteUri$$.setFragment($relativeUri$$.getFragment());
  return $absoluteUri$$
};
goog.Uri.prototype.clone = function $goog$Uri$$clone$() {
  return new goog.Uri(this)
};
goog.Uri.prototype.getScheme = function $goog$Uri$$getScheme$() {
  return this.scheme_
};
goog.Uri.prototype.setScheme = function $goog$Uri$$setScheme$($newScheme$$, $opt_decode$$) {
  this.enforceReadOnly();
  if(this.scheme_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newScheme$$) : $newScheme$$) {
    this.scheme_ = this.scheme_.replace(/:$/, "")
  }
  return this
};
goog.Uri.prototype.hasScheme = function $goog$Uri$$hasScheme$() {
  return!!this.scheme_
};
goog.Uri.prototype.getUserInfo = function $goog$Uri$$getUserInfo$() {
  return this.userInfo_
};
goog.Uri.prototype.setUserInfo = function $goog$Uri$$setUserInfo$($newUserInfo$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.userInfo_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newUserInfo$$) : $newUserInfo$$;
  return this
};
goog.Uri.prototype.hasUserInfo = function $goog$Uri$$hasUserInfo$() {
  return!!this.userInfo_
};
goog.Uri.prototype.getDomain = function $goog$Uri$$getDomain$() {
  return this.domain_
};
goog.Uri.prototype.setDomain = function $goog$Uri$$setDomain$($newDomain$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.domain_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newDomain$$) : $newDomain$$;
  return this
};
goog.Uri.prototype.hasDomain = function $goog$Uri$$hasDomain$() {
  return!!this.domain_
};
goog.Uri.prototype.getPort = function $goog$Uri$$getPort$() {
  return this.port_
};
goog.Uri.prototype.setPort = function $goog$Uri$$setPort$($newPort$$) {
  this.enforceReadOnly();
  if($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if(isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    this.port_ = $newPort$$
  }else {
    this.port_ = null
  }
  return this
};
goog.Uri.prototype.hasPort = function $goog$Uri$$hasPort$() {
  return null != this.port_
};
goog.Uri.prototype.getPath = function $goog$Uri$$getPath$() {
  return this.path_
};
goog.Uri.prototype.setPath = function $goog$Uri$$setPath$($newPath$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.path_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newPath$$) : $newPath$$;
  return this
};
goog.Uri.prototype.hasPath = function $goog$Uri$$hasPath$() {
  return!!this.path_
};
goog.Uri.prototype.hasQuery = function $goog$Uri$$hasQuery$() {
  return"" !== this.queryData_.toString()
};
goog.Uri.prototype.setQueryData = function $goog$Uri$$setQueryData$($queryData$$, $opt_decode$$) {
  this.enforceReadOnly();
  $queryData$$ instanceof goog.Uri.QueryData ? (this.queryData_ = $queryData$$, this.queryData_.setIgnoreCase(this.ignoreCase_)) : ($opt_decode$$ || ($queryData$$ = goog.Uri.encodeSpecialChars_($queryData$$, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData($queryData$$, null, this.ignoreCase_));
  return this
};
goog.Uri.prototype.setQuery = function $goog$Uri$$setQuery$($newQuery$$, $opt_decode$$) {
  return this.setQueryData($newQuery$$, $opt_decode$$)
};
goog.Uri.prototype.getEncodedQuery = function $goog$Uri$$getEncodedQuery$() {
  return this.queryData_.toString()
};
goog.Uri.prototype.getDecodedQuery = function $goog$Uri$$getDecodedQuery$() {
  return this.queryData_.toDecodedString()
};
goog.Uri.prototype.getQueryData = function $goog$Uri$$getQueryData$() {
  return this.queryData_
};
goog.Uri.prototype.getQuery = function $goog$Uri$$getQuery$() {
  return this.getEncodedQuery()
};
goog.Uri.prototype.setParameterValue = function $goog$Uri$$setParameterValue$($key$$, $value$$) {
  this.enforceReadOnly();
  this.queryData_.set($key$$, $value$$);
  return this
};
goog.Uri.prototype.setParameterValues = function $goog$Uri$$setParameterValues$($key$$, $values$$) {
  this.enforceReadOnly();
  goog.isArray($values$$) || ($values$$ = [String($values$$)]);
  this.queryData_.setValues($key$$, $values$$);
  return this
};
goog.Uri.prototype.getParameterValues = function $goog$Uri$$getParameterValues$($name$$) {
  return this.queryData_.getValues($name$$)
};
goog.Uri.prototype.getParameterValue = function $goog$Uri$$getParameterValue$($paramName$$) {
  return this.queryData_.get($paramName$$)
};
goog.Uri.prototype.getFragment = function $goog$Uri$$getFragment$() {
  return this.fragment_
};
goog.Uri.prototype.setFragment = function $goog$Uri$$setFragment$($newFragment$$, $opt_decode$$) {
  this.enforceReadOnly();
  this.fragment_ = $opt_decode$$ ? goog.Uri.decodeOrEmpty_($newFragment$$) : $newFragment$$;
  return this
};
goog.Uri.prototype.hasFragment = function $goog$Uri$$hasFragment$() {
  return!!this.fragment_
};
goog.Uri.prototype.hasSameDomainAs = function $goog$Uri$$hasSameDomainAs$($uri2$$) {
  return(!this.hasDomain() && !$uri2$$.hasDomain() || this.getDomain() == $uri2$$.getDomain()) && (!this.hasPort() && !$uri2$$.hasPort() || this.getPort() == $uri2$$.getPort())
};
goog.Uri.prototype.makeUnique = function $goog$Uri$$makeUnique$() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this
};
goog.Uri.prototype.removeParameter = function $goog$Uri$$removeParameter$($key$$) {
  this.enforceReadOnly();
  this.queryData_.remove($key$$);
  return this
};
goog.Uri.prototype.setReadOnly = function $goog$Uri$$setReadOnly$($isReadOnly$$) {
  this.isReadOnly_ = $isReadOnly$$;
  return this
};
goog.Uri.prototype.isReadOnly = function $goog$Uri$$isReadOnly$() {
  return this.isReadOnly_
};
goog.Uri.prototype.enforceReadOnly = function $goog$Uri$$enforceReadOnly$() {
  if(this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function $goog$Uri$$setIgnoreCase$($ignoreCase$$) {
  this.ignoreCase_ = $ignoreCase$$;
  this.queryData_ && this.queryData_.setIgnoreCase($ignoreCase$$);
  return this
};
goog.Uri.prototype.getIgnoreCase = function $goog$Uri$$getIgnoreCase$() {
  return this.ignoreCase_
};
goog.Uri.parse = function $goog$Uri$parse$($uri$$, $opt_ignoreCase$$) {
  return $uri$$ instanceof goog.Uri ? $uri$$.clone() : new goog.Uri($uri$$, $opt_ignoreCase$$)
};
goog.Uri.create = function $goog$Uri$create$($opt_scheme$$, $opt_userInfo$$, $opt_domain$$, $opt_port$$, $opt_path$$, $opt_query$$, $opt_fragment$$, $opt_ignoreCase$$2_uri$$) {
  $opt_ignoreCase$$2_uri$$ = new goog.Uri(null, $opt_ignoreCase$$2_uri$$);
  $opt_scheme$$ && $opt_ignoreCase$$2_uri$$.setScheme($opt_scheme$$);
  $opt_userInfo$$ && $opt_ignoreCase$$2_uri$$.setUserInfo($opt_userInfo$$);
  $opt_domain$$ && $opt_ignoreCase$$2_uri$$.setDomain($opt_domain$$);
  $opt_port$$ && $opt_ignoreCase$$2_uri$$.setPort($opt_port$$);
  $opt_path$$ && $opt_ignoreCase$$2_uri$$.setPath($opt_path$$);
  $opt_query$$ && $opt_ignoreCase$$2_uri$$.setQueryData($opt_query$$);
  $opt_fragment$$ && $opt_ignoreCase$$2_uri$$.setFragment($opt_fragment$$);
  return $opt_ignoreCase$$2_uri$$
};
goog.Uri.resolve = function $goog$Uri$resolve$($base$$, $rel$$) {
  $base$$ instanceof goog.Uri || ($base$$ = goog.Uri.parse($base$$));
  $rel$$ instanceof goog.Uri || ($rel$$ = goog.Uri.parse($rel$$));
  return $base$$.resolve($rel$$)
};
goog.Uri.removeDotSegments = function $goog$Uri$removeDotSegments$($path$$) {
  if(".." == $path$$ || "." == $path$$) {
    return""
  }
  if(!goog.string.contains($path$$, "./") && !goog.string.contains($path$$, "/.")) {
    return $path$$
  }
  for(var $leadingSlash$$ = goog.string.startsWith($path$$, "/"), $path$$ = $path$$.split("/"), $out$$ = [], $pos$$ = 0;$pos$$ < $path$$.length;) {
    var $segment$$ = $path$$[$pos$$++];
    "." == $segment$$ ? $leadingSlash$$ && $pos$$ == $path$$.length && $out$$.push("") : ".." == $segment$$ ? ((1 < $out$$.length || 1 == $out$$.length && "" != $out$$[0]) && $out$$.pop(), $leadingSlash$$ && $pos$$ == $path$$.length && $out$$.push("")) : ($out$$.push($segment$$), $leadingSlash$$ = !0)
  }
  return $out$$.join("/")
};
goog.Uri.decodeOrEmpty_ = function $goog$Uri$decodeOrEmpty_$($val$$) {
  return $val$$ ? decodeURIComponent($val$$) : ""
};
goog.Uri.encodeSpecialChars_ = function $goog$Uri$encodeSpecialChars_$($unescapedPart$$, $extra$$) {
  return goog.isString($unescapedPart$$) ? encodeURI($unescapedPart$$).replace($extra$$, goog.Uri.encodeChar_) : null
};
goog.Uri.encodeChar_ = function $goog$Uri$encodeChar_$($ch$$10_n$$) {
  $ch$$10_n$$ = $ch$$10_n$$.charCodeAt(0);
  return"%" + ($ch$$10_n$$ >> 4 & 15).toString(16) + ($ch$$10_n$$ & 15).toString(16)
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function $goog$Uri$haveSameDomain$($uri1String$$, $uri2String$$) {
  var $pieces1$$ = goog.uri.utils.split($uri1String$$), $pieces2$$ = goog.uri.utils.split($uri2String$$);
  return $pieces1$$[goog.uri.utils.ComponentIndex.DOMAIN] == $pieces2$$[goog.uri.utils.ComponentIndex.DOMAIN] && $pieces1$$[goog.uri.utils.ComponentIndex.PORT] == $pieces2$$[goog.uri.utils.ComponentIndex.PORT]
};
goog.Uri.QueryData = function $goog$Uri$QueryData$($opt_query$$, $opt_uri$$, $opt_ignoreCase$$) {
  this.encodedQuery_ = $opt_query$$ || null;
  this.ignoreCase_ = !!$opt_ignoreCase$$
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function $goog$Uri$QueryData$$ensureKeyMapInitialized_$() {
  if(!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.count_ = 0, this.encodedQuery_)) {
    for(var $pairs$$ = this.encodedQuery_.split("&"), $i$$ = 0;$i$$ < $pairs$$.length;$i$$++) {
      var $indexOfEquals$$ = $pairs$$[$i$$].indexOf("="), $name$$ = null, $value$$ = null;
      0 <= $indexOfEquals$$ ? ($name$$ = $pairs$$[$i$$].substring(0, $indexOfEquals$$), $value$$ = $pairs$$[$i$$].substring($indexOfEquals$$ + 1)) : $name$$ = $pairs$$[$i$$];
      $name$$ = goog.string.urlDecode($name$$);
      $name$$ = this.getKeyName_($name$$);
      this.add($name$$, $value$$ ? goog.string.urlDecode($value$$) : "")
    }
  }
};
goog.Uri.QueryData.createFromMap = function $goog$Uri$QueryData$createFromMap$($map$$13_values$$, $keys$$10_opt_uri$$, $opt_ignoreCase$$4_queryData$$) {
  $keys$$10_opt_uri$$ = goog.structs.getKeys($map$$13_values$$);
  if("undefined" == typeof $keys$$10_opt_uri$$) {
    throw Error("Keys are undefined");
  }
  for(var $opt_ignoreCase$$4_queryData$$ = new goog.Uri.QueryData(null, null, $opt_ignoreCase$$4_queryData$$), $map$$13_values$$ = goog.structs.getValues($map$$13_values$$), $i$$ = 0;$i$$ < $keys$$10_opt_uri$$.length;$i$$++) {
    var $key$$ = $keys$$10_opt_uri$$[$i$$], $value$$ = $map$$13_values$$[$i$$];
    goog.isArray($value$$) ? $opt_ignoreCase$$4_queryData$$.setValues($key$$, $value$$) : $opt_ignoreCase$$4_queryData$$.add($key$$, $value$$)
  }
  return $opt_ignoreCase$$4_queryData$$
};
goog.Uri.QueryData.createFromKeysValues = function $goog$Uri$QueryData$createFromKeysValues$($keys$$, $values$$, $opt_uri$$3_queryData$$, $i$$176_opt_ignoreCase$$) {
  if($keys$$.length != $values$$.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  $opt_uri$$3_queryData$$ = new goog.Uri.QueryData(null, null, $i$$176_opt_ignoreCase$$);
  for($i$$176_opt_ignoreCase$$ = 0;$i$$176_opt_ignoreCase$$ < $keys$$.length;$i$$176_opt_ignoreCase$$++) {
    $opt_uri$$3_queryData$$.add($keys$$[$i$$176_opt_ignoreCase$$], $values$$[$i$$176_opt_ignoreCase$$])
  }
  return $opt_uri$$3_queryData$$
};
goog.Uri.QueryData.prototype.keyMap_ = null;
goog.Uri.QueryData.prototype.count_ = null;
goog.Uri.QueryData.prototype.getCount = function $goog$Uri$QueryData$$getCount$() {
  this.ensureKeyMapInitialized_();
  return this.count_
};
goog.Uri.QueryData.prototype.add = function $goog$Uri$QueryData$$add$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  var $key$$ = this.getKeyName_($key$$), $values$$ = this.keyMap_.get($key$$);
  $values$$ || this.keyMap_.set($key$$, $values$$ = []);
  $values$$.push($value$$);
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.remove = function $goog$Uri$QueryData$$remove$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$) ? (this.invalidateCache_(), this.count_ -= this.keyMap_.get($key$$).length, this.keyMap_.remove($key$$)) : !1
};
goog.Uri.QueryData.prototype.clear = function $goog$Uri$QueryData$$clear$() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0
};
goog.Uri.QueryData.prototype.isEmpty = function $goog$Uri$QueryData$$isEmpty$() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_
};
goog.Uri.QueryData.prototype.containsKey = function $goog$Uri$QueryData$$containsKey$($key$$) {
  this.ensureKeyMapInitialized_();
  $key$$ = this.getKeyName_($key$$);
  return this.keyMap_.containsKey($key$$)
};
goog.Uri.QueryData.prototype.containsValue = function $goog$Uri$QueryData$$containsValue$($value$$) {
  var $vals$$ = this.getValues();
  return goog.array.contains($vals$$, $value$$)
};
goog.Uri.QueryData.prototype.getKeys = function $goog$Uri$QueryData$$getKeys$() {
  this.ensureKeyMapInitialized_();
  for(var $vals$$ = this.keyMap_.getValues(), $keys$$ = this.keyMap_.getKeys(), $rv$$ = [], $i$$ = 0;$i$$ < $keys$$.length;$i$$++) {
    for(var $val$$ = $vals$$[$i$$], $j$$ = 0;$j$$ < $val$$.length;$j$$++) {
      $rv$$.push($keys$$[$i$$])
    }
  }
  return $rv$$
};
goog.Uri.QueryData.prototype.getValues = function $goog$Uri$QueryData$$getValues$($opt_key$$1_values$$) {
  this.ensureKeyMapInitialized_();
  var $rv$$ = [];
  if($opt_key$$1_values$$) {
    this.containsKey($opt_key$$1_values$$) && ($rv$$ = goog.array.concat($rv$$, this.keyMap_.get(this.getKeyName_($opt_key$$1_values$$))))
  }else {
    for(var $opt_key$$1_values$$ = this.keyMap_.getValues(), $i$$ = 0;$i$$ < $opt_key$$1_values$$.length;$i$$++) {
      $rv$$ = goog.array.concat($rv$$, $opt_key$$1_values$$[$i$$])
    }
  }
  return $rv$$
};
goog.Uri.QueryData.prototype.set = function $goog$Uri$QueryData$$set$($key$$, $value$$) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  $key$$ = this.getKeyName_($key$$);
  this.containsKey($key$$) && (this.count_ -= this.keyMap_.get($key$$).length);
  this.keyMap_.set($key$$, [$value$$]);
  this.count_++;
  return this
};
goog.Uri.QueryData.prototype.get = function $goog$Uri$QueryData$$get$($key$$, $opt_default$$) {
  var $values$$ = $key$$ ? this.getValues($key$$) : [];
  return goog.Uri.preserveParameterTypesCompatibilityFlag ? 0 < $values$$.length ? $values$$[0] : $opt_default$$ : 0 < $values$$.length ? String($values$$[0]) : $opt_default$$
};
goog.Uri.QueryData.prototype.setValues = function $goog$Uri$QueryData$$setValues$($key$$, $values$$) {
  this.remove($key$$);
  0 < $values$$.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_($key$$), goog.array.clone($values$$)), this.count_ += $values$$.length)
};
goog.Uri.QueryData.prototype.toString = function $goog$Uri$QueryData$$toString$() {
  if(this.encodedQuery_) {
    return this.encodedQuery_
  }
  if(!this.keyMap_) {
    return""
  }
  for(var $sb$$ = [], $keys$$ = this.keyMap_.getKeys(), $i$$ = 0;$i$$ < $keys$$.length;$i$$++) {
    for(var $key$$132_val$$ = $keys$$[$i$$], $encodedKey$$ = goog.string.urlEncode($key$$132_val$$), $key$$132_val$$ = this.getValues($key$$132_val$$), $j$$ = 0;$j$$ < $key$$132_val$$.length;$j$$++) {
      var $param$$ = $encodedKey$$;
      "" !== $key$$132_val$$[$j$$] && ($param$$ += "=" + goog.string.urlEncode($key$$132_val$$[$j$$]));
      $sb$$.push($param$$)
    }
  }
  return this.encodedQuery_ = $sb$$.join("&")
};
goog.Uri.QueryData.prototype.toDecodedString = function $goog$Uri$QueryData$$toDecodedString$() {
  return goog.Uri.decodeOrEmpty_(this.toString())
};
goog.Uri.QueryData.prototype.invalidateCache_ = function $goog$Uri$QueryData$$invalidateCache_$() {
  this.encodedQuery_ = null
};
goog.Uri.QueryData.prototype.filterKeys = function $goog$Uri$QueryData$$filterKeys$($keys$$) {
  this.ensureKeyMapInitialized_();
  goog.structs.forEach(this.keyMap_, function($value$$, $key$$) {
    goog.array.contains($keys$$, $key$$) || this.remove($key$$)
  }, this);
  return this
};
goog.Uri.QueryData.prototype.clone = function $goog$Uri$QueryData$$clone$() {
  var $rv$$ = new goog.Uri.QueryData;
  $rv$$.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && ($rv$$.keyMap_ = this.keyMap_.clone());
  return $rv$$
};
goog.Uri.QueryData.prototype.getKeyName_ = function $goog$Uri$QueryData$$getKeyName_$($arg$$) {
  $arg$$ = String($arg$$);
  this.ignoreCase_ && ($arg$$ = $arg$$.toLowerCase());
  return $arg$$
};
goog.Uri.QueryData.prototype.setIgnoreCase = function $goog$Uri$QueryData$$setIgnoreCase$($ignoreCase$$) {
  $ignoreCase$$ && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), goog.structs.forEach(this.keyMap_, function($value$$, $key$$) {
    var $lowerCase$$ = $key$$.toLowerCase();
    $key$$ != $lowerCase$$ && (this.remove($key$$), this.setValues($lowerCase$$, $value$$))
  }, this));
  this.ignoreCase_ = $ignoreCase$$
};
goog.Uri.QueryData.prototype.extend = function $goog$Uri$QueryData$$extend$($var_args$$) {
  for(var $i$$ = 0;$i$$ < arguments.length;$i$$++) {
    goog.structs.forEach(arguments[$i$$], function($value$$, $key$$) {
      this.add($key$$, $value$$)
    }, this)
  }
};
texthelp.webreaderapi.ParserFactory = function $texthelp$webreaderapi$ParserFactory$() {
  try {
    this.parser = null;
    this.parserFound = !0;
    var $parsers$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration().parsers, $parser$$;
    for($parser$$ in $parsers$$) {
      for(var $parserTestClasses$$ = $parsers$$[$parser$$], $i$$ = 0;$i$$ < $parserTestClasses$$.length;$i$$++) {
        goog.dom.getElementByClass($parserTestClasses$$[$i$$]) || (this.parserFound = !1, $i$$ = $parserTestClasses$$.length)
      }
      if(this.parserFound) {
        goog.module.ModuleManager.getInstance().execOnLoad($parser$$, this.onParserModuleLoaded, this);
        break
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.ParserFactory.prototype.getParser = function $texthelp$webreaderapi$ParserFactory$$getParser$() {
  try {
    return this.parser
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.ParserFactory.prototype.hasParser = function $texthelp$webreaderapi$ParserFactory$$hasParser$() {
  try {
    return this.parserFound
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.ParserFactory.prototype.onParserModuleLoaded = function $texthelp$webreaderapi$ParserFactory$$onParserModuleLoaded$() {
  try {
    this.parserFound = !0, this.parser = new th.parsers.Parser
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SettingsSingleton = function $texthelp$webreaderapi$SettingsSingleton$() {
  this.m_currentVoice = "ScanSoft Emily_Full_22kHz"
};
goog.addSingletonGetter(texthelp.webreaderapi.SettingsSingleton);
texthelp.webreaderapi.SettingsSingleton.prototype.get_Voice = function $texthelp$webreaderapi$SettingsSingleton$$get_Voice$() {
  try {
    return this.m_currentVoice
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SettingsSingleton.prototype.set_Voice = function $texthelp$webreaderapi$SettingsSingleton$$set_Voice$($voice$$) {
  try {
    this.m_currentVoice = $voice$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.exportSymbol("texthelp.webreaderapi.SettingsSingleton", texthelp.webreaderapi.SettingsSingleton);
goog.exportProperty(texthelp.webreaderapi.SettingsSingleton.prototype, "get_Voice", texthelp.webreaderapi.SettingsSingleton.prototype.get_Voice);
goog.exportProperty(texthelp.webreaderapi.SettingsSingleton.prototype, "set_Voice", texthelp.webreaderapi.SettingsSingleton.prototype.set_Voice);
texthelp.webreaderapi.SpeechEngine = function $texthelp$webreaderapi$SpeechEngine$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.initialise = function $texthelp$webreaderapi$SpeechEngine$$initialise$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.getVoices = function $texthelp$webreaderapi$SpeechEngine$$getVoices$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.speakSelection = function $texthelp$webreaderapi$SpeechEngine$$speakSelection$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.stop = function $texthelp$webreaderapi$SpeechEngine$$stop$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.pause = function $texthelp$webreaderapi$SpeechEngine$$pause$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechEngine.prototype.xmlEncode = function $texthelp$webreaderapi$SpeechEngine$$xmlEncode$($string$$) {
  return $string$$.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace("\ufffd", "'").replace(/\"/g, "&quot;")
};
texthelp.webreaderapi.SpeechManager = function $texthelp$webreaderapi$SpeechManager$() {
  try {
    this.m_speechEngines = [], this.m_initialised = !1, this.m_voiceToEngineMap = this.m_controller = this.m_voices = null
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechManager.prototype.initialise = function $texthelp$webreaderapi$SpeechManager$$initialise$() {
  try {
    this.m_initialised || (this.m_speechEngines.speechserver = new texthelp.webreaderapi.SpeechServer, this.m_speechEngines.speechserver.initialise(), this.m_initialised = !0)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechManager.prototype.getVoices = function $texthelp$webreaderapi$SpeechManager$$getVoices$() {
  try {
    if(!this.m_initialised) {
      return null
    }
    if(null !== this.m_voices) {
      return this.m_voices
    }
    this.m_voices = {};
    this.m_voiceToEngineMap = {};
    for(var $engine$$ in this.m_speechEngines) {
      var $currentEngineVoices$$ = this.m_speechEngines[$engine$$].getVoices(), $voice$$;
      for($voice$$ in $currentEngineVoices$$) {
        this.m_voices[$voice$$] = $currentEngineVoices$$[$voice$$], this.m_voiceToEngineMap[$voice$$] = this.m_speechEngines[$engine$$]
      }
    }
    return this.m_voices
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechManager.prototype.speakSelection = function $texthelp$webreaderapi$SpeechManager$$speakSelection$($words$$, $session$$) {
  try {
    null === this.m_voices && this.getVoices(), this.m_voiceToEngineMap[texthelp.webreaderapi.SettingsSingleton.getInstance().get_Voice()].speakSelection($words$$, $session$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechManager.prototype.stop = function $texthelp$webreaderapi$SpeechManager$$stop$() {
  try {
    null !== this.m_voices && this.m_voiceToEngineMap[texthelp.webreaderapi.SettingsSingleton.getInstance().get_Voice()].stop()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechManager.prototype.pause = function $texthelp$webreaderapi$SpeechManager$$pause$() {
  try {
    null !== this.m_voices && this.m_voiceToEngineMap[texthelp.webreaderapi.SettingsSingleton.getInstance().get_Voice()].pause()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer = function $texthelp$webreaderapi$SpeechServer$() {
  try {
    this.currentVoices = {}, this.m_audioPlaybackTimerID = this.m_audioElem = this.m_rootLocation = this.m_speechServerUser = this.m_speechServer = null, this.m_currentHighlightWord = -1, this.m_playbackTimeArray = null, this.m_session = 0, this.m_boundAudioPlayBackTimer = null, this.m_paused = this.m_stop = !1, this.m_charMap = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration().charMap
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.inherits(texthelp.webreaderapi.SpeechServer, texthelp.webreaderapi.SpeechEngine);
texthelp.webreaderapi.SpeechServer.prototype.initialise = function $texthelp$webreaderapi$SpeechServer$$initialise$() {
  try {
    this.m_rootLocation = texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation();
    goog.dom.getElement(texthelp.webreaderapi.HelpersSingleton.getInstance().getPlaceHolder());
    var $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration();
    this.m_speechServer = $config$$.serversettings.speechserver;
    this.m_speechServerUser = $config$$.serversettings.user;
    var $requestURI$$ = this.m_speechServer + "user.html?query=getVoices&userName=" + this.m_speechServerUser, $request$$ = new goog.net.XhrIo;
    goog.events.listen($request$$, "complete", this.onVoicesResponse, !1, this);
    $request$$.send($requestURI$$, "GET");
    this.m_boundAudioPlayBackTimer = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.audioPlaybackTimer)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.getVoices = function $texthelp$webreaderapi$SpeechServer$$getVoices$() {
  try {
    return this.currentVoices
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.speakSelection = function $texthelp$webreaderapi$SpeechServer$$speakSelection$($words$$, $session$$) {
  try {
    this.m_paused = this.m_stop = !1;
    null === this.m_audioElem && (this.m_audioElem = goog.dom.getElement("thWebAudio"));
    this.m_session = $session$$;
    this.m_currentHighlightWord = 0;
    for(var $speechRequestURI$$ = this.m_speechServer + "index.html", $processedText$$ = "", $i$$ = 0;$i$$ < $words$$.length;$i$$++) {
      var $word$$ = $words$$[$i$$], $processedText$$ = " " === $word$$ || "" === $word$$ ? $processedText$$ + " " : $processedText$$ + ("<bookmark mark='" + $i$$ + "'/>" + this.encodeChars($words$$[$i$$]) + " ")
    }
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onthAPIWord", ["start"]);
    var $data$$ = "text=" + encodeURIComponent($processedText$$) + "&userName=" + encodeURIComponent(this.m_speechServerUser) + "&voiceName=" + encodeURIComponent(texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.voice) + "&speedValue=" + encodeURIComponent(texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.speed) + "&usePron=Y", $request$$ = new goog.net.XhrIo;
    goog.events.listen($request$$, "complete", this.onSpeechRequestResponse, !1, this);
    $request$$.send($speechRequestURI$$, "POST", $data$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.stop = function $texthelp$webreaderapi$SpeechServer$$stop$() {
  try {
    null === this.m_audioElem || null === this.m_playbackTimeArray || (this.m_stop = !0, this.m_paused = !1, this.m_playbackTimeArray.length = 0, this.m_audioElem.pause(), this.m_audioElem.currentTime = 0)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.pause = function $texthelp$webreaderapi$SpeechServer$$pause$() {
  try {
    null !== this.m_audioElem && 0 !== this.m_audioElem.currentTime && (this.m_paused ? (this.m_audioElem.play(), this.m_paused = !1) : (this.m_audioElem.pause(), this.m_paused = !0))
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.loadFiles = function $texthelp$webreaderapi$SpeechServer$$loadFiles$($xmlUrl$$, $mp3Url$$) {
  try {
    this.m_audioElem.src = $mp3Url$$;
    var $request$$ = new goog.net.XhrIo;
    goog.events.listen($request$$, "complete", this.onxmlFileResponse, !1, this);
    $request$$.send($xmlUrl$$, "POST")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.audioPlaybackTimer = function $texthelp$webreaderapi$SpeechServer$$audioPlaybackTimer$() {
  try {
    if(null !== this.m_playbackTimeArray) {
      if(this.m_audioElem.ended) {
        this.m_audioElem.pause(), this.m_audioElem.currentTime = 0, this.m_audioElem.src = "", this.m_boundAudioPlayBackTimer.length = 0, texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onthAPIStop", [])
      }else {
        if(0 < this.m_playbackTimeArray.length && this.m_playbackTimeArray[this.m_currentHighlightWord] < this.m_audioElem.currentTime) {
          var $params$$ = [];
          $params$$.push(this.m_currentHighlightWord);
          texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onthAPIWord", $params$$);
          this.m_currentHighlightWord++
        }
        setTimeout(this.m_boundAudioPlayBackTimer, 50)
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.onVoicesResponse = function $texthelp$webreaderapi$SpeechServer$$onVoicesResponse$($response$$) {
  try {
    var $voices$$ = $response$$.currentTarget.getResponseText().split("&voiceName"), $voiceDetails$$, $voice$$;
    for($voice$$ in $voices$$) {
      $voiceDetails$$ = $voices$$[$voice$$].split("="), this.currentVoices[decodeURIComponent($voiceDetails$$[1].substring(0, $voiceDetails$$[1].length - 11)).replace(/\+/gi, " ")] = decodeURIComponent($voiceDetails$$[2]).replace(/\+/gi, " ")
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.onSpeechRequestResponse = function $texthelp$webreaderapi$SpeechServer$$onSpeechRequestResponse$($response$$) {
  try {
    var $speechResponse$$ = $response$$.currentTarget.getResponseText(), $startXMLPos$$ = $speechResponse$$.indexOf("xml="), $endXMLPos$$ = $speechResponse$$.indexOf("&mp3"), $strXmlUrl$$ = $speechResponse$$.substring($startXMLPos$$ + 4, $endXMLPos$$), $strMp3Url$$ = $speechResponse$$.substring($endXMLPos$$ + 5, $speechResponse$$.length);
    if("error" == $strXmlUrl$$ || "error" == $strMp3Url$$) {
      throw this.stop(), Error("Speech request error. Error response from the server.");
    }
    if("busy" == $strXmlUrl$$ || "busy" == $strMp3Url$$) {
      throw this.stop(), Error("Speech request error. Speech server busy.");
    }
    this.loadFiles($strXmlUrl$$, $strMp3Url$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.onxmlFileResponse = function $texthelp$webreaderapi$SpeechServer$$onxmlFileResponse$($nCounter_response$$) {
  try {
    var $i$$ = $nCounter_response$$.target.getResponseXml();
    this.m_playbackTimeArray = [];
    if($i$$ && $i$$.documentElement && $i$$.documentElement.childNodes) {
      for(var $xmlTimings$$ = $i$$.documentElement.childNodes, $i$$ = $nCounter_response$$ = 0;$i$$ < $xmlTimings$$.length;$i$$++) {
        1 == $xmlTimings$$[$i$$].nodeType && (this.m_playbackTimeArray[$nCounter_response$$] = parseFloat($xmlTimings$$[$i$$].getAttribute("time") / 1E3), 0 < $nCounter_response$$ && this.m_playbackTimeArray[$nCounter_response$$] <= this.m_playbackTimeArray[$nCounter_response$$ - 1] && (this.m_playbackTimeArray[$nCounter_response$$] = this.m_playbackTimeArray[$nCounter_response$$ - 1] + 0.01), $nCounter_response$$ += 1)
      }
      0.1 > this.m_playbackTimeArray[this.m_playbackTimeArray.length - 1] && (this.m_playbackTimeArray.length = 0)
    }
    this.m_stop || (window.setTimeout(this.m_boundAudioPlayBackTimer, 50), this.m_audioElem.play())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.SpeechServer.prototype.encodeChars = function $texthelp$webreaderapi$SpeechServer$$encodeChars$($word$$) {
  try {
    for(var $newWord$$ = "", $charCode$$ = "", $index$$ = 0;$index$$ < $word$$.length;$index$$++) {
      $charCode$$ = $word$$.charCodeAt($index$$).toString(), $newWord$$ = void 0 === this.m_charMap[$charCode$$] ? $newWord$$ + $word$$.charAt($index$$) : $newWord$$ + this.m_charMap[$charCode$$]
    }
    return $newWord$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.contracts = {};
texthelp.webreaderapi.contracts.IParser = function $texthelp$webreaderapi$contracts$IParser$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.hiliteSelection = function $texthelp$webreaderapi$contracts$IParser$$hiliteSelection$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.getHighlightPosition = function $texthelp$webreaderapi$contracts$IParser$$getHighlightPosition$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.hasSelection = function $texthelp$webreaderapi$contracts$IParser$$hasSelection$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.getWord = function $texthelp$webreaderapi$contracts$IParser$$getWord$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.getSelection = function $texthelp$webreaderapi$contracts$IParser$$getSelection$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.hiliteWord = function $texthelp$webreaderapi$contracts$IParser$$hiliteWord$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.clearBrowserSelection = function $texthelp$webreaderapi$contracts$IParser$$clearBrowserSelection$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.collectHighlights = function $texthelp$webreaderapi$contracts$IParser$$collectHighlights$() {
};
texthelp.webreaderapi.contracts.IParser.prototype.collectVocabWords = function $texthelp$webreaderapi$contracts$IParser$$collectVocabWords$() {
};
texthelp.webreaderapi.contracts.ISpeechApi = function $texthelp$webreaderapi$contracts$ISpeechApi$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.speakSelection = function $texthelp$webreaderapi$contracts$ISpeechApi$$speakSelection$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.stop = function $texthelp$webreaderapi$contracts$ISpeechApi$$stop$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.forward = function $texthelp$webreaderapi$contracts$ISpeechApi$$forward$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.rewind = function $texthelp$webreaderapi$contracts$ISpeechApi$$rewind$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.pause = function $texthelp$webreaderapi$contracts$ISpeechApi$$pause$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.pictureDictionaryCurrentWord = function $texthelp$webreaderapi$contracts$ISpeechApi$$pictureDictionaryCurrentWord$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.dictionaryCurrentWord = function $texthelp$webreaderapi$contracts$ISpeechApi$$dictionaryCurrentWord$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.translateCurrentWord = function $texthelp$webreaderapi$contracts$ISpeechApi$$translateCurrentWord$() {
};
texthelp.webreaderapi.contracts.ISpeechApi.prototype.collectHighlights = function $texthelp$webreaderapi$contracts$ISpeechApi$$collectHighlights$() {
};
texthelp.webreaderapi.contracts.ISpeechEngine = function $texthelp$webreaderapi$contracts$ISpeechEngine$() {
};
texthelp.webreaderapi.contracts.ISpeechEngine.prototype.getVoices = function $texthelp$webreaderapi$contracts$ISpeechEngine$$getVoices$() {
};
texthelp.webreaderapi.contracts.ISpeechEngine.prototype.speakSelection = function $texthelp$webreaderapi$contracts$ISpeechEngine$$speakSelection$() {
};
texthelp.webreaderapi.contracts.ISpeechEngine.prototype.stop = function $texthelp$webreaderapi$contracts$ISpeechEngine$$stop$() {
};
texthelp.webreaderapi.contracts.ISpeechEngine.prototype.pause = function $texthelp$webreaderapi$contracts$ISpeechEngine$$pause$() {
};
texthelp.webreaderapi.lookups = {};
texthelp.webreaderapi.lookups.LookupBase = function $texthelp$webreaderapi$lookups$LookupBase$() {
  this.m_lastContent = this.m_lastLookup = ""
};
texthelp.webreaderapi.lookups.DictionaryLookup = function $texthelp$webreaderapi$lookups$DictionaryLookup$() {
  texthelp.webreaderapi.lookups.LookupBase.call(this);
  this.m_lastResponse = this.m_lastLookup = this.m_callback = null
};
goog.inherits(texthelp.webreaderapi.lookups.DictionaryLookup, texthelp.webreaderapi.lookups.LookupBase);
texthelp.webreaderapi.lookups.DictionaryLookup.prototype.lookup = function $texthelp$webreaderapi$lookups$DictionaryLookup$$lookup$($wordToLookup$$, $callback$$) {
  try {
    $wordToLookup$$ = $wordToLookup$$.replace(/\W$/, "").replace(/^\W/, "");
    if(this.m_lastLookup !== $wordToLookup$$) {
      this.m_callback = $callback$$;
      this.m_currentWord = this.m_lastLookup = $wordToLookup$$;
      var $request$$ = new goog.net.XhrIo;
      goog.events.listen($request$$, "complete", this.onDictionaryResponse, !1, this);
      var $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration();
      $request$$.send($config$$.serversettings.dictionaryserver + "?query=dictionaryHtml&text=" + $wordToLookup$$ + "&locale=US&userName=" + $config$$.serversettings.user + "&swf=160", "GET")
    }else {
      return!1
    }
    return!0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.DictionaryLookup.prototype.onDictionaryResponse = function $texthelp$webreaderapi$lookups$DictionaryLookup$$onDictionaryResponse$($response$$) {
  try {
    var $responseText$$ = $response$$.currentTarget.getResponseText().substr(7);
    this.m_lastResponse = $responseText$$ = $responseText$$.replace("No results found", "<b>No match was found for this word</b>");
    this.m_callback($responseText$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.PictureDictionaryLookup = function $texthelp$webreaderapi$lookups$PictureDictionaryLookup$() {
  texthelp.webreaderapi.lookups.LookupBase.call(this);
  this.m_currentWord = this.m_headers = this.m_url = this.m_lastResponse = this.m_lastLookup = this.m_callback = null
};
goog.inherits(texthelp.webreaderapi.lookups.PictureDictionaryLookup, texthelp.webreaderapi.lookups.LookupBase);
texthelp.webreaderapi.lookups.PictureDictionaryLookup.prototype.lookup = function $texthelp$webreaderapi$lookups$PictureDictionaryLookup$$lookup$($wordToLookup$$, $callback$$) {
  try {
    $wordToLookup$$ = $wordToLookup$$.replace(/\W$/, "").replace(/^\W/, "");
    if(this.m_lastLookup !== $wordToLookup$$) {
      this.m_callback = $callback$$;
      this.m_lastLookup = this.m_currentWord = $wordToLookup$$;
      var $request$$ = new goog.net.XhrIo;
      goog.events.listen($request$$, "complete", this.onPictureDictionaryFilterResponse, !1, this);
      var $wordToCheckJSON$$ = "['" + this.m_currentWord + "']", $md5$$ = new goog.crypt.Md5;
      $md5$$.update($wordToCheckJSON$$);
      var $hash$$ = goog.crypt.byteArrayToHex($md5$$.digest()), $headers$$ = new goog.structs.Map;
      $headers$$.set("tocheck", $wordToCheckJSON$$);
      $headers$$.set("hash", $hash$$);
      goog.events.listen($request$$, "complete", this.onPictureDictionaryFilterResponse, !1, this);
      this.m_url = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration().serversettings.picturedictionaryservices + "filter";
      this.m_headers = $headers$$;
      $request$$.send(this.m_url, "POST", null, this.m_headers)
    }else {
      return!1
    }
    return!0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.PictureDictionaryLookup.prototype.onPictureDictionaryFilterResponse = function $texthelp$webreaderapi$lookups$PictureDictionaryLookup$$onPictureDictionaryFilterResponse$($response$$) {
  try {
    var $filteredWords$$ = $response$$.currentTarget.getResponseJson();
    if(1 > $filteredWords$$) {
      this.m_callback("<p class='point_cmap'>" + this.m_currentWord + "<br><b>No match was found for this word.</b></p>")
    }else {
      var $request$$ = new goog.net.XhrIo;
      goog.events.listen($request$$, "complete", this.onPictureDictionaryResponse, !1, this);
      var $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration();
      $request$$.send($config$$.serversettings.picturedictionaryserver + "imagedict.html?word=" + $filteredWords$$[0] + "&userName=" + $config$$.serversettings.user + "&swf=160")
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.PictureDictionaryLookup.prototype.onPictureDictionaryResponse = function $texthelp$webreaderapi$lookups$PictureDictionaryLookup$$onPictureDictionaryResponse$($imageElementEndPosition_response$$) {
  try {
    var $responseText$$ = $imageElementEndPosition_response$$.currentTarget.getResponseText(), $modifiedResponse$$ = "<p class='point_cmap'>" + this.m_currentWord, $imageElementStartPosition$$ = $responseText$$.search(/<img class=/i), $imageElementEndPosition_response$$ = -1, $imageElement$$ = "", $server$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration().serversettings.picturedictionaryserver;
    -1 === $imageElementStartPosition$$ && ($modifiedResponse$$ += "<br><b>No match was found for this word.</b>");
    for(var $imageElementSplit$$ = null;-1 < $imageElementStartPosition$$;) {
      $responseText$$ = $responseText$$.slice($imageElementStartPosition$$), $imageElementEndPosition_response$$ = $responseText$$.search(/>/i) + 1, $imageElement$$ = $responseText$$.substr(0, $imageElementEndPosition_response$$), $imageElementSplit$$ = $imageElement$$.split("http"), $imageElement$$ = "</br></br>" + $imageElementSplit$$[0] + $server$$ + "image.html?imageurl=http" + $imageElementSplit$$[1], $modifiedResponse$$ += $imageElement$$, $responseText$$ = $responseText$$.substr($imageElementEndPosition_response$$), 
      $imageElementStartPosition$$ = $responseText$$.search(/<img class=/i)
    }
    this.m_lastResponse = $modifiedResponse$$ += "</p>";
    this.m_callback($modifiedResponse$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.TranslatorLookup = function $texthelp$webreaderapi$lookups$TranslatorLookup$() {
  texthelp.webreaderapi.lookups.LookupBase.call(this);
  this.m_lastResponse = this.m_lastLookup = this.m_callback = null;
  this.m_hexcase = 0;
  this.m_b64pad = "";
  this.m_chrsz = 8
};
goog.inherits(texthelp.webreaderapi.lookups.TranslatorLookup, texthelp.webreaderapi.lookups.LookupBase);
texthelp.webreaderapi.lookups.TranslatorLookup.prototype.lookup = function $texthelp$webreaderapi$lookups$TranslatorLookup$$lookup$($wordToLookup$$, $callback$$) {
  try {
    $wordToLookup$$ = $wordToLookup$$.replace(/\W$/, "").replace(/^\W/, "");
    if(this.m_lastLookup !== $wordToLookup$$) {
      this.m_callback = $callback$$;
      this.m_lastLookup = this.m_currentWord = $wordToLookup$$;
      var $request$$ = new goog.net.XhrIo;
      goog.events.listen($request$$, "complete", this.onTranslatorResponse, !1, this);
      var $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration(), $server$$ = $config$$.serversettings.translatorserver, $user$$ = $config$$.serversettings.user, $md5$$ = new goog.crypt.Md5;
      $md5$$.update($wordToLookup$$ + $user$$);
      var $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings(), $defaultTransLang$$ = $userSettings$$.translator.translang, $defaultTransSource$$ = $userSettings$$.translator.transsource, $uri$$ = $server$$ + "onlinetranslator?type=ultrahtml5&mode=content&value=" + encodeURIComponent($wordToLookup$$) + "&value2=" + encodeURIComponent($wordToLookup$$) + "&caller=" + document.location.protocol + "//" + document.location.host + document.location.pathname + "&key=" + 
      goog.crypt.byteArrayToHex($md5$$.digest()) + "&username=" + $user$$ + "&source=" + $defaultTransSource$$ + "&dest=" + $defaultTransLang$$;
      $request$$.send($uri$$, "GET")
    }else {
      return!1
    }
    return!0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreaderapi.lookups.TranslatorLookup.prototype.onTranslatorResponse = function $texthelp$webreaderapi$lookups$TranslatorLookup$$onTranslatorResponse$($modifiedResponse$$2_response$$) {
  try {
    var $responseText$$ = $modifiedResponse$$2_response$$.currentTarget.getResponseText(), $pos$$ = $responseText$$.search('lang="en-US"'), $modifiedResponse$$2_response$$ = $responseText$$;
    -1 < $pos$$ && ($modifiedResponse$$2_response$$ = $responseText$$.substr(0, $pos$$), $modifiedResponse$$2_response$$ += $responseText$$.substr($pos$$ + 12));
    this.m_lastResponse = $modifiedResponse$$2_response$$;
    this.m_callback($modifiedResponse$$2_response$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.module.ModuleManager.getInstance().setLoaded("WebReaderAPI");
}})(__textHelp__);
//@ sourceURL=chrome-extension://chfpnoffckhdeckmacafcjanjcbfghpa/src/textHelp_WebReaderAPI.js