(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})})}i.defaultProps={title:"Give Text here",aboutText:"Give About Text here"};var b=0;function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("h1",{className:"my-2",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control text-".concat("light"===e.mode?"dark":"light"),id:"Mybox",value:n,onChange:function(e){r(e.target.value),null!==n&&(b=n.split(" ").length)},style:{backgroundColor:"dark"===e.mode?"#505050":"white"},rows:"10"})}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to Upper case","success")},children:" Convert to UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to Lower case","success")},children:" Convert to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){if(null!==n){var t=document.getElementById("Mybox");navigator.clipboard.writeText(t.value),e.showAlert("Text copied to clipboard!","success")}},children:" Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-3",onClick:function(){r(""),b=0,e.showAlert("Cleared Text","success")},children:" Clear Text"})]}),Object(o.jsxs)("div",{className:"container text-".concat("light"===e.mode?"dark":"light"," my-3"),children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[" ",b," ",Object(o.jsx)("b",{children:"words"})," and ",n.length," ",Object(o.jsx)("b",{children:"characters"})]}),Object(o.jsxs)("p",{children:[" ",.008*b," ",Object(o.jsx)("b",{children:"minutes"})," to read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Some Text into the box to preview it here"})]})]})}var h=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," : ",e.alert.msg]})};var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),b=s[0],j=s[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextFanda",aboutText:"About Us",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#282828",u("Dark mode has enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light mode has enabled","success"))}}),Object(o.jsx)(h,{alert:b}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{heading:"Enter the text to analyze below",showAlert:u,mode:a})})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.44faec53.chunk.js.map