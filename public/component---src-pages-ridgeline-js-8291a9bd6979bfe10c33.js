(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"2Bqf":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("AK/e");var n=a("Wbzz"),r=a("q1tI"),l=a.n(r),i=a("NDdm"),c=a("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var t=e.chartType,a=e.caption,r=e.link,o=c.includes(t);return l.a.createElement(l.a.Fragment,null,o?l.a.createElement(l.a.Fragment,null,l.a.createElement(n.a,{to:r},l.a.createElement(i.a,{chartType:t})),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},a)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sectionLogoContainer"},l.a.createElement(n.a,{to:r},l.a.createElement(i.a,{chartType:t}),l.a.createElement("div",{className:"sectionLogoOverlay"},l.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},a)))}},"3Z9Z":function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),o=a.n(c),s=a("vUet"),u=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.noGutters,m=e.as,d=void 0===m?"div":m,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(s.a)(a,"row"),h=f+"-cols",v=[];return u.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&v.push(""+h+n+"-"+t)})),o.a.createElement(d,Object(n.a)({ref:t},p,{className:i.a.apply(void 0,[l,f,c&&"no-gutters"].concat(v))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},"9d5C":function(e,t,a){},"AK/e":function(e,t,a){},AON1:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a("q1tI"),r=a.n(n),l=a("4/Vk"),i=a("7oih"),c=a("7vrA"),o=a("6+GL"),s=a("pJaR"),u=a("Wbzz"),m=a("Hrqu"),d=a("cWnB"),p=a("gMBH");function f(){return r.a.createElement(i.a,{title:"Ridgeline"},r.a.createElement(l.a,{title:"Ridgeline chart",description:"<p>A <a href='https://www.data-to-viz.com/caveat/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>"}),r.a.createElement(c.a,null,r.a.createElement("h2",{id:"Quick"},r.a.createElement(m.a,null),"Interactive ridgeline chart with ",r.a.createElement("code",null,"plotly")),r.a.createElement("p",null,"Plotly is a python library that makes the link with Javascript to build interactive charts that you can display in a browser."),r.a.createElement("p",null,"The following example is a ridgeline chart made with this library"),r.a.createElement("div",{className:"mx-auto"},r.a.createElement("iframe",{src:"/interactiveCharts/ridgeline-graph-plotly.html",title:"ridgeline chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),r.a.createElement(u.a,{to:"/ridgeline-graph-plotly"},r.a.createElement(d.a,{size:"sm"},"See code"))),r.a.createElement(p.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(c.a,null,r.a.createElement(s.a,{chartFamily:"distribution"}))),r.a.createElement(p.a,null),r.a.createElement(c.a,null,r.a.createElement(o.a,null)),r.a.createElement(p.a,null))}},JI6e:function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),o=a.n(c),s=a("vUet"),u=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,m=void 0===c?"div":c,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(a,"col"),f=[],h=[];return u.forEach((function(e){var t,a,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var i="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+i:""+p+i+"-"+t),null!=n&&h.push("order"+i+"-"+n),null!=a&&h.push("offset"+i+"-"+a)})),f.length||f.push(p),o.a.createElement(m,Object(n.a)({},d,{ref:t,className:i.a.apply(void 0,[l].concat(f,h))}))}));m.displayName="Col",t.a=m},gMBH:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n);function l(){return r.a.createElement("div",{className:"spacing",style:{height:140}})}},pJaR:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("9d5C");var n=a("q1tI"),r=a.n(n),l=a("3Z9Z"),i=a("JI6e"),c=a("2Bqf"),o=a("qXiB"),s=a("jhdv"),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){var t=e.chartFamily,a=o.a.filter((function(e){return e.family===t})).map((function(e,t){var a=Object(s.a)(e.pythonURL);return r.a.createElement(i.a,{key:t,xs:4,md:2},r.a.createElement(c.a,{link:a,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==u?void 0:u[t]),r.a.createElement(l.a,null,a))}}}]);
//# sourceMappingURL=component---src-pages-ridgeline-js-8291a9bd6979bfe10c33.js.map