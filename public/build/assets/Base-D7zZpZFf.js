var b=Object.defineProperty;var N=(a,s,l)=>s in a?b(a,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[s]=l;var h=(a,s,l)=>(N(a,typeof s!="symbol"?s+"":s,l),l);import{j as e}from"./AboutHeader-QvZ8i92b.js";import{r as c}from"./index-uubelm5h.js";import{R as u}from"./Base-CpRcd3k5.js";import{B as v}from"./Results-9uBmKgby.js";import{S as C}from"./sweetalert2.all-DEx9Iag3.js";import{G as w}from"./CreateReactScript-Bp1rCZww.js";const y=({...a})=>{const[s,l]=c.useState(!1),r=()=>l(!s);return e.jsxs("header",{className:"fixed w-screen z-40",children:[e.jsxs("div",{className:`flex justify-between items-center bg-gray-600 ${!s&&location.pathname=="/"&&"bg-opacity-80"} text-white ps-[5%] border-b`,children:[e.jsx("div",{className:"py-4",children:e.jsx("img",{src:"/assets/img/logo.svg",alt:"Trasciende Logo",className:"h-8"})}),e.jsxs("div",{className:"flex",children:[e.jsx("button",{onClick:r,className:"text-white h-16 px-8 border-x","aria-label":"Toggle menu",children:e.jsx("i",{className:`fas ${s?"fa-times":"fa-bars"} text-2xl`})}),e.jsxs("button",{className:"hidden md:block bg-[#F8B62C] text-black px-8 font-bold",children:["CONVERSEMOS",e.jsx("i",{className:"fa fa-arrow-right ms-2"})]})]})]}),e.jsxs("div",{className:`fixed inset-0 bg-gray-600 text-white z-40 transform ${s?"translate-y-16":"-translate-y-full"} transition-transform duration-300 ease-in-out border-t p-[5%] h-[calc(100vh-64px)] md:h-max overflow-y-auto`,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"grid md:grid-cols-1 lg:grid-cols-2 gap-x-8",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Inicio"}),e.jsx("a",{href:"/courses",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Cursos y talleres"}),e.jsx("a",{href:"/about",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Nosotros"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("a",{href:"/blog",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Blog"}),e.jsx("a",{href:"/contact",className:"text-lg font-bold mb-4 hover:text-[#F8B62C]",children:"Contacto"})]})]}),e.jsxs("div",{className:"grid md:grid-cols-1 lg:grid-cols-2 gap-x-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-4 text-lg",children:"+51 945 622 983"}),e.jsx("p",{className:"mb-4 text-lg",children:"soporte@trasciende.com"}),e.jsx("p",{className:"mb-4 text-lg",children:"De lunes a viernes - 10 am a 7pm"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-4",children:"Calle Nicanor Rocca de Vergallo 493 Magdalena del Mar Lima -Perú"}),e.jsxs("div",{className:"flex space-x-4 mt-4",children:[e.jsx("i",{className:"fab fa-instagram text-2xl"}),e.jsx("i",{className:"fab fa-facebook text-2xl"}),e.jsx("i",{className:"fab fa-linkedin text-2xl"}),e.jsx("i",{className:"fab fa-whatsapp text-2xl"})]})]})]})]}),e.jsxs("button",{className:"bg-[#F8B62C] text-black px-4 py-2 rounded mt-8 font-bold block md:hidden",children:["CONVERSEMOS",e.jsx("i",{className:"fa fa-arrow-right ms-2"})]})]})]})},B="/build/footer.png";class k extends v{constructor(){super(...arguments);h(this,"path","subscriptions")}}const F=new k,R=({items:a,summary:s,faqs:l})=>{const r=c.useRef(),[f,o]=c.useState(null),[n,d]=c.useState(),g=[{title:"Términos y condiciones",modalContent:e.jsx("p",{children:"Contenido sobre las políticas de uso..."})},{title:"Políticas de privacidad",modalContent:e.jsx("p",{children:"Contenido sobre las políticas de privacidad..."})},{title:"Preguntas frecuentes",modalContent:e.jsx("div",{children:e.jsx("div",{className:"flex flex-col gap-6 mt-4"})})}],x=t=>o(t),m=()=>o(null),j=async t=>{t.preventDefault(),d(!0);const i={email:r.current.value},p=await F.save(i);d(!1),p&&(C.fire({title:"¡Éxito!",text:`Te has suscrito correctamente al blog de ${w.APP_NAME}.`,icon:"success",confirmButtonText:"Ok"}),r.current.value=null)};return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:B,alt:"",className:"aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] object-cover object-center w-full"}),e.jsxs("footer",{className:" p-[5%] pt-[calc(5%+64px)] bg-[#747D84] text-white relative",children:[e.jsx("form",{className:"absolute left-1/4 right-[5%] bottom-[calc(100%-64px)] p-[5%] bg-amber-400 text-[color:var(--Woodsmoke-900,#2B384F)]",onSubmit:j,children:e.jsxs("div",{className:"grid md:grid-cols-2 items-end gap-4",children:[e.jsxs("h1",{className:"text-xl md:text-2xl",children:["Mantente siempre ",e.jsx("b",{children:"Informado"})," con nuestra newsletter"]}),e.jsxs("div",{children:[e.jsx("input",{ref:r,type:"email",className:"bg-transparent border-b border-b-[color:var(--Woodsmoke-900,#2B384F)] outline-none px-3 py-2 w-full placeholder-[color:var(--Woodsmoke-900,#2B384F)]",placeholder:"Correo electrónico",disabled:n,required:!0}),e.jsxs("button",{className:"mt-4 px-3 py-2 ",disabled:n,children:["Enviar",e.jsx("i",{className:"mdi mdi-arrow-top-right ms-1"})]})]})]})}),e.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-4 items-start justify-start",children:[e.jsx("img",{src:"/assets/img/logo.svg",alt:"",className:"h-8"}),e.jsx("p",{className:"text-sm max-w-md",children:s})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("a",{href:"/",children:"Inicio"}),e.jsx("a",{href:"/courses",children:"Cursos y Talleres"}),e.jsx("a",{href:"/about",children:"Nosotros"}),e.jsx("a",{href:"/blog",children:"Blog"}),e.jsx("a",{href:"/contact",children:"Contacto"})]}),e.jsxs("div",{className:"flex flex-col gap-4 text-sm",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"+51 945 622 983"}),e.jsx("p",{children:"soporte@trasciende.com"}),e.jsx("p",{children:"De lunes a viernes - 10 am a 7pm"}),e.jsxs("div",{children:[e.jsx("p",{children:"Calle Nicanor Rocca de Vergallo"}),e.jsx("p",{children:"493 Magdalena del Mar"}),e.jsx("p",{children:"Lima - Perú"})]})]}),e.jsxs("div",{className:"flex flex-wrap",children:[e.jsx("a",{href:"",className:"me-2 text-4xl",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"",className:"me-2 text-4xl",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"",className:"me-2 text-4xl",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"",className:"me-2 text-4xl",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"",className:"me-2 text-4xl",children:e.jsx("i",{className:"fab fa-instagram"})})]})]})]})]}),e.jsx("hr",{className:"my-[5%]"}),e.jsxs("section",{className:"flex flex-col lg:flex-row gap-4 justify-between text-center lg:text-start",children:[e.jsx("p",{children:"Copyright © 2023 Trasciende. Reservados todos los derechos."}),e.jsxs("div",{className:"flex flex-col justify-center lg:justify-between md:flex-row gap-4",children:[e.jsx("button",{onClick:()=>x(0),children:"Terminos de servicios"}),e.jsx("button",{onClick:()=>x(1),children:"Políticas de privacidad"})]})]})]}),g.map((t,i)=>e.jsxs(u,{isOpen:f===i,onRequestClose:m,contentLabel:t.title,className:"absolute left-1/2 -translate-x-1/2 bg-white p-6 rounded shadow-lg w-[95%] max-w-lg my-8",overlayClassName:"fixed inset-0 bg-black bg-opacity-50 z-50",children:[e.jsx("button",{onClick:m,className:"float-right text-gray-500 hover:text-gray-900",children:"Cerrar"}),e.jsx("h2",{className:"text-2xl font-bold mb-4",children:t.title}),e.jsx("div",{children:t.modalContent})]}))]})},q=({children:a,summary:s,faqs:l})=>e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx("main",{className:"overflow-hidden min-h-[360px]",children:a}),e.jsx(R,{summary:s,faqs:l})]});export{q as B,k as S};
