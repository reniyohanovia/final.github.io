(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5210],{35210:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var i=a(124852),l=a.n(i),s=a(414293),o=a.n(s),n=a(630294),d=a(472986),r=a.n(d),c=a(8204),m=a(804504),p=a(446524),u=a(406557),h=a.n(u),w=a(173581);const b={component:e=>{let{modules:t={toolbar:[[{size:["small",!1,"large","huge"]},"bold","italic","underline","blockquote"],[{list:"bullet"},{align:[]}],[{color:[]},{background:[]},"clean"],["image","link"]]},editorState:a,onUpdateEditorState:i=(()=>{})}=e;return l().createElement("div",{id:"ms-details-editor"},l().createElement(w.Z,{bounds:"#ms-details-editor",value:a||"<p><br></p>",onChange:e=>{i(e)},modules:t}))},detailsTextToEditorState:h(),editorStateToDetailsText:h(),containerBodyClass:"ms-details-quill-editor"};var g=a(867076),v=a(592172),S=a(406714);const E={QuillEditor:b,DraftJSEditor:{component:(0,g.compose)((0,g.withProps)((e=>{let{editorState:t,onUpdateEditorState:a=(()=>{})}=e;return{onEditorStateChange:e=>{a(e)},editorState:t,toolbar:{options:["fontFamily","blockType","inline","textAlign","colorPicker","list","link","remove","image"],image:{className:void 0,component:void 0,popupClassName:void 0,urlEnabled:!0,uploadEnabled:!0,alignmentEnabled:!0,uploadCallback:e=>new Promise(((t,a)=>{const i=new FileReader;i.addEventListener("load",(()=>{t({data:{link:i.result}})})),e?i.readAsDataURL(e):a()})),previewImage:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",alt:{present:!1,mandatory:!1},defaultSize:{height:"auto",width:"auto"}}}}})),v.Sq)(),detailsTextToEditorState:S.n0,editorStateToDetailsText:S.sc,containerBodyClass:"ms-details-draftjs-editor"}};function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},D.apply(this,arguments)}const k=(0,g.compose)((0,g.withState)("showPreview","setShowPreview",!1),(0,g.withHandlers)({onShowPreview:e=>{let{setShowPreview:t=(()=>{})}=e;return()=>{t(!0)}},onHidePreview:e=>{let{setShowPreview:t=(()=>{})}=e;return()=>{t(!1)}}}))((e=>{let{loading:t=!1,showPreview:a=!1,editDetailsDisabled:i,detailsText:s,settings:d={},canUndo:p=!1,onShowPreview:u=(()=>{}),onHidePreview:h=(()=>{}),onUndo:w=(()=>{}),onShowDetailsSheet:b=(()=>{}),onUpdate:g=(()=>{}),onUpdateResource:v=(()=>{}),onDelete:S=(()=>{})}=e;return l().createElement("div",{className:"ms-section"+(a?" ms-transition":"")},l().createElement("div",{className:"mapstore-block-width"},l().createElement(n.Row,null,l().createElement(n.Col,{xs:6},l().createElement("div",{className:"m-label"},!t&&o()(s)?l().createElement(m.Z,{msgId:"map.details.add"}):l().createElement(m.Z,{msgId:"map.details.rowTitle"}))),l().createElement(n.Col,{xs:6},l().createElement("div",{className:"ms-details-sheet"},l().createElement("div",{className:"pull-right"},t?l().createElement(r(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}):null,!t&&l().createElement(c.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:a?"eye-open":"eye-close",visible:!!s,onClick:()=>a?h():u(),disabled:t,tooltipId:a?"map.details.hidePreview":"map.details.showPreview"},{glyph:"undo",tooltipId:"map.details.undo",visible:p,onClick:()=>w(),disabled:t},{glyph:"pencil-add",tooltipId:"map.details.add",visible:!s,onClick:()=>{b(),g()},disabled:t},{glyph:"pencil",tooltipId:"map.details.edit",visible:!!s&&!i,onClick:()=>{b(),g(s)},disabled:t},{glyph:"new-window",tooltipId:"map.details.showAsModal",visible:!!s,bsStyle:d.showAsModal?"success":"default",onClick:()=>v("attributes.detailsSettings.showAsModal",!d.showAsModal)},{glyph:"pushpin",tooltipId:"map.details.showAtStartup",visible:!!s,bsStyle:d.showAtStartup?"success":"default",onClick:()=>v("attributes.detailsSettings.showAtStartup",!d.showAtStartup)},{glyph:"trash",tooltipId:"map.details.delete",visible:!!s,onClick:()=>S(),disabled:t}]})))))),s&&l().createElement("div",{className:"ms-details-preview-container"},""!==s?l().createElement("div",{className:"ms-details-preview",dangerouslySetInnerHTML:{__html:s}}):l().createElement("div",{className:"ms-details-preview"}," ",l().createElement(m.Z,{msgId:"maps.feedback.noDetailsAvailable"}))))})),T=e=>{let{loading:t,resource:a={},editor:i="DraftJSEditor",editorProps:s={},editorState:n,savedDetailsText:d,detailsBackup:r,showDetailsSheet:c,setEditorState:m=(()=>{}),setDetailsBackup:u=(()=>{}),onUpdateResource:h=(()=>{}),onUpdateLinkedResource:w=(()=>{}),onShowDetailsSheet:b=(()=>{}),onHideDetailsSheet:g=(()=>{})}=e;const{component:v,editorStateToDetailsText:S,detailsTextToEditorState:T,containerBodyClass:y}=E[i];return l().createElement(l().Fragment,null,l().createElement(k,{loading:t||a.saving,detailsText:d,detailsBackup:r,editDetailsDisabled:!o()(a.canEdit)&&!a.canEdit,settings:a.attributes?.detailsSettings,canUndo:!!r,onUndo:()=>{w("details",r,"DETAILS"),u()},onUpdate:e=>m(T(e)),onUpdateResource:h,onShowDetailsSheet:b,onDelete:()=>{u(d),w("details","NODATA","DETAILS")}}),l().createElement(p.Z,{loading:t,show:c,title:a.metadata?.name,detailsText:n,bodyClassName:y,onClose:()=>{g()},onSave:e=>{let t=S(e);g(),u(),t&&"<p><br></p>"!==t||(t=d),w("details",t||"NODATA","DETAILS")}},l().createElement(v,D({},s,{editorState:n,onUpdateEditorState:m}))))}},173581:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var i=a(124852);const l=(0,a(297977).Z)()((0,i.lazy)((()=>Promise.all([a.e(1167),a.e(9715)]).then(a.bind(a,439715)))))}}]);