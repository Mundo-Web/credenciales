import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{R as c}from"./index-DFv2mRv-.js";import{c as x}from"./ReactAppend-z4_qtB7b.js";import{C as r}from"./CreateReactScript-yWJ4gJYl.js";import{B as n}from"./Base-B6Gxl6vv.js";import{H as d}from"./HtmlContent-BY9uANKo.js";import"./index.esm-B502ZfUP.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./main-BBbUrZUL.js";/* empty css               *//* empty css              */import"./logo-BjQK9OLG.js";const f=({resource:t})=>{const s=t.social_media==="youtube"?`https://i.ytimg.com/vi/${t.media_id}/hqdefault.jpg`:`/api/cover/thumbnail/${t.media_id}`,l=`/resources/${t.id}`,m=t.tags.split(",").map(a=>a.trim()).filter(Boolean);return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"flex flex-col mt-16",children:[e.jsxs("header",{className:"flex flex-col justify-center self-center max-w-full px-[5%]",style:{paddingTop:"15%"},children:[e.jsx("h1",{className:"text-2xl md:text-4xl font-bold leading-tight text-center text-teal-950 max-md:max-w-full",children:t.name}),e.jsxs("div",{className:"flex flex-wrap gap-4 justify-center items-center mt-1 w-full text-sm font-medium leading-tight max-md:max-w-full",children:[e.jsx("time",{className:"self-stretch my-auto text-teal-950",children:moment(t.created_at).format("LLL")}),e.jsx("span",{className:"text-neutral-600",children:"|"}),e.jsxs("div",{className:"self-stretch my-auto text-red-500",children:["Categoria: ",e.jsx("span",{className:"text-red-500",children:t.specialty.name})]})]})]}),e.jsx("section",{className:"p-[5%]",children:e.jsx("img",{className:"block mx-auto aspect-video object-cover object-center w-full max-w-[600px]",src:s,alt:""})}),e.jsx("section",{className:"p-[5%]",children:e.jsx(d,{className:"max-w-[720px] mx-auto prose",html:t.description})}),e.jsxs("section",{className:"p-[5%]",children:[e.jsxs("div",{className:"flex flex-wrap gap-1 items-center mt-12 w-full text-sm max-md:mt-10 max-md:max-w-full",children:[e.jsx("div",{className:"self-stretch my-auto leading-snug text-teal-950",children:"Etiquetas"}),e.jsx("div",{className:"self-stretch my-auto font-medium leading-tight text-red-500",children:m.map((a,i)=>e.jsxs(c.Fragment,{children:["#",a,i<m.length-1&&", "]},a))})]}),e.jsx("hr",{className:"mt-12 w-full border-t border-gray-200 max-md:mt-10 max-md:max-w-full"}),e.jsxs("nav",{className:"flex flex-wrap gap-10 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full",children:[e.jsxs("div",{className:"flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full",children:[e.jsxs("a",{href:l,className:"flex gap-2 items-center w-full text-sm font-medium leading-tight text-red-500 whitespace-nowrap max-md:max-w-full",children:[e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/b35409f5889662e48e1cd8f185bae56bc6013cb4af69297f599d86f3479b1fdb?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",alt:"",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square"}),e.jsx("span",{className:"self-stretch my-auto",children:"Anterior"})]}),e.jsx("div",{className:"mt-3 text-base font-bold leading-5 text-teal-950 max-md:max-w-full",children:t.name})]}),e.jsxs("div",{className:"flex flex-col flex-1 shrink self-stretch my-auto leading-tight basis-0 min-w-[240px] max-md:max-w-full",children:[e.jsxs("a",{href:l,className:"flex gap-2 items-center justify-end w-full text-sm font-medium text-red-500 whitespace-nowrap max-md:max-w-full",children:[e.jsx("span",{className:"self-stretch my-auto",children:"Próximo"}),e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/cc59cb1b208504ad7498c423ec7896da85622a29fdd7cbb6d6dc4291092d6727?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",alt:"",className:"object-contain shrink-0 self-stretch my-auto w-4 aspect-square"})]}),e.jsx("div",{className:"mt-3 text-base font-bold text-right text-teal-950 max-md:max-w-full",children:t.name})]})]})]})]})})};r((t,s)=>{x(t).render(e.jsx(n,{children:e.jsx(f,{...s})}))});
