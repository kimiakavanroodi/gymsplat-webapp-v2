(this.webpackJsonpgymsplat=this.webpackJsonpgymsplat||[]).push([[4],{471:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a(15),r=a(17),c=a(16),o=a(0),s=a.n(o),i=a(100),m=a(51),u=a(53),d=a.n(u),h=a(10),E=a.n(h),p=a(37),b=(a(18),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={done:void 0,todos:[],done:!1},l.cancel=null,l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(t){return e.setState({done:!0})}))}),1200)}},{key:"render",value:function(){return this.state.done?s.a.createElement(m.a,{title:"",breadcrumbs:[{name:"Feedback",active:!0}],className:"Activity"},this.state.done?s.a.createElement(E.a,null,s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("h1",{style:{fontFamily:"-apple-system, BlinkMacSystemFont",fontSize:"35px",fontWeight:"bold",color:"#0A0D18"}}," Feedback "),s.a.createElement("br",null))):s.a.createElement(d.a,{type:"bars",color:"#6B7CF7"}),s.a.createElement("div",{class:"tableFixHead"},s.a.createElement(i.a,{striped:!0,bordered:!0,hover:!0,style:{borderRadius:"50px"}},s.a.createElement("tr",null,s.a.createElement("th",null," # "),s.a.createElement("th",null," Date "),s.a.createElement("th",null," Time "),s.a.createElement("th",null," Name "),s.a.createElement("th",null," Location"),s.a.createElement("th",null," Comment ")),s.a.createElement("tbody",{style:{fontFamily:"-apple-system, BlinkMacSystemFont"}},this.state.todos&&this.state.todos.map((function(e){var t=e._id.toString().substring(0,8),a=new Date(1e3*parseInt(t,16)).toDateString();return s.a.createElement("tr",null,s.a.createElement("th",null,"  ",a,"  "),s.a.createElement("th",null,"  ",e.email,"  "),s.a.createElement("th",null,e.firstName),s.a.createElement("th",null,e.lastName),s.a.createElement("th",null,e.role),s.a.createElement("th",null,e.password))})))))):s.a.createElement("div",null,"Loading")}}]),a}(p.default));t.default=b}}]);
//# sourceMappingURL=4.1d23c327.chunk.js.map