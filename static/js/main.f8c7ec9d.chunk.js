(this["webpackJsonpfriday-project"]=this["webpackJsonpfriday-project"]||[]).push([[0],{112:function(e,t,n){e.exports={loader:"Spinner_loader__3ySVe",load7:"Spinner_load7__1irUt"}},115:function(e,t,n){e.exports={searchPanel:"FieldWithButton_searchPanel__1jO7P"}},131:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),s=n(32),i=n.n(s),o=(n(131),n(19)),l=n(15),u=n(29),d=n(44),j=n.n(d),b=n(7),O=n(23),p=n(16),h=n.n(p),_=n(27),x=n(69),f=n.n(x),S=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),g=function(e){var t={email:e,from:"test-front-admin<test@test.com>",message:'<div style="background-color: lime; padding: 15px">\n                       password recovery link: \n              <a href="https://ewgentgm.github.io/it-incubator-friday-project/#/set-new-password/$token$">\n              link\n              </a></div>'};return S.post("/auth/forgot",t)},E=function(e,t){return S.post("/auth/set-new-password",{password:e,resetPasswordToken:t})},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return S.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},C=function(){return S.delete("/auth/me",{}).then((function(e){return e.data}))},R=function(){return S.post("/auth/me",{}).then((function(e){return e.data}))},T=function(e,t){return S.post("/auth/register",{email:e,password:t}).then((function(e){return e.data}))};!function(e){e.SET_IS_INITIALIZED="APP/SET_IS_INITIALIZED",e.SET_IS_AUTH="APP/SET_IS_AUTH",e.SET_AUTH_DATA="APP/SET_AUTH_DATA",e.SET_ERROR="APP/SET_ERROR",e.CLEAR_STORE="APP/CLEAR_STORE"}(r||(r={}));var m,A=function(e){return{type:r.SET_IS_AUTH,payload:{isAuth:e}}},P=function(e){return{type:r.SET_AUTH_DATA,payload:{authData:e}}},y={isInitialized:!1,isAuth:!1,authData:{},error:null};!function(e){e.SET_ERROR="LOGIN/SET_ERROR",e.SET_LOADING="LOGIN/SET_LOADING"}(m||(m={}));var N,k=function(e){return{type:m.SET_ERROR,payload:{error:e}}},I=function(e){return{type:m.SET_LOADING,payload:{loading:e}}},L={error:null,loading:!1},D=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},w=function(e){return e.length>6},G=function(e,t){return e===t},F=n(172),K=n(174),U=n(63),H=n(171),M=n(125),B=n(84),Y=n(1),z=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(a.useState)(!1),d=Object(u.a)(l,2),O=d[0],p=d[1],x=Object(b.b)(),f=Object(b.c)((function(e){return e.login})),S=Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("form",{className:j.a.form,children:[Object(Y.jsx)("div",{className:j.a.formGroup,children:Object(Y.jsx)(F.a,{disabled:f.loading,type:"email",placeholder:"Input email",value:n,onChange:function(e){return r(e.currentTarget.value)}})}),Object(Y.jsx)("div",{className:j.a.formGroup,children:Object(Y.jsx)(F.a.Password,{disabled:f.loading,placeholder:"Input password",value:i,onChange:function(e){return o(e.currentTarget.value)}})}),Object(Y.jsxs)("div",{className:j.a.rememberMeFormGroup,children:[Object(Y.jsx)("label",{htmlFor:"rememberMe",className:j.a.fieldLabel,children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),Object(Y.jsx)(K.a,{disabled:f.loading,checkedChildren:Object(Y.jsx)(M.a,{}),unCheckedChildren:Object(Y.jsx)(B.a,{}),defaultChecked:!1,onChange:function(e){return p(e)}})]}),Object(Y.jsx)(U.a,{type:"primary",className:j.a.button,onClick:function(e){e.preventDefault(),x(function(e,t,n){return function(){var r=Object(_.a)(h.a.mark((function r(a){var c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(k(null)),a(I(!0)),r.prev=2,r.next=5,v(e,t,n);case 5:c=r.sent,a(P(c)),a(A(!0)),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(2),a(k(r.t0.response?r.t0.response.data.error:r.t0.message));case 13:return r.prev=13,a(I(!1)),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[2,10,13,16]])})));return function(e){return r.apply(this,arguments)}}()}(n,i,O))},loading:f.loading,disabled:!D(n)||!w(i),children:"\u0412\u043e\u0439\u0442\u0438"}),!D(n)&&Object(Y.jsx)("span",{className:j.a.error,children:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}),!w(i)&&Object(Y.jsx)("span",{className:j.a.error,children:"\u041a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),f.error&&Object(Y.jsx)(H.a,{message:f.error,type:"error",closable:!0})]});return Object(Y.jsx)(Y.Fragment,{children:S})},V=n(66),W=n.n(V),J=n(50),Z=n.n(J),q=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(Y.jsx)(o.a,{to:"/profile"}):Object(Y.jsx)("div",{className:Z.a.fullscreen,children:Object(Y.jsxs)("div",{className:W.a.loginPage,children:[Object(Y.jsx)("h2",{className:W.a.h2,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0445\u043e\u0434 \u0432 \u043d\u0430\u0448\u0435 \u0441\u0443\u043f\u0435\u0440\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),Object(Y.jsxs)("h4",{className:W.a.h4,children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",Object(Y.jsx)(l.c,{to:ze.REGISTER,children:"\u0437\u0434\u0435\u0441\u044c"})]}),Object(Y.jsxs)("h4",{className:W.a.h4,children:["\u0415\u0441\u043b\u0438 \u0412\u044b \u0437\u0430\u0431\u044b\u043b\u0438 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c, \u0442\u043e \u0412\u0430\u043c ",Object(Y.jsx)(l.c,{to:ze.PASS_RECOVERY,children:"\u0441\u044e\u0434\u0430"})]}),Object(Y.jsx)(z,{})]})})},X=n(87),Q=n.n(X);!function(e){e.SET_ERROR="REGISTRATION/SET_ERROR",e.SET_LOADING="REGISTRATION/SET_LOADING",e.SET_IS_REGISTER_SUCCESS="REGISTRATION/SET_IS_REGISTER_SUCCESS"}(N||(N={}));var $,ee={error:null,loading:!1,isRegisterSuccess:!1},te=function(e){return{type:N.SET_ERROR,payload:{error:e}}},ne=function(e){return{type:N.SET_IS_REGISTER_SUCCESS,payload:{isRegisterSuccess:e}}},re=function(e){return{type:N.SET_LOADING,payload:{loading:e}}},ae=n(112),ce=n.n(ae),se=function(e){return Object(Y.jsx)("div",{className:ce.a.loader,children:"\u0416\u0434\u0438\u0442\u0435 \u043e\u0442\u0441\u0442\u043e\u044f \u043f\u0438\u0432\u0430"})},ie=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.registration})),n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),l=Object(u.a)(i,2),d=l[0],j=l[1];return t.isRegisterSuccess?Object(Y.jsx)(o.a,{to:"/login"}):Object(Y.jsx)("div",{className:Q.a.registerPage,children:Object(Y.jsx)("div",{className:Q.a.registerContainer,children:t.loading?Object(Y.jsx)(se,{}):Object(Y.jsxs)("div",{className:Q.a.registerForm,children:[Object(Y.jsx)("input",{value:c,type:"email",name:"email",onChange:function(e){s(e.currentTarget.value)},placeholder:"email"}),Object(Y.jsx)("input",{value:d,type:"password",onChange:function(e){j(e.currentTarget.value)},placeholder:"password"}),t.error&&Object(Y.jsx)("div",{style:{color:"red"},children:t.error}),Object(Y.jsx)("button",{disabled:!D(c)||!w(d),onClick:function(){e(function(e,t){return function(){var n=Object(_.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(re(!0)),r(te(null)),n.prev=2,n.next=5,T(e,t);case 5:n.sent,r(ne(!0)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),r(te(n.t0.response?n.t0.response.data.error:n.t0.message)),r(ne(!1));case 13:return n.prev=13,r(re(!1)),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[2,9,13,16]])})));return function(e){return n.apply(this,arguments)}}()}(c,d)),j("")},children:"Register"}),!D(c)&&Object(Y.jsx)("span",{style:{color:"red"},children:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 email"}),!w(d)&&Object(Y.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})]})})})},oe=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Register Page"}),Object(Y.jsx)(ie,{})]})},le=function(e){Object(b.b)();var t=Object(b.c)((function(e){return e.appStatus.authData}));return Object(Y.jsx)("div",{children:Object(Y.jsx)("pre",{children:JSON.stringify(t,null,2)})})},ue=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Profile Page"}),Object(Y.jsx)(le,{})]}):Object(Y.jsx)(o.a,{to:"/login"})},de=n(95),je=n.n(de);!function(e){e.SET_ERROR="PASS_RECOVERY/SET_ERROR",e.SET_LOADING="PASS_RECOVERY/SET_LOADING",e.SET_IS_EMAIL_SEND="PASS_RECOVERY/SET_IS_EMAIL_SEND"}($||($={}));var be,Oe={error:null,loading:!1,isEmailSend:!1},pe=function(e){return{type:$.SET_ERROR,payload:{error:e}}},he=function(e){return{type:$.SET_LOADING,payload:{loading:e}}},_e=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(b.b)(),i=Object(b.c)((function(e){return e.passRecovery}));return i.isEmailSend?Object(Y.jsx)("div",{children:Object(Y.jsxs)("span",{style:{color:"blue",textAlign:"center"},children:["\u0412\u0441\u0451 \u043e\u0442\u043b\u0438\u0447\u043d\u043e, \u0438\u0434\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0439 \u043f\u043e\u0447\u0442\u0443, \u0438 \u0436\u043c\u0438 ",Object(Y.jsx)(l.c,{to:ze.LOGIN,children:"\u0441\u0441\u044b\u043b\u043a\u0443"})]})}):Object(Y.jsxs)("div",{className:je.a.passRecovery,children:[Object(Y.jsx)("h3",{children:"\u0424\u043e\u0440\u043c\u0430 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),i.loading?Object(Y.jsx)("span",{style:{textAlign:"center"},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430...."}):Object(Y.jsxs)("div",{className:je.a.recoveryForm,children:[Object(Y.jsx)("label",{htmlFor:"email",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email:"}),Object(Y.jsx)("input",{type:"email",name:"email",value:r,onChange:function(e){return c(e.currentTarget.value)}}),Object(Y.jsx)("button",{onClick:function(){return s(function(e){return function(){var t=Object(_.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(he(!0)),n(pe(null)),t.prev=2,t.next=5,g(e);case 5:t.sent,n((r=!0,{type:$.SET_IS_EMAIL_SEND,payload:{isEmailSend:r}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n(pe(t.t0.response?t.t0.response.data.error:t.t0.message));case 12:return t.prev=12,n(he(!1)),t.finish(12);case 15:case"end":return t.stop()}var r}),t,null,[[2,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(r))},disabled:!D(r),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]}),i.error&&Object(Y.jsx)("span",{style:{color:"red",textAlign:"center"},children:i.error})]})},xe=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Password Recovery Page"}),Object(Y.jsx)(_e,{})]})},fe=function(){var e=Object(b.c)((function(e){return e})),t=Object.entries(e).map((function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("h5",{children:[e[0],":"]}),Object(Y.jsx)("pre",{children:JSON.stringify(e[1],null,2)})]},e[0])}));return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h3",{children:"All reducer data"}),t]})},Se=function(e){return Object(b.c)((function(e){return e.appStatus.isAuth}))?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Test Page"}),Object(Y.jsx)(fe,{})]}):Object(Y.jsx)(o.a,{to:"/login"})},ge=n(96),Ee=n.n(ge),ve=function(e){return Object(Y.jsxs)("div",{className:Ee.a.notFound,children:[Object(Y.jsx)("div",{className:Ee.a.rotate,children:Object(Y.jsx)("span",{children:"404"})}),Object(Y.jsx)(l.c,{to:"/test",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},Ce=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Page 404"}),Object(Y.jsx)(ve,{})]})},Re=n(88),Te=n.n(Re);!function(e){e.SET_ERROR="PASS_CHANGE/SET_ERROR",e.SET_LOADING="PASS_CHANGE/SET_LOADING",e.SET_IS_CHANGED_PASS="PASS_CHANGE/SET_IS_CHANGED_PASS"}(be||(be={}));var me,Ae={error:null,loading:!1,isChangedPass:!1},Pe=function(e){return{type:be.SET_ERROR,payload:{error:e}}},ye=function(e){return{type:be.SET_LOADING,payload:{loading:e}}},Ne=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),l=i[0],d=i[1],j=Object(b.c)((function(e){return e.passChange})),O=Object(b.b)(),p=Object(o.g)().token;return j.isChangedPass?Object(Y.jsx)(o.a,{to:"/login"}):Object(Y.jsx)("div",{className:Te.a.passChange,children:Object(Y.jsx)("div",{className:Te.a.passChangeContainer,children:j.loading?Object(Y.jsx)(se,{}):Object(Y.jsxs)("div",{className:Te.a.passChangeForm,children:[Object(Y.jsx)("span",{children:"\u0421\u043c\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f"}),"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",Object(Y.jsx)("input",{type:"password",value:r,onChange:function(e){c(e.currentTarget.value)}}),"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",Object(Y.jsx)("input",{type:"password",value:l,onChange:function(e){d(e.currentTarget.value)}}),Object(Y.jsx)("button",{disabled:!w(r)||!G(r,l),onClick:function(){O(function(e,t){return function(){var n=Object(_.a)(h.a.mark((function n(r){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ye(!0)),r(Pe(null)),n.prev=2,n.next=5,E(e,t);case 5:n.sent,r((a=!0,{type:be.SET_IS_CHANGED_PASS,payload:{isChangedPass:a}})),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),r(Pe(n.t0.response?n.t0.response.data.error:n.t0.message));case 12:return n.prev=12,r(ye(!1)),n.finish(12);case 15:case"end":return n.stop()}var a}),n,null,[[2,9,12,15]])})));return function(e){return n.apply(this,arguments)}}()}(r,p))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"}),!w(r)&&Object(Y.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}),!G(r,l)&&Object(Y.jsx)("span",{style:{color:"red"},children:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"})]})})})},ke=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Password Change Page"}),Object(Y.jsx)(Ne,{})]})},Ie=n(67),Le=n.n(Ie),De=n(41),we=n.n(De),Ge=n(30),Fe=n.n(Ge),Ke=n(173),Ue=function(e){var t=e.cardPack,n=e.onDelete;return Object(Y.jsxs)("div",{className:Fe.a.card,children:[Object(Y.jsx)("div",{className:Fe.a.cardHeader,children:Object(Y.jsx)("h3",{style:{textAlign:"center",textTransform:"uppercase"},children:t.name})}),Object(Y.jsxs)("div",{className:Fe.a.ratingCount,children:[Object(Y.jsxs)("div",{className:Fe.a.cardsCount,children:[Object(Y.jsx)("h4",{children:"Cards count:"}),Object(Y.jsx)("span",{children:t.cardsCount})]}),Object(Y.jsxs)("div",{className:Fe.a.rating,children:[Object(Y.jsx)("h4",{children:"Rating:"}),Object(Y.jsx)("span",{children:t.rating})]})]}),Object(Y.jsxs)("div",{className:Fe.a.ratingCount,children:[Object(Y.jsxs)("div",{className:Fe.a.cardsCount,children:[Object(Y.jsx)("h4",{children:"Shots:"}),Object(Y.jsx)("span",{children:t.shots})]}),Object(Y.jsxs)("div",{className:Fe.a.rating,children:[Object(Y.jsx)("h4",{children:"Grade:"}),Object(Y.jsx)("span",{children:t.grade})]})]}),Object(Y.jsxs)("div",{className:Fe.a.actions,children:[Object(Y.jsx)(l.b,{to:"/cards/".concat(t._id),children:Object(Y.jsx)(U.a,{className:Fe.a.action,children:"View"})}),Object(Y.jsx)(U.a,{className:Fe.a.action,children:"Edit"}),Object(Y.jsx)(Ke.a,{onConfirm:n,title:"\u0422\u043e\u0447\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",cancelText:"\u041d\u0435\u0442",okText:"\u0414\u0430",placement:"top",cancelButtonProps:{type:"primary"},okButtonProps:{danger:!0},children:Object(Y.jsx)(U.a,{className:Fe.a.action,danger:!0,children:"Remove"})})]}),Object(Y.jsx)("div",{className:Fe.a.user,children:Object(Y.jsx)("span",{children:t.user_name})})]})},He=f.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return He.get("/cards/pack?pageCount=".concat(e,"&page=").concat(t).concat(n?"&user_id=".concat(n):"").concat(r?"&packName=".concat(r):""))},Be=function(e){return He.delete("/cards/pack?id="+e)},Ye=function(e){return He.post("/cards/pack",{cardsPack:e})};!function(e){e.SET_ERROR="CARD_PACKS/SET_ERROR",e.SET_LOADING="CARD_PACKS/SET_LOADING",e.SET_PAGE="CARD_PACKS/SET_PAGE",e.SET_PAGE_COUNT="CARD_PACKS/SET_PAGE_COUNT",e.SET_CARD_PACKS="CARD_PACKS/SET_CARD_PACKS",e.SET_CARD_PACKS_TOTAL_COUNT="CARD_PACKS/SET_CARD_PACKS_TOTAL_COUNT",e.SET_ONLY_MY_PACKS="CARD_PACKS/SET_ONLY_MY_PACKS"}(me||(me={}));var ze,Ve={error:null,loading:!1,cardPacks:[],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,pageCount:10,page:1,onlyMyPacks:!1},We=function(e){return{type:me.SET_CARD_PACKS,payload:{cardPacks:e}}},Je=function(e){return{type:me.SET_PAGE,payload:{page:e}}},Ze=function(e){return{type:me.SET_PAGE_COUNT,payload:{pageCount:e}}},qe=function(e){return{type:me.SET_ERROR,payload:{error:e}}},Xe=function(e){return{type:me.SET_LOADING,payload:{loading:e}}},Qe=function(e,t,n,r){return function(){var a=Object(_.a)(h.a.mark((function a(c){var s;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(Xe(!0)),c(qe(null)),c(We([])),a.prev=3,a.next=6,Me(e,t,n,r);case 6:s=a.sent,c(We(s.data.cardPacks)),c((i=s.data.cardPacksTotalCount,{type:me.SET_CARD_PACKS_TOTAL_COUNT,payload:{cardPacksTotalCount:i}})),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),c(qe(a.t0.response?a.t0.response.data.error:a.t0.message));case 14:return a.prev=14,c(Xe(!1)),a.finish(14);case 17:case"end":return a.stop()}var i}),a,null,[[3,11,14,17]])})));return function(e){return a.apply(this,arguments)}}()},$e=function(e){var t=Object(b.b)(),n=e.cardPacks,r=function(e){t(function(e){return function(){var t=Object(_.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Xe(!0)),n(qe(null)),t.prev=2,t.next=5,Be(e);case 5:n(Ze(Ve.pageCount)),n(Je(Ve.page)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),n(qe(t.t0.response?t.t0.response.data.error:t.t0.message));case 12:return t.prev=12,n(Xe(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(e))};n.map((function(e,t){return Object(Y.jsxs)("tr",{className:we.a.trow,children:[Object(Y.jsx)("td",{className:we.a.tableCell,children:t+1}),Object(Y.jsx)("td",{className:we.a.tableCell,children:e.name}),Object(Y.jsx)("td",{className:we.a.tableCell,children:e.cardsCount}),Object(Y.jsx)("td",{className:we.a.tableCell,children:e.grade}),Object(Y.jsx)("td",{className:we.a.tableCell,children:e.rating}),Object(Y.jsx)("td",{className:we.a.tableCell,children:e.shots}),Object(Y.jsxs)("td",{className:we.a.tableCell,children:[Object(Y.jsx)(l.b,{to:"/cards/".concat(e._id),children:Object(Y.jsx)(U.a,{type:"link",children:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"})}),Object(Y.jsx)(U.a,{type:"link",danger:!0,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},e._id)}));return Object(Y.jsx)("div",{className:we.a.cardsContainer,children:n.map((function(e){return Object(Y.jsx)(Ue,{cardPack:e,onDelete:function(){return r(e._id)}},e._id)}))})},et=n(170),tt=n(169),nt=n(115),rt=n.n(nt),at=function(e){var t,n=Object(a.useState)(""),r=Object(u.a)(n,2),c=r[0],s=r[1],i=function(){e.action(c),s("")};return Object(Y.jsxs)("div",{className:rt.a.searchPanel,children:[Object(Y.jsx)(F.a,{disabled:e.disabled,placeholder:e.inputPlaceholder,value:c,onKeyPress:function(e){return"Enter"===e.key&&i()},onChange:function(e){s(e.currentTarget.value)}}),Object(Y.jsx)(U.a,{onClick:i,disabled:e.disabled,children:null!==(t=e.buttonLabel)&&void 0!==t?t:"Do it"})]})},ct=function(e){var t=Object(b.b)(),n=Object(b.c)((function(e){return e.appStatus.isAuth})),r=Object(b.c)((function(e){var t;return null!==(t=e.appStatus.authData._id)&&void 0!==t?t:""})),c=Object(b.c)((function(e){return e.cardPacks})),s=c.error,i=c.loading,l=c.cardPacks,u=c.cardPacksTotalCount,d=c.page,j=c.pageCount,O=c.onlyMyPacks;if(Object(a.useEffect)((function(){t(Qe(j,d,O?r:void 0))}),[j,d,O,r,t]),!n)return Object(Y.jsx)(o.a,{to:"/login"});return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("h2",{children:"Card Packs Page"}),Object(Y.jsxs)("div",{className:Le.a.optionsBar,children:[Object(Y.jsxs)("div",{className:Le.a.options,children:[Object(Y.jsx)(et.a,{onShowSizeChange:function(e,n){t(Ze(n))},onChange:function(e){t(Je(e))},defaultCurrent:1,showSizeChanger:!0,current:d,pageSize:j,disabled:i,showQuickJumper:!0,total:u}),Object(Y.jsx)("label",{htmlFor:"rememberMe",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0438 \u043a\u043e\u043b\u043e\u0434\u044b"}),Object(Y.jsx)(K.a,{disabled:i,checkedChildren:Object(Y.jsx)(M.a,{}),unCheckedChildren:Object(Y.jsx)(B.a,{}),defaultChecked:!1,checked:O,onChange:function(e){return t(function(e){return{type:me.SET_ONLY_MY_PACKS,payload:{onlyMyPacks:e}}}(e))}})]}),Object(Y.jsx)("div",{className:Le.a.searchBar,children:Object(Y.jsx)(at,{disabled:i,inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043b\u043e\u0434\u044b",buttonLabel:"\u041f\u043e\u0438\u0441\u043a",action:function(e){t(Qe(j,d,O?r:void 0,e))}})}),Object(Y.jsx)("div",{className:Le.a.searchBar,children:Object(Y.jsx)(at,{disabled:i,inputPlaceholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043a\u043e\u043b\u043e\u0434\u044b",buttonLabel:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",action:function(e){var n;t((n={name:e},function(){var e=Object(_.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Xe(!0)),t(qe(null)),e.prev=2,e.next=5,Ye(n);case 5:t(Ze(Ve.pageCount)),t(Je(Ve.page)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t(qe(e.t0.response?e.t0.response.data.error:e.t0.message));case 12:return e.prev=12,t(Xe(!1)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()))}})}),Object(Y.jsx)("div",{style:{marginTop:"25px",textAlign:"center"},children:s&&Object(Y.jsx)(H.a,{message:s,type:"error",closeText:"Close",closable:!0})})]}),i?Object(Y.jsx)("div",{style:{marginTop:"25px",textAlign:"center"},children:Object(Y.jsx)(tt.a,{size:"large",tip:"Loading..."})}):Object(Y.jsx)($e,{cardPacks:l})]})},st=function(e){var t=Object(b.c)((function(e){return e.appStatus.isAuth})),n=Object(o.g)().cardPackId;return t?Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Cards Page"}),Object(Y.jsxs)("span",{children:["Card pack id: ",n]})]}):Object(Y.jsx)(o.a,{to:"/login"})};!function(e){e.LOGIN="/login",e.REGISTER="/register",e.PROFILE="/profile",e.CARD_PACKS="/card-packs",e.CARDS="/cards",e.PAGE404="/404",e.PASS_RECOVERY="/password-recovery",e.TEST="/test",e.SET_NEW_PASSWORD="/set-new-password"}(ze||(ze={}));var it=function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)(o.d,{children:[Object(Y.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(Y.jsx)(o.a,{to:ze.TEST})}}),Object(Y.jsx)(o.b,{path:ze.LOGIN,exact:!0,render:function(){return Object(Y.jsx)(q,{})}}),Object(Y.jsx)(o.b,{path:ze.REGISTER,exact:!0,render:function(){return Object(Y.jsx)(oe,{})}}),Object(Y.jsx)(o.b,{path:ze.PROFILE,exact:!0,render:function(){return Object(Y.jsx)(ue,{})}}),Object(Y.jsx)(o.b,{path:ze.PASS_RECOVERY,exact:!0,render:function(){return Object(Y.jsx)(xe,{})}}),Object(Y.jsx)(o.b,{path:ze.CARD_PACKS,exact:!0,render:function(){return Object(Y.jsx)(ct,{})}}),Object(Y.jsx)(o.b,{path:ze.SET_NEW_PASSWORD+"/:token",exact:!0,render:function(){return Object(Y.jsx)(ke,{})}}),Object(Y.jsx)(o.b,{path:ze.CARDS+"/:cardPackId",exact:!0,render:function(){return Object(Y.jsx)(st,{})}}),Object(Y.jsx)(o.b,{path:ze.TEST,exact:!0,render:function(){return Object(Y.jsx)(Se,{})}}),Object(Y.jsx)(o.b,{render:function(){return Object(Y.jsx)(Ce,{})}})]})})},ot=n(68),lt=n.n(ot);function ut(){var e=Object(b.c)((function(e){return e.login})),t=Object(b.b)();return Object(Y.jsx)("nav",{className:lt.a.navbar,children:Object(Y.jsx)("div",{className:Z.a.container,children:Object(Y.jsxs)("ul",{children:[Object(Y.jsx)("li",{children:Object(Y.jsx)(U.a,{type:"link",onClick:function(){t(function(){var e=Object(_.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),t(k(null)),e.prev=2,e.next=5,C();case 5:t({type:r.CLEAR_STORE}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),t(k(e.t0.response?e.t0.response.data.error:e.t0.message));case 11:return e.prev=11,t(I(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())},loading:e.loading,disabled:e.loading,children:"Logout"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(l.c,{to:ze.PROFILE,activeClassName:lt.a.linkActive,children:"Profile"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(l.c,{to:ze.CARD_PACKS,activeClassName:lt.a.linkActive,children:"Card packs"})}),Object(Y.jsx)("li",{children:Object(Y.jsx)(l.c,{to:ze.TEST,activeClassName:lt.a.linkActive,children:"Test"})})]})})})}var dt=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.appStatus.isInitialized})),n=Object(b.c)((function(e){return e.appStatus.isAuth}));return Object(a.useEffect)((function(){t||e(function(){var e=Object(_.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R();case 3:n=e.sent,t(P(n)),t(A(!0)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t((c=e.t0.response?e.t0.response.data.error:e.t0.message,{type:r.SET_ERROR,payload:{error:c}}));case 11:return e.prev=11,t((a=!0,{type:r.SET_IS_INITIALIZED,payload:{isInitialized:a}})),e.finish(11);case 14:case"end":return e.stop()}var a,c}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())})),t?Object(Y.jsxs)(Y.Fragment,{children:[n&&Object(Y.jsx)(ut,{}),Object(Y.jsx)("div",{className:Z.a.container,children:Object(Y.jsx)(it,{})})]}):Object(Y.jsx)("div",{className:Z.a.fullscreen,children:Object(Y.jsx)(tt.a,{size:"large"})})},jt=n(65),bt={test:"test"},Ot={},pt=n(120),ht=Object(jt.b)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.CLEAR_STORE:return bt;default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.CLEAR_STORE:return Ot;default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.SET_ERROR:case N.SET_LOADING:case N.SET_IS_REGISTER_SUCCESS:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return ee;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_ERROR:case m.SET_LOADING:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return L;default:return e}},appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_IS_INITIALIZED:case r.SET_IS_AUTH:case r.SET_AUTH_DATA:case r.SET_ERROR:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return y;default:return e}},passChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.SET_ERROR:case be.SET_LOADING:case be.SET_IS_CHANGED_PASS:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Ae;default:return e}},passRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.SET_ERROR:case $.SET_LOADING:case $.SET_IS_EMAIL_SEND:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Oe;default:return e}},cardPacks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me.SET_ERROR:case me.SET_LOADING:case me.SET_CARD_PACKS:case me.SET_CARD_PACKS_TOTAL_COUNT:case me.SET_PAGE:case me.SET_PAGE_COUNT:case me.SET_ONLY_MY_PACKS:return Object(O.a)(Object(O.a)({},e),t.payload);case r.CLEAR_STORE:return Ve;default:return e}}}),_t=Object(jt.c)(ht,Object(jt.a)(pt.a));window.store=_t;n(165);i.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(b.a,{store:_t,children:Object(Y.jsx)(l.a,{children:Object(Y.jsx)(dt,{})})})}),document.getElementById("root"))},30:function(e,t,n){e.exports={card:"CardPack_card__1z9pJ",cardHeader:"CardPack_cardHeader__Oq4d7",ratingCount:"CardPack_ratingCount__HW9C-",cardsCount:"CardPack_cardsCount__38-5z",rating:"CardPack_rating__CrWuz",actions:"CardPack_actions__1RFHX",user:"CardPack_user__34PjL"}},41:function(e,t,n){e.exports={cardsContainer:"CardPacks_cardsContainer__bPc6o",table:"CardPacks_table__B0X9J",headRow:"CardPacks_headRow__2sYyr",trow:"CardPacks_trow__1RXcZ",headCell:"CardPacks_headCell__329et",tableCell:"CardPacks_tableCell__1tBEq",tableBody:"CardPacks_tableBody__TVKDs"}},44:function(e,t,n){e.exports={form:"Login_form__33ZSb",formGroup:"Login_formGroup__m0G-7",rememberMeFormGroup:"Login_rememberMeFormGroup__2X-LS",textField:"Login_textField__MHnna",fieldLabel:"Login_fieldLabel__16cRK",button:"Login_button__mOCdQ",error:"Login_error__27H06"}},50:function(e,t,n){e.exports={container:"commonStyle_container__1-ufD",fullscreen:"commonStyle_fullscreen__3PmAH"}},66:function(e,t,n){e.exports={loginPage:"LoginPage_loginPage__12fQK",h2:"LoginPage_h2__3PNlE",h4:"LoginPage_h4__qRUOW"}},67:function(e,t,n){e.exports={optionsBar:"CardPacksPage_optionsBar__KwMM9",options:"CardPacksPage_options__3E22J",searchBar:"CardPacksPage_searchBar__3c4y-"}},68:function(e,t,n){e.exports={navbar:"Navbar_navbar__2pC_2",linkActive:"Navbar_linkActive__1M-rz"}},87:function(e,t,n){e.exports={registerPage:"Register_registerPage__2OphF",registerContainer:"Register_registerContainer__FgRhd",registerForm:"Register_registerForm__2y4vV"}},88:function(e,t,n){e.exports={passChange:"PassChange_passChange__Rqi6i",passChangeContainer:"PassChange_passChangeContainer__19Lou",passChangeForm:"PassChange_passChangeForm__v7GW0"}},95:function(e,t,n){e.exports={passRecovery:"PasswordRecovery_passRecovery__1qSyO",recoveryForm:"PasswordRecovery_recoveryForm__dcSc9"}},96:function(e,t,n){e.exports={notFound:"NotFound_notFound__3MG8E",rotate:"NotFound_rotate__2Uv1K"}}},[[166,1,2]]]);
//# sourceMappingURL=main.f8c7ec9d.chunk.js.map