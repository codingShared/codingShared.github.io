(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},63:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(17),a=c.n(s),r=(c(60),c(35)),o=c(23),j=c(99),l=c(96),h=c(100),d=c(98),b=c(97),O=c(55),p=c(20),u=c(7),x=(c(61),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,imgSrc:"https://codingapple1.github.io/shop/shoes2.jpg",title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,imgSrc:"https://codingapple1.github.io/shop/shoes3.jpg",title:"Grey Yordan",content:"Born in the States",price:13e4}]),m=c(2);var g=function(e){return Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("a",{href:"./detail/"+e.i,children:Object(m.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"})}),Object(m.jsx)("h4",{children:e.shoe.title}),Object(m.jsxs)("p",{children:[e.shoe.content," & ",e.shoe.price,"\uc6d0"]})]})};c(63);var f=function(e){var t=Object(u.g)().id;return Object(m.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[t]]})};var v=function(e){var t=Object(n.useState)(!0),c=Object(o.a)(t,2),i=c[0],s=c[1];Object(n.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return console.log("\ucc98\uc74c\ud55c\ubc88\ub9cc \uc2e4\ud589"),function(){clearTimeout(e)}}),[]);var a=Object(n.useState)(""),j=Object(o.a)(a,2),l=(j[0],j[1],Object(u.g)().id),h=Object(u.f)();return Object(m.jsxs)("div",{className:"container",children:[!0===i?Object(m.jsx)("div",{className:"my-alert",children:Object(m.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(Number(l)+1)+".jpg",width:"100%"})}),Object(m.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(m.jsx)("h4",{className:"pt-5",children:e.shoes[l].title}),Object(m.jsx)("p",{children:e.shoes[l].content}),Object(m.jsxs)("p",{children:[e.shoes[l].price,"\uc6d0"]}),Object(m.jsx)(f,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){var t=Object(r.a)(e.\uc7ac\uace0);t[l]--,e.\uc7ac\uace0\ubcc0\uacbd(t)},children:"\uc8fc\ubb38\ud558\uae30"}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){h.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},N=c(52),S=c.n(N);var k=function(){var e,t=Object(n.useState)(x),c=Object(o.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)([10,11,12]),f=Object(o.a)(a,2),N=f[0],k=f[1];return Object(n.useEffect)((function(){S.a.get("https://codingapple1.github.io/shop/data2.json").then((function(t){e=Object(r.a)(i);for(var c=0;c<t.data.length;c++)e.push(t.data[c])}))}),[i]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j.a,{bg:"light",expand:"lg",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(j.a.Brand,{href:"/",children:"Shoe Shop"}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(h.a,{className:"me-auto",children:[Object(m.jsx)(h.a.Link,{as:p.b,to:"/",children:"Home"}),Object(m.jsx)(h.a.Link,{as:p.b,to:"/detail",children:"Detail"}),Object(m.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(m.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(m.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(m.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(m.jsx)(d.a.Divider,{}),Object(m.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(m.jsxs)(u.c,{children:[Object(m.jsxs)(u.a,{exact:!0,path:"/",children:[Object(m.jsxs)(b.a,{className:"background",children:[Object(m.jsx)("h1",{children:"Hello, world!"}),Object(m.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(m.jsx)("p",{children:Object(m.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:i.map((function(e,t){return Object(m.jsx)(g,{shoe:e,i:t},t)}))}),Object(m.jsx)("button",{className:"btn btn-danger",onClick:function(){s(e)},children:"\ub354\ubcf4\uae30"})]})]}),Object(m.jsx)(u.a,{path:"/detail/:id",children:Object(m.jsx)(v,{shoes:i,"\uc7ac\uace0":N,"\uc7ac\uace0\ubcc0\uacbd":k})})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(p.a,{children:Object(m.jsx)(k,{})})}),document.getElementById("root")),w()}},[[90,1,2]]]);
//# sourceMappingURL=main.3a7b5165.chunk.js.map