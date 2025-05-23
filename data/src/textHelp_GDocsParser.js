(function(a){with(a){
texthelp.webreaderapi.HelpersSingleton.prototype.getTextNodesIn = JSCompiler_unstubMethod(12, function($node$$0$$, $includeWhitespaceNodes$$) {
  function $getTextNodes$$($node$$) {
    if(3 == $node$$.nodeType) {
      ($includeWhitespaceNodes$$ || !$whitespace$$.test($node$$.nodeValue)) && $textNodes$$.push($node$$)
    }else {
      for(var $i$$ = 0, $len$$ = $node$$.childNodes.length;$i$$ < $len$$;++$i$$) {
        $getTextNodes$$($node$$.childNodes[$i$$])
      }
    }
  }
  var $textNodes$$ = [], $whitespace$$ = /^\s*$/;
  $getTextNodes$$($node$$0$$);
  return $textNodes$$
});
th.parsers = {};
th.parsers.Parser = function $th$parsers$Parser$() {
  this.CONST_DOCSELEMENTCLASS = "kix-paginateddocumentplugin";
  this.CONST_HIGHLITESCLASS = "kix-selection-overlay";
  this.CONST_HIGHLITESCLASSMAC = "kix-selection-overlay-mac";
  this.CONST_DOCSEDITORCLASS = "kix-appview-editor";
  this.CONST_CURSOR = "kix-cursor";
  this.CONST_CURSOR_CARET = "kix-cursor-caret";
  this.CONST_LINE = "kix-lineview";
  this.CONST_LINE_BLOCK = "kix-lineview-text-block";
  this.CONST_PARAGRAPH = "kix-paragraphrenderer";
  this.CONST_DOCSPAGE = "kix-page";
  this.CONST_DOCSTITLE = "docs-title-inner";
  this.CONST_DOCSUSERNAME = "docos-streampane-username";
  this.CONST_NAMESPACE = "xmlns";
  this.CONST_TEXTHELPNS = "thRWGDns";
  this.CONST_NSHEADER = this.CONST_NAMESPACE + ":" + this.CONST_TEXTHELPNS;
  this.CONST_CUSTOMTAG = "thCTag";
  this.CONST_NODENAME = this.CONST_TEXTHELPNS.toUpperCase() + ":" + this.CONST_CUSTOMTAG.toUpperCase();
  this.CONST_NSCUSTOMTAG = this.CONST_TEXTHELPNS + ":" + this.CONST_CUSTOMTAG;
  this.CONST_NSCUSTOMTAGREG = this.CONST_TEXTHELPNS + "\\:" + this.CONST_CUSTOMTAG;
  this.CONST_THCLASS = "textHELPWR";
  this.CONST_WORDCLASS = "thWord";
  this.CONST_SPACECLASS = "thSpace";
  this.CONST_THID = "thNum";
  this.CONST_DOCS_DELAY = 100;
  this.m_endElement = this.m_startElement = null;
  this.m_currentWordNumber = -1;
  this.m_wordOffset = 0;
  this.m_prevColor = this.m_prevBackColor = null;
  this.m_config = texthelp.webreader.ConfigurationSingleton.getInstance().getConfiguration();
  this.m_wordEndRegExpressions = this.m_config.sentences.wordEnds;
  this.m_wordsHTML = [];
  this.m_currentLineElem = null;
  this.m_startPosition = 0;
  this.m_currentPages = null;
  this.m_editorWindow = goog.dom.getElementByClass(this.CONST_DOCSEDITORCLASS);
  this.m_origElements = [];
  this.m_nextLine = null;
  this.m_elementLeftPos = -1;
  this.m_docFullyRendered = !1;
  this.m_endSelectPos = null;
  this.m_lengthOfTextAfterSelection = this.m_lengthOfTextBeforeSelection = 0;
  this.m_onMessageResponse = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.onMessageResponse);
  window.addEventListener("message", this.m_onMessageResponse);
  this.renderAllPages_(this.renderCallback)
};
goog.inherits(th.parsers.Parser, texthelp.webreaderapi.DefaultParser);
th.parsers.Parser.prototype.renderCallback = function $th$parsers$Parser$$renderCallback$() {
};
th.parsers.Parser.prototype.hiliteSelection = function $th$parsers$Parser$$hiliteSelection$() {
  try {
    for(var $words$$ = this.getSelection_(), $hasSentenceBreak$$ = !1, $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance(), $sentenceEndExclusions$$ = this.m_config.sentences.sentenceEndExclusions, $wordIndex$$ = 0;$wordIndex$$ < $words$$.length - 1;$wordIndex$$++) {
      if(!$helper$$.arrayContains($sentenceEndExclusions$$, $words$$[$wordIndex$$])) {
        for(var $expression$$ in this.m_wordEndRegExpressions) {
          -1 !== $words$$[$wordIndex$$].search(this.m_wordEndRegExpressions[$expression$$]) && ($hasSentenceBreak$$ = !0, $wordIndex$$ = $words$$.length)
        }
      }
    }
    if(!$hasSentenceBreak$$) {
      return $words$$
    }
    var $highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    if(1 > $highlights$$.length && ($highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC), 1 > $highlights$$.length)) {
      return this.hiliteSentenceFromCursor_()
    }
    var $highlights$$ = Array.prototype.slice.call($highlights$$, 0), $boundSort$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.sortHighlights_);
    $highlights$$.sort($boundSort$$);
    this.clearSelection_();
    var $startSelectPos$$ = goog.style.getPageOffset($highlights$$[0]), $midHeight$$ = goog.style.getStyle($highlights$$[0], "height"), $midHeight$$ = $midHeight$$.substr(0, $midHeight$$.length - 2), $midHeight$$ = parseInt($midHeight$$, 10);
    $startSelectPos$$.y += $midHeight$$ / 2;
    this.m_endSelectPos = goog.style.getPageOffset($highlights$$[$highlights$$.length - 1]);
    var $widthOfSel$$ = goog.style.getStyle($highlights$$[$highlights$$.length - 1], "width"), $widthOfSel$$ = $widthOfSel$$.substr(0, $widthOfSel$$.length - 2), $widthOfSel$$ = parseInt($widthOfSel$$, 10);
    this.m_endSelectPos.x += $widthOfSel$$;
    return this.hiliteSentenceFromPoint_($startSelectPos$$.x, $startSelectPos$$.y)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hasSelection = function $th$parsers$Parser$$hasSelection$() {
  try {
    var $highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    return 1 > $highlights$$.length && ($highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC), 1 > $highlights$$.length) ? !1 : !0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getWord = function $th$parsers$Parser$$getWord$() {
  try {
    var $word$$ = [], $highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    if(1 > $highlights$$.length && ($highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC), 1 > $highlights$$.length)) {
      var $cursor$$ = goog.dom.getElementByClass(this.CONST_CURSOR);
      if(null !== $cursor$$) {
        var $cursorPosition$$ = goog.style.getPageOffset($cursor$$), $caret$$ = goog.dom.getElementByClass(this.CONST_CURSOR_CARET), $caretMidHeight$$ = goog.style.getStyle($caret$$, "height"), $caretMidHeight$$ = $caretMidHeight$$.substr(0, $caretMidHeight$$.length - 2), $caretMidHeight$$ = parseInt($caretMidHeight$$, 10);
        $cursorPosition$$.y += $caretMidHeight$$ / 2;
        this.hiliteSentenceFromPoint_($cursorPosition$$.x, $cursorPosition$$.y);
        $cursorPosition$$.x += 2;
        $cursorPosition$$.y += 4;
        var $highlights$$ = "", $wordElem$$ = this.getWordElementFromPoint_($cursorPosition$$.x, $cursorPosition$$.y, 0);
        if(null === $wordElem$$) {
          return this.clearSelection_(), $word$$
        }
        $highlights$$ = $wordElem$$.innerText;
        this.clearSelection_();
        $word$$.push($highlights$$)
      }
      return $word$$
    }
    $word$$.push(this.getSelection_()[0]);
    this.clearSelection_();
    return $word$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelectionRange = function $th$parsers$Parser$$getSelectionRange$() {
  try {
    this.getSelectionOnly_();
    var $range$$ = {};
    $range$$.firstWord = goog.dom.getRawTextContent(goog.dom.getElementsByClass(this.CONST_WORDCLASS)[0]);
    if(!(1 > $range$$.firstWord.length)) {
      for(var $editor$$ = goog.dom.getElementByClass(this.CONST_DOCSEDITORCLASS), $prevText$$ = $editor$$.innerHTML.split("<thrwgdns:thctag")[0], $elems$$ = $prevText$$.split(">"), $stringElems$$ = [], $i$$ = 0;$i$$ < $elems$$.length;$i$$++) {
        var $currString$$ = $elems$$[$i$$];
        "<" != $currString$$.substr(0, 1) && $stringElems$$.push($currString$$.split("<")[0])
      }
      var $combinedPreString$$ = $stringElems$$.join(" ");
      $range$$.startWordCount = $combinedPreString$$.split($range$$.firstWord).length - 1;
      var $words$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
      $range$$.lastWord = $range$$.firstWord;
      $range$$.lastWordCount = $range$$.startWordCount;
      $range$$.lastWord = goog.dom.getRawTextContent($words$$[$words$$.length - 1]);
      if(0 < $range$$.lastWord.length) {
        var $wordsSplits$$ = $editor$$.innerHTML.split("</thrwgdns:thctag>");
        $wordsSplits$$[$wordsSplits$$.length - 1] = null;
        $prevText$$ = $wordsSplits$$.join();
        $prevText$$ = $prevText$$.substr(0, $prevText$$.length - 2);
        $elems$$ = $prevText$$.split(">");
        $stringElems$$ = [];
        for($i$$ = 0;$i$$ < $elems$$.length;$i$$++) {
          $currString$$ = $elems$$[$i$$], "<" != $currString$$.substr(0, 1) && $stringElems$$.push($currString$$.split("<")[0])
        }
        var $combinedPostString$$ = $stringElems$$.join(" ");
        $range$$.lastWordCount = $combinedPostString$$.split($range$$.lastWord).length - 1
      }
      this.clearSelection_();
      return $range$$
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.highlightSelection = function $th$parsers$Parser$$highlightSelection$($color$$) {
  try {
    var $range$$ = this.getSelectionRange(), $payload$$ = '{ "doc":"' + window.location.href + '","color":"' + $color$$ + '","startWordCount":"' + $range$$.startWordCount + '", "startWord":"' + escape($range$$.firstWord) + '", "endWordCount":"' + $range$$.lastWordCount + '", "endWord":"' + escape($range$$.lastWord) + '"}', $payload$$ = goog.json.parse($payload$$);
    window.postMessage({method:"highlightSelection", type:"1757FROM_PAGE", payload:$payload$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearHighlights = function $th$parsers$Parser$$clearHighlights$() {
  try {
    var $range$$ = this.getSelectionRange(), $payload$$ = '{ "doc":"' + window.location.href + '","startWordCount":"' + $range$$.startWordCount + '", "startWord":"' + escape($range$$.firstWord) + '", "endWordCount":"' + $range$$.lastWordCount + '", "endWord":"' + escape($range$$.lastWord) + '"}', $payload$$ = goog.json.parse($payload$$);
    window.postMessage({method:"clearHighlights", type:"1757FROM_PAGE", payload:$payload$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelectionOnly_ = function $th$parsers$Parser$$getSelectionOnly_$() {
  try {
    var $wordArray$$ = [], $highlights$$4_index$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    if(1 > $highlights$$4_index$$.length && ($highlights$$4_index$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC), 1 > $highlights$$4_index$$.length)) {
      return $wordArray$$
    }
    var $highlights$$4_index$$ = Array.prototype.slice.call($highlights$$4_index$$, 0), $boundSort$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.sortHighlights_);
    $highlights$$4_index$$.sort($boundSort$$);
    for(var $boundSort$$ = [], $selectedLine_textBlocks$$ = null, $firstTextBlock_selectedLines$$ = null, $lastLine_lineIndex$$ = null, $blockIndex_highlightIndex$$ = 0;$blockIndex_highlightIndex$$ < $highlights$$4_index$$.length;$blockIndex_highlightIndex$$++) {
      for(var $firstTextBlock_selectedLines$$ = goog.dom.getElementsByClass(this.CONST_LINE, $highlights$$4_index$$[$blockIndex_highlightIndex$$].parentNode), $selectedLineIndex$$ = 0;$selectedLineIndex$$ < $firstTextBlock_selectedLines$$.length;$selectedLineIndex$$++) {
        $firstTextBlock_selectedLines$$[$selectedLineIndex$$] !== $lastLine_lineIndex$$ && ($boundSort$$.push($firstTextBlock_selectedLines$$[$selectedLineIndex$$]), $lastLine_lineIndex$$ = $firstTextBlock_selectedLines$$[$selectedLineIndex$$])
      }
      1 > $firstTextBlock_selectedLines$$.length && ($selectedLine_textBlocks$$ = goog.dom.getAncestorByClass($highlights$$4_index$$[$blockIndex_highlightIndex$$], this.CONST_LINE), $selectedLine_textBlocks$$ !== $lastLine_lineIndex$$ && ($boundSort$$.push($selectedLine_textBlocks$$), $lastLine_lineIndex$$ = $selectedLine_textBlocks$$))
    }
    $firstTextBlock_selectedLines$$ = $selectedLine_textBlocks$$ = null;
    for($lastLine_lineIndex$$ = 0;$lastLine_lineIndex$$ < $boundSort$$.length;$lastLine_lineIndex$$++) {
      $selectedLine_textBlocks$$ = goog.dom.getElementsByClass(this.CONST_LINE_BLOCK, $boundSort$$[$lastLine_lineIndex$$]);
      for($blockIndex_highlightIndex$$ = 0;$blockIndex_highlightIndex$$ < $selectedLine_textBlocks$$.length;$blockIndex_highlightIndex$$++) {
        this.parseElement_($selectedLine_textBlocks$$[$blockIndex_highlightIndex$$]), null === $firstTextBlock_selectedLines$$ && ($firstTextBlock_selectedLines$$ = $selectedLine_textBlocks$$[$blockIndex_highlightIndex$$])
      }
    }
    var $startPos$$ = goog.style.getRelativePosition($highlights$$4_index$$[0], this.m_editorWindow), $endPos$$ = goog.style.getRelativePosition($highlights$$4_index$$[$highlights$$4_index$$.length - 1], this.m_editorWindow), $endWidth$$ = goog.style.getSize($highlights$$4_index$$[$highlights$$4_index$$.length - 1]);
    $endPos$$.x += $endWidth$$.width;
    this.clearBeforePosition_($startPos$$);
    this.clearAfterPosition_($endPos$$);
    this.renumberWords_();
    this.m_wordsHTML = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    for(var $thWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS), $highlights$$4_index$$ = 0;$highlights$$4_index$$ < $thWords$$.length;$highlights$$4_index$$++) {
      $wordArray$$.push(goog.dom.getTextContent($thWords$$[$highlights$$4_index$$]))
    }
    return $wordArray$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelection = function $th$parsers$Parser$$getSelection$($callback$$) {
  try {
    this.m_getSelectionCallback = $callback$$;
    var $range$$ = this.getSelectionRange(), $payload$$ = '{ "doc":"' + window.location.href + '","startWordCount":"' + $range$$.startWordCount + '", "startWord":"' + escape($range$$.firstWord) + '", "endWordCount":"' + $range$$.lastWordCount + '", "endWord":"' + escape($range$$.lastWord) + '"}', $payload$$ = goog.json.parse($payload$$);
    window.postMessage({method:"getSelection", type:"1757FROM_PAGE", payload:$payload$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelectionLocal = function $th$parsers$Parser$$getSelectionLocal$() {
  try {
    var $words$$ = this.getSelectionOnly_();
    this.clearSelection_();
    return $words$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelection_ = function $th$parsers$Parser$$getSelection_$() {
  try {
    var $highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    return 1 > $highlights$$.length && ($highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC), 1 > $highlights$$.length) ? this.hiliteSentenceFromCursor_() : this.getSelectionOnly_()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getSelectionText = function $th$parsers$Parser$$getSelectionText$() {
  try {
    return this.getSelection_().join(" ")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearBrowserSelection = function $th$parsers$Parser$$clearBrowserSelection$() {
  try {
    this.clickOnCursor_();
    var $thElements$$ = goog.dom.getElementsByClass(this.CONST_THCLASS);
    if(0 !== $thElements$$.length) {
      for(var $currentParent$$ = $thElements$$[0].parentNode;null !== $thElements$$;) {
        $currentParent$$.innerHTML = goog.dom.getRawTextContent($currentParent$$);
        $thElements$$ = goog.dom.getElementsByClass(this.CONST_THCLASS);
        if(0 === $thElements$$.length) {
          break
        }
        $currentParent$$ = $thElements$$[0].parentNode
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.collectHighlights = function $th$parsers$Parser$$collectHighlights$($callback$$, $sort$$, $colors$$, $fileName$$) {
  try {
    this.collectHighlights_($callback$$, $sort$$, $colors$$, $fileName$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getTextWithContext = function $th$parsers$Parser$$getTextWithContext$() {
  try {
    var $selection$$ = {trailingSpace:!1}, $words$$ = this.getSelection_(), $cursor$$ = goog.dom.getElementByClass(this.CONST_CURSOR);
    if(null !== $cursor$$) {
      var $cursorPosition$$ = goog.style.getPageOffset($cursor$$), $caret$$ = goog.dom.getElementByClass(this.CONST_CURSOR_CARET), $caretMidHeight$$ = goog.style.getStyle($caret$$, "height"), $caretMidHeight$$ = $caretMidHeight$$.substr(0, $caretMidHeight$$.length - 2), $caretMidHeight$$ = parseInt($caretMidHeight$$, 10);
      $cursorPosition$$.y += $caretMidHeight$$ / 2;
      $cursorPosition$$.x += 2;
      $cursorPosition$$.y += 4;
      var $wordElem$$ = this.getWordElementFromPoint_($cursorPosition$$.x, $cursorPosition$$.y, 0), $wordPosition$$ = goog.style.getPageOffset($wordElem$$);
      $wordPosition$$.x += $wordElem$$.offsetWidth;
      $wordPosition$$.y += $wordElem$$.offsetHeight;
      if($wordPosition$$.x < $cursorPosition$$.x - 2 || $wordPosition$$.y < $cursorPosition$$.y - 2) {
        $selection$$.trailingSpace = !0
      }
      $selection$$.currentWord = parseInt($wordElem$$.className.split(" ")[2])
    }
    this.clearSelection_();
    $selection$$.words = $words$$.join(" ");
    $selection$$.words.substring(0, $selection$$.words.length - 2);
    return $selection$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.collectVocabWords = function $th$parsers$Parser$$collectVocabWords$($callback$$, $sort$$, $colors$$) {
  try {
    this.getVocabWords_($callback$$, $sort$$, $colors$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hiliteWord = function $th$parsers$Parser$$hiliteWord$($wordNo$$) {
  try {
    0 < $wordNo$$ && texthelp.webreaderapi.HelpersSingleton.getInstance().removeClassName(this.m_wordsHTML[$wordNo$$ - 1], "thHighlighted"), this.scrollIntoView_(this.m_wordsHTML[$wordNo$$], this.m_editorWindow), texthelp.webreaderapi.HelpersSingleton.getInstance().addClassName(this.m_wordsHTML[$wordNo$$], "thHighlighted")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.stop = function $th$parsers$Parser$$stop$() {
  try {
    this.m_prevColor = this.m_prevBackColor = null, this.clearSelection_()
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hiliteNextSentence = function $th$parsers$Parser$$hiliteNextSentence$($p_continousReading$$) {
  try {
    var $paragraph$$ = null, $page$$ = null, $nextParagraphLine$$ = null, $nextPageLine$$ = null, $continueNextSentence$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.continousreading;
    if($p_continousReading$$ && !$continueNextSentence$$ && null === this.m_endSelectPos) {
      return this.m_nextLine = null, this.m_elementLeftPos = -1, null
    }
    if(-1 < this.m_elementLeftPos) {
      var $pos$$ = goog.style.getPageOffset(this.m_nextLine);
      $pos$$.x += this.m_elementLeftPos;
      if(!$continueNextSentence$$ && null !== this.m_endSelectPos && ($pos$$.y > this.m_endSelectPos.y || $pos$$.y === this.m_endSelectPos.y && $pos$$.x >= this.m_endSelectPos.x)) {
        return this.m_nextLine = null, this.m_elementLeftPos = -1, null
      }
      this.m_nextLine = null;
      this.m_elementLeftPos = -1;
      return this.hiliteSentenceFromPoint_($pos$$.x + 5, $pos$$.y + 2)
    }
    this.m_elementLeftPos = -1;
    if(null !== this.m_nextLine.nextSibling) {
      return this.hiliteLine_(this.m_nextLine.nextSibling)
    }
    $paragraph$$ = goog.dom.getAncestorByClass(this.m_nextLine, this.CONST_PARAGRAPH);
    if(null === $paragraph$$) {
      return null
    }
    var $nextTableLine$$ = this.getNextTableLine_($paragraph$$);
    if(null !== $nextTableLine$$) {
      return this.hiliteLine_($nextTableLine$$)
    }
    $nextParagraphLine$$ = this.getNextParagraphLine_($paragraph$$);
    if(null !== $nextParagraphLine$$) {
      return this.hiliteLine_($nextParagraphLine$$)
    }
    $page$$ = goog.dom.getAncestorByClass(this.m_nextLine, this.CONST_DOCSPAGE);
    if(null === $page$$) {
      return[]
    }
    for(;null !== $page$$.nextSibling;) {
      var $page$$ = $page$$.nextSibling, $textContent$$ = goog.dom.getTextContent($page$$);
      if(0 < $textContent$$.length && " " !== $textContent$$ && ($paragraph$$ = goog.dom.getElementByClass(this.CONST_PARAGRAPH, $page$$), $paragraph$$ = goog.dom.getElementByClass(this.CONST_PARAGRAPH, $paragraph$$), $nextPageLine$$ = this.getNextParagraphLine_($paragraph$$, !0), null !== $nextPageLine$$)) {
        return this.hiliteLine_($nextPageLine$$)
      }
    }
    return[]
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hilitePreviousSentence = function $th$parsers$Parser$$hilitePreviousSentence$() {
  try {
    throw Error("Not implemented");
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hiliteSentenceFromCursor_ = function $th$parsers$Parser$$hiliteSentenceFromCursor_$() {
  var $cursor$$2_cursorPosition$$ = goog.dom.getElementByClass(this.CONST_CURSOR);
  if(null !== $cursor$$2_cursorPosition$$) {
    var $cursor$$2_cursorPosition$$ = goog.style.getPageOffset($cursor$$2_cursorPosition$$), $caret$$2_caretMidHeight$$ = goog.dom.getElementByClass(this.CONST_CURSOR_CARET), $caret$$2_caretMidHeight$$ = goog.style.getStyle($caret$$2_caretMidHeight$$, "height"), $caret$$2_caretMidHeight$$ = $caret$$2_caretMidHeight$$.substr(0, $caret$$2_caretMidHeight$$.length - 2), $caret$$2_caretMidHeight$$ = parseInt($caret$$2_caretMidHeight$$, 10);
    $cursor$$2_cursorPosition$$.y += $caret$$2_caretMidHeight$$ / 2;
    return this.hiliteSentenceFromPoint_($cursor$$2_cursorPosition$$.x, $cursor$$2_cursorPosition$$.y)
  }
  return null
};
th.parsers.Parser.prototype.hiliteSentenceFromElement_ = function $th$parsers$Parser$$hiliteSentenceFromElement_$($blockIndex$$1_element$$) {
  try {
    var $wordArray$$ = [];
    if(null !== $blockIndex$$1_element$$) {
      for(var $index$$88_textBlocks$$ = goog.dom.getElementsByClass(this.CONST_LINE_BLOCK, $blockIndex$$1_element$$), $blockIndex$$1_element$$ = 0;$blockIndex$$1_element$$ < $index$$88_textBlocks$$.length;$blockIndex$$1_element$$++) {
        this.parseElement_($index$$88_textBlocks$$[$blockIndex$$1_element$$])
      }
      this.selectSentenceFromWord_()
    }
    this.renumberWords_();
    var $thWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    goog.style.getPageOffset($thWords$$[0]);
    goog.style.getPageOffset($thWords$$[$thWords$$.length - 1]);
    for($index$$88_textBlocks$$ = 0;$index$$88_textBlocks$$ < $thWords$$.length;$index$$88_textBlocks$$++) {
      $wordArray$$.push(goog.dom.getTextContent($thWords$$[$index$$88_textBlocks$$]))
    }
    setTimeout(this.clearDocsSelection_.bind(this), this.CONST_DOCS_DELAY);
    this.m_wordsHTML = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    1 === this.m_wordsHTML.length && this.hiliteWord(0);
    return $wordArray$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hiliteSentenceFromPoint_ = function $th$parsers$Parser$$hiliteSentenceFromPoint_$($x$$, $y$$) {
  try {
    var $x$$ = $x$$ + 2, $y$$ = $y$$ + 4, $wordArray$$ = [], $blockIndex$$2_lineElem$$ = this.getLineElementFromPoint_($x$$, $y$$);
    if(null !== $blockIndex$$2_lineElem$$) {
      for(var $index$$89_textBlocks$$ = goog.dom.getElementsByClass(this.CONST_LINE_BLOCK, $blockIndex$$2_lineElem$$), $blockIndex$$2_lineElem$$ = 0;$blockIndex$$2_lineElem$$ < $index$$89_textBlocks$$.length;$blockIndex$$2_lineElem$$++) {
        this.parseElement_($index$$89_textBlocks$$[$blockIndex$$2_lineElem$$])
      }
      this.selectSentence_($x$$, $y$$)
    }
    this.renumberWords_();
    var $thWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    goog.style.getPageOffset($thWords$$[0]);
    goog.style.getPageOffset($thWords$$[$thWords$$.length - 1]);
    for($index$$89_textBlocks$$ = 0;$index$$89_textBlocks$$ < $thWords$$.length;$index$$89_textBlocks$$++) {
      $wordArray$$.push(goog.dom.getTextContent($thWords$$[$index$$89_textBlocks$$]))
    }
    setTimeout(this.clearDocsSelection_.bind(this), this.CONST_DOCS_DELAY);
    this.m_wordsHTML = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    1 === this.m_wordsHTML.length && this.hiliteWord(0);
    return $wordArray$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.parseSelection_ = function $th$parsers$Parser$$parseSelection_$($index$$) {
  try {
    for(var $currentSibling$$ = $index$$.parentNode;null !== $currentSibling$$.lastChild;) {
      $currentSibling$$ = $currentSibling$$.lastChild
    }
    $currentSibling$$ = $currentSibling$$.parentNode.parentNode;
    for($index$$ = 0;$index$$ < $currentSibling$$.childNodes.length;$index$$++) {
      var $nodeToParse$$ = $currentSibling$$.childNodes[$index$$];
      " " !== $nodeToParse$$.textContent && "" !== $nodeToParse$$.textContent && this.parseElement_($nodeToParse$$.parentNode)
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.parseElement_ = function $th$parsers$Parser$$parseElement_$($index$$91_obj$$83_selectionElement$$) {
  try {
    var $textBlocks$$ = goog.dom.getElementByClass(this.CONST_LINE_BLOCK, $index$$91_obj$$83_selectionElement$$);
    if(null === $textBlocks$$) {
      if(this.hasClassName($index$$91_obj$$83_selectionElement$$, this.CONST_LINE_BLOCK)) {
        $textBlocks$$ = $index$$91_obj$$83_selectionElement$$
      }else {
        throw Error("The element has no text child.");
      }
    }
    $index$$91_obj$$83_selectionElement$$ = {};
    $index$$91_obj$$83_selectionElement$$.key = $textBlocks$$;
    $index$$91_obj$$83_selectionElement$$.value = $index$$91_obj$$83_selectionElement$$.key.innerHTML;
    this.m_origElements.push($index$$91_obj$$83_selectionElement$$);
    $textBlocks$$ = $textBlocks$$.childNodes;
    for($index$$91_obj$$83_selectionElement$$ = 0;$index$$91_obj$$83_selectionElement$$ < $textBlocks$$.length;$index$$91_obj$$83_selectionElement$$++) {
      for(var $textNodes$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().getTextNodesIn($textBlocks$$[$index$$91_obj$$83_selectionElement$$], !0), $textNodeIndex$$ = 0;$textNodeIndex$$ < $textNodes$$.length;$textNodeIndex$$++) {
        if(0 < $textNodes$$.length) {
          for(var $words$$ = $textNodes$$[$textNodeIndex$$].nodeValue.split(/\s/), $parsedString$$ = "", $elementString$$ = "", $i$$ = 0;$i$$ < $words$$.length;$i$$++) {
            var $word$$ = $words$$[$i$$];
            "<" === $word$$.substr(0, 1) ? ($elementString$$ += "<" + this.CONST_NSCUSTOMTAG + " class='" + this.CONST_THCLASS + "'>" + $word$$ + "</" + this.CONST_NSCUSTOMTAG + ">", $i$$ < $words$$.length - 1 && ($elementString$$ += "<" + this.CONST_NSCUSTOMTAG + " class='" + this.CONST_THCLASS + " " + this.CONST_SPACECLASS + "'>&nbsp;</" + this.CONST_NSCUSTOMTAG + ">")) : (" " === $word$$ || "" === $word$$) && $i$$ < $words$$.length - 1 && 0 <= this.m_currentWordNumber ? $elementString$$ += "<" + 
            this.CONST_NSCUSTOMTAG + " class='" + this.CONST_THCLASS + " " + this.CONST_SPACECLASS + "'>&nbsp;</" + this.CONST_NSCUSTOMTAG + ">" : 0 < $word$$.length && (this.m_currentWordNumber++, $elementString$$ += "<" + this.CONST_NSCUSTOMTAG + " class='" + this.CONST_THCLASS + " " + this.CONST_WORDCLASS + "'>" + $word$$ + "</" + this.CONST_NSCUSTOMTAG + ">", $i$$ < $words$$.length - 1 && ($elementString$$ += "<" + this.CONST_NSCUSTOMTAG + " class='" + this.CONST_THCLASS + " " + this.CONST_SPACECLASS + 
            "'>&nbsp;</" + this.CONST_NSCUSTOMTAG + ">"))
          }
          var $parsedString$$ = $parsedString$$ + $elementString$$, $parsedTextElem$$ = goog.dom.createDom("span");
          $parsedTextElem$$.innerHTML = $parsedString$$;
          goog.dom.replaceNode($parsedTextElem$$, $textNodes$$[$textNodeIndex$$])
        }
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.scrollIntoView_ = function $th$parsers$Parser$$scrollIntoView_$($element$$, $scrollElement$$) {
  try {
    for(var $position$$ = 0, $offsetElement$$ = $element$$;$offsetElement$$ !== $scrollElement$$;) {
      $position$$ += $offsetElement$$.offsetTop, $offsetElement$$ = $offsetElement$$.offsetParent
    }
    $position$$ + 30 > $scrollElement$$.scrollTop && $position$$ < $scrollElement$$.scrollTop + $scrollElement$$.offsetHeight - 30 || ($scrollElement$$.scrollTop = $position$$ - 30)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.scrollYIntoView_ = function $th$parsers$Parser$$scrollYIntoView_$($y$$, $opt_start$$, $opt_end$$) {
  try {
    var $editorOffset$$ = goog.style.getPageOffset(this.m_editorWindow);
    if($opt_end$$ > this.m_editorWindow.offsetHeight + $editorOffset$$.y) {
      var $scrollPos$$ = this.m_editorWindow.scrollTop + ($y$$ - $editorOffset$$.y) - 30, $y$$ = $y$$ - ($scrollPos$$ - this.m_editorWindow.scrollTop);
      this.m_editorWindow.scrollTop = $scrollPos$$
    }
    return $y$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearSelection_ = function $th$parsers$Parser$$clearSelection_$() {
  try {
    if(0 !== goog.dom.getElementsByClass(this.CONST_THCLASS).length) {
      for(var $elem$$ in this.m_origElements) {
        this.m_origElements[$elem$$].key.innerHTML = this.m_origElements[$elem$$].value
      }
      this.m_origElements.length = 0
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearBeforePosition_ = function $th$parsers$Parser$$clearBeforePosition_$($parentInnerHTML_pos$$) {
  try {
    this.m_lengthOfTextBeforeSelection = 0;
    var $elementsToRemove$$ = [];
    this.m_wordOffset = 0;
    for(var $thSelectedWords$$ = goog.dom.getElementsByClass(this.CONST_THCLASS), $index$$ = 0;$index$$ < $thSelectedWords$$.length;$index$$++) {
      var $thPos$$ = goog.style.getRelativePosition($thSelectedWords$$[$index$$], this.m_editorWindow), $thSize$$ = goog.style.getSize($thSelectedWords$$[$index$$]);
      if($thPos$$.x + $thSize$$.width < $parentInnerHTML_pos$$.x) {
        $elementsToRemove$$.push($thSelectedWords$$[$index$$]), this.hasClassName($thSelectedWords$$[$index$$], this.CONST_WORDCLASS) && this.m_wordOffset++
      }else {
        for(;this.hasClassName($thSelectedWords$$[$index$$], this.CONST_SPACECLASS);) {
          $elementsToRemove$$.push($thSelectedWords$$[$index$$]), $index$$++
        }
        $index$$ = $thSelectedWords$$.length
      }
    }
    if(0 !== $elementsToRemove$$.length) {
      for(var $parentInnerHTML_pos$$ = "", $parentElement$$ = $elementsToRemove$$[0].parentNode, $index$$ = 0;$index$$ < $elementsToRemove$$.length;$index$$++) {
        $elementsToRemove$$[$index$$].parentNode !== $parentElement$$ && ($parentElement$$.innerHTML = $parentInnerHTML_pos$$ + $parentElement$$.innerHTML, $parentInnerHTML_pos$$ = "", $parentElement$$ = $elementsToRemove$$[$index$$].parentNode), $parentInnerHTML_pos$$ += goog.dom.getRawTextContent($elementsToRemove$$[$index$$]), goog.dom.removeNode($elementsToRemove$$[$index$$])
      }
      this.m_lengthOfTextBeforeSelection = $parentInnerHTML_pos$$.length;
      $parentElement$$.innerHTML = $parentInnerHTML_pos$$ + $parentElement$$.innerHTML
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearAfterPosition_ = function $th$parsers$Parser$$clearAfterPosition_$($parentInnerHTML$$1_pos$$) {
  try {
    this.m_lengthOfAfterBeforeSelection = 0;
    for(var $elementsToRemove$$ = [], $parentElement$$3_thSelectedWords$$ = goog.dom.getElementsByClass(this.CONST_THCLASS), $index$$ = $parentElement$$3_thSelectedWords$$.length - 1;0 <= $index$$;--$index$$) {
      var $thPos$$ = goog.style.getRelativePosition($parentElement$$3_thSelectedWords$$[$index$$], this.m_editorWindow);
      $thPos$$.x += 2;
      if($thPos$$.x >= $parentInnerHTML$$1_pos$$.x) {
        $elementsToRemove$$.push($parentElement$$3_thSelectedWords$$[$index$$]), this.m_nextLine = this.findParentLine_($parentElement$$3_thSelectedWords$$[$index$$]), this.m_elementLeftPos = goog.style.getRelativePosition($parentElement$$3_thSelectedWords$$[$index$$], this.m_nextLine).x
      }else {
        for(;this.hasClassName($parentElement$$3_thSelectedWords$$[$index$$], this.CONST_SPACECLASS);) {
          $elementsToRemove$$.push($parentElement$$3_thSelectedWords$$[$index$$]), $index$$--
        }
        $index$$ = -1
      }
    }
    if(0 !== $elementsToRemove$$.length) {
      $parentInnerHTML$$1_pos$$ = "";
      $elementsToRemove$$.reverse();
      $parentElement$$3_thSelectedWords$$ = $elementsToRemove$$;
      for($index$$ = $elementsToRemove$$.length - 1;0 <= $index$$;$index$$--) {
        $elementsToRemove$$[$index$$].parentNode !== $parentElement$$3_thSelectedWords$$ && ($parentElement$$3_thSelectedWords$$.innerHTML += $parentInnerHTML$$1_pos$$, $parentInnerHTML$$1_pos$$ = "", $parentElement$$3_thSelectedWords$$ = $elementsToRemove$$[$index$$].parentNode), $parentInnerHTML$$1_pos$$ = goog.dom.getRawTextContent($elementsToRemove$$[$index$$]) + $parentInnerHTML$$1_pos$$, goog.dom.removeNode($elementsToRemove$$[$index$$])
      }
      this.m_lengthOfTextAfterSelection = goog.dom.getRawTextContent($parentElement$$3_thSelectedWords$$.innerHTML).length;
      $parentElement$$3_thSelectedWords$$.innerHTML += $parentInnerHTML$$1_pos$$
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearLine_ = function $th$parsers$Parser$$clearLine_$($lineElementToClear_parentInnerHTML$$) {
  try {
    var $elementsToRemove$$ = goog.dom.getElementsByClass(this.CONST_THCLASS, $lineElementToClear_parentInnerHTML$$), $elementsToRemove$$ = Array.prototype.slice.call($elementsToRemove$$, 0);
    if(0 !== $elementsToRemove$$.length) {
      for(var $lineElementToClear_parentInnerHTML$$ = "", $parentElement$$ = $elementsToRemove$$, $index$$ = $elementsToRemove$$.length - 1;0 <= $index$$;$index$$--) {
        $elementsToRemove$$[$index$$].parentNode !== $parentElement$$ && ($parentElement$$.innerHTML += $lineElementToClear_parentInnerHTML$$, $lineElementToClear_parentInnerHTML$$ = "", $parentElement$$ = $elementsToRemove$$[$index$$].parentNode), $lineElementToClear_parentInnerHTML$$ = goog.dom.getRawTextContent($elementsToRemove$$[$index$$]) + $lineElementToClear_parentInnerHTML$$, goog.dom.removeNode($elementsToRemove$$[$index$$])
      }
      $parentElement$$.innerHTML += $lineElementToClear_parentInnerHTML$$
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.renumberWords_ = function $th$parsers$Parser$$renumberWords_$() {
  try {
    for(var $currentID$$ = -1, $thElems$$ = goog.dom.getElementsByClass(this.CONST_THCLASS), $index$$ = 0;$index$$ < $thElems$$.length;$index$$++) {
      this.hasClassName($thElems$$[$index$$], this.CONST_WORDCLASS) && $currentID$$++, this.changeClassName($thElems$$[$index$$], ($currentID$$ + this.m_wordOffset).toString(), $currentID$$.toString())
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clearDocsSelection_ = function $th$parsers$Parser$$clearDocsSelection_$() {
  try {
    var $highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASS);
    1 > $highlights$$.length && ($highlights$$ = goog.dom.getElementsByClass(this.CONST_HIGHLITESCLASSMAC));
    for(var $index$$ = 0;$index$$ < $highlights$$.length;$index$$++) {
      goog.dom.removeNode($highlights$$[$index$$])
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getLineElementFromPoint_ = function $th$parsers$Parser$$getLineElementFromPoint_$($x$$, $y$$) {
  try {
    var $elem$$ = document.elementFromPoint($x$$, $y$$);
    if(null === $elem$$) {
      return null
    }
    if($elem$$.className === this.CONST_CURSOR_CARET) {
      var $caret$$ = goog.dom.getElementByClass(this.CONST_CURSOR_CARET), $originalStyle$$ = goog.style.getStyle($caret$$, "display");
      goog.style.setStyle($caret$$, "display", "none");
      $elem$$ = document.elementFromPoint($x$$, $y$$);
      goog.style.setStyle($caret$$, "display", $originalStyle$$)
    }
    return this.findParentLine_($elem$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getWordElementFromPoint_ = function $th$parsers$Parser$$getWordElementFromPoint_$($wordElem$$2_x$$, $i$$186_y$$, $recursion$$) {
  try {
    if(4 < $recursion$$) {
      return null
    }
    var $elem$$ = document.elementFromPoint($wordElem$$2_x$$, $i$$186_y$$);
    if(null === $elem$$) {
      return null
    }
    if(this.hasClassName($elem$$, this.CONST_LINE)) {
      var $words$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS, $elem$$);
      return 0 < $words$$.length ? $words$$[$words$$.length - 1] : null
    }
    if(this.hasClassName($elem$$, this.CONST_WORDCLASS)) {
      return $elem$$
    }
    if(this.hasClassName($elem$$, this.CONST_SPACECLASS)) {
      for(var $wordsSpaces$$ = goog.dom.getElementsByClass(this.CONST_THCLASS), $wordElem$$2_x$$ = null, $i$$186_y$$ = 0;$i$$186_y$$ < $wordsSpaces$$.length;$i$$186_y$$++) {
        this.hasClassName($wordsSpaces$$[$i$$186_y$$], this.CONST_WORDCLASS) && ($wordElem$$2_x$$ = $wordsSpaces$$[$i$$186_y$$]), $wordsSpaces$$[$i$$186_y$$] == $elem$$ && ($i$$186_y$$ = $wordsSpaces$$.length)
      }
      return $wordElem$$2_x$$
    }
    var $originalStyle$$ = goog.style.getStyle($elem$$, "display");
    goog.style.setStyle($elem$$, "display", "none");
    $recursion$$++;
    var $belowElem$$ = this.getWordElementFromPoint_($wordElem$$2_x$$, $i$$186_y$$, $recursion$$);
    goog.style.setStyle($elem$$, "display", $originalStyle$$);
    return $belowElem$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getTHElementFromPoint_ = function $th$parsers$Parser$$getTHElementFromPoint_$($wordElem$$3_x$$, $i$$187_y$$, $recursion$$) {
  try {
    if(4 < $recursion$$) {
      return null
    }
    var $elem$$ = document.elementFromPoint($wordElem$$3_x$$, $i$$187_y$$);
    if(null === $elem$$) {
      return null
    }
    if(this.hasClassName($elem$$, this.CONST_LINE)) {
      var $elems$$ = goog.dom.getElementsByClass(this.CONST_THCLASS, $elem$$);
      return 0 < $elems$$.length ? $elems$$[$elems$$.length - 1] : null
    }
    if(this.hasClassName($elem$$, this.CONST_THCLASS)) {
      return $elem$$
    }
    if(this.hasClassName($elem$$, this.CONST_SPACECLASS)) {
      for(var $wordsSpaces$$ = goog.dom.getElementsByClass(this.CONST_THCLASS), $wordElem$$3_x$$ = null, $i$$187_y$$ = 0;$i$$187_y$$ < $wordsSpaces$$.length;$i$$187_y$$++) {
        this.hasClassName($wordsSpaces$$[$i$$187_y$$], this.CONST_WORDCLASS) && ($wordElem$$3_x$$ = $wordsSpaces$$[$i$$187_y$$]), $wordsSpaces$$[$i$$187_y$$] == $elem$$ && ($i$$187_y$$ = $wordsSpaces$$.length)
      }
      return $wordElem$$3_x$$
    }
    var $originalStyle$$ = goog.style.getStyle($elem$$, "display");
    goog.style.setStyle($elem$$, "display", "none");
    $recursion$$++;
    var $belowElem$$ = this.getTHElementFromPoint_($wordElem$$3_x$$, $i$$187_y$$, $recursion$$);
    goog.style.setStyle($elem$$, "display", $originalStyle$$);
    return $belowElem$$
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.selectSentence_ = function $th$parsers$Parser$$selectSentence_$($x$$, $y$$) {
  try {
    var $wordElem$$ = this.getWordElementFromPoint_($x$$, $y$$, 0);
    null === $wordElem$$ ? this.clearSelection_() : (this.findStartOfSentence_($wordElem$$), $wordElem$$ = this.getWordElementFromPoint_($x$$, $y$$, 0), null === $wordElem$$ ? this.clearSelection_() : this.findEndOfSentence_($wordElem$$))
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.selectSentenceFromWord_ = function $th$parsers$Parser$$selectSentenceFromWord_$() {
  try {
    var $thWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    this.findStartOfSentence_($thWords$$[0]);
    $thWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS);
    null === $thWords$$[0] ? this.clearSelection_() : this.findEndOfSentence_($thWords$$[0])
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.findStartOfSentence_ = function $th$parsers$Parser$$findStartOfSentence_$($elem$$) {
  try {
    var $startWord$$ = null, $lineWords$$ = null, $line$$ = null, $onLine_wordBeforeSentIndex$$ = !1;
    if(this.hasClassName($elem$$, this.CONST_WORDCLASS)) {
      $startWord$$ = $elem$$
    }else {
      if(this.hasClassName($elem$$, this.CONST_LINE)) {
        for(var $cursorWordIndex_textBlocks$$ = goog.dom.getElementsByClass(this.CONST_LINE_BLOCK, $elem$$), $blockIndex$$ = 0;$blockIndex$$ < $cursorWordIndex_textBlocks$$.length;$blockIndex$$++) {
          this.parseElement_($cursorWordIndex_textBlocks$$[$blockIndex$$])
        }
        $lineWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS, $elem$$);
        $startWord$$ = $lineWords$$[$lineWords$$.length - 1];
        $onLine_wordBeforeSentIndex$$ = !0
      }else {
        return
      }
    }
    var $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance(), $sentenceEndExclusions$$ = this.m_config.sentences.sentenceEndExclusions, $cursorWordIndex_textBlocks$$ = -1;
    null === $lineWords$$ && ($line$$ = goog.dom.getAncestorByClass($startWord$$, this.CONST_LINE), $lineWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS, $line$$));
    if($onLine_wordBeforeSentIndex$$) {
      $cursorWordIndex_textBlocks$$ = $lineWords$$.length - 1
    }else {
      for(var $wordIndex$$ = 0;$wordIndex$$ < $lineWords$$.length;$wordIndex$$++) {
        $lineWords$$[$wordIndex$$] === $startWord$$ && ($cursorWordIndex_textBlocks$$ = $wordIndex$$, $wordIndex$$ = $lineWords$$.length)
      }
    }
    if(-1 !== $cursorWordIndex_textBlocks$$) {
      $elem$$ = $cursorWordIndex_textBlocks$$;
      !$onLine_wordBeforeSentIndex$$ && 0 < $elem$$ && $elem$$--;
      if(0 < $cursorWordIndex_textBlocks$$) {
        $onLine_wordBeforeSentIndex$$ = -1;
        for($wordIndex$$ = $elem$$;0 <= $wordIndex$$;$wordIndex$$--) {
          if(!$helper$$.arrayContains($sentenceEndExclusions$$, goog.dom.getTextContent($lineWords$$[$wordIndex$$]))) {
            for(var $expression$$ in this.m_wordEndRegExpressions) {
              -1 !== $lineWords$$[$wordIndex$$].innerText.search(this.m_wordEndRegExpressions[$expression$$]) && ($onLine_wordBeforeSentIndex$$ = $wordIndex$$, $wordIndex$$ = -1)
            }
          }
        }
        if(-1 < $onLine_wordBeforeSentIndex$$) {
          if($lineWords$$.length - 1 === $onLine_wordBeforeSentIndex$$) {
            this.clearLine_(goog.dom.getAncestorByClass($lineWords$$[$onLine_wordBeforeSentIndex$$], this.CONST_LINE))
          }else {
            var $thPos$$ = goog.style.getRelativePosition($lineWords$$[$onLine_wordBeforeSentIndex$$ + 1], this.m_editorWindow);
            this.clearBeforePosition_($thPos$$)
          }
          return
        }
      }
      null === $line$$ && ($line$$ = goog.dom.getAncestorByClass($startWord$$, this.CONST_LINE));
      this.findStartOfSentence_($line$$.previousSibling)
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.findEndOfSentence_ = function $th$parsers$Parser$$findEndOfSentence_$($cursorWordIndex$$1_elem$$) {
  try {
    var $startWord$$ = null, $lineWords$$ = null, $line$$ = null, $onLine$$1_wordBeforeSentIndex$$ = !1;
    if(this.hasClassName($cursorWordIndex$$1_elem$$, this.CONST_WORDCLASS)) {
      $startWord$$ = $cursorWordIndex$$1_elem$$
    }else {
      if(this.hasClassName($cursorWordIndex$$1_elem$$, this.CONST_LINE)) {
        for(var $line$$ = $cursorWordIndex$$1_elem$$, $textBlocks$$ = goog.dom.getElementsByClass(this.CONST_LINE_BLOCK, $cursorWordIndex$$1_elem$$), $blockIndex$$ = 0;$blockIndex$$ < $textBlocks$$.length;$blockIndex$$++) {
          this.parseElement_($textBlocks$$[$blockIndex$$])
        }
        $lineWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS, $cursorWordIndex$$1_elem$$);
        $startWord$$ = $lineWords$$[0];
        $onLine$$1_wordBeforeSentIndex$$ = !0
      }else {
        return
      }
    }
    var $helper$$ = texthelp.webreaderapi.HelpersSingleton.getInstance(), $sentenceEndExclusions$$ = this.m_config.sentences.sentenceEndExclusions, $cursorWordIndex$$1_elem$$ = -1;
    null === $lineWords$$ && ($line$$ = goog.dom.getAncestorByClass($startWord$$, this.CONST_LINE), $lineWords$$ = goog.dom.getElementsByClass(this.CONST_WORDCLASS, $line$$));
    if($onLine$$1_wordBeforeSentIndex$$) {
      $cursorWordIndex$$1_elem$$ = 0
    }else {
      for(var $wordIndex$$ = 0;$wordIndex$$ < $lineWords$$.length;$wordIndex$$++) {
        $lineWords$$[$wordIndex$$] === $startWord$$ && ($cursorWordIndex$$1_elem$$ = $wordIndex$$, $wordIndex$$ = $lineWords$$.length)
      }
    }
    if(-1 !== $cursorWordIndex$$1_elem$$) {
      $onLine$$1_wordBeforeSentIndex$$ = -1;
      for($wordIndex$$ = $cursorWordIndex$$1_elem$$;$wordIndex$$ < $lineWords$$.length;$wordIndex$$++) {
        if(!$helper$$.arrayContains($sentenceEndExclusions$$, goog.dom.getTextContent($lineWords$$[$wordIndex$$]))) {
          for(var $expression$$ in this.m_wordEndRegExpressions) {
            -1 !== $lineWords$$[$wordIndex$$].innerText.search(this.m_wordEndRegExpressions[$expression$$]) && ($onLine$$1_wordBeforeSentIndex$$ = $wordIndex$$, $wordIndex$$ = $lineWords$$.length)
          }
        }
      }
      -1 === $onLine$$1_wordBeforeSentIndex$$ && null === $line$$.nextSibling && ($onLine$$1_wordBeforeSentIndex$$ = $lineWords$$.length - 1);
      $onLine$$1_wordBeforeSentIndex$$ === $lineWords$$.length - 1 && (this.m_nextLine = $line$$);
      if(-1 < $onLine$$1_wordBeforeSentIndex$$) {
        if($onLine$$1_wordBeforeSentIndex$$ < $lineWords$$.length - 1) {
          var $thPos$$ = goog.style.getRelativePosition($lineWords$$[$onLine$$1_wordBeforeSentIndex$$ + 1], this.m_editorWindow);
          this.clearAfterPosition_($thPos$$)
        }
      }else {
        null === $line$$ && ($line$$ = goog.dom.getAncestorByClass($startWord$$, this.CONST_LINE)), this.findEndOfSentence_($line$$.nextSibling)
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.findParentLine_ = function $th$parsers$Parser$$findParentLine_$($elem$$) {
  try {
    return null === $elem$$ ? null : this.hasClassName($elem$$, this.CONST_LINE) ? $elem$$ : goog.dom.getAncestorByClass($elem$$, this.CONST_LINE)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.dispatchMouseEvent_ = function $th$parsers$Parser$$dispatchMouseEvent_$($target$$, $var_args$$) {
  try {
    var $e$$ = document.createEvent("MouseEvents");
    $e$$.initMouseEvent.apply($e$$, $var_args$$);
    $target$$.dispatchEvent($e$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clickOnPagePosition_ = function $th$parsers$Parser$$clickOnPagePosition_$($x$$, $y$$) {
  try {
    var $editorWindow$$ = goog.dom.getElementByClass(this.CONST_DOCSEDITORCLASS), $params$$ = ["mousedown", !0, !0, window, 1, 0, 0, $x$$, $y$$, !1, !1, !1, !1, 0, null];
    this.dispatchMouseEvent_($editorWindow$$, $params$$);
    $params$$[0] = "mouseup";
    this.dispatchMouseEvent_($editorWindow$$, $params$$)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.clickOnCursor_ = function $th$parsers$Parser$$clickOnCursor_$() {
  try {
    var $cursor$$ = goog.dom.getElementByClass(this.CONST_CURSOR);
    if(null !== $cursor$$) {
      var $cursorPosition$$ = goog.style.getPageOffset($cursor$$);
      this.clickOnPagePosition_($cursorPosition$$.x, $cursorPosition$$.y)
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.renderPage_ = function $th$parsers$Parser$$renderPage_$($pageNumber$$, $callback$$) {
  try {
    if($pageNumber$$ < this.m_currentPages.length && !1 === this.m_docFullyRendered) {
      this.scrollIntoView_(this.m_currentPages[$pageNumber$$], this.m_editorWindow);
      var $renderPage$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.renderPage_), $pageNumber$$ = $pageNumber$$ + 1;
      setTimeout(function() {
        $renderPage$$($pageNumber$$, $callback$$)
      }, 30)
    }else {
      this.m_docFullyRendered = !0, this.collectHighlights_($callback$$, 0)
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.renderAllPages_ = function $th$parsers$Parser$$renderAllPages_$($callback$$) {
  try {
    this.m_currentPages = goog.dom.getElementsByClass(this.CONST_DOCSPAGE);
    this.m_startPosition = this.m_editorWindow.scrollTop;
    var $renderPage$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.renderPage_);
    setTimeout(function() {
      $renderPage$$(0, $callback$$)
    }, 0)
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.onMessageResponse = function $th$parsers$Parser$$onMessageResponse$($response$$11_vocabWordsSearch$$) {
  try {
    if(void 0 != $response$$11_vocabWordsSearch$$.source && void 0 != $response$$11_vocabWordsSearch$$.data && $response$$11_vocabWordsSearch$$.source == window && "1757FROM_BG" == $response$$11_vocabWordsSearch$$.data.type) {
      if("onGetSelection" == $response$$11_vocabWordsSearch$$.data.method) {
        var $selection$$ = goog.json.parse($response$$11_vocabWordsSearch$$.data.payload);
        this.m_getSelectionCallback($selection$$)
      }else {
        if("onCollectHighlights" == $response$$11_vocabWordsSearch$$.data.method) {
          var $urlOfCollectedHighlights$$ = goog.json.parse($response$$11_vocabWordsSearch$$.data.payload);
          if("string" === typeof $urlOfCollectedHighlights$$) {
            var $newwin$$ = null, $newwin$$ = window.open($urlOfCollectedHighlights$$, "_ntthch");
            $newwin$$.focus();
            this.m_collectedHighlightsCallback($urlOfCollectedHighlights$$)
          }else {
            0 == $urlOfCollectedHighlights$$[0].highlights.length ? this.m_collectedHighlightsCallback("false") : this.m_collectedHighlightsCallback("true")
          }
        }else {
          if("onVocabWords" == $response$$11_vocabWordsSearch$$.data.method) {
            var $vocabWords$$ = goog.json.parse($response$$11_vocabWordsSearch$$.data.payload), $response$$11_vocabWordsSearch$$ = "", $hightlightsObjects_strData$$ = $vocabWords$$[0].highlights, $boundSort$$2_i$$188_strUrl$$ = texthelp.webreaderapi.HelpersSingleton.getInstance().bind(this, this.sortHighlightsByText_);
            $hightlightsObjects_strData$$.sort($boundSort$$2_i$$188_strUrl$$);
            for($boundSort$$2_i$$188_strUrl$$ = 0;$boundSort$$2_i$$188_strUrl$$ < $hightlightsObjects_strData$$.length;$boundSort$$2_i$$188_strUrl$$++) {
              0 > $hightlightsObjects_strData$$[$boundSort$$2_i$$188_strUrl$$].text.indexOf(" ") && ($response$$11_vocabWordsSearch$$ += $hightlightsObjects_strData$$[$boundSort$$2_i$$188_strUrl$$].text + "~")
            }
            var $response$$11_vocabWordsSearch$$ = $response$$11_vocabWordsSearch$$.substr(0, $response$$11_vocabWordsSearch$$.length - 1), $hightlightsObjects_strData$$ = '<html><body onload="document.getElementById(\'1\').submit();">Processing request<form id="1" action="', $nRnd1$$ = Math.floor(10 * Math.random()), $boundSort$$2_i$$188_strUrl$$ = "http://webappspeech.texthelp.com/", $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + ($boundSort$$2_i$$188_strUrl$$ + "rwvocabserver/vocab"), 
            $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + '" method="post"> <input type="hidden" name="userName" value="texthelpdemo">', $nRnd2$$ = Math.floor(10 * Math.random()), $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + '<input type="hidden" name="custId" value="13">', $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + '<input type="hidden" name="locale" value="US">', $nDate$$ = (new Date).getDate(), $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + 
            ('<input type="hidden" name="wordList" value="' + $response$$11_vocabWordsSearch$$ + '">'), $md5$$ = new goog.crypt.Md5;
            $md5$$.update($nRnd1$$ + "texthelpdemo" + $nDate$$ + $nRnd2$$);
            var $encoded$$ = $md5$$.digest(), $encoded$$ = goog.crypt.byteArrayToHex($encoded$$), $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + ('<input type="hidden" name="code" value="' + ("" + $nRnd1$$ + $encoded$$ + $nRnd2$$) + '">'), $hightlightsObjects_strData$$ = $hightlightsObjects_strData$$ + "</form></body></html>", $newwin$$ = null, $newwin$$ = window.open(null, "_ntthvt");
            $newwin$$.focus();
            $newwin$$.document.write($hightlightsObjects_strData$$);
            $newwin$$.document.close();
            $vocabWords$$[0].link = "";
            this.m_vocabWordsCallback($vocabWords$$)
          }
        }
      }
    }
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.collectHighlights_ = function $th$parsers$Parser$$collectHighlights_$($callback$$, $sort$$, $colors$$, $fileName$$) {
  try {
    this.m_collectedHighlightsCallback = $callback$$, window.postMessage({method:"collectHighlightsRequest", type:"1757FROM_PAGE", payload:window.location.href, sort:$sort$$, colors:$colors$$, file:$fileName$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getVocabWords_ = function $th$parsers$Parser$$getVocabWords_$($callback$$, $sort$$, $colors$$) {
  try {
    this.m_vocabWordsCallback = $callback$$, window.postMessage({method:"vocabWordsRequest", type:"1757FROM_PAGE", payload:window.location.href, sort:$sort$$, colors:$colors$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.sortHighlights_ = function $th$parsers$Parser$$sortHighlights_$($a$$, $b$$) {
  try {
    var $aPos$$ = goog.style.getRelativePosition($a$$, this.m_editorWindow), $bPos$$ = goog.style.getRelativePosition($b$$, this.m_editorWindow);
    if($aPos$$.y > $bPos$$.y) {
      return 1
    }
    if($aPos$$.y < $bPos$$.y) {
      return-1
    }
    if($aPos$$.y === $bPos$$.y) {
      if($aPos$$.x < $bPos$$.x) {
        return-1
      }
      if($aPos$$.x > $bPos$$.x) {
        return 1
      }
    }
    return 0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.sortHighlightsByText_ = function $th$parsers$Parser$$sortHighlightsByText_$($a$$, $b$$) {
  try {
    return $a$$.text.toLowerCase() > $b$$.text.toLowerCase() ? 1 : $a$$.text.toLowerCase() < $b$$.text.toLowerCase() ? -1 : 0
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.hiliteLine_ = function $th$parsers$Parser$$hiliteLine_$($linetoHilite$$) {
  try {
    if(null === $linetoHilite$$) {
      return[]
    }
    this.scrollIntoView_($linetoHilite$$, this.m_editorWindow);
    var $continueNextSentence$$ = texthelp.webreader.UserSettingsSingleton.getInstance().getUserSettings().speechoptions.continousreading;
    this.m_nextLine = null;
    this.m_elementLeftPos = -1;
    if(null !== $linetoHilite$$) {
      var $pos$$ = goog.style.getPageOffset($linetoHilite$$);
      if(!$continueNextSentence$$ && null !== this.m_endSelectPos && $pos$$.y > this.m_endSelectPos.y) {
        return this.m_nextLine = null, this.m_elementLeftPos = -1, []
      }
      var $lineHeight$$ = goog.style.getStyle($linetoHilite$$, "height"), $lineHeight$$ = $lineHeight$$.substr(0, $lineHeight$$.length - 2), $lineHeight$$ = parseInt($lineHeight$$, 10);
      $pos$$.y += $lineHeight$$ / 2;
      return this.hiliteSentenceFromElement_($linetoHilite$$)
    }
    return[]
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getNextParagraphLine_ = function $th$parsers$Parser$$getNextParagraphLine_$($paragraph$$, $opt_startAtCurrent$$) {
  try {
    var $nextParagraph$$ = $paragraph$$.nextSibling;
    !0 === $opt_startAtCurrent$$ && ($nextParagraph$$ = $paragraph$$);
    if(null === $nextParagraph$$) {
      return null
    }
    for(;null !== $nextParagraph$$;) {
      var $textContent$$ = goog.dom.getTextContent($nextParagraph$$);
      if(0 < $textContent$$.length && " " !== $textContent$$) {
        return goog.dom.getElementByClass(this.CONST_LINE, $nextParagraph$$)
      }
      $nextParagraph$$ = $nextParagraph$$.nextSibling
    }
    return null
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.getNextTableLine_ = function $th$parsers$Parser$$getNextTableLine_$($paragraph$$) {
  try {
    var $tableCell$$ = goog.dom.getAncestorByClass($paragraph$$, "kix-rowrenderer-td");
    if(null !== $tableCell$$) {
      var $nextParagraphLine$$ = this.getNextParagraphLine_($paragraph$$);
      if(null !== $nextParagraphLine$$ || null !== $tableCell$$.nextSibling && ($nextParagraphLine$$ = this.getNextParagraphLine_($tableCell$$), null !== $nextParagraphLine$$)) {
        return $nextParagraphLine$$
      }
      var $tableRow$$ = $tableCell$$.parentElement;
      if(null !== $tableRow$$.nextSibling && ($nextParagraphLine$$ = this.getNextParagraphLine_($tableRow$$), null !== $nextParagraphLine$$)) {
        return $nextParagraphLine$$
      }
      var $table$$ = goog.dom.getAncestorByClass($tableRow$$, "kix-tablerenderer-container");
      if(null !== $table$$.nextSibling && ($nextParagraphLine$$ = this.getNextParagraphLine_($table$$), null !== $nextParagraphLine$$)) {
        return $nextParagraphLine$$
      }
    }else {
      return $nextParagraphLine$$ = this.getNextParagraphLine_($paragraph$$), $tableCell$$ = goog.dom.getAncestorByClass($nextParagraphLine$$, "kix-rowrenderer-td"), null === $tableCell$$ ? null : "" === goog.dom.getTextContent($tableCell$$) ? this.getNextTableLine_($tableCell$$) : $tableCell$$
    }
    return null
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
th.parsers.Parser.prototype.updateSelection = function $th$parsers$Parser$$updateSelection$($updates$$) {
  try {
    $updates$$.doc = window.location.href, window.postMessage({method:"updateSelection", type:"1757FROM_PAGE", payload:$updates$$}, "*")
  }catch($err$$) {
    texthelp.webreaderapi.HelpersSingleton.getInstance().logError($err$$)
  }
};
goog.exportSymbol("th.parsers", th.parsers);
goog.exportSymbol("th.parsers.Parser", th.parsers.Parser);
goog.exportProperty(th.parsers.Parser.prototype, "hiliteNextSentence", th.parsers.Parser.prototype.hiliteNextSentence);
goog.exportProperty(th.parsers.Parser.prototype, "hiliteWord", th.parsers.Parser.prototype.hiliteWord);
goog.exportProperty(th.parsers.Parser.prototype, "highlightSelection", th.parsers.Parser.prototype.highlightSelection);
goog.exportProperty(th.parsers.Parser, "hiliteWord", th.parsers.Parser.hiliteWord);
goog.exportProperty(th.parsers.Parser.prototype, "getUserSettings", th.parsers.Parser.prototype.getUserSettings);
goog.exportProperty(th.parsers.Parser.prototype, "getSelection", th.parsers.Parser.prototype.getSelection);
goog.exportProperty(th.parsers.Parser.prototype, "getSelectionLocal", th.parsers.Parser.prototype.getSelectionLocal);
goog.exportProperty(th.parsers.Parser.prototype, "clearHighlights", th.parsers.Parser.prototype.clearHighlights);
goog.exportProperty(th.parsers.Parser.prototype, "getTextWithContext", th.parsers.Parser.prototype.getTextWithContext);
goog.exportProperty(th.parsers.Parser.prototype, "updateSelection", th.parsers.Parser.prototype.updateSelection);
goog.module.ModuleManager.getInstance().setLoaded("GDocsParser");
}})(__textHelp__);
//@ sourceURL=chrome-extension://chfpnoffckhdeckmacafcjanjcbfghpa/src/textHelp_GDocsParser.js