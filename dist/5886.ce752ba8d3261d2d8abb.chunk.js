(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5886],{245886:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var n=a(124852),r=a.n(n),i=a(630294),l=a(406714),o=a(847911),s=(a(707169),a(967134)),c=a(400043),m=a(74998),d=a.n(m);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}const u=function(e){let{title:t,children:a,initialExpanded:l,onExpand:o=(()=>{})}=e;const[s,c]=(0,n.useState)(l);return r().createElement(r().Fragment,null,r().createElement("div",{className:"ms-map-views-section"},r().createElement(i.Button,{className:"square-button-md no-border",onClick:function(){const e=!s;c(e),o(e)},style:{borderRadius:"50%",marginRight:4}},r().createElement(i.Glyphicon,{glyph:s?"chevron-down":"chevron-right"})),r().createElement("div",{className:"ms-map-views-section-title"},t)),s?r().createElement("div",{style:{paddingLeft:34}},a):null)};var g=a(804504);const y=(0,o.Z)("onEditorStateChange","editorState")((function(e){let{wrapperClassName:t="ms-compact-text-editor",...a}=e;return r().createElement(s.Editor,p({},a,{editorStyle:{minHeight:200},wrapperClassName:t,toolbar:{options:["fontFamily","blockType","inline","textAlign","list","link","colorPicker","remove","image","embedded"],image:{urlEnabled:!0,uploadEnabled:!1,alignmentEnabled:!1,uploadCallback:e=>new Promise(((t,a)=>{const n=new FileReader;n.addEventListener("load",(()=>{var e,a;(e=n.result,a={size:500,type:"image/jpeg",quality:.8},new Promise(((t,n)=>{const{size:r,type:i="image/png",quality:l=.9}=a||{},o=new Image;o.crossOrigin="anonymous",o.onload=()=>{const{naturalWidth:e,naturalHeight:a}=o,n=r,s=r/(e/a),c=document.createElement("canvas");c.setAttribute("width",n),c.setAttribute("height",s),c.getContext("2d").drawImage(o,0,0,n,s);const m=c.toDataURL(i,l);t(m)},o.onerror=e=>{n(e)},o.src=e}))).then((e=>{t({data:{link:e}})}))})),e?n.readAsDataURL(e):a()})),previewImage:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!1,mandatory:!1},defaultSize:{height:"auto",width:"100%"}},fontFamily:{options:c.Km},link:{inDropdown:!1,showOpenOptionOnHover:!0,defaultTargetOption:"_self",options:["link","unlink"]},blockType:{inDropdown:!0,options:["Normal","H1","H2","H3","H4","H5","H6","Blockquote","Code"]},inline:{inDropdown:!0,options:["bold","italic","underline","strikethrough","monospace"]},textAlign:{inDropdown:!0},list:{inDropdown:!0},embedded:{embedCallback:e=>{const t=/<iframe.*? src="(.*?)"/.exec(d()(e));return t&&t[1]||e},defaultSize:{height:"auto",width:"100%"}}}}))}));var E=a(694149),h=a(414293),v=a.n(h);const b=e=>v()(e)?e:parseFloat(e.toFixed(6)),w=e=>v()(e)?e:Math.round(e);var f=a(883953);var I=a(743129),C=a(3703);var L=a(23888);const k=(0,a(36549).Z)(L.Z),N=function(e){let{layer:t={},onChange:a,onReset:l,title:o,updateLayerRequest:s,vectorLayers:c,clippingFeatures:m,clippingLayerResource:d,initialExpanded:p}=e;const[u,y]=(0,n.useState)(p),[h,v]=(0,n.useState)(!1),[b,w]=(0,n.useState)(!1),C=!["terrain"].includes(t.type),L=!["3dtiles","terrain"].includes(t.type),N=!!["3dtiles","terrain"].includes(t.type),S=(0,f.er)(m);return r().createElement("li",{className:"ms-map-views-layer-node"+(t.changed?" changed":"")},r().createElement("div",{className:"ms-map-views-layer-node-head"},r().createElement(k,{className:"square-button-md no-border",style:{borderRadius:"50%",marginRight:4},onClick:()=>y(!u)},r().createElement(i.Glyphicon,{glyph:u?"chevron-down":"chevron-right"})),r().createElement("div",{className:"ms-map-views-layer-node-title"},o),r().createElement(i.ButtonGroup,null,t.changed&&r().createElement(k,{className:"square-button-md no-border",tooltipId:"mapViews.resetLayerOverrides",onClick:()=>l()},r().createElement(i.Glyphicon,{glyph:"refresh"})),C&&r().createElement(k,{className:"square-button-md no-border",tooltipId:t.visibility?"mapViews.hideLayer":"mapViews.showLayer",onClick:()=>a({visibility:!t.visibility})},r().createElement(i.Glyphicon,{glyph:t.visibility?"eye-open":"eye-close"})))),u&&r().createElement("div",{className:"ms-map-views-layer-node-body"},L&&r().createElement(i.FormGroup,{controlId:`map-views-layer-opacity-${t.id}`,className:"inline"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.layerOpacity"})),r().createElement(E.Z,{type:"number",min:0,max:1,step:.1,className:"opacity-field",fallbackValue:1,value:t.opacity,onChange:e=>a({opacity:e})})),N&&r().createElement("div",{className:"ms-map-views-layer-clipping"},r().createElement(i.FormGroup,{controlId:`map-views-layer-clipping-source-${t.id}`},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.clippingSourceLayer"})),r().createElement(I.ZP,{isLoading:h,value:d,options:c,onChange:e=>function(e){let{layer:t}=e;return w(!1),t?(v(!0),s({layer:t}).then((e=>{a({clippingLayerResourceId:e}),v(!1)})).catch((()=>{w(!0),v(!1)}))):a({clippingLayerResourceId:void 0,clippingPolygonFeatureId:void 0,clippingPolygonUnion:void 0})}({layer:e?.layer})}),b&&r().createElement(i.Alert,{bsStyle:"danger",style:{marginTop:8}},r().createElement(g.Z,{msgId:"mapViews.resourceLayerRequestError"}))),r().createElement(i.FormGroup,{controlId:`map-views-layer-clipping-feature-id-${t.id}`},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.clippingFeature"})),r().createElement(I.ZP,{value:t.clippingPolygonFeatureId?{value:t.clippingPolygonFeatureId,label:t.clippingPolygonFeatureId}:void 0,disabled:!t.clippingLayerResourceId,options:S?.map((e=>({value:e.id,label:e.id,feature:e}))),onChange:e=>a({clippingPolygonFeatureId:e?.feature?.id})}),!!t.clippingLayerResourceId&&0===S?.length&&r().createElement(i.Alert,{bsStyle:"danger",style:{marginTop:8}},r().createElement(g.Z,{msgId:"mapViews.clipPolygonFeaturesNotAvailable"}))),r().createElement(i.FormGroup,{controlId:`map-views-layer-clipping-inverse-${t.id}`},r().createElement(i.Checkbox,{checked:!!t.clippingPolygonUnion,disabled:!t.clippingPolygonFeatureId||h,onChange:()=>a({clippingPolygonUnion:!t.clippingPolygonUnion})},r().createElement(g.Z,{msgId:"mapViews.clippingInverse"}))),h&&r().createElement("div",{className:"ms-map-views-loading-mask"}))))};var S=a(731469);const T={[f.so.DESCRIPTION]:function(e){let{view:t={},expandedSections:a={},onExpandSection:o=(()=>{}),onChange:s=(()=>{})}=e;const[c,m]=(0,n.useState)((0,l.n0)(t.description||""));return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.description"}),initialExpanded:a.description,onExpand:e=>o({description:e})},r().createElement(i.FormGroup,{controlId:"map-views-description"},r().createElement(y,{editorState:c,onEditorStateChange:e=>{const t=(0,l.sc)(c);(0,l.sc)(e)!==t&&(s({description:(0,l.sc)(e)}),m(e))}})))},[f.so.POSITION]:function(e){let{view:t,expandedSections:a={},onExpandSection:n,onChange:l,onCaptureView:o,computeViewCoordinates:s}=e;const{center:c,cameraPosition:m}=t||{};function d(e){const a=s(t,{cameraPosition:m,center:c,...e});l(a)}return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.position"}),initialExpanded:a.positions,onExpand:e=>n({positions:e})},s&&r().createElement(r().Fragment,null,r().createElement("div",{className:"ms-map-views-position-container"},r().createElement("div",{className:"ms-map-views-position-title"},r().createElement(g.Z,{msgId:"mapViews.cameraPosition"})),r().createElement("div",{className:"ms-map-views-position-group"},r().createElement(i.FormGroup,{controlId:"map-views-camera-position-lng"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.longitude"})),r().createElement(E.Z,{type:"number",className:"coordinate-field",min:-180,max:180,step:1e-5,value:b(m?.longitude),onChange:e=>d({cameraPosition:{...m,longitude:parseFloat(e)}})})),r().createElement(i.FormGroup,{controlId:"map-views-camera-position-lat"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.latitude"})),r().createElement(E.Z,{type:"number",className:"coordinate-field",min:-90,max:90,step:1e-5,value:b(m?.latitude),onChange:e=>d({cameraPosition:{...m,latitude:parseFloat(e)}})})),r().createElement(i.FormGroup,{controlId:"map-views-camera-position-height"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.height"})),r().createElement(E.Z,{type:"number",className:"height-field",value:w(m?.height),onChange:e=>d({cameraPosition:{...m,height:parseFloat(e)}})})))),r().createElement("div",{className:"ms-map-views-position-container"},r().createElement("div",{className:"ms-map-views-position-title"},r().createElement(g.Z,{msgId:"mapViews.centerPosition"})),r().createElement("div",{className:"ms-map-views-position-group"},r().createElement(i.FormGroup,{controlId:"map-views-center-position-lng"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.longitude"})),r().createElement(E.Z,{type:"number",className:"coordinate-field",min:-180,max:180,step:1e-5,value:b(c?.longitude),onChange:e=>d({center:{...c,longitude:parseFloat(e)}})})),r().createElement(i.FormGroup,{controlId:"map-views-center-position-lat"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.latitude"})),r().createElement(E.Z,{type:"number",className:"coordinate-field",min:-90,max:90,step:1e-5,value:b(c?.latitude),onChange:e=>d({center:{...c,latitude:parseFloat(e)}})})),r().createElement(i.FormGroup,{controlId:"map-views-center-position-height"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.height"})),r().createElement(E.Z,{type:"number",className:"height-field",value:w(c?.height),onChange:e=>d({center:{...c,height:parseFloat(e)}})}))))),r().createElement(i.FormGroup,{controlId:"capture-view"},r().createElement(i.Button,{bsSize:"sm",bsStyle:"primary",onClick:()=>o(t)},r().createElement(g.Z,{msgId:"mapViews.captureThisViewPositions"}))))},[f.so.ANIMATION]:function(e){let{view:t,expandedSections:a={},onExpandSection:n,onChange:l}=e;return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.animation"}),initialExpanded:a.animation,onExpand:e=>n({animation:e})},r().createElement(i.FormGroup,{controlId:"map-views-animation-duration"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.durationLabel"})),r().createElement(E.Z,{min:1,className:"time-field",type:"number",fallbackValue:f.Ih.DURATION,value:t?.duration,onChange:e=>l({duration:e})})),r().createElement(i.FormGroup,{controlId:"map-views-animation-fly-to"},r().createElement(i.Checkbox,{checked:!!t?.flyTo,onChange:()=>l({flyTo:!t?.flyTo})},r().createElement(g.Z,{msgId:"mapViews.flyToLabel"}))))},[f.so.MASK]:function(e){let{view:t,expandedSections:a={},onExpandSection:l,onChange:o,resources:s,vectorLayers:c,updateLayerRequest:m,locale:d}=e;const[p,y]=(0,n.useState)(!1),[h,v]=(0,n.useState)(!1),b=s?.find((e=>e.id===t?.mask?.resourceId))?.data,w=c?.find((e=>e.id===b?.id)),L=b?{...b,...w}:void 0,k=t?.mask,N=t?.mask?.offset??f.Ih.MASK_OFFSET,S=!!k?.enabled,T=!!k?.inverse;function Z(e){let{layer:t,inverse:a,offset:n}=e;return v(!1),t?(y(!0),m({layer:t,inverse:a,offset:a?n:0}).then((e=>{o({mask:{...k,resourceId:e,inverse:a,offset:n}}),y(!1)})).catch((()=>{v(!0),o({mask:{...k,resourceId:void 0}}),y(!1)}))):o({mask:{...k,resourceId:void 0}})}const F=!!b?.collection?.features&&!b.collection.features.find((e=>{let{geometry:t}=e;return["Polygon","MultiPolygon"].includes(t.type)})),V=(0,f.cL)(c,t)?.find((e=>!!e.visibility));return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.mask"}),initialExpanded:a.mask,onExpand:e=>l({mask:e})},V&&r().createElement(i.Alert,{bsStyle:"warning",style:{marginTop:8}},r().createElement(g.Z,{msgId:"mapViews.maskOtherVisibleLayerWarning"})),r().createElement(i.FormGroup,{controlId:"map-views-mask-enable"},r().createElement(i.Checkbox,{checked:S,disabled:p,onChange:()=>o({mask:{...k,enabled:!S}})},r().createElement(g.Z,{msgId:"mapViews.maskEnable"}))),r().createElement(i.FormGroup,{controlId:"map-views-mask-layer"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.maskLayer"})),r().createElement(I.ZP,{disabled:!S,isLoading:p,value:L?{value:L?.id,label:(0,C.YQ)(L?.title,d)||L?.name||L?.id}:void 0,options:c?.map((e=>({label:(0,C.YQ)(e.title,d)||e.name||e.id,value:e.id,layer:e}))),onChange:e=>Z({layer:e?.layer,inverse:T,offset:N})}),F&&r().createElement(i.Alert,{bsStyle:"danger",style:{marginTop:8}},r().createElement(g.Z,{msgId:"mapViews.maskLayerPolygonError"})),h&&r().createElement(i.Alert,{bsStyle:"danger",style:{marginTop:8}},r().createElement(g.Z,{msgId:"mapViews.resourceLayerRequestError"}))),r().createElement(i.FormGroup,{controlId:"map-views-mask-inverse"},r().createElement(i.Checkbox,{checked:T,disabled:!S||!L||p,onChange:()=>Z({layer:L,inverse:!T,offset:N})},r().createElement(g.Z,{msgId:"mapViews.maskInverse"}))),r().createElement(i.FormGroup,{controlId:"map-views-mask-inverse-offset"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.maskInverseOffset"})),r().createElement(E.Z,{min:0,className:"distance-field",disabled:!S||!L||!T||p,type:"number",value:N,onChange:e=>Z({layer:L,inverse:T,offset:e})})),p&&r().createElement("div",{className:"ms-map-views-loading-mask"}))},[f.so.GLOBE_TRANSLUCENCY]:function(e){let{view:t,expandedSections:a={},onExpandSection:n,onChange:l}=e;const{globeTranslucency:o}=t||{},{enabled:s,fadeByDistance:c,opacity:m,nearDistance:d,farDistance:p}=o||{};return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.globeTranslucency"}),initialExpanded:a.translucency,onExpand:e=>n({translucency:e})},r().createElement(i.FormGroup,{controlId:"map-views-globe-translucency-enabled"},r().createElement(i.Checkbox,{checked:!!s,onChange:()=>l({globeTranslucency:{...o,enabled:!s}})},r().createElement(g.Z,{msgId:"mapViews.globeTranslucencyEnable"}))),r().createElement(i.FormGroup,{controlId:"map-views-globe-translucency-opacity"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.globeTranslucencyOpacity"})),r().createElement(E.Z,{disabled:!s,type:"number",min:0,max:1,step:.1,className:"opacity-field",fallbackValue:f.Ih.TRANSLUCENCY_OPACITY,value:m,onChange:e=>l({globeTranslucency:{...o,opacity:e}})})),r().createElement(i.FormGroup,{controlId:"map-views-globe-translucency-fade-by-distance"},r().createElement(i.Checkbox,{disabled:!s,checked:!!c,onChange:()=>l({globeTranslucency:{...o,fadeByDistance:!c}})},r().createElement(g.Z,{msgId:"mapViews.globeTranslucencyFadeByDistance"}))),r().createElement(i.FormGroup,{controlId:"map-views-globe-translucency-near-distance"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.globeTranslucencyNearDistance"})),r().createElement(E.Z,{className:"distance-field",disabled:!(s&&c),type:"number",min:0,max:(p??f.Ih.TRANSLUCENCY_FAR_DISTANCE)-1,fallbackValue:f.Ih.TRANSLUCENCY_NEAR_DISTANCE,value:d,onChange:e=>l({globeTranslucency:{...o,nearDistance:e}})})),r().createElement(i.FormGroup,{controlId:"map-views-globe-translucency-far-distance"},r().createElement(i.ControlLabel,null,r().createElement(g.Z,{msgId:"mapViews.globeTranslucencyFarDistance"})),r().createElement(E.Z,{className:"distance-field",disabled:!(s&&c),type:"number",min:(d??f.Ih.TRANSLUCENCY_NEAR_DISTANCE)+1,fallbackValue:f.Ih.TRANSLUCENCY_FAR_DISTANCE,value:p,onChange:e=>l({globeTranslucency:{...o,farDistance:e}})})))},[f.so.LAYERS_OPTIONS]:function(e){let{view:t,expandedSections:a={},onExpandSection:n,onChange:l,resources:o,layers:s,vectorLayers:c,updateLayerRequest:m,locale:d,onChangeLayer:p,onResetLayer:y,showClipGeometries:E,onShowClipGeometries:h,isTerrainAvailable:v,isClippingAvailable:b}=e;const w=o?.find((e=>e.id===t?.terrain?.clippingLayerResourceId))?.data,I=c?.find((e=>e.id===w?.id)),L=w?.collection?.features||I?.features,k=(0,f.cL)(s,t),S=c?.filter((e=>"wfs"===e.type||"vector"===e.type&&!!e?.features?.find((e=>{let{geometry:t}=e;return["Polygon"].includes(t?.type)})))).map((e=>({label:(0,C.YQ)(e.title,d)||e.name||e.id,value:e.id,layer:e})));return r().createElement(u,{title:r().createElement(g.Z,{msgId:"mapViews.layersOptions"}),initialExpanded:a.layers,onExpand:e=>n({layers:e})},b&&r().createElement("div",{className:"ms-map-views-layers-options-header"},r().createElement(i.FormGroup,{controlId:"map-views-show-clipping-geometries"},r().createElement(i.Checkbox,{checked:!!E,onChange:()=>h(!E)},r().createElement(g.Z,{msgId:"mapViews.showClippingLayersGeometries"})))),r().createElement("ul",{className:"ms-map-views-layers-options-body"},v&&r().createElement(N,{key:"terrain",title:r().createElement(g.Z,{msgId:"mapViews.terrain"}),layer:{...t?.terrain,type:"terrain",id:"terrain"},onChange:e=>l({terrain:{...t?.terrain,...e}}),updateLayerRequest:m,vectorLayers:S,clippingFeatures:L,clippingLayerResource:w?{value:w?.id,label:(0,C.YQ)(I?.title,d)||I?.name||I?.id,resource:w}:void 0}),0===k?.length?r().createElement(g.Z,{msgId:"mapViews.addNewLayerToTheMap"}):[...k].reverse().map((e=>{const a=o?.find((t=>{let{id:a}=t;return a===e.clippingLayerResourceId}))?.data,n=c?.find((e=>{let{id:t}=e;return t===a?.id})),i=a?.collection?.features||n?.features;return r().createElement(N,{key:`${t?.id}-${e.id}`,layer:e,title:(0,C.YQ)(e.title,d)||e.name||e.id,onChange:t=>p(e.id,t),onReset:()=>y(e.id),updateLayerRequest:m,vectorLayers:S,clippingFeatures:i,clippingLayerResource:a?{value:a?.id,label:(0,C.YQ)(n?.title,d)||n?.name||n?.id,resource:a}:void 0})}))))}},Z=function(e){let{view:t,api:a,layers:n=[],onChange:l,onUpdateResource:o=(()=>{}),onCaptureView:s,locale:c,resources:m=[],expandedSections:d={},onExpandSection:p=(()=>{}),showClipGeometries:u,onShowClipGeometries:y=(()=>{})}=e;const E=n.filter((e=>{let{type:t,features:a}=e;return"wfs"===t||"vector"===t&&!!a?.find((e=>{let{geometry:t}=e;return["Polygon","MultiPolygon"].includes(t?.type)}))}));function h(e){l({...t,...e})}function v(e,a){const n=t?.layers?.find((t=>t.id===e)),r=n?(t?.layers||[]).map((t=>t.id===e?{...n,...a}:t)):[...t?.layers||[],{id:e,...a}];l({...t,layers:r})}function b(e){const a=t?.layers?.filter((t=>t.id!==e));l({...t,layers:a})}function w(){let{layer:e,inverse:t=!1,offset:a=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,S.y)({layer:e,inverse:t,offset:a,resources:m}).then((e=>{let{updated:t,...a}=e;return t&&o(a.id,a.data),a.id}))}return r().createElement("div",{className:"ms-map-views-settings"},r().createElement("form",null,a?.options?.settings?.map((e=>{const i=T[e];return r().createElement(i,{key:e,isTerrainAvailable:!(a?.options?.unsupportedLayers||[]).includes("terrain"),isClippingAvailable:!(a?.options?.unsupportedLayers||[]).includes("3dtiles"),computeViewCoordinates:a.computeViewCoordinates,view:t,expandedSections:d,onExpandSection:p,onChange:h,resources:m,layers:n.filter((e=>{let{type:t}=e;return!(a?.options?.unsupportedLayers||[]).includes(t)})),vectorLayers:E,updateLayerRequest:w,locale:c,onChangeLayer:v,onResetLayer:b,showClipGeometries:u,onShowClipGeometries:y,onCaptureView:s})}))),t?.globeTranslucency?.enabled&&t?.mask?.enabled&&r().createElement(i.Alert,{bsStyle:"warning",style:{bottom:0,position:"sticky",margin:0,zIndex:30}},r().createElement(g.Z,{msgId:"mapViews.maskWithGlobeTranslucencyWarning"})))}},406714:(e,t,a)=>{"use strict";a.d(t,{n0:()=>m,sc:()=>d});var n=a(909041),r=a(689265),i=a.n(r),l=a(717247),o=a.n(l);const s=e=>{let t;if(e instanceof HTMLAnchorElement){const a={};if(e.dataset&&void 0!==e.dataset.mention)a.url=e.href,a.text=e.innerHTML,a.value=e.dataset.value,t=n.Entity.__create("MENTION","IMMUTABLE",a);else{a.url=e.getAttribute&&e.getAttribute("href")||e.href,a.title=e.innerHTML,a.targetOption=e.target;const r=e.getAttribute&&e.getAttribute("data-geostory-interaction-type"),i=e.getAttribute&&e.getAttribute("data-geostory-interaction-params"),l=e.getAttribute&&e.getAttribute("data-geostory-interaction-name");let o={};l&&i&&r&&(o["data-geostory-interaction-type"]=r,o["data-geostory-interaction-params"]=i,o["data-geostory-interaction-name"]=l),a.attributes=o,t=n.Entity.__create("LINK","MUTABLE",a)}}return t},c=(e,t)=>{if("MENTION"===e.type)return`< href="${e.data.url}" class="wysiwyg-mention" data-mention data-value="${e.data.value}">${t}</a>`;if("LINK"===e.type){const a=e.data.targetOption||"_self",n=e.data.attributes;return n&&n["data-geostory-interaction-type"]?`<a data-geostory-interaction-name="${n["data-geostory-interaction-name"]}" data-geostory-interaction-type="${n["data-geostory-interaction-type"]}" data-geostory-interaction-params="${n["data-geostory-interaction-params"]}" onclick="__geostory_interaction(type='scrollTo', '${n["data-geostory-interaction-params"]}')">${t}</a>`:`<a href="${e.data.url}" target="${a}">${t}</a>`}if("IMAGE"===e.type){const t=e.data.alignment,a=t&&"none"!==t?`float: ${t};`:"display: block; margin: 0 auto 0 auto;";return`<img src="${e.data.src}" alt="${e.data.alt}" style="height: ${e.data.height}; width: ${e.data.width}; ${a}" />`}return"EMBEDDED_LINK"===e.type?`<iframe width="${e.data.width}" height="${e.data.height}" src="${e.data.src}" frameBorder="0"></iframe>`:t},m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const t=o()(e,null,s),a=n.ContentState.createFromBlockArray(t.contentBlocks);return n.EditorState.createWithContent(a)},d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e){const a=1!==(0,n.convertToRaw)(e.getCurrentContent()).blocks.length||(0,n.convertToRaw)(e.getCurrentContent()).blocks[0].text,r=i()((0,n.convertToRaw)(e.getCurrentContent()),null,null,c);return a?r:t}return t}}}]);