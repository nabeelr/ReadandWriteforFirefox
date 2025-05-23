(function(a){with(a){
goog.ui.Component.prototype.makeId = JSCompiler_unstubMethod(15, function($idFragment$$) {
  return this.getId() + "." + $idFragment$$
});
goog.ui.Menu.prototype.setAllowHighlightDisabled = JSCompiler_unstubMethod(6, function($allow$$) {
  this.allowHighlightDisabled_ = $allow$$
});
texthelp.webreader.ConfigurationSingleton = function $texthelp$webreader$ConfigurationSingleton$() {
};
goog.addSingletonGetter(texthelp.webreader.ConfigurationSingleton);
texthelp.webreader.ConfigurationSingleton.prototype.getConfiguration = function $texthelp$webreader$ConfigurationSingleton$$getConfiguration$() {
  return{locale:"en-US", highlighterSiteMap:{"https://docs.google.com/document/":"GDocsParser"}, parsers:{GDocsParser:["kix-appview-editor"]}, serversettings:{user:"1873dgdrw", speechserver:"http://rsccontrol05.speechstream.net/SpeechServices/", dictionaryserver:"http://webappspeech.texthelp.com/rwserver/", translatorserver:"http://webappspeech.texthelp.com/rwtranslateserver/", picturedictionaryserver:"http://webappspeech.texthelp.com/ImageServices/", picturedictionaryservices:"http://webappspeech.texthelp.com/pictureDictionaryServices-0.0.1.0/"}, 
  "en-AU":{voice:"ScanSoft Karen_Full_22kHz", transLang:"FRENCH", transsource:"ENGLISH_UK"}, "en-GB":{voice:"ScanSoft Emily_Full_22kHz", transLang:"FRENCH", transsource:"ENGLISH_UK"}, "en-US":{voice:"ScanSoft Samantha_Full_22kHz", transLang:"SPANISH", transsource:"ENGLISH_US"}, fr:{voice:"ScanSoft Julie_Full_22kHz", transLang:"FRENCH", transsource:"ENGLISH_US"}, "fr-CA":{voice:"ScanSoft Julie_Full_22kHz", transLang:"FRENCH", transsource:"ENGLISH_US"}, charMap:{8217:"'", 96:"'", 8482:" ", 8212:" "}, 
  sentences:{wordEnds:["[.?!]$"], sentenceEndExclusions:"Dr. Mr. Mrs. i.e. e.g. St. N.B. NB. Ltd. plc. U.S. a.m. p.m. ext. vs. Jan. Feb. Mar. Apr. Jun. Jul. Aug. Sep. Oct. Nov. Dec. N.E. S.E. S.W. N.W.".split(" ")}}
};
goog.exportSymbol("texthelp.webreader.ConfigurationSingleton", texthelp.webreader.ConfigurationSingleton);
goog.exportProperty(texthelp.webreader.ConfigurationSingleton.prototype, "getConfiguration", texthelp.webreader.ConfigurationSingleton.prototype.getConfiguration);
goog.crypt.stringToByteArray = function $goog$crypt$stringToByteArray$($str$$) {
  for(var $output$$ = [], $p$$ = 0, $i$$ = 0;$i$$ < $str$$.length;$i$$++) {
    for(var $c$$ = $str$$.charCodeAt($i$$);255 < $c$$;) {
      $output$$[$p$$++] = $c$$ & 255, $c$$ >>= 8
    }
    $output$$[$p$$++] = $c$$
  }
  return $output$$
};
goog.crypt.byteArrayToString = function $goog$crypt$byteArrayToString$($array$$) {
  return String.fromCharCode.apply(null, $array$$)
};
goog.crypt.byteArrayToHex = function $goog$crypt$byteArrayToHex$($array$$) {
  return goog.array.map($array$$, function($hexByte_numByte$$) {
    $hexByte_numByte$$ = $hexByte_numByte$$.toString(16);
    return 1 < $hexByte_numByte$$.length ? $hexByte_numByte$$ : "0" + $hexByte_numByte$$
  }).join("")
};
goog.crypt.stringToUtf8ByteArray = function $goog$crypt$stringToUtf8ByteArray$($str$$) {
  for(var $str$$ = $str$$.replace(/\r\n/g, "\n"), $out$$ = [], $p$$ = 0, $i$$ = 0;$i$$ < $str$$.length;$i$$++) {
    var $c$$ = $str$$.charCodeAt($i$$);
    128 > $c$$ ? $out$$[$p$$++] = $c$$ : (2048 > $c$$ ? $out$$[$p$$++] = $c$$ >> 6 | 192 : ($out$$[$p$$++] = $c$$ >> 12 | 224, $out$$[$p$$++] = $c$$ >> 6 & 63 | 128), $out$$[$p$$++] = $c$$ & 63 | 128)
  }
  return $out$$
};
goog.crypt.utf8ByteArrayToString = function $goog$crypt$utf8ByteArrayToString$($bytes$$) {
  for(var $out$$ = [], $pos$$ = 0, $c$$ = 0;$pos$$ < $bytes$$.length;) {
    var $c1$$ = $bytes$$[$pos$$++];
    if(128 > $c1$$) {
      $out$$[$c$$++] = String.fromCharCode($c1$$)
    }else {
      if(191 < $c1$$ && 224 > $c1$$) {
        var $c2$$ = $bytes$$[$pos$$++];
        $out$$[$c$$++] = String.fromCharCode(($c1$$ & 31) << 6 | $c2$$ & 63)
      }else {
        var $c2$$ = $bytes$$[$pos$$++], $c3$$ = $bytes$$[$pos$$++];
        $out$$[$c$$++] = String.fromCharCode(($c1$$ & 15) << 12 | ($c2$$ & 63) << 6 | $c3$$ & 63)
      }
    }
  }
  return $out$$.join("")
};
texthelp.webreader.UserSettings = function $texthelp$webreader$UserSettings$() {
  try {
    this.m_Key = "readwriteforgdocs";
    var $md5$$ = new goog.crypt.Md5;
    $md5$$.update(this.m_Key);
    this.m_encryptedKey = goog.crypt.byteArrayToHex($md5$$.digest())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.UserSettings.prototype.getKey = function $texthelp$webreader$UserSettings$$getKey$() {
  try {
    return this.m_Key
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.UserSettings.prototype.getUserSettings = function $texthelp$webreader$UserSettings$$getUserSettings$() {
  return{speechoptions:{voice:"ScanSoft Samantha_Full_22kHz", continousreading:!0, speed:50}, dictionary:{position:"10px,150px"}, translator:{position:"10px,400px", translang:"SPANISH", transsource:"LOCALE_US"}, picturedictionary:{position:"550px,150px"}, collecthighlights:{position:"160px,130px", sortAlgorithm:0}}
};
texthelp.webreader.GDocsUserSettings = function $texthelp$webreader$GDocsUserSettings$() {
  try {
    this.m_Key = "readwriteforgdocs";
    var $user$$ = goog.dom.getElementByClass("docs-offline-bar-email");
    null === $user$$ && ($user$$ = goog.dom.getElementByClass("gbps2"));
    null !== $user$$ && (this.m_Key = goog.dom.getTextContent($user$$));
    var $md5$$ = new goog.crypt.Md5;
    $md5$$.update(this.m_Key);
    this.m_encryptedKey = goog.crypt.byteArrayToHex($md5$$.digest())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.inherits(texthelp.webreader.GDocsUserSettings, texthelp.webreader.UserSettings);
goog.ui.CheckboxRenderer = function $goog$ui$CheckboxRenderer$() {
  goog.ui.ControlRenderer.call(this)
};
goog.inherits(goog.ui.CheckboxRenderer, goog.ui.ControlRenderer);
goog.addSingletonGetter(goog.ui.CheckboxRenderer);
goog.ui.CheckboxRenderer.CSS_CLASS = "goog-checkbox";
goog.ui.CheckboxRenderer.prototype.createDom = function $goog$ui$CheckboxRenderer$$createDom$($checkbox_state$$) {
  var $element$$ = $checkbox_state$$.getDomHelper().createDom("span", this.getClassNames($checkbox_state$$).join(" ")), $checkbox_state$$ = $checkbox_state$$.getChecked();
  this.setCheckboxState($element$$, $checkbox_state$$);
  return $element$$
};
goog.ui.CheckboxRenderer.prototype.decorate = function $goog$ui$CheckboxRenderer$$decorate$($checkbox$$, $element$$) {
  var $element$$ = goog.ui.CheckboxRenderer.superClass_.decorate.call(this, $checkbox$$, $element$$), $classes$$ = goog.dom.classes.get($element$$), $checked$$ = goog.ui.Checkbox.State.UNCHECKED;
  goog.array.contains($classes$$, this.getClassForCheckboxState(goog.ui.Checkbox.State.UNDETERMINED)) ? $checked$$ = goog.ui.Checkbox.State.UNDETERMINED : goog.array.contains($classes$$, this.getClassForCheckboxState(goog.ui.Checkbox.State.CHECKED)) ? $checked$$ = goog.ui.Checkbox.State.CHECKED : goog.array.contains($classes$$, this.getClassForCheckboxState(goog.ui.Checkbox.State.UNCHECKED)) && ($checked$$ = goog.ui.Checkbox.State.UNCHECKED);
  $checkbox$$.setCheckedInternal($checked$$);
  goog.dom.a11y.setState($element$$, goog.dom.a11y.State.CHECKED, this.ariaStateFromCheckState_($checked$$));
  return $element$$
};
goog.ui.CheckboxRenderer.prototype.getAriaRole = function $goog$ui$CheckboxRenderer$$getAriaRole$() {
  return goog.dom.a11y.Role.CHECKBOX
};
goog.ui.CheckboxRenderer.prototype.setCheckboxState = function $goog$ui$CheckboxRenderer$$setCheckboxState$($element$$, $state$$) {
  if($element$$) {
    var $classToAdd$$ = this.getClassForCheckboxState($state$$);
    goog.asserts.assert($classToAdd$$);
    goog.dom.classes.has($element$$, $classToAdd$$) || (goog.object.forEach(goog.ui.Checkbox.State, function($className$$29_state$$) {
      $className$$29_state$$ = this.getClassForCheckboxState($className$$29_state$$);
      goog.dom.classes.enable($element$$, $className$$29_state$$, $className$$29_state$$ == $classToAdd$$)
    }, this), goog.dom.a11y.setState($element$$, goog.dom.a11y.State.CHECKED, this.ariaStateFromCheckState_($state$$)))
  }
};
goog.ui.CheckboxRenderer.prototype.ariaStateFromCheckState_ = function $goog$ui$CheckboxRenderer$$ariaStateFromCheckState_$($state$$) {
  return $state$$ == goog.ui.Checkbox.State.UNDETERMINED ? "mixed" : $state$$ == goog.ui.Checkbox.State.CHECKED ? "true" : "false"
};
goog.ui.CheckboxRenderer.prototype.getCssClass = function $goog$ui$CheckboxRenderer$$getCssClass$() {
  return goog.ui.CheckboxRenderer.CSS_CLASS
};
goog.ui.CheckboxRenderer.prototype.getClassForCheckboxState = function $goog$ui$CheckboxRenderer$$getClassForCheckboxState$($state$$) {
  var $baseClass$$ = this.getStructuralCssClass();
  if($state$$ == goog.ui.Checkbox.State.CHECKED) {
    return $baseClass$$ + "-checked"
  }
  if($state$$ == goog.ui.Checkbox.State.UNCHECKED) {
    return $baseClass$$ + "-unchecked"
  }
  if($state$$ == goog.ui.Checkbox.State.UNDETERMINED) {
    return $baseClass$$ + "-undetermined"
  }
  throw Error("Invalid checkbox state: " + $state$$);
};
goog.ui.Checkbox = function $goog$ui$Checkbox$($opt_checked$$, $opt_domHelper$$, $opt_renderer$$9_renderer$$) {
  $opt_renderer$$9_renderer$$ = $opt_renderer$$9_renderer$$ || goog.ui.CheckboxRenderer.getInstance();
  goog.ui.Control.call(this, null, $opt_renderer$$9_renderer$$, $opt_domHelper$$);
  this.checked_ = goog.isDef($opt_checked$$) ? $opt_checked$$ : goog.ui.Checkbox.State.UNCHECKED
};
goog.inherits(goog.ui.Checkbox, goog.ui.Control);
goog.ui.Checkbox.State = {CHECKED:!0, UNCHECKED:!1, UNDETERMINED:null};
goog.ui.Checkbox.prototype.label_ = null;
goog.ui.Checkbox.prototype.getChecked = function $goog$ui$Checkbox$$getChecked$() {
  return this.checked_
};
goog.ui.Checkbox.prototype.isChecked = function $goog$ui$Checkbox$$isChecked$() {
  return this.checked_ == goog.ui.Checkbox.State.CHECKED
};
goog.ui.Checkbox.prototype.isUnchecked = function $goog$ui$Checkbox$$isUnchecked$() {
  return this.checked_ == goog.ui.Checkbox.State.UNCHECKED
};
goog.ui.Checkbox.prototype.isUndetermined = function $goog$ui$Checkbox$$isUndetermined$() {
  return this.checked_ == goog.ui.Checkbox.State.UNDETERMINED
};
goog.ui.Checkbox.prototype.setChecked = function $goog$ui$Checkbox$$setChecked$($checked$$) {
  $checked$$ != this.checked_ && (this.checked_ = $checked$$, this.getRenderer().setCheckboxState(this.getElement(), this.checked_))
};
goog.ui.Checkbox.prototype.setCheckedInternal = function $goog$ui$Checkbox$$setCheckedInternal$($checked$$) {
  this.checked_ = $checked$$
};
goog.ui.Checkbox.prototype.setLabel = function $goog$ui$Checkbox$$setLabel$($label$$) {
  this.isInDocument() ? (this.exitDocument(), this.label_ = $label$$, this.enterDocument()) : this.label_ = $label$$
};
goog.ui.Checkbox.prototype.toggle = function $goog$ui$Checkbox$$toggle$() {
  this.setChecked(this.checked_ ? goog.ui.Checkbox.State.UNCHECKED : goog.ui.Checkbox.State.CHECKED)
};
goog.ui.Checkbox.prototype.enterDocument = function $goog$ui$Checkbox$$enterDocument$() {
  goog.ui.Checkbox.superClass_.enterDocument.call(this);
  if(this.isHandleMouseEvents()) {
    var $handler$$ = this.getHandler();
    this.label_ && $handler$$.listen(this.label_, goog.events.EventType.CLICK, this.handleClickOrSpace_).listen(this.label_, goog.events.EventType.MOUSEOVER, this.handleMouseOver).listen(this.label_, goog.events.EventType.MOUSEOUT, this.handleMouseOut).listen(this.label_, goog.events.EventType.MOUSEDOWN, this.handleMouseDown).listen(this.label_, goog.events.EventType.MOUSEUP, this.handleMouseUp);
    $handler$$.listen(this.getElement(), goog.events.EventType.CLICK, this.handleClickOrSpace_)
  }
  this.label_ && (this.label_.id || (this.label_.id = this.makeId("lbl")), goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.LABELLEDBY, this.label_.id))
};
goog.ui.Checkbox.prototype.setEnabled = function $goog$ui$Checkbox$$setEnabled$($el$$46_enabled$$) {
  goog.ui.Checkbox.superClass_.setEnabled.call(this, $el$$46_enabled$$);
  if($el$$46_enabled$$ = this.getElement()) {
    $el$$46_enabled$$.tabIndex = this.isEnabled() ? 0 : -1
  }
};
goog.ui.Checkbox.prototype.handleClickOrSpace_ = function $goog$ui$Checkbox$$handleClickOrSpace_$($e$$) {
  $e$$.stopPropagation();
  var $eventType$$ = this.checked_ ? goog.ui.Component.EventType.UNCHECK : goog.ui.Component.EventType.CHECK;
  this.isEnabled() && this.dispatchEvent($eventType$$) && ($e$$.preventDefault(), this.toggle(), this.dispatchEvent(goog.ui.Component.EventType.CHANGE))
};
goog.ui.Checkbox.prototype.handleKeyEventInternal = function $goog$ui$Checkbox$$handleKeyEventInternal$($e$$) {
  $e$$.keyCode == goog.events.KeyCodes.SPACE && this.handleClickOrSpace_($e$$);
  return!1
};
goog.ui.registry.setDecoratorByClassName(goog.ui.CheckboxRenderer.CSS_CLASS, function() {
  return new goog.ui.Checkbox
});
goog.events.InputHandler = function $goog$events$InputHandler$($element$$) {
  goog.events.EventTarget.call(this);
  this.element_ = $element$$;
  this.inputEventEmulation_ = goog.userAgent.IE || goog.userAgent.WEBKIT && !goog.userAgent.isVersion("531") && "TEXTAREA" == $element$$.tagName;
  this.eventHandler_ = new goog.events.EventHandler(this);
  this.eventHandler_.listen(this.element_, this.inputEventEmulation_ ? ["keydown", "paste", "cut", "drop"] : "input", this)
};
goog.inherits(goog.events.InputHandler, goog.events.EventTarget);
goog.events.InputHandler.EventType = {INPUT:"input"};
goog.events.InputHandler.prototype.timer_ = null;
goog.events.InputHandler.prototype.handleEvent = function $goog$events$InputHandler$$handleEvent$($e$$) {
  if(this.inputEventEmulation_) {
    if("keydown" != $e$$.type || goog.events.KeyCodes.isTextModifyingKeyEvent($e$$)) {
      var $valueBeforeKey$$ = "keydown" == $e$$.type ? this.element_.value : null;
      goog.userAgent.IE && $e$$.keyCode == goog.events.KeyCodes.WIN_IME && ($valueBeforeKey$$ = null);
      var $inputEvent$$ = this.createInputEvent_($e$$);
      this.cancelTimerIfSet_();
      this.timer_ = goog.Timer.callOnce(function() {
        this.timer_ = null;
        this.element_.value != $valueBeforeKey$$ && this.dispatchEvent($inputEvent$$)
      }, 0, this)
    }
  }else {
    (!goog.userAgent.OPERA || this.element_ == goog.dom.getOwnerDocument(this.element_).activeElement) && this.dispatchEvent(this.createInputEvent_($e$$))
  }
};
goog.events.InputHandler.prototype.cancelTimerIfSet_ = function $goog$events$InputHandler$$cancelTimerIfSet_$() {
  null != this.timer_ && (goog.Timer.clear(this.timer_), this.timer_ = null)
};
goog.events.InputHandler.prototype.createInputEvent_ = function $goog$events$InputHandler$$createInputEvent_$($be$$4_e$$) {
  $be$$4_e$$ = new goog.events.BrowserEvent($be$$4_e$$.getBrowserEvent());
  $be$$4_e$$.type = goog.events.InputHandler.EventType.INPUT;
  return $be$$4_e$$
};
goog.events.InputHandler.prototype.disposeInternal = function $goog$events$InputHandler$$disposeInternal$() {
  goog.events.InputHandler.superClass_.disposeInternal.call(this);
  this.eventHandler_.dispose();
  this.cancelTimerIfSet_();
  delete this.element_
};
goog.ui.ItemEvent = function $goog$ui$ItemEvent$($type$$, $target$$, $item$$) {
  goog.events.Event.call(this, $type$$, $target$$);
  this.item = $item$$
};
goog.inherits(goog.ui.ItemEvent, goog.events.Event);
goog.ui.LabelInput = function $goog$ui$LabelInput$($opt_label$$, $opt_domHelper$$) {
  goog.ui.Component.call(this, $opt_domHelper$$);
  this.label_ = $opt_label$$ || ""
};
goog.inherits(goog.ui.LabelInput, goog.ui.Component);
goog.ui.LabelInput.prototype.ffKeyRestoreValue_ = null;
goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ = "placeholder" in document.createElement("input");
goog.ui.LabelInput.prototype.hasFocus_ = !1;
goog.ui.LabelInput.prototype.createDom = function $goog$ui$LabelInput$$createDom$() {
  this.setElementInternal(this.getDomHelper().createDom("input", {type:"text"}))
};
goog.ui.LabelInput.prototype.decorateInternal = function $goog$ui$LabelInput$$decorateInternal$($element$$) {
  goog.ui.LabelInput.superClass_.decorateInternal.call(this, $element$$);
  this.label_ || (this.label_ = $element$$.getAttribute("label") || "");
  goog.dom.getActiveElement(goog.dom.getOwnerDocument($element$$)) == $element$$ && (this.hasFocus_ = !0, goog.dom.classes.remove(this.getElement(), this.LABEL_CLASS_NAME));
  goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ ? this.getElement().placeholder = this.label_ : goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.LABEL, this.label_)
};
goog.ui.LabelInput.prototype.enterDocument = function $goog$ui$LabelInput$$enterDocument$() {
  goog.ui.LabelInput.superClass_.enterDocument.call(this);
  this.attachEvents_();
  this.check_();
  this.getElement().labelInput_ = this
};
goog.ui.LabelInput.prototype.exitDocument = function $goog$ui$LabelInput$$exitDocument$() {
  goog.ui.LabelInput.superClass_.exitDocument.call(this);
  this.detachEvents_();
  this.getElement().labelInput_ = null
};
goog.ui.LabelInput.prototype.attachEvents_ = function $goog$ui$LabelInput$$attachEvents_$() {
  var $eh$$ = new goog.events.EventHandler(this);
  $eh$$.listen(this.getElement(), goog.events.EventType.FOCUS, this.handleFocus_);
  $eh$$.listen(this.getElement(), goog.events.EventType.BLUR, this.handleBlur_);
  if(goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_) {
    this.eventHandler_ = $eh$$
  }else {
    goog.userAgent.GECKO && $eh$$.listen(this.getElement(), [goog.events.EventType.KEYPRESS, goog.events.EventType.KEYDOWN, goog.events.EventType.KEYUP], this.handleEscapeKeys_);
    var $d$$9_w$$ = goog.dom.getOwnerDocument(this.getElement()), $d$$9_w$$ = goog.dom.getWindow($d$$9_w$$);
    $eh$$.listen($d$$9_w$$, goog.events.EventType.LOAD, this.handleWindowLoad_);
    this.eventHandler_ = $eh$$;
    this.attachEventsToForm_()
  }
};
goog.ui.LabelInput.prototype.attachEventsToForm_ = function $goog$ui$LabelInput$$attachEventsToForm_$() {
  !this.formAttached_ && (this.eventHandler_ && this.getElement().form) && (this.eventHandler_.listen(this.getElement().form, goog.events.EventType.SUBMIT, this.handleFormSubmit_), this.formAttached_ = !0)
};
goog.ui.LabelInput.prototype.detachEvents_ = function $goog$ui$LabelInput$$detachEvents_$() {
  this.eventHandler_ && (this.eventHandler_.dispose(), this.eventHandler_ = null)
};
goog.ui.LabelInput.prototype.disposeInternal = function $goog$ui$LabelInput$$disposeInternal$() {
  goog.ui.LabelInput.superClass_.disposeInternal.call(this);
  this.detachEvents_()
};
goog.ui.LabelInput.prototype.LABEL_CLASS_NAME = "label-input-label";
goog.ui.LabelInput.prototype.handleFocus_ = function $goog$ui$LabelInput$$handleFocus_$() {
  this.hasFocus_ = !0;
  goog.dom.classes.remove(this.getElement(), this.LABEL_CLASS_NAME);
  if(!goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ && !this.hasChanged() && !this.inFocusAndSelect_) {
    var $me$$ = this, $clearValue$$ = function $$clearValue$$$() {
      $me$$.getElement().value = ""
    };
    goog.userAgent.IE ? goog.Timer.callOnce($clearValue$$, 10) : $clearValue$$()
  }
};
goog.ui.LabelInput.prototype.handleBlur_ = function $goog$ui$LabelInput$$handleBlur_$() {
  goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ || (this.eventHandler_.unlisten(this.getElement(), goog.events.EventType.CLICK, this.handleFocus_), this.ffKeyRestoreValue_ = null);
  this.hasFocus_ = !1;
  this.check_()
};
goog.ui.LabelInput.prototype.handleEscapeKeys_ = function $goog$ui$LabelInput$$handleEscapeKeys_$($e$$) {
  27 == $e$$.keyCode && ($e$$.type == goog.events.EventType.KEYDOWN ? this.ffKeyRestoreValue_ = this.getElement().value : $e$$.type == goog.events.EventType.KEYPRESS ? this.getElement().value = this.ffKeyRestoreValue_ : $e$$.type == goog.events.EventType.KEYUP && (this.ffKeyRestoreValue_ = null), $e$$.preventDefault())
};
goog.ui.LabelInput.prototype.handleFormSubmit_ = function $goog$ui$LabelInput$$handleFormSubmit_$() {
  this.hasChanged() || (this.getElement().value = "", goog.Timer.callOnce(this.handleAfterSubmit_, 10, this))
};
goog.ui.LabelInput.prototype.handleAfterSubmit_ = function $goog$ui$LabelInput$$handleAfterSubmit_$() {
  this.hasChanged() || (this.getElement().value = this.label_)
};
goog.ui.LabelInput.prototype.handleWindowLoad_ = function $goog$ui$LabelInput$$handleWindowLoad_$() {
  this.check_()
};
goog.ui.LabelInput.prototype.hasFocus = function $goog$ui$LabelInput$$hasFocus$() {
  return this.hasFocus_
};
goog.ui.LabelInput.prototype.hasChanged = function $goog$ui$LabelInput$$hasChanged$() {
  return!!this.getElement() && "" != this.getElement().value && this.getElement().value != this.label_
};
goog.ui.LabelInput.prototype.clear = function $goog$ui$LabelInput$$clear$() {
  this.getElement().value = "";
  null != this.ffKeyRestoreValue_ && (this.ffKeyRestoreValue_ = "")
};
goog.ui.LabelInput.prototype.reset = function $goog$ui$LabelInput$$reset$() {
  this.hasChanged() && (this.clear(), this.check_())
};
goog.ui.LabelInput.prototype.setValue = function $goog$ui$LabelInput$$setValue$($s$$) {
  null != this.ffKeyRestoreValue_ && (this.ffKeyRestoreValue_ = $s$$);
  this.getElement().value = $s$$;
  this.check_()
};
goog.ui.LabelInput.prototype.getValue = function $goog$ui$LabelInput$$getValue$() {
  return null != this.ffKeyRestoreValue_ ? this.ffKeyRestoreValue_ : this.hasChanged() ? this.getElement().value : ""
};
goog.ui.LabelInput.prototype.setLabel = function $goog$ui$LabelInput$$setLabel$($label$$) {
  goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ ? (this.label_ = $label$$, this.getElement() && (this.getElement().placeholder = this.label_)) : (this.getElement() && !this.hasChanged() && (this.getElement().value = ""), this.label_ = $label$$, this.restoreLabel_(), this.getElement() && goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.LABEL, this.label_))
};
goog.ui.LabelInput.prototype.getLabel = function $goog$ui$LabelInput$$getLabel$() {
  return this.label_
};
goog.ui.LabelInput.prototype.check_ = function $goog$ui$LabelInput$$check_$() {
  goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ ? this.getElement().placeholder != this.label_ && (this.getElement().placeholder = this.label_) : (this.attachEventsToForm_(), goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.LABEL, this.label_));
  this.hasChanged() ? goog.dom.classes.remove(this.getElement(), this.LABEL_CLASS_NAME) : (!this.inFocusAndSelect_ && !this.hasFocus_ && goog.dom.classes.add(this.getElement(), this.LABEL_CLASS_NAME), goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ || goog.Timer.callOnce(this.restoreLabel_, 10, this))
};
goog.ui.LabelInput.prototype.focusAndSelect = function $goog$ui$LabelInput$$focusAndSelect$() {
  var $hc$$ = this.hasChanged();
  this.inFocusAndSelect_ = !0;
  this.getElement().focus();
  !$hc$$ && !goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ && (this.getElement().value = this.label_);
  this.getElement().select();
  goog.ui.LabelInput.SUPPORTS_PLACEHOLDER_ || (this.eventHandler_ && this.eventHandler_.listenOnce(this.getElement(), goog.events.EventType.CLICK, this.handleFocus_), goog.Timer.callOnce(this.focusAndSelect_, 10, this))
};
goog.ui.LabelInput.prototype.setEnabled = function $goog$ui$LabelInput$$setEnabled$($enabled$$) {
  this.getElement().disabled = !$enabled$$;
  goog.dom.classes.enable(this.getElement(), this.LABEL_CLASS_NAME + "-disabled", !$enabled$$)
};
goog.ui.LabelInput.prototype.isEnabled = function $goog$ui$LabelInput$$isEnabled$() {
  return!this.getElement().disabled
};
goog.ui.LabelInput.prototype.focusAndSelect_ = function $goog$ui$LabelInput$$focusAndSelect_$() {
  this.inFocusAndSelect_ = !1
};
goog.ui.LabelInput.prototype.restoreLabel_ = function $goog$ui$LabelInput$$restoreLabel_$() {
  this.getElement() && (!this.hasChanged() && !this.hasFocus_) && (this.getElement().value = this.label_)
};
goog.ui.ComboBox = function $goog$ui$ComboBox$($opt_domHelper$$, $opt_menu$$) {
  goog.ui.Component.call(this, $opt_domHelper$$);
  this.labelInput_ = new goog.ui.LabelInput;
  this.enabled_ = !0;
  this.menu_ = $opt_menu$$ || new goog.ui.Menu(this.getDomHelper());
  this.setupMenu_()
};
goog.inherits(goog.ui.ComboBox, goog.ui.Component);
goog.ui.ComboBox.BLUR_DISMISS_TIMER_MS = 250;
goog.ui.ComboBox.prototype.logger_ = goog.debug.Logger.getLogger("goog.ui.ComboBox");
goog.ui.ComboBox.prototype.inputHandler_ = null;
goog.ui.ComboBox.prototype.lastToken_ = null;
goog.ui.ComboBox.prototype.labelInput_ = null;
goog.ui.ComboBox.prototype.menu_ = null;
goog.ui.ComboBox.prototype.visibleCount_ = -1;
goog.ui.ComboBox.prototype.input_ = null;
goog.ui.ComboBox.prototype.matchFunction_ = goog.string.startsWith;
goog.ui.ComboBox.prototype.button_ = null;
goog.ui.ComboBox.prototype.defaultText_ = "";
goog.ui.ComboBox.prototype.fieldName_ = "";
goog.ui.ComboBox.prototype.dismissTimer_ = null;
goog.ui.ComboBox.prototype.useDropdownArrow_ = !1;
goog.ui.ComboBox.prototype.createDom = function $goog$ui$ComboBox$$createDom$() {
  this.input_ = this.getDomHelper().createDom("input", {name:this.fieldName_, autocomplete:"off"});
  this.button_ = this.getDomHelper().createDom("span", "goog-combobox-button");
  this.setElementInternal(this.getDomHelper().createDom("span", "goog-combobox", this.input_, this.button_));
  this.useDropdownArrow_ && (this.button_.innerHTML = "&#x25BC;", goog.style.setUnselectable(this.button_, !0));
  this.input_.setAttribute("label", this.defaultText_);
  this.labelInput_.decorate(this.input_);
  this.menu_.setFocusable(!1);
  this.menu_.isInDocument() || this.addChild(this.menu_, !0)
};
goog.ui.ComboBox.prototype.setEnabled = function $goog$ui$ComboBox$$setEnabled$($enabled$$) {
  this.enabled_ = $enabled$$;
  this.labelInput_.setEnabled($enabled$$);
  goog.dom.classes.enable(this.getElement(), "goog-combobox-disabled", !$enabled$$)
};
goog.ui.ComboBox.prototype.enterDocument = function $goog$ui$ComboBox$$enterDocument$() {
  goog.ui.ComboBox.superClass_.enterDocument.call(this);
  var $handler$$ = this.getHandler();
  $handler$$.listen(this.getElement(), goog.events.EventType.MOUSEDOWN, this.onComboMouseDown_);
  $handler$$.listen(this.getDomHelper().getDocument(), goog.events.EventType.MOUSEDOWN, this.onDocClicked_);
  $handler$$.listen(this.input_, goog.events.EventType.BLUR, this.onInputBlur_);
  this.keyHandler_ = new goog.events.KeyHandler(this.input_);
  $handler$$.listen(this.keyHandler_, goog.events.KeyHandler.EventType.KEY, this.handleKeyEvent);
  this.inputHandler_ = new goog.events.InputHandler(this.input_);
  $handler$$.listen(this.inputHandler_, goog.events.InputHandler.EventType.INPUT, this.onInputEvent_);
  $handler$$.listen(this.menu_, goog.ui.Component.EventType.ACTION, this.onMenuSelected_)
};
goog.ui.ComboBox.prototype.exitDocument = function $goog$ui$ComboBox$$exitDocument$() {
  this.keyHandler_.dispose();
  delete this.keyHandler_;
  this.inputHandler_.dispose();
  this.inputHandler_ = null;
  goog.ui.ComboBox.superClass_.exitDocument.call(this)
};
goog.ui.ComboBox.prototype.canDecorate = function $goog$ui$ComboBox$$canDecorate$() {
  return!1
};
goog.ui.ComboBox.prototype.disposeInternal = function $goog$ui$ComboBox$$disposeInternal$() {
  goog.ui.ComboBox.superClass_.disposeInternal.call(this);
  this.clearDismissTimer_();
  this.labelInput_.dispose();
  this.menu_.dispose();
  this.button_ = this.input_ = this.menu_ = this.labelInput_ = null
};
goog.ui.ComboBox.prototype.dismiss = function $goog$ui$ComboBox$$dismiss$() {
  this.clearDismissTimer_();
  this.hideMenu_();
  this.menu_.setHighlightedIndex(-1)
};
goog.ui.ComboBox.prototype.addItem = function $goog$ui$ComboBox$$addItem$($item$$) {
  this.menu_.addChild($item$$, !0);
  this.visibleCount_ = -1
};
goog.ui.ComboBox.prototype.addItemAt = function $goog$ui$ComboBox$$addItemAt$($item$$, $n$$) {
  this.menu_.addChildAt($item$$, $n$$, !0);
  this.visibleCount_ = -1
};
goog.ui.ComboBox.prototype.removeItem = function $goog$ui$ComboBox$$removeItem$($child$$32_item$$) {
  if($child$$32_item$$ = this.menu_.removeChild($child$$32_item$$, !0)) {
    $child$$32_item$$.dispose(), this.visibleCount_ = -1
  }
};
goog.ui.ComboBox.prototype.removeAllItems = function $goog$ui$ComboBox$$removeAllItems$() {
  for(var $i$$ = this.getItemCount() - 1;0 <= $i$$;--$i$$) {
    this.removeItem(this.getItemAt($i$$))
  }
};
goog.ui.ComboBox.prototype.removeItemAt = function $goog$ui$ComboBox$$removeItemAt$($child$$33_n$$) {
  if($child$$33_n$$ = this.menu_.removeChildAt($child$$33_n$$, !0)) {
    $child$$33_n$$.dispose(), this.visibleCount_ = -1
  }
};
goog.ui.ComboBox.prototype.getItemAt = function $goog$ui$ComboBox$$getItemAt$($n$$) {
  return this.menu_.getChildAt($n$$)
};
goog.ui.ComboBox.prototype.getItemCount = function $goog$ui$ComboBox$$getItemCount$() {
  return this.menu_.getChildCount()
};
goog.ui.ComboBox.prototype.getMenu = function $goog$ui$ComboBox$$getMenu$() {
  return this.menu_
};
goog.ui.ComboBox.prototype.getInputElement = function $goog$ui$ComboBox$$getInputElement$() {
  return this.input_
};
goog.ui.ComboBox.prototype.getNumberOfVisibleItems_ = function $goog$ui$ComboBox$$getNumberOfVisibleItems_$() {
  if(-1 == this.visibleCount_) {
    for(var $count$$ = 0, $i$$ = 0, $n$$ = this.menu_.getChildCount();$i$$ < $n$$;$i$$++) {
      var $item$$ = this.menu_.getChildAt($i$$);
      !($item$$ instanceof goog.ui.MenuSeparator) && $item$$.isVisible() && $count$$++
    }
    this.visibleCount_ = $count$$
  }
  this.logger_.info("getNumberOfVisibleItems() - " + this.visibleCount_);
  return this.visibleCount_
};
goog.ui.ComboBox.prototype.setMatchFunction = function $goog$ui$ComboBox$$setMatchFunction$($matchFunction$$) {
  this.matchFunction_ = $matchFunction$$
};
goog.ui.ComboBox.prototype.getMatchFunction = function $goog$ui$ComboBox$$getMatchFunction$() {
  return this.matchFunction_
};
goog.ui.ComboBox.prototype.setDefaultText = function $goog$ui$ComboBox$$setDefaultText$($text$$) {
  this.defaultText_ = $text$$;
  this.labelInput_ && this.labelInput_.setLabel(this.defaultText_)
};
goog.ui.ComboBox.prototype.getDefaultText = function $goog$ui$ComboBox$$getDefaultText$() {
  return this.defaultText_
};
goog.ui.ComboBox.prototype.setFieldName = function $goog$ui$ComboBox$$setFieldName$($fieldName$$) {
  this.fieldName_ = $fieldName$$
};
goog.ui.ComboBox.prototype.getFieldName = function $goog$ui$ComboBox$$getFieldName$() {
  return this.fieldName_
};
goog.ui.ComboBox.prototype.setUseDropdownArrow = function $goog$ui$ComboBox$$setUseDropdownArrow$($useDropdownArrow$$) {
  this.useDropdownArrow_ = !!$useDropdownArrow$$
};
goog.ui.ComboBox.prototype.setValue = function $goog$ui$ComboBox$$setValue$($value$$) {
  this.logger_.info("setValue() - " + $value$$);
  this.labelInput_.getValue() != $value$$ && (this.labelInput_.setValue($value$$), this.handleInputChange_())
};
goog.ui.ComboBox.prototype.getValue = function $goog$ui$ComboBox$$getValue$() {
  return this.labelInput_.getValue()
};
goog.ui.ComboBox.prototype.getToken = function $goog$ui$ComboBox$$getToken$() {
  return goog.string.htmlEscape(this.getTokenText_())
};
goog.ui.ComboBox.prototype.getTokenText_ = function $goog$ui$ComboBox$$getTokenText_$() {
  return goog.string.trim(this.labelInput_.getValue().toLowerCase())
};
goog.ui.ComboBox.prototype.setupMenu_ = function $goog$ui$ComboBox$$setupMenu_$() {
  var $sm$$ = this.menu_;
  $sm$$.setVisible(!1);
  $sm$$.setAllowAutoFocus(!1);
  $sm$$.setAllowHighlightDisabled(!0)
};
goog.ui.ComboBox.prototype.maybeShowMenu_ = function $goog$ui$ComboBox$$maybeShowMenu_$($showAll$$) {
  var $isVisible$$ = this.menu_.isVisible(), $numVisibleItems$$ = this.getNumberOfVisibleItems_();
  $isVisible$$ && 0 == $numVisibleItems$$ ? (this.logger_.fine("no matching items, hiding"), this.hideMenu_()) : !$isVisible$$ && 0 < $numVisibleItems$$ && ($showAll$$ && (this.logger_.fine("showing menu"), this.setItemVisibilityFromToken_(""), this.setItemHighlightFromToken_(this.getTokenText_())), goog.Timer.callOnce(this.clearDismissTimer_, 1, this), this.showMenu_());
  this.positionMenu()
};
goog.ui.ComboBox.prototype.positionMenu = function $goog$ui$ComboBox$$positionMenu$() {
  this.menu_ && this.menu_.isVisible() && (new goog.positioning.MenuAnchoredPosition(this.getElement(), goog.positioning.Corner.BOTTOM_START, !0)).reposition(this.menu_.getElement(), goog.positioning.Corner.TOP_START)
};
goog.ui.ComboBox.prototype.showMenu_ = function $goog$ui$ComboBox$$showMenu_$() {
  this.menu_.setVisible(!0);
  goog.dom.classes.add(this.getElement(), "goog-combobox-active")
};
goog.ui.ComboBox.prototype.hideMenu_ = function $goog$ui$ComboBox$$hideMenu_$() {
  this.menu_.setVisible(!1);
  goog.dom.classes.remove(this.getElement(), "goog-combobox-active")
};
goog.ui.ComboBox.prototype.clearDismissTimer_ = function $goog$ui$ComboBox$$clearDismissTimer_$() {
  this.dismissTimer_ && (goog.Timer.clear(this.dismissTimer_), this.dismissTimer_ = null)
};
goog.ui.ComboBox.prototype.onComboMouseDown_ = function $goog$ui$ComboBox$$onComboMouseDown_$($e$$) {
  if(this.enabled_ && ($e$$.target == this.getElement() || $e$$.target == this.input_ || goog.dom.contains(this.button_, $e$$.target))) {
    this.menu_.isVisible() ? (this.logger_.fine("Menu is visible, dismissing"), this.dismiss()) : (this.logger_.fine("Opening dropdown"), this.maybeShowMenu_(!0), goog.userAgent.OPERA && this.input_.focus(), this.input_.select(), this.menu_.setMouseButtonPressed(!0), $e$$.preventDefault())
  }
  $e$$.stopPropagation()
};
goog.ui.ComboBox.prototype.onDocClicked_ = function $goog$ui$ComboBox$$onDocClicked_$($e$$) {
  goog.dom.contains(this.menu_.getElement(), $e$$.target) || (this.logger_.info("onDocClicked_() - dismissing immediately"), this.dismiss())
};
goog.ui.ComboBox.prototype.onMenuSelected_ = function $goog$ui$ComboBox$$onMenuSelected_$($e$$) {
  this.logger_.info("onMenuSelected_()");
  var $caption$$14_item$$ = $e$$.target;
  this.dispatchEvent(new goog.ui.ItemEvent(goog.ui.Component.EventType.ACTION, this, $caption$$14_item$$)) && ($caption$$14_item$$ = $caption$$14_item$$.getCaption(), this.logger_.fine("Menu selection: " + $caption$$14_item$$ + ". Dismissing menu"), this.labelInput_.getValue() != $caption$$14_item$$ && (this.labelInput_.setValue($caption$$14_item$$), this.dispatchEvent(goog.ui.Component.EventType.CHANGE)), this.dismiss());
  $e$$.stopPropagation()
};
goog.ui.ComboBox.prototype.onInputBlur_ = function $goog$ui$ComboBox$$onInputBlur_$() {
  this.logger_.info("onInputBlur_() - delayed dismiss");
  this.clearDismissTimer_();
  this.dismissTimer_ = goog.Timer.callOnce(this.dismiss, goog.ui.ComboBox.BLUR_DISMISS_TIMER_MS, this)
};
goog.ui.ComboBox.prototype.handleKeyEvent = function $goog$ui$ComboBox$$handleKeyEvent$($e$$) {
  var $highlighted$$ = this.menu_.isVisible();
  if($highlighted$$ && this.menu_.handleKeyEvent($e$$)) {
    return!0
  }
  var $handled$$ = !1;
  switch($e$$.keyCode) {
    case goog.events.KeyCodes.ESC:
      $highlighted$$ && (this.logger_.fine("Dismiss on Esc: " + this.labelInput_.getValue()), this.dismiss(), $handled$$ = !0);
      break;
    case goog.events.KeyCodes.TAB:
      if($highlighted$$ && ($highlighted$$ = this.menu_.getHighlighted())) {
        this.logger_.fine("Select on Tab: " + this.labelInput_.getValue()), $highlighted$$.performActionInternal($e$$), $handled$$ = !0
      }
      break;
    case goog.events.KeyCodes.UP:
    ;
    case goog.events.KeyCodes.DOWN:
      $highlighted$$ || (this.logger_.fine("Up/Down - maybe show menu"), this.maybeShowMenu_(!0), $handled$$ = !0)
  }
  $handled$$ && $e$$.preventDefault();
  return $handled$$
};
goog.ui.ComboBox.prototype.onInputEvent_ = function $goog$ui$ComboBox$$onInputEvent_$() {
  this.logger_.fine("Key is modifying: " + this.labelInput_.getValue());
  this.handleInputChange_()
};
goog.ui.ComboBox.prototype.handleInputChange_ = function $goog$ui$ComboBox$$handleInputChange_$() {
  var $token$$ = this.getTokenText_();
  this.setItemVisibilityFromToken_($token$$);
  goog.dom.getActiveElement(this.getDomHelper().getDocument()) == this.input_ && this.maybeShowMenu_(!1);
  var $highlighted$$ = this.menu_.getHighlighted();
  ("" == $token$$ || !$highlighted$$ || !$highlighted$$.isVisible()) && this.setItemHighlightFromToken_($token$$);
  this.lastToken_ = $token$$;
  this.dispatchEvent(goog.ui.Component.EventType.CHANGE)
};
goog.ui.ComboBox.prototype.setItemVisibilityFromToken_ = function $goog$ui$ComboBox$$setItemVisibilityFromToken_$($token$$) {
  this.logger_.info("setItemVisibilityFromToken_() - " + $token$$);
  for(var $isVisibleItem$$ = !1, $count$$ = 0, $recheckHidden$$ = !this.matchFunction_($token$$, this.lastToken_), $i$$ = 0, $n$$ = this.menu_.getChildCount();$i$$ < $n$$;$i$$++) {
    var $item$$ = this.menu_.getChildAt($i$$);
    if($item$$ instanceof goog.ui.MenuSeparator) {
      $item$$.setVisible($isVisibleItem$$), $isVisibleItem$$ = !1
    }else {
      if($item$$ instanceof goog.ui.MenuItem) {
        if(!$item$$.isVisible() && !$recheckHidden$$) {
          continue
        }
        var $caption$$15_visible$$ = $item$$.getCaption(), $caption$$15_visible$$ = this.isItemSticky_($item$$) || $caption$$15_visible$$ && this.matchFunction_($caption$$15_visible$$.toLowerCase(), $token$$);
        "function" == typeof $item$$.setFormatFromToken && $item$$.setFormatFromToken($token$$);
        $item$$.setVisible(!!$caption$$15_visible$$);
        $isVisibleItem$$ = $caption$$15_visible$$ || $isVisibleItem$$
      }else {
        $isVisibleItem$$ = $item$$.isVisible() || $isVisibleItem$$
      }
    }
    !($item$$ instanceof goog.ui.MenuSeparator) && $item$$.isVisible() && $count$$++
  }
  this.visibleCount_ = $count$$
};
goog.ui.ComboBox.prototype.setItemHighlightFromToken_ = function $goog$ui$ComboBox$$setItemHighlightFromToken_$($token$$) {
  this.logger_.info("setItemHighlightFromToken_() - " + $token$$);
  if("" != $token$$) {
    for(var $i$$ = 0, $n$$ = this.menu_.getChildCount();$i$$ < $n$$;$i$$++) {
      var $item$$ = this.menu_.getChildAt($i$$), $caption$$ = $item$$.getCaption();
      if($caption$$ && this.matchFunction_($caption$$.toLowerCase(), $token$$)) {
        this.menu_.setHighlightedIndex($i$$);
        $item$$.setFormatFromToken && $item$$.setFormatFromToken($token$$);
        return
      }
    }
  }
  this.menu_.setHighlightedIndex(-1)
};
goog.ui.ComboBox.prototype.isItemSticky_ = function $goog$ui$ComboBox$$isItemSticky_$($item$$) {
  return"function" == typeof $item$$.isSticky && $item$$.isSticky()
};
goog.ui.ComboBoxItem = function $goog$ui$ComboBoxItem$($content$$, $opt_data$$, $opt_domHelper$$, $opt_renderer$$) {
  goog.ui.MenuItem.call(this, $content$$, $opt_data$$, $opt_domHelper$$, $opt_renderer$$)
};
goog.inherits(goog.ui.ComboBoxItem, goog.ui.MenuItem);
goog.ui.registry.setDecoratorByClassName("goog-combobox-item", function() {
  return new goog.ui.ComboBoxItem(null)
});
goog.ui.ComboBoxItem.prototype.isSticky_ = !1;
goog.ui.ComboBoxItem.prototype.setSticky = function $goog$ui$ComboBoxItem$$setSticky$($sticky$$) {
  this.isSticky_ = $sticky$$
};
goog.ui.ComboBoxItem.prototype.isSticky = function $goog$ui$ComboBoxItem$$isSticky$() {
  return this.isSticky_
};
goog.ui.ComboBoxItem.prototype.setFormatFromToken = function $goog$ui$ComboBoxItem$$setFormatFromToken$($token$$) {
  if(this.isEnabled()) {
    var $caption$$ = this.getCaption(), $index$$ = $caption$$.toLowerCase().indexOf($token$$);
    if(0 <= $index$$) {
      var $domHelper$$ = this.getDomHelper();
      this.setContent([$domHelper$$.createTextNode($caption$$.substr(0, $index$$)), $domHelper$$.createDom("b", null, $caption$$.substr($index$$, $token$$.length)), $domHelper$$.createTextNode($caption$$.substr($index$$ + $token$$.length))])
    }
  }
};
texthelp.webreader.templates = {};
texthelp.webreader.templates.OptionsDialog = function $texthelp$webreader$templates$OptionsDialog$() {
  return'<div><div id="gdwr-options-container"><div id="gdwr-navbar-container"><h1 id="gdwr-navbar-content-title" i18n-content="title">Settings</h1><ul id="gdwr-navbar"><li id="gdwr-speech" class="gdwr-navbar-item gdwr-navbar-item-selected" pagename="speech" role="tab" tabindex="0" aria-selected="true">Speech</li><li id="gdwr-about" class="gdwr-navbar-item" pagename="about" role="tab" tabindex="-1">About</li></ul></div><div id="gdwr-page-container"><div id="gdwr-speechPage" class="gdwr-page"><h1 i18n-content="settingsPage">Speech</h1><div class="displaytable"><section id="voiceSection" class="gdwr-section"><h3 i18n-content="voiceGroupName" class="gdwr-h3">Voice</h3><div><div id="cbothVoices"/></div></section><section id="voiceSection" class="gdwr-section"><h3 i18n-content="voiceGroupName" class="gdwr-h3">Speed</h3><br><div><input type="radio" name="voiceSpeed" class="thVerySlow"/><span i18n-content=\u200b"voiceSpeedVerySlow">&nbsp;Very \u200bSlow</span><br><input type="radio" name="voiceSpeed" class="thSlow"/><span i18n-content=\u200b"voiceSpeedSlow">&nbsp;\u200bSlow</span><br><input type="radio" name="voiceSpeed" value=\'true\' checked=\'\'/><span i18n-content=\u200b"voiceSpeedMedium" class="thMedium">&nbsp;Medium\u200b</span><br><input type="radio" name="voiceSpeed" class="thFast"/><span i18n-content=\u200b"voiceSpeedFast">&nbsp;Fast\u200b</span><br></div></section><section id="readingSection" class="gdwr-section"><h3 i18n-content="readingGroupName" class="gdwr-h3">Reading</h3><div><div id="continuousReadingChk" class="goog-checkbox-checked"></div>&nbsp;Continuous reading</div></section></div></div><div id="gdwr-aboutPage" class="gdwr-page gdwr-page-hidden"><h1 i18n-content="settingsPage">About</h1><div class="displaytable"><br><div class="texthelp-logo"></div>Read&Write for Google Docs\u2122<br>Version 1.0.0.22<br><br><br><br></div><br><textarea class="license" rows="2" cols="20">&#10;1. No part of this software may be reproduced or transmitted in any form or by any means, electronic or mechanical, for any purpose, without express written permission of Texthelp Limited. Unauthorised use of this software will be prosecuted to the maximum possible extent under law. &#10;&#10;</textarea></div><div class="gdwr-modal-dialog-buttons"/></div></div></div>'
};
texthelp.webreader.SpeechOptionsDlg = function $texthelp$webreader$SpeechOptionsDlg$($dom$$) {
  goog.ui.Component.call(this, $dom$$);
  this.m_voices = this.m_chkContinuousReading = this.m_cboVoices = this.m_dialog = null;
  this.m_voicesAdded = !1;
  this.m_navigationControl = new goog.ui.Container
};
goog.inherits(texthelp.webreader.SpeechOptionsDlg, goog.ui.Component);
texthelp.webreader.SpeechOptionsDlg.prototype.createDom = function $texthelp$webreader$SpeechOptionsDlg$$createDom$() {
  try {
    texthelp.webreader.SpeechOptionsDlg.superClass_.createDom.call(this);
    var $htmlFragment$$ = soy.renderAsFragment(texthelp.webreader.templates.OptionsDialog);
    this.m_dialog = new goog.ui.Dialog("gdwr-modal-dialog", !0);
    this.m_dialog.setContent($htmlFragment$$.innerHTML);
    this.m_dialog.setDraggable(!1);
    this.m_dialog.setModal(!0);
    this.m_dialog.render(goog.dom.getElementByClass(texthelp.webreaderapi.HelpersSingleton.getInstance().getPlaceHolder()));
    this.m_cboVoices = new goog.ui.ComboBox;
    this.m_cboVoices.setUseDropdownArrow(!0);
    this.m_cboVoices.setMatchFunction(goog.string.contains);
    this.m_cboVoices.render(goog.dom.getElement("cbothVoices"));
    this.m_chkContinuousReading = new goog.ui.Checkbox;
    this.m_chkContinuousReading.decorate(goog.dom.getElement("continuousReadingChk"));
    this.m_dialog.setButtonSet(null);
    var $cancelButton$$ = new goog.ui.Button("Cancel");
    $cancelButton$$.addClassName("gdwr-dialog-button");
    var $okButton$$ = new goog.ui.Button("OK");
    $okButton$$.addClassName("gdwr-dialog-button");
    $cancelButton$$.render(goog.dom.getElementByClass("gdwr-modal-dialog-buttons"));
    $okButton$$.render(goog.dom.getElementByClass("gdwr-modal-dialog-buttons"));
    goog.events.listen($cancelButton$$, goog.ui.Component.EventType.ACTION, this.onCancel_, !1, this);
    goog.events.listen($okButton$$, goog.ui.Component.EventType.ACTION, this.onOk_, !1, this);
    var $navBar$$ = goog.dom.getElement("gdwr-navbar");
    goog.events.listen($navBar$$, goog.events.EventType.MOUSEUP, this.onNav_, !1, this)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.SpeechOptionsDlg.prototype.showDialog = function $texthelp$webreader$SpeechOptionsDlg$$showDialog$($voices$$) {
  try {
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRStop", []);
    if(!this.m_voicesAdded) {
      for(var $voice$$ in $voices$$) {
        this.m_cboVoices.addItem(new goog.ui.MenuItem($voices$$[$voice$$]))
      }
      this.m_voices = $voices$$;
      this.m_voicesAdded = !0
    }
    this.m_cboVoices.setValue(this.m_voices[texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.voice]);
    this.m_chkContinuousReading.setChecked(texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.continousreading);
    switch(texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.speed) {
      case 15:
        goog.dom.getElementByClass("thVerySlow").checked = !0;
        break;
      case 33:
        goog.dom.getElementByClass("thSlow").checked = !0;
        break;
      case 50:
        goog.dom.getElementByClass("thMedium").checked = !0;
        break;
      case 68:
        goog.dom.getElementByClass("thFast").checked = !0
    }
    this.resizeDialog_();
    this.m_dialog.setVisible(!0)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.SpeechOptionsDlg.prototype.onNav_ = function $texthelp$webreader$SpeechOptionsDlg$$onNav_$($evt$$) {
  try {
    var $navBarItem$$ = $evt$$.target, $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance();
    if(!$helper$$.hasClassName($navBarItem$$, "gdwr-navbar-item-selected")) {
      var $currentSelectedItem$$ = goog.dom.getElementByClass("gdwr-navbar-item-selected"), $currentPage$$ = goog.dom.getElement($currentSelectedItem$$.id + "Page");
      $helper$$.addClassName($currentPage$$, "gdwr-page-hidden");
      $helper$$.removeClassName($currentSelectedItem$$, "gdwr-navbar-item-selected");
      var $newPage$$ = goog.dom.getElement($navBarItem$$.id + "Page");
      $helper$$.removeClassName($newPage$$, "gdwr-page-hidden");
      $helper$$.addClassName($navBarItem$$, "gdwr-navbar-item-selected")
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.SpeechOptionsDlg.prototype.onCancel_ = function $texthelp$webreader$SpeechOptionsDlg$$onCancel_$() {
  try {
    this.m_dialog.setVisible(!1)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.SpeechOptionsDlg.prototype.onOk_ = function $texthelp$webreader$SpeechOptionsDlg$$onOk_$() {
  try {
    this.m_dialog.setVisible(!1);
    var $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings(), $speed$$4_voice$$;
    for($speed$$4_voice$$ in this.m_voices) {
      if(this.m_voices[$speed$$4_voice$$] === this.m_cboVoices.getValue()) {
        $userSettings$$.speechoptions.voice = $speed$$4_voice$$;
        $userSettings$$.speechoptions.continousreading = this.m_chkContinuousReading.getChecked();
        $speed$$4_voice$$ = 50;
        !0 == goog.dom.getElementByClass("thVerySlow").checked ? $speed$$4_voice$$ = 15 : !0 == goog.dom.getElementByClass("thSlow").checked ? $speed$$4_voice$$ = 33 : !0 == goog.dom.getElementByClass("thFast").checked && ($speed$$4_voice$$ = 68);
        $userSettings$$.speechoptions.speed = $speed$$4_voice$$;
        texthelp.webreader.UserSettingsSingleton.getInstance().saveUserSettings($userSettings$$);
        break
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.SpeechOptionsDlg.prototype.resizeDialog_ = function $texthelp$webreader$SpeechOptionsDlg$$resizeDialog_$() {
  try {
    var $navBarElem$$ = goog.dom.getElement("gdwr-navbar-container"), $pageContainerElem$$ = goog.dom.getElement("gdwr-page-container"), $dialogSize$$ = goog.style.getSize(this.m_dialog.getDialogElement()), $navSize$$ = goog.style.getSize(this.m_dialog.getDialogElement()), $pageContainerSize$$ = goog.style.getSize(this.m_dialog.getDialogElement());
    $navSize$$.height = $dialogSize$$.height;
    $navSize$$.width = 176;
    $pageContainerSize$$.height = $dialogSize$$.height;
    $pageContainerSize$$.width = $dialogSize$$.width - 176;
    goog.style.setSize($navBarElem$$, $navSize$$);
    goog.style.setSize($pageContainerElem$$, $pageContainerSize$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.UserSettingsFactory = function $texthelp$webreader$UserSettingsFactory$() {
};
texthelp.webreader.UserSettingsFactory.prototype.getUserSettingsHelper = function $texthelp$webreader$UserSettingsFactory$$getUserSettingsHelper$() {
  try {
    var $user$$ = goog.dom.getElementByClass("docs-offline-bar-email");
    null === $user$$ && ($user$$ = goog.dom.getElementByClass("gbps2"));
    return null !== $user$$ ? new texthelp.webreader.GDocsUserSettings : new texthelp.webreader.UserSettings
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.crypt.Arc4 = function $goog$crypt$Arc4$() {
  this.state_ = [];
  this.index2_ = this.index1_ = 0
};
goog.crypt.Arc4.prototype.setKey = function $goog$crypt$Arc4$$setKey$($key$$, $opt_length$$) {
  goog.asserts.assertArray($key$$, "Key parameter must be a byte array");
  $opt_length$$ || ($opt_length$$ = $key$$.length);
  for(var $state$$ = this.state_, $i$$ = 0;256 > $i$$;++$i$$) {
    $state$$[$i$$] = $i$$
  }
  for(var $j$$ = 0, $i$$ = 0;256 > $i$$;++$i$$) {
    var $j$$ = $j$$ + $state$$[$i$$] + $key$$[$i$$ % $opt_length$$] & 255, $tmp$$ = $state$$[$i$$];
    $state$$[$i$$] = $state$$[$j$$];
    $state$$[$j$$] = $tmp$$
  }
  this.index2_ = this.index1_ = 0
};
goog.crypt.Arc4.prototype.discard = function $goog$crypt$Arc4$$discard$($length$$) {
  for(var $i$$ = this.index1_, $j$$ = this.index2_, $state$$ = this.state_, $n$$ = 0;$n$$ < $length$$;++$n$$) {
    var $i$$ = $i$$ + 1 & 255, $j$$ = $j$$ + $state$$[$i$$] & 255, $tmp$$ = $state$$[$i$$];
    $state$$[$i$$] = $state$$[$j$$];
    $state$$[$j$$] = $tmp$$
  }
  this.index1_ = $i$$;
  this.index2_ = $j$$
};
goog.crypt.Arc4.prototype.crypt = function $goog$crypt$Arc4$$crypt$($data$$, $opt_length$$) {
  $opt_length$$ || ($opt_length$$ = $data$$.length);
  for(var $i$$ = this.index1_, $j$$ = this.index2_, $state$$ = this.state_, $n$$ = 0;$n$$ < $opt_length$$;++$n$$) {
    var $i$$ = $i$$ + 1 & 255, $j$$ = $j$$ + $state$$[$i$$] & 255, $tmp$$ = $state$$[$i$$];
    $state$$[$i$$] = $state$$[$j$$];
    $state$$[$j$$] = $tmp$$;
    $data$$[$n$$] ^= $state$$[$state$$[$i$$] + $state$$[$j$$] & 255]
  }
  this.index1_ = $i$$;
  this.index2_ = $j$$
};
goog.crypt.Sha1 = function $goog$crypt$Sha1$() {
  goog.crypt.Hash.call(this);
  this.chain_ = [];
  this.buf_ = [];
  this.W_ = [];
  this.pad_ = [];
  this.pad_[0] = 128;
  for(var $i$$ = 1;64 > $i$$;++$i$$) {
    this.pad_[$i$$] = 0
  }
  this.reset()
};
goog.inherits(goog.crypt.Sha1, goog.crypt.Hash);
goog.crypt.Sha1.prototype.reset = function $goog$crypt$Sha1$$reset$() {
  this.chain_[0] = 1732584193;
  this.chain_[1] = 4023233417;
  this.chain_[2] = 2562383102;
  this.chain_[3] = 271733878;
  this.chain_[4] = 3285377520;
  this.total_ = this.inbuf_ = 0
};
goog.crypt.Sha1.prototype.compress_ = function $goog$crypt$Sha1$$compress_$($buf$$, $opt_offset$$) {
  $opt_offset$$ || ($opt_offset$$ = 0);
  for(var $W$$ = this.W_, $i$$ = $opt_offset$$;$i$$ < $opt_offset$$ + 64;$i$$ += 4) {
    $W$$[$i$$ / 4] = $buf$$[$i$$] << 24 | $buf$$[$i$$ + 1] << 16 | $buf$$[$i$$ + 2] << 8 | $buf$$[$i$$ + 3]
  }
  for($i$$ = 16;80 > $i$$;$i$$++) {
    var $f$$ = $W$$[$i$$ - 3] ^ $W$$[$i$$ - 8] ^ $W$$[$i$$ - 14] ^ $W$$[$i$$ - 16];
    $W$$[$i$$] = ($f$$ << 1 | $f$$ >>> 31) & 4294967295
  }
  for(var $a$$ = this.chain_[0], $b$$ = this.chain_[1], $c$$ = this.chain_[2], $d$$ = this.chain_[3], $e$$ = this.chain_[4], $k$$, $i$$ = 0;80 > $i$$;$i$$++) {
    40 > $i$$ ? 20 > $i$$ ? ($f$$ = $d$$ ^ $b$$ & ($c$$ ^ $d$$), $k$$ = 1518500249) : ($f$$ = $b$$ ^ $c$$ ^ $d$$, $k$$ = 1859775393) : 60 > $i$$ ? ($f$$ = $b$$ & $c$$ | $d$$ & ($b$$ | $c$$), $k$$ = 2400959708) : ($f$$ = $b$$ ^ $c$$ ^ $d$$, $k$$ = 3395469782), $f$$ = ($a$$ << 5 | $a$$ >>> 27) + $f$$ + $e$$ + $k$$ + $W$$[$i$$] & 4294967295, $e$$ = $d$$, $d$$ = $c$$, $c$$ = ($b$$ << 30 | $b$$ >>> 2) & 4294967295, $b$$ = $a$$, $a$$ = $f$$
  }
  this.chain_[0] = this.chain_[0] + $a$$ & 4294967295;
  this.chain_[1] = this.chain_[1] + $b$$ & 4294967295;
  this.chain_[2] = this.chain_[2] + $c$$ & 4294967295;
  this.chain_[3] = this.chain_[3] + $d$$ & 4294967295;
  this.chain_[4] = this.chain_[4] + $e$$ & 4294967295
};
goog.crypt.Sha1.prototype.update = function $goog$crypt$Sha1$$update$($bytes$$, $opt_length$$) {
  goog.isDef($opt_length$$) || ($opt_length$$ = $bytes$$.length);
  var $buf$$ = this.buf_, $inbuf$$ = this.inbuf_, $n$$ = 0;
  if(goog.isString($bytes$$)) {
    for(;$n$$ < $opt_length$$;) {
      $buf$$[$inbuf$$++] = $bytes$$.charCodeAt($n$$++), 64 == $inbuf$$ && (this.compress_($buf$$), $inbuf$$ = 0)
    }
  }else {
    for(;$n$$ < $opt_length$$;) {
      $buf$$[$inbuf$$++] = $bytes$$[$n$$++], 64 == $inbuf$$ && (this.compress_($buf$$), $inbuf$$ = 0)
    }
  }
  this.inbuf_ = $inbuf$$;
  this.total_ += $opt_length$$
};
goog.crypt.Sha1.prototype.digest = function $goog$crypt$Sha1$$digest$() {
  var $digest$$ = [], $n$$20_totalBits$$ = 8 * this.total_;
  56 > this.inbuf_ ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, 64 - (this.inbuf_ - 56));
  for(var $i$$ = 63;56 <= $i$$;$i$$--) {
    this.buf_[$i$$] = $n$$20_totalBits$$ & 255, $n$$20_totalBits$$ /= 256
  }
  this.compress_(this.buf_);
  for($i$$ = $n$$20_totalBits$$ = 0;5 > $i$$;$i$$++) {
    for(var $j$$ = 24;0 <= $j$$;$j$$ -= 8) {
      $digest$$[$n$$20_totalBits$$++] = this.chain_[$i$$] >> $j$$ & 255
    }
  }
  return $digest$$
};
goog.crypt.base64 = {};
goog.crypt.base64.byteToCharMap_ = null;
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.byteToCharMapWebSafe_ = null;
goog.crypt.base64.charToByteMapWebSafe_ = null;
goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.";
goog.crypt.base64.HAS_NATIVE_SUPPORT = goog.userAgent.GECKO || goog.userAgent.WEBKIT || goog.userAgent.OPERA || "function" == typeof goog.global.atob;
goog.crypt.base64.encodeByteArray = function $goog$crypt$base64$encodeByteArray$($input$$, $opt_webSafe$$) {
  if(!goog.isArrayLike($input$$)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  goog.crypt.base64.init_();
  for(var $byteToCharMap$$ = $opt_webSafe$$ ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_, $output$$ = [], $i$$ = 0;$i$$ < $input$$.length;$i$$ += 3) {
    var $byte1_outByte2$$ = $input$$[$i$$], $haveByte2$$ = $i$$ + 1 < $input$$.length, $byte2_outByte3$$ = $haveByte2$$ ? $input$$[$i$$ + 1] : 0, $haveByte3$$ = $i$$ + 2 < $input$$.length, $byte3_outByte4$$ = $haveByte3$$ ? $input$$[$i$$ + 2] : 0, $outByte1$$ = $byte1_outByte2$$ >> 2, $byte1_outByte2$$ = ($byte1_outByte2$$ & 3) << 4 | $byte2_outByte3$$ >> 4, $byte2_outByte3$$ = ($byte2_outByte3$$ & 15) << 2 | $byte3_outByte4$$ >> 6, $byte3_outByte4$$ = $byte3_outByte4$$ & 63;
    $haveByte3$$ || ($byte3_outByte4$$ = 64, $haveByte2$$ || ($byte2_outByte3$$ = 64));
    $output$$.push($byteToCharMap$$[$outByte1$$], $byteToCharMap$$[$byte1_outByte2$$], $byteToCharMap$$[$byte2_outByte3$$], $byteToCharMap$$[$byte3_outByte4$$])
  }
  return $output$$.join("")
};
goog.crypt.base64.encodeString = function $goog$crypt$base64$encodeString$($input$$, $opt_webSafe$$) {
  return goog.crypt.base64.HAS_NATIVE_SUPPORT && !$opt_webSafe$$ ? goog.global.btoa($input$$) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray($input$$), $opt_webSafe$$)
};
goog.crypt.base64.decodeString = function $goog$crypt$base64$decodeString$($input$$, $opt_webSafe$$) {
  return goog.crypt.base64.HAS_NATIVE_SUPPORT && !$opt_webSafe$$ ? goog.global.atob($input$$) : goog.crypt.byteArrayToString(goog.crypt.base64.decodeStringToByteArray($input$$, $opt_webSafe$$))
};
goog.crypt.base64.decodeStringToByteArray = function $goog$crypt$base64$decodeStringToByteArray$($input$$, $opt_webSafe$$) {
  goog.crypt.base64.init_();
  for(var $charToByteMap$$ = $opt_webSafe$$ ? goog.crypt.base64.charToByteMapWebSafe_ : goog.crypt.base64.charToByteMap_, $output$$ = [], $i$$ = 0;$i$$ < $input$$.length;) {
    var $byte1$$ = $charToByteMap$$[$input$$.charAt($i$$++)], $byte2$$ = $i$$ < $input$$.length ? $charToByteMap$$[$input$$.charAt($i$$)] : 0;
    ++$i$$;
    var $byte3$$ = $i$$ < $input$$.length ? $charToByteMap$$[$input$$.charAt($i$$)] : 0;
    ++$i$$;
    var $byte4$$ = $i$$ < $input$$.length ? $charToByteMap$$[$input$$.charAt($i$$)] : 0;
    ++$i$$;
    if(null == $byte1$$ || null == $byte2$$ || null == $byte3$$ || null == $byte4$$) {
      throw Error();
    }
    $output$$.push($byte1$$ << 2 | $byte2$$ >> 4);
    64 != $byte3$$ && ($output$$.push($byte2$$ << 4 & 240 | $byte3$$ >> 2), 64 != $byte4$$ && $output$$.push($byte3$$ << 6 & 192 | $byte4$$))
  }
  return $output$$
};
goog.crypt.base64.init_ = function $goog$crypt$base64$init_$() {
  if(!goog.crypt.base64.byteToCharMap_) {
    goog.crypt.base64.byteToCharMap_ = {};
    goog.crypt.base64.charToByteMap_ = {};
    goog.crypt.base64.byteToCharMapWebSafe_ = {};
    goog.crypt.base64.charToByteMapWebSafe_ = {};
    for(var $i$$ = 0;$i$$ < goog.crypt.base64.ENCODED_VALS.length;$i$$++) {
      goog.crypt.base64.byteToCharMap_[$i$$] = goog.crypt.base64.ENCODED_VALS.charAt($i$$), goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[$i$$]] = $i$$, goog.crypt.base64.byteToCharMapWebSafe_[$i$$] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt($i$$), goog.crypt.base64.charToByteMapWebSafe_[goog.crypt.base64.byteToCharMapWebSafe_[$i$$]] = $i$$
    }
  }
};
goog.storage = {};
goog.storage.ErrorCode = {INVALID_VALUE:"Storage: Invalid value was encountered", DECRYPTION_ERROR:"Storage: The value could not be decrypted"};
goog.storage.mechanism = {};
goog.storage.mechanism.Mechanism = function $goog$storage$mechanism$Mechanism$() {
};
goog.storage.Storage = function $goog$storage$Storage$($mechanism$$) {
  this.mechanism = $mechanism$$;
  this.serializer_ = new goog.json.Serializer
};
goog.storage.Storage.prototype.mechanism = null;
goog.storage.Storage.prototype.serializer_ = null;
goog.storage.Storage.prototype.set = function $goog$storage$Storage$$set$($key$$, $value$$) {
  goog.isDef($value$$) ? this.mechanism.set($key$$, this.serializer_.serialize($value$$)) : this.mechanism.remove($key$$)
};
goog.storage.Storage.prototype.get = function $goog$storage$Storage$$get$($json_key$$) {
  $json_key$$ = this.mechanism.get($json_key$$);
  if(!goog.isNull($json_key$$)) {
    try {
      return goog.json.parse($json_key$$)
    }catch($e$$) {
      throw goog.storage.ErrorCode.INVALID_VALUE;
    }
  }
};
goog.storage.Storage.prototype.remove = function $goog$storage$Storage$$remove$($key$$) {
  this.mechanism.remove($key$$)
};
goog.storage.RichStorage = function $goog$storage$RichStorage$($mechanism$$) {
  goog.storage.Storage.call(this, $mechanism$$)
};
goog.inherits(goog.storage.RichStorage, goog.storage.Storage);
goog.storage.RichStorage.DATA_KEY = "data";
goog.storage.RichStorage.Wrapper = function $goog$storage$RichStorage$Wrapper$($value$$) {
  this[goog.storage.RichStorage.DATA_KEY] = $value$$
};
goog.storage.RichStorage.Wrapper.wrapIfNecessary = function $goog$storage$RichStorage$Wrapper$wrapIfNecessary$($value$$) {
  return!goog.isDef($value$$) || $value$$ instanceof goog.storage.RichStorage.Wrapper ? $value$$ : new goog.storage.RichStorage.Wrapper($value$$)
};
goog.storage.RichStorage.Wrapper.unwrap = function $goog$storage$RichStorage$Wrapper$unwrap$($value$$120_wrapper$$) {
  $value$$120_wrapper$$ = $value$$120_wrapper$$[goog.storage.RichStorage.DATA_KEY];
  if(!goog.isDef($value$$120_wrapper$$)) {
    throw goog.storage.ErrorCode.INVALID_VALUE;
  }
  return $value$$120_wrapper$$
};
goog.storage.RichStorage.Wrapper.unwrapIfPossible = function $goog$storage$RichStorage$Wrapper$unwrapIfPossible$($wrapper$$) {
  return!$wrapper$$ ? void 0 : goog.storage.RichStorage.Wrapper.unwrap($wrapper$$)
};
goog.storage.RichStorage.prototype.set = function $goog$storage$RichStorage$$set$($key$$, $value$$) {
  goog.storage.RichStorage.superClass_.set.call(this, $key$$, goog.storage.RichStorage.Wrapper.wrapIfNecessary($value$$))
};
goog.storage.RichStorage.prototype.getWrapper = function $goog$storage$RichStorage$$getWrapper$($key$$95_wrapper$$) {
  $key$$95_wrapper$$ = goog.storage.RichStorage.superClass_.get.call(this, $key$$95_wrapper$$);
  if(!goog.isDef($key$$95_wrapper$$) || $key$$95_wrapper$$ instanceof Object) {
    return $key$$95_wrapper$$
  }
  throw goog.storage.ErrorCode.INVALID_VALUE;
};
goog.storage.RichStorage.prototype.get = function $goog$storage$RichStorage$$get$($key$$) {
  return goog.storage.RichStorage.Wrapper.unwrapIfPossible(this.getWrapper($key$$))
};
goog.storage.ExpiringStorage = function $goog$storage$ExpiringStorage$($mechanism$$) {
  goog.storage.RichStorage.call(this, $mechanism$$)
};
goog.inherits(goog.storage.ExpiringStorage, goog.storage.RichStorage);
goog.storage.ExpiringStorage.EXPIRATION_TIME_KEY = "expiration";
goog.storage.ExpiringStorage.CREATION_TIME_KEY = "creation";
goog.storage.ExpiringStorage.getCreationTime = function $goog$storage$ExpiringStorage$getCreationTime$($wrapper$$) {
  return $wrapper$$[goog.storage.ExpiringStorage.CREATION_TIME_KEY]
};
goog.storage.ExpiringStorage.getExpirationTime = function $goog$storage$ExpiringStorage$getExpirationTime$($wrapper$$) {
  return $wrapper$$[goog.storage.ExpiringStorage.EXPIRATION_TIME_KEY]
};
goog.storage.ExpiringStorage.isExpired = function $goog$storage$ExpiringStorage$isExpired$($expiration_wrapper$$) {
  var $creation$$ = goog.storage.ExpiringStorage.getCreationTime($expiration_wrapper$$), $expiration_wrapper$$ = goog.storage.ExpiringStorage.getExpirationTime($expiration_wrapper$$);
  return!!$expiration_wrapper$$ && $expiration_wrapper$$ < goog.now() || !!$creation$$ && $creation$$ > goog.now()
};
goog.storage.ExpiringStorage.prototype.set = function $goog$storage$ExpiringStorage$$set$($key$$, $value$$122_wrapper$$, $opt_expiration$$) {
  if($value$$122_wrapper$$ = goog.storage.RichStorage.Wrapper.wrapIfNecessary($value$$122_wrapper$$)) {
    if($opt_expiration$$) {
      if($opt_expiration$$ < goog.now()) {
        goog.storage.ExpiringStorage.prototype.remove.call(this, $key$$);
        return
      }
      $value$$122_wrapper$$[goog.storage.ExpiringStorage.EXPIRATION_TIME_KEY] = $opt_expiration$$
    }
    $value$$122_wrapper$$[goog.storage.ExpiringStorage.CREATION_TIME_KEY] = goog.now()
  }
  goog.storage.ExpiringStorage.superClass_.set.call(this, $key$$, $value$$122_wrapper$$)
};
goog.storage.ExpiringStorage.prototype.getWrapper = function $goog$storage$ExpiringStorage$$getWrapper$($key$$, $opt_expired$$) {
  var $wrapper$$ = goog.storage.ExpiringStorage.superClass_.getWrapper.call(this, $key$$);
  if($wrapper$$) {
    if(!$opt_expired$$ && goog.storage.ExpiringStorage.isExpired($wrapper$$)) {
      goog.storage.ExpiringStorage.prototype.remove.call(this, $key$$)
    }else {
      return $wrapper$$
    }
  }
};
goog.storage.mechanism.IterableMechanism = function $goog$storage$mechanism$IterableMechanism$() {
  goog.storage.mechanism.Mechanism.call(this)
};
goog.inherits(goog.storage.mechanism.IterableMechanism, goog.storage.mechanism.Mechanism);
goog.storage.mechanism.IterableMechanism.prototype.getCount = function $goog$storage$mechanism$IterableMechanism$$getCount$() {
  var $count$$ = 0;
  goog.iter.forEach(this.__iterator__(!0), function($key$$) {
    goog.asserts.assertString($key$$);
    $count$$++
  });
  return $count$$
};
goog.storage.mechanism.IterableMechanism.prototype.clear = function $goog$storage$mechanism$IterableMechanism$$clear$() {
  var $keys$$ = goog.iter.toArray(this.__iterator__(!0)), $selfObj$$ = this;
  goog.array.forEach($keys$$, function($key$$) {
    $selfObj$$.remove($key$$)
  })
};
goog.storage.CollectableStorage = function $goog$storage$CollectableStorage$($mechanism$$) {
  goog.storage.ExpiringStorage.call(this, $mechanism$$)
};
goog.inherits(goog.storage.CollectableStorage, goog.storage.ExpiringStorage);
goog.storage.CollectableStorage.prototype.collect = function $goog$storage$CollectableStorage$$collect$($opt_strict$$) {
  var $selfObj$$ = this, $keysToRemove$$ = [];
  goog.iter.forEach(this.mechanism.__iterator__(!0), function($key$$) {
    var $wrapper$$;
    try {
      $wrapper$$ = goog.storage.CollectableStorage.prototype.getWrapper.call($selfObj$$, $key$$, !0)
    }catch($ex$$) {
      if($ex$$ == goog.storage.ErrorCode.INVALID_VALUE) {
        $opt_strict$$ && $keysToRemove$$.push($key$$);
        return
      }
      throw $ex$$;
    }
    goog.asserts.assert($wrapper$$);
    if(goog.storage.ExpiringStorage.isExpired($wrapper$$)) {
      $keysToRemove$$.push($key$$)
    }else {
      if($opt_strict$$) {
        try {
          goog.storage.RichStorage.Wrapper.unwrap($wrapper$$)
        }catch($ex$$0$$) {
          if($ex$$0$$ == goog.storage.ErrorCode.INVALID_VALUE) {
            $keysToRemove$$.push($key$$)
          }else {
            throw $ex$$0$$;
          }
        }
      }
    }
  });
  goog.array.forEach($keysToRemove$$, function($key$$) {
    goog.storage.CollectableStorage.prototype.remove.call($selfObj$$, $key$$)
  })
};
goog.storage.EncryptedStorage = function $goog$storage$EncryptedStorage$($mechanism$$, $secret$$) {
  goog.storage.CollectableStorage.call(this, $mechanism$$);
  this.secret_ = goog.crypt.stringToByteArray($secret$$);
  this.cleartextSerializer_ = new goog.json.Serializer
};
goog.inherits(goog.storage.EncryptedStorage, goog.storage.CollectableStorage);
goog.storage.EncryptedStorage.SALT_KEY = "salt";
goog.storage.EncryptedStorage.prototype.secret_ = null;
goog.storage.EncryptedStorage.prototype.cleartextSerializer_ = null;
goog.storage.EncryptedStorage.prototype.hashKeyWithSecret_ = function $goog$storage$EncryptedStorage$$hashKeyWithSecret_$($key$$) {
  var $sha1$$ = new goog.crypt.Sha1;
  $sha1$$.update(goog.crypt.stringToByteArray($key$$));
  $sha1$$.update(this.secret_);
  return goog.crypt.base64.encodeByteArray($sha1$$.digest(), !0)
};
goog.storage.EncryptedStorage.prototype.encryptValue_ = function $goog$storage$EncryptedStorage$$encryptValue_$($arc4_salt$$, $key$$, $bytes$$4_value$$) {
  if(!(0 < $arc4_salt$$.length)) {
    throw Error("Non-empty salt must be provided");
  }
  var $sha1$$ = new goog.crypt.Sha1;
  $sha1$$.update(goog.crypt.stringToByteArray($key$$));
  $sha1$$.update($arc4_salt$$);
  $sha1$$.update(this.secret_);
  $arc4_salt$$ = new goog.crypt.Arc4;
  $arc4_salt$$.setKey($sha1$$.digest());
  $arc4_salt$$.discard(1536);
  $bytes$$4_value$$ = goog.crypt.stringToByteArray($bytes$$4_value$$);
  $arc4_salt$$.crypt($bytes$$4_value$$);
  return goog.crypt.byteArrayToString($bytes$$4_value$$)
};
goog.storage.EncryptedStorage.prototype.decryptValue_ = function $goog$storage$EncryptedStorage$$decryptValue_$($salt$$, $key$$, $value$$) {
  return this.encryptValue_($salt$$, $key$$, $value$$)
};
goog.storage.EncryptedStorage.prototype.set = function $goog$storage$EncryptedStorage$$set$($key$$, $value$$125_wrapper$$, $opt_expiration$$) {
  if(goog.isDef($value$$125_wrapper$$)) {
    for(var $salt$$ = [], $i$$ = 0;8 > $i$$;++$i$$) {
      $salt$$[$i$$] = Math.floor(256 * Math.random())
    }
    $value$$125_wrapper$$ = new goog.storage.RichStorage.Wrapper(this.encryptValue_($salt$$, $key$$, this.cleartextSerializer_.serialize($value$$125_wrapper$$)));
    $value$$125_wrapper$$[goog.storage.EncryptedStorage.SALT_KEY] = $salt$$;
    goog.storage.EncryptedStorage.superClass_.set.call(this, this.hashKeyWithSecret_($key$$), $value$$125_wrapper$$, $opt_expiration$$)
  }else {
    goog.storage.EncryptedStorage.prototype.remove.call(this, $key$$)
  }
};
goog.storage.EncryptedStorage.prototype.getWrapper = function $goog$storage$EncryptedStorage$$getWrapper$($key$$, $opt_expired$$) {
  var $wrapper$$ = goog.storage.EncryptedStorage.superClass_.getWrapper.call(this, this.hashKeyWithSecret_($key$$), $opt_expired$$);
  if($wrapper$$) {
    var $json$$1_value$$ = goog.storage.RichStorage.Wrapper.unwrap($wrapper$$), $salt$$ = $wrapper$$[goog.storage.EncryptedStorage.SALT_KEY];
    if(!goog.isString($json$$1_value$$) || !goog.isArray($salt$$) || !$salt$$.length) {
      throw goog.storage.ErrorCode.INVALID_VALUE;
    }
    $json$$1_value$$ = this.decryptValue_($salt$$, $key$$, $json$$1_value$$);
    try {
      $wrapper$$[goog.storage.RichStorage.DATA_KEY] = goog.json.parse($json$$1_value$$)
    }catch($e$$) {
      throw goog.storage.ErrorCode.DECRYPTION_ERROR;
    }
    return $wrapper$$
  }
};
goog.storage.EncryptedStorage.prototype.remove = function $goog$storage$EncryptedStorage$$remove$($key$$) {
  goog.storage.EncryptedStorage.superClass_.remove.call(this, this.hashKeyWithSecret_($key$$))
};
goog.storage.mechanism.ErrorCode = {INVALID_VALUE:"Storage mechanism: Invalid value was encountered", QUOTA_EXCEEDED:"Storage mechanism: Quota exceeded"};
goog.storage.mechanism.HTML5WebStorage = function $goog$storage$mechanism$HTML5WebStorage$($storage$$) {
  goog.storage.mechanism.IterableMechanism.call(this);
  this.storage_ = $storage$$
};
goog.inherits(goog.storage.mechanism.HTML5WebStorage, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.HTML5WebStorage.prototype.isAvailable = function $goog$storage$mechanism$HTML5WebStorage$$isAvailable$() {
  try {
    return!!this.storage_ && !!this.storage_.getItem
  }catch($e$$) {
  }
  return!1
};
goog.storage.mechanism.HTML5WebStorage.prototype.set = function $goog$storage$mechanism$HTML5WebStorage$$set$($key$$, $value$$) {
  try {
    this.storage_.setItem($key$$, $value$$)
  }catch($e$$) {
    throw goog.storage.mechanism.ErrorCode.QUOTA_EXCEEDED;
  }
};
goog.storage.mechanism.HTML5WebStorage.prototype.get = function $goog$storage$mechanism$HTML5WebStorage$$get$($key$$110_value$$) {
  $key$$110_value$$ = this.storage_.getItem($key$$110_value$$);
  if(!goog.isString($key$$110_value$$) && !goog.isNull($key$$110_value$$)) {
    throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
  }
  return $key$$110_value$$
};
goog.storage.mechanism.HTML5WebStorage.prototype.remove = function $goog$storage$mechanism$HTML5WebStorage$$remove$($key$$) {
  this.storage_.removeItem($key$$)
};
goog.storage.mechanism.HTML5WebStorage.prototype.getCount = function $goog$storage$mechanism$HTML5WebStorage$$getCount$() {
  return this.storage_.length
};
goog.storage.mechanism.HTML5WebStorage.prototype.__iterator__ = function $goog$storage$mechanism$HTML5WebStorage$$__iterator__$($opt_keys$$) {
  var $i$$ = 0, $storage$$ = this.storage_, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if($i$$ >= $storage$$.length) {
      throw goog.iter.StopIteration;
    }
    var $key$$112_value$$ = goog.asserts.assertString($storage$$.key($i$$++));
    if($opt_keys$$) {
      return $key$$112_value$$
    }
    $key$$112_value$$ = $storage$$.getItem($key$$112_value$$);
    if(!goog.isString($key$$112_value$$)) {
      throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
    }
    return $key$$112_value$$
  };
  return $newIter$$
};
goog.storage.mechanism.HTML5WebStorage.prototype.clear = function $goog$storage$mechanism$HTML5WebStorage$$clear$() {
  this.storage_.clear()
};
goog.storage.mechanism.HTML5LocalStorage = function $goog$storage$mechanism$HTML5LocalStorage$() {
  var $storage$$ = null;
  try {
    $storage$$ = window.localStorage || null
  }catch($e$$) {
  }
  goog.storage.mechanism.HTML5WebStorage.call(this, $storage$$)
};
goog.inherits(goog.storage.mechanism.HTML5LocalStorage, goog.storage.mechanism.HTML5WebStorage);
goog.storage.mechanism.HTML5SessionStorage = function $goog$storage$mechanism$HTML5SessionStorage$() {
  var $storage$$ = null;
  try {
    $storage$$ = window.sessionStorage || null
  }catch($e$$) {
  }
  goog.storage.mechanism.HTML5WebStorage.call(this, $storage$$)
};
goog.inherits(goog.storage.mechanism.HTML5SessionStorage, goog.storage.mechanism.HTML5WebStorage);
goog.storage.mechanism.IEUserData = function $goog$storage$mechanism$IEUserData$($storageKey$$, $opt_storageNodeId$$) {
  goog.storage.mechanism.IterableMechanism.call(this);
  if(goog.userAgent.IE && !goog.userAgent.isDocumentMode(9)) {
    goog.storage.mechanism.IEUserData.storageMap_ || (goog.storage.mechanism.IEUserData.storageMap_ = new goog.structs.Map);
    this.storageNode_ = goog.storage.mechanism.IEUserData.storageMap_.get($storageKey$$);
    this.storageNode_ || ($opt_storageNodeId$$ ? this.storageNode_ = document.getElementById($opt_storageNodeId$$) : (this.storageNode_ = document.createElement("userdata"), this.storageNode_.addBehavior("#default#userData"), document.body.appendChild(this.storageNode_)), goog.storage.mechanism.IEUserData.storageMap_.set($storageKey$$, this.storageNode_));
    this.storageKey_ = $storageKey$$;
    try {
      this.loadNode_()
    }catch($e$$) {
      this.storageNode_ = null
    }
  }
};
goog.inherits(goog.storage.mechanism.IEUserData, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.IEUserData.ENCODE_MAP = {".":".2E", "!":".21", "~":".7E", "*":".2A", "'":".27", "(":".28", ")":".29", "%":"."};
goog.storage.mechanism.IEUserData.storageMap_ = null;
goog.storage.mechanism.IEUserData.prototype.storageNode_ = null;
goog.storage.mechanism.IEUserData.prototype.storageKey_ = null;
goog.storage.mechanism.IEUserData.encodeKey_ = function $goog$storage$mechanism$IEUserData$encodeKey_$($key$$) {
  return"_" + encodeURIComponent($key$$).replace(/[.!~*'()%]/g, function($c$$) {
    return goog.storage.mechanism.IEUserData.ENCODE_MAP[$c$$]
  })
};
goog.storage.mechanism.IEUserData.decodeKey_ = function $goog$storage$mechanism$IEUserData$decodeKey_$($key$$) {
  return decodeURIComponent($key$$.replace(/\./g, "%")).substr(1)
};
goog.storage.mechanism.IEUserData.prototype.isAvailable = function $goog$storage$mechanism$IEUserData$$isAvailable$() {
  return!!this.storageNode_
};
goog.storage.mechanism.IEUserData.prototype.set = function $goog$storage$mechanism$IEUserData$$set$($key$$, $value$$) {
  this.storageNode_.setAttribute(goog.storage.mechanism.IEUserData.encodeKey_($key$$), $value$$);
  this.saveNode_()
};
goog.storage.mechanism.IEUserData.prototype.get = function $goog$storage$mechanism$IEUserData$$get$($key$$116_value$$) {
  $key$$116_value$$ = this.storageNode_.getAttribute(goog.storage.mechanism.IEUserData.encodeKey_($key$$116_value$$));
  if(!goog.isString($key$$116_value$$) && !goog.isNull($key$$116_value$$)) {
    throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
  }
  return $key$$116_value$$
};
goog.storage.mechanism.IEUserData.prototype.remove = function $goog$storage$mechanism$IEUserData$$remove$($key$$) {
  this.storageNode_.removeAttribute(goog.storage.mechanism.IEUserData.encodeKey_($key$$));
  this.saveNode_()
};
goog.storage.mechanism.IEUserData.prototype.getCount = function $goog$storage$mechanism$IEUserData$$getCount$() {
  return this.getNode_().attributes.length
};
goog.storage.mechanism.IEUserData.prototype.__iterator__ = function $goog$storage$mechanism$IEUserData$$__iterator__$($opt_keys$$) {
  var $i$$ = 0, $attributes$$ = this.getNode_().attributes, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    if($i$$ >= $attributes$$.length) {
      throw goog.iter.StopIteration;
    }
    var $item$$41_value$$ = goog.asserts.assert($attributes$$[$i$$++]);
    if($opt_keys$$) {
      return goog.storage.mechanism.IEUserData.decodeKey_($item$$41_value$$.nodeName)
    }
    $item$$41_value$$ = $item$$41_value$$.nodeValue;
    if(!goog.isString($item$$41_value$$)) {
      throw goog.storage.mechanism.ErrorCode.INVALID_VALUE;
    }
    return $item$$41_value$$
  };
  return $newIter$$
};
goog.storage.mechanism.IEUserData.prototype.clear = function $goog$storage$mechanism$IEUserData$$clear$() {
  for(var $node$$ = this.getNode_(), $left$$ = $node$$.attributes.length;0 < $left$$;$left$$--) {
    $node$$.removeAttribute($node$$.attributes[$left$$ - 1].nodeName)
  }
  this.saveNode_()
};
goog.storage.mechanism.IEUserData.prototype.loadNode_ = function $goog$storage$mechanism$IEUserData$$loadNode_$() {
  this.storageNode_.load(this.storageKey_)
};
goog.storage.mechanism.IEUserData.prototype.saveNode_ = function $goog$storage$mechanism$IEUserData$$saveNode_$() {
  try {
    this.storageNode_.save(this.storageKey_)
  }catch($e$$) {
    throw goog.storage.mechanism.ErrorCode.QUOTA_EXCEEDED;
  }
};
goog.storage.mechanism.IEUserData.prototype.getNode_ = function $goog$storage$mechanism$IEUserData$$getNode_$() {
  return this.storageNode_.XMLDocument.documentElement
};
goog.storage.mechanism.PrefixedMechanism = function $goog$storage$mechanism$PrefixedMechanism$($mechanism$$, $prefix$$) {
  goog.storage.mechanism.IterableMechanism.call(this);
  this.mechanism_ = $mechanism$$;
  this.prefix_ = $prefix$$ + "::"
};
goog.inherits(goog.storage.mechanism.PrefixedMechanism, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.PrefixedMechanism.prototype.mechanism_ = null;
goog.storage.mechanism.PrefixedMechanism.prototype.prefix_ = "";
goog.storage.mechanism.PrefixedMechanism.prototype.set = function $goog$storage$mechanism$PrefixedMechanism$$set$($key$$, $value$$) {
  this.mechanism_.set(this.prefix_ + $key$$, $value$$)
};
goog.storage.mechanism.PrefixedMechanism.prototype.get = function $goog$storage$mechanism$PrefixedMechanism$$get$($key$$) {
  return this.mechanism_.get(this.prefix_ + $key$$)
};
goog.storage.mechanism.PrefixedMechanism.prototype.remove = function $goog$storage$mechanism$PrefixedMechanism$$remove$($key$$) {
  this.mechanism_.remove(this.prefix_ + $key$$)
};
goog.storage.mechanism.PrefixedMechanism.prototype.__iterator__ = function $goog$storage$mechanism$PrefixedMechanism$$__iterator__$($opt_keys$$) {
  var $subIter$$ = this.mechanism_.__iterator__(!0), $selfObj$$ = this, $newIter$$ = new goog.iter.Iterator;
  $newIter$$.next = function $$newIter$$$next$() {
    for(var $key$$ = $subIter$$.next();$key$$.substr(0, $selfObj$$.prefix_.length) != $selfObj$$.prefix_;) {
      $key$$ = $subIter$$.next()
    }
    return $opt_keys$$ ? $key$$.substr($selfObj$$.prefix_.length) : $selfObj$$.mechanism_.get($key$$)
  };
  return $newIter$$
};
goog.storage.mechanism.mechanismfactory = {};
goog.storage.mechanism.mechanismfactory.USER_DATA_SHARED_KEY = "UserDataSharedStore";
goog.storage.mechanism.mechanismfactory.create = function $goog$storage$mechanism$mechanismfactory$create$($opt_namespace$$) {
  var $factory$$ = goog.storage.mechanism.mechanismfactory;
  return $factory$$.createHTML5LocalStorage($opt_namespace$$) || $factory$$.createIEUserData($opt_namespace$$)
};
goog.storage.mechanism.mechanismfactory.createHTML5LocalStorage = function $goog$storage$mechanism$mechanismfactory$createHTML5LocalStorage$($opt_namespace$$) {
  var $storage$$ = new goog.storage.mechanism.HTML5LocalStorage;
  return $storage$$.isAvailable() ? $opt_namespace$$ ? new goog.storage.mechanism.PrefixedMechanism($storage$$, $opt_namespace$$) : $storage$$ : null
};
goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage = function $goog$storage$mechanism$mechanismfactory$createHTML5SessionStorage$($opt_namespace$$) {
  var $storage$$ = new goog.storage.mechanism.HTML5SessionStorage;
  return $storage$$.isAvailable() ? $opt_namespace$$ ? new goog.storage.mechanism.PrefixedMechanism($storage$$, $opt_namespace$$) : $storage$$ : null
};
goog.storage.mechanism.mechanismfactory.createIEUserData = function $goog$storage$mechanism$mechanismfactory$createIEUserData$($opt_namespace$$3_storage$$) {
  $opt_namespace$$3_storage$$ = new goog.storage.mechanism.IEUserData($opt_namespace$$3_storage$$ || goog.storage.mechanism.mechanismfactory.USER_DATA_SHARED_KEY);
  return $opt_namespace$$3_storage$$.isAvailable() ? $opt_namespace$$3_storage$$ : null
};
texthelp.webreader.UserSettingsSingleton = function $texthelp$webreader$UserSettingsSingleton$() {
  try {
    this.m_userSettingsHelper = (new texthelp.webreader.UserSettingsFactory).getUserSettingsHelper(), this.m_mechanism = goog.storage.mechanism.mechanismfactory.create("thrwfgd"), this.m_localStorage = new goog.storage.EncryptedStorage(this.m_mechanism, "thrwfgds")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.addSingletonGetter(texthelp.webreader.UserSettingsSingleton);
texthelp.webreader.UserSettingsSingleton.prototype.getUserSettings = function $texthelp$webreader$UserSettingsSingleton$$getUserSettings$() {
  try {
    var $localStorageKey$$ = this.m_userSettingsHelper.getKey(), $localStorageValue$$ = this.m_localStorage.get($localStorageKey$$);
    if(null === $localStorageValue$$ || void 0 === $localStorageValue$$) {
      var $defaultSettings$$ = this.m_userSettingsHelper.getUserSettings(), $locale$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().getLocale(), $config$$ = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration(), $defaultTransLang$$ = $config$$[$locale$$].transLang, $defaultTransSource$$ = $config$$[$locale$$].transsource;
      $defaultSettings$$.speechoptions.voice = $config$$[$locale$$].voice;
      $defaultSettings$$.translator.translang = $defaultTransLang$$;
      $defaultSettings$$.translator.transsource = $defaultTransSource$$;
      this.saveUserSettings($defaultSettings$$);
      return $defaultSettings$$
    }
    return goog.json.parse(this.m_localStorage.get($localStorageKey$$))
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
texthelp.webreader.UserSettingsSingleton.prototype.saveUserSettings = function $texthelp$webreader$UserSettingsSingleton$$saveUserSettings$($userSettings$$) {
  try {
    if(null !== $userSettings$$) {
      var $JSONSerializer$$ = new goog.json.Serializer, $localStorageKey$$ = this.m_userSettingsHelper.getKey();
      null !== $localStorageKey$$ && this.m_localStorage.set($localStorageKey$$, $JSONSerializer$$.serialize($userSettings$$))
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.exportSymbol("texthelp.webreader.UserSettingsSingleton", texthelp.webreader.UserSettingsSingleton);
goog.exportProperty(texthelp.webreader.UserSettingsSingleton.prototype, "getUserSettings", texthelp.webreader.UserSettingsSingleton.prototype.getUserSettings);
goog.exportProperty(texthelp.webreader.UserSettingsSingleton.prototype, "saveUserSettings", texthelp.webreader.UserSettingsSingleton.prototype.saveUserSettings);
goog.module.ModuleManager.getInstance().setLoaded("Configuration");
}})(__textHelp__);
//@ sourceURL=chrome-extension://chfpnoffckhdeckmacafcjanjcbfghpa/src/textHelp_Configuration.js