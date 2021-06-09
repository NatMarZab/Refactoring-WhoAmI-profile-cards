(this["webpackJsonptemplate-of-react"]=this["webpackJsonptemplate-of-react"]||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var s=a(1),l=a.n(s),c=a(9),i=a.n(c),n=(a(2),a(3)),r=a(4),j=a(7),o=a(6),m=a.p+"static/media/logo-header.c5d049fb.png",d=a(0);var b=function(){return Object(d.jsx)("header",{className:"header-container2",children:Object(d.jsx)("img",{className:"main-logo2",src:m})})};var h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"maincontainer1__profilecard",children:[Object(d.jsxs)("div",{className:"maincontainer1__text js-headerpreview",children:[Object(d.jsx)("h2",{className:"maincontainer1__title js-name",children:"Nombre apellido"}),Object(d.jsx)("h3",{className:"maincontainer1__subtitle js-job",children:"Front-end developer"})]}),Object(d.jsx)("div",{className:"maincontainer1__img js__profile-preview js__border-palette"}),Object(d.jsxs)("nav",{className:"maincontainer1__links-container js-footerpreview",children:[Object(d.jsx)("a",{href:"",className:"maincontainer1__links js-telefono js__link__radius",children:Object(d.jsx)("i",{className:"fas fa-mobile-alt js__link__pallete"})}),Object(d.jsx)("a",{href:"",className:"maincontainer1__links js-mail js__link__radius",children:Object(d.jsx)("i",{className:"far fa-envelope js__link__pallete"})}),Object(d.jsx)("a",{href:"",className:"maincontainer1__links js-linkedin js__link__radius",children:Object(d.jsx)("i",{className:"fab fa-linkedin-in js__link__pallete"})}),Object(d.jsx)("a",{href:"",className:"maincontainer1__links js-git js__link__radius",children:Object(d.jsx)("i",{className:"fab fa-github-alt js__link__pallete"})})]})]})})};var p=function(e){return Object(d.jsxs)("button",{className:"maincontainer1__button js-btn-reset",type:"reset",children:[Object(d.jsx)("i",{className:"far fa-trash-alt"})," Reset"]})};var O=function(){return Object(d.jsxs)("section",{className:"maincontainer1",children:[Object(d.jsx)(p,{}),Object(d.jsx)(h,{})]})};var x=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{className:"optionColor",children:[Object(d.jsx)("label",{htmlFor:e.id,children:Object(d.jsx)("input",{type:"radio",value:e.value,className:"choosecolor ".concat(e.className),id:e.id,name:"palette"})}),Object(d.jsx)("li",{className:e.palette1}),Object(d.jsx)("li",{className:e.palette2}),Object(d.jsx)("li",{className:e.palette3})]})})};var u=function(){return Object(d.jsx)("fieldset",{className:"colors",children:Object(d.jsxs)("div",{className:"colors_design",children:[Object(d.jsx)("h3",{className:"colorstitle",children:"Colores"}),Object(d.jsxs)("div",{className:"palette",children:[Object(d.jsx)(x,{value:"1",className:"js-CHeckColor1",id:"palets",palette1:"opt1-1",palette2:"opt1-3",palette3:"opt1-2"}),Object(d.jsx)(x,{value:"2",className:"js-CHeckColor2",id:"palets1",palette1:"opt2-1",palette2:"opt2-2",palette3:"opt2-3"}),Object(d.jsx)(x,{value:"3",className:"js-CHeckColor3",id:"palets2",palette1:"opt3-1",palette2:"opt3-2",palette3:"opt3-3"})]})]})})},N=a(5),f=a(10);var g=function(){return Object(d.jsx)("section",{className:"preview",children:Object(d.jsx)("nav",{children:Object(d.jsxs)("p",{className:"preview__paragraph",children:["La tarjeta ha sido creada:",Object(d.jsx)("a",{className:"preview__url",href:"#"})," ",Object(d.jsxs)("a",{className:"preview__button",href:"",children:[Object(d.jsx)("i",{className:"fab fa-twitter preview__twitter"})," Compartir en twitter"]})]})})})};var I=function(e){var t=Object(s.useState)(!1),a=Object(f.a)(t,2);return a[0],a[1],Object(d.jsxs)("fieldset",{className:"share js-share",children:[Object(d.jsx)("nav",{className:"share__create-button js-containerShare",children:Object(d.jsxs)("a",{href:"",className:"share__create-button-go ",type:"submit",value:"CREAR TARJETA",children:[Object(d.jsx)("i",{className:"far fa-address-card"})," CREAR TARJETA"]})}),e.errorMsg?Object(d.jsx)("p",{className:"error",children:e.errorMsg}):null,e.showButtons&&!e.errorMsg?Object(d.jsx)(g,{}):null]})},A=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={isOpen:!1},s.eventCollapsable=s.eventCollapsable.bind(Object(N.a)(s)),s}return Object(r.a)(a,[{key:"eventCollapsable",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"colors__line",children:[Object(d.jsxs)("legend",{className:"colors__title",children:[Object(d.jsx)("i",{className:"far fa-object-ungroup boxy js-colorea","aria-hidden":"true"}),this.props.text]}),Object(d.jsx)("i",{className:"fas fa-chevron-up colors-up"})]}),Object(d.jsx)("div",{className:"form__content",children:this.props.children})]})}}]),a}(l.a.Component);var v=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"details__label",htmlFor:e.id,children:e.text}),Object(d.jsx)("input",{className:"details__input",id:e.id,type:"text",name:e.name,title:e.title,placeholder:e.placeholder})]})};var C=function(){return Object(d.jsx)("fieldset",{className:"details",children:Object(d.jsxs)("div",{className:"details__form",children:[Object(d.jsx)(v,{text:"Nombre completo *",id:"name",name:"fullName",title:"fullName",placeholder:"Ej: Sally Hill"}),Object(d.jsx)(v,{text:"Puesto *",id:"work",name:"workTitle",title:"workTitle",placeholder:"Ej: Front-end unicorn"}),Object(d.jsx)("label",{className:"details__label",htmlFor:"photo",children:"Imagen de perfil *"}),Object(d.jsxs)("div",{className:"action",children:[Object(d.jsx)("label",{className:"details__photo-button",htmlFor:"img-selector",children:"A\xf1adir imagen"}),Object(d.jsx)("input",{type:"file",name:"photo",id:"img-selector",className:"action__hiddenField js__profile-upload-btn"}),Object(d.jsx)("div",{className:"profile__image js__profile-image details__photo-preview",style:{backgroundImage:""}})]}),Object(d.jsx)(v,{text:"Email *",id:"email",name:"email",title:"email",placeholder:"Ej: Sally-hill@gmail.com"}),Object(d.jsx)(v,{text:"Tel\xe9fono",id:"phone",name:"phone",title:"phone",placeholder:"Ej: 555-55-55-55"}),Object(d.jsx)(v,{text:"LinkedIn *",id:"linkedin",name:"linkedin",title:"linkedin",placeholder:"Ej: linkedin.com/in/sally.hill"}),Object(d.jsx)(v,{text:"Github *",id:"github",name:"github",title:"github",placeholder:"Ej: @sally-hill"})]})})};var w=function(){return Object(d.jsxs)("form",{className:"form js-form",action:"#",id:"resetform",children:[Object(d.jsx)(A,{children:Object(d.jsx)(u,{})}),Object(d.jsx)(A,{children:Object(d.jsx)(C,{})}),Object(d.jsx)(A,{children:Object(d.jsx)(I,{})})]})};var E=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("main",{className:"main",children:[Object(d.jsx)(O,{}),Object(d.jsx)(w,{})]})})};var k=function(){return Object(d.jsxs)("footer",{className:"footer",children:[Object(d.jsx)("small",{className:"copy ",children:" Awesome profile cards @ 2021 "}),Object(d.jsx)("img",{className:"logo-adalab",src:"data:image/png;base64,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",alt:"logo logo-adalab"})]})},q=function(e){Object(j.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(E,{}),Object(d.jsx)(k,{})]})}}]),a}(l.a.Component);i.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(q,{})}),document.getElementById("root"))},2:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.4fd4d575.chunk.js.map