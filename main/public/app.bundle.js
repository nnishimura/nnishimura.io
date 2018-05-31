webpackJsonp([0],{"./main/src/_config/data.js":function(e,t,n){"use strict";e.exports={menu:[{name:"WORKS",path:"/works/"},{name:"PROFILE",path:"/about/"},{name:"CONTACT",path:"/contact/"}],canvas:null,canvasContext:null,fps:200,fl:500,winW:0,winH:0,scroll:0,numShapes:300,shapes:[]}},"./main/src/js/classes/events/Canvas.js":function(e,t,n){"use strict";var a=n("./main/src/js/classes/utils/canvasUtils.js"),r=n("./main/src/_config/data.js");n.n(r),new a.a},"./main/src/js/classes/utils/canvasUtils.js":function(e,t,n){"use strict";var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"norm",value:function(e,t,n){return(e-t)/(n-t)}},{key:"lerp",value:function(e,t,n){return(n-t)*e+t}},{key:"map",value:function(e,t,n,a,r){return utils.lerp(utils.norm(e,t,n),a,r)}},{key:"clamp",value:function(e,t,n){return Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n))}},{key:"distance",value:function(e,t){var n=t.x-e.x,a=t.y-e.y;return Math.sqrt(n*n+a*a)}},{key:"distanceXY",value:function(e,t,n,a){var r=n-e,o=a-t;return Math.sqrt(r*r+o*o)}},{key:"circleCollision",value:function(e,t){return utils.distance(e,t)<=e.radius+t.radius}},{key:"circlePointCollision",value:function(e,t,n){return utils.distanceXY(e,t,n.x,n.y)<n.radius}},{key:"pointInRect",value:function(e,t,n){return utils.inRange(e,n.x,n.x+n.width)&&utils.inRange(t,n.y,n.y+n.height)}},{key:"inRange",value:function(e,t,n){return e>=Math.min(t,n)&&e<=Math.max(t,n)}},{key:"rangeIntersect",value:function(e,t,n,a){return Math.max(e,t)>=Math.min(n,a)&&Math.min(e,t)<=Math.max(n,a)}},{key:"rectIntersect",value:function(e,t){return utils.rangeIntersect(e.x,e.x+e.width,t.x,t.x+t.width)&&utils.rangeIntersect(e.y,e.y+e.height,t.y,t.y+t.height)}},{key:"degreesToRads",value:function(e){return e/180*Math.PI}},{key:"radsToDegrees",value:function(e){return 180*e/Math.PI}},{key:"randomRange",value:function(e,t){return e+Math.random()*(t-e)}},{key:"randomInt",value:function(e,t){return Math.floor(e+Math.random()*(t-e+1))}},{key:"roundToPlaces",value:function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}},{key:"roundNearest",value:function(e,t){return Math.round(e/t)*t}},{key:"quadraticBezier",value:function(e,t,n,a,r){return r=r||{},r.x=Math.pow(1-a,2)*e.x+2*(1-a)*a*t.x+a*a*n.x,r.y=Math.pow(1-a,2)*e.y+2*(1-a)*a*t.y+a*a*n.y,r}},{key:"cubicBezier",value:function(e,t,n,a,r,o){return o=o||{},o.x=Math.pow(1-r,3)*e.x+3*Math.pow(1-r,2)*r*t.x+3*(1-r)*r*r*n.x+r*r*r*a.x,o.y=Math.pow(1-r,3)*e.y+3*Math.pow(1-r,2)*r*t.y+3*(1-r)*r*r*n.y+r*r*r*a.y,o}},{key:"multicurve",value:function(e,t){var n,a,r,o;t.moveTo(e[0].x,e[0].y);for(var l=1;l<e.length-2;l+=1)n=e[l],a=e[l+1],r=(n.x+a.x)/2,o=(n.y+a.y)/2,t.quadraticCurveTo(n.x,n.y,r,o);n=e[e.length-2],a=e[e.length-1],t.quadraticCurveTo(n.x,n.y,a.x,a.y)}}]),e}();t.a=r},"./main/src/jsx/components/About.jsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),o(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-about"},r.a.createElement("figure",null,r.a.createElement("img",{src:"/assets/img/prof.jpg",alt:"Profile Photo"})),r.a.createElement("p",{className:"proftext"},"@nnishimura has bounced around a lot: Born in Nara, moved to Hyogo, grew up in Kyoto, and then lived in Hawaii (USA) and Melbourne (Australia).",r.a.createElement("br",null),"She hopes to settle in Tokyo eventually. (For now)"),r.a.createElement("h2",null,"Skills"),r.a.createElement("div",{className:"history"},r.a.createElement("span",null,"- Javascipt: VueJs, EmberJS, NodeJs"),r.a.createElement("br",null),r.a.createElement("span",null,"- PHP, mySQL, Python, Ruby (Rails)"),r.a.createElement("br",null),r.a.createElement("span",null,"- Speaks English/Japanese")),r.a.createElement("h2",null,"Employment"),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"June 2017 - Current"),r.a.createElement("h3",null,"Front-end Engineer – KKVesper, Tokyo")),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"May 2015 - June 2017"),r.a.createElement("h3",null,"Web developer – Full Size Image.Inc, Tokyo")))}}]),t}();t.a=l},"./main/src/jsx/components/App.jsx":function(e,t,n){"use strict";t.a=function(){var e=Object(s.a)();return r.a.createElement("div",{id:"wrapAll"},r.a.createElement("div",{className:"ribbon"},r.a.createElement("span",null,"Beta")),r.a.createElement("div",{className:"contents"},r.a.createElement(o.Provider,{store:e},r.a.createElement(l.BrowserRouter,null,r.a.createElement(i.a,null)))),r.a.createElement("canvas",{id:"canvas"}))};var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react-router-dom/es/index.js"),s=n("./main/src/jsx/store/createStore.js"),i=n("./main/src/jsx/components/Routes.jsx")},"./main/src/jsx/components/Header.jsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/react-router-dom/es/index.js"),l=n("./main/src/_config/data.js"),s=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),i=n("./node_modules/underscore/underscore.js"),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={items:l.menu.map(function(e){return i.clone(e)})},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),s(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"header"},r.a.createElement("nav",{className:"h-wrap"},r.a.createElement("ul",{className:"h-inner"},this.state.items.map(function(e){var t=e.path;return t.indexOf("contact")>-1?r.a.createElement("li",{key:t},r.a.createElement("a",{href:"mailto:naoko.nishimura1018@gmail.com",key:1},r.a.createElement("span",null,e.name))):r.a.createElement("li",{key:t},r.a.createElement(o.Link,{to:t},r.a.createElement("span",null,e.name)))}))))}}]),t}();t.a=c},"./main/src/jsx/components/Routes.jsx":function(e,t,n){"use strict";t.a=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("h1",{className:"logo"},r.a.createElement(o.Link,{to:"/",key:"/"},"nnishimura",r.a.createElement("span",{className:"dot"},"."),"io")),r.a.createElement("div",{className:"container"},r.a.createElement(o.Switch,null,r.a.createElement(o.Route,{path:"/",exact:!0,component:s.a}),r.a.createElement(o.Route,{path:"/about",exact:!0,component:l.a}),r.a.createElement(o.Route,{path:"/works",exact:!0,component:i.a}))))};var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/react-router-dom/es/index.js"),l=n("./main/src/jsx/components/About.jsx"),s=n("./main/src/jsx/components/Top.jsx"),i=n("./main/src/jsx/components/Works.jsx")},"./main/src/jsx/components/Top.jsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=(n("./node_modules/react-router-dom/es/index.js"),n("./main/src/jsx/components/Header.jsx")),l=n("./main/src/_config/data.js"),s=(n.n(l),n("./main/src/js/classes/events/Canvas.js"),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),s(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"page-home page"},r.a.createElement("p",null,"Front-end engineer",r.a.createElement("br",null),"Web developer",r.a.createElement("br",null),"80% design x 20% code",r.a.createElement("br",null)),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/nnishimura",target:"_blank"},r.a.createElement("img",{src:"/assets/img/github.svg",alt:"github",width:"30",height:"30"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/naoko.nishimura1018",target:"_blank"},r.a.createElement("img",{src:"/assets/img/fb.svg",alt:"facebook",width:"30",height:"30"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"http://qiita.com/nnishimura",target:"_blank"},r.a.createElement("img",{src:"/assets/img/qiita.svg",alt:"Qiita",width:"30",height:"30"}))))),r.a.createElement(o.a,null))}}]),t}();t.a=i},"./main/src/jsx/components/Works.jsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),o(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-works"},r.a.createElement("h2",null,"Works"),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"June 2017 - Current"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.tablecheck.com/ja/",rel:"noopener noreferrer",target:"_blank"},"TableCheck"),r.a.createElement("p",null,"Online booking system ",r.a.createElement("br",null),"FrontEnd - ReactJS, mobx"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"June 2017 - Current"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://app.tablesolution.com/",rel:"noopener noreferrer",target:"_blank"},"TableSolution"),r.a.createElement("p",null,"Reservation management system",r.a.createElement("br",null),"FrontEnd - EmberJS"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"June 2017"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://artdesignjobs.bijutsu.press/",rel:"noopener noreferrer",target:"_blank"},"Desgin no Genba"),r.a.createElement("p",null,"The Job listing website for designers. ",r.a.createElement("br",null),"FrontEnd - VueJs, Backend - PHP"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"May 2017"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.mutatokyo.com/",rel:"noopener noreferrer",target:"_blank"},"muta Online Store"),r.a.createElement("p",null,"FrontEnd - VueJs, Backend - PHP"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"April 2017"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://art-marche.jp/2017/",rel:"noopener noreferrer",target:"_blank"},"Kobe Art Marche 2017 Teaser Website"),r.a.createElement("p",null,"FrontEnd - CreateJS, Backend - Wordpress, PHP"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"January 2017"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://sunart-corp.com/",rel:"noopener noreferrer",target:"_blank"},"Sunart Official Website"),r.a.createElement("p",null,"Wordpress"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"December 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.epoi-jp.com/fs/epoi/c/top",rel:"noopener noreferrer",target:"_blank"},"Epoi Online Store"),r.a.createElement("p",null,"FutureShop"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"October 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://journal-standard.jp/relume/special/2016aw/life_is/issue16/",rel:"noopener noreferrer",target:"_blank"},'Journal Standard relume "Life is..."'))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"Auguast 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.kawata-gallery.com/",rel:"noopener noreferrer",target:"_blank"},"Kawata Gallery Official Website"),r.a.createElement("p",null,"Wordpress"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"Auguast 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.falkland.co.jp/",rel:"noopener noreferrer",target:"_blank"},"Falkland Official Website"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"July 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.epoi-jp.com/",rel:"noopener noreferrer",target:"_blank"},"Epoi Official Website"),r.a.createElement("p",null,"Wordpress"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"June 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://art-marche.jp/2016/",rel:"noopener noreferrer",target:"_blank"},"Kobe Art Marche Official Website 2016"),r.a.createElement("p",null,"Wordpress"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"March 2016"),r.a.createElement("h3",null,r.a.createElement("a",{href:"https://www.amanaartphoto.com/",rel:"noopener noreferrer",target:"_blank"},"Amana art photo Online Store"),r.a.createElement("p",null,"Wordpress"))),r.a.createElement("div",{className:"history"},r.a.createElement("time",null,"Dec 2015"),r.a.createElement("h3",null,r.a.createElement("a",{href:"http://www.christiandada.jp/",rel:"noopener noreferrer",target:"_blank"},"Christiandada official brand site"),r.a.createElement("p",null,"Wordpress"))))}}]),t}();t.a=l},"./main/src/jsx/main.jsx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("./node_modules/babel-polyfill/lib/index.js"),r=(n.n(a),n("./node_modules/react/index.js")),o=(n.n(r),n("./node_modules/react-dom/index.js")),l=n.n(o),s=n("./main/src/jsx/components/App.jsx"),i=n("./main/src/_config/data.js"),c=n.n(i),u=new(n("./main/src/js/classes/utils/canvasUtils.js").a),m=document.querySelector("main");m&&l.a.render(r.createElement(s.a,null),m),c.a.winW=window.innerWidth,c.a.winH=window.innerHeight,c.a.canvas=document.getElementById("canvas"),c.a.canvasContext=c.a.canvas.getContext("2d"),function(){function e(){var a=t.width=c.a.winW,r=t.height=c.a.winH;n.translate(a/2,r/2),n.clearRect(-a/2,-r/2,a,r);for(var o=0;o<c.a.numShapes;o+=1){var l=c.a.shapes[o],s=c.a.fl/(c.a.fl+l.z);n.save(),n.translate(l.x*s,l.y*s),n.scale(s,s),n.beginPath(),n.arc(0,0,l.radius,0,2*Math.PI,!1),n.fillStyle="#ffffff",n.fill(),n.restore(),l.z-=10,l.z<0&&(l.z=u.randomRange(5e3,1e4))}requestAnimationFrame(e)}for(var t=c.a.canvas,n=c.a.canvasContext,a=0;a<c.a.numShapes;a++)c.a.shapes[a]={x:u.randomRange(-8e3,8e3),y:u.randomRange(-8e3,8e3),z:u.randomRange(0,8e3),radius:u.randomRange(5,30)};e()}();var f=void 0;window.addEventListener("resize",function(){!1!==f&&clearTimeout(f),f=setTimeout(function(){c.a.winW=window.innerWidth,c.a.winH=window.innerHeight},c.a.fps)}),window.addEventListener("load",function(){document.body.className="load"}),window.addEventListener("mousemove",function(e){for(var t=.03*(c.a.winW/2-e.pageX),n=.01*(c.a.winH/2-e.pageY),a=0;a<c.a.numShapes;a++)c.a.shapes[a].x=c.a.shapes[a].x+t,c.a.shapes[a].y=c.a.shapes[a].y+n})},"./main/src/jsx/reducers/counter.js":function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r="counter/increment",o={value:0};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;switch(arguments[1].type){case r:return a({},e,{value:e.value+1});default:return e}}},"./main/src/jsx/reducers/index.js":function(e,t,n){"use strict";var a=n("./node_modules/redux/es/index.js"),r=n("./main/src/jsx/reducers/counter.js");t.a=Object(a.combineReducers)({counter:r.a})},"./main/src/jsx/store/createStore.js":function(e,t,n){"use strict";var a=n("./node_modules/redux/es/index.js"),r=n("./node_modules/redux-promise/lib/index.js"),o=n.n(r),l=n("./node_modules/redux-logger/dist/redux-logger.js"),s=n.n(l),i=n("./node_modules/redux-thunk/lib/index.js"),c=n.n(i),u=n("./main/src/jsx/reducers/index.js");t.a=function(){return Object(a.createStore)(u.a,Object(a.applyMiddleware)(s.a,o.a,c.a))}},"./node_modules/redux-thunk/lib/index.js":function(e,t,n){"use strict";function a(e){return function(t){var n=t.dispatch,a=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,a,e):t(r)}}}}t.__esModule=!0;var r=a();r.withExtraArgument=a,t.default=r},1:function(e,t,n){e.exports=n("./main/src/jsx/main.jsx")}},[1]);