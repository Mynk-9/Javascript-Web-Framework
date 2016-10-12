/*! Copyright © 2016 Mayank Mathur 
see license at - https://raw.githubusercontent.com/Mynk-9/Javascript-Web-Framework/master/LICENSE
*/
(

	function () {
		var ___ = function (args) {
			return new lib(args);
		};
		
		var lib = function (args) {
			var selector = [];
			if (typeof args === 'object') {
				selector.push(args);
			} else if (typeof args === 'string') {
				selector = document.querySelectorAll(args);
			}
			this.length = selector.length;
			if (typeof this.length === 'undefined') {this.length = 1;}
			this.version = '1.0.1';
			
			var i = 0;
			for (i = 0; i < this.length; i++) {
				this[i] = selector[i];
			}
			
			return this;
		};
		
		___.func = lib.prototype = {
			/* general */
			hide: function() {
				var len = this.length;
				while(len--) {
					this[len].style.display = 'none';
				}
				return this;
			},
			show: function() {
				var len = this.length;
				while(len--) {
					this[len].style.display = 'inherit';
				}
				return this;
			},
			/* class, id etc. */
			toggleClass: function(oldC, newC) {
				var len = this.length;
				while(len--) {
					this[len].className = this[len].className.replace(oldC, newC);
				}
				return this;
			},
			getClass: function() {
				var len = this.length;
				if (len === 1) {
					return this[0].className;
				} else {
					var classes = [];
					while(len--) {
						classes.push(this[len].className);
					}
					return classes;
				}
			},
			getId: function() {
				var len = this.length;
				if (len === 1) {
					return this[0].getAttribute('id');
				} else {
					var ids = [];
					while(len--) {
						ids.push(this[len].getAttribute('id'));
					}
					return ids;
				}
			},
			addClass: function(_class) {
				var len = this.length;
				while(len--) {
					if (this[len].className !== '') {
						this[len].className += (' ' + _class);
					} else {
						this[len].className += _class;
					}
				}
				return this;
			},
			removeClass: function(_class) {
				var len = this.length;
				while (len--) {
					this[len].className = this[len].className.replace(_class, '');
				}
				return this;
			},
			coordinates: function() {
				var pos = [];
				if (this.length === 1) {
					pos = {x: this[0].offsetLeft, y: this[0].offsetTop};
				} else {
					for (len = 0; len < this.length; len++) {
						pos[len] = {x: this[len].offsetLeft, y: this[len].offsetTop};
					}
				}
				return pos;
			},
			scrolled: function() {
				var pos = [];
				if (this.length === 1) {
					pos = {x: this[0].scrollLeft, y: this[0].scrollTop};
				} else {
					for (len = 0; len < this.length; len++) {
						pos[len] = {x: this[len].scrollLeft, y: this[len].scrollTop};
					}
				}
				return pos;
			},
			/* events */
			onEvent: function(evnt, fun) {
				var len = this.length;
				while(len--) {
					this[len].addEventListener(evnt, fun);
				}
				return this;
			},
			/* external */
			loadScriptFile: function(url) {
				var x = document.createElement('script');
				x.setAttribute('src', url);
				document.head.appendChild(x);
				return this;
			},
			loadCSSFile: function(url) {
				var x = document.createElement('link');
				x.setAttribute('rel', 'stylesheet');
				x.setAttribute('href', url);
				document.head.appendChild(x);
				return this;
			}
			/* how to add new method
			
			methodName: function(eventArgs) {
				// all the code here
				//
				//
				
				return this;
					// or
				return returnVar;
			}
			
			*/
		};
		
		if(!window.___) {
			window.___ = ___;
		}
	}
	
)();