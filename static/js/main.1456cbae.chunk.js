(this["webpackJsonpinnowise-lab-internship-level-1-clever-to-do-list"]=this["webpackJsonpinnowise-lab-internship-level-1-clever-to-do-list"]||[]).push([[0],Array(37).concat([function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=(n(37),n(5)),u=n(10),o=n(6),l=(n(38),n(31)),j=(n(28),n(40),l.a.initializeApp({apiKey:"AIzaSyClViBygyvRmhfWcInnnP6yXAKn6JFuJGo",authDomain:"clever-to-do-list-29817.firebaseapp.com",databaseURL:"https://clever-to-do-list-29817-default-rtdb.firebaseio.com",projectId:"clever-to-do-list-29817",storageBucket:"clever-to-do-list-29817.appspot.com",messagingSenderId:"910035101196",appId:"1:910035101196:web:c4e0a2b9c9dbdb48e1b029"})),d=j.database(),b=j.auth(),h=(n(44),n(1));var O=function(){return Object(h.jsx)("div",{className:"loading",children:"loading..."})},f=c.a.createContext();function v(){return Object(a.useContext)(f)}function p(e){var t=e.children,n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)([]),o=Object(i.a)(u,2),l=o[0],j=o[1],v=Object(a.useState)(!0),p=Object(i.a)(v,2),x=p[0],m=p[1];function k(e){e&&d.ref("users/".concat(e.uid)).once("value",(function(e){var t=e.val();if(t instanceof Object&&t.tasks){var n=JSON.parse(t.tasks,(function(e,t){return"date"===e?new Date(t):t}));j(n)}}))}Object(a.useEffect)((function(){return b.onAuthStateChanged((function(e){s(e),k(e),m(!1)}))}),[]);var g={tasks:l,currentUser:r,setTasks:j,signin:function(e,t){return b.signInWithEmailAndPassword(e,t)},register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},signout:function(){return b.signOut()},readUserData:k,writeUserData:function(){var e=r.uid,t=JSON.stringify(l);d.ref("users/".concat(e)).set({tasks:t})}};return Object(h.jsx)(f.Provider,{value:g,children:x?Object(h.jsx)(O,{}):t})}function x(e){var t=e.component,n=e.currentTask,a=e.setCurrentTask,c=e.currentDate,r=e.setCurrentDate,s=e.toDay,i=v().currentUser;return Object(h.jsx)(o.b,{render:function(){return i?Object(h.jsx)(t,{currentTask:n,setCurrentTask:a,currentDate:c,setCurrentDate:r,toDay:s}):Object(h.jsx)(o.a,{to:"/signin"})}})}var m=n(15),k=n.n(m),g=n(18);n(51);var D=function(e){var t=e.value,n=e.disabled;return Object(h.jsx)("input",{className:"button",type:"submit",value:t,disabled:n})},_=n(19),N=n(12);n(52);var w=function(e){var t=e.children,n=e.onSubmit,c=Object(a.useState)({email:"",password:""}),r=Object(i.a)(c,2),s=r[0],u=r[1],o=function(e){var t=e.target,n=t.name,a=t.value;u(Object(N.a)(Object(N.a)({},s),Object(_.a)({},n,a)))};return Object(h.jsxs)("form",{className:"form",onSubmit:function(e){return n(s,e)},children:[Object(h.jsx)("input",{className:"form__email",type:"email",name:"email",value:s.email,placeholder:"Email",onChange:o,required:!0}),Object(h.jsx)("input",{className:"form__password",type:"password",name:"password",value:s.password,placeholder:"Password",onChange:o,required:!0}),t]})};n(53),n(54);var C=function(e){return e.value?Object(h.jsx)("div",{className:"alert",children:e.value}):null};n(55);var y=function(e){var t=e.value,n=e.placeholder,a=e.onChange;return Object(h.jsx)("input",{className:"password-input",type:"password",value:t,onChange:a,placeholder:n})};var S=function(){var e=v().register,t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],d=l[1],b=Object(a.useState)(""),O=Object(i.a)(b,2),f=O[0],p=O[1],x=Object(o.g)(),m=function(){var t=Object(g.a)(k.a.mark((function t(n,a){var c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.email,s=n.password,a.preventDefault(),s===f){t.next=5;break}return r("Passwords do not match"),t.abrupt("return");case 5:return t.prev=5,r(""),d(!0),t.next=10,e(c,s);case 10:x.push("/"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(5),r(t.t0.message),d(!1);case 17:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"register",children:[Object(h.jsx)("div",{className:"register__nav",children:Object(h.jsxs)(u.b,{className:"link",to:"/signin",children:[Object(h.jsx)("div",{className:"register__arrow arrow"}),"Sign in"]})}),Object(h.jsx)(C,{value:c}),Object(h.jsxs)(w,{onSubmit:m,children:[Object(h.jsx)(y,{value:f,onChange:function(e){return p(e.target.value)},placeholder:"Confirm password"}),Object(h.jsx)(D,{disabled:j,value:"Register"})]})]})};n(56);var T=function(){var e=v().signin,t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),l=Object(i.a)(s,2),j=l[0],d=l[1],b=Object(o.g)(),O=function(){var t=Object(g.a)(k.a.mark((function t(n,a){var c,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.email,s=n.password,a.preventDefault(),t.prev=2,r(""),d(!0),t.next=7,e(c,s);case 7:b.push("/"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),r(t.t0.message),d(null);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"signin",children:[Object(h.jsx)("div",{className:"signin__nav",children:Object(h.jsxs)(u.b,{className:"link",to:"/register",children:["Register",Object(h.jsx)("div",{className:"signin__arrow arrow"})]})}),Object(h.jsx)(C,{value:c}),Object(h.jsx)(w,{onSubmit:O,children:Object(h.jsx)(D,{disabled:j,value:"Sing in"})})]})},M=n(14);n(57),n(58);function A(e){return e.setHours(0),e.setMinutes(0),e.setSeconds(0),e.setMilliseconds(0),e}function F(e){return["Sun","Mon","Tue","Wen","Thu","Fri","Sat"][e.getDay()]}function E(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}function J(e){return e<10?"0".concat(e):e}var U=function(e){var t=e.date,n=e.currentDate,a=e.setCurrentDate,c=v().tasks,r=A(new Date);return Object(h.jsxs)("button",{type:"button",className:"card btn",onClick:function(){a(t)},children:[Object(h.jsxs)("div",{className:function(){var e="card__day";return+r===+t&&(e+=" card__day_today"),+n===+t&&(e+=" card__day_current"),e}(),children:[Object(h.jsx)("span",{className:"card__text",children:F(t)}),Object(h.jsx)("span",{className:"card__number",children:t.getDate()})]}),Object(h.jsxs)("div",{className:"card__board",children:[c.some((function(e){return e.date.getTime()===t.getTime()&&!e.checked}))?Object(h.jsx)("div",{className:"card__pending"}):null,c.some((function(e){return e.date.getTime()===t.getTime()&&e.checked}))?Object(h.jsx)("div",{className:"card__fulfilled"}):null]})]})};function W(e){var t=e.getDate(),n=[];do{n.push(new Date(e)),e.setDate(e.getDate()+1)}while(e.getDate()!==t);return n}var Y=function(e){var t=e.currentDate,n=e.setCurrentDate,c=A(new Date),r=Object(a.useState)(W(c)),s=Object(i.a)(r,2),u=s[0],o=s[1],l=u.map((function(e){return Object(h.jsx)(U,{date:e,currentDate:t,setCurrentDate:n},e)})),j=function(e){!function(e){var t=document.querySelector(".calendar"),n=e.deltaY<0&&t.scrollLeft>0,a=t.scrollWidth-t.clientWidth,c=e.deltaY>0&&t.scrollLeft<a;(n||c)&&(e.preventDefault(),t.scrollLeft+=e.deltaY)}(e),function(){var e=document.querySelector(".calendar"),t=e.scrollWidth-e.clientWidth;if(e.scrollLeft===t){var n=u[u.length-1],a=new Date(n);a.setDate(a.getDate()+1);var c=W(a);o([].concat(Object(M.a)(u),Object(M.a)(c)))}}()};return Object(a.useEffect)((function(){document.querySelector(".calendar").addEventListener("wheel",j)})),Object(h.jsx)("ul",{className:"calendar",children:l})};n(59),n(60),n(61);var q=function(e){var t,n=e.task,c=e.setCurrentTask,r=Object(o.g)(),s=v(),i=s.tasks,u=s.setTasks,l=s.writeUserData;return Object(a.useEffect)((function(){return function(){return l()}}),[]),Object(h.jsxs)("button",{type:"button",className:"task",onClick:function(){t=setTimeout((function(){}),200)},onDoubleClick:function(){var e=i.find((function(e){return e===n})),a=i.filter((function(e){return e!==n}));c(e),u(a),r.push("/task"),clearTimeout(t)},children:[Object(h.jsx)("input",{className:"task__input",type:"checkbox",checked:n.checked,onChange:function(){n.checked=!n.checked,u(Object(M.a)(i))}}),n.title]})};var I=function(e){var t=e.setCurrentTask,n=e.currentDate,a=v().tasks,c=[];return a.forEach((function(e,a){if(+e.date===+n){var r=Object(h.jsx)(q,{task:e,setCurrentTask:t},a.toString());c.push(r)}})),[Object(h.jsxs)("div",{className:"task-count",children:[c.length," Tasks Today"]},22),Object(h.jsx)("ul",{className:"task-list",children:c},11)]};var L=function(e){var t=e.currentTask,n=e.setCurrentTask,c=e.currentDate,r=e.setCurrentDate,s=Object(a.useState)(""),l=Object(i.a)(s,2),j=l[0],d=l[1],b=v().signout,O=Object(o.g)(),f=function(){var e=Object(g.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(""),e.prev=1,e.next=4,b();case 4:O.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),d(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"tasker",children:[Object(h.jsxs)("div",{className:"header",children:["Tasker",Object(h.jsx)("button",{className:"signout",type:"button",onClick:f,children:"Sign out"})]}),Object(h.jsx)(C,{value:j}),Object(h.jsx)(Y,{currentDate:c,setCurrentDate:r}),Object(h.jsx)(I,{currentTask:t,setCurrentTask:n,currentDate:c,setCurrentDate:r}),Object(h.jsx)(u.b,{className:"tasker__link",to:"/task",children:"+ Add a New Task"})]})};n(62),n(63);var P=function(e){var t=e.checked,n=e.title,a=e.onChange;return Object(h.jsxs)("div",{className:"task",children:[Object(h.jsx)("input",{className:"task__checkbox",type:"checkbox",name:"checkbox",checked:t,onChange:a}),Object(h.jsx)("input",{className:"task__text",type:"text",value:n,name:"title",onChange:a})]})},R=(n(64),n(65),n(66),n.p+"static/media/arrow.23e24faa.svg");var z=function(e){var t=e.date,n=e.setDate;return Object(h.jsxs)("div",{className:"datepicker-header",children:[Object(h.jsx)("button",{type:"button",className:"datepicker-header__btn btn",onClick:function(){n(new Date(t.setMonth(t.getMonth()-1)))},children:Object(h.jsx)("img",{className:"datepicker-header__arrow_right",src:R,alt:""})}),Object(h.jsx)("div",{className:"datepicker-header__date",children:"".concat(E(t)," ").concat(t.getFullYear())}),Object(h.jsx)("button",{type:"button",className:"datepicker-header__btn btn",onClick:function(){n(new Date(t.setMonth(t.getMonth()+1)))},children:Object(h.jsx)("img",{src:R,alt:""})})]})};n(67),n(68);var B=function(e){var t=e.date,n=e.onClick,a=e.checkedDate,c=A(new Date),r="date-btn";return+t===+a?r+=" date-btn__checked":+c===+t&&(r+=" date-btn__today"),Object(h.jsx)("button",{className:r,type:"button",onClick:function(){return n(t)},children:t.getDate()})};var K=function(e){var t=e.date,n=e.onChange,c=new Date(t),r=Object(a.useState)(new Date(t)),s=Object(i.a)(r,2),u=s[0],o=s[1],l=new Date(c.getFullYear(),c.getMonth()+1,0).getDate(),j=new Date(c.getFullYear(),c.getMonth(),l).getDay(),d=new Date(c.getFullYear(),c.getMonth(),1).getDay(),b=[],O=[],f=function(e){o(new Date(e)),n({target:{name:"date",value:e}})},v=function(){return Math.random()};return function(){if(0!==d)for(var e=0;e<d;e++)O.push(Object(h.jsx)("td",{},v()));else for(var t=0;t<0;t++)O.push(Object(h.jsx)("td",{},v()))}(),function(){for(var e=1;e<=l;e++){var t=new Date(c.getFullYear(),c.getMonth(),e);O.push(Object(h.jsx)("td",{children:Object(h.jsx)(B,{date:t,checkedDate:u,onClick:f})},v())),6===t.getDay()&&(b.push(Object(h.jsx)("tr",{children:O.slice()},v())),O=[])}}(),function(){if(0!==j)for(var e=j;e<7;e++)O.push(Object(h.jsx)("td",{},v()))}(),b.push(Object(h.jsx)("tr",{children:O},v())),Object(h.jsx)("tbody",{children:b})};var G=function(e){var t=e.data,n=e.onChange,c=Object(a.useState)(new Date(t)),r=Object(i.a)(c,2),s=r[0],u=r[1];return Object(h.jsxs)("div",{className:"datepicker",id:"datepicker",children:[Object(h.jsx)(z,{date:s,setDate:u}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Sun"}),Object(h.jsx)("th",{children:"Mon"}),Object(h.jsx)("th",{children:"Tue"}),Object(h.jsx)("th",{children:"Wen"}),Object(h.jsx)("th",{children:"Thu"}),Object(h.jsx)("th",{children:"Fri"}),Object(h.jsx)("th",{children:"Sat"})]})}),Object(h.jsx)(K,{date:s,onChange:n})]})]})};var H=function(e){var t=e.task,n=e.handleChange,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=t.date,l="".concat(J(o.getMonth()+1),"/").concat(J(o.getDate()),"/").concat(o.getFullYear());return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"date-control",children:[Object(h.jsx)("div",{className:"date-control__info",type:"text",children:l}),Object(h.jsx)("input",{type:"button",value:"date",onClick:function(){u(!s)}})]}),s?Object(h.jsx)(G,{name:"date",data:t.date,onChange:n}):null]})};n(69);var V=function(e){var t=e.currentTask,n=e.setCurrentTask,a=e.task,c=v(),r=c.tasks,s=c.setTasks,i=Object(o.g)(),u=t?"Update":"Save",l=function(e){"delete"!==e.target.name&&s((function(){return[].concat(Object(M.a)(r),[Object(N.a)({},a)])})),n(null),i.push("/")};return Object(h.jsxs)("div",{className:"actions",children:[Object(h.jsx)("button",{className:"delete-btn btn",type:"button",name:"delete",onClick:l,children:"Delete"}),Object(h.jsx)("button",{className:"save-btn btn",type:"button",name:u,onClick:l,children:u})]})};var X=function(e){var t=e.currentTask,n=e.setCurrentTask,c={checked:!1,title:"Title",description:"description",date:A(e.currentDate)},r=v(),s=r.tasks,u=r.setTasks,l=r.writeUserData,j=Object(a.useState)(t||c),d=Object(i.a)(j,2),b=d[0],O=d[1],f=Object(o.g)(),p=function(e){var t=e.target,n=t.name,a=t.value,c=t.checked;O("checkbox"===n?Object(N.a)(Object(N.a)({},b),{},{checked:c}):Object(N.a)(Object(N.a)({},b),{},Object(_.a)({},n,a)))};return Object(a.useEffect)((function(){return function(){return l()}})),Object(h.jsxs)("div",{className:"task-page",children:[Object(h.jsxs)("div",{className:"task-page__container",children:[Object(h.jsx)("div",{className:"task-page__nav",children:Object(h.jsxs)("button",{type:"button",name:"back",className:"task-page__back",onClick:function(){t&&(u([].concat(Object(M.a)(s),[Object(N.a)({},t)])),n(null)),f.push("/")},children:[Object(h.jsx)("div",{className:"task-page__arrow arrow"}),Object(h.jsx)("div",{className:"text_nowrap",children:"Today's Task"})]})}),Object(h.jsx)(P,{checked:b.checked,title:b.title,onChange:p}),Object(h.jsx)("textarea",{className:"task-page__description",name:"description",value:b.description,onChange:p}),Object(h.jsx)(H,{task:b,handleChange:p})]}),Object(h.jsx)(V,{currentTask:t,setCurrentTask:n,task:b})]})};var Q=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(A(new Date)),s=Object(i.a)(r,2),l=s[0],j=s[1];return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(u.a,{children:Object(h.jsx)(p,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(x,{exact:!0,path:"/",component:L,setCurrentTask:c,currentDate:l,setCurrentDate:j}),Object(h.jsx)(x,{path:"/task",component:X,currentTask:n,setCurrentTask:c,currentDate:l}),Object(h.jsx)(o.b,{path:"/signin",component:T}),Object(h.jsx)(o.b,{path:"/register",component:S})]})})})})})};s.a.render(Object(h.jsx)(Q,{}),document.querySelector("#root"))}]),[[70,1,2]]]);
//# sourceMappingURL=main.1456cbae.chunk.js.map