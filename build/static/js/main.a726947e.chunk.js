(this.webpackJsonpbankingsystem=this.webpackJsonpbankingsystem||[]).push([[0],{35:function(e,t,a){},55:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(28),r=a.n(c),o=(a(35),a(8)),l=a(9),i=a(11),b=a(10),m=a(2),j=a(12),d=a.n(j),h=a(0),u=function(e){Object(i.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={customers:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://127.0.0.1:5000/").then((function(t){console.log(t),t.data.status&&e.setState({customers:t.data.customers})})).catch((function(e){console.log("Error!\n"+e)}))}},{key:"render",value:function(){var e=this.state.customers;return console.log(e),Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/",children:"Banking System"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/history",children:"History"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/transfer",children:"Transactions"})})]})})]})}),Object(h.jsxs)("div",{className:"container py-3 mb-5",children:[Object(h.jsx)("h1",{className:"m-3",children:"Customers:"}),e.length>0?e.map((function(e){return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{className:"mycard rounded mx-2 my-3 py-3 px-4",children:[Object(h.jsx)("h2",{children:e.email}),Object(h.jsxs)("h5",{children:["Name: ",e.name]}),"Account no.: ",e.account_no," \xa0 | \xa0 Balance: Rs.",e.balance]})},e.account_no)})):Object(h.jsx)("div",{className:"mycard rounded text-center m-2 p-4",style:{fontSize:"22px"},children:Object(h.jsx)("h3",{children:"There is nothing to show right now..."})})]})]})}}]),a}(n.PureComponent),v=function(e){Object(i.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={history:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://127.0.0.1:5000/history").then((function(t){console.log(t),t.data.status&&e.setState({history:t.data.history})})).catch((function(e){console.log("Error!\n"+e)}))}},{key:"render",value:function(){var e=this.state.history;return Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/",children:"Banking System"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active",href:"/history",children:"History"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/transfer",children:"Transactions"})})]})})]})}),Object(h.jsxs)("div",{className:"container py-3 mb-5",children:[Object(h.jsx)("h1",{className:"m-3",children:"History:"}),e.length>0?e.map((function(e){var t=new Date(e.date);return Object(h.jsx)(s.a.Fragment,{children:Object(h.jsxs)("div",{className:"mycard rounded m-2 py-3 px-4",style:{fontSize:"22px"},children:[Object(h.jsx)("h1",{children:e.name}),Object(h.jsx)("span",{children:"From:"})," ",e.fromName," ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"To:"})," ",e.toName," ",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"Amount:"})," Rs.",e.amount,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"Transaction Date:"})," ",t.toUTCString()]})},e._id)})):Object(h.jsx)("div",{className:"mycard rounded text-center m-2 p-4",style:{fontSize:"22px"},children:Object(h.jsx)("h3",{children:"There is nothing to show right now..."})})]})]})}}]),a}(n.PureComponent),x=a(13),O=function(e){Object(i.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={amount:1,customers:[],sender:null,receiver:null,maxSender:99999},n.onSubmit=n.onSubmit.bind(Object(x.a)(n)),n.onAmountChange=n.onAmountChange.bind(Object(x.a)(n)),n.onFromSelectChange=n.onFromSelectChange.bind(Object(x.a)(n)),n.onToSelectChange=n.onToSelectChange.bind(Object(x.a)(n)),n}return Object(l.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a={from:t.sender,to:t.receiver,amount:t.amount};d.a.post("http://localhost:5000/transfer",a).then((function(e){e.data.status?(alert(e.data.message),window.location.reload()):alert("Something went wrong!\n"+e.data.message)})).catch((function(e){alert("Something went wrong!\nTry again later..."),console.log("Error!\n"+e)}))}},{key:"onAmountChange",value:function(e){this.setState({amount:e.target.value})}},{key:"onFromSelectChange",value:function(e){var t=this;this.setState({sender:Number(e.target.value.split(";")[0]),maxSender:Number(e.target.value.split(";")[1])},(function(){t.state.amount>t.state.maxSender&&t.setState({amount:Number(t.state.maxSender)})}))}},{key:"onToSelectChange",value:function(e){this.setState({receiver:Number(e.target.value)})}},{key:"componentDidMount",value:function(){var e=this;d.a.get("http://localhost:5000/").then((function(t){t.data.status?e.setState({customers:t.data.customers}):alert("Something went wrong!")})).catch((function(e){console.log("Error!\n"+e)}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"/",children:"Banking System"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/history",children:"History"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active",href:"/transfer",children:"Transactions"})})]})})]})}),Object(h.jsx)("div",{className:"container mt-5 mb-4",children:Object(h.jsxs)("div",{className:"form text-center p-3 rounded",style:{border:"1px solid black"},children:[Object(h.jsx)("h2",{className:"mt-3",children:"Transaction Form"}),Object(h.jsxs)("form",{className:"text-start p-4",id:"form1",onSubmit:this.onSubmit,children:[Object(h.jsxs)("div",{className:"form-group my-3",children:[Object(h.jsx)("label",{htmlFor:"fromSelect",className:"form-label",style:{fontWeight:"bold"},children:"From:"}),Object(h.jsxs)("select",{id:"fromSelect",className:"form-control",onChange:this.onFromSelectChange,children:[Object(h.jsx)("option",{value:"",hidden:!0,children:"select sender"}),this.state.customers.map((function(t){return Number(e.state.receiver)!==t.account_no?Object(h.jsxs)("option",{value:t.account_no+";"+t.balance,children:[t.email," (Rs.",t.balance,")"]},t._id):Object(h.jsx)(h.Fragment,{})}))]})]}),Object(h.jsxs)("div",{className:"form-group my-3",children:[Object(h.jsx)("label",{htmlFor:"toSelect",className:"form-label",style:{fontWeight:"bold"},children:"To:"}),Object(h.jsxs)("select",{id:"toSelect",className:"form-control",onChange:this.onToSelectChange,children:[Object(h.jsx)("option",{value:"",hidden:!0,children:"select receiver"}),this.state.customers.map((function(t){return Number(e.state.sender)!==t.account_no?Object(h.jsxs)("option",{value:t.account_no,children:[t.email," (Rs.",t.balance,")"]},t._id):Object(h.jsx)(h.Fragment,{})}))]})]}),Object(h.jsxs)("div",{className:"form-group",style:{marginTop:"30px"},children:[Object(h.jsx)("label",{htmlFor:"amount",className:"form-label",style:{fontWeight:"bold",marginRight:"15px"},children:"Amount:"}),Object(h.jsx)("input",{type:"number",className:"form-control",id:"amount",min:"1",max:this.state.maxSender,value:this.state.amount,onChange:this.onAmountChange})]})]}),Object(h.jsx)("input",{type:"submit",form:"form1",className:"btn btn-success mb-3",value:"Transfer"})]})})]})}}]),a}(n.PureComponent),g=(a(55),function(e){Object(i.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(u,{})}}),Object(h.jsx)(m.a,{exact:!0,path:"/history",component:function(){return Object(h.jsx)(v,{})}}),Object(h.jsx)(m.a,{exact:!0,path:"/transfer",component:function(){return Object(h.jsx)(O,{})}})]})})}}]),a}(n.PureComponent)),p=a(30),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(p.a,{children:Object(h.jsx)(g,{})}),document.getElementById("root")),f()}},[[64,1,2]]]);
//# sourceMappingURL=main.a726947e.chunk.js.map