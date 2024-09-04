var v=Object.defineProperty;var j=(i,e,r)=>e in i?v(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r;var d=(i,e,r)=>(j(i,typeof e!="symbol"?e+"":e,r),r);import{j as s}from"./StatisticCard-Bdo2C3ON.js";import{r as c}from"./index-DFv2mRv-.js";import{c as w}from"./ReactAppend-z4_qtB7b.js";import{C as R}from"./CreateReactScript-yWJ4gJYl.js";import{R as p}from"./ReactAppend-M1J8-UWR.js";import{m as a}from"./main-BBbUrZUL.js";import{B as E}from"./Base-jmuW-WOD.js";import{M as N}from"./Modal-MESba8ek.js";import{T as C}from"./Table-CiqtxGdE.js";import{I as h}from"./InputFormGroup-B5shSbO3.js";import{Q as T}from"./QuillFormGroup-DCWD3Stq.js";import{i as F}from"./tippy-react.esm-3ehftxB_.js";/* empty css              */import"./index.esm-B502ZfUP.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";/* empty css               */const S=(i,e)=>{i.root.innerHTML=e};class u{}d(u,"paginate",async e=>{const{result:r}=await a.Fetch("/api/settings/paginate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)});return r}),d(u,"save",async e=>{try{const{status:r,result:o}=await a.Fetch("/api/settings",{method:"POST",body:JSON.stringify(e)});if(!r)throw new Error((o==null?void 0:o.message)||"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:o.message,type:"success"}),!0}catch(r){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:r.message,type:"danger"}),!1}}),d(u,"status",async({id:e,status:r})=>{try{const{status:o,result:n}=await a.Fetch("/api/settings/status",{method:"PATCH",body:JSON.stringify({id:e,status:r})});if(!o)throw new Error((n==null?void 0:n.message)??"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:n.message,type:"success"}),!0}catch(o){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:o.message,type:"danger"}),!1}}),d(u,"delete",async e=>{try{const{status:r,result:o}=await a.Fetch(`/api/settings/${e}`,{method:"DELETE"});if(!r)throw new Error((o==null?void 0:o.message)??"Ocurrio un error inesperado");return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Correcto",body:o.message,type:"success"}),!0}catch(r){return a.Notify.add({icon:"/assets/img/logo-login.svg",title:"Error",body:r.message,type:"danger"}),!1}});const O=({title:i,className:e,onClick:r,children:o,eRef:n,...m})=>s.jsx(F,{content:i,arrow:!0,children:s.jsx("button",{ref:n,className:e,onClick:r,...m,children:o})}),D=({can:i})=>{const e=c.useRef(),r=c.useRef(),o=c.useRef(),n=c.useRef(),m=c.useRef(),f=c.useRef(),[x,g]=c.useState(!1),y=t=>{t!=null&&t.id?g(!0):g(!1),o.current.value=(t==null?void 0:t.id)||null,n.current.value=(t==null?void 0:t.name)||null,S(m.editor,(t==null?void 0:t.value)||null),f.current.value=(t==null?void 0:t.description)||null,$(r.current).modal("show")},b=async t=>{t.preventDefault();const l={id:o.current.value||void 0,name:n.current.value,value:m.current.value,description:f.current.value};await u.save(l)&&($(e.current).dxDataGrid("instance").refresh(),$(r.current).modal("hide"))};return s.jsxs(s.Fragment,{children:[s.jsx(C,{gridRef:e,title:"Configuracion",rest:u,toolBar:t=>{t.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(e.current).dxDataGrid("instance").refresh()}}),t.unshift({widget:"dxButton",location:"after",options:{icon:"plus",hint:"Nuevo registro",onClick:()=>y()}})},columns:[{dataField:"id",caption:"ID",dataType:"number",sortOrder:"asc"},{dataField:"name",caption:"Estado de tabla"},{dataField:"description",caption:"Descripcion",cellTemplate:(t,{value:l})=>{l?p(t,l):p(t,s.jsx("i",{className:"text-muted",children:"- Sin descripcion -"}))}},{caption:"Acciones",cellTemplate:(t,{data:l})=>{i("settings","root","all","update")&&p(t,s.jsx(O,{className:"btn btn-xs btn-soft-primary",title:"Editar",onClick:()=>y(l),children:s.jsx("i",{className:"fa fa-pen"})}))},allowFiltering:!1,allowExporting:!1}]}),s.jsx(N,{modalRef:r,title:x?"Editar configuracion":"Agregar configuracion",onSubmit:b,size:"md",children:s.jsxs("div",{className:"row",id:"settings-crud-container",children:[s.jsx("input",{ref:o,type:"hidden"}),s.jsx(h,{eRef:n,label:"Alias",col:"col-12",required:!0}),s.jsx(h,{eRef:f,label:"Descripcion",col:"col-12"}),s.jsx(T,{eRef:m,label:"Valor",col:"col-12",theme:"bubble",required:!0})]})})]})};R((i,e)=>{if(!e.can("settings","root","all","list"))return location.href="/";w(i).render(s.jsx(E,{...e,title:"Constantes de configuracion",children:s.jsx(D,{...e})}))});
