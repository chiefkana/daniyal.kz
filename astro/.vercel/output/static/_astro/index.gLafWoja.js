var g={exports:{}},u={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=m&&t[m]||t["@@iterator"],typeof t=="function"?t:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,H={};function _(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||O}_.prototype.isReactComponent={};_.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function P(){}P.prototype=_.prototype;function d(t,e,n){this.props=t,this.context=e,this.refs=H,this.updater=n||O}var R=d.prototype=new P;R.constructor=d;j(R,_.prototype);R.isPureReactComponent=!0;var C=Array.isArray,f={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function v(t,e,n,r,s,i){return n=i.ref,{$$typeof:y,type:t,key:e,ref:n!==void 0?n:null,props:i}}function z(t,e){return v(t.type,e,void 0,void 0,void 0,t.props)}function T(t){return typeof t=="object"&&t!==null&&t.$$typeof===y}function G(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var w=/\/+/g;function E(t,e){return typeof t=="object"&&t!==null&&t.key!=null?G(""+t.key):e.toString(36)}function A(){}function K(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(A,A):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function a(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case y:case Y:o=!0;break;case h:return o=t._init,a(o(t._payload),e,n,r,s)}}if(o)return s=s(t),o=r===""?"."+E(t,0):r,C(s)?(n="",o!=null&&(n=o.replace(w,"$&/")+"/"),a(s,e,n,"",function(N){return N})):s!=null&&(T(s)&&(s=z(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+o)),e.push(s)),1;o=0;var p=r===""?".":r+":";if(C(t))for(var c=0;c<t.length;c++)r=t[c],i=p+E(r,c),o+=a(r,e,n,i,s);else if(c=q(t),typeof c=="function")for(t=c.call(t),c=0;!(r=t.next()).done;)r=r.value,i=p+E(r,c++),o+=a(r,e,n,i,s);else if(i==="object"){if(typeof t.then=="function")return a(K(t),e,n,r,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function l(t,e,n){if(t==null)return t;var r=[],s=0;return a(t,r,"","",function(i){return e.call(n,i,s++)}),r}function B(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var S=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function W(){}u.Children={map:l,forEach:function(t,e,n){l(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return l(t,function(){e++}),e},toArray:function(t){return l(t,function(e){return e})||[]},only:function(t){if(!T(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};u.Component=_;u.Fragment=x;u.Profiler=k;u.PureComponent=d;u.StrictMode=M;u.Suspense=b;u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f;u.act=function(){throw Error("act(...) is not supported in production builds of React.")};u.cache=function(t){return function(){return t.apply(null,arguments)}};u.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=j({},t.props),s=t.key,i=void 0;if(e!=null)for(o in e.ref!==void 0&&(i=void 0),e.key!==void 0&&(s=""+e.key),e)!$.call(e,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&e.ref===void 0||(r[o]=e[o]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var p=Array(o),c=0;c<o;c++)p[c]=arguments[c+2];r.children=p}return v(t.type,s,void 0,void 0,i,r)};u.createContext=function(t){return t={$$typeof:L,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:I,_context:t},t};u.createElement=function(t,e,n){var r,s={},i=null;if(e!=null)for(r in e.key!==void 0&&(i=""+e.key),e)$.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(s[r]=e[r]);var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){for(var p=Array(o),c=0;c<o;c++)p[c]=arguments[c+2];s.children=p}if(t&&t.defaultProps)for(r in o=t.defaultProps,o)s[r]===void 0&&(s[r]=o[r]);return v(t,i,void 0,void 0,null,s)};u.createRef=function(){return{current:null}};u.forwardRef=function(t){return{$$typeof:U,render:t}};u.isValidElement=T;u.lazy=function(t){return{$$typeof:h,_payload:{_status:-1,_result:t},_init:B}};u.memo=function(t,e){return{$$typeof:D,type:t,compare:e===void 0?null:e}};u.startTransition=function(t){var e=f.T,n={};f.T=n;try{var r=t(),s=f.S;s!==null&&s(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(W,S)}catch(i){S(i)}finally{f.T=e}};u.unstable_useCacheRefresh=function(){return f.H.useCacheRefresh()};u.use=function(t){return f.H.use(t)};u.useActionState=function(t,e,n){return f.H.useActionState(t,e,n)};u.useCallback=function(t,e){return f.H.useCallback(t,e)};u.useContext=function(t){return f.H.useContext(t)};u.useDebugValue=function(){};u.useDeferredValue=function(t,e){return f.H.useDeferredValue(t,e)};u.useEffect=function(t,e){return f.H.useEffect(t,e)};u.useId=function(){return f.H.useId()};u.useImperativeHandle=function(t,e,n){return f.H.useImperativeHandle(t,e,n)};u.useInsertionEffect=function(t,e){return f.H.useInsertionEffect(t,e)};u.useLayoutEffect=function(t,e){return f.H.useLayoutEffect(t,e)};u.useMemo=function(t,e){return f.H.useMemo(t,e)};u.useOptimistic=function(t,e){return f.H.useOptimistic(t,e)};u.useReducer=function(t,e,n){return f.H.useReducer(t,e,n)};u.useRef=function(t){return f.H.useRef(t)};u.useState=function(t){return f.H.useState(t)};u.useSyncExternalStore=function(t,e,n){return f.H.useSyncExternalStore(t,e,n)};u.useTransition=function(){return f.H.useTransition()};u.version="19.0.0";g.exports=u;var Q=g.exports;export{Q as r};
