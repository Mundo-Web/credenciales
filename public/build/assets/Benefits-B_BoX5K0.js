var E=Object.defineProperty;var y=(n,r,o)=>r in n?E(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var x=(n,r,o)=>(y(n,typeof r!="symbol"?r+"":r,o),o);import{j as i}from"./StatisticCard-Bdo2C3ON.js";import{r as s}from"./index-DFv2mRv-.js";import{c as G}from"./ReactAppend-z4_qtB7b.js";import{B as I}from"./Base-jmuW-WOD.js";import{C as k}from"./CreateReactScript-yWJ4gJYl.js";import{T as N}from"./Table-CiqtxGdE.js";import{M as q}from"./Modal-MESba8ek.js";import{I as M}from"./InputFormGroup-B5shSbO3.js";import{R as j}from"./ReactAppend-M1J8-UWR.js";import{S as A}from"./SelectFormGroup-CEMe1OMM.js";import{D as w}from"./DxButton-CsjWvhyj.js";import{B as P}from"./BusinessIWorkCard-DtiuTMAn.js";import{S as V,T as z}from"./SwitchFormGroup-CNdv9g4M.js";import{r as F}from"./DxBox-DW2A4T63.js";import{I as L}from"./ImageFormGroup-BpEkFDKN.js";import"./tippy-react.esm-3ehftxB_.js";/* empty css              */import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               */class O extends P{constructor(){super(...arguments);x(this,"path","admin/benefits");x(this,"hasFiles",!0)}}const l=new O,U=({icons:n})=>{const r=s.useRef(),o=s.useRef(),a=s.useRef(),m=s.useRef(),f=s.useRef(),u=s.useRef(),p=s.useRef(),[B,b]=s.useState(!1),h=e=>{e!=null&&e.id?b(!0):b(!1),a.current.value=(e==null?void 0:e.id)??"",p.image.src=(e==null?void 0:e.image)??"",$(f.current).val((e==null?void 0:e.icon)??"fab fa-dribbble-square").trigger("change"),m.current.value=(e==null?void 0:e.name)??"",u.current.value=(e==null?void 0:e.description)??"",$(o.current).modal("show")},T=async e=>{e.preventDefault();const t=p.current.files[0],{full:c,type:S}=await File.compress(t,{square:!1}),R={id:a.current.value||void 0,icon:$(f.current).val(),name:m.current.value,description:u.current.value},d=new FormData;for(const v in R)d.append(v,R[v]);d.append("image",await File.fromURL(`data:${S};base64,${c}`)),await l.save(d)&&($(r.current).dxDataGrid("instance").refresh(),$(o.current).modal("hide"))},C=async({id:e,value:t})=>{await l.boolean({id:e,field:"visible",value:t})&&$(r.current).dxDataGrid("instance").refresh()},D=async e=>{const{isConfirmed:t}=await Swal.fire({title:"Eliminar recurso",text:"¿Estas seguro de eliminar este beneficio?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!t||!await l.delete(e)||$(r.current).dxDataGrid("instance").refresh()},g=e=>$(F(i.jsxs("span",{children:[i.jsx("i",{className:`${e.id} me-1`}),e.text]})));return i.jsxs(i.Fragment,{children:[i.jsx(N,{gridRef:r,title:"Beneficios",rest:l,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(r.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo beneficio",hint:"Nuevo beneficio",onClick:()=>h()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"icon",caption:"Ícono",cellTemplate:(e,{data:t})=>{e.append(F(i.jsxs(i.Fragment,{children:[i.jsx("i",{className:`${t.icon} me-1`}),i.jsx("span",{children:t.icon})]})))}},{dataField:"name",caption:"Titulo"},{dataField:"image",caption:"Imagen",width:"90px",cellTemplate:(e,{data:t})=>{j(e,i.jsx("img",{src:`/api/benefits/media/${t.image}`,style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"},onError:c=>c.target.src="/api/cover/thumbnail/null"}))}},{dataField:"visible",caption:"Visible",dataType:"boolean",cellTemplate:(e,{data:t})=>{$(e).empty(),j(e,i.jsx(V,{checked:t.visible==1,onChange:()=>C({id:t.id,value:!t.visible})}))}},{caption:"Acciones",cellTemplate:(e,{data:t})=>{e.append(w({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>h(t)})),e.append(w({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>D(t.id)}))},allowFiltering:!1,allowExporting:!1}]}),i.jsx(q,{modalRef:o,title:B?"Editar beneficio":"Agregar beneficio",onSubmit:T,size:"md",children:i.jsxs("div",{className:"row",id:"benefits-container",children:[i.jsx("input",{ref:a,type:"hidden"}),i.jsx(L,{eRef:p,label:"Imagen",col:"col-12"}),i.jsx(A,{eRef:f,label:"Ícono",dropdownParent:"#benefits-container",required:!0,templateResult:g,templateSelection:g,children:n.map((e,t)=>i.jsx("option",{value:e.id,children:e.value},`icon-${t}`))}),i.jsx(M,{eRef:m,label:"Titulo",col:"col-12",required:!0}),i.jsx(z,{eRef:u,label:"Descripción",rows:3})]})})]})};k((n,r)=>{G(n).render(i.jsx(I,{...r,title:"Beneficios",children:i.jsx(U,{...r})}))});
