(this["webpackJsonpfinance-frontend"]=this["webpackJsonpfinance-frontend"]||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(33),i=a.n(r),s=a(23),l=(a(112),a(113),a(114),a(1));var o=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)(s.c,{className:"header__title",to:"/finance-frontend",children:"\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"}),Object(l.jsxs)("div",{className:"header__user",children:[Object(l.jsx)(s.c,{activeclassname:"active",className:"header__link",to:"/finance-frontend",children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"}),Object(l.jsx)(s.c,{activeclassname:"active",className:"header__link",to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(l.jsx)(s.c,{activeclassname:"active",className:"header__link",to:"/registration",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})},j=a(177),d=a(178),b=a(179),u=a(93),x=a(176),m=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"#161616",secondary:"rgba(255, 255, 255, .5)"}}});function O(){return Object(l.jsxs)(j.a,{variant:"body2",color:"text.secondary",align:"center",children:["by ",Object(l.jsx)(d.a,{color:"inherit",href:"https://github.com/victorbej",children:"Victor Bej"})," ",(new Date).getFullYear()]})}var h=function(){return Object(l.jsx)(x.a,{theme:m,children:Object(l.jsx)(b.a,{sx:{bgcolor:"background.primary",p:2},component:"footer",children:Object(l.jsx)(O,{})})})},p=a(174),f=a(182),g=a(170),v=a(181),y=a(172),_=a(175),w=a(61),C=a.n(w),N=a(180),k=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"rgb(255, 255, 255)",secondary:"rgba(255, 255, 255, .5)"}}});var S=function(){return Object(l.jsx)(x.a,{theme:k,children:Object(l.jsx)(N.a,{component:"main",maxWidth:"xs",children:Object(l.jsxs)(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)(p.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(l.jsx)(C.a,{})}),Object(l.jsx)(j.a,{component:"h1",variant:"h5",children:"\u0412\u043e\u0439\u0442\u0438"}),Object(l.jsxs)(b.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},noValidate:!0,sx:{mt:1},children:[Object(l.jsx)(g.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0}),Object(l.jsx)(g.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password"}),Object(l.jsx)(v.a,{control:Object(l.jsx)(y.a,{value:"remember",color:"primary"}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),Object(l.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(l.jsx)(_.a,{container:!0,children:Object(l.jsx)(_.a,{item:!0,children:Object(l.jsx)(d.a,{href:"#",variant:"body2",children:"\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})})]})]})})})},W=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"rgb(255, 255, 255)",secondary:"rgba(255, 255, 255, .5)"}}});var B=function(){return Object(l.jsx)(x.a,{theme:W,children:Object(l.jsx)(N.a,{component:"main",maxWidth:"xs",children:Object(l.jsxs)(b.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(l.jsx)(p.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(l.jsx)(C.a,{})}),Object(l.jsx)(j.a,{component:"h1",variant:"h5",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(l.jsxs)(b.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({email:t.get("email"),password:t.get("password")})},sx:{mt:3},children:[Object(l.jsxs)(_.a,{container:!0,spacing:2,children:[Object(l.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(l.jsx)(g.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"\u0418\u043c\u044f",autoFocus:!0})}),Object(l.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(l.jsx)(g.a,{required:!0,fullWidth:!0,id:"lastName",label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"lastName",autoComplete:"family-name"})}),Object(l.jsx)(_.a,{item:!0,xs:12,children:Object(l.jsx)(g.a,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email"})}),Object(l.jsx)(_.a,{item:!0,xs:12,children:Object(l.jsx)(g.a,{required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"new-password"})}),Object(l.jsx)(_.a,{item:!0,xs:12,children:Object(l.jsx)(v.a,{control:Object(l.jsx)(y.a,{value:"allowExtraEmails",color:"primary"}),label:"\u0421\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e."})})]}),Object(l.jsx)(f.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(l.jsx)(_.a,{container:!0,justifyContent:"flex-end",children:Object(l.jsx)(_.a,{item:!0,children:Object(l.jsx)(d.a,{href:"#",variant:"body2",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0412\u043e\u0439\u0442\u0438"})})})]})]})})})},q=a(15),D=a(13),P=[{id:0,name:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u043c\u0430\u0448\u0438\u043d\u0443"},{id:1,name:"\u041f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442\u044b"},{id:2,name:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u043c\u0438\u044e"},{id:3,name:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443"},{id:4,name:"\u0417\u0430\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043d\u0430\u043b\u043e\u0433\u0438"},{id:5,name:"\u041d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0438\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{id:6,name:"\u0412\u043b\u043e\u0436\u0438\u0442\u044c\u0441\u044f \u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"},{id:7,name:"\u0420\u0430\u0437\u0431\u043e\u0433\u0430\u0442\u0435\u0442\u044c"}];var T=function(){var e=c.a.useState([]),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(b.a,{sx:{"& button":{m:1},margin:"2em"},children:Object(l.jsx)("div",{children:P.map((function(e){return Object(l.jsx)(f.a,{onClick:function(){return function(e){var t=a.find((function(t){return t.id===e.id}))?a.filter((function(t){return t.id!==e.id})):[].concat(Object(q.a)(a),[e]);n(t)}(e)},variant:"contained",size:"large",children:e.name},e.id)}))})}),Object(l.jsx)("div",{children:a.map((function(e,t){return Object(l.jsxs)("div",{children:[t+1,". ",e.name]},e.id)}))})]})},A=a(27),V=a(94),z=a(190),I=a(34),R=a.n(I);var E=function(){var e=c.a.useState(0),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:R.a.counter,children:[Object(l.jsx)("h2",{className:R.a.count,children:a}),Object(l.jsxs)(z.a,{variant:"text","aria-label":"text button group",children:[Object(l.jsx)(f.a,{onClick:function(){n(a+1)},children:"\ud83d\udc4d"}),Object(l.jsx)(f.a,{onClick:function(){n((function(e){return Math.max(e-1,0)}))},children:"\ud83d\udc4e"})]})]})},F=a(4),H=a(184),M=a(185),Y=a(186),G=a(187),J=a(188),K=a(189),L=a(183),Q=a(41),Z=a(92),U=a.n(Z),X=a(91),$=a.n(X),ee=Object(F.a)((function(e){e.expand;var t=Object(V.a)(e,["expand"]);return Object(l.jsx)(L.a,Object(A.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));var te=function(e){var t=c.a.useState(!1),a=Object(D.a)(t,2),n=a[0],r=a[1],i=function(e){r(!n)};return Object(l.jsx)("ul",{children:e.posts.map((function(t,a){return Object(l.jsx)("li",{children:Object(l.jsxs)(H.a,{sx:{maxWidth:"100vh",margin:"auto",marginBottom:"1em"},children:[Object(l.jsx)(M.a,{avatar:Object(l.jsx)(p.a,{sx:{bgcolor:Q.a[500]},"aria-label":"recipe",children:"A"}),action:Object(l.jsx)(L.a,{onClick:function(){return e.remove(t)},"aria-label":"settings",children:Object(l.jsx)($.a,{})}),title:t.title,subheader:"\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c 21, 2021"}),Object(l.jsx)(Y.a,{component:"img",height:"250",image:t.url,alt:t.title}),Object(l.jsx)(G.a,{children:Object(l.jsx)(j.a,{variant:"body2",color:"text.secondary",children:"\u0418\u043c\u044f \u0410\u0432\u0442\u043e\u0440\u0430"})}),Object(l.jsxs)(J.a,{disableSpacing:!0,children:[Object(l.jsx)(E,{}),Object(l.jsx)(ee,{expand:n,onClick:i,"aria-expanded":n,"aria-label":"show more",children:Object(l.jsx)(U.a,{})})]}),Object(l.jsx)(K.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(l.jsx)(G.a,{children:Object(l.jsx)(j.a,{paragraph:!0,children:t.body})})})]})},a)}))})},ae=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"rgb(255, 255, 255)",secondary:"rgba(255, 255, 255, .5)"}}});var ne=function(e){var t=e.create,a=c.a.useState({title:"",url:"",body:""}),n=Object(D.a)(a,2),r=n[0],i=n[1];return Object(l.jsx)(x.a,{theme:ae,children:Object(l.jsxs)("div",{className:R.a.inputs,children:[Object(l.jsx)(g.a,{id:"outlined-basic",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",variant:"outlined",value:r.title,onChange:function(e){return i(Object(A.a)(Object(A.a)({},r),{},{title:e.target.value}))},type:"text"}),Object(l.jsx)(g.a,{id:"outlined-basic",label:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",variant:"outlined",value:r.url,onChange:function(e){return i(Object(A.a)(Object(A.a)({},r),{},{url:e.target.value}))},type:"url"}),Object(l.jsx)(g.a,{id:"outlined-basic",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",variant:"outlined",value:r.body,onChange:function(e){return i(Object(A.a)(Object(A.a)({},r),{},{body:e.target.value}))},type:"text"}),Object(l.jsx)(f.a,{variant:"contained",onClick:function(e){e.preventDefault();var a=Object(A.a)(Object(A.a)({},r),{},{id:Date.now()});i({title:"",url:"",body:""}),t(a)},type:"submit",children:"\u0421\u041e\u0417\u0414\u0410\u0422\u042c"})]})})};function ce(){var e=c.a.useState([{id:1,url:"https://images.unsplash.com/photo-1633311905139-7b6088a69e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442",body:"\u0412 \u044d\u0442\u043e\u0442 \u0441\u0435\u043a\u0442\u043e\u0440 \u0432\u0445\u043e\u0434\u044f\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u0435\u0439, \u0440\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0438, \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u043b\u0438\u0446\u0430 \u0438 \u0440\u0435\u0447\u0438. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043d\u0435\u0439\u0440\u043e\u0441\u0435\u0442\u044f\u043c \u0431\u043e\u0440\u0442\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0441\u0430\u043c\u043e\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0433\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0438\u0442\u044c \u043f\u0435\u0448\u0435\u0445\u043e\u0434\u0430 \u043e\u0442 \u043f\u0440\u043e\u0447\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043d\u0430 \u0442\u0440\u0430\u0441\u0441\u0435. \u0418\u043d\u0432\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442 \u0438 \u0440\u043e\u0431\u043e\u0442\u043e\u0442\u0435\u0445\u043d\u0438\u043a\u0443 \u043c\u043e\u0436\u043d\u043e \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0444\u043e\u043d\u0434\u043e\u0432: IRBO, ROBO, BOTZ, ROBT. \u041c\u043d\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0441\u044f \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0444\u043e\u043d\u0434 IRBO \u2014 iShares Robotics and Artificial Intelligence ETF. \u041e\u043d \u0441\u0430\u043c\u044b\u0439 \u0441\u0432\u0435\u0436\u0438\u0439: \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u0432 \u0430\u0432\u0433\u0443\u0441\u0442\u0435 2018 \u0433\u043e\u0434\u0430. \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0438\u0436\u0435, \u0447\u0435\u043c \u0443 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043e\u0432, \u2014 0,47%."}]),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:R.a.pageTitle,children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u043e\u0441\u0442 \u043e\u0431 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044f\u0445 \u0438\u043b\u0438 \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u0445"]}),0!==a.length?Object(l.jsx)(te,{remove:function(e){var t=!!a.find((function(t){return t.id===e.id}))?a.filter((function(t){return t.id!==e.id})):[].concat(Object(q.a)(a),[e]);n(t)},posts:a}):Object(l.jsx)("h2",{className:R.a.empty,children:"\u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b, \u0438\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c..."}),Object(l.jsx)(ne,{create:function(e){n([].concat(Object(q.a)(a),[e]))}})]})}var re=a(50),ie=a.n(re),se=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"rgb(255, 255, 255)",secondary:"rgba(255, 255, 255, .5)"}}});var le=function(){var e=c.a.useState([16e5]),t=Object(D.a)(e,2),a=t[0],n=t[1];return Object(l.jsx)(x.a,{theme:se,children:Object(l.jsx)("div",{className:ie.a.container,children:Object(l.jsxs)("div",{className:ie.a.wrapper,children:[Object(l.jsx)("h2",{className:ie.a.title,children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),Object(l.jsx)("p",{className:ie.a.body,children:"\u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0432\u0437\u044f\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u043d\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u044c \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441 \u2014 \u043e\u0431\u044b\u0447\u043d\u043e 15% \u043e\u0442 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0436\u0438\u043b\u044c\u044f."}),Object(l.jsxs)("div",{className:ie.a.input,children:[Object(l.jsx)(g.a,{id:"outlined-basic",label:"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f",variant:"outlined",value:a,onChange:function(e){n(e.target.value)},onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},type:"text"}),Object(l.jsx)("p",{children:"\u20bd"})]})]})})})};a(121);var oe=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"Purchase"})})},je=a(169),de=Object(u.a)({palette:{background:{default:"#161616"},text:{primary:"#161616",secondary:"rgba(255, 255, 255, .5)"}}});function be(){return Object(l.jsx)(x.a,{theme:de,children:Object(l.jsx)("main",{children:Object(l.jsx)(b.a,{sx:{bgcolor:"background.primary",pt:8,pb:6},children:Object(l.jsxs)(N.a,{maxWidth:"sm",children:[Object(l.jsx)(j.a,{fontSize:"2em",variant:"h2",align:"center",color:"text.paper",gutterBottom:!0,children:"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"}),Object(l.jsx)(j.a,{variant:"h5",align:"center",color:"text.secondary",fontSize:"1em",paragraph:!0,children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0437\u0430\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0446\u0435\u043b\u0438, \u043d\u0430\u0447\u0430\u0442\u044c \u0432\u0435\u0441\u0442\u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u043e\u0433 \u043e\u0431 \u0438\u043d\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044f\u0445 \u0438 \u0444\u0438\u043d\u0430\u043d\u0441\u0430\u0445, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b \u043c\u0435\u0447\u0442\u044b, \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438."}),Object(l.jsxs)(je.a,{sx:{pt:4},direction:"column",fontSize:"1em",spacing:2,justifyContent:"center",children:[Object(l.jsx)(s.b,{style:{textAlign:"center",color:"#1976d2",fontSize:"1em",padding:"1em"},to:"/targets",variant:"body2",children:"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0446\u0435\u043b\u0435\u0439"}),Object(l.jsx)(s.b,{style:{textAlign:"center",color:"#1976d2",fontSize:"1em",padding:"1em"},to:"/blog",variant:"body2",children:"\u0411\u043b\u043e\u0433"}),Object(l.jsx)(s.b,{style:{textAlign:"center",color:"#1976d2",fontSize:"1em",padding:"1em"},to:"/calculator",variant:"body2",children:"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0438\u043f\u043e\u0442\u0435\u043a\u0438"}),Object(l.jsx)(s.b,{style:{textAlign:"center",color:"#1976d2",fontSize:"1em",padding:"1em"},to:"/purchase",variant:"body2",children:"\u041e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0435 \u043f\u0443\u043a\u0443\u043f\u043a\u0438"})]})]})})})})}var ue=a(14);var xe=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/finance-frontend",element:Object(l.jsx)(be,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/login",element:Object(l.jsx)(S,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/registration",element:Object(l.jsx)(B,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/targets",element:Object(l.jsx)(T,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/blog",element:Object(l.jsx)(ce,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/calculator",element:Object(l.jsx)(le,{})})}),Object(l.jsx)(ue.c,{children:Object(l.jsx)(ue.a,{path:"/purchase",element:Object(l.jsx)(oe,{})})}),Object(l.jsx)(h,{})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{children:Object(l.jsx)(xe,{})})}),document.getElementById("root"))},34:function(e,t,a){e.exports={container:"Posts_container__3SqtV",pageTitle:"Posts_pageTitle__1NIVH",counter:"Posts_counter__1eVjV",count:"Posts_count__3exHh",empty:"Posts_empty__3FIvA",inputs:"Posts_inputs__fYRsw",input:"Posts_input__3YaWt",postBody:"Posts_postBody__qqcyR"}},50:function(e,t,a){e.exports={container:"Calculator_container__3fVOQ",wrapper:"Calculator_wrapper__tf9K5",title:"Calculator_title__YRfqa",body:"Calculator_body__3x3y1",input:"Calculator_input__2G2qO"}}},[[122,1,2]]]);
//# sourceMappingURL=main.3d56aeac.chunk.js.map