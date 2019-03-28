(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,a,t){e.exports=t(290)},148:function(e,a,t){},151:function(e,a,t){},266:function(e,a,t){},267:function(e,a,t){},272:function(e,a,t){},273:function(e,a,t){},290:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(30),l=t.n(c),o=(t(148),t(31)),i=t(32),s=t(35),m=t(33),u=t(36),d=t(301),h=t(85),p=t(303),E=t(304),f=t(37),b=t.n(f),g=t(56),v=t(297),x=t(300),C=(t(151),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).callMainPhotosAPI=Object(g.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/homepageimages",console.log(a),e.next=4,fetch(a);case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,200===t.status){e.next=10;break}throw Error(n.message);case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e)})),t.state={loading:!0,links:[{href:"/aboutme",photoUrl:"",title:"about me"},{href:"/experience",photoUrl:"",title:"experience"},{href:"/photos",photoUrl:"",title:"photos"}]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callMainPhotosAPI().then(function(a){var t={loading:!1},n=e.state.links.slice();n.forEach(function(e,t){e.photoUrl=a.resources[t].secure_url}),t.links=n,console.log(a.resources),e.setState(t)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Main-page"},r.a.createElement(v.a,{className:"Front-page-image"}),r.a.createElement("div",{className:"App-main-content"},r.a.createElement("div",{className:"Overlap-section"},this.state.loading?this.state.links.map(function(e,a){return r.a.createElement("a",{key:a,href:e},r.a.createElement(x.a,null,r.a.createElement(x.a.Image,{square:!0})))}):this.state.links.map(function(e,a){return r.a.createElement("a",{key:a,href:e.href},r.a.createElement(v.a,{className:"Overlap-image",style:{backgroundImage:"url("+e.photoUrl+")"}},r.a.createElement("div",{className:"Overlap-label"},e.title)))}))))}}]),a}(n.Component)),w=(t(266),function(){return r.a.createElement(v.a,{className:"About-me"},r.a.createElement("div",{className:"About-me-description"},"I am software developer who codes by day and bakes by night. I am passionate about being a woman in tech and helping others get involved! In my free time, I like to travel, explore new places and cusines."))}),k=t(299),y=t(302),N=t(296),I=(t(267),function(){return r.a.createElement("div",{className:"Experience"},r.a.createElement(k.a,{fluid:!0,className:"ui card Experience-mega-card"},r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Header,{className:"Experience-mega-card-header",as:"h2"},"Current Role")),r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Meta,{as:"h2",className:"Experience-subheader"},"CORE Technology Associate"),r.a.createElement(k.a.Description,{className:"Experience-subheader-desc"},"A two year rotational program comprised of three rotations across Comcast NBCUniversal")),r.a.createElement(k.a.Content,{className:"Experience-rotations"},r.a.createElement(k.a,{centered:!0,color:"olive",className:"Experience-child-card Experience-child-card-horizontal"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"Comcast VIPER")),r.a.createElement(k.a.Content,null,"I contribute to a microservice that packages VOD content using GoLang, Kubernetes and Docker. I initiated cross-team colloboration to implement 4k linear end-to-end. I participated in Labweek to create an asset management library, with a React front-end and GoLang backend."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"Jan 2019 - Present")),r.a.createElement(k.a,{centered:!0,color:"olive",className:"Experience-child-card Experience-child-card-horizontal"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"NBC Digital")),r.a.createElement(k.a.Content,null,"I integrated GraphQL backend with the front-end web client to improve load times by 30%. I added new data structures and implemented business logic on the backend in GraphQL and Algolia. I also implemented features and fixed bugs on React front-end site."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"July 2018 - Jan 2019")),r.a.createElement(k.a,{centered:!0,color:"olive",className:"Experience-child-card Experience-child-card-horizontal"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"Xfinity Stream Web")),r.a.createElement(k.a.Content,null,"I collaborated closely with UX, QA and other developers on the team to implement new features, for Comcast Xfinity stream web app using Polymer framework. I unified error logging across the app to standardize error codes across apps in order to identify and escalate issues effectively."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"July 2017 - July 2018")))),r.a.createElement("div",{className:"Experience-group"},r.a.createElement(k.a,{className:"Experience-leadership"},r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Header,null,"Leadership Roles")),r.a.createElement(k.a.Content,{className:"Experience-child-card-container-cols"},r.a.createElement(k.a,{className:"Experience-child-card Experience-child-card-vertical",centered:!0,color:"olive"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"CORE Tech CommSquad"),r.a.createElement(k.a.Meta,null,"Co-Lead")),r.a.createElement(k.a.Content,null,"As the communications committee co-lead, I planned and delegate tasks in order to write/edit articles, and publish a quarterly CORE Tech newsletter, ",r.a.createElement("i",null,"The CATALYST"),". I created and maintain website to publish ",r.a.createElement("i",null,"The CATALYST"),". I also facilitate our collaboration with CORE Finance to publish monthly editions of PPN Pulse."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"Aug 2018 - Present")),r.a.createElement(k.a,{className:"Experience-child-card Experience-child-card-vertical",centered:!0,color:"olive"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"CORE Tech Alumni Committee")),r.a.createElement(k.a.Content,null,"I co-lead the alumni committee's buddy program, where we match current associates with incomming associates to provide them an informal mentorship. I organize local meetups with CORE Tech associates to foster a sense of community. I identified an opportunity for collaboration across all committess to create a unified CORE Tech website."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"March 2018 - Present")),r.a.createElement(k.a,{className:"Experience-child-card Experience-child-card-vertical",centered:!0,color:"olive"},r.a.createElement(k.a.Content,{className:"Experience-child-card-headers"},r.a.createElement(k.a.Header,{as:"h1"},"Teaching Assistant")),r.a.createElement(k.a.Content,null,"I helped students learn the fundamentals of computer science during weekly recitations and office hours. I graded weekly assignments, wrote exam problems, and graded and proctored exams."),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"Aug 2015 - Jun 2017")))),r.a.createElement("div",{className:"Experience-skills-edu"},r.a.createElement(k.a,{color:"olive"},r.a.createElement(k.a.Content,{className:"Experience-skills-edu-header"},r.a.createElement(k.a.Header,null,"Skills")),r.a.createElement(k.a.Content,null,r.a.createElement(y.a,{columns:3,divided:!0},r.a.createElement(y.a.Column,null,r.a.createElement(y.a.Row,{className:"Experience-column-title"},"Proficient"),r.a.createElement(y.a.Row,null,"Polymer, React, Java, Javascript, CSS, HTML, Jira, Linux, Git/Github")),r.a.createElement(y.a.Column,null,r.a.createElement(y.a.Row,{className:"Experience-column-title"},"Intermediate"),r.a.createElement(y.a.Row,null,"Ocaml, AngularJS, Python, SQL, Telemetry, Splunk, C++")),r.a.createElement(y.a.Column,null,r.a.createElement(y.a.Row,{className:"Experience-column-title"},"Learning"),r.a.createElement(y.a.Row,null,"GoLang, Docker, Kubernetes, Concourse, Vue.js, Algolia, GraphQL"))),r.a.createElement("br",null),"Languages:\xa0\xa0\xa0",r.a.createElement(N.a,{name:"france"}),r.a.createElement(N.a,{name:"es"}))),r.a.createElement(k.a,{color:"olive"},r.a.createElement(k.a.Content,{className:"Experience-skills-edu-header"},r.a.createElement(k.a.Header,null,"Education"),r.a.createElement(k.a.Meta,null,"B.A. Computer Science & Cognitive Science")),r.a.createElement(v.a,{src:"https://static1.squarespace.com/static/54ab7929e4b0170492f02976/t/54c2e1ece4b0badc93a25eb1/1422057965033/Fisher+2.jpg?format=2500w"}),r.a.createElement(k.a.Content,null,"University of Pennsylvania"),r.a.createElement(k.a.Content,{extra:!0},r.a.createElement(h.a,{name:"calendar outline"}),"2013-2017")))))}),A=t(130),O=(t(272),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).callPhotoGalleryAPI=Object(g.a)(b.a.mark(function e(){var a,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="/api/photogallery"+(t.state.nextCursor?"?next_cursor=".concat(t.state.nextCursor):""),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200===n.status){e.next=9;break}throw Error(r.message);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}},e)})),t.state={nextCursor:void 0,photos:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.callPhotoGalleryAPI().then(function(a){var t={};a.next_cursor&&(t.nextCursor=a.next_cursor);var n=e.state.photos.slice().concat(e.parseData(a.resources));t.photos=n,e.setState(t)}).catch(function(e){return console.log(e)})}},{key:"parseData",value:function(e){return e.map(function(e,a){return{src:e.url,width:e.width,height:e.height}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Photos"},r.a.createElement(A.a,{photos:this.state.photos}))}}]),a}(n.Component)),P=(t(273),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={},t.handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement("main",{className:"App"},r.a.createElement(d.a,{className:"App-menu",borderless:!0,attached:"top",fluid:!0,size:"massive"},r.a.createElement(d.a.Item,{link:!0,href:"/",header:!0,className:"App-menu-header",position:"left"},"Mia Froehling Gallier"),r.a.createElement(d.a.Menu,{className:"App-menu-items"},r.a.createElement(d.a.Item,{name:"about",as:"a",link:!0,href:"/aboutme",active:"about"===e,onClick:this.handleItemClick},"About"),r.a.createElement(d.a.Item,{name:"experience",as:"a",link:!0,href:"/experience",active:"experience"===e,onClick:this.handleItemClick},"Experience"),r.a.createElement(d.a.Item,{name:"photos",as:"a",link:!0,href:"/photos",active:"photos"===e,onClick:this.handleItemClick},"Photos")),r.a.createElement(d.a.Menu,{className:"App-social-buttons",position:"right"},r.a.createElement(d.a.Item,{as:"a",href:"https://www.linkedin.com/in/mia-froehling-gallier",target:"_blank"},r.a.createElement(h.a,{name:"linkedin"})),r.a.createElement(d.a.Item,{as:"a",href:"https://www.facebook.com/Miafroehlinggallier",target:"_blank"},r.a.createElement(h.a,{name:"facebook f"})),r.a.createElement(d.a.Item,{as:"a",href:"https://github.com/miafg",target:"_blank"},r.a.createElement(h.a,{name:"github"})))),r.a.createElement(p.a,null,r.a.createElement(E.a,{exact:!0,path:"/",component:C}),r.a.createElement(E.a,{path:"/aboutme",component:w}),r.a.createElement(E.a,{path:"/experience",component:I}),r.a.createElement(E.a,{path:"/photos",component:O})),r.a.createElement("footer",{className:"App-Footer"},"Created by Mia Froehling Gallier"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=t(298);l.a.render(r.a.createElement(j.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.7c038b79.chunk.js.map