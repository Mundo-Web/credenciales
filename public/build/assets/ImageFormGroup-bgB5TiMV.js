import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{r as a}from"./index-DFv2mRv-.js";const x=({id:r,col:c,label:l,eRef:t,required:n=!1,onChange:i=()=>{},aspect:m="21/9"})=>{r||(r=`ck-${crypto.randomUUID()}`),t||(t=a.useRef());const o=a.useRef(),u=async s=>{const p=s.target.files[0],f=await File.toURL(p);o.current.src=f,i(s)};return a.useEffect(()=>{t.image=o.current},[null]),e.jsxs("div",{className:`form-group ${c} mb-2`,children:[e.jsxs("label",{htmlFor:r,children:[l," ",n&&e.jsx("b",{className:"text-danger",children:"*"})]}),e.jsx("label",{htmlFor:r,style:{width:"100%"},children:e.jsx("img",{ref:o,className:"d-block",src:"",alt:"aspect-video",onError:s=>s.target.src="/api/cover/thumbnail/null",style:{width:"100%",borderRadius:"4px",cursor:"pointer",aspectRatio:m,objectFit:"cover",objectPosition:"center"}})}),e.jsx("input",{ref:t,id:r,type:"file",src:"",alt:"",hidden:!0,accept:"image/*",onChange:u})]})};export{x as I};
