var D=Object.defineProperty;var B=(s,r,n)=>r in s?D(s,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[r]=n;var d=(s,r,n)=>(B(s,typeof r!="symbol"?r+"":r,n),n);import{j as i}from"./AboutHeader-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";import{c as E}from"./ReactAppend-vpV7VTGG.js";import{B as k}from"./Base-CcJtSL4F.js";import{C as y}from"./CreateReactScript-BERtc5uF.js";import{T as I,R as g,D as h}from"./ReactAppend-CDWOQzm8.js";import{M as G}from"./Modal-HDEzC3Rq.js";import{I as v}from"./InputFormGroup-CyrmVMYe.js";import{T as w}from"./TextareaFormGroup-soTxV26S.js";import{S as _}from"./SwitchFormGroup-XpIpamlZ.js";import{B as N}from"./Results-2jWyQwHC.js";import{I as q}from"./ImageFormGroup-C2iOHudC.js";import{S as M}from"./sweetalert2.all-DJo0UVK6.js";import"./index-CXU7o9CY.js";import"./tippy-react.esm-DYFqe69e.js";/* empty css              */import"./main-BjVPLcVK.js";import"./___vite-browser-external_commonjs-proxy-DbMF7jdq.js";import"./index.esm-Bla6j_hB.js";/* empty css               */class A extends N{constructor(){super(...arguments);d(this,"path","admin/sliders");d(this,"hasFiles",!0)}}const u=new A,L=()=>{const s=o.useRef(),r=o.useRef(),n=o.useRef(),a=o.useRef(),m=o.useRef(),c=o.useRef(),f=o.useRef(),p=o.useRef();o.useRef(),o.useRef();const[j,x]=o.useState(!1),b=e=>{e!=null&&e.id?x(!0):x(!1),n.current.value=(e==null?void 0:e.id)??"",a.current.value=(e==null?void 0:e.name)??"",m.current.value=(e==null?void 0:e.description)??"",c.current.value=null,c.image.src=`/api/sliders/media/${e==null?void 0:e.bg_image}`,f.current.value=(e==null?void 0:e.button_text)??"",p.current.value=(e==null?void 0:e.button_link)??"",$(r.current).modal("show")},T=async e=>{e.preventDefault();const t={id:n.current.value||void 0,name:a.current.value,description:m.current.value,button_text:f.current.value,button_link:p.current.value},l=new FormData;for(const R in t)l.append(R,t[R]);const C=c.current.files[0];l.append("bg_image",C),await u.save(l)&&($(s.current).dxDataGrid("instance").refresh(),$(r.current).modal("hide"))},F=async({id:e,value:t})=>{await u.boolean({id:e,field:"visible",value:t})&&$(s.current).dxDataGrid("instance").refresh()},S=async e=>{const{isConfirmed:t}=await M.fire({title:"Eliminar slider",text:"¿Estas seguro de eliminar este slider?",icon:"warning",showCancelButton:!0,confirmButtonText:"Si, eliminar",cancelButtonText:"Cancelar"});!t||!await u.delete(e)||$(s.current).dxDataGrid("instance").refresh()};return i.jsxs(i.Fragment,{children:[i.jsx(I,{gridRef:s,title:"Sliders",rest:u,toolBar:e=>{e.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(s.current).dxDataGrid("instance").refresh()}}),e.unshift({widget:"dxButton",location:"after",options:{icon:"plus",text:"Nuevo slider",hint:"Nuevo slider",onClick:()=>b()}})},columns:[{dataField:"id",caption:"ID",visible:!1},{dataField:"name",caption:"Titulo",width:"75%"},{dataField:"bg_image",caption:"Imagen",width:"90px",cellTemplate:(e,{data:t})=>{g(e,i.jsx("img",{src:`/api/sliders/media/${t.bg_image}`,style:{width:"80px",height:"48px",objectFit:"cover",objectPosition:"center",borderRadius:"4px"},onError:l=>l.target.src="/api/cover/thumbnail/null"}))}},{dataField:"visible",caption:"Visible",dataType:"boolean",cellTemplate:(e,{data:t})=>{$(e).empty(),g(e,i.jsx(_,{checked:t.visible==1,onChange:()=>F({id:t.id,value:!t.visible})}))}},{caption:"Acciones",cellTemplate:(e,{data:t})=>{e.css("text-overflow","unset"),e.append(h({className:"btn btn-xs btn-soft-primary",title:"Editar",icon:"fa fa-pen",onClick:()=>b(t)})),e.append(h({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash",onClick:()=>S(t.id)}))},allowFiltering:!1,allowExporting:!1}]}),i.jsx(G,{modalRef:r,title:j?"Editar slider":"Agregar slider",onSubmit:T,size:"md",children:i.jsxs("div",{className:"row",id:"sliders-container",children:[i.jsx("input",{ref:n,type:"hidden"}),i.jsx(q,{eRef:c,label:"Imagen",col:"col-12"}),i.jsx(w,{eRef:a,label:"Titulo",col:"col-12",rows:2,required:!0}),i.jsx(w,{eRef:m,label:"Descripción",rows:3}),i.jsx(v,{eRef:f,label:"Texto botón primario",col:"col-sm-6",required:!0}),i.jsx(v,{eRef:p,label:"URL botón primario",col:"col-sm-6",required:!0})]})})]})};y((s,r)=>{E(s).render(i.jsx(k,{...r,title:"Sliders",children:i.jsx(L,{...r})}))});
