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
/* harmony import */ var _entities_ghosty_entities_copper_stone__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entities/ghosty_entities/copper_stone */ "./src/ghosty/entities/ghosty_entities/copper_stone.js");
/* harmony import */ var _entities_ghosty_entities_copper_pressure_plate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entities/ghosty_entities/copper_pressure_plate */ "./src/ghosty/entities/ghosty_entities/copper_pressure_plate.js");
/* harmony import */ var _entities_ghosty_entities_wooden_box_octagon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entities/ghosty_entities/wooden_box_octagon */ "./src/ghosty/entities/ghosty_entities/wooden_box_octagon.js");
/* harmony import */ var _entities_ghosty_entities_hole_circle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./entities/ghosty_entities/hole_circle */ "./src/ghosty/entities/ghosty_entities/hole_circle.js");
/* harmony import */ var _entities_all_entities_background__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/all_entities_background */ "./src/ghosty/entities/all_entities_background.js");
























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
      name: 'all-entities-selection',
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
  entities:[_entities_background_tile__WEBPACK_IMPORTED_MODULE_2__["BackgroundTile"], _entities_selection_background__WEBPACK_IMPORTED_MODULE_7__["SelectionBackground"], _entities_all_entities_background__WEBPACK_IMPORTED_MODULE_22__["AllEntitiesBackground"], _entities_ghosty_entities_stone__WEBPACK_IMPORTED_MODULE_5__["Stone"], _entities_ghosty_entities_ghosty__WEBPACK_IMPORTED_MODULE_3__["Ghosty"], _entities_ghosty_entities_goal__WEBPACK_IMPORTED_MODULE_4__["Goal"], _entities_ghosty_entities_wooden_box__WEBPACK_IMPORTED_MODULE_6__["WoodenBox"], _entities_ghosty_entities_hole__WEBPACK_IMPORTED_MODULE_12__["Hole"], _entities_ghosty_entities_hole_border__WEBPACK_IMPORTED_MODULE_13__["HoleBorder"], _entities_ghosty_entities_diamond_stone__WEBPACK_IMPORTED_MODULE_16__["DiamondStone"], _entities_ghosty_entities_diamond_pressure_plate__WEBPACK_IMPORTED_MODULE_17__["DiamondPressurePlate"], _entities_ghosty_entities_copper_stone__WEBPACK_IMPORTED_MODULE_18__["CopperStone"], _entities_ghosty_entities_copper_pressure_plate__WEBPACK_IMPORTED_MODULE_19__["CopperPressurePlate"], _entities_ghosty_entities_wooden_box_octagon__WEBPACK_IMPORTED_MODULE_20__["WoodenBoxCircle"], _entities_ghosty_entities_hole_circle__WEBPACK_IMPORTED_MODULE_21__["HoleCircle"]],
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
    this.version = '1.0.2';
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
        this.all_entities_scene_data = {"detached":[],"tiles":[[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]],[[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]],[["AllEntitiesBackground",{}]]]]};
        this.app = app;
        this.griga = griga;
        this.grid = griga.grids['editor'];
        this.hotbar_grid = griga.grids['selection-hotbar'];
        this.all_entities_grid = griga.grids['all-entities-selection'];
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

    loadSelection(){
        this.hotbar_grid.loadScene( this.hotbar_scene_data );
        this.all_entities_grid.loadScene( this.all_entities_scene_data );
        // for (let c = 0; c < 16; c++) {
        //     for (let r = 0; r < 10; r++) {
        //         this.all_entities_grid.newEntityInstance( 'AllEntitiesBackground', {}, {c,r} );
        //     }
        // }
        // console.log( JSON.stringify(this.all_entities_grid.getCurrentSceneData()) );
        Object.keys(this.griga.entities).filter( entityName => {
            return !['SelectionBackground', 'BackgroundTile', 'AllEntitiesBackground'].includes( entityName );
        } ).filter( eName => {
            const unlockLevel = this.griga.entities[eName].getUnlockLevel( this.app.levels.levels['classic'] );
            return unlockLevel < this.app.levels.classicHighestLevelIndex;
        } ).forEach( (entityName, i) => {
            this.all_entities_grid.newEntityInstance(entityName, {}, {c:i,r:0});
            if (i < this.hotbar_grid.columns) {
                this.hotbar_grid.newEntityInstance(entityName, {}, {c:i,r:0});
            }
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
        this.loadSelection();
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

    changeState( newState ){
        this.griga.removeGridFromDisplay(this.state, 'editor');
        this.state = newState;
        this.griga.displayGrid( 'editor', this.state, this.app.displaySettings );
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
        this.activeAllEntitiesBackground = null;
        this.selectionBackgroundToChangeEntity = null;
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

    showAllEntitiesSelection( selectionBackground ) {
        this.editor.changeState( 'all-entities-selection' );
        this.selectionBackgroundToChangeEntity = selectionBackground;
        const entity = this.editor.all_entities_grid.getEntityInstances( {type: selectionBackground.otherEntity.constructor.name } )[0];
        const allEntitiesBackground = this.editor.all_entities_grid.getEntityInstances( {
            tile: {c: entity.c, r:entity.r}, type: 'AllEntitiesBackground'
        } )[0];
        if (this.activeAllEntitiesBackground) {
            this.activeAllEntitiesBackground.deactivate();
        }
        allEntitiesBackground.activate();
        this.activeAllEntitiesBackground = allEntitiesBackground;
    }

    selectEntityFromAll( entity ) {
        this.editor.changeState( 'editor' );
        this.selectionBackgroundToChangeEntity.otherEntity.delete();
        this.editor.hotbar_grid.newEntityInstance(
            entity.constructor.name,
            {},
            {c: this.selectionBackgroundToChangeEntity.c, r: 0}
        );
        this.setActiveSelectionBackground(this.selectionBackgroundToChangeEntity);
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
            h3: 'Customize Selection Bar:',
            p: 'Doubleclick a slot in the selection bar, then select the new entity you want in that slot'
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
            h3: 'Unlock New Entities:',
            p: 'Progress in the classic levels to unlock new entities in the editor'
        },
    ]
}

/***/ }),

/***/ "./src/ghosty/entities/all_entities_background.js":
/*!********************************************************!*\
  !*** ./src/ghosty/entities/all_entities_background.js ***!
  \********************************************************/
/*! exports provided: AllEntitiesBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEntitiesBackground", function() { return AllEntitiesBackground; });
/* harmony import */ var _griga_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../griga/entity */ "./src/griga/entity.js");
/* harmony import */ var _selection_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection_background */ "./src/ghosty/entities/selection_background.js");



class AllEntitiesBackground extends _selection_background__WEBPACK_IMPORTED_MODULE_1__["SelectionBackground"] {
  constructor( params, args ){
    super( {}, args );
    this.otherEntity = null;
    this.currentImage = 'deactive';
  }

  static get imgSources(){
    return { deactive: '',
             active: './tile_img/selection_background_active_gen_2.jpg'
    };
  }

  mouseDownHandler(){
    if (this.otherEntity) {
      this.griga.ghosty.editor.selection.selectEntityFromAll( this.otherEntity );
    }
  }
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
    let emptyLayersForStoneShape = 0;
    if ( entitiesOnTile.find( e => ['Hole', 'HoleCircle'].includes(e.constructor.name) ) ){ floorLayer = 0 };
    if ( entitiesOnTile.find( e => e.constructor.name === 'HoleCircle' )){ emptyLayersForStoneShape = -1 };
    entitiesOnTile = entitiesOnTile.filter( e => !['Hole', 'HoleBorder', 'HoleCircle'].includes(e.constructor.name) );
    const highestLayer = Math.max(...entitiesOnTile.map( e => 10+e.layerAddend ));
    const solidEntityOnBaseLayer = [];
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      solidEntityOnBaseLayer[ currentBaseLayer ] = entitiesOnTile.find( e => 10+e.layerAddend === currentBaseLayer && e.layer%10 === 7);
    }
    let emptyLayers = 0;
    for (let currentBaseLayer = floorLayer; currentBaseLayer <= highestLayer; currentBaseLayer+=10) {
      const entitiesOnBaseLayer = entitiesOnTile.filter( e => 10+e.layerAddend === currentBaseLayer );
      entitiesOnBaseLayer.forEach( e => {
        if (e.moveVertically && emptyLayers > 0) {
          if (!(e.shape === 'stone' && emptyLayersForStoneShape <= 0)){
            e.moveVertically(-emptyLayers,jump);
          }
        }
      } );
      if (!solidEntityOnBaseLayer[currentBaseLayer]) {
        emptyLayers++;
        emptyLayersForStoneShape++;
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
        this.subscribeToTouchSwipe();
      }
    } else {
      this.backgroundSceneLoaded = true;
    }
  }

  keyDownHandler( key ){ //keyTrackTile
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

  touchSwipeHandler( direction ){
    if (this.griga.ghosty.play.popup) { return };
    this.keyDownHandler( `Arrow${direction}` );
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
          this.grid.keyDownSubscriptions[key].forEach( entity => {
            entity.keyDownHandler( key, true );
          } );;
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

/***/ "./src/ghosty/entities/ghosty_entities/copper_pressure_plate.js":
/*!**********************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/copper_pressure_plate.js ***!
  \**********************************************************************/
/*! exports provided: CopperPressurePlate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopperPressurePlate", function() { return CopperPressurePlate; });
/* harmony import */ var _pressure_plate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pressure_plate */ "./src/ghosty/entities/ghosty_entities/pressure_plate.js");


class CopperPressurePlate extends _pressure_plate__WEBPACK_IMPORTED_MODULE_0__["PressurePlate"] {
  constructor( params, args ){
    params.gates = 'CopperStone';
    params.logicGate = 'OR';
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { up: './tile_img/copper_pressure_plate.png',
             down: './tile_img/copper_pressure_plate_down.png' };
  }
}

/***/ }),

/***/ "./src/ghosty/entities/ghosty_entities/copper_stone.js":
/*!*************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/copper_stone.js ***!
  \*************************************************************/
/*! exports provided: CopperStone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopperStone", function() { return CopperStone; });
/* harmony import */ var _gate_stone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate_stone */ "./src/ghosty/entities/ghosty_entities/gate_stone.js");


class CopperStone extends _gate_stone__WEBPACK_IMPORTED_MODULE_0__["GateStone"] {
  constructor( params, args ){
    super( params, args );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { closed: './tile_img/copper_stone.jpg',
             open: './tile_img/copper_open.png'};
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
    super( params, args, 17, 'ghosty' );
    if (this.grid.name === 'play') {
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach( key => this.subscribeToKeyDown(key));
      this.subscribeToTouchSwipe();
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

  keyDownHandler( key, hold = false ){
    let moveDirection = key.slice(5).toLowerCase();
    let imageDirection = moveDirection;
    this.addAnimationFunction( 'move', () => {
      this.currentImage = imageDirection;
      this.removeAnimationFunction('move', 0);
    } );
    if (this.requestMove( moveDirection )) {
      this.griga.ghosty.play.keyTrackEntity.sceneChanged = true;
    } else { moveDirection = 'stay' };
    this.move( moveDirection, false, hold);
  }

  touchSwipeHandler( direction ){
    this.keyDownHandler( `Arrow${direction}` );
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
    if (['selection-hotbar', 'all-entities-selection'].includes(this.grid.name)) {
      this.currentImage = 'selection';
      return this;
    };

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
    return { default: './tile_img/hole_background.jpg',
             selection: './tile_img/hole.jpg'};
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

/***/ "./src/ghosty/entities/ghosty_entities/hole_circle.js":
/*!************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/hole_circle.js ***!
  \************************************************************/
/*! exports provided: HoleCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoleCircle", function() { return HoleCircle; });
/* harmony import */ var _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ghosty_entity */ "./src/ghosty/entities/ghosty_entity.js");


class HoleCircle extends _ghosty_entity__WEBPACK_IMPORTED_MODULE_0__["GhostyEntity"] {
  constructor( params, args ){
    super( params, args, 1 );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { default:'./tile_img/hole_circle.png' };
  }

  beforeDelete(){
    const backgroundTile = this.grid.getEntityInstances( {
      tile: {c:this.c, r:this.r},
      type: 'BackgroundTile'
    } )[0];
    backgroundTile.moveEntitiesUp( {layerAddend: -10} );
  }

  allowLeave( requestChain ){
    if (requestChain[0][0].layerAddend === -10) {
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
    super( params, args, 13, 'pressure_plate' );
    this.gatesName = params.gates;
    this.state = params.state || 'up';
    this.logicGate = params.logicGate || 'AND';
    this.currentImage = this.state;
  }

  release(){
    this.state = this.currentImage = 'up';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (this.logicGate === 'AND'
      ||this.logicGate === 'OR' && !downs.includes(true)) {
      this.grid.getEntityInstances( {
        type: this.gatesName
      } ).forEach( g => g.close() );
    }
  }

  press(){
    this.state = this.currentImage = 'down';
    const downs = this.grid.getEntityInstances( {
      type: this.constructor.name
    } ).map( p => p.state === 'down' );
    if (this.logicGate === 'AND' && !downs.includes(false)
      ||this.logicGate === 'OR') {
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

  allowPlacing( entity ){
    return ![3, 4, 7].includes(entity.layer%10);
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
  constructor( params, args, shape ){
    super( params, args, 17, shape );
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

/***/ "./src/ghosty/entities/ghosty_entities/wooden_box_octagon.js":
/*!*******************************************************************!*\
  !*** ./src/ghosty/entities/ghosty_entities/wooden_box_octagon.js ***!
  \*******************************************************************/
/*! exports provided: WoodenBoxCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WoodenBoxCircle", function() { return WoodenBoxCircle; });
/* harmony import */ var _wooden_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wooden_box */ "./src/ghosty/entities/ghosty_entities/wooden_box.js");


class WoodenBoxCircle extends _wooden_box__WEBPACK_IMPORTED_MODULE_0__["WoodenBox"] {
  constructor( params, args ){
    super( params, args, 'circle' );
  }

  static getUnlockLevel( classicLevels ){
    const levelNames = classicLevels.map( l => l.name );
    const levelIndex = levelNames.indexOf( 'Parking Left' );
    return 0;
  }

  static get imgSources(){
    return { default:'./tile_img/wooden_box_octagon.png' };
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
  constructor( params, args, layer = 1, shape = 'stone' ){
    //overwrite params if the entities are in editor or selection-hotbar grid
    const superParams = {layer};
    if (params.layerAddend) { superParams.layer += params.layerAddend };
    super( superParams, args );
    this.shape = shape;
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
    } else if (this.grid.name === 'all-entities-selection') {
      this.allEntitiesBackground = this.grid.getEntityInstances({tile:{c:this.c,r:this.r},type:'AllEntitiesBackground'})[0];
      this.allEntitiesBackground.setOtherEntity( this );
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

  move( direction, waitAnimation = false, linear = false) {
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
    this.addMoveAnimation(relPos, absPos, linear);
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

  addMoveAnimation( relMoveDirection, targetTileAbsPos, linear = false ){
    this.addAnimationFunction( 'move',
      () => this.setMoveAnimationOffset(),
      {relMoveDirection, targetTileAbsPos, linear} );
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
    const animationObject = this.animationFunctions['move'][0];
    let offset = 1 - Math.sqrt( timeSinceAnimationStart/MOVE_DURATION );
    if (animationObject.linear) {
      offset = 1 - timeSinceAnimationStart/MOVE_DURATION
    }
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
    if (!animationObject.changedLayer) {
      this.changeLayer( this.basisLayer + animationObject.changeInBaseLayer*10 );
      animationObject.changedLayer = true;
    }
    const timeSinceAnimationStart = performance.now() - animationObject.startTime;
    let [ width, height, targetWidth, targetHeight ] = this.verticalMoveSizeFunction( timeSinceAnimationStart );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
      [ width, height ] = [ targetWidth, targetHeight ];
    }
    this.setWidth( width, false );
    this.setHeight( height, false );
    if (timeSinceAnimationStart > VERTICAL_MOVE_DURATION) {
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
      mouseDownSubscriptions: ['editor', 'selection'],
    }, args );
    this.otherEntity = null;
    this.lastClickTime = 0;
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
    if (performance.now()-this.lastClickTime < 300) {
      this.griga.ghosty.editor.selection.showAllEntitiesSelection( this );
    }
    this.lastClickTime = performance.now();
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
        `Ghosty Version 1.0.2 released!`,
        [
          {id: 'popup-close', text: 'Play', click: () => this.app.handlePlayButtonClick()},
        ], [],
        'What\'s new:',
        '-Round Boxes and Holes-<br>-CoppOR Gates-<br>-New Levels-<br>-Handy Support-<br>-Cutomize Editor-<br>-Smooth holding animation-'
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
      p: 'Ghosty was developed by Tom Kopolt. \n Current Version: 1.0.2'
    },
    {
      h3: null,
      p: 'Im currently reworking ghosty completely. Stay tuned for story, online levels and more'
    },
    {
      h3: null,
      p: 'Note that the Level Editor is only available on a PC or Laptop'
    }
  ]
}

/***/ }),

/***/ "./src/ghosty/level/all_classic_levels.json":
/*!**************************************************!*\
  !*** ./src/ghosty/level/all_classic_levels.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Introduction\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Space Invadors\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Boxes\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Fun\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Grid\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Goal\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]]]}},{\"name\":\"Two?!\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Rescue Me!\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Two Ghosties Practise\",\"difficulty\":\"intermediate\",\"creator\":\"Max\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[]],[[],[],[[\"Stone\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Goal\",{}]],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"position: relative;\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Stone\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Chaos\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{}]],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Hole Again\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"M\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Ghosty\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Bridge\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{}]]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[]],[[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]]]}},{\"name\":\"Two Spirals\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{}],[\"Goal\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"I'll let you take the win\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{}]],[],[],[],[],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Small order\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}],[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Piggyback\",\"difficulty\":\"intermediate\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{}]],[[\"Ghosty\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"2x Ghosty, 2x Box\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[[\"Ghosty\",{}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[[\"Ghosty\",{}]],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[[\"Goal\",{}]],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[[\"Goal\",{}]],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Parking Left\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"DiamAND Gate\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Stone Bridge\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"I pack my backpack\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[]],[[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[[\"WoodenBox\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[],[],[[\"DiamondPressurePlate\",null]],[],[[\"DiamondPressurePlate\",null]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Parking Right\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"DiamondPressurePlate\",null]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Iland\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Iland Again\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Ghosty Elevator\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[[\"DiamondPressurePlate\",null]],[],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[[\"Goal\",{}]],[],[],[],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Elevator\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[]],[[],[],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[]],[[],[],[],[],[],[],[],[[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Hole\",{}]],[]],[[],[],[],[],[],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[]],[[],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[]],[[],[],[],[],[[\"DiamondPressurePlate\",null]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Hole\",{}]],[],[],[],[],[]],[[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[]],[[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[]],[[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[]],[[],[],[],[],[[\"Hole\",{}]],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Vertical\",\"difficulty\":\"hard\",\"creator\":\"Trummi & Tom\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]],[[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Stone\",{}]]]]}},{\"name\":\"Ghosty Staircase\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[],[],[],[],[],[],[],[],[[\"WoodenBox\",{}]]],[[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]]]]}},{\"name\":\"Conquer\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[],[],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"Stone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]]]}},{\"name\":\"Trio\",\"difficulty\":\"schwer\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[[\"Goal\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Goal\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Box Labyrinth\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Ghosty\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"facing\":\"right\"}],[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}],[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}],[\"Goal\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Goal\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"DiamAND Gate Bridges\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"WoodenBox\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Gate Grid\",\"difficulty\":\"unknown\",\"creator\":\"unknown\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Hole\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[]]]}},{\"name\":\"Pushy Level 173\",\"difficulty\":\"schwer\",\"creator\":\"Lernwerkstatt 8\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Goal\",{}]],[],[],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[],[],[]],[[],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"DiamondPressurePlate\",null]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]],[],[]],[[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[]],[[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Where are my corners?\",\"difficulty\":\"easy\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBoxCircle\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Goal\",{}]],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Inside an Ear? Why?\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[[\"Stone\",{}]],[[\"HoleCircle\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[],[],[],[],[[\"WoodenBoxCircle\",{}]],[],[],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Goal\",{}]],[]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[],[]],[[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"Stone Face\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"WoodenBoxCircle\",{}]],[[\"WoodenBoxCircle\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[],[[\"WoodenBoxCircle\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[]],[[],[[\"Stone\",{}]],[],[],[],[],[],[],[[\"Stone\",{}]],[]],[[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[],[]]]}},{\"name\":\"CoppOR Gate\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"CoppOR DiamAND Logic\",\"difficulty\":\"easy\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"CopperStone\",{\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"CopperStone\",{\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Quad CoppOR\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[[\"Stone\",{}]],[],[],[[\"Ghosty\",{\"facing\":\"right\"}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"Stone\",{}]],[],[[\"CopperStone\",{\"state\":\"closed\"}]],[],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}],[\"DiamondStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[],[],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[],[]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Stone\",{}]],[],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"Hole\",{}],[\"CopperStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}],[\"CopperStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[],[[\"Stone\",{}]],[],[],[[\"Goal\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Four\",\"difficulty\":\"intermediate\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"Goal\",{}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"HoleCircle\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[[\"CopperStone\",{\"state\":\"closed\"}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[[\"WoodenBox\",{}]],[],[],[],[[\"Stone\",{}]],[[\"WoodenBoxCircle\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[[\"Stone\",{}]],[[\"Ghosty\",{\"facing\":\"right\"}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[[\"WoodenBox\",{}]],[],[],[[\"Stone\",{}]],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[],[[\"DiamondPressurePlate\",{\"state\":\"up\"}]],[],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"WoodenBox\",{}]],[[\"Stone\",{}]],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[],[],[],[],[],[],[],[],[[\"Stone\",{}]]],[[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}},{\"name\":\"Pufferfish or Eyes?\",\"difficulty\":\"schwer\",\"creator\":\"Tom Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}],[\"WoodenBoxCircle\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"HoleCircle\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"Ghosty\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"facing\":\"right\"}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"WoodenBox\",{}]],[],[[\"WoodenBox\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[],[[\"HoleCircle\",{}],[\"DiamondPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[],[[\"Hole\",{}],[\"WoodenBox\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[],[],[],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}],[\"WoodenBoxCircle\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperStone\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}],[\"CopperPressurePlate\",{\"widthMultiplier\":0.875,\"heightMultiplier\":0.875,\"layerAddend\":-10,\"state\":\"up\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Stone\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]]],[[],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"Hole\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Goal\",{}]]]]}},{\"name\":\"End Version 1.0.2\",\"difficulty\":\"impossible\",\"creator\":\"Anne Kopolt\",\"sceneData\":{\"detached\":[],\"tiles\":[[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"Ghosty\",{\"facing\":\"right\"}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"WoodenBoxCircle\",{}]],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"CopperPressurePlate\",{\"state\":\"up\"}]],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]],[[\"CopperStone\",{\"state\":\"closed\"}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"CopperPressurePlate\",{\"state\":\"up\"}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[[\"WoodenBoxCircle\",{}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"HoleCircle\",{}]],[[\"HoleCircle\",{}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[],[]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Goal\",{}]],[[\"Goal\",{}]]],[[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"DiamondStone\",{\"state\":\"closed\"}]],[[\"Stone\",{}]],[[\"Stone\",{}]]]]}}]");

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
    if (classicHighestLevelName === 'End Version 1.0.1') {
      classicHighestLevelName = 'Where are my corners?';
      console.log('End Level Version 1.0.1 was replaced by level "Where are my corners?"');
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
      <div class="editor-buttons-container hide-on-touch-devices">
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
            <div class="preview-difficulty-line preview-line"><span class="hide-on-width-below-500">difficulty:</span> <span class="difficulty-${i}">${level.difficulty}</span></div>
            <div class="preview-creator-line preview-line"><span class="hide-on-width-below-500">creator:</span> <span class="creator-${i}">${level.creator}</span></div>
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
            p: 'Use the arrow keys on your keyboard or swipe on a touchscreen'
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
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}

class Style {
  constructor( app ){
    this.app = app;
    this.scrollbar = document.querySelector('.scrollbar');
    this.scrollbar_box = document.querySelector('.scrollbar-box');
    this.levels_container = document.querySelector('.levels-container');
    this.wrapper = document.querySelector('.wrapper');
    this.scrollPos = 0;
    this.ongoingTouch = [];

    this.scrollbar.addEventListener('mousemove', e => this.handleMouseMoveOnScrollbar(e));
    this.scrollbar.addEventListener('wheel', e => this.handleMouseScroll(e));
    this.levels_container.addEventListener('wheel', e => this.handleMouseScroll(e));
    this.levels_container.addEventListener('touchmove', e => this.handleTouchMove(e));
    this.levels_container.addEventListener('touchend', e => this.handleTouchEnd(e));
    this.levels_container.addEventListener('touchstart', e => this.handleTouchStart(e));

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

  handleTouchMove(e){
    Object.values(e.changedTouches).forEach( touch => {
      const index = this.ongoingTouch.findIndex( sT => sT.identifier === touch.identifier );
      const savedTouch = this.ongoingTouch[index];
      const movementY = touch.pageY - savedTouch.pageY;
      this.setScrollPos(this.scrollPos - movementY*5);
      this.ongoingTouch[index] = copyTouch(touch);
    } );
  }

  handleTouchStart( e ){
    Object.values(e.changedTouches).forEach( touch => {
      this.ongoingTouch.push( copyTouch(touch) );
    } );
  }

  handleTouchEnd( e ){
    Object.values(e.changedTouches).forEach( touch => {
      const index = this.ongoingTouch.findIndex( sT => sT.identifier === touch.identifier );
      this.ongoingTouch.splice(index, 1);
    } );
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
    this.ongoingTouchStarts = [];
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

    this.wrapper.addEventListener('touchstart', (e) => this.touchStartHandler(e));
    this.wrapper.addEventListener('touchcancel', (e) => this.touchCancelHandler(e));
    this.wrapper.addEventListener('touchmove', (e) => this.touchMoveHandler(e));
    this.wrapper.addEventListener('touchend', (e) => this.touchEndHandler(e));
  }

  linkGrid( grid, displaySettings ){
    const gridLink = new GridLink( grid, displaySettings, this );
    gridLink.newCanvas();
    this.linkedGrids[ grid.name ] = gridLink;
  }
  unlinkGrid( gridName ){
    this.linkedGrids[ gridName ].canvas.remove();
    const index = this.gridsInHover.indexOf(gridName);
    if (index !== -1) {
      this.gridsInHover.splice(index, 1);
    }
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

  touchStartHandler( e ){
    function copyTouch({ identifier, pageX, pageY }) {
      return { identifier, pageX, pageY };
    }
    Object.values(e.changedTouches).forEach( touch => {
      this.ongoingTouchStarts.push( copyTouch(touch) );
    } );
  }

  touchEndHandler( e ){
    Object.values(e.changedTouches).forEach( touch => {
      const index = this.ongoingTouchStarts.findIndex( sT => sT.identifier === touch.identifier );
      const savedTouchStart = this.ongoingTouchStarts[index];
      const movementX = touch.pageX - savedTouchStart.pageX;
      const movementY = touch.pageY - savedTouchStart.pageY;
      let direction = null;
      if (Math.abs(movementX) > Math.abs(movementY)) {
        if (movementX > 0) { direction = 'right' }
        else { direction = 'left' };
      } else {
        if (movementY > 0) { direction = 'down' }
        else { direction = 'up' };
      }
      this.ongoingTouchStarts.splice(index, 1);
      Object.values(this.linkedGrids).forEach( grid => {
        grid.gridInstance.touchSwipeHandler( direction, movementX, movementY );
      } );
    } );
  }

  touchCancelHandler( e ){
    console.log('touchcancel');
  }

  touchMoveHandler( e ){
    // console.log('touchmove');
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
      touchStartSubscription: Joi.bool().default(false),
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
   * @param {boolean} [params.touchSwipeSubscription = false] - True to subscribe the entity to the touchStart Event
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
     * @description True if the entity is subscribed to the touchStart Event
     * @readonly
     * @type {boolean}
     */
    this.touchStartSubscription = validParams.touchStartSubscription;
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
    if (this.touchStartSubscription) {
      this.grid.subscribeEntityInstanceToTouchSwipe( this );
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
   * Gets called at every touchEnd of a Touch event occuring on one of the displays the grid is displayed on
   * @param {number} direction - Either right, left, down or up
   * @event
   */
  touchSwipeHandler( direction, movementX, movementY ){
    console.log( direction );
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
   * Subscribes the entity to the touchSwipe event
   */
  subscribeToTouchSwipe(){
    this.touchSwipeSubscription = true;
    this.grid.subscribeEntityInstanceToTouchSwipe( this );
  }
  /**
   * Unsubscribes the entity from the touchSwipe event
   */
  unsubscribeFromTouchSwipe(){
    this.touchSwipeSubscription = false;
    this.grid.unsubscribeEntityInstanceFromTouchSwipe( this );
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

  touchSwipeHandler( direction, movementX, movementY ){
    this.touchSwipeSubscriptions.forEach( e => e.touchSwipeHandler( direction, movementX, movementY ) );
  }

  //listenerStuff
  
  subscribeEntityInstanceToRenderStart( entityInstance ){
    this.renderStartSubscriptions.push( entityInstance );
  }
  unsubscribeEntityInstanceFromRenderStart( entityInstance ){
    const i = this.renderStartSubscriptions.indexOf( entityInstance );
    this.renderStartSubscriptions.splice( i, 1 );
  }

  subscribeEntityInstanceToTouchSwipe( entityInstance ){
    this.touchSwipeSubscriptions.push( entityInstance );
  }
  unsubscribeEntityInstanceFromTouchSwipe( entityInstance ){
    const i = this.touchSwipeSubscriptions.indexOf( entityInstance );
    this.touchSwipeSubscriptions.splice( i, 1 );
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
    this.touchSwipeSubscriptions = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BoYXBpL2pvaS9kaXN0L2pvaS1icm93c2VyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2FsbF9lbnRpdGllc19iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvYmFja2dyb3VuZF90aWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2NvcHBlcl9wcmVzc3VyZV9wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9jb3BwZXJfc3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZGlhbW9uZF9wcmVzc3VyZV9wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9kaWFtb25kX3N0b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2dhdGVfc3RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ2hvc3R5LmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2dvYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvaG9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlX2JvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlX2NpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9wcmVzc3VyZV9wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9zdG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy93b29kZW5fYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3dvb2Rlbl9ib3hfb2N0YWdvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2VudGl0aWVzL2dob3N0eV9lbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9lbnRpdGllcy9zZWxlY3Rpb25fYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9sZXZlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dob3N0eS9sb2NhbF9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2hvc3R5L3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9naG9zdHkvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyaWdhL2VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZ2EvZ3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JpZ2EvZ3JpZ2EuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3QiwwQkFBMEIsd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0Isd0JBQXdCO0FBQ24xSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBUTtBQUNwQixZQUFZLDhDQUFRO0FBQ3BCLGNBQWMsa0RBQVU7QUFDeEIsY0FBYyxrREFBVTtBQUN4QjtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUIsNkNBQUs7QUFDMUIscUJBQXFCLGtEQUFLO0FBQzFCLDRCQUE0Qiw0REFBWTtBQUN4QyxvQkFBb0IsMkNBQUk7QUFDeEIsc0JBQXNCLDhDQUFNO0FBQzVCLG9CQUFvQiwwQ0FBSTtBQUN4QixzQkFBc0IsOENBQU07QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDLDZDQUFLO0FBQ3RDO0FBQ0Esc0JBQXNCLHVEQUF1RDtBQUM3RTtBQUNBLFNBQVMsaUZBQWlGO0FBQzFGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxzREFBc0QsVUFBVSxHOzs7Ozs7Ozs7Ozs7QUN2TGhFO0FBQUE7QUFBQTtBQUFBO0FBQWdDOztBQUV6QjtBQUNQO0FBQ0Esa0NBQWtDLGtEQUFrRCwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQjtBQUMzVyx3Q0FBd0Msb0RBQW9ELCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGlDQUFpQywrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsaUNBQWlDLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGlDQUFpQywrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsaUNBQWlDLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGlDQUFpQywrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsaUNBQWlDLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLGlDQUFpQywrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsK0JBQStCLCtCQUErQiwrQkFBK0IsaUNBQWlDLCtCQUErQiwrQkFBK0IsK0JBQStC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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGNBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYztBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFFQUFxRSxnQkFBZ0IseUJBQXlCLGVBQWU7QUFDN0gsZUFBZSxPQUFPO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7O0FBRUE7QUFDQSx5QkFBeUIsS0FBSztBQUM5QixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsT0FBTztBQUNwQixlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlDQUF5QyxlQUFlO0FBQzdEO0FBQ0EsS0FBSyx5Q0FBeUM7QUFDOUMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsT0FBTztBQUNwQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGtEQUFrRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN4d0JBO0FBQUE7QUFBQTtBQUFBO0FBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFhLE9BQU87QUFDcEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBLGdDQUFnQyxnREFBTztBQUN2QztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9naG9zdHkvYXBwLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5qb2k9dCgpOmUuam9pPXQoKX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKHMpe2lmKHRbc10pcmV0dXJuIHRbc10uZXhwb3J0czt2YXIgbj10W3NdPXtpOnMsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtzXS5jYWxsKG4uZXhwb3J0cyxuLG4uZXhwb3J0cyxyKSxuLmw9ITAsbi5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LHMpe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpzfSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHM9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIocyksT2JqZWN0LmRlZmluZVByb3BlcnR5KHMsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBuIGluIGUpci5kKHMsbixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG4pKTtyZXR1cm4gc30sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIlwiLHIoci5zPTExKX0oW2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMTIpO2UuZXhwb3J0cz1mdW5jdGlvbihlLC4uLnQpe2lmKCFlKXtpZigxPT09dC5sZW5ndGgmJnRbMF1pbnN0YW5jZW9mIEVycm9yKXRocm93IHRbMF07dGhyb3cgbmV3IHModCl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMTIpLG89cigyOSk7bGV0IGEsaTtjb25zdCBsPXtpc29EYXRlOi9eKD86Wy0rXVxcZHsyfSk/KD86XFxkezR9KD8hXFxkezJ9XFxiKSkoPzooLT8pKD86KD86MFsxLTldfDFbMC0yXSkoPzpcXDEoPzpbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKD86WzAtNF1cXGR8NVswLTJdKSg/Oi0/WzEtN10pP3woPzowMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoPzpbMC01XVxcZHw2WzEtNl0pKSkoPyFbVF0kfFtUXVtcXGRdK1okKSg/OltUXFxzXSg/Oig/Oig/OlswMV1cXGR8MlswLTNdKSg/Oig6PylbMC01XVxcZCk/fDI0XFw6PzAwKSg/OlsuLF1cXGQrKD8hOikpPykoPzpcXDJbMC01XVxcZCg/OlsuLF1cXGQrKT8pPyg/OltaXXwoPzpbKy1dKSg/OlswMV1cXGR8MlswLTNdKSg/Ojo/WzAtNV1cXGQpPyk/KT8pPyQvfTt0LnZlcnNpb249by52ZXJzaW9uLHQuZGVmYXVsdHM9e2Fib3J0RWFybHk6ITAsYWxsb3dVbmtub3duOiExLGNhY2hlOiEwLGNvbnRleHQ6bnVsbCxjb252ZXJ0OiEwLGRhdGVGb3JtYXQ6XCJpc29cIixlcnJvcnM6e2VzY2FwZUh0bWw6ITEsbGFiZWw6XCJwYXRoXCIsbGFuZ3VhZ2U6bnVsbCxyZW5kZXI6ITAsc3RhY2s6ITEsd3JhcDp7bGFiZWw6J1wiJyxhcnJheTpcIltdXCJ9fSxleHRlcm5hbHM6ITAsbWVzc2FnZXM6e30sbm9uRW51bWVyYWJsZXM6ITEsbm9EZWZhdWx0czohMSxwcmVzZW5jZTpcIm9wdGlvbmFsXCIsc2tpcEZ1bmN0aW9uczohMSxzdHJpcFVua25vd246ITEsd2FybmluZ3M6ITF9LHQuc3ltYm9scz17YW55OlN5bWJvbC5mb3IoXCJAaGFwaS9qb2kvc2NoZW1hXCIpLGFycmF5U2luZ2xlOlN5bWJvbChcImFycmF5U2luZ2xlXCIpLGRlZXBEZWZhdWx0OlN5bWJvbChcImRlZXBEZWZhdWx0XCIpLGxpdGVyYWw6U3ltYm9sKFwibGl0ZXJhbFwiKSxvdmVycmlkZTpTeW1ib2woXCJvdmVycmlkZVwiKSxwcmVmczpTeW1ib2woXCJwcmVmc1wiKSxyZWY6U3ltYm9sKFwicmVmXCIpLHZhbHVlczpTeW1ib2woXCJ2YWx1ZXNcIiksdGVtcGxhdGU6U3ltYm9sKFwidGVtcGxhdGVcIil9LHQuYXNzZXJ0T3B0aW9ucz1mdW5jdGlvbihlLHQscj1cIk9wdGlvbnNcIil7cyhlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJPcHRpb25zIG11c3QgYmUgb2YgdHlwZSBvYmplY3RcIik7Y29uc3Qgbj1PYmplY3Qua2V5cyhlKS5maWx0ZXIoZT0+IXQuaW5jbHVkZXMoZSkpO3MoMD09PW4ubGVuZ3RoLFwiXCIuY29uY2F0KHIsXCIgY29udGFpbiB1bmtub3duIGtleXM6IFwiKS5jb25jYXQobikpfSx0LmNoZWNrUHJlZmVyZW5jZXM9ZnVuY3Rpb24oZSl7aT1pfHxyKDE2KTtjb25zdCB0PWkucHJlZmVyZW5jZXMudmFsaWRhdGUoZSk7aWYodC5lcnJvcil0aHJvdyBuZXcgbihbdC5lcnJvci5kZXRhaWxzWzBdLm1lc3NhZ2VdKX0sdC5jb21wYXJlPWZ1bmN0aW9uKGUsdCxyKXtzd2l0Y2gocil7Y2FzZVwiPVwiOnJldHVybiBlPT09dDtjYXNlXCI+XCI6cmV0dXJuIGU+dDtjYXNlXCI8XCI6cmV0dXJuIGU8dDtjYXNlXCI+PVwiOnJldHVybiBlPj10O2Nhc2VcIjw9XCI6cmV0dXJuIGU8PXR9fSx0LmRlZmF1bHQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwPT09ZT90OmV9LHQuaXNJc29EYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBsLmlzb0RhdGUudGVzdChlKX0sdC5pc051bWJlcj1mdW5jdGlvbihlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmIWlzTmFOKGUpfSx0LmlzUmVzb2x2YWJsZT1mdW5jdGlvbihlKXtyZXR1cm4hIWUmJihlW3Quc3ltYm9scy5yZWZdfHxlW3Quc3ltYm9scy50ZW1wbGF0ZV0pfSx0LmlzU2NoZW1hPWZ1bmN0aW9uKGUscj17fSl7Y29uc3Qgbj1lJiZlW3Quc3ltYm9scy5hbnldO3JldHVybiEhbiYmKHMoci5sZWdhY3l8fG4udmVyc2lvbj09PXQudmVyc2lvbixcIkNhbm5vdCBtaXggZGlmZmVyZW50IHZlcnNpb25zIG9mIGpvaSBzY2hlbWFzXCIpLCEwKX0sdC5pc1ZhbHVlcz1mdW5jdGlvbihlKXtyZXR1cm4gZVt0LnN5bWJvbHMudmFsdWVzXX0sdC5saW1pdD1mdW5jdGlvbihlKXtyZXR1cm4gTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+PTB9LHQucHJlZmVyZW5jZXM9ZnVuY3Rpb24oZSxzKXthPWF8fHIoOSksZT1lfHx7fSxzPXN8fHt9O2NvbnN0IG49T2JqZWN0LmFzc2lnbih7fSxlLHMpO3JldHVybiBzLmVycm9ycyYmZS5lcnJvcnMmJihuLmVycm9ycz1PYmplY3QuYXNzaWduKHt9LGUuZXJyb3JzLHMuZXJyb3JzKSxuLmVycm9ycy53cmFwPU9iamVjdC5hc3NpZ24oe30sZS5lcnJvcnMud3JhcCxzLmVycm9ycy53cmFwKSkscy5tZXNzYWdlcyYmKG4ubWVzc2FnZXM9YS5jb21waWxlKHMubWVzc2FnZXMsZS5tZXNzYWdlcykpLGRlbGV0ZSBuW3Quc3ltYm9scy5wcmVmc10sbn0sdC50cnlXaXRoUGF0aD1mdW5jdGlvbihlLHQscj17fSl7dHJ5e3JldHVybiBlKCl9Y2F0Y2goZSl7dGhyb3cgdm9pZCAwIT09ZS5wYXRoP2UucGF0aD10K1wiLlwiK2UucGF0aDplLnBhdGg9dCxyLmFwcGVuZCYmKGUubWVzc2FnZT1cIlwiLmNvbmNhdChlLm1lc3NhZ2UsXCIgKFwiKS5jb25jYXQoZS5wYXRoLFwiKVwiKSksZX19LHQudmFsaWRhdGVBcmc9ZnVuY3Rpb24oZSxyLHthc3NlcnQ6cyxtZXNzYWdlOm59KXtpZih0LmlzU2NoZW1hKHMpKXtjb25zdCB0PXMudmFsaWRhdGUoZSk7aWYoIXQuZXJyb3IpcmV0dXJuO3JldHVybiB0LmVycm9yLm1lc3NhZ2V9aWYoIXMoZSkpcmV0dXJuIHI/XCJcIi5jb25jYXQocixcIiBcIikuY29uY2F0KG4pOm59LHQudmVyaWZ5RmxhdD1mdW5jdGlvbihlLHQpe2Zvcihjb25zdCByIG9mIGUpcyghQXJyYXkuaXNBcnJheShyKSxcIk1ldGhvZCBubyBsb25nZXIgYWNjZXB0cyBhcnJheSBhcmd1bWVudHM6XCIsdCl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDYpLG49cigxMyksbz1yKDE0KSxhPXtuZWVkc1Byb3RvSGFjazpuZXcgU2V0KFtuLnNldCxuLm1hcCxuLndlYWtTZXQsbi53ZWFrTWFwXSl9O2UuZXhwb3J0cz1hLmNsb25lPWZ1bmN0aW9uKGUsdD17fSxyPW51bGwpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxudWxsPT09ZSlyZXR1cm4gZTtsZXQgcz1hLmNsb25lLGk9cjtpZih0LnNoYWxsb3cpe2lmKCEwIT09dC5zaGFsbG93KXJldHVybiBhLmNsb25lV2l0aFNoYWxsb3coZSx0KTtzPWU9PmV9ZWxzZSBpZihpKXtjb25zdCB0PWkuZ2V0KGUpO2lmKHQpcmV0dXJuIHR9ZWxzZSBpPW5ldyBNYXA7Y29uc3QgbD1uLmdldEludGVybmFsUHJvdG8oZSk7aWYobD09PW4uYnVmZmVyKXJldHVybiExO2lmKGw9PT1uLmRhdGUpcmV0dXJuIG5ldyBEYXRlKGUuZ2V0VGltZSgpKTtpZihsPT09bi5yZWdleClyZXR1cm4gbmV3IFJlZ0V4cChlKTtjb25zdCBjPWEuYmFzZShlLGwsdCk7aWYoYz09PWUpcmV0dXJuIGU7aWYoaSYmaS5zZXQoZSxjKSxsPT09bi5zZXQpZm9yKGNvbnN0IHIgb2YgZSljLmFkZChzKHIsdCxpKSk7ZWxzZSBpZihsPT09bi5tYXApZm9yKGNvbnN0W3Isbl1vZiBlKWMuc2V0KHIscyhuLHQsaSkpO2NvbnN0IHU9by5rZXlzKGUsdCk7Zm9yKGNvbnN0IHIgb2YgdSl7aWYoXCJfX3Byb3RvX19cIj09PXIpY29udGludWU7aWYobD09PW4uYXJyYXkmJlwibGVuZ3RoXCI9PT1yKXtjLmxlbmd0aD1lLmxlbmd0aDtjb250aW51ZX1jb25zdCBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxyKTtvP28uZ2V0fHxvLnNldD9PYmplY3QuZGVmaW5lUHJvcGVydHkoYyxyLG8pOm8uZW51bWVyYWJsZT9jW3JdPXMoZVtyXSx0LGkpOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShjLHIse2VudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwLHZhbHVlOnMoZVtyXSx0LGkpfSk6T2JqZWN0LmRlZmluZVByb3BlcnR5KGMscix7ZW51bWVyYWJsZTohMCx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITAsdmFsdWU6cyhlW3JdLHQsaSl9KX1yZXR1cm4gY30sYS5jbG9uZVdpdGhTaGFsbG93PWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj10LnNoYWxsb3c7KHQ9T2JqZWN0LmFzc2lnbih7fSx0KSkuc2hhbGxvdz0hMTtjb25zdCBuPW5ldyBNYXA7Zm9yKGNvbnN0IHQgb2Ygcil7Y29uc3Qgcj1zKGUsdCk7XCJvYmplY3RcIiE9dHlwZW9mIHImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHJ8fG4uc2V0KHIscil9cmV0dXJuIGEuY2xvbmUoZSx0LG4pfSxhLmJhc2U9ZnVuY3Rpb24oZSx0LHIpe2lmKCExPT09ci5wcm90b3R5cGUpcmV0dXJuIGEubmVlZHNQcm90b0hhY2suaGFzKHQpP25ldyB0LmNvbnN0cnVjdG9yOnQ9PT1uLmFycmF5P1tdOnt9O2NvbnN0IHM9T2JqZWN0LmdldFByb3RvdHlwZU9mKGUpO2lmKHMmJnMuaXNJbW11dGFibGUpcmV0dXJuIGU7aWYodD09PW4uYXJyYXkpe2NvbnN0IGU9W107cmV0dXJuIHMhPT10JiZPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxzKSxlfWlmKGEubmVlZHNQcm90b0hhY2suaGFzKHQpKXtjb25zdCBlPW5ldyBzLmNvbnN0cnVjdG9yO3JldHVybiBzIT09dCYmT2JqZWN0LnNldFByb3RvdHlwZU9mKGUscyksZX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShzKX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDM0KSxvPXIoMSksYT1yKDkpO2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImFueVwiLGZsYWdzOntvbmx5OntkZWZhdWx0OiExfX0sdGVybXM6e2FsdGVyYXRpb25zOntpbml0Om51bGx9LGV4YW1wbGVzOntpbml0Om51bGx9LGV4dGVybmFsczp7aW5pdDpudWxsfSxtZXRhczp7aW5pdDpbXX0sbm90ZXM6e2luaXQ6W119LHNoYXJlZDp7aW5pdDpudWxsfSx0YWdzOntpbml0OltdfSx3aGVuczp7aW5pdDpudWxsfX0scnVsZXM6e2N1c3RvbTp7bWV0aG9kKGUsdCl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgZSxcIk1ldGhvZCBtdXN0IGJlIGEgZnVuY3Rpb25cIikscyh2b2lkIDA9PT10fHx0JiZcInN0cmluZ1wiPT10eXBlb2YgdCxcIkRlc2NyaXB0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiY3VzdG9tXCIsYXJnczp7bWV0aG9kOmUsZGVzY3JpcHRpb246dH19KX0sdmFsaWRhdGUoZSx0LHttZXRob2Q6cn0pe3RyeXtyZXR1cm4gcihlLHQpfWNhdGNoKGUpe3JldHVybiB0LmVycm9yKFwiYW55LmN1c3RvbVwiLHtlcnJvcjplfSl9fSxhcmdzOltcIm1ldGhvZFwiLFwiZGVzY3JpcHRpb25cIl0sbXVsdGk6ITB9LG1lc3NhZ2VzOnttZXRob2QoZSl7cmV0dXJuIHRoaXMucHJlZnMoe21lc3NhZ2VzOmV9KX19LHNoYXJlZDp7bWV0aG9kKGUpe3Moby5pc1NjaGVtYShlKSYmZS5fZmxhZ3MuaWQsXCJTY2hlbWEgbXVzdCBiZSBhIHNjaGVtYSB3aXRoIGFuIGlkXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0LiRfdGVybXMuc2hhcmVkPXQuJF90ZXJtcy5zaGFyZWR8fFtdLHQuJF90ZXJtcy5zaGFyZWQucHVzaChlKSx0LiRfbXV0YXRlUmVnaXN0ZXIoZSksdH19LHdhcm5pbmc6e21ldGhvZChlLHQpe3JldHVybiBzKGUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCB3YXJuaW5nIGNvZGVcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ3YXJuaW5nXCIsYXJnczp7Y29kZTplLGxvY2FsOnR9LHdhcm46ITB9KX0sdmFsaWRhdGU6KGUsdCx7Y29kZTpyLGxvY2FsOnN9KT0+dC5lcnJvcihyLHMpLGFyZ3M6W1wiY29kZVwiLFwibG9jYWxcIl0sbXVsdGk6ITB9fSxtb2RpZmllcnM6e2tlZXAoZSx0PSEwKXtlLmtlZXA9dH0sbWVzc2FnZShlLHQpe2UubWVzc2FnZT1hLmNvbXBpbGUodCl9LHdhcm4oZSx0PSEwKXtlLndhcm49dH19LG1hbmlmZXN0OntidWlsZChlLHQpe2Zvcihjb25zdCByIGluIHQpe2NvbnN0IHM9dFtyXTtpZihbXCJleGFtcGxlc1wiLFwiZXh0ZXJuYWxzXCIsXCJtZXRhc1wiLFwibm90ZXNcIixcInRhZ3NcIl0uaW5jbHVkZXMocikpZm9yKGNvbnN0IHQgb2YgcyllPWVbci5zbGljZSgwLC0xKV0odCk7ZWxzZSBpZihcImFsdGVyYXRpb25zXCIhPT1yKWlmKFwid2hlbnNcIiE9PXIpe2lmKFwic2hhcmVkXCI9PT1yKWZvcihjb25zdCB0IG9mIHMpZT1lLnNoYXJlZCh0KX1lbHNlIGZvcihjb25zdCB0IG9mIHMpe2NvbnN0e3JlZjpyLGlzOnMsbm90Om4sdGhlbjpvLG90aGVyd2lzZTphLGNvbmNhdDppfT10O2U9aT9lLmNvbmNhdChpKTpyP2Uud2hlbihyLHtpczpzLG5vdDpuLHRoZW46byxvdGhlcndpc2U6YSxzd2l0Y2g6dC5zd2l0Y2gsYnJlYWs6dC5icmVha30pOmUud2hlbihzLHt0aGVuOm8sb3RoZXJ3aXNlOmEsYnJlYWs6dC5icmVha30pfWVsc2V7Y29uc3QgdD17fTtmb3IoY29uc3R7dGFyZ2V0OmUsYWRqdXN0ZXI6cn1vZiBzKXRbZV09cjtlPWUuYWx0ZXIodCl9fXJldHVybiBlfX0sbWVzc2FnZXM6e1wiYW55LmN1c3RvbVwiOlwie3sjbGFiZWx9fSBmYWlsZWQgY3VzdG9tIHZhbGlkYXRpb24gYmVjYXVzZSB7eyNlcnJvci5tZXNzYWdlfX1cIixcImFueS5kZWZhdWx0XCI6XCJ7eyNsYWJlbH19IHRocmV3IGFuIGVycm9yIHdoZW4gcnVubmluZyBkZWZhdWx0IG1ldGhvZFwiLFwiYW55LmZhaWxvdmVyXCI6XCJ7eyNsYWJlbH19IHRocmV3IGFuIGVycm9yIHdoZW4gcnVubmluZyBmYWlsb3ZlciBtZXRob2RcIixcImFueS5pbnZhbGlkXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGFuIGludmFsaWQgdmFsdWVcIixcImFueS5vbmx5XCI6J3t7I2xhYmVsfX0gbXVzdCBiZSB7aWYoI3ZhbGlkcy5sZW5ndGggPT0gMSwgXCJcIiwgXCJvbmUgb2YgXCIpfXt7I3ZhbGlkc319JyxcImFueS5yZWZcIjone3sjbGFiZWx9fSB7eyNhcmd9fSByZWZlcmVuY2VzIFwie3sjcmVmfX1cIiB3aGljaCB7eyNyZWFzb259fScsXCJhbnkucmVxdWlyZWRcIjpcInt7I2xhYmVsfX0gaXMgcmVxdWlyZWRcIixcImFueS51bmtub3duXCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkXCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMzIpLG49cigxKSxvPXIoNyk7dC5SZXBvcnQ9Y2xhc3N7Y29uc3RydWN0b3IoZSxyLHMsbixvLGEsaSl7aWYodGhpcy5jb2RlPWUsdGhpcy5mbGFncz1uLHRoaXMubWVzc2FnZXM9byx0aGlzLnBhdGg9YS5wYXRoLHRoaXMucHJlZnM9aSx0aGlzLnN0YXRlPWEsdGhpcy52YWx1ZT1yLHRoaXMubWVzc2FnZT1udWxsLHRoaXMudGVtcGxhdGU9bnVsbCx0aGlzLmxvY2FsPXN8fHt9LHRoaXMubG9jYWwubGFiZWw9dC5sYWJlbCh0aGlzLmZsYWdzLHRoaXMuc3RhdGUsdGhpcy5wcmVmcyx0aGlzLm1lc3NhZ2VzKSx2b2lkIDA9PT10aGlzLnZhbHVlfHx0aGlzLmxvY2FsLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fCh0aGlzLmxvY2FsLnZhbHVlPXRoaXMudmFsdWUpLHRoaXMucGF0aC5sZW5ndGgpe2NvbnN0IGU9dGhpcy5wYXRoW3RoaXMucGF0aC5sZW5ndGgtMV07XCJvYmplY3RcIiE9dHlwZW9mIGUmJih0aGlzLmxvY2FsLmtleT1lKX19X3NldFRlbXBsYXRlKGUpe2lmKHRoaXMudGVtcGxhdGU9ZSwhdGhpcy5mbGFncy5sYWJlbCYmMD09PXRoaXMucGF0aC5sZW5ndGgpe2NvbnN0IGU9dGhpcy5fdGVtcGxhdGUodGhpcy50ZW1wbGF0ZSxcInJvb3RcIik7ZSYmKHRoaXMubG9jYWwubGFiZWw9ZSl9fXRvU3RyaW5nKCl7aWYodGhpcy5tZXNzYWdlKXJldHVybiB0aGlzLm1lc3NhZ2U7Y29uc3QgZT10aGlzLmNvZGU7aWYoIXRoaXMucHJlZnMuZXJyb3JzLnJlbmRlcilyZXR1cm4gdGhpcy5jb2RlO2NvbnN0IHQ9dGhpcy5fdGVtcGxhdGUodGhpcy50ZW1wbGF0ZSl8fHRoaXMuX3RlbXBsYXRlKHRoaXMucHJlZnMubWVzc2FnZXMpfHx0aGlzLl90ZW1wbGF0ZSh0aGlzLm1lc3NhZ2VzKTtyZXR1cm4gdm9pZCAwPT09dD8nRXJyb3IgY29kZSBcIicuY29uY2F0KGUsJ1wiIGlzIG5vdCBkZWZpbmVkLCB5b3VyIGN1c3RvbSB0eXBlIGlzIG1pc3NpbmcgdGhlIGNvcnJlY3QgbWVzc2FnZXMgZGVmaW5pdGlvbicpOih0aGlzLm1lc3NhZ2U9dC5yZW5kZXIodGhpcy52YWx1ZSx0aGlzLnN0YXRlLHRoaXMucHJlZnMsdGhpcy5sb2NhbCx7ZXJyb3JzOnRoaXMucHJlZnMuZXJyb3JzLG1lc3NhZ2VzOlt0aGlzLnByZWZzLm1lc3NhZ2VzLHRoaXMubWVzc2FnZXNdfSksdGhpcy5wcmVmcy5lcnJvcnMubGFiZWx8fCh0aGlzLm1lc3NhZ2U9dGhpcy5tZXNzYWdlLnJlcGxhY2UoL15cIlwiIC8sXCJcIikudHJpbSgpKSx0aGlzLm1lc3NhZ2UpfV90ZW1wbGF0ZShlLHIpe3JldHVybiB0LnRlbXBsYXRlKHRoaXMudmFsdWUsZSxyfHx0aGlzLmNvZGUsdGhpcy5zdGF0ZSx0aGlzLnByZWZzKX19LHQucGF0aD1mdW5jdGlvbihlKXtsZXQgdD1cIlwiO2Zvcihjb25zdCByIG9mIGUpXCJvYmplY3RcIiE9dHlwZW9mIHImJihcInN0cmluZ1wiPT10eXBlb2Ygcj8odCYmKHQrPVwiLlwiKSx0Kz1yKTp0Kz1cIltcIi5jb25jYXQocixcIl1cIikpO3JldHVybiB0fSx0LnRlbXBsYXRlPWZ1bmN0aW9uKGUsdCxyLHMsYSl7aWYoIXQpcmV0dXJuO2lmKG8uaXNUZW1wbGF0ZSh0KSlyZXR1cm5cInJvb3RcIiE9PXI/dDpudWxsO2xldCBpPWEuZXJyb3JzLmxhbmd1YWdlO3JldHVybiBuLmlzUmVzb2x2YWJsZShpKSYmKGk9aS5yZXNvbHZlKGUscyxhKSksaSYmdFtpXSYmdm9pZCAwIT09dFtpXVtyXT90W2ldW3JdOnRbcl19LHQubGFiZWw9ZnVuY3Rpb24oZSxyLHMsbil7aWYoZS5sYWJlbClyZXR1cm4gZS5sYWJlbDtpZighcy5lcnJvcnMubGFiZWwpcmV0dXJuXCJcIjtsZXQgbz1yLnBhdGg7XCJrZXlcIj09PXMuZXJyb3JzLmxhYmVsJiZyLnBhdGgubGVuZ3RoPjEmJihvPXIucGF0aC5zbGljZSgtMSkpO2NvbnN0IGE9dC5wYXRoKG8pO3JldHVybiBhfHwodC50ZW1wbGF0ZShudWxsLHMubWVzc2FnZXMsXCJyb290XCIscixzKXx8biYmdC50ZW1wbGF0ZShudWxsLG4sXCJyb290XCIscixzKXx8XCJ2YWx1ZVwiKX0sdC5wcm9jZXNzPWZ1bmN0aW9uKGUscixzKXtpZighZSlyZXR1cm4gbnVsbDtjb25zdHtvdmVycmlkZTpuLG1lc3NhZ2U6byxkZXRhaWxzOmF9PXQuZGV0YWlscyhlKTtpZihuKXJldHVybiBuO2lmKHMuZXJyb3JzLnN0YWNrKXJldHVybiBuZXcgdC5WYWxpZGF0aW9uRXJyb3IobyxhLHIpO2NvbnN0IGk9RXJyb3Iuc3RhY2tUcmFjZUxpbWl0O0Vycm9yLnN0YWNrVHJhY2VMaW1pdD0wO2NvbnN0IGw9bmV3IHQuVmFsaWRhdGlvbkVycm9yKG8sYSxyKTtyZXR1cm4gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0PWksbH0sdC5kZXRhaWxzPWZ1bmN0aW9uKGUsdD17fSl7bGV0IHI9W107Y29uc3Qgcz1bXTtmb3IoY29uc3QgbiBvZiBlKXtpZihuIGluc3RhbmNlb2YgRXJyb3Ipe2lmKCExIT09dC5vdmVycmlkZSlyZXR1cm57b3ZlcnJpZGU6bn07Y29uc3QgZT1uLnRvU3RyaW5nKCk7ci5wdXNoKGUpLHMucHVzaCh7bWVzc2FnZTplLHR5cGU6XCJvdmVycmlkZVwiLGNvbnRleHQ6e2Vycm9yOm59fSk7Y29udGludWV9Y29uc3QgZT1uLnRvU3RyaW5nKCk7ci5wdXNoKGUpLHMucHVzaCh7bWVzc2FnZTplLHBhdGg6bi5wYXRoLmZpbHRlcihlPT5cIm9iamVjdFwiIT10eXBlb2YgZSksdHlwZTpuLmNvZGUsY29udGV4dDpuLmxvY2FsfSl9cmV0dXJuIHIubGVuZ3RoPjEmJihyPVsuLi5uZXcgU2V0KHIpXSkse21lc3NhZ2U6ci5qb2luKFwiLiBcIiksZGV0YWlsczpzfX0sdC5WYWxpZGF0aW9uRXJyb3I9Y2xhc3MgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihlLHQscil7c3VwZXIoZSksdGhpcy5fb3JpZ2luYWw9cix0aGlzLmRldGFpbHM9dH1zdGF0aWMgaXNFcnJvcihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIHQuVmFsaWRhdGlvbkVycm9yfX0sdC5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmlzSm9pPSEwLHQuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5uYW1lPVwiVmFsaWRhdGlvbkVycm9yXCIsdC5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlLmFubm90YXRlPXMuZXJyb3J9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cig2KSxhPXIoMSk7bGV0IGk7Y29uc3QgbD17c3ltYm9sOlN5bWJvbChcInJlZlwiKSxkZWZhdWx0czp7YWRqdXN0Om51bGwsaW46ITEsaXRlcmFibGVzOm51bGwsbWFwOm51bGwsc2VwYXJhdG9yOlwiLlwiLHR5cGU6XCJ2YWx1ZVwifX07dC5jcmVhdGU9ZnVuY3Rpb24oZSx0PXt9KXtzKFwic3RyaW5nXCI9PXR5cGVvZiBlLFwiSW52YWxpZCByZWZlcmVuY2Uga2V5OlwiLGUpLGEuYXNzZXJ0T3B0aW9ucyh0LFtcImFkanVzdFwiLFwiYW5jZXN0b3JcIixcImluXCIsXCJpdGVyYWJsZXNcIixcIm1hcFwiLFwicHJlZml4XCIsXCJzZXBhcmF0b3JcIl0pLHMoIXQucHJlZml4fHxcIm9iamVjdFwiPT10eXBlb2YgdC5wcmVmaXgsXCJvcHRpb25zLnByZWZpeCBtdXN0IGJlIG9mIHR5cGUgb2JqZWN0XCIpO2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxsLmRlZmF1bHRzLHQpO2RlbGV0ZSByLnByZWZpeDtjb25zdCBuPXIuc2VwYXJhdG9yLG89bC5jb250ZXh0KGUsbix0LnByZWZpeCk7aWYoci50eXBlPW8udHlwZSxlPW8ua2V5LFwidmFsdWVcIj09PXIudHlwZSlpZihvLnJvb3QmJihzKCFufHxlWzBdIT09bixcIkNhbm5vdCBzcGVjaWZ5IHJlbGF0aXZlIHBhdGggd2l0aCByb290IHByZWZpeFwiKSxyLmFuY2VzdG9yPVwicm9vdFwiLGV8fChlPW51bGwpKSxuJiZuPT09ZSllPW51bGwsci5hbmNlc3Rvcj0wO2Vsc2UgaWYodm9pZCAwIT09ci5hbmNlc3RvcilzKCFufHwhZXx8ZVswXSE9PW4sXCJDYW5ub3QgY29tYmluZSBwcmVmaXggd2l0aCBhbmNlc3RvciBvcHRpb25cIik7ZWxzZXtjb25zdFt0LHNdPWwuYW5jZXN0b3IoZSxuKTtzJiZcIlwiPT09KGU9ZS5zbGljZShzKSkmJihlPW51bGwpLHIuYW5jZXN0b3I9dH1yZXR1cm4gci5wYXRoPW4/bnVsbD09PWU/W106ZS5zcGxpdChuKTpbZV0sbmV3IGwuUmVmKHIpfSx0LmluPWZ1bmN0aW9uKGUscj17fSl7cmV0dXJuIHQuY3JlYXRlKGUsT2JqZWN0LmFzc2lnbih7fSxyLHtpbjohMH0pKX0sdC5pc1JlZj1mdW5jdGlvbihlKXtyZXR1cm4hIWUmJiEhZVthLnN5bWJvbHMucmVmXX0sbC5SZWY9Y2xhc3N7Y29uc3RydWN0b3IoZSl7cyhcIm9iamVjdFwiPT10eXBlb2YgZSxcIkludmFsaWQgcmVmZXJlbmNlIGNvbnN0cnVjdGlvblwiKSxhLmFzc2VydE9wdGlvbnMoZSxbXCJhZGp1c3RcIixcImFuY2VzdG9yXCIsXCJpblwiLFwiaXRlcmFibGVzXCIsXCJtYXBcIixcInBhdGhcIixcInNlcGFyYXRvclwiLFwidHlwZVwiLFwiZGVwdGhcIixcImtleVwiLFwicm9vdFwiLFwiZGlzcGxheVwiXSkscyhbITEsdm9pZCAwXS5pbmNsdWRlcyhlLnNlcGFyYXRvcil8fFwic3RyaW5nXCI9PXR5cGVvZiBlLnNlcGFyYXRvciYmMT09PWUuc2VwYXJhdG9yLmxlbmd0aCxcIkludmFsaWQgc2VwYXJhdG9yXCIpLHMoIWUuYWRqdXN0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmFkanVzdCxcIm9wdGlvbnMuYWRqdXN0IG11c3QgYmUgYSBmdW5jdGlvblwiKSxzKCFlLm1hcHx8QXJyYXkuaXNBcnJheShlLm1hcCksXCJvcHRpb25zLm1hcCBtdXN0IGJlIGFuIGFycmF5XCIpLHMoIWUubWFwfHwhZS5hZGp1c3QsXCJDYW5ub3Qgc2V0IGJvdGggbWFwIGFuZCBhZGp1c3Qgb3B0aW9uc1wiKSxPYmplY3QuYXNzaWduKHRoaXMsbC5kZWZhdWx0cyxlKSxzKFwidmFsdWVcIj09PXRoaXMudHlwZXx8dm9pZCAwPT09dGhpcy5hbmNlc3RvcixcIk5vbi12YWx1ZSByZWZlcmVuY2VzIGNhbm5vdCByZWZlcmVuY2UgYW5jZXN0b3JzXCIpLEFycmF5LmlzQXJyYXkodGhpcy5tYXApJiYodGhpcy5tYXA9bmV3IE1hcCh0aGlzLm1hcCkpLHRoaXMuZGVwdGg9dGhpcy5wYXRoLmxlbmd0aCx0aGlzLmtleT10aGlzLnBhdGgubGVuZ3RoP3RoaXMucGF0aC5qb2luKHRoaXMuc2VwYXJhdG9yKTpudWxsLHRoaXMucm9vdD10aGlzLnBhdGhbMF0sdGhpcy51cGRhdGVEaXNwbGF5KCl9cmVzb2x2ZShlLHQscixuLG89e30pe3JldHVybiBzKCF0aGlzLmlufHxvLmluLFwiSW52YWxpZCBpbigpIHJlZmVyZW5jZSB1c2FnZVwiKSxcImdsb2JhbFwiPT09dGhpcy50eXBlP3RoaXMuX3Jlc29sdmUoci5jb250ZXh0LHQsbyk6XCJsb2NhbFwiPT09dGhpcy50eXBlP3RoaXMuX3Jlc29sdmUobix0LG8pOnRoaXMuYW5jZXN0b3I/XCJyb290XCI9PT10aGlzLmFuY2VzdG9yP3RoaXMuX3Jlc29sdmUodC5hbmNlc3RvcnNbdC5hbmNlc3RvcnMubGVuZ3RoLTFdLHQsbyk6KHModGhpcy5hbmNlc3Rvcjw9dC5hbmNlc3RvcnMubGVuZ3RoLFwiSW52YWxpZCByZWZlcmVuY2UgZXhjZWVkcyB0aGUgc2NoZW1hIHJvb3Q6XCIsdGhpcy5kaXNwbGF5KSx0aGlzLl9yZXNvbHZlKHQuYW5jZXN0b3JzW3RoaXMuYW5jZXN0b3ItMV0sdCxvKSk6dGhpcy5fcmVzb2x2ZShlLHQsbyl9X3Jlc29sdmUoZSx0LHIpe2xldCBzO2lmKFwidmFsdWVcIj09PXRoaXMudHlwZSYmdC5tYWluc3RheS5zaGFkb3cmJiExIT09ci5zaGFkb3cmJihzPXQubWFpbnN0YXkuc2hhZG93LmdldCh0aGlzLmFic29sdXRlKHQpKSksdm9pZCAwPT09cyYmKHM9byhlLHRoaXMucGF0aCx7aXRlcmFibGVzOnRoaXMuaXRlcmFibGVzLGZ1bmN0aW9uczohMH0pKSx0aGlzLmFkanVzdCYmKHM9dGhpcy5hZGp1c3QocykpLHRoaXMubWFwKXtjb25zdCBlPXRoaXMubWFwLmdldChzKTt2b2lkIDAhPT1lJiYocz1lKX1yZXR1cm4gdC5tYWluc3RheSYmdC5tYWluc3RheS50cmFjZXIucmVzb2x2ZSh0LHRoaXMscyksc310b1N0cmluZygpe3JldHVybiB0aGlzLmRpc3BsYXl9YWJzb2x1dGUoZSl7cmV0dXJuWy4uLmUucGF0aC5zbGljZSgwLC10aGlzLmFuY2VzdG9yKSwuLi50aGlzLnBhdGhdfWNsb25lKCl7cmV0dXJuIG5ldyBsLlJlZih0aGlzKX1kZXNjcmliZSgpe2NvbnN0IGU9e3BhdGg6dGhpcy5wYXRofTtcInZhbHVlXCIhPT10aGlzLnR5cGUmJihlLnR5cGU9dGhpcy50eXBlKSxcIi5cIiE9PXRoaXMuc2VwYXJhdG9yJiYoZS5zZXBhcmF0b3I9dGhpcy5zZXBhcmF0b3IpLFwidmFsdWVcIj09PXRoaXMudHlwZSYmMSE9PXRoaXMuYW5jZXN0b3ImJihlLmFuY2VzdG9yPXRoaXMuYW5jZXN0b3IpLHRoaXMubWFwJiYoZS5tYXA9Wy4uLnRoaXMubWFwXSk7Zm9yKGNvbnN0IHQgb2ZbXCJhZGp1c3RcIixcIml0ZXJhYmxlc1wiXSludWxsIT09dGhpc1t0XSYmKGVbdF09dGhpc1t0XSk7cmV0dXJuITEhPT10aGlzLmluJiYoZS5pbj0hMCkse3JlZjplfX11cGRhdGVEaXNwbGF5KCl7Y29uc3QgZT1udWxsIT09dGhpcy5rZXk/dGhpcy5rZXk6XCJcIjtpZihcInZhbHVlXCIhPT10aGlzLnR5cGUpcmV0dXJuIHZvaWQodGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdCh0aGlzLnR5cGUsXCI6XCIpLmNvbmNhdChlKSk7aWYoIXRoaXMuc2VwYXJhdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQoZSkpO2lmKCF0aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpcIi5jb25jYXQodGhpcy5zZXBhcmF0b3IpLmNvbmNhdChlKSk7aWYoXCJyb290XCI9PT10aGlzLmFuY2VzdG9yKXJldHVybiB2b2lkKHRoaXMuZGlzcGxheT1cInJlZjpyb290OlwiLmNvbmNhdChlKSk7aWYoMT09PXRoaXMuYW5jZXN0b3IpcmV0dXJuIHZvaWQodGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdChlfHxcIi4uXCIpKTtjb25zdCB0PW5ldyBBcnJheSh0aGlzLmFuY2VzdG9yKzEpLmZpbGwodGhpcy5zZXBhcmF0b3IpLmpvaW4oXCJcIik7dGhpcy5kaXNwbGF5PVwicmVmOlwiLmNvbmNhdCh0KS5jb25jYXQoZXx8XCJcIil9fSxsLlJlZi5wcm90b3R5cGVbYS5zeW1ib2xzLnJlZl09ITAsdC5idWlsZD1mdW5jdGlvbihlKXtyZXR1cm5cInZhbHVlXCI9PT0oZT1PYmplY3QuYXNzaWduKHt9LGwuZGVmYXVsdHMsZSkpLnR5cGUmJnZvaWQgMD09PWUuYW5jZXN0b3ImJihlLmFuY2VzdG9yPTEpLG5ldyBsLlJlZihlKX0sbC5jb250ZXh0PWZ1bmN0aW9uKGUsdCxyPXt9KXtpZihlPWUudHJpbSgpLHIpe2NvbnN0IHM9dm9pZCAwPT09ci5nbG9iYWw/XCIkXCI6ci5nbG9iYWw7aWYocyE9PXQmJmUuc3RhcnRzV2l0aChzKSlyZXR1cm57a2V5OmUuc2xpY2Uocy5sZW5ndGgpLHR5cGU6XCJnbG9iYWxcIn07Y29uc3Qgbj12b2lkIDA9PT1yLmxvY2FsP1wiI1wiOnIubG9jYWw7aWYobiE9PXQmJmUuc3RhcnRzV2l0aChuKSlyZXR1cm57a2V5OmUuc2xpY2Uobi5sZW5ndGgpLHR5cGU6XCJsb2NhbFwifTtjb25zdCBvPXZvaWQgMD09PXIucm9vdD9cIi9cIjpyLnJvb3Q7aWYobyE9PXQmJmUuc3RhcnRzV2l0aChvKSlyZXR1cm57a2V5OmUuc2xpY2Uoby5sZW5ndGgpLHR5cGU6XCJ2YWx1ZVwiLHJvb3Q6ITB9fXJldHVybntrZXk6ZSx0eXBlOlwidmFsdWVcIn19LGwuYW5jZXN0b3I9ZnVuY3Rpb24oZSx0KXtpZighdClyZXR1cm5bMSwwXTtpZihlWzBdIT09dClyZXR1cm5bMSwwXTtpZihlWzFdIT09dClyZXR1cm5bMCwxXTtsZXQgcj0yO2Zvcig7ZVtyXT09PXQ7KSsrcjtyZXR1cm5bci0xLHJdfSx0LnRvU2libGluZz0wLHQudG9QYXJlbnQ9MSx0Lk1hbmFnZXI9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLnJlZnM9W119cmVnaXN0ZXIoZSxzKXtpZihlKWlmKHM9dm9pZCAwPT09cz90LnRvUGFyZW50OnMsQXJyYXkuaXNBcnJheShlKSlmb3IoY29uc3QgdCBvZiBlKXRoaXMucmVnaXN0ZXIodCxzKTtlbHNlIGlmKGEuaXNTY2hlbWEoZSkpZm9yKGNvbnN0IHQgb2YgZS5fcmVmcy5yZWZzKXQuYW5jZXN0b3Itcz49MCYmdGhpcy5yZWZzLnB1c2goe2FuY2VzdG9yOnQuYW5jZXN0b3Itcyxyb290OnQucm9vdH0pO2Vsc2UgdC5pc1JlZihlKSYmXCJ2YWx1ZVwiPT09ZS50eXBlJiZlLmFuY2VzdG9yLXM+PTAmJnRoaXMucmVmcy5wdXNoKHthbmNlc3RvcjplLmFuY2VzdG9yLXMscm9vdDplLnJvb3R9KSxpPWl8fHIoNyksaS5pc1RlbXBsYXRlKGUpJiZ0aGlzLnJlZ2lzdGVyKGUucmVmcygpLHMpfWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5yZWZzLmxlbmd0aH1jbG9uZSgpe2NvbnN0IGU9bmV3IHQuTWFuYWdlcjtyZXR1cm4gZS5yZWZzPW4odGhpcy5yZWZzKSxlfXJlc2V0KCl7dGhpcy5yZWZzPVtdfXJvb3RzKCl7cmV0dXJuIHRoaXMucmVmcy5maWx0ZXIoZT0+IWUuYW5jZXN0b3IpLm1hcChlPT5lLnJvb3QpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj17fTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2lmKCExPT09dHx8bnVsbD09dClyZXR1cm4gZTtcInN0cmluZ1wiPT10eXBlb2Yocj1yfHx7fSkmJihyPXtzZXBhcmF0b3I6cn0pO2NvbnN0IG89QXJyYXkuaXNBcnJheSh0KTtzKCFvfHwhci5zZXBhcmF0b3IsXCJTZXBhcmF0b3Igb3B0aW9uIG5vIHZhbGlkIGZvciBhcnJheS1iYXNlZCBjaGFpblwiKTtjb25zdCBhPW8/dDp0LnNwbGl0KHIuc2VwYXJhdG9yfHxcIi5cIik7bGV0IGk9ZTtmb3IobGV0IGU9MDtlPGEubGVuZ3RoOysrZSl7bGV0IG89YVtlXTtjb25zdCBsPXIuaXRlcmFibGVzJiZuLml0ZXJhYmxlcyhpKTtpZihBcnJheS5pc0FycmF5KGkpfHxcInNldFwiPT09bCl7Y29uc3QgZT1OdW1iZXIobyk7TnVtYmVyLmlzSW50ZWdlcihlKSYmKG89ZTwwP2kubGVuZ3RoK2U6ZSl9aWYoIWl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiExPT09ci5mdW5jdGlvbnN8fCFsJiZ2b2lkIDA9PT1pW29dKXtzKCFyLnN0cmljdHx8ZSsxPT09YS5sZW5ndGgsXCJNaXNzaW5nIHNlZ21lbnRcIixvLFwiaW4gcmVhY2ggcGF0aCBcIix0KSxzKFwib2JqZWN0XCI9PXR5cGVvZiBpfHwhMD09PXIuZnVuY3Rpb25zfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBpLFwiSW52YWxpZCBzZWdtZW50XCIsbyxcImluIHJlYWNoIHBhdGggXCIsdCksaT1yLmRlZmF1bHQ7YnJlYWt9aT1sP1wic2V0XCI9PT1sP1suLi5pXVtvXTppLmdldChvKTppW29dfXJldHVybiBpfSxuLml0ZXJhYmxlcz1mdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIFNldD9cInNldFwiOmUgaW5zdGFuY2VvZiBNYXA/XCJtYXBcIjp2b2lkIDB9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMzApLGE9cigzMSksaT1yKDEpLGw9cig0KSxjPXIoNSksdT17c3ltYm9sOlN5bWJvbChcInRlbXBsYXRlXCIpLG9wZW5zOm5ldyBBcnJheSgxZTMpLmpvaW4oXCJcXDBcIiksY2xvc2VzOm5ldyBBcnJheSgxZTMpLmpvaW4oXCJcdTAwMDFcIiksZGF0ZUZvcm1hdDp7ZGF0ZTpEYXRlLnByb3RvdHlwZS50b0RhdGVTdHJpbmcsaXNvOkRhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nLHN0cmluZzpEYXRlLnByb3RvdHlwZS50b1N0cmluZyx0aW1lOkRhdGUucHJvdG90eXBlLnRvVGltZVN0cmluZyx1dGM6RGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmd9fTtlLmV4cG9ydHM9dS5UZW1wbGF0ZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQpe3MoXCJzdHJpbmdcIj09dHlwZW9mIGUsXCJUZW1wbGF0ZSBzb3VyY2UgbXVzdCBiZSBhIHN0cmluZ1wiKSxzKCFlLmluY2x1ZGVzKFwiXFwwXCIpJiYhZS5pbmNsdWRlcyhcIlx1MDAwMVwiKSxcIlRlbXBsYXRlIHNvdXJjZSBjYW5ub3QgY29udGFpbiByZXNlcnZlZCBjb250cm9sIGNoYXJhY3RlcnNcIiksdGhpcy5zb3VyY2U9ZSx0aGlzLnJlbmRlcmVkPWUsdGhpcy5fdGVtcGxhdGU9bnVsbCx0aGlzLl9zZXR0aW5ncz1uKHQpLHRoaXMuX3BhcnNlKCl9X3BhcnNlKCl7aWYoIXRoaXMuc291cmNlLmluY2x1ZGVzKFwie1wiKSlyZXR1cm47Y29uc3QgZT11LmVuY29kZSh0aGlzLnNvdXJjZSksdD11LnNwbGl0KGUpO2xldCByPSExO2NvbnN0IHM9W10sbj10LnNoaWZ0KCk7biYmcy5wdXNoKG4pO2Zvcihjb25zdCBlIG9mIHQpe2NvbnN0IHQ9XCJ7XCIhPT1lWzBdLG49dD9cIn1cIjpcIn19XCIsbz1lLmluZGV4T2Yobik7aWYoLTE9PT1vfHxcIntcIj09PWVbMV0pe3MucHVzaChcIntcIi5jb25jYXQodS5kZWNvZGUoZSkpKTtjb250aW51ZX1jb25zdCBhPWUuc2xpY2UodD8wOjEsbyksaT10aGlzLl9yZWYodS5kZWNvZGUoYSksdCk7cy5wdXNoKGkpLFwic3RyaW5nXCIhPXR5cGVvZiBpJiYocj0hMCk7Y29uc3QgbD1lLnNsaWNlKG8rbi5sZW5ndGgpO2wmJnMucHVzaCh1LmRlY29kZShsKSl9cj90aGlzLl90ZW1wbGF0ZT1zOnRoaXMucmVuZGVyZWQ9cy5qb2luKFwiXCIpfXN0YXRpYyBkYXRlKGUsdCl7cmV0dXJuIHUuZGF0ZUZvcm1hdFt0LmRhdGVGb3JtYXRdLmNhbGwoZSl9ZGVzY3JpYmUoZT17fSl7aWYoIXRoaXMuX3NldHRpbmdzJiZlLmNvbXBhY3QpcmV0dXJuIHRoaXMuc291cmNlO2NvbnN0IHQ9e3RlbXBsYXRlOnRoaXMuc291cmNlfTtyZXR1cm4gdGhpcy5fc2V0dGluZ3MmJih0Lm9wdGlvbnM9dGhpcy5fc2V0dGluZ3MpLHR9c3RhdGljIGJ1aWxkKGUpe3JldHVybiBuZXcgdS5UZW1wbGF0ZShlLnRlbXBsYXRlLGUub3B0aW9ucyl9aXNEeW5hbWljKCl7cmV0dXJuISF0aGlzLl90ZW1wbGF0ZX1zdGF0aWMgaXNUZW1wbGF0ZShlKXtyZXR1cm4hIWUmJiEhZVtpLnN5bWJvbHMudGVtcGxhdGVdfXJlZnMoKXtpZighdGhpcy5fdGVtcGxhdGUpcmV0dXJuO2NvbnN0IGU9W107Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdGVtcGxhdGUpXCJzdHJpbmdcIiE9dHlwZW9mIHQmJmUucHVzaCguLi50LnJlZnMpO3JldHVybiBlfXJlc29sdmUoZSx0LHIscyl7cmV0dXJuIHRoaXMuX3RlbXBsYXRlJiYxPT09dGhpcy5fdGVtcGxhdGUubGVuZ3RoP3RoaXMuX3BhcnQodGhpcy5fdGVtcGxhdGVbMF0sZSx0LHIscyx7fSk6dGhpcy5yZW5kZXIoZSx0LHIscyl9X3BhcnQoZSwuLi50KXtyZXR1cm4gZS5yZWY/ZS5yZWYucmVzb2x2ZSguLi50KTplLmZvcm11bGEuZXZhbHVhdGUodCl9cmVuZGVyKGUsdCxyLHMsbj17fSl7aWYoIXRoaXMuaXNEeW5hbWljKCkpcmV0dXJuIHRoaXMucmVuZGVyZWQ7Y29uc3QgYT1bXTtmb3IoY29uc3QgaSBvZiB0aGlzLl90ZW1wbGF0ZSlpZihcInN0cmluZ1wiPT10eXBlb2YgaSlhLnB1c2goaSk7ZWxzZXtjb25zdCBsPXRoaXMuX3BhcnQoaSxlLHQscixzLG4pLGM9dS5zdHJpbmdpZnkobCxyLG4uZXJyb3JzKTtpZih2b2lkIDAhPT1jKXtjb25zdCBlPWkucmF3fHwhMT09PShuLmVycm9ycyYmbi5lcnJvcnMuZXNjYXBlSHRtbCk/YzpvKGMpLHQ9aS5yZWYmJlwibG9jYWxcIj09PWkucmVmLnR5cGUmJlwibGFiZWxcIj09PWkucmVmLmtleSYmci5lcnJvcnMud3JhcC5sYWJlbDthLnB1c2godS53cmFwKGUsdCkpfX1yZXR1cm4gYS5qb2luKFwiXCIpfV9yZWYoZSx0KXtjb25zdCByPVtdLHM9ZT0+e2NvbnN0IHQ9Yy5jcmVhdGUoZSx0aGlzLl9zZXR0aW5ncyk7cmV0dXJuIHIucHVzaCh0KSxlPT50LnJlc29sdmUoLi4uZSl9O3RyeXt2YXIgbj1uZXcgYS5QYXJzZXIoZSx7cmVmZXJlbmNlOnMsZnVuY3Rpb25zOnUuZnVuY3Rpb25zLGNvbnN0YW50czp1LmNvbnN0YW50c30pfWNhdGNoKHQpe3Rocm93IHQubWVzc2FnZT0nSW52YWxpZCB0ZW1wbGF0ZSB2YXJpYWJsZSBcIicuY29uY2F0KGUsJ1wiIGZhaWxzIGR1ZSB0bzogJykuY29uY2F0KHQubWVzc2FnZSksdH1yZXR1cm4gbi5zaW5nbGU/XCJyZWZlcmVuY2VcIj09PW4uc2luZ2xlLnR5cGU/e3JlZjpyWzBdLHJhdzp0LHJlZnM6cn06dS5zdHJpbmdpZnkobi5zaW5nbGUudmFsdWUpOntmb3JtdWxhOm4scmF3OnQscmVmczpyfX10b1N0cmluZygpe3JldHVybiB0aGlzLnNvdXJjZX19LHUuVGVtcGxhdGUucHJvdG90eXBlW2kuc3ltYm9scy50ZW1wbGF0ZV09ITAsdS5UZW1wbGF0ZS5wcm90b3R5cGUuaXNJbW11dGFibGU9ITAsdS5lbmNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXFxcXChcXHsrKS9nLChlLHQpPT51Lm9wZW5zLnNsaWNlKDAsdC5sZW5ndGgpKS5yZXBsYWNlKC9cXFxcKFxcfSspL2csKGUsdCk9PnUuY2xvc2VzLnNsaWNlKDAsdC5sZW5ndGgpKX0sdS5kZWNvZGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXFx1MDAwMC9nLFwie1wiKS5yZXBsYWNlKC9cXHUwMDAxL2csXCJ9XCIpfSx1LnNwbGl0PWZ1bmN0aW9uKGUpe2NvbnN0IHQ9W107bGV0IHI9XCJcIjtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3Qgbj1lW3NdO2lmKFwie1wiPT09bil7bGV0IG49XCJcIjtmb3IoO3MrMTxlLmxlbmd0aCYmXCJ7XCI9PT1lW3MrMV07KW4rPVwie1wiLCsrczt0LnB1c2gocikscj1ufWVsc2Ugcis9bn1yZXR1cm4gdC5wdXNoKHIpLHR9LHUud3JhcD1mdW5jdGlvbihlLHQpe3JldHVybiB0PzE9PT10Lmxlbmd0aD9cIlwiLmNvbmNhdCh0KS5jb25jYXQoZSkuY29uY2F0KHQpOlwiXCIuY29uY2F0KHRbMF0pLmNvbmNhdChlKS5jb25jYXQodFsxXSk6ZX0sdS5zdHJpbmdpZnk9ZnVuY3Rpb24oZSx0LHIpe2NvbnN0IHM9dHlwZW9mIGU7aWYobnVsbD09PWUpcmV0dXJuXCJudWxsXCI7aWYoXCJzdHJpbmdcIj09PXMpcmV0dXJuIGU7aWYoXCJudW1iZXJcIj09PXN8fFwiZnVuY3Rpb25cIj09PXN8fFwic3ltYm9sXCI9PT1zKXJldHVybiBlLnRvU3RyaW5nKCk7aWYoXCJvYmplY3RcIiE9PXMpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpO2lmKGUgaW5zdGFuY2VvZiBEYXRlKXJldHVybiB1LlRlbXBsYXRlLmRhdGUoZSx0KTtpZihlIGluc3RhbmNlb2YgTWFwKXtjb25zdCB0PVtdO2Zvcihjb25zdFtyLHNdb2YgZS5lbnRyaWVzKCkpdC5wdXNoKFwiXCIuY29uY2F0KHIudG9TdHJpbmcoKSxcIiAtPiBcIikuY29uY2F0KHMudG9TdHJpbmcoKSkpO2U9dH1pZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS50b1N0cmluZygpO2xldCBuPVwiXCI7Zm9yKGNvbnN0IHMgb2YgZSluPW4rKG4ubGVuZ3RoP1wiLCBcIjpcIlwiKSt1LnN0cmluZ2lmeShzLHQscik7cmV0dXJuIHUud3JhcChuLHQuZXJyb3JzLndyYXAuYXJyYXkpfSx1LmNvbnN0YW50cz17dHJ1ZTohMCxmYWxzZTohMSxudWxsOm51bGwsc2Vjb25kOjFlMyxtaW51dGU6NmU0LGhvdXI6MzZlNSxkYXk6ODY0ZTV9LHUuZnVuY3Rpb25zPXtpZjooZSx0LHIpPT5lP3Q6cixtc2coZSl7Y29uc3RbdCxyLHMsbixvXT10aGlzLGE9by5tZXNzYWdlcztpZighYSlyZXR1cm5cIlwiO2NvbnN0IGk9bC50ZW1wbGF0ZSh0LGFbMF0sZSxyLHMpfHxsLnRlbXBsYXRlKHQsYVsxXSxlLHIscyk7cmV0dXJuIGk/aS5yZW5kZXIodCxyLHMsbixvKTpcIlwifSxudW1iZXI6ZT0+XCJudW1iZXJcIj09dHlwZW9mIGU/ZTpcInN0cmluZ1wiPT10eXBlb2YgZT9wYXJzZUZsb2F0KGUpOlwiYm9vbGVhblwiPT10eXBlb2YgZT9lPzE6MDplIGluc3RhbmNlb2YgRGF0ZT9lLmdldFRpbWUoKTpudWxsfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMSksbz1yKDUpLGE9e307dC5zY2hlbWE9ZnVuY3Rpb24oZSx0LHI9e30pe24uYXNzZXJ0T3B0aW9ucyhyLFtcImFwcGVuZFBhdGhcIixcIm92ZXJyaWRlXCJdKTt0cnl7cmV0dXJuIGEuc2NoZW1hKGUsdCxyKX1jYXRjaChlKXt0aHJvdyByLmFwcGVuZFBhdGgmJnZvaWQgMCE9PWUucGF0aCYmKGUubWVzc2FnZT1cIlwiLmNvbmNhdChlLm1lc3NhZ2UsXCIgKFwiKS5jb25jYXQoZS5wYXRoLFwiKVwiKSksZX19LGEuc2NoZW1hPWZ1bmN0aW9uKGUsdCxyKXtzKHZvaWQgMCE9PXQsXCJJbnZhbGlkIHVuZGVmaW5lZCBzY2hlbWFcIiksQXJyYXkuaXNBcnJheSh0KSYmKHModC5sZW5ndGgsXCJJbnZhbGlkIGVtcHR5IGFycmF5IHNjaGVtYVwiKSwxPT09dC5sZW5ndGgmJih0PXRbMF0pKTtjb25zdCBvPSh0LC4uLnMpPT4hMSE9PXIub3ZlcnJpZGU/dC52YWxpZChlLm92ZXJyaWRlLC4uLnMpOnQudmFsaWQoLi4ucyk7aWYoYS5zaW1wbGUodCkpcmV0dXJuIG8oZSx0KTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBlLmN1c3RvbSh0KTtpZihzKFwib2JqZWN0XCI9PXR5cGVvZiB0LFwiSW52YWxpZCBzY2hlbWEgY29udGVudDpcIix0eXBlb2YgdCksbi5pc1Jlc29sdmFibGUodCkpcmV0dXJuIG8oZSx0KTtpZihuLmlzU2NoZW1hKHQpKXJldHVybiB0O2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcihjb25zdCByIG9mIHQpaWYoIWEuc2ltcGxlKHIpKXJldHVybiBlLmFsdGVybmF0aXZlcygpLnRyeSguLi50KTtyZXR1cm4gbyhlLC4uLnQpfXJldHVybiB0IGluc3RhbmNlb2YgUmVnRXhwP2Uuc3RyaW5nKCkucmVnZXgodCk6dCBpbnN0YW5jZW9mIERhdGU/byhlLmRhdGUoKSx0KToocyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFwiU2NoZW1hIGNhbiBvbmx5IGNvbnRhaW4gcGxhaW4gb2JqZWN0c1wiKSxlLm9iamVjdCgpLmtleXModCkpfSx0LnJlZj1mdW5jdGlvbihlLHQpe3JldHVybiBvLmlzUmVmKGUpP2U6by5jcmVhdGUoZSx0KX0sdC5jb21waWxlPWZ1bmN0aW9uKGUscixvPXt9KXtuLmFzc2VydE9wdGlvbnMobyxbXCJsZWdhY3lcIl0pO2NvbnN0IGk9ciYmcltuLnN5bWJvbHMuYW55XTtpZihpKXJldHVybiBzKG8ubGVnYWN5fHxpLnZlcnNpb249PT1uLnZlcnNpb24sXCJDYW5ub3QgbWl4IGRpZmZlcmVudCB2ZXJzaW9ucyBvZiBqb2kgc2NoZW1hczpcIixpLnZlcnNpb24sbi52ZXJzaW9uKSxyO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByfHwhby5sZWdhY3kpcmV0dXJuIHQuc2NoZW1hKGUscix7YXBwZW5kUGF0aDohMH0pO2NvbnN0IGw9YS53YWxrKHIpO3JldHVybiBsP2wuY29tcGlsZShsLnJvb3Qscik6dC5zY2hlbWEoZSxyLHthcHBlbmRQYXRoOiEwfSl9LGEud2Fsaz1mdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IoY29uc3QgdCBvZiBlKXtjb25zdCBlPWEud2Fsayh0KTtpZihlKXJldHVybiBlfXJldHVybiBudWxsfWNvbnN0IHQ9ZVtuLnN5bWJvbHMuYW55XTtpZih0KXJldHVybntyb290OmVbdC5yb290XSxjb21waWxlOnQuY29tcGlsZX07cyhPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSk9PT1PYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pLFwiU2NoZW1hIGNhbiBvbmx5IGNvbnRhaW4gcGxhaW4gb2JqZWN0c1wiKTtmb3IoY29uc3QgdCBpbiBlKXtjb25zdCByPWEud2FsayhlW3RdKTtpZihyKXJldHVybiByfXJldHVybiBudWxsfSxhLnNpbXBsZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWV8fFtcImJvb2xlYW5cIixcInN0cmluZ1wiLFwibnVtYmVyXCJdLmluY2x1ZGVzKHR5cGVvZiBlKX0sdC53aGVuPWZ1bmN0aW9uKGUscixpKXtpZih2b2lkIDA9PT1pJiYocyhyJiZcIm9iamVjdFwiPT10eXBlb2YgcixcIk1pc3Npbmcgb3B0aW9uc1wiKSxpPXIscj1vLmNyZWF0ZShcIi5cIikpLEFycmF5LmlzQXJyYXkoaSkmJihpPXtzd2l0Y2g6aX0pLG4uYXNzZXJ0T3B0aW9ucyhpLFtcImlzXCIsXCJub3RcIixcInRoZW5cIixcIm90aGVyd2lzZVwiLFwic3dpdGNoXCIsXCJicmVha1wiXSksbi5pc1NjaGVtYShyKSlyZXR1cm4gcyh2b2lkIDA9PT1pLmlzLCdcImlzXCIgY2FuIG5vdCBiZSB1c2VkIHdpdGggYSBzY2hlbWEgY29uZGl0aW9uJykscyh2b2lkIDA9PT1pLm5vdCwnXCJub3RcIiBjYW4gbm90IGJlIHVzZWQgd2l0aCBhIHNjaGVtYSBjb25kaXRpb24nKSxzKHZvaWQgMD09PWkuc3dpdGNoLCdcInN3aXRjaFwiIGNhbiBub3QgYmUgdXNlZCB3aXRoIGEgc2NoZW1hIGNvbmRpdGlvbicpLGEuY29uZGl0aW9uKGUse2lzOnIsdGhlbjppLnRoZW4sb3RoZXJ3aXNlOmkub3RoZXJ3aXNlLGJyZWFrOmkuYnJlYWt9KTtpZihzKG8uaXNSZWYocil8fFwic3RyaW5nXCI9PXR5cGVvZiByLFwiSW52YWxpZCBjb25kaXRpb246XCIscikscyh2b2lkIDA9PT1pLm5vdHx8dm9pZCAwPT09aS5pcywnQ2Fubm90IGNvbWJpbmUgXCJpc1wiIHdpdGggXCJub3RcIicpLHZvaWQgMD09PWkuc3dpdGNoKXtsZXQgbD1pO3ZvaWQgMCE9PWkubm90JiYobD17aXM6aS5ub3QsdGhlbjppLm90aGVyd2lzZSxvdGhlcndpc2U6aS50aGVuLGJyZWFrOmkuYnJlYWt9KTtsZXQgYz12b2lkIDAhPT1sLmlzP2UuJF9jb21waWxlKGwuaXMpOmUuJF9yb290LmludmFsaWQobnVsbCwhMSwwLFwiXCIpLnJlcXVpcmVkKCk7cmV0dXJuIHModm9pZCAwIT09bC50aGVufHx2b2lkIDAhPT1sLm90aGVyd2lzZSwnb3B0aW9ucyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIFwidGhlblwiLCBcIm90aGVyd2lzZVwiLCBvciBcInN3aXRjaFwiJykscyh2b2lkIDA9PT1sLmJyZWFrfHx2b2lkIDA9PT1sLnRoZW58fHZvaWQgMD09PWwub3RoZXJ3aXNlLFwiQ2Fubm90IHNwZWNpZnkgdGhlbiwgb3RoZXJ3aXNlLCBhbmQgYnJlYWsgYWxsIHRvZ2V0aGVyXCIpLHZvaWQgMD09PWkuaXN8fG8uaXNSZWYoaS5pcyl8fG4uaXNTY2hlbWEoaS5pcyl8fChjPWMucmVxdWlyZWQoKSksYS5jb25kaXRpb24oZSx7cmVmOnQucmVmKHIpLGlzOmMsdGhlbjpsLnRoZW4sb3RoZXJ3aXNlOmwub3RoZXJ3aXNlLGJyZWFrOmwuYnJlYWt9KX1zKEFycmF5LmlzQXJyYXkoaS5zd2l0Y2gpLCdcInN3aXRjaFwiIG11c3QgYmUgYW4gYXJyYXknKSxzKHZvaWQgMD09PWkuaXMsJ0Nhbm5vdCBjb21iaW5lIFwic3dpdGNoXCIgd2l0aCBcImlzXCInKSxzKHZvaWQgMD09PWkubm90LCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJub3RcIicpLHModm9pZCAwPT09aS50aGVuLCdDYW5ub3QgY29tYmluZSBcInN3aXRjaFwiIHdpdGggXCJ0aGVuXCInKTtjb25zdCBsPXtyZWY6dC5yZWYociksc3dpdGNoOltdLGJyZWFrOmkuYnJlYWt9O2ZvcihsZXQgdD0wO3Q8aS5zd2l0Y2gubGVuZ3RoOysrdCl7Y29uc3Qgcj1pLnN3aXRjaFt0XSxhPXQ9PT1pLnN3aXRjaC5sZW5ndGgtMTtuLmFzc2VydE9wdGlvbnMocixhP1tcImlzXCIsXCJ0aGVuXCIsXCJvdGhlcndpc2VcIl06W1wiaXNcIixcInRoZW5cIl0pLHModm9pZCAwIT09ci5pcywnU3dpdGNoIHN0YXRlbWVudCBtaXNzaW5nIFwiaXNcIicpLHModm9pZCAwIT09ci50aGVuLCdTd2l0Y2ggc3RhdGVtZW50IG1pc3NpbmcgXCJ0aGVuXCInKTtjb25zdCBjPXtpczplLiRfY29tcGlsZShyLmlzKSx0aGVuOmUuJF9jb21waWxlKHIudGhlbil9O2lmKG8uaXNSZWYoci5pcyl8fG4uaXNTY2hlbWEoci5pcyl8fChjLmlzPWMuaXMucmVxdWlyZWQoKSksYSl7cyh2b2lkIDA9PT1pLm90aGVyd2lzZXx8dm9pZCAwPT09ci5vdGhlcndpc2UsJ0Nhbm5vdCBzcGVjaWZ5IFwib3RoZXJ3aXNlXCIgaW5zaWRlIGFuZCBvdXRzaWRlIGEgXCJzd2l0Y2hcIicpO2NvbnN0IHQ9dm9pZCAwIT09aS5vdGhlcndpc2U/aS5vdGhlcndpc2U6ci5vdGhlcndpc2U7dm9pZCAwIT09dCYmKHModm9pZCAwPT09bC5icmVhayxcIkNhbm5vdCBzcGVjaWZ5IGJvdGggb3RoZXJ3aXNlIGFuZCBicmVha1wiKSxjLm90aGVyd2lzZT1lLiRfY29tcGlsZSh0KSl9bC5zd2l0Y2gucHVzaChjKX1yZXR1cm4gbH0sYS5jb25kaXRpb249ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZltcInRoZW5cIixcIm90aGVyd2lzZVwiXSl2b2lkIDA9PT10W3JdP2RlbGV0ZSB0W3JdOnRbcl09ZS4kX2NvbXBpbGUodFtyXSk7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoNyk7dC5jb21waWxlPWZ1bmN0aW9uKGUsdCl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIHMoIXQsXCJDYW5ub3Qgc2V0IHNpbmdsZSBtZXNzYWdlIHN0cmluZ1wiKSxuZXcgbyhlKTtpZihvLmlzVGVtcGxhdGUoZSkpcmV0dXJuIHMoIXQsXCJDYW5ub3Qgc2V0IHNpbmdsZSBtZXNzYWdlIHRlbXBsYXRlXCIpLGU7cyhcIm9iamVjdFwiPT10eXBlb2YgZSYmIUFycmF5LmlzQXJyYXkoZSksXCJJbnZhbGlkIG1lc3NhZ2Ugb3B0aW9uc1wiKSx0PXQ/bih0KTp7fTtmb3IobGV0IHIgaW4gZSl7Y29uc3Qgbj1lW3JdO2lmKFwicm9vdFwiPT09cnx8by5pc1RlbXBsYXRlKG4pKXt0W3JdPW47Y29udGludWV9aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4pe3Rbcl09bmV3IG8obik7Y29udGludWV9cyhcIm9iamVjdFwiPT10eXBlb2YgbiYmIUFycmF5LmlzQXJyYXkobiksXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIscik7Y29uc3QgYT1yO2ZvcihyIGluIHRbYV09dFthXXx8e30sbil7Y29uc3QgZT1uW3JdO1wicm9vdFwiPT09cnx8by5pc1RlbXBsYXRlKGUpP3RbYV1bcl09ZToocyhcInN0cmluZ1wiPT10eXBlb2YgZSxcIkludmFsaWQgbWVzc2FnZSBmb3JcIixyLFwiaW5cIixhKSx0W2FdW3JdPW5ldyBvKGUpKX19cmV0dXJuIHR9LHQuZGVjb21waWxlPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9e307Zm9yKGxldCByIGluIGUpe2NvbnN0IHM9ZVtyXTtpZihcInJvb3RcIj09PXIpe3Rbcl09cztjb250aW51ZX1pZihvLmlzVGVtcGxhdGUocykpe3Rbcl09cy5kZXNjcmliZSh7Y29tcGFjdDohMH0pO2NvbnRpbnVlfWNvbnN0IG49cjtmb3IociBpbiB0W25dPXt9LHMpe2NvbnN0IGU9c1tyXTtcInJvb3RcIiE9PXI/dFtuXVtyXT1lLmRlc2NyaWJlKHtjb21wYWN0OiEwfSk6dFtuXVtyXT1lfX1yZXR1cm4gdH0sdC5tZXJnZT1mdW5jdGlvbihlLHIpe2lmKCFlKXJldHVybiB0LmNvbXBpbGUocik7aWYoIXIpcmV0dXJuIGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIG5ldyBvKHIpO2lmKG8uaXNUZW1wbGF0ZShyKSlyZXR1cm4gcjtjb25zdCBhPW4oZSk7Zm9yKGxldCBlIGluIHIpe2NvbnN0IHQ9cltlXTtpZihcInJvb3RcIj09PWV8fG8uaXNUZW1wbGF0ZSh0KSl7YVtlXT10O2NvbnRpbnVlfWlmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXthW2VdPW5ldyBvKHQpO2NvbnRpbnVlfXMoXCJvYmplY3RcIj09dHlwZW9mIHQmJiFBcnJheS5pc0FycmF5KHQpLFwiSW52YWxpZCBtZXNzYWdlIGZvclwiLGUpO2NvbnN0IG49ZTtmb3IoZSBpbiBhW25dPWFbbl18fHt9LHQpe2NvbnN0IHI9dFtlXTtcInJvb3RcIj09PWV8fG8uaXNUZW1wbGF0ZShyKT9hW25dW2VdPXI6KHMoXCJzdHJpbmdcIj09dHlwZW9mIHIsXCJJbnZhbGlkIG1lc3NhZ2UgZm9yXCIsZSxcImluXCIsbiksYVtuXVtlXT1uZXcgbyhyKSl9fXJldHVybiBhfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigxMyksbj17bWlzbWF0Y2hlZDpudWxsfTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiByPU9iamVjdC5hc3NpZ24oe3Byb3RvdHlwZTohMH0sciksISFuLmlzRGVlcEVxdWFsKGUsdCxyLFtdKX0sbi5pc0RlZXBFcXVhbD1mdW5jdGlvbihlLHQscixvKXtpZihlPT09dClyZXR1cm4gMCE9PWV8fDEvZT09MS90O2NvbnN0IGE9dHlwZW9mIGU7aWYoYSE9PXR5cGVvZiB0KXJldHVybiExO2lmKG51bGw9PT1lfHxudWxsPT09dClyZXR1cm4hMTtpZihcImZ1bmN0aW9uXCI9PT1hKXtpZighci5kZWVwRnVuY3Rpb258fGUudG9TdHJpbmcoKSE9PXQudG9TdHJpbmcoKSlyZXR1cm4hMX1lbHNlIGlmKFwib2JqZWN0XCIhPT1hKXJldHVybiBlIT1lJiZ0IT10O2NvbnN0IGk9bi5nZXRTaGFyZWRUeXBlKGUsdCwhIXIucHJvdG90eXBlKTtzd2l0Y2goaSl7Y2FzZSBzLmJ1ZmZlcjpyZXR1cm4hMTtjYXNlIHMucHJvbWlzZTpyZXR1cm4gZT09PXQ7Y2FzZSBzLnJlZ2V4OnJldHVybiBlLnRvU3RyaW5nKCk9PT10LnRvU3RyaW5nKCk7Y2FzZSBuLm1pc21hdGNoZWQ6cmV0dXJuITF9Zm9yKGxldCByPW8ubGVuZ3RoLTE7cj49MDstLXIpaWYob1tyXS5pc1NhbWUoZSx0KSlyZXR1cm4hMDtvLnB1c2gobmV3IG4uU2VlbkVudHJ5KGUsdCkpO3RyeXtyZXR1cm4hIW4uaXNEZWVwRXF1YWxPYmooaSxlLHQscixvKX1maW5hbGx5e28ucG9wKCl9fSxuLmdldFNoYXJlZFR5cGU9ZnVuY3Rpb24oZSx0LHIpe2lmKHIpcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0KT9uLm1pc21hdGNoZWQ6cy5nZXRJbnRlcm5hbFByb3RvKGUpO2NvbnN0IG89cy5nZXRJbnRlcm5hbFByb3RvKGUpO3JldHVybiBvIT09cy5nZXRJbnRlcm5hbFByb3RvKHQpP24ubWlzbWF0Y2hlZDpvfSxuLnZhbHVlT2Y9ZnVuY3Rpb24oZSl7Y29uc3QgdD1lLnZhbHVlT2Y7aWYodm9pZCAwPT09dClyZXR1cm4gZTt0cnl7cmV0dXJuIHQuY2FsbChlKX1jYXRjaChlKXtyZXR1cm4gZX19LG4uaGFzT3duRW51bWVyYWJsZVByb3BlcnR5PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHQpfSxuLmlzU2V0U2ltcGxlRXF1YWw9ZnVuY3Rpb24oZSx0KXtmb3IoY29uc3QgciBvZiBlKWlmKCF0LmhhcyhyKSlyZXR1cm4hMTtyZXR1cm4hMH0sbi5pc0RlZXBFcXVhbE9iaj1mdW5jdGlvbihlLHQscixvLGEpe2NvbnN0e2lzRGVlcEVxdWFsOmksdmFsdWVPZjpsLGhhc093bkVudW1lcmFibGVQcm9wZXJ0eTpjfT1uLHtrZXlzOnUsZ2V0T3duUHJvcGVydHlTeW1ib2xzOmZ9PU9iamVjdDtpZihlPT09cy5hcnJheSl7aWYoIW8ucGFydCl7aWYodC5sZW5ndGghPT1yLmxlbmd0aClyZXR1cm4hMTtmb3IobGV0IGU9MDtlPHQubGVuZ3RoOysrZSlpZighaSh0W2VdLHJbZV0sbyxhKSlyZXR1cm4hMTtyZXR1cm4hMH1mb3IoY29uc3QgZSBvZiB0KWZvcihjb25zdCB0IG9mIHIpaWYoaShlLHQsbyxhKSlyZXR1cm4hMH1lbHNlIGlmKGU9PT1zLnNldCl7aWYodC5zaXplIT09ci5zaXplKXJldHVybiExO2lmKCFuLmlzU2V0U2ltcGxlRXF1YWwodCxyKSl7Y29uc3QgZT1uZXcgU2V0KHIpO2Zvcihjb25zdCByIG9mIHQpe2lmKGUuZGVsZXRlKHIpKWNvbnRpbnVlO2xldCB0PSExO2Zvcihjb25zdCBzIG9mIGUpaWYoaShyLHMsbyxhKSl7ZS5kZWxldGUocyksdD0hMDticmVha31pZighdClyZXR1cm4hMX19fWVsc2UgaWYoZT09PXMubWFwKXtpZih0LnNpemUhPT1yLnNpemUpcmV0dXJuITE7Zm9yKGNvbnN0W2Usc11vZiB0KXtpZih2b2lkIDA9PT1zJiYhci5oYXMoZSkpcmV0dXJuITE7aWYoIWkocyxyLmdldChlKSxvLGEpKXJldHVybiExfX1lbHNlIGlmKGU9PT1zLmVycm9yJiYodC5uYW1lIT09ci5uYW1lfHx0Lm1lc3NhZ2UhPT1yLm1lc3NhZ2UpKXJldHVybiExO2NvbnN0IG09bCh0KSxoPWwocik7aWYoKHQhPT1tfHxyIT09aCkmJiFpKG0saCxvLGEpKXJldHVybiExO2NvbnN0IGQ9dSh0KTtpZighby5wYXJ0JiZkLmxlbmd0aCE9PXUocikubGVuZ3RoJiYhby5za2lwKXJldHVybiExO2xldCBwPTA7Zm9yKGNvbnN0IGUgb2YgZClpZihvLnNraXAmJm8uc2tpcC5pbmNsdWRlcyhlKSl2b2lkIDA9PT1yW2VdJiYrK3A7ZWxzZXtpZighYyhyLGUpKXJldHVybiExO2lmKCFpKHRbZV0scltlXSxvLGEpKXJldHVybiExfWlmKCFvLnBhcnQmJmQubGVuZ3RoLXAhPT11KHIpLmxlbmd0aClyZXR1cm4hMTtpZighMSE9PW8uc3ltYm9scyl7Y29uc3QgZT1mKHQpLHM9bmV3IFNldChmKHIpKTtmb3IoY29uc3QgbiBvZiBlKXtpZighby5za2lwfHwhby5za2lwLmluY2x1ZGVzKG4pKWlmKGModCxuKSl7aWYoIWMocixuKSlyZXR1cm4hMTtpZighaSh0W25dLHJbbl0sbyxhKSlyZXR1cm4hMX1lbHNlIGlmKGMocixuKSlyZXR1cm4hMTtzLmRlbGV0ZShuKX1mb3IoY29uc3QgZSBvZiBzKWlmKGMocixlKSlyZXR1cm4hMX1yZXR1cm4hMH0sbi5TZWVuRW50cnk9Y2xhc3N7Y29uc3RydWN0b3IoZSx0KXt0aGlzLm9iaj1lLHRoaXMucmVmPXR9aXNTYW1lKGUsdCl7cmV0dXJuIHRoaXMub2JqPT09ZSYmdGhpcy5yZWY9PT10fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxNSksYT1yKDEpLGk9cig4KSxsPXIoNCksYz1yKDE3KSx1PXIoMTgpLGY9cig1KSxtPXIoNyksaD1yKDE5KTtsZXQgZDtjb25zdCBwPXt0eXBlczp7YWx0ZXJuYXRpdmVzOnIoMzMpLGFueTpyKDMpLGFycmF5OnIoMzkpLGJvb2xlYW46cig0MCksZGF0ZTpyKDQxKSxmdW5jdGlvbjpyKDQyKSxsaW5rOnIoNDUpLG51bWJlcjpyKDQ2KSxvYmplY3Q6cig0Nyksc3RyaW5nOnIoNDgpLHN5bWJvbDpyKDUyKX0sYWxpYXNlczp7YWx0OlwiYWx0ZXJuYXRpdmVzXCIsYm9vbDpcImJvb2xlYW5cIixmdW5jOlwiZnVuY3Rpb25cIn19O3Aucm9vdD1mdW5jdGlvbigpe2NvbnN0IGU9e190eXBlczpuZXcgU2V0KE9iamVjdC5rZXlzKHAudHlwZXMpKX07Zm9yKGNvbnN0IHQgb2YgZS5fdHlwZXMpZVt0XT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcyghZS5sZW5ndGh8fFtcImFsdGVybmF0aXZlc1wiLFwibGlua1wiLFwib2JqZWN0XCJdLmluY2x1ZGVzKHQpLFwiVGhlXCIsdCxcInR5cGUgZG9lcyBub3QgYWxsb3cgYXJndW1lbnRzXCIpLHAuZ2VuZXJhdGUodGhpcyxwLnR5cGVzW3RdLGUpfTtmb3IoY29uc3QgdCBvZltcImFsbG93XCIsXCJjdXN0b21cIixcImRpc2FsbG93XCIsXCJlcXVhbFwiLFwiZXhpc3RcIixcImZvcmJpZGRlblwiLFwiaW52YWxpZFwiLFwibm90XCIsXCJvbmx5XCIsXCJvcHRpb25hbFwiLFwib3B0aW9uc1wiLFwicHJlZnNcIixcInByZWZlcmVuY2VzXCIsXCJyZXF1aXJlZFwiLFwic3RyaXBcIixcInZhbGlkXCIsXCJ3aGVuXCJdKWVbdF09ZnVuY3Rpb24oLi4uZSl7cmV0dXJuIHRoaXMuYW55KClbdF0oLi4uZSl9O09iamVjdC5hc3NpZ24oZSxwLm1ldGhvZHMpO2Zvcihjb25zdCB0IGluIHAuYWxpYXNlcyl7Y29uc3Qgcj1wLmFsaWFzZXNbdF07ZVt0XT1lW3JdfXJldHVybiBlLng9ZS5leHByZXNzaW9uLGguc2V0dXAmJmguc2V0dXAoZSksZX0scC5tZXRob2RzPXtWYWxpZGF0aW9uRXJyb3I6bC5WYWxpZGF0aW9uRXJyb3IsdmVyc2lvbjphLnZlcnNpb24sY2FjaGU6by5wcm92aWRlcixhc3NlcnQoZSx0LC4uLnIpe3AuYXNzZXJ0KGUsdCwhMCxyKX0sYXR0ZW1wdDooZSx0LC4uLnIpPT5wLmFzc2VydChlLHQsITEsciksYnVpbGQoZSl7cmV0dXJuIHMoXCJmdW5jdGlvblwiPT10eXBlb2YgdS5idWlsZCxcIk1hbmlmZXN0IGZ1bmN0aW9uYWxpdHkgZGlzYWJsZWRcIiksdS5idWlsZCh0aGlzLGUpfSxjaGVja1ByZWZlcmVuY2VzKGUpe2EuY2hlY2tQcmVmZXJlbmNlcyhlKX0sY29tcGlsZShlLHQpe3JldHVybiBpLmNvbXBpbGUodGhpcyxlLHQpfSxkZWZhdWx0cyhlKXtzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJtb2RpZmllciBtdXN0IGJlIGEgZnVuY3Rpb25cIik7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMpO2Zvcihjb25zdCByIG9mIHQuX3R5cGVzKXtjb25zdCBuPWUodFtyXSgpKTtzKGEuaXNTY2hlbWEobiksXCJtb2RpZmllciBtdXN0IHJldHVybiBhIHZhbGlkIHNjaGVtYSBvYmplY3RcIiksdFtyXT1mdW5jdGlvbiguLi5lKXtyZXR1cm4gcC5nZW5lcmF0ZSh0aGlzLG4sZSl9fXJldHVybiB0fSxleHByZXNzaW9uOiguLi5lKT0+bmV3IG0oLi4uZSksZXh0ZW5kKC4uLmUpe2EudmVyaWZ5RmxhdChlLFwiZXh0ZW5kXCIpLGQ9ZHx8cigxNikscyhlLmxlbmd0aCxcIllvdSBuZWVkIHRvIHByb3ZpZGUgYXQgbGVhc3Qgb25lIGV4dGVuc2lvblwiKSx0aGlzLmFzc2VydChlLGQuZXh0ZW5zaW9ucyk7Y29uc3QgdD1PYmplY3QuYXNzaWduKHt9LHRoaXMpO3QuX3R5cGVzPW5ldyBTZXQodC5fdHlwZXMpO2ZvcihsZXQgciBvZiBlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYocj1yKHQpKSx0aGlzLmFzc2VydChyLGQuZXh0ZW5zaW9uKTtjb25zdCBlPXAuZXhwYW5kRXh0ZW5zaW9uKHIsdCk7Zm9yKGNvbnN0IHIgb2YgZSl7cyh2b2lkIDA9PT10W3IudHlwZV18fHQuX3R5cGVzLmhhcyhyLnR5cGUpLFwiQ2Fubm90IG92ZXJyaWRlIG5hbWVcIixyLnR5cGUpO2NvbnN0IGU9ci5iYXNlfHx0aGlzLmFueSgpLG49Yy50eXBlKGUscik7dC5fdHlwZXMuYWRkKHIudHlwZSksdFtyLnR5cGVdPWZ1bmN0aW9uKC4uLmUpe3JldHVybiBwLmdlbmVyYXRlKHRoaXMsbixlKX19fXJldHVybiB0fSxpc0Vycm9yOmwuVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IsaXNFeHByZXNzaW9uOm0uaXNUZW1wbGF0ZSxpc1JlZjpmLmlzUmVmLGlzU2NoZW1hOmEuaXNTY2hlbWEsaW46KC4uLmUpPT5mLmluKC4uLmUpLG92ZXJyaWRlOmEuc3ltYm9scy5vdmVycmlkZSxyZWY6KC4uLmUpPT5mLmNyZWF0ZSguLi5lKSx0eXBlcygpe2NvbnN0IGU9e307Zm9yKGNvbnN0IHQgb2YgdGhpcy5fdHlwZXMpZVt0XT10aGlzW3RdKCk7Zm9yKGNvbnN0IHQgaW4gcC5hbGlhc2VzKWVbdF09dGhpc1t0XSgpO3JldHVybiBlfX0scC5hc3NlcnQ9ZnVuY3Rpb24oZSx0LHIscyl7Y29uc3Qgbz1zWzBdaW5zdGFuY2VvZiBFcnJvcnx8XCJzdHJpbmdcIj09dHlwZW9mIHNbMF0/c1swXTpudWxsLGk9bz9zWzFdOnNbMF0sYz10LnZhbGlkYXRlKGUsYS5wcmVmZXJlbmNlcyh7ZXJyb3JzOntzdGFjazohMH19LGl8fHt9KSk7bGV0IHU9Yy5lcnJvcjtpZighdSlyZXR1cm4gYy52YWx1ZTtpZihvIGluc3RhbmNlb2YgRXJyb3IpdGhyb3cgbztjb25zdCBmPXImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHUuYW5ub3RhdGU/dS5hbm5vdGF0ZSgpOnUubWVzc2FnZTt0aHJvdyB1IGluc3RhbmNlb2YgbC5WYWxpZGF0aW9uRXJyb3I9PSExJiYodT1uKHUpKSx1Lm1lc3NhZ2U9bz9cIlwiLmNvbmNhdChvLFwiIFwiKS5jb25jYXQoZik6Zix1fSxwLmdlbmVyYXRlPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gcyhlLFwiTXVzdCBiZSBpbnZva2VkIG9uIGEgSm9pIGluc3RhbmNlLlwiKSx0LiRfcm9vdD1lLHQuX2RlZmluaXRpb24uYXJncyYmci5sZW5ndGg/dC5fZGVmaW5pdGlvbi5hcmdzKHQsLi4ucik6dH0scC5leHBhbmRFeHRlbnNpb249ZnVuY3Rpb24oZSx0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50eXBlKXJldHVybltlXTtjb25zdCByPVtdO2Zvcihjb25zdCBzIG9mIHQuX3R5cGVzKWlmKGUudHlwZS50ZXN0KHMpKXtjb25zdCBuPU9iamVjdC5hc3NpZ24oe30sZSk7bi50eXBlPXMsbi5iYXNlPXRbc10oKSxyLnB1c2gobil9cmV0dXJuIHJ9LGUuZXhwb3J0cz1wLnJvb3QoKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyOCk7ZS5leHBvcnRzPWNsYXNzIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IoZSl7c3VwZXIoZS5maWx0ZXIoZT0+XCJcIiE9PWUpLm1hcChlPT5cInN0cmluZ1wiPT10eXBlb2YgZT9lOmUgaW5zdGFuY2VvZiBFcnJvcj9lLm1lc3NhZ2U6cyhlKSkuam9pbihcIiBcIil8fFwiVW5rbm93biBlcnJvclwiKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSYmRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyx0LmFzc2VydCl9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e307dD1lLmV4cG9ydHM9e2FycmF5OkFycmF5LnByb3RvdHlwZSxidWZmZXI6ITEsZGF0ZTpEYXRlLnByb3RvdHlwZSxlcnJvcjpFcnJvci5wcm90b3R5cGUsZ2VuZXJpYzpPYmplY3QucHJvdG90eXBlLG1hcDpNYXAucHJvdG90eXBlLHByb21pc2U6UHJvbWlzZS5wcm90b3R5cGUscmVnZXg6UmVnRXhwLnByb3RvdHlwZSxzZXQ6U2V0LnByb3RvdHlwZSx3ZWFrTWFwOldlYWtNYXAucHJvdG90eXBlLHdlYWtTZXQ6V2Vha1NldC5wcm90b3R5cGV9LHMudHlwZU1hcD1uZXcgTWFwKFtbXCJbb2JqZWN0IEVycm9yXVwiLHQuZXJyb3JdLFtcIltvYmplY3QgTWFwXVwiLHQubWFwXSxbXCJbb2JqZWN0IFByb21pc2VdXCIsdC5wcm9taXNlXSxbXCJbb2JqZWN0IFNldF1cIix0LnNldF0sW1wiW29iamVjdCBXZWFrTWFwXVwiLHQud2Vha01hcF0sW1wiW29iamVjdCBXZWFrU2V0XVwiLHQud2Vha1NldF1dKSx0LmdldEludGVybmFsUHJvdG89ZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gdC5hcnJheTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gdC5kYXRlO2lmKGUgaW5zdGFuY2VvZiBSZWdFeHApcmV0dXJuIHQucmVnZXg7aWYoZSBpbnN0YW5jZW9mIEVycm9yKXJldHVybiB0LmVycm9yO2NvbnN0IHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO3JldHVybiBzLnR5cGVNYXAuZ2V0KHIpfHx0LmdlbmVyaWN9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5rZXlzPWZ1bmN0aW9uKGUsdD17fSl7cmV0dXJuITEhPT10LnN5bWJvbHM/UmVmbGVjdC5vd25LZXlzKGUpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGUpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDEpLGE9e21heDoxZTMsc3VwcG9ydGVkOm5ldyBTZXQoW1widW5kZWZpbmVkXCIsXCJib29sZWFuXCIsXCJudW1iZXJcIixcInN0cmluZ1wiXSl9O3QucHJvdmlkZXI9e3Byb3Zpc2lvbjplPT5uZXcgYS5DYWNoZShlKX0sYS5DYWNoZT1jbGFzc3tjb25zdHJ1Y3RvcihlPXt9KXtvLmFzc2VydE9wdGlvbnMoZSxbXCJtYXhcIl0pLHModm9pZCAwPT09ZS5tYXh8fGUubWF4JiZlLm1heD4wJiZpc0Zpbml0ZShlLm1heCksXCJJbnZhbGlkIG1heCBjYWNoZSBzaXplXCIpLHRoaXMuX21heD1lLm1heHx8YS5tYXgsdGhpcy5fbWFwPW5ldyBNYXAsdGhpcy5fbGlzdD1uZXcgYS5MaXN0fWdldCBsZW5ndGgoKXtyZXR1cm4gdGhpcy5fbWFwLnNpemV9c2V0KGUsdCl7aWYobnVsbCE9PWUmJiFhLnN1cHBvcnRlZC5oYXModHlwZW9mIGUpKXJldHVybjtsZXQgcj10aGlzLl9tYXAuZ2V0KGUpO2lmKHIpcmV0dXJuIHIudmFsdWU9dCx2b2lkIHRoaXMuX2xpc3QuZmlyc3Qocik7cj10aGlzLl9saXN0LnVuc2hpZnQoe2tleTplLHZhbHVlOnR9KSx0aGlzLl9tYXAuc2V0KGUsciksdGhpcy5fY29tcGFjdCgpfWdldChlKXtjb25zdCB0PXRoaXMuX21hcC5nZXQoZSk7aWYodClyZXR1cm4gdGhpcy5fbGlzdC5maXJzdCh0KSxuKHQudmFsdWUpfV9jb21wYWN0KCl7aWYodGhpcy5fbWFwLnNpemU+dGhpcy5fbWF4KXtjb25zdCBlPXRoaXMuX2xpc3QucG9wKCk7dGhpcy5fbWFwLmRlbGV0ZShlLmtleSl9fX0sYS5MaXN0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy50YWlsPW51bGwsdGhpcy5oZWFkPW51bGx9dW5zaGlmdChlKXtyZXR1cm4gZS5uZXh0PW51bGwsZS5wcmV2PXRoaXMuaGVhZCx0aGlzLmhlYWQmJih0aGlzLmhlYWQubmV4dD1lKSx0aGlzLmhlYWQ9ZSx0aGlzLnRhaWx8fCh0aGlzLnRhaWw9ZSksZX1maXJzdChlKXtlIT09dGhpcy5oZWFkJiYodGhpcy5fcmVtb3ZlKGUpLHRoaXMudW5zaGlmdChlKSl9cG9wKCl7cmV0dXJuIHRoaXMuX3JlbW92ZSh0aGlzLnRhaWwpfV9yZW1vdmUoZSl7Y29uc3R7bmV4dDp0LHByZXY6cn09ZTtyZXR1cm4gdC5wcmV2PXIsciYmKHIubmV4dD10KSxlPT09dGhpcy50YWlsJiYodGhpcy50YWlsPXQpLGUucHJldj1udWxsLGUubmV4dD1udWxsLGV9fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigxMSksbj17fTtuLndyYXA9cy5zdHJpbmcoKS5taW4oMSkubWF4KDIpLmFsbG93KCExKSx0LnByZWZlcmVuY2VzPXMub2JqZWN0KHthbGxvd1Vua25vd246cy5ib29sZWFuKCksYWJvcnRFYXJseTpzLmJvb2xlYW4oKSxjYWNoZTpzLmJvb2xlYW4oKSxjb250ZXh0OnMub2JqZWN0KCksY29udmVydDpzLmJvb2xlYW4oKSxkYXRlRm9ybWF0OnMudmFsaWQoXCJkYXRlXCIsXCJpc29cIixcInN0cmluZ1wiLFwidGltZVwiLFwidXRjXCIpLGRlYnVnOnMuYm9vbGVhbigpLGVycm9yczp7ZXNjYXBlSHRtbDpzLmJvb2xlYW4oKSxsYWJlbDpzLnZhbGlkKFwicGF0aFwiLFwia2V5XCIsITEpLGxhbmd1YWdlOltzLnN0cmluZygpLHMub2JqZWN0KCkucmVmKCldLHJlbmRlcjpzLmJvb2xlYW4oKSxzdGFjazpzLmJvb2xlYW4oKSx3cmFwOntsYWJlbDpuLndyYXAsYXJyYXk6bi53cmFwfX0sZXh0ZXJuYWxzOnMuYm9vbGVhbigpLG1lc3NhZ2VzOnMub2JqZWN0KCksbm9EZWZhdWx0czpzLmJvb2xlYW4oKSxub25FbnVtZXJhYmxlczpzLmJvb2xlYW4oKSxwcmVzZW5jZTpzLnZhbGlkKFwicmVxdWlyZWRcIixcIm9wdGlvbmFsXCIsXCJmb3JiaWRkZW5cIiksc2tpcEZ1bmN0aW9uczpzLmJvb2xlYW4oKSxzdHJpcFVua25vd246cy5vYmplY3Qoe2FycmF5czpzLmJvb2xlYW4oKSxvYmplY3RzOnMuYm9vbGVhbigpfSkub3IoXCJhcnJheXNcIixcIm9iamVjdHNcIikuYWxsb3coITAsITEpLHdhcm5pbmdzOnMuYm9vbGVhbigpfSkuc3RyaWN0KCksbi5uYW1lUng9L15bYS16QS1aMC05XVxcdyokLyxuLnJ1bGU9cy5vYmplY3Qoe2FsaWFzOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpLnBhdHRlcm4obi5uYW1lUngpKS5zaW5nbGUoKSxhcmdzOnMuYXJyYXkoKS5pdGVtcyhzLnN0cmluZygpLHMub2JqZWN0KHtuYW1lOnMuc3RyaW5nKCkucGF0dGVybihuLm5hbWVSeCkucmVxdWlyZWQoKSxyZWY6cy5ib29sZWFuKCksYXNzZXJ0OnMuYWx0ZXJuYXRpdmVzKFtzLmZ1bmN0aW9uKCkscy5vYmplY3QoKS5zY2hlbWEoKV0pLmNvbmRpdGlvbmFsKFwicmVmXCIse2lzOiEwLHRoZW46cy5yZXF1aXJlZCgpfSksbm9ybWFsaXplOnMuZnVuY3Rpb24oKSxtZXNzYWdlOnMuc3RyaW5nKCkud2hlbihcImFzc2VydFwiLHtpczpzLmZ1bmN0aW9uKCksdGhlbjpzLnJlcXVpcmVkKCl9KX0pKSxjb252ZXJ0OnMuYm9vbGVhbigpLG1hbmlmZXN0OnMuYm9vbGVhbigpLG1ldGhvZDpzLmZ1bmN0aW9uKCkuYWxsb3coITEpLG11bHRpOnMuYm9vbGVhbigpLHZhbGlkYXRlOnMuZnVuY3Rpb24oKX0pLHQuZXh0ZW5zaW9uPXMub2JqZWN0KHt0eXBlOnMuYWx0ZXJuYXRpdmVzKFtzLnN0cmluZygpLHMub2JqZWN0KCkucmVnZXgoKV0pLnJlcXVpcmVkKCksYXJnczpzLmZ1bmN0aW9uKCksYmFzZTpzLm9iamVjdCgpLnNjaGVtYSgpLndoZW4oXCJ0eXBlXCIse2lzOnMub2JqZWN0KCkucmVnZXgoKSx0aGVuOnMuZm9yYmlkZGVuKCl9KSxjb2VyY2U6W3MuZnVuY3Rpb24oKS5tYXhBcml0eSgzKSxzLm9iamVjdCh7bWV0aG9kOnMuZnVuY3Rpb24oKS5tYXhBcml0eSgzKS5yZXF1aXJlZCgpLGZyb206cy5hcnJheSgpLml0ZW1zKHMuc3RyaW5nKCkpLnNpbmdsZSgpfSldLGZsYWdzOnMub2JqZWN0KCkucGF0dGVybihuLm5hbWVSeCxzLm9iamVjdCh7c2V0dGVyOnMuc3RyaW5nKCksZGVmYXVsdDpzLmFueSgpfSkpLG1hbmlmZXN0OntidWlsZDpzLmZ1bmN0aW9uKCkuYXJpdHkoMil9LG1lc3NhZ2VzOltzLm9iamVjdCgpLHMuc3RyaW5nKCldLG1vZGlmaWVyczpzLm9iamVjdCgpLnBhdHRlcm4obi5uYW1lUngscy5mdW5jdGlvbigpLm1pbkFyaXR5KDEpLm1heEFyaXR5KDIpKSxvdmVycmlkZXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMuZnVuY3Rpb24oKSkscHJlcGFyZTpzLmZ1bmN0aW9uKCkubWF4QXJpdHkoMykscmVidWlsZDpzLmZ1bmN0aW9uKCkuYXJpdHkoMSkscnVsZXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LG4ucnVsZSksdGVybXM6cy5vYmplY3QoKS5wYXR0ZXJuKG4ubmFtZVJ4LHMub2JqZWN0KHtpbml0OnMuYXJyYXkoKS5hbGxvdyhudWxsKS5yZXF1aXJlZCgpLG1hbmlmZXN0OnMub2JqZWN0KCkucGF0dGVybigvLisvLFtzLnZhbGlkKFwic2NoZW1hXCIsXCJzaW5nbGVcIikscy5vYmplY3Qoe21hcHBlZDpzLm9iamVjdCh7ZnJvbTpzLnN0cmluZygpLnJlcXVpcmVkKCksdG86cy5zdHJpbmcoKS5yZXF1aXJlZCgpfSkucmVxdWlyZWQoKX0pXSl9KSksdmFsaWRhdGU6cy5mdW5jdGlvbigpLm1heEFyaXR5KDMpfSkuc3RyaWN0KCksdC5leHRlbnNpb25zPXMuYXJyYXkoKS5pdGVtcyhzLm9iamVjdCgpLHMuZnVuY3Rpb24oKS5hcml0eSgxKSkuc3RyaWN0KCksbi5kZXNjPXtidWZmZXI6cy5vYmplY3Qoe2J1ZmZlcjpzLnN0cmluZygpfSksZnVuYzpzLm9iamVjdCh7ZnVuY3Rpb246cy5mdW5jdGlvbigpLnJlcXVpcmVkKCksb3B0aW9uczp7bGl0ZXJhbDohMH19KSxvdmVycmlkZTpzLm9iamVjdCh7b3ZlcnJpZGU6ITB9KSxyZWY6cy5vYmplY3Qoe3JlZjpzLm9iamVjdCh7dHlwZTpzLnZhbGlkKFwidmFsdWVcIixcImdsb2JhbFwiLFwibG9jYWxcIikscGF0aDpzLmFycmF5KCkucmVxdWlyZWQoKSxzZXBhcmF0b3I6cy5zdHJpbmcoKS5sZW5ndGgoMSkuYWxsb3coITEpLGFuY2VzdG9yOnMubnVtYmVyKCkubWluKDApLmludGVnZXIoKS5hbGxvdyhcInJvb3RcIiksbWFwOnMuYXJyYXkoKS5pdGVtcyhzLmFycmF5KCkubGVuZ3RoKDIpKS5taW4oMSksYWRqdXN0OnMuZnVuY3Rpb24oKSxpdGVyYWJsZXM6cy5ib29sZWFuKCksaW46cy5ib29sZWFuKCl9KS5yZXF1aXJlZCgpfSkscmVnZXg6cy5vYmplY3Qoe3JlZ2V4OnMuc3RyaW5nKCkubWluKDMpfSksc3BlY2lhbDpzLm9iamVjdCh7c3BlY2lhbDpzLnZhbGlkKFwiZGVlcFwiKS5yZXF1aXJlZCgpfSksdGVtcGxhdGU6cy5vYmplY3Qoe3RlbXBsYXRlOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxvcHRpb25zOnMub2JqZWN0KCl9KSx2YWx1ZTpzLm9iamVjdCh7dmFsdWU6cy5hbHRlcm5hdGl2ZXMoW3Mub2JqZWN0KCkscy5hcnJheSgpXSkucmVxdWlyZWQoKX0pfSxuLmRlc2MuZW50aXR5PXMuYWx0ZXJuYXRpdmVzKFtzLmFycmF5KCkuaXRlbXMocy5saW5rKFwiLi4uXCIpKSxzLmJvb2xlYW4oKSxzLmZ1bmN0aW9uKCkscy5udW1iZXIoKSxzLnN0cmluZygpLG4uZGVzYy5idWZmZXIsbi5kZXNjLmZ1bmMsbi5kZXNjLnJlZixuLmRlc2MucmVnZXgsbi5kZXNjLnNwZWNpYWwsbi5kZXNjLnRlbXBsYXRlLG4uZGVzYy52YWx1ZSxzLmxpbmsoXCIvXCIpXSksbi5kZXNjLnZhbHVlcz1zLmFycmF5KCkuaXRlbXMobnVsbCxzLmJvb2xlYW4oKSxzLmZ1bmN0aW9uKCkscy5udW1iZXIoKS5hbGxvdygxLzAsLTEvMCkscy5zdHJpbmcoKS5hbGxvdyhcIlwiKSxzLnN5bWJvbCgpLG4uZGVzYy5idWZmZXIsbi5kZXNjLmZ1bmMsbi5kZXNjLm92ZXJyaWRlLG4uZGVzYy5yZWYsbi5kZXNjLnJlZ2V4LG4uZGVzYy50ZW1wbGF0ZSxuLmRlc2MudmFsdWUpLG4uZGVzYy5tZXNzYWdlcz1zLm9iamVjdCgpLnBhdHRlcm4oLy4rLyxbcy5zdHJpbmcoKSxuLmRlc2MudGVtcGxhdGUscy5vYmplY3QoKS5wYXR0ZXJuKC8uKy8sW3Muc3RyaW5nKCksbi5kZXNjLnRlbXBsYXRlXSldKSx0LmRlc2NyaXB0aW9uPXMub2JqZWN0KHt0eXBlOnMuc3RyaW5nKCkucmVxdWlyZWQoKSxmbGFnczpzLm9iamVjdCh7Y2FzdDpzLnN0cmluZygpLGRlZmF1bHQ6cy5hbnkoKSxkZXNjcmlwdGlvbjpzLnN0cmluZygpLGVtcHR5OnMubGluayhcIi9cIiksZmFpbG92ZXI6bi5kZXNjLmVudGl0eSxpZDpzLnN0cmluZygpLGxhYmVsOnMuc3RyaW5nKCksb25seTohMCxwcmVzZW5jZTpbXCJvcHRpb25hbFwiLFwicmVxdWlyZWRcIixcImZvcmJpZGRlblwiXSxyZXN1bHQ6W1wicmF3XCIsXCJzdHJpcFwiXSxzdHJpcDpzLmJvb2xlYW4oKSx1bml0OnMuc3RyaW5nKCl9KS51bmtub3duKCkscHJlZmVyZW5jZXM6e2FsbG93VW5rbm93bjpzLmJvb2xlYW4oKSxhYm9ydEVhcmx5OnMuYm9vbGVhbigpLGNhY2hlOnMuYm9vbGVhbigpLGNvbnZlcnQ6cy5ib29sZWFuKCksZGF0ZUZvcm1hdDpbXCJkYXRlXCIsXCJpc29cIixcInN0cmluZ1wiLFwidGltZVwiLFwidXRjXCJdLGVycm9yczp7ZXNjYXBlSHRtbDpzLmJvb2xlYW4oKSxsYWJlbDpbXCJwYXRoXCIsXCJrZXlcIl0sbGFuZ3VhZ2U6W3Muc3RyaW5nKCksbi5kZXNjLnJlZl0sd3JhcDp7bGFiZWw6bi53cmFwLGFycmF5Om4ud3JhcH19LGV4dGVybmFsczpzLmJvb2xlYW4oKSxtZXNzYWdlczpuLmRlc2MubWVzc2FnZXMsbm9EZWZhdWx0czpzLmJvb2xlYW4oKSxub25FbnVtZXJhYmxlczpzLmJvb2xlYW4oKSxwcmVzZW5jZTpbXCJyZXF1aXJlZFwiLFwib3B0aW9uYWxcIixcImZvcmJpZGRlblwiXSxza2lwRnVuY3Rpb25zOnMuYm9vbGVhbigpLHN0cmlwVW5rbm93bjpzLm9iamVjdCh7YXJyYXlzOnMuYm9vbGVhbigpLG9iamVjdHM6cy5ib29sZWFuKCl9KS5vcihcImFycmF5c1wiLFwib2JqZWN0c1wiKS5hbGxvdyghMCwhMSksd2FybmluZ3M6cy5ib29sZWFuKCl9LGFsbG93Om4uZGVzYy52YWx1ZXMsaW52YWxpZDpuLmRlc2MudmFsdWVzLHJ1bGVzOnMuYXJyYXkoKS5taW4oMSkuaXRlbXMoe25hbWU6cy5zdHJpbmcoKS5yZXF1aXJlZCgpLGFyZ3M6cy5vYmplY3QoKS5taW4oMSksa2VlcDpzLmJvb2xlYW4oKSxtZXNzYWdlOltzLnN0cmluZygpLG4uZGVzYy5tZXNzYWdlc10sd2FybjpzLmJvb2xlYW4oKX0pLGtleXM6cy5vYmplY3QoKS5wYXR0ZXJuKC8uKi8scy5saW5rKFwiL1wiKSksbGluazpuLmRlc2MucmVmfSkucGF0dGVybigvXlthLXpdXFx3KiQvLHMuYW55KCkpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMSksYT1yKDkpLGk9e307dC50eXBlPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2YoZSksbD1uKHIpLGM9ZS5fYXNzaWduKE9iamVjdC5jcmVhdGUobCkpLHU9T2JqZWN0LmFzc2lnbih7fSx0KTtkZWxldGUgdS5iYXNlLGwuX2RlZmluaXRpb249dTtjb25zdCBmPXIuX2RlZmluaXRpb258fHt9O3UubWVzc2FnZXM9YS5tZXJnZShmLm1lc3NhZ2VzLHUubWVzc2FnZXMpLHUucHJvcGVydGllcz1PYmplY3QuYXNzaWduKHt9LGYucHJvcGVydGllcyx1LnByb3BlcnRpZXMpLGMudHlwZT11LnR5cGUsdS5mbGFncz1PYmplY3QuYXNzaWduKHt9LGYuZmxhZ3MsdS5mbGFncyk7Y29uc3QgbT1PYmplY3QuYXNzaWduKHt9LGYudGVybXMpO2lmKHUudGVybXMpZm9yKGNvbnN0IGUgaW4gdS50ZXJtcyl7Y29uc3QgdD11LnRlcm1zW2VdO3Modm9pZCAwPT09Yy4kX3Rlcm1zW2VdLFwiSW52YWxpZCB0ZXJtIG92ZXJyaWRlIGZvclwiLHUudHlwZSxlKSxjLiRfdGVybXNbZV09dC5pbml0LG1bZV09dH11LnRlcm1zPW0sdS5hcmdzfHwodS5hcmdzPWYuYXJncyksdS5wcmVwYXJlPWkucHJlcGFyZSh1LnByZXBhcmUsZi5wcmVwYXJlKSx1LmNvZXJjZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHUuY29lcmNlJiYodS5jb2VyY2U9e21ldGhvZDp1LmNvZXJjZX0pLHUuY29lcmNlLmZyb20mJiFBcnJheS5pc0FycmF5KHUuY29lcmNlLmZyb20pJiYodS5jb2VyY2U9e21ldGhvZDp1LmNvZXJjZS5tZXRob2QsZnJvbTpbXS5jb25jYXQodS5jb2VyY2UuZnJvbSl9KSksdS5jb2VyY2U9aS5jb2VyY2UodS5jb2VyY2UsZi5jb2VyY2UpLHUudmFsaWRhdGU9aS52YWxpZGF0ZSh1LnZhbGlkYXRlLGYudmFsaWRhdGUpO2NvbnN0IGg9T2JqZWN0LmFzc2lnbih7fSxmLnJ1bGVzKTtpZih1LnJ1bGVzKWZvcihjb25zdCBlIGluIHUucnVsZXMpe2NvbnN0IHQ9dS5ydWxlc1tlXTtzKFwib2JqZWN0XCI9PXR5cGVvZiB0LFwiSW52YWxpZCBydWxlIGRlZmluaXRpb24gZm9yXCIsdS50eXBlLGUpO2xldCByPXQubWV0aG9kO2lmKHZvaWQgMD09PXImJihyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKGUpfSksciYmKHMoIWxbZV0sXCJSdWxlIGNvbmZsaWN0IGluXCIsdS50eXBlLGUpLGxbZV09cikscyghaFtlXSxcIlJ1bGUgY29uZmxpY3QgaW5cIix1LnR5cGUsZSksaFtlXT10LHQuYWxpYXMpe2NvbnN0IGU9W10uY29uY2F0KHQuYWxpYXMpO2Zvcihjb25zdCByIG9mIGUpbFtyXT10Lm1ldGhvZH10LmFyZ3MmJih0LmFyZ3NCeU5hbWU9bmV3IE1hcCx0LmFyZ3M9dC5hcmdzLm1hcChlPT4oXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXtuYW1lOmV9KSxzKCF0LmFyZ3NCeU5hbWUuaGFzKGUubmFtZSksXCJEdXBsaWNhdGVkIGFyZ3VtZW50IG5hbWVcIixlLm5hbWUpLG8uaXNTY2hlbWEoZS5hc3NlcnQpJiYoZS5hc3NlcnQ9ZS5hc3NlcnQuc3RyaWN0KCkubGFiZWwoZS5uYW1lKSksdC5hcmdzQnlOYW1lLnNldChlLm5hbWUsZSksZSkpKX11LnJ1bGVzPWg7Y29uc3QgZD1PYmplY3QuYXNzaWduKHt9LGYubW9kaWZpZXJzKTtpZih1Lm1vZGlmaWVycylmb3IoY29uc3QgZSBpbiB1Lm1vZGlmaWVycyl7cyghbFtlXSxcIlJ1bGUgY29uZmxpY3QgaW5cIix1LnR5cGUsZSk7Y29uc3QgdD11Lm1vZGlmaWVyc1tlXTtzKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQsXCJJbnZhbGlkIG1vZGlmaWVyIGRlZmluaXRpb24gZm9yXCIsdS50eXBlLGUpO2NvbnN0IHI9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMucnVsZSh7W2VdOnR9KX07bFtlXT1yLGRbZV09dH1pZih1Lm1vZGlmaWVycz1kLHUub3ZlcnJpZGVzKXtsLl9zdXBlcj1yLGMuJF9zdXBlcj17fTtmb3IoY29uc3QgZSBpbiB1Lm92ZXJyaWRlcylzKHJbZV0sXCJDYW5ub3Qgb3ZlcnJpZGUgbWlzc2luZ1wiLGUpLGMuJF9zdXBlcltlXT1yW2VdLmJpbmQoYyk7T2JqZWN0LmFzc2lnbihsLHUub3ZlcnJpZGVzKX11LmNhc3Q9T2JqZWN0LmFzc2lnbih7fSxmLmNhc3QsdS5jYXN0KTtjb25zdCBwPU9iamVjdC5hc3NpZ24oe30sZi5tYW5pZmVzdCx1Lm1hbmlmZXN0KTtyZXR1cm4gcC5idWlsZD1pLmJ1aWxkKHUubWFuaWZlc3QmJnUubWFuaWZlc3QuYnVpbGQsZi5tYW5pZmVzdCYmZi5tYW5pZmVzdC5idWlsZCksdS5tYW5pZmVzdD1wLHUucmVidWlsZD1pLnJlYnVpbGQodS5yZWJ1aWxkLGYucmVidWlsZCksY30saS5idWlsZD1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZ0P2Z1bmN0aW9uKHIscyl7cmV0dXJuIHQoZShyLHMpLHMpfTplfHx0fSxpLmNvZXJjZT1mdW5jdGlvbihlLHQpe3JldHVybiBlJiZ0P3tmcm9tOmUuZnJvbSYmdC5mcm9tP1suLi5uZXcgU2V0KFsuLi5lLmZyb20sLi4udC5mcm9tXSldOm51bGwsbWV0aG9kKHIscyl7bGV0IG47aWYoKCF0LmZyb218fHQuZnJvbS5pbmNsdWRlcyh0eXBlb2YgcikpJiYobj10Lm1ldGhvZChyLHMpLG4pKXtpZihuLmVycm9yc3x8dm9pZCAwPT09bi52YWx1ZSlyZXR1cm4gbjtyPW4udmFsdWV9aWYoIWUuZnJvbXx8ZS5mcm9tLmluY2x1ZGVzKHR5cGVvZiByKSl7Y29uc3QgdD1lLm1ldGhvZChyLHMpO2lmKHQpcmV0dXJuIHR9cmV0dXJuIG59fTplfHx0fSxpLnByZXBhcmU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe2NvbnN0IG49ZShyLHMpO2lmKG4pe2lmKG4uZXJyb3JzfHx2b2lkIDA9PT1uLnZhbHVlKXJldHVybiBuO3I9bi52YWx1ZX1yZXR1cm4gdChyLHMpfHxufTplfHx0fSxpLnJlYnVpbGQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyKXt0KHIpLGUocil9OmV8fHR9LGkudmFsaWRhdGU9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSYmdD9mdW5jdGlvbihyLHMpe2NvbnN0IG49dChyLHMpO2lmKG4pe2lmKG4uZXJyb3JzJiYoIUFycmF5LmlzQXJyYXkobi5lcnJvcnMpfHxuLmVycm9ycy5sZW5ndGgpKXJldHVybiBuO3I9bi52YWx1ZX1yZXR1cm4gZShyLHMpfHxufTplfHx0fX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyKSxvPXIoMTQpLGE9e307ZS5leHBvcnRzPWEubWVyZ2U9ZnVuY3Rpb24oZSx0LHIpe2lmKHMoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHRhcmdldCB2YWx1ZTogbXVzdCBiZSBhbiBvYmplY3RcIikscyhudWxsPT10fHxcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc291cmNlIHZhbHVlOiBtdXN0IGJlIG51bGwsIHVuZGVmaW5lZCwgb3IgYW4gb2JqZWN0XCIpLCF0KXJldHVybiBlO2lmKHI9T2JqZWN0LmFzc2lnbih7bnVsbE92ZXJyaWRlOiEwLG1lcmdlQXJyYXlzOiEwfSxyKSxBcnJheS5pc0FycmF5KHQpKXtzKEFycmF5LmlzQXJyYXkoZSksXCJDYW5ub3QgbWVyZ2UgYXJyYXkgb250byBhbiBvYmplY3RcIiksci5tZXJnZUFycmF5c3x8KGUubGVuZ3RoPTApO2ZvcihsZXQgcz0wO3M8dC5sZW5ndGg7KytzKWUucHVzaChuKHRbc10se3N5bWJvbHM6ci5zeW1ib2xzfSkpO3JldHVybiBlfWNvbnN0IGk9by5rZXlzKHQscik7Zm9yKGxldCBzPTA7czxpLmxlbmd0aDsrK3Mpe2NvbnN0IG89aVtzXTtpZihcIl9fcHJvdG9fX1wiPT09b3x8IU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0LG8pKWNvbnRpbnVlO2NvbnN0IGw9dFtvXTtpZihsJiZcIm9iamVjdFwiPT10eXBlb2YgbCl7aWYoZVtvXT09PWwpY29udGludWU7IWVbb118fFwib2JqZWN0XCIhPXR5cGVvZiBlW29dfHxBcnJheS5pc0FycmF5KGVbb10pIT09QXJyYXkuaXNBcnJheShsKXx8bCBpbnN0YW5jZW9mIERhdGV8fGwgaW5zdGFuY2VvZiBSZWdFeHA/ZVtvXT1uKGwse3N5bWJvbHM6ci5zeW1ib2xzfSk6YS5tZXJnZShlW29dLGwscil9ZWxzZSBudWxsIT1sP2Vbb109bDpyLm51bGxPdmVycmlkZSYmKGVbb109bCl9cmV0dXJuIGV9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigxMCksbz1yKDEpLGE9e307ZS5leHBvcnRzPWEuVmFsdWVzPWNsYXNze2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5fdmFsdWVzPW5ldyBTZXQoZSksdGhpcy5fcmVmcz1uZXcgU2V0KHQpLHRoaXMuX2xvd2VyY2FzZT1hLmxvd2VyY2FzZXMoZSksdGhpcy5fb3ZlcnJpZGU9ITF9Z2V0IGxlbmd0aCgpe3JldHVybiB0aGlzLl92YWx1ZXMuc2l6ZSt0aGlzLl9yZWZzLnNpemV9YWRkKGUsdCl7by5pc1Jlc29sdmFibGUoZSk/dGhpcy5fcmVmcy5oYXMoZSl8fCh0aGlzLl9yZWZzLmFkZChlKSx0JiZ0LnJlZ2lzdGVyKGUpKTp0aGlzLmhhcyhlLG51bGwsbnVsbCwhMSl8fCh0aGlzLl92YWx1ZXMuYWRkKGUpLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZ0aGlzLl9sb3dlcmNhc2Uuc2V0KGUudG9Mb3dlckNhc2UoKSxlKSl9c3RhdGljIG1lcmdlKGUsdCxyKXtpZihlPWV8fG5ldyBhLlZhbHVlcyx0KXtpZih0Ll9vdmVycmlkZSlyZXR1cm4gdC5jbG9uZSgpO2Zvcihjb25zdCByIG9mWy4uLnQuX3ZhbHVlcywuLi50Ll9yZWZzXSllLmFkZChyKX1pZihyKWZvcihjb25zdCB0IG9mWy4uLnIuX3ZhbHVlcywuLi5yLl9yZWZzXSllLnJlbW92ZSh0KTtyZXR1cm4gZS5sZW5ndGg/ZTpudWxsfXJlbW92ZShlKXtvLmlzUmVzb2x2YWJsZShlKT90aGlzLl9yZWZzLmRlbGV0ZShlKToodGhpcy5fdmFsdWVzLmRlbGV0ZShlKSxcInN0cmluZ1wiPT10eXBlb2YgZSYmdGhpcy5fbG93ZXJjYXNlLmRlbGV0ZShlLnRvTG93ZXJDYXNlKCkpKX1oYXMoZSx0LHIscyl7cmV0dXJuISF0aGlzLmdldChlLHQscixzKX1nZXQoZSx0LHIscyl7aWYoIXRoaXMubGVuZ3RoKXJldHVybiExO2lmKHRoaXMuX3ZhbHVlcy5oYXMoZSkpcmV0dXJue3ZhbHVlOmV9O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiZlJiZzKXtjb25zdCB0PXRoaXMuX2xvd2VyY2FzZS5nZXQoZS50b0xvd2VyQ2FzZSgpKTtpZih0KXJldHVybnt2YWx1ZTp0fX1pZighdGhpcy5fcmVmcy5zaXplJiZcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4hMTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSlmb3IoY29uc3QgdCBvZiB0aGlzLl92YWx1ZXMpaWYobih0LGUpKXJldHVybnt2YWx1ZTp0fTtpZih0KWZvcihjb25zdCBvIG9mIHRoaXMuX3JlZnMpe2NvbnN0IGE9by5yZXNvbHZlKGUsdCxyLG51bGwse2luOiEwfSk7aWYodm9pZCAwPT09YSljb250aW51ZTtjb25zdCBpPW8uaW4mJlwib2JqZWN0XCI9PXR5cGVvZiBhP0FycmF5LmlzQXJyYXkoYSk/YTpPYmplY3Qua2V5cyhhKTpbYV07Zm9yKGNvbnN0IHQgb2YgaSlpZih0eXBlb2YgdD09dHlwZW9mIGUpaWYocyYmZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKHQudG9Mb3dlckNhc2UoKT09PWUudG9Mb3dlckNhc2UoKSlyZXR1cm57dmFsdWU6dCxyZWY6b319ZWxzZSBpZihuKHQsZSkpcmV0dXJue3ZhbHVlOnQscmVmOm99fXJldHVybiExfW92ZXJyaWRlKCl7dGhpcy5fb3ZlcnJpZGU9ITB9dmFsdWVzKGUpe2lmKGUmJmUuZGlzcGxheSl7Y29uc3QgZT1bXTtmb3IoY29uc3QgdCBvZlsuLi50aGlzLl92YWx1ZXMsLi4udGhpcy5fcmVmc10pdm9pZCAwIT09dCYmZS5wdXNoKHQpO3JldHVybiBlfXJldHVybiBBcnJheS5mcm9tKFsuLi50aGlzLl92YWx1ZXMsLi4udGhpcy5fcmVmc10pfWNsb25lKCl7Y29uc3QgZT1uZXcgYS5WYWx1ZXModGhpcy5fdmFsdWVzLHRoaXMuX3JlZnMpO3JldHVybiBlLl9vdmVycmlkZT10aGlzLl9vdmVycmlkZSxlfWNvbmNhdChlKXtzKCFlLl9vdmVycmlkZSxcIkNhbm5vdCBjb25jYXQgb3ZlcnJpZGUgc2V0IG9mIHZhbHVlc1wiKTtjb25zdCB0PW5ldyBhLlZhbHVlcyhbLi4udGhpcy5fdmFsdWVzLC4uLmUuX3ZhbHVlc10sWy4uLnRoaXMuX3JlZnMsLi4uZS5fcmVmc10pO3JldHVybiB0Ll9vdmVycmlkZT10aGlzLl9vdmVycmlkZSx0fWRlc2NyaWJlKCl7Y29uc3QgZT1bXTt0aGlzLl9vdmVycmlkZSYmZS5wdXNoKHtvdmVycmlkZTohMH0pO2Zvcihjb25zdCB0IG9mIHRoaXMuX3ZhbHVlcy52YWx1ZXMoKSllLnB1c2godCYmXCJvYmplY3RcIj09dHlwZW9mIHQ/e3ZhbHVlOnR9OnQpO2Zvcihjb25zdCB0IG9mIHRoaXMuX3JlZnMudmFsdWVzKCkpZS5wdXNoKHQuZGVzY3JpYmUoKSk7cmV0dXJuIGV9fSxhLlZhbHVlcy5wcm90b3R5cGVbby5zeW1ib2xzLnZhbHVlc109ITAsYS5WYWx1ZXMucHJvdG90eXBlLnNsaWNlPWEuVmFsdWVzLnByb3RvdHlwZS5jbG9uZSxhLmxvd2VyY2FzZXM9ZnVuY3Rpb24oZSl7Y29uc3QgdD1uZXcgTWFwO2lmKGUpZm9yKGNvbnN0IHIgb2YgZSlcInN0cmluZ1wiPT10eXBlb2YgciYmdC5zZXQoci50b0xvd2VyQ2FzZSgpLHIpO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cig0Myksbj1yKDApLG89cigyKSxhPXIoNDQpLGk9cigzKSxsPXIoMSksYz1yKDgpLHU9cig0KSxmPXIoNSksbT1yKDcpLGg9e3JlbmFtZURlZmF1bHRzOnthbGlhczohMSxtdWx0aXBsZTohMSxvdmVycmlkZTohMX19O2UuZXhwb3J0cz1pLmV4dGVuZCh7dHlwZTpcIl9rZXlzXCIscHJvcGVydGllczp7dHlwZW9mOlwib2JqZWN0XCJ9LGZsYWdzOnt1bmtub3duOntkZWZhdWx0OiExfX0sdGVybXM6e2RlcGVuZGVuY2llczp7aW5pdDpudWxsfSxrZXlzOntpbml0Om51bGwsbWFuaWZlc3Q6e21hcHBlZDp7ZnJvbTpcInNjaGVtYVwiLHRvOlwia2V5XCJ9fX0scGF0dGVybnM6e2luaXQ6bnVsbH0scmVuYW1lczp7aW5pdDpudWxsfX0sYXJnczooZSx0KT0+ZS5rZXlzKHQpLHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIsc3RhdGU6cyxwcmVmczpufSl7aWYoIWV8fHR5cGVvZiBlIT09dC4kX3Byb3BlcnR5KFwidHlwZW9mXCIpfHxBcnJheS5pc0FycmF5KGUpKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwib2JqZWN0LmJhc2VcIix7dHlwZTp0LiRfcHJvcGVydHkoXCJ0eXBlb2ZcIil9KX07aWYoISh0LiRfdGVybXMucmVuYW1lc3x8dC4kX3Rlcm1zLmRlcGVuZGVuY2llc3x8dC4kX3Rlcm1zLmtleXN8fHQuJF90ZXJtcy5wYXR0ZXJuc3x8dC4kX3Rlcm1zLmV4dGVybmFscykpcmV0dXJuO2U9aC5jbG9uZShlLG4pO2NvbnN0IG89W107aWYodC4kX3Rlcm1zLnJlbmFtZXMmJiFoLnJlbmFtZSh0LGUscyxuLG8pKXJldHVybnt2YWx1ZTplLGVycm9yczpvfTtpZighdC4kX3Rlcm1zLmtleXMmJiF0LiRfdGVybXMucGF0dGVybnMmJiF0LiRfdGVybXMuZGVwZW5kZW5jaWVzKXJldHVybnt2YWx1ZTplLGVycm9yczpvfTtjb25zdCBhPW5ldyBTZXQoT2JqZWN0LmtleXMoZSkpO2lmKHQuJF90ZXJtcy5rZXlzKXtjb25zdCByPVtlLC4uLnMuYW5jZXN0b3JzXTtmb3IoY29uc3QgaSBvZiB0LiRfdGVybXMua2V5cyl7Y29uc3QgdD1pLmtleSxsPWVbdF07YS5kZWxldGUodCk7Y29uc3QgYz1zLmxvY2FsaXplKFsuLi5zLnBhdGgsdF0scixpKSx1PWkuc2NoZW1hLiRfdmFsaWRhdGUobCxjLG4pO2lmKHUuZXJyb3JzKXtpZihuLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnUuZXJyb3JzfTtvLnB1c2goLi4udS5lcnJvcnMpfWVsc2VcInN0cmlwXCI9PT1pLnNjaGVtYS5fZmxhZ3MucmVzdWx0fHx2b2lkIDA9PT11LnZhbHVlJiZ2b2lkIDAhPT1sP2RlbGV0ZSBlW3RdOnZvaWQgMCE9PXUudmFsdWUmJihlW3RdPXUudmFsdWUpfX1pZihhLnNpemV8fHQuX2ZsYWdzLl9oYXNQYXR0ZXJuTWF0Y2gpe2NvbnN0IHI9aC51bmtub3duKHQsZSxhLG8scyxuKTtpZihyKXJldHVybiByfWlmKHQuJF90ZXJtcy5kZXBlbmRlbmNpZXMpZm9yKGNvbnN0IHIgb2YgdC4kX3Rlcm1zLmRlcGVuZGVuY2llcyl7aWYoci5rZXkmJnZvaWQgMD09PXIua2V5LnJlc29sdmUoZSxzLG4sbnVsbCx7c2hhZG93OiExfSkpY29udGludWU7Y29uc3QgYT1oLmRlcGVuZGVuY2llc1tyLnJlbF0odCxyLGUscyxuKTtpZihhKXtjb25zdCByPXQuJF9jcmVhdGVFcnJvcihhLmNvZGUsZSxhLmNvbnRleHQscyxuKTtpZihuLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnJ9O28ucHVzaChyKX19cmV0dXJue3ZhbHVlOmUsZXJyb3JzOm99fSxydWxlczp7YW5kOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwiYW5kXCIpLGguZGVwZW5kZW5jeSh0aGlzLFwiYW5kXCIsbnVsbCxlKX19LGFwcGVuZDp7bWV0aG9kKGUpe3JldHVybiBudWxsPT1lfHwwPT09T2JqZWN0LmtleXMoZSkubGVuZ3RoP3RoaXM6dGhpcy5rZXlzKGUpfX0sYXNzZXJ0OnttZXRob2QoZSx0LHIpe20uaXNUZW1wbGF0ZShlKXx8KGU9Yy5yZWYoZSkpLG4odm9pZCAwPT09cnx8XCJzdHJpbmdcIj09dHlwZW9mIHIsXCJNZXNzYWdlIG11c3QgYmUgYSBzdHJpbmdcIiksdD10aGlzLiRfY29tcGlsZSh0LHthcHBlbmRQYXRoOiEwfSk7Y29uc3Qgcz10aGlzLiRfYWRkUnVsZSh7bmFtZTpcImFzc2VydFwiLGFyZ3M6e3N1YmplY3Q6ZSxzY2hlbWE6dCxtZXNzYWdlOnJ9fSk7cmV0dXJuIHMuJF9tdXRhdGVSZWdpc3RlcihlKSxzLiRfbXV0YXRlUmVnaXN0ZXIodCksc30sdmFsaWRhdGUoZSx7ZXJyb3I6dCxwcmVmczpyLHN0YXRlOnN9LHtzdWJqZWN0Om4sc2NoZW1hOm8sbWVzc2FnZTphfSl7Y29uc3QgaT1uLnJlc29sdmUoZSxzLHIpLGw9Zi5pc1JlZihuKT9uLmFic29sdXRlKHMpOltdO3JldHVybiBvLiRfbWF0Y2goaSxzLmxvY2FsaXplKGwsW2UsLi4ucy5hbmNlc3RvcnNdLG8pLHIpP2U6dChcIm9iamVjdC5hc3NlcnRcIix7c3ViamVjdDpuLG1lc3NhZ2U6YX0pfSxhcmdzOltcInN1YmplY3RcIixcInNjaGVtYVwiLFwibWVzc2FnZVwiXSxtdWx0aTohMH0saW5zdGFuY2U6e21ldGhvZChlLHQpe3JldHVybiBuKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJjb25zdHJ1Y3RvciBtdXN0IGJlIGEgZnVuY3Rpb25cIiksdD10fHxlLm5hbWUsdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJpbnN0YW5jZVwiLGFyZ3M6e2NvbnN0cnVjdG9yOmUsbmFtZTp0fX0pfSx2YWxpZGF0ZTooZSx0LHtjb25zdHJ1Y3RvcjpyLG5hbWU6c30pPT5lIGluc3RhbmNlb2Ygcj9lOnQuZXJyb3IoXCJvYmplY3QuaW5zdGFuY2VcIix7dHlwZTpzLHZhbHVlOmV9KSxhcmdzOltcImNvbnN0cnVjdG9yXCIsXCJuYW1lXCJdfSxrZXlzOnttZXRob2QoZSl7bih2b2lkIDA9PT1lfHxcIm9iamVjdFwiPT10eXBlb2YgZSxcIk9iamVjdCBzY2hlbWEgbXVzdCBiZSBhIHZhbGlkIG9iamVjdFwiKSxuKCFsLmlzU2NoZW1hKGUpLFwiT2JqZWN0IHNjaGVtYSBjYW5ub3QgYmUgYSBqb2kgc2NoZW1hXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO2lmKGUpaWYoT2JqZWN0LmtleXMoZSkubGVuZ3RoKXt0LiRfdGVybXMua2V5cz10LiRfdGVybXMua2V5cz90LiRfdGVybXMua2V5cy5maWx0ZXIodD0+IWUuaGFzT3duUHJvcGVydHkodC5rZXkpKTpuZXcgaC5LZXlzO2Zvcihjb25zdCByIGluIGUpbC50cnlXaXRoUGF0aCgoKT0+dC4kX3Rlcm1zLmtleXMucHVzaCh7a2V5OnIsc2NoZW1hOnRoaXMuJF9jb21waWxlKGVbcl0pfSkscil9ZWxzZSB0LiRfdGVybXMua2V5cz1uZXcgaC5LZXlzO2Vsc2UgdC4kX3Rlcm1zLmtleXM9bnVsbDtyZXR1cm4gdC4kX211dGF0ZVJlYnVpbGQoKX19LGxlbmd0aDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPVwifSl9LHZhbGlkYXRlOihlLHQse2xpbWl0OnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOm99KT0+bC5jb21wYXJlKE9iamVjdC5rZXlzKGUpLmxlbmd0aCxyLG4pP2U6dC5lcnJvcihcIm9iamVjdC5cIitzLHtsaW1pdDpvLmxpbWl0LHZhbHVlOmV9KSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpsLmxpbWl0LG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclwifV19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPD1cIn0pfX0sbWluOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluXCIsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSxuYW5kOnttZXRob2QoLi4uZSl7cmV0dXJuIGwudmVyaWZ5RmxhdChlLFwibmFuZFwiKSxoLmRlcGVuZGVuY3kodGhpcyxcIm5hbmRcIixudWxsLGUpfX0sb3I6e21ldGhvZCguLi5lKXtyZXR1cm4gbC52ZXJpZnlGbGF0KGUsXCJvclwiKSxoLmRlcGVuZGVuY3kodGhpcyxcIm9yXCIsbnVsbCxlKX19LG94b3I6e21ldGhvZCguLi5lKXtyZXR1cm4gaC5kZXBlbmRlbmN5KHRoaXMsXCJveG9yXCIsbnVsbCxlKX19LHBhdHRlcm46e21ldGhvZChlLHQscj17fSl7Y29uc3Qgcz1lIGluc3RhbmNlb2YgUmVnRXhwO3N8fChlPXRoaXMuJF9jb21waWxlKGUse2FwcGVuZFBhdGg6ITB9KSksbih2b2lkIDAhPT10LFwiSW52YWxpZCBydWxlXCIpLGwuYXNzZXJ0T3B0aW9ucyhyLFtcImZhbGx0aHJvdWdoXCIsXCJtYXRjaGVzXCJdKSxzJiZuKCFlLmZsYWdzLmluY2x1ZGVzKFwiZ1wiKSYmIWUuZmxhZ3MuaW5jbHVkZXMoXCJ5XCIpLFwicGF0dGVybiBzaG91bGQgbm90IHVzZSBnbG9iYWwgb3Igc3RpY2t5IG1vZGVcIiksdD10aGlzLiRfY29tcGlsZSh0LHthcHBlbmRQYXRoOiEwfSk7Y29uc3Qgbz10aGlzLmNsb25lKCk7by4kX3Rlcm1zLnBhdHRlcm5zPW8uJF90ZXJtcy5wYXR0ZXJuc3x8W107Y29uc3QgYT17W3M/XCJyZWdleFwiOlwic2NoZW1hXCJdOmUscnVsZTp0fTtyZXR1cm4gci5tYXRjaGVzJiYoYS5tYXRjaGVzPXRoaXMuJF9jb21waWxlKHIubWF0Y2hlcyksXCJhcnJheVwiIT09YS5tYXRjaGVzLnR5cGUmJihhLm1hdGNoZXM9YS5tYXRjaGVzLiRfcm9vdC5hcnJheSgpLml0ZW1zKGEubWF0Y2hlcykpLG8uJF9tdXRhdGVSZWdpc3RlcihhLm1hdGNoZXMpLG8uJF9zZXRGbGFnKFwiX2hhc1BhdHRlcm5NYXRjaFwiLCEwLHtjbG9uZTohMX0pKSxyLmZhbGx0aHJvdWdoJiYoYS5mYWxsdGhyb3VnaD0hMCksby4kX3Rlcm1zLnBhdHRlcm5zLnB1c2goYSksby4kX211dGF0ZVJlZ2lzdGVyKHQpLG99fSxyZWY6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcInJlZlwiKX0sdmFsaWRhdGU6KGUsdCk9PmYuaXNSZWYoZSk/ZTp0LmVycm9yKFwib2JqZWN0LnJlZlR5cGVcIix7dmFsdWU6ZX0pfSxyZWdleDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwicmVnZXhcIil9LHZhbGlkYXRlOihlLHQpPT5lIGluc3RhbmNlb2YgUmVnRXhwP2U6dC5lcnJvcihcIm9iamVjdC5yZWdleFwiLHt2YWx1ZTplfSl9LHJlbmFtZTp7bWV0aG9kKGUsdCxyPXt9KXtuKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxlIGluc3RhbmNlb2YgUmVnRXhwLFwiUmVuYW1lIG1pc3NpbmcgdGhlIGZyb20gYXJndW1lbnRcIiksbihcInN0cmluZ1wiPT10eXBlb2YgdHx8dCBpbnN0YW5jZW9mIG0sXCJJbnZhbGlkIHJlbmFtZSB0byBhcmd1bWVudFwiKSxuKHQhPT1lLFwiQ2Fubm90IHJlbmFtZSBrZXkgdG8gc2FtZSBuYW1lOlwiLGUpLGwuYXNzZXJ0T3B0aW9ucyhyLFtcImFsaWFzXCIsXCJpZ25vcmVVbmRlZmluZWRcIixcIm92ZXJyaWRlXCIsXCJtdWx0aXBsZVwiXSk7Y29uc3Qgbz10aGlzLmNsb25lKCk7by4kX3Rlcm1zLnJlbmFtZXM9by4kX3Rlcm1zLnJlbmFtZXN8fFtdO2Zvcihjb25zdCB0IG9mIG8uJF90ZXJtcy5yZW5hbWVzKW4odC5mcm9tIT09ZSxcIkNhbm5vdCByZW5hbWUgdGhlIHNhbWUga2V5IG11bHRpcGxlIHRpbWVzXCIpO3JldHVybiB0IGluc3RhbmNlb2YgbSYmby4kX211dGF0ZVJlZ2lzdGVyKHQpLG8uJF90ZXJtcy5yZW5hbWVzLnB1c2goe2Zyb206ZSx0bzp0LG9wdGlvbnM6cyhoLnJlbmFtZURlZmF1bHRzLHIpfSksb319LHNjaGVtYTp7bWV0aG9kKGU9XCJhbnlcIil7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwic2NoZW1hXCIsYXJnczp7dHlwZTplfX0pfSx2YWxpZGF0ZTooZSx0LHt0eXBlOnJ9KT0+IWwuaXNTY2hlbWEoZSl8fFwiYW55XCIhPT1yJiZlLnR5cGUhPT1yP3QuZXJyb3IoXCJvYmplY3Quc2NoZW1hXCIse3R5cGU6cn0pOmV9LHVua25vd246e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJ1bmtub3duXCIsITEhPT1lKX19LHdpdGg6e21ldGhvZChlLHQscj17fSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwid2l0aFwiLGUsdCxyKX19LHdpdGhvdXQ6e21ldGhvZChlLHQscj17fSl7cmV0dXJuIGguZGVwZW5kZW5jeSh0aGlzLFwid2l0aG91dFwiLGUsdCxyKX19LHhvcjp7bWV0aG9kKC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcInhvclwiKSxoLmRlcGVuZGVuY3kodGhpcyxcInhvclwiLG51bGwsZSl9fX0sb3ZlcnJpZGVzOntkZWZhdWx0KGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPWwuc3ltYm9scy5kZWVwRGVmYXVsdCksdGhpcy4kX3N1cGVyLmRlZmF1bHQoZSx0KX19LHJlYnVpbGQoZSl7aWYoZS4kX3Rlcm1zLmtleXMpe2NvbnN0IHQ9bmV3IGEuU29ydGVyO2Zvcihjb25zdCByIG9mIGUuJF90ZXJtcy5rZXlzKWwudHJ5V2l0aFBhdGgoKCk9PnQuYWRkKHIse2FmdGVyOnIuc2NoZW1hLiRfcm9vdFJlZmVyZW5jZXMoKSxncm91cDpyLmtleX0pLHIua2V5KTtlLiRfdGVybXMua2V5cz1uZXcgaC5LZXlzKC4uLnQubm9kZXMpfX0sbWFuaWZlc3Q6e2J1aWxkKGUsdCl7aWYodC5rZXlzJiYoZT1lLmtleXModC5rZXlzKSksdC5kZXBlbmRlbmNpZXMpZm9yKGNvbnN0e3JlbDpyLGtleTpzPW51bGwscGVlcnM6bixvcHRpb25zOm99b2YgdC5kZXBlbmRlbmNpZXMpZT1oLmRlcGVuZGVuY3koZSxyLHMsbixvKTtpZih0LnBhdHRlcm5zKWZvcihjb25zdHtyZWdleDpyLHNjaGVtYTpzLHJ1bGU6bixmYWxsdGhyb3VnaDpvLG1hdGNoZXM6YX1vZiB0LnBhdHRlcm5zKWU9ZS5wYXR0ZXJuKHJ8fHMsbix7ZmFsbHRocm91Z2g6byxtYXRjaGVzOmF9KTtpZih0LnJlbmFtZXMpZm9yKGNvbnN0e2Zyb206cix0bzpzLG9wdGlvbnM6bn1vZiB0LnJlbmFtZXMpZT1lLnJlbmFtZShyLHMsbik7cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJvYmplY3QuYW5kXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIHt7I3ByZXNlbnRXaXRoTGFiZWxzfX0gd2l0aG91dCBpdHMgcmVxdWlyZWQgcGVlcnMge3sjbWlzc2luZ1dpdGhMYWJlbHN9fVwiLFwib2JqZWN0LmFzc2VydFwiOid7eyNsYWJlbH19IGlzIGludmFsaWQgYmVjYXVzZSB7aWYoI3N1YmplY3Qua2V5LCBgXCJgICsgI3N1YmplY3Qua2V5ICsgYFwiIGZhaWxlZCB0byBgICsgKCNtZXNzYWdlIHx8IFwicGFzcyB0aGUgYXNzZXJ0aW9uIHRlc3RcIiksICNtZXNzYWdlIHx8IFwidGhlIGFzc2VydGlvbiBmYWlsZWRcIil9JyxcIm9iamVjdC5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgb2YgdHlwZSB7eyN0eXBlfX1cIixcIm9iamVjdC5pbnN0YW5jZVwiOid7eyNsYWJlbH19IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgXCJ7eyN0eXBlfX1cIicsXCJvYmplY3QubGVuZ3RoXCI6J3t7I2xhYmVsfX0gbXVzdCBoYXZlIHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5tYXhcIjone3sjbGFiZWx9fSBtdXN0IGhhdmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX0ga2V5e2lmKCNsaW1pdCA9PSAxLCBcIlwiLCBcInNcIil9JyxcIm9iamVjdC5taW5cIjone3sjbGFiZWx9fSBtdXN0IGhhdmUgYXQgbGVhc3Qge3sjbGltaXR9fSBrZXl7aWYoI2xpbWl0ID09IDEsIFwiXCIsIFwic1wiKX0nLFwib2JqZWN0Lm1pc3NpbmdcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB7eyNwZWVyc1dpdGhMYWJlbHN9fVwiLFwib2JqZWN0Lm5hbmRcIjonXCJ7eyNtYWluV2l0aExhYmVsfX1cIiBtdXN0IG5vdCBleGlzdCBzaW11bHRhbmVvdXNseSB3aXRoIHt7I3BlZXJzV2l0aExhYmVsc319JyxcIm9iamVjdC5veG9yXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGEgY29uZmxpY3QgYmV0d2VlbiBvcHRpb25hbCBleGNsdXNpdmUgcGVlcnMge3sjcGVlcnNXaXRoTGFiZWxzfX1cIixcIm9iamVjdC5wYXR0ZXJuLm1hdGNoXCI6XCJ7eyNsYWJlbH19IGtleXMgZmFpbGVkIHRvIG1hdGNoIHBhdHRlcm4gcmVxdWlyZW1lbnRzXCIsXCJvYmplY3QucmVmVHlwZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgSm9pIHJlZmVyZW5jZVwiLFwib2JqZWN0LnJlZ2V4XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBSZWdFeHAgb2JqZWN0XCIsXCJvYmplY3QucmVuYW1lLm11bHRpcGxlXCI6J3t7I2xhYmVsfX0gY2Fubm90IHJlbmFtZSBcInt7I2Zyb219fVwiIGJlY2F1c2UgbXVsdGlwbGUgcmVuYW1lcyBhcmUgZGlzYWJsZWQgYW5kIGFub3RoZXIga2V5IHdhcyBhbHJlYWR5IHJlbmFtZWQgdG8gXCJ7eyN0b319XCInLFwib2JqZWN0LnJlbmFtZS5vdmVycmlkZVwiOid7eyNsYWJlbH19IGNhbm5vdCByZW5hbWUgXCJ7eyNmcm9tfX1cIiBiZWNhdXNlIG92ZXJyaWRlIGlzIGRpc2FibGVkIGFuZCB0YXJnZXQgXCJ7eyN0b319XCIgZXhpc3RzJyxcIm9iamVjdC5zY2hlbWFcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIEpvaSBzY2hlbWEgb2Yge3sjdHlwZX19IHR5cGVcIixcIm9iamVjdC51bmtub3duXCI6XCJ7eyNsYWJlbH19IGlzIG5vdCBhbGxvd2VkXCIsXCJvYmplY3Qud2l0aFwiOidcInt7I21haW5XaXRoTGFiZWx9fVwiIG1pc3NpbmcgcmVxdWlyZWQgcGVlciBcInt7I3BlZXJXaXRoTGFiZWx9fVwiJyxcIm9iamVjdC53aXRob3V0XCI6J1wie3sjbWFpbldpdGhMYWJlbH19XCIgY29uZmxpY3Qgd2l0aCBmb3JiaWRkZW4gcGVlciBcInt7I3BlZXJXaXRoTGFiZWx9fVwiJyxcIm9iamVjdC54b3JcIjpcInt7I2xhYmVsfX0gY29udGFpbnMgYSBjb25mbGljdCBiZXR3ZWVuIGV4Y2x1c2l2ZSBwZWVycyB7eyNwZWVyc1dpdGhMYWJlbHN9fVwifX0pLGguY2xvbmU9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZSl7aWYodC5ub25FbnVtZXJhYmxlcylyZXR1cm4gbyhlLHtzaGFsbG93OiEwfSk7Y29uc3Qgcj1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihlKSk7cmV0dXJuIE9iamVjdC5hc3NpZ24ocixlKSxyfWNvbnN0IHI9ZnVuY3Rpb24oLi4udCl7cmV0dXJuIGUuYXBwbHkodGhpcyx0KX07cmV0dXJuIHIucHJvdG90eXBlPW8oZS5wcm90b3R5cGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwibmFtZVwiLHt2YWx1ZTplLm5hbWUsd3JpdGFibGU6ITF9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImxlbmd0aFwiLHt2YWx1ZTplLmxlbmd0aCx3cml0YWJsZTohMX0pLE9iamVjdC5hc3NpZ24ocixlKSxyfSxoLmRlcGVuZGVuY3k9ZnVuY3Rpb24oZSx0LHIscyxvKXtuKG51bGw9PT1yfHxcInN0cmluZ1wiPT10eXBlb2Ygcix0LFwia2V5IG11c3QgYmUgYSBzdHJpbmdzXCIpLG98fChvPXMubGVuZ3RoPjEmJlwib2JqZWN0XCI9PXR5cGVvZiBzW3MubGVuZ3RoLTFdP3MucG9wKCk6e30pLGwuYXNzZXJ0T3B0aW9ucyhvLFtcInNlcGFyYXRvclwiXSkscz1bXS5jb25jYXQocyk7Y29uc3QgYT1sLmRlZmF1bHQoby5zZXBhcmF0b3IsXCIuXCIpLGk9W107Zm9yKGNvbnN0IGUgb2YgcyluKFwic3RyaW5nXCI9PXR5cGVvZiBlLHQsXCJwZWVycyBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgcmVmZXJlbmNlXCIpLGkucHVzaChjLnJlZihlLHtzZXBhcmF0b3I6YSxhbmNlc3RvcjowLHByZWZpeDohMX0pKTtudWxsIT09ciYmKHI9Yy5yZWYocix7c2VwYXJhdG9yOmEsYW5jZXN0b3I6MCxwcmVmaXg6ITF9KSk7Y29uc3QgdT1lLmNsb25lKCk7cmV0dXJuIHUuJF90ZXJtcy5kZXBlbmRlbmNpZXM9dS4kX3Rlcm1zLmRlcGVuZGVuY2llc3x8W10sdS4kX3Rlcm1zLmRlcGVuZGVuY2llcy5wdXNoKG5ldyBoLkRlcGVuZGVuY3kodCxyLGkscykpLHV9LGguZGVwZW5kZW5jaWVzPXthbmQoZSx0LHIscyxuKXtjb25zdCBvPVtdLGE9W10saT10LnBlZXJzLmxlbmd0aDtmb3IoY29uc3QgZSBvZiB0LnBlZXJzKXZvaWQgMD09PWUucmVzb2x2ZShyLHMsbixudWxsLHtzaGFkb3c6ITF9KT9vLnB1c2goZS5rZXkpOmEucHVzaChlLmtleSk7aWYoby5sZW5ndGghPT1pJiZhLmxlbmd0aCE9PWkpcmV0dXJue2NvZGU6XCJvYmplY3QuYW5kXCIsY29udGV4dDp7cHJlc2VudDphLHByZXNlbnRXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsYSksbWlzc2luZzpvLG1pc3NpbmdXaXRoTGFiZWxzOmgua2V5c1RvTGFiZWxzKGUsbyl9fX0sbmFuZChlLHQscixzLG4pe2NvbnN0IG89W107Zm9yKGNvbnN0IGUgb2YgdC5wZWVycyl2b2lkIDAhPT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkmJm8ucHVzaChlLmtleSk7aWYoby5sZW5ndGghPT10LnBlZXJzLmxlbmd0aClyZXR1cm47Y29uc3QgYT10LnBhdGhzWzBdLGk9dC5wYXRocy5zbGljZSgxKTtyZXR1cm57Y29kZTpcIm9iamVjdC5uYW5kXCIsY29udGV4dDp7bWFpbjphLG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSxhKSxwZWVyczppLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLGkpfX19LG9yKGUsdCxyLHMsbil7Zm9yKGNvbnN0IGUgb2YgdC5wZWVycylpZih2b2lkIDAhPT1lLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJuO3JldHVybntjb2RlOlwib2JqZWN0Lm1pc3NpbmdcIixjb250ZXh0OntwZWVyczp0LnBhdGhzLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLHQucGF0aHMpfX19LG94b3IoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKCFvLmxlbmd0aHx8MT09PW8ubGVuZ3RoKXJldHVybjtjb25zdCBhPXtwZWVyczp0LnBhdGhzLHBlZXJzV2l0aExhYmVsczpoLmtleXNUb0xhYmVscyhlLHQucGF0aHMpfTtyZXR1cm4gYS5wcmVzZW50PW8sYS5wcmVzZW50V2l0aExhYmVscz1oLmtleXNUb0xhYmVscyhlLG8pLHtjb2RlOlwib2JqZWN0Lm94b3JcIixjb250ZXh0OmF9fSx3aXRoKGUsdCxyLHMsbil7Zm9yKGNvbnN0IG8gb2YgdC5wZWVycylpZih2b2lkIDA9PT1vLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJue2NvZGU6XCJvYmplY3Qud2l0aFwiLGNvbnRleHQ6e21haW46dC5rZXkua2V5LG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSx0LmtleS5rZXkpLHBlZXI6by5rZXkscGVlcldpdGhMYWJlbDpoLmtleXNUb0xhYmVscyhlLG8ua2V5KX19fSx3aXRob3V0KGUsdCxyLHMsbil7Zm9yKGNvbnN0IG8gb2YgdC5wZWVycylpZih2b2lkIDAhPT1vLnJlc29sdmUocixzLG4sbnVsbCx7c2hhZG93OiExfSkpcmV0dXJue2NvZGU6XCJvYmplY3Qud2l0aG91dFwiLGNvbnRleHQ6e21haW46dC5rZXkua2V5LG1haW5XaXRoTGFiZWw6aC5rZXlzVG9MYWJlbHMoZSx0LmtleS5rZXkpLHBlZXI6by5rZXkscGVlcldpdGhMYWJlbDpoLmtleXNUb0xhYmVscyhlLG8ua2V5KX19fSx4b3IoZSx0LHIscyxuKXtjb25zdCBvPVtdO2Zvcihjb25zdCBlIG9mIHQucGVlcnMpdm9pZCAwIT09ZS5yZXNvbHZlKHIscyxuLG51bGwse3NoYWRvdzohMX0pJiZvLnB1c2goZS5rZXkpO2lmKDE9PT1vLmxlbmd0aClyZXR1cm47Y29uc3QgYT17cGVlcnM6dC5wYXRocyxwZWVyc1dpdGhMYWJlbHM6aC5rZXlzVG9MYWJlbHMoZSx0LnBhdGhzKX07cmV0dXJuIDA9PT1vLmxlbmd0aD97Y29kZTpcIm9iamVjdC5taXNzaW5nXCIsY29udGV4dDphfTooYS5wcmVzZW50PW8sYS5wcmVzZW50V2l0aExhYmVscz1oLmtleXNUb0xhYmVscyhlLG8pLHtjb2RlOlwib2JqZWN0LnhvclwiLGNvbnRleHQ6YX0pfX0saC5rZXlzVG9MYWJlbHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90Lm1hcCh0PT5lLiRfbWFwTGFiZWxzKHQpKTplLiRfbWFwTGFiZWxzKHQpfSxoLnJlbmFtZT1mdW5jdGlvbihlLHQscixzLG4pe2NvbnN0IG89e307Zm9yKGNvbnN0IGEgb2YgZS4kX3Rlcm1zLnJlbmFtZXMpe2NvbnN0IGk9W10sbD1cInN0cmluZ1wiIT10eXBlb2YgYS5mcm9tO2lmKGwpZm9yKGNvbnN0IGUgaW4gdCl7aWYodm9pZCAwPT09dFtlXSYmYS5vcHRpb25zLmlnbm9yZVVuZGVmaW5lZCljb250aW51ZTtpZihlPT09YS50byljb250aW51ZTtjb25zdCByPWEuZnJvbS5leGVjKGUpO3ImJmkucHVzaCh7ZnJvbTplLHRvOmEudG8sbWF0Y2g6cn0pfWVsc2UhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsYS5mcm9tKXx8dm9pZCAwPT09dFthLmZyb21dJiZhLm9wdGlvbnMuaWdub3JlVW5kZWZpbmVkfHxpLnB1c2goYSk7Zm9yKGNvbnN0IGMgb2YgaSl7Y29uc3QgaT1jLmZyb207bGV0IHU9Yy50bztpZih1IGluc3RhbmNlb2YgbSYmKHU9dS5yZW5kZXIodCxyLHMsYy5tYXRjaCkpLGkhPT11KXtpZighYS5vcHRpb25zLm11bHRpcGxlJiZvW3VdJiYobi5wdXNoKGUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5yZW5hbWUubXVsdGlwbGVcIix0LHtmcm9tOmksdG86dSxwYXR0ZXJuOmx9LHIscykpLHMuYWJvcnRFYXJseSkpcmV0dXJuITE7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsdSkmJiFhLm9wdGlvbnMub3ZlcnJpZGUmJiFvW3VdJiYobi5wdXNoKGUuJF9jcmVhdGVFcnJvcihcIm9iamVjdC5yZW5hbWUub3ZlcnJpZGVcIix0LHtmcm9tOmksdG86dSxwYXR0ZXJuOmx9LHIscykpLHMuYWJvcnRFYXJseSkpcmV0dXJuITE7dm9pZCAwPT09dFtpXT9kZWxldGUgdFt1XTp0W3VdPXRbaV0sb1t1XT0hMCxhLm9wdGlvbnMuYWxpYXN8fGRlbGV0ZSB0W2ldfX19cmV0dXJuITB9LGgudW5rbm93bj1mdW5jdGlvbihlLHQscixzLG4sbyl7aWYoZS4kX3Rlcm1zLnBhdHRlcm5zKXtsZXQgYT0hMTtjb25zdCBpPWUuJF90ZXJtcy5wYXR0ZXJucy5tYXAoZT0+e2lmKGUubWF0Y2hlcylyZXR1cm4gYT0hMCxbXX0pLGw9W3QsLi4ubi5hbmNlc3RvcnNdO2Zvcihjb25zdCBhIG9mIHIpe2NvbnN0IGM9dFthXSx1PVsuLi5uLnBhdGgsYV07Zm9yKGxldCBmPTA7ZjxlLiRfdGVybXMucGF0dGVybnMubGVuZ3RoOysrZil7Y29uc3QgbT1lLiRfdGVybXMucGF0dGVybnNbZl07aWYobS5yZWdleCl7Y29uc3QgZT1tLnJlZ2V4LnRlc3QoYSk7aWYobi5tYWluc3RheS50cmFjZXIuZGVidWcobixcInJ1bGVcIixcInBhdHRlcm4uXCIuY29uY2F0KGYpLGU/XCJwYXNzXCI6XCJlcnJvclwiKSwhZSljb250aW51ZX1lbHNlIGlmKCFtLnNjaGVtYS4kX21hdGNoKGEsbi5uZXN0KG0uc2NoZW1hLFwicGF0dGVybi5cIi5jb25jYXQoZikpLG8pKWNvbnRpbnVlO3IuZGVsZXRlKGEpO2NvbnN0IGg9bi5sb2NhbGl6ZSh1LGwse3NjaGVtYTptLnJ1bGUsa2V5OmF9KSxkPW0ucnVsZS4kX3ZhbGlkYXRlKGMsaCxvKTtpZihkLmVycm9ycyl7aWYoby5hYm9ydEVhcmx5KXJldHVybnt2YWx1ZTp0LGVycm9yczpkLmVycm9yc307cy5wdXNoKC4uLmQuZXJyb3JzKX1pZihtLm1hdGNoZXMmJmlbZl0ucHVzaChhKSx0W2FdPWQudmFsdWUsIW0uZmFsbHRocm91Z2gpYnJlYWt9fWlmKGEpZm9yKGxldCByPTA7cjxpLmxlbmd0aDsrK3Ipe2NvbnN0IGE9aVtyXTtpZighYSljb250aW51ZTtjb25zdCBjPWUuJF90ZXJtcy5wYXR0ZXJuc1tyXS5tYXRjaGVzLGY9bi5sb2NhbGl6ZShuLnBhdGgsbCxjKSxtPWMuJF92YWxpZGF0ZShhLGYsbyk7aWYobS5lcnJvcnMpe2NvbnN0IHI9dS5kZXRhaWxzKG0uZXJyb3JzLHtvdmVycmlkZTohMX0pO3IubWF0Y2hlcz1hO2NvbnN0IGk9ZS4kX2NyZWF0ZUVycm9yKFwib2JqZWN0LnBhdHRlcm4ubWF0Y2hcIix0LHIsbixvKTtpZihvLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOnQsZXJyb3JzOml9O3MucHVzaChpKX19fWlmKCFyLnNpemV8fCFlLiRfdGVybXMua2V5cyYmIWUuJF90ZXJtcy5wYXR0ZXJucylyZXR1cm47aWYoby5zdHJpcFVua25vd24mJiFlLl9mbGFncy51bmtub3dufHxvLnNraXBGdW5jdGlvbnMpe2NvbnN0IGU9ISFvLnN0cmlwVW5rbm93biYmKCEwPT09by5zdHJpcFVua25vd258fCEhby5zdHJpcFVua25vd24ub2JqZWN0cyk7Zm9yKGNvbnN0IHMgb2YgcillPyhkZWxldGUgdFtzXSxyLmRlbGV0ZShzKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgdFtzXSYmci5kZWxldGUocyl9aWYoIWwuZGVmYXVsdChlLl9mbGFncy51bmtub3duLG8uYWxsb3dVbmtub3duKSlmb3IoY29uc3QgYSBvZiByKXtjb25zdCByPW4ubG9jYWxpemUoWy4uLm4ucGF0aCxhXSxbXSksaT1lLiRfY3JlYXRlRXJyb3IoXCJvYmplY3QudW5rbm93blwiLHRbYV0se2NoaWxkOmF9LHIsbyx7ZmxhZ3M6ITF9KTtpZihvLmFib3J0RWFybHkpcmV0dXJue3ZhbHVlOnQsZXJyb3JzOml9O3MucHVzaChpKX19LGguRGVwZW5kZW5jeT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQscixzKXt0aGlzLnJlbD1lLHRoaXMua2V5PXQsdGhpcy5wZWVycz1yLHRoaXMucGF0aHM9c31kZXNjcmliZSgpe2NvbnN0IGU9e3JlbDp0aGlzLnJlbCxwZWVyczp0aGlzLnBhdGhzfTtyZXR1cm4gbnVsbCE9PXRoaXMua2V5JiYoZS5rZXk9dGhpcy5rZXkua2V5KSxcIi5cIiE9PXRoaXMucGVlcnNbMF0uc2VwYXJhdG9yJiYoZS5vcHRpb25zPXtzZXBhcmF0b3I6dGhpcy5wZWVyc1swXS5zZXBhcmF0b3J9KSxlfX0saC5LZXlzPWNsYXNzIGV4dGVuZHMgQXJyYXl7Y29uY2F0KGUpe2NvbnN0IHQ9dGhpcy5zbGljZSgpLHI9bmV3IE1hcDtmb3IobGV0IGU9MDtlPHQubGVuZ3RoOysrZSlyLnNldCh0W2VdLmtleSxlKTtmb3IoY29uc3QgcyBvZiBlKXtjb25zdCBlPXMua2V5LG49ci5nZXQoZSk7dm9pZCAwIT09bj90W25dPXtrZXk6ZSxzY2hlbWE6dFtuXS5zY2hlbWEuY29uY2F0KHMuc2NoZW1hKX06dC5wdXNoKHMpfXJldHVybiB0fX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMjQpLG49cigyNSksbz17bWluRG9tYWluU2VnbWVudHM6Mixub25Bc2NpaVJ4Oi9bXlxceDAwLVxceDdmXS8sZG9tYWluQ29udHJvbFJ4Oi9bXFx4MDAtXFx4MjBAXFw6XFwvXS8sdGxkU2VnbWVudFJ4Oi9eW2EtekEtWl0oPzpbYS16QS1aMC05XFwtXSpbYS16QS1aMC05XSk/JC8sZG9tYWluU2VnbWVudFJ4Oi9eW2EtekEtWjAtOV0oPzpbYS16QS1aMC05XFwtXSpbYS16QS1aMC05XSk/JC8sVVJMOnMuVVJMfHxVUkx9O3QuYW5hbHl6ZT1mdW5jdGlvbihlLHQ9e30pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQ6IGRvbWFpbiBtdXN0IGJlIGEgc3RyaW5nXCIpO2lmKCFlKXJldHVybiBuLmNvZGUoXCJET01BSU5fTk9OX0VNUFRZX1NUUklOR1wiKTtpZihlLmxlbmd0aD4yNTYpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9UT09fTE9OR1wiKTtpZighIW8ubm9uQXNjaWlSeC50ZXN0KGUpKXtpZighMT09PXQuYWxsb3dVbmljb2RlKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9VTklDT0RFX0NIQVJTXCIpO2U9ZS5ub3JtYWxpemUoXCJORkNcIil9aWYoby5kb21haW5Db250cm9sUngudGVzdChlKSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0lOVkFMSURfQ0hBUlNcIik7ZT1vLnB1bnljb2RlKGUpO2NvbnN0IHI9dC5taW5Eb21haW5TZWdtZW50c3x8by5taW5Eb21haW5TZWdtZW50cyxzPWUuc3BsaXQoXCIuXCIpO2lmKHMubGVuZ3RoPHIpcmV0dXJuIG4uY29kZShcIkRPTUFJTl9TRUdNRU5UU19DT1VOVFwiKTtjb25zdCBhPXQudGxkcztpZihhKXtjb25zdCBlPXNbcy5sZW5ndGgtMV0udG9Mb3dlckNhc2UoKTtpZihhLmRlbnkmJmEuZGVueS5oYXMoZSl8fGEuYWxsb3cmJiFhLmFsbG93LmhhcyhlKSlyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0ZPUkJJRERFTl9UTERTXCIpfWZvcihsZXQgZT0wO2U8cy5sZW5ndGg7KytlKXtjb25zdCB0PXNbZV07aWYoIXQubGVuZ3RoKXJldHVybiBuLmNvZGUoXCJET01BSU5fRU1QVFlfU0VHTUVOVFwiKTtpZih0Lmxlbmd0aD42MylyZXR1cm4gbi5jb2RlKFwiRE9NQUlOX0xPTkdfU0VHTUVOVFwiKTtpZihlPHMubGVuZ3RoLTEpe2lmKCFvLmRvbWFpblNlZ21lbnRSeC50ZXN0KHQpKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9DSEFSU1wiKX1lbHNlIGlmKCFvLnRsZFNlZ21lbnRSeC50ZXN0KHQpKXJldHVybiBuLmNvZGUoXCJET01BSU5fSU5WQUxJRF9UTERTX0NIQVJTXCIpfXJldHVybiBudWxsfSx0LmlzVmFsaWQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4hdC5hbmFseXplKGUscil9LG8ucHVueWNvZGU9ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiBuZXcgby5VUkwoXCJodHRwOi8vXCIuY29uY2F0KGUpKS5ob3N0fWNhdGNoKHQpe3JldHVybiBlfX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5jb2Rlcz17RU1QVFlfU1RSSU5HOlwiQWRkcmVzcyBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiLEZPUkJJRERFTl9VTklDT0RFOlwiQWRkcmVzcyBjb250YWlucyBmb3JiaWRkZW4gVW5pY29kZSBjaGFyYWN0ZXJzXCIsTVVMVElQTEVfQVRfQ0hBUjpcIkFkZHJlc3MgY2Fubm90IGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBAIGNoYXJhY3RlclwiLE1JU1NJTkdfQVRfQ0hBUjpcIkFkZHJlc3MgbXVzdCBjb250YWluIG9uZSBAIGNoYXJhY3RlclwiLEVNUFRZX0xPQ0FMOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNhbm5vdCBiZSBlbXB0eVwiLEFERFJFU1NfVE9PX0xPTkc6XCJBZGRyZXNzIHRvbyBsb25nXCIsTE9DQUxfVE9PX0xPTkc6XCJBZGRyZXNzIGxvY2FsIHBhcnQgdG9vIGxvbmdcIixFTVBUWV9MT0NBTF9TRUdNRU5UOlwiQWRkcmVzcyBsb2NhbCBwYXJ0IGNvbnRhaW5zIGVtcHR5IGRvdC1zZXBhcmF0ZWQgc2VnbWVudFwiLElOVkFMSURfTE9DQUxfQ0hBUlM6XCJBZGRyZXNzIGxvY2FsIHBhcnQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJcIixET01BSU5fTk9OX0VNUFRZX1NUUklORzpcIkRvbWFpbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiLERPTUFJTl9UT09fTE9ORzpcIkRvbWFpbiB0b28gbG9uZ1wiLERPTUFJTl9JTlZBTElEX1VOSUNPREVfQ0hBUlM6XCJEb21haW4gY29udGFpbnMgZm9yYmlkZGVuIFVuaWNvZGUgY2hhcmFjdGVyc1wiLERPTUFJTl9JTlZBTElEX0NIQVJTOlwiRG9tYWluIGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVyXCIsRE9NQUlOX0lOVkFMSURfVExEU19DSEFSUzpcIkRvbWFpbiBjb250YWlucyBpbnZhbGlkIHRsZCBjaGFyYWN0ZXJcIixET01BSU5fU0VHTUVOVFNfQ09VTlQ6XCJEb21haW4gbGFja3MgdGhlIG1pbmltdW0gcmVxdWlyZWQgbnVtYmVyIG9mIHNlZ21lbnRzXCIsRE9NQUlOX0ZPUkJJRERFTl9UTERTOlwiRG9tYWluIHVzZXMgZm9yYmlkZGVuIFRMRFwiLERPTUFJTl9FTVBUWV9TRUdNRU5UOlwiRG9tYWluIGNvbnRhaW5zIGVtcHR5IGRvdC1zZXBhcmF0ZWQgc2VnbWVudFwiLERPTUFJTl9MT05HX1NFR01FTlQ6XCJEb21haW4gY29udGFpbnMgZG90LXNlcGFyYXRlZCBzZWdtZW50IHRoYXQgaXMgdG9vIGxvbmdcIn0sdC5jb2RlPWZ1bmN0aW9uKGUpe3JldHVybntjb2RlOmUsZXJyb3I6dC5jb2Rlc1tlXX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyNyksbz17Z2VuZXJhdGU6ZnVuY3Rpb24oKXtjb25zdCBlPXt9LHQ9XCIhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9XCIscj1cIlxcXFx3LVxcXFwufiVcXFxcZEEtRmEtZlwiK3QrXCI6QFwiLHM9XCJbXCIrcitcIl1cIixuPVwiKD86MHswLDJ9XFxcXGR8MD9bMS05XVxcXFxkfDFcXFxcZFxcXFxkfDJbMC00XVxcXFxkfDI1WzAtNV0pXCI7ZS5pcHY0YWRkcmVzcz1cIig/OlwiK24rXCJcXFxcLil7M31cIituO2NvbnN0IG89XCJbXFxcXGRBLUZhLWZdezEsNH1cIixhPVwiKD86XCIrbytcIjpcIitvK1wifFwiK2UuaXB2NGFkZHJlc3MrXCIpXCIsaT1cIig/OlwiK28rXCI6KXs2fVwiK2EsbD1cIjo6KD86XCIrbytcIjopezV9XCIrYSxjPVwiKD86XCIrbytcIik/OjooPzpcIitvK1wiOil7NH1cIithLHU9XCIoPzooPzpcIitvK1wiOil7MCwxfVwiK28rXCIpPzo6KD86XCIrbytcIjopezN9XCIrYSxmPVwiKD86KD86XCIrbytcIjopezAsMn1cIitvK1wiKT86Oig/OlwiK28rXCI6KXsyfVwiK2EsbT1cIig/Oig/OlwiK28rXCI6KXswLDN9XCIrbytcIik/OjpcIitvK1wiOlwiK2EsaD1cIig/Oig/OlwiK28rXCI6KXswLDR9XCIrbytcIik/OjpcIithO2UuaXB2NENpZHI9XCIoPzpcXFxcZHxbMS0yXVxcXFxkfDNbMC0yXSlcIixlLmlwdjZDaWRyPVwiKD86MHswLDJ9XFxcXGR8MD9bMS05XVxcXFxkfDFbMDFdXFxcXGR8MTJbMC04XSlcIixlLmlwdjZhZGRyZXNzPVwiKD86XCIraStcInxcIitsK1wifFwiK2MrXCJ8XCIrdStcInxcIitmK1wifFwiK20rXCJ8XCIraCtcInwoPzooPzpbXFxcXGRBLUZhLWZdezEsNH06KXswLDV9W1xcXFxkQS1GYS1mXXsxLDR9KT86OltcXFxcZEEtRmEtZl17MSw0fXwoPzooPzpbXFxcXGRBLUZhLWZdezEsNH06KXswLDZ9W1xcXFxkQS1GYS1mXXsxLDR9KT86OilcIixlLmlwdkZ1dHVyZT1cInZbXFxcXGRBLUZhLWZdK1xcXFwuW1xcXFx3LVxcXFwuflwiK3QrXCI6XStcIixlLnNjaGVtZT1cIlthLXpBLVpdW2EtekEtWlxcXFxkKy1cXFxcLl0qXCIsZS5zY2hlbWVSZWdleD1uZXcgUmVnRXhwKGUuc2NoZW1lKTtjb25zdCBkPVwiW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZlwiK3QrXCI6XSpcIixwPVwiKD86XCIrKFwiXFxcXFsoPzpcIitlLmlwdjZhZGRyZXNzK1wifFwiK2UuaXB2RnV0dXJlK1wiKVxcXFxdXCIpK1wifFwiK2UuaXB2NGFkZHJlc3MrXCJ8W1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz1dezEsMjU1fSlcIixnPVwiKD86XCIrZCtcIkApP1wiK3ArXCIoPzo6XFxcXGQqKT9cIix5PVwiKD86XCIrZCtcIkApPyhcIitwK1wiKSg/OjpcXFxcZCopP1wiLGI9cytcIipcIix2PXMrXCIrXCIsXz1cIig/OlxcXFwvXCIrYitcIikqXCIsdz1cIlxcXFwvKD86XCIrditfK1wiKT9cIiwkPXYrXyx4PVwiW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz1AXStcIitfO3JldHVybiBlLmhpZXJQYXJ0PVwiKD86KD86XFxcXC9cXFxcL1wiK2crXytcIil8XCIrdytcInxcIiskK1wifCg/OlxcXFwvXFxcXC9cXFxcL1tcXFxcdy1cXFxcLn4lXFxcXGRBLUZhLWYhXFxcXCQmJ1xcXFwoXFxcXClcXFxcKlxcXFwrLDs9OkBdKig/OlxcXFwvW1xcXFx3LVxcXFwufiVcXFxcZEEtRmEtZiFcXFxcJCYnXFxcXChcXFxcKVxcXFwqXFxcXCssOz06QF0qKSopKVwiLGUuaGllclBhcnRDYXB0dXJlPVwiKD86KD86XFxcXC9cXFxcL1wiK3krXytcIil8XCIrdytcInxcIiskK1wiKVwiLGUucmVsYXRpdmVSZWY9XCIoPzooPzpcXFxcL1xcXFwvXCIrZytfK1wiKXxcIit3K1wifFwiK3grXCJ8KVwiLGUucmVsYXRpdmVSZWZDYXB0dXJlPVwiKD86KD86XFxcXC9cXFxcL1wiK3krXytcIil8XCIrdytcInxcIit4K1wifClcIixlLnF1ZXJ5PVwiW1wiK3IrXCJcXFxcL1xcXFw/XSooPz0jfCQpXCIsZS5xdWVyeVdpdGhTcXVhcmVCcmFja2V0cz1cIltcIityK1wiXFxcXFtcXFxcXVxcXFwvXFxcXD9dKig/PSN8JClcIixlLmZyYWdtZW50PVwiW1wiK3IrXCJcXFxcL1xcXFw/XSpcIixlfX07by5yZmMzOTg2PW8uZ2VuZXJhdGUoKSx0LmlwPXt2NENpZHI6by5yZmMzOTg2LmlwdjRDaWRyLHY2Q2lkcjpvLnJmYzM5ODYuaXB2NkNpZHIsaXB2NDpvLnJmYzM5ODYuaXB2NGFkZHJlc3MsaXB2NjpvLnJmYzM5ODYuaXB2NmFkZHJlc3MsaXB2ZnV0dXJlOm8ucmZjMzk4Ni5pcHZGdXR1cmV9LG8uY3JlYXRlUmVnZXg9ZnVuY3Rpb24oZSl7Y29uc3QgdD1vLnJmYzM5ODYscj1cIig/OlxcXFw/XCIrKGUuYWxsb3dRdWVyeVNxdWFyZUJyYWNrZXRzP3QucXVlcnlXaXRoU3F1YXJlQnJhY2tldHM6dC5xdWVyeSkrXCIpPyg/OiNcIit0LmZyYWdtZW50K1wiKT9cIixhPWUuZG9tYWluP3QucmVsYXRpdmVSZWZDYXB0dXJlOnQucmVsYXRpdmVSZWY7aWYoZS5yZWxhdGl2ZU9ubHkpcmV0dXJuIG8ud3JhcChhK3IpO2xldCBpPVwiXCI7aWYoZS5zY2hlbWUpe3MoZS5zY2hlbWUgaW5zdGFuY2VvZiBSZWdFeHB8fFwic3RyaW5nXCI9PXR5cGVvZiBlLnNjaGVtZXx8QXJyYXkuaXNBcnJheShlLnNjaGVtZSksXCJzY2hlbWUgbXVzdCBiZSBhIFJlZ0V4cCwgU3RyaW5nLCBvciBBcnJheVwiKTtjb25zdCByPVtdLmNvbmNhdChlLnNjaGVtZSk7cyhyLmxlbmd0aD49MSxcInNjaGVtZSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBzY2hlbWUgc3BlY2lmaWVkXCIpO2NvbnN0IG89W107Zm9yKGxldCBlPTA7ZTxyLmxlbmd0aDsrK2Upe2NvbnN0IGE9cltlXTtzKGEgaW5zdGFuY2VvZiBSZWdFeHB8fFwic3RyaW5nXCI9PXR5cGVvZiBhLFwic2NoZW1lIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIFJlZ0V4cCBvciBTdHJpbmdcIiksYSBpbnN0YW5jZW9mIFJlZ0V4cD9vLnB1c2goYS5zb3VyY2UudG9TdHJpbmcoKSk6KHModC5zY2hlbWVSZWdleC50ZXN0KGEpLFwic2NoZW1lIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIHZhbGlkIHNjaGVtZVwiKSxvLnB1c2gobihhKSkpfWk9by5qb2luKFwifFwiKX1jb25zdCBsPVwiKD86XCIrKGk/XCIoPzpcIitpK1wiKVwiOnQuc2NoZW1lKStcIjpcIisoZS5kb21haW4/dC5oaWVyUGFydENhcHR1cmU6dC5oaWVyUGFydCkrXCIpXCIsYz1lLmFsbG93UmVsYXRpdmU/XCIoPzpcIitsK1wifFwiK2ErXCIpXCI6bDtyZXR1cm4gby53cmFwKGMrcixpKX0sby53cmFwPWZ1bmN0aW9uKGUsdCl7cmV0dXJue3JhdzplPVwiKD89LikoPyFodHRwcz86LyQpXCIuY29uY2F0KGUpLHJlZ2V4Om5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGUsXCIkXCIpKSxzY2hlbWU6dH19LG8udXJpUmVnZXg9by5jcmVhdGVSZWdleCh7fSksdC5yZWdleD1mdW5jdGlvbihlPXt9KXtyZXR1cm4gZS5zY2hlbWV8fGUuYWxsb3dSZWxhdGl2ZXx8ZS5yZWxhdGl2ZU9ubHl8fGUuYWxsb3dRdWVyeVNxdWFyZUJyYWNrZXRzfHxlLmRvbWFpbj9vLmNyZWF0ZVJlZ2V4KGUpOm8udXJpUmVnZXh9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1tcXF5cXCRcXC5cXCpcXCtcXC1cXD9cXD1cXCFcXDpcXHxcXFxcXFwvXFwoXFwpXFxbXFxdXFx7XFx9XFwsXS9nLFwiXFxcXCQmXCIpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbiguLi5lKXt0cnl7cmV0dXJuIEpTT04uc3RyaW5naWZ5LmFwcGx5KG51bGwsZSl9Y2F0Y2goZSl7cmV0dXJuXCJbQ2Fubm90IGRpc3BsYXkgb2JqZWN0OiBcIitlLm1lc3NhZ2UrXCJdXCJ9fX0sZnVuY3Rpb24oZSl7ZS5leHBvcnRzPUpTT04ucGFyc2UoJ3tcInZlcnNpb25cIjpcIjE3LjEuMVwifScpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz17fTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuXCJcIjtsZXQgdD1cIlwiO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWUuY2hhckNvZGVBdChyKTtzLmlzU2FmZShuKT90Kz1lW3JdOnQrPXMuZXNjYXBlSHRtbENoYXIobil9cmV0dXJuIHR9LHMuZXNjYXBlSHRtbENoYXI9ZnVuY3Rpb24oZSl7Y29uc3QgdD1zLm5hbWVkSHRtbFtlXTtpZih2b2lkIDAhPT10KXJldHVybiB0O2lmKGU+PTI1NilyZXR1cm5cIiYjXCIrZStcIjtcIjtjb25zdCByPWUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsXCIwXCIpO3JldHVyblwiJiN4XCIuY29uY2F0KHIsXCI7XCIpfSxzLmlzU2FmZT1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09cy5zYWZlQ2hhckNvZGVzW2VdfSxzLm5hbWVkSHRtbD17Mzg6XCImYW1wO1wiLDYwOlwiJmx0O1wiLDYyOlwiJmd0O1wiLDM0OlwiJnF1b3Q7XCIsMTYwOlwiJm5ic3A7XCIsMTYyOlwiJmNlbnQ7XCIsMTYzOlwiJnBvdW5kO1wiLDE2NDpcIiZjdXJyZW47XCIsMTY5OlwiJmNvcHk7XCIsMTc0OlwiJnJlZztcIn0scy5zYWZlQ2hhckNvZGVzPWZ1bmN0aW9uKCl7Y29uc3QgZT17fTtmb3IobGV0IHQ9MzI7dDwxMjM7Kyt0KSh0Pj05N3x8dD49NjUmJnQ8PTkwfHx0Pj00OCYmdDw9NTd8fDMyPT09dHx8NDY9PT10fHw0ND09PXR8fDQ1PT09dHx8NTg9PT10fHw5NT09PXQpJiYoZVt0XT1udWxsKTtyZXR1cm4gZX0oKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9e29wZXJhdG9yczpbXCIhXCIsXCJeXCIsXCIqXCIsXCIvXCIsXCIlXCIsXCIrXCIsXCItXCIsXCI8XCIsXCI8PVwiLFwiPlwiLFwiPj1cIixcIj09XCIsXCIhPVwiLFwiJiZcIixcInx8XCIsXCI/P1wiXSxvcGVyYXRvckNoYXJhY3RlcnM6W1wiIVwiLFwiXlwiLFwiKlwiLFwiL1wiLFwiJVwiLFwiK1wiLFwiLVwiLFwiPFwiLFwiPVwiLFwiPlwiLFwiJlwiLFwifFwiLFwiP1wiXSxvcGVyYXRvcnNPcmRlcjpbW1wiXlwiXSxbXCIqXCIsXCIvXCIsXCIlXCJdLFtcIitcIixcIi1cIl0sW1wiPFwiLFwiPD1cIixcIj5cIixcIj49XCJdLFtcIj09XCIsXCIhPVwiXSxbXCImJlwiXSxbXCJ8fFwiLFwiPz9cIl1dLG9wZXJhdG9yc1ByZWZpeDpbXCIhXCIsXCJuXCJdLGxpdGVyYWxzOnsnXCInOidcIicsXCJgXCI6XCJgXCIsXCInXCI6XCInXCIsXCJbXCI6XCJdXCJ9LG51bWJlclJ4Oi9eKD86WzAtOV0qXFwuP1swLTldKil7MX0kLyx0b2tlblJ4Oi9eW1xcd1xcJFxcI1xcLlxcQFxcOlxce1xcfV0rJC8sc3ltYm9sOlN5bWJvbChcImZvcm11bGFcIiksc2V0dGluZ3M6U3ltYm9sKFwic2V0dGluZ3NcIil9O3QuUGFyc2VyPWNsYXNze2NvbnN0cnVjdG9yKGUsdD17fSl7aWYoIXRbcy5zZXR0aW5nc10mJnQuY29uc3RhbnRzKWZvcihjb25zdCBlIGluIHQuY29uc3RhbnRzKXtjb25zdCByPXQuY29uc3RhbnRzW2VdO2lmKG51bGwhPT1yJiYhW1wiYm9vbGVhblwiLFwibnVtYmVyXCIsXCJzdHJpbmdcIl0uaW5jbHVkZXModHlwZW9mIHIpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29uc3RhbnQgXCIuY29uY2F0KGUsXCIgY29udGFpbnMgaW52YWxpZCBcIikuY29uY2F0KHR5cGVvZiByLFwiIHZhbHVlIHR5cGVcIikpfXRoaXMuc2V0dGluZ3M9dFtzLnNldHRpbmdzXT90Ok9iamVjdC5hc3NpZ24oe1tzLnNldHRpbmdzXTohMCxjb25zdGFudHM6e30sZnVuY3Rpb25zOnt9fSx0KSx0aGlzLnNpbmdsZT1udWxsLHRoaXMuX3BhcnRzPW51bGwsdGhpcy5fcGFyc2UoZSl9X3BhcnNlKGUpe2xldCByPVtdLG49XCJcIixvPTAsYT0hMTtjb25zdCBpPWU9PntpZihvKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzXCIpO2NvbnN0IGk9ci5sZW5ndGg/cltyLmxlbmd0aC0xXTpudWxsO2lmKGF8fG58fGUpe2lmKGkmJlwicmVmZXJlbmNlXCI9PT1pLnR5cGUmJlwiKVwiPT09ZSlyZXR1cm4gaS50eXBlPVwiZnVuY3Rpb25cIixpLnZhbHVlPXRoaXMuX3N1YkZvcm11bGEobixpLnZhbHVlKSx2b2lkKG49XCJcIik7aWYoXCIpXCI9PT1lKXtjb25zdCBlPW5ldyB0LlBhcnNlcihuLHRoaXMuc2V0dGluZ3MpO3IucHVzaCh7dHlwZTpcInNlZ21lbnRcIix2YWx1ZTplfSl9ZWxzZSBpZihhKXtpZihcIl1cIj09PWEpcmV0dXJuIHIucHVzaCh7dHlwZTpcInJlZmVyZW5jZVwiLHZhbHVlOm59KSx2b2lkKG49XCJcIik7ci5wdXNoKHt0eXBlOlwibGl0ZXJhbFwiLHZhbHVlOm59KX1lbHNlIGlmKHMub3BlcmF0b3JDaGFyYWN0ZXJzLmluY2x1ZGVzKG4pKWkmJlwib3BlcmF0b3JcIj09PWkudHlwZSYmcy5vcGVyYXRvcnMuaW5jbHVkZXMoaS52YWx1ZStuKT9pLnZhbHVlKz1uOnIucHVzaCh7dHlwZTpcIm9wZXJhdG9yXCIsdmFsdWU6bn0pO2Vsc2UgaWYobi5tYXRjaChzLm51bWJlclJ4KSlyLnB1c2goe3R5cGU6XCJjb25zdGFudFwiLHZhbHVlOnBhcnNlRmxvYXQobil9KTtlbHNlIGlmKHZvaWQgMCE9PXRoaXMuc2V0dGluZ3MuY29uc3RhbnRzW25dKXIucHVzaCh7dHlwZTpcImNvbnN0YW50XCIsdmFsdWU6dGhpcy5zZXR0aW5ncy5jb25zdGFudHNbbl19KTtlbHNle2lmKCFuLm1hdGNoKHMudG9rZW5SeCkpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBpbnZhbGlkIHRva2VuOiBcIi5jb25jYXQobikpO3IucHVzaCh7dHlwZTpcInJlZmVyZW5jZVwiLHZhbHVlOm59KX1uPVwiXCJ9fTtmb3IoY29uc3QgdCBvZiBlKWE/dD09PWE/KGkoKSxhPSExKTpuKz10Om8/XCIoXCI9PT10PyhuKz10LCsrbyk6XCIpXCI9PT10PygtLW8sbz9uKz10OmkodCkpOm4rPXQ6dCBpbiBzLmxpdGVyYWxzP2E9cy5saXRlcmFsc1t0XTpcIihcIj09PXQ/KGkoKSwrK28pOnMub3BlcmF0b3JDaGFyYWN0ZXJzLmluY2x1ZGVzKHQpPyhpKCksbj10LGkoKSk6XCIgXCIhPT10P24rPXQ6aSgpO2koKSxyPXIubWFwKChlLHQpPT5cIm9wZXJhdG9yXCIhPT1lLnR5cGV8fFwiLVwiIT09ZS52YWx1ZXx8dCYmXCJvcGVyYXRvclwiIT09clt0LTFdLnR5cGU/ZTp7dHlwZTpcIm9wZXJhdG9yXCIsdmFsdWU6XCJuXCJ9KTtsZXQgbD0hMTtmb3IoY29uc3QgZSBvZiByKXtpZihcIm9wZXJhdG9yXCI9PT1lLnR5cGUpe2lmKHMub3BlcmF0b3JzUHJlZml4LmluY2x1ZGVzKGUudmFsdWUpKWNvbnRpbnVlO2lmKCFsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgYW4gb3BlcmF0b3IgaW4gaW52YWxpZCBwb3NpdGlvblwiKTtpZighcy5vcGVyYXRvcnMuaW5jbHVkZXMoZS52YWx1ZSkpdGhyb3cgbmV3IEVycm9yKFwiRm9ybXVsYSBjb250YWlucyBhbiB1bmtub3duIG9wZXJhdG9yIFwiLmNvbmNhdChlLnZhbHVlKSl9ZWxzZSBpZihsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgbWlzc2luZyBleHBlY3RlZCBvcGVyYXRvclwiKTtsPSFsfWlmKCFsKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCB0cmFpbGluZyBvcGVyYXRvclwiKTsxPT09ci5sZW5ndGgmJltcInJlZmVyZW5jZVwiLFwibGl0ZXJhbFwiLFwiY29uc3RhbnRcIl0uaW5jbHVkZXMoclswXS50eXBlKSYmKHRoaXMuc2luZ2xlPXt0eXBlOlwicmVmZXJlbmNlXCI9PT1yWzBdLnR5cGU/XCJyZWZlcmVuY2VcIjpcInZhbHVlXCIsdmFsdWU6clswXS52YWx1ZX0pLHRoaXMuX3BhcnRzPXIubWFwKGU9PntpZihcIm9wZXJhdG9yXCI9PT1lLnR5cGUpcmV0dXJuIHMub3BlcmF0b3JzUHJlZml4LmluY2x1ZGVzKGUudmFsdWUpP2U6ZS52YWx1ZTtpZihcInJlZmVyZW5jZVwiIT09ZS50eXBlKXJldHVybiBlLnZhbHVlO2lmKHRoaXMuc2V0dGluZ3MudG9rZW5SeCYmIXRoaXMuc2V0dGluZ3MudG9rZW5SeC50ZXN0KGUudmFsdWUpKXRocm93IG5ldyBFcnJvcihcIkZvcm11bGEgY29udGFpbnMgaW52YWxpZCByZWZlcmVuY2UgXCIuY29uY2F0KGUudmFsdWUpKTtyZXR1cm4gdGhpcy5zZXR0aW5ncy5yZWZlcmVuY2U/dGhpcy5zZXR0aW5ncy5yZWZlcmVuY2UoZS52YWx1ZSk6cy5yZWZlcmVuY2UoZS52YWx1ZSl9KX1fc3ViRm9ybXVsYShlLHIpe2NvbnN0IG49dGhpcy5zZXR0aW5ncy5mdW5jdGlvbnNbcl07aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIHVua25vd24gZnVuY3Rpb24gXCIuY29uY2F0KHIpKTtsZXQgbz1bXTtpZihlKXtsZXQgdD1cIlwiLG49MCxhPSExO2NvbnN0IGk9KCk9PntpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJGb3JtdWxhIGNvbnRhaW5zIGZ1bmN0aW9uIFwiLmNvbmNhdChyLFwiIHdpdGggaW52YWxpZCBhcmd1bWVudHMgXCIpLmNvbmNhdChlKSk7by5wdXNoKHQpLHQ9XCJcIn07Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IG89ZVtyXTthPyh0Kz1vLG89PT1hJiYoYT0hMSkpOm8gaW4gcy5saXRlcmFscyYmIW4/KHQrPW8sYT1zLmxpdGVyYWxzW29dKTpcIixcIiE9PW98fG4/KHQrPW8sXCIoXCI9PT1vPysrbjpcIilcIj09PW8mJi0tbik6aSgpfWkoKX1yZXR1cm4gbz1vLm1hcChlPT5uZXcgdC5QYXJzZXIoZSx0aGlzLnNldHRpbmdzKSksZnVuY3Rpb24oZSl7Y29uc3QgdD1bXTtmb3IoY29uc3QgciBvZiBvKXQucHVzaChyLmV2YWx1YXRlKGUpKTtyZXR1cm4gbi5jYWxsKGUsLi4udCl9fWV2YWx1YXRlKGUpe2NvbnN0IHQ9dGhpcy5fcGFydHMuc2xpY2UoKTtmb3IobGV0IHI9dC5sZW5ndGgtMjtyPj0wOy0tcil7Y29uc3Qgbj10W3JdO2lmKG4mJlwib3BlcmF0b3JcIj09PW4udHlwZSl7Y29uc3Qgbz10W3IrMV07dC5zcGxpY2UocisxLDEpO2NvbnN0IGE9cy5ldmFsdWF0ZShvLGUpO3Rbcl09cy5zaW5nbGUobi52YWx1ZSxhKX19cmV0dXJuIHMub3BlcmF0b3JzT3JkZXIuZm9yRWFjaChyPT57Zm9yKGxldCBuPTE7bjx0Lmxlbmd0aC0xOylpZihyLmluY2x1ZGVzKHRbbl0pKXtjb25zdCByPXRbbl0sbz1zLmV2YWx1YXRlKHRbbi0xXSxlKSxhPXMuZXZhbHVhdGUodFtuKzFdLGUpO3Quc3BsaWNlKG4sMik7Y29uc3QgaT1zLmNhbGN1bGF0ZShyLG8sYSk7dFtuLTFdPTA9PT1pPzA6aX1lbHNlIG4rPTJ9KSxzLmV2YWx1YXRlKHRbMF0sZSl9fSx0LlBhcnNlci5wcm90b3R5cGVbcy5zeW1ib2xdPSEwLHMucmVmZXJlbmNlPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdCYmdm9pZCAwIT09dFtlXT90W2VdOm51bGx9fSxzLmV2YWx1YXRlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PT1lP251bGw6XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKHQpOmVbcy5zeW1ib2xdP2UuZXZhbHVhdGUodCk6ZX0scy5zaW5nbGU9ZnVuY3Rpb24oZSx0KXtpZihcIiFcIj09PWUpcmV0dXJuIXQ7Y29uc3Qgcj0tdDtyZXR1cm4gMD09PXI/MDpyfSxzLmNhbGN1bGF0ZT1mdW5jdGlvbihlLHQscil7aWYoXCI/P1wiPT09ZSlyZXR1cm4gcy5leGlzdHModCk/dDpyO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0fHxcInN0cmluZ1wiPT10eXBlb2Ygcil7aWYoXCIrXCI9PT1lKXJldHVybih0PXMuZXhpc3RzKHQpP3Q6XCJcIikrKHI9cy5leGlzdHMocik/cjpcIlwiKX1lbHNlIHN3aXRjaChlKXtjYXNlXCJeXCI6cmV0dXJuIE1hdGgucG93KHQscik7Y2FzZVwiKlwiOnJldHVybiB0KnI7Y2FzZVwiL1wiOnJldHVybiB0L3I7Y2FzZVwiJVwiOnJldHVybiB0JXI7Y2FzZVwiK1wiOnJldHVybiB0K3I7Y2FzZVwiLVwiOnJldHVybiB0LXJ9c3dpdGNoKGUpe2Nhc2VcIjxcIjpyZXR1cm4gdDxyO2Nhc2VcIjw9XCI6cmV0dXJuIHQ8PXI7Y2FzZVwiPlwiOnJldHVybiB0PnI7Y2FzZVwiPj1cIjpyZXR1cm4gdD49cjtjYXNlXCI9PVwiOnJldHVybiB0PT09cjtjYXNlXCIhPVwiOnJldHVybiB0IT09cjtjYXNlXCImJlwiOnJldHVybiB0JiZyO2Nhc2VcInx8XCI6cmV0dXJuIHR8fHJ9cmV0dXJuIG51bGx9LHMuZXhpc3RzPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lfX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXIoOCksaT1yKDQpLGw9cig1KSxjPXt9O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImFsdGVybmF0aXZlc1wiLGZsYWdzOnttYXRjaDp7ZGVmYXVsdDpcImFueVwifX0sdGVybXM6e21hdGNoZXM6e2luaXQ6W10scmVnaXN0ZXI6bC50b1NpYmxpbmd9fSxhcmdzOihlLC4uLnQpPT4xPT09dC5sZW5ndGgmJkFycmF5LmlzQXJyYXkodFswXSk/ZS50cnkoLi4udFswXSk6ZS50cnkoLi4udCksdmFsaWRhdGUoZSx0KXtjb25zdHtzY2hlbWE6cixlcnJvcjpzLHN0YXRlOm4scHJlZnM6b309dDtpZihyLl9mbGFncy5tYXRjaCl7bGV0IHQsYT0wO2ZvcihsZXQgcz0wO3M8ci4kX3Rlcm1zLm1hdGNoZXMubGVuZ3RoOysrcyl7Y29uc3QgaT1yLiRfdGVybXMubWF0Y2hlc1tzXSxsPW4ubmVzdChpLnNjaGVtYSxcIm1hdGNoLlwiLmNvbmNhdChzKSk7bC5zbmFwc2hvdCgpO2NvbnN0IGM9aS5zY2hlbWEuJF92YWxpZGF0ZShlLGwsbyk7Yy5lcnJvcnM/bC5yZXN0b3JlKCk6KCsrYSx0PWMudmFsdWUpfXJldHVybiBhP1wib25lXCI9PT1yLl9mbGFncy5tYXRjaD8xPT09YT97dmFsdWU6dH06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLm9uZVwiKX06YT09PXIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aD97dmFsdWU6ZX06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLmFsbFwiKX06e2Vycm9yczpzKFwiYWx0ZXJuYXRpdmVzLmFueVwiKX19Y29uc3QgYT1bXTtmb3IobGV0IHQ9MDt0PHIuJF90ZXJtcy5tYXRjaGVzLmxlbmd0aDsrK3Qpe2NvbnN0IHM9ci4kX3Rlcm1zLm1hdGNoZXNbdF07aWYocy5zY2hlbWEpe2NvbnN0IHI9bi5uZXN0KHMuc2NoZW1hLFwibWF0Y2guXCIuY29uY2F0KHQpKTtyLnNuYXBzaG90KCk7Y29uc3QgaT1zLnNjaGVtYS4kX3ZhbGlkYXRlKGUscixvKTtpZighaS5lcnJvcnMpcmV0dXJuIGk7ci5yZXN0b3JlKCksYS5wdXNoKHtzY2hlbWE6cy5zY2hlbWEscmVwb3J0czppLmVycm9yc30pO2NvbnRpbnVlfWNvbnN0IGk9cy5yZWY/cy5yZWYucmVzb2x2ZShlLG4sbyk6ZSxsPXMuaXM/W3NdOnMuc3dpdGNoO2ZvcihsZXQgcj0wO3I8bC5sZW5ndGg7KytyKXtjb25zdCBhPWxbcl0se2lzOmMsdGhlbjp1LG90aGVyd2lzZTpmfT1hLG09XCJtYXRjaC5cIi5jb25jYXQodCkuY29uY2F0KHMuc3dpdGNoP1wiLlwiK3I6XCJcIik7aWYoYy4kX21hdGNoKGksbi5uZXN0KGMsXCJcIi5jb25jYXQobSxcIi5pc1wiKSksbykpe2lmKHUpcmV0dXJuIHUuJF92YWxpZGF0ZShlLG4ubmVzdCh1LFwiXCIuY29uY2F0KG0sXCIudGhlblwiKSksbyl9ZWxzZSBpZihmKXJldHVybiBmLiRfdmFsaWRhdGUoZSxuLm5lc3QoZixcIlwiLmNvbmNhdChtLFwiLm90aGVyd2lzZVwiKSksbyl9fXJldHVybiBjLmVycm9ycyhhLHQpfSxydWxlczp7Y29uZGl0aW9uYWw6e21ldGhvZChlLHQpe3MoIXRoaXMuX2ZsYWdzLl9lbmRlZFN3aXRjaCxcIlVucmVhY2hhYmxlIGNvbmRpdGlvblwiKSxzKCF0aGlzLl9mbGFncy5tYXRjaCxcIkNhbm5vdCBjb21iaW5lIG1hdGNoIG1vZGVcIix0aGlzLl9mbGFncy5tYXRjaCxcIndpdGggY29uZGl0aW9uYWwgcnVsZVwiKSxzKHZvaWQgMD09PXQuYnJlYWssXCJDYW5ub3QgdXNlIGJyZWFrIG9wdGlvbiB3aXRoIGFsdGVybmF0aXZlcyBjb25kaXRpb25hbFwiKTtjb25zdCByPXRoaXMuY2xvbmUoKSxuPWEud2hlbihyLGUsdCksbz1uLmlzP1tuXTpuLnN3aXRjaDtmb3IoY29uc3QgZSBvZiBvKWlmKGUudGhlbiYmZS5vdGhlcndpc2Upe3IuJF9zZXRGbGFnKFwiX2VuZGVkU3dpdGNoXCIsITAse2Nsb25lOiExfSk7YnJlYWt9cmV0dXJuIHIuJF90ZXJtcy5tYXRjaGVzLnB1c2gobiksci4kX211dGF0ZVJlYnVpbGQoKX19LG1hdGNoOnttZXRob2QoZSl7aWYocyhbXCJhbnlcIixcIm9uZVwiLFwiYWxsXCJdLmluY2x1ZGVzKGUpLFwiSW52YWxpZCBhbHRlcm5hdGl2ZXMgbWF0Y2ggbW9kZVwiLGUpLFwiYW55XCIhPT1lKWZvcihjb25zdCB0IG9mIHRoaXMuJF90ZXJtcy5tYXRjaGVzKXModC5zY2hlbWEsXCJDYW5ub3QgY29tYmluZSBtYXRjaCBtb2RlXCIsZSxcIndpdGggY29uZGl0aW9uYWwgcnVsZXNcIik7cmV0dXJuIHRoaXMuJF9zZXRGbGFnKFwibWF0Y2hcIixlKX19LHRyeTp7bWV0aG9kKC4uLmUpe3MoZS5sZW5ndGgsXCJNaXNzaW5nIGFsdGVybmF0aXZlIHNjaGVtYXNcIiksby52ZXJpZnlGbGF0KGUsXCJ0cnlcIikscyghdGhpcy5fZmxhZ3MuX2VuZGVkU3dpdGNoLFwiVW5yZWFjaGFibGUgY29uZGl0aW9uXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO2Zvcihjb25zdCByIG9mIGUpdC4kX3Rlcm1zLm1hdGNoZXMucHVzaCh7c2NoZW1hOnQuJF9jb21waWxlKHIpfSk7cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9fX0sb3ZlcnJpZGVzOntsYWJlbChlKXtyZXR1cm4gdGhpcy4kX3N1cGVyLmxhYmVsKGUpLiRfbW9kaWZ5KHtlYWNoOih0LHIpPT5cImlzXCIhPT1yLnBhdGhbMF0/dC5sYWJlbChlKTp2b2lkIDAscmVmOiExfSl9fSxyZWJ1aWxkKGUpe2UuJF9tb2RpZnkoe2VhY2g6dD0+e28uaXNTY2hlbWEodCkmJlwiYXJyYXlcIj09PXQudHlwZSYmZS4kX3NldEZsYWcoXCJfYXJyYXlJdGVtc1wiLCEwLHtjbG9uZTohMX0pfX0pfSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtpZih0Lm1hdGNoZXMpZm9yKGNvbnN0IHIgb2YgdC5tYXRjaGVzKXtjb25zdHtzY2hlbWE6dCxyZWY6cyxpczpuLG5vdDpvLHRoZW46YSxvdGhlcndpc2U6aX09cjtlPXQ/ZS50cnkodCk6cz9lLmNvbmRpdGlvbmFsKHMse2lzOm4sdGhlbjphLG5vdDpvLG90aGVyd2lzZTppLHN3aXRjaDpyLnN3aXRjaH0pOmUuY29uZGl0aW9uYWwobix7dGhlbjphLG90aGVyd2lzZTppfSl9cmV0dXJuIGV9fSxtZXNzYWdlczp7XCJhbHRlcm5hdGl2ZXMuYWxsXCI6XCJ7eyNsYWJlbH19IGRvZXMgbm90IG1hdGNoIGFsbCBvZiB0aGUgcmVxdWlyZWQgdHlwZXNcIixcImFsdGVybmF0aXZlcy5hbnlcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMubWF0Y2hcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhbHRlcm5hdGl2ZXMub25lXCI6XCJ7eyNsYWJlbH19IG1hdGNoZXMgbW9yZSB0aGFuIG9uZSBhbGxvd2VkIHR5cGVcIixcImFsdGVybmF0aXZlcy50eXBlc1wiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9uZSBvZiB7eyN0eXBlc319XCJ9fSksYy5lcnJvcnM9ZnVuY3Rpb24oZSx7ZXJyb3I6dCxzdGF0ZTpyfSl7aWYoIWUubGVuZ3RoKXJldHVybntlcnJvcnM6dChcImFsdGVybmF0aXZlcy5hbnlcIil9O2lmKDE9PT1lLmxlbmd0aClyZXR1cm57ZXJyb3JzOmVbMF0ucmVwb3J0c307Y29uc3Qgcz1uZXcgU2V0LG49W107Zm9yKGNvbnN0e3JlcG9ydHM6byxzY2hlbWE6YX1vZiBlKXtpZihvLmxlbmd0aD4xKXJldHVybiBjLnVubWF0Y2hlZChlLHQpO2NvbnN0IGw9b1swXTtpZihsIGluc3RhbmNlb2YgaS5SZXBvcnQ9PSExKXJldHVybiBjLnVubWF0Y2hlZChlLHQpO2lmKGwuc3RhdGUucGF0aC5sZW5ndGghPT1yLnBhdGgubGVuZ3RoKXtuLnB1c2goe3R5cGU6YS50eXBlLHJlcG9ydDpsfSk7Y29udGludWV9aWYoXCJhbnkub25seVwiPT09bC5jb2RlKXtmb3IoY29uc3QgZSBvZiBsLmxvY2FsLnZhbGlkcylzLmFkZChlKTtjb250aW51ZX1jb25zdFt1LGZdPWwuY29kZS5zcGxpdChcIi5cIik7XCJiYXNlXCI9PT1mP3MuYWRkKHUpOm4ucHVzaCh7dHlwZTphLnR5cGUscmVwb3J0Omx9KX1yZXR1cm4gbi5sZW5ndGg/MT09PW4ubGVuZ3RoP3tlcnJvcnM6blswXS5yZXBvcnR9OmMudW5tYXRjaGVkKGUsdCk6e2Vycm9yczp0KFwiYWx0ZXJuYXRpdmVzLnR5cGVzXCIse3R5cGVzOlsuLi5zXX0pfX0sYy51bm1hdGNoZWQ9ZnVuY3Rpb24oZSx0KXtjb25zdCByPVtdO2Zvcihjb25zdCB0IG9mIGUpci5wdXNoKC4uLnQucmVwb3J0cyk7cmV0dXJue2Vycm9yczp0KFwiYWx0ZXJuYXRpdmVzLm1hdGNoXCIsaS5kZXRhaWxzKHIse292ZXJyaWRlOiExfSkpfX19LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigxMCksYT1yKDIwKSxpPXIoMTUpLGw9cigxKSxjPXIoOCksdT1yKDQpLGY9cigxNyksbT1yKDE4KSxoPXIoOSksZD1yKDM1KSxwPXIoNSksZz1yKDE5KSx5PXIoMzYpLGI9cigyMSksdj17QmFzZTpjbGFzc3tjb25zdHJ1Y3RvcihlKXt0aGlzLnR5cGU9ZSx0aGlzLiRfcm9vdD1udWxsLHRoaXMuX2RlZmluaXRpb249e30sdGhpcy5faWRzPW5ldyBkLklkcyx0aGlzLl9wcmVmZXJlbmNlcz1udWxsLHRoaXMuX3JlZnM9bmV3IHAuTWFuYWdlcix0aGlzLl9jYWNoZT1udWxsLHRoaXMuX3ZhbGlkcz1udWxsLHRoaXMuX2ludmFsaWRzPW51bGwsdGhpcy5fZmxhZ3M9e30sdGhpcy5fcnVsZXM9W10sdGhpcy5fc2luZ2xlUnVsZXM9bmV3IE1hcCx0aGlzLiRfdGVybXM9e30sdGhpcy4kX3RlbXA9e3J1bGVzZXQ6bnVsbCx3aGVuczp7fX19ZGVzY3JpYmUoKXtyZXR1cm4gcyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBtLmRlc2NyaWJlLFwiTWFuaWZlc3QgZnVuY3Rpb25hbGl0eSBkaXNhYmxlZFwiKSxtLmRlc2NyaWJlKHRoaXMpfWFsbG93KC4uLmUpe3JldHVybiBsLnZlcmlmeUZsYXQoZSxcImFsbG93XCIpLHRoaXMuX3ZhbHVlcyhlLFwiX3ZhbGlkc1wiKX1hbHRlcihlKXtzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiYhQXJyYXkuaXNBcnJheShlKSxcIkludmFsaWQgdGFyZ2V0cyBhcmd1bWVudFwiKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBzZXQgYWx0ZXJhdGlvbnMgaW5zaWRlIGEgcnVsZXNldFwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMuYWx0ZXJhdGlvbnM9dC4kX3Rlcm1zLmFsdGVyYXRpb25zfHxbXTtmb3IoY29uc3QgciBpbiBlKXtjb25zdCBuPWVbcl07cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLFwiQWx0ZXJhdGlvbiBhZGp1c3RlciBmb3JcIixyLFwibXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHQuJF90ZXJtcy5hbHRlcmF0aW9ucy5wdXNoKHt0YXJnZXQ6cixhZGp1c3RlcjpufSl9cmV0dXJuIHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdH1jYXN0KGUpe3JldHVybiBzKCExPT09ZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUsXCJJbnZhbGlkIHRvIHZhbHVlXCIpLHMoITE9PT1lfHx0aGlzLl9kZWZpbml0aW9uLmNhc3RbZV0sXCJUeXBlXCIsdGhpcy50eXBlLFwiZG9lcyBub3Qgc3VwcG9ydCBjYXN0aW5nIHRvXCIsZSksdGhpcy4kX3NldEZsYWcoXCJjYXN0XCIsITE9PT1lP3ZvaWQgMDplKX1kZWZhdWx0KGUsdCl7cmV0dXJuIHRoaXMuX2RlZmF1bHQoXCJkZWZhdWx0XCIsZSx0KX1kZXNjcmlwdGlvbihlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkRlc2NyaXB0aW9uIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHRoaXMuJF9zZXRGbGFnKFwiZGVzY3JpcHRpb25cIixlKX1lbXB0eShlKXtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdm9pZCAwIT09ZSYmKGU9dC4kX2NvbXBpbGUoZSx7b3ZlcnJpZGU6ITF9KSksdC4kX3NldEZsYWcoXCJlbXB0eVwiLGUse2Nsb25lOiExfSl9ZXJyb3IoZSl7cmV0dXJuIHMoZSxcIk1pc3NpbmcgZXJyb3JcIikscyhlIGluc3RhbmNlb2YgRXJyb3J8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNdXN0IHByb3ZpZGUgYSB2YWxpZCBFcnJvciBvYmplY3Qgb3IgYSBmdW5jdGlvblwiKSx0aGlzLiRfc2V0RmxhZyhcImVycm9yXCIsZSl9ZXhhbXBsZShlLHQ9e30pe3JldHVybiBzKHZvaWQgMCE9PWUsXCJNaXNzaW5nIGV4YW1wbGVcIiksbC5hc3NlcnRPcHRpb25zKHQsW1wib3ZlcnJpZGVcIl0pLHRoaXMuX2lubmVyKFwiZXhhbXBsZXNcIixlLHtzaW5nbGU6ITAsb3ZlcnJpZGU6dC5vdmVycmlkZX0pfWV4dGVybmFsKGUsdCl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJihzKCF0LFwiQ2Fubm90IGNvbWJpbmUgb3B0aW9ucyB3aXRoIGRlc2NyaXB0aW9uXCIpLHQ9ZS5kZXNjcmlwdGlvbixlPWUubWV0aG9kKSxzKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUsXCJNZXRob2QgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpLHModm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJEZXNjcmlwdGlvbiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLl9pbm5lcihcImV4dGVybmFsc1wiLHttZXRob2Q6ZSxkZXNjcmlwdGlvbjp0fSx7c2luZ2xlOiEwfSl9ZmFpbG92ZXIoZSx0KXtyZXR1cm4gdGhpcy5fZGVmYXVsdChcImZhaWxvdmVyXCIsZSx0KX1mb3JiaWRkZW4oKXtyZXR1cm4gdGhpcy5wcmVzZW5jZShcImZvcmJpZGRlblwiKX1pZChlKXtyZXR1cm4gZT8ocyhcInN0cmluZ1wiPT10eXBlb2YgZSxcImlkIG11c3QgYmUgYSBub24tZW1wdHkgc3RyaW5nXCIpLHMoL15bXlxcLl0rJC8udGVzdChlKSxcImlkIGNhbm5vdCBjb250YWluIHBlcmlvZCBjaGFyYWN0ZXJcIiksdGhpcy4kX3NldEZsYWcoXCJpZFwiLGUpKTp0aGlzLiRfc2V0RmxhZyhcImlkXCIsdm9pZCAwKX1pbnZhbGlkKC4uLmUpe3JldHVybiB0aGlzLl92YWx1ZXMoZSxcIl9pbnZhbGlkc1wiKX1sYWJlbChlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIkxhYmVsIG5hbWUgbXVzdCBiZSBhIG5vbi1lbXB0eSBzdHJpbmdcIiksdGhpcy4kX3NldEZsYWcoXCJsYWJlbFwiLGUpfW1ldGEoZSl7cmV0dXJuIHModm9pZCAwIT09ZSxcIk1ldGEgY2Fubm90IGJlIHVuZGVmaW5lZFwiKSx0aGlzLl9pbm5lcihcIm1ldGFzXCIsZSx7c2luZ2xlOiEwfSl9bm90ZSguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyBub3Rlc1wiKTtmb3IoY29uc3QgdCBvZiBlKXModCYmXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJOb3RlcyBtdXN0IGJlIG5vbi1lbXB0eSBzdHJpbmdzXCIpO3JldHVybiB0aGlzLl9pbm5lcihcIm5vdGVzXCIsZSl9b25seShlPSEwKXtyZXR1cm4gcyhcImJvb2xlYW5cIj09dHlwZW9mIGUsXCJJbnZhbGlkIG1vZGU6XCIsZSksdGhpcy4kX3NldEZsYWcoXCJvbmx5XCIsZSl9b3B0aW9uYWwoKXtyZXR1cm4gdGhpcy5wcmVzZW5jZShcIm9wdGlvbmFsXCIpfXByZWZzKGUpe3MoZSxcIk1pc3NpbmcgcHJlZmVyZW5jZXNcIikscyh2b2lkIDA9PT1lLmNvbnRleHQsXCJDYW5ub3Qgb3ZlcnJpZGUgY29udGV4dFwiKSxzKHZvaWQgMD09PWUuZXh0ZXJuYWxzLFwiQ2Fubm90IG92ZXJyaWRlIGV4dGVybmFsc1wiKSxzKHZvaWQgMD09PWUud2FybmluZ3MsXCJDYW5ub3Qgb3ZlcnJpZGUgd2FybmluZ3NcIikscyh2b2lkIDA9PT1lLmRlYnVnLFwiQ2Fubm90IG92ZXJyaWRlIGRlYnVnXCIpLGwuY2hlY2tQcmVmZXJlbmNlcyhlKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fcHJlZmVyZW5jZXM9bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyxlKSx0fXByZXNlbmNlKGUpe3JldHVybiBzKFtcIm9wdGlvbmFsXCIsXCJyZXF1aXJlZFwiLFwiZm9yYmlkZGVuXCJdLmluY2x1ZGVzKGUpLFwiVW5rbm93biBwcmVzZW5jZSBtb2RlXCIsZSksdGhpcy4kX3NldEZsYWcoXCJwcmVzZW5jZVwiLGUpfXJhdyhlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlP1wicmF3XCI6dm9pZCAwKX1yZXN1bHQoZSl7cmV0dXJuIHMoW1wicmF3XCIsXCJzdHJpcFwiXS5pbmNsdWRlcyhlKSxcIlVua25vd24gcmVzdWx0IG1vZGVcIixlKSx0aGlzLiRfc2V0RmxhZyhcInJlc3VsdFwiLGUpfXJlcXVpcmVkKCl7cmV0dXJuIHRoaXMucHJlc2VuY2UoXCJyZXF1aXJlZFwiKX1zdHJpY3QoZSl7Y29uc3QgdD10aGlzLmNsb25lKCkscj12b2lkIDAhPT1lJiYhZTtyZXR1cm4gdC5fcHJlZmVyZW5jZXM9bC5wcmVmZXJlbmNlcyh0Ll9wcmVmZXJlbmNlcyx7Y29udmVydDpyfSksdH1zdHJpcChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZXN1bHRcIixlP1wic3RyaXBcIjp2b2lkIDApfXRhZyguLi5lKXtzKGUubGVuZ3RoLFwiTWlzc2luZyB0YWdzXCIpO2Zvcihjb25zdCB0IG9mIGUpcyh0JiZcInN0cmluZ1wiPT10eXBlb2YgdCxcIlRhZ3MgbXVzdCBiZSBub24tZW1wdHkgc3RyaW5nc1wiKTtyZXR1cm4gdGhpcy5faW5uZXIoXCJ0YWdzXCIsZSl9dW5pdChlKXtyZXR1cm4gcyhlJiZcInN0cmluZ1wiPT10eXBlb2YgZSxcIlVuaXQgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZ1wiKSx0aGlzLiRfc2V0RmxhZyhcInVuaXRcIixlKX12YWxpZCguLi5lKXtsLnZlcmlmeUZsYXQoZSxcInZhbGlkXCIpO2NvbnN0IHQ9dGhpcy5hbGxvdyguLi5lKTtyZXR1cm4gdC4kX3NldEZsYWcoXCJvbmx5XCIsISF0Ll92YWxpZHMse2Nsb25lOiExfSksdH13aGVuKGUsdCl7Y29uc3Qgcj10aGlzLmNsb25lKCk7ci4kX3Rlcm1zLndoZW5zfHwoci4kX3Rlcm1zLndoZW5zPVtdKTtjb25zdCBuPWMud2hlbihyLGUsdCk7aWYoIVtcImFueVwiLFwibGlua1wiXS5pbmNsdWRlcyhyLnR5cGUpKXtjb25zdCBlPW4uaXM/W25dOm4uc3dpdGNoO2Zvcihjb25zdCB0IG9mIGUpcyghdC50aGVufHxcImFueVwiPT09dC50aGVuLnR5cGV8fHQudGhlbi50eXBlPT09ci50eXBlLFwiQ2Fubm90IGNvbWJpbmVcIixyLnR5cGUsXCJ3aXRoXCIsdC50aGVuJiZ0LnRoZW4udHlwZSkscyghdC5vdGhlcndpc2V8fFwiYW55XCI9PT10Lm90aGVyd2lzZS50eXBlfHx0Lm90aGVyd2lzZS50eXBlPT09ci50eXBlLFwiQ2Fubm90IGNvbWJpbmVcIixyLnR5cGUsXCJ3aXRoXCIsdC5vdGhlcndpc2UmJnQub3RoZXJ3aXNlLnR5cGUpfXJldHVybiByLiRfdGVybXMud2hlbnMucHVzaChuKSxyLiRfbXV0YXRlUmVidWlsZCgpfWNhY2hlKGUpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBjYWNoaW5nIGluc2lkZSBhIHJ1bGVzZXRcIikscyghdGhpcy5fY2FjaGUsXCJDYW5ub3Qgb3ZlcnJpZGUgc2NoZW1hIGNhY2hlXCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0Ll9jYWNoZT1lfHxpLnByb3ZpZGVyLnByb3Zpc2lvbigpLHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdH1jbG9uZSgpe2NvbnN0IGU9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO3JldHVybiB0aGlzLl9hc3NpZ24oZSl9Y29uY2F0KGUpe3MobC5pc1NjaGVtYShlKSxcIkludmFsaWQgc2NoZW1hIG9iamVjdFwiKSxzKFwiYW55XCI9PT10aGlzLnR5cGV8fFwiYW55XCI9PT1lLnR5cGV8fGUudHlwZT09PXRoaXMudHlwZSxcIkNhbm5vdCBtZXJnZSB0eXBlXCIsdGhpcy50eXBlLFwid2l0aCBhbm90aGVyIHR5cGU6XCIsZS50eXBlKSxzKCF0aGlzLl9pblJ1bGVzZXQoKSxcIkNhbm5vdCBjb25jYXRlbmF0ZSBvbnRvIGEgc2NoZW1hIHdpdGggb3BlbiBydWxlc2V0XCIpLHMoIWUuX2luUnVsZXNldCgpLFwiQ2Fubm90IGNvbmNhdGVuYXRlIGEgc2NoZW1hIHdpdGggb3BlbiBydWxlc2V0XCIpO2xldCB0PXRoaXMuY2xvbmUoKTtpZihcImFueVwiPT09dGhpcy50eXBlJiZcImFueVwiIT09ZS50eXBlKXtjb25zdCByPWUuY2xvbmUoKTtmb3IoY29uc3QgZSBvZiBPYmplY3Qua2V5cyh0KSlcInR5cGVcIiE9PWUmJihyW2VdPXRbZV0pO3Q9cn10Ll9pZHMuY29uY2F0KGUuX2lkcyksdC5fcmVmcy5yZWdpc3RlcihlLHAudG9TaWJsaW5nKSx0Ll9wcmVmZXJlbmNlcz10Ll9wcmVmZXJlbmNlcz9sLnByZWZlcmVuY2VzKHQuX3ByZWZlcmVuY2VzLGUuX3ByZWZlcmVuY2VzKTplLl9wcmVmZXJlbmNlcyx0Ll92YWxpZHM9Yi5tZXJnZSh0Ll92YWxpZHMsZS5fdmFsaWRzLGUuX2ludmFsaWRzKSx0Ll9pbnZhbGlkcz1iLm1lcmdlKHQuX2ludmFsaWRzLGUuX2ludmFsaWRzLGUuX3ZhbGlkcyk7Zm9yKGNvbnN0IHIgb2YgZS5fc2luZ2xlUnVsZXMua2V5cygpKXQuX3NpbmdsZVJ1bGVzLmhhcyhyKSYmKHQuX3J1bGVzPXQuX3J1bGVzLmZpbHRlcihlPT5lLmtlZXB8fGUubmFtZSE9PXIpLHQuX3NpbmdsZVJ1bGVzLmRlbGV0ZShyKSk7Zm9yKGNvbnN0IHIgb2YgZS5fcnVsZXMpZS5fZGVmaW5pdGlvbi5ydWxlc1tyLm1ldGhvZF0ubXVsdGl8fHQuX3NpbmdsZVJ1bGVzLnNldChyLm5hbWUsciksdC5fcnVsZXMucHVzaChyKTtpZih0Ll9mbGFncy5lbXB0eSYmZS5fZmxhZ3MuZW1wdHkpe3QuX2ZsYWdzLmVtcHR5PXQuX2ZsYWdzLmVtcHR5LmNvbmNhdChlLl9mbGFncy5lbXB0eSk7Y29uc3Qgcj1PYmplY3QuYXNzaWduKHt9LGUuX2ZsYWdzKTtkZWxldGUgci5lbXB0eSxhKHQuX2ZsYWdzLHIpfWVsc2UgaWYoZS5fZmxhZ3MuZW1wdHkpe3QuX2ZsYWdzLmVtcHR5PWUuX2ZsYWdzLmVtcHR5O2NvbnN0IHI9T2JqZWN0LmFzc2lnbih7fSxlLl9mbGFncyk7ZGVsZXRlIHIuZW1wdHksYSh0Ll9mbGFncyxyKX1lbHNlIGEodC5fZmxhZ3MsZS5fZmxhZ3MpO2Zvcihjb25zdCByIGluIGUuJF90ZXJtcyl7Y29uc3Qgcz1lLiRfdGVybXNbcl07cz90LiRfdGVybXNbcl0/dC4kX3Rlcm1zW3JdPXQuJF90ZXJtc1tyXS5jb25jYXQocyk6dC4kX3Rlcm1zW3JdPXMuc2xpY2UoKTp0LiRfdGVybXNbcl18fCh0LiRfdGVybXNbcl09cyl9cmV0dXJuIHRoaXMuJF9yb290Ll90cmFjZXImJnRoaXMuJF9yb290Ll90cmFjZXIuX2NvbWJpbmUodCxbdGhpcyxlXSksdC4kX211dGF0ZVJlYnVpbGQoKX1leHRlbmQoZSl7cmV0dXJuIHMoIWUuYmFzZSxcIkNhbm5vdCBleHRlbmQgdHlwZSB3aXRoIGFub3RoZXIgYmFzZVwiKSxmLnR5cGUodGhpcyxlKX1leHRyYWN0KGUpe3JldHVybiBlPUFycmF5LmlzQXJyYXkoZSk/ZTplLnNwbGl0KFwiLlwiKSx0aGlzLl9pZHMucmVhY2goZSl9Zm9yayhlLHQpe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IGZvcmsgaW5zaWRlIGEgcnVsZXNldFwiKTtsZXQgcj10aGlzO2ZvcihsZXQgcyBvZltdLmNvbmNhdChlKSlzPUFycmF5LmlzQXJyYXkocyk/czpzLnNwbGl0KFwiLlwiKSxyPXIuX2lkcy5mb3JrKHMsdCxyKTtyZXR1cm4gci4kX3RlbXAucnVsZXNldD0hMSxyfXJ1bGUoZSl7Y29uc3QgdD10aGlzLl9kZWZpbml0aW9uO2wuYXNzZXJ0T3B0aW9ucyhlLE9iamVjdC5rZXlzKHQubW9kaWZpZXJzKSkscyghMSE9PXRoaXMuJF90ZW1wLnJ1bGVzZXQsXCJDYW5ub3QgYXBwbHkgcnVsZXMgdG8gZW1wdHkgcnVsZXNldCBvciB0aGUgbGFzdCBydWxlIGFkZGVkIGRvZXMgbm90IHN1cHBvcnQgcnVsZSBwcm9wZXJ0aWVzXCIpO2NvbnN0IHI9bnVsbD09PXRoaXMuJF90ZW1wLnJ1bGVzZXQ/dGhpcy5fcnVsZXMubGVuZ3RoLTE6dGhpcy4kX3RlbXAucnVsZXNldDtzKHI+PTAmJnI8dGhpcy5fcnVsZXMubGVuZ3RoLFwiQ2Fubm90IGFwcGx5IHJ1bGVzIHRvIGVtcHR5IHJ1bGVzZXRcIik7Y29uc3Qgbz10aGlzLmNsb25lKCk7Zm9yKGxldCBhPXI7YTxvLl9ydWxlcy5sZW5ndGg7KythKXtjb25zdCByPW8uX3J1bGVzW2FdLGk9bihyKTtmb3IoY29uc3QgbiBpbiBlKXQubW9kaWZpZXJzW25dKGksZVtuXSkscyhpLm5hbWU9PT1yLm5hbWUsXCJDYW5ub3QgY2hhbmdlIHJ1bGUgbmFtZVwiKTtvLl9ydWxlc1thXT1pLG8uX3NpbmdsZVJ1bGVzLmdldChpLm5hbWUpPT09ciYmby5fc2luZ2xlUnVsZXMuc2V0KGkubmFtZSxpKX1yZXR1cm4gby4kX3RlbXAucnVsZXNldD0hMSxvLiRfbXV0YXRlUmVidWlsZCgpfWdldCBydWxlc2V0KCl7cyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc3RhcnQgYSBuZXcgcnVsZXNldCB3aXRob3V0IGNsb3NpbmcgdGhlIHByZXZpb3VzIG9uZVwiKTtjb25zdCBlPXRoaXMuY2xvbmUoKTtyZXR1cm4gZS4kX3RlbXAucnVsZXNldD1lLl9ydWxlcy5sZW5ndGgsZX1nZXQgJCgpe3JldHVybiB0aGlzLnJ1bGVzZXR9dGFpbG9yKGUpe2U9W10uY29uY2F0KGUpLHMoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHRhaWxvciBpbnNpZGUgYSBydWxlc2V0XCIpO2xldCB0PXRoaXM7aWYodGhpcy4kX3Rlcm1zLmFsdGVyYXRpb25zKWZvcihjb25zdHt0YXJnZXQ6cixhZGp1c3RlcjpufW9mIHRoaXMuJF90ZXJtcy5hbHRlcmF0aW9ucyllLmluY2x1ZGVzKHIpJiYodD1uKHQpLHMobC5pc1NjaGVtYSh0KSxcIkFsdGVyYXRpb24gYWRqdXN0ZXIgZm9yXCIscixcImZhaWxlZCB0byByZXR1cm4gYSBzY2hlbWEgb2JqZWN0XCIpKTtyZXR1cm4gdD10LiRfbW9kaWZ5KHtlYWNoOnQ9PnQudGFpbG9yKGUpLHJlZjohMX0pLHQuJF90ZW1wLnJ1bGVzZXQ9ITEsdC4kX211dGF0ZVJlYnVpbGQoKX10cmFjZXIoKXtyZXR1cm4gZy5sb2NhdGlvbj9nLmxvY2F0aW9uKHRoaXMpOnRoaXN9dmFsaWRhdGUoZSx0KXtyZXR1cm4geS5lbnRyeShlLHRoaXMsdCl9dmFsaWRhdGVBc3luYyhlLHQpe3JldHVybiB5LmVudHJ5QXN5bmMoZSx0aGlzLHQpfSRfYWRkUnVsZShlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9e25hbWU6ZX0pLHMoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUsXCJJbnZhbGlkIG9wdGlvbnNcIikscyhlLm5hbWUmJlwic3RyaW5nXCI9PXR5cGVvZiBlLm5hbWUsXCJJbnZhbGlkIHJ1bGUgbmFtZVwiKTtmb3IoY29uc3QgdCBpbiBlKXMoXCJfXCIhPT10WzBdLFwiQ2Fubm90IHNldCBwcml2YXRlIHJ1bGUgcHJvcGVydGllc1wiKTtjb25zdCB0PU9iamVjdC5hc3NpZ24oe30sZSk7dC5fcmVzb2x2ZT1bXSx0Lm1ldGhvZD10Lm1ldGhvZHx8dC5uYW1lO2NvbnN0IHI9dGhpcy5fZGVmaW5pdGlvbi5ydWxlc1t0Lm1ldGhvZF0sbj10LmFyZ3M7cyhyLFwiVW5rbm93biBydWxlXCIsdC5tZXRob2QpO2NvbnN0IG89dGhpcy5jbG9uZSgpO2lmKG4pe3MoMT09PU9iamVjdC5rZXlzKG4pLmxlbmd0aHx8T2JqZWN0LmtleXMobikubGVuZ3RoPT09dGhpcy5fZGVmaW5pdGlvbi5ydWxlc1t0Lm5hbWVdLmFyZ3MubGVuZ3RoLFwiSW52YWxpZCBydWxlIGRlZmluaXRpb24gZm9yXCIsdGhpcy50eXBlLHQubmFtZSk7Zm9yKGNvbnN0IGUgaW4gbil7bGV0IGE9bltlXTtpZih2b2lkIDAhPT1hKXtpZihyLmFyZ3NCeU5hbWUpe2NvbnN0IGk9ci5hcmdzQnlOYW1lLmdldChlKTtpZihpLnJlZiYmbC5pc1Jlc29sdmFibGUoYSkpdC5fcmVzb2x2ZS5wdXNoKGUpLG8uJF9tdXRhdGVSZWdpc3RlcihhKTtlbHNlIGlmKGkubm9ybWFsaXplJiYoYT1pLm5vcm1hbGl6ZShhKSxuW2VdPWEpLGkuYXNzZXJ0KXtjb25zdCB0PWwudmFsaWRhdGVBcmcoYSxlLGkpO3MoIXQsdCxcIm9yIHJlZmVyZW5jZVwiKX19bltlXT1hfWVsc2UgZGVsZXRlIG5bZV19fXJldHVybiByLm11bHRpfHwoby5fcnVsZVJlbW92ZSh0Lm5hbWUse2Nsb25lOiExfSksby5fc2luZ2xlUnVsZXMuc2V0KHQubmFtZSx0KSksITE9PT1vLiRfdGVtcC5ydWxlc2V0JiYoby4kX3RlbXAucnVsZXNldD1udWxsKSxyLnByaW9yaXR5P28uX3J1bGVzLnVuc2hpZnQodCk6by5fcnVsZXMucHVzaCh0KSxvfSRfY29tcGlsZShlLHQpe3JldHVybiBjLnNjaGVtYSh0aGlzLiRfcm9vdCxlLHQpfSRfY3JlYXRlRXJyb3IoZSx0LHIscyxuLG89e30pe2NvbnN0IGE9ITEhPT1vLmZsYWdzP3RoaXMuX2ZsYWdzOnt9LGk9by5tZXNzYWdlcz9oLm1lcmdlKHRoaXMuX2RlZmluaXRpb24ubWVzc2FnZXMsby5tZXNzYWdlcyk6dGhpcy5fZGVmaW5pdGlvbi5tZXNzYWdlcztyZXR1cm4gbmV3IHUuUmVwb3J0KGUsdCxyLGEsaSxzLG4pfSRfZ2V0RmxhZyhlKXtyZXR1cm4gdGhpcy5fZmxhZ3NbZV19JF9nZXRSdWxlKGUpe3JldHVybiB0aGlzLl9zaW5nbGVSdWxlcy5nZXQoZSl9JF9tYXBMYWJlbHMoZSl7cmV0dXJuIGU9QXJyYXkuaXNBcnJheShlKT9lOmUuc3BsaXQoXCIuXCIpLHRoaXMuX2lkcy5sYWJlbHMoZSl9JF9tYXRjaChlLHQscixzKXsocj1PYmplY3QuYXNzaWduKHt9LHIpKS5hYm9ydEVhcmx5PSEwLHIuX2V4dGVybmFscz0hMSx0LnNuYXBzaG90KCk7Y29uc3Qgbj0heS52YWxpZGF0ZShlLHRoaXMsdCxyLHMpLmVycm9ycztyZXR1cm4gdC5yZXN0b3JlKCksbn0kX21vZGlmeShlKXtyZXR1cm4gbC5hc3NlcnRPcHRpb25zKGUsW1wiZWFjaFwiLFwib25jZVwiLFwicmVmXCIsXCJzY2hlbWFcIl0pLGQuc2NoZW1hKHRoaXMsZSl8fHRoaXN9JF9tdXRhdGVSZWJ1aWxkKCl7cyghdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3QgYWRkIHRoaXMgcnVsZSBpbnNpZGUgYSBydWxlc2V0XCIpLHRoaXMuX3JlZnMucmVzZXQoKSx0aGlzLl9pZHMucmVzZXQoKTtyZXR1cm4gdGhpcy4kX21vZGlmeSh7ZWFjaDooZSx7c291cmNlOnQsbmFtZTpyLHBhdGg6cyxrZXk6bn0pPT57Y29uc3Qgbz10aGlzLl9kZWZpbml0aW9uW3RdW3JdJiZ0aGlzLl9kZWZpbml0aW9uW3RdW3JdLnJlZ2lzdGVyOyExIT09byYmdGhpcy4kX211dGF0ZVJlZ2lzdGVyKGUse2ZhbWlseTpvLGtleTpufSl9fSksdGhpcy5fZGVmaW5pdGlvbi5yZWJ1aWxkJiZ0aGlzLl9kZWZpbml0aW9uLnJlYnVpbGQodGhpcyksdGhpcy4kX3RlbXAucnVsZXNldD0hMSx0aGlzfSRfbXV0YXRlUmVnaXN0ZXIoZSx7ZmFtaWx5OnQsa2V5OnJ9PXt9KXt0aGlzLl9yZWZzLnJlZ2lzdGVyKGUsdCksdGhpcy5faWRzLnJlZ2lzdGVyKGUse2tleTpyfSl9JF9wcm9wZXJ0eShlKXtyZXR1cm4gdGhpcy5fZGVmaW5pdGlvbi5wcm9wZXJ0aWVzW2VdfSRfcmVhY2goZSl7cmV0dXJuIHRoaXMuX2lkcy5yZWFjaChlKX0kX3Jvb3RSZWZlcmVuY2VzKCl7cmV0dXJuIHRoaXMuX3JlZnMucm9vdHMoKX0kX3NldEZsYWcoZSx0LHI9e30pe3MoXCJfXCI9PT1lWzBdfHwhdGhpcy5faW5SdWxlc2V0KCksXCJDYW5ub3Qgc2V0IGZsYWcgaW5zaWRlIGEgcnVsZXNldFwiKTtjb25zdCBuPXRoaXMuX2RlZmluaXRpb24uZmxhZ3NbZV18fHt9O2lmKG8odCxuLmRlZmF1bHQpJiYodD12b2lkIDApLG8odCx0aGlzLl9mbGFnc1tlXSkpcmV0dXJuIHRoaXM7Y29uc3QgYT0hMSE9PXIuY2xvbmU/dGhpcy5jbG9uZSgpOnRoaXM7cmV0dXJuIHZvaWQgMCE9PXQ/KGEuX2ZsYWdzW2VdPXQsYS4kX211dGF0ZVJlZ2lzdGVyKHQpKTpkZWxldGUgYS5fZmxhZ3NbZV0sXCJfXCIhPT1lWzBdJiYoYS4kX3RlbXAucnVsZXNldD0hMSksYX0kX3ZhbGlkYXRlKGUsdCxyKXtyZXR1cm4geS52YWxpZGF0ZShlLHRoaXMsdCxyKX1fYXNzaWduKGUpe2UudHlwZT10aGlzLnR5cGUsZS4kX3Jvb3Q9dGhpcy4kX3Jvb3QsZS4kX3RlbXA9T2JqZWN0LmFzc2lnbih7fSx0aGlzLiRfdGVtcCksZS4kX3RlbXAud2hlbnM9e30sZS5faWRzPXRoaXMuX2lkcy5jbG9uZSgpLGUuX3ByZWZlcmVuY2VzPXRoaXMuX3ByZWZlcmVuY2VzLGUuX3ZhbGlkcz10aGlzLl92YWxpZHMmJnRoaXMuX3ZhbGlkcy5jbG9uZSgpLGUuX2ludmFsaWRzPXRoaXMuX2ludmFsaWRzJiZ0aGlzLl9pbnZhbGlkcy5jbG9uZSgpLGUuX3J1bGVzPXRoaXMuX3J1bGVzLnNsaWNlKCksZS5fc2luZ2xlUnVsZXM9bih0aGlzLl9zaW5nbGVSdWxlcyx7c2hhbGxvdzohMH0pLGUuX3JlZnM9dGhpcy5fcmVmcy5jbG9uZSgpLGUuX2ZsYWdzPU9iamVjdC5hc3NpZ24oe30sdGhpcy5fZmxhZ3MpLGUuX2NhY2hlPW51bGwsZS4kX3Rlcm1zPXt9O2Zvcihjb25zdCB0IGluIHRoaXMuJF90ZXJtcyllLiRfdGVybXNbdF09dGhpcy4kX3Rlcm1zW3RdP3RoaXMuJF90ZXJtc1t0XS5zbGljZSgpOm51bGw7ZS4kX3N1cGVyPXt9O2Zvcihjb25zdCB0IGluIHRoaXMuJF9zdXBlcillLiRfc3VwZXJbdF09dGhpcy5fc3VwZXJbdF0uYmluZChlKTtyZXR1cm4gZX1fZGVmYXVsdChlLHQscj17fSl7cmV0dXJuIGwuYXNzZXJ0T3B0aW9ucyhyLFwibGl0ZXJhbFwiKSxzKHZvaWQgMCE9PXQsXCJNaXNzaW5nXCIsZSxcInZhbHVlXCIpLHMoXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8IXIubGl0ZXJhbCxcIk9ubHkgZnVuY3Rpb24gdmFsdWUgc3VwcG9ydHMgbGl0ZXJhbCBvcHRpb25cIiksXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmci5saXRlcmFsJiYodD17W2wuc3ltYm9scy5saXRlcmFsXTohMCxsaXRlcmFsOnR9KSx0aGlzLiRfc2V0RmxhZyhlLHQpfV9nZW5lcmF0ZShlLHQscil7aWYoIXRoaXMuJF90ZXJtcy53aGVucylyZXR1cm57c2NoZW1hOnRoaXN9O2NvbnN0IHM9W10sbj1bXTtmb3IobGV0IG89MDtvPHRoaXMuJF90ZXJtcy53aGVucy5sZW5ndGg7KytvKXtjb25zdCBhPXRoaXMuJF90ZXJtcy53aGVuc1tvXTtpZihhLmNvbmNhdCl7cy5wdXNoKGEuY29uY2F0KSxuLnB1c2goXCJcIi5jb25jYXQobyxcIi5jb25jYXRcIikpO2NvbnRpbnVlfWNvbnN0IGk9YS5yZWY/YS5yZWYucmVzb2x2ZShlLHQscik6ZSxsPWEuaXM/W2FdOmEuc3dpdGNoLGM9bi5sZW5ndGg7Zm9yKGxldCBjPTA7YzxsLmxlbmd0aDsrK2Mpe2NvbnN0e2lzOnUsdGhlbjpmLG90aGVyd2lzZTptfT1sW2NdLGg9XCJcIi5jb25jYXQobykuY29uY2F0KGEuc3dpdGNoP1wiLlwiK2M6XCJcIik7aWYodS4kX21hdGNoKGksdC5uZXN0KHUsXCJcIi5jb25jYXQoaCxcIi5pc1wiKSkscikpe2lmKGYpe2NvbnN0IG89dC5sb2NhbGl6ZShbLi4udC5wYXRoLFwiXCIuY29uY2F0KGgsXCIudGhlblwiKV0sdC5hbmNlc3RvcnMsdC5zY2hlbWFzKSx7c2NoZW1hOmEsaWQ6aX09Zi5fZ2VuZXJhdGUoZSxvLHIpO3MucHVzaChhKSxuLnB1c2goXCJcIi5jb25jYXQoaCxcIi50aGVuXCIpLmNvbmNhdChpP1wiKFwiLmNvbmNhdChpLFwiKVwiKTpcIlwiKSk7YnJlYWt9fWVsc2UgaWYobSl7Y29uc3Qgbz10LmxvY2FsaXplKFsuLi50LnBhdGgsXCJcIi5jb25jYXQoaCxcIi5vdGhlcndpc2VcIildLHQuYW5jZXN0b3JzLHQuc2NoZW1hcykse3NjaGVtYTphLGlkOml9PW0uX2dlbmVyYXRlKGUsbyxyKTtzLnB1c2goYSksbi5wdXNoKFwiXCIuY29uY2F0KGgsXCIub3RoZXJ3aXNlXCIpLmNvbmNhdChpP1wiKFwiLmNvbmNhdChpLFwiKVwiKTpcIlwiKSk7YnJlYWt9fWlmKGEuYnJlYWsmJm4ubGVuZ3RoPmMpYnJlYWt9Y29uc3Qgbz1uLmpvaW4oXCIsIFwiKTtpZih0Lm1haW5zdGF5LnRyYWNlci5kZWJ1Zyh0LFwicnVsZVwiLFwid2hlblwiLG8pLCFvKXJldHVybntzY2hlbWE6dGhpc307aWYoIXQubWFpbnN0YXkudHJhY2VyLmFjdGl2ZSYmdGhpcy4kX3RlbXAud2hlbnNbb10pcmV0dXJue3NjaGVtYTp0aGlzLiRfdGVtcC53aGVuc1tvXSxpZDpvfTtsZXQgYT10aGlzO3RoaXMuX2RlZmluaXRpb24uZ2VuZXJhdGUmJihhPXRoaXMuX2RlZmluaXRpb24uZ2VuZXJhdGUodGhpcyxlLHQscikpO2Zvcihjb25zdCBlIG9mIHMpYT1hLmNvbmNhdChlKTtyZXR1cm4gdGhpcy4kX3Jvb3QuX3RyYWNlciYmdGhpcy4kX3Jvb3QuX3RyYWNlci5fY29tYmluZShhLFt0aGlzLC4uLnNdKSx0aGlzLiRfdGVtcC53aGVuc1tvXT1hLHtzY2hlbWE6YSxpZDpvfX1faW5uZXIoZSx0LHI9e30pe3MoIXRoaXMuX2luUnVsZXNldCgpLFwiQ2Fubm90IHNldCBcIi5jb25jYXQoZSxcIiBpbnNpZGUgYSBydWxlc2V0XCIpKTtjb25zdCBuPXRoaXMuY2xvbmUoKTtyZXR1cm4gbi4kX3Rlcm1zW2VdJiYhci5vdmVycmlkZXx8KG4uJF90ZXJtc1tlXT1bXSksci5zaW5nbGU/bi4kX3Rlcm1zW2VdLnB1c2godCk6bi4kX3Rlcm1zW2VdLnB1c2goLi4udCksbi4kX3RlbXAucnVsZXNldD0hMSxufV9pblJ1bGVzZXQoKXtyZXR1cm4gbnVsbCE9PXRoaXMuJF90ZW1wLnJ1bGVzZXQmJiExIT09dGhpcy4kX3RlbXAucnVsZXNldH1fcnVsZVJlbW92ZShlLHQ9e30pe2lmKCF0aGlzLl9zaW5nbGVSdWxlcy5oYXMoZSkpcmV0dXJuIHRoaXM7Y29uc3Qgcj0hMSE9PXQuY2xvbmU/dGhpcy5jbG9uZSgpOnRoaXM7ci5fc2luZ2xlUnVsZXMuZGVsZXRlKGUpO2NvbnN0IHM9W107Zm9yKGxldCB0PTA7dDxyLl9ydWxlcy5sZW5ndGg7Kyt0KXtjb25zdCBuPXIuX3J1bGVzW3RdO24ubmFtZSE9PWV8fG4ua2VlcD9zLnB1c2gobik6ci5faW5SdWxlc2V0KCkmJnQ8ci4kX3RlbXAucnVsZXNldCYmLS1yLiRfdGVtcC5ydWxlc2V0fXJldHVybiByLl9ydWxlcz1zLHJ9X3ZhbHVlcyhlLHQpe2wudmVyaWZ5RmxhdChlLHQuc2xpY2UoMSwtMSkpO2NvbnN0IHI9dGhpcy5jbG9uZSgpLG49ZVswXT09PWwuc3ltYm9scy5vdmVycmlkZTtpZihuJiYoZT1lLnNsaWNlKDEpKSwhclt0XSYmZS5sZW5ndGg/clt0XT1uZXcgYjpuJiYoclt0XT1lLmxlbmd0aD9uZXcgYjpudWxsLHIuJF9tdXRhdGVSZWJ1aWxkKCkpLCFyW3RdKXJldHVybiByO24mJnJbdF0ub3ZlcnJpZGUoKTtmb3IoY29uc3QgbiBvZiBlKXtzKHZvaWQgMCE9PW4sXCJDYW5ub3QgY2FsbCBhbGxvdy92YWxpZC9pbnZhbGlkIHdpdGggdW5kZWZpbmVkXCIpLHMobiE9PWwuc3ltYm9scy5vdmVycmlkZSxcIk92ZXJyaWRlIG11c3QgYmUgdGhlIGZpcnN0IHZhbHVlXCIpO2NvbnN0IGU9XCJfaW52YWxpZHNcIj09PXQ/XCJfdmFsaWRzXCI6XCJfaW52YWxpZHNcIjtyW2VdJiYocltlXS5yZW1vdmUobikscltlXS5sZW5ndGh8fChzKFwiX3ZhbGlkc1wiPT09dHx8IXIuX2ZsYWdzLm9ubHksXCJTZXR0aW5nIGludmFsaWQgdmFsdWVcIixuLFwibGVhdmVzIHNjaGVtYSByZWplY3RpbmcgYWxsIHZhbHVlcyBkdWUgdG8gcHJldmlvdXMgdmFsaWQgcnVsZVwiKSxyW2VdPW51bGwpKSxyW3RdLmFkZChuLHIuX3JlZnMpfXJldHVybiByfX19O3YuQmFzZS5wcm90b3R5cGVbbC5zeW1ib2xzLmFueV09e3ZlcnNpb246bC52ZXJzaW9uLGNvbXBpbGU6Yy5jb21waWxlLHJvb3Q6XCIkX3Jvb3RcIn0sdi5CYXNlLnByb3RvdHlwZS5pc0ltbXV0YWJsZT0hMCx2LkJhc2UucHJvdG90eXBlLmRlbnk9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUuZGlzYWxsb3c9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUuZXF1YWw9di5CYXNlLnByb3RvdHlwZS52YWxpZCx2LkJhc2UucHJvdG90eXBlLmV4aXN0PXYuQmFzZS5wcm90b3R5cGUucmVxdWlyZWQsdi5CYXNlLnByb3RvdHlwZS5ub3Q9di5CYXNlLnByb3RvdHlwZS5pbnZhbGlkLHYuQmFzZS5wcm90b3R5cGUub3B0aW9ucz12LkJhc2UucHJvdG90eXBlLnByZWZzLHYuQmFzZS5wcm90b3R5cGUucHJlZmVyZW5jZXM9di5CYXNlLnByb3RvdHlwZS5wcmVmcyxlLmV4cG9ydHM9bmV3IHYuQmFzZX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHMoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihzPXMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLHMpfXJldHVybiByfWZ1bmN0aW9uIG4oZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWNvbnN0IG89cigwKSxhPXIoMSksaT1yKDUpLGw9e307dC5JZHM9bC5JZHM9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLl9ieUlkPW5ldyBNYXAsdGhpcy5fYnlLZXk9bmV3IE1hcCx0aGlzLl9zY2hlbWFDaGFpbj0hMX1jbG9uZSgpe2NvbnN0IGU9bmV3IGwuSWRzO3JldHVybiBlLl9ieUlkPW5ldyBNYXAodGhpcy5fYnlJZCksZS5fYnlLZXk9bmV3IE1hcCh0aGlzLl9ieUtleSksZS5fc2NoZW1hQ2hhaW49dGhpcy5fc2NoZW1hQ2hhaW4sZX1jb25jYXQoZSl7ZS5fc2NoZW1hQ2hhaW4mJih0aGlzLl9zY2hlbWFDaGFpbj0hMCk7Zm9yKGNvbnN0W3Qscl1vZiBlLl9ieUlkLmVudHJpZXMoKSlvKCF0aGlzLl9ieUtleS5oYXModCksXCJTY2hlbWEgaWQgY29uZmxpY3RzIHdpdGggZXhpc3Rpbmcga2V5OlwiLHQpLHRoaXMuX2J5SWQuc2V0KHQscik7Zm9yKGNvbnN0W3Qscl1vZiBlLl9ieUtleS5lbnRyaWVzKCkpbyghdGhpcy5fYnlJZC5oYXModCksXCJTY2hlbWEga2V5IGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nIGlkOlwiLHQpLHRoaXMuX2J5S2V5LnNldCh0LHIpfWZvcmsoZSx0LHIpe2NvbnN0IHM9dGhpcy5fY29sbGVjdChlKTtzLnB1c2goe3NjaGVtYTpyfSk7Y29uc3Qgbj1zLnNoaWZ0KCk7bGV0IGk9e2lkOm4uaWQsc2NoZW1hOnQobi5zY2hlbWEpfTtvKGEuaXNTY2hlbWEoaS5zY2hlbWEpLFwiYWRqdXN0ZXIgZnVuY3Rpb24gZmFpbGVkIHRvIHJldHVybiBhIGpvaSBzY2hlbWEgdHlwZVwiKTtmb3IoY29uc3QgZSBvZiBzKWk9e2lkOmUuaWQsc2NoZW1hOmwuZm9yayhlLnNjaGVtYSxpLmlkLGkuc2NoZW1hKX07cmV0dXJuIGkuc2NoZW1hfWxhYmVscyhlLHQ9W10pe2NvbnN0IHI9ZVswXSxzPXRoaXMuX2dldChyKTtpZighcylyZXR1cm5bLi4udCwuLi5lXS5qb2luKFwiLlwiKTtjb25zdCBuPWUuc2xpY2UoMSk7cmV0dXJuIHQ9Wy4uLnQscy5zY2hlbWEuX2ZsYWdzLmxhYmVsfHxyXSxuLmxlbmd0aD9zLnNjaGVtYS5faWRzLmxhYmVscyhuLHQpOnQuam9pbihcIi5cIil9cmVhY2goZSx0PVtdKXtjb25zdCByPWVbMF0scz10aGlzLl9nZXQocik7byhzLFwiU2NoZW1hIGRvZXMgbm90IGNvbnRhaW4gcGF0aFwiLFsuLi50LC4uLmVdLmpvaW4oXCIuXCIpKTtjb25zdCBuPWUuc2xpY2UoMSk7cmV0dXJuIG4ubGVuZ3RoP3Muc2NoZW1hLl9pZHMucmVhY2gobixbLi4udCxyXSk6cy5zY2hlbWF9cmVnaXN0ZXIoZSx7a2V5OnR9PXt9KXtpZighZXx8IWEuaXNTY2hlbWEoZSkpcmV0dXJuOyhlLiRfcHJvcGVydHkoXCJzY2hlbWFDaGFpblwiKXx8ZS5faWRzLl9zY2hlbWFDaGFpbikmJih0aGlzLl9zY2hlbWFDaGFpbj0hMCk7Y29uc3Qgcj1lLl9mbGFncy5pZDtpZihyKXtjb25zdCB0PXRoaXMuX2J5SWQuZ2V0KHIpO28oIXR8fHQuc2NoZW1hPT09ZSxcIkNhbm5vdCBhZGQgZGlmZmVyZW50IHNjaGVtYXMgd2l0aCB0aGUgc2FtZSBpZDpcIixyKSxvKCF0aGlzLl9ieUtleS5oYXMociksXCJTY2hlbWEgaWQgY29uZmxpY3RzIHdpdGggZXhpc3Rpbmcga2V5OlwiLHIpLHRoaXMuX2J5SWQuc2V0KHIse3NjaGVtYTplLGlkOnJ9KX10JiYobyghdGhpcy5fYnlLZXkuaGFzKHQpLFwiU2NoZW1hIGFscmVhZHkgY29udGFpbnMga2V5OlwiLHQpLG8oIXRoaXMuX2J5SWQuaGFzKHQpLFwiU2NoZW1hIGtleSBjb25mbGljdHMgd2l0aCBleGlzdGluZyBpZDpcIix0KSx0aGlzLl9ieUtleS5zZXQodCx7c2NoZW1hOmUsaWQ6dH0pKX1yZXNldCgpe3RoaXMuX2J5SWQ9bmV3IE1hcCx0aGlzLl9ieUtleT1uZXcgTWFwLHRoaXMuX3NjaGVtYUNoYWluPSExfV9jb2xsZWN0KGUsdD1bXSxyPVtdKXtjb25zdCBzPWVbMF0sbj10aGlzLl9nZXQocyk7byhuLFwiU2NoZW1hIGRvZXMgbm90IGNvbnRhaW4gcGF0aFwiLFsuLi50LC4uLmVdLmpvaW4oXCIuXCIpKSxyPVtuLC4uLnJdO2NvbnN0IGE9ZS5zbGljZSgxKTtyZXR1cm4gYS5sZW5ndGg/bi5zY2hlbWEuX2lkcy5fY29sbGVjdChhLFsuLi50LHNdLHIpOnJ9X2dldChlKXtyZXR1cm4gdGhpcy5fYnlJZC5nZXQoZSl8fHRoaXMuX2J5S2V5LmdldChlKX19LGwuZm9yaz1mdW5jdGlvbihlLHIscyl7Y29uc3Qgbj10LnNjaGVtYShlLHtlYWNoOihlLHtrZXk6dH0pPT57aWYocj09PShlLl9mbGFncy5pZHx8dCkpcmV0dXJuIHN9LHJlZjohMX0pO3JldHVybiBuP24uJF9tdXRhdGVSZWJ1aWxkKCk6ZX0sdC5zY2hlbWE9ZnVuY3Rpb24oZSx0KXtsZXQgcjtmb3IoY29uc3QgcyBpbiBlLl9mbGFncyl7aWYoXCJfXCI9PT1zWzBdKWNvbnRpbnVlO2NvbnN0IG49bC5zY2FuKGUuX2ZsYWdzW3NdLHtzb3VyY2U6XCJmbGFnc1wiLG5hbWU6c30sdCk7dm9pZCAwIT09biYmKHI9cnx8ZS5jbG9uZSgpLHIuX2ZsYWdzW3NdPW4pfWZvcihsZXQgcz0wO3M8ZS5fcnVsZXMubGVuZ3RoOysrcyl7Y29uc3Qgbj1lLl9ydWxlc1tzXSxvPWwuc2NhbihuLmFyZ3Mse3NvdXJjZTpcInJ1bGVzXCIsbmFtZTpuLm5hbWV9LHQpO2lmKHZvaWQgMCE9PW8pe3I9cnx8ZS5jbG9uZSgpO2NvbnN0IHQ9T2JqZWN0LmFzc2lnbih7fSxuKTt0LmFyZ3M9byxyLl9ydWxlc1tzXT10LHIuX3NpbmdsZVJ1bGVzLmdldChuLm5hbWUpPT09biYmci5fc2luZ2xlUnVsZXMuc2V0KG4ubmFtZSx0KX19Zm9yKGNvbnN0IHMgaW4gZS4kX3Rlcm1zKXtpZihcIl9cIj09PXNbMF0pY29udGludWU7Y29uc3Qgbj1sLnNjYW4oZS4kX3Rlcm1zW3NdLHtzb3VyY2U6XCJ0ZXJtc1wiLG5hbWU6c30sdCk7dm9pZCAwIT09biYmKHI9cnx8ZS5jbG9uZSgpLHIuJF90ZXJtc1tzXT1uKX1yZXR1cm4gcn0sbC5zY2FuPWZ1bmN0aW9uKGUsdCxyLG8sYyl7Y29uc3QgdT1vfHxbXTtpZihudWxsPT09ZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuO2xldCBmO2lmKEFycmF5LmlzQXJyYXkoZSkpe2ZvcihsZXQgcz0wO3M8ZS5sZW5ndGg7KytzKXtjb25zdCBuPVwidGVybXNcIj09PXQuc291cmNlJiZcImtleXNcIj09PXQubmFtZSYmZVtzXS5rZXksbz1sLnNjYW4oZVtzXSx0LHIsW3MsLi4udV0sbik7dm9pZCAwIT09byYmKGY9Znx8ZS5zbGljZSgpLGZbc109byl9cmV0dXJuIGZ9aWYoITEhPT1yLnNjaGVtYSYmYS5pc1NjaGVtYShlKXx8ITEhPT1yLnJlZiYmaS5pc1JlZihlKSl7Y29uc3Qgbz1yLmVhY2goZSxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9zKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7bihlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6cyhPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX0oe30sdCx7cGF0aDp1LGtleTpjfSkpO2lmKG89PT1lKXJldHVybjtyZXR1cm4gb31mb3IoY29uc3QgcyBpbiBlKXtpZihcIl9cIj09PXNbMF0pY29udGludWU7Y29uc3Qgbj1sLnNjYW4oZVtzXSx0LHIsW3MsLi4udV0sYyk7dm9pZCAwIT09biYmKGY9Znx8T2JqZWN0LmFzc2lnbih7fSxlKSxmW3NdPW4pfXJldHVybiBmfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMiksbz1yKDM3KSxhPXIoNiksaT1yKDEpLGw9cig0KSxjPXIoMzgpLHU9e3Jlc3VsdDpTeW1ib2woXCJyZXN1bHRcIil9O3QuZW50cnk9ZnVuY3Rpb24oZSx0LHIpe2xldCBuPWkuZGVmYXVsdHM7ciYmKHModm9pZCAwPT09ci53YXJuaW5ncyxcIkNhbm5vdCBvdmVycmlkZSB3YXJuaW5ncyBwcmVmZXJlbmNlIGluIHN5bmNocm9ub3VzIHZhbGlkYXRpb25cIiksbj1pLnByZWZlcmVuY2VzKGkuZGVmYXVsdHMscikpO2NvbnN0IG89dS5lbnRyeShlLHQsbik7cyghby5tYWluc3RheS5leHRlcm5hbHMubGVuZ3RoLFwiU2NoZW1hIHdpdGggZXh0ZXJuYWwgcnVsZXMgbXVzdCB1c2UgdmFsaWRhdGVBc3luYygpXCIpO2NvbnN0IGE9e3ZhbHVlOm8udmFsdWV9O3JldHVybiBvLmVycm9yJiYoYS5lcnJvcj1vLmVycm9yKSxvLm1haW5zdGF5Lndhcm5pbmdzLmxlbmd0aCYmKGEud2FybmluZz1sLmRldGFpbHMoby5tYWluc3RheS53YXJuaW5ncykpLG8ubWFpbnN0YXkuZGVidWcmJihhLmRlYnVnPW8ubWFpbnN0YXkuZGVidWcpLGF9LHQuZW50cnlBc3luYz1hc3luYyBmdW5jdGlvbihlLHQscil7bGV0IHM9aS5kZWZhdWx0cztyJiYocz1pLnByZWZlcmVuY2VzKGkuZGVmYXVsdHMscikpO2NvbnN0IG49dS5lbnRyeShlLHQscyksbz1uLm1haW5zdGF5O2lmKG4uZXJyb3IpdGhyb3cgby5kZWJ1ZyYmKG4uZXJyb3IuZGVidWc9by5kZWJ1Zyksbi5lcnJvcjtpZihvLmV4dGVybmFscy5sZW5ndGgpe2xldCBlPW4udmFsdWU7Zm9yKGNvbnN0e21ldGhvZDp0LHBhdGg6cixsYWJlbDpzfW9mIG8uZXh0ZXJuYWxzKXtsZXQgbixvLGk9ZTtyLmxlbmd0aCYmKG49cltyLmxlbmd0aC0xXSxvPWEoZSxyLnNsaWNlKDAsLTEpKSxpPW9bbl0pO3RyeXtjb25zdCByPWF3YWl0IHQoaSk7aWYodm9pZCAwPT09cnx8cj09PWkpY29udGludWU7bz9vW25dPXI6ZT1yfWNhdGNoKGUpe3Rocm93IGUubWVzc2FnZSs9XCIgKFwiLmNvbmNhdChzLFwiKVwiKSxlfX1uLnZhbHVlPWV9aWYoIXMud2FybmluZ3MmJiFzLmRlYnVnKXJldHVybiBuLnZhbHVlO2NvbnN0IGM9e3ZhbHVlOm4udmFsdWV9O3JldHVybiBvLndhcm5pbmdzLmxlbmd0aCYmKGMud2FybmluZz1sLmRldGFpbHMoby53YXJuaW5ncykpLG8uZGVidWcmJihjLmRlYnVnPW8uZGVidWcpLGN9LHUuZW50cnk9ZnVuY3Rpb24oZSxyLHMpe2NvbnN0e3RyYWNlcjpuLGNsZWFudXA6b309dS50cmFjZXIocixzKSxhPXtleHRlcm5hbHM6W10sd2FybmluZ3M6W10sdHJhY2VyOm4sZGVidWc6cy5kZWJ1Zz9bXTpudWxsLGxpbmtzOnIuX2lkcy5fc2NoZW1hQ2hhaW4/bmV3IE1hcDpudWxsfSxpPXIuX2lkcy5fc2NoZW1hQ2hhaW4/W3tzY2hlbWE6cn1dOm51bGwsZj1uZXcgYyhbXSxbXSx7bWFpbnN0YXk6YSxzY2hlbWFzOml9KSxtPXQudmFsaWRhdGUoZSxyLGYscyk7byYmci4kX3Jvb3QudW50cmFjZSgpO2NvbnN0IGg9bC5wcm9jZXNzKG0uZXJyb3JzLGUscyk7cmV0dXJue3ZhbHVlOm0udmFsdWUsZXJyb3I6aCxtYWluc3RheTphfX0sdS50cmFjZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS4kX3Jvb3QuX3RyYWNlcj97dHJhY2VyOmUuJF9yb290Ll90cmFjZXIuX3JlZ2lzdGVyKGUpfTp0LmRlYnVnPyhzKGUuJF9yb290LnRyYWNlLFwiRGVidWcgbW9kZSBub3Qgc3VwcG9ydGVkXCIpLHt0cmFjZXI6ZS4kX3Jvb3QudHJhY2UoKS5fcmVnaXN0ZXIoZSksY2xlYW51cDohMH0pOnt0cmFjZXI6dS5pZ25vcmV9fSx0LnZhbGlkYXRlPWZ1bmN0aW9uKGUsdCxyLHMsbj17fSl7aWYodC4kX3Rlcm1zLndoZW5zJiYodD10Ll9nZW5lcmF0ZShlLHIscykuc2NoZW1hKSx0Ll9wcmVmZXJlbmNlcyYmKHM9dS5wcmVmcyh0LHMpKSx0Ll9jYWNoZSYmcy5jYWNoZSl7Y29uc3Qgcz10Ll9jYWNoZS5nZXQoZSk7aWYoci5tYWluc3RheS50cmFjZXIuZGVidWcocixcInZhbGlkYXRlXCIsXCJjYWNoZWRcIiwhIXMpLHMpcmV0dXJuIHN9Y29uc3Qgbz0obixvLGEpPT50LiRfY3JlYXRlRXJyb3IobixlLG8sYXx8cixzKSxhPXtvcmlnaW5hbDplLHByZWZzOnMsc2NoZW1hOnQsc3RhdGU6cixlcnJvcjpvLHdhcm46KGUsdCxzKT0+ci5tYWluc3RheS53YXJuaW5ncy5wdXNoKG8oZSx0LHMpKSxtZXNzYWdlOihuLG8pPT50LiRfY3JlYXRlRXJyb3IoXCJjdXN0b21cIixlLG8scixzLHttZXNzYWdlczpufSl9O3IubWFpbnN0YXkudHJhY2VyLmVudHJ5KHQscik7Y29uc3QgbD10Ll9kZWZpbml0aW9uO2lmKGwucHJlcGFyZSYmdm9pZCAwIT09ZSYmcy5jb252ZXJ0KXtjb25zdCB0PWwucHJlcGFyZShlLGEpO2lmKHQpe2lmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJwcmVwYXJlXCIsZSx0LnZhbHVlKSx0LmVycm9ycylyZXR1cm4gdS5maW5hbGl6ZSh0LnZhbHVlLFtdLmNvbmNhdCh0LmVycm9ycyksYSk7ZT10LnZhbHVlfX1pZihsLmNvZXJjZSYmdm9pZCAwIT09ZSYmcy5jb252ZXJ0JiYoIWwuY29lcmNlLmZyb218fGwuY29lcmNlLmZyb20uaW5jbHVkZXModHlwZW9mIGUpKSl7Y29uc3QgdD1sLmNvZXJjZS5tZXRob2QoZSxhKTtpZih0KXtpZihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwiY29lcmNlZFwiLGUsdC52YWx1ZSksdC5lcnJvcnMpcmV0dXJuIHUuZmluYWxpemUodC52YWx1ZSxbXS5jb25jYXQodC5lcnJvcnMpLGEpO2U9dC52YWx1ZX19Y29uc3QgYz10Ll9mbGFncy5lbXB0eTtjJiZjLiRfbWF0Y2godS50cmltKGUsdCksci5uZXN0KGMpLGkuZGVmYXVsdHMpJiYoci5tYWluc3RheS50cmFjZXIudmFsdWUocixcImVtcHR5XCIsZSx2b2lkIDApLGU9dm9pZCAwKTtjb25zdCBmPW4ucHJlc2VuY2V8fHQuX2ZsYWdzLnByZXNlbmNlfHwodC5fZmxhZ3MuX2VuZGVkU3dpdGNoP1wiaWdub3JlXCI6cy5wcmVzZW5jZSk7aWYodm9pZCAwPT09ZSl7aWYoXCJmb3JiaWRkZW5cIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxudWxsLGEpO2lmKFwicmVxdWlyZWRcIj09PWYpcmV0dXJuIHUuZmluYWxpemUoZSxbdC4kX2NyZWF0ZUVycm9yKFwiYW55LnJlcXVpcmVkXCIsZSxudWxsLHIscyldLGEpO2lmKFwib3B0aW9uYWxcIj09PWYpe2lmKHQuX2ZsYWdzLmRlZmF1bHQhPT1pLnN5bWJvbHMuZGVlcERlZmF1bHQpcmV0dXJuIHUuZmluYWxpemUoZSxudWxsLGEpO3IubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJkZWZhdWx0XCIsZSx7fSksZT17fX19ZWxzZSBpZihcImZvcmJpZGRlblwiPT09ZilyZXR1cm4gdS5maW5hbGl6ZShlLFt0LiRfY3JlYXRlRXJyb3IoXCJhbnkudW5rbm93blwiLGUsbnVsbCxyLHMpXSxhKTtjb25zdCBtPVtdO2lmKHQuX3ZhbGlkcyl7Y29uc3Qgbj10Ll92YWxpZHMuZ2V0KGUscixzLHQuX2ZsYWdzLmluc2Vuc2l0aXZlKTtpZihuKXJldHVybiBzLmNvbnZlcnQmJihyLm1haW5zdGF5LnRyYWNlci52YWx1ZShyLFwidmFsaWRzXCIsZSxuLnZhbHVlKSxlPW4udmFsdWUpLHIubWFpbnN0YXkudHJhY2VyLmZpbHRlcih0LHIsXCJ2YWxpZFwiLG4pLHUuZmluYWxpemUoZSxudWxsLGEpO2lmKHQuX2ZsYWdzLm9ubHkpe2NvbnN0IG49dC4kX2NyZWF0ZUVycm9yKFwiYW55Lm9ubHlcIixlLHt2YWxpZHM6dC5fdmFsaWRzLnZhbHVlcyh7ZGlzcGxheTohMH0pfSxyLHMpO2lmKHMuYWJvcnRFYXJseSlyZXR1cm4gdS5maW5hbGl6ZShlLFtuXSxhKTttLnB1c2gobil9fWlmKHQuX2ludmFsaWRzKXtjb25zdCBuPXQuX2ludmFsaWRzLmdldChlLHIscyx0Ll9mbGFncy5pbnNlbnNpdGl2ZSk7aWYobil7ci5tYWluc3RheS50cmFjZXIuZmlsdGVyKHQscixcImludmFsaWRcIixuKTtjb25zdCBvPXQuJF9jcmVhdGVFcnJvcihcImFueS5pbnZhbGlkXCIsZSx7aW52YWxpZHM6dC5faW52YWxpZHMudmFsdWVzKHtkaXNwbGF5OiEwfSl9LHIscyk7aWYocy5hYm9ydEVhcmx5KXJldHVybiB1LmZpbmFsaXplKGUsW29dLGEpO20ucHVzaChvKX19aWYobC52YWxpZGF0ZSl7Y29uc3QgdD1sLnZhbGlkYXRlKGUsYSk7aWYodCYmKHIubWFpbnN0YXkudHJhY2VyLnZhbHVlKHIsXCJiYXNlXCIsZSx0LnZhbHVlKSxlPXQudmFsdWUsdC5lcnJvcnMpKXtpZighQXJyYXkuaXNBcnJheSh0LmVycm9ycykpcmV0dXJuIG0ucHVzaCh0LmVycm9ycyksdS5maW5hbGl6ZShlLG0sYSk7aWYodC5lcnJvcnMubGVuZ3RoKXJldHVybiBtLnB1c2goLi4udC5lcnJvcnMpLHUuZmluYWxpemUoZSxtLGEpfX1yZXR1cm4gdC5fcnVsZXMubGVuZ3RoP3UucnVsZXMoZSxtLGEpOnUuZmluYWxpemUoZSxtLGEpfSx1LnJ1bGVzPWZ1bmN0aW9uKGUsdCxyKXtjb25zdHtzY2hlbWE6cyxzdGF0ZTpuLHByZWZzOm99PXI7Zm9yKGNvbnN0IGEgb2Ygcy5fcnVsZXMpe2NvbnN0IGw9cy5fZGVmaW5pdGlvbi5ydWxlc1thLm1ldGhvZF07aWYobC5jb252ZXJ0JiZvLmNvbnZlcnQpe24ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwiZnVsbFwiKTtjb250aW51ZX1sZXQgYyxmPWEuYXJncztpZihhLl9yZXNvbHZlLmxlbmd0aCl7Zj1PYmplY3QuYXNzaWduKHt9LGYpO2Zvcihjb25zdCB0IG9mIGEuX3Jlc29sdmUpe2NvbnN0IHI9bC5hcmdzQnlOYW1lLmdldCh0KSxhPWZbdF0ucmVzb2x2ZShlLG4sbyksdT1yLm5vcm1hbGl6ZT9yLm5vcm1hbGl6ZShhKTphLG09aS52YWxpZGF0ZUFyZyh1LG51bGwscik7aWYobSl7Yz1zLiRfY3JlYXRlRXJyb3IoXCJhbnkucmVmXCIsYSx7YXJnOnQscmVmOmZbdF0scmVhc29uOm19LG4sbyk7YnJlYWt9Zlt0XT11fX1jPWN8fGwudmFsaWRhdGUoZSxyLGYsYSk7Y29uc3QgbT11LnJ1bGUoYyxhKTtpZihtLmVycm9ycyl7aWYobi5tYWluc3RheS50cmFjZXIubG9nKHMsbixcInJ1bGVcIixhLm5hbWUsXCJlcnJvclwiKSxhLndhcm4pe24ubWFpbnN0YXkud2FybmluZ3MucHVzaCguLi5tLmVycm9ycyk7Y29udGludWV9aWYoby5hYm9ydEVhcmx5KXJldHVybiB1LmZpbmFsaXplKGUsbS5lcnJvcnMscik7dC5wdXNoKC4uLm0uZXJyb3JzKX1lbHNlIG4ubWFpbnN0YXkudHJhY2VyLmxvZyhzLG4sXCJydWxlXCIsYS5uYW1lLFwicGFzc1wiKSxuLm1haW5zdGF5LnRyYWNlci52YWx1ZShuLFwicnVsZVwiLGUsbS52YWx1ZSxhLm5hbWUpLGU9bS52YWx1ZX1yZXR1cm4gdS5maW5hbGl6ZShlLHQscil9LHUucnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlIGluc3RhbmNlb2YgbC5SZXBvcnQ/KHUuZXJyb3IoZSx0KSx7ZXJyb3JzOltlXSx2YWx1ZTpudWxsfSk6QXJyYXkuaXNBcnJheShlKSYmKGVbMF1pbnN0YW5jZW9mIGwuUmVwb3J0fHxlWzBdaW5zdGFuY2VvZiBFcnJvcik/KGUuZm9yRWFjaChlPT51LmVycm9yKGUsdCkpLHtlcnJvcnM6ZSx2YWx1ZTpudWxsfSk6e2Vycm9yczpudWxsLHZhbHVlOmV9fSx1LmVycm9yPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubWVzc2FnZSYmZS5fc2V0VGVtcGxhdGUodC5tZXNzYWdlKSxlfSx1LmZpbmFsaXplPWZ1bmN0aW9uKGUsdCxyKXt0PXR8fFtdO2NvbnN0e3NjaGVtYTpuLHN0YXRlOm8scHJlZnM6YX09cjtpZih0Lmxlbmd0aCl7Y29uc3Qgcz11LmRlZmF1bHQoXCJmYWlsb3ZlclwiLHZvaWQgMCx0LHIpO3ZvaWQgMCE9PXMmJihvLm1haW5zdGF5LnRyYWNlci52YWx1ZShvLFwiZmFpbG92ZXJcIixlLHMpLGU9cyx0PVtdKX1pZih0Lmxlbmd0aCYmbi5fZmxhZ3MuZXJyb3IpaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fZmxhZ3MuZXJyb3Ipe3Q9bi5fZmxhZ3MuZXJyb3IodCksQXJyYXkuaXNBcnJheSh0KXx8KHQ9W3RdKTtmb3IoY29uc3QgZSBvZiB0KXMoZSBpbnN0YW5jZW9mIEVycm9yfHxlIGluc3RhbmNlb2YgbC5SZXBvcnQsXCJlcnJvcigpIG11c3QgcmV0dXJuIGFuIEVycm9yIG9iamVjdFwiKX1lbHNlIHQ9W24uX2ZsYWdzLmVycm9yXTtpZih2b2lkIDA9PT1lKXtjb25zdCBzPXUuZGVmYXVsdChcImRlZmF1bHRcIixlLHQscik7by5tYWluc3RheS50cmFjZXIudmFsdWUobyxcImRlZmF1bHRcIixlLHMpLGU9c31pZihuLl9mbGFncy5jYXN0JiZ2b2lkIDAhPT1lKXtjb25zdCB0PW4uX2RlZmluaXRpb24uY2FzdFtuLl9mbGFncy5jYXN0XTtpZih0LmZyb20oZSkpe2NvbnN0IHM9dC50byhlLHIpO28ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sXCJjYXN0XCIsZSxzLG4uX2ZsYWdzLmNhc3QpLGU9c319aWYobi4kX3Rlcm1zLmV4dGVybmFscyYmYS5leHRlcm5hbHMmJiExIT09YS5fZXh0ZXJuYWxzKWZvcihjb25zdHttZXRob2Q6ZX1vZiBuLiRfdGVybXMuZXh0ZXJuYWxzKW8ubWFpbnN0YXkuZXh0ZXJuYWxzLnB1c2goe21ldGhvZDplLHBhdGg6by5wYXRoLGxhYmVsOmwubGFiZWwobi5fZmxhZ3MsbyxhKX0pO2NvbnN0IGk9e3ZhbHVlOmUsZXJyb3JzOnQubGVuZ3RoP3Q6bnVsbH07cmV0dXJuIG4uX2ZsYWdzLnJlc3VsdCYmKGkudmFsdWU9XCJzdHJpcFwiPT09bi5fZmxhZ3MucmVzdWx0P3ZvaWQgMDpyLm9yaWdpbmFsLG8ubWFpbnN0YXkudHJhY2VyLnZhbHVlKG8sbi5fZmxhZ3MucmVzdWx0LGUsaS52YWx1ZSksby5zaGFkb3coZSxuLl9mbGFncy5yZXN1bHQpKSxuLl9jYWNoZSYmITEhPT1hLmNhY2hlJiYhbi5fcmVmcy5sZW5ndGgmJm4uX2NhY2hlLnNldChyLm9yaWdpbmFsLGkpLGl9LHUucHJlZnM9ZnVuY3Rpb24oZSx0KXtjb25zdCByPXQ9PT1pLmRlZmF1bHRzO3JldHVybiByJiZlLl9wcmVmZXJlbmNlc1tpLnN5bWJvbHMucHJlZnNdP2UuX3ByZWZlcmVuY2VzW2kuc3ltYm9scy5wcmVmc106KHQ9aS5wcmVmZXJlbmNlcyh0LGUuX3ByZWZlcmVuY2VzKSxyJiYoZS5fcHJlZmVyZW5jZXNbaS5zeW1ib2xzLnByZWZzXT10KSx0KX0sdS5kZWZhdWx0PWZ1bmN0aW9uKGUsdCxyLHMpe2NvbnN0e3NjaGVtYTpvLHN0YXRlOmEscHJlZnM6bH09cyxjPW8uX2ZsYWdzW2VdO2lmKGwubm9EZWZhdWx0c3x8dm9pZCAwPT09YylyZXR1cm4gdDtpZihhLm1haW5zdGF5LnRyYWNlci5sb2cobyxhLFwicnVsZVwiLGUsXCJmdWxsXCIpLCFjKXJldHVybiBjO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpe2NvbnN0IHQ9Yy5sZW5ndGg/W24oYS5hbmNlc3RvcnNbMF0pLHNdOltdO3RyeXtyZXR1cm4gYyguLi50KX1jYXRjaCh0KXtyZXR1cm4gdm9pZCByLnB1c2goby4kX2NyZWF0ZUVycm9yKFwiYW55LlwiLmNvbmNhdChlKSxudWxsLHtlcnJvcjp0fSxhLGwpKX19cmV0dXJuXCJvYmplY3RcIiE9dHlwZW9mIGM/YzpjW2kuc3ltYm9scy5saXRlcmFsXT9jLmxpdGVyYWw6aS5pc1Jlc29sdmFibGUoYyk/Yy5yZXNvbHZlKHQsYSxsKTpuKGMpfSx1LnRyaW09ZnVuY3Rpb24oZSx0KXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gZTtjb25zdCByPXQuJF9nZXRSdWxlKFwidHJpbVwiKTtyZXR1cm4gciYmci5hcmdzLmVuYWJsZWQ/ZS50cmltKCk6ZX0sdS5pZ25vcmU9e2FjdGl2ZTohMSxkZWJ1ZzpvLGVudHJ5Om8sZmlsdGVyOm8sbG9nOm8scmVzb2x2ZTpvLHZhbHVlOm99fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7fX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyKSxuPXIoNiksbz1yKDEpLGE9e3ZhbHVlOlN5bWJvbChcInZhbHVlXCIpfTtlLmV4cG9ydHM9YS5TdGF0ZT1jbGFzc3tjb25zdHJ1Y3RvcihlLHQscil7dGhpcy5wYXRoPWUsdGhpcy5hbmNlc3RvcnM9dCx0aGlzLm1haW5zdGF5PXIubWFpbnN0YXksdGhpcy5zY2hlbWFzPXIuc2NoZW1hcyx0aGlzLmRlYnVnPW51bGx9bG9jYWxpemUoZSx0PW51bGwscj1udWxsKXtjb25zdCBzPW5ldyBhLlN0YXRlKGUsdCx0aGlzKTtyZXR1cm4gciYmcy5zY2hlbWFzJiYocy5zY2hlbWFzPVthLnNjaGVtYXMociksLi4ucy5zY2hlbWFzXSksc31uZXN0KGUsdCl7Y29uc3Qgcj1uZXcgYS5TdGF0ZSh0aGlzLnBhdGgsdGhpcy5hbmNlc3RvcnMsdGhpcyk7cmV0dXJuIHIuc2NoZW1hcz1yLnNjaGVtYXMmJlthLnNjaGVtYXMoZSksLi4uci5zY2hlbWFzXSxyLmRlYnVnPXQscn1zaGFkb3coZSx0KXt0aGlzLm1haW5zdGF5LnNoYWRvdz10aGlzLm1haW5zdGF5LnNoYWRvd3x8bmV3IGEuU2hhZG93LHRoaXMubWFpbnN0YXkuc2hhZG93LnNldCh0aGlzLnBhdGgsZSx0KX1zbmFwc2hvdCgpe3RoaXMubWFpbnN0YXkuc2hhZG93JiYodGhpcy5fc25hcHNob3Q9cyh0aGlzLm1haW5zdGF5LnNoYWRvdy5ub2RlKHRoaXMucGF0aCkpKX1yZXN0b3JlKCl7dGhpcy5tYWluc3RheS5zaGFkb3cmJih0aGlzLm1haW5zdGF5LnNoYWRvdy5vdmVycmlkZSh0aGlzLnBhdGgsdGhpcy5fc25hcHNob3QpLHRoaXMuX3NuYXBzaG90PXZvaWQgMCl9fSxhLnNjaGVtYXM9ZnVuY3Rpb24oZSl7cmV0dXJuIG8uaXNTY2hlbWEoZSk/e3NjaGVtYTplfTplfSxhLlNoYWRvdz1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuX3ZhbHVlcz1udWxsfXNldChlLHQscil7aWYoIWUubGVuZ3RoKXJldHVybjtpZihcInN0cmlwXCI9PT1yJiZcIm51bWJlclwiPT10eXBlb2YgZVtlLmxlbmd0aC0xXSlyZXR1cm47dGhpcy5fdmFsdWVzPXRoaXMuX3ZhbHVlc3x8bmV3IE1hcDtsZXQgcz10aGlzLl92YWx1ZXM7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDsrK3Qpe2NvbnN0IHI9ZVt0XTtsZXQgbj1zLmdldChyKTtufHwobj1uZXcgTWFwLHMuc2V0KHIsbikpLHM9bn1zW2EudmFsdWVdPXR9Z2V0KGUpe2NvbnN0IHQ9dGhpcy5ub2RlKGUpO2lmKHQpcmV0dXJuIHRbYS52YWx1ZV19bm9kZShlKXtpZih0aGlzLl92YWx1ZXMpcmV0dXJuIG4odGhpcy5fdmFsdWVzLGUse2l0ZXJhYmxlczohMH0pfW92ZXJyaWRlKGUsdCl7aWYoIXRoaXMuX3ZhbHVlcylyZXR1cm47Y29uc3Qgcj1lLnNsaWNlKDAsLTEpLHM9ZVtlLmxlbmd0aC0xXSxvPW4odGhpcy5fdmFsdWVzLHIse2l0ZXJhYmxlczohMH0pO3Q/by5zZXQocyx0KTpvJiZvLmRlbGV0ZShzKX19fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigxMCksbz1yKDYpLGE9cigzKSxpPXIoMSksbD1yKDgpLGM9e307ZS5leHBvcnRzPWEuZXh0ZW5kKHt0eXBlOlwiYXJyYXlcIixmbGFnczp7c2luZ2xlOntkZWZhdWx0OiExfSxzcGFyc2U6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7aXRlbXM6e2luaXQ6W10sbWFuaWZlc3Q6XCJzY2hlbWFcIn0sb3JkZXJlZDp7aW5pdDpbXSxtYW5pZmVzdDpcInNjaGVtYVwifSxfZXhjbHVzaW9uczp7aW5pdDpbXX0sX2luY2x1c2lvbnM6e2luaXQ6W119LF9yZXF1aXJlZHM6e2luaXQ6W119fSxjb2VyY2U6e2Zyb206XCJvYmplY3RcIixtZXRob2QoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpzfSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuO2NvbnN0IG49dC4kX2dldFJ1bGUoXCJzb3J0XCIpO3JldHVybiBuP2Muc29ydCh0LGUsbi5hcmdzLm9wdGlvbnMscixzKTp2b2lkIDB9fSx2YWxpZGF0ZShlLHtzY2hlbWE6dCxlcnJvcjpyfSl7aWYoIUFycmF5LmlzQXJyYXkoZSkpe2lmKHQuX2ZsYWdzLnNpbmdsZSl7Y29uc3QgdD1bZV07cmV0dXJuIHRbaS5zeW1ib2xzLmFycmF5U2luZ2xlXT0hMCx7dmFsdWU6dH19cmV0dXJue2Vycm9yczpyKFwiYXJyYXkuYmFzZVwiKX19aWYodC4kX2dldFJ1bGUoXCJpdGVtc1wiKXx8dC4kX3Rlcm1zLmV4dGVybmFscylyZXR1cm57dmFsdWU6ZS5zbGljZSgpfX0scnVsZXM6e2hhczp7bWV0aG9kKGUpe2U9dGhpcy4kX2NvbXBpbGUoZSx7YXBwZW5kUGF0aDohMH0pO2NvbnN0IHQ9dGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJoYXNcIixhcmdzOntzY2hlbWE6ZX19KTtyZXR1cm4gdC4kX211dGF0ZVJlZ2lzdGVyKGUpLHR9LHZhbGlkYXRlKGUse3N0YXRlOnQscHJlZnM6cixlcnJvcjpzfSx7c2NoZW1hOm59KXtjb25zdCBvPVtlLC4uLnQuYW5jZXN0b3JzXTtmb3IobGV0IHM9MDtzPGUubGVuZ3RoOysrcyl7Y29uc3QgYT10LmxvY2FsaXplKFsuLi50LnBhdGgsc10sbyxuKTtpZihuLiRfbWF0Y2goZVtzXSxhLHIpKXJldHVybiBlfWNvbnN0IGE9bi5fZmxhZ3MubGFiZWw7cmV0dXJuIGE/cyhcImFycmF5Lmhhc0tub3duXCIse3BhdHRlcm5MYWJlbDphfSk6cyhcImFycmF5Lmhhc1Vua25vd25cIixudWxsKX0sbXVsdGk6ITB9LGl0ZW1zOnttZXRob2QoLi4uZSl7aS52ZXJpZnlGbGF0KGUsXCJpdGVtc1wiKTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIik7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IHM9aS50cnlXaXRoUGF0aCgoKT0+dGhpcy4kX2NvbXBpbGUoZVtyXSkscix7YXBwZW5kOiEwfSk7dC4kX3Rlcm1zLml0ZW1zLnB1c2gocyl9cmV0dXJuIHQuJF9tdXRhdGVSZWJ1aWxkKCl9LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIsc3RhdGU6cyxwcmVmczpufSl7Y29uc3Qgbz10LiRfdGVybXMuX3JlcXVpcmVkcy5zbGljZSgpLGE9dC4kX3Rlcm1zLm9yZGVyZWQuc2xpY2UoKSxsPVsuLi50LiRfdGVybXMuX2luY2x1c2lvbnMsLi4ub10sdT0hZVtpLnN5bWJvbHMuYXJyYXlTaW5nbGVdO2RlbGV0ZSBlW2kuc3ltYm9scy5hcnJheVNpbmdsZV07Y29uc3QgZj1bXTtsZXQgbT1lLmxlbmd0aDtmb3IobGV0IGk9MDtpPG07KytpKXtjb25zdCBoPWVbaV07bGV0IGQ9ITEscD0hMTtjb25zdCBnPXU/aTpuZXcgTnVtYmVyKGkpLHk9Wy4uLnMucGF0aCxnXTtpZighdC5fZmxhZ3Muc3BhcnNlJiZ2b2lkIDA9PT1oKXtpZihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2Euc2hpZnQoKTtjb250aW51ZX1jb25zdCBiPVtlLC4uLnMuYW5jZXN0b3JzXTtmb3IoY29uc3QgZSBvZiB0LiRfdGVybXMuX2V4Y2x1c2lvbnMpaWYoZS4kX21hdGNoKGgscy5sb2NhbGl6ZSh5LGIsZSksbix7cHJlc2VuY2U6XCJpZ25vcmVcIn0pKXtpZihmLnB1c2gocihcImFycmF5LmV4Y2x1ZGVzXCIse3BvczppLHZhbHVlOmh9LHMubG9jYWxpemUoeSkpKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7ZD0hMCxhLnNoaWZ0KCk7YnJlYWt9aWYoZCljb250aW51ZTtpZih0LiRfdGVybXMub3JkZXJlZC5sZW5ndGgpe2lmKGEubGVuZ3RoKXtjb25zdCBvPWEuc2hpZnQoKSxsPW8uJF92YWxpZGF0ZShoLHMubG9jYWxpemUoeSxiLG8pLG4pO2lmKGwuZXJyb3JzKXtpZihmLnB1c2goLi4ubC5lcnJvcnMpLG4uYWJvcnRFYXJseSlyZXR1cm4gZn1lbHNlIGlmKFwic3RyaXBcIj09PW8uX2ZsYWdzLnJlc3VsdCljLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tO2Vsc2V7aWYoIXQuX2ZsYWdzLnNwYXJzZSYmdm9pZCAwPT09bC52YWx1ZSl7aWYoZi5wdXNoKHIoXCJhcnJheS5zcGFyc2VcIix7a2V5OmcscGF0aDp5LHBvczppLHZhbHVlOnZvaWQgMH0scy5sb2NhbGl6ZSh5KSkpLG4uYWJvcnRFYXJseSlyZXR1cm4gZjtjb250aW51ZX1lW2ldPWwudmFsdWV9Y29udGludWV9aWYoIXQuJF90ZXJtcy5pdGVtcy5sZW5ndGgpe2lmKGYucHVzaChyKFwiYXJyYXkub3JkZXJlZExlbmd0aFwiLHtwb3M6aSxsaW1pdDp0LiRfdGVybXMub3JkZXJlZC5sZW5ndGh9KSksbi5hYm9ydEVhcmx5KXJldHVybiBmO2JyZWFrfX1jb25zdCB2PVtdO2xldCBfPW8ubGVuZ3RoO2ZvcihsZXQgYT0wO2E8XzsrK2Epe2NvbnN0IGw9cy5sb2NhbGl6ZSh5LGIsb1thXSk7bC5zbmFwc2hvdCgpO2NvbnN0IHU9b1thXS4kX3ZhbGlkYXRlKGgsbCxuKTtpZih2W2FdPXUsIXUuZXJyb3JzKXtpZihlW2ldPXUudmFsdWUscD0hMCxjLmZhc3RTcGxpY2UobyxhKSwtLWEsLS1fLCF0Ll9mbGFncy5zcGFyc2UmJnZvaWQgMD09PXUudmFsdWUmJihmLnB1c2gocihcImFycmF5LnNwYXJzZVwiLHtrZXk6ZyxwYXRoOnkscG9zOmksdmFsdWU6dm9pZCAwfSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KSlyZXR1cm4gZjticmVha31sLnJlc3RvcmUoKX1pZihwKWNvbnRpbnVlO2NvbnN0IHc9bi5zdHJpcFVua25vd24mJiEhbi5zdHJpcFVua25vd24uYXJyYXlzfHwhMTtfPWwubGVuZ3RoO2Zvcihjb25zdCBhIG9mIGwpe2xldCBsO2NvbnN0IHU9by5pbmRleE9mKGEpO2lmKC0xIT09dSlsPXZbdV07ZWxzZXtjb25zdCBvPXMubG9jYWxpemUoeSxiLGEpO2lmKG8uc25hcHNob3QoKSxsPWEuJF92YWxpZGF0ZShoLG8sbiksIWwuZXJyb3JzKXtcInN0cmlwXCI9PT1hLl9mbGFncy5yZXN1bHQ/KGMuZmFzdFNwbGljZShlLGkpLC0taSwtLW0pOnQuX2ZsYWdzLnNwYXJzZXx8dm9pZCAwIT09bC52YWx1ZT9lW2ldPWwudmFsdWU6KGYucHVzaChyKFwiYXJyYXkuc3BhcnNlXCIse2tleTpnLHBhdGg6eSxwb3M6aSx2YWx1ZTp2b2lkIDB9LHMubG9jYWxpemUoeSkpKSxkPSEwKSxwPSEwO2JyZWFrfW8ucmVzdG9yZSgpfWlmKDE9PT1fKXtpZih3KXtjLmZhc3RTcGxpY2UoZSxpKSwtLWksLS1tLHA9ITA7YnJlYWt9aWYoZi5wdXNoKC4uLmwuZXJyb3JzKSxuLmFib3J0RWFybHkpcmV0dXJuIGY7ZD0hMDticmVha319aWYoIWQmJih0LiRfdGVybXMuX2luY2x1c2lvbnMubGVuZ3RoJiYhcCkpe2lmKHcpe2MuZmFzdFNwbGljZShlLGkpLC0taSwtLW07Y29udGludWV9aWYoZi5wdXNoKHIoXCJhcnJheS5pbmNsdWRlc1wiLHtwb3M6aSx2YWx1ZTpofSxzLmxvY2FsaXplKHkpKSksbi5hYm9ydEVhcmx5KXJldHVybiBmfX1yZXR1cm4gby5sZW5ndGgmJmMuZmlsbE1pc3NlZEVycm9ycyh0LGYsbyxlLHMsbiksYS5sZW5ndGgmJmMuZmlsbE9yZGVyZWRFcnJvcnModCxmLGEsZSxzLG4pLGYubGVuZ3RoP2Y6ZX0scHJpb3JpdHk6ITAsbWFuaWZlc3Q6ITF9LGxlbmd0aDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPVwifSl9LHZhbGlkYXRlOihlLHQse2xpbWl0OnJ9LHtuYW1lOnMsb3BlcmF0b3I6bixhcmdzOm99KT0+aS5jb21wYXJlKGUubGVuZ3RoLHIsbik/ZTp0LmVycm9yKFwiYXJyYXkuXCIrcyx7bGltaXQ6by5saW1pdCx2YWx1ZTplfSksYXJnczpbe25hbWU6XCJsaW1pdFwiLHJlZjohMCxhc3NlcnQ6aS5saW1pdCxtZXNzYWdlOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn1dfSxtYXg6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhcIixtZXRob2Q6XCJsZW5ndGhcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImxlbmd0aFwiLGFyZ3M6e2xpbWl0OmV9LG9wZXJhdG9yOlwiPj1cIn0pfX0sb3JkZXJlZDp7bWV0aG9kKC4uLmUpe2kudmVyaWZ5RmxhdChlLFwib3JkZXJlZFwiKTtjb25zdCB0PXRoaXMuJF9hZGRSdWxlKFwiaXRlbXNcIik7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3Ipe2NvbnN0IHM9aS50cnlXaXRoUGF0aCgoKT0+dGhpcy4kX2NvbXBpbGUoZVtyXSkscix7YXBwZW5kOiEwfSk7Yy52YWxpZGF0ZVNpbmdsZShzLHQpLHQuJF9tdXRhdGVSZWdpc3RlcihzKSx0LiRfdGVybXMub3JkZXJlZC5wdXNoKHMpfXJldHVybiB0LiRfbXV0YXRlUmVidWlsZCgpfX0sc2luZ2xlOnttZXRob2QoZSl7Y29uc3QgdD12b2lkIDA9PT1lfHwhIWU7cmV0dXJuIHMoIXR8fCF0aGlzLl9mbGFncy5fYXJyYXlJdGVtcyxcIkNhbm5vdCBzcGVjaWZ5IHNpbmdsZSBydWxlIHdoZW4gYXJyYXkgaGFzIGFycmF5IGl0ZW1zXCIpLHRoaXMuJF9zZXRGbGFnKFwic2luZ2xlXCIsdCl9fSxzb3J0OnttZXRob2QoZT17fSl7aS5hc3NlcnRPcHRpb25zKGUsW1wiYnlcIixcIm9yZGVyXCJdKTtjb25zdCB0PXtvcmRlcjplLm9yZGVyfHxcImFzY2VuZGluZ1wifTtyZXR1cm4gZS5ieSYmKHQuYnk9bC5yZWYoZS5ieSx7YW5jZXN0b3I6MH0pLHMoIXQuYnkuYW5jZXN0b3IsXCJDYW5ub3Qgc29ydCBieSBhbmNlc3RvclwiKSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJzb3J0XCIsYXJnczp7b3B0aW9uczp0fX0pfSx2YWxpZGF0ZShlLHtlcnJvcjp0LHN0YXRlOnIscHJlZnM6cyxzY2hlbWE6bn0se29wdGlvbnM6b30pe2NvbnN0e3ZhbHVlOmEsZXJyb3JzOml9PWMuc29ydChuLGUsbyxyLHMpO2lmKGkpcmV0dXJuIGk7Zm9yKGxldCByPTA7cjxlLmxlbmd0aDsrK3IpaWYoZVtyXSE9PWFbcl0pcmV0dXJuIHQoXCJhcnJheS5zb3J0XCIse29yZGVyOm8ub3JkZXIsYnk6by5ieT9vLmJ5LmtleTpcInZhbHVlXCJ9KTtyZXR1cm4gZX0sY29udmVydDohMH0sc3BhcnNlOnttZXRob2QoZSl7Y29uc3QgdD12b2lkIDA9PT1lfHwhIWU7cmV0dXJuIHRoaXMuX2ZsYWdzLnNwYXJzZT09PXQ/dGhpczoodD90aGlzLmNsb25lKCk6dGhpcy4kX2FkZFJ1bGUoXCJpdGVtc1wiKSkuJF9zZXRGbGFnKFwic3BhcnNlXCIsdCx7Y2xvbmU6ITF9KX19LHVuaXF1ZTp7bWV0aG9kKGUsdD17fSl7cyghZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJzdHJpbmdcIj09dHlwZW9mIGUsXCJjb21wYXJhdG9yIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1wiKSxpLmFzc2VydE9wdGlvbnModCxbXCJpZ25vcmVVbmRlZmluZWRcIixcInNlcGFyYXRvclwiXSk7Y29uc3Qgcj17bmFtZTpcInVuaXF1ZVwiLGFyZ3M6e29wdGlvbnM6dCxjb21wYXJhdG9yOmV9fTtpZihlKWlmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXtjb25zdCBzPWkuZGVmYXVsdCh0LnNlcGFyYXRvcixcIi5cIik7ci5wYXRoPXM/ZS5zcGxpdChzKTpbZV19ZWxzZSByLmNvbXBhcmF0b3I9ZTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUocil9LHZhbGlkYXRlKGUse3N0YXRlOnQsZXJyb3I6cixzY2hlbWE6YX0se2NvbXBhcmF0b3I6aSxvcHRpb25zOmx9LHtjb21wYXJhdG9yOmMscGF0aDp1fSl7Y29uc3QgZj17c3RyaW5nOk9iamVjdC5jcmVhdGUobnVsbCksbnVtYmVyOk9iamVjdC5jcmVhdGUobnVsbCksdW5kZWZpbmVkOk9iamVjdC5jcmVhdGUobnVsbCksYm9vbGVhbjpPYmplY3QuY3JlYXRlKG51bGwpLG9iamVjdDpuZXcgTWFwLGZ1bmN0aW9uOm5ldyBNYXAsY3VzdG9tOm5ldyBNYXB9LG09Y3x8bixoPWwuaWdub3JlVW5kZWZpbmVkO2ZvcihsZXQgbj0wO248ZS5sZW5ndGg7KytuKXtjb25zdCBhPXU/byhlW25dLHUpOmVbbl0sbD1jP2YuY3VzdG9tOmZbdHlwZW9mIGFdO2lmKHMobCxcIkZhaWxlZCB0byBmaW5kIHVuaXF1ZSBtYXAgY29udGFpbmVyIGZvciB0eXBlXCIsdHlwZW9mIGEpLGwgaW5zdGFuY2VvZiBNYXApe2NvbnN0IHM9bC5lbnRyaWVzKCk7bGV0IG87Zm9yKDshKG89cy5uZXh0KCkpLmRvbmU7KWlmKG0oby52YWx1ZVswXSxhKSl7Y29uc3Qgcz10LmxvY2FsaXplKFsuLi50LnBhdGgsbl0sW2UsLi4udC5hbmNlc3RvcnNdKSxhPXtwb3M6bix2YWx1ZTplW25dLGR1cGVQb3M6by52YWx1ZVsxXSxkdXBlVmFsdWU6ZVtvLnZhbHVlWzFdXX07cmV0dXJuIHUmJihhLnBhdGg9aSkscihcImFycmF5LnVuaXF1ZVwiLGEscyl9bC5zZXQoYSxuKX1lbHNle2lmKCghaHx8dm9pZCAwIT09YSkmJnZvaWQgMCE9PWxbYV0pe2NvbnN0IHM9e3BvczpuLHZhbHVlOmVbbl0sZHVwZVBvczpsW2FdLGR1cGVWYWx1ZTplW2xbYV1dfTtyZXR1cm4gdSYmKHMucGF0aD1pKSxyKFwiYXJyYXkudW5pcXVlXCIscyx0LmxvY2FsaXplKFsuLi50LnBhdGgsbl0sW2UsLi4udC5hbmNlc3RvcnNdKSl9bFthXT1ufX1yZXR1cm4gZX0sYXJnczpbXCJjb21wYXJhdG9yXCIsXCJvcHRpb25zXCJdLG11bHRpOiEwfX0sY2FzdDp7c2V0Ontmcm9tOkFycmF5LmlzQXJyYXksdG86KGUsdCk9Pm5ldyBTZXQoZSl9fSxyZWJ1aWxkKGUpe2UuJF90ZXJtcy5faW5jbHVzaW9ucz1bXSxlLiRfdGVybXMuX2V4Y2x1c2lvbnM9W10sZS4kX3Rlcm1zLl9yZXF1aXJlZHM9W107Zm9yKGNvbnN0IHQgb2YgZS4kX3Rlcm1zLml0ZW1zKWMudmFsaWRhdGVTaW5nbGUodCxlKSxcInJlcXVpcmVkXCI9PT10Ll9mbGFncy5wcmVzZW5jZT9lLiRfdGVybXMuX3JlcXVpcmVkcy5wdXNoKHQpOlwiZm9yYmlkZGVuXCI9PT10Ll9mbGFncy5wcmVzZW5jZT9lLiRfdGVybXMuX2V4Y2x1c2lvbnMucHVzaCh0KTplLiRfdGVybXMuX2luY2x1c2lvbnMucHVzaCh0KTtmb3IoY29uc3QgdCBvZiBlLiRfdGVybXMub3JkZXJlZCljLnZhbGlkYXRlU2luZ2xlKHQsZSl9LG1hbmlmZXN0OntidWlsZDooZSx0KT0+KHQuaXRlbXMmJihlPWUuaXRlbXMoLi4udC5pdGVtcykpLHQub3JkZXJlZCYmKGU9ZS5vcmRlcmVkKC4uLnQub3JkZXJlZCkpLGUpfSxtZXNzYWdlczp7XCJhcnJheS5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYW4gYXJyYXlcIixcImFycmF5LmV4Y2x1ZGVzXCI6XCJ7eyNsYWJlbH19IGNvbnRhaW5zIGFuIGV4Y2x1ZGVkIHZhbHVlXCIsXCJhcnJheS5oYXNLbm93blwiOid7eyNsYWJlbH19IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHJlcXVpcmVkIG1hdGNoIGZvciB0eXBlIFwieyNwYXR0ZXJuTGFiZWx9XCInLFwiYXJyYXkuaGFzVW5rbm93blwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSByZXF1aXJlZCBtYXRjaFwiLFwiYXJyYXkuaW5jbHVkZXNcIjpcInt7I2xhYmVsfX0gZG9lcyBub3QgbWF0Y2ggYW55IG9mIHRoZSBhbGxvd2VkIHR5cGVzXCIsXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkQm90aFwiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I2tub3duTWlzc2VzfX0gYW5kIHt7I3Vua25vd25NaXNzZXN9fSBvdGhlciByZXF1aXJlZCB2YWx1ZShzKVwiLFwiYXJyYXkuaW5jbHVkZXNSZXF1aXJlZEtub3duc1wiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I2tub3duTWlzc2VzfX1cIixcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRVbmtub3duc1wiOlwie3sjbGFiZWx9fSBkb2VzIG5vdCBjb250YWluIHt7I3Vua25vd25NaXNzZXN9fSByZXF1aXJlZCB2YWx1ZShzKVwiLFwiYXJyYXkubGVuZ3RoXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5tYXhcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGxlc3MgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19IGl0ZW1zXCIsXCJhcnJheS5taW5cIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IGxlYXN0IHt7I2xpbWl0fX0gaXRlbXNcIixcImFycmF5Lm9yZGVyZWRMZW5ndGhcIjpcInt7I2xhYmVsfX0gbXVzdCBjb250YWluIGF0IG1vc3Qge3sjbGltaXR9fSBpdGVtc1wiLFwiYXJyYXkuc29ydFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIHNvcnRlZCBpbiB7I29yZGVyfSBvcmRlciBieSB7eyNieX19XCIsXCJhcnJheS5zb3J0Lm1pc21hdGNoaW5nXCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBzb3J0ZWQgZHVlIHRvIG1pc21hdGNoaW5nIHR5cGVzXCIsXCJhcnJheS5zb3J0LnVuc3VwcG9ydGVkXCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBzb3J0ZWQgZHVlIHRvIHVuc3VwcG9ydGVkIHR5cGUgeyN0eXBlfVwiLFwiYXJyYXkuc3BhcnNlXCI6XCJ7eyNsYWJlbH19IG11c3Qgbm90IGJlIGEgc3BhcnNlIGFycmF5IGl0ZW1cIixcImFycmF5LnVuaXF1ZVwiOlwie3sjbGFiZWx9fSBjb250YWlucyBhIGR1cGxpY2F0ZSB2YWx1ZVwifX0pLGMuZmlsbE1pc3NlZEVycm9ycz1mdW5jdGlvbihlLHQscixzLG4sbyl7Y29uc3QgYT1bXTtsZXQgaT0wO2Zvcihjb25zdCBlIG9mIHIpe2NvbnN0IHQ9ZS5fZmxhZ3MubGFiZWw7dD9hLnB1c2godCk6KytpfWEubGVuZ3RoP2k/dC5wdXNoKGUuJF9jcmVhdGVFcnJvcihcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRCb3RoXCIscyx7a25vd25NaXNzZXM6YSx1bmtub3duTWlzc2VzOml9LG4sbykpOnQucHVzaChlLiRfY3JlYXRlRXJyb3IoXCJhcnJheS5pbmNsdWRlc1JlcXVpcmVkS25vd25zXCIscyx7a25vd25NaXNzZXM6YX0sbixvKSk6dC5wdXNoKGUuJF9jcmVhdGVFcnJvcihcImFycmF5LmluY2x1ZGVzUmVxdWlyZWRVbmtub3duc1wiLHMse3Vua25vd25NaXNzZXM6aX0sbixvKSl9LGMuZmlsbE9yZGVyZWRFcnJvcnM9ZnVuY3Rpb24oZSx0LHIscyxuLG8pe2NvbnN0IGE9W107Zm9yKGNvbnN0IGUgb2YgcilcInJlcXVpcmVkXCI9PT1lLl9mbGFncy5wcmVzZW5jZSYmYS5wdXNoKGUpO2EubGVuZ3RoJiZjLmZpbGxNaXNzZWRFcnJvcnMoZSx0LGEscyxuLG8pfSxjLmZhc3RTcGxpY2U9ZnVuY3Rpb24oZSx0KXtsZXQgcj10O2Zvcig7cjxlLmxlbmd0aDspZVtyKytdPWVbcl07LS1lLmxlbmd0aH0sYy52YWxpZGF0ZVNpbmdsZT1mdW5jdGlvbihlLHQpeyhcImFycmF5XCI9PT1lLnR5cGV8fGUuX2ZsYWdzLl9hcnJheUl0ZW1zKSYmKHMoIXQuX2ZsYWdzLnNpbmdsZSxcIkNhbm5vdCBzcGVjaWZ5IGFycmF5IGl0ZW0gd2l0aCBzaW5nbGUgcnVsZSBlbmFibGVkXCIpLHQuJF9zZXRGbGFnKFwiX2FycmF5SXRlbXNcIiwhMCx7Y2xvbmU6ITF9KSl9LGMuc29ydD1mdW5jdGlvbihlLHQscixzLG4pe2NvbnN0IG89XCJhc2NlbmRpbmdcIj09PXIub3JkZXI/MTotMSxhPS0xKm8saT1vLGw9KGwsdSk9PntsZXQgZj1jLmNvbXBhcmUobCx1LGEsaSk7aWYobnVsbCE9PWYpcmV0dXJuIGY7aWYoci5ieSYmKGw9ci5ieS5yZXNvbHZlKGwscyxuKSx1PXIuYnkucmVzb2x2ZSh1LHMsbikpLGY9Yy5jb21wYXJlKGwsdSxhLGkpLG51bGwhPT1mKXJldHVybiBmO2NvbnN0IG09dHlwZW9mIGw7aWYobSE9PXR5cGVvZiB1KXRocm93IGUuJF9jcmVhdGVFcnJvcihcImFycmF5LnNvcnQubWlzbWF0Y2hpbmdcIix0LG51bGwscyxuKTtpZihcIm51bWJlclwiIT09bSYmXCJzdHJpbmdcIiE9PW0pdGhyb3cgZS4kX2NyZWF0ZUVycm9yKFwiYXJyYXkuc29ydC51bnN1cHBvcnRlZFwiLHQse3R5cGU6bX0scyxuKTtyZXR1cm5cIm51bWJlclwiPT09bT8obC11KSpvOmw8dT9hOml9O3RyeXtyZXR1cm57dmFsdWU6dC5zbGljZSgpLnNvcnQobCl9fWNhdGNoKGUpe3JldHVybntlcnJvcnM6ZX19fSxjLmNvbXBhcmU9ZnVuY3Rpb24oZSx0LHIscyl7cmV0dXJuIGU9PT10PzA6dm9pZCAwPT09ZT8xOnZvaWQgMD09PXQ/LTE6bnVsbD09PWU/czpudWxsPT09dD9yOm51bGx9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDIxKSxpPXtpc0Jvb2w6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlfX07ZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwiYm9vbGVhblwiLGZsYWdzOntzZW5zaXRpdmU6e2RlZmF1bHQ6ITF9fSx0ZXJtczp7ZmFsc3k6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInZhbHVlc1wifSx0cnV0aHk6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInZhbHVlc1wifX0sY29lcmNlKGUse3NjaGVtYTp0fSl7aWYoXCJib29sZWFuXCIhPXR5cGVvZiBlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSl7Y29uc3Qgcj10Ll9mbGFncy5zZW5zaXRpdmU/ZTplLnRvTG93ZXJDYXNlKCk7ZT1cInRydWVcIj09PXJ8fFwiZmFsc2VcIiE9PXImJmV9cmV0dXJuXCJib29sZWFuXCIhPXR5cGVvZiBlJiYoZT10LiRfdGVybXMudHJ1dGh5JiZ0LiRfdGVybXMudHJ1dGh5LmhhcyhlLG51bGwsbnVsbCwhdC5fZmxhZ3Muc2Vuc2l0aXZlKXx8KCF0LiRfdGVybXMuZmFsc3l8fCF0LiRfdGVybXMuZmFsc3kuaGFzKGUsbnVsbCxudWxsLCF0Ll9mbGFncy5zZW5zaXRpdmUpKSYmZSkse3ZhbHVlOmV9fX0sdmFsaWRhdGUoZSx7ZXJyb3I6dH0pe2lmKFwiYm9vbGVhblwiIT10eXBlb2YgZSlyZXR1cm57dmFsdWU6ZSxlcnJvcnM6dChcImJvb2xlYW4uYmFzZVwiKX19LHJ1bGVzOnt0cnV0aHk6e21ldGhvZCguLi5lKXtvLnZlcmlmeUZsYXQoZSxcInRydXRoeVwiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTt0LiRfdGVybXMudHJ1dGh5PXQuJF90ZXJtcy50cnV0aHl8fG5ldyBhO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWVbcl07cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgdHJ1dGh5IHdpdGggdW5kZWZpbmVkXCIpLHQuJF90ZXJtcy50cnV0aHkuYWRkKG4pfXJldHVybiB0fX0sZmFsc3k6e21ldGhvZCguLi5lKXtvLnZlcmlmeUZsYXQoZSxcImZhbHN5XCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpO3QuJF90ZXJtcy5mYWxzeT10LiRfdGVybXMuZmFsc3l8fG5ldyBhO2ZvcihsZXQgcj0wO3I8ZS5sZW5ndGg7KytyKXtjb25zdCBuPWVbcl07cyh2b2lkIDAhPT1uLFwiQ2Fubm90IGNhbGwgZmFsc3kgd2l0aCB1bmRlZmluZWRcIiksdC4kX3Rlcm1zLmZhbHN5LmFkZChuKX1yZXR1cm4gdH19LHNlbnNpdGl2ZTp7bWV0aG9kKGU9ITApe3JldHVybiB0aGlzLiRfc2V0RmxhZyhcInNlbnNpdGl2ZVwiLGUpfX19LGNhc3Q6e251bWJlcjp7ZnJvbTppLmlzQm9vbCx0bzooZSx0KT0+ZT8xOjB9LHN0cmluZzp7ZnJvbTppLmlzQm9vbCx0bzooZSx0KT0+ZT9cInRydWVcIjpcImZhbHNlXCJ9fSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0LnRydXRoeSYmKGU9ZS50cnV0aHkoLi4udC50cnV0aHkpKSx0LmZhbHN5JiYoZT1lLmZhbHN5KC4uLnQuZmFsc3kpKSxlKX0sbWVzc2FnZXM6e1wiYm9vbGVhbi5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBib29sZWFuXCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDMpLG89cigxKSxhPXIoNyksaT17aXNEYXRlOmZ1bmN0aW9uKGUpe3JldHVybiBlIGluc3RhbmNlb2YgRGF0ZX19O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImRhdGVcIixjb2VyY2U6e2Zyb206W1wibnVtYmVyXCIsXCJzdHJpbmdcIl0sbWV0aG9kOihlLHtzY2hlbWE6dH0pPT4oe3ZhbHVlOmkucGFyc2UoZSx0Ll9mbGFncy5mb3JtYXQpfHxlfSl9LHZhbGlkYXRlKGUse3NjaGVtYTp0LGVycm9yOnIscHJlZnM6c30pe2lmKGUgaW5zdGFuY2VvZiBEYXRlJiYhaXNOYU4oZS5nZXRUaW1lKCkpKXJldHVybjtjb25zdCBuPXQuX2ZsYWdzLmZvcm1hdDtyZXR1cm4gcy5jb252ZXJ0JiZuJiZcInN0cmluZ1wiPT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6cihcImRhdGUuZm9ybWF0XCIse2Zvcm1hdDpufSl9Ont2YWx1ZTplLGVycm9yczpyKFwiZGF0ZS5iYXNlXCIpfX0scnVsZXM6e2NvbXBhcmU6e21ldGhvZDohMSx2YWxpZGF0ZShlLHQse2RhdGU6cn0se25hbWU6cyxvcGVyYXRvcjpuLGFyZ3M6YX0pe2NvbnN0IGk9XCJub3dcIj09PXI/RGF0ZS5ub3coKTpyLmdldFRpbWUoKTtyZXR1cm4gby5jb21wYXJlKGUuZ2V0VGltZSgpLGksbik/ZTp0LmVycm9yKFwiZGF0ZS5cIitzLHtsaW1pdDphLmRhdGUsdmFsdWU6ZX0pfSxhcmdzOlt7bmFtZTpcImRhdGVcIixyZWY6ITAsbm9ybWFsaXplOmU9Plwibm93XCI9PT1lP2U6aS5wYXJzZShlKSxhc3NlcnQ6ZT0+bnVsbCE9PWUsbWVzc2FnZTpcIm11c3QgaGF2ZSBhIHZhbGlkIGRhdGUgZm9ybWF0XCJ9XX0sZm9ybWF0OnttZXRob2QoZSl7cmV0dXJuIHMoW1wiaXNvXCIsXCJqYXZhc2NyaXB0XCIsXCJ1bml4XCJdLmluY2x1ZGVzKGUpLFwiVW5rbm93biBkYXRlIGZvcm1hdFwiLGUpLHRoaXMuJF9zZXRGbGFnKFwiZm9ybWF0XCIsZSl9fSxncmVhdGVyOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3JlYXRlclwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPlwifSl9fSxpc286e21ldGhvZCgpe3JldHVybiB0aGlzLmZvcm1hdChcImlzb1wiKX19LGxlc3M6e21ldGhvZChlKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJsZXNzXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2RhdGU6ZX0sb3BlcmF0b3I6XCI8XCJ9KX19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntkYXRlOmV9LG9wZXJhdG9yOlwiPD1cIn0pfX0sbWluOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluXCIsbWV0aG9kOlwiY29tcGFyZVwiLGFyZ3M6e2RhdGU6ZX0sb3BlcmF0b3I6XCI+PVwifSl9fSx0aW1lc3RhbXA6e21ldGhvZChlPVwiamF2YXNjcmlwdFwiKXtyZXR1cm4gcyhbXCJqYXZhc2NyaXB0XCIsXCJ1bml4XCJdLmluY2x1ZGVzKGUpLCdcInR5cGVcIiBtdXN0IGJlIG9uZSBvZiBcImphdmFzY3JpcHQsIHVuaXhcIicpLHRoaXMuZm9ybWF0KGUpfX19LGNhc3Q6e251bWJlcjp7ZnJvbTppLmlzRGF0ZSx0bzooZSx0KT0+ZS5nZXRUaW1lKCl9LHN0cmluZzp7ZnJvbTppLmlzRGF0ZSx0bzooZSx7cHJlZnM6dH0pPT5hLmRhdGUoZSx0KX19LG1lc3NhZ2VzOntcImRhdGUuYmFzZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgZGF0ZVwiLFwiZGF0ZS5mb3JtYXRcIjone3sjbGFiZWx9fSBtdXN0IGJlIGluIHttc2coXCJkYXRlLmZvcm1hdC5cIiArICNmb3JtYXQpIHx8ICNmb3JtYXR9IGZvcm1hdCcsXCJkYXRlLmdyZWF0ZXJcIjone3sjbGFiZWx9fSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBcInt7I2xpbWl0fX1cIicsXCJkYXRlLmxlc3NcIjone3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiBcInt7I2xpbWl0fX1cIicsXCJkYXRlLm1heFwiOid7eyNsYWJlbH19IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIFwie3sjbGltaXR9fVwiJyxcImRhdGUubWluXCI6J3t7I2xhYmVsfX0gbXVzdCBiZSBsYXJnZXIgdGhhbiBvciBlcXVhbCB0byBcInt7I2xpbWl0fX1cIicsXCJkYXRlLmZvcm1hdC5pc29cIjpcIklTTyA4NjAxIGRhdGVcIixcImRhdGUuZm9ybWF0LmphdmFzY3JpcHRcIjpcInRpbWVzdGFtcCBvciBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXCIsXCJkYXRlLmZvcm1hdC51bml4XCI6XCJ0aW1lc3RhbXAgb3IgbnVtYmVyIG9mIHNlY29uZHNcIn19KSxpLnBhcnNlPWZ1bmN0aW9uKGUsdCl7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIGU7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUmJihpc05hTihlKXx8IWlzRmluaXRlKGUpKSlyZXR1cm4gbnVsbDtpZigvXlxccyokLy50ZXN0KGUpKXJldHVybiBudWxsO2lmKFwiaXNvXCI9PT10KXJldHVybiBvLmlzSXNvRGF0ZShlKT9pLmRhdGUoZS50b1N0cmluZygpKTpudWxsO2NvbnN0IHI9ZTtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmL15bKy1dP1xcZCsoXFwuXFxkKyk/JC8udGVzdChlKSYmKGU9cGFyc2VGbG9hdChlKSksdCl7aWYoXCJqYXZhc2NyaXB0XCI9PT10KXJldHVybiBpLmRhdGUoMSplKTtpZihcInVuaXhcIj09PXQpcmV0dXJuIGkuZGF0ZSgxZTMqZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIG51bGx9cmV0dXJuIGkuZGF0ZShlKX0saS5kYXRlPWZ1bmN0aW9uKGUpe2NvbnN0IHQ9bmV3IERhdGUoZSk7cmV0dXJuIGlzTmFOKHQuZ2V0VGltZSgpKT9udWxsOnR9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyMik7ZS5leHBvcnRzPW4uZXh0ZW5kKHt0eXBlOlwiZnVuY3Rpb25cIixwcm9wZXJ0aWVzOnt0eXBlb2Y6XCJmdW5jdGlvblwifSxydWxlczp7YXJpdHk6e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCxcIm4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJhcml0eVwiLGFyZ3M6e246ZX19KX0sdmFsaWRhdGU6KGUsdCx7bjpyfSk9PmUubGVuZ3RoPT09cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5hcml0eVwiLHtuOnJ9KX0sY2xhc3M6e21ldGhvZCgpe3JldHVybiB0aGlzLiRfYWRkUnVsZShcImNsYXNzXCIpfSx2YWxpZGF0ZTooZSx0KT0+L15cXHMqY2xhc3NcXHMvLnRlc3QoZS50b1N0cmluZygpKT9lOnQuZXJyb3IoXCJmdW5jdGlvbi5jbGFzc1wiLHt2YWx1ZTplfSl9LG1pbkFyaXR5OnttZXRob2QoZSl7cmV0dXJuIHMoTnVtYmVyLmlzU2FmZUludGVnZXIoZSkmJmU+MCxcIm4gbXVzdCBiZSBhIHN0cmljdCBwb3NpdGl2ZSBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibWluQXJpdHlcIixhcmdzOntuOmV9fSl9LHZhbGlkYXRlOihlLHQse246cn0pPT5lLmxlbmd0aD49cj9lOnQuZXJyb3IoXCJmdW5jdGlvbi5taW5Bcml0eVwiLHtuOnJ9KX0sbWF4QXJpdHk6e21ldGhvZChlKXtyZXR1cm4gcyhOdW1iZXIuaXNTYWZlSW50ZWdlcihlKSYmZT49MCxcIm4gbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJtYXhBcml0eVwiLGFyZ3M6e246ZX19KX0sdmFsaWRhdGU6KGUsdCx7bjpyfSk9PmUubGVuZ3RoPD1yP2U6dC5lcnJvcihcImZ1bmN0aW9uLm1heEFyaXR5XCIse246cn0pfX0sbWVzc2FnZXM6e1wiZnVuY3Rpb24uYXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IG9mIHt7I259fVwiLFwiZnVuY3Rpb24uY2xhc3NcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIGNsYXNzXCIsXCJmdW5jdGlvbi5tYXhBcml0eVwiOlwie3sjbGFiZWx9fSBtdXN0IGhhdmUgYW4gYXJpdHkgbGVzc2VyIG9yIGVxdWFsIHRvIHt7I259fVwiLFwiZnVuY3Rpb24ubWluQXJpdHlcIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIGFuIGFyaXR5IGdyZWF0ZXIgb3IgZXF1YWwgdG8ge3sjbn19XCJ9fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtjb25zdCBzPXIoMCksbj1yKDIpLG89cigyMCksYT1yKDYpLGk9e307ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyPXt9KXtpZihzKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLFwiSW52YWxpZCBkZWZhdWx0cyB2YWx1ZTogbXVzdCBiZSBhbiBvYmplY3RcIikscyghdHx8ITA9PT10fHxcIm9iamVjdFwiPT10eXBlb2YgdCxcIkludmFsaWQgc291cmNlIHZhbHVlOiBtdXN0IGJlIHRydWUsIGZhbHN5IG9yIGFuIG9iamVjdFwiKSxzKFwib2JqZWN0XCI9PXR5cGVvZiByLFwiSW52YWxpZCBvcHRpb25zOiBtdXN0IGJlIGFuIG9iamVjdFwiKSwhdClyZXR1cm4gbnVsbDtpZihyLnNoYWxsb3cpcmV0dXJuIGkuYXBwbHlUb0RlZmF1bHRzV2l0aFNoYWxsb3coZSx0LHIpO2NvbnN0IGE9bihlKTtpZighMD09PXQpcmV0dXJuIGE7Y29uc3QgbD12b2lkIDAhPT1yLm51bGxPdmVycmlkZSYmci5udWxsT3ZlcnJpZGU7cmV0dXJuIG8oYSx0LHtudWxsT3ZlcnJpZGU6bCxtZXJnZUFycmF5czohMX0pfSxpLmFwcGx5VG9EZWZhdWx0c1dpdGhTaGFsbG93PWZ1bmN0aW9uKGUsdCxyKXtjb25zdCBsPXIuc2hhbGxvdztzKEFycmF5LmlzQXJyYXkobCksXCJJbnZhbGlkIGtleXNcIik7Y29uc3QgYz1uZXcgTWFwLHU9ITA9PT10P251bGw6bmV3IFNldDtmb3IobGV0IHIgb2YgbCl7cj1BcnJheS5pc0FycmF5KHIpP3I6ci5zcGxpdChcIi5cIik7Y29uc3Qgcz1hKGUscik7cyYmXCJvYmplY3RcIj09dHlwZW9mIHM/Yy5zZXQocyx1JiZhKHQscil8fHMpOnUmJnUuYWRkKHIpfWNvbnN0IGY9bihlLHt9LGMpO2lmKCF1KXJldHVybiBmO2Zvcihjb25zdCBlIG9mIHUpaS5yZWFjaENvcHkoZix0LGUpO3JldHVybiBvKGYsdCx7bWVyZ2VBcnJheXM6ITEsbnVsbE92ZXJyaWRlOiExfSl9LGkucmVhY2hDb3B5PWZ1bmN0aW9uKGUsdCxyKXtmb3IoY29uc3QgZSBvZiByKXtpZighKGUgaW4gdCkpcmV0dXJuO3Q9dFtlXX1jb25zdCBzPXQ7bGV0IG49ZTtmb3IobGV0IGU9MDtlPHIubGVuZ3RoLTE7KytlKXtjb25zdCB0PXJbZV07XCJvYmplY3RcIiE9dHlwZW9mIG5bdF0mJihuW3RdPXt9KSxuPW5bdF19bltyW3IubGVuZ3RoLTFdXT1zfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXt9O3QuU29ydGVyPWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5faXRlbXM9W10sdGhpcy5ub2Rlcz1bXX1hZGQoZSx0KXtjb25zdCByPVtdLmNvbmNhdCgodD10fHx7fSkuYmVmb3JlfHxbXSksbj1bXS5jb25jYXQodC5hZnRlcnx8W10pLG89dC5ncm91cHx8XCI/XCIsYT10LnNvcnR8fDA7cyghci5pbmNsdWRlcyhvKSxcIkl0ZW0gY2Fubm90IGNvbWUgYmVmb3JlIGl0c2VsZjogXCIuY29uY2F0KG8pKSxzKCFyLmluY2x1ZGVzKFwiP1wiKSxcIkl0ZW0gY2Fubm90IGNvbWUgYmVmb3JlIHVuYXNzb2NpYXRlZCBpdGVtc1wiKSxzKCFuLmluY2x1ZGVzKG8pLFwiSXRlbSBjYW5ub3QgY29tZSBhZnRlciBpdHNlbGY6IFwiLmNvbmNhdChvKSkscyghbi5pbmNsdWRlcyhcIj9cIiksXCJJdGVtIGNhbm5vdCBjb21lIGFmdGVyIHVuYXNzb2NpYXRlZCBpdGVtc1wiKSxBcnJheS5pc0FycmF5KGUpfHwoZT1bZV0pO2Zvcihjb25zdCB0IG9mIGUpe2NvbnN0IGU9e3NlcTp0aGlzLl9pdGVtcy5sZW5ndGgsc29ydDphLGJlZm9yZTpyLGFmdGVyOm4sZ3JvdXA6byxub2RlOnR9O3RoaXMuX2l0ZW1zLnB1c2goZSl9Y29uc3QgaT10aGlzLl9zb3J0KCk7cmV0dXJuIHMoaSxcIml0ZW1cIixcIj9cIiE9PW8/XCJhZGRlZCBpbnRvIGdyb3VwIFwiLmNvbmNhdChvKTpcIlwiLFwiY3JlYXRlZCBhIGRlcGVuZGVuY2llcyBlcnJvclwiKSx0aGlzLm5vZGVzfW1lcmdlKGUpe0FycmF5LmlzQXJyYXkoZSl8fChlPVtlXSk7Zm9yKGNvbnN0IHQgb2YgZSlpZih0KWZvcihjb25zdCBlIG9mIHQuX2l0ZW1zKXRoaXMuX2l0ZW1zLnB1c2goT2JqZWN0LmFzc2lnbih7fSxlKSk7dGhpcy5faXRlbXMuc29ydChuLm1lcmdlU29ydCk7Zm9yKGxldCBlPTA7ZTx0aGlzLl9pdGVtcy5sZW5ndGg7KytlKXRoaXMuX2l0ZW1zW2VdLnNlcT1lO2NvbnN0IHQ9dGhpcy5fc29ydCgpO3JldHVybiBzKHQsXCJtZXJnZSBjcmVhdGVkIGEgZGVwZW5kZW5jaWVzIGVycm9yXCIpLHRoaXMubm9kZXN9X3NvcnQoKXtjb25zdCBlPXt9LHQ9T2JqZWN0LmNyZWF0ZShudWxsKSxyPU9iamVjdC5jcmVhdGUobnVsbCk7Zm9yKGNvbnN0IHMgb2YgdGhpcy5faXRlbXMpe2NvbnN0IG49cy5zZXEsbz1zLmdyb3VwO3Jbb109cltvXXx8W10scltvXS5wdXNoKG4pLGVbbl09cy5iZWZvcmU7Zm9yKGNvbnN0IGUgb2Ygcy5hZnRlcil0W2VdPXRbZV18fFtdLHRbZV0ucHVzaChuKX1mb3IoY29uc3QgdCBpbiBlKXtjb25zdCBzPVtdO2Zvcihjb25zdCBuIGluIGVbdF0pe2NvbnN0IG89ZVt0XVtuXTtyW29dPXJbb118fFtdLHMucHVzaCguLi5yW29dKX1lW3RdPXN9Zm9yKGNvbnN0IHMgaW4gdClpZihyW3NdKWZvcihjb25zdCBuIG9mIHJbc10pZVtuXS5wdXNoKC4uLnRbc10pO2NvbnN0IHM9e307Zm9yKGNvbnN0IHQgaW4gZSl7Y29uc3Qgcj1lW3RdO2Zvcihjb25zdCBlIG9mIHIpc1tlXT1zW2VdfHxbXSxzW2VdLnB1c2godCl9Y29uc3Qgbj17fSxvPVtdO2ZvcihsZXQgZT0wO2U8dGhpcy5faXRlbXMubGVuZ3RoOysrZSl7bGV0IHQ9ZTtpZihzW2VdKXt0PW51bGw7Zm9yKGxldCBlPTA7ZTx0aGlzLl9pdGVtcy5sZW5ndGg7KytlKXtpZighMD09PW5bZV0pY29udGludWU7c1tlXXx8KHNbZV09W10pO2NvbnN0IHI9c1tlXS5sZW5ndGg7bGV0IG89MDtmb3IobGV0IHQ9MDt0PHI7Kyt0KW5bc1tlXVt0XV0mJisrbztpZihvPT09cil7dD1lO2JyZWFrfX19bnVsbCE9PXQmJihuW3RdPSEwLG8ucHVzaCh0KSl9aWYoby5sZW5ndGghPT10aGlzLl9pdGVtcy5sZW5ndGgpcmV0dXJuITE7Y29uc3QgYT17fTtmb3IoY29uc3QgZSBvZiB0aGlzLl9pdGVtcylhW2Uuc2VxXT1lO3RoaXMuX2l0ZW1zPVtdLHRoaXMubm9kZXM9W107Zm9yKGNvbnN0IGUgb2Ygbyl7Y29uc3QgdD1hW2VdO3RoaXMubm9kZXMucHVzaCh0Lm5vZGUpLHRoaXMuX2l0ZW1zLnB1c2godCl9cmV0dXJuITB9fSxuLm1lcmdlU29ydD0oZSx0KT0+ZS5zb3J0PT09dC5zb3J0PzA6ZS5zb3J0PHQuc29ydD8tMToxfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigzKSxvPXIoMSksYT1yKDgpLGk9cig0KSxsPXt9O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcImxpbmtcIixwcm9wZXJ0aWVzOntzY2hlbWFDaGFpbjohMH0sdGVybXM6e2xpbms6e2luaXQ6bnVsbCxtYW5pZmVzdDpcInNpbmdsZVwiLHJlZ2lzdGVyOiExfX0sYXJnczooZSx0KT0+ZS5yZWYodCksdmFsaWRhdGUoZSx7c2NoZW1hOnQsc3RhdGU6cixwcmVmczpufSl7cyh0LiRfdGVybXMubGluayxcIlVuaW5pdGlhbGl6ZWQgbGluayBzY2hlbWFcIik7Y29uc3Qgbz1sLmdlbmVyYXRlKHQsZSxyLG4pLGE9dC4kX3Rlcm1zLmxpbmtbMF0ucmVmO3JldHVybiBvLiRfdmFsaWRhdGUoZSxyLm5lc3QobyxcImxpbms6XCIuY29uY2F0KGEuZGlzcGxheSxcIjpcIikuY29uY2F0KG8udHlwZSkpLG4pfSxnZW5lcmF0ZTooZSx0LHIscyk9PmwuZ2VuZXJhdGUoZSx0LHIscykscnVsZXM6e3JlZjp7bWV0aG9kKGUpe3MoIXRoaXMuJF90ZXJtcy5saW5rLFwiQ2Fubm90IHJlaW5pdGlhbGl6ZSBzY2hlbWFcIiksZT1hLnJlZihlKSxzKFwidmFsdWVcIj09PWUudHlwZXx8XCJsb2NhbFwiPT09ZS50eXBlLFwiSW52YWxpZCByZWZlcmVuY2UgdHlwZTpcIixlLnR5cGUpLHMoXCJsb2NhbFwiPT09ZS50eXBlfHxcInJvb3RcIj09PWUuYW5jZXN0b3J8fGUuYW5jZXN0b3I+MCxcIkxpbmsgY2Fubm90IHJlZmVyZW5jZSBpdHNlbGZcIik7Y29uc3QgdD10aGlzLmNsb25lKCk7cmV0dXJuIHQuJF90ZXJtcy5saW5rPVt7cmVmOmV9XSx0fX0scmVsYXRpdmU6e21ldGhvZChlPSEwKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJyZWxhdGl2ZVwiLGUpfX19LG92ZXJyaWRlczp7Y29uY2F0KGUpe3ModGhpcy4kX3Rlcm1zLmxpbmssXCJVbmluaXRpYWxpemVkIGxpbmsgc2NoZW1hXCIpLHMoby5pc1NjaGVtYShlKSxcIkludmFsaWQgc2NoZW1hIG9iamVjdFwiKSxzKFwibGlua1wiIT09ZS50eXBlLFwiQ2Fubm90IG1lcmdlIHR5cGUgbGluayB3aXRoIGFub3RoZXIgbGlua1wiKTtjb25zdCB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC4kX3Rlcm1zLndoZW5zfHwodC4kX3Rlcm1zLndoZW5zPVtdKSx0LiRfdGVybXMud2hlbnMucHVzaCh7Y29uY2F0OmV9KSx0LiRfbXV0YXRlUmVidWlsZCgpfX0sbWFuaWZlc3Q6e2J1aWxkOihlLHQpPT4ocyh0LmxpbmssXCJJbnZhbGlkIGxpbmsgZGVzY3JpcHRpb24gbWlzc2luZyBsaW5rXCIpLGUucmVmKHQubGluaykpfX0pLGwuZ2VuZXJhdGU9ZnVuY3Rpb24oZSx0LHIscyl7bGV0IG49ci5tYWluc3RheS5saW5rcy5nZXQoZSk7aWYobilyZXR1cm4gbi5fZ2VuZXJhdGUodCxyLHMpLnNjaGVtYTtjb25zdCBvPWUuJF90ZXJtcy5saW5rWzBdLnJlZix7cGVyc3BlY3RpdmU6YSxwYXRoOml9PWwucGVyc3BlY3RpdmUobyxyKTtsLmFzc2VydChhLFwid2hpY2ggaXMgb3V0c2lkZSBvZiBzY2hlbWEgYm91bmRhcmllc1wiLG8sZSxyLHMpO3RyeXtuPWkubGVuZ3RoP2EuJF9yZWFjaChpKTphfWNhdGNoKHQpe2wuYXNzZXJ0KCExLFwidG8gbm9uLWV4aXN0aW5nIHNjaGVtYVwiLG8sZSxyLHMpfXJldHVybiBsLmFzc2VydChcImxpbmtcIiE9PW4udHlwZSxcIndoaWNoIGlzIGFub3RoZXIgbGlua1wiLG8sZSxyLHMpLGUuX2ZsYWdzLnJlbGF0aXZlfHxyLm1haW5zdGF5LmxpbmtzLnNldChlLG4pLG4uX2dlbmVyYXRlKHQscixzKS5zY2hlbWF9LGwucGVyc3BlY3RpdmU9ZnVuY3Rpb24oZSx0KXtpZihcImxvY2FsXCI9PT1lLnR5cGUpe2Zvcihjb25zdHtzY2hlbWE6cixrZXk6c31vZiB0LnNjaGVtYXMpe2lmKChyLl9mbGFncy5pZHx8cyk9PT1lLnBhdGhbMF0pcmV0dXJue3BlcnNwZWN0aXZlOnIscGF0aDplLnBhdGguc2xpY2UoMSl9O2lmKHIuJF90ZXJtcy5zaGFyZWQpZm9yKGNvbnN0IHQgb2Ygci4kX3Rlcm1zLnNoYXJlZClpZih0Ll9mbGFncy5pZD09PWUucGF0aFswXSlyZXR1cm57cGVyc3BlY3RpdmU6dCxwYXRoOmUucGF0aC5zbGljZSgxKX19cmV0dXJue3BlcnNwZWN0aXZlOm51bGwscGF0aDpudWxsfX1yZXR1cm5cInJvb3RcIj09PWUuYW5jZXN0b3I/e3BlcnNwZWN0aXZlOnQuc2NoZW1hc1t0LnNjaGVtYXMubGVuZ3RoLTFdLnNjaGVtYSxwYXRoOmUucGF0aH06e3BlcnNwZWN0aXZlOnQuc2NoZW1hc1tlLmFuY2VzdG9yXSYmdC5zY2hlbWFzW2UuYW5jZXN0b3JdLnNjaGVtYSxwYXRoOmUucGF0aH19LGwuYXNzZXJ0PWZ1bmN0aW9uKGUsdCxyLG4sbyxhKXtlfHxzKCExLCdcIicuY29uY2F0KGkubGFiZWwobi5fZmxhZ3MsbyxhKSwnXCIgY29udGFpbnMgbGluayByZWZlcmVuY2UgXCInKS5jb25jYXQoci5kaXNwbGF5LCdcIiAnKS5jb25jYXQodCkpfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz1yKDEpLGE9e251bWJlclJ4Oi9eXFxzKlsrLV0/KD86KD86XFxkKyg/OlxcLlxcZCopPyl8KD86XFwuXFxkKykpKD86ZShbKy1dP1xcZCspKT9cXHMqJC9pLHByZWNpc2lvblJ4Oi8oPzpcXC4oXFxkKykpPyg/OltlRV0oWystXT9cXGQrKSk/JC99O2UuZXhwb3J0cz1uLmV4dGVuZCh7dHlwZTpcIm51bWJlclwiLGZsYWdzOnt1bnNhZmU6e2RlZmF1bHQ6ITF9fSxjb2VyY2U6e2Zyb206XCJzdHJpbmdcIixtZXRob2QoZSx7c2NoZW1hOnQsZXJyb3I6cn0pe2NvbnN0IHM9ZS5tYXRjaChhLm51bWJlclJ4KTtpZighcylyZXR1cm47ZT1lLnRyaW0oKTtjb25zdCBuPXt2YWx1ZTpwYXJzZUZsb2F0KGUpfTtpZigwPT09bi52YWx1ZSYmKG4udmFsdWU9MCksIXQuX2ZsYWdzLnVuc2FmZSlpZihlLm1hdGNoKC9lL2kpKXtpZihhLm5vcm1hbGl6ZUV4cG9uZW50KFwiXCIuY29uY2F0KG4udmFsdWUvTWF0aC5wb3coMTAsc1sxXSksXCJlXCIpLmNvbmNhdChzWzFdKSkhPT1hLm5vcm1hbGl6ZUV4cG9uZW50KGUpKXJldHVybiBuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSxufWVsc2V7Y29uc3QgdD1uLnZhbHVlLnRvU3RyaW5nKCk7aWYodC5tYXRjaCgvZS9pKSlyZXR1cm4gbjtpZih0IT09YS5ub3JtYWxpemVEZWNpbWFsKGUpKXJldHVybiBuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSxufXJldHVybiBufX0sdmFsaWRhdGUoZSx7c2NoZW1hOnQsZXJyb3I6cixwcmVmczpzfSl7aWYoZT09PTEvMHx8ZT09PS0xLzApcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnIoXCJudW1iZXIuaW5maW5pdHlcIil9O2lmKCFvLmlzTnVtYmVyKGUpKXJldHVybnt2YWx1ZTplLGVycm9yczpyKFwibnVtYmVyLmJhc2VcIil9O2NvbnN0IG49e3ZhbHVlOmV9O2lmKHMuY29udmVydCl7Y29uc3QgZT10LiRfZ2V0UnVsZShcInByZWNpc2lvblwiKTtpZihlKXtjb25zdCB0PU1hdGgucG93KDEwLGUuYXJncy5saW1pdCk7bi52YWx1ZT1NYXRoLnJvdW5kKG4udmFsdWUqdCkvdH19cmV0dXJuIDA9PT1uLnZhbHVlJiYobi52YWx1ZT0wKSwhdC5fZmxhZ3MudW5zYWZlJiYoZT5OdW1iZXIuTUFYX1NBRkVfSU5URUdFUnx8ZTxOdW1iZXIuTUlOX1NBRkVfSU5URUdFUikmJihuLmVycm9ycz1yKFwibnVtYmVyLnVuc2FmZVwiKSksbn0scnVsZXM6e2NvbXBhcmU6e21ldGhvZDohMSx2YWxpZGF0ZTooZSx0LHtsaW1pdDpyfSx7bmFtZTpzLG9wZXJhdG9yOm4sYXJnczphfSk9Pm8uY29tcGFyZShlLHIsbik/ZTp0LmVycm9yKFwibnVtYmVyLlwiK3Mse2xpbWl0OmEubGltaXQsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwibGltaXRcIixyZWY6ITAsYXNzZXJ0Om8uaXNOdW1iZXIsbWVzc2FnZTpcIm11c3QgYmUgYSBudW1iZXJcIn1dfSxncmVhdGVyOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3JlYXRlclwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj5cIn0pfX0saW50ZWdlcjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaW50ZWdlclwiKX0sdmFsaWRhdGU6KGUsdCk9Pk1hdGgudHJ1bmMoZSktZT09MD9lOnQuZXJyb3IoXCJudW1iZXIuaW50ZWdlclwiKX0sbGVzczp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImxlc3NcIixtZXRob2Q6XCJjb21wYXJlXCIsYXJnczp7bGltaXQ6ZX0sb3BlcmF0b3I6XCI8XCJ9KX19LG1heDp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1heFwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIjw9XCJ9KX19LG1pbjp7bWV0aG9kKGUpe3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm1pblwiLG1ldGhvZDpcImNvbXBhcmVcIixhcmdzOntsaW1pdDplfSxvcGVyYXRvcjpcIj49XCJ9KX19LG11bHRpcGxlOnttZXRob2QoZSl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwibXVsdGlwbGVcIixhcmdzOntiYXNlOmV9fSl9LHZhbGlkYXRlOihlLHQse2Jhc2U6cn0scyk9PmUlcj09MD9lOnQuZXJyb3IoXCJudW1iZXIubXVsdGlwbGVcIix7bXVsdGlwbGU6cy5hcmdzLmJhc2UsdmFsdWU6ZX0pLGFyZ3M6W3tuYW1lOlwiYmFzZVwiLHJlZjohMCxhc3NlcnQ6ZT0+XCJudW1iZXJcIj09dHlwZW9mIGUmJmlzRmluaXRlKGUpJiZlPjAsbWVzc2FnZTpcIm11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIn1dLG11bHRpOiEwfSxuZWdhdGl2ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuc2lnbihcIm5lZ2F0aXZlXCIpfX0scG9ydDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwicG9ydFwiKX0sdmFsaWRhdGU6KGUsdCk9Pk51bWJlci5pc1NhZmVJbnRlZ2VyKGUpJiZlPj0wJiZlPD02NTUzNT9lOnQuZXJyb3IoXCJudW1iZXIucG9ydFwiKX0scG9zaXRpdmU6e21ldGhvZCgpe3JldHVybiB0aGlzLnNpZ24oXCJwb3NpdGl2ZVwiKX19LHByZWNpc2lvbjp7bWV0aG9kKGUpe3JldHVybiBzKE51bWJlci5pc1NhZmVJbnRlZ2VyKGUpLFwibGltaXQgbXVzdCBiZSBhbiBpbnRlZ2VyXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwicHJlY2lzaW9uXCIsYXJnczp7bGltaXQ6ZX19KX0sdmFsaWRhdGUoZSx0LHtsaW1pdDpyfSl7Y29uc3Qgcz1lLnRvU3RyaW5nKCkubWF0Y2goYS5wcmVjaXNpb25SeCk7cmV0dXJuIE1hdGgubWF4KChzWzFdP3NbMV0ubGVuZ3RoOjApLShzWzJdP3BhcnNlSW50KHNbMl0sMTApOjApLDApPD1yP2U6dC5lcnJvcihcIm51bWJlci5wcmVjaXNpb25cIix7bGltaXQ6cix2YWx1ZTplfSl9LGNvbnZlcnQ6ITB9LHNpZ246e21ldGhvZChlKXtyZXR1cm4gcyhbXCJuZWdhdGl2ZVwiLFwicG9zaXRpdmVcIl0uaW5jbHVkZXMoZSksXCJJbnZhbGlkIHNpZ25cIixlKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcInNpZ25cIixhcmdzOntzaWduOmV9fSl9LHZhbGlkYXRlOihlLHQse3NpZ246cn0pPT5cIm5lZ2F0aXZlXCI9PT1yJiZlPDB8fFwicG9zaXRpdmVcIj09PXImJmU+MD9lOnQuZXJyb3IoXCJudW1iZXIuXCIuY29uY2F0KHIpKX0sdW5zYWZlOnttZXRob2QoZT0hMCl7cmV0dXJuIHMoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiZW5hYmxlZCBtdXN0IGJlIGEgYm9vbGVhblwiKSx0aGlzLiRfc2V0RmxhZyhcInVuc2FmZVwiLGUpfX19LGNhc3Q6e3N0cmluZzp7ZnJvbTplPT5cIm51bWJlclwiPT10eXBlb2YgZSx0bzooZSx0KT0+ZS50b1N0cmluZygpfX0sbWVzc2FnZXM6e1wibnVtYmVyLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG51bWJlclwiLFwibnVtYmVyLmdyZWF0ZXJcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBncmVhdGVyIHRoYW4ge3sjbGltaXR9fVwiLFwibnVtYmVyLmluZmluaXR5XCI6XCJ7eyNsYWJlbH19IGNhbm5vdCBiZSBpbmZpbml0eVwiLFwibnVtYmVyLmludGVnZXJcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhbiBpbnRlZ2VyXCIsXCJudW1iZXIubGVzc1wiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGxlc3MgdGhhbiB7eyNsaW1pdH19XCIsXCJudW1iZXIubWF4XCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX1cIixcIm51bWJlci5taW5cIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBsYXJnZXIgdGhhbiBvciBlcXVhbCB0byB7eyNsaW1pdH19XCIsXCJudW1iZXIubXVsdGlwbGVcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mIHt7I211bHRpcGxlfX1cIixcIm51bWJlci5uZWdhdGl2ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyXCIsXCJudW1iZXIucG9ydFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgcG9ydFwiLFwibnVtYmVyLnBvc2l0aXZlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXJcIixcIm51bWJlci5wcmVjaXNpb25cIjpcInt7I2xhYmVsfX0gbXVzdCBoYXZlIG5vIG1vcmUgdGhhbiB7eyNsaW1pdH19IGRlY2ltYWwgcGxhY2VzXCIsXCJudW1iZXIudW5zYWZlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzYWZlIG51bWJlclwifX0pLGEubm9ybWFsaXplRXhwb25lbnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvRS8sXCJlXCIpLnJlcGxhY2UoL1xcLihcXGQqWzEtOV0pPzArZS8sXCIuJDFlXCIpLnJlcGxhY2UoL1xcLmUvLFwiZVwiKS5yZXBsYWNlKC9lXFwrLyxcImVcIikucmVwbGFjZSgvXlxcKy8sXCJcIikucmVwbGFjZSgvXigtPykwKyhbMS05XSkvLFwiJDEkMlwiKX0sYS5ub3JtYWxpemVEZWNpbWFsPWZ1bmN0aW9uKGUpe3JldHVybihlPWUucmVwbGFjZSgvXlxcKy8sXCJcIikucmVwbGFjZSgvXFwuMCskLyxcIlwiKS5yZXBsYWNlKC9eKC0/KVxcLihbXlxcLl0qKSQvLFwiJDEwLiQyXCIpLnJlcGxhY2UoL14oLT8pMCsoWzEtOV0pLyxcIiQxJDJcIikpLmluY2x1ZGVzKFwiLlwiKSYmZS5lbmRzV2l0aChcIjBcIikmJihlPWUucmVwbGFjZSgvMCskLyxcIlwiKSksXCItMFwiPT09ZT9cIjBcIjplfX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigyMik7ZS5leHBvcnRzPXMuZXh0ZW5kKHt0eXBlOlwib2JqZWN0XCIsY2FzdDp7bWFwOntmcm9tOmU9PmUmJlwib2JqZWN0XCI9PXR5cGVvZiBlLHRvOihlLHQpPT5uZXcgTWFwKE9iamVjdC5lbnRyaWVzKGUpKX19fSl9LGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBzKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYocz1zLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixzKX1yZXR1cm4gcn1mdW5jdGlvbiBuKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3MoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtvKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpzKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIG8oZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWNvbnN0IGE9cigwKSxpPXIoMjMpLGw9cig0OSksYz1yKDUwKSx1PXIoMjcpLGY9cig1MSksbT1yKDI2KSxoPXIoMyksZD1yKDEpLHA9e3RsZHM6ZiBpbnN0YW5jZW9mIFNldCYme3RsZHM6e2FsbG93OmYsZGVueTpudWxsfX0sYmFzZTY0UmVnZXg6e3RydWU6e3RydWU6L14oPzpbXFx3XFwtXXsyfVtcXHdcXC1dezJ9KSooPzpbXFx3XFwtXXsyfT09fFtcXHdcXC1dezN9PSk/JC8sZmFsc2U6L14oPzpbQS1aYS16MC05K1xcL117Mn1bQS1aYS16MC05K1xcL117Mn0pKig/OltBLVphLXowLTkrXFwvXXsyfT09fFtBLVphLXowLTkrXFwvXXszfT0pPyQvfSxmYWxzZTp7dHJ1ZTovXig/OltcXHdcXC1dezJ9W1xcd1xcLV17Mn0pKig/OltcXHdcXC1dezJ9KD09KT98W1xcd1xcLV17M309Pyk/JC8sZmFsc2U6L14oPzpbQS1aYS16MC05K1xcL117Mn1bQS1aYS16MC05K1xcL117Mn0pKig/OltBLVphLXowLTkrXFwvXXsyfSg9PSk/fFtBLVphLXowLTkrXFwvXXszfT0/KT8kL319LGRhdGFVcmlSZWdleDovXmRhdGE6W1xcdysuLV0rXFwvW1xcdysuLV0rOygoY2hhcnNldD1bXFx3LV0rfGJhc2U2NCksKT8oLiopJC8saGV4UmVnZXg6L15bYS1mMC05XSskL2ksaXBSZWdleDpjLnJlZ2V4KCkucmVnZXgsaXNvRHVyYXRpb25SZWdleDovXlAoPyEkKShcXGQrWSk/KFxcZCtNKT8oXFxkK1cpPyhcXGQrRCk/KFQoPz1cXGQpKFxcZCtIKT8oXFxkK00pPyhcXGQrUyk/KT8kLyxndWlkQnJhY2tldHM6e1wie1wiOlwifVwiLFwiW1wiOlwiXVwiLFwiKFwiOlwiKVwiLFwiXCI6XCJcIn0sZ3VpZFZlcnNpb25zOnt1dWlkdjE6XCIxXCIsdXVpZHYyOlwiMlwiLHV1aWR2MzpcIjNcIix1dWlkdjQ6XCI0XCIsdXVpZHY1OlwiNVwifSxjaWRyUHJlc2VuY2VzOltcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCJdLG5vcm1hbGl6YXRpb25Gb3JtczpbXCJORkNcIixcIk5GRFwiLFwiTkZLQ1wiLFwiTkZLRFwiXX07ZS5leHBvcnRzPWguZXh0ZW5kKHt0eXBlOlwic3RyaW5nXCIsZmxhZ3M6e2luc2Vuc2l0aXZlOntkZWZhdWx0OiExfSx0cnVuY2F0ZTp7ZGVmYXVsdDohMX19LHRlcm1zOntyZXBsYWNlbWVudHM6e2luaXQ6bnVsbH19LGNvZXJjZTp7ZnJvbTpcInN0cmluZ1wiLG1ldGhvZChlLHtzY2hlbWE6dCxzdGF0ZTpyLHByZWZzOnN9KXtjb25zdCBuPXQuJF9nZXRSdWxlKFwibm9ybWFsaXplXCIpO24mJihlPWUubm9ybWFsaXplKG4uYXJncy5mb3JtKSk7Y29uc3Qgbz10LiRfZ2V0UnVsZShcImNhc2VcIik7byYmKGU9XCJ1cHBlclwiPT09by5hcmdzLmRpcmVjdGlvbj9lLnRvTG9jYWxlVXBwZXJDYXNlKCk6ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtjb25zdCBhPXQuJF9nZXRSdWxlKFwidHJpbVwiKTtpZihhJiZhLmFyZ3MuZW5hYmxlZCYmKGU9ZS50cmltKCkpLHQuJF90ZXJtcy5yZXBsYWNlbWVudHMpZm9yKGNvbnN0IHIgb2YgdC4kX3Rlcm1zLnJlcGxhY2VtZW50cyllPWUucmVwbGFjZShyLnBhdHRlcm4sci5yZXBsYWNlbWVudCk7Y29uc3QgaT10LiRfZ2V0UnVsZShcImhleFwiKTtpZihpJiZpLmFyZ3Mub3B0aW9ucy5ieXRlQWxpZ25lZCYmZS5sZW5ndGglMiE9MCYmKGU9XCIwXCIuY29uY2F0KGUpKSx0LiRfZ2V0UnVsZShcImlzb0RhdGVcIikpe2NvbnN0IHQ9cC5pc29EYXRlKGUpO3QmJihlPXQpfWlmKHQuX2ZsYWdzLnRydW5jYXRlKXtjb25zdCBuPXQuJF9nZXRSdWxlKFwibWF4XCIpO2lmKG4pe2xldCBvPW4uYXJncy5saW1pdDtpZihkLmlzUmVzb2x2YWJsZShvKSYmKG89by5yZXNvbHZlKGUscixzKSwhZC5saW1pdChvKSkpcmV0dXJue3ZhbHVlOmUsZXJyb3JzOnQuJF9jcmVhdGVFcnJvcihcImFueS5yZWZcIixvLHtyZWY6bi5hcmdzLmxpbWl0LGFyZzpcImxpbWl0XCIscmVhc29uOlwibXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIn0scixzKX07ZT1lLnNsaWNlKDAsbyl9fXJldHVybnt2YWx1ZTplfX19LHZhbGlkYXRlOihlLHtlcnJvcjp0fSk9Plwic3RyaW5nXCIhPXR5cGVvZiBlP3t2YWx1ZTplLGVycm9yczp0KFwic3RyaW5nLmJhc2VcIil9OlwiXCI9PT1lP3t2YWx1ZTplLGVycm9yczp0KFwic3RyaW5nLmVtcHR5XCIpfTp2b2lkIDAscnVsZXM6e2FscGhhbnVtOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoXCJhbHBoYW51bVwiKX0sdmFsaWRhdGU6KGUsdCk9Pi9eW2EtekEtWjAtOV0rJC8udGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuYWxwaGFudW1cIil9LGJhc2U2NDp7bWV0aG9kKGU9e30pe3JldHVybiBkLmFzc2VydE9wdGlvbnMoZSxbXCJwYWRkaW5nUmVxdWlyZWRcIixcInVybFNhZmVcIl0pLGU9bih7dXJsU2FmZTohMSxwYWRkaW5nUmVxdWlyZWQ6ITB9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnBhZGRpbmdSZXF1aXJlZCxcInBhZGRpbmdSZXF1aXJlZCBtdXN0IGJlIGJvb2xlYW5cIiksYShcImJvb2xlYW5cIj09dHlwZW9mIGUudXJsU2FmZSxcInVybFNhZmUgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiYmFzZTY0XCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9KT0+cC5iYXNlNjRSZWdleFtyLnBhZGRpbmdSZXF1aXJlZF1bci51cmxTYWZlXS50ZXN0KGUpP2U6dC5lcnJvcihcInN0cmluZy5iYXNlNjRcIil9LGNhc2U6e21ldGhvZChlKXtyZXR1cm4gYShbXCJsb3dlclwiLFwidXBwZXJcIl0uaW5jbHVkZXMoZSksXCJJbnZhbGlkIGNhc2U6XCIsZSksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJjYXNlXCIsYXJnczp7ZGlyZWN0aW9uOmV9fSl9LHZhbGlkYXRlOihlLHQse2RpcmVjdGlvbjpyfSk9PlwibG93ZXJcIj09PXImJmU9PT1lLnRvTG9jYWxlTG93ZXJDYXNlKCl8fFwidXBwZXJcIj09PXImJmU9PT1lLnRvTG9jYWxlVXBwZXJDYXNlKCk/ZTp0LmVycm9yKFwic3RyaW5nLlwiLmNvbmNhdChyLFwiY2FzZVwiKSksY29udmVydDohMH0sY3JlZGl0Q2FyZDp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiY3JlZGl0Q2FyZFwiKX0sdmFsaWRhdGUoZSx0KXtsZXQgcj1lLmxlbmd0aCxzPTAsbj0xO2Zvcig7ci0tOyl7Y29uc3QgdD1lLmNoYXJBdChyKSpuO3MrPXQtOSoodD45KSxuXj0zfXJldHVybiBzPjAmJnMlMTA9PTA/ZTp0LmVycm9yKFwic3RyaW5nLmNyZWRpdENhcmRcIil9fSxkYXRhVXJpOnttZXRob2QoZT17fSl7cmV0dXJuIGQuYXNzZXJ0T3B0aW9ucyhlLFtcInBhZGRpbmdSZXF1aXJlZFwiXSksZT1uKHtwYWRkaW5nUmVxdWlyZWQ6ITB9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLnBhZGRpbmdSZXF1aXJlZCxcInBhZGRpbmdSZXF1aXJlZCBtdXN0IGJlIGJvb2xlYW5cIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJkYXRhVXJpXCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZShlLHQse29wdGlvbnM6cn0pe2NvbnN0IHM9ZS5tYXRjaChwLmRhdGFVcmlSZWdleCk7aWYocyl7aWYoIXNbMl0pcmV0dXJuIGU7aWYoXCJiYXNlNjRcIiE9PXNbMl0pcmV0dXJuIGU7aWYocC5iYXNlNjRSZWdleFtyLnBhZGRpbmdSZXF1aXJlZF0uZmFsc2UudGVzdChzWzNdKSlyZXR1cm4gZX1yZXR1cm4gdC5lcnJvcihcInN0cmluZy5kYXRhVXJpXCIpfX0sZG9tYWluOnttZXRob2QoZSl7ZSYmZC5hc3NlcnRPcHRpb25zKGUsW1wiYWxsb3dVbmljb2RlXCIsXCJtaW5Eb21haW5TZWdtZW50c1wiLFwidGxkc1wiXSk7Y29uc3QgdD1wLmFkZHJlc3NPcHRpb25zKGUpO3JldHVybiB0aGlzLiRfYWRkUnVsZSh7bmFtZTpcImRvbWFpblwiLGFyZ3M6e29wdGlvbnM6ZX0sYWRkcmVzczp0fSl9LHZhbGlkYXRlOihlLHQscix7YWRkcmVzczpzfSk9PmkuaXNWYWxpZChlLHMpP2U6dC5lcnJvcihcInN0cmluZy5kb21haW5cIil9LGVtYWlsOnttZXRob2QoZT17fSl7ZC5hc3NlcnRPcHRpb25zKGUsW1wiYWxsb3dVbmljb2RlXCIsXCJpZ25vcmVMZW5ndGhcIixcIm1pbkRvbWFpblNlZ21lbnRzXCIsXCJtdWx0aXBsZVwiLFwic2VwYXJhdG9yXCIsXCJ0bGRzXCJdKSxhKHZvaWQgMD09PWUubXVsdGlwbGV8fFwiYm9vbGVhblwiPT10eXBlb2YgZS5tdWx0aXBsZSxcIm11bHRpcGxlIG9wdGlvbiBtdXN0IGJlIGFuIGJvb2xlYW5cIik7Y29uc3QgdD1wLmFkZHJlc3NPcHRpb25zKGUpLHI9bmV3IFJlZ0V4cChcIlxcXFxzKltcIi5jb25jYXQoZS5zZXBhcmF0b3I/dShlLnNlcGFyYXRvcik6XCIsXCIsXCJdXFxcXHMqXCIpKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJlbWFpbFwiLGFyZ3M6e29wdGlvbnM6ZX0scmVnZXg6cixhZGRyZXNzOnR9KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzLGFkZHJlc3M6bn0pe2NvbnN0IG89ci5tdWx0aXBsZT9lLnNwbGl0KHMpOltlXSxhPVtdO2Zvcihjb25zdCBlIG9mIG8pbC5pc1ZhbGlkKGUsbil8fGEucHVzaChlKTtyZXR1cm4gYS5sZW5ndGg/dC5lcnJvcihcInN0cmluZy5lbWFpbFwiLHt2YWx1ZTplLGludmFsaWRzOmF9KTplfX0sZ3VpZDp7YWxpYXM6XCJ1dWlkXCIsbWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcInZlcnNpb25cIl0pO2xldCB0PVwiXCI7aWYoZS52ZXJzaW9uKXtjb25zdCByPVtdLmNvbmNhdChlLnZlcnNpb24pO2Eoci5sZW5ndGg+PTEsXCJ2ZXJzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCAxIHZhbGlkIHZlcnNpb24gc3BlY2lmaWVkXCIpO2NvbnN0IHM9bmV3IFNldDtmb3IobGV0IGU9MDtlPHIubGVuZ3RoOysrZSl7Y29uc3Qgbj1yW2VdO2EoXCJzdHJpbmdcIj09dHlwZW9mIG4sXCJ2ZXJzaW9uIGF0IHBvc2l0aW9uIFwiK2UrXCIgbXVzdCBiZSBhIHN0cmluZ1wiKTtjb25zdCBvPXAuZ3VpZFZlcnNpb25zW24udG9Mb3dlckNhc2UoKV07YShvLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3QgYmUgb25lIG9mIFwiK09iamVjdC5rZXlzKHAuZ3VpZFZlcnNpb25zKS5qb2luKFwiLCBcIikpLGEoIXMuaGFzKG8pLFwidmVyc2lvbiBhdCBwb3NpdGlvbiBcIitlK1wiIG11c3Qgbm90IGJlIGEgZHVwbGljYXRlXCIpLHQrPW8scy5hZGQobyl9fWNvbnN0IHI9bmV3IFJlZ0V4cChcIl4oW1xcXFxbe1xcXFwoXT8pWzAtOUEtRl17OH0oWzotXT8pWzAtOUEtRl17NH1cXFxcMj9bXCIuY29uY2F0KHR8fFwiMC05QS1GXCIsXCJdWzAtOUEtRl17M31cXFxcMj9bXCIpLmNvbmNhdCh0P1wiODlBQlwiOlwiMC05QS1GXCIsXCJdWzAtOUEtRl17M31cXFxcMj9bMC05QS1GXXsxMn0oW1xcXFxdfVxcXFwpXT8pJFwiKSxcImlcIik7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiZ3VpZFwiLGFyZ3M6e29wdGlvbnM6ZX0scmVnZXg6cn0pfSx2YWxpZGF0ZShlLHQscix7cmVnZXg6c30pe2NvbnN0IG49cy5leGVjKGUpO3JldHVybiBuP3AuZ3VpZEJyYWNrZXRzW25bMV1dIT09bltuLmxlbmd0aC0xXT90LmVycm9yKFwic3RyaW5nLmd1aWRcIik6ZTp0LmVycm9yKFwic3RyaW5nLmd1aWRcIil9fSxoZXg6e21ldGhvZChlPXt9KXtyZXR1cm4gZC5hc3NlcnRPcHRpb25zKGUsW1wiYnl0ZUFsaWduZWRcIl0pLGU9bih7Ynl0ZUFsaWduZWQ6ITF9LGUpLGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLmJ5dGVBbGlnbmVkLFwiYnl0ZUFsaWduZWQgbXVzdCBiZSBib29sZWFuXCIpLHRoaXMuJF9hZGRSdWxlKHtuYW1lOlwiaGV4XCIsYXJnczp7b3B0aW9uczplfX0pfSx2YWxpZGF0ZTooZSx0LHtvcHRpb25zOnJ9KT0+cC5oZXhSZWdleC50ZXN0KGUpP3IuYnl0ZUFsaWduZWQmJmUubGVuZ3RoJTIhPTA/dC5lcnJvcihcInN0cmluZy5oZXhBbGlnblwiKTplOnQuZXJyb3IoXCJzdHJpbmcuaGV4XCIpfSxob3N0bmFtZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaG9zdG5hbWVcIil9LHZhbGlkYXRlOihlLHQpPT5pLmlzVmFsaWQoZSx7bWluRG9tYWluU2VnbWVudHM6MX0pfHxwLmlwUmVnZXgudGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuaG9zdG5hbWVcIil9LGluc2Vuc2l0aXZlOnttZXRob2QoKXtyZXR1cm4gdGhpcy4kX3NldEZsYWcoXCJpbnNlbnNpdGl2ZVwiLCEwKX19LGlwOnttZXRob2QoZT17fSl7ZC5hc3NlcnRPcHRpb25zKGUsW1wiY2lkclwiLFwidmVyc2lvblwiXSk7Y29uc3R7Y2lkcjp0LHZlcnNpb25zOnIscmVnZXg6c309Yy5yZWdleChlKSxuPWUudmVyc2lvbj9yOnZvaWQgMDtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJpcFwiLGFyZ3M6e29wdGlvbnM6e2NpZHI6dCx2ZXJzaW9uOm59fSxyZWdleDpzfSl9LHZhbGlkYXRlOihlLHQse29wdGlvbnM6cn0se3JlZ2V4OnN9KT0+cy50ZXN0KGUpP2U6ci52ZXJzaW9uP3QuZXJyb3IoXCJzdHJpbmcuaXBWZXJzaW9uXCIse3ZhbHVlOmUsY2lkcjpyLmNpZHIsdmVyc2lvbjpyLnZlcnNpb259KTp0LmVycm9yKFwic3RyaW5nLmlwXCIse3ZhbHVlOmUsY2lkcjpyLmNpZHJ9KX0saXNvRGF0ZTp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaXNvRGF0ZVwiKX0sdmFsaWRhdGU6KGUse2Vycm9yOnR9KT0+cC5pc29EYXRlKGUpP2U6dChcInN0cmluZy5pc29EYXRlXCIpfSxpc29EdXJhdGlvbjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwiaXNvRHVyYXRpb25cIil9LHZhbGlkYXRlOihlLHQpPT5wLmlzb0R1cmF0aW9uUmVnZXgudGVzdChlKT9lOnQuZXJyb3IoXCJzdHJpbmcuaXNvRHVyYXRpb25cIil9LGxlbmd0aDp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJsZW5ndGhcIixlLFwiPVwiLHQpfSx2YWxpZGF0ZShlLHQse2xpbWl0OnIsZW5jb2Rpbmc6c30se25hbWU6bixvcGVyYXRvcjpvLGFyZ3M6YX0pe2NvbnN0IGk9IXMmJmUubGVuZ3RoO3JldHVybiBkLmNvbXBhcmUoaSxyLG8pP2U6dC5lcnJvcihcInN0cmluZy5cIituLHtsaW1pdDphLmxpbWl0LHZhbHVlOmUsZW5jb2Rpbmc6c30pfSxhcmdzOlt7bmFtZTpcImxpbWl0XCIscmVmOiEwLGFzc2VydDpkLmxpbWl0LG1lc3NhZ2U6XCJtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlclwifSxcImVuY29kaW5nXCJdfSxsb3dlcmNhc2U6e21ldGhvZCgpe3JldHVybiB0aGlzLmNhc2UoXCJsb3dlclwiKX19LG1heDp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJtYXhcIixlLFwiPD1cIix0KX0sYXJnczpbXCJsaW1pdFwiLFwiZW5jb2RpbmdcIl19LG1pbjp7bWV0aG9kKGUsdCl7cmV0dXJuIHAubGVuZ3RoKHRoaXMsXCJtaW5cIixlLFwiPj1cIix0KX0sYXJnczpbXCJsaW1pdFwiLFwiZW5jb2RpbmdcIl19LG5vcm1hbGl6ZTp7bWV0aG9kKGU9XCJORkNcIil7cmV0dXJuIGEocC5ub3JtYWxpemF0aW9uRm9ybXMuaW5jbHVkZXMoZSksXCJub3JtYWxpemF0aW9uIGZvcm0gbXVzdCBiZSBvbmUgb2YgXCIrcC5ub3JtYWxpemF0aW9uRm9ybXMuam9pbihcIiwgXCIpKSx0aGlzLiRfYWRkUnVsZSh7bmFtZTpcIm5vcm1hbGl6ZVwiLGFyZ3M6e2Zvcm06ZX19KX0sdmFsaWRhdGU6KGUse2Vycm9yOnR9LHtmb3JtOnJ9KT0+ZT09PWUubm9ybWFsaXplKHIpP2U6dChcInN0cmluZy5ub3JtYWxpemVcIix7dmFsdWU6ZSxmb3JtOnJ9KSxjb252ZXJ0OiEwfSxwYXR0ZXJuOnthbGlhczpcInJlZ2V4XCIsbWV0aG9kKGUsdD17fSl7YShlIGluc3RhbmNlb2YgUmVnRXhwLFwicmVnZXggbXVzdCBiZSBhIFJlZ0V4cFwiKSxhKCFlLmZsYWdzLmluY2x1ZGVzKFwiZ1wiKSYmIWUuZmxhZ3MuaW5jbHVkZXMoXCJ5XCIpLFwicmVnZXggc2hvdWxkIG5vdCB1c2UgZ2xvYmFsIG9yIHN0aWNreSBtb2RlXCIpLFwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD17bmFtZTp0fSksZC5hc3NlcnRPcHRpb25zKHQsW1wiaW52ZXJ0XCIsXCJuYW1lXCJdKTtjb25zdCByPVtcInN0cmluZy5wYXR0ZXJuXCIsdC5pbnZlcnQ/XCIuaW52ZXJ0XCI6XCJcIix0Lm5hbWU/XCIubmFtZVwiOlwiLmJhc2VcIl0uam9pbihcIlwiKTtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJwYXR0ZXJuXCIsYXJnczp7cmVnZXg6ZSxvcHRpb25zOnR9LGVycm9yQ29kZTpyfSl9LHZhbGlkYXRlOihlLHQse3JlZ2V4OnIsb3B0aW9uczpzfSx7ZXJyb3JDb2RlOm59KT0+ci50ZXN0KGUpXnMuaW52ZXJ0P2U6dC5lcnJvcihuLHtuYW1lOnMubmFtZSxyZWdleDpyLHZhbHVlOmV9KSxhcmdzOltcInJlZ2V4XCIsXCJvcHRpb25zXCJdLG11bHRpOiEwfSxyZXBsYWNlOnttZXRob2QoZSx0KXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9bmV3IFJlZ0V4cCh1KGUpLFwiZ1wiKSksYShlIGluc3RhbmNlb2YgUmVnRXhwLFwicGF0dGVybiBtdXN0IGJlIGEgUmVnRXhwXCIpLGEoXCJzdHJpbmdcIj09dHlwZW9mIHQsXCJyZXBsYWNlbWVudCBtdXN0IGJlIGEgU3RyaW5nXCIpO2NvbnN0IHI9dGhpcy5jbG9uZSgpO3JldHVybiByLiRfdGVybXMucmVwbGFjZW1lbnRzfHwoci4kX3Rlcm1zLnJlcGxhY2VtZW50cz1bXSksci4kX3Rlcm1zLnJlcGxhY2VtZW50cy5wdXNoKHtwYXR0ZXJuOmUscmVwbGFjZW1lbnQ6dH0pLHJ9fSx0b2tlbjp7bWV0aG9kKCl7cmV0dXJuIHRoaXMuJF9hZGRSdWxlKFwidG9rZW5cIil9LHZhbGlkYXRlOihlLHQpPT4vXlxcdyskLy50ZXN0KGUpP2U6dC5lcnJvcihcInN0cmluZy50b2tlblwiKX0sdHJpbTp7bWV0aG9kKGU9ITApe3JldHVybiBhKFwiYm9vbGVhblwiPT10eXBlb2YgZSxcImVuYWJsZWQgbXVzdCBiZSBhIGJvb2xlYW5cIiksdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ0cmltXCIsYXJnczp7ZW5hYmxlZDplfX0pfSx2YWxpZGF0ZTooZSx0LHtlbmFibGVkOnJ9KT0+ciYmZSE9PWUudHJpbSgpP3QuZXJyb3IoXCJzdHJpbmcudHJpbVwiKTplLGNvbnZlcnQ6ITB9LHRydW5jYXRlOnttZXRob2QoZT0hMCl7cmV0dXJuIGEoXCJib29sZWFuXCI9PXR5cGVvZiBlLFwiZW5hYmxlZCBtdXN0IGJlIGEgYm9vbGVhblwiKSx0aGlzLiRfc2V0RmxhZyhcInRydW5jYXRlXCIsZSl9fSx1cHBlcmNhc2U6e21ldGhvZCgpe3JldHVybiB0aGlzLmNhc2UoXCJ1cHBlclwiKX19LHVyaTp7bWV0aG9kKGU9e30pe2QuYXNzZXJ0T3B0aW9ucyhlLFtcImFsbG93UmVsYXRpdmVcIixcImFsbG93UXVlcnlTcXVhcmVCcmFja2V0c1wiLFwiZG9tYWluXCIsXCJyZWxhdGl2ZU9ubHlcIixcInNjaGVtZVwiXSksZS5kb21haW4mJmQuYXNzZXJ0T3B0aW9ucyhlLmRvbWFpbixbXCJhbGxvd1VuaWNvZGVcIixcIm1pbkRvbWFpblNlZ21lbnRzXCIsXCJ0bGRzXCJdKTtjb25zdHtyZWdleDp0LHNjaGVtZTpyfT1tLnJlZ2V4KGUpLHM9ZS5kb21haW4/cC5hZGRyZXNzT3B0aW9ucyhlLmRvbWFpbik6bnVsbDtyZXR1cm4gdGhpcy4kX2FkZFJ1bGUoe25hbWU6XCJ1cmlcIixhcmdzOntvcHRpb25zOmV9LHJlZ2V4OnQsZG9tYWluOnMsc2NoZW1lOnJ9KX0sdmFsaWRhdGUoZSx0LHtvcHRpb25zOnJ9LHtyZWdleDpzLGRvbWFpbjpuLHNjaGVtZTpvfSl7aWYoW1wiaHR0cDovXCIsXCJodHRwczovXCJdLmluY2x1ZGVzKGUpKXJldHVybiB0LmVycm9yKFwic3RyaW5nLnVyaVwiKTtjb25zdCBhPXMuZXhlYyhlKTtpZihhKXtpZihuKXtjb25zdCBlPWFbMV18fGFbMl07aWYoIWkuaXNWYWxpZChlLG4pKXJldHVybiB0LmVycm9yKFwic3RyaW5nLmRvbWFpblwiLHt2YWx1ZTplfSl9cmV0dXJuIGV9cmV0dXJuIHIucmVsYXRpdmVPbmx5P3QuZXJyb3IoXCJzdHJpbmcudXJpUmVsYXRpdmVPbmx5XCIpOnIuc2NoZW1lP3QuZXJyb3IoXCJzdHJpbmcudXJpQ3VzdG9tU2NoZW1lXCIse3NjaGVtZTpvLHZhbHVlOmV9KTp0LmVycm9yKFwic3RyaW5nLnVyaVwiKX19fSxtYW5pZmVzdDp7YnVpbGQoZSx0KXtpZih0LnJlcGxhY2VtZW50cylmb3IoY29uc3R7cGF0dGVybjpyLHJlcGxhY2VtZW50OnN9b2YgdC5yZXBsYWNlbWVudHMpZT1lLnJlcGxhY2UocixzKTtyZXR1cm4gZX19LG1lc3NhZ2VzOntcInN0cmluZy5hbHBoYW51bVwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiBhbHBoYS1udW1lcmljIGNoYXJhY3RlcnNcIixcInN0cmluZy5iYXNlXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBzdHJpbmdcIixcInN0cmluZy5iYXNlNjRcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGJhc2U2NCBzdHJpbmdcIixcInN0cmluZy5jcmVkaXRDYXJkXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSBjcmVkaXQgY2FyZFwiLFwic3RyaW5nLmRhdGFVcmlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGRhdGFVcmkgc3RyaW5nXCIsXCJzdHJpbmcuZG9tYWluXCI6XCJ7eyNsYWJlbH19IG11c3QgY29udGFpbiBhIHZhbGlkIGRvbWFpbiBuYW1lXCIsXCJzdHJpbmcuZW1haWxcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIGVtYWlsXCIsXCJzdHJpbmcuZW1wdHlcIjpcInt7I2xhYmVsfX0gaXMgbm90IGFsbG93ZWQgdG8gYmUgZW1wdHlcIixcInN0cmluZy5ndWlkXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBHVUlEXCIsXCJzdHJpbmcuaGV4XCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGhleGFkZWNpbWFsIGNoYXJhY3RlcnNcIixcInN0cmluZy5oZXhBbGlnblwiOlwie3sjbGFiZWx9fSBoZXggZGVjb2RlZCByZXByZXNlbnRhdGlvbiBtdXN0IGJlIGJ5dGUgYWxpZ25lZFwiLFwic3RyaW5nLmhvc3RuYW1lXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBob3N0bmFtZVwiLFwic3RyaW5nLmlwXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgYSB2YWxpZCBpcCBhZGRyZXNzIHdpdGggYSB7eyNjaWRyfX0gQ0lEUlwiLFwic3RyaW5nLmlwVmVyc2lvblwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgaXAgYWRkcmVzcyBvZiBvbmUgb2YgdGhlIGZvbGxvd2luZyB2ZXJzaW9ucyB7eyN2ZXJzaW9ufX0gd2l0aCBhIHt7I2NpZHJ9fSBDSURSXCIsXCJzdHJpbmcuaXNvRGF0ZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGluIGlzbyBmb3JtYXRcIixcInN0cmluZy5pc29EdXJhdGlvblwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgSVNPIDg2MDEgZHVyYXRpb25cIixcInN0cmluZy5sZW5ndGhcIjpcInt7I2xhYmVsfX0gbGVuZ3RoIG11c3QgYmUge3sjbGltaXR9fSBjaGFyYWN0ZXJzIGxvbmdcIixcInN0cmluZy5sb3dlcmNhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBvbmx5IGNvbnRhaW4gbG93ZXJjYXNlIGNoYXJhY3RlcnNcIixcInN0cmluZy5tYXhcIjpcInt7I2xhYmVsfX0gbGVuZ3RoIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubWluXCI6XCJ7eyNsYWJlbH19IGxlbmd0aCBtdXN0IGJlIGF0IGxlYXN0IHt7I2xpbWl0fX0gY2hhcmFjdGVycyBsb25nXCIsXCJzdHJpbmcubm9ybWFsaXplXCI6XCJ7eyNsYWJlbH19IG11c3QgYmUgdW5pY29kZSBub3JtYWxpemVkIGluIHRoZSB7eyNmb3JtfX0gZm9ybVwiLFwic3RyaW5nLnRva2VuXCI6XCJ7eyNsYWJlbH19IG11c3Qgb25seSBjb250YWluIGFscGhhLW51bWVyaWMgYW5kIHVuZGVyc2NvcmUgY2hhcmFjdGVyc1wiLFwic3RyaW5nLnBhdHRlcm4uYmFzZVwiOid7eyNsYWJlbH19IHdpdGggdmFsdWUgXCJ7Wy5dfVwiIGZhaWxzIHRvIG1hdGNoIHRoZSByZXF1aXJlZCBwYXR0ZXJuOiB7eyNyZWdleH19JyxcInN0cmluZy5wYXR0ZXJuLm5hbWVcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBmYWlscyB0byBtYXRjaCB0aGUge3sjbmFtZX19IHBhdHRlcm4nLFwic3RyaW5nLnBhdHRlcm4uaW52ZXJ0LmJhc2VcIjone3sjbGFiZWx9fSB3aXRoIHZhbHVlIFwie1suXX1cIiBtYXRjaGVzIHRoZSBpbnZlcnRlZCBwYXR0ZXJuOiB7eyNyZWdleH19JyxcInN0cmluZy5wYXR0ZXJuLmludmVydC5uYW1lXCI6J3t7I2xhYmVsfX0gd2l0aCB2YWx1ZSBcIntbLl19XCIgbWF0Y2hlcyB0aGUgaW52ZXJ0ZWQge3sjbmFtZX19IHBhdHRlcm4nLFwic3RyaW5nLnRyaW1cIjpcInt7I2xhYmVsfX0gbXVzdCBub3QgaGF2ZSBsZWFkaW5nIG9yIHRyYWlsaW5nIHdoaXRlc3BhY2VcIixcInN0cmluZy51cmlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHVyaVwiLFwic3RyaW5nLnVyaUN1c3RvbVNjaGVtZVwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIGEgdmFsaWQgdXJpIHdpdGggYSBzY2hlbWUgbWF0Y2hpbmcgdGhlIHt7I3NjaGVtZX19IHBhdHRlcm5cIixcInN0cmluZy51cmlSZWxhdGl2ZU9ubHlcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHZhbGlkIHJlbGF0aXZlIHVyaVwiLFwic3RyaW5nLnVwcGVyY2FzZVwiOlwie3sjbGFiZWx9fSBtdXN0IG9ubHkgY29udGFpbiB1cHBlcmNhc2UgY2hhcmFjdGVyc1wifX0pLHAuYWRkcmVzc09wdGlvbnM9ZnVuY3Rpb24oZSl7aWYoIWUpcmV0dXJuIGU7aWYoYSh2b2lkIDA9PT1lLm1pbkRvbWFpblNlZ21lbnRzfHxOdW1iZXIuaXNTYWZlSW50ZWdlcihlLm1pbkRvbWFpblNlZ21lbnRzKSYmZS5taW5Eb21haW5TZWdtZW50cz4wLFwibWluRG9tYWluU2VnbWVudHMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXJcIiksITE9PT1lLnRsZHMpcmV0dXJuIGU7aWYoITA9PT1lLnRsZHN8fHZvaWQgMD09PWUudGxkcylyZXR1cm4gYShwLnRsZHMsXCJCdWlsdC1pbiBUTEQgbGlzdCBkaXNhYmxlZFwiKSxPYmplY3QuYXNzaWduKHt9LGUscC50bGRzKTthKFwib2JqZWN0XCI9PXR5cGVvZiBlLnRsZHMsXCJ0bGRzIG11c3QgYmUgdHJ1ZSwgZmFsc2UsIG9yIGFuIG9iamVjdFwiKTtjb25zdCB0PWUudGxkcy5kZW55O2lmKHQpcmV0dXJuIEFycmF5LmlzQXJyYXkodCkmJihlPU9iamVjdC5hc3NpZ24oe30sZSx7dGxkczp7ZGVueTpuZXcgU2V0KHQpfX0pKSxhKGUudGxkcy5kZW55IGluc3RhbmNlb2YgU2V0LFwidGxkcy5kZW55IG11c3QgYmUgYW4gYXJyYXksIFNldCwgb3IgYm9vbGVhblwiKSxhKCFlLnRsZHMuYWxsb3csXCJDYW5ub3Qgc3BlY2lmeSBib3RoIHRsZHMuYWxsb3cgYW5kIHRsZHMuZGVueSBsaXN0c1wiKSxlO2NvbnN0IHI9ZS50bGRzLmFsbG93O3JldHVybiByPyEwPT09cj8oYShwLnRsZHMsXCJCdWlsdC1pbiBUTEQgbGlzdCBkaXNhYmxlZFwiKSxPYmplY3QuYXNzaWduKHt9LGUscC50bGRzKSk6KEFycmF5LmlzQXJyYXkocikmJihlPU9iamVjdC5hc3NpZ24oe30sZSx7dGxkczp7YWxsb3c6bmV3IFNldChyKX19KSksYShlLnRsZHMuYWxsb3cgaW5zdGFuY2VvZiBTZXQsXCJ0bGRzLmFsbG93IG11c3QgYmUgYW4gYXJyYXksIFNldCwgb3IgYm9vbGVhblwiKSxlKTplfSxwLmlzb0RhdGU9ZnVuY3Rpb24oZSl7aWYoIWQuaXNJc29EYXRlKGUpKXJldHVybiBudWxsO2NvbnN0IHQ9bmV3IERhdGUoZSk7cmV0dXJuIGlzTmFOKHQuZ2V0VGltZSgpKT9udWxsOnQudG9JU09TdHJpbmcoKX0scC5sZW5ndGg9ZnVuY3Rpb24oZSx0LHIscyxuKXtyZXR1cm4gYSghbnx8ITEsXCJJbnZhbGlkIGVuY29kaW5nOlwiLG4pLGUuJF9hZGRSdWxlKHtuYW1lOnQsbWV0aG9kOlwibGVuZ3RoXCIsYXJnczp7bGltaXQ6cixlbmNvZGluZzpufSxvcGVyYXRvcjpzfSl9fSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDI0KSxuPXIoMjMpLG89cigyNSksYT17bm9uQXNjaWlSeDovW15cXHgwMC1cXHg3Zl0vLGVuY29kZXI6bmV3KHMuVGV4dEVuY29kZXJ8fFRleHRFbmNvZGVyKX07dC5hbmFseXplPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGEuZW1haWwoZSx0KX0sdC5pc1ZhbGlkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIWEuZW1haWwoZSx0KX0sYS5lbWFpbD1mdW5jdGlvbihlLHQ9e30pe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW5wdXQ6IGVtYWlsIG11c3QgYmUgYSBzdHJpbmdcIik7aWYoIWUpcmV0dXJuIG8uY29kZShcIkVNUFRZX1NUUklOR1wiKTtjb25zdCByPSFhLm5vbkFzY2lpUngudGVzdChlKTtpZighcil7aWYoITE9PT10LmFsbG93VW5pY29kZSlyZXR1cm4gby5jb2RlKFwiRk9SQklEREVOX1VOSUNPREVcIik7ZT1lLm5vcm1hbGl6ZShcIk5GQ1wiKX1jb25zdCBzPWUuc3BsaXQoXCJAXCIpO2lmKDIhPT1zLmxlbmd0aClyZXR1cm4gcy5sZW5ndGg+Mj9vLmNvZGUoXCJNVUxUSVBMRV9BVF9DSEFSXCIpOm8uY29kZShcIk1JU1NJTkdfQVRfQ0hBUlwiKTtjb25zdFtpLGxdPXM7aWYoIWkpcmV0dXJuIG8uY29kZShcIkVNUFRZX0xPQ0FMXCIpO2lmKCF0Lmlnbm9yZUxlbmd0aCl7aWYoZS5sZW5ndGg+MjU0KXJldHVybiBvLmNvZGUoXCJBRERSRVNTX1RPT19MT05HXCIpO2lmKGEuZW5jb2Rlci5lbmNvZGUoaSkubGVuZ3RoPjY0KXJldHVybiBvLmNvZGUoXCJMT0NBTF9UT09fTE9OR1wiKX1yZXR1cm4gYS5sb2NhbChpLHIpfHxuLmFuYWx5emUobCx0KX0sYS5sb2NhbD1mdW5jdGlvbihlLHQpe2NvbnN0IHI9ZS5zcGxpdChcIi5cIik7Zm9yKGNvbnN0IGUgb2Ygcil7aWYoIWUubGVuZ3RoKXJldHVybiBvLmNvZGUoXCJFTVBUWV9MT0NBTF9TRUdNRU5UXCIpO2lmKHQpe2lmKCFhLmF0ZXh0UngudGVzdChlKSlyZXR1cm4gby5jb2RlKFwiSU5WQUxJRF9MT0NBTF9DSEFSU1wiKX1lbHNlIGZvcihjb25zdCB0IG9mIGUpe2lmKGEuYXRleHRSeC50ZXN0KHQpKWNvbnRpbnVlO2NvbnN0IGU9YS5iaW5hcnkodCk7aWYoIWEuYXRvbVJ4LnRlc3QoZSkpcmV0dXJuIG8uY29kZShcIklOVkFMSURfTE9DQUxfQ0hBUlNcIil9fX0sYS5iaW5hcnk9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmZyb20oYS5lbmNvZGVyLmVuY29kZShlKSkubWFwKGU9PlN0cmluZy5mcm9tQ2hhckNvZGUoZSkpLmpvaW4oXCJcIil9LGEuYXRleHRSeD0vXltcXHchI1xcJCUmJ1xcKlxcK1xcLS89XFw/XFxeYFxce1xcfFxcfX5dKyQvLGEuYXRvbVJ4PW5ldyBSZWdFeHAoW1wiKD86W1xcXFx4YzItXFxcXHhkZl1bXFxcXHg4MC1cXFxceGJmXSlcIixcIig/OlxcXFx4ZTBbXFxcXHhhMC1cXFxceGJmXVtcXFxceDgwLVxcXFx4YmZdKXwoPzpbXFxcXHhlMS1cXFxceGVjXVtcXFxceDgwLVxcXFx4YmZdezJ9KXwoPzpcXFxceGVkW1xcXFx4ODAtXFxcXHg5Zl1bXFxcXHg4MC1cXFxceGJmXSl8KD86W1xcXFx4ZWUtXFxcXHhlZl1bXFxcXHg4MC1cXFxceGJmXXsyfSlcIixcIig/OlxcXFx4ZjBbXFxcXHg5MC1cXFxceGJmXVtcXFxceDgwLVxcXFx4YmZdezJ9KXwoPzpbXFxcXHhmMS1cXFxceGYzXVtcXFxceDgwLVxcXFx4YmZdezN9KXwoPzpcXFxceGY0W1xcXFx4ODAtXFxcXHg4Zl1bXFxcXHg4MC1cXFxceGJmXXsyfSlcIl0uam9pbihcInxcIikpfSxmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7Y29uc3Qgcz1yKDApLG49cigyNik7dC5yZWdleD1mdW5jdGlvbihlPXt9KXtzKHZvaWQgMD09PWUuY2lkcnx8XCJzdHJpbmdcIj09dHlwZW9mIGUuY2lkcixcIm9wdGlvbnMuY2lkciBtdXN0IGJlIGEgc3RyaW5nXCIpO2NvbnN0IHQ9ZS5jaWRyP2UuY2lkci50b0xvd2VyQ2FzZSgpOlwib3B0aW9uYWxcIjtzKFtcInJlcXVpcmVkXCIsXCJvcHRpb25hbFwiLFwiZm9yYmlkZGVuXCJdLmluY2x1ZGVzKHQpLFwib3B0aW9ucy5jaWRyIG11c3QgYmUgb25lIG9mIHJlcXVpcmVkLCBvcHRpb25hbCwgZm9yYmlkZGVuXCIpLHModm9pZCAwPT09ZS52ZXJzaW9ufHxcInN0cmluZ1wiPT10eXBlb2YgZS52ZXJzaW9ufHxBcnJheS5pc0FycmF5KGUudmVyc2lvbiksXCJvcHRpb25zLnZlcnNpb24gbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdcIik7bGV0IHI9ZS52ZXJzaW9ufHxbXCJpcHY0XCIsXCJpcHY2XCIsXCJpcHZmdXR1cmVcIl07QXJyYXkuaXNBcnJheShyKXx8KHI9W3JdKSxzKHIubGVuZ3RoPj0xLFwib3B0aW9ucy52ZXJzaW9uIG11c3QgaGF2ZSBhdCBsZWFzdCAxIHZlcnNpb24gc3BlY2lmaWVkXCIpO2ZvcihsZXQgZT0wO2U8ci5sZW5ndGg7KytlKXMoXCJzdHJpbmdcIj09dHlwZW9mIHJbZV0sXCJvcHRpb25zLnZlcnNpb24gbXVzdCBvbmx5IGNvbnRhaW4gc3RyaW5nc1wiKSxyW2VdPXJbZV0udG9Mb3dlckNhc2UoKSxzKFtcImlwdjRcIixcImlwdjZcIixcImlwdmZ1dHVyZVwiXS5pbmNsdWRlcyhyW2VdKSxcIm9wdGlvbnMudmVyc2lvbiBjb250YWlucyB1bmtub3duIHZlcnNpb24gXCIrcltlXStcIiAtIG11c3QgYmUgb25lIG9mIGlwdjQsIGlwdjYsIGlwdmZ1dHVyZVwiKTtyPUFycmF5LmZyb20obmV3IFNldChyKSk7Y29uc3Qgbz1yLm1hcChlPT57aWYoXCJmb3JiaWRkZW5cIj09PXQpcmV0dXJuIG4uaXBbZV07Y29uc3Qgcj1cIlxcXFwvXCIuY29uY2F0KFwiaXB2NFwiPT09ZT9uLmlwLnY0Q2lkcjpuLmlwLnY2Q2lkcik7cmV0dXJuXCJyZXF1aXJlZFwiPT09dD9cIlwiLmNvbmNhdChuLmlwW2VdKS5jb25jYXQocik6XCJcIi5jb25jYXQobi5pcFtlXSxcIig/OlwiKS5jb25jYXQocixcIik/XCIpfSksYT1cIig/OlwiLmNvbmNhdChvLmpvaW4oXCJ8XCIpLFwiKVwiKSxpPW5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGEsXCIkXCIpKTtyZXR1cm57Y2lkcjp0LHZlcnNpb25zOnIscmVnZXg6aSxyYXc6YX19fSxmdW5jdGlvbihlLHQpe30sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2NvbnN0IHM9cigwKSxuPXIoMyksbz17fTtvLk1hcD1jbGFzcyBleHRlbmRzIE1hcHtzbGljZSgpe3JldHVybiBuZXcgby5NYXAodGhpcyl9fSxlLmV4cG9ydHM9bi5leHRlbmQoe3R5cGU6XCJzeW1ib2xcIix0ZXJtczp7bWFwOntpbml0Om5ldyBvLk1hcH19LGNvZXJjZTp7bWV0aG9kKGUse3NjaGVtYTp0LGVycm9yOnJ9KXtjb25zdCBzPXQuJF90ZXJtcy5tYXAuZ2V0KGUpO3JldHVybiBzJiYoZT1zKSx0Ll9mbGFncy5vbmx5JiZcInN5bWJvbFwiIT10eXBlb2YgZT97dmFsdWU6ZSxlcnJvcnM6cihcInN5bWJvbC5tYXBcIix7bWFwOnQuJF90ZXJtcy5tYXB9KX06e3ZhbHVlOmV9fX0sdmFsaWRhdGUoZSx7ZXJyb3I6dH0pe2lmKFwic3ltYm9sXCIhPXR5cGVvZiBlKXJldHVybnt2YWx1ZTplLGVycm9yczp0KFwic3ltYm9sLmJhc2VcIil9fSxydWxlczp7bWFwOnttZXRob2QoZSl7ZSYmIWVbU3ltYm9sLml0ZXJhdG9yXSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJihlPU9iamVjdC5lbnRyaWVzKGUpKSxzKGUmJmVbU3ltYm9sLml0ZXJhdG9yXSxcIkl0ZXJhYmxlIG11c3QgYmUgYW4gaXRlcmFibGUgb3Igb2JqZWN0XCIpO2NvbnN0IHQ9dGhpcy5jbG9uZSgpLHI9W107Zm9yKGNvbnN0IG4gb2YgZSl7cyhuJiZuW1N5bWJvbC5pdGVyYXRvcl0sXCJFbnRyeSBtdXN0IGJlIGFuIGl0ZXJhYmxlXCIpO2NvbnN0W2Usb109bjtzKFwib2JqZWN0XCIhPXR5cGVvZiBlJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZcInN5bWJvbFwiIT10eXBlb2YgZSxcIktleSBtdXN0IG5vdCBiZSBvZiB0eXBlIG9iamVjdCwgZnVuY3Rpb24sIG9yIFN5bWJvbFwiKSxzKFwic3ltYm9sXCI9PXR5cGVvZiBvLFwiVmFsdWUgbXVzdCBiZSBhIFN5bWJvbFwiKSx0LiRfdGVybXMubWFwLnNldChlLG8pLHIucHVzaChvKX1yZXR1cm4gdC52YWxpZCguLi5yKX19fSxtYW5pZmVzdDp7YnVpbGQ6KGUsdCk9Pih0Lm1hcCYmKGU9ZS5tYXAodC5tYXApKSxlKX0sbWVzc2FnZXM6e1wic3ltYm9sLmJhc2VcIjpcInt7I2xhYmVsfX0gbXVzdCBiZSBhIHN5bWJvbFwiLFwic3ltYm9sLm1hcFwiOlwie3sjbGFiZWx9fSBtdXN0IGJlIG9uZSBvZiB7eyNtYXB9fVwifX0pfV0pfSkpOyIsImltcG9ydCB7IEdyaWdhIH0gZnJvbSBcIi4uL2dyaWdhL2dyaWdhXCI7XHJcbmltcG9ydCB7IEVkaXRvciwgZWRpdG9ySGVscCB9IGZyb20gXCIuL2VkaXRvclwiO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kVGlsZSB9IGZyb20gXCIuL2VudGl0aWVzL2JhY2tncm91bmRfdGlsZVwiO1xyXG5pbXBvcnQgeyBHaG9zdHkgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ2hvc3R5XCI7XHJcbmltcG9ydCB7IEdvYWwgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZ29hbFwiO1xyXG5pbXBvcnQgeyBTdG9uZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9zdG9uZVwiO1xyXG5pbXBvcnQgeyBXb29kZW5Cb3ggfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvd29vZGVuX2JveFwiO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25CYWNrZ3JvdW5kIH0gZnJvbSBcIi4vZW50aXRpZXMvc2VsZWN0aW9uX2JhY2tncm91bmRcIjtcclxuaW1wb3J0IHsgTGV2ZWxzLCBsZXZlbHNIZWxwIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XHJcbmltcG9ydCB7IFBsYXksIHBsYXlIZWxwIH0gZnJvbSBcIi4vcGxheVwiO1xyXG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCIuL3N0eWxlXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgSG9sZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9ob2xlXCI7XHJcbmltcG9ydCB7IEhvbGVCb3JkZXIgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvaG9sZV9ib3JkZXJcIjtcclxuaW1wb3J0IHsgSG9tZSwgaG9tZUhlbHAgfSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuaW1wb3J0IHsgRGlhbW9uZFN0b25lIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2RpYW1vbmRfc3RvbmVcIjtcclxuaW1wb3J0IHsgRGlhbW9uZFByZXNzdXJlUGxhdGUgfSBmcm9tIFwiLi9lbnRpdGllcy9naG9zdHlfZW50aXRpZXMvZGlhbW9uZF9wcmVzc3VyZV9wbGF0ZVwiO1xyXG5pbXBvcnQgeyBDb3BwZXJTdG9uZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9jb3BwZXJfc3RvbmVcIjtcclxuaW1wb3J0IHsgQ29wcGVyUHJlc3N1cmVQbGF0ZSB9IGZyb20gXCIuL2VudGl0aWVzL2dob3N0eV9lbnRpdGllcy9jb3BwZXJfcHJlc3N1cmVfcGxhdGVcIjtcclxuaW1wb3J0IHsgV29vZGVuQm94Q2lyY2xlIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL3dvb2Rlbl9ib3hfb2N0YWdvblwiO1xyXG5pbXBvcnQgeyBIb2xlQ2lyY2xlIH0gZnJvbSBcIi4vZW50aXRpZXMvZ2hvc3R5X2VudGl0aWVzL2hvbGVfY2lyY2xlXCI7XHJcbmltcG9ydCB7IEFsbEVudGl0aWVzQmFja2dyb3VuZCB9IGZyb20gXCIuL2VudGl0aWVzL2FsbF9lbnRpdGllc19iYWNrZ3JvdW5kXCI7XHJcblxyXG5jb25zdCBDUyA9IDE2O1xyXG5jb25zdCBSUyA9IDEwO1xyXG5cclxuY29uc3QgZ3JpZ2FDb25maWcgPSB7XHJcbiAgZGlzcGxheXM6W1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAncGxheScsXHJcbiAgICAgIHdyYXBwZXJJZDogJ3BsYXktZGlzcGxheScsXHJcbiAgICAgIHdpZHRoSGVpZ2h0UmF0aW86IENTL1JTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2VkaXRvcicsXHJcbiAgICAgIHdyYXBwZXJJZDogJ2VkaXRvci1kaXNwbGF5JyxcclxuICAgICAgd2lkdGhIZWlnaHRSYXRpbzogQ1MvUlMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2VsZWN0aW9uJyxcclxuICAgICAgd3JhcHBlcklkOiAnc2VsZWN0aW9uLWRpc3BsYXknLFxyXG4gICAgICB3aWR0aEhlaWdodFJhdGlvOiAxMC8xXHJcbiAgICB9XHJcbiAgXSxcclxuICBncmlkczpbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdwbGF5JyxcclxuICAgICAgY29sdW1uczogQ1MsXHJcbiAgICAgIHJvd3M6IFJTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2VkaXRvcicsXHJcbiAgICAgIGNvbHVtbnM6IENTLFxyXG4gICAgICByb3dzOiBSUyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdhbGwtZW50aXRpZXMtc2VsZWN0aW9uJyxcclxuICAgICAgY29sdW1uczogQ1MsXHJcbiAgICAgIHJvd3M6IFJTLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NlbGVjdGlvbi1ob3RiYXInLFxyXG4gICAgICBjb2x1bW5zOiAxMCxcclxuICAgICAgcm93czogMSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdwcmV2aWV3JyxcclxuICAgICAgY29sdW1uczogQ1MsXHJcbiAgICAgIHJvd3M6IFJTXHJcbiAgICB9XHJcbiAgXSxcclxuICBlbnRpdGllczpbQmFja2dyb3VuZFRpbGUsIFNlbGVjdGlvbkJhY2tncm91bmQsIEFsbEVudGl0aWVzQmFja2dyb3VuZCwgU3RvbmUsIEdob3N0eSwgR29hbCwgV29vZGVuQm94LCBIb2xlLCBIb2xlQm9yZGVyLCBEaWFtb25kU3RvbmUsIERpYW1vbmRQcmVzc3VyZVBsYXRlLCBDb3BwZXJTdG9uZSwgQ29wcGVyUHJlc3N1cmVQbGF0ZSwgV29vZGVuQm94Q2lyY2xlLCBIb2xlQ2lyY2xlXSxcclxufVxyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmFja2dyb3VuZFRpbGVTY2VuZSA9IHtcImRldGFjaGVkXCI6W10sXCJ0aWxlc1wiOltbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV0sW1tbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV1dLFtbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dXSxbW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXSxbW1wiQmFja2dyb3VuZFRpbGVcIix7fV1dLFtbXCJCYWNrZ3JvdW5kVGlsZVwiLHt9XV0sW1tcIkJhY2tncm91bmRUaWxlXCIse31dXV1dfVxyXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKTtcclxuICAgIHRoaXMuaG9tZV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idXR0b24nKTtcclxuICAgIHRoaXMucGxheV9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idXR0b24nKTtcclxuICAgIHRoaXMubGV2ZWxzX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbHMtYnV0dG9uJyk7XHJcbiAgICB0aGlzLmVkaXRvcl9idXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5oZWxwX2J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWxwLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5jb250ZW50X2RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICB0aGlzLmhvbWVfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtc2NyZWVuJyk7XHJcbiAgICB0aGlzLnBsYXlfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktc2NyZWVuJyk7XHJcbiAgICB0aGlzLmVkaXRvcl9zY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdG9yLXNjcmVlbicpO1xyXG4gICAgdGhpcy5sZXZlbHNfc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVscy1zY3JlZW4nKTtcclxuICAgIHRoaXMuc3RhdGUgPSAnaG9tZSc7XHJcbiAgICB0aGlzLnZlcnNpb24gPSAnMS4wLjInO1xyXG4gICAgdGhpcy5oZWxwQm9vayA9IHtcclxuICAgICAgaG9tZTogaG9tZUhlbHAsXHJcbiAgICAgIHBsYXk6IHBsYXlIZWxwLFxyXG4gICAgICBsZXZlbHM6IGxldmVsc0hlbHAsXHJcbiAgICAgIGVkaXRvcjogZWRpdG9ySGVscFxyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5U2V0dGluZ3MgPSB7Y29sdW1uc09uU2NyZWVuOiBDUywgcm93c09uU2NyZWVuOiBSU307XHJcbiAgICB0aGlzLnN0eWxlID0gbmV3IFN0eWxlKCB0aGlzICk7XHJcbiAgICB0aGlzLmdyaWdhID0gbmV3IEdyaWdhKCBncmlnYUNvbmZpZywgZ3JpZ2EgPT4gdGhpcy5zdGFydEdhbWUoIGdyaWdhICkgKTtcclxuICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSggdGhpcyApO1xyXG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoIHRoaXMgKTtcclxuICAgIHRoaXMubGV2ZWxzID0gbmV3IExldmVscyggdGhpcyApO1xyXG4gICAgdGhpcy5wbGF5ID0gbmV3IFBsYXkoIHRoaXMsIHRoaXMuZ3JpZ2EgKTtcclxuICAgIHRoaXMuZWRpdG9yID0gbmV3IEVkaXRvciggdGhpcywgdGhpcy5ncmlnYSApO1xyXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydEdhbWUoIGdyaWdhICl7XHJcbiAgICBncmlnYS5naG9zdHkgPSB0aGlzO1xyXG4gICAgdGhpcy5wbGF5LnN0YXJ0R2FtZSgpO1xyXG4gICAgdGhpcy5ob21lLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBlbmRBY3RpdmVTdGF0ZSgpe1xyXG4gICAgdGhpc1t0aGlzLnN0YXRlXS5lbmQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZU5leHRIZWxwUG9wdXBDbGljaygpe1xyXG4gICAgdGhpc1t0aGlzLnN0YXRlXS5jbG9zZVBvcHVwKCk7XHJcbiAgICB0aGlzLmhhbmRsZUhlbHBCdXR0b25DbGljayggKyt0aGlzLmhlbHBQYWdlSW5kZXgldGhpcy5oZWxwQm9va1t0aGlzLnN0YXRlXVt0aGlzLmhlbHBMYW5ndWFnZV0ubGVuZ3RoLCB0aGlzLmhlbHBMYW5ndWFnZSApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSGVscEJ1dHRvbkNsaWNrKCBpbmRleCA9IDAsIGxhbmd1YWdlID0gdGhpcy5oZWxwTGFuZ3VhZ2UgKXtcclxuICAgIHRoaXMuaGVscFBhZ2VJbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy5oZWxwTGFuZ3VhZ2UgPSBsYW5ndWFnZSB8fCAnZW5nbGlzaCdcclxuICAgIGlmICh0aGlzW3RoaXMuc3RhdGVdLnBvcHVwKSB7IHRoaXNbdGhpcy5zdGF0ZV0uY2xvc2VQb3B1cCgpIH07XHJcbiAgICB0aGlzW3RoaXMuc3RhdGVdLnBvcHVwID0gbmV3IFBvcHVwKFxyXG4gICAgICAnd3JhcHBlcicsXHJcbiAgICAgIGBHaG9zdHkgSGVscDogJHt0aGlzLnN0YXRlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3RoaXMuc3RhdGUuc2xpY2UoMSl9YCxcclxuICAgICAgW1xyXG4gICAgICAgIHtpZDogJ3BvcHVwLWNsb3NlJywgdGV4dDogJ0Nsb3NlJywgY2xpY2s6IGlWID0+IHRoaXNbdGhpcy5zdGF0ZV0uY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAge2lkOiAnbmV4dC1oZWxwLXBvcHVwJywgdGV4dDogJ05leHQnLCBjbGljazogaVYgPT4gdGhpcy5oYW5kbGVOZXh0SGVscFBvcHVwQ2xpY2soIGlWICl9XHJcbiAgICAgIF0sIFtdLFxyXG4gICAgICB0aGlzLmhlbHBCb29rW3RoaXMuc3RhdGVdW3RoaXMuaGVscExhbmd1YWdlXVt0aGlzLmhlbHBQYWdlSW5kZXhdLmgzLFxyXG4gICAgICB0aGlzLmhlbHBCb29rW3RoaXMuc3RhdGVdW3RoaXMuaGVscExhbmd1YWdlXVt0aGlzLmhlbHBQYWdlSW5kZXhdLnBcclxuICAgICkgO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlSG9tZUJ1dHRvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICB0aGlzLmhvbWUuc3RhcnQoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBsYXlCdXR0b25DbGljaygpe1xyXG4gICAgdGhpcy5lbmRBY3RpdmVTdGF0ZSgpO1xyXG4gICAgdGhpcy5wbGF5LnN0YXJ0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUVkaXRvckJ1dHRvbkNsaWNrKCl7XHJcbiAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICB0aGlzLmVkaXRvci5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxzQnV0dG9uQ2xpY2soKXtcclxuICAgIHRoaXMuZW5kQWN0aXZlU3RhdGUoKTtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAncGxheScpIHtcclxuICAgICAgdGhpcy5sZXZlbHMuc3RhcnQodGhpcy5wbGF5LmNhdGVnb3J5LCB0aGlzLnBsYXkubGV2ZWxJbmRleCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09ICdlZGl0b3InKSB7XHJcbiAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KHRoaXMuZWRpdG9yLmNhdGVnb3J5LCB0aGlzLmVkaXRvci5sZXZlbEluZGV4KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGV2ZWxzLnN0YXJ0KCdjbGFzc2ljJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUNvbnRlbnREaXZDbGljaygpe1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdob21lJykge1xyXG4gICAgICB0aGlzLmVuZEFjdGl2ZVN0YXRlKCk7XHJcbiAgICAgIHRoaXMucGxheS5zdGFydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgdGhpcy5ob21lX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVIb21lQnV0dG9uQ2xpY2soKSk7XHJcbiAgICB0aGlzLnBsYXlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMuZWRpdG9yX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVFZGl0b3JCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMubGV2ZWxzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVMZXZlbHNCdXR0b25DbGljaygpKTtcclxuICAgIHRoaXMuaGVscF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlSGVscEJ1dHRvbkNsaWNrKCkpO1xyXG4gICAgdGhpcy5jb250ZW50X2Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVDb250ZW50RGl2Q2xpY2soKSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7bmV3IEFwcCgpfSApOyIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4vcG9wdXBcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoIGFwcCwgZ3JpZ2EgKXtcclxuICAgICAgICB0aGlzLmhvdGJhcl9zY2VuZV9kYXRhID0ge1wiZGV0YWNoZWRcIjpbXSxcInRpbGVzXCI6W1tbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiU2VsZWN0aW9uQmFja2dyb3VuZFwiLHt9XV1dXX1cclxuICAgICAgICB0aGlzLmFsbF9lbnRpdGllc19zY2VuZV9kYXRhID0ge1wiZGV0YWNoZWRcIjpbXSxcInRpbGVzXCI6W1tbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dXSxbW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dXSxbW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dXSxbW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dXSxbW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV0sW1tbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dLFtbXCJBbGxFbnRpdGllc0JhY2tncm91bmRcIix7fV1dXSxbW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV0sW1tcIkFsbEVudGl0aWVzQmFja2dyb3VuZFwiLHt9XV1dLFtbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXSxbW1wiQWxsRW50aXRpZXNCYWNrZ3JvdW5kXCIse31dXV1dfTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLmdyaWdhID0gZ3JpZ2E7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZ2EuZ3JpZHNbJ2VkaXRvciddO1xyXG4gICAgICAgIHRoaXMuaG90YmFyX2dyaWQgPSBncmlnYS5ncmlkc1snc2VsZWN0aW9uLWhvdGJhciddO1xyXG4gICAgICAgIHRoaXMuYWxsX2VudGl0aWVzX2dyaWQgPSBncmlnYS5ncmlkc1snYWxsLWVudGl0aWVzLXNlbGVjdGlvbiddO1xyXG4gICAgICAgIHRoaXMubG93ZXJfYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvd2VyLWJhcicpO1xyXG4gICAgICAgIHRoaXMubmV3X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItbmV3LWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLXNhdmUtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy50ZXN0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItdGVzdC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLmxldmVsX25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWxldmVsLW5hbWUnKTtcclxuICAgICAgICB0aGlzLnJlbmFtZV9idXR0b249IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItcmVuYW1lLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzWydwcmVzZXRzJ11bMF07XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICdwcmVzZXRzJztcclxuICAgICAgICB0aGlzLmxldmVsSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucG9wdXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbiggdGhpcywgdGhpcy5ob3RiYXJfZ3JpZCApO1xyXG4gICAgICAgIHRoaXMuaG90YmFyRGlzcGxheVNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjb2x1bW5zT25TY3JlZW46IHRoaXMuaG90YmFyX2dyaWQuY29sdW1ucyxcclxuICAgICAgICAgICAgcm93c09uU2NyZWVuOiB0aGlzLmhvdGJhcl9ncmlkLnJvd3MsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTZWxlY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmhvdGJhcl9ncmlkLmxvYWRTY2VuZSggdGhpcy5ob3RiYXJfc2NlbmVfZGF0YSApO1xyXG4gICAgICAgIHRoaXMuYWxsX2VudGl0aWVzX2dyaWQubG9hZFNjZW5lKCB0aGlzLmFsbF9lbnRpdGllc19zY2VuZV9kYXRhICk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgYyA9IDA7IGMgPCAxNjsgYysrKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IHIgPSAwOyByIDwgMTA7IHIrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hbGxfZW50aXRpZXNfZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSggJ0FsbEVudGl0aWVzQmFja2dyb3VuZCcsIHt9LCB7YyxyfSApO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbF9lbnRpdGllc19ncmlkLmdldEN1cnJlbnRTY2VuZURhdGEoKSkgKTtcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmdyaWdhLmVudGl0aWVzKS5maWx0ZXIoIGVudGl0eU5hbWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIVsnU2VsZWN0aW9uQmFja2dyb3VuZCcsICdCYWNrZ3JvdW5kVGlsZScsICdBbGxFbnRpdGllc0JhY2tncm91bmQnXS5pbmNsdWRlcyggZW50aXR5TmFtZSApO1xyXG4gICAgICAgIH0gKS5maWx0ZXIoIGVOYW1lID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdW5sb2NrTGV2ZWwgPSB0aGlzLmdyaWdhLmVudGl0aWVzW2VOYW1lXS5nZXRVbmxvY2tMZXZlbCggdGhpcy5hcHAubGV2ZWxzLmxldmVsc1snY2xhc3NpYyddICk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmxvY2tMZXZlbCA8IHRoaXMuYXBwLmxldmVscy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXg7XHJcbiAgICAgICAgfSApLmZvckVhY2goIChlbnRpdHlOYW1lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsX2VudGl0aWVzX2dyaWQubmV3RW50aXR5SW5zdGFuY2UoZW50aXR5TmFtZSwge30sIHtjOmkscjowfSk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgdGhpcy5ob3RiYXJfZ3JpZC5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdGJhcl9ncmlkLm5ld0VudGl0eUluc3RhbmNlKGVudGl0eU5hbWUsIHt9LCB7YzppLHI6MH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2VsZWN0aW9uSG90YmFyKCl7XHJcbiAgICAgICAgdGhpcy5ob3RiYXJfZ3JpZC5jbGVhclNjZW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoIGxldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleCApe1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvcl9idXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5hcHAuZWRpdG9yX3NjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ2VkaXRvcic7XHJcbiAgICAgICAgdGhpcy5hcHAuc3RhdGUgPSAnZWRpdG9yJztcclxuICAgICAgICB0aGlzLmxvYWRTZWxlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5hY3RpdmF0ZUZpcnN0U2VsZWN0aW9uQmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ2VkaXRvcicsICdlZGl0b3InLCB0aGlzLmFwcC5kaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZGlzcGxheUdyaWQoJ3NlbGVjdGlvbicsICdzZWxlY3Rpb24taG90YmFyJywgdGhpcy5ob3RiYXJEaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsKCBsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXggKTtcclxuICAgICAgICB0aGlzLmFwcC5zdHlsZS5yZXNpemVXcmFwcGVyKCk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZXNpemVEaXNwbGF5cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMZXZlbCggbGV2ZWwgPSB0aGlzLmxldmVsLCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnksIGxldmVsSW5kZXggPSB0aGlzLmxldmVsSW5kZXgpIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMubGV2ZWxJbmRleCA9IGxldmVsSW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5hcHAuYmFja2dyb3VuZFRpbGVTY2VuZSApO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMubGV2ZWwuc2NlbmVEYXRhICk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09PSAncHJlc2V0cycpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbF9uYW1lLmlubmVySFRNTCA9IHRoaXMubGV2ZWwubmFtZSArICcgPGk+LS1wcmVzZXQ8L2k+JztcclxuICAgICAgICAgICAgdGhpcy50ZXN0X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5hbWVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfbmFtZS5pbm5lckhUTUwgPSB0aGlzLmxldmVsLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucmVuYW1lX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy50ZXN0X2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJMZXZlbCgpIHtcclxuICAgICAgICB0aGlzLmdyaWQuY2xlYXJTY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7IHRoaXMuY2xvc2VQb3B1cCgpIH07XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZW1vdmVHcmlkRnJvbURpc3BsYXkodGhpcy5zdGF0ZSwgJ2VkaXRvcicpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVtb3ZlR3JpZEZyb21EaXNwbGF5KCdzZWxlY3Rpb24taG90YmFyJywgJ3NlbGVjdGlvbicpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb25Ib3RiYXIoKTtcclxuICAgICAgICB0aGlzLmFwcC5lZGl0b3JfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRoaXMuYXBwLmVkaXRvcl9zY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGUoIG5ld1N0YXRlICl7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5yZW1vdmVHcmlkRnJvbURpc3BsYXkodGhpcy5zdGF0ZSwgJ2VkaXRvcicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCAnZWRpdG9yJywgdGhpcy5zdGF0ZSwgdGhpcy5hcHAuZGlzcGxheVNldHRpbmdzICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NlbmVDaGFuZ2VkSGFuZGxlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbC5zY2VuZURhdGEgPSB0aGlzLmdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5sZXZlbHMudXBkYXRlTGV2ZWwoIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3ByZXNldHMnKXtcclxuICAgICAgICAgICAgY29uc3QgW2xldmVsLCBjYXRlZ29yeSwgbGV2ZWxJbmRleF0gPSB0aGlzLnNhdmVTY2VuZURhdGFBc05ld0xldmVsKCB0aGlzLmxldmVsLm5hbWUsICd1bmtub3duJywgJ3Vua25vd24nICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCggbGV2ZWwsIGNhdGVnb3J5LCBsZXZlbEluZGV4ICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTY2VuZURhdGFBc05ld0xldmVsKCBsZXZlbE5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IgKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAubGV2ZWxzLm5ld0xldmVsKGxldmVsTmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTYXZlQXNOZXdMZXZlbFBvcHVwKCl7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ2VkaXRvci1kaXNwbGF5JywgJzxpIGNsYXNzPVwiZmFzIGZhLWNsb25lXCI+PC9pPiBTYXZlIGEgY29weSBhczonLFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAge2lkOiAncG9wdXAtYmFjaycsIHRleHQ6ICdCYWNrJywgY2xpY2s6IGlWID0+IHRoaXMuY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAgICAgIHtpZDogJ3NhdmUtcG9wdXAtc2F2ZScsIHRleHQ6ICdTYXZlJywgY2xpY2s6IGlWID0+IHRoaXMuaGFuZGxlUG9wdXBTYXZlTmV3Q2xpY2soIGlWICl9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAnbGV2ZWwtbmFtZScsIGxhYmVsOiAnTmFtZTonLCBwbGFjZWhvbGRlcjogJ3VubmFtZWQnfSxcclxuICAgICAgICAgICAge25hbWU6ICdsZXZlbC1kaWZmaWN1bHR5JywgbGFiZWw6ICdEaWZmaWN1bHR5OicsIHBsYWNlaG9sZGVyOiAnZWFzeSd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ2xldmVsLWNyZWF0b3InLCBsYWJlbDogJ0NyZWF0b3I6JywgcGxhY2Vob2xkZXI6ICdZb3UnfVxyXG4gICAgICAgIF0gKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cFNhdmVOZXdDbGljayggaVYgKXtcclxuICAgICAgICB0aGlzLnNhdmVTY2VuZURhdGFBc05ld0xldmVsKFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtbmFtZSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtZGlmZmljdWx0eSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtY3JlYXRvciddXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cFJlbmFtZUNsaWNrKCBpViApe1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5yZW5hbWVMZXZlbChcclxuICAgICAgICAgICAgdGhpcy5sZXZlbEluZGV4LFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtbmFtZSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtZGlmZmljdWx0eSddLFxyXG4gICAgICAgICAgICBpVlsnbGV2ZWwtY3JlYXRvciddXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlUG9wdXAoKXtcclxuICAgICAgICB0aGlzLnBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubG9hZExldmVsQXRQb3B1cENsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRMZXZlbEF0UG9wdXBDbG9zZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvTGV2ZWxzKCl7XHJcbiAgICAgICAgdGhpcy5lbmQoKTtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMuc3RhcnQoIHRoaXMuY2F0ZWdvcnksIHRoaXMubGV2ZWxJbmRleCApO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVNhdmVCdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7IHRoaXMuY2xvc2VQb3B1cCgpIH07XHJcbiAgICAgICAgdGhpcy5zaG93U2F2ZUFzTmV3TGV2ZWxQb3B1cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUxldmVsTmFtZUNsaWNrKCBlICl7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hUb0xldmVscygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVRlc3RCdXR0b25DbGljayggZSApe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHAucGxheS5zdGFydCggdGhpcy5sZXZlbCwgdGhpcy5jYXRlZ29yeSwgdGhpcy5sZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTmV3QnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5zdGFydCggJ3ByZXNldHMnICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUmVuYW1lQnV0dG9uQ2xpY2soIGUgKXtcclxuICAgICAgICBpZiAodGhpcy5wb3B1cCkgeyB0aGlzLmNsb3NlUG9wdXAoKSB9O1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAncHJlc2V0cycpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2F2ZUFzTmV3TGV2ZWxQb3B1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbEF0UG9wdXBDbG9zZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNhdGVnb3J5ID09PSAneW91ckxldmVscycpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ2VkaXRvci1kaXNwbGF5JywgYDxpIGNsYXNzPVwiZmFzIGZhLWktY3Vyc29yXCI+PC9pPiBSZW5hbWUgbGV2ZWwgdG86YCxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAge2lkOiAncG9wdXAtYmFjaycsIHRleHQ6ICdCYWNrJywgY2xpY2s6IGlWID0+IHRoaXMuY2xvc2VQb3B1cCggaVYgKX0sXHJcbiAgICAgICAgICAgICAgICB7aWQ6ICdyZW5hbWUtcG9wdXAtcmVuYW1lJywgdGV4dDogJ1NhdmUnLCBjbGljazogaVYgPT4gdGhpcy5oYW5kbGVQb3B1cFJlbmFtZUNsaWNrKCBpViApfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLW5hbWUnLCBsYWJlbDogJ05hbWU6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwubmFtZX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLWRpZmZpY3VsdHknLCBsYWJlbDogJ0RpZmZpY3VsdHk6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwuZGlmZmljdWx0eX0sXHJcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xldmVsLWNyZWF0b3InLCBsYWJlbDogJ0NyZWF0b3I6JywgcGxhY2Vob2xkZXI6IHRoaXMubGV2ZWwuY3JlYXRvcn1cclxuICAgICAgICAgICAgXSApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5uZXdfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZU5ld0J1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMuc2F2ZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlU2F2ZUJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMudGVzdF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlVGVzdEJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMubGV2ZWxfbmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVMZXZlbE5hbWVDbGljayggZSApKTtcclxuICAgICAgICB0aGlzLnJlbmFtZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUmVuYW1lQnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNlbGVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvciggZWRpdG9yLCBob3RiYXIgKXtcclxuICAgICAgICB0aGlzLmVkaXRvciA9IGVkaXRvcjtcclxuICAgICAgICB0aGlzLmhvdGJhciA9IGhvdGJhcjtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlQWxsRW50aXRpZXNCYWNrZ3JvdW5kID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkJhY2tncm91bmRUb0NoYW5nZUVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGVGaXJzdFNlbGVjdGlvbkJhY2tncm91bmQoKSB7XHJcbiAgICAgICAgdGhpcy5ob3RiYXIuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgICAgIHRpbGU6IHtjOjAsIHI6MH0sXHJcbiAgICAgICAgICAgIHR5cGU6ICdTZWxlY3Rpb25CYWNrZ3JvdW5kJ1xyXG4gICAgICAgIH0gKVswXS5tb3VzZURvd25IYW5kbGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggc2VsZWN0aW9uQmFja2dyb3VuZCApe1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNlbGVjdGlvbkJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxlY3Rpb25CYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbkJhY2tncm91bmQuYWN0aXZhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVudGl0eSA9IHNlbGVjdGlvbkJhY2tncm91bmQub3RoZXJFbnRpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCA9IHNlbGVjdGlvbkJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FsbEVudGl0aWVzU2VsZWN0aW9uKCBzZWxlY3Rpb25CYWNrZ3JvdW5kICkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLmNoYW5nZVN0YXRlKCAnYWxsLWVudGl0aWVzLXNlbGVjdGlvbicgKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkJhY2tncm91bmRUb0NoYW5nZUVudGl0eSA9IHNlbGVjdGlvbkJhY2tncm91bmQ7XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5lZGl0b3IuYWxsX2VudGl0aWVzX2dyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7dHlwZTogc2VsZWN0aW9uQmFja2dyb3VuZC5vdGhlckVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lIH0gKVswXTtcclxuICAgICAgICBjb25zdCBhbGxFbnRpdGllc0JhY2tncm91bmQgPSB0aGlzLmVkaXRvci5hbGxfZW50aXRpZXNfZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgICAgICAgdGlsZToge2M6IGVudGl0eS5jLCByOmVudGl0eS5yfSwgdHlwZTogJ0FsbEVudGl0aWVzQmFja2dyb3VuZCdcclxuICAgICAgICB9IClbMF07XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWxsRW50aXRpZXNCYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQWxsRW50aXRpZXNCYWNrZ3JvdW5kLmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWxsRW50aXRpZXNCYWNrZ3JvdW5kLmFjdGl2YXRlKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVBbGxFbnRpdGllc0JhY2tncm91bmQgPSBhbGxFbnRpdGllc0JhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RW50aXR5RnJvbUFsbCggZW50aXR5ICkge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLmNoYW5nZVN0YXRlKCAnZWRpdG9yJyApO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQmFja2dyb3VuZFRvQ2hhbmdlRW50aXR5Lm90aGVyRW50aXR5LmRlbGV0ZSgpO1xyXG4gICAgICAgIHRoaXMuZWRpdG9yLmhvdGJhcl9ncmlkLm5ld0VudGl0eUluc3RhbmNlKFxyXG4gICAgICAgICAgICBlbnRpdHkuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAge30sXHJcbiAgICAgICAgICAgIHtjOiB0aGlzLnNlbGVjdGlvbkJhY2tncm91bmRUb0NoYW5nZUVudGl0eS5jLCByOiAwfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVTZWxlY3Rpb25CYWNrZ3JvdW5kKHRoaXMuc2VsZWN0aW9uQmFja2dyb3VuZFRvQ2hhbmdlRW50aXR5KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRvckhlbHAgPSB7XHJcbiAgICBlbmdsaXNoOiBcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnUGxhY2UgRW50aXRpZXM6JyxcclxuICAgICAgICAgICAgcDogJ1NlbGVjdCB0aGUgZW50aXR5IGluIHRoZSBzZWxlY3Rpb24gYmFyLCB0aGVuIGNsaWNrIChvciBob2xkIGFuZCBkcmFnKSB0byBwbGFjZSBpdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdEZWxldGUgRW50aXRpZXM6JyxcclxuICAgICAgICAgICAgcDogJ1NlbGVjdCB0aGUgZW50aXR5IGluIHRoZSBzZWxlY3Rpb24gYmFyLCB0aGVuIHByZXNzIGN0cmwgYW5kIGNsaWNrIChvciBob2xkIGFuZCBkcmFnKSB0byBkZWxldGUgdGhlIGVudGl0eSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdDdXN0b21pemUgU2VsZWN0aW9uIEJhcjonLFxyXG4gICAgICAgICAgICBwOiAnRG91YmxlY2xpY2sgYSBzbG90IGluIHRoZSBzZWxlY3Rpb24gYmFyLCB0aGVuIHNlbGVjdCB0aGUgbmV3IGVudGl0eSB5b3Ugd2FudCBpbiB0aGF0IHNsb3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnU2F2ZTonLFxyXG4gICAgICAgICAgICBwOiAnQWxsIGNoYW5nZXMgYXJlIGF1dG9tYXRpY2FsbHkgc2F2ZWQuIFByZXNzIHRoZSA8aSBjbGFzcz1cImZhcyBmYS1jbG9uZVwiPjwvaT4gaWNvbiB0byBkdXBsaWNhdGUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIExldmVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoMzogJ1JlbmFtZTonLFxyXG4gICAgICAgICAgICBwOiAnUHJlc3MgdGhlIDxpIGNsYXNzPVwiZmFzIGZhLWktY3Vyc29yXCI+PC9pPiBpY29uIHRvIHJlbmFtZSB0aGUgbGV2ZWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnTmV3IExldmVsOicsXHJcbiAgICAgICAgICAgIHA6ICdUbyBzdGFydCBjcmVhdGluZyBhIG5ldyBsZXZlbCwgcHJlc3MgdGhlIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+IGljb24gYW5kIGNob29zZSBhIHByZXNldCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdVbmxvY2sgTmV3IEVudGl0aWVzOicsXHJcbiAgICAgICAgICAgIHA6ICdQcm9ncmVzcyBpbiB0aGUgY2xhc3NpYyBsZXZlbHMgdG8gdW5sb2NrIG5ldyBlbnRpdGllcyBpbiB0aGUgZWRpdG9yJ1xyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tICcuLi8uLi9ncmlnYS9lbnRpdHknO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25CYWNrZ3JvdW5kIH0gZnJvbSAnLi9zZWxlY3Rpb25fYmFja2dyb3VuZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWxsRW50aXRpZXNCYWNrZ3JvdW5kIGV4dGVuZHMgU2VsZWN0aW9uQmFja2dyb3VuZCB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHt9LCBhcmdzICk7XHJcbiAgICB0aGlzLm90aGVyRW50aXR5ID0gbnVsbDtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2RlYWN0aXZlJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVhY3RpdmU6ICcnLFxyXG4gICAgICAgICAgICAgYWN0aXZlOiAnLi90aWxlX2ltZy9zZWxlY3Rpb25fYmFja2dyb3VuZF9hY3RpdmVfZ2VuXzIuanBnJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoKXtcclxuICAgIGlmICh0aGlzLm90aGVyRW50aXR5KSB7XHJcbiAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2VsZWN0RW50aXR5RnJvbUFsbCggdGhpcy5vdGhlckVudGl0eSApO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZFRpbGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCB7XHJcbiAgICAgIHdpZHRoOiAwLjI1LFxyXG4gICAgICBoZWlnaHQ6IDAuMjUsXHJcbiAgICAgIGNPZmZzZXQ6IE1hdGgucmFuZG9tKCkqMy80LFxyXG4gICAgICByT2Zmc2V0OiBNYXRoLnJhbmRvbSgpKjMvNCxcclxuICAgICAgc2NlbmVMb2FkZWRTdWJzY3JpcHRpb246IHRydWUsXHJcbiAgICB9LCBhcmdzICk7XHJcbiAgICBpZiAodGhpcy5ncmlkLm5hbWUgPT09ICdlZGl0b3InKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Nb3VzZURvd24oJ2VkaXRvcicpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvTW91c2VFbnRlcignZWRpdG9yJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnR5cGUgPSBwYXJhbXMudHlwZSB8fCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCk7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdwJyArIHRoaXMudHlwZTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgcDA6ICcuL3RpbGVfaW1nL3JlZF9mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHAxOiAnLi90aWxlX2ltZy9vcmFuZ2VfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwMjogJy4vdGlsZV9pbWcvdHVycXVvaXNlX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDM6ICcuL3RpbGVfaW1nL2xpZ2h0X2JsdWVfZmxvd2VyLmpwZycsXHJcbiAgICAgICAgICAgICBwNDogJy4vdGlsZV9pbWcvZGFya19ibHVlX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDU6ICcuL3RpbGVfaW1nL3llbGxvd19mbG93ZXIuanBnJyxcclxuICAgICAgICAgICAgIHA2OiAnLi90aWxlX2ltZy9waW5rX2Zsb3dlci5qcGcnLFxyXG4gICAgICAgICAgICAgcDc6ICcuL3RpbGVfaW1nL3B1cnBsZV9mbG93ZXIuanBnJyx9O1xyXG4gIH1cclxuXHJcbiAgbGV0RW50aXRpZXNGYWxsRG93bihqdW1wID0gdHJ1ZSl7IC8vbGV0cyBhbGwgZW50aXRpZXMgZmFsbCBkb3duIChub3QganVzdCBzb2xpZClcclxuICAgIGxldCBlbnRpdGllc09uVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn1cclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gZS5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnQmFja2dyb3VuZFRpbGUnICk7XHJcbiAgICBsZXQgZmxvb3JMYXllciA9IDEwO1xyXG4gICAgbGV0IGVtcHR5TGF5ZXJzRm9yU3RvbmVTaGFwZSA9IDA7XHJcbiAgICBpZiAoIGVudGl0aWVzT25UaWxlLmZpbmQoIGUgPT4gWydIb2xlJywgJ0hvbGVDaXJjbGUnXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICkgKXsgZmxvb3JMYXllciA9IDAgfTtcclxuICAgIGlmICggZW50aXRpZXNPblRpbGUuZmluZCggZSA9PiBlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdIb2xlQ2lyY2xlJyApKXsgZW1wdHlMYXllcnNGb3JTdG9uZVNoYXBlID0gLTEgfTtcclxuICAgIGVudGl0aWVzT25UaWxlID0gZW50aXRpZXNPblRpbGUuZmlsdGVyKCBlID0+ICFbJ0hvbGUnLCAnSG9sZUJvcmRlcicsICdIb2xlQ2lyY2xlJ10uaW5jbHVkZXMoZS5jb25zdHJ1Y3Rvci5uYW1lKSApO1xyXG4gICAgY29uc3QgaGlnaGVzdExheWVyID0gTWF0aC5tYXgoLi4uZW50aXRpZXNPblRpbGUubWFwKCBlID0+IDEwK2UubGF5ZXJBZGRlbmQgKSk7XHJcbiAgICBjb25zdCBzb2xpZEVudGl0eU9uQmFzZUxheWVyID0gW107XHJcbiAgICBmb3IgKGxldCBjdXJyZW50QmFzZUxheWVyID0gZmxvb3JMYXllcjsgY3VycmVudEJhc2VMYXllciA8PSBoaWdoZXN0TGF5ZXI7IGN1cnJlbnRCYXNlTGF5ZXIrPTEwKSB7XHJcbiAgICAgIHNvbGlkRW50aXR5T25CYXNlTGF5ZXJbIGN1cnJlbnRCYXNlTGF5ZXIgXSA9IGVudGl0aWVzT25UaWxlLmZpbmQoIGUgPT4gMTArZS5sYXllckFkZGVuZCA9PT0gY3VycmVudEJhc2VMYXllciAmJiBlLmxheWVyJTEwID09PSA3KTtcclxuICAgIH1cclxuICAgIGxldCBlbXB0eUxheWVycyA9IDA7XHJcbiAgICBmb3IgKGxldCBjdXJyZW50QmFzZUxheWVyID0gZmxvb3JMYXllcjsgY3VycmVudEJhc2VMYXllciA8PSBoaWdoZXN0TGF5ZXI7IGN1cnJlbnRCYXNlTGF5ZXIrPTEwKSB7XHJcbiAgICAgIGNvbnN0IGVudGl0aWVzT25CYXNlTGF5ZXIgPSBlbnRpdGllc09uVGlsZS5maWx0ZXIoIGUgPT4gMTArZS5sYXllckFkZGVuZCA9PT0gY3VycmVudEJhc2VMYXllciApO1xyXG4gICAgICBlbnRpdGllc09uQmFzZUxheWVyLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLm1vdmVWZXJ0aWNhbGx5ICYmIGVtcHR5TGF5ZXJzID4gMCkge1xyXG4gICAgICAgICAgaWYgKCEoZS5zaGFwZSA9PT0gJ3N0b25lJyAmJiBlbXB0eUxheWVyc0ZvclN0b25lU2hhcGUgPD0gMCkpe1xyXG4gICAgICAgICAgICBlLm1vdmVWZXJ0aWNhbGx5KC1lbXB0eUxheWVycyxqdW1wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gKTtcclxuICAgICAgaWYgKCFzb2xpZEVudGl0eU9uQmFzZUxheWVyW2N1cnJlbnRCYXNlTGF5ZXJdKSB7XHJcbiAgICAgICAgZW1wdHlMYXllcnMrKztcclxuICAgICAgICBlbXB0eUxheWVyc0ZvclN0b25lU2hhcGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVudGl0aWVzT25UaWxlLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGUudXBkYXRlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBlLnVwZGF0ZVN0YXRlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICBtb3ZlRW50aXRpZXNVcCggc3RheUVudGl0eSwganVtcCA9IHRydWUgKXtcclxuICAgIGNvbnN0IGVudGl0aWVzT25UaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfVxyXG4gICAgfSApLmZpbHRlciggZSA9PiAhWydCYWNrZ3JvdW5kVGlsZScsICdIb2xlJywgJ0hvbGVCb3JkZXInXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICk7XHJcbiAgICBjb25zdCBiYXNlTGF5ZXIgPSAxMCArIHN0YXlFbnRpdHkubGF5ZXJBZGRlbmQ7XHJcbiAgICBjb25zdCBlbnRpdGllc1RvTW92ZVVwID0gZW50aXRpZXNPblRpbGUuZmlsdGVyKCBlID0+IDEwK2UubGF5ZXJBZGRlbmQgPT09IGJhc2VMYXllciAmJiBlICE9PSBzdGF5RW50aXR5ICk7XHJcbiAgICBlbnRpdGllc1RvTW92ZVVwLmZvckVhY2goIGUgPT4ge1xyXG4gICAgICBpZiAoZS5tb3ZlVmVydGljYWxseSkge2UubW92ZVZlcnRpY2FsbHkoMSxqdW1wKX1cclxuICAgIH0gKTtcclxuICAgIGNvbnN0IHNvbGlkRW50aXR5TW92ZWRVcCA9IGVudGl0aWVzVG9Nb3ZlVXAuZmluZCggZSA9PiBlLmxheWVyJTEwID09PSA3ICk7XHJcbiAgICBpZiAoc29saWRFbnRpdHlNb3ZlZFVwKSB7XHJcbiAgICAgIHRoaXMubW92ZUVudGl0aWVzVXAoc29saWRFbnRpdHlNb3ZlZFVwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgY3RybEtleSApe1xyXG4gICAgaWYgKHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5wb3B1cCkge3JldHVybn07XHJcblxyXG4gICAgaWYgKHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2VsZWN0ZWRFbnRpdHkpIHtcclxuICAgICAgY29uc3Qgc2FtZUVudGl0aWVzT25UaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dGlsZTp7Yzp0aGlzLmMscjp0aGlzLnJ9LHR5cGU6ICB0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3Iuc2VsZWN0aW9uLnNlbGVjdGVkRW50aXR5LmNvbnN0cnVjdG9yLm5hbWV9KTtcclxuICAgICAgaWYgKHNhbWVFbnRpdGllc09uVGlsZS5sZW5ndGggPT09IDAgJiYgIWN0cmxLZXkpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEVudGl0eSA9IHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2VsZWN0ZWRFbnRpdHk7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgICAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgICAgICB9ICk7XHJcbiAgICAgICAgaWYgKCFlbnRpdGllc09uVGlsZS5tYXAoZSA9PiBlLmFsbG93UGxhY2luZyggc2VsZWN0ZWRFbnRpdHkgKSkuaW5jbHVkZXMoZmFsc2UpKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRFbnRpdHkuYWxsb3dCZWluZ1BsYWNlZCgge2M6dGhpcy5jLCByOnRoaXMucn0sIHRoaXMuZ3JpZCApKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSggIHNlbGVjdGVkRW50aXR5LmNvbnN0cnVjdG9yLm5hbWUsIHt9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9KTtcclxuICAgICAgICAgICAgdGhpcy5sZXRFbnRpdGllc0ZhbGxEb3duKCk7XHJcbiAgICAgICAgICAgIGVudGl0aWVzT25UaWxlLmZvckVhY2goIGUgPT4gZS5uZXdFbnRpdHlXYXNQbGFjZWRPblRpbGUoZW50aXR5KSApO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWdhLmdob3N0eS5lZGl0b3Iuc2NlbmVDaGFuZ2VkSGFuZGxlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzYW1lRW50aXRpZXNPblRpbGUubGVuZ3RoID09PSAxICYmIGN0cmxLZXkpIHtcclxuICAgICAgICBzYW1lRW50aXRpZXNPblRpbGVbMF0uYmVmb3JlRGVsZXRlKCk7XHJcbiAgICAgICAgc2FtZUVudGl0aWVzT25UaWxlWzBdLmRlbGV0ZSgpO1xyXG4gICAgICAgIHRoaXMubGV0RW50aXRpZXNGYWxsRG93bigpO1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzT25UaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGVudGl0aWVzT25UaWxlLmZvckVhY2goIGUgPT4gZS5lbnRpdHlPblNhbWVUaWxlV2FzRGVsZXRlZChzYW1lRW50aXRpZXNPblRpbGVbMF0pICk7XHJcbiAgICAgICAgdGhpcy5ncmlnYS5naG9zdHkuZWRpdG9yLnNjZW5lQ2hhbmdlZEhhbmRsZXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBtb3VzZUVudGVySGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKXtcclxuICAgIGlmIChtb3VzZUJ1dHRvbnMpIHtcclxuICAgICAgdGhpcy5tb3VzZURvd25IYW5kbGVyKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIGN0cmxLZXkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjZW5lTG9hZGVkSGFuZGxlcigpe1xyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZFNjZW5lTG9hZGVkKSB7XHJcbiAgICAgIHRoaXMubGV0RW50aXRpZXNGYWxsRG93bigpO1xyXG4gICAgICBpZiAodGhpcy5ncmlkLm5hbWUgIT09ICdwbGF5Jykge3JldHVybn07XHJcbiAgICAgIHRoaXMuc2NlbmVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmMgPT0gMCAmJiB0aGlzLnIgPT0gMCkgey8va2V5VHJhY2tUaWxlXHJcbiAgICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS5rZXlUcmFja0VudGl0eSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5naG9zdHlBbmltYXRpb25zRW5kZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZmFzdE1vZGUgPSB7fTtcclxuICAgICAgICB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZCA9IHt9O1xyXG4gICAgICAgIHRoaXMudGlsZXNUb1VwZGF0ZSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZ3JpZC5rZXlEb3duU3Vic2NyaXB0aW9ucykuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9LZXlEb3duKCBrZXkgKTtcclxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9LZXlVcCgga2V5ICk7XHJcbiAgICAgICAgICB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZFtrZXldID0gMDtcclxuICAgICAgICAgIHRoaXMuZmFzdE1vZGVba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvVG91Y2hTd2lwZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmJhY2tncm91bmRTY2VuZUxvYWRlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBrZXlEb3duSGFuZGxlcigga2V5ICl7IC8va2V5VHJhY2tUaWxlXHJcbiAgICBjb25zdCBhbGxFbnRpdGllcyA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgZ29hbHMgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHR5cGU6ICdHb2FsJ1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy50aWxlc1RvVXBkYXRlLmZvckVhY2goIHRpbGUgPT4ge1xyXG4gICAgICB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgdGlsZSwgdHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgICB9IClbMF0ubGV0RW50aXRpZXNGYWxsRG93bigpO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy50aWxlc1RvVXBkYXRlID0gW107XHJcbiAgICBjb25zdCB0YXNrRG9uZUFycmF5ID0gYWxsRW50aXRpZXMubWFwKCBlID0+IGUudGFza0RvbmUoKSApO1xyXG4gICAgaWYgKCF0YXNrRG9uZUFycmF5LmluY2x1ZGVzKCBmYWxzZSApICYmIGdvYWxzLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgIGlmICh0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKHt0eXBlOidHb2FsJ30pKSB7IC8vaWYgdGhlcmUgZXhpc3RzIGF0IGxlYXN0IG9uZSBnb2FsXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmxldmVsRG9uZSgpLCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2NlbmVDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LnBsYXkudXBkYXRlVW5kb0hpc3RvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjZW5lQ2hhbmdlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTd2lwZUhhbmRsZXIoIGRpcmVjdGlvbiApe1xyXG4gICAgaWYgKHRoaXMuZ3JpZ2EuZ2hvc3R5LnBsYXkucG9wdXApIHsgcmV0dXJuIH07XHJcbiAgICB0aGlzLmtleURvd25IYW5kbGVyKCBgQXJyb3cke2RpcmVjdGlvbn1gICk7XHJcbiAgfVxyXG5cclxuICBrZXlVcEhhbmRsZXIoIGtleSApe1xyXG4gICAgdGhpcy5mYXN0TW9kZVtrZXldID0gZmFsc2U7XHJcbiAgICB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZFtrZXldKys7XHJcbiAgfVxyXG5cclxuICBhZGRUaWxlc1RvVXBkYXRlKCB0aWxlcyApIHtcclxuICAgIHRpbGVzLmZvckVhY2goIHQgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMudGlsZXNUb1VwZGF0ZS5maW5kKCB1VCA9PiB1VC5jID09PSB0LmMgJiYgdVQuciA9PT0gdC5yICkpIHtcclxuICAgICAgICB0aGlzLnRpbGVzVG9VcGRhdGUucHVzaCh0KTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLy91c2VkIHRvIGltcGxlbWVudCB0aGUgaG9sZC1hbmQtbW92ZSBmZWF0dXJlXHJcbiAgbW92ZUFuaW1hdGlvbkNoYWluT2ZHaG9zdHlFbXB0aWVkKCkge1xyXG4gICAgdGhpcy5naG9zdHlBbmltYXRpb25zRW5kZWQrKztcclxuICAgIGNvbnN0IGdob3N0aWVzID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dHlwZTonR2hvc3R5J30pO1xyXG4gICAgaWYgKCB0aGlzLmdob3N0eUFuaW1hdGlvbnNFbmRlZCA9PT0gZ2hvc3RpZXMubGVuZ3RoICkge1xyXG4gICAgICB0aGlzLmhhbmRsZUtleUhvbGQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUhvbGQoKSB7IC8vYWxtb3N0IHdvcmtzLCBwcm9iYWJseSBzb21lIGlzc3VlIGNhdXNlIG9mIGtleXMgZ2V0dGluZyBzdHVjayAoZ3JpZ2EpO1xyXG4gICAgdGhpcy5naG9zdHlBbmltYXRpb25zRW5kZWQgPSAwO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZ3JpZC5rZXlEb3duU3Vic2NyaXB0aW9ucykuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgaWYgKHRoaXMuZ3JpZ2Eua2V5c1ByZXNzZWQuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZhc3RNb2RlW2tleV0pIHtcclxuICAgICAgICAgIHRoaXMuZ3JpZC5rZXlEb3duU3Vic2NyaXB0aW9uc1trZXldLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIGVudGl0eS5rZXlEb3duSGFuZGxlcigga2V5LCB0cnVlICk7XHJcbiAgICAgICAgICB9ICk7O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50VGltZUtleUlzVXAgPSB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZFtrZXldO1xyXG4gICAgICAgICAgc2V0VGltZW91dCggKGN1cnJlbnRUaW1lS2V5SXNVcCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFRpbWVLZXlJc1VwID09PSB0aGlzLnRpbWVzS2V5SXNSZWxlYXNlZFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5mYXN0TW9kZVtrZXldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtleUhvbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMjAwLCBjdXJyZW50VGltZUtleUlzVXAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIGluY2x1ZGVJblNjZW5lRGF0YSgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQcmVzc3VyZVBsYXRlIH0gZnJvbSAnLi9wcmVzc3VyZV9wbGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29wcGVyUHJlc3N1cmVQbGF0ZSBleHRlbmRzIFByZXNzdXJlUGxhdGUge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHBhcmFtcy5nYXRlcyA9ICdDb3BwZXJTdG9uZSc7XHJcbiAgICBwYXJhbXMubG9naWNHYXRlID0gJ09SJztcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgY29uc3QgbGV2ZWxOYW1lcyA9IGNsYXNzaWNMZXZlbHMubWFwKCBsID0+IGwubmFtZSApO1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsTmFtZXMuaW5kZXhPZiggJ1BhcmtpbmcgTGVmdCcgKTtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyB1cDogJy4vdGlsZV9pbWcvY29wcGVyX3ByZXNzdXJlX3BsYXRlLnBuZycsXHJcbiAgICAgICAgICAgICBkb3duOiAnLi90aWxlX2ltZy9jb3BwZXJfcHJlc3N1cmVfcGxhdGVfZG93bi5wbmcnIH07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2F0ZVN0b25lIH0gZnJvbSAnLi9nYXRlX3N0b25lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb3BwZXJTdG9uZSBleHRlbmRzIEdhdGVTdG9uZSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncyApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnUGFya2luZyBMZWZ0JyApO1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGNsb3NlZDogJy4vdGlsZV9pbWcvY29wcGVyX3N0b25lLmpwZycsXHJcbiAgICAgICAgICAgICBvcGVuOiAnLi90aWxlX2ltZy9jb3BwZXJfb3Blbi5wbmcnfTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQcmVzc3VyZVBsYXRlIH0gZnJvbSAnLi9wcmVzc3VyZV9wbGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlhbW9uZFByZXNzdXJlUGxhdGUgZXh0ZW5kcyBQcmVzc3VyZVBsYXRlIHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBwYXJhbXMuZ2F0ZXMgPSAnRGlhbW9uZFN0b25lJztcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgY29uc3QgbGV2ZWxOYW1lcyA9IGNsYXNzaWNMZXZlbHMubWFwKCBsID0+IGwubmFtZSApO1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsTmFtZXMuaW5kZXhPZiggJ1BhcmtpbmcgTGVmdCcgKTtcclxuICAgIHJldHVybiBsZXZlbEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyB1cDogJy4vdGlsZV9pbWcvZGlhbW9uZF9wcmVzc3VyZV9wbGF0ZS5wbmcnLFxyXG4gICAgICAgICAgICAgZG93bjogJy4vdGlsZV9pbWcvZGlhbW9uZF9wcmVzc3VyZV9wbGF0ZV9kb3duLnBuZycgfTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHYXRlU3RvbmUgfSBmcm9tICcuL2dhdGVfc3RvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpYW1vbmRTdG9uZSBleHRlbmRzIEdhdGVTdG9uZSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncyApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFVubG9ja0xldmVsKCBjbGFzc2ljTGV2ZWxzICl7XHJcbiAgICBjb25zdCBsZXZlbE5hbWVzID0gY2xhc3NpY0xldmVscy5tYXAoIGwgPT4gbC5uYW1lICk7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxOYW1lcy5pbmRleE9mKCAnUGFya2luZyBMZWZ0JyApO1xyXG4gICAgcmV0dXJuIGxldmVsSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGNsb3NlZDogJy4vdGlsZV9pbWcvZGlhbW9uZF9zdG9uZS5qcGcnLFxyXG4gICAgICAgICAgICAgb3BlbjogJy4vdGlsZV9pbWcvZGlhbW9uZF9vcGVuLnBuZyd9O1xyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5pbXBvcnQgeyBTdG9uZSB9IGZyb20gJy4vc3RvbmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhdGVTdG9uZSBleHRlbmRzIFN0b25lIHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzICk7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHBhcmFtcy5zdGF0ZSB8fCAnY2xvc2VkJztcclxuICB9XHJcblxyXG4gIG9wZW4oKXtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ29wZW4nO1xyXG4gICAgdGhpcy5jaGFuZ2VMYXllciggMTMgKTtcclxuICAgIHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgIHR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKVswXS5sZXRFbnRpdGllc0ZhbGxEb3duKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCl7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdjbG9zZWQnO1xyXG4gICAgdGhpcy5jaGFuZ2VMYXllciggMTcgKTtcclxuICAgIHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgIHR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKVswXS5tb3ZlRW50aXRpZXNVcCggdGhpcywgZmFsc2UgKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYXJhbXMoKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IEdob3N0eUVudGl0eS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhcmFtcy5jYWxsKHRoaXMpO1xyXG4gICAgcGFyYW1zLnN0YXRlID0gdGhpcy5jdXJyZW50SW1hZ2U7XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dNb3ZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgaWYgKHRoaXMuY3VycmVudEltYWdlID09PSAnb3BlbicpIHtcclxuICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfSBlbHNlIHtcclxuICAgICByZXR1cm4gR2hvc3R5RW50aXR5LnByb3RvdHlwZS5hbGxvd01vdmUuY2FsbCh0aGlzLCByZXF1ZXN0Q2hhaW4pO1xyXG4gICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2hvc3R5IGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNywgJ2dob3N0eScgKTtcclxuICAgIGlmICh0aGlzLmdyaWQubmFtZSA9PT0gJ3BsYXknKSB7XHJcbiAgICAgIFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXS5mb3JFYWNoKCBrZXkgPT4gdGhpcy5zdWJzY3JpYmVUb0tleURvd24oa2V5KSk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ub3VjaFN3aXBlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbGlkYXRlZEVudGl0aWVzID0gW107XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHBhcmFtcy5mYWNpbmcgfHwgJ3JpZ2h0JztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgcmlnaHQ6ICcuL3RpbGVfaW1nL2dob3N0eV9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICAgbGVmdDogJy4vdGlsZV9pbWcvZ2hvc3R5X2xlZnQucG5nJyxcclxuICAgICAgICAgICAgIHVwOiAnLi90aWxlX2ltZy9naG9zdHlfbWlkX3JpZ2h0LnBuZycsXHJcbiAgICAgICAgICAgICBkb3duOiAnLi90aWxlX2ltZy9naG9zdHlfbWlkX2xlZnQucG5nJ307XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50UGFyYW1zKCl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBHaG9zdHlFbnRpdHkucHJvdG90eXBlLmdldEN1cnJlbnRQYXJhbXMuY2FsbCh0aGlzKTtcclxuICAgIHBhcmFtcy5mYWNpbmcgPSB0aGlzLmN1cnJlbnRJbWFnZTtcclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICBrZXlEb3duSGFuZGxlcigga2V5LCBob2xkID0gZmFsc2UgKXtcclxuICAgIGxldCBtb3ZlRGlyZWN0aW9uID0ga2V5LnNsaWNlKDUpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBsZXQgaW1hZ2VEaXJlY3Rpb24gPSBtb3ZlRGlyZWN0aW9uO1xyXG4gICAgdGhpcy5hZGRBbmltYXRpb25GdW5jdGlvbiggJ21vdmUnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3VycmVudEltYWdlID0gaW1hZ2VEaXJlY3Rpb247XHJcbiAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCAwKTtcclxuICAgIH0gKTtcclxuICAgIGlmICh0aGlzLnJlcXVlc3RNb3ZlKCBtb3ZlRGlyZWN0aW9uICkpIHtcclxuICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS5rZXlUcmFja0VudGl0eS5zY2VuZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHsgbW92ZURpcmVjdGlvbiA9ICdzdGF5JyB9O1xyXG4gICAgdGhpcy5tb3ZlKCBtb3ZlRGlyZWN0aW9uLCBmYWxzZSwgaG9sZCk7XHJcbiAgfVxyXG5cclxuICB0b3VjaFN3aXBlSGFuZGxlciggZGlyZWN0aW9uICl7XHJcbiAgICB0aGlzLmtleURvd25IYW5kbGVyKCBgQXJyb3cke2RpcmVjdGlvbn1gICk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU1vdmUoIHJlcXVlc3RDaGFpbiApe1xyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVkRW50aXRpZXMuaW5jbHVkZXMoIHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzBdICkpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICggdGhpcy5sYXllciUxMCA9PT0gNyAmJiByZXF1ZXN0Q2hhaW5bcmVxdWVzdENoYWluLmxlbmd0aC0xXVswXS5sYXllckFkZGVuZCAhPT0gdGhpcy5sYXllckFkZGVuZCApe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMudmFsaWRhdGVkRW50aXRpZXMucHVzaChyZXF1ZXN0Q2hhaW5bcmVxdWVzdENoYWluLmxlbmd0aC0xXVswXSk7XHJcbiAgICBsZXQgc3VjY2VzcyA9IHRoaXMucmVxdWVzdE1vdmUoIHJlcXVlc3RDaGFpbltyZXF1ZXN0Q2hhaW4ubGVuZ3RoLTFdWzFdICk7XHJcbiAgICB0aGlzLnZhbGlkYXRlZEVudGl0aWVzID0gW107XHJcbiAgICByZXR1cm4gc3VjY2VzcztcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvbkNoYWluRW1wdGllZCggY2F0ZWdvcnkgKXtcclxuICAgIGlmIChjYXRlZ29yeSA9PT0gJ21vdmUnICYmIHRoaXMuZ3JpZC5uYW1lID09PSAncGxheScpIHtcclxuICAgICAgdGhpcy5ncmlnYS5naG9zdHkucGxheS5rZXlUcmFja0VudGl0eS5tb3ZlQW5pbWF0aW9uQ2hhaW5PZkdob3N0eUVtcHRpZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHaG9zdHlFbnRpdHkgfSBmcm9tICcuLi9naG9zdHlfZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBHb2FsIGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNCApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OiAnLi90aWxlX2ltZy9vaWxfbGFtcC5wbmcnfTtcclxuICB9XHJcblxyXG4gIGFsbG93TW92ZSgpe1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICB0YXNrRG9uZSgpIHtcclxuICAgIGxldCBnaG9zdGllcyA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgIHR5cGU6ICdHaG9zdHknLFxyXG4gICAgfSApO1xyXG4gICAgaWYgKGdob3N0aWVzWzBdKSB7cmV0dXJuIGdob3N0aWVzWzBdLmxheWVyQWRkZW5kID09PSB0aGlzLmxheWVyQWRkZW5kfTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsbG93QmVpbmdQbGFjZWQoICB0aWxlLCBlZGl0b3JHcmlkICApe1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSBlZGl0b3JHcmlkLmdldEVudGl0eUluc3RhbmNlcygge3RpbGV9ICk7XHJcbiAgICBjb25zdCBvdGhlckVudGl0eSA9IGVudGl0aWVzT25UaWxlLmZpbmQoIGUgPT4gIVsnSG9sZScsICdIb2xlQm9yZGVyJywgJ0JhY2tncm91bmRUaWxlJ10uaW5jbHVkZXMoZS5jb25zdHJ1Y3Rvci5uYW1lKSApO1xyXG4gICAgaWYgKG90aGVyRW50aXR5KSB7cmV0dXJuIGZhbHNlfVxyXG4gICAgZWxzZSB7cmV0dXJuIHRydWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZGlyZWN0aW9uVG9TaWRlLCBHaG9zdHlFbnRpdHksIG9wcG9zaXRlU2lkZSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbGUgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDEgKTtcclxuICAgIGlmIChbJ3NlbGVjdGlvbi1ob3RiYXInLCAnYWxsLWVudGl0aWVzLXNlbGVjdGlvbiddLmluY2x1ZGVzKHRoaXMuZ3JpZC5uYW1lKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdzZWxlY3Rpb24nO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob2xlTGVmdCA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoXHJcbiAgICAgIHt0aWxlOiB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCdsZWZ0JywgJ21vZHVsbycpLCB0eXBlOidIb2xlJ30pWzBdO1xyXG4gICAgdGhpcy5ob2xlUmlnaHQgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKFxyXG4gICAgICB7dGlsZTogdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbigncmlnaHQnLCAnbW9kdWxvJyksIHR5cGU6J0hvbGUnfSlbMF07XHJcbiAgICB0aGlzLmhvbGVUb3AgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKFxyXG4gICAgICB7dGlsZTogdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbigndG9wJywgJ21vZHVsbycpLCB0eXBlOidIb2xlJ30pWzBdO1xyXG4gICAgdGhpcy5ob2xlQm90dG9tID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyhcclxuICAgICAge3RpbGU6IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oJ2JvdHRvbScsICdtb2R1bG8nKSwgdHlwZTonSG9sZSd9KVswXTtcclxuXHJcbiAgICBpZiAodGhpcy5ob2xlTGVmdCkgeyB0aGlzLmhvbGVMZWZ0LnNldEhvbGUodGhpcywgJ1JpZ2h0Jyl9XHJcbiAgICBlbHNlIHsgdGhpcy5ib3JkZXJMZWZ0ID0gdGhpcy5ncmlkLm5ld0VudGl0eUluc3RhbmNlKCdIb2xlQm9yZGVyJywge3NpZGU6J2xlZnQnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVSaWdodCkgeyB0aGlzLmhvbGVSaWdodC5zZXRIb2xlKHRoaXMsICdMZWZ0JykgfVxyXG4gICAgZWxzZSB7IHRoaXMuYm9yZGVyUmlnaHQgPSB0aGlzLmdyaWQubmV3RW50aXR5SW5zdGFuY2UoJ0hvbGVCb3JkZXInLCB7c2lkZToncmlnaHQnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVUb3ApIHsgdGhpcy5ob2xlVG9wLnNldEhvbGUodGhpcywgJ0JvdHRvbScpIH1cclxuICAgIGVsc2UgeyB0aGlzLmJvcmRlclRvcCA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlOid0b3AnLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICAgIGlmICh0aGlzLmhvbGVCb3R0b20pIHsgdGhpcy5ob2xlQm90dG9tLnNldEhvbGUodGhpcywgJ1RvcCcpIH1cclxuICAgIGVsc2UgeyB0aGlzLmJvcmRlckJvdHRvbSA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlOidib3R0b20nLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICkgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVmYXVsdDogJy4vdGlsZV9pbWcvaG9sZV9iYWNrZ3JvdW5kLmpwZycsXHJcbiAgICAgICAgICAgICBzZWxlY3Rpb246ICcuL3RpbGVfaW1nL2hvbGUuanBnJ307XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIGNvbnN0IGxldmVsTmFtZXMgPSBjbGFzc2ljTGV2ZWxzLm1hcCggbCA9PiBsLm5hbWUgKTtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbE5hbWVzLmluZGV4T2YoICdIb2xlJyApO1xyXG4gICAgcmV0dXJuIGxldmVsSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXRIb2xlKCBob2xlLCBzaWRlICl7XHJcbiAgICB0aGlzW2Bob2xlJHtzaWRlfWBdID0gaG9sZTtcclxuICAgIHRoaXNbYGJvcmRlciR7c2lkZX1gXS5kZWxldGUoKTtcclxuICAgIHRoaXNbYGJvcmRlciR7c2lkZX1gXSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZW1vdmVIb2xlKCBzaWRlICl7XHJcbiAgICB0aGlzW2Bob2xlJHtzaWRlfWBdID0gbnVsbDtcclxuICAgIHRoaXNbYGJvcmRlciR7c2lkZX1gXSA9IHRoaXMuZ3JpZC5uZXdFbnRpdHlJbnN0YW5jZSgnSG9sZUJvcmRlcicsIHtzaWRlLCBob2xlOnRoaXN9LCB7Yzp0aGlzLmMscjp0aGlzLnJ9ICk7XHJcbiAgfVxyXG5cclxuICBiZWZvcmVEZWxldGUoKXtcclxuICAgIE9iamVjdC52YWx1ZXMoIGRpcmVjdGlvblRvU2lkZSApLmZvckVhY2goIHNpZGUgPT4ge1xyXG4gICAgICBpZiAoIHRoaXNbYGJvcmRlciR7c2lkZX1gXSApIHtcclxuICAgICAgICB0aGlzW2Bib3JkZXIke3NpZGV9YF0uZGVsZXRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpc1tgaG9sZSR7c2lkZX1gXS5yZW1vdmVIb2xlKCBvcHBvc2l0ZVNpZGVbc2lkZS50b0xvd2VyQ2FzZSgpXSApO1xyXG4gICAgICB9XHJcbiAgICB9ICk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kVGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZToge2M6dGhpcy5jLCByOnRoaXMucn0sXHJcbiAgICAgIHR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKVswXTtcclxuICAgIGJhY2tncm91bmRUaWxlLm1vdmVFbnRpdGllc1VwKCB7bGF5ZXJBZGRlbmQ6IC0xMH0gKTtcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCB7IGRpcmVjdGlvblRvU2lkZSwgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9sZUJvcmRlciBleHRlbmRzIEdob3N0eUVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMiApO1xyXG4gICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBwYXJhbXMuc2lkZS50b0xvd2VyQ2FzZSgpIHx8ICd0b3AnO1xyXG4gICAgdGhpcy5ob2xlID0gcGFyYW1zLmhvbGUgfHwgbnVsbDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgdG9wOiAnLi90aWxlX2ltZy9ob2xlX2JvcmRlcl90b3AucG5nJyxcclxuICAgICAgICAgICAgIHJpZ2h0OiAnLi90aWxlX2ltZy9ob2xlX2JvcmRlcl9yaWdodC5wbmcnLFxyXG4gICAgICAgICAgICAgYm90dG9tOiAnLi90aWxlX2ltZy9ob2xlX2JvcmRlcl9ib3R0b20ucG5nJyxcclxuICAgICAgICAgICAgIGxlZnQ6ICcuL3RpbGVfaW1nL2hvbGVfYm9yZGVyX2xlZnQucG5nJ307XHJcbiAgfVxyXG4gIFxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgcmV0dXJuIEluZmluaXR5O1xyXG4gIH1cclxuXHJcbiAgaW5jbHVkZUluU2NlbmVEYXRhKCl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhbGxvd0xlYXZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgIGNvbnN0IHZhbGlkID0gZGlyZWN0aW9uVG9TaWRlW3JlcXVlc3RDaGFpblsgcmVxdWVzdENoYWluLmxlbmd0aC0xIF1bMV1dLnRvTG93ZXJDYXNlKCkgIT09IHRoaXMuY3VycmVudEltYWdlO1xyXG4gICAgY29uc3QgZG93biA9IHJlcXVlc3RDaGFpblsgcmVxdWVzdENoYWluLmxlbmd0aC0xIF1bMF0ubGF5ZXJBZGRlbmQgPT09IC0xMDsgLy9maXhcclxuICAgIGlmIChkb3duICYmICF2YWxpZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBkaXJlY3Rpb25Ub1NpZGUsIEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbGVDaXJjbGUgZXh0ZW5kcyBHaG9zdHlFbnRpdHkge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsIDEgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgY29uc3QgbGV2ZWxOYW1lcyA9IGNsYXNzaWNMZXZlbHMubWFwKCBsID0+IGwubmFtZSApO1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsTmFtZXMuaW5kZXhPZiggJ1BhcmtpbmcgTGVmdCcgKTtcclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBpbWdTb3VyY2VzKCl7XHJcbiAgICByZXR1cm4geyBkZWZhdWx0OicuL3RpbGVfaW1nL2hvbGVfY2lyY2xlLnBuZycgfTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlbGV0ZSgpe1xyXG4gICAgY29uc3QgYmFja2dyb3VuZFRpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHtjOnRoaXMuYywgcjp0aGlzLnJ9LFxyXG4gICAgICB0eXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICB9IClbMF07XHJcbiAgICBiYWNrZ3JvdW5kVGlsZS5tb3ZlRW50aXRpZXNVcCgge2xheWVyQWRkZW5kOiAtMTB9ICk7XHJcbiAgfVxyXG5cclxuICBhbGxvd0xlYXZlKCByZXF1ZXN0Q2hhaW4gKXtcclxuICAgIGlmIChyZXF1ZXN0Q2hhaW5bMF1bMF0ubGF5ZXJBZGRlbmQgPT09IC0xMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBHaG9zdHlFbnRpdHkgfSBmcm9tICcuLi9naG9zdHlfZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzc3VyZVBsYXRlIGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxMywgJ3ByZXNzdXJlX3BsYXRlJyApO1xyXG4gICAgdGhpcy5nYXRlc05hbWUgPSBwYXJhbXMuZ2F0ZXM7XHJcbiAgICB0aGlzLnN0YXRlID0gcGFyYW1zLnN0YXRlIHx8ICd1cCc7XHJcbiAgICB0aGlzLmxvZ2ljR2F0ZSA9IHBhcmFtcy5sb2dpY0dhdGUgfHwgJ0FORCc7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHRoaXMuc3RhdGU7XHJcbiAgfVxyXG5cclxuICByZWxlYXNlKCl7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5jdXJyZW50SW1hZ2UgPSAndXAnO1xyXG4gICAgY29uc3QgZG93bnMgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHR5cGU6IHRoaXMuY29uc3RydWN0b3IubmFtZVxyXG4gICAgfSApLm1hcCggcCA9PiBwLnN0YXRlID09PSAnZG93bicgKTtcclxuICAgIGlmICh0aGlzLmxvZ2ljR2F0ZSA9PT0gJ0FORCdcclxuICAgICAgfHx0aGlzLmxvZ2ljR2F0ZSA9PT0gJ09SJyAmJiAhZG93bnMuaW5jbHVkZXModHJ1ZSkpIHtcclxuICAgICAgdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICAgIHR5cGU6IHRoaXMuZ2F0ZXNOYW1lXHJcbiAgICAgIH0gKS5mb3JFYWNoKCBnID0+IGcuY2xvc2UoKSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJlc3MoKXtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmN1cnJlbnRJbWFnZSA9ICdkb3duJztcclxuICAgIGNvbnN0IGRvd25zID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0eXBlOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcclxuICAgIH0gKS5tYXAoIHAgPT4gcC5zdGF0ZSA9PT0gJ2Rvd24nICk7XHJcbiAgICBpZiAodGhpcy5sb2dpY0dhdGUgPT09ICdBTkQnICYmICFkb3ducy5pbmNsdWRlcyhmYWxzZSlcclxuICAgICAgfHx0aGlzLmxvZ2ljR2F0ZSA9PT0gJ09SJykge1xyXG4gICAgICB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgICAgdHlwZTogdGhpcy5nYXRlc05hbWVcclxuICAgICAgfSApLmZvckVhY2goIGcgPT4gZy5vcGVuKCkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRQYXJhbXMoKXtcclxuICAgIGNvbnN0IHBhcmFtcyA9IEdob3N0eUVudGl0eS5wcm90b3R5cGUuZ2V0Q3VycmVudFBhcmFtcy5jYWxsKHRoaXMpO1xyXG4gICAgcGFyYW1zLnN0YXRlID0gdGhpcy5jdXJyZW50SW1hZ2U7XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgYWxsb3dNb3ZlKCl7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKCl7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVG9wID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfSxcclxuICAgIH0gKS5maWx0ZXIoIGUgPT4gIVsnSG9sZScsICdIb2xlQm9yZGVyJywgJ0JhY2tncm91bmRUaWxlJywgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXS5pbmNsdWRlcyhlLmNvbnN0cnVjdG9yLm5hbWUpICk7XHJcbiAgICBjb25zdCBlbnRpdHlPblRvcCA9IGVudGl0aWVzT25Ub3AuZmluZCggZSA9PiBlLmxheWVyQWRkZW5kID09PSB0aGlzLmxheWVyQWRkZW5kICk7XHJcbiAgICBpZiAoIWVudGl0eU9uVG9wICYmIHRoaXMuc3RhdGUgPT09ICdkb3duJykge1xyXG4gICAgICB0aGlzLnJlbGVhc2UoKTtcclxuICAgIH0gZWxzZSBpZiAoZW50aXR5T25Ub3AgJiYgdGhpcy5zdGF0ZSA9PT0gJ3VwJykge1xyXG4gICAgICB0aGlzLnByZXNzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbGxvd1BsYWNpbmcoIGVudGl0eSApe1xyXG4gICAgcmV0dXJuICFbMywgNCwgN10uaW5jbHVkZXMoZW50aXR5LmxheWVyJTEwKTtcclxuICB9XHJcblxyXG4gIGJlZm9yZURlbGV0ZSgpe1xyXG4gICAgLy9jaGVjayBpZiBhbGwgcmVtYWluaW5nIHByZXNzdXJlIHBsYXRlcyBhcmUgZG93blxyXG4gIH1cclxufSIsImltcG9ydCB7IEdob3N0eUVudGl0eSB9IGZyb20gJy4uL2dob3N0eV9lbnRpdHknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b25lIGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlciggcGFyYW1zLCBhcmdzLCAxNyApO1xyXG4gICAgdGhpcy5zZXRXaWR0aCggMC45ICk7XHJcbiAgICB0aGlzLnNldEhlaWdodCggMC45ICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcuL3RpbGVfaW1nL3N0b25lLmpwZyd9O1xyXG4gIH1cclxuXHJcbiAgYWxsb3dQbGFjaW5nKCBlbnRpdHkgKXtcclxuICAgIGlmICh0aGlzLmxheWVyID09PSA3KSB7cmV0dXJuIGVudGl0eS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnR2hvc3R5J31cclxuICAgIGVsc2Uge3JldHVybiBlbnRpdHkuY29uc3RydWN0b3IubmFtZSA9PT0gJ0hvbGUnfVxyXG4gIH1cclxuXHJcbiAgYWxsb3dCZWluZ1BsYWNlZCggdGlsZSwgZWRpdG9yR3JpZCApe1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRpbGUgPSBlZGl0b3JHcmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB0aWxlXHJcbiAgICB9ICkuZmlsdGVyKCBlID0+ICFbJ0JhY2tncm91bmRUaWxlJywgJ0hvbGUnLCAnSG9sZUJvcmRlciddLmluY2x1ZGVzKGUuY29uc3RydWN0b3IubmFtZSkgKTtcclxuICAgIGlmIChlbnRpdGllc09uVGlsZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgR2hvc3R5RW50aXR5IH0gZnJvbSAnLi4vZ2hvc3R5X2VudGl0eSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29vZGVuQm94IGV4dGVuZHMgR2hvc3R5RW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzLCBzaGFwZSApe1xyXG4gICAgc3VwZXIoIHBhcmFtcywgYXJncywgMTcsIHNoYXBlICk7XHJcbiAgICB0aGlzLnNldFdpZHRoKCAwLjkgKTtcclxuICAgIHRoaXMuc2V0SGVpZ2h0KCAwLjkgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVmYXVsdDogJy4vdGlsZV9pbWcvd29vZGVuX2JveC5qcGcnfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgY29uc3QgbGV2ZWxOYW1lcyA9IGNsYXNzaWNMZXZlbHMubWFwKCBsID0+IGwubmFtZSApO1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IGxldmVsTmFtZXMuaW5kZXhPZiggJ0JveGVzJyApO1xyXG4gICAgcmV0dXJuIGxldmVsSW5kZXg7XHJcbiAgfVxyXG5cclxuICBhbGxvd01vdmUocmVxdWVzdENoYWluKXtcclxuICAgIGlmIChyZXF1ZXN0Q2hhaW4ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RNb3ZlKHJlcXVlc3RDaGFpblswXVsxXSwgcmVxdWVzdENoYWluKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGl0eVdpbGxNb3ZlVG9UaWxlKCBlbnRpdHksIGRpcmVjdGlvbiApIHtcclxuICAgIGlmICggdGhpcy5sYXllckFkZGVuZCA9PT0gZW50aXR5LmxheWVyQWRkZW5kICl7XHJcbiAgICAgIHRoaXMubW92ZSggZGlyZWN0aW9uLCB0cnVlICk7XHJcbiAgICAgIGVudGl0eS5hZGRBbmltYXRpb25GdW5jdGlvbiggJ21vdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZVBhc3NlZCA9IHBlcmZvcm1hbmNlLm5vdygpLXRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zWydtb3ZlJ11bMF0uc3RhcnRUaW1lO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCB0aW1lUGFzc2VkLCAnZHVtbXlBbmltYXRpb25GdW5jdGlvbicpO1xyXG4gICAgICAgIGVudGl0eS5yZW1vdmVBbmltYXRpb25GdW5jdGlvbignbW92ZScsIDApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgV29vZGVuQm94IH0gZnJvbSAnLi93b29kZW5fYm94JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXb29kZW5Cb3hDaXJjbGUgZXh0ZW5kcyBXb29kZW5Cb3gge1xyXG4gIGNvbnN0cnVjdG9yKCBwYXJhbXMsIGFyZ3MgKXtcclxuICAgIHN1cGVyKCBwYXJhbXMsIGFyZ3MsICdjaXJjbGUnICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5sb2NrTGV2ZWwoIGNsYXNzaWNMZXZlbHMgKXtcclxuICAgIGNvbnN0IGxldmVsTmFtZXMgPSBjbGFzc2ljTGV2ZWxzLm1hcCggbCA9PiBsLm5hbWUgKTtcclxuICAgIGNvbnN0IGxldmVsSW5kZXggPSBsZXZlbE5hbWVzLmluZGV4T2YoICdQYXJraW5nIExlZnQnICk7XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVmYXVsdDonLi90aWxlX2ltZy93b29kZW5fYm94X29jdGFnb24ucG5nJyB9O1xyXG4gIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gJy4uLy4uL2dyaWdhL2VudGl0eSc7XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uVG9TaWRlID0ge1xyXG4gIHVwOiAnVG9wJyxcclxuICBkb3duOiAnQm90dG9tJyxcclxuICBsZWZ0OiAnTGVmdCcsXHJcbiAgcmlnaHQ6ICdSaWdodCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0ge1xyXG4gIHVwOiAnZG93bicsXHJcbiAgZG93bjogJ3VwJyxcclxuICBsZWZ0OiAncmlnaHQnLFxyXG4gIHJpZ2h0OiAnbGVmdCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcHBvc2l0ZVNpZGUgPSB7XHJcbiAgYm90dG9tOiAnVG9wJyxcclxuICB0b3A6ICdCb3R0b20nLFxyXG4gIHJpZ2h0OiAnTGVmdCcsXHJcbiAgbGVmdDogJ1JpZ2h0JyxcclxufVxyXG5cclxuY29uc3QgTU9WRV9VUF9TSVpFX0lOQ1JFQVNFX0ZBQ1RPUiA9IDE2LzE0O1xyXG5jb25zdCBWRVJUSUNBTF9NT1ZFX0RVUkFUSU9OID0gMTAwO1xyXG5jb25zdCBNT1ZFX0RVUkFUSU9OID0gMTAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdob3N0eUVudGl0eSBleHRlbmRzIEVudGl0eSB7XHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncywgbGF5ZXIgPSAxLCBzaGFwZSA9ICdzdG9uZScgKXtcclxuICAgIC8vb3ZlcndyaXRlIHBhcmFtcyBpZiB0aGUgZW50aXRpZXMgYXJlIGluIGVkaXRvciBvciBzZWxlY3Rpb24taG90YmFyIGdyaWRcclxuICAgIGNvbnN0IHN1cGVyUGFyYW1zID0ge2xheWVyfTtcclxuICAgIGlmIChwYXJhbXMubGF5ZXJBZGRlbmQpIHsgc3VwZXJQYXJhbXMubGF5ZXIgKz0gcGFyYW1zLmxheWVyQWRkZW5kIH07XHJcbiAgICBzdXBlciggc3VwZXJQYXJhbXMsIGFyZ3MgKTtcclxuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcclxuICAgIHRoaXMud2lkdGhNdWx0aXBsaWVyID0gMTtcclxuICAgIHRoaXMuaGVpZ2h0TXVsdGlwbGllciA9IDE7XHJcbiAgICB0aGlzLmxheWVyQWRkZW5kID0gcGFyYW1zLmxheWVyQWRkZW5kIHx8IDA7XHJcbiAgICB0aGlzLmJhc2lzV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5iYXNpc0hlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgdGhpcy5iYXNpc0NPZmZzZXQgPSB0aGlzLmNPZmZzZXQ7XHJcbiAgICB0aGlzLmJhc2lzUk9mZnNldCA9IHRoaXMuck9mZnNldDtcclxuICAgIHRoaXMuYmFzaXNMYXllciA9IGxheWVyO1xyXG4gICAgdGhpcy5tb3ZlQW5pbWF0aW9uRGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5hbmltYXRpb25GdW5jdGlvbnMgPSB7fTtcclxuICAgIHRoaXMuYWRkV2lkdGhNdWx0aXBsaWVyKCBwYXJhbXMud2lkdGhNdWx0aXBsaWVyIHx8IDEgKTtcclxuICAgIHRoaXMuYWRkSGVpZ2h0TXVsdGlwbGllciggcGFyYW1zLmhlaWdodE11bHRpcGxpZXIgfHwgMSApO1xyXG4gICAgaWYgKHRoaXMuZ3JpZC5uYW1lID09PSAnc2VsZWN0aW9uLWhvdGJhcicpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25CYWNrZ3JvdW5kID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dGlsZTp7Yzp0aGlzLmMscjp0aGlzLnJ9LHR5cGU6J1NlbGVjdGlvbkJhY2tncm91bmQnfSlbMF07XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uQmFja2dyb3VuZC5zZXRPdGhlckVudGl0eSggdGhpcyApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdyaWQubmFtZSA9PT0gJ2FsbC1lbnRpdGllcy1zZWxlY3Rpb24nKSB7XHJcbiAgICAgIHRoaXMuYWxsRW50aXRpZXNCYWNrZ3JvdW5kID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcyh7dGlsZTp7Yzp0aGlzLmMscjp0aGlzLnJ9LHR5cGU6J0FsbEVudGl0aWVzQmFja2dyb3VuZCd9KVswXTtcclxuICAgICAgdGhpcy5hbGxFbnRpdGllc0JhY2tncm91bmQuc2V0T3RoZXJFbnRpdHkoIHRoaXMgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRVbmxvY2tMZXZlbCggY2xhc3NpY0xldmVscyApe1xyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50UGFyYW1zKCl7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcclxuICAgIGlmICh0aGlzLndpZHRoTXVsdGlwbGllciAhPT0gMSl7IHBhcmFtcy53aWR0aE11bHRpcGxpZXIgPSB0aGlzLndpZHRoTXVsdGlwbGllciB9O1xyXG4gICAgaWYgKHRoaXMuaGVpZ2h0TXVsdGlwbGllciAhPT0gMSl7IHBhcmFtcy5oZWlnaHRNdWx0aXBsaWVyID0gdGhpcy5oZWlnaHRNdWx0aXBsaWVyIH07XHJcbiAgICBpZiAodGhpcy5sYXllckFkZGVuZCAhPT0gMCl7IHBhcmFtcy5sYXllckFkZGVuZCA9IHRoaXMubGF5ZXJBZGRlbmQgfTtcclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICBtb3ZlVmVydGljYWxseSggYW1vdW50LCBqdW1wID0gdHJ1ZSwgYXV0b2FuaW1hdGUgPSB0cnVlICl7XHJcbiAgICB0aGlzLmFkZEhlaWdodE11bHRpcGxpZXIoIE1hdGgucG93KE1PVkVfVVBfU0laRV9JTkNSRUFTRV9GQUNUT1IsIGFtb3VudCkgKTtcclxuICAgIHRoaXMuYWRkV2lkdGhNdWx0aXBsaWVyKCBNYXRoLnBvdyhNT1ZFX1VQX1NJWkVfSU5DUkVBU0VfRkFDVE9SLCBhbW91bnQpICk7XHJcbiAgICB0aGlzLmFkZExheWVyQWRkZW5kKCBhbW91bnQqMTAgKTtcclxuICAgIGNvbnN0IGFPID0ge1xyXG4gICAgICBjaGFuZ2VJbkJhc2VMYXllcjogYW1vdW50LFxyXG4gICAgICB0YXJnZXRBYnNCYXNlTGF5ZXI6IHRoaXMubGF5ZXJBZGRlbmQvMTAsXHJcbiAgICAgIGp1bXBcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFdpZHRoKCB0aGlzLmJhc2lzV2lkdGggKiBNYXRoLnBvdyhNT1ZFX1VQX1NJWkVfSU5DUkVBU0VfRkFDVE9SLCAtdGhpcy5sYXllckFkZGVuZC8xMCksIGZhbHNlICk7XHJcbiAgICB0aGlzLnNldEhlaWdodCggdGhpcy5iYXNpc0hlaWdodCAqIE1hdGgucG93KE1PVkVfVVBfU0laRV9JTkNSRUFTRV9GQUNUT1IsIC10aGlzLmxheWVyQWRkZW5kLzEwKSwgZmFsc2UgKTtcclxuICAgIHRoaXMuY2hhbmdlTGF5ZXIoIHRoaXMuYmFzaXNMYXllci1hbW91bnQqMTAgKTtcclxuICAgIGlmIChhdXRvYW5pbWF0ZSkge1xyXG4gICAgICB0aGlzLmFkZFZlcnRpY2FsTW92ZUFuaW1hdGlvbihhTyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRWZXJ0aWNhbE1vdmVBbmltYXRpb24oYU8pe1xyXG4gICAgdGhpcy5hZGRBbmltYXRpb25GdW5jdGlvbignbW92ZScsXHJcbiAgICAgICgpID0+IHRoaXMuc2V0VmVydGljYWxNb3ZlQW5pbWF0aW9uU2l6ZSgpLCBhT1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZFdpZHRoTXVsdGlwbGllciggbXVsdGlwbGllciApe1xyXG4gICAgdGhpcy53aWR0aE11bHRpcGxpZXIgKj0gbXVsdGlwbGllcjtcclxuICAgIHRoaXMuc2V0V2lkdGgoIHRoaXMuYmFzaXNXaWR0aCApO1xyXG4gIH1cclxuXHJcbiAgYWRkSGVpZ2h0TXVsdGlwbGllciggbXVsdGlwbGllciApe1xyXG4gICAgdGhpcy5oZWlnaHRNdWx0aXBsaWVyICo9IG11bHRpcGxpZXI7XHJcbiAgICB0aGlzLnNldEhlaWdodCggdGhpcy5iYXNpc0hlaWdodCApO1xyXG4gIH1cclxuXHJcbiAgYWRkTGF5ZXJBZGRlbmQoIGFkZGVuZCApe1xyXG4gICAgdGhpcy5sYXllckFkZGVuZCArPSBhZGRlbmQ7XHJcbiAgICB0aGlzLmNoYW5nZUxheWVyKCB0aGlzLmJhc2lzTGF5ZXIgKTtcclxuICB9XHJcblxyXG4gIHNldFdpZHRoKCB3aWR0aCwgc2V0QmFzaXMgPSB0cnVlICl7XHJcbiAgICBpZiAoc2V0QmFzaXMpIHt0aGlzLmJhc2lzV2lkdGggPSB3aWR0aH07XHJcbiAgICBFbnRpdHkucHJvdG90eXBlLnNldFdpZHRoLmNhbGwoIHRoaXMsIHdpZHRoKnRoaXMud2lkdGhNdWx0aXBsaWVyKTtcclxuICAgIHRoaXMuc2V0Q09mZnNldCggdGhpcy5iYXNpc0NPZmZzZXQgKTtcclxuICB9XHJcblxyXG4gIHNldEhlaWdodCggaGVpZ2h0LCBzZXRCYXNpcyA9IHRydWUgKXtcclxuICAgIGlmIChzZXRCYXNpcykge3RoaXMuYmFzaXNIZWlnaHQgPSBoZWlnaHR9O1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRIZWlnaHQuY2FsbCggdGhpcywgaGVpZ2h0KnRoaXMuaGVpZ2h0TXVsdGlwbGllciApO1xyXG4gICAgdGhpcy5zZXRST2Zmc2V0KCB0aGlzLmJhc2lzUk9mZnNldCApO1xyXG4gIH1cclxuXHJcbiAgc2V0Q09mZnNldCggY09mZnNldCApe1xyXG4gICAgdGhpcy5iYXNpc0NPZmZzZXQgPSBjT2Zmc2V0O1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRDT2Zmc2V0LmNhbGwoIHRoaXMsIGNPZmZzZXQgKyAoMS10aGlzLndpZHRoKS8yICk7XHJcbiAgfVxyXG5cclxuICBzZXRST2Zmc2V0KCByT2Zmc2V0ICl7XHJcbiAgICB0aGlzLmJhc2lzUk9mZnNldCA9IHJPZmZzZXQ7XHJcbiAgICBFbnRpdHkucHJvdG90eXBlLnNldFJPZmZzZXQuY2FsbCggdGhpcywgck9mZnNldCArICgxLXRoaXMuaGVpZ2h0KS8yICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYXllciggbGF5ZXIgKXtcclxuICAgIHRoaXMuYmFzaXNMYXllciA9IGxheWVyO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5jaGFuZ2VMYXllci5jYWxsKCB0aGlzLCBsYXllciArIHRoaXMubGF5ZXJBZGRlbmQgKTtcclxuICB9XHJcblxyXG4gIG1vdmUoIGRpcmVjdGlvbiwgd2FpdEFuaW1hdGlvbiA9IGZhbHNlLCBsaW5lYXIgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgYWJzUG9zID0gdGhpcy5mb3JtYXRQb3NpdGlvbkFzQWJzb2x1dGVQb3NpdGlvbihkaXJlY3Rpb24sICdtb2R1bG8nKTtcclxuICAgIGNvbnN0IHJlbFBvcyA9IHRoaXMuZm9ybWF0UG9zaXRpb25Bc1JlbGF0aXZlUG9zaXRpb24oZGlyZWN0aW9uLCAnbW9kdWxvJyk7XHJcbiAgICBjb25zdCBlbnRpdGllc09uTmV3VGlsZSA9IHRoaXMuZ3JpZC5nZXRFbnRpdHlJbnN0YW5jZXMoIHtcclxuICAgICAgdGlsZTogYWJzUG9zLFxyXG4gICAgICBub3RUeXBlOiAnQmFja2dyb3VuZFRpbGUnXHJcbiAgICB9ICk7XHJcbiAgICBjb25zdCBlbnRpdGllc09uVGhpc1RpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IHsgYzp0aGlzLmMsIHI6dGhpcy5yIH0sXHJcbiAgICAgIG5vdFR5cGU6ICdCYWNrZ3JvdW5kVGlsZSdcclxuICAgIH0gKTtcclxuICAgIGVudGl0aWVzT25OZXdUaWxlLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgIGVudGl0eS5lbnRpdHlXaWxsTW92ZVRvVGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmdyaWdhLmdob3N0eS5wbGF5LmtleVRyYWNrRW50aXR5LmFkZFRpbGVzVG9VcGRhdGUoIFthYnNQb3MsIHtjOnRoaXMuYywgcjp0aGlzLnJ9XSApO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5tb3ZlLmNhbGwoIHRoaXMsIGFic1BvcyApO1xyXG4gICAgZW50aXRpZXNPbk5ld1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eU1vdmVkVG9UaWxlKCB0aGlzLCBkaXJlY3Rpb24gKTtcclxuICAgIH0gKTtcclxuICAgIGVudGl0aWVzT25UaGlzVGlsZS5mb3JFYWNoKCBlbnRpdHkgPT4ge1xyXG4gICAgICBlbnRpdHkuZW50aXR5V2lsbExlYXZlVGlsZSggdGhpcywgZGlyZWN0aW9uICk7XHJcbiAgICB9ICk7XHJcbiAgICBlbnRpdGllc09uVGhpc1RpbGUuZm9yRWFjaCggZW50aXR5ID0+IHtcclxuICAgICAgZW50aXR5LmVudGl0eUxlZnRUaWxlKCB0aGlzLCBkaXJlY3Rpb24gKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMuc2V0Q09mZnNldCggdGhpcy5iYXNpc0NPZmZzZXQgLSByZWxQb3NbMF0gKTtcclxuICAgIHRoaXMuc2V0Uk9mZnNldCggdGhpcy5iYXNpc1JPZmZzZXQgLSByZWxQb3NbMV0gKTtcclxuICAgIGlmICh3YWl0QW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCB0aGlzLmR1bW15QW5pbWF0aW9uRnVuY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hZGRNb3ZlQW5pbWF0aW9uKHJlbFBvcywgYWJzUG9zLCBsaW5lYXIpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdE1vdmUoIGRpcmVjdGlvbiwgcmVxdWVzdENoYWluID0gW10gKSB7XHJcbiAgICByZXF1ZXN0Q2hhaW4ucHVzaChbdGhpcywgZGlyZWN0aW9uXSk7XHJcbiAgICBjb25zdCBhYnNQb3MgPSB0aGlzLmZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKGRpcmVjdGlvbiwgJ21vZHVsbycpO1xyXG4gICAgY29uc3QgZW50aXRpZXNPbk5ld1RpbGUgPSB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzKCB7XHJcbiAgICAgIHRpbGU6IGFic1BvcyxcclxuICAgICAgbm90VHlwZTogJ0JhY2tncm91bmRUaWxlJ1xyXG4gICAgfSApO1xyXG4gICAgY29uc3QgZW50aXRpZXNPblRoaXNUaWxlID0gdGhpcy5ncmlkLmdldEVudGl0eUluc3RhbmNlcygge1xyXG4gICAgICB0aWxlOiB7Yzp0aGlzLmMsIHI6dGhpcy5yfVxyXG4gICAgfSApLmZpbHRlciggZSA9PiBlICE9PSB0aGlzICYmIGUuY29uc3RydWN0b3IubmFtZSAhPT0gJ0JhY2tncm91bmRUaWxlJyApO1xyXG4gICAgY29uc3Qgc3VjZXNzZXMgPSBlbnRpdGllc09uTmV3VGlsZS5tYXAoIGUgPT4gZS52YWxpZGF0ZU1vdmUoWy4uLnJlcXVlc3RDaGFpbl0pICk7XHJcbiAgICBjb25zdCBsZWF2ZVN1Y2Vzc2VzID0gZW50aXRpZXNPblRoaXNUaWxlLm1hcCggZSA9PiBlLmFsbG93TGVhdmUoWy4uLnJlcXVlc3RDaGFpbl0pICk7XHJcbiAgICBpZiAoc3VjZXNzZXMuaW5jbHVkZXMoIGZhbHNlICkgfHwgbGVhdmVTdWNlc3Nlcy5pbmNsdWRlcyggZmFsc2UgKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE1vdmVBbmltYXRpb24oIHJlbE1vdmVEaXJlY3Rpb24sIHRhcmdldFRpbGVBYnNQb3MsIGxpbmVhciA9IGZhbHNlICl7XHJcbiAgICB0aGlzLmFkZEFuaW1hdGlvbkZ1bmN0aW9uKCAnbW92ZScsXHJcbiAgICAgICgpID0+IHRoaXMuc2V0TW92ZUFuaW1hdGlvbk9mZnNldCgpLFxyXG4gICAgICB7cmVsTW92ZURpcmVjdGlvbiwgdGFyZ2V0VGlsZUFic1BvcywgbGluZWFyfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdmFsaWRhdGVzIGEgbW92ZSBpbiB0aGUgZ2l2ZW4gZGlyZWN0aW9uLiBTaG91bGQgb25seSBiZSBjYWxsZWQgZnJvbSBHaG9zdHlFbnRpdHkuc3RhcnRNb3ZlO1xyXG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdENoYWluIFxyXG4gICAqL1xyXG4gIHZhbGlkYXRlTW92ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICAvL2F2b2lkIG92ZXJmbG93LCBqdXN0IGFsbG93IG1vdmVcclxuICAgIGlmIChyZXF1ZXN0Q2hhaW4ubWFwKCBhID0+IGFbMF0gKS5pbmNsdWRlcyggdGhpcyApKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgLy9hZGQgdGhlIHN0YWNrLW9uLXRvcC1iZWhhdmlvciBmb3IgYWxsIGxheWVyIDE3IGVudGl0aWVzIChleGVwdCBnaG9zdGllcyBtYXliZSlcclxuICAgIGlmICggdGhpcy5sYXllciUxMCA9PT0gNyAmJiByZXF1ZXN0Q2hhaW5bcmVxdWVzdENoYWluLmxlbmd0aC0xXVswXS5sYXllckFkZGVuZCAhPT0gdGhpcy5sYXllckFkZGVuZCApe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFsbG93TW92ZSA9IHRoaXMuYWxsb3dNb3ZlKCByZXF1ZXN0Q2hhaW4gKTtcclxuICAgIHJldHVybiBhbGxvd01vdmU7XHJcbiAgfVxyXG5cclxuICBhZGRBbmltYXRpb25GdW5jdGlvbiggY2F0ZWdvcnksIGZuYywgdmFsdWVzRm9yQW5pbWF0aW9uT2JqZWN0ID0ge30gKXtcclxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1tjYXRlZ29yeV0pIHtcclxuICAgICAgdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbY2F0ZWdvcnldLnB1c2goXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigge2ZuY30sIHZhbHVlc0ZvckFuaW1hdGlvbk9iamVjdCApXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1tjYXRlZ29yeV0gPSBbT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7Zm5jLHN0YXJ0VGltZTogcGVyZm9ybWFuY2Uubm93KCl9LFxyXG4gICAgICAgIHZhbHVlc0ZvckFuaW1hdGlvbk9iamVjdFxyXG4gICAgICApXTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVRvUmVuZGVyU3RhcnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUFuaW1hdGlvbkZ1bmN0aW9uKCBjYXRlZ29yeSwgZHVyYXRpb25PZkxhc3RBbmltYXRpb24sIGZ1bmN0aW9uTmFtZSApe1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgIGlmIChmdW5jdGlvbk5hbWUpIHtcclxuICAgICAgICBpbmRleCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5maW5kSW5kZXgoIGFPID0+IGFPLmZuYy5uYW1lID09PSBmdW5jdGlvbk5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IG9sZFN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XVswXS5zdGFydFRpbWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbY2F0ZWdvcnldLnNwbGljZSgwLDEpO1xyXG4gICAgICAgIGNvbnN0IG5ld0FuaW1hdGlvbk9iamVjdCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XVswXTtcclxuICAgICAgICBuZXdBbmltYXRpb25PYmplY3Quc3RhcnRUaW1lID0gb2xkU3RhcnRUaW1lICsgZHVyYXRpb25PZkxhc3RBbmltYXRpb247XHJcbiAgICAgICAgbmV3QW5pbWF0aW9uT2JqZWN0LmZuYygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5hbmltYXRpb25GdW5jdGlvbnMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRnJvbVJlbmRlclN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zW2NhdGVnb3J5XSkge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkNoYWluRW1wdGllZChjYXRlZ29yeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkdW1teUFuaW1hdGlvbkZ1bmN0aW9uKCl7fVxyXG5cclxuICBtb3ZlT2Zmc2V0RnVuY3Rpb24oIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0ICl7XHJcbiAgICBjb25zdCBhbmltYXRpb25PYmplY3QgPSB0aGlzLmFuaW1hdGlvbkZ1bmN0aW9uc1snbW92ZSddWzBdO1xyXG4gICAgbGV0IG9mZnNldCA9IDEgLSBNYXRoLnNxcnQoIHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0L01PVkVfRFVSQVRJT04gKTtcclxuICAgIGlmIChhbmltYXRpb25PYmplY3QubGluZWFyKSB7XHJcbiAgICAgIG9mZnNldCA9IDEgLSB0aW1lU2luY2VBbmltYXRpb25TdGFydC9NT1ZFX0RVUkFUSU9OXHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2Zmc2V0O1xyXG4gIH1cclxuXHJcbiAgc2V0TW92ZUFuaW1hdGlvbk9mZnNldCgpe1xyXG4gICAgY29uc3QgYW5pbWF0aW9uT2JqZWN0ID0gdGhpcy5hbmltYXRpb25GdW5jdGlvbnNbJ21vdmUnXVswXTtcclxuICAgIGNvbnN0IHRpbWVTaW5jZUFuaW1hdGlvblN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSBhbmltYXRpb25PYmplY3Quc3RhcnRUaW1lO1xyXG4gICAgY29uc3QgcmVsVGFyZ2V0UG9zaXRpb24gPSB0aGlzLmZvcm1hdFBvc2l0aW9uQXNSZWxhdGl2ZVBvc2l0aW9uKCBhbmltYXRpb25PYmplY3QudGFyZ2V0VGlsZUFic1BvcyApO1xyXG4gICAgbGV0IGFic09mZnNldCA9IHRoaXMubW92ZU9mZnNldEZ1bmN0aW9uKCB0aW1lU2luY2VBbmltYXRpb25TdGFydCApO1xyXG4gICAgYWJzT2Zmc2V0ID0gTWF0aC5tYXgoYWJzT2Zmc2V0LCAwKTtcclxuICAgIHRoaXMuc2V0Q09mZnNldCggcmVsVGFyZ2V0UG9zaXRpb25bMF0gLSBhYnNPZmZzZXQgKiBhbmltYXRpb25PYmplY3QucmVsTW92ZURpcmVjdGlvblswXSApO1xyXG4gICAgdGhpcy5zZXRST2Zmc2V0KCByZWxUYXJnZXRQb3NpdGlvblsxXSAtIGFic09mZnNldCAqIGFuaW1hdGlvbk9iamVjdC5yZWxNb3ZlRGlyZWN0aW9uWzFdICk7XHJcbiAgICBpZiAodGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgPiBNT1ZFX0RVUkFUSU9OKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlQW5pbWF0aW9uRnVuY3Rpb24oJ21vdmUnLCBNT1ZFX0RVUkFUSU9OKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcnRpY2FsTW92ZVNpemVGdW5jdGlvbiggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgKXtcclxuICAgIGNvbnN0IGFuaW1hdGlvbk9iamVjdCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zWydtb3ZlJ11bMF07XHJcbiAgICBjb25zdCB4ID0gdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQvVkVSVElDQUxfTU9WRV9EVVJBVElPTlxyXG4gICAgbGV0IHBlcmNlbnRDb21wbGV0ZSA9IHgqeDtcclxuICAgIGlmIChhbmltYXRpb25PYmplY3QuanVtcCkge1xyXG4gICAgICBwZXJjZW50Q29tcGxldGUgPSA0KngqKHgtMC43NSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY3R1YWxCYXNlTGF5ZXIgPSB0aGlzLmxheWVyQWRkZW5kLzEwO1xyXG4gICAgY29uc3QgdGFyZ2V0U2l6ZUZhY3RvciA9IE1hdGgucG93KE1PVkVfVVBfU0laRV9JTkNSRUFTRV9GQUNUT1IsIGFuaW1hdGlvbk9iamVjdC50YXJnZXRBYnNCYXNlTGF5ZXIgLSBhY3R1YWxCYXNlTGF5ZXIpO1xyXG4gICAgY29uc3QgY2hhbmdlRmFjdG9yID0gTWF0aC5wb3coTU9WRV9VUF9TSVpFX0lOQ1JFQVNFX0ZBQ1RPUiwgYW5pbWF0aW9uT2JqZWN0LmNoYW5nZUluQmFzZUxheWVyKTtcclxuICAgIGNvbnN0IHN0YXJ0U2l6ZUZhY3RvciA9IHRhcmdldFNpemVGYWN0b3IgL2NoYW5nZUZhY3RvcjtcclxuICAgIGNvbnN0IHN0YXJ0V2lkdGggPSB0aGlzLmJhc2lzV2lkdGgqc3RhcnRTaXplRmFjdG9yO1xyXG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSB0aGlzLmJhc2lzSGVpZ2h0KnN0YXJ0U2l6ZUZhY3RvcjtcclxuICAgIGNvbnN0IHRhcmdldFdpZHRoID0gdGhpcy5iYXNpc1dpZHRoKnRhcmdldFNpemVGYWN0b3I7XHJcbiAgICBjb25zdCB0YXJnZXRIZWlnaHQgPSB0aGlzLmJhc2lzSGVpZ2h0KnRhcmdldFNpemVGYWN0b3I7XHJcbiAgICBjb25zdCB3aWR0aCA9IHN0YXJ0V2lkdGgqKDEtcGVyY2VudENvbXBsZXRlKVxyXG4gICAgKyB0YXJnZXRXaWR0aCoocGVyY2VudENvbXBsZXRlKTtcclxuICAgIGNvbnN0IGhlaWdodCA9IHN0YXJ0SGVpZ2h0KigxLXBlcmNlbnRDb21wbGV0ZSlcclxuICAgICsgdGFyZ2V0SGVpZ2h0KihwZXJjZW50Q29tcGxldGUpO1xyXG4gICAgcmV0dXJuIFsgd2lkdGgsIGhlaWdodCwgdGFyZ2V0V2lkdGgsIHRhcmdldEhlaWdodCBdO1xyXG4gIH1cclxuXHJcbiAgc2V0VmVydGljYWxNb3ZlQW5pbWF0aW9uU2l6ZSgpIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvbk9iamVjdCA9IHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zWydtb3ZlJ11bMF07XHJcbiAgICBpZiAoIWFuaW1hdGlvbk9iamVjdC5jaGFuZ2VkTGF5ZXIpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VMYXllciggdGhpcy5iYXNpc0xheWVyICsgYW5pbWF0aW9uT2JqZWN0LmNoYW5nZUluQmFzZUxheWVyKjEwICk7XHJcbiAgICAgIGFuaW1hdGlvbk9iamVjdC5jaGFuZ2VkTGF5ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGFuaW1hdGlvbk9iamVjdC5zdGFydFRpbWU7XHJcbiAgICBsZXQgWyB3aWR0aCwgaGVpZ2h0LCB0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0IF0gPSB0aGlzLnZlcnRpY2FsTW92ZVNpemVGdW5jdGlvbiggdGltZVNpbmNlQW5pbWF0aW9uU3RhcnQgKTtcclxuICAgIGlmICh0aW1lU2luY2VBbmltYXRpb25TdGFydCA+IFZFUlRJQ0FMX01PVkVfRFVSQVRJT04pIHtcclxuICAgICAgWyB3aWR0aCwgaGVpZ2h0IF0gPSBbIHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQgXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0V2lkdGgoIHdpZHRoLCBmYWxzZSApO1xyXG4gICAgdGhpcy5zZXRIZWlnaHQoIGhlaWdodCwgZmFsc2UgKTtcclxuICAgIGlmICh0aW1lU2luY2VBbmltYXRpb25TdGFydCA+IFZFUlRJQ0FMX01PVkVfRFVSQVRJT04pIHtcclxuICAgICAgdGhpcy5yZW1vdmVBbmltYXRpb25GdW5jdGlvbignbW92ZScsIFZFUlRJQ0FMX01PVkVfRFVSQVRJT04pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU3RhcnRIYW5kbGVyKCl7XHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMuYW5pbWF0aW9uRnVuY3Rpb25zKS5mb3JFYWNoKFxyXG4gICAgICBmbmNBcnIgPT4gZm5jQXJyWzBdLmZuYygpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogY2hlY2tzIGlmIHRoZSByZXF1ZXN0ZWQgbW92ZSBpcyB2YWxpZC4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIGJ5IENoaWxkLiBSZXR1cm5zIGFsbG93TW92ZVxyXG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdENoYWluIFxyXG4gICAqIEBwYXJhbSB7Kn0gZGlyZWN0aW9uIFxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbG93TW92ZSggcmVxdWVzdENoYWluICl7XHJcbiAgICByZXR1cm4gcmVxdWVzdENoYWluWyByZXF1ZXN0Q2hhaW4ubGVuZ3RoLTEgXVswXS5sYXllciUxMCAhPT0gdGhpcy5sYXllciUxMDtcclxuICB9XHJcblxyXG4gIFxyXG4gIGFsbG93TGVhdmUoIHJlcXVlc3RDaGFpbiApe1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBhbGxvd1BsYWNpbmcoIGVudGl0eSApe1xyXG4gICAgcmV0dXJuIGVudGl0eS5sYXllciUxMCAhPT0gdGhpcy5sYXllciUxMDtcclxuICB9XHJcblxyXG4gIGFsbG93QmVpbmdQbGFjZWQoIHRpbGUsIGVkaXRvckdyaWQgKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYmVmb3JlRGVsZXRlKCl7XHJcbiAgICAvL2RvU29tZXRoaW5nXHJcbiAgfVxyXG5cclxuICBlbnRpdHlPblNhbWVUaWxlV2FzRGVsZXRlZCggZGVsZXRlZEVudGl0eSApe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5V2lsbExlYXZlVGlsZSggZW50aXR5LCBkaXJlY3Rpb24gKXtcclxuICAgIC8vZG9Tb21ldGhpbmdcclxuICB9XHJcblxyXG4gIGVudGl0eUxlZnRUaWxlKCBlbnRpdHksIGRpcmVjdGlvbiApe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5V2lsbE1vdmVUb1RpbGUoIGVudGl0eSwgZGlyZWN0aW9uICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgZW50aXR5TW92ZWRUb1RpbGUoIGVudGl0eSwgZGlyZWN0aW9uICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgLy9mb3IgbGV2ZWxEb25lIGNoZWNrXHJcbiAgdGFza0RvbmUoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5ld0VudGl0eVdhc1BsYWNlZE9uVGlsZSggZW50aXR5ICkge1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0aW9uQ2hhaW5FbXB0aWVkKCBjYXRlZ29yeSApe1xyXG4gICAgLy9kb1NvbWV0aGluZ1xyXG4gIH1cclxuXHJcbiAgLy91cGRhdGVTdGF0ZSgpeyAvL2RvU29tZXRoaW5nIH07IC8vY29tbWVudGVkIG91dCB0byBzYXZlIG9uIHBlcmZvcm1hbmNlIHNpbmNlIHRoZSBmdW5jdGlvbiBvbmx5IGdldHMgY2FsbGVkIGlmIGl0IGV4aXN0c1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSAnLi4vLi4vZ3JpZ2EvZW50aXR5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25CYWNrZ3JvdW5kIGV4dGVuZHMgRW50aXR5IHtcclxuICBjb25zdHJ1Y3RvciggcGFyYW1zLCBhcmdzICl7XHJcbiAgICBzdXBlcigge1xyXG4gICAgICBtb3VzZURvd25TdWJzY3JpcHRpb25zOiBbJ2VkaXRvcicsICdzZWxlY3Rpb24nXSxcclxuICAgIH0sIGFyZ3MgKTtcclxuICAgIHRoaXMub3RoZXJFbnRpdHkgPSBudWxsO1xyXG4gICAgdGhpcy5sYXN0Q2xpY2tUaW1lID0gMDtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2RlYWN0aXZlJztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgaW1nU291cmNlcygpe1xyXG4gICAgcmV0dXJuIHsgZGVhY3RpdmU6ICcnLFxyXG4gICAgICAgICAgICAgYWN0aXZlOiAnLi90aWxlX2ltZy9zZWxlY3Rpb25fYmFja2dyb3VuZF9hY3RpdmVfZ2VuXzIuanBnJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldE90aGVyRW50aXR5KCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5vdGhlckVudGl0eSA9IGVudGl0eUluc3RhbmNlO1xyXG4gICAgZW50aXR5SW5zdGFuY2UuYWRkV2lkdGhNdWx0aXBsaWVyKCAwLjggKTtcclxuICAgIGVudGl0eUluc3RhbmNlLmFkZEhlaWdodE11bHRpcGxpZXIoIDAuOCApO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUoKXtcclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2FjdGl2ZSc7XHJcbiAgfVxyXG5cclxuICBkZWFjdGl2YXRlKCl7XHJcbiAgICB0aGlzLmN1cnJlbnRJbWFnZSA9ICdkZWFjdGl2ZSc7XHJcbiAgfVxyXG5cclxuICBtb3VzZURvd25IYW5kbGVyKCl7XHJcbiAgICBpZiAocGVyZm9ybWFuY2Uubm93KCktdGhpcy5sYXN0Q2xpY2tUaW1lIDwgMzAwKSB7XHJcbiAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2hvd0FsbEVudGl0aWVzU2VsZWN0aW9uKCB0aGlzICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RDbGlja1RpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIGlmICh0aGlzLm90aGVyRW50aXR5KSB7XHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSA9PT0gJ2RlYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggdGhpcyApO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuY3VycmVudEltYWdlID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EuZ2hvc3R5LmVkaXRvci5zZWxlY3Rpb24uc2V0QWN0aXZlU2VsZWN0aW9uQmFja2dyb3VuZCggbnVsbCApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaXplKCBlbnRpdHlPblRvcCApe1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRDT2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLndpZHRoKjAuMSApO1xyXG4gICAgRW50aXR5LnByb3RvdHlwZS5zZXRST2Zmc2V0LmNhbGwoIGVudGl0eU9uVG9wLCB0aGlzLmNPZmZzZXQgKyB0aGlzLmhlaWdodCowLjEgKTtcclxuICAgIEVudGl0eS5wcm90b3R5cGUuc2V0V2lkdGguY2FsbCggZW50aXR5T25Ub3AsIHRoaXMud2lkdGgqMC44ICk7XHJcbiAgICBFbnRpdHkucHJvdG90eXBlLnNldEhlaWdodC5jYWxsKCBlbnRpdHlPblRvcCwgdGhpcy5oZWlnaHQqMC44ICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWUge1xyXG4gIGNvbnN0cnVjdG9yKCBhcHAgKXtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgdGhpcy5ncmlnYSA9IHRoaXMuYXBwLmdyaWdhO1xyXG4gIH1cclxuXHJcbiAgc3RhcnQoKXtcclxuICAgIHRoaXMuYXBwLmhvbWVfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5hcHAuaG9tZV9zY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmFwcC5zdGF0ZSA9ICdob21lJztcclxuICAgIHRoaXMuYXBwLnN0eWxlLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIGNvbnN0IGxhc3RTaG93blZlcnNpb24gPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZ2V0TGFzdFNob3duVmVyc2lvbigpO1xyXG4gICAgaWYgKHRoaXMuYXBwLnZlcnNpb24gIT09IGxhc3RTaG93blZlcnNpb24pIHtcclxuICAgICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNldExhc3RTaG93blZlcnNpb24odGhpcy5hcHAudmVyc2lvbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZXcgVmVyc2lvbiBQb3B1cCEnKTtcclxuICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cChcclxuICAgICAgICAnd3JhcHBlcicsXHJcbiAgICAgICAgYEdob3N0eSBWZXJzaW9uIDEuMC4yIHJlbGVhc2VkIWAsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAge2lkOiAncG9wdXAtY2xvc2UnLCB0ZXh0OiAnUGxheScsIGNsaWNrOiAoKSA9PiB0aGlzLmFwcC5oYW5kbGVQbGF5QnV0dG9uQ2xpY2soKX0sXHJcbiAgICAgICAgXSwgW10sXHJcbiAgICAgICAgJ1doYXRcXCdzIG5ldzonLFxyXG4gICAgICAgICctUm91bmQgQm94ZXMgYW5kIEhvbGVzLTxicj4tQ29wcE9SIEdhdGVzLTxicj4tTmV3IExldmVscy08YnI+LUhhbmR5IFN1cHBvcnQtPGJyPi1DdXRvbWl6ZSBFZGl0b3ItPGJyPi1TbW9vdGggaG9sZGluZyBhbmltYXRpb24tJ1xyXG4gICAgICApIDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVuZCgpe1xyXG4gICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICB0aGlzLmFwcC5ob21lX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXMuYXBwLmhvbWVfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpe1xyXG4gICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaG9tZUhlbHAgPSB7XHJcbiAgZW5nbGlzaDogXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBoMzogbnVsbCxcclxuICAgICAgcDogJ0dob3N0eSB3YXMgZGV2ZWxvcGVkIGJ5IFRvbSBLb3BvbHQuIFxcbiBDdXJyZW50IFZlcnNpb246IDEuMC4yJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaDM6IG51bGwsXHJcbiAgICAgIHA6ICdJbSBjdXJyZW50bHkgcmV3b3JraW5nIGdob3N0eSBjb21wbGV0ZWx5LiBTdGF5IHR1bmVkIGZvciBzdG9yeSwgb25saW5lIGxldmVscyBhbmQgbW9yZSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGgzOiBudWxsLFxyXG4gICAgICBwOiAnTm90ZSB0aGF0IHRoZSBMZXZlbCBFZGl0b3IgaXMgb25seSBhdmFpbGFibGUgb24gYSBQQyBvciBMYXB0b3AnXHJcbiAgICB9XHJcbiAgXVxyXG59IiwiaW1wb3J0IGNsYXNzaWNMZXZlbHMgZnJvbSAnLi9sZXZlbC9hbGxfY2xhc3NpY19sZXZlbHMuanNvbic7XHJcbmltcG9ydCBwcmVzZXRMZXZlbHMgZnJvbSAnLi9sZXZlbC9wcmVzZXRzLmpzb24nO1xyXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuL3BvcHVwXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxzIHtcclxuICBjb25zdHJ1Y3RvciggYXBwICl7XHJcbiAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIHRoaXMuZ3JpZ2EgPSB0aGlzLmFwcC5ncmlnYTtcclxuICAgIHRoaXMuZ3JpZCA9IHRoaXMuZ3JpZ2EuZ3JpZHNbJ3ByZXZpZXcnXTtcclxuICAgIHRoaXMubGV2ZWxzID0ge1xyXG4gICAgICBjbGFzc2ljOiBjbGFzc2ljTGV2ZWxzLFxyXG4gICAgICB5b3VyTGV2ZWxzOiB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UuZ2V0WW91ckxldmVscygpLFxyXG4gICAgICBwcmVzZXRzOiBwcmVzZXRMZXZlbHMsXHJcbiAgICB9XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxzLWNvbnRhaW5lcicpO1xyXG4gICAgdGhpcy5jbGFzc2ljX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGFzc2ljLWJ1dHRvbicpO1xyXG4gICAgdGhpcy55b3VyTGV2ZWxzX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5b3VyLWxldmVscy1idXR0b24nKTtcclxuICAgIHRoaXMucHJlc2V0c19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2V0cy1idXR0b24nKTtcclxuICAgIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPSBudWxsO1xyXG5cclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHRoaXMuaGFuZGxlTGV2ZWxzQ29udGFpbmVyQ2xpY2soIGUgKSk7XHJcbiAgICB0aGlzLmNsYXNzaWNfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmNoYW5nZVN0YXRlKCdjbGFzc2ljJykpO1xyXG4gICAgdGhpcy55b3VyTGV2ZWxzX2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5jaGFuZ2VTdGF0ZSgneW91ckxldmVscycpKTtcclxuICAgIHRoaXMucHJlc2V0c19idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuY2hhbmdlU3RhdGUoJ3ByZXNldHMnKSk7XHJcblxyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNldHVwTGV2ZWxTb2x2ZWRGb3JDYXRlZ29yeSgnY2xhc3NpYycpO1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNldHVwTGV2ZWxTb2x2ZWRGb3JDYXRlZ29yeSgneW91ckxldmVscycpO1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNldHVwTGV2ZWxTb2x2ZWRGb3JDYXRlZ29yeSgncHJlc2V0cycpO1xyXG4gICAgdGhpcy5nZXRDbGFzc2ljTGV2ZWxzSGlnaGVzdExldmVsSW5kZXgoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCBjYXRlZ29yeSA9ICdjbGFzc2ljJywgbGV2ZWxJbmRleCkge1xyXG4gICAgdGhpcy5hcHAuc3RhdGUgPSAnbGV2ZWxzJztcclxuICAgIHRoaXMuYXBwLmxldmVsc19zY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICB0aGlzLmFwcC5sZXZlbHNfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IGxldmVsSW5kZXggfHwgIHRoaXMubGV2ZWxzWyBjYXRlZ29yeSBdLmxlbmd0aC0xIDtcclxuICAgIHRoaXMuY2hhbmdlU3RhdGUoIGNhdGVnb3J5LCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5yZXNpemVXcmFwcGVyKCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbFBvc1RvTGV2ZWwoIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggKTtcclxuICB9XHJcblxyXG4gIGVuZCgpIHtcclxuICAgIGlmICh0aGlzLnBvcHVwKSB7XHJcbiAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcclxuICAgICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICB0aGlzLmFwcC5sZXZlbHNfc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgdGhpcy5hcHAubGV2ZWxzX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRoaXNbdGhpcy5zdGF0ZSsnX2J1dHRvbiddLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5kZWxldGVEaXNwbGF5cygpO1xyXG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICByZXR1cm4gb2xkU3RhdGU7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTdGF0ZSggc3RhdGUsIGRldGFpbHNMZXZlbEluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSkge1xyXG4gICAgICB0aGlzW3RoaXMuc3RhdGUrJ19idXR0b24nXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgdGhpcy5oaWRlTGV2ZWxEZXRhaWxzKCk7XHJcbiAgICAgIHRoaXMuZGVsZXRlRGlzcGxheXMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXNbdGhpcy5zdGF0ZSsnX2J1dHRvbiddLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgdGhpcy5jbGVhckxldmVsc0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5maWxsTGV2ZWxzQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gZGV0YWlsc0xldmVsSW5kZXggfHwgdGhpcy5sZXZlbHNbIHRoaXMuc3RhdGUgXS5sZW5ndGgtMTtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnY2xhc3NpYycpIHt0aGlzLmRldGFpbHNMZXZlbEluZGV4ID0gdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXh9O1xyXG4gICAgaWYgKHRoaXMuZGV0YWlsc0xldmVsSW5kZXggIT09IC0xICkge1xyXG4gICAgICB0aGlzLnNob3dMZXZlbERldGFpbHMoIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggKTtcclxuICAgIH1cclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbGJhckhlaWdodCgpO1xyXG4gICAgaWYgKHRoaXMuZGV0YWlsc0xldmVsSW5kZXggIT09IC0xICkge1xyXG4gICAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxQb3NUb0xldmVsKCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRDbGFzc2ljTGV2ZWxzSGlnaGVzdExldmVsSW5kZXgoKXtcclxuICAgIGxldCBjbGFzc2ljSGlnaGVzdExldmVsTmFtZSA9IHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5nZXRIaWdoZXN0TGV2ZWwoJ2NsYXNzaWMnKSB8fCAnSW50cm9kdWN0aW9uJztcclxuICAgIGlmIChjbGFzc2ljSGlnaGVzdExldmVsTmFtZSA9PT0gJ0VuZCAobmV3IGxldmVscyBzb29uISknKSB7XHJcbiAgICAgIGNsYXNzaWNIaWdoZXN0TGV2ZWxOYW1lID0gJ1BhcmtpbmcgTGVmdCc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbmQgTGV2ZWwgVmVyc2lvbiAxLjAuMCB3YXMgcmVwbGFjZWQgYnkgbGV2ZWwgXCJQYXJraW5nIExlZnRcIicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsYXNzaWNIaWdoZXN0TGV2ZWxOYW1lID09PSAnRW5kIFZlcnNpb24gMS4wLjEnKSB7XHJcbiAgICAgIGNsYXNzaWNIaWdoZXN0TGV2ZWxOYW1lID0gJ1doZXJlIGFyZSBteSBjb3JuZXJzPyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFbmQgTGV2ZWwgVmVyc2lvbiAxLjAuMSB3YXMgcmVwbGFjZWQgYnkgbGV2ZWwgXCJXaGVyZSBhcmUgbXkgY29ybmVycz9cIicpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xhc3NpY0hpZ2hlc3RMZXZlbCA9IHRoaXMubGV2ZWxzWydjbGFzc2ljJ10uZmluZCggbCA9PiBsLm5hbWUgPT09IGNsYXNzaWNIaWdoZXN0TGV2ZWxOYW1lICk7XHJcbiAgICB0aGlzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleCA9IHRoaXMubGV2ZWxzWydjbGFzc2ljJ10uaW5kZXhPZiggY2xhc3NpY0hpZ2hlc3RMZXZlbCApO1xyXG4gIH1cclxuXHJcbiAgbGV2ZWxEb25lKCBsZXZlbEluZGV4LCBjYXRlZ29yeSApe1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNhdmVMZXZlbFNvbHZlZCggdGhpcy5sZXZlbHNbY2F0ZWdvcnldW2xldmVsSW5kZXhdLm5hbWUsIGNhdGVnb3J5ICk7XHJcbiAgICBpZiAoIGNhdGVnb3J5ID09PSAnY2xhc3NpYycgJiYgbGV2ZWxJbmRleCA9PT0gdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXggKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4Kys7XHJcbiAgICAgIHRoaXMuYXBwLmxvY2FsU3RvcmFnZS5zYXZlSGlnaGVzdExldmVsKCB0aGlzLmxldmVsc1snY2xhc3NpYyddW3RoaXMuY2xhc3NpY0hpZ2hlc3RMZXZlbEluZGV4XS5uYW1lLCAnY2xhc3NpYycgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldExldmVsSHRtbFN0cmluZyhsZXZlbCwgaSl7XHJcblxyXG4gICAgbGV0IHNvbHZlZFN0cmluZyA9IFsndW5zb2x2ZWQnLCdzb2x2ZWQnXVswK3RoaXMuYXBwLmxvY2FsU3RvcmFnZS5nZXRMZXZlbFNvbHZlZCggbGV2ZWwubmFtZSwgdGhpcy5zdGF0ZSApXTtcclxuXHJcbiAgICBsZXQgbGV2ZWxCYXJCdXR0b25zU3RyaW5nID0gYDxkaXYgY2xhc3M9XCJsZXZlbC1wbGF5LWJ1dHRvbiBidXR0b24gJHtzb2x2ZWRTdHJpbmd9XCIgZGF0YS1sZXZlbD1cIiR7aX1cIj48aSBjbGFzcz1cImZhcyBmYS1wbGF5XCI+PC9pPjwvZGl2PmA7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3ByZXNldHMnKSB7XHJcbiAgICAgIGxldmVsQmFyQnV0dG9uc1N0cmluZyA9IGA8ZGl2IGNsYXNzPVwiYnV0dG9uIGxldmVsLWVkaXQtYnV0dG9uXCIgZGF0YS1pbmRleD1cIiR7aX1cIj48aSBjbGFzcz1cImZhcyBmYS1wZW5cIj48L2k+PC9kaXY+YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZWRpdG9yQnV0dG9uQ29udGFpbmVyID0gJyc7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgIGVkaXRvckJ1dHRvbkNvbnRhaW5lciA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImVkaXRvci1idXR0b25zLWNvbnRhaW5lciBoaWRlLW9uLXRvdWNoLWRldmljZXNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbGV2ZWwtZWRpdC1idXR0b25cIiBkYXRhLWluZGV4PVwiJHtpfVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBlblwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24gbGV2ZWwtZGVsZXRlLWJ1dHRvblwiIGRhdGEtaW5kZXg9XCIke2l9XCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgbGV0IGxldmVsQmFyVGV4dCA9IGAke2krMX06ICR7bGV2ZWwubmFtZX1gO1xyXG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICd5b3VyTGV2ZWxzJykge1xyXG4gICAgICBsZXZlbEJhclRleHQgPSBsZXZlbC5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLW5hbWUgYnV0dG9uXCI+JHtsZXZlbEJhclRleHR9PC9kaXY+XHJcbiAgICAgICAgJHtsZXZlbEJhckJ1dHRvbnNTdHJpbmd9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1kZXRhaWxzIGxldmVsLWJhciBoaWRkZW5cIiBpZD1cImxldmVsLWRldGFpbHMtJHtpfVwiIGRhdGEtaW5kZXg9XCIke2l9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXkgcHJldmlldy1kaXNwbGF5XCIgaWQ9XCJwcmV2aWV3LWRpc3BsYXktJHtpfVwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHByZXZpZXctZGV0YWlscy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZXZpZXctZGlmZmljdWx0eS1saW5lIHByZXZpZXctbGluZVwiPjxzcGFuIGNsYXNzPVwiaGlkZS1vbi13aWR0aC1iZWxvdy01MDBcIj5kaWZmaWN1bHR5Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJkaWZmaWN1bHR5LSR7aX1cIj4ke2xldmVsLmRpZmZpY3VsdHl9PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jcmVhdG9yLWxpbmUgcHJldmlldy1saW5lXCI+PHNwYW4gY2xhc3M9XCJoaWRlLW9uLXdpZHRoLWJlbG93LTUwMFwiPmNyZWF0b3I6PC9zcGFuPiA8c3BhbiBjbGFzcz1cImNyZWF0b3ItJHtpfVwiPiR7bGV2ZWwuY3JlYXRvcn08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgJHtlZGl0b3JCdXR0b25Db250YWluZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICBkZWxldGVEaXNwbGF5cygpe1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5ncmlnYS5kaXNwbGF5cykuZmlsdGVyKCBrID0+IGsuc2xpY2UoMCwgMTIpID09PSAncGxheS1wcmV2aWV3JyApLmZvckVhY2goIGQgPT4ge1xyXG4gICAgICB0aGlzLmdyaWdhLmRlbGV0ZURpc3BsYXkoIGQgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJMZXZlbHNDb250YWluZXIoKXtcclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcblxyXG4gIGZpbGxMZXZlbHNDb250YWluZXIoKXtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSAnY2xhc3NpYycpIHtcclxuICAgICAgZm9yIChsZXQgbGV2ZWxJbmRleCA9IDA7IGxldmVsSW5kZXggPD0gdGhpcy5jbGFzc2ljSGlnaGVzdExldmVsSW5kZXg7IGxldmVsSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV1bbGV2ZWxJbmRleF07XHJcbiAgICAgICAgdGhpcy5pbnNlcnROZXdMZXZlbEluTGV2ZWxDb250YWluZXIoIGxldmVsLCBsZXZlbEluZGV4ICk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGV2ZWxzW3RoaXMuc3RhdGVdLmZvckVhY2goIChsZXZlbCwgaSkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5zZXJ0TmV3TGV2ZWxJbkxldmVsQ29udGFpbmVyKCBsZXZlbCwgaSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnNlcnROZXdMZXZlbEluTGV2ZWxDb250YWluZXIoIGxldmVsLCBpICl7XHJcbiAgICBjb25zdCBodG1sU3RyaW5nID0gdGhpcy5nZXRMZXZlbEh0bWxTdHJpbmcoIGxldmVsLCBpICk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sU3RyaW5nKTtcclxuICAgIHRoaXMuZ3JpZ2EubmV3RGlzcGxheSggJ3BsYXktcHJldmlldy0nK2ksICdwcmV2aWV3LWRpc3BsYXktJytpLCB0aGlzLmdyaWQuY29sdW1ucy90aGlzLmdyaWQucm93cyApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlTGV2ZWxGcm9tTGV2ZWxzQ29udGFpbmVyKCBsZXZlbEluZGV4ICl7XHJcbiAgICBjb25zdCBsZXZlbERldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtZGV0YWlscy0nK2xldmVsSW5kZXgpO1xyXG4gICAgY29uc3QgbGV2ZWxCYXIgPSBsZXZlbERldGFpbHMucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgIHRoaXMuZ3JpZ2EuZGVsZXRlRGlzcGxheSggJ3BsYXktcHJldmlldy0nK2xldmVsSW5kZXggKTtcclxuICAgIGxldmVsRGV0YWlscy5yZW1vdmUoKTtcclxuICAgIGxldmVsQmFyLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5hcHAuc3R5bGUuc2V0U2Nyb2xsYmFySGVpZ2h0KCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxQb3MoIHRoaXMuYXBwLnN0eWxlLnNjcm9sbFBvcyApO1xyXG4gIH1cclxuICBcclxuICBzaG93TGV2ZWxEZXRhaWxzKCBkZXRhaWxzTGV2ZWxJbmRleCApe1xyXG4gICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IGRldGFpbHNMZXZlbEluZGV4O1xyXG4gICAgY29uc3QgbGV2ZWxEZXRhaWxzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsLWRldGFpbHMtJysgZGV0YWlsc0xldmVsSW5kZXgpO1xyXG4gICAgbGV2ZWxEZXRhaWxzQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgdGhpcy5ncmlnYS5kaXNwbGF5R3JpZCgncGxheS1wcmV2aWV3LScrZGV0YWlsc0xldmVsSW5kZXgsICdwcmV2aWV3JywgdGhpcy5hcHAuZGlzcGxheVNldHRpbmdzKTtcclxuICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMuYXBwLmJhY2tncm91bmRUaWxlU2NlbmUgKTtcclxuICAgIHRoaXMuZ3JpZC5sb2FkU2NlbmUoIHRoaXMubGV2ZWxzW3RoaXMuc3RhdGVdWyB0aGlzLmRldGFpbHNMZXZlbEluZGV4IF0uc2NlbmVEYXRhICk7XHJcbiAgICB0aGlzLmdyaWdhLnJlc2l6ZURpc3BsYXlzKCk7XHJcbiAgICB0aGlzLmFwcC5zdHlsZS5zZXRTY3JvbGxiYXJIZWlnaHQoKTtcclxuICAgIHRoaXMuYXBwLnN0eWxlLnNldFNjcm9sbFBvc1RvTGV2ZWwoIHRoaXMuZGV0YWlsc0xldmVsSW5kZXggKTtcclxuICB9XHJcblxyXG4gIGhpZGVMZXZlbERldGFpbHMoKXtcclxuICAgIGlmICgodGhpcy5kZXRhaWxzTGV2ZWxJbmRleCB8fCB0aGlzLmRldGFpbHNMZXZlbEluZGV4ID09PSAwKSAmJiB0aGlzLmRldGFpbHNMZXZlbEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGxldmVsRGV0YWlsc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbC1kZXRhaWxzLScrdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCk7XHJcbiAgICAgICAgbGV2ZWxEZXRhaWxzQmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuZ3JpZ2EucmVtb3ZlR3JpZEZyb21EaXNwbGF5KCdwcmV2aWV3JywgJ3BsYXktcHJldmlldy0nK3RoaXMuZGV0YWlsc0xldmVsSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuZ3JpZC5jbGVhclNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzTGV2ZWxJbmRleCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVMZXZlbCggbGV2ZWxJbmRleCApe1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLmRlbGV0ZUxldmVsKCB0aGlzLmxldmVsc1sneW91ckxldmVscyddW2xldmVsSW5kZXhdLm5hbWUgKTtcclxuICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgdGhpcy5sZXZlbHNbdGhpcy5zdGF0ZV0uc3BsaWNlKCBsZXZlbEluZGV4LCAxICk7XHJcbiAgICB0aGlzLnJlbW92ZUxldmVsRnJvbUxldmVsc0NvbnRhaW5lciggbGV2ZWxJbmRleCApO1xyXG4gICAgdGhpcy5jbGVhckxldmVsc0NvbnRhaW5lcigpO1xyXG4gICAgdGhpcy5maWxsTGV2ZWxzQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLnBvcHVwID0gbnVsbDtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxldmVsTmFtZUNsaWNrZWQoIHRhcmdldCApe1xyXG4gICAgY29uc3QgbGV2ZWxEZXRhaWxzQmFyID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGxldmVsRGV0YWlsc0Jhci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgIHRoaXMuaGlkZUxldmVsRGV0YWlscygpO1xyXG4gICAgICB0aGlzLnNob3dMZXZlbERldGFpbHMoIHBhcnNlSW50KGxldmVsRGV0YWlsc0Jhci5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSkgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSAncHJlc2V0cycpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUxldmVsRWRpdEJ1dHRvbkNsaWNrZWQoIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhbmRsZUxldmVsUGxheUJ1dHRvbkNsaWNrZWQoIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTGV2ZWxQbGF5QnV0dG9uQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1sZXZlbCcpKTtcclxuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5lbmQoKTtcclxuICAgIHRoaXMuYXBwLnBsYXkuc3RhcnQoIHRoaXMubGV2ZWxzW29sZFN0YXRlXVtsZXZlbEluZGV4XSwgb2xkU3RhdGUsIGxldmVsSW5kZXggKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxldmVsRWRpdEJ1dHRvbkNsaWNrZWQoIHRhcmdldCApe1xyXG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IHBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuZW5kKCk7XHJcbiAgICB0aGlzLmFwcC5lZGl0b3Iuc3RhcnQoIHRoaXMubGV2ZWxzW29sZFN0YXRlXVtsZXZlbEluZGV4XSwgb2xkU3RhdGUsIGxldmVsSW5kZXggKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUxldmVsRGVsZXRlQnV0dG9uQ2xpY2tlZCggdGFyZ2V0ICl7XHJcbiAgICBjb25zdCBsZXZlbEluZGV4ID0gcGFyc2VJbnQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTtcclxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoICdwcmV2aWV3LWRpc3BsYXktJytsZXZlbEluZGV4LCAnQXJlIHlvdSBTdXJlPycsXHJcbiAgICBbXHJcbiAgICAgIHtpZDogJ3BvcHVwLXBsYXktYWdhaW4nLCB0ZXh0OiAnQ2FuY2VsJywgY2xpY2s6ICgpID0+IHRoaXMuY2xvc2VQb3B1cCgpfSxcclxuICAgICAge2lkOiAncG9wdXAtbmV4dC1sZXZlbCcsIHRleHQ6ICdEZWxldGUnLCBjbGljazogKCkgPT4gdGhpcy5kZWxldGVMZXZlbCggbGV2ZWxJbmRleCApfVxyXG4gICAgXSApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VQb3B1cCgpe1xyXG4gICAgdGhpcy5wb3B1cC5jbG9zZSgpO1xyXG4gICAgdGhpcy5wb3B1cCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVMZXZlbHNDb250YWluZXJDbGljayggZSApe1xyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGV2ZWwtbmFtZScpKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlTGV2ZWxOYW1lQ2xpY2tlZCggZS50YXJnZXQgKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1wbGF5LWJ1dHRvbicpKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlTGV2ZWxQbGF5QnV0dG9uQ2xpY2tlZCggZS50YXJnZXQgKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1lZGl0LWJ1dHRvbicpKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlTGV2ZWxFZGl0QnV0dG9uQ2xpY2tlZCggZS50YXJnZXQgKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsZXZlbC1kZWxldGUtYnV0dG9uJykpIHtcclxuICAgICAgdGhpcy5oYW5kbGVMZXZlbERlbGV0ZUJ1dHRvbkNsaWNrZWQoIGUudGFyZ2V0ICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5hbWVMZXZlbCggbGV2ZWxJbmRleCwgbmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciApe1xyXG4gICAgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXVsgbGV2ZWxJbmRleCBdLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXVsgbGV2ZWxJbmRleCBdLmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXVsgbGV2ZWxJbmRleCBdLm5hbWUgPSB0aGlzLmFwcC5sb2NhbFN0b3JhZ2UucmVuYW1lTGV2ZWwoIC8vbWlnaHQgYWRkIG51bWJlcnMgdG8gbGV2ZWwgbmFtZTtcclxuICAgICAgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXVsgbGV2ZWxJbmRleCBdLm5hbWUsXHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGRpZmZpY3VsdHksXHJcbiAgICAgIGNyZWF0b3JcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVMZXZlbCggbGV2ZWxJbmRleCApe1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNhdmVMZXZlbCggdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXVtsZXZlbEluZGV4XSApO1xyXG4gICAgdGhpcy5hcHAubG9jYWxTdG9yYWdlLnJlbW92ZUxldmVsU29sdmVkKCB0aGlzLmxldmVsc1sneW91ckxldmVscyddW2xldmVsSW5kZXhdLm5hbWUsICd5b3VyTGV2ZWxzJyApO1xyXG4gIH1cclxuXHJcbiAgbmV3TGV2ZWwoIG5hbWUsIGRpZmZpY3VsdHksIGNyZWF0b3IsIHNjZW5lRGF0YSApe1xyXG4gICAgbGV0IGxldmVsID0gbmV3IEdob3N0eUxldmVsKCBuYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yLCBzY2VuZURhdGEgKTtcclxuICAgIGxldmVsID0gdGhpcy5hcHAubG9jYWxTdG9yYWdlLnNhdmVOZXdMZXZlbCggbGV2ZWwgKTsgLy9taWdodCBhZGQgbnVtYmVycyB0byBsZXZlbCBuYW1lO1xyXG4gICAgdGhpcy5sZXZlbHNbJ3lvdXJMZXZlbHMnXS5wdXNoKGxldmVsKTtcclxuICAgIHJldHVybiBbIGxldmVsLCAneW91ckxldmVscycsIHRoaXMubGV2ZWxzWyd5b3VyTGV2ZWxzJ10ubGVuZ3RoLTEgXTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEdob3N0eUxldmVsIHtcclxuICBjb25zdHJ1Y3RvciggbmFtZSwgZGlmZmljdWx0eSwgY3JlYXRvciwgc2NlbmVEYXRhICl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgIHRoaXMuY3JlYXRvciA9IGNyZWF0b3I7XHJcbiAgICB0aGlzLnNjZW5lRGF0YSA9IHNjZW5lRGF0YTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsZXZlbHNIZWxwID0ge1xyXG4gIGVuZ2xpc2g6XHJcbiAgW1xyXG4gICAgICB7XHJcbiAgICAgICAgICBoMzogJ0hlcmUgYXJlIGFsbCBsZXZlbHM6JyxcclxuICAgICAgICAgIHA6ICdTd2l0Y2ggYmV0d2VlbiBjYXRlZ29yaWVzIGluIHRoZSBiYXIgb24gdG9wJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgICAgaDM6ICdUaGUgYmx1ZSBwbGF5IGJ1dHRvbicsXHJcbiAgICAgICAgICBwOiAnbWVhbnMgeW91IGhhdmVuXFwndCBzb2x2ZWQgdGhlIGxldmVsIHlldCdcclxuICAgICAgfVxyXG4gIF1cclxufSIsImV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKCBhcHAgKXtcclxuICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJykpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycsICdbXScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWhpZ2hlc3QtbGV2ZWxzOmApKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBnaG9zdHktaGlnaGVzdC1sZXZlbHM6YCwgJ3t9Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGFzdC1zaG93bi12ZXJzaW9uOmApKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBnaG9zdHktbGFzdC1zaG93bi12ZXJzaW9uOmAsICcxLjAuMCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBMZXZlbFNvbHZlZEZvckNhdGVnb3J5KCBjYXRlZ29yeSApe1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gKSkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gLCAnW10nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGlmIHRoZSBsZXZlbC5uYW1lIGV4aXN0cywgaXQgaW5jcmVtZW50cyBpbmRleCB1bnRpbCB0aGUgbGV2ZWwubmFtZSBkb2VzIG5vdCBleGlzdFxyXG4gIHJlbmFtZUxldmVsKCBvbGROYW1lLCBuZXdOYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yLCBpbmRleCA9IDAgKXtcclxuICAgIGxldCBpbmRleFN0cmluZyA9ICcnO1xyXG4gICAgaWYgKGluZGV4KSB7IGluZGV4U3RyaW5nID0gYCAke2luZGV4fWAgfVxyXG4gICAgY29uc3QgbmV3SXRlbUtleSA9IGBnaG9zdHkteW91ci1sZXZlbDoke25ld05hbWUraW5kZXhTdHJpbmd9YDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuZXdJdGVtS2V5KSAmJiBvbGROYW1lICE9PSBuZXdOYW1lKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbmFtZUxldmVsKCBvbGROYW1lLCBuZXdOYW1lLCBkaWZmaWN1bHR5LCBjcmVhdG9yLCBpbmRleCsxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBvbGRJdGVtS2V5ID0gYGdob3N0eS15b3VyLWxldmVsOiR7b2xkTmFtZX1gO1xyXG4gICAgICBjb25zdCBsZXZlbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ob2xkSXRlbUtleSkpO1xyXG4gICAgICBsZXZlbC5uYW1lID0gbmV3TmFtZStpbmRleFN0cmluZztcclxuICAgICAgbGV2ZWwuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgIGxldmVsLmNyZWF0b3IgPSBjcmVhdG9yO1xyXG4gICAgICBjb25zdCBsZXZlbFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxldmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIG5ld0l0ZW1LZXksIGxldmVsU3RyaW5nICk7XHJcbiAgICAgIGlmIChvbGROYW1lICE9PSBuZXdOYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oIG9sZEl0ZW1LZXkgKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBhbGxMZXZlbE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJykpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGFsbExldmVsTmFtZXMuaW5kZXhPZihvbGROYW1lKTtcclxuICAgICAgYWxsTGV2ZWxOYW1lcy5zcGxpY2UoaW5kZXgsIDEsIG5ld05hbWUraW5kZXhTdHJpbmcpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggJ2dob3N0eS1hbGwteW91ci1sZXZlbC1uYW1lcycsIEpTT04uc3RyaW5naWZ5KGFsbExldmVsTmFtZXMpICk7XHJcbiAgICAgIHJldHVybiBsZXZlbC5uYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZUxldmVsKCBsZXZlbCApe1xyXG4gICAgY29uc3QgaXRlbUtleSA9IGBnaG9zdHkteW91ci1sZXZlbDoke2xldmVsLm5hbWV9YDtcclxuICAgIGNvbnN0IGxldmVsU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobGV2ZWwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGl0ZW1LZXksIGxldmVsU3RyaW5nICk7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgbGV2ZWwubmFtZSBleGlzdHMsIGl0IGluY3JlbWVudHMgaW5kZXggdW50aWwgdGhlIGxldmVsLm5hbWUgZG9lcyBub3QgZXhpc3RcclxuICBzYXZlTmV3TGV2ZWwoIGxldmVsLCBpbmRleCA9IDAgKXtcclxuICAgIGxldCBpbmRleFN0cmluZyA9ICcnO1xyXG4gICAgaWYgKGluZGV4KSB7IGluZGV4U3RyaW5nID0gYCAke2luZGV4fWAgfVxyXG4gICAgY29uc3QgaXRlbUtleSA9IGBnaG9zdHkteW91ci1sZXZlbDoke2xldmVsLm5hbWUraW5kZXhTdHJpbmd9YDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtS2V5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zYXZlTmV3TGV2ZWwoIGxldmVsLCBpbmRleCsxICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXZlbC5uYW1lICs9IGluZGV4U3RyaW5nO1xyXG4gICAgICBjb25zdCBsZXZlbFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGxldmVsKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGl0ZW1LZXksIGxldmVsU3RyaW5nICk7XHJcbiAgICAgIGNvbnN0IGFsbExldmVsTmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSk7XHJcbiAgICAgIGFsbExldmVsTmFtZXMucHVzaChsZXZlbC5uYW1lKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oICdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnLCBKU09OLnN0cmluZ2lmeShhbGxMZXZlbE5hbWVzKSApO1xyXG4gICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRZb3VyTGV2ZWxzKCl7XHJcbiAgICBjb25zdCB5b3VyTGV2ZWxzID0gW107XHJcbiAgICBjb25zdCBhbGxMZXZlbE5hbWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJykpO1xyXG4gICAgYWxsTGV2ZWxOYW1lcy5mb3JFYWNoKCBsZXZlbE5hbWUgPT4ge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHkteW91ci1sZXZlbDoke2xldmVsTmFtZX1gKSApO1xyXG4gICAgICB5b3VyTGV2ZWxzLnB1c2goIGxldmVsICk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4geW91ckxldmVscztcclxuICB9XHJcblxyXG4gIGRlbGV0ZUxldmVsKCBsZXZlbE5hbWUgKXtcclxuICAgIGNvbnN0IGFsbExldmVsTmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktYWxsLXlvdXItbGV2ZWwtbmFtZXMnKSk7XHJcbiAgICBjb25zdCBpbmRleCA9IGFsbExldmVsTmFtZXMuaW5kZXhPZiggbGV2ZWxOYW1lICk7XHJcbiAgICBhbGxMZXZlbE5hbWVzLnNwbGljZSggaW5kZXgsIDEgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnZ2hvc3R5LWFsbC15b3VyLWxldmVsLW5hbWVzJywgSlNPTi5zdHJpbmdpZnkoYWxsTGV2ZWxOYW1lcykgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGBnaG9zdHkteW91ci1sZXZlbDoke2xldmVsTmFtZX1gKTtcclxuICAgIHRoaXMucmVtb3ZlTGV2ZWxTb2x2ZWQoIGxldmVsTmFtZSwgJ3lvdXJMZXZlbHMnICk7XHJcbiAgfVxyXG5cclxuICBzYXZlTGV2ZWxTb2x2ZWQoIGxldmVsTmFtZSwgY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IHNvbHZlZExldmVscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCkpO1xyXG4gICAgaWYgKCFzb2x2ZWRMZXZlbHMuaW5jbHVkZXMobGV2ZWxOYW1lKSkge1xyXG4gICAgICBzb2x2ZWRMZXZlbHMucHVzaCggbGV2ZWxOYW1lICk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgZ2hvc3R5LWxldmVscy1zb2x2ZWQtaW46JHtjYXRlZ29yeX1gLCBKU09OLnN0cmluZ2lmeSggc29sdmVkTGV2ZWxzICkgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUxldmVsU29sdmVkKCBsZXZlbE5hbWUsIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBzb2x2ZWRMZXZlbHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWApKTtcclxuICAgIGlmIChzb2x2ZWRMZXZlbHMuaW5jbHVkZXMobGV2ZWxOYW1lKSkge1xyXG4gICAgICBzb2x2ZWRMZXZlbHMuc3BsaWNlKCBzb2x2ZWRMZXZlbHMuaW5kZXhPZiggbGV2ZWxOYW1lICkgKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oIGBnaG9zdHktbGV2ZWxzLXNvbHZlZC1pbjoke2NhdGVnb3J5fWAsIEpTT04uc3RyaW5naWZ5KCBzb2x2ZWRMZXZlbHMgKSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TGV2ZWxTb2x2ZWQoIGxldmVsTmFtZSwgY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IHNvbHZlZExldmVscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCkpO1xyXG4gICAgcmV0dXJuIHNvbHZlZExldmVscy5pbmNsdWRlcyggbGV2ZWxOYW1lICk7XHJcbiAgfVxyXG5cclxuICBnZXROdW1iZXJPZkxldmVsc1NvbHZlZCggY2F0ZWdvcnkgKXtcclxuICAgIGNvbnN0IHNvbHZlZExldmVscyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYGdob3N0eS1sZXZlbHMtc29sdmVkLWluOiR7Y2F0ZWdvcnl9YCkpO1xyXG4gICAgcmV0dXJuIHNvbHZlZExldmVscy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBzYXZlSGlnaGVzdExldmVsKCBsZXZlbE5hbWUsIGNhdGVnb3J5ICl7XHJcbiAgICBjb25zdCBoaWdoZXN0TGV2ZWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktaGlnaGVzdC1sZXZlbHM6JykpO1xyXG4gICAgaGlnaGVzdExldmVsW2NhdGVnb3J5XSA9IGxldmVsTmFtZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCAnZ2hvc3R5LWhpZ2hlc3QtbGV2ZWxzOicsIEpTT04uc3RyaW5naWZ5KCBoaWdoZXN0TGV2ZWwgKSApO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGlnaGVzdExldmVsKCBjYXRlZ29yeSApe1xyXG4gICAgY29uc3QgaGlnaGVzdExldmVsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2hvc3R5LWhpZ2hlc3QtbGV2ZWxzOicpKTtcclxuICAgIHJldHVybiBoaWdoZXN0TGV2ZWxbY2F0ZWdvcnldO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFzdFNob3duVmVyc2lvbigpe1xyXG4gICAgY29uc3QgbGFzdFNob3duVmVyc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnaG9zdHktbGFzdC1zaG93bi12ZXJzaW9uJyk7XHJcbiAgICByZXR1cm4gbGFzdFNob3duVmVyc2lvbjtcclxuICB9XHJcblxyXG4gIHNldExhc3RTaG93blZlcnNpb24oIHZlcnNpb24gKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnaG9zdHktbGFzdC1zaG93bi12ZXJzaW9uJywgdmVyc2lvbik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi9wb3B1cFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXkge1xyXG4gICAgY29uc3RydWN0b3IoIGFwcCwgZ3JpZ2EgKXtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLmdyaWdhID0gZ3JpZ2E7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gZ3JpZ2EuZ3JpZHNbJ3BsYXknXTtcclxuICAgICAgICB0aGlzLnBsYXlfbGV2ZWxfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWxldmVsLW5hbWUnKTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cy1sZXZlbC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLm5leHRfbGV2ZWxfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtbGV2ZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5X3Jlc3RhcnRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktcmVzdGFydC1idXR0b24nKTtcclxuICAgICAgICB0aGlzLnBsYXlfdW5kb19idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS11bmRvLWJ1dHRvbicpO1xyXG4gICAgICAgIHRoaXMucGxheV9lZGl0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWVkaXQtYnV0dG9uJyk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEluZGV4ID0gdGhpcy5hcHAubGV2ZWxzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJ2NsYXNzaWMnO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmFwcC5sZXZlbHMubGV2ZWxzW3RoaXMuY2F0ZWdvcnldW3RoaXMubGV2ZWxJbmRleF07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5rZXlUcmFja0VudGl0eSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51bmRvSGlzdG9yeSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKXtcclxuICAgICAgICB0aGlzLmdyaWdhLmRpc3BsYXlHcmlkKCdwbGF5JywgJ3BsYXknLCB0aGlzLmFwcC5kaXNwbGF5U2V0dGluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCBsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXggKXtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X2J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB0aGlzLmFwcC5wbGF5X3NjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gJ3BsYXknO1xyXG4gICAgICAgIHRoaXMuYXBwLnN0YXRlID0gJ3BsYXknO1xyXG4gICAgICAgIHRoaXMubG9hZExldmVsKCBsZXZlbCwgY2F0ZWdvcnksIGxldmVsSW5kZXggKTtcclxuICAgICAgICBpZiAoIHRoaXMuY2F0ZWdvcnkgPT09ICd5b3VyTGV2ZWxzJyApIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheV9lZGl0X2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLmNhdGVnb3J5ID09PSAnY2xhc3NpYycgKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlfZWRpdF9idXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwLnN0eWxlLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgICAgICB0aGlzLmdyaWdhLnJlc2l6ZURpc3BsYXlzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jbGVhckxldmVsKCk7XHJcbiAgICAgICAgdGhpcy5hcHAucGxheV9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5hcHAucGxheV9zY3JlZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExldmVsKCBsZXZlbCA9IHRoaXMubGV2ZWwsIGNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeSwgbGV2ZWxJbmRleCA9IHRoaXMubGV2ZWxJbmRleCkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5sZXZlbEluZGV4ID0gbGV2ZWxJbmRleDtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLmFwcC5iYWNrZ3JvdW5kVGlsZVNjZW5lICk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy5sZXZlbC5zY2VuZURhdGEgKTtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5LnB1c2goIHRoaXMubGV2ZWwuc2NlbmVEYXRhICk7XHJcbiAgICAgICAgbGV0IGxldmVsQmFyVGV4dCA9IGAke3RoaXMubGV2ZWxJbmRleCsxfTogJHt0aGlzLmxldmVsLm5hbWV9YDtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgICAgICAgIGxldmVsQmFyVGV4dCA9IGxldmVsLm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheV9sZXZlbF9uYW1lLmlubmVySFRNTCA9IGxldmVsQmFyVGV4dDtcclxuICAgICAgICB0aGlzLnVwZGF0ZU5leHRQcmV2aW91c0xldmVsQnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU5leHRQcmV2aW91c0xldmVsQnV0dG9ucygpe1xyXG4gICAgICAgIGlmICggdGhpcy5jYXRlZ29yeSA9PT0gJ2NsYXNzaWMnICkge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMubGV2ZWxJbmRleCA9PT0gdGhpcy5hcHAubGV2ZWxzLmNsYXNzaWNIaWdoZXN0TGV2ZWxJbmRleCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIHRoaXMubGV2ZWxJbmRleCA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzX2xldmVsX2J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyTGV2ZWwoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnVuZG9IaXN0b3J5ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWxEb25lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7cmV0dXJufTtcclxuICAgICAgICB0aGlzLmFwcC5sZXZlbHMubGV2ZWxEb25lKCB0aGlzLmxldmVsSW5kZXgsIHRoaXMuY2F0ZWdvcnkgKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZU5leHRQcmV2aW91c0xldmVsQnV0dG9ucygpO1xyXG4gICAgICAgIGxldCBuZXh0QnV0dG9uVGV4dCA9ICdOZXh0IGxldmVsJztcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnKSB7IG5leHRCdXR0b25UZXh0ID0gJ0VkaXQnIH07XHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggJ3BsYXktZGlzcGxheScsICdMZXZlbCBEb25lIScsXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICB7aWQ6ICdwb3B1cC1wbGF5LWFnYWluJywgdGV4dDogJ1BsYXkgYWdhaW4nLCBjbGljazogKCkgPT4gdGhpcy5oYW5kbGVQb3B1cFBsYXlBZ2FpbkNsaWNrKCl9LFxyXG4gICAgICAgICAgICB7aWQ6ICdwb3B1cC1uZXh0LWxldmVsJywgdGV4dDogbmV4dEJ1dHRvblRleHQsIGNsaWNrOiAoKSA9PiB0aGlzLmhhbmRsZVBvcHVwTmV4dExldmVsQ2xpY2soKX1cclxuICAgICAgICBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVW5kb0hpc3RvcnkoKSB7XHJcbiAgICAgICAgdGhpcy51bmRvSGlzdG9yeS5wdXNoKCB0aGlzLmdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YSgpICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQb3B1cCgpe1xyXG4gICAgICAgIHRoaXMucG9wdXAuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLnBvcHVwID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cE5leHRMZXZlbENsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5ID09PSAnY2xhc3NpYycpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXh0TGV2ZWxCdXR0b25DbGljaygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jYXRlZ29yeSA9PT0gJ3lvdXJMZXZlbHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUGxheUVkaXRCdXR0b25DbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQb3B1cFBsYXlBZ2FpbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlUGxheVJlc3RhcnRCdXR0b25DbGlja2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJldmlvdXNMZXZlbEJ1dHRvbkNsaWNrKCBlICl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICAgICAgaWYgKHRoaXMucHJldmlvdXNfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge3JldHVybn07XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5hcHAubGV2ZWxzLmxldmVsc1t0aGlzLmNhdGVnb3J5XVstLXRoaXMubGV2ZWxJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVOZXh0TGV2ZWxCdXR0b25DbGljaygpe1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7dGhpcy5jbG9zZVBvcHVwKCl9O1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRfbGV2ZWxfYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge3JldHVybn07XHJcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmRleCAhPT0gdGhpcy5hcHAubGV2ZWxzLmxldmVsc1t0aGlzLmNhdGVnb3J5XS5sZW5ndGgtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5hcHAubGV2ZWxzLmxldmVsc1t0aGlzLmNhdGVnb3J5XVsrK3RoaXMubGV2ZWxJbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMZXZlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRMZXZlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5TGV2ZWxOYW1lQ2xpY2soIGUgKXtcclxuICAgICAgICB0aGlzLmVuZCgpO1xyXG4gICAgICAgIHRoaXMuYXBwLmxldmVscy5zdGFydCggdGhpcy5jYXRlZ29yeSwgdGhpcy5sZXZlbEluZGV4ICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheVJlc3RhcnRCdXR0b25DbGlja2VkKCl7XHJcbiAgICAgICAgaWYgKHRoaXMucG9wdXApIHt0aGlzLmNsb3NlUG9wdXAoKX07XHJcbiAgICAgICAgdGhpcy5jbGVhckxldmVsKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkTGV2ZWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQbGF5VW5kb0J1dHRvbkNsaWNrKCBlICl7XHJcbiAgICAgICAgaWYgKHRoaXMudW5kb0hpc3RvcnkubGVuZ3RoID09PSAxKXtyZXR1cm59O1xyXG4gICAgICAgIGlmICh0aGlzLnBvcHVwKSB7dGhpcy5jbG9zZVBvcHVwKCl9O1xyXG4gICAgICAgIHRoaXMudW5kb0hpc3RvcnkucG9wKCk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmNsZWFyU2NlbmUoKTtcclxuICAgICAgICB0aGlzLmdyaWQubG9hZFNjZW5lKCB0aGlzLmFwcC5iYWNrZ3JvdW5kVGlsZVNjZW5lICk7XHJcbiAgICAgICAgdGhpcy5ncmlkLmxvYWRTY2VuZSggdGhpcy51bmRvSGlzdG9yeVsgdGhpcy51bmRvSGlzdG9yeS5sZW5ndGgtMSBdICk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUGxheUVkaXRCdXR0b25DbGljaygpe1xyXG4gICAgICAgIHRoaXMuZW5kKCk7XHJcbiAgICAgICAgdGhpcy5hcHAuZWRpdG9yLnN0YXJ0KCB0aGlzLmxldmVsLCB0aGlzLmNhdGVnb3J5LCB0aGlzLmxldmVsSW5kZXggKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCl7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c19sZXZlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUHJldmlvdXNMZXZlbEJ1dHRvbkNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMubmV4dF9sZXZlbF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlTmV4dExldmVsQnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5X2xldmVsX25hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuaGFuZGxlUGxheUxldmVsTmFtZUNsaWNrKCBlICkpO1xyXG4gICAgICAgIHRoaXMucGxheV9yZXN0YXJ0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5oYW5kbGVQbGF5UmVzdGFydEJ1dHRvbkNsaWNrZWQoIGUgKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5X3VuZG9fYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlVbmRvQnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5X2VkaXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZVBsYXlFZGl0QnV0dG9uQ2xpY2soIGUgKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwbGF5SGVscCA9IHtcclxuICAgIGVuZ2xpc2g6IFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdIb3cgdG8gbW92ZTonLFxyXG4gICAgICAgICAgICBwOiAnVXNlIHRoZSBhcnJvdyBrZXlzIG9uIHlvdXIga2V5Ym9hcmQgb3Igc3dpcGUgb24gYSB0b3VjaHNjcmVlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaDM6ICdVbmRvOicsXHJcbiAgICAgICAgICAgIHA6ICdQcmVzcyB0aGUgPGkgY2xhc3M9XCJmYXMgZmEtdW5kb1wiPjwvaT4gaWNvbiB0byB1bmRvIHRoZSBsYXN0IG1vdmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGgzOiAnUmVzdGFydDonLFxyXG4gICAgICAgICAgICBwOiAnUHJlc3MgdGhlIDxpIGNsYXNzPVwiZmFzIGZhLWZhc3QtYmFja3dhcmRcIj48L2k+IGljb24gdG8gcmVzdGFydCB0aGUgbGV2ZWwnXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxufSIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoIGRpc3BsYXlJZCwgbWVzc2FnZSwgYnV0dG9ucywgaW5wdXRGaWVsZHMsIGgzVGV4dCwgcFRleHQpIHtcclxuICAgIHRoaXMuZGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpc3BsYXlJZCk7XHJcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdIZWxsbyBXb3JsZCEnO1xyXG4gICAgdGhpcy5idXR0b25zRGF0YSA9IGJ1dHRvbnMgfHwgW107XHJcbiAgICB0aGlzLmlucHV0RmllbGRzID0gaW5wdXRGaWVsZHMgfHwgW107XHJcbiAgICB0aGlzLmgzVGV4dCA9IGgzVGV4dDtcclxuICAgIHRoaXMucFRleHQgPSBwVGV4dDtcclxuXHJcbiAgICB0aGlzLnBvcHVwSFRNTFN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5nZW5lcmF0ZVBvcHVwSFRNTFN0cmluZygpO1xyXG4gICAgdGhpcy5kaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgdGhpcy5wb3B1cEhUTUxTdHJpbmcpO1xyXG4gICAgdGhpcy5zZXR1cEJ1dHRvbkxpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQb3B1cEhUTUxTdHJpbmcoKSB7XHJcbiAgICBsZXQgcG9wdXBUZXh0SFRNTCA9ICcnO1xyXG4gICAgaWYgKCB0aGlzLmgzVGV4dCB8fCB0aGlzLnBUZXh0ICkge1xyXG4gICAgICBsZXQgaDNUZXh0SFRNTCA9ICcnO1xyXG4gICAgICBsZXQgcFRleHRIVE1MID0gJyc7XHJcbiAgICAgIGlmICh0aGlzLmgzVGV4dCkge2gzVGV4dEhUTUwgPSBgPGgzPiR7dGhpcy5oM1RleHR9PC9oMz5gfTtcclxuICAgICAgaWYgKHRoaXMucFRleHQpIHtwVGV4dEhUTUwgPSBgPHA+JHt0aGlzLnBUZXh0fTwvcD5gfTtcclxuICAgICAgcG9wdXBUZXh0SFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLXRleHRcIj5cclxuICAgICAgICAke2gzVGV4dEhUTUx9XHJcbiAgICAgICAgJHtwVGV4dEhUTUx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnB1dHNIVE1MU3RyaW5nID0gJyc7XHJcbiAgICB0aGlzLmlucHV0RmllbGRzLmZvckVhY2goIGlEYXRhID0+IHtcclxuICAgICAgaW5wdXRzSFRNTFN0cmluZyArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cC1pbnB1dC1saW5lXCI+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIiR7aURhdGEubmFtZX1cIj4ke2lEYXRhLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCIke2lEYXRhLm5hbWV9LWlucHV0XCIgbmFtZT1cIiR7aURhdGEubmFtZX1cIiBwbGFjZWhvbGRlcj1cIiR7aURhdGEucGxhY2Vob2xkZXJ9XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSApO1xyXG5cclxuICAgIGxldCBidXR0b25zSFRNTFN0cmluZyA9ICcnO1xyXG4gICAgdGhpcy5idXR0b25zRGF0YS5mb3JFYWNoKCBiRGF0YSA9PiB7XHJcbiAgICAgIGJ1dHRvbnNIVE1MU3RyaW5nICs9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbiBwb3B1cC1idXR0b25cIiBpZD1cIiR7YkRhdGEuaWR9XCI+JHtiRGF0YS50ZXh0fTwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSApXHJcblxyXG4gICAgdGhpcy5wb3B1cEhUTUxTdHJpbmcgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wdXBcIiBpZD1cIiR7dGhpcy5kaXNwbGF5LmlkfS1wb3B1cFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtbWVzc2FnZVwiPiR7dGhpcy5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICAke3BvcHVwVGV4dEhUTUx9XHJcbiAgICAgICR7aW5wdXRzSFRNTFN0cmluZ31cclxuICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWJhciBwb3B1cC1idXR0b25zLWJhclwiPlxyXG4gICAgICAgICR7YnV0dG9uc0hUTUxTdHJpbmd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBCdXR0b25MaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbnNEYXRhLmZvckVhY2goIGJEID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGJELmlkICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZSA9PiB0aGlzLmhhbmRsZUJ1dHRvbkNsaWNrKGUpICk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVCdXR0b25DbGljayggZSApe1xyXG4gICAgY29uc3QgYkRhdGEgPSB0aGlzLmJ1dHRvbnNEYXRhLmZpbmQoIGJEID0+IGJELmlkID09PSBlLnRhcmdldC5pZCApO1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZHMuZm9yRWFjaCggaURhdGEgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dEVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlEYXRhLm5hbWUrJy1pbnB1dCcpO1xyXG4gICAgICBsZXQgdmFsdWUgPSBpbnB1dEVsbS52YWx1ZTtcclxuICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7IHZhbHVlID0gaURhdGEucGxhY2Vob2xkZXIgfTtcclxuICAgICAgaW5wdXRWYWx1ZXNbaURhdGEubmFtZV0gPSB2YWx1ZTtcclxuICAgIH0gKTtcclxuICAgIGJEYXRhLmNsaWNrKCBpbnB1dFZhbHVlcyApO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpc3BsYXkuaWQrJy1wb3B1cCcpLnJlbW92ZSgpO1xyXG4gIH1cclxufSIsImZ1bmN0aW9uIGNvcHlUb3VjaCh7IGlkZW50aWZpZXIsIHBhZ2VYLCBwYWdlWSB9KSB7XHJcbiAgcmV0dXJuIHsgaWRlbnRpZmllciwgcGFnZVgsIHBhZ2VZIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZSB7XHJcbiAgY29uc3RydWN0b3IoIGFwcCApe1xyXG4gICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXInKTtcclxuICAgIHRoaXMuc2Nyb2xsYmFyX2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGxiYXItYm94Jyk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWxzLWNvbnRhaW5lcicpO1xyXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcclxuICAgIHRoaXMuc2Nyb2xsUG9zID0gMDtcclxuICAgIHRoaXMub25nb2luZ1RvdWNoID0gW107XHJcblxyXG4gICAgdGhpcy5zY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB0aGlzLmhhbmRsZU1vdXNlTW92ZU9uU2Nyb2xsYmFyKGUpKTtcclxuICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZSA9PiB0aGlzLmhhbmRsZU1vdXNlU2Nyb2xsKGUpKTtcclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4gdGhpcy5oYW5kbGVNb3VzZVNjcm9sbChlKSk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZSA9PiB0aGlzLmhhbmRsZVRvdWNoTW92ZShlKSk7XHJcbiAgICB0aGlzLmxldmVsc19jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHRoaXMuaGFuZGxlVG91Y2hFbmQoZSkpO1xyXG4gICAgdGhpcy5sZXZlbHNfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBlID0+IHRoaXMuaGFuZGxlVG91Y2hTdGFydChlKSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNldFNjcm9sbGJhckhlaWdodCgpO1xyXG4gICAgICB0aGlzLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNpemVXcmFwcGVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxQb3MoIHkgKXtcclxuICAgIGlmICh5IDwgMCkge1xyXG4gICAgICB0aGlzLnNjcm9sbFBvcyA9IDA7XHJcbiAgICB9IGVsc2UgaWYgKHkgPCB0aGlzLmxldmVsc0NvbnRhaW5lckhlaWdodCAtIHRoaXMuc2Nyb2xsSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUG9zID0geTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsUG9zID0gdGhpcy5sZXZlbHNDb250YWluZXJIZWlnaHQgLSB0aGlzLnNjcm9sbEhlaWdodDtcclxuICAgIH1cclxuICAgIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICBtYXJnaW4tdG9wOiAtJHt0aGlzLnNjcm9sbFBvc31weDtcclxuICAgIGApO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Nyb2xsUG9zVG9MZXZlbCggbGV2ZWxJbmRleCApe1xyXG4gICAgICBjb25zdCBsZXZlbF9iYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwtZGV0YWlscy0nK2xldmVsSW5kZXgpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zKCBsZXZlbF9iYXIub2Zmc2V0VG9wICk7XHJcbiAgfVxyXG5cclxuICBzZXRTY3JvbGxiYXJIZWlnaHQoKXtcclxuICAgICAgY29uc3QgbGV2ZWxzQ29udGFpbmVySGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmxldmVsc19jb250YWluZXIpLmhlaWdodDtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgICAgaGVpZ2h0OiR7bGV2ZWxzQ29udGFpbmVySGVpZ2h0fTtcclxuICAgICAgYCk7XHJcbiAgICAgIHRoaXMubGV2ZWxzQ29udGFpbmVySGVpZ2h0ID0gcGFyc2VJbnQobGV2ZWxzQ29udGFpbmVySGVpZ2h0LnNsaWNlKDAsIC0yKSk7XHJcbiAgICAgIHRoaXMucmVzaXplU2Nyb2xsYmFyKCk7XHJcbiAgfVxyXG5cclxuICByZXNpemVTY3JvbGxiYXIoKXtcclxuICAgIHRoaXMuc2Nyb2xsSGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAtIHRoaXMubGV2ZWxzX2NvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAyMFxyXG4gICAgICArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5sZXZlbHNfY29udGFpbmVyKS5tYXJnaW5Ub3Auc2xpY2UoMCwtMikpO1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5sZXZlbHNDb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zY3JvbGxiYXJfYm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zY3JvbGxiYXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgaGVpZ2h0OiR7dGhpcy5zY3JvbGxIZWlnaHR9cHg7XHJcbiAgICBgKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVdyYXBwZXIoKXtcclxuICAgIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2hvbWUnIHx8ICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2xldmVscycpKSB7XHJcbiAgICAgIHRoaXMud3JhcHBlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ3BsYXknICYmIHRoaXMuYXBwLnBsYXkuc3RhdGUgPT09ICdwbGF5Jykge1xyXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIGlmIChkb2N1bWVudEhlaWdodC0xNTAgPCAoZG9jdW1lbnRXaWR0aC0zMikqMTAvMTYpIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBcclxuICAgICAgICAgIHdpZHRoOiR7KGRvY3VtZW50SGVpZ2h0LTE1MCkqMTYvMTAgKyAzMn1weDtcclxuICAgICAgICBgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndyYXBwZXIucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmFwcC5zdGF0ZSA9PT0gJ2VkaXRvcicpIHtcclxuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgICBpZiAoZG9jdW1lbnRIZWlnaHQtMTc4IDwgKGRvY3VtZW50V2lkdGgtMzIpKjI5LzQwKSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgICAgICB3aWR0aDokeyhkb2N1bWVudEhlaWdodC0xNzgpKjQwLzI5ICsgMzJ9cHg7XHJcbiAgICAgICAgYCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53cmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VTY3JvbGwoZSl7XHJcbiAgICB0aGlzLnNldFNjcm9sbFBvcyggdGhpcy5zY3JvbGxQb3MgKyBlLmRlbHRhWSApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW91c2VNb3ZlT25TY3JvbGxiYXIoZSl7XHJcbiAgICBpZiAoZS5idXR0b25zJTIgPT09IDEpIHtcclxuICAgICAgaWYgKCF0aGlzLmxvY2tlZCkge1xyXG4gICAgICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFNjcm9sbFBvcyh0aGlzLnNjcm9sbFBvcyArIGUubW92ZW1lbnRZICogMTApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmxvY2tlZCkge1xyXG4gICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRvdWNoTW92ZShlKXtcclxuICAgIE9iamVjdC52YWx1ZXMoZS5jaGFuZ2VkVG91Y2hlcykuZm9yRWFjaCggdG91Y2ggPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMub25nb2luZ1RvdWNoLmZpbmRJbmRleCggc1QgPT4gc1QuaWRlbnRpZmllciA9PT0gdG91Y2guaWRlbnRpZmllciApO1xyXG4gICAgICBjb25zdCBzYXZlZFRvdWNoID0gdGhpcy5vbmdvaW5nVG91Y2hbaW5kZXhdO1xyXG4gICAgICBjb25zdCBtb3ZlbWVudFkgPSB0b3VjaC5wYWdlWSAtIHNhdmVkVG91Y2gucGFnZVk7XHJcbiAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zKHRoaXMuc2Nyb2xsUG9zIC0gbW92ZW1lbnRZKjUpO1xyXG4gICAgICB0aGlzLm9uZ29pbmdUb3VjaFtpbmRleF0gPSBjb3B5VG91Y2godG91Y2gpO1xyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVG91Y2hTdGFydCggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyhlLmNoYW5nZWRUb3VjaGVzKS5mb3JFYWNoKCB0b3VjaCA9PiB7XHJcbiAgICAgIHRoaXMub25nb2luZ1RvdWNoLnB1c2goIGNvcHlUb3VjaCh0b3VjaCkgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVRvdWNoRW5kKCBlICl7XHJcbiAgICBPYmplY3QudmFsdWVzKGUuY2hhbmdlZFRvdWNoZXMpLmZvckVhY2goIHRvdWNoID0+IHtcclxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9uZ29pbmdUb3VjaC5maW5kSW5kZXgoIHNUID0+IHNULmlkZW50aWZpZXIgPT09IHRvdWNoLmlkZW50aWZpZXIgKTtcclxuICAgICAgdGhpcy5vbmdvaW5nVG91Y2guc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0gKTtcclxuICB9XHJcbn0iLCJjbGFzcyBHcmlkTGluayB7XHJcbiAgY29uc3RydWN0b3IoIGdyaWRJbnN0YW5jZSwgZGlzcGxheVNldHRpbmdzLCBkaXNwbGF5ICl7XHJcbiAgICB0aGlzLmdyaWRJbnN0YW5jZSA9IGdyaWRJbnN0YW5jZTtcclxuICAgIHRoaXMuZGlzcGxheVNldHRpbmdzID0gZGlzcGxheVNldHRpbmdzO1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gZGlzcGxheTtcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NEaXNwbGF5U2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLm9mZkNhbnZhcyA9IG51bGw7XHJcbiAgICB0aGlzLmN0eCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzRGlzcGxheVNldHRpbmdzKCl7XHJcbiAgICB0aGlzLmxlZnRJblB4ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MubGVmdCAqIHRoaXMuZGlzcGxheS53aWR0aDtcclxuICAgIHRoaXMudG9wSW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLnRvcCAqIHRoaXMuZGlzcGxheS5oZWlnaHQ7XHJcbiAgICB0aGlzLndpZHRoSW5QeCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLndpZHRoICogdGhpcy5kaXNwbGF5LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHRJblB4ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MuaGVpZ2h0ICogdGhpcy5kaXNwbGF5LmhlaWdodDtcclxuICAgIHRoaXMudGlsZVdpZHRoSW5QeCA9IHRoaXMud2lkdGhJblB4IC8gdGhpcy5kaXNwbGF5U2V0dGluZ3MuY29sdW1uc09uU2NyZWVuO1xyXG4gICAgdGhpcy50aWxlSGVpZ2h0SW5QeCA9IHRoaXMuaGVpZ2h0SW5QeCAvIHRoaXMuZGlzcGxheVNldHRpbmdzLnJvd3NPblNjcmVlbjtcclxuICAgIHRoaXMueFNoaWZ0ID0gdGhpcy5kaXNwbGF5U2V0dGluZ3MuY29sdW1uU2hpZnQgKiB0aGlzLnRpbGVXaWR0aEluUHg7XHJcbiAgICB0aGlzLnlTaGlmdCA9IHRoaXMuZGlzcGxheVNldHRpbmdzLnJvd1NoaWZ0ICogdGhpcy50aWxlSGVpZ2h0SW5QeDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZURpc3BsYXlTZXR0aW5ncyggbmV3RGlzcGxheVNldHRpbmdzICl7XHJcbiAgICBmb3IgKGxldCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyggbmV3RGlzcGxheVNldHRpbmdzICkpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5U2V0dGluZ3NbIHByb3BlcnR5IF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5ld0NhbnZhcygpe1xyXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aEluUHg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodEluUHg7XHJcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYFxyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogJHt0aGlzLnRvcEluUHh9cHg7XHJcbiAgICAgIGxlZnQ6ICR7dGhpcy5sZWZ0SW5QeH1weDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBgKTtcclxuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZSggJ2RhdGEtLWdyaWQtbmFtZScsIHRoaXMuZ3JpZEluc3RhbmNlLm5hbWUgKTtcclxuICAgIHRoaXMuZGlzcGxheS53cmFwcGVyLmFwcGVuZENoaWxkKCB0aGlzLmNhbnZhcyApO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5vZmZDYW52YXMgPSB0aGlzLmNhbnZhcy50cmFuc2ZlckNvbnRyb2xUb09mZnNjcmVlbigpO1xyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgIGNvbnNvbGUud2FybignWW91ciBCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY2FudmFzLnRyYW5zZmVyQ29udHJvbFRvT2Zmc2NyZWVuKCkuIFRoZXJlZm9yZSB0aGUgZ2FtZSBtaWdodCBsYWcgYSBiaXQnKTtcclxuICAgICAgdGhpcy5vZmZDYW52YXMgPSB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuICAgIHRoaXMuY3R4ID0gdGhpcy5vZmZDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZUNhbnZhcygpe1xyXG4gICAgdGhpcy5jYW52YXMucmVtb3ZlKCk7XHJcbiAgICB0aGlzLnByb2Nlc3NEaXNwbGF5U2V0dGluZ3MoKTtcclxuICAgIHRoaXMubmV3Q2FudmFzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBjbGFzc2Rlc2MgRGlzcGxheXMgcmVuZGVyIGFsbCBlbnRpdGllcyBvbiBkaXNwbGF5ZWQgZ3JpZHMuIFVzZSB0aGUgZ3JpZ2EgY29uZmlnIHRvIGNyZWF0ZSB0aGVtIGFuZCB1c2UgdGhlIEdyaWdhLmRpc3BsYXlHcmlkIGZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBncmlkLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpc3BsYXkge1xyXG4gIC8qKlxyXG4gICAqIEBoaWRlY29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciggY29uZmlnICl7XHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqL1xyXG4gICAgdGhpcy5uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAvKipcclxuICAgICAqIFdyYXBwZXIgZWxlbWVudCBvZiB0aGUgRGlzcGxheVxyXG4gICAgICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy53cmFwcGVySWQpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgV3JhcHBlcidzIHdpZHRoSGVpZ2h0UmF0aW9uXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKi9cclxuICAgIHRoaXMud2lkdGhIZWlnaHRSYXRpbyA9IGNvbmZpZy53aWR0aEhlaWdodFJhdGlvO1xyXG5cclxuICAgIHRoaXMucmVzaXplV3JhcHBlcigpO1xyXG4gICAgdGhpcy5zZXR1cFdyYXBwZXJFdmVudExpc3RlbmVycygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmxpbmtlZEdyaWRzID0ge307Ly9zZWUgbGlua0dyaWQgYW5kIEdyaWRMaW5rIGZvciBzdHJ1Y3R1cmVcclxuICAgIHRoaXMuZGlzcGxheURhdGEgPSBbXTtcclxuXHJcbiAgICB0aGlzLm1vdXNlWCA9IDA7XHJcbiAgICB0aGlzLm1vdXNlWSA9IDA7XHJcbiAgICB0aGlzLmdyaWRzSW5Ib3ZlciA9IFtdO1xyXG4gICAgdGhpcy5vbmdvaW5nVG91Y2hTdGFydHMgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vcmVzaXplXHJcbiAgcmVzaXplKCl7XHJcbiAgICB0aGlzLnJlc2l6ZVdyYXBwZXIoKTtcclxuICAgIGZvciAobGV0IGdyaWRMaW5rIG9mIE9iamVjdC52YWx1ZXMoIHRoaXMubGlua2VkR3JpZHMgKSkge1xyXG4gICAgICBncmlkTGluay5yZXNpemVDYW52YXMoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXNpemVXcmFwcGVyKCl7XHJcbiAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy53cmFwcGVyICk7XHJcbiAgICB0aGlzLndpZHRoID0gcGFyc2VGbG9hdCggY29tcHV0ZWRTdHlsZS53aWR0aC5zbGljZSggMCwtMiApICk7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGgvdGhpcy53aWR0aEhlaWdodFJhdGlvO1xyXG4gICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgXHJcbiAgICAgIGhlaWdodDoke3RoaXMuaGVpZ2h0fXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBgKTsvL2hpZGRlbiBvdmVyZmxvd1xyXG4gIH1cclxuXHJcbiAgc2V0dXBXcmFwcGVyRXZlbnRMaXN0ZW5lcnMoKXtcclxuICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMubW91c2VNb3ZlSGFuZGxlcihlKSApO1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgKGUpID0+IHRoaXMubW91c2VMZWF2ZUhhbmRsZXIoZSkgKTtcclxuICAgIHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4gdGhpcy5tb3VzZURvd25IYW5kbGVyKGUpICk7XHJcbiAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB0aGlzLm1vdXNlVXBIYW5kbGVyKGUpICk7XHJcblxyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4gdGhpcy50b3VjaFN0YXJ0SGFuZGxlcihlKSk7XHJcbiAgICB0aGlzLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCAoZSkgPT4gdGhpcy50b3VjaENhbmNlbEhhbmRsZXIoZSkpO1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChlKSA9PiB0aGlzLnRvdWNoTW92ZUhhbmRsZXIoZSkpO1xyXG4gICAgdGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKGUpID0+IHRoaXMudG91Y2hFbmRIYW5kbGVyKGUpKTtcclxuICB9XHJcblxyXG4gIGxpbmtHcmlkKCBncmlkLCBkaXNwbGF5U2V0dGluZ3MgKXtcclxuICAgIGNvbnN0IGdyaWRMaW5rID0gbmV3IEdyaWRMaW5rKCBncmlkLCBkaXNwbGF5U2V0dGluZ3MsIHRoaXMgKTtcclxuICAgIGdyaWRMaW5rLm5ld0NhbnZhcygpO1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZC5uYW1lIF0gPSBncmlkTGluaztcclxuICB9XHJcbiAgdW5saW5rR3JpZCggZ3JpZE5hbWUgKXtcclxuICAgIHRoaXMubGlua2VkR3JpZHNbIGdyaWROYW1lIF0uY2FudmFzLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdyaWRzSW5Ib3Zlci5pbmRleE9mKGdyaWROYW1lKTtcclxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5ncmlkc0luSG92ZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZSB0aGlzLmxpbmtlZEdyaWRzWyBncmlkTmFtZSBdO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlR3JpZERpc3BsYXlTZXR0aW5ncyggZ3JpZE5hbWUsIGRpc3BsYXlTZXR0aW5ncyApe1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS51cGRhdGVEaXNwbGF5U2V0dGluZ3MoIGRpc3BsYXlTZXR0aW5ncyApO1xyXG4gICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS5wcm9jZXNzRGlzcGxheVNldHRpbmdzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVEaXNwbGF5RGF0YSgpe1xyXG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IE9iamVjdC52YWx1ZXModGhpcy5saW5rZWRHcmlkcykubWFwKFxyXG4gICAgICBncmlkTGluayA9PiBncmlkTGluay5ncmlkSW5zdGFuY2UuZGlzcGxheURhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL2RyYXdpbmdcclxuICBjbGVhckNhbnZhcyggb2ZmQ2FudmFzLCBjdHggKXtcclxuICAgIGN0eC5jbGVhclJlY3QoIDAsMCwgb2ZmQ2FudmFzLndpZHRoLCBvZmZDYW52YXMuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cclxuICAgIHRoaXMudXBkYXRlRGlzcGxheURhdGEoKTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXlEYXRhLmZvckVhY2goIC8vQXJyYXkgb2YgR3JpZCBEaXNwbGF5IERhdGFcclxuICAgICAgZ3JpZERpc3BsYXlEYXRhID0+IHtcclxuICAgICAgICBjb25zdCBncmlkTGluayA9IHRoaXMubGlua2VkR3JpZHNbIGdyaWREaXNwbGF5RGF0YS5ncmlkTmFtZSBdO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDYW52YXMoIGdyaWRMaW5rLm9mZkNhbnZhcywgZ3JpZExpbmsuY3R4ICk7XHJcbiAgICAgICAgZ3JpZERpc3BsYXlEYXRhLmFsbExheWVyc0VudGl0eUluc3RhbmNlRGlzcGxheURhdGEuZm9yRWFjaCggLy9BcnJheSBvZiBhbGxMYXllcnNFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhXHJcbiAgICAgICAgICAoIGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YSwgbGF5ZXIgKSA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5mb3JFYWNoKCAvL2FycmF5IG9mIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGFcclxuICAgICAgICAgICAgICBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEuaW1nLFxyXG4gICAgICAgICAgICAgICAgICBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnBvcy5jICogZ3JpZExpbmsudGlsZVdpZHRoSW5QeCAtIGdyaWRMaW5rLnhTaGlmdCxcclxuICAgICAgICAgICAgICAgICAgZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS5wb3MuciAqIGdyaWRMaW5rLnRpbGVIZWlnaHRJblB4IC0gZ3JpZExpbmsueVNoaWZ0LFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoZ3JpZExpbmsudGlsZVdpZHRoSW5QeCAqIGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEud2lkdGgpLFxyXG4gICAgICAgICAgICAgICAgICBNYXRoLmNlaWwoZ3JpZExpbmsudGlsZUhlaWdodEluUHggKiBlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLmhlaWdodCksXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyggZW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YS50ZXh0cyApLmZvckVhY2goIHRleHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBncmlkTGluay5jdHguZm9udCA9IGAke3RleHQuc2l6ZSAqIGdyaWRMaW5rLnRpbGVIZWlnaHRJblB4fXB4ICR7dGV4dC5mb250RmFtaWx5fWA7XHJcbiAgICAgICAgICAgICAgICAgIGdyaWRMaW5rLmN0eC5maWxsU3R5bGUgPSB0ZXh0LmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBncmlkTGluay5jdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIChlbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhLnBvcy5jICsgdGV4dC5jT2Zmc2V0KSAqIGdyaWRMaW5rLnRpbGVXaWR0aEluUHggLSBncmlkTGluay54U2hpZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgKGVudGl0eUluc3RhbmNlRGlzcGxheURhdGEucG9zLnIgKyB0ZXh0LnJPZmZzZXQgKyB0ZXh0LnNpemUqMC43NSkgKiBncmlkTGluay50aWxlSGVpZ2h0SW5QeCAtIGdyaWRMaW5rLnlTaGlmdFxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9oYW5kbGVyXHJcbiAgbW91c2VMZWF2ZUhhbmRsZXIoIGUgKXtcclxuICAgIHRoaXMuZ3JpZHNJbkhvdmVyLmZvckVhY2goIGdyaWROYW1lID0+IHtcclxuICAgICAgdGhpcy5saW5rZWRHcmlkc1sgZ3JpZE5hbWUgXS5ncmlkSW5zdGFuY2UubW91c2VMZWF2ZUhhbmRsZXIoIHRoaXMubmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5ncmlkc0luSG92ZXIgPSBbXTtcclxuICB9XHJcblxyXG4gIG1vdXNlTW92ZUhhbmRsZXIoIGUgKXtcclxuICAgIC8vdXBkYXRlIG1vdXNlIHBvc1xyXG4gICAgdGhpcy5tb3VzZVggPSBlLm9mZnNldFg7XHJcbiAgICB0aGlzLm1vdXNlWSA9IGUub2Zmc2V0WTtcclxuICAgIC8vdXBkYXRlIEdyaWRzXHJcbiAgICBPYmplY3QudmFsdWVzKHRoaXMubGlua2VkR3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICBjb25zdCBncmlkTW91c2VYID0gdGhpcy5tb3VzZVggLSBncmlkLmxlZnRJblB4ICsgZ3JpZC54U2hpZnQ7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVkgPSB0aGlzLm1vdXNlWSAtIGdyaWQudG9wSW5QeCArIGdyaWQueVNoaWZ0O1xyXG4gICAgICBpZiAoZ3JpZE1vdXNlWCA+PSBncmlkLnhTaGlmdCAmJiBncmlkTW91c2VYIDwgZ3JpZC54U2hpZnQgKyBncmlkLndpZHRoSW5QeFxyXG4gICAgICAgJiYgZ3JpZE1vdXNlWSA+PSBncmlkLnlTaGlmdCAmJiBncmlkTW91c2VZIDwgZ3JpZC55U2hpZnQgKyBncmlkLmhlaWdodEluUHgpIHtcclxuICAgICAgICBpZiAoZ3JpZC5ncmlkSW5zdGFuY2UubW91c2UuZGlzcGxheU5hbWUgIT09IHRoaXMubmFtZSkge1xyXG4gICAgICAgICAgdGhpcy5ncmlkc0luSG92ZXIucHVzaCggZ3JpZC5ncmlkSW5zdGFuY2UubmFtZSApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBncmlkTW91c2VDID0gZ3JpZE1vdXNlWC9ncmlkLnRpbGVXaWR0aEluUHg7XHJcbiAgICAgICAgY29uc3QgZ3JpZE1vdXNlUiA9IGdyaWRNb3VzZVkvZ3JpZC50aWxlSGVpZ2h0SW5QeDtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZU1vdmVIYW5kbGVyKCB0aGlzLm5hbWUsIGdyaWRNb3VzZUMsZ3JpZE1vdXNlUiwgZS5idXR0b25zLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChncmlkLmdyaWRJbnN0YW5jZS5tb3VzZS5kaXNwbGF5TmFtZSA9PT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgZ3JpZC5ncmlkSW5zdGFuY2UubW91c2VMZWF2ZUhhbmRsZXIoIHRoaXMubmFtZSApO1xyXG4gICAgICAgIHRoaXMuZ3JpZHNJbkhvdmVyLnNwbGljZSggdGhpcy5ncmlkc0luSG92ZXIuaW5kZXhPZiggZ3JpZC5ncmlkSW5zdGFuY2UubmFtZSApLCAxICk7XHJcbiAgICAgIH1cclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGUgKXtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5saW5rZWRHcmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVggPSB0aGlzLm1vdXNlWCAtIGdyaWQubGVmdEluUHg7XHJcbiAgICAgIGNvbnN0IGdyaWRNb3VzZVkgPSB0aGlzLm1vdXNlWSAtIGdyaWQudG9wSW5QeDtcclxuICAgICAgaWYgKGdyaWRNb3VzZVggPj0gMCAmJiBncmlkTW91c2VYIDwgZ3JpZC53aWR0aEluUHhcclxuICAgICAgICYmIGdyaWRNb3VzZVkgPj0gMCAmJiBncmlkTW91c2VZIDwgZ3JpZC5oZWlnaHRJblB4KSB7XHJcbiAgICAgICAgZ3JpZC5ncmlkSW5zdGFuY2UubW91c2VEb3duSGFuZGxlciggdGhpcy5uYW1lLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuICBtb3VzZVVwSGFuZGxlciggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmxpbmtlZEdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWCA9IHRoaXMubW91c2VYIC0gZ3JpZC5sZWZ0SW5QeDtcclxuICAgICAgY29uc3QgZ3JpZE1vdXNlWSA9IHRoaXMubW91c2VZIC0gZ3JpZC50b3BJblB4O1xyXG4gICAgICBpZiAoZ3JpZE1vdXNlWCA+PSAwICYmIGdyaWRNb3VzZVggPCBncmlkLndpZHRoSW5QeFxyXG4gICAgICAgJiYgZ3JpZE1vdXNlWSA+PSAwICYmIGdyaWRNb3VzZVkgPCBncmlkLmhlaWdodEluUHgpIHtcclxuICAgICAgICBncmlkLmdyaWRJbnN0YW5jZS5tb3VzZVVwSGFuZGxlciggdGhpcy5uYW1lLCBlLmN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTdGFydEhhbmRsZXIoIGUgKXtcclxuICAgIGZ1bmN0aW9uIGNvcHlUb3VjaCh7IGlkZW50aWZpZXIsIHBhZ2VYLCBwYWdlWSB9KSB7XHJcbiAgICAgIHJldHVybiB7IGlkZW50aWZpZXIsIHBhZ2VYLCBwYWdlWSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LnZhbHVlcyhlLmNoYW5nZWRUb3VjaGVzKS5mb3JFYWNoKCB0b3VjaCA9PiB7XHJcbiAgICAgIHRoaXMub25nb2luZ1RvdWNoU3RhcnRzLnB1c2goIGNvcHlUb3VjaCh0b3VjaCkgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIHRvdWNoRW5kSGFuZGxlciggZSApe1xyXG4gICAgT2JqZWN0LnZhbHVlcyhlLmNoYW5nZWRUb3VjaGVzKS5mb3JFYWNoKCB0b3VjaCA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5vbmdvaW5nVG91Y2hTdGFydHMuZmluZEluZGV4KCBzVCA9PiBzVC5pZGVudGlmaWVyID09PSB0b3VjaC5pZGVudGlmaWVyICk7XHJcbiAgICAgIGNvbnN0IHNhdmVkVG91Y2hTdGFydCA9IHRoaXMub25nb2luZ1RvdWNoU3RhcnRzW2luZGV4XTtcclxuICAgICAgY29uc3QgbW92ZW1lbnRYID0gdG91Y2gucGFnZVggLSBzYXZlZFRvdWNoU3RhcnQucGFnZVg7XHJcbiAgICAgIGNvbnN0IG1vdmVtZW50WSA9IHRvdWNoLnBhZ2VZIC0gc2F2ZWRUb3VjaFN0YXJ0LnBhZ2VZO1xyXG4gICAgICBsZXQgZGlyZWN0aW9uID0gbnVsbDtcclxuICAgICAgaWYgKE1hdGguYWJzKG1vdmVtZW50WCkgPiBNYXRoLmFicyhtb3ZlbWVudFkpKSB7XHJcbiAgICAgICAgaWYgKG1vdmVtZW50WCA+IDApIHsgZGlyZWN0aW9uID0gJ3JpZ2h0JyB9XHJcbiAgICAgICAgZWxzZSB7IGRpcmVjdGlvbiA9ICdsZWZ0JyB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChtb3ZlbWVudFkgPiAwKSB7IGRpcmVjdGlvbiA9ICdkb3duJyB9XHJcbiAgICAgICAgZWxzZSB7IGRpcmVjdGlvbiA9ICd1cCcgfTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uZ29pbmdUb3VjaFN0YXJ0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBPYmplY3QudmFsdWVzKHRoaXMubGlua2VkR3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICAgIGdyaWQuZ3JpZEluc3RhbmNlLnRvdWNoU3dpcGVIYW5kbGVyKCBkaXJlY3Rpb24sIG1vdmVtZW50WCwgbW92ZW1lbnRZICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIHRvdWNoQ2FuY2VsSGFuZGxlciggZSApe1xyXG4gICAgY29uc29sZS5sb2coJ3RvdWNoY2FuY2VsJyk7XHJcbiAgfVxyXG5cclxuICB0b3VjaE1vdmVIYW5kbGVyKCBlICl7XHJcbiAgICAvLyBjb25zb2xlLmxvZygndG91Y2htb3ZlJyk7XHJcbiAgfVxyXG59IiwiY29uc3QgSm9pID0gcmVxdWlyZSgnQGhhcGkvam9pJyk7XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBjbGFzc2Rlc2MgUmVwcmVzZW50cyBhIFRleHQuIFRvIGNyZWF0ZSBhIFRleHQgdXNlIHRoZSBFbnRpdHkuYWRkVGV4dCBmdW5jdGlvblxyXG4gKi9cclxuY2xhc3MgVGV4dCB7XHJcbiAgLyoqXHJcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCB0ZXh0U2V0dGluZ3MgKXtcclxuICAgIHRoaXMuaWQgPSB0ZXh0U2V0dGluZ3MuaWQ7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0U2V0dGluZ3MudGV4dCB8fCBcIlRleHRcIjtcclxuICAgIHRoaXMuc2l6ZSA9IHRleHRTZXR0aW5ncy5zaXplIHx8IDE7XHJcbiAgICB0aGlzLmNvbG9yID0gdGV4dFNldHRpbmdzLmNvbG9yIHx8IFwiYmxhY2tcIjtcclxuICAgIHRoaXMuZm9udEZhbWlseSA9IHRleHRTZXR0aW5ncy5mb250RmFtaWx5IHx8IFwiYXJpYWxcIjtcclxuICAgIHRoaXMuY09mZnNldCA9IHRleHRTZXR0aW5ncy5jT2Zmc2V0IHx8IDA7XHJcbiAgICB0aGlzLnJPZmZzZXQgPSB0ZXh0U2V0dGluZ3Muck9mZnNldCB8fCAwO1xyXG4gIH1cclxufVxyXG4gLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gVGV4dH50ZXh0U2V0dGluZ3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBJZCBvZiB0aGUgdGV4dFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdGV4dF0gLSBUaGUgYWN0dWFsIHRleHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW3NpemVdIC0gSGVpZ2h0IG9mIHRoZSB0ZXh0IGluIHJvd3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gW2NvbG9yXSAtIENvbG9yIG9mIHRoZSB0ZXh0IChhbnkgc3RhZGFyZCBjb2xvciBmb3JtYXQgc2hvdWxkIHdvcmspXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IFtmb250RmFtaWx5XSAtIEZvbnRGYW1pbHkgb2YgdGhlIHRleHRcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW2NPZmZzZXRdIC0gY09mZnNldCBvZiB0aGUgdGV4dFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbck9mZnNldF0gLSByT2Zmc2V0IG9mIHRoZSB0ZXh0XHJcbiAgICovXHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzYyBCYXNlIGNsYXNzIGZvciBhbGwgRW50aXRpZXMuIEN1c3RvbUVudGl0eUNsYXNzZXMgKENoaWxkcyBvZiBFbnRpdHkpIGNhbiBiZSBwYXNzZWQgaW4gd2l0aCB0aGUgZ3JpZ2FDb25maWcgd2hlbiBpbml0aWFsaXppbmcgR3JpZ2FcclxuICovXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHkge1xyXG4gIC8vaW1hZ2VzXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBEZWZpbmVzIG5hbWUgYW5kIHNvdXJjZSBvZiBhbGwgSW1hZ2VzIHRoZSBFbnRpdHkgY2FuIHVzZSBhcyBjb3N0dW1lLiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gYnkgQ3VzdG9tRW50aXR5Q2xhc3Nlc1xyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0IGltZ1NvdXJjZXMoKXtcclxuICAgIHJldHVybiB7IGRlZmF1bHQ6ICcnIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZEltYWdlcyggbG9hZGVkQ2FsbGJhY2sgKSB7XHJcbiAgICAvL1widGhpc1wiIHJlZmVycyB0byB0aGUgc3BlY2lmaWMgZW50aXR5IGNsYXNzIGluaGVyaXRpbmcgZnJvbSBcIkVudGl0eVwiXHJcbiAgICB0aGlzLmltYWdlcyA9IHt9O1xyXG4gICAgZm9yIChsZXQgW2ltYWdlTmFtZSwgc3JjXSBvZiBPYmplY3QuZW50cmllcyggdGhpcy5pbWdTb3VyY2VzICkpIHtcclxuICAgICAgY29uc3QgaW1nID0gdGhpcy5pbWFnZXNbaW1hZ2VOYW1lXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBpbWcub25sb2FkID0gbG9hZGVkQ2FsbGJhY2s7XHJcbiAgICAgIGltZy5vbmVycm9yID0gbG9hZGVkQ2FsbGJhY2s7XHJcbiAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL3BhcmFtc1NjaGVtYVxyXG4gIHN0YXRpYyBnZXQgcGFyYW1zU2NoZW1hKCl7XHJcbiAgICByZXR1cm4gSm9pLm9iamVjdCgge1xyXG4gICAgICB3aWR0aDogSm9pLm51bWJlcigpLmRlZmF1bHQoMSksXHJcbiAgICAgIGhlaWdodDogSm9pLm51bWJlcigpLmRlZmF1bHQoMSksXHJcbiAgICAgIGNPZmZzZXQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICByT2Zmc2V0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgbGF5ZXI6IEpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgcmVuZGVyU3RhcnRTdWJzY3JpcHRpb246IEpvaS5ib29sKCkuZGVmYXVsdChmYWxzZSksXHJcbiAgICAgIHRvdWNoU3RhcnRTdWJzY3JpcHRpb246IEpvaS5ib29sKCkuZGVmYXVsdChmYWxzZSksXHJcbiAgICAgIHNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uOiBKb2kuYm9vbCgpLmRlZmF1bHQoZmFsc2UpLFxyXG4gICAgICBrZXlEb3duU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAga2V5VXBTdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgICBtb3VzZURvd25TdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgICBtb3VzZVVwU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VNb3ZlU3Vic2NyaXB0aW9uczogSm9pLmFycmF5KCkuaXRlbXMoSm9pLnN0cmluZygpKS5kZWZhdWx0KFtdKSxcclxuICAgICAgbW91c2VFbnRlclN1YnNjcmlwdGlvbnM6IEpvaS5hcnJheSgpLml0ZW1zKEpvaS5zdHJpbmcoKSkuZGVmYXVsdChbXSksXHJcbiAgICAgIG1vdXNlTGVhdmVTdWJzY3JpcHRpb25zOiBKb2kuYXJyYXkoKS5pdGVtcyhKb2kuc3RyaW5nKCkpLmRlZmF1bHQoW10pLFxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdHMgRW50aXR5LiBTaG91bGQgb25seSBiZSBjYWxsZWQgd2l0aCBzdXBlcigpIGZyb20gYSBjaGlsZCBjbGFzc1xyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBFbnRpdHlQYXJhbXMuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMud2lkdGggPSAxXSAtIERpc3BsYXllZCB3aWR0aCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5oZWlnaHQgPSAxXSAtIERpc3BsYXllZCBoZWlnaHQgb2YgdGhlIGVudGl0eSBpbiByb3dzLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbcGFyYW1zLmNPZmZzZXQgPSAwXSAtIERpc3BsYXllZCBjT2Zmc2V0IG9mIHRoZSBlbnRpdHkgaW4gY29sdW1ucy5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5yT2Zmc2V0ID0gMF0gLSBEaXNwbGF5ZWQgck9mZnNldCBvZiB0aGUgZW50aXR5IGluIHJvd3MuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMubGF5ZXIgPSAwXSAtIExheWVyIGF0IHdoaWNoIHRoZSB0aGUgZW50aXR5IGlzIGRpc3BsYXllZC5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24gPSBmYWxzZV0gLSBUcnVlIHRvIHN1YnNjcmliZSB0aGUgZW50aXR5IHRvIHRoZSByZW5kZXJTdGFydCBFdmVudFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtcy50b3VjaFN3aXBlU3Vic2NyaXB0aW9uID0gZmFsc2VdIC0gVHJ1ZSB0byBzdWJzY3JpYmUgdGhlIGVudGl0eSB0byB0aGUgdG91Y2hTdGFydCBFdmVudFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IGZhbHNlXSAtIFRydWUgdG8gc3Vic2NyaWJlIHRoZSBlbnRpdHkgdG8gdGhlIHNjZW5lTG9hZGVkIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5rZXlEb3duU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGtleXMgZm9yIHdoaWNoIHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUga2V5RG93biBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMua2V5VXBTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2Yga2V5cyBmb3Igd2hpY2ggdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBrZXlVcCBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VEb3duU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlRG93biBFdmVudFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtwYXJhbXMubW91c2VVcFN1YnNjcmlwdGlvbnMgPSBbXV0gLSBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBzdWJzY3JpYmVzIHRvIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUgbW91c2VNb3ZlIEV2ZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW3BhcmFtcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucyA9IFtdXSAtIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IHN1YnNjcmliZXMgdG8gdGhlIG1vdXNlRW50ZXIgRXZlbnRcclxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbcGFyYW1zLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zID0gW11dIC0gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgc3Vic2NyaWJlcyB0byB0aGUgbW91c2VMZWF2ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIC0gVGhlIE9iamVjdCBwYXNzZWQgaW4gdG8gYWxsIEN1c3RvbUVudGl0eUNsYXNzZXMgYXMgc2Vjb25kIGFyZ3VtZW50IHdoZW4gY29uc3RydWN0ZWQgYnkgdGhlIEdyaWdhIEZhbWV3b3JrXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoIHBhcmFtcywgYXJncyApe1xyXG4gICAgLy92YWxpZGF0ZSBQYXJhbXNcclxuICAgIGxldCB2YWxpZFBhcmFtcztcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhbGlkUGFyYW1zID0gSm9pLmF0dGVtcHQoIHBhcmFtcywgRW50aXR5LnBhcmFtc1NjaGVtYSApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgZS5uYW1lID0gJ0dyaWdhRW50aXR5UGFyYW1zRXJyb3InO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGAke2UubmFtZX06ICR7ZS5tZXNzYWdlfWApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXQgUHJvcGVydGllc1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGVudGl0aWVzIGMgcG9zaXRpb25cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jID0gYXJncy5jO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVGhlIGVudGl0aWVzIHIgcG9zaXRpb25cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5yID0gYXJncy5yO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVHJ1ZSwgaWYgZW50aXR5IGlzIGRldGFjaGVkXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLmRldGFjaGVkID0gYXJncy5kZXRhY2hlZDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIERpc3BsYXllZCB3aWR0aCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy53aWR0aCA9IHZhbGlkUGFyYW1zLndpZHRoO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gRGlzcGxheWVkIGhlaWdodCBvZiB0aGUgZW50aXR5IGluIHJvd3NcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5oZWlnaHQgPSB2YWxpZFBhcmFtcy5oZWlnaHQ7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBEaXNwbGF5ZWQgY09mZnNldCBvZiB0aGUgZW50aXR5IGluIGNvbHVtbnNcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jT2Zmc2V0ID0gdmFsaWRQYXJhbXMuY09mZnNldDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIERpc3BsYXllZCByT2Zmc2V0IG9mIHRoZSBlbnRpdHkgaW4gcm93c1xyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLnJPZmZzZXQgPSB2YWxpZFBhcmFtcy5yT2Zmc2V0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gTGF5ZXIgYXQgd2hpY2ggdGhlIHRoZSBlbnRpdHkgaXMgZGlzcGxheWVkLlxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmxheWVyID0gdmFsaWRQYXJhbXMubGF5ZXI7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBUcnVlIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgcmVuZGVyU3RhcnQgRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24gPSB2YWxpZFBhcmFtcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbjtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRydWUgaWYgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSB0b3VjaFN0YXJ0IEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLnRvdWNoU3RhcnRTdWJzY3JpcHRpb24gPSB2YWxpZFBhcmFtcy50b3VjaFN0YXJ0U3Vic2NyaXB0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gVHJ1ZSBpZiB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIHNjZW5lTG9hZGVkIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICB0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uID0gdmFsaWRQYXJhbXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb247XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBrZXlzIGZvciB3aGljaCB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIGtleURvd24gRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zID0gdmFsaWRQYXJhbXMua2V5RG93blN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBrZXlzIGZvciB3aGljaCB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIGtleVVwIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5rZXlVcFN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZURvd24gRXZlbnRcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5tb3VzZURvd25TdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VVcCBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5tb3VzZVVwU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIEFycmF5IG9mIGRpc3BsYXlOYW1lcyBmb3Igd2hpY2ggZGlzcGxheSB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlTW92ZSBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnM7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBBcnJheSBvZiBkaXNwbGF5TmFtZXMgZm9yIHdoaWNoIGRpc3BsYXkgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZUVudGVyIEV2ZW50XHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtzdHJpbmdbXX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucyA9IHZhbGlkUGFyYW1zLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQXJyYXkgb2YgZGlzcGxheU5hbWVzIGZvciB3aGljaCBkaXNwbGF5IHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VMZWF2ZSBFdmVudFxyXG4gICAgICogQHJlYWRvbmx5XHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nW119XHJcbiAgICAgKi9cclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMgPSB2YWxpZFBhcmFtcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucztcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoZSBncmlkIHRoZSBlbnRpdHkgaXMgaW5cclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge0dyaWR9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ3JpZCA9IGFyZ3MuZ3JpZDtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoZSBncmlnYSB0aGUgZW50aXR5IGlzIGluXHJcbiAgICAgKiBAcmVhZG9ubHlcclxuICAgICAqIEB0eXBlIHtHcmlnYX1cclxuICAgICAqL1xyXG4gICAgdGhpcy5ncmlnYSA9IHRoaXMuZ3JpZC5ncmlnYTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBOYW1lIG9mIHRoZSBlbnRpdGllJ3MgY3VycmVudCBpbWFnZS4gU2hvdWxkIGJlIHNldCBieSBhbGwgZW50aXRpZXNcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuY3VycmVudEltYWdlID0gJ2RlZmF1bHQnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzY3JpcHRpb24gQ29udGFpbnMgYWxsIHRleHRzIG9mIHRoZSBlbnRpdHkuIFRoZSB0ZXh0J3MgaWQgaXMgdXNlZCBhcyBrZXlcclxuICAgICAqIEByZWFkb25seVxyXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIFRleHQ+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLnRleHRzID0ge307XHJcblxyXG4gICAgLy9pbml0aWFsaXNlIEV2ZW50U3Vic2NyaXB0aW9uc1xyXG4gICAgaWYgKHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9SZW5kZXJTdGFydCggdGhpcyApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG91Y2hTdGFydFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1RvdWNoU3dpcGUoIHRoaXMgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvU2NlbmVMb2FkZWQoIHRoaXMgKTtcclxuICAgIH1cclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlEb3duKCB0aGlzLCBrZXkgKTtcclxuICAgIH0gKTtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLmZvckVhY2goIGtleSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvS2V5VXAoIHRoaXMsIGtleSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZURvd24oIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZVVwKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZU1vdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zLmZvckVhY2goIGRpc3BsYXlOYW1lID0+IHtcclxuICAgICAgdGhpcy5ncmlkLnN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZUVudGVyKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gICAgfSApO1xyXG4gICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBkaXNwbGF5TmFtZSA9PiB7XHJcbiAgICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VMZWF2ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8vY2FsbGVkIGF0IGV2ZXJ5IFJlbmRlclxyXG4gIGdldCBkaXNwbGF5RGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGltZzogdGhpcy5jb25zdHJ1Y3Rvci5pbWFnZXNbIHRoaXMuY3VycmVudEltYWdlIF0sXHJcbiAgICAgIHBvcyA6IHRoaXMuY29tcHV0ZWRQb3MsXHJcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICB0ZXh0czogdGhpcy50ZXh0cyxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBjb21wdXRlZFBvcygpIHtcclxuICAgIGNvbnN0IHBvcyA9IHt9O1xyXG4gICAgcG9zLmMgPSB0aGlzLmMgKyB0aGlzLmNPZmZzZXQ7XHJcbiAgICBwb3MuciA9IHRoaXMuciArIHRoaXMuck9mZnNldDtcclxuICAgIHJldHVybiBwb3M7XHJcbiAgfVxyXG5cclxuICAvL2Z1bmN0aW9ucyB0byBvdmVycmlkZVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdldGhlciB0aGUgRW50aXR5IHNob3VsZCBiZSBpbmNsdWRlZCBpbiB0aGUgc2NlbmVEYXRhIGF0IEdyaWQuZ2V0Q3VycmVudFNjZW5lRGF0YVxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICovXHJcbiAgaW5jbHVkZUluU2NlbmVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBwYXJhbXMgb2JqZWN0IHVzZWQgYnkgZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhLiBTaG91bGQgYmUgb3ZlcndyaXR0ZW4gaWYgeW91IHdhbnQgdG8gc2F2ZSBwYXJhbXMgYXQgZ3JpZC5nZXRDdXJyZW50U2NlbmVEYXRhXHJcbiAgICogQHJldHVybnMge09iamVjdDxzdHJpbmcsICo+fVxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRQYXJhbXMoKSB7IC8vdXNlZCB0byBnZXRDdXJyZW50U2NlbmVEYXRhXHJcbiAgICByZXR1cm4ge307IFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIEdhbWUgTG9vcC4gR2V0J3MgY2FsbGVkIGJlZm9yZSBldmVyeSByZW5kZXIgaWYgdGhlIGVudGl0eSBpcyBzdWJzY3JpYmVkIHRvIHRoZSByZW5kZXJTdGFydCBFdmVudC4gU2hvdWxkIGJlIG92ZXJ3cml0dGVuIHRvIGRvIGR5bmFtaWMgbW90aW9ucy9hbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVQYXNzZWQgLSBUaW1lIHBhc3NlZCBzaW5jZSBsYXN0IHJlbmRlclxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIHJlbmRlclN0YXJ0SGFuZGxlciggdGltZVBhc3NlZCApe1xyXG4gICAgY29uc29sZS5sb2coICdwZXJmb3JtYW5jZS5ub3coKTogJyArIHBlcmZvcm1hbmNlLm5vdygpICk7XHJcbiAgICBjb25zb2xlLmxvZyggJ3RpbWVQYXNzZWQ6ICcgKyB0aW1lUGFzc2VkICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGNhbGxlZCBhdCBldmVyeSB0b3VjaEVuZCBvZiBhIFRvdWNoIGV2ZW50IG9jY3VyaW5nIG9uIG9uZSBvZiB0aGUgZGlzcGxheXMgdGhlIGdyaWQgaXMgZGlzcGxheWVkIG9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvbiAtIEVpdGhlciByaWdodCwgbGVmdCwgZG93biBvciB1cFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIHRvdWNoU3dpcGVIYW5kbGVyKCBkaXJlY3Rpb24sIG1vdmVtZW50WCwgbW92ZW1lbnRZICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlyZWN0aW9uICk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGFsbCBlbnRpdGllcyBhcmUgbG9hZGVkIG9udG8gdGhpcy5ncmlkIGlmIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2NlbmVMb2FkZWQgRXZlbnQuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGluaXRhbCBjb2RlIHdoaWNoIHJlcXVpcmVzIHRoZSBwcmVzZW5jZSBvZiBhbGwgZW50aXRpZXMuXHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgc2NlbmVMb2FkZWRIYW5kbGVyKCl7XHJcbiAgICBjb25zb2xlLmxvZyggdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgJyBpcyBzdWJzY3JpYmVkIHRvIHRoZSBzY2VuZUxvYWRlZEV2ZW50IGJ1dCBkb2VzblxcJ3QgdXNlIGl0JyApO1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiBhIGtleSBpcyBwcmVzc2VkIGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUga2V5RG93biBFdmVudCBmb3IgdGhhdCBrZXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBnaXZlIGNvbnRyb2xscyB0byB0aGUgcGxheWVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgcHJvcGVydHkgb2YgdGhlIGphdmFzY3JpcHQga2V5RG93biBFdmVudFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIGtleURvd25IYW5kbGVyKCBrZXkgKXtcclxuICAgIGNvbnNvbGUubG9nKCBrZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gYSBrZXkgaXMgcmVsZWFzZWQgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBrZXlVcCBFdmVudCBmb3IgdGhhdCBrZXkuIENhbiBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGgga2V5RG93bkhhbmRsZXIgdG8gdHJlYXQga2V5cyBhcyBidXR0b25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIFRoZSBrZXkgcHJvcGVydHkgb2YgdGhlIGphdmFzY3JpcHQga2V5VXAgRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBrZXlVcEhhbmRsZXIoIGtleSApe1xyXG4gICAgY29uc29sZS5sb2coIGtleSApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gYSBjbGljayBvY2N1cnMgb24gYSBkaXNwbGF5IGlmIHRoZSBlbnRpdHkgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VEb3duIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGNvZGUgb24gY2xpY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5IHRoZSBtb3VzZURvd24gRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZURvd24gRXZlbnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VSIC0gUi1wb3NpdGlvbiBvZiB0aGUgbW91c2VEb3duIEV2ZW50XHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VEb3duSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEgY2xpY2sgZW5kcyBvbiBhIGRpc3BsYXkgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZVVwIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFNob3VsZCBiZSBvdmVyd3JpdHRlbiB0byBleGVjdXRlIGNvZGUgb24gY2xpY2stcmVsZWFzZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlVXAgRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZVVwIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlVXAgRXZlbnRcclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBtb3VzZVVwSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBjdHJsS2V5ICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCdzIGNhbGxlZCB3aGVuIGEgbW91c2VNb3ZlIEV2ZW50IG9jY3VycyBvbiBhIGRpc3BsYXkgaWYgdGhlIGVudGl0eSBzdWJzY3JpYmVkIHRvIHRoZSBtb3VzZU1vdmUgRXZlbnQgZm9yIHRoYXQgZGlzcGxheS4gQ2FuIGJlIHVzZWQgZm9yIGRyYWctYW5kLWRyb3AgaW4gY29tYmluYXRpb24gd2l0aCBtb3VzZURvd24gYW5kIG1vdXNlVXAgRXZlbnRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheSB0aGUgbW91c2VNb3ZlIEV2ZW50IG9jY3VyZWQgb25cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VDIC0gQy1wb3NpdGlvbiBvZiB0aGUgbW91c2VNb3ZlIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlTW92ZSBFdmVudFxyXG4gICAqIEBldmVudFxyXG4gICAqL1xyXG4gIG1vdXNlTW92ZUhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiApe1xyXG4gICAgY29uc29sZS5sb2coIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBHZXQncyBjYWxsZWQgd2hlbiB0aGUgbW91c2UgZW50ZXJzIHRoZSB0aWxlIHRoZSBlbnRpdHkgaXMgaW4gYW5kIHRoZSBlbnRpdHkgaXMgc3Vic2NyaWJlZCB0byB0aGUgbW91c2VNb3ZlIEV2ZW50IGZvciB0aGF0IGRpc3BsYXkuIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdGhlIG1vdXNlRW50ZXIgRXZlbnQgb2NjdXJlZCBvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3VzZUMgLSBDLXBvc2l0aW9uIG9mIHRoZSBtb3VzZUVudGVyIEV2ZW50XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlUiAtIFItcG9zaXRpb24gb2YgdGhlIG1vdXNlRW50ZXIgRXZlbnRcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1vdXNlUHJlc3NlZCAtIElmIHRoZSBtb3VzZSBpcyBjdXJyZW50bHkgcHJlc3NlZCBkb3duXHJcbiAgICogQGV2ZW50XHJcbiAgICovXHJcbiAgbW91c2VFbnRlckhhbmRsZXIoIGRpc3BsYXlOYW1lLCBtb3VzZUMsIG1vdXNlUiwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zb2xlLmxvZyggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR2V0J3MgY2FsbGVkIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgdGlsZSB0aGUgZW50aXR5IGlzIGluIGFuZCB0aGUgZW50aXR5IGlzIHN1YnNjcmliZWQgdG8gdGhlIG1vdXNlTGVhdmUgRXZlbnQgZm9yIHRoYXQgZGlzcGxheS4gXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheSB0aGUgbW91c2VMZWF2ZSBFdmVudCBvY2N1cmVkIG9uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1vdXNlQyAtIEMtcG9zaXRpb24gb2YgdGhlIG1vdXNlTGVhdmUgRXZlbnRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbW91c2VSIC0gUi1wb3NpdGlvbiBvZiB0aGUgbW91c2VMZWF2ZSBFdmVudFxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbW91c2VQcmVzc2VkIC0gSWYgdGhlIG1vdXNlIGlzIGN1cnJlbnRseSBwcmVzc2VkIGRvd25cclxuICAgKiBAZXZlbnRcclxuICAgKi9cclxuICBtb3VzZUxlYXZlSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQywgbW91c2VSLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKXtcclxuICAgIGNvbnNvbGUubG9nKCBkaXNwbGF5TmFtZSwgbW91c2VDLCBtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApO1xyXG4gIH1cclxuXHJcbiAgLy9mdW5jdGlvbnMgdG8gdXNlXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgbGF5ZXIgb2YgdGhlIGVudGl0eVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdMYXllciAtIE5ldyBsYXllciB0aGUgZW50aXR5IHNob3VsZCBiZSBkaXNwbGF5ZWQgb25cclxuICAgKi9cclxuICBjaGFuZ2VMYXllciggbmV3TGF5ZXIgKXtcclxuICAgIHRoaXMuZ3JpZC5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21MYXllckRhdGEoIHRoaXMgKTtcclxuICAgIHRoaXMubGF5ZXIgPSBuZXdMYXllcjtcclxuICAgIHRoaXMuZ3JpZC5hZGRFbnRpdHlJbnN0YW5jZVRvTGF5ZXJEYXRhKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSBkaXNwbGF5U2V0dGluZ3Mgb2YgdGhpcy5ncmlkIG9uIGEgZGlzcGxheS4gU2V0dGluZ3MgeW91IGRvbid0IHNwZWNpZnkgc3RheSB0aGUgc2FtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXNwbGF5TmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXkgdG8gY2hhbmdlIHRoZSBncmlkRGlzcGxheVNldHRpbmdzXHJcbiAgICogQHBhcmFtIHtkaXNwbGF5U2V0dGluZ3N9IGRpc3BsYXlTZXR0aW5ncyAtIE9iamVjdCBjb250YWluaW5nIGFsbCBkaXNwbGF5U2V0dGluZ3MgeW91IHdhbid0IHRvIGNoYW5nZVxyXG4gICAqL1xyXG4gIGNoYW5nZUdyaWREaXNwbGF5U2V0dGluZ3MoIGRpc3BsYXlOYW1lLCBkaXNwbGF5U2V0dGluZ3MgKXtcclxuICAgIHRoaXMuZ3JpZC5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXS5jaGFuZ2VHcmlkRGlzcGxheVNldHRpbmdzKCB0aGlzLmdyaWQubmFtZSwgZGlzcGxheVNldHRpbmdzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBlbnRpdGllcyBjT2Zmc2V0IHByb3BlcnR5XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNPZmZzZXQgXHJcbiAgICovXHJcbiAgc2V0Q09mZnNldCggY09mZnNldCApe1xyXG4gICAgdGhpcy5jT2Zmc2V0ID0gY09mZnNldDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgck9mZnNldCBwcm9wZXJ0eVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByT2Zmc2V0IFxyXG4gICAqL1xyXG4gIHNldFJPZmZzZXQoIHJPZmZzZXQgKXtcclxuICAgIHRoaXMuck9mZnNldCA9IHJPZmZzZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBlbnRpdGllcyBoZWlnaHQgcHJvcGVydHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IFxyXG4gICAqL1xyXG4gIHNldEhlaWdodCggaGVpZ2h0ICl7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgZW50aXRpZXMgd2lkdGggcHJvcGVydHlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggXHJcbiAgICovXHJcbiAgc2V0V2lkdGgoIHdpZHRoICl7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIHRoZSBlbnRpdHlcclxuICAgKi9cclxuICBkZWxldGUoKXtcclxuICAgIHRoaXMuZ3JpZC5kZWxldGVFbnRpdHlJbnN0YW5jZSggdGhpcyApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXR0YWNoZXMgdGhlIGRldGFjaGVkIGVudGl0eSB0byB0aGUgZ3JpZCBhdCAoYywgcilcclxuICAgKiBAcGFyYW0ge251bWJlcn0gYyAtIENvbHVtblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByIC0gUm93XHJcbiAgICovXHJcbiAgYXR0YWNoKCBjLCByICl7XHJcbiAgICBpZiAoIXRoaXMuZGV0YWNoZWQpeyByZXR1cm4gY29uc29sZS53YXJuKCdjYW5cXCd0IGF0dGFjaCBhbiBhbHJlYWR5IGF0dGFjaGVkIEVudGl0eScpIH07XHJcblxyXG4gICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jID0gTWF0aC5yb3VuZCggYyApO1xyXG4gICAgdGhpcy5yID0gTWF0aC5yb3VuZCggciApO1xyXG4gICAgdGhpcy5ncmlkLmF0dGFjaEVudGl0eUluc3RhbmNlKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRhY2hlcyB0aGUgYXR0YWNoZWQgZW50aXR5LiBUaGUgcG9zaXRpb24gb2YgdGhlIGVudGl0eSB3aWxsIHN0YXkgdGhlIHNhbWVcclxuICAgKi9cclxuICBkZXRhY2goKXtcclxuICAgIGlmICh0aGlzLmRldGFjaGVkKXsgcmV0dXJuIGNvbnNvbGUud2FybignY2FuXFwndCBkZXRhY2ggYW4gYWxyZWFkeSBkZXRhY2hlZCBFbnRpdHknKSB9O1xyXG4gICAgdGhpcy5kZXRhY2hlZCA9IHRydWU7XHJcbiAgICB0aGlzLmdyaWQuZGV0YWNoRW50aXR5SW5zdGFuY2UoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0cmluZyBjb250YWluaW5nIGEgZGlyZWN0aW9uLiBQb3NzaWJsZSBhcmU6ICd0b3AnLCd1cCcsJ25vcnRoJzsgJ3JpZ2h0JywnZWFzdCc7ICdib3R0b20nLCdkb3duJywnc291dGgnOyAnbGVmdCcsJ3dlc3QnOyAnaGVyZScsJ3N0YXknLiBUaGUgZGlyZWN0aW9uU3RyaW5nIGlzbid0IGNhc2Ugc2Vuc2l0aXZlXHJcbiAgICogQHR5cGVkZWYge3N0cmluZ30gZGlyZWN0aW9uU3RyaW5nXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIHRoZSBmb3JtIFtkYywgZHJdIHJlcHJlc2VudGluZyBhIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBlbnRpdGllcyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gICAqIEB0eXBlZGVmIHtudW1iZXJbXX0gcmVsYXRpdmVQb3NpdGlvblxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBPYmplY3Qgb2YgdGhlIGZvcm0ge2MsIHJ9IHJlcHJlc2VudGluZyBhbiBhYnNvbHV0ZSBwb3NpdGlvbi5cclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBhYnNvbHV0ZVBvc2l0aW9uXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGNcclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gclxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBUdXJucyBhbnkgcG9zaXRpb24gaW50byBhIGFic29sdXRlUG9zaXRpb25cclxuICAgKiBAcGFyYW0ge2RpcmVjdGlvblN0cmluZ3xyZWxhdGl2ZVBvc2l0aW9ufGFic29sdXRlUG9zaXRpb259IHBvc2l0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtib3JkZXJNb2RlPVwiaWdub3JlXCJdIC0gd2hhdCB0byBkbyB3aGVuIHRoZSBwb3NpdGlvbiBpcyBvZmYgdGhlIGdyaWQuIFBvc3NpYmxlIGFyZTogaWdub3JlLCBtb2R1bG9cclxuICAgKiBAcmV0dXJucyB7YWJzb2x1dGVQb3NpdGlvbn0gYWJzb2x1dGVQb3NpdGlvblxyXG4gICAqL1xyXG4gIGZvcm1hdFBvc2l0aW9uQXNBYnNvbHV0ZVBvc2l0aW9uKCBwb3NpdGlvbiwgYm9yZGVyTW9kZSA9ICdpZ25vcmUnICl7XHJcbiAgICBsZXQgYWJzUG9zID0gbnVsbDtcclxuICAgIGlmIChwb3NpdGlvbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHsvL3JlbC4gcG9zIFtkYywgZHJdXHJcbiAgICAgIGFic1BvcyA9IHtcclxuICAgICAgICBjOiB0aGlzLmMgKyBwb3NpdGlvblswXSxcclxuICAgICAgICByOiB0aGlzLnIgKyBwb3NpdGlvblsxXSxcclxuICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnb2JqZWN0Jykgey8vYWJzLiBjb29yZHMge2MsIHJ9XHJcbiAgICAgIGFic1BvcyA9IHBvc2l0aW9uO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcG9zaXRpb24gPT09ICdzdHJpbmcnKSB7Ly9kaXJlY3Rpb24gc3RyaW5nXHJcbiAgICAgIGFic1BvcyA9IGFic1BvcyA9IHtjOiB0aGlzLmMsIHI6IHRoaXMucn07XHJcbiAgICAgIGlmIChbJ3RvcCcsJ3VwJywnbm9ydGgnXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgYWJzUG9zLnItLTtcclxuICAgICAgfSBlbHNlIGlmIChbJ3JpZ2h0JywnZWFzdCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICBhYnNQb3MuYysrO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnYm90dG9tJywnZG93bicsJ3NvdXRoJ10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIGFic1Bvcy5yKys7XHJcbiAgICAgIH0gZWxzZSBpZiAoWydsZWZ0Jywnd2VzdCddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICBhYnNQb3MuYy0tO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnaGVyZScsJ3N0YXknXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgLy9ub3RoaW5nXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIGJvcmRlck1vZGUgPT09ICdtb2R1bG8nICkge1xyXG4gICAgICBhYnNQb3MuYyA9IChhYnNQb3MuYyArIHRoaXMuZ3JpZC5jb2x1bW5zKSAlIHRoaXMuZ3JpZC5jb2x1bW5zO1xyXG4gICAgICBhYnNQb3MuciA9IChhYnNQb3MuciArIHRoaXMuZ3JpZC5yb3dzKSAlIHRoaXMuZ3JpZC5yb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhYnNQb3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQb29ybHkgdGVzdGV0IGF0IHRoZSBtb21lbnQhIVxyXG4gICAqIEBwYXJhbSB7ZGlyZWN0aW9uU3RyaW5nfHJlbGF0aXZlUG9zaXRpb258YWJzb2x1dGVQb3NpdGlvbn0gcG9zaXRpb24gLSBwb3NpdGlvbiB0byBjb252ZXJ0XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGJvcmRlck1vZGUgLSBkb2VzIG5vdGhpbmcgYXQgdGhlIG1vbWVudFxyXG4gICAqIEByZXR1cm5zIHtyZWxhdGl2ZVBvc2l0aW9ufVxyXG4gICAqL1xyXG4gIGZvcm1hdFBvc2l0aW9uQXNSZWxhdGl2ZVBvc2l0aW9uKCBwb3NpdGlvbiwgYm9yZGVyTW9kZSA9ICdpZ25vcmUnICl7XHJcbiAgICBsZXQgcmVsUG9zID0gbnVsbDtcclxuICAgIGlmIChwb3NpdGlvbi5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHsgcmVsUG9zID0gcG9zaXRpb24gfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xyXG4gICAgICBpZiAoWyd0b3AnLCd1cCcsJ25vcnRoJ10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIHJlbFBvcyA9IFswLCAtMV07XHJcbiAgICAgIH0gZWxzZSBpZiAoWydyaWdodCcsJ2Vhc3QnXS5pbmNsdWRlcyggcG9zaXRpb24udG9Mb3dlckNhc2UoKSApKSB7XHJcbiAgICAgICAgcmVsUG9zID0gWzEsIDBdO1xyXG4gICAgICB9IGVsc2UgaWYgKFsnYm90dG9tJywnZG93bicsJ3NvdXRoJ10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIHJlbFBvcyA9IFswLCAxXTtcclxuICAgICAgfSBlbHNlIGlmIChbJ2xlZnQnLCd3ZXN0J10uaW5jbHVkZXMoIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgKSkge1xyXG4gICAgICAgIHJlbFBvcyA9IFstMSwgMF07XHJcbiAgICAgIH0gZWxzZSBpZiAoWydoZXJlJywnc3RheSddLmluY2x1ZGVzKCBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpICkpIHtcclxuICAgICAgICByZWxQb3MgPSBbMCwgMF07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnb2JqZWN0Jykge1xyXG4gICAgICByZWxQb3MgPSBbIHBvc2l0aW9uLmMgLSB0aGlzLmMsIHBvc2l0aW9uLnIgLSB0aGlzLnIgXTtcclxuICAgIH1cclxuICAgIHJldHVybiByZWxQb3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlcyBlbnRpdHkgdG8gbmV3UG9zaXRpb25cclxuICAgKiBAcGFyYW0ge2RpcmVjdGlvblN0cmluZ3xyZWxhdGl2ZVBvc2l0aW9ufGFic29sdXRlUG9zaXRpb259IG5ld1Bvc2l0aW9uIC0gV2hlcmUgdGhlIGVudGl0eSBzaG91bGQgbW92ZSB0b1xyXG4gICAqL1xyXG4gIG1vdmUoIG5ld1Bvc2l0aW9uICl7XHJcbiAgICBuZXdQb3NpdGlvbiA9IHRoaXMuZm9ybWF0UG9zaXRpb25Bc0Fic29sdXRlUG9zaXRpb24oIG5ld1Bvc2l0aW9uICk7XHJcbiAgICBpZiAodGhpcy5kZXRhY2hlZCl7XHJcbiAgICAgIHRoaXMuYyA9IG5ld1Bvc2l0aW9uLmM7XHJcbiAgICAgIHRoaXMuciA9IG5ld1Bvc2l0aW9uLnI7XHJcbiAgICB9XHJcbiAgICBlbHNlIHsgdGhpcy5ncmlkLm1vdmVFbnRpdHlJbnN0YW5jZSggdGhpcywgbmV3UG9zaXRpb24gKSB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHRleHQgdG8gdGhlIGVudGl0eVxyXG4gICAqIEBwYXJhbSB7VGV4dH50ZXh0U2V0dGluZ3N9IHRleHRTZXR0aW5ncyBcclxuICAgKi9cclxuICBhZGRUZXh0KCB0ZXh0U2V0dGluZ3MgKXtcclxuICAgIGlmICh0eXBlb2YgdGV4dFNldHRpbmdzICE9PSAnb2JqZWN0Jykge3JldHVybiBjb25zb2xlLmVycm9yKCd0ZXh0U2V0dGluZ3MgbmVlZHMgdG8gYmUgYW4gb2JqZWN0Jyl9O1xyXG4gICAgaWYgKHRleHRTZXR0aW5ncy5pZCA9PT0gdW5kZWZpbmVkKSB7cmV0dXJuIGNvbnNvbGUuZXJyb3IoJ3RleHRTZXR0aW5ncyBuZWVkIHRvIGhhdmUgYW4gaWQgcHJvcGVydHknKX07XHJcbiAgICB0aGlzLnRleHRzWyB0ZXh0U2V0dGluZ3MuaWQgXSA9IG5ldyBUZXh0KCB0ZXh0U2V0dGluZ3MgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIHRleHQgZnJvbSB0aGUgZW50aXR5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFxyXG4gICAqL1xyXG4gIHJlbW92ZVRleHQoIGlkICl7XHJcbiAgICBkZWxldGUgdGhpcy50ZXh0c1sgaWQgXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gQXJyYXkgb2YgYWxsIGVudGl0aWVzIGJlbmVhdGggdGhpcyBlbnRpdHkuIE9ubHkgd29ya3MgZm9yIGRldGFjaGVkIGVudGl0aWVzXHJcbiAgICogQHJldHVybnMge0VudGl0eX5DdXN0b21FbnRpdHlDbGFzc1tdfVxyXG4gICAqL1xyXG4gIGdldEVudGl0eUluc3RhbmNlc0JlbmVhdGgoKXtcclxuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0RW50aXR5SW5zdGFuY2VzQmVuZWF0aERldGFjaGVkRW50aXR5SW5zdGFuY2UoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIEVudGl0eSB0byB0aGUga2V5RG93biBldmVudCBmb3IgdGhlIHNwZWNpZmllZCBrZXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0ga2V5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9LZXlEb3duKCBrZXkgKXtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMucHVzaCgga2V5ICk7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleURvd24oIHRoaXMsIGtleSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIEVudGl0eSBmcm9tIHRoZSBrZXlEb3duIGV2ZW50IGZvciB0aGUgc3BlY2lmaWVkIGtleVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBrZXlcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21LZXlEb3duKCBrZXkgKXtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zLmluZGV4T2YoIGtleSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21LZXlEb3duKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIEVudGl0eSB0byB0aGUga2V5VXAgZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQga2V5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvS2V5VXAoIGtleSApe1xyXG4gICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMucHVzaCgga2V5ICk7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb0tleVVwKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBFbnRpdHkgZnJvbSB0aGUga2V5VXAgZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQga2V5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIGtleVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbUtleVVwKCBrZXkgKXtcclxuICAgIHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLnNwbGljZSggdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMuaW5kZXhPZigga2V5ICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbUtleVVwKCB0aGlzLCBrZXkgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgcmVuZGVyU3RhcnQgZXZlbnRcclxuICAgKi9cclxuICBzdWJzY3JpYmVUb1JlbmRlclN0YXJ0KCl7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvUmVuZGVyU3RhcnQoIHRoaXMgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgcmVuZGVyU3RhcnQgZXZlbnRcclxuICAgKi9cclxuICB1bnN1YnNjcmliZUZyb21SZW5kZXJTdGFydCgpe1xyXG4gICAgdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ncmlkLnVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tUmVuZGVyU3RhcnQoIHRoaXMgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgdGhlIGVudGl0eSB0byB0aGUgdG91Y2hTd2lwZSBldmVudFxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvVG91Y2hTd2lwZSgpe1xyXG4gICAgdGhpcy50b3VjaFN3aXBlU3Vic2NyaXB0aW9uID0gdHJ1ZTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvVG91Y2hTd2lwZSggdGhpcyApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSB0b3VjaFN3aXBlIGV2ZW50XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tVG91Y2hTd2lwZSgpe1xyXG4gICAgdGhpcy50b3VjaFN3aXBlU3Vic2NyaXB0aW9uID0gZmFsc2U7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Ub3VjaFN3aXBlKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIHNjZW5lTG9hZGVkIGV2ZW50XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9TY2VuZUxvYWRlZCgpe1xyXG4gICAgdGhpcy5zY2VuZUxvYWRlZFN1YnNjcmlwdGlvbiA9IHRydWU7XHJcbiAgICB0aGlzLmdyaWQuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1NjZW5lTG9hZGVkKCB0aGlzICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFVuc3Vic2NyaWJlcyB0aGUgZW50aXR5IGZyb20gdGhlIHNjZW5lTG9hZGVkIGV2ZW50XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tU2NlbmVMb2FkZWQoKXtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb24gPSBmYWxzZTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbVNjZW5lTG9hZGVkKCB0aGlzICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlRG93biBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZURvd24oIGRpc3BsYXlOYW1lICl7XHJcbiAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VEb3duKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZURvd24gZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbU1vdXNlRG93biggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5pbmRleE9mKCBkaXNwbGF5TmFtZSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZURvd24oIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlVXAgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VVcCggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VVcCggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VVcCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VVcCggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlVXAoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlTW92ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgc3Vic2NyaWJlVG9Nb3VzZU1vdmUoIGRpc3BsYXlOYW1lICl7XHJcbiAgICB0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VNb3ZlKCB0aGlzLCBkaXNwbGF5TmFtZSApO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBVbnN1YnNjcmliZXMgdGhlIGVudGl0eSBmcm9tIHRoZSBtb3VzZU1vdmUgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHVuc3Vic2NyaWJlRnJvbU1vdXNlTW92ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5zcGxpY2UoIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9ucy5pbmRleE9mKCBkaXNwbGF5TmFtZSApLCAxICk7XHJcbiAgICB0aGlzLmdyaWQudW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZU1vdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlRW50ZXIgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VFbnRlciggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VFbnRlciggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VFbnRlciBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VFbnRlciggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlRW50ZXIoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmVzIHRoZSBlbnRpdHkgdG8gdGhlIG1vdXNlTGVhdmUgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBkaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlOYW1lIC0gTmFtZSBvZiB0aGUgZGlzcGxheVxyXG4gICAqL1xyXG4gIHN1YnNjcmliZVRvTW91c2VMZWF2ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMucHVzaCggZGlzcGxheU5hbWUgKTtcclxuICAgIHRoaXMuZ3JpZC5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VMZWF2ZSggdGhpcywgZGlzcGxheU5hbWUgKTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHRoZSBlbnRpdHkgZnJvbSB0aGUgbW91c2VMZWF2ZSBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBkaXNwbGF5XHJcbiAgICovXHJcbiAgdW5zdWJzY3JpYmVGcm9tTW91c2VMZWF2ZSggZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuc3BsaWNlKCB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zLmluZGV4T2YoIGRpc3BsYXlOYW1lICksIDEgKTtcclxuICAgIHRoaXMuZ3JpZC51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlTGVhdmUoIHRoaXMsIGRpc3BsYXlOYW1lICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IEpvaSBmcm9tIFwiQGhhcGkvam9pXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGEgbG9naWNhbCBncmlkLiBTYXZlcyByZWZlcmVuY2VzIHRvIGVudGl0aWVzXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIEdyaWRcclxuICAgKiBHcmlkcyBzaG91bGQgb25seSBiZSBjb25zdHJ1Y3RlZCB1c2luZyB0aGUgZ3JpZ2EgY29uZmlnXHJcbiAgICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBjb25maWcsIGdyaWdhICl7XHJcbiAgICB0aGlzLmdyaWdhID0gZ3JpZ2E7XHJcbiAgICB0aGlzLmRpc3BsYXlzID0ge307XHJcbiAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcclxuICAgIHRoaXMuY29sdW1ucyA9IGNvbmZpZy5jb2x1bW5zO1xyXG4gICAgdGhpcy5yb3dzID0gY29uZmlnLnJvd3M7XHJcblxyXG4gICAgdGhpcy5yZXNldE1vdXNlKCk7IC8vc2V0cyB0aGlzLm1vdXNlIHRvIGRlZmF1bHRcclxuXHJcbiAgICAvL2VudGl0eUluc3RhbmNlUmVmZXJlbmNlc1xyXG4gICAgdGhpcy5jbGVhclNjZW5lKCk7XHJcblxyXG4gICAgdGhpcy5sYXN0UmVuZGVyVGltZSA9IDA7XHJcbiAgfVxyXG5cclxuICAvL3NldHVwXHJcbiAgc2V0dXBHcmlkRGF0YSgpe1xyXG4gICAgY29uc3QgZ3JpZERhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGM9MDsgYzx0aGlzLmNvbHVtbnM7IGMrKykge1xyXG4gICAgICBncmlkRGF0YVtjXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCByPTA7IHI8dGhpcy5yb3dzOyByKyspIHtcclxuICAgICAgICBncmlkRGF0YVtjXVtyXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3JpZERhdGE7XHJcbiAgfVxyXG5cclxuICAvL2hhbmRsZXJcclxuICByZW5kZXJTdGFydEhhbmRsZXIoKXtcclxuICAgIGNvbnN0IHRpbWVQYXNzZWQgPSBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMubGFzdFJlbmRlclRpbWU7XHJcbiAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICB0aGlzLnJlbmRlclN0YXJ0U3Vic2NyaXB0aW9ucy5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlLnJlbmRlclN0YXJ0SGFuZGxlciggdGltZVBhc3NlZCApO1xyXG4gICAgfSApO1xyXG4gIH1cclxuICBcclxuICBzY2VuZUxvYWRlZEhhbmRsZXIoKXtcclxuICAgIHRoaXMuc2NlbmVMb2FkZWRTdWJzY3JpcHRpb25zLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgZW50aXR5SW5zdGFuY2Uuc2NlbmVMb2FkZWRIYW5kbGVyKCk7XHJcbiAgICB9ICk7XHJcbiAgfVxyXG4gIFxyXG4gIGtleURvd25IYW5kbGVyKCBlICl7XHJcbiAgICBpZiAodGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZS5rZXkgKSkge1xyXG4gICAgICB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zWyBlLmtleSBdLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZS5rZXlEb3duSGFuZGxlciggZS5rZXkgKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAga2V5VXBIYW5kbGVyKCBlICl7XHJcbiAgICBpZiAodGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGUua2V5ICkpIHtcclxuICAgICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNbIGUua2V5IF0uZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLmtleVVwSGFuZGxlciggZS5rZXkgKTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW91c2VNb3ZlSGFuZGxlciggZGlzcGxheU5hbWUsIG1vdXNlQyxtb3VzZVIsIG1vdXNlQnV0dG9ucywgY3RybEtleSApe1xyXG4gICAgLy9jaGVjayBmb3IgbW91c2UgZW50ZXIgVE9ET1xyXG4gICAgbGV0IG1vdmVkVG9OZXdUaWxlID0gZmFsc2U7XHJcbiAgICBpZiAoTWF0aC5mbG9vcih0aGlzLm1vdXNlLmMpICE9PSBNYXRoLmZsb29yKG1vdXNlQylcclxuICAgICB8fCBNYXRoLmZsb29yKHRoaXMubW91c2UucikgIT09IE1hdGguZmxvb3IobW91c2VSKSkge1xyXG4gICAgICBtb3ZlZFRvTmV3VGlsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vdmVkVG9OZXdUaWxlKSB7XHJcbiAgICAgIC8vZmlyZSBtb3VzZSBMZWF2ZSBFdmVudFxyXG4gICAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV1cclxuICAgICAgdGFyZ2V0cy5mb3JFYWNoKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zLmluY2x1ZGVzKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlTGVhdmVIYW5kbGVyKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lLCB0aGlzLm1vdXNlLmMsIHRoaXMubW91c2UuciwgbW91c2VCdXR0b25zLCBjdHJsS2V5ICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9ICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vdXBkYXRlIHRoaXMubW91c2VcclxuICAgIHRoaXMubW91c2UuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcclxuICAgIHRoaXMubW91c2UuYyA9IG1vdXNlQztcclxuICAgIHRoaXMubW91c2UuciA9IG1vdXNlUjtcclxuXHJcbiAgICBpZiAobW92ZWRUb05ld1RpbGUpIHtcclxuICAgICAgLy9maXJlIG1vdXNlIEVudGVyIEV2ZW50XHJcbiAgICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLmdyaWREYXRhW01hdGguZmxvb3IodGhpcy5tb3VzZS5jKV1bTWF0aC5mbG9vcih0aGlzLm1vdXNlLnIpXVxyXG4gICAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBpZiAoZW50aXR5SW5zdGFuY2UubW91c2VFbnRlclN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgICAgZW50aXR5SW5zdGFuY2UubW91c2VFbnRlckhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yLCBtb3VzZUJ1dHRvbnMsIGN0cmxLZXkgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zWyB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lIF0uZm9yRWFjaCggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlTW92ZUhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vdXNlTGVhdmVIYW5kbGVyKCl7XHJcbiAgICB0aGlzLnJlc2V0TW91c2UoKTtcclxuICB9XHJcblxyXG4gIG1vdXNlRG93bkhhbmRsZXIoIGRpc3BsYXlOYW1lLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV0uY29uY2F0KC8vdGlsZXNcclxuICAgICAgdGhpcy5nZXREZXRhY2hlZEVudGl0eUluc3RhbmNlc0J5Q29vcmRpbmF0ZXMoIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICkgKTsvL2RldGFjaGVkXHJcbiAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlRG93blN1YnNjcmlwdGlvbnMuaW5jbHVkZXMoIHRoaXMubW91c2UuZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICAgIGVudGl0eUluc3RhbmNlLm1vdXNlRG93bkhhbmRsZXIoIHRoaXMubW91c2UuZGlzcGxheU5hbWUsIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yLCBjdHJsS2V5ICk7XHJcbiAgICAgIH1cclxuICAgIH0gKTtcclxuICB9XHJcbiAgbW91c2VVcEhhbmRsZXIoIGRpc3BsYXlOYW1lLCBjdHJsS2V5ICl7XHJcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5ncmlkRGF0YVtNYXRoLmZsb29yKHRoaXMubW91c2UuYyldW01hdGguZmxvb3IodGhpcy5tb3VzZS5yKV0uY29uY2F0KC8vdGlsZXNcclxuICAgICAgdGhpcy5nZXREZXRhY2hlZEVudGl0eUluc3RhbmNlc0J5Q29vcmRpbmF0ZXMoIHRoaXMubW91c2UuYywgdGhpcy5tb3VzZS5yICkgKTsvL2RldGFjaGVkXHJcbiAgICB0YXJnZXRzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgaWYgKGVudGl0eUluc3RhbmNlLm1vdXNlVXBTdWJzY3JpcHRpb25zLmluY2x1ZGVzKCB0aGlzLm1vdXNlLmRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgICBlbnRpdHlJbnN0YW5jZS5tb3VzZVVwSGFuZGxlciggdGhpcy5tb3VzZS5kaXNwbGF5TmFtZSwgdGhpcy5tb3VzZS5jLCB0aGlzLm1vdXNlLnIsIGN0cmxLZXkgKTtcclxuICAgICAgfVxyXG4gICAgfSApO1xyXG4gIH1cclxuXHJcbiAgdG91Y2hTd2lwZUhhbmRsZXIoIGRpcmVjdGlvbiwgbW92ZW1lbnRYLCBtb3ZlbWVudFkgKXtcclxuICAgIHRoaXMudG91Y2hTd2lwZVN1YnNjcmlwdGlvbnMuZm9yRWFjaCggZSA9PiBlLnRvdWNoU3dpcGVIYW5kbGVyKCBkaXJlY3Rpb24sIG1vdmVtZW50WCwgbW92ZW1lbnRZICkgKTtcclxuICB9XHJcblxyXG4gIC8vbGlzdGVuZXJTdHVmZlxyXG4gIFxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9SZW5kZXJTdGFydCggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb25zLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tUmVuZGVyU3RhcnQoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5yZW5kZXJTdGFydFN1YnNjcmlwdGlvbnMuaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb25zLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb1RvdWNoU3dpcGUoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLnRvdWNoU3dpcGVTdWJzY3JpcHRpb25zLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tVG91Y2hTd2lwZSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLnRvdWNoU3dpcGVTdWJzY3JpcHRpb25zLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLnRvdWNoU3dpcGVTdWJzY3JpcHRpb25zLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuICBcclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvU2NlbmVMb2FkZWQoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9ucy5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuICBcclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvS2V5RG93biggZW50aXR5SW5zdGFuY2UsIGtleSApe1xyXG4gICAgaWYgKHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGtleSApKSB7XHJcbiAgICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnNba2V5XS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9uc1trZXldID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbUtleURvd24oIGVudGl0eUluc3RhbmNlLCBrZXkgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLmtleURvd25TdWJzY3JpcHRpb25zW2tleV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMua2V5RG93blN1YnNjcmlwdGlvbnNba2V5XS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9LZXlVcCggZW50aXR5SW5zdGFuY2UsIGtleSApe1xyXG4gICAgaWYgKHRoaXMua2V5VXBTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBrZXkgKSkge1xyXG4gICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uc1trZXldLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmtleVVwU3Vic2NyaXB0aW9uc1trZXldID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbUtleVVwKCBlbnRpdHlJbnN0YW5jZSwga2V5ICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNba2V5XS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnNba2V5XS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZURvd24oIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgaWYgKHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdXNlRG93blN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlRG93biggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5tb3VzZURvd25TdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIHN1YnNjcmliZUVudGl0eUluc3RhbmNlVG9Nb3VzZVVwKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGlmICh0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zLmhhc093blByb3BlcnR5KCBkaXNwbGF5TmFtZSApKSB7XHJcbiAgICAgIHRoaXMubW91c2VVcFN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnB1c2goIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZVVwKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGNvbnN0IGkgPSB0aGlzLm1vdXNlVXBTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5pbmRleE9mKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VNb3ZlKCBlbnRpdHlJbnN0YW5jZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIGlmICh0aGlzLm1vdXNlTW92ZVN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXSA9IFsgZW50aXR5SW5zdGFuY2UgXTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5zdWJzY3JpYmVFbnRpdHlJbnN0YW5jZUZyb21Nb3VzZU1vdmUoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubW91c2VNb3ZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uc3BsaWNlKCBpLCAxICk7XHJcbiAgfVxyXG5cclxuICBzdWJzY3JpYmVFbnRpdHlJbnN0YW5jZVRvTW91c2VFbnRlciggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBpZiAodGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9ucy5oYXNPd25Qcm9wZXJ0eSggZGlzcGxheU5hbWUgKSkge1xyXG4gICAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0gPSBbIGVudGl0eUluc3RhbmNlIF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VGcm9tTW91c2VFbnRlciggZW50aXR5SW5zdGFuY2UsIGRpc3BsYXlOYW1lICl7XHJcbiAgICBjb25zdCBpID0gdGhpcy5tb3VzZUVudGVyU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubW91c2VFbnRlclN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLnNwbGljZSggaSwgMSApO1xyXG4gIH1cclxuXHJcbiAgc3Vic2NyaWJlRW50aXR5SW5zdGFuY2VUb01vdXNlTGVhdmUoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgaWYgKHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnMuaGFzT3duUHJvcGVydHkoIGRpc3BsYXlOYW1lICkpIHtcclxuICAgICAgdGhpcy5tb3VzZUxlYXZlU3Vic2NyaXB0aW9uc1tkaXNwbGF5TmFtZV0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbU1vdXNlTGVhdmUoIGVudGl0eUluc3RhbmNlLCBkaXNwbGF5TmFtZSApe1xyXG4gICAgY29uc3QgaSA9IHRoaXMubW91c2VMZWF2ZVN1YnNjcmlwdGlvbnNbZGlzcGxheU5hbWVdLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zW2Rpc3BsYXlOYW1lXS5zcGxpY2UoIGksIDEgKTtcclxuICB9XHJcblxyXG4gIC8vZGlzcGxheSBpbnRlcmFjdGlvbnNcclxuICBnZXQgZGlzcGxheURhdGEoKXtcclxuICAgIC8vdHJpZ2dlclJlbmRlclN0YXJ0RXZlbnRcclxuICAgIHRoaXMucmVuZGVyU3RhcnRIYW5kbGVyKCk7XHJcbiAgICBjb25zdCBhbGxMYXllcnNFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhID0gW107XHJcbiAgICB0aGlzLmxheWVyRGF0YS5mb3JFYWNoKCAoIGxheWVyRW50aXR5SW5zdGFuY2VzLCBsYXllciApID0+IHtcclxuICAgICAgY29uc3QgbGF5ZXJFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhID0gW107XHJcbiAgICAgIGxheWVyRW50aXR5SW5zdGFuY2VzLmZvckVhY2goIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICBsYXllckVudGl0eUluc3RhbmNlRGlzcGxheURhdGEucHVzaCggZW50aXR5SW5zdGFuY2UuZGlzcGxheURhdGEgKTtcclxuICAgICAgfSApO1xyXG4gICAgICBhbGxMYXllcnNFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhWyBsYXllciBdID0gbGF5ZXJFbnRpdHlJbnN0YW5jZURpc3BsYXlEYXRhO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ3JpZE5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgYWxsTGF5ZXJzRW50aXR5SW5zdGFuY2VEaXNwbGF5RGF0YVxyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgLy9hbGxFbnRpdHlJbnN0YW5jZXNcclxuICBhZGRFbnRpdHlJbnN0YW5jZVRvQWxsRW50aXR5SW5zdGFuY2VzKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5hbGxFbnRpdHlJbnN0YW5jZXMucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcbiAgcmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tQWxsRW50aXR5SW5zdGFuY2VzKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgZW50aXR5SW5zdGFuY2VJbmRleCA9IHRoaXMuYWxsRW50aXR5SW5zdGFuY2VzLmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICB0aGlzLmFsbEVudGl0eUluc3RhbmNlcy5zcGxpY2UoIGVudGl0eUluc3RhbmNlSW5kZXgsIDEgKTtcclxuICB9XHJcblxyXG4gIC8vZW50aXR5RGF0YVxyXG4gIGFkZEVudGl0eUluc3RhbmNlVG9FbnRpdHlEYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgZW50aXR5TmFtZSA9IGVudGl0eUluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBpZiAodGhpcy5lbnRpdHlEYXRhLmhhc093blByb3BlcnR5KCBlbnRpdHlOYW1lICkpIHtcclxuICAgICAgdGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF0ucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdID0gWyBlbnRpdHlJbnN0YW5jZSBdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21FbnRpdHlEYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgZW50aXR5TmFtZSA9IGVudGl0eUluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZUluZGV4ID0gdGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF0uaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdLnNwbGljZSggZW50aXR5SW5zdGFuY2VJbmRleCwgMSApO1xyXG4gICAgaWYgKHRoaXMuZW50aXR5RGF0YVsgZW50aXR5TmFtZSBdLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBkZWxldGUgdGhpcy5lbnRpdHlEYXRhWyBlbnRpdHlOYW1lIF07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2RldGFjaGVkRGF0YVxyXG4gIGFkZEVudGl0eUluc3RhbmNlVG9EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLmRldGFjaGVkRGF0YS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuICByZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21EZXRhY2hlZERhdGEoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZUluZGV4ID0gdGhpcy5kZXRhY2hlZERhdGEuaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuZGV0YWNoZWREYXRhLnNwbGljZSggZW50aXR5SW5zdGFuY2VJbmRleCwgMSApO1xyXG4gIH1cclxuXHJcbiAgLy9ncmlkRGF0YVxyXG4gIGFkZEVudGl0eUluc3RhbmNlVG9HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IHRpbGVEYXRhID0gdGhpcy5ncmlkRGF0YVsgZW50aXR5SW5zdGFuY2UuYyBdWyBlbnRpdHlJbnN0YW5jZS5yIF07XHJcbiAgICB0aWxlRGF0YS5wdXNoKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuICByZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKXtcclxuICAgIGNvbnN0IHRpbGVEYXRhID0gdGhpcy5ncmlkRGF0YVsgZW50aXR5SW5zdGFuY2UuYyBdWyBlbnRpdHlJbnN0YW5jZS5yIF07XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZUluZGV4ID0gdGlsZURhdGEuaW5kZXhPZiggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRpbGVEYXRhLnNwbGljZSggZW50aXR5SW5zdGFuY2VJbmRleCwgMSApO1xyXG4gIH1cclxuXHJcbiAgLy9sYXllckRhdGFcclxuICBhZGRFbnRpdHlJbnN0YW5jZVRvTGF5ZXJEYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgbGV0IGxheWVyQXJyYXkgPSBbXTtcclxuICAgIGlmICh0aGlzLmxheWVyRGF0YS5oYXMoIGVudGl0eUluc3RhbmNlLmxheWVyICkpIHtcclxuICAgICAgbGF5ZXJBcnJheSA9IHRoaXMubGF5ZXJEYXRhLmdldCggZW50aXR5SW5zdGFuY2UubGF5ZXIgKTtcclxuICAgIH1cclxuICAgIGxheWVyQXJyYXkucHVzaCggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMubGF5ZXJEYXRhLnNldCggZW50aXR5SW5zdGFuY2UubGF5ZXIsIGxheWVyQXJyYXkgKTtcclxuICB9XHJcbiAgcmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tTGF5ZXJEYXRhKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgY29uc3QgbGF5ZXJBcnJheSA9IHRoaXMubGF5ZXJEYXRhLmdldCggZW50aXR5SW5zdGFuY2UubGF5ZXIgKTtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlSW5kZXggPSBsYXllckFycmF5LmluZGV4T2YoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICBsYXllckFycmF5LnNwbGljZSggZW50aXR5SW5zdGFuY2VJbmRleCwgMSApO1xyXG4gICAgaWYgKGxheWVyQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmxheWVyRGF0YS5zZXQoIGVudGl0eUluc3RhbmNlLmxheWVyLCBsYXllckFycmF5ICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxheWVyRGF0YS5kZWxldGUoIGVudGl0eUluc3RhbmNlLmxheWVyICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBFbnRpdHlNZXRob2RzXHJcbiAgYXR0YWNoRW50aXR5SW5zdGFuY2UoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbURldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0dyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgRW50aXR5TWV0aG9kc1xyXG4gIGRldGFjaEVudGl0eUluc3RhbmNlKCBlbnRpdHlJbnN0YW5jZSApe1xyXG4gICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0RldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICB9XHJcblxyXG4vL1BVQkxJQyB4RFxyXG5cclxuICBzdGF0aWMgZ2V0IGFyZ3NTY2hlbWEoKXtcclxuICAgIHJldHVybiBKb2kub2JqZWN0KCB7XHJcbiAgICAgIGRldGFjaGVkOiBKb2kuYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxyXG4gICAgICBjOiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgcjogSm9pLm51bWJlcigpLmRlZmF1bHQoMClcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdHMgYSBuZXcgZW50aXR5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVudGl0eU5hbWUgLSBOYW1lIG9mIHRoZSBDdXN0b21FbnRpdHlDbGFzc1xyXG4gICAqIEBwYXJhbSB7Kn0gW3BhcmFtcz17fV0gLSBQYXJhbXMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbiBhcyBmaXJzdCBhcmd1bWVudCB0byB0aGUgY29uc3RydWN0b3Igb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzXSAtIEFyZ3VtZW50cyBmb3IgdGhlIGVudGl0aWVzIGludGlhbCBzdGF0ZS4gQ2FuIHN0aWxsIGJlIG92ZXJ3cml0dGVuIGluIHRoZSBjb25zdHJ1Y3RvciBvZiB0aGUgQ3VzdG9tRW50aXR5Q2xhc3MgYmVmb3JlIGNhbGxpbmcgc3VwZXIoKVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FyZ3MuZGV0YWNoZWQ9ZmFsc2VdIC0gVHJ1ZSBpZiB0aGUgZW50aXR5IHNob3VsZCBiZSBkZXRhY2hlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYXJncy5jPTBdIC0gQyBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYXJncy5yPTBdIC0gUiBwb3NpdGlvblxyXG4gICAqL1xyXG4gIG5ld0VudGl0eUluc3RhbmNlKCBlbnRpdHlOYW1lLCBwYXJhbXMgPSB7fSwgYXJncyA9IHt9ICl7XHJcbiAgICAvL3ZhbGlkYXRlIEFyZ3NcclxuICAgIGxldCB2YWxpZEFyZ3M7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YWxpZEFyZ3MgPSBKb2kuYXR0ZW1wdCggYXJncywgR3JpZC5hcmdzU2NoZW1hICk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICBlLm5hbWUgPSAnbmV3RW50aXR5QXJnc0Vycm9yJztcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9jcmVhdGUgbmV3IGVudGl0eUluc3RhbmNlXHJcbiAgICB2YWxpZEFyZ3MuZ3JpZCA9IHRoaXM7XHJcbiAgICBjb25zdCBlbnRpdHlJbnN0YW5jZSA9IG5ldyB0aGlzLmdyaWdhLmVudGl0aWVzWyBlbnRpdHlOYW1lIF0oXHJcbiAgICAgIHBhcmFtcywgdmFsaWRBcmdzXHJcbiAgICApO1xyXG4gICAgLy9zZXQgYWxsIGVudGl0eUluc3RhbmNlIFJlZmVyZW5jZXNcclxuICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0FsbEVudGl0eUluc3RhbmNlcyggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0VudGl0eURhdGEoIGVudGl0eUluc3RhbmNlICk7XHJcbiAgICBpZiAoZW50aXR5SW5zdGFuY2UuZGV0YWNoZWQpIHtcclxuICAgICAgdGhpcy5hZGRFbnRpdHlJbnN0YW5jZVRvRGV0YWNoZWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLmFkZEVudGl0eUluc3RhbmNlVG9HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH1cclxuICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0xheWVyRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuXHJcbiAgICByZXR1cm4gZW50aXR5SW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBFbnRpdHlNZXRob2RzXHJcbiAgZGVsZXRlRW50aXR5SW5zdGFuY2UoIGVudGl0eUluc3RhbmNlICl7XHJcbiAgICAvL3JlbW92ZSBhbGwgcmVmZXJlbmNlcyB0byBlbnRpdHlJbnN0YW5jZVxyXG4gICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21BbGxFbnRpdHlJbnN0YW5jZXMoIGVudGl0eUluc3RhbmNlIClcclxuICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tRW50aXR5RGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIGlmIChlbnRpdHlJbnN0YW5jZS5kZXRhY2hlZCkge1xyXG4gICAgICB0aGlzLnJlbW92ZUVudGl0eUluc3RhbmNlRnJvbURldGFjaGVkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlRW50aXR5SW5zdGFuY2VGcm9tTGF5ZXJEYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgZW50aXR5SW5zdGFuY2Uua2V5RG93blN1YnNjcmlwdGlvbnMuZm9yRWFjaCgga2V5ID0+IHtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZUVudGl0eUluc3RhbmNlRnJvbUtleURvd24oIGVudGl0eUluc3RhbmNlLCBrZXkgKTtcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIC8vb25seSB1c2VkIGJ5IEVudGl0eU1ldGhvZHNcclxuICBtb3ZlRW50aXR5SW5zdGFuY2UoIGVudGl0eUluc3RhbmNlLCBuZXdQb3MgKXtcclxuICAgIC8vdmFsaWRhdGUgbmV3UG9zXHJcbiAgICBpZiAobmV3UG9zLmMgPj0gMCAmJiBuZXdQb3MuYyA8IHRoaXMuY29sdW1uc1xyXG4gICAgICYmIG5ld1Bvcy5yID49IDAgJiYgbmV3UG9zLnIgPCB0aGlzLnJvd3MpIHtcclxuICAgICAgLy91cGRhdGUgZW50aXR5UG9zaXRpb25cclxuICAgICAgdGhpcy5yZW1vdmVFbnRpdHlJbnN0YW5jZUZyb21HcmlkRGF0YSggZW50aXR5SW5zdGFuY2UgKTtcclxuICAgICAgZW50aXR5SW5zdGFuY2UuYyA9IG5ld1Bvcy5jO1xyXG4gICAgICBlbnRpdHlJbnN0YW5jZS5yID0gbmV3UG9zLnI7XHJcbiAgICAgIHRoaXMuYWRkRW50aXR5SW5zdGFuY2VUb0dyaWREYXRhKCBlbnRpdHlJbnN0YW5jZSApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmlsdGVycyBhbmQgcmV0dXJucyBhbGwgRW50aXRpZXMgbWF0Y2hpbmcgdGhlIHNlbGVjdG9yT2JqZWN0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yT2JqZWN0IC0gT2JqZWN0IGNvbnRhaW5pbmcgZmlsdGVyIG9wdGlvbnNcclxuICAgKiBAcGFyYW0ge2Fic29sdXRlUG9zaXRpb259IFtzZWxlY3Rvck9iamVjdC50aWxlXSAtIFRpbGUgdGhlIGVudGl0aWVzIG5lZWQgdG8gYmUgb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yT2JqZWN0LnR5cGVdIC0gVGhlIE5hbWUgb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzIHRoZSBlbnRpdGllcyBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2ZcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yT2JqZWN0Lm5vdFR5cGVdIC0gVGhlIE5hbWUgb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzIHRoZSBlbnRpdGllcyBzaG91bGQgbm90IGJlIGFuIGluc3RhbmNlIG9mXHJcbiAgICovXHJcbiAgZ2V0RW50aXR5SW5zdGFuY2VzKCBzZWxlY3Rvck9iamVjdCA9IHt9ICl7XHJcbiAgICBsZXQgZW50aXR5SW5zdGFuY2VzID0gdGhpcy5hbGxFbnRpdHlJbnN0YW5jZXM7XHJcbiAgICBpZiAoc2VsZWN0b3JPYmplY3QuaGFzT3duUHJvcGVydHkoJ3RpbGUnKSkge1xyXG4gICAgICBpZiAoc2VsZWN0b3JPYmplY3QudGlsZS5jID49IDAgJiYgc2VsZWN0b3JPYmplY3QudGlsZS5jIDwgdGhpcy5jb2x1bW5zXHJcbiAgICAgICAmJiBzZWxlY3Rvck9iamVjdC50aWxlLnIgPj0gMCAmJiBzZWxlY3Rvck9iamVjdC50aWxlLnIgPCB0aGlzLnJvd3MpIHsgLy9jb29yZGluYXRlcyBpbnNpZGUgZ3JpZFxyXG4gICAgICAgIGVudGl0eUluc3RhbmNlcyA9IHRoaXMuZ3JpZERhdGFbIHNlbGVjdG9yT2JqZWN0LnRpbGUuYyBdWyBzZWxlY3Rvck9iamVjdC50aWxlLnIgXTtcclxuICAgICAgICBpZiAoc2VsZWN0b3JPYmplY3QuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSkge1xyXG4gICAgICAgICAgZW50aXR5SW5zdGFuY2VzID0gZW50aXR5SW5zdGFuY2VzLmZpbHRlciggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZW50aXR5SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PT0gc2VsZWN0b3JPYmplY3QudHlwZTtcclxuICAgICAgICAgIH0gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZW50aXR5SW5zdGFuY2VzID0gW107XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3JPYmplY3QuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSkge1xyXG4gICAgICBlbnRpdHlJbnN0YW5jZXMgPSB0aGlzLmVudGl0eURhdGFbIHNlbGVjdG9yT2JqZWN0LnR5cGUgXSB8fCBbXTtcclxuICAgIH1cclxuICAgIGlmIChzZWxlY3Rvck9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnbm90VHlwZScpKSB7XHJcbiAgICAgIGVudGl0eUluc3RhbmNlcyA9IGVudGl0eUluc3RhbmNlcy5maWx0ZXIoIGVudGl0eUluc3RhbmNlID0+IHtcclxuICAgICAgICByZXR1cm4gZW50aXR5SW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSAhPT0gc2VsZWN0b3JPYmplY3Qubm90VHlwZTtcclxuICAgICAgfSApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudGl0eUluc3RhbmNlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGdldHMgYWxsIGRldGFjaGVkIGVudGl0aWVzIHdoaWNoIGFyZSBcInVuZGVyXCIgdGhlIGNvb3JkaW5hdGVzIChjLCByKVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjIC0gQyBjb29yZGluYXRlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHIgLSBSIGNvb3JkaW5hdGVcclxuICAgKi9cclxuICBnZXREZXRhY2hlZEVudGl0eUluc3RhbmNlc0J5Q29vcmRpbmF0ZXMoIGMsIHIgKXtcclxuICAgIGNvbnN0IGVudGl0eUluc3RhbmNlcyA9IHRoaXMuZGV0YWNoZWREYXRhLmZpbHRlciggZW50aXR5SW5zdGFuY2UgPT4ge1xyXG4gICAgICByZXR1cm4gKGMgPiBlbnRpdHlJbnN0YW5jZS5jICYmIGMgPCBlbnRpdHlJbnN0YW5jZS5jK2VudGl0eUluc3RhbmNlLndpZHRoXHJcbiAgICAgICAgJiYgciA+IGVudGl0eUluc3RhbmNlLnIgJiYgciA8IGVudGl0eUluc3RhbmNlLnIrZW50aXR5SW5zdGFuY2UuaGVpZ2h0KTtcclxuICAgIH0gKTtcclxuICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZXM7XHJcbiAgfVxyXG5cclxuICAvL29ubHkgdXNlZCBieSBlbnRpdHkgbWV0aG9kc1xyXG4gIGdldEVudGl0eUluc3RhbmNlc0JlbmVhdGhEZXRhY2hlZEVudGl0eUluc3RhbmNlKCBkZXRhY2hlZEVudGl0eUluc3RhbmNlICl7XHJcbiAgICBjb25zdCBzdGFydEMgPSBNYXRoLmZsb29yKCBkZXRhY2hlZEVudGl0eUluc3RhbmNlLmMgKTtcclxuICAgIGNvbnN0IGVuZEMgPSBkZXRhY2hlZEVudGl0eUluc3RhbmNlLmMgKyBkZXRhY2hlZEVudGl0eUluc3RhbmNlLndpZHRoO1xyXG4gICAgY29uc3Qgc3RhcnRSID0gTWF0aC5mbG9vciggZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS5yICk7XHJcbiAgICBjb25zdCBlbmRSID0gZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS5yICsgZGV0YWNoZWRFbnRpdHlJbnN0YW5jZS5oZWlnaHQ7XHJcbiAgICBsZXQgZW50aXR5SW5zdGFuY2VzID0gW107XHJcbiAgICBmb3IgKGxldCBjID0gc3RhcnRDOyBjIDwgZW5kQzsgYysrKSB7XHJcbiAgICAgIGZvciAobGV0IHIgPSBzdGFydFI7IHIgPCBlbmRSOyByKyspIHtcclxuICAgICAgICBpZiAoYyA+PSAwICYmIGMgPCB0aGlzLmNvbHVtbnNcclxuICAgICAgICAgJiYgciA+PSAwICYmIHIgPCB0aGlzLnJvd3MpIHtcclxuICAgICAgICAgIGVudGl0eUluc3RhbmNlcyA9IGVudGl0eUluc3RhbmNlcy5jb25jYXQoIHRoaXMuZ3JpZERhdGFbY11bcl0gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbnRpdHlJbnN0YW5jZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsb2FkcyBhIHNjZW5lIGludG8gdGhlIGdyaWRcclxuICAgKiBAcGFyYW0ge0dyaWR+c2NlbmVEYXRhfSBzY2VuZURhdGEgLSBTY2VuZURhdGEgT2JqZWN0XHJcbiAgICovXHJcbiAgbG9hZFNjZW5lKCBzY2VuZURhdGEgKXtcclxuICAgIC8vVE9ETyBkZXRhY2hlZFxyXG5cclxuICAgIC8vdGlsZXNcclxuICAgIHNjZW5lRGF0YS50aWxlcy5mb3JFYWNoKCAoY0RhdGEsIGMpID0+IHtcclxuICAgICAgY0RhdGEuZm9yRWFjaCggKHRpbGVEYXRhLCByKSA9PiB7XHJcbiAgICAgICAgdGlsZURhdGEuZm9yRWFjaCggZW50aXR5RGVjbGFyYXRpb24gPT4ge1xyXG4gICAgICAgICAgY29uc3QgZW50aXR5TmFtZSA9IGVudGl0eURlY2xhcmF0aW9uWzBdO1xyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gZW50aXR5RGVjbGFyYXRpb25bMV0gfHwge307XHJcbiAgICAgICAgICBjb25zdCBhcmdzID0geyBkZXRhY2hlZDogZmFsc2UsIGMsIHIgfTtcclxuICAgICAgICAgIHRoaXMubmV3RW50aXR5SW5zdGFuY2UoIGVudGl0eU5hbWUsIHBhcmFtcywgYXJncyApO1xyXG4gICAgICAgIH0gKTtcclxuICAgICAgfSApO1xyXG4gICAgfSApO1xyXG4gICAgLy90cmlnZ2VyU2NlbmVMb2FkZWRFdmVudFxyXG4gICAgdGhpcy5zY2VuZUxvYWRlZEhhbmRsZXIoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IEdyaWR+c2NlbmVEYXRhXHJcbiAgICogQHByb3BlcnR5IHtBcnJheVtdfSBkZXRhY2hlZCAtIEFycmF5IGNvbnRhaW5pbmcgZGF0YSBmb3IgYSBkZXRhY2hlZCBlbnRpdHlcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gZGV0YWNoZWQuMCAtIE5hbWUgb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzXHJcbiAgICogQHByb3BlcnR5IHthbnl9IGRldGFjaGVkLjEgLSBFbnRpdHkgcGFyYW1zXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGRldGFjaGVkLjIgLSBQb3NpdGlvbiBvZiB0aGUgZGV0YWNoZWQgRW50aXR5XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtkZXRhY2hlZC4yLmM9MF0gLSBDIHBvc2l0aW9uXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtkZXRhY2hlZC4yLnI9MF0gLSBSIHBvc2l0aW9uXHJcbiAgICogQHByb3BlcnR5IHtBcnJheVtdW119IGF0dGFjaGVkIC0gQXJyYXkgaW5zaWRlIGEgMkQgYXJyYXkgcmVwcmVzZW50aW5nIGFsbCBbYywgcl0gdGlsZXMgb24gdGhlIGdyaWQgY29udGFpbmluZyBkYXRhIGZvciBhbiBhdHRhY2hlZCBlbnRpdHlcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYXR0YWNoZWQuMCAtIE5hbWUgb2YgdGhlIEN1c3RvbUVudGl0eUNsYXNzXHJcbiAgICogQHByb3BlcnR5IHthbnl9IGF0dGFjaGVkLjEgLSBFbnRpdHkgcGFyYW1zXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIGNsZWFycyB0aGUgU2NlbmUsIGFsbCBlbnRpdGVzIGdldCBkZWxldGVkXHJcbiAgICovXHJcbiAgY2xlYXJTY2VuZSgpe1xyXG4gICAgdGhpcy5hbGxFbnRpdHlJbnN0YW5jZXMgPSBbXTtcclxuICAgIHRoaXMuZW50aXR5RGF0YSA9IHt9O1xyXG4gICAgdGhpcy5ncmlkRGF0YSA9IHRoaXMuc2V0dXBHcmlkRGF0YSgpO1xyXG4gICAgdGhpcy5kZXRhY2hlZERhdGEgPSBbXTtcclxuICAgIHRoaXMubGF5ZXJEYXRhID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyU3RhcnRTdWJzY3JpcHRpb25zID0gW107XHJcbiAgICB0aGlzLnRvdWNoU3dpcGVTdWJzY3JpcHRpb25zID0gW107XHJcbiAgICB0aGlzLnNjZW5lTG9hZGVkU3Vic2NyaXB0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5rZXlEb3duU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5rZXlVcFN1YnNjcmlwdGlvbnMgPSB7fTtcclxuICAgIHRoaXMubW91c2VEb3duU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5tb3VzZVVwU3Vic2NyaXB0aW9ucyA9IHt9O1xyXG4gICAgdGhpcy5tb3VzZU1vdmVTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLm1vdXNlRW50ZXJTdWJzY3JpcHRpb25zID0ge307XHJcbiAgICB0aGlzLm1vdXNlTGVhdmVTdWJzY3JpcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBncmlkIGFzIHNjZW5lRGF0YS4gSWYgeW91IGhhdmUgZW50aXRlcyB3aGljaCBzaG91bGQgc2F2ZSBwYXJhbWV0ZXJzIGluIHRoZSBzY2VuZURhdGEsIHVzZSAob3ZlcndyaXRlKSB0aGUgZ2V0Q3VycmVudFBhcmFtcyBtZXRob2Qgb2YgRW50aXR5LiBJZiB5b3UgaGF2ZSBFbnRpdGllcyB3aGljaCBzaG91bGRuJ3QgYmUgaW5jbHVkZWQgaW4gdGhlIHNjZW5lRGF0YSwgb3ZlcndyaXRlIHRoZXIgaW5jbHVkZUluU2NlbmVEYXRhIE1ldGhvZCB0byByZXR1cm4gZmFsc2U7XHJcbiAgICogQHJldHVybnMge0dyaWR+c2NlbmVEYXRhfVxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRTY2VuZURhdGEoKXtcclxuICAgIGNvbnN0IHNjZW5lRGF0YSA9IHtcclxuICAgICAgZGV0YWNoZWQ6IFtdLFxyXG4gICAgICB0aWxlczogW11cclxuICAgIH1cclxuICAgIC8vZGV0YWNoZWRcclxuXHJcbiAgICAvL3RpbGVzXHJcbiAgICB0aGlzLmdyaWREYXRhLmZvckVhY2goIChjRGF0YSwgYykgPT4ge1xyXG4gICAgICBzY2VuZURhdGEudGlsZXMucHVzaChbXSk7XHJcbiAgICAgIGNEYXRhLmZvckVhY2goICh0aWxlRGF0YSwgcikgPT4ge1xyXG4gICAgICAgIHNjZW5lRGF0YS50aWxlc1tjXVtyXSA9IHRpbGVEYXRhLmZpbHRlciggZSA9PiBlLmluY2x1ZGVJblNjZW5lRGF0YSgpICkubWFwKCBlbnRpdHlJbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gW2VudGl0eUluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUsIGVudGl0eUluc3RhbmNlLmdldEN1cnJlbnRQYXJhbXMoKV07XHJcbiAgICAgICAgfSApO1xyXG4gICAgICB9ICk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4gc2NlbmVEYXRhO1xyXG4gIH1cclxuXHJcbiAgLy9vbmx5IHVzZWQgYnkgZ3JpZCBtb3VzZSBldmVudCB4RFxyXG4gIHJlc2V0TW91c2UoKXtcclxuICAgIHRoaXMubW91c2UgPSB7XHJcbiAgICAgIGRpc3BsYXlOYW1lOiBudWxsLFxyXG4gICAgICBkb3duOiBmYWxzZSxcclxuICAgICAgYzogMCwgcjogMCxcclxuICAgIH07XHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEdyaWdhXHJcbiAqIEB2ZXJzaW9uIDEuMC4wXHJcbiAqIEBhdXRob3IgVG9tIEtvcG9sdFxyXG4gKiBwYXVsLWdvYmxpbiBvbiBHaXRIdWJcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCc7XHJcblxyXG5jb25zdCBKb2kgPSByZXF1aXJlKCdAaGFwaS9qb2knKTtcclxuXHJcbmNvbnN0IHdyYXBwZXJJZEV4aXN0cyA9ICh3cmFwcGVySWQpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod3JhcHBlcklkKTtcclxuICBpZiAod3JhcHBlcikge3JldHVybiB3cmFwcGVySWR9O1xyXG4gIHRocm93IG5ldyBFcnJvcihgdGhlcmUncyBubyBIVE1MLUVsZW1lbnQgd2l0aCB3cmFwcGVySWQgJHt3cmFwcGVySWR9YCk7XHJcbn1cclxuLyoqXHJcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIENvbXBsZXRlIEdhbWUsIGluY2x1ZGluZyBMb2dpYyBhbmQgR3JhcGhpY3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlnYSB7XHJcblxyXG4gIC8vY29uZmlnU2NoZW1hXHJcbiAgc3RhdGljIGdldCBjb25maWdTY2hlbWEoKXtcclxuICAgIHJldHVybiBKb2kub2JqZWN0KCB7XHJcbiAgICAgIC8vZGlzcGxheXNcclxuICAgICAgZGlzcGxheXM6IEpvaS5hcnJheSgpLml0ZW1zKCBKb2kub2JqZWN0KCB7XHJcbiAgICAgICAgICBuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgIHdyYXBwZXJJZDogSm9pLmFueSgpLnJlcXVpcmVkKCkuY3VzdG9tKCB3cmFwcGVySWRFeGlzdHMsICd3cmFwcGVySWQgdmFsaWRhdGlvbicgKSxcclxuICAgICAgICAgIHdpZHRoSGVpZ2h0UmF0aW86IEpvaS5udW1iZXIoKS5kZWZhdWx0KDEpLC8vaW4gKGZyYWN0aW9uIG9mIHJlc3BvbnNpdmUgdGlsZVdpZHRoKSwgMSBmb3Igc3F1YXJlXHJcbiAgICAgIH0gKSApLFxyXG4gICAgICAvL2dyaWRzXHJcbiAgICAgIGdyaWRzOiBKb2kuYXJyYXkoKS5pdGVtcyggSm9pLm9iamVjdCgge1xyXG4gICAgICAgIG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgIGNvbHVtbnM6IEpvaS5udW1iZXIoKS5pbnRlZ2VyKCkuZGVmYXVsdCgxKSxcclxuICAgICAgICByb3dzOiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLmRlZmF1bHQoMSksXHJcbiAgICB9ICkgKSxcclxuICAgICAgLy9lbnRpdGllc1xyXG4gICAgICBlbnRpdGllczogSm9pLmFycmF5KCkuaXRlbXMoIEpvaS5mdW5jdGlvbigpLmNsYXNzKCkgKS5yZXF1aXJlZCgpLCAvL25vIGdvb2QgdmFsaWRhdGlvbiB5ZXRcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgZGlzcGxheVNldHRpbmdzU2NoZW1hKCl7XHJcbiAgICByZXR1cm4gSm9pLm9iamVjdCgge1xyXG4gICAgICB0b3A6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICBsZWZ0OiBKb2kubnVtYmVyKCkuZGVmYXVsdCgwKSxcclxuICAgICAgd2lkdGg6IEpvaS5udW1iZXIoKS5taW4oMCkuZGVmYXVsdCgxKSxcclxuICAgICAgaGVpZ2h0OiBKb2kubnVtYmVyKCkubWluKDApLmRlZmF1bHQoMSksXHJcbiAgICAgIGNvbHVtbnNPblNjcmVlbjogSm9pLm51bWJlcigpLm1pbigxKS5kZWZhdWx0KDEpLFxyXG4gICAgICByb3dzT25TY3JlZW46IEpvaS5udW1iZXIoKS5taW4oMSkuZGVmYXVsdCgxKSxcclxuICAgICAgY29sdW1uU2hpZnQ6IEpvaS5udW1iZXIoKS5kZWZhdWx0KDApLFxyXG4gICAgICByb3dTaGlmdDogSm9pLm51bWJlcigpLmRlZmF1bHQoMCksXHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAY2FsbGJhY2sgR3JpZ2F+aW1hZ2VzTG9hZGVkQ2FsbGJhY2tcclxuICAgKiBAcGFyYW0ge0dyaWdhfSBncmlnYSAtIFRoZSBHcmlnYSBpbnN0YW5jZSBcclxuICAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge09iamVjdH0gRW50aXR5fkN1c3RvbUVudGl0eUNsYXNzIC0gQ3VzdG9tIENsYXNzZXMgZXh0ZW5kaW5nIEVudGl0eVxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gVGhlIGdyaWdhIGNvbmZpZyBvYmplY3RcclxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBjb25maWcuZGlzcGxheXMgLSBBcnJheSBvZiBkaXNwbGF5IHNldHRpbmcgb2JqZWN0cy4gRm9yIGVhY2ggb2JqZWN0IEdyaWdhIGNyZWF0ZXMgYSBjb3JyZXNwb25kaW5nIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmRpc3BsYXlzW10ubmFtZSAtIE5hbWUgb2YgdGhlIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmRpc3BsYXlzW10ud3JhcHBlcklkIC0gSWQgb2YgdGhlIEhUTUwgZWxlbWVudCB1c2VkIGFzIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5kaXNwbGF5c1tdLndpZHRoSGVpZ2h0UmF0aW89MV0gLSBUaGUgZGlzcGxheSdzIGhlaWdodCByZWxhdGl2ZSB0byBpdHMgd2lkdGhcclxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBjb25maWcuZ3JpZHMgLSBBcnJheSBvZiBncmlkIHNldHRpbmcgb2JqZWN0cy4gRm9yIGVhY2ggb2JqZWN0IEdyaWdhIGNyZWF0ZXMgYSBjb3JyZXNwb25kaW5nIGdyaWRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmdyaWRzW10ubmFtZSAtIE5hbWUgb2YgdGhlIGdyaWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5ncmlkc1tdLmNvbHVtbnM9MV0gLSBOdW1iZXIgb2YgY29sdW1uc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLmdyaWRzW10ucm93cz0xXSAtIE51bWJlciBvZiByb3dzXHJcbiAgICogQHBhcmFtIHtFbnRpdHl+Q3VzdG9tRW50aXR5Q2xhc3NbXX0gY29uZmlnLmVudGl0aWVzIC0gQXJyYXkgb2YgYWxsIEN1c3RvbUVudGl0eUNsYXNzZXMgR3JpZ2Egc2hvdWxkIHVzZVxyXG4gICAqIEBwYXJhbSB7R3JpZ2F+aW1hZ2VzTG9hZGVkQ2FsbGJhY2t9IGNiIC0gVGhlIGNhbGxiYWNrIHRyaWdnZXJzIHdoZW4gYWxsIHRoZSBJbWFnZXMgYXJlIExvYWRlZFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKCBjb25maWcsIGltYWdlc0xvYWRlZENhbGxiYWNrICl7XHJcbiAgICAvL3ZhbGlkYXRlIENvbmZpZ1xyXG4gICAgbGV0IHZhbGlkQ29uZmlnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdmFsaWRDb25maWcgPSBKb2kuYXR0ZW1wdCggY29uZmlnLCBHcmlnYS5jb25maWdTY2hlbWEgKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgIGUubmFtZSA9ICdHcmlnYUNvbmZpZ0Vycm9yJztcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy9kZWNsYXJlIGFsbCB2YXJpYWJsZXNcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIENvbnRhaW5zIHJlZmVyZW5jZXMgdG8gYWxsIGRpc3BsYXlzLiBUaGUgZGlzcGxheSdzIG5hbWUgaXMgdXNlZCBhcyBrZXlcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBtZW1iZXIge09iamVjdC48c3RyaW5nLCBEaXNwbGF5Pn1cclxuICAgICAqL1xyXG4gICAgdGhpcy5kaXNwbGF5cyA9IHRoaXMuc2V0dXBEaXNwbGF5cyggdmFsaWRDb25maWcuZGlzcGxheXMgKTtcclxuICAgIC8qKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIENvbnRhaW5zIHJlZmVyZW5jZXMgdG8gYWxsIGdyaWRzLiBUaGUgZ3JpZHMncyBuYW1lIGlzIHVzZWQgYXMga2V5XHJcbiAgICAgKiBAcHVibGljXHJcbiAgICAgKiBAbWVtYmVyIHtPYmplY3QuPHN0cmluZywgR3JpZD59XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ3JpZHMgPSB0aGlzLnNldHVwR3JpZHMoIHZhbGlkQ29uZmlnLmdyaWRzICk7XHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBDb250YWlucyByZWZlcmVuY2VzIHRvIGFsbCBDdXN0b21FbnRpdHlDbGFzc2VzLiBUaGUgZW50aXRpZSdzIG5hbWUgaXMgdXNlZCBhcyBrZXlcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBtZW1iZXIge09iamVjdC48c3RyaW5nLCBFbnRpdHl+Q3VzdG9tRW50aXR5Q2xhc3M+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLmVudGl0aWVzID0gT2JqZWN0LmZyb21FbnRyaWVzKCB2YWxpZENvbmZpZy5lbnRpdGllcy5tYXAoXHJcbiAgICAgIGVudGl0eSA9PiBbZW50aXR5Lm5hbWUsIGVudGl0eV1cclxuICAgICkgKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBMaXN0IG9mIGFsbCBLZXlzIHdoaWNoIGFyZSBjdXJyZW50bHkgcHJlc3NlZCBvbiB0aGUga2V5Ym9hcmRcclxuICAgICAqIEBwdWJsaWNcclxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmtleXNQcmVzc2VkID0gW107XHJcblxyXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgLy9sb2FkSW1hZ2VzXHJcbiAgICB0aGlzLmltYWdlc0xvYWRlZENhbGxiYWNrID0gaW1hZ2VzTG9hZGVkQ2FsbGJhY2s7XHJcbiAgICB0aGlzLmxvYWRJbWFnZXMoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4gdGhpcy5yZW5kZXIoKSApO1xyXG4gIH1cclxuXHJcbiAgLy9zZXR1cFxyXG4gIHNldHVwRGlzcGxheXMoIGRpc3BsYXlzQ29uZmlnICl7XHJcbiAgICBjb25zdCBkaXNwbGF5cyA9IHt9O1xyXG4gICAgZGlzcGxheXNDb25maWcuZm9yRWFjaCggZGlzcGxheUNvbmZpZyA9PiB7XHJcbiAgICAgIGRpc3BsYXlzWyBkaXNwbGF5Q29uZmlnLm5hbWUgXSA9IG5ldyBEaXNwbGF5KCBkaXNwbGF5Q29uZmlnICk7XHJcbiAgICB9ICk7XHJcbiAgICByZXR1cm4gZGlzcGxheXM7XHJcbiAgfVxyXG5cclxuICBzZXR1cEdyaWRzKCBncmlkc0NvbmZpZyApe1xyXG4gICAgY29uc3QgZ3JpZHMgPSB7fTtcclxuICAgIGdyaWRzQ29uZmlnLmZvckVhY2goIGdyaWRDb25maWcgPT4ge1xyXG4gICAgICBncmlkc1sgZ3JpZENvbmZpZy5uYW1lIF0gPSBuZXcgR3JpZCggZ3JpZENvbmZpZywgdGhpcyApO1xyXG4gICAgfSApO1xyXG4gICAgcmV0dXJuIGdyaWRzO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBFdmVudExpc3RlbmVycygpe1xyXG4gICAgdGhpcy5rZXlzUHJlc3NlZCA9IFtdO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChlKSA9PiB7dGhpcy5yZXNpemVEaXNwbGF5cygpfSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4gdGhpcy5rZXlEb3duSGFuZGxlcihlKSApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHRoaXMua2V5VXBIYW5kbGVyKGUpICk7XHJcbiAgfVxyXG5cclxuICAvL2xvYWQgSW1hZ2VzXHJcbiAgaW1hZ2VMb2FkZWQoKXtcclxuICAgIGlmICgtLXRoaXMuaW1hZ2VzVG9Mb2FkID09PSAwKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VzTG9hZGVkQ2FsbGJhY2soIHRoaXMgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvYWRJbWFnZXMoKXtcclxuICAgIHRoaXMuaW1hZ2VzVG9Mb2FkID0gMDtcclxuICAgIE9iamVjdC52YWx1ZXMoIHRoaXMuZW50aXRpZXMgKS5mb3JFYWNoKCBlbnRpdHkgPT4ge1xyXG4gICAgICB0aGlzLmltYWdlc1RvTG9hZCArPSBPYmplY3Qua2V5cyhlbnRpdHkuaW1nU291cmNlcykubGVuZ3RoO1xyXG4gICAgfSApO1xyXG4gICAgaWYgKHRoaXMuaW1hZ2VzVG9Mb2FkID09PSAwKSB7IHRoaXMuaW1hZ2VzTG9hZGVkQ2FsbGJhY2soIHRoaXMgKSB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgT2JqZWN0LnZhbHVlcyggdGhpcy5lbnRpdGllcyApLmZvckVhY2goIGVudGl0eSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmxvYWRJbWFnZXMoICgpID0+IHt0aGlzLmltYWdlTG9hZGVkKCl9ICk7XHJcbiAgICAgIH0gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgcmVuZGVyU3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgIC8vcmVuZGVyIGVhY2ggRGlzcGxheVxyXG4gICAgT2JqZWN0LnZhbHVlcyggdGhpcy5kaXNwbGF5cyApLmZvckVhY2goIFxyXG4gICAgICBkaXNwbGF5ID0+IGRpc3BsYXkucmVuZGVyKClcclxuICAgICk7XHJcbiAgICAvL2NoZWNrIGZvciBtc3B0XHJcbiAgICBjb25zdCBtc3B0ID0gcGVyZm9ybWFuY2Uubm93KCkgLSByZW5kZXJTdGFydDtcclxuICAgIGlmIChtc3B0ID4gMykge1xyXG4gICAgICBjb25zb2xlLndhcm4oICdtc3B0OiAnICsgKHBlcmZvcm1hbmNlLm5vdygpIC0gcmVuZGVyU3RhcnQpICk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHRoaXMucmVuZGVyKCkgKTtcclxuICB9XHJcblxyXG4gIC8vSGFuZGxlclxyXG4gIGtleURvd25IYW5kbGVyKCBlICl7XHJcbiAgICBpZiAoIXRoaXMua2V5c1ByZXNzZWQuaW5jbHVkZXMoIGUua2V5ICkpIHtcclxuICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdyaWRzKS5mb3JFYWNoKCBncmlkID0+IHtcclxuICAgICAgICBncmlkLmtleURvd25IYW5kbGVyKCBlICk7XHJcbiAgICAgIH0gKTtcclxuICAgICAgdGhpcy5rZXlzUHJlc3NlZC5wdXNoKCBlLmtleSApO1xyXG4gICAgfVxyXG4gIH1cclxuICBrZXlVcEhhbmRsZXIoIGUgKXtcclxuICAgIE9iamVjdC52YWx1ZXModGhpcy5ncmlkcykuZm9yRWFjaCggZ3JpZCA9PiB7XHJcbiAgICAgIGdyaWQua2V5VXBIYW5kbGVyKCBlICk7XHJcbiAgICB9ICk7XHJcbiAgICB0aGlzLmtleXNQcmVzc2VkLnNwbGljZSggdGhpcy5rZXlzUHJlc3NlZC5pbmRleE9mKGUua2V5KSwgMSApO1xyXG4gIH1cclxuXHJcbi8vUFVCTElDIHhEXHJcblxyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IGRpc3BsYXlTZXR0aW5nc1xyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbbGVmdCA9IDBdIC0gTGVmdCBvZmZzZXQgb2YgdGhlIGdyaWQgaW4gJSBvZiBkaXNwbGF5IHdpZHRoIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbdG9wID0gMF0gLSBUb3Agb2Zmc2V0IG9mIHRoZSBncmlkIGluICUgb2YgZGlzcGxheSBoZWlnaHRcclxuICAgICBAcHJvcGVydHkge251bWJlcn0gW3dpZHRoID0gMV0gLSBXaWR0aCBvZiB0aGUgZ3JpZCBpbiAlIG9mIGRpc3BsYXkgd2lkdGggXHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtoZWlnaHQgPSAxXSAtIEhlaWdodCBvZiB0aGUgZ3JpZCBpbiAlIG9mIGRpc3BsYXkgaGVpZ2h0IFxyXG4gICAgIEBwcm9wZXJ0eSB7bnVtYmVyfSBbY29sdW1uc09uU2NyZWVuID0gMV0gLSBUaGUgbnVtYmVyIG9mIGNvbHVtbnMgd2hpY2ggZml0IGludG8gdGhlIGdyaWRzIHdpZHRoXHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtyb3dzT25TY3JlZW4gPSAxXSAtIFRoZSBudW1iZXIgb2Ygcm93cyB3aGljaCBmaXQgaW50byB0aGUgZ3JpZHMgaGVpZ2h0XHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtjb2x1bW5TaGlmdCA9IDBdIC0gVGhlIG51bWJlciBvZiBjb2x1bW5zIHRoZSBHcmlkIHNob3VsZCBiZSBzaGlmdGVkIGluIGMgZGlyZWN0aW9uXHJcbiAgICAgQHByb3BlcnR5IHtudW1iZXJ9IFtyb3dTaGlmdCA9IDFdIC0gVGhlIG51bWJlciBvZiByb3dzIHRoZSBHcmlkIHNob3VsZCBiZSBzaGlmdGVkIGluIHIgZGlyZWN0aW9uXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIGEgZ3JpZCBvbiBhIGRpc3BsYXlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBEaXNwbGF5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdyaWROYW1lIC0gTmFtZSBvZiB0aGUgR3JpZFxyXG4gICAqIEBwYXJhbSB7ZGlzcGxheVNldHRpbmdzfSBkaXNwbGF5U2V0dGluZ3MgLSBPYmplY3QgY29udGFpbmluZyBhbGwgeW91ciBkaXNwbGF5U2V0dGluZ3NcclxuICAgKi9cclxuICBkaXNwbGF5R3JpZCggZGlzcGxheU5hbWUsIGdyaWROYW1lLCBkaXNwbGF5U2V0dGluZ3MgKXtcclxuICAgIC8vdmFsaWRhdGUgZGlzcGxheVNldHRpbmdzXHJcbiAgICBsZXQgdmFsaWREaXNwbGF5U2V0dGluZ3M7XHJcbiAgICB0cnkge1xyXG4gICAgICB2YWxpZERpc3BsYXlTZXR0aW5ncyA9IEpvaS5hdHRlbXB0KCBkaXNwbGF5U2V0dGluZ3MsIEdyaWdhLmRpc3BsYXlTZXR0aW5nc1NjaGVtYSApO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgZS5uYW1lID0gJ0Rpc3BsYXlTZXR0aW5nc0Vycm9yJztcclxuICAgICAgY29uc29sZS5lcnJvcihgJHtlLm5hbWV9OiAke2UubWVzc2FnZX1gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kaXNwbGF5c1sgZGlzcGxheU5hbWUgXS5saW5rR3JpZCggdGhpcy5ncmlkc1sgZ3JpZE5hbWUgXSwgdmFsaWREaXNwbGF5U2V0dGluZ3MgKTtcclxuICAgIHRoaXMuZ3JpZHNbIGdyaWROYW1lIF0uZGlzcGxheXNbIGRpc3BsYXlOYW1lIF0gPSB0aGlzLmRpc3BsYXlzWyBkaXNwbGF5TmFtZSBdO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgZ3JpZCBmcm9tIGEgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBncmlkTmFtZSAtIE5hbWUgb2YgdGhlIEdyaWRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheU5hbWUgLSBOYW1lIG9mIHRoZSBEaXNwbGF5XHJcbiAgICovXHJcbiAgcmVtb3ZlR3JpZEZyb21EaXNwbGF5KCBncmlkTmFtZSwgZGlzcGxheU5hbWUgKXtcclxuICAgIHRoaXMuZGlzcGxheXNbIGRpc3BsYXlOYW1lIF0udW5saW5rR3JpZCggZ3JpZE5hbWUgKTtcclxuICAgIGRlbGV0ZSB0aGlzLmdyaWRzWyBncmlkTmFtZSBdLmRpc3BsYXlzWyBkaXNwbGF5TmFtZSBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIG5ldyBEaXNwbGF5IHRvIGdyaWdhLmRpc3BsYXlzLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTmFtZSBvZiB0aGUgRGlzcGxheVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB3cmFwcGVySWQgLSBJZCBvZiB0aGUgaHRtbC1lbGVtZW50IGZvciB0aGUgZGlzcGxheVxyXG4gICAqIEBwYXJhbSB7Kn0gd2lkdGhIZWlnaHRSYXRpbyAtV2lkdGggSGVpZ2h0IHJhdGlvXHJcbiAgICovXHJcbiAgbmV3RGlzcGxheSggbmFtZSwgd3JhcHBlcklkLCB3aWR0aEhlaWdodFJhdGlvID0gMSApe1xyXG4gICAgdGhpcy5kaXNwbGF5c1sgbmFtZSBdID0gbmV3IERpc3BsYXkoIHtcclxuICAgICAgbmFtZSwgd3JhcHBlcklkLCB3aWR0aEhlaWdodFJhdGlvXHJcbiAgICB9ICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWxldGVzIGEgRGlzcGxheSBhbmQgYWxsIGl0cyBMaW5rcyB0byBHcmlkc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFxyXG4gICAqL1xyXG4gIGRlbGV0ZURpc3BsYXkoIG5hbWUgKXtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuZGlzcGxheXNbbmFtZV0ubGlua2VkR3JpZHMpLmZvckVhY2goIGdyaWQgPT4ge1xyXG4gICAgICBkZWxldGUgdGhpcy5ncmlkc1sgZ3JpZCBdLmRpc3BsYXlzWyBuYW1lIF07XHJcbiAgICB9ICk7XHJcbiAgICBkZWxldGUgdGhpcy5kaXNwbGF5c1tuYW1lXTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZURpc3BsYXlzKCl7XHJcbiAgICBPYmplY3QudmFsdWVzKCB0aGlzLmRpc3BsYXlzICkuZm9yRWFjaCggXHJcbiAgICAgIGRpc3BsYXkgPT4gZGlzcGxheS5yZXNpemUoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==