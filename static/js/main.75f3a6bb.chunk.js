(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={feedback:"Statistics_feedback__2-2c_",feedbackValue:"Statistics_feedbackValue__uypVe",total:"Statistics_total__2pGqP",positiveFeedback:"Statistics_positiveFeedback__2nbrn"}},,,,function(e,t,a){e.exports={wrap:"FeedbackOptions_wrap__3Obh3",btn:"FeedbackOptions_btn__1rp9P"}},function(e,t,a){e.exports={title:"App_title__1YcTA",image:"App_image__2InBV"}},,,,,function(e,t,a){},function(e,t,a){e.exports={container:"Container_container__2Boit"}},,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(7),i=a.n(s),r=(a(19),a(8)),o=a(9),l=a(10),d=a(14),b=a(13),u=a.p+"static/media/feedback.d34b5374.jpeg",j=a(1),p=a.n(j),h=a(0),f=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.percentage;return Object(h.jsxs)("div",{className:p.a.statistics,children:[Object(h.jsxs)("p",{className:p.a.feedback,children:["Good: ",Object(h.jsx)("span",{className:p.a.feedbackValue,children:t})]}),Object(h.jsxs)("p",{className:p.a.feedback,children:["Neutral: ",Object(h.jsx)("span",{className:p.a.feedbackValue,children:a})]}),Object(h.jsxs)("p",{className:p.a.feedback,children:["Bad: ",Object(h.jsx)("span",{className:p.a.feedbackValue,children:c})]}),Object(h.jsxs)("p",{className:p.a.total,children:["Total: ",Object(h.jsx)("span",{className:p.a.feedbackValue,children:n})]}),Object(h.jsxs)("p",{className:p.a.positiveFeedback,children:["Positive feedback:"," ",Object(h.jsxs)("span",{className:p.a.feedbackValuePercentage,children:[s," %"]})]})]})},k=a(5),O=a.n(k),x=a(3),m=a.n(x),g=function(e){var t=e.categories,a=e.onClickBtn;return Object(h.jsx)("div",{className:O.a.wrap,children:t.map((function(e){return Object(h.jsx)("button",{className:O.a.btn,type:"button",onClick:function(){return a(e)},children:e},e)}))})};g.propType={categories:m.a.array.isRequired,onClickBtn:m.a.func.isRequired};var _=g,v=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),a]})},N=a(11),F=a.n(N),y=function(e){var t=e.message;return Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:F.a.message,children:t})})};y.propType={message:m.a.string.isRequired};var B=y,P=a(6),T=a.n(P),V=a(12),w=a.n(V),C=function(e){var t=e.children;return Object(h.jsx)("div",{className:w.a.container,children:t})},S=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onClickBtn=function(t){e.setState(Object(r.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=e.state.good;return t?Math.ceil(a/t*100):0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)(C,{children:[Object(h.jsx)("h1",{className:T.a.title,children:"Please Leave Your"}),Object(h.jsx)("img",{className:T.a.image,src:u,alt:"Feedback"}),Object(h.jsx)(_,{categories:["good","neutral","bad"],onClickBtn:this.onClickBtn}),Object(h.jsx)(v,{title:"Statistics",children:this.countTotalFeedback()?Object(h.jsx)(f,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(B,{message:"There is no feedback"})})]})}}]),a}(c.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.75f3a6bb.chunk.js.map