(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{126:function(e,a,t){},127:function(e,a,t){},128:function(e,a,t){},136:function(e,a,t){},156:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),s=t.n(l),c=(t(126),t(127),t(17)),i=t(18),o=t(20),d=t(19),m=t(30),b=t(12),j=t(37),h=t(215),u=t(216),O=t(217),x=t(69),p=t(213),v=t(208),f=t(232),g=t(231),E=t(214),N=t(101),C=t.n(N),y=t(102),S=t.n(y),_=t(46),D=t.n(_),k=t(210),w=t(159),L=t(211),I=t(212),T=t(205),A=t(15),R=(t(128),t(1)),F=240,B=Object(T.a)((function(e){return{root:{display:"flex"},drawer:Object(x.a)({},e.breakpoints.up("sm"),{width:F,flexShrink:0}),appBar:Object(x.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(F,"px)"),marginLeft:F}),menuButton:Object(x.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:F},content:{flexGrow:1,padding:e.spacing(3)}}}));var P=function(e){var a=e.window,t=B(),n=Object(A.a)(),l=r.a.useState(!1),s=Object(j.a)(l,2),c=s[0],i=s[1],o=r.a.useState(1),d=Object(j.a)(o,2),b=d[0],h=d[1],u=function(){i(!c)},O=function(e){switch(i(!1),e){case"1":h(1);break;case"2":h(2);break;case"3":h(3);break;case"4":h(4);break;case"5":h(5);break;case"6":h(6);break;default:h(1)}},x=Object(R.jsxs)("div",{children:[Object(R.jsx)("div",{className:t.toolbar}),Object(R.jsx)(v.a,{}),Object(R.jsxs)(k.a,{className:"custom-list",children:[Object(R.jsx)(m.b,{to:"/all-wallet",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("1")},children:Object(R.jsxs)(w.a,{button:!0,className:1===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"All Wallets"})]})})}),Object(R.jsx)(m.b,{to:"/new-wallet",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("2")},children:Object(R.jsxs)(w.a,{button:!0,className:2===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"New Wallet"})]})})}),Object(R.jsx)(m.b,{to:"/check-balance",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("3")},children:Object(R.jsxs)(w.a,{button:!0,className:3===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"Check Balance"})]})})}),Object(R.jsx)(m.b,{to:"/add-funds",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("4")},children:Object(R.jsxs)(w.a,{button:!0,className:4===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"Add Funds"})]})})}),Object(R.jsx)(m.b,{to:"/spend-funds",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("5")},children:Object(R.jsxs)(w.a,{button:!0,className:5===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"Spend Funds"})]})})}),Object(R.jsx)(m.b,{to:"/all-trans",className:"click-history",children:Object(R.jsx)("div",{onClick:function(){return O("6")},children:Object(R.jsxs)(w.a,{button:!0,className:6===b?"active":"",children:[Object(R.jsxs)(L.a,{children:[" ",Object(R.jsx)(D.a,{})]}),Object(R.jsx)(I.a,{primary:"All Transactions"})]})})})]})]}),N=void 0!==a?function(){return a().document.body}:void 0;return Object(R.jsxs)("div",{className:t.root,children:[Object(R.jsx)(p.a,{}),Object(R.jsx)(E.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:u,className:t.menuButton,children:c?Object(R.jsx)(C.a,{}):Object(R.jsx)(S.a,{})}),Object(R.jsxs)("nav",{className:t.drawer,"aria-label":"mailbox folders",children:[Object(R.jsx)(g.a,{smUp:!0,implementation:"css",children:Object(R.jsx)(f.a,{container:N,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:c,onClose:u,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:x})}),Object(R.jsx)(g.a,{xsDown:!0,implementation:"css",children:Object(R.jsx)(f.a,{classes:{paper:t.drawerPaper},variant:"permanent",open:!0,children:x})})]})]})},W=(t(136),r.a.createContext({})),z=t(24),U=t.n(z),M="http://localhost:5000",H="Invalid First Name.",V="Invalid Company Name.",K="Invalid Mobile Number.",J="No name selected",G="Invalid email",Y="Invalid password";console.log("data",Object({NODE_ENV:"production",PUBLIC_URL:"/template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_URL);var $={main_url:M+"/api/user/fullList",add_funds:M+"/api/user/addFunds",spend_funds:M+"/api/user/spendFunds",get_funds_id:M+"/api/user",add_user:M+"/api/user/add",trans_url:"https://my-json-server.typicode.com/hi-malay/trans/db",signup_url:M+"/api/auth/signup",login_url:M+"/api/auth/login",auth_user:M+"/api/auth"},q=t(218),Q=Object(b.g)((function(e){var a=Object(n.useState)([]),t=Object(j.a)(a,2),l=t[0],s=t[1],c=Object(n.useState)([]),i=Object(j.a)(c,2),o=i[0],d=i[1],m=Object(n.useState)([]),x=Object(j.a)(m,2),p=x[0],v=x[1],f=Object(n.useState)(!1),g=Object(j.a)(f,2),E=g[0],N=g[1],C=r.a.useState(!1),y=Object(j.a)(C,2),S=y[0],_=y[1];Object(n.useEffect)((function(){U.a.get($.main_url,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){e.data&&(s(e.data.user),N(!0),console.log("byr2",l))})).catch((function(e){console.log("error",e)})),U.a.get($.auth_user).then((function(e){e.data?(d(e.data),N(!0),console.log("byr2",l)):_(!0)})).catch((function(e){console.log("error",e)})),U.a.get($.trans_url).then((function(e){e.data&&v(e.data.data)})).catch((function(e){console.log("error",e)}))}),[e.location.pathname]);var D=function(){localStorage.removeItem("AuthToken"),e.history.push("/")};return console.log("keysssbyr",E),console.log("keysss",l),void 0!=localStorage.getItem("AuthToken")&&null!=localStorage.getItem("AuthToken")?Object.keys(o).length>0?Object(R.jsx)(b.b,{render:function(){return Object(R.jsx)("div",{className:"bg-grey full-len mt-3",children:Object(R.jsx)(W.Provider,{value:{userData:[l,s]},children:Object(R.jsx)("div",{className:"max-width max-width-padd mt-4",children:Object(R.jsx)(h.a,{className:"custom-card card-dashboard",children:Object(R.jsxs)(u.a,{children:[Object(R.jsx)("h2",{children:e.location.pathname.split("/")[1]}),Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:"btn-class mt-4",onClick:D,children:"Logout"}),Object(R.jsx)("div",{className:"col-md-4",children:Object(R.jsx)(P,{})}),Object(R.jsx)("div",{className:"col-md-8 mt-5",children:Object(R.jsx)(e.component,{value:p})})]})})})})})}}):S?Object(R.jsx)(b.a,{to:{pathname:"/"}}):Object(R.jsx)("div",{className:"Circular-Progress",children:Object(R.jsx)(q.a,{color:"inherit"})}):Object(R.jsx)(b.a,{to:{pathname:"/"}})})),X=t(219),Z=t(220),ee=t(221),ae=t(222),te=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).myRef=void 0,n.inputRef=void 0,n.scrollRef=void 0,n.numberOfEmpRef=void 0,n.emailRef=void 0,n.nameRef=void 0,n.phoneRef=void 0,n.companyNameRef=void 0,n.validationDynamic=function(){var e;if(""!==n.state.name)if((a=n.state.mobileNumber).length>10||(a=parseInt(a,10),!/^\d{10}$/.test(a)))n.setState({mobileNumberError:!0,mobileNumberErrorLabel:K,saveDetailsEnable:!1});else if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a;n.setState({date_match_modal:!0});var t={name:n.state.name,phone:n.state.mobileNumber,amount:n.state.amount};U.a.post($.add_user,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:V,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:H,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",mobileNumberError:!1,mobileNumberErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",mobileNumber:"",amount:""})},n.state={name:"",nameError:!1,nameErrorLabel:"",mobileNumber:"",mobileNumberError:!1,mobileNumberErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.nameError,r=a.nameErrorLabel,l=a.mobileNumber,s=a.mobileNumberError,c=a.mobileNumberErrorLabel,i=a.amount,o=a.amountErrorLabel,d=a.amountError,m=a.saveDetailsEnable,b=a.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Name",value:t,error:n,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"name","data-id":"name",onChange:function(a){return e.handleInputChange(a,"name")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Phone",value:null===l?"":l,error:s,helperText:c,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"mobileNumber","data-id":"mobileNumber",InputProps:{startAdornment:Object(R.jsx)(Z.a,{position:"start",children:"+91"})},onChange:function(a){return e.handleInputChange(a,"mobileNumber")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Amount",value:null===i?"":i,error:d,helperText:o,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"amount","data-id":"amount",onChange:function(a){return e.handleInputChange(a,"amount")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===m?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return e.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ee.a,{open:b,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsx)("h3",{className:"modal-subtitle",children:"Data successfully submitted "}),Object(R.jsx)(ae.a,{children:Object(R.jsx)(O.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component),ne=t(224),re=t(228),le=t(227),se=t(223),ce=t(225),ie=t(226),oe=t(105),de=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){n.setState({refDet:n.context.userData[0]})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,refDet:{}},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(R.jsx)("div",{className:"max-width-in",children:Object(R.jsxs)(R.Fragment,{children:[console.log("hii",this.context.userData[0]),Object(R.jsx)(se.a,{component:oe.a,children:Object(R.jsxs)(ne.a,{className:"","aria-label":"simple table",children:[Object(R.jsx)(ce.a,{children:Object(R.jsxs)(ie.a,{children:[Object(R.jsx)(le.a,{children:Object(R.jsx)("b",{children:"UserId"})}),Object(R.jsx)(le.a,{align:"left",children:Object(R.jsx)("b",{children:"Name"})}),Object(R.jsx)(le.a,{align:"left",children:Object(R.jsx)("b",{children:"Phone"})}),Object(R.jsx)(le.a,{align:"left",children:Object(R.jsx)("b",{children:"Balance"})})]})}),Object(R.jsx)(re.a,{children:void 0!==this.context.userData[0].length?Object(R.jsxs)(R.Fragment,{children:[" ",this.context.userData[0].map((function(e,a){return Object(R.jsxs)(ie.a,{children:[Object(R.jsxs)(le.a,{component:"th",scope:"row",children:["User",a+1]}),Object(R.jsx)(le.a,{align:"left",children:e.name}),Object(R.jsx)(le.a,{align:"left",children:e.phone}),Object(R.jsxs)(le.a,{align:"left",children:[e.amount," \u20b9"]})]},e._id)}))]}):Object(R.jsxs)(R.Fragment,{children:[" ",Object(R.jsx)(q.a,{color:"inherit",size:30,className:"table-loader"})]})})]})})]})})}}]),t}(r.a.Component);de.contextType=W;var me=de,be=t(229),je=t(170),he=t(164),ue=t(163),Oe=t(166),xe=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:""})},n.validationDynamic=function(){if(""!==n.state.name){var e=n.context.userData[0].map((function(e){return e._id===n.state.name?e.amount:null}));n.setState({matchData:e,date_match_modal:!0})}else n.setState({nameError:!0,nameErrorLabel:J,saveDetailsEnable:!1})},n.state={name:"",nameError:!1,nameErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("hi",localStorage.getItem("AuthToken")),Object(R.jsxs)("div",{className:"check-funds",children:[Object(R.jsxs)("div",{className:"row menu-tab",children:[Object(R.jsx)("div",{className:"col-12",children:Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(je.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(Oe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(be.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==this.context.userData[0].length?this.context.userData[0].map((function(e,a){return Object(R.jsx)(be.a,{value:e._id,children:e.name})})):Object(R.jsx)(q.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})}),Object(R.jsx)("div",{className:"col-4",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===this.state.saveDetailsEnable?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return e.validationDynamic()},children:"Check Balance"})})]}),Object(R.jsxs)(ee.a,{open:this.state.date_match_modal,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Your balance is: ",Object(R.jsx)("b",{children:this.state.matchData})]}),Object(R.jsx)(ae.a,{children:Object(R.jsx)(O.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);xe.contextType=W;var pe=xe,ve=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",amount:""})},n.validationDynamic=function(){var e;if(""!==n.state.name)if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a=n.context.userData[0].map((function(e){return e._id===n.state.name?e.name:null}));n.setState({matchData:a,date_match_modal:!0});var t={amount:n.state.amount};U.a.patch($.spend_funds+"/"+n.state.name,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:V,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:J,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.amount,n=a.amountErrorLabel,r=(a.name,a.matchData),l=a.amountError,s=a.saveDetailsEnable,c=a.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-6 mt-4",children:Object(R.jsx)("div",{className:"check-funds",children:Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(je.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(Oe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(be.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==this.context.userData[0].length?this.context.userData[0].map((function(e,a){return Object(R.jsx)(be.a,{value:e._id,children:e.name})})):Object(R.jsx)(q.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})})}),Object(R.jsx)("div",{className:"col-md-6 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Amount",value:null===t?"":t,error:l,helperText:n,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"amount","data-id":"amount",onChange:function(a){return e.handleInputChange(a,"amount")}})}),Object(R.jsx)("div",{className:" mt-3",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===s?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return e.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ee.a,{open:c,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Success "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Amount ",Object(R.jsx)("b",{children:t})," \u20b9 debited from ",Object(R.jsxs)("b",{children:[r,"'s"]})," wallet"]}),Object(R.jsx)(ae.a,{children:Object(R.jsx)(O.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);ve.contextType=W;var fe=ve,ge=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({name:e.target.value}),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",amount:""})},n.validationDynamic=function(){var e;if(""!==n.state.name)if(0!==(null===(e=n.state.amount)||void 0===e?void 0:e.length)){var a=n.context.userData[0].map((function(e){return e._id===n.state.name?e.name:null}));n.setState({matchData:a,date_match_modal:!0});var t={amount:n.state.amount};U.a.patch($.add_funds+"/"+n.state.name,t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("AuthToken"))}}).then((function(e){console.log("ok")})).catch((function(e){console.log("error",e)}))}else n.setState({amountError:!0,amountErrorLabel:V,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:J,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0})},n.state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,matchData:""},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.amount,n=a.amountErrorLabel,r=(a.name,a.matchData),l=a.amountError,s=a.saveDetailsEnable,c=a.date_match_modal;return Object(R.jsxs)("div",{className:"max-width-in",children:[Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-6 mt-4",children:Object(R.jsx)("div",{className:"check-funds",children:Object(R.jsxs)(ue.a,{children:[Object(R.jsx)(je.a,{id:"demo-simple-select-helper-label",children:"User Name"}),Object(R.jsxs)(Oe.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:this.state.name,onChange:this.handleChange,children:[Object(R.jsx)(be.a,{value:"",children:Object(R.jsx)("em",{children:"None"})}),void 0!==this.context.userData[0].length?this.context.userData[0].map((function(e,a){return Object(R.jsx)(be.a,{value:e._id,children:e.name})})):Object(R.jsx)(q.a,{color:"inherit",size:30,className:"table-loader"})]}),this.state.nameError?Object(R.jsx)(he.a,{children:this.state.nameErrorLabel}):""]})})}),Object(R.jsx)("div",{className:"col-md-6 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Amount",value:null===t?"":t,error:l,helperText:n,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"amount","data-id":"amount",onChange:function(a){return e.handleInputChange(a,"amount")}})}),Object(R.jsx)("div",{className:" mt-3",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===s?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return e.validationDynamic()},children:"Submit"})})]})}),Object(R.jsxs)(ee.a,{open:c,onClose:this.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Success "}),Object(R.jsxs)("h3",{className:"modal-subtitle",children:[" Amount ",Object(R.jsx)("b",{children:t})," \u20b9 added to ",Object(R.jsxs)("b",{children:[r,"'s"]})," wallet"]}),Object(R.jsx)(ae.a,{children:Object(R.jsx)(O.a,{onClick:this.handleCloseSub,color:"primary",children:"Close"})})]})]})}}]),t}(r.a.Component);ge.contextType=W;var Ee=ge,Ne=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={name:"",nameError:!1,nameErrorLabel:"",amount:"",amountError:!1,amountErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(R.jsx)("div",{className:"max-width-in",children:Object(R.jsxs)(R.Fragment,{children:[console.log("hii",this.context.userData[0]),Object(R.jsx)(se.a,{component:oe.a,children:Object(R.jsxs)(ne.a,{className:"","aria-label":"simple table",children:[Object(R.jsx)(ce.a,{children:Object(R.jsxs)(ie.a,{children:[Object(R.jsx)(le.a,{children:Object(R.jsx)("b",{children:"Name"})}),Object(R.jsx)(le.a,{align:"right",children:Object(R.jsx)("b",{children:"Date"})}),Object(R.jsx)(le.a,{align:"right",children:Object(R.jsx)("b",{children:"Amount (Rs)"})}),Object(R.jsx)(le.a,{align:"right",children:Object(R.jsx)("b",{children:"Balance (Rs)"})})]})}),Object(R.jsx)(re.a,{children:void 0!==this.props.value.length?Object(R.jsxs)(R.Fragment,{children:[" ",this.props.value.map((function(e){return Object(R.jsxs)(ie.a,{children:[Object(R.jsx)(le.a,{component:"th",scope:"row",children:e.Name}),Object(R.jsx)(le.a,{align:"right",children:e.Date}),Object(R.jsx)(le.a,{align:"right",children:e.Amount}),Object(R.jsx)(le.a,{align:"right",children:e.Balance})]},e.Name)}))]}):Object(R.jsxs)(R.Fragment,{children:[" ",Object(R.jsx)(q.a,{color:"inherit",size:30,className:"table-loader"})]})})]})})]})})}}]),t}(r.a.Component);Ne.contextType=W;var Ce=Ne,ye=t(230),Se=t(58),_e=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).myRef=void 0,n.inputRef=void 0,n.scrollRef=void 0,n.numberOfEmpRef=void 0,n.emailRef=void 0,n.nameRef=void 0,n.phoneRef=void 0,n.companyNameRef=void 0,n.validationDynamic=function(){var e;if(""!==n.state.name||!1!==n.state.islogin)if(""!==n.state.email)if(0!==(null===(e=n.state.password)||void 0===e?void 0:e.length)){var a={name:n.state.name,email:n.state.email,password:n.state.password};console.log("login",n.state.islogin),n.state.islogin?U.a.post($.login_url,a).then((function(e){localStorage.setItem("AuthToken",e.data.token),n.setState({action:"home"})})).catch((function(e){n.setState({date_match_modal:!0})})):U.a.post($.signup_url,a).then((function(e){localStorage.setItem("AuthToken",e.data.token),n.setState({action:"home"})})).catch((function(e){n.setState({date_match_modal:!0})}))}else n.setState({passwordError:!0,passwordErrorLabel:Y,saveDetailsEnable:!1});else n.setState({emailError:!0,emailErrorLabel:G,saveDetailsEnable:!1});else n.setState({nameError:!0,nameErrorLabel:H,saveDetailsEnable:!1})},n.handleInputChange=function(e,a){var t=e.target.value,r={};r[a]=t,n.setState(r),n.setState({nameError:!1,nameErrorLabel:"",emailError:!1,emailErrorLabel:"",passwordError:!1,passwordErrorLabel:"",saveDetailsEnable:!0})},n.handleCloseSub=function(){n.setState({date_match_modal:!1,name:"",email:"",password:""})},n.renderFormSign=function(){var e=n.state,a=e.name,t=e.nameError,r=e.nameErrorLabel,l=e.email,s=e.emailError,c=e.emailErrorLabel,i=e.password,o=e.passwordErrorLabel,d=e.passwordError,m=e.saveDetailsEnable;e.date_match_modal;return Object(R.jsxs)(h.a,{className:"",variant:"outlined",children:[Object(R.jsxs)(u.a,{children:[Object(R.jsx)(Se.a,{variant:"h5",component:"h2",className:"main-title mb-3",children:"Payment Wallet"}),Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Name",value:a,error:t,helperText:r,type:"text",margin:"normal",variant:"outlined",className:"custom-input",name:"name","data-id":"name",onChange:function(e){return n.handleInputChange(e,"name")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Email",value:null===l?"":l,error:s,helperText:c,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"email","data-id":"email",onChange:function(e){return n.handleInputChange(e,"email")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Password",value:null===i?"":i,error:d,helperText:o,type:"password",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"password","data-id":"password",onChange:function(e){return n.handleInputChange(e,"password")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===m?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return n.validationDynamic()},children:"Sign Up"})}),Object(R.jsx)("div",{className:"col-md-7 text-right mt-5",children:Object(R.jsx)("p",{className:"login-style",onClick:function(){return n.setState({islogin:!0})},children:"Already a member? Login"})})]})})]}),Object(R.jsx)(ye.a,{children:Object(R.jsx)(O.a,{size:"small",children:"By: Malay Mishra"})})]})},n.renderFormLog=function(){var e=n.state,a=(e.name,e.nameError,e.nameErrorLabel,e.email),t=e.emailError,r=e.emailErrorLabel,l=e.password,s=e.passwordErrorLabel,c=e.passwordError,i=e.saveDetailsEnable;e.date_match_modal;return Object(R.jsxs)(h.a,{className:"",variant:"outlined",children:[Object(R.jsxs)(u.a,{children:[Object(R.jsx)(Se.a,{variant:"h5",component:"h2",className:"main-title mb-3",children:"Obuhi Assignment"}),Object(R.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(R.jsxs)("div",{className:"row mt-3",children:[Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Email",value:null===a?"":a,error:t,helperText:r,type:"text",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"email","data-id":"email",onChange:function(e){return n.handleInputChange(e,"email")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(X.a,{id:"standard-basic",label:"Password",value:null===l?"":l,error:c,helperText:s,type:"password",margin:"normal",variant:"outlined",fullWidth:!0,className:"custom-input",name:"password","data-id":"password",onChange:function(e){return n.handleInputChange(e,"password")}})}),Object(R.jsx)("div",{className:"col-md-4 mt-3"}),Object(R.jsx)("div",{className:"col-md-4 mt-3",children:Object(R.jsx)(O.a,{variant:"contained",color:"primary",className:!0===i?"btn-class mt-4":"btn-class-default mt-4",onClick:function(){return n.validationDynamic()},children:"Login"})}),Object(R.jsx)("div",{className:"col-md-7 text-right mt-5",children:Object(R.jsx)("p",{className:"login-style",onClick:function(){return n.setState({islogin:!1})},children:"New Member? Sign Up"})})]})})]}),Object(R.jsx)(ye.a,{children:Object(R.jsx)(O.a,{size:"small",children:"By: Malay Mishra"})})]})},n.renderDialog=function(){var e=n.state.date_match_modal;return Object(R.jsxs)(ee.a,{open:e,onClose:n.handleCloseSub,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(R.jsx)("h3",{className:"modal-title",children:"Hi, "}),Object(R.jsx)("h3",{className:"modal-subtitle",children:"Wrong Credentials "}),Object(R.jsx)(ae.a,{children:Object(R.jsx)(O.a,{onClick:n.handleCloseSub,color:"primary",children:"Close"})})]})},n.state={name:"",nameError:!1,nameErrorLabel:"",email:"",emailError:!1,emailErrorLabel:"",password:"",passwordError:!1,passwordErrorLabel:"",saveDetailsEnable:!0,date_match_modal:!1,action:"",islogin:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return"home"===this.state.action?Object(R.jsx)(b.a,{to:{pathname:"/all-wallet"}}):Object(R.jsxs)("div",{className:"max-width-in",children:[this.state.islogin?Object(R.jsx)(this.renderFormLog,{}):Object(R.jsx)(this.renderFormSign,{}),Object(R.jsx)(this.renderDialog,{})]})}}]),t}(r.a.Component),De=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={isRedirect:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return Object(R.jsx)(m.a,{basename:"/template",children:Object(R.jsxs)(b.d,{children:[Object(R.jsx)(Q,{path:"/all-wallet",component:me}),Object(R.jsx)(Q,{path:"/new-wallet",component:te}),Object(R.jsx)(Q,{path:"/check-balance",component:pe}),Object(R.jsx)(Q,{path:"/add-funds",component:Ee}),Object(R.jsx)(Q,{path:"/spend-funds",component:fe}),Object(R.jsx)(Q,{path:"/all-trans",component:Ce}),Object(R.jsx)(b.b,{path:"/",component:_e})]})})}}]),t}(r.a.Component),ke=t(103);t(155);var we=function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(ke.a,{}),Object(R.jsx)(De,{})]})},Le=(t(156),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,233)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,l=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),l(e),s(e)}))});s.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(we,{})}),document.getElementById("root")),Le()}},[[157,1,2]]]);
//# sourceMappingURL=main.62e7d825.chunk.js.map