import{j as e}from"./AboutHeader-DEdD30eg.js";import{r as u}from"./index-RYns6xqu.js";import{G as f}from"./CreateReactScript-BERtc5uF.js";import{i as h}from"./tippy-react.esm-DYFqe69e.js";/* empty css              */import{m as t}from"./main-BjVPLcVK.js";import{a as x}from"./index.esm-Bla6j_hB.js";const j=()=>{const s=new Date().getFullYear();return e.jsx("footer",{className:"footer",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-md-6",children:[s," © ",f.APP_NAME," | Desarrollado por ",e.jsx("a",{href:"//mundoweb.pe",target:"_blank",children:"Mundo Web"})]}),e.jsx("div",{className:"col-md-6",children:e.jsxs("div",{className:"text-md-end footer-links d-none d-sm-block",children:[e.jsx("a",{href:"//mundoweb.pe",target:"_blank",children:"Sobre nosotros"}),e.jsx("a",{href:"//mundoweb.pe",target:"_blank",children:"Contactanos"})]})})]})})})},d=async()=>{try{const{status:s,result:a}=await t.Fetch("/api/logout",{method:"DELETE"});if(!s)throw new Error((a==null?void 0:a.message)||"Ocurrio un error al cerrar sesion");t.Notify.add({icon:"/assets/img/icon.svg",title:"Cierre de sesion exitoso",body:"Sera enviado a la pantalla de autenticacion"}),location.reload()}catch(s){t.Notify.add({icon:"/assets/img/icon.svg",title:"Error",body:s.message,type:"danger"})}},i=({href:s,icon:a,children:l})=>e.jsx("li",{className:location.pathname.startsWith(s)?"menuitem-active":"",children:e.jsxs(x,{href:s,className:location.pathname.startsWith(s)?"active":"",children:[e.jsx("i",{className:a}),e.jsxs("span",{children:[" ",l," "]})]})}),b=({session:s,hasRole:a})=>{const l=s.roles[0];return e.jsx("div",{className:"left-side-menu",children:e.jsxs("div",{className:"h-100","data-simplebar":!0,children:[e.jsxs("div",{className:"user-box text-center",children:[e.jsx("img",{src:`/api/admin/profile/thumbnail/${s.relative_id}?v=${new Date(s.updated_at).getTime()}`,alt:s.name,title:s.name,className:"rounded-circle img-thumbnail avatar-md",style:{backgroundColor:"unset",borderColor:"#98a6ad",objectFit:"cover",objectPosition:"center"},onError:r=>r.target.src=`https://ui-avatars.com/api/?name=${s.name}+${s.lastname}&color=7F9CF5&background=EBF4FF`}),e.jsxs("div",{className:"dropdown",children:[e.jsxs("a",{href:"#",className:"user-name dropdown-toggle h5 mt-2 mb-1 d-block","data-bs-toggle":"dropdown","aria-expanded":"false",children:[s.name.split(" ")[0]," ",s.lastname.split(" ")[0]]}),e.jsxs("div",{className:"dropdown-menu user-pro-dropdown",children:[e.jsxs("a",{href:"/profile",className:"dropdown-item notify-item",children:[e.jsx("i",{className:"fe-user me-1"}),e.jsx("span",{children:"Mi perfil"})]}),e.jsxs("a",{href:"/account",className:"dropdown-item notify-item",children:[e.jsx("i",{className:"mdi mdi-account-key-outline me-1"}),e.jsx("span",{children:"Mi cuenta"})]}),e.jsxs("a",{href:"#",className:"dropdown-item notify-item right-bar-toggle dropdown notification-list",children:[e.jsx("i",{className:"fe-settings me-1"}),e.jsx("span",{children:"Configuracion"})]}),e.jsxs("a",{href:"#",className:"dropdown-item notify-item",onClick:d,children:[e.jsx("i",{className:"fe-log-out me-1"}),e.jsx("span",{children:"Cerrar sesion"})]})]})]}),e.jsx("p",{className:"text-muted left-user-info",children:l.name}),e.jsxs("ul",{className:"list-inline",children:[e.jsx("li",{className:"list-inline-item",children:e.jsx(h,{content:"Configuracion",children:e.jsx("a",{href:"#",className:"text-muted left-user-info right-bar-toggle dropdown notification-list",children:e.jsx("i",{className:"mdi mdi-cog"})})})}),e.jsx("li",{className:"list-inline-item",children:e.jsx(h,{content:"Cerrar sesion",children:e.jsx("a",{href:"#",className:"text-danger",onClick:d,children:e.jsx("i",{className:"mdi mdi-power"})})})})]})]}),e.jsx("div",{id:"sidebar-menu",className:"show",children:e.jsxs("ul",{id:"side-menu",children:[e.jsx("li",{className:"menu-title",children:"Navigation Panel"}),a("Admin")&&e.jsxs(e.Fragment,{children:[e.jsx(i,{href:"/admin/home",icon:"mdi mdi-home",children:"Dashboard"}),e.jsx(i,{href:"/admin/posts",icon:"mdi mdi-post",children:"Posts"}),e.jsx(i,{href:"/admin/courses",icon:"mdi mdi-bookshelf",children:"Cursos"}),e.jsx(i,{href:"/admin/messages",icon:"mdi mdi-message-text",children:"Mensajes"}),e.jsx(i,{href:"/admin/subscriptions",icon:"mdi mdi-email-multiple",children:"Suscripciones"}),e.jsx("li",{className:"menu-title",children:"Landing Page"}),e.jsx(i,{href:"/admin/about",icon:"mdi mdi-briefcase",children:"Nosotros"}),e.jsx(i,{href:"/admin/indicators",icon:"mdi mdi-dots-grid",children:"Indicadores"}),e.jsx(i,{href:"/admin/sliders",icon:"mdi mdi-page-layout-body",children:"Sliders"}),e.jsx(i,{href:"/admin/strengths",icon:"mdi mdi-arm-flex",children:"Fortalezas"}),e.jsx(i,{href:"/admin/testimonies",icon:"mdi mdi-forum",children:"Testimonios"}),e.jsx(i,{href:"/admin/categories",icon:"mdi mdi-layers-outline",children:"Categorías"}),e.jsx(i,{href:"/admin/socials",icon:"mdi mdi-web",children:"Redes Sociales"}),e.jsx("li",{className:"menu-title",children:"Configuraciones"}),e.jsx(i,{href:"/admin/generals",icon:"mdi mdi-credit-card-settings",children:"Datos Generales"}),e.jsx(i,{href:"/admin/profile",icon:"mdi mdi-account-box",children:"Mi perfil"}),e.jsx(i,{href:"/admin/account",icon:"mdi mdi-account-key",children:"Mi cuenta"})]})]})}),e.jsx("div",{className:"clearfix"})]})})},p=({session:s={},title:a="Pagina"})=>(u.useEffect(()=>{document.title=`${a} | Net Coaching`},[null]),e.jsxs("div",{className:"navbar-custom",children:[e.jsxs("ul",{className:"list-unstyled topnav-menu float-end mb-0",children:[e.jsxs("li",{className:"dropdown notification-list topbar-dropdown",children:[e.jsxs("a",{className:"nav-link dropdown-toggle nav-user me-0 waves-effect waves-light","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false",children:[e.jsx("img",{src:`/api/admin/profile/thumbnail/${s.relative_id}?v=${crypto.randomUUID()}`,alt:"user-image",className:"rounded-circle",style:{objectFit:"cover",objectPosition:"center"},onError:l=>l.target.src=`https://ui-avatars.com/api/?name=${s.name}+${s.lastname}&color=7F9CF5&background=EBF4FF`}),e.jsxs("span",{className:"pro-user-name ms-1",children:[s.name.split(" ")[0]," ",s.lastname.split(" ")[0],e.jsx("i",{className:"mdi mdi-chevron-down"})]})]}),e.jsxs("div",{className:"dropdown-menu dropdown-menu-end profile-dropdown ",children:[e.jsx("div",{className:"dropdown-header noti-title",children:e.jsx("h6",{className:"text-overflow m-0",children:"Bienvenido !"})}),e.jsxs("a",{href:"/profile",className:"dropdown-item notify-item",children:[e.jsx("i",{className:"fe-user"}),e.jsx("span",{children:"Mi perfil"})]}),e.jsxs("a",{href:"/account",className:"dropdown-item notify-item",children:[e.jsx("i",{className:"mdi mdi-account-key-outline"}),e.jsx("span",{children:"Mi cuenta"})]}),e.jsxs("a",{href:"#",className:"dropdown-item notify-item right-bar-toggle dropdown notification-list",children:[e.jsx("i",{className:"fe-lock"}),e.jsx("span",{children:"Configuracion"})]}),e.jsx("div",{className:"dropdown-divider"}),e.jsxs("a",{href:"#",className:"dropdown-item notify-item",onClick:d,children:[e.jsx("i",{className:"fe-log-out"}),e.jsx("span",{children:"Cerrar sesion"})]})]})]}),e.jsx("li",{className:"dropdown notification-list",children:e.jsx("a",{href:"#",className:"nav-link right-bar-toggle waves-effect waves-light",children:e.jsx("i",{className:"fe-settings noti-icon"})})})]}),e.jsxs("div",{className:"logo-box",children:[e.jsxs("a",{href:"/home",className:"logo logo-light text-center",children:[e.jsx("span",{className:"logo-sm",children:e.jsx("img",{src:"/assets/img/icon.svg",alt:"",height:"22"})}),e.jsx("span",{className:"logo-lg",children:e.jsx("img",{src:"/assets/img/logo.svg",alt:"",height:"16"})})]}),e.jsxs("a",{href:"/home",className:"logo logo-dark text-center",children:[e.jsx("span",{className:"logo-sm",children:e.jsx("img",{src:"/assets/img/icon.svg",alt:"",height:"22"})}),e.jsx("span",{className:"logo-lg",children:e.jsx("img",{src:"/assets/img/logo-dark.svg",alt:"",height:"16"})})]})]}),e.jsxs("ul",{className:"list-unstyled topnav-menu topnav-menu-left mb-0",children:[e.jsx("li",{children:e.jsx("button",{className:"button-menu-mobile disable-btn waves-effect",children:e.jsx("i",{className:"fe-menu"})})}),e.jsx("li",{children:e.jsx("h4",{className:"page-title-main",children:a})})]}),e.jsx("div",{className:"clearfix"})]})),g=()=>{const s=t.Local.get("adminto_settings")??{},a=document.getElementById("bs-default-stylesheet"),l=document.getElementById("bs-dark-stylesheet"),r=document.getElementById("app-default-stylesheet"),n=document.getElementById("app-dark-stylesheet"),o=document.getElementById("dg-default-stylesheet"),m=document.getElementById("dg-dark-stylesheet");s.theme=="dark"?(l.disabled=!1,n.disabled=!1,m.disabled=!1,a.disabled=!0,r.disabled=!0,o.disabled=!0):(a.disabled=!1,r.disabled=!1,o.disabled=!1,l.disabled=!0,n.disabled=!0,m.disabled=!0);const c=document.body;return c.setAttribute("data-layout-width",s.width??"fluid"),c.setAttribute("data-layout-menu-position",s.menuPosition??"fixed"),c.setAttribute("data-sidebar-color",s.menuColor??"light"),c.setAttribute("data-sidebar-showuser",s.userInfo??!0),c.setAttribute("data-sidebar-size",s.menuSize??"default"),c.setAttribute("data-topbar-color",s.navbarColor??"light"),e.jsx("div",{className:"right-bar",children:e.jsxs("div",{"data-simplebar":!0,className:"h-100",children:[e.jsxs("div",{className:"rightbar-title",children:[e.jsx("a",{href:"#",className:"right-bar-toggle float-end",children:e.jsx("i",{className:"mdi mdi-close"})}),e.jsx("h4",{className:"font-16 m-0 text-white",children:"Configurar tema"})]}),e.jsx("div",{className:"tab-content pt-0",children:e.jsx("div",{className:"tab-pane active",id:"settings-tab",role:"tabpanel",children:e.jsxs("div",{className:"p-3",children:[e.jsxs("div",{className:"alert alert-warning",role:"alert",children:[e.jsx("strong",{children:"Modifica "})," el tema, el menu, la barra superior, etc."]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Tema principal"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",name:"color-scheme-mode",id:"light-mode-check",defaultChecked:s.theme=="dark"}),e.jsx("label",{className:"form-check-label",htmlFor:"light-mode-check",children:s.theme=="dark"?"Modo oscuro":"Modo claro"})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Ancho de la ventana"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",name:"width",id:"fluid-check",defaultChecked:s.width=="boxed"}),e.jsx("label",{className:"form-check-label",htmlFor:"fluid-check",children:s.width=="boxed"?"Encuadrado":"Completo"})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Posicion del menu y el nabvar"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",name:"menus-position",id:"fixed-check",defaultChecked:s.menuPosition=="scrollable"}),e.jsx("label",{className:"form-check-label",htmlFor:"fixed-check",children:s.menuPosition=="scrollable"?"Posision dinamica":"Posicion fija"})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Color del menu"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-color",value:"light",id:"light-check",defaultChecked:!s.menuColor||s.menuColor=="light"}),e.jsx("label",{className:"form-check-label",htmlFor:"light-check",children:"Claro"})]}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-color",value:"dark",id:"dark-check",defaultChecked:s.menuColor=="dark"}),e.jsx("label",{className:"form-check-label",htmlFor:"dark-check",children:"Oscuro"})]}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-color",value:"brand",id:"brand-check",defaultChecked:s.menuColor=="brand"}),e.jsx("label",{className:"form-check-label",htmlFor:"brand-check",children:"Brand"})]}),e.jsxs("div",{className:"form-check form-switch mb-3",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-color",value:"gradient",id:"gradient-check",defaultChecked:s.menuColor=="gradient"}),e.jsx("label",{className:"form-check-label",htmlFor:"gradient-check",children:"Gradiente"})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Medida del menu"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-size",value:"default",id:"default-size-check",defaultChecked:!s.menuSize||s.menuSize=="default"}),e.jsx("label",{className:"form-check-label",htmlFor:"default-size-check",children:"Por defecto"})]}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-size",value:"condensed",id:"condensed-check",defaultChecked:s.menuSize=="condensed"}),e.jsxs("label",{className:"form-check-label",htmlFor:"condensed-check",children:["Condensado ",e.jsx("small",{children:"(Tamaño extra pequeño)"})]})]}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"radio",className:"form-check-input",name:"leftsidebar-size",value:"compact",id:"compact-check",defaultChecked:s.menuSize=="compact"}),e.jsxs("label",{className:"form-check-label",htmlFor:"compact-check",children:["Compacto ",e.jsx("small",{children:"(Tamaño pequeño)"})]})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Informacion del Usuario (Menu)"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",name:"leftsidebar-user",value:"fixed",id:"sidebaruser-check",defaultChecked:s.userInfo!=!1}),e.jsx("label",{className:"form-check-label",htmlFor:"sidebaruser-check",children:s.userInfo=="false"?"Ocultar":"Mostrar"})]}),e.jsx("h6",{className:"fw-medium font-14 mt-4 mb-2 pb-1",children:"Color de la barra superior"}),e.jsxs("div",{className:"form-check form-switch mb-1",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",name:"topbar-color",value:"dark",id:"darktopbar-check",defaultChecked:s.navbarColor=="dark"}),e.jsx("label",{className:"form-check-label",htmlFor:"darktopbar-check",children:s.navbarColor=="dark"?"Oscuro":"Acorde al cuerpo"})]}),e.jsx("div",{className:"d-grid mt-4",children:e.jsx("button",{className:"btn btn-primary",id:"resetBtn",children:"Restablecer"})})]})})})]})})};moment.tz.setDefault("UTC");const E=({children:s,title:a,...l})=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{id:"wrapper",children:[e.jsx(p,{...l,title:a}),e.jsx(b,{...l}),e.jsxs("div",{className:"content-page",children:[e.jsx("div",{className:"content",children:e.jsx("div",{className:"container-fluid",children:s})}),e.jsx(j,{})]})]}),e.jsx(g,{...l}),e.jsx("div",{className:"rightbar-overlay"})]});export{E as B,d as L};
