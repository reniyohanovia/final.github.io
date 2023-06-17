(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[1714],{851714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var o=r(124852),a=r.n(o),n=r(929656),l=(r(672632),r(203256),r(462193),r(796876),r(854086),r(799715),r(729589),r(121994),r(232095),r(164020),r(316179),r(471707),r(304631)),i=r.n(l),s=r(410240),p=r.n(s),d=r(92742),c=r.n(d),u=r(91175),m=r.n(u);const b={short:"number",float:"number",double:"number",long:"number",decimal:"number",integer:"number",int:"number"};function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},f.apply(this,arguments)}(e=>{e.defineMode("geocss",(function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{indentUnit:o}=t,{propertyKeywords:a={},colorKeywords:n={},valueKeywords:l={},logicKeywords:i={},allowNested:s}=r.propertyKeywords&&r||e.resolveMode("text/geocss");let d,u,m={};const b=(e,t)=>(d=t,e),f=(e,t)=>{let r=!1,o=e.next();for(;o;){if(r&&"/"===o){t.tokenize=null;break}r="*"===o,o=e.next()}return["comment","comment"]},h=(e,t)=>{let r=e.next();if("@"===r)return e.eat("{")?[null,"interpolation"]:e.match(/^(sd|scale)\b/)?["filter",null]:(e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]);if("/"===r)return e.eat("*")?(t.tokenize=f,f(e,t)):["operator","operator"];if('"'===r||"'"===r)return t.tokenize=(o=r,(e,t)=>{let r=!1,a=e.next();for(;a;){if(a===o&&!r){")"===o&&e.backUp(1);break}r=!r&&"\\"===a,a=e.next()}return(a===o||!r&&")"!==o)&&(t.tokenize=null),b("string","string")}),t.tokenize(e,t);if("#"===r)return e.eatWhile(/[\w\\\-]/),b("atom","hash");if(/\d/.test(r)||"."===r&&e.eat(/\d/))return e.eatWhile(/[\w.%]/),b("number","unit");if("-"===r){if(/[\d.]/.test(e.peek()))return e.eatWhile(/[\w.%]/),b("number","unit");if(e.match(/^-[\w\\\-]+/))return e.eatWhile(/[\w\\\-]/),e.match(/^\s*:/,!1)?b("variable-2","variable-definition"):b("variable-2","variable");if(e.match(/^\w+-/))return b("meta","meta")}else{if(/[,+>*\/]/.test(r))return b(null,"select-op");if("."===r&&e.match(/^-?[_a-z][_a-z0-9-]*/i))return b("qualifier","qualifier");if(/[:;{}\[\]\(\)]/.test(r))return b(null,r);if(/[\w\\\-]/.test(r))return e.eatWhile(/[\w\\\-]/),b("property","word")}var o;return b(null,null)};function g(e,t,r){this.type=e,this.indent=t,this.prev=r}const y=(e,t,r,a)=>(e.context=new g(r,t.indentation()+(!1===a?0:o),e.context),r),k=e=>(e.context.prev&&(e.context=e.context.prev),e.context.type),w=(e,t,r)=>m[r.context.type](e,t,r),v=(e,t,r,o)=>{for(let e=o||1;e>0;e--)r.context=r.context.prev;return w(e,t,r)},x=function(e){let t=e.current().toLowerCase();u=l.hasOwnProperty(t)?"atom":n.hasOwnProperty(t)?"keyword":"variable"};return m.top=(e,t,r)=>{if("{"===e)return y(r,t,"block");if("}"===e&&r.context.prev)return k(r);if("hash"===e)u="builtin";else if("word"===e)u="tag";else{if("variable-definition"===e)return"maybeprop";if("interpolation"===e)return y(r,t,"interpolation");if(":"===e)return"pseudo";if(s&&"("===e)return y(r,t,"parens")}return r.context.type},m.block=(e,t,r)=>{if("word"===e){let e=t.current().toLowerCase();return a.hasOwnProperty(e)?(u="property","maybeprop"):i.hasOwnProperty(c()(e))?(u="logic","maybeprop"):p()(c()(t.string),"[")?(u="filter","maybeprop"):(u+=" error","maybeprop")}return"meta"===e?"block":s||"hash"!==e&&"qualifier"!==e?m.top(e,t,r):(u="error","block")},m.maybeprop=(e,t,r)=>":"===e?y(r,t,"prop"):w(e,t,r),m.prop=(e,t,r)=>{if(";"===e)return k(r);if("{"===e&&s)return y(r,t,"propBlock");if("}"===e||"{"===e)return v(e,t,r);if("("===e)return y(r,t,"parens");if("hash"!==e||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(t.current())){if("word"===e)x(t);else if("interpolation"===e)return y(r,t,"interpolation")}else u+=" error";return"prop"},m.propBlock=(e,t,r)=>"}"===e?k(r):"word"===e?(u="property","maybeprop"):r.context.type,m.parens=(e,t,r)=>"{"===e||"}"===e?v(e,t,r):")"===e?k(r):"("===e?y(r,t,"parens"):"interpolation"===e?y(r,t,"interpolation"):("word"===e&&x(t),"parens"),m.pseudo=(e,t,r)=>"word"===e?(u="variable-3",r.context.type):w(d,t,r),m.at=(e,t,r)=>";"===e?k(r):"{"===e||"}"===e?v(e,t,r):("word"===e?u="tag":"hash"===e&&(u="builtin"),"at"),m.interpolation=(e,t,r)=>"}"===e?k(r):"{"===e||";"===e?v(e,t,r):("word"===e?u="variable":"variable"!==e&&"("!==e&&")"!==e&&(u="error"),"interpolation"),{startState:e=>({tokenize:null,state:"top",stateArg:null,context:new g("block",e||0,null)}),token:(e,t)=>{if(!t.tokenize&&e.eatSpace())return null;let r=(t.tokenize||h)(e,t);return r&&"object"==typeof r&&(d=r[1],r=r[0]),u=r,t.state=m[t.state](d,e,t),u},indent:(e,t)=>{let r=e.context,a=t&&t.charAt(0),n=r.indent;return"prop"!==r.type||"}"!==a&&")"!==a||(r=r.prev),r.prev&&("}"!==a||"block"!==r.type&&"top"!==r.type&&"interpolation"!==r.type?(")"===a&&"parens"===r.type||"{"===a&&("at"===r.type||"atBlock"===r.type))&&(n=Math.max(0,r.indent-o),r=r.prev):(r=r.prev,n=r.indent)),n},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/",fold:"brace"}}));const t={colorKeywords:["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],valueKeywords:["round"],pseudoProperties:["mark","shield","stroke","fill","symbol","nth-mark","nth-shield","nth-stroke","nth-fill","nth-symbol"],logicKeywords:["and","or"]};e.defineMIME("text/geocss",{...Object.keys(t).reduce(((e,r)=>({...e,[r]:t[r].reduce(((e,t)=>({...e,[t]:!0})),{})})),{}),propertyKeywords:{mark:{values:{"symbol(circle)":!0}},"mark-composite":!0,"mark-mime":!0,"mark-geometry":!0,"mark-size":!0,"mark-rotation":!0,"mark-label-obstacle":!0,"mark-anchor":!0,"mark-offset":!0,"z-index":!0,stroke:!0,"stroke-composite":!0,"stroke-geometry":!0,"stroke-offset":!0,"stroke-mime":!0,"stroke-opacity":!0,"stroke-width":!0,"stroke-size":!0,"stroke-rotation":!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,"stroke-repeat":!0,"stroke-label-obstacle":!0,fill:!0,"fill-composite":!0,"fill-geometry":!0,"fill-mime":!0,"fill-opacity":!0,"fill-size":!0,"fill-rotation":!0,"fill-label-obstacle":!0,"graphic-margin":!0,random:!0,"random-seed":!0,"random-rotation":!0,"random-symbol-count":!0,"random-tile-size":!0,"fill-random":!0,"fill-random-seed":!0,"fill-random-rotation":!0,"fill-random-symbol-count":!0,"fill-random-tile-size":!0,label:!0,"label-geometry":!0,"label-anchor":!0,"label-offset":!0,"label-rotation":!0,"label-z-index":!0,shield:!0,"shield-mime":!0,"font-family":!0,"font-fill":!0,"font-style":!0,"font-weight":!0,"font-size":!0,"halo-radius":!0,"halo-color":!0,"halo-opacity":!0,"label-padding":!0,"label-group":!0,"label-max-displacement":!0,"label-min-group-distance":!0,"label-repeat":!0,"label-all-group":!0,"label-remove-overlaps":!0,"label-allow-overruns":!0,"label-follow-line":!0,"label-max-angle-delta":!0,"label-auto-wrap":!0,"label-force-ltr":!0,"label-conflict-resolution":!0,"label-fit-goodness":!0,"label-priority":!0,"shield-resize":!0,"shield-margin":!0,"label-underline-text":!0,"label-strikethrough-text":!0,"label-char-spacing":!0,"label-word-spacing":!0,"raster-channels":!0,"raster-composite":!0,"raster-geometry":!0,"raster-opacity":!0,"raster-contrast-enhancement":!0,"raster-contrast-enhancement-algorithm":!0,"raster-contrast-enhancement-min":!0,"raster-contrast-enhancement-max":!0,"raster-gamma":!0,"raster-z-index":!0,"raster-color-map":!0,"raster-color-map-type":!0,composite:!0,"composite-base":!0,geometry:!0,"sort-by":!0,"sort-by-group":!0,transform:!0,size:!0,rotation:!0},envKeywords:{sd:{localPart:"env"},scale:{localPart:"env"}},allowNested:!0,name:"geocss"})})(i()),function(e){const{Pos:t}=e;e.registerHelper("hint","geocss",(function(r){const o=r.getCursor(),a=r.getTokenAt(o),n=r.getLineTokens(o.line),l=n&&m()(n.filter((e=>{let{type:t,start:r}=e;return"property"===t&&r<a.start})).map((e=>{let{string:t}=e;return t}))),i=e.innerMode(r.getMode(),a.state);if("geocss"!==i.mode.name)return null;let s=a.start,p=o.ch,d=a.string.slice(0,p-s);/[^\w$_-]/.test(d)&&(d="",s=p=o.ch);const{propertyKeywords:c,pseudoProperties:u,envKeywords:f}=e.resolveMode("text/geocss")||{},{hintProperties:h}=e.getMode({},"text/geocss")||{};let g={},y=!1;const k=i.state.state;"pseudo"===k||"variable-3"===a.type?g={...u}:"prop"===k?(y=!0,g=c&&c[l]&&c[l].values&&{...c[l].values}||{}):"variable-2"===a.type?g={...f}:"filter"===a.type?(y=!0,g={...h}):"block"!==k&&"maybeprop"!==k||(g={...c});let w=Object.keys(g).reduce(((e,t)=>[...e,...(!d||0===t.lastIndexOf(d,0))&&[t]||[]]),[]);return w=0===w.length&&y?Object.keys(g).reduce(((e,t)=>[...e,t]),[]):[...w],w.length>0?{list:w.map((e=>({text:e,displayText:e,render(e,t,r){const o=document.createElement("span"),a=(e=>{let{localType:t,prefix:r}=e;return("gml"===r?"geometry":b[t])||t||""})(g[r.displayText]||{});o.innerHTML=a&&`{<span class="cm-desc">${a}</span>} `||"";const n=document.createElement("span");n.innerText=r.displayText,e.appendChild(o),e.appendChild(n)}}))),from:t(o.line,s),to:t(o.line,p)}:null}))}(i());const h=(0,o.forwardRef)((function(e,t){let{editorDidMount:r=(()=>{}),...o}=e;return a().createElement(n.Controlled,f({ref:t},o,{editorDidMount:function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return r(...t,i())}}))}))}}]);