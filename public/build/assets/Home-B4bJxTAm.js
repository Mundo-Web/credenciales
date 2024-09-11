var j=Object.defineProperty;var N=(a,s,l)=>s in a?j(a,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[s]=l;var o=(a,s,l)=>(N(a,typeof s!="symbol"?s+"":s,l),l);import{j as e}from"./StatisticCard-Bdo2C3ON.js";import{r as c}from"./index-DFv2mRv-.js";import{c as w}from"./ReactAppend-CwiwA4iz.js";import{B as x}from"./Content-DtiuTMAn.js";import{S as f}from"./sweetalert2.all-DCeKQPlA.js";import{S as u,a as p}from"./Benefits-uJtjGlKh.js";/* empty css               */import{B as v}from"./Base-yt-5qwAf.js";import{C as y}from"./CreateReactScript-yWJ4gJYl.js";import"./index-DgyC5pTR.js";import"./main-BBbUrZUL.js";import"./___vite-browser-external_commonjs-proxy-BQdpDcDf.js";import"./logo-BjQK9OLG.js";import"./Base-L8eziURm.js";import"./index-Cevqm-zP.js";import"./index.esm-B502ZfUP.js";/* empty css              */class z extends x{constructor(){super(...arguments);o(this,"path","subscriptions")}}class S extends x{constructor(){super(...arguments);o(this,"path","messages")}}const R="/build/Banner.svg",q=new z,C=()=>{const a=c.useRef(),[s,l]=c.useState(),t=async i=>{i.preventDefault(),l(!0);const n={email:a.current.value},d=await q.save(n);l(!1),d&&(f.fire({title:"¡Éxito!",text:"Te has suscrito correctamente al blog de Net Coaching.",icon:"success",confirmButtonText:"Ok"}),a.current.value=null)};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-[5%]",children:e.jsxs("div",{className:"flex relative flex-col justify-center items-center px-20 py-16 min-h-[421px] max-md:px-5 max-md:mt-10",children:[e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/77949e2ea46912c14e03091f78ef8591a8c17802fdab4a09f105347cc3b5b08b?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",className:"object-cover absolute inset-0 size-full rounded-lg select-none",alt:""}),e.jsxs("div",{className:"flex relative flex-col items-center max-w-full w-[628px]",children:[e.jsxs("div",{className:"flex flex-col w-full text-center text-white",children:[e.jsx("h2",{className:"text-4xl font-bold leading-10 max-md:max-w-full",children:"¡Únete a Nuestro Viaje de Desarrollo! Suscríbete al Blog Net Coaching"}),e.jsx("p",{className:"mt-6 text-base leading-6 max-md:max-w-full",children:"Al suscribirte a nuestro blog, te convertirás en parte de una comunidad apasionada por el desarrollo humano y el bienestar. Recibirás regularmente consejos, historias inspiradoras y recursos exclusivos para impulsar tu crecimiento."})]}),e.jsxs("form",{className:"flex flex-nowrap gap-2.5 justify-center items-center px-2.5 py-2 mt-10 max-w-full text-base rounded-xl border border-white border-solid w-[557px]",onSubmit:t,children:[e.jsx("input",{ref:a,type:"email",id:"email",className:"outline-none flex-1 shrink gap-2.5 self-stretch px-3 py-4 my-auto leading-snug text-center text-white basis-6 bg-transparent",placeholder:"Déjanos tu correo",required:!0}),e.jsxs("button",{className:"flex gap-2 justify-center items-center px-6 py-4 text-base leading-tight bg-red-500 rounded-lg text-zinc-100 disabled:bg-red-300 disabled:cursor-not-allowed",disabled:s,children:[e.jsx("span",{className:"hidden md:block",children:"Suscríbete"}),e.jsx("i",{className:"far fa-handshake"})]})]})]})]})})})},k=({benefits:a})=>e.jsxs(e.Fragment,{children:[e.jsxs("section",{className:"flex flex-col md:flex-row gap-10 items-start self-stretch p-[5%] font-bold",children:[e.jsxs("div",{className:"w-full md:w-1/2",children:[e.jsx("h1",{className:"w-full text-4xl leading-10 text-teal-950",children:"Descubre cómo Net Coaching puede ser tu aliado en el camino hacia el éxito"}),e.jsxs("a",{href:"/login",className:"w-max flex gap-2 justify-center items-center px-6 py-4 text-base font-bold leading-tight bg-red-500 rounded-lg text-zinc-100 self-start mt-10",children:[e.jsx("span",{className:"self-stretch my-auto",children:"Iniciar"}),e.jsx("i",{className:"ms-1 fas fa-sign-in-alt"})]})]}),e.jsx("div",{className:"w-full md:w-1/2",children:e.jsx(u,{spaceBetween:20,slidesPerView:2,breakpoints:{768:{slidesPerView:2},1024:{slidesPerView:3}},loop:!0,pagination:{clickable:!0},navigation:!0,children:a.map((s,l)=>e.jsx(p,{children:e.jsxs("div",{className:"flex flex-col items-center rounded-lg overflow-hidden bg-zinc-100 shadow-md",children:[e.jsx("div",{className:"relative w-full aspect-[3/4]",children:e.jsx("img",{loading:"lazy",src:`/api/benefits/media/${s.image}`,className:"absolute inset-0 w-full object-cover object-center aspect-[3/4]",alt:"Tecnologia",onError:t=>t.target.src="/api/cover/thumbnail/null"})}),e.jsxs("div",{className:"absolute bottom-0 left-0 p-2 text-center line-clamp-2 h-[70px] w-full",style:{backgroundColor:"rgba(255, 255, 255, .50)"},children:[e.jsx("i",{className:`${s.icon} me-2`}),e.jsx("span",{className:"text-lg font-semibold",children:s.name})]})]})},l))})})]}),e.jsxs("section",{className:"flex flex-wrap md:flex-nowrap gap-6 items-start max-md:mt-10 w-full p-[5%]",children:[e.jsx("div",{className:"flex rounded w-full md:w-1/2",children:e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/20da893746fbe7622378ac476f088724b5008a992870abcd558e5665b5760f75?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",className:"object-contain w-full rounded h-auto",alt:"Net Coaching benefits illustration"})}),e.jsxs("div",{className:"flex flex-col w-full md:w-1/2",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("h2",{className:"text-4xl font-bold leading-10 text-teal-950",children:"Desbloquea Tu Potencial: Los Beneficios de Net Coaching"}),e.jsx("p",{className:"mt-6 text-base leading-snug text-cyan-950",children:"Descubre cómo Net Coaching puede ser tu aliado en el camino hacia el éxito."})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10",children:a.map((s,l)=>e.jsxs("div",{className:"flex flex-col p-4 leading-tight rounded-lg hover:text-white hover:bg-sky-900 hover:shadow-[0px_4px_8px_rgba(0,0,0,0.08)]",children:[e.jsx("div",{className:"flex items-center justify-center w-12 h-12 text-xl text-white bg-red-500 rounded-full",children:e.jsx("i",{className:s.icon})}),e.jsx("div",{className:"mt-4 w-full text-xl font-bold",children:s.name})]},l))}),e.jsxs("a",{href:"/coaches",className:"flex gap-2 justify-center items-center px-6 py-4 text-base font-bold leading-tight bg-red-500 rounded-lg text-zinc-100 self-start mt-14 max-sm:self-center",children:[e.jsx("i",{className:"fa fa-search"}),e.jsx("span",{children:"Busca tu coach"})]})]})]})]}),B=({resources:a})=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-[5%]",children:e.jsx("div",{className:"flex flex-col",children:e.jsxs("div",{className:"w-full max-md:max-w-full",children:[e.jsxs("header",{className:"flex flex-wrap md:flex-nowrap justify-between items-start w-full",children:[e.jsx("div",{className:"flex flex-col flex-1 shrink justify-center text-4xl font-bold leading-10 basis-0 min-w-[240px] text-cyan-950",children:e.jsx("h1",{className:"max-md:text-center",children:"¡Explora Nuestro Blog y Empieza tu Viaje de Desarrollo!"})}),e.jsxs("div",{className:"flex flex-col flex-1 shrink justify-center text-base min-w-[240px] mt-6 md:mt-0 md:text-right md:pl-6",children:[e.jsx("p",{className:"leading-6 text-cyan-950",children:"Sumérgete en nuestro blog y descubre una fuente de conocimiento y motivación para impulsar tu desarrollo y bienestar."}),e.jsxs("a",{href:"/resources",className:"flex gap-2 justify-center items-center self-end px-6 py-4 mt-10 font-bold leading-tight bg-red-500 rounded-lg text-zinc-100 max-md:px-5 max-sm:self-center",children:[e.jsx("span",{className:"self-stretch my-auto",children:"Ver más publicaciones"}),e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/fcb6cf155c6efbbda6a1e8e320f9116c0e4db4b2085f3907f8d17bf75f50cf82?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",alt:"",className:"object-contain shrink-0 self-stretch my-auto w-5 aspect-square"})]})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-6 mt-14 md:grid-cols-2 lg:grid-cols-3 max-md:mt-10",children:a.map((s,l)=>{const n=new DOMParser().parseFromString(s.description,"text/html").body.textContent||"";return e.jsx("a",{href:`/resources/${s.id}`,children:e.jsxs("article",{className:"flex flex-col w-full shadow-xl rounded-md",children:[e.jsx("div",{className:"flex flex-col max-w-full rounded",children:e.jsx("img",{loading:"lazy",src:`https://i.ytimg.com/vi/${s.media_id}/hqdefault.jpg`,alt:s.name,className:"object-cover object-center w-full rounded-t-md aspect-video",onError:d=>d.target.src="/api/cover/null"})}),e.jsxs("div",{className:"flex flex-col px-4 py-3",children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold leading-8 text-teal-950 line-clamp-2 h-16",children:s.name}),e.jsx("p",{className:"mt-2 text-base leading-6 text-cyan-950 line-clamp-3 h-[72px]",children:n})]})]})},`resource-${l}`)})})]})})})}),E=new S,D=()=>{const a=c.useRef(),s=c.useRef(),l=c.useRef(),t=c.useRef(),i=c.useRef(),[n,d]=c.useState(!1),h=[{label:"Nombre completo",placeholder:"Nombre y apellido",type:"text",required:!0,ref:a},{label:"WhatsApp",placeholder:"+51 999 999 999",type:"tel",required:!0,ref:s},{label:"Correo electrónico",placeholder:"hola@mail.com",type:"email",required:!0,ref:l},{label:"Asunto",placeholder:"Asunto",type:"text",required:!0,ref:t}],g=async r=>{r.preventDefault(),d(!0);const m={name:a.current.value,phone:s.current.value,email:l.current.value,subject:t.current.value,description:i.current.value},b=await E.save(m);d(!1),b&&(f.fire({icon:"success",title:"Mensaje enviado",text:"Tu mensaje ha sido enviado correctamente. ¡Nos pondremos en contacto contigo pronto!",showConfirmButton:!1,timer:3e3}),a.current.value=null,s.current.value=null,l.current.value=null,t.current.value=null,i.current.value=null)};return e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-[5%] bg-[#f4f4f4]",children:e.jsxs("div",{className:"flex gap-6 max-md:flex-col",children:[e.jsxs("section",{className:"flex flex-col w-6/12 max-md:w-full max-md:items-center",children:[e.jsxs("header",{className:"flex flex-col text-cyan-950 max-md:text-center",children:[e.jsx("h1",{className:"text-4xl font-bold leading-10",children:"¿Listo para dar el primer paso hacia tu desarrollo y bienestar?"}),e.jsx("p",{className:"mt-6 text-base leading-snug",children:"Déjanos tus datos y te acompañaremos en esta emocionante aventura."})]}),e.jsxs("form",{className:"w-full text-sm mt-8",onSubmit:g,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2",children:[h.map((r,m)=>e.jsxs("div",{className:"w-full",children:[e.jsxs("label",{className:"leading-snug text-teal-950",children:[r.label," ",r.required&&e.jsx("span",{className:"font-bold text-red-500",children:"*"})]}),e.jsx("input",{ref:r.ref,type:r.type,placeholder:r.placeholder,className:"p-4 mt-1 w-full font-medium leading-tight bg-white rounded-lg border border-solid border-zinc-200 text-teal-950 outline-none","aria-label":r.label,required:r.required,disabled:n})]},m)),e.jsxs("div",{className:"md:col-span-2 w-full",children:[e.jsxs("label",{className:"leading-snug text-teal-950",children:["Mensaje ",e.jsx("span",{className:"font-bold text-red-500",children:"*"})]}),e.jsx("textarea",{ref:i,placeholder:"Hola...",className:"flex-1 p-4 mt-1 min-h-[90px] [field-sizing:content] font-medium leading-tight bg-white rounded-lg border border-solid border-zinc-200 text-teal-950 outline-none w-full","aria-label":"Mensaje",required:!0,disabled:n})]})]}),e.jsxs("button",{type:"submit",className:"flex gap-2 justify-center items-center self-start px-6 py-4 mt-14 text-base font-bold leading-tight bg-red-500 rounded-lg text-zinc-100 max-md:mt-10 disabled:bg-red-300 disabled:cursor-not-allowed",disabled:n,children:[e.jsx("span",{className:"my-auto",children:"¡No esperes más, únete a nosotros!"}),e.jsx("i",{className:"fas fa-envelope ms-1"})]})]})]}),e.jsx("aside",{className:"flex flex-col w-6/12 max-md:hidden",children:e.jsx("img",{loading:"lazy",src:"https://cdn.builder.io/api/v1/image/assets/TEMP/5b9da078d6212f8163ea2787e4b73f9667cee43400849a9ae335818137d05c24?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",alt:"Ilustración representativa de desarrollo y bienestar",className:"object-contain w-full rounded aspect-[0.88]"})})]})})})},P=({sliders:a=[]})=>e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"w-full relative bg-sky-800 h-screen",slidesPerView:1,navigation:!0,autoplay:!0,loop:!0,children:a.map((s,l)=>e.jsxs(p,{children:[e.jsx("img",{className:"absolute size-full object-cover object-center z-10 opacity-50",src:`/api/sliders/media/${s.image}`,alt:"",onError:t=>t.target.src=R}),e.jsxs("div",{className:"z-20 relative flex flex-col items-center px-20 pt-40 pb-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full",children:[e.jsx("div",{className:"flex flex-col mb-0 w-full max-w-[1062px] max-md:mb-2.5 max-md:max-w-full",children:e.jsxs("div",{className:"flex flex-col w-full text-center max-md:max-w-full",children:[e.jsx("p",{className:"hidden md:block self-center text-base leading-6 text-white w-[810px] max-md:max-w-full",style:{textShadow:"0 0 20px rgba(0,0,0,.5)"},children:s.description}),e.jsx("h1",{className:"mt-6 text-2xl md:text-5xl font-bold text-white max-md:max-w-full",style:{textShadow:"0 0 20px rgba(0,0,0,.5)"},children:s.name})]})}),e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-center self-center mt-10 text-base font-bold leading-tight max-md:max-w-full",children:[e.jsx("a",{href:s.primarybtn_url,className:"flex gap-2 justify-center items-center px-6 py-4 bg-red-500 rounded-lg text-zinc-100 max-md:px-5",children:e.jsx("span",{className:"self-stretch my-auto",children:s.primarybtn_text})}),s.secondarybtn_text&&e.jsx("a",{href:s.secondarybtn_url,className:"flex gap-2 justify-center items-center px-6 py-4 bg-cyan-700 rounded-lg text-zinc-100 max-md:px-5",children:e.jsx("span",{className:"self-stretch my-auto",children:s.secondarybtn_text})})]})]})]},l))}),e.jsx("section",{className:"-mt-40 flex relative z-10 flex-col items-center self-center px-20 py-10 w-11/12 max-w-[720px] max-md:px-5 ",children:e.jsx("img",{loading:"lazy",src:"/assets/img/home/laptop-cover.png",alt:"",className:"object-contain inset-0 size-full"})})]}),T=({testimonies:a})=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"p-[5%]",children:e.jsxs("div",{className:"flex gap-5  max-md:flex-col-reverse",children:[e.jsx("div",{className:"flex flex-col w-6/12 max-md:w-full",children:e.jsx("div",{className:"flex flex-col grow text-zinc-950 max-md:mt-6 max-md:max-w-full max-h-[536px] overflow-auto",children:a.map((s,l)=>e.jsx("div",{className:l>0?"mt-6":"",children:e.jsxs("article",{className:"flex flex-col p-8 w-full rounded-lg bg-zinc-100 max-md:px-5 max-md:max-w-full",children:[e.jsxs("header",{className:"flex flex-wrap gap-4 items-start w-full max-md:max-w-full",children:[e.jsx("img",{src:`/api/testimonies/media/${s.image}`,alt:`${s.name}'s profile`,className:"flex shrink-0 w-12 h-12 rounded-full bg-zinc-200"}),e.jsxs("div",{className:"flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full",children:[e.jsx("h3",{className:"text-xl font-bold leading-tight max-md:max-w-full",children:s.name}),e.jsx("p",{className:"mt-1 text-sm font-medium leading-tight max-md:max-w-full",children:s.country})]})]}),e.jsx("p",{className:"mt-6 w-full text-base leading-6 max-md:max-w-full",children:s.description})]})},l))})}),e.jsx("div",{className:"flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full",children:e.jsxs("div",{className:"flex flex-col justify-center w-full max-md:mt-6 max-md:max-w-full",children:[e.jsxs("div",{className:"flex flex-col w-full max-md:max-w-full",children:[e.jsx("h2",{className:"text-4xl font-bold leading-10 text-teal-950 max-md:max-w-full",children:"Descubre lo que nuestros clientes piensan de Net Coaching"}),e.jsx("p",{className:"mt-6 text-base leading-snug text-cyan-950 max-md:max-w-full",children:"Descubre las Voces de Éxito: Lo que Nuestros Clientes Piensan de Net Coaching."})]}),e.jsxs("a",{href:"/about",className:"flex gap-2 justify-center items-center self-start px-6 py-4 mt-10 text-base font-bold leading-tight text-white bg-red-500 rounded-lg max-md:px-5",children:[e.jsx("span",{className:"self-stretch my-auto",children:"Sobre Net Coaching"}),e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/2814c2909807d9fc74b814e0d51ced2149a348cd10099ce05a36b984062d47e8?placeholderIfAbsent=true&apiKey=5cee531c8862493aa6f0e0854aa64731",alt:"",className:"object-contain shrink-0 self-stretch my-auto w-5 aspect-square"})]})]})})]})})}),M=({sliders:a,benefits:s,resources:l,testimonies:t})=>e.jsx(e.Fragment,{children:e.jsxs("main",{className:"flex flex-col",children:[e.jsx(P,{sliders:a}),e.jsx(k,{benefits:s}),e.jsx(C,{}),e.jsx(T,{testimonies:t}),e.jsx(B,{resources:l}),e.jsx(D,{})]})});y((a,s)=>{w(a).render(e.jsx(v,{...s,children:e.jsx(M,{...s})}))});
