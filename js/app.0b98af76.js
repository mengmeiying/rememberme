(function(e){function t(t){for(var c,s,i=t[0],l=t[1],u=t[2],a=0,b=[];a<i.length;a++)s=i[a],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&b.push(r[s][0]),r[s]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);d&&d(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},r={app:0},o=[];function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/rememberme/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"065b":function(e,t,n){},1511:function(e,t,n){"use strict";n("5ddb")},"15d0":function(e,t,n){"use strict";n("065b")},"161f":function(e,t,n){},"211a":function(e,t,n){},"3e04":function(e,t,n){"use strict";n("e589")},"55cd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function r(e,t,n,r,o,s){const i=Object(c["o"])("the-header"),l=Object(c["o"])("the-resources");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(i,{title:o.title},null,8,["title"]),Object(c["j"])(l)],64)}function o(e,t,n,r,o,s){return Object(c["l"])(),Object(c["g"])("header",null,[Object(c["h"])("h1",null,Object(c["q"])(n.title),1)])}var s={props:["title"]},i=(n("60da"),n("6b0d")),l=n.n(i);const u=l()(s,[["render",o],["__scopeId","data-v-eea06634"]]);var d=u;function a(e,t,n,r,o,s){const i=Object(c["o"])("base-button"),l=Object(c["o"])("base-card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[Object(c["j"])(l,null,{default:Object(c["r"])(()=>[Object(c["j"])(i,{onClick:t[0]||(t[0]=e=>s.setSelectedTab("stored-resources")),mode:s.storedResButtonMode},{default:Object(c["r"])(()=>t[2]||(t[2]=[Object(c["i"])("Stored Resources")])),_:1},8,["mode"]),Object(c["j"])(i,{onClick:t[1]||(t[1]=e=>s.setSelectedTab("add-resource")),mode:s.addResButtonMode},{default:Object(c["r"])(()=>t[3]||(t[3]=[Object(c["i"])("Add Resources")])),_:1},8,["mode"])]),_:1}),(Object(c["l"])(),Object(c["e"])(c["b"],null,[(Object(c["l"])(),Object(c["e"])(Object(c["p"])(o.selectedTab)))],1024))],64)}const b={class:"form-control"},j={id:"title",name:"title",type:"text",ref:"titleInput"},O={class:"form-control"},f={name:"descr",id:"descr",rows:"3",ref:"descrInput"},p={class:"form-control"},h={id:"link",name:"link",type:"url",ref:"linkInput"};function v(e,t,n,r,o,s){const i=Object(c["o"])("base-button"),l=Object(c["o"])("base-dialog"),u=Object(c["o"])("base-card");return Object(c["l"])(),Object(c["g"])(c["a"],null,[o.inputIsInvalid?(Object(c["l"])(),Object(c["e"])(l,{key:0,title:"Invalid Input",onClose:s.confirmError},{default:Object(c["r"])(()=>t[1]||(t[1]=[Object(c["h"])("p",null,"Unfortunately, at least one input value is invalid.",-1),Object(c["h"])("p",null," Please check all inputs and make sure you enter at least a few characters into each input field. ",-1)])),actions:Object(c["r"])(()=>[Object(c["j"])(i,{onClick:s.confirmError},{default:Object(c["r"])(()=>t[2]||(t[2]=[Object(c["i"])("Okay")])),_:1},8,["onClick"])]),_:1},8,["onClose"])):Object(c["f"])("",!0),Object(c["j"])(u,null,{default:Object(c["r"])(()=>[Object(c["h"])("form",{onSubmit:t[0]||(t[0]=Object(c["s"])((...e)=>s.submitData&&s.submitData(...e),["prevent"]))},[Object(c["h"])("div",b,[t[3]||(t[3]=Object(c["h"])("label",{for:"title"},"Title",-1)),Object(c["h"])("input",j,null,512)]),Object(c["h"])("div",O,[t[4]||(t[4]=Object(c["h"])("label",{for:"descr"},"Description",-1)),Object(c["h"])("textarea",f,null,512)]),Object(c["h"])("div",p,[t[5]||(t[5]=Object(c["h"])("label",{for:"link"},"Link",-1)),Object(c["h"])("input",h,null,512)]),Object(c["h"])("div",null,[Object(c["j"])(i,{type:"submit"},{default:Object(c["r"])(()=>t[6]||(t[6]=[Object(c["i"])("Add Resource")])),_:1})])],32)]),_:1})],64)}var m={inject:["addResource"],data(){return{inputIsInvalid:!1}},methods:{submitData(){const e=this.$refs.titleInput.value,t=this.$refs.descrInput.value,n=this.$refs.linkInput.value;""!==e.trim()&&""!==t.trim()&&""!==n.trim()?this.addResource(e,t,n):this.inputIsInvalid=!0},confirmError(){this.inputIsInvalid=!1}}};n("693d");const g=l()(m,[["render",v],["__scopeId","data-v-efeb46e2"]]);var y=g;function k(e,t,n,r,o,s){const i=Object(c["o"])("learning-resource");return Object(c["l"])(),Object(c["g"])("ul",null,[(Object(c["l"])(!0),Object(c["g"])(c["a"],null,Object(c["m"])(s.resources,e=>(Object(c["l"])(),Object(c["e"])(i,{id:e.id,key:e.id,title:e.title,description:e.description,link:e.link},null,8,["id","title","description","link"]))),128))])}const _=["href"];function R(e,t,n,r,o,s){const i=Object(c["o"])("base-button"),l=Object(c["o"])("base-card");return Object(c["l"])(),Object(c["e"])(l,null,{default:Object(c["r"])(()=>[Object(c["h"])("header",null,[Object(c["h"])("h3",null,Object(c["q"])(n.title),1),Object(c["j"])(i,{mode:"flat",onClick:t[0]||(t[0]=e=>s.removeResource(n.id))},{default:Object(c["r"])(()=>t[1]||(t[1]=[Object(c["i"])("Delete")])),_:1})]),Object(c["h"])("p",null,Object(c["q"])(n.description),1),Object(c["h"])("nav",null,[Object(c["h"])("a",{href:n.link},"View Resource",8,_)])]),_:1})}var I={props:["id","title","description","link"],inject:["removeResource"]};n("15d0");const T=l()(I,[["render",R],["__scopeId","data-v-97bded82"]]);var w=T,S={components:{LearningResource:w},inject:["resources"]};n("dbdb");const C=l()(S,[["render",k],["__scopeId","data-v-f94f1922"]]);var $=C,x={components:{AddResource:y,StoredResources:$},data(){return{selectedTab:"stored-resources",storedResources:[{id:"official-guide",title:"Official Guide",description:"The official Vue.js documentation.",link:"https://vuejs.org"},{id:"google",title:"Google",description:"Learn to google...",link:"https://google.com"}]}},provide(){return{resources:this.storedResources,addResource:this.addResource,removeResource:this.removeResource}},computed:{storedResButtonMode(){return"stored-resources"===this.selectedTab?null:"flat"},addResButtonMode(){return"add-resource"===this.selectedTab?null:"flat"}},methods:{setSelectedTab(e){this.selectedTab=e},addResource(e,t,n){const c={id:new Date,title:e,description:t,link:n};this.storedResources.unshift(c),this.selectedTab="stored-resources"},removeResource(e){const t=this.storedResources.findIndex(t=>t.id===e);this.storedResources.splice(t,1)}}};const M=l()(x,[["render",a]]);var P=M,D={components:{TheHeader:d,TheResources:P},data(){return{title:"RememberMe"}}};n("ab05");const q=l()(D,[["render",r]]);var B=q;function A(e,t){return Object(c["l"])(),Object(c["g"])("div",null,[Object(c["n"])(e.$slots,"default",{},void 0,!0)])}n("1511");const E={},L=l()(E,[["render",A],["__scopeId","data-v-f5abaf8e"]]);var G=L;const J=["type"];function V(e,t,n,r,o,s){return Object(c["l"])(),Object(c["g"])("button",{type:n.type,class:Object(c["k"])(n.mode)},[Object(c["n"])(e.$slots,"default",{},void 0,!0)],10,J)}var H={props:["type","mode"]};n("cd5b");const U=l()(H,[["render",V],["__scopeId","data-v-272bb03b"]]);var z=U;const F={open:""};function K(e,t,n,r,o,s){const i=Object(c["o"])("base-button");return Object(c["l"])(),Object(c["e"])(c["c"],{to:"body"},[Object(c["h"])("div",{onClick:t[0]||(t[0]=t=>e.$emit("close"))}),Object(c["h"])("dialog",F,[Object(c["h"])("header",null,[Object(c["n"])(e.$slots,"header",{},()=>[Object(c["h"])("h2",null,Object(c["q"])(n.title),1)],!0)]),Object(c["h"])("section",null,[Object(c["n"])(e.$slots,"default",{},void 0,!0)]),Object(c["h"])("menu",null,[Object(c["n"])(e.$slots,"actions",{},()=>[Object(c["j"])(i,{onClick:t[1]||(t[1]=t=>e.$emit("close"))},{default:Object(c["r"])(()=>t[2]||(t[2]=[Object(c["i"])("Close")])),_:1})],!0)])])])}var N={props:{title:{type:String,required:!1}},emits:["close"]};n("3e04");const Q=l()(N,[["render",K],["__scopeId","data-v-58fc9ceb"]]);var W=Q;const X=Object(c["d"])(B);X.component("base-card",G),X.component("base-button",z),X.component("base-dialog",W),X.mount("#app")},"5ddb":function(e,t,n){},"60da":function(e,t,n){"use strict";n("211a")},"693d":function(e,t,n){"use strict";n("90e3")},"72e1":function(e,t,n){},"90e3":function(e,t,n){},ab05:function(e,t,n){"use strict";n("161f")},cd5b:function(e,t,n){"use strict";n("72e1")},dbdb:function(e,t,n){"use strict";n("55cd")},e589:function(e,t,n){}});
//# sourceMappingURL=app.0b98af76.js.map