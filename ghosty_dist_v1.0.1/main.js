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
/* harmony import */ var _entities_ghosty_entities_diamond_stone__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entities/ghosty_entities/diamond_stone */ "./src/ghosty/entities/ghosty_entities/diamond_stone.js");
/* harmony import */ var _entities_ghosty_entities_diamond_pressure_plate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entities/ghosty_entities/diamond_pressure_plate */ "./src/ghosty/entities/ghosty_entities/diamond_pressure_plate.js");



















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
  entities:[_entities_background_tile__WEBPACK_IMPORTED_MODULE_2__["BackgroundTile"], _entities_selection_background__WEBPACK_IMPORTED_MODULE_7__["SelectionBackground"], _entities_ghosty_entities_stone__WEBPACK_IMPORTED_MODULE_5__["Stone"], _entities_ghosty_entities_ghosty__WEBPACK_IMPORTED_MODULE_3__["Ghosty"], _entities_ghosty_entities_goal__WEBPACK_IMPORTED_MODULE_4__["Goal"], _entities_ghosty_entities_wooden_box__WEBPACK_IMPORTED_MODULE_6__["WoodenBox"], _entities_ghosty_entities_hole__WEBPACK_IMPORTED_MODULE_12__["Hole"], _entities_ghosty_entities_hole_border__WEBPACK_IMPORTED_MODULE_13__["HoleBorder"], _entities_ghosty_entities_diamond_stone__WEBPACK_IMPORTED_MODULE_16__["DiamondStone"], _entities_ghosty_entities_diamond_pressure_plate__WEBPACK_IMPORTED_MODULE_17__["DiamondPressurePlate"]],
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
    this.version = '1.0.1';
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
    this.home.start();
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

  letEntitiesFallDown(jump = true){ //lets all entities fall down (not just solid)
    let entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => e.constructor.name !== 'BackgroundTile' );
    let floorLayer = 10;
    if ( entitiesOnTile.find( e => e.constructor.name === 'Hole' ) ){ floorLayer = 0 };
    entitiesOnTile = entitiesOnTile.filter( e => !['Hole', 'HoleBorder'].includes(e.constructor.name) );
    const highestLayer = Math.max(...entitiesOnTile.map( e => 10+e.layerAddend ));
    const solidEntityOnBaseLayer = [];
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      solidEntityOnBaseLayer[ currentBaseLayer ] = entitiesOnTile.find( e => 10+e.layerAddend === currentBaseLayer && e.layer%10 === 7);
    }
    let emptyLayers = 0;
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      const entitiesOnBaseLayer = entitiesOnTile.filter( e => 10+e.layerAddend === currentBaseLayer );
      entitiesOnBaseLayer.forEach( e => {
        if (e.moveVertically && emptyLayers > 0) {e.moveVertically(-emptyLayers,jump)}
      } );
      if (!solidEntityOnBaseLayer[currentBaseLayer]) {
        emptyLayers++;
      }
    }

    entitiesOnTile.forEach( e => {
      if (typeof e.updateState === 'function') {
        e.updateState();
      };
    } );
  }

  moveEntitiesUp( stayEntity, jump = true ){
    const entitiesOnTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r}
    } ).filter( e => !['BackgroundTile', 'Hole', 'HoleBorder'].includes(e.constructor.name) );
    const baseLayer = 10 + stayEntity.layerAddend;
    const entitiesToMoveUp = entitiesOnTile.filter( e => 10+e.layerAddend === baseLayer && e !== stayEntity );
    entitiesToMoveUp.forEach( e => {
      if (e.moveVertically) {e.moveVertically(1,jump)}
    } );
    const solidEntityMovedUp = entitiesToMoveUp.find( e => e.layer%10 === 7 );
    if (solidEntityMovedUp) {
      this.moveEntitiesUp(solidEntityMovedUp);
    }
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
            this.letEntitiesFallDown();
            entitiesOnTile.forEach( e => e.newEntityWasPlacedOnTile(entity) );
            this.griga.ghosty.editor.sceneChangedHandler();
          }
        }
      } else if (sameEntitiesOnTile.length === 1 && ctrlKey) {
        sameEntitiesOnTile[0].beforeDelete();
        sameEntitiesOnTile[0].delete();
        this.letEntitiesFallDown();
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
    if (this.backgroundSceneLoaded) {
      this.letEntitiesFallDown();
      if (this.grid.name !== 'play') {return};
      this.sceneChanged = false;
      if (this.c == 0 && this.r == 0) {//keyTrackTile
        this.griga.ghosty.play.keyTrackEntity = this;
        this.ghostyAnimationsEnded = 0;
        this.fastMode = {};
        this.timesKeyIsReleased = {};
        this.tilesToUpdate = [];
        Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
          this.subscribeToKeyDown( key );
          this.subscribeToKeyUp( key );
          this.timesKeyIsReleased[key] = 0;
          this.fastMode[key] = false;
        } );
      }
    } else {
      this.backgroundSceneLoaded = true;
    }
  }

  keyDownHandler( key ){ //keyTrackTile
    this.xthTimeKeyIsDown++;
    const allEntities = this.grid.getEntityInstances( {
      notType: 'BackgroundTile'
    } );
    const goals = this.grid.getEntityInstances( {
      type: 'Goal'
    } );
    this.tilesToUpdate.forEach( tile => {
      this.grid.getEntityInstances( {
        tile, type: 'BackgroundTile'
      } )[0].letEntitiesFallDown();
    } );
    this.tilesToUpdate = [];
    const taskDoneArray = allEntities.map( e => e.taskDone() );
    if (!taskDoneArray.includes( false ) && goals.length > 0 ) {
      if (this.grid.getEntityInstances({type:'Goal'})) { //if there exists at least one goal
        setTimeout(() => this.griga.ghosty.play.levelDone(), 200);
      }
    }

    if (this.sceneChanged) {
      this.griga.ghosty.play.updateUndoHistory();
    }

    this.sceneChanged = false;
  }

  keyUpHandler( key ){
    this.fastMode[key] = false;
    this.timesKeyIsReleased[key]++;
  }

  addTilesToUpdate( tiles ) {
    tiles.forEach( t => {
      if (!this.tilesToUpdate.find( uT => uT.c === t.c && uT.r === t.r )) {
        this.tilesToUpdate.push(t);
      }
    } );
  }

  //used to implement the hold-and-move feature
  moveAnimationChainOfGhostyEmptied() {
    this.ghostyAnimationsEnded++;
    const ghosties = this.grid.getEntityInstances({type:'Ghosty'});
    if ( this.ghostyAnimationsEnded === ghosties.length ) {
      this.handleKeyHold();
    }
  }

  handleKeyHold() { //almost works, probably some issue cause of keys getting stuck (griga);
    this.ghostyAnimationsEnded = 0;

    Object.keys(this.grid.keyDownSubscriptions).forEach( key => {
      if (this.griga.keysPressed.includes(key)) {
        if (this.fastMode[key]) {
          this.grid.keyDownHandler({key});
        } else {
          const currentTimeKeyIsUp = this.timesKeyIsReleased[key];
          setTimeout( (currentTimeKeyIsUp) => {
            if (currentTimeKeyIsUp === this.timesKeyIsReleased[key]) {
              this.fastMode[key] = true;
              this.handleKeyHold();
            }
          }, 200, currentTimeKeyIsUp );
        }
      }
    } );
  }

  includeInSceneData() {
    return false;
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/diamond_pressure_plate.js":
/*!***********************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/diamond_pressure_plate.js ***!
  \***********************************************************************/
/*! exports provided: DiamondPressurePlate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiamondPressurePlate", function() { return DiamondPressurePlate; });
/* harmony import */ var _pressure_plate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pressure_plate */ "./src/ghosty/entities/ghosty_entities/pressure_plate.js");


class DiamondPressurePlate extends _pressure_plate__WEBPACK_IMPORTED_MODULE_0__["PressurePlate"] {
  constructor( params, args ){
    params.gates = 'DiamondStone';
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return levelIndex;
  }

  static get imgSources(){
    return { up: './tile_img/diamond_pressure_plate.png',
             down: './tile_img/diamond_pressure_plate_down.png' };
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/diamond_stone.js":
/*!**************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/diamond_stone.js ***!
  \**************************************************************/
/*! exports provided: DiamondStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiamondStone", function() { return DiamondStone; });
/* harmony import */ var _gate_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate_stone */ "./src/ghosty/entities/ghosty_entities/gate_stone.js");


class DiamondStone extends _gate_stone__WEBPACK_IMPORTED_MODULE_0__["GateStone"] {
  constructor( params, args ){
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return levelIndex;
  }

  static get imgSources(){
    return { closed: './tile_img/diamond_stone.jpg',
             open: './tile_img/diamond_open.png'};
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/gate_stone.js":
/*!***********************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/gate_stone.js ***!
  \***********************************************************/
/*! exports provided: GateStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateStone", function() { return GateStone; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");
/* harmony import */ var _stone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stone */ "./src/ghosty/entities/ghosty_entities/stone.js");



class GateStone extends _stone__WEBPACK_IMPORTED_MODULE_1__["Stone"] {
  constructor( params, args ){
    super( params, args );
    this.currentImage = params.state || 'closed';
  }

  open(){
    this.currentImage = 'open';
    this.changeLayer( 13 );
    this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0].letEntitiesFallDown(false);
  }

  close(){
    this.currentImage = 'closed';
    this.changeLayer( 17 );
    this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0].moveEntitiesUp( this, false );
  }

  getCurrentParams(){
    const params = _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"].prototype.getCurrentParams.call(this);
    params.state = this.currentImage;
    return params;
  }

  allowMove( requestChain ){
   if (this.currentImage === 'open') {
     return true;
   } else {
     return _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"].prototype.allowMove.call(this, requestChain);
   }
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
    let moveDirection = key.slice(5).toLowerCase();
    let imageDirection = moveDirection;
    this.addAnimationFunction( 'move', () => {
      this.currentImage = imageDirection;
      this.removeAnimationFunction('move', 0);
    } );
    if (this.requestMove( moveDirection )) {
      this.griga.ghosty.play.keyTrackEntity.sceneChanged = true;
    } else { moveDirection = 'stay' };
    this.move( moveDirection );
  }

  validateMove( requestChain ){
    if (this.validatedEntities.includes( requestChain[requestChain.length-1][0] )){
      return true;
    }
    if ( this.layer%10 === 7 && requestChain[requestChain.length-1][0].layerAddend !== this.layerAddend ){
      return true;
    }
    this.validatedEntities.push(requestChain[requestChain.length-1][0]);
    let success = this.requestMove( requestChain[requestChain.length-1][1] );
    this.validatedEntities = [];
    return success;
  }

  animationChainEmptied( category ){
    if (category === 'move' && this.grid.name === 'play') {
      this.griga.ghosty.play.keyTrackEntity.moveAnimationChainOfGhostyEmptied();
    }
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
    if (ghosties[0]) {return ghosties[0].layerAddend === this.layerAddend};
    return false;
  }

  allowBeingPlaced(  tile, editorGrid  ){
    const entitiesOnTile = editorGrid.getEntityInstances( {tile} );
    const otherEntity = entitiesOnTile.find( e => !['Hole', 'HoleBorder', 'BackgroundTile'].includes(e.constructor.name) );
    if (otherEntity) {return false}
    else {return true}
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

  beforeDelete(){
    Object.values( _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["directionToSide"] ).forEach( side => {
      if ( this[`border${side}`] ) {
        this[`border${side}`].delete();
      } else {
        this[`hole${side}`].removeHole( _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["oppositeSide"][side.toLowerCase()] );
      }
    } );
    const backgroundTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0];
    backgroundTile.moveEntitiesUp( {layerAddend: -10} );
    
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
    const down = requestChain[ requestChain.length-1 ][0].layerAddend === -10; //fix
    if (down && !valid) {
      return false;
    } else {
      return true;
    }
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/pressure_plate.js":
/*!***************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/pressure_plate.js ***!
  \***************************************************************/
/*! exports provided: PressurePlate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressurePlate", function() { return PressurePlate; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class PressurePlate extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 13 );
    this.gatesName = params.gates;
    this.state = params.state || 'up';
    this.currentImage = this.state;
  }

  release(){
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (!downs.includes(false)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.close() );
    }
    this.state = this.currentImage = 'up';

  }

  press(){
    this.state = this.currentImage = 'down';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (!downs.includes(false)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.open() );
    }
  }

  getCurrentParams(){
    const params = _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"].prototype.getCurrentParams.call(this);
    params.state = this.currentImage;
    return params;
  }

  allowMove(){
    return true;
  }

  updateState(){
    const entitiesOnTop = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
    } ).filter( e => !['Hole', 'HoleBorder', 'BackgroundTile', this.constructor.name].includes(e.constructor.name) );
    const entityOnTop = entitiesOnTop.find( e => e.layerAddend === this.layerAddend );
    if (!entityOnTop && this.state === 'down') {
      this.release();
    } else if (entityOnTop && this.state === 'up') {
      this.press();
    }
  }

  beforeDelete(){
    //check if all remaining pressure plates are down
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
  }

  static get imgSources(){
    return { default: './tile_img/stone.jpg'};
  }

  allowPlacing( entity ){
    if (this.layer === 7) {return entity.constructor.name === 'Ghosty'}
    else {return entity.constructor.name === 'Hole'}
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
    if (requestChain.length === 1) {
      return this.requestMove(requestChain[0][1], requestChain);
    } else {
      return false;
    }
  }

  entityWillMoveToTile( entity, direction ) {
    if ( this.layerAddend === entity.layerAddend ){
      this.move( direction, true );
      entity.addAnimationFunction( 'move', () => {
        const timePassed = performance.now()-this.animationFunctions['move'][0].startTime;
        this.removeAnimationFunction('move', timePassed, 'dummyAnimationFunction');
        entity.removeAnimationFunction('move', 0);
      } );
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

const MOVE_UP_SIZE_INCREASE_FACTOR = 16/14;
const VERTICAL_MOVE_DURATION = 100;
const MOVE_DURATION = 100;

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
    this.moveAnimationDirections = [];
    this.animationFunctions = {};
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
    const params = {};
    if (this.widthMultiplier !== 1){ params.widthMultiplier = this.widthMultiplier };
    if (this.heightMultiplier !== 1){ params.heightMultiplier = this.heightMultiplier };
    if (this.layerAddend !== 0){ params.layerAddend = this.layerAddend };
    return params;
  }

  moveVertically( amount, jump = true, autoanimate = true ){
    this.addHeightMultiplier( Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, amount) );
    this.addWidthMultiplier( Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, amount) );
    this.addLayerAddend( amount*10 );
    const aO = {
      changeInBaseLayer: amount,
      targetAbsBaseLayer: this.layerAddend/10,
      jump
    };
    this.setWidth( this.basisWidth * Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, -this.layerAddend/10), false );
    this.setHeight( this.basisHeight * Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, -this.layerAddend/10), false );
    this.changeLayer( this.basisLayer-amount*10 );
    if (autoanimate) {
      this.addVerticalMoveAnimation(aO);
    }
  }

  addVerticalMoveAnimation(aO){
    this.addAnimationFunction('move',
      () => this.setVerticalMoveAnimationSize(), aO
    );
  }

  addWidthMultiplier( multiplier ){
    this.widthMultiplier *= multiplier;
    this.setWidth( this.basisWidth );
  }

  addHeightMultiplier( multiplier ){
    this.heightMultiplier *= multiplier;
    this.setHeight( this.basisHeight );
  }

  addLayerAddend( addend ){
    this.layerAddend += addend;
    this.changeLayer( this.basisLayer );
  }

  setWidth( width, setBasis = true ){
    if (setBasis) {this.basisWidth = width};
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setWidth.call( this, width*this.widthMultiplier);
    this.setCOffset( this.basisCOffset );
  }

  setHeight( height, setBasis = true ){
    if (setBasis) {this.basisHeight = height};
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setHeight.call( this, height*this.heightMultiplier );
    this.setROffset( this.basisROffset );
  }

  setCOffset( cOffset ){
    this.basisCOffset = cOffset;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setCOffset.call( this, cOffset + (1-this.width)/2 );
  }

  setROffset( rOffset ){
    this.basisROffset = rOffset;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.setROffset.call( this, rOffset + (1-this.height)/2 );
  }

  changeLayer( layer ){
    this.basisLayer = layer;
    _griga_entity__WEBPACK_IMPORTED_MODULE_0__["Entity"].prototype.changeLayer.call( this, layer + this.layerAddend );
  }

  move( direction, waitAnimation = false) {
    const absPos = this.formatPositionAsAbsolutePosition(direction, 'modulo');
    const relPos = this.formatPositionAsRelativePosition(direction, 'modulo');
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
    this.griga.ghosty.play.keyTrackEntity.addTilesToUpdate( [absPos, {c:this.c, r:this.r}] );
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
    this.setCOffset( this.basisCOffset - relPos[0] );
    this.setROffset( this.basisROffset - relPos[1] );
    if (waitAnimation) {
      this.addAnimationFunction('move', this.dummyAnimationFunction);
    }
    this.addMoveAnimation(relPos, absPos)
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

  addMoveAnimation( relMoveDirection, targetTileAbsPos ){
    this.addAnimationFunction( 'move',
      () => this.setMoveAnimationOffset(),
      {relMoveDirection, targetTileAbsPos} );
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
    if ( this.layer%10 === 7 && requestChain[requestChain.length-1][0].layerAddend !== this.layerAddend ){
      return true;
    }
    const allowMove = this.allowMove( requestChain );
    return allowMove;
  }

  addAnimationFunction( category, fnc, valuesForAnimationObject = {} ){
    if (this.animationFunctions[category]) {
      this.animationFunctions[category].push(
        Object.assign( {fnc}, valuesForAnimationObject )
      );
    } else {
      this.animationFunctions[category] = [Object.assign(
        {fnc,startTime: performance.now()},
        valuesForAnimationObject
      )];
    }
    if (!this.renderStartSubscription) {
      this.subscribeToRenderStart();
    }
  }

  removeAnimationFunction( category, durationOfLastAnimation, functionName ){
    if (this.animationFunctions[category].length === 1) {
      delete this.animationFunctions[category];
    } else {
      let index = 0;
      if (functionName) {
        index = this.animationFunctions[category].findIndex( aO => aO.fnc.name === functionName);
      }
      if (index === 0) {
        const oldStartTime = this.animationFunctions[category][0].startTime;
        this.animationFunctions[category].splice(0,1);
        const newAnimationObject = this.animationFunctions[category][0];
        newAnimationObject.startTime = oldStartTime + durationOfLastAnimation;
        newAnimationObject.fnc();
      } else {
        this.animationFunctions[category].splice(index, 1);
      }
    }
    if (Object.keys(this.animationFunctions).length === 0) {
      this.unsubscribeFromRenderStart();
    }
    if (!this.animationFunctions[category]) {
      this.animationChainEmptied(category);
    }
  }

  dummyAnimationFunction(){}

  moveOffsetFunction( timeSinceAnimationStart ){
    const offset = 1 - Math.sqrt( timeSinceAnimationStart/MOVE_DURATION );
    // const offset = 1 - timeSinceAnimationStart/MOVE_DURATION
    return offset;
  }

  setMoveAnimationOffset(){
    const animationObject = this.animationFunctions['move'][0];
    const timeSinceAnimationStart = performance.now() - animationObject.startTime;
    const relTargetPosition = this.formatPositionAsRelativePosition( animationObject.targetTileAbsPos );
    let absOffset = this.moveOffsetFunction( timeSinceAnimationStart );
    absOffset = Math.max(absOffset, 0);
    this.setCOffset( relTargetPosition[0] - absOffset * animationObject.relMoveDirection[0] );
    this.setROffset( relTargetPosition[1] - absOffset * animationObject.relMoveDirection[1] );
    if (timeSinceAnimationStart > MOVE_DURATION) {
      this.removeAnimationFunction('move', MOVE_DURATION);
    }
  }

  verticalMoveSizeFunction( timeSinceAnimationStart ){
    const animationObject = this.animationFunctions['move'][0];
    const x = timeSinceAnimationStart/VERTICAL_MOVE_DURATION
    let percentComplete = x*x;
    if (animationObject.jump) {
      percentComplete = 4*x*(x-0.75);
    }
    const actualBaseLayer = this.layerAddend/10;
    const targetSizeFactor = Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, animationObject.targetAbsBaseLayer - actualBaseLayer);
    const changeFactor = Math.pow(MOVE_UP_SIZE_INCREASE_FACTOR, animationObject.changeInBaseLayer);
    const startSizeFactor = targetSizeFactor /changeFactor;
    const startWidth = this.basisWidth*startSizeFactor;
    const startHeight = this.basisHeight*startSizeFactor;
    const targetWidth = this.basisWidth*targetSizeFactor;
    const targetHeight = this.basisHeight*targetSizeFactor;
    const width = startWidth*(1-percentComplete)
    + targetWidth*(percentComplete);
    const height = startHeight*(1-percentComplete)
    + targetHeight*(percentComplete);
    return [ width, height, targetWidth, targetHeight ];
  }

  setVerticalMoveAnimationSize() {
    const animationObject = this.animationFunctions['move'][0];
    const timeSinceAnimationStart = performance.now() - animationObject.startTime;
    let [ width, height, targetWidth, targetHeight ] = this.verticalMoveSizeFunction( timeSinceAnimationStart );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
      [ width, height ] = [ targetWidth, targetHeight ];
    }
    this.setWidth( width, false );
    this.setHeight( height, false );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
      this.changeLayer( this.basisLayer + animationObject.changeInBaseLayer*10 );
      this.removeAnimationFunction('move', VERTICAL_MOVE_DURATION);
    }
  }

  renderStartHandler(){
    Object.values(this.animationFunctions).forEach(
      fncArr => fncArr[0].fnc()
    );
  }

  /**
   * checks if the requested move is valid. Should be overwritten by Child. Returns allowMove
   * @param {*} requestChain 
   * @param {*} direction 
   * @returns {boolean}
   */
  allowMove( requestChain ){
    return requestChain[ requestChain.length-1 ][0].layer%10 !== this.layer%10;
  }

  
  allowLeave( requestChain ){
    return true;
  }

  allowPlacing( entity ){
    return entity.layer%10 !== this.layer%10;
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

  animationChainEmptied( category ){
    //doSomething
  }

  //updateState(){ //doSomething }; //commented out to save on performance since the function only gets called if it exists
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
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ "./src/ghosty/popup.js");


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
    const lastShownVersion = this.app.localStorage.getLastShownVersion();
    if (this.app.version !== lastShownVersion) {
      this.app.localStorage.setLastShownVersion(this.app.version);
      console.log('new Version Popup!');
      this.popup = new _popup__WEBPACK_IMPORTED_MODULE_0__["Popup"](
        'wrapper',
        `Ghosty Version 1.0.1 released!`,
        [
          {id: 'popup-close', text: 'Play', click: () => this.app.handlePlayButtonClick()},
        ], [],
        'What\'s new:',
        '-DiamAND Gates-<br>-New Levels-<br>-Hold keys to move fast-<br>-Level index is shown-<br>-Animations wait for each other-'
      ) ;
    }
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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Introduction\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Space Invadors\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Boxes\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Fun\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Grid\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Goal\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]]]}},{\"name\":\"Two?!\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Rescue Me!\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Two Ghosties Practise\",\"difficulty\":\"intermediate\",\"creator\":\"Max\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[]],[[],[],[[\"Stone\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"position: relative;\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Stone\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Chaos\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole Again\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"M\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Ghosty\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Bridge\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{}]]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[]],[[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]]]}},{\"name\":\"Two Spirals\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}],[\"Goal\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"I'll let you take the win\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Small order\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}],[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Piggyback\",\"difficulty\":\"intermediate\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"2x Ghosty, 2x Box\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[[\"Ghosty\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[[\"Goal\",{}]],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Parking Left\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"DiamAND Gate\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Stone Bridge\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"I pack my backpack\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[],[],[[\"DiamondPressurePlate\",null]],[],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Parking Right\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"DiamondPressurePlate\",null]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Iland\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Iland Again\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Ghosty Elevator\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[[\"DiamondPressurePlate\",null]],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[[\"Goal\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Elevator\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[]],[[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[]],[[],[],[],[],[],[],[],[[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Hole\",{}]],[]],[[],[],[],[],[],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[]],[[],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[]],[[],[],[],[],[[\"DiamondPressurePlate\",null]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Hole\",{}]],[],[],[],[],[]],[[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[]],[[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[],[],[],[[\"Hole\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Vertical\",\"difficulty\":\"hard\",\"creator\":\"Trummi & Tom\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Ghosty Staircase\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]]]]}},{\"name\":\"Conquer\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Trio\",\"difficulty\":\"schwer\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[[\"Goal\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Labyrinth\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Ghosty\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"facing\":\"right\"}],[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}],[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"DiamAND Gate Bridges\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"WoodenBox\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Gate Grid\",\"difficulty\":\"unknown\",\"creator\":\"unknown\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[]]]}},{\"name\":\"Pushy Level 173\",\"difficulty\":\"schwer\",\"creator\":\"Lernwerkstatt 8\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[]],[[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"End Version 1.0.1\",\"difficulty\":\"impossible\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]]]]}}]");

/***/ }),

/***/ "./src/ghosty/level/presets.json":
/*!***************************************!*\
  !*** ./src/ghosty/level/presets.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Empty\",\"difficulty\":\"preset\",\"creator\":\"Ghosty\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Wall Around\",\"difficulty\":\"preset\",\"creator\":\"Ghosty\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Iland\",\"difficulty\":\"preset\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}}]");

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
    let classicHighestLevelName = this.app.localStorage.getHighestLevel('classic') || 'Introduction';
    if (classicHighestLevelName === 'End (new levels soon!)') {
      classicHighestLevelName = 'Parking Left';
      console.log('End Level Version 1.0.0 was replaced by level "Parking Left"');
    }
    const classicHighestLevel = this.levels['classic'].find( l => l.name === classicHighestLevelName );
    this.classicHighestLevelIndex = this.levels['classic'].indexOf( classicHighestLevel );
  }

  levelDone( levelIndex, category ){
    this.app.localStorage.saveLevelSolved( this.levels[category][levelIndex].name, category );
    if ( category === 'classic' && levelIndex === this.classicHighestLevelIndex ) {
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
    let levelBarText = `${i+1}: ${level.name}`;
    if (this.state === 'yourLevels') {
      levelBarText = level.name;
    }

    return `
    <div class="level-bar">
        <div class="level-name button">${levelBarText}</div>
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
    if (!localStorage.getItem(`ghosty-last-shown-version:`)) {
      localStorage.setItem(`ghosty-last-shown-version:`, '1.0.0');
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

  getLastShownVersion(){
    const lastShownVersion = localStorage.getItem('ghosty-last-shown-version');
    return lastShownVersion;
  }

  setLastShownVersion( version ){
    localStorage.setItem('ghosty-last-shown-version', version);
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
        let levelBarText = `${this.levelIndex+1}: ${this.level.name}`;
        if (this.category === 'yourLevels') {
            levelBarText = level.name;
        }
        this.play_level_name.innerHTML = levelBarText;
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
        this.app.levels.levelDone( this.levelIndex, this.category );
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
   * Poorly testet at the moment!!
   * @param {directionString|relativePosition|absolutePosition} position - position to convert
   * @param {string} borderMode - does nothing at the moment
   * @returns {relativePosition}
   */
  formatPositionAsRelativePosition( position, borderMode = 'ignore' ){
    let relPos = null;
    if (position.constructor === Array) { relPos = position }
    else if (typeof position === 'string') {
      if (['top','up','north'].includes( position.toLowerCase() )) {
        relPos = [0, -1];
      } else if (['right','east'].includes( position.toLowerCase() )) {
        relPos = [1, 0];
      } else if (['bottom','down','south'].includes( position.toLowerCase() )) {
        relPos = [0, 1];
      } else if (['left','west'].includes( position.toLowerCase() )) {
        relPos = [-1, 0];
      } else if (['here','stay'].includes( position.toLowerCase() )) {
        relPos = [0, 0];
      }
    } else if (typeof position === 'object') {
      relPos = [ position.c - this.c, position.r - this.r ];
    }
    return relPos;
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
      entityInstances = this.entityData[ selectorObject.type ] || [];
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

    /**
     * @description List of all Keys which are currently pressed on the keyboard
     * @public
     * @member {string[]}
     */
    this.keysPressed = [];

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
    this.keysPressed.splice( this.keysPressed.indexOf(e.key), 1 );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BoYXBpL2pvaS9kaXN0L2pvaS1icm93c2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2JhY2tncm91bmRfdGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9kaWFtb25kX3ByZXNzdXJlX3BsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2RpYW1vbmRfc3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ2F0ZV9zdG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9naG9zdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ29hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2hvbGVfYm9yZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3ByZXNzdXJlX3BsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3N0b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3dvb2Rlbl9ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvc2VsZWN0aW9uX2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9ob21lLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvbGV2ZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvbG9jYWxfc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlnYS9kaXNwbGF5LmpzIiwid2VicGFjazovLy8uL3NyYy9ncmlnYS9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2dyaWdhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FB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QUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNENBQUs7QUFDMUI7QUFDQSxPQUFPLHVFQUF1RTtBQUM5RSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pUQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RCxTQUFTO0FBQ2xF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QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYztBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FB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QUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9naG9zdHkvYXBwLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5qb2k9dCgpOmUuam9pPXQoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKHMpe2lmKHRbc10pcmV0dXJuIHRbc10uZXhwb3J0czt2YXIgbj10W3NdPXtpOnMsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtzXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyxyKSxuLmw9ITAsbi5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LHMpe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpzfSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHM9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIocyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBuIGluIGUpci5kKHMsbixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG4pKTtyZXR1cm4gc30sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTExKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTIpO2UuZXhwb3J0cz1mdW5jdGlvbihlLC4uLnQpe2lmKCFlKXtpZigxPT09dC5sZW5ndGgmJnRbMF1pbnN0YW5jZW9mIEVycm9yKXRocm93IHRbMF07dGhyb3cgbmV3IHModCl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTIpLG89cigyOSk7bGV0IGEsaTtjb25zdCBsPXtpc29EYXRlOi9eKD86Wy0rXVxcZHsyfSk/KD86XFxkezR9KD8hXFxkezJ9XFxiKSkoPzooLT8pKD86KD86MFsxLTldfDFbMC0yXSkoPzpcXDEoPzpbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKD86WzAtNF1cXGR8NVswLTJdKSg/Oi0/WzEtN10pP3woPzowMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoPzpbMC01XVxcZHw2WzEtNl0pKSkoPyFbVF0kfFtUXVtcXGRdK1okKSg/OltUXFxzXSg/Oig/Oig/OlswMV1cXGR8MlswLTNdKSg/Oig6PylbMC01XVxcZCk/fDI0XFw6PzAwKSg/OlsuLF1cXGQrKD8hOikpPykoPzpcXDJbMC01XVxcZCg/OlsuLF1cXGQrKT8pPyg/OltaXXwoPzpbKy1dKSg/OlswMV1cXGR8MlswLTNdKSg/Ojo/WzAtNV1cXGQpPyk/KT8pPyQvfTt0LnZlcnNpb249by52ZXJzaW9uLHQuZGVmYXVsdHM9e2Fib3J0RWFybHk6ITAsYWxsb3dVbmtub3duOiExLGNhY2hlOiEwLGNvbnRleHQ6bnVsbCxjb252ZXJ0OiEwLGRhdGVGb3JtYXQ6XCJpc29cIixlcnJvcnM6e2VzY2FwZUh0bWw6ITEsbGFiZWw6XCJwYXRoXCIsbGFuZ3VhZ2U6bnVsbCxyZW5kZXI6ITAsc3RhY2s6ITEsd3JhcDp7bGFiZWw6J1wiJyxhcnJheTpcIltdXCJ9fSxleHRlcm5hbHM6ITAsbWVzc2FnZXM6e30sbm9uRW51bWVyYWJsZXM6ITEsbm9EZWZhdWx0czohMSxwcmVzZW5jZTpcIm9wdGlvbmFsXCIsc2tpcEZ1bmN0aW9uczohMSxzdHJpcFVua25vd246ITEsd2FybmluZ3M6ITF9LHQuc3ltYm9scz17YW55OlN5bWJvbC5mb3IoXCJAaGFwaS9qb2kvc2NoZW1hXCIpLGFycmF5U2luZ2xlOlN5bWJvbChcImFycmF5U2luZ2xlXCIpLGRlZXBEZWZhdWx0OlN5bWJvbChcImRlZXBEZWZhdWx0XCIpLGxpdGVyYWw6U3ltYm9sKFwibGl0ZXJhbFwiKSxvdmVycmlkZTpTeW1ib2woXCJvdmVycmlkZVwiKSxwcmVmczpTeW1ib2woXCJwcmVmc1wiKSxyZWY6U3ltYm9sKFwicmVmXCIpLHZhbHVlczpTeW1ib2woXCJ2YWx1ZXNcIiksdGVtcGxhdGU6U3ltYm9sKFwidGVtcGxhdGVcIil9LHQuYXNzZXJ0T3B0aW9ucz1mdW5jdGlvbihlLHQscj1cIk9wdGlvbnNcIil7cyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJPcHRpb25zIG11c3QgYmUgb2YgdHlwZSBvYmplY3RcIik7Y29uc3Qgbj1PYmplY3Qua2V5cyhlKS5maWx0ZXIoZT0+IXQuaW5jbHVkZXMoZSkpO3MoMD09PW4ubGVuZ3RoLFwiXCIuY29uY2F0KHIsXCIgY29udGFpbiB1bmtub3duIGtleXM6IFwiKS5jb25jYXQobikpfSx0LmNoZWNrUHJlZmVyZW5jZXM9ZnVuY3Rpb24oZSl7aT1pfHxyKDE2KTtjb25zdCB0PWkucHJlZmVyZW5jZXMudmFsaWRhdGUoZSk7aWYodC5lcnJvcil0aHJvdyBuZXcgbihbdC5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2VdKX0sdC5jb21wYXJlPWZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2gocil7Y2FzZVwiPVwiOnJldHVybiBlPT09dDtjYXNlXCI+XCI6cmV0dXJuIGU+dDtjYXNlXCI8XCI6cmV0dXJuIGU8dDtjYXNlXCI+PVwiOnJldHVybiBlPj10O2Nhc2VcIjw9XCI6cmV0dXJuIGU8PXR9fSx0LmRlZmF1bHQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZT90OmV9LHQuaXNJc29EYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBsLmlzb0RhdGUudGVzdChlKX0sdC5pc051bWJlcj1mdW5jdGlvbihlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmIWlzTmFOKGUpfSx0LmlzUmVzb2x2YWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIWUmJihlW3Quc3ltYm9scy5yZWZdfHxlW3Quc3ltYm9scy50ZW1wbGF0ZV0pfSx0LmlzU2NoZW1hPWZ1bmN0aW9uKGUscj17fSl7Y29uc3Qgbj1lJiZlW3Quc3ltYm9scy5hbnldO3JldHVybiEhbiYmKHMoci5sZWdhY3l8fG4udmVyc2lvbj09PXQudmVyc2lvbixcIkNhbm5vdCBtaXggZGlmZmVyZW50IHZlcnNpb25zIG9mIGpvaSBzY2hlbWFzXCIpLCEwKX0sdC5pc1ZhbHVlcz1mdW5jdGlvbihlKXtyZXR1cm4gZVt0LnN5bWJvbHMudmFsdWVzXX0sdC5saW1pdD1mdW5jdGlvbihlKXtyZXR1cm4gTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTB9LHQucHJlZmVyZW5jZXM9ZnVuY3Rpb24oZSxzKXthPWF8fHIoOSksZT1lfHx7fSxzPXN8fHt9O2NvbnN0IG49T2JqZWN0LmFzc2lnbih7fSxlLHMpO3JldHVybiBzLmVycm9ycyYmZS5lcnJvcnMmJihuLmVycm9ycz1PYmplY3QuYXNzaWduKHt9LGUuZXJyb3JzLHMuZXJyb3JzKSxuLmVycm9ycy53cmFwPU9iamVjdC5hc3NpZ24oe30sZS5lcnJvcnMud3JhcCxzLmVycm9ycy53cmFwKSkscy5tZXNzYWdlcyYmKG4ubWVzc2FnZXM9YS5jb21waWxlKHMubWVzc2FnZXMsZS5tZXNzYWdlcykpLGRlbGV0ZSBuW3Quc3ltYm9scy5wcmVmc10sbn0sdC50cnlXaXRoUGF0aD1mdW5jdGlvbihlLHQscj17fSl7dHJ5e3JldHVybiBlKCl9Y2F0Y2goZSl7dGhyb3cgdm9pZCAwIT09ZS5wYXRoP2UucGF0aD10K1wiLlwiK2UucGF0aDplLnBhdGg9dCxyLmFwcGVuZCYmKGUubWVzc2FnZT1cIlwiLmNvbmNhdChlLm1lc3NhZ2UsXCIgKFwiKS5jb25jYXQoZS5wYXRoLFwiKVwiKSksZX19LHQudmFsaWRhdGVBcmc9ZnVuY3Rpb24oZSxyLHthc3NlcnQ6cyxtZXNzYWdlOm59KXtpZih0LmlzU2NoZW1hKHMpKXtjb25zdCB0PXMudmFsaWRhdGUoZSk7aWYoIXQuZXJyb3IpcmV0dXJuO3JldHVybiB0LmVycm9yLm1lc3NhZ2V9aWYoIXMoZSkpcmV0dXJuIHI/XCJcIi5jb25jYXQocixcIiBcIikuY29uY2F0KG4pOm59LHQudmVyaWZ5RmxhdD1mdW5jdGlvbihlLHQpe2Zvcihjb25zdCByIG9mIGUpcyghQXJyYXkuaXNBcnJheShyKSxcIk1ldGhvZCBubyBsb25nZXIgYWNjZXB0cyBhcnJheSBhcmd1bWVudHM6XCIsdCl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDYpLG49cigxMyksbz1yKDE0KSxhPXtuZWVkc1Byb3RvSGFjazpuZXcgU2V0KFtuLnNldCxuLm1hcCxuLndlYWtTZXQsbi53ZWFrTWFwXSl9O2UuZXhwb3J0cz1hLmNsb25lPWZ1bmN0aW9uKGUsdD17fSxyPW51bGwpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTtsZXQgcz1hLmNsb25lLGk9cjtpZih0LnNoYWxsb3cpe2lmKCEwIT09dC5zaGFsbG93KXJldHVybiBhLmNsb25lV2l0aFNoYWxsb3coZSx0KTtzPWU9PmV9ZWxzZSBpZihpKXtjb25zdCB0PWkuZ2V0KGUpO2lmKHQpcmV0dXJuIHR9ZWxzZSBpPW5ldyBNYXA7Y29uc3QgbD1uLmdldEludGVybmFsUHJvdG8oZSk7aWYobD09PW4uYnVmZmVyKXJldHVybiExO2lmKGw9PT1uLmRhdGUpcmV0dXJuIG5ldyBEYXRlKGUuZ2V0VGltZSgpKTtpZihsPT09bi5yZWdleClyZXR1cm4gbmV3IFJlZ0V4cChlKTtjb25zdCBjPWEuYmFzZShlLGwsdCk7aWYoYz09PWUpcmV0dXJuIGU7aWYoaSYmaS5zZXQoZSxjKSxsPT09bi5zZXQpZm9yKGNvbnN0IHIgb2YgZSljLmFkZChzKHIsdCxpKSk7ZWxzZSBpZihsPT09bi5tYXApZm9yKGNvbnN0W3Isbl1vZiBlKWMuc2V0KHIscyhuLHQsaSkpO2NvbnN0IHU9by5rZXlzKGUsdCk7Zm9yKGNvbnN0IHIgb2YgdSl7aWYoXCJfX3Byb3RvX19cIj09PXIpY29udGludWU7aWYobD09PW4uYXJyYXkmJlwibGVuZ3RoXCI9PT1yKXtjLmxlbmd0aD1lLmxlbmd0aDtjb250aW51ZX1jb25zdCBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxyKTtvP28uZ2V0fHxvLnNldD9PYmplY3QuZGVmaW5lUHJvcGVydHkoYyxyLG8pOm8uZW51bWVyYWJsZT9jW3JdPXMoZVtyXSx0LGkpOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShjLHIse2VudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOnMoZVtyXSx0LGkpfSk6T2JqZWN0LmRlZmluZVByb3BlcnR5KGMscix7ZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITAsdmFsdWU6cyhlW3JdLHQsaSl9KX1yZXR1cm4gY30sYS5jbG9uZVdpdGhTaGFsbG93PWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj10LnNoYWxsb3c7KHQ9T2JqZWN0LmFzc2lnbih7fSx0KSkuc2hhbGxvdz0hMTtjb25zdCBuPW5ldyBNYXA7Zm9yKGNvbnN0IHQgb2Ygcil7Y29uc3Qgcj1zKGUsdCk7XCJvYmplY3RcIiE9dHlwZW9mIHImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJ8fG4uc2V0KHIscil9cmV0dXJuIGEuY2xvbmUoZSx0LG4pfSxhLmJhc2U9ZnVuY3Rpb24oZSx0LHIpe2lmKCExPT09ci5wcm90b3R5cGUpcmV0dXJuIGEubmVlZHNQcm90b0hhY2suaGFzKHQpP25ldyB0LmNvbnN0cnVjdG9yOnQ9PT1uLmFycmF5P1tdOnt9O2NvbnN0IHM9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO2lmKHMmJnMuaXNJbW11dGFibGUpcmV0dXJuIGU7aWYodD09PW4uYXJyYXkpe2NvbnN0IGU9W107cmV0dXJuIHMhPT10JiZPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxzKSxlfWlmKGEubmVlZHNQcm90b0hhY2suaGFzKHQpKXtjb25zdCBlPW5ldyBzLmNvbnN0cnVjdG9yO3JldHVybiBzIT09dCYmT2JqZWN0LnNldFByb3RvdHlwZU9mKGUscyksZX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShzKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDM0KSxvPXIoMSksYT1yKDkpO2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImFueVwiLGZsYWdzOntvbmx5OntkZWZhdWx0OiExfX0sdGVybXM6e2FsdGVyYXRpb25zOntpbml0Om51bGx9LGV4YW1wbGVzOntpbml0Om51bGx9LGV4dGVybmFsczp7aW5pdDpudWxsfSxtZXRhczp7aW5pdDpbXX0sbm90ZXM6e2luaXQ6W119LHNoYXJlZDp7aW5pdDpudWxsfSx0YWdzOntpbml0OltdfSx3aGVuczp7aW5pdDpudWxsfX0scnVsZXM6e2N1c3RvbTp7bWV0aG9kKGUsdCl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgZSxcIk1ldGhvZCBtdXN0IGJlIGEgZnVuY3Rpb25cIikscyh2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCxcIkRlc2NyaXB0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiY3VzdG9tXCIsYXJnczp7bWV0aG9kOmUsZGVzY3JpcHRpb246dH19KX0sdmFsaWRhdGUoZSx0LHttZXRob2Q6cn0pe3RyeXtyZXR1cm4gcihlLHQpfWNhdGNoKGUpe3JldHVybiB0LmVycm9yKFwiYW55LmN1c3RvbVwiLHtlcnJvcjplfSl9fSxhcmdzOltcIm1ldGhvZFwiLFwiZGVzY3JpcHRpb25cIl0sbXVsdGk6ITB9LG1lc3NhZ2VzOnttZXRob2QoZSl7cmV0dXJuIHRoaXMucHJlZnMoe21lc3NhZ2VzOmV9KX19LHNoYXJlZDp7bWV0aG9kKGUpe3Moby5pc1NjaGVtYShlKSYmZS5fZmxhZ3MuaWQsXCJTY2hlbWEgbXVzdCBiZSBhIHNjaGVtYSB3aXRoIGFuIGlkXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0LiRfdGVybXMuc2hhcmVkPXQuJF90ZXJtcy5zaGFyZWR8fFtdLHQuJF90ZXJtcy5zaGFyZWQucHVzaChlKSx0LiRfbXV0YXRlUmVnaXN0ZXIoZSksdH19LHdhcm5pbmc6e21ldGhvZChlLHQpe3JldHVybiBzKGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCB3YXJuaW5nIGNvZGVcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ3YXJuaW5nXCIsYXJnczp7Y29kZTplLGxvY2FsOnR9LHdhcm46ITB9KX0sdmFsaWRhdGU6KGUsdCx7Y29kZTpyLGxvY2FsOnN9KT0+dC5lcnJvcihyLHMpLGFyZ3M6W1wiY29kZVwiLFwibG9jYWxcIl0sbXVsdGk6ITB9fSxtb2RpZmllcnM6e2tlZXAoZSx0PSEwKXtlLmtlZXA9dH0sbWVzc2FnZShlLHQpe2UubWVzc2FnZT1hLmNvbXBpbGUodCl9LHdhcm4oZSx0PSEwKXtlLndhcm49dH19LG1hbmlmZXN0OntidWlsZChlLHQpe2Zvcihjb25zdCByIGluIHQpe2NvbnN0IHM9dFtyXTtpZihbXCJleGFtcGxlc1wiLFwiZXh0ZXJuYWxzXCIsXCJtZXRhc1wiLFwibm90ZXNcIixcInRhZ3NcIl0uaW5jbHVkZXMocikpZm9yKGNvbnN0IHQgb2YgcyllPWVbci5zbGljZSgwLC0xKV0odCk7ZWxzZSBpZihcImFsdGVyYXRpb25zXCIhPT1yKWlmKFwid2hlbnNcIiE9PXIpe2lmKFwic2hhcmVkXCI9PT1yKWZvcihjb25zdCB0IG9mIHMpZT1lLnNoYXJlZCh0KX1lbHNlIGZvcihjb25zdCB0IG9mIHMpe2NvbnN0e3JlZjpyLGlzOnMsbm90Om4sdGhlbjpvLG90aGVyd2lzZTphLGNvbmNhdDppfT10O2U9aT9lLmNvbmNhdChpKTpyP2Uud2hlbihyLHtpczpzLG5vdDpuLHRoZW46byxvdGhlcndpc2U6YSxzd2l0Y2g6dC5zd2l0Y2gsYnJlYWs6dC5icmVha30pOmUud2hlbihzLHt0aGVuOm8sb3RoZXJ3aXNlOmEsYnJlYWs6dC5icmVha30pfWVsc2V7Y29uc3QgdD17fTtmb3IoY29uc3R7dGFyZ2V0OmUsYWRqdXN0ZXI6cn1vZiBzKXRbZV09cjtlPWUuYWx0ZXIodCl9fXJldHVybiBlfX0sbWVzc2FnZXM6e1wiYW55LmN1c3RvbVwiOlwie3sjbGFiZWx9fSBmYWlsZWQgY3VzdG9tIHZhbGlkYXRpb24gYmVjYXVzZSB7eyNlcnJvci5tZXNzYWdlfX1cIixcImFueS5kZWZhdWx0XCI6XCJ7eyNsYWJlbH19IHRocmV3IGFuIGVycm9yIHdoZW4gcnVubmluZyBkZWZhdWx0IG1ldGhvZFwiLFwiYW55LmZhaWxvdmVyXCI6XCJ7eyNsYWJlbH19IHRocmV3IGFuIGVycm9yIHdoZW4gcnVubmluZyBmYWlsb3ZlciBtZXRob2RcIixcImFueS5pbnZhbGlkXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGFuIGludmFsaWQgdmFsdWVcIixcImFueS5vbmx5XCI6J3t7I2xhYmVsfX0gbXVzdCBiZSB7aWYoI3ZhbGlkcy5sZW5ndGggPT0gMSwgXCJcIiwgXCJvbmUgb2YgXCIpfXt7I3ZhbGlkc319JyxcImFueS5yZWZcIjone3sjbGFiZWx9fSB7eyNhcmd9fSByZWZlcmVuY2VzIFwie3sjcmVmfX1cIiB3aGljaCB7eyNyZWFzb259fScsXCJhbnkucmVxdWlyZWRcIjpcInt7I2xhYmVsfX0gaXMgcmVxdWlyZWRcIixcImFueS51bmtub3duXCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkXCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMzIpLG49cigxKSxvPXIoNyk7dC5SZXBvcnQ9Y2xhc3N7Y29uc3RydWN0b3IoZSxyLHMsbixvLGEsaSl7aWYodGhpcy5jb2RlPWUsdGhpcy5mbGFncz1uLHRoaXMubWVzc2FnZXM9byx0aGlzLnBhdGg9YS5wYXRoLHRoaXMucHJlZnM9aSx0aGlzLnN0YXRlPWEsdGhpcy52YWx1ZT1yLHRoaXMubWVzc2FnZT1udWxsLHRoaXMudGVtcGxhdGU9bnVsbCx0aGlzLmxvY2FsPXN8fHt9LHRoaXMubG9jYWwubGFiZWw9dC5sYWJlbCh0aGlzLmZsYWdzLHRoaXMuc3RhdGUsdGhpcy5wcmVmcyx0aGlzLm1lc3NhZ2VzKSx2b2lkIDA9PT10aGlzLnZhbHVlfHx0aGlzLmxvY2FsLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fCh0aGlzLmxvY2FsLnZhbHVlPXRoaXMudmFsdWUpLHRoaXMucGF0aC5sZW5ndGgpe2NvbnN0IGU9dGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGgtMV07XCJvYmplY3RcIiE9dHlwZW9mIGUmJih0aGlzLmxvY2FsLmtleT1lKX19X3NldFRlbXBsYXRlKGUpe2lmKHRoaXMudGVtcGxhdGU9ZSwhdGhpcy5mbGFncy5sYWJlbCYmMD09PXRoaXMucGF0aC5sZW5ndGgpe2NvbnN0IGU9dGhpcy5fdGVtcGxhdGUodGhpcy50ZW1wbGF0ZSxcInJvb3RcIik7ZSYmKHRoaXMubG9jYWwubGFiZWw9ZSl9fXRvU3RyaW5nKCl7aWYodGhpcy5tZXNzYWdlKXJldHVybiB0aGlzLm1lc3NhZ2U7Y29uc3QgZT10aGlzLmNvZGU7aWYoIXRoaXMucHJlZnMuZXJyb3JzLnJlbmRlcilyZXR1cm4gdGhpcy5jb2RlO2NvbnN0IHQ9dGhpcy5fdGVtcGxhdGUodGhpcy50ZW1wbGF0ZSl8fHRoaXMuX3RlbXBsYXRlKHRoaXMucHJlZnMubWVzc2FnZXMpfHx0aGlzLl90ZW1wbGF0ZSh0aGlzLm1lc3NhZ2VzKTtyZXR1cm4gdm9pZCAwPT09dD8nRXJyb3IgY29kZSBcIicuY29uY2F0KGUsJ1wiIGlzIG5vdCBkZWZpbmVkLCB5b3VyIGN1c3RvbSB0eXBlIGlzIG1pc3NpbmcgdGhlIGNvcnJlY3QgbWVzc2FnZXMgZGVmaW5pdGlvbicpOih0aGlzLm1lc3NhZ2U9dC5yZW5kZXIodGhpcy52YWx1ZSx0aGlzLnN0YXRlLHRoaXMucHJlZnMsdGhpcy5sb2NhbCx7ZXJyb3JzOnRoaXMucHJlZnMuZXJyb3JzLG1lc3NhZ2VzOlt0aGlzLnByZWZzLm1lc3NhZ2VzLHRoaXMubWVzc2FnZXNdfSksdGhpcy5wcmVmcy5lcnJvcnMubGFiZWx8fCh0aGlzLm1lc3NhZ2U9dGhpcy5tZXNzYWdlLnJlcGxhY2UoL15cIlwiIC8sXCJcIikudHJpbSgpKSx0aGlzLm1lc3NhZ2UpfV90ZW1wbGF0ZShlLHIpe3JldHVybiB0LnRlbXBsYXRlKHRoaXMudmFsdWUsZSxyfHx0aGlzLmNvZGUsdGhpcy5zdGF0ZSx0aGlzLnByZWZzKX19LHQucGF0aD1mdW5jdGlvbihlKXtsZXQgdD1cIlwiO2Zvcihjb25zdCByIG9mIGUpXCJvYmplY3RcIiE9dHlwZW9mIHImJihcInN0cmluZ1wiPT10eXBlb2Ygcj8odCYmKHQrPVwiLlwiKSx0Kz1yKTp0Kz1cIltcIi5jb25jYXQocixcIl1cIikpO3JldHVybiB0fSx0LnRlbXBsYXRlPWZ1bmN0aW9uKGUsdCxyLHMsYSl7aWYoIXQpcmV0dXJuO2lmKG8uaXNUZW1wbGF0ZSh0KSlyZXR1cm5cInJvb3RcIiE9PXI/dDpudWxsO2xldCBpPWEuZXJyb3JzLmxhbmd1YWdlO3JldHVybiBuLmlzUmVzb2x2YWJsZShpKSYmKGk9aS5yZXNvbHZlKGUscyxhKSksaSYmdFtpXSYmdm9pZCAwIT09dFtpXVtyXT90W2ldW3JdOnRbcl19LHQubGFiZWw9ZnVuY3Rpb24oZSxyLHMsbil7aWYoZS5sYWJlbClyZXR1cm4gZS5sYWJlbDtpZighcy5lcnJvcnMubGFiZWwpcmV0dXJuXCJcIjtsZXQgbz1yLnBhdGg7XCJrZXlcIj09PXMuZXJyb3JzLmxhYmVsJiZyLnBhdGgubGVuZ3RoPjEmJihvPXIucGF0aC5zbGljZSgtMSkpO2NvbnN0IGE9dC5wYXRoKG8pO3JldHVybiBhfHwodC50ZW1wbGF0ZShudWxsLHMubWVzc2FnZXMsXCJyb290XCIscixzKXx8biYmdC50ZW1wbGF0ZShudWxsLG4sXCJyb290XCIscixzKXx8XCJ2YWx1ZVwiKX0sdC5wcm9jZXNzPWZ1bmN0aW9uKGUscixzKXtpZighZSlyZXR1cm4gbnVsbDtjb25zdHtvdmVycmlkZTpuLG1lc3NhZ2U6byxkZXRhaWxzOmF9PXQuZGV0YWlscyhlKTtpZihuKXJldHVybiBuO2lmKHMuZXJyb3JzLnN0YWNrKXJldHVybiBuZXcgdC5WYWxpZGF0aW9uRXJyb3IobyxhLHIpO2NvbnN0IGk9RXJyb3Iuc3RhY2tUcmFjZUxpbWl0O0Vycm9yLnN0YWNrVHJhY2VMaW1pdD0wO2NvbnN0IGw9bmV3IHQuVmFsaWRhdGlvbkVycm9yKG8sYSxyKTtyZXR1cm4gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0PWksbH0sdC5kZXRhaWxzPWZ1bmN0aW9uKGUsdD17fSl7bGV0IHI9W107Y29uc3Qgcz1bXTtmb3IoY29uc3QgbiBvZiBlKXtpZihuIGluc3RhbmNlb2YgRXJyb3Ipe2lmKCExIT09dC5vdmVycmlkZSlyZXR1cm57b3ZlcnJpZGU6bn07Y29uc3QgZT1uLnRvU3RyaW5nKCk7ci5wdXNoKGUpLHMucHVzaCh7bWVzc2FnZTplLHR5cGU6XCJvdmVycmlkZVwiLGNvbnRleHQ6e2Vycm9yOm59fSk7Y29udGludWV9Y29uc3QgZT1uLnRvU3RyaW5nKCk7ci5wdXNoKGUpLHMucHVzaCh7bWVzc2FnZTplLHBhdGg6bi5wYXRoLmZpbHRlcihlPT5cIm9iamVjdFwiIT10eXBlb2YgZSksdHlwZTpuLmNvZGUsY29udGV4dDpuLmxvY2FsfSl9cmV0dXJuIHIubGVuZ3RoPjEmJihyPVsuLi5uZXcgU2V0KHIpXSkse21lc3NhZ2U6ci5qb2luKFwiLiBcIiksZGV0YWlsczpzfX0sdC5WYWxpZGF0aW9uRXJyb3I9Y2xhc3MgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlLHQscil7c3VwZXIoZSksdGhpcy5fb3JpZ2luYWw9cix0aGlzLmRldGFpbHM9dH1zdGF0aWMgaXNFcnJvcihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIHQuVmFsaWRhdGlvbkVycm9yfX0sdC5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmlzSm9pPSEwLHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5uYW1lPVwiVmFsaWRhdGlvbkVycm9yXCIsdC5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmFubm90YXRlPXMuZXJyb3J9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cig2KSxhPXIoMSk7bGV0IGk7Y29uc3QgbD17c3ltYm9sOlN5bWJvbChcInJlZlwiKSxkZWZhdWx0czp7YWRqdXN0Om51bGwsaW46ITEsaXRlcmFibGVzOm51bGwsbWFwOm51bGwsc2VwYXJhdG9yOlwiLlwiLHR5cGU6XCJ2YWx1ZVwifX07dC5jcmVhdGU9ZnVuY3Rpb24oZSx0PXt9KXtzKFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCByZWZlcmVuY2Uga2V5OlwiLGUpLGEuYXNzZXJ0T3B0aW9ucyh0LFtcImFkanVzdFwiLFwiYW5jZXN0b3JcIixcImluXCIsXCJpdGVyYWJsZXNcIixcIm1hcFwiLFwicHJlZml4XCIsXCJzZXBhcmF0b3JcIl0pLHMoIXQucHJlZml4fHxcIm9iamVjdFwiPT10eXBlb2YgdC5wcmVmaXgsXCJvcHRpb25zLnByZWZpeCBtdXN0IGJlIG9mIHR5cGUgb2JqZWN0XCIpO2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxsLmRlZmF1bHRzLHQpO2RlbGV0ZSByLnByZWZpeDtjb25zdCBuPXIuc2VwYXJhdG9yLG89bC5jb250ZXh0KGUsbix0LnByZWZpeCk7aWYoci50eXBlPW8udHlwZSxlPW8ua2V5LFwidmFsdWVcIj09PXIudHlwZSlpZihvLnJvb3QmJihzKCFufHxlWzBdIT09bixcIkNhbm5vdCBzcGVjaWZ5IHJlbGF0aXZlIHBhdGggd2l0aCByb290IHByZWZpeFwiKSxyLmFuY2VzdG9yPVwicm9vdFwiLGV8fChlPW51bGwpKSxuJiZuPT09ZSllPW51bGwsci5hbmNlc3Rvcj0wO2Vsc2UgaWYodm9pZCAwIT09ci5hbmNlc3RvcilzKCFufHwhZXx8ZVswXSE9PW4sXCJDYW5ub3QgY29tYmluZSBwcmVmaXggd2l0aCBhbmNlc3RvciBvcHRpb25cIik7ZWxzZXtjb25zdFt0LHNdPWwuYW5jZXN0b3IoZSxuKTtzJiZcIlwiPT09KGU9ZS5zbGljZShzKSkmJihlPW51bGwpLHIuYW5jZXN0b3I9dH1yZXR1cm4gci5wYXRoPW4/bnVsbD09PWU/W106ZS5zcGxpdChuKTpbZV0sbmV3IGwuUmVmKHIpfSx0LmluPWZ1bmN0aW9uKGUscj17fSl7cmV0dXJuIHQuY3JlYXRlKGUsT2JqZWN0LmFzc2lnbih7fSxyLHtpbjohMH0pKX0sdC5pc1JlZj1mdW5jdGlvbihlKXtyZXR1cm4hIWUmJiEhZVthLnN5bWJvbHMucmVmXX0sbC5SZWY9Y2xhc3N7Y29uc3RydWN0b3IoZSl7cyhcIm9iamVjdFwiPT10eXBlb2YgZSxcIkludmFsaWQgcmVmZXJlbmNlIGNvbnN0cnVjdGlvblwiKSxhLmFzc2VydE9wdGlvbnMoZSxbXCJhZGp1c3RcIixcImFuY2VzdG9yXCIsXCJpblwiLFwiaXRlcmFibGVzXCIsXCJtYXBcIixcInBhdGhcIixcInNlcGFyYXRvclwiLFwidHlwZVwiLFwiZGVwdGhcIixcImtleVwiLFwicm9vdFwiLFwiZGlzcGxheVwiXSkscyhbITEsdm9pZCAwXS5pbmNsdWRlcyhlLnNlcGFyYXRvcil8fFwic3RyaW5nXCI9PXR5cGVvZiBlLnNlcGFyYXRvciYmMT09PWUuc2VwYXJhdG9yLmxlbmd0aCxcIkludmFsaWQgc2VwYXJhdG9yXCIpLHMoIWUuYWRqdXN0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmFkanVzdCxcIm9wdGlvbnMuYWRqdXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKSxzKCFlLm1hcHx8QXJyYXkuaXNBcnJheShlLm1hcCksXCJvcHRpb25zLm1hcCBtdXN0IGJlIGFuIGFycmF5XCIpLHMoIWUubWFwfHwhZS5hZGp1c3QsXCJDYW5ub3Qgc2V0IGJvdGggbWFwIGFuZCBhZGp1c3Qgb3B0aW9uc1wiKSxPYmplY3QuYXNzaWduKHRoaXMsbC5kZWZhdWx0cyxlKSxzKFwidmFsdWVcIj09PXRoaXMudHlwZXx8dm9pZCAwPT09dGhpcy5hbmNlc3RvcixcIk5vbi12YWx1ZSByZWZlcmVuY2VzIGNhbm5vdCByZWZlcmVuY2UgYW5jZXN0b3JzXCIpLEFycmF5LmlzQXJyYXkodGhpcy5tYXApJiYodGhpcy5tYXA9bmV3IE1hcCh0aGlzLm1hcCkpLHRoaXMuZGVwdGg9dGhpcy5wYXRoLmxlbmd0aCx0aGlzLmtleT10aGlzLnBhdGgubGVuZ3RoP3RoaXMucGF0aC5qb2luKHRoaXMuc2VwYXJhdG9yKTpudWxsLHRoaXMucm9vdD10aGlzLnBhdGhbMF0sdGhpcy51cGRhdGVEaXNwbGF5KCl9cmVzb2x2ZShlLHQscixuLG89e30pe3JldHVybiBzKCF0aGlzLmlufHxvLmluLFwiSW52YWxpZCBpbigpIHJlZmVyZW5jZSB1c2FnZVwiKSxcImdsb2JhbFwiPT09dGhpcy50eXBlP3RoaXMuX3Jlc29sdmUoci5jb250ZXh0LHQsbyk6XCJsb2NhbFwiPT09dGhpcy50eXBlP3RoaXMuX3Jlc29sdmUobix0LG8pOnRoaXMuYW5jZXN0b3I/XCJyb290XCI9PT10aGlzLmFuY2VzdG9yP3RoaXMuX3Jlc29sdmUodC5hbmNlc3RvcnNbdC5hbmNlc3RvcnMubGVuZ3RoLTFdLHQsbyk6KHModGhpcy5hbmNlc3Rvcjw9dC5hbmNlc3RvcnMubGVuZ3RoLFwiSW52YWxpZCByZWZlcmVuY2UgZXhjZWVkcyB0aGUgc2NoZW1hIHJvb3Q6XCIsdGhpcy5kaXNwbGF5KSx0aGlzLl9yZXNvbHZlKHQuYW5jZXN0b3JzW3RoaXMuYW5jZXN0b3ItMV0sdCxvKSk6dGhpcy5fcmVzb2x2ZShlLHQsbyl9X3Jlc29sdmUoZSx0LHIpe2xldCBzO2lmKFwidmFsdWVcIj09PXRoaXMudHlwZSYmdC5tYWluc3RheS5zaGFkb3cmJiExIT09ci5zaGFkb3cmJihzPXQubWFpbnN0YXkuc2hhZG93LmdldCh0aGlzLmFic29sdXRlKHQpKSksdm9pZCAwPT09cyYmKHM9byhlLHRoaXMucGF0aCx7aXRlcmFibGVzOnRoaXMuaXRlcmFibGVzLGZ1bmN0aW9uczohMH0pKSx0aGlzLmFkanVzdCYmKHM9dGhpcy5hZGp1c3QocykpLHRoaXMubWFwKXtjb25zdCBlPXRoaXMubWFwLmdldChzKTt2b2lkIDAhPT1lJiYocz1lKX1yZXR1cm4gdC5tYWluc3RheSYmdC5tYWluc3RheS50cmFjZXIucmVzb2x2ZSh0LHRoaXMscyksc310b1N0cmluZygpe3JldHVybiB0aGlzLmRpc3BsYXl9YWJzb2x1dGUoZSl7cmV0dXJuWy4uLmUucGF0aC5zbGljZSgwLC10aGlzLmFuY2VzdG9yKSwuLi50aGlzLnBhdGhdfWNsb25lKCl7cmV0dXJuIG5ldyBsLlJlZih0aGlzKX1kZXNjcmliZSgpe2NvbnN0IGU9e3BhdGg6dGhpcy5wYXRofTtcInZhbHVlXCIhPT10aGlzLnR5cGUmJihlLnR5cGU9dGhpcy50eXBlKSxcIi5cIiE9PXRoaXMuc2VwYXJhdG9yJiYoZS5zZXBhcmF0b3I9dGhpcy5zZXBhcmF0b3IpLFwidmFsdWVcIj09PXRoaXMudHlwZSYmMSE9PXRoaXMuYW5jZXN0b3ImJihlLmFuY2VzdG9yPXRoaXMuYW5jZXN0b3IpLHRoaXMubWFwJiYoZS5tYXA9Wy4uLnRoaXMubWFwXSk7Zm9yKGNvbnN0IHQgb2ZbXCJhZGp1c3RcIixcIml0ZXJhYmxlc1wiXSludWxsIT09dGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuITEhPT10aGlzLmluJiYoZS5pbj0hMCkse3JlZjplfX11cGRhdGVEaXNwbGF5KCl7Y29uc3QgZT1udWxsIT09dGhpcy5rZXk/dGhpcy5rZXk6XCJcIjtpZihcInZhbHVlXCIhPT10aGlzLnR5cGUpcmV0dXJuIHZvaWQodGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdCh0aGlzLnR5cGUsXCI6XCIpLmNvbmNhdChlKSk7aWYoIXRoaXMuc2VwYXJhdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQoZSkpO2lmKCF0aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodGhpcy5zZXBhcmF0b3IpLmNvbmNhdChlKSk7aWYoXCJyb290XCI9PT10aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpyb290OlwiLmNvbmNhdChlKSk7aWYoMT09PXRoaXMuYW5jZXN0b3IpcmV0dXJuIHZvaWQodGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdChlfHxcIi4uXCIpKTtjb25zdCB0PW5ldyBBcnJheSh0aGlzLmFuY2VzdG9yKzEpLmZpbGwodGhpcy5zZXBhcmF0b3IpLmpvaW4oXCJcIik7dGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdCh0KS5jb25jYXQoZXx8XCJcIil9fSxsLlJlZi5wcm90b3R5cGVbYS5zeW1ib2xzLnJlZl09ITAsdC5idWlsZD1mdW5jdGlvbihlKXtyZXR1cm5cInZhbHVlXCI9PT0oZT1PYmplY3QuYXNzaWduKHt9LGwuZGVmYXVsdHMsZSkpLnR5cGUmJnZvaWQgMD09PWUuYW5jZXN0b3ImJihlLmFuY2VzdG9yPTEpLG5ldyBsLlJlZihlKX0sbC5jb250ZXh0PWZ1bmN0aW9uKGUsdCxyPXt9KXtpZihlPWUudHJpbSgpLHIpe2NvbnN0IHM9dm9pZCAwPT09ci5nbG9iYWw/XCIkXCI6ci5nbG9iYWw7aWYocyE9PXQmJmUuc3RhcnRzV2l0aChzKSlyZXR1cm57a2V5OmUuc2xpY2Uocy5sZW5ndGgpLHR5cGU6XCJnbG9iYWxcIn07Y29uc3Qgbj12b2lkIDA9PT1yLmxvY2FsP1wiI1wiOnIubG9jYWw7aWYobiE9PXQmJmUuc3RhcnRzV2l0aChuKSlyZXR1cm57a2V5OmUuc2xpY2Uobi5sZW5ndGgpLHR5cGU6XCJsb2NhbFwifTtjb25zdCBvPXZvaWQgMD09PXIucm9vdD9cIi9cIjpyLnJvb3Q7aWYobyE9PXQmJmUuc3RhcnRzV2l0aChvKSlyZXR1cm57a2V5OmUuc2xpY2Uoby5sZW5ndGgpLHR5cGU6XCJ2YWx1ZVwiLHJvb3Q6ITB9fXJldHVybntrZXk6ZSx0eXBlOlwidmFsdWVcIn19LGwuYW5jZXN0b3I9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm5bMSwwXTtpZihlWzBdIT09dClyZXR1cm5bMSwwXTtpZihlWzFdIT09dClyZXR1cm5bMCwxXTtsZXQgcj0yO2Zvcig7ZVtyXT09PXQ7KSsrcjtyZXR1cm5bci0xLHJdfSx0LnRvU2libGluZz0wLHQudG9QYXJlbnQ9MSx0Lk1hbmFnZXI9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnJlZnM9W119cmVnaXN0ZXIoZSxzKXtpZihlKWlmKHM9dm9pZCAwPT09cz90LnRvUGFyZW50OnMsQXJyYXkuaXNBcnJheShlKSlmb3IoY29uc3QgdCBvZiBlKXRoaXMucmVnaXN0ZXIodCxzKTtlbHNlIGlmKGEuaXNTY2hlbWEoZSkpZm9yKGNvbnN0IHQgb2YgZS5fcmVmcy5yZWZzKXQuYW5jZXN0b3Itcz49MCYmdGhpcy5yZWZzLnB1c2goe2FuY2VzdG9yOnQuYW5jZXN0b3Itcyxyb290OnQucm9vdH0pO2Vsc2UgdC5pc1JlZihlKSYmXCJ2YWx1ZVwiPT09ZS50eXBlJiZlLmFuY2VzdG9yLXM+PTAmJnRoaXMucmVmcy5wdXNoKHthbmNlc3RvcjplLmFuY2VzdG9yLXMscm9vdDplLnJvb3R9KSxpPWl8fHIoNyksaS5pc1RlbXBsYXRlKGUpJiZ0aGlzLnJlZ2lzdGVyKGUucmVmcygpLHMpfWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5yZWZzLmxlbmd0aH1jbG9uZSgpe2NvbnN0IGU9bmV3IHQuTWFuYWdlcjtyZXR1cm4gZS5yZWZzPW4odGhpcy5yZWZzKSxlfXJlc2V0KCl7dGhpcy5yZWZzPVtdfXJvb3RzKCl7cmV0dXJuIHRoaXMucmVmcy5maWx0ZXIoZT0+IWUuYW5jZXN0b3IpLm1hcChlPT5lLnJvb3QpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj17fTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2lmKCExPT09dHx8bnVsbD09dClyZXR1cm4gZTtcInN0cmluZ1wiPT10eXBlb2Yocj1yfHx7fSkmJihyPXtzZXBhcmF0b3I6cn0pO2NvbnN0IG89QXJyYXkuaXNBcnJheSh0KTtzKCFvfHwhci5zZXBhcmF0b3IsXCJTZXBhcmF0b3Igb3B0aW9uIG5vIHZhbGlkIGZvciBhcnJheS1iYXNlZCBjaGFpblwiKTtjb25zdCBhPW8/dDp0LnNwbGl0KHIuc2VwYXJhdG9yfHxcIi5cIik7bGV0IGk9ZTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoOysrZSl7bGV0IG89YVtlXTtjb25zdCBsPXIuaXRlcmFibGVzJiZuLml0ZXJhYmxlcyhpKTtpZihBcnJheS5pc0FycmF5KGkpfHxcInNldFwiPT09bCl7Y29uc3QgZT1OdW1iZXIobyk7TnVtYmVyLmlzSW50ZWdlcihlKSYmKG89ZTwwP2kubGVuZ3RoK2U6ZSl9aWYoIWl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiExPT09ci5mdW5jdGlvbnN8fCFsJiZ2b2lkIDA9PT1pW29dKXtzKCFyLnN0cmljdHx8ZSsxPT09YS5sZW5ndGgsXCJNaXNzaW5nIHNlZ21lbnRcIixvLFwiaW4gcmVhY2ggcGF0aCBcIix0KSxzKFwib2JqZWN0XCI9PXR5cGVvZiBpfHwhMD09PXIuZnVuY3Rpb25zfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLFwiSW52YWxpZCBzZWdtZW50XCIsbyxcImluIHJlYWNoIHBhdGggXCIsdCksaT1yLmRlZmF1bHQ7YnJlYWt9aT1sP1wic2V0XCI9PT1sP1suLi5pXVtvXTppLmdldChvKTppW29dfXJldHVybiBpfSxuLml0ZXJhYmxlcz1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIFNldD9cInNldFwiOmUgaW5zdGFuY2VvZiBNYXA/XCJtYXBcIjp2b2lkIDB9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMzApLGE9cigzMSksaT1yKDEpLGw9cig0KSxjPXIoNSksdT17c3ltYm9sOlN5bWJvbChcInRlbXBsYXRlXCIpLG9wZW5zOm5ldyBBcnJheSgxZTMpLmpvaW4oXCJcXDBcIiksY2xvc2VzOm5ldyBBcnJheSgxZTMpLmpvaW4oXCJcdTAwMDFcIiksZGF0ZUZvcm1hdDp7ZGF0ZTpEYXRlLnByb3RvdHlwZS50b0RhdGVTdHJpbmcsaXNvOkRhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nLHN0cmluZzpEYXRlLnByb3RvdHlwZS50b1N0cmluZyx0aW1lOkRhdGUucHJvdG90eXBlLnRvVGltZVN0cmluZyx1dGM6RGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmd9fTtlLmV4cG9ydHM9dS5UZW1wbGF0ZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQpe3MoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJUZW1wbGF0ZSBzb3VyY2UgbXVzdCBiZSBhIHN0cmluZ1wiKSxzKCFlLmluY2x1ZGVzKFwiXFwwXCIpJiYhZS5pbmNsdWRlcyhcIlx1MDAwMVwiKSxcIlRlbXBsYXRlIHNvdXJjZSBjYW5ub3QgY29udGFpbiByZXNlcnZlZCBjb250cm9sIGNoYXJhY3RlcnNcIiksdGhpcy5zb3VyY2U9ZSx0aGlzLnJlbmRlcmVkPWUsdGhpcy5fdGVtcGxhdGU9bnVsbCx0aGlzLl9zZXR0aW5ncz1uKHQpLHRoaXMuX3BhcnNlKCl9X3BhcnNlKCl7aWYoIXRoaXMuc291cmNlLmluY2x1ZGVzKFwie1wiKSlyZXR1cm47Y29uc3QgZT11LmVuY29kZSh0aGlzLnNvdXJjZSksdD11LnNwbGl0KGUpO2xldCByPSExO2NvbnN0IHM9W10sbj10LnNoaWZ0KCk7biYmcy5wdXNoKG4pO2Zvcihjb25zdCBlIG9mIHQpe2NvbnN0IHQ9XCJ7XCIhPT1lWzBdLG49dD9cIn1cIjpcIn19XCIsbz1lLmluZGV4T2Yobik7aWYoLTE9PT1vfHxcIntcIj09PWVbMV0pe3MucHVzaChcIntcIi5jb25jYXQodS5kZWNvZGUoZSkpKTtjb250aW51ZX1jb25zdCBhPWUuc2xpY2UodD8wOjEsbyksaT10aGlzLl9yZWYodS5kZWNvZGUoYSksdCk7cy5wdXNoKGkpLFwic3RyaW5nXCIhPXR5cGVvZiBpJiYocj0hMCk7Y29uc3QgbD1lLnNsaWNlKG8rbi5sZW5ndGgpO2wmJnMucHVzaCh1LmRlY29kZShsKSl9cj90aGlzLl90ZW1wbGF0ZT1zOnRoaXMucmVuZGVyZWQ9cy5qb2luKFwiXCIpfXN0YXRpYyBkYXRlKGUsdCl7cmV0dXJuIHUuZGF0ZUZvcm1hdFt0LmRhdGVGb3JtYXRdLmNhbGwoZSl9ZGVzY3JpYmUoZT17fSl7aWYoIXRoaXMuX3NldHRpbmdzJiZlLmNvbXBhY3QpcmV0dXJuIHRoaXMuc291cmNlO2NvbnN0IHQ9e3RlbXBsYXRlOnRoaXMuc291cmNlfTtyZXR1cm4gdGhpcy5fc2V0dGluZ3MmJih0Lm9wdGlvbnM9dGhpcy5fc2V0dGluZ3MpLHR9c3RhdGljIGJ1aWxkKGUpe3JldHVybiBuZXcgdS5UZW1wbGF0ZShlLnRlbXBsYXRlLGUub3B0aW9ucyl9aXNEeW5hbWljKCl7cmV0dXJuISF0aGlzLl90ZW1wbGF0ZX1zdGF0aWMgaXNUZW1wbGF0ZShlKXtyZXR1cm4hIWUmJiEhZVtpLnN5bWJvbHMudGVtcGxhdGVdfXJlZnMoKXtpZighdGhpcy5fdGVtcGxhdGUpcmV0dXJuO2NvbnN0IGU9W107Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdGVtcGxhdGUpXCJzdHJpbmdcIiE9dHlwZW9mIHQmJmUucHVzaCguLi50LnJlZnMpO3JldHVybiBlfXJlc29sdmUoZSx0LHIscyl7cmV0dXJuIHRoaXMuX3RlbXBsYXRlJiYxPT09dGhpcy5fdGVtcGxhdGUubGVuZ3RoP3RoaXMuX3BhcnQodGhpcy5fdGVtcGxhdGVbMF0sZSx0LHIscyx7fSk6dGhpcy5yZW5kZXIoZSx0LHIscyl9X3BhcnQoZSwuLi50KXtyZXR1cm4gZS5yZWY/ZS5yZWYucmVzb2x2ZSguLi50KTplLmZvcm11bGEuZXZhbHVhdGUodCl9cmVuZGVyKGUsdCxyLHMsbj17fSl7aWYoIXRoaXMuaXNEeW5hbWljKCkpcmV0dXJuIHRoaXMucmVuZGVyZWQ7Y29uc3QgYT1bXTtmb3IoY29uc3QgaSBvZiB0aGlzLl90ZW1wbGF0ZSlpZihcInN0cmluZ1wiPT10eXBlb2YgaSlhLnB1c2goaSk7ZWxzZXtjb25zdCBsPXRoaXMuX3BhcnQoaSxlLHQscixzLG4pLGM9dS5zdHJpbmdpZnkobCxyLG4uZXJyb3JzKTtpZih2b2lkIDAhPT1jKXtjb25zdCBlPWkucmF3fHwhMT09PShuLmVycm9ycyYmbi5lcnJvcnMuZXNjYXBlSHRtbCk/YzpvKGMpLHQ9aS5yZWYmJlwibG9jYWxcIj09PWkucmVmLnR5cGUmJlwibGFiZWxcIj09PWkucmVmLmtleSYmci5lcnJvcnMud3JhcC5sYWJlbDthLnB1c2godS53cmFwKGUsdCkpfX1yZXR1cm4gYS5qb2luKFwiXCIpfV9yZWYoZSx0KXtjb25zdCByPVtdLHM9ZT0+e2NvbnN0IHQ9Yy5jcmVhdGUoZSx0aGlzLl9zZXR0aW5ncyk7cmV0dXJuIHIucHVzaCh0KSxlPT50LnJlc29sdmUoLi4uZSl9O3RyeXt2YXIgbj1uZXcgYS5QYXJzZXIoZSx7cmVmZXJlbmNlOnMsZnVuY3Rpb25zOnUuZnVuY3Rpb25zLGNvbnN0YW50czp1LmNvbnN0YW50c30pfWNhdGNoKHQpe3Rocm93IHQubWVzc2FnZT0nSW52YWxpZCB0ZW1wbGF0ZSB2YXJpYWJsZSBcIicuY29uY2F0KGUsJ1wiIGZhaWxzIGR1ZSB0bzogJykuY29uY2F0KHQubWVzc2FnZSksdH1yZXR1cm4gbi5zaW5nbGU/XCJyZWZlcmVuY2VcIj09PW4uc2luZ2xlLnR5cGU/e3JlZjpyWzBdLHJhdzp0LHJlZnM6cn06dS5zdHJpbmdpZnkobi5zaW5nbGUudmFsdWUpOntmb3JtdWxhOm4scmF3OnQscmVmczpyfX10b1N0cmluZygpe3JldHVybiB0aGlzLnNvdXJjZX19LHUuVGVtcGxhdGUucHJvdG90eXBlW2kuc3ltYm9scy50ZW1wbGF0ZV09ITAsdS5UZW1wbGF0ZS5wcm90b3R5cGUuaXNJbW11dGFibGU9ITAsdS5lbmNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXFxcXChcXHsrKS9nLChlLHQpPT51Lm9wZW5zLnNsaWNlKDAsdC5sZW5ndGgpKS5yZXBsYWNlKC9cXFxcKFxcfSspL2csKGUsdCk9PnUuY2xvc2VzLnNsaWNlKDAsdC5sZW5ndGgpKX0sdS5kZWNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXFx1MDAwMC9nLFwie1wiKS5yZXBsYWNlKC9cXHUwMDAxL2csXCJ9XCIpfSx1LnNwbGl0PWZ1bmN0aW9uKGUpe2NvbnN0IHQ9W107bGV0IHI9XCJcIjtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3Qgbj1lW3NdO2lmKFwie1wiPT09bil7bGV0IG49XCJcIjtmb3IoO3MrMTxlLmxlbmd0aCYmXCJ7XCI9PT1lW3MrMV07KW4rPVwie1wiLCsrczt0LnB1c2gocikscj1ufWVsc2Ugcis9bn1yZXR1cm4gdC5wdXNoKHIpLHR9LHUud3JhcD1mdW5jdGlvbihlLHQpe3JldHVybiB0PzE9PT10Lmxlbmd0aD9cIlwiLmNvbmNhdCh0KS5jb25jYXQoZSkuY29uY2F0KHQpOlwiXCIuY29uY2F0KHRbMF0pLmNvbmNhdChlKS5jb25jYXQodFsxXSk6ZX0sdS5zdHJpbmdpZnk9ZnVuY3Rpb24oZSx0LHIpe2NvbnN0IHM9dHlwZW9mIGU7aWYobnVsbD09PWUpcmV0dXJuXCJudWxsXCI7aWYoXCJzdHJpbmdcIj09PXMpcmV0dXJuIGU7aWYoXCJudW1iZXJcIj09PXN8fFwiZnVuY3Rpb25cIj09PXN8fFwic3ltYm9sXCI9PT1zKXJldHVybiBlLnRvU3RyaW5nKCk7aWYoXCJvYmplY3RcIiE9PXMpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiB1LlRlbXBsYXRlLmRhdGUoZSx0KTtpZihlIGluc3RhbmNlb2YgTWFwKXtjb25zdCB0PVtdO2Zvcihjb25zdFtyLHNdb2YgZS5lbnRyaWVzKCkpdC5wdXNoKFwiXCIuY29uY2F0KHIudG9TdHJpbmcoKSxcIiAtPiBcIikuY29uY2F0KHMudG9TdHJpbmcoKSkpO2U9dH1pZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS50b1N0cmluZygpO2xldCBuPVwiXCI7Zm9yKGNvbnN0IHMgb2YgZSluPW4rKG4ubGVuZ3RoP1wiLCBcIjpcIlwiKSt1LnN0cmluZ2lmeShzLHQscik7cmV0dXJuIHUud3JhcChuLHQuZXJyb3JzLndyYXAuYXJyYXkpfSx1LmNvbnN0YW50cz17dHJ1ZTohMCxmYWxzZTohMSxudWxsOm51bGwsc2Vjb25kOjFlMyxtaW51dGU6NmU0LGhvdXI6MzZlNSxkYXk6ODY0ZTV9LHUuZnVuY3Rpb25zPXtpZjooZSx0LHIpPT5lP3Q6cixtc2coZSl7Y29uc3RbdCxyLHMsbixvXT10aGlzLGE9by5tZXNzYWdlcztpZighYSlyZXR1cm5cIlwiO2NvbnN0IGk9bC50ZW1wbGF0ZSh0LGFbMF0sZSxyLHMpfHxsLnRlbXBsYXRlKHQsYVsxXSxlLHIscyk7cmV0dXJuIGk/aS5yZW5kZXIodCxyLHMsbixvKTpcIlwifSxudW1iZXI6ZT0+XCJudW1iZXJcIj09dHlwZW9mIGU/ZTpcInN0cmluZ1wiPT10eXBlb2YgZT9wYXJzZUZsb2F0KGUpOlwiYm9vbGVhblwiPT10eXBlb2YgZT9lPzE6MDplIGluc3RhbmNlb2YgRGF0ZT9lLmdldFRpbWUoKTpudWxsfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMSksbz1yKDUpLGE9e307dC5zY2hlbWE9ZnVuY3Rpb24oZSx0LHI9e30pe24uYXNzZXJ0T3B0aW9ucyhyLFtcImFwcGVuZFBhdGhcIixcIm92ZXJyaWRlXCJdKTt0cnl7cmV0dXJuIGEuc2NoZW1hKGUsdCxyKX1jYXRjaChlKXt0aHJvdyByLmFwcGVuZFBhdGgmJnZvaWQgMCE9PWUucGF0aCYmKGUubWVzc2FnZT1cIlwiLmNvbmNhdChlLm1lc3NhZ2UsXCIgKFwiKS5jb25jYXQoZS5wYXRoLFwiKVwiKSksZX19LGEuc2NoZW1hPWZ1bmN0aW9uKGUsdCxyKXtzKHZvaWQgMCE9PXQsXCJJbnZhbGlkIHVuZGVmaW5lZCBzY2hlbWFcIiksQXJyYXkuaXNBcnJheSh0KSYmKHModC5sZW5ndGgsXCJJbnZhbGlkIGVtcHR5IGFycmF5IHNjaGVtYVwiKSwxPT09dC5sZW5ndGgmJih0PXRbMF0pKTtjb25zdCBvPSh0LC4uLnMpPT4hMSE9PXIub3ZlcnJpZGU/dC52YWxpZChlLm92ZXJyaWRlLC4uLnMpOnQudmFsaWQoLi4ucyk7aWYoYS5zaW1wbGUodCkpcmV0dXJuIG8oZSx0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBlLmN1c3RvbSh0KTtpZihzKFwib2JqZWN0XCI9PXR5cGVvZiB0LFwiSW52YWxpZCBzY2hlbWEgY29udGVudDpcIix0eXBlb2YgdCksbi5pc1Jlc29sdmFibGUodCkpcmV0dXJuIG8oZSx0KTtpZihuLmlzU2NoZW1hKHQpKXJldHVybiB0O2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcihjb25zdCByIG9mIHQpaWYoIWEuc2ltcGxlKHIpKXJldHVybiBlLmFsdGVybmF0aXZlcygpLnRyeSguLi50KTtyZXR1cm4gbyhlLC4uLnQpfXJldHVybiB0IGluc3RhbmNlb2YgUmVnRXhwP2Uuc3RyaW5nKCkucmVnZXgodCk6dCBpbnN0YW5jZW9mIERhdGU/byhlLmRhdGUoKSx0KToocyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFwiU2NoZW1hIGNhbiBvbmx5IGNvbnRhaW4gcGxhaW4gb2JqZWN0c1wiKSxlLm9iamVjdCgpLmtleXModCkpfSx0LnJlZj1mdW5jdGlvbihlLHQpe3JldHVybiBvLmlzUmVmKGUpP2U6by5jcmVhdGUoZSx0KX0sdC5jb21waWxlPWZ1bmN0aW9uKGUscixvPXt9KXtuLmFzc2VydE9wdGlvbnMobyxbXCJsZWdhY3lcIl0pO2NvbnN0IGk9ciYmcltuLnN5bWJvbHMuYW55XTtpZihpKXJldHVybiBzKG8ubGVnYWN5fHxpLnZlcnNpb249PT1uLnZlcnNpb24sXCJDYW5ub3QgbWl4IGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBqb2kgc2NoZW1hczpcIixpLnZlcnNpb24sbi52ZXJzaW9uKSxyO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByfHwhby5sZWdhY3kpcmV0dXJuIHQuc2NoZW1hKGUscix7YXBwZW5kUGF0aDohMH0pO2NvbnN0IGw9YS53YWxrKHIpO3JldHVybiBsP2wuY29tcGlsZShsLnJvb3Qscik6dC5zY2hlbWEoZSxyLHthcHBlbmRQYXRoOiEwfSl9LGEud2Fsaz1mdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPWEud2Fsayh0KTtpZihlKXJldHVybiBlfXJldHVybiBudWxsfWNvbnN0IHQ9ZVtuLnN5bWJvbHMuYW55XTtpZih0KXJldHVybntyb290OmVbdC5yb290XSxjb21waWxlOnQuY29tcGlsZX07cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFwiU2NoZW1hIGNhbiBvbmx5IGNvbnRhaW4gcGxhaW4gb2JqZWN0c1wiKTtmb3IoY29uc3QgdCBpbiBlKXtjb25zdCByPWEud2FsayhlW3RdKTtpZihyKXJldHVybiByfXJldHVybiBudWxsfSxhLnNpbXBsZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWV8fFtcImJvb2xlYW5cIixcInN0cmluZ1wiLFwibnVtYmVyXCJdLmluY2x1ZGVzKHR5cGVvZiBlKX0sdC53aGVuPWZ1bmN0aW9uKGUscixpKXtpZih2b2lkIDA9PT1pJiYocyhyJiZcIm9iamVjdFwiPT10eXBlb2YgcixcIk1pc3Npbmcgb3B0aW9uc1wiKSxpPXIscj1vLmNyZWF0ZShcIi5cIikpLEFycmF5LmlzQXJyYXkoaSkmJihpPXtzd2l0Y2g6aX0pLG4uYXNzZXJ0T3B0aW9ucyhpLFtcImlzXCIsXCJub3RcIixcInRoZW5cIixcIm90aGVyd2lzZVwiLFwic3dpdGNoXCIsXCJicmVha1wiXSksbi5pc1NjaGVtYShyKSlyZXR1cm4gcyh2b2lkIDA9PT1pLmlzLCdcImlzXCIgY2FuIG5vdCBiZSB1c2VkIHdpdGggYSBzY2hlbWEgY29uZGl0aW9uJykscyh2b2lkIDA9PT1pLm5vdCwnXCJub3RcIiBjYW4gbm90IGJlIHVzZWQgd2l0aCBhIHNjaGVtYSBjb25kaXRpb24nKSxzKHZvaWQgMD09PWkuc3dpdGNoLCdcInN3aXRjaFwiIGNhbiBub3QgYmUgdXNlZCB3aXRoIGEgc2NoZW1hIGNvbmRpdGlvbicpLGEuY29uZGl0aW9uKGUse2lzOnIsdGhlbjppLnRoZW4sb3RoZXJ3aXNlOmkub3RoZXJ3aXNlLGJyZWFrOmkuYnJlYWt9KTtpZihzKG8uaXNSZWYocil8fFwic3RyaW5nXCI9PXR5cGVvZiByLFwiSW52YWxpZCBjb25kaXRpb246XCIscikscyh2b2lkIDA9PT1pLm5vdHx8dm9pZCAwPT09aS5pcywnQ2Fubm90IGNvbWJpbmUgXCJpc1wiIHdpdGggXCJub3RcIicpLHZvaWQgMD09PWkuc3dpdGNoKXtsZXQgbD1pO3ZvaWQgMCE9PWkubm90JiYobD17aXM6aS5ub3QsdGhlbjppLm90aGVyd2lzZSxvdGhlcndpc2U6aS50aGVuLGJyZWFrOmkuYnJlYWt9KTtsZXQgYz12b2lkIDAhPT1sLmlzP2UuJF9jb21waWxlKGwuaXMpOmUuJF9yb290LmludmFsaWQobnVsbCwhMSwwLFwiXCIpLnJlcXVpcmVkKCk7cmV0dXJuIHModm9pZCAwIT09bC50aGVufHx2b2lkIDAhPT1sLm90aGVyd2lzZSwnb3B0aW9ucyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIFwidGhlblwiLCBcIm90aGVyd2lzZVwiLCBvciBcInN3aXRjaFwiJykscyh2b2lkIDA9PT1sLmJyZWFrfHx2b2lkIDA9PT1sLnRoZW58fHZvaWQgMD09PWwub3RoZXJ3aXNlLFwiQ2Fubm90IHNwZWNpZnkgdGhlbiwgb3RoZXJ3aXNlLCBhbmQgYnJlYWsgYWxsIHRvZ2V0aGVyXCIpLHZvaWQgMD09PWkuaXN8fG8uaXNSZWYoaS5pcyl8fG4uaXNTY2hlbWEoaS5pcyl8fChjPWMucmVxdWlyZWQoKSksYS5jb25kaXRpb24oZSx7cmVmOnQucmVmKHIpLGlzOmMsdGhlbjpsLnRoZW4sb3RoZXJ3aXNlOmwub3RoZXJ3aXNlLGJyZWFrOmwuYnJlYWt9KX1zKEFycmF5LmlzQXJyYXkoaS5zd2l0Y2gpLCdcInN3aXRjaFwiIG11c3QgYmUgYW4gYXJyYXknKSxzKHZvaWQgMD09PWkuaXMsJ0Nhbm5vdCBjb21iaW5lIFwic3dpdGNoXCIgd2l0aCBcImlzXCInKSxzKHZvaWQgMD09PWkubm90LCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJub3RcIicpLHModm9pZCAwPT09aS50aGVuLCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJ0aGVuXCInKTtjb25zdCBsPXtyZWY6dC5yZWYociksc3dpdGNoOltdLGJyZWFrOmkuYnJlYWt9O2ZvcihsZXQgdD0wO3Q8aS5zd2l0Y2gubGVuZ3RoOysrdCl7Y29uc3Qgcj1pLnN3aXRjaFt0XSxhPXQ9PT1pLnN3aXRjaC5sZW5ndGgtMTtuLmFzc2VydE9wdGlvbnMocixhP1tcImlzXCIsXCJ0aGVuXCIsXCJvdGhlcndpc2VcIl06W1wiaXNcIixcInRoZW5cIl0pLHModm9pZCAwIT09ci5pcywnU3dpdGNoIHN0YXRlbWVudCBtaXNzaW5nIFwiaXNcIicpLHModm9pZCAwIT09ci50aGVuLCdTd2l0Y2ggc3RhdGVtZW50IG1pc3NpbmcgXCJ0aGVuXCInKTtjb25zdCBjPXtpczplLiRfY29tcGlsZShyLmlzKSx0aGVuOmUuJF9jb21waWxlKHIudGhlbil9O2lmKG8uaXNSZWYoci5pcyl8fG4uaXNTY2hlbWEoci5pcyl8fChjLmlzPWMuaXMucmVxdWlyZWQoKSksYSl7cyh2b2lkIDA9PT1pLm90aGVyd2lzZXx8dm9pZCAwPT09ci5vdGhlcndpc2UsJ0Nhbm5vdCBzcGVjaWZ5IFwib3RoZXJ3aXNlXCIgaW5zaWRlIGFuZCBvdXRzaWRlIGEgXCJzd2l0Y2hcIicpO2NvbnN0IHQ9dm9pZCAwIT09aS5vdGhlcndpc2U/aS5vdGhlcndpc2U6ci5vdGhlcndpc2U7dm9pZCAwIT09dCYmKHModm9pZCAwPT09bC5icmVhayxcIkNhbm5vdCBzcGVjaWZ5IGJvdGggb3RoZXJ3aXNlIGFuZCBicmVha1wiKSxjLm90aGVyd2lzZT1lLiRfY29tcGlsZSh0KSl9bC5zd2l0Y2gucHVzaChjKX1yZXR1cm4gbH0sYS5jb25kaXRpb249ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZltcInRoZW5cIixcIm90aGVyd2lzZVwiXSl2b2lkIDA9PT10W3JdP2RlbGV0ZSB0W3JdOnRbcl09ZS4kX2NvbXBpbGUodFtyXSk7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoNyk7dC5jb21waWxlPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHMoIXQsXCJDYW5ub3Qgc2V0IHNpbmdsZSBtZXNzYWdlIHN0cmluZ1wiKSxuZXcgbyhlKTtpZihvLmlzVGVtcGxhdGUoZSkpcmV0dXJuIHMoIXQsXCJDYW5ub3Qgc2V0IHNpbmdsZSBtZXNzYWdlIHRlbXBsYXRlXCIpLGU7cyhcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJJbnZhbGlkIG1lc3NhZ2Ugb3B0aW9uc1wiKSx0PXQ/bih0KTp7fTtmb3IobGV0IHIgaW4gZSl7Y29uc3Qgbj1lW3JdO2lmKFwicm9vdFwiPT09cnx8by5pc1RlbXBsYXRlKG4pKXt0W3JdPW47Y29udGludWV9aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3Rbcl09bmV3IG8obik7Y29udGludWV9cyhcIm9iamVjdFwiPT10eXBlb2YgbiYmIUFycmF5LmlzQXJyYXkobiksXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIscik7Y29uc3QgYT1yO2ZvcihyIGluIHRbYV09dFthXXx8e30sbil7Y29uc3QgZT1uW3JdO1wicm9vdFwiPT09cnx8by5pc1RlbXBsYXRlKGUpP3RbYV1bcl09ZToocyhcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgbWVzc2FnZSBmb3JcIixyLFwiaW5cIixhKSx0W2FdW3JdPW5ldyBvKGUpKX19cmV0dXJuIHR9LHQuZGVjb21waWxlPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9e307Zm9yKGxldCByIGluIGUpe2NvbnN0IHM9ZVtyXTtpZihcInJvb3RcIj09PXIpe3Rbcl09cztjb250aW51ZX1pZihvLmlzVGVtcGxhdGUocykpe3Rbcl09cy5kZXNjcmliZSh7Y29tcGFjdDohMH0pO2NvbnRpbnVlfWNvbnN0IG49cjtmb3IociBpbiB0W25dPXt9LHMpe2NvbnN0IGU9c1tyXTtcInJvb3RcIiE9PXI/dFtuXVtyXT1lLmRlc2NyaWJlKHtjb21wYWN0OiEwfSk6dFtuXVtyXT1lfX1yZXR1cm4gdH0sdC5tZXJnZT1mdW5jdGlvbihlLHIpe2lmKCFlKXJldHVybiB0LmNvbXBpbGUocik7aWYoIXIpcmV0dXJuIGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIG5ldyBvKHIpO2lmKG8uaXNUZW1wbGF0ZShyKSlyZXR1cm4gcjtjb25zdCBhPW4oZSk7Zm9yKGxldCBlIGluIHIpe2NvbnN0IHQ9cltlXTtpZihcInJvb3RcIj09PWV8fG8uaXNUZW1wbGF0ZSh0KSl7YVtlXT10O2NvbnRpbnVlfWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXthW2VdPW5ldyBvKHQpO2NvbnRpbnVlfXMoXCJvYmplY3RcIj09dHlwZW9mIHQmJiFBcnJheS5pc0FycmF5KHQpLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLGUpO2NvbnN0IG49ZTtmb3IoZSBpbiBhW25dPWFbbl18fHt9LHQpe2NvbnN0IHI9dFtlXTtcInJvb3RcIj09PWV8fG8uaXNUZW1wbGF0ZShyKT9hW25dW2VdPXI6KHMoXCJzdHJpbmdcIj09dHlwZW9mIHIsXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIsZSxcImluXCIsbiksYVtuXVtlXT1uZXcgbyhyKSl9fXJldHVybiBhfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigxMyksbj17bWlzbWF0Y2hlZDpudWxsfTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiByPU9iamVjdC5hc3NpZ24oe3Byb3RvdHlwZTohMH0sciksISFuLmlzRGVlcEVxdWFsKGUsdCxyLFtdKX0sbi5pc0RlZXBFcXVhbD1mdW5jdGlvbihlLHQscixvKXtpZihlPT09dClyZXR1cm4gMCE9PWV8fDEvZT09MS90O2NvbnN0IGE9dHlwZW9mIGU7aWYoYSE9PXR5cGVvZiB0KXJldHVybiExO2lmKG51bGw9PT1lfHxudWxsPT09dClyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PT1hKXtpZighci5kZWVwRnVuY3Rpb258fGUudG9TdHJpbmcoKSE9PXQudG9TdHJpbmcoKSlyZXR1cm4hMX1lbHNlIGlmKFwib2JqZWN0XCIhPT1hKXJldHVybiBlIT1lJiZ0IT10O2NvbnN0IGk9bi5nZXRTaGFyZWRUeXBlKGUsdCwhIXIucHJvdG90eXBlKTtzd2l0Y2goaSl7Y2FzZSBzLmJ1ZmZlcjpyZXR1cm4hMTtjYXNlIHMucHJvbWlzZTpyZXR1cm4gZT09PXQ7Y2FzZSBzLnJlZ2V4OnJldHVybiBlLnRvU3RyaW5nKCk9PT10LnRvU3RyaW5nKCk7Y2FzZSBuLm1pc21hdGNoZWQ6cmV0dXJuITF9Zm9yKGxldCByPW8ubGVuZ3RoLTE7cj49MDstLXIpaWYob1tyXS5pc1NhbWUoZSx0KSlyZXR1cm4hMDtvLnB1c2gobmV3IG4uU2VlbkVudHJ5KGUsdCkpO3RyeXtyZXR1cm4hIW4uaXNEZWVwRXF1YWxPYmooaSxlLHQscixvKX1maW5hbGx5e28ucG9wKCl9fSxuLmdldFNoYXJlZFR5cGU9ZnVuY3Rpb24oZSx0LHIpe2lmKHIpcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0KT9uLm1pc21hdGNoZWQ6cy5nZXRJbnRlcm5hbFByb3RvKGUpO2NvbnN0IG89cy5nZXRJbnRlcm5hbFByb3RvKGUpO3JldHVybiBvIT09cy5nZXRJbnRlcm5hbFByb3RvKHQpP24ubWlzbWF0Y2hlZDpvfSxuLnZhbHVlT2Y9ZnVuY3Rpb24oZSl7Y29uc3QgdD1lLnZhbHVlT2Y7aWYodm9pZCAwPT09dClyZXR1cm4gZTt0cnl7cmV0dXJuIHQuY2FsbChlKX1jYXRjaChlKXtyZXR1cm4gZX19LG4uaGFzT3duRW51bWVyYWJsZVByb3BlcnR5PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHQpfSxuLmlzU2V0U2ltcGxlRXF1YWw9ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZiBlKWlmKCF0LmhhcyhyKSlyZXR1cm4hMTtyZXR1cm4hMH0sbi5pc0RlZXBFcXVhbE9iaj1mdW5jdGlvbihlLHQscixvLGEpe2NvbnN0e2lzRGVlcEVxdWFsOmksdmFsdWVPZjpsLGhhc093bkVudW1lcmFibGVQcm9wZXJ0eTpjfT1uLHtrZXlzOnUsZ2V0T3duUHJvcGVydHlTeW1ib2xzOmZ9PU9iamVjdDtpZihlPT09cy5hcnJheSl7aWYoIW8ucGFydCl7aWYodC5sZW5ndGghPT1yLmxlbmd0aClyZXR1cm4hMTtmb3IobGV0IGU9MDtlPHQubGVuZ3RoOysrZSlpZighaSh0W2VdLHJbZV0sbyxhKSlyZXR1cm4hMTtyZXR1cm4hMH1mb3IoY29uc3QgZSBvZiB0KWZvcihjb25zdCB0IG9mIHIpaWYoaShlLHQsbyxhKSlyZXR1cm4hMH1lbHNlIGlmKGU9PT1zLnNldCl7aWYodC5zaXplIT09ci5zaXplKXJldHVybiExO2lmKCFuLmlzU2V0U2ltcGxlRXF1YWwodCxyKSl7Y29uc3QgZT1uZXcgU2V0KHIpO2Zvcihjb25zdCByIG9mIHQpe2lmKGUuZGVsZXRlKHIpKWNvbnRpbnVlO2xldCB0PSExO2Zvcihjb25zdCBzIG9mIGUpaWYoaShyLHMsbyxhKSl7ZS5kZWxldGUocyksdD0hMDticmVha31pZighdClyZXR1cm4hMX19fWVsc2UgaWYoZT09PXMubWFwKXtpZih0LnNpemUhPT1yLnNpemUpcmV0dXJuITE7Zm9yKGNvbnN0W2Usc11vZiB0KXtpZih2b2lkIDA9PT1zJiYhci5oYXMoZSkpcmV0dXJuITE7aWYoIWkocyxyLmdldChlKSxvLGEpKXJldHVybiExfX1lbHNlIGlmKGU9PT1zLmVycm9yJiYodC5uYW1lIT09ci5uYW1lfHx0Lm1lc3NhZ2UhPT1yLm1lc3NhZ2UpKXJldHVybiExO2NvbnN0IG09bCh0KSxoPWwocik7aWYoKHQhPT1tfHxyIT09aCkmJiFpKG0saCxvLGEpKXJldHVybiExO2NvbnN0IGQ9dSh0KTtpZighby5wYXJ0JiZkLmxlbmd0aCE9PXUocikubGVuZ3RoJiYhby5za2lwKXJldHVybiExO2xldCBwPTA7Zm9yKGNvbnN0IGUgb2YgZClpZihvLnNraXAmJm8uc2tpcC5pbmNsdWRlcyhlKSl2b2lkIDA9PT1yW2VdJiYrK3A7ZWxzZXtpZighYyhyLGUpKXJldHVybiExO2lmKCFpKHRbZV0scltlXSxvLGEpKXJldHVybiExfWlmKCFvLnBhcnQmJmQubGVuZ3RoLXAhPT11KHIpLmxlbmd0aClyZXR1cm4hMTtpZighMSE9PW8uc3ltYm9scyl7Y29uc3QgZT1mKHQpLHM9bmV3IFNldChmKHIpKTtmb3IoY29uc3QgbiBvZiBlKXtpZighby5za2lwfHwhby5za2lwLmluY2x1ZGVzKG4pKWlmKGModCxuKSl7aWYoIWMocixuKSlyZXR1cm4hMTtpZighaSh0W25dLHJbbl0sbyxhKSlyZXR1cm4hMX1lbHNlIGlmKGMocixuKSlyZXR1cm4hMTtzLmRlbGV0ZShuKX1mb3IoY29uc3QgZSBvZiBzKWlmKGMocixlKSlyZXR1cm4hMX1yZXR1cm4hMH0sbi5TZWVuRW50cnk9Y2xhc3N7Y29uc3RydWN0b3IoZSx0KXt0aGlzLm9iaj1lLHRoaXMucmVmPXR9aXNTYW1lKGUsdCl7cmV0dXJuIHRoaXMub2JqPT09ZSYmdGhpcy5yZWY9PT10fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxNSksYT1yKDEpLGk9cig4KSxsPXIoNCksYz1yKDE3KSx1PXIoMTgpLGY9cig1KSxtPXIoNyksaD1yKDE5KTtsZXQgZDtjb25zdCBwPXt0eXBlczp7YWx0ZXJuYXRpdmVzOnIoMzMpLGFueTpyKDMpLGFycmF5OnIoMzkpLGJvb2xlYW46cig0MCksZGF0ZTpyKDQxKSxmdW5jdGlvbjpyKDQyKSxsaW5rOnIoNDUpLG51bWJlcjpyKDQ2KSxvYmplY3Q6cig0Nyksc3RyaW5nOnIoNDgpLHN5bWJvbDpyKDUyKX0sYWxpYXNlczp7YWx0OlwiYWx0ZXJuYXRpdmVzXCIsYm9vbDpcImJvb2xlYW5cIixmdW5jOlwiZnVuY3Rpb25cIn19O3Aucm9vdD1mdW5jdGlvbigpe2NvbnN0IGU9e190eXBlczpuZXcgU2V0KE9iamVjdC5rZXlzKHAudHlwZXMpKX07Zm9yKGNvbnN0IHQgb2YgZS5fdHlwZXMpZVt0XT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcyghZS5sZW5ndGh8fFtcImFsdGVybmF0aXZlc1wiLFwibGlua1wiLFwib2JqZWN0XCJdLmluY2x1ZGVzKHQpLFwiVGhlXCIsdCxcInR5cGUgZG9lcyBub3QgYWxsb3cgYXJndW1lbnRzXCIpLHAuZ2VuZXJhdGUodGhpcyxwLnR5cGVzW3RdLGUpfTtmb3IoY29uc3QgdCBvZltcImFsbG93XCIsXCJjdXN0b21cIixcImRpc2FsbG93XCIsXCJlcXVhbFwiLFwiZXhpc3RcIixcImZvcmJpZGRlblwiLFwiaW52YWxpZFwiLFwibm90XCIsXCJvbmx5XCIsXCJvcHRpb25hbFwiLFwib3B0aW9uc1wiLFwicHJlZnNcIixcInByZWZlcmVuY2VzXCIsXCJyZXF1aXJlZFwiLFwic3RyaXBcIixcInZhbGlkXCIsXCJ3aGVuXCJdKWVbdF09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHRoaXMuYW55KClbdF0oLi4uZSl9O09iamVjdC5hc3NpZ24oZSxwLm1ldGhvZHMpO2Zvcihjb25zdCB0IGluIHAuYWxpYXNlcyl7Y29uc3Qgcj1wLmFsaWFzZXNbdF07ZVt0XT1lW3JdfXJldHVybiBlLng9ZS5leHByZXNzaW9uLGguc2V0dXAmJmguc2V0dXAoZSksZX0scC5tZXRob2RzPXtWYWxpZGF0aW9uRXJyb3I6bC5WYWxpZGF0aW9uRXJyb3IsdmVyc2lvbjphLnZlcnNpb24sY2FjaGU6by5wcm92aWRlcixhc3NlcnQoZSx0LC4uLnIpe3AuYXNzZXJ0KGUsdCwhMCxyKX0sYXR0ZW1wdDooZSx0LC4uLnIpPT5wLmFzc2VydChlLHQsITEsciksYnVpbGQoZSl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgdS5idWlsZCxcIk1hbmlmZXN0IGZ1bmN0aW9uYWxpdHkgZGlzYWJsZWRcIiksdS5idWlsZCh0aGlzLGUpfSxjaGVja1ByZWZlcmVuY2VzKGUpe2EuY2hlY2tQcmVmZXJlbmNlcyhlKX0sY29tcGlsZShlLHQpe3JldHVybiBpLmNvbXBpbGUodGhpcyxlLHQpfSxkZWZhdWx0cyhlKXtzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJtb2RpZmllciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMpO2Zvcihjb25zdCByIG9mIHQuX3R5cGVzKXtjb25zdCBuPWUodFtyXSgpKTtzKGEuaXNTY2hlbWEobiksXCJtb2RpZmllciBtdXN0IHJldHVybiBhIHZhbGlkIHNjaGVtYSBvYmplY3RcIiksdFtyXT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcC5nZW5lcmF0ZSh0aGlzLG4sZSl9fXJldHVybiB0fSxleHByZXNzaW9uOiguLi5lKT0+bmV3IG0oLi4uZSksZXh0ZW5kKC4uLmUpe2EudmVyaWZ5RmxhdChlLFwiZXh0ZW5kXCIpLGQ9ZHx8cigxNikscyhlLmxlbmd0aCxcIllvdSBuZWVkIHRvIHByb3ZpZGUgYXQgbGVhc3Qgb25lIGV4dGVuc2lvblwiKSx0aGlzLmFzc2VydChlLGQuZXh0ZW5zaW9ucyk7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMpO3QuX3R5cGVzPW5ldyBTZXQodC5fdHlwZXMpO2ZvcihsZXQgciBvZiBlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYocj1yKHQpKSx0aGlzLmFzc2VydChyLGQuZXh0ZW5zaW9uKTtjb25zdCBlPXAuZXhwYW5kRXh0ZW5zaW9uKHIsdCk7Zm9yKGNvbnN0IHIgb2YgZSl7cyh2b2lkIDA9PT10W3IudHlwZV18fHQuX3R5cGVzLmhhcyhyLnR5cGUpLFwiQ2Fubm90IG92ZXJyaWRlIG5hbWVcIixyLnR5cGUpO2NvbnN0IGU9ci5iYXNlfHx0aGlzLmFueSgpLG49Yy50eXBlKGUscik7dC5fdHlwZXMuYWRkKHIudHlwZSksdFtyLnR5cGVdPWZ1bmN0aW9uKC4uLmUpe3JldHVybiBwLmdlbmVyYXRlKHRoaXMsbixlKX19fXJldHVybiB0fSxpc0Vycm9yOmwuVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IsaXNFeHByZXNzaW9uOm0uaXNUZW1wbGF0ZSxpc1JlZjpmLmlzUmVmLGlzU2NoZW1hOmEuaXNTY2hlbWEsaW46KC4uLmUpPT5mLmluKC4uLmUpLG92ZXJyaWRlOmEuc3ltYm9scy5vdmVycmlkZSxyZWY6KC4uLmUpPT5mLmNyZWF0ZSguLi5lKSx0eXBlcygpe2NvbnN0IGU9e307Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdHlwZXMpZVt0XT10aGlzW3RdKCk7Zm9yKGNvbnN0IHQgaW4gcC5hbGlhc2VzKWVbdF09dGhpc1t0XSgpO3JldHVybiBlfX0scC5hc3NlcnQ9ZnVuY3Rpb24oZSx0LHIscyl7Y29uc3Qgbz1zWzBdaW5zdGFuY2VvZiBFcnJvcnx8XCJzdHJpbmdcIj09dHlwZW9mIHNbMF0/c1swXTpudWxsLGk9bz9zWzFdOnNbMF0sYz10LnZhbGlkYXRlKGUsYS5wcmVmZXJlbmNlcyh7ZXJyb3JzOntzdGFjazohMH19LGl8fHt9KSk7bGV0IHU9Yy5lcnJvcjtpZighdSlyZXR1cm4gYy52YWx1ZTtpZihvIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgbztjb25zdCBmPXImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHUuYW5ub3RhdGU/dS5hbm5vdGF0ZSgpOnUubWVzc2FnZTt0aHJvdyB1IGluc3RhbmNlb2YgbC5WYWxpZGF0aW9uRXJyb3I9PSExJiYodT1uKHUpKSx1Lm1lc3NhZ2U9bz9cIlwiLmNvbmNhdChvLFwiIFwiKS5jb25jYXQoZik6Zix1fSxwLmdlbmVyYXRlPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gcyhlLFwiTXVzdCBiZSBpbnZva2VkIG9uIGEgSm9pIGluc3RhbmNlLlwiKSx0LiRfcm9vdD1lLHQuX2RlZmluaXRpb24uYXJncyYmci5sZW5ndGg/dC5fZGVmaW5pdGlvbi5hcmdzKHQsLi4ucik6dH0scC5leHBhbmRFeHRlbnNpb249ZnVuY3Rpb24oZSx0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50eXBlKXJldHVybltlXTtjb25zdCByPVtdO2Zvcihjb25zdCBzIG9mIHQuX3R5cGVzKWlmKGUudHlwZS50ZXN0KHMpKXtjb25zdCBuPU9iamVjdC5hc3NpZ24oe30sZSk7bi50eXBlPXMsbi5iYXNlPXRbc10oKSxyLnB1c2gobil9cmV0dXJuIHJ9LGUuZXhwb3J0cz1wLnJvb3QoKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyOCk7ZS5leHBvcnRzPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoZS5maWx0ZXIoZT0+XCJcIiE9PWUpLm1hcChlPT5cInN0cmluZ1wiPT10eXBlb2YgZT9lOmUgaW5zdGFuY2VvZiBFcnJvcj9lLm1lc3NhZ2U6cyhlKSkuam9pbihcIiBcIil8fFwiVW5rbm93biBlcnJvclwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSYmRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyx0LmFzc2VydCl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e307dD1lLmV4cG9ydHM9e2FycmF5OkFycmF5LnByb3RvdHlwZSxidWZmZXI6ITEsZGF0ZTpEYXRlLnByb3RvdHlwZSxlcnJvcjpFcnJvci5wcm90b3R5cGUsZ2VuZXJpYzpPYmplY3QucHJvdG90eXBlLG1hcDpNYXAucHJvdG90eXBlLHByb21pc2U6UHJvbWlzZS5wcm90b3R5cGUscmVnZXg6UmVnRXhwLnByb3RvdHlwZSxzZXQ6U2V0LnByb3RvdHlwZSx3ZWFrTWFwOldlYWtNYXAucHJvdG90eXBlLHdlYWtTZXQ6V2Vha1NldC5wcm90b3R5cGV9LHMudHlwZU1hcD1uZXcgTWFwKFtbXCJbb2JqZWN0IEVycm9yXVwiLHQuZXJyb3JdLFtcIltvYmplY3QgTWFwXVwiLHQubWFwXSxbXCJbb2JqZWN0IFByb21pc2VdXCIsdC5wcm9taXNlXSxbXCJbb2JqZWN0IFNldF1cIix0LnNldF0sW1wiW29iamVjdCBXZWFrTWFwXVwiLHQud2Vha01hcF0sW1wiW29iamVjdCBXZWFrU2V0XVwiLHQud2Vha1NldF1dKSx0LmdldEludGVybmFsUHJvdG89ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gdC5hcnJheTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdC5kYXRlO2lmKGUgaW5zdGFuY2VvZiBSZWdFeHApcmV0dXJuIHQucmVnZXg7aWYoZSBpbnN0YW5jZW9mIEVycm9yKXJldHVybiB0LmVycm9yO2NvbnN0IHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO3JldHVybiBzLnR5cGVNYXAuZ2V0KHIpfHx0LmdlbmVyaWN9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5rZXlzPWZ1bmN0aW9uKGUsdD17fSl7cmV0dXJuITEhPT10LnN5bWJvbHM/UmVmbGVjdC5vd25LZXlzKGUpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDEpLGE9e21heDoxZTMsc3VwcG9ydGVkOm5ldyBTZXQoW1widW5kZWZpbmVkXCIsXCJib29sZWFuXCIsXCJudW1iZXJcIixcInN0cmluZ1wiXSl9O3QucHJvdmlkZXI9e3Byb3Zpc2lvbjplPT5uZXcgYS5DYWNoZShlKX0sYS5DYWNoZT1jbGFzc3tjb25zdHJ1Y3RvcihlPXt9KXtvLmFzc2VydE9wdGlvbnMoZSxbXCJtYXhcIl0pLHModm9pZCAwPT09ZS5tYXh8fGUubWF4JiZlLm1heD4wJiZpc0Zpbml0ZShlLm1heCksXCJJbnZhbGlkIG1heCBjYWNoZSBzaXplXCIpLHRoaXMuX21heD1lLm1heHx8YS5tYXgsdGhpcy5fbWFwPW5ldyBNYXAsdGhpcy5fbGlzdD1uZXcgYS5MaXN0fWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9c2V0KGUsdCl7aWYobnVsbCE9PWUmJiFhLnN1cHBvcnRlZC5oYXModHlwZW9mIGUpKXJldHVybjtsZXQgcj10aGlzLl9tYXAuZ2V0KGUpO2lmKHIpcmV0dXJuIHIudmFsdWU9dCx2b2lkIHRoaXMuX2xpc3QuZmlyc3Qocik7cj10aGlzLl9saXN0LnVuc2hpZnQoe2tleTplLHZhbHVlOnR9KSx0aGlzLl9tYXAuc2V0KGUsciksdGhpcy5fY29tcGFjdCgpfWdldChlKXtjb25zdCB0PXRoaXMuX21hcC5nZXQoZSk7aWYodClyZXR1cm4gdGhpcy5fbGlzdC5maXJzdCh0KSxuKHQudmFsdWUpfV9jb21wYWN0KCl7aWYodGhpcy5fbWFwLnNpemU+dGhpcy5fbWF4KXtjb25zdCBlPXRoaXMuX2xpc3QucG9wKCk7dGhpcy5fbWFwLmRlbGV0ZShlLmtleSl9fX0sYS5MaXN0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy50YWlsPW51bGwsdGhpcy5oZWFkPW51bGx9dW5zaGlmdChlKXtyZXR1cm4gZS5uZXh0PW51bGwsZS5wcmV2PXRoaXMuaGVhZCx0aGlzLmhlYWQmJih0aGlzLmhlYWQubmV4dD1lKSx0aGlzLmhlYWQ9ZSx0aGlzLnRhaWx8fCh0aGlzLnRhaWw9ZSksZX1maXJzdChlKXtlIT09dGhpcy5oZWFkJiYodGhpcy5fcmVtb3ZlKGUpLHRoaXMudW5zaGlmdChlKSl9cG9wKCl7cmV0dXJuIHRoaXMuX3JlbW92ZSh0aGlzLnRhaWwpfV9yZW1vdmUoZSl7Y29uc3R7bmV4dDp0LHByZXY6cn09ZTtyZXR1cm4gdC5wcmV2PXIsciYmKHIubmV4dD10KSxlPT09dGhpcy50YWlsJiYodGhpcy50YWlsPXQpLGUucHJldj1udWxsLGUubmV4dD1udWxsLGV9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigxMSksbj17fTtuLndyYXA9cy5zdHJpbmcoKS5taW4oMSkubWF4KDIpLmFsbG93KCExKSx0LnByZWZlcmVuY2VzPXMub2JqZWN0KHthbGxvd1Vua25vd246cy5ib29sZWFuKCksYWJvcnRFYXJseTpzLmJvb2xlYW4oKSxjYWNoZTpzLmJvb2xlYW4oKSxjb250ZXh0OnMub2JqZWN0KCksY29udmVydDpzLmJvb2xlYW4oKSxkYXRlRm9ybWF0OnMudmFsaWQoXCJkYXRlXCIsXCJpc29cIixcInN0cmluZ1wiLFwidGltZVwiLFwidXRjXCIpLGRlYnVnOnMuYm9vbGVhbigpLGVycm9yczp7ZXNjYXBlSHRtbDpzLmJvb2xlYW4oKSxsYWJlbDpzLnZhbGlkKFwicGF0aFwiLFwia2V5XCIsITEpLGxhbmd1YWdlOltzLnN0cmluZygpLHMub2JqZWN0KCkucmVmKCldLHJlbmRlcjpzLmJvb2xlYW4oKSxzdGFjazpzLmJvb2xlYW4oKSx3cmFwOntsYWJlbDpuLndyYXAsYXJyYXk6bi53cmFwfX0sZXh0ZXJuYWxzOnMuYm9vbGVhbigpLG1lc3NhZ2VzOnMub2JqZWN0KCksbm9EZWZhdWx0czpzLmJvb2xlYW4oKSxub25FbnVtZXJhYmxlczpzLmJvb2xlYW4oKSxwcmVzZW5jZTpzLnZhbGlkKFwicmVxdWlyZWRcIixcIm9wdGlvbmFsXCIsXCJmb3JiaWRkZW5cIiksc2tpcEZ1bmN0aW9uczpzLmJvb2xlYW4oKSxzdHJpcFVua25vd246cy5vYmplY3Qoe2FycmF5czpzLmJvb2xlYW4oKSxvYmplY3RzOnMuYm9vbGVhbigpfSkub3IoXCJhcnJheXNcIixcIm9iamVjdHNcIikuYWxsb3coITAsITEpLHdhcm5pbmdzOnMuYm9vbGVhbigpfSkuc3RyaWN0KCksbi5uYW1lUng9L15bYS16QS1aMC05XVxcdyokLyxuLnJ1bGU9cy5vYmplY3Qoe2FsaWFzOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpLnBhdHRlcm4obi5uYW1lUngpKS5zaW5nbGUoKSxhcmdzOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpLHMub2JqZWN0KHtuYW1lOnMuc3RyaW5nKCkucGF0dGVybihuLm5hbWVSeCkucmVxdWlyZWQoKSxyZWY6cy5ib29sZWFuKCksYXNzZXJ0OnMuYWx0ZXJuYXRpdmVzKFtzLmZ1bmN0aW9uKCkscy5vYmplY3QoKS5zY2hlbWEoKV0pLmNvbmRpdGlvbmFsKFwicmVmXCIse2lzOiEwLHRoZW46cy5yZXF1aXJlZCgpfSksbm9ybWFsaXplOnMuZnVuY3Rpb24oKSxtZXNzYWdlOnMuc3RyaW5nKCkud2hlbihcImFzc2VydFwiLHtpczpzLmZ1bmN0aW9uKCksdGhlbjpzLnJlcXVpcmVkKCl9KX0pKSxjb252ZXJ0OnMuYm9vbGVhbigpLG1hbmlmZXN0OnMuYm9vbGVhbigpLG1ldGhvZDpzLmZ1bmN0aW9uKCkuYWxsb3coITEpLG11bHRpOnMuYm9vbGVhbigpLHZhbGlkYXRlOnMuZnVuY3Rpb24oKX0pLHQuZXh0ZW5zaW9uPXMub2JqZWN0KHt0eXBlOnMuYWx0ZXJuYXRpdmVzKFtzLnN0cmluZygpLHMub2JqZWN0KCkucmVnZXgoKV0pLnJlcXVpcmVkKCksYXJnczpzLmZ1bmN0aW9uKCksYmFzZTpzLm9iamVjdCgpLnNjaGVtYSgpLndoZW4oXCJ0eXBlXCIse2lzOnMub2JqZWN0KCkucmVnZXgoKSx0aGVuOnMuZm9yYmlkZGVuKCl9KSxjb2VyY2U6W3MuZnVuY3Rpb24oKS5tYXhBcml0eSgzKSxzLm9iamVjdCh7bWV0aG9kOnMuZnVuY3Rpb24oKS5tYXhBcml0eSgzKS5yZXF1aXJlZCgpLGZyb206cy5hcnJheSgpLml0ZW1zKHMuc3RyaW5nKCkpLnNpbmdsZSgpfSldLGZsYWdzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLm9iamVjdCh7c2V0dGVyOnMuc3RyaW5nKCksZGVmYXVsdDpzLmFueSgpfSkpLG1hbmlmZXN0OntidWlsZDpzLmZ1bmN0aW9uKCkuYXJpdHkoMil9LG1lc3NhZ2VzOltzLm9iamVjdCgpLHMuc3RyaW5nKCldLG1vZGlmaWVyczpzLm9iamVjdCgpLnBhdHRlcm4obi5uYW1lUngscy5mdW5jdGlvbigpLm1pbkFyaXR5KDEpLm1heEFyaXR5KDIpKSxvdmVycmlkZXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMuZnVuY3Rpb24oKSkscHJlcGFyZTpzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykscmVidWlsZDpzLmZ1bmN0aW9uKCkuYXJpdHkoMSkscnVsZXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LG4ucnVsZSksdGVybXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMub2JqZWN0KHtpbml0OnMuYXJyYXkoKS5hbGxvdyhudWxsKS5yZXF1aXJlZCgpLG1hbmlmZXN0OnMub2JqZWN0KCkucGF0dGVybigvLisvLFtzLnZhbGlkKFwic2NoZW1hXCIsXCJzaW5nbGVcIikscy5vYmplY3Qoe21hcHBlZDpzLm9iamVjdCh7ZnJvbTpzLnN0cmluZygpLnJlcXVpcmVkKCksdG86cy5zdHJpbmcoKS5yZXF1aXJlZCgpfSkucmVxdWlyZWQoKX0pXSl9KSksdmFsaWRhdGU6cy5mdW5jdGlvbigpLm1heEFyaXR5KDMpfSkuc3RyaWN0KCksdC5leHRlbnNpb25zPXMuYXJyYXkoKS5pdGVtcyhzLm9iamVjdCgpLHMuZnVuY3Rpb24oKS5hcml0eSgxKSkuc3RyaWN0KCksbi5kZXNjPXtidWZmZXI6cy5vYmplY3Qoe2J1ZmZlcjpzLnN0cmluZygpfSksZnVuYzpzLm9iamVjdCh7ZnVuY3Rpb246cy5mdW5jdGlvbigpLnJlcXVpcmVkKCksb3B0aW9uczp7bGl0ZXJhbDohMH19KSxvdmVycmlkZTpzLm9iamVjdCh7b3ZlcnJpZGU6ITB9KSxyZWY6cy5vYmplY3Qoe3JlZjpzLm9iamVjdCh7dHlwZTpzLnZhbGlkKFwidmFsdWVcIixcImdsb2JhbFwiLFwibG9jYWxcIikscGF0aDpzLmFycmF5KCkucmVxdWlyZWQoKSxzZXBhcmF0b3I6cy5zdHJpbmcoKS5sZW5ndGgoMSkuYWxsb3coITEpLGFuY2VzdG9yOnMubnVtYmVyKCkubWluKDApLmludGVnZXIoKS5hbGxvdyhcInJvb3RcIiksbWFwOnMuYXJyYXkoKS5pdGVtcyhzLmFycmF5KCkubGVuZ3RoKDIpKS5taW4oMSksYWRqdXN0OnMuZnVuY3Rpb24oKSxpdGVyYWJsZXM6cy5ib29sZWFuKCksaW46cy5ib29sZWFuKCl9KS5yZXF1aXJlZCgpfSkscmVnZXg6cy5vYmplY3Qoe3JlZ2V4OnMuc3RyaW5nKCkubWluKDMpfSksc3BlY2lhbDpzLm9iamVjdCh7c3BlY2lhbDpzLnZhbGlkKFwiZGVlcFwiKS5yZXF1aXJlZCgpfSksdGVtcGxhdGU6cy5vYmplY3Qoe3RlbXBsYXRlOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxvcHRpb25zOnMub2JqZWN0KCl9KSx2YWx1ZTpzLm9iamVjdCh7dmFsdWU6cy5hbHRlcm5hdGl2ZXMoW3Mub2JqZWN0KCkscy5hcnJheSgpXSkucmVxdWlyZWQoKX0pfSxuLmRlc2MuZW50aXR5PXMuYWx0ZXJuYXRpdmVzKFtzLmFycmF5KCkuaXRlbXMocy5saW5rKFwiLi4uXCIpKSxzLmJvb2xlYW4oKSxzLmZ1bmN0aW9uKCkscy5udW1iZXIoKSxzLnN0cmluZygpLG4uZGVzYy5idWZmZXIsbi5kZXNjLmZ1bmMsbi5kZXNjLnJlZixuLmRlc2MucmVnZXgsbi5kZXNjLnNwZWNpYWwsbi5kZXNjLnRlbXBsYXRlLG4uZGVzYy52YWx1ZSxzLmxpbmsoXCIvXCIpXSksbi5kZXNjLnZhbHVlcz1zLmFycmF5KCkuaXRlbXMobnVsbCxzLmJvb2xlYW4oKSxzLmZ1bmN0aW9uKCkscy5udW1iZXIoKS5hbGxvdygxLzAsLTEvMCkscy5zdHJpbmcoKS5hbGxvdyhcIlwiKSxzLnN5bWJvbCgpLG4uZGVzYy5idWZmZXIsbi5kZXNjLmZ1bmMsbi5kZXNjLm92ZXJyaWRlLG4uZGVzYy5yZWYsbi5kZXNjLnJlZ2V4LG4uZGVzYy50ZW1wbGF0ZSxuLmRlc2MudmFsdWUpLG4uZGVzYy5tZXNzYWdlcz1zLm9iamVjdCgpLnBhdHRlcm4oLy4rLyxbcy5zdHJpbmcoKSxuLmRlc2MudGVtcGxhdGUscy5vYmplY3QoKS5wYXR0ZXJuKC8uKy8sW3Muc3RyaW5nKCksbi5kZXNjLnRlbXBsYXRlXSldKSx0LmRlc2NyaXB0aW9uPXMub2JqZWN0KHt0eXBlOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxmbGFnczpzLm9iamVjdCh7Y2FzdDpzLnN0cmluZygpLGRlZmF1bHQ6cy5hbnkoKSxkZXNjcmlwdGlvbjpzLnN0cmluZygpLGVtcHR5OnMubGluayhcIi9cIiksZmFpbG92ZXI6bi5kZXNjLmVudGl0eSxpZDpzLnN0cmluZygpLGxhYmVsOnMuc3RyaW5nKCksb25seTohMCxwcmVzZW5jZTpbXCJvcHRpb25hbFwiLFwicmVxdWlyZWRcIixcImZvcmJpZGRlblwiXSxyZXN1bHQ6W1wicmF3XCIsXCJzdHJpcFwiXSxzdHJpcDpzLmJvb2xlYW4oKSx1bml0OnMuc3RyaW5nKCl9KS51bmtub3duKCkscHJlZmVyZW5jZXM6e2FsbG93VW5rbm93bjpzLmJvb2xlYW4oKSxhYm9ydEVhcmx5OnMuYm9vbGVhbigpLGNhY2hlOnMuYm9vbGVhbigpLGNvbnZlcnQ6cy5ib29sZWFuKCksZGF0ZUZvcm1hdDpbXCJkYXRlXCIsXCJpc29cIixcInN0cmluZ1wiLFwidGltZVwiLFwidXRjXCJdLGVycm9yczp7ZXNjYXBlSHRtbDpzLmJvb2xlYW4oKSxsYWJlbDpbXCJwYXRoXCIsXCJrZXlcIl0sbGFuZ3VhZ2U6W3Muc3RyaW5nKCksbi5kZXNjLnJlZl0sd3JhcDp7bGFiZWw6bi53cmFwLGFycmF5Om4ud3JhcH19LGV4dGVybmFsczpzLmJvb2xlYW4oKSxtZXNzYWdlczpuLmRlc2MubWVzc2FnZXMsbm9EZWZhdWx0czpzLmJvb2xlYW4oKSxub25FbnVtZXJhYmxlczpzLmJvb2xlYW4oKSxwcmVzZW5jZTpbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXSxza2lwRnVuY3Rpb25zOnMuYm9vbGVhbigpLHN0cmlwVW5rbm93bjpzLm9iamVjdCh7YXJyYXlzOnMuYm9vbGVhbigpLG9iamVjdHM6cy5ib29sZWFuKCl9KS5vcihcImFycmF5c1wiLFwib2JqZWN0c1wiKS5hbGxvdyghMCwhMSksd2FybmluZ3M6cy5ib29sZWFuKCl9LGFsbG93Om4uZGVzYy52YWx1ZXMsaW52YWxpZDpuLmRlc2MudmFsdWVzLHJ1bGVzOnMuYXJyYXkoKS5taW4oMSkuaXRlbXMoe25hbWU6cy5zdHJpbmcoKS5yZXF1aXJlZCgpLGFyZ3M6cy5vYmplY3QoKS5taW4oMSksa2VlcDpzLmJvb2xlYW4oKSxtZXNzYWdlOltzLnN0cmluZygpLG4uZGVzYy5tZXNzYWdlc10sd2FybjpzLmJvb2xlYW4oKX0pLGtleXM6cy5vYmplY3QoKS5wYXR0ZXJuKC8uKi8scy5saW5rKFwiL1wiKSksbGluazpuLmRlc2MucmVmfSkucGF0dGVybigvXlthLXpdXFx3KiQvLHMuYW55KCkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMSksYT1yKDkpLGk9e307dC50eXBlPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksbD1uKHIpLGM9ZS5fYXNzaWduKE9iamVjdC5jcmVhdGUobCkpLHU9T2JqZWN0LmFzc2lnbih7fSx0KTtkZWxldGUgdS5iYXNlLGwuX2RlZmluaXRpb249dTtjb25zdCBmPXIuX2RlZmluaXRpb258fHt9O3UubWVzc2FnZXM9YS5tZXJnZShmLm1lc3NhZ2VzLHUubWVzc2FnZXMpLHUucHJvcGVydGllcz1PYmplY3QuYXNzaWduKHt9LGYucHJvcGVydGllcyx1LnByb3BlcnRpZXMpLGMudHlwZT11LnR5cGUsdS5mbGFncz1PYmplY3QuYXNzaWduKHt9LGYuZmxhZ3MsdS5mbGFncyk7Y29uc3QgbT1PYmplY3QuYXNzaWduKHt9LGYudGVybXMpO2lmKHUudGVybXMpZm9yKGNvbnN0IGUgaW4gdS50ZXJtcyl7Y29uc3QgdD11LnRlcm1zW2VdO3Modm9pZCAwPT09Yy4kX3Rlcm1zW2VdLFwiSW52YWxpZCB0ZXJtIG92ZXJyaWRlIGZvclwiLHUudHlwZSxlKSxjLiRfdGVybXNbZV09dC5pbml0LG1bZV09dH11LnRlcm1zPW0sdS5hcmdzfHwodS5hcmdzPWYuYXJncyksdS5wcmVwYXJlPWkucHJlcGFyZSh1LnByZXBhcmUsZi5wcmVwYXJlKSx1LmNvZXJjZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuY29lcmNlJiYodS5jb2VyY2U9e21ldGhvZDp1LmNvZXJjZX0pLHUuY29lcmNlLmZyb20mJiFBcnJheS5pc0FycmF5KHUuY29lcmNlLmZyb20pJiYodS5jb2VyY2U9e21ldGhvZDp1LmNvZXJjZS5tZXRob2QsZnJvbTpbXS5jb25jYXQodS5jb2VyY2UuZnJvbSl9KSksdS5jb2VyY2U9aS5jb2VyY2UodS5jb2VyY2UsZi5jb2VyY2UpLHUudmFsaWRhdGU9aS52YWxpZGF0ZSh1LnZhbGlkYXRlLGYudmFsaWRhdGUpO2NvbnN0IGg9T2JqZWN0LmFzc2lnbih7fSxmLnJ1bGVzKTtpZih1LnJ1bGVzKWZvcihjb25zdCBlIGluIHUucnVsZXMpe2NvbnN0IHQ9dS5ydWxlc1tlXTtzKFwib2JqZWN0XCI9PXR5cGVvZiB0LFwiSW52YWxpZCBydWxlIGRlZmluaXRpb24gZm9yXCIsdS50eXBlLGUpO2xldCByPXQubWV0aG9kO2lmKHZvaWQgMD09PXImJihyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKGUpfSksciYmKHMoIWxbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpLGxbZV09cikscyghaFtlXSxcIlJ1bGUgY29uZmxpY3QgaW5cIix1LnR5cGUsZSksaFtlXT10LHQuYWxpYXMpe2NvbnN0IGU9W10uY29uY2F0KHQuYWxpYXMpO2Zvcihjb25zdCByIG9mIGUpbFtyXT10Lm1ldGhvZH10LmFyZ3MmJih0LmFyZ3NCeU5hbWU9bmV3IE1hcCx0LmFyZ3M9dC5hcmdzLm1hcChlPT4oXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtuYW1lOmV9KSxzKCF0LmFyZ3NCeU5hbWUuaGFzKGUubmFtZSksXCJEdXBsaWNhdGVkIGFyZ3VtZW50IG5hbWVcIixlLm5hbWUpLG8uaXNTY2hlbWEoZS5hc3NlcnQpJiYoZS5hc3NlcnQ9ZS5hc3NlcnQuc3RyaWN0KCkubGFiZWwoZS5uYW1lKSksdC5hcmdzQnlOYW1lLnNldChlLm5hbWUsZSksZSkpKX11LnJ1bGVzPWg7Y29uc3QgZD1PYmplY3QuYXNzaWduKHt9LGYubW9kaWZpZXJzKTtpZih1Lm1vZGlmaWVycylmb3IoY29uc3QgZSBpbiB1Lm1vZGlmaWVycyl7cyghbFtlXSxcIlJ1bGUgY29uZmxpY3QgaW5cIix1LnR5cGUsZSk7Y29uc3QgdD11Lm1vZGlmaWVyc1tlXTtzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQsXCJJbnZhbGlkIG1vZGlmaWVyIGRlZmluaXRpb24gZm9yXCIsdS50eXBlLGUpO2NvbnN0IHI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucnVsZSh7W2VdOnR9KX07bFtlXT1yLGRbZV09dH1pZih1Lm1vZGlmaWVycz1kLHUub3ZlcnJpZGVzKXtsLl9zdXBlcj1yLGMuJF9zdXBlcj17fTtmb3IoY29uc3QgZSBpbiB1Lm92ZXJyaWRlcylzKHJbZV0sXCJDYW5ub3Qgb3ZlcnJpZGUgbWlzc2luZ1wiLGUpLGMuJF9zdXBlcltlXT1yW2VdLmJpbmQoYyk7T2JqZWN0LmFzc2lnbihsLHUub3ZlcnJpZGVzKX11LmNhc3Q9T2JqZWN0LmFzc2lnbih7fSxmLmNhc3QsdS5jYXN0KTtjb25zdCBwPU9iamVjdC5hc3NpZ24oe30sZi5tYW5pZmVzdCx1Lm1hbmlmZXN0KTtyZXR1cm4gcC5idWlsZD1pLmJ1aWxkKHUubWFuaWZlc3QmJnUubWFuaWZlc3QuYnVpbGQsZi5tYW5pZmVzdCYmZi5tYW5pZmVzdC5idWlsZCksdS5tYW5pZmVzdD1wLHUucmVidWlsZD1pLnJlYnVpbGQodS5yZWJ1aWxkLGYucmVidWlsZCksY30saS5idWlsZD1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZ0P2Z1bmN0aW9uKHIscyl7cmV0dXJuIHQoZShyLHMpLHMpfTplfHx0fSxpLmNvZXJjZT1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZ0P3tmcm9tOmUuZnJvbSYmdC5mcm9tP1suLi5uZXcgU2V0KFsuLi5lLmZyb20sLi4udC5mcm9tXSldOm51bGwsbWV0aG9kKHIscyl7bGV0IG47aWYoKCF0LmZyb218fHQuZnJvbS5pbmNsdWRlcyh0eXBlb2YgcikpJiYobj10Lm1ldGhvZChyLHMpLG4pKXtpZihuLmVycm9yc3x8dm9pZCAwPT09bi52YWx1ZSlyZXR1cm4gbjtyPW4udmFsdWV9aWYoIWUuZnJvbXx8ZS5mcm9tLmluY2x1ZGVzKHR5cGVvZiByKSl7Y29uc3QgdD1lLm1ldGhvZChyLHMpO2lmKHQpcmV0dXJuIHR9cmV0dXJuIG59fTplfHx0fSxpLnByZXBhcmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe2NvbnN0IG49ZShyLHMpO2lmKG4pe2lmKG4uZXJyb3JzfHx2b2lkIDA9PT1uLnZhbHVlKXJldHVybiBuO3I9bi52YWx1ZX1yZXR1cm4gdChyLHMpfHxufTplfHx0fSxpLnJlYnVpbGQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyKXt0KHIpLGUocil9OmV8fHR9LGkudmFsaWRhdGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe2NvbnN0IG49dChyLHMpO2lmKG4pe2lmKG4uZXJyb3JzJiYoIUFycmF5LmlzQXJyYXkobi5lcnJvcnMpfHxuLmVycm9ycy5sZW5ndGgpKXJldHVybiBuO3I9bi52YWx1ZX1yZXR1cm4gZShyLHMpfHxufTplfHx0fX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTQpLGE9e307ZS5leHBvcnRzPWEubWVyZ2U9ZnVuY3Rpb24oZSx0LHIpe2lmKHMoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHRhcmdldCB2YWx1ZTogbXVzdCBiZSBhbiBvYmplY3RcIikscyhudWxsPT10fHxcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc291cmNlIHZhbHVlOiBtdXN0IGJlIG51bGwsIHVuZGVmaW5lZCwgb3IgYW4gb2JqZWN0XCIpLCF0KXJldHVybiBlO2lmKHI9T2JqZWN0LmFzc2lnbih7bnVsbE92ZXJyaWRlOiEwLG1lcmdlQXJyYXlzOiEwfSxyKSxBcnJheS5pc0FycmF5KHQpKXtzKEFycmF5LmlzQXJyYXkoZSksXCJDYW5ub3QgbWVyZ2UgYXJyYXkgb250byBhbiBvYmplY3RcIiksci5tZXJnZUFycmF5c3x8KGUubGVuZ3RoPTApO2ZvcihsZXQgcz0wO3M8dC5sZW5ndGg7KytzKWUucHVzaChuKHRbc10se3N5bWJvbHM6ci5zeW1ib2xzfSkpO3JldHVybiBlfWNvbnN0IGk9by5rZXlzKHQscik7Zm9yKGxldCBzPTA7czxpLmxlbmd0aDsrK3Mpe2NvbnN0IG89aVtzXTtpZihcIl9fcHJvdG9fX1wiPT09b3x8IU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LG8pKWNvbnRpbnVlO2NvbnN0IGw9dFtvXTtpZihsJiZcIm9iamVjdFwiPT10eXBlb2YgbCl7aWYoZVtvXT09PWwpY29udGludWU7IWVbb118fFwib2JqZWN0XCIhPXR5cGVvZiBlW29dfHxBcnJheS5pc0FycmF5KGVbb10pIT09QXJyYXkuaXNBcnJheShsKXx8bCBpbnN0YW5jZW9mIERhdGV8fGwgaW5zdGFuY2VvZiBSZWdFeHA/ZVtvXT1uKGwse3N5bWJvbHM6ci5zeW1ib2xzfSk6YS5tZXJnZShlW29dLGwscil9ZWxzZSBudWxsIT1sP2Vbb109bDpyLm51bGxPdmVycmlkZSYmKGVbb109bCl9cmV0dXJuIGV9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigxMCksbz1yKDEpLGE9e307ZS5leHBvcnRzPWEuVmFsdWVzPWNsYXNze2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5fdmFsdWVzPW5ldyBTZXQoZSksdGhpcy5fcmVmcz1uZXcgU2V0KHQpLHRoaXMuX2xvd2VyY2FzZT1hLmxvd2VyY2FzZXMoZSksdGhpcy5fb3ZlcnJpZGU9ITF9Z2V0IGxlbmd0aCgpe3JldHVybiB0aGlzLl92YWx1ZXMuc2l6ZSt0aGlzLl9yZWZzLnNpemV9YWRkKGUsdCl7by5pc1Jlc29sdmFibGUoZSk/dGhpcy5fcmVmcy5oYXMoZSl8fCh0aGlzLl9yZWZzLmFkZChlKSx0JiZ0LnJlZ2lzdGVyKGUpKTp0aGlzLmhhcyhlLG51bGwsbnVsbCwhMSl8fCh0aGlzLl92YWx1ZXMuYWRkKGUpLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZ0aGlzLl9sb3dlcmNhc2Uuc2V0KGUudG9Mb3dlckNhc2UoKSxlKSl9c3RhdGljIG1lcmdlKGUsdCxyKXtpZihlPWV8fG5ldyBhLlZhbHVlcyx0KXtpZih0Ll9vdmVycmlkZSlyZXR1cm4gdC5jbG9uZSgpO2Zvcihjb25zdCByIG9mWy4uLnQuX3ZhbHVlcywuLi50Ll9yZWZzXSllLmFkZChyKX1pZihyKWZvcihjb25zdCB0IG9mWy4uLnIuX3ZhbHVlcywuLi5yLl9yZWZzXSllLnJlbW92ZSh0KTtyZXR1cm4gZS5sZW5ndGg/ZTpudWxsfXJlbW92ZShlKXtvLmlzUmVzb2x2YWJsZShlKT90aGlzLl9yZWZzLmRlbGV0ZShlKToodGhpcy5fdmFsdWVzLmRlbGV0ZShlKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmdGhpcy5fbG93ZXJjYXNlLmRlbGV0ZShlLnRvTG93ZXJDYXNlKCkpKX1oYXMoZSx0LHIscyl7cmV0dXJuISF0aGlzLmdldChlLHQscixzKX1nZXQoZSx0LHIscyl7aWYoIXRoaXMubGVuZ3RoKXJldHVybiExO2lmKHRoaXMuX3ZhbHVlcy5oYXMoZSkpcmV0dXJue3ZhbHVlOmV9O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlJiZzKXtjb25zdCB0PXRoaXMuX2xvd2VyY2FzZS5nZXQoZS50b0xvd2VyQ2FzZSgpKTtpZih0KXJldHVybnt2YWx1ZTp0fX1pZighdGhpcy5fcmVmcy5zaXplJiZcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4hMTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IoY29uc3QgdCBvZiB0aGlzLl92YWx1ZXMpaWYobih0LGUpKXJldHVybnt2YWx1ZTp0fTtpZih0KWZvcihjb25zdCBvIG9mIHRoaXMuX3JlZnMpe2NvbnN0IGE9by5yZXNvbHZlKGUsdCxyLG51bGwse2luOiEwfSk7aWYodm9pZCAwPT09YSljb250aW51ZTtjb25zdCBpPW8uaW4mJlwib2JqZWN0XCI9PXR5cGVvZiBhP0FycmF5LmlzQXJyYXkoYSk/YTpPYmplY3Qua2V5cyhhKTpbYV07Zm9yKGNvbnN0IHQgb2YgaSlpZih0eXBlb2YgdD09dHlwZW9mIGUpaWYocyYmZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKHQudG9Mb3dlckNhc2UoKT09PWUudG9Mb3dlckNhc2UoKSlyZXR1cm57dmFsdWU6dCxyZWY6b319ZWxzZSBpZihuKHQsZSkpcmV0dXJue3ZhbHVlOnQscmVmOm99fXJldHVybiExfW92ZXJyaWRlKCl7dGhpcy5fb3ZlcnJpZGU9ITB9dmFsdWVzKGUpe2lmKGUmJmUuZGlzcGxheSl7Y29uc3QgZT1bXTtmb3IoY29uc3QgdCBvZlsuLi50aGlzLl92YWx1ZXMsLi4udGhpcy5fcmVmc10pdm9pZCAwIT09dCYmZS5wdXNoKHQpO3JldHVybiBlfXJldHVybiBBcnJheS5mcm9tKFsuLi50aGlzLl92YWx1ZXMsLi4udGhpcy5fcmVmc10pfWNsb25lKCl7Y29uc3QgZT1uZXcgYS5WYWx1ZXModGhpcy5fdmFsdWVzLHRoaXMuX3JlZnMpO3JldHVybiBlLl9vdmVycmlkZT10aGlzLl9vdmVycmlkZSxlfWNvbmNhdChlKXtzKCFlLl9vdmVycmlkZSxcIkNhbm5vdCBjb25jYXQgb3ZlcnJpZGUgc2V0IG9mIHZhbHVlc1wiKTtjb25zdCB0PW5ldyBhLlZhbHVlcyhbLi4udGhpcy5fdmFsdWVzLC4uLmUuX3ZhbHVlc10sWy4uLnRoaXMuX3JlZnMsLi4uZS5fcmVmc10pO3JldHVybiB0Ll9vdmVycmlkZT10aGlzLl9vdmVycmlkZSx0fWRlc2NyaWJlKCl7Y29uc3QgZT1bXTt0aGlzLl9vdmVycmlkZSYmZS5wdXNoKHtvdmVycmlkZTohMH0pO2Zvcihjb25zdCB0IG9mIHRoaXMuX3ZhbHVlcy52YWx1ZXMoKSllLnB1c2godCYmXCJvYmplY3RcIj09dHlwZW9mIHQ/e3ZhbHVlOnR9OnQpO2Zvcihjb25zdCB0IG9mIHRoaXMuX3JlZnMudmFsdWVzKCkpZS5wdXNoKHQuZGVzY3JpYmUoKSk7cmV0dXJuIGV9fSxhLlZhbHVlcy5wcm90b3R5cGVbby5zeW1ib2xzLnZhbHVlc109ITAsYS5WYWx1ZXMucHJvdG90eXBlLnNsaWNlPWEuVmFsdWVzLnByb3RvdHlwZS5jbG9uZSxhLmxvd2VyY2FzZXM9ZnVuY3Rpb24oZSl7Y29uc3QgdD1uZXcgTWFwO2lmKGUpZm9yKGNvbnN0IHIgb2YgZSlcInN0cmluZ1wiPT10eXBlb2YgciYmdC5zZXQoci50b0xvd2VyQ2FzZSgpLHIpO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cig0Myksbj1yKDApLG89cigyKSxhPXIoNDQpLGk9cigzKSxsPXIoMSksYz1yKDgpLHU9cig0KSxmPXIoNSksbT1yKDcpLGg9e3JlbmFtZURlZmF1bHRzOnthbGlhczohMSxtdWx0aXBsZTohMSxvdmVycmlkZTohMX19O2UuZXhwb3J0cz1pLmV4dGVuZCh7dHlwZTpcIl9rZXlzXCIscHJvcGVydGllczp7dHlwZW9mOlwib2JqZWN0XCJ9LGZsYWdzOnt1bmtub3duOntkZWZhdWx0OiExfX0sdGVybXM6e2RlcGVuZGVuY2llczp7aW5pdDpudWxsfSxrZXlzOntpbml0Om51bGwsbWFuaWZlc3Q6e21hcHBlZDp7ZnJvbTpcInNjaGVtYVwiLHRvOlwia2V5XCJ9fX0scGF0dGVybnM6e2luaXQ6bnVsbH0scmVuYW1lczp7aW5pdDpudWxsfX0sYXJnczooZSx0KT0+ZS5rZXlzKHQpLHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIsc3RhdGU6cyxwcmVmczpufSl7aWYoIWV8fHR5cGVvZiBlIT09dC4kX3Byb3BlcnR5KFwidHlwZW9mXCIpfHxBcnJheS5pc0FycmF5KGUpKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwib2JqZWN0LmJhc2VcIix7dHlwZTp0LiRfcHJvcGVydHkoXCJ0eXBlb2ZcIil9KX07aWYoISh0LiRfdGVybXMucmVuYW1lc3x8dC4kX3Rlcm1zLmRlcGVuZGVuY2llc3x8dC4kX3Rlcm1zLmtleXN8fHQuJF90ZXJtcy5wYXR0ZXJuc3x8dC4kX3Rlcm1zLmV4dGVybmFscykpcmV0dXJuO2U9aC5jbG9uZShlLG4pO2NvbnN0IG89W107aWYodC4kX3Rlcm1zLnJlbmFtZXMmJiFoLnJlbmFtZSh0LGUscyxuLG8pKXJldHVybnt2YWx1ZTplLGVycm9yczpvfTtpZighdC4kX3Rlcm1zLmtleXMmJiF0LiRfdGVybXMucGF0dGVybnMmJiF0LiRfdGVybXMuZGVwZW5kZW5jaWVzKXJldHVybnt2YWx1ZTplLGVycm9yczpvfTtjb25zdCBhPW5ldyBTZXQoT2JqZWN0LmtleXMoZSkpO2lmKHQuJF90ZXJtcy5rZXlzKXtjb25zdCByPVtlLC4uLnMuYW5jZXN0b3JzXTtmb3IoY29uc3QgaSBvZiB0LiRfdGVybXMua2V5cyl7Y29uc3QgdD1pLmtleSxsPWVbdF07YS5kZWxldGUodCk7Y29uc3QgYz1zLmxvY2FsaXplKFsuLi5zLnBhdGgsdF0scixpKSx1PWkuc2NoZW1hLiRfdmFsaWRhdGUobCxjLG4pO2lmKHUuZXJyb3JzKXtpZihuLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnUuZXJyb3JzfTtvLnB1c2goLi4udS5lcnJvcnMpfWVsc2VcInN0cmlwXCI9PT1pLnNjaGVtYS5fZmxhZ3MucmVzdWx0fHx2b2lkIDA9PT11LnZhbHVlJiZ2b2lkIDAhPT1sP2RlbGV0ZSBlW3RdOnZvaWQgMCE9PXUudmFsdWUmJihlW3RdPXUudmFsdWUpfX1pZihhLnNpemV8fHQuX2ZsYWdzLl9oYXNQYXR0ZXJuTWF0Y2gpe2NvbnN0IHI9aC51bmtub3duKHQsZSxhLG8scyxuKTtpZihyKXJldHVybiByfWlmKHQuJF90ZXJtcy5kZXBlbmRlbmNpZXMpZm9yKGNvbnN0IHIgb2YgdC4kX3Rlcm1zLmRlcGVuZGVuY2llcyl7aWYoci5rZXkmJnZvaWQgMD09PXIua2V5LnJlc29sdmUoZSxzLG4sbnVsbCx7c2hhZG93OiExfSkpY29udGludWU7Y29uc3QgYT1oLmRlcGVuZGVuY2llc1tyLnJlbF0odCxyLGUscyxuKTtpZihhKXtjb25zdCByPXQuJF9jcmVhdGVFcnJvcihhLmNvZGUsZSxhLmNvbnRleHQscyxuKTtpZihuLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnJ9O28ucHVzaChyKX19cmV0dXJue3ZhbHVlOmUsZXJyb3JzOm99fSxydWxlczp7YW5kOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwiYW5kXCIpLGguZGVwZW5kZW5jeSh0aGlzLFwiYW5kXCIsbnVsbCxlKX19LGFwcGVuZDp7bWV0aG9kKGUpe3JldHVybiBudWxsPT1lfHwwPT09T2JqZWN0LmtleXMoZSkubGVuZ3RoP3RoaXM6dGhpcy5rZXlzKGUpfX0sYXNzZXJ0OnttZXRob2QoZSx0LHIpe20uaXNUZW1wbGF0ZShlKXx8KGU9Yy5yZWYoZSkpLG4odm9pZCAwPT09cnx8XCJzdHJpbmdcIj09dHlwZW9mIHIsXCJNZXNzYWdlIG11c3QgYmUgYSBzdHJpbmdcIiksdD10aGlzLiRfY29tcGlsZSh0LHthcHBlbmRQYXRoOiEwfSk7Y29uc3Qgcz10aGlzLiRfYWRkUnVsZSh7bmFtZTpcImFzc2VydFwiLGFyZ3M6e3N1YmplY3Q6ZSxzY2hlbWE6dCxtZXNzYWdlOnJ9fSk7cmV0dXJuIHMuJF9tdXRhdGVSZWdpc3RlcihlKSxzLiRfbXV0YXRlUmVnaXN0ZXIodCksc30sdmFsaWRhdGUoZSx7ZXJyb3I6dCxwcmVmczpyLHN0YXRlOnN9LHtzdWJqZWN0Om4sc2NoZW1hOm8sbWVzc2FnZTphfSl7Y29uc3QgaT1uLnJlc29sdmUoZSxzLHIpLGw9Zi5pc1JlZihuKT9uLmFic29sdXRlKHMpOltdO3JldHVybiBvLiRfbWF0Y2goaSxzLmxvY2FsaXplKGwsW2UsLi4ucy5hbmNlc3RvcnNdLG8pLHIpP2U6dChcIm9iamVjdC5hc3NlcnRcIix7c3ViamVjdDpuLG1lc3NhZ2U6YX0pfSxhcmdzOltcInN1YmplY3RcIixcInNjaGVtYVwiLFwibWVzc2FnZVwiXSxtdWx0aTohMH0saW5zdGFuY2U6e21ldGhvZChlLHQpe3JldHVybiBuKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJjb25zdHJ1Y3RvciBtdXN0IGJlIGEgZnVuY3Rpb25cIiksdD10fHxlLm5hbWUsdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJpbnN0YW5jZVwiLGFyZ3M6e2NvbnN0cnVjdG9yOmUsbmFtZTp0fX0pfSx2YWxpZGF0ZTooZSx0LHtjb25zdHJ1Y3RvcjpyLG5hbWU6c30pPT5lIGluc3RhbmNlb2Ygcj9lOnQuZXJyb3IoXCJvYmplY3QuaW5zdGFuY2VcIix7dHlwZTpzLHZhbHVlOmV9KSxhcmdzOltcImNvbnN0cnVjdG9yXCIsXCJuYW1lXCJdfSxrZXlzOnttZXRob2QoZSl7bih2b2lkIDA9PT1lfHxcIm9iamVjdFwiPT10eXBlb2YgZSxcIk9iamVjdCBzY2hlbWEgbXVzdCBiZSBhIHZhbGlkIG9iamVjdFwiKSxuKCFsLmlzU2NoZW1hKGUpLFwiT2JqZWN0IHNjaGVtYSBjYW5ub3QgYmUgYSBqb2kgc2NoZW1hXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO2lmKGUpaWYoT2JqZWN0LmtleXMoZSkubGVuZ3RoKXt0LiRfdGVybXMua2V5cz10LiRfdGVybXMua2V5cz90LiRfdGVybXMua2V5cy5maWx0ZXIodD0+IWUuaGFzT3duUHJvcGVydHkodC5rZXkpKTpuZXcgaC5LZXlzO2Zvcihjb25zdCByIGluIGUpbC50cnlXaXRoUGF0aCgoKT0+dC4kX3Rlcm1zLmtleXMucHVzaCh7a2V5OnIsc2NoZW1hOnRoaXMuJF9jb21waWxlKGVbcl0pfSkscil9ZWxzZSB0LiRfdGVybXMua2V5cz1uZXcgaC5LZXlzO2Vsc2UgdC4kX3Rlcm1zLmtleXM9bnVsbDtyZXR1cm4gdC4kX211dGF0ZVJlYnVpbGQoKX19LGxlbmd0aDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPVwifSl9LHZhbGlkYXRlOihlLHQse2xpbWl0OnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOm99KT0+bC5jb21wYXJlKE9iamVjdC5rZXlzKGUpLmxlbmd0aCxyLG4pP2U6dC5lcnJvcihcIm9iamVjdC5cIitzLHtsaW1pdDpvLmxpbWl0LHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpsLmxpbWl0LG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclwifV19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPD1cIn0pfX0sbWluOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluXCIsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSxuYW5kOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwibmFuZFwiKSxoLmRlcGVuZGVuY3kodGhpcyxcIm5hbmRcIixudWxsLGUpfX0sb3I6e21ldGhvZCguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJvclwiKSxoLmRlcGVuZGVuY3kodGhpcyxcIm9yXCIsbnVsbCxlKX19LG94b3I6e21ldGhvZCguLi5lKXtyZXR1cm4gaC5kZXBlbmRlbmN5KHRoaXMsXCJveG9yXCIsbnVsbCxlKX19LHBhdHRlcm46e21ldGhvZChlLHQscj17fSl7Y29uc3Qgcz1lIGluc3RhbmNlb2YgUmVnRXhwO3N8fChlPXRoaXMuJF9jb21waWxlKGUse2FwcGVuZFBhdGg6ITB9KSksbih2b2lkIDAhPT10LFwiSW52YWxpZCBydWxlXCIpLGwuYXNzZXJ0T3B0aW9ucyhyLFtcImZhbGx0aHJvdWdoXCIsXCJtYXRjaGVzXCJdKSxzJiZuKCFlLmZsYWdzLmluY2x1ZGVzKFwiZ1wiKSYmIWUuZmxhZ3MuaW5jbHVkZXMoXCJ5XCIpLFwicGF0dGVybiBzaG91bGQgbm90IHVzZSBnbG9iYWwgb3Igc3RpY2t5IG1vZGVcIiksdD10aGlzLiRfY29tcGlsZSh0LHthcHBlbmRQYXRoOiEwfSk7Y29uc3Qgbz10aGlzLmNsb25lKCk7by4kX3Rlcm1zLnBhdHRlcm5zPW8uJF90ZXJtcy5wYXR0ZXJuc3x8W107Y29uc3QgYT17W3M/XCJyZWdleFwiOlwic2NoZW1hXCJdOmUscnVsZTp0fTtyZXR1cm4gci5tYXRjaGVzJiYoYS5tYXRjaGVzPXRoaXMuJF9jb21waWxlKHIubWF0Y2hlcyksXCJhcnJheVwiIT09YS5tYXRjaGVzLnR5cGUmJihhLm1hdGNoZXM9YS5tYXRjaGVzLiRfcm9vdC5hcnJheSgpLml0ZW1zKGEubWF0Y2hlcykpLG8uJF9tdXRhdGVSZWdpc3RlcihhLm1hdGNoZXMpLG8uJF9zZXRGbGFnKFwiX2hhc1BhdHRlcm5NYXRjaFwiLCEwLHtjbG9uZTohMX0pKSxyLmZhbGx0aHJvdWdoJiYoYS5mYWxsdGhyb3VnaD0hMCksby4kX3Rlcm1zLnBhdHRlcm5zLnB1c2goYSksby4kX211dGF0ZVJlZ2lzdGVyKHQpLG99fSxyZWY6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInJlZlwiKX0sdmFsaWRhdGU6KGUsdCk9PmYuaXNSZWYoZSk/ZTp0LmVycm9yKFwib2JqZWN0LnJlZlR5cGVcIix7dmFsdWU6ZX0pfSxyZWdleDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwicmVnZXhcIil9LHZhbGlkYXRlOihlLHQpPT5lIGluc3RhbmNlb2YgUmVnRXhwP2U6dC5lcnJvcihcIm9iamVjdC5yZWdleFwiLHt2YWx1ZTplfSl9LHJlbmFtZTp7bWV0aG9kKGUsdCxyPXt9KXtuKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgUmVnRXhwLFwiUmVuYW1lIG1pc3NpbmcgdGhlIGZyb20gYXJndW1lbnRcIiksbihcInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIG0sXCJJbnZhbGlkIHJlbmFtZSB0byBhcmd1bWVudFwiKSxuKHQhPT1lLFwiQ2Fubm90IHJlbmFtZSBrZXkgdG8gc2FtZSBuYW1lOlwiLGUpLGwuYXNzZXJ0T3B0aW9ucyhyLFtcImFsaWFzXCIsXCJpZ25vcmVVbmRlZmluZWRcIixcIm92ZXJyaWRlXCIsXCJtdWx0aXBsZVwiXSk7Y29uc3Qgbz10aGlzLmNsb25lKCk7by4kX3Rlcm1zLnJlbmFtZXM9by4kX3Rlcm1zLnJlbmFtZXN8fFtdO2Zvcihjb25zdCB0IG9mIG8uJF90ZXJtcy5yZW5hbWVzKW4odC5mcm9tIT09ZSxcIkNhbm5vdCByZW5hbWUgdGhlIHNhbWUga2V5IG11bHRpcGxlIHRpbWVzXCIpO3JldHVybiB0IGluc3RhbmNlb2YgbSYmby4kX211dGF0ZVJlZ2lzdGVyKHQpLG8uJF90ZXJtcy5yZW5hbWVzLnB1c2goe2Zyb206ZSx0bzp0LG9wdGlvbnM6cyhoLnJlbmFtZURlZmF1bHRzLHIpfSksb319LHNjaGVtYTp7bWV0aG9kKGU9XCJhbnlcIil7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwic2NoZW1hXCIsYXJnczp7dHlwZTplfX0pfSx2YWxpZGF0ZTooZSx0LHt0eXBlOnJ9KT0+IWwuaXNTY2hlbWEoZSl8fFwiYW55XCIhPT1yJiZlLnR5cGUhPT1yP3QuZXJyb3IoXCJvYmplY3Quc2NoZW1hXCIse3R5cGU6cn0pOmV9LHVua25vd246e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJ1bmtub3duXCIsITEhPT1lKX19LHdpdGg6e21ldGhvZChlLHQscj17fSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwid2l0aFwiLGUsdCxyKX19LHdpdGhvdXQ6e21ldGhvZChlLHQscj17fSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwid2l0aG91dFwiLGUsdCxyKX19LHhvcjp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcInhvclwiKSxoLmRlcGVuZGVuY3kodGhpcyxcInhvclwiLG51bGwsZSl9fX0sb3ZlcnJpZGVzOntkZWZhdWx0KGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPWwuc3ltYm9scy5kZWVwRGVmYXVsdCksdGhpcy4kX3N1cGVyLmRlZmF1bHQoZSx0KX19LHJlYnVpbGQoZSl7aWYoZS4kX3Rlcm1zLmtleXMpe2NvbnN0IHQ9bmV3IGEuU29ydGVyO2Zvcihjb25zdCByIG9mIGUuJF90ZXJtcy5rZXlzKWwudHJ5V2l0aFBhdGgoKCk9PnQuYWRkKHIse2FmdGVyOnIuc2NoZW1hLiRfcm9vdFJlZmVyZW5jZXMoKSxncm91cDpyLmtleX0pLHIua2V5KTtlLiRfdGVybXMua2V5cz1uZXcgaC5LZXlzKC4uLnQubm9kZXMpfX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5rZXlzJiYoZT1lLmtleXModC5rZXlzKSksdC5kZXBlbmRlbmNpZXMpZm9yKGNvbnN0e3JlbDpyLGtleTpzPW51bGwscGVlcnM6bixvcHRpb25zOm99b2YgdC5kZXBlbmRlbmNpZXMpZT1oLmRlcGVuZGVuY3koZSxyLHMsbixvKTtpZih0LnBhdHRlcm5zKWZvcihjb25zdHtyZWdleDpyLHNjaGVtYTpzLHJ1bGU6bixmYWxsdGhyb3VnaDpvLG1hdGNoZXM6YX1vZiB0LnBhdHRlcm5zKWU9ZS5wYXR0ZXJuKHJ8fHMsbix7ZmFsbHRocm91Z2g6byxtYXRjaGVzOmF9KTtpZih0LnJlbmFtZXMpZm9yKGNvbnN0e2Zyb206cix0bzpzLG9wdGlvbnM6bn1vZiB0LnJlbmFtZXMpZT1lLnJlbmFtZShyLHMsbik7cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJvYmplY3QuYW5kXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIHt7I3ByZXNlbnRXaXRoTGFiZWxzfX0gd2l0aG91dCBpdHMgcmVxdWlyZWQgcGVlcnMge3sjbWlzc2luZ1dpdGhMYWJlbHN9fVwiLFwib2JqZWN0LmFzc2VydFwiOid7eyNsYWJlbH19IGlzIGludmFsaWQgYmVjYXVzZSB7aWYoI3N1YmplY3Qua2V5LCBgXCJgICsgI3N1YmplY3Qua2V5ICsgYFwiIGZhaWxlZCB0byBgICsgKCNtZXNzYWdlIHx8IFwicGFzcyB0aGUgYXNzZXJ0aW9uIHRlc3RcIiksICNtZXNzYWdlIHx8IFwidGhlIGFzc2VydGlvbiBmYWlsZWRcIil9JyxcIm9iamVjdC5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgb2YgdHlwZSB7eyN0eXBlfX1cIixcIm9iamVjdC5pbnN0YW5jZVwiOid7eyNsYWJlbH19IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgXCJ7eyN0eXBlfX1cIicsXCJvYmplY3QubGVuZ3RoXCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5tYXhcIjone3sjbGFiZWx9fSBtdXN0IGhhdmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5taW5cIjone3sjbGFiZWx9fSBtdXN0IGhhdmUgYXQgbGVhc3Qge3sjbGltaXR9fSBrZXl7aWYoI2xpbWl0ID09IDEsIFwiXCIsIFwic1wiKX0nLFwib2JqZWN0Lm1pc3NpbmdcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB7eyNwZWVyc1dpdGhMYWJlbHN9fVwiLFwib2JqZWN0Lm5hbmRcIjonXCJ7eyNtYWluV2l0aExhYmVsfX1cIiBtdXN0IG5vdCBleGlzdCBzaW11bHRhbmVvdXNseSB3aXRoIHt7I3BlZXJzV2l0aExhYmVsc319JyxcIm9iamVjdC5veG9yXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGEgY29uZmxpY3QgYmV0d2VlbiBvcHRpb25hbCBleGNsdXNpdmUgcGVlcnMge3sjcGVlcnNXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5wYXR0ZXJuLm1hdGNoXCI6XCJ7eyNsYWJlbH19IGtleXMgZmFpbGVkIHRvIG1hdGNoIHBhdHRlcm4gcmVxdWlyZW1lbnRzXCIsXCJvYmplY3QucmVmVHlwZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgSm9pIHJlZmVyZW5jZVwiLFwib2JqZWN0LnJlZ2V4XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBSZWdFeHAgb2JqZWN0XCIsXCJvYmplY3QucmVuYW1lLm11bHRpcGxlXCI6J3t7I2xhYmVsfX0gY2Fubm90IHJlbmFtZSBcInt7I2Zyb219fVwiIGJlY2F1c2UgbXVsdGlwbGUgcmVuYW1lcyBhcmUgZGlzYWJsZWQgYW5kIGFub3RoZXIga2V5IHdhcyBhbHJlYWR5IHJlbmFtZWQgdG8gXCJ7eyN0b319XCInLFwib2JqZWN0LnJlbmFtZS5vdmVycmlkZVwiOid7eyNsYWJlbH19IGNhbm5vdCByZW5hbWUgXCJ7eyNmcm9tfX1cIiBiZWNhdXNlIG92ZXJyaWRlIGlzIGRpc2FibGVkIGFuZCB0YXJnZXQgXCJ7eyN0b319XCIgZXhpc3RzJyxcIm9iamVjdC5zY2hlbWFcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIEpvaSBzY2hlbWEgb2Yge3sjdHlwZX19IHR5cGVcIixcIm9iamVjdC51bmtub3duXCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkXCIsXCJvYmplY3Qud2l0aFwiOidcInt7I21haW5XaXRoTGFiZWx9fVwiIG1pc3NpbmcgcmVxdWlyZWQgcGVlciBcInt7I3BlZXJXaXRoTGFiZWx9fVwiJyxcIm9iamVjdC53aXRob3V0XCI6J1wie3sjbWFpbldpdGhMYWJlbH19XCIgY29uZmxpY3Qgd2l0aCBmb3JiaWRkZW4gcGVlciBcInt7I3BlZXJXaXRoTGFiZWx9fVwiJyxcIm9iamVjdC54b3JcIjpcInt7I2xhYmVsfX0gY29udGFpbnMgYSBjb25mbGljdCBiZXR3ZWVuIGV4Y2x1c2l2ZSBwZWVycyB7eyNwZWVyc1dpdGhMYWJlbHN9fVwifX0pLGguY2xvbmU9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7aWYodC5ub25FbnVtZXJhYmxlcylyZXR1cm4gbyhlLHtzaGFsbG93OiEwfSk7Y29uc3Qgcj1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSk7cmV0dXJuIE9iamVjdC5hc3NpZ24ocixlKSxyfWNvbnN0IHI9ZnVuY3Rpb24oLi4udCl7cmV0dXJuIGUuYXBwbHkodGhpcyx0KX07cmV0dXJuIHIucHJvdG90eXBlPW8oZS5wcm90b3R5cGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwibmFtZVwiLHt2YWx1ZTplLm5hbWUsd3JpdGFibGU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImxlbmd0aFwiLHt2YWx1ZTplLmxlbmd0aCx3cml0YWJsZTohMX0pLE9iamVjdC5hc3NpZ24ocixlKSxyfSxoLmRlcGVuZGVuY3k9ZnVuY3Rpb24oZSx0LHIscyxvKXtuKG51bGw9PT1yfHxcInN0cmluZ1wiPT10eXBlb2Ygcix0LFwia2V5IG11c3QgYmUgYSBzdHJpbmdzXCIpLG98fChvPXMubGVuZ3RoPjEmJlwib2JqZWN0XCI9PXR5cGVvZiBzW3MubGVuZ3RoLTFdP3MucG9wKCk6e30pLGwuYXNzZXJ0T3B0aW9ucyhvLFtcInNlcGFyYXRvclwiXSkscz1bXS5jb25jYXQocyk7Y29uc3QgYT1sLmRlZmF1bHQoby5zZXBhcmF0b3IsXCIuXCIpLGk9W107Zm9yKGNvbnN0IGUgb2YgcyluKFwic3RyaW5nXCI9PXR5cGVvZiBlLHQsXCJwZWVycyBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgcmVmZXJlbmNlXCIpLGkucHVzaChjLnJlZihlLHtzZXBhcmF0b3I6YSxhbmNlc3RvcjowLHByZWZpeDohMX0pKTtudWxsIT09ciYmKHI9Yy5yZWYocix7c2VwYXJhdG9yOmEsYW5jZXN0b3I6MCxwcmVmaXg6ITF9KSk7Y29uc3QgdT1lLmNsb25lKCk7cmV0dXJuIHUuJF90ZXJtcy5kZXBlbmRlbmNpZXM9dS4kX3Rlcm1zLmRlcGVuZGVuY2llc3x8W10sdS4kX3Rlcm1zLmRlcGVuZGVuY2llcy5wdXNoKG5ldyBoLkRlcGVuZGVuY3kodCxyLGkscykpLHV9LGguZGVwZW5kZW5jaWVzPXthbmQoZSx0LHIscyxuKXtjb25zdCBvPVtdLGE9W10saT10LnBlZXJzLmxlbmd0aDtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMD09PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KT9vLnB1c2goZS5rZXkpOmEucHVzaChlLmtleSk7aWYoby5sZW5ndGghPT1pJiZhLmxlbmd0aCE9PWkpcmV0dXJue2NvZGU6XCJvYmplY3QuYW5kXCIsY29udGV4dDp7cHJlc2VudDphLHByZXNlbnRXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsYSksbWlzc2luZzpvLG1pc3NpbmdXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsbyl9fX0sbmFuZChlLHQscixzLG4pe2NvbnN0IG89W107Zm9yKGNvbnN0IGUgb2YgdC5wZWVycyl2b2lkIDAhPT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkmJm8ucHVzaChlLmtleSk7aWYoby5sZW5ndGghPT10LnBlZXJzLmxlbmd0aClyZXR1cm47Y29uc3QgYT10LnBhdGhzWzBdLGk9dC5wYXRocy5zbGljZSgxKTtyZXR1cm57Y29kZTpcIm9iamVjdC5uYW5kXCIsY29udGV4dDp7bWFpbjphLG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxhKSxwZWVyczppLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLGkpfX19LG9yKGUsdCxyLHMsbil7Zm9yKGNvbnN0IGUgb2YgdC5wZWVycylpZih2b2lkIDAhPT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJuO3JldHVybntjb2RlOlwib2JqZWN0Lm1pc3NpbmdcIixjb250ZXh0OntwZWVyczp0LnBhdGhzLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLHQucGF0aHMpfX19LG94b3IoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKCFvLmxlbmd0aHx8MT09PW8ubGVuZ3RoKXJldHVybjtjb25zdCBhPXtwZWVyczp0LnBhdGhzLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLHQucGF0aHMpfTtyZXR1cm4gYS5wcmVzZW50PW8sYS5wcmVzZW50V2l0aExhYmVscz1oLmtleXNUb0xhYmVscyhlLG8pLHtjb2RlOlwib2JqZWN0Lm94b3JcIixjb250ZXh0OmF9fSx3aXRoKGUsdCxyLHMsbil7Zm9yKGNvbnN0IG8gb2YgdC5wZWVycylpZih2b2lkIDA9PT1vLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJue2NvZGU6XCJvYmplY3Qud2l0aFwiLGNvbnRleHQ6e21haW46dC5rZXkua2V5LG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSx0LmtleS5rZXkpLHBlZXI6by5rZXkscGVlcldpdGhMYWJlbDpoLmtleXNUb0xhYmVscyhlLG8ua2V5KX19fSx3aXRob3V0KGUsdCxyLHMsbil7Zm9yKGNvbnN0IG8gb2YgdC5wZWVycylpZih2b2lkIDAhPT1vLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJue2NvZGU6XCJvYmplY3Qud2l0aG91dFwiLGNvbnRleHQ6e21haW46dC5rZXkua2V5LG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSx0LmtleS5rZXkpLHBlZXI6by5rZXkscGVlcldpdGhMYWJlbDpoLmtleXNUb0xhYmVscyhlLG8ua2V5KX19fSx4b3IoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKDE9PT1vLmxlbmd0aClyZXR1cm47Y29uc3QgYT17cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX07cmV0dXJuIDA9PT1vLmxlbmd0aD97Y29kZTpcIm9iamVjdC5taXNzaW5nXCIsY29udGV4dDphfTooYS5wcmVzZW50PW8sYS5wcmVzZW50V2l0aExhYmVscz1oLmtleXNUb0xhYmVscyhlLG8pLHtjb2RlOlwib2JqZWN0LnhvclwiLGNvbnRleHQ6YX0pfX0saC5rZXlzVG9MYWJlbHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90Lm1hcCh0PT5lLiRfbWFwTGFiZWxzKHQpKTplLiRfbWFwTGFiZWxzKHQpfSxoLnJlbmFtZT1mdW5jdGlvbihlLHQscixzLG4pe2NvbnN0IG89e307Zm9yKGNvbnN0IGEgb2YgZS4kX3Rlcm1zLnJlbmFtZXMpe2NvbnN0IGk9W10sbD1cInN0cmluZ1wiIT10eXBlb2YgYS5mcm9tO2lmKGwpZm9yKGNvbnN0IGUgaW4gdCl7aWYodm9pZCAwPT09dFtlXSYmYS5vcHRpb25zLmlnbm9yZVVuZGVmaW5lZCljb250aW51ZTtpZihlPT09YS50byljb250aW51ZTtjb25zdCByPWEuZnJvbS5leGVjKGUpO3ImJmkucHVzaCh7ZnJvbTplLHRvOmEudG8sbWF0Y2g6cn0pfWVsc2UhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsYS5mcm9tKXx8dm9pZCAwPT09dFthLmZyb21dJiZhLm9wdGlvbnMuaWdub3JlVW5kZWZpbmVkfHxpLnB1c2goYSk7Zm9yKGNvbnN0IGMgb2YgaSl7Y29uc3QgaT1jLmZyb207bGV0IHU9Yy50bztpZih1IGluc3RhbmNlb2YgbSYmKHU9dS5yZW5kZXIodCxyLHMsYy5tYXRjaCkpLGkhPT11KXtpZighYS5vcHRpb25zLm11bHRpcGxlJiZvW3VdJiYobi5wdXNoKGUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5yZW5hbWUubXVsdGlwbGVcIix0LHtmcm9tOmksdG86dSxwYXR0ZXJuOmx9LHIscykpLHMuYWJvcnRFYXJseSkpcmV0dXJuITE7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsdSkmJiFhLm9wdGlvbnMub3ZlcnJpZGUmJiFvW3VdJiYobi5wdXNoKGUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5yZW5hbWUub3ZlcnJpZGVcIix0LHtmcm9tOmksdG86dSxwYXR0ZXJuOmx9LHIscykpLHMuYWJvcnRFYXJseSkpcmV0dXJuITE7dm9pZCAwPT09dFtpXT9kZWxldGUgdFt1XTp0W3VdPXRbaV0sb1t1XT0hMCxhLm9wdGlvbnMuYWxpYXN8fGRlbGV0ZSB0W2ldfX19cmV0dXJuITB9LGgudW5rbm93bj1mdW5jdGlvbihlLHQscixzLG4sbyl7aWYoZS4kX3Rlcm1zLnBhdHRlcm5zKXtsZXQgYT0hMTtjb25zdCBpPWUuJF90ZXJtcy5wYXR0ZXJucy5tYXAoZT0+e2lmKGUubWF0Y2hlcylyZXR1cm4gYT0hMCxbXX0pLGw9W3QsLi4ubi5hbmNlc3RvcnNdO2Zvcihjb25zdCBhIG9mIHIpe2NvbnN0IGM9dFthXSx1PVsuLi5uLnBhdGgsYV07Zm9yKGxldCBmPTA7ZjxlLiRfdGVybXMucGF0dGVybnMubGVuZ3RoOysrZil7Y29uc3QgbT1lLiRfdGVybXMucGF0dGVybnNbZl07aWYobS5yZWdleCl7Y29uc3QgZT1tLnJlZ2V4LnRlc3QoYSk7aWYobi5tYWluc3RheS50cmFjZXIuZGVidWcobixcInJ1bGVcIixcInBhdHRlcm4uXCIuY29uY2F0KGYpLGU/XCJwYXNzXCI6XCJlcnJvclwiKSwhZSljb250aW51ZX1lbHNlIGlmKCFtLnNjaGVtYS4kX21hdGNoKGEsbi5uZXN0KG0uc2NoZW1hLFwicGF0dGVybi5cIi5jb25jYXQoZikpLG8pKWNvbnRpbnVlO3IuZGVsZXRlKGEpO2NvbnN0IGg9bi5sb2NhbGl6ZSh1LGwse3NjaGVtYTptLnJ1bGUsa2V5OmF9KSxkPW0ucnVsZS4kX3ZhbGlkYXRlKGMsaCxvKTtpZihkLmVycm9ycyl7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczpkLmVycm9yc307cy5wdXNoKC4uLmQuZXJyb3JzKX1pZihtLm1hdGNoZXMmJmlbZl0ucHVzaChhKSx0W2FdPWQudmFsdWUsIW0uZmFsbHRocm91Z2gpYnJlYWt9fWlmKGEpZm9yKGxldCByPTA7cjxpLmxlbmd0aDsrK3Ipe2NvbnN0IGE9aVtyXTtpZighYSljb250aW51ZTtjb25zdCBjPWUuJF90ZXJtcy5wYXR0ZXJuc1tyXS5tYXRjaGVzLGY9bi5sb2NhbGl6ZShuLnBhdGgsbCxjKSxtPWMuJF92YWxpZGF0ZShhLGYsbyk7aWYobS5lcnJvcnMpe2NvbnN0IHI9dS5kZXRhaWxzKG0uZXJyb3JzLHtvdmVycmlkZTohMX0pO3IubWF0Y2hlcz1hO2NvbnN0IGk9ZS4kX2NyZWF0ZUVycm9yKFwib2JqZWN0LnBhdHRlcm4ubWF0Y2hcIix0LHIsbixvKTtpZihvLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOnQsZXJyb3JzOml9O3MucHVzaChpKX19fWlmKCFyLnNpemV8fCFlLiRfdGVybXMua2V5cyYmIWUuJF90ZXJtcy5wYXR0ZXJucylyZXR1cm47aWYoby5zdHJpcFVua25vd24mJiFlLl9mbGFncy51bmtub3dufHxvLnNraXBGdW5jdGlvbnMpe2NvbnN0IGU9ISFvLnN0cmlwVW5rbm93biYmKCEwPT09by5zdHJpcFVua25vd258fCEhby5zdHJpcFVua25vd24ub2JqZWN0cyk7Zm9yKGNvbnN0IHMgb2YgcillPyhkZWxldGUgdFtzXSxyLmRlbGV0ZShzKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgdFtzXSYmci5kZWxldGUocyl9aWYoIWwuZGVmYXVsdChlLl9mbGFncy51bmtub3duLG8uYWxsb3dVbmtub3duKSlmb3IoY29uc3QgYSBvZiByKXtjb25zdCByPW4ubG9jYWxpemUoWy4uLm4ucGF0aCxhXSxbXSksaT1lLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QudW5rbm93blwiLHRbYV0se2NoaWxkOmF9LHIsbyx7ZmxhZ3M6ITF9KTtpZihvLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOnQsZXJyb3JzOml9O3MucHVzaChpKX19LGguRGVwZW5kZW5jeT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQscixzKXt0aGlzLnJlbD1lLHRoaXMua2V5PXQsdGhpcy5wZWVycz1yLHRoaXMucGF0aHM9c31kZXNjcmliZSgpe2NvbnN0IGU9e3JlbDp0aGlzLnJlbCxwZWVyczp0aGlzLnBhdGhzfTtyZXR1cm4gbnVsbCE9PXRoaXMua2V5JiYoZS5rZXk9dGhpcy5rZXkua2V5KSxcIi5cIiE9PXRoaXMucGVlcnNbMF0uc2VwYXJhdG9yJiYoZS5vcHRpb25zPXtzZXBhcmF0b3I6dGhpcy5wZWVyc1swXS5zZXBhcmF0b3J9KSxlfX0saC5LZXlzPWNsYXNzIGV4dGVuZHMgQXJyYXl7Y29uY2F0KGUpe2NvbnN0IHQ9dGhpcy5zbGljZSgpLHI9bmV3IE1hcDtmb3IobGV0IGU9MDtlPHQubGVuZ3RoOysrZSlyLnNldCh0W2VdLmtleSxlKTtmb3IoY29uc3QgcyBvZiBlKXtjb25zdCBlPXMua2V5LG49ci5nZXQoZSk7dm9pZCAwIT09bj90W25dPXtrZXk6ZSxzY2hlbWE6dFtuXS5zY2hlbWEuY29uY2F0KHMuc2NoZW1hKX06dC5wdXNoKHMpfXJldHVybiB0fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjQpLG49cigyNSksbz17bWluRG9tYWluU2VnbWVudHM6Mixub25Bc2NpaVJ4Oi9bXlxceDAwLVxceDdmXS8sZG9tYWluQ29udHJvbFJ4Oi9bXFx4MDAtXFx4MjBAXFw6XFwvXS8sdGxkU2VnbWVudFJ4Oi9eW2EtekEtWl0oPzpbYS16QS1aMC05XFwtXSpbYS16QS1aMC05XSk/JC8sZG9tYWluU2VnbWVudFJ4Oi9eW2EtekEtWjAtOV0oPzpbYS16QS1aMC05XFwtXSpbYS16QS1aMC05XSk/JC8sVVJMOnMuVVJMfHxVUkx9O3QuYW5hbHl6ZT1mdW5jdGlvbihlLHQ9e30pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQ6IGRvbWFpbiBtdXN0IGJlIGEgc3RyaW5nXCIpO2lmKCFlKXJldHVybiBuLmNvZGUoXCJET01BSU5fTk9OX0VNUFRZX1NUUklOR1wiKTtpZihlLmxlbmd0aD4yNTYpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9UT09fTE9OR1wiKTtpZighIW8ubm9uQXNjaWlSeC50ZXN0KGUpKXtpZighMT09PXQuYWxsb3dVbmljb2RlKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9VTklDT0RFX0NIQVJTXCIpO2U9ZS5ub3JtYWxpemUoXCJORkNcIil9aWYoby5kb21haW5Db250cm9sUngudGVzdChlKSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfQ0hBUlNcIik7ZT1vLnB1bnljb2RlKGUpO2NvbnN0IHI9dC5taW5Eb21haW5TZWdtZW50c3x8by5taW5Eb21haW5TZWdtZW50cyxzPWUuc3BsaXQoXCIuXCIpO2lmKHMubGVuZ3RoPHIpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9TRUdNRU5UU19DT1VOVFwiKTtjb25zdCBhPXQudGxkcztpZihhKXtjb25zdCBlPXNbcy5sZW5ndGgtMV0udG9Mb3dlckNhc2UoKTtpZihhLmRlbnkmJmEuZGVueS5oYXMoZSl8fGEuYWxsb3cmJiFhLmFsbG93LmhhcyhlKSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0ZPUkJJRERFTl9UTERTXCIpfWZvcihsZXQgZT0wO2U8cy5sZW5ndGg7KytlKXtjb25zdCB0PXNbZV07aWYoIXQubGVuZ3RoKXJldHVybiBuLmNvZGUoXCJET01BSU5fRU1QVFlfU0VHTUVOVFwiKTtpZih0Lmxlbmd0aD42MylyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0xPTkdfU0VHTUVOVFwiKTtpZihlPHMubGVuZ3RoLTEpe2lmKCFvLmRvbWFpblNlZ21lbnRSeC50ZXN0KHQpKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9DSEFSU1wiKX1lbHNlIGlmKCFvLnRsZFNlZ21lbnRSeC50ZXN0KHQpKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9UTERTX0NIQVJTXCIpfXJldHVybiBudWxsfSx0LmlzVmFsaWQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4hdC5hbmFseXplKGUscil9LG8ucHVueWNvZGU9ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBuZXcgby5VUkwoXCJodHRwOi8vXCIuY29uY2F0KGUpKS5ob3N0fWNhdGNoKHQpe3JldHVybiBlfX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5jb2Rlcz17RU1QVFlfU1RSSU5HOlwiQWRkcmVzcyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiLEZPUkJJRERFTl9VTklDT0RFOlwiQWRkcmVzcyBjb250YWlucyBmb3JiaWRkZW4gVW5pY29kZSBjaGFyYWN0ZXJzXCIsTVVMVElQTEVfQVRfQ0hBUjpcIkFkZHJlc3MgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBAIGNoYXJhY3RlclwiLE1JU1NJTkdfQVRfQ0hBUjpcIkFkZHJlc3MgbXVzdCBjb250YWluIG9uZSBAIGNoYXJhY3RlclwiLEVNUFRZX0xPQ0FMOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNhbm5vdCBiZSBlbXB0eVwiLEFERFJFU1NfVE9PX0xPTkc6XCJBZGRyZXNzIHRvbyBsb25nXCIsTE9DQUxfVE9PX0xPTkc6XCJBZGRyZXNzIGxvY2FsIHBhcnQgdG9vIGxvbmdcIixFTVBUWV9MT0NBTF9TRUdNRU5UOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNvbnRhaW5zIGVtcHR5IGRvdC1zZXBhcmF0ZWQgc2VnbWVudFwiLElOVkFMSURfTE9DQUxfQ0hBUlM6XCJBZGRyZXNzIGxvY2FsIHBhcnQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJcIixET01BSU5fTk9OX0VNUFRZX1NUUklORzpcIkRvbWFpbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiLERPTUFJTl9UT09fTE9ORzpcIkRvbWFpbiB0b28gbG9uZ1wiLERPTUFJTl9JTlZBTElEX1VOSUNPREVfQ0hBUlM6XCJEb21haW4gY29udGFpbnMgZm9yYmlkZGVuIFVuaWNvZGUgY2hhcmFjdGVyc1wiLERPTUFJTl9JTlZBTElEX0NIQVJTOlwiRG9tYWluIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyXCIsRE9NQUlOX0lOVkFMSURfVExEU19DSEFSUzpcIkRvbWFpbiBjb250YWlucyBpbnZhbGlkIHRsZCBjaGFyYWN0ZXJcIixET01BSU5fU0VHTUVOVFNfQ09VTlQ6XCJEb21haW4gbGFja3MgdGhlIG1pbmltdW0gcmVxdWlyZWQgbnVtYmVyIG9mIHNlZ21lbnRzXCIsRE9NQUlOX0ZPUkJJRERFTl9UTERTOlwiRG9tYWluIHVzZXMgZm9yYmlkZGVuIFRMRFwiLERPTUFJTl9FTVBUWV9TRUdNRU5UOlwiRG9tYWluIGNvbnRhaW5zIGVtcHR5IGRvdC1zZXBhcmF0ZWQgc2VnbWVudFwiLERPTUFJTl9MT05HX1NFR01FTlQ6XCJEb21haW4gY29udGFpbnMgZG90LXNlcGFyYXRlZCBzZWdtZW50IHRoYXQgaXMgdG9vIGxvbmdcIn0sdC5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybntjb2RlOmUsZXJyb3I6dC5jb2Rlc1tlXX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyNyksbz17Z2VuZXJhdGU6ZnVuY3Rpb24oKXtjb25zdCBlPXt9LHQ9XCIhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9XCIscj1cIlxcXFx3LVxcXFwufiVcXFxcZEEtRmEtZlwiK3QrXCI6QFwiLHM9XCJbXCIrcitcIl1cIixuPVwiKD86MHswLDJ9XFxcXGR8MD9bMS05XVxcXFxkfDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNV0pXCI7ZS5pcHY0YWRkcmVzcz1cIig/OlwiK24rXCJcXFxcLil7M31cIituO2NvbnN0IG89XCJbXFxcXGRBLUZhLWZdezEsNH1cIixhPVwiKD86XCIrbytcIjpcIitvK1wifFwiK2UuaXB2NGFkZHJlc3MrXCIpXCIsaT1cIig/OlwiK28rXCI6KXs2fVwiK2EsbD1cIjo6KD86XCIrbytcIjopezV9XCIrYSxjPVwiKD86XCIrbytcIik/OjooPzpcIitvK1wiOil7NH1cIithLHU9XCIoPzooPzpcIitvK1wiOil7MCwxfVwiK28rXCIpPzo6KD86XCIrbytcIjopezN9XCIrYSxmPVwiKD86KD86XCIrbytcIjopezAsMn1cIitvK1wiKT86Oig/OlwiK28rXCI6KXsyfVwiK2EsbT1cIig/Oig/OlwiK28rXCI6KXswLDN9XCIrbytcIik/OjpcIitvK1wiOlwiK2EsaD1cIig/Oig/OlwiK28rXCI6KXswLDR9XCIrbytcIik/OjpcIithO2UuaXB2NENpZHI9XCIoPzpcXFxcZHxbMS0yXVxcXFxkfDNbMC0yXSlcIixlLmlwdjZDaWRyPVwiKD86MHswLDJ9XFxcXGR8MD9bMS05XVxcXFxkfDFbMDFdXFxcXGR8MTJbMC04XSlcIixlLmlwdjZhZGRyZXNzPVwiKD86XCIraStcInxcIitsK1wifFwiK2MrXCJ8XCIrdStcInxcIitmK1wifFwiK20rXCJ8XCIraCtcInwoPzooPzpbXFxcXGRBLUZhLWZdezEsNH06KXswLDV9W1xcXFxkQS1GYS1mXXsxLDR9KT86OltcXFxcZEEtRmEtZl17MSw0fXwoPzooPzpbXFxcXGRBLUZhLWZdezEsNH06KXswLDZ9W1xcXFxkQS1GYS1mXXsxLDR9KT86OilcIixlLmlwdkZ1dHVyZT1cInZbXFxcXGRBLUZhLWZdK1xcXFwuW1xcXFx3LVxcXFwuflwiK3QrXCI6XStcIixlLnNjaGVtZT1cIlthLXpBLVpdW2EtekEtWlxcXFxkKy1cXFxcLl0qXCIsZS5zY2hlbWVSZWdleD1uZXcgUmVnRXhwKGUuc2NoZW1lKTtjb25zdCBkPVwiW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZlwiK3QrXCI6XSpcIixwPVwiKD86XCIrKFwiXFxcXFsoPzpcIitlLmlwdjZhZGRyZXNzK1wifFwiK2UuaXB2RnV0dXJlK1wiKVxcXFxdXCIpK1wifFwiK2UuaXB2NGFkZHJlc3MrXCJ8W1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz1dezEsMjU1fSlcIixnPVwiKD86XCIrZCtcIkApP1wiK3ArXCIoPzo6XFxcXGQqKT9cIix5PVwiKD86XCIrZCtcIkApPyhcIitwK1wiKSg/OjpcXFxcZCopP1wiLGI9cytcIipcIix2PXMrXCIrXCIsXz1cIig/OlxcXFwvXCIrYitcIikqXCIsdz1cIlxcXFwvKD86XCIrditfK1wiKT9cIiwkPXYrXyx4PVwiW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz1AXStcIitfO3JldHVybiBlLmhpZXJQYXJ0PVwiKD86KD86XFxcXC9cXFxcL1wiK2crXytcIil8XCIrdytcInxcIiskK1wifCg/OlxcXFwvXFxcXC9cXFxcL1tcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9OkBdKig/OlxcXFwvW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz06QF0qKSopKVwiLGUuaGllclBhcnRDYXB0dXJlPVwiKD86KD86XFxcXC9cXFxcL1wiK3krXytcIil8XCIrdytcInxcIiskK1wiKVwiLGUucmVsYXRpdmVSZWY9XCIoPzooPzpcXFxcL1xcXFwvXCIrZytfK1wiKXxcIit3K1wifFwiK3grXCJ8KVwiLGUucmVsYXRpdmVSZWZDYXB0dXJlPVwiKD86KD86XFxcXC9cXFxcL1wiK3krXytcIil8XCIrdytcInxcIit4K1wifClcIixlLnF1ZXJ5PVwiW1wiK3IrXCJcXFxcL1xcXFw/XSooPz0jfCQpXCIsZS5xdWVyeVdpdGhTcXVhcmVCcmFja2V0cz1cIltcIityK1wiXFxcXFtcXFxcXVxcXFwvXFxcXD9dKig/PSN8JClcIixlLmZyYWdtZW50PVwiW1wiK3IrXCJcXFxcL1xcXFw/XSpcIixlfX07by5yZmMzOTg2PW8uZ2VuZXJhdGUoKSx0LmlwPXt2NENpZHI6by5yZmMzOTg2LmlwdjRDaWRyLHY2Q2lkcjpvLnJmYzM5ODYuaXB2NkNpZHIsaXB2NDpvLnJmYzM5ODYuaXB2NGFkZHJlc3MsaXB2NjpvLnJmYzM5ODYuaXB2NmFkZHJlc3MsaXB2ZnV0dXJlOm8ucmZjMzk4Ni5pcHZGdXR1cmV9LG8uY3JlYXRlUmVnZXg9ZnVuY3Rpb24oZSl7Y29uc3QgdD1vLnJmYzM5ODYscj1cIig/OlxcXFw/XCIrKGUuYWxsb3dRdWVyeVNxdWFyZUJyYWNrZXRzP3QucXVlcnlXaXRoU3F1YXJlQnJhY2tldHM6dC5xdWVyeSkrXCIpPyg/OiNcIit0LmZyYWdtZW50K1wiKT9cIixhPWUuZG9tYWluP3QucmVsYXRpdmVSZWZDYXB0dXJlOnQucmVsYXRpdmVSZWY7aWYoZS5yZWxhdGl2ZU9ubHkpcmV0dXJuIG8ud3JhcChhK3IpO2xldCBpPVwiXCI7aWYoZS5zY2hlbWUpe3MoZS5zY2hlbWUgaW5zdGFuY2VvZiBSZWdFeHB8fFwic3RyaW5nXCI9PXR5cGVvZiBlLnNjaGVtZXx8QXJyYXkuaXNBcnJheShlLnNjaGVtZSksXCJzY2hlbWUgbXVzdCBiZSBhIFJlZ0V4cCwgU3RyaW5nLCBvciBBcnJheVwiKTtjb25zdCByPVtdLmNvbmNhdChlLnNjaGVtZSk7cyhyLmxlbmd0aD49MSxcInNjaGVtZSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBzY2hlbWUgc3BlY2lmaWVkXCIpO2NvbnN0IG89W107Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aDsrK2Upe2NvbnN0IGE9cltlXTtzKGEgaW5zdGFuY2VvZiBSZWdFeHB8fFwic3RyaW5nXCI9PXR5cGVvZiBhLFwic2NoZW1lIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIFJlZ0V4cCBvciBTdHJpbmdcIiksYSBpbnN0YW5jZW9mIFJlZ0V4cD9vLnB1c2goYS5zb3VyY2UudG9TdHJpbmcoKSk6KHModC5zY2hlbWVSZWdleC50ZXN0KGEpLFwic2NoZW1lIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIHZhbGlkIHNjaGVtZVwiKSxvLnB1c2gobihhKSkpfWk9by5qb2luKFwifFwiKX1jb25zdCBsPVwiKD86XCIrKGk/XCIoPzpcIitpK1wiKVwiOnQuc2NoZW1lKStcIjpcIisoZS5kb21haW4/dC5oaWVyUGFydENhcHR1cmU6dC5oaWVyUGFydCkrXCIpXCIsYz1lLmFsbG93UmVsYXRpdmU/XCIoPzpcIitsK1wifFwiK2ErXCIpXCI6bDtyZXR1cm4gby53cmFwKGMrcixpKX0sby53cmFwPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3JhdzplPVwiKD89LikoPyFodHRwcz86LyQpXCIuY29uY2F0KGUpLHJlZ2V4Om5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGUsXCIkXCIpKSxzY2hlbWU6dH19LG8udXJpUmVnZXg9by5jcmVhdGVSZWdleCh7fSksdC5yZWdleD1mdW5jdGlvbihlPXt9KXtyZXR1cm4gZS5zY2hlbWV8fGUuYWxsb3dSZWxhdGl2ZXx8ZS5yZWxhdGl2ZU9ubHl8fGUuYWxsb3dRdWVyeVNxdWFyZUJyYWNrZXRzfHxlLmRvbWFpbj9vLmNyZWF0ZVJlZ2V4KGUpOm8udXJpUmVnZXh9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1tcXF5cXCRcXC5cXCpcXCtcXC1cXD9cXD1cXCFcXDpcXHxcXFxcXFwvXFwoXFwpXFxbXFxdXFx7XFx9XFwsXS9nLFwiXFxcXCQmXCIpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbiguLi5lKXt0cnl7cmV0dXJuIEpTT04uc3RyaW5naWZ5LmFwcGx5KG51bGwsZSl9Y2F0Y2goZSl7cmV0dXJuXCJbQ2Fubm90IGRpc3BsYXkgb2JqZWN0OiBcIitlLm1lc3NhZ2UrXCJdXCJ9fX0sZnVuY3Rpb24oZSl7ZS5leHBvcnRzPUpTT04ucGFyc2UoJ3tcInZlcnNpb25cIjpcIjE3LjEuMVwifScpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz17fTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1cIlwiO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWUuY2hhckNvZGVBdChyKTtzLmlzU2FmZShuKT90Kz1lW3JdOnQrPXMuZXNjYXBlSHRtbENoYXIobil9cmV0dXJuIHR9LHMuZXNjYXBlSHRtbENoYXI9ZnVuY3Rpb24oZSl7Y29uc3QgdD1zLm5hbWVkSHRtbFtlXTtpZih2b2lkIDAhPT10KXJldHVybiB0O2lmKGU+PTI1NilyZXR1cm5cIiYjXCIrZStcIjtcIjtjb25zdCByPWUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpO3JldHVyblwiJiN4XCIuY29uY2F0KHIsXCI7XCIpfSxzLmlzU2FmZT1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09cy5zYWZlQ2hhckNvZGVzW2VdfSxzLm5hbWVkSHRtbD17Mzg6XCImYW1wO1wiLDYwOlwiJmx0O1wiLDYyOlwiJmd0O1wiLDM0OlwiJnF1b3Q7XCIsMTYwOlwiJm5ic3A7XCIsMTYyOlwiJmNlbnQ7XCIsMTYzOlwiJnBvdW5kO1wiLDE2NDpcIiZjdXJyZW47XCIsMTY5OlwiJmNvcHk7XCIsMTc0OlwiJnJlZztcIn0scy5zYWZlQ2hhckNvZGVzPWZ1bmN0aW9uKCl7Y29uc3QgZT17fTtmb3IobGV0IHQ9MzI7dDwxMjM7Kyt0KSh0Pj05N3x8dD49NjUmJnQ8PTkwfHx0Pj00OCYmdDw9NTd8fDMyPT09dHx8NDY9PT10fHw0ND09PXR8fDQ1PT09dHx8NTg9PT10fHw5NT09PXQpJiYoZVt0XT1udWxsKTtyZXR1cm4gZX0oKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e29wZXJhdG9yczpbXCIhXCIsXCJeXCIsXCIqXCIsXCIvXCIsXCIlXCIsXCIrXCIsXCItXCIsXCI8XCIsXCI8PVwiLFwiPlwiLFwiPj1cIixcIj09XCIsXCIhPVwiLFwiJiZcIixcInx8XCIsXCI/P1wiXSxvcGVyYXRvckNoYXJhY3RlcnM6W1wiIVwiLFwiXlwiLFwiKlwiLFwiL1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiPFwiLFwiPVwiLFwiPlwiLFwiJlwiLFwifFwiLFwiP1wiXSxvcGVyYXRvcnNPcmRlcjpbW1wiXlwiXSxbXCIqXCIsXCIvXCIsXCIlXCJdLFtcIitcIixcIi1cIl0sW1wiPFwiLFwiPD1cIixcIj5cIixcIj49XCJdLFtcIj09XCIsXCIhPVwiXSxbXCImJlwiXSxbXCJ8fFwiLFwiPz9cIl1dLG9wZXJhdG9yc1ByZWZpeDpbXCIhXCIsXCJuXCJdLGxpdGVyYWxzOnsnXCInOidcIicsXCJgXCI6XCJgXCIsXCInXCI6XCInXCIsXCJbXCI6XCJdXCJ9LG51bWJlclJ4Oi9eKD86WzAtOV0qXFwuP1swLTldKil7MX0kLyx0b2tlblJ4Oi9eW1xcd1xcJFxcI1xcLlxcQFxcOlxce1xcfV0rJC8sc3ltYm9sOlN5bWJvbChcImZvcm11bGFcIiksc2V0dGluZ3M6U3ltYm9sKFwic2V0dGluZ3NcIil9O3QuUGFyc2VyPWNsYXNze2NvbnN0cnVjdG9yKGUsdD17fSl7aWYoIXRbcy5zZXR0aW5nc10mJnQuY29uc3RhbnRzKWZvcihjb25zdCBlIGluIHQuY29uc3RhbnRzKXtjb25zdCByPXQuY29uc3RhbnRzW2VdO2lmKG51bGwhPT1yJiYhW1wiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl0uaW5jbHVkZXModHlwZW9mIHIpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29uc3RhbnQgXCIuY29uY2F0KGUsXCIgY29udGFpbnMgaW52YWxpZCBcIikuY29uY2F0KHR5cGVvZiByLFwiIHZhbHVlIHR5cGVcIikpfXRoaXMuc2V0dGluZ3M9dFtzLnNldHRpbmdzXT90Ok9iamVjdC5hc3NpZ24oe1tzLnNldHRpbmdzXTohMCxjb25zdGFudHM6e30sZnVuY3Rpb25zOnt9fSx0KSx0aGlzLnNpbmdsZT1udWxsLHRoaXMuX3BhcnRzPW51bGwsdGhpcy5fcGFyc2UoZSl9X3BhcnNlKGUpe2xldCByPVtdLG49XCJcIixvPTAsYT0hMTtjb25zdCBpPWU9PntpZihvKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzXCIpO2NvbnN0IGk9ci5sZW5ndGg/cltyLmxlbmd0aC0xXTpudWxsO2lmKGF8fG58fGUpe2lmKGkmJlwicmVmZXJlbmNlXCI9PT1pLnR5cGUmJlwiKVwiPT09ZSlyZXR1cm4gaS50eXBlPVwiZnVuY3Rpb25cIixpLnZhbHVlPXRoaXMuX3N1YkZvcm11bGEobixpLnZhbHVlKSx2b2lkKG49XCJcIik7aWYoXCIpXCI9PT1lKXtjb25zdCBlPW5ldyB0LlBhcnNlcihuLHRoaXMuc2V0dGluZ3MpO3IucHVzaCh7dHlwZTpcInNlZ21lbnRcIix2YWx1ZTplfSl9ZWxzZSBpZihhKXtpZihcIl1cIj09PWEpcmV0dXJuIHIucHVzaCh7dHlwZTpcInJlZmVyZW5jZVwiLHZhbHVlOm59KSx2b2lkKG49XCJcIik7ci5wdXNoKHt0eXBlOlwibGl0ZXJhbFwiLHZhbHVlOm59KX1lbHNlIGlmKHMub3BlcmF0b3JDaGFyYWN0ZXJzLmluY2x1ZGVzKG4pKWkmJlwib3BlcmF0b3JcIj09PWkudHlwZSYmcy5vcGVyYXRvcnMuaW5jbHVkZXMoaS52YWx1ZStuKT9pLnZhbHVlKz1uOnIucHVzaCh7dHlwZTpcIm9wZXJhdG9yXCIsdmFsdWU6bn0pO2Vsc2UgaWYobi5tYXRjaChzLm51bWJlclJ4KSlyLnB1c2goe3R5cGU6XCJjb25zdGFudFwiLHZhbHVlOnBhcnNlRmxvYXQobil9KTtlbHNlIGlmKHZvaWQgMCE9PXRoaXMuc2V0dGluZ3MuY29uc3RhbnRzW25dKXIucHVzaCh7dHlwZTpcImNvbnN0YW50XCIsdmFsdWU6dGhpcy5zZXR0aW5ncy5jb25zdGFudHNbbl19KTtlbHNle2lmKCFuLm1hdGNoKHMudG9rZW5SeCkpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBpbnZhbGlkIHRva2VuOiBcIi5jb25jYXQobikpO3IucHVzaCh7dHlwZTpcInJlZmVyZW5jZVwiLHZhbHVlOm59KX1uPVwiXCJ9fTtmb3IoY29uc3QgdCBvZiBlKWE/dD09PWE/KGkoKSxhPSExKTpuKz10Om8/XCIoXCI9PT10PyhuKz10LCsrbyk6XCIpXCI9PT10PygtLW8sbz9uKz10OmkodCkpOm4rPXQ6dCBpbiBzLmxpdGVyYWxzP2E9cy5saXRlcmFsc1t0XTpcIihcIj09PXQ/KGkoKSwrK28pOnMub3BlcmF0b3JDaGFyYWN0ZXJzLmluY2x1ZGVzKHQpPyhpKCksbj10LGkoKSk6XCIgXCIhPT10P24rPXQ6aSgpO2koKSxyPXIubWFwKChlLHQpPT5cIm9wZXJhdG9yXCIhPT1lLnR5cGV8fFwiLVwiIT09ZS52YWx1ZXx8dCYmXCJvcGVyYXRvclwiIT09clt0LTFdLnR5cGU/ZTp7dHlwZTpcIm9wZXJhdG9yXCIsdmFsdWU6XCJuXCJ9KTtsZXQgbD0hMTtmb3IoY29uc3QgZSBvZiByKXtpZihcIm9wZXJhdG9yXCI9PT1lLnR5cGUpe2lmKHMub3BlcmF0b3JzUHJlZml4LmluY2x1ZGVzKGUudmFsdWUpKWNvbnRpbnVlO2lmKCFsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgYW4gb3BlcmF0b3IgaW4gaW52YWxpZCBwb3NpdGlvblwiKTtpZighcy5vcGVyYXRvcnMuaW5jbHVkZXMoZS52YWx1ZSkpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBhbiB1bmtub3duIG9wZXJhdG9yIFwiLmNvbmNhdChlLnZhbHVlKSl9ZWxzZSBpZihsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgbWlzc2luZyBleHBlY3RlZCBvcGVyYXRvclwiKTtsPSFsfWlmKCFsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCB0cmFpbGluZyBvcGVyYXRvclwiKTsxPT09ci5sZW5ndGgmJltcInJlZmVyZW5jZVwiLFwibGl0ZXJhbFwiLFwiY29uc3RhbnRcIl0uaW5jbHVkZXMoclswXS50eXBlKSYmKHRoaXMuc2luZ2xlPXt0eXBlOlwicmVmZXJlbmNlXCI9PT1yWzBdLnR5cGU/XCJyZWZlcmVuY2VcIjpcInZhbHVlXCIsdmFsdWU6clswXS52YWx1ZX0pLHRoaXMuX3BhcnRzPXIubWFwKGU9PntpZihcIm9wZXJhdG9yXCI9PT1lLnR5cGUpcmV0dXJuIHMub3BlcmF0b3JzUHJlZml4LmluY2x1ZGVzKGUudmFsdWUpP2U6ZS52YWx1ZTtpZihcInJlZmVyZW5jZVwiIT09ZS50eXBlKXJldHVybiBlLnZhbHVlO2lmKHRoaXMuc2V0dGluZ3MudG9rZW5SeCYmIXRoaXMuc2V0dGluZ3MudG9rZW5SeC50ZXN0KGUudmFsdWUpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCByZWZlcmVuY2UgXCIuY29uY2F0KGUudmFsdWUpKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5yZWZlcmVuY2U/dGhpcy5zZXR0aW5ncy5yZWZlcmVuY2UoZS52YWx1ZSk6cy5yZWZlcmVuY2UoZS52YWx1ZSl9KX1fc3ViRm9ybXVsYShlLHIpe2NvbnN0IG49dGhpcy5zZXR0aW5ncy5mdW5jdGlvbnNbcl07aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIHVua25vd24gZnVuY3Rpb24gXCIuY29uY2F0KHIpKTtsZXQgbz1bXTtpZihlKXtsZXQgdD1cIlwiLG49MCxhPSExO2NvbnN0IGk9KCk9PntpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGZ1bmN0aW9uIFwiLmNvbmNhdChyLFwiIHdpdGggaW52YWxpZCBhcmd1bWVudHMgXCIpLmNvbmNhdChlKSk7by5wdXNoKHQpLHQ9XCJcIn07Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IG89ZVtyXTthPyh0Kz1vLG89PT1hJiYoYT0hMSkpOm8gaW4gcy5saXRlcmFscyYmIW4/KHQrPW8sYT1zLmxpdGVyYWxzW29dKTpcIixcIiE9PW98fG4/KHQrPW8sXCIoXCI9PT1vPysrbjpcIilcIj09PW8mJi0tbik6aSgpfWkoKX1yZXR1cm4gbz1vLm1hcChlPT5uZXcgdC5QYXJzZXIoZSx0aGlzLnNldHRpbmdzKSksZnVuY3Rpb24oZSl7Y29uc3QgdD1bXTtmb3IoY29uc3QgciBvZiBvKXQucHVzaChyLmV2YWx1YXRlKGUpKTtyZXR1cm4gbi5jYWxsKGUsLi4udCl9fWV2YWx1YXRlKGUpe2NvbnN0IHQ9dGhpcy5fcGFydHMuc2xpY2UoKTtmb3IobGV0IHI9dC5sZW5ndGgtMjtyPj0wOy0tcil7Y29uc3Qgbj10W3JdO2lmKG4mJlwib3BlcmF0b3JcIj09PW4udHlwZSl7Y29uc3Qgbz10W3IrMV07dC5zcGxpY2UocisxLDEpO2NvbnN0IGE9cy5ldmFsdWF0ZShvLGUpO3Rbcl09cy5zaW5nbGUobi52YWx1ZSxhKX19cmV0dXJuIHMub3BlcmF0b3JzT3JkZXIuZm9yRWFjaChyPT57Zm9yKGxldCBuPTE7bjx0Lmxlbmd0aC0xOylpZihyLmluY2x1ZGVzKHRbbl0pKXtjb25zdCByPXRbbl0sbz1zLmV2YWx1YXRlKHRbbi0xXSxlKSxhPXMuZXZhbHVhdGUodFtuKzFdLGUpO3Quc3BsaWNlKG4sMik7Y29uc3QgaT1zLmNhbGN1bGF0ZShyLG8sYSk7dFtuLTFdPTA9PT1pPzA6aX1lbHNlIG4rPTJ9KSxzLmV2YWx1YXRlKHRbMF0sZSl9fSx0LlBhcnNlci5wcm90b3R5cGVbcy5zeW1ib2xdPSEwLHMucmVmZXJlbmNlPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdCYmdm9pZCAwIT09dFtlXT90W2VdOm51bGx9fSxzLmV2YWx1YXRlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PT1lP251bGw6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKHQpOmVbcy5zeW1ib2xdP2UuZXZhbHVhdGUodCk6ZX0scy5zaW5nbGU9ZnVuY3Rpb24oZSx0KXtpZihcIiFcIj09PWUpcmV0dXJuIXQ7Y29uc3Qgcj0tdDtyZXR1cm4gMD09PXI/MDpyfSxzLmNhbGN1bGF0ZT1mdW5jdGlvbihlLHQscil7aWYoXCI/P1wiPT09ZSlyZXR1cm4gcy5leGlzdHModCk/dDpyO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0fHxcInN0cmluZ1wiPT10eXBlb2Ygcil7aWYoXCIrXCI9PT1lKXJldHVybih0PXMuZXhpc3RzKHQpP3Q6XCJcIikrKHI9cy5leGlzdHMocik/cjpcIlwiKX1lbHNlIHN3aXRjaChlKXtjYXNlXCJeXCI6cmV0dXJuIE1hdGgucG93KHQscik7Y2FzZVwiKlwiOnJldHVybiB0KnI7Y2FzZVwiL1wiOnJldHVybiB0L3I7Y2FzZVwiJVwiOnJldHVybiB0JXI7Y2FzZVwiK1wiOnJldHVybiB0K3I7Y2FzZVwiLVwiOnJldHVybiB0LXJ9c3dpdGNoKGUpe2Nhc2VcIjxcIjpyZXR1cm4gdDxyO2Nhc2VcIjw9XCI6cmV0dXJuIHQ8PXI7Y2FzZVwiPlwiOnJldHVybiB0PnI7Y2FzZVwiPj1cIjpyZXR1cm4gdD49cjtjYXNlXCI9PVwiOnJldHVybiB0PT09cjtjYXNlXCIhPVwiOnJldHVybiB0IT09cjtjYXNlXCImJlwiOnJldHVybiB0JiZyO2Nhc2VcInx8XCI6cmV0dXJuIHR8fHJ9cmV0dXJuIG51bGx9LHMuZXhpc3RzPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lfX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXIoOCksaT1yKDQpLGw9cig1KSxjPXt9O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImFsdGVybmF0aXZlc1wiLGZsYWdzOnttYXRjaDp7ZGVmYXVsdDpcImFueVwifX0sdGVybXM6e21hdGNoZXM6e2luaXQ6W10scmVnaXN0ZXI6bC50b1NpYmxpbmd9fSxhcmdzOihlLC4uLnQpPT4xPT09dC5sZW5ndGgmJkFycmF5LmlzQXJyYXkodFswXSk/ZS50cnkoLi4udFswXSk6ZS50cnkoLi4udCksdmFsaWRhdGUoZSx0KXtjb25zdHtzY2hlbWE6cixlcnJvcjpzLHN0YXRlOm4scHJlZnM6b309dDtpZihyLl9mbGFncy5tYXRjaCl7bGV0IHQsYT0wO2ZvcihsZXQgcz0wO3M8ci4kX3Rlcm1zLm1hdGNoZXMubGVuZ3RoOysrcyl7Y29uc3QgaT1yLiRfdGVybXMubWF0Y2hlc1tzXSxsPW4ubmVzdChpLnNjaGVtYSxcIm1hdGNoLlwiLmNvbmNhdChzKSk7bC5zbmFwc2hvdCgpO2NvbnN0IGM9aS5zY2hlbWEuJF92YWxpZGF0ZShlLGwsbyk7Yy5lcnJvcnM/bC5yZXN0b3JlKCk6KCsrYSx0PWMudmFsdWUpfXJldHVybiBhP1wib25lXCI9PT1yLl9mbGFncy5tYXRjaD8xPT09YT97dmFsdWU6dH06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLm9uZVwiKX06YT09PXIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aD97dmFsdWU6ZX06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLmFsbFwiKX06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLmFueVwiKX19Y29uc3QgYT1bXTtmb3IobGV0IHQ9MDt0PHIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aDsrK3Qpe2NvbnN0IHM9ci4kX3Rlcm1zLm1hdGNoZXNbdF07aWYocy5zY2hlbWEpe2NvbnN0IHI9bi5uZXN0KHMuc2NoZW1hLFwibWF0Y2guXCIuY29uY2F0KHQpKTtyLnNuYXBzaG90KCk7Y29uc3QgaT1zLnNjaGVtYS4kX3ZhbGlkYXRlKGUscixvKTtpZighaS5lcnJvcnMpcmV0dXJuIGk7ci5yZXN0b3JlKCksYS5wdXNoKHtzY2hlbWE6cy5zY2hlbWEscmVwb3J0czppLmVycm9yc30pO2NvbnRpbnVlfWNvbnN0IGk9cy5yZWY/cy5yZWYucmVzb2x2ZShlLG4sbyk6ZSxsPXMuaXM/W3NdOnMuc3dpdGNoO2ZvcihsZXQgcj0wO3I8bC5sZW5ndGg7KytyKXtjb25zdCBhPWxbcl0se2lzOmMsdGhlbjp1LG90aGVyd2lzZTpmfT1hLG09XCJtYXRjaC5cIi5jb25jYXQodCkuY29uY2F0KHMuc3dpdGNoP1wiLlwiK3I6XCJcIik7aWYoYy4kX21hdGNoKGksbi5uZXN0KGMsXCJcIi5jb25jYXQobSxcIi5pc1wiKSksbykpe2lmKHUpcmV0dXJuIHUuJF92YWxpZGF0ZShlLG4ubmVzdCh1LFwiXCIuY29uY2F0KG0sXCIudGhlblwiKSksbyl9ZWxzZSBpZihmKXJldHVybiBmLiRfdmFsaWRhdGUoZSxuLm5lc3QoZixcIlwiLmNvbmNhdChtLFwiLm90aGVyd2lzZVwiKSksbyl9fXJldHVybiBjLmVycm9ycyhhLHQpfSxydWxlczp7Y29uZGl0aW9uYWw6e21ldGhvZChlLHQpe3MoIXRoaXMuX2ZsYWdzLl9lbmRlZFN3aXRjaCxcIlVucmVhY2hhYmxlIGNvbmRpdGlvblwiKSxzKCF0aGlzLl9mbGFncy5tYXRjaCxcIkNhbm5vdCBjb21iaW5lIG1hdGNoIG1vZGVcIix0aGlzLl9mbGFncy5tYXRjaCxcIndpdGggY29uZGl0aW9uYWwgcnVsZVwiKSxzKHZvaWQgMD09PXQuYnJlYWssXCJDYW5ub3QgdXNlIGJyZWFrIG9wdGlvbiB3aXRoIGFsdGVybmF0aXZlcyBjb25kaXRpb25hbFwiKTtjb25zdCByPXRoaXMuY2xvbmUoKSxuPWEud2hlbihyLGUsdCksbz1uLmlzP1tuXTpuLnN3aXRjaDtmb3IoY29uc3QgZSBvZiBvKWlmKGUudGhlbiYmZS5vdGhlcndpc2Upe3IuJF9zZXRGbGFnKFwiX2VuZGVkU3dpdGNoXCIsITAse2Nsb25lOiExfSk7YnJlYWt9cmV0dXJuIHIuJF90ZXJtcy5tYXRjaGVzLnB1c2gobiksci4kX211dGF0ZVJlYnVpbGQoKX19LG1hdGNoOnttZXRob2QoZSl7aWYocyhbXCJhbnlcIixcIm9uZVwiLFwiYWxsXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBhbHRlcm5hdGl2ZXMgbWF0Y2ggbW9kZVwiLGUpLFwiYW55XCIhPT1lKWZvcihjb25zdCB0IG9mIHRoaXMuJF90ZXJtcy5tYXRjaGVzKXModC5zY2hlbWEsXCJDYW5ub3QgY29tYmluZSBtYXRjaCBtb2RlXCIsZSxcIndpdGggY29uZGl0aW9uYWwgcnVsZXNcIik7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwibWF0Y2hcIixlKX19LHRyeTp7bWV0aG9kKC4uLmUpe3MoZS5sZW5ndGgsXCJNaXNzaW5nIGFsdGVybmF0aXZlIHNjaGVtYXNcIiksby52ZXJpZnlGbGF0KGUsXCJ0cnlcIikscyghdGhpcy5fZmxhZ3MuX2VuZGVkU3dpdGNoLFwiVW5yZWFjaGFibGUgY29uZGl0aW9uXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO2Zvcihjb25zdCByIG9mIGUpdC4kX3Rlcm1zLm1hdGNoZXMucHVzaCh7c2NoZW1hOnQuJF9jb21waWxlKHIpfSk7cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9fX0sb3ZlcnJpZGVzOntsYWJlbChlKXtyZXR1cm4gdGhpcy4kX3N1cGVyLmxhYmVsKGUpLiRfbW9kaWZ5KHtlYWNoOih0LHIpPT5cImlzXCIhPT1yLnBhdGhbMF0/dC5sYWJlbChlKTp2b2lkIDAscmVmOiExfSl9fSxyZWJ1aWxkKGUpe2UuJF9tb2RpZnkoe2VhY2g6dD0+e28uaXNTY2hlbWEodCkmJlwiYXJyYXlcIj09PXQudHlwZSYmZS4kX3NldEZsYWcoXCJfYXJyYXlJdGVtc1wiLCEwLHtjbG9uZTohMX0pfX0pfSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtpZih0Lm1hdGNoZXMpZm9yKGNvbnN0IHIgb2YgdC5tYXRjaGVzKXtjb25zdHtzY2hlbWE6dCxyZWY6cyxpczpuLG5vdDpvLHRoZW46YSxvdGhlcndpc2U6aX09cjtlPXQ/ZS50cnkodCk6cz9lLmNvbmRpdGlvbmFsKHMse2lzOm4sdGhlbjphLG5vdDpvLG90aGVyd2lzZTppLHN3aXRjaDpyLnN3aXRjaH0pOmUuY29uZGl0aW9uYWwobix7dGhlbjphLG90aGVyd2lzZTppfSl9cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJhbHRlcm5hdGl2ZXMuYWxsXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFsbCBvZiB0aGUgcmVxdWlyZWQgdHlwZXNcIixcImFsdGVybmF0aXZlcy5hbnlcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMubWF0Y2hcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMub25lXCI6XCJ7eyNsYWJlbH19IG1hdGNoZXMgbW9yZSB0aGFuIG9uZSBhbGxvd2VkIHR5cGVcIixcImFsdGVybmF0aXZlcy50eXBlc1wiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9uZSBvZiB7eyN0eXBlc319XCJ9fSksYy5lcnJvcnM9ZnVuY3Rpb24oZSx7ZXJyb3I6dCxzdGF0ZTpyfSl7aWYoIWUubGVuZ3RoKXJldHVybntlcnJvcnM6dChcImFsdGVybmF0aXZlcy5hbnlcIil9O2lmKDE9PT1lLmxlbmd0aClyZXR1cm57ZXJyb3JzOmVbMF0ucmVwb3J0c307Y29uc3Qgcz1uZXcgU2V0LG49W107Zm9yKGNvbnN0e3JlcG9ydHM6byxzY2hlbWE6YX1vZiBlKXtpZihvLmxlbmd0aD4xKXJldHVybiBjLnVubWF0Y2hlZChlLHQpO2NvbnN0IGw9b1swXTtpZihsIGluc3RhbmNlb2YgaS5SZXBvcnQ9PSExKXJldHVybiBjLnVubWF0Y2hlZChlLHQpO2lmKGwuc3RhdGUucGF0aC5sZW5ndGghPT1yLnBhdGgubGVuZ3RoKXtuLnB1c2goe3R5cGU6YS50eXBlLHJlcG9ydDpsfSk7Y29udGludWV9aWYoXCJhbnkub25seVwiPT09bC5jb2RlKXtmb3IoY29uc3QgZSBvZiBsLmxvY2FsLnZhbGlkcylzLmFkZChlKTtjb250aW51ZX1jb25zdFt1LGZdPWwuY29kZS5zcGxpdChcIi5cIik7XCJiYXNlXCI9PT1mP3MuYWRkKHUpOm4ucHVzaCh7dHlwZTphLnR5cGUscmVwb3J0Omx9KX1yZXR1cm4gbi5sZW5ndGg/MT09PW4ubGVuZ3RoP3tlcnJvcnM6blswXS5yZXBvcnR9OmMudW5tYXRjaGVkKGUsdCk6e2Vycm9yczp0KFwiYWx0ZXJuYXRpdmVzLnR5cGVzXCIse3R5cGVzOlsuLi5zXX0pfX0sYy51bm1hdGNoZWQ9ZnVuY3Rpb24oZSx0KXtjb25zdCByPVtdO2Zvcihjb25zdCB0IG9mIGUpci5wdXNoKC4uLnQucmVwb3J0cyk7cmV0dXJue2Vycm9yczp0KFwiYWx0ZXJuYXRpdmVzLm1hdGNoXCIsaS5kZXRhaWxzKHIse292ZXJyaWRlOiExfSkpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxMCksYT1yKDIwKSxpPXIoMTUpLGw9cigxKSxjPXIoOCksdT1yKDQpLGY9cigxNyksbT1yKDE4KSxoPXIoOSksZD1yKDM1KSxwPXIoNSksZz1yKDE5KSx5PXIoMzYpLGI9cigyMSksdj17QmFzZTpjbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLnR5cGU9ZSx0aGlzLiRfcm9vdD1udWxsLHRoaXMuX2RlZmluaXRpb249e30sdGhpcy5faWRzPW5ldyBkLklkcyx0aGlzLl9wcmVmZXJlbmNlcz1udWxsLHRoaXMuX3JlZnM9bmV3IHAuTWFuYWdlcix0aGlzLl9jYWNoZT1udWxsLHRoaXMuX3ZhbGlkcz1udWxsLHRoaXMuX2ludmFsaWRzPW51bGwsdGhpcy5fZmxhZ3M9e30sdGhpcy5fcnVsZXM9W10sdGhpcy5fc2luZ2xlUnVsZXM9bmV3IE1hcCx0aGlzLiRfdGVybXM9e30sdGhpcy4kX3RlbXA9e3J1bGVzZXQ6bnVsbCx3aGVuczp7fX19ZGVzY3JpYmUoKXtyZXR1cm4gcyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBtLmRlc2NyaWJlLFwiTWFuaWZlc3QgZnVuY3Rpb25hbGl0eSBkaXNhYmxlZFwiKSxtLmRlc2NyaWJlKHRoaXMpfWFsbG93KC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcImFsbG93XCIpLHRoaXMuX3ZhbHVlcyhlLFwiX3ZhbGlkc1wiKX1hbHRlcihlKXtzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYhQXJyYXkuaXNBcnJheShlKSxcIkludmFsaWQgdGFyZ2V0cyBhcmd1bWVudFwiKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgYWx0ZXJhdGlvbnMgaW5zaWRlIGEgcnVsZXNldFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMuYWx0ZXJhdGlvbnM9dC4kX3Rlcm1zLmFsdGVyYXRpb25zfHxbXTtmb3IoY29uc3QgciBpbiBlKXtjb25zdCBuPWVbcl07cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLFwiQWx0ZXJhdGlvbiBhZGp1c3RlciBmb3JcIixyLFwibXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHQuJF90ZXJtcy5hbHRlcmF0aW9ucy5wdXNoKHt0YXJnZXQ6cixhZGp1c3RlcjpufSl9cmV0dXJuIHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdH1jYXN0KGUpe3JldHVybiBzKCExPT09ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHRvIHZhbHVlXCIpLHMoITE9PT1lfHx0aGlzLl9kZWZpbml0aW9uLmNhc3RbZV0sXCJUeXBlXCIsdGhpcy50eXBlLFwiZG9lcyBub3Qgc3VwcG9ydCBjYXN0aW5nIHRvXCIsZSksdGhpcy4kX3NldEZsYWcoXCJjYXN0XCIsITE9PT1lP3ZvaWQgMDplKX1kZWZhdWx0KGUsdCl7cmV0dXJuIHRoaXMuX2RlZmF1bHQoXCJkZWZhdWx0XCIsZSx0KX1kZXNjcmlwdGlvbihlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkRlc2NyaXB0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9zZXRGbGFnKFwiZGVzY3JpcHRpb25cIixlKX1lbXB0eShlKXtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdm9pZCAwIT09ZSYmKGU9dC4kX2NvbXBpbGUoZSx7b3ZlcnJpZGU6ITF9KSksdC4kX3NldEZsYWcoXCJlbXB0eVwiLGUse2Nsb25lOiExfSl9ZXJyb3IoZSl7cmV0dXJuIHMoZSxcIk1pc3NpbmcgZXJyb3JcIikscyhlIGluc3RhbmNlb2YgRXJyb3J8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNdXN0IHByb3ZpZGUgYSB2YWxpZCBFcnJvciBvYmplY3Qgb3IgYSBmdW5jdGlvblwiKSx0aGlzLiRfc2V0RmxhZyhcImVycm9yXCIsZSl9ZXhhbXBsZShlLHQ9e30pe3JldHVybiBzKHZvaWQgMCE9PWUsXCJNaXNzaW5nIGV4YW1wbGVcIiksbC5hc3NlcnRPcHRpb25zKHQsW1wib3ZlcnJpZGVcIl0pLHRoaXMuX2lubmVyKFwiZXhhbXBsZXNcIixlLHtzaW5nbGU6ITAsb3ZlcnJpZGU6dC5vdmVycmlkZX0pfWV4dGVybmFsKGUsdCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJihzKCF0LFwiQ2Fubm90IGNvbWJpbmUgb3B0aW9ucyB3aXRoIGRlc2NyaXB0aW9uXCIpLHQ9ZS5kZXNjcmlwdGlvbixlPWUubWV0aG9kKSxzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNZXRob2QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHModm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLl9pbm5lcihcImV4dGVybmFsc1wiLHttZXRob2Q6ZSxkZXNjcmlwdGlvbjp0fSx7c2luZ2xlOiEwfSl9ZmFpbG92ZXIoZSx0KXtyZXR1cm4gdGhpcy5fZGVmYXVsdChcImZhaWxvdmVyXCIsZSx0KX1mb3JiaWRkZW4oKXtyZXR1cm4gdGhpcy5wcmVzZW5jZShcImZvcmJpZGRlblwiKX1pZChlKXtyZXR1cm4gZT8ocyhcInN0cmluZ1wiPT10eXBlb2YgZSxcImlkIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHMoL15bXlxcLl0rJC8udGVzdChlKSxcImlkIGNhbm5vdCBjb250YWluIHBlcmlvZCBjaGFyYWN0ZXJcIiksdGhpcy4kX3NldEZsYWcoXCJpZFwiLGUpKTp0aGlzLiRfc2V0RmxhZyhcImlkXCIsdm9pZCAwKX1pbnZhbGlkKC4uLmUpe3JldHVybiB0aGlzLl92YWx1ZXMoZSxcIl9pbnZhbGlkc1wiKX1sYWJlbChlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkxhYmVsIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy4kX3NldEZsYWcoXCJsYWJlbFwiLGUpfW1ldGEoZSl7cmV0dXJuIHModm9pZCAwIT09ZSxcIk1ldGEgY2Fubm90IGJlIHVuZGVmaW5lZFwiKSx0aGlzLl9pbm5lcihcIm1ldGFzXCIsZSx7c2luZ2xlOiEwfSl9bm90ZSguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyBub3Rlc1wiKTtmb3IoY29uc3QgdCBvZiBlKXModCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJOb3RlcyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdzXCIpO3JldHVybiB0aGlzLl9pbm5lcihcIm5vdGVzXCIsZSl9b25seShlPSEwKXtyZXR1cm4gcyhcImJvb2xlYW5cIj09dHlwZW9mIGUsXCJJbnZhbGlkIG1vZGU6XCIsZSksdGhpcy4kX3NldEZsYWcoXCJvbmx5XCIsZSl9b3B0aW9uYWwoKXtyZXR1cm4gdGhpcy5wcmVzZW5jZShcIm9wdGlvbmFsXCIpfXByZWZzKGUpe3MoZSxcIk1pc3NpbmcgcHJlZmVyZW5jZXNcIikscyh2b2lkIDA9PT1lLmNvbnRleHQsXCJDYW5ub3Qgb3ZlcnJpZGUgY29udGV4dFwiKSxzKHZvaWQgMD09PWUuZXh0ZXJuYWxzLFwiQ2Fubm90IG92ZXJyaWRlIGV4dGVybmFsc1wiKSxzKHZvaWQgMD09PWUud2FybmluZ3MsXCJDYW5ub3Qgb3ZlcnJpZGUgd2FybmluZ3NcIikscyh2b2lkIDA9PT1lLmRlYnVnLFwiQ2Fubm90IG92ZXJyaWRlIGRlYnVnXCIpLGwuY2hlY2tQcmVmZXJlbmNlcyhlKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fcHJlZmVyZW5jZXM9bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyxlKSx0fXByZXNlbmNlKGUpe3JldHVybiBzKFtcIm9wdGlvbmFsXCIsXCJyZXF1aXJlZFwiLFwiZm9yYmlkZGVuXCJdLmluY2x1ZGVzKGUpLFwiVW5rbm93biBwcmVzZW5jZSBtb2RlXCIsZSksdGhpcy4kX3NldEZsYWcoXCJwcmVzZW5jZVwiLGUpfXJhdyhlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlP1wicmF3XCI6dm9pZCAwKX1yZXN1bHQoZSl7cmV0dXJuIHMoW1wicmF3XCIsXCJzdHJpcFwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gcmVzdWx0IG1vZGVcIixlKSx0aGlzLiRfc2V0RmxhZyhcInJlc3VsdFwiLGUpfXJlcXVpcmVkKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJyZXF1aXJlZFwiKX1zdHJpY3QoZSl7Y29uc3QgdD10aGlzLmNsb25lKCkscj12b2lkIDAhPT1lJiYhZTtyZXR1cm4gdC5fcHJlZmVyZW5jZXM9bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyx7Y29udmVydDpyfSksdH1zdHJpcChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlP1wic3RyaXBcIjp2b2lkIDApfXRhZyguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyB0YWdzXCIpO2Zvcihjb25zdCB0IG9mIGUpcyh0JiZcInN0cmluZ1wiPT10eXBlb2YgdCxcIlRhZ3MgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nc1wiKTtyZXR1cm4gdGhpcy5faW5uZXIoXCJ0YWdzXCIsZSl9dW5pdChlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIlVuaXQgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfc2V0RmxhZyhcInVuaXRcIixlKX12YWxpZCguLi5lKXtsLnZlcmlmeUZsYXQoZSxcInZhbGlkXCIpO2NvbnN0IHQ9dGhpcy5hbGxvdyguLi5lKTtyZXR1cm4gdC4kX3NldEZsYWcoXCJvbmx5XCIsISF0Ll92YWxpZHMse2Nsb25lOiExfSksdH13aGVuKGUsdCl7Y29uc3Qgcj10aGlzLmNsb25lKCk7ci4kX3Rlcm1zLndoZW5zfHwoci4kX3Rlcm1zLndoZW5zPVtdKTtjb25zdCBuPWMud2hlbihyLGUsdCk7aWYoIVtcImFueVwiLFwibGlua1wiXS5pbmNsdWRlcyhyLnR5cGUpKXtjb25zdCBlPW4uaXM/W25dOm4uc3dpdGNoO2Zvcihjb25zdCB0IG9mIGUpcyghdC50aGVufHxcImFueVwiPT09dC50aGVuLnR5cGV8fHQudGhlbi50eXBlPT09ci50eXBlLFwiQ2Fubm90IGNvbWJpbmVcIixyLnR5cGUsXCJ3aXRoXCIsdC50aGVuJiZ0LnRoZW4udHlwZSkscyghdC5vdGhlcndpc2V8fFwiYW55XCI9PT10Lm90aGVyd2lzZS50eXBlfHx0Lm90aGVyd2lzZS50eXBlPT09ci50eXBlLFwiQ2Fubm90IGNvbWJpbmVcIixyLnR5cGUsXCJ3aXRoXCIsdC5vdGhlcndpc2UmJnQub3RoZXJ3aXNlLnR5cGUpfXJldHVybiByLiRfdGVybXMud2hlbnMucHVzaChuKSxyLiRfbXV0YXRlUmVidWlsZCgpfWNhY2hlKGUpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBjYWNoaW5nIGluc2lkZSBhIHJ1bGVzZXRcIikscyghdGhpcy5fY2FjaGUsXCJDYW5ub3Qgb3ZlcnJpZGUgc2NoZW1hIGNhY2hlXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0Ll9jYWNoZT1lfHxpLnByb3ZpZGVyLnByb3Zpc2lvbigpLHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdH1jbG9uZSgpe2NvbnN0IGU9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO3JldHVybiB0aGlzLl9hc3NpZ24oZSl9Y29uY2F0KGUpe3MobC5pc1NjaGVtYShlKSxcIkludmFsaWQgc2NoZW1hIG9iamVjdFwiKSxzKFwiYW55XCI9PT10aGlzLnR5cGV8fFwiYW55XCI9PT1lLnR5cGV8fGUudHlwZT09PXRoaXMudHlwZSxcIkNhbm5vdCBtZXJnZSB0eXBlXCIsdGhpcy50eXBlLFwid2l0aCBhbm90aGVyIHR5cGU6XCIsZS50eXBlKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBjb25jYXRlbmF0ZSBvbnRvIGEgc2NoZW1hIHdpdGggb3BlbiBydWxlc2V0XCIpLHMoIWUuX2luUnVsZXNldCgpLFwiQ2Fubm90IGNvbmNhdGVuYXRlIGEgc2NoZW1hIHdpdGggb3BlbiBydWxlc2V0XCIpO2xldCB0PXRoaXMuY2xvbmUoKTtpZihcImFueVwiPT09dGhpcy50eXBlJiZcImFueVwiIT09ZS50eXBlKXtjb25zdCByPWUuY2xvbmUoKTtmb3IoY29uc3QgZSBvZiBPYmplY3Qua2V5cyh0KSlcInR5cGVcIiE9PWUmJihyW2VdPXRbZV0pO3Q9cn10Ll9pZHMuY29uY2F0KGUuX2lkcyksdC5fcmVmcy5yZWdpc3RlcihlLHAudG9TaWJsaW5nKSx0Ll9wcmVmZXJlbmNlcz10Ll9wcmVmZXJlbmNlcz9sLnByZWZlcmVuY2VzKHQuX3ByZWZlcmVuY2VzLGUuX3ByZWZlcmVuY2VzKTplLl9wcmVmZXJlbmNlcyx0Ll92YWxpZHM9Yi5tZXJnZSh0Ll92YWxpZHMsZS5fdmFsaWRzLGUuX2ludmFsaWRzKSx0Ll9pbnZhbGlkcz1iLm1lcmdlKHQuX2ludmFsaWRzLGUuX2ludmFsaWRzLGUuX3ZhbGlkcyk7Zm9yKGNvbnN0IHIgb2YgZS5fc2luZ2xlUnVsZXMua2V5cygpKXQuX3NpbmdsZVJ1bGVzLmhhcyhyKSYmKHQuX3J1bGVzPXQuX3J1bGVzLmZpbHRlcihlPT5lLmtlZXB8fGUubmFtZSE9PXIpLHQuX3NpbmdsZVJ1bGVzLmRlbGV0ZShyKSk7Zm9yKGNvbnN0IHIgb2YgZS5fcnVsZXMpZS5fZGVmaW5pdGlvbi5ydWxlc1tyLm1ldGhvZF0ubXVsdGl8fHQuX3NpbmdsZVJ1bGVzLnNldChyLm5hbWUsciksdC5fcnVsZXMucHVzaChyKTtpZih0Ll9mbGFncy5lbXB0eSYmZS5fZmxhZ3MuZW1wdHkpe3QuX2ZsYWdzLmVtcHR5PXQuX2ZsYWdzLmVtcHR5LmNvbmNhdChlLl9mbGFncy5lbXB0eSk7Y29uc3Qgcj1PYmplY3QuYXNzaWduKHt9LGUuX2ZsYWdzKTtkZWxldGUgci5lbXB0eSxhKHQuX2ZsYWdzLHIpfWVsc2UgaWYoZS5fZmxhZ3MuZW1wdHkpe3QuX2ZsYWdzLmVtcHR5PWUuX2ZsYWdzLmVtcHR5O2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxlLl9mbGFncyk7ZGVsZXRlIHIuZW1wdHksYSh0Ll9mbGFncyxyKX1lbHNlIGEodC5fZmxhZ3MsZS5fZmxhZ3MpO2Zvcihjb25zdCByIGluIGUuJF90ZXJtcyl7Y29uc3Qgcz1lLiRfdGVybXNbcl07cz90LiRfdGVybXNbcl0/dC4kX3Rlcm1zW3JdPXQuJF90ZXJtc1tyXS5jb25jYXQocyk6dC4kX3Rlcm1zW3JdPXMuc2xpY2UoKTp0LiRfdGVybXNbcl18fCh0LiRfdGVybXNbcl09cyl9cmV0dXJuIHRoaXMuJF9yb290Ll90cmFjZXImJnRoaXMuJF9yb290Ll90cmFjZXIuX2NvbWJpbmUodCxbdGhpcyxlXSksdC4kX211dGF0ZVJlYnVpbGQoKX1leHRlbmQoZSl7cmV0dXJuIHMoIWUuYmFzZSxcIkNhbm5vdCBleHRlbmQgdHlwZSB3aXRoIGFub3RoZXIgYmFzZVwiKSxmLnR5cGUodGhpcyxlKX1leHRyYWN0KGUpe3JldHVybiBlPUFycmF5LmlzQXJyYXkoZSk/ZTplLnNwbGl0KFwiLlwiKSx0aGlzLl9pZHMucmVhY2goZSl9Zm9yayhlLHQpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IGZvcmsgaW5zaWRlIGEgcnVsZXNldFwiKTtsZXQgcj10aGlzO2ZvcihsZXQgcyBvZltdLmNvbmNhdChlKSlzPUFycmF5LmlzQXJyYXkocyk/czpzLnNwbGl0KFwiLlwiKSxyPXIuX2lkcy5mb3JrKHMsdCxyKTtyZXR1cm4gci4kX3RlbXAucnVsZXNldD0hMSxyfXJ1bGUoZSl7Y29uc3QgdD10aGlzLl9kZWZpbml0aW9uO2wuYXNzZXJ0T3B0aW9ucyhlLE9iamVjdC5rZXlzKHQubW9kaWZpZXJzKSkscyghMSE9PXRoaXMuJF90ZW1wLnJ1bGVzZXQsXCJDYW5ub3QgYXBwbHkgcnVsZXMgdG8gZW1wdHkgcnVsZXNldCBvciB0aGUgbGFzdCBydWxlIGFkZGVkIGRvZXMgbm90IHN1cHBvcnQgcnVsZSBwcm9wZXJ0aWVzXCIpO2NvbnN0IHI9bnVsbD09PXRoaXMuJF90ZW1wLnJ1bGVzZXQ/dGhpcy5fcnVsZXMubGVuZ3RoLTE6dGhpcy4kX3RlbXAucnVsZXNldDtzKHI+PTAmJnI8dGhpcy5fcnVsZXMubGVuZ3RoLFwiQ2Fubm90IGFwcGx5IHJ1bGVzIHRvIGVtcHR5IHJ1bGVzZXRcIik7Y29uc3Qgbz10aGlzLmNsb25lKCk7Zm9yKGxldCBhPXI7YTxvLl9ydWxlcy5sZW5ndGg7KythKXtjb25zdCByPW8uX3J1bGVzW2FdLGk9bihyKTtmb3IoY29uc3QgbiBpbiBlKXQubW9kaWZpZXJzW25dKGksZVtuXSkscyhpLm5hbWU9PT1yLm5hbWUsXCJDYW5ub3QgY2hhbmdlIHJ1bGUgbmFtZVwiKTtvLl9ydWxlc1thXT1pLG8uX3NpbmdsZVJ1bGVzLmdldChpLm5hbWUpPT09ciYmby5fc2luZ2xlUnVsZXMuc2V0KGkubmFtZSxpKX1yZXR1cm4gby4kX3RlbXAucnVsZXNldD0hMSxvLiRfbXV0YXRlUmVidWlsZCgpfWdldCBydWxlc2V0KCl7cyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc3RhcnQgYSBuZXcgcnVsZXNldCB3aXRob3V0IGNsb3NpbmcgdGhlIHByZXZpb3VzIG9uZVwiKTtjb25zdCBlPXRoaXMuY2xvbmUoKTtyZXR1cm4gZS4kX3RlbXAucnVsZXNldD1lLl9ydWxlcy5sZW5ndGgsZX1nZXQgJCgpe3JldHVybiB0aGlzLnJ1bGVzZXR9dGFpbG9yKGUpe2U9W10uY29uY2F0KGUpLHMoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHRhaWxvciBpbnNpZGUgYSBydWxlc2V0XCIpO2xldCB0PXRoaXM7aWYodGhpcy4kX3Rlcm1zLmFsdGVyYXRpb25zKWZvcihjb25zdHt0YXJnZXQ6cixhZGp1c3RlcjpufW9mIHRoaXMuJF90ZXJtcy5hbHRlcmF0aW9ucyllLmluY2x1ZGVzKHIpJiYodD1uKHQpLHMobC5pc1NjaGVtYSh0KSxcIkFsdGVyYXRpb24gYWRqdXN0ZXIgZm9yXCIscixcImZhaWxlZCB0byByZXR1cm4gYSBzY2hlbWEgb2JqZWN0XCIpKTtyZXR1cm4gdD10LiRfbW9kaWZ5KHtlYWNoOnQ9PnQudGFpbG9yKGUpLHJlZjohMX0pLHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdC4kX211dGF0ZVJlYnVpbGQoKX10cmFjZXIoKXtyZXR1cm4gZy5sb2NhdGlvbj9nLmxvY2F0aW9uKHRoaXMpOnRoaXN9dmFsaWRhdGUoZSx0KXtyZXR1cm4geS5lbnRyeShlLHRoaXMsdCl9dmFsaWRhdGVBc3luYyhlLHQpe3JldHVybiB5LmVudHJ5QXN5bmMoZSx0aGlzLHQpfSRfYWRkUnVsZShlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9e25hbWU6ZX0pLHMoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIG9wdGlvbnNcIikscyhlLm5hbWUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLm5hbWUsXCJJbnZhbGlkIHJ1bGUgbmFtZVwiKTtmb3IoY29uc3QgdCBpbiBlKXMoXCJfXCIhPT10WzBdLFwiQ2Fubm90IHNldCBwcml2YXRlIHJ1bGUgcHJvcGVydGllc1wiKTtjb25zdCB0PU9iamVjdC5hc3NpZ24oe30sZSk7dC5fcmVzb2x2ZT1bXSx0Lm1ldGhvZD10Lm1ldGhvZHx8dC5uYW1lO2NvbnN0IHI9dGhpcy5fZGVmaW5pdGlvbi5ydWxlc1t0Lm1ldGhvZF0sbj10LmFyZ3M7cyhyLFwiVW5rbm93biBydWxlXCIsdC5tZXRob2QpO2NvbnN0IG89dGhpcy5jbG9uZSgpO2lmKG4pe3MoMT09PU9iamVjdC5rZXlzKG4pLmxlbmd0aHx8T2JqZWN0LmtleXMobikubGVuZ3RoPT09dGhpcy5fZGVmaW5pdGlvbi5ydWxlc1t0Lm5hbWVdLmFyZ3MubGVuZ3RoLFwiSW52YWxpZCBydWxlIGRlZmluaXRpb24gZm9yXCIsdGhpcy50eXBlLHQubmFtZSk7Zm9yKGNvbnN0IGUgaW4gbil7bGV0IGE9bltlXTtpZih2b2lkIDAhPT1hKXtpZihyLmFyZ3NCeU5hbWUpe2NvbnN0IGk9ci5hcmdzQnlOYW1lLmdldChlKTtpZihpLnJlZiYmbC5pc1Jlc29sdmFibGUoYSkpdC5fcmVzb2x2ZS5wdXNoKGUpLG8uJF9tdXRhdGVSZWdpc3RlcihhKTtlbHNlIGlmKGkubm9ybWFsaXplJiYoYT1pLm5vcm1hbGl6ZShhKSxuW2VdPWEpLGkuYXNzZXJ0KXtjb25zdCB0PWwudmFsaWRhdGVBcmcoYSxlLGkpO3MoIXQsdCxcIm9yIHJlZmVyZW5jZVwiKX19bltlXT1hfWVsc2UgZGVsZXRlIG5bZV19fXJldHVybiByLm11bHRpfHwoby5fcnVsZVJlbW92ZSh0Lm5hbWUse2Nsb25lOiExfSksby5fc2luZ2xlUnVsZXMuc2V0KHQubmFtZSx0KSksITE9PT1vLiRfdGVtcC5ydWxlc2V0JiYoby4kX3RlbXAucnVsZXNldD1udWxsKSxyLnByaW9yaXR5P28uX3J1bGVzLnVuc2hpZnQodCk6by5fcnVsZXMucHVzaCh0KSxvfSRfY29tcGlsZShlLHQpe3JldHVybiBjLnNjaGVtYSh0aGlzLiRfcm9vdCxlLHQpfSRfY3JlYXRlRXJyb3IoZSx0LHIscyxuLG89e30pe2NvbnN0IGE9ITEhPT1vLmZsYWdzP3RoaXMuX2ZsYWdzOnt9LGk9by5tZXNzYWdlcz9oLm1lcmdlKHRoaXMuX2RlZmluaXRpb24ubWVzc2FnZXMsby5tZXNzYWdlcyk6dGhpcy5fZGVmaW5pdGlvbi5tZXNzYWdlcztyZXR1cm4gbmV3IHUuUmVwb3J0KGUsdCxyLGEsaSxzLG4pfSRfZ2V0RmxhZyhlKXtyZXR1cm4gdGhpcy5fZmxhZ3NbZV19JF9nZXRSdWxlKGUpe3JldHVybiB0aGlzLl9zaW5nbGVSdWxlcy5nZXQoZSl9JF9tYXBMYWJlbHMoZSl7cmV0dXJuIGU9QXJyYXkuaXNBcnJheShlKT9lOmUuc3BsaXQoXCIuXCIpLHRoaXMuX2lkcy5sYWJlbHMoZSl9JF9tYXRjaChlLHQscixzKXsocj1PYmplY3QuYXNzaWduKHt9LHIpKS5hYm9ydEVhcmx5PSEwLHIuX2V4dGVybmFscz0hMSx0LnNuYXBzaG90KCk7Y29uc3Qgbj0heS52YWxpZGF0ZShlLHRoaXMsdCxyLHMpLmVycm9ycztyZXR1cm4gdC5yZXN0b3JlKCksbn0kX21vZGlmeShlKXtyZXR1cm4gbC5hc3NlcnRPcHRpb25zKGUsW1wiZWFjaFwiLFwib25jZVwiLFwicmVmXCIsXCJzY2hlbWFcIl0pLGQuc2NoZW1hKHRoaXMsZSl8fHRoaXN9JF9tdXRhdGVSZWJ1aWxkKCl7cyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3QgYWRkIHRoaXMgcnVsZSBpbnNpZGUgYSBydWxlc2V0XCIpLHRoaXMuX3JlZnMucmVzZXQoKSx0aGlzLl9pZHMucmVzZXQoKTtyZXR1cm4gdGhpcy4kX21vZGlmeSh7ZWFjaDooZSx7c291cmNlOnQsbmFtZTpyLHBhdGg6cyxrZXk6bn0pPT57Y29uc3Qgbz10aGlzLl9kZWZpbml0aW9uW3RdW3JdJiZ0aGlzLl9kZWZpbml0aW9uW3RdW3JdLnJlZ2lzdGVyOyExIT09byYmdGhpcy4kX211dGF0ZVJlZ2lzdGVyKGUse2ZhbWlseTpvLGtleTpufSl9fSksdGhpcy5fZGVmaW5pdGlvbi5yZWJ1aWxkJiZ0aGlzLl9kZWZpbml0aW9uLnJlYnVpbGQodGhpcyksdGhpcy4kX3RlbXAucnVsZXNldD0hMSx0aGlzfSRfbXV0YXRlUmVnaXN0ZXIoZSx7ZmFtaWx5OnQsa2V5OnJ9PXt9KXt0aGlzLl9yZWZzLnJlZ2lzdGVyKGUsdCksdGhpcy5faWRzLnJlZ2lzdGVyKGUse2tleTpyfSl9JF9wcm9wZXJ0eShlKXtyZXR1cm4gdGhpcy5fZGVmaW5pdGlvbi5wcm9wZXJ0aWVzW2VdfSRfcmVhY2goZSl7cmV0dXJuIHRoaXMuX2lkcy5yZWFjaChlKX0kX3Jvb3RSZWZlcmVuY2VzKCl7cmV0dXJuIHRoaXMuX3JlZnMucm9vdHMoKX0kX3NldEZsYWcoZSx0LHI9e30pe3MoXCJfXCI9PT1lWzBdfHwhdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc2V0IGZsYWcgaW5zaWRlIGEgcnVsZXNldFwiKTtjb25zdCBuPXRoaXMuX2RlZmluaXRpb24uZmxhZ3NbZV18fHt9O2lmKG8odCxuLmRlZmF1bHQpJiYodD12b2lkIDApLG8odCx0aGlzLl9mbGFnc1tlXSkpcmV0dXJuIHRoaXM7Y29uc3QgYT0hMSE9PXIuY2xvbmU/dGhpcy5jbG9uZSgpOnRoaXM7cmV0dXJuIHZvaWQgMCE9PXQ/KGEuX2ZsYWdzW2VdPXQsYS4kX211dGF0ZVJlZ2lzdGVyKHQpKTpkZWxldGUgYS5fZmxhZ3NbZV0sXCJfXCIhPT1lWzBdJiYoYS4kX3RlbXAucnVsZXNldD0hMSksYX0kX3ZhbGlkYXRlKGUsdCxyKXtyZXR1cm4geS52YWxpZGF0ZShlLHRoaXMsdCxyKX1fYXNzaWduKGUpe2UudHlwZT10aGlzLnR5cGUsZS4kX3Jvb3Q9dGhpcy4kX3Jvb3QsZS4kX3RlbXA9T2JqZWN0LmFzc2lnbih7fSx0aGlzLiRfdGVtcCksZS4kX3RlbXAud2hlbnM9e30sZS5faWRzPXRoaXMuX2lkcy5jbG9uZSgpLGUuX3ByZWZlcmVuY2VzPXRoaXMuX3ByZWZlcmVuY2VzLGUuX3ZhbGlkcz10aGlzLl92YWxpZHMmJnRoaXMuX3ZhbGlkcy5jbG9uZSgpLGUuX2ludmFsaWRzPXRoaXMuX2ludmFsaWRzJiZ0aGlzLl9pbnZhbGlkcy5jbG9uZSgpLGUuX3J1bGVzPXRoaXMuX3J1bGVzLnNsaWNlKCksZS5fc2luZ2xlUnVsZXM9bih0aGlzLl9zaW5nbGVSdWxlcyx7c2hhbGxvdzohMH0pLGUuX3JlZnM9dGhpcy5fcmVmcy5jbG9uZSgpLGUuX2ZsYWdzPU9iamVjdC5hc3NpZ24oe30sdGhpcy5fZmxhZ3MpLGUuX2NhY2hlPW51bGwsZS4kX3Rlcm1zPXt9O2Zvcihjb25zdCB0IGluIHRoaXMuJF90ZXJtcyllLiRfdGVybXNbdF09dGhpcy4kX3Rlcm1zW3RdP3RoaXMuJF90ZXJtc1t0XS5zbGljZSgpOm51bGw7ZS4kX3N1cGVyPXt9O2Zvcihjb25zdCB0IGluIHRoaXMuJF9zdXBlcillLiRfc3VwZXJbdF09dGhpcy5fc3VwZXJbdF0uYmluZChlKTtyZXR1cm4gZX1fZGVmYXVsdChlLHQscj17fSl7cmV0dXJuIGwuYXNzZXJ0T3B0aW9ucyhyLFwibGl0ZXJhbFwiKSxzKHZvaWQgMCE9PXQsXCJNaXNzaW5nXCIsZSxcInZhbHVlXCIpLHMoXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8IXIubGl0ZXJhbCxcIk9ubHkgZnVuY3Rpb24gdmFsdWUgc3VwcG9ydHMgbGl0ZXJhbCBvcHRpb25cIiksXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmci5saXRlcmFsJiYodD17W2wuc3ltYm9scy5saXRlcmFsXTohMCxsaXRlcmFsOnR9KSx0aGlzLiRfc2V0RmxhZyhlLHQpfV9nZW5lcmF0ZShlLHQscil7aWYoIXRoaXMuJF90ZXJtcy53aGVucylyZXR1cm57c2NoZW1hOnRoaXN9O2NvbnN0IHM9W10sbj1bXTtmb3IobGV0IG89MDtvPHRoaXMuJF90ZXJtcy53aGVucy5sZW5ndGg7KytvKXtjb25zdCBhPXRoaXMuJF90ZXJtcy53aGVuc1tvXTtpZihhLmNvbmNhdCl7cy5wdXNoKGEuY29uY2F0KSxuLnB1c2goXCJcIi5jb25jYXQobyxcIi5jb25jYXRcIikpO2NvbnRpbnVlfWNvbnN0IGk9YS5yZWY/YS5yZWYucmVzb2x2ZShlLHQscik6ZSxsPWEuaXM/W2FdOmEuc3dpdGNoLGM9bi5sZW5ndGg7Zm9yKGxldCBjPTA7YzxsLmxlbmd0aDsrK2Mpe2NvbnN0e2lzOnUsdGhlbjpmLG90aGVyd2lzZTptfT1sW2NdLGg9XCJcIi5jb25jYXQobykuY29uY2F0KGEuc3dpdGNoP1wiLlwiK2M6XCJcIik7aWYodS4kX21hdGNoKGksdC5uZXN0KHUsXCJcIi5jb25jYXQoaCxcIi5pc1wiKSkscikpe2lmKGYpe2NvbnN0IG89dC5sb2NhbGl6ZShbLi4udC5wYXRoLFwiXCIuY29uY2F0KGgsXCIudGhlblwiKV0sdC5hbmNlc3RvcnMsdC5zY2hlbWFzKSx7c2NoZW1hOmEsaWQ6aX09Zi5fZ2VuZXJhdGUoZSxvLHIpO3MucHVzaChhKSxuLnB1c2goXCJcIi5jb25jYXQoaCxcIi50aGVuXCIpLmNvbmNhdChpP1wiKFwiLmNvbmNhdChpLFwiKVwiKTpcIlwiKSk7YnJlYWt9fWVsc2UgaWYobSl7Y29uc3Qgbz10LmxvY2FsaXplKFsuLi50LnBhdGgsXCJcIi5jb25jYXQoaCxcIi5vdGhlcndpc2VcIildLHQuYW5jZXN0b3JzLHQuc2NoZW1hcykse3NjaGVtYTphLGlkOml9PW0uX2dlbmVyYXRlKGUsbyxyKTtzLnB1c2goYSksbi5wdXNoKFwiXCIuY29uY2F0KGgsXCIub3RoZXJ3aXNlXCIpLmNvbmNhdChpP1wiKFwiLmNvbmNhdChpLFwiKVwiKTpcIlwiKSk7YnJlYWt9fWlmKGEuYnJlYWsmJm4ubGVuZ3RoPmMpYnJlYWt9Y29uc3Qgbz1uLmpvaW4oXCIsIFwiKTtpZih0Lm1haW5zdGF5LnRyYWNlci5kZWJ1Zyh0LFwicnVsZVwiLFwid2hlblwiLG8pLCFvKXJldHVybntzY2hlbWE6dGhpc307aWYoIXQubWFpbnN0YXkudHJhY2VyLmFjdGl2ZSYmdGhpcy4kX3RlbXAud2hlbnNbb10pcmV0dXJue3NjaGVtYTp0aGlzLiRfdGVtcC53aGVuc1tvXSxpZDpvfTtsZXQgYT10aGlzO3RoaXMuX2RlZmluaXRpb24uZ2VuZXJhdGUmJihhPXRoaXMuX2RlZmluaXRpb24uZ2VuZXJhdGUodGhpcyxlLHQscikpO2Zvcihjb25zdCBlIG9mIHMpYT1hLmNvbmNhdChlKTtyZXR1cm4gdGhpcy4kX3Jvb3QuX3RyYWNlciYmdGhpcy4kX3Jvb3QuX3RyYWNlci5fY29tYmluZShhLFt0aGlzLC4uLnNdKSx0aGlzLiRfdGVtcC53aGVuc1tvXT1hLHtzY2hlbWE6YSxpZDpvfX1faW5uZXIoZSx0LHI9e30pe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBcIi5jb25jYXQoZSxcIiBpbnNpZGUgYSBydWxlc2V0XCIpKTtjb25zdCBuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi4kX3Rlcm1zW2VdJiYhci5vdmVycmlkZXx8KG4uJF90ZXJtc1tlXT1bXSksci5zaW5nbGU/bi4kX3Rlcm1zW2VdLnB1c2godCk6bi4kX3Rlcm1zW2VdLnB1c2goLi4udCksbi4kX3RlbXAucnVsZXNldD0hMSxufV9pblJ1bGVzZXQoKXtyZXR1cm4gbnVsbCE9PXRoaXMuJF90ZW1wLnJ1bGVzZXQmJiExIT09dGhpcy4kX3RlbXAucnVsZXNldH1fcnVsZVJlbW92ZShlLHQ9e30pe2lmKCF0aGlzLl9zaW5nbGVSdWxlcy5oYXMoZSkpcmV0dXJuIHRoaXM7Y29uc3Qgcj0hMSE9PXQuY2xvbmU/dGhpcy5jbG9uZSgpOnRoaXM7ci5fc2luZ2xlUnVsZXMuZGVsZXRlKGUpO2NvbnN0IHM9W107Zm9yKGxldCB0PTA7dDxyLl9ydWxlcy5sZW5ndGg7Kyt0KXtjb25zdCBuPXIuX3J1bGVzW3RdO24ubmFtZSE9PWV8fG4ua2VlcD9zLnB1c2gobik6ci5faW5SdWxlc2V0KCkmJnQ8ci4kX3RlbXAucnVsZXNldCYmLS1yLiRfdGVtcC5ydWxlc2V0fXJldHVybiByLl9ydWxlcz1zLHJ9X3ZhbHVlcyhlLHQpe2wudmVyaWZ5RmxhdChlLHQuc2xpY2UoMSwtMSkpO2NvbnN0IHI9dGhpcy5jbG9uZSgpLG49ZVswXT09PWwuc3ltYm9scy5vdmVycmlkZTtpZihuJiYoZT1lLnNsaWNlKDEpKSwhclt0XSYmZS5sZW5ndGg/clt0XT1uZXcgYjpuJiYoclt0XT1lLmxlbmd0aD9uZXcgYjpudWxsLHIuJF9tdXRhdGVSZWJ1aWxkKCkpLCFyW3RdKXJldHVybiByO24mJnJbdF0ub3ZlcnJpZGUoKTtmb3IoY29uc3QgbiBvZiBlKXtzKHZvaWQgMCE9PW4sXCJDYW5ub3QgY2FsbCBhbGxvdy92YWxpZC9pbnZhbGlkIHdpdGggdW5kZWZpbmVkXCIpLHMobiE9PWwuc3ltYm9scy5vdmVycmlkZSxcIk92ZXJyaWRlIG11c3QgYmUgdGhlIGZpcnN0IHZhbHVlXCIpO2NvbnN0IGU9XCJfaW52YWxpZHNcIj09PXQ/XCJfdmFsaWRzXCI6XCJfaW52YWxpZHNcIjtyW2VdJiYocltlXS5yZW1vdmUobikscltlXS5sZW5ndGh8fChzKFwiX3ZhbGlkc1wiPT09dHx8IXIuX2ZsYWdzLm9ubHksXCJTZXR0aW5nIGludmFsaWQgdmFsdWVcIixuLFwibGVhdmVzIHNjaGVtYSByZWplY3RpbmcgYWxsIHZhbHVlcyBkdWUgdG8gcHJldmlvdXMgdmFsaWQgcnVsZVwiKSxyW2VdPW51bGwpKSxyW3RdLmFkZChuLHIuX3JlZnMpfXJldHVybiByfX19O3YuQmFzZS5wcm90b3R5cGVbbC5zeW1ib2xzLmFueV09e3ZlcnNpb246bC52ZXJzaW9uLGNvbXBpbGU6Yy5jb21waWxlLHJvb3Q6XCIkX3Jvb3RcIn0sdi5CYXNlLnByb3RvdHlwZS5pc0ltbXV0YWJsZT0hMCx2LkJhc2UucHJvdG90eXBlLmRlbnk9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUuZGlzYWxsb3c9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUuZXF1YWw9di5CYXNlLnByb3RvdHlwZS52YWxpZCx2LkJhc2UucHJvdG90eXBlLmV4aXN0PXYuQmFzZS5wcm90b3R5cGUucmVxdWlyZWQsdi5CYXNlLnByb3RvdHlwZS5ub3Q9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUub3B0aW9ucz12LkJhc2UucHJvdG90eXBlLnByZWZzLHYuQmFzZS5wcm90b3R5cGUucHJlZmVyZW5jZXM9di5CYXNlLnByb3RvdHlwZS5wcmVmcyxlLmV4cG9ydHM9bmV3IHYuQmFzZX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHMoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihzPXMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLHMpfXJldHVybiByfWZ1bmN0aW9uIG4oZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWNvbnN0IG89cigwKSxhPXIoMSksaT1yKDUpLGw9e307dC5JZHM9bC5JZHM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLl9ieUlkPW5ldyBNYXAsdGhpcy5fYnlLZXk9bmV3IE1hcCx0aGlzLl9zY2hlbWFDaGFpbj0hMX1jbG9uZSgpe2NvbnN0IGU9bmV3IGwuSWRzO3JldHVybiBlLl9ieUlkPW5ldyBNYXAodGhpcy5fYnlJZCksZS5fYnlLZXk9bmV3IE1hcCh0aGlzLl9ieUtleSksZS5fc2NoZW1hQ2hhaW49dGhpcy5fc2NoZW1hQ2hhaW4sZX1jb25jYXQoZSl7ZS5fc2NoZW1hQ2hhaW4mJih0aGlzLl9zY2hlbWFDaGFpbj0hMCk7Zm9yKGNvbnN0W3Qscl1vZiBlLl9ieUlkLmVudHJpZXMoKSlvKCF0aGlzLl9ieUtleS5oYXModCksXCJTY2hlbWEgaWQgY29uZmxpY3RzIHdpdGggZXhpc3Rpbmcga2V5OlwiLHQpLHRoaXMuX2J5SWQuc2V0KHQscik7Zm9yKGNvbnN0W3Qscl1vZiBlLl9ieUtleS5lbnRyaWVzKCkpbyghdGhpcy5fYnlJZC5oYXModCksXCJTY2hlbWEga2V5IGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGlkOlwiLHQpLHRoaXMuX2J5S2V5LnNldCh0LHIpfWZvcmsoZSx0LHIpe2NvbnN0IHM9dGhpcy5fY29sbGVjdChlKTtzLnB1c2goe3NjaGVtYTpyfSk7Y29uc3Qgbj1zLnNoaWZ0KCk7bGV0IGk9e2lkOm4uaWQsc2NoZW1hOnQobi5zY2hlbWEpfTtvKGEuaXNTY2hlbWEoaS5zY2hlbWEpLFwiYWRqdXN0ZXIgZnVuY3Rpb24gZmFpbGVkIHRvIHJldHVybiBhIGpvaSBzY2hlbWEgdHlwZVwiKTtmb3IoY29uc3QgZSBvZiBzKWk9e2lkOmUuaWQsc2NoZW1hOmwuZm9yayhlLnNjaGVtYSxpLmlkLGkuc2NoZW1hKX07cmV0dXJuIGkuc2NoZW1hfWxhYmVscyhlLHQ9W10pe2NvbnN0IHI9ZVswXSxzPXRoaXMuX2dldChyKTtpZighcylyZXR1cm5bLi4udCwuLi5lXS5qb2luKFwiLlwiKTtjb25zdCBuPWUuc2xpY2UoMSk7cmV0dXJuIHQ9Wy4uLnQscy5zY2hlbWEuX2ZsYWdzLmxhYmVsfHxyXSxuLmxlbmd0aD9zLnNjaGVtYS5faWRzLmxhYmVscyhuLHQpOnQuam9pbihcIi5cIil9cmVhY2goZSx0PVtdKXtjb25zdCByPWVbMF0scz10aGlzLl9nZXQocik7byhzLFwiU2NoZW1hIGRvZXMgbm90IGNvbnRhaW4gcGF0aFwiLFsuLi50LC4uLmVdLmpvaW4oXCIuXCIpKTtjb25zdCBuPWUuc2xpY2UoMSk7cmV0dXJuIG4ubGVuZ3RoP3Muc2NoZW1hLl9pZHMucmVhY2gobixbLi4udCxyXSk6cy5zY2hlbWF9cmVnaXN0ZXIoZSx7a2V5OnR9PXt9KXtpZighZXx8IWEuaXNTY2hlbWEoZSkpcmV0dXJuOyhlLiRfcHJvcGVydHkoXCJzY2hlbWFDaGFpblwiKXx8ZS5faWRzLl9zY2hlbWFDaGFpbikmJih0aGlzLl9zY2hlbWFDaGFpbj0hMCk7Y29uc3Qgcj1lLl9mbGFncy5pZDtpZihyKXtjb25zdCB0PXRoaXMuX2J5SWQuZ2V0KHIpO28oIXR8fHQuc2NoZW1hPT09ZSxcIkNhbm5vdCBhZGQgZGlmZmVyZW50IHNjaGVtYXMgd2l0aCB0aGUgc2FtZSBpZDpcIixyKSxvKCF0aGlzLl9ieUtleS5oYXMociksXCJTY2hlbWEgaWQgY29uZmxpY3RzIHdpdGggZXhpc3Rpbmcga2V5OlwiLHIpLHRoaXMuX2J5SWQuc2V0KHIse3NjaGVtYTplLGlkOnJ9KX10JiYobyghdGhpcy5fYnlLZXkuaGFzKHQpLFwiU2NoZW1hIGFscmVhZHkgY29udGFpbnMga2V5OlwiLHQpLG8oIXRoaXMuX2J5SWQuaGFzKHQpLFwiU2NoZW1hIGtleSBjb25mbGljdHMgd2l0aCBleGlzdGluZyBpZDpcIix0KSx0aGlzLl9ieUtleS5zZXQodCx7c2NoZW1hOmUsaWQ6dH0pKX1yZXNldCgpe3RoaXMuX2J5SWQ9bmV3IE1hcCx0aGlzLl9ieUtleT1uZXcgTWFwLHRoaXMuX3NjaGVtYUNoYWluPSExfV9jb2xsZWN0KGUsdD1bXSxyPVtdKXtjb25zdCBzPWVbMF0sbj10aGlzLl9nZXQocyk7byhuLFwiU2NoZW1hIGRvZXMgbm90IGNvbnRhaW4gcGF0aFwiLFsuLi50LC4uLmVdLmpvaW4oXCIuXCIpKSxyPVtuLC4uLnJdO2NvbnN0IGE9ZS5zbGljZSgxKTtyZXR1cm4gYS5sZW5ndGg/bi5zY2hlbWEuX2lkcy5fY29sbGVjdChhLFsuLi50LHNdLHIpOnJ9X2dldChlKXtyZXR1cm4gdGhpcy5fYnlJZC5nZXQoZSl8fHRoaXMuX2J5S2V5LmdldChlKX19LGwuZm9yaz1mdW5jdGlvbihlLHIscyl7Y29uc3Qgbj10LnNjaGVtYShlLHtlYWNoOihlLHtrZXk6dH0pPT57aWYocj09PShlLl9mbGFncy5pZHx8dCkpcmV0dXJuIHN9LHJlZjohMX0pO3JldHVybiBuP24uJF9tdXRhdGVSZWJ1aWxkKCk6ZX0sdC5zY2hlbWE9ZnVuY3Rpb24oZSx0KXtsZXQgcjtmb3IoY29uc3QgcyBpbiBlLl9mbGFncyl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGUuX2ZsYWdzW3NdLHtzb3VyY2U6XCJmbGFnc1wiLG5hbWU6c30sdCk7dm9pZCAwIT09biYmKHI9cnx8ZS5jbG9uZSgpLHIuX2ZsYWdzW3NdPW4pfWZvcihsZXQgcz0wO3M8ZS5fcnVsZXMubGVuZ3RoOysrcyl7Y29uc3Qgbj1lLl9ydWxlc1tzXSxvPWwuc2NhbihuLmFyZ3Mse3NvdXJjZTpcInJ1bGVzXCIsbmFtZTpuLm5hbWV9LHQpO2lmKHZvaWQgMCE9PW8pe3I9cnx8ZS5jbG9uZSgpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSxuKTt0LmFyZ3M9byxyLl9ydWxlc1tzXT10LHIuX3NpbmdsZVJ1bGVzLmdldChuLm5hbWUpPT09biYmci5fc2luZ2xlUnVsZXMuc2V0KG4ubmFtZSx0KX19Zm9yKGNvbnN0IHMgaW4gZS4kX3Rlcm1zKXtpZihcIl9cIj09PXNbMF0pY29udGludWU7Y29uc3Qgbj1sLnNjYW4oZS4kX3Rlcm1zW3NdLHtzb3VyY2U6XCJ0ZXJtc1wiLG5hbWU6c30sdCk7dm9pZCAwIT09biYmKHI9cnx8ZS5jbG9uZSgpLHIuJF90ZXJtc1tzXT1uKX1yZXR1cm4gcn0sbC5zY2FuPWZ1bmN0aW9uKGUsdCxyLG8sYyl7Y29uc3QgdT1vfHxbXTtpZihudWxsPT09ZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuO2xldCBmO2lmKEFycmF5LmlzQXJyYXkoZSkpe2ZvcihsZXQgcz0wO3M8ZS5sZW5ndGg7KytzKXtjb25zdCBuPVwidGVybXNcIj09PXQuc291cmNlJiZcImtleXNcIj09PXQubmFtZSYmZVtzXS5rZXksbz1sLnNjYW4oZVtzXSx0LHIsW3MsLi4udV0sbik7dm9pZCAwIT09byYmKGY9Znx8ZS5zbGljZSgpLGZbc109byl9cmV0dXJuIGZ9aWYoITEhPT1yLnNjaGVtYSYmYS5pc1NjaGVtYShlKXx8ITEhPT1yLnJlZiYmaS5pc1JlZihlKSl7Y29uc3Qgbz1yLmVhY2goZSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9zKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7bihlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6cyhPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX0oe30sdCx7cGF0aDp1LGtleTpjfSkpO2lmKG89PT1lKXJldHVybjtyZXR1cm4gb31mb3IoY29uc3QgcyBpbiBlKXtpZihcIl9cIj09PXNbMF0pY29udGludWU7Y29uc3Qgbj1sLnNjYW4oZVtzXSx0LHIsW3MsLi4udV0sYyk7dm9pZCAwIT09biYmKGY9Znx8T2JqZWN0LmFzc2lnbih7fSxlKSxmW3NdPW4pfXJldHVybiBmfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDM3KSxhPXIoNiksaT1yKDEpLGw9cig0KSxjPXIoMzgpLHU9e3Jlc3VsdDpTeW1ib2woXCJyZXN1bHRcIil9O3QuZW50cnk9ZnVuY3Rpb24oZSx0LHIpe2xldCBuPWkuZGVmYXVsdHM7ciYmKHModm9pZCAwPT09ci53YXJuaW5ncyxcIkNhbm5vdCBvdmVycmlkZSB3YXJuaW5ncyBwcmVmZXJlbmNlIGluIHN5bmNocm9ub3VzIHZhbGlkYXRpb25cIiksbj1pLnByZWZlcmVuY2VzKGkuZGVmYXVsdHMscikpO2NvbnN0IG89dS5lbnRyeShlLHQsbik7cyghby5tYWluc3RheS5leHRlcm5hbHMubGVuZ3RoLFwiU2NoZW1hIHdpdGggZXh0ZXJuYWwgcnVsZXMgbXVzdCB1c2UgdmFsaWRhdGVBc3luYygpXCIpO2NvbnN0IGE9e3ZhbHVlOm8udmFsdWV9O3JldHVybiBvLmVycm9yJiYoYS5lcnJvcj1vLmVycm9yKSxvLm1haW5zdGF5Lndhcm5pbmdzLmxlbmd0aCYmKGEud2FybmluZz1sLmRldGFpbHMoby5tYWluc3RheS53YXJuaW5ncykpLG8ubWFpbnN0YXkuZGVidWcmJihhLmRlYnVnPW8ubWFpbnN0YXkuZGVidWcpLGF9LHQuZW50cnlBc3luYz1hc3luYyBmdW5jdGlvbihlLHQscil7bGV0IHM9aS5kZWZhdWx0cztyJiYocz1pLnByZWZlcmVuY2VzKGkuZGVmYXVsdHMscikpO2NvbnN0IG49dS5lbnRyeShlLHQscyksbz1uLm1haW5zdGF5O2lmKG4uZXJyb3IpdGhyb3cgby5kZWJ1ZyYmKG4uZXJyb3IuZGVidWc9by5kZWJ1Zyksbi5lcnJvcjtpZihvLmV4dGVybmFscy5sZW5ndGgpe2xldCBlPW4udmFsdWU7Zm9yKGNvbnN0e21ldGhvZDp0LHBhdGg6cixsYWJlbDpzfW9mIG8uZXh0ZXJuYWxzKXtsZXQgbixvLGk9ZTtyLmxlbmd0aCYmKG49cltyLmxlbmd0aC0xXSxvPWEoZSxyLnNsaWNlKDAsLTEpKSxpPW9bbl0pO3RyeXtjb25zdCByPWF3YWl0IHQoaSk7aWYodm9pZCAwPT09cnx8cj09PWkpY29udGludWU7bz9vW25dPXI6ZT1yfWNhdGNoKGUpe3Rocm93IGUubWVzc2FnZSs9XCIgKFwiLmNvbmNhdChzLFwiKVwiKSxlfX1uLnZhbHVlPWV9aWYoIXMud2FybmluZ3MmJiFzLmRlYnVnKXJldHVybiBuLnZhbHVlO2NvbnN0IGM9e3ZhbHVlOm4udmFsdWV9O3JldHVybiBvLndhcm5pbmdzLmxlbmd0aCYmKGMud2FybmluZz1sLmRldGFpbHMoby53YXJuaW5ncykpLG8uZGVidWcmJihjLmRlYnVnPW8uZGVidWcpLGN9LHUuZW50cnk9ZnVuY3Rpb24oZSxyLHMpe2NvbnN0e3RyYWNlcjpuLGNsZWFudXA6b309dS50cmFjZXIocixzKSxhPXtleHRlcm5hbHM6W10sd2FybmluZ3M6W10sdHJhY2VyOm4sZGVidWc6cy5kZWJ1Zz9bXTpudWxsLGxpbmtzOnIuX2lkcy5fc2NoZW1hQ2hhaW4/bmV3IE1hcDpudWxsfSxpPXIuX2lkcy5fc2NoZW1hQ2hhaW4/W3tzY2hlbWE6cn1dOm51bGwsZj1uZXcgYyhbXSxbXSx7bWFpbnN0YXk6YSxzY2hlbWFzOml9KSxtPXQudmFsaWRhdGUoZSxyLGYscyk7byYmci4kX3Jvb3QudW50cmFjZSgpO2NvbnN0IGg9bC5wcm9jZXNzKG0uZXJyb3JzLGUscyk7cmV0dXJue3ZhbHVlOm0udmFsdWUsZXJyb3I6aCxtYWluc3RheTphfX0sdS50cmFjZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS4kX3Jvb3QuX3RyYWNlcj97dHJhY2VyOmUuJF9yb290Ll90cmFjZXIuX3JlZ2lzdGVyKGUpfTp0LmRlYnVnPyhzKGUuJF9yb290LnRyYWNlLFwiRGVidWcgbW9kZSBub3Qgc3VwcG9ydGVkXCIpLHt0cmFjZXI6ZS4kX3Jvb3QudHJhY2UoKS5fcmVnaXN0ZXIoZSksY2xlYW51cDohMH0pOnt0cmFjZXI6dS5pZ25vcmV9fSx0LnZhbGlkYXRlPWZ1bmN0aW9uKGUsdCxyLHMsbj17fSl7aWYodC4kX3Rlcm1zLndoZW5zJiYodD10Ll9nZW5lcmF0ZShlLHIscykuc2NoZW1hKSx0Ll9wcmVmZXJlbmNlcyYmKHM9dS5wcmVmcyh0LHMpKSx0Ll9jYWNoZSYmcy5jYWNoZSl7Y29uc3Qgcz10Ll9jYWNoZS5nZXQoZSk7aWYoci5tYWluc3RheS50cmFjZXIuZGVidWcocixcInZhbGlkYXRlXCIsXCJjYWNoZWRcIiwhIXMpLHMpcmV0dXJuIHN9Y29uc3Qgbz0obixvLGEpPT50LiRfY3JlYXRlRXJyb3IobixlLG8sYXx8cixzKSxhPXtvcmlnaW5hbDplLHByZWZzOnMsc2NoZW1hOnQsc3RhdGU6cixlcnJvcjpvLHdhcm46KGUsdCxzKT0+ci5tYWluc3RheS53YXJuaW5ncy5wdXNoKG8oZSx0LHMpKSxtZXNzYWdlOihuLG8pPT50LiRfY3JlYXRlRXJyb3IoXCJjdXN0b21cIixlLG8scixzLHttZXNzYWdlczpufSl9O3IubWFpbnN0YXkudHJhY2VyLmVudHJ5KHQscik7Y29uc3QgbD10Ll9kZWZpbml0aW9uO2lmKGwucHJlcGFyZSYmdm9pZCAwIT09ZSYmcy5jb252ZXJ0KXtjb25zdCB0PWwucHJlcGFyZShlLGEpO2lmKHQpe2lmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJwcmVwYXJlXCIsZSx0LnZhbHVlKSx0LmVycm9ycylyZXR1cm4gdS5maW5hbGl6ZSh0LnZhbHVlLFtdLmNvbmNhdCh0LmVycm9ycyksYSk7ZT10LnZhbHVlfX1pZihsLmNvZXJjZSYmdm9pZCAwIT09ZSYmcy5jb252ZXJ0JiYoIWwuY29lcmNlLmZyb218fGwuY29lcmNlLmZyb20uaW5jbHVkZXModHlwZW9mIGUpKSl7Y29uc3QgdD1sLmNvZXJjZS5tZXRob2QoZSxhKTtpZih0KXtpZihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiY29lcmNlZFwiLGUsdC52YWx1ZSksdC5lcnJvcnMpcmV0dXJuIHUuZmluYWxpemUodC52YWx1ZSxbXS5jb25jYXQodC5lcnJvcnMpLGEpO2U9dC52YWx1ZX19Y29uc3QgYz10Ll9mbGFncy5lbXB0eTtjJiZjLiRfbWF0Y2godS50cmltKGUsdCksci5uZXN0KGMpLGkuZGVmYXVsdHMpJiYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcImVtcHR5XCIsZSx2b2lkIDApLGU9dm9pZCAwKTtjb25zdCBmPW4ucHJlc2VuY2V8fHQuX2ZsYWdzLnByZXNlbmNlfHwodC5fZmxhZ3MuX2VuZGVkU3dpdGNoP1wiaWdub3JlXCI6cy5wcmVzZW5jZSk7aWYodm9pZCAwPT09ZSl7aWYoXCJmb3JiaWRkZW5cIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxudWxsLGEpO2lmKFwicmVxdWlyZWRcIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxbdC4kX2NyZWF0ZUVycm9yKFwiYW55LnJlcXVpcmVkXCIsZSxudWxsLHIscyldLGEpO2lmKFwib3B0aW9uYWxcIj09PWYpe2lmKHQuX2ZsYWdzLmRlZmF1bHQhPT1pLnN5bWJvbHMuZGVlcERlZmF1bHQpcmV0dXJuIHUuZmluYWxpemUoZSxudWxsLGEpO3IubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJkZWZhdWx0XCIsZSx7fSksZT17fX19ZWxzZSBpZihcImZvcmJpZGRlblwiPT09ZilyZXR1cm4gdS5maW5hbGl6ZShlLFt0LiRfY3JlYXRlRXJyb3IoXCJhbnkudW5rbm93blwiLGUsbnVsbCxyLHMpXSxhKTtjb25zdCBtPVtdO2lmKHQuX3ZhbGlkcyl7Y29uc3Qgbj10Ll92YWxpZHMuZ2V0KGUscixzLHQuX2ZsYWdzLmluc2Vuc2l0aXZlKTtpZihuKXJldHVybiBzLmNvbnZlcnQmJihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwidmFsaWRzXCIsZSxuLnZhbHVlKSxlPW4udmFsdWUpLHIubWFpbnN0YXkudHJhY2VyLmZpbHRlcih0LHIsXCJ2YWxpZFwiLG4pLHUuZmluYWxpemUoZSxudWxsLGEpO2lmKHQuX2ZsYWdzLm9ubHkpe2NvbnN0IG49dC4kX2NyZWF0ZUVycm9yKFwiYW55Lm9ubHlcIixlLHt2YWxpZHM6dC5fdmFsaWRzLnZhbHVlcyh7ZGlzcGxheTohMH0pfSxyLHMpO2lmKHMuYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLFtuXSxhKTttLnB1c2gobil9fWlmKHQuX2ludmFsaWRzKXtjb25zdCBuPXQuX2ludmFsaWRzLmdldChlLHIscyx0Ll9mbGFncy5pbnNlbnNpdGl2ZSk7aWYobil7ci5tYWluc3RheS50cmFjZXIuZmlsdGVyKHQscixcImludmFsaWRcIixuKTtjb25zdCBvPXQuJF9jcmVhdGVFcnJvcihcImFueS5pbnZhbGlkXCIsZSx7aW52YWxpZHM6dC5faW52YWxpZHMudmFsdWVzKHtkaXNwbGF5OiEwfSl9LHIscyk7aWYocy5hYm9ydEVhcmx5KXJldHVybiB1LmZpbmFsaXplKGUsW29dLGEpO20ucHVzaChvKX19aWYobC52YWxpZGF0ZSl7Y29uc3QgdD1sLnZhbGlkYXRlKGUsYSk7aWYodCYmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJiYXNlXCIsZSx0LnZhbHVlKSxlPXQudmFsdWUsdC5lcnJvcnMpKXtpZighQXJyYXkuaXNBcnJheSh0LmVycm9ycykpcmV0dXJuIG0ucHVzaCh0LmVycm9ycyksdS5maW5hbGl6ZShlLG0sYSk7aWYodC5lcnJvcnMubGVuZ3RoKXJldHVybiBtLnB1c2goLi4udC5lcnJvcnMpLHUuZmluYWxpemUoZSxtLGEpfX1yZXR1cm4gdC5fcnVsZXMubGVuZ3RoP3UucnVsZXMoZSxtLGEpOnUuZmluYWxpemUoZSxtLGEpfSx1LnJ1bGVzPWZ1bmN0aW9uKGUsdCxyKXtjb25zdHtzY2hlbWE6cyxzdGF0ZTpuLHByZWZzOm99PXI7Zm9yKGNvbnN0IGEgb2Ygcy5fcnVsZXMpe2NvbnN0IGw9cy5fZGVmaW5pdGlvbi5ydWxlc1thLm1ldGhvZF07aWYobC5jb252ZXJ0JiZvLmNvbnZlcnQpe24ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwiZnVsbFwiKTtjb250aW51ZX1sZXQgYyxmPWEuYXJncztpZihhLl9yZXNvbHZlLmxlbmd0aCl7Zj1PYmplY3QuYXNzaWduKHt9LGYpO2Zvcihjb25zdCB0IG9mIGEuX3Jlc29sdmUpe2NvbnN0IHI9bC5hcmdzQnlOYW1lLmdldCh0KSxhPWZbdF0ucmVzb2x2ZShlLG4sbyksdT1yLm5vcm1hbGl6ZT9yLm5vcm1hbGl6ZShhKTphLG09aS52YWxpZGF0ZUFyZyh1LG51bGwscik7aWYobSl7Yz1zLiRfY3JlYXRlRXJyb3IoXCJhbnkucmVmXCIsYSx7YXJnOnQscmVmOmZbdF0scmVhc29uOm19LG4sbyk7YnJlYWt9Zlt0XT11fX1jPWN8fGwudmFsaWRhdGUoZSxyLGYsYSk7Y29uc3QgbT11LnJ1bGUoYyxhKTtpZihtLmVycm9ycyl7aWYobi5tYWluc3RheS50cmFjZXIubG9nKHMsbixcInJ1bGVcIixhLm5hbWUsXCJlcnJvclwiKSxhLndhcm4pe24ubWFpbnN0YXkud2FybmluZ3MucHVzaCguLi5tLmVycm9ycyk7Y29udGludWV9aWYoby5hYm9ydEVhcmx5KXJldHVybiB1LmZpbmFsaXplKGUsbS5lcnJvcnMscik7dC5wdXNoKC4uLm0uZXJyb3JzKX1lbHNlIG4ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwicGFzc1wiKSxuLm1haW5zdGF5LnRyYWNlci52YWx1ZShuLFwicnVsZVwiLGUsbS52YWx1ZSxhLm5hbWUpLGU9bS52YWx1ZX1yZXR1cm4gdS5maW5hbGl6ZShlLHQscil9LHUucnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlIGluc3RhbmNlb2YgbC5SZXBvcnQ/KHUuZXJyb3IoZSx0KSx7ZXJyb3JzOltlXSx2YWx1ZTpudWxsfSk6QXJyYXkuaXNBcnJheShlKSYmKGVbMF1pbnN0YW5jZW9mIGwuUmVwb3J0fHxlWzBdaW5zdGFuY2VvZiBFcnJvcik/KGUuZm9yRWFjaChlPT51LmVycm9yKGUsdCkpLHtlcnJvcnM6ZSx2YWx1ZTpudWxsfSk6e2Vycm9yczpudWxsLHZhbHVlOmV9fSx1LmVycm9yPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubWVzc2FnZSYmZS5fc2V0VGVtcGxhdGUodC5tZXNzYWdlKSxlfSx1LmZpbmFsaXplPWZ1bmN0aW9uKGUsdCxyKXt0PXR8fFtdO2NvbnN0e3NjaGVtYTpuLHN0YXRlOm8scHJlZnM6YX09cjtpZih0Lmxlbmd0aCl7Y29uc3Qgcz11LmRlZmF1bHQoXCJmYWlsb3ZlclwiLHZvaWQgMCx0LHIpO3ZvaWQgMCE9PXMmJihvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLFwiZmFpbG92ZXJcIixlLHMpLGU9cyx0PVtdKX1pZih0Lmxlbmd0aCYmbi5fZmxhZ3MuZXJyb3IpaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fZmxhZ3MuZXJyb3Ipe3Q9bi5fZmxhZ3MuZXJyb3IodCksQXJyYXkuaXNBcnJheSh0KXx8KHQ9W3RdKTtmb3IoY29uc3QgZSBvZiB0KXMoZSBpbnN0YW5jZW9mIEVycm9yfHxlIGluc3RhbmNlb2YgbC5SZXBvcnQsXCJlcnJvcigpIG11c3QgcmV0dXJuIGFuIEVycm9yIG9iamVjdFwiKX1lbHNlIHQ9W24uX2ZsYWdzLmVycm9yXTtpZih2b2lkIDA9PT1lKXtjb25zdCBzPXUuZGVmYXVsdChcImRlZmF1bHRcIixlLHQscik7by5tYWluc3RheS50cmFjZXIudmFsdWUobyxcImRlZmF1bHRcIixlLHMpLGU9c31pZihuLl9mbGFncy5jYXN0JiZ2b2lkIDAhPT1lKXtjb25zdCB0PW4uX2RlZmluaXRpb24uY2FzdFtuLl9mbGFncy5jYXN0XTtpZih0LmZyb20oZSkpe2NvbnN0IHM9dC50byhlLHIpO28ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sXCJjYXN0XCIsZSxzLG4uX2ZsYWdzLmNhc3QpLGU9c319aWYobi4kX3Rlcm1zLmV4dGVybmFscyYmYS5leHRlcm5hbHMmJiExIT09YS5fZXh0ZXJuYWxzKWZvcihjb25zdHttZXRob2Q6ZX1vZiBuLiRfdGVybXMuZXh0ZXJuYWxzKW8ubWFpbnN0YXkuZXh0ZXJuYWxzLnB1c2goe21ldGhvZDplLHBhdGg6by5wYXRoLGxhYmVsOmwubGFiZWwobi5fZmxhZ3MsbyxhKX0pO2NvbnN0IGk9e3ZhbHVlOmUsZXJyb3JzOnQubGVuZ3RoP3Q6bnVsbH07cmV0dXJuIG4uX2ZsYWdzLnJlc3VsdCYmKGkudmFsdWU9XCJzdHJpcFwiPT09bi5fZmxhZ3MucmVzdWx0P3ZvaWQgMDpyLm9yaWdpbmFsLG8ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sbi5fZmxhZ3MucmVzdWx0LGUsaS52YWx1ZSksby5zaGFkb3coZSxuLl9mbGFncy5yZXN1bHQpKSxuLl9jYWNoZSYmITEhPT1hLmNhY2hlJiYhbi5fcmVmcy5sZW5ndGgmJm4uX2NhY2hlLnNldChyLm9yaWdpbmFsLGkpLGl9LHUucHJlZnM9ZnVuY3Rpb24oZSx0KXtjb25zdCByPXQ9PT1pLmRlZmF1bHRzO3JldHVybiByJiZlLl9wcmVmZXJlbmNlc1tpLnN5bWJvbHMucHJlZnNdP2UuX3ByZWZlcmVuY2VzW2kuc3ltYm9scy5wcmVmc106KHQ9aS5wcmVmZXJlbmNlcyh0LGUuX3ByZWZlcmVuY2VzKSxyJiYoZS5fcHJlZmVyZW5jZXNbaS5zeW1ib2xzLnByZWZzXT10KSx0KX0sdS5kZWZhdWx0PWZ1bmN0aW9uKGUsdCxyLHMpe2NvbnN0e3NjaGVtYTpvLHN0YXRlOmEscHJlZnM6bH09cyxjPW8uX2ZsYWdzW2VdO2lmKGwubm9EZWZhdWx0c3x8dm9pZCAwPT09YylyZXR1cm4gdDtpZihhLm1haW5zdGF5LnRyYWNlci5sb2cobyxhLFwicnVsZVwiLGUsXCJmdWxsXCIpLCFjKXJldHVybiBjO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpe2NvbnN0IHQ9Yy5sZW5ndGg/W24oYS5hbmNlc3RvcnNbMF0pLHNdOltdO3RyeXtyZXR1cm4gYyguLi50KX1jYXRjaCh0KXtyZXR1cm4gdm9pZCByLnB1c2goby4kX2NyZWF0ZUVycm9yKFwiYW55LlwiLmNvbmNhdChlKSxudWxsLHtlcnJvcjp0fSxhLGwpKX19cmV0dXJuXCJvYmplY3RcIiE9dHlwZW9mIGM/YzpjW2kuc3ltYm9scy5saXRlcmFsXT9jLmxpdGVyYWw6aS5pc1Jlc29sdmFibGUoYyk/Yy5yZXNvbHZlKHQsYSxsKTpuKGMpfSx1LnRyaW09ZnVuY3Rpb24oZSx0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gZTtjb25zdCByPXQuJF9nZXRSdWxlKFwidHJpbVwiKTtyZXR1cm4gciYmci5hcmdzLmVuYWJsZWQ/ZS50cmltKCk6ZX0sdS5pZ25vcmU9e2FjdGl2ZTohMSxkZWJ1ZzpvLGVudHJ5Om8sZmlsdGVyOm8sbG9nOm8scmVzb2x2ZTpvLHZhbHVlOm99fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyKSxuPXIoNiksbz1yKDEpLGE9e3ZhbHVlOlN5bWJvbChcInZhbHVlXCIpfTtlLmV4cG9ydHM9YS5TdGF0ZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQscil7dGhpcy5wYXRoPWUsdGhpcy5hbmNlc3RvcnM9dCx0aGlzLm1haW5zdGF5PXIubWFpbnN0YXksdGhpcy5zY2hlbWFzPXIuc2NoZW1hcyx0aGlzLmRlYnVnPW51bGx9bG9jYWxpemUoZSx0PW51bGwscj1udWxsKXtjb25zdCBzPW5ldyBhLlN0YXRlKGUsdCx0aGlzKTtyZXR1cm4gciYmcy5zY2hlbWFzJiYocy5zY2hlbWFzPVthLnNjaGVtYXMociksLi4ucy5zY2hlbWFzXSksc31uZXN0KGUsdCl7Y29uc3Qgcj1uZXcgYS5TdGF0ZSh0aGlzLnBhdGgsdGhpcy5hbmNlc3RvcnMsdGhpcyk7cmV0dXJuIHIuc2NoZW1hcz1yLnNjaGVtYXMmJlthLnNjaGVtYXMoZSksLi4uci5zY2hlbWFzXSxyLmRlYnVnPXQscn1zaGFkb3coZSx0KXt0aGlzLm1haW5zdGF5LnNoYWRvdz10aGlzLm1haW5zdGF5LnNoYWRvd3x8bmV3IGEuU2hhZG93LHRoaXMubWFpbnN0YXkuc2hhZG93LnNldCh0aGlzLnBhdGgsZSx0KX1zbmFwc2hvdCgpe3RoaXMubWFpbnN0YXkuc2hhZG93JiYodGhpcy5fc25hcHNob3Q9cyh0aGlzLm1haW5zdGF5LnNoYWRvdy5ub2RlKHRoaXMucGF0aCkpKX1yZXN0b3JlKCl7dGhpcy5tYWluc3RheS5zaGFkb3cmJih0aGlzLm1haW5zdGF5LnNoYWRvdy5vdmVycmlkZSh0aGlzLnBhdGgsdGhpcy5fc25hcHNob3QpLHRoaXMuX3NuYXBzaG90PXZvaWQgMCl9fSxhLnNjaGVtYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIG8uaXNTY2hlbWEoZSk/e3NjaGVtYTplfTplfSxhLlNoYWRvdz1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX3ZhbHVlcz1udWxsfXNldChlLHQscil7aWYoIWUubGVuZ3RoKXJldHVybjtpZihcInN0cmlwXCI9PT1yJiZcIm51bWJlclwiPT10eXBlb2YgZVtlLmxlbmd0aC0xXSlyZXR1cm47dGhpcy5fdmFsdWVzPXRoaXMuX3ZhbHVlc3x8bmV3IE1hcDtsZXQgcz10aGlzLl92YWx1ZXM7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDsrK3Qpe2NvbnN0IHI9ZVt0XTtsZXQgbj1zLmdldChyKTtufHwobj1uZXcgTWFwLHMuc2V0KHIsbikpLHM9bn1zW2EudmFsdWVdPXR9Z2V0KGUpe2NvbnN0IHQ9dGhpcy5ub2RlKGUpO2lmKHQpcmV0dXJuIHRbYS52YWx1ZV19bm9kZShlKXtpZih0aGlzLl92YWx1ZXMpcmV0dXJuIG4odGhpcy5fdmFsdWVzLGUse2l0ZXJhYmxlczohMH0pfW92ZXJyaWRlKGUsdCl7aWYoIXRoaXMuX3ZhbHVlcylyZXR1cm47Y29uc3Qgcj1lLnNsaWNlKDAsLTEpLHM9ZVtlLmxlbmd0aC0xXSxvPW4odGhpcy5fdmFsdWVzLHIse2l0ZXJhYmxlczohMH0pO3Q/by5zZXQocyx0KTpvJiZvLmRlbGV0ZShzKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigxMCksbz1yKDYpLGE9cigzKSxpPXIoMSksbD1yKDgpLGM9e307ZS5leHBvcnRzPWEuZXh0ZW5kKHt0eXBlOlwiYXJyYXlcIixmbGFnczp7c2luZ2xlOntkZWZhdWx0OiExfSxzcGFyc2U6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7aXRlbXM6e2luaXQ6W10sbWFuaWZlc3Q6XCJzY2hlbWFcIn0sb3JkZXJlZDp7aW5pdDpbXSxtYW5pZmVzdDpcInNjaGVtYVwifSxfZXhjbHVzaW9uczp7aW5pdDpbXX0sX2luY2x1c2lvbnM6e2luaXQ6W119LF9yZXF1aXJlZHM6e2luaXQ6W119fSxjb2VyY2U6e2Zyb206XCJvYmplY3RcIixtZXRob2QoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpzfSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuO2NvbnN0IG49dC4kX2dldFJ1bGUoXCJzb3J0XCIpO3JldHVybiBuP2Muc29ydCh0LGUsbi5hcmdzLm9wdGlvbnMscixzKTp2b2lkIDB9fSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyfSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpe2lmKHQuX2ZsYWdzLnNpbmdsZSl7Y29uc3QgdD1bZV07cmV0dXJuIHRbaS5zeW1ib2xzLmFycmF5U2luZ2xlXT0hMCx7dmFsdWU6dH19cmV0dXJue2Vycm9yczpyKFwiYXJyYXkuYmFzZVwiKX19aWYodC4kX2dldFJ1bGUoXCJpdGVtc1wiKXx8dC4kX3Rlcm1zLmV4dGVybmFscylyZXR1cm57dmFsdWU6ZS5zbGljZSgpfX0scnVsZXM6e2hhczp7bWV0aG9kKGUpe2U9dGhpcy4kX2NvbXBpbGUoZSx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IHQ9dGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJoYXNcIixhcmdzOntzY2hlbWE6ZX19KTtyZXR1cm4gdC4kX211dGF0ZVJlZ2lzdGVyKGUpLHR9LHZhbGlkYXRlKGUse3N0YXRlOnQscHJlZnM6cixlcnJvcjpzfSx7c2NoZW1hOm59KXtjb25zdCBvPVtlLC4uLnQuYW5jZXN0b3JzXTtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3QgYT10LmxvY2FsaXplKFsuLi50LnBhdGgsc10sbyxuKTtpZihuLiRfbWF0Y2goZVtzXSxhLHIpKXJldHVybiBlfWNvbnN0IGE9bi5fZmxhZ3MubGFiZWw7cmV0dXJuIGE/cyhcImFycmF5Lmhhc0tub3duXCIse3BhdHRlcm5MYWJlbDphfSk6cyhcImFycmF5Lmhhc1Vua25vd25cIixudWxsKX0sbXVsdGk6ITB9LGl0ZW1zOnttZXRob2QoLi4uZSl7aS52ZXJpZnlGbGF0KGUsXCJpdGVtc1wiKTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIik7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IHM9aS50cnlXaXRoUGF0aCgoKT0+dGhpcy4kX2NvbXBpbGUoZVtyXSkscix7YXBwZW5kOiEwfSk7dC4kX3Rlcm1zLml0ZW1zLnB1c2gocyl9cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIsc3RhdGU6cyxwcmVmczpufSl7Y29uc3Qgbz10LiRfdGVybXMuX3JlcXVpcmVkcy5zbGljZSgpLGE9dC4kX3Rlcm1zLm9yZGVyZWQuc2xpY2UoKSxsPVsuLi50LiRfdGVybXMuX2luY2x1c2lvbnMsLi4ub10sdT0hZVtpLnN5bWJvbHMuYXJyYXlTaW5nbGVdO2RlbGV0ZSBlW2kuc3ltYm9scy5hcnJheVNpbmdsZV07Y29uc3QgZj1bXTtsZXQgbT1lLmxlbmd0aDtmb3IobGV0IGk9MDtpPG07KytpKXtjb25zdCBoPWVbaV07bGV0IGQ9ITEscD0hMTtjb25zdCBnPXU/aTpuZXcgTnVtYmVyKGkpLHk9Wy4uLnMucGF0aCxnXTtpZighdC5fZmxhZ3Muc3BhcnNlJiZ2b2lkIDA9PT1oKXtpZihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Euc2hpZnQoKTtjb250aW51ZX1jb25zdCBiPVtlLC4uLnMuYW5jZXN0b3JzXTtmb3IoY29uc3QgZSBvZiB0LiRfdGVybXMuX2V4Y2x1c2lvbnMpaWYoZS4kX21hdGNoKGgscy5sb2NhbGl6ZSh5LGIsZSksbix7cHJlc2VuY2U6XCJpZ25vcmVcIn0pKXtpZihmLnB1c2gocihcImFycmF5LmV4Y2x1ZGVzXCIse3BvczppLHZhbHVlOmh9LHMubG9jYWxpemUoeSkpKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7ZD0hMCxhLnNoaWZ0KCk7YnJlYWt9aWYoZCljb250aW51ZTtpZih0LiRfdGVybXMub3JkZXJlZC5sZW5ndGgpe2lmKGEubGVuZ3RoKXtjb25zdCBvPWEuc2hpZnQoKSxsPW8uJF92YWxpZGF0ZShoLHMubG9jYWxpemUoeSxiLG8pLG4pO2lmKGwuZXJyb3JzKXtpZihmLnB1c2goLi4ubC5lcnJvcnMpLG4uYWJvcnRFYXJseSlyZXR1cm4gZn1lbHNlIGlmKFwic3RyaXBcIj09PW8uX2ZsYWdzLnJlc3VsdCljLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tO2Vsc2V7aWYoIXQuX2ZsYWdzLnNwYXJzZSYmdm9pZCAwPT09bC52YWx1ZSl7aWYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjtjb250aW51ZX1lW2ldPWwudmFsdWV9Y29udGludWV9aWYoIXQuJF90ZXJtcy5pdGVtcy5sZW5ndGgpe2lmKGYucHVzaChyKFwiYXJyYXkub3JkZXJlZExlbmd0aFwiLHtwb3M6aSxsaW1pdDp0LiRfdGVybXMub3JkZXJlZC5sZW5ndGh9KSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2JyZWFrfX1jb25zdCB2PVtdO2xldCBfPW8ubGVuZ3RoO2ZvcihsZXQgYT0wO2E8XzsrK2Epe2NvbnN0IGw9cy5sb2NhbGl6ZSh5LGIsb1thXSk7bC5zbmFwc2hvdCgpO2NvbnN0IHU9b1thXS4kX3ZhbGlkYXRlKGgsbCxuKTtpZih2W2FdPXUsIXUuZXJyb3JzKXtpZihlW2ldPXUudmFsdWUscD0hMCxjLmZhc3RTcGxpY2UobyxhKSwtLWEsLS1fLCF0Ll9mbGFncy5zcGFyc2UmJnZvaWQgMD09PXUudmFsdWUmJihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KSlyZXR1cm4gZjticmVha31sLnJlc3RvcmUoKX1pZihwKWNvbnRpbnVlO2NvbnN0IHc9bi5zdHJpcFVua25vd24mJiEhbi5zdHJpcFVua25vd24uYXJyYXlzfHwhMTtfPWwubGVuZ3RoO2Zvcihjb25zdCBhIG9mIGwpe2xldCBsO2NvbnN0IHU9by5pbmRleE9mKGEpO2lmKC0xIT09dSlsPXZbdV07ZWxzZXtjb25zdCBvPXMubG9jYWxpemUoeSxiLGEpO2lmKG8uc25hcHNob3QoKSxsPWEuJF92YWxpZGF0ZShoLG8sbiksIWwuZXJyb3JzKXtcInN0cmlwXCI9PT1hLl9mbGFncy5yZXN1bHQ/KGMuZmFzdFNwbGljZShlLGkpLC0taSwtLW0pOnQuX2ZsYWdzLnNwYXJzZXx8dm9pZCAwIT09bC52YWx1ZT9lW2ldPWwudmFsdWU6KGYucHVzaChyKFwiYXJyYXkuc3BhcnNlXCIse2tleTpnLHBhdGg6eSxwb3M6aSx2YWx1ZTp2b2lkIDB9LHMubG9jYWxpemUoeSkpKSxkPSEwKSxwPSEwO2JyZWFrfW8ucmVzdG9yZSgpfWlmKDE9PT1fKXtpZih3KXtjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tLHA9ITA7YnJlYWt9aWYoZi5wdXNoKC4uLmwuZXJyb3JzKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7ZD0hMDticmVha319aWYoIWQmJih0LiRfdGVybXMuX2luY2x1c2lvbnMubGVuZ3RoJiYhcCkpe2lmKHcpe2MuZmFzdFNwbGljZShlLGkpLC0taSwtLW07Y29udGludWV9aWYoZi5wdXNoKHIoXCJhcnJheS5pbmNsdWRlc1wiLHtwb3M6aSx2YWx1ZTpofSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmfX1yZXR1cm4gby5sZW5ndGgmJmMuZmlsbE1pc3NlZEVycm9ycyh0LGYsbyxlLHMsbiksYS5sZW5ndGgmJmMuZmlsbE9yZGVyZWRFcnJvcnModCxmLGEsZSxzLG4pLGYubGVuZ3RoP2Y6ZX0scHJpb3JpdHk6ITAsbWFuaWZlc3Q6ITF9LGxlbmd0aDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPVwifSl9LHZhbGlkYXRlOihlLHQse2xpbWl0OnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOm99KT0+aS5jb21wYXJlKGUubGVuZ3RoLHIsbik/ZTp0LmVycm9yKFwiYXJyYXkuXCIrcyx7bGltaXQ6by5saW1pdCx2YWx1ZTplfSksYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6aS5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn1dfSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sb3JkZXJlZDp7bWV0aG9kKC4uLmUpe2kudmVyaWZ5RmxhdChlLFwib3JkZXJlZFwiKTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIik7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IHM9aS50cnlXaXRoUGF0aCgoKT0+dGhpcy4kX2NvbXBpbGUoZVtyXSkscix7YXBwZW5kOiEwfSk7Yy52YWxpZGF0ZVNpbmdsZShzLHQpLHQuJF9tdXRhdGVSZWdpc3RlcihzKSx0LiRfdGVybXMub3JkZXJlZC5wdXNoKHMpfXJldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfX0sc2luZ2xlOnttZXRob2QoZSl7Y29uc3QgdD12b2lkIDA9PT1lfHwhIWU7cmV0dXJuIHMoIXR8fCF0aGlzLl9mbGFncy5fYXJyYXlJdGVtcyxcIkNhbm5vdCBzcGVjaWZ5IHNpbmdsZSBydWxlIHdoZW4gYXJyYXkgaGFzIGFycmF5IGl0ZW1zXCIpLHRoaXMuJF9zZXRGbGFnKFwic2luZ2xlXCIsdCl9fSxzb3J0OnttZXRob2QoZT17fSl7aS5hc3NlcnRPcHRpb25zKGUsW1wiYnlcIixcIm9yZGVyXCJdKTtjb25zdCB0PXtvcmRlcjplLm9yZGVyfHxcImFzY2VuZGluZ1wifTtyZXR1cm4gZS5ieSYmKHQuYnk9bC5yZWYoZS5ieSx7YW5jZXN0b3I6MH0pLHMoIXQuYnkuYW5jZXN0b3IsXCJDYW5ub3Qgc29ydCBieSBhbmNlc3RvclwiKSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJzb3J0XCIsYXJnczp7b3B0aW9uczp0fX0pfSx2YWxpZGF0ZShlLHtlcnJvcjp0LHN0YXRlOnIscHJlZnM6cyxzY2hlbWE6bn0se29wdGlvbnM6b30pe2NvbnN0e3ZhbHVlOmEsZXJyb3JzOml9PWMuc29ydChuLGUsbyxyLHMpO2lmKGkpcmV0dXJuIGk7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3IpaWYoZVtyXSE9PWFbcl0pcmV0dXJuIHQoXCJhcnJheS5zb3J0XCIse29yZGVyOm8ub3JkZXIsYnk6by5ieT9vLmJ5LmtleTpcInZhbHVlXCJ9KTtyZXR1cm4gZX0sY29udmVydDohMH0sc3BhcnNlOnttZXRob2QoZSl7Y29uc3QgdD12b2lkIDA9PT1lfHwhIWU7cmV0dXJuIHRoaXMuX2ZsYWdzLnNwYXJzZT09PXQ/dGhpczoodD90aGlzLmNsb25lKCk6dGhpcy4kX2FkZFJ1bGUoXCJpdGVtc1wiKSkuJF9zZXRGbGFnKFwic3BhcnNlXCIsdCx7Y2xvbmU6ITF9KX19LHVuaXF1ZTp7bWV0aG9kKGUsdD17fSl7cyghZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUsXCJjb21wYXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1wiKSxpLmFzc2VydE9wdGlvbnModCxbXCJpZ25vcmVVbmRlZmluZWRcIixcInNlcGFyYXRvclwiXSk7Y29uc3Qgcj17bmFtZTpcInVuaXF1ZVwiLGFyZ3M6e29wdGlvbnM6dCxjb21wYXJhdG9yOmV9fTtpZihlKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtjb25zdCBzPWkuZGVmYXVsdCh0LnNlcGFyYXRvcixcIi5cIik7ci5wYXRoPXM/ZS5zcGxpdChzKTpbZV19ZWxzZSByLmNvbXBhcmF0b3I9ZTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUocil9LHZhbGlkYXRlKGUse3N0YXRlOnQsZXJyb3I6cixzY2hlbWE6YX0se2NvbXBhcmF0b3I6aSxvcHRpb25zOmx9LHtjb21wYXJhdG9yOmMscGF0aDp1fSl7Y29uc3QgZj17c3RyaW5nOk9iamVjdC5jcmVhdGUobnVsbCksbnVtYmVyOk9iamVjdC5jcmVhdGUobnVsbCksdW5kZWZpbmVkOk9iamVjdC5jcmVhdGUobnVsbCksYm9vbGVhbjpPYmplY3QuY3JlYXRlKG51bGwpLG9iamVjdDpuZXcgTWFwLGZ1bmN0aW9uOm5ldyBNYXAsY3VzdG9tOm5ldyBNYXB9LG09Y3x8bixoPWwuaWdub3JlVW5kZWZpbmVkO2ZvcihsZXQgbj0wO248ZS5sZW5ndGg7KytuKXtjb25zdCBhPXU/byhlW25dLHUpOmVbbl0sbD1jP2YuY3VzdG9tOmZbdHlwZW9mIGFdO2lmKHMobCxcIkZhaWxlZCB0byBmaW5kIHVuaXF1ZSBtYXAgY29udGFpbmVyIGZvciB0eXBlXCIsdHlwZW9mIGEpLGwgaW5zdGFuY2VvZiBNYXApe2NvbnN0IHM9bC5lbnRyaWVzKCk7bGV0IG87Zm9yKDshKG89cy5uZXh0KCkpLmRvbmU7KWlmKG0oby52YWx1ZVswXSxhKSl7Y29uc3Qgcz10LmxvY2FsaXplKFsuLi50LnBhdGgsbl0sW2UsLi4udC5hbmNlc3RvcnNdKSxhPXtwb3M6bix2YWx1ZTplW25dLGR1cGVQb3M6by52YWx1ZVsxXSxkdXBlVmFsdWU6ZVtvLnZhbHVlWzFdXX07cmV0dXJuIHUmJihhLnBhdGg9aSkscihcImFycmF5LnVuaXF1ZVwiLGEscyl9bC5zZXQoYSxuKX1lbHNle2lmKCghaHx8dm9pZCAwIT09YSkmJnZvaWQgMCE9PWxbYV0pe2NvbnN0IHM9e3BvczpuLHZhbHVlOmVbbl0sZHVwZVBvczpsW2FdLGR1cGVWYWx1ZTplW2xbYV1dfTtyZXR1cm4gdSYmKHMucGF0aD1pKSxyKFwiYXJyYXkudW5pcXVlXCIscyx0LmxvY2FsaXplKFsuLi50LnBhdGgsbl0sW2UsLi4udC5hbmNlc3RvcnNdKSl9bFthXT1ufX1yZXR1cm4gZX0sYXJnczpbXCJjb21wYXJhdG9yXCIsXCJvcHRpb25zXCJdLG11bHRpOiEwfX0sY2FzdDp7c2V0Ontmcm9tOkFycmF5LmlzQXJyYXksdG86KGUsdCk9Pm5ldyBTZXQoZSl9fSxyZWJ1aWxkKGUpe2UuJF90ZXJtcy5faW5jbHVzaW9ucz1bXSxlLiRfdGVybXMuX2V4Y2x1c2lvbnM9W10sZS4kX3Rlcm1zLl9yZXF1aXJlZHM9W107Zm9yKGNvbnN0IHQgb2YgZS4kX3Rlcm1zLml0ZW1zKWMudmFsaWRhdGVTaW5nbGUodCxlKSxcInJlcXVpcmVkXCI9PT10Ll9mbGFncy5wcmVzZW5jZT9lLiRfdGVybXMuX3JlcXVpcmVkcy5wdXNoKHQpOlwiZm9yYmlkZGVuXCI9PT10Ll9mbGFncy5wcmVzZW5jZT9lLiRfdGVybXMuX2V4Y2x1c2lvbnMucHVzaCh0KTplLiRfdGVybXMuX2luY2x1c2lvbnMucHVzaCh0KTtmb3IoY29uc3QgdCBvZiBlLiRfdGVybXMub3JkZXJlZCljLnZhbGlkYXRlU2luZ2xlKHQsZSl9LG1hbmlmZXN0OntidWlsZDooZSx0KT0+KHQuaXRlbXMmJihlPWUuaXRlbXMoLi4udC5pdGVtcykpLHQub3JkZXJlZCYmKGU9ZS5vcmRlcmVkKC4uLnQub3JkZXJlZCkpLGUpfSxtZXNzYWdlczp7XCJhcnJheS5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYW4gYXJyYXlcIixcImFycmF5LmV4Y2x1ZGVzXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGFuIGV4Y2x1ZGVkIHZhbHVlXCIsXCJhcnJheS5oYXNLbm93blwiOid7eyNsYWJlbH19IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJlcXVpcmVkIG1hdGNoIGZvciB0eXBlIFwieyNwYXR0ZXJuTGFiZWx9XCInLFwiYXJyYXkuaGFzVW5rbm93blwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSByZXF1aXJlZCBtYXRjaFwiLFwiYXJyYXkuaW5jbHVkZXNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkQm90aFwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I2tub3duTWlzc2VzfX0gYW5kIHt7I3Vua25vd25NaXNzZXN9fSBvdGhlciByZXF1aXJlZCB2YWx1ZShzKVwiLFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEtub3duc1wiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I2tub3duTWlzc2VzfX1cIixcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRVbmtub3duc1wiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I3Vua25vd25NaXNzZXN9fSByZXF1aXJlZCB2YWx1ZShzKVwiLFwiYXJyYXkubGVuZ3RoXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5tYXhcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5taW5cIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IGxlYXN0IHt7I2xpbWl0fX0gaXRlbXNcIixcImFycmF5Lm9yZGVyZWRMZW5ndGhcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IG1vc3Qge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkuc29ydFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIHNvcnRlZCBpbiB7I29yZGVyfSBvcmRlciBieSB7eyNieX19XCIsXCJhcnJheS5zb3J0Lm1pc21hdGNoaW5nXCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBzb3J0ZWQgZHVlIHRvIG1pc21hdGNoaW5nIHR5cGVzXCIsXCJhcnJheS5zb3J0LnVuc3VwcG9ydGVkXCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBzb3J0ZWQgZHVlIHRvIHVuc3VwcG9ydGVkIHR5cGUgeyN0eXBlfVwiLFwiYXJyYXkuc3BhcnNlXCI6XCJ7eyNsYWJlbH19IG11c3Qgbm90IGJlIGEgc3BhcnNlIGFycmF5IGl0ZW1cIixcImFycmF5LnVuaXF1ZVwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhIGR1cGxpY2F0ZSB2YWx1ZVwifX0pLGMuZmlsbE1pc3NlZEVycm9ycz1mdW5jdGlvbihlLHQscixzLG4sbyl7Y29uc3QgYT1bXTtsZXQgaT0wO2Zvcihjb25zdCBlIG9mIHIpe2NvbnN0IHQ9ZS5fZmxhZ3MubGFiZWw7dD9hLnB1c2godCk6KytpfWEubGVuZ3RoP2k/dC5wdXNoKGUuJF9jcmVhdGVFcnJvcihcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRCb3RoXCIscyx7a25vd25NaXNzZXM6YSx1bmtub3duTWlzc2VzOml9LG4sbykpOnQucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkS25vd25zXCIscyx7a25vd25NaXNzZXM6YX0sbixvKSk6dC5wdXNoKGUuJF9jcmVhdGVFcnJvcihcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRVbmtub3duc1wiLHMse3Vua25vd25NaXNzZXM6aX0sbixvKSl9LGMuZmlsbE9yZGVyZWRFcnJvcnM9ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2NvbnN0IGE9W107Zm9yKGNvbnN0IGUgb2YgcilcInJlcXVpcmVkXCI9PT1lLl9mbGFncy5wcmVzZW5jZSYmYS5wdXNoKGUpO2EubGVuZ3RoJiZjLmZpbGxNaXNzZWRFcnJvcnMoZSx0LGEscyxuLG8pfSxjLmZhc3RTcGxpY2U9ZnVuY3Rpb24oZSx0KXtsZXQgcj10O2Zvcig7cjxlLmxlbmd0aDspZVtyKytdPWVbcl07LS1lLmxlbmd0aH0sYy52YWxpZGF0ZVNpbmdsZT1mdW5jdGlvbihlLHQpeyhcImFycmF5XCI9PT1lLnR5cGV8fGUuX2ZsYWdzLl9hcnJheUl0ZW1zKSYmKHMoIXQuX2ZsYWdzLnNpbmdsZSxcIkNhbm5vdCBzcGVjaWZ5IGFycmF5IGl0ZW0gd2l0aCBzaW5nbGUgcnVsZSBlbmFibGVkXCIpLHQuJF9zZXRGbGFnKFwiX2FycmF5SXRlbXNcIiwhMCx7Y2xvbmU6ITF9KSl9LGMuc29ydD1mdW5jdGlvbihlLHQscixzLG4pe2NvbnN0IG89XCJhc2NlbmRpbmdcIj09PXIub3JkZXI/MTotMSxhPS0xKm8saT1vLGw9KGwsdSk9PntsZXQgZj1jLmNvbXBhcmUobCx1LGEsaSk7aWYobnVsbCE9PWYpcmV0dXJuIGY7aWYoci5ieSYmKGw9ci5ieS5yZXNvbHZlKGwscyxuKSx1PXIuYnkucmVzb2x2ZSh1LHMsbikpLGY9Yy5jb21wYXJlKGwsdSxhLGkpLG51bGwhPT1mKXJldHVybiBmO2NvbnN0IG09dHlwZW9mIGw7aWYobSE9PXR5cGVvZiB1KXRocm93IGUuJF9jcmVhdGVFcnJvcihcImFycmF5LnNvcnQubWlzbWF0Y2hpbmdcIix0LG51bGwscyxuKTtpZihcIm51bWJlclwiIT09bSYmXCJzdHJpbmdcIiE9PW0pdGhyb3cgZS4kX2NyZWF0ZUVycm9yKFwiYXJyYXkuc29ydC51bnN1cHBvcnRlZFwiLHQse3R5cGU6bX0scyxuKTtyZXR1cm5cIm51bWJlclwiPT09bT8obC11KSpvOmw8dT9hOml9O3RyeXtyZXR1cm57dmFsdWU6dC5zbGljZSgpLnNvcnQobCl9fWNhdGNoKGUpe3JldHVybntlcnJvcnM6ZX19fSxjLmNvbXBhcmU9ZnVuY3Rpb24oZSx0LHIscyl7cmV0dXJuIGU9PT10PzA6dm9pZCAwPT09ZT8xOnZvaWQgMD09PXQ/LTE6bnVsbD09PWU/czpudWxsPT09dD9yOm51bGx9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDIxKSxpPXtpc0Jvb2w6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlfX07ZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwiYm9vbGVhblwiLGZsYWdzOntzZW5zaXRpdmU6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7ZmFsc3k6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInZhbHVlc1wifSx0cnV0aHk6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInZhbHVlc1wifX0sY29lcmNlKGUse3NjaGVtYTp0fSl7aWYoXCJib29sZWFuXCIhPXR5cGVvZiBlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7Y29uc3Qgcj10Ll9mbGFncy5zZW5zaXRpdmU/ZTplLnRvTG93ZXJDYXNlKCk7ZT1cInRydWVcIj09PXJ8fFwiZmFsc2VcIiE9PXImJmV9cmV0dXJuXCJib29sZWFuXCIhPXR5cGVvZiBlJiYoZT10LiRfdGVybXMudHJ1dGh5JiZ0LiRfdGVybXMudHJ1dGh5LmhhcyhlLG51bGwsbnVsbCwhdC5fZmxhZ3Muc2Vuc2l0aXZlKXx8KCF0LiRfdGVybXMuZmFsc3l8fCF0LiRfdGVybXMuZmFsc3kuaGFzKGUsbnVsbCxudWxsLCF0Ll9mbGFncy5zZW5zaXRpdmUpKSYmZSkse3ZhbHVlOmV9fX0sdmFsaWRhdGUoZSx7ZXJyb3I6dH0pe2lmKFwiYm9vbGVhblwiIT10eXBlb2YgZSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6dChcImJvb2xlYW4uYmFzZVwiKX19LHJ1bGVzOnt0cnV0aHk6e21ldGhvZCguLi5lKXtvLnZlcmlmeUZsYXQoZSxcInRydXRoeVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMudHJ1dGh5PXQuJF90ZXJtcy50cnV0aHl8fG5ldyBhO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWVbcl07cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgdHJ1dGh5IHdpdGggdW5kZWZpbmVkXCIpLHQuJF90ZXJtcy50cnV0aHkuYWRkKG4pfXJldHVybiB0fX0sZmFsc3k6e21ldGhvZCguLi5lKXtvLnZlcmlmeUZsYXQoZSxcImZhbHN5XCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3QuJF90ZXJtcy5mYWxzeT10LiRfdGVybXMuZmFsc3l8fG5ldyBhO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWVbcl07cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgZmFsc3kgd2l0aCB1bmRlZmluZWRcIiksdC4kX3Rlcm1zLmZhbHN5LmFkZChuKX1yZXR1cm4gdH19LHNlbnNpdGl2ZTp7bWV0aG9kKGU9ITApe3JldHVybiB0aGlzLiRfc2V0RmxhZyhcInNlbnNpdGl2ZVwiLGUpfX19LGNhc3Q6e251bWJlcjp7ZnJvbTppLmlzQm9vbCx0bzooZSx0KT0+ZT8xOjB9LHN0cmluZzp7ZnJvbTppLmlzQm9vbCx0bzooZSx0KT0+ZT9cInRydWVcIjpcImZhbHNlXCJ9fSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0LnRydXRoeSYmKGU9ZS50cnV0aHkoLi4udC50cnV0aHkpKSx0LmZhbHN5JiYoZT1lLmZhbHN5KC4uLnQuZmFsc3kpKSxlKX0sbWVzc2FnZXM6e1wiYm9vbGVhbi5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBib29sZWFuXCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXIoNyksaT17aXNEYXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgRGF0ZX19O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImRhdGVcIixjb2VyY2U6e2Zyb206W1wibnVtYmVyXCIsXCJzdHJpbmdcIl0sbWV0aG9kOihlLHtzY2hlbWE6dH0pPT4oe3ZhbHVlOmkucGFyc2UoZSx0Ll9mbGFncy5mb3JtYXQpfHxlfSl9LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIscHJlZnM6c30pe2lmKGUgaW5zdGFuY2VvZiBEYXRlJiYhaXNOYU4oZS5nZXRUaW1lKCkpKXJldHVybjtjb25zdCBuPXQuX2ZsYWdzLmZvcm1hdDtyZXR1cm4gcy5jb252ZXJ0JiZuJiZcInN0cmluZ1wiPT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6cihcImRhdGUuZm9ybWF0XCIse2Zvcm1hdDpufSl9Ont2YWx1ZTplLGVycm9yczpyKFwiZGF0ZS5iYXNlXCIpfX0scnVsZXM6e2NvbXBhcmU6e21ldGhvZDohMSx2YWxpZGF0ZShlLHQse2RhdGU6cn0se25hbWU6cyxvcGVyYXRvcjpuLGFyZ3M6YX0pe2NvbnN0IGk9XCJub3dcIj09PXI/RGF0ZS5ub3coKTpyLmdldFRpbWUoKTtyZXR1cm4gby5jb21wYXJlKGUuZ2V0VGltZSgpLGksbik/ZTp0LmVycm9yKFwiZGF0ZS5cIitzLHtsaW1pdDphLmRhdGUsdmFsdWU6ZX0pfSxhcmdzOlt7bmFtZTpcImRhdGVcIixyZWY6ITAsbm9ybWFsaXplOmU9Plwibm93XCI9PT1lP2U6aS5wYXJzZShlKSxhc3NlcnQ6ZT0+bnVsbCE9PWUsbWVzc2FnZTpcIm11c3QgaGF2ZSBhIHZhbGlkIGRhdGUgZm9ybWF0XCJ9XX0sZm9ybWF0OnttZXRob2QoZSl7cmV0dXJuIHMoW1wiaXNvXCIsXCJqYXZhc2NyaXB0XCIsXCJ1bml4XCJdLmluY2x1ZGVzKGUpLFwiVW5rbm93biBkYXRlIGZvcm1hdFwiLGUpLHRoaXMuJF9zZXRGbGFnKFwiZm9ybWF0XCIsZSl9fSxncmVhdGVyOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3JlYXRlclwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPlwifSl9fSxpc286e21ldGhvZCgpe3JldHVybiB0aGlzLmZvcm1hdChcImlzb1wiKX19LGxlc3M6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZXNzXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2RhdGU6ZX0sb3BlcmF0b3I6XCI8XCJ9KX19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPD1cIn0pfX0sbWluOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2RhdGU6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSx0aW1lc3RhbXA6e21ldGhvZChlPVwiamF2YXNjcmlwdFwiKXtyZXR1cm4gcyhbXCJqYXZhc2NyaXB0XCIsXCJ1bml4XCJdLmluY2x1ZGVzKGUpLCdcInR5cGVcIiBtdXN0IGJlIG9uZSBvZiBcImphdmFzY3JpcHQsIHVuaXhcIicpLHRoaXMuZm9ybWF0KGUpfX19LGNhc3Q6e251bWJlcjp7ZnJvbTppLmlzRGF0ZSx0bzooZSx0KT0+ZS5nZXRUaW1lKCl9LHN0cmluZzp7ZnJvbTppLmlzRGF0ZSx0bzooZSx7cHJlZnM6dH0pPT5hLmRhdGUoZSx0KX19LG1lc3NhZ2VzOntcImRhdGUuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgZGF0ZVwiLFwiZGF0ZS5mb3JtYXRcIjone3sjbGFiZWx9fSBtdXN0IGJlIGluIHttc2coXCJkYXRlLmZvcm1hdC5cIiArICNmb3JtYXQpIHx8ICNmb3JtYXR9IGZvcm1hdCcsXCJkYXRlLmdyZWF0ZXJcIjone3sjbGFiZWx9fSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBcInt7I2xpbWl0fX1cIicsXCJkYXRlLmxlc3NcIjone3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBcInt7I2xpbWl0fX1cIicsXCJkYXRlLm1heFwiOid7eyNsYWJlbH19IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIFwie3sjbGltaXR9fVwiJyxcImRhdGUubWluXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBsYXJnZXIgdGhhbiBvciBlcXVhbCB0byBcInt7I2xpbWl0fX1cIicsXCJkYXRlLmZvcm1hdC5pc29cIjpcIklTTyA4NjAxIGRhdGVcIixcImRhdGUuZm9ybWF0LmphdmFzY3JpcHRcIjpcInRpbWVzdGFtcCBvciBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXCIsXCJkYXRlLmZvcm1hdC51bml4XCI6XCJ0aW1lc3RhbXAgb3IgbnVtYmVyIG9mIHNlY29uZHNcIn19KSxpLnBhcnNlPWZ1bmN0aW9uKGUsdCl7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIGU7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihpc05hTihlKXx8IWlzRmluaXRlKGUpKSlyZXR1cm4gbnVsbDtpZigvXlxccyokLy50ZXN0KGUpKXJldHVybiBudWxsO2lmKFwiaXNvXCI9PT10KXJldHVybiBvLmlzSXNvRGF0ZShlKT9pLmRhdGUoZS50b1N0cmluZygpKTpudWxsO2NvbnN0IHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmL15bKy1dP1xcZCsoXFwuXFxkKyk/JC8udGVzdChlKSYmKGU9cGFyc2VGbG9hdChlKSksdCl7aWYoXCJqYXZhc2NyaXB0XCI9PT10KXJldHVybiBpLmRhdGUoMSplKTtpZihcInVuaXhcIj09PXQpcmV0dXJuIGkuZGF0ZSgxZTMqZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIG51bGx9cmV0dXJuIGkuZGF0ZShlKX0saS5kYXRlPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9bmV3IERhdGUoZSk7cmV0dXJuIGlzTmFOKHQuZ2V0VGltZSgpKT9udWxsOnR9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyMik7ZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwiZnVuY3Rpb25cIixwcm9wZXJ0aWVzOnt0eXBlb2Y6XCJmdW5jdGlvblwifSxydWxlczp7YXJpdHk6e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCxcIm4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJhcml0eVwiLGFyZ3M6e246ZX19KX0sdmFsaWRhdGU6KGUsdCx7bjpyfSk9PmUubGVuZ3RoPT09cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5hcml0eVwiLHtuOnJ9KX0sY2xhc3M6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImNsYXNzXCIpfSx2YWxpZGF0ZTooZSx0KT0+L15cXHMqY2xhc3NcXHMvLnRlc3QoZS50b1N0cmluZygpKT9lOnQuZXJyb3IoXCJmdW5jdGlvbi5jbGFzc1wiLHt2YWx1ZTplfSl9LG1pbkFyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+MCxcIm4gbXVzdCBiZSBhIHN0cmljdCBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluQXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aD49cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5taW5Bcml0eVwiLHtuOnJ9KX0sbWF4QXJpdHk6e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCxcIm4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhBcml0eVwiLGFyZ3M6e246ZX19KX0sdmFsaWRhdGU6KGUsdCx7bjpyfSk9PmUubGVuZ3RoPD1yP2U6dC5lcnJvcihcImZ1bmN0aW9uLm1heEFyaXR5XCIse246cn0pfX0sbWVzc2FnZXM6e1wiZnVuY3Rpb24uYXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IG9mIHt7I259fVwiLFwiZnVuY3Rpb24uY2xhc3NcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIGNsYXNzXCIsXCJmdW5jdGlvbi5tYXhBcml0eVwiOlwie3sjbGFiZWx9fSBtdXN0IGhhdmUgYW4gYXJpdHkgbGVzc2VyIG9yIGVxdWFsIHRvIHt7I259fVwiLFwiZnVuY3Rpb24ubWluQXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IGdyZWF0ZXIgb3IgZXF1YWwgdG8ge3sjbn19XCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigyMCksYT1yKDYpLGk9e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyPXt9KXtpZihzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCBkZWZhdWx0cyB2YWx1ZTogbXVzdCBiZSBhbiBvYmplY3RcIikscyghdHx8ITA9PT10fHxcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc291cmNlIHZhbHVlOiBtdXN0IGJlIHRydWUsIGZhbHN5IG9yIGFuIG9iamVjdFwiKSxzKFwib2JqZWN0XCI9PXR5cGVvZiByLFwiSW52YWxpZCBvcHRpb25zOiBtdXN0IGJlIGFuIG9iamVjdFwiKSwhdClyZXR1cm4gbnVsbDtpZihyLnNoYWxsb3cpcmV0dXJuIGkuYXBwbHlUb0RlZmF1bHRzV2l0aFNoYWxsb3coZSx0LHIpO2NvbnN0IGE9bihlKTtpZighMD09PXQpcmV0dXJuIGE7Y29uc3QgbD12b2lkIDAhPT1yLm51bGxPdmVycmlkZSYmci5udWxsT3ZlcnJpZGU7cmV0dXJuIG8oYSx0LHtudWxsT3ZlcnJpZGU6bCxtZXJnZUFycmF5czohMX0pfSxpLmFwcGx5VG9EZWZhdWx0c1dpdGhTaGFsbG93PWZ1bmN0aW9uKGUsdCxyKXtjb25zdCBsPXIuc2hhbGxvdztzKEFycmF5LmlzQXJyYXkobCksXCJJbnZhbGlkIGtleXNcIik7Y29uc3QgYz1uZXcgTWFwLHU9ITA9PT10P251bGw6bmV3IFNldDtmb3IobGV0IHIgb2YgbCl7cj1BcnJheS5pc0FycmF5KHIpP3I6ci5zcGxpdChcIi5cIik7Y29uc3Qgcz1hKGUscik7cyYmXCJvYmplY3RcIj09dHlwZW9mIHM/Yy5zZXQocyx1JiZhKHQscil8fHMpOnUmJnUuYWRkKHIpfWNvbnN0IGY9bihlLHt9LGMpO2lmKCF1KXJldHVybiBmO2Zvcihjb25zdCBlIG9mIHUpaS5yZWFjaENvcHkoZix0LGUpO3JldHVybiBvKGYsdCx7bWVyZ2VBcnJheXM6ITEsbnVsbE92ZXJyaWRlOiExfSl9LGkucmVhY2hDb3B5PWZ1bmN0aW9uKGUsdCxyKXtmb3IoY29uc3QgZSBvZiByKXtpZighKGUgaW4gdCkpcmV0dXJuO3Q9dFtlXX1jb25zdCBzPXQ7bGV0IG49ZTtmb3IobGV0IGU9MDtlPHIubGVuZ3RoLTE7KytlKXtjb25zdCB0PXJbZV07XCJvYmplY3RcIiE9dHlwZW9mIG5bdF0mJihuW3RdPXt9KSxuPW5bdF19bltyW3IubGVuZ3RoLTFdXT1zfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXt9O3QuU29ydGVyPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5faXRlbXM9W10sdGhpcy5ub2Rlcz1bXX1hZGQoZSx0KXtjb25zdCByPVtdLmNvbmNhdCgodD10fHx7fSkuYmVmb3JlfHxbXSksbj1bXS5jb25jYXQodC5hZnRlcnx8W10pLG89dC5ncm91cHx8XCI/XCIsYT10LnNvcnR8fDA7cyghci5pbmNsdWRlcyhvKSxcIkl0ZW0gY2Fubm90IGNvbWUgYmVmb3JlIGl0c2VsZjogXCIuY29uY2F0KG8pKSxzKCFyLmluY2x1ZGVzKFwiP1wiKSxcIkl0ZW0gY2Fubm90IGNvbWUgYmVmb3JlIHVuYXNzb2NpYXRlZCBpdGVtc1wiKSxzKCFuLmluY2x1ZGVzKG8pLFwiSXRlbSBjYW5ub3QgY29tZSBhZnRlciBpdHNlbGY6IFwiLmNvbmNhdChvKSkscyghbi5pbmNsdWRlcyhcIj9cIiksXCJJdGVtIGNhbm5vdCBjb21lIGFmdGVyIHVuYXNzb2NpYXRlZCBpdGVtc1wiKSxBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pO2Zvcihjb25zdCB0IG9mIGUpe2NvbnN0IGU9e3NlcTp0aGlzLl9pdGVtcy5sZW5ndGgsc29ydDphLGJlZm9yZTpyLGFmdGVyOm4sZ3JvdXA6byxub2RlOnR9O3RoaXMuX2l0ZW1zLnB1c2goZSl9Y29uc3QgaT10aGlzLl9zb3J0KCk7cmV0dXJuIHMoaSxcIml0ZW1cIixcIj9cIiE9PW8/XCJhZGRlZCBpbnRvIGdyb3VwIFwiLmNvbmNhdChvKTpcIlwiLFwiY3JlYXRlZCBhIGRlcGVuZGVuY2llcyBlcnJvclwiKSx0aGlzLm5vZGVzfW1lcmdlKGUpe0FycmF5LmlzQXJyYXkoZSl8fChlPVtlXSk7Zm9yKGNvbnN0IHQgb2YgZSlpZih0KWZvcihjb25zdCBlIG9mIHQuX2l0ZW1zKXRoaXMuX2l0ZW1zLnB1c2goT2JqZWN0LmFzc2lnbih7fSxlKSk7dGhpcy5faXRlbXMuc29ydChuLm1lcmdlU29ydCk7Zm9yKGxldCBlPTA7ZTx0aGlzLl9pdGVtcy5sZW5ndGg7KytlKXRoaXMuX2l0ZW1zW2VdLnNlcT1lO2NvbnN0IHQ9dGhpcy5fc29ydCgpO3JldHVybiBzKHQsXCJtZXJnZSBjcmVhdGVkIGEgZGVwZW5kZW5jaWVzIGVycm9yXCIpLHRoaXMubm9kZXN9X3NvcnQoKXtjb25zdCBlPXt9LHQ9T2JqZWN0LmNyZWF0ZShudWxsKSxyPU9iamVjdC5jcmVhdGUobnVsbCk7Zm9yKGNvbnN0IHMgb2YgdGhpcy5faXRlbXMpe2NvbnN0IG49cy5zZXEsbz1zLmdyb3VwO3Jbb109cltvXXx8W10scltvXS5wdXNoKG4pLGVbbl09cy5iZWZvcmU7Zm9yKGNvbnN0IGUgb2Ygcy5hZnRlcil0W2VdPXRbZV18fFtdLHRbZV0ucHVzaChuKX1mb3IoY29uc3QgdCBpbiBlKXtjb25zdCBzPVtdO2Zvcihjb25zdCBuIGluIGVbdF0pe2NvbnN0IG89ZVt0XVtuXTtyW29dPXJbb118fFtdLHMucHVzaCguLi5yW29dKX1lW3RdPXN9Zm9yKGNvbnN0IHMgaW4gdClpZihyW3NdKWZvcihjb25zdCBuIG9mIHJbc10pZVtuXS5wdXNoKC4uLnRbc10pO2NvbnN0IHM9e307Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcj1lW3RdO2Zvcihjb25zdCBlIG9mIHIpc1tlXT1zW2VdfHxbXSxzW2VdLnB1c2godCl9Y29uc3Qgbj17fSxvPVtdO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl7bGV0IHQ9ZTtpZihzW2VdKXt0PW51bGw7Zm9yKGxldCBlPTA7ZTx0aGlzLl9pdGVtcy5sZW5ndGg7KytlKXtpZighMD09PW5bZV0pY29udGludWU7c1tlXXx8KHNbZV09W10pO2NvbnN0IHI9c1tlXS5sZW5ndGg7bGV0IG89MDtmb3IobGV0IHQ9MDt0PHI7Kyt0KW5bc1tlXVt0XV0mJisrbztpZihvPT09cil7dD1lO2JyZWFrfX19bnVsbCE9PXQmJihuW3RdPSEwLG8ucHVzaCh0KSl9aWYoby5sZW5ndGghPT10aGlzLl9pdGVtcy5sZW5ndGgpcmV0dXJuITE7Y29uc3QgYT17fTtmb3IoY29uc3QgZSBvZiB0aGlzLl9pdGVtcylhW2Uuc2VxXT1lO3RoaXMuX2l0ZW1zPVtdLHRoaXMubm9kZXM9W107Zm9yKGNvbnN0IGUgb2Ygbyl7Y29uc3QgdD1hW2VdO3RoaXMubm9kZXMucHVzaCh0Lm5vZGUpLHRoaXMuX2l0ZW1zLnB1c2godCl9cmV0dXJuITB9fSxuLm1lcmdlU29ydD0oZSx0KT0+ZS5zb3J0PT09dC5zb3J0PzA6ZS5zb3J0PHQuc29ydD8tMToxfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDgpLGk9cig0KSxsPXt9O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImxpbmtcIixwcm9wZXJ0aWVzOntzY2hlbWFDaGFpbjohMH0sdGVybXM6e2xpbms6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInNpbmdsZVwiLHJlZ2lzdGVyOiExfX0sYXJnczooZSx0KT0+ZS5yZWYodCksdmFsaWRhdGUoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpufSl7cyh0LiRfdGVybXMubGluayxcIlVuaW5pdGlhbGl6ZWQgbGluayBzY2hlbWFcIik7Y29uc3Qgbz1sLmdlbmVyYXRlKHQsZSxyLG4pLGE9dC4kX3Rlcm1zLmxpbmtbMF0ucmVmO3JldHVybiBvLiRfdmFsaWRhdGUoZSxyLm5lc3QobyxcImxpbms6XCIuY29uY2F0KGEuZGlzcGxheSxcIjpcIikuY29uY2F0KG8udHlwZSkpLG4pfSxnZW5lcmF0ZTooZSx0LHIscyk9PmwuZ2VuZXJhdGUoZSx0LHIscykscnVsZXM6e3JlZjp7bWV0aG9kKGUpe3MoIXRoaXMuJF90ZXJtcy5saW5rLFwiQ2Fubm90IHJlaW5pdGlhbGl6ZSBzY2hlbWFcIiksZT1hLnJlZihlKSxzKFwidmFsdWVcIj09PWUudHlwZXx8XCJsb2NhbFwiPT09ZS50eXBlLFwiSW52YWxpZCByZWZlcmVuY2UgdHlwZTpcIixlLnR5cGUpLHMoXCJsb2NhbFwiPT09ZS50eXBlfHxcInJvb3RcIj09PWUuYW5jZXN0b3J8fGUuYW5jZXN0b3I+MCxcIkxpbmsgY2Fubm90IHJlZmVyZW5jZSBpdHNlbGZcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuJF90ZXJtcy5saW5rPVt7cmVmOmV9XSx0fX0scmVsYXRpdmU6e21ldGhvZChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZWxhdGl2ZVwiLGUpfX19LG92ZXJyaWRlczp7Y29uY2F0KGUpe3ModGhpcy4kX3Rlcm1zLmxpbmssXCJVbmluaXRpYWxpemVkIGxpbmsgc2NoZW1hXCIpLHMoby5pc1NjaGVtYShlKSxcIkludmFsaWQgc2NoZW1hIG9iamVjdFwiKSxzKFwibGlua1wiIT09ZS50eXBlLFwiQ2Fubm90IG1lcmdlIHR5cGUgbGluayB3aXRoIGFub3RoZXIgbGlua1wiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC4kX3Rlcm1zLndoZW5zfHwodC4kX3Rlcm1zLndoZW5zPVtdKSx0LiRfdGVybXMud2hlbnMucHVzaCh7Y29uY2F0OmV9KSx0LiRfbXV0YXRlUmVidWlsZCgpfX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4ocyh0LmxpbmssXCJJbnZhbGlkIGxpbmsgZGVzY3JpcHRpb24gbWlzc2luZyBsaW5rXCIpLGUucmVmKHQubGluaykpfX0pLGwuZ2VuZXJhdGU9ZnVuY3Rpb24oZSx0LHIscyl7bGV0IG49ci5tYWluc3RheS5saW5rcy5nZXQoZSk7aWYobilyZXR1cm4gbi5fZ2VuZXJhdGUodCxyLHMpLnNjaGVtYTtjb25zdCBvPWUuJF90ZXJtcy5saW5rWzBdLnJlZix7cGVyc3BlY3RpdmU6YSxwYXRoOml9PWwucGVyc3BlY3RpdmUobyxyKTtsLmFzc2VydChhLFwid2hpY2ggaXMgb3V0c2lkZSBvZiBzY2hlbWEgYm91bmRhcmllc1wiLG8sZSxyLHMpO3RyeXtuPWkubGVuZ3RoP2EuJF9yZWFjaChpKTphfWNhdGNoKHQpe2wuYXNzZXJ0KCExLFwidG8gbm9uLWV4aXN0aW5nIHNjaGVtYVwiLG8sZSxyLHMpfXJldHVybiBsLmFzc2VydChcImxpbmtcIiE9PW4udHlwZSxcIndoaWNoIGlzIGFub3RoZXIgbGlua1wiLG8sZSxyLHMpLGUuX2ZsYWdzLnJlbGF0aXZlfHxyLm1haW5zdGF5LmxpbmtzLnNldChlLG4pLG4uX2dlbmVyYXRlKHQscixzKS5zY2hlbWF9LGwucGVyc3BlY3RpdmU9ZnVuY3Rpb24oZSx0KXtpZihcImxvY2FsXCI9PT1lLnR5cGUpe2Zvcihjb25zdHtzY2hlbWE6cixrZXk6c31vZiB0LnNjaGVtYXMpe2lmKChyLl9mbGFncy5pZHx8cyk9PT1lLnBhdGhbMF0pcmV0dXJue3BlcnNwZWN0aXZlOnIscGF0aDplLnBhdGguc2xpY2UoMSl9O2lmKHIuJF90ZXJtcy5zaGFyZWQpZm9yKGNvbnN0IHQgb2Ygci4kX3Rlcm1zLnNoYXJlZClpZih0Ll9mbGFncy5pZD09PWUucGF0aFswXSlyZXR1cm57cGVyc3BlY3RpdmU6dCxwYXRoOmUucGF0aC5zbGljZSgxKX19cmV0dXJue3BlcnNwZWN0aXZlOm51bGwscGF0aDpudWxsfX1yZXR1cm5cInJvb3RcIj09PWUuYW5jZXN0b3I/e3BlcnNwZWN0aXZlOnQuc2NoZW1hc1t0LnNjaGVtYXMubGVuZ3RoLTFdLnNjaGVtYSxwYXRoOmUucGF0aH06e3BlcnNwZWN0aXZlOnQuc2NoZW1hc1tlLmFuY2VzdG9yXSYmdC5zY2hlbWFzW2UuYW5jZXN0b3JdLnNjaGVtYSxwYXRoOmUucGF0aH19LGwuYXNzZXJ0PWZ1bmN0aW9uKGUsdCxyLG4sbyxhKXtlfHxzKCExLCdcIicuY29uY2F0KGkubGFiZWwobi5fZmxhZ3MsbyxhKSwnXCIgY29udGFpbnMgbGluayByZWZlcmVuY2UgXCInKS5jb25jYXQoci5kaXNwbGF5LCdcIiAnKS5jb25jYXQodCkpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9e251bWJlclJ4Oi9eXFxzKlsrLV0/KD86KD86XFxkKyg/OlxcLlxcZCopPyl8KD86XFwuXFxkKykpKD86ZShbKy1dP1xcZCspKT9cXHMqJC9pLHByZWNpc2lvblJ4Oi8oPzpcXC4oXFxkKykpPyg/OltlRV0oWystXT9cXGQrKSk/JC99O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcIm51bWJlclwiLGZsYWdzOnt1bnNhZmU6e2RlZmF1bHQ6ITF9fSxjb2VyY2U6e2Zyb206XCJzdHJpbmdcIixtZXRob2QoZSx7c2NoZW1hOnQsZXJyb3I6cn0pe2NvbnN0IHM9ZS5tYXRjaChhLm51bWJlclJ4KTtpZighcylyZXR1cm47ZT1lLnRyaW0oKTtjb25zdCBuPXt2YWx1ZTpwYXJzZUZsb2F0KGUpfTtpZigwPT09bi52YWx1ZSYmKG4udmFsdWU9MCksIXQuX2ZsYWdzLnVuc2FmZSlpZihlLm1hdGNoKC9lL2kpKXtpZihhLm5vcm1hbGl6ZUV4cG9uZW50KFwiXCIuY29uY2F0KG4udmFsdWUvTWF0aC5wb3coMTAsc1sxXSksXCJlXCIpLmNvbmNhdChzWzFdKSkhPT1hLm5vcm1hbGl6ZUV4cG9uZW50KGUpKXJldHVybiBuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSxufWVsc2V7Y29uc3QgdD1uLnZhbHVlLnRvU3RyaW5nKCk7aWYodC5tYXRjaCgvZS9pKSlyZXR1cm4gbjtpZih0IT09YS5ub3JtYWxpemVEZWNpbWFsKGUpKXJldHVybiBuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSxufXJldHVybiBufX0sdmFsaWRhdGUoZSx7c2NoZW1hOnQsZXJyb3I6cixwcmVmczpzfSl7aWYoZT09PTEvMHx8ZT09PS0xLzApcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnIoXCJudW1iZXIuaW5maW5pdHlcIil9O2lmKCFvLmlzTnVtYmVyKGUpKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwibnVtYmVyLmJhc2VcIil9O2NvbnN0IG49e3ZhbHVlOmV9O2lmKHMuY29udmVydCl7Y29uc3QgZT10LiRfZ2V0UnVsZShcInByZWNpc2lvblwiKTtpZihlKXtjb25zdCB0PU1hdGgucG93KDEwLGUuYXJncy5saW1pdCk7bi52YWx1ZT1NYXRoLnJvdW5kKG4udmFsdWUqdCkvdH19cmV0dXJuIDA9PT1uLnZhbHVlJiYobi52YWx1ZT0wKSwhdC5fZmxhZ3MudW5zYWZlJiYoZT5OdW1iZXIuTUFYX1NBRkVfSU5URUdFUnx8ZTxOdW1iZXIuTUlOX1NBRkVfSU5URUdFUikmJihuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSksbn0scnVsZXM6e2NvbXBhcmU6e21ldGhvZDohMSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczphfSk9Pm8uY29tcGFyZShlLHIsbik/ZTp0LmVycm9yKFwibnVtYmVyLlwiK3Mse2xpbWl0OmEubGltaXQsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwibGltaXRcIixyZWY6ITAsYXNzZXJ0Om8uaXNOdW1iZXIsbWVzc2FnZTpcIm11c3QgYmUgYSBudW1iZXJcIn1dfSxncmVhdGVyOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3JlYXRlclwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj5cIn0pfX0saW50ZWdlcjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaW50ZWdlclwiKX0sdmFsaWRhdGU6KGUsdCk9Pk1hdGgudHJ1bmMoZSktZT09MD9lOnQuZXJyb3IoXCJudW1iZXIuaW50ZWdlclwiKX0sbGVzczp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlc3NcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8XCJ9KX19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj49XCJ9KX19LG11bHRpcGxlOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibXVsdGlwbGVcIixhcmdzOntiYXNlOmV9fSl9LHZhbGlkYXRlOihlLHQse2Jhc2U6cn0scyk9PmUlcj09MD9lOnQuZXJyb3IoXCJudW1iZXIubXVsdGlwbGVcIix7bXVsdGlwbGU6cy5hcmdzLmJhc2UsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwiYmFzZVwiLHJlZjohMCxhc3NlcnQ6ZT0+XCJudW1iZXJcIj09dHlwZW9mIGUmJmlzRmluaXRlKGUpJiZlPjAsbWVzc2FnZTpcIm11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIn1dLG11bHRpOiEwfSxuZWdhdGl2ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuc2lnbihcIm5lZ2F0aXZlXCIpfX0scG9ydDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwicG9ydFwiKX0sdmFsaWRhdGU6KGUsdCk9Pk51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPj0wJiZlPD02NTUzNT9lOnQuZXJyb3IoXCJudW1iZXIucG9ydFwiKX0scG9zaXRpdmU6e21ldGhvZCgpe3JldHVybiB0aGlzLnNpZ24oXCJwb3NpdGl2ZVwiKX19LHByZWNpc2lvbjp7bWV0aG9kKGUpe3JldHVybiBzKE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpLFwibGltaXQgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwicHJlY2lzaW9uXCIsYXJnczp7bGltaXQ6ZX19KX0sdmFsaWRhdGUoZSx0LHtsaW1pdDpyfSl7Y29uc3Qgcz1lLnRvU3RyaW5nKCkubWF0Y2goYS5wcmVjaXNpb25SeCk7cmV0dXJuIE1hdGgubWF4KChzWzFdP3NbMV0ubGVuZ3RoOjApLShzWzJdP3BhcnNlSW50KHNbMl0sMTApOjApLDApPD1yP2U6dC5lcnJvcihcIm51bWJlci5wcmVjaXNpb25cIix7bGltaXQ6cix2YWx1ZTplfSl9LGNvbnZlcnQ6ITB9LHNpZ246e21ldGhvZChlKXtyZXR1cm4gcyhbXCJuZWdhdGl2ZVwiLFwicG9zaXRpdmVcIl0uaW5jbHVkZXMoZSksXCJJbnZhbGlkIHNpZ25cIixlKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInNpZ25cIixhcmdzOntzaWduOmV9fSl9LHZhbGlkYXRlOihlLHQse3NpZ246cn0pPT5cIm5lZ2F0aXZlXCI9PT1yJiZlPDB8fFwicG9zaXRpdmVcIj09PXImJmU+MD9lOnQuZXJyb3IoXCJudW1iZXIuXCIuY29uY2F0KHIpKX0sdW5zYWZlOnttZXRob2QoZT0hMCl7cmV0dXJuIHMoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiZW5hYmxlZCBtdXN0IGJlIGEgYm9vbGVhblwiKSx0aGlzLiRfc2V0RmxhZyhcInVuc2FmZVwiLGUpfX19LGNhc3Q6e3N0cmluZzp7ZnJvbTplPT5cIm51bWJlclwiPT10eXBlb2YgZSx0bzooZSx0KT0+ZS50b1N0cmluZygpfX0sbWVzc2FnZXM6e1wibnVtYmVyLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG51bWJlclwiLFwibnVtYmVyLmdyZWF0ZXJcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBncmVhdGVyIHRoYW4ge3sjbGltaXR9fVwiLFwibnVtYmVyLmluZmluaXR5XCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBpbmZpbml0eVwiLFwibnVtYmVyLmludGVnZXJcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhbiBpbnRlZ2VyXCIsXCJudW1iZXIubGVzc1wiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiB7eyNsaW1pdH19XCIsXCJudW1iZXIubWF4XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX1cIixcIm51bWJlci5taW5cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBsYXJnZXIgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19XCIsXCJudW1iZXIubXVsdGlwbGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mIHt7I211bHRpcGxlfX1cIixcIm51bWJlci5uZWdhdGl2ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyXCIsXCJudW1iZXIucG9ydFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgcG9ydFwiLFwibnVtYmVyLnBvc2l0aXZlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIixcIm51bWJlci5wcmVjaXNpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIG5vIG1vcmUgdGhhbiB7eyNsaW1pdH19IGRlY2ltYWwgcGxhY2VzXCIsXCJudW1iZXIudW5zYWZlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzYWZlIG51bWJlclwifX0pLGEubm9ybWFsaXplRXhwb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvRS8sXCJlXCIpLnJlcGxhY2UoL1xcLihcXGQqWzEtOV0pPzArZS8sXCIuJDFlXCIpLnJlcGxhY2UoL1xcLmUvLFwiZVwiKS5yZXBsYWNlKC9lXFwrLyxcImVcIikucmVwbGFjZSgvXlxcKy8sXCJcIikucmVwbGFjZSgvXigtPykwKyhbMS05XSkvLFwiJDEkMlwiKX0sYS5ub3JtYWxpemVEZWNpbWFsPWZ1bmN0aW9uKGUpe3JldHVybihlPWUucmVwbGFjZSgvXlxcKy8sXCJcIikucmVwbGFjZSgvXFwuMCskLyxcIlwiKS5yZXBsYWNlKC9eKC0/KVxcLihbXlxcLl0qKSQvLFwiJDEwLiQyXCIpLnJlcGxhY2UoL14oLT8pMCsoWzEtOV0pLyxcIiQxJDJcIikpLmluY2x1ZGVzKFwiLlwiKSYmZS5lbmRzV2l0aChcIjBcIikmJihlPWUucmVwbGFjZSgvMCskLyxcIlwiKSksXCItMFwiPT09ZT9cIjBcIjplfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyMik7ZS5leHBvcnRzPXMuZXh0ZW5kKHt0eXBlOlwib2JqZWN0XCIsY2FzdDp7bWFwOntmcm9tOmU9PmUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLHRvOihlLHQpPT5uZXcgTWFwKE9iamVjdC5lbnRyaWVzKGUpKX19fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYocz1zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixzKX1yZXR1cm4gcn1mdW5jdGlvbiBuKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3MoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtvKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpzKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIG8oZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWNvbnN0IGE9cigwKSxpPXIoMjMpLGw9cig0OSksYz1yKDUwKSx1PXIoMjcpLGY9cig1MSksbT1yKDI2KSxoPXIoMyksZD1yKDEpLHA9e3RsZHM6ZiBpbnN0YW5jZW9mIFNldCYme3RsZHM6e2FsbG93OmYsZGVueTpudWxsfX0sYmFzZTY0UmVnZXg6e3RydWU6e3RydWU6L14oPzpbXFx3XFwtXXsyfVtcXHdcXC1dezJ9KSooPzpbXFx3XFwtXXsyfT09fFtcXHdcXC1dezN9PSk/JC8sZmFsc2U6L14oPzpbQS1aYS16MC05K1xcL117Mn1bQS1aYS16MC05K1xcL117Mn0pKig/OltBLVphLXowLTkrXFwvXXsyfT09fFtBLVphLXowLTkrXFwvXXszfT0pPyQvfSxmYWxzZTp7dHJ1ZTovXig/OltcXHdcXC1dezJ9W1xcd1xcLV17Mn0pKig/OltcXHdcXC1dezJ9KD09KT98W1xcd1xcLV17M309Pyk/JC8sZmFsc2U6L14oPzpbQS1aYS16MC05K1xcL117Mn1bQS1aYS16MC05K1xcL117Mn0pKig/OltBLVphLXowLTkrXFwvXXsyfSg9PSk/fFtBLVphLXowLTkrXFwvXXszfT0/KT8kL319LGRhdGFVcmlSZWdleDovXmRhdGE6W1xcdysuLV0rXFwvW1xcdysuLV0rOygoY2hhcnNldD1bXFx3LV0rfGJhc2U2NCksKT8oLiopJC8saGV4UmVnZXg6L15bYS1mMC05XSskL2ksaXBSZWdleDpjLnJlZ2V4KCkucmVnZXgsaXNvRHVyYXRpb25SZWdleDovXlAoPyEkKShcXGQrWSk/KFxcZCtNKT8oXFxkK1cpPyhcXGQrRCk/KFQoPz1cXGQpKFxcZCtIKT8oXFxkK00pPyhcXGQrUyk/KT8kLyxndWlkQnJhY2tldHM6e1wie1wiOlwifVwiLFwiW1wiOlwiXVwiLFwiKFwiOlwiKVwiLFwiXCI6XCJcIn0sZ3VpZFZlcnNpb25zOnt1dWlkdjE6XCIxXCIsdXVpZHYyOlwiMlwiLHV1aWR2MzpcIjNcIix1dWlkdjQ6XCI0XCIsdXVpZHY1OlwiNVwifSxjaWRyUHJlc2VuY2VzOltcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCJdLG5vcm1hbGl6YXRpb25Gb3JtczpbXCJORkNcIixcIk5GRFwiLFwiTkZLQ1wiLFwiTkZLRFwiXX07ZS5leHBvcnRzPWguZXh0ZW5kKHt0eXBlOlwic3RyaW5nXCIsZmxhZ3M6e2luc2Vuc2l0aXZlOntkZWZhdWx0OiExfSx0cnVuY2F0ZTp7ZGVmYXVsdDohMX19LHRlcm1zOntyZXBsYWNlbWVudHM6e2luaXQ6bnVsbH19LGNvZXJjZTp7ZnJvbTpcInN0cmluZ1wiLG1ldGhvZChlLHtzY2hlbWE6dCxzdGF0ZTpyLHByZWZzOnN9KXtjb25zdCBuPXQuJF9nZXRSdWxlKFwibm9ybWFsaXplXCIpO24mJihlPWUubm9ybWFsaXplKG4uYXJncy5mb3JtKSk7Y29uc3Qgbz10LiRfZ2V0UnVsZShcImNhc2VcIik7byYmKGU9XCJ1cHBlclwiPT09by5hcmdzLmRpcmVjdGlvbj9lLnRvTG9jYWxlVXBwZXJDYXNlKCk6ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtjb25zdCBhPXQuJF9nZXRSdWxlKFwidHJpbVwiKTtpZihhJiZhLmFyZ3MuZW5hYmxlZCYmKGU9ZS50cmltKCkpLHQuJF90ZXJtcy5yZXBsYWNlbWVudHMpZm9yKGNvbnN0IHIgb2YgdC4kX3Rlcm1zLnJlcGxhY2VtZW50cyllPWUucmVwbGFjZShyLnBhdHRlcm4sci5yZXBsYWNlbWVudCk7Y29uc3QgaT10LiRfZ2V0UnVsZShcImhleFwiKTtpZihpJiZpLmFyZ3Mub3B0aW9ucy5ieXRlQWxpZ25lZCYmZS5sZW5ndGglMiE9MCYmKGU9XCIwXCIuY29uY2F0KGUpKSx0LiRfZ2V0UnVsZShcImlzb0RhdGVcIikpe2NvbnN0IHQ9cC5pc29EYXRlKGUpO3QmJihlPXQpfWlmKHQuX2ZsYWdzLnRydW5jYXRlKXtjb25zdCBuPXQuJF9nZXRSdWxlKFwibWF4XCIpO2lmKG4pe2xldCBvPW4uYXJncy5saW1pdDtpZihkLmlzUmVzb2x2YWJsZShvKSYmKG89by5yZXNvbHZlKGUscixzKSwhZC5saW1pdChvKSkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnQuJF9jcmVhdGVFcnJvcihcImFueS5yZWZcIixvLHtyZWY6bi5hcmdzLmxpbWl0LGFyZzpcImxpbWl0XCIscmVhc29uOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn0scixzKX07ZT1lLnNsaWNlKDAsbyl9fXJldHVybnt2YWx1ZTplfX19LHZhbGlkYXRlOihlLHtlcnJvcjp0fSk9Plwic3RyaW5nXCIhPXR5cGVvZiBlP3t2YWx1ZTplLGVycm9yczp0KFwic3RyaW5nLmJhc2VcIil9OlwiXCI9PT1lP3t2YWx1ZTplLGVycm9yczp0KFwic3RyaW5nLmVtcHR5XCIpfTp2b2lkIDAscnVsZXM6e2FscGhhbnVtOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJhbHBoYW51bVwiKX0sdmFsaWRhdGU6KGUsdCk9Pi9eW2EtekEtWjAtOV0rJC8udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuYWxwaGFudW1cIil9LGJhc2U2NDp7bWV0aG9kKGU9e30pe3JldHVybiBkLmFzc2VydE9wdGlvbnMoZSxbXCJwYWRkaW5nUmVxdWlyZWRcIixcInVybFNhZmVcIl0pLGU9bih7dXJsU2FmZTohMSxwYWRkaW5nUmVxdWlyZWQ6ITB9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnBhZGRpbmdSZXF1aXJlZCxcInBhZGRpbmdSZXF1aXJlZCBtdXN0IGJlIGJvb2xlYW5cIiksYShcImJvb2xlYW5cIj09dHlwZW9mIGUudXJsU2FmZSxcInVybFNhZmUgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiYmFzZTY0XCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9KT0+cC5iYXNlNjRSZWdleFtyLnBhZGRpbmdSZXF1aXJlZF1bci51cmxTYWZlXS50ZXN0KGUpP2U6dC5lcnJvcihcInN0cmluZy5iYXNlNjRcIil9LGNhc2U6e21ldGhvZChlKXtyZXR1cm4gYShbXCJsb3dlclwiLFwidXBwZXJcIl0uaW5jbHVkZXMoZSksXCJJbnZhbGlkIGNhc2U6XCIsZSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJjYXNlXCIsYXJnczp7ZGlyZWN0aW9uOmV9fSl9LHZhbGlkYXRlOihlLHQse2RpcmVjdGlvbjpyfSk9PlwibG93ZXJcIj09PXImJmU9PT1lLnRvTG9jYWxlTG93ZXJDYXNlKCl8fFwidXBwZXJcIj09PXImJmU9PT1lLnRvTG9jYWxlVXBwZXJDYXNlKCk/ZTp0LmVycm9yKFwic3RyaW5nLlwiLmNvbmNhdChyLFwiY2FzZVwiKSksY29udmVydDohMH0sY3JlZGl0Q2FyZDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiY3JlZGl0Q2FyZFwiKX0sdmFsaWRhdGUoZSx0KXtsZXQgcj1lLmxlbmd0aCxzPTAsbj0xO2Zvcig7ci0tOyl7Y29uc3QgdD1lLmNoYXJBdChyKSpuO3MrPXQtOSoodD45KSxuXj0zfXJldHVybiBzPjAmJnMlMTA9PTA/ZTp0LmVycm9yKFwic3RyaW5nLmNyZWRpdENhcmRcIil9fSxkYXRhVXJpOnttZXRob2QoZT17fSl7cmV0dXJuIGQuYXNzZXJ0T3B0aW9ucyhlLFtcInBhZGRpbmdSZXF1aXJlZFwiXSksZT1uKHtwYWRkaW5nUmVxdWlyZWQ6ITB9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnBhZGRpbmdSZXF1aXJlZCxcInBhZGRpbmdSZXF1aXJlZCBtdXN0IGJlIGJvb2xlYW5cIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJkYXRhVXJpXCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZShlLHQse29wdGlvbnM6cn0pe2NvbnN0IHM9ZS5tYXRjaChwLmRhdGFVcmlSZWdleCk7aWYocyl7aWYoIXNbMl0pcmV0dXJuIGU7aWYoXCJiYXNlNjRcIiE9PXNbMl0pcmV0dXJuIGU7aWYocC5iYXNlNjRSZWdleFtyLnBhZGRpbmdSZXF1aXJlZF0uZmFsc2UudGVzdChzWzNdKSlyZXR1cm4gZX1yZXR1cm4gdC5lcnJvcihcInN0cmluZy5kYXRhVXJpXCIpfX0sZG9tYWluOnttZXRob2QoZSl7ZSYmZC5hc3NlcnRPcHRpb25zKGUsW1wiYWxsb3dVbmljb2RlXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwidGxkc1wiXSk7Y29uc3QgdD1wLmFkZHJlc3NPcHRpb25zKGUpO3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImRvbWFpblwiLGFyZ3M6e29wdGlvbnM6ZX0sYWRkcmVzczp0fSl9LHZhbGlkYXRlOihlLHQscix7YWRkcmVzczpzfSk9PmkuaXNWYWxpZChlLHMpP2U6dC5lcnJvcihcInN0cmluZy5kb21haW5cIil9LGVtYWlsOnttZXRob2QoZT17fSl7ZC5hc3NlcnRPcHRpb25zKGUsW1wiYWxsb3dVbmljb2RlXCIsXCJpZ25vcmVMZW5ndGhcIixcIm1pbkRvbWFpblNlZ21lbnRzXCIsXCJtdWx0aXBsZVwiLFwic2VwYXJhdG9yXCIsXCJ0bGRzXCJdKSxhKHZvaWQgMD09PWUubXVsdGlwbGV8fFwiYm9vbGVhblwiPT10eXBlb2YgZS5tdWx0aXBsZSxcIm11bHRpcGxlIG9wdGlvbiBtdXN0IGJlIGFuIGJvb2xlYW5cIik7Y29uc3QgdD1wLmFkZHJlc3NPcHRpb25zKGUpLHI9bmV3IFJlZ0V4cChcIlxcXFxzKltcIi5jb25jYXQoZS5zZXBhcmF0b3I/dShlLnNlcGFyYXRvcik6XCIsXCIsXCJdXFxcXHMqXCIpKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJlbWFpbFwiLGFyZ3M6e29wdGlvbnM6ZX0scmVnZXg6cixhZGRyZXNzOnR9KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzLGFkZHJlc3M6bn0pe2NvbnN0IG89ci5tdWx0aXBsZT9lLnNwbGl0KHMpOltlXSxhPVtdO2Zvcihjb25zdCBlIG9mIG8pbC5pc1ZhbGlkKGUsbil8fGEucHVzaChlKTtyZXR1cm4gYS5sZW5ndGg/dC5lcnJvcihcInN0cmluZy5lbWFpbFwiLHt2YWx1ZTplLGludmFsaWRzOmF9KTplfX0sZ3VpZDp7YWxpYXM6XCJ1dWlkXCIsbWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcInZlcnNpb25cIl0pO2xldCB0PVwiXCI7aWYoZS52ZXJzaW9uKXtjb25zdCByPVtdLmNvbmNhdChlLnZlcnNpb24pO2Eoci5sZW5ndGg+PTEsXCJ2ZXJzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCAxIHZhbGlkIHZlcnNpb24gc3BlY2lmaWVkXCIpO2NvbnN0IHM9bmV3IFNldDtmb3IobGV0IGU9MDtlPHIubGVuZ3RoOysrZSl7Y29uc3Qgbj1yW2VdO2EoXCJzdHJpbmdcIj09dHlwZW9mIG4sXCJ2ZXJzaW9uIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIHN0cmluZ1wiKTtjb25zdCBvPXAuZ3VpZFZlcnNpb25zW24udG9Mb3dlckNhc2UoKV07YShvLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgb25lIG9mIFwiK09iamVjdC5rZXlzKHAuZ3VpZFZlcnNpb25zKS5qb2luKFwiLCBcIikpLGEoIXMuaGFzKG8pLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3Qgbm90IGJlIGEgZHVwbGljYXRlXCIpLHQrPW8scy5hZGQobyl9fWNvbnN0IHI9bmV3IFJlZ0V4cChcIl4oW1xcXFxbe1xcXFwoXT8pWzAtOUEtRl17OH0oWzotXT8pWzAtOUEtRl17NH1cXFxcMj9bXCIuY29uY2F0KHR8fFwiMC05QS1GXCIsXCJdWzAtOUEtRl17M31cXFxcMj9bXCIpLmNvbmNhdCh0P1wiODlBQlwiOlwiMC05QS1GXCIsXCJdWzAtOUEtRl17M31cXFxcMj9bMC05QS1GXXsxMn0oW1xcXFxdfVxcXFwpXT8pJFwiKSxcImlcIik7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3VpZFwiLGFyZ3M6e29wdGlvbnM6ZX0scmVnZXg6cn0pfSx2YWxpZGF0ZShlLHQscix7cmVnZXg6c30pe2NvbnN0IG49cy5leGVjKGUpO3JldHVybiBuP3AuZ3VpZEJyYWNrZXRzW25bMV1dIT09bltuLmxlbmd0aC0xXT90LmVycm9yKFwic3RyaW5nLmd1aWRcIik6ZTp0LmVycm9yKFwic3RyaW5nLmd1aWRcIil9fSxoZXg6e21ldGhvZChlPXt9KXtyZXR1cm4gZC5hc3NlcnRPcHRpb25zKGUsW1wiYnl0ZUFsaWduZWRcIl0pLGU9bih7Ynl0ZUFsaWduZWQ6ITF9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLmJ5dGVBbGlnbmVkLFwiYnl0ZUFsaWduZWQgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaGV4XCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9KT0+cC5oZXhSZWdleC50ZXN0KGUpP3IuYnl0ZUFsaWduZWQmJmUubGVuZ3RoJTIhPTA/dC5lcnJvcihcInN0cmluZy5oZXhBbGlnblwiKTplOnQuZXJyb3IoXCJzdHJpbmcuaGV4XCIpfSxob3N0bmFtZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaG9zdG5hbWVcIil9LHZhbGlkYXRlOihlLHQpPT5pLmlzVmFsaWQoZSx7bWluRG9tYWluU2VnbWVudHM6MX0pfHxwLmlwUmVnZXgudGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuaG9zdG5hbWVcIil9LGluc2Vuc2l0aXZlOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJpbnNlbnNpdGl2ZVwiLCEwKX19LGlwOnttZXRob2QoZT17fSl7ZC5hc3NlcnRPcHRpb25zKGUsW1wiY2lkclwiLFwidmVyc2lvblwiXSk7Y29uc3R7Y2lkcjp0LHZlcnNpb25zOnIscmVnZXg6c309Yy5yZWdleChlKSxuPWUudmVyc2lvbj9yOnZvaWQgMDtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJpcFwiLGFyZ3M6e29wdGlvbnM6e2NpZHI6dCx2ZXJzaW9uOm59fSxyZWdleDpzfSl9LHZhbGlkYXRlOihlLHQse29wdGlvbnM6cn0se3JlZ2V4OnN9KT0+cy50ZXN0KGUpP2U6ci52ZXJzaW9uP3QuZXJyb3IoXCJzdHJpbmcuaXBWZXJzaW9uXCIse3ZhbHVlOmUsY2lkcjpyLmNpZHIsdmVyc2lvbjpyLnZlcnNpb259KTp0LmVycm9yKFwic3RyaW5nLmlwXCIse3ZhbHVlOmUsY2lkcjpyLmNpZHJ9KX0saXNvRGF0ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaXNvRGF0ZVwiKX0sdmFsaWRhdGU6KGUse2Vycm9yOnR9KT0+cC5pc29EYXRlKGUpP2U6dChcInN0cmluZy5pc29EYXRlXCIpfSxpc29EdXJhdGlvbjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaXNvRHVyYXRpb25cIil9LHZhbGlkYXRlOihlLHQpPT5wLmlzb0R1cmF0aW9uUmVnZXgudGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuaXNvRHVyYXRpb25cIil9LGxlbmd0aDp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJsZW5ndGhcIixlLFwiPVwiLHQpfSx2YWxpZGF0ZShlLHQse2xpbWl0OnIsZW5jb2Rpbmc6c30se25hbWU6bixvcGVyYXRvcjpvLGFyZ3M6YX0pe2NvbnN0IGk9IXMmJmUubGVuZ3RoO3JldHVybiBkLmNvbXBhcmUoaSxyLG8pP2U6dC5lcnJvcihcInN0cmluZy5cIituLHtsaW1pdDphLmxpbWl0LHZhbHVlOmUsZW5jb2Rpbmc6c30pfSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpkLmxpbWl0LG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclwifSxcImVuY29kaW5nXCJdfSxsb3dlcmNhc2U6e21ldGhvZCgpe3JldHVybiB0aGlzLmNhc2UoXCJsb3dlclwiKX19LG1heDp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJtYXhcIixlLFwiPD1cIix0KX0sYXJnczpbXCJsaW1pdFwiLFwiZW5jb2RpbmdcIl19LG1pbjp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJtaW5cIixlLFwiPj1cIix0KX0sYXJnczpbXCJsaW1pdFwiLFwiZW5jb2RpbmdcIl19LG5vcm1hbGl6ZTp7bWV0aG9kKGU9XCJORkNcIil7cmV0dXJuIGEocC5ub3JtYWxpemF0aW9uRm9ybXMuaW5jbHVkZXMoZSksXCJub3JtYWxpemF0aW9uIGZvcm0gbXVzdCBiZSBvbmUgb2YgXCIrcC5ub3JtYWxpemF0aW9uRm9ybXMuam9pbihcIiwgXCIpKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm5vcm1hbGl6ZVwiLGFyZ3M6e2Zvcm06ZX19KX0sdmFsaWRhdGU6KGUse2Vycm9yOnR9LHtmb3JtOnJ9KT0+ZT09PWUubm9ybWFsaXplKHIpP2U6dChcInN0cmluZy5ub3JtYWxpemVcIix7dmFsdWU6ZSxmb3JtOnJ9KSxjb252ZXJ0OiEwfSxwYXR0ZXJuOnthbGlhczpcInJlZ2V4XCIsbWV0aG9kKGUsdD17fSl7YShlIGluc3RhbmNlb2YgUmVnRXhwLFwicmVnZXggbXVzdCBiZSBhIFJlZ0V4cFwiKSxhKCFlLmZsYWdzLmluY2x1ZGVzKFwiZ1wiKSYmIWUuZmxhZ3MuaW5jbHVkZXMoXCJ5XCIpLFwicmVnZXggc2hvdWxkIG5vdCB1c2UgZ2xvYmFsIG9yIHN0aWNreSBtb2RlXCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD17bmFtZTp0fSksZC5hc3NlcnRPcHRpb25zKHQsW1wiaW52ZXJ0XCIsXCJuYW1lXCJdKTtjb25zdCByPVtcInN0cmluZy5wYXR0ZXJuXCIsdC5pbnZlcnQ/XCIuaW52ZXJ0XCI6XCJcIix0Lm5hbWU/XCIubmFtZVwiOlwiLmJhc2VcIl0uam9pbihcIlwiKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJwYXR0ZXJuXCIsYXJnczp7cmVnZXg6ZSxvcHRpb25zOnR9LGVycm9yQ29kZTpyfSl9LHZhbGlkYXRlOihlLHQse3JlZ2V4OnIsb3B0aW9uczpzfSx7ZXJyb3JDb2RlOm59KT0+ci50ZXN0KGUpXnMuaW52ZXJ0P2U6dC5lcnJvcihuLHtuYW1lOnMubmFtZSxyZWdleDpyLHZhbHVlOmV9KSxhcmdzOltcInJlZ2V4XCIsXCJvcHRpb25zXCJdLG11bHRpOiEwfSxyZXBsYWNlOnttZXRob2QoZSx0KXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9bmV3IFJlZ0V4cCh1KGUpLFwiZ1wiKSksYShlIGluc3RhbmNlb2YgUmVnRXhwLFwicGF0dGVybiBtdXN0IGJlIGEgUmVnRXhwXCIpLGEoXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJyZXBsYWNlbWVudCBtdXN0IGJlIGEgU3RyaW5nXCIpO2NvbnN0IHI9dGhpcy5jbG9uZSgpO3JldHVybiByLiRfdGVybXMucmVwbGFjZW1lbnRzfHwoci4kX3Rlcm1zLnJlcGxhY2VtZW50cz1bXSksci4kX3Rlcm1zLnJlcGxhY2VtZW50cy5wdXNoKHtwYXR0ZXJuOmUscmVwbGFjZW1lbnQ6dH0pLHJ9fSx0b2tlbjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwidG9rZW5cIil9LHZhbGlkYXRlOihlLHQpPT4vXlxcdyskLy50ZXN0KGUpP2U6dC5lcnJvcihcInN0cmluZy50b2tlblwiKX0sdHJpbTp7bWV0aG9kKGU9ITApe3JldHVybiBhKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ0cmltXCIsYXJnczp7ZW5hYmxlZDplfX0pfSx2YWxpZGF0ZTooZSx0LHtlbmFibGVkOnJ9KT0+ciYmZSE9PWUudHJpbSgpP3QuZXJyb3IoXCJzdHJpbmcudHJpbVwiKTplLGNvbnZlcnQ6ITB9LHRydW5jYXRlOnttZXRob2QoZT0hMCl7cmV0dXJuIGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiZW5hYmxlZCBtdXN0IGJlIGEgYm9vbGVhblwiKSx0aGlzLiRfc2V0RmxhZyhcInRydW5jYXRlXCIsZSl9fSx1cHBlcmNhc2U6e21ldGhvZCgpe3JldHVybiB0aGlzLmNhc2UoXCJ1cHBlclwiKX19LHVyaTp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93UmVsYXRpdmVcIixcImFsbG93UXVlcnlTcXVhcmVCcmFja2V0c1wiLFwiZG9tYWluXCIsXCJyZWxhdGl2ZU9ubHlcIixcInNjaGVtZVwiXSksZS5kb21haW4mJmQuYXNzZXJ0T3B0aW9ucyhlLmRvbWFpbixbXCJhbGxvd1VuaWNvZGVcIixcIm1pbkRvbWFpblNlZ21lbnRzXCIsXCJ0bGRzXCJdKTtjb25zdHtyZWdleDp0LHNjaGVtZTpyfT1tLnJlZ2V4KGUpLHM9ZS5kb21haW4/cC5hZGRyZXNzT3B0aW9ucyhlLmRvbWFpbik6bnVsbDtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ1cmlcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnQsZG9tYWluOnMsc2NoZW1lOnJ9KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzLGRvbWFpbjpuLHNjaGVtZTpvfSl7aWYoW1wiaHR0cDovXCIsXCJodHRwczovXCJdLmluY2x1ZGVzKGUpKXJldHVybiB0LmVycm9yKFwic3RyaW5nLnVyaVwiKTtjb25zdCBhPXMuZXhlYyhlKTtpZihhKXtpZihuKXtjb25zdCBlPWFbMV18fGFbMl07aWYoIWkuaXNWYWxpZChlLG4pKXJldHVybiB0LmVycm9yKFwic3RyaW5nLmRvbWFpblwiLHt2YWx1ZTplfSl9cmV0dXJuIGV9cmV0dXJuIHIucmVsYXRpdmVPbmx5P3QuZXJyb3IoXCJzdHJpbmcudXJpUmVsYXRpdmVPbmx5XCIpOnIuc2NoZW1lP3QuZXJyb3IoXCJzdHJpbmcudXJpQ3VzdG9tU2NoZW1lXCIse3NjaGVtZTpvLHZhbHVlOmV9KTp0LmVycm9yKFwic3RyaW5nLnVyaVwiKX19fSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtpZih0LnJlcGxhY2VtZW50cylmb3IoY29uc3R7cGF0dGVybjpyLHJlcGxhY2VtZW50OnN9b2YgdC5yZXBsYWNlbWVudHMpZT1lLnJlcGxhY2UocixzKTtyZXR1cm4gZX19LG1lc3NhZ2VzOntcInN0cmluZy5hbHBoYW51bVwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnNcIixcInN0cmluZy5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzdHJpbmdcIixcInN0cmluZy5iYXNlNjRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGJhc2U2NCBzdHJpbmdcIixcInN0cmluZy5jcmVkaXRDYXJkXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBjcmVkaXQgY2FyZFwiLFwic3RyaW5nLmRhdGFVcmlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGRhdGFVcmkgc3RyaW5nXCIsXCJzdHJpbmcuZG9tYWluXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhIHZhbGlkIGRvbWFpbiBuYW1lXCIsXCJzdHJpbmcuZW1haWxcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGVtYWlsXCIsXCJzdHJpbmcuZW1wdHlcIjpcInt7I2xhYmVsfX0gaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHlcIixcInN0cmluZy5ndWlkXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBHVUlEXCIsXCJzdHJpbmcuaGV4XCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGhleGFkZWNpbWFsIGNoYXJhY3RlcnNcIixcInN0cmluZy5oZXhBbGlnblwiOlwie3sjbGFiZWx9fSBoZXggZGVjb2RlZCByZXByZXNlbnRhdGlvbiBtdXN0IGJlIGJ5dGUgYWxpZ25lZFwiLFwic3RyaW5nLmhvc3RuYW1lXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBob3N0bmFtZVwiLFwic3RyaW5nLmlwXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzIHdpdGggYSB7eyNjaWRyfX0gQ0lEUlwiLFwic3RyaW5nLmlwVmVyc2lvblwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaXAgYWRkcmVzcyBvZiBvbmUgb2YgdGhlIGZvbGxvd2luZyB2ZXJzaW9ucyB7eyN2ZXJzaW9ufX0gd2l0aCBhIHt7I2NpZHJ9fSBDSURSXCIsXCJzdHJpbmcuaXNvRGF0ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGluIGlzbyBmb3JtYXRcIixcInN0cmluZy5pc29EdXJhdGlvblwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgSVNPIDg2MDEgZHVyYXRpb25cIixcInN0cmluZy5sZW5ndGhcIjpcInt7I2xhYmVsfX0gbGVuZ3RoIG11c3QgYmUge3sjbGltaXR9fSBjaGFyYWN0ZXJzIGxvbmdcIixcInN0cmluZy5sb3dlcmNhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXJjYXNlIGNoYXJhY3RlcnNcIixcInN0cmluZy5tYXhcIjpcInt7I2xhYmVsfX0gbGVuZ3RoIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubWluXCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubm9ybWFsaXplXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgdW5pY29kZSBub3JtYWxpemVkIGluIHRoZSB7eyNmb3JtfX0gZm9ybVwiLFwic3RyaW5nLnRva2VuXCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgYW5kIHVuZGVyc2NvcmUgY2hhcmFjdGVyc1wiLFwic3RyaW5nLnBhdHRlcm4uYmFzZVwiOid7eyNsYWJlbH19IHdpdGggdmFsdWUgXCJ7Wy5dfVwiIGZhaWxzIHRvIG1hdGNoIHRoZSByZXF1aXJlZCBwYXR0ZXJuOiB7eyNyZWdleH19JyxcInN0cmluZy5wYXR0ZXJuLm5hbWVcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBmYWlscyB0byBtYXRjaCB0aGUge3sjbmFtZX19IHBhdHRlcm4nLFwic3RyaW5nLnBhdHRlcm4uaW52ZXJ0LmJhc2VcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBtYXRjaGVzIHRoZSBpbnZlcnRlZCBwYXR0ZXJuOiB7eyNyZWdleH19JyxcInN0cmluZy5wYXR0ZXJuLmludmVydC5uYW1lXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgbWF0Y2hlcyB0aGUgaW52ZXJ0ZWQge3sjbmFtZX19IHBhdHRlcm4nLFwic3RyaW5nLnRyaW1cIjpcInt7I2xhYmVsfX0gbXVzdCBub3QgaGF2ZSBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2VcIixcInN0cmluZy51cmlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHVyaVwiLFwic3RyaW5nLnVyaUN1c3RvbVNjaGVtZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgdXJpIHdpdGggYSBzY2hlbWUgbWF0Y2hpbmcgdGhlIHt7I3NjaGVtZX19IHBhdHRlcm5cIixcInN0cmluZy51cmlSZWxhdGl2ZU9ubHlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHJlbGF0aXZlIHVyaVwiLFwic3RyaW5nLnVwcGVyY2FzZVwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiB1cHBlcmNhc2UgY2hhcmFjdGVyc1wifX0pLHAuYWRkcmVzc09wdGlvbnM9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIGU7aWYoYSh2b2lkIDA9PT1lLm1pbkRvbWFpblNlZ21lbnRzfHxOdW1iZXIuaXNTYWZlSW50ZWdlcihlLm1pbkRvbWFpblNlZ21lbnRzKSYmZS5taW5Eb21haW5TZWdtZW50cz4wLFwibWluRG9tYWluU2VnbWVudHMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksITE9PT1lLnRsZHMpcmV0dXJuIGU7aWYoITA9PT1lLnRsZHN8fHZvaWQgMD09PWUudGxkcylyZXR1cm4gYShwLnRsZHMsXCJCdWlsdC1pbiBUTEQgbGlzdCBkaXNhYmxlZFwiKSxPYmplY3QuYXNzaWduKHt9LGUscC50bGRzKTthKFwib2JqZWN0XCI9PXR5cGVvZiBlLnRsZHMsXCJ0bGRzIG11c3QgYmUgdHJ1ZSwgZmFsc2UsIG9yIGFuIG9iamVjdFwiKTtjb25zdCB0PWUudGxkcy5kZW55O2lmKHQpcmV0dXJuIEFycmF5LmlzQXJyYXkodCkmJihlPU9iamVjdC5hc3NpZ24oe30sZSx7dGxkczp7ZGVueTpuZXcgU2V0KHQpfX0pKSxhKGUudGxkcy5kZW55IGluc3RhbmNlb2YgU2V0LFwidGxkcy5kZW55IG11c3QgYmUgYW4gYXJyYXksIFNldCwgb3IgYm9vbGVhblwiKSxhKCFlLnRsZHMuYWxsb3csXCJDYW5ub3Qgc3BlY2lmeSBib3RoIHRsZHMuYWxsb3cgYW5kIHRsZHMuZGVueSBsaXN0c1wiKSxlO2NvbnN0IHI9ZS50bGRzLmFsbG93O3JldHVybiByPyEwPT09cj8oYShwLnRsZHMsXCJCdWlsdC1pbiBUTEQgbGlzdCBkaXNhYmxlZFwiKSxPYmplY3QuYXNzaWduKHt9LGUscC50bGRzKSk6KEFycmF5LmlzQXJyYXkocikmJihlPU9iamVjdC5hc3NpZ24oe30sZSx7dGxkczp7YWxsb3c6bmV3IFNldChyKX19KSksYShlLnRsZHMuYWxsb3cgaW5zdGFuY2VvZiBTZXQsXCJ0bGRzLmFsbG93IG11c3QgYmUgYW4gYXJyYXksIFNldCwgb3IgYm9vbGVhblwiKSxlKTplfSxwLmlzb0RhdGU9ZnVuY3Rpb24oZSl7aWYoIWQuaXNJc29EYXRlKGUpKXJldHVybiBudWxsO2NvbnN0IHQ9bmV3IERhdGUoZSk7cmV0dXJuIGlzTmFOKHQuZ2V0VGltZSgpKT9udWxsOnQudG9JU09TdHJpbmcoKX0scC5sZW5ndGg9ZnVuY3Rpb24oZSx0LHIscyxuKXtyZXR1cm4gYSghbnx8ITEsXCJJbnZhbGlkIGVuY29kaW5nOlwiLG4pLGUuJF9hZGRSdWxlKHtuYW1lOnQsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6cixlbmNvZGluZzpufSxvcGVyYXRvcjpzfSl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDI0KSxuPXIoMjMpLG89cigyNSksYT17bm9uQXNjaWlSeDovW15cXHgwMC1cXHg3Zl0vLGVuY29kZXI6bmV3KHMuVGV4dEVuY29kZXJ8fFRleHRFbmNvZGVyKX07dC5hbmFseXplPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEuZW1haWwoZSx0KX0sdC5pc1ZhbGlkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIWEuZW1haWwoZSx0KX0sYS5lbWFpbD1mdW5jdGlvbihlLHQ9e30pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQ6IGVtYWlsIG11c3QgYmUgYSBzdHJpbmdcIik7aWYoIWUpcmV0dXJuIG8uY29kZShcIkVNUFRZX1NUUklOR1wiKTtjb25zdCByPSFhLm5vbkFzY2lpUngudGVzdChlKTtpZighcil7aWYoITE9PT10LmFsbG93VW5pY29kZSlyZXR1cm4gby5jb2RlKFwiRk9SQklEREVOX1VOSUNPREVcIik7ZT1lLm5vcm1hbGl6ZShcIk5GQ1wiKX1jb25zdCBzPWUuc3BsaXQoXCJAXCIpO2lmKDIhPT1zLmxlbmd0aClyZXR1cm4gcy5sZW5ndGg+Mj9vLmNvZGUoXCJNVUxUSVBMRV9BVF9DSEFSXCIpOm8uY29kZShcIk1JU1NJTkdfQVRfQ0hBUlwiKTtjb25zdFtpLGxdPXM7aWYoIWkpcmV0dXJuIG8uY29kZShcIkVNUFRZX0xPQ0FMXCIpO2lmKCF0Lmlnbm9yZUxlbmd0aCl7aWYoZS5sZW5ndGg+MjU0KXJldHVybiBvLmNvZGUoXCJBRERSRVNTX1RPT19MT05HXCIpO2lmKGEuZW5jb2Rlci5lbmNvZGUoaSkubGVuZ3RoPjY0KXJldHVybiBvLmNvZGUoXCJMT0NBTF9UT09fTE9OR1wiKX1yZXR1cm4gYS5sb2NhbChpLHIpfHxuLmFuYWx5emUobCx0KX0sYS5sb2NhbD1mdW5jdGlvbihlLHQpe2NvbnN0IHI9ZS5zcGxpdChcIi5cIik7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoIWUubGVuZ3RoKXJldHVybiBvLmNvZGUoXCJFTVBUWV9MT0NBTF9TRUdNRU5UXCIpO2lmKHQpe2lmKCFhLmF0ZXh0UngudGVzdChlKSlyZXR1cm4gby5jb2RlKFwiSU5WQUxJRF9MT0NBTF9DSEFSU1wiKX1lbHNlIGZvcihjb25zdCB0IG9mIGUpe2lmKGEuYXRleHRSeC50ZXN0KHQpKWNvbnRpbnVlO2NvbnN0IGU9YS5iaW5hcnkodCk7aWYoIWEuYXRvbVJ4LnRlc3QoZSkpcmV0dXJuIG8uY29kZShcIklOVkFMSURfTE9DQUxfQ0hBUlNcIil9fX0sYS5iaW5hcnk9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmZyb20oYS5lbmNvZGVyLmVuY29kZShlKSkubWFwKGU9PlN0cmluZy5mcm9tQ2hhckNvZGUoZSkpLmpvaW4oXCJcIil9LGEuYXRleHRSeD0vXltcXHchI1xcJCUmJ1xcKlxcK1xcLS89XFw/XFxeYFxce1xcfFxcfX5dKyQvLGEuYXRvbVJ4PW5ldyBSZWdFeHAoW1wiKD86W1xcXFx4YzItXFxcXHhkZl1bXFxcXHg4MC1cXFxceGJmXSlcIixcIig/OlxcXFx4ZTBbXFxcXHhhMC1cXFxceGJmXVtcXFxceDgwLVxcXFx4YmZdKXwoPzpbXFxcXHhlMS1cXFxceGVjXVtcXFxceDgwLVxcXFx4YmZdezJ9KXwoPzpcXFxceGVkW1xcXFx4ODAtXFxcXHg5Zl1bXFxcXHg4MC1cXFxceGJmXSl8KD86W1xcXFx4ZWUtXFxcXHhlZl1bXFxcXHg4MC1cXFxceGJmXXsyfSlcIixcIig/OlxcXFx4ZjBbXFxcXHg5MC1cXFxceGJmXVtcXFxceDgwLVxcXFx4YmZdezJ9KXwoPzpbXFxcXHhmMS1cXFxceGYzXVtcXFxceDgwLVxcXFx4YmZdezN9KXwoPzpcXFxceGY0W1xcXFx4ODAtXFxcXHg4Zl1bXFxcXHg4MC1cXFxceGJmXXsyfSlcIl0uam9pbihcInxcIikpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyNik7dC5yZWdleD1mdW5jdGlvbihlPXt9KXtzKHZvaWQgMD09PWUuY2lkcnx8XCJzdHJpbmdcIj09dHlwZW9mIGUuY2lkcixcIm9wdGlvbnMuY2lkciBtdXN0IGJlIGEgc3RyaW5nXCIpO2NvbnN0IHQ9ZS5jaWRyP2UuY2lkci50b0xvd2VyQ2FzZSgpOlwib3B0aW9uYWxcIjtzKFtcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCJdLmluY2x1ZGVzKHQpLFwib3B0aW9ucy5jaWRyIG11c3QgYmUgb25lIG9mIHJlcXVpcmVkLCBvcHRpb25hbCwgZm9yYmlkZGVuXCIpLHModm9pZCAwPT09ZS52ZXJzaW9ufHxcInN0cmluZ1wiPT10eXBlb2YgZS52ZXJzaW9ufHxBcnJheS5pc0FycmF5KGUudmVyc2lvbiksXCJvcHRpb25zLnZlcnNpb24gbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdcIik7bGV0IHI9ZS52ZXJzaW9ufHxbXCJpcHY0XCIsXCJpcHY2XCIsXCJpcHZmdXR1cmVcIl07QXJyYXkuaXNBcnJheShyKXx8KHI9W3JdKSxzKHIubGVuZ3RoPj0xLFwib3B0aW9ucy52ZXJzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCAxIHZlcnNpb24gc3BlY2lmaWVkXCIpO2ZvcihsZXQgZT0wO2U8ci5sZW5ndGg7KytlKXMoXCJzdHJpbmdcIj09dHlwZW9mIHJbZV0sXCJvcHRpb25zLnZlcnNpb24gbXVzdCBvbmx5IGNvbnRhaW4gc3RyaW5nc1wiKSxyW2VdPXJbZV0udG9Mb3dlckNhc2UoKSxzKFtcImlwdjRcIixcImlwdjZcIixcImlwdmZ1dHVyZVwiXS5pbmNsdWRlcyhyW2VdKSxcIm9wdGlvbnMudmVyc2lvbiBjb250YWlucyB1bmtub3duIHZlcnNpb24gXCIrcltlXStcIiAtIG11c3QgYmUgb25lIG9mIGlwdjQsIGlwdjYsIGlwdmZ1dHVyZVwiKTtyPUFycmF5LmZyb20obmV3IFNldChyKSk7Y29uc3Qgbz1yLm1hcChlPT57aWYoXCJmb3JiaWRkZW5cIj09PXQpcmV0dXJuIG4uaXBbZV07Y29uc3Qgcj1cIlxcXFwvXCIuY29uY2F0KFwiaXB2NFwiPT09ZT9uLmlwLnY0Q2lkcjpuLmlwLnY2Q2lkcik7cmV0dXJuXCJyZXF1aXJlZFwiPT09dD9cIlwiLmNvbmNhdChuLmlwW2VdKS5jb25jYXQocik6XCJcIi5jb25jYXQobi5pcFtlXSxcIig/OlwiKS5jb25jYXQocixcIik/XCIpfSksYT1cIig/OlwiLmNvbmNhdChvLmpvaW4oXCJ8XCIpLFwiKVwiKSxpPW5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGEsXCIkXCIpKTtyZXR1cm57Y2lkcjp0LHZlcnNpb25zOnIscmVnZXg6aSxyYXc6YX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz17fTtvLk1hcD1jbGFzcyBleHRlbmRzIE1hcHtzbGljZSgpe3JldHVybiBuZXcgby5NYXAodGhpcyl9fSxlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJzeW1ib2xcIix0ZXJtczp7bWFwOntpbml0Om5ldyBvLk1hcH19LGNvZXJjZTp7bWV0aG9kKGUse3NjaGVtYTp0LGVycm9yOnJ9KXtjb25zdCBzPXQuJF90ZXJtcy5tYXAuZ2V0KGUpO3JldHVybiBzJiYoZT1zKSx0Ll9mbGFncy5vbmx5JiZcInN5bWJvbFwiIT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6cihcInN5bWJvbC5tYXBcIix7bWFwOnQuJF90ZXJtcy5tYXB9KX06e3ZhbHVlOmV9fX0sdmFsaWRhdGUoZSx7ZXJyb3I6dH0pe2lmKFwic3ltYm9sXCIhPXR5cGVvZiBlKXJldHVybnt2YWx1ZTplLGVycm9yczp0KFwic3ltYm9sLmJhc2VcIil9fSxydWxlczp7bWFwOnttZXRob2QoZSl7ZSYmIWVbU3ltYm9sLml0ZXJhdG9yXSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJihlPU9iamVjdC5lbnRyaWVzKGUpKSxzKGUmJmVbU3ltYm9sLml0ZXJhdG9yXSxcIkl0ZXJhYmxlIG11c3QgYmUgYW4gaXRlcmFibGUgb3Igb2JqZWN0XCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpLHI9W107Zm9yKGNvbnN0IG4gb2YgZSl7cyhuJiZuW1N5bWJvbC5pdGVyYXRvcl0sXCJFbnRyeSBtdXN0IGJlIGFuIGl0ZXJhYmxlXCIpO2NvbnN0W2Usb109bjtzKFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZcInN5bWJvbFwiIT10eXBlb2YgZSxcIktleSBtdXN0IG5vdCBiZSBvZiB0eXBlIG9iamVjdCwgZnVuY3Rpb24sIG9yIFN5bWJvbFwiKSxzKFwic3ltYm9sXCI9PXR5cGVvZiBvLFwiVmFsdWUgbXVzdCBiZSBhIFN5bWJvbFwiKSx0LiRfdGVybXMubWFwLnNldChlLG8pLHIucHVzaChvKX1yZXR1cm4gdC52YWxpZCguLi5yKX19fSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0Lm1hcCYmKGU9ZS5tYXAodC5tYXApKSxlKX0sbWVzc2FnZXM6e1wic3ltYm9sLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHN5bWJvbFwiLFwic3ltYm9sLm1hcFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9uZSBvZiB7eyNtYXB9fVwifX0pfV0pfSkpOyIsImltcG9ydCB7IEdyaWdhIH0gZnJvbSBcIi4uL2dyaWdhL2dyaWdhXCI7XHJcbmltcG9ydCB7IEVkaXRvciwgZWRpdG9ySGVscCB9IGZyb20gXCIuL2VkaXRvclwiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kVGlsZSB9IGZyb20gXCIuL2VudGl0aWVzL2JhY2tncm91bmRfdGlsZVwiO1xyXG5pbXBvcnQgeyBHaG9zdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ2hvc3R5XCI7XHJcbmltcG9ydCB7IEdvYWwgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ29hbFwiO1xyXG5pbXBvcnQgeyBTdG9uZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9zdG9uZVwiO1xyXG5pbXBvcnQgeyBXb29kZW5Cb3ggfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvd29vZGVuX2JveFwiO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25CYWNrZ3JvdW5kIH0gZnJvbSBcIi4vZW50aXRpZXMvc2VsZWN0aW9uX2JhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgTGV2ZWxzLCBsZXZlbHNIZWxwIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XHJcbmltcG9ydCB7IFBsYXksIHBsYXlIZWxwIH0gZnJvbSBcIi4vcGxheVwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgSG9sZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlXCI7XHJcbmltcG9ydCB7IEhvbGVCb3JkZXIgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvaG9sZV9ib3JkZXJcIjtcclxuaW1wb3J0IHsgSG9tZSwgaG9tZUhlbHAgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuaW1wb3J0IHsgRGlhbW9uZFN0b25lIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2RpYW1vbmRfc3RvbmVcIjtcclxuaW1wb3J0IHsgRGlhbW9uZFByZXNzdXJlUGxhdGUgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZGlhbW9uZF9wcmVzc3VyZV9wbGF0ZVwiO1xyXG5cclxuY29uc3QgQ1MgPSAxNjtcclxuY29uc3QgUlMgPSAxMDtcclxuXHJcbmNvbnN0IGdyaWdhQ29uZmlnID0ge1xyXG4gIGRpc3BsYXlzOltcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3BsYXknLFxyXG4gICAgICB3cmFwcGVySWQ6ICdwbGF5LWRpc3BsYXknLFxyXG4gICAgICB3aWR0aEhlaWdodFJhdGlvOiBDUy9SUyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdlZGl0b3InLFxyXG4gICAgICB3cmFwcGVySWQ6ICdlZGl0b3ItZGlzcGxheScsXHJcbiAgICAgIHdpZHRoSGVpZ2h0UmF0aW86IENTL1JTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NlbGVjdGlvbicsXHJcbiAgICAgIHdyYXBwZXJJZDogJ3NlbGVjdGlvbi1kaXNwbGF5JyxcclxuICAgICAgd2lkdGhIZWlnaHRSYXRpbzogMTAvMVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZ3JpZHM6W1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAncGxheScsXHJcbiAgICAgIGNvbHVtbnM6IENTLFxyXG4gICAgICByb3dzOiBSUyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdlZGl0b3InLFxyXG4gICAgICBjb2x1bW5zOiBDUyxcclxuICAgICAgcm93czogUlMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2VsZWN0aW9uLWhvdGJhcicsXHJcbiAgICAgIGNvbHVtbnM6IDEwLFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3ByZXZpZXcnLFxyXG4gICAgICBjb2x1bW5zOiBDUyxcclxuICAgICAgcm93czogUlNcclxuICAgIH1cclxuICBdLFxyXG4gIGVudGl0aWVzOltCYWNrZ3JvdW5kVGlsZSwgU2VsZWN0aW9uQmFja2dyb3VuZCwgU3RvbmUsIEdob3N0eSwgR29hbCwgV29vZGVuQm94LCBIb2xlLCBIb2xlQm9yZGVyLCBEaWFtb25kU3RvbmUsIERpYW1vbmRQcmVzc3VyZVBsYXRlXSxcclxufVxyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRpbGVTY2VuZSA9IHtcImRldGFjaGVkXCI6W10sXCJ0aWxlc1wiOltbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV1dfVxyXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcclxuICAgIHRoaXMuaG9tZV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24nKTtcclxuICAgIHRoaXMucGxheV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTtcclxuICAgIHRoaXMubGV2ZWxzX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLmVkaXRvcl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5oZWxwX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5jb250ZW50X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICB0aGlzLmhvbWVfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtc2NyZWVuJyk7XHJcbiAgICB0aGlzLnBsYXlfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktc2NyZWVuJyk7XHJcbiAgICB0aGlzLmVkaXRvcl9zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLXNjcmVlbicpO1xyXG4gICAgdGhpcy5sZXZlbHNfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVscy1zY3JlZW4nKTtcclxuICAgIHRoaXMuc3RhdGUgPSAnaG9tZSc7XHJcbiAgICB0aGlzLnZlcnNpb24gPSAnMS4wLjEnO1xyXG4gICAgdGhpcy5oZWxwQm9vayA9IHtcclxuICAgICAgaG9tZTogaG9tZUhlbHAsXHJcbiAgICAgIHBsYXk6IHBsYXlIZWxwLFxyXG4gICAgICBsZXZlbHM6IGxldmVsc0hlbHAsXHJcbiAgICAgIGVkaXRvcjogZWRpdG9ySGVscFxyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5U2V0dGluZ3MgPSB7Y29sdW1uc09uU2NyZWVuOiBDUywgcm93c09uU2NyZWVuOiBSU307XHJcbiAgICB0aGlzLnN0eWxlID0gbmV3IFN0eWxlKCB0aGlzICk7XHJcbiAgICB0aGlzLmdyaWdhID0gbmV3IEdyaWdhKCBncmlnYUNvbmZpZywgZ3JpZ2EgPT4gdGhpcy5zdGFydEdhbWUoIGdyaWdhICkgKTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSggdGhpcyApO1xyXG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoIHRoaXMgKTtcclxuICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVscyggdGhpcyApO1xyXG4gICAgdGhpcy5wbGF5ID0gbmV3IFBsYXkoIHRoaXMsIHRoaXMuZ3JpZ2EgKTtcclxuICAgIHRoaXMuZWRpdG9yID0gbmV3IEVkaXRvciggdGhpcywgdGhpcy5ncmlnYSApO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUoIGdyaWdhICl7XHJcbiAgICBncmlnYS5naG9zdHkgPSB0aGlzO1xyXG4gICAgdGhpcy5wbGF5LnN0YXJ0R2FtZSgpO1xyXG4gICAgdGhpcy5ob21lLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBlbmRBY3RpdmVTdGF0ZSgpe1xyXG4gICAgdGhpc1t0aGlzLnN0YXRlXS5lbmQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5leHRIZWxwUG9wdXBDbGljaygpe1xyXG4gICAgdGhpc1t0aGlzLnN0YXRlXS5jbG9zZVBvcHVwKCk7XHJcbiAgICB0aGlzLmhhbmRsZUhlbHBCdXR0b25DbGljayggKyt0aGlzLmhlbHBQYWdlSW5kZXgldGhpcy5oZWxwQm9va1t0aGlzLnN0YXRlXVt0aGlzLmhlbHBMYW5ndWFnZV0ubGVuZ3RoLCB0aGlzLmhlbHBMYW5ndWFnZSApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSGVscEJ1dHRvbkNsaWNrKCBpbmRleCA9IDAsIGxhbmd1YWdlID0gdGhpcy5oZWxwTGFuZ3VhZ2UgKXtcclxuICAgIHRoaXMuaGVscFBhZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5oZWxwTGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCAnZW5nbGlzaCdcclxuICAgIGlmICh0aGlzW3RoaXMuc3RhdGVdLnBvcHVwKSB7IHRoaXNbdGhpcy5zdGF0ZV0uY2xvc2VQb3B1cCgpIH07XHJcbiAgICB0aGlzW3RoaXMuc3RhdGVdLnBvcHVwID0gbmV3IFBvcHVwKFxyXG4gICAgICAnd3JhcHBlcicsXHJcbiAgICAgIGBHaG9zdHkgSGVscDogJHt0aGlzLnN0YXRlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3RoaXMuc3RhdGUuc2xpY2UoMSl9YCxcclxuICAgICAgW1xyXG4gICAgICAgIHtpZDogJ3BvcHVwLWNsb3NlJywgdGV4dDogJ0Nsb3NlJywgY2xpY2s6IGlWID0+IHRoaXNbdGhpcy5zdGF0ZV0uY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAge2lkOiAnbmV4dC1oZWxwLXBvcHVwJywgdGV4dDogJ05leHQnLCBjbGljazogaVYgPT4gdGhpcy5oYW5kbGVOZXh0SGVscFBvcHVwQ2xpY2soIGlWICl9XHJcbiAgICAgIF0sIFtdLFxyXG4gICAgICB0aGlzLmhlbHBCb29rW3RoaXMuc3RhdGVdW3RoaXMuaGVscExhbmd1YWdlXVt0aGlzLmhlbHBQYWdlSW5kZXhdLmgzLFxyXG4gICAgICB0aGlzLmhlbHBCb29rW3RoaXMuc3RhdGVdW3RoaXMuaGVscExhbmd1YWdlXVt0aGlzLmhlbHBQYWdlSW5kZXhdLnBcclxuICAgICkgO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSG9tZUJ1dHRvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICB0aGlzLmhvbWUuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYXlCdXR0b25DbGljaygpe1xyXG4gICAgdGhpcy5lbmRBY3RpdmVTdGF0ZSgpO1xyXG4gICAgdGhpcy5wbGF5LnN0YXJ0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUVkaXRvckJ1dHRvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICB0aGlzLmVkaXRvci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxzQnV0dG9uQ2xpY2soKXtcclxuICAgIHRoaXMuZW5kQWN0aXZlU3RhdGUoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncGxheScpIHtcclxuICAgICAgdGhpcy5sZXZlbHMuc3RhcnQodGhpcy5wbGF5LmNhdGVnb3J5LCB0aGlzLnBsYXkubGV2ZWxJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdlZGl0b3InKSB7XHJcbiAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KHRoaXMuZWRpdG9yLmNhdGVnb3J5LCB0aGlzLmVkaXRvci5sZXZlbEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KCdjbGFzc2ljJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUNvbnRlbnREaXZDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdob21lJykge1xyXG4gICAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICAgIHRoaXMucGxheS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgdGhpcy5ob21lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVIb21lQnV0dG9uQ2xpY2soKSk7XHJcbiAgICB0aGlzLnBsYXlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMuZWRpdG9yX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVFZGl0b3JCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMubGV2ZWxzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVMZXZlbHNCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMuaGVscF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlSGVscEJ1dHRvbkNsaWNrKCkpO1xyXG4gICAgdGhpcy5jb250ZW50X2Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVDb250ZW50RGl2Q2xpY2soKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7bmV3IEFwcCgpfSApOyIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoIGFwcCwgZ3JpZ2EgKXtcclxuICAgICAgICB0aGlzLmhvdGJhcl9zY2VuZV9kYXRhID0ge1wiZGV0YWNoZWRcIjpbXSxcInRpbGVzXCI6W1tbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dXX1cclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLmdyaWdhID0gZ3JpZ2E7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZ2EuZ3JpZHNbJ2VkaXRvciddO1xyXG4gICAgICAgIHRoaXMuaG90YmFyX2dyaWQgPSBncmlnYS5ncmlkc1snc2VsZWN0aW9uLWhvdGJhciddO1xyXG4gICAgICAgIHRoaXMubG93ZXJfYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd2VyLWJhcicpO1xyXG4gICAgICAgIHRoaXMubmV3X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItbmV3LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLXNhdmUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy50ZXN0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItdGVzdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmxldmVsX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWxldmVsLW5hbWUnKTtcclxuICAgICAgICB0aGlzLnJlbmFtZV9idXR0b249IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItcmVuYW1lLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzWydwcmVzZXRzJ11bMF07XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdwcmVzZXRzJztcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbiggdGhpcywgdGhpcy5ob3RiYXJfZ3JpZCApO1xyXG4gICAgICAgIHRoaXMuaG90YmFyRGlzcGxheVNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjb2x1bW5zT25TY3JlZW46IHRoaXMuaG90YmFyX2dyaWQuY29sdW1ucyxcclxuICAgICAgICAgICAgcm93c09uU2NyZWVuOiB0aGlzLmhvdGJhcl9ncmlkLnJvd3MsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTZWxlY3Rpb25Ib3RiYXIoKXtcclxuICAgICAgICB0aGlzLmhvdGJhcl9ncmlkLmxvYWRTY2VuZSggdGhpcy5ob3RiYXJfc2NlbmVfZGF0YSApO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ3JpZ2EuZW50aXRpZXMpLmZpbHRlciggZW50aXR5TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhWydTZWxlY3Rpb25CYWNrZ3JvdW5kJywgJ0JhY2tncm91bmRUaWxlJ10uaW5jbHVkZXMoIGVudGl0eU5hbWUgKTtcclxuICAgICAgICB9ICkuZmlsdGVyKCBlTmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVubG9ja0xldmVsID0gdGhpcy5ncmlnYS5lbnRpdGllc1tlTmFtZV0uZ2V0VW5sb2NrTGV2ZWwoIHRoaXMuYXBwLmxldmVscy5sZXZlbHNbJ2NsYXNzaWMnXSApO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5sb2NrTGV2ZWwgPCB0aGlzLmFwcC5sZXZlbHMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4O1xyXG4gICAgICAgIH0gKS5mb3JFYWNoKCAoZW50aXR5TmFtZSwgaSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhvdGJhcl9ncmlkLm5ld0VudGl0eUluc3RhbmNlKGVudGl0eU5hbWUsIHt9LCB7YzppLHI6MH0pO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNlbGVjdGlvbkhvdGJhcigpe1xyXG4gICAgICAgIHRoaXMuaG90YmFyX2dyaWQuY2xlYXJTY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCBsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXggKXtcclxuICAgICAgICB0aGlzLmFwcC5lZGl0b3JfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvcl9zY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9ICdlZGl0b3InO1xyXG4gICAgICAgIHRoaXMuYXBwLnN0YXRlID0gJ2VkaXRvcic7XHJcbiAgICAgICAgdGhpcy5sb2FkU2VsZWN0aW9uSG90YmFyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uYWN0aXZhdGVGaXJzdFNlbGVjdGlvbkJhY2tncm91bmQoKTtcclxuICAgICAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCdlZGl0b3InLCAnZWRpdG9yJywgdGhpcy5hcHAuZGlzcGxheVNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCdzZWxlY3Rpb24nLCAnc2VsZWN0aW9uLWhvdGJhcicsIHRoaXMuaG90YmFyRGlzcGxheVNldHRpbmdzKTtcclxuICAgICAgICB0aGlzLmxvYWRMZXZlbCggbGV2ZWwsIGNhdGVnb3J5LCBsZXZlbEluZGV4ICk7XHJcbiAgICAgICAgdGhpcy5hcHAuc3R5bGUucmVzaXplV3JhcHBlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVzaXplRGlzcGxheXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwoIGxldmVsID0gdGhpcy5sZXZlbCwgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LCBsZXZlbEluZGV4ID0gdGhpcy5sZXZlbEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSBsZXZlbEluZGV4O1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMuYXBwLmJhY2tncm91bmRUaWxlU2NlbmUgKTtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLmxldmVsLnNjZW5lRGF0YSApO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeSA9PT0gJ3ByZXNldHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfbmFtZS5pbm5lckhUTUwgPSB0aGlzLmxldmVsLm5hbWUgKyAnIDxpPi0tcHJlc2V0PC9pPic7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdF9idXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuYW1lX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsX25hbWUuaW5uZXJIVE1MID0gdGhpcy5sZXZlbC5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmFtZV9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMudGVzdF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyU2NlbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmQoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkgeyB0aGlzLmNsb3NlUG9wdXAoKSB9O1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVtb3ZlR3JpZEZyb21EaXNwbGF5KHRoaXMuc3RhdGUsICdlZGl0b3InKTtcclxuICAgICAgICB0aGlzLmdyaWdhLnJlbW92ZUdyaWRGcm9tRGlzcGxheSgnc2VsZWN0aW9uLWhvdGJhcicsICdzZWxlY3Rpb24nKTtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uSG90YmFyKCk7XHJcbiAgICAgICAgdGhpcy5hcHAuZWRpdG9yX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmFwcC5lZGl0b3Jfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjZW5lQ2hhbmdlZEhhbmRsZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuc2NlbmVEYXRhID0gdGhpcy5ncmlkLmdldEN1cnJlbnRTY2VuZURhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5hcHAubGV2ZWxzLnVwZGF0ZUxldmVsKCB0aGlzLmxldmVsSW5kZXggKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2F0ZWdvcnkgPT09ICdwcmVzZXRzJyl7XHJcbiAgICAgICAgICAgIGNvbnN0IFtsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXhdID0gdGhpcy5zYXZlU2NlbmVEYXRhQXNOZXdMZXZlbCggdGhpcy5sZXZlbC5uYW1lLCAndW5rbm93bicsICd1bmtub3duJyApO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYXZlU2NlbmVEYXRhQXNOZXdMZXZlbCggbGV2ZWxOYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yICl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmxldmVscy5uZXdMZXZlbChsZXZlbE5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIFxyXG4gICAgICAgICAgICB0aGlzLmdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2F2ZUFzTmV3TGV2ZWxQb3B1cCgpe1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoICdlZGl0b3ItZGlzcGxheScsICc8aSBjbGFzcz1cImZhcyBmYS1jbG9uZVwiPjwvaT4gU2F2ZSBhIGNvcHkgYXM6JyxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtpZDogJ3BvcHVwLWJhY2snLCB0ZXh0OiAnQmFjaycsIGNsaWNrOiBpViA9PiB0aGlzLmNsb3NlUG9wdXAoIGlWICl9LFxyXG4gICAgICAgICAgICB7aWQ6ICdzYXZlLXBvcHVwLXNhdmUnLCB0ZXh0OiAnU2F2ZScsIGNsaWNrOiBpViA9PiB0aGlzLmhhbmRsZVBvcHVwU2F2ZU5ld0NsaWNrKCBpViApfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7bmFtZTogJ2xldmVsLW5hbWUnLCBsYWJlbDogJ05hbWU6JywgcGxhY2Vob2xkZXI6ICd1bm5hbWVkJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnbGV2ZWwtZGlmZmljdWx0eScsIGxhYmVsOiAnRGlmZmljdWx0eTonLCBwbGFjZWhvbGRlcjogJ2Vhc3knfSxcclxuICAgICAgICAgICAge25hbWU6ICdsZXZlbC1jcmVhdG9yJywgbGFiZWw6ICdDcmVhdG9yOicsIHBsYWNlaG9sZGVyOiAnWW91J31cclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUG9wdXBTYXZlTmV3Q2xpY2soIGlWICl7XHJcbiAgICAgICAgdGhpcy5zYXZlU2NlbmVEYXRhQXNOZXdMZXZlbChcclxuICAgICAgICAgICAgaVZbJ2xldmVsLW5hbWUnXSxcclxuICAgICAgICAgICAgaVZbJ2xldmVsLWRpZmZpY3VsdHknXSxcclxuICAgICAgICAgICAgaVZbJ2xldmVsLWNyZWF0b3InXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUG9wdXBSZW5hbWVDbGljayggaVYgKXtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMucmVuYW1lTGV2ZWwoXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxJbmRleCxcclxuICAgICAgICAgICAgaVZbJ2xldmVsLW5hbWUnXSxcclxuICAgICAgICAgICAgaVZbJ2xldmVsLWRpZmZpY3VsdHknXSxcclxuICAgICAgICAgICAgaVZbJ2xldmVsLWNyZWF0b3InXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jbGVhckxldmVsKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRMZXZlbEF0UG9wdXBDbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWxBdFBvcHVwQ2xvc2UgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2hUb0xldmVscygpe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHAubGV2ZWxzLnN0YXJ0KCB0aGlzLmNhdGVnb3J5LCB0aGlzLmxldmVsSW5kZXggKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTYXZlQnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkgeyB0aGlzLmNsb3NlUG9wdXAoKSB9O1xyXG4gICAgICAgIHRoaXMuc2hvd1NhdmVBc05ld0xldmVsUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMZXZlbE5hbWVDbGljayggZSApe1xyXG4gICAgICAgIHRoaXMuc3dpdGNoVG9MZXZlbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUZXN0QnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwLnBsYXkuc3RhcnQoIHRoaXMubGV2ZWwsIHRoaXMuY2F0ZWdvcnksIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5ld0J1dHRvbkNsaWNrKCBlICl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMuc3RhcnQoICdwcmVzZXRzJyApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVJlbmFtZUJ1dHRvbkNsaWNrKCBlICl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHsgdGhpcy5jbG9zZVBvcHVwKCkgfTtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3ByZXNldHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NhdmVBc05ld0xldmVsUG9wdXAoKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGV2ZWxBdFBvcHVwQ2xvc2UgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoICdlZGl0b3ItZGlzcGxheScsIGA8aSBjbGFzcz1cImZhcyBmYS1pLWN1cnNvclwiPjwvaT4gUmVuYW1lIGxldmVsIHRvOmAsXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHtpZDogJ3BvcHVwLWJhY2snLCB0ZXh0OiAnQmFjaycsIGNsaWNrOiBpViA9PiB0aGlzLmNsb3NlUG9wdXAoIGlWICl9LFxyXG4gICAgICAgICAgICAgICAge2lkOiAncmVuYW1lLXBvcHVwLXJlbmFtZScsIHRleHQ6ICdTYXZlJywgY2xpY2s6IGlWID0+IHRoaXMuaGFuZGxlUG9wdXBSZW5hbWVDbGljayggaVYgKX1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge25hbWU6ICdsZXZlbC1uYW1lJywgbGFiZWw6ICdOYW1lOicsIHBsYWNlaG9sZGVyOiB0aGlzLmxldmVsLm5hbWV9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdsZXZlbC1kaWZmaWN1bHR5JywgbGFiZWw6ICdEaWZmaWN1bHR5OicsIHBsYWNlaG9sZGVyOiB0aGlzLmxldmVsLmRpZmZpY3VsdHl9LFxyXG4gICAgICAgICAgICAgICAge25hbWU6ICdsZXZlbC1jcmVhdG9yJywgbGFiZWw6ICdDcmVhdG9yOicsIHBsYWNlaG9sZGVyOiB0aGlzLmxldmVsLmNyZWF0b3J9XHJcbiAgICAgICAgICAgIF0gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgICAgIHRoaXMubmV3X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVOZXdCdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnNhdmVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVNhdmVCdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnRlc3RfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVRlc3RCdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLmxldmVsX25hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlTGV2ZWxOYW1lQ2xpY2soIGUgKSk7XHJcbiAgICAgICAgdGhpcy5yZW5hbWVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVJlbmFtZUJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTZWxlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoIGVkaXRvciwgaG90YmFyICl7XHJcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBlZGl0b3I7XHJcbiAgICAgICAgdGhpcy5ob3RiYXIgPSBob3RiYXI7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZUZpcnN0U2VsZWN0aW9uQmFja2dyb3VuZCgpIHtcclxuICAgICAgICB0aGlzLmhvdGJhci5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgICAgICAgdGlsZToge2M6MCwgcjowfSxcclxuICAgICAgICAgICAgdHlwZTogJ1NlbGVjdGlvbkJhY2tncm91bmQnXHJcbiAgICAgICAgfSApWzBdLm1vdXNlRG93bkhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kKCBzZWxlY3Rpb25CYWNrZ3JvdW5kICl7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdGlvbkJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgc2VsZWN0aW9uQmFja2dyb3VuZC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRW50aXR5ID0gc2VsZWN0aW9uQmFja2dyb3VuZC5vdGhlckVudGl0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kID0gc2VsZWN0aW9uQmFja2dyb3VuZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRvckhlbHAgPSB7XHJcbiAgICBlbmdsaXNoOiBcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnUGxhY2UgRW50aXRpZXM6JyxcclxuICAgICAgICAgICAgcDogJ1NlbGVjdCB0aGUgZW50aXR5IGluIHRoZSBzZWxlY3Rpb24gYmFyLCB0aGVuIGNsaWNrIChvciBob2xkIGFuZCBkcmFnKSB0byBwbGFjZSBpdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdEZWxldGUgRW50aXRpZXM6JyxcclxuICAgICAgICAgICAgcDogJ1NlbGVjdCB0aGUgZW50aXR5IGluIHRoZSBzZWxlY3Rpb24gYmFyLCB0aGVuIHByZXNzIGN0cmwgYW5kIGNsaWNrIChvciBob2xkIGFuZCBkcmFnKSB0byBkZWxldGUgdGhlIGVudGl0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdTYXZlOicsXHJcbiAgICAgICAgICAgIHA6ICdBbGwgY2hhbmdlcyBhcmUgYXV0b21hdGljYWxseSBzYXZlZC4gUHJlc3MgdGhlIDxpIGNsYXNzPVwiZmFzIGZhLWNsb25lXCI+PC9pPiBpY29uIHRvIGR1cGxpY2F0ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgTGV2ZWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnUmVuYW1lOicsXHJcbiAgICAgICAgICAgIHA6ICdQcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtaS1jdXJzb3JcIj48L2k+IGljb24gdG8gcmVuYW1lIHRoZSBsZXZlbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdOZXcgTGV2ZWw6JyxcclxuICAgICAgICAgICAgcDogJ1RvIHN0YXJ0IGNyZWF0aW5nIGEgbmV3IGxldmVsLCBwcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4gaWNvbiBhbmQgY2hvb3NlIGEgcHJlc2V0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ1VubG9jayBuZXcgZW50aXRpZXM6JyxcclxuICAgICAgICAgICAgcDogJ1Byb2dyZXNzIGluIHRoZSBjbGFzc2ljIGxldmVscyB0byB1bmxvY2sgbmV3IGVudGl0aWVzIGluIHRoZSBlZGl0b3InXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFRpbGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCB7XHJcbiAgICAgIHdpZHRoOiAwLjI1LFxyXG4gICAgICBoZWlnaHQ6IDAuMjUsXHJcbiAgICAgIGNPZmZzZXQ6IE1hdGgucmFuZG9tKCkqMy80LFxyXG4gICAgICByT2Zmc2V0OiBNYXRoLnJhbmRvbSgpKjMvNCxcclxuICAgICAgc2NlbmVMb2FkZWRTdWJzY3JpcHRpb246IHRydWUsXHJcbiAgICB9LCBhcmdzICk7XHJcbiAgICBpZiAodGhpcy5ncmlkLm5hbWUgPT09ICdlZGl0b3InKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Nb3VzZURvd24oJ2VkaXRvcicpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvTW91c2VFbnRlcignZWRpdG9yJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnR5cGUgPSBwYXJhbXMudHlwZSB8fCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCk7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdwJyArIHRoaXMudHlwZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgcDA6ICcuL3RpbGVfaW1nL3JlZF9mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHAxOiAnLi90aWxlX2ltZy9vcmFuZ2VfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwMjogJy4vdGlsZV9pbWcvdHVycXVvaXNlX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDM6ICcuL3RpbGVfaW1nL2xpZ2h0X2JsdWVfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwNDogJy4vdGlsZV9pbWcvZGFya19ibHVlX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDU6ICcuL3RpbGVfaW1nL3llbGxvd19mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHA2OiAnLi90aWxlX2ltZy9waW5rX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDc6ICcuL3RpbGVfaW1nL3B1cnBsZV9mbG93ZXIuanBnJyx9O1xyXG4gIH1cclxuXHJcbiAgbGV0RW50aXRpZXNGYWxsRG93bihqdW1wID0gdHJ1ZSl7IC8vbGV0cyBhbGwgZW50aXRpZXMgZmFsbCBkb3duIChub3QganVzdCBzb2xpZClcclxuICAgIGxldCBlbnRpdGllc09uVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn1cclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQmFja2dyb3VuZFRpbGUnICk7XHJcbiAgICBsZXQgZmxvb3JMYXllciA9IDEwO1xyXG4gICAgaWYgKCBlbnRpdGllc09uVGlsZS5maW5kKCBlID0+IGUuY29uc3RydWN0b3IubmFtZSA9PT0gJ0hvbGUnICkgKXsgZmxvb3JMYXllciA9IDAgfTtcclxuICAgIGVudGl0aWVzT25UaWxlID0gZW50aXRpZXNPblRpbGUuZmlsdGVyKCBlID0+ICFbJ0hvbGUnLCAnSG9sZUJvcmRlciddLmluY2x1ZGVzKGUuY29uc3RydWN0b3IubmFtZSkgKTtcclxuICAgIGNvbnN0IGhpZ2hlc3RMYXllciA9IE1hdGgubWF4KC4uLmVudGl0aWVzT25UaWxlLm1hcCggZSA9PiAxMCtlLmxheWVyQWRkZW5kICkpO1xyXG4gICAgY29uc3Qgc29saWRFbnRpdHlPbkJhc2VMYXllciA9IFtdO1xyXG4gICAgZm9yIChsZXQgY3VycmVudEJhc2VMYXllciA9IGZsb29yTGF5ZXI7IGN1cnJlbnRCYXNlTGF5ZXIgPD0gaGlnaGVzdExheWVyOyBjdXJyZW50QmFzZUxheWVyKz0xMCkge1xyXG4gICAgICBzb2xpZEVudGl0eU9uQmFzZUxheWVyWyBjdXJyZW50QmFzZUxheWVyIF0gPSBlbnRpdGllc09uVGlsZS5maW5kKCBlID0+IDEwK2UubGF5ZXJBZGRlbmQgPT09IGN1cnJlbnRCYXNlTGF5ZXIgJiYgZS5sYXllciUxMCA9PT0gNyk7XHJcbiAgICB9XHJcbiAgICBsZXQgZW1wdHlMYXllcnMgPSAwO1xyXG4gICAgZm9yIChsZXQgY3VycmVudEJhc2VMYXllciA9IGZsb29yTGF5ZXI7IGN1cnJlbnRCYXNlTGF5ZXIgPD0gaGlnaGVzdExheWVyOyBjdXJyZW50QmFzZUxheWVyKz0xMCkge1xyXG4gICAgICBjb25zdCBlbnRpdGllc09uQmFzZUxheWVyID0gZW50aXRpZXNPblRpbGUuZmlsdGVyKCBlID0+IDEwK2UubGF5ZXJBZGRlbmQgPT09IGN1cnJlbnRCYXNlTGF5ZXIgKTtcclxuICAgICAgZW50aXRpZXNPbkJhc2VMYXllci5mb3JFYWNoKCBlID0+IHtcclxuICAgICAgICBpZiAoZS5tb3ZlVmVydGljYWxseSAmJiBlbXB0eUxheWVycyA+IDApIHtlLm1vdmVWZXJ0aWNhbGx5KC1lbXB0eUxheWVycyxqdW1wKX1cclxuICAgICAgfSApO1xyXG4gICAgICBpZiAoIXNvbGlkRW50aXR5T25CYXNlTGF5ZXJbY3VycmVudEJhc2VMYXllcl0pIHtcclxuICAgICAgICBlbXB0eUxheWVycysrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW50aXRpZXNPblRpbGUuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgZS51cGRhdGVTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGUudXBkYXRlU3RhdGUoKTtcclxuICAgICAgfTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIG1vdmVFbnRpdGllc1VwKCBzdGF5RW50aXR5LCBqdW1wID0gdHJ1ZSApe1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9XHJcbiAgICB9ICkuZmlsdGVyKCBlID0+ICFbJ0JhY2tncm91bmRUaWxlJywgJ0hvbGUnLCAnSG9sZUJvcmRlciddLmluY2x1ZGVzKGUuY29uc3RydWN0b3IubmFtZSkgKTtcclxuICAgIGNvbnN0IGJhc2VMYXllciA9IDEwICsgc3RheUVudGl0eS5sYXllckFkZGVuZDtcclxuICAgIGNvbnN0IGVudGl0aWVzVG9Nb3ZlVXAgPSBlbnRpdGllc09uVGlsZS5maWx0ZXIoIGUgPT4gMTArZS5sYXllckFkZGVuZCA9PT0gYmFzZUxheWVyICYmIGUgIT09IHN0YXlFbnRpdHkgKTtcclxuICAgIGVudGl0aWVzVG9Nb3ZlVXAuZm9yRWFjaCggZSA9PiB7XHJcbiAgICAgIGlmIChlLm1vdmVWZXJ0aWNhbGx5KSB7ZS5tb3ZlVmVydGljYWxseSgxLGp1bXApfVxyXG4gICAgfSApO1xyXG4gICAgY29uc3Qgc29saWRFbnRpdHlNb3ZlZFVwID0gZW50aXRpZXNUb01vdmVVcC5maW5kKCBlID0+IGUubGF5ZXIlMTAgPT09IDcgKTtcclxuICAgIGlmIChzb2xpZEVudGl0eU1vdmVkVXApIHtcclxuICAgICAgdGhpcy5tb3ZlRW50aXRpZXNVcChzb2xpZEVudGl0eU1vdmVkVXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VEb3duSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICl7XHJcbiAgICBpZiAodGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnBvcHVwKSB7cmV0dXJufTtcclxuXHJcbiAgICBpZiAodGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3RlZEVudGl0eSkge1xyXG4gICAgICBjb25zdCBzYW1lRW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKHt0aWxlOntjOnRoaXMuYyxyOnRoaXMucn0sdHlwZTogIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2VsZWN0ZWRFbnRpdHkuY29uc3RydWN0b3IubmFtZX0pO1xyXG4gICAgICBpZiAoc2FtZUVudGl0aWVzT25UaWxlLmxlbmd0aCA9PT0gMCAmJiAhY3RybEtleSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRW50aXR5ID0gdGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnNlbGVjdGlvbi5zZWxlY3RlZEVudGl0eTtcclxuICAgICAgICBjb25zdCBlbnRpdGllc09uVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9LFxyXG4gICAgICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgICBpZiAoIWVudGl0aWVzT25UaWxlLm1hcChlID0+IGUuYWxsb3dQbGFjaW5nKCBzZWxlY3RlZEVudGl0eSApKS5pbmNsdWRlcyhmYWxzZSkpIHtcclxuICAgICAgICAgIGlmIChzZWxlY3RlZEVudGl0eS5hbGxvd0JlaW5nUGxhY2VkKCB7Yzp0aGlzLmMsIHI6dGhpcy5yfSwgdGhpcy5ncmlkICkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5ncmlkLm5ld0VudGl0eUluc3RhbmNlKCAgc2VsZWN0ZWRFbnRpdHkuY29uc3RydWN0b3IubmFtZSwge30sIHtjOnRoaXMuYyxyOnRoaXMucn0pO1xyXG4gICAgICAgICAgICB0aGlzLmxldEVudGl0aWVzRmFsbERvd24oKTtcclxuICAgICAgICAgICAgZW50aXRpZXNPblRpbGUuZm9yRWFjaCggZSA9PiBlLm5ld0VudGl0eVdhc1BsYWNlZE9uVGlsZShlbnRpdHkpICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zY2VuZUNoYW5nZWRIYW5kbGVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNhbWVFbnRpdGllc09uVGlsZS5sZW5ndGggPT09IDEgJiYgY3RybEtleSkge1xyXG4gICAgICAgIHNhbWVFbnRpdGllc09uVGlsZVswXS5iZWZvcmVEZWxldGUoKTtcclxuICAgICAgICBzYW1lRW50aXRpZXNPblRpbGVbMF0uZGVsZXRlKCk7XHJcbiAgICAgICAgdGhpcy5sZXRFbnRpdGllc0ZhbGxEb3duKCk7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgZW50aXRpZXNPblRpbGUuZm9yRWFjaCggZSA9PiBlLmVudGl0eU9uU2FtZVRpbGVXYXNEZWxldGVkKHNhbWVFbnRpdGllc09uVGlsZVswXSkgKTtcclxuICAgICAgICB0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3Iuc2NlbmVDaGFuZ2VkSGFuZGxlcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG1vdXNlRW50ZXJIYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApe1xyXG4gICAgaWYgKG1vdXNlQnV0dG9ucykge1xyXG4gICAgICB0aGlzLm1vdXNlRG93bkhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2NlbmVMb2FkZWRIYW5kbGVyKCl7XHJcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kU2NlbmVMb2FkZWQpIHtcclxuICAgICAgdGhpcy5sZXRFbnRpdGllc0ZhbGxEb3duKCk7XHJcbiAgICAgIGlmICh0aGlzLmdyaWQubmFtZSAhPT0gJ3BsYXknKSB7cmV0dXJufTtcclxuICAgICAgdGhpcy5zY2VuZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgaWYgKHRoaXMuYyA9PSAwICYmIHRoaXMuciA9PSAwKSB7Ly9rZXlUcmFja1RpbGVcclxuICAgICAgICB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmtleVRyYWNrRW50aXR5ID0gdGhpcztcclxuICAgICAgICB0aGlzLmdob3N0eUFuaW1hdGlvbnNFbmRlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5mYXN0TW9kZSA9IHt9O1xyXG4gICAgICAgIHRoaXMudGltZXNLZXlJc1JlbGVhc2VkID0ge307XHJcbiAgICAgICAgdGhpcy50aWxlc1RvVXBkYXRlID0gW107XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5ncmlkLmtleURvd25TdWJzY3JpcHRpb25zKS5mb3JFYWNoKCBrZXkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0tleURvd24oIGtleSApO1xyXG4gICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0tleVVwKCBrZXkgKTtcclxuICAgICAgICAgIHRoaXMudGltZXNLZXlJc1JlbGVhc2VkW2tleV0gPSAwO1xyXG4gICAgICAgICAgdGhpcy5mYXN0TW9kZVtrZXldID0gZmFsc2U7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmRTY2VuZUxvYWRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlEb3duSGFuZGxlcigga2V5ICl7IC8va2V5VHJhY2tUaWxlXHJcbiAgICB0aGlzLnh0aFRpbWVLZXlJc0Rvd24rKztcclxuICAgIGNvbnN0IGFsbEVudGl0aWVzID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICB9ICk7XHJcbiAgICBjb25zdCBnb2FscyA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdHlwZTogJ0dvYWwnXHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLnRpbGVzVG9VcGRhdGUuZm9yRWFjaCggdGlsZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgICB0aWxlLCB0eXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICAgIH0gKVswXS5sZXRFbnRpdGllc0ZhbGxEb3duKCk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLnRpbGVzVG9VcGRhdGUgPSBbXTtcclxuICAgIGNvbnN0IHRhc2tEb25lQXJyYXkgPSBhbGxFbnRpdGllcy5tYXAoIGUgPT4gZS50YXNrRG9uZSgpICk7XHJcbiAgICBpZiAoIXRhc2tEb25lQXJyYXkuaW5jbHVkZXMoIGZhbHNlICkgJiYgZ29hbHMubGVuZ3RoID4gMCApIHtcclxuICAgICAgaWYgKHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoe3R5cGU6J0dvYWwnfSkpIHsgLy9pZiB0aGVyZSBleGlzdHMgYXQgbGVhc3Qgb25lIGdvYWxcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZ3JpZ2EuZ2hvc3R5LnBsYXkubGV2ZWxEb25lKCksIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zY2VuZUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS51cGRhdGVVbmRvSGlzdG9yeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2NlbmVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBrZXlVcEhhbmRsZXIoIGtleSApe1xyXG4gICAgdGhpcy5mYXN0TW9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZFtrZXldKys7XHJcbiAgfVxyXG5cclxuICBhZGRUaWxlc1RvVXBkYXRlKCB0aWxlcyApIHtcclxuICAgIHRpbGVzLmZvckVhY2goIHQgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMudGlsZXNUb1VwZGF0ZS5maW5kKCB1VCA9PiB1VC5jID09PSB0LmMgJiYgdVQuciA9PT0gdC5yICkpIHtcclxuICAgICAgICB0aGlzLnRpbGVzVG9VcGRhdGUucHVzaCh0KTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLy91c2VkIHRvIGltcGxlbWVudCB0aGUgaG9sZC1hbmQtbW92ZSBmZWF0dXJlXHJcbiAgbW92ZUFuaW1hdGlvbkNoYWluT2ZHaG9zdHlFbXB0aWVkKCkge1xyXG4gICAgdGhpcy5naG9zdHlBbmltYXRpb25zRW5kZWQrKztcclxuICAgIGNvbnN0IGdob3N0aWVzID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dHlwZTonR2hvc3R5J30pO1xyXG4gICAgaWYgKCB0aGlzLmdob3N0eUFuaW1hdGlvbnNFbmRlZCA9PT0gZ2hvc3RpZXMubGVuZ3RoICkge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleUhvbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUhvbGQoKSB7IC8vYWxtb3N0IHdvcmtzLCBwcm9iYWJseSBzb21lIGlzc3VlIGNhdXNlIG9mIGtleXMgZ2V0dGluZyBzdHVjayAoZ3JpZ2EpO1xyXG4gICAgdGhpcy5naG9zdHlBbmltYXRpb25zRW5kZWQgPSAwO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZ3JpZC5rZXlEb3duU3Vic2NyaXB0aW9ucykuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ3JpZ2Eua2V5c1ByZXNzZWQuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZhc3RNb2RlW2tleV0pIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZC5rZXlEb3duSGFuZGxlcih7a2V5fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lS2V5SXNVcCA9IHRoaXMudGltZXNLZXlJc1JlbGVhc2VkW2tleV07XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCAoY3VycmVudFRpbWVLZXlJc1VwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZUtleUlzVXAgPT09IHRoaXMudGltZXNLZXlJc1JlbGVhc2VkW2tleV0pIHtcclxuICAgICAgICAgICAgICB0aGlzLmZhc3RNb2RlW2tleV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlS2V5SG9sZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAyMDAsIGN1cnJlbnRUaW1lS2V5SXNVcCApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgaW5jbHVkZUluU2NlbmVEYXRhKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFByZXNzdXJlUGxhdGUgfSBmcm9tICcuL3ByZXNzdXJlX3BsYXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFtb25kUHJlc3N1cmVQbGF0ZSBleHRlbmRzIFByZXNzdXJlUGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHBhcmFtcy5nYXRlcyA9ICdEaWFtb25kU3RvbmUnO1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncyApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnUGFya2luZyBMZWZ0JyApO1xyXG4gICAgcmV0dXJuIGxldmVsSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IHVwOiAnLi90aWxlX2ltZy9kaWFtb25kX3ByZXNzdXJlX3BsYXRlLnBuZycsXHJcbiAgICAgICAgICAgICBkb3duOiAnLi90aWxlX2ltZy9kaWFtb25kX3ByZXNzdXJlX3BsYXRlX2Rvd24ucG5nJyB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7IEdhdGVTdG9uZSB9IGZyb20gJy4vZ2F0ZV9zdG9uZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbW9uZFN0b25lIGV4dGVuZHMgR2F0ZVN0b25lIHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIGNvbnN0IGxldmVsTmFtZXMgPSBjbGFzc2ljTGV2ZWxzLm1hcCggbCA9PiBsLm5hbWUgKTtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbE5hbWVzLmluZGV4T2YoICdQYXJraW5nIExlZnQnICk7XHJcbiAgICByZXR1cm4gbGV2ZWxJbmRleDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgY2xvc2VkOiAnLi90aWxlX2ltZy9kaWFtb25kX3N0b25lLmpwZycsXHJcbiAgICAgICAgICAgICBvcGVuOiAnLi90aWxlX2ltZy9kaWFtb25kX29wZW4ucG5nJ307XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcbmltcG9ydCB7IFN0b25lIH0gZnJvbSAnLi9zdG9uZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2F0ZVN0b25lIGV4dGVuZHMgU3RvbmUge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MgKTtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gcGFyYW1zLnN0YXRlIHx8ICdjbG9zZWQnO1xyXG4gIH1cclxuXHJcbiAgb3Blbigpe1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnb3Blbic7XHJcbiAgICB0aGlzLmNoYW5nZUxheWVyKCAxMyApO1xyXG4gICAgdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgdHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApWzBdLmxldEVudGl0aWVzRmFsbERvd24oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKXtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2Nsb3NlZCc7XHJcbiAgICB0aGlzLmNoYW5nZUxheWVyKCAxNyApO1xyXG4gICAgdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgdHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApWzBdLm1vdmVFbnRpdGllc1VwKCB0aGlzLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFBhcmFtcygpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gR2hvc3R5RW50aXR5LnByb3RvdHlwZS5nZXRDdXJyZW50UGFyYW1zLmNhbGwodGhpcyk7XHJcbiAgICBwYXJhbXMuc3RhdGUgPSB0aGlzLmN1cnJlbnRJbWFnZTtcclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICBhbGxvd01vdmUoIHJlcXVlc3RDaGFpbiApe1xyXG4gICBpZiAodGhpcy5jdXJyZW50SW1hZ2UgPT09ICdvcGVuJykge1xyXG4gICAgIHJldHVybiB0cnVlO1xyXG4gICB9IGVsc2Uge1xyXG4gICAgIHJldHVybiBHaG9zdHlFbnRpdHkucHJvdG90eXBlLmFsbG93TW92ZS5jYWxsKHRoaXMsIHJlcXVlc3RDaGFpbik7XHJcbiAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHaG9zdHlFbnRpdHkgfSBmcm9tICcuLi9naG9zdHlfZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHaG9zdHkgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDE3ICk7XHJcbiAgICBpZiAodGhpcy5ncmlkLm5hbWUgPT09ICdwbGF5Jykge1xyXG4gICAgICBbJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0J10uZm9yRWFjaCgga2V5ID0+IHRoaXMuc3Vic2NyaWJlVG9LZXlEb3duKGtleSkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWxpZGF0ZWRFbnRpdGllcyA9IFtdO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBwYXJhbXMuZmFjaW5nIHx8ICdyaWdodCc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IHJpZ2h0OiAnLi90aWxlX2ltZy9naG9zdHlfcmlnaHQucG5nJyxcclxuICAgICAgICAgICAgIGxlZnQ6ICcuL3RpbGVfaW1nL2dob3N0eV9sZWZ0LnBuZycsXHJcbiAgICAgICAgICAgICB1cDogJy4vdGlsZV9pbWcvZ2hvc3R5X21pZF9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICAgZG93bjogJy4vdGlsZV9pbWcvZ2hvc3R5X21pZF9sZWZ0LnBuZyd9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFBhcmFtcygpe1xyXG4gICAgY29uc3QgcGFyYW1zID0gR2hvc3R5RW50aXR5LnByb3RvdHlwZS5nZXRDdXJyZW50UGFyYW1zLmNhbGwodGhpcyk7XHJcbiAgICBwYXJhbXMuZmFjaW5nID0gdGhpcy5jdXJyZW50SW1hZ2U7XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxuXHJcbiAga2V5RG93bkhhbmRsZXIoIGtleSApe1xyXG4gICAgbGV0IG1vdmVEaXJlY3Rpb24gPSBrZXkuc2xpY2UoNSkudG9Mb3dlckNhc2UoKTtcclxuICAgIGxldCBpbWFnZURpcmVjdGlvbiA9IG1vdmVEaXJlY3Rpb247XHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbkZ1bmN0aW9uKCAnbW92ZScsICgpID0+IHtcclxuICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBpbWFnZURpcmVjdGlvbjtcclxuICAgICAgdGhpcy5yZW1vdmVBbmltYXRpb25GdW5jdGlvbignbW92ZScsIDApO1xyXG4gICAgfSApO1xyXG4gICAgaWYgKHRoaXMucmVxdWVzdE1vdmUoIG1vdmVEaXJlY3Rpb24gKSkge1xyXG4gICAgICB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmtleVRyYWNrRW50aXR5LnNjZW5lQ2hhbmdlZCA9IHRydWU7XHJcbiAgICB9IGVsc2UgeyBtb3ZlRGlyZWN0aW9uID0gJ3N0YXknIH07XHJcbiAgICB0aGlzLm1vdmUoIG1vdmVEaXJlY3Rpb24gKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlTW92ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZWRFbnRpdGllcy5pbmNsdWRlcyggcmVxdWVzdENoYWluW3JlcXVlc3RDaGFpbi5sZW5ndGgtMV1bMF0gKSl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCB0aGlzLmxheWVyJTEwID09PSA3ICYmIHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdLmxheWVyQWRkZW5kICE9PSB0aGlzLmxheWVyQWRkZW5kICl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWxpZGF0ZWRFbnRpdGllcy5wdXNoKHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdKTtcclxuICAgIGxldCBzdWNjZXNzID0gdGhpcy5yZXF1ZXN0TW92ZSggcmVxdWVzdENoYWluW3JlcXVlc3RDaGFpbi5sZW5ndGgtMV1bMV0gKTtcclxuICAgIHRoaXMudmFsaWRhdGVkRW50aXRpZXMgPSBbXTtcclxuICAgIHJldHVybiBzdWNjZXNzO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uQ2hhaW5FbXB0aWVkKCBjYXRlZ29yeSApe1xyXG4gICAgaWYgKGNhdGVnb3J5ID09PSAnbW92ZScgJiYgdGhpcy5ncmlkLm5hbWUgPT09ICdwbGF5Jykge1xyXG4gICAgICB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmtleVRyYWNrRW50aXR5Lm1vdmVBbmltYXRpb25DaGFpbk9mR2hvc3R5RW1wdGllZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvYWwgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDE0ICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcuL3RpbGVfaW1nL29pbF9sYW1wLnBuZyd9O1xyXG4gIH1cclxuXHJcbiAgYWxsb3dNb3ZlKCl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRhc2tEb25lKCkge1xyXG4gICAgbGV0IGdob3N0aWVzID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgdHlwZTogJ0dob3N0eScsXHJcbiAgICB9ICk7XHJcbiAgICBpZiAoZ2hvc3RpZXNbMF0pIHtyZXR1cm4gZ2hvc3RpZXNbMF0ubGF5ZXJBZGRlbmQgPT09IHRoaXMubGF5ZXJBZGRlbmR9O1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dCZWluZ1BsYWNlZCggIHRpbGUsIGVkaXRvckdyaWQgICl7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVGlsZSA9IGVkaXRvckdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7dGlsZX0gKTtcclxuICAgIGNvbnN0IG90aGVyRW50aXR5ID0gZW50aXRpZXNPblRpbGUuZmluZCggZSA9PiAhWydIb2xlJywgJ0hvbGVCb3JkZXInLCAnQmFja2dyb3VuZFRpbGUnXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICk7XHJcbiAgICBpZiAob3RoZXJFbnRpdHkpIHtyZXR1cm4gZmFsc2V9XHJcbiAgICBlbHNlIHtyZXR1cm4gdHJ1ZX1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXJlY3Rpb25Ub1NpZGUsIEdob3N0eUVudGl0eSwgb3Bwb3NpdGVTaWRlIH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9sZSBleHRlbmRzIEdob3N0eUVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMSApO1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5uYW1lID09PSAnc2VsZWN0aW9uLWhvdGJhcicpIHtyZXR1cm59XHJcblxyXG4gICAgdGhpcy5ob2xlTGVmdCA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoXHJcbiAgICAgIHt0aWxlOiB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCdsZWZ0JywgJ21vZHVsbycpLCB0eXBlOidIb2xlJ30pWzBdO1xyXG4gICAgdGhpcy5ob2xlUmlnaHQgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKFxyXG4gICAgICB7dGlsZTogdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbigncmlnaHQnLCAnbW9kdWxvJyksIHR5cGU6J0hvbGUnfSlbMF07XHJcbiAgICB0aGlzLmhvbGVUb3AgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKFxyXG4gICAgICB7dGlsZTogdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbigndG9wJywgJ21vZHVsbycpLCB0eXBlOidIb2xlJ30pWzBdO1xyXG4gICAgdGhpcy5ob2xlQm90dG9tID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyhcclxuICAgICAge3RpbGU6IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oJ2JvdHRvbScsICdtb2R1bG8nKSwgdHlwZTonSG9sZSd9KVswXTtcclxuXHJcbiAgICBpZiAodGhpcy5ob2xlTGVmdCkgeyB0aGlzLmhvbGVMZWZ0LnNldEhvbGUodGhpcywgJ1JpZ2h0Jyl9XHJcbiAgICBlbHNlIHsgdGhpcy5ib3JkZXJMZWZ0ID0gdGhpcy5ncmlkLm5ld0VudGl0eUluc3RhbmNlKCdIb2xlQm9yZGVyJywge3NpZGU6J2xlZnQnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVSaWdodCkgeyB0aGlzLmhvbGVSaWdodC5zZXRIb2xlKHRoaXMsICdMZWZ0JykgfVxyXG4gICAgZWxzZSB7IHRoaXMuYm9yZGVyUmlnaHQgPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoJ0hvbGVCb3JkZXInLCB7c2lkZToncmlnaHQnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVUb3ApIHsgdGhpcy5ob2xlVG9wLnNldEhvbGUodGhpcywgJ0JvdHRvbScpIH1cclxuICAgIGVsc2UgeyB0aGlzLmJvcmRlclRvcCA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlOid0b3AnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVCb3R0b20pIHsgdGhpcy5ob2xlQm90dG9tLnNldEhvbGUodGhpcywgJ1RvcCcpIH1cclxuICAgIGVsc2UgeyB0aGlzLmJvcmRlckJvdHRvbSA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlOidib3R0b20nLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVmYXVsdDogJy4vdGlsZV9pbWcvaG9sZV9iYWNrZ3JvdW5kLmpwZyd9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnSG9sZScgKTtcclxuICAgIHJldHVybiBsZXZlbEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0SG9sZSggaG9sZSwgc2lkZSApe1xyXG4gICAgdGhpc1tgaG9sZSR7c2lkZX1gXSA9IGhvbGU7XHJcbiAgICB0aGlzW2Bib3JkZXIke3NpZGV9YF0uZGVsZXRlKCk7XHJcbiAgICB0aGlzW2Bib3JkZXIke3NpZGV9YF0gPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSG9sZSggc2lkZSApe1xyXG4gICAgdGhpc1tgaG9sZSR7c2lkZX1gXSA9IG51bGw7XHJcbiAgICB0aGlzW2Bib3JkZXIke3NpZGV9YF0gPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoJ0hvbGVCb3JkZXInLCB7c2lkZSwgaG9sZTp0aGlzfSwge2M6dGhpcy5jLHI6dGhpcy5yfSApO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGVsZXRlKCl7XHJcbiAgICBPYmplY3QudmFsdWVzKCBkaXJlY3Rpb25Ub1NpZGUgKS5mb3JFYWNoKCBzaWRlID0+IHtcclxuICAgICAgaWYgKCB0aGlzW2Bib3JkZXIke3NpZGV9YF0gKSB7XHJcbiAgICAgICAgdGhpc1tgYm9yZGVyJHtzaWRlfWBdLmRlbGV0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNbYGhvbGUke3NpZGV9YF0ucmVtb3ZlSG9sZSggb3Bwb3NpdGVTaWRlW3NpZGUudG9Mb3dlckNhc2UoKV0gKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZFRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9LFxyXG4gICAgICB0eXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICB9IClbMF07XHJcbiAgICBiYWNrZ3JvdW5kVGlsZS5tb3ZlRW50aXRpZXNVcCgge2xheWVyQWRkZW5kOiAtMTB9ICk7XHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXJlY3Rpb25Ub1NpZGUsIEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbGVCb3JkZXIgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDIgKTtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gcGFyYW1zLnNpZGUudG9Mb3dlckNhc2UoKSB8fCAndG9wJztcclxuICAgIHRoaXMuaG9sZSA9IHBhcmFtcy5ob2xlIHx8IG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IHRvcDogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfdG9wLnBuZycsXHJcbiAgICAgICAgICAgICByaWdodDogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfcmlnaHQucG5nJyxcclxuICAgICAgICAgICAgIGJvdHRvbTogJy4vdGlsZV9pbWcvaG9sZV9ib3JkZXJfYm90dG9tLnBuZycsXHJcbiAgICAgICAgICAgICBsZWZ0OiAnLi90aWxlX2ltZy9ob2xlX2JvcmRlcl9sZWZ0LnBuZyd9O1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIHJldHVybiBJbmZpbml0eTtcclxuICB9XHJcblxyXG4gIGluY2x1ZGVJblNjZW5lRGF0YSgpe1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dMZWF2ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICBjb25zdCB2YWxpZCA9IGRpcmVjdGlvblRvU2lkZVtyZXF1ZXN0Q2hhaW5bIHJlcXVlc3RDaGFpbi5sZW5ndGgtMSBdWzFdXS50b0xvd2VyQ2FzZSgpICE9PSB0aGlzLmN1cnJlbnRJbWFnZTtcclxuICAgIGNvbnN0IGRvd24gPSByZXF1ZXN0Q2hhaW5bIHJlcXVlc3RDaGFpbi5sZW5ndGgtMSBdWzBdLmxheWVyQWRkZW5kID09PSAtMTA7IC8vZml4XHJcbiAgICBpZiAoZG93biAmJiAhdmFsaWQpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlc3N1cmVQbGF0ZSBleHRlbmRzIEdob3N0eUVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMTMgKTtcclxuICAgIHRoaXMuZ2F0ZXNOYW1lID0gcGFyYW1zLmdhdGVzO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHBhcmFtcy5zdGF0ZSB8fCAndXAnO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgcmVsZWFzZSgpe1xyXG4gICAgY29uc3QgZG93bnMgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHR5cGU6IHRoaXMuY29uc3RydWN0b3IubmFtZVxyXG4gICAgfSApLm1hcCggcCA9PiBwLnN0YXRlID09PSAnZG93bicgKTtcclxuICAgIGlmICghZG93bnMuaW5jbHVkZXMoZmFsc2UpKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgICB0eXBlOiB0aGlzLmdhdGVzTmFtZVxyXG4gICAgICB9ICkuZm9yRWFjaCggZyA9PiBnLmNsb3NlKCkgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmN1cnJlbnRJbWFnZSA9ICd1cCc7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJlc3MoKXtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmN1cnJlbnRJbWFnZSA9ICdkb3duJztcclxuICAgIGNvbnN0IGRvd25zID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0eXBlOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcclxuICAgIH0gKS5tYXAoIHAgPT4gcC5zdGF0ZSA9PT0gJ2Rvd24nICk7XHJcbiAgICBpZiAoIWRvd25zLmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgdHlwZTogdGhpcy5nYXRlc05hbWVcclxuICAgICAgfSApLmZvckVhY2goIGcgPT4gZy5vcGVuKCkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYXJhbXMoKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IEdob3N0eUVudGl0eS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhcmFtcy5jYWxsKHRoaXMpO1xyXG4gICAgcGFyYW1zLnN0YXRlID0gdGhpcy5jdXJyZW50SW1hZ2U7XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dNb3ZlKCl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKCl7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVG9wID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gIVsnSG9sZScsICdIb2xlQm9yZGVyJywgJ0JhY2tncm91bmRUaWxlJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICk7XHJcbiAgICBjb25zdCBlbnRpdHlPblRvcCA9IGVudGl0aWVzT25Ub3AuZmluZCggZSA9PiBlLmxheWVyQWRkZW5kID09PSB0aGlzLmxheWVyQWRkZW5kICk7XHJcbiAgICBpZiAoIWVudGl0eU9uVG9wICYmIHRoaXMuc3RhdGUgPT09ICdkb3duJykge1xyXG4gICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgIH0gZWxzZSBpZiAoZW50aXR5T25Ub3AgJiYgdGhpcy5zdGF0ZSA9PT0gJ3VwJykge1xyXG4gICAgICB0aGlzLnByZXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZWxldGUoKXtcclxuICAgIC8vY2hlY2sgaWYgYWxsIHJlbWFpbmluZyBwcmVzc3VyZSBwbGF0ZXMgYXJlIGRvd25cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHaG9zdHlFbnRpdHkgfSBmcm9tICcuLi9naG9zdHlfZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9uZSBleHRlbmRzIEdob3N0eUVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMTcgKTtcclxuICAgIHRoaXMuc2V0V2lkdGgoIDAuOSApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIDAuOSApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnLi90aWxlX2ltZy9zdG9uZS5qcGcnfTtcclxuICB9XHJcblxyXG4gIGFsbG93UGxhY2luZyggZW50aXR5ICl7XHJcbiAgICBpZiAodGhpcy5sYXllciA9PT0gNykge3JldHVybiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0dob3N0eSd9XHJcbiAgICBlbHNlIHtyZXR1cm4gZW50aXR5LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdIb2xlJ31cclxuICB9XHJcblxyXG4gIGFsbG93QmVpbmdQbGFjZWQoIHRpbGUsIGVkaXRvckdyaWQgKXtcclxuICAgIGNvbnN0IGVudGl0aWVzT25UaWxlID0gZWRpdG9yR3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZTogdGlsZVxyXG4gICAgfSApLmZpbHRlciggZSA9PiAhWydCYWNrZ3JvdW5kVGlsZScsICdIb2xlJywgJ0hvbGVCb3JkZXInXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICk7XHJcbiAgICBpZiAoZW50aXRpZXNPblRpbGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvb2RlbkJveCBleHRlbmRzIEdob3N0eUVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMTcgKTtcclxuICAgIHRoaXMuc2V0V2lkdGgoIDAuOSApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIDAuOSApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnLi90aWxlX2ltZy93b29kZW5fYm94LmpwZyd9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnQm94ZXMnICk7XHJcbiAgICByZXR1cm4gbGV2ZWxJbmRleDtcclxuICB9XHJcblxyXG4gIGFsbG93TW92ZShyZXF1ZXN0Q2hhaW4pe1xyXG4gICAgaWYgKHJlcXVlc3RDaGFpbi5sZW5ndGggPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdE1vdmUocmVxdWVzdENoYWluWzBdWzFdLCByZXF1ZXN0Q2hhaW4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW50aXR5V2lsbE1vdmVUb1RpbGUoIGVudGl0eSwgZGlyZWN0aW9uICkge1xyXG4gICAgaWYgKCB0aGlzLmxheWVyQWRkZW5kID09PSBlbnRpdHkubGF5ZXJBZGRlbmQgKXtcclxuICAgICAgdGhpcy5tb3ZlKCBkaXJlY3Rpb24sIHRydWUgKTtcclxuICAgICAgZW50aXR5LmFkZEFuaW1hdGlvbkZ1bmN0aW9uKCAnbW92ZScsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aW1lUGFzc2VkID0gcGVyZm9ybWFuY2Uubm93KCktdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbJ21vdmUnXVswXS5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBbmltYXRpb25GdW5jdGlvbignbW92ZScsIHRpbWVQYXNzZWQsICdkdW1teUFuaW1hdGlvbkZ1bmN0aW9uJyk7XHJcbiAgICAgICAgZW50aXR5LnJlbW92ZUFuaW1hdGlvbkZ1bmN0aW9uKCdtb3ZlJywgMCk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9ncmlnYS9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvblRvU2lkZSA9IHtcclxuICB1cDogJ1RvcCcsXHJcbiAgZG93bjogJ0JvdHRvbScsXHJcbiAgbGVmdDogJ0xlZnQnLFxyXG4gIHJpZ2h0OiAnUmlnaHQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IHtcclxuICB1cDogJ2Rvd24nLFxyXG4gIGRvd246ICd1cCcsXHJcbiAgbGVmdDogJ3JpZ2h0JyxcclxuICByaWdodDogJ2xlZnQnLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3Bwb3NpdGVTaWRlID0ge1xyXG4gIGJvdHRvbTogJ1RvcCcsXHJcbiAgdG9wOiAnQm90dG9tJyxcclxuICByaWdodDogJ0xlZnQnLFxyXG4gIGxlZnQ6ICdSaWdodCcsXHJcbn1cclxuXHJcbmNvbnN0IE1PVkVfVVBfU0laRV9JTkNSRUFTRV9GQUNUT1IgPSAxNi8xNDtcclxuY29uc3QgVkVSVElDQUxfTU9WRV9EVVJBVElPTiA9IDEwMDtcclxuY29uc3QgTU9WRV9EVVJBVElPTiA9IDEwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBHaG9zdHlFbnRpdHkgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MsIGxheWVyID0gMSApe1xyXG4gICAgLy9vdmVyd3JpdGUgcGFyYW1zIGlmIHRoZSBlbnRpdGllcyBhcmUgaW4gZWRpdG9yIG9yIHNlbGVjdGlvbi1ob3RiYXIgZ3JpZFxyXG4gICAgY29uc3Qgc3VwZXJQYXJhbXMgPSB7bGF5ZXJ9O1xyXG4gICAgaWYgKHBhcmFtcy5sYXllckFkZGVuZCkgeyBzdXBlclBhcmFtcy5sYXllciArPSBwYXJhbXMubGF5ZXJBZGRlbmQgfTtcclxuICAgIHN1cGVyKCBzdXBlclBhcmFtcywgYXJncyApO1xyXG4gICAgdGhpcy53aWR0aE11bHRpcGxpZXIgPSAxO1xyXG4gICAgdGhpcy5oZWlnaHRNdWx0aXBsaWVyID0gMTtcclxuICAgIHRoaXMubGF5ZXJBZGRlbmQgPSBwYXJhbXMubGF5ZXJBZGRlbmQgfHwgMDtcclxuICAgIHRoaXMuYmFzaXNXaWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLmJhc2lzSGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICB0aGlzLmJhc2lzQ09mZnNldCA9IHRoaXMuY09mZnNldDtcclxuICAgIHRoaXMuYmFzaXNST2Zmc2V0ID0gdGhpcy5yT2Zmc2V0O1xyXG4gICAgdGhpcy5iYXNpc0xheWVyID0gbGF5ZXI7XHJcbiAgICB0aGlzLm1vdmVBbmltYXRpb25EaXJlY3Rpb25zID0gW107XHJcbiAgICB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5hZGRXaWR0aE11bHRpcGxpZXIoIHBhcmFtcy53aWR0aE11bHRpcGxpZXIgfHwgMSApO1xyXG4gICAgdGhpcy5hZGRIZWlnaHRNdWx0aXBsaWVyKCBwYXJhbXMuaGVpZ2h0TXVsdGlwbGllciB8fCAxICk7XHJcbiAgICBpZiAodGhpcy5ncmlkLm5hbWUgPT09ICdzZWxlY3Rpb24taG90YmFyJykge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkJhY2tncm91bmQgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKHt0aWxlOntjOnRoaXMuYyxyOnRoaXMucn0sdHlwZTonU2VsZWN0aW9uQmFja2dyb3VuZCd9KVswXTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25CYWNrZ3JvdW5kLnNldE90aGVyRW50aXR5KCB0aGlzICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudFBhcmFtcygpe1xyXG4gICAgY29uc3QgcGFyYW1zID0ge307XHJcbiAgICBpZiAodGhpcy53aWR0aE11bHRpcGxpZXIgIT09IDEpeyBwYXJhbXMud2lkdGhNdWx0aXBsaWVyID0gdGhpcy53aWR0aE11bHRpcGxpZXIgfTtcclxuICAgIGlmICh0aGlzLmhlaWdodE11bHRpcGxpZXIgIT09IDEpeyBwYXJhbXMuaGVpZ2h0TXVsdGlwbGllciA9IHRoaXMuaGVpZ2h0TXVsdGlwbGllciB9O1xyXG4gICAgaWYgKHRoaXMubGF5ZXJBZGRlbmQgIT09IDApeyBwYXJhbXMubGF5ZXJBZGRlbmQgPSB0aGlzLmxheWVyQWRkZW5kIH07XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgbW92ZVZlcnRpY2FsbHkoIGFtb3VudCwganVtcCA9IHRydWUsIGF1dG9hbmltYXRlID0gdHJ1ZSApe1xyXG4gICAgdGhpcy5hZGRIZWlnaHRNdWx0aXBsaWVyKCBNYXRoLnBvdyhNT1ZFX1VQX1NJWkVfSU5DUkVBU0VfRkFDVE9SLCBhbW91bnQpICk7XHJcbiAgICB0aGlzLmFkZFdpZHRoTXVsdGlwbGllciggTWF0aC5wb3coTU9WRV9VUF9TSVpFX0lOQ1JFQVNFX0ZBQ1RPUiwgYW1vdW50KSApO1xyXG4gICAgdGhpcy5hZGRMYXllckFkZGVuZCggYW1vdW50KjEwICk7XHJcbiAgICBjb25zdCBhTyA9IHtcclxuICAgICAgY2hhbmdlSW5CYXNlTGF5ZXI6IGFtb3VudCxcclxuICAgICAgdGFyZ2V0QWJzQmFzZUxheWVyOiB0aGlzLmxheWVyQWRkZW5kLzEwLFxyXG4gICAgICBqdW1wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRXaWR0aCggdGhpcy5iYXNpc1dpZHRoICogTWF0aC5wb3coTU9WRV9VUF9TSVpFX0lOQ1JFQVNFX0ZBQ1RPUiwgLXRoaXMubGF5ZXJBZGRlbmQvMTApLCBmYWxzZSApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIHRoaXMuYmFzaXNIZWlnaHQgKiBNYXRoLnBvdyhNT1ZFX1VQX1NJWkVfSU5DUkVBU0VfRkFDVE9SLCAtdGhpcy5sYXllckFkZGVuZC8xMCksIGZhbHNlICk7XHJcbiAgICB0aGlzLmNoYW5nZUxheWVyKCB0aGlzLmJhc2lzTGF5ZXItYW1vdW50KjEwICk7XHJcbiAgICBpZiAoYXV0b2FuaW1hdGUpIHtcclxuICAgICAgdGhpcy5hZGRWZXJ0aWNhbE1vdmVBbmltYXRpb24oYU8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkVmVydGljYWxNb3ZlQW5pbWF0aW9uKGFPKXtcclxuICAgIHRoaXMuYWRkQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLFxyXG4gICAgICAoKSA9PiB0aGlzLnNldFZlcnRpY2FsTW92ZUFuaW1hdGlvblNpemUoKSwgYU9cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRXaWR0aE11bHRpcGxpZXIoIG11bHRpcGxpZXIgKXtcclxuICAgIHRoaXMud2lkdGhNdWx0aXBsaWVyICo9IG11bHRpcGxpZXI7XHJcbiAgICB0aGlzLnNldFdpZHRoKCB0aGlzLmJhc2lzV2lkdGggKTtcclxuICB9XHJcblxyXG4gIGFkZEhlaWdodE11bHRpcGxpZXIoIG11bHRpcGxpZXIgKXtcclxuICAgIHRoaXMuaGVpZ2h0TXVsdGlwbGllciAqPSBtdWx0aXBsaWVyO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIHRoaXMuYmFzaXNIZWlnaHQgKTtcclxuICB9XHJcblxyXG4gIGFkZExheWVyQWRkZW5kKCBhZGRlbmQgKXtcclxuICAgIHRoaXMubGF5ZXJBZGRlbmQgKz0gYWRkZW5kO1xyXG4gICAgdGhpcy5jaGFuZ2VMYXllciggdGhpcy5iYXNpc0xheWVyICk7XHJcbiAgfVxyXG5cclxuICBzZXRXaWR0aCggd2lkdGgsIHNldEJhc2lzID0gdHJ1ZSApe1xyXG4gICAgaWYgKHNldEJhc2lzKSB7dGhpcy5iYXNpc1dpZHRoID0gd2lkdGh9O1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRXaWR0aC5jYWxsKCB0aGlzLCB3aWR0aCp0aGlzLndpZHRoTXVsdGlwbGllcik7XHJcbiAgICB0aGlzLnNldENPZmZzZXQoIHRoaXMuYmFzaXNDT2Zmc2V0ICk7XHJcbiAgfVxyXG5cclxuICBzZXRIZWlnaHQoIGhlaWdodCwgc2V0QmFzaXMgPSB0cnVlICl7XHJcbiAgICBpZiAoc2V0QmFzaXMpIHt0aGlzLmJhc2lzSGVpZ2h0ID0gaGVpZ2h0fTtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0SGVpZ2h0LmNhbGwoIHRoaXMsIGhlaWdodCp0aGlzLmhlaWdodE11bHRpcGxpZXIgKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggdGhpcy5iYXNpc1JPZmZzZXQgKTtcclxuICB9XHJcblxyXG4gIHNldENPZmZzZXQoIGNPZmZzZXQgKXtcclxuICAgIHRoaXMuYmFzaXNDT2Zmc2V0ID0gY09mZnNldDtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0Q09mZnNldC5jYWxsKCB0aGlzLCBjT2Zmc2V0ICsgKDEtdGhpcy53aWR0aCkvMiApO1xyXG4gIH1cclxuXHJcbiAgc2V0Uk9mZnNldCggck9mZnNldCApe1xyXG4gICAgdGhpcy5iYXNpc1JPZmZzZXQgPSByT2Zmc2V0O1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRST2Zmc2V0LmNhbGwoIHRoaXMsIHJPZmZzZXQgKyAoMS10aGlzLmhlaWdodCkvMiApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTGF5ZXIoIGxheWVyICl7XHJcbiAgICB0aGlzLmJhc2lzTGF5ZXIgPSBsYXllcjtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuY2hhbmdlTGF5ZXIuY2FsbCggdGhpcywgbGF5ZXIgKyB0aGlzLmxheWVyQWRkZW5kICk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKCBkaXJlY3Rpb24sIHdhaXRBbmltYXRpb24gPSBmYWxzZSkge1xyXG4gICAgY29uc3QgYWJzUG9zID0gdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbihkaXJlY3Rpb24sICdtb2R1bG8nKTtcclxuICAgIGNvbnN0IHJlbFBvcyA9IHRoaXMuZm9ybWF0UG9zaXRpb25Bc1JlbGF0aXZlUG9zaXRpb24oZGlyZWN0aW9uLCAnbW9kdWxvJyk7XHJcbiAgICBjb25zdCBlbnRpdGllc09uTmV3VGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZTogYWJzUG9zLFxyXG4gICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICB9ICk7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVGhpc1RpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHsgYzp0aGlzLmMsIHI6dGhpcy5yIH0sXHJcbiAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKTtcclxuICAgIGVudGl0aWVzT25OZXdUaWxlLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgIGVudGl0eS5lbnRpdHlXaWxsTW92ZVRvVGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmtleVRyYWNrRW50aXR5LmFkZFRpbGVzVG9VcGRhdGUoIFthYnNQb3MsIHtjOnRoaXMuYywgcjp0aGlzLnJ9XSApO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5tb3ZlLmNhbGwoIHRoaXMsIGFic1BvcyApO1xyXG4gICAgZW50aXRpZXNPbk5ld1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eU1vdmVkVG9UaWxlKCB0aGlzLCBkaXJlY3Rpb24gKTtcclxuICAgIH0gKTtcclxuICAgIGVudGl0aWVzT25UaGlzVGlsZS5mb3JFYWNoKCBlbnRpdHkgPT4ge1xyXG4gICAgICBlbnRpdHkuZW50aXR5V2lsbExlYXZlVGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICBlbnRpdGllc09uVGhpc1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eUxlZnRUaWxlKCB0aGlzLCBkaXJlY3Rpb24gKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMuc2V0Q09mZnNldCggdGhpcy5iYXNpc0NPZmZzZXQgLSByZWxQb3NbMF0gKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggdGhpcy5iYXNpc1JPZmZzZXQgLSByZWxQb3NbMV0gKTtcclxuICAgIGlmICh3YWl0QW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCB0aGlzLmR1bW15QW5pbWF0aW9uRnVuY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRNb3ZlQW5pbWF0aW9uKHJlbFBvcywgYWJzUG9zKVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdE1vdmUoIGRpcmVjdGlvbiwgcmVxdWVzdENoYWluID0gW10gKSB7XHJcbiAgICByZXF1ZXN0Q2hhaW4ucHVzaChbdGhpcywgZGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBhYnNQb3MgPSB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKGRpcmVjdGlvbiwgJ21vZHVsbycpO1xyXG4gICAgY29uc3QgZW50aXRpZXNPbk5ld1RpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IGFic1BvcyxcclxuICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRoaXNUaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfVxyXG4gICAgfSApLmZpbHRlciggZSA9PiBlICE9PSB0aGlzICYmIGUuY29uc3RydWN0b3IubmFtZSAhPT0gJ0JhY2tncm91bmRUaWxlJyApO1xyXG4gICAgY29uc3Qgc3VjZXNzZXMgPSBlbnRpdGllc09uTmV3VGlsZS5tYXAoIGUgPT4gZS52YWxpZGF0ZU1vdmUoWy4uLnJlcXVlc3RDaGFpbl0pICk7XHJcbiAgICBjb25zdCBsZWF2ZVN1Y2Vzc2VzID0gZW50aXRpZXNPblRoaXNUaWxlLm1hcCggZSA9PiBlLmFsbG93TGVhdmUoWy4uLnJlcXVlc3RDaGFpbl0pICk7XHJcbiAgICBpZiAoc3VjZXNzZXMuaW5jbHVkZXMoIGZhbHNlICkgfHwgbGVhdmVTdWNlc3Nlcy5pbmNsdWRlcyggZmFsc2UgKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE1vdmVBbmltYXRpb24oIHJlbE1vdmVEaXJlY3Rpb24sIHRhcmdldFRpbGVBYnNQb3MgKXtcclxuICAgIHRoaXMuYWRkQW5pbWF0aW9uRnVuY3Rpb24oICdtb3ZlJyxcclxuICAgICAgKCkgPT4gdGhpcy5zZXRNb3ZlQW5pbWF0aW9uT2Zmc2V0KCksXHJcbiAgICAgIHtyZWxNb3ZlRGlyZWN0aW9uLCB0YXJnZXRUaWxlQWJzUG9zfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdmFsaWRhdGVzIGEgbW92ZSBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLiBTaG91bGQgb25seSBiZSBjYWxsZWQgZnJvbSBHaG9zdHlFbnRpdHkuc3RhcnRNb3ZlO1xyXG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdENoYWluIFxyXG4gICAqL1xyXG4gIHZhbGlkYXRlTW92ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICAvL2F2b2lkIG92ZXJmbG93LCBqdXN0IGFsbG93IG1vdmVcclxuICAgIGlmIChyZXF1ZXN0Q2hhaW4ubWFwKCBhID0+IGFbMF0gKS5pbmNsdWRlcyggdGhpcyApKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9hZGQgdGhlIHN0YWNrLW9uLXRvcC1iZWhhdmlvciBmb3IgYWxsIGxheWVyIDE3IGVudGl0aWVzIChleGVwdCBnaG9zdGllcyBtYXliZSlcclxuICAgIGlmICggdGhpcy5sYXllciUxMCA9PT0gNyAmJiByZXF1ZXN0Q2hhaW5bcmVxdWVzdENoYWluLmxlbmd0aC0xXVswXS5sYXllckFkZGVuZCAhPT0gdGhpcy5sYXllckFkZGVuZCApe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbG93TW92ZSA9IHRoaXMuYWxsb3dNb3ZlKCByZXF1ZXN0Q2hhaW4gKTtcclxuICAgIHJldHVybiBhbGxvd01vdmU7XHJcbiAgfVxyXG5cclxuICBhZGRBbmltYXRpb25GdW5jdGlvbiggY2F0ZWdvcnksIGZuYywgdmFsdWVzRm9yQW5pbWF0aW9uT2JqZWN0ID0ge30gKXtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1tjYXRlZ29yeV0pIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbY2F0ZWdvcnldLnB1c2goXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigge2ZuY30sIHZhbHVlc0ZvckFuaW1hdGlvbk9iamVjdCApXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1tjYXRlZ29yeV0gPSBbT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7Zm5jLHN0YXJ0VGltZTogcGVyZm9ybWFuY2Uubm93KCl9LFxyXG4gICAgICAgIHZhbHVlc0ZvckFuaW1hdGlvbk9iamVjdFxyXG4gICAgICApXTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvUmVuZGVyU3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUFuaW1hdGlvbkZ1bmN0aW9uKCBjYXRlZ29yeSwgZHVyYXRpb25PZkxhc3RBbmltYXRpb24sIGZ1bmN0aW9uTmFtZSApe1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgIGlmIChmdW5jdGlvbk5hbWUpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5maW5kSW5kZXgoIGFPID0+IGFPLmZuYy5uYW1lID09PSBmdW5jdGlvbk5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG9sZFN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XVswXS5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbY2F0ZWdvcnldLnNwbGljZSgwLDEpO1xyXG4gICAgICAgIGNvbnN0IG5ld0FuaW1hdGlvbk9iamVjdCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XVswXTtcclxuICAgICAgICBuZXdBbmltYXRpb25PYmplY3Quc3RhcnRUaW1lID0gb2xkU3RhcnRUaW1lICsgZHVyYXRpb25PZkxhc3RBbmltYXRpb247XHJcbiAgICAgICAgbmV3QW5pbWF0aW9uT2JqZWN0LmZuYygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25GdW5jdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVJlbmRlclN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkNoYWluRW1wdGllZChjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkdW1teUFuaW1hdGlvbkZ1bmN0aW9uKCl7fVxyXG5cclxuICBtb3ZlT2Zmc2V0RnVuY3Rpb24oIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0ICl7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAxIC0gTWF0aC5zcXJ0KCB0aW1lU2luY2VBbmltYXRpb25TdGFydC9NT1ZFX0RVUkFUSU9OICk7XHJcbiAgICAvLyBjb25zdCBvZmZzZXQgPSAxIC0gdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQvTU9WRV9EVVJBVElPTlxyXG4gICAgcmV0dXJuIG9mZnNldDtcclxuICB9XHJcblxyXG4gIHNldE1vdmVBbmltYXRpb25PZmZzZXQoKXtcclxuICAgIGNvbnN0IGFuaW1hdGlvbk9iamVjdCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zWydtb3ZlJ11bMF07XHJcbiAgICBjb25zdCB0aW1lU2luY2VBbmltYXRpb25TdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpIC0gYW5pbWF0aW9uT2JqZWN0LnN0YXJ0VGltZTtcclxuICAgIGNvbnN0IHJlbFRhcmdldFBvc2l0aW9uID0gdGhpcy5mb3JtYXRQb3NpdGlvbkFzUmVsYXRpdmVQb3NpdGlvbiggYW5pbWF0aW9uT2JqZWN0LnRhcmdldFRpbGVBYnNQb3MgKTtcclxuICAgIGxldCBhYnNPZmZzZXQgPSB0aGlzLm1vdmVPZmZzZXRGdW5jdGlvbiggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgKTtcclxuICAgIGFic09mZnNldCA9IE1hdGgubWF4KGFic09mZnNldCwgMCk7XHJcbiAgICB0aGlzLnNldENPZmZzZXQoIHJlbFRhcmdldFBvc2l0aW9uWzBdIC0gYWJzT2Zmc2V0ICogYW5pbWF0aW9uT2JqZWN0LnJlbE1vdmVEaXJlY3Rpb25bMF0gKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggcmVsVGFyZ2V0UG9zaXRpb25bMV0gLSBhYnNPZmZzZXQgKiBhbmltYXRpb25PYmplY3QucmVsTW92ZURpcmVjdGlvblsxXSApO1xyXG4gICAgaWYgKHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0ID4gTU9WRV9EVVJBVElPTikge1xyXG4gICAgICB0aGlzLnJlbW92ZUFuaW1hdGlvbkZ1bmN0aW9uKCdtb3ZlJywgTU9WRV9EVVJBVElPTik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2ZXJ0aWNhbE1vdmVTaXplRnVuY3Rpb24oIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0ICl7XHJcbiAgICBjb25zdCBhbmltYXRpb25PYmplY3QgPSB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1snbW92ZSddWzBdO1xyXG4gICAgY29uc3QgeCA9IHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0L1ZFUlRJQ0FMX01PVkVfRFVSQVRJT05cclxuICAgIGxldCBwZXJjZW50Q29tcGxldGUgPSB4Kng7XHJcbiAgICBpZiAoYW5pbWF0aW9uT2JqZWN0Lmp1bXApIHtcclxuICAgICAgcGVyY2VudENvbXBsZXRlID0gNCp4Kih4LTAuNzUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWN0dWFsQmFzZUxheWVyID0gdGhpcy5sYXllckFkZGVuZC8xMDtcclxuICAgIGNvbnN0IHRhcmdldFNpemVGYWN0b3IgPSBNYXRoLnBvdyhNT1ZFX1VQX1NJWkVfSU5DUkVBU0VfRkFDVE9SLCBhbmltYXRpb25PYmplY3QudGFyZ2V0QWJzQmFzZUxheWVyIC0gYWN0dWFsQmFzZUxheWVyKTtcclxuICAgIGNvbnN0IGNoYW5nZUZhY3RvciA9IE1hdGgucG93KE1PVkVfVVBfU0laRV9JTkNSRUFTRV9GQUNUT1IsIGFuaW1hdGlvbk9iamVjdC5jaGFuZ2VJbkJhc2VMYXllcik7XHJcbiAgICBjb25zdCBzdGFydFNpemVGYWN0b3IgPSB0YXJnZXRTaXplRmFjdG9yIC9jaGFuZ2VGYWN0b3I7XHJcbiAgICBjb25zdCBzdGFydFdpZHRoID0gdGhpcy5iYXNpc1dpZHRoKnN0YXJ0U2l6ZUZhY3RvcjtcclxuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gdGhpcy5iYXNpc0hlaWdodCpzdGFydFNpemVGYWN0b3I7XHJcbiAgICBjb25zdCB0YXJnZXRXaWR0aCA9IHRoaXMuYmFzaXNXaWR0aCp0YXJnZXRTaXplRmFjdG9yO1xyXG4gICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gdGhpcy5iYXNpc0hlaWdodCp0YXJnZXRTaXplRmFjdG9yO1xyXG4gICAgY29uc3Qgd2lkdGggPSBzdGFydFdpZHRoKigxLXBlcmNlbnRDb21wbGV0ZSlcclxuICAgICsgdGFyZ2V0V2lkdGgqKHBlcmNlbnRDb21wbGV0ZSk7XHJcbiAgICBjb25zdCBoZWlnaHQgPSBzdGFydEhlaWdodCooMS1wZXJjZW50Q29tcGxldGUpXHJcbiAgICArIHRhcmdldEhlaWdodCoocGVyY2VudENvbXBsZXRlKTtcclxuICAgIHJldHVybiBbIHdpZHRoLCBoZWlnaHQsIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQgXTtcclxuICB9XHJcblxyXG4gIHNldFZlcnRpY2FsTW92ZUFuaW1hdGlvblNpemUoKSB7XHJcbiAgICBjb25zdCBhbmltYXRpb25PYmplY3QgPSB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1snbW92ZSddWzBdO1xyXG4gICAgY29uc3QgdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGFuaW1hdGlvbk9iamVjdC5zdGFydFRpbWU7XHJcbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0IF0gPSB0aGlzLnZlcnRpY2FsTW92ZVNpemVGdW5jdGlvbiggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgKTtcclxuICAgIGlmICh0aW1lU2luY2VBbmltYXRpb25TdGFydCA+IFZFUlRJQ0FMX01PVkVfRFVSQVRJT04pIHtcclxuICAgICAgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQgXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0V2lkdGgoIHdpZHRoLCBmYWxzZSApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIGhlaWdodCwgZmFsc2UgKTtcclxuICAgIGlmICh0aW1lU2luY2VBbmltYXRpb25TdGFydCA+IFZFUlRJQ0FMX01PVkVfRFVSQVRJT04pIHtcclxuICAgICAgdGhpcy5jaGFuZ2VMYXllciggdGhpcy5iYXNpc0xheWVyICsgYW5pbWF0aW9uT2JqZWN0LmNoYW5nZUluQmFzZUxheWVyKjEwICk7XHJcbiAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCBWRVJUSUNBTF9NT1ZFX0RVUkFUSU9OKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclN0YXJ0SGFuZGxlcigpe1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmFuaW1hdGlvbkZ1bmN0aW9ucykuZm9yRWFjaChcclxuICAgICAgZm5jQXJyID0+IGZuY0FyclswXS5mbmMoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrcyBpZiB0aGUgcmVxdWVzdGVkIG1vdmUgaXMgdmFsaWQuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiBieSBDaGlsZC4gUmV0dXJucyBhbGxvd01vdmVcclxuICAgKiBAcGFyYW0geyp9IHJlcXVlc3RDaGFpbiBcclxuICAgKiBAcGFyYW0geyp9IGRpcmVjdGlvbiBcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBhbGxvd01vdmUoIHJlcXVlc3RDaGFpbiApe1xyXG4gICAgcmV0dXJuIHJlcXVlc3RDaGFpblsgcmVxdWVzdENoYWluLmxlbmd0aC0xIF1bMF0ubGF5ZXIlMTAgIT09IHRoaXMubGF5ZXIlMTA7XHJcbiAgfVxyXG5cclxuICBcclxuICBhbGxvd0xlYXZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dQbGFjaW5nKCBlbnRpdHkgKXtcclxuICAgIHJldHVybiBlbnRpdHkubGF5ZXIlMTAgIT09IHRoaXMubGF5ZXIlMTA7XHJcbiAgfVxyXG5cclxuICBhbGxvd0JlaW5nUGxhY2VkKCB0aWxlLCBlZGl0b3JHcmlkICl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlbGV0ZSgpe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5T25TYW1lVGlsZVdhc0RlbGV0ZWQoIGRlbGV0ZWRFbnRpdHkgKXtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGVudGl0eVdpbGxMZWF2ZVRpbGUoIGVudGl0eSwgZGlyZWN0aW9uICl7XHJcbiAgICAvL2RvU29tZXRoaW5nXHJcbiAgfVxyXG5cclxuICBlbnRpdHlMZWZ0VGlsZSggZW50aXR5LCBkaXJlY3Rpb24gKXtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGVudGl0eVdpbGxNb3ZlVG9UaWxlKCBlbnRpdHksIGRpcmVjdGlvbiApIHtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGVudGl0eU1vdmVkVG9UaWxlKCBlbnRpdHksIGRpcmVjdGlvbiApIHtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIC8vZm9yIGxldmVsRG9uZSBjaGVja1xyXG4gIHRhc2tEb25lKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBuZXdFbnRpdHlXYXNQbGFjZWRPblRpbGUoIGVudGl0eSApIHtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbkNoYWluRW1wdGllZCggY2F0ZWdvcnkgKXtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIC8vdXBkYXRlU3RhdGUoKXsgLy9kb1NvbWV0aGluZyB9OyAvL2NvbW1lbnRlZCBvdXQgdG8gc2F2ZSBvbiBwZXJmb3JtYW5jZSBzaW5jZSB0aGUgZnVuY3Rpb24gb25seSBnZXRzIGNhbGxlZCBpZiBpdCBleGlzdHNcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uQmFja2dyb3VuZCBleHRlbmRzIEVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHtcclxuICAgICAgbW91c2VEb3duU3Vic2NyaXB0aW9uczogWydzZWxlY3Rpb24nXSxcclxuICAgIH0sIGFyZ3MgKTtcclxuICAgIHRoaXMub3RoZXJFbnRpdHkgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnZGVhY3RpdmUnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWFjdGl2ZTogJycsXHJcbiAgICAgICAgICAgICBhY3RpdmU6ICcuL3RpbGVfaW1nL3NlbGVjdGlvbl9iYWNrZ3JvdW5kX2FjdGl2ZV9nZW5fMi5qcGcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3RoZXJFbnRpdHkoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLm90aGVyRW50aXR5ID0gZW50aXR5SW5zdGFuY2U7XHJcbiAgICBlbnRpdHlJbnN0YW5jZS5hZGRXaWR0aE11bHRpcGxpZXIoIDAuOCApO1xyXG4gICAgZW50aXR5SW5zdGFuY2UuYWRkSGVpZ2h0TXVsdGlwbGllciggMC44ICk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpe1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnYWN0aXZlJztcclxuICB9XHJcblxyXG4gIGRlYWN0aXZhdGUoKXtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2RlYWN0aXZlJztcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoKXtcclxuICAgIGlmICh0aGlzLm90aGVyRW50aXR5KSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSA9PT0gJ2RlYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggdGhpcyApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudEltYWdlID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggbnVsbCApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaXplKCBlbnRpdHlPblRvcCApe1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRDT2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLndpZHRoKjAuMSApO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRST2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLmhlaWdodCowLjEgKTtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0V2lkdGguY2FsbCggZW50aXR5T25Ub3AsIHRoaXMud2lkdGgqMC44ICk7XHJcbiAgICBFbnRpdHkucHJvdG90eXBlLnNldEhlaWdodC5jYWxsKCBlbnRpdHlPblRvcCwgdGhpcy5oZWlnaHQqMC44ICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKCBhcHAgKXtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5ncmlnYSA9IHRoaXMuYXBwLmdyaWdhO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKXtcclxuICAgIHRoaXMuYXBwLmhvbWVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5hcHAuaG9tZV9zY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmFwcC5zdGF0ZSA9ICdob21lJztcclxuICAgIHRoaXMuYXBwLnN0eWxlLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIGNvbnN0IGxhc3RTaG93blZlcnNpb24gPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZ2V0TGFzdFNob3duVmVyc2lvbigpO1xyXG4gICAgaWYgKHRoaXMuYXBwLnZlcnNpb24gIT09IGxhc3RTaG93blZlcnNpb24pIHtcclxuICAgICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNldExhc3RTaG93blZlcnNpb24odGhpcy5hcHAudmVyc2lvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZXcgVmVyc2lvbiBQb3B1cCEnKTtcclxuICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cChcclxuICAgICAgICAnd3JhcHBlcicsXHJcbiAgICAgICAgYEdob3N0eSBWZXJzaW9uIDEuMC4xIHJlbGVhc2VkIWAsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAge2lkOiAncG9wdXAtY2xvc2UnLCB0ZXh0OiAnUGxheScsIGNsaWNrOiAoKSA9PiB0aGlzLmFwcC5oYW5kbGVQbGF5QnV0dG9uQ2xpY2soKX0sXHJcbiAgICAgICAgXSwgW10sXHJcbiAgICAgICAgJ1doYXRcXCdzIG5ldzonLFxyXG4gICAgICAgICctRGlhbUFORCBHYXRlcy08YnI+LU5ldyBMZXZlbHMtPGJyPi1Ib2xkIGtleXMgdG8gbW92ZSBmYXN0LTxicj4tTGV2ZWwgaW5kZXggaXMgc2hvd24tPGJyPi1BbmltYXRpb25zIHdhaXQgZm9yIGVhY2ggb3RoZXItJ1xyXG4gICAgICApIDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZCgpe1xyXG4gICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICB0aGlzLmFwcC5ob21lX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuYXBwLmhvbWVfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpe1xyXG4gICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUhlbHAgPSB7XHJcbiAgZW5nbGlzaDogXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBoMzogbnVsbCxcclxuICAgICAgcDogJ0dob3N0eSB3YXMgZGV2ZWxvcGVkIGJ5IFRvbSBLb3BvbHQuIFxcbiBDdXJyZW50IFZlcnNpb246IDEuMC4wJ1xyXG4gICAgfVxyXG4gIF1cclxufSIsImltcG9ydCBjbGFzc2ljTGV2ZWxzIGZyb20gJy4vbGV2ZWwvYWxsX2NsYXNzaWNfbGV2ZWxzLmpzb24nO1xyXG5pbXBvcnQgcHJlc2V0TGV2ZWxzIGZyb20gJy4vbGV2ZWwvcHJlc2V0cy5qc29uJztcclxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVscyB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLmdyaWdhID0gdGhpcy5hcHAuZ3JpZ2E7XHJcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdyaWdhLmdyaWRzWydwcmV2aWV3J107XHJcbiAgICB0aGlzLmxldmVscyA9IHtcclxuICAgICAgY2xhc3NpYzogY2xhc3NpY0xldmVscyxcclxuICAgICAgeW91ckxldmVsczogdGhpcy5hcHAubG9jYWxTdG9yYWdlLmdldFlvdXJMZXZlbHMoKSxcclxuICAgICAgcHJlc2V0czogcHJlc2V0TGV2ZWxzLFxyXG4gICAgfVxyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVscy1jb250YWluZXInKTtcclxuICAgIHRoaXMuY2xhc3NpY19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NpYy1idXR0b24nKTtcclxuICAgIHRoaXMueW91ckxldmVsc19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneW91ci1sZXZlbHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLnByZXNldHNfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNldHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB0aGlzLmhhbmRsZUxldmVsc0NvbnRhaW5lckNsaWNrKCBlICkpO1xyXG4gICAgdGhpcy5jbGFzc2ljX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5jaGFuZ2VTdGF0ZSgnY2xhc3NpYycpKTtcclxuICAgIHRoaXMueW91ckxldmVsc19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuY2hhbmdlU3RhdGUoJ3lvdXJMZXZlbHMnKSk7XHJcbiAgICB0aGlzLnByZXNldHNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNoYW5nZVN0YXRlKCdwcmVzZXRzJykpO1xyXG5cclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ2NsYXNzaWMnKTtcclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ3lvdXJMZXZlbHMnKTtcclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoJ3ByZXNldHMnKTtcclxuICAgIHRoaXMuZ2V0Q2xhc3NpY0xldmVsc0hpZ2hlc3RMZXZlbEluZGV4KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCggY2F0ZWdvcnkgPSAnY2xhc3NpYycsIGxldmVsSW5kZXgpIHtcclxuICAgIHRoaXMuYXBwLnN0YXRlID0gJ2xldmVscyc7XHJcbiAgICB0aGlzLmFwcC5sZXZlbHNfc2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgdGhpcy5hcHAubGV2ZWxzX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPSBsZXZlbEluZGV4IHx8ICB0aGlzLmxldmVsc1sgY2F0ZWdvcnkgXS5sZW5ndGgtMSA7XHJcbiAgICB0aGlzLmNoYW5nZVN0YXRlKCBjYXRlZ29yeSwgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUucmVzaXplV3JhcHBlcigpO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsYmFySGVpZ2h0KCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxQb3NUb0xldmVsKCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgfVxyXG5cclxuICBlbmQoKSB7XHJcbiAgICBpZiAodGhpcy5wb3B1cCkge1xyXG4gICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgdGhpcy5hcHAubGV2ZWxzX3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHRoaXMuYXBwLmxldmVsc19idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGUrJ19idXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuZGVsZXRlRGlzcGxheXMoKTtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgcmV0dXJuIG9sZFN0YXRlO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU3RhdGUoIHN0YXRlLCBkZXRhaWxzTGV2ZWxJbmRleCkge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcclxuICAgICAgdGhpc1t0aGlzLnN0YXRlKydfYnV0dG9uJ10uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgICB0aGlzLmRlbGV0ZURpc3BsYXlzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzW3RoaXMuc3RhdGUrJ19idXR0b24nXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuY2xlYXJMZXZlbHNDb250YWluZXIoKTtcclxuICAgIHRoaXMuZmlsbExldmVsc0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IGRldGFpbHNMZXZlbEluZGV4IHx8IHRoaXMubGV2ZWxzWyB0aGlzLnN0YXRlIF0ubGVuZ3RoLTE7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ2NsYXNzaWMnKSB7dGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IHRoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4fTtcclxuICAgIGlmICh0aGlzLmRldGFpbHNMZXZlbEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgdGhpcy5zaG93TGV2ZWxEZXRhaWxzKCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIGlmICh0aGlzLmRldGFpbHNMZXZlbEluZGV4ICE9PSAtMSApIHtcclxuICAgICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsUG9zVG9MZXZlbCggdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NpY0xldmVsc0hpZ2hlc3RMZXZlbEluZGV4KCl7XHJcbiAgICBsZXQgY2xhc3NpY0hpZ2hlc3RMZXZlbE5hbWUgPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZ2V0SGlnaGVzdExldmVsKCdjbGFzc2ljJykgfHwgJ0ludHJvZHVjdGlvbic7XHJcbiAgICBpZiAoY2xhc3NpY0hpZ2hlc3RMZXZlbE5hbWUgPT09ICdFbmQgKG5ldyBsZXZlbHMgc29vbiEpJykge1xyXG4gICAgICBjbGFzc2ljSGlnaGVzdExldmVsTmFtZSA9ICdQYXJraW5nIExlZnQnO1xyXG4gICAgICBjb25zb2xlLmxvZygnRW5kIExldmVsIFZlcnNpb24gMS4wLjAgd2FzIHJlcGxhY2VkIGJ5IGxldmVsIFwiUGFya2luZyBMZWZ0XCInKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsYXNzaWNIaWdoZXN0TGV2ZWwgPSB0aGlzLmxldmVsc1snY2xhc3NpYyddLmZpbmQoIGwgPT4gbC5uYW1lID09PSBjbGFzc2ljSGlnaGVzdExldmVsTmFtZSApO1xyXG4gICAgdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXggPSB0aGlzLmxldmVsc1snY2xhc3NpYyddLmluZGV4T2YoIGNsYXNzaWNIaWdoZXN0TGV2ZWwgKTtcclxuICB9XHJcblxyXG4gIGxldmVsRG9uZSggbGV2ZWxJbmRleCwgY2F0ZWdvcnkgKXtcclxuICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zYXZlTGV2ZWxTb2x2ZWQoIHRoaXMubGV2ZWxzW2NhdGVnb3J5XVtsZXZlbEluZGV4XS5uYW1lLCBjYXRlZ29yeSApO1xyXG4gICAgaWYgKCBjYXRlZ29yeSA9PT0gJ2NsYXNzaWMnICYmIGxldmVsSW5kZXggPT09IHRoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4ICkge1xyXG4gICAgICB0aGlzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleCsrO1xyXG4gICAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2Uuc2F2ZUhpZ2hlc3RMZXZlbCggdGhpcy5sZXZlbHNbJ2NsYXNzaWMnXVt0aGlzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleF0ubmFtZSwgJ2NsYXNzaWMnICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbEh0bWxTdHJpbmcobGV2ZWwsIGkpe1xyXG5cclxuICAgIGxldCBzb2x2ZWRTdHJpbmcgPSBbJ3Vuc29sdmVkJywnc29sdmVkJ11bMCt0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZ2V0TGV2ZWxTb2x2ZWQoIGxldmVsLm5hbWUsIHRoaXMuc3RhdGUgKV07XHJcblxyXG4gICAgbGV0IGxldmVsQmFyQnV0dG9uc1N0cmluZyA9IGA8ZGl2IGNsYXNzPVwibGV2ZWwtcGxheS1idXR0b24gYnV0dG9uICR7c29sdmVkU3RyaW5nfVwiIGRhdGEtbGV2ZWw9XCIke2l9XCI+PGkgY2xhc3M9XCJmYXMgZmEtcGxheVwiPjwvaT48L2Rpdj5gO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwcmVzZXRzJykge1xyXG4gICAgICBsZXZlbEJhckJ1dHRvbnNTdHJpbmcgPSBgPGRpdiBjbGFzcz1cImJ1dHRvbiBsZXZlbC1lZGl0LWJ1dHRvblwiIGRhdGEtaW5kZXg9XCIke2l9XCI+PGkgY2xhc3M9XCJmYXMgZmEtcGVuXCI+PC9pPjwvZGl2PmA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVkaXRvckJ1dHRvbkNvbnRhaW5lciA9ICcnO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICd5b3VyTGV2ZWxzJykge1xyXG4gICAgICBlZGl0b3JCdXR0b25Db250YWluZXIgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3ItYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbGV2ZWwtZWRpdC1idXR0b25cIiBkYXRhLWluZGV4PVwiJHtpfVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbGV2ZWwtZGVsZXRlLWJ1dHRvblwiIGRhdGEtaW5kZXg9XCIke2l9XCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldmVsQmFyVGV4dCA9IGAke2krMX06ICR7bGV2ZWwubmFtZX1gO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICd5b3VyTGV2ZWxzJykge1xyXG4gICAgICBsZXZlbEJhclRleHQgPSBsZXZlbC5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLW5hbWUgYnV0dG9uXCI+JHtsZXZlbEJhclRleHR9PC9kaXY+XHJcbiAgICAgICAgJHtsZXZlbEJhckJ1dHRvbnNTdHJpbmd9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1kZXRhaWxzIGxldmVsLWJhciBoaWRkZW5cIiBpZD1cImxldmVsLWRldGFpbHMtJHtpfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXkgcHJldmlldy1kaXNwbGF5XCIgaWQ9XCJwcmV2aWV3LWRpc3BsYXktJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHByZXZpZXctZGV0YWlscy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctZGlmZmljdWx0eS1saW5lIHByZXZpZXctbGluZVwiPmRpZmZpY3VsdHk6IDxzcGFuIGNsYXNzPVwiZGlmZmljdWx0eS0ke2l9XCI+JHtsZXZlbC5kaWZmaWN1bHR5fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctY3JlYXRvci1saW5lIHByZXZpZXctbGluZVwiPmNyZWF0b3I6IDxzcGFuIGNsYXNzPVwiY3JlYXRvci0ke2l9XCI+JHtsZXZlbC5jcmVhdG9yfTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAke2VkaXRvckJ1dHRvbkNvbnRhaW5lcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIGRlbGV0ZURpc3BsYXlzKCl7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLmdyaWdhLmRpc3BsYXlzKS5maWx0ZXIoIGsgPT4gay5zbGljZSgwLCAxMikgPT09ICdwbGF5LXByZXZpZXcnICkuZm9yRWFjaCggZCA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZ2EuZGVsZXRlRGlzcGxheSggZCApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBjbGVhckxldmVsc0NvbnRhaW5lcigpe1xyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZmlsbExldmVsc0NvbnRhaW5lcigpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdjbGFzc2ljJykge1xyXG4gICAgICBmb3IgKGxldCBsZXZlbEluZGV4ID0gMDsgbGV2ZWxJbmRleCA8PSB0aGlzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleDsgbGV2ZWxJbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLmxldmVsc1t0aGlzLnN0YXRlXVtsZXZlbEluZGV4XTtcclxuICAgICAgICB0aGlzLmluc2VydE5ld0xldmVsSW5MZXZlbENvbnRhaW5lciggbGV2ZWwsIGxldmVsSW5kZXggKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV0uZm9yRWFjaCggKGxldmVsLCBpKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pbnNlcnROZXdMZXZlbEluTGV2ZWxDb250YWluZXIoIGxldmVsLCBpICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluc2VydE5ld0xldmVsSW5MZXZlbENvbnRhaW5lciggbGV2ZWwsIGkgKXtcclxuICAgIGNvbnN0IGh0bWxTdHJpbmcgPSB0aGlzLmdldExldmVsSHRtbFN0cmluZyggbGV2ZWwsIGkgKTtcclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWxTdHJpbmcpO1xyXG4gICAgdGhpcy5ncmlnYS5uZXdEaXNwbGF5KCAncGxheS1wcmV2aWV3LScraSwgJ3ByZXZpZXctZGlzcGxheS0nK2ksIHRoaXMuZ3JpZC5jb2x1bW5zL3RoaXMuZ3JpZC5yb3dzICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVMZXZlbEZyb21MZXZlbHNDb250YWluZXIoIGxldmVsSW5kZXggKXtcclxuICAgIGNvbnN0IGxldmVsRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1kZXRhaWxzLScrbGV2ZWxJbmRleCk7XHJcbiAgICBjb25zdCBsZXZlbEJhciA9IGxldmVsRGV0YWlscy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgdGhpcy5ncmlnYS5kZWxldGVEaXNwbGF5KCAncGxheS1wcmV2aWV3LScrbGV2ZWxJbmRleCApO1xyXG4gICAgbGV2ZWxEZXRhaWxzLnJlbW92ZSgpO1xyXG4gICAgbGV2ZWxCYXIucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbFBvcyggdGhpcy5hcHAuc3R5bGUuc2Nyb2xsUG9zICk7XHJcbiAgfVxyXG4gIFxyXG4gIHNob3dMZXZlbERldGFpbHMoIGRldGFpbHNMZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gZGV0YWlsc0xldmVsSW5kZXg7XHJcbiAgICBjb25zdCBsZXZlbERldGFpbHNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtZGV0YWlscy0nKyBkZXRhaWxzTGV2ZWxJbmRleCk7XHJcbiAgICBsZXZlbERldGFpbHNCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCdwbGF5LXByZXZpZXctJytkZXRhaWxzTGV2ZWxJbmRleCwgJ3ByZXZpZXcnLCB0aGlzLmFwcC5kaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5hcHAuYmFja2dyb3VuZFRpbGVTY2VuZSApO1xyXG4gICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV1bIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggXS5zY2VuZURhdGEgKTtcclxuICAgIHRoaXMuZ3JpZ2EucmVzaXplRGlzcGxheXMoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbGJhckhlaWdodCgpO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsUG9zVG9MZXZlbCggdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGlkZUxldmVsRGV0YWlscygpe1xyXG4gICAgaWYgKCh0aGlzLmRldGFpbHNMZXZlbEluZGV4IHx8IHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPT09IDApICYmIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxEZXRhaWxzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLWRldGFpbHMtJyt0aGlzLmRldGFpbHNMZXZlbEluZGV4KTtcclxuICAgICAgICBsZXZlbERldGFpbHNCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZW1vdmVHcmlkRnJvbURpc3BsYXkoJ3ByZXZpZXcnLCAncGxheS1wcmV2aWV3LScrdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZUxldmVsKCBsZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZGVsZXRlTGV2ZWwoIHRoaXMubGV2ZWxzWyd5b3VyTGV2ZWxzJ11bbGV2ZWxJbmRleF0ubmFtZSApO1xyXG4gICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICB0aGlzLmxldmVsc1t0aGlzLnN0YXRlXS5zcGxpY2UoIGxldmVsSW5kZXgsIDEgKTtcclxuICAgIHRoaXMucmVtb3ZlTGV2ZWxGcm9tTGV2ZWxzQ29udGFpbmVyKCBsZXZlbEluZGV4ICk7XHJcbiAgICB0aGlzLmNsZWFyTGV2ZWxzQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmZpbGxMZXZlbHNDb250YWluZXIoKTtcclxuICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxOYW1lQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbERldGFpbHNCYXIgPSB0YXJnZXQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBpZiAobGV2ZWxEZXRhaWxzQmFyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICAgIHRoaXMuc2hvd0xldmVsRGV0YWlscyggcGFyc2VJbnQobGV2ZWxEZXRhaWxzQmFyLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdwcmVzZXRzJykge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV2ZWxFZGl0QnV0dG9uQ2xpY2tlZCggdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGV2ZWxQbGF5QnV0dG9uQ2xpY2tlZCggdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZXZlbFBsYXlCdXR0b25DbGlja2VkKCB0YXJnZXQgKXtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWxldmVsJykpO1xyXG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLmVuZCgpO1xyXG4gICAgdGhpcy5hcHAucGxheS5zdGFydCggdGhpcy5sZXZlbHNbb2xkU3RhdGVdW2xldmVsSW5kZXhdLCBvbGRTdGF0ZSwgbGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxFZGl0QnV0dG9uQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lbmQoKTtcclxuICAgIHRoaXMuYXBwLmVkaXRvci5zdGFydCggdGhpcy5sZXZlbHNbb2xkU3RhdGVdW2xldmVsSW5kZXhdLCBvbGRTdGF0ZSwgbGV2ZWxJbmRleCApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxEZWxldGVCdXR0b25DbGlja2VkKCB0YXJnZXQgKXtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBwYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ3ByZXZpZXctZGlzcGxheS0nK2xldmVsSW5kZXgsICdBcmUgeW91IFN1cmU/JyxcclxuICAgIFtcclxuICAgICAge2lkOiAncG9wdXAtcGxheS1hZ2FpbicsIHRleHQ6ICdDYW5jZWwnLCBjbGljazogKCkgPT4gdGhpcy5jbG9zZVBvcHVwKCl9LFxyXG4gICAgICB7aWQ6ICdwb3B1cC1uZXh0LWxldmVsJywgdGV4dDogJ0RlbGV0ZScsIGNsaWNrOiAoKSA9PiB0aGlzLmRlbGV0ZUxldmVsKCBsZXZlbEluZGV4ICl9XHJcbiAgICBdICk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVBvcHVwKCl7XHJcbiAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICB0aGlzLnBvcHVwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxldmVsc0NvbnRhaW5lckNsaWNrKCBlICl7XHJcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1uYW1lJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbE5hbWVDbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLXBsYXktYnV0dG9uJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbFBsYXlCdXR0b25DbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLWVkaXQtYnV0dG9uJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbEVkaXRCdXR0b25DbGlja2VkKCBlLnRhcmdldCApO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xldmVsLWRlbGV0ZS1idXR0b24nKSkge1xyXG4gICAgICB0aGlzLmhhbmRsZUxldmVsRGVsZXRlQnV0dG9uQ2xpY2tlZCggZS50YXJnZXQgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmFtZUxldmVsKCBsZXZlbEluZGV4LCBuYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yICl7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0uY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0uZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0ubmFtZSA9IHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5yZW5hbWVMZXZlbCggLy9taWdodCBhZGQgbnVtYmVycyB0byBsZXZlbCBuYW1lO1xyXG4gICAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddWyBsZXZlbEluZGV4IF0ubmFtZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgZGlmZmljdWx0eSxcclxuICAgICAgY3JlYXRvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxldmVsKCBsZXZlbEluZGV4ICl7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2Uuc2F2ZUxldmVsKCB0aGlzLmxldmVsc1sneW91ckxldmVscyddW2xldmVsSW5kZXhdICk7XHJcbiAgICB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UucmVtb3ZlTGV2ZWxTb2x2ZWQoIHRoaXMubGV2ZWxzWyd5b3VyTGV2ZWxzJ11bbGV2ZWxJbmRleF0ubmFtZSwgJ3lvdXJMZXZlbHMnICk7XHJcbiAgfVxyXG5cclxuICBuZXdMZXZlbCggbmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgc2NlbmVEYXRhICl7XHJcbiAgICBsZXQgbGV2ZWwgPSBuZXcgR2hvc3R5TGV2ZWwoIG5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIHNjZW5lRGF0YSApO1xyXG4gICAgbGV2ZWwgPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2Uuc2F2ZU5ld0xldmVsKCBsZXZlbCApOyAvL21pZ2h0IGFkZCBudW1iZXJzIHRvIGxldmVsIG5hbWU7XHJcbiAgICB0aGlzLmxldmVsc1sneW91ckxldmVscyddLnB1c2gobGV2ZWwpO1xyXG4gICAgcmV0dXJuIFsgbGV2ZWwsICd5b3VyTGV2ZWxzJywgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXS5sZW5ndGgtMSBdO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgR2hvc3R5TGV2ZWwge1xyXG4gIGNvbnN0cnVjdG9yKCBuYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yLCBzY2VuZURhdGEgKXtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgdGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcclxuICAgIHRoaXMuc2NlbmVEYXRhID0gc2NlbmVEYXRhO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxldmVsc0hlbHAgPSB7XHJcbiAgZW5nbGlzaDpcclxuICBbXHJcbiAgICAgIHtcclxuICAgICAgICAgIGgzOiAnSGVyZSBhcmUgYWxsIGxldmVsczonLFxyXG4gICAgICAgICAgcDogJ1N3aXRjaCBiZXR3ZWVuIGNhdGVnb3JpZXMgaW4gdGhlIGJhciBvbiB0b3AnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgICBoMzogJ1RoZSBibHVlIHBsYXkgYnV0dG9uJyxcclxuICAgICAgICAgIHA6ICdtZWFucyB5b3UgaGF2ZW5cXCd0IHNvbHZlZCB0aGUgbGV2ZWwgeWV0J1xyXG4gICAgICB9XHJcbiAgXVxyXG59IiwiZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJywgJ1tdJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktaGlnaGVzdC1sZXZlbHM6YCkpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGdob3N0eS1oaWdoZXN0LWxldmVsczpgLCAne30nKTtcclxuICAgIH1cclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sYXN0LXNob3duLXZlcnNpb246YCkpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGdob3N0eS1sYXN0LXNob3duLXZlcnNpb246YCwgJzEuMC4wJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXR1cExldmVsU29sdmVkRm9yQ2F0ZWdvcnkoIGNhdGVnb3J5ICl7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWApKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWAsICdbXScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIGxldmVsLm5hbWUgZXhpc3RzLCBpdCBpbmNyZW1lbnRzIGluZGV4IHVudGlsIHRoZSBsZXZlbC5uYW1lIGRvZXMgbm90IGV4aXN0XHJcbiAgcmVuYW1lTGV2ZWwoIG9sZE5hbWUsIG5ld05hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIGluZGV4ID0gMCApe1xyXG4gICAgbGV0IGluZGV4U3RyaW5nID0gJyc7XHJcbiAgICBpZiAoaW5kZXgpIHsgaW5kZXhTdHJpbmcgPSBgICR7aW5kZXh9YCB9XHJcbiAgICBjb25zdCBuZXdJdGVtS2V5ID0gYGdob3N0eS15b3VyLWxldmVsOiR7bmV3TmFtZStpbmRleFN0cmluZ31gO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5ld0l0ZW1LZXkpICYmIG9sZE5hbWUgIT09IG5ld05hbWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuYW1lTGV2ZWwoIG9sZE5hbWUsIG5ld05hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIGluZGV4KzEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG9sZEl0ZW1LZXkgPSBgZ2hvc3R5LXlvdXItbGV2ZWw6JHtvbGROYW1lfWA7XHJcbiAgICAgIGNvbnN0IGxldmVsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvbGRJdGVtS2V5KSk7XHJcbiAgICAgIGxldmVsLm5hbWUgPSBuZXdOYW1lK2luZGV4U3RyaW5nO1xyXG4gICAgICBsZXZlbC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgbGV2ZWwuY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICAgIGNvbnN0IGxldmVsU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV2ZWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggbmV3SXRlbUtleSwgbGV2ZWxTdHJpbmcgKTtcclxuICAgICAgaWYgKG9sZE5hbWUgIT09IG5ld05hbWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSggb2xkSXRlbUtleSApO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGFsbExldmVsTmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gYWxsTGV2ZWxOYW1lcy5pbmRleE9mKG9sZE5hbWUpO1xyXG4gICAgICBhbGxMZXZlbE5hbWVzLnNwbGljZShpbmRleCwgMSwgbmV3TmFtZStpbmRleFN0cmluZyk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGV2ZWxOYW1lcykgKTtcclxuICAgICAgcmV0dXJuIGxldmVsLm5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlTGV2ZWwoIGxldmVsICl7XHJcbiAgICBjb25zdCBpdGVtS2V5ID0gYGdob3N0eS15b3VyLWxldmVsOiR7bGV2ZWwubmFtZX1gO1xyXG4gICAgY29uc3QgbGV2ZWxTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShsZXZlbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggaXRlbUtleSwgbGV2ZWxTdHJpbmcgKTtcclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSBsZXZlbC5uYW1lIGV4aXN0cywgaXQgaW5jcmVtZW50cyBpbmRleCB1bnRpbCB0aGUgbGV2ZWwubmFtZSBkb2VzIG5vdCBleGlzdFxyXG4gIHNhdmVOZXdMZXZlbCggbGV2ZWwsIGluZGV4ID0gMCApe1xyXG4gICAgbGV0IGluZGV4U3RyaW5nID0gJyc7XHJcbiAgICBpZiAoaW5kZXgpIHsgaW5kZXhTdHJpbmcgPSBgICR7aW5kZXh9YCB9XHJcbiAgICBjb25zdCBpdGVtS2V5ID0gYGdob3N0eS15b3VyLWxldmVsOiR7bGV2ZWwubmFtZStpbmRleFN0cmluZ31gO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGl0ZW1LZXkpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNhdmVOZXdMZXZlbCggbGV2ZWwsIGluZGV4KzEgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldmVsLm5hbWUgKz0gaW5kZXhTdHJpbmc7XHJcbiAgICAgIGNvbnN0IGxldmVsU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV2ZWwpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggaXRlbUtleSwgbGV2ZWxTdHJpbmcgKTtcclxuICAgICAgY29uc3QgYWxsTGV2ZWxOYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycpKTtcclxuICAgICAgYWxsTGV2ZWxOYW1lcy5wdXNoKGxldmVsLm5hbWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycsIEpTT04uc3RyaW5naWZ5KGFsbExldmVsTmFtZXMpICk7XHJcbiAgICAgIHJldHVybiBsZXZlbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFlvdXJMZXZlbHMoKXtcclxuICAgIGNvbnN0IHlvdXJMZXZlbHMgPSBbXTtcclxuICAgIGNvbnN0IGFsbExldmVsTmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSk7XHJcbiAgICBhbGxMZXZlbE5hbWVzLmZvckVhY2goIGxldmVsTmFtZSA9PiB7XHJcbiAgICAgIGNvbnN0IGxldmVsID0gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS15b3VyLWxldmVsOiR7bGV2ZWxOYW1lfWApICk7XHJcbiAgICAgIHlvdXJMZXZlbHMucHVzaCggbGV2ZWwgKTtcclxuICAgIH0gKTtcclxuICAgIHJldHVybiB5b3VyTGV2ZWxzO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTGV2ZWwoIGxldmVsTmFtZSApe1xyXG4gICAgY29uc3QgYWxsTGV2ZWxOYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycpKTtcclxuICAgIGNvbnN0IGluZGV4ID0gYWxsTGV2ZWxOYW1lcy5pbmRleE9mKCBsZXZlbE5hbWUgKTtcclxuICAgIGFsbExldmVsTmFtZXMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnLCBKU09OLnN0cmluZ2lmeShhbGxMZXZlbE5hbWVzKSApO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGdob3N0eS15b3VyLWxldmVsOiR7bGV2ZWxOYW1lfWApO1xyXG4gICAgdGhpcy5yZW1vdmVMZXZlbFNvbHZlZCggbGV2ZWxOYW1lLCAneW91ckxldmVscycgKTtcclxuICB9XHJcblxyXG4gIHNhdmVMZXZlbFNvbHZlZCggbGV2ZWxOYW1lLCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3Qgc29sdmVkTGV2ZWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gKSk7XHJcbiAgICBpZiAoIXNvbHZlZExldmVscy5pbmNsdWRlcyhsZXZlbE5hbWUpKSB7XHJcbiAgICAgIHNvbHZlZExldmVscy5wdXNoKCBsZXZlbE5hbWUgKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWAsIEpTT04uc3RyaW5naWZ5KCBzb2x2ZWRMZXZlbHMgKSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGV2ZWxTb2x2ZWQoIGxldmVsTmFtZSwgY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IHNvbHZlZExldmVscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCkpO1xyXG4gICAgaWYgKHNvbHZlZExldmVscy5pbmNsdWRlcyhsZXZlbE5hbWUpKSB7XHJcbiAgICAgIHNvbHZlZExldmVscy5zcGxpY2UoIHNvbHZlZExldmVscy5pbmRleE9mKCBsZXZlbE5hbWUgKSApO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCwgSlNPTi5zdHJpbmdpZnkoIHNvbHZlZExldmVscyApICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRMZXZlbFNvbHZlZCggbGV2ZWxOYW1lLCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3Qgc29sdmVkTGV2ZWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gKSk7XHJcbiAgICByZXR1cm4gc29sdmVkTGV2ZWxzLmluY2x1ZGVzKCBsZXZlbE5hbWUgKTtcclxuICB9XHJcblxyXG4gIGdldE51bWJlck9mTGV2ZWxzU29sdmVkKCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3Qgc29sdmVkTGV2ZWxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gKSk7XHJcbiAgICByZXR1cm4gc29sdmVkTGV2ZWxzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHNhdmVIaWdoZXN0TGV2ZWwoIGxldmVsTmFtZSwgY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IGhpZ2hlc3RMZXZlbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1oaWdoZXN0LWxldmVsczonKSk7XHJcbiAgICBoaWdoZXN0TGV2ZWxbY2F0ZWdvcnldID0gbGV2ZWxOYW1lO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICdnaG9zdHktaGlnaGVzdC1sZXZlbHM6JywgSlNPTi5zdHJpbmdpZnkoIGhpZ2hlc3RMZXZlbCApICk7XHJcbiAgfVxyXG5cclxuICBnZXRIaWdoZXN0TGV2ZWwoIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBoaWdoZXN0TGV2ZWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktaGlnaGVzdC1sZXZlbHM6JykpO1xyXG4gICAgcmV0dXJuIGhpZ2hlc3RMZXZlbFtjYXRlZ29yeV07XHJcbiAgfVxyXG5cclxuICBnZXRMYXN0U2hvd25WZXJzaW9uKCl7XHJcbiAgICBjb25zdCBsYXN0U2hvd25WZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dob3N0eS1sYXN0LXNob3duLXZlcnNpb24nKTtcclxuICAgIHJldHVybiBsYXN0U2hvd25WZXJzaW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0TGFzdFNob3duVmVyc2lvbiggdmVyc2lvbiApe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dob3N0eS1sYXN0LXNob3duLXZlcnNpb24nLCB2ZXJzaW9uKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL3BvcHVwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheSB7XHJcbiAgICBjb25zdHJ1Y3RvciggYXBwLCBncmlnYSApe1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EgPSBncmlnYTtcclxuICAgICAgICB0aGlzLmdyaWQgPSBncmlnYS5ncmlkc1sncGxheSddO1xyXG4gICAgICAgIHRoaXMucGxheV9sZXZlbF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktbGV2ZWwtbmFtZScpO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzLWxldmVsLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1sZXZlbC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnBsYXlfcmVzdGFydF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1yZXN0YXJ0LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucGxheV91bmRvX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LXVuZG8tYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5X2VkaXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktZWRpdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSB0aGlzLmFwcC5sZXZlbHMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAnY2xhc3NpYyc7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuYXBwLmxldmVscy5sZXZlbHNbdGhpcy5jYXRlZ29yeV1bdGhpcy5sZXZlbEluZGV4XTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmtleVRyYWNrRW50aXR5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpe1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ3BsYXknLCAncGxheScsIHRoaXMuYXBwLmRpc3BsYXlTZXR0aW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApe1xyXG4gICAgICAgIHRoaXMuYXBwLnBsYXlfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXBwLnBsYXlfc2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSAncGxheSc7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUgPSAncGxheSc7XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApO1xyXG4gICAgICAgIGlmICggdGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnICkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0X2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5X2VkaXRfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuY2F0ZWdvcnkgPT09ICdjbGFzc2ljJyApIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheV9lZGl0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hcHAuc3R5bGUucmVzaXplV3JhcHBlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVzaXplRGlzcGxheXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmQoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X3NjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwoIGxldmVsID0gdGhpcy5sZXZlbCwgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LCBsZXZlbEluZGV4ID0gdGhpcy5sZXZlbEluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSBsZXZlbEluZGV4O1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMuYXBwLmJhY2tncm91bmRUaWxlU2NlbmUgKTtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLmxldmVsLnNjZW5lRGF0YSApO1xyXG4gICAgICAgIHRoaXMudW5kb0hpc3RvcnkucHVzaCggdGhpcy5sZXZlbC5zY2VuZURhdGEgKTtcclxuICAgICAgICBsZXQgbGV2ZWxCYXJUZXh0ID0gYCR7dGhpcy5sZXZlbEluZGV4KzF9OiAke3RoaXMubGV2ZWwubmFtZX1gO1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgbGV2ZWxCYXJUZXh0ID0gbGV2ZWwubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5X2xldmVsX25hbWUuaW5uZXJIVE1MID0gbGV2ZWxCYXJUZXh0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlTmV4dFByZXZpb3VzTGV2ZWxCdXR0b25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTmV4dFByZXZpb3VzTGV2ZWxCdXR0b25zKCl7XHJcbiAgICAgICAgaWYgKCB0aGlzLmNhdGVnb3J5ID09PSAnY2xhc3NpYycgKSB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5sZXZlbEluZGV4ID09PSB0aGlzLmFwcC5sZXZlbHMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4ICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X2xldmVsX2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0X2xldmVsX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5sZXZlbEluZGV4ID09PSAwICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmdyaWQuY2xlYXJTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMudW5kb0hpc3RvcnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXZlbERvbmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHtyZXR1cm59O1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5sZXZlbERvbmUoIHRoaXMubGV2ZWxJbmRleCwgdGhpcy5jYXRlZ29yeSApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTmV4dFByZXZpb3VzTGV2ZWxCdXR0b25zKCk7XHJcbiAgICAgICAgbGV0IG5leHRCdXR0b25UZXh0ID0gJ05leHQgbGV2ZWwnO1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHsgbmV4dEJ1dHRvblRleHQgPSAnRWRpdCcgfTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gbmV3IFBvcHVwKCAncGxheS1kaXNwbGF5JywgJ0xldmVsIERvbmUhJyxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtpZDogJ3BvcHVwLXBsYXktYWdhaW4nLCB0ZXh0OiAnUGxheSBhZ2FpbicsIGNsaWNrOiAoKSA9PiB0aGlzLmhhbmRsZVBvcHVwUGxheUFnYWluQ2xpY2soKX0sXHJcbiAgICAgICAgICAgIHtpZDogJ3BvcHVwLW5leHQtbGV2ZWwnLCB0ZXh0OiBuZXh0QnV0dG9uVGV4dCwgY2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlUG9wdXBOZXh0TGV2ZWxDbGljaygpfVxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVVbmRvSGlzdG9yeSgpIHtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5LnB1c2goIHRoaXMuZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhKCkgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBvcHVwTmV4dExldmVsQ2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkgPT09ICdjbGFzc2ljJykge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZU5leHRMZXZlbEJ1dHRvbkNsaWNrKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQbGF5RWRpdEJ1dHRvbkNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBvcHVwUGxheUFnYWluQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5UmVzdGFydEJ1dHRvbkNsaWNrZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcmV2aW91c0xldmVsQnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICBpZiAodGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7cmV0dXJufTtcclxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzW3RoaXMuY2F0ZWdvcnldWy0tdGhpcy5sZXZlbEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU5leHRMZXZlbEJ1dHRvbkNsaWNrKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICAgICAgaWYgKHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7cmV0dXJufTtcclxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZGV4ICE9PSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzW3RoaXMuY2F0ZWdvcnldLmxlbmd0aC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzW3RoaXMuY2F0ZWdvcnldWysrdGhpcy5sZXZlbEluZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckxldmVsKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZExldmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlMZXZlbE5hbWVDbGljayggZSApe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHAubGV2ZWxzLnN0YXJ0KCB0aGlzLmNhdGVnb3J5LCB0aGlzLmxldmVsSW5kZXggKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5UmVzdGFydEJ1dHRvbkNsaWNrZWQoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkge3RoaXMuY2xvc2VQb3B1cCgpfTtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVBsYXlVbmRvQnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICBpZiAodGhpcy51bmRvSGlzdG9yeS5sZW5ndGggPT09IDEpe3JldHVybn07XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICAgICAgdGhpcy51bmRvSGlzdG9yeS5wb3AoKTtcclxuICAgICAgICB0aGlzLmdyaWQuY2xlYXJTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMuYXBwLmJhY2tncm91bmRUaWxlU2NlbmUgKTtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLnVuZG9IaXN0b3J5WyB0aGlzLnVuZG9IaXN0b3J5Lmxlbmd0aC0xIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5RWRpdEJ1dHRvbkNsaWNrKCl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICB0aGlzLmFwcC5lZGl0b3Iuc3RhcnQoIHRoaXMubGV2ZWwsIHRoaXMuY2F0ZWdvcnksIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVQcmV2aW91c0xldmVsQnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICAgICAgdGhpcy5uZXh0X2xldmVsX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVOZXh0TGV2ZWxCdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnBsYXlfbGV2ZWxfbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVQbGF5TGV2ZWxOYW1lQ2xpY2soIGUgKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5X3Jlc3RhcnRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlSZXN0YXJ0QnV0dG9uQ2xpY2tlZCggZSApKTtcclxuICAgICAgICB0aGlzLnBsYXlfdW5kb19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUGxheVVuZG9CdXR0b25DbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnBsYXlfZWRpdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUGxheUVkaXRCdXR0b25DbGljayggZSApKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsYXlIZWxwID0ge1xyXG4gICAgZW5nbGlzaDogXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ0hvdyB0byBtb3ZlOicsXHJcbiAgICAgICAgICAgIHA6ICdVc2UgdGhlIGFycm93IGtleXMgb24geW91ciBrZXlib2FyZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdVbmRvOicsXHJcbiAgICAgICAgICAgIHA6ICdQcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtdW5kb1wiPjwvaT4gaWNvbiB0byB1bmRvIHRoZSBsYXN0IG1vdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnUmVzdGFydDonLFxyXG4gICAgICAgICAgICBwOiAnUHJlc3MgdGhlIDxpIGNsYXNzPVwiZmFzIGZhLWZhc3QtYmFja3dhcmRcIj48L2k+IGljb24gdG8gcmVzdGFydCB0aGUgbGV2ZWwnXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoIGRpc3BsYXlJZCwgbWVzc2FnZSwgYnV0dG9ucywgaW5wdXRGaWVsZHMsIGgzVGV4dCwgcFRleHQpIHtcclxuICAgIHRoaXMuZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXlJZCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdIZWxsbyBXb3JsZCEnO1xyXG4gICAgdGhpcy5idXR0b25zRGF0YSA9IGJ1dHRvbnMgfHwgW107XHJcbiAgICB0aGlzLmlucHV0RmllbGRzID0gaW5wdXRGaWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmgzVGV4dCA9IGgzVGV4dDtcclxuICAgIHRoaXMucFRleHQgPSBwVGV4dDtcclxuXHJcbiAgICB0aGlzLnBvcHVwSFRNTFN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5nZW5lcmF0ZVBvcHVwSFRNTFN0cmluZygpO1xyXG4gICAgdGhpcy5kaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5wb3B1cEhUTUxTdHJpbmcpO1xyXG4gICAgdGhpcy5zZXR1cEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQb3B1cEhUTUxTdHJpbmcoKSB7XHJcbiAgICBsZXQgcG9wdXBUZXh0SFRNTCA9ICcnO1xyXG4gICAgaWYgKCB0aGlzLmgzVGV4dCB8fCB0aGlzLnBUZXh0ICkge1xyXG4gICAgICBsZXQgaDNUZXh0SFRNTCA9ICcnO1xyXG4gICAgICBsZXQgcFRleHRIVE1MID0gJyc7XHJcbiAgICAgIGlmICh0aGlzLmgzVGV4dCkge2gzVGV4dEhUTUwgPSBgPGgzPiR7dGhpcy5oM1RleHR9PC9oMz5gfTtcclxuICAgICAgaWYgKHRoaXMucFRleHQpIHtwVGV4dEhUTUwgPSBgPHA+JHt0aGlzLnBUZXh0fTwvcD5gfTtcclxuICAgICAgcG9wdXBUZXh0SFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXRleHRcIj5cclxuICAgICAgICAke2gzVGV4dEhUTUx9XHJcbiAgICAgICAgJHtwVGV4dEhUTUx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnB1dHNIVE1MU3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLmlucHV0RmllbGRzLmZvckVhY2goIGlEYXRhID0+IHtcclxuICAgICAgaW5wdXRzSFRNTFN0cmluZyArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1pbnB1dC1saW5lXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIiR7aURhdGEubmFtZX1cIj4ke2lEYXRhLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIke2lEYXRhLm5hbWV9LWlucHV0XCIgbmFtZT1cIiR7aURhdGEubmFtZX1cIiBwbGFjZWhvbGRlcj1cIiR7aURhdGEucGxhY2Vob2xkZXJ9XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSApO1xyXG5cclxuICAgIGxldCBidXR0b25zSFRNTFN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5idXR0b25zRGF0YS5mb3JFYWNoKCBiRGF0YSA9PiB7XHJcbiAgICAgIGJ1dHRvbnNIVE1MU3RyaW5nICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBwb3B1cC1idXR0b25cIiBpZD1cIiR7YkRhdGEuaWR9XCI+JHtiRGF0YS50ZXh0fTwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSApXHJcblxyXG4gICAgdGhpcy5wb3B1cEhUTUxTdHJpbmcgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXBcIiBpZD1cIiR7dGhpcy5kaXNwbGF5LmlkfS1wb3B1cFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtbWVzc2FnZVwiPiR7dGhpcy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAke3BvcHVwVGV4dEhUTUx9XHJcbiAgICAgICR7aW5wdXRzSFRNTFN0cmluZ31cclxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWJhciBwb3B1cC1idXR0b25zLWJhclwiPlxyXG4gICAgICAgICR7YnV0dG9uc0hUTUxTdHJpbmd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnNEYXRhLmZvckVhY2goIGJEID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGJELmlkICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKGUpICk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b25DbGljayggZSApe1xyXG4gICAgY29uc3QgYkRhdGEgPSB0aGlzLmJ1dHRvbnNEYXRhLmZpbmQoIGJEID0+IGJELmlkID09PSBlLnRhcmdldC5pZCApO1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZHMuZm9yRWFjaCggaURhdGEgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dEVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlEYXRhLm5hbWUrJy1pbnB1dCcpO1xyXG4gICAgICBsZXQgdmFsdWUgPSBpbnB1dEVsbS52YWx1ZTtcclxuICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7IHZhbHVlID0gaURhdGEucGxhY2Vob2xkZXIgfTtcclxuICAgICAgaW5wdXRWYWx1ZXNbaURhdGEubmFtZV0gPSB2YWx1ZTtcclxuICAgIH0gKTtcclxuICAgIGJEYXRhLmNsaWNrKCBpbnB1dFZhbHVlcyApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpc3BsYXkuaWQrJy1wb3B1cCcpLnJlbW92ZSgpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTdHlsZSB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXInKTtcclxuICAgIHRoaXMuc2Nyb2xsYmFyX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXItYm94Jyk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxzLWNvbnRhaW5lcicpO1xyXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIHRoaXMuc2Nyb2xsUG9zID0gMDtcclxuXHJcbiAgICB0aGlzLnNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHRoaXMuaGFuZGxlTW91c2VNb3ZlT25TY3JvbGxiYXIoZSkpO1xyXG4gICAgdGhpcy5zY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHRoaXMuaGFuZGxlTW91c2VTY3JvbGwoZSkpO1xyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLmhhbmRsZU1vdXNlU2Nyb2xsKGUpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBlID0+IHtcclxuICAgICAgdGhpcy5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgICAgdGhpcy5yZXNpemVXcmFwcGVyKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVzaXplV3JhcHBlcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsUG9zKCB5ICl7XHJcbiAgICBpZiAoeSA8IDApIHtcclxuICAgICAgdGhpcy5zY3JvbGxQb3MgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh5IDwgdGhpcy5sZXZlbHNDb250YWluZXJIZWlnaHQgLSB0aGlzLnNjcm9sbEhlaWdodCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFBvcyA9IHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNjcm9sbFBvcyA9IHRoaXMubGV2ZWxzQ29udGFpbmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgbWFyZ2luLXRvcDogLSR7dGhpcy5zY3JvbGxQb3N9cHg7XHJcbiAgICBgKTtcclxuICB9XHJcblxyXG4gIHNldFNjcm9sbFBvc1RvTGV2ZWwoIGxldmVsSW5kZXggKXtcclxuICAgICAgY29uc3QgbGV2ZWxfYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLWRldGFpbHMtJytsZXZlbEluZGV4KS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICB0aGlzLnNldFNjcm9sbFBvcyggbGV2ZWxfYmFyLm9mZnNldFRvcCApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsYmFySGVpZ2h0KCl7XHJcbiAgICAgIGNvbnN0IGxldmVsc0NvbnRhaW5lckhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5sZXZlbHNfY29udGFpbmVyKS5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyX2JveC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICAgIGhlaWdodDoke2xldmVsc0NvbnRhaW5lckhlaWdodH07XHJcbiAgICAgIGApO1xyXG4gICAgICB0aGlzLmxldmVsc0NvbnRhaW5lckhlaWdodCA9IHBhcnNlSW50KGxldmVsc0NvbnRhaW5lckhlaWdodC5zbGljZSgwLCAtMikpO1xyXG4gICAgICB0aGlzLnJlc2l6ZVNjcm9sbGJhcigpO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplU2Nyb2xsYmFyKCl7XHJcbiAgICB0aGlzLnNjcm9sbEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgICAgLSB0aGlzLmxldmVsc19jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gMjBcclxuICAgICAgKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMubGV2ZWxzX2NvbnRhaW5lcikubWFyZ2luVG9wLnNsaWNlKDAsLTIpKTtcclxuICAgIGlmICh0aGlzLnNjcm9sbEhlaWdodCA+IHRoaXMubGV2ZWxzQ29udGFpbmVySGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyX2JveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsYmFyX2JveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2Nyb2xsYmFyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgIGhlaWdodDoke3RoaXMuc2Nyb2xsSGVpZ2h0fXB4O1xyXG4gICAgYCk7XHJcbiAgfVxyXG5cclxuICByZXNpemVXcmFwcGVyKCl7XHJcbiAgICBpZiAodGhpcy5hcHAuc3RhdGUgPT09ICdob21lJyB8fCAodGhpcy5hcHAuc3RhdGUgPT09ICdsZXZlbHMnKSkge1xyXG4gICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hcHAuc3RhdGUgPT09ICdwbGF5JyAmJiB0aGlzLmFwcC5wbGF5LnN0YXRlID09PSAncGxheScpIHtcclxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAoZG9jdW1lbnRIZWlnaHQtMTUwIDwgKGRvY3VtZW50V2lkdGgtMzIpKjEwLzE2KSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgICAgICB3aWR0aDokeyhkb2N1bWVudEhlaWdodC0xNTApKjE2LzEwICsgMzJ9cHg7XHJcbiAgICAgICAgYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hcHAuc3RhdGUgPT09ICdlZGl0b3InKSB7XHJcbiAgICAgIGNvbnN0IGRvY3VtZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgY29uc3QgZG9jdW1lbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgaWYgKGRvY3VtZW50SGVpZ2h0LTE3OCA8IChkb2N1bWVudFdpZHRoLTMyKSoyOS80MCkge1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICAgICAgd2lkdGg6JHsoZG9jdW1lbnRIZWlnaHQtMTc4KSo0MC8yOSArIDMyfXB4O1xyXG4gICAgICAgIGApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlU2Nyb2xsKGUpe1xyXG4gICAgdGhpcy5zZXRTY3JvbGxQb3MoIHRoaXMuc2Nyb2xsUG9zICsgZS5kZWx0YVkgKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU1vdXNlTW92ZU9uU2Nyb2xsYmFyKGUpe1xyXG4gICAgaWYgKGUuYnV0dG9ucyUyID09PSAxKSB7XHJcbiAgICAgIGlmICghdGhpcy5sb2NrZWQpIHtcclxuICAgICAgICB0aGlzLmxvY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTY3JvbGxQb3ModGhpcy5zY3JvbGxQb3MgKyBlLm1vdmVtZW50WSAqIDEwKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5sb2NrZWQpIHtcclxuICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcclxuICAgICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiY2xhc3MgR3JpZExpbmsge1xyXG4gIGNvbnN0cnVjdG9yKCBncmlkSW5zdGFuY2UsIGRpc3BsYXlTZXR0aW5ncywgZGlzcGxheSApe1xyXG4gICAgdGhpcy5ncmlkSW5zdGFuY2UgPSBncmlkSW5zdGFuY2U7XHJcbiAgICB0aGlzLmRpc3BsYXlTZXR0aW5ncyA9IGRpc3BsYXlTZXR0aW5ncztcclxuICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXk7XHJcblxyXG4gICAgdGhpcy5wcm9jZXNzRGlzcGxheVNldHRpbmdzKCk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xyXG4gICAgdGhpcy5vZmZDYW52YXMgPSBudWxsO1xyXG4gICAgdGhpcy5jdHggPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0Rpc3BsYXlTZXR0aW5ncygpe1xyXG4gICAgdGhpcy5sZWZ0SW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLmxlZnQgKiB0aGlzLmRpc3BsYXkud2lkdGg7XHJcbiAgICB0aGlzLnRvcEluUHggPSB0aGlzLmRpc3BsYXlTZXR0aW5ncy50b3AgKiB0aGlzLmRpc3BsYXkuaGVpZ2h0O1xyXG4gICAgdGhpcy53aWR0aEluUHggPSB0aGlzLmRpc3BsYXlTZXR0aW5ncy53aWR0aCAqIHRoaXMuZGlzcGxheS53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0SW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLmhlaWdodCAqIHRoaXMuZGlzcGxheS5oZWlnaHQ7XHJcbiAgICB0aGlzLnRpbGVXaWR0aEluUHggPSB0aGlzLndpZHRoSW5QeCAvIHRoaXMuZGlzcGxheVNldHRpbmdzLmNvbHVtbnNPblNjcmVlbjtcclxuICAgIHRoaXMudGlsZUhlaWdodEluUHggPSB0aGlzLmhlaWdodEluUHggLyB0aGlzLmRpc3BsYXlTZXR0aW5ncy5yb3dzT25TY3JlZW47XHJcbiAgICB0aGlzLnhTaGlmdCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLmNvbHVtblNoaWZ0ICogdGhpcy50aWxlV2lkdGhJblB4O1xyXG4gICAgdGhpcy55U2hpZnQgPSB0aGlzLmRpc3BsYXlTZXR0aW5ncy5yb3dTaGlmdCAqIHRoaXMudGlsZUhlaWdodEluUHg7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNwbGF5U2V0dGluZ3MoIG5ld0Rpc3BsYXlTZXR0aW5ncyApe1xyXG4gICAgZm9yIChsZXQgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoIG5ld0Rpc3BsYXlTZXR0aW5ncyApKSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVNldHRpbmdzWyBwcm9wZXJ0eSBdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXdDYW52YXMoKXtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMud2lkdGhJblB4O1xyXG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5oZWlnaHRJblB4O1xyXG4gICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6ICR7dGhpcy50b3BJblB4fXB4O1xyXG4gICAgICBsZWZ0OiAke3RoaXMubGVmdEluUHh9cHg7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYCk7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoICdkYXRhLS1ncmlkLW5hbWUnLCB0aGlzLmdyaWRJbnN0YW5jZS5uYW1lICk7XHJcbiAgICB0aGlzLmRpc3BsYXkud3JhcHBlci5hcHBlbmRDaGlsZCggdGhpcy5jYW52YXMgKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMub2ZmQ2FudmFzID0gdGhpcy5jYW52YXMudHJhbnNmZXJDb250cm9sVG9PZmZzY3JlZW4oKTtcclxuICAgIH0gY2F0Y2gge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1lvdXIgQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNhbnZhcy50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpLiBUaGVyZWZvcmUgdGhlIGdhbWUgbWlnaHQgbGFnIGEgYml0Jyk7XHJcbiAgICAgIHRoaXMub2ZmQ2FudmFzID0gdGhpcy5jYW52YXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN0eCA9IHRoaXMub2ZmQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgfVxyXG5cclxuICByZXNpemVDYW52YXMoKXtcclxuICAgIHRoaXMuY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5wcm9jZXNzRGlzcGxheVNldHRpbmdzKCk7XHJcbiAgICB0aGlzLm5ld0NhbnZhcygpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBAY2xhc3NkZXNjIERpc3BsYXlzIHJlbmRlciBhbGwgZW50aXRpZXMgb24gZGlzcGxheWVkIGdyaWRzLiBVc2UgdGhlIGdyaWdhIGNvbmZpZyB0byBjcmVhdGUgdGhlbSBhbmQgdXNlIHRoZSBHcmlnYS5kaXNwbGF5R3JpZCBmdW5jdGlvbiB0byBkaXNwbGF5IGEgZ3JpZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBEaXNwbGF5IHtcclxuICAvKipcclxuICAgKiBAaGlkZWNvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIGNvbmZpZyApe1xyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIHRoaXMubmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXcmFwcGVyIGVsZW1lbnQgb2YgdGhlIERpc3BsYXlcclxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudH1cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICovXHJcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25maWcud3JhcHBlcklkKTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIFdyYXBwZXIncyB3aWR0aEhlaWdodFJhdGlvblxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICovXHJcbiAgICB0aGlzLndpZHRoSGVpZ2h0UmF0aW8gPSBjb25maWcud2lkdGhIZWlnaHRSYXRpbztcclxuXHJcbiAgICB0aGlzLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIHRoaXMuc2V0dXBXcmFwcGVyRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIFxyXG4gICAgdGhpcy5saW5rZWRHcmlkcyA9IHt9Oy8vc2VlIGxpbmtHcmlkIGFuZCBHcmlkTGluayBmb3Igc3RydWN0dXJlXHJcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gW107XHJcblxyXG4gICAgdGhpcy5tb3VzZVggPSAwO1xyXG4gICAgdGhpcy5tb3VzZVkgPSAwO1xyXG4gICAgdGhpcy5ncmlkc0luSG92ZXIgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vcmVzaXplXHJcbiAgcmVzaXplKCl7XHJcbiAgICB0aGlzLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIGZvciAobGV0IGdyaWRMaW5rIG9mIE9iamVjdC52YWx1ZXMoIHRoaXMubGlua2VkR3JpZHMgKSkge1xyXG4gICAgICBncmlkTGluay5yZXNpemVDYW52YXMoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXNpemVXcmFwcGVyKCl7XHJcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy53cmFwcGVyICk7XHJcbiAgICB0aGlzLndpZHRoID0gcGFyc2VGbG9hdCggY29tcHV0ZWRTdHlsZS53aWR0aC5zbGljZSggMCwtMiApICk7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGgvdGhpcy53aWR0aEhlaWdodFJhdGlvO1xyXG4gICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgIGhlaWdodDoke3RoaXMuaGVpZ2h0fXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBgKTsvL2hpZGRlbiBvdmVyZmxvd1xyXG4gIH1cclxuXHJcbiAgc2V0dXBXcmFwcGVyRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMubW91c2VNb3ZlSGFuZGxlcihlKSApO1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgKGUpID0+IHRoaXMubW91c2VMZWF2ZUhhbmRsZXIoZSkgKTtcclxuICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5tb3VzZURvd25IYW5kbGVyKGUpICk7XHJcbiAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB0aGlzLm1vdXNlVXBIYW5kbGVyKGUpICk7XHJcbiAgfVxyXG5cclxuICBsaW5rR3JpZCggZ3JpZCwgZGlzcGxheVNldHRpbmdzICl7XHJcbiAgICBjb25zdCBncmlkTGluayA9IG5ldyBHcmlkTGluayggZ3JpZCwgZGlzcGxheVNldHRpbmdzLCB0aGlzICk7XHJcbiAgICBncmlkTGluay5uZXdDYW52YXMoKTtcclxuICAgIHRoaXMubGlua2VkR3JpZHNbIGdyaWQubmFtZSBdID0gZ3JpZExpbms7XHJcbiAgfVxyXG4gIHVubGlua0dyaWQoIGdyaWROYW1lICl7XHJcbiAgICB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdLmNhbnZhcy5yZW1vdmUoKTtcclxuICAgIGRlbGV0ZSB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlR3JpZERpc3BsYXlTZXR0aW5ncyggZ3JpZE5hbWUsIGRpc3BsYXlTZXR0aW5ncyApe1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS51cGRhdGVEaXNwbGF5U2V0dGluZ3MoIGRpc3BsYXlTZXR0aW5ncyApO1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS5wcm9jZXNzRGlzcGxheVNldHRpbmdzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNwbGF5RGF0YSgpe1xyXG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IE9iamVjdC52YWx1ZXModGhpcy5saW5rZWRHcmlkcykubWFwKFxyXG4gICAgICBncmlkTGluayA9PiBncmlkTGluay5ncmlkSW5zdGFuY2UuZGlzcGxheURhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL2RyYXdpbmdcclxuICBjbGVhckNhbnZhcyggb2ZmQ2FudmFzLCBjdHggKXtcclxuICAgIGN0eC5jbGVhclJlY3QoIDAsMCwgb2ZmQ2FudmFzLndpZHRoLCBvZmZDYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cclxuICAgIHRoaXMudXBkYXRlRGlzcGxheURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2goIC8vQXJyYXkgb2YgR3JpZCBEaXNwbGF5IERhdGFcclxuICAgICAgZ3JpZERpc3BsYXlEYXRhID0+IHtcclxuICAgICAgICBjb25zdCBncmlkTGluayA9IHRoaXMubGlua2VkR3JpZHNbIGdyaWREaXNwbGF5RGF0YS5ncmlkTmFtZSBdO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoIGdyaWRMaW5rLm9mZkNhbnZhcywgZ3JpZExpbmsuY3R4ICk7XHJcbiAgICAgICAgZ3JpZERpc3BsYXlEYXRhLmFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGEuZm9yRWFjaCggLy9BcnJheSBvZiBhbGxMYXllcnNFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhXHJcbiAgICAgICAgICAoIGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YSwgbGF5ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5mb3JFYWNoKCAvL2FycmF5IG9mIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGFcclxuICAgICAgICAgICAgICBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEuaW1nLFxyXG4gICAgICAgICAgICAgICAgICBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnBvcy5jICogZ3JpZExpbmsudGlsZVdpZHRoSW5QeCAtIGdyaWRMaW5rLnhTaGlmdCxcclxuICAgICAgICAgICAgICAgICAgZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5wb3MuciAqIGdyaWRMaW5rLnRpbGVIZWlnaHRJblB4IC0gZ3JpZExpbmsueVNoaWZ0LFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoZ3JpZExpbmsudGlsZVdpZHRoSW5QeCAqIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoZ3JpZExpbmsudGlsZUhlaWdodEluUHggKiBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyggZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS50ZXh0cyApLmZvckVhY2goIHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBncmlkTGluay5jdHguZm9udCA9IGAke3RleHQuc2l6ZSAqIGdyaWRMaW5rLnRpbGVIZWlnaHRJblB4fXB4ICR7dGV4dC5mb250RmFtaWx5fWA7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5maWxsU3R5bGUgPSB0ZXh0LmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBncmlkTGluay5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIChlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnBvcy5jICsgdGV4dC5jT2Zmc2V0KSAqIGdyaWRMaW5rLnRpbGVXaWR0aEluUHggLSBncmlkTGluay54U2hpZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgKGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEucG9zLnIgKyB0ZXh0LnJPZmZzZXQgKyB0ZXh0LnNpemUqMC43NSkgKiBncmlkTGluay50aWxlSGVpZ2h0SW5QeCAtIGdyaWRMaW5rLnlTaGlmdFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9oYW5kbGVyXHJcbiAgbW91c2VMZWF2ZUhhbmRsZXIoIGUgKXtcclxuICAgIHRoaXMuZ3JpZHNJbkhvdmVyLmZvckVhY2goIGdyaWROYW1lID0+IHtcclxuICAgICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS5ncmlkSW5zdGFuY2UubW91c2VMZWF2ZUhhbmRsZXIoIHRoaXMubmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5ncmlkc0luSG92ZXIgPSBbXTtcclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZUhhbmRsZXIoIGUgKXtcclxuICAgIC8vdXBkYXRlIG1vdXNlIHBvc1xyXG4gICAgdGhpcy5tb3VzZVggPSBlLm9mZnNldFg7XHJcbiAgICB0aGlzLm1vdXNlWSA9IGUub2Zmc2V0WTtcclxuICAgIC8vdXBkYXRlIEdyaWRzXHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMubGlua2VkR3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICBjb25zdCBncmlkTW91c2VYID0gdGhpcy5tb3VzZVggLSBncmlkLmxlZnRJblB4ICsgZ3JpZC54U2hpZnQ7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVkgPSB0aGlzLm1vdXNlWSAtIGdyaWQudG9wSW5QeCArIGdyaWQueVNoaWZ0O1xyXG4gICAgICBpZiAoZ3JpZE1vdXNlWCA+PSBncmlkLnhTaGlmdCAmJiBncmlkTW91c2VYIDwgZ3JpZC54U2hpZnQgKyBncmlkLndpZHRoSW5QeFxyXG4gICAgICAgJiYgZ3JpZE1vdXNlWSA+PSBncmlkLnlTaGlmdCAmJiBncmlkTW91c2VZIDwgZ3JpZC55U2hpZnQgKyBncmlkLmhlaWdodEluUHgpIHtcclxuICAgICAgICBpZiAoZ3JpZC5ncmlkSW5zdGFuY2UubW91c2UuZGlzcGxheU5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkc0luSG92ZXIucHVzaCggZ3JpZC5ncmlkSW5zdGFuY2UubmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBncmlkTW91c2VDID0gZ3JpZE1vdXNlWC9ncmlkLnRpbGVXaWR0aEluUHg7XHJcbiAgICAgICAgY29uc3QgZ3JpZE1vdXNlUiA9IGdyaWRNb3VzZVkvZ3JpZC50aWxlSGVpZ2h0SW5QeDtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZU1vdmVIYW5kbGVyKCB0aGlzLm5hbWUsIGdyaWRNb3VzZUMsZ3JpZE1vdXNlUiwgZS5idXR0b25zLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChncmlkLmdyaWRJbnN0YW5jZS5tb3VzZS5kaXNwbGF5TmFtZSA9PT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgZ3JpZC5ncmlkSW5zdGFuY2UubW91c2VMZWF2ZUhhbmRsZXIoIHRoaXMubmFtZSApO1xyXG4gICAgICAgIHRoaXMuZ3JpZHNJbkhvdmVyLnNwbGljZSggdGhpcy5ncmlkc0luSG92ZXIuaW5kZXhPZiggZ3JpZC5ncmlkSW5zdGFuY2UubmFtZSApLCAxICk7XHJcbiAgICAgIH1cclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGUgKXtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5saW5rZWRHcmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVggPSB0aGlzLm1vdXNlWCAtIGdyaWQubGVmdEluUHg7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVkgPSB0aGlzLm1vdXNlWSAtIGdyaWQudG9wSW5QeDtcclxuICAgICAgaWYgKGdyaWRNb3VzZVggPj0gMCAmJiBncmlkTW91c2VYIDwgZ3JpZC53aWR0aEluUHhcclxuICAgICAgICYmIGdyaWRNb3VzZVkgPj0gMCAmJiBncmlkTW91c2VZIDwgZ3JpZC5oZWlnaHRJblB4KSB7XHJcbiAgICAgICAgZ3JpZC5ncmlkSW5zdGFuY2UubW91c2VEb3duSGFuZGxlciggdGhpcy5uYW1lLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuICBtb3VzZVVwSGFuZGxlciggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmxpbmtlZEdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWCA9IHRoaXMubW91c2VYIC0gZ3JpZC5sZWZ0SW5QeDtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWSA9IHRoaXMubW91c2VZIC0gZ3JpZC50b3BJblB4O1xyXG4gICAgICBpZiAoZ3JpZE1vdXNlWCA+PSAwICYmIGdyaWRNb3VzZVggPCBncmlkLndpZHRoSW5QeFxyXG4gICAgICAgJiYgZ3JpZE1vdXNlWSA+PSAwICYmIGdyaWRNb3VzZVkgPCBncmlkLmhlaWdodEluUHgpIHtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZVVwSGFuZGxlciggdGhpcy5uYW1lLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxufSIsImNvbnN0IEpvaSA9IHJlcXVpcmUoJ0BoYXBpL2pvaScpO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBAY2xhc3NkZXNjIFJlcHJlc2VudHMgYSBUZXh0LiBUbyBjcmVhdGUgYSBUZXh0IHVzZSB0aGUgRW50aXR5LmFkZFRleHQgZnVuY3Rpb25cclxuICovXHJcbmNsYXNzIFRleHQge1xyXG4gIC8qKlxyXG4gICAqIEBoaWRlY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggdGV4dFNldHRpbmdzICl7XHJcbiAgICB0aGlzLmlkID0gdGV4dFNldHRpbmdzLmlkO1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFNldHRpbmdzLnRleHQgfHwgXCJUZXh0XCI7XHJcbiAgICB0aGlzLnNpemUgPSB0ZXh0U2V0dGluZ3Muc2l6ZSB8fCAxO1xyXG4gICAgdGhpcy5jb2xvciA9IHRleHRTZXR0aW5ncy5jb2xvciB8fCBcImJsYWNrXCI7XHJcbiAgICB0aGlzLmZvbnRGYW1pbHkgPSB0ZXh0U2V0dGluZ3MuZm9udEZhbWlseSB8fCBcImFyaWFsXCI7XHJcbiAgICB0aGlzLmNPZmZzZXQgPSB0ZXh0U2V0dGluZ3MuY09mZnNldCB8fCAwO1xyXG4gICAgdGhpcy5yT2Zmc2V0ID0gdGV4dFNldHRpbmdzLnJPZmZzZXQgfHwgMDtcclxuICB9XHJcbn1cclxuIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFRleHR+dGV4dFNldHRpbmdzXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIC0gSWQgb2YgdGhlIHRleHRcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW3RleHRdIC0gVGhlIGFjdHVhbCB0ZXh0XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtzaXplXSAtIEhlaWdodCBvZiB0aGUgdGV4dCBpbiByb3dzXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtjb2xvcl0gLSBDb2xvciBvZiB0aGUgdGV4dCAoYW55IHN0YWRhcmQgY29sb3IgZm9ybWF0IHNob3VsZCB3b3JrKVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbZm9udEZhbWlseV0gLSBGb250RmFtaWx5IG9mIHRoZSB0ZXh0XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtjT2Zmc2V0XSAtIGNPZmZzZXQgb2YgdGhlIHRleHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3JPZmZzZXRdIC0gck9mZnNldCBvZiB0aGUgdGV4dFxyXG4gICAqL1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2MgQmFzZSBjbGFzcyBmb3IgYWxsIEVudGl0aWVzLiBDdXN0b21FbnRpdHlDbGFzc2VzIChDaGlsZHMgb2YgRW50aXR5KSBjYW4gYmUgcGFzc2VkIGluIHdpdGggdGhlIGdyaWdhQ29uZmlnIHdoZW4gaW5pdGlhbGl6aW5nIEdyaWdhXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAvL2ltYWdlc1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gRGVmaW5lcyBuYW1lIGFuZCBzb3VyY2Ugb2YgYWxsIEltYWdlcyB0aGUgRW50aXR5IGNhbiB1c2UgYXMgY29zdHVtZS4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGJ5IEN1c3RvbUVudGl0eUNsYXNzZXNcclxuICAgKiBAc3RhdGljXHJcbiAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHN0cmluZz59XHJcbiAgICovXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnJyB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWRJbWFnZXMoIGxvYWRlZENhbGxiYWNrICkge1xyXG4gICAgLy9cInRoaXNcIiByZWZlcnMgdG8gdGhlIHNwZWNpZmljIGVudGl0eSBjbGFzcyBpbmhlcml0aW5nIGZyb20gXCJFbnRpdHlcIlxyXG4gICAgdGhpcy5pbWFnZXMgPSB7fTtcclxuICAgIGZvciAobGV0IFtpbWFnZU5hbWUsIHNyY10gb2YgT2JqZWN0LmVudHJpZXMoIHRoaXMuaW1nU291cmNlcyApKSB7XHJcbiAgICAgIGNvbnN0IGltZyA9IHRoaXMuaW1hZ2VzW2ltYWdlTmFtZV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgaW1nLm9ubG9hZCA9IGxvYWRlZENhbGxiYWNrO1xyXG4gICAgICBpbWcub25lcnJvciA9IGxvYWRlZENhbGxiYWNrO1xyXG4gICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9wYXJhbXNTY2hlbWFcclxuICBzdGF0aWMgZ2V0IHBhcmFtc1NjaGVtYSgpe1xyXG4gICAgcmV0dXJuIEpvaS5vYmplY3QoIHtcclxuICAgICAgd2lkdGg6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDEpLFxyXG4gICAgICBoZWlnaHQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDEpLFxyXG4gICAgICBjT2Zmc2V0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgck9mZnNldDogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIGxheWVyOiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIHJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uOiBKb2kuYm9vbCgpLmRlZmF1bHQoZmFsc2UpLFxyXG4gICAgICBzY2VuZUxvYWRlZFN1YnNjcmlwdGlvbjogSm9pLmJvb2woKS5kZWZhdWx0KGZhbHNlKSxcclxuICAgICAga2V5RG93blN1YnNjcmlwdGlvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkuZGVmYXVsdChbXSksXHJcbiAgICAgIGtleVVwU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VEb3duU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VVcFN1YnNjcmlwdGlvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkuZGVmYXVsdChbXSksXHJcbiAgICAgIG1vdXNlTW92ZVN1YnNjcmlwdGlvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkuZGVmYXVsdChbXSksXHJcbiAgICAgIG1vdXNlRW50ZXJTdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgICBtb3VzZUxlYXZlU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRzIEVudGl0eS4gU2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdpdGggc3VwZXIoKSBmcm9tIGEgY2hpbGQgY2xhc3NcclxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIC0gRW50aXR5UGFyYW1zLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLndpZHRoID0gMV0gLSBEaXNwbGF5ZWQgd2lkdGggb2YgdGhlIGVudGl0eSBpbiBjb2x1bW5zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuaGVpZ2h0ID0gMV0gLSBEaXNwbGF5ZWQgaGVpZ2h0IG9mIHRoZSBlbnRpdHkgaW4gcm93cy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5jT2Zmc2V0ID0gMF0gLSBEaXNwbGF5ZWQgY09mZnNldCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMuck9mZnNldCA9IDBdIC0gRGlzcGxheWVkIHJPZmZzZXQgb2YgdGhlIGVudGl0eSBpbiByb3dzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmxheWVyID0gMF0gLSBMYXllciBhdCB3aGljaCB0aGUgdGhlIGVudGl0eSBpcyBkaXNwbGF5ZWQuXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1zLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uID0gZmFsc2VdIC0gVHJ1ZSB0byBzdWJzY3JpYmUgdGhlIGVudGl0eSB0byB0aGUgcmVuZGVyU3RhcnQgRXZlbnRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb24gPSBmYWxzZV0gLSBUcnVlIHRvIHN1YnNjcmliZSB0aGUgZW50aXR5IHRvIHRoZSBzY2VuZUxvYWRlZCBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMua2V5RG93blN1YnNjcmlwdGlvbnMgPSBbXV0gLSBBcnJheSBvZiBrZXlzIGZvciB3aGljaCB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIGtleURvd24gRXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbcGFyYW1zLmtleVVwU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGtleXMgZm9yIHdoaWNoIHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUga2V5VXAgRXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbcGFyYW1zLm1vdXNlRG93blN1YnNjcmlwdGlvbnMgPSBbXV0gLSBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBtb3VzZURvd24gRXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbcGFyYW1zLm1vdXNlVXBTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUgbW91c2VVcCBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlTW92ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMgPSBbXV0gLSBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBtb3VzZUVudGVyIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlTGVhdmUgRXZlbnRcclxuICAgKiBAcGFyYW0ge09iamVjdH0gYXJncyAtIFRoZSBPYmplY3QgcGFzc2VkIGluIHRvIGFsbCBDdXN0b21FbnRpdHlDbGFzc2VzIGFzIHNlY29uZCBhcmd1bWVudCB3aGVuIGNvbnN0cnVjdGVkIGJ5IHRoZSBHcmlnYSBGYW1ld29ya1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIC8vdmFsaWRhdGUgUGFyYW1zXHJcbiAgICBsZXQgdmFsaWRQYXJhbXM7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YWxpZFBhcmFtcyA9IEpvaS5hdHRlbXB0KCBwYXJhbXMsIEVudGl0eS5wYXJhbXNTY2hlbWEgKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGUubmFtZSA9ICdHcmlnYUVudGl0eVBhcmFtc0Vycm9yJztcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0IFByb3BlcnRpZXNcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoZSBlbnRpdGllcyBjIHBvc2l0aW9uXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYyA9IGFyZ3MuYztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoZSBlbnRpdGllcyByIHBvc2l0aW9uXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuciA9IGFyZ3MucjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRydWUsIGlmIGVudGl0eSBpcyBkZXRhY2hlZFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5kZXRhY2hlZCA9IGFyZ3MuZGV0YWNoZWQ7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5ZWQgd2lkdGggb2YgdGhlIGVudGl0eSBpbiBjb2x1bW5zXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2lkdGggPSB2YWxpZFBhcmFtcy53aWR0aDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIERpc3BsYXllZCBoZWlnaHQgb2YgdGhlIGVudGl0eSBpbiByb3dzXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuaGVpZ2h0ID0gdmFsaWRQYXJhbXMuaGVpZ2h0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheWVkIGNPZmZzZXQgb2YgdGhlIGVudGl0eSBpbiBjb2x1bW5zXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY09mZnNldCA9IHZhbGlkUGFyYW1zLmNPZmZzZXQ7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5ZWQgck9mZnNldCBvZiB0aGUgZW50aXR5IGluIHJvd3NcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yT2Zmc2V0ID0gdmFsaWRQYXJhbXMuck9mZnNldDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIExheWVyIGF0IHdoaWNoIHRoZSB0aGUgZW50aXR5IGlzIGRpc3BsYXllZC5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5sYXllciA9IHZhbGlkUGFyYW1zLmxheWVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVHJ1ZSBpZiB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIHJlbmRlclN0YXJ0IEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uID0gdmFsaWRQYXJhbXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb247XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUcnVlIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2NlbmVMb2FkZWQgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb24gPSB2YWxpZFBhcmFtcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGtleXMgZm9yIHdoaWNoIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUga2V5RG93biBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5rZXlEb3duU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGtleXMgZm9yIHdoaWNoIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUga2V5VXAgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLmtleVVwU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlRG93biBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLm1vdXNlRG93blN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLm1vdXNlVXBTdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VNb3ZlIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlRW50ZXIgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZUxlYXZlIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGdyaWQgdGhlIGVudGl0eSBpcyBpblxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7R3JpZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5ncmlkID0gYXJncy5ncmlkO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGdyaWdhIHRoZSBlbnRpdHkgaXMgaW5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge0dyaWdhfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmdyaWdhID0gdGhpcy5ncmlkLmdyaWdhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIE5hbWUgb2YgdGhlIGVudGl0aWUncyBjdXJyZW50IGltYWdlLiBTaG91bGQgYmUgc2V0IGJ5IGFsbCBlbnRpdGllc1xyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAnZGVmYXVsdCc7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBDb250YWlucyBhbGwgdGV4dHMgb2YgdGhlIGVudGl0eS4gVGhlIHRleHQncyBpZCBpcyB1c2VkIGFzIGtleVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgVGV4dD59XHJcbiAgICAgKi9cclxuICAgIHRoaXMudGV4dHMgPSB7fTtcclxuXHJcbiAgICAvL2luaXRpYWxpc2UgRXZlbnRTdWJzY3JpcHRpb25zXHJcbiAgICBpZiAodGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1JlbmRlclN0YXJ0KCB0aGlzICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1NjZW5lTG9hZGVkKCB0aGlzICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLmZvckVhY2goIGtleSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvS2V5RG93biggdGhpcywga2V5ICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBrZXkgPT4ge1xyXG4gICAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleVVwKCB0aGlzLCBrZXkgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VEb3duKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VVcCggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VNb3ZlKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VFbnRlciggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuZm9yRWFjaCggZGlzcGxheU5hbWUgPT4ge1xyXG4gICAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlTGVhdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvL2NhbGxlZCBhdCBldmVyeSBSZW5kZXJcclxuICBnZXQgZGlzcGxheURhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbWc6IHRoaXMuY29uc3RydWN0b3IuaW1hZ2VzWyB0aGlzLmN1cnJlbnRJbWFnZSBdLFxyXG4gICAgICBwb3MgOiB0aGlzLmNvbXB1dGVkUG9zLFxyXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgdGV4dHM6IHRoaXMudGV4dHMsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY29tcHV0ZWRQb3MoKSB7XHJcbiAgICBjb25zdCBwb3MgPSB7fTtcclxuICAgIHBvcy5jID0gdGhpcy5jICsgdGhpcy5jT2Zmc2V0O1xyXG4gICAgcG9zLnIgPSB0aGlzLnIgKyB0aGlzLnJPZmZzZXQ7XHJcbiAgICByZXR1cm4gcG9zO1xyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbnMgdG8gb3ZlcnJpZGVcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3ZXRoZXIgdGhlIEVudGl0eSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gdGhlIHNjZW5lRGF0YSBhdCBHcmlkLmdldEN1cnJlbnRTY2VuZURhdGFcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAqL1xyXG4gIGluY2x1ZGVJblNjZW5lRGF0YSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgcGFyYW1zIG9iamVjdCB1c2VkIGJ5IGdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YS4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGlmIHlvdSB3YW50IHRvIHNhdmUgcGFyYW1zIGF0IGdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YVxyXG4gICAqIEByZXR1cm5zIHtPYmplY3Q8c3RyaW5nLCAqPn1cclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBnZXRDdXJyZW50UGFyYW1zKCkgeyAvL3VzZWQgdG8gZ2V0Q3VycmVudFNjZW5lRGF0YVxyXG4gICAgcmV0dXJuIHt9OyBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBHYW1lIExvb3AuIEdldCdzIGNhbGxlZCBiZWZvcmUgZXZlcnkgcmVuZGVyIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgcmVuZGVyU3RhcnQgRXZlbnQuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBkbyBkeW5hbWljIG1vdGlvbnMvYW5pbWF0aW9uc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lUGFzc2VkIC0gVGltZSBwYXNzZWQgc2luY2UgbGFzdCByZW5kZXJcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICByZW5kZXJTdGFydEhhbmRsZXIoIHRpbWVQYXNzZWQgKXtcclxuICAgIGNvbnNvbGUubG9nKCAncGVyZm9ybWFuY2Uubm93KCk6ICcgKyBwZXJmb3JtYW5jZS5ub3coKSApO1xyXG4gICAgY29uc29sZS5sb2coICd0aW1lUGFzc2VkOiAnICsgdGltZVBhc3NlZCApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiBhbGwgZW50aXRpZXMgYXJlIGxvYWRlZCBvbnRvIHRoaXMuZ3JpZCBpZiB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIHNjZW5lTG9hZGVkIEV2ZW50LiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gZXhlY3V0ZSBpbml0YWwgY29kZSB3aGljaCByZXF1aXJlcyB0aGUgcHJlc2VuY2Ugb2YgYWxsIGVudGl0aWVzLlxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIHNjZW5lTG9hZGVkSGFuZGxlcigpe1xyXG4gICAgY29uc29sZS5sb2coIHRoaXMuY29uc3RydWN0b3IubmFtZSArICcgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2NlbmVMb2FkZWRFdmVudCBidXQgZG9lc25cXCd0IHVzZSBpdCcgKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gYSBrZXkgaXMgcHJlc3NlZCBpZiB0aGUgZW50aXR5IHN1YnNjcmliZWQgdG8gdGhlIGtleURvd24gRXZlbnQgZm9yIHRoYXQga2V5LiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gZ2l2ZSBjb250cm9sbHMgdG8gdGhlIHBsYXllclxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHByb3BlcnR5IG9mIHRoZSBqYXZhc2NyaXB0IGtleURvd24gRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBrZXlEb3duSGFuZGxlcigga2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZygga2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEga2V5IGlzIHJlbGVhc2VkIGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUga2V5VXAgRXZlbnQgZm9yIHRoYXQga2V5LiBDYW4gYmUgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGtleURvd25IYW5kbGVyIHRvIHRyZWF0IGtleXMgYXMgYnV0dG9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBUaGUga2V5IHByb3BlcnR5IG9mIHRoZSBqYXZhc2NyaXB0IGtleVVwIEV2ZW50XHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAga2V5VXBIYW5kbGVyKCBrZXkgKXtcclxuICAgIGNvbnNvbGUubG9nKCBrZXkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEgY2xpY2sgb2NjdXJzIG9uIGEgZGlzcGxheSBpZiB0aGUgZW50aXR5IHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlRG93biBFdmVudCBmb3IgdGhhdCBkaXNwbGF5LiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gZXhlY3V0ZSBjb2RlIG9uIGNsaWNrXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheSB0aGUgbW91c2VEb3duIEV2ZW50IG9jY3VyZWQgb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VDIC0gQy1wb3NpdGlvbiBvZiB0aGUgbW91c2VEb3duIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlRG93biBFdmVudFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApe1xyXG4gICAgY29uc29sZS5sb2coIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiBhIGNsaWNrIGVuZHMgb24gYSBkaXNwbGF5IGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VVcCBFdmVudCBmb3IgdGhhdCBkaXNwbGF5LiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gdG8gZXhlY3V0ZSBjb2RlIG9uIGNsaWNrLXJlbGVhc2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5IHRoZSBtb3VzZVVwIEV2ZW50IG9jY3VyZWQgb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VDIC0gQy1wb3NpdGlvbiBvZiB0aGUgbW91c2VVcCBFdmVudFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZVIgLSBSLXBvc2l0aW9uIG9mIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VVcEhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApe1xyXG4gICAgY29uc29sZS5sb2coIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiBhIG1vdXNlTW92ZSBFdmVudCBvY2N1cnMgb24gYSBkaXNwbGF5IGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VNb3ZlIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIENhbiBiZSB1c2VkIGZvciBkcmFnLWFuZC1kcm9wIGluIGNvbWJpbmF0aW9uIHdpdGggbW91c2VEb3duIGFuZCBtb3VzZVVwIEV2ZW50c1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlTW92ZSBFdmVudCBvY2N1cmVkIG9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlQyAtIEMtcG9zaXRpb24gb2YgdGhlIG1vdXNlTW92ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZVIgLSBSLXBvc2l0aW9uIG9mIHRoZSBtb3VzZU1vdmUgRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBtb3VzZU1vdmVIYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIgKXtcclxuICAgIGNvbnNvbGUubG9nKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGVudGVycyB0aGUgdGlsZSB0aGUgZW50aXR5IGlzIGluIGFuZCB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlTW92ZSBFdmVudCBmb3IgdGhhdCBkaXNwbGF5LiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5IHRoZSBtb3VzZUVudGVyIEV2ZW50IG9jY3VyZWQgb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VDIC0gQy1wb3NpdGlvbiBvZiB0aGUgbW91c2VFbnRlciBFdmVudFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZVIgLSBSLXBvc2l0aW9uIG9mIHRoZSBtb3VzZUVudGVyIEV2ZW50XHJcbiAgICogQHBhcmFtIHtib29sZWFufSBtb3VzZVByZXNzZWQgLSBJZiB0aGUgbW91c2UgaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlRW50ZXJIYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApe1xyXG4gICAgY29uc29sZS5sb2coIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIHRpbGUgdGhlIGVudGl0eSBpcyBpbiBhbmQgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZUxlYXZlIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlTGVhdmUgRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZUxlYXZlIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlTGVhdmUgRXZlbnRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdXNlUHJlc3NlZCAtIElmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgcHJlc3NlZCBkb3duXHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VMZWF2ZUhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICB9XHJcblxyXG4gIC8vZnVuY3Rpb25zIHRvIHVzZVxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIGxheWVyIG9mIHRoZSBlbnRpdHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3TGF5ZXIgLSBOZXcgbGF5ZXIgdGhlIGVudGl0eSBzaG91bGQgYmUgZGlzcGxheWVkIG9uXHJcbiAgICovXHJcbiAgY2hhbmdlTGF5ZXIoIG5ld0xheWVyICl7XHJcbiAgICB0aGlzLmdyaWQucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tTGF5ZXJEYXRhKCB0aGlzICk7XHJcbiAgICB0aGlzLmxheWVyID0gbmV3TGF5ZXI7XHJcbiAgICB0aGlzLmdyaWQuYWRkRW50aXR5SW5zdGFuY2VUb0xheWVyRGF0YSggdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgZGlzcGxheVNldHRpbmdzIG9mIHRoaXMuZ3JpZCBvbiBhIGRpc3BsYXkuIFNldHRpbmdzIHlvdSBkb24ndCBzcGVjaWZ5IHN0YXkgdGhlIHNhbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5IHRvIGNoYW5nZSB0aGUgZ3JpZERpc3BsYXlTZXR0aW5nc1xyXG4gICAqIEBwYXJhbSB7ZGlzcGxheVNldHRpbmdzfSBkaXNwbGF5U2V0dGluZ3MgLSBPYmplY3QgY29udGFpbmluZyBhbGwgZGlzcGxheVNldHRpbmdzIHlvdSB3YW4ndCB0byBjaGFuZ2VcclxuICAgKi9cclxuICBjaGFuZ2VHcmlkRGlzcGxheVNldHRpbmdzKCBkaXNwbGF5TmFtZSwgZGlzcGxheVNldHRpbmdzICl7XHJcbiAgICB0aGlzLmdyaWQuZGlzcGxheXNbIGRpc3BsYXlOYW1lIF0uY2hhbmdlR3JpZERpc3BsYXlTZXR0aW5ncyggdGhpcy5ncmlkLm5hbWUsIGRpc3BsYXlTZXR0aW5ncyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgY09mZnNldCBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjT2Zmc2V0IFxyXG4gICAqL1xyXG4gIHNldENPZmZzZXQoIGNPZmZzZXQgKXtcclxuICAgIHRoaXMuY09mZnNldCA9IGNPZmZzZXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGVudGl0aWVzIHJPZmZzZXQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gck9mZnNldCBcclxuICAgKi9cclxuICBzZXRST2Zmc2V0KCByT2Zmc2V0ICl7XHJcbiAgICB0aGlzLnJPZmZzZXQgPSByT2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgaGVpZ2h0IHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBcclxuICAgKi9cclxuICBzZXRIZWlnaHQoIGhlaWdodCApe1xyXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGVudGl0aWVzIHdpZHRoIHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFxyXG4gICAqL1xyXG4gIHNldFdpZHRoKCB3aWR0aCApe1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyB0aGUgZW50aXR5XHJcbiAgICovXHJcbiAgZGVsZXRlKCl7XHJcbiAgICB0aGlzLmdyaWQuZGVsZXRlRW50aXR5SW5zdGFuY2UoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEF0dGFjaGVzIHRoZSBkZXRhY2hlZCBlbnRpdHkgdG8gdGhlIGdyaWQgYXQgKGMsIHIpXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMgLSBDb2x1bW5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gciAtIFJvd1xyXG4gICAqL1xyXG4gIGF0dGFjaCggYywgciApe1xyXG4gICAgaWYgKCF0aGlzLmRldGFjaGVkKXsgcmV0dXJuIGNvbnNvbGUud2FybignY2FuXFwndCBhdHRhY2ggYW4gYWxyZWFkeSBhdHRhY2hlZCBFbnRpdHknKSB9O1xyXG5cclxuICAgIHRoaXMuZGV0YWNoZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYyA9IE1hdGgucm91bmQoIGMgKTtcclxuICAgIHRoaXMuciA9IE1hdGgucm91bmQoIHIgKTtcclxuICAgIHRoaXMuZ3JpZC5hdHRhY2hFbnRpdHlJbnN0YW5jZSggdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0YWNoZXMgdGhlIGF0dGFjaGVkIGVudGl0eS4gVGhlIHBvc2l0aW9uIG9mIHRoZSBlbnRpdHkgd2lsbCBzdGF5IHRoZSBzYW1lXHJcbiAgICovXHJcbiAgZGV0YWNoKCl7XHJcbiAgICBpZiAodGhpcy5kZXRhY2hlZCl7IHJldHVybiBjb25zb2xlLndhcm4oJ2NhblxcJ3QgZGV0YWNoIGFuIGFscmVhZHkgZGV0YWNoZWQgRW50aXR5JykgfTtcclxuICAgIHRoaXMuZGV0YWNoZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5ncmlkLmRldGFjaEVudGl0eUluc3RhbmNlKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdHJpbmcgY29udGFpbmluZyBhIGRpcmVjdGlvbi4gUG9zc2libGUgYXJlOiAndG9wJywndXAnLCdub3J0aCc7ICdyaWdodCcsJ2Vhc3QnOyAnYm90dG9tJywnZG93bicsJ3NvdXRoJzsgJ2xlZnQnLCd3ZXN0JzsgJ2hlcmUnLCdzdGF5Jy4gVGhlIGRpcmVjdGlvblN0cmluZyBpc24ndCBjYXNlIHNlbnNpdGl2ZVxyXG4gICAqIEB0eXBlZGVmIHtzdHJpbmd9IGRpcmVjdGlvblN0cmluZ1xyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBBcnJheSBvZiB0aGUgZm9ybSBbZGMsIGRyXSByZXByZXNlbnRpbmcgYSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZW50aXRpZXMgY3VycmVudCBwb3NpdGlvbi5cclxuICAgKiBAdHlwZWRlZiB7bnVtYmVyW119IHJlbGF0aXZlUG9zaXRpb25cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogT2JqZWN0IG9mIHRoZSBmb3JtIHtjLCByfSByZXByZXNlbnRpbmcgYW4gYWJzb2x1dGUgcG9zaXRpb24uXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gYWJzb2x1dGVQb3NpdGlvblxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IHJcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogVHVybnMgYW55IHBvc2l0aW9uIGludG8gYSBhYnNvbHV0ZVBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtkaXJlY3Rpb25TdHJpbmd8cmVsYXRpdmVQb3NpdGlvbnxhYnNvbHV0ZVBvc2l0aW9ufSBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYm9yZGVyTW9kZT1cImlnbm9yZVwiXSAtIHdoYXQgdG8gZG8gd2hlbiB0aGUgcG9zaXRpb24gaXMgb2ZmIHRoZSBncmlkLiBQb3NzaWJsZSBhcmU6IGlnbm9yZSwgbW9kdWxvXHJcbiAgICogQHJldHVybnMge2Fic29sdXRlUG9zaXRpb259IGFic29sdXRlUG9zaXRpb25cclxuICAgKi9cclxuICBmb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbiggcG9zaXRpb24sIGJvcmRlck1vZGUgPSAnaWdub3JlJyApe1xyXG4gICAgbGV0IGFic1BvcyA9IG51bGw7XHJcbiAgICBpZiAocG9zaXRpb24uY29uc3RydWN0b3IgPT09IEFycmF5KSB7Ly9yZWwuIHBvcyBbZGMsIGRyXVxyXG4gICAgICBhYnNQb3MgPSB7XHJcbiAgICAgICAgYzogdGhpcy5jICsgcG9zaXRpb25bMF0sXHJcbiAgICAgICAgcjogdGhpcy5yICsgcG9zaXRpb25bMV0sXHJcbiAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ29iamVjdCcpIHsvL2Ficy4gY29vcmRzIHtjLCByfVxyXG4gICAgICBhYnNQb3MgPSBwb3NpdGlvbjtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykgey8vZGlyZWN0aW9uIHN0cmluZ1xyXG4gICAgICBhYnNQb3MgPSBhYnNQb3MgPSB7YzogdGhpcy5jLCByOiB0aGlzLnJ9O1xyXG4gICAgICBpZiAoWyd0b3AnLCd1cCcsJ25vcnRoJ10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIGFic1Bvcy5yLS07XHJcbiAgICAgIH0gZWxzZSBpZiAoWydyaWdodCcsJ2Vhc3QnXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgYWJzUG9zLmMrKztcclxuICAgICAgfSBlbHNlIGlmIChbJ2JvdHRvbScsJ2Rvd24nLCdzb3V0aCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICBhYnNQb3MucisrO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnbGVmdCcsJ3dlc3QnXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgYWJzUG9zLmMtLTtcclxuICAgICAgfSBlbHNlIGlmIChbJ2hlcmUnLCdzdGF5J10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIC8vbm90aGluZ1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCBib3JkZXJNb2RlID09PSAnbW9kdWxvJyApIHtcclxuICAgICAgYWJzUG9zLmMgPSAoYWJzUG9zLmMgKyB0aGlzLmdyaWQuY29sdW1ucykgJSB0aGlzLmdyaWQuY29sdW1ucztcclxuICAgICAgYWJzUG9zLnIgPSAoYWJzUG9zLnIgKyB0aGlzLmdyaWQucm93cykgJSB0aGlzLmdyaWQucm93cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYWJzUG9zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUG9vcmx5IHRlc3RldCBhdCB0aGUgbW9tZW50ISFcclxuICAgKiBAcGFyYW0ge2RpcmVjdGlvblN0cmluZ3xyZWxhdGl2ZVBvc2l0aW9ufGFic29sdXRlUG9zaXRpb259IHBvc2l0aW9uIC0gcG9zaXRpb24gdG8gY29udmVydFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBib3JkZXJNb2RlIC0gZG9lcyBub3RoaW5nIGF0IHRoZSBtb21lbnRcclxuICAgKiBAcmV0dXJucyB7cmVsYXRpdmVQb3NpdGlvbn1cclxuICAgKi9cclxuICBmb3JtYXRQb3NpdGlvbkFzUmVsYXRpdmVQb3NpdGlvbiggcG9zaXRpb24sIGJvcmRlck1vZGUgPSAnaWdub3JlJyApe1xyXG4gICAgbGV0IHJlbFBvcyA9IG51bGw7XHJcbiAgICBpZiAocG9zaXRpb24uY29uc3RydWN0b3IgPT09IEFycmF5KSB7IHJlbFBvcyA9IHBvc2l0aW9uIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKFsndG9wJywndXAnLCdub3J0aCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICByZWxQb3MgPSBbMCwgLTFdO1xyXG4gICAgICB9IGVsc2UgaWYgKFsncmlnaHQnLCdlYXN0J10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIHJlbFBvcyA9IFsxLCAwXTtcclxuICAgICAgfSBlbHNlIGlmIChbJ2JvdHRvbScsJ2Rvd24nLCdzb3V0aCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICByZWxQb3MgPSBbMCwgMV07XHJcbiAgICAgIH0gZWxzZSBpZiAoWydsZWZ0Jywnd2VzdCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICByZWxQb3MgPSBbLTEsIDBdO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnaGVyZScsJ3N0YXknXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgcmVsUG9zID0gWzAsIDBdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBwb3NpdGlvbiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgcmVsUG9zID0gWyBwb3NpdGlvbi5jIC0gdGhpcy5jLCBwb3NpdGlvbi5yIC0gdGhpcy5yIF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVsUG9zO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZXMgZW50aXR5IHRvIG5ld1Bvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtkaXJlY3Rpb25TdHJpbmd8cmVsYXRpdmVQb3NpdGlvbnxhYnNvbHV0ZVBvc2l0aW9ufSBuZXdQb3NpdGlvbiAtIFdoZXJlIHRoZSBlbnRpdHkgc2hvdWxkIG1vdmUgdG9cclxuICAgKi9cclxuICBtb3ZlKCBuZXdQb3NpdGlvbiApe1xyXG4gICAgbmV3UG9zaXRpb24gPSB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCBuZXdQb3NpdGlvbiApO1xyXG4gICAgaWYgKHRoaXMuZGV0YWNoZWQpe1xyXG4gICAgICB0aGlzLmMgPSBuZXdQb3NpdGlvbi5jO1xyXG4gICAgICB0aGlzLnIgPSBuZXdQb3NpdGlvbi5yO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7IHRoaXMuZ3JpZC5tb3ZlRW50aXR5SW5zdGFuY2UoIHRoaXMsIG5ld1Bvc2l0aW9uICkgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSB0ZXh0IHRvIHRoZSBlbnRpdHlcclxuICAgKiBAcGFyYW0ge1RleHR+dGV4dFNldHRpbmdzfSB0ZXh0U2V0dGluZ3MgXHJcbiAgICovXHJcbiAgYWRkVGV4dCggdGV4dFNldHRpbmdzICl7XHJcbiAgICBpZiAodHlwZW9mIHRleHRTZXR0aW5ncyAhPT0gJ29iamVjdCcpIHtyZXR1cm4gY29uc29sZS5lcnJvcigndGV4dFNldHRpbmdzIG5lZWRzIHRvIGJlIGFuIG9iamVjdCcpfTtcclxuICAgIGlmICh0ZXh0U2V0dGluZ3MuaWQgPT09IHVuZGVmaW5lZCkge3JldHVybiBjb25zb2xlLmVycm9yKCd0ZXh0U2V0dGluZ3MgbmVlZCB0byBoYXZlIGFuIGlkIHByb3BlcnR5Jyl9O1xyXG4gICAgdGhpcy50ZXh0c1sgdGV4dFNldHRpbmdzLmlkIF0gPSBuZXcgVGV4dCggdGV4dFNldHRpbmdzICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0ZXh0IGZyb20gdGhlIGVudGl0eVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcclxuICAgKi9cclxuICByZW1vdmVUZXh0KCBpZCApe1xyXG4gICAgZGVsZXRlIHRoaXMudGV4dHNbIGlkIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIEFycmF5IG9mIGFsbCBlbnRpdGllcyBiZW5lYXRoIHRoaXMgZW50aXR5LiBPbmx5IHdvcmtzIGZvciBkZXRhY2hlZCBlbnRpdGllc1xyXG4gICAqIEByZXR1cm5zIHtFbnRpdHl+Q3VzdG9tRW50aXR5Q2xhc3NbXX1cclxuICAgKi9cclxuICBnZXRFbnRpdHlJbnN0YW5jZXNCZW5lYXRoKCl7XHJcbiAgICByZXR1cm4gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlc0JlbmVhdGhEZXRhY2hlZEVudGl0eUluc3RhbmNlKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBFbnRpdHkgdG8gdGhlIGtleURvd24gZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQga2V5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvS2V5RG93bigga2V5ICl7XHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLnB1c2goIGtleSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlEb3duKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBFbnRpdHkgZnJvbSB0aGUga2V5RG93biBldmVudCBmb3IgdGhlIHNwZWNpZmllZCBrZXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0ga2V5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tS2V5RG93bigga2V5ICl7XHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLnNwbGljZSggdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucy5pbmRleE9mKCBrZXkgKSwgMSApO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tS2V5RG93biggdGhpcywga2V5ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBFbnRpdHkgdG8gdGhlIGtleVVwIGV2ZW50IGZvciB0aGUgc3BlY2lmaWVkIGtleVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb0tleVVwKCBrZXkgKXtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLnB1c2goIGtleSApO1xyXG4gICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlVcCggdGhpcywga2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgRW50aXR5IGZyb20gdGhlIGtleVVwIGV2ZW50IGZvciB0aGUgc3BlY2lmaWVkIGtleVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21LZXlVcCgga2V5ICl7XHJcbiAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLmluZGV4T2YoIGtleSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlVcCggdGhpcywga2V5ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIHJlbmRlclN0YXJ0IGV2ZW50XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9SZW5kZXJTdGFydCgpe1xyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbiA9IHRydWU7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1JlbmRlclN0YXJ0KCB0aGlzICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgZW50aXR5IGZyb20gdGhlIHJlbmRlclN0YXJ0IGV2ZW50XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tUmVuZGVyU3RhcnQoKXtcclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbVJlbmRlclN0YXJ0KCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIHNjZW5lTG9hZGVkIGV2ZW50XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9TY2VuZUxvYWRlZCgpe1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IHRydWU7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1NjZW5lTG9hZGVkKCB0aGlzICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgZW50aXR5IGZyb20gdGhlIHNjZW5lTG9hZGVkIGV2ZW50XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tU2NlbmVMb2FkZWQoKXtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbVNjZW5lTG9hZGVkKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlRG93biBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZURvd24oIGRpc3BsYXlOYW1lICl7XHJcbiAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VEb3duKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZURvd24gZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbU1vdXNlRG93biggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5pbmRleE9mKCBkaXNwbGF5TmFtZSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZURvd24oIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlVXAgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VVcCggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VVcCggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VVcCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VVcCggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlVXAoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlTW92ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZU1vdmUoIGRpc3BsYXlOYW1lICl7XHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VNb3ZlKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZU1vdmUgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbU1vdXNlTW92ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5pbmRleE9mKCBkaXNwbGF5TmFtZSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZU1vdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlRW50ZXIgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VFbnRlciggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VFbnRlciggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VFbnRlciBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VFbnRlciggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlRW50ZXIoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlTGVhdmUgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VMZWF2ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VMZWF2ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VMZWF2ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VMZWF2ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlTGVhdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEpvaSBmcm9tIFwiQGhhcGkvam9pXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbG9naWNhbCBncmlkLiBTYXZlcyByZWZlcmVuY2VzIHRvIGVudGl0aWVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIEdyaWRcclxuICAgKiBHcmlkcyBzaG91bGQgb25seSBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUgZ3JpZ2EgY29uZmlnXHJcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBjb25maWcsIGdyaWdhICl7XHJcbiAgICB0aGlzLmdyaWdhID0gZ3JpZ2E7XHJcbiAgICB0aGlzLmRpc3BsYXlzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbmZpZy5jb2x1bW5zO1xyXG4gICAgdGhpcy5yb3dzID0gY29uZmlnLnJvd3M7XHJcblxyXG4gICAgdGhpcy5yZXNldE1vdXNlKCk7IC8vc2V0cyB0aGlzLm1vdXNlIHRvIGRlZmF1bHRcclxuXHJcbiAgICAvL2VudGl0eUluc3RhbmNlUmVmZXJlbmNlc1xyXG4gICAgdGhpcy5jbGVhclNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvL3NldHVwXHJcbiAgc2V0dXBHcmlkRGF0YSgpe1xyXG4gICAgY29uc3QgZ3JpZERhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGM9MDsgYzx0aGlzLmNvbHVtbnM7IGMrKykge1xyXG4gICAgICBncmlkRGF0YVtjXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCByPTA7IHI8dGhpcy5yb3dzOyByKyspIHtcclxuICAgICAgICBncmlkRGF0YVtjXVtyXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JpZERhdGE7XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXJcclxuICByZW5kZXJTdGFydEhhbmRsZXIoKXtcclxuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFJlbmRlclRpbWU7XHJcbiAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlLnJlbmRlclN0YXJ0SGFuZGxlciggdGltZVBhc3NlZCApO1xyXG4gICAgfSApO1xyXG4gIH1cclxuICBcclxuICBzY2VuZUxvYWRlZEhhbmRsZXIoKXtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb25zLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgZW50aXR5SW5zdGFuY2Uuc2NlbmVMb2FkZWRIYW5kbGVyKCk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG4gIFxyXG4gIGtleURvd25IYW5kbGVyKCBlICl7XHJcbiAgICBpZiAodGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZS5rZXkgKSkge1xyXG4gICAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zWyBlLmtleSBdLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZS5rZXlEb3duSGFuZGxlciggZS5rZXkgKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5VXBIYW5kbGVyKCBlICl7XHJcbiAgICBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGUua2V5ICkpIHtcclxuICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNbIGUua2V5IF0uZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLmtleVVwSGFuZGxlciggZS5rZXkgKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQyxtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApe1xyXG4gICAgLy9jaGVjayBmb3IgbW91c2UgZW50ZXIgVE9ET1xyXG4gICAgbGV0IG1vdmVkVG9OZXdUaWxlID0gZmFsc2U7XHJcbiAgICBpZiAoTWF0aC5mbG9vcih0aGlzLm1vdXNlLmMpICE9PSBNYXRoLmZsb29yKG1vdXNlQylcclxuICAgICB8fCBNYXRoLmZsb29yKHRoaXMubW91c2UucikgIT09IE1hdGguZmxvb3IobW91c2VSKSkge1xyXG4gICAgICBtb3ZlZFRvTmV3VGlsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vdmVkVG9OZXdUaWxlKSB7XHJcbiAgICAgIC8vZmlyZSBtb3VzZSBMZWF2ZSBFdmVudFxyXG4gICAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV1cclxuICAgICAgdGFyZ2V0cy5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zLmluY2x1ZGVzKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlTGVhdmVIYW5kbGVyKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lLCB0aGlzLm1vdXNlLmMsIHRoaXMubW91c2UuciwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vdXBkYXRlIHRoaXMubW91c2VcclxuICAgIHRoaXMubW91c2UuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcclxuICAgIHRoaXMubW91c2UuYyA9IG1vdXNlQztcclxuICAgIHRoaXMubW91c2UuciA9IG1vdXNlUjtcclxuXHJcbiAgICBpZiAobW92ZWRUb05ld1RpbGUpIHtcclxuICAgICAgLy9maXJlIG1vdXNlIEVudGVyIEV2ZW50XHJcbiAgICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmdyaWREYXRhW01hdGguZmxvb3IodGhpcy5tb3VzZS5jKV1bTWF0aC5mbG9vcih0aGlzLm1vdXNlLnIpXVxyXG4gICAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBpZiAoZW50aXR5SW5zdGFuY2UubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgICAgZW50aXR5SW5zdGFuY2UubW91c2VFbnRlckhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zWyB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lIF0uZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlTW92ZUhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdXNlTGVhdmVIYW5kbGVyKCl7XHJcbiAgICB0aGlzLnJlc2V0TW91c2UoKTtcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGRpc3BsYXlOYW1lLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV0uY29uY2F0KC8vdGlsZXNcclxuICAgICAgdGhpcy5nZXREZXRhY2hlZEVudGl0eUluc3RhbmNlc0J5Q29vcmRpbmF0ZXMoIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICkgKTsvL2RldGFjaGVkXHJcbiAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlRG93blN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlRG93bkhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yLCBjdHJsS2V5ICk7XHJcbiAgICAgIH1cclxuICAgIH0gKTtcclxuICB9XHJcbiAgbW91c2VVcEhhbmRsZXIoIGRpc3BsYXlOYW1lLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV0uY29uY2F0KC8vdGlsZXNcclxuICAgICAgdGhpcy5nZXREZXRhY2hlZEVudGl0eUluc3RhbmNlc0J5Q29vcmRpbmF0ZXMoIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICkgKTsvL2RldGFjaGVkXHJcbiAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlVXBTdWJzY3JpcHRpb25zLmluY2x1ZGVzKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZS5tb3VzZVVwSGFuZGxlciggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSwgdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIsIGN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLy9saXN0ZW5lclN0dWZmXHJcbiAgXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1JlbmRlclN0YXJ0KCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbnMucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21SZW5kZXJTdGFydCggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucy5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbnMuc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG4gIFxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9TY2VuZUxvYWRlZCggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb25zLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIFxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlEb3duKCBlbnRpdHlJbnN0YW5jZSwga2V5ICl7XHJcbiAgICBpZiAodGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkpIHtcclxuICAgICAgdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9uc1trZXldLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zW2tleV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tS2V5RG93biggZW50aXR5SW5zdGFuY2UsIGtleSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnNba2V5XS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9uc1trZXldLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleVVwKCBlbnRpdHlJbnN0YW5jZSwga2V5ICl7XHJcbiAgICBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGtleSApKSB7XHJcbiAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zW2tleV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zW2tleV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tS2V5VXAoIGVudGl0eUluc3RhbmNlLCBrZXkgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLmtleVVwU3Vic2NyaXB0aW9uc1trZXldLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uc1trZXldLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlRG93biggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBpZiAodGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBkaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VEb3duKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlVXAoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgaWYgKHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlVXAoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZU1vdmUoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgaWYgKHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlTW92ZSggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUVudGVyKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGlmICh0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBkaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZUVudGVyKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VMZWF2ZSggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBpZiAodGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VMZWF2ZSggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgLy9kaXNwbGF5IGludGVyYWN0aW9uc1xyXG4gIGdldCBkaXNwbGF5RGF0YSgpe1xyXG4gICAgLy90cmlnZ2VyUmVuZGVyU3RhcnRFdmVudFxyXG4gICAgdGhpcy5yZW5kZXJTdGFydEhhbmRsZXIoKTtcclxuICAgIGNvbnN0IGFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGEgPSBbXTtcclxuICAgIHRoaXMubGF5ZXJEYXRhLmZvckVhY2goICggbGF5ZXJFbnRpdHlJbnN0YW5jZXMsIGxheWVyICkgPT4ge1xyXG4gICAgICBjb25zdCBsYXllckVudGl0eUluc3RhbmNlRGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgbGF5ZXJFbnRpdHlJbnN0YW5jZXMuZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5wdXNoKCBlbnRpdHlJbnN0YW5jZS5kaXNwbGF5RGF0YSApO1xyXG4gICAgICB9ICk7XHJcbiAgICAgIGFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGFbIGxheWVyIF0gPSBsYXllckVudGl0eUluc3RhbmNlRGlzcGxheURhdGE7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBncmlkTmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICBhbGxMYXllcnNFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICAvL2FsbEVudGl0eUluc3RhbmNlc1xyXG4gIGFkZEVudGl0eUluc3RhbmNlVG9BbGxFbnRpdHlJbnN0YW5jZXMoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLmFsbEVudGl0eUluc3RhbmNlcy5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuICByZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21BbGxFbnRpdHlJbnN0YW5jZXMoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZUluZGV4ID0gdGhpcy5hbGxFbnRpdHlJbnN0YW5jZXMuaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuYWxsRW50aXR5SW5zdGFuY2VzLnNwbGljZSggZW50aXR5SW5zdGFuY2VJbmRleCwgMSApO1xyXG4gIH1cclxuXHJcbiAgLy9lbnRpdHlEYXRhXHJcbiAgYWRkRW50aXR5SW5zdGFuY2VUb0VudGl0eURhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBlbnRpdHlOYW1lID0gZW50aXR5SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZTtcclxuICAgIGlmICh0aGlzLmVudGl0eURhdGEuaGFzT3duUHJvcGVydHkoIGVudGl0eU5hbWUgKSkge1xyXG4gICAgICB0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUVudGl0eURhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBlbnRpdHlOYW1lID0gZW50aXR5SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZTtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlSW5kZXggPSB0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF0uc3BsaWNlKCBlbnRpdHlJbnN0YW5jZUluZGV4LCAxICk7XHJcbiAgICBpZiAodGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmVudGl0eURhdGFbIGVudGl0eU5hbWUgXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vZGV0YWNoZWREYXRhXHJcbiAgYWRkRW50aXR5SW5zdGFuY2VUb0RldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMuZGV0YWNoZWREYXRhLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIHJlbW92ZUVudGl0eUluc3RhbmNlRnJvbURldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlSW5kZXggPSB0aGlzLmRldGFjaGVkRGF0YS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5kZXRhY2hlZERhdGEuc3BsaWNlKCBlbnRpdHlJbnN0YW5jZUluZGV4LCAxICk7XHJcbiAgfVxyXG5cclxuICAvL2dyaWREYXRhXHJcbiAgYWRkRW50aXR5SW5zdGFuY2VUb0dyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgdGlsZURhdGEgPSB0aGlzLmdyaWREYXRhWyBlbnRpdHlJbnN0YW5jZS5jIF1bIGVudGl0eUluc3RhbmNlLnIgXTtcclxuICAgIHRpbGVEYXRhLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIHJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUdyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgdGlsZURhdGEgPSB0aGlzLmdyaWREYXRhWyBlbnRpdHlJbnN0YW5jZS5jIF1bIGVudGl0eUluc3RhbmNlLnIgXTtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlSW5kZXggPSB0aWxlRGF0YS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGlsZURhdGEuc3BsaWNlKCBlbnRpdHlJbnN0YW5jZUluZGV4LCAxICk7XHJcbiAgfVxyXG5cclxuICAvL2xheWVyRGF0YVxyXG4gIGFkZEVudGl0eUluc3RhbmNlVG9MYXllckRhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBsZXQgbGF5ZXJBcnJheSA9IFtdO1xyXG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmhhcyggZW50aXR5SW5zdGFuY2UubGF5ZXIgKSkge1xyXG4gICAgICBsYXllckFycmF5ID0gdGhpcy5sYXllckRhdGEuZ2V0KCBlbnRpdHlJbnN0YW5jZS5sYXllciApO1xyXG4gICAgfVxyXG4gICAgbGF5ZXJBcnJheS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5sYXllckRhdGEuc2V0KCBlbnRpdHlJbnN0YW5jZS5sYXllciwgbGF5ZXJBcnJheSApO1xyXG4gIH1cclxuICByZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21MYXllckRhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBsYXllckFycmF5ID0gdGhpcy5sYXllckRhdGEuZ2V0KCBlbnRpdHlJbnN0YW5jZS5sYXllciApO1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VJbmRleCA9IGxheWVyQXJyYXkuaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIGxheWVyQXJyYXkuc3BsaWNlKCBlbnRpdHlJbnN0YW5jZUluZGV4LCAxICk7XHJcbiAgICBpZiAobGF5ZXJBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubGF5ZXJEYXRhLnNldCggZW50aXR5SW5zdGFuY2UubGF5ZXIsIGxheWVyQXJyYXkgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGF5ZXJEYXRhLmRlbGV0ZSggZW50aXR5SW5zdGFuY2UubGF5ZXIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IEVudGl0eU1ldGhvZHNcclxuICBhdHRhY2hFbnRpdHlJbnN0YW5jZSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBFbnRpdHlNZXRob2RzXHJcbiAgZGV0YWNoRW50aXR5SW5zdGFuY2UoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUdyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuXHJcbi8vUFVCTElDIHhEXHJcblxyXG4gIHN0YXRpYyBnZXQgYXJnc1NjaGVtYSgpe1xyXG4gICAgcmV0dXJuIEpvaS5vYmplY3QoIHtcclxuICAgICAgZGV0YWNoZWQ6IEpvaS5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXHJcbiAgICAgIGM6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICByOiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0cyBhIG5ldyBlbnRpdHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW50aXR5TmFtZSAtIE5hbWUgb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzXHJcbiAgICogQHBhcmFtIHsqfSBbcGFyYW1zPXt9XSAtIFBhcmFtcyB0aGF0IHdpbGwgYmUgcGFzc2VkIGluIGFzIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3NcclxuICAgKiBAcGFyYW0ge09iamVjdH0gW2FyZ3NdIC0gQXJndW1lbnRzIGZvciB0aGUgZW50aXRpZXMgaW50aWFsIHN0YXRlLiBDYW4gc3RpbGwgYmUgb3ZlcndyaXR0ZW4gaW4gdGhlIGNvbnN0cnVjdG9yIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzcyBiZWZvcmUgY2FsbGluZyBzdXBlcigpXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbYXJncy5kZXRhY2hlZD1mYWxzZV0gLSBUcnVlIGlmIHRoZSBlbnRpdHkgc2hvdWxkIGJlIGRldGFjaGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcmdzLmM9MF0gLSBDIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcmdzLnI9MF0gLSBSIHBvc2l0aW9uXHJcbiAgICovXHJcbiAgbmV3RW50aXR5SW5zdGFuY2UoIGVudGl0eU5hbWUsIHBhcmFtcyA9IHt9LCBhcmdzID0ge30gKXtcclxuICAgIC8vdmFsaWRhdGUgQXJnc1xyXG4gICAgbGV0IHZhbGlkQXJncztcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbGlkQXJncyA9IEpvaS5hdHRlbXB0KCBhcmdzLCBHcmlkLmFyZ3NTY2hlbWEgKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGUubmFtZSA9ICduZXdFbnRpdHlBcmdzRXJyb3InO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL2NyZWF0ZSBuZXcgZW50aXR5SW5zdGFuY2VcclxuICAgIHZhbGlkQXJncy5ncmlkID0gdGhpcztcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlID0gbmV3IHRoaXMuZ3JpZ2EuZW50aXRpZXNbIGVudGl0eU5hbWUgXShcclxuICAgICAgcGFyYW1zLCB2YWxpZEFyZ3NcclxuICAgICk7XHJcbiAgICAvL3NldCBhbGwgZW50aXR5SW5zdGFuY2UgUmVmZXJlbmNlc1xyXG4gICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvQWxsRW50aXR5SW5zdGFuY2VzKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvRW50aXR5RGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIGlmIChlbnRpdHlJbnN0YW5jZS5kZXRhY2hlZCkge1xyXG4gICAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0dyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvTGF5ZXJEYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG5cclxuICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IEVudGl0eU1ldGhvZHNcclxuICBkZWxldGVFbnRpdHlJbnN0YW5jZSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIC8vcmVtb3ZlIGFsbCByZWZlcmVuY2VzIHRvIGVudGl0eUluc3RhbmNlXHJcbiAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUFsbEVudGl0eUluc3RhbmNlcyggZW50aXR5SW5zdGFuY2UgKVxyXG4gICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21FbnRpdHlEYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgaWYgKGVudGl0eUluc3RhbmNlLmRldGFjaGVkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUdyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21MYXllckRhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICBlbnRpdHlJbnN0YW5jZS5rZXlEb3duU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBrZXkgPT4ge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tS2V5RG93biggZW50aXR5SW5zdGFuY2UsIGtleSApO1xyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgRW50aXR5TWV0aG9kc1xyXG4gIG1vdmVFbnRpdHlJbnN0YW5jZSggZW50aXR5SW5zdGFuY2UsIG5ld1BvcyApe1xyXG4gICAgLy92YWxpZGF0ZSBuZXdQb3NcclxuICAgIGlmIChuZXdQb3MuYyA+PSAwICYmIG5ld1Bvcy5jIDwgdGhpcy5jb2x1bW5zXHJcbiAgICAgJiYgbmV3UG9zLnIgPj0gMCAmJiBuZXdQb3MuciA8IHRoaXMucm93cykge1xyXG4gICAgICAvL3VwZGF0ZSBlbnRpdHlQb3NpdGlvblxyXG4gICAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbUdyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgICBlbnRpdHlJbnN0YW5jZS5jID0gbmV3UG9zLmM7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlLnIgPSBuZXdQb3MucjtcclxuICAgICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvR3JpZERhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaWx0ZXJzIGFuZCByZXR1cm5zIGFsbCBFbnRpdGllcyBtYXRjaGluZyB0aGUgc2VsZWN0b3JPYmplY3RcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0b3JPYmplY3QgLSBPYmplY3QgY29udGFpbmluZyBmaWx0ZXIgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7YWJzb2x1dGVQb3NpdGlvbn0gW3NlbGVjdG9yT2JqZWN0LnRpbGVdIC0gVGlsZSB0aGUgZW50aXRpZXMgbmVlZCB0byBiZSBvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JPYmplY3QudHlwZV0gLSBUaGUgTmFtZSBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3MgdGhlIGVudGl0aWVzIHNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JPYmplY3Qubm90VHlwZV0gLSBUaGUgTmFtZSBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3MgdGhlIGVudGl0aWVzIHNob3VsZCBub3QgYmUgYW4gaW5zdGFuY2Ugb2ZcclxuICAgKi9cclxuICBnZXRFbnRpdHlJbnN0YW5jZXMoIHNlbGVjdG9yT2JqZWN0ID0ge30gKXtcclxuICAgIGxldCBlbnRpdHlJbnN0YW5jZXMgPSB0aGlzLmFsbEVudGl0eUluc3RhbmNlcztcclxuICAgIGlmIChzZWxlY3Rvck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndGlsZScpKSB7XHJcbiAgICAgIGlmIChzZWxlY3Rvck9iamVjdC50aWxlLmMgPj0gMCAmJiBzZWxlY3Rvck9iamVjdC50aWxlLmMgPCB0aGlzLmNvbHVtbnNcclxuICAgICAgICYmIHNlbGVjdG9yT2JqZWN0LnRpbGUuciA+PSAwICYmIHNlbGVjdG9yT2JqZWN0LnRpbGUuciA8IHRoaXMucm93cykgeyAvL2Nvb3JkaW5hdGVzIGluc2lkZSBncmlkXHJcbiAgICAgICAgZW50aXR5SW5zdGFuY2VzID0gdGhpcy5ncmlkRGF0YVsgc2VsZWN0b3JPYmplY3QudGlsZS5jIF1bIHNlbGVjdG9yT2JqZWN0LnRpbGUuciBdO1xyXG4gICAgICAgIGlmIChzZWxlY3Rvck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndHlwZScpKSB7XHJcbiAgICAgICAgICBlbnRpdHlJbnN0YW5jZXMgPSBlbnRpdHlJbnN0YW5jZXMuZmlsdGVyKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09PSBzZWxlY3Rvck9iamVjdC50eXBlO1xyXG4gICAgICAgICAgfSApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3Rvck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgndHlwZScpKSB7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlcyA9IHRoaXMuZW50aXR5RGF0YVsgc2VsZWN0b3JPYmplY3QudHlwZSBdIHx8IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdG9yT2JqZWN0Lmhhc093blByb3BlcnR5KCdub3RUeXBlJykpIHtcclxuICAgICAgZW50aXR5SW5zdGFuY2VzID0gZW50aXR5SW5zdGFuY2VzLmZpbHRlciggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSBzZWxlY3Rvck9iamVjdC5ub3RUeXBlO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50aXR5SW5zdGFuY2VzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0cyBhbGwgZGV0YWNoZWQgZW50aXRpZXMgd2hpY2ggYXJlIFwidW5kZXJcIiB0aGUgY29vcmRpbmF0ZXMgKGMsIHIpXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGMgLSBDIGNvb3JkaW5hdGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gciAtIFIgY29vcmRpbmF0ZVxyXG4gICAqL1xyXG4gIGdldERldGFjaGVkRW50aXR5SW5zdGFuY2VzQnlDb29yZGluYXRlcyggYywgciApe1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VzID0gdGhpcy5kZXRhY2hlZERhdGEuZmlsdGVyKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgIHJldHVybiAoYyA+IGVudGl0eUluc3RhbmNlLmMgJiYgYyA8IGVudGl0eUluc3RhbmNlLmMrZW50aXR5SW5zdGFuY2Uud2lkdGhcclxuICAgICAgICAmJiByID4gZW50aXR5SW5zdGFuY2UuciAmJiByIDwgZW50aXR5SW5zdGFuY2UucitlbnRpdHlJbnN0YW5jZS5oZWlnaHQpO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIGVudGl0eUluc3RhbmNlcztcclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IGVudGl0eSBtZXRob2RzXHJcbiAgZ2V0RW50aXR5SW5zdGFuY2VzQmVuZWF0aERldGFjaGVkRW50aXR5SW5zdGFuY2UoIGRldGFjaGVkRW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IHN0YXJ0QyA9IE1hdGguZmxvb3IoIGRldGFjaGVkRW50aXR5SW5zdGFuY2UuYyApO1xyXG4gICAgY29uc3QgZW5kQyA9IGRldGFjaGVkRW50aXR5SW5zdGFuY2UuYyArIGRldGFjaGVkRW50aXR5SW5zdGFuY2Uud2lkdGg7XHJcbiAgICBjb25zdCBzdGFydFIgPSBNYXRoLmZsb29yKCBkZXRhY2hlZEVudGl0eUluc3RhbmNlLnIgKTtcclxuICAgIGNvbnN0IGVuZFIgPSBkZXRhY2hlZEVudGl0eUluc3RhbmNlLnIgKyBkZXRhY2hlZEVudGl0eUluc3RhbmNlLmhlaWdodDtcclxuICAgIGxldCBlbnRpdHlJbnN0YW5jZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGMgPSBzdGFydEM7IGMgPCBlbmRDOyBjKyspIHtcclxuICAgICAgZm9yIChsZXQgciA9IHN0YXJ0UjsgciA8IGVuZFI7IHIrKykge1xyXG4gICAgICAgIGlmIChjID49IDAgJiYgYyA8IHRoaXMuY29sdW1uc1xyXG4gICAgICAgICAmJiByID49IDAgJiYgciA8IHRoaXMucm93cykge1xyXG4gICAgICAgICAgZW50aXR5SW5zdGFuY2VzID0gZW50aXR5SW5zdGFuY2VzLmNvbmNhdCggdGhpcy5ncmlkRGF0YVtjXVtyXSApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudGl0eUluc3RhbmNlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGxvYWRzIGEgc2NlbmUgaW50byB0aGUgZ3JpZFxyXG4gICAqIEBwYXJhbSB7R3JpZH5zY2VuZURhdGF9IHNjZW5lRGF0YSAtIFNjZW5lRGF0YSBPYmplY3RcclxuICAgKi9cclxuICBsb2FkU2NlbmUoIHNjZW5lRGF0YSApe1xyXG4gICAgLy9UT0RPIGRldGFjaGVkXHJcblxyXG4gICAgLy90aWxlc1xyXG4gICAgc2NlbmVEYXRhLnRpbGVzLmZvckVhY2goIChjRGF0YSwgYykgPT4ge1xyXG4gICAgICBjRGF0YS5mb3JFYWNoKCAodGlsZURhdGEsIHIpID0+IHtcclxuICAgICAgICB0aWxlRGF0YS5mb3JFYWNoKCBlbnRpdHlEZWNsYXJhdGlvbiA9PiB7XHJcbiAgICAgICAgICBjb25zdCBlbnRpdHlOYW1lID0gZW50aXR5RGVjbGFyYXRpb25bMF07XHJcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBlbnRpdHlEZWNsYXJhdGlvblsxXSB8fCB7fTtcclxuICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7IGRldGFjaGVkOiBmYWxzZSwgYywgciB9O1xyXG4gICAgICAgICAgdGhpcy5uZXdFbnRpdHlJbnN0YW5jZSggZW50aXR5TmFtZSwgcGFyYW1zLCBhcmdzICk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbiAgICAvL3RyaWdnZXJTY2VuZUxvYWRlZEV2ZW50XHJcbiAgICB0aGlzLnNjZW5lTG9hZGVkSGFuZGxlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gR3JpZH5zY2VuZURhdGFcclxuICAgKiBAcHJvcGVydHkge0FycmF5W119IGRldGFjaGVkIC0gQXJyYXkgY29udGFpbmluZyBkYXRhIGZvciBhIGRldGFjaGVkIGVudGl0eVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkZXRhY2hlZC4wIC0gTmFtZSBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3NcclxuICAgKiBAcHJvcGVydHkge2FueX0gZGV0YWNoZWQuMSAtIEVudGl0eSBwYXJhbXNcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gZGV0YWNoZWQuMiAtIFBvc2l0aW9uIG9mIHRoZSBkZXRhY2hlZCBFbnRpdHlcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2RldGFjaGVkLjIuYz0wXSAtIEMgcG9zaXRpb25cclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2RldGFjaGVkLjIucj0wXSAtIFIgcG9zaXRpb25cclxuICAgKiBAcHJvcGVydHkge0FycmF5W11bXX0gYXR0YWNoZWQgLSBBcnJheSBpbnNpZGUgYSAyRCBhcnJheSByZXByZXNlbnRpbmcgYWxsIFtjLCByXSB0aWxlcyBvbiB0aGUgZ3JpZCBjb250YWluaW5nIGRhdGEgZm9yIGFuIGF0dGFjaGVkIGVudGl0eVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRhY2hlZC4wIC0gTmFtZSBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3NcclxuICAgKiBAcHJvcGVydHkge2FueX0gYXR0YWNoZWQuMSAtIEVudGl0eSBwYXJhbXNcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogY2xlYXJzIHRoZSBTY2VuZSwgYWxsIGVudGl0ZXMgZ2V0IGRlbGV0ZWRcclxuICAgKi9cclxuICBjbGVhclNjZW5lKCl7XHJcbiAgICB0aGlzLmFsbEVudGl0eUluc3RhbmNlcyA9IFtdO1xyXG4gICAgdGhpcy5lbnRpdHlEYXRhID0ge307XHJcbiAgICB0aGlzLmdyaWREYXRhID0gdGhpcy5zZXR1cEdyaWREYXRhKCk7XHJcbiAgICB0aGlzLmRldGFjaGVkRGF0YSA9IFtdO1xyXG4gICAgdGhpcy5sYXllckRhdGEgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb25zID0gW107XHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGdyaWQgYXMgc2NlbmVEYXRhLiBJZiB5b3UgaGF2ZSBlbnRpdGVzIHdoaWNoIHNob3VsZCBzYXZlIHBhcmFtZXRlcnMgaW4gdGhlIHNjZW5lRGF0YSwgdXNlIChvdmVyd3JpdGUpIHRoZSBnZXRDdXJyZW50UGFyYW1zIG1ldGhvZCBvZiBFbnRpdHkuIElmIHlvdSBoYXZlIEVudGl0aWVzIHdoaWNoIHNob3VsZG4ndCBiZSBpbmNsdWRlZCBpbiB0aGUgc2NlbmVEYXRhLCBvdmVyd3JpdGUgdGhlciBpbmNsdWRlSW5TY2VuZURhdGEgTWV0aG9kIHRvIHJldHVybiBmYWxzZTtcclxuICAgKiBAcmV0dXJucyB7R3JpZH5zY2VuZURhdGF9XHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudFNjZW5lRGF0YSgpe1xyXG4gICAgY29uc3Qgc2NlbmVEYXRhID0ge1xyXG4gICAgICBkZXRhY2hlZDogW10sXHJcbiAgICAgIHRpbGVzOiBbXVxyXG4gICAgfVxyXG4gICAgLy9kZXRhY2hlZFxyXG5cclxuICAgIC8vdGlsZXNcclxuICAgIHRoaXMuZ3JpZERhdGEuZm9yRWFjaCggKGNEYXRhLCBjKSA9PiB7XHJcbiAgICAgIHNjZW5lRGF0YS50aWxlcy5wdXNoKFtdKTtcclxuICAgICAgY0RhdGEuZm9yRWFjaCggKHRpbGVEYXRhLCByKSA9PiB7XHJcbiAgICAgICAgc2NlbmVEYXRhLnRpbGVzW2NdW3JdID0gdGlsZURhdGEuZmlsdGVyKCBlID0+IGUuaW5jbHVkZUluU2NlbmVEYXRhKCkgKS5tYXAoIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICAgIHJldHVybiBbZW50aXR5SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSwgZW50aXR5SW5zdGFuY2UuZ2V0Q3VycmVudFBhcmFtcygpXTtcclxuICAgICAgICB9ICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH0gKTtcclxuICAgIHJldHVybiBzY2VuZURhdGE7XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBncmlkIG1vdXNlIGV2ZW50IHhEXHJcbiAgcmVzZXRNb3VzZSgpe1xyXG4gICAgdGhpcy5tb3VzZSA9IHtcclxuICAgICAgZGlzcGxheU5hbWU6IG51bGwsXHJcbiAgICAgIGRvd246IGZhbHNlLFxyXG4gICAgICBjOiAwLCByOiAwLFxyXG4gICAgfTtcclxuICB9XHJcbn0iLCIvKipcclxuICogR3JpZ2FcclxuICogQHZlcnNpb24gMS4wLjBcclxuICogQGF1dGhvciBUb20gS29wb2x0XHJcbiAqIHBhdWwtZ29ibGluIG9uIEdpdEh1YlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tICcuL2Rpc3BsYXknO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJztcclxuXHJcbmNvbnN0IEpvaSA9IHJlcXVpcmUoJ0BoYXBpL2pvaScpO1xyXG5cclxuY29uc3Qgd3JhcHBlcklkRXhpc3RzID0gKHdyYXBwZXJJZCkgPT4ge1xyXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3cmFwcGVySWQpO1xyXG4gIGlmICh3cmFwcGVyKSB7cmV0dXJuIHdyYXBwZXJJZH07XHJcbiAgdGhyb3cgbmV3IEVycm9yKGB0aGVyZSdzIG5vIEhUTUwtRWxlbWVudCB3aXRoIHdyYXBwZXJJZCAke3dyYXBwZXJJZH1gKTtcclxufVxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgQ29tcGxldGUgR2FtZSwgaW5jbHVkaW5nIExvZ2ljIGFuZCBHcmFwaGljc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWdhIHtcclxuXHJcbiAgLy9jb25maWdTY2hlbWFcclxuICBzdGF0aWMgZ2V0IGNvbmZpZ1NjaGVtYSgpe1xyXG4gICAgcmV0dXJuIEpvaS5vYmplY3QoIHtcclxuICAgICAgLy9kaXNwbGF5c1xyXG4gICAgICBkaXNwbGF5czogSm9pLmFycmF5KCkuaXRlbXMoIEpvaS5vYmplY3QoIHtcclxuICAgICAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgd3JhcHBlcklkOiBKb2kuYW55KCkucmVxdWlyZWQoKS5jdXN0b20oIHdyYXBwZXJJZEV4aXN0cywgJ3dyYXBwZXJJZCB2YWxpZGF0aW9uJyApLFxyXG4gICAgICAgICAgd2lkdGhIZWlnaHRSYXRpbzogSm9pLm51bWJlcigpLmRlZmF1bHQoMSksLy9pbiAoZnJhY3Rpb24gb2YgcmVzcG9uc2l2ZSB0aWxlV2lkdGgpLCAxIGZvciBzcXVhcmVcclxuICAgICAgfSApICksXHJcbiAgICAgIC8vZ3JpZHNcclxuICAgICAgZ3JpZHM6IEpvaS5hcnJheSgpLml0ZW1zKCBKb2kub2JqZWN0KCB7XHJcbiAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgY29sdW1uczogSm9pLm51bWJlcigpLmludGVnZXIoKS5kZWZhdWx0KDEpLFxyXG4gICAgICAgIHJvd3M6IEpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuZGVmYXVsdCgxKSxcclxuICAgIH0gKSApLFxyXG4gICAgICAvL2VudGl0aWVzXHJcbiAgICAgIGVudGl0aWVzOiBKb2kuYXJyYXkoKS5pdGVtcyggSm9pLmZ1bmN0aW9uKCkuY2xhc3MoKSApLnJlcXVpcmVkKCksIC8vbm8gZ29vZCB2YWxpZGF0aW9uIHlldFxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBkaXNwbGF5U2V0dGluZ3NTY2hlbWEoKXtcclxuICAgIHJldHVybiBKb2kub2JqZWN0KCB7XHJcbiAgICAgIHRvcDogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIGxlZnQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICB3aWR0aDogSm9pLm51bWJlcigpLm1pbigwKS5kZWZhdWx0KDEpLFxyXG4gICAgICBoZWlnaHQ6IEpvaS5udW1iZXIoKS5taW4oMCkuZGVmYXVsdCgxKSxcclxuICAgICAgY29sdW1uc09uU2NyZWVuOiBKb2kubnVtYmVyKCkubWluKDEpLmRlZmF1bHQoMSksXHJcbiAgICAgIHJvd3NPblNjcmVlbjogSm9pLm51bWJlcigpLm1pbigxKS5kZWZhdWx0KDEpLFxyXG4gICAgICBjb2x1bW5TaGlmdDogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICAgIHJvd1NoaWZ0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjYWxsYmFjayBHcmlnYX5pbWFnZXNMb2FkZWRDYWxsYmFja1xyXG4gICAqIEBwYXJhbSB7R3JpZ2F9IGdyaWdhIC0gVGhlIEdyaWdhIGluc3RhbmNlIFxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBFbnRpdHl+Q3VzdG9tRW50aXR5Q2xhc3MgLSBDdXN0b20gQ2xhc3NlcyBleHRlbmRpbmcgRW50aXR5XHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBUaGUgZ3JpZ2EgY29uZmlnIG9iamVjdFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNvbmZpZy5kaXNwbGF5cyAtIEFycmF5IG9mIGRpc3BsYXkgc2V0dGluZyBvYmplY3RzLiBGb3IgZWFjaCBvYmplY3QgR3JpZ2EgY3JlYXRlcyBhIGNvcnJlc3BvbmRpbmcgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZGlzcGxheXNbXS5uYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZGlzcGxheXNbXS53cmFwcGVySWQgLSBJZCBvZiB0aGUgSFRNTCBlbGVtZW50IHVzZWQgYXMgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLmRpc3BsYXlzW10ud2lkdGhIZWlnaHRSYXRpbz0xXSAtIFRoZSBkaXNwbGF5J3MgaGVpZ2h0IHJlbGF0aXZlIHRvIGl0cyB3aWR0aFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0W119IGNvbmZpZy5ncmlkcyAtIEFycmF5IG9mIGdyaWQgc2V0dGluZyBvYmplY3RzLiBGb3IgZWFjaCBvYmplY3QgR3JpZ2EgY3JlYXRlcyBhIGNvcnJlc3BvbmRpbmcgZ3JpZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZ3JpZHNbXS5uYW1lIC0gTmFtZSBvZiB0aGUgZ3JpZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLmdyaWRzW10uY29sdW1ucz0xXSAtIE51bWJlciBvZiBjb2x1bW5zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcuZ3JpZHNbXS5yb3dzPTFdIC0gTnVtYmVyIG9mIHJvd3NcclxuICAgKiBAcGFyYW0ge0VudGl0eX5DdXN0b21FbnRpdHlDbGFzc1tdfSBjb25maWcuZW50aXRpZXMgLSBBcnJheSBvZiBhbGwgQ3VzdG9tRW50aXR5Q2xhc3NlcyBHcmlnYSBzaG91bGQgdXNlXHJcbiAgICogQHBhcmFtIHtHcmlnYX5pbWFnZXNMb2FkZWRDYWxsYmFja30gY2IgLSBUaGUgY2FsbGJhY2sgdHJpZ2dlcnMgd2hlbiBhbGwgdGhlIEltYWdlcyBhcmUgTG9hZGVkXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIGNvbmZpZywgaW1hZ2VzTG9hZGVkQ2FsbGJhY2sgKXtcclxuICAgIC8vdmFsaWRhdGUgQ29uZmlnXHJcbiAgICBsZXQgdmFsaWRDb25maWc7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YWxpZENvbmZpZyA9IEpvaS5hdHRlbXB0KCBjb25maWcsIEdyaWdhLmNvbmZpZ1NjaGVtYSApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgZS5uYW1lID0gJ0dyaWdhQ29uZmlnRXJyb3InO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvL2RlY2xhcmUgYWxsIHZhcmlhYmxlc1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ29udGFpbnMgcmVmZXJlbmNlcyB0byBhbGwgZGlzcGxheXMuIFRoZSBkaXNwbGF5J3MgbmFtZSBpcyB1c2VkIGFzIGtleVxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQG1lbWJlciB7T2JqZWN0LjxzdHJpbmcsIERpc3BsYXk+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmRpc3BsYXlzID0gdGhpcy5zZXR1cERpc3BsYXlzKCB2YWxpZENvbmZpZy5kaXNwbGF5cyApO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ29udGFpbnMgcmVmZXJlbmNlcyB0byBhbGwgZ3JpZHMuIFRoZSBncmlkcydzIG5hbWUgaXMgdXNlZCBhcyBrZXlcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBtZW1iZXIge09iamVjdC48c3RyaW5nLCBHcmlkPn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5ncmlkcyA9IHRoaXMuc2V0dXBHcmlkcyggdmFsaWRDb25maWcuZ3JpZHMgKTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIENvbnRhaW5zIHJlZmVyZW5jZXMgdG8gYWxsIEN1c3RvbUVudGl0eUNsYXNzZXMuIFRoZSBlbnRpdGllJ3MgbmFtZSBpcyB1c2VkIGFzIGtleVxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQG1lbWJlciB7T2JqZWN0LjxzdHJpbmcsIEVudGl0eX5DdXN0b21FbnRpdHlDbGFzcz59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZW50aXRpZXMgPSBPYmplY3QuZnJvbUVudHJpZXMoIHZhbGlkQ29uZmlnLmVudGl0aWVzLm1hcChcclxuICAgICAgZW50aXR5ID0+IFtlbnRpdHkubmFtZSwgZW50aXR5XVxyXG4gICAgKSApO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIExpc3Qgb2YgYWxsIEtleXMgd2hpY2ggYXJlIGN1cnJlbnRseSBwcmVzc2VkIG9uIHRoZSBrZXlib2FyZFxyXG4gICAgICogQHB1YmxpY1xyXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMua2V5c1ByZXNzZWQgPSBbXTtcclxuXHJcbiAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAvL2xvYWRJbWFnZXNcclxuICAgIHRoaXMuaW1hZ2VzTG9hZGVkQ2FsbGJhY2sgPSBpbWFnZXNMb2FkZWRDYWxsYmFjaztcclxuICAgIHRoaXMubG9hZEltYWdlcygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB0aGlzLnJlbmRlcigpICk7XHJcbiAgfVxyXG5cclxuICAvL3NldHVwXHJcbiAgc2V0dXBEaXNwbGF5cyggZGlzcGxheXNDb25maWcgKXtcclxuICAgIGNvbnN0IGRpc3BsYXlzID0ge307XHJcbiAgICBkaXNwbGF5c0NvbmZpZy5mb3JFYWNoKCBkaXNwbGF5Q29uZmlnID0+IHtcclxuICAgICAgZGlzcGxheXNbIGRpc3BsYXlDb25maWcubmFtZSBdID0gbmV3IERpc3BsYXkoIGRpc3BsYXlDb25maWcgKTtcclxuICAgIH0gKTtcclxuICAgIHJldHVybiBkaXNwbGF5cztcclxuICB9XHJcblxyXG4gIHNldHVwR3JpZHMoIGdyaWRzQ29uZmlnICl7XHJcbiAgICBjb25zdCBncmlkcyA9IHt9O1xyXG4gICAgZ3JpZHNDb25maWcuZm9yRWFjaCggZ3JpZENvbmZpZyA9PiB7XHJcbiAgICAgIGdyaWRzWyBncmlkQ29uZmlnLm5hbWUgXSA9IG5ldyBHcmlkKCBncmlkQ29uZmlnLCB0aGlzICk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4gZ3JpZHM7XHJcbiAgfVxyXG5cclxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICB0aGlzLmtleXNQcmVzc2VkID0gW107XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHt0aGlzLnJlc2l6ZURpc3BsYXlzKCl9ICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB0aGlzLmtleURvd25IYW5kbGVyKGUpICk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4gdGhpcy5rZXlVcEhhbmRsZXIoZSkgKTtcclxuICB9XHJcblxyXG4gIC8vbG9hZCBJbWFnZXNcclxuICBpbWFnZUxvYWRlZCgpe1xyXG4gICAgaWYgKC0tdGhpcy5pbWFnZXNUb0xvYWQgPT09IDApIHtcclxuICAgICAgdGhpcy5pbWFnZXNMb2FkZWRDYWxsYmFjayggdGhpcyApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZEltYWdlcygpe1xyXG4gICAgdGhpcy5pbWFnZXNUb0xvYWQgPSAwO1xyXG4gICAgT2JqZWN0LnZhbHVlcyggdGhpcy5lbnRpdGllcyApLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzVG9Mb2FkICs9IE9iamVjdC5rZXlzKGVudGl0eS5pbWdTb3VyY2VzKS5sZW5ndGg7XHJcbiAgICB9ICk7XHJcbiAgICBpZiAodGhpcy5pbWFnZXNUb0xvYWQgPT09IDApIHsgdGhpcy5pbWFnZXNMb2FkZWRDYWxsYmFjayggdGhpcyApIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBPYmplY3QudmFsdWVzKCB0aGlzLmVudGl0aWVzICkuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgICBlbnRpdHkubG9hZEltYWdlcyggKCkgPT4ge3RoaXMuaW1hZ2VMb2FkZWQoKX0gKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCByZW5kZXJTdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgLy9yZW5kZXIgZWFjaCBEaXNwbGF5XHJcbiAgICBPYmplY3QudmFsdWVzKCB0aGlzLmRpc3BsYXlzICkuZm9yRWFjaCggXHJcbiAgICAgIGRpc3BsYXkgPT4gZGlzcGxheS5yZW5kZXIoKVxyXG4gICAgKTtcclxuICAgIC8vY2hlY2sgZm9yIG1zcHRcclxuICAgIGNvbnN0IG1zcHQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHJlbmRlclN0YXJ0O1xyXG4gICAgaWYgKG1zcHQgPiAzKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybiggJ21zcHQ6ICcgKyAocGVyZm9ybWFuY2Uubm93KCkgLSByZW5kZXJTdGFydCkgKTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5yZW5kZXIoKSApO1xyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGVyXHJcbiAga2V5RG93bkhhbmRsZXIoIGUgKXtcclxuICAgIGlmICghdGhpcy5rZXlzUHJlc3NlZC5pbmNsdWRlcyggZS5rZXkgKSkge1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICAgIGdyaWQua2V5RG93bkhhbmRsZXIoIGUgKTtcclxuICAgICAgfSApO1xyXG4gICAgICB0aGlzLmtleXNQcmVzc2VkLnB1c2goIGUua2V5ICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGtleVVwSGFuZGxlciggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgZ3JpZC5rZXlVcEhhbmRsZXIoIGUgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMua2V5c1ByZXNzZWQuc3BsaWNlKCB0aGlzLmtleXNQcmVzc2VkLmluZGV4T2YoZS5rZXkpLCAxICk7XHJcbiAgfVxyXG5cclxuLy9QVUJMSUMgeERcclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gZGlzcGxheVNldHRpbmdzXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtsZWZ0ID0gMF0gLSBMZWZ0IG9mZnNldCBvZiB0aGUgZ3JpZCBpbiAlIG9mIGRpc3BsYXkgd2lkdGggXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFt0b3AgPSAwXSAtIFRvcCBvZmZzZXQgb2YgdGhlIGdyaWQgaW4gJSBvZiBkaXNwbGF5IGhlaWdodFxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbd2lkdGggPSAxXSAtIFdpZHRoIG9mIHRoZSBncmlkIGluICUgb2YgZGlzcGxheSB3aWR0aCBcclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW2hlaWdodCA9IDFdIC0gSGVpZ2h0IG9mIHRoZSBncmlkIGluICUgb2YgZGlzcGxheSBoZWlnaHQgXHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtjb2x1bW5zT25TY3JlZW4gPSAxXSAtIFRoZSBudW1iZXIgb2YgY29sdW1ucyB3aGljaCBmaXQgaW50byB0aGUgZ3JpZHMgd2lkdGhcclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW3Jvd3NPblNjcmVlbiA9IDFdIC0gVGhlIG51bWJlciBvZiByb3dzIHdoaWNoIGZpdCBpbnRvIHRoZSBncmlkcyBoZWlnaHRcclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW2NvbHVtblNoaWZ0ID0gMF0gLSBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgdGhlIEdyaWQgc2hvdWxkIGJlIHNoaWZ0ZWQgaW4gYyBkaXJlY3Rpb25cclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW3Jvd1NoaWZ0ID0gMV0gLSBUaGUgbnVtYmVyIG9mIHJvd3MgdGhlIEdyaWQgc2hvdWxkIGJlIHNoaWZ0ZWQgaW4gciBkaXJlY3Rpb25cclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgYSBncmlkIG9uIGEgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIERpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZ3JpZE5hbWUgLSBOYW1lIG9mIHRoZSBHcmlkXHJcbiAgICogQHBhcmFtIHtkaXNwbGF5U2V0dGluZ3N9IGRpc3BsYXlTZXR0aW5ncyAtIE9iamVjdCBjb250YWluaW5nIGFsbCB5b3VyIGRpc3BsYXlTZXR0aW5nc1xyXG4gICAqL1xyXG4gIGRpc3BsYXlHcmlkKCBkaXNwbGF5TmFtZSwgZ3JpZE5hbWUsIGRpc3BsYXlTZXR0aW5ncyApe1xyXG4gICAgLy92YWxpZGF0ZSBkaXNwbGF5U2V0dGluZ3NcclxuICAgIGxldCB2YWxpZERpc3BsYXlTZXR0aW5ncztcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbGlkRGlzcGxheVNldHRpbmdzID0gSm9pLmF0dGVtcHQoIGRpc3BsYXlTZXR0aW5ncywgR3JpZ2EuZGlzcGxheVNldHRpbmdzU2NoZW1hICk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBlLm5hbWUgPSAnRGlzcGxheVNldHRpbmdzRXJyb3InO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmRpc3BsYXlzWyBkaXNwbGF5TmFtZSBdLmxpbmtHcmlkKCB0aGlzLmdyaWRzWyBncmlkTmFtZSBdLCB2YWxpZERpc3BsYXlTZXR0aW5ncyApO1xyXG4gICAgdGhpcy5ncmlkc1sgZ3JpZE5hbWUgXS5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXSA9IHRoaXMuZGlzcGxheXNbIGRpc3BsYXlOYW1lIF07XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBncmlkIGZyb20gYSBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdyaWROYW1lIC0gTmFtZSBvZiB0aGUgR3JpZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIERpc3BsYXlcclxuICAgKi9cclxuICByZW1vdmVHcmlkRnJvbURpc3BsYXkoIGdyaWROYW1lLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgdGhpcy5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXS51bmxpbmtHcmlkKCBncmlkTmFtZSApO1xyXG4gICAgZGVsZXRlIHRoaXMuZ3JpZHNbIGdyaWROYW1lIF0uZGlzcGxheXNbIGRpc3BsYXlOYW1lIF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgbmV3IERpc3BsYXkgdG8gZ3JpZ2EuZGlzcGxheXMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBEaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHdyYXBwZXJJZCAtIElkIG9mIHRoZSBodG1sLWVsZW1lbnQgZm9yIHRoZSBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHsqfSB3aWR0aEhlaWdodFJhdGlvIC1XaWR0aCBIZWlnaHQgcmF0aW9cclxuICAgKi9cclxuICBuZXdEaXNwbGF5KCBuYW1lLCB3cmFwcGVySWQsIHdpZHRoSGVpZ2h0UmF0aW8gPSAxICl7XHJcbiAgICB0aGlzLmRpc3BsYXlzWyBuYW1lIF0gPSBuZXcgRGlzcGxheSgge1xyXG4gICAgICBuYW1lLCB3cmFwcGVySWQsIHdpZHRoSGVpZ2h0UmF0aW9cclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBEaXNwbGF5IGFuZCBhbGwgaXRzIExpbmtzIHRvIEdyaWRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXHJcbiAgICovXHJcbiAgZGVsZXRlRGlzcGxheSggbmFtZSApe1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5kaXNwbGF5c1tuYW1lXS5saW5rZWRHcmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLmdyaWRzWyBncmlkIF0uZGlzcGxheXNbIG5hbWUgXTtcclxuICAgIH0gKTtcclxuICAgIGRlbGV0ZSB0aGlzLmRpc3BsYXlzW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcmVzaXplRGlzcGxheXMoKXtcclxuICAgIE9iamVjdC52YWx1ZXMoIHRoaXMuZGlzcGxheXMgKS5mb3JFYWNoKCBcclxuICAgICAgZGlzcGxheSA9PiBkaXNwbGF5LnJlc2l6ZSgpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9