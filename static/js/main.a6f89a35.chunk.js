(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{164:function(e,a,t){},165:function(e,a,t){},166:function(e,a,t){},173:function(e,a,t){},286:function(e,a,t){},287:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),s=t.n(l),c=(t(164),t(165),t(15)),i=t(16),o=t(20),d=t(19),m=t(30),b=t(12),j=t(345),u=t(346),h=t(347),O=t(32),x=t(80),p=t(343),v=t(338),f=t(362),g=t(361),E=t(344),N=t(138),C=t.n(N),S=t(139),y=t.n(S),_=t(49),D=t.n(_),k=t(340),w=t(289),L=t(341),T=t(342),A=t(335),I=t(17),R=(t(166),t(1)),P=240,F=Object(A.a)((function(e){return{root:{display:"flex"},drawer:Object(x.a)({},e.breakpoints.up("sm"),{width:P,flexShrink:0}),appBar:Object(x.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(P,"px)"),marginLeft:P}),menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:P},content:{flexGrow:1,padding:e.spacing(3)}}}));var B=function(e){var a=e.window,t=F(),n=Object(I.a)(),l=r.a.useState(!1),s=Object(O.a)(l,2),c=s[0],i=s[1],o=r.a.useState(1),d=Object(O.a)(o,2),b=d[0],j=d[1],u=function(){i(!c)},h=function(e){switch(i(!1),e){case"1":j(1);break;case"2":j(2);break;case"3":j(3);break;case"4":j(4);break;case"5":j(5);break;case"6":j(6);break;default:j(1)}},x=Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:t.toolbar}),Object(R.jsx)(v.a,{}),Object(R.jsxs)(k.a,{className:"custom-list",children:[Object(R.jsx)(m.b,{to:"/all-wallet",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("1")},children:Object(R.jsxs)(w.a,{button:!0,className:1===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"All Wallets"})]})})}),Object(R.jsx)(m.b,{to:"/new-wallet",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("2")},children:Object(R.jsxs)(w.a,{button:!0,className:2===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"New Wallet"})]})})}),Object(R.jsx)(m.b,{to:"/check-balance",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("3")},children:Object(R.jsxs)(w.a,{button:!0,className:3===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"Check Balance"})]})})}),Object(R.jsx)(m.b,{to:"/add-funds",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("4")},children:Object(R.jsxs)(w.a,{button:!0,className:4===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"Add Funds"})]})})}),Object(R.jsx)(m.b,{to:"/spend-funds",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("5")},children:Object(R.jsxs)(w.a,{button:!0,className:5===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"Spend Funds"})]})})}),Object(R.jsx)(m.b,{to:"/all-trans",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return h("6")},children:Object(R.jsxs)(w.a,{button:!0,className:6===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(T.a,{primary:"All Transactions"})]})})})]})]}),N=void 0!==a?function(){return a().document.body}:void 0;return Object(R.jsxs)("div",{className:t.root,children:[Object(R.jsx)(p.a,{}),Object(R.jsx)(E.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:t.menuButton,children:c?Object(R.jsx)(C.a,{}):Object(R.jsx)(y.a,{})}),Object(R.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(R.jsx)(g.a,{smUp:!0,implementation:"css",children:Object(R.jsx)(f.a,{container:N,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:c,onClose:u,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:x})}),Object(R.jsx)(g.a,{xsDown:!0,implementation:"css",children:Object(R.jsx)(f.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:x})})]})]})},W=(t(173),r.a.createContext({})),U=t(348),z=t(24),V=t.n(z),M="https://apimalay.herokuapp.com",H="Invalid First Name.",K="Invalid Company Name.",J="Invalid Mobile Number.",G="No name selected",Y="Invalid email",$="Invalid password";console.log("data",Object({NODE_ENV:"production",PUBLIC_URL:"/template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_URL:"https://apimalay.herokuapp.com"}).REACT_URL);var q={main_url:M+"/api/user/fullList",add_funds:M+"/api/user/addFunds",spend_funds:M+"/api/user/spendFunds",get_funds_id:M+"/api/user",add_user:M+"/api/user/add",trans_url:"https://my-json-server.typicode.com/hi-malay/trans/db",signup_url:M+"/api/auth/signup",login_url:M+"/api/auth/login",auth_user:M+"/api/auth"};var Q=function(e){var a=Object(n.useState)([]),t=Object(O.a)(a,2),r=t[0],l=t[1],s=Object(n.useState)([]),c=Object(O.a)(s,2),i=c[0],o=c[1],d=Object(n.useState)([]),m=Object(O.a)(d,2),b=m[0],j=m[1],u=Object(n.useState)(!1),h=Object(O.a)(u,2),x=h[0],p=h[1],v=Object(n.useState)(!1),f=Object(O.a)(v,2),g=f[0],E=f[1],N=Object(n.useState)([]),C=Object(O.a)(N,2),S=C[0],y=C[1],_=Object(n.useState)(!1),D=Object(O.a)(_,2),k=D[0],w=D[1];return Object(n.useEffect)((function(){V.a.get(q.main_url,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){e.data&&(l(e.data.user),p(!0),console.log("byr2",r))})).catch((function(e){console.log("error",e)})),V.a.get(q.auth_user).then((function(e){e.data?(o(e.data),p(!0),console.log("byr2",r)):E(!0)})).catch((function(e){console.log("error",e)})),V.a.get(q.trans_url).then((function(e){e.data&&j(e.data.data)})).catch((function(e){console.log("error",e)}))}),[e.location.pathname]),{userData:[r,l],userAuthData:[i,o],transData:[b,j],isValid:[x,p],isReferValid:[g,E],categories:[S,y],callback:[k,w]}},X=Object(b.g)((function(e){var a=Q(e),t=function(){localStorage.removeItem("AuthToken"),e.history.push("/")};return console.log("pp",a.isValid[1]),console.log("keysss",a.userData[0]),void 0!=localStorage.getItem("AuthToken")&&null!=localStorage.getItem("AuthToken")?Object.keys(a.userAuthData[0]).length>0?Object(R.jsx)(b.b,{render:function(){return Object(R.jsx)("div",{className:"bg-grey full-len mt-3",children:Object(R.jsx)(W.Provider,{value:a,children:Object(R.jsx)("div",{className:"max-width max-width-padd mt-4",children:Object(R.jsx)(j.a,{className:"custom-card card-dashboard",children:Object(R.jsxs)(u.a,{children:[Object(R.jsx)("h2",{children:e.location.pathname.split("/")[1]}),Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:"btn-class mt-4",onClick:t,children:"Logout"}),Object(R.jsx)("div",{className:"col-md-4",children:Object(R.jsx)(B,{})}),Object(R.jsx)("div",{className:"col-md-8 mt-5",children:Object(R.jsx)(e.component,{value:a.transData[0]})})]})})})})})}}):a.isReferValid[0]?Object(R.jsx)(b.a,{to:{pathname:"/"}}):Object(R.jsx)("div",{className:"Circular-Progress",children:Object(R.jsx)(U.a,{color:"inherit"})}):Object(R.jsx)(b.a,{to:{pathname:"/"}})})),Z=t(349),ee=t(350),ae=t(351),te=t(352),ne=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).myRef=void 0,n.inputRef=void 0,n.scrollRef=void 0,n.numberOfEmpRef=void 0,n.emailRef=void 0,n.nameRef=void 0,n.phoneRef=void 0,n.companyNameRef=void 0,n.validationDynamic=function(){var e;if(""!==n.state.name)if((a=n.state.mobileNumber).length>10||(a=parseInt(a,10),!/^\d{10}$/.test(a)))n.setState({mobileNumberError:!0,mobileNumberErrorLabel:J,saveDetailsEnable:!1});else if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a;n.setState({date_match_modal:!0});var t={name:n.state.name,phone:n.state.mobileNumber,amount:n.state.amount};V.a.post(q.add_user,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:K,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:H,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",mobileNumberError:!1,mobileNumberErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",mobileNumber:"",amount:""})},n.state={name:"",nameError:!1,nameErrorLabel:"",mobileNumber:"",mobileNumberError:!1,mobileNumberErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.nameError,r=a.nameErrorLabel,l=a.mobileNumber,s=a.mobileNumberError,c=a.mobileNumberErrorLabel,i=a.amount,o=a.amountErrorLabel,d=a.amountError,m=a.saveDetailsEnable,b=a.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Name",value:t,error:n,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"name","data-id":"name",onChange:function(a){return e.handleInputChange(a,"name")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Phone",value:null===l?"":l,error:s,helperText:c,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"mobileNumber","data-id":"mobileNumber",InputProps:{startAdornment:Object(R.jsx)(ee.a,{position:"start",children:"+91"})},onChange:function(a){return e.handleInputChange(a,"mobileNumber")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Amount",value:null===i?"":i,error:d,helperText:o,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"amount","data-id":"amount",onChange:function(a){return e.handleInputChange(a,"amount")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===m?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return e.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ae.a,{open:b,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsx)("h3",{className:"modal-subtitle",children:"Data successfully submitted "}),Object(R.jsx)(te.a,{children:Object(R.jsx)(h.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component),re=t(354),le=t(358),se=t(357),ce=t(353),ie=t(355),oe=t(356),de=t(143),me=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){n.setState({refDet:n.context.userData[0]})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,refDet:{}},n}return Object(i.a)(t,[{key:"render",value:function(){var e;return Object(R.jsx)("div",{className:"max-width-in",children:Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(ce.a,{component:de.a,children:Object(R.jsxs)(re.a,{className:"","aria-label":"simple table",children:[Object(R.jsx)(ie.a,{children:Object(R.jsxs)(oe.a,{children:[Object(R.jsx)(se.a,{children:Object(R.jsx)("b",{children:"UserId"})}),Object(R.jsx)(se.a,{align:"left",children:Object(R.jsx)("b",{children:"Name"})}),Object(R.jsx)(se.a,{align:"left",children:Object(R.jsx)("b",{children:"Phone"})}),Object(R.jsx)(se.a,{align:"left",children:Object(R.jsx)("b",{children:"Balance"})})]})}),Object(R.jsx)(le.a,{children:void 0!==(null===(e=this.context.userData[0])||void 0===e?void 0:e.length)?Object(R.jsxs)(R.Fragment,{children:[" ",this.context.userData[0].map((function(e,a){return Object(R.jsxs)(oe.a,{children:[Object(R.jsxs)(se.a,{component:"th",scope:"row",children:["User",a+1]}),Object(R.jsx)(se.a,{align:"left",children:e.name}),Object(R.jsx)(se.a,{align:"left",children:e.phone}),Object(R.jsxs)(se.a,{align:"left",children:[e.amount," \u20b9"]})]},e._id)}))]}):Object(R.jsxs)(R.Fragment,{children:[" ",Object(R.jsx)(U.a,{color:"inherit",size:30,className:"table-loader"})]})})]})})})})}}]),t}(r.a.Component);me.contextType=W;var be=me,je=t(359),ue=t(300),he=t(294),Oe=t(293),xe=t(296),pe=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:""})},n.validationDynamic=function(){if(""!==n.state.name){var e=n.context.userData[0].map((function(e){return e._id===n.state.name?e.amount:null}));n.setState({matchData:e,date_match_modal:!0})}else n.setState({nameError:!0,nameErrorLabel:G,saveDetailsEnable:!1})},n.state={name:"",nameError:!1,nameErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e,a=this;return console.log("hi",localStorage.getItem("AuthToken")),Object(R.jsxs)("div",{className:"check-funds",children:[Object(R.jsxs)("div",{className:"row menu-tab",children:[Object(R.jsx)("div",{className:"col-12",children:Object(R.jsxs)(Oe.a,{children:[Object(R.jsx)(ue.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(xe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(je.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==(null===(e=this.context.userData[0])||void 0===e?void 0:e.length)?this.context.userData[0].map((function(e,a){return Object(R.jsx)(je.a,{value:e._id,children:e.name})})):Object(R.jsx)(U.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})}),Object(R.jsx)("div",{className:"col-4",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===this.state.saveDetailsEnable?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return a.validationDynamic()},children:"Check Balance"})})]}),Object(R.jsxs)(ae.a,{open:this.state.date_match_modal,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Your balance is: ",Object(R.jsx)("b",{children:this.state.matchData})]}),Object(R.jsx)(te.a,{children:Object(R.jsx)(h.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);pe.contextType=W;var ve=pe,fe=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",amount:""})},n.validationDynamic=function(){var e;if(""!==n.state.name)if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a=n.context.userData[0].map((function(e){return e._id===n.state.name?e.name:null}));n.setState({matchData:a,date_match_modal:!0});var t={amount:n.state.amount};V.a.patch(q.spend_funds+"/"+n.state.name,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:K,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:G,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e,a=this,t=this.state,n=t.amount,r=t.amountErrorLabel,l=(t.name,t.matchData),s=t.amountError,c=t.saveDetailsEnable,i=t.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-6 mt-4",children:Object(R.jsx)("div",{className:"check-funds",children:Object(R.jsxs)(Oe.a,{children:[Object(R.jsx)(ue.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(xe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(je.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==(null===(e=this.context.userData[0])||void 0===e?void 0:e.length)?this.context.userData[0].map((function(e,a){return Object(R.jsx)(je.a,{value:e._id,children:e.name})})):Object(R.jsx)(U.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})})}),Object(R.jsx)("div",{className:"col-md-6 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Amount",value:null===n?"":n,error:s,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"amount","data-id":"amount",onChange:function(e){return a.handleInputChange(e,"amount")}})}),Object(R.jsx)("div",{className:" mt-3",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===c?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return a.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ae.a,{open:i,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Success "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Amount ",Object(R.jsx)("b",{children:n})," \u20b9 debited from ",Object(R.jsxs)("b",{children:[l,"'s"]})," wallet"]}),Object(R.jsx)(te.a,{children:Object(R.jsx)(h.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);fe.contextType=W;var ge=fe,Ee=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",amount:""})},n.validationDynamic=function(){var e;if(""!==n.state.name)if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a=n.context.userData[0].map((function(e){return e._id===n.state.name?e.name:null}));n.setState({matchData:a,date_match_modal:!0});var t={amount:n.state.amount};V.a.patch(q.add_funds+"/"+n.state.name,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:K,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:G,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e,a=this,t=this.state,n=t.amount,r=t.amountErrorLabel,l=(t.name,t.matchData),s=t.amountError,c=t.saveDetailsEnable,i=t.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-6 mt-4",children:Object(R.jsx)("div",{className:"check-funds",children:Object(R.jsxs)(Oe.a,{children:[Object(R.jsx)(ue.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(xe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(je.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==(null===(e=this.context.userData[0])||void 0===e?void 0:e.length)?this.context.userData[0].map((function(e,a){return Object(R.jsx)(je.a,{value:e._id,children:e.name})})):Object(R.jsx)(U.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})})}),Object(R.jsx)("div",{className:"col-md-6 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Amount",value:null===n?"":n,error:s,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"amount","data-id":"amount",onChange:function(e){return a.handleInputChange(e,"amount")}})}),Object(R.jsx)("div",{className:" mt-3",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===c?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return a.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ae.a,{open:i,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Success "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Amount ",Object(R.jsx)("b",{children:n})," \u20b9 added to ",Object(R.jsxs)("b",{children:[l,"'s"]})," wallet"]}),Object(R.jsx)(te.a,{children:Object(R.jsx)(h.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);Ee.contextType=W;var Ne=Ee,Ce=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(R.jsx)("div",{className:"max-width-in",children:Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(ce.a,{component:de.a,children:Object(R.jsxs)(re.a,{className:"","aria-label":"simple table",children:[Object(R.jsx)(ie.a,{children:Object(R.jsxs)(oe.a,{children:[Object(R.jsx)(se.a,{children:Object(R.jsx)("b",{children:"Name"})}),Object(R.jsx)(se.a,{align:"right",children:Object(R.jsx)("b",{children:"Date"})}),Object(R.jsx)(se.a,{align:"right",children:Object(R.jsx)("b",{children:"Amount (Rs)"})}),Object(R.jsx)(se.a,{align:"right",children:Object(R.jsx)("b",{children:"Balance (Rs)"})})]})}),Object(R.jsx)(le.a,{children:void 0!==this.props.value.length?Object(R.jsxs)(R.Fragment,{children:[" ",this.props.value.map((function(e){return Object(R.jsxs)(oe.a,{children:[Object(R.jsx)(se.a,{component:"th",scope:"row",children:e.Name}),Object(R.jsx)(se.a,{align:"right",children:e.Date}),Object(R.jsx)(se.a,{align:"right",children:e.Amount}),Object(R.jsx)(se.a,{align:"right",children:e.Balance})]},e.Name)}))]}):Object(R.jsxs)(R.Fragment,{children:[" ",Object(R.jsx)(U.a,{color:"inherit",size:30,className:"table-loader"})]})})]})})})})}}]),t}(r.a.Component);Ce.contextType=W;var Se=Ce,ye=t(360),_e=t(63),De=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).myRef=void 0,n.inputRef=void 0,n.scrollRef=void 0,n.numberOfEmpRef=void 0,n.emailRef=void 0,n.nameRef=void 0,n.phoneRef=void 0,n.companyNameRef=void 0,n.validationDynamic=function(){var e;if(""!==n.state.name||!1!==n.state.islogin)if(""!==n.state.email)if(0!==(null===(e=n.state.password)||void 0===e?void 0:e.length)){var a={name:n.state.name,email:n.state.email,password:n.state.password};console.log("login",n.state.islogin),n.state.islogin?V.a.post(q.login_url,a).then((function(e){localStorage.setItem("AuthToken",e.data.token),n.setState({action:"home"})})).catch((function(e){n.setState({date_match_modal:!0})})):V.a.post(q.signup_url,a).then((function(e){localStorage.setItem("AuthToken",e.data.token),n.setState({action:"home"})})).catch((function(e){n.setState({date_match_modal:!0})}))}else n.setState({passwordError:!0,passwordErrorLabel:$,saveDetailsEnable:!1});else n.setState({emailError:!0,emailErrorLabel:Y,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:H,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",emailError:!1,emailErrorLabel:"",passwordError:!1,passwordErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",email:"",password:""})},n.renderFormSign=function(){var e=n.state,a=e.name,t=e.nameError,r=e.nameErrorLabel,l=e.email,s=e.emailError,c=e.emailErrorLabel,i=e.password,o=e.passwordErrorLabel,d=e.passwordError,m=e.saveDetailsEnable;e.date_match_modal;return console.log("process",Object({NODE_ENV:"production",PUBLIC_URL:"/template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENV:"production",REACT_APP_URL:"https://apimalay.herokuapp.com"})),Object(R.jsxs)(j.a,{className:"",variant:"outlined",children:[Object(R.jsxs)(u.a,{children:[Object(R.jsx)(_e.a,{variant:"h5",component:"h2",className:"main-title mb-3",children:"Payment Wallet"}),Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Name",value:a,error:t,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"name","data-id":"name",onChange:function(e){return n.handleInputChange(e,"name")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Email",value:null===l?"":l,error:s,helperText:c,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"email","data-id":"email",onChange:function(e){return n.handleInputChange(e,"email")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Password",value:null===i?"":i,error:d,helperText:o,type:"password",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"password","data-id":"password",onChange:function(e){return n.handleInputChange(e,"password")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===m?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return n.validationDynamic()},children:"Sign Up"})}),Object(R.jsx)("div",{className:"col-md-7 text-right mt-5",children:Object(R.jsx)("p",{className:"login-style",onClick:function(){return n.setState({islogin:!0})},children:"Already a member? Login"})})]})})]}),Object(R.jsxs)(ye.a,{children:[Object(R.jsx)(h.a,{size:"small",children:"By: Malay Mishra"}),Object(R.jsx)("br",{}),Object(R.jsx)(h.a,{size:"small",children:"production"})]})]})},n.renderFormLog=function(){var e=n.state,a=(e.name,e.nameError,e.nameErrorLabel,e.email),t=e.emailError,r=e.emailErrorLabel,l=e.password,s=e.passwordErrorLabel,c=e.passwordError,i=e.saveDetailsEnable;e.date_match_modal;return Object(R.jsxs)(j.a,{className:"",variant:"outlined",children:[Object(R.jsxs)(u.a,{children:[Object(R.jsx)(_e.a,{variant:"h5",component:"h2",className:"main-title mb-3",children:"Obuhi Assignment"}),Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Email",value:null===a?"":a,error:t,helperText:r,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"email","data-id":"email",onChange:function(e){return n.handleInputChange(e,"email")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(Z.a,{id:"standard-basic",label:"Password",value:null===l?"":l,error:c,helperText:s,type:"password",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"password","data-id":"password",onChange:function(e){return n.handleInputChange(e,"password")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3"}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(h.a,{variant:"contained",color:"primary",className:!0===i?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return n.validationDynamic()},children:"Login"})}),Object(R.jsx)("div",{className:"col-md-7 text-right mt-5",children:Object(R.jsx)("p",{className:"login-style",onClick:function(){return n.setState({islogin:!1})},children:"New Member? Sign Up"})})]})})]}),Object(R.jsxs)(ye.a,{children:[Object(R.jsx)(h.a,{size:"small",children:"By: Malay Mishra"}),Object(R.jsx)("br",{}),Object(R.jsx)(h.a,{size:"small",children:"production"})]})]})},n.renderDialog=function(){var e=n.state.date_match_modal;return Object(R.jsxs)(ae.a,{open:e,onClose:n.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsx)("h3",{className:"modal-subtitle",children:"Wrong Credentials "}),Object(R.jsx)(te.a,{children:Object(R.jsx)(h.a,{onClick:n.handleCloseSub,color:"primary",children:"Close"})})]})},n.state={name:"",nameError:!1,nameErrorLabel:"",email:"",emailError:!1,emailErrorLabel:"",password:"",passwordError:!1,passwordErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,action:"",islogin:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return"home"===this.state.action?Object(R.jsx)(b.a,{to:{pathname:"/all-wallet"}}):Object(R.jsxs)("div",{className:"max-width-in",children:[this.state.islogin?Object(R.jsx)(this.renderFormLog,{}):Object(R.jsx)(this.renderFormSign,{}),Object(R.jsx)(this.renderDialog,{})]})}}]),t}(r.a.Component),ke=t(140),we=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){var e=n.context.userData[0].map((function(e){return e.amount})),a=n.context.userData[0].map((function(e){return e.name}));n.setState({name:a,amount:e})},n.state={name:null,amount:null},n}return Object(i.a)(t,[{key:"render",value:function(){var e={labels:this.state.name,datasets:[{label:"Amount in wallet",backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",data:this.state.amount}]};return Object(R.jsx)("div",{children:Object(R.jsx)(ke.Bar,{data:e,options:{title:{display:!0,text:"Amount in wallet of Known",fontSize:20},legend:{display:!0,position:"right"}}})})}}]),t}(r.a.Component);we.contextType=W;var Le=we,Te=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isRedirect:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(R.jsx)(m.a,{basename:"/template",children:Object(R.jsxs)(b.d,{children:[Object(R.jsx)(X,{path:"/all-wallet",component:be}),Object(R.jsx)(X,{path:"/new-wallet",component:ne}),Object(R.jsx)(X,{path:"/check-balance",component:ve}),Object(R.jsx)(X,{path:"/add-funds",component:Ne}),Object(R.jsx)(X,{path:"/spend-funds",component:ge}),Object(R.jsx)(X,{path:"/all-trans",component:Se}),Object(R.jsx)(X,{path:"/charts",component:Le}),Object(R.jsx)(b.b,{path:"/",component:De})]})})}}]),t}(r.a.Component),Ae=t(141);t(285);var Ie=function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(Ae.a,{}),Object(R.jsx)(Te,{})]})},Re=(t(286),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,363)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),l(e),s(e)}))});s.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(Ie,{})}),document.getElementById("root")),Re()}},[[287,1,2]]]);
//# sourceMappingURL=main.a6f89a35.chunk.js.map