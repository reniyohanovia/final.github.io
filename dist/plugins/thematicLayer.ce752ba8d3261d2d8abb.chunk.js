(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[1074],{101497:(e,t,a)=>{"use strict";a.d(t,{DN:()=>r,C$:()=>i,uA:()=>l,Au:()=>n,Ty:()=>o,ME:()=>s,V9:()=>c,kc:()=>m,H2:()=>u,Fn:()=>d,hJ:()=>y,lm:()=>p,T8:()=>h,I3:()=>f,nh:()=>g,A7:()=>v,wX:()=>b,IO:()=>C,kE:()=>S,RO:()=>I});const r="THEMATIC:FIELDS_LOADED",i="THEMATIC:FIELDS_ERROR",l="THEMATIC:LOAD_FIELDS",n="THEMATIC:CLASSIFICATION_LOADED",o="THEMATIC:CLASSIFICATION_ERROR",s="THEMATIC:LOAD_CLASSIFICATION",c="THEMATIC:CHANGE_CONFIGURATION",m="THEMATIC:CHANGE_DIRTY",u="THEMATIC:CHANGE_INPUT_VALIDITY";function d(e,t){return{type:r,layer:e,fields:t}}function y(e,t){return{type:i,layer:e,error:t}}function p(e){return{type:l,layer:e}}function h(e,t){return{type:s,layer:e,params:t}}function f(e,t){return{type:n,layer:e,classification:t}}function g(e,t){return{type:o,layer:e,error:t}}function v(e,t,a,r){return{type:c,layer:e,editEnabled:t,current:a,error:r}}function b(){return{type:m,dirty:!0}}function C(){return{type:m,dirty:!1}}function S(e,t,a){return{type:u,valid:!1,input:e,message:t,params:a}}function I(e){return{type:u,valid:!0,input:e}}},458698:(e,t,a)=>{"use strict";a.d(t,{Z:()=>R});var r=a(959956),i=a(472500),l=a.n(i),n=a(189734),o=a.n(n),s=a(91175),c=a.n(s),m=a(984596),u=a.n(m),d=a(281763),y=a.n(d),p=a(747037),h=a.n(p),f=a(944908),g=a.n(f),v=a(727418),b=a.n(v),C=a(65792),S=a.n(C),I=a(399790);const T=[{name:"red",colors:["#000","#f00"]},{name:"green",colors:["#000","#008000","#0f0"]},{name:"blue",colors:["#000","#00f"]},{name:"gray",colors:["#333","#eee"]},{name:"jet",colors:["#00f","#ff0","#f00"]},...g()(Object.keys(S().brewer).map((e=>e.toLocaleLowerCase()))).map((e=>({name:e,colors:e})))],P=(e,t,a,r)=>{const i=e?c()((e.thematic.colors||e.thematic.additionalColors||[]).filter((e=>e.name===t)))||c()(T.filter((e=>e.name===t))):r?c()([r,...T].filter((e=>e.name===t))):c()(T.filter((e=>e.name===t)));return i&&(h()(i.colors)||i.colors.length>=2)?{ramp:"custom",colors:S().scale(i.colors).colors(a).join(",")}:{ramp:t}},F=(e,t)=>{const a=e.thematic&&e.thematic.params||[],r=e.thematic&&e.thematic.fieldAsParam&&["field"]||[];return Object.keys(t).reduce(((i,l)=>{return((e,t)=>function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).filter((t=>t.field===e)).length>0}(e,t))(l,[...a,...r])?b()(i,((e,t,a)=>({viewparams:(e?e+";":"")+t+":"+a}))(i.viewparams,l,t[l])):"ramp"===l?b()(i,P(e,t[l],t.intervals||5)):"classification"===l?b()(i,(n=t[l])?{customClasses:n.reduce(((e,t)=>[...e,t.min+","+t.max+","+t.color]),[]).join(";")}:{}):"attribute"===l?b()(i,{attribute:e.thematic&&e.thematic.fieldAsParam?t[l]:t.field}):"field"===l&&e.thematic&&!e.thematic.fieldAsParam?i:"strokeWeight"!==l||t.strokeOn?"strokeOn"===l?i:b()(i,{[l]:t[l]}):b()(i,{[l]:-1});var n}),{})},E=e=>b()({protocol:e.protocol,hostname:e.domain},e.port?{port:e.port}:{}),A=e=>e.reduce(((e,t)=>y()(t)?t:e),null),L=e=>e.PolygonSymbolizer?"Polygon":e.LineSymbolizer?"LineString":e.PointSymbolizer?"Point":null,O=e=>e.PolygonSymbolizer?e.PolygonSymbolizer.Fill&&e.PolygonSymbolizer.Fill.CssParameter&&e.PolygonSymbolizer.Fill.CssParameter.$||"#808080":e.LineSymbolizer?e.LineSymbolizer.Stroke&&e.LineSymbolizer.Stroke.CssParameter&&e.LineSymbolizer.Stroke.CssParameter.$||"#808080":e.PointSymbolizer&&e.PointSymbolizer.Graphic&&e.PointSymbolizer.Graphic.Mark&&e.PointSymbolizer.Graphic.Mark.Fill&&e.PointSymbolizer.Graphic.Mark.Fill.CssParameter&&e.PointSymbolizer.Graphic.Mark.Fill.CssParameter.$||"#808080",M={getStyleService:(e,t)=>{const a=(0,r.ij)((0,I.Hi)(e));return l().format(b()(E(a),{pathname:a.applicationRootPath+"/rest/sldservice/"+e.name+"/classify.xml",query:b()({},F(e,t),{fullSLD:!0})}))},getCapabilitiesUrl:e=>{const t=(0,r.ij)((0,I.Hi)(e));return l().format(b()(E(t),{pathname:t.applicationRootPath+"/rest/sldservice/capabilities.json"}))},getStyleMetadataService:(e,t,a)=>{const{baseUrl:i="",isStatic:n=!1}=a||{},o=(0,r.ij)(n?i:(0,I.Hi)(e));return l().format(b()(E(o),{pathname:o.applicationRootPath+"/rest/sldservice/"+e.name+"/classify.json",query:t}))},getStyleParameters:(e,t)=>({SLD:M.getStyleService(e,t),viewparams:F(e,t).viewparams}),getMetadataParameters:(e,t)=>F(e,t),getFieldsService:e=>{const t=(0,r.ij)((0,I.Hi)(e)),a=e.thematic&&e.thematic.datatable||e.name;return l().format(b()(E(t),{pathname:t.applicationRootPath+"/rest/sldservice/"+a+"/attributes.json"}))},readFields:e=>o()(u()(e.Attributes.Attribute||[]).filter((e=>{return t=e.type,-1!==["Integer","Long","Double","Float","BigDecimal"].indexOf(t);var t})).map((e=>({name:e.name,type:(e.type,"number")}))),(e=>e.name)),readClassification:(e,t)=>{(e=>{if(e&&e.Rule)throw new Error("toc.thematic.invalid_attribute");if(!e||!e.Rules||!e.Rules.Rule)throw new Error("toc.thematic.invalid_object");u()(e.Rules.Rule).forEach((e=>{if(!e.PolygonSymbolizer&&!e.LineSymbolizer&&!e.PointSymbolizer)throw new Error("toc.thematic.invalid_geometry")}))})(e);const a=u()(e.Rules.Rule||[]);return a.map(((e,r)=>({title:e.Title,color:O(e),type:L(e),..."uniqueInterval"===t?{unique:e.Filter.PropertyIsEqualTo&&e.Filter.PropertyIsEqualTo.Literal}:{min:A([e.Filter.And&&(e.Filter.And.PropertyIsGreaterThanOrEqualTo||e.Filter.And.PropertyIsGreaterThan).Literal,e.Filter.PropertyIsEqualTo&&e.Filter.PropertyIsEqualTo.Literal,r===a.length-1&&e?.Filter?.PropertyIsGreaterThanOrEqualTo?.Literal]),max:A([e.Filter.And&&(e.Filter.And.PropertyIsLessThanOrEqualTo||e.Filter.And.PropertyIsLessThan).Literal,e.Filter.PropertyIsEqualTo&&e.Filter.PropertyIsEqualTo.Literal,0===r&&e?.Filter?.PropertyIsLessThan?.Literal])}})))||[]},readRasterClassification:e=>{const t=u()(e?.Rules?.Rule);return(t[0]?.RasterSymbolizer?.ColorMap?.ColorMapEntry||[]).map((e=>({color:e["@color"],opacity:void 0===e["@opacity"]?1:e["@opacity"],label:e["@label"],quantity:parseFloat(e["@quantity"])})))},methods:["equalInterval","quantile","jenks"],getThematicParameters:e=>e.map((e=>e.type&&M.standardParams[e.type]&&b()({},M.standardParams[e.type],e)||e)),standardParams:{aggregate:{title:"toc.thematic.classification_aggregate",defaultValue:"sum",values:[{name:"toc.thematic.values.sum",value:"sum"},{name:"toc.thematic.values.avg",value:"avg"},{name:"toc.thematic.values.count",value:"count"},{name:"toc.thematic.values.min",value:"min"},{name:"toc.thematic.values.max",value:"max"}]}},getColor:P,getColors:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return(t?t.thematic.colors||[...e,...t.thematic.additionalColors||[]]:r?[r,...e]:[...e]).map((e=>!h()(e.colors)&&e.colors.length>=a?e:b()({},e,{colors:S().scale(e.colors).colors(a)})))},hasThematicStyle:e=>!!(e&&e.params&&e.params.SLD),removeThematicStyle:e=>{const{SLD:t,viewparams:a,...r}=e;return b()({},r,{SLD:null,viewparams:null})},defaultParams:{attribute:"",intervals:5,method:"equalInterval",ramp:"red",field:"",open:!1,strokeWeight:.2,strokeColor:"#ff0000",strokeOn:!1}},R=M},546737:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(727418),i=a.n(r),l=a(333101),n=a(101497),o=a(458698),s=a(49977),c=a.n(s),m=a(470509),u=a.n(m),d=a(91175),y=a.n(d),p=a(612912),h=a(510644),f=a(152543);const g={ThematicLayerPlugin:i()({loadPlugin:e=>{Promise.all([a.e(9886),a.e(221),a.e(4877)]).then(a.bind(a,284877)).then((t=>{const a=(0,f.$j)((e=>{const t=e.thematic&&e.thematic.colors;return i()({},{layer:(0,p.Iz)(e),fields:e&&e.thematic&&e.thematic.fields||[],fieldsLoading:{status:e&&e.thematic&&e.thematic.loadingFields||!1,error:e&&e.thematic&&e.thematic.errorFields||null},classification:e&&e.thematic&&e.thematic.classification||[],classificationLoading:{status:e&&e.thematic&&e.thematic.loadingClassification||!1,error:e&&e.thematic&&e.thematic.errorClassification||null},canEditThematic:(0,h.qg)(e),initialParams:i()(o.Z.defaultParams,t?{ramp:t[0].name}:{}),methods:o.Z.methods,colors:t,adminCfg:e&&e.thematic&&e.thematic.adminCfg,applyEnabled:e&&e.thematic&&e.thematic.dirty||!1,invalidInputs:e&&e.thematic&&e.thematic.invalidInputs||{},geometryType:e&&e.thematic&&e.thematic.classification&&e.thematic.classification.length&&e.thematic.classification[0].type||"Polygon"},o.Z)}),{onChangeConfiguration:n.A7,onChangeLayerParams:l.vO,onSwitchLayer:n.lm,onClassify:n.T8,onApplyStyle:n.IO,onDirtyStyle:n.wX,onInvalidInput:n.kE,onValidInput:n.RO})(t.default);e(a)}))},enabler:e=>e.layerSettings&&e.layerSettings.expanded},{TOCItemsSettings:{priority:1,name:"ThematicLayer",selector:e=>e?.element?.search,container:"TOCItemSettings",target:"style"}}),reducers:{thematic:a(359702).Z},epics:(v=a(458698).Z,{loadFieldsEpic:e=>e.ofType(n.uA).switchMap((e=>{if(e.layer.thematic&&e.layer.thematic.fields)return c().Observable.of((0,n.Fn)(e.layer,e.layer.thematic.fields)).delay(0);const t=v.getFieldsService(e.layer);return c().Observable.defer((()=>u().get(t))).switchMap((t=>c().Observable.of((0,n.Fn)(e.layer,v.readFields(t.data))))).catch((t=>c().Observable.of((0,n.hJ)(e.layer,t))))})),loadClassificationEpic:e=>e.ofType(n.ME).switchMap((e=>{const t=v.getStyleMetadataService(e.layer,e.params),a=e.params?.method;return c().Observable.defer((()=>u().get(t))).switchMap((t=>c().Observable.of((0,n.I3)(e.layer,v.readClassification(t.data,a))))).catch((t=>c().Observable.of((0,n.nh)(e.layer,t))))})),removeThematicEpic:(e,t)=>e.ofType(l.K$).switchMap((e=>{const a=y()(t.getState().layers.flat.filter((t=>t.id===e.node)));if(a&&null===e.options.thematic&&v.hasThematicStyle(a)){const t=v.removeThematicStyle(a.params);return c().Observable.of((0,l.vO)(e.node,t))}return c().Observable.empty()}))})};var v},359702:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(101497),i=a(333101),l=a(727418),n=a.n(l);const o={loadingFields:!1,errorFields:null,loadingClassification:!1,errorClassification:null,customClassification:!1,dirty:!1,adminCfg:{open:!1,current:null,error:null},invalidInputs:{}},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.g6:return n()({},o);case r.uA:return n()({},e,{fields:null,loadingFields:!0,errorFields:null});case r.DN:return n()({},e,{fields:t.fields,loadingFields:!1,errorFields:null});case r.C$:return n()({},e,{fields:null,loadingFields:!1,errorFields:t.error});case r.ME:return n()({},e,{loadingClassification:!0,errorClassification:null});case r.Au:return n()({},e,{classification:t.classification,loadingClassification:!1,errorClassification:null,customClassification:!1});case r.Ty:return n()({},e,{classification:null,loadingClassification:!1,errorClassification:t.error,customClassification:!1});case r.V9:return n()({},e,{adminCfg:{open:t.editEnabled,current:t.current,error:t.error}});case r.kc:return n()({},e,{dirty:t.dirty});case r.H2:return t.valid?n()({},e,{invalidInputs:Object.keys(e.invalidInputs).reduce(((e,a)=>a===t.input?e:[...e,a]),{})}):n()({},e,{invalidInputs:n()({},e.invalidInputs,{[t.input]:{message:t.message,params:t.params||{}}})});default:return e}}}}]);