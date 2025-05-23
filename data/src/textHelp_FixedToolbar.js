(function(a){with(a){
texthelp.webreader.WebReaderApp.prototype.translateCurrentWord = JSCompiler_unstubMethod(16, function($callback$$) {
  try {
    if(null === this.m_webReaderAPI) {
      throw Error("The WebReaderAPI has not been created");
    }
    return this.m_webReaderAPI.translateCurrentWord($callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
});
goog.ui.Menu.prototype.getItemAt = JSCompiler_unstubMethod(14, function($n$$) {
  return this.getChildAt($n$$)
});
goog.ui.Dialog.prototype.setHasTitleCloseButton = JSCompiler_unstubMethod(13, function($b$$) {
  this.hasTitleCloseButton_ = $b$$;
  this.titleCloseEl_ && goog.style.showElement(this.titleCloseEl_, this.hasTitleCloseButton_)
});
texthelp.webreader.WebReaderApp.prototype.pictureDictionaryCurrentWord = JSCompiler_unstubMethod(11, function($callback$$) {
  try {
    if(null === this.m_webReaderAPI) {
      throw Error("The WebReaderAPI has not been created");
    }
    return this.m_webReaderAPI.pictureDictionaryCurrentWord($callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
});
goog.ui.PopupBase.prototype.getType = JSCompiler_unstubMethod(10, function() {
  return this.type_
});
texthelp.webreader.WebReaderApp.prototype.dictionaryCurrentWord = JSCompiler_unstubMethod(8, function($callback$$) {
  try {
    if(null === this.m_webReaderAPI) {
      throw Error("The WebReaderAPI has not been created");
    }
    return this.m_webReaderAPI.dictionaryCurrentWord($callback$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
});
goog.ui.Menu.prototype.getItemCount = JSCompiler_unstubMethod(7, function() {
  return this.getChildCount()
});
goog.ui.MenuRenderer.prototype.containsElement = JSCompiler_unstubMethod(5, function($menu$$, $element$$) {
  return goog.dom.contains($menu$$.getElement(), $element$$)
});
goog.ui.Menu.prototype.containsElement = JSCompiler_unstubMethod(4, function($element$$) {
  if(this.getRenderer().containsElement(this, $element$$)) {
    return!0
  }
  for(var $i$$ = 0, $count$$ = this.getChildCount();$i$$ < $count$$;$i$$++) {
    var $child$$ = this.getChildAt($i$$);
    if("function" == typeof $child$$.containsElement && $child$$.containsElement($element$$)) {
      return!0
    }
  }
  return!1
});
goog.ui.Dialog.prototype.setPreferredAriaRole = JSCompiler_unstubMethod(3, function($role$$) {
  this.preferredAriaRole_ = $role$$
});
goog.ui.Control.prototype.setPreferredAriaRole = JSCompiler_unstubMethod(2, function($role$$) {
  this.preferredAriaRole_ = $role$$
});
goog.ui.Menu.prototype.addItemAt = JSCompiler_unstubMethod(1, function($item$$, $n$$) {
  this.addChildAt($item$$, $n$$, !0)
});
goog.ui.Dialog.prototype.setTitle = JSCompiler_unstubMethod(0, function($title$$) {
  this.title_ = $title$$;
  this.titleTextEl_ && goog.dom.setTextContent(this.titleTextEl_, $title$$)
});
goog.positioning.ViewportPosition = function $goog$positioning$ViewportPosition$($arg1$$, $opt_arg2$$) {
  this.coordinate = $arg1$$ instanceof goog.math.Coordinate ? $arg1$$ : new goog.math.Coordinate($arg1$$, $opt_arg2$$)
};
goog.inherits(goog.positioning.ViewportPosition, goog.positioning.AbstractPosition);
goog.positioning.ViewportPosition.prototype.reposition = function $goog$positioning$ViewportPosition$$reposition$($element$$, $popupCorner$$, $opt_margin$$, $opt_preferredSize$$) {
  goog.positioning.positionAtAnchor(goog.style.getClientViewportElement($element$$), goog.positioning.Corner.TOP_LEFT, $element$$, $popupCorner$$, this.coordinate, $opt_margin$$, null, $opt_preferredSize$$)
};
goog.positioning.AbsolutePosition = function $goog$positioning$AbsolutePosition$($arg1$$, $opt_arg2$$) {
  this.coordinate = $arg1$$ instanceof goog.math.Coordinate ? $arg1$$ : new goog.math.Coordinate($arg1$$, $opt_arg2$$)
};
goog.inherits(goog.positioning.AbsolutePosition, goog.positioning.AbstractPosition);
goog.positioning.AbsolutePosition.prototype.reposition = function $goog$positioning$AbsolutePosition$$reposition$($movableElement$$, $movableCorner$$, $opt_margin$$, $opt_preferredSize$$) {
  goog.positioning.positionAtCoordinate(this.coordinate, $movableElement$$, $movableCorner$$, $opt_margin$$, null, null, $opt_preferredSize$$)
};
goog.positioning.ClientPosition = function $goog$positioning$ClientPosition$($arg1$$, $opt_arg2$$) {
  this.coordinate = $arg1$$ instanceof goog.math.Coordinate ? $arg1$$ : new goog.math.Coordinate($arg1$$, $opt_arg2$$)
};
goog.inherits(goog.positioning.ClientPosition, goog.positioning.AbstractPosition);
goog.positioning.ClientPosition.prototype.reposition = function $goog$positioning$ClientPosition$$reposition$($movableElement$$, $movableElementCorner$$, $opt_margin$$, $opt_preferredSize$$) {
  goog.asserts.assert($movableElement$$);
  var $viewportOffset_y$$ = goog.style.getViewportPageOffset(goog.dom.getOwnerDocument($movableElement$$)), $x$$ = this.coordinate.x + $viewportOffset_y$$.x, $viewportOffset_y$$ = this.coordinate.y + $viewportOffset_y$$.y, $movableParentTopLeft$$ = goog.positioning.getOffsetParentPageOffset($movableElement$$), $x$$ = $x$$ - $movableParentTopLeft$$.x, $viewportOffset_y$$ = $viewportOffset_y$$ - $movableParentTopLeft$$.y;
  goog.positioning.positionAtCoordinate(new goog.math.Coordinate($x$$, $viewportOffset_y$$), $movableElement$$, $movableElementCorner$$, $opt_margin$$, null, null, $opt_preferredSize$$)
};
goog.positioning.ViewportClientPosition = function $goog$positioning$ViewportClientPosition$($arg1$$, $opt_arg2$$) {
  goog.positioning.ClientPosition.call(this, $arg1$$, $opt_arg2$$)
};
goog.inherits(goog.positioning.ViewportClientPosition, goog.positioning.ClientPosition);
goog.positioning.ViewportClientPosition.prototype.lastResortOverflow_ = 0;
goog.positioning.ViewportClientPosition.prototype.setLastResortOverflow = function $goog$positioning$ViewportClientPosition$$setLastResortOverflow$($overflow$$) {
  this.lastResortOverflow_ = $overflow$$
};
goog.positioning.ViewportClientPosition.prototype.reposition = function $goog$positioning$ViewportClientPosition$$reposition$($element$$, $popupCorner$$, $opt_margin$$, $opt_preferredSize$$) {
  var $viewport$$ = goog.style.getClientViewportElement($element$$), $viewport$$ = goog.style.getVisibleRectForElement($viewport$$), $clientPos_scrollEl$$ = goog.dom.getDomHelper($element$$).getDocumentScrollElement(), $clientPos_scrollEl$$ = new goog.math.Coordinate(this.coordinate.x + $clientPos_scrollEl$$.scrollLeft, this.coordinate.y + $clientPos_scrollEl$$.scrollTop), $failXY$$ = goog.positioning.Overflow.FAIL_X | goog.positioning.Overflow.FAIL_Y, $corner$$ = $popupCorner$$, $status$$ = goog.positioning.positionAtCoordinate($clientPos_scrollEl$$, 
  $element$$, $corner$$, $opt_margin$$, $viewport$$, $failXY$$, $opt_preferredSize$$);
  if(0 != ($status$$ & goog.positioning.OverflowStatus.FAILED)) {
    if($status$$ & goog.positioning.OverflowStatus.FAILED_LEFT || $status$$ & goog.positioning.OverflowStatus.FAILED_RIGHT) {
      $corner$$ = goog.positioning.flipCornerHorizontal($corner$$)
    }
    if($status$$ & goog.positioning.OverflowStatus.FAILED_TOP || $status$$ & goog.positioning.OverflowStatus.FAILED_BOTTOM) {
      $corner$$ = goog.positioning.flipCornerVertical($corner$$)
    }
    $status$$ = goog.positioning.positionAtCoordinate($clientPos_scrollEl$$, $element$$, $corner$$, $opt_margin$$, $viewport$$, $failXY$$, $opt_preferredSize$$);
    0 != ($status$$ & goog.positioning.OverflowStatus.FAILED) && goog.positioning.positionAtCoordinate($clientPos_scrollEl$$, $element$$, $popupCorner$$, $opt_margin$$, $viewport$$, this.lastResortOverflow_, $opt_preferredSize$$)
  }
};
goog.ui.Popup = function $goog$ui$Popup$($opt_element$$, $opt_position$$) {
  this.popupCorner_ = goog.positioning.Corner.TOP_START;
  this.position_ = $opt_position$$ || void 0;
  goog.ui.PopupBase.call(this, $opt_element$$)
};
goog.inherits(goog.ui.Popup, goog.ui.PopupBase);
goog.ui.Popup.Corner = goog.positioning.Corner;
goog.ui.Popup.Overflow = goog.positioning.Overflow;
goog.ui.Popup.prototype.getPinnedCorner = function $goog$ui$Popup$$getPinnedCorner$() {
  return this.popupCorner_
};
goog.ui.Popup.prototype.setPinnedCorner = function $goog$ui$Popup$$setPinnedCorner$($corner$$) {
  this.popupCorner_ = $corner$$;
  this.isVisible() && this.reposition()
};
goog.ui.Popup.prototype.getPosition = function $goog$ui$Popup$$getPosition$() {
  return this.position_ || null
};
goog.ui.Popup.prototype.setPosition = function $goog$ui$Popup$$setPosition$($position$$) {
  this.position_ = $position$$ || void 0;
  this.isVisible() && this.reposition()
};
goog.ui.Popup.prototype.getMargin = function $goog$ui$Popup$$getMargin$() {
  return this.margin_ || null
};
goog.ui.Popup.prototype.setMargin = function $goog$ui$Popup$$setMargin$($arg1$$, $opt_arg2$$, $opt_arg3$$, $opt_arg4$$) {
  this.margin_ = null == $arg1$$ || $arg1$$ instanceof goog.math.Box ? $arg1$$ : new goog.math.Box($arg1$$, $opt_arg2$$, $opt_arg3$$, $opt_arg4$$);
  this.isVisible() && this.reposition()
};
goog.ui.Popup.prototype.reposition = function $goog$ui$Popup$$reposition$() {
  if(this.position_) {
    var $hideForPositioning$$ = !this.isVisible() && this.getType() != goog.ui.PopupBase.Type.MOVE_OFFSCREEN, $el$$ = this.getElement();
    $hideForPositioning$$ && ($el$$.style.visibility = "hidden", goog.style.showElement($el$$, !0));
    this.position_.reposition($el$$, this.popupCorner_, this.margin_);
    $hideForPositioning$$ && goog.style.showElement($el$$, !1)
  }
};
goog.ui.Popup.AnchoredPosition = goog.positioning.AnchoredPosition;
goog.ui.Popup.AnchoredViewPortPosition = goog.positioning.AnchoredViewportPosition;
goog.ui.Popup.AbsolutePosition = goog.positioning.AbsolutePosition;
goog.ui.Popup.ViewPortPosition = goog.positioning.ViewportPosition;
goog.ui.Popup.ClientPosition = goog.positioning.ClientPosition;
goog.ui.Popup.ViewPortClientPosition = goog.positioning.ViewportClientPosition;
goog.ui.Tooltip = function $goog$ui$Tooltip$($opt_el$$, $opt_str$$, $opt_domHelper$$) {
  this.dom_ = $opt_domHelper$$ || ($opt_el$$ ? goog.dom.getDomHelper(goog.dom.getElement($opt_el$$)) : goog.dom.getDomHelper());
  goog.ui.Popup.call(this, this.dom_.createDom("div", {style:"position:absolute;display:none;"}));
  this.cursorPosition = new goog.math.Coordinate(1, 1);
  this.elements_ = new goog.structs.Set;
  $opt_el$$ && this.attach($opt_el$$);
  null != $opt_str$$ && this.setText($opt_str$$)
};
goog.inherits(goog.ui.Tooltip, goog.ui.Popup);
goog.ui.Tooltip.activeInstances_ = [];
goog.ui.Tooltip.prototype.activeEl_ = null;
goog.ui.Tooltip.prototype.className = "goog-tooltip";
goog.ui.Tooltip.prototype.showDelayMs_ = 500;
goog.ui.Tooltip.prototype.hideDelayMs_ = 0;
goog.ui.Tooltip.State = {INACTIVE:0, WAITING_TO_SHOW:1, SHOWING:2, WAITING_TO_HIDE:3, UPDATING:4};
goog.ui.Tooltip.Activation = {CURSOR:0, FOCUS:1};
goog.ui.Tooltip.prototype.getDomHelper = function $goog$ui$Tooltip$$getDomHelper$() {
  return this.dom_
};
goog.ui.Tooltip.prototype.getChildTooltip = function $goog$ui$Tooltip$$getChildTooltip$() {
  return this.childTooltip_
};
goog.ui.Tooltip.prototype.attach = function $goog$ui$Tooltip$$attach$($el$$) {
  $el$$ = goog.dom.getElement($el$$);
  this.elements_.add($el$$);
  goog.events.listen($el$$, goog.events.EventType.MOUSEOVER, this.handleMouseOver, !1, this);
  goog.events.listen($el$$, goog.events.EventType.MOUSEOUT, this.handleMouseOutAndBlur, !1, this);
  goog.events.listen($el$$, goog.events.EventType.MOUSEMOVE, this.handleMouseMove, !1, this);
  goog.events.listen($el$$, goog.events.EventType.FOCUS, this.handleFocus, !1, this);
  goog.events.listen($el$$, goog.events.EventType.BLUR, this.handleMouseOutAndBlur, !1, this)
};
goog.ui.Tooltip.prototype.detach = function $goog$ui$Tooltip$$detach$($el$$34_opt_el$$) {
  if($el$$34_opt_el$$) {
    $el$$34_opt_el$$ = goog.dom.getElement($el$$34_opt_el$$), this.detachElement_($el$$34_opt_el$$), this.elements_.remove($el$$34_opt_el$$)
  }else {
    for(var $a$$ = this.elements_.getValues(), $i$$ = 0;$el$$34_opt_el$$ = $a$$[$i$$];$i$$++) {
      this.detachElement_($el$$34_opt_el$$)
    }
    this.elements_.clear()
  }
};
goog.ui.Tooltip.prototype.detachElement_ = function $goog$ui$Tooltip$$detachElement_$($el$$) {
  goog.events.unlisten($el$$, goog.events.EventType.MOUSEOVER, this.handleMouseOver, !1, this);
  goog.events.unlisten($el$$, goog.events.EventType.MOUSEOUT, this.handleMouseOutAndBlur, !1, this);
  goog.events.unlisten($el$$, goog.events.EventType.MOUSEMOVE, this.handleMouseMove, !1, this);
  goog.events.unlisten($el$$, goog.events.EventType.FOCUS, this.handleFocus, !1, this);
  goog.events.unlisten($el$$, goog.events.EventType.BLUR, this.handleMouseOutAndBlur, !1, this)
};
goog.ui.Tooltip.prototype.setShowDelayMs = function $goog$ui$Tooltip$$setShowDelayMs$($delay$$) {
  this.showDelayMs_ = $delay$$
};
goog.ui.Tooltip.prototype.getShowDelayMs = function $goog$ui$Tooltip$$getShowDelayMs$() {
  return this.showDelayMs_
};
goog.ui.Tooltip.prototype.setHideDelayMs = function $goog$ui$Tooltip$$setHideDelayMs$($delay$$) {
  this.hideDelayMs_ = $delay$$
};
goog.ui.Tooltip.prototype.getHideDelayMs = function $goog$ui$Tooltip$$getHideDelayMs$() {
  return this.hideDelayMs_
};
goog.ui.Tooltip.prototype.setText = function $goog$ui$Tooltip$$setText$($str$$) {
  goog.dom.setTextContent(this.getElement(), $str$$)
};
goog.ui.Tooltip.prototype.setHtml = function $goog$ui$Tooltip$$setHtml$($str$$) {
  this.getElement().innerHTML = $str$$
};
goog.ui.Tooltip.prototype.setElement = function $goog$ui$Tooltip$$setElement$($el$$) {
  var $body$$ = this.getElement();
  $body$$ && goog.dom.removeNode($body$$);
  goog.ui.Tooltip.superClass_.setElement.call(this, $el$$);
  $el$$ && ($body$$ = this.dom_.getDocument().body, $body$$.insertBefore($el$$, $body$$.lastChild))
};
goog.ui.Tooltip.prototype.getText = function $goog$ui$Tooltip$$getText$() {
  return goog.dom.getTextContent(this.getElement())
};
goog.ui.Tooltip.prototype.getHtml = function $goog$ui$Tooltip$$getHtml$() {
  return this.getElement().innerHTML
};
goog.ui.Tooltip.prototype.getState = function $goog$ui$Tooltip$$getState$() {
  return this.showTimer ? this.isVisible() ? goog.ui.Tooltip.State.UPDATING : goog.ui.Tooltip.State.WAITING_TO_SHOW : this.hideTimer ? goog.ui.Tooltip.State.WAITING_TO_HIDE : this.isVisible() ? goog.ui.Tooltip.State.SHOWING : goog.ui.Tooltip.State.INACTIVE
};
goog.ui.Tooltip.prototype.setRequireInteraction = function $goog$ui$Tooltip$$setRequireInteraction$($requireInteraction$$) {
  this.requireInteraction_ = $requireInteraction$$
};
goog.ui.Tooltip.prototype.isCoordinateInTooltip = function $goog$ui$Tooltip$$isCoordinateInTooltip$($coord$$) {
  if(!this.isVisible()) {
    return!1
  }
  var $offset$$ = goog.style.getPageOffset(this.getElement()), $size$$ = goog.style.getSize(this.getElement());
  return $offset$$.x <= $coord$$.x && $coord$$.x <= $offset$$.x + $size$$.width && $offset$$.y <= $coord$$.y && $coord$$.y <= $offset$$.y + $size$$.height
};
goog.ui.Tooltip.prototype.onBeforeShow = function $goog$ui$Tooltip$$onBeforeShow$() {
  if(!goog.ui.PopupBase.prototype.onBeforeShow.call(this)) {
    return!1
  }
  if(this.anchor) {
    for(var $element$$, $i$$ = 0;$element$$ = goog.ui.Tooltip.activeInstances_[$i$$];$i$$++) {
      goog.dom.contains($element$$.getElement(), this.anchor) || $element$$.setVisible(!1)
    }
  }
  goog.array.insert(goog.ui.Tooltip.activeInstances_, this);
  $element$$ = this.getElement();
  $element$$.className = this.className;
  this.clearHideTimer();
  goog.events.listen($element$$, goog.events.EventType.MOUSEOVER, this.handleTooltipMouseOver, !1, this);
  goog.events.listen($element$$, goog.events.EventType.MOUSEOUT, this.handleTooltipMouseOut, !1, this);
  this.clearShowTimer();
  return!0
};
goog.ui.Tooltip.prototype.onHide_ = function $goog$ui$Tooltip$$onHide_$() {
  goog.array.remove(goog.ui.Tooltip.activeInstances_, this);
  for(var $element$$ = this.getElement(), $tt$$, $i$$ = 0;$tt$$ = goog.ui.Tooltip.activeInstances_[$i$$];$i$$++) {
    $tt$$.anchor && goog.dom.contains($element$$, $tt$$.anchor) && $tt$$.setVisible(!1)
  }
  this.parentTooltip_ && this.parentTooltip_.startHideTimer();
  goog.events.unlisten($element$$, goog.events.EventType.MOUSEOVER, this.handleTooltipMouseOver, !1, this);
  goog.events.unlisten($element$$, goog.events.EventType.MOUSEOUT, this.handleTooltipMouseOut, !1, this);
  this.anchor = void 0;
  this.getState() == goog.ui.Tooltip.State.INACTIVE && (this.seenInteraction_ = !1);
  goog.ui.PopupBase.prototype.onHide_.call(this)
};
goog.ui.Tooltip.prototype.maybeShow = function $goog$ui$Tooltip$$maybeShow$($el$$, $opt_pos$$) {
  this.anchor == $el$$ && this.elements_.contains(this.anchor) && (this.seenInteraction_ || !this.requireInteraction_ ? (this.setVisible(!1), this.isVisible() || this.positionAndShow_($el$$, $opt_pos$$)) : this.anchor = void 0);
  this.showTimer = void 0
};
goog.ui.Tooltip.prototype.getElements = function $goog$ui$Tooltip$$getElements$() {
  return this.elements_
};
goog.ui.Tooltip.prototype.getActiveElement = function $goog$ui$Tooltip$$getActiveElement$() {
  return this.activeEl_
};
goog.ui.Tooltip.prototype.setActiveElement = function $goog$ui$Tooltip$$setActiveElement$($activeEl$$) {
  this.activeEl_ = $activeEl$$
};
goog.ui.Tooltip.prototype.showForElement = function $goog$ui$Tooltip$$showForElement$($el$$, $opt_pos$$) {
  this.attach($el$$);
  this.activeEl_ = $el$$;
  this.positionAndShow_($el$$, $opt_pos$$)
};
goog.ui.Tooltip.prototype.positionAndShow_ = function $goog$ui$Tooltip$$positionAndShow_$($el$$, $opt_pos$$) {
  this.anchor = $el$$;
  this.setPosition($opt_pos$$ || this.getPositioningStrategy(goog.ui.Tooltip.Activation.CURSOR));
  this.setVisible(!0)
};
goog.ui.Tooltip.prototype.maybeHide = function $goog$ui$Tooltip$$maybeHide$($el$$) {
  this.hideTimer = void 0;
  $el$$ == this.anchor && (null == this.activeEl_ || this.activeEl_ != this.getElement() && !this.elements_.contains(this.activeEl_)) && !this.hasActiveChild() && this.setVisible(!1)
};
goog.ui.Tooltip.prototype.hasActiveChild = function $goog$ui$Tooltip$$hasActiveChild$() {
  return!(!this.childTooltip_ || !this.childTooltip_.activeEl_)
};
goog.ui.Tooltip.prototype.saveCursorPosition_ = function $goog$ui$Tooltip$$saveCursorPosition_$($event$$) {
  var $scroll$$ = this.dom_.getDocumentScroll();
  this.cursorPosition.x = $event$$.clientX + $scroll$$.x;
  this.cursorPosition.y = $event$$.clientY + $scroll$$.y
};
goog.ui.Tooltip.prototype.handleMouseOver = function $goog$ui$Tooltip$$handleMouseOver$($event$$) {
  var $el$$ = this.getAnchorFromElement($event$$.target);
  this.activeEl_ = $el$$;
  this.clearHideTimer();
  $el$$ != this.anchor && (this.anchor = $el$$, this.startShowTimer($el$$), this.checkForParentTooltip_(), this.saveCursorPosition_($event$$))
};
goog.ui.Tooltip.prototype.getAnchorFromElement = function $goog$ui$Tooltip$$getAnchorFromElement$($el$$) {
  try {
    for(;$el$$ && !this.elements_.contains($el$$);) {
      $el$$ = $el$$.parentNode
    }
    return $el$$
  }catch($e$$) {
    return null
  }
};
goog.ui.Tooltip.prototype.handleMouseMove = function $goog$ui$Tooltip$$handleMouseMove$($event$$) {
  this.saveCursorPosition_($event$$);
  this.seenInteraction_ = !0
};
goog.ui.Tooltip.prototype.handleFocus = function $goog$ui$Tooltip$$handleFocus$($el$$43_event$$) {
  this.activeEl_ = $el$$43_event$$ = this.getAnchorFromElement($el$$43_event$$.target);
  this.seenInteraction_ = !0;
  if(this.anchor != $el$$43_event$$) {
    this.anchor = $el$$43_event$$;
    var $pos$$ = this.getPositioningStrategy(goog.ui.Tooltip.Activation.FOCUS);
    this.clearHideTimer();
    this.startShowTimer($el$$43_event$$, $pos$$);
    this.checkForParentTooltip_()
  }
};
goog.ui.Tooltip.prototype.getPositioningStrategy = function $goog$ui$Tooltip$$getPositioningStrategy$($activationType_coord$$) {
  return $activationType_coord$$ == goog.ui.Tooltip.Activation.CURSOR ? ($activationType_coord$$ = this.cursorPosition.clone(), new goog.ui.Tooltip.CursorTooltipPosition($activationType_coord$$)) : new goog.ui.Tooltip.ElementTooltipPosition(this.activeEl_)
};
goog.ui.Tooltip.prototype.checkForParentTooltip_ = function $goog$ui$Tooltip$$checkForParentTooltip_$() {
  if(this.anchor) {
    for(var $tt$$, $i$$ = 0;$tt$$ = goog.ui.Tooltip.activeInstances_[$i$$];$i$$++) {
      goog.dom.contains($tt$$.getElement(), this.anchor) && ($tt$$.childTooltip_ = this, this.parentTooltip_ = $tt$$)
    }
  }
};
goog.ui.Tooltip.prototype.handleMouseOutAndBlur = function $goog$ui$Tooltip$$handleMouseOutAndBlur$($event$$) {
  var $el$$ = this.getAnchorFromElement($event$$.target), $elTo$$ = this.getAnchorFromElement($event$$.relatedTarget);
  $el$$ != $elTo$$ && ($el$$ == this.activeEl_ && (this.activeEl_ = null), this.clearShowTimer(), this.seenInteraction_ = !1, this.isVisible() && (!$event$$.relatedTarget || !goog.dom.contains(this.getElement(), $event$$.relatedTarget)) ? this.startHideTimer() : this.anchor = void 0)
};
goog.ui.Tooltip.prototype.handleTooltipMouseOver = function $goog$ui$Tooltip$$handleTooltipMouseOver$() {
  var $element$$ = this.getElement();
  this.activeEl_ != $element$$ && (this.clearHideTimer(), this.activeEl_ = $element$$)
};
goog.ui.Tooltip.prototype.handleTooltipMouseOut = function $goog$ui$Tooltip$$handleTooltipMouseOut$($event$$) {
  var $element$$ = this.getElement();
  if(this.activeEl_ == $element$$ && (!$event$$.relatedTarget || !goog.dom.contains($element$$, $event$$.relatedTarget))) {
    this.activeEl_ = null, this.startHideTimer()
  }
};
goog.ui.Tooltip.prototype.startShowTimer = function $goog$ui$Tooltip$$startShowTimer$($el$$, $opt_pos$$) {
  this.showTimer || (this.showTimer = goog.Timer.callOnce(goog.bind(this.maybeShow, this, $el$$, $opt_pos$$), this.showDelayMs_))
};
goog.ui.Tooltip.prototype.clearShowTimer = function $goog$ui$Tooltip$$clearShowTimer$() {
  this.showTimer && (goog.Timer.clear(this.showTimer), this.showTimer = void 0)
};
goog.ui.Tooltip.prototype.startHideTimer = function $goog$ui$Tooltip$$startHideTimer$() {
  this.getState() == goog.ui.Tooltip.State.SHOWING && (this.hideTimer = goog.Timer.callOnce(goog.bind(this.maybeHide, this, this.anchor), this.getHideDelayMs()))
};
goog.ui.Tooltip.prototype.clearHideTimer = function $goog$ui$Tooltip$$clearHideTimer$() {
  this.hideTimer && (goog.Timer.clear(this.hideTimer), this.hideTimer = void 0)
};
goog.ui.Tooltip.prototype.disposeInternal = function $goog$ui$Tooltip$$disposeInternal$() {
  this.setVisible(!1);
  this.clearShowTimer();
  this.detach();
  this.getElement() && goog.dom.removeNode(this.getElement());
  this.activeEl_ = null;
  delete this.dom_;
  goog.ui.Tooltip.superClass_.disposeInternal.call(this)
};
goog.ui.Tooltip.CursorTooltipPosition = function $goog$ui$Tooltip$CursorTooltipPosition$($arg1$$, $opt_arg2$$) {
  goog.positioning.ViewportPosition.call(this, $arg1$$, $opt_arg2$$)
};
goog.inherits(goog.ui.Tooltip.CursorTooltipPosition, goog.positioning.ViewportPosition);
goog.ui.Tooltip.CursorTooltipPosition.prototype.reposition = function $goog$ui$Tooltip$CursorTooltipPosition$$reposition$($element$$, $popupCorner$$2_viewport$$3_viewportElt$$, $margin_opt_margin$$) {
  $popupCorner$$2_viewport$$3_viewportElt$$ = goog.style.getClientViewportElement($element$$);
  $popupCorner$$2_viewport$$3_viewportElt$$ = goog.style.getVisibleRectForElement($popupCorner$$2_viewport$$3_viewportElt$$);
  $margin_opt_margin$$ = $margin_opt_margin$$ ? new goog.math.Box($margin_opt_margin$$.top + 10, $margin_opt_margin$$.right, $margin_opt_margin$$.bottom, $margin_opt_margin$$.left + 10) : new goog.math.Box(10, 0, 0, 10);
  goog.positioning.positionAtCoordinate(this.coordinate, $element$$, goog.positioning.Corner.TOP_START, $margin_opt_margin$$, $popupCorner$$2_viewport$$3_viewportElt$$, goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.FAIL_Y) & goog.positioning.OverflowStatus.FAILED && goog.positioning.positionAtCoordinate(this.coordinate, $element$$, goog.positioning.Corner.TOP_START, $margin_opt_margin$$, $popupCorner$$2_viewport$$3_viewportElt$$, goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.ADJUST_Y)
};
goog.ui.Tooltip.ElementTooltipPosition = function $goog$ui$Tooltip$ElementTooltipPosition$($element$$) {
  goog.positioning.AnchoredPosition.call(this, $element$$, goog.positioning.Corner.BOTTOM_RIGHT)
};
goog.inherits(goog.ui.Tooltip.ElementTooltipPosition, goog.positioning.AnchoredPosition);
goog.ui.Tooltip.ElementTooltipPosition.prototype.reposition = function $goog$ui$Tooltip$ElementTooltipPosition$$reposition$($element$$, $popupCorner$$, $opt_margin$$) {
  var $offset$$ = new goog.math.Coordinate(10, 0);
  goog.positioning.positionAtAnchor(this.element, this.corner, $element$$, $popupCorner$$, $offset$$, $opt_margin$$, goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.FAIL_Y) & goog.positioning.OverflowStatus.FAILED && goog.positioning.positionAtAnchor(this.element, goog.positioning.Corner.TOP_RIGHT, $element$$, goog.positioning.Corner.BOTTOM_LEFT, $offset$$, $opt_margin$$, goog.positioning.Overflow.ADJUST_X | goog.positioning.Overflow.ADJUST_Y)
};
th.fixedtoolbar = {};
th.fixedtoolbar.templates = {};
th.fixedtoolbar.templates.Toolbar = function $th$fixedtoolbar$templates$Toolbar$() {
  return'\t<thRWGDns:thUIToolbar id="thToolbar" class="textHelp toolbar" style="visibility:hidden;"><thRWGDns:thPage id="thDocsReader" class="texthelp docsReader-page"><thRWGDns:thUITools><thRWGDns:thUITool id="thDictionary" class="thDictionary" tooltip=\'Dictionary\'></thRWGDns:thUITool><thRWGDns:thUITool id="thPictureDictionary" class="thPictureDictionary" tooltip=\'Picture Dictionary\'></thRWGDns:thUITool><thRWGDns:thUITool id="thPlay" class="thPlay" tooltip=\'Play\'></thRWGDns:thUITool><thRWGDns:thUITool id="thPause" class="thPause" tooltip=\'Pause\'></thRWGDns:thUITool><thRWGDns:thUITool id="thStop" class="thStop" tooltip=\'Stop\'></thRWGDns:thUITool><thRWGDns:thUITool id="thFactFinder" class="thFactFinder" tooltip=\'Fact Finder\'></thRWGDns:thUITool><thRWGDns:thUITool id="thTranslator" class="thTranslator" tooltip=\'Translator\'></thRWGDns:thUITool><thRWGDns:thUITool id="thCollectStudySkills" class="thCollectStudySkills" tooltip=\'Collect highlights\'></thRWGDns:thUITool><thRWGDns:thUITool id="thVocabTool" class="thVocabTool" tooltip=\'Vocabulary\'></thRWGDns:thUITool><thRWGDns:thUITool id="thLogo" class="thLogo visible" style="float: right; "></thRWGDns:thUITool><thRWGDns:thUITool id="thOptions" class="thOptions visible" style="float: right; " tooltip=\'Settings\'></thRWGDns:thUITool></thRWGDns:thUITools><thRWGDns:thUI class="clear"></thRWGDns:thUI><thRWGDns:thUIButton id="thDocsReaderButton" class="thDocsReaderButton" style="color:white;text-align:center;font-family:\'FS Me Web Bold\', Helvetica, Arial, Verdana , sans-serif;" class="thDocsReaderButton">Read&Write</thRWGDns:thUIButton></thRWGDns:thPage></thRWGDns:thUIToolbar><audio id="thWebAudio" type="audio/mpeg"/>'
};
th.fixedtoolbar.templates.Tooltip = function $th$fixedtoolbar$templates$Tooltip$() {
  return'\t<div class="thTooltip thTooltipHide" style="left: -100px; top: -100px; "><div class="thTooltipContentId"></div><div class="thTooltipArrow thTooltipArrowup" style="left: 20px; "><div class="thTooltipArrowimplBefore"></div><div class="thTooltipArrowimplAfter"></div></div></div>'
};
th.fixedtoolbar.Toolbar = function $th$fixedtoolbar$Toolbar$($dom$$) {
  goog.ui.Component.call(this, $dom$$);
  this.toolbarVisible = this.minimised = !1;
  this.m_tooltip = this.m_webReader = this.m_voices = this.m_speechOptions = null;
  this.m_collectHighlightsDialog = new th.fixedtoolbar.dialogs.CollectHighlightsDialog;
  this.m_pictureDictionaryDialog = new th.fixedtoolbar.dialogs.PictureDictionaryDialog;
  this.m_translatorDialog = new th.fixedtoolbar.dialogs.TranslatorDialog;
  this.m_dictionaryDialog = new th.fixedtoolbar.dialogs.DictionaryDialog
};
goog.inherits(th.fixedtoolbar.Toolbar, goog.ui.Component);
th.fixedtoolbar.Toolbar.prototype.createDom = function $th$fixedtoolbar$Toolbar$$createDom$() {
  try {
    th.fixedtoolbar.Toolbar.superClass_.createDom.call(this);
    var $rootLocation$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation(), $placeHolder$$ = goog.dom.getElement(texthelp.webreaderapi.HelpersSingleton.getInstance().getPlaceHolder()), $toolbarCSS$$ = document.createElement("link");
    $toolbarCSS$$.rel = "stylesheet";
    $toolbarCSS$$.type = "text/css";
    $toolbarCSS$$.href = $rootLocation$$ + "src/assets/thFixedToolbar.css";
    this.getDomHelper().appendChild($placeHolder$$, $toolbarCSS$$);
    var $htmlFragment$$ = soy.renderAsFragment(th.fixedtoolbar.templates.Toolbar);
    this.getDomHelper().insertSiblingBefore($htmlFragment$$, document.body.firstChild);
    this.m_speechOptions = new texthelp.webreader.SpeechOptionsDlg(this.getDomHelper());
    this.m_speechOptions.render(this.getDomHelper().getElement(texthelp.webreaderapi.HelpersSingleton.getInstance().getPlaceHolder()));
    $htmlFragment$$ = soy.renderAsFragment(th.fixedtoolbar.templates.Tooltip);
    this.getDomHelper().appendChild(document.body, $htmlFragment$$);
    this.m_tooltip = new th.fixedtoolbar.Tooltip;
    goog.events.listen(goog.dom.getElement("thDocsReaderButton"), goog.events.EventType.MOUSEUP, this.onthUIButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thPlay"), goog.events.EventType.MOUSEUP, this.onthPlayButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thPlay"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thPlay"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thStop"), goog.events.EventType.MOUSEUP, this.onthStopButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thStop"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thStop"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thPause"), goog.events.EventType.MOUSEUP, this.onthPauseButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thPause"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thPause"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thOptions"), goog.events.EventType.MOUSEUP, this.onthOptionsButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thOptions"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thOptions"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thFactFinder"), goog.events.EventType.MOUSEUP, this.onthFactFinderButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thFactFinder"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thFactFinder"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thDictionary"), goog.events.EventType.MOUSEUP, this.onthDictionaryButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thDictionary"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thDictionary"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thTranslator"), goog.events.EventType.MOUSEUP, this.onthTranslatorButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thTranslator"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thTranslator"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thPictureDictionary"), goog.events.EventType.MOUSEUP, this.onthPictureDictionaryButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thPictureDictionary"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thPictureDictionary"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thCollectStudySkills"), goog.events.EventType.MOUSEUP, this.onthCollectStudySkillsButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thCollectStudySkills"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thCollectStudySkills"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this);
    goog.events.listen(goog.dom.getElement("thVocabTool"), goog.events.EventType.MOUSEUP, this.onthVocabToolButtonMouseUp, !1, this);
    goog.events.listen(goog.dom.getElement("thVocabTool"), goog.events.EventType.MOUSEOVER, this.onthTooltipShow, !0, this);
    goog.events.listen(goog.dom.getElement("thVocabTool"), goog.events.EventType.MOUSEOUT, this.onthTooltipHide, !0, this)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.initialise = function $th$fixedtoolbar$Toolbar$$initialise$($webReader$$) {
  try {
    this.m_webReader = $webReader$$, this.m_collectHighlightsDialog.initialise(""), this.m_pictureDictionaryDialog.initialise(""), this.m_translatorDialog.initialise(""), this.m_dictionaryDialog.initialise("")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthUIButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthUIButtonMouseUp$() {
  try {
    var $toolBar$$ = goog.dom.getElement("thToolbar");
    this.toolbarVisible ? goog.dom.setProperties($toolBar$$, {style:"margin-top: -44px;"}) : goog.dom.setProperties($toolBar$$, {style:"margin-top: 0px;"});
    var $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance(), $logo$$ = goog.dom.getElement("thLogo");
    $helper$$.hasClassName($logo$$, "visible") || $helper$$.addClassName($logo$$, "visible");
    this.toolbarVisible = !this.toolbarVisible
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthPlayButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthPlayButtonMouseUp$() {
  try {
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRPlay", [])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthStopButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthStopButtonMouseUp$() {
  try {
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRStop", [])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthPauseButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthPauseButtonMouseUp$() {
  try {
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRPause", [])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthFactFinderButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthFactFinderButtonMouseUp$() {
  try {
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRFactFinder", [])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthDictionaryButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthDictionaryButtonMouseUp$() {
  try {
    var $pdResponse$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this.m_dictionaryDialog, this.m_dictionaryDialog.onDictionaryResponse);
    this.m_webReader.dictionaryCurrentWord($pdResponse$$) && this.m_dictionaryDialog.clearDialog();
    this.m_dictionaryDialog.showDialog()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthTranslatorButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthTranslatorButtonMouseUp$() {
  try {
    var $pdResponse$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this.m_translatorDialog, this.m_translatorDialog.onTranslatorResponse);
    this.m_webReader.translateCurrentWord($pdResponse$$) && this.m_translatorDialog.clearDialog();
    this.m_translatorDialog.showDialog()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthPictureDictionaryButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthPictureDictionaryButtonMouseUp$() {
  try {
    var $pdResponse$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this.m_pictureDictionaryDialog, this.m_pictureDictionaryDialog.onPictureDictionaryResponse), $newDefinition$$ = this.m_webReader.pictureDictionaryCurrentWord($pdResponse$$);
    !1 !== $newDefinition$$ && ($newDefinition$$ && this.m_pictureDictionaryDialog.clearDialog(), this.m_pictureDictionaryDialog.showDialog())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthOptionsButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthOptionsButtonMouseUp$() {
  try {
    this.m_speechOptions.showDialog(this.m_webReader.getVoices()), texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWROptions", [])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthCollectStudySkillsButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthCollectStudySkillsButtonMouseUp$() {
  try {
    var $pdResponse$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this.m_collectHighlightsDialog, this.m_collectHighlightsDialog.onCollectHighlightsResponse);
    this.m_collectHighlightsDialog.clearDialog();
    this.m_collectHighlightsDialog.showDialog();
    this.m_webReader.collectHighlights($pdResponse$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthVocabToolButtonMouseUp = function $th$fixedtoolbar$Toolbar$$onthVocabToolButtonMouseUp$() {
  try {
    var $pdResponse$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.onVocabResponse);
    this.m_webReader.collectHighlights($pdResponse$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onVocabResponse = function $th$fixedtoolbar$Toolbar$$onVocabResponse$($currentHighlights_strData$$) {
  try {
    var $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance();
    texthelp.webreaderapi.EventBusSingleton.getInstance().publish("onWRStop", []);
    for(var $vocabWords$$ = [], $words$$ = null, $highlightText$$ = null, $index$$ = 0;$index$$ < $currentHighlights_strData$$.highlights.length;$index$$++) {
      $highlightText$$ = $helper$$.trim($currentHighlights_strData$$.highlights[$index$$].text), $words$$ = $highlightText$$.split(/\s/), 1 === $words$$.length && ($helper$$.arrayContains($vocabWords$$, $words$$[0].toLowerCase()) || $vocabWords$$.push($words$$[0].toLowerCase()))
    }
    $vocabWords$$.sort();
    var $newwin_vocabWordsSearch$$ = $vocabWords$$.join("~"), $currentHighlights_strData$$ = '<html><body onload="document.getElementById(\'1\').submit();">Processing request<form id="1" action="', $nRnd1$$ = Math.floor(10 * Math.random()), $helper$$ = "http://webappspeech.texthelp.com/", $currentHighlights_strData$$ = $currentHighlights_strData$$ + ($helper$$ + "rwvocabserver/vocab"), $currentHighlights_strData$$ = $currentHighlights_strData$$ + '" method="post"> <input type="hidden" name="userName" value="texthelpdemo">', 
    $nRnd2$$ = Math.floor(10 * Math.random()), $currentHighlights_strData$$ = $currentHighlights_strData$$ + '<input type="hidden" name="custId" value="13">', $currentHighlights_strData$$ = $currentHighlights_strData$$ + '<input type="hidden" name="locale" value="US">', $nDate$$ = (new Date).getDate(), $currentHighlights_strData$$ = $currentHighlights_strData$$ + ('<input type="hidden" name="wordList" value="' + $newwin_vocabWordsSearch$$ + '">'), $md5$$ = new goog.crypt.Md5;
    $md5$$.update($nRnd1$$ + "texthelpdemo" + $nDate$$ + $nRnd2$$);
    var $encoded$$ = $md5$$.digest(), $encoded$$ = goog.crypt.byteArrayToHex($encoded$$), $currentHighlights_strData$$ = $currentHighlights_strData$$ + ('<input type="hidden" name="code" value="' + ("" + $nRnd1$$ + $encoded$$ + $nRnd2$$) + '">'), $currentHighlights_strData$$ = $currentHighlights_strData$$ + "</form></body></html>", $newwin_vocabWordsSearch$$ = null, $newwin_vocabWordsSearch$$ = window.open(null, "_ntthvt");
    $newwin_vocabWordsSearch$$.focus();
    $newwin_vocabWordsSearch$$.document.write($currentHighlights_strData$$);
    $newwin_vocabWordsSearch$$.document.close()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthTooltipShow = function $th$fixedtoolbar$Toolbar$$onthTooltipShow$($event$$) {
  try {
    this.m_tooltip.setVisible(!0), this.m_tooltip.setElement($event$$.currentTarget)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Toolbar.prototype.onthTooltipHide = function $th$fixedtoolbar$Toolbar$$onthTooltipHide$() {
  try {
    this.m_tooltip.setVisible(!1)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Tooltip = function $th$fixedtoolbar$Tooltip$() {
  this.m_visible = !1;
  this.m_tooltipElement = goog.dom.getElementByClass("thTooltip");
  this.m_currentElement = null;
  this.m_tooltipTextElement = goog.dom.getElementByClass("thTooltipContentId");
  this.m_tooltipArrow = goog.dom.getElementByClass("thTooltipArrow")
};
th.fixedtoolbar.Tooltip.prototype.setElement = function $th$fixedtoolbar$Tooltip$$setElement$($element$$) {
  try {
    if($element$$ !== this.m_currentElement) {
      goog.dom.setTextContent(this.m_tooltipTextElement, $element$$.getAttribute("tooltip"));
      var $leftPos$$ = this.m_tooltipTextElement.offsetWidth / 2 + this.m_tooltipTextElement.offsetLeft;
      goog.style.setStyle(this.m_tooltipArrow, "left", $leftPos$$ + "px");
      var $y$$ = $element$$.offsetTop + $element$$.offsetParent.offsetTop + $element$$.offsetHeight + "px";
      goog.style.setStyle(this.m_tooltipElement, "left", $element$$.offsetLeft + $element$$.offsetParent.offsetLeft + $element$$.offsetWidth / 2 - $leftPos$$ - 4 + "px");
      goog.style.setStyle(this.m_tooltipElement, "top", $y$$);
      this.m_currentElement = $element$$
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.Tooltip.prototype.setVisible = function $th$fixedtoolbar$Tooltip$$setVisible$($visible$$) {
  try {
    this.m_visible !== $visible$$ && ($visible$$ ? texthelp.webreaderapi.HelpersSingleton.getInstance().removeClassName(this.m_tooltipElement, "thTooltipHide") : texthelp.webreaderapi.HelpersSingleton.getInstance().addClassName(this.m_tooltipElement, "thTooltipHide"), this.m_visible = $visible$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs = {};
th.fixedtoolbar.dialogs.ModalDialogBase = function $th$fixedtoolbar$dialogs$ModalDialogBase$() {
  this.m_dialog = null;
  this.m_lastLookup = "";
  this.m_contentFrame = null
};
th.fixedtoolbar.dialogs.ModalDialogBase.prototype.initialise = function $th$fixedtoolbar$dialogs$ModalDialogBase$$initialise$($dialogName$$) {
  try {
    this.m_dialogName = $dialogName$$, this.m_dialog = new goog.ui.Dialog("gdwr-modal-dialog", !0), this.m_dialog.setModal(!0), this.m_dialog.setDraggable(!1), texthelp.webreaderapi.HelpersSingleton.getInstance().addClassName(this.m_dialog.getDialogElement(), "gdwr-" + this.m_dialogName + "-dialog")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.ModalDialogBase.prototype.show = function $th$fixedtoolbar$dialogs$ModalDialogBase$$show$() {
  this.m_dialog.setVisible(!0)
};
th.fixedtoolbar.dialogs.ModalDialogBase.prototype.hide = function $th$fixedtoolbar$dialogs$ModalDialogBase$$hide$() {
  try {
    this.m_dialog.setVisible(!1)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.ModalDialogBase.prototype.savePosition = function $th$fixedtoolbar$dialogs$ModalDialogBase$$savePosition$() {
  try {
    this.m_contentFrame.contentWindow.postMessage("stop:", texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    var $top$$ = goog.style.getStyle(this.m_dialog.getDialogElement(), "top"), $left$$ = goog.style.getStyle(this.m_dialog.getDialogElement(), "left"), $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings();
    $userSettings$$[this.m_dialogName].position = $left$$ + "," + $top$$;
    texthelp.webreader.UserSettingsSingleton.getInstance().saveUserSettings($userSettings$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.ModalDialogBase.prototype.clearDialog = function $th$fixedtoolbar$dialogs$ModalDialogBase$$clearDialog$() {
  try {
    null === this.m_contentFrame && (this.m_contentFrame = goog.dom.getElement(this.m_dialogName + "Frame")), this.m_contentFrame.contentWindow.postMessage("clear:", texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.AuthenticateDialog = function $th$fixedtoolbar$dialogs$AuthenticateDialog$() {
  th.fixedtoolbar.dialogs.ModalDialogBase.call(this);
  this.m_authenticatedCallback = null
};
goog.inherits(th.fixedtoolbar.dialogs.AuthenticateDialog, th.fixedtoolbar.dialogs.ModalDialogBase);
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.initialise = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$initialise$() {
  th.fixedtoolbar.dialogs.AuthenticateDialog.superClass_.initialise.call(this, "authenticate");
  this.m_dialog.setContent("<html><head/><body><iframe id='authenticateFrame'name='authenticateFrame'  style='width:800px;height:448px' frameborder='0'></iframe></div><div class=\"gdwr-modal-auth-dialog-buttons\"></div></div></body></html>");
  this.m_dialog.setButtonSet(null);
  this.m_dialog.setHasTitleCloseButton(!1);
  var $cancelButton$$ = new goog.ui.Button("Cancel");
  $cancelButton$$.addClassName("gdwr-dialog-button");
  $cancelButton$$.render(goog.dom.getElementByClass("gdwr-modal-auth-dialog-buttons"));
  this.m_dialog.setVisible(!0);
  this.m_dialog.setVisible(!1);
  goog.events.listen(this.m_dialog.getDialogElement(), goog.events.EventType.MOUSEUP, this.onRepositioned, !1, this);
  goog.events.listen($cancelButton$$, goog.ui.Component.EventType.ACTION, this.onCancel_, !1, this)
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.showDialog = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$showDialog$($callback$$) {
  try {
    this.m_authenticatedCallback = $callback$$, this.show()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.onRepositioned = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$onRepositioned$() {
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.clearDialog = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$clearDialog$() {
  th.fixedtoolbar.dialogs.AuthenticateDialog.superClass_.clearDialog.call(this)
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.onFrameClick = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$onFrameClick$($evt$$) {
  ("A" == $evt$$.target.nodeName || "BUTTON" == $evt$$.target.nodeName) && this.m_authenticatedCallback(!0, this)
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.setAuthContent = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$setAuthContent$($authContent$$) {
  var $frameDocs$$ = document.getElementById("authenticateFrame");
  $frameDocs$$.contentDocument.write($authContent$$);
  goog.events.listen($frameDocs$$.contentDocument, goog.events.EventType.MOUSEUP, this.onFrameClick, !1, this)
};
th.fixedtoolbar.dialogs.AuthenticateDialog.prototype.onCancel_ = function $th$fixedtoolbar$dialogs$AuthenticateDialog$$onCancel_$() {
  try {
    this.m_authenticatedCallback(!1, this)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.ui.INLINE_BLOCK_CLASSNAME = "goog-inline-block";
goog.ui.CustomButtonRenderer = function $goog$ui$CustomButtonRenderer$() {
  goog.ui.ButtonRenderer.call(this)
};
goog.inherits(goog.ui.CustomButtonRenderer, goog.ui.ButtonRenderer);
goog.addSingletonGetter(goog.ui.CustomButtonRenderer);
goog.ui.CustomButtonRenderer.CSS_CLASS = "goog-custom-button";
goog.ui.CustomButtonRenderer.prototype.createDom = function $goog$ui$CustomButtonRenderer$$createDom$($control$$) {
  var $attributes$$1_buttonElement_classNames$$ = this.getClassNames($control$$), $attributes$$1_buttonElement_classNames$$ = {"class":goog.ui.INLINE_BLOCK_CLASSNAME + " " + $attributes$$1_buttonElement_classNames$$.join(" "), title:$control$$.getTooltip() || ""}, $attributes$$1_buttonElement_classNames$$ = $control$$.getDomHelper().createDom("div", $attributes$$1_buttonElement_classNames$$, this.createButton($control$$.getContent(), $control$$.getDomHelper()));
  this.setAriaStates($control$$, $attributes$$1_buttonElement_classNames$$);
  return $attributes$$1_buttonElement_classNames$$
};
goog.ui.CustomButtonRenderer.prototype.getAriaRole = function $goog$ui$CustomButtonRenderer$$getAriaRole$() {
  return goog.dom.a11y.Role.BUTTON
};
goog.ui.CustomButtonRenderer.prototype.getContentElement = function $goog$ui$CustomButtonRenderer$$getContentElement$($element$$) {
  return $element$$ && $element$$.firstChild.firstChild
};
goog.ui.CustomButtonRenderer.prototype.createButton = function $goog$ui$CustomButtonRenderer$$createButton$($content$$, $dom$$) {
  return $dom$$.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-outer-box"), $dom$$.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-inner-box"), $content$$))
};
goog.ui.CustomButtonRenderer.prototype.canDecorate = function $goog$ui$CustomButtonRenderer$$canDecorate$($element$$) {
  return"DIV" == $element$$.tagName
};
goog.ui.CustomButtonRenderer.prototype.hasBoxStructure = function $goog$ui$CustomButtonRenderer$$hasBoxStructure$($button$$, $element$$) {
  var $inner_outer$$ = $button$$.getDomHelper().getFirstElementChild($element$$), $innerClassName_outerClassName$$ = this.getCssClass() + "-outer-box";
  return $inner_outer$$ && goog.dom.classes.has($inner_outer$$, $innerClassName_outerClassName$$) && ($inner_outer$$ = $button$$.getDomHelper().getFirstElementChild($inner_outer$$), $innerClassName_outerClassName$$ = this.getCssClass() + "-inner-box", $inner_outer$$ && goog.dom.classes.has($inner_outer$$, $innerClassName_outerClassName$$)) ? !0 : !1
};
goog.ui.CustomButtonRenderer.prototype.decorate = function $goog$ui$CustomButtonRenderer$$decorate$($control$$, $element$$) {
  goog.ui.CustomButtonRenderer.trimTextNodes_($element$$, !0);
  goog.ui.CustomButtonRenderer.trimTextNodes_($element$$, !1);
  this.hasBoxStructure($control$$, $element$$) || $element$$.appendChild(this.createButton($element$$.childNodes, $control$$.getDomHelper()));
  goog.dom.classes.add($element$$, goog.ui.INLINE_BLOCK_CLASSNAME, this.getCssClass());
  return goog.ui.CustomButtonRenderer.superClass_.decorate.call(this, $control$$, $element$$)
};
goog.ui.CustomButtonRenderer.prototype.getCssClass = function $goog$ui$CustomButtonRenderer$$getCssClass$() {
  return goog.ui.CustomButtonRenderer.CSS_CLASS
};
goog.ui.CustomButtonRenderer.trimTextNodes_ = function $goog$ui$CustomButtonRenderer$trimTextNodes_$($element$$, $fromStart$$) {
  if($element$$) {
    for(var $node$$ = $fromStart$$ ? $element$$.firstChild : $element$$.lastChild, $next$$;$node$$ && $node$$.parentNode == $element$$;) {
      $next$$ = $fromStart$$ ? $node$$.nextSibling : $node$$.previousSibling;
      if($node$$.nodeType == goog.dom.NodeType.TEXT) {
        var $text$$ = $node$$.nodeValue;
        if("" == goog.string.trim($text$$)) {
          $element$$.removeChild($node$$)
        }else {
          $node$$.nodeValue = $fromStart$$ ? goog.string.trimLeft($text$$) : goog.string.trimRight($text$$);
          break
        }
      }else {
        break
      }
      $node$$ = $next$$
    }
  }
};
goog.ui.MenuButtonRenderer = function $goog$ui$MenuButtonRenderer$() {
  goog.ui.CustomButtonRenderer.call(this)
};
goog.inherits(goog.ui.MenuButtonRenderer, goog.ui.CustomButtonRenderer);
goog.addSingletonGetter(goog.ui.MenuButtonRenderer);
goog.ui.MenuButtonRenderer.CSS_CLASS = "goog-menu-button";
goog.ui.MenuButtonRenderer.WRAPPER_PROP_ = "__goog_wrapper_div";
goog.userAgent.GECKO && (goog.ui.MenuButtonRenderer.prototype.setContent = function $goog$ui$MenuButtonRenderer$$setContent$($element$$, $content$$) {
  var $caption$$ = goog.ui.MenuButtonRenderer.superClass_.getContentElement.call(this, $element$$ && $element$$.firstChild);
  $caption$$ && goog.dom.replaceNode(this.createCaption($content$$, goog.dom.getDomHelper($element$$)), $caption$$)
});
goog.ui.MenuButtonRenderer.prototype.getContentElement = function $goog$ui$MenuButtonRenderer$$getContentElement$($content$$23_element$$) {
  $content$$23_element$$ = goog.ui.MenuButtonRenderer.superClass_.getContentElement.call(this, $content$$23_element$$ && $content$$23_element$$.firstChild);
  goog.userAgent.GECKO && ($content$$23_element$$ && $content$$23_element$$[goog.ui.MenuButtonRenderer.WRAPPER_PROP_]) && ($content$$23_element$$ = $content$$23_element$$.firstChild);
  return $content$$23_element$$
};
goog.ui.MenuButtonRenderer.prototype.decorate = function $goog$ui$MenuButtonRenderer$$decorate$($control$$, $element$$) {
  var $menuElem$$ = goog.dom.getElementsByTagNameAndClass("*", goog.ui.MenuRenderer.CSS_CLASS, $element$$)[0];
  if($menuElem$$) {
    goog.style.showElement($menuElem$$, !1);
    goog.dom.appendChild(goog.dom.getOwnerDocument($menuElem$$).body, $menuElem$$);
    var $menu$$ = new goog.ui.Menu;
    $menu$$.decorate($menuElem$$);
    $control$$.setMenu($menu$$)
  }
  return goog.ui.MenuButtonRenderer.superClass_.decorate.call(this, $control$$, $element$$)
};
goog.ui.MenuButtonRenderer.prototype.createButton = function $goog$ui$MenuButtonRenderer$$createButton$($content$$, $dom$$) {
  return goog.ui.MenuButtonRenderer.superClass_.createButton.call(this, [this.createCaption($content$$, $dom$$), this.createDropdown($dom$$)], $dom$$)
};
goog.ui.MenuButtonRenderer.prototype.createCaption = function $goog$ui$MenuButtonRenderer$$createCaption$($content$$, $dom$$) {
  return goog.ui.MenuButtonRenderer.wrapCaption($content$$, this.getCssClass(), $dom$$)
};
goog.ui.MenuButtonRenderer.wrapCaption = function $goog$ui$MenuButtonRenderer$wrapCaption$($content$$, $cssClass$$, $dom$$) {
  return $dom$$.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + ($cssClass$$ + "-caption"), $content$$)
};
goog.ui.MenuButtonRenderer.prototype.createDropdown = function $goog$ui$MenuButtonRenderer$$createDropdown$($dom$$) {
  return $dom$$.createDom("div", goog.ui.INLINE_BLOCK_CLASSNAME + " " + (this.getCssClass() + "-dropdown"), "\u00a0")
};
goog.ui.MenuButtonRenderer.prototype.getCssClass = function $goog$ui$MenuButtonRenderer$$getCssClass$() {
  return goog.ui.MenuButtonRenderer.CSS_CLASS
};
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_CAMINO = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_CAMINO || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.init_ = function $goog$userAgent$product$init_$() {
  goog.userAgent.product.detectedFirefox_ = !1;
  goog.userAgent.product.detectedCamino_ = !1;
  goog.userAgent.product.detectedIphone_ = !1;
  goog.userAgent.product.detectedIpad_ = !1;
  goog.userAgent.product.detectedAndroid_ = !1;
  goog.userAgent.product.detectedChrome_ = !1;
  goog.userAgent.product.detectedSafari_ = !1;
  var $ua$$ = goog.userAgent.getUserAgentString();
  $ua$$ && (-1 != $ua$$.indexOf("Firefox") ? goog.userAgent.product.detectedFirefox_ = !0 : -1 != $ua$$.indexOf("Camino") ? goog.userAgent.product.detectedCamino_ = !0 : -1 != $ua$$.indexOf("iPhone") || -1 != $ua$$.indexOf("iPod") ? goog.userAgent.product.detectedIphone_ = !0 : -1 != $ua$$.indexOf("iPad") ? goog.userAgent.product.detectedIpad_ = !0 : -1 != $ua$$.indexOf("Android") ? goog.userAgent.product.detectedAndroid_ = !0 : -1 != $ua$$.indexOf("Chrome") ? goog.userAgent.product.detectedChrome_ = 
  !0 : -1 != $ua$$.indexOf("Safari") && (goog.userAgent.product.detectedSafari_ = !0))
};
goog.userAgent.product.PRODUCT_KNOWN_ || goog.userAgent.product.init_();
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.userAgent.product.detectedFirefox_;
goog.userAgent.product.CAMINO = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CAMINO : goog.userAgent.product.detectedCamino_;
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.detectedIphone_;
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.userAgent.product.detectedIpad_;
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.userAgent.product.detectedAndroid_;
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.userAgent.product.detectedChrome_;
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.detectedSafari_;
goog.ui.MenuButton = function $goog$ui$MenuButton$($content$$, $opt_menu$$, $opt_renderer$$, $opt_domHelper$$) {
  goog.ui.Button.call(this, $content$$, $opt_renderer$$ || goog.ui.MenuButtonRenderer.getInstance(), $opt_domHelper$$);
  this.setSupportedState(goog.ui.Component.State.OPENED, !0);
  this.menuPosition_ = new goog.positioning.MenuAnchoredPosition(null, goog.positioning.Corner.BOTTOM_START);
  $opt_menu$$ && this.setMenu($opt_menu$$);
  this.menuMargin_ = null;
  this.timer_ = new goog.Timer(500);
  (goog.userAgent.product.IPHONE || goog.userAgent.product.IPAD) && !goog.userAgent.isVersion("533.17.9") && this.setFocusablePopupMenu(!0)
};
goog.inherits(goog.ui.MenuButton, goog.ui.Button);
goog.ui.MenuButton.prototype.isFocusablePopupMenu_ = !1;
goog.ui.MenuButton.prototype.renderMenuAsSibling_ = !1;
goog.ui.MenuButton.prototype.enterDocument = function $goog$ui$MenuButton$$enterDocument$() {
  goog.ui.MenuButton.superClass_.enterDocument.call(this);
  this.menu_ && this.attachMenuEventListeners_(this.menu_, !0);
  goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.HASPOPUP, "true")
};
goog.ui.MenuButton.prototype.exitDocument = function $goog$ui$MenuButton$$exitDocument$() {
  goog.ui.MenuButton.superClass_.exitDocument.call(this);
  if(this.menu_) {
    this.setOpen(!1);
    this.menu_.exitDocument();
    this.attachMenuEventListeners_(this.menu_, !1);
    var $menuElement$$ = this.menu_.getElement();
    $menuElement$$ && goog.dom.removeNode($menuElement$$)
  }
};
goog.ui.MenuButton.prototype.disposeInternal = function $goog$ui$MenuButton$$disposeInternal$() {
  goog.ui.MenuButton.superClass_.disposeInternal.call(this);
  this.menu_ && (this.menu_.dispose(), delete this.menu_);
  delete this.positionElement_;
  this.timer_.dispose()
};
goog.ui.MenuButton.prototype.handleMouseDown = function $goog$ui$MenuButton$$handleMouseDown$($e$$) {
  goog.ui.MenuButton.superClass_.handleMouseDown.call(this, $e$$);
  this.isActive() && (this.setOpen(!this.isOpen(), $e$$), this.menu_ && this.menu_.setMouseButtonPressed(this.isOpen()))
};
goog.ui.MenuButton.prototype.handleMouseUp = function $goog$ui$MenuButton$$handleMouseUp$($e$$) {
  goog.ui.MenuButton.superClass_.handleMouseUp.call(this, $e$$);
  this.menu_ && !this.isActive() && this.menu_.setMouseButtonPressed(!1)
};
goog.ui.MenuButton.prototype.performActionInternal = function $goog$ui$MenuButton$$performActionInternal$() {
  this.setActive(!1);
  return!0
};
goog.ui.MenuButton.prototype.handleDocumentMouseDown = function $goog$ui$MenuButton$$handleDocumentMouseDown$($e$$) {
  this.menu_ && (this.menu_.isVisible() && !this.containsElement($e$$.target)) && this.setOpen(!1)
};
goog.ui.MenuButton.prototype.containsElement = function $goog$ui$MenuButton$$containsElement$($element$$) {
  return $element$$ && goog.dom.contains(this.getElement(), $element$$) || this.menu_ && this.menu_.containsElement($element$$) || !1
};
goog.ui.MenuButton.prototype.handleKeyEventInternal = function $goog$ui$MenuButton$$handleKeyEventInternal$($e$$) {
  if($e$$.keyCode == goog.events.KeyCodes.SPACE) {
    if($e$$.preventDefault(), $e$$.type != goog.events.EventType.KEYUP) {
      return!0
    }
  }else {
    if($e$$.type != goog.events.KeyHandler.EventType.KEY) {
      return!1
    }
  }
  if(this.menu_ && this.menu_.isVisible()) {
    var $handledByMenu$$ = this.menu_.handleKeyEvent($e$$);
    return $e$$.keyCode == goog.events.KeyCodes.ESC ? (this.setOpen(!1), !0) : $handledByMenu$$
  }
  return $e$$.keyCode == goog.events.KeyCodes.DOWN || $e$$.keyCode == goog.events.KeyCodes.UP || $e$$.keyCode == goog.events.KeyCodes.SPACE ? (this.setOpen(!0), !0) : !1
};
goog.ui.MenuButton.prototype.handleMenuAction = function $goog$ui$MenuButton$$handleMenuAction$() {
  this.setOpen(!1)
};
goog.ui.MenuButton.prototype.handleMenuBlur = function $goog$ui$MenuButton$$handleMenuBlur$() {
  this.isActive() || this.setOpen(!1)
};
goog.ui.MenuButton.prototype.handleBlur = function $goog$ui$MenuButton$$handleBlur$($e$$) {
  this.isFocusablePopupMenu() || this.setOpen(!1);
  goog.ui.MenuButton.superClass_.handleBlur.call(this, $e$$)
};
goog.ui.MenuButton.prototype.getMenu = function $goog$ui$MenuButton$$getMenu$() {
  this.menu_ || this.setMenu(new goog.ui.Menu(this.getDomHelper()));
  return this.menu_ || null
};
goog.ui.MenuButton.prototype.setMenu = function $goog$ui$MenuButton$$setMenu$($menu$$) {
  var $oldMenu$$ = this.menu_;
  $menu$$ != $oldMenu$$ && ($oldMenu$$ && (this.setOpen(!1), this.isInDocument() && this.attachMenuEventListeners_($oldMenu$$, !1), delete this.menu_), $menu$$ && (this.menu_ = $menu$$, $menu$$.setParent(this), $menu$$.setVisible(!1), $menu$$.setAllowAutoFocus(this.isFocusablePopupMenu()), this.isInDocument() && this.attachMenuEventListeners_($menu$$, !0)));
  return $oldMenu$$
};
goog.ui.MenuButton.prototype.setMenuPosition = function $goog$ui$MenuButton$$setMenuPosition$($position$$) {
  $position$$ && (this.menuPosition_ = $position$$, this.positionElement_ = $position$$.element)
};
goog.ui.MenuButton.prototype.setPositionElement = function $goog$ui$MenuButton$$setPositionElement$($positionElement$$) {
  this.positionElement_ = $positionElement$$;
  this.positionMenu()
};
goog.ui.MenuButton.prototype.setMenuMargin = function $goog$ui$MenuButton$$setMenuMargin$($margin$$) {
  this.menuMargin_ = $margin$$
};
goog.ui.MenuButton.prototype.addItem = function $goog$ui$MenuButton$$addItem$($item$$) {
  this.getMenu().addChild($item$$, !0)
};
goog.ui.MenuButton.prototype.addItemAt = function $goog$ui$MenuButton$$addItemAt$($item$$, $index$$) {
  this.getMenu().addChildAt($item$$, $index$$, !0)
};
goog.ui.MenuButton.prototype.removeItem = function $goog$ui$MenuButton$$removeItem$($child$$28_item$$) {
  ($child$$28_item$$ = this.getMenu().removeChild($child$$28_item$$, !0)) && $child$$28_item$$.dispose()
};
goog.ui.MenuButton.prototype.removeItemAt = function $goog$ui$MenuButton$$removeItemAt$($child$$29_index$$) {
  ($child$$29_index$$ = this.getMenu().removeChildAt($child$$29_index$$, !0)) && $child$$29_index$$.dispose()
};
goog.ui.MenuButton.prototype.getItemAt = function $goog$ui$MenuButton$$getItemAt$($index$$) {
  return this.menu_ ? this.menu_.getChildAt($index$$) : null
};
goog.ui.MenuButton.prototype.getItemCount = function $goog$ui$MenuButton$$getItemCount$() {
  return this.menu_ ? this.menu_.getChildCount() : 0
};
goog.ui.MenuButton.prototype.setVisible = function $goog$ui$MenuButton$$setVisible$($visible$$, $opt_force$$) {
  var $visibilityChanged$$ = goog.ui.MenuButton.superClass_.setVisible.call(this, $visible$$, $opt_force$$);
  $visibilityChanged$$ && !this.isVisible() && this.setOpen(!1);
  return $visibilityChanged$$
};
goog.ui.MenuButton.prototype.setEnabled = function $goog$ui$MenuButton$$setEnabled$($enable$$) {
  goog.ui.MenuButton.superClass_.setEnabled.call(this, $enable$$);
  this.isEnabled() || this.setOpen(!1)
};
goog.ui.MenuButton.prototype.isAlignMenuToStart = function $goog$ui$MenuButton$$isAlignMenuToStart$() {
  var $corner$$ = this.menuPosition_.corner;
  return $corner$$ == goog.positioning.Corner.BOTTOM_START || $corner$$ == goog.positioning.Corner.TOP_START
};
goog.ui.MenuButton.prototype.setAlignMenuToStart = function $goog$ui$MenuButton$$setAlignMenuToStart$($alignToStart$$) {
  this.menuPosition_.corner = $alignToStart$$ ? goog.positioning.Corner.BOTTOM_START : goog.positioning.Corner.BOTTOM_END
};
goog.ui.MenuButton.prototype.setScrollOnOverflow = function $goog$ui$MenuButton$$setScrollOnOverflow$($scrollOnOverflow$$) {
  this.menuPosition_.setLastResortOverflow && this.menuPosition_.setLastResortOverflow(goog.positioning.Overflow.ADJUST_X | ($scrollOnOverflow$$ ? goog.positioning.Overflow.RESIZE_HEIGHT : goog.positioning.Overflow.ADJUST_Y))
};
goog.ui.MenuButton.prototype.isScrollOnOverflow = function $goog$ui$MenuButton$$isScrollOnOverflow$() {
  return this.menuPosition_.getLastResortOverflow && !!(this.menuPosition_.getLastResortOverflow() & goog.positioning.Overflow.RESIZE_HEIGHT)
};
goog.ui.MenuButton.prototype.isFocusablePopupMenu = function $goog$ui$MenuButton$$isFocusablePopupMenu$() {
  return this.isFocusablePopupMenu_
};
goog.ui.MenuButton.prototype.setFocusablePopupMenu = function $goog$ui$MenuButton$$setFocusablePopupMenu$($focusable$$) {
  this.isFocusablePopupMenu_ = $focusable$$
};
goog.ui.MenuButton.prototype.setRenderMenuAsSibling = function $goog$ui$MenuButton$$setRenderMenuAsSibling$($renderMenuAsSibling$$) {
  this.renderMenuAsSibling_ = $renderMenuAsSibling$$
};
goog.ui.MenuButton.prototype.showMenu = function $goog$ui$MenuButton$$showMenu$() {
  this.setOpen(!0)
};
goog.ui.MenuButton.prototype.hideMenu = function $goog$ui$MenuButton$$hideMenu$() {
  this.setOpen(!1)
};
goog.ui.MenuButton.prototype.setOpen = function $goog$ui$MenuButton$$setOpen$($open$$, $opt_e$$) {
  goog.ui.MenuButton.superClass_.setOpen.call(this, $open$$);
  if(this.menu_ && this.hasState(goog.ui.Component.State.OPENED) == $open$$) {
    if($open$$) {
      this.menu_.isInDocument() || (this.renderMenuAsSibling_ ? this.menu_.render(this.getElement().parentNode) : this.menu_.render()), this.viewportBox_ = goog.style.getVisibleRectForElement(this.getElement()), this.buttonRect_ = goog.style.getBounds(this.getElement()), this.positionMenu(), this.menu_.setHighlightedIndex(-1)
    }else {
      if(this.setActive(!1), this.menu_.setMouseButtonPressed(!1), this.getElement() && goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.ACTIVEDESCENDANT, ""), goog.isDefAndNotNull(this.originalSize_)) {
        this.originalSize_ = void 0;
        var $elem$$ = this.menu_.getElement();
        $elem$$ && goog.style.setSize($elem$$, "", "")
      }
    }
    this.menu_.setVisible($open$$, !1, $opt_e$$);
    this.isDisposed() || this.attachPopupListeners_($open$$)
  }
};
goog.ui.MenuButton.prototype.invalidateMenuSize = function $goog$ui$MenuButton$$invalidateMenuSize$() {
  this.originalSize_ = void 0
};
goog.ui.MenuButton.prototype.positionMenu = function $goog$ui$MenuButton$$positionMenu$() {
  if(this.menu_.isInDocument()) {
    var $elem$$9_positionElement$$ = this.positionElement_ || this.getElement(), $position$$ = this.menuPosition_;
    this.menuPosition_.element = $elem$$9_positionElement$$;
    $elem$$9_positionElement$$ = this.menu_.getElement();
    this.menu_.isVisible() || ($elem$$9_positionElement$$.style.visibility = "hidden", goog.style.showElement($elem$$9_positionElement$$, !0));
    !this.originalSize_ && this.isScrollOnOverflow() && (this.originalSize_ = goog.style.getSize($elem$$9_positionElement$$));
    var $popupCorner$$ = goog.positioning.flipCornerVertical($position$$.corner);
    $position$$.reposition($elem$$9_positionElement$$, $popupCorner$$, this.menuMargin_, this.originalSize_);
    this.menu_.isVisible() || (goog.style.showElement($elem$$9_positionElement$$, !1), $elem$$9_positionElement$$.style.visibility = "visible")
  }
};
goog.ui.MenuButton.prototype.onTick_ = function $goog$ui$MenuButton$$onTick_$() {
  var $currentButtonRect$$ = goog.style.getBounds(this.getElement()), $currentViewport$$ = goog.style.getVisibleRectForElement(this.getElement());
  if(!goog.math.Rect.equals(this.buttonRect_, $currentButtonRect$$) || !goog.math.Box.equals(this.viewportBox_, $currentViewport$$)) {
    this.buttonRect_ = $currentButtonRect$$, this.viewportBox_ = $currentViewport$$, this.positionMenu()
  }
};
goog.ui.MenuButton.prototype.attachMenuEventListeners_ = function $goog$ui$MenuButton$$attachMenuEventListeners_$($menu$$, $attach$$) {
  var $handler$$ = this.getHandler(), $method$$ = $attach$$ ? $handler$$.listen : $handler$$.unlisten;
  $method$$.call($handler$$, $menu$$, goog.ui.Component.EventType.ACTION, this.handleMenuAction);
  $method$$.call($handler$$, $menu$$, goog.ui.Component.EventType.HIGHLIGHT, this.handleHighlightItem);
  $method$$.call($handler$$, $menu$$, goog.ui.Component.EventType.UNHIGHLIGHT, this.handleUnHighlightItem)
};
goog.ui.MenuButton.prototype.handleHighlightItem = function $goog$ui$MenuButton$$handleHighlightItem$($e$$) {
  goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.ACTIVEDESCENDANT, $e$$.target.getElement().id)
};
goog.ui.MenuButton.prototype.handleUnHighlightItem = function $goog$ui$MenuButton$$handleUnHighlightItem$() {
  this.menu_.getHighlighted() || goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.ACTIVEDESCENDANT, "")
};
goog.ui.MenuButton.prototype.attachPopupListeners_ = function $goog$ui$MenuButton$$attachPopupListeners_$($attach$$) {
  var $handler$$ = this.getHandler(), $method$$ = $attach$$ ? $handler$$.listen : $handler$$.unlisten;
  $method$$.call($handler$$, this.getDomHelper().getDocument(), goog.events.EventType.MOUSEDOWN, this.handleDocumentMouseDown, !0);
  this.isFocusablePopupMenu() && $method$$.call($handler$$, this.menu_, goog.ui.Component.EventType.BLUR, this.handleMenuBlur);
  $method$$.call($handler$$, this.timer_, goog.Timer.TICK, this.onTick_);
  $attach$$ ? this.timer_.start() : this.timer_.stop()
};
goog.ui.registry.setDecoratorByClassName(goog.ui.MenuButtonRenderer.CSS_CLASS, function() {
  return new goog.ui.MenuButton(null)
});
goog.ui.SelectionModel = function $goog$ui$SelectionModel$($opt_items$$) {
  goog.events.EventTarget.call(this);
  this.items_ = [];
  this.addItems($opt_items$$)
};
goog.inherits(goog.ui.SelectionModel, goog.events.EventTarget);
goog.ui.SelectionModel.prototype.selectedItem_ = null;
goog.ui.SelectionModel.prototype.selectionHandler_ = null;
goog.ui.SelectionModel.prototype.getSelectionHandler = function $goog$ui$SelectionModel$$getSelectionHandler$() {
  return this.selectionHandler_
};
goog.ui.SelectionModel.prototype.setSelectionHandler = function $goog$ui$SelectionModel$$setSelectionHandler$($handler$$) {
  this.selectionHandler_ = $handler$$
};
goog.ui.SelectionModel.prototype.getItemCount = function $goog$ui$SelectionModel$$getItemCount$() {
  return this.items_.length
};
goog.ui.SelectionModel.prototype.indexOfItem = function $goog$ui$SelectionModel$$indexOfItem$($item$$) {
  return $item$$ ? goog.array.indexOf(this.items_, $item$$) : -1
};
goog.ui.SelectionModel.prototype.getFirst = function $goog$ui$SelectionModel$$getFirst$() {
  return this.items_[0]
};
goog.ui.SelectionModel.prototype.getLast = function $goog$ui$SelectionModel$$getLast$() {
  return this.items_[this.items_.length - 1]
};
goog.ui.SelectionModel.prototype.getItemAt = function $goog$ui$SelectionModel$$getItemAt$($index$$) {
  return this.items_[$index$$] || null
};
goog.ui.SelectionModel.prototype.addItems = function $goog$ui$SelectionModel$$addItems$($items$$) {
  $items$$ && (goog.array.forEach($items$$, function($item$$) {
    this.selectItem_($item$$, !1)
  }, this), goog.array.extend(this.items_, $items$$))
};
goog.ui.SelectionModel.prototype.addItem = function $goog$ui$SelectionModel$$addItem$($item$$) {
  this.addItemAt($item$$, this.getItemCount())
};
goog.ui.SelectionModel.prototype.addItemAt = function $goog$ui$SelectionModel$$addItemAt$($item$$, $index$$) {
  $item$$ && (this.selectItem_($item$$, !1), goog.array.insertAt(this.items_, $item$$, $index$$))
};
goog.ui.SelectionModel.prototype.removeItem = function $goog$ui$SelectionModel$$removeItem$($item$$) {
  $item$$ && goog.array.remove(this.items_, $item$$) && $item$$ == this.selectedItem_ && (this.selectedItem_ = null, this.dispatchEvent(goog.events.EventType.SELECT))
};
goog.ui.SelectionModel.prototype.removeItemAt = function $goog$ui$SelectionModel$$removeItemAt$($index$$) {
  this.removeItem(this.getItemAt($index$$))
};
goog.ui.SelectionModel.prototype.getSelectedItem = function $goog$ui$SelectionModel$$getSelectedItem$() {
  return this.selectedItem_
};
goog.ui.SelectionModel.prototype.getItems = function $goog$ui$SelectionModel$$getItems$() {
  return goog.array.clone(this.items_)
};
goog.ui.SelectionModel.prototype.setSelectedItem = function $goog$ui$SelectionModel$$setSelectedItem$($item$$) {
  $item$$ != this.selectedItem_ && (this.selectItem_(this.selectedItem_, !1), this.selectedItem_ = $item$$, this.selectItem_($item$$, !0));
  this.dispatchEvent(goog.events.EventType.SELECT)
};
goog.ui.SelectionModel.prototype.getSelectedIndex = function $goog$ui$SelectionModel$$getSelectedIndex$() {
  return this.indexOfItem(this.selectedItem_)
};
goog.ui.SelectionModel.prototype.setSelectedIndex = function $goog$ui$SelectionModel$$setSelectedIndex$($index$$) {
  this.setSelectedItem(this.getItemAt($index$$))
};
goog.ui.SelectionModel.prototype.clear = function $goog$ui$SelectionModel$$clear$() {
  goog.array.clear(this.items_);
  this.selectedItem_ = null
};
goog.ui.SelectionModel.prototype.disposeInternal = function $goog$ui$SelectionModel$$disposeInternal$() {
  goog.ui.SelectionModel.superClass_.disposeInternal.call(this);
  delete this.items_;
  this.selectedItem_ = null
};
goog.ui.SelectionModel.prototype.selectItem_ = function $goog$ui$SelectionModel$$selectItem_$($item$$, $select$$) {
  $item$$ && ("function" == typeof this.selectionHandler_ ? this.selectionHandler_($item$$, $select$$) : "function" == typeof $item$$.setSelected && $item$$.setSelected($select$$))
};
goog.ui.Select = function $goog$ui$Select$($caption$$, $opt_menu$$, $opt_renderer$$, $opt_domHelper$$) {
  goog.ui.MenuButton.call(this, $caption$$, $opt_menu$$, $opt_renderer$$, $opt_domHelper$$);
  this.setDefaultCaption($caption$$);
  this.setPreferredAriaRole(goog.dom.a11y.Role.LISTBOX)
};
goog.inherits(goog.ui.Select, goog.ui.MenuButton);
goog.ui.Select.prototype.selectionModel_ = null;
goog.ui.Select.prototype.defaultCaption_ = null;
goog.ui.Select.prototype.enterDocument = function $goog$ui$Select$$enterDocument$() {
  goog.ui.Select.superClass_.enterDocument.call(this);
  this.updateCaption();
  this.listenToSelectionModelEvents_();
  goog.dom.a11y.setState(this.getElement(), goog.dom.a11y.State.HASPOPUP, "false")
};
goog.ui.Select.prototype.decorateInternal = function $goog$ui$Select$$decorateInternal$($caption$$12_element$$) {
  goog.ui.Select.superClass_.decorateInternal.call(this, $caption$$12_element$$);
  ($caption$$12_element$$ = this.getCaption()) ? this.setDefaultCaption($caption$$12_element$$) : this.setSelectedIndex(0)
};
goog.ui.Select.prototype.disposeInternal = function $goog$ui$Select$$disposeInternal$() {
  goog.ui.Select.superClass_.disposeInternal.call(this);
  this.selectionModel_ && (this.selectionModel_.dispose(), this.selectionModel_ = null);
  this.defaultCaption_ = null
};
goog.ui.Select.prototype.handleMenuAction = function $goog$ui$Select$$handleMenuAction$($e$$) {
  this.setSelectedItem($e$$.target);
  goog.ui.Select.superClass_.handleMenuAction.call(this, $e$$);
  $e$$.stopPropagation();
  this.dispatchEvent(goog.ui.Component.EventType.ACTION)
};
goog.ui.Select.prototype.handleSelectionChange = function $goog$ui$Select$$handleSelectionChange$() {
  var $item$$ = this.getSelectedItem();
  goog.ui.Select.superClass_.setValue.call(this, $item$$ && $item$$.getValue());
  this.updateCaption()
};
goog.ui.Select.prototype.setMenu = function $goog$ui$Select$$setMenu$($menu$$) {
  var $oldMenu$$ = goog.ui.Select.superClass_.setMenu.call(this, $menu$$);
  $menu$$ != $oldMenu$$ && (this.selectionModel_ && this.selectionModel_.clear(), $menu$$ && (this.selectionModel_ ? $menu$$.forEachChild(function($child$$) {
    this.setCorrectAriaRole_($child$$);
    this.selectionModel_.addItem($child$$)
  }, this) : this.createSelectionModel_($menu$$)));
  return $oldMenu$$
};
goog.ui.Select.prototype.getDefaultCaption = function $goog$ui$Select$$getDefaultCaption$() {
  return this.defaultCaption_
};
goog.ui.Select.prototype.setDefaultCaption = function $goog$ui$Select$$setDefaultCaption$($caption$$) {
  this.defaultCaption_ = $caption$$;
  this.updateCaption()
};
goog.ui.Select.prototype.addItem = function $goog$ui$Select$$addItem$($item$$) {
  this.setCorrectAriaRole_($item$$);
  goog.ui.Select.superClass_.addItem.call(this, $item$$);
  this.selectionModel_ ? this.selectionModel_.addItem($item$$) : this.createSelectionModel_(this.getMenu())
};
goog.ui.Select.prototype.addItemAt = function $goog$ui$Select$$addItemAt$($item$$, $index$$) {
  this.setCorrectAriaRole_($item$$);
  goog.ui.Select.superClass_.addItemAt.call(this, $item$$, $index$$);
  this.selectionModel_ ? this.selectionModel_.addItemAt($item$$, $index$$) : this.createSelectionModel_(this.getMenu())
};
goog.ui.Select.prototype.removeItem = function $goog$ui$Select$$removeItem$($item$$) {
  goog.ui.Select.superClass_.removeItem.call(this, $item$$);
  this.selectionModel_ && this.selectionModel_.removeItem($item$$)
};
goog.ui.Select.prototype.removeItemAt = function $goog$ui$Select$$removeItemAt$($index$$) {
  goog.ui.Select.superClass_.removeItemAt.call(this, $index$$);
  this.selectionModel_ && this.selectionModel_.removeItemAt($index$$)
};
goog.ui.Select.prototype.setSelectedItem = function $goog$ui$Select$$setSelectedItem$($item$$) {
  if(this.selectionModel_) {
    var $prevItem$$ = this.getSelectedItem();
    this.selectionModel_.setSelectedItem($item$$);
    $item$$ != $prevItem$$ && this.dispatchEvent(goog.ui.Component.EventType.CHANGE)
  }
};
goog.ui.Select.prototype.setSelectedIndex = function $goog$ui$Select$$setSelectedIndex$($index$$) {
  this.selectionModel_ && this.setSelectedItem(this.selectionModel_.getItemAt($index$$))
};
goog.ui.Select.prototype.setValue = function $goog$ui$Select$$setValue$($value$$) {
  if(goog.isDefAndNotNull($value$$) && this.selectionModel_) {
    for(var $i$$ = 0, $item$$;$item$$ = this.selectionModel_.getItemAt($i$$);$i$$++) {
      if($item$$ && "function" == typeof $item$$.getValue && $item$$.getValue() == $value$$) {
        this.setSelectedItem($item$$);
        return
      }
    }
  }
  this.setSelectedItem(null)
};
goog.ui.Select.prototype.getSelectedItem = function $goog$ui$Select$$getSelectedItem$() {
  return this.selectionModel_ ? this.selectionModel_.getSelectedItem() : null
};
goog.ui.Select.prototype.getSelectedIndex = function $goog$ui$Select$$getSelectedIndex$() {
  return this.selectionModel_ ? this.selectionModel_.getSelectedIndex() : -1
};
goog.ui.Select.prototype.getSelectionModel = function $goog$ui$Select$$getSelectionModel$() {
  return this.selectionModel_
};
goog.ui.Select.prototype.createSelectionModel_ = function $goog$ui$Select$$createSelectionModel_$($opt_component$$) {
  this.selectionModel_ = new goog.ui.SelectionModel;
  $opt_component$$ && $opt_component$$.forEachChild(function($child$$) {
    this.setCorrectAriaRole_($child$$);
    this.selectionModel_.addItem($child$$)
  }, this);
  this.listenToSelectionModelEvents_()
};
goog.ui.Select.prototype.listenToSelectionModelEvents_ = function $goog$ui$Select$$listenToSelectionModelEvents_$() {
  this.selectionModel_ && this.getHandler().listen(this.selectionModel_, goog.events.EventType.SELECT, this.handleSelectionChange)
};
goog.ui.Select.prototype.updateCaption = function $goog$ui$Select$$updateCaption$() {
  var $item$$ = this.getSelectedItem();
  this.setContent($item$$ ? $item$$.getCaption() : this.defaultCaption_)
};
goog.ui.Select.prototype.setCorrectAriaRole_ = function $goog$ui$Select$$setCorrectAriaRole_$($item$$) {
  $item$$.setPreferredAriaRole($item$$ instanceof goog.ui.MenuItem ? goog.dom.a11y.Role.OPTION : goog.dom.a11y.Role.SEPARATOR)
};
goog.ui.Select.prototype.setOpen = function $goog$ui$Select$$setOpen$($open$$, $opt_e$$) {
  goog.ui.Select.superClass_.setOpen.call(this, $open$$, $opt_e$$);
  this.isOpen() && this.getMenu().setHighlightedIndex(this.getSelectedIndex())
};
goog.ui.registry.setDecoratorByClassName("goog-select", function() {
  return new goog.ui.Select(null)
});
th.fixedtoolbar.dialogs.NonModalDialogBase = function $th$fixedtoolbar$dialogs$NonModalDialogBase$() {
  this.m_dialog = null;
  this.m_lastLookup = "";
  this.m_contentFrame = null
};
th.fixedtoolbar.dialogs.NonModalDialogBase.prototype.initialise = function $th$fixedtoolbar$dialogs$NonModalDialogBase$$initialise$($dialogName$$) {
  try {
    this.m_dialogName = $dialogName$$, this.m_dialog = new goog.ui.Dialog("gdwr-dialog", !0), this.m_dialog.setButtonSet(null), this.m_dialog.setModal(!1), this.m_dialog.setDraggable(!0), this.m_dialog.setHasTitleCloseButton(!0), this.m_dialog.setVisible(!0), this.m_dialog.setVisible(!1), texthelp.webreaderapi.HelpersSingleton.getInstance().addClassName(this.m_dialog.getDialogElement(), "gdwr-" + this.m_dialogName + "-dialog")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.NonModalDialogBase.prototype.show = function $th$fixedtoolbar$dialogs$NonModalDialogBase$$show$() {
  this.m_dialog.setVisible(!0)
};
th.fixedtoolbar.dialogs.NonModalDialogBase.prototype.hide = function $th$fixedtoolbar$dialogs$NonModalDialogBase$$hide$() {
  try {
    this.m_dialog.setVisible(!1)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.NonModalDialogBase.prototype.savePosition = function $th$fixedtoolbar$dialogs$NonModalDialogBase$$savePosition$() {
  try {
    this.m_contentFrame.contentWindow.postMessage("stop:", texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    var $top$$ = goog.style.getStyle(this.m_dialog.getDialogElement(), "top"), $left$$ = goog.style.getStyle(this.m_dialog.getDialogElement(), "left"), $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings();
    $userSettings$$[this.m_dialogName].position = $left$$ + "," + $top$$;
    texthelp.webreader.UserSettingsSingleton.getInstance().saveUserSettings($userSettings$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.NonModalDialogBase.prototype.clearDialog = function $th$fixedtoolbar$dialogs$NonModalDialogBase$$clearDialog$() {
  try {
    null === this.m_contentFrame && (this.m_contentFrame = goog.dom.getElement(this.m_dialogName + "Frame")), this.m_contentFrame.contentWindow.postMessage("clear:", texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$() {
  th.fixedtoolbar.dialogs.NonModalDialogBase.call(this);
  this.m_sortSelect = this.m_buttonsContainer = null;
  this.m_currentSort = 0;
  this.m_updating = !1;
  this.m_sortsAlgorithms = [];
  this.m_collectedHighlights = null
};
goog.inherits(th.fixedtoolbar.dialogs.CollectHighlightsDialog, th.fixedtoolbar.dialogs.NonModalDialogBase);
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.initialise = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$initialise$() {
  th.fixedtoolbar.dialogs.CollectHighlightsDialog.superClass_.initialise.call(this, "collecthighlights");
  this.m_dialog.setTitle("Collected Highlights");
  this.m_dialog.setContent("<html><head/><body><div class='thchButtons gdwr-disabled'><select id='sortSelect' class='thSelect'><option value='0'>color</option><option value='1'>position</option></select><span class='sortLabel'>Sort highlights by </span></div><iframe id='collecthighlightsFrame'name='collecthighlightsFrame' src='" + texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation() + "chdialog.html' style='width:800px;height:300px' frameborder='0'></iframe><div class='thchFooter gdwr-enabled'><button style='float:none' class='goog-button gdwr-dialog-button thSelectAll'>Copy to Clipboard</button><span></span></div></body></html>");
  this.m_sortsAlgorithms[0] = this.sortByColor_;
  this.m_sortsAlgorithms[1] = this.sortByOrder_;
  this.m_sortSelect = goog.dom.getElementByClass("thSelect");
  goog.events.listen(this.m_sortSelect, goog.events.EventType.MOUSEUP, this.onSort_, !1, this);
  this.m_selectAll = goog.dom.getElementByClass("thSelectAll");
  goog.events.listen(this.m_selectAll, goog.events.EventType.MOUSEUP, this.onSelectAll_, !1, this);
  goog.events.listen(this.m_dialog.getDialogElement(), goog.events.EventType.MOUSEUP, this.onRepositioned, !1, this)
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.showDialog = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$showDialog$() {
  try {
    this.m_updating = !0;
    texthelp.webreaderapi.HelpersSingleton.getInstance().changeClassName(this.m_buttonsContainer, "gdwr-enabled", "gdwr-disabled");
    this.m_buttonsEnabled = !1;
    this.show();
    var $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings(), $position$$ = $userSettings$$[this.m_dialogName].position.split(",");
    this.m_sortSelect[$userSettings$$.collecthighlights.sortAlgorithm].selected = !0;
    goog.dom.setProperties(this.m_dialog.getDialogElement(), {style:"top: " + $position$$[1] + "; left: " + $position$$[0]})
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.onCollectHighlightsResponse = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$onCollectHighlightsResponse$($currentHighlights$$) {
  try {
    var $frameElem$$ = goog.dom.getElement("collecthighlightsFrame"), $voice$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.voice;
    $frameElem$$.contentWindow.postMessage("voice:" + $voice$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    var $speed$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.speed;
    $frameElem$$.contentWindow.postMessage("speed:" + $speed$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    this.m_collectedHighlights = $currentHighlights$$;
    this.updateHighighlights_()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.onRepositioned = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$onRepositioned$() {
  try {
    this.savePosition()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.clearDialog = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$clearDialog$() {
  th.fixedtoolbar.dialogs.CollectHighlightsDialog.superClass_.clearDialog.call(this)
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.onSort_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$onSort_$() {
  try {
    if(!this.m_updating && this.m_currentSort !== this.m_sortSelect.selectedIndex) {
      var $userSettings$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings();
      $userSettings$$.collecthighlights.sortAlgorithm = this.m_sortSelect.selectedIndex;
      texthelp.webreader.UserSettingsSingleton.getInstance().saveUserSettings($userSettings$$);
      this.m_updating || (this.clearDialog(), this.updateHighighlights_(), document.createRange().selectNodeContents(document.body))
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.onSelectAll_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$onSelectAll_$() {
  try {
    var $frameElem$$ = goog.dom.getElement("collecthighlightsFrame");
    $frameElem$$.contentWindow.postMessage("copyHighlights:", texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    $frameElem$$.contentWindow.focus()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.sortByColor_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$sortByColor_$($a$$, $b$$) {
  try {
    return $a$$.hsl[0] > $b$$.hsl[0] ? 1 : $a$$.hsl[0] < $b$$.hsl[0] ? -1 : 0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.zValue_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$zValue_$($r$$, $g$$, $b$$) {
  return this.split_($r$$) + (this.split_($g$$) << 1) + (this.split_($b$$) << 2)
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.split_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$split_$($a$$) {
  $a$$ = ($a$$ | $a$$ << 12) & 3145983;
  $a$$ = ($a$$ | $a$$ << 8) & 3207183;
  $a$$ = ($a$$ | $a$$ << 4) & 51130563;
  return($a$$ | $a$$ << 2) & 153391689
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.sortByOrder_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$sortByOrder_$($a$$, $b$$) {
  try {
    return $a$$.id > $b$$.id ? 1 : $a$$.id < $b$$.id ? -1 : 0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.CollectHighlightsDialog.prototype.updateHighighlights_ = function $th$fixedtoolbar$dialogs$CollectHighlightsDialog$$updateHighighlights_$() {
  try {
    var $currHighlights$$ = this.m_collectedHighlights.highlights, $frameElem$$ = goog.dom.getElement("collecthighlightsFrame");
    this.m_currentSort = this.m_sortSelect.selectedIndex;
    $currHighlights$$.sort(this.m_sortsAlgorithms[this.m_currentSort]);
    for(var $responseHtml$$ = "<div>", $highlight$$ = null, $index$$ = 0;$index$$ < $currHighlights$$.length;$index$$++) {
      $highlight$$ = $currHighlights$$[$index$$], $responseHtml$$ += '<span style="background-color:' + $highlight$$.colorRGB + ';">' + $highlight$$.text + "</span><br><br>"
    }
    $responseHtml$$ += "<div>" + this.m_collectedHighlights.title + "</div><div>" + this.m_collectedHighlights.user + "<br>" + this.m_collectedHighlights.link + "</div></div>";
    $frameElem$$.contentWindow.postMessage("content:" + $responseHtml$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    this.m_buttonsEnabled = !0;
    this.m_updating = !1
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.DictionaryDialog = function $th$fixedtoolbar$dialogs$DictionaryDialog$() {
  th.fixedtoolbar.dialogs.NonModalDialogBase.call(this)
};
goog.inherits(th.fixedtoolbar.dialogs.DictionaryDialog, th.fixedtoolbar.dialogs.NonModalDialogBase);
th.fixedtoolbar.dialogs.DictionaryDialog.prototype.initialise = function $th$fixedtoolbar$dialogs$DictionaryDialog$$initialise$() {
  th.fixedtoolbar.dialogs.DictionaryDialog.superClass_.initialise.call(this, "dictionary");
  this.m_dialog.setTitle("Dictionary");
  this.m_dialog.setContent("<html><head/><body><iframe id='dictionaryFrame'name='dictionaryFrame' src='" + texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation() + "dialog.html' style='width:500px;height:150px' frameborder='0'></iframe></body></html>");
  goog.events.listen(this.m_dialog.getDialogElement(), goog.events.EventType.MOUSEUP, this.onRepositioned, !1, this)
};
th.fixedtoolbar.dialogs.DictionaryDialog.prototype.showDialog = function $th$fixedtoolbar$dialogs$DictionaryDialog$$showDialog$() {
  try {
    this.show();
    var $position$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings()[this.m_dialogName].position.split(",");
    goog.dom.setProperties(this.m_dialog.getDialogElement(), {style:"top: " + $position$$[1] + "; left: " + $position$$[0]})
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.DictionaryDialog.prototype.onDictionaryResponse = function $th$fixedtoolbar$dialogs$DictionaryDialog$$onDictionaryResponse$($response$$) {
  try {
    var $frameElem$$ = goog.dom.getElement("dictionaryFrame"), $voice$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.voice;
    $frameElem$$.contentWindow.postMessage("voice:" + $voice$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    var $speed$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.speed;
    $frameElem$$.contentWindow.postMessage("speed:" + $speed$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    null === $response$$ && ($response$$ = "<div class='rwDictWordHeader'><b>No valid word selected.</b></div>");
    1 > $response$$.length ? this.hide() : $frameElem$$.contentWindow.postMessage("content:" + $response$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.DictionaryDialog.prototype.onRepositioned = function $th$fixedtoolbar$dialogs$DictionaryDialog$$onRepositioned$() {
  try {
    this.savePosition()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.DictionaryDialog.prototype.clearDialog = function $th$fixedtoolbar$dialogs$DictionaryDialog$$clearDialog$() {
  th.fixedtoolbar.dialogs.DictionaryDialog.superClass_.clearDialog.call(this)
};
th.fixedtoolbar.dialogs.PictureDictionaryDialog = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$() {
  th.fixedtoolbar.dialogs.NonModalDialogBase.call(this)
};
goog.inherits(th.fixedtoolbar.dialogs.PictureDictionaryDialog, th.fixedtoolbar.dialogs.NonModalDialogBase);
th.fixedtoolbar.dialogs.PictureDictionaryDialog.prototype.initialise = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$$initialise$() {
  try {
    th.fixedtoolbar.dialogs.PictureDictionaryDialog.superClass_.initialise.call(this, "picturedictionary"), this.m_dialog.setTitle("Picture Dictionary"), this.m_dialog.setContent("<html><head/><body><iframe id='picturedictionaryFrame' name='picturedictionaryFrame' src='" + texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation() + "dialog.html' style='width:185px;height:445px' frameborder='0'></iframe></body></html>"), this.m_currentWord = "", goog.events.listen(this.m_dialog.getDialogElement(), 
    goog.events.EventType.MOUSEUP, this.onRepositioned, !1, this)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.PictureDictionaryDialog.prototype.showDialog = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$$showDialog$() {
  try {
    this.show();
    var $position$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings()[this.m_dialogName].position.split(",");
    goog.dom.setProperties(this.m_dialog.getDialogElement(), {style:"top: " + $position$$[1] + "; left: " + $position$$[0]})
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.PictureDictionaryDialog.prototype.onPictureDictionaryResponse = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$$onPictureDictionaryResponse$($response$$) {
  try {
    var $frameElem$$ = goog.dom.getElement("picturedictionaryFrame"), $voice$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.voice;
    $frameElem$$.contentWindow.postMessage("voice:" + $voice$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    var $speed$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.speed;
    $frameElem$$.contentWindow.postMessage("speed:" + $speed$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation());
    null === $response$$ && ($response$$ = "<div class='rwDictWordHeader'><b>No valid word selected.</b></div>");
    1 > $response$$.length ? this.hide() : $frameElem$$.contentWindow.postMessage("content:" + $response$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.PictureDictionaryDialog.prototype.onRepositioned = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$$onRepositioned$() {
  try {
    this.savePosition()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.PictureDictionaryDialog.prototype.clearDialog = function $th$fixedtoolbar$dialogs$PictureDictionaryDialog$$clearDialog$() {
  th.fixedtoolbar.dialogs.PictureDictionaryDialog.superClass_.clearDialog.call(this)
};
th.fixedtoolbar.dialogs.TranslatorDialog = function $th$fixedtoolbar$dialogs$TranslatorDialog$() {
  th.fixedtoolbar.dialogs.NonModalDialogBase.call(this);
  this.m_hexcase = 0;
  this.m_b64pad = "";
  this.m_chrsz = 8
};
goog.inherits(th.fixedtoolbar.dialogs.TranslatorDialog, th.fixedtoolbar.dialogs.NonModalDialogBase);
th.fixedtoolbar.dialogs.TranslatorDialog.prototype.initialise = function $th$fixedtoolbar$dialogs$TranslatorDialog$$initialise$() {
  th.fixedtoolbar.dialogs.TranslatorDialog.superClass_.initialise.call(this, "translator");
  this.m_dialog.setTitle("Translator");
  this.m_dialog.setContent("<html><head/><body><iframe id='translatorFrame' name='translatorFrame' src='" + texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation() + "dialog.html' style='width:500px;height:250px' frameborder='0'></iframe></body></html>");
  goog.events.listen(this.m_dialog.getDialogElement(), goog.events.EventType.MOUSEUP, this.onRepositioned_, !1, this)
};
th.fixedtoolbar.dialogs.TranslatorDialog.prototype.showDialog = function $th$fixedtoolbar$dialogs$TranslatorDialog$$showDialog$() {
  try {
    this.show();
    var $position$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings()[this.m_dialogName].position.split(",");
    goog.dom.setProperties(this.m_dialog.getDialogElement(), {style:"top: " + $position$$[1] + "; left: " + $position$$[0]})
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.TranslatorDialog.prototype.onTranslatorResponse = function $th$fixedtoolbar$dialogs$TranslatorDialog$$onTranslatorResponse$($response$$) {
  try {
    var $frameElem$$ = goog.dom.getElement("translatorFrame");
    null === $response$$ && ($response$$ = "<div class='rwTranWordHeader'><b>No valid word selected.</b></div>");
    1 > $response$$.length ? this.hide() : $frameElem$$.contentWindow.postMessage("content:" + $response$$, texthelp.webreaderapi.HelpersSingleton.getInstance().getRootLocation())
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.TranslatorDialog.prototype.onRepositioned_ = function $th$fixedtoolbar$dialogs$TranslatorDialog$$onRepositioned_$() {
  try {
    this.savePosition()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.fixedtoolbar.dialogs.TranslatorDialog.prototype.clearDialog = function $th$fixedtoolbar$dialogs$TranslatorDialog$$clearDialog$() {
  th.fixedtoolbar.dialogs.TranslatorDialog.superClass_.clearDialog.call(this)
};
goog.module.ModuleManager.getInstance().setLoaded("FixedToolbar");
}})(__textHelp__);
//@ sourceURL=chrome-extension://chfpnoffckhdeckmacafcjanjcbfghpa/src/textHelp_FixedToolbar.js