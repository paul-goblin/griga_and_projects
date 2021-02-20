/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ghosty/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hapi/joi/dist/joi-browser.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@hapi/joi/dist/joi-browser.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";const s=r(12);e.exports=function(e,...t){if(!e){if(1===t.length&&t[0]instanceof Error)throw t[0];throw new s(t)}}},function(e,t,r){"use strict";const s=r(0),n=r(12),o=r(29);let a,i;const l={isoDate:/^(?:[-+]\d{2})?(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/};t.version=o.version,t.defaults={abortEarly:!0,allowUnknown:!1,cache:!0,context:null,convert:!0,dateFormat:"iso",errors:{escapeHtml:!1,label:"path",language:null,render:!0,stack:!1,wrap:{label:'"',array:"[]"}},externals:!0,messages:{},nonEnumerables:!1,noDefaults:!1,presence:"optional",skipFunctions:!1,stripUnknown:!1,warnings:!1},t.symbols={any:Symbol.for("@hapi/joi/schema"),arraySingle:Symbol("arraySingle"),deepDefault:Symbol("deepDefault"),literal:Symbol("literal"),override:Symbol("override"),prefs:Symbol("prefs"),ref:Symbol("ref"),values:Symbol("values"),template:Symbol("template")},t.assertOptions=function(e,t,r="Options"){s(e&&"object"==typeof e&&!Array.isArray(e),"Options must be of type object");const n=Object.keys(e).filter(e=>!t.includes(e));s(0===n.length,"".concat(r," contain unknown keys: ").concat(n))},t.checkPreferences=function(e){i=i||r(16);const t=i.preferences.validate(e);if(t.error)throw new n([t.error.details[0].message])},t.compare=function(e,t,r){switch(r){case"=":return e===t;case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}},t.default=function(e,t){return void 0===e?t:e},t.isIsoDate=function(e){return l.isoDate.test(e)},t.isNumber=function(e){return"number"==typeof e&&!isNaN(e)},t.isResolvable=function(e){return!!e&&(e[t.symbols.ref]||e[t.symbols.template])},t.isSchema=function(e,r={}){const n=e&&e[t.symbols.any];return!!n&&(s(r.legacy||n.version===t.version,"Cannot mix different versions of joi schemas"),!0)},t.isValues=function(e){return e[t.symbols.values]},t.limit=function(e){return Number.isSafeInteger(e)&&e>=0},t.preferences=function(e,s){a=a||r(9),e=e||{},s=s||{};const n=Object.assign({},e,s);return s.errors&&e.errors&&(n.errors=Object.assign({},e.errors,s.errors),n.errors.wrap=Object.assign({},e.errors.wrap,s.errors.wrap)),s.messages&&(n.messages=a.compile(s.messages,e.messages)),delete n[t.symbols.prefs],n},t.tryWithPath=function(e,t,r={}){try{return e()}catch(e){throw void 0!==e.path?e.path=t+"."+e.path:e.path=t,r.append&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},t.validateArg=function(e,r,{assert:s,message:n}){if(t.isSchema(s)){const t=s.validate(e);if(!t.error)return;return t.error.message}if(!s(e))return r?"".concat(r," ").concat(n):n},t.verifyFlat=function(e,t){for(const r of e)s(!Array.isArray(r),"Method no longer accepts array arguments:",t)}},function(e,t,r){"use strict";const s=r(6),n=r(13),o=r(14),a={needsProtoHack:new Set([n.set,n.map,n.weakSet,n.weakMap])};e.exports=a.clone=function(e,t={},r=null){if("object"!=typeof e||null===e)return e;let s=a.clone,i=r;if(t.shallow){if(!0!==t.shallow)return a.cloneWithShallow(e,t);s=e=>e}else if(i){const t=i.get(e);if(t)return t}else i=new Map;const l=n.getInternalProto(e);if(l===n.buffer)return!1;if(l===n.date)return new Date(e.getTime());if(l===n.regex)return new RegExp(e);const c=a.base(e,l,t);if(c===e)return e;if(i&&i.set(e,c),l===n.set)for(const r of e)c.add(s(r,t,i));else if(l===n.map)for(const[r,n]of e)c.set(r,s(n,t,i));const u=o.keys(e,t);for(const r of u){if("__proto__"===r)continue;if(l===n.array&&"length"===r){c.length=e.length;continue}const o=Object.getOwnPropertyDescriptor(e,r);o?o.get||o.set?Object.defineProperty(c,r,o):o.enumerable?c[r]=s(e[r],t,i):Object.defineProperty(c,r,{enumerable:!1,writable:!0,configurable:!0,value:s(e[r],t,i)}):Object.defineProperty(c,r,{enumerable:!0,writable:!0,configurable:!0,value:s(e[r],t,i)})}return c},a.cloneWithShallow=function(e,t){const r=t.shallow;(t=Object.assign({},t)).shallow=!1;const n=new Map;for(const t of r){const r=s(e,t);"object"!=typeof r&&"function"!=typeof r||n.set(r,r)}return a.clone(e,t,n)},a.base=function(e,t,r){if(!1===r.prototype)return a.needsProtoHack.has(t)?new t.constructor:t===n.array?[]:{};const s=Object.getPrototypeOf(e);if(s&&s.isImmutable)return e;if(t===n.array){const e=[];return s!==t&&Object.setPrototypeOf(e,s),e}if(a.needsProtoHack.has(t)){const e=new s.constructor;return s!==t&&Object.setPrototypeOf(e,s),e}return Object.create(s)}},function(e,t,r){"use strict";const s=r(0),n=r(34),o=r(1),a=r(9);e.exports=n.extend({type:"any",flags:{only:{default:!1}},terms:{alterations:{init:null},examples:{init:null},externals:{init:null},metas:{init:[]},notes:{init:[]},shared:{init:null},tags:{init:[]},whens:{init:null}},rules:{custom:{method(e,t){return s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this.$_addRule({name:"custom",args:{method:e,description:t}})},validate(e,t,{method:r}){try{return r(e,t)}catch(e){return t.error("any.custom",{error:e})}},args:["method","description"],multi:!0},messages:{method(e){return this.prefs({messages:e})}},shared:{method(e){s(o.isSchema(e)&&e._flags.id,"Schema must be a schema with an id");const t=this.clone();return t.$_terms.shared=t.$_terms.shared||[],t.$_terms.shared.push(e),t.$_mutateRegister(e),t}},warning:{method(e,t){return s(e&&"string"==typeof e,"Invalid warning code"),this.$_addRule({name:"warning",args:{code:e,local:t},warn:!0})},validate:(e,t,{code:r,local:s})=>t.error(r,s),args:["code","local"],multi:!0}},modifiers:{keep(e,t=!0){e.keep=t},message(e,t){e.message=a.compile(t)},warn(e,t=!0){e.warn=t}},manifest:{build(e,t){for(const r in t){const s=t[r];if(["examples","externals","metas","notes","tags"].includes(r))for(const t of s)e=e[r.slice(0,-1)](t);else if("alterations"!==r)if("whens"!==r){if("shared"===r)for(const t of s)e=e.shared(t)}else for(const t of s){const{ref:r,is:s,not:n,then:o,otherwise:a,concat:i}=t;e=i?e.concat(i):r?e.when(r,{is:s,not:n,then:o,otherwise:a,switch:t.switch,break:t.break}):e.when(s,{then:o,otherwise:a,break:t.break})}else{const t={};for(const{target:e,adjuster:r}of s)t[e]=r;e=e.alter(t)}}return e}},messages:{"any.custom":"{{#label}} failed custom validation because {{#error.message}}","any.default":"{{#label}} threw an error when running default method","any.failover":"{{#label}} threw an error when running failover method","any.invalid":"{{#label}} contains an invalid value","any.only":'{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',"any.ref":'{{#label}} {{#arg}} references "{{#ref}}" which {{#reason}}',"any.required":"{{#label}} is required","any.unknown":"{{#label}} is not allowed"}})},function(e,t,r){"use strict";const s=r(32),n=r(1),o=r(7);t.Report=class{constructor(e,r,s,n,o,a,i){if(this.code=e,this.flags=n,this.messages=o,this.path=a.path,this.prefs=i,this.state=a,this.value=r,this.message=null,this.template=null,this.local=s||{},this.local.label=t.label(this.flags,this.state,this.prefs,this.messages),void 0===this.value||this.local.hasOwnProperty("value")||(this.local.value=this.value),this.path.length){const e=this.path[this.path.length-1];"object"!=typeof e&&(this.local.key=e)}}_setTemplate(e){if(this.template=e,!this.flags.label&&0===this.path.length){const e=this._template(this.template,"root");e&&(this.local.label=e)}}toString(){if(this.message)return this.message;const e=this.code;if(!this.prefs.errors.render)return this.code;const t=this._template(this.template)||this._template(this.prefs.messages)||this._template(this.messages);return void 0===t?'Error code "'.concat(e,'" is not defined, your custom type is missing the correct messages definition'):(this.message=t.render(this.value,this.state,this.prefs,this.local,{errors:this.prefs.errors,messages:[this.prefs.messages,this.messages]}),this.prefs.errors.label||(this.message=this.message.replace(/^"" /,"").trim()),this.message)}_template(e,r){return t.template(this.value,e,r||this.code,this.state,this.prefs)}},t.path=function(e){let t="";for(const r of e)"object"!=typeof r&&("string"==typeof r?(t&&(t+="."),t+=r):t+="[".concat(r,"]"));return t},t.template=function(e,t,r,s,a){if(!t)return;if(o.isTemplate(t))return"root"!==r?t:null;let i=a.errors.language;return n.isResolvable(i)&&(i=i.resolve(e,s,a)),i&&t[i]&&void 0!==t[i][r]?t[i][r]:t[r]},t.label=function(e,r,s,n){if(e.label)return e.label;if(!s.errors.label)return"";let o=r.path;"key"===s.errors.label&&r.path.length>1&&(o=r.path.slice(-1));const a=t.path(o);return a||(t.template(null,s.messages,"root",r,s)||n&&t.template(null,n,"root",r,s)||"value")},t.process=function(e,r,s){if(!e)return null;const{override:n,message:o,details:a}=t.details(e);if(n)return n;if(s.errors.stack)return new t.ValidationError(o,a,r);const i=Error.stackTraceLimit;Error.stackTraceLimit=0;const l=new t.ValidationError(o,a,r);return Error.stackTraceLimit=i,l},t.details=function(e,t={}){let r=[];const s=[];for(const n of e){if(n instanceof Error){if(!1!==t.override)return{override:n};const e=n.toString();r.push(e),s.push({message:e,type:"override",context:{error:n}});continue}const e=n.toString();r.push(e),s.push({message:e,path:n.path.filter(e=>"object"!=typeof e),type:n.code,context:n.local})}return r.length>1&&(r=[...new Set(r)]),{message:r.join(". "),details:s}},t.ValidationError=class extends Error{constructor(e,t,r){super(e),this._original=r,this.details=t}static isError(e){return e instanceof t.ValidationError}},t.ValidationError.prototype.isJoi=!0,t.ValidationError.prototype.name="ValidationError",t.ValidationError.prototype.annotate=s.error},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(6),a=r(1);let i;const l={symbol:Symbol("ref"),defaults:{adjust:null,in:!1,iterables:null,map:null,separator:".",type:"value"}};t.create=function(e,t={}){s("string"==typeof e,"Invalid reference key:",e),a.assertOptions(t,["adjust","ancestor","in","iterables","map","prefix","separator"]),s(!t.prefix||"object"==typeof t.prefix,"options.prefix must be of type object");const r=Object.assign({},l.defaults,t);delete r.prefix;const n=r.separator,o=l.context(e,n,t.prefix);if(r.type=o.type,e=o.key,"value"===r.type)if(o.root&&(s(!n||e[0]!==n,"Cannot specify relative path with root prefix"),r.ancestor="root",e||(e=null)),n&&n===e)e=null,r.ancestor=0;else if(void 0!==r.ancestor)s(!n||!e||e[0]!==n,"Cannot combine prefix with ancestor option");else{const[t,s]=l.ancestor(e,n);s&&""===(e=e.slice(s))&&(e=null),r.ancestor=t}return r.path=n?null===e?[]:e.split(n):[e],new l.Ref(r)},t.in=function(e,r={}){return t.create(e,Object.assign({},r,{in:!0}))},t.isRef=function(e){return!!e&&!!e[a.symbols.ref]},l.Ref=class{constructor(e){s("object"==typeof e,"Invalid reference construction"),a.assertOptions(e,["adjust","ancestor","in","iterables","map","path","separator","type","depth","key","root","display"]),s([!1,void 0].includes(e.separator)||"string"==typeof e.separator&&1===e.separator.length,"Invalid separator"),s(!e.adjust||"function"==typeof e.adjust,"options.adjust must be a function"),s(!e.map||Array.isArray(e.map),"options.map must be an array"),s(!e.map||!e.adjust,"Cannot set both map and adjust options"),Object.assign(this,l.defaults,e),s("value"===this.type||void 0===this.ancestor,"Non-value references cannot reference ancestors"),Array.isArray(this.map)&&(this.map=new Map(this.map)),this.depth=this.path.length,this.key=this.path.length?this.path.join(this.separator):null,this.root=this.path[0],this.updateDisplay()}resolve(e,t,r,n,o={}){return s(!this.in||o.in,"Invalid in() reference usage"),"global"===this.type?this._resolve(r.context,t,o):"local"===this.type?this._resolve(n,t,o):this.ancestor?"root"===this.ancestor?this._resolve(t.ancestors[t.ancestors.length-1],t,o):(s(this.ancestor<=t.ancestors.length,"Invalid reference exceeds the schema root:",this.display),this._resolve(t.ancestors[this.ancestor-1],t,o)):this._resolve(e,t,o)}_resolve(e,t,r){let s;if("value"===this.type&&t.mainstay.shadow&&!1!==r.shadow&&(s=t.mainstay.shadow.get(this.absolute(t))),void 0===s&&(s=o(e,this.path,{iterables:this.iterables,functions:!0})),this.adjust&&(s=this.adjust(s)),this.map){const e=this.map.get(s);void 0!==e&&(s=e)}return t.mainstay&&t.mainstay.tracer.resolve(t,this,s),s}toString(){return this.display}absolute(e){return[...e.path.slice(0,-this.ancestor),...this.path]}clone(){return new l.Ref(this)}describe(){const e={path:this.path};"value"!==this.type&&(e.type=this.type),"."!==this.separator&&(e.separator=this.separator),"value"===this.type&&1!==this.ancestor&&(e.ancestor=this.ancestor),this.map&&(e.map=[...this.map]);for(const t of["adjust","iterables"])null!==this[t]&&(e[t]=this[t]);return!1!==this.in&&(e.in=!0),{ref:e}}updateDisplay(){const e=null!==this.key?this.key:"";if("value"!==this.type)return void(this.display="ref:".concat(this.type,":").concat(e));if(!this.separator)return void(this.display="ref:".concat(e));if(!this.ancestor)return void(this.display="ref:".concat(this.separator).concat(e));if("root"===this.ancestor)return void(this.display="ref:root:".concat(e));if(1===this.ancestor)return void(this.display="ref:".concat(e||".."));const t=new Array(this.ancestor+1).fill(this.separator).join("");this.display="ref:".concat(t).concat(e||"")}},l.Ref.prototype[a.symbols.ref]=!0,t.build=function(e){return"value"===(e=Object.assign({},l.defaults,e)).type&&void 0===e.ancestor&&(e.ancestor=1),new l.Ref(e)},l.context=function(e,t,r={}){if(e=e.trim(),r){const s=void 0===r.global?"$":r.global;if(s!==t&&e.startsWith(s))return{key:e.slice(s.length),type:"global"};const n=void 0===r.local?"#":r.local;if(n!==t&&e.startsWith(n))return{key:e.slice(n.length),type:"local"};const o=void 0===r.root?"/":r.root;if(o!==t&&e.startsWith(o))return{key:e.slice(o.length),type:"value",root:!0}}return{key:e,type:"value"}},l.ancestor=function(e,t){if(!t)return[1,0];if(e[0]!==t)return[1,0];if(e[1]!==t)return[0,1];let r=2;for(;e[r]===t;)++r;return[r-1,r]},t.toSibling=0,t.toParent=1,t.Manager=class{constructor(){this.refs=[]}register(e,s){if(e)if(s=void 0===s?t.toParent:s,Array.isArray(e))for(const t of e)this.register(t,s);else if(a.isSchema(e))for(const t of e._refs.refs)t.ancestor-s>=0&&this.refs.push({ancestor:t.ancestor-s,root:t.root});else t.isRef(e)&&"value"===e.type&&e.ancestor-s>=0&&this.refs.push({ancestor:e.ancestor-s,root:e.root}),i=i||r(7),i.isTemplate(e)&&this.register(e.refs(),s)}get length(){return this.refs.length}clone(){const e=new t.Manager;return e.refs=n(this.refs),e}reset(){this.refs=[]}roots(){return this.refs.filter(e=>!e.ancestor).map(e=>e.root)}}},function(e,t,r){"use strict";const s=r(0),n={};e.exports=function(e,t,r){if(!1===t||null==t)return e;"string"==typeof(r=r||{})&&(r={separator:r});const o=Array.isArray(t);s(!o||!r.separator,"Separator option no valid for array-based chain");const a=o?t:t.split(r.separator||".");let i=e;for(let e=0;e<a.length;++e){let o=a[e];const l=r.iterables&&n.iterables(i);if(Array.isArray(i)||"set"===l){const e=Number(o);Number.isInteger(e)&&(o=e<0?i.length+e:e)}if(!i||"function"==typeof i&&!1===r.functions||!l&&void 0===i[o]){s(!r.strict||e+1===a.length,"Missing segment",o,"in reach path ",t),s("object"==typeof i||!0===r.functions||"function"!=typeof i,"Invalid segment",o,"in reach path ",t),i=r.default;break}i=l?"set"===l?[...i][o]:i.get(o):i[o]}return i},n.iterables=function(e){return e instanceof Set?"set":e instanceof Map?"map":void 0}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(30),a=r(31),i=r(1),l=r(4),c=r(5),u={symbol:Symbol("template"),opens:new Array(1e3).join("\0"),closes:new Array(1e3).join(""),dateFormat:{date:Date.prototype.toDateString,iso:Date.prototype.toISOString,string:Date.prototype.toString,time:Date.prototype.toTimeString,utc:Date.prototype.toUTCString}};e.exports=u.Template=class{constructor(e,t){s("string"==typeof e,"Template source must be a string"),s(!e.includes("\0")&&!e.includes(""),"Template source cannot contain reserved control characters"),this.source=e,this.rendered=e,this._template=null,this._settings=n(t),this._parse()}_parse(){if(!this.source.includes("{"))return;const e=u.encode(this.source),t=u.split(e);let r=!1;const s=[],n=t.shift();n&&s.push(n);for(const e of t){const t="{"!==e[0],n=t?"}":"}}",o=e.indexOf(n);if(-1===o||"{"===e[1]){s.push("{".concat(u.decode(e)));continue}const a=e.slice(t?0:1,o),i=this._ref(u.decode(a),t);s.push(i),"string"!=typeof i&&(r=!0);const l=e.slice(o+n.length);l&&s.push(u.decode(l))}r?this._template=s:this.rendered=s.join("")}static date(e,t){return u.dateFormat[t.dateFormat].call(e)}describe(e={}){if(!this._settings&&e.compact)return this.source;const t={template:this.source};return this._settings&&(t.options=this._settings),t}static build(e){return new u.Template(e.template,e.options)}isDynamic(){return!!this._template}static isTemplate(e){return!!e&&!!e[i.symbols.template]}refs(){if(!this._template)return;const e=[];for(const t of this._template)"string"!=typeof t&&e.push(...t.refs);return e}resolve(e,t,r,s){return this._template&&1===this._template.length?this._part(this._template[0],e,t,r,s,{}):this.render(e,t,r,s)}_part(e,...t){return e.ref?e.ref.resolve(...t):e.formula.evaluate(t)}render(e,t,r,s,n={}){if(!this.isDynamic())return this.rendered;const a=[];for(const i of this._template)if("string"==typeof i)a.push(i);else{const l=this._part(i,e,t,r,s,n),c=u.stringify(l,r,n.errors);if(void 0!==c){const e=i.raw||!1===(n.errors&&n.errors.escapeHtml)?c:o(c),t=i.ref&&"local"===i.ref.type&&"label"===i.ref.key&&r.errors.wrap.label;a.push(u.wrap(e,t))}}return a.join("")}_ref(e,t){const r=[],s=e=>{const t=c.create(e,this._settings);return r.push(t),e=>t.resolve(...e)};try{var n=new a.Parser(e,{reference:s,functions:u.functions,constants:u.constants})}catch(t){throw t.message='Invalid template variable "'.concat(e,'" fails due to: ').concat(t.message),t}return n.single?"reference"===n.single.type?{ref:r[0],raw:t,refs:r}:u.stringify(n.single.value):{formula:n,raw:t,refs:r}}toString(){return this.source}},u.Template.prototype[i.symbols.template]=!0,u.Template.prototype.isImmutable=!0,u.encode=function(e){return e.replace(/\\(\{+)/g,(e,t)=>u.opens.slice(0,t.length)).replace(/\\(\}+)/g,(e,t)=>u.closes.slice(0,t.length))},u.decode=function(e){return e.replace(/\u0000/g,"{").replace(/\u0001/g,"}")},u.split=function(e){const t=[];let r="";for(let s=0;s<e.length;++s){const n=e[s];if("{"===n){let n="";for(;s+1<e.length&&"{"===e[s+1];)n+="{",++s;t.push(r),r=n}else r+=n}return t.push(r),t},u.wrap=function(e,t){return t?1===t.length?"".concat(t).concat(e).concat(t):"".concat(t[0]).concat(e).concat(t[1]):e},u.stringify=function(e,t,r){const s=typeof e;if(null===e)return"null";if("string"===s)return e;if("number"===s||"function"===s||"symbol"===s)return e.toString();if("object"!==s)return JSON.stringify(e);if(e instanceof Date)return u.Template.date(e,t);if(e instanceof Map){const t=[];for(const[r,s]of e.entries())t.push("".concat(r.toString()," -> ").concat(s.toString()));e=t}if(!Array.isArray(e))return e.toString();let n="";for(const s of e)n=n+(n.length?", ":"")+u.stringify(s,t,r);return u.wrap(n,t.errors.wrap.array)},u.constants={true:!0,false:!1,null:null,second:1e3,minute:6e4,hour:36e5,day:864e5},u.functions={if:(e,t,r)=>e?t:r,msg(e){const[t,r,s,n,o]=this,a=o.messages;if(!a)return"";const i=l.template(t,a[0],e,r,s)||l.template(t,a[1],e,r,s);return i?i.render(t,r,s,n,o):""},number:e=>"number"==typeof e?e:"string"==typeof e?parseFloat(e):"boolean"==typeof e?e?1:0:e instanceof Date?e.getTime():null}},function(e,t,r){"use strict";const s=r(0),n=r(1),o=r(5),a={};t.schema=function(e,t,r={}){n.assertOptions(r,["appendPath","override"]);try{return a.schema(e,t,r)}catch(e){throw r.appendPath&&void 0!==e.path&&(e.message="".concat(e.message," (").concat(e.path,")")),e}},a.schema=function(e,t,r){s(void 0!==t,"Invalid undefined schema"),Array.isArray(t)&&(s(t.length,"Invalid empty array schema"),1===t.length&&(t=t[0]));const o=(t,...s)=>!1!==r.override?t.valid(e.override,...s):t.valid(...s);if(a.simple(t))return o(e,t);if("function"==typeof t)return e.custom(t);if(s("object"==typeof t,"Invalid schema content:",typeof t),n.isResolvable(t))return o(e,t);if(n.isSchema(t))return t;if(Array.isArray(t)){for(const r of t)if(!a.simple(r))return e.alternatives().try(...t);return o(e,...t)}return t instanceof RegExp?e.string().regex(t):t instanceof Date?o(e.date(),t):(s(Object.getPrototypeOf(t)===Object.getPrototypeOf({}),"Schema can only contain plain objects"),e.object().keys(t))},t.ref=function(e,t){return o.isRef(e)?e:o.create(e,t)},t.compile=function(e,r,o={}){n.assertOptions(o,["legacy"]);const i=r&&r[n.symbols.any];if(i)return s(o.legacy||i.version===n.version,"Cannot mix different versions of joi schemas:",i.version,n.version),r;if("object"!=typeof r||!o.legacy)return t.schema(e,r,{appendPath:!0});const l=a.walk(r);return l?l.compile(l.root,r):t.schema(e,r,{appendPath:!0})},a.walk=function(e){if("object"!=typeof e)return null;if(Array.isArray(e)){for(const t of e){const e=a.walk(t);if(e)return e}return null}const t=e[n.symbols.any];if(t)return{root:e[t.root],compile:t.compile};s(Object.getPrototypeOf(e)===Object.getPrototypeOf({}),"Schema can only contain plain objects");for(const t in e){const r=a.walk(e[t]);if(r)return r}return null},a.simple=function(e){return null===e||["boolean","string","number"].includes(typeof e)},t.when=function(e,r,i){if(void 0===i&&(s(r&&"object"==typeof r,"Missing options"),i=r,r=o.create(".")),Array.isArray(i)&&(i={switch:i}),n.assertOptions(i,["is","not","then","otherwise","switch","break"]),n.isSchema(r))return s(void 0===i.is,'"is" can not be used with a schema condition'),s(void 0===i.not,'"not" can not be used with a schema condition'),s(void 0===i.switch,'"switch" can not be used with a schema condition'),a.condition(e,{is:r,then:i.then,otherwise:i.otherwise,break:i.break});if(s(o.isRef(r)||"string"==typeof r,"Invalid condition:",r),s(void 0===i.not||void 0===i.is,'Cannot combine "is" with "not"'),void 0===i.switch){let l=i;void 0!==i.not&&(l={is:i.not,then:i.otherwise,otherwise:i.then,break:i.break});let c=void 0!==l.is?e.$_compile(l.is):e.$_root.invalid(null,!1,0,"").required();return s(void 0!==l.then||void 0!==l.otherwise,'options must have at least one of "then", "otherwise", or "switch"'),s(void 0===l.break||void 0===l.then||void 0===l.otherwise,"Cannot specify then, otherwise, and break all together"),void 0===i.is||o.isRef(i.is)||n.isSchema(i.is)||(c=c.required()),a.condition(e,{ref:t.ref(r),is:c,then:l.then,otherwise:l.otherwise,break:l.break})}s(Array.isArray(i.switch),'"switch" must be an array'),s(void 0===i.is,'Cannot combine "switch" with "is"'),s(void 0===i.not,'Cannot combine "switch" with "not"'),s(void 0===i.then,'Cannot combine "switch" with "then"');const l={ref:t.ref(r),switch:[],break:i.break};for(let t=0;t<i.switch.length;++t){const r=i.switch[t],a=t===i.switch.length-1;n.assertOptions(r,a?["is","then","otherwise"]:["is","then"]),s(void 0!==r.is,'Switch statement missing "is"'),s(void 0!==r.then,'Switch statement missing "then"');const c={is:e.$_compile(r.is),then:e.$_compile(r.then)};if(o.isRef(r.is)||n.isSchema(r.is)||(c.is=c.is.required()),a){s(void 0===i.otherwise||void 0===r.otherwise,'Cannot specify "otherwise" inside and outside a "switch"');const t=void 0!==i.otherwise?i.otherwise:r.otherwise;void 0!==t&&(s(void 0===l.break,"Cannot specify both otherwise and break"),c.otherwise=e.$_compile(t))}l.switch.push(c)}return l},a.condition=function(e,t){for(const r of["then","otherwise"])void 0===t[r]?delete t[r]:t[r]=e.$_compile(t[r]);return t}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(7);t.compile=function(e,t){if("string"==typeof e)return s(!t,"Cannot set single message string"),new o(e);if(o.isTemplate(e))return s(!t,"Cannot set single message template"),e;s("object"==typeof e&&!Array.isArray(e),"Invalid message options"),t=t?n(t):{};for(let r in e){const n=e[r];if("root"===r||o.isTemplate(n)){t[r]=n;continue}if("string"==typeof n){t[r]=new o(n);continue}s("object"==typeof n&&!Array.isArray(n),"Invalid message for",r);const a=r;for(r in t[a]=t[a]||{},n){const e=n[r];"root"===r||o.isTemplate(e)?t[a][r]=e:(s("string"==typeof e,"Invalid message for",r,"in",a),t[a][r]=new o(e))}}return t},t.decompile=function(e){const t={};for(let r in e){const s=e[r];if("root"===r){t[r]=s;continue}if(o.isTemplate(s)){t[r]=s.describe({compact:!0});continue}const n=r;for(r in t[n]={},s){const e=s[r];"root"!==r?t[n][r]=e.describe({compact:!0}):t[n][r]=e}}return t},t.merge=function(e,r){if(!e)return t.compile(r);if(!r)return e;if("string"==typeof r)return new o(r);if(o.isTemplate(r))return r;const a=n(e);for(let e in r){const t=r[e];if("root"===e||o.isTemplate(t)){a[e]=t;continue}if("string"==typeof t){a[e]=new o(t);continue}s("object"==typeof t&&!Array.isArray(t),"Invalid message for",e);const n=e;for(e in a[n]=a[n]||{},t){const r=t[e];"root"===e||o.isTemplate(r)?a[n][e]=r:(s("string"==typeof r,"Invalid message for",e,"in",n),a[n][e]=new o(r))}}return a}},function(e,t,r){"use strict";const s=r(13),n={mismatched:null};e.exports=function(e,t,r){return r=Object.assign({prototype:!0},r),!!n.isDeepEqual(e,t,r,[])},n.isDeepEqual=function(e,t,r,o){if(e===t)return 0!==e||1/e==1/t;const a=typeof e;if(a!==typeof t)return!1;if(null===e||null===t)return!1;if("function"===a){if(!r.deepFunction||e.toString()!==t.toString())return!1}else if("object"!==a)return e!=e&&t!=t;const i=n.getSharedType(e,t,!!r.prototype);switch(i){case s.buffer:return!1;case s.promise:return e===t;case s.regex:return e.toString()===t.toString();case n.mismatched:return!1}for(let r=o.length-1;r>=0;--r)if(o[r].isSame(e,t))return!0;o.push(new n.SeenEntry(e,t));try{return!!n.isDeepEqualObj(i,e,t,r,o)}finally{o.pop()}},n.getSharedType=function(e,t,r){if(r)return Object.getPrototypeOf(e)!==Object.getPrototypeOf(t)?n.mismatched:s.getInternalProto(e);const o=s.getInternalProto(e);return o!==s.getInternalProto(t)?n.mismatched:o},n.valueOf=function(e){const t=e.valueOf;if(void 0===t)return e;try{return t.call(e)}catch(e){return e}},n.hasOwnEnumerableProperty=function(e,t){return Object.prototype.propertyIsEnumerable.call(e,t)},n.isSetSimpleEqual=function(e,t){for(const r of e)if(!t.has(r))return!1;return!0},n.isDeepEqualObj=function(e,t,r,o,a){const{isDeepEqual:i,valueOf:l,hasOwnEnumerableProperty:c}=n,{keys:u,getOwnPropertySymbols:f}=Object;if(e===s.array){if(!o.part){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!i(t[e],r[e],o,a))return!1;return!0}for(const e of t)for(const t of r)if(i(e,t,o,a))return!0}else if(e===s.set){if(t.size!==r.size)return!1;if(!n.isSetSimpleEqual(t,r)){const e=new Set(r);for(const r of t){if(e.delete(r))continue;let t=!1;for(const s of e)if(i(r,s,o,a)){e.delete(s),t=!0;break}if(!t)return!1}}}else if(e===s.map){if(t.size!==r.size)return!1;for(const[e,s]of t){if(void 0===s&&!r.has(e))return!1;if(!i(s,r.get(e),o,a))return!1}}else if(e===s.error&&(t.name!==r.name||t.message!==r.message))return!1;const m=l(t),h=l(r);if((t!==m||r!==h)&&!i(m,h,o,a))return!1;const d=u(t);if(!o.part&&d.length!==u(r).length&&!o.skip)return!1;let p=0;for(const e of d)if(o.skip&&o.skip.includes(e))void 0===r[e]&&++p;else{if(!c(r,e))return!1;if(!i(t[e],r[e],o,a))return!1}if(!o.part&&d.length-p!==u(r).length)return!1;if(!1!==o.symbols){const e=f(t),s=new Set(f(r));for(const n of e){if(!o.skip||!o.skip.includes(n))if(c(t,n)){if(!c(r,n))return!1;if(!i(t[n],r[n],o,a))return!1}else if(c(r,n))return!1;s.delete(n)}for(const e of s)if(c(r,e))return!1}return!0},n.SeenEntry=class{constructor(e,t){this.obj=e,this.ref=t}isSame(e,t){return this.obj===e&&this.ref===t}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(15),a=r(1),i=r(8),l=r(4),c=r(17),u=r(18),f=r(5),m=r(7),h=r(19);let d;const p={types:{alternatives:r(33),any:r(3),array:r(39),boolean:r(40),date:r(41),function:r(42),link:r(45),number:r(46),object:r(47),string:r(48),symbol:r(52)},aliases:{alt:"alternatives",bool:"boolean",func:"function"}};p.root=function(){const e={_types:new Set(Object.keys(p.types))};for(const t of e._types)e[t]=function(...e){return s(!e.length||["alternatives","link","object"].includes(t),"The",t,"type does not allow arguments"),p.generate(this,p.types[t],e)};for(const t of["allow","custom","disallow","equal","exist","forbidden","invalid","not","only","optional","options","prefs","preferences","required","strip","valid","when"])e[t]=function(...e){return this.any()[t](...e)};Object.assign(e,p.methods);for(const t in p.aliases){const r=p.aliases[t];e[t]=e[r]}return e.x=e.expression,h.setup&&h.setup(e),e},p.methods={ValidationError:l.ValidationError,version:a.version,cache:o.provider,assert(e,t,...r){p.assert(e,t,!0,r)},attempt:(e,t,...r)=>p.assert(e,t,!1,r),build(e){return s("function"==typeof u.build,"Manifest functionality disabled"),u.build(this,e)},checkPreferences(e){a.checkPreferences(e)},compile(e,t){return i.compile(this,e,t)},defaults(e){s("function"==typeof e,"modifier must be a function");const t=Object.assign({},this);for(const r of t._types){const n=e(t[r]());s(a.isSchema(n),"modifier must return a valid schema object"),t[r]=function(...e){return p.generate(this,n,e)}}return t},expression:(...e)=>new m(...e),extend(...e){a.verifyFlat(e,"extend"),d=d||r(16),s(e.length,"You need to provide at least one extension"),this.assert(e,d.extensions);const t=Object.assign({},this);t._types=new Set(t._types);for(let r of e){"function"==typeof r&&(r=r(t)),this.assert(r,d.extension);const e=p.expandExtension(r,t);for(const r of e){s(void 0===t[r.type]||t._types.has(r.type),"Cannot override name",r.type);const e=r.base||this.any(),n=c.type(e,r);t._types.add(r.type),t[r.type]=function(...e){return p.generate(this,n,e)}}}return t},isError:l.ValidationError.isError,isExpression:m.isTemplate,isRef:f.isRef,isSchema:a.isSchema,in:(...e)=>f.in(...e),override:a.symbols.override,ref:(...e)=>f.create(...e),types(){const e={};for(const t of this._types)e[t]=this[t]();for(const t in p.aliases)e[t]=this[t]();return e}},p.assert=function(e,t,r,s){const o=s[0]instanceof Error||"string"==typeof s[0]?s[0]:null,i=o?s[1]:s[0],c=t.validate(e,a.preferences({errors:{stack:!0}},i||{}));let u=c.error;if(!u)return c.value;if(o instanceof Error)throw o;const f=r&&"function"==typeof u.annotate?u.annotate():u.message;throw u instanceof l.ValidationError==!1&&(u=n(u)),u.message=o?"".concat(o," ").concat(f):f,u},p.generate=function(e,t,r){return s(e,"Must be invoked on a Joi instance."),t.$_root=e,t._definition.args&&r.length?t._definition.args(t,...r):t},p.expandExtension=function(e,t){if("string"==typeof e.type)return[e];const r=[];for(const s of t._types)if(e.type.test(s)){const n=Object.assign({},e);n.type=s,n.base=t[s](),r.push(n)}return r},e.exports=p.root()},function(e,t,r){"use strict";const s=r(28);e.exports=class extends Error{constructor(e){super(e.filter(e=>""!==e).map(e=>"string"==typeof e?e:e instanceof Error?e.message:s(e)).join(" ")||"Unknown error"),"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t.assert)}}},function(e,t,r){"use strict";const s={};t=e.exports={array:Array.prototype,buffer:!1,date:Date.prototype,error:Error.prototype,generic:Object.prototype,map:Map.prototype,promise:Promise.prototype,regex:RegExp.prototype,set:Set.prototype,weakMap:WeakMap.prototype,weakSet:WeakSet.prototype},s.typeMap=new Map([["[object Error]",t.error],["[object Map]",t.map],["[object Promise]",t.promise],["[object Set]",t.set],["[object WeakMap]",t.weakMap],["[object WeakSet]",t.weakSet]]),t.getInternalProto=function(e){if(Array.isArray(e))return t.array;if(e instanceof Date)return t.date;if(e instanceof RegExp)return t.regex;if(e instanceof Error)return t.error;const r=Object.prototype.toString.call(e);return s.typeMap.get(r)||t.generic}},function(e,t,r){"use strict";t.keys=function(e,t={}){return!1!==t.symbols?Reflect.ownKeys(e):Object.getOwnPropertyNames(e)}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a={max:1e3,supported:new Set(["undefined","boolean","number","string"])};t.provider={provision:e=>new a.Cache(e)},a.Cache=class{constructor(e={}){o.assertOptions(e,["max"]),s(void 0===e.max||e.max&&e.max>0&&isFinite(e.max),"Invalid max cache size"),this._max=e.max||a.max,this._map=new Map,this._list=new a.List}get length(){return this._map.size}set(e,t){if(null!==e&&!a.supported.has(typeof e))return;let r=this._map.get(e);if(r)return r.value=t,void this._list.first(r);r=this._list.unshift({key:e,value:t}),this._map.set(e,r),this._compact()}get(e){const t=this._map.get(e);if(t)return this._list.first(t),n(t.value)}_compact(){if(this._map.size>this._max){const e=this._list.pop();this._map.delete(e.key)}}},a.List=class{constructor(){this.tail=null,this.head=null}unshift(e){return e.next=null,e.prev=this.head,this.head&&(this.head.next=e),this.head=e,this.tail||(this.tail=e),e}first(e){e!==this.head&&(this._remove(e),this.unshift(e))}pop(){return this._remove(this.tail)}_remove(e){const{next:t,prev:r}=e;return t.prev=r,r&&(r.next=t),e===this.tail&&(this.tail=t),e.prev=null,e.next=null,e}}},function(e,t,r){"use strict";const s=r(11),n={};n.wrap=s.string().min(1).max(2).allow(!1),t.preferences=s.object({allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),context:s.object(),convert:s.boolean(),dateFormat:s.valid("date","iso","string","time","utc"),debug:s.boolean(),errors:{escapeHtml:s.boolean(),label:s.valid("path","key",!1),language:[s.string(),s.object().ref()],render:s.boolean(),stack:s.boolean(),wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:s.object(),noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:s.valid("required","optional","forbidden"),skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()}).strict(),n.nameRx=/^[a-zA-Z0-9]\w*$/,n.rule=s.object({alias:s.array().items(s.string().pattern(n.nameRx)).single(),args:s.array().items(s.string(),s.object({name:s.string().pattern(n.nameRx).required(),ref:s.boolean(),assert:s.alternatives([s.function(),s.object().schema()]).conditional("ref",{is:!0,then:s.required()}),normalize:s.function(),message:s.string().when("assert",{is:s.function(),then:s.required()})})),convert:s.boolean(),manifest:s.boolean(),method:s.function().allow(!1),multi:s.boolean(),validate:s.function()}),t.extension=s.object({type:s.alternatives([s.string(),s.object().regex()]).required(),args:s.function(),base:s.object().schema().when("type",{is:s.object().regex(),then:s.forbidden()}),coerce:[s.function().maxArity(3),s.object({method:s.function().maxArity(3).required(),from:s.array().items(s.string()).single()})],flags:s.object().pattern(n.nameRx,s.object({setter:s.string(),default:s.any()})),manifest:{build:s.function().arity(2)},messages:[s.object(),s.string()],modifiers:s.object().pattern(n.nameRx,s.function().minArity(1).maxArity(2)),overrides:s.object().pattern(n.nameRx,s.function()),prepare:s.function().maxArity(3),rebuild:s.function().arity(1),rules:s.object().pattern(n.nameRx,n.rule),terms:s.object().pattern(n.nameRx,s.object({init:s.array().allow(null).required(),manifest:s.object().pattern(/.+/,[s.valid("schema","single"),s.object({mapped:s.object({from:s.string().required(),to:s.string().required()}).required()})])})),validate:s.function().maxArity(3)}).strict(),t.extensions=s.array().items(s.object(),s.function().arity(1)).strict(),n.desc={buffer:s.object({buffer:s.string()}),func:s.object({function:s.function().required(),options:{literal:!0}}),override:s.object({override:!0}),ref:s.object({ref:s.object({type:s.valid("value","global","local"),path:s.array().required(),separator:s.string().length(1).allow(!1),ancestor:s.number().min(0).integer().allow("root"),map:s.array().items(s.array().length(2)).min(1),adjust:s.function(),iterables:s.boolean(),in:s.boolean()}).required()}),regex:s.object({regex:s.string().min(3)}),special:s.object({special:s.valid("deep").required()}),template:s.object({template:s.string().required(),options:s.object()}),value:s.object({value:s.alternatives([s.object(),s.array()]).required()})},n.desc.entity=s.alternatives([s.array().items(s.link("...")),s.boolean(),s.function(),s.number(),s.string(),n.desc.buffer,n.desc.func,n.desc.ref,n.desc.regex,n.desc.special,n.desc.template,n.desc.value,s.link("/")]),n.desc.values=s.array().items(null,s.boolean(),s.function(),s.number().allow(1/0,-1/0),s.string().allow(""),s.symbol(),n.desc.buffer,n.desc.func,n.desc.override,n.desc.ref,n.desc.regex,n.desc.template,n.desc.value),n.desc.messages=s.object().pattern(/.+/,[s.string(),n.desc.template,s.object().pattern(/.+/,[s.string(),n.desc.template])]),t.description=s.object({type:s.string().required(),flags:s.object({cast:s.string(),default:s.any(),description:s.string(),empty:s.link("/"),failover:n.desc.entity,id:s.string(),label:s.string(),only:!0,presence:["optional","required","forbidden"],result:["raw","strip"],strip:s.boolean(),unit:s.string()}).unknown(),preferences:{allowUnknown:s.boolean(),abortEarly:s.boolean(),cache:s.boolean(),convert:s.boolean(),dateFormat:["date","iso","string","time","utc"],errors:{escapeHtml:s.boolean(),label:["path","key"],language:[s.string(),n.desc.ref],wrap:{label:n.wrap,array:n.wrap}},externals:s.boolean(),messages:n.desc.messages,noDefaults:s.boolean(),nonEnumerables:s.boolean(),presence:["required","optional","forbidden"],skipFunctions:s.boolean(),stripUnknown:s.object({arrays:s.boolean(),objects:s.boolean()}).or("arrays","objects").allow(!0,!1),warnings:s.boolean()},allow:n.desc.values,invalid:n.desc.values,rules:s.array().min(1).items({name:s.string().required(),args:s.object().min(1),keep:s.boolean(),message:[s.string(),n.desc.messages],warn:s.boolean()}),keys:s.object().pattern(/.*/,s.link("/")),link:n.desc.ref}).pattern(/^[a-z]\w*$/,s.any())},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(1),a=r(9),i={};t.type=function(e,t){const r=Object.getPrototypeOf(e),l=n(r),c=e._assign(Object.create(l)),u=Object.assign({},t);delete u.base,l._definition=u;const f=r._definition||{};u.messages=a.merge(f.messages,u.messages),u.properties=Object.assign({},f.properties,u.properties),c.type=u.type,u.flags=Object.assign({},f.flags,u.flags);const m=Object.assign({},f.terms);if(u.terms)for(const e in u.terms){const t=u.terms[e];s(void 0===c.$_terms[e],"Invalid term override for",u.type,e),c.$_terms[e]=t.init,m[e]=t}u.terms=m,u.args||(u.args=f.args),u.prepare=i.prepare(u.prepare,f.prepare),u.coerce&&("function"==typeof u.coerce&&(u.coerce={method:u.coerce}),u.coerce.from&&!Array.isArray(u.coerce.from)&&(u.coerce={method:u.coerce.method,from:[].concat(u.coerce.from)})),u.coerce=i.coerce(u.coerce,f.coerce),u.validate=i.validate(u.validate,f.validate);const h=Object.assign({},f.rules);if(u.rules)for(const e in u.rules){const t=u.rules[e];s("object"==typeof t,"Invalid rule definition for",u.type,e);let r=t.method;if(void 0===r&&(r=function(){return this.$_addRule(e)}),r&&(s(!l[e],"Rule conflict in",u.type,e),l[e]=r),s(!h[e],"Rule conflict in",u.type,e),h[e]=t,t.alias){const e=[].concat(t.alias);for(const r of e)l[r]=t.method}t.args&&(t.argsByName=new Map,t.args=t.args.map(e=>("string"==typeof e&&(e={name:e}),s(!t.argsByName.has(e.name),"Duplicated argument name",e.name),o.isSchema(e.assert)&&(e.assert=e.assert.strict().label(e.name)),t.argsByName.set(e.name,e),e)))}u.rules=h;const d=Object.assign({},f.modifiers);if(u.modifiers)for(const e in u.modifiers){s(!l[e],"Rule conflict in",u.type,e);const t=u.modifiers[e];s("function"==typeof t,"Invalid modifier definition for",u.type,e);const r=function(t){return this.rule({[e]:t})};l[e]=r,d[e]=t}if(u.modifiers=d,u.overrides){l._super=r,c.$_super={};for(const e in u.overrides)s(r[e],"Cannot override missing",e),c.$_super[e]=r[e].bind(c);Object.assign(l,u.overrides)}u.cast=Object.assign({},f.cast,u.cast);const p=Object.assign({},f.manifest,u.manifest);return p.build=i.build(u.manifest&&u.manifest.build,f.manifest&&f.manifest.build),u.manifest=p,u.rebuild=i.rebuild(u.rebuild,f.rebuild),c},i.build=function(e,t){return e&&t?function(r,s){return t(e(r,s),s)}:e||t},i.coerce=function(e,t){return e&&t?{from:e.from&&t.from?[...new Set([...e.from,...t.from])]:null,method(r,s){let n;if((!t.from||t.from.includes(typeof r))&&(n=t.method(r,s),n)){if(n.errors||void 0===n.value)return n;r=n.value}if(!e.from||e.from.includes(typeof r)){const t=e.method(r,s);if(t)return t}return n}}:e||t},i.prepare=function(e,t){return e&&t?function(r,s){const n=e(r,s);if(n){if(n.errors||void 0===n.value)return n;r=n.value}return t(r,s)||n}:e||t},i.rebuild=function(e,t){return e&&t?function(r){t(r),e(r)}:e||t},i.validate=function(e,t){return e&&t?function(r,s){const n=t(r,s);if(n){if(n.errors&&(!Array.isArray(n.errors)||n.errors.length))return n;r=n.value}return e(r,s)||n}:e||t}},function(e,t){},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(14),a={};e.exports=a.merge=function(e,t,r){if(s(e&&"object"==typeof e,"Invalid target value: must be an object"),s(null==t||"object"==typeof t,"Invalid source value: must be null, undefined, or an object"),!t)return e;if(r=Object.assign({nullOverride:!0,mergeArrays:!0},r),Array.isArray(t)){s(Array.isArray(e),"Cannot merge array onto an object"),r.mergeArrays||(e.length=0);for(let s=0;s<t.length;++s)e.push(n(t[s],{symbols:r.symbols}));return e}const i=o.keys(t,r);for(let s=0;s<i.length;++s){const o=i[s];if("__proto__"===o||!Object.prototype.propertyIsEnumerable.call(t,o))continue;const l=t[o];if(l&&"object"==typeof l){if(e[o]===l)continue;!e[o]||"object"!=typeof e[o]||Array.isArray(e[o])!==Array.isArray(l)||l instanceof Date||l instanceof RegExp?e[o]=n(l,{symbols:r.symbols}):a.merge(e[o],l,r)}else null!=l?e[o]=l:r.nullOverride&&(e[o]=l)}return e}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(1),a={};e.exports=a.Values=class{constructor(e,t){this._values=new Set(e),this._refs=new Set(t),this._lowercase=a.lowercases(e),this._override=!1}get length(){return this._values.size+this._refs.size}add(e,t){o.isResolvable(e)?this._refs.has(e)||(this._refs.add(e),t&&t.register(e)):this.has(e,null,null,!1)||(this._values.add(e),"string"==typeof e&&this._lowercase.set(e.toLowerCase(),e))}static merge(e,t,r){if(e=e||new a.Values,t){if(t._override)return t.clone();for(const r of[...t._values,...t._refs])e.add(r)}if(r)for(const t of[...r._values,...r._refs])e.remove(t);return e.length?e:null}remove(e){o.isResolvable(e)?this._refs.delete(e):(this._values.delete(e),"string"==typeof e&&this._lowercase.delete(e.toLowerCase()))}has(e,t,r,s){return!!this.get(e,t,r,s)}get(e,t,r,s){if(!this.length)return!1;if(this._values.has(e))return{value:e};if("string"==typeof e&&e&&s){const t=this._lowercase.get(e.toLowerCase());if(t)return{value:t}}if(!this._refs.size&&"object"!=typeof e)return!1;if("object"==typeof e)for(const t of this._values)if(n(t,e))return{value:t};if(t)for(const o of this._refs){const a=o.resolve(e,t,r,null,{in:!0});if(void 0===a)continue;const i=o.in&&"object"==typeof a?Array.isArray(a)?a:Object.keys(a):[a];for(const t of i)if(typeof t==typeof e)if(s&&e&&"string"==typeof e){if(t.toLowerCase()===e.toLowerCase())return{value:t,ref:o}}else if(n(t,e))return{value:t,ref:o}}return!1}override(){this._override=!0}values(e){if(e&&e.display){const e=[];for(const t of[...this._values,...this._refs])void 0!==t&&e.push(t);return e}return Array.from([...this._values,...this._refs])}clone(){const e=new a.Values(this._values,this._refs);return e._override=this._override,e}concat(e){s(!e._override,"Cannot concat override set of values");const t=new a.Values([...this._values,...e._values],[...this._refs,...e._refs]);return t._override=this._override,t}describe(){const e=[];this._override&&e.push({override:!0});for(const t of this._values.values())e.push(t&&"object"==typeof t?{value:t}:t);for(const t of this._refs.values())e.push(t.describe());return e}},a.Values.prototype[o.symbols.values]=!0,a.Values.prototype.slice=a.Values.prototype.clone,a.lowercases=function(e){const t=new Map;if(e)for(const r of e)"string"==typeof r&&t.set(r.toLowerCase(),r);return t}},function(e,t,r){"use strict";const s=r(43),n=r(0),o=r(2),a=r(44),i=r(3),l=r(1),c=r(8),u=r(4),f=r(5),m=r(7),h={renameDefaults:{alias:!1,multiple:!1,override:!1}};e.exports=i.extend({type:"_keys",properties:{typeof:"object"},flags:{unknown:{default:!1}},terms:{dependencies:{init:null},keys:{init:null,manifest:{mapped:{from:"schema",to:"key"}}},patterns:{init:null},renames:{init:null}},args:(e,t)=>e.keys(t),validate(e,{schema:t,error:r,state:s,prefs:n}){if(!e||typeof e!==t.$_property("typeof")||Array.isArray(e))return{value:e,errors:r("object.base",{type:t.$_property("typeof")})};if(!(t.$_terms.renames||t.$_terms.dependencies||t.$_terms.keys||t.$_terms.patterns||t.$_terms.externals))return;e=h.clone(e,n);const o=[];if(t.$_terms.renames&&!h.rename(t,e,s,n,o))return{value:e,errors:o};if(!t.$_terms.keys&&!t.$_terms.patterns&&!t.$_terms.dependencies)return{value:e,errors:o};const a=new Set(Object.keys(e));if(t.$_terms.keys){const r=[e,...s.ancestors];for(const i of t.$_terms.keys){const t=i.key,l=e[t];a.delete(t);const c=s.localize([...s.path,t],r,i),u=i.schema.$_validate(l,c,n);if(u.errors){if(n.abortEarly)return{value:e,errors:u.errors};o.push(...u.errors)}else"strip"===i.schema._flags.result||void 0===u.value&&void 0!==l?delete e[t]:void 0!==u.value&&(e[t]=u.value)}}if(a.size||t._flags._hasPatternMatch){const r=h.unknown(t,e,a,o,s,n);if(r)return r}if(t.$_terms.dependencies)for(const r of t.$_terms.dependencies){if(r.key&&void 0===r.key.resolve(e,s,n,null,{shadow:!1}))continue;const a=h.dependencies[r.rel](t,r,e,s,n);if(a){const r=t.$_createError(a.code,e,a.context,s,n);if(n.abortEarly)return{value:e,errors:r};o.push(r)}}return{value:e,errors:o}},rules:{and:{method(...e){return l.verifyFlat(e,"and"),h.dependency(this,"and",null,e)}},append:{method(e){return null==e||0===Object.keys(e).length?this:this.keys(e)}},assert:{method(e,t,r){m.isTemplate(e)||(e=c.ref(e)),n(void 0===r||"string"==typeof r,"Message must be a string"),t=this.$_compile(t,{appendPath:!0});const s=this.$_addRule({name:"assert",args:{subject:e,schema:t,message:r}});return s.$_mutateRegister(e),s.$_mutateRegister(t),s},validate(e,{error:t,prefs:r,state:s},{subject:n,schema:o,message:a}){const i=n.resolve(e,s,r),l=f.isRef(n)?n.absolute(s):[];return o.$_match(i,s.localize(l,[e,...s.ancestors],o),r)?e:t("object.assert",{subject:n,message:a})},args:["subject","schema","message"],multi:!0},instance:{method(e,t){return n("function"==typeof e,"constructor must be a function"),t=t||e.name,this.$_addRule({name:"instance",args:{constructor:e,name:t}})},validate:(e,t,{constructor:r,name:s})=>e instanceof r?e:t.error("object.instance",{type:s,value:e}),args:["constructor","name"]},keys:{method(e){n(void 0===e||"object"==typeof e,"Object schema must be a valid object"),n(!l.isSchema(e),"Object schema cannot be a joi schema");const t=this.clone();if(e)if(Object.keys(e).length){t.$_terms.keys=t.$_terms.keys?t.$_terms.keys.filter(t=>!e.hasOwnProperty(t.key)):new h.Keys;for(const r in e)l.tryWithPath(()=>t.$_terms.keys.push({key:r,schema:this.$_compile(e[r])}),r)}else t.$_terms.keys=new h.Keys;else t.$_terms.keys=null;return t.$_mutateRebuild()}},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>l.compare(Object.keys(e).length,r,n)?e:t.error("object."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:l.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},nand:{method(...e){return l.verifyFlat(e,"nand"),h.dependency(this,"nand",null,e)}},or:{method(...e){return l.verifyFlat(e,"or"),h.dependency(this,"or",null,e)}},oxor:{method(...e){return h.dependency(this,"oxor",null,e)}},pattern:{method(e,t,r={}){const s=e instanceof RegExp;s||(e=this.$_compile(e,{appendPath:!0})),n(void 0!==t,"Invalid rule"),l.assertOptions(r,["fallthrough","matches"]),s&&n(!e.flags.includes("g")&&!e.flags.includes("y"),"pattern should not use global or sticky mode"),t=this.$_compile(t,{appendPath:!0});const o=this.clone();o.$_terms.patterns=o.$_terms.patterns||[];const a={[s?"regex":"schema"]:e,rule:t};return r.matches&&(a.matches=this.$_compile(r.matches),"array"!==a.matches.type&&(a.matches=a.matches.$_root.array().items(a.matches)),o.$_mutateRegister(a.matches),o.$_setFlag("_hasPatternMatch",!0,{clone:!1})),r.fallthrough&&(a.fallthrough=!0),o.$_terms.patterns.push(a),o.$_mutateRegister(t),o}},ref:{method(){return this.$_addRule("ref")},validate:(e,t)=>f.isRef(e)?e:t.error("object.refType",{value:e})},regex:{method(){return this.$_addRule("regex")},validate:(e,t)=>e instanceof RegExp?e:t.error("object.regex",{value:e})},rename:{method(e,t,r={}){n("string"==typeof e||e instanceof RegExp,"Rename missing the from argument"),n("string"==typeof t||t instanceof m,"Invalid rename to argument"),n(t!==e,"Cannot rename key to same name:",e),l.assertOptions(r,["alias","ignoreUndefined","override","multiple"]);const o=this.clone();o.$_terms.renames=o.$_terms.renames||[];for(const t of o.$_terms.renames)n(t.from!==e,"Cannot rename the same key multiple times");return t instanceof m&&o.$_mutateRegister(t),o.$_terms.renames.push({from:e,to:t,options:s(h.renameDefaults,r)}),o}},schema:{method(e="any"){return this.$_addRule({name:"schema",args:{type:e}})},validate:(e,t,{type:r})=>!l.isSchema(e)||"any"!==r&&e.type!==r?t.error("object.schema",{type:r}):e},unknown:{method(e){return this.$_setFlag("unknown",!1!==e)}},with:{method(e,t,r={}){return h.dependency(this,"with",e,t,r)}},without:{method(e,t,r={}){return h.dependency(this,"without",e,t,r)}},xor:{method(...e){return l.verifyFlat(e,"xor"),h.dependency(this,"xor",null,e)}}},overrides:{default(e,t){return void 0===e&&(e=l.symbols.deepDefault),this.$_super.default(e,t)}},rebuild(e){if(e.$_terms.keys){const t=new a.Sorter;for(const r of e.$_terms.keys)l.tryWithPath(()=>t.add(r,{after:r.schema.$_rootReferences(),group:r.key}),r.key);e.$_terms.keys=new h.Keys(...t.nodes)}},manifest:{build(e,t){if(t.keys&&(e=e.keys(t.keys)),t.dependencies)for(const{rel:r,key:s=null,peers:n,options:o}of t.dependencies)e=h.dependency(e,r,s,n,o);if(t.patterns)for(const{regex:r,schema:s,rule:n,fallthrough:o,matches:a}of t.patterns)e=e.pattern(r||s,n,{fallthrough:o,matches:a});if(t.renames)for(const{from:r,to:s,options:n}of t.renames)e=e.rename(r,s,n);return e}},messages:{"object.and":"{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}","object.assert":'{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',"object.base":"{{#label}} must be of type {{#type}}","object.instance":'{{#label}} must be an instance of "{{#type}}"',"object.length":'{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',"object.max":'{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',"object.min":'{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',"object.missing":"{{#label}} must contain at least one of {{#peersWithLabels}}","object.nand":'"{{#mainWithLabel}}" must not exist simultaneously with {{#peersWithLabels}}',"object.oxor":"{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}","object.pattern.match":"{{#label}} keys failed to match pattern requirements","object.refType":"{{#label}} must be a Joi reference","object.regex":"{{#label}} must be a RegExp object","object.rename.multiple":'{{#label}} cannot rename "{{#from}}" because multiple renames are disabled and another key was already renamed to "{{#to}}"',"object.rename.override":'{{#label}} cannot rename "{{#from}}" because override is disabled and target "{{#to}}" exists',"object.schema":"{{#label}} must be a Joi schema of {{#type}} type","object.unknown":"{{#label}} is not allowed","object.with":'"{{#mainWithLabel}}" missing required peer "{{#peerWithLabel}}"',"object.without":'"{{#mainWithLabel}}" conflict with forbidden peer "{{#peerWithLabel}}"',"object.xor":"{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}"}}),h.clone=function(e,t){if("object"==typeof e){if(t.nonEnumerables)return o(e,{shallow:!0});const r=Object.create(Object.getPrototypeOf(e));return Object.assign(r,e),r}const r=function(...t){return e.apply(this,t)};return r.prototype=o(e.prototype),Object.defineProperty(r,"name",{value:e.name,writable:!1}),Object.defineProperty(r,"length",{value:e.length,writable:!1}),Object.assign(r,e),r},h.dependency=function(e,t,r,s,o){n(null===r||"string"==typeof r,t,"key must be a strings"),o||(o=s.length>1&&"object"==typeof s[s.length-1]?s.pop():{}),l.assertOptions(o,["separator"]),s=[].concat(s);const a=l.default(o.separator,"."),i=[];for(const e of s)n("string"==typeof e,t,"peers must be a string or a reference"),i.push(c.ref(e,{separator:a,ancestor:0,prefix:!1}));null!==r&&(r=c.ref(r,{separator:a,ancestor:0,prefix:!1}));const u=e.clone();return u.$_terms.dependencies=u.$_terms.dependencies||[],u.$_terms.dependencies.push(new h.Dependency(t,r,i,s)),u},h.dependencies={and(e,t,r,s,n){const o=[],a=[],i=t.peers.length;for(const e of t.peers)void 0===e.resolve(r,s,n,null,{shadow:!1})?o.push(e.key):a.push(e.key);if(o.length!==i&&a.length!==i)return{code:"object.and",context:{present:a,presentWithLabels:h.keysToLabels(e,a),missing:o,missingWithLabels:h.keysToLabels(e,o)}}},nand(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(o.length!==t.peers.length)return;const a=t.paths[0],i=t.paths.slice(1);return{code:"object.nand",context:{main:a,mainWithLabel:h.keysToLabels(e,a),peers:i,peersWithLabels:h.keysToLabels(e,i)}}},or(e,t,r,s,n){for(const e of t.peers)if(void 0!==e.resolve(r,s,n,null,{shadow:!1}))return;return{code:"object.missing",context:{peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)}}},oxor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(!o.length||1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.oxor",context:a}},with(e,t,r,s,n){for(const o of t.peers)if(void 0===o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.with",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},without(e,t,r,s,n){for(const o of t.peers)if(void 0!==o.resolve(r,s,n,null,{shadow:!1}))return{code:"object.without",context:{main:t.key.key,mainWithLabel:h.keysToLabels(e,t.key.key),peer:o.key,peerWithLabel:h.keysToLabels(e,o.key)}}},xor(e,t,r,s,n){const o=[];for(const e of t.peers)void 0!==e.resolve(r,s,n,null,{shadow:!1})&&o.push(e.key);if(1===o.length)return;const a={peers:t.paths,peersWithLabels:h.keysToLabels(e,t.paths)};return 0===o.length?{code:"object.missing",context:a}:(a.present=o,a.presentWithLabels=h.keysToLabels(e,o),{code:"object.xor",context:a})}},h.keysToLabels=function(e,t){return Array.isArray(t)?t.map(t=>e.$_mapLabels(t)):e.$_mapLabels(t)},h.rename=function(e,t,r,s,n){const o={};for(const a of e.$_terms.renames){const i=[],l="string"!=typeof a.from;if(l)for(const e in t){if(void 0===t[e]&&a.options.ignoreUndefined)continue;if(e===a.to)continue;const r=a.from.exec(e);r&&i.push({from:e,to:a.to,match:r})}else!Object.prototype.hasOwnProperty.call(t,a.from)||void 0===t[a.from]&&a.options.ignoreUndefined||i.push(a);for(const c of i){const i=c.from;let u=c.to;if(u instanceof m&&(u=u.render(t,r,s,c.match)),i!==u){if(!a.options.multiple&&o[u]&&(n.push(e.$_createError("object.rename.multiple",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;if(Object.prototype.hasOwnProperty.call(t,u)&&!a.options.override&&!o[u]&&(n.push(e.$_createError("object.rename.override",t,{from:i,to:u,pattern:l},r,s)),s.abortEarly))return!1;void 0===t[i]?delete t[u]:t[u]=t[i],o[u]=!0,a.options.alias||delete t[i]}}}return!0},h.unknown=function(e,t,r,s,n,o){if(e.$_terms.patterns){let a=!1;const i=e.$_terms.patterns.map(e=>{if(e.matches)return a=!0,[]}),l=[t,...n.ancestors];for(const a of r){const c=t[a],u=[...n.path,a];for(let f=0;f<e.$_terms.patterns.length;++f){const m=e.$_terms.patterns[f];if(m.regex){const e=m.regex.test(a);if(n.mainstay.tracer.debug(n,"rule","pattern.".concat(f),e?"pass":"error"),!e)continue}else if(!m.schema.$_match(a,n.nest(m.schema,"pattern.".concat(f)),o))continue;r.delete(a);const h=n.localize(u,l,{schema:m.rule,key:a}),d=m.rule.$_validate(c,h,o);if(d.errors){if(o.abortEarly)return{value:t,errors:d.errors};s.push(...d.errors)}if(m.matches&&i[f].push(a),t[a]=d.value,!m.fallthrough)break}}if(a)for(let r=0;r<i.length;++r){const a=i[r];if(!a)continue;const c=e.$_terms.patterns[r].matches,f=n.localize(n.path,l,c),m=c.$_validate(a,f,o);if(m.errors){const r=u.details(m.errors,{override:!1});r.matches=a;const i=e.$_createError("object.pattern.match",t,r,n,o);if(o.abortEarly)return{value:t,errors:i};s.push(i)}}}if(!r.size||!e.$_terms.keys&&!e.$_terms.patterns)return;if(o.stripUnknown&&!e._flags.unknown||o.skipFunctions){const e=!!o.stripUnknown&&(!0===o.stripUnknown||!!o.stripUnknown.objects);for(const s of r)e?(delete t[s],r.delete(s)):"function"==typeof t[s]&&r.delete(s)}if(!l.default(e._flags.unknown,o.allowUnknown))for(const a of r){const r=n.localize([...n.path,a],[]),i=e.$_createError("object.unknown",t[a],{child:a},r,o,{flags:!1});if(o.abortEarly)return{value:t,errors:i};s.push(i)}},h.Dependency=class{constructor(e,t,r,s){this.rel=e,this.key=t,this.peers=r,this.paths=s}describe(){const e={rel:this.rel,peers:this.paths};return null!==this.key&&(e.key=this.key.key),"."!==this.peers[0].separator&&(e.options={separator:this.peers[0].separator}),e}},h.Keys=class extends Array{concat(e){const t=this.slice(),r=new Map;for(let e=0;e<t.length;++e)r.set(t[e].key,e);for(const s of e){const e=s.key,n=r.get(e);void 0!==n?t[n]={key:e,schema:t[n].schema.concat(s.schema)}:t.push(s)}return t}}},function(e,t,r){"use strict";const s=r(24),n=r(25),o={minDomainSegments:2,nonAsciiRx:/[^\x00-\x7f]/,domainControlRx:/[\x00-\x20@\:\/]/,tldSegmentRx:/^[a-zA-Z](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,domainSegmentRx:/^[a-zA-Z0-9](?:[a-zA-Z0-9\-]*[a-zA-Z0-9])?$/,URL:s.URL||URL};t.analyze=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: domain must be a string");if(!e)return n.code("DOMAIN_NON_EMPTY_STRING");if(e.length>256)return n.code("DOMAIN_TOO_LONG");if(!!o.nonAsciiRx.test(e)){if(!1===t.allowUnicode)return n.code("DOMAIN_INVALID_UNICODE_CHARS");e=e.normalize("NFC")}if(o.domainControlRx.test(e))return n.code("DOMAIN_INVALID_CHARS");e=o.punycode(e);const r=t.minDomainSegments||o.minDomainSegments,s=e.split(".");if(s.length<r)return n.code("DOMAIN_SEGMENTS_COUNT");const a=t.tlds;if(a){const e=s[s.length-1].toLowerCase();if(a.deny&&a.deny.has(e)||a.allow&&!a.allow.has(e))return n.code("DOMAIN_FORBIDDEN_TLDS")}for(let e=0;e<s.length;++e){const t=s[e];if(!t.length)return n.code("DOMAIN_EMPTY_SEGMENT");if(t.length>63)return n.code("DOMAIN_LONG_SEGMENT");if(e<s.length-1){if(!o.domainSegmentRx.test(t))return n.code("DOMAIN_INVALID_CHARS")}else if(!o.tldSegmentRx.test(t))return n.code("DOMAIN_INVALID_TLDS_CHARS")}return null},t.isValid=function(e,r){return!t.analyze(e,r)},o.punycode=function(e){try{return new o.URL("http://".concat(e)).host}catch(t){return e}}},function(e,t){},function(e,t,r){"use strict";t.codes={EMPTY_STRING:"Address must be a non-empty string",FORBIDDEN_UNICODE:"Address contains forbidden Unicode characters",MULTIPLE_AT_CHAR:"Address cannot contain more than one @ character",MISSING_AT_CHAR:"Address must contain one @ character",EMPTY_LOCAL:"Address local part cannot be empty",ADDRESS_TOO_LONG:"Address too long",LOCAL_TOO_LONG:"Address local part too long",EMPTY_LOCAL_SEGMENT:"Address local part contains empty dot-separated segment",INVALID_LOCAL_CHARS:"Address local part contains invalid character",DOMAIN_NON_EMPTY_STRING:"Domain must be a non-empty string",DOMAIN_TOO_LONG:"Domain too long",DOMAIN_INVALID_UNICODE_CHARS:"Domain contains forbidden Unicode characters",DOMAIN_INVALID_CHARS:"Domain contains invalid character",DOMAIN_INVALID_TLDS_CHARS:"Domain contains invalid tld character",DOMAIN_SEGMENTS_COUNT:"Domain lacks the minimum required number of segments",DOMAIN_FORBIDDEN_TLDS:"Domain uses forbidden TLD",DOMAIN_EMPTY_SEGMENT:"Domain contains empty dot-separated segment",DOMAIN_LONG_SEGMENT:"Domain contains dot-separated segment that is too long"},t.code=function(e){return{code:e,error:t.codes[e]}}},function(e,t,r){"use strict";const s=r(0),n=r(27),o={generate:function(){const e={},t="!\\$&'\\(\\)\\*\\+,;=",r="\\w-\\.~%\\dA-Fa-f"+t+":@",s="["+r+"]",n="(?:0{0,2}\\d|0?[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])";e.ipv4address="(?:"+n+"\\.){3}"+n;const o="[\\dA-Fa-f]{1,4}",a="(?:"+o+":"+o+"|"+e.ipv4address+")",i="(?:"+o+":){6}"+a,l="::(?:"+o+":){5}"+a,c="(?:"+o+")?::(?:"+o+":){4}"+a,u="(?:(?:"+o+":){0,1}"+o+")?::(?:"+o+":){3}"+a,f="(?:(?:"+o+":){0,2}"+o+")?::(?:"+o+":){2}"+a,m="(?:(?:"+o+":){0,3}"+o+")?::"+o+":"+a,h="(?:(?:"+o+":){0,4}"+o+")?::"+a;e.ipv4Cidr="(?:\\d|[1-2]\\d|3[0-2])",e.ipv6Cidr="(?:0{0,2}\\d|0?[1-9]\\d|1[01]\\d|12[0-8])",e.ipv6address="(?:"+i+"|"+l+"|"+c+"|"+u+"|"+f+"|"+m+"|"+h+"|(?:(?:[\\dA-Fa-f]{1,4}:){0,5}[\\dA-Fa-f]{1,4})?::[\\dA-Fa-f]{1,4}|(?:(?:[\\dA-Fa-f]{1,4}:){0,6}[\\dA-Fa-f]{1,4})?::)",e.ipvFuture="v[\\dA-Fa-f]+\\.[\\w-\\.~"+t+":]+",e.scheme="[a-zA-Z][a-zA-Z\\d+-\\.]*",e.schemeRegex=new RegExp(e.scheme);const d="[\\w-\\.~%\\dA-Fa-f"+t+":]*",p="(?:"+("\\[(?:"+e.ipv6address+"|"+e.ipvFuture+")\\]")+"|"+e.ipv4address+"|[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=]{1,255})",g="(?:"+d+"@)?"+p+"(?::\\d*)?",y="(?:"+d+"@)?("+p+")(?::\\d*)?",b=s+"*",v=s+"+",_="(?:\\/"+b+")*",w="\\/(?:"+v+_+")?",$=v+_,x="[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=@]+"+_;return e.hierPart="(?:(?:\\/\\/"+g+_+")|"+w+"|"+$+"|(?:\\/\\/\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*(?:\\/[\\w-\\.~%\\dA-Fa-f!\\$&'\\(\\)\\*\\+,;=:@]*)*))",e.hierPartCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+$+")",e.relativeRef="(?:(?:\\/\\/"+g+_+")|"+w+"|"+x+"|)",e.relativeRefCapture="(?:(?:\\/\\/"+y+_+")|"+w+"|"+x+"|)",e.query="["+r+"\\/\\?]*(?=#|$)",e.queryWithSquareBrackets="["+r+"\\[\\]\\/\\?]*(?=#|$)",e.fragment="["+r+"\\/\\?]*",e}};o.rfc3986=o.generate(),t.ip={v4Cidr:o.rfc3986.ipv4Cidr,v6Cidr:o.rfc3986.ipv6Cidr,ipv4:o.rfc3986.ipv4address,ipv6:o.rfc3986.ipv6address,ipvfuture:o.rfc3986.ipvFuture},o.createRegex=function(e){const t=o.rfc3986,r="(?:\\?"+(e.allowQuerySquareBrackets?t.queryWithSquareBrackets:t.query)+")?(?:#"+t.fragment+")?",a=e.domain?t.relativeRefCapture:t.relativeRef;if(e.relativeOnly)return o.wrap(a+r);let i="";if(e.scheme){s(e.scheme instanceof RegExp||"string"==typeof e.scheme||Array.isArray(e.scheme),"scheme must be a RegExp, String, or Array");const r=[].concat(e.scheme);s(r.length>=1,"scheme must have at least 1 scheme specified");const o=[];for(let e=0;e<r.length;++e){const a=r[e];s(a instanceof RegExp||"string"==typeof a,"scheme at position "+e+" must be a RegExp or String"),a instanceof RegExp?o.push(a.source.toString()):(s(t.schemeRegex.test(a),"scheme at position "+e+" must be a valid scheme"),o.push(n(a)))}i=o.join("|")}const l="(?:"+(i?"(?:"+i+")":t.scheme)+":"+(e.domain?t.hierPartCapture:t.hierPart)+")",c=e.allowRelative?"(?:"+l+"|"+a+")":l;return o.wrap(c+r,i)},o.wrap=function(e,t){return{raw:e="(?=.)(?!https?:/$)".concat(e),regex:new RegExp("^".concat(e,"$")),scheme:t}},o.uriRegex=o.createRegex({}),t.regex=function(e={}){return e.scheme||e.allowRelative||e.relativeOnly||e.allowQuerySquareBrackets||e.domain?o.createRegex(e):o.uriRegex}},function(e,t,r){"use strict";e.exports=function(e){return e.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")}},function(e,t,r){"use strict";e.exports=function(...e){try{return JSON.stringify.apply(null,e)}catch(e){return"[Cannot display object: "+e.message+"]"}}},function(e){e.exports=JSON.parse('{"version":"17.1.1"}')},function(e,t,r){"use strict";const s={};e.exports=function(e){if(!e)return"";let t="";for(let r=0;r<e.length;++r){const n=e.charCodeAt(r);s.isSafe(n)?t+=e[r]:t+=s.escapeHtmlChar(n)}return t},s.escapeHtmlChar=function(e){const t=s.namedHtml[e];if(void 0!==t)return t;if(e>=256)return"&#"+e+";";const r=e.toString(16).padStart(2,"0");return"&#x".concat(r,";")},s.isSafe=function(e){return void 0!==s.safeCharCodes[e]},s.namedHtml={38:"&amp;",60:"&lt;",62:"&gt;",34:"&quot;",160:"&nbsp;",162:"&cent;",163:"&pound;",164:"&curren;",169:"&copy;",174:"&reg;"},s.safeCharCodes=function(){const e={};for(let t=32;t<123;++t)(t>=97||t>=65&&t<=90||t>=48&&t<=57||32===t||46===t||44===t||45===t||58===t||95===t)&&(e[t]=null);return e}()},function(e,t,r){"use strict";const s={operators:["!","^","*","/","%","+","-","<","<=",">",">=","==","!=","&&","||","??"],operatorCharacters:["!","^","*","/","%","+","-","<","=",">","&","|","?"],operatorsOrder:[["^"],["*","/","%"],["+","-"],["<","<=",">",">="],["==","!="],["&&"],["||","??"]],operatorsPrefix:["!","n"],literals:{'"':'"',"`":"`","'":"'","[":"]"},numberRx:/^(?:[0-9]*\.?[0-9]*){1}$/,tokenRx:/^[\w\$\#\.\@\:\{\}]+$/,symbol:Symbol("formula"),settings:Symbol("settings")};t.Parser=class{constructor(e,t={}){if(!t[s.settings]&&t.constants)for(const e in t.constants){const r=t.constants[e];if(null!==r&&!["boolean","number","string"].includes(typeof r))throw new Error("Formula constant ".concat(e," contains invalid ").concat(typeof r," value type"))}this.settings=t[s.settings]?t:Object.assign({[s.settings]:!0,constants:{},functions:{}},t),this.single=null,this._parts=null,this._parse(e)}_parse(e){let r=[],n="",o=0,a=!1;const i=e=>{if(o)throw new Error("Formula missing closing parenthesis");const i=r.length?r[r.length-1]:null;if(a||n||e){if(i&&"reference"===i.type&&")"===e)return i.type="function",i.value=this._subFormula(n,i.value),void(n="");if(")"===e){const e=new t.Parser(n,this.settings);r.push({type:"segment",value:e})}else if(a){if("]"===a)return r.push({type:"reference",value:n}),void(n="");r.push({type:"literal",value:n})}else if(s.operatorCharacters.includes(n))i&&"operator"===i.type&&s.operators.includes(i.value+n)?i.value+=n:r.push({type:"operator",value:n});else if(n.match(s.numberRx))r.push({type:"constant",value:parseFloat(n)});else if(void 0!==this.settings.constants[n])r.push({type:"constant",value:this.settings.constants[n]});else{if(!n.match(s.tokenRx))throw new Error("Formula contains invalid token: ".concat(n));r.push({type:"reference",value:n})}n=""}};for(const t of e)a?t===a?(i(),a=!1):n+=t:o?"("===t?(n+=t,++o):")"===t?(--o,o?n+=t:i(t)):n+=t:t in s.literals?a=s.literals[t]:"("===t?(i(),++o):s.operatorCharacters.includes(t)?(i(),n=t,i()):" "!==t?n+=t:i();i(),r=r.map((e,t)=>"operator"!==e.type||"-"!==e.value||t&&"operator"!==r[t-1].type?e:{type:"operator",value:"n"});let l=!1;for(const e of r){if("operator"===e.type){if(s.operatorsPrefix.includes(e.value))continue;if(!l)throw new Error("Formula contains an operator in invalid position");if(!s.operators.includes(e.value))throw new Error("Formula contains an unknown operator ".concat(e.value))}else if(l)throw new Error("Formula missing expected operator");l=!l}if(!l)throw new Error("Formula contains invalid trailing operator");1===r.length&&["reference","literal","constant"].includes(r[0].type)&&(this.single={type:"reference"===r[0].type?"reference":"value",value:r[0].value}),this._parts=r.map(e=>{if("operator"===e.type)return s.operatorsPrefix.includes(e.value)?e:e.value;if("reference"!==e.type)return e.value;if(this.settings.tokenRx&&!this.settings.tokenRx.test(e.value))throw new Error("Formula contains invalid reference ".concat(e.value));return this.settings.reference?this.settings.reference(e.value):s.reference(e.value)})}_subFormula(e,r){const n=this.settings.functions[r];if("function"!=typeof n)throw new Error("Formula contains unknown function ".concat(r));let o=[];if(e){let t="",n=0,a=!1;const i=()=>{if(!t)throw new Error("Formula contains function ".concat(r," with invalid arguments ").concat(e));o.push(t),t=""};for(let r=0;r<e.length;++r){const o=e[r];a?(t+=o,o===a&&(a=!1)):o in s.literals&&!n?(t+=o,a=s.literals[o]):","!==o||n?(t+=o,"("===o?++n:")"===o&&--n):i()}i()}return o=o.map(e=>new t.Parser(e,this.settings)),function(e){const t=[];for(const r of o)t.push(r.evaluate(e));return n.call(e,...t)}}evaluate(e){const t=this._parts.slice();for(let r=t.length-2;r>=0;--r){const n=t[r];if(n&&"operator"===n.type){const o=t[r+1];t.splice(r+1,1);const a=s.evaluate(o,e);t[r]=s.single(n.value,a)}}return s.operatorsOrder.forEach(r=>{for(let n=1;n<t.length-1;)if(r.includes(t[n])){const r=t[n],o=s.evaluate(t[n-1],e),a=s.evaluate(t[n+1],e);t.splice(n,2);const i=s.calculate(r,o,a);t[n-1]=0===i?0:i}else n+=2}),s.evaluate(t[0],e)}},t.Parser.prototype[s.symbol]=!0,s.reference=function(e){return function(t){return t&&void 0!==t[e]?t[e]:null}},s.evaluate=function(e,t){return null===e?null:"function"==typeof e?e(t):e[s.symbol]?e.evaluate(t):e},s.single=function(e,t){if("!"===e)return!t;const r=-t;return 0===r?0:r},s.calculate=function(e,t,r){if("??"===e)return s.exists(t)?t:r;if("string"==typeof t||"string"==typeof r){if("+"===e)return(t=s.exists(t)?t:"")+(r=s.exists(r)?r:"")}else switch(e){case"^":return Math.pow(t,r);case"*":return t*r;case"/":return t/r;case"%":return t%r;case"+":return t+r;case"-":return t-r}switch(e){case"<":return t<r;case"<=":return t<=r;case">":return t>r;case">=":return t>=r;case"==":return t===r;case"!=":return t!==r;case"&&":return t&&r;case"||":return t||r}return null},s.exists=function(e){return null!=e}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l=r(5),c={};e.exports=n.extend({type:"alternatives",flags:{match:{default:"any"}},terms:{matches:{init:[],register:l.toSibling}},args:(e,...t)=>1===t.length&&Array.isArray(t[0])?e.try(...t[0]):e.try(...t),validate(e,t){const{schema:r,error:s,state:n,prefs:o}=t;if(r._flags.match){let t,a=0;for(let s=0;s<r.$_terms.matches.length;++s){const i=r.$_terms.matches[s],l=n.nest(i.schema,"match.".concat(s));l.snapshot();const c=i.schema.$_validate(e,l,o);c.errors?l.restore():(++a,t=c.value)}return a?"one"===r._flags.match?1===a?{value:t}:{errors:s("alternatives.one")}:a===r.$_terms.matches.length?{value:e}:{errors:s("alternatives.all")}:{errors:s("alternatives.any")}}const a=[];for(let t=0;t<r.$_terms.matches.length;++t){const s=r.$_terms.matches[t];if(s.schema){const r=n.nest(s.schema,"match.".concat(t));r.snapshot();const i=s.schema.$_validate(e,r,o);if(!i.errors)return i;r.restore(),a.push({schema:s.schema,reports:i.errors});continue}const i=s.ref?s.ref.resolve(e,n,o):e,l=s.is?[s]:s.switch;for(let r=0;r<l.length;++r){const a=l[r],{is:c,then:u,otherwise:f}=a,m="match.".concat(t).concat(s.switch?"."+r:"");if(c.$_match(i,n.nest(c,"".concat(m,".is")),o)){if(u)return u.$_validate(e,n.nest(u,"".concat(m,".then")),o)}else if(f)return f.$_validate(e,n.nest(f,"".concat(m,".otherwise")),o)}}return c.errors(a,t)},rules:{conditional:{method(e,t){s(!this._flags._endedSwitch,"Unreachable condition"),s(!this._flags.match,"Cannot combine match mode",this._flags.match,"with conditional rule"),s(void 0===t.break,"Cannot use break option with alternatives conditional");const r=this.clone(),n=a.when(r,e,t),o=n.is?[n]:n.switch;for(const e of o)if(e.then&&e.otherwise){r.$_setFlag("_endedSwitch",!0,{clone:!1});break}return r.$_terms.matches.push(n),r.$_mutateRebuild()}},match:{method(e){if(s(["any","one","all"].includes(e),"Invalid alternatives match mode",e),"any"!==e)for(const t of this.$_terms.matches)s(t.schema,"Cannot combine match mode",e,"with conditional rules");return this.$_setFlag("match",e)}},try:{method(...e){s(e.length,"Missing alternative schemas"),o.verifyFlat(e,"try"),s(!this._flags._endedSwitch,"Unreachable condition");const t=this.clone();for(const r of e)t.$_terms.matches.push({schema:t.$_compile(r)});return t.$_mutateRebuild()}}},overrides:{label(e){return this.$_super.label(e).$_modify({each:(t,r)=>"is"!==r.path[0]?t.label(e):void 0,ref:!1})}},rebuild(e){e.$_modify({each:t=>{o.isSchema(t)&&"array"===t.type&&e.$_setFlag("_arrayItems",!0,{clone:!1})}})},manifest:{build(e,t){if(t.matches)for(const r of t.matches){const{schema:t,ref:s,is:n,not:o,then:a,otherwise:i}=r;e=t?e.try(t):s?e.conditional(s,{is:n,then:a,not:o,otherwise:i,switch:r.switch}):e.conditional(n,{then:a,otherwise:i})}return e}},messages:{"alternatives.all":"{{#label}} does not match all of the required types","alternatives.any":"{{#label}} does not match any of the allowed types","alternatives.match":"{{#label}} does not match any of the allowed types","alternatives.one":"{{#label}} matches more than one allowed type","alternatives.types":"{{#label}} must be one of {{#types}}"}}),c.errors=function(e,{error:t,state:r}){if(!e.length)return{errors:t("alternatives.any")};if(1===e.length)return{errors:e[0].reports};const s=new Set,n=[];for(const{reports:o,schema:a}of e){if(o.length>1)return c.unmatched(e,t);const l=o[0];if(l instanceof i.Report==!1)return c.unmatched(e,t);if(l.state.path.length!==r.path.length){n.push({type:a.type,report:l});continue}if("any.only"===l.code){for(const e of l.local.valids)s.add(e);continue}const[u,f]=l.code.split(".");"base"===f?s.add(u):n.push({type:a.type,report:l})}return n.length?1===n.length?{errors:n[0].report}:c.unmatched(e,t):{errors:t("alternatives.types",{types:[...s]})}},c.unmatched=function(e,t){const r=[];for(const t of e)r.push(...t.reports);return{errors:t("alternatives.match",i.details(r,{override:!1}))}}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(10),a=r(20),i=r(15),l=r(1),c=r(8),u=r(4),f=r(17),m=r(18),h=r(9),d=r(35),p=r(5),g=r(19),y=r(36),b=r(21),v={Base:class{constructor(e){this.type=e,this.$_root=null,this._definition={},this._ids=new d.Ids,this._preferences=null,this._refs=new p.Manager,this._cache=null,this._valids=null,this._invalids=null,this._flags={},this._rules=[],this._singleRules=new Map,this.$_terms={},this.$_temp={ruleset:null,whens:{}}}describe(){return s("function"==typeof m.describe,"Manifest functionality disabled"),m.describe(this)}allow(...e){return l.verifyFlat(e,"allow"),this._values(e,"_valids")}alter(e){s(e&&"object"==typeof e&&!Array.isArray(e),"Invalid targets argument"),s(!this._inRuleset(),"Cannot set alterations inside a ruleset");const t=this.clone();t.$_terms.alterations=t.$_terms.alterations||[];for(const r in e){const n=e[r];s("function"==typeof n,"Alteration adjuster for",r,"must be a function"),t.$_terms.alterations.push({target:r,adjuster:n})}return t.$_temp.ruleset=!1,t}cast(e){return s(!1===e||"string"==typeof e,"Invalid to value"),s(!1===e||this._definition.cast[e],"Type",this.type,"does not support casting to",e),this.$_setFlag("cast",!1===e?void 0:e)}default(e,t){return this._default("default",e,t)}description(e){return s(e&&"string"==typeof e,"Description must be a non-empty string"),this.$_setFlag("description",e)}empty(e){const t=this.clone();return void 0!==e&&(e=t.$_compile(e,{override:!1})),t.$_setFlag("empty",e,{clone:!1})}error(e){return s(e,"Missing error"),s(e instanceof Error||"function"==typeof e,"Must provide a valid Error object or a function"),this.$_setFlag("error",e)}example(e,t={}){return s(void 0!==e,"Missing example"),l.assertOptions(t,["override"]),this._inner("examples",e,{single:!0,override:t.override})}external(e,t){return"object"==typeof e&&(s(!t,"Cannot combine options with description"),t=e.description,e=e.method),s("function"==typeof e,"Method must be a function"),s(void 0===t||t&&"string"==typeof t,"Description must be a non-empty string"),this._inner("externals",{method:e,description:t},{single:!0})}failover(e,t){return this._default("failover",e,t)}forbidden(){return this.presence("forbidden")}id(e){return e?(s("string"==typeof e,"id must be a non-empty string"),s(/^[^\.]+$/.test(e),"id cannot contain period character"),this.$_setFlag("id",e)):this.$_setFlag("id",void 0)}invalid(...e){return this._values(e,"_invalids")}label(e){return s(e&&"string"==typeof e,"Label name must be a non-empty string"),this.$_setFlag("label",e)}meta(e){return s(void 0!==e,"Meta cannot be undefined"),this._inner("metas",e,{single:!0})}note(...e){s(e.length,"Missing notes");for(const t of e)s(t&&"string"==typeof t,"Notes must be non-empty strings");return this._inner("notes",e)}only(e=!0){return s("boolean"==typeof e,"Invalid mode:",e),this.$_setFlag("only",e)}optional(){return this.presence("optional")}prefs(e){s(e,"Missing preferences"),s(void 0===e.context,"Cannot override context"),s(void 0===e.externals,"Cannot override externals"),s(void 0===e.warnings,"Cannot override warnings"),s(void 0===e.debug,"Cannot override debug"),l.checkPreferences(e);const t=this.clone();return t._preferences=l.preferences(t._preferences,e),t}presence(e){return s(["optional","required","forbidden"].includes(e),"Unknown presence mode",e),this.$_setFlag("presence",e)}raw(e=!0){return this.$_setFlag("result",e?"raw":void 0)}result(e){return s(["raw","strip"].includes(e),"Unknown result mode",e),this.$_setFlag("result",e)}required(){return this.presence("required")}strict(e){const t=this.clone(),r=void 0!==e&&!e;return t._preferences=l.preferences(t._preferences,{convert:r}),t}strip(e=!0){return this.$_setFlag("result",e?"strip":void 0)}tag(...e){s(e.length,"Missing tags");for(const t of e)s(t&&"string"==typeof t,"Tags must be non-empty strings");return this._inner("tags",e)}unit(e){return s(e&&"string"==typeof e,"Unit name must be a non-empty string"),this.$_setFlag("unit",e)}valid(...e){l.verifyFlat(e,"valid");const t=this.allow(...e);return t.$_setFlag("only",!!t._valids,{clone:!1}),t}when(e,t){const r=this.clone();r.$_terms.whens||(r.$_terms.whens=[]);const n=c.when(r,e,t);if(!["any","link"].includes(r.type)){const e=n.is?[n]:n.switch;for(const t of e)s(!t.then||"any"===t.then.type||t.then.type===r.type,"Cannot combine",r.type,"with",t.then&&t.then.type),s(!t.otherwise||"any"===t.otherwise.type||t.otherwise.type===r.type,"Cannot combine",r.type,"with",t.otherwise&&t.otherwise.type)}return r.$_terms.whens.push(n),r.$_mutateRebuild()}cache(e){s(!this._inRuleset(),"Cannot set caching inside a ruleset"),s(!this._cache,"Cannot override schema cache");const t=this.clone();return t._cache=e||i.provider.provision(),t.$_temp.ruleset=!1,t}clone(){const e=Object.create(Object.getPrototypeOf(this));return this._assign(e)}concat(e){s(l.isSchema(e),"Invalid schema object"),s("any"===this.type||"any"===e.type||e.type===this.type,"Cannot merge type",this.type,"with another type:",e.type),s(!this._inRuleset(),"Cannot concatenate onto a schema with open ruleset"),s(!e._inRuleset(),"Cannot concatenate a schema with open ruleset");let t=this.clone();if("any"===this.type&&"any"!==e.type){const r=e.clone();for(const e of Object.keys(t))"type"!==e&&(r[e]=t[e]);t=r}t._ids.concat(e._ids),t._refs.register(e,p.toSibling),t._preferences=t._preferences?l.preferences(t._preferences,e._preferences):e._preferences,t._valids=b.merge(t._valids,e._valids,e._invalids),t._invalids=b.merge(t._invalids,e._invalids,e._valids);for(const r of e._singleRules.keys())t._singleRules.has(r)&&(t._rules=t._rules.filter(e=>e.keep||e.name!==r),t._singleRules.delete(r));for(const r of e._rules)e._definition.rules[r.method].multi||t._singleRules.set(r.name,r),t._rules.push(r);if(t._flags.empty&&e._flags.empty){t._flags.empty=t._flags.empty.concat(e._flags.empty);const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else if(e._flags.empty){t._flags.empty=e._flags.empty;const r=Object.assign({},e._flags);delete r.empty,a(t._flags,r)}else a(t._flags,e._flags);for(const r in e.$_terms){const s=e.$_terms[r];s?t.$_terms[r]?t.$_terms[r]=t.$_terms[r].concat(s):t.$_terms[r]=s.slice():t.$_terms[r]||(t.$_terms[r]=s)}return this.$_root._tracer&&this.$_root._tracer._combine(t,[this,e]),t.$_mutateRebuild()}extend(e){return s(!e.base,"Cannot extend type with another base"),f.type(this,e)}extract(e){return e=Array.isArray(e)?e:e.split("."),this._ids.reach(e)}fork(e,t){s(!this._inRuleset(),"Cannot fork inside a ruleset");let r=this;for(let s of[].concat(e))s=Array.isArray(s)?s:s.split("."),r=r._ids.fork(s,t,r);return r.$_temp.ruleset=!1,r}rule(e){const t=this._definition;l.assertOptions(e,Object.keys(t.modifiers)),s(!1!==this.$_temp.ruleset,"Cannot apply rules to empty ruleset or the last rule added does not support rule properties");const r=null===this.$_temp.ruleset?this._rules.length-1:this.$_temp.ruleset;s(r>=0&&r<this._rules.length,"Cannot apply rules to empty ruleset");const o=this.clone();for(let a=r;a<o._rules.length;++a){const r=o._rules[a],i=n(r);for(const n in e)t.modifiers[n](i,e[n]),s(i.name===r.name,"Cannot change rule name");o._rules[a]=i,o._singleRules.get(i.name)===r&&o._singleRules.set(i.name,i)}return o.$_temp.ruleset=!1,o.$_mutateRebuild()}get ruleset(){s(!this._inRuleset(),"Cannot start a new ruleset without closing the previous one");const e=this.clone();return e.$_temp.ruleset=e._rules.length,e}get $(){return this.ruleset}tailor(e){e=[].concat(e),s(!this._inRuleset(),"Cannot tailor inside a ruleset");let t=this;if(this.$_terms.alterations)for(const{target:r,adjuster:n}of this.$_terms.alterations)e.includes(r)&&(t=n(t),s(l.isSchema(t),"Alteration adjuster for",r,"failed to return a schema object"));return t=t.$_modify({each:t=>t.tailor(e),ref:!1}),t.$_temp.ruleset=!1,t.$_mutateRebuild()}tracer(){return g.location?g.location(this):this}validate(e,t){return y.entry(e,this,t)}validateAsync(e,t){return y.entryAsync(e,this,t)}$_addRule(e){"string"==typeof e&&(e={name:e}),s(e&&"object"==typeof e,"Invalid options"),s(e.name&&"string"==typeof e.name,"Invalid rule name");for(const t in e)s("_"!==t[0],"Cannot set private rule properties");const t=Object.assign({},e);t._resolve=[],t.method=t.method||t.name;const r=this._definition.rules[t.method],n=t.args;s(r,"Unknown rule",t.method);const o=this.clone();if(n){s(1===Object.keys(n).length||Object.keys(n).length===this._definition.rules[t.name].args.length,"Invalid rule definition for",this.type,t.name);for(const e in n){let a=n[e];if(void 0!==a){if(r.argsByName){const i=r.argsByName.get(e);if(i.ref&&l.isResolvable(a))t._resolve.push(e),o.$_mutateRegister(a);else if(i.normalize&&(a=i.normalize(a),n[e]=a),i.assert){const t=l.validateArg(a,e,i);s(!t,t,"or reference")}}n[e]=a}else delete n[e]}}return r.multi||(o._ruleRemove(t.name,{clone:!1}),o._singleRules.set(t.name,t)),!1===o.$_temp.ruleset&&(o.$_temp.ruleset=null),r.priority?o._rules.unshift(t):o._rules.push(t),o}$_compile(e,t){return c.schema(this.$_root,e,t)}$_createError(e,t,r,s,n,o={}){const a=!1!==o.flags?this._flags:{},i=o.messages?h.merge(this._definition.messages,o.messages):this._definition.messages;return new u.Report(e,t,r,a,i,s,n)}$_getFlag(e){return this._flags[e]}$_getRule(e){return this._singleRules.get(e)}$_mapLabels(e){return e=Array.isArray(e)?e:e.split("."),this._ids.labels(e)}$_match(e,t,r,s){(r=Object.assign({},r)).abortEarly=!0,r._externals=!1,t.snapshot();const n=!y.validate(e,this,t,r,s).errors;return t.restore(),n}$_modify(e){return l.assertOptions(e,["each","once","ref","schema"]),d.schema(this,e)||this}$_mutateRebuild(){s(!this._inRuleset(),"Cannot add this rule inside a ruleset"),this._refs.reset(),this._ids.reset();return this.$_modify({each:(e,{source:t,name:r,path:s,key:n})=>{const o=this._definition[t][r]&&this._definition[t][r].register;!1!==o&&this.$_mutateRegister(e,{family:o,key:n})}}),this._definition.rebuild&&this._definition.rebuild(this),this.$_temp.ruleset=!1,this}$_mutateRegister(e,{family:t,key:r}={}){this._refs.register(e,t),this._ids.register(e,{key:r})}$_property(e){return this._definition.properties[e]}$_reach(e){return this._ids.reach(e)}$_rootReferences(){return this._refs.roots()}$_setFlag(e,t,r={}){s("_"===e[0]||!this._inRuleset(),"Cannot set flag inside a ruleset");const n=this._definition.flags[e]||{};if(o(t,n.default)&&(t=void 0),o(t,this._flags[e]))return this;const a=!1!==r.clone?this.clone():this;return void 0!==t?(a._flags[e]=t,a.$_mutateRegister(t)):delete a._flags[e],"_"!==e[0]&&(a.$_temp.ruleset=!1),a}$_validate(e,t,r){return y.validate(e,this,t,r)}_assign(e){e.type=this.type,e.$_root=this.$_root,e.$_temp=Object.assign({},this.$_temp),e.$_temp.whens={},e._ids=this._ids.clone(),e._preferences=this._preferences,e._valids=this._valids&&this._valids.clone(),e._invalids=this._invalids&&this._invalids.clone(),e._rules=this._rules.slice(),e._singleRules=n(this._singleRules,{shallow:!0}),e._refs=this._refs.clone(),e._flags=Object.assign({},this._flags),e._cache=null,e.$_terms={};for(const t in this.$_terms)e.$_terms[t]=this.$_terms[t]?this.$_terms[t].slice():null;e.$_super={};for(const t in this.$_super)e.$_super[t]=this._super[t].bind(e);return e}_default(e,t,r={}){return l.assertOptions(r,"literal"),s(void 0!==t,"Missing",e,"value"),s("function"==typeof t||!r.literal,"Only function value supports literal option"),"function"==typeof t&&r.literal&&(t={[l.symbols.literal]:!0,literal:t}),this.$_setFlag(e,t)}_generate(e,t,r){if(!this.$_terms.whens)return{schema:this};const s=[],n=[];for(let o=0;o<this.$_terms.whens.length;++o){const a=this.$_terms.whens[o];if(a.concat){s.push(a.concat),n.push("".concat(o,".concat"));continue}const i=a.ref?a.ref.resolve(e,t,r):e,l=a.is?[a]:a.switch,c=n.length;for(let c=0;c<l.length;++c){const{is:u,then:f,otherwise:m}=l[c],h="".concat(o).concat(a.switch?"."+c:"");if(u.$_match(i,t.nest(u,"".concat(h,".is")),r)){if(f){const o=t.localize([...t.path,"".concat(h,".then")],t.ancestors,t.schemas),{schema:a,id:i}=f._generate(e,o,r);s.push(a),n.push("".concat(h,".then").concat(i?"(".concat(i,")"):""));break}}else if(m){const o=t.localize([...t.path,"".concat(h,".otherwise")],t.ancestors,t.schemas),{schema:a,id:i}=m._generate(e,o,r);s.push(a),n.push("".concat(h,".otherwise").concat(i?"(".concat(i,")"):""));break}}if(a.break&&n.length>c)break}const o=n.join(", ");if(t.mainstay.tracer.debug(t,"rule","when",o),!o)return{schema:this};if(!t.mainstay.tracer.active&&this.$_temp.whens[o])return{schema:this.$_temp.whens[o],id:o};let a=this;this._definition.generate&&(a=this._definition.generate(this,e,t,r));for(const e of s)a=a.concat(e);return this.$_root._tracer&&this.$_root._tracer._combine(a,[this,...s]),this.$_temp.whens[o]=a,{schema:a,id:o}}_inner(e,t,r={}){s(!this._inRuleset(),"Cannot set ".concat(e," inside a ruleset"));const n=this.clone();return n.$_terms[e]&&!r.override||(n.$_terms[e]=[]),r.single?n.$_terms[e].push(t):n.$_terms[e].push(...t),n.$_temp.ruleset=!1,n}_inRuleset(){return null!==this.$_temp.ruleset&&!1!==this.$_temp.ruleset}_ruleRemove(e,t={}){if(!this._singleRules.has(e))return this;const r=!1!==t.clone?this.clone():this;r._singleRules.delete(e);const s=[];for(let t=0;t<r._rules.length;++t){const n=r._rules[t];n.name!==e||n.keep?s.push(n):r._inRuleset()&&t<r.$_temp.ruleset&&--r.$_temp.ruleset}return r._rules=s,r}_values(e,t){l.verifyFlat(e,t.slice(1,-1));const r=this.clone(),n=e[0]===l.symbols.override;if(n&&(e=e.slice(1)),!r[t]&&e.length?r[t]=new b:n&&(r[t]=e.length?new b:null,r.$_mutateRebuild()),!r[t])return r;n&&r[t].override();for(const n of e){s(void 0!==n,"Cannot call allow/valid/invalid with undefined"),s(n!==l.symbols.override,"Override must be the first value");const e="_invalids"===t?"_valids":"_invalids";r[e]&&(r[e].remove(n),r[e].length||(s("_valids"===t||!r._flags.only,"Setting invalid value",n,"leaves schema rejecting all values due to previous valid rule"),r[e]=null)),r[t].add(n,r._refs)}return r}}};v.Base.prototype[l.symbols.any]={version:l.version,compile:c.compile,root:"$_root"},v.Base.prototype.isImmutable=!0,v.Base.prototype.deny=v.Base.prototype.invalid,v.Base.prototype.disallow=v.Base.prototype.invalid,v.Base.prototype.equal=v.Base.prototype.valid,v.Base.prototype.exist=v.Base.prototype.required,v.Base.prototype.not=v.Base.prototype.invalid,v.Base.prototype.options=v.Base.prototype.prefs,v.Base.prototype.preferences=v.Base.prototype.prefs,e.exports=new v.Base},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=r(0),a=r(1),i=r(5),l={};t.Ids=l.Ids=class{constructor(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}clone(){const e=new l.Ids;return e._byId=new Map(this._byId),e._byKey=new Map(this._byKey),e._schemaChain=this._schemaChain,e}concat(e){e._schemaChain&&(this._schemaChain=!0);for(const[t,r]of e._byId.entries())o(!this._byKey.has(t),"Schema id conflicts with existing key:",t),this._byId.set(t,r);for(const[t,r]of e._byKey.entries())o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,r)}fork(e,t,r){const s=this._collect(e);s.push({schema:r});const n=s.shift();let i={id:n.id,schema:t(n.schema)};o(a.isSchema(i.schema),"adjuster function failed to return a joi schema type");for(const e of s)i={id:e.id,schema:l.fork(e.schema,i.id,i.schema)};return i.schema}labels(e,t=[]){const r=e[0],s=this._get(r);if(!s)return[...t,...e].join(".");const n=e.slice(1);return t=[...t,s.schema._flags.label||r],n.length?s.schema._ids.labels(n,t):t.join(".")}reach(e,t=[]){const r=e[0],s=this._get(r);o(s,"Schema does not contain path",[...t,...e].join("."));const n=e.slice(1);return n.length?s.schema._ids.reach(n,[...t,r]):s.schema}register(e,{key:t}={}){if(!e||!a.isSchema(e))return;(e.$_property("schemaChain")||e._ids._schemaChain)&&(this._schemaChain=!0);const r=e._flags.id;if(r){const t=this._byId.get(r);o(!t||t.schema===e,"Cannot add different schemas with the same id:",r),o(!this._byKey.has(r),"Schema id conflicts with existing key:",r),this._byId.set(r,{schema:e,id:r})}t&&(o(!this._byKey.has(t),"Schema already contains key:",t),o(!this._byId.has(t),"Schema key conflicts with existing id:",t),this._byKey.set(t,{schema:e,id:t}))}reset(){this._byId=new Map,this._byKey=new Map,this._schemaChain=!1}_collect(e,t=[],r=[]){const s=e[0],n=this._get(s);o(n,"Schema does not contain path",[...t,...e].join(".")),r=[n,...r];const a=e.slice(1);return a.length?n.schema._ids._collect(a,[...t,s],r):r}_get(e){return this._byId.get(e)||this._byKey.get(e)}},l.fork=function(e,r,s){const n=t.schema(e,{each:(e,{key:t})=>{if(r===(e._flags.id||t))return s},ref:!1});return n?n.$_mutateRebuild():e},t.schema=function(e,t){let r;for(const s in e._flags){if("_"===s[0])continue;const n=l.scan(e._flags[s],{source:"flags",name:s},t);void 0!==n&&(r=r||e.clone(),r._flags[s]=n)}for(let s=0;s<e._rules.length;++s){const n=e._rules[s],o=l.scan(n.args,{source:"rules",name:n.name},t);if(void 0!==o){r=r||e.clone();const t=Object.assign({},n);t.args=o,r._rules[s]=t,r._singleRules.get(n.name)===n&&r._singleRules.set(n.name,t)}}for(const s in e.$_terms){if("_"===s[0])continue;const n=l.scan(e.$_terms[s],{source:"terms",name:s},t);void 0!==n&&(r=r||e.clone(),r.$_terms[s]=n)}return r},l.scan=function(e,t,r,o,c){const u=o||[];if(null===e||"object"!=typeof e)return;let f;if(Array.isArray(e)){for(let s=0;s<e.length;++s){const n="terms"===t.source&&"keys"===t.name&&e[s].key,o=l.scan(e[s],t,r,[s,...u],n);void 0!==o&&(f=f||e.slice(),f[s]=o)}return f}if(!1!==r.schema&&a.isSchema(e)||!1!==r.ref&&i.isRef(e)){const o=r.each(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{path:u,key:c}));if(o===e)return;return o}for(const s in e){if("_"===s[0])continue;const n=l.scan(e[s],t,r,[s,...u],c);void 0!==n&&(f=f||Object.assign({},e),f[s]=n)}return f}},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(37),a=r(6),i=r(1),l=r(4),c=r(38),u={result:Symbol("result")};t.entry=function(e,t,r){let n=i.defaults;r&&(s(void 0===r.warnings,"Cannot override warnings preference in synchronous validation"),n=i.preferences(i.defaults,r));const o=u.entry(e,t,n);s(!o.mainstay.externals.length,"Schema with external rules must use validateAsync()");const a={value:o.value};return o.error&&(a.error=o.error),o.mainstay.warnings.length&&(a.warning=l.details(o.mainstay.warnings)),o.mainstay.debug&&(a.debug=o.mainstay.debug),a},t.entryAsync=async function(e,t,r){let s=i.defaults;r&&(s=i.preferences(i.defaults,r));const n=u.entry(e,t,s),o=n.mainstay;if(n.error)throw o.debug&&(n.error.debug=o.debug),n.error;if(o.externals.length){let e=n.value;for(const{method:t,path:r,label:s}of o.externals){let n,o,i=e;r.length&&(n=r[r.length-1],o=a(e,r.slice(0,-1)),i=o[n]);try{const r=await t(i);if(void 0===r||r===i)continue;o?o[n]=r:e=r}catch(e){throw e.message+=" (".concat(s,")"),e}}n.value=e}if(!s.warnings&&!s.debug)return n.value;const c={value:n.value};return o.warnings.length&&(c.warning=l.details(o.warnings)),o.debug&&(c.debug=o.debug),c},u.entry=function(e,r,s){const{tracer:n,cleanup:o}=u.tracer(r,s),a={externals:[],warnings:[],tracer:n,debug:s.debug?[]:null,links:r._ids._schemaChain?new Map:null},i=r._ids._schemaChain?[{schema:r}]:null,f=new c([],[],{mainstay:a,schemas:i}),m=t.validate(e,r,f,s);o&&r.$_root.untrace();const h=l.process(m.errors,e,s);return{value:m.value,error:h,mainstay:a}},u.tracer=function(e,t){return e.$_root._tracer?{tracer:e.$_root._tracer._register(e)}:t.debug?(s(e.$_root.trace,"Debug mode not supported"),{tracer:e.$_root.trace()._register(e),cleanup:!0}):{tracer:u.ignore}},t.validate=function(e,t,r,s,n={}){if(t.$_terms.whens&&(t=t._generate(e,r,s).schema),t._preferences&&(s=u.prefs(t,s)),t._cache&&s.cache){const s=t._cache.get(e);if(r.mainstay.tracer.debug(r,"validate","cached",!!s),s)return s}const o=(n,o,a)=>t.$_createError(n,e,o,a||r,s),a={original:e,prefs:s,schema:t,state:r,error:o,warn:(e,t,s)=>r.mainstay.warnings.push(o(e,t,s)),message:(n,o)=>t.$_createError("custom",e,o,r,s,{messages:n})};r.mainstay.tracer.entry(t,r);const l=t._definition;if(l.prepare&&void 0!==e&&s.convert){const t=l.prepare(e,a);if(t){if(r.mainstay.tracer.value(r,"prepare",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}if(l.coerce&&void 0!==e&&s.convert&&(!l.coerce.from||l.coerce.from.includes(typeof e))){const t=l.coerce.method(e,a);if(t){if(r.mainstay.tracer.value(r,"coerced",e,t.value),t.errors)return u.finalize(t.value,[].concat(t.errors),a);e=t.value}}const c=t._flags.empty;c&&c.$_match(u.trim(e,t),r.nest(c),i.defaults)&&(r.mainstay.tracer.value(r,"empty",e,void 0),e=void 0);const f=n.presence||t._flags.presence||(t._flags._endedSwitch?"ignore":s.presence);if(void 0===e){if("forbidden"===f)return u.finalize(e,null,a);if("required"===f)return u.finalize(e,[t.$_createError("any.required",e,null,r,s)],a);if("optional"===f){if(t._flags.default!==i.symbols.deepDefault)return u.finalize(e,null,a);r.mainstay.tracer.value(r,"default",e,{}),e={}}}else if("forbidden"===f)return u.finalize(e,[t.$_createError("any.unknown",e,null,r,s)],a);const m=[];if(t._valids){const n=t._valids.get(e,r,s,t._flags.insensitive);if(n)return s.convert&&(r.mainstay.tracer.value(r,"valids",e,n.value),e=n.value),r.mainstay.tracer.filter(t,r,"valid",n),u.finalize(e,null,a);if(t._flags.only){const n=t.$_createError("any.only",e,{valids:t._valids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[n],a);m.push(n)}}if(t._invalids){const n=t._invalids.get(e,r,s,t._flags.insensitive);if(n){r.mainstay.tracer.filter(t,r,"invalid",n);const o=t.$_createError("any.invalid",e,{invalids:t._invalids.values({display:!0})},r,s);if(s.abortEarly)return u.finalize(e,[o],a);m.push(o)}}if(l.validate){const t=l.validate(e,a);if(t&&(r.mainstay.tracer.value(r,"base",e,t.value),e=t.value,t.errors)){if(!Array.isArray(t.errors))return m.push(t.errors),u.finalize(e,m,a);if(t.errors.length)return m.push(...t.errors),u.finalize(e,m,a)}}return t._rules.length?u.rules(e,m,a):u.finalize(e,m,a)},u.rules=function(e,t,r){const{schema:s,state:n,prefs:o}=r;for(const a of s._rules){const l=s._definition.rules[a.method];if(l.convert&&o.convert){n.mainstay.tracer.log(s,n,"rule",a.name,"full");continue}let c,f=a.args;if(a._resolve.length){f=Object.assign({},f);for(const t of a._resolve){const r=l.argsByName.get(t),a=f[t].resolve(e,n,o),u=r.normalize?r.normalize(a):a,m=i.validateArg(u,null,r);if(m){c=s.$_createError("any.ref",a,{arg:t,ref:f[t],reason:m},n,o);break}f[t]=u}}c=c||l.validate(e,r,f,a);const m=u.rule(c,a);if(m.errors){if(n.mainstay.tracer.log(s,n,"rule",a.name,"error"),a.warn){n.mainstay.warnings.push(...m.errors);continue}if(o.abortEarly)return u.finalize(e,m.errors,r);t.push(...m.errors)}else n.mainstay.tracer.log(s,n,"rule",a.name,"pass"),n.mainstay.tracer.value(n,"rule",e,m.value,a.name),e=m.value}return u.finalize(e,t,r)},u.rule=function(e,t){return e instanceof l.Report?(u.error(e,t),{errors:[e],value:null}):Array.isArray(e)&&(e[0]instanceof l.Report||e[0]instanceof Error)?(e.forEach(e=>u.error(e,t)),{errors:e,value:null}):{errors:null,value:e}},u.error=function(e,t){return t.message&&e._setTemplate(t.message),e},u.finalize=function(e,t,r){t=t||[];const{schema:n,state:o,prefs:a}=r;if(t.length){const s=u.default("failover",void 0,t,r);void 0!==s&&(o.mainstay.tracer.value(o,"failover",e,s),e=s,t=[])}if(t.length&&n._flags.error)if("function"==typeof n._flags.error){t=n._flags.error(t),Array.isArray(t)||(t=[t]);for(const e of t)s(e instanceof Error||e instanceof l.Report,"error() must return an Error object")}else t=[n._flags.error];if(void 0===e){const s=u.default("default",e,t,r);o.mainstay.tracer.value(o,"default",e,s),e=s}if(n._flags.cast&&void 0!==e){const t=n._definition.cast[n._flags.cast];if(t.from(e)){const s=t.to(e,r);o.mainstay.tracer.value(o,"cast",e,s,n._flags.cast),e=s}}if(n.$_terms.externals&&a.externals&&!1!==a._externals)for(const{method:e}of n.$_terms.externals)o.mainstay.externals.push({method:e,path:o.path,label:l.label(n._flags,o,a)});const i={value:e,errors:t.length?t:null};return n._flags.result&&(i.value="strip"===n._flags.result?void 0:r.original,o.mainstay.tracer.value(o,n._flags.result,e,i.value),o.shadow(e,n._flags.result)),n._cache&&!1!==a.cache&&!n._refs.length&&n._cache.set(r.original,i),i},u.prefs=function(e,t){const r=t===i.defaults;return r&&e._preferences[i.symbols.prefs]?e._preferences[i.symbols.prefs]:(t=i.preferences(t,e._preferences),r&&(e._preferences[i.symbols.prefs]=t),t)},u.default=function(e,t,r,s){const{schema:o,state:a,prefs:l}=s,c=o._flags[e];if(l.noDefaults||void 0===c)return t;if(a.mainstay.tracer.log(o,a,"rule",e,"full"),!c)return c;if("function"==typeof c){const t=c.length?[n(a.ancestors[0]),s]:[];try{return c(...t)}catch(t){return void r.push(o.$_createError("any.".concat(e),null,{error:t},a,l))}}return"object"!=typeof c?c:c[i.symbols.literal]?c.literal:i.isResolvable(c)?c.resolve(t,a,l):n(c)},u.trim=function(e,t){if("string"!=typeof e)return e;const r=t.$_getRule("trim");return r&&r.args.enabled?e.trim():e},u.ignore={active:!1,debug:o,entry:o,filter:o,log:o,resolve:o,value:o}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";const s=r(2),n=r(6),o=r(1),a={value:Symbol("value")};e.exports=a.State=class{constructor(e,t,r){this.path=e,this.ancestors=t,this.mainstay=r.mainstay,this.schemas=r.schemas,this.debug=null}localize(e,t=null,r=null){const s=new a.State(e,t,this);return r&&s.schemas&&(s.schemas=[a.schemas(r),...s.schemas]),s}nest(e,t){const r=new a.State(this.path,this.ancestors,this);return r.schemas=r.schemas&&[a.schemas(e),...r.schemas],r.debug=t,r}shadow(e,t){this.mainstay.shadow=this.mainstay.shadow||new a.Shadow,this.mainstay.shadow.set(this.path,e,t)}snapshot(){this.mainstay.shadow&&(this._snapshot=s(this.mainstay.shadow.node(this.path)))}restore(){this.mainstay.shadow&&(this.mainstay.shadow.override(this.path,this._snapshot),this._snapshot=void 0)}},a.schemas=function(e){return o.isSchema(e)?{schema:e}:e},a.Shadow=class{constructor(){this._values=null}set(e,t,r){if(!e.length)return;if("strip"===r&&"number"==typeof e[e.length-1])return;this._values=this._values||new Map;let s=this._values;for(let t=0;t<e.length;++t){const r=e[t];let n=s.get(r);n||(n=new Map,s.set(r,n)),s=n}s[a.value]=t}get(e){const t=this.node(e);if(t)return t[a.value]}node(e){if(this._values)return n(this._values,e,{iterables:!0})}override(e,t){if(!this._values)return;const r=e.slice(0,-1),s=e[e.length-1],o=n(this._values,r,{iterables:!0});t?o.set(s,t):o&&o.delete(s)}}},function(e,t,r){"use strict";const s=r(0),n=r(10),o=r(6),a=r(3),i=r(1),l=r(8),c={};e.exports=a.extend({type:"array",flags:{single:{default:!1},sparse:{default:!1}},terms:{items:{init:[],manifest:"schema"},ordered:{init:[],manifest:"schema"},_exclusions:{init:[]},_inclusions:{init:[]},_requireds:{init:[]}},coerce:{from:"object",method(e,{schema:t,state:r,prefs:s}){if(!Array.isArray(e))return;const n=t.$_getRule("sort");return n?c.sort(t,e,n.args.options,r,s):void 0}},validate(e,{schema:t,error:r}){if(!Array.isArray(e)){if(t._flags.single){const t=[e];return t[i.symbols.arraySingle]=!0,{value:t}}return{errors:r("array.base")}}if(t.$_getRule("items")||t.$_terms.externals)return{value:e.slice()}},rules:{has:{method(e){e=this.$_compile(e,{appendPath:!0});const t=this.$_addRule({name:"has",args:{schema:e}});return t.$_mutateRegister(e),t},validate(e,{state:t,prefs:r,error:s},{schema:n}){const o=[e,...t.ancestors];for(let s=0;s<e.length;++s){const a=t.localize([...t.path,s],o,n);if(n.$_match(e[s],a,r))return e}const a=n._flags.label;return a?s("array.hasKnown",{patternLabel:a}):s("array.hasUnknown",null)},multi:!0},items:{method(...e){i.verifyFlat(e,"items");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});t.$_terms.items.push(s)}return t.$_mutateRebuild()},validate(e,{schema:t,error:r,state:s,prefs:n}){const o=t.$_terms._requireds.slice(),a=t.$_terms.ordered.slice(),l=[...t.$_terms._inclusions,...o],u=!e[i.symbols.arraySingle];delete e[i.symbols.arraySingle];const f=[];let m=e.length;for(let i=0;i<m;++i){const h=e[i];let d=!1,p=!1;const g=u?i:new Number(i),y=[...s.path,g];if(!t._flags.sparse&&void 0===h){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;a.shift();continue}const b=[e,...s.ancestors];for(const e of t.$_terms._exclusions)if(e.$_match(h,s.localize(y,b,e),n,{presence:"ignore"})){if(f.push(r("array.excludes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f;d=!0,a.shift();break}if(d)continue;if(t.$_terms.ordered.length){if(a.length){const o=a.shift(),l=o.$_validate(h,s.localize(y,b,o),n);if(l.errors){if(f.push(...l.errors),n.abortEarly)return f}else if("strip"===o._flags.result)c.fastSplice(e,i),--i,--m;else{if(!t._flags.sparse&&void 0===l.value){if(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly)return f;continue}e[i]=l.value}continue}if(!t.$_terms.items.length){if(f.push(r("array.orderedLength",{pos:i,limit:t.$_terms.ordered.length})),n.abortEarly)return f;break}}const v=[];let _=o.length;for(let a=0;a<_;++a){const l=s.localize(y,b,o[a]);l.snapshot();const u=o[a].$_validate(h,l,n);if(v[a]=u,!u.errors){if(e[i]=u.value,p=!0,c.fastSplice(o,a),--a,--_,!t._flags.sparse&&void 0===u.value&&(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),n.abortEarly))return f;break}l.restore()}if(p)continue;const w=n.stripUnknown&&!!n.stripUnknown.arrays||!1;_=l.length;for(const a of l){let l;const u=o.indexOf(a);if(-1!==u)l=v[u];else{const o=s.localize(y,b,a);if(o.snapshot(),l=a.$_validate(h,o,n),!l.errors){"strip"===a._flags.result?(c.fastSplice(e,i),--i,--m):t._flags.sparse||void 0!==l.value?e[i]=l.value:(f.push(r("array.sparse",{key:g,path:y,pos:i,value:void 0},s.localize(y))),d=!0),p=!0;break}o.restore()}if(1===_){if(w){c.fastSplice(e,i),--i,--m,p=!0;break}if(f.push(...l.errors),n.abortEarly)return f;d=!0;break}}if(!d&&(t.$_terms._inclusions.length&&!p)){if(w){c.fastSplice(e,i),--i,--m;continue}if(f.push(r("array.includes",{pos:i,value:h},s.localize(y))),n.abortEarly)return f}}return o.length&&c.fillMissedErrors(t,f,o,e,s,n),a.length&&c.fillOrderedErrors(t,f,a,e,s,n),f.length?f:e},priority:!0,manifest:!1},length:{method(e){return this.$_addRule({name:"length",args:{limit:e},operator:"="})},validate:(e,t,{limit:r},{name:s,operator:n,args:o})=>i.compare(e.length,r,n)?e:t.error("array."+s,{limit:o.limit,value:e}),args:[{name:"limit",ref:!0,assert:i.limit,message:"must be a positive integer"}]},max:{method(e){return this.$_addRule({name:"max",method:"length",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"length",args:{limit:e},operator:">="})}},ordered:{method(...e){i.verifyFlat(e,"ordered");const t=this.$_addRule("items");for(let r=0;r<e.length;++r){const s=i.tryWithPath(()=>this.$_compile(e[r]),r,{append:!0});c.validateSingle(s,t),t.$_mutateRegister(s),t.$_terms.ordered.push(s)}return t.$_mutateRebuild()}},single:{method(e){const t=void 0===e||!!e;return s(!t||!this._flags._arrayItems,"Cannot specify single rule when array has array items"),this.$_setFlag("single",t)}},sort:{method(e={}){i.assertOptions(e,["by","order"]);const t={order:e.order||"ascending"};return e.by&&(t.by=l.ref(e.by,{ancestor:0}),s(!t.by.ancestor,"Cannot sort by ancestor")),this.$_addRule({name:"sort",args:{options:t}})},validate(e,{error:t,state:r,prefs:s,schema:n},{options:o}){const{value:a,errors:i}=c.sort(n,e,o,r,s);if(i)return i;for(let r=0;r<e.length;++r)if(e[r]!==a[r])return t("array.sort",{order:o.order,by:o.by?o.by.key:"value"});return e},convert:!0},sparse:{method(e){const t=void 0===e||!!e;return this._flags.sparse===t?this:(t?this.clone():this.$_addRule("items")).$_setFlag("sparse",t,{clone:!1})}},unique:{method(e,t={}){s(!e||"function"==typeof e||"string"==typeof e,"comparator must be a function or a string"),i.assertOptions(t,["ignoreUndefined","separator"]);const r={name:"unique",args:{options:t,comparator:e}};if(e)if("string"==typeof e){const s=i.default(t.separator,".");r.path=s?e.split(s):[e]}else r.comparator=e;return this.$_addRule(r)},validate(e,{state:t,error:r,schema:a},{comparator:i,options:l},{comparator:c,path:u}){const f={string:Object.create(null),number:Object.create(null),undefined:Object.create(null),boolean:Object.create(null),object:new Map,function:new Map,custom:new Map},m=c||n,h=l.ignoreUndefined;for(let n=0;n<e.length;++n){const a=u?o(e[n],u):e[n],l=c?f.custom:f[typeof a];if(s(l,"Failed to find unique map container for type",typeof a),l instanceof Map){const s=l.entries();let o;for(;!(o=s.next()).done;)if(m(o.value[0],a)){const s=t.localize([...t.path,n],[e,...t.ancestors]),a={pos:n,value:e[n],dupePos:o.value[1],dupeValue:e[o.value[1]]};return u&&(a.path=i),r("array.unique",a,s)}l.set(a,n)}else{if((!h||void 0!==a)&&void 0!==l[a]){const s={pos:n,value:e[n],dupePos:l[a],dupeValue:e[l[a]]};return u&&(s.path=i),r("array.unique",s,t.localize([...t.path,n],[e,...t.ancestors]))}l[a]=n}}return e},args:["comparator","options"],multi:!0}},cast:{set:{from:Array.isArray,to:(e,t)=>new Set(e)}},rebuild(e){e.$_terms._inclusions=[],e.$_terms._exclusions=[],e.$_terms._requireds=[];for(const t of e.$_terms.items)c.validateSingle(t,e),"required"===t._flags.presence?e.$_terms._requireds.push(t):"forbidden"===t._flags.presence?e.$_terms._exclusions.push(t):e.$_terms._inclusions.push(t);for(const t of e.$_terms.ordered)c.validateSingle(t,e)},manifest:{build:(e,t)=>(t.items&&(e=e.items(...t.items)),t.ordered&&(e=e.ordered(...t.ordered)),e)},messages:{"array.base":"{{#label}} must be an array","array.excludes":"{{#label}} contains an excluded value","array.hasKnown":'{{#label}} does not contain at least one required match for type "{#patternLabel}"',"array.hasUnknown":"{{#label}} does not contain at least one required match","array.includes":"{{#label}} does not match any of the allowed types","array.includesRequiredBoth":"{{#label}} does not contain {{#knownMisses}} and {{#unknownMisses}} other required value(s)","array.includesRequiredKnowns":"{{#label}} does not contain {{#knownMisses}}","array.includesRequiredUnknowns":"{{#label}} does not contain {{#unknownMisses}} required value(s)","array.length":"{{#label}} must contain {{#limit}} items","array.max":"{{#label}} must contain less than or equal to {{#limit}} items","array.min":"{{#label}} must contain at least {{#limit}} items","array.orderedLength":"{{#label}} must contain at most {{#limit}} items","array.sort":"{{#label}} must be sorted in {#order} order by {{#by}}","array.sort.mismatching":"{{#label}} cannot be sorted due to mismatching types","array.sort.unsupported":"{{#label}} cannot be sorted due to unsupported type {#type}","array.sparse":"{{#label}} must not be a sparse array item","array.unique":"{{#label}} contains a duplicate value"}}),c.fillMissedErrors=function(e,t,r,s,n,o){const a=[];let i=0;for(const e of r){const t=e._flags.label;t?a.push(t):++i}a.length?i?t.push(e.$_createError("array.includesRequiredBoth",s,{knownMisses:a,unknownMisses:i},n,o)):t.push(e.$_createError("array.includesRequiredKnowns",s,{knownMisses:a},n,o)):t.push(e.$_createError("array.includesRequiredUnknowns",s,{unknownMisses:i},n,o))},c.fillOrderedErrors=function(e,t,r,s,n,o){const a=[];for(const e of r)"required"===e._flags.presence&&a.push(e);a.length&&c.fillMissedErrors(e,t,a,s,n,o)},c.fastSplice=function(e,t){let r=t;for(;r<e.length;)e[r++]=e[r];--e.length},c.validateSingle=function(e,t){("array"===e.type||e._flags._arrayItems)&&(s(!t._flags.single,"Cannot specify array item with single rule enabled"),t.$_setFlag("_arrayItems",!0,{clone:!1}))},c.sort=function(e,t,r,s,n){const o="ascending"===r.order?1:-1,a=-1*o,i=o,l=(l,u)=>{let f=c.compare(l,u,a,i);if(null!==f)return f;if(r.by&&(l=r.by.resolve(l,s,n),u=r.by.resolve(u,s,n)),f=c.compare(l,u,a,i),null!==f)return f;const m=typeof l;if(m!==typeof u)throw e.$_createError("array.sort.mismatching",t,null,s,n);if("number"!==m&&"string"!==m)throw e.$_createError("array.sort.unsupported",t,{type:m},s,n);return"number"===m?(l-u)*o:l<u?a:i};try{return{value:t.slice().sort(l)}}catch(e){return{errors:e}}},c.compare=function(e,t,r,s){return e===t?0:void 0===e?1:void 0===t?-1:null===e?s:null===t?r:null}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(21),i={isBool:function(e){return"boolean"==typeof e}};e.exports=n.extend({type:"boolean",flags:{sensitive:{default:!1}},terms:{falsy:{init:null,manifest:"values"},truthy:{init:null,manifest:"values"}},coerce(e,{schema:t}){if("boolean"!=typeof e){if("string"==typeof e){const r=t._flags.sensitive?e:e.toLowerCase();e="true"===r||"false"!==r&&e}return"boolean"!=typeof e&&(e=t.$_terms.truthy&&t.$_terms.truthy.has(e,null,null,!t._flags.sensitive)||(!t.$_terms.falsy||!t.$_terms.falsy.has(e,null,null,!t._flags.sensitive))&&e),{value:e}}},validate(e,{error:t}){if("boolean"!=typeof e)return{value:e,errors:t("boolean.base")}},rules:{truthy:{method(...e){o.verifyFlat(e,"truthy");const t=this.clone();t.$_terms.truthy=t.$_terms.truthy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call truthy with undefined"),t.$_terms.truthy.add(n)}return t}},falsy:{method(...e){o.verifyFlat(e,"falsy");const t=this.clone();t.$_terms.falsy=t.$_terms.falsy||new a;for(let r=0;r<e.length;++r){const n=e[r];s(void 0!==n,"Cannot call falsy with undefined"),t.$_terms.falsy.add(n)}return t}},sensitive:{method(e=!0){return this.$_setFlag("sensitive",e)}}},cast:{number:{from:i.isBool,to:(e,t)=>e?1:0},string:{from:i.isBool,to:(e,t)=>e?"true":"false"}},manifest:{build:(e,t)=>(t.truthy&&(e=e.truthy(...t.truthy)),t.falsy&&(e=e.falsy(...t.falsy)),e)},messages:{"boolean.base":"{{#label}} must be a boolean"}})},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(7),i={isDate:function(e){return e instanceof Date}};e.exports=n.extend({type:"date",coerce:{from:["number","string"],method:(e,{schema:t})=>({value:i.parse(e,t._flags.format)||e})},validate(e,{schema:t,error:r,prefs:s}){if(e instanceof Date&&!isNaN(e.getTime()))return;const n=t._flags.format;return s.convert&&n&&"string"==typeof e?{value:e,errors:r("date.format",{format:n})}:{value:e,errors:r("date.base")}},rules:{compare:{method:!1,validate(e,t,{date:r},{name:s,operator:n,args:a}){const i="now"===r?Date.now():r.getTime();return o.compare(e.getTime(),i,n)?e:t.error("date."+s,{limit:a.date,value:e})},args:[{name:"date",ref:!0,normalize:e=>"now"===e?e:i.parse(e),assert:e=>null!==e,message:"must have a valid date format"}]},format:{method(e){return s(["iso","javascript","unix"].includes(e),"Unknown date format",e),this.$_setFlag("format",e)}},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{date:e},operator:">"})}},iso:{method(){return this.format("iso")}},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{date:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{date:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{date:e},operator:">="})}},timestamp:{method(e="javascript"){return s(["javascript","unix"].includes(e),'"type" must be one of "javascript, unix"'),this.format(e)}}},cast:{number:{from:i.isDate,to:(e,t)=>e.getTime()},string:{from:i.isDate,to:(e,{prefs:t})=>a.date(e,t)}},messages:{"date.base":"{{#label}} must be a valid date","date.format":'{{#label}} must be in {msg("date.format." + #format) || #format} format',"date.greater":'{{#label}} must be greater than "{{#limit}}"',"date.less":'{{#label}} must be less than "{{#limit}}"',"date.max":'{{#label}} must be less than or equal to "{{#limit}}"',"date.min":'{{#label}} must be larger than or equal to "{{#limit}}"',"date.format.iso":"ISO 8601 date","date.format.javascript":"timestamp or number of milliseconds","date.format.unix":"timestamp or number of seconds"}}),i.parse=function(e,t){if(e instanceof Date)return e;if("string"!=typeof e&&(isNaN(e)||!isFinite(e)))return null;if(/^\s*$/.test(e))return null;if("iso"===t)return o.isIsoDate(e)?i.date(e.toString()):null;const r=e;if("string"==typeof e&&/^[+-]?\d+(\.\d+)?$/.test(e)&&(e=parseFloat(e)),t){if("javascript"===t)return i.date(1*e);if("unix"===t)return i.date(1e3*e);if("string"==typeof r)return null}return i.date(e)},i.date=function(e){const t=new Date(e);return isNaN(t.getTime())?null:t}},function(e,t,r){"use strict";const s=r(0),n=r(22);e.exports=n.extend({type:"function",properties:{typeof:"function"},rules:{arity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"arity",args:{n:e}})},validate:(e,t,{n:r})=>e.length===r?e:t.error("function.arity",{n:r})},class:{method(){return this.$_addRule("class")},validate:(e,t)=>/^\s*class\s/.test(e.toString())?e:t.error("function.class",{value:e})},minArity:{method(e){return s(Number.isSafeInteger(e)&&e>0,"n must be a strict positive integer"),this.$_addRule({name:"minArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length>=r?e:t.error("function.minArity",{n:r})},maxArity:{method(e){return s(Number.isSafeInteger(e)&&e>=0,"n must be a positive integer"),this.$_addRule({name:"maxArity",args:{n:e}})},validate:(e,t,{n:r})=>e.length<=r?e:t.error("function.maxArity",{n:r})}},messages:{"function.arity":"{{#label}} must have an arity of {{#n}}","function.class":"{{#label}} must be a class","function.maxArity":"{{#label}} must have an arity lesser or equal to {{#n}}","function.minArity":"{{#label}} must have an arity greater or equal to {{#n}}"}})},function(e,t,r){"use strict";const s=r(0),n=r(2),o=r(20),a=r(6),i={};e.exports=function(e,t,r={}){if(s(e&&"object"==typeof e,"Invalid defaults value: must be an object"),s(!t||!0===t||"object"==typeof t,"Invalid source value: must be true, falsy or an object"),s("object"==typeof r,"Invalid options: must be an object"),!t)return null;if(r.shallow)return i.applyToDefaultsWithShallow(e,t,r);const a=n(e);if(!0===t)return a;const l=void 0!==r.nullOverride&&r.nullOverride;return o(a,t,{nullOverride:l,mergeArrays:!1})},i.applyToDefaultsWithShallow=function(e,t,r){const l=r.shallow;s(Array.isArray(l),"Invalid keys");const c=new Map,u=!0===t?null:new Set;for(let r of l){r=Array.isArray(r)?r:r.split(".");const s=a(e,r);s&&"object"==typeof s?c.set(s,u&&a(t,r)||s):u&&u.add(r)}const f=n(e,{},c);if(!u)return f;for(const e of u)i.reachCopy(f,t,e);return o(f,t,{mergeArrays:!1,nullOverride:!1})},i.reachCopy=function(e,t,r){for(const e of r){if(!(e in t))return;t=t[e]}const s=t;let n=e;for(let e=0;e<r.length-1;++e){const t=r[e];"object"!=typeof n[t]&&(n[t]={}),n=n[t]}n[r[r.length-1]]=s}},function(e,t,r){"use strict";const s=r(0),n={};t.Sorter=class{constructor(){this._items=[],this.nodes=[]}add(e,t){const r=[].concat((t=t||{}).before||[]),n=[].concat(t.after||[]),o=t.group||"?",a=t.sort||0;s(!r.includes(o),"Item cannot come before itself: ".concat(o)),s(!r.includes("?"),"Item cannot come before unassociated items"),s(!n.includes(o),"Item cannot come after itself: ".concat(o)),s(!n.includes("?"),"Item cannot come after unassociated items"),Array.isArray(e)||(e=[e]);for(const t of e){const e={seq:this._items.length,sort:a,before:r,after:n,group:o,node:t};this._items.push(e)}const i=this._sort();return s(i,"item","?"!==o?"added into group ".concat(o):"","created a dependencies error"),this.nodes}merge(e){Array.isArray(e)||(e=[e]);for(const t of e)if(t)for(const e of t._items)this._items.push(Object.assign({},e));this._items.sort(n.mergeSort);for(let e=0;e<this._items.length;++e)this._items[e].seq=e;const t=this._sort();return s(t,"merge created a dependencies error"),this.nodes}_sort(){const e={},t=Object.create(null),r=Object.create(null);for(const s of this._items){const n=s.seq,o=s.group;r[o]=r[o]||[],r[o].push(n),e[n]=s.before;for(const e of s.after)t[e]=t[e]||[],t[e].push(n)}for(const t in e){const s=[];for(const n in e[t]){const o=e[t][n];r[o]=r[o]||[],s.push(...r[o])}e[t]=s}for(const s in t)if(r[s])for(const n of r[s])e[n].push(...t[s]);const s={};for(const t in e){const r=e[t];for(const e of r)s[e]=s[e]||[],s[e].push(t)}const n={},o=[];for(let e=0;e<this._items.length;++e){let t=e;if(s[e]){t=null;for(let e=0;e<this._items.length;++e){if(!0===n[e])continue;s[e]||(s[e]=[]);const r=s[e].length;let o=0;for(let t=0;t<r;++t)n[s[e][t]]&&++o;if(o===r){t=e;break}}}null!==t&&(n[t]=!0,o.push(t))}if(o.length!==this._items.length)return!1;const a={};for(const e of this._items)a[e.seq]=e;this._items=[],this.nodes=[];for(const e of o){const t=a[e];this.nodes.push(t.node),this._items.push(t)}return!0}},n.mergeSort=(e,t)=>e.sort===t.sort?0:e.sort<t.sort?-1:1},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a=r(8),i=r(4),l={};e.exports=n.extend({type:"link",properties:{schemaChain:!0},terms:{link:{init:null,manifest:"single",register:!1}},args:(e,t)=>e.ref(t),validate(e,{schema:t,state:r,prefs:n}){s(t.$_terms.link,"Uninitialized link schema");const o=l.generate(t,e,r,n),a=t.$_terms.link[0].ref;return o.$_validate(e,r.nest(o,"link:".concat(a.display,":").concat(o.type)),n)},generate:(e,t,r,s)=>l.generate(e,t,r,s),rules:{ref:{method(e){s(!this.$_terms.link,"Cannot reinitialize schema"),e=a.ref(e),s("value"===e.type||"local"===e.type,"Invalid reference type:",e.type),s("local"===e.type||"root"===e.ancestor||e.ancestor>0,"Link cannot reference itself");const t=this.clone();return t.$_terms.link=[{ref:e}],t}},relative:{method(e=!0){return this.$_setFlag("relative",e)}}},overrides:{concat(e){s(this.$_terms.link,"Uninitialized link schema"),s(o.isSchema(e),"Invalid schema object"),s("link"!==e.type,"Cannot merge type link with another link");const t=this.clone();return t.$_terms.whens||(t.$_terms.whens=[]),t.$_terms.whens.push({concat:e}),t.$_mutateRebuild()}},manifest:{build:(e,t)=>(s(t.link,"Invalid link description missing link"),e.ref(t.link))}}),l.generate=function(e,t,r,s){let n=r.mainstay.links.get(e);if(n)return n._generate(t,r,s).schema;const o=e.$_terms.link[0].ref,{perspective:a,path:i}=l.perspective(o,r);l.assert(a,"which is outside of schema boundaries",o,e,r,s);try{n=i.length?a.$_reach(i):a}catch(t){l.assert(!1,"to non-existing schema",o,e,r,s)}return l.assert("link"!==n.type,"which is another link",o,e,r,s),e._flags.relative||r.mainstay.links.set(e,n),n._generate(t,r,s).schema},l.perspective=function(e,t){if("local"===e.type){for(const{schema:r,key:s}of t.schemas){if((r._flags.id||s)===e.path[0])return{perspective:r,path:e.path.slice(1)};if(r.$_terms.shared)for(const t of r.$_terms.shared)if(t._flags.id===e.path[0])return{perspective:t,path:e.path.slice(1)}}return{perspective:null,path:null}}return"root"===e.ancestor?{perspective:t.schemas[t.schemas.length-1].schema,path:e.path}:{perspective:t.schemas[e.ancestor]&&t.schemas[e.ancestor].schema,path:e.path}},l.assert=function(e,t,r,n,o,a){e||s(!1,'"'.concat(i.label(n._flags,o,a),'" contains link reference "').concat(r.display,'" ').concat(t))}},function(e,t,r){"use strict";const s=r(0),n=r(3),o=r(1),a={numberRx:/^\s*[+-]?(?:(?:\d+(?:\.\d*)?)|(?:\.\d+))(?:e([+-]?\d+))?\s*$/i,precisionRx:/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/};e.exports=n.extend({type:"number",flags:{unsafe:{default:!1}},coerce:{from:"string",method(e,{schema:t,error:r}){const s=e.match(a.numberRx);if(!s)return;e=e.trim();const n={value:parseFloat(e)};if(0===n.value&&(n.value=0),!t._flags.unsafe)if(e.match(/e/i)){if(a.normalizeExponent("".concat(n.value/Math.pow(10,s[1]),"e").concat(s[1]))!==a.normalizeExponent(e))return n.errors=r("number.unsafe"),n}else{const t=n.value.toString();if(t.match(/e/i))return n;if(t!==a.normalizeDecimal(e))return n.errors=r("number.unsafe"),n}return n}},validate(e,{schema:t,error:r,prefs:s}){if(e===1/0||e===-1/0)return{value:e,errors:r("number.infinity")};if(!o.isNumber(e))return{value:e,errors:r("number.base")};const n={value:e};if(s.convert){const e=t.$_getRule("precision");if(e){const t=Math.pow(10,e.args.limit);n.value=Math.round(n.value*t)/t}}return 0===n.value&&(n.value=0),!t._flags.unsafe&&(e>Number.MAX_SAFE_INTEGER||e<Number.MIN_SAFE_INTEGER)&&(n.errors=r("number.unsafe")),n},rules:{compare:{method:!1,validate:(e,t,{limit:r},{name:s,operator:n,args:a})=>o.compare(e,r,n)?e:t.error("number."+s,{limit:a.limit,value:e}),args:[{name:"limit",ref:!0,assert:o.isNumber,message:"must be a number"}]},greater:{method(e){return this.$_addRule({name:"greater",method:"compare",args:{limit:e},operator:">"})}},integer:{method(){return this.$_addRule("integer")},validate:(e,t)=>Math.trunc(e)-e==0?e:t.error("number.integer")},less:{method(e){return this.$_addRule({name:"less",method:"compare",args:{limit:e},operator:"<"})}},max:{method(e){return this.$_addRule({name:"max",method:"compare",args:{limit:e},operator:"<="})}},min:{method(e){return this.$_addRule({name:"min",method:"compare",args:{limit:e},operator:">="})}},multiple:{method(e){return this.$_addRule({name:"multiple",args:{base:e}})},validate:(e,t,{base:r},s)=>e%r==0?e:t.error("number.multiple",{multiple:s.args.base,value:e}),args:[{name:"base",ref:!0,assert:e=>"number"==typeof e&&isFinite(e)&&e>0,message:"must be a positive number"}],multi:!0},negative:{method(){return this.sign("negative")}},port:{method(){return this.$_addRule("port")},validate:(e,t)=>Number.isSafeInteger(e)&&e>=0&&e<=65535?e:t.error("number.port")},positive:{method(){return this.sign("positive")}},precision:{method(e){return s(Number.isSafeInteger(e),"limit must be an integer"),this.$_addRule({name:"precision",args:{limit:e}})},validate(e,t,{limit:r}){const s=e.toString().match(a.precisionRx);return Math.max((s[1]?s[1].length:0)-(s[2]?parseInt(s[2],10):0),0)<=r?e:t.error("number.precision",{limit:r,value:e})},convert:!0},sign:{method(e){return s(["negative","positive"].includes(e),"Invalid sign",e),this.$_addRule({name:"sign",args:{sign:e}})},validate:(e,t,{sign:r})=>"negative"===r&&e<0||"positive"===r&&e>0?e:t.error("number.".concat(r))},unsafe:{method(e=!0){return s("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("unsafe",e)}}},cast:{string:{from:e=>"number"==typeof e,to:(e,t)=>e.toString()}},messages:{"number.base":"{{#label}} must be a number","number.greater":"{{#label}} must be greater than {{#limit}}","number.infinity":"{{#label}} cannot be infinity","number.integer":"{{#label}} must be an integer","number.less":"{{#label}} must be less than {{#limit}}","number.max":"{{#label}} must be less than or equal to {{#limit}}","number.min":"{{#label}} must be larger than or equal to {{#limit}}","number.multiple":"{{#label}} must be a multiple of {{#multiple}}","number.negative":"{{#label}} must be a negative number","number.port":"{{#label}} must be a valid port","number.positive":"{{#label}} must be a positive number","number.precision":"{{#label}} must have no more than {{#limit}} decimal places","number.unsafe":"{{#label}} must be a safe number"}}),a.normalizeExponent=function(e){return e.replace(/E/,"e").replace(/\.(\d*[1-9])?0+e/,".$1e").replace(/\.e/,"e").replace(/e\+/,"e").replace(/^\+/,"").replace(/^(-?)0+([1-9])/,"$1$2")},a.normalizeDecimal=function(e){return(e=e.replace(/^\+/,"").replace(/\.0+$/,"").replace(/^(-?)\.([^\.]*)$/,"$10.$2").replace(/^(-?)0+([1-9])/,"$1$2")).includes(".")&&e.endsWith("0")&&(e=e.replace(/0+$/,"")),"-0"===e?"0":e}},function(e,t,r){"use strict";const s=r(22);e.exports=s.extend({type:"object",cast:{map:{from:e=>e&&"object"==typeof e,to:(e,t)=>new Map(Object.entries(e))}}})},function(e,t,r){"use strict";function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=r(0),i=r(23),l=r(49),c=r(50),u=r(27),f=r(51),m=r(26),h=r(3),d=r(1),p={tlds:f instanceof Set&&{tlds:{allow:f,deny:null}},base64Regex:{true:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}==|[\w\-]{3}=)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/},false:{true:/^(?:[\w\-]{2}[\w\-]{2})*(?:[\w\-]{2}(==)?|[\w\-]{3}=?)?$/,false:/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}(==)?|[A-Za-z0-9+\/]{3}=?)?$/}},dataUriRegex:/^data:[\w+.-]+\/[\w+.-]+;((charset=[\w-]+|base64),)?(.*)$/,hexRegex:/^[a-f0-9]+$/i,ipRegex:c.regex().regex,isoDurationRegex:/^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/,guidBrackets:{"{":"}","[":"]","(":")","":""},guidVersions:{uuidv1:"1",uuidv2:"2",uuidv3:"3",uuidv4:"4",uuidv5:"5"},cidrPresences:["required","optional","forbidden"],normalizationForms:["NFC","NFD","NFKC","NFKD"]};e.exports=h.extend({type:"string",flags:{insensitive:{default:!1},truncate:{default:!1}},terms:{replacements:{init:null}},coerce:{from:"string",method(e,{schema:t,state:r,prefs:s}){const n=t.$_getRule("normalize");n&&(e=e.normalize(n.args.form));const o=t.$_getRule("case");o&&(e="upper"===o.args.direction?e.toLocaleUpperCase():e.toLocaleLowerCase());const a=t.$_getRule("trim");if(a&&a.args.enabled&&(e=e.trim()),t.$_terms.replacements)for(const r of t.$_terms.replacements)e=e.replace(r.pattern,r.replacement);const i=t.$_getRule("hex");if(i&&i.args.options.byteAligned&&e.length%2!=0&&(e="0".concat(e)),t.$_getRule("isoDate")){const t=p.isoDate(e);t&&(e=t)}if(t._flags.truncate){const n=t.$_getRule("max");if(n){let o=n.args.limit;if(d.isResolvable(o)&&(o=o.resolve(e,r,s),!d.limit(o)))return{value:e,errors:t.$_createError("any.ref",o,{ref:n.args.limit,arg:"limit",reason:"must be a positive integer"},r,s)};e=e.slice(0,o)}}return{value:e}}},validate:(e,{error:t})=>"string"!=typeof e?{value:e,errors:t("string.base")}:""===e?{value:e,errors:t("string.empty")}:void 0,rules:{alphanum:{method(){return this.$_addRule("alphanum")},validate:(e,t)=>/^[a-zA-Z0-9]+$/.test(e)?e:t.error("string.alphanum")},base64:{method(e={}){return d.assertOptions(e,["paddingRequired","urlSafe"]),e=n({urlSafe:!1,paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),a("boolean"==typeof e.urlSafe,"urlSafe must be boolean"),this.$_addRule({name:"base64",args:{options:e}})},validate:(e,t,{options:r})=>p.base64Regex[r.paddingRequired][r.urlSafe].test(e)?e:t.error("string.base64")},case:{method(e){return a(["lower","upper"].includes(e),"Invalid case:",e),this.$_addRule({name:"case",args:{direction:e}})},validate:(e,t,{direction:r})=>"lower"===r&&e===e.toLocaleLowerCase()||"upper"===r&&e===e.toLocaleUpperCase()?e:t.error("string.".concat(r,"case")),convert:!0},creditCard:{method(){return this.$_addRule("creditCard")},validate(e,t){let r=e.length,s=0,n=1;for(;r--;){const t=e.charAt(r)*n;s+=t-9*(t>9),n^=3}return s>0&&s%10==0?e:t.error("string.creditCard")}},dataUri:{method(e={}){return d.assertOptions(e,["paddingRequired"]),e=n({paddingRequired:!0},e),a("boolean"==typeof e.paddingRequired,"paddingRequired must be boolean"),this.$_addRule({name:"dataUri",args:{options:e}})},validate(e,t,{options:r}){const s=e.match(p.dataUriRegex);if(s){if(!s[2])return e;if("base64"!==s[2])return e;if(p.base64Regex[r.paddingRequired].false.test(s[3]))return e}return t.error("string.dataUri")}},domain:{method(e){e&&d.assertOptions(e,["allowUnicode","minDomainSegments","tlds"]);const t=p.addressOptions(e);return this.$_addRule({name:"domain",args:{options:e},address:t})},validate:(e,t,r,{address:s})=>i.isValid(e,s)?e:t.error("string.domain")},email:{method(e={}){d.assertOptions(e,["allowUnicode","ignoreLength","minDomainSegments","multiple","separator","tlds"]),a(void 0===e.multiple||"boolean"==typeof e.multiple,"multiple option must be an boolean");const t=p.addressOptions(e),r=new RegExp("\\s*[".concat(e.separator?u(e.separator):",","]\\s*"));return this.$_addRule({name:"email",args:{options:e},regex:r,address:t})},validate(e,t,{options:r},{regex:s,address:n}){const o=r.multiple?e.split(s):[e],a=[];for(const e of o)l.isValid(e,n)||a.push(e);return a.length?t.error("string.email",{value:e,invalids:a}):e}},guid:{alias:"uuid",method(e={}){d.assertOptions(e,["version"]);let t="";if(e.version){const r=[].concat(e.version);a(r.length>=1,"version must have at least 1 valid version specified");const s=new Set;for(let e=0;e<r.length;++e){const n=r[e];a("string"==typeof n,"version at position "+e+" must be a string");const o=p.guidVersions[n.toLowerCase()];a(o,"version at position "+e+" must be one of "+Object.keys(p.guidVersions).join(", ")),a(!s.has(o),"version at position "+e+" must not be a duplicate"),t+=o,s.add(o)}}const r=new RegExp("^([\\[{\\(]?)[0-9A-F]{8}([:-]?)[0-9A-F]{4}\\2?[".concat(t||"0-9A-F","][0-9A-F]{3}\\2?[").concat(t?"89AB":"0-9A-F","][0-9A-F]{3}\\2?[0-9A-F]{12}([\\]}\\)]?)$"),"i");return this.$_addRule({name:"guid",args:{options:e},regex:r})},validate(e,t,r,{regex:s}){const n=s.exec(e);return n?p.guidBrackets[n[1]]!==n[n.length-1]?t.error("string.guid"):e:t.error("string.guid")}},hex:{method(e={}){return d.assertOptions(e,["byteAligned"]),e=n({byteAligned:!1},e),a("boolean"==typeof e.byteAligned,"byteAligned must be boolean"),this.$_addRule({name:"hex",args:{options:e}})},validate:(e,t,{options:r})=>p.hexRegex.test(e)?r.byteAligned&&e.length%2!=0?t.error("string.hexAlign"):e:t.error("string.hex")},hostname:{method(){return this.$_addRule("hostname")},validate:(e,t)=>i.isValid(e,{minDomainSegments:1})||p.ipRegex.test(e)?e:t.error("string.hostname")},insensitive:{method(){return this.$_setFlag("insensitive",!0)}},ip:{method(e={}){d.assertOptions(e,["cidr","version"]);const{cidr:t,versions:r,regex:s}=c.regex(e),n=e.version?r:void 0;return this.$_addRule({name:"ip",args:{options:{cidr:t,version:n}},regex:s})},validate:(e,t,{options:r},{regex:s})=>s.test(e)?e:r.version?t.error("string.ipVersion",{value:e,cidr:r.cidr,version:r.version}):t.error("string.ip",{value:e,cidr:r.cidr})},isoDate:{method(){return this.$_addRule("isoDate")},validate:(e,{error:t})=>p.isoDate(e)?e:t("string.isoDate")},isoDuration:{method(){return this.$_addRule("isoDuration")},validate:(e,t)=>p.isoDurationRegex.test(e)?e:t.error("string.isoDuration")},length:{method(e,t){return p.length(this,"length",e,"=",t)},validate(e,t,{limit:r,encoding:s},{name:n,operator:o,args:a}){const i=!s&&e.length;return d.compare(i,r,o)?e:t.error("string."+n,{limit:a.limit,value:e,encoding:s})},args:[{name:"limit",ref:!0,assert:d.limit,message:"must be a positive integer"},"encoding"]},lowercase:{method(){return this.case("lower")}},max:{method(e,t){return p.length(this,"max",e,"<=",t)},args:["limit","encoding"]},min:{method(e,t){return p.length(this,"min",e,">=",t)},args:["limit","encoding"]},normalize:{method(e="NFC"){return a(p.normalizationForms.includes(e),"normalization form must be one of "+p.normalizationForms.join(", ")),this.$_addRule({name:"normalize",args:{form:e}})},validate:(e,{error:t},{form:r})=>e===e.normalize(r)?e:t("string.normalize",{value:e,form:r}),convert:!0},pattern:{alias:"regex",method(e,t={}){a(e instanceof RegExp,"regex must be a RegExp"),a(!e.flags.includes("g")&&!e.flags.includes("y"),"regex should not use global or sticky mode"),"string"==typeof t&&(t={name:t}),d.assertOptions(t,["invert","name"]);const r=["string.pattern",t.invert?".invert":"",t.name?".name":".base"].join("");return this.$_addRule({name:"pattern",args:{regex:e,options:t},errorCode:r})},validate:(e,t,{regex:r,options:s},{errorCode:n})=>r.test(e)^s.invert?e:t.error(n,{name:s.name,regex:r,value:e}),args:["regex","options"],multi:!0},replace:{method(e,t){"string"==typeof e&&(e=new RegExp(u(e),"g")),a(e instanceof RegExp,"pattern must be a RegExp"),a("string"==typeof t,"replacement must be a String");const r=this.clone();return r.$_terms.replacements||(r.$_terms.replacements=[]),r.$_terms.replacements.push({pattern:e,replacement:t}),r}},token:{method(){return this.$_addRule("token")},validate:(e,t)=>/^\w+$/.test(e)?e:t.error("string.token")},trim:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_addRule({name:"trim",args:{enabled:e}})},validate:(e,t,{enabled:r})=>r&&e!==e.trim()?t.error("string.trim"):e,convert:!0},truncate:{method(e=!0){return a("boolean"==typeof e,"enabled must be a boolean"),this.$_setFlag("truncate",e)}},uppercase:{method(){return this.case("upper")}},uri:{method(e={}){d.assertOptions(e,["allowRelative","allowQuerySquareBrackets","domain","relativeOnly","scheme"]),e.domain&&d.assertOptions(e.domain,["allowUnicode","minDomainSegments","tlds"]);const{regex:t,scheme:r}=m.regex(e),s=e.domain?p.addressOptions(e.domain):null;return this.$_addRule({name:"uri",args:{options:e},regex:t,domain:s,scheme:r})},validate(e,t,{options:r},{regex:s,domain:n,scheme:o}){if(["http:/","https:/"].includes(e))return t.error("string.uri");const a=s.exec(e);if(a){if(n){const e=a[1]||a[2];if(!i.isValid(e,n))return t.error("string.domain",{value:e})}return e}return r.relativeOnly?t.error("string.uriRelativeOnly"):r.scheme?t.error("string.uriCustomScheme",{scheme:o,value:e}):t.error("string.uri")}}},manifest:{build(e,t){if(t.replacements)for(const{pattern:r,replacement:s}of t.replacements)e=e.replace(r,s);return e}},messages:{"string.alphanum":"{{#label}} must only contain alpha-numeric characters","string.base":"{{#label}} must be a string","string.base64":"{{#label}} must be a valid base64 string","string.creditCard":"{{#label}} must be a credit card","string.dataUri":"{{#label}} must be a valid dataUri string","string.domain":"{{#label}} must contain a valid domain name","string.email":"{{#label}} must be a valid email","string.empty":"{{#label}} is not allowed to be empty","string.guid":"{{#label}} must be a valid GUID","string.hex":"{{#label}} must only contain hexadecimal characters","string.hexAlign":"{{#label}} hex decoded representation must be byte aligned","string.hostname":"{{#label}} must be a valid hostname","string.ip":"{{#label}} must be a valid ip address with a {{#cidr}} CIDR","string.ipVersion":"{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR","string.isoDate":"{{#label}} must be in iso format","string.isoDuration":"{{#label}} must be a valid ISO 8601 duration","string.length":"{{#label}} length must be {{#limit}} characters long","string.lowercase":"{{#label}} must only contain lowercase characters","string.max":"{{#label}} length must be less than or equal to {{#limit}} characters long","string.min":"{{#label}} length must be at least {{#limit}} characters long","string.normalize":"{{#label}} must be unicode normalized in the {{#form}} form","string.token":"{{#label}} must only contain alpha-numeric and underscore characters","string.pattern.base":'{{#label}} with value "{[.]}" fails to match the required pattern: {{#regex}}',"string.pattern.name":'{{#label}} with value "{[.]}" fails to match the {{#name}} pattern',"string.pattern.invert.base":'{{#label}} with value "{[.]}" matches the inverted pattern: {{#regex}}',"string.pattern.invert.name":'{{#label}} with value "{[.]}" matches the inverted {{#name}} pattern',"string.trim":"{{#label}} must not have leading or trailing whitespace","string.uri":"{{#label}} must be a valid uri","string.uriCustomScheme":"{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern","string.uriRelativeOnly":"{{#label}} must be a valid relative uri","string.uppercase":"{{#label}} must only contain uppercase characters"}}),p.addressOptions=function(e){if(!e)return e;if(a(void 0===e.minDomainSegments||Number.isSafeInteger(e.minDomainSegments)&&e.minDomainSegments>0,"minDomainSegments must be a positive integer"),!1===e.tlds)return e;if(!0===e.tlds||void 0===e.tlds)return a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds);a("object"==typeof e.tlds,"tlds must be true, false, or an object");const t=e.tlds.deny;if(t)return Array.isArray(t)&&(e=Object.assign({},e,{tlds:{deny:new Set(t)}})),a(e.tlds.deny instanceof Set,"tlds.deny must be an array, Set, or boolean"),a(!e.tlds.allow,"Cannot specify both tlds.allow and tlds.deny lists"),e;const r=e.tlds.allow;return r?!0===r?(a(p.tlds,"Built-in TLD list disabled"),Object.assign({},e,p.tlds)):(Array.isArray(r)&&(e=Object.assign({},e,{tlds:{allow:new Set(r)}})),a(e.tlds.allow instanceof Set,"tlds.allow must be an array, Set, or boolean"),e):e},p.isoDate=function(e){if(!d.isIsoDate(e))return null;const t=new Date(e);return isNaN(t.getTime())?null:t.toISOString()},p.length=function(e,t,r,s,n){return a(!n||!1,"Invalid encoding:",n),e.$_addRule({name:t,method:"length",args:{limit:r,encoding:n},operator:s})}},function(e,t,r){"use strict";const s=r(24),n=r(23),o=r(25),a={nonAsciiRx:/[^\x00-\x7f]/,encoder:new(s.TextEncoder||TextEncoder)};t.analyze=function(e,t){return a.email(e,t)},t.isValid=function(e,t){return!a.email(e,t)},a.email=function(e,t={}){if("string"!=typeof e)throw new Error("Invalid input: email must be a string");if(!e)return o.code("EMPTY_STRING");const r=!a.nonAsciiRx.test(e);if(!r){if(!1===t.allowUnicode)return o.code("FORBIDDEN_UNICODE");e=e.normalize("NFC")}const s=e.split("@");if(2!==s.length)return s.length>2?o.code("MULTIPLE_AT_CHAR"):o.code("MISSING_AT_CHAR");const[i,l]=s;if(!i)return o.code("EMPTY_LOCAL");if(!t.ignoreLength){if(e.length>254)return o.code("ADDRESS_TOO_LONG");if(a.encoder.encode(i).length>64)return o.code("LOCAL_TOO_LONG")}return a.local(i,r)||n.analyze(l,t)},a.local=function(e,t){const r=e.split(".");for(const e of r){if(!e.length)return o.code("EMPTY_LOCAL_SEGMENT");if(t){if(!a.atextRx.test(e))return o.code("INVALID_LOCAL_CHARS")}else for(const t of e){if(a.atextRx.test(t))continue;const e=a.binary(t);if(!a.atomRx.test(e))return o.code("INVALID_LOCAL_CHARS")}}},a.binary=function(e){return Array.from(a.encoder.encode(e)).map(e=>String.fromCharCode(e)).join("")},a.atextRx=/^[\w!#\$%&'\*\+\-/=\?\^`\{\|\}~]+$/,a.atomRx=new RegExp(["(?:[\\xc2-\\xdf][\\x80-\\xbf])","(?:\\xe0[\\xa0-\\xbf][\\x80-\\xbf])|(?:[\\xe1-\\xec][\\x80-\\xbf]{2})|(?:\\xed[\\x80-\\x9f][\\x80-\\xbf])|(?:[\\xee-\\xef][\\x80-\\xbf]{2})","(?:\\xf0[\\x90-\\xbf][\\x80-\\xbf]{2})|(?:[\\xf1-\\xf3][\\x80-\\xbf]{3})|(?:\\xf4[\\x80-\\x8f][\\x80-\\xbf]{2})"].join("|"))},function(e,t,r){"use strict";const s=r(0),n=r(26);t.regex=function(e={}){s(void 0===e.cidr||"string"==typeof e.cidr,"options.cidr must be a string");const t=e.cidr?e.cidr.toLowerCase():"optional";s(["required","optional","forbidden"].includes(t),"options.cidr must be one of required, optional, forbidden"),s(void 0===e.version||"string"==typeof e.version||Array.isArray(e.version),"options.version must be a string or an array of string");let r=e.version||["ipv4","ipv6","ipvfuture"];Array.isArray(r)||(r=[r]),s(r.length>=1,"options.version must have at least 1 version specified");for(let e=0;e<r.length;++e)s("string"==typeof r[e],"options.version must only contain strings"),r[e]=r[e].toLowerCase(),s(["ipv4","ipv6","ipvfuture"].includes(r[e]),"options.version contains unknown version "+r[e]+" - must be one of ipv4, ipv6, ipvfuture");r=Array.from(new Set(r));const o=r.map(e=>{if("forbidden"===t)return n.ip[e];const r="\\/".concat("ipv4"===e?n.ip.v4Cidr:n.ip.v6Cidr);return"required"===t?"".concat(n.ip[e]).concat(r):"".concat(n.ip[e],"(?:").concat(r,")?")}),a="(?:".concat(o.join("|"),")"),i=new RegExp("^".concat(a,"$"));return{cidr:t,versions:r,regex:i,raw:a}}},function(e,t){},function(e,t,r){"use strict";const s=r(0),n=r(3),o={};o.Map=class extends Map{slice(){return new o.Map(this)}},e.exports=n.extend({type:"symbol",terms:{map:{init:new o.Map}},coerce:{method(e,{schema:t,error:r}){const s=t.$_terms.map.get(e);return s&&(e=s),t._flags.only&&"symbol"!=typeof e?{value:e,errors:r("symbol.map",{map:t.$_terms.map})}:{value:e}}},validate(e,{error:t}){if("symbol"!=typeof e)return{value:e,errors:t("symbol.base")}},rules:{map:{method(e){e&&!e[Symbol.iterator]&&"object"==typeof e&&(e=Object.entries(e)),s(e&&e[Symbol.iterator],"Iterable must be an iterable or object");const t=this.clone(),r=[];for(const n of e){s(n&&n[Symbol.iterator],"Entry must be an iterable");const[e,o]=n;s("object"!=typeof e&&"function"!=typeof e&&"symbol"!=typeof e,"Key must not be of type object, function, or Symbol"),s("symbol"==typeof o,"Value must be a Symbol"),t.$_terms.map.set(e,o),r.push(o)}return t.valid(...r)}}},manifest:{build:(e,t)=>(t.map&&(e=e.map(t.map)),e)},messages:{"symbol.base":"{{#label}} must be a symbol","symbol.map":"{{#label}} must be one of {{#map}}"}})}])}));

/***/ }),

/***/ "./src/ghosty/app.js":
/*!***************************!*\
  !*** ./src/ghosty/app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _griga_griga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../griga/griga */ "./src/griga/griga.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/ghosty/editor.js");
/* harmony import */ var _entities_background_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/background_tile */ "./src/ghosty/entities/background_tile.js");
/* harmony import */ var _entities_ghosty_entities_ghosty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities/ghosty_entities/ghosty */ "./src/ghosty/entities/ghosty_entities/ghosty.js");
/* harmony import */ var _entities_ghosty_entities_goal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities/ghosty_entities/goal */ "./src/ghosty/entities/ghosty_entities/goal.js");
/* harmony import */ var _entities_ghosty_entities_stone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/ghosty_entities/stone */ "./src/ghosty/entities/ghosty_entities/stone.js");
/* harmony import */ var _entities_ghosty_entities_wooden_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/ghosty_entities/wooden_box */ "./src/ghosty/entities/ghosty_entities/wooden_box.js");
/* harmony import */ var _entities_selection_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./entities/selection_background */ "./src/ghosty/entities/selection_background.js");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./levels */ "./src/ghosty/levels.js");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./play */ "./src/ghosty/play.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style */ "./src/ghosty/style.js");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./local_storage */ "./src/ghosty/local_storage.js");
/* harmony import */ var _entities_ghosty_entities_hole__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entities/ghosty_entities/hole */ "./src/ghosty/entities/ghosty_entities/hole.js");
/* harmony import */ var _entities_ghosty_entities_hole_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./entities/ghosty_entities/hole_border */ "./src/ghosty/entities/ghosty_entities/hole_border.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home */ "./src/ghosty/home.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./popup */ "./src/ghosty/popup.js");

















const CS = 16;
const RS = 10;

const grigaConfig = {
  displays:[
    {
      name: 'play',
      wrapperId: 'play-display',
      widthHeightRatio: CS/RS,
    },
    {
      name: 'editor',
      wrapperId: 'editor-display',
      widthHeightRatio: CS/RS,
    },
    {
      name: 'selection',
      wrapperId: 'selection-display',
      widthHeightRatio: 10/1
    }
  ],
  grids:[
    {
      name: 'play',
      columns: CS,
      rows: RS,
    },
    {
      name: 'editor',
      columns: CS,
      rows: RS,
    },
    {
      name: 'selection-hotbar',
      columns: 10,
      rows: 1,
    },
    {
      name: 'preview',
      columns: CS,
      rows: RS
    }
  ],
  entities:[_entities_background_tile__WEBPACK_IMPORTED_MODULE_2__["BackgroundTile"], _entities_selection_background__WEBPACK_IMPORTED_MODULE_7__["SelectionBackground"], _entities_ghosty_entities_stone__WEBPACK_IMPORTED_MODULE_5__["Stone"], _entities_ghosty_entities_ghosty__WEBPACK_IMPORTED_MODULE_3__["Ghosty"], _entities_ghosty_entities_goal__WEBPACK_IMPORTED_MODULE_4__["Goal"], _entities_ghosty_entities_wooden_box__WEBPACK_IMPORTED_MODULE_6__["WoodenBox"], _entities_ghosty_entities_hole__WEBPACK_IMPORTED_MODULE_12__["Hole"], _entities_ghosty_entities_hole_border__WEBPACK_IMPORTED_MODULE_13__["HoleBorder"]],
}

class App {
  constructor() {
    this.backgroundTileScene = {"detached":[],"tiles":[[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]],[[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]],[["BackgroundTile",{}]]]]}
    this.wrapper = document.getElementById('wrapper');
    this.home_button = document.querySelector('.home-button');
    this.play_button = document.querySelector('.play-button');
    this.levels_button = document.querySelector('.levels-button');
    this.editor_button = document.querySelector('.editor-button');
    this.help_button = document.querySelector('.help-button');
    this.content_div = document.querySelector('.content');
    this.home_screen = document.querySelector('.home-screen');
    this.play_screen = document.querySelector('.play-screen');
    this.editor_screen = document.querySelector('.editor-screen');
    this.levels_screen = document.querySelector('.levels-screen');
    this.state = 'home';
    this.helpBook = {
      home: _home__WEBPACK_IMPORTED_MODULE_14__["homeHelp"],
      play: _play__WEBPACK_IMPORTED_MODULE_9__["playHelp"],
      levels: _levels__WEBPACK_IMPORTED_MODULE_8__["levelsHelp"],
      editor: _editor__WEBPACK_IMPORTED_MODULE_1__["editorHelp"]
    }
    this.displaySettings = {columnsOnScreen: CS, rowsOnScreen: RS};
    this.style = new _style__WEBPACK_IMPORTED_MODULE_10__["Style"]( this );
    this.griga = new _griga_griga__WEBPACK_IMPORTED_MODULE_0__["Griga"]( grigaConfig, griga => this.startGame( griga ) );
    this.localStorage = new _local_storage__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"]( this );
    this.home = new _home__WEBPACK_IMPORTED_MODULE_14__["Home"]( this );
    this.levels = new _levels__WEBPACK_IMPORTED_MODULE_8__["Levels"]( this );
    this.play = new _play__WEBPACK_IMPORTED_MODULE_9__["Play"]( this, this.griga );
    this.editor = new _editor__WEBPACK_IMPORTED_MODULE_1__["Editor"]( this, this.griga );
    this.setupEventListeners();
  }

  startGame( griga ){
    griga.ghosty = this;
    this.play.startGame();
  }

  endActiveState(){
    this[this.state].end();
  }

  handleNextHelpPopupClick(){
    this[this.state].closePopup();
    this.handleHelpButtonClick( ++this.helpPageIndex%this.helpBook[this.state][this.helpLanguage].length, this.helpLanguage );
  }

  handleHelpButtonClick( index = 0, language = this.helpLanguage ){
    this.helpPageIndex = index;
    this.helpLanguage = language || 'english'
    if (this[this.state].popup) { this[this.state].closePopup() };
    this[this.state].popup = new _popup__WEBPACK_IMPORTED_MODULE_15__["Popup"](
      'wrapper',
      `Ghosty Help: ${this.state.charAt(0).toUpperCase()+this.state.slice(1)}`,
      [
        {id: 'popup-close', text: 'Close', click: iV => this[this.state].closePopup( iV )},
        {id: 'next-help-popup', text: 'Next', click: iV => this.handleNextHelpPopupClick( iV )}
      ], [],
      this.helpBook[this.state][this.helpLanguage][this.helpPageIndex].h3,
      this.helpBook[this.state][this.helpLanguage][this.helpPageIndex].p
    ) ;
  }

  handleHomeButtonClick(){
    this.endActiveState();
    this.home.start();
  }

  handlePlayButtonClick(){
    this.endActiveState();
    this.play.start();
  }
  
  handleEditorButtonClick(){
    this.endActiveState();
    this.editor.start();
  }

  handleLevelsButtonClick(){
    this.endActiveState();
    if (this.state === 'play') {
      this.levels.start(this.play.category, this.play.levelIndex);
    } else if (this.state === 'editor') {
      this.levels.start(this.editor.category, this.editor.levelIndex);
    } else {
      this.levels.start('classic');
    }
  }
  
  handleContentDivClick(){
    if (this.state === 'home') {
      this.endActiveState();
      this.play.start();
    }
  }

  setupEventListeners(){
    this.home_button.addEventListener('click', e => this.handleHomeButtonClick());
    this.play_button.addEventListener('click', e => this.handlePlayButtonClick());
    this.editor_button.addEventListener('click', e => this.handleEditorButtonClick());
    this.levels_button.addEventListener('click', e => this.handleLevelsButtonClick());
    this.help_button.addEventListener('click', e => this.handleHelpButtonClick());
    this.content_div.addEventListener('click', e => this.handleContentDivClick());
  }
}


document.addEventListener( 'DOMContentLoaded', () => {new App()} );

/***/ }),

/***/ "./src/ghosty/editor.js":
/*!******************************!*\
  !*** ./src/ghosty/editor.js ***!
  \******************************/
/*! exports provided: Editor, editorHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorHelp", function() { return editorHelp; });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/ghosty/popup.js");


class Editor {
    constructor( app, griga ){
        this.hotbar_scene_data = {"detached":[],"tiles":[[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]],[[["SelectionBackground",{}]]]]}
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['editor'];
        this.hotbar_grid = griga.grids['selection-hotbar'];
        this.lower_bar = document.querySelector('.lower-bar');
        this.new_button = document.getElementById('editor-new-button');
        this.save_button = document.getElementById('editor-save-button');
        this.test_button = document.getElementById('editor-test-button');
        this.level_name = document.getElementById('editor-level-name');
        this.rename_button= document.getElementById('editor-rename-button');
        this.level = this.app.levels.levels['presets'][0];
        this.category = 'presets';
        this.levelIndex = 0;
        this.state = null;
        this.popup = null;
        this.selection = new Selection( this, this.hotbar_grid );
        this.hotbarDisplaySettings = {
            columnsOnScreen: this.hotbar_grid.columns,
            rowsOnScreen: this.hotbar_grid.rows,
        }
        this.setupEventListeners();
    }

    loadSelectionHotbar(){
        this.hotbar_grid.loadScene( this.hotbar_scene_data );
        Object.keys(this.griga.entities).filter( entityName => {
            return !['SelectionBackground', 'BackgroundTile'].includes( entityName );
        } ).filter( eName => {
            const unlockLevel = this.griga.entities[eName].getUnlockLevel( this.app.levels.levels['classic'] );
            return unlockLevel < this.app.levels.classicHighestLevelIndex;
        } ).forEach( (entityName, i) => {
            this.hotbar_grid.newEntityInstance(entityName, {}, {c:i,r:0});
        } );
    }

    clearSelectionHotbar(){
        this.hotbar_grid.clearScene();
    }

    start( level, category, levelIndex ){
        this.app.editor_button.classList.add('active');
        this.app.editor_screen.classList.remove('hidden');
        this.state = 'editor';
        this.app.state = 'editor';
        this.loadSelectionHotbar();
        this.selection.activateFirstSelectionBackground();
        this.griga.displayGrid('editor', 'editor', this.app.displaySettings);
        this.griga.displayGrid('selection', 'selection-hotbar', this.hotbarDisplaySettings);
        this.loadLevel( level, category, levelIndex );
        this.app.style.resizeWrapper();
        this.griga.resizeDisplays();
    }

    loadLevel( level = this.level, category = this.category, levelIndex = this.levelIndex) {
        this.level = level;
        this.category = category;
        this.levelIndex = levelIndex;
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.level.sceneData );
        if (category === 'presets') {
            this.level_name.innerHTML = this.level.name + ' <i>--preset</i>';
            this.test_button.classList.add('hidden');
            this.rename_button.classList.add('hidden');
        } else {
            this.level_name.innerHTML = this.level.name;
            this.rename_button.classList.remove('hidden');
            this.test_button.classList.remove('hidden');
        }
    }

    clearLevel() {
        this.grid.clearScene();
    }

    end(){
        if (this.popup) { this.closePopup() };
        this.griga.removeGridFromDisplay(this.state, 'editor');
        this.griga.removeGridFromDisplay('selection-hotbar', 'selection');
        this.clearLevel();
        this.clearSelectionHotbar();
        this.app.editor_button.classList.remove('active');
        this.app.editor_screen.classList.add('hidden');
    }

    sceneChangedHandler(){
        if (this.category === 'yourLevels') {
            this.level.sceneData = this.grid.getCurrentSceneData();
            this.app.levels.updateLevel( this.levelIndex );
        } else if (this.category === 'presets'){
            const [level, category, levelIndex] = this.saveSceneDataAsNewLevel( this.level.name, 'unknown', 'unknown' );
            this.clearLevel();
            this.loadLevel( level, category, levelIndex );
        }
    }

    saveSceneDataAsNewLevel( levelName, difficulty, creator ){
        return this.app.levels.newLevel(levelName, difficulty, creator, 
            this.grid.getCurrentSceneData()
        );
    }

    showSaveAsNewLevelPopup(){
        this.popup = new _popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]( 'editor-display', '<i class="fas fa-clone"></i> Save a copy as:',
        [
            {id: 'popup-back', text: 'Back', click: iV => this.closePopup( iV )},
            {id: 'save-popup-save', text: 'Save', click: iV => this.handlePopupSaveNewClick( iV )}
        ],
        [
            {name: 'level-name', label: 'Name:', placeholder: 'unnamed'},
            {name: 'level-difficulty', label: 'Difficulty:', placeholder: 'easy'},
            {name: 'level-creator', label: 'Creator:', placeholder: 'You'}
        ] );
    }

    handlePopupSaveNewClick( iV ){
        this.saveSceneDataAsNewLevel(
            iV['level-name'],
            iV['level-difficulty'],
            iV['level-creator']
        );
        this.closePopup();
    }

    handlePopupRenameClick( iV ){
        this.app.levels.renameLevel(
            this.levelIndex,
            iV['level-name'],
            iV['level-difficulty'],
            iV['level-creator']
        );
        this.clearLevel();
        this.loadLevel();
        this.closePopup();
    }

    closePopup(){
        this.popup.close();
        this.popup = null;
        if (this.loadLevelAtPopupClose) {
            this.clearLevel();
            this.loadLevel();
        }
        this.loadLevelAtPopupClose = false;
    }

    switchToLevels(){
        this.end();
        this.app.levels.start( this.category, this.levelIndex );
    }

    handleSaveButtonClick( e ){
        if (this.popup) { this.closePopup() };
        this.showSaveAsNewLevelPopup();
    }

    handleLevelNameClick( e ){
        this.switchToLevels();
    }

    handleTestButtonClick( e ){
        this.end();
        this.app.play.start( this.level, this.category, this.levelIndex );
    }

    handleNewButtonClick( e ){
        this.end();
        this.app.levels.start( 'presets' );
    }

    handleRenameButtonClick( e ){
        if (this.popup) { this.closePopup() };
        if (this.category === 'presets') {
            this.showSaveAsNewLevelPopup();
            this.loadLevelAtPopupClose = true;
        } else if (this.category === 'yourLevels') {
            this.popup = new _popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]( 'editor-display', `<i class="fas fa-i-cursor"></i> Rename level to:`,
            [
                {id: 'popup-back', text: 'Back', click: iV => this.closePopup( iV )},
                {id: 'rename-popup-rename', text: 'Save', click: iV => this.handlePopupRenameClick( iV )}
            ],
            [
                {name: 'level-name', label: 'Name:', placeholder: this.level.name},
                {name: 'level-difficulty', label: 'Difficulty:', placeholder: this.level.difficulty},
                {name: 'level-creator', label: 'Creator:', placeholder: this.level.creator}
            ] );
        }
    }

    setupEventListeners(){
        this.new_button.addEventListener('click', e => this.handleNewButtonClick( e ));
        this.save_button.addEventListener('click', e => this.handleSaveButtonClick( e ));
        this.test_button.addEventListener('click', e => this.handleTestButtonClick( e ));
        this.level_name.addEventListener('click', e => this.handleLevelNameClick( e ));
        this.rename_button.addEventListener('click', e => this.handleRenameButtonClick( e ));
    }
}

class Selection {
    constructor( editor, hotbar ){
        this.editor = editor;
        this.hotbar = hotbar;
        this.activeSelectionBackground = null;
        this.selectedEntity = null;
    }

    activateFirstSelectionBackground() {
        this.hotbar.getEntityInstances( {
            tile: {c:0, r:0},
            type: 'SelectionBackground'
        } )[0].mouseDownHandler();
    }

    setActiveSelectionBackground( selectionBackground ){
        if (this.activeSelectionBackground) {
            this.activeSelectionBackground.deactivate();
            this.selectedEntity = null;
        }
        if (selectionBackground) {
            selectionBackground.activate();
            this.selectedEntity = selectionBackground.otherEntity;
        }
        this.activeSelectionBackground = selectionBackground;
    }
}

const editorHelp = {
    english: 
    [
        {
            h3: 'Place Entities:',
            p: 'Select the entity in the selection bar, then click (or hold and drag) to place it'
        },
        {
            h3: 'Delete Entities:',
            p: 'Select the entity in the selection bar, then press ctrl and click (or hold and drag) to delete the entity'
        },
        {
            h3: 'Save:',
            p: 'All changes are automatically saved. Press the <i class="fas fa-clone"></i> icon to duplicate the current state of the Level'
        },
        {
            h3: 'Rename:',
            p: 'Press the <i class="fas fa-i-cursor"></i> icon to rename the level'
        },
        {
            h3: 'New Level:',
            p: 'To start creating a new level, press the <i class="fas fa-plus"></i> icon and choose a preset'
        },
        {
            h3: 'Unlock new entities:',
            p: 'Progress in the classic levels to unlock new entities in the editor'
        },
    ]
}

/***/ }),

/***/ "./src/ghosty/entities/background_tile.js":
/*!************************************************!*\
  !*** ./src/ghosty/entities/background_tile.js ***!
  \************************************************/
/*! exports provided: BackgroundTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundTile", function() { return BackgroundTile; });
/* harmony import */ var _griga_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../griga/entity */ "./src/griga/entity.js");


class BackgroundTile extends _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
  constructor( params, args ){
    super( {
      width: 0.25,
      height: 0.25,
      cOffset: Math.random()*3/4,
      rOffset: Math.random()*3/4,
      sceneLoadedSubscription: true,
    }, args );
    if (this.grid.name === 'editor') {
      this.subscribeToMouseDown('editor');
      this.subscribeToMouseEnter('editor');
    }
    this.type = params.type || Math.floor(Math.random()*8);
    this.currentImage = 'p' + this.type;
  }

  static get imgSources(){
    return { p0: './tile_img/red_flower.jpg',
             p1: './tile_img/orange_flower.jpg',
             p2: './tile_img/turquoise_flower.jpg',
             p3: './tile_img/light_blue_flower.jpg',
             p4: './tile_img/dark_blue_flower.jpg',
             p5: './tile_img/yellow_flower.jpg',
             p6: './tile_img/pink_flower.jpg',
             p7: './tile_img/purple_flower.jpg',};
  }

  mouseDownHandler( displayName, mouseC, mouseR, ctrlKey ){
    if (this.griga.ghosty.editor.popup) {return};

    if (this.griga.ghosty.editor.selection.selectedEntity) {
      const sameEntitiesOnTile = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:  this.griga.ghosty.editor.selection.selectedEntity.constructor.name});
      if (sameEntitiesOnTile.length === 0 && !ctrlKey) {
        const selectedEntity = this.griga.ghosty.editor.selection.selectedEntity;
        const entitiesOnTile = this.grid.getEntityInstances( {
          tile: {c:this.c, r:this.r},
          notType: 'BackgroundTile'
        } );
        if (!entitiesOnTile.map(e => e.allowPlacing( selectedEntity )).includes(false)) {
          if (selectedEntity.allowBeingPlaced( {c:this.c, r:this.r}, this.grid )) {
            const entity = this.grid.newEntityInstance(  selectedEntity.constructor.name, {}, {c:this.c,r:this.r});
            this.griga.ghosty.editor.sceneChangedHandler();
            entitiesOnTile.forEach( e => e.newEntityWasPlacedOnTile(entity) );
          }
        }
      } else if (sameEntitiesOnTile.length === 1 && ctrlKey) {
        sameEntitiesOnTile[0].beforeDelete();
        sameEntitiesOnTile[0].delete();
        const entitiesOnTile = this.grid.getEntityInstances( {
          tile: {c:this.c, r:this.r},
          notType: 'BackgroundTile'
        } );
        entitiesOnTile.forEach( e => e.entityOnSameTileWasDeleted(sameEntitiesOnTile[0]) );
        this.griga.ghosty.editor.sceneChangedHandler();
      }
    }
  }
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    if (mouseButtons) {
      this.mouseDownHandler( displayName, mouseC, mouseR, ctrlKey );
    }
  }

  sceneLoadedHandler(){
    if (this.grid.name !== 'play') {return};
    this.sceneChanged = false;
    if (this.c == 0 && this.r == 0) {//keyTrackTile
      this.griga.ghosty.play.keyTrackEntity = this;
      Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
        this.subscribeToKeyDown( key );
      } );
    }
  }

  keyDownHandler( key ){ //keyTrackTile
    const allEntities = this.grid.getEntityInstances( {
      notType: 'BackgroundTile'
    } );
    const taskDoneArray = allEntities.map( e => e.taskDone() );
    if (!taskDoneArray.includes( false )) {
      if (this.grid.getEntityInstances({type:'Goal'})) { //if there exists at least one goal
        this.griga.ghosty.play.levelDone();
      }
    }

    if (this.sceneChanged) {
      this.griga.ghosty.play.updateUndoHistory();
    }

    this.sceneChanged = false;
  }

  includeInSceneData() {
    return false;
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/ghosty.js":
/*!*******************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/ghosty.js ***!
  \*******************************************************/
/*! exports provided: Ghosty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ghosty", function() { return Ghosty; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class Ghosty extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 17 );
    if (this.grid.name === 'play') {
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach( key => this.subscribeToKeyDown(key));
    }
    this.validatedEntities = [];
    this.currentImage = params.facing || 'right';
  }

  static get imgSources(){
    return { right: './tile_img/ghosty_right.png',
             left: './tile_img/ghosty_left.png',
             up: './tile_img/ghosty_mid_right.png',
             down: './tile_img/ghosty_mid_left.png'};
  }

  getCurrentParams(){
    const params = _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"].prototype.getCurrentParams.call(this);
    params.facing = this.currentImage;
    return params;
  }

  keyDownHandler( key ){
    const direction = key.slice(5).toLowerCase();
    this.currentImage = direction;
    if (this.requestMove( direction )) {
      this.move( direction );
      this.griga.ghosty.play.keyTrackEntity.sceneChanged = true;
    }
  }

  validateMove( requestChain ){
    if (this.validatedEntities.includes( requestChain[requestChain.length-1][0] )){
      return true;
    }
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    }
    this.validatedEntities.push(requestChain[requestChain.length-1][0]);
    let success = this.requestMove( requestChain[requestChain.length-1][1] );
    this.validatedEntities = [];
    return success;
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/goal.js":
/*!*****************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/goal.js ***!
  \*****************************************************/
/*! exports provided: Goal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Goal", function() { return Goal; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class Goal extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 14 );
  }

  static get imgSources(){
    return { default: './tile_img/oil_lamp.png'};
  }

  allowMove(){
    return true;
  }

  taskDone() {
    let ghosties = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'Ghosty',
    } );
    if (ghosties[0]) {return Math.floor(ghosties[0].layer/10) === Math.floor( this.layer/10 )};
    return false;
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/hole.js":
/*!*****************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/hole.js ***!
  \*****************************************************/
/*! exports provided: Hole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hole", function() { return Hole; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class Hole extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 1 );
    if (this.grid.name === 'selection-hotbar') {return}

    this.holeLeft = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('left', 'modulo'), type:'Hole'})[0];
    this.holeRight = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('right', 'modulo'), type:'Hole'})[0];
    this.holeTop = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('top', 'modulo'), type:'Hole'})[0];
    this.holeBottom = this.grid.getEntityInstances(
      {tile: this.formatPositionAsAbsolutePosition('bottom', 'modulo'), type:'Hole'})[0];

    if (this.holeLeft) { this.holeLeft.setHole(this, 'Right')}
    else { this.borderLeft = this.grid.newEntityInstance('HoleBorder', {side:'left', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeRight) { this.holeRight.setHole(this, 'Left') }
    else { this.borderRight = this.grid.newEntityInstance('HoleBorder', {side:'right', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeTop) { this.holeTop.setHole(this, 'Bottom') }
    else { this.borderTop = this.grid.newEntityInstance('HoleBorder', {side:'top', hole:this}, {c:this.c,r:this.r} ) };
    if (this.holeBottom) { this.holeBottom.setHole(this, 'Top') }
    else { this.borderBottom = this.grid.newEntityInstance('HoleBorder', {side:'bottom', hole:this}, {c:this.c,r:this.r} ) };
  
    this.newEntityWasPlacedOnTile();
    this.subscribeToSceneLoaded();
  }

  static get imgSources(){
    return { default: './tile_img/hole_background.jpg'};
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Hole' );
    return levelIndex;
  }

  setHole( hole, side ){
    this[`hole${side}`] = hole;
    this[`border${side}`].delete();
    this[`border${side}`] = null;
  }

  removeHole( side ){
    this[`hole${side}`] = null;
    this[`border${side}`] = this.grid.newEntityInstance('HoleBorder', {side, hole:this}, {c:this.c,r:this.r} );
  }

  //should have the alias Update Which Entities are Down
  newEntityWasPlacedOnTile(){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    for (let layerDigit = 3; layerDigit < 10; layerDigit++) {
      const downEntity = entitiesOnTile.find( e => e.layer === layerDigit );
      const upEntities = entitiesOnTile.filter( e => e.layer === layerDigit + 10 );
      const upEntity = upEntities[upEntities.length-1];
      if ( !downEntity &&upEntity ){
        upEntity.moveDown();
      }
    }
  }

  taskDone(){
    this.newEntityWasPlacedOnTile();
    return true;
  }

  sceneLoadedHandler(){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    if ( entitiesOnTile[0] ){
      this.newEntityWasPlacedOnTile( entitiesOnTile[0] );
    }
  }

  beforeDelete(){
    Object.values( _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["directionToSide"] ).forEach( side => {
      if ( this[`border${side}`] ) {
        this[`border${side}`].delete();
      } else {
        this[`hole${side}`].removeHole( _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["oppositeSide"][side.toLowerCase()] );
      }
    } );
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes( e.constructor.name ) );
    for (let layerDigit = 3; layerDigit < 10; layerDigit++) {
      const downEntityOnTile = entitiesOnTile.find( e => e.layer === layerDigit);
      const upEntityOnTile = entitiesOnTile.find( e => e.layer === layerDigit + 10);
      if (downEntityOnTile) {
        if (upEntityOnTile) {
          downEntityOnTile.delete();
        } else {
          downEntityOnTile.moveUp();
        }
      }
    }
  }

  entityOnSameTileWasDeleted( deletedEntity ){
    this.newEntityWasPlacedOnTile();
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/hole_border.js":
/*!************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/hole_border.js ***!
  \************************************************************/
/*! exports provided: HoleBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoleBorder", function() { return HoleBorder; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class HoleBorder extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 2 );
    this.currentImage = params.side.toLowerCase() || 'top';
    this.hole = params.hole || null;
  }

  static get imgSources(){
    return { top: './tile_img/hole_border_top.png',
             right: './tile_img/hole_border_right.png',
             bottom: './tile_img/hole_border_bottom.png',
             left: './tile_img/hole_border_left.png'};
  }
  
  static getUnlockLevel( classicLevels ){
    return Infinity;
  }

  includeInSceneData(){
    return false;
  }

  allowLeave( requestChain ){
    const valid = _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["directionToSide"][requestChain[ requestChain.length-1 ][1]].toLowerCase() !== this.currentImage;
    const down = requestChain[ requestChain.length-1 ][0].layer === 7; //fix
    if (down && !valid) {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/stone.js":
/*!******************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/stone.js ***!
  \******************************************************/
/*! exports provided: Stone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stone", function() { return Stone; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class Stone extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 17 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/stone.jpg'};
  }

  allowPlacing(){
    return false;
  }

  allowBeingPlaced( tile, editorGrid ){
    const entitiesOnTile = editorGrid.getEntityInstances( {
      tile: tile
    } ).filter( e => !['BackgroundTile', 'Hole', 'HoleBorder'].includes(e.constructor.name) );
    if (entitiesOnTile.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/wooden_box.js":
/*!***********************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/wooden_box.js ***!
  \***********************************************************/
/*! exports provided: WoodenBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodenBox", function() { return WoodenBox; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class WoodenBox extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 17 );
    this.setWidth( 0.9 );
    this.setHeight( 0.9 );
    this.setCOffset( 0.05 );
    this.setROffset( 0.05 );
  }

  static get imgSources(){
    return { default: './tile_img/wooden_box.jpg'};
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Boxes' );
    return levelIndex;
  }

  allowMove(requestChain){
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    } else if (requestChain.length === 1) {
      return this.requestMove(requestChain[0][1], requestChain);
    } else {
      return false;
    }
  }

  entityWillMoveToTile( entity, direction ) {
    if ( this.layer === entity.layer ){
      this.move( direction );
    }
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entity.js":
/*!**********************************************!*\
  !*** ./src/ghosty/entities/ghosty_entity.js ***!
  \**********************************************/
/*! exports provided: directionToSide, oppositeDirection, oppositeSide, GhostyEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionToSide", function() { return directionToSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppositeDirection", function() { return oppositeDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppositeSide", function() { return oppositeSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GhostyEntity", function() { return GhostyEntity; });
/* harmony import */ var _griga_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../griga/entity */ "./src/griga/entity.js");


const directionToSide = {
  up: 'Top',
  down: 'Bottom',
  left: 'Left',
  right: 'Right'
}

const oppositeDirection = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
}

const oppositeSide = {
  bottom: 'Top',
  top: 'Bottom',
  right: 'Left',
  left: 'Right',
}

class GhostyEntity extends _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
  constructor( params, args, layer = 1 ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    const superParams = {layer};
    if (params.layerAddend) { superParams.layer += params.layerAddend };
    super( superParams, args );
    this.widthMultiplier = 1;
    this.heightMultiplier = 1;
    this.layerAddend = params.layerAddend || 0;
    this.basisWidth = this.width;
    this.basisHeight = this.height;
    this.basisCOffset = this.cOffset;
    this.basisROffset = this.rOffset;
    this.basisLayer = layer;
    this.movedVertically = 0;
    this.addWidthMultiplier( params.widthMultiplier || 1 );
    this.addHeightMultiplier( params.heightMultiplier || 1 );
    if (this.grid.name === 'selection-hotbar') {
      this.selectionBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'SelectionBackground'})[0];
      this.selectionBackground.setOtherEntity( this );
    }
  }

  static getUnlockLevel( classicLevels ){
    return 0;
  }

  getCurrentParams(){
    return {
      widthMultiplier: this.widthMultiplier,
      heightMultiplier: this.heightMultiplier,
      layerAddend: this.layerAddend
    }
  }

  moveUp(){
    this.movedVertically++;
    this.addHeightMultiplier( 16/14 );
    this.addWidthMultiplier( 16/14 );
    this.addLayerAddend( +10 );
  }

  moveDown(){
    this.movedVertically--;
    this.addHeightMultiplier( 14/16 );
    this.addWidthMultiplier( 14/16 );
    this.addLayerAddend( -10 );
  }

  addWidthMultiplier( multiplier ){
    this.widthMultiplier *= multiplier;
    this.setWidth( this.basisWidth );
    this.setCOffset( this.basisCOffset );
  }

  addHeightMultiplier( multiplier ){
    this.heightMultiplier *= multiplier;
    this.setHeight( this.basisHeight );
    this.setROffset( this.basisROffset );
  }

  addLayerAddend( addend ){
    this.layerAddend += addend;
    this.changeLayer( this.basisLayer );
  }

  setWidth( width ){
    this.basisWidth = width;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setWidth.call( this, width*this.widthMultiplier);
  }

  setHeight( height ){
    this.basisHeight = height;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setHeight.call( this, height*this.heightMultiplier );
  }

  setCOffset( cOffset ){
    this.basisCOffset = cOffset;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setCOffset.call( this, cOffset + (1-this.widthMultiplier)/2 );
  }

  setROffset( rOffset ){
    this.basisROffset = rOffset;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setROffset.call( this, rOffset + (1-this.heightMultiplier)/2 );
  }

  changeLayer( layer ){
    this.basisLayer = layer;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.changeLayer.call( this, layer + this.layerAddend );
  }

  move( direction, autoanimate = true ) {
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnNewTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const entitiesOnThisTile = this.grid.getEntityInstances( {
      tile: { c:this.c, r:this.r },
      notType: 'BackgroundTile'
    } );
    entitiesOnNewTile.forEach( entity => {
      entity.entityWillMoveToTile( this, direction );
    } );
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.move.call( this, absPos );
    entitiesOnNewTile.forEach( entity => {
      entity.entityMovedToTile( this, direction );
    } );
    entitiesOnThisTile.forEach( entity => {
      entity.entityWillLeaveTile( this, direction );
    } );
    entitiesOnThisTile.forEach( entity => {
      entity.entityLeftTile( this, direction );
    } );
    if (autoanimate) {
      if ( !this.renderStartSubscription ){
        this.subscribeToRenderStart();
        this.cOffsetBeforeMove = this.basisCOffset;
        this.rOffsetBeforeMove = this.basisROffset;
        this.widthBeforeMove = this.basisWidth;
        this.heightBeforeMove = this.basisHeight;
      } else {
        this.resetOffsetToBeforeMove();
      }
      this.lastMoveTime = performance.now();
      this.lastMoveDirection = direction;
    }
  }

  requestMove( direction, requestChain = [] ) {
    requestChain.push([this, direction]);
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const entitiesOnNewTile = this.grid.getEntityInstances( {
      tile: absPos,
      notType: 'BackgroundTile'
    } );
    const entitiesOnThisTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => e !== this && e.constructor.name !== 'BackgroundTile' );
    const sucesses = entitiesOnNewTile.map( e => e.validateMove([...requestChain]) );
    const leaveSucesses = entitiesOnThisTile.map( e => e.allowLeave([...requestChain]) );
    if (sucesses.includes( false ) || leaveSucesses.includes( false )) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * validates a move in the given direction. Should only be called from GhostyEntity.startMove;
   * @param {*} requestChain 
   */
  validateMove( requestChain ){
    //avoid overflow, just allow move
    if (requestChain.map( a => a[0] ).includes( this )) {
      return true;
    }
    //add the stack-on-top-behavior for all layer 17 entities (exept ghosties maybe)
    if ( this.layer === 7 && requestChain[requestChain.length-1][0].layer === 17 ){
      return true;
    }
    const allowMove = this.allowMove( requestChain );
    return allowMove;
  }

  resetOffsetToBeforeMove(){
    this.setCOffset( this.cOffsetBeforeMove );
    this.setROffset( this.rOffsetBeforeMove );
  }

  moveOffsetFunction( timeSinceLastMove, moveDuration ){
    const offset = 1 - Math.sqrt( timeSinceLastMove/moveDuration );
    return offset;
  }

  setMoveAnimationOffset( timeSinceLastMove, duration ){
    const absOffset = this.moveOffsetFunction( timeSinceLastMove, duration );
    if (absOffset <= 0) {
      this.resetOffsetToBeforeMove();
      return true;
    }
    else if (this.lastMoveDirection === 'right'){ this.setCOffset( -absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'left'){ this.setCOffset( absOffset+this.cOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'up'){ this.setROffset( absOffset+this.rOffsetBeforeMove ) }
    else if (this.lastMoveDirection === 'down'){ this.setROffset( -absOffset+this.rOffsetBeforeMove ) };
  }

  resetSizeToBeforeMove(){
    this.setHeight( this.heightBeforeMove );
    this.setWidth( this.widthBeforeMove );
    this.movedVertically = 0;
  }

  verticalMoveSizeFunction( timeSinceAnimationStart, duration ){
    const startFactor = Math.pow(14/16, this.movedVertically);
    const startWidth = this.widthBeforeMove * startFactor;
    const startHeight = this.heightBeforeMove * startFactor;
    const width = startWidth + (this.widthBeforeMove - startWidth)*Math.pow( timeSinceAnimationStart/duration, 2 );
    const height = startHeight + (this.heightBeforeMove - startHeight)*Math.pow( timeSinceAnimationStart/duration, 2 );
    return [ width, height ];
  }

  setVerticalMoveAnimationSize( timeSinceAnimationStart, duration ) {
    const [ width, height ] = this.verticalMoveSizeFunction( timeSinceAnimationStart, duration );
    if ( timeSinceAnimationStart > duration ){
      this.resetSizeToBeforeMove()
      return true;
    } else {
      this.setWidth( width );
      this.setHeight( height );
      this.setCOffset( (1-width)/2 );
      this.setROffset( (1-height)/2 );
    }
  }

  renderStartHandler(){
    const timeSinceLastMove = performance.now() - this.lastMoveTime;
    if (this.setMoveAnimationOffset(timeSinceLastMove, 100)) { //is called unnessecarily often
      if (this.setVerticalMoveAnimationSize( timeSinceLastMove - 100, 100 )) {
        this.unsubscribeFromRenderStart();
      }
    }
  }

  /**
   * checks if the requested move is valid. Should be overwritten by Child. Returns allowMove
   * @param {*} requestChain 
   * @param {*} direction 
   * @returns {boolean}
   */
  allowMove( requestChain ){
    return requestChain[ requestChain.length-1 ][0].layer !== this.layer;
  }

  
  allowLeave( requestChain ){
    return true;
  }

  allowPlacing( entity ){
    return entity.layer !== this.layer;
  }

  allowBeingPlaced( tile, editorGrid ){
    return true;
  }

  beforeDelete(){
    //doSomething
  }

  entityOnSameTileWasDeleted( deletedEntity ){
    //doSomething
  }

  entityWillLeaveTile( entity, direction ){
    //doSomething
  }

  entityLeftTile( entity, direction ){
    //doSomething
  }

  entityWillMoveToTile( entity, direction ) {
    //doSomething
  }

  entityMovedToTile( entity, direction ) {
    //doSomething
  }

  //for levelDone check
  taskDone() {
    return true;
  }

  newEntityWasPlacedOnTile( entity ) {
    //doSomething
  }
}

/***/ }),

/***/ "./src/ghosty/entities/selection_background.js":
/*!*****************************************************!*\
  !*** ./src/ghosty/entities/selection_background.js ***!
  \*****************************************************/
/*! exports provided: SelectionBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBackground", function() { return SelectionBackground; });
/* harmony import */ var _griga_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../griga/entity */ "./src/griga/entity.js");


class SelectionBackground extends _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"] {
  constructor( params, args ){
    super( {
      mouseDownSubscriptions: ['selection'],
    }, args );
    this.otherEntity = null;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: '',
             active: './tile_img/selection_background_active_gen_2.jpg'
    };
  }

  setOtherEntity( entityInstance ){
    this.otherEntity = entityInstance;
    entityInstance.addWidthMultiplier( 0.8 );
    entityInstance.addHeightMultiplier( 0.8 );
  }

  activate(){
    this.currentImage = 'active';
  }

  deactivate(){
    this.currentImage = 'deactive';
  }

  mouseDownHandler(){
    if (this.otherEntity) {
      if (this.currentImage === 'deactive') {
        this.griga.ghosty.editor.selection.setActiveSelectionBackground( this );
      }
      else if (this.currentImage === 'active') {
        this.griga.ghosty.editor.selection.setActiveSelectionBackground( null );
      }
    }
  }

  updateSize( entityOnTop ){
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setCOffset.call( entityOnTop, this.cOffset + this.width*0.1 );
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setROffset.call( entityOnTop, this.cOffset + this.height*0.1 );
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setWidth.call( entityOnTop, this.width*0.8 );
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setHeight.call( entityOnTop, this.height*0.8 );
  }
}

/***/ }),

/***/ "./src/ghosty/home.js":
/*!****************************!*\
  !*** ./src/ghosty/home.js ***!
  \****************************/
/*! exports provided: Home, homeHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeHelp", function() { return homeHelp; });
class Home {
  constructor( app ){
    this.app = app;
    this.griga = this.app.griga;
  }

  start(){
    this.app.home_button.classList.add('active');
    this.app.home_screen.classList.remove('hidden');
    this.app.state = 'home';
    this.app.style.resizeWrapper();
  }

  end(){
    if (this.popup) {this.closePopup()};
    this.app.home_button.classList.remove('active');
    this.app.home_screen.classList.add('hidden');
  }

  closePopup(){
    this.popup.close();
    this.popup = null;
  }
}

const homeHelp = {
  english: 
  [
    {
      h3: null,
      p: 'Ghosty was developed by Tom Kopolt. \n Current Version: 1.0.0'
    }
  ]
}

/***/ }),

/***/ "./src/ghosty/level/all_classic_levels.json":
/*!**************************************************!*\
  !*** ./src/ghosty/level/all_classic_levels.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Introduction\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Space Invadors\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Boxes\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Fun\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Grid\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Goal\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]]]}},{\"name\":\"Two?!\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Rescue Me!\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Two Ghosties Practise\",\"difficulty\":\"intermediate\",\"creator\":\"Max\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[]],[[],[],[[\"Stone\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"position: relative;\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Stone\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Chaos\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole Again\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"M\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Goal\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]]]}},{\"name\":\"Bridge\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[]],[[[\"Goal\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]],[[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[]]]}},{\"name\":\"Two Spirals\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}],[\"Goal\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"I'll let you take the win\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Goal\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]]]}},{\"name\":\"Small order\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Goal\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[],[],[],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"WoodenBox\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]]]}},{\"name\":\"Piggyback\",\"difficulty\":\"intermediate\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[[\"Goal\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Ghosty\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]],[[],[],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[[\"Hole\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]],[],[],[],[],[[\"Stone\",{\"widthMultiplier\":1,\"heightMultiplier\":1,\"layerAddend\":0}]]]]}},{\"name\":\"2x Ghosty, 2x Box\",\"difficulty\":\"hard\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[[\"Ghosty\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[[\"Goal\",{}]],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"End (new levels soon!)\",\"difficulty\":\"impossible\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]]],[[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]]]]}}]");

/***/ }),

/***/ "./src/ghosty/level/presets.json":
/*!***************************************!*\
  !*** ./src/ghosty/level/presets.json ***!
  \***************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Empty\",\"difficulty\":\"preset\",\"creator\":\"Ghosty\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Wall Around\",\"difficulty\":\"preset\",\"creator\":\"Ghosty\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}}]");

/***/ }),

/***/ "./src/ghosty/levels.js":
/*!******************************!*\
  !*** ./src/ghosty/levels.js ***!
  \******************************/
/*! exports provided: Levels, levelsHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelsHelp", function() { return levelsHelp; });
/* harmony import */ var _level_all_classic_levels_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level/all_classic_levels.json */ "./src/ghosty/level/all_classic_levels.json");
var _level_all_classic_levels_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./level/all_classic_levels.json */ "./src/ghosty/level/all_classic_levels.json", 1);
/* harmony import */ var _level_presets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level/presets.json */ "./src/ghosty/level/presets.json");
var _level_presets_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./level/presets.json */ "./src/ghosty/level/presets.json", 1);
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./src/ghosty/popup.js");




class Levels {
  constructor( app ){
    this.app = app;
    this.griga = this.app.griga;
    this.grid = this.griga.grids['preview'];
    this.levels = {
      classic: _level_all_classic_levels_json__WEBPACK_IMPORTED_MODULE_0__,
      yourLevels: this.app.localStorage.getYourLevels(),
      presets: _level_presets_json__WEBPACK_IMPORTED_MODULE_1__,
    }
    this.levels_container = document.querySelector('.levels-container');
    this.classic_button = document.getElementById('classic-button');
    this.yourLevels_button = document.getElementById('your-levels-button');
    this.presets_button = document.getElementById('presets-button');
    this.detailsLevelIndex = null;

    this.levels_container.addEventListener('mousedown', e => this.handleLevelsContainerClick( e ));
    this.classic_button.addEventListener('click', e => this.changeState('classic'));
    this.yourLevels_button.addEventListener('click', e => this.changeState('yourLevels'));
    this.presets_button.addEventListener('click', e => this.changeState('presets'));

    this.app.localStorage.setupLevelSolvedForCategory('classic');
    this.app.localStorage.setupLevelSolvedForCategory('yourLevels');
    this.app.localStorage.setupLevelSolvedForCategory('presets');
    this.getClassicLevelsHighestLevelIndex();
  }

  start( category = 'classic', levelIndex) {
    this.app.state = 'levels';
    this.app.levels_screen.classList.remove('hidden');
    this.app.levels_button.classList.add('active');
    this.detailsLevelIndex = levelIndex ||  this.levels[ category ].length-1 ;
    this.changeState( category, this.detailsLevelIndex );
    this.app.style.resizeWrapper();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
  }

  end() {
    if (this.popup) {
      this.popup.close();
      this.popup = null;
    };
    this.hideLevelDetails();
    this.app.levels_screen.classList.add('hidden');
    this.app.levels_button.classList.remove('active');
    this[this.state+'_button'].classList.remove('active');
    this.deleteDisplays();
    const oldState = this.state;
    this.state = null;
    return oldState;
  }

  changeState( state, detailsLevelIndex) {
    if (this.state) {
      this[this.state+'_button'].classList.remove('active');
      this.hideLevelDetails();
      this.deleteDisplays();
    }
    this.state = state;
    this[this.state+'_button'].classList.add('active');
    this.clearLevelsContainer();
    this.fillLevelsContainer();
    this.detailsLevelIndex = detailsLevelIndex || this.levels[ this.state ].length-1;
    if (this.state === 'classic') {this.detailsLevelIndex = this.classicHighestLevelIndex};
    if (this.detailsLevelIndex !== -1 ) {
      this.showLevelDetails( this.detailsLevelIndex );
    }
    this.app.style.setScrollbarHeight();
    if (this.detailsLevelIndex !== -1 ) {
      this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
    }
  }

  getClassicLevelsHighestLevelIndex(){
    const classicHighestLevelName = this.app.localStorage.getHighestLevel('classic') || 'Introduction';
    const classicHighestLevel = this.levels['classic'].find( l => l.name === classicHighestLevelName );
    this.classicHighestLevelIndex = this.levels['classic'].indexOf( classicHighestLevel );
  }

  levelDone( levelIndex ){
    this.app.localStorage.saveLevelSolved( this.levels['classic'][levelIndex].name, 'classic' );
    if ( levelIndex === this.classicHighestLevelIndex ) {
      this.classicHighestLevelIndex++;
      this.app.localStorage.saveHighestLevel( this.levels['classic'][this.classicHighestLevelIndex].name, 'classic' );
    }
  }

  getLevelHtmlString(level, i){

    let solvedString = ['unsolved','solved'][0+this.app.localStorage.getLevelSolved( level.name, this.state )];

    let levelBarButtonsString = `<div class="level-play-button button ${solvedString}" data-level="${i}"><i class="fas fa-play"></i></div>`;
    if (this.state === 'presets') {
      levelBarButtonsString = `<div class="button level-edit-button" data-index="${i}"><i class="fas fa-pen"></i></div>`;
    }

    let editorButtonContainer = '';
    if (this.state === 'yourLevels') {
      editorButtonContainer = `
      <div class="editor-buttons-container">
          <div class="button level-edit-button" data-index="${i}"><i class="fas fa-pen"></i></div>
          <div class="button level-delete-button" data-index="${i}"><i class="fas fa-trash"></i></div>
      </div>
      `;
    }

    return `
    <div class="level-bar">
        <div class="level-name button">${level.name}</div>
        ${levelBarButtonsString}
    </div>
    <div class="level-details level-bar hidden" id="level-details-${i}" data-index="${i}">
        <div class="display preview-display" id="preview-display-${i}"></div>
        <div class="item preview-details-container">
            <div class="preview-difficulty-line preview-line">difficulty: <span class="difficulty-${i}">${level.difficulty}</span></div>
            <div class="preview-creator-line preview-line">creator: <span class="creator-${i}">${level.creator}</span></div>
        </div>
        ${editorButtonContainer}
        </div>
    </div>
    `;
  }

  deleteDisplays(){
    Object.keys(this.griga.displays).filter( k => k.slice(0, 12) === 'play-preview' ).forEach( d => {
      this.griga.deleteDisplay( d );
    } );
    this.detailsLevelIndex = null;
  }

  clearLevelsContainer(){
    this.levels_container.innerHTML = '';
  }

  fillLevelsContainer(){
    if (this.state === 'classic') {
      for (let levelIndex = 0; levelIndex <= this.classicHighestLevelIndex; levelIndex++) {
        const level = this.levels[this.state][levelIndex];
        this.insertNewLevelInLevelContainer( level, levelIndex );
      }
    } else {
      this.levels[this.state].forEach( (level, i) => {
        this.insertNewLevelInLevelContainer( level, i );
      } );
    }
  }

  insertNewLevelInLevelContainer( level, i ){
    const htmlString = this.getLevelHtmlString( level, i );
    this.levels_container.insertAdjacentHTML('beforeend', htmlString);
    this.griga.newDisplay( 'play-preview-'+i, 'preview-display-'+i, this.grid.columns/this.grid.rows );
  }

  removeLevelFromLevelsContainer( levelIndex ){
    const levelDetails = document.getElementById('level-details-'+levelIndex);
    const levelBar = levelDetails.previousElementSibling;
    this.griga.deleteDisplay( 'play-preview-'+levelIndex );
    levelDetails.remove();
    levelBar.remove();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPos( this.app.style.scrollPos );
  }
  
  showLevelDetails( detailsLevelIndex ){
    this.detailsLevelIndex = detailsLevelIndex;
    const levelDetailsBar = document.getElementById('level-details-'+ detailsLevelIndex);
    levelDetailsBar.classList.remove('hidden');
    this.griga.displayGrid('play-preview-'+detailsLevelIndex, 'preview', this.app.displaySettings);
    this.grid.loadScene( this.app.backgroundTileScene );
    this.grid.loadScene( this.levels[this.state][ this.detailsLevelIndex ].sceneData );
    this.griga.resizeDisplays();
    this.app.style.setScrollbarHeight();
    this.app.style.setScrollPosToLevel( this.detailsLevelIndex );
  }

  hideLevelDetails(){
    if ((this.detailsLevelIndex || this.detailsLevelIndex === 0) && this.detailsLevelIndex !== -1) {
        const levelDetailsBar = document.getElementById('level-details-'+this.detailsLevelIndex);
        levelDetailsBar.classList.add('hidden');
        this.griga.removeGridFromDisplay('preview', 'play-preview-'+this.detailsLevelIndex);
        this.grid.clearScene();
        this.detailsLevelIndex = null;
    }
  }

  deleteLevel( levelIndex ){
    this.app.localStorage.deleteLevel( this.levels['yourLevels'][levelIndex].name );
    this.hideLevelDetails();
    this.levels[this.state].splice( levelIndex, 1 );
    this.removeLevelFromLevelsContainer( levelIndex );
    this.clearLevelsContainer();
    this.fillLevelsContainer();
    this.popup = null;
  }

  handleLevelNameClicked( target ){
    const levelDetailsBar = target.parentElement.nextElementSibling;
    if (levelDetailsBar.classList.contains('hidden')) {
      this.hideLevelDetails();
      this.showLevelDetails( parseInt(levelDetailsBar.getAttribute('data-index')) );
    } else {
      if (this.state === 'presets') {
        this.handleLevelEditButtonClicked( target.nextElementSibling );
      } else {
        this.handleLevelPlayButtonClicked( target.nextElementSibling );
      }
    }
  }

  handleLevelPlayButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-level'));
    const oldState = this.end();
    this.app.play.start( this.levels[oldState][levelIndex], oldState, levelIndex );
  }

  handleLevelEditButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    const oldState = this.end();
    this.app.editor.start( this.levels[oldState][levelIndex], oldState, levelIndex );
  }

  handleLevelDeleteButtonClicked( target ){
    const levelIndex = parseInt(target.getAttribute('data-index'));
    this.popup = new _popup__WEBPACK_IMPORTED_MODULE_2__["Popup"]( 'preview-display-'+levelIndex, 'Are you Sure?',
    [
      {id: 'popup-play-again', text: 'Cancel', click: () => this.closePopup()},
      {id: 'popup-next-level', text: 'Delete', click: () => this.deleteLevel( levelIndex )}
    ] );
  }

  closePopup(){
    this.popup.close();
    this.popup = null;
  }

  handleLevelsContainerClick( e ){
    if (e.target.classList.contains('level-name')) {
      this.handleLevelNameClicked( e.target );
    } else if (e.target.classList.contains('level-play-button')) {
      this.handleLevelPlayButtonClicked( e.target );
    } else if (e.target.classList.contains('level-edit-button')) {
      this.handleLevelEditButtonClicked( e.target );
    } else if (e.target.classList.contains('level-delete-button')) {
      this.handleLevelDeleteButtonClicked( e.target );
    }
  }

  renameLevel( levelIndex, name, difficulty, creator ){
    this.levels['yourLevels'][ levelIndex ].creator = creator;
    this.levels['yourLevels'][ levelIndex ].difficulty = difficulty;
    this.levels['yourLevels'][ levelIndex ].name = this.app.localStorage.renameLevel( //might add numbers to level name;
      this.levels['yourLevels'][ levelIndex ].name,
      name,
      difficulty,
      creator
    );
  }

  updateLevel( levelIndex ){
    this.app.localStorage.saveLevel( this.levels['yourLevels'][levelIndex] );
    this.app.localStorage.removeLevelSolved( this.levels['yourLevels'][levelIndex].name, 'yourLevels' );
  }

  newLevel( name, difficulty, creator, sceneData ){
    let level = new GhostyLevel( name, difficulty, creator, sceneData );
    level = this.app.localStorage.saveNewLevel( level ); //might add numbers to level name;
    this.levels['yourLevels'].push(level);
    return [ level, 'yourLevels', this.levels['yourLevels'].length-1 ];
  }
}

class GhostyLevel {
  constructor( name, difficulty, creator, sceneData ){
    this.name = name;
    this.difficulty = difficulty;
    this.creator = creator;
    this.sceneData = sceneData;
  }
}

const levelsHelp = {
  english:
  [
      {
          h3: 'Here are all levels:',
          p: 'Switch between categories in the bar on top',
      },
      {
          h3: 'The blue play button',
          p: 'means you haven\'t solved the level yet'
      }
  ]
}

/***/ }),

/***/ "./src/ghosty/local_storage.js":
/*!*************************************!*\
  !*** ./src/ghosty/local_storage.js ***!
  \*************************************/
/*! exports provided: LocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorage", function() { return LocalStorage; });
class LocalStorage {
  constructor( app ){
    this.app = app;
    if (!localStorage.getItem('ghosty-all-your-level-names')) {
      localStorage.setItem('ghosty-all-your-level-names', '[]');
    }
    if (!localStorage.getItem(`ghosty-highest-levels:`)) {
      localStorage.setItem(`ghosty-highest-levels:`, '{}');
    }
  }

  setupLevelSolvedForCategory( category ){
    if (!localStorage.getItem(`ghosty-levels-solved-in:${category}`)) {
      localStorage.setItem(`ghosty-levels-solved-in:${category}`, '[]');
    }
  }

  // if the level.name exists, it increments index until the level.name does not exist
  renameLevel( oldName, newName, difficulty, creator, index = 0 ){
    let indexString = '';
    if (index) { indexString = ` ${index}` }
    const newItemKey = `ghosty-your-level:${newName+indexString}`;
    if (localStorage.getItem(newItemKey) && oldName !== newName) {
      return this.renameLevel( oldName, newName, difficulty, creator, index+1 );
    } else {
      const oldItemKey = `ghosty-your-level:${oldName}`;
      const level = JSON.parse(localStorage.getItem(oldItemKey));
      level.name = newName+indexString;
      level.difficulty = difficulty;
      level.creator = creator;
      const levelString = JSON.stringify(level);
      localStorage.setItem( newItemKey, levelString );
      if (oldName !== newName) {
        localStorage.removeItem( oldItemKey );
      }
      const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
      const index = allLevelNames.indexOf(oldName);
      allLevelNames.splice(index, 1, newName+indexString);
      localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
      return level.name;
    }
  }

  saveLevel( level ){
    const itemKey = `ghosty-your-level:${level.name}`;
    const levelString = JSON.stringify(level);
    localStorage.setItem( itemKey, levelString );
  }

  // if the level.name exists, it increments index until the level.name does not exist
  saveNewLevel( level, index = 0 ){
    let indexString = '';
    if (index) { indexString = ` ${index}` }
    const itemKey = `ghosty-your-level:${level.name+indexString}`;
    if (localStorage.getItem(itemKey)) {
      return this.saveNewLevel( level, index+1 );
    } else {
      level.name += indexString;
      const levelString = JSON.stringify(level);
      localStorage.setItem( itemKey, levelString );
      const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
      allLevelNames.push(level.name);
      localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
      return level;
    }
  }

  getYourLevels(){
    const yourLevels = [];
    const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
    allLevelNames.forEach( levelName => {
      const level = JSON.parse( localStorage.getItem(`ghosty-your-level:${levelName}`) );
      yourLevels.push( level );
    } );
    return yourLevels;
  }

  deleteLevel( levelName ){
    const allLevelNames = JSON.parse(localStorage.getItem('ghosty-all-your-level-names'));
    const index = allLevelNames.indexOf( levelName );
    allLevelNames.splice( index, 1 );
    localStorage.setItem( 'ghosty-all-your-level-names', JSON.stringify(allLevelNames) );
    localStorage.removeItem(`ghosty-your-level:${levelName}`);
    this.removeLevelSolved( levelName, 'yourLevels' );
  }

  saveLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    if (!solvedLevels.includes(levelName)) {
      solvedLevels.push( levelName );
      localStorage.setItem( `ghosty-levels-solved-in:${category}`, JSON.stringify( solvedLevels ) );
    }
  }

  removeLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    if (solvedLevels.includes(levelName)) {
      solvedLevels.splice( solvedLevels.indexOf( levelName ) );
      localStorage.setItem( `ghosty-levels-solved-in:${category}`, JSON.stringify( solvedLevels ) );
    }
  }

  getLevelSolved( levelName, category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    return solvedLevels.includes( levelName );
  }

  getNumberOfLevelsSolved( category ){
    const solvedLevels = JSON.parse(localStorage.getItem(`ghosty-levels-solved-in:${category}`));
    return solvedLevels.length;
  }

  saveHighestLevel( levelName, category ){
    const highestLevel = JSON.parse(localStorage.getItem('ghosty-highest-levels:'));
    highestLevel[category] = levelName;
    localStorage.setItem( 'ghosty-highest-levels:', JSON.stringify( highestLevel ) );
  }

  getHighestLevel( category ){
    const highestLevel = JSON.parse(localStorage.getItem('ghosty-highest-levels:'));
    return highestLevel[category];
  }
}

/***/ }),

/***/ "./src/ghosty/play.js":
/*!****************************!*\
  !*** ./src/ghosty/play.js ***!
  \****************************/
/*! exports provided: Play, playHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Play", function() { return Play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playHelp", function() { return playHelp; });
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/ghosty/popup.js");


class Play {
    constructor( app, griga ){
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['play'];
        this.play_level_name = document.getElementById('play-level-name');
        this.previous_level_button = document.getElementById('previous-level-button');
        this.next_level_button = document.getElementById('next-level-button');
        this.play_restart_button = document.getElementById('play-restart-button');
        this.play_undo_button = document.getElementById('play-undo-button');
        this.play_edit_button = document.getElementById('play-edit-button');
        this.levelIndex = this.app.levels.classicHighestLevelIndex;
        this.category = 'classic';
        this.level = this.app.levels.levels[this.category][this.levelIndex];
        this.state = null;
        this.keyTrackEntity = null;
        this.undoHistory = [];

        this.setupEventListeners();
    }

    startGame(){
        this.griga.displayGrid('play', 'play', this.app.displaySettings);
    }

    start( level, category, levelIndex ){
        this.app.play_button.classList.add('active');
        this.app.play_screen.classList.remove('hidden');
        this.state = 'play';
        this.app.state = 'play';
        this.loadLevel( level, category, levelIndex );
        if ( this.category === 'yourLevels' ) {
            this.previous_level_button.classList.add('hidden');
            this.next_level_button.classList.add('hidden');
            this.play_edit_button.classList.remove('hidden');
        } else if ( this.category === 'classic' ) {
            this.previous_level_button.classList.remove('hidden');
            this.next_level_button.classList.remove('hidden');
            this.play_edit_button.classList.add('hidden');
        }
        this.app.style.resizeWrapper();
        this.griga.resizeDisplays();
    }

    end(){
        if (this.popup) {this.closePopup()};
        this.state = null;
        this.clearLevel();
        this.app.play_button.classList.remove('active');
        this.app.play_screen.classList.add('hidden');
    }

    loadLevel( level = this.level, category = this.category, levelIndex = this.levelIndex) {
        this.level = level;
        this.category = category;
        this.levelIndex = levelIndex;
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.level.sceneData );
        this.undoHistory.push( this.level.sceneData );
        this.play_level_name.innerHTML = this.level.name;
        this.updateNextPreviousLevelButtons();
    }

    updateNextPreviousLevelButtons(){
        if ( this.category === 'classic' ) {
            if ( this.levelIndex === this.app.levels.classicHighestLevelIndex ) {
                this.next_level_button.classList.add('disabled');
            } else {
                this.next_level_button.classList.remove('disabled');
            }
            if ( this.levelIndex === 0 ) {
                this.previous_level_button.classList.add('disabled');
            } else {
                this.previous_level_button.classList.remove('disabled');
            }
        }
    }

    clearLevel() {
        this.grid.clearScene();
        this.undoHistory = [];
    }

    levelDone() {
        if (this.popup) {return};
        this.app.levels.levelDone( this.levelIndex );
        this.updateNextPreviousLevelButtons();
        let nextButtonText = 'Next level';
        if (this.category === 'yourLevels') { nextButtonText = 'Edit' };
        this.popup = new _popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]( 'play-display', 'Level Done!',
        [
            {id: 'popup-play-again', text: 'Play again', click: () => this.handlePopupPlayAgainClick()},
            {id: 'popup-next-level', text: nextButtonText, click: () => this.handlePopupNextLevelClick()}
        ] );
    }

    updateUndoHistory() {
        this.undoHistory.push( this.grid.getCurrentSceneData() );
    }

    closePopup(){
        this.popup.close();
        this.popup = null;
    }

    handlePopupNextLevelClick() {
        if (this.category === 'classic') {
            this.handleNextLevelButtonClick();
        } else if (this.category === 'yourLevels') {
            this.handlePlayEditButtonClick();
        }
    }

    handlePopupPlayAgainClick() {
        this.handlePlayRestartButtonClicked();
    }

    handlePreviousLevelButtonClick( e ){
        if (this.popup) {this.closePopup()};
        if (this.previous_level_button.classList.contains('disabled')) {return};
        if (this.levelIndex !== 0) {
            this.level = this.app.levels.levels[this.category][--this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handleNextLevelButtonClick(){
        if (this.popup) {this.closePopup()};
        if (this.next_level_button.classList.contains('disabled')) {return};
        if (this.levelIndex !== this.app.levels.levels[this.category].length-1) {
            this.level = this.app.levels.levels[this.category][++this.levelIndex];
            this.clearLevel();
            this.loadLevel();
        }
    }

    handlePlayLevelNameClick( e ){
        this.end();
        this.app.levels.start( this.category, this.levelIndex );
    }

    handlePlayRestartButtonClicked(){
        if (this.popup) {this.closePopup()};
        this.clearLevel();
        this.loadLevel();
    }

    handlePlayUndoButtonClick( e ){
        if (this.undoHistory.length === 1){return};
        if (this.popup) {this.closePopup()};
        this.undoHistory.pop();
        this.grid.clearScene();
        this.grid.loadScene( this.app.backgroundTileScene );
        this.grid.loadScene( this.undoHistory[ this.undoHistory.length-1 ] );
    }

    handlePlayEditButtonClick(){
        this.end();
        this.app.editor.start( this.level, this.category, this.levelIndex );
    }

    setupEventListeners(){
        this.previous_level_button.addEventListener('click', e => this.handlePreviousLevelButtonClick( e ));
        this.next_level_button.addEventListener('click', e => this.handleNextLevelButtonClick( e ));
        this.play_level_name.addEventListener('click', e => this.handlePlayLevelNameClick( e ));
        this.play_restart_button.addEventListener('click', e => this.handlePlayRestartButtonClicked( e ));
        this.play_undo_button.addEventListener('click', e => this.handlePlayUndoButtonClick( e ));
        this.play_edit_button.addEventListener('click', e => this.handlePlayEditButtonClick( e ));
    }
}

const playHelp = {
    english: 
    [
        {
            h3: 'How to move:',
            p: 'Use the arrow keys on your keyboard'
        },
        {
            h3: 'Undo:',
            p: 'Press the <i class="fas fa-undo"></i> icon to undo the last move'
        },
        {
            h3: 'Restart:',
            p: 'Press the <i class="fas fa-fast-backward"></i> icon to restart the level'
        },
    ]
}

/***/ }),

/***/ "./src/ghosty/popup.js":
/*!*****************************!*\
  !*** ./src/ghosty/popup.js ***!
  \*****************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
class Popup {
  constructor( displayId, message, buttons, inputFields, h3Text, pText) {
    this.display = document.getElementById(displayId);
    this.message = message || 'Hello World!';
    this.buttonsData = buttons || [];
    this.inputFields = inputFields || [];
    this.h3Text = h3Text;
    this.pText = pText;

    this.popupHTMLString = '';
    this.generatePopupHTMLString();
    this.display.insertAdjacentHTML('beforeEnd', this.popupHTMLString);
    this.setupButtonListeners();
  }

  generatePopupHTMLString() {
    let popupTextHTML = '';
    if ( this.h3Text || this.pText ) {
      let h3TextHTML = '';
      let pTextHTML = '';
      if (this.h3Text) {h3TextHTML = `<h3>${this.h3Text}</h3>`};
      if (this.pText) {pTextHTML = `<p>${this.pText}</p>`};
      popupTextHTML = `
      <div class="popup-text">
        ${h3TextHTML}
        ${pTextHTML}
      </div>
      `;
    }

    let inputsHTMLString = '';
    this.inputFields.forEach( iData => {
      inputsHTMLString += `
      <div class="popup-input-line">
        <label for="${iData.name}">${iData.label}</label>
        <input type="text" id="${iData.name}-input" name="${iData.name}" placeholder="${iData.placeholder}">
      </div>
      `;
    } );

    let buttonsHTMLString = '';
    this.buttonsData.forEach( bData => {
      buttonsHTMLString += `
      <div class="button popup-button" id="${bData.id}">${bData.text}</div>
      `;
    } )

    this.popupHTMLString = `
    <div class="popup" id="${this.display.id}-popup">
      <div class="popup-message">${this.message}</div>
      ${popupTextHTML}
      ${inputsHTMLString}
      <div class="level-bar popup-buttons-bar">
        ${buttonsHTMLString}
      </div>
    </div>
    `;
  }

  setupButtonListeners() {
    this.buttonsData.forEach( bD => {
      document.getElementById( bD.id ).addEventListener( 'click', e => this.handleButtonClick(e) );
    } );
  }

  handleButtonClick( e ){
    const bData = this.buttonsData.find( bD => bD.id === e.target.id );
    const inputValues = {};
    this.inputFields.forEach( iData => {
      const inputElm = document.getElementById(iData.name+'-input');
      let value = inputElm.value;
      if (value === "") { value = iData.placeholder };
      inputValues[iData.name] = value;
    } );
    bData.click( inputValues );
  }

  close() {
    document.getElementById(this.display.id+'-popup').remove();
  }
}

/***/ }),

/***/ "./src/ghosty/style.js":
/*!*****************************!*\
  !*** ./src/ghosty/style.js ***!
  \*****************************/
/*! exports provided: Style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
class Style {
  constructor( app ){
    this.app = app;
    this.scrollbar = document.querySelector('.scrollbar');
    this.scrollbar_box = document.querySelector('.scrollbar-box');
    this.levels_container = document.querySelector('.levels-container');
    this.wrapper = document.querySelector('.wrapper');
    this.scrollPos = 0;

    this.scrollbar.addEventListener('mousemove', e => this.handleMouseMoveOnScrollbar(e));
    this.scrollbar.addEventListener('wheel', e => this.handleMouseScroll(e));
    this.levels_container.addEventListener('wheel', e => this.handleMouseScroll(e));
    window.addEventListener('resize', e => {
      this.setScrollbarHeight();
      this.resizeWrapper();
    });
    this.resizeWrapper();
  }

  setScrollPos( y ){
    if (y < 0) {
      this.scrollPos = 0;
    } else if (y < this.levelsContainerHeight - this.scrollHeight) {
      this.scrollPos = y;
    } else {
      this.scrollPos = this.levelsContainerHeight - this.scrollHeight;
    }
    this.levels_container.setAttribute('style', `
      margin-top: -${this.scrollPos}px;
    `);
  }

  setScrollPosToLevel( levelIndex ){
      const level_bar = document.getElementById('level-details-'+levelIndex).previousElementSibling;
      this.setScrollPos( level_bar.offsetTop );
  }

  setScrollbarHeight(){
      const levelsContainerHeight = getComputedStyle(this.levels_container).height;
      this.scrollbar_box.setAttribute('style', `
        height:${levelsContainerHeight};
      `);
      this.levelsContainerHeight = parseInt(levelsContainerHeight.slice(0, -2));
      this.resizeScrollbar();
  }

  resizeScrollbar(){
    this.scrollHeight = document.documentElement.clientHeight
      - this.levels_container.getBoundingClientRect().top - 20
      + parseInt(getComputedStyle(this.levels_container).marginTop.slice(0,-2));
    if (this.scrollHeight > this.levelsContainerHeight) {
      this.scrollbar_box.classList.add('hidden');
    } else {
      this.scrollbar_box.classList.remove('hidden');
    }
    this.scrollbar.setAttribute('style', `
      height:${this.scrollHeight}px;
    `);
  }

  resizeWrapper(){
    if (this.app.state === 'home' || (this.app.state === 'levels')) {
      this.wrapper.removeAttribute('style');
    }
    else if (this.app.state === 'play' && this.app.play.state === 'play') {
      const documentHeight = document.documentElement.clientHeight;
      const documentWidth = document.documentElement.clientWidth;
      if (documentHeight-150 < (documentWidth-32)*10/16) {
        this.wrapper.setAttribute('style', `
          width:${(documentHeight-150)*16/10 + 32}px;
        `);
      } else {
        this.wrapper.removeAttribute('style');
      }
    }
    else if (this.app.state === 'editor') {
      const documentHeight = document.documentElement.clientHeight;
      const documentWidth = document.documentElement.clientWidth;
      if (documentHeight-178 < (documentWidth-32)*29/40) {
        this.wrapper.setAttribute('style', `
          width:${(documentHeight-178)*40/29 + 32}px;
        `);
      } else {
        this.wrapper.removeAttribute('style');
      }
    }
  }

  handleMouseScroll(e){
    this.setScrollPos( this.scrollPos + e.deltaY );
  }

  handleMouseMoveOnScrollbar(e){
    if (e.buttons%2 === 1) {
      if (!this.locked) {
        this.locked = true;
        this.scrollbar.requestPointerLock();
      }
      this.setScrollPos(this.scrollPos + e.movementY * 10);
    } else if (this.locked) {
      this.locked = false;
      document.exitPointerLock();
    }
  }
}

/***/ }),

/***/ "./src/griga/display.js":
/*!******************************!*\
  !*** ./src/griga/display.js ***!
  \******************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Display", function() { return Display; });
class GridLink {
  constructor( gridInstance, displaySettings, display ){
    this.gridInstance = gridInstance;
    this.displaySettings = displaySettings;
    this.display = display;

    this.processDisplaySettings();

    this.canvas = null;
    this.offCanvas = null;
    this.ctx = null;
  }

  processDisplaySettings(){
    this.leftInPx = this.displaySettings.left * this.display.width;
    this.topInPx = this.displaySettings.top * this.display.height;
    this.widthInPx = this.displaySettings.width * this.display.width;
    this.heightInPx = this.displaySettings.height * this.display.height;
    this.tileWidthInPx = this.widthInPx / this.displaySettings.columnsOnScreen;
    this.tileHeightInPx = this.heightInPx / this.displaySettings.rowsOnScreen;
    this.xShift = this.displaySettings.columnShift * this.tileWidthInPx;
    this.yShift = this.displaySettings.rowShift * this.tileHeightInPx;
  }

  updateDisplaySettings( newDisplaySettings ){
    for (let [property, value] of Object.entries( newDisplaySettings )) {
      this.displaySettings[ property ] = value;
    }
  }

  newCanvas(){
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.widthInPx;
    this.canvas.height = this.heightInPx;
    this.canvas.setAttribute('style', `
      position: absolute;
      top: ${this.topInPx}px;
      left: ${this.leftInPx}px;
      pointer-events: none;
    `);
    this.canvas.setAttribute( 'data--grid-name', this.gridInstance.name );
    this.display.wrapper.appendChild( this.canvas );
    try {
      this.offCanvas = this.canvas.transferControlToOffscreen();
    } catch {
      console.warn('Your Browser does not support canvas.transferControlToOffscreen(). Therefore the game might lag a bit');
      this.offCanvas = this.canvas;
    }
    this.ctx = this.offCanvas.getContext('2d');
  }

  resizeCanvas(){
    this.canvas.remove();
    this.processDisplaySettings();
    this.newCanvas();
  }
}

/**
 * @class
 * @classdesc Displays render all entities on displayed grids. Use the griga config to create them and use the Griga.displayGrid function to display a grid.
 */
class Display {
  /**
   * @hideconstructor
   */
  constructor( config ){
    /**
     * Name of the display
     * @type {string}
     * @readonly
     */
    this.name = config.name;
    /**
     * Wrapper element of the Display
     * @type {HTMLElement}
     * @readonly
     */
    this.wrapper = document.getElementById(config.wrapperId);
    /**
     * The Wrapper's widthHeightRation
     * @type {number}
     * @readonly
     */
    this.widthHeightRatio = config.widthHeightRatio;

    this.resizeWrapper();
    this.setupWrapperEventListeners();
    
    this.linkedGrids = {};//see linkGrid and GridLink for structure
    this.displayData = [];

    this.mouseX = 0;
    this.mouseY = 0;
    this.gridsInHover = [];
  }

  //resize
  resize(){
    this.resizeWrapper();
    for (let gridLink of Object.values( this.linkedGrids )) {
      gridLink.resizeCanvas();
    };
  }

  resizeWrapper(){
    const computedStyle = getComputedStyle( this.wrapper );
    this.width = parseFloat( computedStyle.width.slice( 0,-2 ) );
    this.height = this.width/this.widthHeightRatio;
    this.wrapper.setAttribute('style', `
      height:${this.height}px;
      position: relative;
      overflow: hidden;
    `);//hidden overflow
  }

  setupWrapperEventListeners(){
    this.wrapper.addEventListener( 'mousemove', (e) => this.mouseMoveHandler(e) );
    this.wrapper.addEventListener( 'mouseleave', (e) => this.mouseLeaveHandler(e) );
    this.wrapper.addEventListener('mousedown', (e) => this.mouseDownHandler(e) );
    this.wrapper.addEventListener('mouseup', (e) => this.mouseUpHandler(e) );
  }

  linkGrid( grid, displaySettings ){
    const gridLink = new GridLink( grid, displaySettings, this );
    gridLink.newCanvas();
    this.linkedGrids[ grid.name ] = gridLink;
  }
  unlinkGrid( gridName ){
    this.linkedGrids[ gridName ].canvas.remove();
    delete this.linkedGrids[ gridName ];
  }

  changeGridDisplaySettings( gridName, displaySettings ){
    this.linkedGrids[ gridName ].updateDisplaySettings( displaySettings );
    this.linkedGrids[ gridName ].processDisplaySettings();
  }

  updateDisplayData(){
    this.displayData = Object.values(this.linkedGrids).map(
      gridLink => gridLink.gridInstance.displayData
    );
  }

  //drawing
  clearCanvas( offCanvas, ctx ){
    ctx.clearRect( 0,0, offCanvas.width, offCanvas.height);
  }

  render(){

    this.updateDisplayData();

    this.displayData.forEach( //Array of Grid Display Data
      gridDisplayData => {
        const gridLink = this.linkedGrids[ gridDisplayData.gridName ];
        this.clearCanvas( gridLink.offCanvas, gridLink.ctx );
        gridDisplayData.allLayersEntityInstanceDisplayData.forEach( //Array of allLayersEntityInstanceDisplayData
          ( layerEntityInstanceDisplayData, layer ) => {
            layerEntityInstanceDisplayData.forEach( //array of entityInstanceDisplayData
              entityInstanceDisplayData => {
                gridLink.ctx.drawImage(
                  entityInstanceDisplayData.img,
                  entityInstanceDisplayData.pos.c * gridLink.tileWidthInPx - gridLink.xShift,
                  entityInstanceDisplayData.pos.r * gridLink.tileHeightInPx - gridLink.yShift,
                  Math.ceil(gridLink.tileWidthInPx * entityInstanceDisplayData.width),
                  Math.ceil(gridLink.tileHeightInPx * entityInstanceDisplayData.height),
                );
                Object.values( entityInstanceDisplayData.texts ).forEach( text => {
                  gridLink.ctx.font = `${text.size * gridLink.tileHeightInPx}px ${text.fontFamily}`;
                  gridLink.ctx.fillStyle = text.color;
                  gridLink.ctx.fillText(
                    text.text,
                    (entityInstanceDisplayData.pos.c + text.cOffset) * gridLink.tileWidthInPx - gridLink.xShift,
                    (entityInstanceDisplayData.pos.r + text.rOffset + text.size*0.75) * gridLink.tileHeightInPx - gridLink.yShift
                  );
                } );
              }
            );
          }
        );
      }
    );
  }

  //handler
  mouseLeaveHandler( e ){
    this.gridsInHover.forEach( gridName => {
      this.linkedGrids[ gridName ].gridInstance.mouseLeaveHandler( this.name );
    } );
    this.gridsInHover = [];
  }

  mouseMoveHandler( e ){
    //update mouse pos
    this.mouseX = e.offsetX;
    this.mouseY = e.offsetY;
    //update Grids
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx + grid.xShift;
      const gridMouseY = this.mouseY - grid.topInPx + grid.yShift;
      if (gridMouseX >= grid.xShift && gridMouseX < grid.xShift + grid.widthInPx
       && gridMouseY >= grid.yShift && gridMouseY < grid.yShift + grid.heightInPx) {
        if (grid.gridInstance.mouse.displayName !== this.name) {
          this.gridsInHover.push( grid.gridInstance.name );
        }
        const gridMouseC = gridMouseX/grid.tileWidthInPx;
        const gridMouseR = gridMouseY/grid.tileHeightInPx;
        grid.gridInstance.mouseMoveHandler( this.name, gridMouseC,gridMouseR, e.buttons, e.ctrlKey );
      }
      else if (grid.gridInstance.mouse.displayName === this.name) {
        grid.gridInstance.mouseLeaveHandler( this.name );
        this.gridsInHover.splice( this.gridsInHover.indexOf( grid.gridInstance.name ), 1 );
      }
    } );
  }

  mouseDownHandler( e ){
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx;
      const gridMouseY = this.mouseY - grid.topInPx;
      if (gridMouseX >= 0 && gridMouseX < grid.widthInPx
       && gridMouseY >= 0 && gridMouseY < grid.heightInPx) {
        grid.gridInstance.mouseDownHandler( this.name, e.ctrlKey );
      }
    } );
  }
  mouseUpHandler( e ){
    Object.values(this.linkedGrids).forEach( grid => {
      const gridMouseX = this.mouseX - grid.leftInPx;
      const gridMouseY = this.mouseY - grid.topInPx;
      if (gridMouseX >= 0 && gridMouseX < grid.widthInPx
       && gridMouseY >= 0 && gridMouseY < grid.heightInPx) {
        grid.gridInstance.mouseUpHandler( this.name, e.ctrlKey );
      }
    } );
  }
}

/***/ }),

/***/ "./src/griga/entity.js":
/*!*****************************!*\
  !*** ./src/griga/entity.js ***!
  \*****************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
const Joi = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");

/**
 * @class
 * @classdesc Represents a Text. To create a Text use the Entity.addText function
 */
class Text {
  /**
   * @hideconstructor
   */
  constructor( textSettings ){
    this.id = textSettings.id;
    this.text = textSettings.text || "Text";
    this.size = textSettings.size || 1;
    this.color = textSettings.color || "black";
    this.fontFamily = textSettings.fontFamily || "arial";
    this.cOffset = textSettings.cOffset || 0;
    this.rOffset = textSettings.rOffset || 0;
  }
}
 /**
   * @typedef {Object} Text~textSettings
   * @property {string} id - Id of the text
   * @property {string} [text] - The actual text
   * @property {number} [size] - Height of the text in rows
   * @property {string} [color] - Color of the text (any stadard color format should work)
   * @property {string} [fontFamily] - FontFamily of the text
   * @property {number} [cOffset] - cOffset of the text
   * @property {number} [rOffset] - rOffset of the text
   */

/**
 * @classdesc Base class for all Entities. CustomEntityClasses (Childs of Entity) can be passed in with the grigaConfig when initializing Griga
 */
class Entity {
  //images

  /**
   * @description Defines name and source of all Images the Entity can use as costume. Should be overwritten by CustomEntityClasses
   * @static
   * @type {Object<string, string>}
   */
  static get imgSources(){
    return { default: '' };
  }

  static loadImages( loadedCallback ) {
    //"this" refers to the specific entity class inheriting from "Entity"
    this.images = {};
    for (let [imageName, src] of Object.entries( this.imgSources )) {
      const img = this.images[imageName] = document.createElement('img');
      img.onload = loadedCallback;
      img.onerror = loadedCallback;
      img.src = src;
    }
  }

  //paramsSchema
  static get paramsSchema(){
    return Joi.object( {
      width: Joi.number().default(1),
      height: Joi.number().default(1),
      cOffset: Joi.number().default(0),
      rOffset: Joi.number().default(0),
      layer: Joi.number().integer().default(0),
      renderStartSubscription: Joi.bool().default(false),
      sceneLoadedSubscription: Joi.bool().default(false),
      keyDownSubscriptions: Joi.array().items(Joi.string()).default([]),
      keyUpSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseDownSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseUpSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseMoveSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseEnterSubscriptions: Joi.array().items(Joi.string()).default([]),
      mouseLeaveSubscriptions: Joi.array().items(Joi.string()).default([]),
    } );
  }

  /**
   * Inits Entity. Should only be called with super() from a child class
   * @param {Object} params - EntityParams.
   * @param {number} [params.width = 1] - Displayed width of the entity in columns
   * @param {number} [params.height = 1] - Displayed height of the entity in rows.
   * @param {number} [params.cOffset = 0] - Displayed cOffset of the entity in columns.
   * @param {number} [params.rOffset = 0] - Displayed rOffset of the entity in rows.
   * @param {number} [params.layer = 0] - Layer at which the the entity is displayed.
   * @param {boolean} [params.renderStartSubscription = false] - True to subscribe the entity to the renderStart Event
   * @param {boolean} [params.sceneLoadedSubscription = false] - True to subscribe the entity to the sceneLoaded Event
   * @param {string[]} [params.keyDownSubscriptions = []] - Array of keys for which the entity subscribes to the keyDown Event
   * @param {string[]} [params.keyUpSubscriptions = []] - Array of keys for which the entity subscribes to the keyUp Event
   * @param {string[]} [params.mouseDownSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseDown Event
   * @param {string[]} [params.mouseUpSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseUp Event
   * @param {string[]} [params.mouseMoveSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseMove Event
   * @param {string[]} [params.mouseEnterSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseEnter Event
   * @param {string[]} [params.mouseLeaveSubscriptions = []] - Array of displayNames for which display the entity subscribes to the mouseLeave Event
   * @param {Object} args - The Object passed in to all CustomEntityClasses as second argument when constructed by the Griga Famework
   */
  constructor( params, args ){
    //validate Params
    let validParams;
    try {
      validParams = Joi.attempt( params, Entity.paramsSchema );
    }
    catch (e) {
      e.name = 'GrigaEntityParamsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }

    //set Properties
    /**
     * @description The entities c position
     * @readonly
     * @type {number}
     */
    this.c = args.c;
    /**
     * @description The entities r position
     * @readonly
     * @type {number}
     */
    this.r = args.r;
    /**
     * @description True, if entity is detached
     * @readonly
     * @type {boolean}
     */
    this.detached = args.detached;
    /**
     * @description Displayed width of the entity in columns
     * @readonly
     * @type {number}
     */
    this.width = validParams.width;
    /**
     * @description Displayed height of the entity in rows
     * @readonly
     * @type {number}
     */
    this.height = validParams.height;
    /**
     * @description Displayed cOffset of the entity in columns
     * @readonly
     * @type {number}
     */
    this.cOffset = validParams.cOffset;
    /**
     * @description Displayed rOffset of the entity in rows
     * @readonly
     * @type {number}
     */
    this.rOffset = validParams.rOffset;
    /**
     * @description Layer at which the the entity is displayed.
     * @readonly
     * @type {number}
     */
    this.layer = validParams.layer;
    /**
     * @description True if the entity is subscribed to the renderStart Event
     * @readonly
     * @type {boolean}
     */
    this.renderStartSubscription = validParams.renderStartSubscription;
    /**
     * @description True if the entity is subscribed to the sceneLoaded Event
     * @readonly
     * @type {boolean}
     */
    this.sceneLoadedSubscription = validParams.sceneLoadedSubscription;
    /**
     * @description Array of keys for which the entity is subscribed to the keyDown Event
     * @readonly
     * @type {string[]}
     */
    this.keyDownSubscriptions = validParams.keyDownSubscriptions;
    /**
     * @description Array of keys for which the entity is subscribed to the keyUp Event
     * @readonly
     * @type {string[]}
     */
    this.keyUpSubscriptions = validParams.keyUpSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseDown Event
     * @readonly
     * @type {string[]}
     */
    this.mouseDownSubscriptions = validParams.mouseDownSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseUp Event
     * @readonly
     * @type {string[]}
     */
    this.mouseUpSubscriptions = validParams.mouseUpSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseMove Event
     * @readonly
     * @type {string[]}
     */
    this.mouseMoveSubscriptions = validParams.mouseMoveSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseEnter Event
     * @readonly
     * @type {string[]}
     */
    this.mouseEnterSubscriptions = validParams.mouseEnterSubscriptions;
    /**
     * @description Array of displayNames for which display the entity is subscribed to the mouseLeave Event
     * @readonly
     * @type {string[]}
     */
    this.mouseLeaveSubscriptions = validParams.mouseLeaveSubscriptions;
    /**
     * @description The grid the entity is in
     * @readonly
     * @type {Grid}
     */
    this.grid = args.grid;
    /**
     * @description The griga the entity is in
     * @readonly
     * @type {Griga}
     */
    this.griga = this.grid.griga;

    /**
     * @description Name of the entitie's current image. Should be set by all entities
     * @type {string}
     */
    this.currentImage = 'default';
    /**
     * @description Contains all texts of the entity. The text's id is used as key
     * @readonly
     * @type {Object<string, Text>}
     */
    this.texts = {};

    //initialise EventSubscriptions
    if (this.renderStartSubscription) {
      this.grid.subscribeEntityInstanceToRenderStart( this );
    }
    if (this.sceneLoadedSubscription) {
      this.grid.subscribeEntityInstanceToSceneLoaded( this );
    }
    this.keyDownSubscriptions.forEach( key => {
      this.grid.subscribeEntityInstanceToKeyDown( this, key );
    } );
    this.keyUpSubscriptions.forEach( key => {
      this.grid.subscribeEntityInstanceToKeyUp( this, key );
    } );
    this.mouseDownSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseDown( this, displayName );
    } );
    this.mouseUpSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseUp( this, displayName );
    } );
    this.mouseMoveSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseMove( this, displayName );
    } );
    this.mouseEnterSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseEnter( this, displayName );
    } );
    this.mouseLeaveSubscriptions.forEach( displayName => {
      this.grid.subscribeEntityInstanceToMouseLeave( this, displayName );
    } );
  }

  //called at every Render
  get displayData() {
    return {
      img: this.constructor.images[ this.currentImage ],
      pos : this.computedPos,
      width: this.width,
      height: this.height,
      texts: this.texts,
    }
  }

  get computedPos() {
    const pos = {};
    pos.c = this.c + this.cOffset;
    pos.r = this.r + this.rOffset;
    return pos;
  }

  //functions to override

  /**
   * Returns wether the Entity should be included in the sceneData at Grid.getCurrentSceneData
   * @returns {boolean}
  */
  includeInSceneData() {
    return true;
  }

  /**
   * Returns the params object used by grid.getCurrentSceneData. Should be overwritten if you want to save params at grid.getCurrentSceneData
   * @returns {Object<string, *>}
   * @event
   */
  getCurrentParams() { //used to getCurrentSceneData
    return {}; 
  }

  /**
   * The Game Loop. Get's called before every render if the entity is subscribed to the renderStart Event. Should be overwritten to do dynamic motions/animations
   * @param {number} timePassed - Time passed since last render
   * @event
   */
  renderStartHandler( timePassed ){
    console.log( 'performance.now(): ' + performance.now() );
    console.log( 'timePassed: ' + timePassed );
  }
  
  /**
   * Get's called when all entities are loaded onto this.grid if the entity is subscribed to the sceneLoaded Event. Should be overwritten to execute inital code which requires the presence of all entities.
   * @event
   */
  sceneLoadedHandler(){
    console.log( this.constructor.name + ' is subscribed to the sceneLoadedEvent but doesn\'t use it' );
  }
  
  /**
   * Get's called when a key is pressed if the entity subscribed to the keyDown Event for that key. Should be overwritten to give controlls to the player
   * @param {string} key - The key property of the javascript keyDown Event
   * @event
   */
  keyDownHandler( key ){
    console.log( key );
  }
  /**
   * Get's called when a key is released if the entity subscribed to the keyUp Event for that key. Can be used in combination with keyDownHandler to treat keys as buttons
   * @param {string} key - The key property of the javascript keyUp Event
   * @event
   */
  keyUpHandler( key ){
    console.log( key );
  }

  /**
   * Get's called when a click occurs on a display if the entity subscribed to the mouseDown Event for that display. Should be overwritten to execute code on click
   * @param {string} displayName - Name of the display the mouseDown Event occured on
   * @param {number} mouseC - C-position of the mouseDown Event
   * @param {number} mouseR - R-position of the mouseDown Event
   * @event
   */
  mouseDownHandler( displayName, mouseC, mouseR, ctrlKey ){
    console.log( displayName, mouseC, mouseR, ctrlKey );
  }
  /**
   * Get's called when a click ends on a display if the entity subscribed to the mouseUp Event for that display. Should be overwritten to execute code on click-release
   * @param {string} displayName - Name of the display the mouseUp Event occured on
   * @param {number} mouseC - C-position of the mouseUp Event
   * @param {number} mouseR - R-position of the mouseUp Event
   * @event
   */
  mouseUpHandler( displayName, mouseC, mouseR, ctrlKey ){
    console.log( displayName, mouseC, mouseR, ctrlKey );
  }
  /**
   * Get's called when a mouseMove Event occurs on a display if the entity subscribed to the mouseMove Event for that display. Can be used for drag-and-drop in combination with mouseDown and mouseUp Events
   * @param {string} displayName - Name of the display the mouseMove Event occured on
   * @param {number} mouseC - C-position of the mouseMove Event
   * @param {number} mouseR - R-position of the mouseMove Event
   * @event
   */
  mouseMoveHandler( displayName, mouseC, mouseR ){
    console.log( displayName, mouseC, mouseR );
  }
  /**
   * Get's called when the mouse enters the tile the entity is in and the entity is subscribed to the mouseMove Event for that display. 
   * @param {string} displayName - Name of the display the mouseEnter Event occured on
   * @param {number} mouseC - C-position of the mouseEnter Event
   * @param {number} mouseR - R-position of the mouseEnter Event
   * @param {boolean} mousePressed - If the mouse is currently pressed down
   * @event
   */
  mouseEnterHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    console.log( displayName, mouseC, mouseR, mouseButtons, ctrlKey );
  }
  /**
   * Get's called when the mouse leaves the tile the entity is in and the entity is subscribed to the mouseLeave Event for that display. 
   * @param {string} displayName - Name of the display the mouseLeave Event occured on
   * @param {number} mouseC - C-position of the mouseLeave Event
   * @param {number} mouseR - R-position of the mouseLeave Event
   * @param {boolean} mousePressed - If the mouse is currently pressed down
   * @event
   */
  mouseLeaveHandler( displayName, mouseC, mouseR, mouseButtons, ctrlKey ){
    console.log( displayName, mouseC, mouseR, mouseButtons, ctrlKey );
  }

  //functions to use
  /**
   * Changes the layer of the entity
   * @param {number} newLayer - New layer the entity should be displayed on
   */
  changeLayer( newLayer ){
    this.grid.removeEntityInstanceFromLayerData( this );
    this.layer = newLayer;
    this.grid.addEntityInstanceToLayerData( this );
  }

  /**
   * Changes the displaySettings of this.grid on a display. Settings you don't specify stay the same
   * @param {string} displayName - Name of the display to change the gridDisplaySettings
   * @param {displaySettings} displaySettings - Object containing all displaySettings you wan't to change
   */
  changeGridDisplaySettings( displayName, displaySettings ){
    this.grid.displays[ displayName ].changeGridDisplaySettings( this.grid.name, displaySettings );
  }

  /**
   * Sets the entities cOffset property
   * @param {number} cOffset 
   */
  setCOffset( cOffset ){
    this.cOffset = cOffset;
  }
  
  /**
   * Sets the entities rOffset property
   * @param {number} rOffset 
   */
  setROffset( rOffset ){
    this.rOffset = rOffset;
  }

  /**
   * Sets the entities height property
   * @param {number} height 
   */
  setHeight( height ){
    this.height = height;
  }
  
  /**
   * Sets the entities width property
   * @param {number} width 
   */
  setWidth( width ){
    this.width = width;
  }

  /**
   * Deletes the entity
   */
  delete(){
    this.grid.deleteEntityInstance( this );
  }

  /**
   * Attaches the detached entity to the grid at (c, r)
   * @param {number} c - Column
   * @param {number} r - Row
   */
  attach( c, r ){
    if (!this.detached){ return console.warn('can\'t attach an already attached Entity') };

    this.detached = false;
    this.c = Math.round( c );
    this.r = Math.round( r );
    this.grid.attachEntityInstance( this );
  }

  /**
   * Detaches the attached entity. The position of the entity will stay the same
   */
  detach(){
    if (this.detached){ return console.warn('can\'t detach an already detached Entity') };
    this.detached = true;
    this.grid.detachEntityInstance( this );
  }

  /**
   * String containing a direction. Possible are: 'top','up','north'; 'right','east'; 'bottom','down','south'; 'left','west'; 'here','stay'. The directionString isn't case sensitive
   * @typedef {string} directionString
   */

  /**
   * Array of the form [dc, dr] representing a position relative to the entities current position.
   * @typedef {number[]} relativePosition
   */

  /**
   * Object of the form {c, r} representing an absolute position.
   * @typedef {Object} absolutePosition
   * @property {number} c
   * @property {number} r
   */

  /**
   * Turns any position into a absolutePosition
   * @param {directionString|relativePosition|absolutePosition} position
   * @param {string} [borderMode="ignore"] - what to do when the position is off the grid. Possible are: ignore, modulo
   * @returns {absolutePosition} absolutePosition
   */
  formatPositionAsAbsolutePosition( position, borderMode = 'ignore' ){
    let absPos = null;
    if (position.constructor === Array) {//rel. pos [dc, dr]
      absPos = {
        c: this.c + position[0],
        r: this.r + position[1],
    }
    } else if (typeof position === 'object') {//abs. coords {c, r}
      absPos = position;
    } else if (typeof position === 'string') {//direction string
      absPos = absPos = {c: this.c, r: this.r};
      if (['top','up','north'].includes( position.toLowerCase() )) {
        absPos.r--;
      } else if (['right','east'].includes( position.toLowerCase() )) {
        absPos.c++;
      } else if (['bottom','down','south'].includes( position.toLowerCase() )) {
        absPos.r++;
      } else if (['left','west'].includes( position.toLowerCase() )) {
        absPos.c--;
      } else if (['here','stay'].includes( position.toLowerCase() )) {
        //nothing
      }
    }

    if ( borderMode === 'modulo' ) {
      absPos.c = (absPos.c + this.grid.columns) % this.grid.columns;
      absPos.r = (absPos.r + this.grid.rows) % this.grid.rows;
    }

    return absPos;
  }

  /**
   * Moves entity to newPosition
   * @param {directionString|relativePosition|absolutePosition} newPosition - Where the entity should move to
   */
  move( newPosition ){
    newPosition = this.formatPositionAsAbsolutePosition( newPosition );
    if (this.detached){
      this.c = newPosition.c;
      this.r = newPosition.r;
    }
    else { this.grid.moveEntityInstance( this, newPosition ) };
  }

  /**
   * Adds a text to the entity
   * @param {Text~textSettings} textSettings 
   */
  addText( textSettings ){
    if (typeof textSettings !== 'object') {return console.error('textSettings needs to be an object')};
    if (textSettings.id === undefined) {return console.error('textSettings need to have an id property')};
    this.texts[ textSettings.id ] = new Text( textSettings );
  }
  /**
   * Removes a text from the entity
   * @param {string} id 
   */
  removeText( id ){
    delete this.texts[ id ];
  }

  /**
   * Returns an Array of all entities beneath this entity. Only works for detached entities
   * @returns {Entity~CustomEntityClass[]}
   */
  getEntityInstancesBeneath(){
    return this.grid.getEntityInstancesBeneathDetachedEntityInstance( this );
  }

  /**
   * Subscribes the Entity to the keyDown event for the specified key
   * @param {string} key - key
   */
  subscribeToKeyDown( key ){
    this.keyDownSubscriptions.push( key );
    this.grid.subscribeEntityInstanceToKeyDown( this, key );
  }
  /**
   * Unsubscribes the Entity from the keyDown event for the specified key
   * @param {string} key - key
   */
  unsubscribeFromKeyDown( key ){
    this.keyDownSubscriptions.splice( this.keyDownSubscriptions.indexOf( key ), 1 );
    this.grid.unsubscribeEntityInstanceFromKeyDown( this, key );
  }

  /**
   * Subscribes the Entity to the keyUp event for the specified key
   * @param {string} key - key
   */
  subscribeToKeyUp( key ){
    this.keyUpSubscriptions.push( key );
    this.grid.subscribeEntityInstanceToKeyUp( this, key );
  }
  /**
   * Unsubscribes the Entity from the keyUp event for the specified key
   * @param {string} key - key
   */
  unsubscribeFromKeyUp( key ){
    this.keyUpSubscriptions.splice( this.keyUpSubscriptions.indexOf( key ), 1 );
    this.grid.unsubscribeEntityInstanceFromKeyUp( this, key );
  }

  /**
   * Subscribes the entity to the renderStart event
   */
  subscribeToRenderStart(){
    this.renderStartSubscription = true;
    this.grid.subscribeEntityInstanceToRenderStart( this );
  }
  /**
   * Unsubscribes the entity from the renderStart event
   */
  unsubscribeFromRenderStart(){
    this.renderStartSubscription = false;
    this.grid.unsubscribeEntityInstanceFromRenderStart( this );
  }

  /**
   * Subscribes the entity to the sceneLoaded event
   */
  subscribeToSceneLoaded(){
    this.sceneLoadedSubscription = true;
    this.grid.subscribeEntityInstanceToSceneLoaded( this );
  }
  /**
   * Unsubscribes the entity from the sceneLoaded event
   */
  unsubscribeFromSceneLoaded(){
    this.sceneLoadedSubscription = false;
    this.grid.unsubscribeEntityInstanceFromSceneLoaded( this );
  }

  /**
   * Subscribes the entity to the mouseDown event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseDown( displayName ){
    this.mouseDownSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseDown( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseDown event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseDown( displayName ){
    this.mouseDownSubscriptions.splice( this.mouseDownSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseDown( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseUp event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseUp( displayName ){
    this.mouseUpSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseUp( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseUp event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseUp( displayName ){
    this.mouseUpSubscriptions.splice( this.mouseUpSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseUp( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseMove event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseMove( displayName ){
    this.mouseMoveSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseMove( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseMove event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseMove( displayName ){
    this.mouseMoveSubscriptions.splice( this.mouseMoveSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseMove( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseEnter event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseEnter( displayName ){
    this.mouseEnterSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseEnter( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseEnter event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseEnter( displayName ){
    this.mouseEnterSubscriptions.splice( this.mouseEnterSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseEnter( this, displayName );
  }

  /**
   * Subscribes the entity to the mouseLeave event on the specified display
   * @param {string} displayName - Name of the display
   */
  subscribeToMouseLeave( displayName ){
    this.mouseLeaveSubscriptions.push( displayName );
    this.grid.subscribeEntityInstanceToMouseLeave( this, displayName );
  }
  /**
   * Unsubscribes the entity from the mouseLeave event on the specified display
   * @param {string} displayName - Name of the display
   */
  unsubscribeFromMouseLeave( displayName ){
    this.mouseLeaveSubscriptions.splice( this.mouseLeaveSubscriptions.indexOf( displayName ), 1 );
    this.grid.unsubscribeEntityInstanceFromMouseLeave( this, displayName );
  }
}

/***/ }),

/***/ "./src/griga/grid.js":
/*!***************************!*\
  !*** ./src/griga/grid.js ***!
  \***************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Class representing a logical grid. Saves references to entities
 */
class Grid {
  /**
   * Creates a Grid
   * Grids should only be constructed using the griga config
   * @hideconstructor
   */
  constructor( config, griga ){
    this.griga = griga;
    this.displays = {};
    this.name = config.name;
    this.columns = config.columns;
    this.rows = config.rows;

    this.resetMouse(); //sets this.mouse to default

    //entityInstanceReferences
    this.clearScene();

    this.lastRenderTime = 0;
  }

  //setup
  setupGridData(){
    const gridData = [];
    for (let c=0; c<this.columns; c++) {
      gridData[c] = [];
      for (let r=0; r<this.rows; r++) {
        gridData[c][r] = [];
      }
    }
    return gridData;
  }

  //handler
  renderStartHandler(){
    const timePassed = performance.now() - this.lastRenderTime;
    this.lastRenderTime = performance.now();
    this.renderStartSubscriptions.forEach( entityInstance => {
      entityInstance.renderStartHandler( timePassed );
    } );
  }
  
  sceneLoadedHandler(){
    this.sceneLoadedSubscriptions.forEach( entityInstance => {
      entityInstance.sceneLoadedHandler();
    } );
  }
  
  keyDownHandler( e ){
    if (this.keyDownSubscriptions.hasOwnProperty( e.key )) {
      this.keyDownSubscriptions[ e.key ].forEach( entityInstance => {
        entityInstance.keyDownHandler( e.key );
      } );
    }
  }

  keyUpHandler( e ){
    if (this.keyUpSubscriptions.hasOwnProperty( e.key )) {
      this.keyUpSubscriptions[ e.key ].forEach( entityInstance => {
        entityInstance.keyUpHandler( e.key );
      } );
    }
  }

  mouseMoveHandler( displayName, mouseC,mouseR, mouseButtons, ctrlKey ){
    //check for mouse enter TODO
    let movedToNewTile = false;
    if (Math.floor(this.mouse.c) !== Math.floor(mouseC)
     || Math.floor(this.mouse.r) !== Math.floor(mouseR)) {
      movedToNewTile = true;
    }

    if (movedToNewTile) {
      //fire mouse Leave Event
      const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)]
      targets.forEach( entityInstance => {
        if (entityInstance.mouseLeaveSubscriptions.includes( this.mouse.displayName )) {
          entityInstance.mouseLeaveHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, mouseButtons, ctrlKey );
        }
      } );
    }
    
    //update this.mouse
    this.mouse.displayName = displayName;
    this.mouse.c = mouseC;
    this.mouse.r = mouseR;

    if (movedToNewTile) {
      //fire mouse Enter Event
      const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)]
      targets.forEach( entityInstance => {
        if (entityInstance.mouseEnterSubscriptions.includes( this.mouse.displayName )) {
          entityInstance.mouseEnterHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, mouseButtons, ctrlKey );
        }
      } );
    }

    if (this.mouseMoveSubscriptions.hasOwnProperty( this.mouse.displayName )) {
      this.mouseMoveSubscriptions[ this.mouse.displayName ].forEach( entityInstance => {
        entityInstance.mouseMoveHandler( this.mouse.displayName, this.mouse.c, this.mouse.r );
      } );
    }
  }

  mouseLeaveHandler(){
    this.resetMouse();
  }

  mouseDownHandler( displayName, ctrlKey ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseDownSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseDownHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, ctrlKey );
      }
    } );
  }
  mouseUpHandler( displayName, ctrlKey ){
    const targets = this.gridData[Math.floor(this.mouse.c)][Math.floor(this.mouse.r)].concat(//tiles
      this.getDetachedEntityInstancesByCoordinates( this.mouse.c, this.mouse.r ) );//detached
    targets.forEach( entityInstance => {
      if (entityInstance.mouseUpSubscriptions.includes( this.mouse.displayName )) {
        entityInstance.mouseUpHandler( this.mouse.displayName, this.mouse.c, this.mouse.r, ctrlKey );
      }
    } );
  }

  //listenerStuff
  
  subscribeEntityInstanceToRenderStart( entityInstance ){
    this.renderStartSubscriptions.push( entityInstance );
  }
  unsubscribeEntityInstanceFromRenderStart( entityInstance ){
    const i = this.renderStartSubscriptions.indexOf( entityInstance );
    this.renderStartSubscriptions.splice( i, 1 );
  }
  
  subscribeEntityInstanceToSceneLoaded( entityInstance ){
    this.sceneLoadedSubscriptions.push( entityInstance );
  }
  
  subscribeEntityInstanceToKeyDown( entityInstance, key ){
    if (this.keyDownSubscriptions.hasOwnProperty( key )) {
      this.keyDownSubscriptions[key].push( entityInstance );
    } else {
      this.keyDownSubscriptions[key] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromKeyDown( entityInstance, key ){
    const i = this.keyDownSubscriptions[key].indexOf( entityInstance );
    this.keyDownSubscriptions[key].splice( i, 1 );
  }

  subscribeEntityInstanceToKeyUp( entityInstance, key ){
    if (this.keyUpSubscriptions.hasOwnProperty( key )) {
      this.keyUpSubscriptions[key].push( entityInstance );
    } else {
      this.keyUpSubscriptions[key] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromKeyUp( entityInstance, key ){
    const i = this.keyUpSubscriptions[key].indexOf( entityInstance );
    this.keyUpSubscriptions[key].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseDown( entityInstance, displayName ){
    if (this.mouseDownSubscriptions.hasOwnProperty( displayName )) {
      this.mouseDownSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseDownSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseDown( entityInstance, displayName ){
    const i = this.mouseDownSubscriptions[displayName].indexOf( entityInstance );
    this.mouseDownSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseUp( entityInstance, displayName ){
    if (this.mouseUpSubscriptions.hasOwnProperty( displayName )) {
      this.mouseUpSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseUpSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseUp( entityInstance, displayName ){
    const i = this.mouseUpSubscriptions[displayName].indexOf( entityInstance );
    this.mouseUpSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseMove( entityInstance, displayName ){
    if (this.mouseMoveSubscriptions.hasOwnProperty( displayName )) {
      this.mouseMoveSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseMoveSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseMove( entityInstance, displayName ){
    const i = this.mouseMoveSubscriptions[displayName].indexOf( entityInstance );
    this.mouseMoveSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseEnter( entityInstance, displayName ){
    if (this.mouseEnterSubscriptions.hasOwnProperty( displayName )) {
      this.mouseEnterSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseEnterSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseEnter( entityInstance, displayName ){
    const i = this.mouseEnterSubscriptions[displayName].indexOf( entityInstance );
    this.mouseEnterSubscriptions[displayName].splice( i, 1 );
  }

  subscribeEntityInstanceToMouseLeave( entityInstance, displayName ){
    if (this.mouseLeaveSubscriptions.hasOwnProperty( displayName )) {
      this.mouseLeaveSubscriptions[displayName].push( entityInstance );
    } else {
      this.mouseLeaveSubscriptions[displayName] = [ entityInstance ];
    }
  }
  unsubscribeEntityInstanceFromMouseLeave( entityInstance, displayName ){
    const i = this.mouseLeaveSubscriptions[displayName].indexOf( entityInstance );
    this.mouseLeaveSubscriptions[displayName].splice( i, 1 );
  }

  //display interactions
  get displayData(){
    //triggerRenderStartEvent
    this.renderStartHandler();
    const allLayersEntityInstanceDisplayData = [];
    this.layerData.forEach( ( layerEntityInstances, layer ) => {
      const layerEntityInstanceDisplayData = [];
      layerEntityInstances.forEach( entityInstance => {
        layerEntityInstanceDisplayData.push( entityInstance.displayData );
      } );
      allLayersEntityInstanceDisplayData[ layer ] = layerEntityInstanceDisplayData;
    } );
    return {
      gridName: this.name,
      allLayersEntityInstanceDisplayData
    };
  }
  
  //allEntityInstances
  addEntityInstanceToAllEntityInstances( entityInstance ){
    this.allEntityInstances.push( entityInstance );
  }
  removeEntityInstanceFromAllEntityInstances( entityInstance ){
    const entityInstanceIndex = this.allEntityInstances.indexOf( entityInstance );
    this.allEntityInstances.splice( entityInstanceIndex, 1 );
  }

  //entityData
  addEntityInstanceToEntityData( entityInstance ){
    const entityName = entityInstance.constructor.name;
    if (this.entityData.hasOwnProperty( entityName )) {
      this.entityData[ entityName ].push( entityInstance );
    } else {
      this.entityData[ entityName ] = [ entityInstance ];
    }
  }
  removeEntityInstanceFromEntityData( entityInstance ){
    const entityName = entityInstance.constructor.name;
    const entityInstanceIndex = this.entityData[ entityName ].indexOf( entityInstance );
    this.entityData[ entityName ].splice( entityInstanceIndex, 1 );
    if (this.entityData[ entityName ].length === 0) {
      delete this.entityData[ entityName ];
    }
  }

  //detachedData
  addEntityInstanceToDetachedData( entityInstance ){
    this.detachedData.push( entityInstance );
  }
  removeEntityInstanceFromDetachedData( entityInstance ){
    const entityInstanceIndex = this.detachedData.indexOf( entityInstance );
    this.detachedData.splice( entityInstanceIndex, 1 );
  }

  //gridData
  addEntityInstanceToGridData( entityInstance ){
    const tileData = this.gridData[ entityInstance.c ][ entityInstance.r ];
    tileData.push( entityInstance );
  }
  removeEntityInstanceFromGridData( entityInstance ){
    const tileData = this.gridData[ entityInstance.c ][ entityInstance.r ];
    const entityInstanceIndex = tileData.indexOf( entityInstance );
    tileData.splice( entityInstanceIndex, 1 );
  }

  //layerData
  addEntityInstanceToLayerData( entityInstance ){
    let layerArray = [];
    if (this.layerData.has( entityInstance.layer )) {
      layerArray = this.layerData.get( entityInstance.layer );
    }
    layerArray.push( entityInstance );
    this.layerData.set( entityInstance.layer, layerArray );
  }
  removeEntityInstanceFromLayerData( entityInstance ){
    const layerArray = this.layerData.get( entityInstance.layer );
    const entityInstanceIndex = layerArray.indexOf( entityInstance );
    layerArray.splice( entityInstanceIndex, 1 );
    if (layerArray.length > 0) {
      this.layerData.set( entityInstance.layer, layerArray );
    } else {
      this.layerData.delete( entityInstance.layer );
    }
  }

  //only used by EntityMethods
  attachEntityInstance( entityInstance ){
    this.removeEntityInstanceFromDetachedData( entityInstance );
    this.addEntityInstanceToGridData( entityInstance );
  }

  //only used by EntityMethods
  detachEntityInstance( entityInstance ){
    this.removeEntityInstanceFromGridData( entityInstance );
    this.addEntityInstanceToDetachedData( entityInstance );
  }

//PUBLIC xD

  static get argsSchema(){
    return _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object( {
      detached: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.boolean().default(false),
      c: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(0),
      r: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().default(0)
    } );
  }

  /**
   * Constructs a new entity
   * @param {string} entityName - Name of the CustomEntityClass
   * @param {*} [params={}] - Params that will be passed in as first argument to the constructor of the CustomEntityClass
   * @param {Object} [args] - Arguments for the entities intial state. Can still be overwritten in the constructor of the CustomEntityClass before calling super()
   * @param {boolean} [args.detached=false] - True if the entity should be detached
   * @param {number} [args.c=0] - C position
   * @param {number} [args.r=0] - R position
   */
  newEntityInstance( entityName, params = {}, args = {} ){
    //validate Args
    let validArgs;
    try {
      validArgs = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.attempt( args, Grid.argsSchema );
    }
    catch (e) {
      e.name = 'newEntityArgsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    //create new entityInstance
    validArgs.grid = this;
    const entityInstance = new this.griga.entities[ entityName ](
      params, validArgs
    );
    //set all entityInstance References
    this.addEntityInstanceToAllEntityInstances( entityInstance );
    this.addEntityInstanceToEntityData( entityInstance );
    if (entityInstance.detached) {
      this.addEntityInstanceToDetachedData( entityInstance );
    } else{
      this.addEntityInstanceToGridData( entityInstance );
    }
    this.addEntityInstanceToLayerData( entityInstance );

    return entityInstance;
  }

  //only used by EntityMethods
  deleteEntityInstance( entityInstance ){
    //remove all references to entityInstance
    this.removeEntityInstanceFromAllEntityInstances( entityInstance )
    this.removeEntityInstanceFromEntityData( entityInstance );
    if (entityInstance.detached) {
      this.removeEntityInstanceFromDetachedData( entityInstance );
    } else{
      this.removeEntityInstanceFromGridData( entityInstance );
    }
    this.removeEntityInstanceFromLayerData( entityInstance );
    entityInstance.keyDownSubscriptions.forEach( key => {
      this.unsubscribeEntityInstanceFromKeyDown( entityInstance, key );
    } );
  }

  //only used by EntityMethods
  moveEntityInstance( entityInstance, newPos ){
    //validate newPos
    if (newPos.c >= 0 && newPos.c < this.columns
     && newPos.r >= 0 && newPos.r < this.rows) {
      //update entityPosition
      this.removeEntityInstanceFromGridData( entityInstance );
      entityInstance.c = newPos.c;
      entityInstance.r = newPos.r;
      this.addEntityInstanceToGridData( entityInstance );
    }
  }

  /**
   * Filters and returns all Entities matching the selectorObject
   * @param {Object} selectorObject - Object containing filter options
   * @param {absolutePosition} [selectorObject.tile] - Tile the entities need to be on
   * @param {string} [selectorObject.type] - The Name of the CustomEntityClass the entities should be an instance of
   * @param {string} [selectorObject.notType] - The Name of the CustomEntityClass the entities should not be an instance of
   */
  getEntityInstances( selectorObject = {} ){
    let entityInstances = this.allEntityInstances;
    if (selectorObject.hasOwnProperty('tile')) {
      if (selectorObject.tile.c >= 0 && selectorObject.tile.c < this.columns
       && selectorObject.tile.r >= 0 && selectorObject.tile.r < this.rows) { //coordinates inside grid
        entityInstances = this.gridData[ selectorObject.tile.c ][ selectorObject.tile.r ];
        if (selectorObject.hasOwnProperty('type')) {
          entityInstances = entityInstances.filter( entityInstance => {
            return entityInstance.constructor.name === selectorObject.type;
          } );
        }
      } else {
        entityInstances = [];
      }
    } else if (selectorObject.hasOwnProperty('type')) {
      entityInstances = this.entityData[ selectorObject.type ];
    }
    if (selectorObject.hasOwnProperty('notType')) {
      entityInstances = entityInstances.filter( entityInstance => {
        return entityInstance.constructor.name !== selectorObject.notType;
      } );
    }
    return entityInstances;
  }

  /**
   * gets all detached entities which are "under" the coordinates (c, r)
   * @param {number} c - C coordinate
   * @param {number} r - R coordinate
   */
  getDetachedEntityInstancesByCoordinates( c, r ){
    const entityInstances = this.detachedData.filter( entityInstance => {
      return (c > entityInstance.c && c < entityInstance.c+entityInstance.width
        && r > entityInstance.r && r < entityInstance.r+entityInstance.height);
    } );
    return entityInstances;
  }

  //only used by entity methods
  getEntityInstancesBeneathDetachedEntityInstance( detachedEntityInstance ){
    const startC = Math.floor( detachedEntityInstance.c );
    const endC = detachedEntityInstance.c + detachedEntityInstance.width;
    const startR = Math.floor( detachedEntityInstance.r );
    const endR = detachedEntityInstance.r + detachedEntityInstance.height;
    let entityInstances = [];
    for (let c = startC; c < endC; c++) {
      for (let r = startR; r < endR; r++) {
        if (c >= 0 && c < this.columns
         && r >= 0 && r < this.rows) {
          entityInstances = entityInstances.concat( this.gridData[c][r] );
        }
      }
    }
    return entityInstances;
  }

  /**
   * loads a scene into the grid
   * @param {Grid~sceneData} sceneData - SceneData Object
   */
  loadScene( sceneData ){
    //TODO detached

    //tiles
    sceneData.tiles.forEach( (cData, c) => {
      cData.forEach( (tileData, r) => {
        tileData.forEach( entityDeclaration => {
          const entityName = entityDeclaration[0];
          const params = entityDeclaration[1] || {};
          const args = { detached: false, c, r };
          this.newEntityInstance( entityName, params, args );
        } );
      } );
    } );
    //triggerSceneLoadedEvent
    this.sceneLoadedHandler();
  }

  /**
   * @typedef {Object} Grid~sceneData
   * @property {Array[]} detached - Array containing data for a detached entity
   * @property {string} detached.0 - Name of the CustomEntityClass
   * @property {any} detached.1 - Entity params
   * @property {Object} detached.2 - Position of the detached Entity
   * @property {number} [detached.2.c=0] - C position
   * @property {number} [detached.2.r=0] - R position
   * @property {Array[][]} attached - Array inside a 2D array representing all [c, r] tiles on the grid containing data for an attached entity
   * @property {string} attached.0 - Name of the CustomEntityClass
   * @property {any} attached.1 - Entity params
   */

  /**
   * clears the Scene, all entites get deleted
   */
  clearScene(){
    this.allEntityInstances = [];
    this.entityData = {};
    this.gridData = this.setupGridData();
    this.detachedData = [];
    this.layerData = new Map();

    this.renderStartSubscriptions = [];
    this.sceneLoadedSubscriptions = [];
    this.keyDownSubscriptions = {};
    this.keyUpSubscriptions = {};
    this.mouseDownSubscriptions = {};
    this.mouseUpSubscriptions = {};
    this.mouseMoveSubscriptions = {};
    this.mouseEnterSubscriptions = {};
    this.mouseLeaveSubscriptions = {};
  }

  /**
   * gets the current state of the grid as sceneData. If you have entites which should save parameters in the sceneData, use (overwrite) the getCurrentParams method of Entity. If you have Entities which shouldn't be included in the sceneData, overwrite ther includeInSceneData Method to return false;
   * @returns {Grid~sceneData}
   */
  getCurrentSceneData(){
    const sceneData = {
      detached: [],
      tiles: []
    }
    //detached

    //tiles
    this.gridData.forEach( (cData, c) => {
      sceneData.tiles.push([]);
      cData.forEach( (tileData, r) => {
        sceneData.tiles[c][r] = tileData.filter( e => e.includeInSceneData() ).map( entityInstance => {
          return [entityInstance.constructor.name, entityInstance.getCurrentParams()];
        } );
      } );
    } );
    return sceneData;
  }

  //only used by grid mouse event xD
  resetMouse(){
    this.mouse = {
      displayName: null,
      down: false,
      c: 0, r: 0,
    };
  }
}

/***/ }),

/***/ "./src/griga/griga.js":
/*!****************************!*\
  !*** ./src/griga/griga.js ***!
  \****************************/
/*! exports provided: Griga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Griga", function() { return Griga; });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ "./src/griga/display.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid */ "./src/griga/grid.js");
/**
 * Griga
 * @version 1.0.0
 * @author Tom Kopolt
 * paul-goblin on GitHub
 */




const Joi = __webpack_require__(/*! @hapi/joi */ "./node_modules/@hapi/joi/dist/joi-browser.min.js");

const wrapperIdExists = (wrapperId) => {
  const wrapper = document.getElementById(wrapperId);
  if (wrapper) {return wrapperId};
  throw new Error(`there's no HTML-Element with wrapperId ${wrapperId}`);
}
/**
 * Class representing a Complete Game, including Logic and Graphics
 */
class Griga {

  //configSchema
  static get configSchema(){
    return Joi.object( {
      //displays
      displays: Joi.array().items( Joi.object( {
          name: Joi.string().required(),
          wrapperId: Joi.any().required().custom( wrapperIdExists, 'wrapperId validation' ),
          widthHeightRatio: Joi.number().default(1),//in (fraction of responsive tileWidth), 1 for square
      } ) ),
      //grids
      grids: Joi.array().items( Joi.object( {
        name: Joi.string().required(),
        columns: Joi.number().integer().default(1),
        rows: Joi.number().integer().default(1),
    } ) ),
      //entities
      entities: Joi.array().items( Joi.function().class() ).required(), //no good validation yet
    } );
  }

  static get displaySettingsSchema(){
    return Joi.object( {
      top: Joi.number().default(0),
      left: Joi.number().default(0),
      width: Joi.number().min(0).default(1),
      height: Joi.number().min(0).default(1),
      columnsOnScreen: Joi.number().min(1).default(1),
      rowsOnScreen: Joi.number().min(1).default(1),
      columnShift: Joi.number().default(0),
      rowShift: Joi.number().default(0),
    } );
  }

  /**
   * @callback Griga~imagesLoadedCallback
   * @param {Griga} griga - The Griga instance 
   */

  /**
   * @typedef {Object} Entity~CustomEntityClass - Custom Classes extending Entity
   */

  /**
   * 
   * @param {Object} config - The griga config object
   * @param {Object[]} config.displays - Array of display setting objects. For each object Griga creates a corresponding display
   * @param {string} config.displays[].name - Name of the display
   * @param {string} config.displays[].wrapperId - Id of the HTML element used as display
   * @param {number} [config.displays[].widthHeightRatio=1] - The display's height relative to its width
   * @param {Object[]} config.grids - Array of grid setting objects. For each object Griga creates a corresponding grid
   * @param {string} config.grids[].name - Name of the grid
   * @param {number} [config.grids[].columns=1] - Number of columns
   * @param {number} [config.grids[].rows=1] - Number of rows
   * @param {Entity~CustomEntityClass[]} config.entities - Array of all CustomEntityClasses Griga should use
   * @param {Griga~imagesLoadedCallback} cb - The callback triggers when all the Images are Loaded
   */
  constructor( config, imagesLoadedCallback ){
    //validate Config
    let validConfig;
    try {
      validConfig = Joi.attempt( config, Griga.configSchema );
    }
    catch (e) {
      e.name = 'GrigaConfigError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    //declare all variables
    /**
     * @description Contains references to all displays. The display's name is used as key
     * @public
     * @member {Object.<string, Display>}
     */
    this.displays = this.setupDisplays( validConfig.displays );
    /**
     * @description Contains references to all grids. The grids's name is used as key
     * @public
     * @member {Object.<string, Grid>}
     */
    this.grids = this.setupGrids( validConfig.grids );
    /**
     * @description Contains references to all CustomEntityClasses. The entitie's name is used as key
     * @public
     * @member {Object.<string, Entity~CustomEntityClass>}
     */
    this.entities = Object.fromEntries( validConfig.entities.map(
      entity => [entity.name, entity]
    ) );

    this.setupEventListeners();

    //loadImages
    this.imagesLoadedCallback = imagesLoadedCallback;
    this.loadImages();
    requestAnimationFrame( () => this.render() );
  }

  //setup
  setupDisplays( displaysConfig ){
    const displays = {};
    displaysConfig.forEach( displayConfig => {
      displays[ displayConfig.name ] = new _display__WEBPACK_IMPORTED_MODULE_0__["Display"]( displayConfig );
    } );
    return displays;
  }

  setupGrids( gridsConfig ){
    const grids = {};
    gridsConfig.forEach( gridConfig => {
      grids[ gridConfig.name ] = new _grid__WEBPACK_IMPORTED_MODULE_1__["Grid"]( gridConfig, this );
    } );
    return grids;
  }

  setupEventListeners(){
    this.keysPressed = [];
    window.addEventListener('resize', (e) => {this.resizeDisplays()} );
    window.addEventListener('keydown', (e) => this.keyDownHandler(e) );
    window.addEventListener('keyup', (e) => this.keyUpHandler(e) );
  }

  //load Images
  imageLoaded(){
    if (--this.imagesToLoad === 0) {
      this.imagesLoadedCallback( this );
    }
  }

  loadImages(){
    this.imagesToLoad = 0;
    Object.values( this.entities ).forEach( entity => {
      this.imagesToLoad += Object.keys(entity.imgSources).length;
    } );
    if (this.imagesToLoad === 0) { this.imagesLoadedCallback( this ) }
    else {
      Object.values( this.entities ).forEach( entity => {
        entity.loadImages( () => {this.imageLoaded()} );
      } );
    }
  }

  render(){
    const renderStart = performance.now();
    //render each Display
    Object.values( this.displays ).forEach( 
      display => display.render()
    );
    //check for mspt
    const mspt = performance.now() - renderStart;
    if (mspt > 3) {
      console.warn( 'mspt: ' + (performance.now() - renderStart) );
    }
    requestAnimationFrame( () => this.render() );
  }

  //Handler
  keyDownHandler( e ){
    if (!this.keysPressed.includes( e.key )) {
      Object.values(this.grids).forEach( grid => {
        grid.keyDownHandler( e );
      } );
      this.keysPressed.push( e.key );
    }
  }
  keyUpHandler( e ){
    Object.values(this.grids).forEach( grid => {
      grid.keyUpHandler( e );
    } );
    this.keysPressed.pop( e.key );
  }

//PUBLIC xD

  /**
   * @typedef {Object} displaySettings
   * @property {number} [left = 0] - Left offset of the grid in % of display width 
   * @property {number} [top = 0] - Top offset of the grid in % of display height
     @property {number} [width = 1] - Width of the grid in % of display width 
     @property {number} [height = 1] - Height of the grid in % of display height 
     @property {number} [columnsOnScreen = 1] - The number of columns which fit into the grids width
     @property {number} [rowsOnScreen = 1] - The number of rows which fit into the grids height
     @property {number} [columnShift = 0] - The number of columns the Grid should be shifted in c direction
     @property {number} [rowShift = 1] - The number of rows the Grid should be shifted in r direction
   */

  /**
   * Displays a grid on a display
   * @param {string} displayName - Name of the Display
   * @param {string} gridName - Name of the Grid
   * @param {displaySettings} displaySettings - Object containing all your displaySettings
   */
  displayGrid( displayName, gridName, displaySettings ){
    //validate displaySettings
    let validDisplaySettings;
    try {
      validDisplaySettings = Joi.attempt( displaySettings, Griga.displaySettingsSchema );
    }
    catch (e) {
      e.name = 'DisplaySettingsError';
      console.error(`${e.name}: ${e.message}`);
      return;
    }
    this.displays[ displayName ].linkGrid( this.grids[ gridName ], validDisplaySettings );
    this.grids[ gridName ].displays[ displayName ] = this.displays[ displayName ];
  }
  /**
   * Removes a grid from a display
   * @param {string} gridName - Name of the Grid
   * @param {string} displayName - Name of the Display
   */
  removeGridFromDisplay( gridName, displayName ){
    this.displays[ displayName ].unlinkGrid( gridName );
    delete this.grids[ gridName ].displays[ displayName ];
  }

  /**
   * Adds a new Display to griga.displays.
   * @param {string} name - Name of the Display
   * @param {string} wrapperId - Id of the html-element for the display
   * @param {*} widthHeightRatio -Width Height ratio
   */
  newDisplay( name, wrapperId, widthHeightRatio = 1 ){
    this.displays[ name ] = new _display__WEBPACK_IMPORTED_MODULE_0__["Display"]( {
      name, wrapperId, widthHeightRatio
    } );
  }

  /**
   * Deletes a Display and all its Links to Grids
   * @param {string} name 
   */
  deleteDisplay( name ){
    Object.keys(this.displays[name].linkedGrids).forEach( grid => {
      delete this.grids[ grid ].displays[ name ];
    } );
    delete this.displays[name];
  }

  resizeDisplays(){
    Object.values( this.displays ).forEach( 
      display => display.resize()
    );
  }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BoYXBpL2pvaS9kaXN0L2pvaS1icm93c2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2JhY2tncm91bmRfdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9naG9zdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ29hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2hvbGVfYm9yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3N0b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3dvb2Rlbl9ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvc2VsZWN0aW9uX2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvbG9jYWxfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlnYS9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlnYS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2dyaWdhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxlQUFlLEtBQWlELG9CQUFvQixTQUFxRyxDQUFDLG9CQUFvQixtQkFBbUIsU0FBUyxjQUFjLDRCQUE0QixZQUFZLHFCQUFxQiwyREFBMkQsdUNBQXVDLHFDQUFxQyxvQkFBb0IsRUFBRSxpQkFBaUIsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsRUFBRSxtQkFBbUIsOEJBQThCLHFEQUFxRCwwQkFBMEIsNkNBQTZDLHNCQUFzQiw2REFBNkQsWUFBWSxlQUFlLFNBQVMs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QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3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QUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixjO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9B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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFF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Q0wsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JELE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxnQkFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU8sSUFBSSxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0RBQU87QUFDdkM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZ2hvc3R5L2FwcC5qc1wiKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuam9pPXQoKTplLmpvaT10KCl9KHdpbmRvdywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihzKXtpZih0W3NdKXJldHVybiB0W3NdLmV4cG9ydHM7dmFyIG49dFtzXT17aTpzLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbc10uY2FsbChuLmV4cG9ydHMsbixuLmV4cG9ydHMsciksbi5sPSEwLG4uZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxzKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6c30pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBzPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKHMpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbiBpbiBlKXIuZChzLG4sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxuKSk7cmV0dXJuIHN9LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz0xMSl9KFtmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDEyKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSwuLi50KXtpZighZSl7aWYoMT09PXQubGVuZ3RoJiZ0WzBdaW5zdGFuY2VvZiBFcnJvcil0aHJvdyB0WzBdO3Rocm93IG5ldyBzKHQpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDEyKSxvPXIoMjkpO2xldCBhLGk7Y29uc3QgbD17aXNvRGF0ZTovXig/OlstK11cXGR7Mn0pPyg/OlxcZHs0fSg/IVxcZHsyfVxcYikpKD86KC0/KSg/Oig/OjBbMS05XXwxWzAtMl0pKD86XFwxKD86WzEyXVxcZHwwWzEtOV18M1swMV0pKT98Vyg/OlswLTRdXFxkfDVbMC0yXSkoPzotP1sxLTddKT98KD86MDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKD86WzAtNV1cXGR8NlsxLTZdKSkpKD8hW1RdJHxbVF1bXFxkXStaJCkoPzpbVFxcc10oPzooPzooPzpbMDFdXFxkfDJbMC0zXSkoPzooOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoPzpbLixdXFxkKyg/ITopKT8pKD86XFwyWzAtNV1cXGQoPzpbLixdXFxkKyk/KT8oPzpbWl18KD86WystXSkoPzpbMDFdXFxkfDJbMC0zXSkoPzo6P1swLTVdXFxkKT8pPyk/KT8kL307dC52ZXJzaW9uPW8udmVyc2lvbix0LmRlZmF1bHRzPXthYm9ydEVhcmx5OiEwLGFsbG93VW5rbm93bjohMSxjYWNoZTohMCxjb250ZXh0Om51bGwsY29udmVydDohMCxkYXRlRm9ybWF0OlwiaXNvXCIsZXJyb3JzOntlc2NhcGVIdG1sOiExLGxhYmVsOlwicGF0aFwiLGxhbmd1YWdlOm51bGwscmVuZGVyOiEwLHN0YWNrOiExLHdyYXA6e2xhYmVsOidcIicsYXJyYXk6XCJbXVwifX0sZXh0ZXJuYWxzOiEwLG1lc3NhZ2VzOnt9LG5vbkVudW1lcmFibGVzOiExLG5vRGVmYXVsdHM6ITEscHJlc2VuY2U6XCJvcHRpb25hbFwiLHNraXBGdW5jdGlvbnM6ITEsc3RyaXBVbmtub3duOiExLHdhcm5pbmdzOiExfSx0LnN5bWJvbHM9e2FueTpTeW1ib2wuZm9yKFwiQGhhcGkvam9pL3NjaGVtYVwiKSxhcnJheVNpbmdsZTpTeW1ib2woXCJhcnJheVNpbmdsZVwiKSxkZWVwRGVmYXVsdDpTeW1ib2woXCJkZWVwRGVmYXVsdFwiKSxsaXRlcmFsOlN5bWJvbChcImxpdGVyYWxcIiksb3ZlcnJpZGU6U3ltYm9sKFwib3ZlcnJpZGVcIikscHJlZnM6U3ltYm9sKFwicHJlZnNcIikscmVmOlN5bWJvbChcInJlZlwiKSx2YWx1ZXM6U3ltYm9sKFwidmFsdWVzXCIpLHRlbXBsYXRlOlN5bWJvbChcInRlbXBsYXRlXCIpfSx0LmFzc2VydE9wdGlvbnM9ZnVuY3Rpb24oZSx0LHI9XCJPcHRpb25zXCIpe3MoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJiFBcnJheS5pc0FycmF5KGUpLFwiT3B0aW9ucyBtdXN0IGJlIG9mIHR5cGUgb2JqZWN0XCIpO2NvbnN0IG49T2JqZWN0LmtleXMoZSkuZmlsdGVyKGU9PiF0LmluY2x1ZGVzKGUpKTtzKDA9PT1uLmxlbmd0aCxcIlwiLmNvbmNhdChyLFwiIGNvbnRhaW4gdW5rbm93biBrZXlzOiBcIikuY29uY2F0KG4pKX0sdC5jaGVja1ByZWZlcmVuY2VzPWZ1bmN0aW9uKGUpe2k9aXx8cigxNik7Y29uc3QgdD1pLnByZWZlcmVuY2VzLnZhbGlkYXRlKGUpO2lmKHQuZXJyb3IpdGhyb3cgbmV3IG4oW3QuZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlXSl9LHQuY29tcGFyZT1mdW5jdGlvbihlLHQscil7c3dpdGNoKHIpe2Nhc2VcIj1cIjpyZXR1cm4gZT09PXQ7Y2FzZVwiPlwiOnJldHVybiBlPnQ7Y2FzZVwiPFwiOnJldHVybiBlPHQ7Y2FzZVwiPj1cIjpyZXR1cm4gZT49dDtjYXNlXCI8PVwiOnJldHVybiBlPD10fX0sdC5kZWZhdWx0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PWU/dDplfSx0LmlzSXNvRGF0ZT1mdW5jdGlvbihlKXtyZXR1cm4gbC5pc29EYXRlLnRlc3QoZSl9LHQuaXNOdW1iZXI9ZnVuY3Rpb24oZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJiFpc05hTihlKX0sdC5pc1Jlc29sdmFibGU9ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiYoZVt0LnN5bWJvbHMucmVmXXx8ZVt0LnN5bWJvbHMudGVtcGxhdGVdKX0sdC5pc1NjaGVtYT1mdW5jdGlvbihlLHI9e30pe2NvbnN0IG49ZSYmZVt0LnN5bWJvbHMuYW55XTtyZXR1cm4hIW4mJihzKHIubGVnYWN5fHxuLnZlcnNpb249PT10LnZlcnNpb24sXCJDYW5ub3QgbWl4IGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBqb2kgc2NoZW1hc1wiKSwhMCl9LHQuaXNWYWx1ZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGVbdC5zeW1ib2xzLnZhbHVlc119LHQubGltaXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPj0wfSx0LnByZWZlcmVuY2VzPWZ1bmN0aW9uKGUscyl7YT1hfHxyKDkpLGU9ZXx8e30scz1zfHx7fTtjb25zdCBuPU9iamVjdC5hc3NpZ24oe30sZSxzKTtyZXR1cm4gcy5lcnJvcnMmJmUuZXJyb3JzJiYobi5lcnJvcnM9T2JqZWN0LmFzc2lnbih7fSxlLmVycm9ycyxzLmVycm9ycyksbi5lcnJvcnMud3JhcD1PYmplY3QuYXNzaWduKHt9LGUuZXJyb3JzLndyYXAscy5lcnJvcnMud3JhcCkpLHMubWVzc2FnZXMmJihuLm1lc3NhZ2VzPWEuY29tcGlsZShzLm1lc3NhZ2VzLGUubWVzc2FnZXMpKSxkZWxldGUgblt0LnN5bWJvbHMucHJlZnNdLG59LHQudHJ5V2l0aFBhdGg9ZnVuY3Rpb24oZSx0LHI9e30pe3RyeXtyZXR1cm4gZSgpfWNhdGNoKGUpe3Rocm93IHZvaWQgMCE9PWUucGF0aD9lLnBhdGg9dCtcIi5cIitlLnBhdGg6ZS5wYXRoPXQsci5hcHBlbmQmJihlLm1lc3NhZ2U9XCJcIi5jb25jYXQoZS5tZXNzYWdlLFwiIChcIikuY29uY2F0KGUucGF0aCxcIilcIikpLGV9fSx0LnZhbGlkYXRlQXJnPWZ1bmN0aW9uKGUscix7YXNzZXJ0OnMsbWVzc2FnZTpufSl7aWYodC5pc1NjaGVtYShzKSl7Y29uc3QgdD1zLnZhbGlkYXRlKGUpO2lmKCF0LmVycm9yKXJldHVybjtyZXR1cm4gdC5lcnJvci5tZXNzYWdlfWlmKCFzKGUpKXJldHVybiByP1wiXCIuY29uY2F0KHIsXCIgXCIpLmNvbmNhdChuKTpufSx0LnZlcmlmeUZsYXQ9ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZiBlKXMoIUFycmF5LmlzQXJyYXkociksXCJNZXRob2Qgbm8gbG9uZ2VyIGFjY2VwdHMgYXJyYXkgYXJndW1lbnRzOlwiLHQpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cig2KSxuPXIoMTMpLG89cigxNCksYT17bmVlZHNQcm90b0hhY2s6bmV3IFNldChbbi5zZXQsbi5tYXAsbi53ZWFrU2V0LG4ud2Vha01hcF0pfTtlLmV4cG9ydHM9YS5jbG9uZT1mdW5jdGlvbihlLHQ9e30scj1udWxsKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZXx8bnVsbD09PWUpcmV0dXJuIGU7bGV0IHM9YS5jbG9uZSxpPXI7aWYodC5zaGFsbG93KXtpZighMCE9PXQuc2hhbGxvdylyZXR1cm4gYS5jbG9uZVdpdGhTaGFsbG93KGUsdCk7cz1lPT5lfWVsc2UgaWYoaSl7Y29uc3QgdD1pLmdldChlKTtpZih0KXJldHVybiB0fWVsc2UgaT1uZXcgTWFwO2NvbnN0IGw9bi5nZXRJbnRlcm5hbFByb3RvKGUpO2lmKGw9PT1uLmJ1ZmZlcilyZXR1cm4hMTtpZihsPT09bi5kYXRlKXJldHVybiBuZXcgRGF0ZShlLmdldFRpbWUoKSk7aWYobD09PW4ucmVnZXgpcmV0dXJuIG5ldyBSZWdFeHAoZSk7Y29uc3QgYz1hLmJhc2UoZSxsLHQpO2lmKGM9PT1lKXJldHVybiBlO2lmKGkmJmkuc2V0KGUsYyksbD09PW4uc2V0KWZvcihjb25zdCByIG9mIGUpYy5hZGQocyhyLHQsaSkpO2Vsc2UgaWYobD09PW4ubWFwKWZvcihjb25zdFtyLG5db2YgZSljLnNldChyLHMobix0LGkpKTtjb25zdCB1PW8ua2V5cyhlLHQpO2Zvcihjb25zdCByIG9mIHUpe2lmKFwiX19wcm90b19fXCI9PT1yKWNvbnRpbnVlO2lmKGw9PT1uLmFycmF5JiZcImxlbmd0aFwiPT09cil7Yy5sZW5ndGg9ZS5sZW5ndGg7Y29udGludWV9Y29uc3Qgbz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUscik7bz9vLmdldHx8by5zZXQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KGMscixvKTpvLmVudW1lcmFibGU/Y1tyXT1zKGVbcl0sdCxpKTpPYmplY3QuZGVmaW5lUHJvcGVydHkoYyxyLHtlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx2YWx1ZTpzKGVbcl0sdCxpKX0pOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShjLHIse2VudW1lcmFibGU6ITAsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOnMoZVtyXSx0LGkpfSl9cmV0dXJuIGN9LGEuY2xvbmVXaXRoU2hhbGxvdz1mdW5jdGlvbihlLHQpe2NvbnN0IHI9dC5zaGFsbG93Oyh0PU9iamVjdC5hc3NpZ24oe30sdCkpLnNoYWxsb3c9ITE7Y29uc3Qgbj1uZXcgTWFwO2Zvcihjb25zdCB0IG9mIHIpe2NvbnN0IHI9cyhlLHQpO1wib2JqZWN0XCIhPXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByfHxuLnNldChyLHIpfXJldHVybiBhLmNsb25lKGUsdCxuKX0sYS5iYXNlPWZ1bmN0aW9uKGUsdCxyKXtpZighMT09PXIucHJvdG90eXBlKXJldHVybiBhLm5lZWRzUHJvdG9IYWNrLmhhcyh0KT9uZXcgdC5jb25zdHJ1Y3Rvcjp0PT09bi5hcnJheT9bXTp7fTtjb25zdCBzPU9iamVjdC5nZXRQcm90b3R5cGVPZihlKTtpZihzJiZzLmlzSW1tdXRhYmxlKXJldHVybiBlO2lmKHQ9PT1uLmFycmF5KXtjb25zdCBlPVtdO3JldHVybiBzIT09dCYmT2JqZWN0LnNldFByb3RvdHlwZU9mKGUscyksZX1pZihhLm5lZWRzUHJvdG9IYWNrLmhhcyh0KSl7Y29uc3QgZT1uZXcgcy5jb25zdHJ1Y3RvcjtyZXR1cm4gcyE9PXQmJk9iamVjdC5zZXRQcm90b3R5cGVPZihlLHMpLGV9cmV0dXJuIE9iamVjdC5jcmVhdGUocyl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzNCksbz1yKDEpLGE9cig5KTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJhbnlcIixmbGFnczp7b25seTp7ZGVmYXVsdDohMX19LHRlcm1zOnthbHRlcmF0aW9uczp7aW5pdDpudWxsfSxleGFtcGxlczp7aW5pdDpudWxsfSxleHRlcm5hbHM6e2luaXQ6bnVsbH0sbWV0YXM6e2luaXQ6W119LG5vdGVzOntpbml0OltdfSxzaGFyZWQ6e2luaXQ6bnVsbH0sdGFnczp7aW5pdDpbXX0sd2hlbnM6e2luaXQ6bnVsbH19LHJ1bGVzOntjdXN0b206e21ldGhvZChlLHQpe3JldHVybiBzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNZXRob2QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHModm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImN1c3RvbVwiLGFyZ3M6e21ldGhvZDplLGRlc2NyaXB0aW9uOnR9fSl9LHZhbGlkYXRlKGUsdCx7bWV0aG9kOnJ9KXt0cnl7cmV0dXJuIHIoZSx0KX1jYXRjaChlKXtyZXR1cm4gdC5lcnJvcihcImFueS5jdXN0b21cIix7ZXJyb3I6ZX0pfX0sYXJnczpbXCJtZXRob2RcIixcImRlc2NyaXB0aW9uXCJdLG11bHRpOiEwfSxtZXNzYWdlczp7bWV0aG9kKGUpe3JldHVybiB0aGlzLnByZWZzKHttZXNzYWdlczplfSl9fSxzaGFyZWQ6e21ldGhvZChlKXtzKG8uaXNTY2hlbWEoZSkmJmUuX2ZsYWdzLmlkLFwiU2NoZW1hIG11c3QgYmUgYSBzY2hlbWEgd2l0aCBhbiBpZFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC4kX3Rlcm1zLnNoYXJlZD10LiRfdGVybXMuc2hhcmVkfHxbXSx0LiRfdGVybXMuc2hhcmVkLnB1c2goZSksdC4kX211dGF0ZVJlZ2lzdGVyKGUpLHR9fSx3YXJuaW5nOnttZXRob2QoZSx0KXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgd2FybmluZyBjb2RlXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwid2FybmluZ1wiLGFyZ3M6e2NvZGU6ZSxsb2NhbDp0fSx3YXJuOiEwfSl9LHZhbGlkYXRlOihlLHQse2NvZGU6cixsb2NhbDpzfSk9PnQuZXJyb3IocixzKSxhcmdzOltcImNvZGVcIixcImxvY2FsXCJdLG11bHRpOiEwfX0sbW9kaWZpZXJzOntrZWVwKGUsdD0hMCl7ZS5rZWVwPXR9LG1lc3NhZ2UoZSx0KXtlLm1lc3NhZ2U9YS5jb21waWxlKHQpfSx3YXJuKGUsdD0hMCl7ZS53YXJuPXR9fSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtmb3IoY29uc3QgciBpbiB0KXtjb25zdCBzPXRbcl07aWYoW1wiZXhhbXBsZXNcIixcImV4dGVybmFsc1wiLFwibWV0YXNcIixcIm5vdGVzXCIsXCJ0YWdzXCJdLmluY2x1ZGVzKHIpKWZvcihjb25zdCB0IG9mIHMpZT1lW3Iuc2xpY2UoMCwtMSldKHQpO2Vsc2UgaWYoXCJhbHRlcmF0aW9uc1wiIT09cilpZihcIndoZW5zXCIhPT1yKXtpZihcInNoYXJlZFwiPT09cilmb3IoY29uc3QgdCBvZiBzKWU9ZS5zaGFyZWQodCl9ZWxzZSBmb3IoY29uc3QgdCBvZiBzKXtjb25zdHtyZWY6cixpczpzLG5vdDpuLHRoZW46byxvdGhlcndpc2U6YSxjb25jYXQ6aX09dDtlPWk/ZS5jb25jYXQoaSk6cj9lLndoZW4ocix7aXM6cyxub3Q6bix0aGVuOm8sb3RoZXJ3aXNlOmEsc3dpdGNoOnQuc3dpdGNoLGJyZWFrOnQuYnJlYWt9KTplLndoZW4ocyx7dGhlbjpvLG90aGVyd2lzZTphLGJyZWFrOnQuYnJlYWt9KX1lbHNle2NvbnN0IHQ9e307Zm9yKGNvbnN0e3RhcmdldDplLGFkanVzdGVyOnJ9b2Ygcyl0W2VdPXI7ZT1lLmFsdGVyKHQpfX1yZXR1cm4gZX19LG1lc3NhZ2VzOntcImFueS5jdXN0b21cIjpcInt7I2xhYmVsfX0gZmFpbGVkIGN1c3RvbSB2YWxpZGF0aW9uIGJlY2F1c2Uge3sjZXJyb3IubWVzc2FnZX19XCIsXCJhbnkuZGVmYXVsdFwiOlwie3sjbGFiZWx9fSB0aHJldyBhbiBlcnJvciB3aGVuIHJ1bm5pbmcgZGVmYXVsdCBtZXRob2RcIixcImFueS5mYWlsb3ZlclwiOlwie3sjbGFiZWx9fSB0aHJldyBhbiBlcnJvciB3aGVuIHJ1bm5pbmcgZmFpbG92ZXIgbWV0aG9kXCIsXCJhbnkuaW52YWxpZFwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhbiBpbnZhbGlkIHZhbHVlXCIsXCJhbnkub25seVwiOid7eyNsYWJlbH19IG11c3QgYmUge2lmKCN2YWxpZHMubGVuZ3RoID09IDEsIFwiXCIsIFwib25lIG9mIFwiKX17eyN2YWxpZHN9fScsXCJhbnkucmVmXCI6J3t7I2xhYmVsfX0ge3sjYXJnfX0gcmVmZXJlbmNlcyBcInt7I3JlZn19XCIgd2hpY2gge3sjcmVhc29ufX0nLFwiYW55LnJlcXVpcmVkXCI6XCJ7eyNsYWJlbH19IGlzIHJlcXVpcmVkXCIsXCJhbnkudW5rbm93blwiOlwie3sjbGFiZWx9fSBpcyBub3QgYWxsb3dlZFwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDMyKSxuPXIoMSksbz1yKDcpO3QuUmVwb3J0PWNsYXNze2NvbnN0cnVjdG9yKGUscixzLG4sbyxhLGkpe2lmKHRoaXMuY29kZT1lLHRoaXMuZmxhZ3M9bix0aGlzLm1lc3NhZ2VzPW8sdGhpcy5wYXRoPWEucGF0aCx0aGlzLnByZWZzPWksdGhpcy5zdGF0ZT1hLHRoaXMudmFsdWU9cix0aGlzLm1lc3NhZ2U9bnVsbCx0aGlzLnRlbXBsYXRlPW51bGwsdGhpcy5sb2NhbD1zfHx7fSx0aGlzLmxvY2FsLmxhYmVsPXQubGFiZWwodGhpcy5mbGFncyx0aGlzLnN0YXRlLHRoaXMucHJlZnMsdGhpcy5tZXNzYWdlcyksdm9pZCAwPT09dGhpcy52YWx1ZXx8dGhpcy5sb2NhbC5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpfHwodGhpcy5sb2NhbC52YWx1ZT10aGlzLnZhbHVlKSx0aGlzLnBhdGgubGVuZ3RoKXtjb25zdCBlPXRoaXMucGF0aFt0aGlzLnBhdGgubGVuZ3RoLTFdO1wib2JqZWN0XCIhPXR5cGVvZiBlJiYodGhpcy5sb2NhbC5rZXk9ZSl9fV9zZXRUZW1wbGF0ZShlKXtpZih0aGlzLnRlbXBsYXRlPWUsIXRoaXMuZmxhZ3MubGFiZWwmJjA9PT10aGlzLnBhdGgubGVuZ3RoKXtjb25zdCBlPXRoaXMuX3RlbXBsYXRlKHRoaXMudGVtcGxhdGUsXCJyb290XCIpO2UmJih0aGlzLmxvY2FsLmxhYmVsPWUpfX10b1N0cmluZygpe2lmKHRoaXMubWVzc2FnZSlyZXR1cm4gdGhpcy5tZXNzYWdlO2NvbnN0IGU9dGhpcy5jb2RlO2lmKCF0aGlzLnByZWZzLmVycm9ycy5yZW5kZXIpcmV0dXJuIHRoaXMuY29kZTtjb25zdCB0PXRoaXMuX3RlbXBsYXRlKHRoaXMudGVtcGxhdGUpfHx0aGlzLl90ZW1wbGF0ZSh0aGlzLnByZWZzLm1lc3NhZ2VzKXx8dGhpcy5fdGVtcGxhdGUodGhpcy5tZXNzYWdlcyk7cmV0dXJuIHZvaWQgMD09PXQ/J0Vycm9yIGNvZGUgXCInLmNvbmNhdChlLCdcIiBpcyBub3QgZGVmaW5lZCwgeW91ciBjdXN0b20gdHlwZSBpcyBtaXNzaW5nIHRoZSBjb3JyZWN0IG1lc3NhZ2VzIGRlZmluaXRpb24nKToodGhpcy5tZXNzYWdlPXQucmVuZGVyKHRoaXMudmFsdWUsdGhpcy5zdGF0ZSx0aGlzLnByZWZzLHRoaXMubG9jYWwse2Vycm9yczp0aGlzLnByZWZzLmVycm9ycyxtZXNzYWdlczpbdGhpcy5wcmVmcy5tZXNzYWdlcyx0aGlzLm1lc3NhZ2VzXX0pLHRoaXMucHJlZnMuZXJyb3JzLmxhYmVsfHwodGhpcy5tZXNzYWdlPXRoaXMubWVzc2FnZS5yZXBsYWNlKC9eXCJcIiAvLFwiXCIpLnRyaW0oKSksdGhpcy5tZXNzYWdlKX1fdGVtcGxhdGUoZSxyKXtyZXR1cm4gdC50ZW1wbGF0ZSh0aGlzLnZhbHVlLGUscnx8dGhpcy5jb2RlLHRoaXMuc3RhdGUsdGhpcy5wcmVmcyl9fSx0LnBhdGg9ZnVuY3Rpb24oZSl7bGV0IHQ9XCJcIjtmb3IoY29uc3QgciBvZiBlKVwib2JqZWN0XCIhPXR5cGVvZiByJiYoXCJzdHJpbmdcIj09dHlwZW9mIHI/KHQmJih0Kz1cIi5cIiksdCs9cik6dCs9XCJbXCIuY29uY2F0KHIsXCJdXCIpKTtyZXR1cm4gdH0sdC50ZW1wbGF0ZT1mdW5jdGlvbihlLHQscixzLGEpe2lmKCF0KXJldHVybjtpZihvLmlzVGVtcGxhdGUodCkpcmV0dXJuXCJyb290XCIhPT1yP3Q6bnVsbDtsZXQgaT1hLmVycm9ycy5sYW5ndWFnZTtyZXR1cm4gbi5pc1Jlc29sdmFibGUoaSkmJihpPWkucmVzb2x2ZShlLHMsYSkpLGkmJnRbaV0mJnZvaWQgMCE9PXRbaV1bcl0/dFtpXVtyXTp0W3JdfSx0LmxhYmVsPWZ1bmN0aW9uKGUscixzLG4pe2lmKGUubGFiZWwpcmV0dXJuIGUubGFiZWw7aWYoIXMuZXJyb3JzLmxhYmVsKXJldHVyblwiXCI7bGV0IG89ci5wYXRoO1wia2V5XCI9PT1zLmVycm9ycy5sYWJlbCYmci5wYXRoLmxlbmd0aD4xJiYobz1yLnBhdGguc2xpY2UoLTEpKTtjb25zdCBhPXQucGF0aChvKTtyZXR1cm4gYXx8KHQudGVtcGxhdGUobnVsbCxzLm1lc3NhZ2VzLFwicm9vdFwiLHIscyl8fG4mJnQudGVtcGxhdGUobnVsbCxuLFwicm9vdFwiLHIscyl8fFwidmFsdWVcIil9LHQucHJvY2Vzcz1mdW5jdGlvbihlLHIscyl7aWYoIWUpcmV0dXJuIG51bGw7Y29uc3R7b3ZlcnJpZGU6bixtZXNzYWdlOm8sZGV0YWlsczphfT10LmRldGFpbHMoZSk7aWYobilyZXR1cm4gbjtpZihzLmVycm9ycy5zdGFjaylyZXR1cm4gbmV3IHQuVmFsaWRhdGlvbkVycm9yKG8sYSxyKTtjb25zdCBpPUVycm9yLnN0YWNrVHJhY2VMaW1pdDtFcnJvci5zdGFja1RyYWNlTGltaXQ9MDtjb25zdCBsPW5ldyB0LlZhbGlkYXRpb25FcnJvcihvLGEscik7cmV0dXJuIEVycm9yLnN0YWNrVHJhY2VMaW1pdD1pLGx9LHQuZGV0YWlscz1mdW5jdGlvbihlLHQ9e30pe2xldCByPVtdO2NvbnN0IHM9W107Zm9yKGNvbnN0IG4gb2YgZSl7aWYobiBpbnN0YW5jZW9mIEVycm9yKXtpZighMSE9PXQub3ZlcnJpZGUpcmV0dXJue292ZXJyaWRlOm59O2NvbnN0IGU9bi50b1N0cmluZygpO3IucHVzaChlKSxzLnB1c2goe21lc3NhZ2U6ZSx0eXBlOlwib3ZlcnJpZGVcIixjb250ZXh0OntlcnJvcjpufX0pO2NvbnRpbnVlfWNvbnN0IGU9bi50b1N0cmluZygpO3IucHVzaChlKSxzLnB1c2goe21lc3NhZ2U6ZSxwYXRoOm4ucGF0aC5maWx0ZXIoZT0+XCJvYmplY3RcIiE9dHlwZW9mIGUpLHR5cGU6bi5jb2RlLGNvbnRleHQ6bi5sb2NhbH0pfXJldHVybiByLmxlbmd0aD4xJiYocj1bLi4ubmV3IFNldChyKV0pLHttZXNzYWdlOnIuam9pbihcIi4gXCIpLGRldGFpbHM6c319LHQuVmFsaWRhdGlvbkVycm9yPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSx0LHIpe3N1cGVyKGUpLHRoaXMuX29yaWdpbmFsPXIsdGhpcy5kZXRhaWxzPXR9c3RhdGljIGlzRXJyb3IoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiB0LlZhbGlkYXRpb25FcnJvcn19LHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5pc0pvaT0hMCx0LlZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUubmFtZT1cIlZhbGlkYXRpb25FcnJvclwiLHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5hbm5vdGF0ZT1zLmVycm9yfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoNiksYT1yKDEpO2xldCBpO2NvbnN0IGw9e3N5bWJvbDpTeW1ib2woXCJyZWZcIiksZGVmYXVsdHM6e2FkanVzdDpudWxsLGluOiExLGl0ZXJhYmxlczpudWxsLG1hcDpudWxsLHNlcGFyYXRvcjpcIi5cIix0eXBlOlwidmFsdWVcIn19O3QuY3JlYXRlPWZ1bmN0aW9uKGUsdD17fSl7cyhcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgcmVmZXJlbmNlIGtleTpcIixlKSxhLmFzc2VydE9wdGlvbnModCxbXCJhZGp1c3RcIixcImFuY2VzdG9yXCIsXCJpblwiLFwiaXRlcmFibGVzXCIsXCJtYXBcIixcInByZWZpeFwiLFwic2VwYXJhdG9yXCJdKSxzKCF0LnByZWZpeHx8XCJvYmplY3RcIj09dHlwZW9mIHQucHJlZml4LFwib3B0aW9ucy5wcmVmaXggbXVzdCBiZSBvZiB0eXBlIG9iamVjdFwiKTtjb25zdCByPU9iamVjdC5hc3NpZ24oe30sbC5kZWZhdWx0cyx0KTtkZWxldGUgci5wcmVmaXg7Y29uc3Qgbj1yLnNlcGFyYXRvcixvPWwuY29udGV4dChlLG4sdC5wcmVmaXgpO2lmKHIudHlwZT1vLnR5cGUsZT1vLmtleSxcInZhbHVlXCI9PT1yLnR5cGUpaWYoby5yb290JiYocyghbnx8ZVswXSE9PW4sXCJDYW5ub3Qgc3BlY2lmeSByZWxhdGl2ZSBwYXRoIHdpdGggcm9vdCBwcmVmaXhcIiksci5hbmNlc3Rvcj1cInJvb3RcIixlfHwoZT1udWxsKSksbiYmbj09PWUpZT1udWxsLHIuYW5jZXN0b3I9MDtlbHNlIGlmKHZvaWQgMCE9PXIuYW5jZXN0b3Ipcyghbnx8IWV8fGVbMF0hPT1uLFwiQ2Fubm90IGNvbWJpbmUgcHJlZml4IHdpdGggYW5jZXN0b3Igb3B0aW9uXCIpO2Vsc2V7Y29uc3RbdCxzXT1sLmFuY2VzdG9yKGUsbik7cyYmXCJcIj09PShlPWUuc2xpY2UocykpJiYoZT1udWxsKSxyLmFuY2VzdG9yPXR9cmV0dXJuIHIucGF0aD1uP251bGw9PT1lP1tdOmUuc3BsaXQobik6W2VdLG5ldyBsLlJlZihyKX0sdC5pbj1mdW5jdGlvbihlLHI9e30pe3JldHVybiB0LmNyZWF0ZShlLE9iamVjdC5hc3NpZ24oe30scix7aW46ITB9KSl9LHQuaXNSZWY9ZnVuY3Rpb24oZSl7cmV0dXJuISFlJiYhIWVbYS5zeW1ib2xzLnJlZl19LGwuUmVmPWNsYXNze2NvbnN0cnVjdG9yKGUpe3MoXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHJlZmVyZW5jZSBjb25zdHJ1Y3Rpb25cIiksYS5hc3NlcnRPcHRpb25zKGUsW1wiYWRqdXN0XCIsXCJhbmNlc3RvclwiLFwiaW5cIixcIml0ZXJhYmxlc1wiLFwibWFwXCIsXCJwYXRoXCIsXCJzZXBhcmF0b3JcIixcInR5cGVcIixcImRlcHRoXCIsXCJrZXlcIixcInJvb3RcIixcImRpc3BsYXlcIl0pLHMoWyExLHZvaWQgMF0uaW5jbHVkZXMoZS5zZXBhcmF0b3IpfHxcInN0cmluZ1wiPT10eXBlb2YgZS5zZXBhcmF0b3ImJjE9PT1lLnNlcGFyYXRvci5sZW5ndGgsXCJJbnZhbGlkIHNlcGFyYXRvclwiKSxzKCFlLmFkanVzdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgZS5hZGp1c3QsXCJvcHRpb25zLmFkanVzdCBtdXN0IGJlIGEgZnVuY3Rpb25cIikscyghZS5tYXB8fEFycmF5LmlzQXJyYXkoZS5tYXApLFwib3B0aW9ucy5tYXAgbXVzdCBiZSBhbiBhcnJheVwiKSxzKCFlLm1hcHx8IWUuYWRqdXN0LFwiQ2Fubm90IHNldCBib3RoIG1hcCBhbmQgYWRqdXN0IG9wdGlvbnNcIiksT2JqZWN0LmFzc2lnbih0aGlzLGwuZGVmYXVsdHMsZSkscyhcInZhbHVlXCI9PT10aGlzLnR5cGV8fHZvaWQgMD09PXRoaXMuYW5jZXN0b3IsXCJOb24tdmFsdWUgcmVmZXJlbmNlcyBjYW5ub3QgcmVmZXJlbmNlIGFuY2VzdG9yc1wiKSxBcnJheS5pc0FycmF5KHRoaXMubWFwKSYmKHRoaXMubWFwPW5ldyBNYXAodGhpcy5tYXApKSx0aGlzLmRlcHRoPXRoaXMucGF0aC5sZW5ndGgsdGhpcy5rZXk9dGhpcy5wYXRoLmxlbmd0aD90aGlzLnBhdGguam9pbih0aGlzLnNlcGFyYXRvcik6bnVsbCx0aGlzLnJvb3Q9dGhpcy5wYXRoWzBdLHRoaXMudXBkYXRlRGlzcGxheSgpfXJlc29sdmUoZSx0LHIsbixvPXt9KXtyZXR1cm4gcyghdGhpcy5pbnx8by5pbixcIkludmFsaWQgaW4oKSByZWZlcmVuY2UgdXNhZ2VcIiksXCJnbG9iYWxcIj09PXRoaXMudHlwZT90aGlzLl9yZXNvbHZlKHIuY29udGV4dCx0LG8pOlwibG9jYWxcIj09PXRoaXMudHlwZT90aGlzLl9yZXNvbHZlKG4sdCxvKTp0aGlzLmFuY2VzdG9yP1wicm9vdFwiPT09dGhpcy5hbmNlc3Rvcj90aGlzLl9yZXNvbHZlKHQuYW5jZXN0b3JzW3QuYW5jZXN0b3JzLmxlbmd0aC0xXSx0LG8pOihzKHRoaXMuYW5jZXN0b3I8PXQuYW5jZXN0b3JzLmxlbmd0aCxcIkludmFsaWQgcmVmZXJlbmNlIGV4Y2VlZHMgdGhlIHNjaGVtYSByb290OlwiLHRoaXMuZGlzcGxheSksdGhpcy5fcmVzb2x2ZSh0LmFuY2VzdG9yc1t0aGlzLmFuY2VzdG9yLTFdLHQsbykpOnRoaXMuX3Jlc29sdmUoZSx0LG8pfV9yZXNvbHZlKGUsdCxyKXtsZXQgcztpZihcInZhbHVlXCI9PT10aGlzLnR5cGUmJnQubWFpbnN0YXkuc2hhZG93JiYhMSE9PXIuc2hhZG93JiYocz10Lm1haW5zdGF5LnNoYWRvdy5nZXQodGhpcy5hYnNvbHV0ZSh0KSkpLHZvaWQgMD09PXMmJihzPW8oZSx0aGlzLnBhdGgse2l0ZXJhYmxlczp0aGlzLml0ZXJhYmxlcyxmdW5jdGlvbnM6ITB9KSksdGhpcy5hZGp1c3QmJihzPXRoaXMuYWRqdXN0KHMpKSx0aGlzLm1hcCl7Y29uc3QgZT10aGlzLm1hcC5nZXQocyk7dm9pZCAwIT09ZSYmKHM9ZSl9cmV0dXJuIHQubWFpbnN0YXkmJnQubWFpbnN0YXkudHJhY2VyLnJlc29sdmUodCx0aGlzLHMpLHN9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5kaXNwbGF5fWFic29sdXRlKGUpe3JldHVyblsuLi5lLnBhdGguc2xpY2UoMCwtdGhpcy5hbmNlc3RvciksLi4udGhpcy5wYXRoXX1jbG9uZSgpe3JldHVybiBuZXcgbC5SZWYodGhpcyl9ZGVzY3JpYmUoKXtjb25zdCBlPXtwYXRoOnRoaXMucGF0aH07XCJ2YWx1ZVwiIT09dGhpcy50eXBlJiYoZS50eXBlPXRoaXMudHlwZSksXCIuXCIhPT10aGlzLnNlcGFyYXRvciYmKGUuc2VwYXJhdG9yPXRoaXMuc2VwYXJhdG9yKSxcInZhbHVlXCI9PT10aGlzLnR5cGUmJjEhPT10aGlzLmFuY2VzdG9yJiYoZS5hbmNlc3Rvcj10aGlzLmFuY2VzdG9yKSx0aGlzLm1hcCYmKGUubWFwPVsuLi50aGlzLm1hcF0pO2Zvcihjb25zdCB0IG9mW1wiYWRqdXN0XCIsXCJpdGVyYWJsZXNcIl0pbnVsbCE9PXRoaXNbdF0mJihlW3RdPXRoaXNbdF0pO3JldHVybiExIT09dGhpcy5pbiYmKGUuaW49ITApLHtyZWY6ZX19dXBkYXRlRGlzcGxheSgpe2NvbnN0IGU9bnVsbCE9PXRoaXMua2V5P3RoaXMua2V5OlwiXCI7aWYoXCJ2YWx1ZVwiIT09dGhpcy50eXBlKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodGhpcy50eXBlLFwiOlwiKS5jb25jYXQoZSkpO2lmKCF0aGlzLnNlcGFyYXRvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6XCIuY29uY2F0KGUpKTtpZighdGhpcy5hbmNlc3RvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6XCIuY29uY2F0KHRoaXMuc2VwYXJhdG9yKS5jb25jYXQoZSkpO2lmKFwicm9vdFwiPT09dGhpcy5hbmNlc3RvcilyZXR1cm4gdm9pZCh0aGlzLmRpc3BsYXk9XCJyZWY6cm9vdDpcIi5jb25jYXQoZSkpO2lmKDE9PT10aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQoZXx8XCIuLlwiKSk7Y29uc3QgdD1uZXcgQXJyYXkodGhpcy5hbmNlc3RvcisxKS5maWxsKHRoaXMuc2VwYXJhdG9yKS5qb2luKFwiXCIpO3RoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodCkuY29uY2F0KGV8fFwiXCIpfX0sbC5SZWYucHJvdG90eXBlW2Euc3ltYm9scy5yZWZdPSEwLHQuYnVpbGQ9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ2YWx1ZVwiPT09KGU9T2JqZWN0LmFzc2lnbih7fSxsLmRlZmF1bHRzLGUpKS50eXBlJiZ2b2lkIDA9PT1lLmFuY2VzdG9yJiYoZS5hbmNlc3Rvcj0xKSxuZXcgbC5SZWYoZSl9LGwuY29udGV4dD1mdW5jdGlvbihlLHQscj17fSl7aWYoZT1lLnRyaW0oKSxyKXtjb25zdCBzPXZvaWQgMD09PXIuZ2xvYmFsP1wiJFwiOnIuZ2xvYmFsO2lmKHMhPT10JiZlLnN0YXJ0c1dpdGgocykpcmV0dXJue2tleTplLnNsaWNlKHMubGVuZ3RoKSx0eXBlOlwiZ2xvYmFsXCJ9O2NvbnN0IG49dm9pZCAwPT09ci5sb2NhbD9cIiNcIjpyLmxvY2FsO2lmKG4hPT10JiZlLnN0YXJ0c1dpdGgobikpcmV0dXJue2tleTplLnNsaWNlKG4ubGVuZ3RoKSx0eXBlOlwibG9jYWxcIn07Y29uc3Qgbz12b2lkIDA9PT1yLnJvb3Q/XCIvXCI6ci5yb290O2lmKG8hPT10JiZlLnN0YXJ0c1dpdGgobykpcmV0dXJue2tleTplLnNsaWNlKG8ubGVuZ3RoKSx0eXBlOlwidmFsdWVcIixyb290OiEwfX1yZXR1cm57a2V5OmUsdHlwZTpcInZhbHVlXCJ9fSxsLmFuY2VzdG9yPWZ1bmN0aW9uKGUsdCl7aWYoIXQpcmV0dXJuWzEsMF07aWYoZVswXSE9PXQpcmV0dXJuWzEsMF07aWYoZVsxXSE9PXQpcmV0dXJuWzAsMV07bGV0IHI9Mjtmb3IoO2Vbcl09PT10OykrK3I7cmV0dXJuW3ItMSxyXX0sdC50b1NpYmxpbmc9MCx0LnRvUGFyZW50PTEsdC5NYW5hZ2VyPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5yZWZzPVtdfXJlZ2lzdGVyKGUscyl7aWYoZSlpZihzPXZvaWQgMD09PXM/dC50b1BhcmVudDpzLEFycmF5LmlzQXJyYXkoZSkpZm9yKGNvbnN0IHQgb2YgZSl0aGlzLnJlZ2lzdGVyKHQscyk7ZWxzZSBpZihhLmlzU2NoZW1hKGUpKWZvcihjb25zdCB0IG9mIGUuX3JlZnMucmVmcyl0LmFuY2VzdG9yLXM+PTAmJnRoaXMucmVmcy5wdXNoKHthbmNlc3Rvcjp0LmFuY2VzdG9yLXMscm9vdDp0LnJvb3R9KTtlbHNlIHQuaXNSZWYoZSkmJlwidmFsdWVcIj09PWUudHlwZSYmZS5hbmNlc3Rvci1zPj0wJiZ0aGlzLnJlZnMucHVzaCh7YW5jZXN0b3I6ZS5hbmNlc3Rvci1zLHJvb3Q6ZS5yb290fSksaT1pfHxyKDcpLGkuaXNUZW1wbGF0ZShlKSYmdGhpcy5yZWdpc3RlcihlLnJlZnMoKSxzKX1nZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMucmVmcy5sZW5ndGh9Y2xvbmUoKXtjb25zdCBlPW5ldyB0Lk1hbmFnZXI7cmV0dXJuIGUucmVmcz1uKHRoaXMucmVmcyksZX1yZXNldCgpe3RoaXMucmVmcz1bXX1yb290cygpe3JldHVybiB0aGlzLnJlZnMuZmlsdGVyKGU9PiFlLmFuY2VzdG9yKS5tYXAoZT0+ZS5yb290KX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtpZighMT09PXR8fG51bGw9PXQpcmV0dXJuIGU7XCJzdHJpbmdcIj09dHlwZW9mKHI9cnx8e30pJiYocj17c2VwYXJhdG9yOnJ9KTtjb25zdCBvPUFycmF5LmlzQXJyYXkodCk7cyghb3x8IXIuc2VwYXJhdG9yLFwiU2VwYXJhdG9yIG9wdGlvbiBubyB2YWxpZCBmb3IgYXJyYXktYmFzZWQgY2hhaW5cIik7Y29uc3QgYT1vP3Q6dC5zcGxpdChyLnNlcGFyYXRvcnx8XCIuXCIpO2xldCBpPWU7Zm9yKGxldCBlPTA7ZTxhLmxlbmd0aDsrK2Upe2xldCBvPWFbZV07Y29uc3QgbD1yLml0ZXJhYmxlcyYmbi5pdGVyYWJsZXMoaSk7aWYoQXJyYXkuaXNBcnJheShpKXx8XCJzZXRcIj09PWwpe2NvbnN0IGU9TnVtYmVyKG8pO051bWJlci5pc0ludGVnZXIoZSkmJihvPWU8MD9pLmxlbmd0aCtlOmUpfWlmKCFpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpJiYhMT09PXIuZnVuY3Rpb25zfHwhbCYmdm9pZCAwPT09aVtvXSl7cyghci5zdHJpY3R8fGUrMT09PWEubGVuZ3RoLFwiTWlzc2luZyBzZWdtZW50XCIsbyxcImluIHJlYWNoIHBhdGggXCIsdCkscyhcIm9iamVjdFwiPT10eXBlb2YgaXx8ITA9PT1yLmZ1bmN0aW9uc3x8XCJmdW5jdGlvblwiIT10eXBlb2YgaSxcIkludmFsaWQgc2VnbWVudFwiLG8sXCJpbiByZWFjaCBwYXRoIFwiLHQpLGk9ci5kZWZhdWx0O2JyZWFrfWk9bD9cInNldFwiPT09bD9bLi4uaV1bb106aS5nZXQobyk6aVtvXX1yZXR1cm4gaX0sbi5pdGVyYWJsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBTZXQ/XCJzZXRcIjplIGluc3RhbmNlb2YgTWFwP1wibWFwXCI6dm9pZCAwfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDMwKSxhPXIoMzEpLGk9cigxKSxsPXIoNCksYz1yKDUpLHU9e3N5bWJvbDpTeW1ib2woXCJ0ZW1wbGF0ZVwiKSxvcGVuczpuZXcgQXJyYXkoMWUzKS5qb2luKFwiXFwwXCIpLGNsb3NlczpuZXcgQXJyYXkoMWUzKS5qb2luKFwiXHUwMDAxXCIpLGRhdGVGb3JtYXQ6e2RhdGU6RGF0ZS5wcm90b3R5cGUudG9EYXRlU3RyaW5nLGlzbzpEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZyxzdHJpbmc6RGF0ZS5wcm90b3R5cGUudG9TdHJpbmcsdGltZTpEYXRlLnByb3RvdHlwZS50b1RpbWVTdHJpbmcsdXRjOkRhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nfX07ZS5leHBvcnRzPXUuVGVtcGxhdGU9Y2xhc3N7Y29uc3RydWN0b3IoZSx0KXtzKFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiVGVtcGxhdGUgc291cmNlIG11c3QgYmUgYSBzdHJpbmdcIikscyghZS5pbmNsdWRlcyhcIlxcMFwiKSYmIWUuaW5jbHVkZXMoXCJcdTAwMDFcIiksXCJUZW1wbGF0ZSBzb3VyY2UgY2Fubm90IGNvbnRhaW4gcmVzZXJ2ZWQgY29udHJvbCBjaGFyYWN0ZXJzXCIpLHRoaXMuc291cmNlPWUsdGhpcy5yZW5kZXJlZD1lLHRoaXMuX3RlbXBsYXRlPW51bGwsdGhpcy5fc2V0dGluZ3M9bih0KSx0aGlzLl9wYXJzZSgpfV9wYXJzZSgpe2lmKCF0aGlzLnNvdXJjZS5pbmNsdWRlcyhcIntcIikpcmV0dXJuO2NvbnN0IGU9dS5lbmNvZGUodGhpcy5zb3VyY2UpLHQ9dS5zcGxpdChlKTtsZXQgcj0hMTtjb25zdCBzPVtdLG49dC5zaGlmdCgpO24mJnMucHVzaChuKTtmb3IoY29uc3QgZSBvZiB0KXtjb25zdCB0PVwie1wiIT09ZVswXSxuPXQ/XCJ9XCI6XCJ9fVwiLG89ZS5pbmRleE9mKG4pO2lmKC0xPT09b3x8XCJ7XCI9PT1lWzFdKXtzLnB1c2goXCJ7XCIuY29uY2F0KHUuZGVjb2RlKGUpKSk7Y29udGludWV9Y29uc3QgYT1lLnNsaWNlKHQ/MDoxLG8pLGk9dGhpcy5fcmVmKHUuZGVjb2RlKGEpLHQpO3MucHVzaChpKSxcInN0cmluZ1wiIT10eXBlb2YgaSYmKHI9ITApO2NvbnN0IGw9ZS5zbGljZShvK24ubGVuZ3RoKTtsJiZzLnB1c2godS5kZWNvZGUobCkpfXI/dGhpcy5fdGVtcGxhdGU9czp0aGlzLnJlbmRlcmVkPXMuam9pbihcIlwiKX1zdGF0aWMgZGF0ZShlLHQpe3JldHVybiB1LmRhdGVGb3JtYXRbdC5kYXRlRm9ybWF0XS5jYWxsKGUpfWRlc2NyaWJlKGU9e30pe2lmKCF0aGlzLl9zZXR0aW5ncyYmZS5jb21wYWN0KXJldHVybiB0aGlzLnNvdXJjZTtjb25zdCB0PXt0ZW1wbGF0ZTp0aGlzLnNvdXJjZX07cmV0dXJuIHRoaXMuX3NldHRpbmdzJiYodC5vcHRpb25zPXRoaXMuX3NldHRpbmdzKSx0fXN0YXRpYyBidWlsZChlKXtyZXR1cm4gbmV3IHUuVGVtcGxhdGUoZS50ZW1wbGF0ZSxlLm9wdGlvbnMpfWlzRHluYW1pYygpe3JldHVybiEhdGhpcy5fdGVtcGxhdGV9c3RhdGljIGlzVGVtcGxhdGUoZSl7cmV0dXJuISFlJiYhIWVbaS5zeW1ib2xzLnRlbXBsYXRlXX1yZWZzKCl7aWYoIXRoaXMuX3RlbXBsYXRlKXJldHVybjtjb25zdCBlPVtdO2Zvcihjb25zdCB0IG9mIHRoaXMuX3RlbXBsYXRlKVwic3RyaW5nXCIhPXR5cGVvZiB0JiZlLnB1c2goLi4udC5yZWZzKTtyZXR1cm4gZX1yZXNvbHZlKGUsdCxyLHMpe3JldHVybiB0aGlzLl90ZW1wbGF0ZSYmMT09PXRoaXMuX3RlbXBsYXRlLmxlbmd0aD90aGlzLl9wYXJ0KHRoaXMuX3RlbXBsYXRlWzBdLGUsdCxyLHMse30pOnRoaXMucmVuZGVyKGUsdCxyLHMpfV9wYXJ0KGUsLi4udCl7cmV0dXJuIGUucmVmP2UucmVmLnJlc29sdmUoLi4udCk6ZS5mb3JtdWxhLmV2YWx1YXRlKHQpfXJlbmRlcihlLHQscixzLG49e30pe2lmKCF0aGlzLmlzRHluYW1pYygpKXJldHVybiB0aGlzLnJlbmRlcmVkO2NvbnN0IGE9W107Zm9yKGNvbnN0IGkgb2YgdGhpcy5fdGVtcGxhdGUpaWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpYS5wdXNoKGkpO2Vsc2V7Y29uc3QgbD10aGlzLl9wYXJ0KGksZSx0LHIscyxuKSxjPXUuc3RyaW5naWZ5KGwscixuLmVycm9ycyk7aWYodm9pZCAwIT09Yyl7Y29uc3QgZT1pLnJhd3x8ITE9PT0obi5lcnJvcnMmJm4uZXJyb3JzLmVzY2FwZUh0bWwpP2M6byhjKSx0PWkucmVmJiZcImxvY2FsXCI9PT1pLnJlZi50eXBlJiZcImxhYmVsXCI9PT1pLnJlZi5rZXkmJnIuZXJyb3JzLndyYXAubGFiZWw7YS5wdXNoKHUud3JhcChlLHQpKX19cmV0dXJuIGEuam9pbihcIlwiKX1fcmVmKGUsdCl7Y29uc3Qgcj1bXSxzPWU9Pntjb25zdCB0PWMuY3JlYXRlKGUsdGhpcy5fc2V0dGluZ3MpO3JldHVybiByLnB1c2godCksZT0+dC5yZXNvbHZlKC4uLmUpfTt0cnl7dmFyIG49bmV3IGEuUGFyc2VyKGUse3JlZmVyZW5jZTpzLGZ1bmN0aW9uczp1LmZ1bmN0aW9ucyxjb25zdGFudHM6dS5jb25zdGFudHN9KX1jYXRjaCh0KXt0aHJvdyB0Lm1lc3NhZ2U9J0ludmFsaWQgdGVtcGxhdGUgdmFyaWFibGUgXCInLmNvbmNhdChlLCdcIiBmYWlscyBkdWUgdG86ICcpLmNvbmNhdCh0Lm1lc3NhZ2UpLHR9cmV0dXJuIG4uc2luZ2xlP1wicmVmZXJlbmNlXCI9PT1uLnNpbmdsZS50eXBlP3tyZWY6clswXSxyYXc6dCxyZWZzOnJ9OnUuc3RyaW5naWZ5KG4uc2luZ2xlLnZhbHVlKTp7Zm9ybXVsYTpuLHJhdzp0LHJlZnM6cn19dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5zb3VyY2V9fSx1LlRlbXBsYXRlLnByb3RvdHlwZVtpLnN5bWJvbHMudGVtcGxhdGVdPSEwLHUuVGVtcGxhdGUucHJvdG90eXBlLmlzSW1tdXRhYmxlPSEwLHUuZW5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcXFwoXFx7KykvZywoZSx0KT0+dS5vcGVucy5zbGljZSgwLHQubGVuZ3RoKSkucmVwbGFjZSgvXFxcXChcXH0rKS9nLChlLHQpPT51LmNsb3Nlcy5zbGljZSgwLHQubGVuZ3RoKSl9LHUuZGVjb2RlPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcdTAwMDAvZyxcIntcIikucmVwbGFjZSgvXFx1MDAwMS9nLFwifVwiKX0sdS5zcGxpdD1mdW5jdGlvbihlKXtjb25zdCB0PVtdO2xldCByPVwiXCI7Zm9yKGxldCBzPTA7czxlLmxlbmd0aDsrK3Mpe2NvbnN0IG49ZVtzXTtpZihcIntcIj09PW4pe2xldCBuPVwiXCI7Zm9yKDtzKzE8ZS5sZW5ndGgmJlwie1wiPT09ZVtzKzFdOyluKz1cIntcIiwrK3M7dC5wdXNoKHIpLHI9bn1lbHNlIHIrPW59cmV0dXJuIHQucHVzaChyKSx0fSx1LndyYXA9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8xPT09dC5sZW5ndGg/XCJcIi5jb25jYXQodCkuY29uY2F0KGUpLmNvbmNhdCh0KTpcIlwiLmNvbmNhdCh0WzBdKS5jb25jYXQoZSkuY29uY2F0KHRbMV0pOmV9LHUuc3RyaW5naWZ5PWZ1bmN0aW9uKGUsdCxyKXtjb25zdCBzPXR5cGVvZiBlO2lmKG51bGw9PT1lKXJldHVyblwibnVsbFwiO2lmKFwic3RyaW5nXCI9PT1zKXJldHVybiBlO2lmKFwibnVtYmVyXCI9PT1zfHxcImZ1bmN0aW9uXCI9PT1zfHxcInN5bWJvbFwiPT09cylyZXR1cm4gZS50b1N0cmluZygpO2lmKFwib2JqZWN0XCIhPT1zKXJldHVybiBKU09OLnN0cmluZ2lmeShlKTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdS5UZW1wbGF0ZS5kYXRlKGUsdCk7aWYoZSBpbnN0YW5jZW9mIE1hcCl7Y29uc3QgdD1bXTtmb3IoY29uc3RbcixzXW9mIGUuZW50cmllcygpKXQucHVzaChcIlwiLmNvbmNhdChyLnRvU3RyaW5nKCksXCIgLT4gXCIpLmNvbmNhdChzLnRvU3RyaW5nKCkpKTtlPXR9aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUudG9TdHJpbmcoKTtsZXQgbj1cIlwiO2Zvcihjb25zdCBzIG9mIGUpbj1uKyhuLmxlbmd0aD9cIiwgXCI6XCJcIikrdS5zdHJpbmdpZnkocyx0LHIpO3JldHVybiB1LndyYXAobix0LmVycm9ycy53cmFwLmFycmF5KX0sdS5jb25zdGFudHM9e3RydWU6ITAsZmFsc2U6ITEsbnVsbDpudWxsLHNlY29uZDoxZTMsbWludXRlOjZlNCxob3VyOjM2ZTUsZGF5Ojg2NGU1fSx1LmZ1bmN0aW9ucz17aWY6KGUsdCxyKT0+ZT90OnIsbXNnKGUpe2NvbnN0W3QscixzLG4sb109dGhpcyxhPW8ubWVzc2FnZXM7aWYoIWEpcmV0dXJuXCJcIjtjb25zdCBpPWwudGVtcGxhdGUodCxhWzBdLGUscixzKXx8bC50ZW1wbGF0ZSh0LGFbMV0sZSxyLHMpO3JldHVybiBpP2kucmVuZGVyKHQscixzLG4sbyk6XCJcIn0sbnVtYmVyOmU9PlwibnVtYmVyXCI9PXR5cGVvZiBlP2U6XCJzdHJpbmdcIj09dHlwZW9mIGU/cGFyc2VGbG9hdChlKTpcImJvb2xlYW5cIj09dHlwZW9mIGU/ZT8xOjA6ZSBpbnN0YW5jZW9mIERhdGU/ZS5nZXRUaW1lKCk6bnVsbH19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDEpLG89cig1KSxhPXt9O3Quc2NoZW1hPWZ1bmN0aW9uKGUsdCxyPXt9KXtuLmFzc2VydE9wdGlvbnMocixbXCJhcHBlbmRQYXRoXCIsXCJvdmVycmlkZVwiXSk7dHJ5e3JldHVybiBhLnNjaGVtYShlLHQscil9Y2F0Y2goZSl7dGhyb3cgci5hcHBlbmRQYXRoJiZ2b2lkIDAhPT1lLnBhdGgmJihlLm1lc3NhZ2U9XCJcIi5jb25jYXQoZS5tZXNzYWdlLFwiIChcIikuY29uY2F0KGUucGF0aCxcIilcIikpLGV9fSxhLnNjaGVtYT1mdW5jdGlvbihlLHQscil7cyh2b2lkIDAhPT10LFwiSW52YWxpZCB1bmRlZmluZWQgc2NoZW1hXCIpLEFycmF5LmlzQXJyYXkodCkmJihzKHQubGVuZ3RoLFwiSW52YWxpZCBlbXB0eSBhcnJheSBzY2hlbWFcIiksMT09PXQubGVuZ3RoJiYodD10WzBdKSk7Y29uc3Qgbz0odCwuLi5zKT0+ITEhPT1yLm92ZXJyaWRlP3QudmFsaWQoZS5vdmVycmlkZSwuLi5zKTp0LnZhbGlkKC4uLnMpO2lmKGEuc2ltcGxlKHQpKXJldHVybiBvKGUsdCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClyZXR1cm4gZS5jdXN0b20odCk7aWYocyhcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc2NoZW1hIGNvbnRlbnQ6XCIsdHlwZW9mIHQpLG4uaXNSZXNvbHZhYmxlKHQpKXJldHVybiBvKGUsdCk7aWYobi5pc1NjaGVtYSh0KSlyZXR1cm4gdDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IoY29uc3QgciBvZiB0KWlmKCFhLnNpbXBsZShyKSlyZXR1cm4gZS5hbHRlcm5hdGl2ZXMoKS50cnkoLi4udCk7cmV0dXJuIG8oZSwuLi50KX1yZXR1cm4gdCBpbnN0YW5jZW9mIFJlZ0V4cD9lLnN0cmluZygpLnJlZ2V4KHQpOnQgaW5zdGFuY2VvZiBEYXRlP28oZS5kYXRlKCksdCk6KHMoT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpPT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcIlNjaGVtYSBjYW4gb25seSBjb250YWluIHBsYWluIG9iamVjdHNcIiksZS5vYmplY3QoKS5rZXlzKHQpKX0sdC5yZWY9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5pc1JlZihlKT9lOm8uY3JlYXRlKGUsdCl9LHQuY29tcGlsZT1mdW5jdGlvbihlLHIsbz17fSl7bi5hc3NlcnRPcHRpb25zKG8sW1wibGVnYWN5XCJdKTtjb25zdCBpPXImJnJbbi5zeW1ib2xzLmFueV07aWYoaSlyZXR1cm4gcyhvLmxlZ2FjeXx8aS52ZXJzaW9uPT09bi52ZXJzaW9uLFwiQ2Fubm90IG1peCBkaWZmZXJlbnQgdmVyc2lvbnMgb2Ygam9pIHNjaGVtYXM6XCIsaS52ZXJzaW9uLG4udmVyc2lvbikscjtpZihcIm9iamVjdFwiIT10eXBlb2Ygcnx8IW8ubGVnYWN5KXJldHVybiB0LnNjaGVtYShlLHIse2FwcGVuZFBhdGg6ITB9KTtjb25zdCBsPWEud2FsayhyKTtyZXR1cm4gbD9sLmNvbXBpbGUobC5yb290LHIpOnQuc2NoZW1hKGUscix7YXBwZW5kUGF0aDohMH0pfSxhLndhbGs9ZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuIG51bGw7aWYoQXJyYXkuaXNBcnJheShlKSl7Zm9yKGNvbnN0IHQgb2YgZSl7Y29uc3QgZT1hLndhbGsodCk7aWYoZSlyZXR1cm4gZX1yZXR1cm4gbnVsbH1jb25zdCB0PWVbbi5zeW1ib2xzLmFueV07aWYodClyZXR1cm57cm9vdDplW3Qucm9vdF0sY29tcGlsZTp0LmNvbXBpbGV9O3MoT2JqZWN0LmdldFByb3RvdHlwZU9mKGUpPT09T2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSxcIlNjaGVtYSBjYW4gb25seSBjb250YWluIHBsYWluIG9iamVjdHNcIik7Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcj1hLndhbGsoZVt0XSk7aWYocilyZXR1cm4gcn1yZXR1cm4gbnVsbH0sYS5zaW1wbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lfHxbXCJib29sZWFuXCIsXCJzdHJpbmdcIixcIm51bWJlclwiXS5pbmNsdWRlcyh0eXBlb2YgZSl9LHQud2hlbj1mdW5jdGlvbihlLHIsaSl7aWYodm9pZCAwPT09aSYmKHMociYmXCJvYmplY3RcIj09dHlwZW9mIHIsXCJNaXNzaW5nIG9wdGlvbnNcIiksaT1yLHI9by5jcmVhdGUoXCIuXCIpKSxBcnJheS5pc0FycmF5KGkpJiYoaT17c3dpdGNoOml9KSxuLmFzc2VydE9wdGlvbnMoaSxbXCJpc1wiLFwibm90XCIsXCJ0aGVuXCIsXCJvdGhlcndpc2VcIixcInN3aXRjaFwiLFwiYnJlYWtcIl0pLG4uaXNTY2hlbWEocikpcmV0dXJuIHModm9pZCAwPT09aS5pcywnXCJpc1wiIGNhbiBub3QgYmUgdXNlZCB3aXRoIGEgc2NoZW1hIGNvbmRpdGlvbicpLHModm9pZCAwPT09aS5ub3QsJ1wibm90XCIgY2FuIG5vdCBiZSB1c2VkIHdpdGggYSBzY2hlbWEgY29uZGl0aW9uJykscyh2b2lkIDA9PT1pLnN3aXRjaCwnXCJzd2l0Y2hcIiBjYW4gbm90IGJlIHVzZWQgd2l0aCBhIHNjaGVtYSBjb25kaXRpb24nKSxhLmNvbmRpdGlvbihlLHtpczpyLHRoZW46aS50aGVuLG90aGVyd2lzZTppLm90aGVyd2lzZSxicmVhazppLmJyZWFrfSk7aWYocyhvLmlzUmVmKHIpfHxcInN0cmluZ1wiPT10eXBlb2YgcixcIkludmFsaWQgY29uZGl0aW9uOlwiLHIpLHModm9pZCAwPT09aS5ub3R8fHZvaWQgMD09PWkuaXMsJ0Nhbm5vdCBjb21iaW5lIFwiaXNcIiB3aXRoIFwibm90XCInKSx2b2lkIDA9PT1pLnN3aXRjaCl7bGV0IGw9aTt2b2lkIDAhPT1pLm5vdCYmKGw9e2lzOmkubm90LHRoZW46aS5vdGhlcndpc2Usb3RoZXJ3aXNlOmkudGhlbixicmVhazppLmJyZWFrfSk7bGV0IGM9dm9pZCAwIT09bC5pcz9lLiRfY29tcGlsZShsLmlzKTplLiRfcm9vdC5pbnZhbGlkKG51bGwsITEsMCxcIlwiKS5yZXF1aXJlZCgpO3JldHVybiBzKHZvaWQgMCE9PWwudGhlbnx8dm9pZCAwIT09bC5vdGhlcndpc2UsJ29wdGlvbnMgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBvZiBcInRoZW5cIiwgXCJvdGhlcndpc2VcIiwgb3IgXCJzd2l0Y2hcIicpLHModm9pZCAwPT09bC5icmVha3x8dm9pZCAwPT09bC50aGVufHx2b2lkIDA9PT1sLm90aGVyd2lzZSxcIkNhbm5vdCBzcGVjaWZ5IHRoZW4sIG90aGVyd2lzZSwgYW5kIGJyZWFrIGFsbCB0b2dldGhlclwiKSx2b2lkIDA9PT1pLmlzfHxvLmlzUmVmKGkuaXMpfHxuLmlzU2NoZW1hKGkuaXMpfHwoYz1jLnJlcXVpcmVkKCkpLGEuY29uZGl0aW9uKGUse3JlZjp0LnJlZihyKSxpczpjLHRoZW46bC50aGVuLG90aGVyd2lzZTpsLm90aGVyd2lzZSxicmVhazpsLmJyZWFrfSl9cyhBcnJheS5pc0FycmF5KGkuc3dpdGNoKSwnXCJzd2l0Y2hcIiBtdXN0IGJlIGFuIGFycmF5Jykscyh2b2lkIDA9PT1pLmlzLCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJpc1wiJykscyh2b2lkIDA9PT1pLm5vdCwnQ2Fubm90IGNvbWJpbmUgXCJzd2l0Y2hcIiB3aXRoIFwibm90XCInKSxzKHZvaWQgMD09PWkudGhlbiwnQ2Fubm90IGNvbWJpbmUgXCJzd2l0Y2hcIiB3aXRoIFwidGhlblwiJyk7Y29uc3QgbD17cmVmOnQucmVmKHIpLHN3aXRjaDpbXSxicmVhazppLmJyZWFrfTtmb3IobGV0IHQ9MDt0PGkuc3dpdGNoLmxlbmd0aDsrK3Qpe2NvbnN0IHI9aS5zd2l0Y2hbdF0sYT10PT09aS5zd2l0Y2gubGVuZ3RoLTE7bi5hc3NlcnRPcHRpb25zKHIsYT9bXCJpc1wiLFwidGhlblwiLFwib3RoZXJ3aXNlXCJdOltcImlzXCIsXCJ0aGVuXCJdKSxzKHZvaWQgMCE9PXIuaXMsJ1N3aXRjaCBzdGF0ZW1lbnQgbWlzc2luZyBcImlzXCInKSxzKHZvaWQgMCE9PXIudGhlbiwnU3dpdGNoIHN0YXRlbWVudCBtaXNzaW5nIFwidGhlblwiJyk7Y29uc3QgYz17aXM6ZS4kX2NvbXBpbGUoci5pcyksdGhlbjplLiRfY29tcGlsZShyLnRoZW4pfTtpZihvLmlzUmVmKHIuaXMpfHxuLmlzU2NoZW1hKHIuaXMpfHwoYy5pcz1jLmlzLnJlcXVpcmVkKCkpLGEpe3Modm9pZCAwPT09aS5vdGhlcndpc2V8fHZvaWQgMD09PXIub3RoZXJ3aXNlLCdDYW5ub3Qgc3BlY2lmeSBcIm90aGVyd2lzZVwiIGluc2lkZSBhbmQgb3V0c2lkZSBhIFwic3dpdGNoXCInKTtjb25zdCB0PXZvaWQgMCE9PWkub3RoZXJ3aXNlP2kub3RoZXJ3aXNlOnIub3RoZXJ3aXNlO3ZvaWQgMCE9PXQmJihzKHZvaWQgMD09PWwuYnJlYWssXCJDYW5ub3Qgc3BlY2lmeSBib3RoIG90aGVyd2lzZSBhbmQgYnJlYWtcIiksYy5vdGhlcndpc2U9ZS4kX2NvbXBpbGUodCkpfWwuc3dpdGNoLnB1c2goYyl9cmV0dXJuIGx9LGEuY29uZGl0aW9uPWZ1bmN0aW9uKGUsdCl7Zm9yKGNvbnN0IHIgb2ZbXCJ0aGVuXCIsXCJvdGhlcndpc2VcIl0pdm9pZCAwPT09dFtyXT9kZWxldGUgdFtyXTp0W3JdPWUuJF9jb21waWxlKHRbcl0pO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDcpO3QuY29tcGlsZT1mdW5jdGlvbihlLHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBzKCF0LFwiQ2Fubm90IHNldCBzaW5nbGUgbWVzc2FnZSBzdHJpbmdcIiksbmV3IG8oZSk7aWYoby5pc1RlbXBsYXRlKGUpKXJldHVybiBzKCF0LFwiQ2Fubm90IHNldCBzaW5nbGUgbWVzc2FnZSB0ZW1wbGF0ZVwiKSxlO3MoXCJvYmplY3RcIj09dHlwZW9mIGUmJiFBcnJheS5pc0FycmF5KGUpLFwiSW52YWxpZCBtZXNzYWdlIG9wdGlvbnNcIiksdD10P24odCk6e307Zm9yKGxldCByIGluIGUpe2NvbnN0IG49ZVtyXTtpZihcInJvb3RcIj09PXJ8fG8uaXNUZW1wbGF0ZShuKSl7dFtyXT1uO2NvbnRpbnVlfWlmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt0W3JdPW5ldyBvKG4pO2NvbnRpbnVlfXMoXCJvYmplY3RcIj09dHlwZW9mIG4mJiFBcnJheS5pc0FycmF5KG4pLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLHIpO2NvbnN0IGE9cjtmb3IociBpbiB0W2FdPXRbYV18fHt9LG4pe2NvbnN0IGU9bltyXTtcInJvb3RcIj09PXJ8fG8uaXNUZW1wbGF0ZShlKT90W2FdW3JdPWU6KHMoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIscixcImluXCIsYSksdFthXVtyXT1uZXcgbyhlKSl9fXJldHVybiB0fSx0LmRlY29tcGlsZT1mdW5jdGlvbihlKXtjb25zdCB0PXt9O2ZvcihsZXQgciBpbiBlKXtjb25zdCBzPWVbcl07aWYoXCJyb290XCI9PT1yKXt0W3JdPXM7Y29udGludWV9aWYoby5pc1RlbXBsYXRlKHMpKXt0W3JdPXMuZGVzY3JpYmUoe2NvbXBhY3Q6ITB9KTtjb250aW51ZX1jb25zdCBuPXI7Zm9yKHIgaW4gdFtuXT17fSxzKXtjb25zdCBlPXNbcl07XCJyb290XCIhPT1yP3Rbbl1bcl09ZS5kZXNjcmliZSh7Y29tcGFjdDohMH0pOnRbbl1bcl09ZX19cmV0dXJuIHR9LHQubWVyZ2U9ZnVuY3Rpb24oZSxyKXtpZighZSlyZXR1cm4gdC5jb21waWxlKHIpO2lmKCFyKXJldHVybiBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiByKXJldHVybiBuZXcgbyhyKTtpZihvLmlzVGVtcGxhdGUocikpcmV0dXJuIHI7Y29uc3QgYT1uKGUpO2ZvcihsZXQgZSBpbiByKXtjb25zdCB0PXJbZV07aWYoXCJyb290XCI9PT1lfHxvLmlzVGVtcGxhdGUodCkpe2FbZV09dDtjb250aW51ZX1pZihcInN0cmluZ1wiPT10eXBlb2YgdCl7YVtlXT1uZXcgbyh0KTtjb250aW51ZX1zKFwib2JqZWN0XCI9PXR5cGVvZiB0JiYhQXJyYXkuaXNBcnJheSh0KSxcIkludmFsaWQgbWVzc2FnZSBmb3JcIixlKTtjb25zdCBuPWU7Zm9yKGUgaW4gYVtuXT1hW25dfHx7fSx0KXtjb25zdCByPXRbZV07XCJyb290XCI9PT1lfHxvLmlzVGVtcGxhdGUocik/YVtuXVtlXT1yOihzKFwic3RyaW5nXCI9PXR5cGVvZiByLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLGUsXCJpblwiLG4pLGFbbl1bZV09bmV3IG8ocikpfX1yZXR1cm4gYX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTMpLG49e21pc21hdGNoZWQ6bnVsbH07ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gcj1PYmplY3QuYXNzaWduKHtwcm90b3R5cGU6ITB9LHIpLCEhbi5pc0RlZXBFcXVhbChlLHQscixbXSl9LG4uaXNEZWVwRXF1YWw9ZnVuY3Rpb24oZSx0LHIsbyl7aWYoZT09PXQpcmV0dXJuIDAhPT1lfHwxL2U9PTEvdDtjb25zdCBhPXR5cGVvZiBlO2lmKGEhPT10eXBlb2YgdClyZXR1cm4hMTtpZihudWxsPT09ZXx8bnVsbD09PXQpcmV0dXJuITE7aWYoXCJmdW5jdGlvblwiPT09YSl7aWYoIXIuZGVlcEZ1bmN0aW9ufHxlLnRvU3RyaW5nKCkhPT10LnRvU3RyaW5nKCkpcmV0dXJuITF9ZWxzZSBpZihcIm9iamVjdFwiIT09YSlyZXR1cm4gZSE9ZSYmdCE9dDtjb25zdCBpPW4uZ2V0U2hhcmVkVHlwZShlLHQsISFyLnByb3RvdHlwZSk7c3dpdGNoKGkpe2Nhc2Ugcy5idWZmZXI6cmV0dXJuITE7Y2FzZSBzLnByb21pc2U6cmV0dXJuIGU9PT10O2Nhc2Ugcy5yZWdleDpyZXR1cm4gZS50b1N0cmluZygpPT09dC50b1N0cmluZygpO2Nhc2Ugbi5taXNtYXRjaGVkOnJldHVybiExfWZvcihsZXQgcj1vLmxlbmd0aC0xO3I+PTA7LS1yKWlmKG9bcl0uaXNTYW1lKGUsdCkpcmV0dXJuITA7by5wdXNoKG5ldyBuLlNlZW5FbnRyeShlLHQpKTt0cnl7cmV0dXJuISFuLmlzRGVlcEVxdWFsT2JqKGksZSx0LHIsbyl9ZmluYWxseXtvLnBvcCgpfX0sbi5nZXRTaGFyZWRUeXBlPWZ1bmN0aW9uKGUsdCxyKXtpZihyKXJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkhPT1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCk/bi5taXNtYXRjaGVkOnMuZ2V0SW50ZXJuYWxQcm90byhlKTtjb25zdCBvPXMuZ2V0SW50ZXJuYWxQcm90byhlKTtyZXR1cm4gbyE9PXMuZ2V0SW50ZXJuYWxQcm90byh0KT9uLm1pc21hdGNoZWQ6b30sbi52YWx1ZU9mPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9ZS52YWx1ZU9mO2lmKHZvaWQgMD09PXQpcmV0dXJuIGU7dHJ5e3JldHVybiB0LmNhbGwoZSl9Y2F0Y2goZSl7cmV0dXJuIGV9fSxuLmhhc093bkVudW1lcmFibGVQcm9wZXJ0eT1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSx0KX0sbi5pc1NldFNpbXBsZUVxdWFsPWZ1bmN0aW9uKGUsdCl7Zm9yKGNvbnN0IHIgb2YgZSlpZighdC5oYXMocikpcmV0dXJuITE7cmV0dXJuITB9LG4uaXNEZWVwRXF1YWxPYmo9ZnVuY3Rpb24oZSx0LHIsbyxhKXtjb25zdHtpc0RlZXBFcXVhbDppLHZhbHVlT2Y6bCxoYXNPd25FbnVtZXJhYmxlUHJvcGVydHk6Y309bix7a2V5czp1LGdldE93blByb3BlcnR5U3ltYm9sczpmfT1PYmplY3Q7aWYoZT09PXMuYXJyYXkpe2lmKCFvLnBhcnQpe2lmKHQubGVuZ3RoIT09ci5sZW5ndGgpcmV0dXJuITE7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDsrK2UpaWYoIWkodFtlXSxyW2VdLG8sYSkpcmV0dXJuITE7cmV0dXJuITB9Zm9yKGNvbnN0IGUgb2YgdClmb3IoY29uc3QgdCBvZiByKWlmKGkoZSx0LG8sYSkpcmV0dXJuITB9ZWxzZSBpZihlPT09cy5zZXQpe2lmKHQuc2l6ZSE9PXIuc2l6ZSlyZXR1cm4hMTtpZighbi5pc1NldFNpbXBsZUVxdWFsKHQscikpe2NvbnN0IGU9bmV3IFNldChyKTtmb3IoY29uc3QgciBvZiB0KXtpZihlLmRlbGV0ZShyKSljb250aW51ZTtsZXQgdD0hMTtmb3IoY29uc3QgcyBvZiBlKWlmKGkocixzLG8sYSkpe2UuZGVsZXRlKHMpLHQ9ITA7YnJlYWt9aWYoIXQpcmV0dXJuITF9fX1lbHNlIGlmKGU9PT1zLm1hcCl7aWYodC5zaXplIT09ci5zaXplKXJldHVybiExO2Zvcihjb25zdFtlLHNdb2YgdCl7aWYodm9pZCAwPT09cyYmIXIuaGFzKGUpKXJldHVybiExO2lmKCFpKHMsci5nZXQoZSksbyxhKSlyZXR1cm4hMX19ZWxzZSBpZihlPT09cy5lcnJvciYmKHQubmFtZSE9PXIubmFtZXx8dC5tZXNzYWdlIT09ci5tZXNzYWdlKSlyZXR1cm4hMTtjb25zdCBtPWwodCksaD1sKHIpO2lmKCh0IT09bXx8ciE9PWgpJiYhaShtLGgsbyxhKSlyZXR1cm4hMTtjb25zdCBkPXUodCk7aWYoIW8ucGFydCYmZC5sZW5ndGghPT11KHIpLmxlbmd0aCYmIW8uc2tpcClyZXR1cm4hMTtsZXQgcD0wO2Zvcihjb25zdCBlIG9mIGQpaWYoby5za2lwJiZvLnNraXAuaW5jbHVkZXMoZSkpdm9pZCAwPT09cltlXSYmKytwO2Vsc2V7aWYoIWMocixlKSlyZXR1cm4hMTtpZighaSh0W2VdLHJbZV0sbyxhKSlyZXR1cm4hMX1pZighby5wYXJ0JiZkLmxlbmd0aC1wIT09dShyKS5sZW5ndGgpcmV0dXJuITE7aWYoITEhPT1vLnN5bWJvbHMpe2NvbnN0IGU9Zih0KSxzPW5ldyBTZXQoZihyKSk7Zm9yKGNvbnN0IG4gb2YgZSl7aWYoIW8uc2tpcHx8IW8uc2tpcC5pbmNsdWRlcyhuKSlpZihjKHQsbikpe2lmKCFjKHIsbikpcmV0dXJuITE7aWYoIWkodFtuXSxyW25dLG8sYSkpcmV0dXJuITF9ZWxzZSBpZihjKHIsbikpcmV0dXJuITE7cy5kZWxldGUobil9Zm9yKGNvbnN0IGUgb2YgcylpZihjKHIsZSkpcmV0dXJuITF9cmV0dXJuITB9LG4uU2VlbkVudHJ5PWNsYXNze2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5vYmo9ZSx0aGlzLnJlZj10fWlzU2FtZShlLHQpe3JldHVybiB0aGlzLm9iaj09PWUmJnRoaXMucmVmPT09dH19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTUpLGE9cigxKSxpPXIoOCksbD1yKDQpLGM9cigxNyksdT1yKDE4KSxmPXIoNSksbT1yKDcpLGg9cigxOSk7bGV0IGQ7Y29uc3QgcD17dHlwZXM6e2FsdGVybmF0aXZlczpyKDMzKSxhbnk6cigzKSxhcnJheTpyKDM5KSxib29sZWFuOnIoNDApLGRhdGU6cig0MSksZnVuY3Rpb246cig0MiksbGluazpyKDQ1KSxudW1iZXI6cig0Niksb2JqZWN0OnIoNDcpLHN0cmluZzpyKDQ4KSxzeW1ib2w6cig1Mil9LGFsaWFzZXM6e2FsdDpcImFsdGVybmF0aXZlc1wiLGJvb2w6XCJib29sZWFuXCIsZnVuYzpcImZ1bmN0aW9uXCJ9fTtwLnJvb3Q9ZnVuY3Rpb24oKXtjb25zdCBlPXtfdHlwZXM6bmV3IFNldChPYmplY3Qua2V5cyhwLnR5cGVzKSl9O2Zvcihjb25zdCB0IG9mIGUuX3R5cGVzKWVbdF09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHMoIWUubGVuZ3RofHxbXCJhbHRlcm5hdGl2ZXNcIixcImxpbmtcIixcIm9iamVjdFwiXS5pbmNsdWRlcyh0KSxcIlRoZVwiLHQsXCJ0eXBlIGRvZXMgbm90IGFsbG93IGFyZ3VtZW50c1wiKSxwLmdlbmVyYXRlKHRoaXMscC50eXBlc1t0XSxlKX07Zm9yKGNvbnN0IHQgb2ZbXCJhbGxvd1wiLFwiY3VzdG9tXCIsXCJkaXNhbGxvd1wiLFwiZXF1YWxcIixcImV4aXN0XCIsXCJmb3JiaWRkZW5cIixcImludmFsaWRcIixcIm5vdFwiLFwib25seVwiLFwib3B0aW9uYWxcIixcIm9wdGlvbnNcIixcInByZWZzXCIsXCJwcmVmZXJlbmNlc1wiLFwicmVxdWlyZWRcIixcInN0cmlwXCIsXCJ2YWxpZFwiLFwid2hlblwiXSllW3RdPWZ1bmN0aW9uKC4uLmUpe3JldHVybiB0aGlzLmFueSgpW3RdKC4uLmUpfTtPYmplY3QuYXNzaWduKGUscC5tZXRob2RzKTtmb3IoY29uc3QgdCBpbiBwLmFsaWFzZXMpe2NvbnN0IHI9cC5hbGlhc2VzW3RdO2VbdF09ZVtyXX1yZXR1cm4gZS54PWUuZXhwcmVzc2lvbixoLnNldHVwJiZoLnNldHVwKGUpLGV9LHAubWV0aG9kcz17VmFsaWRhdGlvbkVycm9yOmwuVmFsaWRhdGlvbkVycm9yLHZlcnNpb246YS52ZXJzaW9uLGNhY2hlOm8ucHJvdmlkZXIsYXNzZXJ0KGUsdCwuLi5yKXtwLmFzc2VydChlLHQsITAscil9LGF0dGVtcHQ6KGUsdCwuLi5yKT0+cC5hc3NlcnQoZSx0LCExLHIpLGJ1aWxkKGUpe3JldHVybiBzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuYnVpbGQsXCJNYW5pZmVzdCBmdW5jdGlvbmFsaXR5IGRpc2FibGVkXCIpLHUuYnVpbGQodGhpcyxlKX0sY2hlY2tQcmVmZXJlbmNlcyhlKXthLmNoZWNrUHJlZmVyZW5jZXMoZSl9LGNvbXBpbGUoZSx0KXtyZXR1cm4gaS5jb21waWxlKHRoaXMsZSx0KX0sZGVmYXVsdHMoZSl7cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwibW9kaWZpZXIgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzKTtmb3IoY29uc3QgciBvZiB0Ll90eXBlcyl7Y29uc3Qgbj1lKHRbcl0oKSk7cyhhLmlzU2NoZW1hKG4pLFwibW9kaWZpZXIgbXVzdCByZXR1cm4gYSB2YWxpZCBzY2hlbWEgb2JqZWN0XCIpLHRbcl09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHAuZ2VuZXJhdGUodGhpcyxuLGUpfX1yZXR1cm4gdH0sZXhwcmVzc2lvbjooLi4uZSk9Pm5ldyBtKC4uLmUpLGV4dGVuZCguLi5lKXthLnZlcmlmeUZsYXQoZSxcImV4dGVuZFwiKSxkPWR8fHIoMTYpLHMoZS5sZW5ndGgsXCJZb3UgbmVlZCB0byBwcm92aWRlIGF0IGxlYXN0IG9uZSBleHRlbnNpb25cIiksdGhpcy5hc3NlcnQoZSxkLmV4dGVuc2lvbnMpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSx0aGlzKTt0Ll90eXBlcz1uZXcgU2V0KHQuX3R5cGVzKTtmb3IobGV0IHIgb2YgZSl7XCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHI9cih0KSksdGhpcy5hc3NlcnQocixkLmV4dGVuc2lvbik7Y29uc3QgZT1wLmV4cGFuZEV4dGVuc2lvbihyLHQpO2Zvcihjb25zdCByIG9mIGUpe3Modm9pZCAwPT09dFtyLnR5cGVdfHx0Ll90eXBlcy5oYXMoci50eXBlKSxcIkNhbm5vdCBvdmVycmlkZSBuYW1lXCIsci50eXBlKTtjb25zdCBlPXIuYmFzZXx8dGhpcy5hbnkoKSxuPWMudHlwZShlLHIpO3QuX3R5cGVzLmFkZChyLnR5cGUpLHRbci50eXBlXT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcC5nZW5lcmF0ZSh0aGlzLG4sZSl9fX1yZXR1cm4gdH0saXNFcnJvcjpsLlZhbGlkYXRpb25FcnJvci5pc0Vycm9yLGlzRXhwcmVzc2lvbjptLmlzVGVtcGxhdGUsaXNSZWY6Zi5pc1JlZixpc1NjaGVtYTphLmlzU2NoZW1hLGluOiguLi5lKT0+Zi5pbiguLi5lKSxvdmVycmlkZTphLnN5bWJvbHMub3ZlcnJpZGUscmVmOiguLi5lKT0+Zi5jcmVhdGUoLi4uZSksdHlwZXMoKXtjb25zdCBlPXt9O2Zvcihjb25zdCB0IG9mIHRoaXMuX3R5cGVzKWVbdF09dGhpc1t0XSgpO2Zvcihjb25zdCB0IGluIHAuYWxpYXNlcyllW3RdPXRoaXNbdF0oKTtyZXR1cm4gZX19LHAuYXNzZXJ0PWZ1bmN0aW9uKGUsdCxyLHMpe2NvbnN0IG89c1swXWluc3RhbmNlb2YgRXJyb3J8fFwic3RyaW5nXCI9PXR5cGVvZiBzWzBdP3NbMF06bnVsbCxpPW8/c1sxXTpzWzBdLGM9dC52YWxpZGF0ZShlLGEucHJlZmVyZW5jZXMoe2Vycm9yczp7c3RhY2s6ITB9fSxpfHx7fSkpO2xldCB1PWMuZXJyb3I7aWYoIXUpcmV0dXJuIGMudmFsdWU7aWYobyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87Y29uc3QgZj1yJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LmFubm90YXRlP3UuYW5ub3RhdGUoKTp1Lm1lc3NhZ2U7dGhyb3cgdSBpbnN0YW5jZW9mIGwuVmFsaWRhdGlvbkVycm9yPT0hMSYmKHU9bih1KSksdS5tZXNzYWdlPW8/XCJcIi5jb25jYXQobyxcIiBcIikuY29uY2F0KGYpOmYsdX0scC5nZW5lcmF0ZT1mdW5jdGlvbihlLHQscil7cmV0dXJuIHMoZSxcIk11c3QgYmUgaW52b2tlZCBvbiBhIEpvaSBpbnN0YW5jZS5cIiksdC4kX3Jvb3Q9ZSx0Ll9kZWZpbml0aW9uLmFyZ3MmJnIubGVuZ3RoP3QuX2RlZmluaXRpb24uYXJncyh0LC4uLnIpOnR9LHAuZXhwYW5kRXh0ZW5zaW9uPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUudHlwZSlyZXR1cm5bZV07Y29uc3Qgcj1bXTtmb3IoY29uc3QgcyBvZiB0Ll90eXBlcylpZihlLnR5cGUudGVzdChzKSl7Y29uc3Qgbj1PYmplY3QuYXNzaWduKHt9LGUpO24udHlwZT1zLG4uYmFzZT10W3NdKCksci5wdXNoKG4pfXJldHVybiByfSxlLmV4cG9ydHM9cC5yb290KCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjgpO2UuZXhwb3J0cz1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUuZmlsdGVyKGU9PlwiXCIhPT1lKS5tYXAoZT0+XCJzdHJpbmdcIj09dHlwZW9mIGU/ZTplIGluc3RhbmNlb2YgRXJyb3I/ZS5tZXNzYWdlOnMoZSkpLmpvaW4oXCIgXCIpfHxcIlVua25vd24gZXJyb3JcIiksXCJmdW5jdGlvblwiPT10eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UmJkVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsdC5hc3NlcnQpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXt9O3Q9ZS5leHBvcnRzPXthcnJheTpBcnJheS5wcm90b3R5cGUsYnVmZmVyOiExLGRhdGU6RGF0ZS5wcm90b3R5cGUsZXJyb3I6RXJyb3IucHJvdG90eXBlLGdlbmVyaWM6T2JqZWN0LnByb3RvdHlwZSxtYXA6TWFwLnByb3RvdHlwZSxwcm9taXNlOlByb21pc2UucHJvdG90eXBlLHJlZ2V4OlJlZ0V4cC5wcm90b3R5cGUsc2V0OlNldC5wcm90b3R5cGUsd2Vha01hcDpXZWFrTWFwLnByb3RvdHlwZSx3ZWFrU2V0OldlYWtTZXQucHJvdG90eXBlfSxzLnR5cGVNYXA9bmV3IE1hcChbW1wiW29iamVjdCBFcnJvcl1cIix0LmVycm9yXSxbXCJbb2JqZWN0IE1hcF1cIix0Lm1hcF0sW1wiW29iamVjdCBQcm9taXNlXVwiLHQucHJvbWlzZV0sW1wiW29iamVjdCBTZXRdXCIsdC5zZXRdLFtcIltvYmplY3QgV2Vha01hcF1cIix0LndlYWtNYXBdLFtcIltvYmplY3QgV2Vha1NldF1cIix0LndlYWtTZXRdXSksdC5nZXRJbnRlcm5hbFByb3RvPWZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIHQuYXJyYXk7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIHQuZGF0ZTtpZihlIGluc3RhbmNlb2YgUmVnRXhwKXJldHVybiB0LnJlZ2V4O2lmKGUgaW5zdGFuY2VvZiBFcnJvcilyZXR1cm4gdC5lcnJvcjtjb25zdCByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKTtyZXR1cm4gcy50eXBlTWFwLmdldChyKXx8dC5nZW5lcmljfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3Qua2V5cz1mdW5jdGlvbihlLHQ9e30pe3JldHVybiExIT09dC5zeW1ib2xzP1JlZmxlY3Qub3duS2V5cyhlKTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxKSxhPXttYXg6MWUzLHN1cHBvcnRlZDpuZXcgU2V0KFtcInVuZGVmaW5lZFwiLFwiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl0pfTt0LnByb3ZpZGVyPXtwcm92aXNpb246ZT0+bmV3IGEuQ2FjaGUoZSl9LGEuQ2FjaGU9Y2xhc3N7Y29uc3RydWN0b3IoZT17fSl7by5hc3NlcnRPcHRpb25zKGUsW1wibWF4XCJdKSxzKHZvaWQgMD09PWUubWF4fHxlLm1heCYmZS5tYXg+MCYmaXNGaW5pdGUoZS5tYXgpLFwiSW52YWxpZCBtYXggY2FjaGUgc2l6ZVwiKSx0aGlzLl9tYXg9ZS5tYXh8fGEubWF4LHRoaXMuX21hcD1uZXcgTWFwLHRoaXMuX2xpc3Q9bmV3IGEuTGlzdH1nZXQgbGVuZ3RoKCl7cmV0dXJuIHRoaXMuX21hcC5zaXplfXNldChlLHQpe2lmKG51bGwhPT1lJiYhYS5zdXBwb3J0ZWQuaGFzKHR5cGVvZiBlKSlyZXR1cm47bGV0IHI9dGhpcy5fbWFwLmdldChlKTtpZihyKXJldHVybiByLnZhbHVlPXQsdm9pZCB0aGlzLl9saXN0LmZpcnN0KHIpO3I9dGhpcy5fbGlzdC51bnNoaWZ0KHtrZXk6ZSx2YWx1ZTp0fSksdGhpcy5fbWFwLnNldChlLHIpLHRoaXMuX2NvbXBhY3QoKX1nZXQoZSl7Y29uc3QgdD10aGlzLl9tYXAuZ2V0KGUpO2lmKHQpcmV0dXJuIHRoaXMuX2xpc3QuZmlyc3QodCksbih0LnZhbHVlKX1fY29tcGFjdCgpe2lmKHRoaXMuX21hcC5zaXplPnRoaXMuX21heCl7Y29uc3QgZT10aGlzLl9saXN0LnBvcCgpO3RoaXMuX21hcC5kZWxldGUoZS5rZXkpfX19LGEuTGlzdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMudGFpbD1udWxsLHRoaXMuaGVhZD1udWxsfXVuc2hpZnQoZSl7cmV0dXJuIGUubmV4dD1udWxsLGUucHJldj10aGlzLmhlYWQsdGhpcy5oZWFkJiYodGhpcy5oZWFkLm5leHQ9ZSksdGhpcy5oZWFkPWUsdGhpcy50YWlsfHwodGhpcy50YWlsPWUpLGV9Zmlyc3QoZSl7ZSE9PXRoaXMuaGVhZCYmKHRoaXMuX3JlbW92ZShlKSx0aGlzLnVuc2hpZnQoZSkpfXBvcCgpe3JldHVybiB0aGlzLl9yZW1vdmUodGhpcy50YWlsKX1fcmVtb3ZlKGUpe2NvbnN0e25leHQ6dCxwcmV2OnJ9PWU7cmV0dXJuIHQucHJldj1yLHImJihyLm5leHQ9dCksZT09PXRoaXMudGFpbCYmKHRoaXMudGFpbD10KSxlLnByZXY9bnVsbCxlLm5leHQ9bnVsbCxlfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTEpLG49e307bi53cmFwPXMuc3RyaW5nKCkubWluKDEpLm1heCgyKS5hbGxvdyghMSksdC5wcmVmZXJlbmNlcz1zLm9iamVjdCh7YWxsb3dVbmtub3duOnMuYm9vbGVhbigpLGFib3J0RWFybHk6cy5ib29sZWFuKCksY2FjaGU6cy5ib29sZWFuKCksY29udGV4dDpzLm9iamVjdCgpLGNvbnZlcnQ6cy5ib29sZWFuKCksZGF0ZUZvcm1hdDpzLnZhbGlkKFwiZGF0ZVwiLFwiaXNvXCIsXCJzdHJpbmdcIixcInRpbWVcIixcInV0Y1wiKSxkZWJ1ZzpzLmJvb2xlYW4oKSxlcnJvcnM6e2VzY2FwZUh0bWw6cy5ib29sZWFuKCksbGFiZWw6cy52YWxpZChcInBhdGhcIixcImtleVwiLCExKSxsYW5ndWFnZTpbcy5zdHJpbmcoKSxzLm9iamVjdCgpLnJlZigpXSxyZW5kZXI6cy5ib29sZWFuKCksc3RhY2s6cy5ib29sZWFuKCksd3JhcDp7bGFiZWw6bi53cmFwLGFycmF5Om4ud3JhcH19LGV4dGVybmFsczpzLmJvb2xlYW4oKSxtZXNzYWdlczpzLm9iamVjdCgpLG5vRGVmYXVsdHM6cy5ib29sZWFuKCksbm9uRW51bWVyYWJsZXM6cy5ib29sZWFuKCkscHJlc2VuY2U6cy52YWxpZChcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCIpLHNraXBGdW5jdGlvbnM6cy5ib29sZWFuKCksc3RyaXBVbmtub3duOnMub2JqZWN0KHthcnJheXM6cy5ib29sZWFuKCksb2JqZWN0czpzLmJvb2xlYW4oKX0pLm9yKFwiYXJyYXlzXCIsXCJvYmplY3RzXCIpLmFsbG93KCEwLCExKSx3YXJuaW5nczpzLmJvb2xlYW4oKX0pLnN0cmljdCgpLG4ubmFtZVJ4PS9eW2EtekEtWjAtOV1cXHcqJC8sbi5ydWxlPXMub2JqZWN0KHthbGlhczpzLmFycmF5KCkuaXRlbXMocy5zdHJpbmcoKS5wYXR0ZXJuKG4ubmFtZVJ4KSkuc2luZ2xlKCksYXJnczpzLmFycmF5KCkuaXRlbXMocy5zdHJpbmcoKSxzLm9iamVjdCh7bmFtZTpzLnN0cmluZygpLnBhdHRlcm4obi5uYW1lUngpLnJlcXVpcmVkKCkscmVmOnMuYm9vbGVhbigpLGFzc2VydDpzLmFsdGVybmF0aXZlcyhbcy5mdW5jdGlvbigpLHMub2JqZWN0KCkuc2NoZW1hKCldKS5jb25kaXRpb25hbChcInJlZlwiLHtpczohMCx0aGVuOnMucmVxdWlyZWQoKX0pLG5vcm1hbGl6ZTpzLmZ1bmN0aW9uKCksbWVzc2FnZTpzLnN0cmluZygpLndoZW4oXCJhc3NlcnRcIix7aXM6cy5mdW5jdGlvbigpLHRoZW46cy5yZXF1aXJlZCgpfSl9KSksY29udmVydDpzLmJvb2xlYW4oKSxtYW5pZmVzdDpzLmJvb2xlYW4oKSxtZXRob2Q6cy5mdW5jdGlvbigpLmFsbG93KCExKSxtdWx0aTpzLmJvb2xlYW4oKSx2YWxpZGF0ZTpzLmZ1bmN0aW9uKCl9KSx0LmV4dGVuc2lvbj1zLm9iamVjdCh7dHlwZTpzLmFsdGVybmF0aXZlcyhbcy5zdHJpbmcoKSxzLm9iamVjdCgpLnJlZ2V4KCldKS5yZXF1aXJlZCgpLGFyZ3M6cy5mdW5jdGlvbigpLGJhc2U6cy5vYmplY3QoKS5zY2hlbWEoKS53aGVuKFwidHlwZVwiLHtpczpzLm9iamVjdCgpLnJlZ2V4KCksdGhlbjpzLmZvcmJpZGRlbigpfSksY29lcmNlOltzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykscy5vYmplY3Qoe21ldGhvZDpzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykucmVxdWlyZWQoKSxmcm9tOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpKS5zaW5nbGUoKX0pXSxmbGFnczpzLm9iamVjdCgpLnBhdHRlcm4obi5uYW1lUngscy5vYmplY3Qoe3NldHRlcjpzLnN0cmluZygpLGRlZmF1bHQ6cy5hbnkoKX0pKSxtYW5pZmVzdDp7YnVpbGQ6cy5mdW5jdGlvbigpLmFyaXR5KDIpfSxtZXNzYWdlczpbcy5vYmplY3QoKSxzLnN0cmluZygpXSxtb2RpZmllcnM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMuZnVuY3Rpb24oKS5taW5Bcml0eSgxKS5tYXhBcml0eSgyKSksb3ZlcnJpZGVzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLmZ1bmN0aW9uKCkpLHByZXBhcmU6cy5mdW5jdGlvbigpLm1heEFyaXR5KDMpLHJlYnVpbGQ6cy5mdW5jdGlvbigpLmFyaXR5KDEpLHJ1bGVzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxuLnJ1bGUpLHRlcm1zOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLm9iamVjdCh7aW5pdDpzLmFycmF5KCkuYWxsb3cobnVsbCkucmVxdWlyZWQoKSxtYW5pZmVzdDpzLm9iamVjdCgpLnBhdHRlcm4oLy4rLyxbcy52YWxpZChcInNjaGVtYVwiLFwic2luZ2xlXCIpLHMub2JqZWN0KHttYXBwZWQ6cy5vYmplY3Qoe2Zyb206cy5zdHJpbmcoKS5yZXF1aXJlZCgpLHRvOnMuc3RyaW5nKCkucmVxdWlyZWQoKX0pLnJlcXVpcmVkKCl9KV0pfSkpLHZhbGlkYXRlOnMuZnVuY3Rpb24oKS5tYXhBcml0eSgzKX0pLnN0cmljdCgpLHQuZXh0ZW5zaW9ucz1zLmFycmF5KCkuaXRlbXMocy5vYmplY3QoKSxzLmZ1bmN0aW9uKCkuYXJpdHkoMSkpLnN0cmljdCgpLG4uZGVzYz17YnVmZmVyOnMub2JqZWN0KHtidWZmZXI6cy5zdHJpbmcoKX0pLGZ1bmM6cy5vYmplY3Qoe2Z1bmN0aW9uOnMuZnVuY3Rpb24oKS5yZXF1aXJlZCgpLG9wdGlvbnM6e2xpdGVyYWw6ITB9fSksb3ZlcnJpZGU6cy5vYmplY3Qoe292ZXJyaWRlOiEwfSkscmVmOnMub2JqZWN0KHtyZWY6cy5vYmplY3Qoe3R5cGU6cy52YWxpZChcInZhbHVlXCIsXCJnbG9iYWxcIixcImxvY2FsXCIpLHBhdGg6cy5hcnJheSgpLnJlcXVpcmVkKCksc2VwYXJhdG9yOnMuc3RyaW5nKCkubGVuZ3RoKDEpLmFsbG93KCExKSxhbmNlc3RvcjpzLm51bWJlcigpLm1pbigwKS5pbnRlZ2VyKCkuYWxsb3coXCJyb290XCIpLG1hcDpzLmFycmF5KCkuaXRlbXMocy5hcnJheSgpLmxlbmd0aCgyKSkubWluKDEpLGFkanVzdDpzLmZ1bmN0aW9uKCksaXRlcmFibGVzOnMuYm9vbGVhbigpLGluOnMuYm9vbGVhbigpfSkucmVxdWlyZWQoKX0pLHJlZ2V4OnMub2JqZWN0KHtyZWdleDpzLnN0cmluZygpLm1pbigzKX0pLHNwZWNpYWw6cy5vYmplY3Qoe3NwZWNpYWw6cy52YWxpZChcImRlZXBcIikucmVxdWlyZWQoKX0pLHRlbXBsYXRlOnMub2JqZWN0KHt0ZW1wbGF0ZTpzLnN0cmluZygpLnJlcXVpcmVkKCksb3B0aW9uczpzLm9iamVjdCgpfSksdmFsdWU6cy5vYmplY3Qoe3ZhbHVlOnMuYWx0ZXJuYXRpdmVzKFtzLm9iamVjdCgpLHMuYXJyYXkoKV0pLnJlcXVpcmVkKCl9KX0sbi5kZXNjLmVudGl0eT1zLmFsdGVybmF0aXZlcyhbcy5hcnJheSgpLml0ZW1zKHMubGluayhcIi4uLlwiKSkscy5ib29sZWFuKCkscy5mdW5jdGlvbigpLHMubnVtYmVyKCkscy5zdHJpbmcoKSxuLmRlc2MuYnVmZmVyLG4uZGVzYy5mdW5jLG4uZGVzYy5yZWYsbi5kZXNjLnJlZ2V4LG4uZGVzYy5zcGVjaWFsLG4uZGVzYy50ZW1wbGF0ZSxuLmRlc2MudmFsdWUscy5saW5rKFwiL1wiKV0pLG4uZGVzYy52YWx1ZXM9cy5hcnJheSgpLml0ZW1zKG51bGwscy5ib29sZWFuKCkscy5mdW5jdGlvbigpLHMubnVtYmVyKCkuYWxsb3coMS8wLC0xLzApLHMuc3RyaW5nKCkuYWxsb3coXCJcIikscy5zeW1ib2woKSxuLmRlc2MuYnVmZmVyLG4uZGVzYy5mdW5jLG4uZGVzYy5vdmVycmlkZSxuLmRlc2MucmVmLG4uZGVzYy5yZWdleCxuLmRlc2MudGVtcGxhdGUsbi5kZXNjLnZhbHVlKSxuLmRlc2MubWVzc2FnZXM9cy5vYmplY3QoKS5wYXR0ZXJuKC8uKy8sW3Muc3RyaW5nKCksbi5kZXNjLnRlbXBsYXRlLHMub2JqZWN0KCkucGF0dGVybigvLisvLFtzLnN0cmluZygpLG4uZGVzYy50ZW1wbGF0ZV0pXSksdC5kZXNjcmlwdGlvbj1zLm9iamVjdCh7dHlwZTpzLnN0cmluZygpLnJlcXVpcmVkKCksZmxhZ3M6cy5vYmplY3Qoe2Nhc3Q6cy5zdHJpbmcoKSxkZWZhdWx0OnMuYW55KCksZGVzY3JpcHRpb246cy5zdHJpbmcoKSxlbXB0eTpzLmxpbmsoXCIvXCIpLGZhaWxvdmVyOm4uZGVzYy5lbnRpdHksaWQ6cy5zdHJpbmcoKSxsYWJlbDpzLnN0cmluZygpLG9ubHk6ITAscHJlc2VuY2U6W1wib3B0aW9uYWxcIixcInJlcXVpcmVkXCIsXCJmb3JiaWRkZW5cIl0scmVzdWx0OltcInJhd1wiLFwic3RyaXBcIl0sc3RyaXA6cy5ib29sZWFuKCksdW5pdDpzLnN0cmluZygpfSkudW5rbm93bigpLHByZWZlcmVuY2VzOnthbGxvd1Vua25vd246cy5ib29sZWFuKCksYWJvcnRFYXJseTpzLmJvb2xlYW4oKSxjYWNoZTpzLmJvb2xlYW4oKSxjb252ZXJ0OnMuYm9vbGVhbigpLGRhdGVGb3JtYXQ6W1wiZGF0ZVwiLFwiaXNvXCIsXCJzdHJpbmdcIixcInRpbWVcIixcInV0Y1wiXSxlcnJvcnM6e2VzY2FwZUh0bWw6cy5ib29sZWFuKCksbGFiZWw6W1wicGF0aFwiLFwia2V5XCJdLGxhbmd1YWdlOltzLnN0cmluZygpLG4uZGVzYy5yZWZdLHdyYXA6e2xhYmVsOm4ud3JhcCxhcnJheTpuLndyYXB9fSxleHRlcm5hbHM6cy5ib29sZWFuKCksbWVzc2FnZXM6bi5kZXNjLm1lc3NhZ2VzLG5vRGVmYXVsdHM6cy5ib29sZWFuKCksbm9uRW51bWVyYWJsZXM6cy5ib29sZWFuKCkscHJlc2VuY2U6W1wicmVxdWlyZWRcIixcIm9wdGlvbmFsXCIsXCJmb3JiaWRkZW5cIl0sc2tpcEZ1bmN0aW9uczpzLmJvb2xlYW4oKSxzdHJpcFVua25vd246cy5vYmplY3Qoe2FycmF5czpzLmJvb2xlYW4oKSxvYmplY3RzOnMuYm9vbGVhbigpfSkub3IoXCJhcnJheXNcIixcIm9iamVjdHNcIikuYWxsb3coITAsITEpLHdhcm5pbmdzOnMuYm9vbGVhbigpfSxhbGxvdzpuLmRlc2MudmFsdWVzLGludmFsaWQ6bi5kZXNjLnZhbHVlcyxydWxlczpzLmFycmF5KCkubWluKDEpLml0ZW1zKHtuYW1lOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxhcmdzOnMub2JqZWN0KCkubWluKDEpLGtlZXA6cy5ib29sZWFuKCksbWVzc2FnZTpbcy5zdHJpbmcoKSxuLmRlc2MubWVzc2FnZXNdLHdhcm46cy5ib29sZWFuKCl9KSxrZXlzOnMub2JqZWN0KCkucGF0dGVybigvLiovLHMubGluayhcIi9cIikpLGxpbms6bi5kZXNjLnJlZn0pLnBhdHRlcm4oL15bYS16XVxcdyokLyxzLmFueSgpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDEpLGE9cig5KSxpPXt9O3QudHlwZT1mdW5jdGlvbihlLHQpe2NvbnN0IHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpLGw9bihyKSxjPWUuX2Fzc2lnbihPYmplY3QuY3JlYXRlKGwpKSx1PU9iamVjdC5hc3NpZ24oe30sdCk7ZGVsZXRlIHUuYmFzZSxsLl9kZWZpbml0aW9uPXU7Y29uc3QgZj1yLl9kZWZpbml0aW9ufHx7fTt1Lm1lc3NhZ2VzPWEubWVyZ2UoZi5tZXNzYWdlcyx1Lm1lc3NhZ2VzKSx1LnByb3BlcnRpZXM9T2JqZWN0LmFzc2lnbih7fSxmLnByb3BlcnRpZXMsdS5wcm9wZXJ0aWVzKSxjLnR5cGU9dS50eXBlLHUuZmxhZ3M9T2JqZWN0LmFzc2lnbih7fSxmLmZsYWdzLHUuZmxhZ3MpO2NvbnN0IG09T2JqZWN0LmFzc2lnbih7fSxmLnRlcm1zKTtpZih1LnRlcm1zKWZvcihjb25zdCBlIGluIHUudGVybXMpe2NvbnN0IHQ9dS50ZXJtc1tlXTtzKHZvaWQgMD09PWMuJF90ZXJtc1tlXSxcIkludmFsaWQgdGVybSBvdmVycmlkZSBmb3JcIix1LnR5cGUsZSksYy4kX3Rlcm1zW2VdPXQuaW5pdCxtW2VdPXR9dS50ZXJtcz1tLHUuYXJnc3x8KHUuYXJncz1mLmFyZ3MpLHUucHJlcGFyZT1pLnByZXBhcmUodS5wcmVwYXJlLGYucHJlcGFyZSksdS5jb2VyY2UmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LmNvZXJjZSYmKHUuY29lcmNlPXttZXRob2Q6dS5jb2VyY2V9KSx1LmNvZXJjZS5mcm9tJiYhQXJyYXkuaXNBcnJheSh1LmNvZXJjZS5mcm9tKSYmKHUuY29lcmNlPXttZXRob2Q6dS5jb2VyY2UubWV0aG9kLGZyb206W10uY29uY2F0KHUuY29lcmNlLmZyb20pfSkpLHUuY29lcmNlPWkuY29lcmNlKHUuY29lcmNlLGYuY29lcmNlKSx1LnZhbGlkYXRlPWkudmFsaWRhdGUodS52YWxpZGF0ZSxmLnZhbGlkYXRlKTtjb25zdCBoPU9iamVjdC5hc3NpZ24oe30sZi5ydWxlcyk7aWYodS5ydWxlcylmb3IoY29uc3QgZSBpbiB1LnJ1bGVzKXtjb25zdCB0PXUucnVsZXNbZV07cyhcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgcnVsZSBkZWZpbml0aW9uIGZvclwiLHUudHlwZSxlKTtsZXQgcj10Lm1ldGhvZDtpZih2b2lkIDA9PT1yJiYocj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRfYWRkUnVsZShlKX0pLHImJihzKCFsW2VdLFwiUnVsZSBjb25mbGljdCBpblwiLHUudHlwZSxlKSxsW2VdPXIpLHMoIWhbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpLGhbZV09dCx0LmFsaWFzKXtjb25zdCBlPVtdLmNvbmNhdCh0LmFsaWFzKTtmb3IoY29uc3QgciBvZiBlKWxbcl09dC5tZXRob2R9dC5hcmdzJiYodC5hcmdzQnlOYW1lPW5ldyBNYXAsdC5hcmdzPXQuYXJncy5tYXAoZT0+KFwic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT17bmFtZTplfSkscyghdC5hcmdzQnlOYW1lLmhhcyhlLm5hbWUpLFwiRHVwbGljYXRlZCBhcmd1bWVudCBuYW1lXCIsZS5uYW1lKSxvLmlzU2NoZW1hKGUuYXNzZXJ0KSYmKGUuYXNzZXJ0PWUuYXNzZXJ0LnN0cmljdCgpLmxhYmVsKGUubmFtZSkpLHQuYXJnc0J5TmFtZS5zZXQoZS5uYW1lLGUpLGUpKSl9dS5ydWxlcz1oO2NvbnN0IGQ9T2JqZWN0LmFzc2lnbih7fSxmLm1vZGlmaWVycyk7aWYodS5tb2RpZmllcnMpZm9yKGNvbnN0IGUgaW4gdS5tb2RpZmllcnMpe3MoIWxbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpO2NvbnN0IHQ9dS5tb2RpZmllcnNbZV07cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LFwiSW52YWxpZCBtb2RpZmllciBkZWZpbml0aW9uIGZvclwiLHUudHlwZSxlKTtjb25zdCByPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnJ1bGUoe1tlXTp0fSl9O2xbZV09cixkW2VdPXR9aWYodS5tb2RpZmllcnM9ZCx1Lm92ZXJyaWRlcyl7bC5fc3VwZXI9cixjLiRfc3VwZXI9e307Zm9yKGNvbnN0IGUgaW4gdS5vdmVycmlkZXMpcyhyW2VdLFwiQ2Fubm90IG92ZXJyaWRlIG1pc3NpbmdcIixlKSxjLiRfc3VwZXJbZV09cltlXS5iaW5kKGMpO09iamVjdC5hc3NpZ24obCx1Lm92ZXJyaWRlcyl9dS5jYXN0PU9iamVjdC5hc3NpZ24oe30sZi5jYXN0LHUuY2FzdCk7Y29uc3QgcD1PYmplY3QuYXNzaWduKHt9LGYubWFuaWZlc3QsdS5tYW5pZmVzdCk7cmV0dXJuIHAuYnVpbGQ9aS5idWlsZCh1Lm1hbmlmZXN0JiZ1Lm1hbmlmZXN0LmJ1aWxkLGYubWFuaWZlc3QmJmYubWFuaWZlc3QuYnVpbGQpLHUubWFuaWZlc3Q9cCx1LnJlYnVpbGQ9aS5yZWJ1aWxkKHUucmVidWlsZCxmLnJlYnVpbGQpLGN9LGkuYnVpbGQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe3JldHVybiB0KGUocixzKSxzKX06ZXx8dH0saS5jb2VyY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD97ZnJvbTplLmZyb20mJnQuZnJvbT9bLi4ubmV3IFNldChbLi4uZS5mcm9tLC4uLnQuZnJvbV0pXTpudWxsLG1ldGhvZChyLHMpe2xldCBuO2lmKCghdC5mcm9tfHx0LmZyb20uaW5jbHVkZXModHlwZW9mIHIpKSYmKG49dC5tZXRob2QocixzKSxuKSl7aWYobi5lcnJvcnN8fHZvaWQgMD09PW4udmFsdWUpcmV0dXJuIG47cj1uLnZhbHVlfWlmKCFlLmZyb218fGUuZnJvbS5pbmNsdWRlcyh0eXBlb2Ygcikpe2NvbnN0IHQ9ZS5tZXRob2QocixzKTtpZih0KXJldHVybiB0fXJldHVybiBufX06ZXx8dH0saS5wcmVwYXJlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocixzKXtjb25zdCBuPWUocixzKTtpZihuKXtpZihuLmVycm9yc3x8dm9pZCAwPT09bi52YWx1ZSlyZXR1cm4gbjtyPW4udmFsdWV9cmV0dXJuIHQocixzKXx8bn06ZXx8dH0saS5yZWJ1aWxkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocil7dChyKSxlKHIpfTplfHx0fSxpLnZhbGlkYXRlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUmJnQ/ZnVuY3Rpb24ocixzKXtjb25zdCBuPXQocixzKTtpZihuKXtpZihuLmVycm9ycyYmKCFBcnJheS5pc0FycmF5KG4uZXJyb3JzKXx8bi5lcnJvcnMubGVuZ3RoKSlyZXR1cm4gbjtyPW4udmFsdWV9cmV0dXJuIGUocixzKXx8bn06ZXx8dH19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDE0KSxhPXt9O2UuZXhwb3J0cz1hLm1lcmdlPWZ1bmN0aW9uKGUsdCxyKXtpZihzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCB0YXJnZXQgdmFsdWU6IG11c3QgYmUgYW4gb2JqZWN0XCIpLHMobnVsbD09dHx8XCJvYmplY3RcIj09dHlwZW9mIHQsXCJJbnZhbGlkIHNvdXJjZSB2YWx1ZTogbXVzdCBiZSBudWxsLCB1bmRlZmluZWQsIG9yIGFuIG9iamVjdFwiKSwhdClyZXR1cm4gZTtpZihyPU9iamVjdC5hc3NpZ24oe251bGxPdmVycmlkZTohMCxtZXJnZUFycmF5czohMH0sciksQXJyYXkuaXNBcnJheSh0KSl7cyhBcnJheS5pc0FycmF5KGUpLFwiQ2Fubm90IG1lcmdlIGFycmF5IG9udG8gYW4gb2JqZWN0XCIpLHIubWVyZ2VBcnJheXN8fChlLmxlbmd0aD0wKTtmb3IobGV0IHM9MDtzPHQubGVuZ3RoOysrcyllLnB1c2gobih0W3NdLHtzeW1ib2xzOnIuc3ltYm9sc30pKTtyZXR1cm4gZX1jb25zdCBpPW8ua2V5cyh0LHIpO2ZvcihsZXQgcz0wO3M8aS5sZW5ndGg7KytzKXtjb25zdCBvPWlbc107aWYoXCJfX3Byb3RvX19cIj09PW98fCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxvKSljb250aW51ZTtjb25zdCBsPXRbb107aWYobCYmXCJvYmplY3RcIj09dHlwZW9mIGwpe2lmKGVbb109PT1sKWNvbnRpbnVlOyFlW29dfHxcIm9iamVjdFwiIT10eXBlb2YgZVtvXXx8QXJyYXkuaXNBcnJheShlW29dKSE9PUFycmF5LmlzQXJyYXkobCl8fGwgaW5zdGFuY2VvZiBEYXRlfHxsIGluc3RhbmNlb2YgUmVnRXhwP2Vbb109bihsLHtzeW1ib2xzOnIuc3ltYm9sc30pOmEubWVyZ2UoZVtvXSxsLHIpfWVsc2UgbnVsbCE9bD9lW29dPWw6ci5udWxsT3ZlcnJpZGUmJihlW29dPWwpfXJldHVybiBlfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTApLG89cigxKSxhPXt9O2UuZXhwb3J0cz1hLlZhbHVlcz1jbGFzc3tjb25zdHJ1Y3RvcihlLHQpe3RoaXMuX3ZhbHVlcz1uZXcgU2V0KGUpLHRoaXMuX3JlZnM9bmV3IFNldCh0KSx0aGlzLl9sb3dlcmNhc2U9YS5sb3dlcmNhc2VzKGUpLHRoaXMuX292ZXJyaWRlPSExfWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5fdmFsdWVzLnNpemUrdGhpcy5fcmVmcy5zaXplfWFkZChlLHQpe28uaXNSZXNvbHZhYmxlKGUpP3RoaXMuX3JlZnMuaGFzKGUpfHwodGhpcy5fcmVmcy5hZGQoZSksdCYmdC5yZWdpc3RlcihlKSk6dGhpcy5oYXMoZSxudWxsLG51bGwsITEpfHwodGhpcy5fdmFsdWVzLmFkZChlKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmdGhpcy5fbG93ZXJjYXNlLnNldChlLnRvTG93ZXJDYXNlKCksZSkpfXN0YXRpYyBtZXJnZShlLHQscil7aWYoZT1lfHxuZXcgYS5WYWx1ZXMsdCl7aWYodC5fb3ZlcnJpZGUpcmV0dXJuIHQuY2xvbmUoKTtmb3IoY29uc3QgciBvZlsuLi50Ll92YWx1ZXMsLi4udC5fcmVmc10pZS5hZGQocil9aWYocilmb3IoY29uc3QgdCBvZlsuLi5yLl92YWx1ZXMsLi4uci5fcmVmc10pZS5yZW1vdmUodCk7cmV0dXJuIGUubGVuZ3RoP2U6bnVsbH1yZW1vdmUoZSl7by5pc1Jlc29sdmFibGUoZSk/dGhpcy5fcmVmcy5kZWxldGUoZSk6KHRoaXMuX3ZhbHVlcy5kZWxldGUoZSksXCJzdHJpbmdcIj09dHlwZW9mIGUmJnRoaXMuX2xvd2VyY2FzZS5kZWxldGUoZS50b0xvd2VyQ2FzZSgpKSl9aGFzKGUsdCxyLHMpe3JldHVybiEhdGhpcy5nZXQoZSx0LHIscyl9Z2V0KGUsdCxyLHMpe2lmKCF0aGlzLmxlbmd0aClyZXR1cm4hMTtpZih0aGlzLl92YWx1ZXMuaGFzKGUpKXJldHVybnt2YWx1ZTplfTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmZSYmcyl7Y29uc3QgdD10aGlzLl9sb3dlcmNhc2UuZ2V0KGUudG9Mb3dlckNhc2UoKSk7aWYodClyZXR1cm57dmFsdWU6dH19aWYoIXRoaXMuX3JlZnMuc2l6ZSYmXCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuITE7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpZm9yKGNvbnN0IHQgb2YgdGhpcy5fdmFsdWVzKWlmKG4odCxlKSlyZXR1cm57dmFsdWU6dH07aWYodClmb3IoY29uc3QgbyBvZiB0aGlzLl9yZWZzKXtjb25zdCBhPW8ucmVzb2x2ZShlLHQscixudWxsLHtpbjohMH0pO2lmKHZvaWQgMD09PWEpY29udGludWU7Y29uc3QgaT1vLmluJiZcIm9iamVjdFwiPT10eXBlb2YgYT9BcnJheS5pc0FycmF5KGEpP2E6T2JqZWN0LmtleXMoYSk6W2FdO2Zvcihjb25zdCB0IG9mIGkpaWYodHlwZW9mIHQ9PXR5cGVvZiBlKWlmKHMmJmUmJlwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZih0LnRvTG93ZXJDYXNlKCk9PT1lLnRvTG93ZXJDYXNlKCkpcmV0dXJue3ZhbHVlOnQscmVmOm99fWVsc2UgaWYobih0LGUpKXJldHVybnt2YWx1ZTp0LHJlZjpvfX1yZXR1cm4hMX1vdmVycmlkZSgpe3RoaXMuX292ZXJyaWRlPSEwfXZhbHVlcyhlKXtpZihlJiZlLmRpc3BsYXkpe2NvbnN0IGU9W107Zm9yKGNvbnN0IHQgb2ZbLi4udGhpcy5fdmFsdWVzLC4uLnRoaXMuX3JlZnNdKXZvaWQgMCE9PXQmJmUucHVzaCh0KTtyZXR1cm4gZX1yZXR1cm4gQXJyYXkuZnJvbShbLi4udGhpcy5fdmFsdWVzLC4uLnRoaXMuX3JlZnNdKX1jbG9uZSgpe2NvbnN0IGU9bmV3IGEuVmFsdWVzKHRoaXMuX3ZhbHVlcyx0aGlzLl9yZWZzKTtyZXR1cm4gZS5fb3ZlcnJpZGU9dGhpcy5fb3ZlcnJpZGUsZX1jb25jYXQoZSl7cyghZS5fb3ZlcnJpZGUsXCJDYW5ub3QgY29uY2F0IG92ZXJyaWRlIHNldCBvZiB2YWx1ZXNcIik7Y29uc3QgdD1uZXcgYS5WYWx1ZXMoWy4uLnRoaXMuX3ZhbHVlcywuLi5lLl92YWx1ZXNdLFsuLi50aGlzLl9yZWZzLC4uLmUuX3JlZnNdKTtyZXR1cm4gdC5fb3ZlcnJpZGU9dGhpcy5fb3ZlcnJpZGUsdH1kZXNjcmliZSgpe2NvbnN0IGU9W107dGhpcy5fb3ZlcnJpZGUmJmUucHVzaCh7b3ZlcnJpZGU6ITB9KTtmb3IoY29uc3QgdCBvZiB0aGlzLl92YWx1ZXMudmFsdWVzKCkpZS5wdXNoKHQmJlwib2JqZWN0XCI9PXR5cGVvZiB0P3t2YWx1ZTp0fTp0KTtmb3IoY29uc3QgdCBvZiB0aGlzLl9yZWZzLnZhbHVlcygpKWUucHVzaCh0LmRlc2NyaWJlKCkpO3JldHVybiBlfX0sYS5WYWx1ZXMucHJvdG90eXBlW28uc3ltYm9scy52YWx1ZXNdPSEwLGEuVmFsdWVzLnByb3RvdHlwZS5zbGljZT1hLlZhbHVlcy5wcm90b3R5cGUuY2xvbmUsYS5sb3dlcmNhc2VzPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9bmV3IE1hcDtpZihlKWZvcihjb25zdCByIG9mIGUpXCJzdHJpbmdcIj09dHlwZW9mIHImJnQuc2V0KHIudG9Mb3dlckNhc2UoKSxyKTtyZXR1cm4gdH19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoNDMpLG49cigwKSxvPXIoMiksYT1yKDQ0KSxpPXIoMyksbD1yKDEpLGM9cig4KSx1PXIoNCksZj1yKDUpLG09cig3KSxoPXtyZW5hbWVEZWZhdWx0czp7YWxpYXM6ITEsbXVsdGlwbGU6ITEsb3ZlcnJpZGU6ITF9fTtlLmV4cG9ydHM9aS5leHRlbmQoe3R5cGU6XCJfa2V5c1wiLHByb3BlcnRpZXM6e3R5cGVvZjpcIm9iamVjdFwifSxmbGFnczp7dW5rbm93bjp7ZGVmYXVsdDohMX19LHRlcm1zOntkZXBlbmRlbmNpZXM6e2luaXQ6bnVsbH0sa2V5czp7aW5pdDpudWxsLG1hbmlmZXN0OnttYXBwZWQ6e2Zyb206XCJzY2hlbWFcIix0bzpcImtleVwifX19LHBhdHRlcm5zOntpbml0Om51bGx9LHJlbmFtZXM6e2luaXQ6bnVsbH19LGFyZ3M6KGUsdCk9PmUua2V5cyh0KSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHN0YXRlOnMscHJlZnM6bn0pe2lmKCFlfHx0eXBlb2YgZSE9PXQuJF9wcm9wZXJ0eShcInR5cGVvZlwiKXx8QXJyYXkuaXNBcnJheShlKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6cihcIm9iamVjdC5iYXNlXCIse3R5cGU6dC4kX3Byb3BlcnR5KFwidHlwZW9mXCIpfSl9O2lmKCEodC4kX3Rlcm1zLnJlbmFtZXN8fHQuJF90ZXJtcy5kZXBlbmRlbmNpZXN8fHQuJF90ZXJtcy5rZXlzfHx0LiRfdGVybXMucGF0dGVybnN8fHQuJF90ZXJtcy5leHRlcm5hbHMpKXJldHVybjtlPWguY2xvbmUoZSxuKTtjb25zdCBvPVtdO2lmKHQuJF90ZXJtcy5yZW5hbWVzJiYhaC5yZW5hbWUodCxlLHMsbixvKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6b307aWYoIXQuJF90ZXJtcy5rZXlzJiYhdC4kX3Rlcm1zLnBhdHRlcm5zJiYhdC4kX3Rlcm1zLmRlcGVuZGVuY2llcylyZXR1cm57dmFsdWU6ZSxlcnJvcnM6b307Y29uc3QgYT1uZXcgU2V0KE9iamVjdC5rZXlzKGUpKTtpZih0LiRfdGVybXMua2V5cyl7Y29uc3Qgcj1bZSwuLi5zLmFuY2VzdG9yc107Zm9yKGNvbnN0IGkgb2YgdC4kX3Rlcm1zLmtleXMpe2NvbnN0IHQ9aS5rZXksbD1lW3RdO2EuZGVsZXRlKHQpO2NvbnN0IGM9cy5sb2NhbGl6ZShbLi4ucy5wYXRoLHRdLHIsaSksdT1pLnNjaGVtYS4kX3ZhbGlkYXRlKGwsYyxuKTtpZih1LmVycm9ycyl7aWYobi5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTplLGVycm9yczp1LmVycm9yc307by5wdXNoKC4uLnUuZXJyb3JzKX1lbHNlXCJzdHJpcFwiPT09aS5zY2hlbWEuX2ZsYWdzLnJlc3VsdHx8dm9pZCAwPT09dS52YWx1ZSYmdm9pZCAwIT09bD9kZWxldGUgZVt0XTp2b2lkIDAhPT11LnZhbHVlJiYoZVt0XT11LnZhbHVlKX19aWYoYS5zaXplfHx0Ll9mbGFncy5faGFzUGF0dGVybk1hdGNoKXtjb25zdCByPWgudW5rbm93bih0LGUsYSxvLHMsbik7aWYocilyZXR1cm4gcn1pZih0LiRfdGVybXMuZGVwZW5kZW5jaWVzKWZvcihjb25zdCByIG9mIHQuJF90ZXJtcy5kZXBlbmRlbmNpZXMpe2lmKHIua2V5JiZ2b2lkIDA9PT1yLmtleS5yZXNvbHZlKGUscyxuLG51bGwse3NoYWRvdzohMX0pKWNvbnRpbnVlO2NvbnN0IGE9aC5kZXBlbmRlbmNpZXNbci5yZWxdKHQscixlLHMsbik7aWYoYSl7Y29uc3Qgcj10LiRfY3JlYXRlRXJyb3IoYS5jb2RlLGUsYS5jb250ZXh0LHMsbik7aWYobi5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTplLGVycm9yczpyfTtvLnB1c2gocil9fXJldHVybnt2YWx1ZTplLGVycm9yczpvfX0scnVsZXM6e2FuZDp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcImFuZFwiKSxoLmRlcGVuZGVuY3kodGhpcyxcImFuZFwiLG51bGwsZSl9fSxhcHBlbmQ6e21ldGhvZChlKXtyZXR1cm4gbnVsbD09ZXx8MD09PU9iamVjdC5rZXlzKGUpLmxlbmd0aD90aGlzOnRoaXMua2V5cyhlKX19LGFzc2VydDp7bWV0aG9kKGUsdCxyKXttLmlzVGVtcGxhdGUoZSl8fChlPWMucmVmKGUpKSxuKHZvaWQgMD09PXJ8fFwic3RyaW5nXCI9PXR5cGVvZiByLFwiTWVzc2FnZSBtdXN0IGJlIGEgc3RyaW5nXCIpLHQ9dGhpcy4kX2NvbXBpbGUodCx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IHM9dGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJhc3NlcnRcIixhcmdzOntzdWJqZWN0OmUsc2NoZW1hOnQsbWVzc2FnZTpyfX0pO3JldHVybiBzLiRfbXV0YXRlUmVnaXN0ZXIoZSkscy4kX211dGF0ZVJlZ2lzdGVyKHQpLHN9LHZhbGlkYXRlKGUse2Vycm9yOnQscHJlZnM6cixzdGF0ZTpzfSx7c3ViamVjdDpuLHNjaGVtYTpvLG1lc3NhZ2U6YX0pe2NvbnN0IGk9bi5yZXNvbHZlKGUscyxyKSxsPWYuaXNSZWYobik/bi5hYnNvbHV0ZShzKTpbXTtyZXR1cm4gby4kX21hdGNoKGkscy5sb2NhbGl6ZShsLFtlLC4uLnMuYW5jZXN0b3JzXSxvKSxyKT9lOnQoXCJvYmplY3QuYXNzZXJ0XCIse3N1YmplY3Q6bixtZXNzYWdlOmF9KX0sYXJnczpbXCJzdWJqZWN0XCIsXCJzY2hlbWFcIixcIm1lc3NhZ2VcIl0sbXVsdGk6ITB9LGluc3RhbmNlOnttZXRob2QoZSx0KXtyZXR1cm4gbihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiY29uc3RydWN0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHQ9dHx8ZS5uYW1lLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaW5zdGFuY2VcIixhcmdzOntjb25zdHJ1Y3RvcjplLG5hbWU6dH19KX0sdmFsaWRhdGU6KGUsdCx7Y29uc3RydWN0b3I6cixuYW1lOnN9KT0+ZSBpbnN0YW5jZW9mIHI/ZTp0LmVycm9yKFwib2JqZWN0Lmluc3RhbmNlXCIse3R5cGU6cyx2YWx1ZTplfSksYXJnczpbXCJjb25zdHJ1Y3RvclwiLFwibmFtZVwiXX0sa2V5czp7bWV0aG9kKGUpe24odm9pZCAwPT09ZXx8XCJvYmplY3RcIj09dHlwZW9mIGUsXCJPYmplY3Qgc2NoZW1hIG11c3QgYmUgYSB2YWxpZCBvYmplY3RcIiksbighbC5pc1NjaGVtYShlKSxcIk9iamVjdCBzY2hlbWEgY2Fubm90IGJlIGEgam9pIHNjaGVtYVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtpZihlKWlmKE9iamVjdC5rZXlzKGUpLmxlbmd0aCl7dC4kX3Rlcm1zLmtleXM9dC4kX3Rlcm1zLmtleXM/dC4kX3Rlcm1zLmtleXMuZmlsdGVyKHQ9PiFlLmhhc093blByb3BlcnR5KHQua2V5KSk6bmV3IGguS2V5cztmb3IoY29uc3QgciBpbiBlKWwudHJ5V2l0aFBhdGgoKCk9PnQuJF90ZXJtcy5rZXlzLnB1c2goe2tleTpyLHNjaGVtYTp0aGlzLiRfY29tcGlsZShlW3JdKX0pLHIpfWVsc2UgdC4kX3Rlcm1zLmtleXM9bmV3IGguS2V5cztlbHNlIHQuJF90ZXJtcy5rZXlzPW51bGw7cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9fSxsZW5ndGg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj1cIn0pfSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczpvfSk9PmwuY29tcGFyZShPYmplY3Qua2V5cyhlKS5sZW5ndGgscixuKT9lOnQuZXJyb3IoXCJvYmplY3QuXCIrcyx7bGltaXQ6by5saW1pdCx2YWx1ZTplfSksYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6bC5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn1dfSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sbmFuZDp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcIm5hbmRcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJuYW5kXCIsbnVsbCxlKX19LG9yOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwib3JcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJvclwiLG51bGwsZSl9fSxveG9yOnttZXRob2QoLi4uZSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwib3hvclwiLG51bGwsZSl9fSxwYXR0ZXJuOnttZXRob2QoZSx0LHI9e30pe2NvbnN0IHM9ZSBpbnN0YW5jZW9mIFJlZ0V4cDtzfHwoZT10aGlzLiRfY29tcGlsZShlLHthcHBlbmRQYXRoOiEwfSkpLG4odm9pZCAwIT09dCxcIkludmFsaWQgcnVsZVwiKSxsLmFzc2VydE9wdGlvbnMocixbXCJmYWxsdGhyb3VnaFwiLFwibWF0Y2hlc1wiXSkscyYmbighZS5mbGFncy5pbmNsdWRlcyhcImdcIikmJiFlLmZsYWdzLmluY2x1ZGVzKFwieVwiKSxcInBhdHRlcm4gc2hvdWxkIG5vdCB1c2UgZ2xvYmFsIG9yIHN0aWNreSBtb2RlXCIpLHQ9dGhpcy4kX2NvbXBpbGUodCx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IG89dGhpcy5jbG9uZSgpO28uJF90ZXJtcy5wYXR0ZXJucz1vLiRfdGVybXMucGF0dGVybnN8fFtdO2NvbnN0IGE9e1tzP1wicmVnZXhcIjpcInNjaGVtYVwiXTplLHJ1bGU6dH07cmV0dXJuIHIubWF0Y2hlcyYmKGEubWF0Y2hlcz10aGlzLiRfY29tcGlsZShyLm1hdGNoZXMpLFwiYXJyYXlcIiE9PWEubWF0Y2hlcy50eXBlJiYoYS5tYXRjaGVzPWEubWF0Y2hlcy4kX3Jvb3QuYXJyYXkoKS5pdGVtcyhhLm1hdGNoZXMpKSxvLiRfbXV0YXRlUmVnaXN0ZXIoYS5tYXRjaGVzKSxvLiRfc2V0RmxhZyhcIl9oYXNQYXR0ZXJuTWF0Y2hcIiwhMCx7Y2xvbmU6ITF9KSksci5mYWxsdGhyb3VnaCYmKGEuZmFsbHRocm91Z2g9ITApLG8uJF90ZXJtcy5wYXR0ZXJucy5wdXNoKGEpLG8uJF9tdXRhdGVSZWdpc3Rlcih0KSxvfX0scmVmOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJyZWZcIil9LHZhbGlkYXRlOihlLHQpPT5mLmlzUmVmKGUpP2U6dC5lcnJvcihcIm9iamVjdC5yZWZUeXBlXCIse3ZhbHVlOmV9KX0scmVnZXg6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInJlZ2V4XCIpfSx2YWxpZGF0ZTooZSx0KT0+ZSBpbnN0YW5jZW9mIFJlZ0V4cD9lOnQuZXJyb3IoXCJvYmplY3QucmVnZXhcIix7dmFsdWU6ZX0pfSxyZW5hbWU6e21ldGhvZChlLHQscj17fSl7bihcInN0cmluZ1wiPT10eXBlb2YgZXx8ZSBpbnN0YW5jZW9mIFJlZ0V4cCxcIlJlbmFtZSBtaXNzaW5nIHRoZSBmcm9tIGFyZ3VtZW50XCIpLG4oXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBtLFwiSW52YWxpZCByZW5hbWUgdG8gYXJndW1lbnRcIiksbih0IT09ZSxcIkNhbm5vdCByZW5hbWUga2V5IHRvIHNhbWUgbmFtZTpcIixlKSxsLmFzc2VydE9wdGlvbnMocixbXCJhbGlhc1wiLFwiaWdub3JlVW5kZWZpbmVkXCIsXCJvdmVycmlkZVwiLFwibXVsdGlwbGVcIl0pO2NvbnN0IG89dGhpcy5jbG9uZSgpO28uJF90ZXJtcy5yZW5hbWVzPW8uJF90ZXJtcy5yZW5hbWVzfHxbXTtmb3IoY29uc3QgdCBvZiBvLiRfdGVybXMucmVuYW1lcyluKHQuZnJvbSE9PWUsXCJDYW5ub3QgcmVuYW1lIHRoZSBzYW1lIGtleSBtdWx0aXBsZSB0aW1lc1wiKTtyZXR1cm4gdCBpbnN0YW5jZW9mIG0mJm8uJF9tdXRhdGVSZWdpc3Rlcih0KSxvLiRfdGVybXMucmVuYW1lcy5wdXNoKHtmcm9tOmUsdG86dCxvcHRpb25zOnMoaC5yZW5hbWVEZWZhdWx0cyxyKX0pLG99fSxzY2hlbWE6e21ldGhvZChlPVwiYW55XCIpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInNjaGVtYVwiLGFyZ3M6e3R5cGU6ZX19KX0sdmFsaWRhdGU6KGUsdCx7dHlwZTpyfSk9PiFsLmlzU2NoZW1hKGUpfHxcImFueVwiIT09ciYmZS50eXBlIT09cj90LmVycm9yKFwib2JqZWN0LnNjaGVtYVwiLHt0eXBlOnJ9KTplfSx1bmtub3duOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwidW5rbm93blwiLCExIT09ZSl9fSx3aXRoOnttZXRob2QoZSx0LHI9e30pe3JldHVybiBoLmRlcGVuZGVuY3kodGhpcyxcIndpdGhcIixlLHQscil9fSx3aXRob3V0OnttZXRob2QoZSx0LHI9e30pe3JldHVybiBoLmRlcGVuZGVuY3kodGhpcyxcIndpdGhvdXRcIixlLHQscil9fSx4b3I6e21ldGhvZCguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJ4b3JcIiksaC5kZXBlbmRlbmN5KHRoaXMsXCJ4b3JcIixudWxsLGUpfX19LG92ZXJyaWRlczp7ZGVmYXVsdChlLHQpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1sLnN5bWJvbHMuZGVlcERlZmF1bHQpLHRoaXMuJF9zdXBlci5kZWZhdWx0KGUsdCl9fSxyZWJ1aWxkKGUpe2lmKGUuJF90ZXJtcy5rZXlzKXtjb25zdCB0PW5ldyBhLlNvcnRlcjtmb3IoY29uc3QgciBvZiBlLiRfdGVybXMua2V5cylsLnRyeVdpdGhQYXRoKCgpPT50LmFkZChyLHthZnRlcjpyLnNjaGVtYS4kX3Jvb3RSZWZlcmVuY2VzKCksZ3JvdXA6ci5rZXl9KSxyLmtleSk7ZS4kX3Rlcm1zLmtleXM9bmV3IGguS2V5cyguLi50Lm5vZGVzKX19LG1hbmlmZXN0OntidWlsZChlLHQpe2lmKHQua2V5cyYmKGU9ZS5rZXlzKHQua2V5cykpLHQuZGVwZW5kZW5jaWVzKWZvcihjb25zdHtyZWw6cixrZXk6cz1udWxsLHBlZXJzOm4sb3B0aW9uczpvfW9mIHQuZGVwZW5kZW5jaWVzKWU9aC5kZXBlbmRlbmN5KGUscixzLG4sbyk7aWYodC5wYXR0ZXJucylmb3IoY29uc3R7cmVnZXg6cixzY2hlbWE6cyxydWxlOm4sZmFsbHRocm91Z2g6byxtYXRjaGVzOmF9b2YgdC5wYXR0ZXJucyllPWUucGF0dGVybihyfHxzLG4se2ZhbGx0aHJvdWdoOm8sbWF0Y2hlczphfSk7aWYodC5yZW5hbWVzKWZvcihjb25zdHtmcm9tOnIsdG86cyxvcHRpb25zOm59b2YgdC5yZW5hbWVzKWU9ZS5yZW5hbWUocixzLG4pO3JldHVybiBlfX0sbWVzc2FnZXM6e1wib2JqZWN0LmFuZFwiOlwie3sjbGFiZWx9fSBjb250YWlucyB7eyNwcmVzZW50V2l0aExhYmVsc319IHdpdGhvdXQgaXRzIHJlcXVpcmVkIHBlZXJzIHt7I21pc3NpbmdXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5hc3NlcnRcIjone3sjbGFiZWx9fSBpcyBpbnZhbGlkIGJlY2F1c2Uge2lmKCNzdWJqZWN0LmtleSwgYFwiYCArICNzdWJqZWN0LmtleSArIGBcIiBmYWlsZWQgdG8gYCArICgjbWVzc2FnZSB8fCBcInBhc3MgdGhlIGFzc2VydGlvbiB0ZXN0XCIpLCAjbWVzc2FnZSB8fCBcInRoZSBhc3NlcnRpb24gZmFpbGVkXCIpfScsXCJvYmplY3QuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9mIHR5cGUge3sjdHlwZX19XCIsXCJvYmplY3QuaW5zdGFuY2VcIjone3sjbGFiZWx9fSBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIFwie3sjdHlwZX19XCInLFwib2JqZWN0Lmxlbmd0aFwiOid7eyNsYWJlbH19IG11c3QgaGF2ZSB7eyNsaW1pdH19IGtleXtpZigjbGltaXQgPT0gMSwgXCJcIiwgXCJzXCIpfScsXCJvYmplY3QubWF4XCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGtleXtpZigjbGltaXQgPT0gMSwgXCJcIiwgXCJzXCIpfScsXCJvYmplY3QubWluXCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIGF0IGxlYXN0IHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5taXNzaW5nXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2Yge3sjcGVlcnNXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5uYW5kXCI6J1wie3sjbWFpbldpdGhMYWJlbH19XCIgbXVzdCBub3QgZXhpc3Qgc2ltdWx0YW5lb3VzbHkgd2l0aCB7eyNwZWVyc1dpdGhMYWJlbHN9fScsXCJvYmplY3Qub3hvclwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhIGNvbmZsaWN0IGJldHdlZW4gb3B0aW9uYWwgZXhjbHVzaXZlIHBlZXJzIHt7I3BlZXJzV2l0aExhYmVsc319XCIsXCJvYmplY3QucGF0dGVybi5tYXRjaFwiOlwie3sjbGFiZWx9fSBrZXlzIGZhaWxlZCB0byBtYXRjaCBwYXR0ZXJuIHJlcXVpcmVtZW50c1wiLFwib2JqZWN0LnJlZlR5cGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIEpvaSByZWZlcmVuY2VcIixcIm9iamVjdC5yZWdleFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgUmVnRXhwIG9iamVjdFwiLFwib2JqZWN0LnJlbmFtZS5tdWx0aXBsZVwiOid7eyNsYWJlbH19IGNhbm5vdCByZW5hbWUgXCJ7eyNmcm9tfX1cIiBiZWNhdXNlIG11bHRpcGxlIHJlbmFtZXMgYXJlIGRpc2FibGVkIGFuZCBhbm90aGVyIGtleSB3YXMgYWxyZWFkeSByZW5hbWVkIHRvIFwie3sjdG99fVwiJyxcIm9iamVjdC5yZW5hbWUub3ZlcnJpZGVcIjone3sjbGFiZWx9fSBjYW5ub3QgcmVuYW1lIFwie3sjZnJvbX19XCIgYmVjYXVzZSBvdmVycmlkZSBpcyBkaXNhYmxlZCBhbmQgdGFyZ2V0IFwie3sjdG99fVwiIGV4aXN0cycsXCJvYmplY3Quc2NoZW1hXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBKb2kgc2NoZW1hIG9mIHt7I3R5cGV9fSB0eXBlXCIsXCJvYmplY3QudW5rbm93blwiOlwie3sjbGFiZWx9fSBpcyBub3QgYWxsb3dlZFwiLFwib2JqZWN0LndpdGhcIjonXCJ7eyNtYWluV2l0aExhYmVsfX1cIiBtaXNzaW5nIHJlcXVpcmVkIHBlZXIgXCJ7eyNwZWVyV2l0aExhYmVsfX1cIicsXCJvYmplY3Qud2l0aG91dFwiOidcInt7I21haW5XaXRoTGFiZWx9fVwiIGNvbmZsaWN0IHdpdGggZm9yYmlkZGVuIHBlZXIgXCJ7eyNwZWVyV2l0aExhYmVsfX1cIicsXCJvYmplY3QueG9yXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGEgY29uZmxpY3QgYmV0d2VlbiBleGNsdXNpdmUgcGVlcnMge3sjcGVlcnNXaXRoTGFiZWxzfX1cIn19KSxoLmNsb25lPWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2lmKHQubm9uRW51bWVyYWJsZXMpcmV0dXJuIG8oZSx7c2hhbGxvdzohMH0pO2NvbnN0IHI9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSkpO3JldHVybiBPYmplY3QuYXNzaWduKHIsZSkscn1jb25zdCByPWZ1bmN0aW9uKC4uLnQpe3JldHVybiBlLmFwcGx5KHRoaXMsdCl9O3JldHVybiByLnByb3RvdHlwZT1vKGUucHJvdG90eXBlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIm5hbWVcIix7dmFsdWU6ZS5uYW1lLHdyaXRhYmxlOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJsZW5ndGhcIix7dmFsdWU6ZS5sZW5ndGgsd3JpdGFibGU6ITF9KSxPYmplY3QuYXNzaWduKHIsZSkscn0saC5kZXBlbmRlbmN5PWZ1bmN0aW9uKGUsdCxyLHMsbyl7bihudWxsPT09cnx8XCJzdHJpbmdcIj09dHlwZW9mIHIsdCxcImtleSBtdXN0IGJlIGEgc3RyaW5nc1wiKSxvfHwobz1zLmxlbmd0aD4xJiZcIm9iamVjdFwiPT10eXBlb2Ygc1tzLmxlbmd0aC0xXT9zLnBvcCgpOnt9KSxsLmFzc2VydE9wdGlvbnMobyxbXCJzZXBhcmF0b3JcIl0pLHM9W10uY29uY2F0KHMpO2NvbnN0IGE9bC5kZWZhdWx0KG8uc2VwYXJhdG9yLFwiLlwiKSxpPVtdO2Zvcihjb25zdCBlIG9mIHMpbihcInN0cmluZ1wiPT10eXBlb2YgZSx0LFwicGVlcnMgbXVzdCBiZSBhIHN0cmluZyBvciBhIHJlZmVyZW5jZVwiKSxpLnB1c2goYy5yZWYoZSx7c2VwYXJhdG9yOmEsYW5jZXN0b3I6MCxwcmVmaXg6ITF9KSk7bnVsbCE9PXImJihyPWMucmVmKHIse3NlcGFyYXRvcjphLGFuY2VzdG9yOjAscHJlZml4OiExfSkpO2NvbnN0IHU9ZS5jbG9uZSgpO3JldHVybiB1LiRfdGVybXMuZGVwZW5kZW5jaWVzPXUuJF90ZXJtcy5kZXBlbmRlbmNpZXN8fFtdLHUuJF90ZXJtcy5kZXBlbmRlbmNpZXMucHVzaChuZXcgaC5EZXBlbmRlbmN5KHQscixpLHMpKSx1fSxoLmRlcGVuZGVuY2llcz17YW5kKGUsdCxyLHMsbil7Y29uc3Qgbz1bXSxhPVtdLGk9dC5wZWVycy5sZW5ndGg7Zm9yKGNvbnN0IGUgb2YgdC5wZWVycyl2b2lkIDA9PT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSk/by5wdXNoKGUua2V5KTphLnB1c2goZS5rZXkpO2lmKG8ubGVuZ3RoIT09aSYmYS5sZW5ndGghPT1pKXJldHVybntjb2RlOlwib2JqZWN0LmFuZFwiLGNvbnRleHQ6e3ByZXNlbnQ6YSxwcmVzZW50V2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLGEpLG1pc3Npbmc6byxtaXNzaW5nV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLG8pfX19LG5hbmQoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKG8ubGVuZ3RoIT09dC5wZWVycy5sZW5ndGgpcmV0dXJuO2NvbnN0IGE9dC5wYXRoc1swXSxpPXQucGF0aHMuc2xpY2UoMSk7cmV0dXJue2NvZGU6XCJvYmplY3QubmFuZFwiLGNvbnRleHQ6e21haW46YSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsYSkscGVlcnM6aSxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSxpKX19fSxvcihlLHQscixzLG4pe2Zvcihjb25zdCBlIG9mIHQucGVlcnMpaWYodm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybjtyZXR1cm57Y29kZTpcIm9iamVjdC5taXNzaW5nXCIsY29udGV4dDp7cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX19fSxveG9yKGUsdCxyLHMsbil7Y29uc3Qgbz1bXTtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMCE9PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KSYmby5wdXNoKGUua2V5KTtpZighby5sZW5ndGh8fDE9PT1vLmxlbmd0aClyZXR1cm47Y29uc3QgYT17cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX07cmV0dXJuIGEucHJlc2VudD1vLGEucHJlc2VudFdpdGhMYWJlbHM9aC5rZXlzVG9MYWJlbHMoZSxvKSx7Y29kZTpcIm9iamVjdC5veG9yXCIsY29udGV4dDphfX0sd2l0aChlLHQscixzLG4pe2Zvcihjb25zdCBvIG9mIHQucGVlcnMpaWYodm9pZCAwPT09by5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybntjb2RlOlwib2JqZWN0LndpdGhcIixjb250ZXh0OnttYWluOnQua2V5LmtleSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsdC5rZXkua2V5KSxwZWVyOm8ua2V5LHBlZXJXaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxvLmtleSl9fX0sd2l0aG91dChlLHQscixzLG4pe2Zvcihjb25zdCBvIG9mIHQucGVlcnMpaWYodm9pZCAwIT09by5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pKXJldHVybntjb2RlOlwib2JqZWN0LndpdGhvdXRcIixjb250ZXh0OnttYWluOnQua2V5LmtleSxtYWluV2l0aExhYmVsOmgua2V5c1RvTGFiZWxzKGUsdC5rZXkua2V5KSxwZWVyOm8ua2V5LHBlZXJXaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxvLmtleSl9fX0seG9yKGUsdCxyLHMsbil7Y29uc3Qgbz1bXTtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMCE9PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KSYmby5wdXNoKGUua2V5KTtpZigxPT09by5sZW5ndGgpcmV0dXJuO2NvbnN0IGE9e3BlZXJzOnQucGF0aHMscGVlcnNXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsdC5wYXRocyl9O3JldHVybiAwPT09by5sZW5ndGg/e2NvZGU6XCJvYmplY3QubWlzc2luZ1wiLGNvbnRleHQ6YX06KGEucHJlc2VudD1vLGEucHJlc2VudFdpdGhMYWJlbHM9aC5rZXlzVG9MYWJlbHMoZSxvKSx7Y29kZTpcIm9iamVjdC54b3JcIixjb250ZXh0OmF9KX19LGgua2V5c1RvTGFiZWxzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/dC5tYXAodD0+ZS4kX21hcExhYmVscyh0KSk6ZS4kX21hcExhYmVscyh0KX0saC5yZW5hbWU9ZnVuY3Rpb24oZSx0LHIscyxuKXtjb25zdCBvPXt9O2Zvcihjb25zdCBhIG9mIGUuJF90ZXJtcy5yZW5hbWVzKXtjb25zdCBpPVtdLGw9XCJzdHJpbmdcIiE9dHlwZW9mIGEuZnJvbTtpZihsKWZvcihjb25zdCBlIGluIHQpe2lmKHZvaWQgMD09PXRbZV0mJmEub3B0aW9ucy5pZ25vcmVVbmRlZmluZWQpY29udGludWU7aWYoZT09PWEudG8pY29udGludWU7Y29uc3Qgcj1hLmZyb20uZXhlYyhlKTtyJiZpLnB1c2goe2Zyb206ZSx0bzphLnRvLG1hdGNoOnJ9KX1lbHNlIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGEuZnJvbSl8fHZvaWQgMD09PXRbYS5mcm9tXSYmYS5vcHRpb25zLmlnbm9yZVVuZGVmaW5lZHx8aS5wdXNoKGEpO2Zvcihjb25zdCBjIG9mIGkpe2NvbnN0IGk9Yy5mcm9tO2xldCB1PWMudG87aWYodSBpbnN0YW5jZW9mIG0mJih1PXUucmVuZGVyKHQscixzLGMubWF0Y2gpKSxpIT09dSl7aWYoIWEub3B0aW9ucy5tdWx0aXBsZSYmb1t1XSYmKG4ucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QucmVuYW1lLm11bHRpcGxlXCIsdCx7ZnJvbTppLHRvOnUscGF0dGVybjpsfSxyLHMpKSxzLmFib3J0RWFybHkpKXJldHVybiExO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LHUpJiYhYS5vcHRpb25zLm92ZXJyaWRlJiYhb1t1XSYmKG4ucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QucmVuYW1lLm92ZXJyaWRlXCIsdCx7ZnJvbTppLHRvOnUscGF0dGVybjpsfSxyLHMpKSxzLmFib3J0RWFybHkpKXJldHVybiExO3ZvaWQgMD09PXRbaV0/ZGVsZXRlIHRbdV06dFt1XT10W2ldLG9bdV09ITAsYS5vcHRpb25zLmFsaWFzfHxkZWxldGUgdFtpXX19fXJldHVybiEwfSxoLnVua25vd249ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2lmKGUuJF90ZXJtcy5wYXR0ZXJucyl7bGV0IGE9ITE7Y29uc3QgaT1lLiRfdGVybXMucGF0dGVybnMubWFwKGU9PntpZihlLm1hdGNoZXMpcmV0dXJuIGE9ITAsW119KSxsPVt0LC4uLm4uYW5jZXN0b3JzXTtmb3IoY29uc3QgYSBvZiByKXtjb25zdCBjPXRbYV0sdT1bLi4ubi5wYXRoLGFdO2ZvcihsZXQgZj0wO2Y8ZS4kX3Rlcm1zLnBhdHRlcm5zLmxlbmd0aDsrK2Ype2NvbnN0IG09ZS4kX3Rlcm1zLnBhdHRlcm5zW2ZdO2lmKG0ucmVnZXgpe2NvbnN0IGU9bS5yZWdleC50ZXN0KGEpO2lmKG4ubWFpbnN0YXkudHJhY2VyLmRlYnVnKG4sXCJydWxlXCIsXCJwYXR0ZXJuLlwiLmNvbmNhdChmKSxlP1wicGFzc1wiOlwiZXJyb3JcIiksIWUpY29udGludWV9ZWxzZSBpZighbS5zY2hlbWEuJF9tYXRjaChhLG4ubmVzdChtLnNjaGVtYSxcInBhdHRlcm4uXCIuY29uY2F0KGYpKSxvKSljb250aW51ZTtyLmRlbGV0ZShhKTtjb25zdCBoPW4ubG9jYWxpemUodSxsLHtzY2hlbWE6bS5ydWxlLGtleTphfSksZD1tLnJ1bGUuJF92YWxpZGF0ZShjLGgsbyk7aWYoZC5lcnJvcnMpe2lmKG8uYWJvcnRFYXJseSlyZXR1cm57dmFsdWU6dCxlcnJvcnM6ZC5lcnJvcnN9O3MucHVzaCguLi5kLmVycm9ycyl9aWYobS5tYXRjaGVzJiZpW2ZdLnB1c2goYSksdFthXT1kLnZhbHVlLCFtLmZhbGx0aHJvdWdoKWJyZWFrfX1pZihhKWZvcihsZXQgcj0wO3I8aS5sZW5ndGg7KytyKXtjb25zdCBhPWlbcl07aWYoIWEpY29udGludWU7Y29uc3QgYz1lLiRfdGVybXMucGF0dGVybnNbcl0ubWF0Y2hlcyxmPW4ubG9jYWxpemUobi5wYXRoLGwsYyksbT1jLiRfdmFsaWRhdGUoYSxmLG8pO2lmKG0uZXJyb3JzKXtjb25zdCByPXUuZGV0YWlscyhtLmVycm9ycyx7b3ZlcnJpZGU6ITF9KTtyLm1hdGNoZXM9YTtjb25zdCBpPWUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5wYXR0ZXJuLm1hdGNoXCIsdCxyLG4sbyk7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczppfTtzLnB1c2goaSl9fX1pZighci5zaXplfHwhZS4kX3Rlcm1zLmtleXMmJiFlLiRfdGVybXMucGF0dGVybnMpcmV0dXJuO2lmKG8uc3RyaXBVbmtub3duJiYhZS5fZmxhZ3MudW5rbm93bnx8by5za2lwRnVuY3Rpb25zKXtjb25zdCBlPSEhby5zdHJpcFVua25vd24mJighMD09PW8uc3RyaXBVbmtub3dufHwhIW8uc3RyaXBVbmtub3duLm9iamVjdHMpO2Zvcihjb25zdCBzIG9mIHIpZT8oZGVsZXRlIHRbc10sci5kZWxldGUocykpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHRbc10mJnIuZGVsZXRlKHMpfWlmKCFsLmRlZmF1bHQoZS5fZmxhZ3MudW5rbm93bixvLmFsbG93VW5rbm93bikpZm9yKGNvbnN0IGEgb2Ygcil7Y29uc3Qgcj1uLmxvY2FsaXplKFsuLi5uLnBhdGgsYV0sW10pLGk9ZS4kX2NyZWF0ZUVycm9yKFwib2JqZWN0LnVua25vd25cIix0W2FdLHtjaGlsZDphfSxyLG8se2ZsYWdzOiExfSk7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczppfTtzLnB1c2goaSl9fSxoLkRlcGVuZGVuY3k9Y2xhc3N7Y29uc3RydWN0b3IoZSx0LHIscyl7dGhpcy5yZWw9ZSx0aGlzLmtleT10LHRoaXMucGVlcnM9cix0aGlzLnBhdGhzPXN9ZGVzY3JpYmUoKXtjb25zdCBlPXtyZWw6dGhpcy5yZWwscGVlcnM6dGhpcy5wYXRoc307cmV0dXJuIG51bGwhPT10aGlzLmtleSYmKGUua2V5PXRoaXMua2V5LmtleSksXCIuXCIhPT10aGlzLnBlZXJzWzBdLnNlcGFyYXRvciYmKGUub3B0aW9ucz17c2VwYXJhdG9yOnRoaXMucGVlcnNbMF0uc2VwYXJhdG9yfSksZX19LGguS2V5cz1jbGFzcyBleHRlbmRzIEFycmF5e2NvbmNhdChlKXtjb25zdCB0PXRoaXMuc2xpY2UoKSxyPW5ldyBNYXA7Zm9yKGxldCBlPTA7ZTx0Lmxlbmd0aDsrK2Upci5zZXQodFtlXS5rZXksZSk7Zm9yKGNvbnN0IHMgb2YgZSl7Y29uc3QgZT1zLmtleSxuPXIuZ2V0KGUpO3ZvaWQgMCE9PW4/dFtuXT17a2V5OmUsc2NoZW1hOnRbbl0uc2NoZW1hLmNvbmNhdChzLnNjaGVtYSl9OnQucHVzaChzKX1yZXR1cm4gdH19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDI0KSxuPXIoMjUpLG89e21pbkRvbWFpblNlZ21lbnRzOjIsbm9uQXNjaWlSeDovW15cXHgwMC1cXHg3Zl0vLGRvbWFpbkNvbnRyb2xSeDovW1xceDAwLVxceDIwQFxcOlxcL10vLHRsZFNlZ21lbnRSeDovXlthLXpBLVpdKD86W2EtekEtWjAtOVxcLV0qW2EtekEtWjAtOV0pPyQvLGRvbWFpblNlZ21lbnRSeDovXlthLXpBLVowLTldKD86W2EtekEtWjAtOVxcLV0qW2EtekEtWjAtOV0pPyQvLFVSTDpzLlVSTHx8VVJMfTt0LmFuYWx5emU9ZnVuY3Rpb24oZSx0PXt9KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0OiBkb21haW4gbXVzdCBiZSBhIHN0cmluZ1wiKTtpZighZSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX05PTl9FTVBUWV9TVFJJTkdcIik7aWYoZS5sZW5ndGg+MjU2KXJldHVybiBuLmNvZGUoXCJET01BSU5fVE9PX0xPTkdcIik7aWYoISFvLm5vbkFzY2lpUngudGVzdChlKSl7aWYoITE9PT10LmFsbG93VW5pY29kZSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfVU5JQ09ERV9DSEFSU1wiKTtlPWUubm9ybWFsaXplKFwiTkZDXCIpfWlmKG8uZG9tYWluQ29udHJvbFJ4LnRlc3QoZSkpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9JTlZBTElEX0NIQVJTXCIpO2U9by5wdW55Y29kZShlKTtjb25zdCByPXQubWluRG9tYWluU2VnbWVudHN8fG8ubWluRG9tYWluU2VnbWVudHMscz1lLnNwbGl0KFwiLlwiKTtpZihzLmxlbmd0aDxyKXJldHVybiBuLmNvZGUoXCJET01BSU5fU0VHTUVOVFNfQ09VTlRcIik7Y29uc3QgYT10LnRsZHM7aWYoYSl7Y29uc3QgZT1zW3MubGVuZ3RoLTFdLnRvTG93ZXJDYXNlKCk7aWYoYS5kZW55JiZhLmRlbnkuaGFzKGUpfHxhLmFsbG93JiYhYS5hbGxvdy5oYXMoZSkpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9GT1JCSURERU5fVExEU1wiKX1mb3IobGV0IGU9MDtlPHMubGVuZ3RoOysrZSl7Y29uc3QgdD1zW2VdO2lmKCF0Lmxlbmd0aClyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0VNUFRZX1NFR01FTlRcIik7aWYodC5sZW5ndGg+NjMpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9MT05HX1NFR01FTlRcIik7aWYoZTxzLmxlbmd0aC0xKXtpZighby5kb21haW5TZWdtZW50UngudGVzdCh0KSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfQ0hBUlNcIil9ZWxzZSBpZighby50bGRTZWdtZW50UngudGVzdCh0KSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfVExEU19DSEFSU1wiKX1yZXR1cm4gbnVsbH0sdC5pc1ZhbGlkPWZ1bmN0aW9uKGUscil7cmV0dXJuIXQuYW5hbHl6ZShlLHIpfSxvLnB1bnljb2RlPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gbmV3IG8uVVJMKFwiaHR0cDovL1wiLmNvbmNhdChlKSkuaG9zdH1jYXRjaCh0KXtyZXR1cm4gZX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuY29kZXM9e0VNUFRZX1NUUklORzpcIkFkZHJlc3MgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIixGT1JCSURERU5fVU5JQ09ERTpcIkFkZHJlc3MgY29udGFpbnMgZm9yYmlkZGVuIFVuaWNvZGUgY2hhcmFjdGVyc1wiLE1VTFRJUExFX0FUX0NIQVI6XCJBZGRyZXNzIGNhbm5vdCBjb250YWluIG1vcmUgdGhhbiBvbmUgQCBjaGFyYWN0ZXJcIixNSVNTSU5HX0FUX0NIQVI6XCJBZGRyZXNzIG11c3QgY29udGFpbiBvbmUgQCBjaGFyYWN0ZXJcIixFTVBUWV9MT0NBTDpcIkFkZHJlc3MgbG9jYWwgcGFydCBjYW5ub3QgYmUgZW1wdHlcIixBRERSRVNTX1RPT19MT05HOlwiQWRkcmVzcyB0b28gbG9uZ1wiLExPQ0FMX1RPT19MT05HOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IHRvbyBsb25nXCIsRU1QVFlfTE9DQUxfU0VHTUVOVDpcIkFkZHJlc3MgbG9jYWwgcGFydCBjb250YWlucyBlbXB0eSBkb3Qtc2VwYXJhdGVkIHNlZ21lbnRcIixJTlZBTElEX0xPQ0FMX0NIQVJTOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyXCIsRE9NQUlOX05PTl9FTVBUWV9TVFJJTkc6XCJEb21haW4gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIixET01BSU5fVE9PX0xPTkc6XCJEb21haW4gdG9vIGxvbmdcIixET01BSU5fSU5WQUxJRF9VTklDT0RFX0NIQVJTOlwiRG9tYWluIGNvbnRhaW5zIGZvcmJpZGRlbiBVbmljb2RlIGNoYXJhY3RlcnNcIixET01BSU5fSU5WQUxJRF9DSEFSUzpcIkRvbWFpbiBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlclwiLERPTUFJTl9JTlZBTElEX1RMRFNfQ0hBUlM6XCJEb21haW4gY29udGFpbnMgaW52YWxpZCB0bGQgY2hhcmFjdGVyXCIsRE9NQUlOX1NFR01FTlRTX0NPVU5UOlwiRG9tYWluIGxhY2tzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIG51bWJlciBvZiBzZWdtZW50c1wiLERPTUFJTl9GT1JCSURERU5fVExEUzpcIkRvbWFpbiB1c2VzIGZvcmJpZGRlbiBUTERcIixET01BSU5fRU1QVFlfU0VHTUVOVDpcIkRvbWFpbiBjb250YWlucyBlbXB0eSBkb3Qtc2VwYXJhdGVkIHNlZ21lbnRcIixET01BSU5fTE9OR19TRUdNRU5UOlwiRG9tYWluIGNvbnRhaW5zIGRvdC1zZXBhcmF0ZWQgc2VnbWVudCB0aGF0IGlzIHRvbyBsb25nXCJ9LHQuY29kZT1mdW5jdGlvbihlKXtyZXR1cm57Y29kZTplLGVycm9yOnQuY29kZXNbZV19fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjcpLG89e2dlbmVyYXRlOmZ1bmN0aW9uKCl7Y29uc3QgZT17fSx0PVwiIVxcXFwkJidcXFxcKFxcXFwpXFxcXCpcXFxcKyw7PVwiLHI9XCJcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWZcIit0K1wiOkBcIixzPVwiW1wiK3IrXCJdXCIsbj1cIig/OjB7MCwyfVxcXFxkfDA/WzEtOV1cXFxcZHwxXFxcXGRcXFxcZHwyWzAtNF1cXFxcZHwyNVswLTVdKVwiO2UuaXB2NGFkZHJlc3M9XCIoPzpcIituK1wiXFxcXC4pezN9XCIrbjtjb25zdCBvPVwiW1xcXFxkQS1GYS1mXXsxLDR9XCIsYT1cIig/OlwiK28rXCI6XCIrbytcInxcIitlLmlwdjRhZGRyZXNzK1wiKVwiLGk9XCIoPzpcIitvK1wiOil7Nn1cIithLGw9XCI6Oig/OlwiK28rXCI6KXs1fVwiK2EsYz1cIig/OlwiK28rXCIpPzo6KD86XCIrbytcIjopezR9XCIrYSx1PVwiKD86KD86XCIrbytcIjopezAsMX1cIitvK1wiKT86Oig/OlwiK28rXCI6KXszfVwiK2EsZj1cIig/Oig/OlwiK28rXCI6KXswLDJ9XCIrbytcIik/OjooPzpcIitvK1wiOil7Mn1cIithLG09XCIoPzooPzpcIitvK1wiOil7MCwzfVwiK28rXCIpPzo6XCIrbytcIjpcIithLGg9XCIoPzooPzpcIitvK1wiOil7MCw0fVwiK28rXCIpPzo6XCIrYTtlLmlwdjRDaWRyPVwiKD86XFxcXGR8WzEtMl1cXFxcZHwzWzAtMl0pXCIsZS5pcHY2Q2lkcj1cIig/OjB7MCwyfVxcXFxkfDA/WzEtOV1cXFxcZHwxWzAxXVxcXFxkfDEyWzAtOF0pXCIsZS5pcHY2YWRkcmVzcz1cIig/OlwiK2krXCJ8XCIrbCtcInxcIitjK1wifFwiK3UrXCJ8XCIrZitcInxcIittK1wifFwiK2grXCJ8KD86KD86W1xcXFxkQS1GYS1mXXsxLDR9Oil7MCw1fVtcXFxcZEEtRmEtZl17MSw0fSk/OjpbXFxcXGRBLUZhLWZdezEsNH18KD86KD86W1xcXFxkQS1GYS1mXXsxLDR9Oil7MCw2fVtcXFxcZEEtRmEtZl17MSw0fSk/OjopXCIsZS5pcHZGdXR1cmU9XCJ2W1xcXFxkQS1GYS1mXStcXFxcLltcXFxcdy1cXFxcLn5cIit0K1wiOl0rXCIsZS5zY2hlbWU9XCJbYS16QS1aXVthLXpBLVpcXFxcZCstXFxcXC5dKlwiLGUuc2NoZW1lUmVnZXg9bmV3IFJlZ0V4cChlLnNjaGVtZSk7Y29uc3QgZD1cIltcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWZcIit0K1wiOl0qXCIscD1cIig/OlwiKyhcIlxcXFxbKD86XCIrZS5pcHY2YWRkcmVzcytcInxcIitlLmlwdkZ1dHVyZStcIilcXFxcXVwiKStcInxcIitlLmlwdjRhZGRyZXNzK1wifFtcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9XXsxLDI1NX0pXCIsZz1cIig/OlwiK2QrXCJAKT9cIitwK1wiKD86OlxcXFxkKik/XCIseT1cIig/OlwiK2QrXCJAKT8oXCIrcCtcIikoPzo6XFxcXGQqKT9cIixiPXMrXCIqXCIsdj1zK1wiK1wiLF89XCIoPzpcXFxcL1wiK2IrXCIpKlwiLHc9XCJcXFxcLyg/OlwiK3YrXytcIik/XCIsJD12K18seD1cIltcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9QF0rXCIrXztyZXR1cm4gZS5oaWVyUGFydD1cIig/Oig/OlxcXFwvXFxcXC9cIitnK18rXCIpfFwiK3crXCJ8XCIrJCtcInwoPzpcXFxcL1xcXFwvXFxcXC9bXFxcXHctXFxcXC5+JVxcXFxkQS1GYS1mIVxcXFwkJidcXFxcKFxcXFwpXFxcXCpcXFxcKyw7PTpAXSooPzpcXFxcL1tcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9OkBdKikqKSlcIixlLmhpZXJQYXJ0Q2FwdHVyZT1cIig/Oig/OlxcXFwvXFxcXC9cIit5K18rXCIpfFwiK3crXCJ8XCIrJCtcIilcIixlLnJlbGF0aXZlUmVmPVwiKD86KD86XFxcXC9cXFxcL1wiK2crXytcIil8XCIrdytcInxcIit4K1wifClcIixlLnJlbGF0aXZlUmVmQ2FwdHVyZT1cIig/Oig/OlxcXFwvXFxcXC9cIit5K18rXCIpfFwiK3crXCJ8XCIreCtcInwpXCIsZS5xdWVyeT1cIltcIityK1wiXFxcXC9cXFxcP10qKD89I3wkKVwiLGUucXVlcnlXaXRoU3F1YXJlQnJhY2tldHM9XCJbXCIrcitcIlxcXFxbXFxcXF1cXFxcL1xcXFw/XSooPz0jfCQpXCIsZS5mcmFnbWVudD1cIltcIityK1wiXFxcXC9cXFxcP10qXCIsZX19O28ucmZjMzk4Nj1vLmdlbmVyYXRlKCksdC5pcD17djRDaWRyOm8ucmZjMzk4Ni5pcHY0Q2lkcix2NkNpZHI6by5yZmMzOTg2LmlwdjZDaWRyLGlwdjQ6by5yZmMzOTg2LmlwdjRhZGRyZXNzLGlwdjY6by5yZmMzOTg2LmlwdjZhZGRyZXNzLGlwdmZ1dHVyZTpvLnJmYzM5ODYuaXB2RnV0dXJlfSxvLmNyZWF0ZVJlZ2V4PWZ1bmN0aW9uKGUpe2NvbnN0IHQ9by5yZmMzOTg2LHI9XCIoPzpcXFxcP1wiKyhlLmFsbG93UXVlcnlTcXVhcmVCcmFja2V0cz90LnF1ZXJ5V2l0aFNxdWFyZUJyYWNrZXRzOnQucXVlcnkpK1wiKT8oPzojXCIrdC5mcmFnbWVudCtcIik/XCIsYT1lLmRvbWFpbj90LnJlbGF0aXZlUmVmQ2FwdHVyZTp0LnJlbGF0aXZlUmVmO2lmKGUucmVsYXRpdmVPbmx5KXJldHVybiBvLndyYXAoYStyKTtsZXQgaT1cIlwiO2lmKGUuc2NoZW1lKXtzKGUuc2NoZW1lIGluc3RhbmNlb2YgUmVnRXhwfHxcInN0cmluZ1wiPT10eXBlb2YgZS5zY2hlbWV8fEFycmF5LmlzQXJyYXkoZS5zY2hlbWUpLFwic2NoZW1lIG11c3QgYmUgYSBSZWdFeHAsIFN0cmluZywgb3IgQXJyYXlcIik7Y29uc3Qgcj1bXS5jb25jYXQoZS5zY2hlbWUpO3Moci5sZW5ndGg+PTEsXCJzY2hlbWUgbXVzdCBoYXZlIGF0IGxlYXN0IDEgc2NoZW1lIHNwZWNpZmllZFwiKTtjb25zdCBvPVtdO2ZvcihsZXQgZT0wO2U8ci5sZW5ndGg7KytlKXtjb25zdCBhPXJbZV07cyhhIGluc3RhbmNlb2YgUmVnRXhwfHxcInN0cmluZ1wiPT10eXBlb2YgYSxcInNjaGVtZSBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSBSZWdFeHAgb3IgU3RyaW5nXCIpLGEgaW5zdGFuY2VvZiBSZWdFeHA/by5wdXNoKGEuc291cmNlLnRvU3RyaW5nKCkpOihzKHQuc2NoZW1lUmVnZXgudGVzdChhKSxcInNjaGVtZSBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSB2YWxpZCBzY2hlbWVcIiksby5wdXNoKG4oYSkpKX1pPW8uam9pbihcInxcIil9Y29uc3QgbD1cIig/OlwiKyhpP1wiKD86XCIraStcIilcIjp0LnNjaGVtZSkrXCI6XCIrKGUuZG9tYWluP3QuaGllclBhcnRDYXB0dXJlOnQuaGllclBhcnQpK1wiKVwiLGM9ZS5hbGxvd1JlbGF0aXZlP1wiKD86XCIrbCtcInxcIithK1wiKVwiOmw7cmV0dXJuIG8ud3JhcChjK3IsaSl9LG8ud3JhcD1mdW5jdGlvbihlLHQpe3JldHVybntyYXc6ZT1cIig/PS4pKD8haHR0cHM/Oi8kKVwiLmNvbmNhdChlKSxyZWdleDpuZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChlLFwiJFwiKSksc2NoZW1lOnR9fSxvLnVyaVJlZ2V4PW8uY3JlYXRlUmVnZXgoe30pLHQucmVnZXg9ZnVuY3Rpb24oZT17fSl7cmV0dXJuIGUuc2NoZW1lfHxlLmFsbG93UmVsYXRpdmV8fGUucmVsYXRpdmVPbmx5fHxlLmFsbG93UXVlcnlTcXVhcmVCcmFja2V0c3x8ZS5kb21haW4/by5jcmVhdGVSZWdleChlKTpvLnVyaVJlZ2V4fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9bXFxeXFwkXFwuXFwqXFwrXFwtXFw/XFw9XFwhXFw6XFx8XFxcXFxcL1xcKFxcKVxcW1xcXVxce1xcfVxcLF0vZyxcIlxcXFwkJlwiKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oLi4uZSl7dHJ5e3JldHVybiBKU09OLnN0cmluZ2lmeS5hcHBseShudWxsLGUpfWNhdGNoKGUpe3JldHVyblwiW0Nhbm5vdCBkaXNwbGF5IG9iamVjdDogXCIrZS5tZXNzYWdlK1wiXVwifX19LGZ1bmN0aW9uKGUpe2UuZXhwb3J0cz1KU09OLnBhcnNlKCd7XCJ2ZXJzaW9uXCI6XCIxNy4xLjFcIn0nKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVyblwiXCI7bGV0IHQ9XCJcIjtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lLmNoYXJDb2RlQXQocik7cy5pc1NhZmUobik/dCs9ZVtyXTp0Kz1zLmVzY2FwZUh0bWxDaGFyKG4pfXJldHVybiB0fSxzLmVzY2FwZUh0bWxDaGFyPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9cy5uYW1lZEh0bWxbZV07aWYodm9pZCAwIT09dClyZXR1cm4gdDtpZihlPj0yNTYpcmV0dXJuXCImI1wiK2UrXCI7XCI7Y29uc3Qgcj1lLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLFwiMFwiKTtyZXR1cm5cIiYjeFwiLmNvbmNhdChyLFwiO1wiKX0scy5pc1NhZmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PXMuc2FmZUNoYXJDb2Rlc1tlXX0scy5uYW1lZEh0bWw9ezM4OlwiJmFtcDtcIiw2MDpcIiZsdDtcIiw2MjpcIiZndDtcIiwzNDpcIiZxdW90O1wiLDE2MDpcIiZuYnNwO1wiLDE2MjpcIiZjZW50O1wiLDE2MzpcIiZwb3VuZDtcIiwxNjQ6XCImY3VycmVuO1wiLDE2OTpcIiZjb3B5O1wiLDE3NDpcIiZyZWc7XCJ9LHMuc2FmZUNoYXJDb2Rlcz1mdW5jdGlvbigpe2NvbnN0IGU9e307Zm9yKGxldCB0PTMyO3Q8MTIzOysrdCkodD49OTd8fHQ+PTY1JiZ0PD05MHx8dD49NDgmJnQ8PTU3fHwzMj09PXR8fDQ2PT09dHx8NDQ9PT10fHw0NT09PXR8fDU4PT09dHx8OTU9PT10KSYmKGVbdF09bnVsbCk7cmV0dXJuIGV9KCl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXtvcGVyYXRvcnM6W1wiIVwiLFwiXlwiLFwiKlwiLFwiL1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiPFwiLFwiPD1cIixcIj5cIixcIj49XCIsXCI9PVwiLFwiIT1cIixcIiYmXCIsXCJ8fFwiLFwiPz9cIl0sb3BlcmF0b3JDaGFyYWN0ZXJzOltcIiFcIixcIl5cIixcIipcIixcIi9cIixcIiVcIixcIitcIixcIi1cIixcIjxcIixcIj1cIixcIj5cIixcIiZcIixcInxcIixcIj9cIl0sb3BlcmF0b3JzT3JkZXI6W1tcIl5cIl0sW1wiKlwiLFwiL1wiLFwiJVwiXSxbXCIrXCIsXCItXCJdLFtcIjxcIixcIjw9XCIsXCI+XCIsXCI+PVwiXSxbXCI9PVwiLFwiIT1cIl0sW1wiJiZcIl0sW1wifHxcIixcIj8/XCJdXSxvcGVyYXRvcnNQcmVmaXg6W1wiIVwiLFwiblwiXSxsaXRlcmFsczp7J1wiJzonXCInLFwiYFwiOlwiYFwiLFwiJ1wiOlwiJ1wiLFwiW1wiOlwiXVwifSxudW1iZXJSeDovXig/OlswLTldKlxcLj9bMC05XSopezF9JC8sdG9rZW5SeDovXltcXHdcXCRcXCNcXC5cXEBcXDpcXHtcXH1dKyQvLHN5bWJvbDpTeW1ib2woXCJmb3JtdWxhXCIpLHNldHRpbmdzOlN5bWJvbChcInNldHRpbmdzXCIpfTt0LlBhcnNlcj1jbGFzc3tjb25zdHJ1Y3RvcihlLHQ9e30pe2lmKCF0W3Muc2V0dGluZ3NdJiZ0LmNvbnN0YW50cylmb3IoY29uc3QgZSBpbiB0LmNvbnN0YW50cyl7Y29uc3Qgcj10LmNvbnN0YW50c1tlXTtpZihudWxsIT09ciYmIVtcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCJdLmluY2x1ZGVzKHR5cGVvZiByKSl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnN0YW50IFwiLmNvbmNhdChlLFwiIGNvbnRhaW5zIGludmFsaWQgXCIpLmNvbmNhdCh0eXBlb2YgcixcIiB2YWx1ZSB0eXBlXCIpKX10aGlzLnNldHRpbmdzPXRbcy5zZXR0aW5nc10/dDpPYmplY3QuYXNzaWduKHtbcy5zZXR0aW5nc106ITAsY29uc3RhbnRzOnt9LGZ1bmN0aW9uczp7fX0sdCksdGhpcy5zaW5nbGU9bnVsbCx0aGlzLl9wYXJ0cz1udWxsLHRoaXMuX3BhcnNlKGUpfV9wYXJzZShlKXtsZXQgcj1bXSxuPVwiXCIsbz0wLGE9ITE7Y29uc3QgaT1lPT57aWYobyl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpc1wiKTtjb25zdCBpPXIubGVuZ3RoP3Jbci5sZW5ndGgtMV06bnVsbDtpZihhfHxufHxlKXtpZihpJiZcInJlZmVyZW5jZVwiPT09aS50eXBlJiZcIilcIj09PWUpcmV0dXJuIGkudHlwZT1cImZ1bmN0aW9uXCIsaS52YWx1ZT10aGlzLl9zdWJGb3JtdWxhKG4saS52YWx1ZSksdm9pZChuPVwiXCIpO2lmKFwiKVwiPT09ZSl7Y29uc3QgZT1uZXcgdC5QYXJzZXIobix0aGlzLnNldHRpbmdzKTtyLnB1c2goe3R5cGU6XCJzZWdtZW50XCIsdmFsdWU6ZX0pfWVsc2UgaWYoYSl7aWYoXCJdXCI9PT1hKXJldHVybiByLnB1c2goe3R5cGU6XCJyZWZlcmVuY2VcIix2YWx1ZTpufSksdm9pZChuPVwiXCIpO3IucHVzaCh7dHlwZTpcImxpdGVyYWxcIix2YWx1ZTpufSl9ZWxzZSBpZihzLm9wZXJhdG9yQ2hhcmFjdGVycy5pbmNsdWRlcyhuKSlpJiZcIm9wZXJhdG9yXCI9PT1pLnR5cGUmJnMub3BlcmF0b3JzLmluY2x1ZGVzKGkudmFsdWUrbik/aS52YWx1ZSs9bjpyLnB1c2goe3R5cGU6XCJvcGVyYXRvclwiLHZhbHVlOm59KTtlbHNlIGlmKG4ubWF0Y2gocy5udW1iZXJSeCkpci5wdXNoKHt0eXBlOlwiY29uc3RhbnRcIix2YWx1ZTpwYXJzZUZsb2F0KG4pfSk7ZWxzZSBpZih2b2lkIDAhPT10aGlzLnNldHRpbmdzLmNvbnN0YW50c1tuXSlyLnB1c2goe3R5cGU6XCJjb25zdGFudFwiLHZhbHVlOnRoaXMuc2V0dGluZ3MuY29uc3RhbnRzW25dfSk7ZWxzZXtpZighbi5tYXRjaChzLnRva2VuUngpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCB0b2tlbjogXCIuY29uY2F0KG4pKTtyLnB1c2goe3R5cGU6XCJyZWZlcmVuY2VcIix2YWx1ZTpufSl9bj1cIlwifX07Zm9yKGNvbnN0IHQgb2YgZSlhP3Q9PT1hPyhpKCksYT0hMSk6bis9dDpvP1wiKFwiPT09dD8obis9dCwrK28pOlwiKVwiPT09dD8oLS1vLG8/bis9dDppKHQpKTpuKz10OnQgaW4gcy5saXRlcmFscz9hPXMubGl0ZXJhbHNbdF06XCIoXCI9PT10PyhpKCksKytvKTpzLm9wZXJhdG9yQ2hhcmFjdGVycy5pbmNsdWRlcyh0KT8oaSgpLG49dCxpKCkpOlwiIFwiIT09dD9uKz10OmkoKTtpKCkscj1yLm1hcCgoZSx0KT0+XCJvcGVyYXRvclwiIT09ZS50eXBlfHxcIi1cIiE9PWUudmFsdWV8fHQmJlwib3BlcmF0b3JcIiE9PXJbdC0xXS50eXBlP2U6e3R5cGU6XCJvcGVyYXRvclwiLHZhbHVlOlwiblwifSk7bGV0IGw9ITE7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoXCJvcGVyYXRvclwiPT09ZS50eXBlKXtpZihzLm9wZXJhdG9yc1ByZWZpeC5pbmNsdWRlcyhlLnZhbHVlKSljb250aW51ZTtpZighbCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGFuIG9wZXJhdG9yIGluIGludmFsaWQgcG9zaXRpb25cIik7aWYoIXMub3BlcmF0b3JzLmluY2x1ZGVzKGUudmFsdWUpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgYW4gdW5rbm93biBvcGVyYXRvciBcIi5jb25jYXQoZS52YWx1ZSkpfWVsc2UgaWYobCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIG1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3JcIik7bD0hbH1pZighbCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGludmFsaWQgdHJhaWxpbmcgb3BlcmF0b3JcIik7MT09PXIubGVuZ3RoJiZbXCJyZWZlcmVuY2VcIixcImxpdGVyYWxcIixcImNvbnN0YW50XCJdLmluY2x1ZGVzKHJbMF0udHlwZSkmJih0aGlzLnNpbmdsZT17dHlwZTpcInJlZmVyZW5jZVwiPT09clswXS50eXBlP1wicmVmZXJlbmNlXCI6XCJ2YWx1ZVwiLHZhbHVlOnJbMF0udmFsdWV9KSx0aGlzLl9wYXJ0cz1yLm1hcChlPT57aWYoXCJvcGVyYXRvclwiPT09ZS50eXBlKXJldHVybiBzLm9wZXJhdG9yc1ByZWZpeC5pbmNsdWRlcyhlLnZhbHVlKT9lOmUudmFsdWU7aWYoXCJyZWZlcmVuY2VcIiE9PWUudHlwZSlyZXR1cm4gZS52YWx1ZTtpZih0aGlzLnNldHRpbmdzLnRva2VuUngmJiF0aGlzLnNldHRpbmdzLnRva2VuUngudGVzdChlLnZhbHVlKSl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGludmFsaWQgcmVmZXJlbmNlIFwiLmNvbmNhdChlLnZhbHVlKSk7cmV0dXJuIHRoaXMuc2V0dGluZ3MucmVmZXJlbmNlP3RoaXMuc2V0dGluZ3MucmVmZXJlbmNlKGUudmFsdWUpOnMucmVmZXJlbmNlKGUudmFsdWUpfSl9X3N1YkZvcm11bGEoZSxyKXtjb25zdCBuPXRoaXMuc2V0dGluZ3MuZnVuY3Rpb25zW3JdO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG4pdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyB1bmtub3duIGZ1bmN0aW9uIFwiLmNvbmNhdChyKSk7bGV0IG89W107aWYoZSl7bGV0IHQ9XCJcIixuPTAsYT0hMTtjb25zdCBpPSgpPT57aWYoIXQpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBmdW5jdGlvbiBcIi5jb25jYXQocixcIiB3aXRoIGludmFsaWQgYXJndW1lbnRzIFwiKS5jb25jYXQoZSkpO28ucHVzaCh0KSx0PVwiXCJ9O2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBvPWVbcl07YT8odCs9byxvPT09YSYmKGE9ITEpKTpvIGluIHMubGl0ZXJhbHMmJiFuPyh0Kz1vLGE9cy5saXRlcmFsc1tvXSk6XCIsXCIhPT1vfHxuPyh0Kz1vLFwiKFwiPT09bz8rK246XCIpXCI9PT1vJiYtLW4pOmkoKX1pKCl9cmV0dXJuIG89by5tYXAoZT0+bmV3IHQuUGFyc2VyKGUsdGhpcy5zZXR0aW5ncykpLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9W107Zm9yKGNvbnN0IHIgb2Ygbyl0LnB1c2goci5ldmFsdWF0ZShlKSk7cmV0dXJuIG4uY2FsbChlLC4uLnQpfX1ldmFsdWF0ZShlKXtjb25zdCB0PXRoaXMuX3BhcnRzLnNsaWNlKCk7Zm9yKGxldCByPXQubGVuZ3RoLTI7cj49MDstLXIpe2NvbnN0IG49dFtyXTtpZihuJiZcIm9wZXJhdG9yXCI9PT1uLnR5cGUpe2NvbnN0IG89dFtyKzFdO3Quc3BsaWNlKHIrMSwxKTtjb25zdCBhPXMuZXZhbHVhdGUobyxlKTt0W3JdPXMuc2luZ2xlKG4udmFsdWUsYSl9fXJldHVybiBzLm9wZXJhdG9yc09yZGVyLmZvckVhY2gocj0+e2ZvcihsZXQgbj0xO248dC5sZW5ndGgtMTspaWYoci5pbmNsdWRlcyh0W25dKSl7Y29uc3Qgcj10W25dLG89cy5ldmFsdWF0ZSh0W24tMV0sZSksYT1zLmV2YWx1YXRlKHRbbisxXSxlKTt0LnNwbGljZShuLDIpO2NvbnN0IGk9cy5jYWxjdWxhdGUocixvLGEpO3Rbbi0xXT0wPT09aT8wOml9ZWxzZSBuKz0yfSkscy5ldmFsdWF0ZSh0WzBdLGUpfX0sdC5QYXJzZXIucHJvdG90eXBlW3Muc3ltYm9sXT0hMCxzLnJlZmVyZW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQmJnZvaWQgMCE9PXRbZV0/dFtlXTpudWxsfX0scy5ldmFsdWF0ZT1mdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT09ZT9udWxsOlwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZSh0KTplW3Muc3ltYm9sXT9lLmV2YWx1YXRlKHQpOmV9LHMuc2luZ2xlPWZ1bmN0aW9uKGUsdCl7aWYoXCIhXCI9PT1lKXJldHVybiF0O2NvbnN0IHI9LXQ7cmV0dXJuIDA9PT1yPzA6cn0scy5jYWxjdWxhdGU9ZnVuY3Rpb24oZSx0LHIpe2lmKFwiPz9cIj09PWUpcmV0dXJuIHMuZXhpc3RzKHQpP3Q6cjtpZihcInN0cmluZ1wiPT10eXBlb2YgdHx8XCJzdHJpbmdcIj09dHlwZW9mIHIpe2lmKFwiK1wiPT09ZSlyZXR1cm4odD1zLmV4aXN0cyh0KT90OlwiXCIpKyhyPXMuZXhpc3RzKHIpP3I6XCJcIil9ZWxzZSBzd2l0Y2goZSl7Y2FzZVwiXlwiOnJldHVybiBNYXRoLnBvdyh0LHIpO2Nhc2VcIipcIjpyZXR1cm4gdCpyO2Nhc2VcIi9cIjpyZXR1cm4gdC9yO2Nhc2VcIiVcIjpyZXR1cm4gdCVyO2Nhc2VcIitcIjpyZXR1cm4gdCtyO2Nhc2VcIi1cIjpyZXR1cm4gdC1yfXN3aXRjaChlKXtjYXNlXCI8XCI6cmV0dXJuIHQ8cjtjYXNlXCI8PVwiOnJldHVybiB0PD1yO2Nhc2VcIj5cIjpyZXR1cm4gdD5yO2Nhc2VcIj49XCI6cmV0dXJuIHQ+PXI7Y2FzZVwiPT1cIjpyZXR1cm4gdD09PXI7Y2FzZVwiIT1cIjpyZXR1cm4gdCE9PXI7Y2FzZVwiJiZcIjpyZXR1cm4gdCYmcjtjYXNlXCJ8fFwiOnJldHVybiB0fHxyfXJldHVybiBudWxsfSxzLmV4aXN0cz1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDgpLGk9cig0KSxsPXIoNSksYz17fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJhbHRlcm5hdGl2ZXNcIixmbGFnczp7bWF0Y2g6e2RlZmF1bHQ6XCJhbnlcIn19LHRlcm1zOnttYXRjaGVzOntpbml0OltdLHJlZ2lzdGVyOmwudG9TaWJsaW5nfX0sYXJnczooZSwuLi50KT0+MT09PXQubGVuZ3RoJiZBcnJheS5pc0FycmF5KHRbMF0pP2UudHJ5KC4uLnRbMF0pOmUudHJ5KC4uLnQpLHZhbGlkYXRlKGUsdCl7Y29uc3R7c2NoZW1hOnIsZXJyb3I6cyxzdGF0ZTpuLHByZWZzOm99PXQ7aWYoci5fZmxhZ3MubWF0Y2gpe2xldCB0LGE9MDtmb3IobGV0IHM9MDtzPHIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aDsrK3Mpe2NvbnN0IGk9ci4kX3Rlcm1zLm1hdGNoZXNbc10sbD1uLm5lc3QoaS5zY2hlbWEsXCJtYXRjaC5cIi5jb25jYXQocykpO2wuc25hcHNob3QoKTtjb25zdCBjPWkuc2NoZW1hLiRfdmFsaWRhdGUoZSxsLG8pO2MuZXJyb3JzP2wucmVzdG9yZSgpOigrK2EsdD1jLnZhbHVlKX1yZXR1cm4gYT9cIm9uZVwiPT09ci5fZmxhZ3MubWF0Y2g/MT09PWE/e3ZhbHVlOnR9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5vbmVcIil9OmE9PT1yLiRfdGVybXMubWF0Y2hlcy5sZW5ndGg/e3ZhbHVlOmV9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5hbGxcIil9OntlcnJvcnM6cyhcImFsdGVybmF0aXZlcy5hbnlcIil9fWNvbnN0IGE9W107Zm9yKGxldCB0PTA7dDxyLiRfdGVybXMubWF0Y2hlcy5sZW5ndGg7Kyt0KXtjb25zdCBzPXIuJF90ZXJtcy5tYXRjaGVzW3RdO2lmKHMuc2NoZW1hKXtjb25zdCByPW4ubmVzdChzLnNjaGVtYSxcIm1hdGNoLlwiLmNvbmNhdCh0KSk7ci5zbmFwc2hvdCgpO2NvbnN0IGk9cy5zY2hlbWEuJF92YWxpZGF0ZShlLHIsbyk7aWYoIWkuZXJyb3JzKXJldHVybiBpO3IucmVzdG9yZSgpLGEucHVzaCh7c2NoZW1hOnMuc2NoZW1hLHJlcG9ydHM6aS5lcnJvcnN9KTtjb250aW51ZX1jb25zdCBpPXMucmVmP3MucmVmLnJlc29sdmUoZSxuLG8pOmUsbD1zLmlzP1tzXTpzLnN3aXRjaDtmb3IobGV0IHI9MDtyPGwubGVuZ3RoOysrcil7Y29uc3QgYT1sW3JdLHtpczpjLHRoZW46dSxvdGhlcndpc2U6Zn09YSxtPVwibWF0Y2guXCIuY29uY2F0KHQpLmNvbmNhdChzLnN3aXRjaD9cIi5cIityOlwiXCIpO2lmKGMuJF9tYXRjaChpLG4ubmVzdChjLFwiXCIuY29uY2F0KG0sXCIuaXNcIikpLG8pKXtpZih1KXJldHVybiB1LiRfdmFsaWRhdGUoZSxuLm5lc3QodSxcIlwiLmNvbmNhdChtLFwiLnRoZW5cIikpLG8pfWVsc2UgaWYoZilyZXR1cm4gZi4kX3ZhbGlkYXRlKGUsbi5uZXN0KGYsXCJcIi5jb25jYXQobSxcIi5vdGhlcndpc2VcIikpLG8pfX1yZXR1cm4gYy5lcnJvcnMoYSx0KX0scnVsZXM6e2NvbmRpdGlvbmFsOnttZXRob2QoZSx0KXtzKCF0aGlzLl9mbGFncy5fZW5kZWRTd2l0Y2gsXCJVbnJlYWNoYWJsZSBjb25kaXRpb25cIikscyghdGhpcy5fZmxhZ3MubWF0Y2gsXCJDYW5ub3QgY29tYmluZSBtYXRjaCBtb2RlXCIsdGhpcy5fZmxhZ3MubWF0Y2gsXCJ3aXRoIGNvbmRpdGlvbmFsIHJ1bGVcIikscyh2b2lkIDA9PT10LmJyZWFrLFwiQ2Fubm90IHVzZSBicmVhayBvcHRpb24gd2l0aCBhbHRlcm5hdGl2ZXMgY29uZGl0aW9uYWxcIik7Y29uc3Qgcj10aGlzLmNsb25lKCksbj1hLndoZW4ocixlLHQpLG89bi5pcz9bbl06bi5zd2l0Y2g7Zm9yKGNvbnN0IGUgb2YgbylpZihlLnRoZW4mJmUub3RoZXJ3aXNlKXtyLiRfc2V0RmxhZyhcIl9lbmRlZFN3aXRjaFwiLCEwLHtjbG9uZTohMX0pO2JyZWFrfXJldHVybiByLiRfdGVybXMubWF0Y2hlcy5wdXNoKG4pLHIuJF9tdXRhdGVSZWJ1aWxkKCl9fSxtYXRjaDp7bWV0aG9kKGUpe2lmKHMoW1wiYW55XCIsXCJvbmVcIixcImFsbFwiXS5pbmNsdWRlcyhlKSxcIkludmFsaWQgYWx0ZXJuYXRpdmVzIG1hdGNoIG1vZGVcIixlKSxcImFueVwiIT09ZSlmb3IoY29uc3QgdCBvZiB0aGlzLiRfdGVybXMubWF0Y2hlcylzKHQuc2NoZW1hLFwiQ2Fubm90IGNvbWJpbmUgbWF0Y2ggbW9kZVwiLGUsXCJ3aXRoIGNvbmRpdGlvbmFsIHJ1bGVzXCIpO3JldHVybiB0aGlzLiRfc2V0RmxhZyhcIm1hdGNoXCIsZSl9fSx0cnk6e21ldGhvZCguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyBhbHRlcm5hdGl2ZSBzY2hlbWFzXCIpLG8udmVyaWZ5RmxhdChlLFwidHJ5XCIpLHMoIXRoaXMuX2ZsYWdzLl9lbmRlZFN3aXRjaCxcIlVucmVhY2hhYmxlIGNvbmRpdGlvblwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtmb3IoY29uc3QgciBvZiBlKXQuJF90ZXJtcy5tYXRjaGVzLnB1c2goe3NjaGVtYTp0LiRfY29tcGlsZShyKX0pO3JldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfX19LG92ZXJyaWRlczp7bGFiZWwoZSl7cmV0dXJuIHRoaXMuJF9zdXBlci5sYWJlbChlKS4kX21vZGlmeSh7ZWFjaDoodCxyKT0+XCJpc1wiIT09ci5wYXRoWzBdP3QubGFiZWwoZSk6dm9pZCAwLHJlZjohMX0pfX0scmVidWlsZChlKXtlLiRfbW9kaWZ5KHtlYWNoOnQ9PntvLmlzU2NoZW1hKHQpJiZcImFycmF5XCI9PT10LnR5cGUmJmUuJF9zZXRGbGFnKFwiX2FycmF5SXRlbXNcIiwhMCx7Y2xvbmU6ITF9KX19KX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5tYXRjaGVzKWZvcihjb25zdCByIG9mIHQubWF0Y2hlcyl7Y29uc3R7c2NoZW1hOnQscmVmOnMsaXM6bixub3Q6byx0aGVuOmEsb3RoZXJ3aXNlOml9PXI7ZT10P2UudHJ5KHQpOnM/ZS5jb25kaXRpb25hbChzLHtpczpuLHRoZW46YSxub3Q6byxvdGhlcndpc2U6aSxzd2l0Y2g6ci5zd2l0Y2h9KTplLmNvbmRpdGlvbmFsKG4se3RoZW46YSxvdGhlcndpc2U6aX0pfXJldHVybiBlfX0sbWVzc2FnZXM6e1wiYWx0ZXJuYXRpdmVzLmFsbFwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBtYXRjaCBhbGwgb2YgdGhlIHJlcXVpcmVkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMuYW55XCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYWx0ZXJuYXRpdmVzLm1hdGNoXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYWx0ZXJuYXRpdmVzLm9uZVwiOlwie3sjbGFiZWx9fSBtYXRjaGVzIG1vcmUgdGhhbiBvbmUgYWxsb3dlZCB0eXBlXCIsXCJhbHRlcm5hdGl2ZXMudHlwZXNcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBvbmUgb2Yge3sjdHlwZXN9fVwifX0pLGMuZXJyb3JzPWZ1bmN0aW9uKGUse2Vycm9yOnQsc3RhdGU6cn0pe2lmKCFlLmxlbmd0aClyZXR1cm57ZXJyb3JzOnQoXCJhbHRlcm5hdGl2ZXMuYW55XCIpfTtpZigxPT09ZS5sZW5ndGgpcmV0dXJue2Vycm9yczplWzBdLnJlcG9ydHN9O2NvbnN0IHM9bmV3IFNldCxuPVtdO2Zvcihjb25zdHtyZXBvcnRzOm8sc2NoZW1hOmF9b2YgZSl7aWYoby5sZW5ndGg+MSlyZXR1cm4gYy51bm1hdGNoZWQoZSx0KTtjb25zdCBsPW9bMF07aWYobCBpbnN0YW5jZW9mIGkuUmVwb3J0PT0hMSlyZXR1cm4gYy51bm1hdGNoZWQoZSx0KTtpZihsLnN0YXRlLnBhdGgubGVuZ3RoIT09ci5wYXRoLmxlbmd0aCl7bi5wdXNoKHt0eXBlOmEudHlwZSxyZXBvcnQ6bH0pO2NvbnRpbnVlfWlmKFwiYW55Lm9ubHlcIj09PWwuY29kZSl7Zm9yKGNvbnN0IGUgb2YgbC5sb2NhbC52YWxpZHMpcy5hZGQoZSk7Y29udGludWV9Y29uc3RbdSxmXT1sLmNvZGUuc3BsaXQoXCIuXCIpO1wiYmFzZVwiPT09Zj9zLmFkZCh1KTpuLnB1c2goe3R5cGU6YS50eXBlLHJlcG9ydDpsfSl9cmV0dXJuIG4ubGVuZ3RoPzE9PT1uLmxlbmd0aD97ZXJyb3JzOm5bMF0ucmVwb3J0fTpjLnVubWF0Y2hlZChlLHQpOntlcnJvcnM6dChcImFsdGVybmF0aXZlcy50eXBlc1wiLHt0eXBlczpbLi4uc119KX19LGMudW5tYXRjaGVkPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj1bXTtmb3IoY29uc3QgdCBvZiBlKXIucHVzaCguLi50LnJlcG9ydHMpO3JldHVybntlcnJvcnM6dChcImFsdGVybmF0aXZlcy5tYXRjaFwiLGkuZGV0YWlscyhyLHtvdmVycmlkZTohMX0pKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTApLGE9cigyMCksaT1yKDE1KSxsPXIoMSksYz1yKDgpLHU9cig0KSxmPXIoMTcpLG09cigxOCksaD1yKDkpLGQ9cigzNSkscD1yKDUpLGc9cigxOSkseT1yKDM2KSxiPXIoMjEpLHY9e0Jhc2U6Y2xhc3N7Y29uc3RydWN0b3IoZSl7dGhpcy50eXBlPWUsdGhpcy4kX3Jvb3Q9bnVsbCx0aGlzLl9kZWZpbml0aW9uPXt9LHRoaXMuX2lkcz1uZXcgZC5JZHMsdGhpcy5fcHJlZmVyZW5jZXM9bnVsbCx0aGlzLl9yZWZzPW5ldyBwLk1hbmFnZXIsdGhpcy5fY2FjaGU9bnVsbCx0aGlzLl92YWxpZHM9bnVsbCx0aGlzLl9pbnZhbGlkcz1udWxsLHRoaXMuX2ZsYWdzPXt9LHRoaXMuX3J1bGVzPVtdLHRoaXMuX3NpbmdsZVJ1bGVzPW5ldyBNYXAsdGhpcy4kX3Rlcm1zPXt9LHRoaXMuJF90ZW1wPXtydWxlc2V0Om51bGwsd2hlbnM6e319fWRlc2NyaWJlKCl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgbS5kZXNjcmliZSxcIk1hbmlmZXN0IGZ1bmN0aW9uYWxpdHkgZGlzYWJsZWRcIiksbS5kZXNjcmliZSh0aGlzKX1hbGxvdyguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJhbGxvd1wiKSx0aGlzLl92YWx1ZXMoZSxcIl92YWxpZHNcIil9YWx0ZXIoZSl7cyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJJbnZhbGlkIHRhcmdldHMgYXJndW1lbnRcIikscyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc2V0IGFsdGVyYXRpb25zIGluc2lkZSBhIHJ1bGVzZXRcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7dC4kX3Rlcm1zLmFsdGVyYXRpb25zPXQuJF90ZXJtcy5hbHRlcmF0aW9uc3x8W107Zm9yKGNvbnN0IHIgaW4gZSl7Y29uc3Qgbj1lW3JdO3MoXCJmdW5jdGlvblwiPT10eXBlb2YgbixcIkFsdGVyYXRpb24gYWRqdXN0ZXIgZm9yXCIscixcIm11c3QgYmUgYSBmdW5jdGlvblwiKSx0LiRfdGVybXMuYWx0ZXJhdGlvbnMucHVzaCh7dGFyZ2V0OnIsYWRqdXN0ZXI6bn0pfXJldHVybiB0LiRfdGVtcC5ydWxlc2V0PSExLHR9Y2FzdChlKXtyZXR1cm4gcyghMT09PWV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCB0byB2YWx1ZVwiKSxzKCExPT09ZXx8dGhpcy5fZGVmaW5pdGlvbi5jYXN0W2VdLFwiVHlwZVwiLHRoaXMudHlwZSxcImRvZXMgbm90IHN1cHBvcnQgY2FzdGluZyB0b1wiLGUpLHRoaXMuJF9zZXRGbGFnKFwiY2FzdFwiLCExPT09ZT92b2lkIDA6ZSl9ZGVmYXVsdChlLHQpe3JldHVybiB0aGlzLl9kZWZhdWx0KFwiZGVmYXVsdFwiLGUsdCl9ZGVzY3JpcHRpb24oZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfc2V0RmxhZyhcImRlc2NyaXB0aW9uXCIsZSl9ZW1wdHkoZSl7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHZvaWQgMCE9PWUmJihlPXQuJF9jb21waWxlKGUse292ZXJyaWRlOiExfSkpLHQuJF9zZXRGbGFnKFwiZW1wdHlcIixlLHtjbG9uZTohMX0pfWVycm9yKGUpe3JldHVybiBzKGUsXCJNaXNzaW5nIGVycm9yXCIpLHMoZSBpbnN0YW5jZW9mIEVycm9yfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiTXVzdCBwcm92aWRlIGEgdmFsaWQgRXJyb3Igb2JqZWN0IG9yIGEgZnVuY3Rpb25cIiksdGhpcy4kX3NldEZsYWcoXCJlcnJvclwiLGUpfWV4YW1wbGUoZSx0PXt9KXtyZXR1cm4gcyh2b2lkIDAhPT1lLFwiTWlzc2luZyBleGFtcGxlXCIpLGwuYXNzZXJ0T3B0aW9ucyh0LFtcIm92ZXJyaWRlXCJdKSx0aGlzLl9pbm5lcihcImV4YW1wbGVzXCIsZSx7c2luZ2xlOiEwLG92ZXJyaWRlOnQub3ZlcnJpZGV9KX1leHRlcm5hbChlLHQpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlJiYocyghdCxcIkNhbm5vdCBjb21iaW5lIG9wdGlvbnMgd2l0aCBkZXNjcmlwdGlvblwiKSx0PWUuZGVzY3JpcHRpb24sZT1lLm1ldGhvZCkscyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLFwiTWV0aG9kIG11c3QgYmUgYSBmdW5jdGlvblwiKSxzKHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LFwiRGVzY3JpcHRpb24gbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy5faW5uZXIoXCJleHRlcm5hbHNcIix7bWV0aG9kOmUsZGVzY3JpcHRpb246dH0se3NpbmdsZTohMH0pfWZhaWxvdmVyKGUsdCl7cmV0dXJuIHRoaXMuX2RlZmF1bHQoXCJmYWlsb3ZlclwiLGUsdCl9Zm9yYmlkZGVuKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJmb3JiaWRkZW5cIil9aWQoZSl7cmV0dXJuIGU/KHMoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJpZCBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSxzKC9eW15cXC5dKyQvLnRlc3QoZSksXCJpZCBjYW5ub3QgY29udGFpbiBwZXJpb2QgY2hhcmFjdGVyXCIpLHRoaXMuJF9zZXRGbGFnKFwiaWRcIixlKSk6dGhpcy4kX3NldEZsYWcoXCJpZFwiLHZvaWQgMCl9aW52YWxpZCguLi5lKXtyZXR1cm4gdGhpcy5fdmFsdWVzKGUsXCJfaW52YWxpZHNcIil9bGFiZWwoZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJMYWJlbCBuYW1lIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9zZXRGbGFnKFwibGFiZWxcIixlKX1tZXRhKGUpe3JldHVybiBzKHZvaWQgMCE9PWUsXCJNZXRhIGNhbm5vdCBiZSB1bmRlZmluZWRcIiksdGhpcy5faW5uZXIoXCJtZXRhc1wiLGUse3NpbmdsZTohMH0pfW5vdGUoLi4uZSl7cyhlLmxlbmd0aCxcIk1pc3Npbmcgbm90ZXNcIik7Zm9yKGNvbnN0IHQgb2YgZSlzKHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LFwiTm90ZXMgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nc1wiKTtyZXR1cm4gdGhpcy5faW5uZXIoXCJub3Rlc1wiLGUpfW9ubHkoZT0hMCl7cmV0dXJuIHMoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiSW52YWxpZCBtb2RlOlwiLGUpLHRoaXMuJF9zZXRGbGFnKFwib25seVwiLGUpfW9wdGlvbmFsKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJvcHRpb25hbFwiKX1wcmVmcyhlKXtzKGUsXCJNaXNzaW5nIHByZWZlcmVuY2VzXCIpLHModm9pZCAwPT09ZS5jb250ZXh0LFwiQ2Fubm90IG92ZXJyaWRlIGNvbnRleHRcIikscyh2b2lkIDA9PT1lLmV4dGVybmFscyxcIkNhbm5vdCBvdmVycmlkZSBleHRlcm5hbHNcIikscyh2b2lkIDA9PT1lLndhcm5pbmdzLFwiQ2Fubm90IG92ZXJyaWRlIHdhcm5pbmdzXCIpLHModm9pZCAwPT09ZS5kZWJ1ZyxcIkNhbm5vdCBvdmVycmlkZSBkZWJ1Z1wiKSxsLmNoZWNrUHJlZmVyZW5jZXMoZSk7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuX3ByZWZlcmVuY2VzPWwucHJlZmVyZW5jZXModC5fcHJlZmVyZW5jZXMsZSksdH1wcmVzZW5jZShlKXtyZXR1cm4gcyhbXCJvcHRpb25hbFwiLFwicmVxdWlyZWRcIixcImZvcmJpZGRlblwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gcHJlc2VuY2UgbW9kZVwiLGUpLHRoaXMuJF9zZXRGbGFnKFwicHJlc2VuY2VcIixlKX1yYXcoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVzdWx0XCIsZT9cInJhd1wiOnZvaWQgMCl9cmVzdWx0KGUpe3JldHVybiBzKFtcInJhd1wiLFwic3RyaXBcIl0uaW5jbHVkZXMoZSksXCJVbmtub3duIHJlc3VsdCBtb2RlXCIsZSksdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlKX1yZXF1aXJlZCgpe3JldHVybiB0aGlzLnByZXNlbmNlKFwicmVxdWlyZWRcIil9c3RyaWN0KGUpe2NvbnN0IHQ9dGhpcy5jbG9uZSgpLHI9dm9pZCAwIT09ZSYmIWU7cmV0dXJuIHQuX3ByZWZlcmVuY2VzPWwucHJlZmVyZW5jZXModC5fcHJlZmVyZW5jZXMse2NvbnZlcnQ6cn0pLHR9c3RyaXAoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVzdWx0XCIsZT9cInN0cmlwXCI6dm9pZCAwKX10YWcoLi4uZSl7cyhlLmxlbmd0aCxcIk1pc3NpbmcgdGFnc1wiKTtmb3IoY29uc3QgdCBvZiBlKXModCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJUYWdzIG11c3QgYmUgbm9uLWVtcHR5IHN0cmluZ3NcIik7cmV0dXJuIHRoaXMuX2lubmVyKFwidGFnc1wiLGUpfXVuaXQoZSl7cmV0dXJuIHMoZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJVbml0IG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy4kX3NldEZsYWcoXCJ1bml0XCIsZSl9dmFsaWQoLi4uZSl7bC52ZXJpZnlGbGF0KGUsXCJ2YWxpZFwiKTtjb25zdCB0PXRoaXMuYWxsb3coLi4uZSk7cmV0dXJuIHQuJF9zZXRGbGFnKFwib25seVwiLCEhdC5fdmFsaWRzLHtjbG9uZTohMX0pLHR9d2hlbihlLHQpe2NvbnN0IHI9dGhpcy5jbG9uZSgpO3IuJF90ZXJtcy53aGVuc3x8KHIuJF90ZXJtcy53aGVucz1bXSk7Y29uc3Qgbj1jLndoZW4ocixlLHQpO2lmKCFbXCJhbnlcIixcImxpbmtcIl0uaW5jbHVkZXMoci50eXBlKSl7Y29uc3QgZT1uLmlzP1tuXTpuLnN3aXRjaDtmb3IoY29uc3QgdCBvZiBlKXMoIXQudGhlbnx8XCJhbnlcIj09PXQudGhlbi50eXBlfHx0LnRoZW4udHlwZT09PXIudHlwZSxcIkNhbm5vdCBjb21iaW5lXCIsci50eXBlLFwid2l0aFwiLHQudGhlbiYmdC50aGVuLnR5cGUpLHMoIXQub3RoZXJ3aXNlfHxcImFueVwiPT09dC5vdGhlcndpc2UudHlwZXx8dC5vdGhlcndpc2UudHlwZT09PXIudHlwZSxcIkNhbm5vdCBjb21iaW5lXCIsci50eXBlLFwid2l0aFwiLHQub3RoZXJ3aXNlJiZ0Lm90aGVyd2lzZS50eXBlKX1yZXR1cm4gci4kX3Rlcm1zLndoZW5zLnB1c2gobiksci4kX211dGF0ZVJlYnVpbGQoKX1jYWNoZShlKXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgY2FjaGluZyBpbnNpZGUgYSBydWxlc2V0XCIpLHMoIXRoaXMuX2NhY2hlLFwiQ2Fubm90IG92ZXJyaWRlIHNjaGVtYSBjYWNoZVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fY2FjaGU9ZXx8aS5wcm92aWRlci5wcm92aXNpb24oKSx0LiRfdGVtcC5ydWxlc2V0PSExLHR9Y2xvbmUoKXtjb25zdCBlPU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpKTtyZXR1cm4gdGhpcy5fYXNzaWduKGUpfWNvbmNhdChlKXtzKGwuaXNTY2hlbWEoZSksXCJJbnZhbGlkIHNjaGVtYSBvYmplY3RcIikscyhcImFueVwiPT09dGhpcy50eXBlfHxcImFueVwiPT09ZS50eXBlfHxlLnR5cGU9PT10aGlzLnR5cGUsXCJDYW5ub3QgbWVyZ2UgdHlwZVwiLHRoaXMudHlwZSxcIndpdGggYW5vdGhlciB0eXBlOlwiLGUudHlwZSkscyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3QgY29uY2F0ZW5hdGUgb250byBhIHNjaGVtYSB3aXRoIG9wZW4gcnVsZXNldFwiKSxzKCFlLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBjb25jYXRlbmF0ZSBhIHNjaGVtYSB3aXRoIG9wZW4gcnVsZXNldFwiKTtsZXQgdD10aGlzLmNsb25lKCk7aWYoXCJhbnlcIj09PXRoaXMudHlwZSYmXCJhbnlcIiE9PWUudHlwZSl7Y29uc3Qgcj1lLmNsb25lKCk7Zm9yKGNvbnN0IGUgb2YgT2JqZWN0LmtleXModCkpXCJ0eXBlXCIhPT1lJiYocltlXT10W2VdKTt0PXJ9dC5faWRzLmNvbmNhdChlLl9pZHMpLHQuX3JlZnMucmVnaXN0ZXIoZSxwLnRvU2libGluZyksdC5fcHJlZmVyZW5jZXM9dC5fcHJlZmVyZW5jZXM/bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyxlLl9wcmVmZXJlbmNlcyk6ZS5fcHJlZmVyZW5jZXMsdC5fdmFsaWRzPWIubWVyZ2UodC5fdmFsaWRzLGUuX3ZhbGlkcyxlLl9pbnZhbGlkcyksdC5faW52YWxpZHM9Yi5tZXJnZSh0Ll9pbnZhbGlkcyxlLl9pbnZhbGlkcyxlLl92YWxpZHMpO2Zvcihjb25zdCByIG9mIGUuX3NpbmdsZVJ1bGVzLmtleXMoKSl0Ll9zaW5nbGVSdWxlcy5oYXMocikmJih0Ll9ydWxlcz10Ll9ydWxlcy5maWx0ZXIoZT0+ZS5rZWVwfHxlLm5hbWUhPT1yKSx0Ll9zaW5nbGVSdWxlcy5kZWxldGUocikpO2Zvcihjb25zdCByIG9mIGUuX3J1bGVzKWUuX2RlZmluaXRpb24ucnVsZXNbci5tZXRob2RdLm11bHRpfHx0Ll9zaW5nbGVSdWxlcy5zZXQoci5uYW1lLHIpLHQuX3J1bGVzLnB1c2gocik7aWYodC5fZmxhZ3MuZW1wdHkmJmUuX2ZsYWdzLmVtcHR5KXt0Ll9mbGFncy5lbXB0eT10Ll9mbGFncy5lbXB0eS5jb25jYXQoZS5fZmxhZ3MuZW1wdHkpO2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxlLl9mbGFncyk7ZGVsZXRlIHIuZW1wdHksYSh0Ll9mbGFncyxyKX1lbHNlIGlmKGUuX2ZsYWdzLmVtcHR5KXt0Ll9mbGFncy5lbXB0eT1lLl9mbGFncy5lbXB0eTtjb25zdCByPU9iamVjdC5hc3NpZ24oe30sZS5fZmxhZ3MpO2RlbGV0ZSByLmVtcHR5LGEodC5fZmxhZ3Mscil9ZWxzZSBhKHQuX2ZsYWdzLGUuX2ZsYWdzKTtmb3IoY29uc3QgciBpbiBlLiRfdGVybXMpe2NvbnN0IHM9ZS4kX3Rlcm1zW3JdO3M/dC4kX3Rlcm1zW3JdP3QuJF90ZXJtc1tyXT10LiRfdGVybXNbcl0uY29uY2F0KHMpOnQuJF90ZXJtc1tyXT1zLnNsaWNlKCk6dC4kX3Rlcm1zW3JdfHwodC4kX3Rlcm1zW3JdPXMpfXJldHVybiB0aGlzLiRfcm9vdC5fdHJhY2VyJiZ0aGlzLiRfcm9vdC5fdHJhY2VyLl9jb21iaW5lKHQsW3RoaXMsZV0pLHQuJF9tdXRhdGVSZWJ1aWxkKCl9ZXh0ZW5kKGUpe3JldHVybiBzKCFlLmJhc2UsXCJDYW5ub3QgZXh0ZW5kIHR5cGUgd2l0aCBhbm90aGVyIGJhc2VcIiksZi50eXBlKHRoaXMsZSl9ZXh0cmFjdChlKXtyZXR1cm4gZT1BcnJheS5pc0FycmF5KGUpP2U6ZS5zcGxpdChcIi5cIiksdGhpcy5faWRzLnJlYWNoKGUpfWZvcmsoZSx0KXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBmb3JrIGluc2lkZSBhIHJ1bGVzZXRcIik7bGV0IHI9dGhpcztmb3IobGV0IHMgb2ZbXS5jb25jYXQoZSkpcz1BcnJheS5pc0FycmF5KHMpP3M6cy5zcGxpdChcIi5cIikscj1yLl9pZHMuZm9yayhzLHQscik7cmV0dXJuIHIuJF90ZW1wLnJ1bGVzZXQ9ITEscn1ydWxlKGUpe2NvbnN0IHQ9dGhpcy5fZGVmaW5pdGlvbjtsLmFzc2VydE9wdGlvbnMoZSxPYmplY3Qua2V5cyh0Lm1vZGlmaWVycykpLHMoITEhPT10aGlzLiRfdGVtcC5ydWxlc2V0LFwiQ2Fubm90IGFwcGx5IHJ1bGVzIHRvIGVtcHR5IHJ1bGVzZXQgb3IgdGhlIGxhc3QgcnVsZSBhZGRlZCBkb2VzIG5vdCBzdXBwb3J0IHJ1bGUgcHJvcGVydGllc1wiKTtjb25zdCByPW51bGw9PT10aGlzLiRfdGVtcC5ydWxlc2V0P3RoaXMuX3J1bGVzLmxlbmd0aC0xOnRoaXMuJF90ZW1wLnJ1bGVzZXQ7cyhyPj0wJiZyPHRoaXMuX3J1bGVzLmxlbmd0aCxcIkNhbm5vdCBhcHBseSBydWxlcyB0byBlbXB0eSBydWxlc2V0XCIpO2NvbnN0IG89dGhpcy5jbG9uZSgpO2ZvcihsZXQgYT1yO2E8by5fcnVsZXMubGVuZ3RoOysrYSl7Y29uc3Qgcj1vLl9ydWxlc1thXSxpPW4ocik7Zm9yKGNvbnN0IG4gaW4gZSl0Lm1vZGlmaWVyc1tuXShpLGVbbl0pLHMoaS5uYW1lPT09ci5uYW1lLFwiQ2Fubm90IGNoYW5nZSBydWxlIG5hbWVcIik7by5fcnVsZXNbYV09aSxvLl9zaW5nbGVSdWxlcy5nZXQoaS5uYW1lKT09PXImJm8uX3NpbmdsZVJ1bGVzLnNldChpLm5hbWUsaSl9cmV0dXJuIG8uJF90ZW1wLnJ1bGVzZXQ9ITEsby4kX211dGF0ZVJlYnVpbGQoKX1nZXQgcnVsZXNldCgpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHN0YXJ0IGEgbmV3IHJ1bGVzZXQgd2l0aG91dCBjbG9zaW5nIHRoZSBwcmV2aW91cyBvbmVcIik7Y29uc3QgZT10aGlzLmNsb25lKCk7cmV0dXJuIGUuJF90ZW1wLnJ1bGVzZXQ9ZS5fcnVsZXMubGVuZ3RoLGV9Z2V0ICQoKXtyZXR1cm4gdGhpcy5ydWxlc2V0fXRhaWxvcihlKXtlPVtdLmNvbmNhdChlKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCB0YWlsb3IgaW5zaWRlIGEgcnVsZXNldFwiKTtsZXQgdD10aGlzO2lmKHRoaXMuJF90ZXJtcy5hbHRlcmF0aW9ucylmb3IoY29uc3R7dGFyZ2V0OnIsYWRqdXN0ZXI6bn1vZiB0aGlzLiRfdGVybXMuYWx0ZXJhdGlvbnMpZS5pbmNsdWRlcyhyKSYmKHQ9bih0KSxzKGwuaXNTY2hlbWEodCksXCJBbHRlcmF0aW9uIGFkanVzdGVyIGZvclwiLHIsXCJmYWlsZWQgdG8gcmV0dXJuIGEgc2NoZW1hIG9iamVjdFwiKSk7cmV0dXJuIHQ9dC4kX21vZGlmeSh7ZWFjaDp0PT50LnRhaWxvcihlKSxyZWY6ITF9KSx0LiRfdGVtcC5ydWxlc2V0PSExLHQuJF9tdXRhdGVSZWJ1aWxkKCl9dHJhY2VyKCl7cmV0dXJuIGcubG9jYXRpb24/Zy5sb2NhdGlvbih0aGlzKTp0aGlzfXZhbGlkYXRlKGUsdCl7cmV0dXJuIHkuZW50cnkoZSx0aGlzLHQpfXZhbGlkYXRlQXN5bmMoZSx0KXtyZXR1cm4geS5lbnRyeUFzeW5jKGUsdGhpcyx0KX0kX2FkZFJ1bGUoZSl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtuYW1lOmV9KSxzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCBvcHRpb25zXCIpLHMoZS5uYW1lJiZcInN0cmluZ1wiPT10eXBlb2YgZS5uYW1lLFwiSW52YWxpZCBydWxlIG5hbWVcIik7Zm9yKGNvbnN0IHQgaW4gZSlzKFwiX1wiIT09dFswXSxcIkNhbm5vdCBzZXQgcHJpdmF0ZSBydWxlIHByb3BlcnRpZXNcIik7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LGUpO3QuX3Jlc29sdmU9W10sdC5tZXRob2Q9dC5tZXRob2R8fHQubmFtZTtjb25zdCByPXRoaXMuX2RlZmluaXRpb24ucnVsZXNbdC5tZXRob2RdLG49dC5hcmdzO3MocixcIlVua25vd24gcnVsZVwiLHQubWV0aG9kKTtjb25zdCBvPXRoaXMuY2xvbmUoKTtpZihuKXtzKDE9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGh8fE9iamVjdC5rZXlzKG4pLmxlbmd0aD09PXRoaXMuX2RlZmluaXRpb24ucnVsZXNbdC5uYW1lXS5hcmdzLmxlbmd0aCxcIkludmFsaWQgcnVsZSBkZWZpbml0aW9uIGZvclwiLHRoaXMudHlwZSx0Lm5hbWUpO2Zvcihjb25zdCBlIGluIG4pe2xldCBhPW5bZV07aWYodm9pZCAwIT09YSl7aWYoci5hcmdzQnlOYW1lKXtjb25zdCBpPXIuYXJnc0J5TmFtZS5nZXQoZSk7aWYoaS5yZWYmJmwuaXNSZXNvbHZhYmxlKGEpKXQuX3Jlc29sdmUucHVzaChlKSxvLiRfbXV0YXRlUmVnaXN0ZXIoYSk7ZWxzZSBpZihpLm5vcm1hbGl6ZSYmKGE9aS5ub3JtYWxpemUoYSksbltlXT1hKSxpLmFzc2VydCl7Y29uc3QgdD1sLnZhbGlkYXRlQXJnKGEsZSxpKTtzKCF0LHQsXCJvciByZWZlcmVuY2VcIil9fW5bZV09YX1lbHNlIGRlbGV0ZSBuW2VdfX1yZXR1cm4gci5tdWx0aXx8KG8uX3J1bGVSZW1vdmUodC5uYW1lLHtjbG9uZTohMX0pLG8uX3NpbmdsZVJ1bGVzLnNldCh0Lm5hbWUsdCkpLCExPT09by4kX3RlbXAucnVsZXNldCYmKG8uJF90ZW1wLnJ1bGVzZXQ9bnVsbCksci5wcmlvcml0eT9vLl9ydWxlcy51bnNoaWZ0KHQpOm8uX3J1bGVzLnB1c2godCksb30kX2NvbXBpbGUoZSx0KXtyZXR1cm4gYy5zY2hlbWEodGhpcy4kX3Jvb3QsZSx0KX0kX2NyZWF0ZUVycm9yKGUsdCxyLHMsbixvPXt9KXtjb25zdCBhPSExIT09by5mbGFncz90aGlzLl9mbGFnczp7fSxpPW8ubWVzc2FnZXM/aC5tZXJnZSh0aGlzLl9kZWZpbml0aW9uLm1lc3NhZ2VzLG8ubWVzc2FnZXMpOnRoaXMuX2RlZmluaXRpb24ubWVzc2FnZXM7cmV0dXJuIG5ldyB1LlJlcG9ydChlLHQscixhLGkscyxuKX0kX2dldEZsYWcoZSl7cmV0dXJuIHRoaXMuX2ZsYWdzW2VdfSRfZ2V0UnVsZShlKXtyZXR1cm4gdGhpcy5fc2luZ2xlUnVsZXMuZ2V0KGUpfSRfbWFwTGFiZWxzKGUpe3JldHVybiBlPUFycmF5LmlzQXJyYXkoZSk/ZTplLnNwbGl0KFwiLlwiKSx0aGlzLl9pZHMubGFiZWxzKGUpfSRfbWF0Y2goZSx0LHIscyl7KHI9T2JqZWN0LmFzc2lnbih7fSxyKSkuYWJvcnRFYXJseT0hMCxyLl9leHRlcm5hbHM9ITEsdC5zbmFwc2hvdCgpO2NvbnN0IG49IXkudmFsaWRhdGUoZSx0aGlzLHQscixzKS5lcnJvcnM7cmV0dXJuIHQucmVzdG9yZSgpLG59JF9tb2RpZnkoZSl7cmV0dXJuIGwuYXNzZXJ0T3B0aW9ucyhlLFtcImVhY2hcIixcIm9uY2VcIixcInJlZlwiLFwic2NoZW1hXCJdKSxkLnNjaGVtYSh0aGlzLGUpfHx0aGlzfSRfbXV0YXRlUmVidWlsZCgpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IGFkZCB0aGlzIHJ1bGUgaW5zaWRlIGEgcnVsZXNldFwiKSx0aGlzLl9yZWZzLnJlc2V0KCksdGhpcy5faWRzLnJlc2V0KCk7cmV0dXJuIHRoaXMuJF9tb2RpZnkoe2VhY2g6KGUse3NvdXJjZTp0LG5hbWU6cixwYXRoOnMsa2V5Om59KT0+e2NvbnN0IG89dGhpcy5fZGVmaW5pdGlvblt0XVtyXSYmdGhpcy5fZGVmaW5pdGlvblt0XVtyXS5yZWdpc3RlcjshMSE9PW8mJnRoaXMuJF9tdXRhdGVSZWdpc3RlcihlLHtmYW1pbHk6byxrZXk6bn0pfX0pLHRoaXMuX2RlZmluaXRpb24ucmVidWlsZCYmdGhpcy5fZGVmaW5pdGlvbi5yZWJ1aWxkKHRoaXMpLHRoaXMuJF90ZW1wLnJ1bGVzZXQ9ITEsdGhpc30kX211dGF0ZVJlZ2lzdGVyKGUse2ZhbWlseTp0LGtleTpyfT17fSl7dGhpcy5fcmVmcy5yZWdpc3RlcihlLHQpLHRoaXMuX2lkcy5yZWdpc3RlcihlLHtrZXk6cn0pfSRfcHJvcGVydHkoZSl7cmV0dXJuIHRoaXMuX2RlZmluaXRpb24ucHJvcGVydGllc1tlXX0kX3JlYWNoKGUpe3JldHVybiB0aGlzLl9pZHMucmVhY2goZSl9JF9yb290UmVmZXJlbmNlcygpe3JldHVybiB0aGlzLl9yZWZzLnJvb3RzKCl9JF9zZXRGbGFnKGUsdCxyPXt9KXtzKFwiX1wiPT09ZVswXXx8IXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBmbGFnIGluc2lkZSBhIHJ1bGVzZXRcIik7Y29uc3Qgbj10aGlzLl9kZWZpbml0aW9uLmZsYWdzW2VdfHx7fTtpZihvKHQsbi5kZWZhdWx0KSYmKHQ9dm9pZCAwKSxvKHQsdGhpcy5fZmxhZ3NbZV0pKXJldHVybiB0aGlzO2NvbnN0IGE9ITEhPT1yLmNsb25lP3RoaXMuY2xvbmUoKTp0aGlzO3JldHVybiB2b2lkIDAhPT10PyhhLl9mbGFnc1tlXT10LGEuJF9tdXRhdGVSZWdpc3Rlcih0KSk6ZGVsZXRlIGEuX2ZsYWdzW2VdLFwiX1wiIT09ZVswXSYmKGEuJF90ZW1wLnJ1bGVzZXQ9ITEpLGF9JF92YWxpZGF0ZShlLHQscil7cmV0dXJuIHkudmFsaWRhdGUoZSx0aGlzLHQscil9X2Fzc2lnbihlKXtlLnR5cGU9dGhpcy50eXBlLGUuJF9yb290PXRoaXMuJF9yb290LGUuJF90ZW1wPU9iamVjdC5hc3NpZ24oe30sdGhpcy4kX3RlbXApLGUuJF90ZW1wLndoZW5zPXt9LGUuX2lkcz10aGlzLl9pZHMuY2xvbmUoKSxlLl9wcmVmZXJlbmNlcz10aGlzLl9wcmVmZXJlbmNlcyxlLl92YWxpZHM9dGhpcy5fdmFsaWRzJiZ0aGlzLl92YWxpZHMuY2xvbmUoKSxlLl9pbnZhbGlkcz10aGlzLl9pbnZhbGlkcyYmdGhpcy5faW52YWxpZHMuY2xvbmUoKSxlLl9ydWxlcz10aGlzLl9ydWxlcy5zbGljZSgpLGUuX3NpbmdsZVJ1bGVzPW4odGhpcy5fc2luZ2xlUnVsZXMse3NoYWxsb3c6ITB9KSxlLl9yZWZzPXRoaXMuX3JlZnMuY2xvbmUoKSxlLl9mbGFncz1PYmplY3QuYXNzaWduKHt9LHRoaXMuX2ZsYWdzKSxlLl9jYWNoZT1udWxsLGUuJF90ZXJtcz17fTtmb3IoY29uc3QgdCBpbiB0aGlzLiRfdGVybXMpZS4kX3Rlcm1zW3RdPXRoaXMuJF90ZXJtc1t0XT90aGlzLiRfdGVybXNbdF0uc2xpY2UoKTpudWxsO2UuJF9zdXBlcj17fTtmb3IoY29uc3QgdCBpbiB0aGlzLiRfc3VwZXIpZS4kX3N1cGVyW3RdPXRoaXMuX3N1cGVyW3RdLmJpbmQoZSk7cmV0dXJuIGV9X2RlZmF1bHQoZSx0LHI9e30pe3JldHVybiBsLmFzc2VydE9wdGlvbnMocixcImxpdGVyYWxcIikscyh2b2lkIDAhPT10LFwiTWlzc2luZ1wiLGUsXCJ2YWx1ZVwiKSxzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHR8fCFyLmxpdGVyYWwsXCJPbmx5IGZ1bmN0aW9uIHZhbHVlIHN1cHBvcnRzIGxpdGVyYWwgb3B0aW9uXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnIubGl0ZXJhbCYmKHQ9e1tsLnN5bWJvbHMubGl0ZXJhbF06ITAsbGl0ZXJhbDp0fSksdGhpcy4kX3NldEZsYWcoZSx0KX1fZ2VuZXJhdGUoZSx0LHIpe2lmKCF0aGlzLiRfdGVybXMud2hlbnMpcmV0dXJue3NjaGVtYTp0aGlzfTtjb25zdCBzPVtdLG49W107Zm9yKGxldCBvPTA7bzx0aGlzLiRfdGVybXMud2hlbnMubGVuZ3RoOysrbyl7Y29uc3QgYT10aGlzLiRfdGVybXMud2hlbnNbb107aWYoYS5jb25jYXQpe3MucHVzaChhLmNvbmNhdCksbi5wdXNoKFwiXCIuY29uY2F0KG8sXCIuY29uY2F0XCIpKTtjb250aW51ZX1jb25zdCBpPWEucmVmP2EucmVmLnJlc29sdmUoZSx0LHIpOmUsbD1hLmlzP1thXTphLnN3aXRjaCxjPW4ubGVuZ3RoO2ZvcihsZXQgYz0wO2M8bC5sZW5ndGg7KytjKXtjb25zdHtpczp1LHRoZW46ZixvdGhlcndpc2U6bX09bFtjXSxoPVwiXCIuY29uY2F0KG8pLmNvbmNhdChhLnN3aXRjaD9cIi5cIitjOlwiXCIpO2lmKHUuJF9tYXRjaChpLHQubmVzdCh1LFwiXCIuY29uY2F0KGgsXCIuaXNcIikpLHIpKXtpZihmKXtjb25zdCBvPXQubG9jYWxpemUoWy4uLnQucGF0aCxcIlwiLmNvbmNhdChoLFwiLnRoZW5cIildLHQuYW5jZXN0b3JzLHQuc2NoZW1hcykse3NjaGVtYTphLGlkOml9PWYuX2dlbmVyYXRlKGUsbyxyKTtzLnB1c2goYSksbi5wdXNoKFwiXCIuY29uY2F0KGgsXCIudGhlblwiKS5jb25jYXQoaT9cIihcIi5jb25jYXQoaSxcIilcIik6XCJcIikpO2JyZWFrfX1lbHNlIGlmKG0pe2NvbnN0IG89dC5sb2NhbGl6ZShbLi4udC5wYXRoLFwiXCIuY29uY2F0KGgsXCIub3RoZXJ3aXNlXCIpXSx0LmFuY2VzdG9ycyx0LnNjaGVtYXMpLHtzY2hlbWE6YSxpZDppfT1tLl9nZW5lcmF0ZShlLG8scik7cy5wdXNoKGEpLG4ucHVzaChcIlwiLmNvbmNhdChoLFwiLm90aGVyd2lzZVwiKS5jb25jYXQoaT9cIihcIi5jb25jYXQoaSxcIilcIik6XCJcIikpO2JyZWFrfX1pZihhLmJyZWFrJiZuLmxlbmd0aD5jKWJyZWFrfWNvbnN0IG89bi5qb2luKFwiLCBcIik7aWYodC5tYWluc3RheS50cmFjZXIuZGVidWcodCxcInJ1bGVcIixcIndoZW5cIixvKSwhbylyZXR1cm57c2NoZW1hOnRoaXN9O2lmKCF0Lm1haW5zdGF5LnRyYWNlci5hY3RpdmUmJnRoaXMuJF90ZW1wLndoZW5zW29dKXJldHVybntzY2hlbWE6dGhpcy4kX3RlbXAud2hlbnNbb10saWQ6b307bGV0IGE9dGhpczt0aGlzLl9kZWZpbml0aW9uLmdlbmVyYXRlJiYoYT10aGlzLl9kZWZpbml0aW9uLmdlbmVyYXRlKHRoaXMsZSx0LHIpKTtmb3IoY29uc3QgZSBvZiBzKWE9YS5jb25jYXQoZSk7cmV0dXJuIHRoaXMuJF9yb290Ll90cmFjZXImJnRoaXMuJF9yb290Ll90cmFjZXIuX2NvbWJpbmUoYSxbdGhpcywuLi5zXSksdGhpcy4kX3RlbXAud2hlbnNbb109YSx7c2NoZW1hOmEsaWQ6b319X2lubmVyKGUsdCxyPXt9KXtzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgXCIuY29uY2F0KGUsXCIgaW5zaWRlIGEgcnVsZXNldFwiKSk7Y29uc3Qgbj10aGlzLmNsb25lKCk7cmV0dXJuIG4uJF90ZXJtc1tlXSYmIXIub3ZlcnJpZGV8fChuLiRfdGVybXNbZV09W10pLHIuc2luZ2xlP24uJF90ZXJtc1tlXS5wdXNoKHQpOm4uJF90ZXJtc1tlXS5wdXNoKC4uLnQpLG4uJF90ZW1wLnJ1bGVzZXQ9ITEsbn1faW5SdWxlc2V0KCl7cmV0dXJuIG51bGwhPT10aGlzLiRfdGVtcC5ydWxlc2V0JiYhMSE9PXRoaXMuJF90ZW1wLnJ1bGVzZXR9X3J1bGVSZW1vdmUoZSx0PXt9KXtpZighdGhpcy5fc2luZ2xlUnVsZXMuaGFzKGUpKXJldHVybiB0aGlzO2NvbnN0IHI9ITEhPT10LmNsb25lP3RoaXMuY2xvbmUoKTp0aGlzO3IuX3NpbmdsZVJ1bGVzLmRlbGV0ZShlKTtjb25zdCBzPVtdO2ZvcihsZXQgdD0wO3Q8ci5fcnVsZXMubGVuZ3RoOysrdCl7Y29uc3Qgbj1yLl9ydWxlc1t0XTtuLm5hbWUhPT1lfHxuLmtlZXA/cy5wdXNoKG4pOnIuX2luUnVsZXNldCgpJiZ0PHIuJF90ZW1wLnJ1bGVzZXQmJi0tci4kX3RlbXAucnVsZXNldH1yZXR1cm4gci5fcnVsZXM9cyxyfV92YWx1ZXMoZSx0KXtsLnZlcmlmeUZsYXQoZSx0LnNsaWNlKDEsLTEpKTtjb25zdCByPXRoaXMuY2xvbmUoKSxuPWVbMF09PT1sLnN5bWJvbHMub3ZlcnJpZGU7aWYobiYmKGU9ZS5zbGljZSgxKSksIXJbdF0mJmUubGVuZ3RoP3JbdF09bmV3IGI6biYmKHJbdF09ZS5sZW5ndGg/bmV3IGI6bnVsbCxyLiRfbXV0YXRlUmVidWlsZCgpKSwhclt0XSlyZXR1cm4gcjtuJiZyW3RdLm92ZXJyaWRlKCk7Zm9yKGNvbnN0IG4gb2YgZSl7cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgYWxsb3cvdmFsaWQvaW52YWxpZCB3aXRoIHVuZGVmaW5lZFwiKSxzKG4hPT1sLnN5bWJvbHMub3ZlcnJpZGUsXCJPdmVycmlkZSBtdXN0IGJlIHRoZSBmaXJzdCB2YWx1ZVwiKTtjb25zdCBlPVwiX2ludmFsaWRzXCI9PT10P1wiX3ZhbGlkc1wiOlwiX2ludmFsaWRzXCI7cltlXSYmKHJbZV0ucmVtb3ZlKG4pLHJbZV0ubGVuZ3RofHwocyhcIl92YWxpZHNcIj09PXR8fCFyLl9mbGFncy5vbmx5LFwiU2V0dGluZyBpbnZhbGlkIHZhbHVlXCIsbixcImxlYXZlcyBzY2hlbWEgcmVqZWN0aW5nIGFsbCB2YWx1ZXMgZHVlIHRvIHByZXZpb3VzIHZhbGlkIHJ1bGVcIikscltlXT1udWxsKSksclt0XS5hZGQobixyLl9yZWZzKX1yZXR1cm4gcn19fTt2LkJhc2UucHJvdG90eXBlW2wuc3ltYm9scy5hbnldPXt2ZXJzaW9uOmwudmVyc2lvbixjb21waWxlOmMuY29tcGlsZSxyb290OlwiJF9yb290XCJ9LHYuQmFzZS5wcm90b3R5cGUuaXNJbW11dGFibGU9ITAsdi5CYXNlLnByb3RvdHlwZS5kZW55PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLmRpc2FsbG93PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLmVxdWFsPXYuQmFzZS5wcm90b3R5cGUudmFsaWQsdi5CYXNlLnByb3RvdHlwZS5leGlzdD12LkJhc2UucHJvdG90eXBlLnJlcXVpcmVkLHYuQmFzZS5wcm90b3R5cGUubm90PXYuQmFzZS5wcm90b3R5cGUuaW52YWxpZCx2LkJhc2UucHJvdG90eXBlLm9wdGlvbnM9di5CYXNlLnByb3RvdHlwZS5wcmVmcyx2LkJhc2UucHJvdG90eXBlLnByZWZlcmVuY2VzPXYuQmFzZS5wcm90b3R5cGUucHJlZnMsZS5leHBvcnRzPW5ldyB2LkJhc2V9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYocz1zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixzKX1yZXR1cm4gcn1mdW5jdGlvbiBuKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1jb25zdCBvPXIoMCksYT1yKDEpLGk9cig1KSxsPXt9O3QuSWRzPWwuSWRzPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5fYnlJZD1uZXcgTWFwLHRoaXMuX2J5S2V5PW5ldyBNYXAsdGhpcy5fc2NoZW1hQ2hhaW49ITF9Y2xvbmUoKXtjb25zdCBlPW5ldyBsLklkcztyZXR1cm4gZS5fYnlJZD1uZXcgTWFwKHRoaXMuX2J5SWQpLGUuX2J5S2V5PW5ldyBNYXAodGhpcy5fYnlLZXkpLGUuX3NjaGVtYUNoYWluPXRoaXMuX3NjaGVtYUNoYWluLGV9Y29uY2F0KGUpe2UuX3NjaGVtYUNoYWluJiYodGhpcy5fc2NoZW1hQ2hhaW49ITApO2Zvcihjb25zdFt0LHJdb2YgZS5fYnlJZC5lbnRyaWVzKCkpbyghdGhpcy5fYnlLZXkuaGFzKHQpLFwiU2NoZW1hIGlkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGtleTpcIix0KSx0aGlzLl9ieUlkLnNldCh0LHIpO2Zvcihjb25zdFt0LHJdb2YgZS5fYnlLZXkuZW50cmllcygpKW8oIXRoaXMuX2J5SWQuaGFzKHQpLFwiU2NoZW1hIGtleSBjb25mbGljdHMgd2l0aCBleGlzdGluZyBpZDpcIix0KSx0aGlzLl9ieUtleS5zZXQodCxyKX1mb3JrKGUsdCxyKXtjb25zdCBzPXRoaXMuX2NvbGxlY3QoZSk7cy5wdXNoKHtzY2hlbWE6cn0pO2NvbnN0IG49cy5zaGlmdCgpO2xldCBpPXtpZDpuLmlkLHNjaGVtYTp0KG4uc2NoZW1hKX07byhhLmlzU2NoZW1hKGkuc2NoZW1hKSxcImFkanVzdGVyIGZ1bmN0aW9uIGZhaWxlZCB0byByZXR1cm4gYSBqb2kgc2NoZW1hIHR5cGVcIik7Zm9yKGNvbnN0IGUgb2YgcylpPXtpZDplLmlkLHNjaGVtYTpsLmZvcmsoZS5zY2hlbWEsaS5pZCxpLnNjaGVtYSl9O3JldHVybiBpLnNjaGVtYX1sYWJlbHMoZSx0PVtdKXtjb25zdCByPWVbMF0scz10aGlzLl9nZXQocik7aWYoIXMpcmV0dXJuWy4uLnQsLi4uZV0uam9pbihcIi5cIik7Y29uc3Qgbj1lLnNsaWNlKDEpO3JldHVybiB0PVsuLi50LHMuc2NoZW1hLl9mbGFncy5sYWJlbHx8cl0sbi5sZW5ndGg/cy5zY2hlbWEuX2lkcy5sYWJlbHMobix0KTp0LmpvaW4oXCIuXCIpfXJlYWNoKGUsdD1bXSl7Y29uc3Qgcj1lWzBdLHM9dGhpcy5fZ2V0KHIpO28ocyxcIlNjaGVtYSBkb2VzIG5vdCBjb250YWluIHBhdGhcIixbLi4udCwuLi5lXS5qb2luKFwiLlwiKSk7Y29uc3Qgbj1lLnNsaWNlKDEpO3JldHVybiBuLmxlbmd0aD9zLnNjaGVtYS5faWRzLnJlYWNoKG4sWy4uLnQscl0pOnMuc2NoZW1hfXJlZ2lzdGVyKGUse2tleTp0fT17fSl7aWYoIWV8fCFhLmlzU2NoZW1hKGUpKXJldHVybjsoZS4kX3Byb3BlcnR5KFwic2NoZW1hQ2hhaW5cIil8fGUuX2lkcy5fc2NoZW1hQ2hhaW4pJiYodGhpcy5fc2NoZW1hQ2hhaW49ITApO2NvbnN0IHI9ZS5fZmxhZ3MuaWQ7aWYocil7Y29uc3QgdD10aGlzLl9ieUlkLmdldChyKTtvKCF0fHx0LnNjaGVtYT09PWUsXCJDYW5ub3QgYWRkIGRpZmZlcmVudCBzY2hlbWFzIHdpdGggdGhlIHNhbWUgaWQ6XCIsciksbyghdGhpcy5fYnlLZXkuaGFzKHIpLFwiU2NoZW1hIGlkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGtleTpcIixyKSx0aGlzLl9ieUlkLnNldChyLHtzY2hlbWE6ZSxpZDpyfSl9dCYmKG8oIXRoaXMuX2J5S2V5Lmhhcyh0KSxcIlNjaGVtYSBhbHJlYWR5IGNvbnRhaW5zIGtleTpcIix0KSxvKCF0aGlzLl9ieUlkLmhhcyh0KSxcIlNjaGVtYSBrZXkgY29uZmxpY3RzIHdpdGggZXhpc3RpbmcgaWQ6XCIsdCksdGhpcy5fYnlLZXkuc2V0KHQse3NjaGVtYTplLGlkOnR9KSl9cmVzZXQoKXt0aGlzLl9ieUlkPW5ldyBNYXAsdGhpcy5fYnlLZXk9bmV3IE1hcCx0aGlzLl9zY2hlbWFDaGFpbj0hMX1fY29sbGVjdChlLHQ9W10scj1bXSl7Y29uc3Qgcz1lWzBdLG49dGhpcy5fZ2V0KHMpO28obixcIlNjaGVtYSBkb2VzIG5vdCBjb250YWluIHBhdGhcIixbLi4udCwuLi5lXS5qb2luKFwiLlwiKSkscj1bbiwuLi5yXTtjb25zdCBhPWUuc2xpY2UoMSk7cmV0dXJuIGEubGVuZ3RoP24uc2NoZW1hLl9pZHMuX2NvbGxlY3QoYSxbLi4udCxzXSxyKTpyfV9nZXQoZSl7cmV0dXJuIHRoaXMuX2J5SWQuZ2V0KGUpfHx0aGlzLl9ieUtleS5nZXQoZSl9fSxsLmZvcms9ZnVuY3Rpb24oZSxyLHMpe2NvbnN0IG49dC5zY2hlbWEoZSx7ZWFjaDooZSx7a2V5OnR9KT0+e2lmKHI9PT0oZS5fZmxhZ3MuaWR8fHQpKXJldHVybiBzfSxyZWY6ITF9KTtyZXR1cm4gbj9uLiRfbXV0YXRlUmVidWlsZCgpOmV9LHQuc2NoZW1hPWZ1bmN0aW9uKGUsdCl7bGV0IHI7Zm9yKGNvbnN0IHMgaW4gZS5fZmxhZ3Mpe2lmKFwiX1wiPT09c1swXSljb250aW51ZTtjb25zdCBuPWwuc2NhbihlLl9mbGFnc1tzXSx7c291cmNlOlwiZmxhZ3NcIixuYW1lOnN9LHQpO3ZvaWQgMCE9PW4mJihyPXJ8fGUuY2xvbmUoKSxyLl9mbGFnc1tzXT1uKX1mb3IobGV0IHM9MDtzPGUuX3J1bGVzLmxlbmd0aDsrK3Mpe2NvbnN0IG49ZS5fcnVsZXNbc10sbz1sLnNjYW4obi5hcmdzLHtzb3VyY2U6XCJydWxlc1wiLG5hbWU6bi5uYW1lfSx0KTtpZih2b2lkIDAhPT1vKXtyPXJ8fGUuY2xvbmUoKTtjb25zdCB0PU9iamVjdC5hc3NpZ24oe30sbik7dC5hcmdzPW8sci5fcnVsZXNbc109dCxyLl9zaW5nbGVSdWxlcy5nZXQobi5uYW1lKT09PW4mJnIuX3NpbmdsZVJ1bGVzLnNldChuLm5hbWUsdCl9fWZvcihjb25zdCBzIGluIGUuJF90ZXJtcyl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGUuJF90ZXJtc1tzXSx7c291cmNlOlwidGVybXNcIixuYW1lOnN9LHQpO3ZvaWQgMCE9PW4mJihyPXJ8fGUuY2xvbmUoKSxyLiRfdGVybXNbc109bil9cmV0dXJuIHJ9LGwuc2Nhbj1mdW5jdGlvbihlLHQscixvLGMpe2NvbnN0IHU9b3x8W107aWYobnVsbD09PWV8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybjtsZXQgZjtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3Qgbj1cInRlcm1zXCI9PT10LnNvdXJjZSYmXCJrZXlzXCI9PT10Lm5hbWUmJmVbc10ua2V5LG89bC5zY2FuKGVbc10sdCxyLFtzLC4uLnVdLG4pO3ZvaWQgMCE9PW8mJihmPWZ8fGUuc2xpY2UoKSxmW3NdPW8pfXJldHVybiBmfWlmKCExIT09ci5zY2hlbWEmJmEuaXNTY2hlbWEoZSl8fCExIT09ci5yZWYmJmkuaXNSZWYoZSkpe2NvbnN0IG89ci5lYWNoKGUsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/cyhPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe24oZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnMoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9KHt9LHQse3BhdGg6dSxrZXk6Y30pKTtpZihvPT09ZSlyZXR1cm47cmV0dXJuIG99Zm9yKGNvbnN0IHMgaW4gZSl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGVbc10sdCxyLFtzLC4uLnVdLGMpO3ZvaWQgMCE9PW4mJihmPWZ8fE9iamVjdC5hc3NpZ24oe30sZSksZltzXT1uKX1yZXR1cm4gZn19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigzNyksYT1yKDYpLGk9cigxKSxsPXIoNCksYz1yKDM4KSx1PXtyZXN1bHQ6U3ltYm9sKFwicmVzdWx0XCIpfTt0LmVudHJ5PWZ1bmN0aW9uKGUsdCxyKXtsZXQgbj1pLmRlZmF1bHRzO3ImJihzKHZvaWQgMD09PXIud2FybmluZ3MsXCJDYW5ub3Qgb3ZlcnJpZGUgd2FybmluZ3MgcHJlZmVyZW5jZSBpbiBzeW5jaHJvbm91cyB2YWxpZGF0aW9uXCIpLG49aS5wcmVmZXJlbmNlcyhpLmRlZmF1bHRzLHIpKTtjb25zdCBvPXUuZW50cnkoZSx0LG4pO3MoIW8ubWFpbnN0YXkuZXh0ZXJuYWxzLmxlbmd0aCxcIlNjaGVtYSB3aXRoIGV4dGVybmFsIHJ1bGVzIG11c3QgdXNlIHZhbGlkYXRlQXN5bmMoKVwiKTtjb25zdCBhPXt2YWx1ZTpvLnZhbHVlfTtyZXR1cm4gby5lcnJvciYmKGEuZXJyb3I9by5lcnJvciksby5tYWluc3RheS53YXJuaW5ncy5sZW5ndGgmJihhLndhcm5pbmc9bC5kZXRhaWxzKG8ubWFpbnN0YXkud2FybmluZ3MpKSxvLm1haW5zdGF5LmRlYnVnJiYoYS5kZWJ1Zz1vLm1haW5zdGF5LmRlYnVnKSxhfSx0LmVudHJ5QXN5bmM9YXN5bmMgZnVuY3Rpb24oZSx0LHIpe2xldCBzPWkuZGVmYXVsdHM7ciYmKHM9aS5wcmVmZXJlbmNlcyhpLmRlZmF1bHRzLHIpKTtjb25zdCBuPXUuZW50cnkoZSx0LHMpLG89bi5tYWluc3RheTtpZihuLmVycm9yKXRocm93IG8uZGVidWcmJihuLmVycm9yLmRlYnVnPW8uZGVidWcpLG4uZXJyb3I7aWYoby5leHRlcm5hbHMubGVuZ3RoKXtsZXQgZT1uLnZhbHVlO2Zvcihjb25zdHttZXRob2Q6dCxwYXRoOnIsbGFiZWw6c31vZiBvLmV4dGVybmFscyl7bGV0IG4sbyxpPWU7ci5sZW5ndGgmJihuPXJbci5sZW5ndGgtMV0sbz1hKGUsci5zbGljZSgwLC0xKSksaT1vW25dKTt0cnl7Y29uc3Qgcj1hd2FpdCB0KGkpO2lmKHZvaWQgMD09PXJ8fHI9PT1pKWNvbnRpbnVlO28/b1tuXT1yOmU9cn1jYXRjaChlKXt0aHJvdyBlLm1lc3NhZ2UrPVwiIChcIi5jb25jYXQocyxcIilcIiksZX19bi52YWx1ZT1lfWlmKCFzLndhcm5pbmdzJiYhcy5kZWJ1ZylyZXR1cm4gbi52YWx1ZTtjb25zdCBjPXt2YWx1ZTpuLnZhbHVlfTtyZXR1cm4gby53YXJuaW5ncy5sZW5ndGgmJihjLndhcm5pbmc9bC5kZXRhaWxzKG8ud2FybmluZ3MpKSxvLmRlYnVnJiYoYy5kZWJ1Zz1vLmRlYnVnKSxjfSx1LmVudHJ5PWZ1bmN0aW9uKGUscixzKXtjb25zdHt0cmFjZXI6bixjbGVhbnVwOm99PXUudHJhY2VyKHIscyksYT17ZXh0ZXJuYWxzOltdLHdhcm5pbmdzOltdLHRyYWNlcjpuLGRlYnVnOnMuZGVidWc/W106bnVsbCxsaW5rczpyLl9pZHMuX3NjaGVtYUNoYWluP25ldyBNYXA6bnVsbH0saT1yLl9pZHMuX3NjaGVtYUNoYWluP1t7c2NoZW1hOnJ9XTpudWxsLGY9bmV3IGMoW10sW10se21haW5zdGF5OmEsc2NoZW1hczppfSksbT10LnZhbGlkYXRlKGUscixmLHMpO28mJnIuJF9yb290LnVudHJhY2UoKTtjb25zdCBoPWwucHJvY2VzcyhtLmVycm9ycyxlLHMpO3JldHVybnt2YWx1ZTptLnZhbHVlLGVycm9yOmgsbWFpbnN0YXk6YX19LHUudHJhY2VyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuJF9yb290Ll90cmFjZXI/e3RyYWNlcjplLiRfcm9vdC5fdHJhY2VyLl9yZWdpc3RlcihlKX06dC5kZWJ1Zz8ocyhlLiRfcm9vdC50cmFjZSxcIkRlYnVnIG1vZGUgbm90IHN1cHBvcnRlZFwiKSx7dHJhY2VyOmUuJF9yb290LnRyYWNlKCkuX3JlZ2lzdGVyKGUpLGNsZWFudXA6ITB9KTp7dHJhY2VyOnUuaWdub3JlfX0sdC52YWxpZGF0ZT1mdW5jdGlvbihlLHQscixzLG49e30pe2lmKHQuJF90ZXJtcy53aGVucyYmKHQ9dC5fZ2VuZXJhdGUoZSxyLHMpLnNjaGVtYSksdC5fcHJlZmVyZW5jZXMmJihzPXUucHJlZnModCxzKSksdC5fY2FjaGUmJnMuY2FjaGUpe2NvbnN0IHM9dC5fY2FjaGUuZ2V0KGUpO2lmKHIubWFpbnN0YXkudHJhY2VyLmRlYnVnKHIsXCJ2YWxpZGF0ZVwiLFwiY2FjaGVkXCIsISFzKSxzKXJldHVybiBzfWNvbnN0IG89KG4sbyxhKT0+dC4kX2NyZWF0ZUVycm9yKG4sZSxvLGF8fHIscyksYT17b3JpZ2luYWw6ZSxwcmVmczpzLHNjaGVtYTp0LHN0YXRlOnIsZXJyb3I6byx3YXJuOihlLHQscyk9PnIubWFpbnN0YXkud2FybmluZ3MucHVzaChvKGUsdCxzKSksbWVzc2FnZToobixvKT0+dC4kX2NyZWF0ZUVycm9yKFwiY3VzdG9tXCIsZSxvLHIscyx7bWVzc2FnZXM6bn0pfTtyLm1haW5zdGF5LnRyYWNlci5lbnRyeSh0LHIpO2NvbnN0IGw9dC5fZGVmaW5pdGlvbjtpZihsLnByZXBhcmUmJnZvaWQgMCE9PWUmJnMuY29udmVydCl7Y29uc3QgdD1sLnByZXBhcmUoZSxhKTtpZih0KXtpZihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwicHJlcGFyZVwiLGUsdC52YWx1ZSksdC5lcnJvcnMpcmV0dXJuIHUuZmluYWxpemUodC52YWx1ZSxbXS5jb25jYXQodC5lcnJvcnMpLGEpO2U9dC52YWx1ZX19aWYobC5jb2VyY2UmJnZvaWQgMCE9PWUmJnMuY29udmVydCYmKCFsLmNvZXJjZS5mcm9tfHxsLmNvZXJjZS5mcm9tLmluY2x1ZGVzKHR5cGVvZiBlKSkpe2NvbnN0IHQ9bC5jb2VyY2UubWV0aG9kKGUsYSk7aWYodCl7aWYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcImNvZXJjZWRcIixlLHQudmFsdWUpLHQuZXJyb3JzKXJldHVybiB1LmZpbmFsaXplKHQudmFsdWUsW10uY29uY2F0KHQuZXJyb3JzKSxhKTtlPXQudmFsdWV9fWNvbnN0IGM9dC5fZmxhZ3MuZW1wdHk7YyYmYy4kX21hdGNoKHUudHJpbShlLHQpLHIubmVzdChjKSxpLmRlZmF1bHRzKSYmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJlbXB0eVwiLGUsdm9pZCAwKSxlPXZvaWQgMCk7Y29uc3QgZj1uLnByZXNlbmNlfHx0Ll9mbGFncy5wcmVzZW5jZXx8KHQuX2ZsYWdzLl9lbmRlZFN3aXRjaD9cImlnbm9yZVwiOnMucHJlc2VuY2UpO2lmKHZvaWQgMD09PWUpe2lmKFwiZm9yYmlkZGVuXCI9PT1mKXJldHVybiB1LmZpbmFsaXplKGUsbnVsbCxhKTtpZihcInJlcXVpcmVkXCI9PT1mKXJldHVybiB1LmZpbmFsaXplKGUsW3QuJF9jcmVhdGVFcnJvcihcImFueS5yZXF1aXJlZFwiLGUsbnVsbCxyLHMpXSxhKTtpZihcIm9wdGlvbmFsXCI9PT1mKXtpZih0Ll9mbGFncy5kZWZhdWx0IT09aS5zeW1ib2xzLmRlZXBEZWZhdWx0KXJldHVybiB1LmZpbmFsaXplKGUsbnVsbCxhKTtyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiZGVmYXVsdFwiLGUse30pLGU9e319fWVsc2UgaWYoXCJmb3JiaWRkZW5cIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxbdC4kX2NyZWF0ZUVycm9yKFwiYW55LnVua25vd25cIixlLG51bGwscixzKV0sYSk7Y29uc3QgbT1bXTtpZih0Ll92YWxpZHMpe2NvbnN0IG49dC5fdmFsaWRzLmdldChlLHIscyx0Ll9mbGFncy5pbnNlbnNpdGl2ZSk7aWYobilyZXR1cm4gcy5jb252ZXJ0JiYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcInZhbGlkc1wiLGUsbi52YWx1ZSksZT1uLnZhbHVlKSxyLm1haW5zdGF5LnRyYWNlci5maWx0ZXIodCxyLFwidmFsaWRcIixuKSx1LmZpbmFsaXplKGUsbnVsbCxhKTtpZih0Ll9mbGFncy5vbmx5KXtjb25zdCBuPXQuJF9jcmVhdGVFcnJvcihcImFueS5vbmx5XCIsZSx7dmFsaWRzOnQuX3ZhbGlkcy52YWx1ZXMoe2Rpc3BsYXk6ITB9KX0scixzKTtpZihzLmFib3J0RWFybHkpcmV0dXJuIHUuZmluYWxpemUoZSxbbl0sYSk7bS5wdXNoKG4pfX1pZih0Ll9pbnZhbGlkcyl7Y29uc3Qgbj10Ll9pbnZhbGlkcy5nZXQoZSxyLHMsdC5fZmxhZ3MuaW5zZW5zaXRpdmUpO2lmKG4pe3IubWFpbnN0YXkudHJhY2VyLmZpbHRlcih0LHIsXCJpbnZhbGlkXCIsbik7Y29uc3Qgbz10LiRfY3JlYXRlRXJyb3IoXCJhbnkuaW52YWxpZFwiLGUse2ludmFsaWRzOnQuX2ludmFsaWRzLnZhbHVlcyh7ZGlzcGxheTohMH0pfSxyLHMpO2lmKHMuYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLFtvXSxhKTttLnB1c2gobyl9fWlmKGwudmFsaWRhdGUpe2NvbnN0IHQ9bC52YWxpZGF0ZShlLGEpO2lmKHQmJihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiYmFzZVwiLGUsdC52YWx1ZSksZT10LnZhbHVlLHQuZXJyb3JzKSl7aWYoIUFycmF5LmlzQXJyYXkodC5lcnJvcnMpKXJldHVybiBtLnB1c2godC5lcnJvcnMpLHUuZmluYWxpemUoZSxtLGEpO2lmKHQuZXJyb3JzLmxlbmd0aClyZXR1cm4gbS5wdXNoKC4uLnQuZXJyb3JzKSx1LmZpbmFsaXplKGUsbSxhKX19cmV0dXJuIHQuX3J1bGVzLmxlbmd0aD91LnJ1bGVzKGUsbSxhKTp1LmZpbmFsaXplKGUsbSxhKX0sdS5ydWxlcz1mdW5jdGlvbihlLHQscil7Y29uc3R7c2NoZW1hOnMsc3RhdGU6bixwcmVmczpvfT1yO2Zvcihjb25zdCBhIG9mIHMuX3J1bGVzKXtjb25zdCBsPXMuX2RlZmluaXRpb24ucnVsZXNbYS5tZXRob2RdO2lmKGwuY29udmVydCYmby5jb252ZXJ0KXtuLm1haW5zdGF5LnRyYWNlci5sb2cocyxuLFwicnVsZVwiLGEubmFtZSxcImZ1bGxcIik7Y29udGludWV9bGV0IGMsZj1hLmFyZ3M7aWYoYS5fcmVzb2x2ZS5sZW5ndGgpe2Y9T2JqZWN0LmFzc2lnbih7fSxmKTtmb3IoY29uc3QgdCBvZiBhLl9yZXNvbHZlKXtjb25zdCByPWwuYXJnc0J5TmFtZS5nZXQodCksYT1mW3RdLnJlc29sdmUoZSxuLG8pLHU9ci5ub3JtYWxpemU/ci5ub3JtYWxpemUoYSk6YSxtPWkudmFsaWRhdGVBcmcodSxudWxsLHIpO2lmKG0pe2M9cy4kX2NyZWF0ZUVycm9yKFwiYW55LnJlZlwiLGEse2FyZzp0LHJlZjpmW3RdLHJlYXNvbjptfSxuLG8pO2JyZWFrfWZbdF09dX19Yz1jfHxsLnZhbGlkYXRlKGUscixmLGEpO2NvbnN0IG09dS5ydWxlKGMsYSk7aWYobS5lcnJvcnMpe2lmKG4ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwiZXJyb3JcIiksYS53YXJuKXtuLm1haW5zdGF5Lndhcm5pbmdzLnB1c2goLi4ubS5lcnJvcnMpO2NvbnRpbnVlfWlmKG8uYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLG0uZXJyb3JzLHIpO3QucHVzaCguLi5tLmVycm9ycyl9ZWxzZSBuLm1haW5zdGF5LnRyYWNlci5sb2cocyxuLFwicnVsZVwiLGEubmFtZSxcInBhc3NcIiksbi5tYWluc3RheS50cmFjZXIudmFsdWUobixcInJ1bGVcIixlLG0udmFsdWUsYS5uYW1lKSxlPW0udmFsdWV9cmV0dXJuIHUuZmluYWxpemUoZSx0LHIpfSx1LnJ1bGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSBpbnN0YW5jZW9mIGwuUmVwb3J0Pyh1LmVycm9yKGUsdCkse2Vycm9yczpbZV0sdmFsdWU6bnVsbH0pOkFycmF5LmlzQXJyYXkoZSkmJihlWzBdaW5zdGFuY2VvZiBsLlJlcG9ydHx8ZVswXWluc3RhbmNlb2YgRXJyb3IpPyhlLmZvckVhY2goZT0+dS5lcnJvcihlLHQpKSx7ZXJyb3JzOmUsdmFsdWU6bnVsbH0pOntlcnJvcnM6bnVsbCx2YWx1ZTplfX0sdS5lcnJvcj1mdW5jdGlvbihlLHQpe3JldHVybiB0Lm1lc3NhZ2UmJmUuX3NldFRlbXBsYXRlKHQubWVzc2FnZSksZX0sdS5maW5hbGl6ZT1mdW5jdGlvbihlLHQscil7dD10fHxbXTtjb25zdHtzY2hlbWE6bixzdGF0ZTpvLHByZWZzOmF9PXI7aWYodC5sZW5ndGgpe2NvbnN0IHM9dS5kZWZhdWx0KFwiZmFpbG92ZXJcIix2b2lkIDAsdCxyKTt2b2lkIDAhPT1zJiYoby5tYWluc3RheS50cmFjZXIudmFsdWUobyxcImZhaWxvdmVyXCIsZSxzKSxlPXMsdD1bXSl9aWYodC5sZW5ndGgmJm4uX2ZsYWdzLmVycm9yKWlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4uX2ZsYWdzLmVycm9yKXt0PW4uX2ZsYWdzLmVycm9yKHQpLEFycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKGNvbnN0IGUgb2YgdClzKGUgaW5zdGFuY2VvZiBFcnJvcnx8ZSBpbnN0YW5jZW9mIGwuUmVwb3J0LFwiZXJyb3IoKSBtdXN0IHJldHVybiBhbiBFcnJvciBvYmplY3RcIil9ZWxzZSB0PVtuLl9mbGFncy5lcnJvcl07aWYodm9pZCAwPT09ZSl7Y29uc3Qgcz11LmRlZmF1bHQoXCJkZWZhdWx0XCIsZSx0LHIpO28ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sXCJkZWZhdWx0XCIsZSxzKSxlPXN9aWYobi5fZmxhZ3MuY2FzdCYmdm9pZCAwIT09ZSl7Y29uc3QgdD1uLl9kZWZpbml0aW9uLmNhc3Rbbi5fZmxhZ3MuY2FzdF07aWYodC5mcm9tKGUpKXtjb25zdCBzPXQudG8oZSxyKTtvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLFwiY2FzdFwiLGUscyxuLl9mbGFncy5jYXN0KSxlPXN9fWlmKG4uJF90ZXJtcy5leHRlcm5hbHMmJmEuZXh0ZXJuYWxzJiYhMSE9PWEuX2V4dGVybmFscylmb3IoY29uc3R7bWV0aG9kOmV9b2Ygbi4kX3Rlcm1zLmV4dGVybmFscylvLm1haW5zdGF5LmV4dGVybmFscy5wdXNoKHttZXRob2Q6ZSxwYXRoOm8ucGF0aCxsYWJlbDpsLmxhYmVsKG4uX2ZsYWdzLG8sYSl9KTtjb25zdCBpPXt2YWx1ZTplLGVycm9yczp0Lmxlbmd0aD90Om51bGx9O3JldHVybiBuLl9mbGFncy5yZXN1bHQmJihpLnZhbHVlPVwic3RyaXBcIj09PW4uX2ZsYWdzLnJlc3VsdD92b2lkIDA6ci5vcmlnaW5hbCxvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLG4uX2ZsYWdzLnJlc3VsdCxlLGkudmFsdWUpLG8uc2hhZG93KGUsbi5fZmxhZ3MucmVzdWx0KSksbi5fY2FjaGUmJiExIT09YS5jYWNoZSYmIW4uX3JlZnMubGVuZ3RoJiZuLl9jYWNoZS5zZXQoci5vcmlnaW5hbCxpKSxpfSx1LnByZWZzPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj10PT09aS5kZWZhdWx0cztyZXR1cm4gciYmZS5fcHJlZmVyZW5jZXNbaS5zeW1ib2xzLnByZWZzXT9lLl9wcmVmZXJlbmNlc1tpLnN5bWJvbHMucHJlZnNdOih0PWkucHJlZmVyZW5jZXModCxlLl9wcmVmZXJlbmNlcyksciYmKGUuX3ByZWZlcmVuY2VzW2kuc3ltYm9scy5wcmVmc109dCksdCl9LHUuZGVmYXVsdD1mdW5jdGlvbihlLHQscixzKXtjb25zdHtzY2hlbWE6byxzdGF0ZTphLHByZWZzOmx9PXMsYz1vLl9mbGFnc1tlXTtpZihsLm5vRGVmYXVsdHN8fHZvaWQgMD09PWMpcmV0dXJuIHQ7aWYoYS5tYWluc3RheS50cmFjZXIubG9nKG8sYSxcInJ1bGVcIixlLFwiZnVsbFwiKSwhYylyZXR1cm4gYztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjKXtjb25zdCB0PWMubGVuZ3RoP1tuKGEuYW5jZXN0b3JzWzBdKSxzXTpbXTt0cnl7cmV0dXJuIGMoLi4udCl9Y2F0Y2godCl7cmV0dXJuIHZvaWQgci5wdXNoKG8uJF9jcmVhdGVFcnJvcihcImFueS5cIi5jb25jYXQoZSksbnVsbCx7ZXJyb3I6dH0sYSxsKSl9fXJldHVyblwib2JqZWN0XCIhPXR5cGVvZiBjP2M6Y1tpLnN5bWJvbHMubGl0ZXJhbF0/Yy5saXRlcmFsOmkuaXNSZXNvbHZhYmxlKGMpP2MucmVzb2x2ZSh0LGEsbCk6bihjKX0sdS50cmltPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIGU7Y29uc3Qgcj10LiRfZ2V0UnVsZShcInRyaW1cIik7cmV0dXJuIHImJnIuYXJncy5lbmFibGVkP2UudHJpbSgpOmV9LHUuaWdub3JlPXthY3RpdmU6ITEsZGVidWc6byxlbnRyeTpvLGZpbHRlcjpvLGxvZzpvLHJlc29sdmU6byx2YWx1ZTpvfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe319LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMiksbj1yKDYpLG89cigxKSxhPXt2YWx1ZTpTeW1ib2woXCJ2YWx1ZVwiKX07ZS5leHBvcnRzPWEuU3RhdGU9Y2xhc3N7Y29uc3RydWN0b3IoZSx0LHIpe3RoaXMucGF0aD1lLHRoaXMuYW5jZXN0b3JzPXQsdGhpcy5tYWluc3RheT1yLm1haW5zdGF5LHRoaXMuc2NoZW1hcz1yLnNjaGVtYXMsdGhpcy5kZWJ1Zz1udWxsfWxvY2FsaXplKGUsdD1udWxsLHI9bnVsbCl7Y29uc3Qgcz1uZXcgYS5TdGF0ZShlLHQsdGhpcyk7cmV0dXJuIHImJnMuc2NoZW1hcyYmKHMuc2NoZW1hcz1bYS5zY2hlbWFzKHIpLC4uLnMuc2NoZW1hc10pLHN9bmVzdChlLHQpe2NvbnN0IHI9bmV3IGEuU3RhdGUodGhpcy5wYXRoLHRoaXMuYW5jZXN0b3JzLHRoaXMpO3JldHVybiByLnNjaGVtYXM9ci5zY2hlbWFzJiZbYS5zY2hlbWFzKGUpLC4uLnIuc2NoZW1hc10sci5kZWJ1Zz10LHJ9c2hhZG93KGUsdCl7dGhpcy5tYWluc3RheS5zaGFkb3c9dGhpcy5tYWluc3RheS5zaGFkb3d8fG5ldyBhLlNoYWRvdyx0aGlzLm1haW5zdGF5LnNoYWRvdy5zZXQodGhpcy5wYXRoLGUsdCl9c25hcHNob3QoKXt0aGlzLm1haW5zdGF5LnNoYWRvdyYmKHRoaXMuX3NuYXBzaG90PXModGhpcy5tYWluc3RheS5zaGFkb3cubm9kZSh0aGlzLnBhdGgpKSl9cmVzdG9yZSgpe3RoaXMubWFpbnN0YXkuc2hhZG93JiYodGhpcy5tYWluc3RheS5zaGFkb3cub3ZlcnJpZGUodGhpcy5wYXRoLHRoaXMuX3NuYXBzaG90KSx0aGlzLl9zbmFwc2hvdD12b2lkIDApfX0sYS5zY2hlbWFzPWZ1bmN0aW9uKGUpe3JldHVybiBvLmlzU2NoZW1hKGUpP3tzY2hlbWE6ZX06ZX0sYS5TaGFkb3c9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLl92YWx1ZXM9bnVsbH1zZXQoZSx0LHIpe2lmKCFlLmxlbmd0aClyZXR1cm47aWYoXCJzdHJpcFwiPT09ciYmXCJudW1iZXJcIj09dHlwZW9mIGVbZS5sZW5ndGgtMV0pcmV0dXJuO3RoaXMuX3ZhbHVlcz10aGlzLl92YWx1ZXN8fG5ldyBNYXA7bGV0IHM9dGhpcy5fdmFsdWVzO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7Kyt0KXtjb25zdCByPWVbdF07bGV0IG49cy5nZXQocik7bnx8KG49bmV3IE1hcCxzLnNldChyLG4pKSxzPW59c1thLnZhbHVlXT10fWdldChlKXtjb25zdCB0PXRoaXMubm9kZShlKTtpZih0KXJldHVybiB0W2EudmFsdWVdfW5vZGUoZSl7aWYodGhpcy5fdmFsdWVzKXJldHVybiBuKHRoaXMuX3ZhbHVlcyxlLHtpdGVyYWJsZXM6ITB9KX1vdmVycmlkZShlLHQpe2lmKCF0aGlzLl92YWx1ZXMpcmV0dXJuO2NvbnN0IHI9ZS5zbGljZSgwLC0xKSxzPWVbZS5sZW5ndGgtMV0sbz1uKHRoaXMuX3ZhbHVlcyxyLHtpdGVyYWJsZXM6ITB9KTt0P28uc2V0KHMsdCk6byYmby5kZWxldGUocyl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTApLG89cig2KSxhPXIoMyksaT1yKDEpLGw9cig4KSxjPXt9O2UuZXhwb3J0cz1hLmV4dGVuZCh7dHlwZTpcImFycmF5XCIsZmxhZ3M6e3NpbmdsZTp7ZGVmYXVsdDohMX0sc3BhcnNlOntkZWZhdWx0OiExfX0sdGVybXM6e2l0ZW1zOntpbml0OltdLG1hbmlmZXN0Olwic2NoZW1hXCJ9LG9yZGVyZWQ6e2luaXQ6W10sbWFuaWZlc3Q6XCJzY2hlbWFcIn0sX2V4Y2x1c2lvbnM6e2luaXQ6W119LF9pbmNsdXNpb25zOntpbml0OltdfSxfcmVxdWlyZWRzOntpbml0OltdfX0sY29lcmNlOntmcm9tOlwib2JqZWN0XCIsbWV0aG9kKGUse3NjaGVtYTp0LHN0YXRlOnIscHJlZnM6c30pe2lmKCFBcnJheS5pc0FycmF5KGUpKXJldHVybjtjb25zdCBuPXQuJF9nZXRSdWxlKFwic29ydFwiKTtyZXR1cm4gbj9jLnNvcnQodCxlLG4uYXJncy5vcHRpb25zLHIscyk6dm9pZCAwfX0sdmFsaWRhdGUoZSx7c2NoZW1hOnQsZXJyb3I6cn0pe2lmKCFBcnJheS5pc0FycmF5KGUpKXtpZih0Ll9mbGFncy5zaW5nbGUpe2NvbnN0IHQ9W2VdO3JldHVybiB0W2kuc3ltYm9scy5hcnJheVNpbmdsZV09ITAse3ZhbHVlOnR9fXJldHVybntlcnJvcnM6cihcImFycmF5LmJhc2VcIil9fWlmKHQuJF9nZXRSdWxlKFwiaXRlbXNcIil8fHQuJF90ZXJtcy5leHRlcm5hbHMpcmV0dXJue3ZhbHVlOmUuc2xpY2UoKX19LHJ1bGVzOntoYXM6e21ldGhvZChlKXtlPXRoaXMuJF9jb21waWxlKGUse2FwcGVuZFBhdGg6ITB9KTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaGFzXCIsYXJnczp7c2NoZW1hOmV9fSk7cmV0dXJuIHQuJF9tdXRhdGVSZWdpc3RlcihlKSx0fSx2YWxpZGF0ZShlLHtzdGF0ZTp0LHByZWZzOnIsZXJyb3I6c30se3NjaGVtYTpufSl7Y29uc3Qgbz1bZSwuLi50LmFuY2VzdG9yc107Zm9yKGxldCBzPTA7czxlLmxlbmd0aDsrK3Mpe2NvbnN0IGE9dC5sb2NhbGl6ZShbLi4udC5wYXRoLHNdLG8sbik7aWYobi4kX21hdGNoKGVbc10sYSxyKSlyZXR1cm4gZX1jb25zdCBhPW4uX2ZsYWdzLmxhYmVsO3JldHVybiBhP3MoXCJhcnJheS5oYXNLbm93blwiLHtwYXR0ZXJuTGFiZWw6YX0pOnMoXCJhcnJheS5oYXNVbmtub3duXCIsbnVsbCl9LG11bHRpOiEwfSxpdGVtczp7bWV0aG9kKC4uLmUpe2kudmVyaWZ5RmxhdChlLFwiaXRlbXNcIik7Y29uc3QgdD10aGlzLiRfYWRkUnVsZShcIml0ZW1zXCIpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBzPWkudHJ5V2l0aFBhdGgoKCk9PnRoaXMuJF9jb21waWxlKGVbcl0pLHIse2FwcGVuZDohMH0pO3QuJF90ZXJtcy5pdGVtcy5wdXNoKHMpfXJldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHN0YXRlOnMscHJlZnM6bn0pe2NvbnN0IG89dC4kX3Rlcm1zLl9yZXF1aXJlZHMuc2xpY2UoKSxhPXQuJF90ZXJtcy5vcmRlcmVkLnNsaWNlKCksbD1bLi4udC4kX3Rlcm1zLl9pbmNsdXNpb25zLC4uLm9dLHU9IWVbaS5zeW1ib2xzLmFycmF5U2luZ2xlXTtkZWxldGUgZVtpLnN5bWJvbHMuYXJyYXlTaW5nbGVdO2NvbnN0IGY9W107bGV0IG09ZS5sZW5ndGg7Zm9yKGxldCBpPTA7aTxtOysraSl7Y29uc3QgaD1lW2ldO2xldCBkPSExLHA9ITE7Y29uc3QgZz11P2k6bmV3IE51bWJlcihpKSx5PVsuLi5zLnBhdGgsZ107aWYoIXQuX2ZsYWdzLnNwYXJzZSYmdm9pZCAwPT09aCl7aWYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjthLnNoaWZ0KCk7Y29udGludWV9Y29uc3QgYj1bZSwuLi5zLmFuY2VzdG9yc107Zm9yKGNvbnN0IGUgb2YgdC4kX3Rlcm1zLl9leGNsdXNpb25zKWlmKGUuJF9tYXRjaChoLHMubG9jYWxpemUoeSxiLGUpLG4se3ByZXNlbmNlOlwiaWdub3JlXCJ9KSl7aWYoZi5wdXNoKHIoXCJhcnJheS5leGNsdWRlc1wiLHtwb3M6aSx2YWx1ZTpofSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Q9ITAsYS5zaGlmdCgpO2JyZWFrfWlmKGQpY29udGludWU7aWYodC4kX3Rlcm1zLm9yZGVyZWQubGVuZ3RoKXtpZihhLmxlbmd0aCl7Y29uc3Qgbz1hLnNoaWZ0KCksbD1vLiRfdmFsaWRhdGUoaCxzLmxvY2FsaXplKHksYixvKSxuKTtpZihsLmVycm9ycyl7aWYoZi5wdXNoKC4uLmwuZXJyb3JzKSxuLmFib3J0RWFybHkpcmV0dXJuIGZ9ZWxzZSBpZihcInN0cmlwXCI9PT1vLl9mbGFncy5yZXN1bHQpYy5mYXN0U3BsaWNlKGUsaSksLS1pLC0tbTtlbHNle2lmKCF0Ll9mbGFncy5zcGFyc2UmJnZvaWQgMD09PWwudmFsdWUpe2lmKGYucHVzaChyKFwiYXJyYXkuc3BhcnNlXCIse2tleTpnLHBhdGg6eSxwb3M6aSx2YWx1ZTp2b2lkIDB9LHMubG9jYWxpemUoeSkpKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7Y29udGludWV9ZVtpXT1sLnZhbHVlfWNvbnRpbnVlfWlmKCF0LiRfdGVybXMuaXRlbXMubGVuZ3RoKXtpZihmLnB1c2gocihcImFycmF5Lm9yZGVyZWRMZW5ndGhcIix7cG9zOmksbGltaXQ6dC4kX3Rlcm1zLm9yZGVyZWQubGVuZ3RofSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjticmVha319Y29uc3Qgdj1bXTtsZXQgXz1vLmxlbmd0aDtmb3IobGV0IGE9MDthPF87KythKXtjb25zdCBsPXMubG9jYWxpemUoeSxiLG9bYV0pO2wuc25hcHNob3QoKTtjb25zdCB1PW9bYV0uJF92YWxpZGF0ZShoLGwsbik7aWYodlthXT11LCF1LmVycm9ycyl7aWYoZVtpXT11LnZhbHVlLHA9ITAsYy5mYXN0U3BsaWNlKG8sYSksLS1hLC0tXywhdC5fZmxhZ3Muc3BhcnNlJiZ2b2lkIDA9PT11LnZhbHVlJiYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSkpcmV0dXJuIGY7YnJlYWt9bC5yZXN0b3JlKCl9aWYocCljb250aW51ZTtjb25zdCB3PW4uc3RyaXBVbmtub3duJiYhIW4uc3RyaXBVbmtub3duLmFycmF5c3x8ITE7Xz1sLmxlbmd0aDtmb3IoY29uc3QgYSBvZiBsKXtsZXQgbDtjb25zdCB1PW8uaW5kZXhPZihhKTtpZigtMSE9PXUpbD12W3VdO2Vsc2V7Y29uc3Qgbz1zLmxvY2FsaXplKHksYixhKTtpZihvLnNuYXBzaG90KCksbD1hLiRfdmFsaWRhdGUoaCxvLG4pLCFsLmVycm9ycyl7XCJzdHJpcFwiPT09YS5fZmxhZ3MucmVzdWx0PyhjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tKTp0Ll9mbGFncy5zcGFyc2V8fHZvaWQgMCE9PWwudmFsdWU/ZVtpXT1sLnZhbHVlOihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksZD0hMCkscD0hMDticmVha31vLnJlc3RvcmUoKX1pZigxPT09Xyl7aWYodyl7Yy5mYXN0U3BsaWNlKGUsaSksLS1pLC0tbSxwPSEwO2JyZWFrfWlmKGYucHVzaCguLi5sLmVycm9ycyksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Q9ITA7YnJlYWt9fWlmKCFkJiYodC4kX3Rlcm1zLl9pbmNsdXNpb25zLmxlbmd0aCYmIXApKXtpZih3KXtjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tO2NvbnRpbnVlfWlmKGYucHVzaChyKFwiYXJyYXkuaW5jbHVkZXNcIix7cG9zOmksdmFsdWU6aH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZn19cmV0dXJuIG8ubGVuZ3RoJiZjLmZpbGxNaXNzZWRFcnJvcnModCxmLG8sZSxzLG4pLGEubGVuZ3RoJiZjLmZpbGxPcmRlcmVkRXJyb3JzKHQsZixhLGUscyxuKSxmLmxlbmd0aD9mOmV9LHByaW9yaXR5OiEwLG1hbmlmZXN0OiExfSxsZW5ndGg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj1cIn0pfSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczpvfSk9PmkuY29tcGFyZShlLmxlbmd0aCxyLG4pP2U6dC5lcnJvcihcImFycmF5LlwiK3Mse2xpbWl0Om8ubGltaXQsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwibGltaXRcIixyZWY6ITAsYXNzZXJ0OmkubGltaXQsbWVzc2FnZTpcIm11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCJ9XX0sbWF4OnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWF4XCIsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8PVwifSl9fSxtaW46e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtaW5cIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj49XCJ9KX19LG9yZGVyZWQ6e21ldGhvZCguLi5lKXtpLnZlcmlmeUZsYXQoZSxcIm9yZGVyZWRcIik7Y29uc3QgdD10aGlzLiRfYWRkUnVsZShcIml0ZW1zXCIpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBzPWkudHJ5V2l0aFBhdGgoKCk9PnRoaXMuJF9jb21waWxlKGVbcl0pLHIse2FwcGVuZDohMH0pO2MudmFsaWRhdGVTaW5nbGUocyx0KSx0LiRfbXV0YXRlUmVnaXN0ZXIocyksdC4kX3Rlcm1zLm9yZGVyZWQucHVzaChzKX1yZXR1cm4gdC4kX211dGF0ZVJlYnVpbGQoKX19LHNpbmdsZTp7bWV0aG9kKGUpe2NvbnN0IHQ9dm9pZCAwPT09ZXx8ISFlO3JldHVybiBzKCF0fHwhdGhpcy5fZmxhZ3MuX2FycmF5SXRlbXMsXCJDYW5ub3Qgc3BlY2lmeSBzaW5nbGUgcnVsZSB3aGVuIGFycmF5IGhhcyBhcnJheSBpdGVtc1wiKSx0aGlzLiRfc2V0RmxhZyhcInNpbmdsZVwiLHQpfX0sc29ydDp7bWV0aG9kKGU9e30pe2kuYXNzZXJ0T3B0aW9ucyhlLFtcImJ5XCIsXCJvcmRlclwiXSk7Y29uc3QgdD17b3JkZXI6ZS5vcmRlcnx8XCJhc2NlbmRpbmdcIn07cmV0dXJuIGUuYnkmJih0LmJ5PWwucmVmKGUuYnkse2FuY2VzdG9yOjB9KSxzKCF0LmJ5LmFuY2VzdG9yLFwiQ2Fubm90IHNvcnQgYnkgYW5jZXN0b3JcIikpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwic29ydFwiLGFyZ3M6e29wdGlvbnM6dH19KX0sdmFsaWRhdGUoZSx7ZXJyb3I6dCxzdGF0ZTpyLHByZWZzOnMsc2NoZW1hOm59LHtvcHRpb25zOm99KXtjb25zdHt2YWx1ZTphLGVycm9yczppfT1jLnNvcnQobixlLG8scixzKTtpZihpKXJldHVybiBpO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKWlmKGVbcl0hPT1hW3JdKXJldHVybiB0KFwiYXJyYXkuc29ydFwiLHtvcmRlcjpvLm9yZGVyLGJ5Om8uYnk/by5ieS5rZXk6XCJ2YWx1ZVwifSk7cmV0dXJuIGV9LGNvbnZlcnQ6ITB9LHNwYXJzZTp7bWV0aG9kKGUpe2NvbnN0IHQ9dm9pZCAwPT09ZXx8ISFlO3JldHVybiB0aGlzLl9mbGFncy5zcGFyc2U9PT10P3RoaXM6KHQ/dGhpcy5jbG9uZSgpOnRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIikpLiRfc2V0RmxhZyhcInNwYXJzZVwiLHQse2Nsb25lOiExfSl9fSx1bmlxdWU6e21ldGhvZChlLHQ9e30pe3MoIWV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiY29tcGFyYXRvciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcIiksaS5hc3NlcnRPcHRpb25zKHQsW1wiaWdub3JlVW5kZWZpbmVkXCIsXCJzZXBhcmF0b3JcIl0pO2NvbnN0IHI9e25hbWU6XCJ1bmlxdWVcIixhcmdzOntvcHRpb25zOnQsY29tcGFyYXRvcjplfX07aWYoZSlpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7Y29uc3Qgcz1pLmRlZmF1bHQodC5zZXBhcmF0b3IsXCIuXCIpO3IucGF0aD1zP2Uuc3BsaXQocyk6W2VdfWVsc2Ugci5jb21wYXJhdG9yPWU7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHIpfSx2YWxpZGF0ZShlLHtzdGF0ZTp0LGVycm9yOnIsc2NoZW1hOmF9LHtjb21wYXJhdG9yOmksb3B0aW9uczpsfSx7Y29tcGFyYXRvcjpjLHBhdGg6dX0pe2NvbnN0IGY9e3N0cmluZzpPYmplY3QuY3JlYXRlKG51bGwpLG51bWJlcjpPYmplY3QuY3JlYXRlKG51bGwpLHVuZGVmaW5lZDpPYmplY3QuY3JlYXRlKG51bGwpLGJvb2xlYW46T2JqZWN0LmNyZWF0ZShudWxsKSxvYmplY3Q6bmV3IE1hcCxmdW5jdGlvbjpuZXcgTWFwLGN1c3RvbTpuZXcgTWFwfSxtPWN8fG4saD1sLmlnbm9yZVVuZGVmaW5lZDtmb3IobGV0IG49MDtuPGUubGVuZ3RoOysrbil7Y29uc3QgYT11P28oZVtuXSx1KTplW25dLGw9Yz9mLmN1c3RvbTpmW3R5cGVvZiBhXTtpZihzKGwsXCJGYWlsZWQgdG8gZmluZCB1bmlxdWUgbWFwIGNvbnRhaW5lciBmb3IgdHlwZVwiLHR5cGVvZiBhKSxsIGluc3RhbmNlb2YgTWFwKXtjb25zdCBzPWwuZW50cmllcygpO2xldCBvO2Zvcig7IShvPXMubmV4dCgpKS5kb25lOylpZihtKG8udmFsdWVbMF0sYSkpe2NvbnN0IHM9dC5sb2NhbGl6ZShbLi4udC5wYXRoLG5dLFtlLC4uLnQuYW5jZXN0b3JzXSksYT17cG9zOm4sdmFsdWU6ZVtuXSxkdXBlUG9zOm8udmFsdWVbMV0sZHVwZVZhbHVlOmVbby52YWx1ZVsxXV19O3JldHVybiB1JiYoYS5wYXRoPWkpLHIoXCJhcnJheS51bmlxdWVcIixhLHMpfWwuc2V0KGEsbil9ZWxzZXtpZigoIWh8fHZvaWQgMCE9PWEpJiZ2b2lkIDAhPT1sW2FdKXtjb25zdCBzPXtwb3M6bix2YWx1ZTplW25dLGR1cGVQb3M6bFthXSxkdXBlVmFsdWU6ZVtsW2FdXX07cmV0dXJuIHUmJihzLnBhdGg9aSkscihcImFycmF5LnVuaXF1ZVwiLHMsdC5sb2NhbGl6ZShbLi4udC5wYXRoLG5dLFtlLC4uLnQuYW5jZXN0b3JzXSkpfWxbYV09bn19cmV0dXJuIGV9LGFyZ3M6W1wiY29tcGFyYXRvclwiLFwib3B0aW9uc1wiXSxtdWx0aTohMH19LGNhc3Q6e3NldDp7ZnJvbTpBcnJheS5pc0FycmF5LHRvOihlLHQpPT5uZXcgU2V0KGUpfX0scmVidWlsZChlKXtlLiRfdGVybXMuX2luY2x1c2lvbnM9W10sZS4kX3Rlcm1zLl9leGNsdXNpb25zPVtdLGUuJF90ZXJtcy5fcmVxdWlyZWRzPVtdO2Zvcihjb25zdCB0IG9mIGUuJF90ZXJtcy5pdGVtcyljLnZhbGlkYXRlU2luZ2xlKHQsZSksXCJyZXF1aXJlZFwiPT09dC5fZmxhZ3MucHJlc2VuY2U/ZS4kX3Rlcm1zLl9yZXF1aXJlZHMucHVzaCh0KTpcImZvcmJpZGRlblwiPT09dC5fZmxhZ3MucHJlc2VuY2U/ZS4kX3Rlcm1zLl9leGNsdXNpb25zLnB1c2godCk6ZS4kX3Rlcm1zLl9pbmNsdXNpb25zLnB1c2godCk7Zm9yKGNvbnN0IHQgb2YgZS4kX3Rlcm1zLm9yZGVyZWQpYy52YWxpZGF0ZVNpbmdsZSh0LGUpfSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0Lml0ZW1zJiYoZT1lLml0ZW1zKC4uLnQuaXRlbXMpKSx0Lm9yZGVyZWQmJihlPWUub3JkZXJlZCguLi50Lm9yZGVyZWQpKSxlKX0sbWVzc2FnZXM6e1wiYXJyYXkuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGFuIGFycmF5XCIsXCJhcnJheS5leGNsdWRlc1wiOlwie3sjbGFiZWx9fSBjb250YWlucyBhbiBleGNsdWRlZCB2YWx1ZVwiLFwiYXJyYXkuaGFzS25vd25cIjone3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSByZXF1aXJlZCBtYXRjaCBmb3IgdHlwZSBcInsjcGF0dGVybkxhYmVsfVwiJyxcImFycmF5Lmhhc1Vua25vd25cIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgcmVxdWlyZWQgbWF0Y2hcIixcImFycmF5LmluY2x1ZGVzXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgYWxsb3dlZCB0eXBlc1wiLFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEJvdGhcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyNrbm93bk1pc3Nlc319IGFuZCB7eyN1bmtub3duTWlzc2VzfX0gb3RoZXIgcmVxdWlyZWQgdmFsdWUocylcIixcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRLbm93bnNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyNrbm93bk1pc3Nlc319XCIsXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkVW5rbm93bnNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgY29udGFpbiB7eyN1bmtub3duTWlzc2VzfX0gcmVxdWlyZWQgdmFsdWUocylcIixcImFycmF5Lmxlbmd0aFwiOlwie3sjbGFiZWx9fSBtdXN0IGNvbnRhaW4ge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkubWF4XCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBsZXNzIHRoYW4gb3IgZXF1YWwgdG8ge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkubWluXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBsZWFzdCB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5vcmRlcmVkTGVuZ3RoXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhdCBtb3N0IHt7I2xpbWl0fX0gaXRlbXNcIixcImFycmF5LnNvcnRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBzb3J0ZWQgaW4geyNvcmRlcn0gb3JkZXIgYnkge3sjYnl9fVwiLFwiYXJyYXkuc29ydC5taXNtYXRjaGluZ1wiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgc29ydGVkIGR1ZSB0byBtaXNtYXRjaGluZyB0eXBlc1wiLFwiYXJyYXkuc29ydC51bnN1cHBvcnRlZFwiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgc29ydGVkIGR1ZSB0byB1bnN1cHBvcnRlZCB0eXBlIHsjdHlwZX1cIixcImFycmF5LnNwYXJzZVwiOlwie3sjbGFiZWx9fSBtdXN0IG5vdCBiZSBhIHNwYXJzZSBhcnJheSBpdGVtXCIsXCJhcnJheS51bmlxdWVcIjpcInt7I2xhYmVsfX0gY29udGFpbnMgYSBkdXBsaWNhdGUgdmFsdWVcIn19KSxjLmZpbGxNaXNzZWRFcnJvcnM9ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2NvbnN0IGE9W107bGV0IGk9MDtmb3IoY29uc3QgZSBvZiByKXtjb25zdCB0PWUuX2ZsYWdzLmxhYmVsO3Q/YS5wdXNoKHQpOisraX1hLmxlbmd0aD9pP3QucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkQm90aFwiLHMse2tub3duTWlzc2VzOmEsdW5rbm93bk1pc3NlczppfSxuLG8pKTp0LnB1c2goZS4kX2NyZWF0ZUVycm9yKFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEtub3duc1wiLHMse2tub3duTWlzc2VzOmF9LG4sbykpOnQucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkVW5rbm93bnNcIixzLHt1bmtub3duTWlzc2VzOml9LG4sbykpfSxjLmZpbGxPcmRlcmVkRXJyb3JzPWZ1bmN0aW9uKGUsdCxyLHMsbixvKXtjb25zdCBhPVtdO2Zvcihjb25zdCBlIG9mIHIpXCJyZXF1aXJlZFwiPT09ZS5fZmxhZ3MucHJlc2VuY2UmJmEucHVzaChlKTthLmxlbmd0aCYmYy5maWxsTWlzc2VkRXJyb3JzKGUsdCxhLHMsbixvKX0sYy5mYXN0U3BsaWNlPWZ1bmN0aW9uKGUsdCl7bGV0IHI9dDtmb3IoO3I8ZS5sZW5ndGg7KWVbcisrXT1lW3JdOy0tZS5sZW5ndGh9LGMudmFsaWRhdGVTaW5nbGU9ZnVuY3Rpb24oZSx0KXsoXCJhcnJheVwiPT09ZS50eXBlfHxlLl9mbGFncy5fYXJyYXlJdGVtcykmJihzKCF0Ll9mbGFncy5zaW5nbGUsXCJDYW5ub3Qgc3BlY2lmeSBhcnJheSBpdGVtIHdpdGggc2luZ2xlIHJ1bGUgZW5hYmxlZFwiKSx0LiRfc2V0RmxhZyhcIl9hcnJheUl0ZW1zXCIsITAse2Nsb25lOiExfSkpfSxjLnNvcnQ9ZnVuY3Rpb24oZSx0LHIscyxuKXtjb25zdCBvPVwiYXNjZW5kaW5nXCI9PT1yLm9yZGVyPzE6LTEsYT0tMSpvLGk9byxsPShsLHUpPT57bGV0IGY9Yy5jb21wYXJlKGwsdSxhLGkpO2lmKG51bGwhPT1mKXJldHVybiBmO2lmKHIuYnkmJihsPXIuYnkucmVzb2x2ZShsLHMsbiksdT1yLmJ5LnJlc29sdmUodSxzLG4pKSxmPWMuY29tcGFyZShsLHUsYSxpKSxudWxsIT09ZilyZXR1cm4gZjtjb25zdCBtPXR5cGVvZiBsO2lmKG0hPT10eXBlb2YgdSl0aHJvdyBlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5zb3J0Lm1pc21hdGNoaW5nXCIsdCxudWxsLHMsbik7aWYoXCJudW1iZXJcIiE9PW0mJlwic3RyaW5nXCIhPT1tKXRocm93IGUuJF9jcmVhdGVFcnJvcihcImFycmF5LnNvcnQudW5zdXBwb3J0ZWRcIix0LHt0eXBlOm19LHMsbik7cmV0dXJuXCJudW1iZXJcIj09PW0/KGwtdSkqbzpsPHU/YTppfTt0cnl7cmV0dXJue3ZhbHVlOnQuc2xpY2UoKS5zb3J0KGwpfX1jYXRjaChlKXtyZXR1cm57ZXJyb3JzOmV9fX0sYy5jb21wYXJlPWZ1bmN0aW9uKGUsdCxyLHMpe3JldHVybiBlPT09dD8wOnZvaWQgMD09PWU/MTp2b2lkIDA9PT10Py0xOm51bGw9PT1lP3M6bnVsbD09PXQ/cjpudWxsfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9cigyMSksaT17aXNCb29sOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZX19O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImJvb2xlYW5cIixmbGFnczp7c2Vuc2l0aXZlOntkZWZhdWx0OiExfX0sdGVybXM6e2ZhbHN5Ontpbml0Om51bGwsbWFuaWZlc3Q6XCJ2YWx1ZXNcIn0sdHJ1dGh5Ontpbml0Om51bGwsbWFuaWZlc3Q6XCJ2YWx1ZXNcIn19LGNvZXJjZShlLHtzY2hlbWE6dH0pe2lmKFwiYm9vbGVhblwiIT10eXBlb2YgZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpe2NvbnN0IHI9dC5fZmxhZ3Muc2Vuc2l0aXZlP2U6ZS50b0xvd2VyQ2FzZSgpO2U9XCJ0cnVlXCI9PT1yfHxcImZhbHNlXCIhPT1yJiZlfXJldHVyblwiYm9vbGVhblwiIT10eXBlb2YgZSYmKGU9dC4kX3Rlcm1zLnRydXRoeSYmdC4kX3Rlcm1zLnRydXRoeS5oYXMoZSxudWxsLG51bGwsIXQuX2ZsYWdzLnNlbnNpdGl2ZSl8fCghdC4kX3Rlcm1zLmZhbHN5fHwhdC4kX3Rlcm1zLmZhbHN5LmhhcyhlLG51bGwsbnVsbCwhdC5fZmxhZ3Muc2Vuc2l0aXZlKSkmJmUpLHt2YWx1ZTplfX19LHZhbGlkYXRlKGUse2Vycm9yOnR9KXtpZihcImJvb2xlYW5cIiE9dHlwZW9mIGUpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnQoXCJib29sZWFuLmJhc2VcIil9fSxydWxlczp7dHJ1dGh5OnttZXRob2QoLi4uZSl7by52ZXJpZnlGbGF0KGUsXCJ0cnV0aHlcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7dC4kX3Rlcm1zLnRydXRoeT10LiRfdGVybXMudHJ1dGh5fHxuZXcgYTtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lW3JdO3Modm9pZCAwIT09bixcIkNhbm5vdCBjYWxsIHRydXRoeSB3aXRoIHVuZGVmaW5lZFwiKSx0LiRfdGVybXMudHJ1dGh5LmFkZChuKX1yZXR1cm4gdH19LGZhbHN5OnttZXRob2QoLi4uZSl7by52ZXJpZnlGbGF0KGUsXCJmYWxzeVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMuZmFsc3k9dC4kX3Rlcm1zLmZhbHN5fHxuZXcgYTtmb3IobGV0IHI9MDtyPGUubGVuZ3RoOysrcil7Y29uc3Qgbj1lW3JdO3Modm9pZCAwIT09bixcIkNhbm5vdCBjYWxsIGZhbHN5IHdpdGggdW5kZWZpbmVkXCIpLHQuJF90ZXJtcy5mYWxzeS5hZGQobil9cmV0dXJuIHR9fSxzZW5zaXRpdmU6e21ldGhvZChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJzZW5zaXRpdmVcIixlKX19fSxjYXN0OntudW1iZXI6e2Zyb206aS5pc0Jvb2wsdG86KGUsdCk9PmU/MTowfSxzdHJpbmc6e2Zyb206aS5pc0Jvb2wsdG86KGUsdCk9PmU/XCJ0cnVlXCI6XCJmYWxzZVwifX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4odC50cnV0aHkmJihlPWUudHJ1dGh5KC4uLnQudHJ1dGh5KSksdC5mYWxzeSYmKGU9ZS5mYWxzeSguLi50LmZhbHN5KSksZSl9LG1lc3NhZ2VzOntcImJvb2xlYW4uYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgYm9vbGVhblwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDcpLGk9e2lzRGF0ZTpmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIERhdGV9fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJkYXRlXCIsY29lcmNlOntmcm9tOltcIm51bWJlclwiLFwic3RyaW5nXCJdLG1ldGhvZDooZSx7c2NoZW1hOnR9KT0+KHt2YWx1ZTppLnBhcnNlKGUsdC5fZmxhZ3MuZm9ybWF0KXx8ZX0pfSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyLHByZWZzOnN9KXtpZihlIGluc3RhbmNlb2YgRGF0ZSYmIWlzTmFOKGUuZ2V0VGltZSgpKSlyZXR1cm47Y29uc3Qgbj10Ll9mbGFncy5mb3JtYXQ7cmV0dXJuIHMuY29udmVydCYmbiYmXCJzdHJpbmdcIj09dHlwZW9mIGU/e3ZhbHVlOmUsZXJyb3JzOnIoXCJkYXRlLmZvcm1hdFwiLHtmb3JtYXQ6bn0pfTp7dmFsdWU6ZSxlcnJvcnM6cihcImRhdGUuYmFzZVwiKX19LHJ1bGVzOntjb21wYXJlOnttZXRob2Q6ITEsdmFsaWRhdGUoZSx0LHtkYXRlOnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOmF9KXtjb25zdCBpPVwibm93XCI9PT1yP0RhdGUubm93KCk6ci5nZXRUaW1lKCk7cmV0dXJuIG8uY29tcGFyZShlLmdldFRpbWUoKSxpLG4pP2U6dC5lcnJvcihcImRhdGUuXCIrcyx7bGltaXQ6YS5kYXRlLHZhbHVlOmV9KX0sYXJnczpbe25hbWU6XCJkYXRlXCIscmVmOiEwLG5vcm1hbGl6ZTplPT5cIm5vd1wiPT09ZT9lOmkucGFyc2UoZSksYXNzZXJ0OmU9Pm51bGwhPT1lLG1lc3NhZ2U6XCJtdXN0IGhhdmUgYSB2YWxpZCBkYXRlIGZvcm1hdFwifV19LGZvcm1hdDp7bWV0aG9kKGUpe3JldHVybiBzKFtcImlzb1wiLFwiamF2YXNjcmlwdFwiLFwidW5peFwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gZGF0ZSBmb3JtYXRcIixlKSx0aGlzLiRfc2V0RmxhZyhcImZvcm1hdFwiLGUpfX0sZ3JlYXRlcjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImdyZWF0ZXJcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7ZGF0ZTplfSxvcGVyYXRvcjpcIj5cIn0pfX0saXNvOnttZXRob2QoKXtyZXR1cm4gdGhpcy5mb3JtYXQoXCJpc29cIil9fSxsZXNzOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibGVzc1wiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPFwifSl9fSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7ZGF0ZTplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sdGltZXN0YW1wOnttZXRob2QoZT1cImphdmFzY3JpcHRcIil7cmV0dXJuIHMoW1wiamF2YXNjcmlwdFwiLFwidW5peFwiXS5pbmNsdWRlcyhlKSwnXCJ0eXBlXCIgbXVzdCBiZSBvbmUgb2YgXCJqYXZhc2NyaXB0LCB1bml4XCInKSx0aGlzLmZvcm1hdChlKX19fSxjYXN0OntudW1iZXI6e2Zyb206aS5pc0RhdGUsdG86KGUsdCk9PmUuZ2V0VGltZSgpfSxzdHJpbmc6e2Zyb206aS5pc0RhdGUsdG86KGUse3ByZWZzOnR9KT0+YS5kYXRlKGUsdCl9fSxtZXNzYWdlczp7XCJkYXRlLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGRhdGVcIixcImRhdGUuZm9ybWF0XCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBpbiB7bXNnKFwiZGF0ZS5mb3JtYXQuXCIgKyAjZm9ybWF0KSB8fCAjZm9ybWF0fSBmb3JtYXQnLFwiZGF0ZS5ncmVhdGVyXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5sZXNzXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBsZXNzIHRoYW4gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5tYXhcIjone3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBcInt7I2xpbWl0fX1cIicsXCJkYXRlLm1pblwiOid7eyNsYWJlbH19IG11c3QgYmUgbGFyZ2VyIHRoYW4gb3IgZXF1YWwgdG8gXCJ7eyNsaW1pdH19XCInLFwiZGF0ZS5mb3JtYXQuaXNvXCI6XCJJU08gODYwMSBkYXRlXCIsXCJkYXRlLmZvcm1hdC5qYXZhc2NyaXB0XCI6XCJ0aW1lc3RhbXAgb3IgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1wiLFwiZGF0ZS5mb3JtYXQudW5peFwiOlwidGltZXN0YW1wIG9yIG51bWJlciBvZiBzZWNvbmRzXCJ9fSksaS5wYXJzZT1mdW5jdGlvbihlLHQpe2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiBlO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYoaXNOYU4oZSl8fCFpc0Zpbml0ZShlKSkpcmV0dXJuIG51bGw7aWYoL15cXHMqJC8udGVzdChlKSlyZXR1cm4gbnVsbDtpZihcImlzb1wiPT09dClyZXR1cm4gby5pc0lzb0RhdGUoZSk/aS5kYXRlKGUudG9TdHJpbmcoKSk6bnVsbDtjb25zdCByPWU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJi9eWystXT9cXGQrKFxcLlxcZCspPyQvLnRlc3QoZSkmJihlPXBhcnNlRmxvYXQoZSkpLHQpe2lmKFwiamF2YXNjcmlwdFwiPT09dClyZXR1cm4gaS5kYXRlKDEqZSk7aWYoXCJ1bml4XCI9PT10KXJldHVybiBpLmRhdGUoMWUzKmUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiByKXJldHVybiBudWxsfXJldHVybiBpLmRhdGUoZSl9LGkuZGF0ZT1mdW5jdGlvbihlKXtjb25zdCB0PW5ldyBEYXRlKGUpO3JldHVybiBpc05hTih0LmdldFRpbWUoKSk/bnVsbDp0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjIpO2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImZ1bmN0aW9uXCIscHJvcGVydGllczp7dHlwZW9mOlwiZnVuY3Rpb25cIn0scnVsZXM6e2FyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTAsXCJuIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiYXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aD09PXI/ZTp0LmVycm9yKFwiZnVuY3Rpb24uYXJpdHlcIix7bjpyfSl9LGNsYXNzOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJjbGFzc1wiKX0sdmFsaWRhdGU6KGUsdCk9Pi9eXFxzKmNsYXNzXFxzLy50ZXN0KGUudG9TdHJpbmcoKSk/ZTp0LmVycm9yKFwiZnVuY3Rpb24uY2xhc3NcIix7dmFsdWU6ZX0pfSxtaW5Bcml0eTp7bWV0aG9kKGUpe3JldHVybiBzKE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPjAsXCJuIG11c3QgYmUgYSBzdHJpY3QgcG9zaXRpdmUgaW50ZWdlclwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pbkFyaXR5XCIsYXJnczp7bjplfX0pfSx2YWxpZGF0ZTooZSx0LHtuOnJ9KT0+ZS5sZW5ndGg+PXI/ZTp0LmVycm9yKFwiZnVuY3Rpb24ubWluQXJpdHlcIix7bjpyfSl9LG1heEFyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTAsXCJuIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWF4QXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aDw9cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5tYXhBcml0eVwiLHtuOnJ9KX19LG1lc3NhZ2VzOntcImZ1bmN0aW9uLmFyaXR5XCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBhbiBhcml0eSBvZiB7eyNufX1cIixcImZ1bmN0aW9uLmNsYXNzXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBjbGFzc1wiLFwiZnVuY3Rpb24ubWF4QXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IGxlc3NlciBvciBlcXVhbCB0byB7eyNufX1cIixcImZ1bmN0aW9uLm1pbkFyaXR5XCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBhbiBhcml0eSBncmVhdGVyIG9yIGVxdWFsIHRvIHt7I259fVwifX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMjApLGE9cig2KSxpPXt9O2UuZXhwb3J0cz1mdW5jdGlvbihlLHQscj17fSl7aWYocyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSxcIkludmFsaWQgZGVmYXVsdHMgdmFsdWU6IG11c3QgYmUgYW4gb2JqZWN0XCIpLHMoIXR8fCEwPT09dHx8XCJvYmplY3RcIj09dHlwZW9mIHQsXCJJbnZhbGlkIHNvdXJjZSB2YWx1ZTogbXVzdCBiZSB0cnVlLCBmYWxzeSBvciBhbiBvYmplY3RcIikscyhcIm9iamVjdFwiPT10eXBlb2YgcixcIkludmFsaWQgb3B0aW9uczogbXVzdCBiZSBhbiBvYmplY3RcIiksIXQpcmV0dXJuIG51bGw7aWYoci5zaGFsbG93KXJldHVybiBpLmFwcGx5VG9EZWZhdWx0c1dpdGhTaGFsbG93KGUsdCxyKTtjb25zdCBhPW4oZSk7aWYoITA9PT10KXJldHVybiBhO2NvbnN0IGw9dm9pZCAwIT09ci5udWxsT3ZlcnJpZGUmJnIubnVsbE92ZXJyaWRlO3JldHVybiBvKGEsdCx7bnVsbE92ZXJyaWRlOmwsbWVyZ2VBcnJheXM6ITF9KX0saS5hcHBseVRvRGVmYXVsdHNXaXRoU2hhbGxvdz1mdW5jdGlvbihlLHQscil7Y29uc3QgbD1yLnNoYWxsb3c7cyhBcnJheS5pc0FycmF5KGwpLFwiSW52YWxpZCBrZXlzXCIpO2NvbnN0IGM9bmV3IE1hcCx1PSEwPT09dD9udWxsOm5ldyBTZXQ7Zm9yKGxldCByIG9mIGwpe3I9QXJyYXkuaXNBcnJheShyKT9yOnIuc3BsaXQoXCIuXCIpO2NvbnN0IHM9YShlLHIpO3MmJlwib2JqZWN0XCI9PXR5cGVvZiBzP2Muc2V0KHMsdSYmYSh0LHIpfHxzKTp1JiZ1LmFkZChyKX1jb25zdCBmPW4oZSx7fSxjKTtpZighdSlyZXR1cm4gZjtmb3IoY29uc3QgZSBvZiB1KWkucmVhY2hDb3B5KGYsdCxlKTtyZXR1cm4gbyhmLHQse21lcmdlQXJyYXlzOiExLG51bGxPdmVycmlkZTohMX0pfSxpLnJlYWNoQ29weT1mdW5jdGlvbihlLHQscil7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoIShlIGluIHQpKXJldHVybjt0PXRbZV19Y29uc3Qgcz10O2xldCBuPWU7Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aC0xOysrZSl7Y29uc3QgdD1yW2VdO1wib2JqZWN0XCIhPXR5cGVvZiBuW3RdJiYoblt0XT17fSksbj1uW3RdfW5bcltyLmxlbmd0aC0xXV09c319LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj17fTt0LlNvcnRlcj1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX2l0ZW1zPVtdLHRoaXMubm9kZXM9W119YWRkKGUsdCl7Y29uc3Qgcj1bXS5jb25jYXQoKHQ9dHx8e30pLmJlZm9yZXx8W10pLG49W10uY29uY2F0KHQuYWZ0ZXJ8fFtdKSxvPXQuZ3JvdXB8fFwiP1wiLGE9dC5zb3J0fHwwO3MoIXIuaW5jbHVkZXMobyksXCJJdGVtIGNhbm5vdCBjb21lIGJlZm9yZSBpdHNlbGY6IFwiLmNvbmNhdChvKSkscyghci5pbmNsdWRlcyhcIj9cIiksXCJJdGVtIGNhbm5vdCBjb21lIGJlZm9yZSB1bmFzc29jaWF0ZWQgaXRlbXNcIikscyghbi5pbmNsdWRlcyhvKSxcIkl0ZW0gY2Fubm90IGNvbWUgYWZ0ZXIgaXRzZWxmOiBcIi5jb25jYXQobykpLHMoIW4uaW5jbHVkZXMoXCI/XCIpLFwiSXRlbSBjYW5ub3QgY29tZSBhZnRlciB1bmFzc29jaWF0ZWQgaXRlbXNcIiksQXJyYXkuaXNBcnJheShlKXx8KGU9W2VdKTtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPXtzZXE6dGhpcy5faXRlbXMubGVuZ3RoLHNvcnQ6YSxiZWZvcmU6cixhZnRlcjpuLGdyb3VwOm8sbm9kZTp0fTt0aGlzLl9pdGVtcy5wdXNoKGUpfWNvbnN0IGk9dGhpcy5fc29ydCgpO3JldHVybiBzKGksXCJpdGVtXCIsXCI/XCIhPT1vP1wiYWRkZWQgaW50byBncm91cCBcIi5jb25jYXQobyk6XCJcIixcImNyZWF0ZWQgYSBkZXBlbmRlbmNpZXMgZXJyb3JcIiksdGhpcy5ub2Rlc31tZXJnZShlKXtBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pO2Zvcihjb25zdCB0IG9mIGUpaWYodClmb3IoY29uc3QgZSBvZiB0Ll9pdGVtcyl0aGlzLl9pdGVtcy5wdXNoKE9iamVjdC5hc3NpZ24oe30sZSkpO3RoaXMuX2l0ZW1zLnNvcnQobi5tZXJnZVNvcnQpO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl0aGlzLl9pdGVtc1tlXS5zZXE9ZTtjb25zdCB0PXRoaXMuX3NvcnQoKTtyZXR1cm4gcyh0LFwibWVyZ2UgY3JlYXRlZCBhIGRlcGVuZGVuY2llcyBlcnJvclwiKSx0aGlzLm5vZGVzfV9zb3J0KCl7Y29uc3QgZT17fSx0PU9iamVjdC5jcmVhdGUobnVsbCkscj1PYmplY3QuY3JlYXRlKG51bGwpO2Zvcihjb25zdCBzIG9mIHRoaXMuX2l0ZW1zKXtjb25zdCBuPXMuc2VxLG89cy5ncm91cDtyW29dPXJbb118fFtdLHJbb10ucHVzaChuKSxlW25dPXMuYmVmb3JlO2Zvcihjb25zdCBlIG9mIHMuYWZ0ZXIpdFtlXT10W2VdfHxbXSx0W2VdLnB1c2gobil9Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcz1bXTtmb3IoY29uc3QgbiBpbiBlW3RdKXtjb25zdCBvPWVbdF1bbl07cltvXT1yW29dfHxbXSxzLnB1c2goLi4ucltvXSl9ZVt0XT1zfWZvcihjb25zdCBzIGluIHQpaWYocltzXSlmb3IoY29uc3QgbiBvZiByW3NdKWVbbl0ucHVzaCguLi50W3NdKTtjb25zdCBzPXt9O2Zvcihjb25zdCB0IGluIGUpe2NvbnN0IHI9ZVt0XTtmb3IoY29uc3QgZSBvZiByKXNbZV09c1tlXXx8W10sc1tlXS5wdXNoKHQpfWNvbnN0IG49e30sbz1bXTtmb3IobGV0IGU9MDtlPHRoaXMuX2l0ZW1zLmxlbmd0aDsrK2Upe2xldCB0PWU7aWYoc1tlXSl7dD1udWxsO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl7aWYoITA9PT1uW2VdKWNvbnRpbnVlO3NbZV18fChzW2VdPVtdKTtjb25zdCByPXNbZV0ubGVuZ3RoO2xldCBvPTA7Zm9yKGxldCB0PTA7dDxyOysrdCluW3NbZV1bdF1dJiYrK287aWYobz09PXIpe3Q9ZTticmVha319fW51bGwhPT10JiYoblt0XT0hMCxvLnB1c2godCkpfWlmKG8ubGVuZ3RoIT09dGhpcy5faXRlbXMubGVuZ3RoKXJldHVybiExO2NvbnN0IGE9e307Zm9yKGNvbnN0IGUgb2YgdGhpcy5faXRlbXMpYVtlLnNlcV09ZTt0aGlzLl9pdGVtcz1bXSx0aGlzLm5vZGVzPVtdO2Zvcihjb25zdCBlIG9mIG8pe2NvbnN0IHQ9YVtlXTt0aGlzLm5vZGVzLnB1c2godC5ub2RlKSx0aGlzLl9pdGVtcy5wdXNoKHQpfXJldHVybiEwfX0sbi5tZXJnZVNvcnQ9KGUsdCk9PmUuc29ydD09PXQuc29ydD8wOmUuc29ydDx0LnNvcnQ/LTE6MX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9cig4KSxpPXIoNCksbD17fTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJsaW5rXCIscHJvcGVydGllczp7c2NoZW1hQ2hhaW46ITB9LHRlcm1zOntsaW5rOntpbml0Om51bGwsbWFuaWZlc3Q6XCJzaW5nbGVcIixyZWdpc3RlcjohMX19LGFyZ3M6KGUsdCk9PmUucmVmKHQpLHZhbGlkYXRlKGUse3NjaGVtYTp0LHN0YXRlOnIscHJlZnM6bn0pe3ModC4kX3Rlcm1zLmxpbmssXCJVbmluaXRpYWxpemVkIGxpbmsgc2NoZW1hXCIpO2NvbnN0IG89bC5nZW5lcmF0ZSh0LGUscixuKSxhPXQuJF90ZXJtcy5saW5rWzBdLnJlZjtyZXR1cm4gby4kX3ZhbGlkYXRlKGUsci5uZXN0KG8sXCJsaW5rOlwiLmNvbmNhdChhLmRpc3BsYXksXCI6XCIpLmNvbmNhdChvLnR5cGUpKSxuKX0sZ2VuZXJhdGU6KGUsdCxyLHMpPT5sLmdlbmVyYXRlKGUsdCxyLHMpLHJ1bGVzOntyZWY6e21ldGhvZChlKXtzKCF0aGlzLiRfdGVybXMubGluayxcIkNhbm5vdCByZWluaXRpYWxpemUgc2NoZW1hXCIpLGU9YS5yZWYoZSkscyhcInZhbHVlXCI9PT1lLnR5cGV8fFwibG9jYWxcIj09PWUudHlwZSxcIkludmFsaWQgcmVmZXJlbmNlIHR5cGU6XCIsZS50eXBlKSxzKFwibG9jYWxcIj09PWUudHlwZXx8XCJyb290XCI9PT1lLmFuY2VzdG9yfHxlLmFuY2VzdG9yPjAsXCJMaW5rIGNhbm5vdCByZWZlcmVuY2UgaXRzZWxmXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0LiRfdGVybXMubGluaz1be3JlZjplfV0sdH19LHJlbGF0aXZlOnttZXRob2QoZT0hMCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwicmVsYXRpdmVcIixlKX19fSxvdmVycmlkZXM6e2NvbmNhdChlKXtzKHRoaXMuJF90ZXJtcy5saW5rLFwiVW5pbml0aWFsaXplZCBsaW5rIHNjaGVtYVwiKSxzKG8uaXNTY2hlbWEoZSksXCJJbnZhbGlkIHNjaGVtYSBvYmplY3RcIikscyhcImxpbmtcIiE9PWUudHlwZSxcIkNhbm5vdCBtZXJnZSB0eXBlIGxpbmsgd2l0aCBhbm90aGVyIGxpbmtcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuJF90ZXJtcy53aGVuc3x8KHQuJF90ZXJtcy53aGVucz1bXSksdC4kX3Rlcm1zLndoZW5zLnB1c2goe2NvbmNhdDplfSksdC4kX211dGF0ZVJlYnVpbGQoKX19LG1hbmlmZXN0OntidWlsZDooZSx0KT0+KHModC5saW5rLFwiSW52YWxpZCBsaW5rIGRlc2NyaXB0aW9uIG1pc3NpbmcgbGlua1wiKSxlLnJlZih0LmxpbmspKX19KSxsLmdlbmVyYXRlPWZ1bmN0aW9uKGUsdCxyLHMpe2xldCBuPXIubWFpbnN0YXkubGlua3MuZ2V0KGUpO2lmKG4pcmV0dXJuIG4uX2dlbmVyYXRlKHQscixzKS5zY2hlbWE7Y29uc3Qgbz1lLiRfdGVybXMubGlua1swXS5yZWYse3BlcnNwZWN0aXZlOmEscGF0aDppfT1sLnBlcnNwZWN0aXZlKG8scik7bC5hc3NlcnQoYSxcIndoaWNoIGlzIG91dHNpZGUgb2Ygc2NoZW1hIGJvdW5kYXJpZXNcIixvLGUscixzKTt0cnl7bj1pLmxlbmd0aD9hLiRfcmVhY2goaSk6YX1jYXRjaCh0KXtsLmFzc2VydCghMSxcInRvIG5vbi1leGlzdGluZyBzY2hlbWFcIixvLGUscixzKX1yZXR1cm4gbC5hc3NlcnQoXCJsaW5rXCIhPT1uLnR5cGUsXCJ3aGljaCBpcyBhbm90aGVyIGxpbmtcIixvLGUscixzKSxlLl9mbGFncy5yZWxhdGl2ZXx8ci5tYWluc3RheS5saW5rcy5zZXQoZSxuKSxuLl9nZW5lcmF0ZSh0LHIscykuc2NoZW1hfSxsLnBlcnNwZWN0aXZlPWZ1bmN0aW9uKGUsdCl7aWYoXCJsb2NhbFwiPT09ZS50eXBlKXtmb3IoY29uc3R7c2NoZW1hOnIsa2V5OnN9b2YgdC5zY2hlbWFzKXtpZigoci5fZmxhZ3MuaWR8fHMpPT09ZS5wYXRoWzBdKXJldHVybntwZXJzcGVjdGl2ZTpyLHBhdGg6ZS5wYXRoLnNsaWNlKDEpfTtpZihyLiRfdGVybXMuc2hhcmVkKWZvcihjb25zdCB0IG9mIHIuJF90ZXJtcy5zaGFyZWQpaWYodC5fZmxhZ3MuaWQ9PT1lLnBhdGhbMF0pcmV0dXJue3BlcnNwZWN0aXZlOnQscGF0aDplLnBhdGguc2xpY2UoMSl9fXJldHVybntwZXJzcGVjdGl2ZTpudWxsLHBhdGg6bnVsbH19cmV0dXJuXCJyb290XCI9PT1lLmFuY2VzdG9yP3twZXJzcGVjdGl2ZTp0LnNjaGVtYXNbdC5zY2hlbWFzLmxlbmd0aC0xXS5zY2hlbWEscGF0aDplLnBhdGh9OntwZXJzcGVjdGl2ZTp0LnNjaGVtYXNbZS5hbmNlc3Rvcl0mJnQuc2NoZW1hc1tlLmFuY2VzdG9yXS5zY2hlbWEscGF0aDplLnBhdGh9fSxsLmFzc2VydD1mdW5jdGlvbihlLHQscixuLG8sYSl7ZXx8cyghMSwnXCInLmNvbmNhdChpLmxhYmVsKG4uX2ZsYWdzLG8sYSksJ1wiIGNvbnRhaW5zIGxpbmsgcmVmZXJlbmNlIFwiJykuY29uY2F0KHIuZGlzcGxheSwnXCIgJykuY29uY2F0KHQpKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXtudW1iZXJSeDovXlxccypbKy1dPyg/Oig/OlxcZCsoPzpcXC5cXGQqKT8pfCg/OlxcLlxcZCspKSg/OmUoWystXT9cXGQrKSk/XFxzKiQvaSxwcmVjaXNpb25SeDovKD86XFwuKFxcZCspKT8oPzpbZUVdKFsrLV0/XFxkKykpPyQvfTtlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJudW1iZXJcIixmbGFnczp7dW5zYWZlOntkZWZhdWx0OiExfX0sY29lcmNlOntmcm9tOlwic3RyaW5nXCIsbWV0aG9kKGUse3NjaGVtYTp0LGVycm9yOnJ9KXtjb25zdCBzPWUubWF0Y2goYS5udW1iZXJSeCk7aWYoIXMpcmV0dXJuO2U9ZS50cmltKCk7Y29uc3Qgbj17dmFsdWU6cGFyc2VGbG9hdChlKX07aWYoMD09PW4udmFsdWUmJihuLnZhbHVlPTApLCF0Ll9mbGFncy51bnNhZmUpaWYoZS5tYXRjaCgvZS9pKSl7aWYoYS5ub3JtYWxpemVFeHBvbmVudChcIlwiLmNvbmNhdChuLnZhbHVlL01hdGgucG93KDEwLHNbMV0pLFwiZVwiKS5jb25jYXQoc1sxXSkpIT09YS5ub3JtYWxpemVFeHBvbmVudChlKSlyZXR1cm4gbi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIiksbn1lbHNle2NvbnN0IHQ9bi52YWx1ZS50b1N0cmluZygpO2lmKHQubWF0Y2goL2UvaSkpcmV0dXJuIG47aWYodCE9PWEubm9ybWFsaXplRGVjaW1hbChlKSlyZXR1cm4gbi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIiksbn1yZXR1cm4gbn19LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIscHJlZnM6c30pe2lmKGU9PT0xLzB8fGU9PT0tMS8wKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwibnVtYmVyLmluZmluaXR5XCIpfTtpZighby5pc051bWJlcihlKSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6cihcIm51bWJlci5iYXNlXCIpfTtjb25zdCBuPXt2YWx1ZTplfTtpZihzLmNvbnZlcnQpe2NvbnN0IGU9dC4kX2dldFJ1bGUoXCJwcmVjaXNpb25cIik7aWYoZSl7Y29uc3QgdD1NYXRoLnBvdygxMCxlLmFyZ3MubGltaXQpO24udmFsdWU9TWF0aC5yb3VuZChuLnZhbHVlKnQpL3R9fXJldHVybiAwPT09bi52YWx1ZSYmKG4udmFsdWU9MCksIXQuX2ZsYWdzLnVuc2FmZSYmKGU+TnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJ8fGU8TnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIpJiYobi5lcnJvcnM9cihcIm51bWJlci51bnNhZmVcIikpLG59LHJ1bGVzOntjb21wYXJlOnttZXRob2Q6ITEsdmFsaWRhdGU6KGUsdCx7bGltaXQ6cn0se25hbWU6cyxvcGVyYXRvcjpuLGFyZ3M6YX0pPT5vLmNvbXBhcmUoZSxyLG4pP2U6dC5lcnJvcihcIm51bWJlci5cIitzLHtsaW1pdDphLmxpbWl0LHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpvLmlzTnVtYmVyLG1lc3NhZ2U6XCJtdXN0IGJlIGEgbnVtYmVyXCJ9XX0sZ3JlYXRlcjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImdyZWF0ZXJcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+XCJ9KX19LGludGVnZXI6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImludGVnZXJcIil9LHZhbGlkYXRlOihlLHQpPT5NYXRoLnRydW5jKGUpLWU9PTA/ZTp0LmVycm9yKFwibnVtYmVyLmludGVnZXJcIil9LGxlc3M6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZXNzXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPFwifSl9fSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8PVwifSl9fSxtaW46e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtaW5cIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSxtdWx0aXBsZTp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm11bHRpcGxlXCIsYXJnczp7YmFzZTplfX0pfSx2YWxpZGF0ZTooZSx0LHtiYXNlOnJ9LHMpPT5lJXI9PTA/ZTp0LmVycm9yKFwibnVtYmVyLm11bHRpcGxlXCIse211bHRpcGxlOnMuYXJncy5iYXNlLHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImJhc2VcIixyZWY6ITAsYXNzZXJ0OmU9PlwibnVtYmVyXCI9PXR5cGVvZiBlJiZpc0Zpbml0ZShlKSYmZT4wLG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCJ9XSxtdWx0aTohMH0sbmVnYXRpdmU6e21ldGhvZCgpe3JldHVybiB0aGlzLnNpZ24oXCJuZWdhdGl2ZVwiKX19LHBvcnQ6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInBvcnRcIil9LHZhbGlkYXRlOihlLHQpPT5OdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCYmZTw9NjU1MzU/ZTp0LmVycm9yKFwibnVtYmVyLnBvcnRcIil9LHBvc2l0aXZlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5zaWduKFwicG9zaXRpdmVcIil9fSxwcmVjaXNpb246e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSxcImxpbWl0IG11c3QgYmUgYW4gaW50ZWdlclwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInByZWNpc2lvblwiLGFyZ3M6e2xpbWl0OmV9fSl9LHZhbGlkYXRlKGUsdCx7bGltaXQ6cn0pe2NvbnN0IHM9ZS50b1N0cmluZygpLm1hdGNoKGEucHJlY2lzaW9uUngpO3JldHVybiBNYXRoLm1heCgoc1sxXT9zWzFdLmxlbmd0aDowKS0oc1syXT9wYXJzZUludChzWzJdLDEwKTowKSwwKTw9cj9lOnQuZXJyb3IoXCJudW1iZXIucHJlY2lzaW9uXCIse2xpbWl0OnIsdmFsdWU6ZX0pfSxjb252ZXJ0OiEwfSxzaWduOnttZXRob2QoZSl7cmV0dXJuIHMoW1wibmVnYXRpdmVcIixcInBvc2l0aXZlXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBzaWduXCIsZSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJzaWduXCIsYXJnczp7c2lnbjplfX0pfSx2YWxpZGF0ZTooZSx0LHtzaWduOnJ9KT0+XCJuZWdhdGl2ZVwiPT09ciYmZTwwfHxcInBvc2l0aXZlXCI9PT1yJiZlPjA/ZTp0LmVycm9yKFwibnVtYmVyLlwiLmNvbmNhdChyKSl9LHVuc2FmZTp7bWV0aG9kKGU9ITApe3JldHVybiBzKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX3NldEZsYWcoXCJ1bnNhZmVcIixlKX19fSxjYXN0OntzdHJpbmc6e2Zyb206ZT0+XCJudW1iZXJcIj09dHlwZW9mIGUsdG86KGUsdCk9PmUudG9TdHJpbmcoKX19LG1lc3NhZ2VzOntcIm51bWJlci5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBudW1iZXJcIixcIm51bWJlci5ncmVhdGVyXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgZ3JlYXRlciB0aGFuIHt7I2xpbWl0fX1cIixcIm51bWJlci5pbmZpbml0eVwiOlwie3sjbGFiZWx9fSBjYW5ub3QgYmUgaW5maW5pdHlcIixcIm51bWJlci5pbnRlZ2VyXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYW4gaW50ZWdlclwiLFwibnVtYmVyLmxlc3NcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBsZXNzIHRoYW4ge3sjbGltaXR9fVwiLFwibnVtYmVyLm1heFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19XCIsXCJudW1iZXIubWluXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgbGFyZ2VyIHRoYW4gb3IgZXF1YWwgdG8ge3sjbGltaXR9fVwiLFwibnVtYmVyLm11bHRpcGxlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBtdWx0aXBsZSBvZiB7eyNtdWx0aXBsZX19XCIsXCJudW1iZXIubmVnYXRpdmVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG5lZ2F0aXZlIG51bWJlclwiLFwibnVtYmVyLnBvcnRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHBvcnRcIixcIm51bWJlci5wb3NpdGl2ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyXCIsXCJudW1iZXIucHJlY2lzaW9uXCI6XCJ7eyNsYWJlbH19IG11c3QgaGF2ZSBubyBtb3JlIHRoYW4ge3sjbGltaXR9fSBkZWNpbWFsIHBsYWNlc1wiLFwibnVtYmVyLnVuc2FmZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgc2FmZSBudW1iZXJcIn19KSxhLm5vcm1hbGl6ZUV4cG9uZW50PWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL0UvLFwiZVwiKS5yZXBsYWNlKC9cXC4oXFxkKlsxLTldKT8wK2UvLFwiLiQxZVwiKS5yZXBsYWNlKC9cXC5lLyxcImVcIikucmVwbGFjZSgvZVxcKy8sXCJlXCIpLnJlcGxhY2UoL15cXCsvLFwiXCIpLnJlcGxhY2UoL14oLT8pMCsoWzEtOV0pLyxcIiQxJDJcIil9LGEubm9ybWFsaXplRGVjaW1hbD1mdW5jdGlvbihlKXtyZXR1cm4oZT1lLnJlcGxhY2UoL15cXCsvLFwiXCIpLnJlcGxhY2UoL1xcLjArJC8sXCJcIikucmVwbGFjZSgvXigtPylcXC4oW15cXC5dKikkLyxcIiQxMC4kMlwiKS5yZXBsYWNlKC9eKC0/KTArKFsxLTldKS8sXCIkMSQyXCIpKS5pbmNsdWRlcyhcIi5cIikmJmUuZW5kc1dpdGgoXCIwXCIpJiYoZT1lLnJlcGxhY2UoLzArJC8sXCJcIikpLFwiLTBcIj09PWU/XCIwXCI6ZX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjIpO2UuZXhwb3J0cz1zLmV4dGVuZCh7dHlwZTpcIm9iamVjdFwiLGNhc3Q6e21hcDp7ZnJvbTplPT5lJiZcIm9iamVjdFwiPT10eXBlb2YgZSx0bzooZSx0KT0+bmV3IE1hcChPYmplY3QuZW50cmllcyhlKSl9fX0pfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKHM9cy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIscyl9cmV0dXJuIHJ9ZnVuY3Rpb24gbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9zKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7byhlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6cyhPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBvKGUsdCxyKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1jb25zdCBhPXIoMCksaT1yKDIzKSxsPXIoNDkpLGM9cig1MCksdT1yKDI3KSxmPXIoNTEpLG09cigyNiksaD1yKDMpLGQ9cigxKSxwPXt0bGRzOmYgaW5zdGFuY2VvZiBTZXQmJnt0bGRzOnthbGxvdzpmLGRlbnk6bnVsbH19LGJhc2U2NFJlZ2V4Ont0cnVlOnt0cnVlOi9eKD86W1xcd1xcLV17Mn1bXFx3XFwtXXsyfSkqKD86W1xcd1xcLV17Mn09PXxbXFx3XFwtXXszfT0pPyQvLGZhbHNlOi9eKD86W0EtWmEtejAtOStcXC9dezJ9W0EtWmEtejAtOStcXC9dezJ9KSooPzpbQS1aYS16MC05K1xcL117Mn09PXxbQS1aYS16MC05K1xcL117M309KT8kL30sZmFsc2U6e3RydWU6L14oPzpbXFx3XFwtXXsyfVtcXHdcXC1dezJ9KSooPzpbXFx3XFwtXXsyfSg9PSk/fFtcXHdcXC1dezN9PT8pPyQvLGZhbHNlOi9eKD86W0EtWmEtejAtOStcXC9dezJ9W0EtWmEtejAtOStcXC9dezJ9KSooPzpbQS1aYS16MC05K1xcL117Mn0oPT0pP3xbQS1aYS16MC05K1xcL117M309Pyk/JC99fSxkYXRhVXJpUmVnZXg6L15kYXRhOltcXHcrLi1dK1xcL1tcXHcrLi1dKzsoKGNoYXJzZXQ9W1xcdy1dK3xiYXNlNjQpLCk/KC4qKSQvLGhleFJlZ2V4Oi9eW2EtZjAtOV0rJC9pLGlwUmVnZXg6Yy5yZWdleCgpLnJlZ2V4LGlzb0R1cmF0aW9uUmVnZXg6L15QKD8hJCkoXFxkK1kpPyhcXGQrTSk/KFxcZCtXKT8oXFxkK0QpPyhUKD89XFxkKShcXGQrSCk/KFxcZCtNKT8oXFxkK1MpPyk/JC8sZ3VpZEJyYWNrZXRzOntcIntcIjpcIn1cIixcIltcIjpcIl1cIixcIihcIjpcIilcIixcIlwiOlwiXCJ9LGd1aWRWZXJzaW9uczp7dXVpZHYxOlwiMVwiLHV1aWR2MjpcIjJcIix1dWlkdjM6XCIzXCIsdXVpZHY0OlwiNFwiLHV1aWR2NTpcIjVcIn0sY2lkclByZXNlbmNlczpbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXSxub3JtYWxpemF0aW9uRm9ybXM6W1wiTkZDXCIsXCJORkRcIixcIk5GS0NcIixcIk5GS0RcIl19O2UuZXhwb3J0cz1oLmV4dGVuZCh7dHlwZTpcInN0cmluZ1wiLGZsYWdzOntpbnNlbnNpdGl2ZTp7ZGVmYXVsdDohMX0sdHJ1bmNhdGU6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7cmVwbGFjZW1lbnRzOntpbml0Om51bGx9fSxjb2VyY2U6e2Zyb206XCJzdHJpbmdcIixtZXRob2QoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpzfSl7Y29uc3Qgbj10LiRfZ2V0UnVsZShcIm5vcm1hbGl6ZVwiKTtuJiYoZT1lLm5vcm1hbGl6ZShuLmFyZ3MuZm9ybSkpO2NvbnN0IG89dC4kX2dldFJ1bGUoXCJjYXNlXCIpO28mJihlPVwidXBwZXJcIj09PW8uYXJncy5kaXJlY3Rpb24/ZS50b0xvY2FsZVVwcGVyQ2FzZSgpOmUudG9Mb2NhbGVMb3dlckNhc2UoKSk7Y29uc3QgYT10LiRfZ2V0UnVsZShcInRyaW1cIik7aWYoYSYmYS5hcmdzLmVuYWJsZWQmJihlPWUudHJpbSgpKSx0LiRfdGVybXMucmVwbGFjZW1lbnRzKWZvcihjb25zdCByIG9mIHQuJF90ZXJtcy5yZXBsYWNlbWVudHMpZT1lLnJlcGxhY2Uoci5wYXR0ZXJuLHIucmVwbGFjZW1lbnQpO2NvbnN0IGk9dC4kX2dldFJ1bGUoXCJoZXhcIik7aWYoaSYmaS5hcmdzLm9wdGlvbnMuYnl0ZUFsaWduZWQmJmUubGVuZ3RoJTIhPTAmJihlPVwiMFwiLmNvbmNhdChlKSksdC4kX2dldFJ1bGUoXCJpc29EYXRlXCIpKXtjb25zdCB0PXAuaXNvRGF0ZShlKTt0JiYoZT10KX1pZih0Ll9mbGFncy50cnVuY2F0ZSl7Y29uc3Qgbj10LiRfZ2V0UnVsZShcIm1heFwiKTtpZihuKXtsZXQgbz1uLmFyZ3MubGltaXQ7aWYoZC5pc1Jlc29sdmFibGUobykmJihvPW8ucmVzb2x2ZShlLHIscyksIWQubGltaXQobykpKXJldHVybnt2YWx1ZTplLGVycm9yczp0LiRfY3JlYXRlRXJyb3IoXCJhbnkucmVmXCIsbyx7cmVmOm4uYXJncy5saW1pdCxhcmc6XCJsaW1pdFwiLHJlYXNvbjpcIm11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCJ9LHIscyl9O2U9ZS5zbGljZSgwLG8pfX1yZXR1cm57dmFsdWU6ZX19fSx2YWxpZGF0ZTooZSx7ZXJyb3I6dH0pPT5cInN0cmluZ1wiIT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6dChcInN0cmluZy5iYXNlXCIpfTpcIlwiPT09ZT97dmFsdWU6ZSxlcnJvcnM6dChcInN0cmluZy5lbXB0eVwiKX06dm9pZCAwLHJ1bGVzOnthbHBoYW51bTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiYWxwaGFudW1cIil9LHZhbGlkYXRlOihlLHQpPT4vXlthLXpBLVowLTldKyQvLnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmFscGhhbnVtXCIpfSxiYXNlNjQ6e21ldGhvZChlPXt9KXtyZXR1cm4gZC5hc3NlcnRPcHRpb25zKGUsW1wicGFkZGluZ1JlcXVpcmVkXCIsXCJ1cmxTYWZlXCJdKSxlPW4oe3VybFNhZmU6ITEscGFkZGluZ1JlcXVpcmVkOiEwfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5wYWRkaW5nUmVxdWlyZWQsXCJwYWRkaW5nUmVxdWlyZWQgbXVzdCBiZSBib29sZWFuXCIpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnVybFNhZmUsXCJ1cmxTYWZlIG11c3QgYmUgYm9vbGVhblwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImJhc2U2NFwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGU6KGUsdCx7b3B0aW9uczpyfSk9PnAuYmFzZTY0UmVnZXhbci5wYWRkaW5nUmVxdWlyZWRdW3IudXJsU2FmZV0udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuYmFzZTY0XCIpfSxjYXNlOnttZXRob2QoZSl7cmV0dXJuIGEoW1wibG93ZXJcIixcInVwcGVyXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBjYXNlOlwiLGUpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiY2FzZVwiLGFyZ3M6e2RpcmVjdGlvbjplfX0pfSx2YWxpZGF0ZTooZSx0LHtkaXJlY3Rpb246cn0pPT5cImxvd2VyXCI9PT1yJiZlPT09ZS50b0xvY2FsZUxvd2VyQ2FzZSgpfHxcInVwcGVyXCI9PT1yJiZlPT09ZS50b0xvY2FsZVVwcGVyQ2FzZSgpP2U6dC5lcnJvcihcInN0cmluZy5cIi5jb25jYXQocixcImNhc2VcIikpLGNvbnZlcnQ6ITB9LGNyZWRpdENhcmQ6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImNyZWRpdENhcmRcIil9LHZhbGlkYXRlKGUsdCl7bGV0IHI9ZS5sZW5ndGgscz0wLG49MTtmb3IoO3ItLTspe2NvbnN0IHQ9ZS5jaGFyQXQocikqbjtzKz10LTkqKHQ+OSksbl49M31yZXR1cm4gcz4wJiZzJTEwPT0wP2U6dC5lcnJvcihcInN0cmluZy5jcmVkaXRDYXJkXCIpfX0sZGF0YVVyaTp7bWV0aG9kKGU9e30pe3JldHVybiBkLmFzc2VydE9wdGlvbnMoZSxbXCJwYWRkaW5nUmVxdWlyZWRcIl0pLGU9bih7cGFkZGluZ1JlcXVpcmVkOiEwfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5wYWRkaW5nUmVxdWlyZWQsXCJwYWRkaW5nUmVxdWlyZWQgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZGF0YVVyaVwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9KXtjb25zdCBzPWUubWF0Y2gocC5kYXRhVXJpUmVnZXgpO2lmKHMpe2lmKCFzWzJdKXJldHVybiBlO2lmKFwiYmFzZTY0XCIhPT1zWzJdKXJldHVybiBlO2lmKHAuYmFzZTY0UmVnZXhbci5wYWRkaW5nUmVxdWlyZWRdLmZhbHNlLnRlc3Qoc1szXSkpcmV0dXJuIGV9cmV0dXJuIHQuZXJyb3IoXCJzdHJpbmcuZGF0YVVyaVwiKX19LGRvbWFpbjp7bWV0aG9kKGUpe2UmJmQuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93VW5pY29kZVwiLFwibWluRG9tYWluU2VnbWVudHNcIixcInRsZHNcIl0pO2NvbnN0IHQ9cC5hZGRyZXNzT3B0aW9ucyhlKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJkb21haW5cIixhcmdzOntvcHRpb25zOmV9LGFkZHJlc3M6dH0pfSx2YWxpZGF0ZTooZSx0LHIse2FkZHJlc3M6c30pPT5pLmlzVmFsaWQoZSxzKT9lOnQuZXJyb3IoXCJzdHJpbmcuZG9tYWluXCIpfSxlbWFpbDp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93VW5pY29kZVwiLFwiaWdub3JlTGVuZ3RoXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwibXVsdGlwbGVcIixcInNlcGFyYXRvclwiLFwidGxkc1wiXSksYSh2b2lkIDA9PT1lLm11bHRpcGxlfHxcImJvb2xlYW5cIj09dHlwZW9mIGUubXVsdGlwbGUsXCJtdWx0aXBsZSBvcHRpb24gbXVzdCBiZSBhbiBib29sZWFuXCIpO2NvbnN0IHQ9cC5hZGRyZXNzT3B0aW9ucyhlKSxyPW5ldyBSZWdFeHAoXCJcXFxccypbXCIuY29uY2F0KGUuc2VwYXJhdG9yP3UoZS5zZXBhcmF0b3IpOlwiLFwiLFwiXVxcXFxzKlwiKSk7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZW1haWxcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnIsYWRkcmVzczp0fSl9LHZhbGlkYXRlKGUsdCx7b3B0aW9uczpyfSx7cmVnZXg6cyxhZGRyZXNzOm59KXtjb25zdCBvPXIubXVsdGlwbGU/ZS5zcGxpdChzKTpbZV0sYT1bXTtmb3IoY29uc3QgZSBvZiBvKWwuaXNWYWxpZChlLG4pfHxhLnB1c2goZSk7cmV0dXJuIGEubGVuZ3RoP3QuZXJyb3IoXCJzdHJpbmcuZW1haWxcIix7dmFsdWU6ZSxpbnZhbGlkczphfSk6ZX19LGd1aWQ6e2FsaWFzOlwidXVpZFwiLG1ldGhvZChlPXt9KXtkLmFzc2VydE9wdGlvbnMoZSxbXCJ2ZXJzaW9uXCJdKTtsZXQgdD1cIlwiO2lmKGUudmVyc2lvbil7Y29uc3Qgcj1bXS5jb25jYXQoZS52ZXJzaW9uKTthKHIubGVuZ3RoPj0xLFwidmVyc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3QgMSB2YWxpZCB2ZXJzaW9uIHNwZWNpZmllZFwiKTtjb25zdCBzPW5ldyBTZXQ7Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aDsrK2Upe2NvbnN0IG49cltlXTthKFwic3RyaW5nXCI9PXR5cGVvZiBuLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgYSBzdHJpbmdcIik7Y29uc3Qgbz1wLmd1aWRWZXJzaW9uc1tuLnRvTG93ZXJDYXNlKCldO2EobyxcInZlcnNpb24gYXQgcG9zaXRpb24gXCIrZStcIiBtdXN0IGJlIG9uZSBvZiBcIitPYmplY3Qua2V5cyhwLmd1aWRWZXJzaW9ucykuam9pbihcIiwgXCIpKSxhKCFzLmhhcyhvKSxcInZlcnNpb24gYXQgcG9zaXRpb24gXCIrZStcIiBtdXN0IG5vdCBiZSBhIGR1cGxpY2F0ZVwiKSx0Kz1vLHMuYWRkKG8pfX1jb25zdCByPW5ldyBSZWdFeHAoXCJeKFtcXFxcW3tcXFxcKF0/KVswLTlBLUZdezh9KFs6LV0/KVswLTlBLUZdezR9XFxcXDI/W1wiLmNvbmNhdCh0fHxcIjAtOUEtRlwiLFwiXVswLTlBLUZdezN9XFxcXDI/W1wiKS5jb25jYXQodD9cIjg5QUJcIjpcIjAtOUEtRlwiLFwiXVswLTlBLUZdezN9XFxcXDI/WzAtOUEtRl17MTJ9KFtcXFxcXX1cXFxcKV0/KSRcIiksXCJpXCIpO3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImd1aWRcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnJ9KX0sdmFsaWRhdGUoZSx0LHIse3JlZ2V4OnN9KXtjb25zdCBuPXMuZXhlYyhlKTtyZXR1cm4gbj9wLmd1aWRCcmFja2V0c1tuWzFdXSE9PW5bbi5sZW5ndGgtMV0/dC5lcnJvcihcInN0cmluZy5ndWlkXCIpOmU6dC5lcnJvcihcInN0cmluZy5ndWlkXCIpfX0saGV4OnttZXRob2QoZT17fSl7cmV0dXJuIGQuYXNzZXJ0T3B0aW9ucyhlLFtcImJ5dGVBbGlnbmVkXCJdKSxlPW4oe2J5dGVBbGlnbmVkOiExfSxlKSxhKFwiYm9vbGVhblwiPT10eXBlb2YgZS5ieXRlQWxpZ25lZCxcImJ5dGVBbGlnbmVkIG11c3QgYmUgYm9vbGVhblwiKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImhleFwiLGFyZ3M6e29wdGlvbnM6ZX19KX0sdmFsaWRhdGU6KGUsdCx7b3B0aW9uczpyfSk9PnAuaGV4UmVnZXgudGVzdChlKT9yLmJ5dGVBbGlnbmVkJiZlLmxlbmd0aCUyIT0wP3QuZXJyb3IoXCJzdHJpbmcuaGV4QWxpZ25cIik6ZTp0LmVycm9yKFwic3RyaW5nLmhleFwiKX0saG9zdG5hbWU6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImhvc3RuYW1lXCIpfSx2YWxpZGF0ZTooZSx0KT0+aS5pc1ZhbGlkKGUse21pbkRvbWFpblNlZ21lbnRzOjF9KXx8cC5pcFJlZ2V4LnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmhvc3RuYW1lXCIpfSxpbnNlbnNpdGl2ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwiaW5zZW5zaXRpdmVcIiwhMCl9fSxpcDp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImNpZHJcIixcInZlcnNpb25cIl0pO2NvbnN0e2NpZHI6dCx2ZXJzaW9uczpyLHJlZ2V4OnN9PWMucmVnZXgoZSksbj1lLnZlcnNpb24/cjp2b2lkIDA7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaXBcIixhcmdzOntvcHRpb25zOntjaWRyOnQsdmVyc2lvbjpufX0scmVnZXg6c30pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzfSk9PnMudGVzdChlKT9lOnIudmVyc2lvbj90LmVycm9yKFwic3RyaW5nLmlwVmVyc2lvblwiLHt2YWx1ZTplLGNpZHI6ci5jaWRyLHZlcnNpb246ci52ZXJzaW9ufSk6dC5lcnJvcihcInN0cmluZy5pcFwiLHt2YWx1ZTplLGNpZHI6ci5jaWRyfSl9LGlzb0RhdGU6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImlzb0RhdGVcIil9LHZhbGlkYXRlOihlLHtlcnJvcjp0fSk9PnAuaXNvRGF0ZShlKT9lOnQoXCJzdHJpbmcuaXNvRGF0ZVwiKX0saXNvRHVyYXRpb246e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImlzb0R1cmF0aW9uXCIpfSx2YWxpZGF0ZTooZSx0KT0+cC5pc29EdXJhdGlvblJlZ2V4LnRlc3QoZSk/ZTp0LmVycm9yKFwic3RyaW5nLmlzb0R1cmF0aW9uXCIpfSxsZW5ndGg6e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibGVuZ3RoXCIsZSxcIj1cIix0KX0sdmFsaWRhdGUoZSx0LHtsaW1pdDpyLGVuY29kaW5nOnN9LHtuYW1lOm4sb3BlcmF0b3I6byxhcmdzOmF9KXtjb25zdCBpPSFzJiZlLmxlbmd0aDtyZXR1cm4gZC5jb21wYXJlKGkscixvKT9lOnQuZXJyb3IoXCJzdHJpbmcuXCIrbix7bGltaXQ6YS5saW1pdCx2YWx1ZTplLGVuY29kaW5nOnN9KX0sYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6ZC5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn0sXCJlbmNvZGluZ1wiXX0sbG93ZXJjYXNlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5jYXNlKFwibG93ZXJcIil9fSxtYXg6e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibWF4XCIsZSxcIjw9XCIsdCl9LGFyZ3M6W1wibGltaXRcIixcImVuY29kaW5nXCJdfSxtaW46e21ldGhvZChlLHQpe3JldHVybiBwLmxlbmd0aCh0aGlzLFwibWluXCIsZSxcIj49XCIsdCl9LGFyZ3M6W1wibGltaXRcIixcImVuY29kaW5nXCJdfSxub3JtYWxpemU6e21ldGhvZChlPVwiTkZDXCIpe3JldHVybiBhKHAubm9ybWFsaXphdGlvbkZvcm1zLmluY2x1ZGVzKGUpLFwibm9ybWFsaXphdGlvbiBmb3JtIG11c3QgYmUgb25lIG9mIFwiK3Aubm9ybWFsaXphdGlvbkZvcm1zLmpvaW4oXCIsIFwiKSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJub3JtYWxpemVcIixhcmdzOntmb3JtOmV9fSl9LHZhbGlkYXRlOihlLHtlcnJvcjp0fSx7Zm9ybTpyfSk9PmU9PT1lLm5vcm1hbGl6ZShyKT9lOnQoXCJzdHJpbmcubm9ybWFsaXplXCIse3ZhbHVlOmUsZm9ybTpyfSksY29udmVydDohMH0scGF0dGVybjp7YWxpYXM6XCJyZWdleFwiLG1ldGhvZChlLHQ9e30pe2EoZSBpbnN0YW5jZW9mIFJlZ0V4cCxcInJlZ2V4IG11c3QgYmUgYSBSZWdFeHBcIiksYSghZS5mbGFncy5pbmNsdWRlcyhcImdcIikmJiFlLmZsYWdzLmluY2x1ZGVzKFwieVwiKSxcInJlZ2V4IHNob3VsZCBub3QgdXNlIGdsb2JhbCBvciBzdGlja3kgbW9kZVwiKSxcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9e25hbWU6dH0pLGQuYXNzZXJ0T3B0aW9ucyh0LFtcImludmVydFwiLFwibmFtZVwiXSk7Y29uc3Qgcj1bXCJzdHJpbmcucGF0dGVyblwiLHQuaW52ZXJ0P1wiLmludmVydFwiOlwiXCIsdC5uYW1lP1wiLm5hbWVcIjpcIi5iYXNlXCJdLmpvaW4oXCJcIik7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwicGF0dGVyblwiLGFyZ3M6e3JlZ2V4OmUsb3B0aW9uczp0fSxlcnJvckNvZGU6cn0pfSx2YWxpZGF0ZTooZSx0LHtyZWdleDpyLG9wdGlvbnM6c30se2Vycm9yQ29kZTpufSk9PnIudGVzdChlKV5zLmludmVydD9lOnQuZXJyb3Iobix7bmFtZTpzLm5hbWUscmVnZXg6cix2YWx1ZTplfSksYXJnczpbXCJyZWdleFwiLFwib3B0aW9uc1wiXSxtdWx0aTohMH0scmVwbGFjZTp7bWV0aG9kKGUsdCl7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPW5ldyBSZWdFeHAodShlKSxcImdcIikpLGEoZSBpbnN0YW5jZW9mIFJlZ0V4cCxcInBhdHRlcm4gbXVzdCBiZSBhIFJlZ0V4cFwiKSxhKFwic3RyaW5nXCI9PXR5cGVvZiB0LFwicmVwbGFjZW1lbnQgbXVzdCBiZSBhIFN0cmluZ1wiKTtjb25zdCByPXRoaXMuY2xvbmUoKTtyZXR1cm4gci4kX3Rlcm1zLnJlcGxhY2VtZW50c3x8KHIuJF90ZXJtcy5yZXBsYWNlbWVudHM9W10pLHIuJF90ZXJtcy5yZXBsYWNlbWVudHMucHVzaCh7cGF0dGVybjplLHJlcGxhY2VtZW50OnR9KSxyfX0sdG9rZW46e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInRva2VuXCIpfSx2YWxpZGF0ZTooZSx0KT0+L15cXHcrJC8udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcudG9rZW5cIil9LHRyaW06e21ldGhvZChlPSEwKXtyZXR1cm4gYShcImJvb2xlYW5cIj09dHlwZW9mIGUsXCJlbmFibGVkIG11c3QgYmUgYSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwidHJpbVwiLGFyZ3M6e2VuYWJsZWQ6ZX19KX0sdmFsaWRhdGU6KGUsdCx7ZW5hYmxlZDpyfSk9PnImJmUhPT1lLnRyaW0oKT90LmVycm9yKFwic3RyaW5nLnRyaW1cIik6ZSxjb252ZXJ0OiEwfSx0cnVuY2F0ZTp7bWV0aG9kKGU9ITApe3JldHVybiBhKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX3NldEZsYWcoXCJ0cnVuY2F0ZVwiLGUpfX0sdXBwZXJjYXNlOnttZXRob2QoKXtyZXR1cm4gdGhpcy5jYXNlKFwidXBwZXJcIil9fSx1cmk6e21ldGhvZChlPXt9KXtkLmFzc2VydE9wdGlvbnMoZSxbXCJhbGxvd1JlbGF0aXZlXCIsXCJhbGxvd1F1ZXJ5U3F1YXJlQnJhY2tldHNcIixcImRvbWFpblwiLFwicmVsYXRpdmVPbmx5XCIsXCJzY2hlbWVcIl0pLGUuZG9tYWluJiZkLmFzc2VydE9wdGlvbnMoZS5kb21haW4sW1wiYWxsb3dVbmljb2RlXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwidGxkc1wiXSk7Y29uc3R7cmVnZXg6dCxzY2hlbWU6cn09bS5yZWdleChlKSxzPWUuZG9tYWluP3AuYWRkcmVzc09wdGlvbnMoZS5kb21haW4pOm51bGw7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwidXJpXCIsYXJnczp7b3B0aW9uczplfSxyZWdleDp0LGRvbWFpbjpzLHNjaGVtZTpyfSl9LHZhbGlkYXRlKGUsdCx7b3B0aW9uczpyfSx7cmVnZXg6cyxkb21haW46bixzY2hlbWU6b30pe2lmKFtcImh0dHA6L1wiLFwiaHR0cHM6L1wiXS5pbmNsdWRlcyhlKSlyZXR1cm4gdC5lcnJvcihcInN0cmluZy51cmlcIik7Y29uc3QgYT1zLmV4ZWMoZSk7aWYoYSl7aWYobil7Y29uc3QgZT1hWzFdfHxhWzJdO2lmKCFpLmlzVmFsaWQoZSxuKSlyZXR1cm4gdC5lcnJvcihcInN0cmluZy5kb21haW5cIix7dmFsdWU6ZX0pfXJldHVybiBlfXJldHVybiByLnJlbGF0aXZlT25seT90LmVycm9yKFwic3RyaW5nLnVyaVJlbGF0aXZlT25seVwiKTpyLnNjaGVtZT90LmVycm9yKFwic3RyaW5nLnVyaUN1c3RvbVNjaGVtZVwiLHtzY2hlbWU6byx2YWx1ZTplfSk6dC5lcnJvcihcInN0cmluZy51cmlcIil9fX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5yZXBsYWNlbWVudHMpZm9yKGNvbnN0e3BhdHRlcm46cixyZXBsYWNlbWVudDpzfW9mIHQucmVwbGFjZW1lbnRzKWU9ZS5yZXBsYWNlKHIscyk7cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJzdHJpbmcuYWxwaGFudW1cIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gYWxwaGEtbnVtZXJpYyBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgc3RyaW5nXCIsXCJzdHJpbmcuYmFzZTY0XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBiYXNlNjQgc3RyaW5nXCIsXCJzdHJpbmcuY3JlZGl0Q2FyZFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgY3JlZGl0IGNhcmRcIixcInN0cmluZy5kYXRhVXJpXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBkYXRhVXJpIHN0cmluZ1wiLFwic3RyaW5nLmRvbWFpblwiOlwie3sjbGFiZWx9fSBtdXN0IGNvbnRhaW4gYSB2YWxpZCBkb21haW4gbmFtZVwiLFwic3RyaW5nLmVtYWlsXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBlbWFpbFwiLFwic3RyaW5nLmVtcHR5XCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkIHRvIGJlIGVtcHR5XCIsXCJzdHJpbmcuZ3VpZFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgR1VJRFwiLFwic3RyaW5nLmhleFwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBoZXhhZGVjaW1hbCBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcuaGV4QWxpZ25cIjpcInt7I2xhYmVsfX0gaGV4IGRlY29kZWQgcmVwcmVzZW50YXRpb24gbXVzdCBiZSBieXRlIGFsaWduZWRcIixcInN0cmluZy5ob3N0bmFtZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaG9zdG5hbWVcIixcInN0cmluZy5pcFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaXAgYWRkcmVzcyB3aXRoIGEge3sjY2lkcn19IENJRFJcIixcInN0cmluZy5pcFZlcnNpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGlwIGFkZHJlc3Mgb2Ygb25lIG9mIHRoZSBmb2xsb3dpbmcgdmVyc2lvbnMge3sjdmVyc2lvbn19IHdpdGggYSB7eyNjaWRyfX0gQ0lEUlwiLFwic3RyaW5nLmlzb0RhdGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBpbiBpc28gZm9ybWF0XCIsXCJzdHJpbmcuaXNvRHVyYXRpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIElTTyA4NjAxIGR1cmF0aW9uXCIsXCJzdHJpbmcubGVuZ3RoXCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubG93ZXJjYXNlXCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGxvd2VyY2FzZSBjaGFyYWN0ZXJzXCIsXCJzdHJpbmcubWF4XCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGNoYXJhY3RlcnMgbG9uZ1wiLFwic3RyaW5nLm1pblwiOlwie3sjbGFiZWx9fSBsZW5ndGggbXVzdCBiZSBhdCBsZWFzdCB7eyNsaW1pdH19IGNoYXJhY3RlcnMgbG9uZ1wiLFwic3RyaW5nLm5vcm1hbGl6ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIHVuaWNvZGUgbm9ybWFsaXplZCBpbiB0aGUge3sjZm9ybX19IGZvcm1cIixcInN0cmluZy50b2tlblwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGFuZCB1bmRlcnNjb3JlIGNoYXJhY3RlcnNcIixcInN0cmluZy5wYXR0ZXJuLmJhc2VcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBmYWlscyB0byBtYXRjaCB0aGUgcmVxdWlyZWQgcGF0dGVybjoge3sjcmVnZXh9fScsXCJzdHJpbmcucGF0dGVybi5uYW1lXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgZmFpbHMgdG8gbWF0Y2ggdGhlIHt7I25hbWV9fSBwYXR0ZXJuJyxcInN0cmluZy5wYXR0ZXJuLmludmVydC5iYXNlXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgbWF0Y2hlcyB0aGUgaW52ZXJ0ZWQgcGF0dGVybjoge3sjcmVnZXh9fScsXCJzdHJpbmcucGF0dGVybi5pbnZlcnQubmFtZVwiOid7eyNsYWJlbH19IHdpdGggdmFsdWUgXCJ7Wy5dfVwiIG1hdGNoZXMgdGhlIGludmVydGVkIHt7I25hbWV9fSBwYXR0ZXJuJyxcInN0cmluZy50cmltXCI6XCJ7eyNsYWJlbH19IG11c3Qgbm90IGhhdmUgbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlXCIsXCJzdHJpbmcudXJpXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCB1cmlcIixcInN0cmluZy51cmlDdXN0b21TY2hlbWVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHVyaSB3aXRoIGEgc2NoZW1lIG1hdGNoaW5nIHRoZSB7eyNzY2hlbWV9fSBwYXR0ZXJuXCIsXCJzdHJpbmcudXJpUmVsYXRpdmVPbmx5XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCByZWxhdGl2ZSB1cmlcIixcInN0cmluZy51cHBlcmNhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gdXBwZXJjYXNlIGNoYXJhY3RlcnNcIn19KSxwLmFkZHJlc3NPcHRpb25zPWZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBlO2lmKGEodm9pZCAwPT09ZS5taW5Eb21haW5TZWdtZW50c3x8TnVtYmVyLmlzU2FmZUludGVnZXIoZS5taW5Eb21haW5TZWdtZW50cykmJmUubWluRG9tYWluU2VnbWVudHM+MCxcIm1pbkRvbWFpblNlZ21lbnRzIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyXCIpLCExPT09ZS50bGRzKXJldHVybiBlO2lmKCEwPT09ZS50bGRzfHx2b2lkIDA9PT1lLnRsZHMpcmV0dXJuIGEocC50bGRzLFwiQnVpbHQtaW4gVExEIGxpc3QgZGlzYWJsZWRcIiksT2JqZWN0LmFzc2lnbih7fSxlLHAudGxkcyk7YShcIm9iamVjdFwiPT10eXBlb2YgZS50bGRzLFwidGxkcyBtdXN0IGJlIHRydWUsIGZhbHNlLCBvciBhbiBvYmplY3RcIik7Y29uc3QgdD1lLnRsZHMuZGVueTtpZih0KXJldHVybiBBcnJheS5pc0FycmF5KHQpJiYoZT1PYmplY3QuYXNzaWduKHt9LGUse3RsZHM6e2Rlbnk6bmV3IFNldCh0KX19KSksYShlLnRsZHMuZGVueSBpbnN0YW5jZW9mIFNldCxcInRsZHMuZGVueSBtdXN0IGJlIGFuIGFycmF5LCBTZXQsIG9yIGJvb2xlYW5cIiksYSghZS50bGRzLmFsbG93LFwiQ2Fubm90IHNwZWNpZnkgYm90aCB0bGRzLmFsbG93IGFuZCB0bGRzLmRlbnkgbGlzdHNcIiksZTtjb25zdCByPWUudGxkcy5hbGxvdztyZXR1cm4gcj8hMD09PXI/KGEocC50bGRzLFwiQnVpbHQtaW4gVExEIGxpc3QgZGlzYWJsZWRcIiksT2JqZWN0LmFzc2lnbih7fSxlLHAudGxkcykpOihBcnJheS5pc0FycmF5KHIpJiYoZT1PYmplY3QuYXNzaWduKHt9LGUse3RsZHM6e2FsbG93Om5ldyBTZXQocil9fSkpLGEoZS50bGRzLmFsbG93IGluc3RhbmNlb2YgU2V0LFwidGxkcy5hbGxvdyBtdXN0IGJlIGFuIGFycmF5LCBTZXQsIG9yIGJvb2xlYW5cIiksZSk6ZX0scC5pc29EYXRlPWZ1bmN0aW9uKGUpe2lmKCFkLmlzSXNvRGF0ZShlKSlyZXR1cm4gbnVsbDtjb25zdCB0PW5ldyBEYXRlKGUpO3JldHVybiBpc05hTih0LmdldFRpbWUoKSk/bnVsbDp0LnRvSVNPU3RyaW5nKCl9LHAubGVuZ3RoPWZ1bmN0aW9uKGUsdCxyLHMsbil7cmV0dXJuIGEoIW58fCExLFwiSW52YWxpZCBlbmNvZGluZzpcIixuKSxlLiRfYWRkUnVsZSh7bmFtZTp0LG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OnIsZW5jb2Rpbmc6bn0sb3BlcmF0b3I6c30pfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyNCksbj1yKDIzKSxvPXIoMjUpLGE9e25vbkFzY2lpUng6L1teXFx4MDAtXFx4N2ZdLyxlbmNvZGVyOm5ldyhzLlRleHRFbmNvZGVyfHxUZXh0RW5jb2Rlcil9O3QuYW5hbHl6ZT1mdW5jdGlvbihlLHQpe3JldHVybiBhLmVtYWlsKGUsdCl9LHQuaXNWYWxpZD1mdW5jdGlvbihlLHQpe3JldHVybiFhLmVtYWlsKGUsdCl9LGEuZW1haWw9ZnVuY3Rpb24oZSx0PXt9KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGlucHV0OiBlbWFpbCBtdXN0IGJlIGEgc3RyaW5nXCIpO2lmKCFlKXJldHVybiBvLmNvZGUoXCJFTVBUWV9TVFJJTkdcIik7Y29uc3Qgcj0hYS5ub25Bc2NpaVJ4LnRlc3QoZSk7aWYoIXIpe2lmKCExPT09dC5hbGxvd1VuaWNvZGUpcmV0dXJuIG8uY29kZShcIkZPUkJJRERFTl9VTklDT0RFXCIpO2U9ZS5ub3JtYWxpemUoXCJORkNcIil9Y29uc3Qgcz1lLnNwbGl0KFwiQFwiKTtpZigyIT09cy5sZW5ndGgpcmV0dXJuIHMubGVuZ3RoPjI/by5jb2RlKFwiTVVMVElQTEVfQVRfQ0hBUlwiKTpvLmNvZGUoXCJNSVNTSU5HX0FUX0NIQVJcIik7Y29uc3RbaSxsXT1zO2lmKCFpKXJldHVybiBvLmNvZGUoXCJFTVBUWV9MT0NBTFwiKTtpZighdC5pZ25vcmVMZW5ndGgpe2lmKGUubGVuZ3RoPjI1NClyZXR1cm4gby5jb2RlKFwiQUREUkVTU19UT09fTE9OR1wiKTtpZihhLmVuY29kZXIuZW5jb2RlKGkpLmxlbmd0aD42NClyZXR1cm4gby5jb2RlKFwiTE9DQUxfVE9PX0xPTkdcIil9cmV0dXJuIGEubG9jYWwoaSxyKXx8bi5hbmFseXplKGwsdCl9LGEubG9jYWw9ZnVuY3Rpb24oZSx0KXtjb25zdCByPWUuc3BsaXQoXCIuXCIpO2Zvcihjb25zdCBlIG9mIHIpe2lmKCFlLmxlbmd0aClyZXR1cm4gby5jb2RlKFwiRU1QVFlfTE9DQUxfU0VHTUVOVFwiKTtpZih0KXtpZighYS5hdGV4dFJ4LnRlc3QoZSkpcmV0dXJuIG8uY29kZShcIklOVkFMSURfTE9DQUxfQ0hBUlNcIil9ZWxzZSBmb3IoY29uc3QgdCBvZiBlKXtpZihhLmF0ZXh0UngudGVzdCh0KSljb250aW51ZTtjb25zdCBlPWEuYmluYXJ5KHQpO2lmKCFhLmF0b21SeC50ZXN0KGUpKXJldHVybiBvLmNvZGUoXCJJTlZBTElEX0xPQ0FMX0NIQVJTXCIpfX19LGEuYmluYXJ5PWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5mcm9tKGEuZW5jb2Rlci5lbmNvZGUoZSkpLm1hcChlPT5TdHJpbmcuZnJvbUNoYXJDb2RlKGUpKS5qb2luKFwiXCIpfSxhLmF0ZXh0Ung9L15bXFx3ISNcXCQlJidcXCpcXCtcXC0vPVxcP1xcXmBcXHtcXHxcXH1+XSskLyxhLmF0b21SeD1uZXcgUmVnRXhwKFtcIig/OltcXFxceGMyLVxcXFx4ZGZdW1xcXFx4ODAtXFxcXHhiZl0pXCIsXCIoPzpcXFxceGUwW1xcXFx4YTAtXFxcXHhiZl1bXFxcXHg4MC1cXFxceGJmXSl8KD86W1xcXFx4ZTEtXFxcXHhlY11bXFxcXHg4MC1cXFxceGJmXXsyfSl8KD86XFxcXHhlZFtcXFxceDgwLVxcXFx4OWZdW1xcXFx4ODAtXFxcXHhiZl0pfCg/OltcXFxceGVlLVxcXFx4ZWZdW1xcXFx4ODAtXFxcXHhiZl17Mn0pXCIsXCIoPzpcXFxceGYwW1xcXFx4OTAtXFxcXHhiZl1bXFxcXHg4MC1cXFxceGJmXXsyfSl8KD86W1xcXFx4ZjEtXFxcXHhmM11bXFxcXHg4MC1cXFxceGJmXXszfSl8KD86XFxcXHhmNFtcXFxceDgwLVxcXFx4OGZdW1xcXFx4ODAtXFxcXHhiZl17Mn0pXCJdLmpvaW4oXCJ8XCIpKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMjYpO3QucmVnZXg9ZnVuY3Rpb24oZT17fSl7cyh2b2lkIDA9PT1lLmNpZHJ8fFwic3RyaW5nXCI9PXR5cGVvZiBlLmNpZHIsXCJvcHRpb25zLmNpZHIgbXVzdCBiZSBhIHN0cmluZ1wiKTtjb25zdCB0PWUuY2lkcj9lLmNpZHIudG9Mb3dlckNhc2UoKTpcIm9wdGlvbmFsXCI7cyhbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXS5pbmNsdWRlcyh0KSxcIm9wdGlvbnMuY2lkciBtdXN0IGJlIG9uZSBvZiByZXF1aXJlZCwgb3B0aW9uYWwsIGZvcmJpZGRlblwiKSxzKHZvaWQgMD09PWUudmVyc2lvbnx8XCJzdHJpbmdcIj09dHlwZW9mIGUudmVyc2lvbnx8QXJyYXkuaXNBcnJheShlLnZlcnNpb24pLFwib3B0aW9ucy52ZXJzaW9uIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5nXCIpO2xldCByPWUudmVyc2lvbnx8W1wiaXB2NFwiLFwiaXB2NlwiLFwiaXB2ZnV0dXJlXCJdO0FycmF5LmlzQXJyYXkocil8fChyPVtyXSkscyhyLmxlbmd0aD49MSxcIm9wdGlvbnMudmVyc2lvbiBtdXN0IGhhdmUgYXQgbGVhc3QgMSB2ZXJzaW9uIHNwZWNpZmllZFwiKTtmb3IobGV0IGU9MDtlPHIubGVuZ3RoOysrZSlzKFwic3RyaW5nXCI9PXR5cGVvZiByW2VdLFwib3B0aW9ucy52ZXJzaW9uIG11c3Qgb25seSBjb250YWluIHN0cmluZ3NcIikscltlXT1yW2VdLnRvTG93ZXJDYXNlKCkscyhbXCJpcHY0XCIsXCJpcHY2XCIsXCJpcHZmdXR1cmVcIl0uaW5jbHVkZXMocltlXSksXCJvcHRpb25zLnZlcnNpb24gY29udGFpbnMgdW5rbm93biB2ZXJzaW9uIFwiK3JbZV0rXCIgLSBtdXN0IGJlIG9uZSBvZiBpcHY0LCBpcHY2LCBpcHZmdXR1cmVcIik7cj1BcnJheS5mcm9tKG5ldyBTZXQocikpO2NvbnN0IG89ci5tYXAoZT0+e2lmKFwiZm9yYmlkZGVuXCI9PT10KXJldHVybiBuLmlwW2VdO2NvbnN0IHI9XCJcXFxcL1wiLmNvbmNhdChcImlwdjRcIj09PWU/bi5pcC52NENpZHI6bi5pcC52NkNpZHIpO3JldHVyblwicmVxdWlyZWRcIj09PXQ/XCJcIi5jb25jYXQobi5pcFtlXSkuY29uY2F0KHIpOlwiXCIuY29uY2F0KG4uaXBbZV0sXCIoPzpcIikuY29uY2F0KHIsXCIpP1wiKX0pLGE9XCIoPzpcIi5jb25jYXQoby5qb2luKFwifFwiKSxcIilcIiksaT1uZXcgUmVnRXhwKFwiXlwiLmNvbmNhdChhLFwiJFwiKSk7cmV0dXJue2NpZHI6dCx2ZXJzaW9uczpyLHJlZ2V4OmkscmF3OmF9fX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89e307by5NYXA9Y2xhc3MgZXh0ZW5kcyBNYXB7c2xpY2UoKXtyZXR1cm4gbmV3IG8uTWFwKHRoaXMpfX0sZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwic3ltYm9sXCIsdGVybXM6e21hcDp7aW5pdDpuZXcgby5NYXB9fSxjb2VyY2U6e21ldGhvZChlLHtzY2hlbWE6dCxlcnJvcjpyfSl7Y29uc3Qgcz10LiRfdGVybXMubWFwLmdldChlKTtyZXR1cm4gcyYmKGU9cyksdC5fZmxhZ3Mub25seSYmXCJzeW1ib2xcIiE9dHlwZW9mIGU/e3ZhbHVlOmUsZXJyb3JzOnIoXCJzeW1ib2wubWFwXCIse21hcDp0LiRfdGVybXMubWFwfSl9Ont2YWx1ZTplfX19LHZhbGlkYXRlKGUse2Vycm9yOnR9KXtpZihcInN5bWJvbFwiIT10eXBlb2YgZSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6dChcInN5bWJvbC5iYXNlXCIpfX0scnVsZXM6e21hcDp7bWV0aG9kKGUpe2UmJiFlW1N5bWJvbC5pdGVyYXRvcl0mJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYoZT1PYmplY3QuZW50cmllcyhlKSkscyhlJiZlW1N5bWJvbC5pdGVyYXRvcl0sXCJJdGVyYWJsZSBtdXN0IGJlIGFuIGl0ZXJhYmxlIG9yIG9iamVjdFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKSxyPVtdO2Zvcihjb25zdCBuIG9mIGUpe3MobiYmbltTeW1ib2wuaXRlcmF0b3JdLFwiRW50cnkgbXVzdCBiZSBhbiBpdGVyYWJsZVwiKTtjb25zdFtlLG9dPW47cyhcIm9iamVjdFwiIT10eXBlb2YgZSYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmXCJzeW1ib2xcIiE9dHlwZW9mIGUsXCJLZXkgbXVzdCBub3QgYmUgb2YgdHlwZSBvYmplY3QsIGZ1bmN0aW9uLCBvciBTeW1ib2xcIikscyhcInN5bWJvbFwiPT10eXBlb2YgbyxcIlZhbHVlIG11c3QgYmUgYSBTeW1ib2xcIiksdC4kX3Rlcm1zLm1hcC5zZXQoZSxvKSxyLnB1c2gobyl9cmV0dXJuIHQudmFsaWQoLi4ucil9fX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4odC5tYXAmJihlPWUubWFwKHQubWFwKSksZSl9LG1lc3NhZ2VzOntcInN5bWJvbC5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzeW1ib2xcIixcInN5bWJvbC5tYXBcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBvbmUgb2Yge3sjbWFwfX1cIn19KX1dKX0pKTsiLCJpbXBvcnQgeyBHcmlnYSB9IGZyb20gXCIuLi9ncmlnYS9ncmlnYVwiO1xyXG5pbXBvcnQgeyBFZGl0b3IsIGVkaXRvckhlbHAgfSBmcm9tIFwiLi9lZGl0b3JcIjtcclxuaW1wb3J0IHsgQmFja2dyb3VuZFRpbGUgfSBmcm9tIFwiLi9lbnRpdGllcy9iYWNrZ3JvdW5kX3RpbGVcIjtcclxuaW1wb3J0IHsgR2hvc3R5IH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2dob3N0eVwiO1xyXG5pbXBvcnQgeyBHb2FsIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2dvYWxcIjtcclxuaW1wb3J0IHsgU3RvbmUgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvc3RvbmVcIjtcclxuaW1wb3J0IHsgV29vZGVuQm94IH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3dvb2Rlbl9ib3hcIjtcclxuaW1wb3J0IHsgU2VsZWN0aW9uQmFja2dyb3VuZCB9IGZyb20gXCIuL2VudGl0aWVzL3NlbGVjdGlvbl9iYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7IExldmVscywgbGV2ZWxzSGVscCB9IGZyb20gXCIuL2xldmVsc1wiO1xyXG5pbXBvcnQgeyBQbGF5LCBwbGF5SGVscCB9IGZyb20gXCIuL3BsYXlcIjtcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tIFwiLi9zdHlsZVwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbF9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IEhvbGUgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvaG9sZVwiO1xyXG5pbXBvcnQgeyBIb2xlQm9yZGVyIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2hvbGVfYm9yZGVyXCI7XHJcbmltcG9ydCB7IEhvbWUsIGhvbWVIZWxwIH0gZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL3BvcHVwXCI7XHJcblxyXG5jb25zdCBDUyA9IDE2O1xyXG5jb25zdCBSUyA9IDEwO1xyXG5cclxuY29uc3QgZ3JpZ2FDb25maWcgPSB7XHJcbiAgZGlzcGxheXM6W1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAncGxheScsXHJcbiAgICAgIHdyYXBwZXJJZDogJ3BsYXktZGlzcGxheScsXHJcbiAgICAgIHdpZHRoSGVpZ2h0UmF0aW86IENTL1JTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2VkaXRvcicsXHJcbiAgICAgIHdyYXBwZXJJZDogJ2VkaXRvci1kaXNwbGF5JyxcclxuICAgICAgd2lkdGhIZWlnaHRSYXRpbzogQ1MvUlMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2VsZWN0aW9uJyxcclxuICAgICAgd3JhcHBlcklkOiAnc2VsZWN0aW9uLWRpc3BsYXknLFxyXG4gICAgICB3aWR0aEhlaWdodFJhdGlvOiAxMC8xXHJcbiAgICB9XHJcbiAgXSxcclxuICBncmlkczpbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdwbGF5JyxcclxuICAgICAgY29sdW1uczogQ1MsXHJcbiAgICAgIHJvd3M6IFJTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2VkaXRvcicsXHJcbiAgICAgIGNvbHVtbnM6IENTLFxyXG4gICAgICByb3dzOiBSUyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzZWxlY3Rpb24taG90YmFyJyxcclxuICAgICAgY29sdW1uczogMTAsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncHJldmlldycsXHJcbiAgICAgIGNvbHVtbnM6IENTLFxyXG4gICAgICByb3dzOiBSU1xyXG4gICAgfVxyXG4gIF0sXHJcbiAgZW50aXRpZXM6W0JhY2tncm91bmRUaWxlLCBTZWxlY3Rpb25CYWNrZ3JvdW5kLCBTdG9uZSwgR2hvc3R5LCBHb2FsLCBXb29kZW5Cb3gsIEhvbGUsIEhvbGVCb3JkZXJdLFxyXG59XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kVGlsZVNjZW5lID0ge1wiZGV0YWNoZWRcIjpbXSxcInRpbGVzXCI6W1tbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXV19XHJcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpO1xyXG4gICAgdGhpcy5ob21lX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5wbGF5X2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpO1xyXG4gICAgdGhpcy5sZXZlbHNfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVscy1idXR0b24nKTtcclxuICAgIHRoaXMuZWRpdG9yX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3ItYnV0dG9uJyk7XHJcbiAgICB0aGlzLmhlbHBfYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlbHAtYnV0dG9uJyk7XHJcbiAgICB0aGlzLmNvbnRlbnRfZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIHRoaXMuaG9tZV9zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1zY3JlZW4nKTtcclxuICAgIHRoaXMucGxheV9zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1zY3JlZW4nKTtcclxuICAgIHRoaXMuZWRpdG9yX3NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0b3Itc2NyZWVuJyk7XHJcbiAgICB0aGlzLmxldmVsc19zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxzLXNjcmVlbicpO1xyXG4gICAgdGhpcy5zdGF0ZSA9ICdob21lJztcclxuICAgIHRoaXMuaGVscEJvb2sgPSB7XHJcbiAgICAgIGhvbWU6IGhvbWVIZWxwLFxyXG4gICAgICBwbGF5OiBwbGF5SGVscCxcclxuICAgICAgbGV2ZWxzOiBsZXZlbHNIZWxwLFxyXG4gICAgICBlZGl0b3I6IGVkaXRvckhlbHBcclxuICAgIH1cclxuICAgIHRoaXMuZGlzcGxheVNldHRpbmdzID0ge2NvbHVtbnNPblNjcmVlbjogQ1MsIHJvd3NPblNjcmVlbjogUlN9O1xyXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBTdHlsZSggdGhpcyApO1xyXG4gICAgdGhpcy5ncmlnYSA9IG5ldyBHcmlnYSggZ3JpZ2FDb25maWcsIGdyaWdhID0+IHRoaXMuc3RhcnRHYW1lKCBncmlnYSApICk7XHJcbiAgICB0aGlzLmxvY2FsU3RvcmFnZSA9IG5ldyBMb2NhbFN0b3JhZ2UoIHRoaXMgKTtcclxuICAgIHRoaXMuaG9tZSA9IG5ldyBIb21lKCB0aGlzICk7XHJcbiAgICB0aGlzLmxldmVscyA9IG5ldyBMZXZlbHMoIHRoaXMgKTtcclxuICAgIHRoaXMucGxheSA9IG5ldyBQbGF5KCB0aGlzLCB0aGlzLmdyaWdhICk7XHJcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBFZGl0b3IoIHRoaXMsIHRoaXMuZ3JpZ2EgKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRHYW1lKCBncmlnYSApe1xyXG4gICAgZ3JpZ2EuZ2hvc3R5ID0gdGhpcztcclxuICAgIHRoaXMucGxheS5zdGFydEdhbWUoKTtcclxuICB9XHJcblxyXG4gIGVuZEFjdGl2ZVN0YXRlKCl7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGVdLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTmV4dEhlbHBQb3B1cENsaWNrKCl7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGVdLmNsb3NlUG9wdXAoKTtcclxuICAgIHRoaXMuaGFuZGxlSGVscEJ1dHRvbkNsaWNrKCArK3RoaXMuaGVscFBhZ2VJbmRleCV0aGlzLmhlbHBCb29rW3RoaXMuc3RhdGVdW3RoaXMuaGVscExhbmd1YWdlXS5sZW5ndGgsIHRoaXMuaGVscExhbmd1YWdlICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVIZWxwQnV0dG9uQ2xpY2soIGluZGV4ID0gMCwgbGFuZ3VhZ2UgPSB0aGlzLmhlbHBMYW5ndWFnZSApe1xyXG4gICAgdGhpcy5oZWxwUGFnZUluZGV4ID0gaW5kZXg7XHJcbiAgICB0aGlzLmhlbHBMYW5ndWFnZSA9IGxhbmd1YWdlIHx8ICdlbmdsaXNoJ1xyXG4gICAgaWYgKHRoaXNbdGhpcy5zdGF0ZV0ucG9wdXApIHsgdGhpc1t0aGlzLnN0YXRlXS5jbG9zZVBvcHVwKCkgfTtcclxuICAgIHRoaXNbdGhpcy5zdGF0ZV0ucG9wdXAgPSBuZXcgUG9wdXAoXHJcbiAgICAgICd3cmFwcGVyJyxcclxuICAgICAgYEdob3N0eSBIZWxwOiAke3RoaXMuc3RhdGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdGhpcy5zdGF0ZS5zbGljZSgxKX1gLFxyXG4gICAgICBbXHJcbiAgICAgICAge2lkOiAncG9wdXAtY2xvc2UnLCB0ZXh0OiAnQ2xvc2UnLCBjbGljazogaVYgPT4gdGhpc1t0aGlzLnN0YXRlXS5jbG9zZVBvcHVwKCBpViApfSxcclxuICAgICAgICB7aWQ6ICduZXh0LWhlbHAtcG9wdXAnLCB0ZXh0OiAnTmV4dCcsIGNsaWNrOiBpViA9PiB0aGlzLmhhbmRsZU5leHRIZWxwUG9wdXBDbGljayggaVYgKX1cclxuICAgICAgXSwgW10sXHJcbiAgICAgIHRoaXMuaGVscEJvb2tbdGhpcy5zdGF0ZV1bdGhpcy5oZWxwTGFuZ3VhZ2VdW3RoaXMuaGVscFBhZ2VJbmRleF0uaDMsXHJcbiAgICAgIHRoaXMuaGVscEJvb2tbdGhpcy5zdGF0ZV1bdGhpcy5oZWxwTGFuZ3VhZ2VdW3RoaXMuaGVscFBhZ2VJbmRleF0ucFxyXG4gICAgKSA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVIb21lQnV0dG9uQ2xpY2soKXtcclxuICAgIHRoaXMuZW5kQWN0aXZlU3RhdGUoKTtcclxuICAgIHRoaXMuaG9tZS5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlUGxheUJ1dHRvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICB0aGlzLnBsYXkuc3RhcnQoKTtcclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlRWRpdG9yQnV0dG9uQ2xpY2soKXtcclxuICAgIHRoaXMuZW5kQWN0aXZlU3RhdGUoKTtcclxuICAgIHRoaXMuZWRpdG9yLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZXZlbHNCdXR0b25DbGljaygpe1xyXG4gICAgdGhpcy5lbmRBY3RpdmVTdGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwbGF5Jykge1xyXG4gICAgICB0aGlzLmxldmVscy5zdGFydCh0aGlzLnBsYXkuY2F0ZWdvcnksIHRoaXMucGxheS5sZXZlbEluZGV4KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gJ2VkaXRvcicpIHtcclxuICAgICAgdGhpcy5sZXZlbHMuc3RhcnQodGhpcy5lZGl0b3IuY2F0ZWdvcnksIHRoaXMuZWRpdG9yLmxldmVsSW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbHMuc3RhcnQoJ2NsYXNzaWMnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlQ29udGVudERpdkNsaWNrKCl7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2hvbWUnKSB7XHJcbiAgICAgIHRoaXMuZW5kQWN0aXZlU3RhdGUoKTtcclxuICAgICAgdGhpcy5wbGF5LnN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICB0aGlzLmhvbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUhvbWVCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMucGxheV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUGxheUJ1dHRvbkNsaWNrKCkpO1xyXG4gICAgdGhpcy5lZGl0b3JfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUVkaXRvckJ1dHRvbkNsaWNrKCkpO1xyXG4gICAgdGhpcy5sZXZlbHNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUxldmVsc0J1dHRvbkNsaWNrKCkpO1xyXG4gICAgdGhpcy5oZWxwX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVIZWxwQnV0dG9uQ2xpY2soKSk7XHJcbiAgICB0aGlzLmNvbnRlbnRfZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUNvbnRlbnREaXZDbGljaygpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtuZXcgQXBwKCl9ICk7IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvciggYXBwLCBncmlnYSApe1xyXG4gICAgICAgIHRoaXMuaG90YmFyX3NjZW5lX2RhdGEgPSB7XCJkZXRhY2hlZFwiOltdLFwidGlsZXNcIjpbW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJTZWxlY3Rpb25CYWNrZ3JvdW5kXCIse31dXV1dfVxyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EgPSBncmlnYTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBncmlnYS5ncmlkc1snZWRpdG9yJ107XHJcbiAgICAgICAgdGhpcy5ob3RiYXJfZ3JpZCA9IGdyaWdhLmdyaWRzWydzZWxlY3Rpb24taG90YmFyJ107XHJcbiAgICAgICAgdGhpcy5sb3dlcl9iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG93ZXItYmFyJyk7XHJcbiAgICAgICAgdGhpcy5uZXdfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1uZXctYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5zYXZlX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3Itc2F2ZS1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnRlc3RfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci10ZXN0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItbGV2ZWwtbmFtZScpO1xyXG4gICAgICAgIHRoaXMucmVuYW1lX2J1dHRvbj0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1yZW5hbWUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbJ3ByZXNldHMnXVswXTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ3ByZXNldHMnO1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKCB0aGlzLCB0aGlzLmhvdGJhcl9ncmlkICk7XHJcbiAgICAgICAgdGhpcy5ob3RiYXJEaXNwbGF5U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGNvbHVtbnNPblNjcmVlbjogdGhpcy5ob3RiYXJfZ3JpZC5jb2x1bW5zLFxyXG4gICAgICAgICAgICByb3dzT25TY3JlZW46IHRoaXMuaG90YmFyX2dyaWQucm93cyxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNlbGVjdGlvbkhvdGJhcigpe1xyXG4gICAgICAgIHRoaXMuaG90YmFyX2dyaWQubG9hZFNjZW5lKCB0aGlzLmhvdGJhcl9zY2VuZV9kYXRhICk7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ncmlnYS5lbnRpdGllcykuZmlsdGVyKCBlbnRpdHlOYW1lID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFbJ1NlbGVjdGlvbkJhY2tncm91bmQnLCAnQmFja2dyb3VuZFRpbGUnXS5pbmNsdWRlcyggZW50aXR5TmFtZSApO1xyXG4gICAgICAgIH0gKS5maWx0ZXIoIGVOYW1lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5sb2NrTGV2ZWwgPSB0aGlzLmdyaWdhLmVudGl0aWVzW2VOYW1lXS5nZXRVbmxvY2tMZXZlbCggdGhpcy5hcHAubGV2ZWxzLmxldmVsc1snY2xhc3NpYyddICk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmxvY2tMZXZlbCA8IHRoaXMuYXBwLmxldmVscy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXg7XHJcbiAgICAgICAgfSApLmZvckVhY2goIChlbnRpdHlOYW1lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaG90YmFyX2dyaWQubmV3RW50aXR5SW5zdGFuY2UoZW50aXR5TmFtZSwge30sIHtjOmkscjowfSk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0aW9uSG90YmFyKCl7XHJcbiAgICAgICAgdGhpcy5ob3RiYXJfZ3JpZC5jbGVhclNjZW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApe1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvcl9idXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5hcHAuZWRpdG9yX3NjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VkaXRvcic7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUgPSAnZWRpdG9yJztcclxuICAgICAgICB0aGlzLmxvYWRTZWxlY3Rpb25Ib3RiYXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3RpdmF0ZUZpcnN0U2VsZWN0aW9uQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ2VkaXRvcicsICdlZGl0b3InLCB0aGlzLmFwcC5kaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ3NlbGVjdGlvbicsICdzZWxlY3Rpb24taG90YmFyJywgdGhpcy5ob3RiYXJEaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsKCBsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXggKTtcclxuICAgICAgICB0aGlzLmFwcC5zdHlsZS5yZXNpemVXcmFwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZXNpemVEaXNwbGF5cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMZXZlbCggbGV2ZWwgPSB0aGlzLmxldmVsLCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnksIGxldmVsSW5kZXggPSB0aGlzLmxldmVsSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRleCA9IGxldmVsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5hcHAuYmFja2dyb3VuZFRpbGVTY2VuZSApO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMubGV2ZWwuc2NlbmVEYXRhICk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSAncHJlc2V0cycpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbF9uYW1lLmlubmVySFRNTCA9IHRoaXMubGV2ZWwubmFtZSArICcgPGk+LS1wcmVzZXQ8L2k+JztcclxuICAgICAgICAgICAgdGhpcy50ZXN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5hbWVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfbmFtZS5pbm5lckhUTUwgPSB0aGlzLmxldmVsLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVuYW1lX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXN0X2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmdyaWQuY2xlYXJTY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7IHRoaXMuY2xvc2VQb3B1cCgpIH07XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZW1vdmVHcmlkRnJvbURpc3BsYXkodGhpcy5zdGF0ZSwgJ2VkaXRvcicpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVtb3ZlR3JpZEZyb21EaXNwbGF5KCdzZWxlY3Rpb24taG90YmFyJywgJ3NlbGVjdGlvbicpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb25Ib3RiYXIoKTtcclxuICAgICAgICB0aGlzLmFwcC5lZGl0b3JfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvcl9zY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NlbmVDaGFuZ2VkSGFuZGxlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbC5zY2VuZURhdGEgPSB0aGlzLmdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5sZXZlbHMudXBkYXRlTGV2ZWwoIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3ByZXNldHMnKXtcclxuICAgICAgICAgICAgY29uc3QgW2xldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleF0gPSB0aGlzLnNhdmVTY2VuZURhdGFBc05ld0xldmVsKCB0aGlzLmxldmVsLm5hbWUsICd1bmtub3duJywgJ3Vua25vd24nICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCggbGV2ZWwsIGNhdGVnb3J5LCBsZXZlbEluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTY2VuZURhdGFBc05ld0xldmVsKCBsZXZlbE5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IgKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubGV2ZWxzLm5ld0xldmVsKGxldmVsTmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTYXZlQXNOZXdMZXZlbFBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ2VkaXRvci1kaXNwbGF5JywgJzxpIGNsYXNzPVwiZmFzIGZhLWNsb25lXCI+PC9pPiBTYXZlIGEgY29weSBhczonLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge2lkOiAncG9wdXAtYmFjaycsIHRleHQ6ICdCYWNrJywgY2xpY2s6IGlWID0+IHRoaXMuY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAgICAgIHtpZDogJ3NhdmUtcG9wdXAtc2F2ZScsIHRleHQ6ICdTYXZlJywgY2xpY2s6IGlWID0+IHRoaXMuaGFuZGxlUG9wdXBTYXZlTmV3Q2xpY2soIGlWICl9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAnbGV2ZWwtbmFtZScsIGxhYmVsOiAnTmFtZTonLCBwbGFjZWhvbGRlcjogJ3VubmFtZWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdsZXZlbC1kaWZmaWN1bHR5JywgbGFiZWw6ICdEaWZmaWN1bHR5OicsIHBsYWNlaG9sZGVyOiAnZWFzeSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2xldmVsLWNyZWF0b3InLCBsYWJlbDogJ0NyZWF0b3I6JywgcGxhY2Vob2xkZXI6ICdZb3UnfVxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cFNhdmVOZXdDbGljayggaVYgKXtcclxuICAgICAgICB0aGlzLnNhdmVTY2VuZURhdGFBc05ld0xldmVsKFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtbmFtZSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtZGlmZmljdWx0eSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtY3JlYXRvciddXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cFJlbmFtZUNsaWNrKCBpViApe1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5yZW5hbWVMZXZlbChcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtbmFtZSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtZGlmZmljdWx0eSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtY3JlYXRvciddXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZExldmVsQXRQb3B1cENsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRMZXZlbEF0UG9wdXBDbG9zZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvTGV2ZWxzKCl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMuc3RhcnQoIHRoaXMuY2F0ZWdvcnksIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNhdmVCdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7IHRoaXMuY2xvc2VQb3B1cCgpIH07XHJcbiAgICAgICAgdGhpcy5zaG93U2F2ZUFzTmV3TGV2ZWxQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldmVsTmFtZUNsaWNrKCBlICl7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hUb0xldmVscygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRlc3RCdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHAucGxheS5zdGFydCggdGhpcy5sZXZlbCwgdGhpcy5jYXRlZ29yeSwgdGhpcy5sZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV3QnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5zdGFydCggJ3ByZXNldHMnICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVuYW1lQnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkgeyB0aGlzLmNsb3NlUG9wdXAoKSB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAncHJlc2V0cycpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2F2ZUFzTmV3TGV2ZWxQb3B1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbEF0UG9wdXBDbG9zZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ2VkaXRvci1kaXNwbGF5JywgYDxpIGNsYXNzPVwiZmFzIGZhLWktY3Vyc29yXCI+PC9pPiBSZW5hbWUgbGV2ZWwgdG86YCxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge2lkOiAncG9wdXAtYmFjaycsIHRleHQ6ICdCYWNrJywgY2xpY2s6IGlWID0+IHRoaXMuY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAgICAgICAgICB7aWQ6ICdyZW5hbWUtcG9wdXAtcmVuYW1lJywgdGV4dDogJ1NhdmUnLCBjbGljazogaVYgPT4gdGhpcy5oYW5kbGVQb3B1cFJlbmFtZUNsaWNrKCBpViApfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLW5hbWUnLCBsYWJlbDogJ05hbWU6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwubmFtZX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLWRpZmZpY3VsdHknLCBsYWJlbDogJ0RpZmZpY3VsdHk6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwuZGlmZmljdWx0eX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLWNyZWF0b3InLCBsYWJlbDogJ0NyZWF0b3I6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwuY3JlYXRvcn1cclxuICAgICAgICAgICAgXSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5uZXdfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZU5ld0J1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMudGVzdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlVGVzdEJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVMZXZlbE5hbWVDbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnJlbmFtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUmVuYW1lQnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNlbGVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvciggZWRpdG9yLCBob3RiYXIgKXtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICB0aGlzLmhvdGJhciA9IGhvdGJhcjtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlRmlyc3RTZWxlY3Rpb25CYWNrZ3JvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuaG90YmFyLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICAgICAgICB0aWxlOiB7YzowLCByOjB9LFxyXG4gICAgICAgICAgICB0eXBlOiAnU2VsZWN0aW9uQmFja2dyb3VuZCdcclxuICAgICAgICB9IClbMF0ubW91c2VEb3duSGFuZGxlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQoIHNlbGVjdGlvbkJhY2tncm91bmQgKXtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZC5kZWFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZWN0aW9uQmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICBzZWxlY3Rpb25CYWNrZ3JvdW5kLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSBzZWxlY3Rpb25CYWNrZ3JvdW5kLm90aGVyRW50aXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQgPSBzZWxlY3Rpb25CYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdG9ySGVscCA9IHtcclxuICAgIGVuZ2xpc2g6IFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdQbGFjZSBFbnRpdGllczonLFxyXG4gICAgICAgICAgICBwOiAnU2VsZWN0IHRoZSBlbnRpdHkgaW4gdGhlIHNlbGVjdGlvbiBiYXIsIHRoZW4gY2xpY2sgKG9yIGhvbGQgYW5kIGRyYWcpIHRvIHBsYWNlIGl0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ0RlbGV0ZSBFbnRpdGllczonLFxyXG4gICAgICAgICAgICBwOiAnU2VsZWN0IHRoZSBlbnRpdHkgaW4gdGhlIHNlbGVjdGlvbiBiYXIsIHRoZW4gcHJlc3MgY3RybCBhbmQgY2xpY2sgKG9yIGhvbGQgYW5kIGRyYWcpIHRvIGRlbGV0ZSB0aGUgZW50aXR5J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ1NhdmU6JyxcclxuICAgICAgICAgICAgcDogJ0FsbCBjaGFuZ2VzIGFyZSBhdXRvbWF0aWNhbGx5IHNhdmVkLiBQcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtY2xvbmVcIj48L2k+IGljb24gdG8gZHVwbGljYXRlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBMZXZlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdSZW5hbWU6JyxcclxuICAgICAgICAgICAgcDogJ1ByZXNzIHRoZSA8aSBjbGFzcz1cImZhcyBmYS1pLWN1cnNvclwiPjwvaT4gaWNvbiB0byByZW5hbWUgdGhlIGxldmVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ05ldyBMZXZlbDonLFxyXG4gICAgICAgICAgICBwOiAnVG8gc3RhcnQgY3JlYXRpbmcgYSBuZXcgbGV2ZWwsIHByZXNzIHRoZSA8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPiBpY29uIGFuZCBjaG9vc2UgYSBwcmVzZXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnVW5sb2NrIG5ldyBlbnRpdGllczonLFxyXG4gICAgICAgICAgICBwOiAnUHJvZ3Jlc3MgaW4gdGhlIGNsYXNzaWMgbGV2ZWxzIHRvIHVubG9jayBuZXcgZW50aXRpZXMgaW4gdGhlIGVkaXRvcidcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vZ3JpZ2EvZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kVGlsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHtcclxuICAgICAgd2lkdGg6IDAuMjUsXHJcbiAgICAgIGhlaWdodDogMC4yNSxcclxuICAgICAgY09mZnNldDogTWF0aC5yYW5kb20oKSozLzQsXHJcbiAgICAgIHJPZmZzZXQ6IE1hdGgucmFuZG9tKCkqMy80LFxyXG4gICAgICBzY2VuZUxvYWRlZFN1YnNjcmlwdGlvbjogdHJ1ZSxcclxuICAgIH0sIGFyZ3MgKTtcclxuICAgIGlmICh0aGlzLmdyaWQubmFtZSA9PT0gJ2VkaXRvcicpIHtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVUb01vdXNlRG93bignZWRpdG9yJyk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Nb3VzZUVudGVyKCdlZGl0b3InKTtcclxuICAgIH1cclxuICAgIHRoaXMudHlwZSA9IHBhcmFtcy50eXBlIHx8IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4KTtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ3AnICsgdGhpcy50eXBlO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBwMDogJy4vdGlsZV9pbWcvcmVkX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDE6ICcuL3RpbGVfaW1nL29yYW5nZV9mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHAyOiAnLi90aWxlX2ltZy90dXJxdW9pc2VfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwMzogJy4vdGlsZV9pbWcvbGlnaHRfYmx1ZV9mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHA0OiAnLi90aWxlX2ltZy9kYXJrX2JsdWVfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwNTogJy4vdGlsZV9pbWcveWVsbG93X2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDY6ICcuL3RpbGVfaW1nL3BpbmtfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwNzogJy4vdGlsZV9pbWcvcHVycGxlX2Zsb3dlci5qcGcnLH07XHJcbiAgfVxyXG5cclxuICBtb3VzZURvd25IYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIGN0cmxLZXkgKXtcclxuICAgIGlmICh0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3IucG9wdXApIHtyZXR1cm59O1xyXG5cclxuICAgIGlmICh0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdGVkRW50aXR5KSB7XHJcbiAgICAgIGNvbnN0IHNhbWVFbnRpdGllc09uVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoe3RpbGU6e2M6dGhpcy5jLHI6dGhpcy5yfSx0eXBlOiAgdGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3RlZEVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lfSk7XHJcbiAgICAgIGlmIChzYW1lRW50aXRpZXNPblRpbGUubGVuZ3RoID09PSAwICYmICFjdHJsS2V5KSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdGVkRW50aXR5O1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzT25UaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGlmICghZW50aXRpZXNPblRpbGUubWFwKGUgPT4gZS5hbGxvd1BsYWNpbmcoIHNlbGVjdGVkRW50aXR5ICkpLmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICAgICAgaWYgKHNlbGVjdGVkRW50aXR5LmFsbG93QmVpbmdQbGFjZWQoIHtjOnRoaXMuYywgcjp0aGlzLnJ9LCB0aGlzLmdyaWQgKSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoICBzZWxlY3RlZEVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lLCB7fSwge2M6dGhpcy5jLHI6dGhpcy5yfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zY2VuZUNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGVudGl0aWVzT25UaWxlLmZvckVhY2goIGUgPT4gZS5uZXdFbnRpdHlXYXNQbGFjZWRPblRpbGUoZW50aXR5KSApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzYW1lRW50aXRpZXNPblRpbGUubGVuZ3RoID09PSAxICYmIGN0cmxLZXkpIHtcclxuICAgICAgICBzYW1lRW50aXRpZXNPblRpbGVbMF0uYmVmb3JlRGVsZXRlKCk7XHJcbiAgICAgICAgc2FtZUVudGl0aWVzT25UaWxlWzBdLmRlbGV0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzT25UaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGVudGl0aWVzT25UaWxlLmZvckVhY2goIGUgPT4gZS5lbnRpdHlPblNhbWVUaWxlV2FzRGVsZXRlZChzYW1lRW50aXRpZXNPblRpbGVbMF0pICk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnNjZW5lQ2hhbmdlZEhhbmRsZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBtb3VzZUVudGVySGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKXtcclxuICAgIGlmIChtb3VzZUJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5tb3VzZURvd25IYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIGN0cmxLZXkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjZW5lTG9hZGVkSGFuZGxlcigpe1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5uYW1lICE9PSAncGxheScpIHtyZXR1cm59O1xyXG4gICAgdGhpcy5zY2VuZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmMgPT0gMCAmJiB0aGlzLnIgPT0gMCkgey8va2V5VHJhY2tUaWxlXHJcbiAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LnBsYXkua2V5VHJhY2tFbnRpdHkgPSB0aGlzO1xyXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdyaWQua2V5RG93blN1YnNjcmlwdGlvbnMpLmZvckVhY2goIGtleSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0tleURvd24oIGtleSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlEb3duSGFuZGxlcigga2V5ICl7IC8va2V5VHJhY2tUaWxlXHJcbiAgICBjb25zdCBhbGxFbnRpdGllcyA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgdGFza0RvbmVBcnJheSA9IGFsbEVudGl0aWVzLm1hcCggZSA9PiBlLnRhc2tEb25lKCkgKTtcclxuICAgIGlmICghdGFza0RvbmVBcnJheS5pbmNsdWRlcyggZmFsc2UgKSkge1xyXG4gICAgICBpZiAodGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dHlwZTonR29hbCd9KSkgeyAvL2lmIHRoZXJlIGV4aXN0cyBhdCBsZWFzdCBvbmUgZ29hbFxyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LnBsYXkubGV2ZWxEb25lKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zY2VuZUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS51cGRhdGVVbmRvSGlzdG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NlbmVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpbmNsdWRlSW5TY2VuZURhdGEoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2hvc3R5IGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNyApO1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5uYW1lID09PSAncGxheScpIHtcclxuICAgICAgWydBcnJvd1VwJywgJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddLmZvckVhY2goIGtleSA9PiB0aGlzLnN1YnNjcmliZVRvS2V5RG93bihrZXkpKTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsaWRhdGVkRW50aXRpZXMgPSBbXTtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gcGFyYW1zLmZhY2luZyB8fCAncmlnaHQnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyByaWdodDogJy4vdGlsZV9pbWcvZ2hvc3R5X3JpZ2h0LnBuZycsXHJcbiAgICAgICAgICAgICBsZWZ0OiAnLi90aWxlX2ltZy9naG9zdHlfbGVmdC5wbmcnLFxyXG4gICAgICAgICAgICAgdXA6ICcuL3RpbGVfaW1nL2dob3N0eV9taWRfcmlnaHQucG5nJyxcclxuICAgICAgICAgICAgIGRvd246ICcuL3RpbGVfaW1nL2dob3N0eV9taWRfbGVmdC5wbmcnfTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYXJhbXMoKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IEdob3N0eUVudGl0eS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhcmFtcy5jYWxsKHRoaXMpO1xyXG4gICAgcGFyYW1zLmZhY2luZyA9IHRoaXMuY3VycmVudEltYWdlO1xyXG4gICAgcmV0dXJuIHBhcmFtcztcclxuICB9XHJcblxyXG4gIGtleURvd25IYW5kbGVyKCBrZXkgKXtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGtleS5zbGljZSg1KS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBkaXJlY3Rpb247XHJcbiAgICBpZiAodGhpcy5yZXF1ZXN0TW92ZSggZGlyZWN0aW9uICkpIHtcclxuICAgICAgdGhpcy5tb3ZlKCBkaXJlY3Rpb24gKTtcclxuICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS5rZXlUcmFja0VudGl0eS5zY2VuZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVNb3ZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgIGlmICh0aGlzLnZhbGlkYXRlZEVudGl0aWVzLmluY2x1ZGVzKCByZXF1ZXN0Q2hhaW5bcmVxdWVzdENoYWluLmxlbmd0aC0xXVswXSApKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIHRoaXMubGF5ZXIgPT09IDcgJiYgcmVxdWVzdENoYWluW3JlcXVlc3RDaGFpbi5sZW5ndGgtMV1bMF0ubGF5ZXIgPT09IDE3ICl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWxpZGF0ZWRFbnRpdGllcy5wdXNoKHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdKTtcclxuICAgIGxldCBzdWNjZXNzID0gdGhpcy5yZXF1ZXN0TW92ZSggcmVxdWVzdENoYWluW3JlcXVlc3RDaGFpbi5sZW5ndGgtMV1bMV0gKTtcclxuICAgIHRoaXMudmFsaWRhdGVkRW50aXRpZXMgPSBbXTtcclxuICAgIHJldHVybiBzdWNjZXNzO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvYWwgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDE0ICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcuL3RpbGVfaW1nL29pbF9sYW1wLnBuZyd9O1xyXG4gIH1cclxuXHJcbiAgYWxsb3dNb3ZlKCl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRhc2tEb25lKCkge1xyXG4gICAgbGV0IGdob3N0aWVzID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgdHlwZTogJ0dob3N0eScsXHJcbiAgICB9ICk7XHJcbiAgICBpZiAoZ2hvc3RpZXNbMF0pIHtyZXR1cm4gTWF0aC5mbG9vcihnaG9zdGllc1swXS5sYXllci8xMCkgPT09IE1hdGguZmxvb3IoIHRoaXMubGF5ZXIvMTAgKX07XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZGlyZWN0aW9uVG9TaWRlLCBHaG9zdHlFbnRpdHksIG9wcG9zaXRlU2lkZSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbGUgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDEgKTtcclxuICAgIGlmICh0aGlzLmdyaWQubmFtZSA9PT0gJ3NlbGVjdGlvbi1ob3RiYXInKSB7cmV0dXJufVxyXG5cclxuICAgIHRoaXMuaG9sZUxlZnQgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKFxyXG4gICAgICB7dGlsZTogdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbignbGVmdCcsICdtb2R1bG8nKSwgdHlwZTonSG9sZSd9KVswXTtcclxuICAgIHRoaXMuaG9sZVJpZ2h0ID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyhcclxuICAgICAge3RpbGU6IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oJ3JpZ2h0JywgJ21vZHVsbycpLCB0eXBlOidIb2xlJ30pWzBdO1xyXG4gICAgdGhpcy5ob2xlVG9wID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyhcclxuICAgICAge3RpbGU6IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oJ3RvcCcsICdtb2R1bG8nKSwgdHlwZTonSG9sZSd9KVswXTtcclxuICAgIHRoaXMuaG9sZUJvdHRvbSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoXHJcbiAgICAgIHt0aWxlOiB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCdib3R0b20nLCAnbW9kdWxvJyksIHR5cGU6J0hvbGUnfSlbMF07XHJcblxyXG4gICAgaWYgKHRoaXMuaG9sZUxlZnQpIHsgdGhpcy5ob2xlTGVmdC5zZXRIb2xlKHRoaXMsICdSaWdodCcpfVxyXG4gICAgZWxzZSB7IHRoaXMuYm9yZGVyTGVmdCA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlOidsZWZ0JywgaG9sZTp0aGlzfSwge2M6dGhpcy5jLHI6dGhpcy5yfSApIH07XHJcbiAgICBpZiAodGhpcy5ob2xlUmlnaHQpIHsgdGhpcy5ob2xlUmlnaHQuc2V0SG9sZSh0aGlzLCAnTGVmdCcpIH1cclxuICAgIGVsc2UgeyB0aGlzLmJvcmRlclJpZ2h0ID0gdGhpcy5ncmlkLm5ld0VudGl0eUluc3RhbmNlKCdIb2xlQm9yZGVyJywge3NpZGU6J3JpZ2h0JywgaG9sZTp0aGlzfSwge2M6dGhpcy5jLHI6dGhpcy5yfSApIH07XHJcbiAgICBpZiAodGhpcy5ob2xlVG9wKSB7IHRoaXMuaG9sZVRvcC5zZXRIb2xlKHRoaXMsICdCb3R0b20nKSB9XHJcbiAgICBlbHNlIHsgdGhpcy5ib3JkZXJUb3AgPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoJ0hvbGVCb3JkZXInLCB7c2lkZTondG9wJywgaG9sZTp0aGlzfSwge2M6dGhpcy5jLHI6dGhpcy5yfSApIH07XHJcbiAgICBpZiAodGhpcy5ob2xlQm90dG9tKSB7IHRoaXMuaG9sZUJvdHRvbS5zZXRIb2xlKHRoaXMsICdUb3AnKSB9XHJcbiAgICBlbHNlIHsgdGhpcy5ib3JkZXJCb3R0b20gPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoJ0hvbGVCb3JkZXInLCB7c2lkZTonYm90dG9tJywgaG9sZTp0aGlzfSwge2M6dGhpcy5jLHI6dGhpcy5yfSApIH07XHJcbiAgXHJcbiAgICB0aGlzLm5ld0VudGl0eVdhc1BsYWNlZE9uVGlsZSgpO1xyXG4gICAgdGhpcy5zdWJzY3JpYmVUb1NjZW5lTG9hZGVkKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcuL3RpbGVfaW1nL2hvbGVfYmFja2dyb3VuZC5qcGcnfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgY29uc3QgbGV2ZWxOYW1lcyA9IGNsYXNzaWNMZXZlbHMubWFwKCBsID0+IGwubmFtZSApO1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsTmFtZXMuaW5kZXhPZiggJ0hvbGUnICk7XHJcbiAgICByZXR1cm4gbGV2ZWxJbmRleDtcclxuICB9XHJcblxyXG4gIHNldEhvbGUoIGhvbGUsIHNpZGUgKXtcclxuICAgIHRoaXNbYGhvbGUke3NpZGV9YF0gPSBob2xlO1xyXG4gICAgdGhpc1tgYm9yZGVyJHtzaWRlfWBdLmRlbGV0ZSgpO1xyXG4gICAgdGhpc1tgYm9yZGVyJHtzaWRlfWBdID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJlbW92ZUhvbGUoIHNpZGUgKXtcclxuICAgIHRoaXNbYGhvbGUke3NpZGV9YF0gPSBudWxsO1xyXG4gICAgdGhpc1tgYm9yZGVyJHtzaWRlfWBdID0gdGhpcy5ncmlkLm5ld0VudGl0eUluc3RhbmNlKCdIb2xlQm9yZGVyJywge3NpZGUsIGhvbGU6dGhpc30sIHtjOnRoaXMuYyxyOnRoaXMucn0gKTtcclxuICB9XHJcblxyXG4gIC8vc2hvdWxkIGhhdmUgdGhlIGFsaWFzIFVwZGF0ZSBXaGljaCBFbnRpdGllcyBhcmUgRG93blxyXG4gIG5ld0VudGl0eVdhc1BsYWNlZE9uVGlsZSgpe1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9XHJcbiAgICB9ICkuZmlsdGVyKCBlID0+ICFbJ0hvbGUnLCAnSG9sZUJvcmRlcicsICdCYWNrZ3JvdW5kVGlsZSddLmluY2x1ZGVzKCBlLmNvbnN0cnVjdG9yLm5hbWUgKSApO1xyXG4gICAgZm9yIChsZXQgbGF5ZXJEaWdpdCA9IDM7IGxheWVyRGlnaXQgPCAxMDsgbGF5ZXJEaWdpdCsrKSB7XHJcbiAgICAgIGNvbnN0IGRvd25FbnRpdHkgPSBlbnRpdGllc09uVGlsZS5maW5kKCBlID0+IGUubGF5ZXIgPT09IGxheWVyRGlnaXQgKTtcclxuICAgICAgY29uc3QgdXBFbnRpdGllcyA9IGVudGl0aWVzT25UaWxlLmZpbHRlciggZSA9PiBlLmxheWVyID09PSBsYXllckRpZ2l0ICsgMTAgKTtcclxuICAgICAgY29uc3QgdXBFbnRpdHkgPSB1cEVudGl0aWVzW3VwRW50aXRpZXMubGVuZ3RoLTFdO1xyXG4gICAgICBpZiAoICFkb3duRW50aXR5ICYmdXBFbnRpdHkgKXtcclxuICAgICAgICB1cEVudGl0eS5tb3ZlRG93bigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0YXNrRG9uZSgpe1xyXG4gICAgdGhpcy5uZXdFbnRpdHlXYXNQbGFjZWRPblRpbGUoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2NlbmVMb2FkZWRIYW5kbGVyKCl7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn1cclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gIVsnSG9sZScsICdIb2xlQm9yZGVyJywgJ0JhY2tncm91bmRUaWxlJ10uaW5jbHVkZXMoIGUuY29uc3RydWN0b3IubmFtZSApICk7XHJcbiAgICBpZiAoIGVudGl0aWVzT25UaWxlWzBdICl7XHJcbiAgICAgIHRoaXMubmV3RW50aXR5V2FzUGxhY2VkT25UaWxlKCBlbnRpdGllc09uVGlsZVswXSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGVsZXRlKCl7XHJcbiAgICBPYmplY3QudmFsdWVzKCBkaXJlY3Rpb25Ub1NpZGUgKS5mb3JFYWNoKCBzaWRlID0+IHtcclxuICAgICAgaWYgKCB0aGlzW2Bib3JkZXIke3NpZGV9YF0gKSB7XHJcbiAgICAgICAgdGhpc1tgYm9yZGVyJHtzaWRlfWBdLmRlbGV0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNbYGhvbGUke3NpZGV9YF0ucmVtb3ZlSG9sZSggb3Bwb3NpdGVTaWRlW3NpZGUudG9Mb3dlckNhc2UoKV0gKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9XHJcbiAgICB9ICkuZmlsdGVyKCBlID0+ICFbJ0hvbGUnLCAnSG9sZUJvcmRlcicsICdCYWNrZ3JvdW5kVGlsZSddLmluY2x1ZGVzKCBlLmNvbnN0cnVjdG9yLm5hbWUgKSApO1xyXG4gICAgZm9yIChsZXQgbGF5ZXJEaWdpdCA9IDM7IGxheWVyRGlnaXQgPCAxMDsgbGF5ZXJEaWdpdCsrKSB7XHJcbiAgICAgIGNvbnN0IGRvd25FbnRpdHlPblRpbGUgPSBlbnRpdGllc09uVGlsZS5maW5kKCBlID0+IGUubGF5ZXIgPT09IGxheWVyRGlnaXQpO1xyXG4gICAgICBjb25zdCB1cEVudGl0eU9uVGlsZSA9IGVudGl0aWVzT25UaWxlLmZpbmQoIGUgPT4gZS5sYXllciA9PT0gbGF5ZXJEaWdpdCArIDEwKTtcclxuICAgICAgaWYgKGRvd25FbnRpdHlPblRpbGUpIHtcclxuICAgICAgICBpZiAodXBFbnRpdHlPblRpbGUpIHtcclxuICAgICAgICAgIGRvd25FbnRpdHlPblRpbGUuZGVsZXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvd25FbnRpdHlPblRpbGUubW92ZVVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbnRpdHlPblNhbWVUaWxlV2FzRGVsZXRlZCggZGVsZXRlZEVudGl0eSApe1xyXG4gICAgdGhpcy5uZXdFbnRpdHlXYXNQbGFjZWRPblRpbGUoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXJlY3Rpb25Ub1NpZGUsIEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbGVCb3JkZXIgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDIgKTtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gcGFyYW1zLnNpZGUudG9Mb3dlckNhc2UoKSB8fCAndG9wJztcclxuICAgIHRoaXMuaG9sZSA9IHBhcmFtcy5ob2xlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IHRvcDogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfdG9wLnBuZycsXHJcbiAgICAgICAgICAgICByaWdodDogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfcmlnaHQucG5nJyxcclxuICAgICAgICAgICAgIGJvdHRvbTogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfYm90dG9tLnBuZycsXHJcbiAgICAgICAgICAgICBsZWZ0OiAnLi90aWxlX2ltZy9ob2xlX2JvcmRlcl9sZWZ0LnBuZyd9O1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIHJldHVybiBJbmZpbml0eTtcclxuICB9XHJcblxyXG4gIGluY2x1ZGVJblNjZW5lRGF0YSgpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dMZWF2ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICBjb25zdCB2YWxpZCA9IGRpcmVjdGlvblRvU2lkZVtyZXF1ZXN0Q2hhaW5bIHJlcXVlc3RDaGFpbi5sZW5ndGgtMSBdWzFdXS50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLmN1cnJlbnRJbWFnZTtcclxuICAgIGNvbnN0IGRvd24gPSByZXF1ZXN0Q2hhaW5bIHJlcXVlc3RDaGFpbi5sZW5ndGgtMSBdWzBdLmxheWVyID09PSA3OyAvL2ZpeFxyXG4gICAgaWYgKGRvd24gJiYgIXZhbGlkKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b25lIGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNyApO1xyXG4gICAgdGhpcy5zZXRXaWR0aCggMC45ICk7XHJcbiAgICB0aGlzLnNldEhlaWdodCggMC45ICk7XHJcbiAgICB0aGlzLnNldENPZmZzZXQoIDAuMDUgKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggMC4wNSApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnLi90aWxlX2ltZy9zdG9uZS5qcGcnfTtcclxuICB9XHJcblxyXG4gIGFsbG93UGxhY2luZygpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dCZWluZ1BsYWNlZCggdGlsZSwgZWRpdG9yR3JpZCApe1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSBlZGl0b3JHcmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB0aWxlXHJcbiAgICB9ICkuZmlsdGVyKCBlID0+ICFbJ0JhY2tncm91bmRUaWxlJywgJ0hvbGUnLCAnSG9sZUJvcmRlciddLmluY2x1ZGVzKGUuY29uc3RydWN0b3IubmFtZSkgKTtcclxuICAgIGlmIChlbnRpdGllc09uVGlsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29vZGVuQm94IGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNyApO1xyXG4gICAgdGhpcy5zZXRXaWR0aCggMC45ICk7XHJcbiAgICB0aGlzLnNldEhlaWdodCggMC45ICk7XHJcbiAgICB0aGlzLnNldENPZmZzZXQoIDAuMDUgKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggMC4wNSApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnLi90aWxlX2ltZy93b29kZW5fYm94LmpwZyd9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnQm94ZXMnICk7XHJcbiAgICByZXR1cm4gbGV2ZWxJbmRleDtcclxuICB9XHJcblxyXG4gIGFsbG93TW92ZShyZXF1ZXN0Q2hhaW4pe1xyXG4gICAgaWYgKCB0aGlzLmxheWVyID09PSA3ICYmIHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdLmxheWVyID09PSAxNyApe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAocmVxdWVzdENoYWluLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TW92ZShyZXF1ZXN0Q2hhaW5bMF1bMV0sIHJlcXVlc3RDaGFpbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbnRpdHlXaWxsTW92ZVRvVGlsZSggZW50aXR5LCBkaXJlY3Rpb24gKSB7XHJcbiAgICBpZiAoIHRoaXMubGF5ZXIgPT09IGVudGl0eS5sYXllciApe1xyXG4gICAgICB0aGlzLm1vdmUoIGRpcmVjdGlvbiApO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uVG9TaWRlID0ge1xyXG4gIHVwOiAnVG9wJyxcclxuICBkb3duOiAnQm90dG9tJyxcclxuICBsZWZ0OiAnTGVmdCcsXHJcbiAgcmlnaHQ6ICdSaWdodCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0ge1xyXG4gIHVwOiAnZG93bicsXHJcbiAgZG93bjogJ3VwJyxcclxuICBsZWZ0OiAncmlnaHQnLFxyXG4gIHJpZ2h0OiAnbGVmdCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcHBvc2l0ZVNpZGUgPSB7XHJcbiAgYm90dG9tOiAnVG9wJyxcclxuICB0b3A6ICdCb3R0b20nLFxyXG4gIHJpZ2h0OiAnTGVmdCcsXHJcbiAgbGVmdDogJ1JpZ2h0JyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdob3N0eUVudGl0eSBleHRlbmRzIEVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncywgbGF5ZXIgPSAxICl7XHJcbiAgICAvL292ZXJ3cml0ZSBwYXJhbXMgaWYgdGhlIGVudGl0aWVzIGFyZSBpbiBlZGl0b3Igb3Igc2VsZWN0aW9uLWhvdGJhciBncmlkXHJcbiAgICBjb25zdCBzdXBlclBhcmFtcyA9IHtsYXllcn07XHJcbiAgICBpZiAocGFyYW1zLmxheWVyQWRkZW5kKSB7IHN1cGVyUGFyYW1zLmxheWVyICs9IHBhcmFtcy5sYXllckFkZGVuZCB9O1xyXG4gICAgc3VwZXIoIHN1cGVyUGFyYW1zLCBhcmdzICk7XHJcbiAgICB0aGlzLndpZHRoTXVsdGlwbGllciA9IDE7XHJcbiAgICB0aGlzLmhlaWdodE11bHRpcGxpZXIgPSAxO1xyXG4gICAgdGhpcy5sYXllckFkZGVuZCA9IHBhcmFtcy5sYXllckFkZGVuZCB8fCAwO1xyXG4gICAgdGhpcy5iYXNpc1dpZHRoID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMuYmFzaXNIZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgIHRoaXMuYmFzaXNDT2Zmc2V0ID0gdGhpcy5jT2Zmc2V0O1xyXG4gICAgdGhpcy5iYXNpc1JPZmZzZXQgPSB0aGlzLnJPZmZzZXQ7XHJcbiAgICB0aGlzLmJhc2lzTGF5ZXIgPSBsYXllcjtcclxuICAgIHRoaXMubW92ZWRWZXJ0aWNhbGx5ID0gMDtcclxuICAgIHRoaXMuYWRkV2lkdGhNdWx0aXBsaWVyKCBwYXJhbXMud2lkdGhNdWx0aXBsaWVyIHx8IDEgKTtcclxuICAgIHRoaXMuYWRkSGVpZ2h0TXVsdGlwbGllciggcGFyYW1zLmhlaWdodE11bHRpcGxpZXIgfHwgMSApO1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5uYW1lID09PSAnc2VsZWN0aW9uLWhvdGJhcicpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25CYWNrZ3JvdW5kID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dGlsZTp7Yzp0aGlzLmMscjp0aGlzLnJ9LHR5cGU6J1NlbGVjdGlvbkJhY2tncm91bmQnfSlbMF07XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQmFja2dyb3VuZC5zZXRPdGhlckVudGl0eSggdGhpcyApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYXJhbXMoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHdpZHRoTXVsdGlwbGllcjogdGhpcy53aWR0aE11bHRpcGxpZXIsXHJcbiAgICAgIGhlaWdodE11bHRpcGxpZXI6IHRoaXMuaGVpZ2h0TXVsdGlwbGllcixcclxuICAgICAgbGF5ZXJBZGRlbmQ6IHRoaXMubGF5ZXJBZGRlbmRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdmVVcCgpe1xyXG4gICAgdGhpcy5tb3ZlZFZlcnRpY2FsbHkrKztcclxuICAgIHRoaXMuYWRkSGVpZ2h0TXVsdGlwbGllciggMTYvMTQgKTtcclxuICAgIHRoaXMuYWRkV2lkdGhNdWx0aXBsaWVyKCAxNi8xNCApO1xyXG4gICAgdGhpcy5hZGRMYXllckFkZGVuZCggKzEwICk7XHJcbiAgfVxyXG5cclxuICBtb3ZlRG93bigpe1xyXG4gICAgdGhpcy5tb3ZlZFZlcnRpY2FsbHktLTtcclxuICAgIHRoaXMuYWRkSGVpZ2h0TXVsdGlwbGllciggMTQvMTYgKTtcclxuICAgIHRoaXMuYWRkV2lkdGhNdWx0aXBsaWVyKCAxNC8xNiApO1xyXG4gICAgdGhpcy5hZGRMYXllckFkZGVuZCggLTEwICk7XHJcbiAgfVxyXG5cclxuICBhZGRXaWR0aE11bHRpcGxpZXIoIG11bHRpcGxpZXIgKXtcclxuICAgIHRoaXMud2lkdGhNdWx0aXBsaWVyICo9IG11bHRpcGxpZXI7XHJcbiAgICB0aGlzLnNldFdpZHRoKCB0aGlzLmJhc2lzV2lkdGggKTtcclxuICAgIHRoaXMuc2V0Q09mZnNldCggdGhpcy5iYXNpc0NPZmZzZXQgKTtcclxuICB9XHJcblxyXG4gIGFkZEhlaWdodE11bHRpcGxpZXIoIG11bHRpcGxpZXIgKXtcclxuICAgIHRoaXMuaGVpZ2h0TXVsdGlwbGllciAqPSBtdWx0aXBsaWVyO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIHRoaXMuYmFzaXNIZWlnaHQgKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggdGhpcy5iYXNpc1JPZmZzZXQgKTtcclxuICB9XHJcblxyXG4gIGFkZExheWVyQWRkZW5kKCBhZGRlbmQgKXtcclxuICAgIHRoaXMubGF5ZXJBZGRlbmQgKz0gYWRkZW5kO1xyXG4gICAgdGhpcy5jaGFuZ2VMYXllciggdGhpcy5iYXNpc0xheWVyICk7XHJcbiAgfVxyXG5cclxuICBzZXRXaWR0aCggd2lkdGggKXtcclxuICAgIHRoaXMuYmFzaXNXaWR0aCA9IHdpZHRoO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRXaWR0aC5jYWxsKCB0aGlzLCB3aWR0aCp0aGlzLndpZHRoTXVsdGlwbGllcik7XHJcbiAgfVxyXG5cclxuICBzZXRIZWlnaHQoIGhlaWdodCApe1xyXG4gICAgdGhpcy5iYXNpc0hlaWdodCA9IGhlaWdodDtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0SGVpZ2h0LmNhbGwoIHRoaXMsIGhlaWdodCp0aGlzLmhlaWdodE11bHRpcGxpZXIgKTtcclxuICB9XHJcblxyXG4gIHNldENPZmZzZXQoIGNPZmZzZXQgKXtcclxuICAgIHRoaXMuYmFzaXNDT2Zmc2V0ID0gY09mZnNldDtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0Q09mZnNldC5jYWxsKCB0aGlzLCBjT2Zmc2V0ICsgKDEtdGhpcy53aWR0aE11bHRpcGxpZXIpLzIgKTtcclxuICB9XHJcblxyXG4gIHNldFJPZmZzZXQoIHJPZmZzZXQgKXtcclxuICAgIHRoaXMuYmFzaXNST2Zmc2V0ID0gck9mZnNldDtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0Uk9mZnNldC5jYWxsKCB0aGlzLCByT2Zmc2V0ICsgKDEtdGhpcy5oZWlnaHRNdWx0aXBsaWVyKS8yICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYXllciggbGF5ZXIgKXtcclxuICAgIHRoaXMuYmFzaXNMYXllciA9IGxheWVyO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5jaGFuZ2VMYXllci5jYWxsKCB0aGlzLCBsYXllciArIHRoaXMubGF5ZXJBZGRlbmQgKTtcclxuICB9XHJcblxyXG4gIG1vdmUoIGRpcmVjdGlvbiwgYXV0b2FuaW1hdGUgPSB0cnVlICkge1xyXG4gICAgY29uc3QgYWJzUG9zID0gdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbihkaXJlY3Rpb24sICdtb2R1bG8nKTtcclxuICAgIGNvbnN0IGVudGl0aWVzT25OZXdUaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiBhYnNQb3MsXHJcbiAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKTtcclxuICAgIGNvbnN0IGVudGl0aWVzT25UaGlzVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZTogeyBjOnRoaXMuYywgcjp0aGlzLnIgfSxcclxuICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApO1xyXG4gICAgZW50aXRpZXNPbk5ld1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eVdpbGxNb3ZlVG9UaWxlKCB0aGlzLCBkaXJlY3Rpb24gKTtcclxuICAgIH0gKTtcclxuICAgIEVudGl0eS5wcm90b3R5cGUubW92ZS5jYWxsKCB0aGlzLCBhYnNQb3MgKTtcclxuICAgIGVudGl0aWVzT25OZXdUaWxlLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgIGVudGl0eS5lbnRpdHlNb3ZlZFRvVGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICBlbnRpdGllc09uVGhpc1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eVdpbGxMZWF2ZVRpbGUoIHRoaXMsIGRpcmVjdGlvbiApO1xyXG4gICAgfSApO1xyXG4gICAgZW50aXRpZXNPblRoaXNUaWxlLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgIGVudGl0eS5lbnRpdHlMZWZ0VGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICBpZiAoYXV0b2FuaW1hdGUpIHtcclxuICAgICAgaWYgKCAhdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbiApe1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9SZW5kZXJTdGFydCgpO1xyXG4gICAgICAgIHRoaXMuY09mZnNldEJlZm9yZU1vdmUgPSB0aGlzLmJhc2lzQ09mZnNldDtcclxuICAgICAgICB0aGlzLnJPZmZzZXRCZWZvcmVNb3ZlID0gdGhpcy5iYXNpc1JPZmZzZXQ7XHJcbiAgICAgICAgdGhpcy53aWR0aEJlZm9yZU1vdmUgPSB0aGlzLmJhc2lzV2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRCZWZvcmVNb3ZlID0gdGhpcy5iYXNpc0hlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlc2V0T2Zmc2V0VG9CZWZvcmVNb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5sYXN0TW92ZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgdGhpcy5sYXN0TW92ZURpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3RNb3ZlKCBkaXJlY3Rpb24sIHJlcXVlc3RDaGFpbiA9IFtdICkge1xyXG4gICAgcmVxdWVzdENoYWluLnB1c2goW3RoaXMsIGRpcmVjdGlvbl0pO1xyXG4gICAgY29uc3QgYWJzUG9zID0gdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbihkaXJlY3Rpb24sICdtb2R1bG8nKTtcclxuICAgIGNvbnN0IGVudGl0aWVzT25OZXdUaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiBhYnNQb3MsXHJcbiAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKTtcclxuICAgIGNvbnN0IGVudGl0aWVzT25UaGlzVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn1cclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gZSAhPT0gdGhpcyAmJiBlLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdCYWNrZ3JvdW5kVGlsZScgKTtcclxuICAgIGNvbnN0IHN1Y2Vzc2VzID0gZW50aXRpZXNPbk5ld1RpbGUubWFwKCBlID0+IGUudmFsaWRhdGVNb3ZlKFsuLi5yZXF1ZXN0Q2hhaW5dKSApO1xyXG4gICAgY29uc3QgbGVhdmVTdWNlc3NlcyA9IGVudGl0aWVzT25UaGlzVGlsZS5tYXAoIGUgPT4gZS5hbGxvd0xlYXZlKFsuLi5yZXF1ZXN0Q2hhaW5dKSApO1xyXG4gICAgaWYgKHN1Y2Vzc2VzLmluY2x1ZGVzKCBmYWxzZSApIHx8IGxlYXZlU3VjZXNzZXMuaW5jbHVkZXMoIGZhbHNlICkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB2YWxpZGF0ZXMgYSBtb3ZlIGluIHRoZSBnaXZlbiBkaXJlY3Rpb24uIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBmcm9tIEdob3N0eUVudGl0eS5zdGFydE1vdmU7XHJcbiAgICogQHBhcmFtIHsqfSByZXF1ZXN0Q2hhaW4gXHJcbiAgICovXHJcbiAgdmFsaWRhdGVNb3ZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgIC8vYXZvaWQgb3ZlcmZsb3csIGp1c3QgYWxsb3cgbW92ZVxyXG4gICAgaWYgKHJlcXVlc3RDaGFpbi5tYXAoIGEgPT4gYVswXSApLmluY2x1ZGVzKCB0aGlzICkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvL2FkZCB0aGUgc3RhY2stb24tdG9wLWJlaGF2aW9yIGZvciBhbGwgbGF5ZXIgMTcgZW50aXRpZXMgKGV4ZXB0IGdob3N0aWVzIG1heWJlKVxyXG4gICAgaWYgKCB0aGlzLmxheWVyID09PSA3ICYmIHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdLmxheWVyID09PSAxNyApe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbG93TW92ZSA9IHRoaXMuYWxsb3dNb3ZlKCByZXF1ZXN0Q2hhaW4gKTtcclxuICAgIHJldHVybiBhbGxvd01vdmU7XHJcbiAgfVxyXG5cclxuICByZXNldE9mZnNldFRvQmVmb3JlTW92ZSgpe1xyXG4gICAgdGhpcy5zZXRDT2Zmc2V0KCB0aGlzLmNPZmZzZXRCZWZvcmVNb3ZlICk7XHJcbiAgICB0aGlzLnNldFJPZmZzZXQoIHRoaXMuck9mZnNldEJlZm9yZU1vdmUgKTtcclxuICB9XHJcblxyXG4gIG1vdmVPZmZzZXRGdW5jdGlvbiggdGltZVNpbmNlTGFzdE1vdmUsIG1vdmVEdXJhdGlvbiApe1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gMSAtIE1hdGguc3FydCggdGltZVNpbmNlTGFzdE1vdmUvbW92ZUR1cmF0aW9uICk7XHJcbiAgICByZXR1cm4gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0TW92ZUFuaW1hdGlvbk9mZnNldCggdGltZVNpbmNlTGFzdE1vdmUsIGR1cmF0aW9uICl7XHJcbiAgICBjb25zdCBhYnNPZmZzZXQgPSB0aGlzLm1vdmVPZmZzZXRGdW5jdGlvbiggdGltZVNpbmNlTGFzdE1vdmUsIGR1cmF0aW9uICk7XHJcbiAgICBpZiAoYWJzT2Zmc2V0IDw9IDApIHtcclxuICAgICAgdGhpcy5yZXNldE9mZnNldFRvQmVmb3JlTW92ZSgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMubGFzdE1vdmVEaXJlY3Rpb24gPT09ICdyaWdodCcpeyB0aGlzLnNldENPZmZzZXQoIC1hYnNPZmZzZXQrdGhpcy5jT2Zmc2V0QmVmb3JlTW92ZSApIH1cclxuICAgIGVsc2UgaWYgKHRoaXMubGFzdE1vdmVEaXJlY3Rpb24gPT09ICdsZWZ0Jyl7IHRoaXMuc2V0Q09mZnNldCggYWJzT2Zmc2V0K3RoaXMuY09mZnNldEJlZm9yZU1vdmUgKSB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmxhc3RNb3ZlRGlyZWN0aW9uID09PSAndXAnKXsgdGhpcy5zZXRST2Zmc2V0KCBhYnNPZmZzZXQrdGhpcy5yT2Zmc2V0QmVmb3JlTW92ZSApIH1cclxuICAgIGVsc2UgaWYgKHRoaXMubGFzdE1vdmVEaXJlY3Rpb24gPT09ICdkb3duJyl7IHRoaXMuc2V0Uk9mZnNldCggLWFic09mZnNldCt0aGlzLnJPZmZzZXRCZWZvcmVNb3ZlICkgfTtcclxuICB9XHJcblxyXG4gIHJlc2V0U2l6ZVRvQmVmb3JlTW92ZSgpe1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIHRoaXMuaGVpZ2h0QmVmb3JlTW92ZSApO1xyXG4gICAgdGhpcy5zZXRXaWR0aCggdGhpcy53aWR0aEJlZm9yZU1vdmUgKTtcclxuICAgIHRoaXMubW92ZWRWZXJ0aWNhbGx5ID0gMDtcclxuICB9XHJcblxyXG4gIHZlcnRpY2FsTW92ZVNpemVGdW5jdGlvbiggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQsIGR1cmF0aW9uICl7XHJcbiAgICBjb25zdCBzdGFydEZhY3RvciA9IE1hdGgucG93KDE0LzE2LCB0aGlzLm1vdmVkVmVydGljYWxseSk7XHJcbiAgICBjb25zdCBzdGFydFdpZHRoID0gdGhpcy53aWR0aEJlZm9yZU1vdmUgKiBzdGFydEZhY3RvcjtcclxuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gdGhpcy5oZWlnaHRCZWZvcmVNb3ZlICogc3RhcnRGYWN0b3I7XHJcbiAgICBjb25zdCB3aWR0aCA9IHN0YXJ0V2lkdGggKyAodGhpcy53aWR0aEJlZm9yZU1vdmUgLSBzdGFydFdpZHRoKSpNYXRoLnBvdyggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQvZHVyYXRpb24sIDIgKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHN0YXJ0SGVpZ2h0ICsgKHRoaXMuaGVpZ2h0QmVmb3JlTW92ZSAtIHN0YXJ0SGVpZ2h0KSpNYXRoLnBvdyggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQvZHVyYXRpb24sIDIgKTtcclxuICAgIHJldHVybiBbIHdpZHRoLCBoZWlnaHQgXTtcclxuICB9XHJcblxyXG4gIHNldFZlcnRpY2FsTW92ZUFuaW1hdGlvblNpemUoIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0LCBkdXJhdGlvbiApIHtcclxuICAgIGNvbnN0IFsgd2lkdGgsIGhlaWdodCBdID0gdGhpcy52ZXJ0aWNhbE1vdmVTaXplRnVuY3Rpb24oIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0LCBkdXJhdGlvbiApO1xyXG4gICAgaWYgKCB0aW1lU2luY2VBbmltYXRpb25TdGFydCA+IGR1cmF0aW9uICl7XHJcbiAgICAgIHRoaXMucmVzZXRTaXplVG9CZWZvcmVNb3ZlKClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFdpZHRoKCB3aWR0aCApO1xyXG4gICAgICB0aGlzLnNldEhlaWdodCggaGVpZ2h0ICk7XHJcbiAgICAgIHRoaXMuc2V0Q09mZnNldCggKDEtd2lkdGgpLzIgKTtcclxuICAgICAgdGhpcy5zZXRST2Zmc2V0KCAoMS1oZWlnaHQpLzIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclN0YXJ0SGFuZGxlcigpe1xyXG4gICAgY29uc3QgdGltZVNpbmNlTGFzdE1vdmUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdE1vdmVUaW1lO1xyXG4gICAgaWYgKHRoaXMuc2V0TW92ZUFuaW1hdGlvbk9mZnNldCh0aW1lU2luY2VMYXN0TW92ZSwgMTAwKSkgeyAvL2lzIGNhbGxlZCB1bm5lc3NlY2FyaWx5IG9mdGVuXHJcbiAgICAgIGlmICh0aGlzLnNldFZlcnRpY2FsTW92ZUFuaW1hdGlvblNpemUoIHRpbWVTaW5jZUxhc3RNb3ZlIC0gMTAwLCAxMDAgKSkge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVGcm9tUmVuZGVyU3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2tzIGlmIHRoZSByZXF1ZXN0ZWQgbW92ZSBpcyB2YWxpZC4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGJ5IENoaWxkLiBSZXR1cm5zIGFsbG93TW92ZVxyXG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdENoYWluIFxyXG4gICAqIEBwYXJhbSB7Kn0gZGlyZWN0aW9uIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbG93TW92ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICByZXR1cm4gcmVxdWVzdENoYWluWyByZXF1ZXN0Q2hhaW4ubGVuZ3RoLTEgXVswXS5sYXllciAhPT0gdGhpcy5sYXllcjtcclxuICB9XHJcblxyXG4gIFxyXG4gIGFsbG93TGVhdmUoIHJlcXVlc3RDaGFpbiApe1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhbGxvd1BsYWNpbmcoIGVudGl0eSApe1xyXG4gICAgcmV0dXJuIGVudGl0eS5sYXllciAhPT0gdGhpcy5sYXllcjtcclxuICB9XHJcblxyXG4gIGFsbG93QmVpbmdQbGFjZWQoIHRpbGUsIGVkaXRvckdyaWQgKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGVsZXRlKCl7XHJcbiAgICAvL2RvU29tZXRoaW5nXHJcbiAgfVxyXG5cclxuICBlbnRpdHlPblNhbWVUaWxlV2FzRGVsZXRlZCggZGVsZXRlZEVudGl0eSApe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5V2lsbExlYXZlVGlsZSggZW50aXR5LCBkaXJlY3Rpb24gKXtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGVudGl0eUxlZnRUaWxlKCBlbnRpdHksIGRpcmVjdGlvbiApe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5V2lsbE1vdmVUb1RpbGUoIGVudGl0eSwgZGlyZWN0aW9uICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5TW92ZWRUb1RpbGUoIGVudGl0eSwgZGlyZWN0aW9uICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgLy9mb3IgbGV2ZWxEb25lIGNoZWNrXHJcbiAgdGFza0RvbmUoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5ld0VudGl0eVdhc1BsYWNlZE9uVGlsZSggZW50aXR5ICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQmFja2dyb3VuZCBleHRlbmRzIEVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHtcclxuICAgICAgbW91c2VEb3duU3Vic2NyaXB0aW9uczogWydzZWxlY3Rpb24nXSxcclxuICAgIH0sIGFyZ3MgKTtcclxuICAgIHRoaXMub3RoZXJFbnRpdHkgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnZGVhY3RpdmUnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWFjdGl2ZTogJycsXHJcbiAgICAgICAgICAgICBhY3RpdmU6ICcuL3RpbGVfaW1nL3NlbGVjdGlvbl9iYWNrZ3JvdW5kX2FjdGl2ZV9nZW5fMi5qcGcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3RoZXJFbnRpdHkoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLm90aGVyRW50aXR5ID0gZW50aXR5SW5zdGFuY2U7XHJcbiAgICBlbnRpdHlJbnN0YW5jZS5hZGRXaWR0aE11bHRpcGxpZXIoIDAuOCApO1xyXG4gICAgZW50aXR5SW5zdGFuY2UuYWRkSGVpZ2h0TXVsdGlwbGllciggMC44ICk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpe1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnYWN0aXZlJztcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGUoKXtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2RlYWN0aXZlJztcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoKXtcclxuICAgIGlmICh0aGlzLm90aGVyRW50aXR5KSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSA9PT0gJ2RlYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggdGhpcyApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudEltYWdlID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggbnVsbCApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaXplKCBlbnRpdHlPblRvcCApe1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRDT2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLndpZHRoKjAuMSApO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRST2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLmhlaWdodCowLjEgKTtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0V2lkdGguY2FsbCggZW50aXR5T25Ub3AsIHRoaXMud2lkdGgqMC44ICk7XHJcbiAgICBFbnRpdHkucHJvdG90eXBlLnNldEhlaWdodC5jYWxsKCBlbnRpdHlPblRvcCwgdGhpcy5oZWlnaHQqMC44ICk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKCBhcHAgKXtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5ncmlnYSA9IHRoaXMuYXBwLmdyaWdhO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKXtcclxuICAgIHRoaXMuYXBwLmhvbWVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5hcHAuaG9tZV9zY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmFwcC5zdGF0ZSA9ICdob21lJztcclxuICAgIHRoaXMuYXBwLnN0eWxlLnJlc2l6ZVdyYXBwZXIoKTtcclxuICB9XHJcblxyXG4gIGVuZCgpe1xyXG4gICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICB0aGlzLmFwcC5ob21lX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuYXBwLmhvbWVfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpe1xyXG4gICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUhlbHAgPSB7XHJcbiAgZW5nbGlzaDogXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBoMzogbnVsbCxcclxuICAgICAgcDogJ0dob3N0eSB3YXMgZGV2ZWxvcGVkIGJ5IFRvbSBLb3BvbHQuIFxcbiBDdXJyZW50IFZlcnNpb246IDEuMC4wJ1xyXG4gICAgfVxyXG4gIF1cclxufSIsImltcG9ydCBjbGFzc2ljTGV2ZWxzIGZyb20gJy4vbGV2ZWwvYWxsX2NsYXNzaWNfbGV2ZWxzLmpzb24nO1xyXG5pbXBvcnQgcHJlc2V0TGV2ZWxzIGZyb20gJy4vbGV2ZWwvcHJlc2V0cy5qc29uJztcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVscyB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLmdyaWdhID0gdGhpcy5hcHAuZ3JpZ2E7XHJcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdyaWdhLmdyaWRzWydwcmV2aWV3J107XHJcbiAgICB0aGlzLmxldmVscyA9IHtcclxuICAgICAgY2xhc3NpYzogY2xhc3NpY0xldmVscyxcclxuICAgICAgeW91ckxldmVsczogdGhpcy5hcHAubG9jYWxTdG9yYWdlLmdldFlvdXJMZXZlbHMoKSxcclxuICAgICAgcHJlc2V0czogcHJlc2V0TGV2ZWxzLFxyXG4gICAgfVxyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVscy1jb250YWluZXInKTtcclxuICAgIHRoaXMuY2xhc3NpY19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NpYy1idXR0b24nKTtcclxuICAgIHRoaXMueW91ckxldmVsc19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ci1sZXZlbHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLnByZXNldHNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLmhhbmRsZUxldmVsc0NvbnRhaW5lckNsaWNrKCBlICkpO1xyXG4gICAgdGhpcy5jbGFzc2ljX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5jaGFuZ2VTdGF0ZSgnY2xhc3NpYycpKTtcclxuICAgIHRoaXMueW91ckxldmVsc19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuY2hhbmdlU3RhdGUoJ3lvdXJMZXZlbHMnKSk7XHJcbiAgICB0aGlzLnByZXNldHNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNoYW5nZVN0YXRlKCdwcmVzZXRzJykpO1xyXG5cclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ2NsYXNzaWMnKTtcclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ3lvdXJMZXZlbHMnKTtcclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ3ByZXNldHMnKTtcclxuICAgIHRoaXMuZ2V0Q2xhc3NpY0xldmVsc0hpZ2hlc3RMZXZlbEluZGV4KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCggY2F0ZWdvcnkgPSAnY2xhc3NpYycsIGxldmVsSW5kZXgpIHtcclxuICAgIHRoaXMuYXBwLnN0YXRlID0gJ2xldmVscyc7XHJcbiAgICB0aGlzLmFwcC5sZXZlbHNfc2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgdGhpcy5hcHAubGV2ZWxzX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPSBsZXZlbEluZGV4IHx8ICB0aGlzLmxldmVsc1sgY2F0ZWdvcnkgXS5sZW5ndGgtMSA7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCBjYXRlZ29yeSwgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUucmVzaXplV3JhcHBlcigpO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsYmFySGVpZ2h0KCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxQb3NUb0xldmVsKCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICBpZiAodGhpcy5wb3B1cCkge1xyXG4gICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgdGhpcy5hcHAubGV2ZWxzX3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHRoaXMuYXBwLmxldmVsc19idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGUrJ19idXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZGVsZXRlRGlzcGxheXMoKTtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIG9sZFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU3RhdGUoIHN0YXRlLCBkZXRhaWxzTGV2ZWxJbmRleCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgdGhpc1t0aGlzLnN0YXRlKydfYnV0dG9uJ10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgICB0aGlzLmRlbGV0ZURpc3BsYXlzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGUrJ19idXR0b24nXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuY2xlYXJMZXZlbHNDb250YWluZXIoKTtcclxuICAgIHRoaXMuZmlsbExldmVsc0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IGRldGFpbHNMZXZlbEluZGV4IHx8IHRoaXMubGV2ZWxzWyB0aGlzLnN0YXRlIF0ubGVuZ3RoLTE7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2NsYXNzaWMnKSB7dGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IHRoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4fTtcclxuICAgIGlmICh0aGlzLmRldGFpbHNMZXZlbEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgdGhpcy5zaG93TGV2ZWxEZXRhaWxzKCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIGlmICh0aGlzLmRldGFpbHNMZXZlbEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsUG9zVG9MZXZlbCggdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NpY0xldmVsc0hpZ2hlc3RMZXZlbEluZGV4KCl7XHJcbiAgICBjb25zdCBjbGFzc2ljSGlnaGVzdExldmVsTmFtZSA9IHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5nZXRIaWdoZXN0TGV2ZWwoJ2NsYXNzaWMnKSB8fCAnSW50cm9kdWN0aW9uJztcclxuICAgIGNvbnN0IGNsYXNzaWNIaWdoZXN0TGV2ZWwgPSB0aGlzLmxldmVsc1snY2xhc3NpYyddLmZpbmQoIGwgPT4gbC5uYW1lID09PSBjbGFzc2ljSGlnaGVzdExldmVsTmFtZSApO1xyXG4gICAgdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXggPSB0aGlzLmxldmVsc1snY2xhc3NpYyddLmluZGV4T2YoIGNsYXNzaWNIaWdoZXN0TGV2ZWwgKTtcclxuICB9XHJcblxyXG4gIGxldmVsRG9uZSggbGV2ZWxJbmRleCApe1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNhdmVMZXZlbFNvbHZlZCggdGhpcy5sZXZlbHNbJ2NsYXNzaWMnXVtsZXZlbEluZGV4XS5uYW1lLCAnY2xhc3NpYycgKTtcclxuICAgIGlmICggbGV2ZWxJbmRleCA9PT0gdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXggKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4Kys7XHJcbiAgICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zYXZlSGlnaGVzdExldmVsKCB0aGlzLmxldmVsc1snY2xhc3NpYyddW3RoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4XS5uYW1lLCAnY2xhc3NpYycgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExldmVsSHRtbFN0cmluZyhsZXZlbCwgaSl7XHJcblxyXG4gICAgbGV0IHNvbHZlZFN0cmluZyA9IFsndW5zb2x2ZWQnLCdzb2x2ZWQnXVswK3RoaXMuYXBwLmxvY2FsU3RvcmFnZS5nZXRMZXZlbFNvbHZlZCggbGV2ZWwubmFtZSwgdGhpcy5zdGF0ZSApXTtcclxuXHJcbiAgICBsZXQgbGV2ZWxCYXJCdXR0b25zU3RyaW5nID0gYDxkaXYgY2xhc3M9XCJsZXZlbC1wbGF5LWJ1dHRvbiBidXR0b24gJHtzb2x2ZWRTdHJpbmd9XCIgZGF0YS1sZXZlbD1cIiR7aX1cIj48aSBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9pPjwvZGl2PmA7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3ByZXNldHMnKSB7XHJcbiAgICAgIGxldmVsQmFyQnV0dG9uc1N0cmluZyA9IGA8ZGl2IGNsYXNzPVwiYnV0dG9uIGxldmVsLWVkaXQtYnV0dG9uXCIgZGF0YS1pbmRleD1cIiR7aX1cIj48aSBjbGFzcz1cImZhcyBmYS1wZW5cIj48L2k+PC9kaXY+YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWRpdG9yQnV0dG9uQ29udGFpbmVyID0gJyc7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgIGVkaXRvckJ1dHRvbkNvbnRhaW5lciA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1idXR0b25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBsZXZlbC1lZGl0LWJ1dHRvblwiIGRhdGEtaW5kZXg9XCIke2l9XCI+PGkgY2xhc3M9XCJmYXMgZmEtcGVuXCI+PC9pPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBsZXZlbC1kZWxldGUtYnV0dG9uXCIgZGF0YS1pbmRleD1cIiR7aX1cIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbmFtZSBidXR0b25cIj4ke2xldmVsLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgJHtsZXZlbEJhckJ1dHRvbnNTdHJpbmd9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1kZXRhaWxzIGxldmVsLWJhciBoaWRkZW5cIiBpZD1cImxldmVsLWRldGFpbHMtJHtpfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXkgcHJldmlldy1kaXNwbGF5XCIgaWQ9XCJwcmV2aWV3LWRpc3BsYXktJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHByZXZpZXctZGV0YWlscy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctZGlmZmljdWx0eS1saW5lIHByZXZpZXctbGluZVwiPmRpZmZpY3VsdHk6IDxzcGFuIGNsYXNzPVwiZGlmZmljdWx0eS0ke2l9XCI+JHtsZXZlbC5kaWZmaWN1bHR5fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY3JlYXRvci1saW5lIHByZXZpZXctbGluZVwiPmNyZWF0b3I6IDxzcGFuIGNsYXNzPVwiY3JlYXRvci0ke2l9XCI+JHtsZXZlbC5jcmVhdG9yfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAke2VkaXRvckJ1dHRvbkNvbnRhaW5lcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGRlbGV0ZURpc3BsYXlzKCl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmdyaWdhLmRpc3BsYXlzKS5maWx0ZXIoIGsgPT4gay5zbGljZSgwLCAxMikgPT09ICdwbGF5LXByZXZpZXcnICkuZm9yRWFjaCggZCA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZ2EuZGVsZXRlRGlzcGxheSggZCApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjbGVhckxldmVsc0NvbnRhaW5lcigpe1xyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsbExldmVsc0NvbnRhaW5lcigpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbGFzc2ljJykge1xyXG4gICAgICBmb3IgKGxldCBsZXZlbEluZGV4ID0gMDsgbGV2ZWxJbmRleCA8PSB0aGlzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleDsgbGV2ZWxJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLmxldmVsc1t0aGlzLnN0YXRlXVtsZXZlbEluZGV4XTtcclxuICAgICAgICB0aGlzLmluc2VydE5ld0xldmVsSW5MZXZlbENvbnRhaW5lciggbGV2ZWwsIGxldmVsSW5kZXggKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV0uZm9yRWFjaCggKGxldmVsLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnROZXdMZXZlbEluTGV2ZWxDb250YWluZXIoIGxldmVsLCBpICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluc2VydE5ld0xldmVsSW5MZXZlbENvbnRhaW5lciggbGV2ZWwsIGkgKXtcclxuICAgIGNvbnN0IGh0bWxTdHJpbmcgPSB0aGlzLmdldExldmVsSHRtbFN0cmluZyggbGV2ZWwsIGkgKTtcclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxTdHJpbmcpO1xyXG4gICAgdGhpcy5ncmlnYS5uZXdEaXNwbGF5KCAncGxheS1wcmV2aWV3LScraSwgJ3ByZXZpZXctZGlzcGxheS0nK2ksIHRoaXMuZ3JpZC5jb2x1bW5zL3RoaXMuZ3JpZC5yb3dzICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVMZXZlbEZyb21MZXZlbHNDb250YWluZXIoIGxldmVsSW5kZXggKXtcclxuICAgIGNvbnN0IGxldmVsRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1kZXRhaWxzLScrbGV2ZWxJbmRleCk7XHJcbiAgICBjb25zdCBsZXZlbEJhciA9IGxldmVsRGV0YWlscy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgdGhpcy5ncmlnYS5kZWxldGVEaXNwbGF5KCAncGxheS1wcmV2aWV3LScrbGV2ZWxJbmRleCApO1xyXG4gICAgbGV2ZWxEZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgbGV2ZWxCYXIucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbFBvcyggdGhpcy5hcHAuc3R5bGUuc2Nyb2xsUG9zICk7XHJcbiAgfVxyXG4gIFxyXG4gIHNob3dMZXZlbERldGFpbHMoIGRldGFpbHNMZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gZGV0YWlsc0xldmVsSW5kZXg7XHJcbiAgICBjb25zdCBsZXZlbERldGFpbHNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtZGV0YWlscy0nKyBkZXRhaWxzTGV2ZWxJbmRleCk7XHJcbiAgICBsZXZlbERldGFpbHNCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCdwbGF5LXByZXZpZXctJytkZXRhaWxzTGV2ZWxJbmRleCwgJ3ByZXZpZXcnLCB0aGlzLmFwcC5kaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5hcHAuYmFja2dyb3VuZFRpbGVTY2VuZSApO1xyXG4gICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV1bIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggXS5zY2VuZURhdGEgKTtcclxuICAgIHRoaXMuZ3JpZ2EucmVzaXplRGlzcGxheXMoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbGJhckhlaWdodCgpO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsUG9zVG9MZXZlbCggdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGlkZUxldmVsRGV0YWlscygpe1xyXG4gICAgaWYgKCh0aGlzLmRldGFpbHNMZXZlbEluZGV4IHx8IHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPT09IDApICYmIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxEZXRhaWxzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLWRldGFpbHMtJyt0aGlzLmRldGFpbHNMZXZlbEluZGV4KTtcclxuICAgICAgICBsZXZlbERldGFpbHNCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZW1vdmVHcmlkRnJvbURpc3BsYXkoJ3ByZXZpZXcnLCAncGxheS1wcmV2aWV3LScrdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZUxldmVsKCBsZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZGVsZXRlTGV2ZWwoIHRoaXMubGV2ZWxzWyd5b3VyTGV2ZWxzJ11bbGV2ZWxJbmRleF0ubmFtZSApO1xyXG4gICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICB0aGlzLmxldmVsc1t0aGlzLnN0YXRlXS5zcGxpY2UoIGxldmVsSW5kZXgsIDEgKTtcclxuICAgIHRoaXMucmVtb3ZlTGV2ZWxGcm9tTGV2ZWxzQ29udGFpbmVyKCBsZXZlbEluZGV4ICk7XHJcbiAgICB0aGlzLmNsZWFyTGV2ZWxzQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmZpbGxMZXZlbHNDb250YWluZXIoKTtcclxuICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxOYW1lQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbERldGFpbHNCYXIgPSB0YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAobGV2ZWxEZXRhaWxzQmFyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICAgIHRoaXMuc2hvd0xldmVsRGV0YWlscyggcGFyc2VJbnQobGV2ZWxEZXRhaWxzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwcmVzZXRzJykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV2ZWxFZGl0QnV0dG9uQ2xpY2tlZCggdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV2ZWxQbGF5QnV0dG9uQ2xpY2tlZCggdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZXZlbFBsYXlCdXR0b25DbGlja2VkKCB0YXJnZXQgKXtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxldmVsJykpO1xyXG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVuZCgpO1xyXG4gICAgdGhpcy5hcHAucGxheS5zdGFydCggdGhpcy5sZXZlbHNbb2xkU3RhdGVdW2xldmVsSW5kZXhdLCBvbGRTdGF0ZSwgbGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxFZGl0QnV0dG9uQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lbmQoKTtcclxuICAgIHRoaXMuYXBwLmVkaXRvci5zdGFydCggdGhpcy5sZXZlbHNbb2xkU3RhdGVdW2xldmVsSW5kZXhdLCBvbGRTdGF0ZSwgbGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxEZWxldGVCdXR0b25DbGlja2VkKCB0YXJnZXQgKXtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ3ByZXZpZXctZGlzcGxheS0nK2xldmVsSW5kZXgsICdBcmUgeW91IFN1cmU/JyxcclxuICAgIFtcclxuICAgICAge2lkOiAncG9wdXAtcGxheS1hZ2FpbicsIHRleHQ6ICdDYW5jZWwnLCBjbGljazogKCkgPT4gdGhpcy5jbG9zZVBvcHVwKCl9LFxyXG4gICAgICB7aWQ6ICdwb3B1cC1uZXh0LWxldmVsJywgdGV4dDogJ0RlbGV0ZScsIGNsaWNrOiAoKSA9PiB0aGlzLmRlbGV0ZUxldmVsKCBsZXZlbEluZGV4ICl9XHJcbiAgICBdICk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCl7XHJcbiAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICB0aGlzLnBvcHVwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxldmVsc0NvbnRhaW5lckNsaWNrKCBlICl7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1uYW1lJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbE5hbWVDbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLXBsYXktYnV0dG9uJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbFBsYXlCdXR0b25DbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLWVkaXQtYnV0dG9uJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbEVkaXRCdXR0b25DbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLWRlbGV0ZS1idXR0b24nKSkge1xyXG4gICAgICB0aGlzLmhhbmRsZUxldmVsRGVsZXRlQnV0dG9uQ2xpY2tlZCggZS50YXJnZXQgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmFtZUxldmVsKCBsZXZlbEluZGV4LCBuYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yICl7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0uY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0uZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0ubmFtZSA9IHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5yZW5hbWVMZXZlbCggLy9taWdodCBhZGQgbnVtYmVycyB0byBsZXZlbCBuYW1lO1xyXG4gICAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0ubmFtZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZGlmZmljdWx0eSxcclxuICAgICAgY3JlYXRvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxldmVsKCBsZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2Uuc2F2ZUxldmVsKCB0aGlzLmxldmVsc1sneW91ckxldmVscyddW2xldmVsSW5kZXhdICk7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UucmVtb3ZlTGV2ZWxTb2x2ZWQoIHRoaXMubGV2ZWxzWyd5b3VyTGV2ZWxzJ11bbGV2ZWxJbmRleF0ubmFtZSwgJ3lvdXJMZXZlbHMnICk7XHJcbiAgfVxyXG5cclxuICBuZXdMZXZlbCggbmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgc2NlbmVEYXRhICl7XHJcbiAgICBsZXQgbGV2ZWwgPSBuZXcgR2hvc3R5TGV2ZWwoIG5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIHNjZW5lRGF0YSApO1xyXG4gICAgbGV2ZWwgPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2Uuc2F2ZU5ld0xldmVsKCBsZXZlbCApOyAvL21pZ2h0IGFkZCBudW1iZXJzIHRvIGxldmVsIG5hbWU7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddLnB1c2gobGV2ZWwpO1xyXG4gICAgcmV0dXJuIFsgbGV2ZWwsICd5b3VyTGV2ZWxzJywgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXS5sZW5ndGgtMSBdO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgR2hvc3R5TGV2ZWwge1xyXG4gIGNvbnN0cnVjdG9yKCBuYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yLCBzY2VuZURhdGEgKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcclxuICAgIHRoaXMuc2NlbmVEYXRhID0gc2NlbmVEYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxldmVsc0hlbHAgPSB7XHJcbiAgZW5nbGlzaDpcclxuICBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGgzOiAnSGVyZSBhcmUgYWxsIGxldmVsczonLFxyXG4gICAgICAgICAgcDogJ1N3aXRjaCBiZXR3ZWVuIGNhdGVnb3JpZXMgaW4gdGhlIGJhciBvbiB0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBoMzogJ1RoZSBibHVlIHBsYXkgYnV0dG9uJyxcclxuICAgICAgICAgIHA6ICdtZWFucyB5b3UgaGF2ZW5cXCd0IHNvbHZlZCB0aGUgbGV2ZWwgeWV0J1xyXG4gICAgICB9XHJcbiAgXVxyXG59IiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJywgJ1tdJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktaGlnaGVzdC1sZXZlbHM6YCkpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGdob3N0eS1oaWdoZXN0LWxldmVsczpgLCAne30nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwTGV2ZWxTb2x2ZWRGb3JDYXRlZ29yeSggY2F0ZWdvcnkgKXtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCkpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCwgJ1tdJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgbGV2ZWwubmFtZSBleGlzdHMsIGl0IGluY3JlbWVudHMgaW5kZXggdW50aWwgdGhlIGxldmVsLm5hbWUgZG9lcyBub3QgZXhpc3RcclxuICByZW5hbWVMZXZlbCggb2xkTmFtZSwgbmV3TmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgaW5kZXggPSAwICl7XHJcbiAgICBsZXQgaW5kZXhTdHJpbmcgPSAnJztcclxuICAgIGlmIChpbmRleCkgeyBpbmRleFN0cmluZyA9IGAgJHtpbmRleH1gIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1LZXkgPSBgZ2hvc3R5LXlvdXItbGV2ZWw6JHtuZXdOYW1lK2luZGV4U3RyaW5nfWA7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0obmV3SXRlbUtleSkgJiYgb2xkTmFtZSAhPT0gbmV3TmFtZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZW5hbWVMZXZlbCggb2xkTmFtZSwgbmV3TmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgaW5kZXgrMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgb2xkSXRlbUtleSA9IGBnaG9zdHkteW91ci1sZXZlbDoke29sZE5hbWV9YDtcclxuICAgICAgY29uc3QgbGV2ZWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9sZEl0ZW1LZXkpKTtcclxuICAgICAgbGV2ZWwubmFtZSA9IG5ld05hbWUraW5kZXhTdHJpbmc7XHJcbiAgICAgIGxldmVsLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICBsZXZlbC5jcmVhdG9yID0gY3JlYXRvcjtcclxuICAgICAgY29uc3QgbGV2ZWxTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShsZXZlbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBuZXdJdGVtS2V5LCBsZXZlbFN0cmluZyApO1xyXG4gICAgICBpZiAob2xkTmFtZSAhPT0gbmV3TmFtZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCBvbGRJdGVtS2V5ICk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYWxsTGV2ZWxOYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycpKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBhbGxMZXZlbE5hbWVzLmluZGV4T2Yob2xkTmFtZSk7XHJcbiAgICAgIGFsbExldmVsTmFtZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdOYW1lK2luZGV4U3RyaW5nKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnLCBKU09OLnN0cmluZ2lmeShhbGxMZXZlbE5hbWVzKSApO1xyXG4gICAgICByZXR1cm4gbGV2ZWwubmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVMZXZlbCggbGV2ZWwgKXtcclxuICAgIGNvbnN0IGl0ZW1LZXkgPSBgZ2hvc3R5LXlvdXItbGV2ZWw6JHtsZXZlbC5uYW1lfWA7XHJcbiAgICBjb25zdCBsZXZlbFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxldmVsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBpdGVtS2V5LCBsZXZlbFN0cmluZyApO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIGxldmVsLm5hbWUgZXhpc3RzLCBpdCBpbmNyZW1lbnRzIGluZGV4IHVudGlsIHRoZSBsZXZlbC5uYW1lIGRvZXMgbm90IGV4aXN0XHJcbiAgc2F2ZU5ld0xldmVsKCBsZXZlbCwgaW5kZXggPSAwICl7XHJcbiAgICBsZXQgaW5kZXhTdHJpbmcgPSAnJztcclxuICAgIGlmIChpbmRleCkgeyBpbmRleFN0cmluZyA9IGAgJHtpbmRleH1gIH1cclxuICAgIGNvbnN0IGl0ZW1LZXkgPSBgZ2hvc3R5LXlvdXItbGV2ZWw6JHtsZXZlbC5uYW1lK2luZGV4U3RyaW5nfWA7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbUtleSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2F2ZU5ld0xldmVsKCBsZXZlbCwgaW5kZXgrMSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV2ZWwubmFtZSArPSBpbmRleFN0cmluZztcclxuICAgICAgY29uc3QgbGV2ZWxTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShsZXZlbCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBpdGVtS2V5LCBsZXZlbFN0cmluZyApO1xyXG4gICAgICBjb25zdCBhbGxMZXZlbE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJykpO1xyXG4gICAgICBhbGxMZXZlbE5hbWVzLnB1c2gobGV2ZWwubmFtZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGV2ZWxOYW1lcykgKTtcclxuICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0WW91ckxldmVscygpe1xyXG4gICAgY29uc3QgeW91ckxldmVscyA9IFtdO1xyXG4gICAgY29uc3QgYWxsTGV2ZWxOYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycpKTtcclxuICAgIGFsbExldmVsTmFtZXMuZm9yRWFjaCggbGV2ZWxOYW1lID0+IHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LXlvdXItbGV2ZWw6JHtsZXZlbE5hbWV9YCkgKTtcclxuICAgICAgeW91ckxldmVscy5wdXNoKCBsZXZlbCApO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIHlvdXJMZXZlbHM7XHJcbiAgfVxyXG5cclxuICBkZWxldGVMZXZlbCggbGV2ZWxOYW1lICl7XHJcbiAgICBjb25zdCBhbGxMZXZlbE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJykpO1xyXG4gICAgY29uc3QgaW5kZXggPSBhbGxMZXZlbE5hbWVzLmluZGV4T2YoIGxldmVsTmFtZSApO1xyXG4gICAgYWxsTGV2ZWxOYW1lcy5zcGxpY2UoIGluZGV4LCAxICk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycsIEpTT04uc3RyaW5naWZ5KGFsbExldmVsTmFtZXMpICk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgZ2hvc3R5LXlvdXItbGV2ZWw6JHtsZXZlbE5hbWV9YCk7XHJcbiAgICB0aGlzLnJlbW92ZUxldmVsU29sdmVkKCBsZXZlbE5hbWUsICd5b3VyTGV2ZWxzJyApO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUxldmVsU29sdmVkKCBsZXZlbE5hbWUsIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBzb2x2ZWRMZXZlbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWApKTtcclxuICAgIGlmICghc29sdmVkTGV2ZWxzLmluY2x1ZGVzKGxldmVsTmFtZSkpIHtcclxuICAgICAgc29sdmVkTGV2ZWxzLnB1c2goIGxldmVsTmFtZSApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCwgSlNPTi5zdHJpbmdpZnkoIHNvbHZlZExldmVscyApICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVMZXZlbFNvbHZlZCggbGV2ZWxOYW1lLCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3Qgc29sdmVkTGV2ZWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gKSk7XHJcbiAgICBpZiAoc29sdmVkTGV2ZWxzLmluY2x1ZGVzKGxldmVsTmFtZSkpIHtcclxuICAgICAgc29sdmVkTGV2ZWxzLnNwbGljZSggc29sdmVkTGV2ZWxzLmluZGV4T2YoIGxldmVsTmFtZSApICk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gLCBKU09OLnN0cmluZ2lmeSggc29sdmVkTGV2ZWxzICkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExldmVsU29sdmVkKCBsZXZlbE5hbWUsIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBzb2x2ZWRMZXZlbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWApKTtcclxuICAgIHJldHVybiBzb2x2ZWRMZXZlbHMuaW5jbHVkZXMoIGxldmVsTmFtZSApO1xyXG4gIH1cclxuXHJcbiAgZ2V0TnVtYmVyT2ZMZXZlbHNTb2x2ZWQoIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBzb2x2ZWRMZXZlbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWApKTtcclxuICAgIHJldHVybiBzb2x2ZWRMZXZlbHMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUhpZ2hlc3RMZXZlbCggbGV2ZWxOYW1lLCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3QgaGlnaGVzdExldmVsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWhpZ2hlc3QtbGV2ZWxzOicpKTtcclxuICAgIGhpZ2hlc3RMZXZlbFtjYXRlZ29yeV0gPSBsZXZlbE5hbWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ2dob3N0eS1oaWdoZXN0LWxldmVsczonLCBKU09OLnN0cmluZ2lmeSggaGlnaGVzdExldmVsICkgKTtcclxuICB9XHJcblxyXG4gIGdldEhpZ2hlc3RMZXZlbCggY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IGhpZ2hlc3RMZXZlbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1oaWdoZXN0LWxldmVsczonKSk7XHJcbiAgICByZXR1cm4gaGlnaGVzdExldmVsW2NhdGVnb3J5XTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL3BvcHVwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheSB7XHJcbiAgICBjb25zdHJ1Y3RvciggYXBwLCBncmlnYSApe1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EgPSBncmlnYTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBncmlnYS5ncmlkc1sncGxheSddO1xyXG4gICAgICAgIHRoaXMucGxheV9sZXZlbF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktbGV2ZWwtbmFtZScpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzLWxldmVsLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1sZXZlbC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnBsYXlfcmVzdGFydF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1yZXN0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucGxheV91bmRvX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXVuZG8tYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5X2VkaXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktZWRpdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSB0aGlzLmFwcC5sZXZlbHMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnY2xhc3NpYyc7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbdGhpcy5jYXRlZ29yeV1bdGhpcy5sZXZlbEluZGV4XTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmtleVRyYWNrRW50aXR5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ3BsYXknLCAncGxheScsIHRoaXMuYXBwLmRpc3BsYXlTZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApe1xyXG4gICAgICAgIHRoaXMuYXBwLnBsYXlfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXBwLnBsYXlfc2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncGxheSc7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUgPSAncGxheSc7XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApO1xyXG4gICAgICAgIGlmICggdGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnICkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0X2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5X2VkaXRfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuY2F0ZWdvcnkgPT09ICdjbGFzc2ljJyApIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheV9lZGl0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAuc3R5bGUucmVzaXplV3JhcHBlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVzaXplRGlzcGxheXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmQoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwoIGxldmVsID0gdGhpcy5sZXZlbCwgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LCBsZXZlbEluZGV4ID0gdGhpcy5sZXZlbEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSBsZXZlbEluZGV4O1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMuYXBwLmJhY2tncm91bmRUaWxlU2NlbmUgKTtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLmxldmVsLnNjZW5lRGF0YSApO1xyXG4gICAgICAgIHRoaXMudW5kb0hpc3RvcnkucHVzaCggdGhpcy5sZXZlbC5zY2VuZURhdGEgKTtcclxuICAgICAgICB0aGlzLnBsYXlfbGV2ZWxfbmFtZS5pbm5lckhUTUwgPSB0aGlzLmxldmVsLm5hbWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVOZXh0UHJldmlvdXNMZXZlbEJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVOZXh0UHJldmlvdXNMZXZlbEJ1dHRvbnMoKXtcclxuICAgICAgICBpZiAoIHRoaXMuY2F0ZWdvcnkgPT09ICdjbGFzc2ljJyApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmxldmVsSW5kZXggPT09IHRoaXMuYXBwLmxldmVscy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXggKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCB0aGlzLmxldmVsSW5kZXggPT09IDAgKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckxldmVsKCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhclNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy51bmRvSGlzdG9yeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGxldmVsRG9uZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3JldHVybn07XHJcbiAgICAgICAgdGhpcy5hcHAubGV2ZWxzLmxldmVsRG9uZSggdGhpcy5sZXZlbEluZGV4ICk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVOZXh0UHJldmlvdXNMZXZlbEJ1dHRvbnMoKTtcclxuICAgICAgICBsZXQgbmV4dEJ1dHRvblRleHQgPSAnTmV4dCBsZXZlbCc7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkgPT09ICd5b3VyTGV2ZWxzJykgeyBuZXh0QnV0dG9uVGV4dCA9ICdFZGl0JyB9O1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoICdwbGF5LWRpc3BsYXknLCAnTGV2ZWwgRG9uZSEnLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge2lkOiAncG9wdXAtcGxheS1hZ2FpbicsIHRleHQ6ICdQbGF5IGFnYWluJywgY2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlUG9wdXBQbGF5QWdhaW5DbGljaygpfSxcclxuICAgICAgICAgICAge2lkOiAncG9wdXAtbmV4dC1sZXZlbCcsIHRleHQ6IG5leHRCdXR0b25UZXh0LCBjbGljazogKCkgPT4gdGhpcy5oYW5kbGVQb3B1cE5leHRMZXZlbENsaWNrKCl9XHJcbiAgICAgICAgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVuZG9IaXN0b3J5KCkge1xyXG4gICAgICAgIHRoaXMudW5kb0hpc3RvcnkucHVzaCggdGhpcy5ncmlkLmdldEN1cnJlbnRTY2VuZURhdGEoKSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUG9wdXBOZXh0TGV2ZWxDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ2NsYXNzaWMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTmV4dExldmVsQnV0dG9uQ2xpY2soKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2F0ZWdvcnkgPT09ICd5b3VyTGV2ZWxzJykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVBsYXlFZGl0QnV0dG9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUG9wdXBQbGF5QWdhaW5DbGljaygpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVBsYXlSZXN0YXJ0QnV0dG9uQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByZXZpb3VzTGV2ZWxCdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7dGhpcy5jbG9zZVBvcHVwKCl9O1xyXG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtyZXR1cm59O1xyXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbdGhpcy5jYXRlZ29yeV1bLS10aGlzLmxldmVsSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV4dExldmVsQnV0dG9uQ2xpY2soKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICBpZiAodGhpcy5uZXh0X2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtyZXR1cm59O1xyXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5kZXggIT09IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbdGhpcy5jYXRlZ29yeV0ubGVuZ3RoLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbdGhpcy5jYXRlZ29yeV1bKyt0aGlzLmxldmVsSW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheUxldmVsTmFtZUNsaWNrKCBlICl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMuc3RhcnQoIHRoaXMuY2F0ZWdvcnksIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlSZXN0YXJ0QnV0dG9uQ2xpY2tlZCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7dGhpcy5jbG9zZVBvcHVwKCl9O1xyXG4gICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheVVuZG9CdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIGlmICh0aGlzLnVuZG9IaXN0b3J5Lmxlbmd0aCA9PT0gMSl7cmV0dXJufTtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5LnBvcCgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhclNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5hcHAuYmFja2dyb3VuZFRpbGVTY2VuZSApO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMudW5kb0hpc3RvcnlbIHRoaXMudW5kb0hpc3RvcnkubGVuZ3RoLTEgXSApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlFZGl0QnV0dG9uQ2xpY2soKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvci5zdGFydCggdGhpcy5sZXZlbCwgdGhpcy5jYXRlZ29yeSwgdGhpcy5sZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVByZXZpb3VzTGV2ZWxCdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLm5leHRfbGV2ZWxfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZU5leHRMZXZlbEJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMucGxheV9sZXZlbF9uYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlMZXZlbE5hbWVDbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnBsYXlfcmVzdGFydF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUGxheVJlc3RhcnRCdXR0b25DbGlja2VkKCBlICkpO1xyXG4gICAgICAgIHRoaXMucGxheV91bmRvX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVQbGF5VW5kb0J1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMucGxheV9lZGl0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVQbGF5RWRpdEJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGxheUhlbHAgPSB7XHJcbiAgICBlbmdsaXNoOiBcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnSG93IHRvIG1vdmU6JyxcclxuICAgICAgICAgICAgcDogJ1VzZSB0aGUgYXJyb3cga2V5cyBvbiB5b3VyIGtleWJvYXJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ1VuZG86JyxcclxuICAgICAgICAgICAgcDogJ1ByZXNzIHRoZSA8aSBjbGFzcz1cImZhcyBmYS11bmRvXCI+PC9pPiBpY29uIHRvIHVuZG8gdGhlIGxhc3QgbW92ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdSZXN0YXJ0OicsXHJcbiAgICAgICAgICAgIHA6ICdQcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtZmFzdC1iYWNrd2FyZFwiPjwvaT4gaWNvbiB0byByZXN0YXJ0IHRoZSBsZXZlbCdcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59IiwiZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3RvciggZGlzcGxheUlkLCBtZXNzYWdlLCBidXR0b25zLCBpbnB1dEZpZWxkcywgaDNUZXh0LCBwVGV4dCkge1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlzcGxheUlkKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0hlbGxvIFdvcmxkISc7XHJcbiAgICB0aGlzLmJ1dHRvbnNEYXRhID0gYnV0dG9ucyB8fCBbXTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZHMgPSBpbnB1dEZpZWxkcyB8fCBbXTtcclxuICAgIHRoaXMuaDNUZXh0ID0gaDNUZXh0O1xyXG4gICAgdGhpcy5wVGV4dCA9IHBUZXh0O1xyXG5cclxuICAgIHRoaXMucG9wdXBIVE1MU3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLmdlbmVyYXRlUG9wdXBIVE1MU3RyaW5nKCk7XHJcbiAgICB0aGlzLmRpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCB0aGlzLnBvcHVwSFRNTFN0cmluZyk7XHJcbiAgICB0aGlzLnNldHVwQnV0dG9uTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVBvcHVwSFRNTFN0cmluZygpIHtcclxuICAgIGxldCBwb3B1cFRleHRIVE1MID0gJyc7XHJcbiAgICBpZiAoIHRoaXMuaDNUZXh0IHx8IHRoaXMucFRleHQgKSB7XHJcbiAgICAgIGxldCBoM1RleHRIVE1MID0gJyc7XHJcbiAgICAgIGxldCBwVGV4dEhUTUwgPSAnJztcclxuICAgICAgaWYgKHRoaXMuaDNUZXh0KSB7aDNUZXh0SFRNTCA9IGA8aDM+JHt0aGlzLmgzVGV4dH08L2gzPmB9O1xyXG4gICAgICBpZiAodGhpcy5wVGV4dCkge3BUZXh0SFRNTCA9IGA8cD4ke3RoaXMucFRleHR9PC9wPmB9O1xyXG4gICAgICBwb3B1cFRleHRIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtdGV4dFwiPlxyXG4gICAgICAgICR7aDNUZXh0SFRNTH1cclxuICAgICAgICAke3BUZXh0SFRNTH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGlucHV0c0hUTUxTdHJpbmcgPSAnJztcclxuICAgIHRoaXMuaW5wdXRGaWVsZHMuZm9yRWFjaCggaURhdGEgPT4ge1xyXG4gICAgICBpbnB1dHNIVE1MU3RyaW5nICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWlucHV0LWxpbmVcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtpRGF0YS5uYW1lfVwiPiR7aURhdGEubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIiR7aURhdGEubmFtZX0taW5wdXRcIiBuYW1lPVwiJHtpRGF0YS5uYW1lfVwiIHBsYWNlaG9sZGVyPVwiJHtpRGF0YS5wbGFjZWhvbGRlcn1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9ICk7XHJcblxyXG4gICAgbGV0IGJ1dHRvbnNIVE1MU3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLmJ1dHRvbnNEYXRhLmZvckVhY2goIGJEYXRhID0+IHtcclxuICAgICAgYnV0dG9uc0hUTUxTdHJpbmcgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uIHBvcHVwLWJ1dHRvblwiIGlkPVwiJHtiRGF0YS5pZH1cIj4ke2JEYXRhLnRleHR9PC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9IClcclxuXHJcbiAgICB0aGlzLnBvcHVwSFRNTFN0cmluZyA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3B1cFwiIGlkPVwiJHt0aGlzLmRpc3BsYXkuaWR9LXBvcHVwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1tZXNzYWdlXCI+JHt0aGlzLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICR7cG9wdXBUZXh0SFRNTH1cclxuICAgICAgJHtpbnB1dHNIVE1MU3RyaW5nfVxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtYmFyIHBvcHVwLWJ1dHRvbnMtYmFyXCI+XHJcbiAgICAgICAgJHtidXR0b25zSFRNTFN0cmluZ31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBzZXR1cEJ1dHRvbkxpc3RlbmVycygpIHtcclxuICAgIHRoaXMuYnV0dG9uc0RhdGEuZm9yRWFjaCggYkQgPT4ge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggYkQuaWQgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2soZSkgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1dHRvbkNsaWNrKCBlICl7XHJcbiAgICBjb25zdCBiRGF0YSA9IHRoaXMuYnV0dG9uc0RhdGEuZmluZCggYkQgPT4gYkQuaWQgPT09IGUudGFyZ2V0LmlkICk7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5pbnB1dEZpZWxkcy5mb3JFYWNoKCBpRGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IGlucHV0RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaURhdGEubmFtZSsnLWlucHV0Jyk7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGlucHV0RWxtLnZhbHVlO1xyXG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHsgdmFsdWUgPSBpRGF0YS5wbGFjZWhvbGRlciB9O1xyXG4gICAgICBpbnB1dFZhbHVlc1tpRGF0YS5uYW1lXSA9IHZhbHVlO1xyXG4gICAgfSApO1xyXG4gICAgYkRhdGEuY2xpY2soIGlucHV0VmFsdWVzICk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGlzcGxheS5pZCsnLXBvcHVwJykucmVtb3ZlKCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFN0eWxlIHtcclxuICBjb25zdHJ1Y3RvciggYXBwICl7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMuc2Nyb2xsYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbGJhcicpO1xyXG4gICAgdGhpcy5zY3JvbGxiYXJfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbGJhci1ib3gnKTtcclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbHMtY29udGFpbmVyJyk7XHJcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcHBlcicpO1xyXG4gICAgdGhpcy5zY3JvbGxQb3MgPSAwO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4gdGhpcy5oYW5kbGVNb3VzZU1vdmVPblNjcm9sbGJhcihlKSk7XHJcbiAgICB0aGlzLnNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5oYW5kbGVNb3VzZVNjcm9sbChlKSk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMuaGFuZGxlTW91c2VTY3JvbGwoZSkpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNldFNjcm9sbGJhckhlaWdodCgpO1xyXG4gICAgICB0aGlzLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNpemVXcmFwcGVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxQb3MoIHkgKXtcclxuICAgIGlmICh5IDwgMCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFBvcyA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHkgPCB0aGlzLmxldmVsc0NvbnRhaW5lckhlaWdodCAtIHRoaXMuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUG9zID0geTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5sZXZlbHNDb250YWluZXJIZWlnaHQgLSB0aGlzLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICBtYXJnaW4tdG9wOiAtJHt0aGlzLnNjcm9sbFBvc31weDtcclxuICAgIGApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsUG9zVG9MZXZlbCggbGV2ZWxJbmRleCApe1xyXG4gICAgICBjb25zdCBsZXZlbF9iYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtZGV0YWlscy0nK2xldmVsSW5kZXgpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zKCBsZXZlbF9iYXIub2Zmc2V0VG9wICk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxiYXJIZWlnaHQoKXtcclxuICAgICAgY29uc3QgbGV2ZWxzQ29udGFpbmVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmxldmVsc19jb250YWluZXIpLmhlaWdodDtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgICAgaGVpZ2h0OiR7bGV2ZWxzQ29udGFpbmVySGVpZ2h0fTtcclxuICAgICAgYCk7XHJcbiAgICAgIHRoaXMubGV2ZWxzQ29udGFpbmVySGVpZ2h0ID0gcGFyc2VJbnQobGV2ZWxzQ29udGFpbmVySGVpZ2h0LnNsaWNlKDAsIC0yKSk7XHJcbiAgICAgIHRoaXMucmVzaXplU2Nyb2xsYmFyKCk7XHJcbiAgfVxyXG5cclxuICByZXNpemVTY3JvbGxiYXIoKXtcclxuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAtIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAyMFxyXG4gICAgICArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5sZXZlbHNfY29udGFpbmVyKS5tYXJnaW5Ub3Auc2xpY2UoMCwtMikpO1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5sZXZlbHNDb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGxiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgaGVpZ2h0OiR7dGhpcy5zY3JvbGxIZWlnaHR9cHg7XHJcbiAgICBgKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVdyYXBwZXIoKXtcclxuICAgIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2hvbWUnIHx8ICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2xldmVscycpKSB7XHJcbiAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ3BsYXknICYmIHRoaXMuYXBwLnBsYXkuc3RhdGUgPT09ICdwbGF5Jykge1xyXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmIChkb2N1bWVudEhlaWdodC0xNTAgPCAoZG9jdW1lbnRXaWR0aC0zMikqMTAvMTYpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgICAgIHdpZHRoOiR7KGRvY3VtZW50SGVpZ2h0LTE1MCkqMTYvMTAgKyAzMn1weDtcclxuICAgICAgICBgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2VkaXRvcicpIHtcclxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAoZG9jdW1lbnRIZWlnaHQtMTc4IDwgKGRvY3VtZW50V2lkdGgtMzIpKjI5LzQwKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgICAgICB3aWR0aDokeyhkb2N1bWVudEhlaWdodC0xNzgpKjQwLzI5ICsgMzJ9cHg7XHJcbiAgICAgICAgYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VTY3JvbGwoZSl7XHJcbiAgICB0aGlzLnNldFNjcm9sbFBvcyggdGhpcy5zY3JvbGxQb3MgKyBlLmRlbHRhWSApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VNb3ZlT25TY3JvbGxiYXIoZSl7XHJcbiAgICBpZiAoZS5idXR0b25zJTIgPT09IDEpIHtcclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFNjcm9sbFBvcyh0aGlzLnNjcm9sbFBvcyArIGUubW92ZW1lbnRZICogMTApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJjbGFzcyBHcmlkTGluayB7XHJcbiAgY29uc3RydWN0b3IoIGdyaWRJbnN0YW5jZSwgZGlzcGxheVNldHRpbmdzLCBkaXNwbGF5ICl7XHJcbiAgICB0aGlzLmdyaWRJbnN0YW5jZSA9IGdyaWRJbnN0YW5jZTtcclxuICAgIHRoaXMuZGlzcGxheVNldHRpbmdzID0gZGlzcGxheVNldHRpbmdzO1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NEaXNwbGF5U2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLm9mZkNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLmN0eCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzRGlzcGxheVNldHRpbmdzKCl7XHJcbiAgICB0aGlzLmxlZnRJblB4ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MubGVmdCAqIHRoaXMuZGlzcGxheS53aWR0aDtcclxuICAgIHRoaXMudG9wSW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLnRvcCAqIHRoaXMuZGlzcGxheS5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoSW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLndpZHRoICogdGhpcy5kaXNwbGF5LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHRJblB4ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MuaGVpZ2h0ICogdGhpcy5kaXNwbGF5LmhlaWdodDtcclxuICAgIHRoaXMudGlsZVdpZHRoSW5QeCA9IHRoaXMud2lkdGhJblB4IC8gdGhpcy5kaXNwbGF5U2V0dGluZ3MuY29sdW1uc09uU2NyZWVuO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0SW5QeCA9IHRoaXMuaGVpZ2h0SW5QeCAvIHRoaXMuZGlzcGxheVNldHRpbmdzLnJvd3NPblNjcmVlbjtcclxuICAgIHRoaXMueFNoaWZ0ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MuY29sdW1uU2hpZnQgKiB0aGlzLnRpbGVXaWR0aEluUHg7XHJcbiAgICB0aGlzLnlTaGlmdCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLnJvd1NoaWZ0ICogdGhpcy50aWxlSGVpZ2h0SW5QeDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3BsYXlTZXR0aW5ncyggbmV3RGlzcGxheVNldHRpbmdzICl7XHJcbiAgICBmb3IgKGxldCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggbmV3RGlzcGxheVNldHRpbmdzICkpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5U2V0dGluZ3NbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ld0NhbnZhcygpe1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aEluUHg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodEluUHg7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogJHt0aGlzLnRvcEluUHh9cHg7XHJcbiAgICAgIGxlZnQ6ICR7dGhpcy5sZWZ0SW5QeH1weDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBgKTtcclxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSggJ2RhdGEtLWdyaWQtbmFtZScsIHRoaXMuZ3JpZEluc3RhbmNlLm5hbWUgKTtcclxuICAgIHRoaXMuZGlzcGxheS53cmFwcGVyLmFwcGVuZENoaWxkKCB0aGlzLmNhbnZhcyApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5vZmZDYW52YXMgPSB0aGlzLmNhbnZhcy50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUud2FybignWW91ciBCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCkuIFRoZXJlZm9yZSB0aGUgZ2FtZSBtaWdodCBsYWcgYSBiaXQnKTtcclxuICAgICAgdGhpcy5vZmZDYW52YXMgPSB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5vZmZDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZUNhbnZhcygpe1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlKCk7XHJcbiAgICB0aGlzLnByb2Nlc3NEaXNwbGF5U2V0dGluZ3MoKTtcclxuICAgIHRoaXMubmV3Q2FudmFzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBjbGFzc2Rlc2MgRGlzcGxheXMgcmVuZGVyIGFsbCBlbnRpdGllcyBvbiBkaXNwbGF5ZWQgZ3JpZHMuIFVzZSB0aGUgZ3JpZ2EgY29uZmlnIHRvIGNyZWF0ZSB0aGVtIGFuZCB1c2UgdGhlIEdyaWdhLmRpc3BsYXlHcmlkIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBncmlkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkge1xyXG4gIC8qKlxyXG4gICAqIEBoaWRlY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggY29uZmlnICl7XHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqL1xyXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAvKipcclxuICAgICAqIFdyYXBwZXIgZWxlbWVudCBvZiB0aGUgRGlzcGxheVxyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy53cmFwcGVySWQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgV3JhcHBlcidzIHdpZHRoSGVpZ2h0UmF0aW9uXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2lkdGhIZWlnaHRSYXRpbyA9IGNvbmZpZy53aWR0aEhlaWdodFJhdGlvO1xyXG5cclxuICAgIHRoaXMucmVzaXplV3JhcHBlcigpO1xyXG4gICAgdGhpcy5zZXR1cFdyYXBwZXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpbmtlZEdyaWRzID0ge307Ly9zZWUgbGlua0dyaWQgYW5kIEdyaWRMaW5rIGZvciBzdHJ1Y3R1cmVcclxuICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1vdXNlWCA9IDA7XHJcbiAgICB0aGlzLm1vdXNlWSA9IDA7XHJcbiAgICB0aGlzLmdyaWRzSW5Ib3ZlciA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLy9yZXNpemVcclxuICByZXNpemUoKXtcclxuICAgIHRoaXMucmVzaXplV3JhcHBlcigpO1xyXG4gICAgZm9yIChsZXQgZ3JpZExpbmsgb2YgT2JqZWN0LnZhbHVlcyggdGhpcy5saW5rZWRHcmlkcyApKSB7XHJcbiAgICAgIGdyaWRMaW5rLnJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVdyYXBwZXIoKXtcclxuICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCB0aGlzLndyYXBwZXIgKTtcclxuICAgIHRoaXMud2lkdGggPSBwYXJzZUZsb2F0KCBjb21wdXRlZFN0eWxlLndpZHRoLnNsaWNlKCAwLC0yICkgKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aC90aGlzLndpZHRoSGVpZ2h0UmF0aW87XHJcbiAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgaGVpZ2h0OiR7dGhpcy5oZWlnaHR9cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGApOy8vaGlkZGVuIG92ZXJmbG93XHJcbiAgfVxyXG5cclxuICBzZXR1cFdyYXBwZXJFdmVudExpc3RlbmVycygpe1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCAoZSkgPT4gdGhpcy5tb3VzZU1vdmVIYW5kbGVyKGUpICk7XHJcbiAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCAoZSkgPT4gdGhpcy5tb3VzZUxlYXZlSGFuZGxlcihlKSApO1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB0aGlzLm1vdXNlRG93bkhhbmRsZXIoZSkgKTtcclxuICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHRoaXMubW91c2VVcEhhbmRsZXIoZSkgKTtcclxuICB9XHJcblxyXG4gIGxpbmtHcmlkKCBncmlkLCBkaXNwbGF5U2V0dGluZ3MgKXtcclxuICAgIGNvbnN0IGdyaWRMaW5rID0gbmV3IEdyaWRMaW5rKCBncmlkLCBkaXNwbGF5U2V0dGluZ3MsIHRoaXMgKTtcclxuICAgIGdyaWRMaW5rLm5ld0NhbnZhcygpO1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZC5uYW1lIF0gPSBncmlkTGluaztcclxuICB9XHJcbiAgdW5saW5rR3JpZCggZ3JpZE5hbWUgKXtcclxuICAgIHRoaXMubGlua2VkR3JpZHNbIGdyaWROYW1lIF0uY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgZGVsZXRlIHRoaXMubGlua2VkR3JpZHNbIGdyaWROYW1lIF07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VHcmlkRGlzcGxheVNldHRpbmdzKCBncmlkTmFtZSwgZGlzcGxheVNldHRpbmdzICl7XHJcbiAgICB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdLnVwZGF0ZURpc3BsYXlTZXR0aW5ncyggZGlzcGxheVNldHRpbmdzICk7XHJcbiAgICB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdLnByb2Nlc3NEaXNwbGF5U2V0dGluZ3MoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3BsYXlEYXRhKCl7XHJcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gT2JqZWN0LnZhbHVlcyh0aGlzLmxpbmtlZEdyaWRzKS5tYXAoXHJcbiAgICAgIGdyaWRMaW5rID0+IGdyaWRMaW5rLmdyaWRJbnN0YW5jZS5kaXNwbGF5RGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vZHJhd2luZ1xyXG4gIGNsZWFyQ2FudmFzKCBvZmZDYW52YXMsIGN0eCApe1xyXG4gICAgY3R4LmNsZWFyUmVjdCggMCwwLCBvZmZDYW52YXMud2lkdGgsIG9mZkNhbnZhcy5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcblxyXG4gICAgdGhpcy51cGRhdGVEaXNwbGF5RGF0YSgpO1xyXG5cclxuICAgIHRoaXMuZGlzcGxheURhdGEuZm9yRWFjaCggLy9BcnJheSBvZiBHcmlkIERpc3BsYXkgRGF0YVxyXG4gICAgICBncmlkRGlzcGxheURhdGEgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyaWRMaW5rID0gdGhpcy5saW5rZWRHcmlkc1sgZ3JpZERpc3BsYXlEYXRhLmdyaWROYW1lIF07XHJcbiAgICAgICAgdGhpcy5jbGVhckNhbnZhcyggZ3JpZExpbmsub2ZmQ2FudmFzLCBncmlkTGluay5jdHggKTtcclxuICAgICAgICBncmlkRGlzcGxheURhdGEuYWxsTGF5ZXJzRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5mb3JFYWNoKCAvL0FycmF5IG9mIGFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGFcclxuICAgICAgICAgICggbGF5ZXJFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLCBsYXllciApID0+IHtcclxuICAgICAgICAgICAgbGF5ZXJFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLmZvckVhY2goIC8vYXJyYXkgb2YgZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YVxyXG4gICAgICAgICAgICAgIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3JpZExpbmsuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgICAgZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5pbWcsXHJcbiAgICAgICAgICAgICAgICAgIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEucG9zLmMgKiBncmlkTGluay50aWxlV2lkdGhJblB4IC0gZ3JpZExpbmsueFNoaWZ0LFxyXG4gICAgICAgICAgICAgICAgICBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnBvcy5yICogZ3JpZExpbmsudGlsZUhlaWdodEluUHggLSBncmlkTGluay55U2hpZnQsXHJcbiAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChncmlkTGluay50aWxlV2lkdGhJblB4ICogZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS53aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgIE1hdGguY2VpbChncmlkTGluay50aWxlSGVpZ2h0SW5QeCAqIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEuaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKCBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnRleHRzICkuZm9yRWFjaCggdGV4dCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5mb250ID0gYCR7dGV4dC5zaXplICogZ3JpZExpbmsudGlsZUhlaWdodEluUHh9cHggJHt0ZXh0LmZvbnRGYW1pbHl9YDtcclxuICAgICAgICAgICAgICAgICAgZ3JpZExpbmsuY3R4LmZpbGxTdHlsZSA9IHRleHQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgKGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEucG9zLmMgKyB0ZXh0LmNPZmZzZXQpICogZ3JpZExpbmsudGlsZVdpZHRoSW5QeCAtIGdyaWRMaW5rLnhTaGlmdCxcclxuICAgICAgICAgICAgICAgICAgICAoZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5wb3MuciArIHRleHQuck9mZnNldCArIHRleHQuc2l6ZSowLjc1KSAqIGdyaWRMaW5rLnRpbGVIZWlnaHRJblB4IC0gZ3JpZExpbmsueVNoaWZ0XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9ICk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXJcclxuICBtb3VzZUxlYXZlSGFuZGxlciggZSApe1xyXG4gICAgdGhpcy5ncmlkc0luSG92ZXIuZm9yRWFjaCggZ3JpZE5hbWUgPT4ge1xyXG4gICAgICB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdLmdyaWRJbnN0YW5jZS5tb3VzZUxlYXZlSGFuZGxlciggdGhpcy5uYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmdyaWRzSW5Ib3ZlciA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlciggZSApe1xyXG4gICAgLy91cGRhdGUgbW91c2UgcG9zXHJcbiAgICB0aGlzLm1vdXNlWCA9IGUub2Zmc2V0WDtcclxuICAgIHRoaXMubW91c2VZID0gZS5vZmZzZXRZO1xyXG4gICAgLy91cGRhdGUgR3JpZHNcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5saW5rZWRHcmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVggPSB0aGlzLm1vdXNlWCAtIGdyaWQubGVmdEluUHggKyBncmlkLnhTaGlmdDtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWSA9IHRoaXMubW91c2VZIC0gZ3JpZC50b3BJblB4ICsgZ3JpZC55U2hpZnQ7XHJcbiAgICAgIGlmIChncmlkTW91c2VYID49IGdyaWQueFNoaWZ0ICYmIGdyaWRNb3VzZVggPCBncmlkLnhTaGlmdCArIGdyaWQud2lkdGhJblB4XHJcbiAgICAgICAmJiBncmlkTW91c2VZID49IGdyaWQueVNoaWZ0ICYmIGdyaWRNb3VzZVkgPCBncmlkLnlTaGlmdCArIGdyaWQuaGVpZ2h0SW5QeCkge1xyXG4gICAgICAgIGlmIChncmlkLmdyaWRJbnN0YW5jZS5tb3VzZS5kaXNwbGF5TmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICB0aGlzLmdyaWRzSW5Ib3Zlci5wdXNoKCBncmlkLmdyaWRJbnN0YW5jZS5uYW1lICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdyaWRNb3VzZUMgPSBncmlkTW91c2VYL2dyaWQudGlsZVdpZHRoSW5QeDtcclxuICAgICAgICBjb25zdCBncmlkTW91c2VSID0gZ3JpZE1vdXNlWS9ncmlkLnRpbGVIZWlnaHRJblB4O1xyXG4gICAgICAgIGdyaWQuZ3JpZEluc3RhbmNlLm1vdXNlTW92ZUhhbmRsZXIoIHRoaXMubmFtZSwgZ3JpZE1vdXNlQyxncmlkTW91c2VSLCBlLmJ1dHRvbnMsIGUuY3RybEtleSApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGdyaWQuZ3JpZEluc3RhbmNlLm1vdXNlLmRpc3BsYXlOYW1lID09PSB0aGlzLm5hbWUpIHtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZUxlYXZlSGFuZGxlciggdGhpcy5uYW1lICk7XHJcbiAgICAgICAgdGhpcy5ncmlkc0luSG92ZXIuc3BsaWNlKCB0aGlzLmdyaWRzSW5Ib3Zlci5pbmRleE9mKCBncmlkLmdyaWRJbnN0YW5jZS5uYW1lICksIDEgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duSGFuZGxlciggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmxpbmtlZEdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWCA9IHRoaXMubW91c2VYIC0gZ3JpZC5sZWZ0SW5QeDtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWSA9IHRoaXMubW91c2VZIC0gZ3JpZC50b3BJblB4O1xyXG4gICAgICBpZiAoZ3JpZE1vdXNlWCA+PSAwICYmIGdyaWRNb3VzZVggPCBncmlkLndpZHRoSW5QeFxyXG4gICAgICAgJiYgZ3JpZE1vdXNlWSA+PSAwICYmIGdyaWRNb3VzZVkgPCBncmlkLmhlaWdodEluUHgpIHtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZURvd25IYW5kbGVyKCB0aGlzLm5hbWUsIGUuY3RybEtleSApO1xyXG4gICAgICB9XHJcbiAgICB9ICk7XHJcbiAgfVxyXG4gIG1vdXNlVXBIYW5kbGVyKCBlICl7XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMubGlua2VkR3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICBjb25zdCBncmlkTW91c2VYID0gdGhpcy5tb3VzZVggLSBncmlkLmxlZnRJblB4O1xyXG4gICAgICBjb25zdCBncmlkTW91c2VZID0gdGhpcy5tb3VzZVkgLSBncmlkLnRvcEluUHg7XHJcbiAgICAgIGlmIChncmlkTW91c2VYID49IDAgJiYgZ3JpZE1vdXNlWCA8IGdyaWQud2lkdGhJblB4XHJcbiAgICAgICAmJiBncmlkTW91c2VZID49IDAgJiYgZ3JpZE1vdXNlWSA8IGdyaWQuaGVpZ2h0SW5QeCkge1xyXG4gICAgICAgIGdyaWQuZ3JpZEluc3RhbmNlLm1vdXNlVXBIYW5kbGVyKCB0aGlzLm5hbWUsIGUuY3RybEtleSApO1xyXG4gICAgICB9XHJcbiAgICB9ICk7XHJcbiAgfVxyXG59IiwiY29uc3QgSm9pID0gcmVxdWlyZSgnQGhhcGkvam9pJyk7XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFRleHQuIFRvIGNyZWF0ZSBhIFRleHQgdXNlIHRoZSBFbnRpdHkuYWRkVGV4dCBmdW5jdGlvblxyXG4gKi9cclxuY2xhc3MgVGV4dCB7XHJcbiAgLyoqXHJcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCB0ZXh0U2V0dGluZ3MgKXtcclxuICAgIHRoaXMuaWQgPSB0ZXh0U2V0dGluZ3MuaWQ7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0U2V0dGluZ3MudGV4dCB8fCBcIlRleHRcIjtcclxuICAgIHRoaXMuc2l6ZSA9IHRleHRTZXR0aW5ncy5zaXplIHx8IDE7XHJcbiAgICB0aGlzLmNvbG9yID0gdGV4dFNldHRpbmdzLmNvbG9yIHx8IFwiYmxhY2tcIjtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IHRleHRTZXR0aW5ncy5mb250RmFtaWx5IHx8IFwiYXJpYWxcIjtcclxuICAgIHRoaXMuY09mZnNldCA9IHRleHRTZXR0aW5ncy5jT2Zmc2V0IHx8IDA7XHJcbiAgICB0aGlzLnJPZmZzZXQgPSB0ZXh0U2V0dGluZ3Muck9mZnNldCB8fCAwO1xyXG4gIH1cclxufVxyXG4gLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gVGV4dH50ZXh0U2V0dGluZ3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBJZCBvZiB0aGUgdGV4dFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGV4dF0gLSBUaGUgYWN0dWFsIHRleHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIC0gSGVpZ2h0IG9mIHRoZSB0ZXh0IGluIHJvd3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2NvbG9yXSAtIENvbG9yIG9mIHRoZSB0ZXh0IChhbnkgc3RhZGFyZCBjb2xvciBmb3JtYXQgc2hvdWxkIHdvcmspXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtmb250RmFtaWx5XSAtIEZvbnRGYW1pbHkgb2YgdGhlIHRleHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2NPZmZzZXRdIC0gY09mZnNldCBvZiB0aGUgdGV4dFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbck9mZnNldF0gLSByT2Zmc2V0IG9mIHRoZSB0ZXh0XHJcbiAgICovXHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBCYXNlIGNsYXNzIGZvciBhbGwgRW50aXRpZXMuIEN1c3RvbUVudGl0eUNsYXNzZXMgKENoaWxkcyBvZiBFbnRpdHkpIGNhbiBiZSBwYXNzZWQgaW4gd2l0aCB0aGUgZ3JpZ2FDb25maWcgd2hlbiBpbml0aWFsaXppbmcgR3JpZ2FcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHkge1xyXG4gIC8vaW1hZ2VzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIG5hbWUgYW5kIHNvdXJjZSBvZiBhbGwgSW1hZ2VzIHRoZSBFbnRpdHkgY2FuIHVzZSBhcyBjb3N0dW1lLiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYnkgQ3VzdG9tRW50aXR5Q2xhc3Nlc1xyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcnIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZEltYWdlcyggbG9hZGVkQ2FsbGJhY2sgKSB7XHJcbiAgICAvL1widGhpc1wiIHJlZmVycyB0byB0aGUgc3BlY2lmaWMgZW50aXR5IGNsYXNzIGluaGVyaXRpbmcgZnJvbSBcIkVudGl0eVwiXHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgZm9yIChsZXQgW2ltYWdlTmFtZSwgc3JjXSBvZiBPYmplY3QuZW50cmllcyggdGhpcy5pbWdTb3VyY2VzICkpIHtcclxuICAgICAgY29uc3QgaW1nID0gdGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcub25sb2FkID0gbG9hZGVkQ2FsbGJhY2s7XHJcbiAgICAgIGltZy5vbmVycm9yID0gbG9hZGVkQ2FsbGJhY2s7XHJcbiAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3BhcmFtc1NjaGVtYVxyXG4gIHN0YXRpYyBnZXQgcGFyYW1zU2NoZW1hKCl7XHJcbiAgICByZXR1cm4gSm9pLm9iamVjdCgge1xyXG4gICAgICB3aWR0aDogSm9pLm51bWJlcigpLmRlZmF1bHQoMSksXHJcbiAgICAgIGhlaWdodDogSm9pLm51bWJlcigpLmRlZmF1bHQoMSksXHJcbiAgICAgIGNPZmZzZXQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICByT2Zmc2V0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgbGF5ZXI6IEpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgcmVuZGVyU3RhcnRTdWJzY3JpcHRpb246IEpvaS5ib29sKCkuZGVmYXVsdChmYWxzZSksXHJcbiAgICAgIHNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uOiBKb2kuYm9vbCgpLmRlZmF1bHQoZmFsc2UpLFxyXG4gICAgICBrZXlEb3duU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAga2V5VXBTdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgICBtb3VzZURvd25TdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VNb3ZlU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VFbnRlclN1YnNjcmlwdGlvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkuZGVmYXVsdChbXSksXHJcbiAgICAgIG1vdXNlTGVhdmVTdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdHMgRW50aXR5LiBTaG91bGQgb25seSBiZSBjYWxsZWQgd2l0aCBzdXBlcigpIGZyb20gYSBjaGlsZCBjbGFzc1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBFbnRpdHlQYXJhbXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMud2lkdGggPSAxXSAtIERpc3BsYXllZCB3aWR0aCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5oZWlnaHQgPSAxXSAtIERpc3BsYXllZCBoZWlnaHQgb2YgdGhlIGVudGl0eSBpbiByb3dzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmNPZmZzZXQgPSAwXSAtIERpc3BsYXllZCBjT2Zmc2V0IG9mIHRoZSBlbnRpdHkgaW4gY29sdW1ucy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5yT2Zmc2V0ID0gMF0gLSBEaXNwbGF5ZWQgck9mZnNldCBvZiB0aGUgZW50aXR5IGluIHJvd3MuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMubGF5ZXIgPSAwXSAtIExheWVyIGF0IHdoaWNoIHRoZSB0aGUgZW50aXR5IGlzIGRpc3BsYXllZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24gPSBmYWxzZV0gLSBUcnVlIHRvIHN1YnNjcmliZSB0aGUgZW50aXR5IHRvIHRoZSByZW5kZXJTdGFydCBFdmVudFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IGZhbHNlXSAtIFRydWUgdG8gc3Vic2NyaWJlIHRoZSBlbnRpdHkgdG8gdGhlIHNjZW5lTG9hZGVkIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5rZXlEb3duU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGtleXMgZm9yIHdoaWNoIHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUga2V5RG93biBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMua2V5VXBTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2Yga2V5cyBmb3Igd2hpY2ggdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBrZXlVcCBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VEb3duU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlRG93biBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VVcFN1YnNjcmlwdGlvbnMgPSBbXV0gLSBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUgbW91c2VNb3ZlIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlRW50ZXIgRXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbcGFyYW1zLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUgbW91c2VMZWF2ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gVGhlIE9iamVjdCBwYXNzZWQgaW4gdG8gYWxsIEN1c3RvbUVudGl0eUNsYXNzZXMgYXMgc2Vjb25kIGFyZ3VtZW50IHdoZW4gY29uc3RydWN0ZWQgYnkgdGhlIEdyaWdhIEZhbWV3b3JrXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgLy92YWxpZGF0ZSBQYXJhbXNcclxuICAgIGxldCB2YWxpZFBhcmFtcztcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbGlkUGFyYW1zID0gSm9pLmF0dGVtcHQoIHBhcmFtcywgRW50aXR5LnBhcmFtc1NjaGVtYSApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgZS5uYW1lID0gJ0dyaWdhRW50aXR5UGFyYW1zRXJyb3InO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXQgUHJvcGVydGllc1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGVudGl0aWVzIGMgcG9zaXRpb25cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jID0gYXJncy5jO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGVudGl0aWVzIHIgcG9zaXRpb25cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yID0gYXJncy5yO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVHJ1ZSwgaWYgZW50aXR5IGlzIGRldGFjaGVkXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmRldGFjaGVkID0gYXJncy5kZXRhY2hlZDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIERpc3BsYXllZCB3aWR0aCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHZhbGlkUGFyYW1zLndpZHRoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheWVkIGhlaWdodCBvZiB0aGUgZW50aXR5IGluIHJvd3NcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5oZWlnaHQgPSB2YWxpZFBhcmFtcy5oZWlnaHQ7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5ZWQgY09mZnNldCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jT2Zmc2V0ID0gdmFsaWRQYXJhbXMuY09mZnNldDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIERpc3BsYXllZCByT2Zmc2V0IG9mIHRoZSBlbnRpdHkgaW4gcm93c1xyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJPZmZzZXQgPSB2YWxpZFBhcmFtcy5yT2Zmc2V0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gTGF5ZXIgYXQgd2hpY2ggdGhlIHRoZSBlbnRpdHkgaXMgZGlzcGxheWVkLlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmxheWVyID0gdmFsaWRQYXJhbXMubGF5ZXI7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUcnVlIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgcmVuZGVyU3RhcnQgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24gPSB2YWxpZFBhcmFtcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRydWUgaWYgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBzY2VuZUxvYWRlZCBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IHZhbGlkUGFyYW1zLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2Yga2V5cyBmb3Igd2hpY2ggdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBrZXlEb3duIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLmtleURvd25TdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2Yga2V5cyBmb3Igd2hpY2ggdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBrZXlVcCBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMua2V5VXBTdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VEb3duIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMubW91c2VEb3duU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlVXAgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMubW91c2VVcFN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZU1vdmUgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VFbnRlciBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlTGVhdmUgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUaGUgZ3JpZCB0aGUgZW50aXR5IGlzIGluXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtHcmlkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdyaWQgPSBhcmdzLmdyaWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUaGUgZ3JpZ2EgdGhlIGVudGl0eSBpcyBpblxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7R3JpZ2F9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ3JpZ2EgPSB0aGlzLmdyaWQuZ3JpZ2E7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gTmFtZSBvZiB0aGUgZW50aXRpZSdzIGN1cnJlbnQgaW1hZ2UuIFNob3VsZCBiZSBzZXQgYnkgYWxsIGVudGl0aWVzXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdkZWZhdWx0JztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIENvbnRhaW5zIGFsbCB0ZXh0cyBvZiB0aGUgZW50aXR5LiBUaGUgdGV4dCdzIGlkIGlzIHVzZWQgYXMga2V5XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBUZXh0Pn1cclxuICAgICAqL1xyXG4gICAgdGhpcy50ZXh0cyA9IHt9O1xyXG5cclxuICAgIC8vaW5pdGlhbGlzZSBFdmVudFN1YnNjcmlwdGlvbnNcclxuICAgIGlmICh0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvUmVuZGVyU3RhcnQoIHRoaXMgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvU2NlbmVMb2FkZWQoIHRoaXMgKTtcclxuICAgIH1cclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlEb3duKCB0aGlzLCBrZXkgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLmZvckVhY2goIGtleSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvS2V5VXAoIHRoaXMsIGtleSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZURvd24oIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZVVwKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZU1vdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUVudGVyKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VMZWF2ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8vY2FsbGVkIGF0IGV2ZXJ5IFJlbmRlclxyXG4gIGdldCBkaXNwbGF5RGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltZzogdGhpcy5jb25zdHJ1Y3Rvci5pbWFnZXNbIHRoaXMuY3VycmVudEltYWdlIF0sXHJcbiAgICAgIHBvcyA6IHRoaXMuY29tcHV0ZWRQb3MsXHJcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0ZXh0czogdGhpcy50ZXh0cyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb21wdXRlZFBvcygpIHtcclxuICAgIGNvbnN0IHBvcyA9IHt9O1xyXG4gICAgcG9zLmMgPSB0aGlzLmMgKyB0aGlzLmNPZmZzZXQ7XHJcbiAgICBwb3MuciA9IHRoaXMuciArIHRoaXMuck9mZnNldDtcclxuICAgIHJldHVybiBwb3M7XHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9ucyB0byBvdmVycmlkZVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdldGhlciB0aGUgRW50aXR5IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgc2NlbmVEYXRhIGF0IEdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICovXHJcbiAgaW5jbHVkZUluU2NlbmVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBwYXJhbXMgb2JqZWN0IHVzZWQgYnkgZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhLiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gaWYgeW91IHdhbnQgdG8gc2F2ZSBwYXJhbXMgYXQgZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhXHJcbiAgICogQHJldHVybnMge09iamVjdDxzdHJpbmcsICo+fVxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRQYXJhbXMoKSB7IC8vdXNlZCB0byBnZXRDdXJyZW50U2NlbmVEYXRhXHJcbiAgICByZXR1cm4ge307IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEdhbWUgTG9vcC4gR2V0J3MgY2FsbGVkIGJlZm9yZSBldmVyeSByZW5kZXIgaWYgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSByZW5kZXJTdGFydCBFdmVudC4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIHRvIGRvIGR5bmFtaWMgbW90aW9ucy9hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVQYXNzZWQgLSBUaW1lIHBhc3NlZCBzaW5jZSBsYXN0IHJlbmRlclxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIHJlbmRlclN0YXJ0SGFuZGxlciggdGltZVBhc3NlZCApe1xyXG4gICAgY29uc29sZS5sb2coICdwZXJmb3JtYW5jZS5ub3coKTogJyArIHBlcmZvcm1hbmNlLm5vdygpICk7XHJcbiAgICBjb25zb2xlLmxvZyggJ3RpbWVQYXNzZWQ6ICcgKyB0aW1lUGFzc2VkICk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGFsbCBlbnRpdGllcyBhcmUgbG9hZGVkIG9udG8gdGhpcy5ncmlkIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2NlbmVMb2FkZWQgRXZlbnQuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGluaXRhbCBjb2RlIHdoaWNoIHJlcXVpcmVzIHRoZSBwcmVzZW5jZSBvZiBhbGwgZW50aXRpZXMuXHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgc2NlbmVMb2FkZWRIYW5kbGVyKCl7XHJcbiAgICBjb25zb2xlLmxvZyggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJyBpcyBzdWJzY3JpYmVkIHRvIHRoZSBzY2VuZUxvYWRlZEV2ZW50IGJ1dCBkb2VzblxcJ3QgdXNlIGl0JyApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiBhIGtleSBpcyBwcmVzc2VkIGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUga2V5RG93biBFdmVudCBmb3IgdGhhdCBrZXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBnaXZlIGNvbnRyb2xscyB0byB0aGUgcGxheWVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgcHJvcGVydHkgb2YgdGhlIGphdmFzY3JpcHQga2V5RG93biBFdmVudFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIGtleURvd25IYW5kbGVyKCBrZXkgKXtcclxuICAgIGNvbnNvbGUubG9nKCBrZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gYSBrZXkgaXMgcmVsZWFzZWQgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBrZXlVcCBFdmVudCBmb3IgdGhhdCBrZXkuIENhbiBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgga2V5RG93bkhhbmRsZXIgdG8gdHJlYXQga2V5cyBhcyBidXR0b25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgcHJvcGVydHkgb2YgdGhlIGphdmFzY3JpcHQga2V5VXAgRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBrZXlVcEhhbmRsZXIoIGtleSApe1xyXG4gICAgY29uc29sZS5sb2coIGtleSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gYSBjbGljayBvY2N1cnMgb24gYSBkaXNwbGF5IGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VEb3duIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGNvZGUgb24gY2xpY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5IHRoZSBtb3VzZURvd24gRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZURvd24gRXZlbnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VSIC0gUi1wb3NpdGlvbiBvZiB0aGUgbW91c2VEb3duIEV2ZW50XHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VEb3duSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEgY2xpY2sgZW5kcyBvbiBhIGRpc3BsYXkgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZVVwIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGNvZGUgb24gY2xpY2stcmVsZWFzZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlVXAgRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlVXAgRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBtb3VzZVVwSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEgbW91c2VNb3ZlIEV2ZW50IG9jY3VycyBvbiBhIGRpc3BsYXkgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZU1vdmUgRXZlbnQgZm9yIHRoYXQgZGlzcGxheS4gQ2FuIGJlIHVzZWQgZm9yIGRyYWctYW5kLWRyb3AgaW4gY29tYmluYXRpb24gd2l0aCBtb3VzZURvd24gYW5kIG1vdXNlVXAgRXZlbnRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheSB0aGUgbW91c2VNb3ZlIEV2ZW50IG9jY3VyZWQgb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VDIC0gQy1wb3NpdGlvbiBvZiB0aGUgbW91c2VNb3ZlIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlTW92ZSBFdmVudFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlTW92ZUhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiApe1xyXG4gICAgY29uc29sZS5sb2coIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSB0aWxlIHRoZSBlbnRpdHkgaXMgaW4gYW5kIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VNb3ZlIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlRW50ZXIgRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZUVudGVyIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlRW50ZXIgRXZlbnRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdXNlUHJlc3NlZCAtIElmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgcHJlc3NlZCBkb3duXHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VFbnRlckhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgdGlsZSB0aGUgZW50aXR5IGlzIGluIGFuZCB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlTGVhdmUgRXZlbnQgZm9yIHRoYXQgZGlzcGxheS4gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheSB0aGUgbW91c2VMZWF2ZSBFdmVudCBvY2N1cmVkIG9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlQyAtIEMtcG9zaXRpb24gb2YgdGhlIG1vdXNlTGVhdmUgRXZlbnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VSIC0gUi1wb3NpdGlvbiBvZiB0aGUgbW91c2VMZWF2ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91c2VQcmVzc2VkIC0gSWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBwcmVzc2VkIGRvd25cclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBtb3VzZUxlYXZlSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKXtcclxuICAgIGNvbnNvbGUubG9nKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApO1xyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbnMgdG8gdXNlXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgbGF5ZXIgb2YgdGhlIGVudGl0eVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdMYXllciAtIE5ldyBsYXllciB0aGUgZW50aXR5IHNob3VsZCBiZSBkaXNwbGF5ZWQgb25cclxuICAgKi9cclxuICBjaGFuZ2VMYXllciggbmV3TGF5ZXIgKXtcclxuICAgIHRoaXMuZ3JpZC5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21MYXllckRhdGEoIHRoaXMgKTtcclxuICAgIHRoaXMubGF5ZXIgPSBuZXdMYXllcjtcclxuICAgIHRoaXMuZ3JpZC5hZGRFbnRpdHlJbnN0YW5jZVRvTGF5ZXJEYXRhKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSBkaXNwbGF5U2V0dGluZ3Mgb2YgdGhpcy5ncmlkIG9uIGEgZGlzcGxheS4gU2V0dGluZ3MgeW91IGRvbid0IHNwZWNpZnkgc3RheSB0aGUgc2FtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdG8gY2hhbmdlIHRoZSBncmlkRGlzcGxheVNldHRpbmdzXHJcbiAgICogQHBhcmFtIHtkaXNwbGF5U2V0dGluZ3N9IGRpc3BsYXlTZXR0aW5ncyAtIE9iamVjdCBjb250YWluaW5nIGFsbCBkaXNwbGF5U2V0dGluZ3MgeW91IHdhbid0IHRvIGNoYW5nZVxyXG4gICAqL1xyXG4gIGNoYW5nZUdyaWREaXNwbGF5U2V0dGluZ3MoIGRpc3BsYXlOYW1lLCBkaXNwbGF5U2V0dGluZ3MgKXtcclxuICAgIHRoaXMuZ3JpZC5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXS5jaGFuZ2VHcmlkRGlzcGxheVNldHRpbmdzKCB0aGlzLmdyaWQubmFtZSwgZGlzcGxheVNldHRpbmdzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBlbnRpdGllcyBjT2Zmc2V0IHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNPZmZzZXQgXHJcbiAgICovXHJcbiAgc2V0Q09mZnNldCggY09mZnNldCApe1xyXG4gICAgdGhpcy5jT2Zmc2V0ID0gY09mZnNldDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgck9mZnNldCBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByT2Zmc2V0IFxyXG4gICAqL1xyXG4gIHNldFJPZmZzZXQoIHJPZmZzZXQgKXtcclxuICAgIHRoaXMuck9mZnNldCA9IHJPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBlbnRpdGllcyBoZWlnaHQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxyXG4gICAqL1xyXG4gIHNldEhlaWdodCggaGVpZ2h0ICl7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgd2lkdGggcHJvcGVydHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggXHJcbiAgICovXHJcbiAgc2V0V2lkdGgoIHdpZHRoICl7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIHRoZSBlbnRpdHlcclxuICAgKi9cclxuICBkZWxldGUoKXtcclxuICAgIHRoaXMuZ3JpZC5kZWxldGVFbnRpdHlJbnN0YW5jZSggdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoZXMgdGhlIGRldGFjaGVkIGVudGl0eSB0byB0aGUgZ3JpZCBhdCAoYywgcilcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYyAtIENvbHVtblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByIC0gUm93XHJcbiAgICovXHJcbiAgYXR0YWNoKCBjLCByICl7XHJcbiAgICBpZiAoIXRoaXMuZGV0YWNoZWQpeyByZXR1cm4gY29uc29sZS53YXJuKCdjYW5cXCd0IGF0dGFjaCBhbiBhbHJlYWR5IGF0dGFjaGVkIEVudGl0eScpIH07XHJcblxyXG4gICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jID0gTWF0aC5yb3VuZCggYyApO1xyXG4gICAgdGhpcy5yID0gTWF0aC5yb3VuZCggciApO1xyXG4gICAgdGhpcy5ncmlkLmF0dGFjaEVudGl0eUluc3RhbmNlKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRhY2hlcyB0aGUgYXR0YWNoZWQgZW50aXR5LiBUaGUgcG9zaXRpb24gb2YgdGhlIGVudGl0eSB3aWxsIHN0YXkgdGhlIHNhbWVcclxuICAgKi9cclxuICBkZXRhY2goKXtcclxuICAgIGlmICh0aGlzLmRldGFjaGVkKXsgcmV0dXJuIGNvbnNvbGUud2FybignY2FuXFwndCBkZXRhY2ggYW4gYWxyZWFkeSBkZXRhY2hlZCBFbnRpdHknKSB9O1xyXG4gICAgdGhpcy5kZXRhY2hlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdyaWQuZGV0YWNoRW50aXR5SW5zdGFuY2UoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0cmluZyBjb250YWluaW5nIGEgZGlyZWN0aW9uLiBQb3NzaWJsZSBhcmU6ICd0b3AnLCd1cCcsJ25vcnRoJzsgJ3JpZ2h0JywnZWFzdCc7ICdib3R0b20nLCdkb3duJywnc291dGgnOyAnbGVmdCcsJ3dlc3QnOyAnaGVyZScsJ3N0YXknLiBUaGUgZGlyZWN0aW9uU3RyaW5nIGlzbid0IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgICogQHR5cGVkZWYge3N0cmluZ30gZGlyZWN0aW9uU3RyaW5nXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIHRoZSBmb3JtIFtkYywgZHJdIHJlcHJlc2VudGluZyBhIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBlbnRpdGllcyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXX0gcmVsYXRpdmVQb3NpdGlvblxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBPYmplY3Qgb2YgdGhlIGZvcm0ge2MsIHJ9IHJlcHJlc2VudGluZyBhbiBhYnNvbHV0ZSBwb3NpdGlvbi5cclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBhYnNvbHV0ZVBvc2l0aW9uXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGNcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gclxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBUdXJucyBhbnkgcG9zaXRpb24gaW50byBhIGFic29sdXRlUG9zaXRpb25cclxuICAgKiBAcGFyYW0ge2RpcmVjdGlvblN0cmluZ3xyZWxhdGl2ZVBvc2l0aW9ufGFic29sdXRlUG9zaXRpb259IHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtib3JkZXJNb2RlPVwiaWdub3JlXCJdIC0gd2hhdCB0byBkbyB3aGVuIHRoZSBwb3NpdGlvbiBpcyBvZmYgdGhlIGdyaWQuIFBvc3NpYmxlIGFyZTogaWdub3JlLCBtb2R1bG9cclxuICAgKiBAcmV0dXJucyB7YWJzb2x1dGVQb3NpdGlvbn0gYWJzb2x1dGVQb3NpdGlvblxyXG4gICAqL1xyXG4gIGZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCBwb3NpdGlvbiwgYm9yZGVyTW9kZSA9ICdpZ25vcmUnICl7XHJcbiAgICBsZXQgYWJzUG9zID0gbnVsbDtcclxuICAgIGlmIChwb3NpdGlvbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHsvL3JlbC4gcG9zIFtkYywgZHJdXHJcbiAgICAgIGFic1BvcyA9IHtcclxuICAgICAgICBjOiB0aGlzLmMgKyBwb3NpdGlvblswXSxcclxuICAgICAgICByOiB0aGlzLnIgKyBwb3NpdGlvblsxXSxcclxuICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnb2JqZWN0Jykgey8vYWJzLiBjb29yZHMge2MsIHJ9XHJcbiAgICAgIGFic1BvcyA9IHBvc2l0aW9uO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdzdHJpbmcnKSB7Ly9kaXJlY3Rpb24gc3RyaW5nXHJcbiAgICAgIGFic1BvcyA9IGFic1BvcyA9IHtjOiB0aGlzLmMsIHI6IHRoaXMucn07XHJcbiAgICAgIGlmIChbJ3RvcCcsJ3VwJywnbm9ydGgnXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgYWJzUG9zLnItLTtcclxuICAgICAgfSBlbHNlIGlmIChbJ3JpZ2h0JywnZWFzdCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICBhYnNQb3MuYysrO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnYm90dG9tJywnZG93bicsJ3NvdXRoJ10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIGFic1Bvcy5yKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoWydsZWZ0Jywnd2VzdCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICBhYnNQb3MuYy0tO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnaGVyZScsJ3N0YXknXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgLy9ub3RoaW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGJvcmRlck1vZGUgPT09ICdtb2R1bG8nICkge1xyXG4gICAgICBhYnNQb3MuYyA9IChhYnNQb3MuYyArIHRoaXMuZ3JpZC5jb2x1bW5zKSAlIHRoaXMuZ3JpZC5jb2x1bW5zO1xyXG4gICAgICBhYnNQb3MuciA9IChhYnNQb3MuciArIHRoaXMuZ3JpZC5yb3dzKSAlIHRoaXMuZ3JpZC5yb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhYnNQb3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlcyBlbnRpdHkgdG8gbmV3UG9zaXRpb25cclxuICAgKiBAcGFyYW0ge2RpcmVjdGlvblN0cmluZ3xyZWxhdGl2ZVBvc2l0aW9ufGFic29sdXRlUG9zaXRpb259IG5ld1Bvc2l0aW9uIC0gV2hlcmUgdGhlIGVudGl0eSBzaG91bGQgbW92ZSB0b1xyXG4gICAqL1xyXG4gIG1vdmUoIG5ld1Bvc2l0aW9uICl7XHJcbiAgICBuZXdQb3NpdGlvbiA9IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oIG5ld1Bvc2l0aW9uICk7XHJcbiAgICBpZiAodGhpcy5kZXRhY2hlZCl7XHJcbiAgICAgIHRoaXMuYyA9IG5ld1Bvc2l0aW9uLmM7XHJcbiAgICAgIHRoaXMuciA9IG5ld1Bvc2l0aW9uLnI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHsgdGhpcy5ncmlkLm1vdmVFbnRpdHlJbnN0YW5jZSggdGhpcywgbmV3UG9zaXRpb24gKSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHRleHQgdG8gdGhlIGVudGl0eVxyXG4gICAqIEBwYXJhbSB7VGV4dH50ZXh0U2V0dGluZ3N9IHRleHRTZXR0aW5ncyBcclxuICAgKi9cclxuICBhZGRUZXh0KCB0ZXh0U2V0dGluZ3MgKXtcclxuICAgIGlmICh0eXBlb2YgdGV4dFNldHRpbmdzICE9PSAnb2JqZWN0Jykge3JldHVybiBjb25zb2xlLmVycm9yKCd0ZXh0U2V0dGluZ3MgbmVlZHMgdG8gYmUgYW4gb2JqZWN0Jyl9O1xyXG4gICAgaWYgKHRleHRTZXR0aW5ncy5pZCA9PT0gdW5kZWZpbmVkKSB7cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ3RleHRTZXR0aW5ncyBuZWVkIHRvIGhhdmUgYW4gaWQgcHJvcGVydHknKX07XHJcbiAgICB0aGlzLnRleHRzWyB0ZXh0U2V0dGluZ3MuaWQgXSA9IG5ldyBUZXh0KCB0ZXh0U2V0dGluZ3MgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIHRleHQgZnJvbSB0aGUgZW50aXR5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxyXG4gICAqL1xyXG4gIHJlbW92ZVRleHQoIGlkICl7XHJcbiAgICBkZWxldGUgdGhpcy50ZXh0c1sgaWQgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIGVudGl0aWVzIGJlbmVhdGggdGhpcyBlbnRpdHkuIE9ubHkgd29ya3MgZm9yIGRldGFjaGVkIGVudGl0aWVzXHJcbiAgICogQHJldHVybnMge0VudGl0eX5DdXN0b21FbnRpdHlDbGFzc1tdfVxyXG4gICAqL1xyXG4gIGdldEVudGl0eUluc3RhbmNlc0JlbmVhdGgoKXtcclxuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzQmVuZWF0aERldGFjaGVkRW50aXR5SW5zdGFuY2UoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIEVudGl0eSB0byB0aGUga2V5RG93biBldmVudCBmb3IgdGhlIHNwZWNpZmllZCBrZXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0ga2V5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9LZXlEb3duKCBrZXkgKXtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMucHVzaCgga2V5ICk7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleURvd24oIHRoaXMsIGtleSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIEVudGl0eSBmcm9tIHRoZSBrZXlEb3duIGV2ZW50IGZvciB0aGUgc3BlY2lmaWVkIGtleVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21LZXlEb3duKCBrZXkgKXtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLmluZGV4T2YoIGtleSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlEb3duKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIEVudGl0eSB0byB0aGUga2V5VXAgZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQga2V5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvS2V5VXAoIGtleSApe1xyXG4gICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMucHVzaCgga2V5ICk7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleVVwKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBFbnRpdHkgZnJvbSB0aGUga2V5VXAgZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQga2V5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbUtleVVwKCBrZXkgKXtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLnNwbGljZSggdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMuaW5kZXhPZigga2V5ICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbUtleVVwKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgcmVuZGVyU3RhcnQgZXZlbnRcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb1JlbmRlclN0YXJ0KCl7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvUmVuZGVyU3RhcnQoIHRoaXMgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgcmVuZGVyU3RhcnQgZXZlbnRcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21SZW5kZXJTdGFydCgpe1xyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tUmVuZGVyU3RhcnQoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgc2NlbmVMb2FkZWQgZXZlbnRcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb1NjZW5lTG9hZGVkKCl7XHJcbiAgICB0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvU2NlbmVMb2FkZWQoIHRoaXMgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgc2NlbmVMb2FkZWQgZXZlbnRcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21TY2VuZUxvYWRlZCgpe1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tU2NlbmVMb2FkZWQoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgbW91c2VEb3duIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb01vdXNlRG93biggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5wdXNoKCBkaXNwbGF5TmFtZSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZURvd24oIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgZW50aXR5IGZyb20gdGhlIG1vdXNlRG93biBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VEb3duKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zLnNwbGljZSggdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlRG93biggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgbW91c2VVcCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZVVwKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucy5wdXNoKCBkaXNwbGF5TmFtZSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZVVwKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZVVwIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21Nb3VzZVVwKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMuaW5kZXhPZiggZGlzcGxheU5hbWUgKSwgMSApO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VVcCggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgbW91c2VNb3ZlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb01vdXNlTW92ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5wdXNoKCBkaXNwbGF5TmFtZSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZU1vdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgZW50aXR5IGZyb20gdGhlIG1vdXNlTW92ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VNb3ZlKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLnNwbGljZSggdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlTW92ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgbW91c2VFbnRlciBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZUVudGVyKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucy5wdXNoKCBkaXNwbGF5TmFtZSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUVudGVyKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZUVudGVyIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21Nb3VzZUVudGVyKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuaW5kZXhPZiggZGlzcGxheU5hbWUgKSwgMSApO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VFbnRlciggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgbW91c2VMZWF2ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZUxlYXZlKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucy5wdXNoKCBkaXNwbGF5TmFtZSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUxlYXZlKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZUxlYXZlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21Nb3VzZUxlYXZlKCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuaW5kZXhPZiggZGlzcGxheU5hbWUgKSwgMSApO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VMZWF2ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgSm9pIGZyb20gXCJAaGFwaS9qb2lcIjtcclxuXHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBsb2dpY2FsIGdyaWQuIFNhdmVzIHJlZmVyZW5jZXMgdG8gZW50aXRpZXNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkIHtcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgR3JpZFxyXG4gICAqIEdyaWRzIHNob3VsZCBvbmx5IGJlIGNvbnN0cnVjdGVkIHVzaW5nIHRoZSBncmlnYSBjb25maWdcclxuICAgKiBAaGlkZWNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIGNvbmZpZywgZ3JpZ2EgKXtcclxuICAgIHRoaXMuZ3JpZ2EgPSBncmlnYTtcclxuICAgIHRoaXMuZGlzcGxheXMgPSB7fTtcclxuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgdGhpcy5jb2x1bW5zID0gY29uZmlnLmNvbHVtbnM7XHJcbiAgICB0aGlzLnJvd3MgPSBjb25maWcucm93cztcclxuXHJcbiAgICB0aGlzLnJlc2V0TW91c2UoKTsgLy9zZXRzIHRoaXMubW91c2UgdG8gZGVmYXVsdFxyXG5cclxuICAgIC8vZW50aXR5SW5zdGFuY2VSZWZlcmVuY2VzXHJcbiAgICB0aGlzLmNsZWFyU2NlbmUoKTtcclxuXHJcbiAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gMDtcclxuICB9XHJcblxyXG4gIC8vc2V0dXBcclxuICBzZXR1cEdyaWREYXRhKCl7XHJcbiAgICBjb25zdCBncmlkRGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgYz0wOyBjPHRoaXMuY29sdW1uczsgYysrKSB7XHJcbiAgICAgIGdyaWREYXRhW2NdID0gW107XHJcbiAgICAgIGZvciAobGV0IHI9MDsgcjx0aGlzLnJvd3M7IHIrKykge1xyXG4gICAgICAgIGdyaWREYXRhW2NdW3JdID0gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBncmlkRGF0YTtcclxuICB9XHJcblxyXG4gIC8vaGFuZGxlclxyXG4gIHJlbmRlclN0YXJ0SGFuZGxlcigpe1xyXG4gICAgY29uc3QgdGltZVBhc3NlZCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5sYXN0UmVuZGVyVGltZTtcclxuICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb25zLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgZW50aXR5SW5zdGFuY2UucmVuZGVyU3RhcnRIYW5kbGVyKCB0aW1lUGFzc2VkICk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG4gIFxyXG4gIHNjZW5lTG9hZGVkSGFuZGxlcigpe1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbnMuZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICBlbnRpdHlJbnN0YW5jZS5zY2VuZUxvYWRlZEhhbmRsZXIoKTtcclxuICAgIH0gKTtcclxuICB9XHJcbiAgXHJcbiAga2V5RG93bkhhbmRsZXIoIGUgKXtcclxuICAgIGlmICh0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBlLmtleSApKSB7XHJcbiAgICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnNbIGUua2V5IF0uZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLmtleURvd25IYW5kbGVyKCBlLmtleSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlVcEhhbmRsZXIoIGUgKXtcclxuICAgIGlmICh0aGlzLmtleVVwU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZS5rZXkgKSkge1xyXG4gICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uc1sgZS5rZXkgXS5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgZW50aXR5SW5zdGFuY2Uua2V5VXBIYW5kbGVyKCBlLmtleSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3VzZU1vdmVIYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLG1vdXNlUiwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICl7XHJcbiAgICAvL2NoZWNrIGZvciBtb3VzZSBlbnRlciBUT0RPXHJcbiAgICBsZXQgbW92ZWRUb05ld1RpbGUgPSBmYWxzZTtcclxuICAgIGlmIChNYXRoLmZsb29yKHRoaXMubW91c2UuYykgIT09IE1hdGguZmxvb3IobW91c2VDKVxyXG4gICAgIHx8IE1hdGguZmxvb3IodGhpcy5tb3VzZS5yKSAhPT0gTWF0aC5mbG9vcihtb3VzZVIpKSB7XHJcbiAgICAgIG1vdmVkVG9OZXdUaWxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobW92ZWRUb05ld1RpbGUpIHtcclxuICAgICAgLy9maXJlIG1vdXNlIExlYXZlIEV2ZW50XHJcbiAgICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmdyaWREYXRhW01hdGguZmxvb3IodGhpcy5tb3VzZS5jKV1bTWF0aC5mbG9vcih0aGlzLm1vdXNlLnIpXVxyXG4gICAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBpZiAoZW50aXR5SW5zdGFuY2UubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgICAgZW50aXR5SW5zdGFuY2UubW91c2VMZWF2ZUhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy91cGRhdGUgdGhpcy5tb3VzZVxyXG4gICAgdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xyXG4gICAgdGhpcy5tb3VzZS5jID0gbW91c2VDO1xyXG4gICAgdGhpcy5tb3VzZS5yID0gbW91c2VSO1xyXG5cclxuICAgIGlmIChtb3ZlZFRvTmV3VGlsZSkge1xyXG4gICAgICAvL2ZpcmUgbW91c2UgRW50ZXIgRXZlbnRcclxuICAgICAgY29uc3QgdGFyZ2V0cyA9IHRoaXMuZ3JpZERhdGFbTWF0aC5mbG9vcih0aGlzLm1vdXNlLmMpXVtNYXRoLmZsb29yKHRoaXMubW91c2UucildXHJcbiAgICAgIHRhcmdldHMuZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGlmIChlbnRpdHlJbnN0YW5jZS5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucy5pbmNsdWRlcyggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgICAgICBlbnRpdHlJbnN0YW5jZS5tb3VzZUVudGVySGFuZGxlciggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSwgdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnNbIHRoaXMubW91c2UuZGlzcGxheU5hbWUgXS5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgZW50aXR5SW5zdGFuY2UubW91c2VNb3ZlSGFuZGxlciggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSwgdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIgKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VMZWF2ZUhhbmRsZXIoKXtcclxuICAgIHRoaXMucmVzZXRNb3VzZSgpO1xyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duSGFuZGxlciggZGlzcGxheU5hbWUsIGN0cmxLZXkgKXtcclxuICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmdyaWREYXRhW01hdGguZmxvb3IodGhpcy5tb3VzZS5jKV1bTWF0aC5mbG9vcih0aGlzLm1vdXNlLnIpXS5jb25jYXQoLy90aWxlc1xyXG4gICAgICB0aGlzLmdldERldGFjaGVkRW50aXR5SW5zdGFuY2VzQnlDb29yZGluYXRlcyggdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIgKSApOy8vZGV0YWNoZWRcclxuICAgIHRhcmdldHMuZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5SW5zdGFuY2UubW91c2VEb3duU3Vic2NyaXB0aW9ucy5pbmNsdWRlcyggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgICAgZW50aXR5SW5zdGFuY2UubW91c2VEb3duSGFuZGxlciggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSwgdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIsIGN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuICBtb3VzZVVwSGFuZGxlciggZGlzcGxheU5hbWUsIGN0cmxLZXkgKXtcclxuICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmdyaWREYXRhW01hdGguZmxvb3IodGhpcy5tb3VzZS5jKV1bTWF0aC5mbG9vcih0aGlzLm1vdXNlLnIpXS5jb25jYXQoLy90aWxlc1xyXG4gICAgICB0aGlzLmdldERldGFjaGVkRW50aXR5SW5zdGFuY2VzQnlDb29yZGluYXRlcyggdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIgKSApOy8vZGV0YWNoZWRcclxuICAgIHRhcmdldHMuZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICBpZiAoZW50aXR5SW5zdGFuY2UubW91c2VVcFN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlVXBIYW5kbGVyKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lLCB0aGlzLm1vdXNlLmMsIHRoaXMubW91c2UuciwgY3RybEtleSApO1xyXG4gICAgICB9XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvL2xpc3RlbmVyU3R1ZmZcclxuICBcclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvUmVuZGVyU3RhcnQoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucy5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbVJlbmRlclN0YXJ0KCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb25zLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucy5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcbiAgXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1NjZW5lTG9hZGVkKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbnMucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcbiAgXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleURvd24oIGVudGl0eUluc3RhbmNlLCBrZXkgKXtcclxuICAgIGlmICh0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBrZXkgKSkge1xyXG4gICAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zW2tleV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnNba2V5XSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlEb3duKCBlbnRpdHlJbnN0YW5jZSwga2V5ICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9uc1trZXldLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zW2tleV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvS2V5VXAoIGVudGl0eUluc3RhbmNlLCBrZXkgKXtcclxuICAgIGlmICh0aGlzLmtleVVwU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkpIHtcclxuICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNba2V5XS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNba2V5XSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlVcCggZW50aXR5SW5zdGFuY2UsIGtleSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMua2V5VXBTdWJzY3JpcHRpb25zW2tleV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zW2tleV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VEb3duKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGlmICh0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZURvd24oIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VVcCggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBpZiAodGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VVcCggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlTW92ZSggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBpZiAodGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBkaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VNb3ZlKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlRW50ZXIoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgaWYgKHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlRW50ZXIoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUxlYXZlKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGlmICh0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBkaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZUxlYXZlKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICAvL2Rpc3BsYXkgaW50ZXJhY3Rpb25zXHJcbiAgZ2V0IGRpc3BsYXlEYXRhKCl7XHJcbiAgICAvL3RyaWdnZXJSZW5kZXJTdGFydEV2ZW50XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0SGFuZGxlcigpO1xyXG4gICAgY29uc3QgYWxsTGF5ZXJzRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgdGhpcy5sYXllckRhdGEuZm9yRWFjaCggKCBsYXllckVudGl0eUluc3RhbmNlcywgbGF5ZXIgKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICBsYXllckVudGl0eUluc3RhbmNlcy5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgbGF5ZXJFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnB1c2goIGVudGl0eUluc3RhbmNlLmRpc3BsYXlEYXRhICk7XHJcbiAgICAgIH0gKTtcclxuICAgICAgYWxsTGF5ZXJzRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YVsgbGF5ZXIgXSA9IGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YTtcclxuICAgIH0gKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdyaWROYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIGFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGFcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIC8vYWxsRW50aXR5SW5zdGFuY2VzXHJcbiAgYWRkRW50aXR5SW5zdGFuY2VUb0FsbEVudGl0eUluc3RhbmNlcyggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMuYWxsRW50aXR5SW5zdGFuY2VzLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIHJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUFsbEVudGl0eUluc3RhbmNlcyggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlSW5kZXggPSB0aGlzLmFsbEVudGl0eUluc3RhbmNlcy5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5hbGxFbnRpdHlJbnN0YW5jZXMuc3BsaWNlKCBlbnRpdHlJbnN0YW5jZUluZGV4LCAxICk7XHJcbiAgfVxyXG5cclxuICAvL2VudGl0eURhdGFcclxuICBhZGRFbnRpdHlJbnN0YW5jZVRvRW50aXR5RGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGVudGl0eU5hbWUgPSBlbnRpdHlJbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgaWYgKHRoaXMuZW50aXR5RGF0YS5oYXNPd25Qcm9wZXJ0eSggZW50aXR5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgcmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tRW50aXR5RGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGVudGl0eU5hbWUgPSBlbnRpdHlJbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VJbmRleCA9IHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXS5zcGxpY2UoIGVudGl0eUluc3RhbmNlSW5kZXgsIDEgKTtcclxuICAgIGlmICh0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgZGVsZXRlIHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9kZXRhY2hlZERhdGFcclxuICBhZGRFbnRpdHlJbnN0YW5jZVRvRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5kZXRhY2hlZERhdGEucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcbiAgcmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VJbmRleCA9IHRoaXMuZGV0YWNoZWREYXRhLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmRldGFjaGVkRGF0YS5zcGxpY2UoIGVudGl0eUluc3RhbmNlSW5kZXgsIDEgKTtcclxuICB9XHJcblxyXG4gIC8vZ3JpZERhdGFcclxuICBhZGRFbnRpdHlJbnN0YW5jZVRvR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCB0aWxlRGF0YSA9IHRoaXMuZ3JpZERhdGFbIGVudGl0eUluc3RhbmNlLmMgXVsgZW50aXR5SW5zdGFuY2UuciBdO1xyXG4gICAgdGlsZURhdGEucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcbiAgcmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCB0aWxlRGF0YSA9IHRoaXMuZ3JpZERhdGFbIGVudGl0eUluc3RhbmNlLmMgXVsgZW50aXR5SW5zdGFuY2UuciBdO1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VJbmRleCA9IHRpbGVEYXRhLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aWxlRGF0YS5zcGxpY2UoIGVudGl0eUluc3RhbmNlSW5kZXgsIDEgKTtcclxuICB9XHJcblxyXG4gIC8vbGF5ZXJEYXRhXHJcbiAgYWRkRW50aXR5SW5zdGFuY2VUb0xheWVyRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGxldCBsYXllckFycmF5ID0gW107XHJcbiAgICBpZiAodGhpcy5sYXllckRhdGEuaGFzKCBlbnRpdHlJbnN0YW5jZS5sYXllciApKSB7XHJcbiAgICAgIGxheWVyQXJyYXkgPSB0aGlzLmxheWVyRGF0YS5nZXQoIGVudGl0eUluc3RhbmNlLmxheWVyICk7XHJcbiAgICB9XHJcbiAgICBsYXllckFycmF5LnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmxheWVyRGF0YS5zZXQoIGVudGl0eUluc3RhbmNlLmxheWVyLCBsYXllckFycmF5ICk7XHJcbiAgfVxyXG4gIHJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUxheWVyRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGxheWVyQXJyYXkgPSB0aGlzLmxheWVyRGF0YS5nZXQoIGVudGl0eUluc3RhbmNlLmxheWVyICk7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZUluZGV4ID0gbGF5ZXJBcnJheS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgbGF5ZXJBcnJheS5zcGxpY2UoIGVudGl0eUluc3RhbmNlSW5kZXgsIDEgKTtcclxuICAgIGlmIChsYXllckFycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sYXllckRhdGEuc2V0KCBlbnRpdHlJbnN0YW5jZS5sYXllciwgbGF5ZXJBcnJheSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sYXllckRhdGEuZGVsZXRlKCBlbnRpdHlJbnN0YW5jZS5sYXllciApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgRW50aXR5TWV0aG9kc1xyXG4gIGF0dGFjaEVudGl0eUluc3RhbmNlKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IEVudGl0eU1ldGhvZHNcclxuICBkZXRhY2hFbnRpdHlJbnN0YW5jZSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG5cclxuLy9QVUJMSUMgeERcclxuXHJcbiAgc3RhdGljIGdldCBhcmdzU2NoZW1hKCl7XHJcbiAgICByZXR1cm4gSm9pLm9iamVjdCgge1xyXG4gICAgICBkZXRhY2hlZDogSm9pLmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcclxuICAgICAgYzogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIHI6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApXHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RzIGEgbmV3IGVudGl0eVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbnRpdHlOYW1lIC0gTmFtZSBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3NcclxuICAgKiBAcGFyYW0geyp9IFtwYXJhbXM9e31dIC0gUGFyYW1zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW4gYXMgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzc1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbYXJnc10gLSBBcmd1bWVudHMgZm9yIHRoZSBlbnRpdGllcyBpbnRpYWwgc3RhdGUuIENhbiBzdGlsbCBiZSBvdmVyd3JpdHRlbiBpbiB0aGUgY29uc3RydWN0b3Igb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzIGJlZm9yZSBjYWxsaW5nIHN1cGVyKClcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthcmdzLmRldGFjaGVkPWZhbHNlXSAtIFRydWUgaWYgdGhlIGVudGl0eSBzaG91bGQgYmUgZGV0YWNoZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3MuYz0wXSAtIEMgcG9zaXRpb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2FyZ3Mucj0wXSAtIFIgcG9zaXRpb25cclxuICAgKi9cclxuICBuZXdFbnRpdHlJbnN0YW5jZSggZW50aXR5TmFtZSwgcGFyYW1zID0ge30sIGFyZ3MgPSB7fSApe1xyXG4gICAgLy92YWxpZGF0ZSBBcmdzXHJcbiAgICBsZXQgdmFsaWRBcmdzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsaWRBcmdzID0gSm9pLmF0dGVtcHQoIGFyZ3MsIEdyaWQuYXJnc1NjaGVtYSApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgZS5uYW1lID0gJ25ld0VudGl0eUFyZ3NFcnJvcic7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vY3JlYXRlIG5ldyBlbnRpdHlJbnN0YW5jZVxyXG4gICAgdmFsaWRBcmdzLmdyaWQgPSB0aGlzO1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2UgPSBuZXcgdGhpcy5ncmlnYS5lbnRpdGllc1sgZW50aXR5TmFtZSBdKFxyXG4gICAgICBwYXJhbXMsIHZhbGlkQXJnc1xyXG4gICAgKTtcclxuICAgIC8vc2V0IGFsbCBlbnRpdHlJbnN0YW5jZSBSZWZlcmVuY2VzXHJcbiAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9BbGxFbnRpdHlJbnN0YW5jZXMoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9FbnRpdHlEYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgaWYgKGVudGl0eUluc3RhbmNlLmRldGFjaGVkKSB7XHJcbiAgICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0RldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9MYXllckRhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcblxyXG4gICAgcmV0dXJuIGVudGl0eUluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgRW50aXR5TWV0aG9kc1xyXG4gIGRlbGV0ZUVudGl0eUluc3RhbmNlKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgLy9yZW1vdmUgYWxsIHJlZmVyZW5jZXMgdG8gZW50aXR5SW5zdGFuY2VcclxuICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tQWxsRW50aXR5SW5zdGFuY2VzKCBlbnRpdHlJbnN0YW5jZSApXHJcbiAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUVudGl0eURhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICBpZiAoZW50aXR5SW5zdGFuY2UuZGV0YWNoZWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUxheWVyRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIGVudGl0eUluc3RhbmNlLmtleURvd25TdWJzY3JpcHRpb25zLmZvckVhY2goIGtleSA9PiB7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlEb3duKCBlbnRpdHlJbnN0YW5jZSwga2V5ICk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBFbnRpdHlNZXRob2RzXHJcbiAgbW92ZUVudGl0eUluc3RhbmNlKCBlbnRpdHlJbnN0YW5jZSwgbmV3UG9zICl7XHJcbiAgICAvL3ZhbGlkYXRlIG5ld1Bvc1xyXG4gICAgaWYgKG5ld1Bvcy5jID49IDAgJiYgbmV3UG9zLmMgPCB0aGlzLmNvbHVtbnNcclxuICAgICAmJiBuZXdQb3MuciA+PSAwICYmIG5ld1Bvcy5yIDwgdGhpcy5yb3dzKSB7XHJcbiAgICAgIC8vdXBkYXRlIGVudGl0eVBvc2l0aW9uXHJcbiAgICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlLmMgPSBuZXdQb3MuYztcclxuICAgICAgZW50aXR5SW5zdGFuY2UuciA9IG5ld1Bvcy5yO1xyXG4gICAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbHRlcnMgYW5kIHJldHVybnMgYWxsIEVudGl0aWVzIG1hdGNoaW5nIHRoZSBzZWxlY3Rvck9iamVjdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3Rvck9iamVjdCAtIE9iamVjdCBjb250YWluaW5nIGZpbHRlciBvcHRpb25zXHJcbiAgICogQHBhcmFtIHthYnNvbHV0ZVBvc2l0aW9ufSBbc2VsZWN0b3JPYmplY3QudGlsZV0gLSBUaWxlIHRoZSBlbnRpdGllcyBuZWVkIHRvIGJlIG9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvck9iamVjdC50eXBlXSAtIFRoZSBOYW1lIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzcyB0aGUgZW50aXRpZXMgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvck9iamVjdC5ub3RUeXBlXSAtIFRoZSBOYW1lIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzcyB0aGUgZW50aXRpZXMgc2hvdWxkIG5vdCBiZSBhbiBpbnN0YW5jZSBvZlxyXG4gICAqL1xyXG4gIGdldEVudGl0eUluc3RhbmNlcyggc2VsZWN0b3JPYmplY3QgPSB7fSApe1xyXG4gICAgbGV0IGVudGl0eUluc3RhbmNlcyA9IHRoaXMuYWxsRW50aXR5SW5zdGFuY2VzO1xyXG4gICAgaWYgKHNlbGVjdG9yT2JqZWN0Lmhhc093blByb3BlcnR5KCd0aWxlJykpIHtcclxuICAgICAgaWYgKHNlbGVjdG9yT2JqZWN0LnRpbGUuYyA+PSAwICYmIHNlbGVjdG9yT2JqZWN0LnRpbGUuYyA8IHRoaXMuY29sdW1uc1xyXG4gICAgICAgJiYgc2VsZWN0b3JPYmplY3QudGlsZS5yID49IDAgJiYgc2VsZWN0b3JPYmplY3QudGlsZS5yIDwgdGhpcy5yb3dzKSB7IC8vY29vcmRpbmF0ZXMgaW5zaWRlIGdyaWRcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZXMgPSB0aGlzLmdyaWREYXRhWyBzZWxlY3Rvck9iamVjdC50aWxlLmMgXVsgc2VsZWN0b3JPYmplY3QudGlsZS5yIF07XHJcbiAgICAgICAgaWYgKHNlbGVjdG9yT2JqZWN0Lmhhc093blByb3BlcnR5KCd0eXBlJykpIHtcclxuICAgICAgICAgIGVudGl0eUluc3RhbmNlcyA9IGVudGl0eUluc3RhbmNlcy5maWx0ZXIoIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0eUluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT09IHNlbGVjdG9yT2JqZWN0LnR5cGU7XHJcbiAgICAgICAgICB9ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlcyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yT2JqZWN0Lmhhc093blByb3BlcnR5KCd0eXBlJykpIHtcclxuICAgICAgZW50aXR5SW5zdGFuY2VzID0gdGhpcy5lbnRpdHlEYXRhWyBzZWxlY3Rvck9iamVjdC50eXBlIF07XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0b3JPYmplY3QuaGFzT3duUHJvcGVydHkoJ25vdFR5cGUnKSkge1xyXG4gICAgICBlbnRpdHlJbnN0YW5jZXMgPSBlbnRpdHlJbnN0YW5jZXMuZmlsdGVyKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0eUluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgIT09IHNlbGVjdG9yT2JqZWN0Lm5vdFR5cGU7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXRzIGFsbCBkZXRhY2hlZCBlbnRpdGllcyB3aGljaCBhcmUgXCJ1bmRlclwiIHRoZSBjb29yZGluYXRlcyAoYywgcilcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYyAtIEMgY29vcmRpbmF0ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByIC0gUiBjb29yZGluYXRlXHJcbiAgICovXHJcbiAgZ2V0RGV0YWNoZWRFbnRpdHlJbnN0YW5jZXNCeUNvb3JkaW5hdGVzKCBjLCByICl7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZXMgPSB0aGlzLmRldGFjaGVkRGF0YS5maWx0ZXIoIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgcmV0dXJuIChjID4gZW50aXR5SW5zdGFuY2UuYyAmJiBjIDwgZW50aXR5SW5zdGFuY2UuYytlbnRpdHlJbnN0YW5jZS53aWR0aFxyXG4gICAgICAgICYmIHIgPiBlbnRpdHlJbnN0YW5jZS5yICYmIHIgPCBlbnRpdHlJbnN0YW5jZS5yK2VudGl0eUluc3RhbmNlLmhlaWdodCk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4gZW50aXR5SW5zdGFuY2VzO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgZW50aXR5IG1ldGhvZHNcclxuICBnZXRFbnRpdHlJbnN0YW5jZXNCZW5lYXRoRGV0YWNoZWRFbnRpdHlJbnN0YW5jZSggZGV0YWNoZWRFbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3Qgc3RhcnRDID0gTWF0aC5mbG9vciggZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS5jICk7XHJcbiAgICBjb25zdCBlbmRDID0gZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS5jICsgZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS53aWR0aDtcclxuICAgIGNvbnN0IHN0YXJ0UiA9IE1hdGguZmxvb3IoIGRldGFjaGVkRW50aXR5SW5zdGFuY2UuciApO1xyXG4gICAgY29uc3QgZW5kUiA9IGRldGFjaGVkRW50aXR5SW5zdGFuY2UuciArIGRldGFjaGVkRW50aXR5SW5zdGFuY2UuaGVpZ2h0O1xyXG4gICAgbGV0IGVudGl0eUluc3RhbmNlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgYyA9IHN0YXJ0QzsgYyA8IGVuZEM7IGMrKykge1xyXG4gICAgICBmb3IgKGxldCByID0gc3RhcnRSOyByIDwgZW5kUjsgcisrKSB7XHJcbiAgICAgICAgaWYgKGMgPj0gMCAmJiBjIDwgdGhpcy5jb2x1bW5zXHJcbiAgICAgICAgICYmIHIgPj0gMCAmJiByIDwgdGhpcy5yb3dzKSB7XHJcbiAgICAgICAgICBlbnRpdHlJbnN0YW5jZXMgPSBlbnRpdHlJbnN0YW5jZXMuY29uY2F0KCB0aGlzLmdyaWREYXRhW2NdW3JdICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50aXR5SW5zdGFuY2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbG9hZHMgYSBzY2VuZSBpbnRvIHRoZSBncmlkXHJcbiAgICogQHBhcmFtIHtHcmlkfnNjZW5lRGF0YX0gc2NlbmVEYXRhIC0gU2NlbmVEYXRhIE9iamVjdFxyXG4gICAqL1xyXG4gIGxvYWRTY2VuZSggc2NlbmVEYXRhICl7XHJcbiAgICAvL1RPRE8gZGV0YWNoZWRcclxuXHJcbiAgICAvL3RpbGVzXHJcbiAgICBzY2VuZURhdGEudGlsZXMuZm9yRWFjaCggKGNEYXRhLCBjKSA9PiB7XHJcbiAgICAgIGNEYXRhLmZvckVhY2goICh0aWxlRGF0YSwgcikgPT4ge1xyXG4gICAgICAgIHRpbGVEYXRhLmZvckVhY2goIGVudGl0eURlY2xhcmF0aW9uID0+IHtcclxuICAgICAgICAgIGNvbnN0IGVudGl0eU5hbWUgPSBlbnRpdHlEZWNsYXJhdGlvblswXTtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGVudGl0eURlY2xhcmF0aW9uWzFdIHx8IHt9O1xyXG4gICAgICAgICAgY29uc3QgYXJncyA9IHsgZGV0YWNoZWQ6IGZhbHNlLCBjLCByIH07XHJcbiAgICAgICAgICB0aGlzLm5ld0VudGl0eUluc3RhbmNlKCBlbnRpdHlOYW1lLCBwYXJhbXMsIGFyZ3MgKTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH0gKTtcclxuICAgIC8vdHJpZ2dlclNjZW5lTG9hZGVkRXZlbnRcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRIYW5kbGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBHcmlkfnNjZW5lRGF0YVxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXlbXX0gZGV0YWNoZWQgLSBBcnJheSBjb250YWluaW5nIGRhdGEgZm9yIGEgZGV0YWNoZWQgZW50aXR5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGRldGFjaGVkLjAgLSBOYW1lIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzc1xyXG4gICAqIEBwcm9wZXJ0eSB7YW55fSBkZXRhY2hlZC4xIC0gRW50aXR5IHBhcmFtc1xyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkZXRhY2hlZC4yIC0gUG9zaXRpb24gb2YgdGhlIGRldGFjaGVkIEVudGl0eVxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGV0YWNoZWQuMi5jPTBdIC0gQyBwb3NpdGlvblxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbZGV0YWNoZWQuMi5yPTBdIC0gUiBwb3NpdGlvblxyXG4gICAqIEBwcm9wZXJ0eSB7QXJyYXlbXVtdfSBhdHRhY2hlZCAtIEFycmF5IGluc2lkZSBhIDJEIGFycmF5IHJlcHJlc2VudGluZyBhbGwgW2MsIHJdIHRpbGVzIG9uIHRoZSBncmlkIGNvbnRhaW5pbmcgZGF0YSBmb3IgYW4gYXR0YWNoZWQgZW50aXR5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGF0dGFjaGVkLjAgLSBOYW1lIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzc1xyXG4gICAqIEBwcm9wZXJ0eSB7YW55fSBhdHRhY2hlZC4xIC0gRW50aXR5IHBhcmFtc1xyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBjbGVhcnMgdGhlIFNjZW5lLCBhbGwgZW50aXRlcyBnZXQgZGVsZXRlZFxyXG4gICAqL1xyXG4gIGNsZWFyU2NlbmUoKXtcclxuICAgIHRoaXMuYWxsRW50aXR5SW5zdGFuY2VzID0gW107XHJcbiAgICB0aGlzLmVudGl0eURhdGEgPSB7fTtcclxuICAgIHRoaXMuZ3JpZERhdGEgPSB0aGlzLnNldHVwR3JpZERhdGEoKTtcclxuICAgIHRoaXMuZGV0YWNoZWREYXRhID0gW107XHJcbiAgICB0aGlzLmxheWVyRGF0YSA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZ3JpZCBhcyBzY2VuZURhdGEuIElmIHlvdSBoYXZlIGVudGl0ZXMgd2hpY2ggc2hvdWxkIHNhdmUgcGFyYW1ldGVycyBpbiB0aGUgc2NlbmVEYXRhLCB1c2UgKG92ZXJ3cml0ZSkgdGhlIGdldEN1cnJlbnRQYXJhbXMgbWV0aG9kIG9mIEVudGl0eS4gSWYgeW91IGhhdmUgRW50aXRpZXMgd2hpY2ggc2hvdWxkbid0IGJlIGluY2x1ZGVkIGluIHRoZSBzY2VuZURhdGEsIG92ZXJ3cml0ZSB0aGVyIGluY2x1ZGVJblNjZW5lRGF0YSBNZXRob2QgdG8gcmV0dXJuIGZhbHNlO1xyXG4gICAqIEByZXR1cm5zIHtHcmlkfnNjZW5lRGF0YX1cclxuICAgKi9cclxuICBnZXRDdXJyZW50U2NlbmVEYXRhKCl7XHJcbiAgICBjb25zdCBzY2VuZURhdGEgPSB7XHJcbiAgICAgIGRldGFjaGVkOiBbXSxcclxuICAgICAgdGlsZXM6IFtdXHJcbiAgICB9XHJcbiAgICAvL2RldGFjaGVkXHJcblxyXG4gICAgLy90aWxlc1xyXG4gICAgdGhpcy5ncmlkRGF0YS5mb3JFYWNoKCAoY0RhdGEsIGMpID0+IHtcclxuICAgICAgc2NlbmVEYXRhLnRpbGVzLnB1c2goW10pO1xyXG4gICAgICBjRGF0YS5mb3JFYWNoKCAodGlsZURhdGEsIHIpID0+IHtcclxuICAgICAgICBzY2VuZURhdGEudGlsZXNbY11bcl0gPSB0aWxlRGF0YS5maWx0ZXIoIGUgPT4gZS5pbmNsdWRlSW5TY2VuZURhdGEoKSApLm1hcCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIFtlbnRpdHlJbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lLCBlbnRpdHlJbnN0YW5jZS5nZXRDdXJyZW50UGFyYW1zKCldO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgfSApO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIHNjZW5lRGF0YTtcclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IGdyaWQgbW91c2UgZXZlbnQgeERcclxuICByZXNldE1vdXNlKCl7XHJcbiAgICB0aGlzLm1vdXNlID0ge1xyXG4gICAgICBkaXNwbGF5TmFtZTogbnVsbCxcclxuICAgICAgZG93bjogZmFsc2UsXHJcbiAgICAgIGM6IDAsIHI6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxufSIsIi8qKlxyXG4gKiBHcmlnYVxyXG4gKiBAdmVyc2lvbiAxLjAuMFxyXG4gKiBAYXV0aG9yIFRvbSBLb3BvbHRcclxuICogcGF1bC1nb2JsaW4gb24gR2l0SHViXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlzcGxheSB9IGZyb20gJy4vZGlzcGxheSc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnO1xyXG5cclxuY29uc3QgSm9pID0gcmVxdWlyZSgnQGhhcGkvam9pJyk7XHJcblxyXG5jb25zdCB3cmFwcGVySWRFeGlzdHMgPSAod3JhcHBlcklkKSA9PiB7XHJcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHdyYXBwZXJJZCk7XHJcbiAgaWYgKHdyYXBwZXIpIHtyZXR1cm4gd3JhcHBlcklkfTtcclxuICB0aHJvdyBuZXcgRXJyb3IoYHRoZXJlJ3Mgbm8gSFRNTC1FbGVtZW50IHdpdGggd3JhcHBlcklkICR7d3JhcHBlcklkfWApO1xyXG59XHJcbi8qKlxyXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgYSBDb21wbGV0ZSBHYW1lLCBpbmNsdWRpbmcgTG9naWMgYW5kIEdyYXBoaWNzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZ2Ege1xyXG5cclxuICAvL2NvbmZpZ1NjaGVtYVxyXG4gIHN0YXRpYyBnZXQgY29uZmlnU2NoZW1hKCl7XHJcbiAgICByZXR1cm4gSm9pLm9iamVjdCgge1xyXG4gICAgICAvL2Rpc3BsYXlzXHJcbiAgICAgIGRpc3BsYXlzOiBKb2kuYXJyYXkoKS5pdGVtcyggSm9pLm9iamVjdCgge1xyXG4gICAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICB3cmFwcGVySWQ6IEpvaS5hbnkoKS5yZXF1aXJlZCgpLmN1c3RvbSggd3JhcHBlcklkRXhpc3RzLCAnd3JhcHBlcklkIHZhbGlkYXRpb24nICksXHJcbiAgICAgICAgICB3aWR0aEhlaWdodFJhdGlvOiBKb2kubnVtYmVyKCkuZGVmYXVsdCgxKSwvL2luIChmcmFjdGlvbiBvZiByZXNwb25zaXZlIHRpbGVXaWR0aCksIDEgZm9yIHNxdWFyZVxyXG4gICAgICB9ICkgKSxcclxuICAgICAgLy9ncmlkc1xyXG4gICAgICBncmlkczogSm9pLmFycmF5KCkuaXRlbXMoIEpvaS5vYmplY3QoIHtcclxuICAgICAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICBjb2x1bW5zOiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLmRlZmF1bHQoMSksXHJcbiAgICAgICAgcm93czogSm9pLm51bWJlcigpLmludGVnZXIoKS5kZWZhdWx0KDEpLFxyXG4gICAgfSApICksXHJcbiAgICAgIC8vZW50aXRpZXNcclxuICAgICAgZW50aXRpZXM6IEpvaS5hcnJheSgpLml0ZW1zKCBKb2kuZnVuY3Rpb24oKS5jbGFzcygpICkucmVxdWlyZWQoKSwgLy9ubyBnb29kIHZhbGlkYXRpb24geWV0XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGRpc3BsYXlTZXR0aW5nc1NjaGVtYSgpe1xyXG4gICAgcmV0dXJuIEpvaS5vYmplY3QoIHtcclxuICAgICAgdG9wOiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgbGVmdDogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIHdpZHRoOiBKb2kubnVtYmVyKCkubWluKDApLmRlZmF1bHQoMSksXHJcbiAgICAgIGhlaWdodDogSm9pLm51bWJlcigpLm1pbigwKS5kZWZhdWx0KDEpLFxyXG4gICAgICBjb2x1bW5zT25TY3JlZW46IEpvaS5udW1iZXIoKS5taW4oMSkuZGVmYXVsdCgxKSxcclxuICAgICAgcm93c09uU2NyZWVuOiBKb2kubnVtYmVyKCkubWluKDEpLmRlZmF1bHQoMSksXHJcbiAgICAgIGNvbHVtblNoaWZ0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgcm93U2hpZnQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNhbGxiYWNrIEdyaWdhfmltYWdlc0xvYWRlZENhbGxiYWNrXHJcbiAgICogQHBhcmFtIHtHcmlnYX0gZ3JpZ2EgLSBUaGUgR3JpZ2EgaW5zdGFuY2UgXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEVudGl0eX5DdXN0b21FbnRpdHlDbGFzcyAtIEN1c3RvbSBDbGFzc2VzIGV4dGVuZGluZyBFbnRpdHlcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIFRoZSBncmlnYSBjb25maWcgb2JqZWN0XHJcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gY29uZmlnLmRpc3BsYXlzIC0gQXJyYXkgb2YgZGlzcGxheSBzZXR0aW5nIG9iamVjdHMuIEZvciBlYWNoIG9iamVjdCBHcmlnYSBjcmVhdGVzIGEgY29ycmVzcG9uZGluZyBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5kaXNwbGF5c1tdLm5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5kaXNwbGF5c1tdLndyYXBwZXJJZCAtIElkIG9mIHRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcuZGlzcGxheXNbXS53aWR0aEhlaWdodFJhdGlvPTFdIC0gVGhlIGRpc3BsYXkncyBoZWlnaHQgcmVsYXRpdmUgdG8gaXRzIHdpZHRoXHJcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gY29uZmlnLmdyaWRzIC0gQXJyYXkgb2YgZ3JpZCBzZXR0aW5nIG9iamVjdHMuIEZvciBlYWNoIG9iamVjdCBHcmlnYSBjcmVhdGVzIGEgY29ycmVzcG9uZGluZyBncmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5ncmlkc1tdLm5hbWUgLSBOYW1lIG9mIHRoZSBncmlkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcuZ3JpZHNbXS5jb2x1bW5zPTFdIC0gTnVtYmVyIG9mIGNvbHVtbnNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5ncmlkc1tdLnJvd3M9MV0gLSBOdW1iZXIgb2Ygcm93c1xyXG4gICAqIEBwYXJhbSB7RW50aXR5fkN1c3RvbUVudGl0eUNsYXNzW119IGNvbmZpZy5lbnRpdGllcyAtIEFycmF5IG9mIGFsbCBDdXN0b21FbnRpdHlDbGFzc2VzIEdyaWdhIHNob3VsZCB1c2VcclxuICAgKiBAcGFyYW0ge0dyaWdhfmltYWdlc0xvYWRlZENhbGxiYWNrfSBjYiAtIFRoZSBjYWxsYmFjayB0cmlnZ2VycyB3aGVuIGFsbCB0aGUgSW1hZ2VzIGFyZSBMb2FkZWRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggY29uZmlnLCBpbWFnZXNMb2FkZWRDYWxsYmFjayApe1xyXG4gICAgLy92YWxpZGF0ZSBDb25maWdcclxuICAgIGxldCB2YWxpZENvbmZpZztcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbGlkQ29uZmlnID0gSm9pLmF0dGVtcHQoIGNvbmZpZywgR3JpZ2EuY29uZmlnU2NoZW1hICk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBlLm5hbWUgPSAnR3JpZ2FDb25maWdFcnJvcic7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vZGVjbGFyZSBhbGwgdmFyaWFibGVzXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBDb250YWlucyByZWZlcmVuY2VzIHRvIGFsbCBkaXNwbGF5cy4gVGhlIGRpc3BsYXkncyBuYW1lIGlzIHVzZWQgYXMga2V5XHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAbWVtYmVyIHtPYmplY3QuPHN0cmluZywgRGlzcGxheT59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGlzcGxheXMgPSB0aGlzLnNldHVwRGlzcGxheXMoIHZhbGlkQ29uZmlnLmRpc3BsYXlzICk7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBDb250YWlucyByZWZlcmVuY2VzIHRvIGFsbCBncmlkcy4gVGhlIGdyaWRzJ3MgbmFtZSBpcyB1c2VkIGFzIGtleVxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQG1lbWJlciB7T2JqZWN0LjxzdHJpbmcsIEdyaWQ+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdyaWRzID0gdGhpcy5zZXR1cEdyaWRzKCB2YWxpZENvbmZpZy5ncmlkcyApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ29udGFpbnMgcmVmZXJlbmNlcyB0byBhbGwgQ3VzdG9tRW50aXR5Q2xhc3Nlcy4gVGhlIGVudGl0aWUncyBuYW1lIGlzIHVzZWQgYXMga2V5XHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAbWVtYmVyIHtPYmplY3QuPHN0cmluZywgRW50aXR5fkN1c3RvbUVudGl0eUNsYXNzPn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5lbnRpdGllcyA9IE9iamVjdC5mcm9tRW50cmllcyggdmFsaWRDb25maWcuZW50aXRpZXMubWFwKFxyXG4gICAgICBlbnRpdHkgPT4gW2VudGl0eS5uYW1lLCBlbnRpdHldXHJcbiAgICApICk7XHJcblxyXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgLy9sb2FkSW1hZ2VzXHJcbiAgICB0aGlzLmltYWdlc0xvYWRlZENhbGxiYWNrID0gaW1hZ2VzTG9hZGVkQ2FsbGJhY2s7XHJcbiAgICB0aGlzLmxvYWRJbWFnZXMoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5yZW5kZXIoKSApO1xyXG4gIH1cclxuXHJcbiAgLy9zZXR1cFxyXG4gIHNldHVwRGlzcGxheXMoIGRpc3BsYXlzQ29uZmlnICl7XHJcbiAgICBjb25zdCBkaXNwbGF5cyA9IHt9O1xyXG4gICAgZGlzcGxheXNDb25maWcuZm9yRWFjaCggZGlzcGxheUNvbmZpZyA9PiB7XHJcbiAgICAgIGRpc3BsYXlzWyBkaXNwbGF5Q29uZmlnLm5hbWUgXSA9IG5ldyBEaXNwbGF5KCBkaXNwbGF5Q29uZmlnICk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4gZGlzcGxheXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cEdyaWRzKCBncmlkc0NvbmZpZyApe1xyXG4gICAgY29uc3QgZ3JpZHMgPSB7fTtcclxuICAgIGdyaWRzQ29uZmlnLmZvckVhY2goIGdyaWRDb25maWcgPT4ge1xyXG4gICAgICBncmlkc1sgZ3JpZENvbmZpZy5uYW1lIF0gPSBuZXcgR3JpZCggZ3JpZENvbmZpZywgdGhpcyApO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIGdyaWRzO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgdGhpcy5rZXlzUHJlc3NlZCA9IFtdO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7dGhpcy5yZXNpemVEaXNwbGF5cygpfSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5VXBIYW5kbGVyKGUpICk7XHJcbiAgfVxyXG5cclxuICAvL2xvYWQgSW1hZ2VzXHJcbiAgaW1hZ2VMb2FkZWQoKXtcclxuICAgIGlmICgtLXRoaXMuaW1hZ2VzVG9Mb2FkID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkQ2FsbGJhY2soIHRoaXMgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZXMoKXtcclxuICAgIHRoaXMuaW1hZ2VzVG9Mb2FkID0gMDtcclxuICAgIE9iamVjdC52YWx1ZXMoIHRoaXMuZW50aXRpZXMgKS5mb3JFYWNoKCBlbnRpdHkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlc1RvTG9hZCArPSBPYmplY3Qua2V5cyhlbnRpdHkuaW1nU291cmNlcykubGVuZ3RoO1xyXG4gICAgfSApO1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VzVG9Mb2FkID09PSAwKSB7IHRoaXMuaW1hZ2VzTG9hZGVkQ2FsbGJhY2soIHRoaXMgKSB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgT2JqZWN0LnZhbHVlcyggdGhpcy5lbnRpdGllcyApLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmxvYWRJbWFnZXMoICgpID0+IHt0aGlzLmltYWdlTG9hZGVkKCl9ICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgcmVuZGVyU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIC8vcmVuZGVyIGVhY2ggRGlzcGxheVxyXG4gICAgT2JqZWN0LnZhbHVlcyggdGhpcy5kaXNwbGF5cyApLmZvckVhY2goIFxyXG4gICAgICBkaXNwbGF5ID0+IGRpc3BsYXkucmVuZGVyKClcclxuICAgICk7XHJcbiAgICAvL2NoZWNrIGZvciBtc3B0XHJcbiAgICBjb25zdCBtc3B0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSByZW5kZXJTdGFydDtcclxuICAgIGlmIChtc3B0ID4gMykge1xyXG4gICAgICBjb25zb2xlLndhcm4oICdtc3B0OiAnICsgKHBlcmZvcm1hbmNlLm5vdygpIC0gcmVuZGVyU3RhcnQpICk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMucmVuZGVyKCkgKTtcclxuICB9XHJcblxyXG4gIC8vSGFuZGxlclxyXG4gIGtleURvd25IYW5kbGVyKCBlICl7XHJcbiAgICBpZiAoIXRoaXMua2V5c1ByZXNzZWQuaW5jbHVkZXMoIGUua2V5ICkpIHtcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgICBncmlkLmtleURvd25IYW5kbGVyKCBlICk7XHJcbiAgICAgIH0gKTtcclxuICAgICAgdGhpcy5rZXlzUHJlc3NlZC5wdXNoKCBlLmtleSApO1xyXG4gICAgfVxyXG4gIH1cclxuICBrZXlVcEhhbmRsZXIoIGUgKXtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5ncmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGdyaWQua2V5VXBIYW5kbGVyKCBlICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmtleXNQcmVzc2VkLnBvcCggZS5rZXkgKTtcclxuICB9XHJcblxyXG4vL1BVQkxJQyB4RFxyXG5cclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBkaXNwbGF5U2V0dGluZ3NcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2xlZnQgPSAwXSAtIExlZnQgb2Zmc2V0IG9mIHRoZSBncmlkIGluICUgb2YgZGlzcGxheSB3aWR0aCBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3RvcCA9IDBdIC0gVG9wIG9mZnNldCBvZiB0aGUgZ3JpZCBpbiAlIG9mIGRpc3BsYXkgaGVpZ2h0XHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFt3aWR0aCA9IDFdIC0gV2lkdGggb2YgdGhlIGdyaWQgaW4gJSBvZiBkaXNwbGF5IHdpZHRoIFxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbaGVpZ2h0ID0gMV0gLSBIZWlnaHQgb2YgdGhlIGdyaWQgaW4gJSBvZiBkaXNwbGF5IGhlaWdodCBcclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW2NvbHVtbnNPblNjcmVlbiA9IDFdIC0gVGhlIG51bWJlciBvZiBjb2x1bW5zIHdoaWNoIGZpdCBpbnRvIHRoZSBncmlkcyB3aWR0aFxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcm93c09uU2NyZWVuID0gMV0gLSBUaGUgbnVtYmVyIG9mIHJvd3Mgd2hpY2ggZml0IGludG8gdGhlIGdyaWRzIGhlaWdodFxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29sdW1uU2hpZnQgPSAwXSAtIFRoZSBudW1iZXIgb2YgY29sdW1ucyB0aGUgR3JpZCBzaG91bGQgYmUgc2hpZnRlZCBpbiBjIGRpcmVjdGlvblxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbcm93U2hpZnQgPSAxXSAtIFRoZSBudW1iZXIgb2Ygcm93cyB0aGUgR3JpZCBzaG91bGQgYmUgc2hpZnRlZCBpbiByIGRpcmVjdGlvblxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBhIGdyaWQgb24gYSBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgRGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBncmlkTmFtZSAtIE5hbWUgb2YgdGhlIEdyaWRcclxuICAgKiBAcGFyYW0ge2Rpc3BsYXlTZXR0aW5nc30gZGlzcGxheVNldHRpbmdzIC0gT2JqZWN0IGNvbnRhaW5pbmcgYWxsIHlvdXIgZGlzcGxheVNldHRpbmdzXHJcbiAgICovXHJcbiAgZGlzcGxheUdyaWQoIGRpc3BsYXlOYW1lLCBncmlkTmFtZSwgZGlzcGxheVNldHRpbmdzICl7XHJcbiAgICAvL3ZhbGlkYXRlIGRpc3BsYXlTZXR0aW5nc1xyXG4gICAgbGV0IHZhbGlkRGlzcGxheVNldHRpbmdzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsaWREaXNwbGF5U2V0dGluZ3MgPSBKb2kuYXR0ZW1wdCggZGlzcGxheVNldHRpbmdzLCBHcmlnYS5kaXNwbGF5U2V0dGluZ3NTY2hlbWEgKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGUubmFtZSA9ICdEaXNwbGF5U2V0dGluZ3NFcnJvcic7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZS5uYW1lfTogJHtlLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzcGxheXNbIGRpc3BsYXlOYW1lIF0ubGlua0dyaWQoIHRoaXMuZ3JpZHNbIGdyaWROYW1lIF0sIHZhbGlkRGlzcGxheVNldHRpbmdzICk7XHJcbiAgICB0aGlzLmdyaWRzWyBncmlkTmFtZSBdLmRpc3BsYXlzWyBkaXNwbGF5TmFtZSBdID0gdGhpcy5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGdyaWQgZnJvbSBhIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JpZE5hbWUgLSBOYW1lIG9mIHRoZSBHcmlkXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgRGlzcGxheVxyXG4gICAqL1xyXG4gIHJlbW92ZUdyaWRGcm9tRGlzcGxheSggZ3JpZE5hbWUsIGRpc3BsYXlOYW1lICl7XHJcbiAgICB0aGlzLmRpc3BsYXlzWyBkaXNwbGF5TmFtZSBdLnVubGlua0dyaWQoIGdyaWROYW1lICk7XHJcbiAgICBkZWxldGUgdGhpcy5ncmlkc1sgZ3JpZE5hbWUgXS5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBuZXcgRGlzcGxheSB0byBncmlnYS5kaXNwbGF5cy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIERpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gd3JhcHBlcklkIC0gSWQgb2YgdGhlIGh0bWwtZWxlbWVudCBmb3IgdGhlIGRpc3BsYXlcclxuICAgKiBAcGFyYW0geyp9IHdpZHRoSGVpZ2h0UmF0aW8gLVdpZHRoIEhlaWdodCByYXRpb1xyXG4gICAqL1xyXG4gIG5ld0Rpc3BsYXkoIG5hbWUsIHdyYXBwZXJJZCwgd2lkdGhIZWlnaHRSYXRpbyA9IDEgKXtcclxuICAgIHRoaXMuZGlzcGxheXNbIG5hbWUgXSA9IG5ldyBEaXNwbGF5KCB7XHJcbiAgICAgIG5hbWUsIHdyYXBwZXJJZCwgd2lkdGhIZWlnaHRSYXRpb1xyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIERpc3BsYXkgYW5kIGFsbCBpdHMgTGlua3MgdG8gR3JpZHNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBcclxuICAgKi9cclxuICBkZWxldGVEaXNwbGF5KCBuYW1lICl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmRpc3BsYXlzW25hbWVdLmxpbmtlZEdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgZGVsZXRlIHRoaXMuZ3JpZHNbIGdyaWQgXS5kaXNwbGF5c1sgbmFtZSBdO1xyXG4gICAgfSApO1xyXG4gICAgZGVsZXRlIHRoaXMuZGlzcGxheXNbbmFtZV07XHJcbiAgfVxyXG5cclxuICByZXNpemVEaXNwbGF5cygpe1xyXG4gICAgT2JqZWN0LnZhbHVlcyggdGhpcy5kaXNwbGF5cyApLmZvckVhY2goIFxyXG4gICAgICBkaXNwbGF5ID0+IGRpc3BsYXkucmVzaXplKClcclxuICAgICk7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=