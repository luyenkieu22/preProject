(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1511:function(e,t,a){"use strict";var n=a(56),l=a(0),r=a.n(l),o=a(1339),c=a(1489),i=a(1342),s=a(1345),m=a(610),u=a(7),d=a(103),p=a(125),g=!1;t.a=Object(m.a)({},{withTheme:!0})(Object(d.b)(function(e){return{settings:e.layout.settings,getCartList:u.PropTypes.func.isRequired,deleteProductFromCart:u.PropTypes.func.isRequired,updateCartAmount:u.PropTypes.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}},{getCartList:p.j,deleteProductFromCart:p.i,updateCartAmount:p.k})(function(e){var t=e.container,a=e.theme,l=e.settings,m=e.cartList,u=void 0===m?[]:m,d=e.getCartList,p=e.deleteProductFromCart,h=e.updateCartAmount,b=e.user,E=r.a.useState(!1),y=Object(n.a)(E,2),f=y[0],v=y[1];return g||(d(b.userId),g=!0),a.palette,r.a.createElement(o.a,{theme:l.themes[l.activeTheme]},r.a.createElement(c.a,{container:t,variant:"temporary",anchor:"right",open:f,onClose:function(){v(!f)},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:"mini-cart"},r.a.createElement("div",{className:"cart__topbar flex flex-middle p-16 mb-24"},r.a.createElement(i.a,{color:"primary"},"shopping_cart"),r.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Cart")),u.map(function(e){return r.a.createElement("div",{key:e.id,className:"mini-cart__item flex flex-middle flex-space-between py-16 px-8"},r.a.createElement("div",{className:"flex flex-column mr-8"},r.a.createElement(s.a,{size:"small",onClick:function(){return h(b.userId,e.id,e.amount+1)}},r.a.createElement(i.a,{className:"cursor-pointer"},"keyboard_arrow_up")),r.a.createElement(s.a,{disabled:!(e.amount-1),size:"small",onClick:function(){return h(b.userId,e.id,e.amount-1)}},r.a.createElement(i.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),r.a.createElement("div",{className:"mr-8"},r.a.createElement("img",{src:e.imgUrl,alt:e.title})),r.a.createElement("div",{className:"mr-8 text-center"},r.a.createElement("h6",{className:"m-0 mb-4"},e.title),r.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),r.a.createElement(s.a,{size:"small",onClick:function(){return p(b.userId,e.id)}},r.a.createElement(i.a,{fontSize:"small"},"clear")))}))))}))},1584:function(e,t,a){"use strict";var n=a(56),l=a(0),r=a.n(l),o=a(1339),c=a(610),i=(a(144),a(7)),s=a(103),m=a(222);t.a=Object(c.a)({},{withTheme:!0})(Object(s.b)(function(e){return{getNotification:i.PropTypes.func.isRequired,deleteNotification:i.PropTypes.func.isRequired,deleteAllNotification:i.PropTypes.func.isRequired,notification:e.notification,settings:e.layout.settings}},{getNotification:m.g,deleteNotification:m.f,deleteAllNotification:m.e})(function(e){e.container;var t=e.theme,a=e.settings,l=(e.notification,e.getNotification,e.deleteAllNotification,e.deleteNotification,r.a.useState(!1)),c=Object(n.a)(l,2);return c[0],c[1],t.palette,r.a.createElement(o.a,{theme:a.themes[a.activeTheme]})}))},1585:function(e,t,a){"use strict";var n=a(18),l=a(23),r=a(37),o=a(38),c=a(0),i=a.n(c),s=a(19),m=a(1539),u=a(1544),d=a(1558),p=a(1549),g=a(1543),h=a(1648),b=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={selected:"vi",hasError:!1},e}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=this.props,a=(t.t,t.i18n);t.classes;a.changeLanguage(e),this.setState({selected:e})}},{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=(t.i18n,t.classes),l=this.state,r=l.selected,o=l.hasError;return i.a.createElement("form",{className:n.root,autoComplete:"off"},i.a.createElement(g.a,{className:n.formControl,error:o},i.a.createElement(u.a,{htmlFor:"name"},a("general.language")),i.a.createElement(h.a,{name:"name",value:r,onChange:function(t){return e.handleChange(t.target.value)},input:i.a.createElement(m.a,{id:"name"})},i.a.createElement(d.a,{value:"vi"},"Ti\u1ebfng Vi\u1ec7t")),o&&i.a.createElement(p.a,null,"This is required!")))}}]),a}(i.a.Component);t.a=Object(s.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(b)},1586:function(e,t,a){"use strict";var n=a(4),l=a(18),r=a(23),o=a(37),c=a(38),i=a(0),s=a.n(i),m=a(1490),u=a.n(m),d=a(40),p=a(103),g=a(7),h=a.n(g),b=a(1587),E=a(62),y=a(126),f=a(1360),v=a(66),N=Object(f.a)()(E.h),C=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={},e.updateSidebarMode=function(t){var a=e.props,l=a.settings,r=a.setLayoutSettings,o=l.activeLayout+"Settings",c=l[o];r(Object(n.a)(Object(n.a)({},l),{},{[o]:Object(n.a)(Object(n.a)({},c),{},{leftSidebar:Object(n.a)(Object(n.a)({},c.leftSidebar),t)})}))},e.renderOverlay=function(){return s.a.createElement("div",{onClick:function(){return e.updateSidebarMode({mode:"close"})},className:"sidenav__overlay"})},e}return Object(r.a)(a,[{key:"getNavigation",value:function(){var e=v.a.getLocalStorageItem("navigations");return e&&e.length>0?e:b.a}},{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(u.a,{option:{suppressScrollX:!0},className:"scrollable position-relative"},this.props.children,s.a.createElement(N,{navigation:this.getNavigation()})),this.renderOverlay())}}]),a}(i.Component);t.a=Object(d.g)(Object(p.b)(function(e){return{setLayoutSettings:h.a.func.isRequired,settings:e.layout.settings}},{setLayoutSettings:y.d})(C))},1587:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(2),l=a.n(n),r=[{name:"Dashboard.dashboard",icon:"dashboard",path:l.a.ROOT_PATH+"home",isVisible:!0},{name:"Dashboard.category",icon:"category",path:"",isVisible:!0,children:[{name:"manage.add_employees",path:l.a.ROOT_PATH+"add-employee",icon:"keyboard_arrow_right",isVisible:!0},{name:"manage.employees",path:l.a.ROOT_PATH+"manage-employees",icon:"keyboard_arrow_right",isVisible:!0},{name:"manage.end_employees",path:l.a.ROOT_PATH+"end-employee",icon:"keyboard_arrow_right",isVisible:!0}]},{name:"Dashboard.manage",isVisible:!0,path:"",icon:"engineering",children:[{name:"leader.waiting_approval",isVisible:!0,path:l.a.ROOT_PATH+"waiting-approval",icon:"keyboard_arrow_right"},{name:"leader.leader_approval",isVisible:!0,path:l.a.ROOT_PATH+"leader-approval",icon:"keyboard_arrow_right"}]}]},1588:function(e,t,a){"use strict";var n=a(18),l=a(23),r=a(37),o=a(38),c=a(0),i=a.n(c),s=a(2),m=a.n(s),u=a(85),d=(a(380),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"flex flex-middle flex-space-between brand-area"},i.a.createElement("div",{className:"flex flex-middle brand logo-menu"},i.a.createElement(u.a,{to:m.a.HOME_PAGE},i.a.createElement("span",{className:"brand__text"},"Fashion Store"))),this.props.children)}}]),a}(c.Component));t.a=d},1589:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(380);t.a=function(e){var t=e.theme,a=e.settings;return l.a.createElement(r.Helmet,null,l.a.createElement("style",null,"\n        \n        ".concat("dark"===t.palette.type?".sidenav {\n          color: ".concat(t.palette.text.secondary,";\n        }"):" ","\n\n        .sidenav__hold {\n          background-image: url(").concat(a.layout1Settings.leftSidebar.bgImgURL,");\n          opacity: 1 !important;\n        }\n        .sidenav__hold::after {\n          background: ").concat(t.palette.primary.main,";\n          opacity: ").concat(a.layout1Settings.leftSidebar.bgOpacity,";\n        }\n\n        ").concat("light"===t.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active,\n        .navigation .submenu {\n          background: rgba(0, 0, 0, .08);\n        }":"","\n        ").concat("dark"===t.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active {\n          color: ".concat(t.palette.text.primary,";\n        }"):"","\n        \n      ")))}},1590:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1339),o=a(1340),c=a(19),i=a(103),s=a(380);t.a=Object(c.a)({},{withTheme:!0})(Object(i.b)(function(e){return{settings:e.layout.settings}},{})(function(e){var t=e.theme,a=e.settings,n=a.themes[a.footer.theme]||t;return l.a.createElement(r.a,{theme:n},l.a.createElement(s.Helmet,null,l.a.createElement("style",null,"\n              .footer {\n                background: ".concat(n.palette.primary.main,";\n                color: ").concat(n.palette.primary.contrastText,";\n              }\n            "))),l.a.createElement("div",{className:"footer flex flex-middle"},l.a.createElement("div",{className:"flex flex-middle container px-sm-30 w-100"},l.a.createElement("a",{href:"#"},l.a.createElement(o.a,{variant:"contained",color:"secondary"},"Hotline: 0349655473")),l.a.createElement("span",{className:"m-auto"}))))}))},1643:function(e,t,a){"use strict";var n=a(18),l=a(23),r=a(37),o=a(38),c=a(0),i=a.n(c),s=a(1339),m=a(1345),u=a(1342),d=a(1503),p=a(380),g=a(40),h=a(103),b=a(144),E=a(4),y=a(126),f=a(7),v=a(1561),N=a(291),C=a(1543),x=a(1545),k=a(1570),O=a(1571),S=a(1582),w=a(19),j=a(1490),T=a.n(j),_=a(69),L=a(1581),R=a(1646),P=a(1651),z=a(389),D=a(1578),A=Object(w.a)(function(e){return{badge:{top:"100%",right:"90%",height:"32px",width:"32px",borderRadius:"50%"}}})(D.a),F=["purple1","purple2","blue","purpleDark1","purpleDark2","blueDark"],H=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],q=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],I=["/assets/images/sidebar/sidebar-bg-dark.jpg","/assets/images/sidebar/sidebar-bg-light.jpg"],V=function(e){var t=e.settings,a=e.handleChange,n=e.handleControlChange;return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Sidebar theme"),i.a.createElement("div",{className:"colors"},H.map(function(e,n){return i.a.createElement(v.a,{key:n,title:e,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return a("layout1Settings.leftSidebar.theme",e)},style:{backgroundColor:z.a[e].palette.primary.main}},t.layout1Settings.leftSidebar.theme===e&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:t.themes[e].palette.type})))}))),i.a.createElement("div",{className:"mb-32 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),i.a.createElement("div",{className:"colors"},q.map(function(e,n){return i.a.createElement(v.a,{key:n,title:e,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return a("layout1Settings.topbar.theme",e)},style:{backgroundColor:z.a[e].palette.primary.main}},t.layout1Settings.topbar.theme===e&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:t.themes[e].palette.type})))}))),i.a.createElement("div",{className:"mx-12 mb-24"},i.a.createElement(C.a,{component:"fieldset"},i.a.createElement(x.a,{component:"legend"},"Sidebar mode"),i.a.createElement(L.a,{"aria-label":"Sidebar",name:"leftSidebar",value:t.layout1Settings.leftSidebar.mode,onChange:n("layout1Settings.leftSidebar.mode")},i.a.createElement(O.a,{value:"full",control:i.a.createElement(R.a,null),label:"Full"}),i.a.createElement(O.a,{value:"close",control:i.a.createElement(R.a,null),label:"Close"}),i.a.createElement(O.a,{value:"compact",control:i.a.createElement(R.a,null),label:"Compact"})))),i.a.createElement("div",{className:"mb-32 mx-12"},i.a.createElement("div",{className:"text-muted"},"Sidebar background image"),i.a.createElement("div",{className:"layout-boxes"},I.map(function(e,n){return i.a.createElement(A,{key:n,color:"primary",className:"layout-box",style:{width:"calc(25% - 8px)"},badgeContent:i.a.createElement(u.a,null,"done"),invisible:t.layout1Settings.leftSidebar.bgImgURL!==e},i.a.createElement(N.a,{onClick:function(){return a("layout1Settings.leftSidebar.bgImgURL",e)},style:{height:"160px"}},i.a.createElement("img",{src:e,alt:""})))}))),i.a.createElement("div",{className:"mb-32 mx-12"},i.a.createElement("div",{className:"text-muted"},"Sidebar background opacity"),i.a.createElement(P.a,{value:t.layout1Settings.leftSidebar.bgOpacity,onChange:function(e,t){return a("layout1Settings.leftSidebar.bgOpacity",t)},marks:!0,step:.02,max:1,min:.5,valueLabelDisplay:"auto","aria-labelledby":"sidebar-bgOpacity"})),i.a.createElement("div",{className:"mx-12 mb-24"},i.a.createElement(C.a,{component:"fieldset"},i.a.createElement(x.a,{component:"legend"},"Topbar"),i.a.createElement(k.a,null,i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:Object(_.get)(t.layout1Settings.topbar,"show"),onChange:n("layout1Settings.topbar.show")}),label:"Show"}),i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:Object(_.get)(t.layout1Settings.topbar,"fixed"),onChange:n("layout1Settings.topbar.fixed")}),label:"Fixed"})))))},W=function(e){var t=e.settings,a=e.handleChange,n=e.handleControlChange;return i.a.createElement(c.Fragment,null,i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),i.a.createElement("div",{className:"colors"},Object.keys(z.a).map(function(e,n){return i.a.createElement(v.a,{key:n,title:e,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return a("layout2Settings.topbar.theme",e)},style:{backgroundColor:z.a[e].palette.primary.main}},t.layout2Settings.topbar.theme===e&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:t.themes[e].palette.type})))}))),i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Navbar theme"),i.a.createElement("div",{className:"colors"},Object.keys(z.a).map(function(e,n){return i.a.createElement(v.a,{key:n,title:e,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return a("layout2Settings.navbar.theme",e)},style:{backgroundColor:z.a[e].palette.primary.main}},t.layout2Settings.navbar.theme===e&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:t.themes[e].palette.type})))}))),i.a.createElement("div",{className:"mx-12 mb-24"},i.a.createElement(C.a,{component:"fieldset"},i.a.createElement(x.a,{component:"legend"},"Layout mode"),i.a.createElement(L.a,{"aria-label":"layout-mode",name:"layoutMode",value:t.layout2Settings.mode,onChange:n("layout2Settings.mode")},i.a.createElement(O.a,{value:"full",control:i.a.createElement(R.a,null),label:"Full"}),i.a.createElement(O.a,{value:"contained",control:i.a.createElement(R.a,null),label:"Contained"}),i.a.createElement(O.a,{value:"boxed",control:i.a.createElement(R.a,null),label:"Boxed"})))))},M=a(2),U=a.n(M),J=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.updateSettings=function(t){var a=e.props,n=a.settings,l=a.setLayoutSettings,r=a.setDefaultSettings,o=Object(_.merge)({},n,t);l(o),r(o)},e.selectLayout=function(t){e.updateSettings({activeLayout:t})},e.handleChange=function(t,a){var n=e.props.settings,l=Object(_.set)(n,t,a);e.updateSettings(l)},e.handleControlChange=function(t){return function(a){var n="checkbox"===a.target.type?a.target.checked:a.target.value;e.handleChange(t,n)}},e.tooglePanel=function(){e.setState({open:!e.state.open})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.settings,n=t.classes,l=Object(E.a)({},a.themes[a.activeTheme]);return i.a.createElement(c.Fragment,null,i.a.createElement(v.a,{title:"Theme Settings",placement:"left"},i.a.createElement(m.a,{size:"small","aria-label":"delete",className:"my-12",onClick:this.tooglePanel},i.a.createElement(u.a,{className:"spin"},"settings"))),this.state.open&&i.a.createElement(s.a,{theme:l},i.a.createElement("div",{className:"egret-customizer pb-8 ".concat(n.root),style:{backgroundColor:l.palette.background.default}},i.a.createElement("div",{className:"flex felx-row flex-middle p-16 mb-16 elevation-z6",style:{minHeight:"64px"}},i.a.createElement(u.a,{color:"primary"},"settings"),i.a.createElement("h5",{className:"mb-0 ml-8"},"Theme Settings"),i.a.createElement(m.a,{onClick:this.tooglePanel,className:"customizer-close"},i.a.createElement(u.a,null,"close"))),i.a.createElement(T.a,{options:{suppressScrollX:!0},className:"px-16"},i.a.createElement("div",{className:"mt-8 mb-32 mx-12"},i.a.createElement("div",{className:"text-muted"},"Layouts"),i.a.createElement("div",{className:"layout-boxes"},i.a.createElement(A,{color:"secondary",className:"layout-box",badgeContent:i.a.createElement(u.a,null,"done"),invisible:"layout1"!==a.activeLayout},i.a.createElement(N.a,{onClick:function(){return e.selectLayout("layout1")},elevation:4},i.a.createElement("img",{src:U.a.ROOT_PATH+"assets/images/screenshots/layout1-customizer.png",alt:""}))),i.a.createElement(A,{color:"secondary",className:"layout-box",badgeContent:i.a.createElement(u.a,null,"done"),invisible:"layout2"!==a.activeLayout},i.a.createElement(N.a,{onClick:function(){return e.selectLayout("layout2")},elevation:4},i.a.createElement("img",{src:U.a.ROOT_PATH+"assets/images/screenshots/layout2-customizer.png",alt:""}))))),i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Main theme"),i.a.createElement("div",{className:"colors"},F.map(function(t,n){return i.a.createElement(v.a,{key:n,title:t,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return e.updateSettings({activeTheme:t})},style:{backgroundColor:z.a[t].palette.primary.main}},a.activeTheme===t&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:a.themes[t].palette.type})))}))),"layout1"===a.activeLayout&&i.a.createElement(V,{settings:a,handleChange:this.handleChange,handleControlChange:this.handleControlChange}),"layout2"===a.activeLayout&&i.a.createElement(W,{settings:a,handleChange:this.handleChange,handleControlChange:this.handleControlChange}),i.a.createElement("div",{className:"mx-12 mb-24"},i.a.createElement(C.a,{component:"fieldset"},i.a.createElement(x.a,{component:"legend"},"Footer"),i.a.createElement(k.a,null,i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:Object(_.get)(a.footer,"show"),onChange:this.handleControlChange("footer.show")}),label:"Show"}),i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:Object(_.get)(a.layout1Settings.footer,"fixed"),onChange:this.handleControlChange("footer.fixed")}),label:"Fixed"})))),i.a.createElement("div",{className:"mx-12 mb-24"},i.a.createElement(C.a,{component:"fieldset"},i.a.createElement(x.a,{component:"legend"},"Secondary sidebar"),i.a.createElement(k.a,null,i.a.createElement(O.a,{control:i.a.createElement(S.a,{checked:Object(_.get)(a.secondarySidebar,"show"),onChange:this.handleControlChange("secondarySidebar.show")}),label:"Show"})))),i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Secondary sidebar theme"),i.a.createElement("div",{className:"colors"},q.map(function(t,n){return i.a.createElement(v.a,{key:n,title:t,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return e.handleChange("secondarySidebar.theme",t)},style:{backgroundColor:z.a[t].palette.primary.main}},a.secondarySidebar.theme===t&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:a.themes[t].palette.type})))}))),i.a.createElement("div",{className:"mb-16 mx-12"},i.a.createElement("div",{className:"text-muted mb-4"},"Footer theme"),i.a.createElement("div",{className:"colors"},q.map(function(t,n){return i.a.createElement(v.a,{key:n,title:t,placement:"top"},i.a.createElement("div",{className:"color",onClick:function(){return e.handleChange("footer.theme",t)},style:{backgroundColor:z.a[t].palette.primary.main}},a.footer.theme===t&&i.a.createElement(u.a,null,"done"),i.a.createElement("div",{className:a.themes[t].palette.type})))})))))))}}]),a}(c.Component),X=Object(w.a)(function(e){return{root:{},paper:{display:"inherit"}}},{withTheme:!0})(Object(h.b)(function(e){return{settings:e.layout.settings,setLayoutSettings:f.PropTypes.func.isRequired,setDefaultSettings:f.PropTypes.func.isRequired}},{setLayoutSettings:y.d,setDefaultSettings:y.c})(J)),B=a(610),G=a(1511),$=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={open:!0},e.toggle=function(){e.setState({open:!e.state.open})},e.listenWindowResize=function(){return Object(b.b)(function(){e.setState({open:!Object(b.e)()})},100)},e}return Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({open:!Object(b.e)()}),window&&(this.listenWindowResizeRef=this.listenWindowResize(),window.addEventListener("resize",this.listenWindowResizeRef))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.listenWindowResizeRef)}},{key:"render",value:function(){var e=this.props,t=e.settings,a=e.classes,n=e.theme,l=t.themes[t.secondarySidebar.theme]||n;return i.a.createElement(s.a,{theme:l},this.state.open&&!Object(b.e)()&&i.a.createElement(p.Helmet,null,i.a.createElement("style",null,"\n              .content-wrap, \n              .layout2.layout-contained, \n              .layout2.layout-full {\n                margin-right: ".concat("50px",";\n              }\n              @media screen and (max-width: 959px) {\n                .toolbar-menu-wrap .menu-area {\n                  width: calc(100% - ").concat("50px",");\n                }\n              }\n              .egret-customizer {\n                right: ").concat("50px",";\n              }\n            "))),i.a.createElement("div",{className:a.root+" "+Object(b.a)({open:this.state.open,"secondary-sidebar":!0}),style:{backgroundColor:l.palette.primary.main}},i.a.createElement("span",{className:"m-auto"}),i.a.createElement(X,null),i.a.createElement(G.a,null),i.a.createElement(m.a,{size:"small","aria-label":"delete",className:"my-12"},i.a.createElement(u.a,null,"comments")),i.a.createElement("span",{className:"m-auto"}),i.a.createElement("div",{className:"toggle"},this.state.open&&i.a.createElement(m.a,{onClick:this.toggle,size:"small","aria-label":"toggle"},i.a.createElement(u.a,null,"arrow_right")),!this.state.open&&i.a.createElement(d.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:"pr-36",onClick:this.toggle},i.a.createElement(u.a,null,"arrow_left")))))}}]),a}(c.Component);t.a=Object(B.a)(function(e){return{root:{position:"fixed",height:"100vh",width:"50px",right:"-".concat("50px"),bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:e.shadows[8],zIndex:98,transition:"all 0.15s ease","&.open":{right:0,"& .toggle":{left:0}},"& .toggle":{position:"relative",left:"-28px",bottom:"20px",transition:"all 0.15s ease"}}}},{withTheme:!0})(Object(g.g)(Object(h.b)(function(e){return{settings:e.layout.settings}},{})($)))}}]);
//# sourceMappingURL=4.187d2e7e.chunk.js.map