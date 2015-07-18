//
minimalForm = {};

if (Meteor.isClient) {                                                                                           
    /* Modernizr 2.7.1 (Custom Build) | MIT & BSD                                                                       
     * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
     */
    Modernizr = function (a, b, c) { function x(a) { j.cssText = a } function y(a, b) { return x(prefixes.join(a + ";") + (b || "")) } function z(a, b) { return typeof a === b } function A(a, b) { return !!~("" + a).indexOf(b) } function B(a, b) { for (var d in a) { var e = a[d]; if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function C(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f } return !1 } function D(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + n.join(d + " ") + d).split(" "); return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c)) } var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w; !z(v, "undefined") && !z(v.call, "undefined") ? w = function (a, b) { return v.call(a, b) } : w = function (a, b) { return b in a && z(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = t.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(t.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(t.call(arguments))) }; return e }), p.csstransitions = function () { return D("transition") }; for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u)); return e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) w(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, x(""), i = k = null, function (a, b) { function l(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function m() { var a = s.elements; return typeof a == "string" ? a.split(" ") : a } function n(a) { var b = j[a[h]]; return b || (b = {}, i++ , a[h] = i, j[i] = b), b } function o(a, c, d) { c || (c = b); if (k) return c.createElement(a); d || (d = n(c)); var g; return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g } function p(a, c) { a || (a = b); if (k) return a.createDocumentFragment(); c = c || n(a); var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length; for (; e < g; e++)d.createElement(f[e]); return d } function q(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return s.shivMethods ? o(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) } function r(a) { a || (a = b); var c = n(a); return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a } var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" } () } catch (c) { g = !0, k = !0 } })(); var s = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p }; a.html5 = s, r(b) } (this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function (a) { return B([a]) }, e.testAllProps = D, e.prefixed = function (a, b, c) { return b ? D(a, b, c) : D(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e } (this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++)c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b } (), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } } (k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } } (this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };
                                                                                                                    
    /*!                                                                                                             
 * classie - class helper functions                                                                                 
 * from bonzo https://github.com/ded/bonzo                                                                          
 *                                                                                                                  
 * classie.has( elem, 'my-class' ) -> true/false                                                                    
 * classie.add( elem, 'my-new-class' )                                                                              
 * classie.remove( elem, 'my-unwanted-class' )                                                                      
 * classie.toggle( elem, 'my-class' )                                                                               
 */                                                                                                                 
                                                                                                                    
    /*jshint browser: true, strict: true, undef: true */                                                                
    /*global define: false */

    (function (scope) {

        'use strict';                                                                                                   
                                                                                                                    
        // class helper functions from bonzo https://github.com/ded/bonzo                                                   
                                                                                                                    
        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }                                                                                                               
                                                                                                                    
        // classList support for class management                                                                           
        // altho to be fair, the api sucks because it won't accept multiple classes at once                                 
        var hasClass, addClass, removeClass;

        if ('classList' in window.document.documentElement) {
            hasClass = function (elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function (elem, c) {
                elem.classList.add(c);
            };
            removeClass = function (elem, c) {
                elem.classList.remove(c);
            };
        }
        else {
            hasClass = function (elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function (elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function (elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {                                                                                                 
            // full names                                                                                               
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,                                                                                   
            // short names                                                                                              
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };                                                                                                              
                                                                                                                        
        // transport                                                                                                        
        if (typeof define === 'function' && define.amd) {                                                               
            // AMD                                                                                                      
            define(classie);
        } else {                                                                                                        
            // browser global                                                                                           
            scope.classie = classie;
        }

    })(minimalForm);                                                                                                    
                                                                                                                    
    /**                                                                                                                 
     * minimalForm.js v1.0.0                                                                                            
     * http://www.codrops.com                                                                                           
     *                                                                                                                  
     * Licensed under the MIT license.                                                                                  
     * http://www.opensource.org/licenses/mit-license.php                                                               
     *                                                                                                                  
     * Copyright 2014, Codrops                                                                                          
     * http://www.codrops.com                                                                                           
     */
    ;
    (function (scope) {

        'use strict';
        var self;
        var classie = scope.classie;

        var transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
            transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            support = { transitions: Modernizr.csstransitions };

        function extend(a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        function minimalForm(el, options) {
            self = this;
            self.el = el;
            self.options = extend({}, self.options);
            extend(self.options, options);
            self._init();
        }                                                                                                               
                                                                                                                        
        // generates a unique id                                                                                        
        function randomID() {
            var id = Math.random().toString(36).substr(2, 9);
            if (window.document.getElementById(id)) {
                return randomID();
            }
            return id;
        }

        minimalForm.prototype.options = {
            onSubmit: function () {
                return false;
            },
            onAdded:function(qid, answer){
                return false;
            }
        };

        minimalForm.prototype._init = function () {
            // current question                                                                                         
            self.current = 0;

            // questions                                                                                                
            self.questions = [].slice.call(self.el.querySelectorAll('ol.questions > li'));
            // total questions                                                                                          
            self.questionsCount = self.questions.length;
            // show first question                                                                                      
            classie.addClass(self.questions[0], 'current');
                                                                                                                        
            // next question control                                                                                    
            self.ctrlNext = self.el.querySelector('button.next');
            self.ctrlNext.setAttribute('aria-label', 'Next');
                                                                                                                        
            // progress bar                                                                                             
            self.progress = self.el.querySelector('div.progress');
            // set progressbar attributes                                                                               
            self.progress.setAttribute('role', 'progressbar');
            self.progress.setAttribute('aria-readonly', 'true');
            self.progress.setAttribute('aria-valuemin', '0');
            self.progress.setAttribute('aria-valuemax', '100');
            self.progress.setAttribute('aria-valuenow', '0');
                                                                                                                        
            // question number status                                                                                   
            self.questionStatus = self.el.querySelector('span.number');
            // give the questions status an id                                                                          
            self.questionStatus.id = self.questionStatus.id || randomID();
            // associate "x / y" with the input via aria-describedby                                                    
            for (var i = self.questions.length - 1; i >= 0; i--) {
                var formElement = self.questions[i].querySelector('input, textarea, select');
                formElement.setAttribute('aria-describedby', self.questionStatus.id);
            }
            ;                                                                                                           
            // current question placeholder                                                                             
            self.currentNum = self.questionStatus.querySelector('span.number-current');
            self.currentNum.innerHTML = Number(self.current + 1);
            // total questions placeholder                                                                              
            self.totalQuestionNum = self.questionStatus.querySelector('span.number-total');
            self.totalQuestionNum.innerHTML = self.questionsCount;
                                                                                                                        
            // error message                                                                                            
            self.error = self.el.querySelector('span.error-message');
                                                                                                                        
            // checks for HTML5 Form Validation support                                                                 
            // a cleaner solution might be to add form validation to the custom Modernizr script                        
            self.supportsHTML5Forms = typeof window.document.createElement("input").checkValidity === 'function';
                                                                                                                        
            // init events                                                                                              
            self._initEvents();
        };

        minimalForm.prototype._initEvents = function () {
            var firstElInput = self.questions[self.current].querySelector('input, textarea, select'),
                // focus                                                                                                    
                onFocusStartFn = function () {
                    firstElInput.removeEventListener('focus', onFocusStartFn);
                    classie.addClass(self.ctrlNext, 'show');
                };                                                                                                      
                                                                                                                        
            // show the next question control first time the input gets focused                                         
            firstElInput.addEventListener('focus', onFocusStartFn);                                                     
                                                                                                                        
            // show next question                                                                                       
            self.ctrlNext.addEventListener('click', function (ev) {
                ev.preventDefault();
                self._nextQuestion();
            });                                                                                                         
                                                                                                                        
            // pressing enter will jump to next question                                                                
            window.document.addEventListener('keydown', function (ev) {
                var keyCode = ev.keyCode || ev.which;
                // enter
                if (keyCode === 13) {
                    ev.preventDefault();
                    if(!self.options.manualAnswers) {
                        self._nextQuestion();
                    }
                }
            });
        };

        minimalForm.prototype.answer = function(ev, value){
            ev.preventDefault();
            self._nextQuestion(ev.target, value);
        };

        minimalForm.prototype.getCurrentIndex = function(){
            return self.current;
        }

        minimalForm.prototype._nextQuestion = function (input, value) {
            if (!self._validate()) {
                return false;
            }                                                                                                           
                
            var input = input || self.questions[self.current].querySelector('input, textarea, select');
            // checks HTML5 validation                                                                                  
            if (self.supportsHTML5Forms) {
                // clear any previous error messages                                                                    
                input.setCustomValidity('');                                                                            
                                                                                                                        
                // checks input against the validation constraint                                                       
                if (!input.checkValidity()) {                                                                           
                    // Optionally, set a custom HTML5 valiation message                                                 
                    // comment or remove this line to use the browser default message                                   
                    input.setCustomValidity('Whoops, that\'s not an email address!');                                   
                    // display the HTML5 error message                                                                  
                    self._showError(input.validationMessage);
                    // prevent the question from changing                                                               
                    return false;
                }
            }

            self.options.onAdded(self.current, value || input.value);
                                                                                                                        
            // check if form is filled                                                                                  
            if (self.current === self.questionsCount - 1) {
                self.isFilled = true;
            }                                                                                                           
                                                                                                                        
            // clear any previous error messages                                                                        
            self._clearError();
                                                                                                                        
            // current question                                                                                         
            var currentQuestion = self.questions[self.current++];
                                                                     
            // update progress bar                                                                                      
            self._progress();

            if (!self.isFilled) {
                // change the current question number/status                                                            
                self._updateQuestionNumber();
                                                                                                                        
                // add class "show-next" to form element (start animations)                                             
                classie.addClass(self.el, 'show-next');
                                                                                                                        
                // remove class "current" from current question and add it to the next one                              
                // current question                                                                                     
                var nextQuestion = self.questions[self.current];
                classie.removeClass(currentQuestion, 'current');
                classie.addClass(nextQuestion, 'current');
            }
                                                                                                                        
            // after animation ends, remove class "show-next" from form element and change current question placeholder 
            var onEndTransitionFn = function (ev) {
                    if (support.transitions) {
                        self.progress.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    if (self.isFilled) {
                        self._submit();
                    }
                    else {
                        console.log('remove: ' + self.nextQuestionNum.innerHTML);
                        classie.removeClass(self.el, 'show-next');
                        self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
                        self.questionStatus.removeChild(self.nextQuestionNum);
                        // force the focus on the next input
                        nextQuestion.querySelector('input, textarea, select').focus();
                    }
                };
            onEndTransitionFn();
        }
                                                                                                                        
        // updates the progress bar by setting its width                                                                
        minimalForm.prototype._progress = function () {
            var currentProgress = self.current * (100 / self.questionsCount);
            self.progress.style.width = currentProgress + '%';
            // update the progressbar's aria-valuenow attribute                                                         
            self.progress.setAttribute('aria-valuenow', currentProgress);
        }                                                                                                               
                                                                                                                        
        // changes the current question number                                                                          
        minimalForm.prototype._updateQuestionNumber = function () {
            // first, create next question number placeholder                                                           
            self.nextQuestionNum = window.document.createElement('span');
            self.nextQuestionNum.className = 'number-next';
            self.nextQuestionNum.innerHTML = Number(self.current + 1);
            // insert it in the DOM                                                                                     
            self.questionStatus.appendChild(self.nextQuestionNum);
            console.log('add: ' + self.nextQuestionNum.innerHTML);
        }                                                                                                               
                                                                                                                        
        // submits the form                                                                                             
        minimalForm.prototype._submit = function () {
            self.options.onSubmit(self.el);
        }                                                                                                               
                                                                                                                        
        // TODO (next version..)                                                                                        
        // the validation function                                                                                      
        minimalForm.prototype._validate = function () {                                                                 
            // current question´s input                                                                                 
            var input = self.questions[self.current].querySelector('input, textarea, select').value;
            if (input === '') {
                self._showError('EMPTYSTR');
                return false;
            }

            return true;
        }                                                                                                               
                                                                                                                        
        // TODO (next version..)                                                                                        
        minimalForm.prototype._showError = function (err) {
            var message = '';
            switch (err) {
                case 'EMPTYSTR':
                    message = 'Please fill the field before continuing';
                    break;
                case 'INVALIDEMAIL':
                    message = 'Please fill a valid email address';
                    break;                                                                                              
                // ...                                                                                                  
                default:
                    message = err;
            }
            ;
            self.error.innerHTML = message;
            classie.addClass(self.error, 'show');
        }                                                                                                               
                                                                                                                        
        // clears/hides the current error message                                                                       
        minimalForm.prototype._clearError = function () {
            classie.removeClass(self.error, 'show');
        }

        minimalForm.prototype.setActiveQuestion = function(index){
            // clear any previous error messages
            self._clearError();

            // current question
            var currentQuestion = self.questions[self.current];
            self.current = index;

            // update progress bar
            self._progress();

            // change the current question number/status
            self._updateQuestionNumber();
            // remove class "current" from current question and add it to the next one
            classie.addClass(self.el, 'show-next');
            // current question
            var nextQuestion = self.questions[self.current];
            classie.addClass(nextQuestion, 'current');
            classie.removeClass(currentQuestion, 'current');

            classie.addClass(currentQuestion, 'hidden');


            var onEndTransitionFn = function (ev) {
                    if (support.transitions) {
                        self.progress.removeEventListener(transEndEventName, onEndTransitionFn);
                    }
                    classie.removeClass(self.el, 'show-next');
                    self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
                    console.log('remove: ' + self.nextQuestionNum.innerHTML);
                    self.questionStatus.removeChild(self.nextQuestionNum);

                    // force the focus on the next input
                    nextQuestion.querySelector('input, textarea, select').focus();
                    classie.removeClass(currentQuestion, 'hidden');
                };
            onEndTransitionFn();

        }
                                                                                                                        
        // add to global namespace                                                                                      
        scope.minimalForm = minimalForm;

    })(minimalForm);
}
minimalForm = minimalForm.minimalForm;
