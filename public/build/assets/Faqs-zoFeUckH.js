var w=Object.defineProperty;var v=(r,t,n)=>t in r?w(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var f=(r,t,n)=>(v(r,typeof t!="symbol"?t+"":t,n),n);import{j as s}from"./StatisticCard-Bdo2C3ON.js";import{r as o}from"./index-DFv2mRv-.js";import{c as j}from"./ReactAppend-CwiwA4iz.js";import{B as C}from"./Base-CpyTVU-s.js";import{C as B}from"./CreateReactScript-yWJ4gJYl.js";import{T as E}from"./Table-_VaaJVnk.js";import{M as F}from"./Modal-MESba8ek.js";import{R as y}from"./ReactAppend-CaRiPI_F.js";import{D as d}from"./DxButton-CsjWvhyj.js";import{T as x}from"./TextareaFormGroup-C9TxCPcT.js";import{S as D}from"./SwitchFormGroup-DkMQ_wzk.js";import{B as S}from"./Content-DtiuTMAn.js";import{S as T}from"./sweetalert2.all-DCeKQPlA.js";import"./index-DgyC5pTR.js";import"./tippy-react.esm-BVvHiWwH.js";/* empty css              */import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               */class q extends S{constructor(){super(...arguments);f(this,"path","admin/faqs")}}const a=new q,k=()=>{const r=o.useRef(),t=o.useRef(),n=o.useRef(),l=o.useRef(),c=o.useRef(),[g,u]=o.useState(!1),p=e=>{e!=null&&e.id?u(!0):u(!1),n.current.value=(e==null?void 0:e.id)??"",l.current.value=(e==null?void 0:e.name)??"",c.current.value=(e==null?void 0:e.description)??"",$(t.current).modal("show")},h=async e=>{e.preventDefault();const i={id:n.current.value||void 0,name:l.current.value,description:c.current.value};await a.save(i)&&($(r.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))},R=async({id:e,value:i})=>{await a.boolean({id:e,field:"visible",value:i})&&$(r.current).dxDataGrid("instance").refresh()},b=async e=>{const{isConfirmed:i}=await T.fire({title:"Eliminar pregunta",text:"¿Estas seguro de eliminar esta pregunta?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!i||!await a.delete(e)||$(r.current).dxDataGrid("instance").refresh()};return s.jsxs(s.Fragment,{children:[s.jsx(E,{gridRef:r,title:"Preguntas y Respuestas",rest:a,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nueva pregunta",hint:"Nueva pregunta",onClick:()=>p()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"name",caption:"Pregunta",width:"30%"},{dataField:"description",caption:"Respuesta",width:"50%"},{dataField:"visible",caption:"Visible",dataType:"boolean",cellTemplate:(e,{data:i})=>{$(e).empty(),y(e,s.jsx(D,{checked:i.visible==1,onChange:()=>R({id:i.id,value:!i.visible})}))}},{caption:"Acciones",cellTemplate:(e,{data:i})=>{e.append(d({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>p(i)})),e.append(d({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>b(i.id)}))},allowFiltering:!1,allowExporting:!1}]}),s.jsx(F,{modalRef:t,title:g?"Editar pregunta":"Agregar pregunta",onSubmit:h,size:"md",children:s.jsxs("div",{className:"row",id:"faqs-container",children:[s.jsx("input",{ref:n,type:"hidden"}),s.jsx(x,{eRef:l,label:"Pregunta",col:"col-12",rows:2,required:!0}),s.jsx(x,{eRef:c,label:"Respuesta",rows:3})]})})]})};B((r,t)=>{j(r).render(s.jsx(C,{...t,title:"Preguntas y Respuestas",children:s.jsx(k,{...t})}))});
