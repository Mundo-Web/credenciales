import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{c as M}from"./ReactAppend-CwiwA4iz.js";import{r as d}from"./index-DFv2mRv-.js";import{J as G}from"./JSEncrypt-D3I3x59l.js";import{C as V}from"./CreateReactScript-yWJ4gJYl.js";import{A as W}from"./AuthRest-NEu16Tw2.js";import{P as h}from"./index-Cevqm-zP.js";import{h as B}from"./hoist-non-react-statics.cjs-CgXjTu_P.js";import{a as J}from"./index.esm-B502ZfUP.js";import{S as H}from"./SelectFormGroup-CEMe1OMM.js";import{M as K}from"./Modal-MESba8ek.js";import{H as Y}from"./HtmlContent-BY9uANKo.js";import{S as z}from"./sweetalert2.all-DCeKQPlA.js";import{l as Q}from"./logo-BjQK9OLG.js";import"./index-DgyC5pTR.js";import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";/* empty css               *//* empty css              */var X=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function P(){return P=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},P.apply(this,arguments)}function Z(n,i){if(n==null)return{};var a={},r=Object.keys(n),t,c;for(c=0;c<r.length;c++)t=r[c],!(i.indexOf(t)>=0)&&(a[t]=n[t]);return a}function I(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function ee(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,T(n,i)}function T(n,i){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,t){return r.__proto__=t,r},T(n,i)}var F=function(n){ee(i,n);function i(){var r;return r=n.call(this)||this,r.handleExpired=r.handleExpired.bind(I(r)),r.handleErrored=r.handleErrored.bind(I(r)),r.handleChange=r.handleChange.bind(I(r)),r.handleRecaptchaRef=r.handleRecaptchaRef.bind(I(r)),r}var a=i.prototype;return a.getCaptchaFunction=function(t){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[t]:this.props.grecaptcha[t]:null},a.getValue=function(){var t=this.getCaptchaFunction("getResponse");return t&&this._widgetId!==void 0?t(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},a.execute=function(){var t=this.getCaptchaFunction("execute");if(t&&this._widgetId!==void 0)return t(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var t=this;return new Promise(function(c,y){t.executionResolve=c,t.executionReject=y,t.execute()})},a.reset=function(){var t=this.getCaptchaFunction("reset");t&&this._widgetId!==void 0&&t(this._widgetId)},a.forceReset=function(){var t=this.getCaptchaFunction("reset");t&&t()},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(t){this.props.onChange&&this.props.onChange(t),this.executionResolve&&(this.executionResolve(t),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){var t=this.getCaptchaFunction("render");if(t&&this._widgetId===void 0){var c=document.createElement("div");this._widgetId=t(c,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(c)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.handleRecaptchaRef=function(t){this.captcha=t},a.render=function(){var t=this.props;t.sitekey,t.onChange,t.theme,t.type,t.tabindex,t.onExpired,t.onErrored,t.size,t.stoken,t.grecaptcha,t.badge,t.hl,t.isolated;var c=Z(t,X);return d.createElement("div",P({},c,{ref:this.handleRecaptchaRef}))},i}(d.Component);F.displayName="ReCAPTCHA";F.propTypes={sitekey:h.string.isRequired,onChange:h.func,grecaptcha:h.object,theme:h.oneOf(["dark","light"]),type:h.oneOf(["image","audio"]),tabindex:h.number,onExpired:h.func,onErrored:h.func,size:h.oneOf(["compact","normal","invisible"]),stoken:h.string,hl:h.string,badge:h.oneOf(["bottomright","bottomleft","inline"]),isolated:h.bool};F.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function D(){return D=Object.assign||function(n){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},D.apply(this,arguments)}function te(n,i){if(n==null)return{};var a={},r=Object.keys(n),t,c;for(c=0;c<r.length;c++)t=r[c],!(i.indexOf(t)>=0)&&(a[t]=n[t]);return a}function re(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i}var f={},ne=0;function ie(n,i){return i=i||{},function(r){var t=r.displayName||r.name||"Component",c=function(R){re(x,R);function x(v,o){var s;return s=R.call(this,v,o)||this,s.state={},s.__scriptURL="",s}var g=x.prototype;return g.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+ne++),this.__scriptLoaderID},g.setupScriptURL=function(){return this.__scriptURL=typeof n=="function"?n():n,this.__scriptURL},g.asyncScriptLoaderHandleLoad=function(o){var s=this;this.setState(o,function(){return s.props.asyncScriptOnLoad&&s.props.asyncScriptOnLoad(s.state)})},g.asyncScriptLoaderTriggerOnScriptLoaded=function(){var o=f[this.__scriptURL];if(!o||!o.loaded)throw new Error("Script is not loaded.");for(var s in o.observers)o.observers[s](o);delete window[i.callbackName]},g.componentDidMount=function(){var o=this,s=this.setupScriptURL(),l=this.asyncScriptLoaderGetScriptLoaderID(),m=i,L=m.globalName,w=m.callbackName,O=m.scriptId;if(L&&typeof window[L]<"u"&&(f[s]={loaded:!0,observers:{}}),f[s]){var j=f[s];if(j&&(j.loaded||j.errored)){this.asyncScriptLoaderHandleLoad(j);return}j.observers[l]=function(p){return o.asyncScriptLoaderHandleLoad(p)};return}var S={};S[l]=function(p){return o.asyncScriptLoaderHandleLoad(p)},f[s]={loaded:!1,observers:S};var b=document.createElement("script");b.src=s,b.async=!0;for(var E in i.attributes)b.setAttribute(E,i.attributes[E]);O&&(b.id=O);var C=function(u){if(f[s]){var N=f[s],_=N.observers;for(var k in _)u(_[k])&&delete _[k]}};w&&typeof window<"u"&&(window[w]=function(){return o.asyncScriptLoaderTriggerOnScriptLoaded()}),b.onload=function(){var p=f[s];p&&(p.loaded=!0,C(function(u){return w?!1:(u(p),!0)}))},b.onerror=function(){var p=f[s];p&&(p.errored=!0,C(function(u){return u(p),!0}))},document.body.appendChild(b)},g.componentWillUnmount=function(){var o=this.__scriptURL;if(i.removeOnUnmount===!0)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l+=1)s[l].src.indexOf(o)>-1&&s[l].parentNode&&s[l].parentNode.removeChild(s[l]);var m=f[o];m&&(delete m.observers[this.asyncScriptLoaderGetScriptLoaderID()],i.removeOnUnmount===!0&&delete f[o])},g.render=function(){var o=i.globalName,s=this.props;s.asyncScriptOnLoad;var l=s.forwardedRef,m=te(s,["asyncScriptOnLoad","forwardedRef"]);return o&&typeof window<"u"&&(m[o]=typeof window[o]<"u"?window[o]:void 0),m.ref=l,d.createElement(r,m)},x}(d.Component),y=d.forwardRef(function(R,x){return d.createElement(c,D({},R,{forwardedRef:x}))});return y.displayName="AsyncScriptLoader("+t+")",y.propTypes={asyncScriptOnLoad:h.func},B(y,r)}}var U="onloadcallback",ae="grecaptcha";function q(){return typeof window<"u"&&window.recaptchaOptions||{}}function se(){var n=q(),i=n.useRecaptchaNet?"recaptcha.net":"www.google.com";return n.enterprise?"https://"+i+"/recaptcha/enterprise.js?onload="+U+"&render=explicit":"https://"+i+"/recaptcha/api.js?onload="+U+"&render=explicit"}const oe=ie(se,{callbackName:U,globalName:ae,attributes:q().nonce?{nonce:q().nonce}:{}})(F),ce=({PUBLIC_RSA_KEY:n,RECAPTCHA_SITE_KEY:i,token:a,terms:r="Terminos y condiciones",roles:t=[],specialties:c})=>{document.title="Registro | NetCoaching";const y=new G;y.setPublicKey(n);const[R,x]=d.useState(!0),[g,v]=d.useState(null),[o,s]=d.useState(!1),l=d.useRef(),m=d.useRef(),L=d.useRef(),w=d.useRef(),O=d.useRef(),j=d.useRef(),S=d.useRef(),b=d.useRef(),E=d.useRef();d.useEffect(()=>{x(!1)},[null]);const C=async u=>{u.preventDefault(),x(!0);const N=O.current.value,_=j.current.value;if(N!=_)return z.fire({icon:"warning",title:"Error",text:"Las contraseñas no coinciden",confirmButtonText:"Ok"});if(!g)return z.fire({icon:"warning",title:"Error",text:"Por favor, complete el captcha",confirmButtonText:"Ok"});const k={role:$(l.current).val(),name:m.current.value,lastname:L.current.value,email:w.current.value,password:y.encrypt(N),confirmation:y.encrypt(_),terms:S.current.checked,captcha:g,specialties:$(b.current).val()},A=await W.signup(k);if(!A)return x(!1);A&&(location.href=`./confirm-email/${A}`),x(!1)},p=u=>{documentNumberRef.current.value="",s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"account-pages mt-5 mb-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-md-8 col-lg-6 col-xl-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("a",{href:"/",children:e.jsx("img",{src:Q,alt:"",className:"mx-auto",style:{height:"40px"}})}),e.jsx("p",{className:"text-muted mt-2 mb-4",children:"Bienvenido a Net Coaching"})]}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body p-4",children:[e.jsx("div",{className:"text-center mb-4",children:e.jsx("h4",{className:"text-uppercase mt-0 font-bold",children:"Registrate"})}),e.jsxs("form",{onSubmit:C,className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-sm-6 mb-2",children:[e.jsxs("label",{htmlFor:"role",className:"form-label",children:["Tipo de usuario ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx(H,{eRef:l,onChange:p,required:!0,children:t.map((u,N)=>e.jsx("option",{value:u.relative_id,children:u.name}))})]})})}),e.jsx(H,{label:"Especialidad",eRef:b,required:!0,multiple:!0,children:c.map((u,N)=>e.jsx("option",{value:u.id,children:u.name},`specialty-${N}`))}),e.jsxs("div",{className:"col-sm-6 mb-2",children:[e.jsxs("label",{htmlFor:"name",className:"form-label",children:["Nombres ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:m,className:"form-control",type:"text",id:"name",placeholder:"Ingrese su nombre",required:!0})]}),e.jsxs("div",{className:"col-sm-6 mb-2",children:[e.jsxs("label",{htmlFor:"lastname",className:"form-label",children:["Apellidos ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:L,className:"form-control",type:"text",id:"lastname",placeholder:"Ingrese sus apellidos",required:!0})]}),e.jsxs("div",{className:"col-12 mb-2",children:[e.jsxs("label",{htmlFor:"email",className:"form-label",children:["Correo electronico ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:w,className:"form-control",type:"email",id:"email",required:!0,placeholder:"Ingrese su correo electronico"})]}),e.jsxs("div",{className:"col-sm-6 mb-2",children:[e.jsxs("label",{htmlFor:"password",className:"form-label",children:["Contraseña ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:O,className:"form-control",type:"password",required:!0,id:"password",placeholder:"Ingrese su contraseña"})]}),e.jsxs("div",{className:"col-sm-6 mb-3",children:[e.jsxs("label",{htmlFor:"confirmation",className:"form-label",children:["Confirmacion ",e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:j,className:"form-control",type:"password",required:!0,id:"confirmation",placeholder:"Confirme su contraseña"})]}),e.jsx("div",{className:"col-12 mb-3",children:e.jsxs("div",{className:"form-check mx-auto",style:{width:"max-content"},children:[e.jsx("input",{ref:S,type:"checkbox",className:"form-check-input",id:"checkbox-signup",required:!0}),e.jsxs("label",{className:"form-check-label",htmlFor:"checkbox-signup",children:["Acepto los",e.jsx("a",{href:"#terms",className:"ms-1 text-blue",onClick:()=>$(E.current).modal("show"),children:"terminos y condiciones"})]})]})}),e.jsx(oe,{className:"m-auto mb-3",sitekey:i,onChange:v,style:{display:"block",width:"max-content"}}),e.jsx("div",{className:"mb-0 text-center d-grid",children:e.jsx("button",{className:"btn btn-primary",type:"submit",disabled:R,children:R?e.jsxs(e.Fragment,{children:[e.jsx("i",{className:"fa fa-spinner fa-spin"})," Verificando"]}):"Registrarme"})})]})]})}),e.jsx("div",{className:"row mt-3",children:e.jsx("div",{className:"col-12 text-center",children:e.jsxs("p",{className:"text-muted",children:["Ya tienes una cuenta? ",e.jsx(J,{href:"/login",className:"text-white ms-1",children:e.jsx("b",{children:"Iniciar sesion"})})]})})})]})})})}),e.jsx(K,{modalRef:E,title:"Terminos y condiciones",size:"lg",hideFooter:!0,children:e.jsx(Y,{html:r})})]})};V((n,i)=>{M(n).render(e.jsx(ce,{...i}))});
