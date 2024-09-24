var B=Object.defineProperty;var k=(r,l,t)=>l in r?B(r,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[l]=t;var v=(r,l,t)=>(k(r,typeof l!="symbol"?l+"":l,t),t);import{j as e}from"./AboutHeader-DEdD30eg.js";import{r as h}from"./index-RYns6xqu.js";import{i as y}from"./tippy-react.esm-DYFqe69e.js";import{R as F}from"./Base-CyvJ02wK.js";import{B as S}from"./Results-2jWyQwHC.js";import{S as R}from"./sweetalert2.all-DJo0UVK6.js";import{G as O}from"./CreateReactScript-BERtc5uF.js";import{H as $}from"./HtmlContent-Ca-OCC2e.js";const E=({socials:r,generals:l})=>{var c,n,d,x;const[t,o]=h.useState(!1),p=()=>o(!t);return e.jsxs("header",{className:"fixed w-screen z-40",children:[e.jsxs("div",{className:`flex justify-between items-center bg-gray-600 ${!t&&location.pathname=="/"&&"bg-opacity-80"} text-white ps-[5%] border-b`,children:[e.jsx("div",{className:"py-4",children:e.jsx("img",{src:"/assets/img/logo.svg",alt:"Trasciende Logo",className:"h-8"})}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:p,className:"text-white h-16 px-8 border-x","aria-label":"Toggle menu",children:e.jsx("i",{className:`fas ${t?"fa-times":"fa-bars"} text-2xl`})}),e.jsxs("button",{className:"hidden md:block bg-[#F8B62C] text-black px-8 font-bold",children:["CONVERSEMOS",e.jsx("i",{className:"fa fa-arrow-right ms-2"})]})]})]}),e.jsxs("div",{className:`fixed inset-0 bg-gray-600 text-white z-40 transform ${t?"translate-y-16":"-translate-y-full"} transition-transform duration-300 ease-in-out border-t p-[5%] h-[calc(100vh-64px)] md:h-max overflow-y-auto`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"grid md:grid-cols-1 lg:grid-cols-2 gap-x-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Inicio"}),e.jsx("a",{href:"/courses",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Cursos y talleres"}),e.jsx("a",{href:"/about",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Nosotros"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/blog",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Blog"}),e.jsx("a",{href:"/contact",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Contacto"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 lg:grid-cols-2 gap-x-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-lg",children:(c=l.find(a=>a.correlative=="support_phone"))==null?void 0:c.description}),e.jsx("p",{className:"mb-4 text-lg",children:(n=l.find(a=>a.correlative=="support_email"))==null?void 0:n.description}),e.jsx("p",{className:"mb-4 text-lg",children:(d=l.find(a=>a.correlative=="opening_hours"))==null?void 0:d.description})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:(x=l.find(a=>a.correlative=="address"))==null?void 0:x.description}),e.jsx("div",{className:"flex gap-4 mt-4",children:r.map((a,m)=>e.jsx(y,{content:`Ver ${a.name} en ${a.description}`,children:e.jsx("a",{href:a.link,className:"text-2xl",children:e.jsx("i",{className:`fab ${a.icon}`})})},m))})]})]})]}),e.jsxs("button",{className:"bg-[#F8B62C] text-black px-4 py-2 rounded mt-8 font-bold block md:hidden",children:["CONVERSEMOS",e.jsx("i",{className:"fa fa-arrow-right ms-2"})]})]})]})},M="/build/footer.png";class _ extends S{constructor(){super(...arguments);v(this,"path","subscriptions")}}const T=new _,I=({socials:r,summary:l,generals:t})=>{var f,g,j,b,u,N;const o=h.useRef(),[p,c]=h.useState(null),[n,d]=h.useState(),x=[{title:"Términos y condiciones",modalContent:(f=t.find(s=>s.correlative=="terms_conditions"))==null?void 0:f.description},{title:"Políticas de privacidad",modalContent:(g=t.find(s=>s.correlative=="privacy_policy"))==null?void 0:g.description}],a=s=>c(s),m=()=>c(null),w=async s=>{s.preventDefault(),d(!0);const i={email:o.current.value},C=await T.save(i);d(!1),C&&(R.fire({title:"¡Éxito!",text:`Te has suscrito correctamente al blog de ${O.APP_NAME}.`,icon:"success",confirmButtonText:"Ok"}),o.current.value=null)};return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:M,alt:"",className:"aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] object-cover object-center w-full"}),e.jsxs("footer",{className:" p-[5%] pt-[calc(5%+64px)] bg-[#747D84] text-white relative",children:[e.jsx("form",{className:"absolute left-1/4 right-[5%] bottom-[calc(100%-64px)] p-[5%] bg-amber-400 text-[color:var(--Woodsmoke-900,#2B384F)]",onSubmit:w,children:e.jsxs("div",{className:"grid md:grid-cols-2 items-end gap-4",children:[e.jsxs("h1",{className:"text-xl md:text-2xl",children:["Mantente siempre ",e.jsx("b",{children:"Informado"})," con nuestra newsletter"]}),e.jsxs("div",{children:[e.jsx("input",{ref:o,type:"email",className:"bg-transparent border-b border-b-[color:var(--Woodsmoke-900,#2B384F)] outline-none px-3 py-2 w-full placeholder-[color:var(--Woodsmoke-900,#2B384F)]",placeholder:"Correo electrónico",disabled:n,required:!0}),e.jsxs("button",{className:"mt-4 px-3 py-2 ",disabled:n,children:["Enviar",e.jsx("i",{className:"mdi mdi-arrow-top-right ms-1"})]})]})]})}),e.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4 items-start justify-start",children:[e.jsx("img",{src:"/assets/img/logo.svg",alt:"",className:"h-8"}),e.jsx("p",{className:"text-sm max-w-md",children:l})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("a",{href:"/",children:"Inicio"}),e.jsx("a",{href:"/courses",children:"Cursos y Talleres"}),e.jsx("a",{href:"/about",children:"Nosotros"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{href:"/contact",children:"Contacto"})]}),e.jsxs("div",{className:"flex flex-col gap-4 text-sm",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:(j=t.find(s=>s.correlative=="support_phone"))==null?void 0:j.description}),e.jsx("p",{children:(b=t.find(s=>s.correlative=="support_email"))==null?void 0:b.description}),e.jsx("p",{children:(u=t.find(s=>s.correlative=="opening_hours"))==null?void 0:u.description}),e.jsx("div",{children:(N=t.find(s=>s.correlative=="address"))==null?void 0:N.description})]}),e.jsx("div",{className:"flex flex-wrap gap-4",children:r.map((s,i)=>e.jsx(y,{content:`Ver ${s.name} en ${s.description}`,children:e.jsx("a",{href:s.link,className:"text-2xl",children:e.jsx("i",{className:`fab ${s.icon}`})})},i))})]})]})]}),e.jsx("hr",{className:"my-[5%]"}),e.jsxs("section",{className:"flex flex-col lg:flex-row gap-4 justify-between text-center lg:text-start",children:[e.jsx("p",{children:"Copyright © 2023 Trasciende. Reservados todos los derechos."}),e.jsxs("div",{className:"flex flex-col justify-center lg:justify-between md:flex-row gap-4",children:[e.jsx("button",{onClick:()=>a(0),children:"Terminos de servicios"}),e.jsx("button",{onClick:()=>a(1),children:"Políticas de privacidad"})]})]})]}),x.map((s,i)=>e.jsxs(F,{isOpen:p===i,onRequestClose:m,contentLabel:s.title,className:"absolute left-1/2 -translate-x-1/2 bg-white p-6 rounded shadow-lg w-[95%] max-w-lg my-8",overlayClassName:"fixed inset-0 bg-black bg-opacity-50 z-50",children:[e.jsx("button",{onClick:m,className:"float-right text-gray-500 hover:text-gray-900",children:"Cerrar"}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:s.title}),e.jsx($,{className:"prose",html:s.modalContent})]},i))]})},L=({children:r,summary:l,socials:t,generals:o})=>e.jsxs(e.Fragment,{children:[e.jsx(E,{socials:t,generals:o}),e.jsx("main",{className:"overflow-hidden min-h-[360px]",children:r}),e.jsx(I,{summary:l,socials:t,generals:o})]});export{L as B,_ as S};
