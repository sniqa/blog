(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[2],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(50),i=n.n(a),s=n(20),o=n(40),j=n(110),l=n(167),u=n(5),b=n(13),O=n(97),x=n.n(O),f=n(96),d=n.n(f),m=n(98),h=n.n(m),v=n(169),E=n(168),p=n(15),A=n(1);function L(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(u.i)(),i=Object(u.g)();return Object(c.useEffect)((function(){r(i.pathname)}),[i.pathname]),Object(A.jsx)(c.Fragment,{children:Object(A.jsxs)(E.a,{onChange:function(e,t){r(t),a(t)},value:n,sx:{boxShadow:"0px -1px 1px  #eee"},children:[Object(A.jsx)(v.a,{disableTouchRipple:!0,label:"Home",value:p.b.HOME,icon:Object(A.jsx)(d.a,{})}),Object(A.jsx)(v.a,{disableTouchRipple:!0,label:"Article",value:p.b.ARTICLE,icon:Object(A.jsx)(x.a,{})}),Object(A.jsx)(v.a,{disableTouchRipple:!0,label:"User",value:p.b.USER,icon:Object(A.jsx)(h.a,{})})]})})}var T=n(100),I=n.n(T),R=n(101),g=n.n(R),w=n(170),N=n(171),C=n(165),y=n(139),S=n(38),D=n(164);function _(e){var t=e.to,n=e.children,c=Object(u.i)(),r=Object(u.h)(t);return Object(A.jsx)(D.a,{onClick:function(){return c(t)},color:"".concat(r?"primary":"secondary"),children:n})}var k=n(99),M=n.n(k),z=n(138),G=n(143);function F(e){e.to;return Object(A.jsxs)(z.a,{elevation:0,className:"flex items-center mx-1rem",sx:{backgroundColor:"#F3F4F6"},children:[Object(A.jsx)(M.a,{className:"mx-0.3rem",sx:{color:"#666666"}}),Object(A.jsx)(G.c,{placeholder:"Search..."})]})}function H(){var e=Object(s.c)((function(e){return e.user})),t=e.avatar,n=e.username,c=Object(u.i)(),r=Object(u.h)({path:"/",end:!0});return Object(A.jsxs)(w.a,{color:"inherit",elevation:0,position:"sticky",children:[Object(A.jsxs)(N.a,{className:"h-4rem flex justify-between items-center",children:[Object(A.jsx)(S.b,{children:Object(A.jsx)(C.a,{sx:{width:32,height:32},className:"mr-0.6rem",src:t,children:n})}),Object(A.jsx)(S.a,{children:r?Object(A.jsx)("div",{className:"w-35px flex items-center blod text-1.25rem"}):Object(A.jsx)(I.a,{onClick:function(){return c(-1)},color:"secondary",sx:{color:"#666"},fontSize:"large"})}),Object(A.jsx)(S.b,{className:"flex-grow box-border h-2.5rem flex items-center",children:Object(A.jsxs)("nav",{className:"flex items-center flex-wrap",children:[Object(A.jsx)(_,{to:p.b.HOME,children:"Home "}),Object(A.jsx)(_,{to:p.b.ARTICLE,children:"Article "}),Object(A.jsx)(_,{to:p.b.USER,children:"User "})]})}),Object(A.jsx)(F,{to:p.b.SEARCH}),Object(A.jsx)(g.a,{sx:{color:"#666666"}})]}),Object(A.jsxs)(S.a,{className:"box-border h-2.5rem overflow-hidden",children:[Object(A.jsx)(y.a,{variant:"middle"}),Object(A.jsxs)("nav",{className:"flex items-center justify-center overflow-x-auto ",children:[Object(A.jsx)(_,{to:p.b.HOME,children:"Home "}),Object(A.jsx)(_,{to:p.b.ARTICLE,children:"Article "}),Object(A.jsx)(_,{to:p.b.USER,children:"User "})]})]})]})}function U(){return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)(H,{}),Object(A.jsx)("main",{className:"box-border px-1rem pt-0.5rem content-main overflow-y-auto",children:Object(A.jsx)(u.b,{})}),Object(A.jsx)(S.a,{className:"fixed inset-x-0 bottom-0",tag:"footer",children:Object(A.jsx)(L,{})})]})}var P=n(49),Y=n(78);function W(){var e=Object(s.b)();return Object(A.jsx)("div",{className:"h-full w-full",children:Object(A.jsxs)("div",{className:"flex flex-col justify-between items-center flex-grow h-full",children:[Object(A.jsx)(u.b,{}),Object(A.jsx)("div",{className:"mb-0.5rem <sm:w-full sm:w-3/5 md:w-3/5 xl:w-3/5 2xl:w-1/2 cursor-pointer",children:Object(A.jsx)(z.a,{elevation:0,children:Object(A.jsx)(D.a,{fullWidth:!0,onClick:function(){return e(Object(Y.c)())},children:Object(A.jsx)(P.a,{children:"\u6ce8\u9500"})})})})]})})}function J(e){var t=e.children,n=Object(s.c)((function(e){return e.article})),c=Object(u.g)();return n.length>0?t:Object(A.jsx)(u.a,{to:p.b.HOME,state:{from:c}})}function q(e){var t=e.children,n=Object(s.c)((function(e){return e.user})).isLogin,c=Object(u.g)();return n?t:Object(A.jsx)(u.a,{to:p.b.LOGIN,state:{from:c}})}function K(){return Object(A.jsx)("div",{children:"this is About page"})}var B=n(162),Q=n(26),V=0;function X(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(b.a)(a,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){Q.b.on(Q.a.ALERT,(function(e){r(!0),o(e)})),clearTimeout(V),V=setTimeout((function(){r(!1)}),3e3)})),Object(A.jsx)("aside",{id:"alert",children:n&&Object(A.jsx)("div",{className:"relative",children:Object(A.jsx)(B.a,{severity:"info",variant:"filled",className:"rounded <sm:mx-1rem sm:ml-1/4 sm:w-1/2 alert-self",sx:{position:"absolute",zIndex:99,top:"8rem"},children:s})})})}var Z=n(16),$=n(84),ee=n(88),te=n(89);function ne(){var e=Object(s.c)((function(e){return e.article})),t=Object(s.b)();return Object(c.useEffect)((function(){e.length>0||Object($.b)((function(e){t(Object(te.b)(e.data))}))}),[t,e]),Object(A.jsx)("div",{className:"flex flex-col justify-center md:items-center overflow-y-auto",children:e.map((function(e){return Object(c.createElement)(ee.a,Object(Z.a)(Object(Z.a)({},e),{},{key:e._id}))}))})}var ce=n(166);function re(){return Object(A.jsx)(c.Fragment,{children:Object(A.jsxs)("div",{className:"p-1rem h-screen flex flex-col justify-between bg-light-50",children:[Object(A.jsxs)("section",{className:"mb-1rem w-full flex items-center",children:[Object(A.jsx)(ce.a,{variant:"circular",width:40,height:40}),Object(A.jsxs)("div",{className:"flex-grow flex flex-col ml-1rem",children:[Object(A.jsx)(ce.a,{variant:"text",animation:"wave",className:"w-1/2"}),Object(A.jsx)(ce.a,{variant:"text",animation:"wave"})]})]}),Object(A.jsxs)("section",{className:"flex-grow flex flex-col",children:[Object(A.jsx)(ce.a,{variant:"rectangular",className:"mb-1rem flex-grow"}),Object(A.jsx)(ce.a,{variant:"text",className:"mb-1rem w-1/2"}),Object(A.jsx)(ce.a,{variant:"rectangular",className:"mb-1rem"}),Object(A.jsx)(ce.a,{variant:"rectangular",className:"mb-1rem"}),Object(A.jsx)(ce.a,{variant:"text",className:"mb-1rem w-1/2"}),Object(A.jsx)(ce.a,{variant:"rectangular",className:"mb-1rem flex-grow"}),Object(A.jsx)(ce.a,{variant:"rectangular",className:"mb-1rem"})]}),Object(A.jsxs)("section",{children:[Object(A.jsx)(ce.a,{variant:"text",animation:"wave",className:"rounded"}),Object(A.jsx)(ce.a,{variant:"text",className:"w-1/2"})]})]})})}function ae(){return Object(A.jsx)("main",{style:{padding:"1rem"},children:Object(A.jsx)("p",{children:"There's nothing here!"})})}var ie=Object(j.a)({palette:{secondary:{main:"#212121"}}});function se(){var e=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,524))})),t=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(5),n.e(7)]).then(n.bind(null,517))})),r=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,520))})),a=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,527))})),i=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,521))})),s=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,522))}));return Object(A.jsx)("div",{className:"bg-gray-100 w-screen h-screen flex flex-col",children:Object(A.jsx)(l.a,{theme:ie,children:Object(A.jsxs)(c.Suspense,{fallback:Object(A.jsx)(re,{}),children:[Object(A.jsx)(X,{}),Object(A.jsxs)(u.e,{children:[Object(A.jsxs)(u.c,{path:p.b.HOME,element:Object(A.jsx)(U,{}),children:[Object(A.jsx)(u.c,{index:!0,element:Object(A.jsx)(ne,{})}),Object(A.jsx)(u.c,{path:p.b.LOGIN,element:Object(A.jsx)(e,{})}),Object(A.jsx)(u.c,{path:"about",element:Object(A.jsx)(K,{})}),Object(A.jsxs)(u.c,{path:p.b.ARTICLE,element:Object(A.jsx)(u.b,{}),children:[Object(A.jsx)(u.c,{index:!0,element:Object(A.jsx)(q,{children:Object(A.jsx)(a,{})})}),Object(A.jsx)(u.c,{path:p.a.ARTICLE_ID,element:Object(A.jsx)(J,{children:Object(A.jsx)(i,{})})})]}),Object(A.jsxs)(u.c,{path:p.b.USER,element:Object(A.jsx)(u.b,{}),children:[Object(A.jsxs)(u.c,{element:Object(A.jsx)(q,{children:Object(A.jsx)(W,{})}),children:[Object(A.jsx)(u.c,{index:!0,element:Object(A.jsx)(r,{})}),Object(A.jsx)(u.c,{path:p.c.PERSONAL,element:Object(A.jsx)(t,{})})]}),Object(A.jsx)(u.c,{path:p.c.ARTICLE_LIST,element:Object(A.jsx)(q,{children:Object(A.jsx)(s,{})})})]})]}),Object(A.jsx)(u.c,{path:"*",element:Object(A.jsx)(ae,{})})]})]})})})}n(128);var oe=n(71),je=n(17),le=n(51),ue=n(44),be={account:"",_id:"",title:"",content:"",like:0,watch:0,comment:0,createTime:"",updateTime:"",cover:"",category:"",summary:""},Oe=n(90),xe=n(32),fe={isLogin:!1,token:"",account:"",username:"",avatar:"",gender:Oe.a.MALE,signature:"",articles:[]},de=Object(oe.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=Object(le.a)(t,["type"]);switch(n){case xe.a.LOGIN:return Object(Z.a)(Object(Z.a)(Object(Z.a)({},fe),c),{},{isLogin:!0});case xe.a.LOGOUT:return fe;case xe.a.MODIFY:return e=Object(Z.a)(Object(Z.a)({},e),c);case xe.a.GET_ARTICLES:return e=Object(Z.a)(Object(Z.a)({},e),{},{articles:[].concat(Object(je.a)(e.articles||[]),Object(je.a)(t.articles))});default:return e}},article:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,c=Object(le.a)(t,["type"]);switch(n){case ue.a.ARTICLE_ADD:return e.push(Object(Z.a)(Object(Z.a)({},be),c)),e;case ue.a.ARTICLES_ADD:return e=[].concat(Object(je.a)(t.data),Object(je.a)(e));default:return e}}}),me=Object(oe.b)(de);n(129);i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:me,children:Object(A.jsx)(o.a,{children:Object(A.jsx)(se,{})})})}),document.getElementById("root"))},15:function(e,t,n){"use strict";var c,r,a,i;n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i})),function(e){e.HOME="/",e.USER="/user",e.ARTICLE="/article",e.LOGIN="/login",e.PERSONAL="/personal",e.SEARCH="/search"}(c||(c={})),r||(r={}),function(e){e.PERSONAL="personal",e.ARTICLE_LIST="articlelist"}(a||(a={})),function(e){e.ARTICLE_ID=":id"}(i||(i={}))},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c,r=n(102);!function(e){e.ALERT="ALERT",e.ALERT_DIALOG="ALERT_DIALOG"}(c||(c={}));var a=Object(r.a)()},32:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e.LOGIN="LOGIN",e.LOGOUT="LOGOUT",e.MODIFY="MODIFY",e.ADD_ARTICLE="ADD_ARTICLE",e.DEL_ARTICLE="DEL_ARTICLE",e.MODIFY_ARTICLE="MODIFY_ARTICLE",e.GET_ARTICLES="GET_ARTICLES"}(c||(c={}))},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var c=n(0);function r(e){var t=e.children,n=e.className,r=void 0===n?"":n,a=e.tag,i=void 0===a?"div":a;return Object(c.createElement)(i,{className:"<sm:hidden ".concat(r).trim()},t)}function a(e){var t=e.children,n=e.className,r=void 0===n?"":n,a=e.tag,i=void 0===a?"div":a;return Object(c.createElement)(i,{className:"sm:hidden ".concat(r).trim()},t)}},44:function(e,t,n){"use strict";var c;n.d(t,"a",(function(){return c})),function(e){e.ARTICLE_ADD="ARTICLE_ADD",e.ARTICLES_ADD="ARTICLES_ADD",e.ARTICLE_OWN_ADD="ARTICLE_OWN_ADD",e.ARTICLE_DEL="ARTICLE_DEL",e.ARTICLE_UPDATE="ARTICLE_UPDATE",e.ARTICLE_SEARCH="ARTICLE_SEARCH",e.ARTICLE_REPLY="ARTICLE_REPLY",e.ARTICLE_WATCHED="ARTICLE_WATCHED",e.ARTICLE_LIKED="ARTICLE_LIKED"}(c||(c={}))},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var c=n(29),r=n.n(c),a=n(39),i=n(26),s=function(e,t){return new Request(e,{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"}),mode:"cors",cache:"default"})},o=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then((function(e){if(e.ok)return e.json();n&&n()})).then((function(e){return c?c(e):e})).catch((function(e){return a?a(e):e})).finally((function(){return i&&i()})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t,n,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o(s("http://sniqa.com/gateway",t),(function(){return i.b.emit(i.a.ALERT,"network error")}),(function(e){var t=Object.values(e)[0];return t.success?n(t):i.b.emit(i.a.ALERT,t.errMsg)}),(function(){return i.b.emit(i.a.ALERT,"network error")}),(function(){return c&&c()})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}();t.a=j},78:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o}));var c=n(16),r=n(32),a=function(e){return Object(c.a)({type:r.a.LOGIN},e)},i=function(){return{type:r.a.LOGOUT}},s=function(e){return Object(c.a)({type:r.a.MODIFY},e)},o=function(e){return{type:r.a.GET_ARTICLES,articles:e}}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var c=n(29),r=n.n(c),a=n(39),i=n(60),s=n(26),o=function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=t.author,a=t.title,o=t.content,c&&a&&o){e.next=3;break}return e.abrupt("return",s.b.emit(s.a.ALERT,"\u6587\u7ae0\u6807\u9898\u6216\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"));case 3:return e.next=5,Object(i.a)({createArticle:t},n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,Object(i.a)({getArticle:n},t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var c=n(13),r=n(107),a=n.n(r),i=n(108),s=n.n(i),o=n(109),j=n.n(o),l=n(103),u=n.n(l),b=n(104),O=n.n(b),x=n(105),f=n.n(x),d=n(106),m=n.n(d),h=n(138),v=n(49),E=n(139),p=n(140),A=n(0),L=n(20),T=n(5),I=n(15),R=n(1);function g(e){var t=Object(T.i)(),n=Object(L.c)((function(e){return e.user})).account,c=e.account,r=void 0===c?"":c,i=e._id,o=e.title,l=void 0===o?"":o,b=e.createTime,x=void 0===b?"":b,d=e.like,A=void 0===d?0:d,g=e.watch,N=void 0===g?0:g,C=e.comment,y=void 0===C?0:C,S=e.cover,D=void 0===S?"":S,_=e.summary,k=void 0===_?"":_,M=r===n;return Object(R.jsxs)(h.a,{elevation:0,className:"px-0.8rem py-0.5rem mb-0.5rem flex flex-col <md:flex-grow  md:w-1/2 cursor-pointer",component:"article",children:[Object(R.jsxs)("header",{className:"flex items-center text-gray-500 text-sm",children:[Object(R.jsx)(v.a,{sx:{fontSize:"inherit",fontWeight:"500"},children:r}),Object(R.jsx)(E.a,{orientation:"vertical",variant:"middle",flexItem:!0,sx:{mx:"0.5rem",mt:"0.5rem",height:"1rem"}}),Object(R.jsx)(v.a,{sx:{fontSize:"inherit"},children:new Date(x).toLocaleDateString()})]}),Object(R.jsxs)("main",{className:"flex justify-between",onClick:function(){return t("".concat(I.b.ARTICLE,"/").concat(i))},children:[Object(R.jsxs)("section",{className:"text-gray-500",children:[Object(R.jsx)(v.a,{component:"h3",className:"text-dark-900 one-line-ellipsis",sx:{fontSize:"1rem",fontWeight:"700"},children:l}),Object(R.jsx)(v.a,{sx:{fontSize:"0.875rem",mt:"0.5rem"},className:"two-line-ellipsis",children:k})]}),Object(R.jsx)("figure",{className:"",children:D&&Object(R.jsx)(p.a,{component:"img",sx:{height:"80px",width:"120px",flexGrow:0,ml:"0.6rem"},image:D,alt:""})})]}),Object(R.jsxs)("footer",{className:"flex justify-between text-sm",children:[Object(R.jsxs)("section",{className:"flex",children:[Object(R.jsx)(w,{count:N,icon:Object(R.jsx)(u.a,{fontSize:"inherit"}),clickedIcon:Object(R.jsx)(O.a,{fontSize:"inherit"})}),Object(R.jsx)(w,{count:A,icon:Object(R.jsx)(f.a,{fontSize:"inherit"}),clickedIcon:Object(R.jsx)(m.a,{fontSize:"inherit"})}),Object(R.jsx)(w,{count:y,icon:Object(R.jsx)(a.a,{fontSize:"inherit"}),clickedIcon:Object(R.jsx)(s.a,{fontSize:"inherit"})})]}),M&&Object(R.jsx)("section",{children:Object(R.jsx)(j.a,{sx:{color:"#aaa"}})})]})]})}function w(e){var t=e.icon,n=e.clickedIcon,r=e.count,a=Object(A.useState)(!1),i=Object(c.a)(a,2),s=i[0],o=i[1],j=Object(A.useState)(r),l=Object(c.a)(j,2),u=l[0],b=l[1];return Object(R.jsxs)("div",{className:"flex items-center text-sm ".concat(s?"text-blue-400":"text-gray-400"),onClick:function(){u>r?(o(!1),b(u-1)):(o(!0),b(u+1))},children:[s?t:n,Object(R.jsx)(v.a,{sx:{ml:"0.3rem",mr:"1rem",fontSize:"inherit"},children:u>1e3?N(u):u})]})}var N=function(e){var t=1e6,n=1e9;if(e>=1e3&&e<t){var c=Math.floor(e/100)/10;return"".concat(c,"k")}if(e>=t&&e<n){var r=Math.floor(e/(t/10))/10;return"".concat(r,"m")}if(e>=n){var a=Math.floor(e/(t/10))/10;return"".concat(a,"b")}return e.toString()}},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var c=n(16),r=n(44),a=function(e){return Object(c.a)({type:r.a.ARTICLE_ADD},e)},i=function(e){return{type:r.a.ARTICLES_ADD,data:e}}},90:function(e,t,n){"use strict";var c,r;n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),function(e){e.FEMALE="female",e.MALE="male"}(c||(c={})),function(e){e.FEMALE="\u5973",e.MALE="\u7537"}(r||(r={}));var a=function(e){switch(e){case c.FEMALE:return r.FEMALE;case c.MALE:return r.MALE}}}},[[130,3,4]]]);
//# sourceMappingURL=main.63147a1a.chunk.js.map