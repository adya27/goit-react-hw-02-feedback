(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),s=n.n(c),i=n(4),o=n.n(i),d=(n(15),n.p,n(16),n(5)),r=n(6),l=n(9),h=n(8),u=n(2),b=n.n(u);var j=function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Statistics"}),Object(a.jsxs)("span",{className:b.a.Statistic,children:["Good: ",t.good]}),Object(a.jsxs)("span",{className:b.a.Statistic,children:["Neutral: ",t.neutral]}),Object(a.jsxs)("span",{className:b.a.Statistic,children:["Bad: ",t.bad]}),Object(a.jsxs)("span",{children:["Total: ",t.total]}),Object(a.jsxs)("h2",{children:["Positive feedback:",t.positiveFeedback,"%"]})]})},f=n(7),O=n.n(f);var x=function(t){return Object(a.jsx)("button",{className:O.a.FeedbackButton,type:"button",onClick:t.handle,children:t.btnName})};var v=function(t){var e=t.handleGood,n=t.handleNeutral,c=t.handleBad;return Object(a.jsxs)("section",{children:[Object(a.jsx)(x,{btnName:"Good",handle:e}),Object(a.jsx)(x,{btnName:"Neutral",handle:n}),Object(a.jsx)(x,{btnName:"Bad",handle:c})]})};var g=function(t){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:t.title}),t.children]})};var p=function(t){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:t.message})})},N=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleGood=function(e){t.setState((function(t){return{good:t.good+1}}))},t.handleNeutral=function(e){t.setState((function(t){return{neutral:t.neutral+1}}))},t.handleBad=function(e){t.setState((function(t){return{bad:t.bad+1}}))},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.good+this.state.neutral+this.state.bad,e=100*this.state.good/t%1===0?100*this.state.good/t:(100*this.state.good/t).toFixed(2);return Object(a.jsxs)(g,{title:"Please leave feedback",children:[Object(a.jsx)(v,{handleGood:this.handleGood,handleNeutral:this.handleNeutral,handleBad:this.handleBad}),t>0?Object(a.jsx)(j,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positiveFeedback:e}):Object(a.jsx)(p,{message:"No feedback given"})]})}}]),n}(c.Component);var k=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),m()},2:function(t,e,n){t.exports={Statistic:"Statistics_Statistic__3_Fy-"}},7:function(t,e,n){t.exports={FeedbackButton:"FeedbackButton_FeedbackButton__1nODv"}}},[[17,1,2]]]);
//# sourceMappingURL=main.66cade61.chunk.js.map