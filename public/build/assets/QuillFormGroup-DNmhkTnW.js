import{j as t}from"./AboutHeader-DEdD30eg.js";import{r as o}from"./index-RYns6xqu.js";const b=({col:c,label:a,eRef:e,value:u,required:r=!1,rows:d=3,theme:m="snow",height:n="100px",onChange:x=()=>{}})=>{const i=o.useRef();return e||(e=o.useRef()),o.useEffect(()=>{const l=new Quill(i.current,{theme:m,modules:{toolbar:[[{font:[]},{size:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"super"},{script:"sub"}],[{header:[!1,1,2,3,4,5,6]},"blockquote","code-block"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["direction",{align:[]}],["link","image","video"],["clean"]]}});l.on("text-change",()=>{const s=l.root.innerHTML;e.current.value=s,x(s)}),e.editor=l,l.root.innerHTML=u??""},[null]),t.jsxs("div",{className:`form-group ${c} mb-2`,style:{height:"max-content"},children:[t.jsxs("label",{htmlFor:"",className:"mb-1",children:[a," ",r&&t.jsx("b",{className:"text-danger",children:"*"})]}),t.jsx("div",{ref:i,style:{minHeight:n,fieldSizing:"content",maxHeight:`calc(${n}*3)`,overflowY:"auto"}}),t.jsx("input",{ref:e,type:"hidden",required:r,rows:d})]})};export{b as Q};
