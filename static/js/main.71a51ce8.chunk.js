(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{111:function(e,t,n){e.exports={loader:"Spinner_loader__1m74L",load7:"Spinner_load7__2T7RE"}},112:function(e,t,n){e.exports={options:"CardPacksPage_options__1HuMz"}},130:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),s=n(32),i=n.n(s),o=(n(130),n(19)),l=n(15),u=n(29),d=n(44),j=n.n(d),b=n(7),O=n(23),p=n(18),h=n.n(p),_=n(28),x=n(68),f=n.n(x),S=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),E=function(e){var t={email:e,from:"test-front-admin<test@test.com>",message:'<div style="background-color: lime; padding: 15px">\n                       password recovery link: \n              <a href="https://ewgentgm.github.io/it-incubator-friday-project/#/set-new-password/$token$">\n              link\n              </a></div>'};return S.post("/auth/forgot",t)},g=function(e,t){return S.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return S.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},C=function(){return S.delete("/auth/me",{}).then((function(e){return e.data}))},R=function(){return S.post("/auth/me",{}).then((function(e){return e.data}))},T=function(e,t){return S.post("/auth/register",{email:e,password:t}).then((function(e){return e.data}))};!function(e){e.SET_IS_INITIALIZED="APP/SET_IS_INITIALIZED",e.SET_IS_AUTH="APP/SET_IS_AUTH",e.SET_AUTH_DATA="APP/SET_AUTH_DATA",e.SET_ERROR="APP/SET_ERROR",e.CLEAR_STORE="APP/CLEAR_STORE"}(r||(r={}));var m,A=function(e){return{type:r.SET_IS_AUTH,payload:{isAuth:e}}},P=function(e){return{type:r.SET_AUTH_DATA,payload:{authData:e}}},N={isInitialized:!1,isAuth:!1,authData:{},error:null};!function(e){e.SET_ERROR="LOGIN/SET_ERROR",e.SET_LOADING="LOGIN/SET_LOADING"}(m||(m={}));var y,k=function(e){return{type:m.SET_ERROR,payload:{error:e}}},I=function(e){return{type:m.SET_LOADING,payload:{loading:e}}},L={error:null,loading:!1},D=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},w=function(e){return e.length>6},G=function(e,t){return e===t},F=n(171),H=n(173),K=n(63),U=n(170),M=n(124),z=n(83),J=n(1),B=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),O=d[0],p=d[1],x=Object(b.b)(),f=Object(b.c)((function(e){return e.login})),S=Object(J.jsxs)("div",{children:[Object(J.jsxs)("form",{className:j.a.form,children:[Object(J.jsx)("div",{className:j.a.formGroup,children:Object(J.jsx)(F.a,{disabled:f.loading,type:"email",placeholder:"Input email",value:n,onChange:function(e){return r(e.currentTarget.value)}})}),Object(J.jsx)("div",{className:j.a.formGroup,children:Object(J.jsx)(F.a.Password,{disabled:f.loading,placeholder:"Input password",value:i,onChange:function(e){return o(e.currentTarget.value)}})}),Object(J.jsxs)("div",{className:j.a.rememberMeFormGroup,children:[Object(J.jsx)("label",{htmlFor:"rememberMe",className:j.a.fieldLabel,children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),Object(J.jsx)(H.a,{disabled:f.loading,checkedChildren:Object(J.jsx)(M.a,{}),unCheckedChildren:Object(J.jsx)(z.a,{}),defaultChecked:!1,onChange:function(e){return p(e)}})]}),Object(J.jsx)(K.a,{type:"primary",className:j.a.button,onClick:function(e){e.preventDefault(),x(function(e,t,n){return function(){var r=Object(_.a)(h.a.mark((function r(a){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(k(null)),a(I(!0)),r.prev=2,r.next=5,v(e,t,n);case 5:c=r.sent,a(P(c)),a(A(!0)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),a(k(r.t0.response?r.t0.response.data.error:r.t0.message));case 13:return r.prev=13,a(I(!1)),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[2,10,13,16]])})));return function(e){return r.apply(this,arguments)}}()}(n,i,O))},loading:f.loading,disabled:!D(n)||!w(i),children:"\u0412\u043e\u0439\u0442\u0438"}),!D(n)&&Object(J.jsx)("span",{className:j.a.error,children:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}),!w(i)&&Object(J.jsx)("span",{className:j.a.error,children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),f.error&&Object(J.jsx)(U.a,{message:f.error,type:"error",closable:!0})]});return Object(J.jsx)(J.Fragment,{children:S})},V=n(66),W=n.n(V),Y=n(50),Z=n.n(Y),X=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(J.jsx)(o.a,{to:"/profile"}):Object(J.jsx)("div",{className:Z.a.fullscreen,children:Object(J.jsxs)("div",{className:W.a.loginPage,children:[Object(J.jsx)("h2",{className:W.a.h2,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0445\u043e\u0434 \u0432 \u043d\u0430\u0448\u0435 \u0441\u0443\u043f\u0435\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(J.jsxs)("h4",{className:W.a.h4,children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",Object(J.jsx)(l.c,{to:Je.REGISTER,children:"\u0437\u0434\u0435\u0441\u044c"})]}),Object(J.jsxs)("h4",{className:W.a.h4,children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c, \u0442\u043e \u0412\u0430\u043c ",Object(J.jsx)(l.c,{to:Je.PASS_RECOVERY,children:"\u0441\u044e\u0434\u0430"})]}),Object(J.jsx)(B,{})]})})},Q=n(86),$=n.n(Q);!function(e){e.SET_ERROR="REGISTRATION/SET_ERROR",e.SET_LOADING="REGISTRATION/SET_LOADING",e.SET_IS_REGISTER_SUCCESS="REGISTRATION/SET_IS_REGISTER_SUCCESS"}(y||(y={}));var q,ee={error:null,loading:!1,isRegisterSuccess:!1},te=function(e){return{type:y.SET_ERROR,payload:{error:e}}},ne=function(e){return{type:y.SET_IS_REGISTER_SUCCESS,payload:{isRegisterSuccess:e}}},re=function(e){return{type:y.SET_LOADING,payload:{loading:e}}},ae=n(111),ce=n.n(ae),se=function(e){return Object(J.jsx)("div",{className:ce.a.loader,children:"\u0416\u0434\u0438\u0442\u0435 \u043e\u0442\u0441\u0442\u043e\u044f \u043f\u0438\u0432\u0430"})},ie=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.registration})),n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),d=l[0],j=l[1];return t.isRegisterSuccess?Object(J.jsx)(o.a,{to:"/login"}):Object(J.jsx)("div",{className:$.a.registerPage,children:Object(J.jsx)("div",{className:$.a.registerContainer,children:t.loading?Object(J.jsx)(se,{}):Object(J.jsxs)("div",{className:$.a.registerForm,children:[Object(J.jsx)("input",{value:c,type:"email",name:"email",onChange:function(e){s(e.currentTarget.value)},placeholder:"email"}),Object(J.jsx)("input",{value:d,type:"password",onChange:function(e){j(e.currentTarget.value)},placeholder:"password"}),t.error&&Object(J.jsx)("div",{style:{color:"red"},children:t.error}),Object(J.jsx)("button",{disabled:!D(c)||!w(d),onClick:function(){e(function(e,t){return function(){var n=Object(_.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(re(!0)),r(te(null)),n.prev=2,n.next=5,T(e,t);case 5:n.sent,r(ne(!0)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),r(te(n.t0.response?n.t0.response.data.error:n.t0.message)),r(ne(!1));case 13:return n.prev=13,r(re(!1)),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,9,13,16]])})));return function(e){return n.apply(this,arguments)}}()}(c,d)),j("")},children:"Register"}),!D(c)&&Object(J.jsx)("span",{style:{color:"red"},children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email"}),!w(d)&&Object(J.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]})})})},oe=function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Register Page"}),Object(J.jsx)(ie,{})]})},le=function(e){Object(b.b)();var t=Object(b.c)((function(e){return e.appStatus.authData}));return Object(J.jsx)("div",{children:Object(J.jsx)("pre",{children:JSON.stringify(t,null,2)})})},ue=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Profile Page"}),Object(J.jsx)(le,{})]}):Object(J.jsx)(o.a,{to:"/login"})},de=n(94),je=n.n(de);!function(e){e.SET_ERROR="PASS_RECOVERY/SET_ERROR",e.SET_LOADING="PASS_RECOVERY/SET_LOADING",e.SET_IS_EMAIL_SEND="PASS_RECOVERY/SET_IS_EMAIL_SEND"}(q||(q={}));var be,Oe={error:null,loading:!1,isEmailSend:!1},pe=function(e){return{type:q.SET_ERROR,payload:{error:e}}},he=function(e){return{type:q.SET_LOADING,payload:{loading:e}}},_e=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(b.b)(),i=Object(b.c)((function(e){return e.passRecovery}));return i.isEmailSend?Object(J.jsx)("div",{children:Object(J.jsxs)("span",{style:{color:"blue",textAlign:"center"},children:["\u0412\u0441\u0451 \u043e\u0442\u043b\u0438\u0447\u043d\u043e, \u0438\u0434\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0439 \u043f\u043e\u0447\u0442\u0443, \u0438 \u0436\u043c\u0438 ",Object(J.jsx)(l.c,{to:Je.LOGIN,children:"\u0441\u0441\u044b\u043b\u043a\u0443"})]})}):Object(J.jsxs)("div",{className:je.a.passRecovery,children:[Object(J.jsx)("h3",{children:"\u0424\u043e\u0440\u043c\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),i.loading?Object(J.jsx)("span",{style:{textAlign:"center"},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...."}):Object(J.jsxs)("div",{className:je.a.recoveryForm,children:[Object(J.jsx)("label",{htmlFor:"email",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email:"}),Object(J.jsx)("input",{type:"email",name:"email",value:r,onChange:function(e){return c(e.currentTarget.value)}}),Object(J.jsx)("button",{onClick:function(){return s(function(e){return function(){var t=Object(_.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(he(!0)),n(pe(null)),t.prev=2,t.next=5,E(e);case 5:t.sent,n((r=!0,{type:q.SET_IS_EMAIL_SEND,payload:{isEmailSend:r}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n(pe(t.t0.response?t.t0.response.data.error:t.t0.message));case 12:return t.prev=12,n(he(!1)),t.finish(12);case 15:case"end":return t.stop()}var r}),t,null,[[2,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(r))},disabled:!D(r),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),i.error&&Object(J.jsx)("span",{style:{color:"red",textAlign:"center"},children:i.error})]})},xe=function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Password Recovery Page"}),Object(J.jsx)(_e,{})]})},fe=function(){var e=Object(b.c)((function(e){return e})),t=Object.entries(e).map((function(e){return Object(J.jsxs)("div",{children:[Object(J.jsxs)("h5",{children:[e[0],":"]}),Object(J.jsx)("pre",{children:JSON.stringify(e[1],null,2)})]},e[0])}));return Object(J.jsxs)("div",{children:[Object(J.jsx)("h3",{children:"All reducer data"}),t]})},Se=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Test Page"}),Object(J.jsx)(fe,{})]}):Object(J.jsx)(o.a,{to:"/login"})},Ee=n(95),ge=n.n(Ee),ve=function(e){return Object(J.jsxs)("div",{className:ge.a.notFound,children:[Object(J.jsx)("div",{className:ge.a.rotate,children:Object(J.jsx)("span",{children:"404"})}),Object(J.jsx)(l.c,{to:"/test",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},Ce=function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Page 404"}),Object(J.jsx)(ve,{})]})},Re=n(87),Te=n.n(Re);!function(e){e.SET_ERROR="PASS_CHANGE/SET_ERROR",e.SET_LOADING="PASS_CHANGE/SET_LOADING",e.SET_IS_CHANGED_PASS="PASS_CHANGE/SET_IS_CHANGED_PASS"}(be||(be={}));var me,Ae={error:null,loading:!1,isChangedPass:!1},Pe=function(e){return{type:be.SET_ERROR,payload:{error:e}}},Ne=function(e){return{type:be.SET_LOADING,payload:{loading:e}}},ye=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(b.c)((function(e){return e.passChange})),O=Object(b.b)(),p=Object(o.g)().token;return j.isChangedPass?Object(J.jsx)(o.a,{to:"/login"}):Object(J.jsx)("div",{className:Te.a.passChange,children:Object(J.jsx)("div",{className:Te.a.passChangeContainer,children:j.loading?Object(J.jsx)(se,{}):Object(J.jsxs)("div",{className:Te.a.passChangeForm,children:[Object(J.jsx)("span",{children:"\u0421\u043c\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f"}),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",Object(J.jsx)("input",{type:"password",value:r,onChange:function(e){c(e.currentTarget.value)}}),"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",Object(J.jsx)("input",{type:"password",value:l,onChange:function(e){d(e.currentTarget.value)}}),Object(J.jsx)("button",{disabled:!w(r)||!G(r,l),onClick:function(){O(function(e,t){return function(){var n=Object(_.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Ne(!0)),r(Pe(null)),n.prev=2,n.next=5,g(e,t);case 5:n.sent,r((a=!0,{type:be.SET_IS_CHANGED_PASS,payload:{isChangedPass:a}})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),r(Pe(n.t0.response?n.t0.response.data.error:n.t0.message));case 12:return n.prev=12,r(Ne(!1)),n.finish(12);case 15:case"end":return n.stop()}var a}),n,null,[[2,9,12,15]])})));return function(e){return n.apply(this,arguments)}}()}(r,p))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),!w(r)&&Object(J.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),!G(r,l)&&Object(J.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"})]})})})},ke=function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Password Change Page"}),Object(J.jsx)(ye,{})]})},Ie=n(112),Le=n.n(Ie),De=n(41),we=n.n(De),Ge=n(30),Fe=n.n(Ge),He=n(172),Ke=function(e){var t=e.cardPack,n=e.onDelete;return Object(J.jsxs)("div",{className:Fe.a.card,children:[Object(J.jsx)("div",{className:Fe.a.cardHeader,children:Object(J.jsx)("h3",{style:{textAlign:"center",textTransform:"uppercase"},children:t.name})}),Object(J.jsxs)("div",{className:Fe.a.ratingCount,children:[Object(J.jsxs)("div",{className:Fe.a.cardsCount,children:[Object(J.jsx)("h4",{children:"Cards count:"}),Object(J.jsx)("span",{children:t.cardsCount})]}),Object(J.jsxs)("div",{className:Fe.a.rating,children:[Object(J.jsx)("h4",{children:"Rating:"}),Object(J.jsx)("span",{children:t.rating})]})]}),Object(J.jsxs)("div",{className:Fe.a.ratingCount,children:[Object(J.jsxs)("div",{className:Fe.a.cardsCount,children:[Object(J.jsx)("h4",{children:"Shots:"}),Object(J.jsx)("span",{children:t.shots})]}),Object(J.jsxs)("div",{className:Fe.a.rating,children:[Object(J.jsx)("h4",{children:"Grade:"}),Object(J.jsx)("span",{children:t.grade})]})]}),Object(J.jsxs)("div",{className:Fe.a.actions,children:[Object(J.jsx)(l.b,{to:"/cards/".concat(t._id),children:Object(J.jsx)(K.a,{className:Fe.a.action,children:"View"})}),Object(J.jsx)(K.a,{className:Fe.a.action,children:"Edit"}),Object(J.jsx)(He.a,{onConfirm:n,title:"\u0422\u043e\u0447\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",cancelText:"\u041d\u0435\u0442",okText:"\u0414\u0430",placement:"top",cancelButtonProps:{type:"primary"},okButtonProps:{danger:!0},children:Object(J.jsx)(K.a,{className:Fe.a.action,danger:!0,children:"Remove"})})]}),Object(J.jsx)("div",{className:Fe.a.user,children:Object(J.jsx)("span",{children:t.user_name})})]})},Ue=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return Ue.get("/cards/pack?pageCount=".concat(e,"&page=").concat(t).concat(n?"&user_id=".concat(n):""))},ze=function(e){return Ue.delete("/cards/pack?id="+e)};!function(e){e.SET_ERROR="CARD_PACKS/SET_ERROR",e.SET_LOADING="CARD_PACKS/SET_LOADING",e.SET_PAGE="CARD_PACKS/SET_PAGE",e.SET_PAGE_COUNT="CARD_PACKS/SET_PAGE_COUNT",e.SET_CARD_PACKS="CARD_PACKS/SET_CARD_PACKS",e.SET_CARD_PACKS_TOTAL_COUNT="CARD_PACKS/SET_CARD_PACKS_TOTAL_COUNT"}(me||(me={}));var Je,Be={error:null,loading:!1,cardPacks:[],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,pageCount:10,page:1},Ve=function(e){return{type:me.SET_CARD_PACKS,payload:{cardPacks:e}}},We=function(e){return{type:me.SET_PAGE,payload:{page:e}}},Ye=function(e){return{type:me.SET_PAGE_COUNT,payload:{pageCount:e}}},Ze=function(e){return{type:me.SET_ERROR,payload:{error:e}}},Xe=function(e){return{type:me.SET_LOADING,payload:{loading:e}}},Qe=function(e,t,n){return function(){var r=Object(_.a)(h.a.mark((function r(a){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(Xe(!0)),a(Ze(null)),a(Ve([])),r.prev=3,r.next=6,Me(e,t,n);case 6:c=r.sent,a(Ve(c.data.cardPacks)),a((s=c.data.cardPacksTotalCount,{type:me.SET_CARD_PACKS_TOTAL_COUNT,payload:{cardPacksTotalCount:s}})),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),a(Ze(r.t0.response?r.t0.response.data.error:r.t0.message));case 14:return r.prev=14,a(Xe(!1)),r.finish(14);case 17:case"end":return r.stop()}var s}),r,null,[[3,11,14,17]])})));return function(e){return r.apply(this,arguments)}}()},$e=function(e){var t=Object(b.b)(),n=e.cardPacks,r=function(e){t(function(e){return function(){var t=Object(_.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Xe(!0)),n(Ze(null)),t.prev=2,t.next=5,ze(e);case 5:n(Ye(Be.pageCount)),n(We(Be.page)),n(Qe(Be.pageCount,Be.page)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),n(Ze(t.t0.response?t.t0.response.data.error:t.t0.message));case 13:return t.prev=13,n(Xe(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[2,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()}(e))};n.map((function(e,t){return Object(J.jsxs)("tr",{className:we.a.trow,children:[Object(J.jsx)("td",{className:we.a.tableCell,children:t+1}),Object(J.jsx)("td",{className:we.a.tableCell,children:e.name}),Object(J.jsx)("td",{className:we.a.tableCell,children:e.cardsCount}),Object(J.jsx)("td",{className:we.a.tableCell,children:e.grade}),Object(J.jsx)("td",{className:we.a.tableCell,children:e.rating}),Object(J.jsx)("td",{className:we.a.tableCell,children:e.shots}),Object(J.jsxs)("td",{className:we.a.tableCell,children:[Object(J.jsx)(l.b,{to:"/cards/".concat(e._id),children:Object(J.jsx)(K.a,{type:"link",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"})}),Object(J.jsx)(K.a,{type:"link",danger:!0,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},e._id)}));return Object(J.jsx)("div",{className:we.a.cardsContainer,children:n.map((function(e){return Object(J.jsx)(Ke,{cardPack:e,onDelete:function(){return r(e._id)}},e._id)}))})},qe=n(169),et=n(168),tt=function(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return e.appStatus.isAuth})),r=Object(b.c)((function(e){var t;return null!==(t=e.appStatus.authData._id)&&void 0!==t?t:""})),c=Object(b.c)((function(e){return e.cardPacks})),s=c.error,i=c.loading,l=c.cardPacks,d=c.cardPacksTotalCount,j=c.page,O=c.pageCount,p=Object(a.useState)(!1),h=Object(u.a)(p,2),_=h[0],x=h[1];if(Object(a.useEffect)((function(){t(Qe(O,j,_?r:void 0))}),[O,j,_,r,t]),!n)return Object(J.jsx)(o.a,{to:"/login"});return Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Card Packs Page"}),Object(J.jsxs)("div",{className:Le.a.options,children:[Object(J.jsx)(qe.a,{onShowSizeChange:function(e,n){t(Ye(n))},onChange:function(e){t(We(e))},defaultCurrent:1,current:j,pageSize:O,disabled:i,showQuickJumper:!0,total:d}),Object(J.jsx)("label",{htmlFor:"rememberMe",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0438 \u043a\u043e\u043b\u043e\u0434\u044b"}),Object(J.jsx)(H.a,{disabled:i,checkedChildren:Object(J.jsx)(M.a,{}),unCheckedChildren:Object(J.jsx)(z.a,{}),defaultChecked:!1,checked:_,onChange:function(e){return x(e)}})]}),Object(J.jsx)("div",{style:{marginTop:"25px",textAlign:"center"},children:i?Object(J.jsx)(et.a,{size:"large",tip:"Loading..."}):Object(J.jsx)($e,{cardPacks:l})||s})]})},nt=function(e){var t=Object(b.c)((function(e){return e.appStatus.isAuth})),n=Object(o.g)().cardPackId;return t?Object(J.jsxs)("div",{children:[Object(J.jsx)("h2",{children:"Cards Page"}),Object(J.jsxs)("span",{children:["Card pack id: ",n]})]}):Object(J.jsx)(o.a,{to:"/login"})};!function(e){e.LOGIN="/login",e.REGISTER="/register",e.PROFILE="/profile",e.CARD_PACKS="/card-packs",e.CARDS="/cards",e.PAGE404="/404",e.PASS_RECOVERY="/password-recovery",e.TEST="/test",e.SET_NEW_PASSWORD="/set-new-password"}(Je||(Je={}));var rt=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(o.d,{children:[Object(J.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(J.jsx)(o.a,{to:Je.TEST})}}),Object(J.jsx)(o.b,{path:Je.LOGIN,exact:!0,render:function(){return Object(J.jsx)(X,{})}}),Object(J.jsx)(o.b,{path:Je.REGISTER,exact:!0,render:function(){return Object(J.jsx)(oe,{})}}),Object(J.jsx)(o.b,{path:Je.PROFILE,exact:!0,render:function(){return Object(J.jsx)(ue,{})}}),Object(J.jsx)(o.b,{path:Je.PASS_RECOVERY,exact:!0,render:function(){return Object(J.jsx)(xe,{})}}),Object(J.jsx)(o.b,{path:Je.CARD_PACKS,exact:!0,render:function(){return Object(J.jsx)(tt,{})}}),Object(J.jsx)(o.b,{path:Je.SET_NEW_PASSWORD+"/:token",exact:!0,render:function(){return Object(J.jsx)(ke,{})}}),Object(J.jsx)(o.b,{path:Je.CARDS+"/:cardPackId",exact:!0,render:function(){return Object(J.jsx)(nt,{})}}),Object(J.jsx)(o.b,{path:Je.TEST,exact:!0,render:function(){return Object(J.jsx)(Se,{})}}),Object(J.jsx)(o.b,{render:function(){return Object(J.jsx)(Ce,{})}})]})})},at=n(67),ct=n.n(at);function st(){var e=Object(b.c)((function(e){return e.login})),t=Object(b.b)();return Object(J.jsx)("nav",{className:ct.a.navbar,children:Object(J.jsx)("div",{className:Z.a.container,children:Object(J.jsxs)("ul",{children:[Object(J.jsx)("li",{children:Object(J.jsx)(K.a,{type:"link",onClick:function(){t(function(){var e=Object(_.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),t(k(null)),e.prev=2,e.next=5,C();case 5:t({type:r.CLEAR_STORE}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t(k(e.t0.response?e.t0.response.data.error:e.t0.message));case 11:return e.prev=11,t(I(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())},loading:e.loading,disabled:e.loading,children:"Logout"})}),Object(J.jsx)("li",{children:Object(J.jsx)(l.c,{to:Je.PROFILE,activeClassName:ct.a.linkActive,children:"Profile"})}),Object(J.jsx)("li",{children:Object(J.jsx)(l.c,{to:Je.CARD_PACKS,activeClassName:ct.a.linkActive,children:"Card packs"})}),Object(J.jsx)("li",{children:Object(J.jsx)(l.c,{to:Je.TEST,activeClassName:ct.a.linkActive,children:"Test"})})]})})})}var it=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.appStatus.isInitialized})),n=Object(b.c)((function(e){return e.appStatus.isAuth}));return Object(a.useEffect)((function(){t||e(function(){var e=Object(_.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:n=e.sent,t(P(n)),t(A(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t((c=e.t0.response?e.t0.response.data.error:e.t0.message,{type:r.SET_ERROR,payload:{error:c}}));case 11:return e.prev=11,t((a=!0,{type:r.SET_IS_INITIALIZED,payload:{isInitialized:a}})),e.finish(11);case 14:case"end":return e.stop()}var a,c}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())})),t?Object(J.jsxs)(J.Fragment,{children:[n&&Object(J.jsx)(st,{}),Object(J.jsx)("div",{className:Z.a.container,children:Object(J.jsx)(rt,{})})]}):Object(J.jsx)("div",{className:Z.a.fullscreen,children:Object(J.jsx)(et.a,{size:"large"})})},ot=n(65),lt={test:"test"},ut={},dt=n(119),jt=Object(ot.b)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.CLEAR_STORE:return lt;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.CLEAR_STORE:return ut;default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_ERROR:case y.SET_LOADING:case y.SET_IS_REGISTER_SUCCESS:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return ee;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_ERROR:case m.SET_LOADING:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return L;default:return e}},appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_IS_INITIALIZED:case r.SET_IS_AUTH:case r.SET_AUTH_DATA:case r.SET_ERROR:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return N;default:return e}},passChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.SET_ERROR:case be.SET_LOADING:case be.SET_IS_CHANGED_PASS:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Ae;default:return e}},passRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q.SET_ERROR:case q.SET_LOADING:case q.SET_IS_EMAIL_SEND:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Oe;default:return e}},cardPacks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.SET_ERROR:case me.SET_LOADING:case me.SET_CARD_PACKS:case me.SET_CARD_PACKS_TOTAL_COUNT:case me.SET_PAGE:case me.SET_PAGE_COUNT:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Be;default:return e}}}),bt=Object(ot.c)(jt,Object(ot.a)(dt.a));window.store=bt;n(164);i.a.render(Object(J.jsx)(c.a.StrictMode,{children:Object(J.jsx)(b.a,{store:bt,children:Object(J.jsx)(l.a,{children:Object(J.jsx)(it,{})})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={card:"CardPack_card__2hCHf",cardHeader:"CardPack_cardHeader__3DT-5",ratingCount:"CardPack_ratingCount__f6tWY",cardsCount:"CardPack_cardsCount__1C66R",rating:"CardPack_rating__1AEBW",actions:"CardPack_actions__23XhH",user:"CardPack_user__3S4Ph"}},41:function(e,t,n){e.exports={cardsContainer:"CardPacks_cardsContainer__BQQ01",table:"CardPacks_table__3TLJr",headRow:"CardPacks_headRow__3VxwA",trow:"CardPacks_trow__kwGxJ",headCell:"CardPacks_headCell__NCiKN",tableCell:"CardPacks_tableCell__3FiUm",tableBody:"CardPacks_tableBody__18MWI"}},44:function(e,t,n){e.exports={form:"Login_form__3SXL1",formGroup:"Login_formGroup__2KzGA",rememberMeFormGroup:"Login_rememberMeFormGroup__NcE8M",textField:"Login_textField__99MwI",fieldLabel:"Login_fieldLabel__GASe2",button:"Login_button__20qSm",error:"Login_error__1yMLH"}},50:function(e,t,n){e.exports={container:"commonStyle_container__3XfKk",fullscreen:"commonStyle_fullscreen__1cir9"}},66:function(e,t,n){e.exports={loginPage:"LoginPage_loginPage__3gr2s",h2:"LoginPage_h2__28tJk",h4:"LoginPage_h4__3XQ94"}},67:function(e,t,n){e.exports={navbar:"Navbar_navbar__1JxPS",linkActive:"Navbar_linkActive__2TGIt"}},86:function(e,t,n){e.exports={registerPage:"Register_registerPage__ICKdK",registerContainer:"Register_registerContainer__tTLrm",registerForm:"Register_registerForm__1zF3j"}},87:function(e,t,n){e.exports={passChange:"PassChange_passChange__3AwJP",passChangeContainer:"PassChange_passChangeContainer__24DNb",passChangeForm:"PassChange_passChangeForm__1Gu7J"}},94:function(e,t,n){e.exports={passRecovery:"PasswordRecovery_passRecovery__nDE1f",recoveryForm:"PasswordRecovery_recoveryForm__2b-79"}},95:function(e,t,n){e.exports={notFound:"NotFound_notFound__BKuHp",rotate:"NotFound_rotate__2XOrI"}}},[[165,1,2]]]);
//# sourceMappingURL=main.71a51ce8.chunk.js.map