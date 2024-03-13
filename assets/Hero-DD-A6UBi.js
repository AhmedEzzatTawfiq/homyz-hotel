import{g as G,r as H,j as i}from"./index-lxorQTF6.js";import{H as L}from"./index-DmQsIDl0.js";import"./iconBase-CZgcUkBf.js";const k="/assets/hero-image.png";var D={},N=function(){return N=Object.assign||function(r){for(var e,n=1,a=arguments.length;n<a;n++)for(var t in e=arguments[n])Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r},N.apply(this,arguments)},q=function(){function r(e,n,a){var t=this;this.endVal=n,this.options=a,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){t.startTime||(t.startTime=s);var l=s-t.startTime;t.remaining=t.duration-l,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(l,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(l,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(l/t.duration);var o=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=o?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),l<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(s){var l,o,u,c,d=s<0?"-":"";l=Math.abs(s).toFixed(t.options.decimalPlaces);var m=(l+="").split(".");if(o=m[0],u=m.length>1?t.options.decimal+m[1]:"",t.options.useGrouping){c="";for(var y=3,x=0,p=0,g=o.length;p<g;++p)t.options.useIndianSeparators&&p===4&&(y=2,x=1),p!==0&&x%y==0&&(c=t.options.separator+c),x++,c=o[g-p-1]+c;o=c}return t.options.numerals&&t.options.numerals.length&&(o=o.replace(/[0-9]/g,function(h){return t.options.numerals[+h]}),u=u.replace(/[0-9]/g,function(h){return t.options.numerals[+h]})),d+t.options.prefix+o+u+t.options.suffix},this.easeOutExpo=function(s,l,o,u){return o*(1-Math.pow(2,-10*s/u))*1024/1023+l},this.options=N(N({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,a=e.el.getBoundingClientRect(),t=a.top+window.pageYOffset,s=a.top+a.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||t>n)&&!e.paused&&e.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var a=this.countDown?1:-1;this.endVal=e+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(e){var n;if(this.el){var a=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,a):this.el.tagName==="INPUT"?this.el.value=a:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=a:this.el.innerHTML=a}},r.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},r.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const Y=Object.freeze(Object.defineProperty({__proto__:null,CountUp:q},Symbol.toStringTag,{value:"Module"})),W=G(Y);Object.defineProperty(D,"__esModule",{value:!0});var f=H,$=W;function B(r,e){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var a,t,s,l,o=[],u=!0,c=!1;try{if(s=(n=n.call(r)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=s.call(n)).done)&&(o.push(a.value),o.length!==e);u=!0);}catch(d){c=!0,t=d}finally{try{if(!u&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw t}}return o}}function _(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),n.push.apply(n,a)}return n}function C(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_(Object(n),!0).forEach(function(a){K(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}function K(r,e,n){return e=ne(e),e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function T(){return T=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])}return r},T.apply(this,arguments)}function J(r,e){if(r==null)return{};var n={},a=Object.keys(r),t,s;for(s=0;s<a.length;s++)t=a[s],!(e.indexOf(t)>=0)&&(n[t]=r[t]);return n}function M(r,e){if(r==null)return{};var n=J(r,e),a,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(t=0;t<s.length;t++)a=s[t],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(n[a]=r[a])}return n}function Q(r,e){return X(r)||B(r,e)||Z(r,e)||ee()}function X(r){if(Array.isArray(r))return r}function Z(r,e){if(r){if(typeof r=="string")return I(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(r,e)}}function I(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=r[n];return a}function ee(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function te(r,e){if(typeof r!="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var a=n.call(r,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function ne(r){var e=te(r,"string");return typeof e=="symbol"?e:String(e)}var re=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function b(r){var e=f.useRef(r);return re(function(){e.current=r}),f.useCallback(function(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return e.current.apply(void 0,a)},[])}var ae=function(e,n){var a=n.decimal,t=n.decimals,s=n.duration,l=n.easingFn,o=n.end,u=n.formattingFn,c=n.numerals,d=n.prefix,m=n.separator,y=n.start,x=n.suffix,p=n.useEasing,g=n.useGrouping,h=n.useIndianSeparators,E=n.enableScrollSpy,v=n.scrollSpyDelay,S=n.scrollSpyOnce,V=n.plugin;return new $.CountUp(e,o,{startVal:y,duration:s,decimal:a,decimalPlaces:t,easingFn:l,formattingFn:u,numerals:c,separator:m,prefix:d,suffix:x,plugin:V,useEasing:p,useIndianSeparators:h,useGrouping:g,enableScrollSpy:E,scrollSpyDelay:v,scrollSpyOnce:S})},ie=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],se={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},z=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(j){var P=Q(j,2),R=P[1];return R!==void 0})),a=f.useMemo(function(){return C(C({},se),n)},[e]),t=a.ref,s=a.startOnMount,l=a.enableReinitialize,o=a.delay,u=a.onEnd,c=a.onStart,d=a.onPauseResume,m=a.onReset,y=a.onUpdate,x=M(a,ie),p=f.useRef(),g=f.useRef(),h=f.useRef(!1),E=b(function(){return ae(typeof t=="string"?t:t.current,x)}),v=b(function(j){var P=p.current;if(P&&!j)return P;var R=E();return p.current=R,R}),S=b(function(){var j=function(){return v(!0).start(function(){u==null||u({pauseResume:V,reset:w,start:F,update:O})})};o&&o>0?g.current=setTimeout(j,o*1e3):j(),c==null||c({pauseResume:V,reset:w,update:O})}),V=b(function(){v().pauseResume(),d==null||d({reset:w,start:F,update:O})}),w=b(function(){v().el&&(g.current&&clearTimeout(g.current),v().reset(),m==null||m({pauseResume:V,start:F,update:O}))}),O=b(function(j){v().update(j),y==null||y({pauseResume:V,reset:w,start:F})}),F=b(function(){w(),S()}),A=b(function(j){s&&(j&&w(),S())});return f.useEffect(function(){h.current?l&&A(!0):(h.current=!0,A())},[l,h,A,o,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),f.useEffect(function(){return function(){w()}},[w]),{start:F,pauseResume:V,reset:w,update:O,getCountUp:v}},oe=["className","redraw","containerProps","children","style"],ue=function(e){var n=e.className,a=e.redraw,t=e.containerProps,s=e.children,l=e.style,o=M(e,oe),u=f.useRef(null),c=f.useRef(!1),d=z(C(C({},o),{},{ref:u,startOnMount:typeof s!="function"||e.delay===0,enableReinitialize:!1})),m=d.start,y=d.reset,x=d.update,p=d.pauseResume,g=d.getCountUp,h=b(function(){m()}),E=b(function(V){e.preserveValue||y(),x(V)}),v=b(function(){if(typeof e.children=="function"&&!(u.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}g()});f.useEffect(function(){v()},[v]),f.useEffect(function(){c.current&&E(e.end)},[e.end,E]);var S=a&&e;return f.useEffect(function(){a&&c.current&&h()},[h,a,S]),f.useEffect(function(){!a&&c.current&&h()},[h,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),f.useEffect(function(){c.current=!0},[]),typeof s=="function"?s({countUpRef:u,start:m,reset:y,update:x,pauseResume:p,getCountUp:g}):f.createElement("span",T({className:n,ref:u,style:l},t),typeof e.start<"u"?g().formattingFn(e.start):"")},U=D.default=ue;D.useCountUp=z;const de=()=>i.jsx("section",{className:"hero-wrapper",children:i.jsxs("div",{className:"container hero",children:[i.jsxs("div",{className:"hero-left",children:[i.jsx("div",{className:"hero-title",children:i.jsxs("h1",{children:["Discover ",i.jsx("br",{}),"Most Suitable ",i.jsx("br",{})," Property"]})}),i.jsxs("div",{className:"hero-desc",children:[i.jsx("span",{className:"secondaryText",children:"Find a variety of properties that suit you very easility"}),i.jsx("span",{className:"secondaryText",children:"Forget all difficulties in finding a residence for you"})]}),i.jsxs("div",{className:"search-bar flex",children:[i.jsx(L,{color:"blue"}),i.jsx("input",{className:"",type:"text",style:{padding:"0.5rem"}}),i.jsx("button",{className:"button",children:"Search"})]}),i.jsxs("div",{className:"stats",children:[i.jsxs("div",{className:"stat",children:[i.jsxs("span",{children:[i.jsx("span",{children:i.jsx(U,{start:8800,end:9e3})}),i.jsx("span",{children:"+"})]}),i.jsx("span",{className:"secondaryText",children:"Premium Product"})]}),i.jsxs("div",{className:"stat",children:[i.jsxs("span",{children:[i.jsx("span",{children:i.jsx(U,{start:1950,end:2e3})}),i.jsx("span",{children:"+"})]}),i.jsx("span",{className:"secondaryText",children:"Happy Customers"})]}),i.jsxs("div",{className:"stat",children:[i.jsxs("span",{children:[i.jsx("span",{children:i.jsx(U,{end:28})}),i.jsx("span",{children:"+"})]}),i.jsx("span",{className:"secondaryText",children:"Award Winning"})]})]})]}),i.jsx("div",{className:"hero-right",children:i.jsx("div",{className:"img-container",children:i.jsx("img",{src:k,alt:""})})})]})});export{de as default};
