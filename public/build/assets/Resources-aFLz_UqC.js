var p=Object.defineProperty;var f=(r,e,o)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var l=(r,e,o)=>(f(r,typeof e!="symbol"?e+"":e,o),o);import{j as i}from"./StatisticCard-Bdo2C3ON.js";import{r as a}from"./index-DFv2mRv-.js";import{c as x}from"./ReactAppend-z4_qtB7b.js";import{T as g,D as d}from"./DxButton-BxjpL7bl.js";import{C as b}from"./CreateReactScript-yWJ4gJYl.js";import{B as h}from"./Base-BxvuhrmR.js";import{R as n}from"./ReactAppend-M1J8-UWR.js";import{B as R}from"./Content-DtiuTMAn.js";import{S as j}from"./sweetalert2.all-DCeKQPlA.js";import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               *//* empty css              */import"./tippy-react.esm-3ehftxB_.js";class w extends R{constructor(){super(...arguments);l(this,"path","admin/resources")}}const c=new w,C=({specialties:r})=>{const e=a.useRef();a.useRef(),a.useRef(),a.useRef(),a.useRef(),a.useRef(),a.useRef(),a.useRef(),a.useRef(),a.useState(!1);const o=async({id:t,status:s})=>{await c.status({id:t,status:s})&&$(e.current).dxDataGrid("instance").refresh()},u=async t=>{const{isConfirmed:s}=await j.fire({title:"Eliminar recurso",text:"¿Estas seguro de eliminar este recurso?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!s||!await c.delete(t)||$(e.current).dxDataGrid("instance").refresh()};return i.jsx(i.Fragment,{children:i.jsx(g,{gridRef:e,title:"Recursos",rest:c,toolBar:t=>{t.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(e.current).dxDataGrid("instance").refresh()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"specialty.name",caption:"Especialidad"},{dataField:"name",caption:"Titulo"},{dataField:"id",caption:"Imagen",width:"90px",cellTemplate:(t,{data:s})=>{s.social_media=="youtube"?n(t,i.jsx("img",{src:`https://i.ytimg.com/vi/${s.media_id}/hqdefault.jpg`,style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"}})):n(t,i.jsx("img",{src:"/api/cover/thumbnail/null",style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"}}))}},{dataField:"status",caption:"Estado",dataType:"boolean",cellTemplate:(t,{data:s})=>{switch(s.status){case 1:n(t,i.jsx("span",{className:"badge bg-success rounded-pill",children:"Activo"}));break;case 0:n(t,i.jsx("span",{className:"badge bg-danger rounded-pill",children:"Inactivo"}));break;default:n(t,i.jsx("span",{className:"badge bg-dark rounded-pill",children:"Eliminado"}));break}}},{caption:"Acciones",cellTemplate:(t,{data:s})=>{t.append(d({className:"btn btn-xs btn-light",title:s.status===null?"Restaurar":"Cambiar estado",icon:s.status===1?"fa fa-toggle-on text-success":s.status===0?"fa fa-toggle-off text-danger":"fas fa-trash-restore",onClick:()=>o(s)})),t.append(d({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>u(s.id)}))},allowFiltering:!1,allowExporting:!1}]})})};b((r,e)=>{x(r).render(i.jsx(h,{...e,title:"Recursos",children:i.jsx(C,{...e})}))});
