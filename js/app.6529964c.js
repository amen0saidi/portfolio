(function(){"use strict";var e={5614:function(e,t,o){var a=o(5130),n=o(6768);const r={id:"app"},i={class:"header"};function c(e,t,o,a,c,s){const l=(0,n.g2)("HeroSection"),u=(0,n.g2)("AboutSection"),d=(0,n.g2)("ProjectsSection"),v=(0,n.g2)("SkillsSection"),f=(0,n.g2)("ContactSection");return(0,n.uX)(),(0,n.CE)("div",r,[(0,n.Lk)("header",i,[(0,n.Lk)("nav",null,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#about-section",onClick:t[0]||(t[0]=e=>s.scrollToSection("#about-section"))},"About")]),(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#projects-section",onClick:t[1]||(t[1]=e=>s.scrollToSection("#projects-section"))},"Projects")]),(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#skills-section",onClick:t[2]||(t[2]=e=>s.scrollToSection("#skills-section"))},"Skills")]),(0,n.Lk)("li",null,[(0,n.Lk)("a",{href:"#contact-section",onClick:t[3]||(t[3]=e=>s.scrollToSection("#contact-section"))},"Contact")])])])]),(0,n.bF)(l,{id:"hero-section",class:"section-card hero-section"}),(0,n.bF)(u,{id:"about-section",class:"section-card about-section"}),(0,n.bF)(d,{id:"projects-section",class:"section-card projects-section"}),(0,n.bF)(v,{id:"skills-section",class:"section-card skills-section"}),(0,n.bF)(f,{id:"contact-section",class:"section-card contact-section"})])}const s={class:"hero-section",ref:"heroSection"},l={ref:"heroTitle"},u={ref:"heroDescription"};function d(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("h1",l,"Welcome to My Portfolio",512),(0,n.Lk)("p",u," Dive into a world of innovation and creativity. Discover my journey through cutting-edge projects, a diverse set of skills, and my passion for technology. Let's build the future together. ",512)],512)}var v=o(4968),f={name:"HeroSection",mounted(){v.os.from(this.$refs.heroTitle,{duration:1.5,opacity:0,y:-100,ease:"power4.out"}),v.os.from(this.$refs.heroDescription,{duration:1.5,opacity:0,y:100,delay:.5,ease:"power4.out"}),v.os.to(this.$refs.heroSection,{duration:4,backgroundPosition:"200% 0%",ease:"linear",repeat:-1})}},p=o(1241);const g=(0,p.A)(f,[["render",d],["__scopeId","data-v-fb08d490"]]);var h=g;const b={class:"about-section",ref:"aboutSection"},m={class:"container"},k={ref:"aboutTitle"},y={ref:"aboutDescription"};function j(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("section",b,[(0,n.Lk)("div",m,[(0,n.Lk)("h2",k,"About Me",512),(0,n.Lk)("p",y," I am a passionate front-end and back-end developer skilled in various technologies, including Vue.js, Django, and Flutter. I strive to create efficient, user-friendly, and scalable web applications. ",512)])],512)}var w=o(144),S={name:"AboutSection",setup(){const e=(0,w.KR)(null),t=(0,w.KR)(null),o=(0,w.KR)(null);return(0,n.sV)((()=>{v.os.from(t.value,{duration:1.5,opacity:0,y:-50,ease:"power4.out"}),v.os.from(o.value,{duration:1.5,opacity:0,y:50,delay:.5,ease:"power4.out"})})),{aboutSection:e,aboutTitle:t,aboutDescription:o}}};const L=(0,p.A)(S,[["render",j],["__scopeId","data-v-2fed08bb"]]);var _=L;const T={class:"projects-section",ref:"projectsSection"},C={class:"container"},E={ref:"projectsTitle"};function A(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("section",T,[(0,n.Lk)("div",C,[(0,n.Lk)("h2",E,"Professional Experience",512),t[0]||(t[0]=(0,n.Fv)('<div class="projects-list" data-v-ed6ecb24><div class="project-card" data-v-ed6ecb24><h3 data-v-ed6ecb24>Tunisie Telecom</h3><p data-v-ed6ecb24><strong data-v-ed6ecb24>Intern (Introduction)</strong><br data-v-ed6ecb24> 15-07-2022 to 15-08-2022</p><ul data-v-ed6ecb24><li data-v-ed6ecb24>Learning the work environment and teamwork.</li><li data-v-ed6ecb24>Introduction to cloud computing concepts.</li><li data-v-ed6ecb24>Understanding the operation of the central server.</li></ul></div><div class="project-card" data-v-ed6ecb24><h3 data-v-ed6ecb24>Rayen Soft</h3><p data-v-ed6ecb24><strong data-v-ed6ecb24>Intern (Advanced Training)</strong><br data-v-ed6ecb24> 25-07-2023 to 25-08-2023</p><ul data-v-ed6ecb24><li data-v-ed6ecb24>Backend development with Django and frontend with Vue.js for an e-commerce website.</li><li data-v-ed6ecb24>Managing the backlog and following Scrum methodologies.</li></ul></div><div class="project-card" data-v-ed6ecb24><h3 data-v-ed6ecb24>Rayen Soft</h3><p data-v-ed6ecb24><strong data-v-ed6ecb24>Intern (Final Year Project)</strong><br data-v-ed6ecb24> 15-02-2024 to 15-03-2024</p><ul data-v-ed6ecb24><li data-v-ed6ecb24>Design and development of a social assistance web application.</li><li data-v-ed6ecb24>User management, authentication, and registration.</li><li data-v-ed6ecb24>Category management, help requests, service offers, and comments.</li><li data-v-ed6ecb24>Event announcements.</li><li data-v-ed6ecb24>Using Jira for task tracking and Figma for design.</li></ul></div></div>',1))])],512)}var F={name:"ProjectsSection",setup(){const e=(0,w.KR)(null),t=(0,w.KR)(null);return(0,n.sV)((()=>{v.os.from(t.value,{duration:1.5,opacity:0,y:-50,ease:"power4.out"}),v.os.from(".project-card",{duration:1.5,opacity:0,y:50,stagger:.3,ease:"power4.out"})})),{projectsSection:e,projectsTitle:t}}};const P=(0,p.A)(F,[["render",A],["__scopeId","data-v-ed6ecb24"]]);var I=P;const D={class:"skills-section",ref:"skillsSection"},O={class:"container"},R={ref:"skillsTitle"};function x(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("section",D,[(0,n.Lk)("div",O,[(0,n.Lk)("h2",R,"Skills",512),t[0]||(t[0]=(0,n.Fv)('<ul class="skills-list" data-v-54f36ff3><li class="skill-item" data-v-54f36ff3><strong data-v-54f36ff3>Programming Languages:</strong> Python, JavaScript, Java, C++, Dart </li><li class="skill-item" data-v-54f36ff3><strong data-v-54f36ff3>Frameworks and Libraries:</strong> Django, Django REST framework, Vue.js, Vuetify, Flutter </li><li class="skill-item" data-v-54f36ff3><strong data-v-54f36ff3>Tools:</strong> Postman, Jira, Figma, Android Studio </li><li class="skill-item" data-v-54f36ff3><strong data-v-54f36ff3>Databases:</strong> MySQL, PostgreSQL </li><li class="skill-item" data-v-54f36ff3><strong data-v-54f36ff3>Languages:</strong> French (good), English (excellent), Arabic (native) </li></ul>',1))])],512)}var V={name:"SkillsSection",setup(){const e=(0,w.KR)(null),t=(0,w.KR)(null);return(0,n.sV)((()=>{v.os.from(t.value,{duration:1.5,opacity:0,y:-50,ease:"power4.out"}),v.os.from(".skill-item",{duration:1.5,opacity:0,y:50,stagger:.3,ease:"power4.out"})})),{skillsSection:e,skillsTitle:t}}};const K=(0,p.A)(V,[["render",x],["__scopeId","data-v-54f36ff3"]]);var W=K;const X={class:"contact-section",ref:"contactSection"},H={class:"container"},M={ref:"contactTitle"};function J(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("section",X,[(0,n.Lk)("div",H,[(0,n.Lk)("h2",M,"Contact",512),t[0]||(t[0]=(0,n.Lk)("p",null,"Feel free to reach out via email or through my LinkedIn profile.",-1)),t[1]||(t[1]=(0,n.Lk)("div",{class:"contact-links"},[(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,"Email:"),(0,n.Lk)("a",{href:"mailto:amen66saidi@gmail.com"},"amen66saidi@gmail.com")]),(0,n.Lk)("p",null,[(0,n.Lk)("strong",null,"LinkedIn:"),(0,n.Lk)("a",{href:"https://linkedin.com/in/amen-allah-saidi-4b68a8313",target:"_blank"},"linkedin.com/in/amen-allah-saidi-4b68a8313")])],-1))])],512)}var N={name:"ContactSection",setup(){const e=(0,w.KR)(null),t=(0,w.KR)(null);return(0,n.sV)((()=>{v.os.from(t.value,{duration:1.5,opacity:0,y:-50,ease:"power4.out"}),v.os.from(".contact-links p",{duration:1.5,opacity:0,y:50,stagger:.3,ease:"power4.out"})})),{contactSection:e,contactTitle:t}}};const $=(0,p.A)(N,[["render",J],["__scopeId","data-v-c29ff56a"]]);var q=$,U=o(9898);v.os.registerPlugin(U.I);var Y={name:"App",components:{HeroSection:h,AboutSection:_,ProjectsSection:I,SkillsSection:W,ContactSection:q},mounted(){v.os.from(".section-card",{duration:1.5,opacity:0,y:50,stagger:.3,ease:"power4.out"}),window.addEventListener("wheel",this.handleWheel)},unmounted(){window.removeEventListener("wheel",this.handleWheel)},methods:{scrollToSection(e){const t=document.querySelector(e);t&&v.os.to(window,{scrollTo:{y:t.offsetTop-80,autoKill:!1},duration:1,ease:"power2.out"})},handleWheel(e){e.deltaY>0?v.os.to(window,{scrollTo:"+=200",duration:.5,ease:"power2.out"}):v.os.to(window,{scrollTo:"-=200",duration:.5,ease:"power2.out"})}}};const B=(0,p.A)(Y,[["render",c],["__scopeId","data-v-1ff01a02"]]);var Q=B,z=o(1387);const G={class:"home"};function Z(e,t,o,a,r,i){const c=(0,n.g2)("HelloWorld");return(0,n.uX)(),(0,n.CE)("div",G,[t[0]||(t[0]=(0,n.Lk)("img",{alt:"Vue logo",src:"../assets/logo.png"},null,-1)),(0,n.bF)(c,{msg:"Welcome to Your Vue.js App"})])}var ee=o(4232);const te={class:"hello"};function oe(e,t,o,a,r,i){return(0,n.uX)(),(0,n.CE)("div",te,[(0,n.Lk)("h1",null,(0,ee.v_)(o.msg),1),t[0]||(t[0]=(0,n.Fv)('<p data-v-64c5a022> For a guide and recipes on how to configure / customize this project,<br data-v-64c5a022> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-cli documentation</a>. </p><h3 data-v-64c5a022>Installed CLI Plugins</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-64c5a022>babel</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-64c5a022>router</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-64c5a022>vuex</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-64c5a022>eslint</a></li></ul><h3 data-v-64c5a022>Essential Links</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Core Docs</a></li><li data-v-64c5a022><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Forum</a></li><li data-v-64c5a022><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>Community Chat</a></li><li data-v-64c5a022><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-64c5a022>Twitter</a></li><li data-v-64c5a022><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>News</a></li></ul><h3 data-v-64c5a022>Ecosystem</h3><ul data-v-64c5a022><li data-v-64c5a022><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-router</a></li><li data-v-64c5a022><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vuex</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-64c5a022>vue-devtools</a></li><li data-v-64c5a022><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-64c5a022>vue-loader</a></li><li data-v-64c5a022><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-64c5a022>awesome-vue</a></li></ul>',7))])}var ae={name:"HelloWorld",props:{msg:String}};const ne=(0,p.A)(ae,[["render",oe],["__scopeId","data-v-64c5a022"]]);var re=ne,ie={name:"HomeView",components:{HelloWorld:re}};const ce=(0,p.A)(ie,[["render",Z]]);var se=ce;const le=[{path:"/",name:"home",component:se},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,603))}],ue=(0,z.aE)({history:(0,z.LA)("/portfolio/"),routes:le});var de=ue,ve=o(782),fe=(0,ve.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.Ef)(Q).use(fe).use(de).mount("#app")}},t={};function o(a){var n=t[a];if(void 0!==n)return n.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,a,n,r){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],n=e[u][1],r=e[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](a[s])}))?a.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[a,n,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,a){return o.f[a](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.001cc24d.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="portfolio:";o.l=function(a,n,r,i){if(e[a])e[a].push(n);else{var c,s;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+r),c.src=a),e[a]=[n];var v=function(t,o){c.onerror=c.onload=null,clearTimeout(f);var n=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=v.bind(null,c.onerror),c.onload=v.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/portfolio/"}(),function(){var e={524:0};o.f.j=function(t,a){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(o,a){n=e[t]=[o,a]}));a.push(n[2]=r);var i=o.p+o.u(t),c=new Error,s=function(a){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}};o.l(i,s,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,r,i=a[0],c=a[1],s=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(s)var u=s(o)}for(t&&t(a);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},a=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(5614)}));a=o.O(a)})();
//# sourceMappingURL=app.6529964c.js.map