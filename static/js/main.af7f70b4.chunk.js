(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={Stat__cont:"Statistics_Stat__cont__2yYad",Stat__value:"Statistics_Stat__value__2MvY9"}},,,,,,,function(e,t,a){e.exports={Feedback:"App_Feedback__32Tf8"}},function(e,t,a){e.exports={Feedback__title:"Section_Feedback__title__1pgEB"}},function(e,t,a){e.exports={Feedback__button:"FeedbackOptions_Feedback__button__JSmD4"}},function(e,t,a){e.exports={Stat__message:"Notification_Stat__message__2xhDE"}},,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(4),i=a.n(s),o=(a(18),a(5)),r=a(6),l=a(7),b=a(13),d=a(12),u=a(8),_=a.n(u),j=a(9),v=a.n(j),h=a(0),f=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:v.a.Feedback__title,children:t}),a]})},k=a(10),O=a.n(k);var x=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return Object(h.jsx)("button",{type:"button",className:O.a.Feedback__button,onClick:function(){return a(e)},children:e},e)}))},p=a(1),g=a.n(p),m=a(11),S=a.n(m);var F=function(e){var t=e.message;return Object(h.jsx)("p",{className:S.a.Stat__message,children:t})};var N=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage,i=t+a+c;return Object(h.jsx)("div",{children:0!==i?Object(h.jsxs)("ul",{className:g.a.Stat__cont,children:[Object(h.jsxs)("li",{className:g.a.Stat__value,children:["Good: ",t]}),Object(h.jsxs)("li",{className:g.a.Stat__value,children:["Neutral: ",a]}),Object(h.jsxs)("li",{className:g.a.Stat__value,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:g.a.Stat__value,children:["Total: ",n(i)]}),Object(h.jsxs)("li",{className:g.a.Stat__value,children:["Positive feedback: ",s(i),"%"]})]}):Object(h.jsx)(F,{message:"No feedback given"})})},P=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(e){return e},e.countPositiveFeedbackPercentage=function(t){return Math.round(100*e.state.good/t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)("div",{className:_.a.Feedback,children:[Object(h.jsx)(f,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(h.jsx)(f,{title:"Statistics",children:Object(h.jsx)(N,{good:t,neutral:a,bad:c,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage})})]})}}]),a}(n.a.Component),y=P;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.af7f70b4.chunk.js.map