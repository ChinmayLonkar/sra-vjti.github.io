_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"9pnw":function(e,t,n){e.exports={aboutUs:"HomeAboutUs_aboutUs__1G9Ya",aboutUsMain:"HomeAboutUs_aboutUsMain__c3dQ9",aboutUsTeam:"HomeAboutUs_aboutUsTeam__3MrKU",aboutUsAlumni:"HomeAboutUs_aboutUsAlumni__wEvQY",ourProjects:"HomeAboutUs_ourProjects__2u4FV"}},R2UV:function(e,t,n){e.exports={notifs:"HomeNotifs_notifs__3FyiZ",notifsMain:"HomeNotifs_notifsMain__3ofOW",notif:"HomeNotifs_notif__29-eP"}},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("mC2l"),c=n("KSab"),r=n("9pnw"),s=n.n(r),o=n("YFqc"),i=n.n(o),l=n("nKUr"),u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:s.a.aboutUs,children:[Object(l.jsxs)("div",{className:s.a.aboutUsMain,children:[Object(l.jsx)("h1",{children:"About Us"}),Object(l.jsx)("p",{children:c.d}),Object(l.jsx)("h1",{children:"About VJTI"}),Object(l.jsx)("p",{children:c.e})]}),Object(l.jsxs)("div",{className:s.a.aboutUsTeam,children:[Object(l.jsx)("p",{children:c.c}),Object(l.jsx)("img",{src:"/static/images/".concat(c.b.newgroup),alt:"SRA Team group photo"})]}),Object(l.jsxs)("div",{className:s.a.aboutUsAlumni,children:[Object(l.jsx)("p",{children:c.a}),Object(l.jsx)("img",{src:"/static/images/".concat(c.b.oldGroup),alt:"SRA Team group photo"})]})]}),Object(l.jsxs)("div",{className:s.a.ourProjects,children:[Object(l.jsx)("h1",{children:"Our Projects"}),Object(l.jsx)(i.a,{href:"/projects/flagship",children:Object(l.jsxs)("button",{children:["Flagship Projects \xa0",Object(l.jsx)("span",{children:"\u2192"})]})}),Object(l.jsx)(i.a,{href:"/projects/eklavya",children:Object(l.jsxs)("button",{children:["Eklavya Projects \xa0",Object(l.jsx)("span",{children:"\u2192"})]})})]})]})},d=n("ouJ7"),j=n.n(d),h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:j.a.reach,children:[Object(l.jsx)("h1",{children:"Our Reach"}),Object(l.jsx)("div",{className:j.a.reachGroup,children:c.i.map((function(e,t){return Object(l.jsx)("img",{src:"/static/images/reach/".concat(e),alt:"",className:j.a.reachImg},"alumni_reach_".concat(t))}))})]})})},b=["espressif.png","texas.png","PCB_Power.jpeg"],f=n("nQJE"),p=n.n(f),m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:p.a.reach,children:[Object(l.jsx)("h1",{children:"Our Sponsors"}),Object(l.jsx)("div",{className:p.a.reachGroup,children:b.map((function(e,t){return Object(l.jsx)("img",{src:"/static/images/sponsors/".concat(e),alt:"",className:p.a.reachImg},"alumni_reach_".concat(t))}))})]})})},_=n("R2UV"),g=n.n(_),O=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:g.a.notifs,id:"notifs",children:[Object(l.jsx)("h1",{children:"Notifications"}),Object(l.jsx)("div",{className:g.a.notifsMain,children:c.o.map((function(e,t){return Object(l.jsx)("div",{className:g.a.notif,children:e},"notification_".concat(t))}))})]})})};t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a.a,{imgName:"landing-hero.jpg",title:Object(l.jsxs)(l.Fragment,{children:["Society of",Object(l.jsx)("br",{}),"Robotics and",Object(l.jsx)("br",{}),"Automation, VJTI"]}),subtitleList:c.m,isHome:!0}),Object(l.jsx)(u,{}),Object(l.jsx)(m,{}),Object(l.jsx)(h,{}),Object(l.jsx)(O,{})]})}},"Tu/p":function(e,t,n){e.exports={hero:"Hero_hero__1fVUa",heroHead:"Hero_heroHead__12Yiw",heroSub:"Hero_heroSub__3-rrY",notif:"Hero_notif__yKDqh",wobble:"Hero_wobble__DlBEw","scroll-indicator":"Hero_scroll-indicator__1OdvK",bounce:"Hero_bounce__22czQ",is:"Hero_is__2c_Nk",caption:"Hero_caption__1RLmY",captionHead:"Hero_captionHead__bPVFr",captionSub:"Hero_captionSub__-hd2G",scrollIndicator:"Hero_scrollIndicator__zJATM"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var r,s=c(n("q1tI")),o=n("elyg"),i=n("nOHt"),l=new Map,u=window.IntersectionObserver,d={};var j=function(e,t){var n=r||(u?r=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,a){(0,o.isLocalURL)(t)&&(e.prefetch(t,n,a).catch((function(e){0})),d[t+"%"+n]=!0)}var b=function(e){var t=!1!==e.prefetch,n=s.default.useState(),c=a(n,2),r=c[0],l=c[1],b=(0,i.useRouter)(),f=b&&b.pathname||"/",p=s.default.useMemo((function(){var t=(0,o.resolveHref)(f,e.href,!0),n=a(t,2),c=n[0],r=n[1];return{href:c,as:e.as?(0,o.resolveHref)(f,e.as):r||c}}),[f,e.href,e.as]),m=p.href,_=p.as;s.default.useEffect((function(){if(t&&u&&r&&r.tagName&&(0,o.isLocalURL)(m)&&!d[m+"%"+_])return j(r,(function(){h(b,m,_)}))}),[t,r,m,_,b]);var g=e.children,O=e.replace,x=e.shallow,v=e.scroll;"string"===typeof g&&(g=s.default.createElement("a",null,g));var N=s.Children.only(g),H={ref:function(e){e&&l(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,a,c,r,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),t[c?"replace":"push"](n,a,{shallow:r}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,m,_,O,x,v)}};return t&&(H.onMouseEnter=function(e){(0,o.isLocalURL)(m)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),h(b,m,_,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(H.href=(0,o.addBasePath)((0,o.addLocale)(_,b&&b.locale,b&&b.defaultLocale))),s.default.cloneElement(N,H)};t.default=b},mC2l:function(e,t,n){"use strict";var a=n("Tu/p"),c=n.n(a),r=n("IP2g"),s=n("wHSu"),o=n("nKUr");t.a=function(e){var t=e.imgName,n=e.title,a=e.subtitleList,i=e.isHome,l=e.backgroundPosition,u=void 0===l?"center":l;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(\n                            to bottom,\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5),\n                            rgba(0, 0, 0, 0.5)), url("/static/images/hero/'.concat(t,'")'),backgroundPosition:u},className:c.a.hero,children:[Object(o.jsx)("div",{className:c.a.heroHead,children:n}),Object(o.jsx)("div",{className:c.a.heroSub,children:a.map((function(e,t){return a.length!==t+1?Object(o.jsxs)("span",{children:[e,"\xa0\xa0\u2022\xa0\xa0"]},"hero_".concat(t)):Object(o.jsx)("span",{children:e},"hero_".concat(t))}))}),Object(o.jsx)("a",{href:"#is",children:Object(o.jsx)("div",{className:c.a.scrollIndicator})}),i&&Object(o.jsx)("a",{href:"#notifs",className:c.a.notif,children:Object(o.jsx)(r.a,{icon:s.a})})]}),i&&Object(o.jsxs)("div",{className:c.a.is,id:"is",children:[Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/ideate-final2.jpg")'},className:c.a.caption,children:[Object(o.jsx)("div",{className:c.a.captionHead,children:"Ideate"}),Object(o.jsx)("div",{className:c.a.captionSub,children:"Changing the world, one solution at a time."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000098, #00000098),\n\t\turl("/static/images/innovate-final2.jpg")'},className:c.a.caption,children:[Object(o.jsx)("div",{className:c.a.captionHead,children:"Innovate"}),Object(o.jsx)("div",{className:c.a.captionSub,children:"Creativity is thinking up new things. Innovation is doing new things."})]}),Object(o.jsxs)("div",{style:{backgroundImage:'linear-gradient(#00000081, #00000081),\n\t\turl("/static/images/inspire-final2.jpg")'},className:c.a.caption,children:[Object(o.jsx)("div",{className:c.a.captionHead,children:"Inspire"}),Object(o.jsx)("div",{className:c.a.captionSub,children:"Don't inspire by being perfect, inspire by embracing your imperfections."})]})]})]})}},nQJE:function(e,t,n){e.exports={reach:"OurSponsors_reach__2a40r",reachGroup:"OurSponsors_reachGroup__cXydu"}},ouJ7:function(e,t,n){e.exports={reach:"HomeReach_reach__gfrvj",reachGroup:"HomeReach_reachGroup__DAikZ"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,5,2,4,3]]]);