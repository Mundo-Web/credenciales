var S=Object.defineProperty;var k=(s,t,a)=>t in s?S(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var y=(s,t,a)=>(k(s,typeof t!="symbol"?t+"":t,a),a);import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{r as n}from"./index-DFv2mRv-.js";import{c as T}from"./ReactAppend-z4_qtB7b.js";import{M as A}from"./Modal-MESba8ek.js";import{T as D,D as w}from"./DxButton-BxjpL7bl.js";import{m as R}from"./main-BBbUrZUL.js";import{C as G,G as I}from"./CreateReactScript-yWJ4gJYl.js";import{B}from"./Base-B7HrBCN4.js";import{J as P}from"./JSEncrypt-D3I3x59l.js";import{B as q}from"./Content-DtiuTMAn.js";import{D as O}from"./DxBox-DWKaLJ8o.js";import{R as N}from"./ReactAppend-M1J8-UWR.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./index.esm-B502ZfUP.js";/* empty css               *//* empty css              */import"./tippy-react.esm-3ehftxB_.js";import"./DxBox-DW2A4T63.js";const C=({col:s,label:t,eRef:a,type:u="text",placeholder:c,required:d=!1,disabled:l=!1,value:m,step:i,onChange:f=()=>{}})=>e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",d&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("input",{ref:a,type:u,className:"form-control",placeholder:c,required:d,disabled:l,defaultValue:m??"",step:i,onChange:f})]}),J=({col:s,label:t,eRef:a,required:u=!1,dropdownParent:c,searchAPI:d,searchBy:l,multiple:m=!1,filter:i=null,onChange:f=()=>{},templateResult:x,templateSelection:v})=>(a||(a=n.useRef()),n.useEffect(()=>{$(a.current).select2({dropdownParent:c,minimumInputLength:0,ajax:{url:d,headers:{Accept:"application/json","Content-Type":"application/json","X-Xsrf-Token":decodeURIComponent(R.Cookies.get("XSRF-TOKEN"))},type:"POST",quietMillis:50,data:function({term:p,page:h}){return R.JSON.stringify({sort:[{selector:l,desc:!1}],skip:((h??1)-1)*10,take:10,filter:i?[[l,"contains",p||""],"and",i]:[l,"contains",p||""]})},processResults:function(p,{page:h}){return{results:((p==null?void 0:p.data)??[]).map(b=>{const r=R.JSON.flatten(b);return{id:b.id,text:r[l],data:b}}),pagination:{more:(h??1)*10<p.totalCount}}}},templateResult:x,templateSelection:v})},[c,i]),n.useEffect(()=>{$(a.current).on("change",f)},[i]),e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",u&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("select",{ref:a,required:u,className:"form-control",style:{width:"100%"},multiple:m})]})),E=({col:s,label:t,eRef:a,placeholder:u,required:c=!1,value:d})=>{a||(a=n.useRef());const[l,m]=n.useState("password"),i=()=>{l=="text"?m("password"):m("text")};return e.jsxs("div",{className:`form-group ${s} mb-2`,children:[e.jsxs("label",{htmlFor:"",children:[t," ",c&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsxs("div",{className:"input-group input-group-merge",children:[e.jsx("input",{ref:a,type:l,className:"form-control",placeholder:u,required:c,defaultValue:d??""}),e.jsx("div",{className:"input-group-text","data-password":"true",onClick:i,children:e.jsx("i",{className:l=="text"?"mdi mdi-eye-off-outline":"mdi mdi-eye-outline"})})]})]})};class M extends q{constructor(){super(...arguments);y(this,"path","admin/coaches")}}const g=new M,K=({})=>{const s=n.useRef(),t=n.useRef(),a=n.useRef(),u=n.useRef(),c=n.useRef(),d=n.useRef(),l=n.useRef(),m=n.useRef(),i=n.useRef(),f=new P;f.setPublicKey(I.PUBLIC_RSA_KEY);const[x,v]=n.useState(!1),p=async r=>{r.preventDefault();const o=m.current.value,j=i.current.value,F={id:a.current.value||void 0,name:u.current.value,lastname:c.current.value,email:d.current.value,roles:$(l.current).val(),password:o?f.encrypt(o):void 0,confirm:j?f.encrypt(j):void 0};await g.save(F)&&($(s.current).dxDataGrid("instance").refresh(),$(t.current).modal("hide"))},h=async({id:r,status:o})=>{await g.status({id:r,status:o})&&$(s.current).dxDataGrid("instance").refresh()},b=async r=>{await g.delete(r)&&$(s.current).dxDataGrid("instance").refresh()};return e.jsxs(e.Fragment,{children:[e.jsx(D,{gridRef:s,title:"Coaches",rest:g,toolBar:r=>{r.unshift({widget:"dxButton",location:"after",options:{icon:"refresh",hint:"Refrescar tabla",onClick:()=>$(s.current).dxDataGrid("instance").refresh()}})},columns:[{dataField:"id",caption:"ID",dataType:"number",sortOrder:"asc"},{dataField:"name",caption:"Nombres"},{dataField:"lastname",caption:"Apellidos"},{dataField:"email",caption:"Correo",dataType:"email",cellTemplate:(r,{data:o})=>{r.append(O([e.jsx("img",{className:"avatar-xs rounded-circle",src:`/api/profile/thumbnail/${o.uuid}`,alt:o.name}),e.jsx("p",{className:"mb-0",style:{fontSize:"14px"},children:o.email})],!1))}},{dataField:"status",caption:"Estado",dataType:"boolean",cellTemplate:(r,{data:o})=>{switch(o.status){case 1:N(r,e.jsx("span",{className:"badge bg-success rounded-pill",children:"Activo"}));break;case 0:N(r,e.jsx("span",{className:"badge bg-danger rounded-pill",children:"Inactivo"}));break;default:N(r,e.jsx("span",{className:"badge bg-dark rounded-pill",children:"Eliminado"}));break}}},{caption:"Acciones",cellTemplate:(r,{data:o})=>{r.append(w({className:"btn btn-xs btn-light",title:o.status===null?"Restaurar":"Cambiar estado",icon:o.status===1?"fa fa-toggle-on text-success":o.status===0?"fa fa-toggle-off text-danger":"fas fa-trash-restore",onClick:()=>h(o)})),r.append(w({className:"btn btn-xs btn-soft-danger",title:"Eliminar",icon:"fa fa-trash-alt",onClick:()=>b(o.id)}))},allowFiltering:!1,allowExporting:!1}]}),e.jsx(A,{modalRef:t,title:x?"Editar usuario":"Agregar usuario",onSubmit:p,children:e.jsxs("div",{className:"row",id:"users-crud-container",children:[e.jsx("input",{ref:a,type:"hidden"}),e.jsx(C,{eRef:u,label:"Nombres",col:"col-md-6",required:!0}),e.jsx(C,{eRef:c,label:"Apellidos",col:"col-md-6",required:!0}),e.jsx(C,{eRef:d,label:"Correo",col:"col-12",type:"email",required:!0}),e.jsx(J,{eRef:l,label:"Asignar roles",col:"col-12",dropdownParent:"#users-crud-container",searchAPI:"/api/roles/paginate",searchBy:"name",required:!0,multiple:!0}),e.jsx(E,{eRef:m,label:"Contraseña",col:"col-md-6",required:!x}),e.jsx(E,{eRef:i,label:"Repetir contraseña",col:"col-md-6",required:!x})]})})]})};G((s,t)=>{T(s).render(e.jsx(B,{...t,title:"Coaches",children:e.jsx(K,{...t})}))});
