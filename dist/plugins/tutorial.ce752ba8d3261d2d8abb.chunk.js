(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5417],{170694:(t,e,o)=>{"use strict";o.d(e,{Jz:()=>r,xv:()=>s});const r="TOGGLE_3D";function s(t,e){return{type:r,enable:t,originalMapType:e}}},58062:(t,e,o)=>{"use strict";o.d(e,{Z:()=>S});var r=o(45697),s=o.n(r),n=o(124852),i=o.n(n),l=o(131400),a=o(810719),c=o.n(a),u=o(830498),p=o.n(u),d=o(97501),m=o.n(d),h=o(568561),g=o.n(h),b=o(393306),f=o.n(b),y=o(784990),v=o.n(y),x=o(517363),E=o.n(x);function T(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class w extends i().Component{render(){return this.props.touch?i().createElement("div",null,i().createElement("table",null,i().createElement("tbody",null,i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:g(),width:"70",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#66ccff"}},i().createElement(l.v0,{msgId:"tutorial.cesium.pan"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.oneDrag"})))),i().createElement("tr",{style:{height:10}}),i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:E(),width:"70",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#65fd00"}},i().createElement(l.v0,{msgId:"tutorial.cesium.zoom"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.twoPinch"})))),i().createElement("tr",{style:{height:10}}),i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:v(),width:"70",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#ffd800"}},i().createElement(l.v0,{msgId:"tutorial.cesium.tilt"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.twoDragSame"})))),i().createElement("tr",{style:{height:10}}),i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:f(),width:"70",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#d800d8"}},i().createElement(l.v0,{msgId:"tutorial.cesium.rotate"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.twoDragOpposite"}))))))):i().createElement("div",null,i().createElement("table",null,i().createElement("tbody",null,i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:c(),width:"48",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#66ccff"}},i().createElement(l.v0,{msgId:"tutorial.cesium.pan"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.leftClick"})))),i().createElement("tr",{style:{height:10}}),i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:m(),width:"48",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#65fd00"}},i().createElement(l.v0,{msgId:"tutorial.cesium.zoom"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.rightClick"})))),i().createElement("tr",{style:{height:10}}),i().createElement("tr",null,i().createElement("td",null,i().createElement("img",{src:p(),width:"48",height:"48"})),i().createElement("td",null,i().createElement("div",{style:{color:"#ffd800"}},i().createElement(l.v0,{msgId:"tutorial.cesium.rotate"})),i().createElement("div",null,i().createElement(l.v0,{msgId:"tutorial.cesium.middleClick"})))))))}}T(w,"propTypes",{touch:s().bool}),T(w,"defaultProps",{touch:!1});const S=w},150739:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>K});var r=o(727418),s=o.n(r),n=o(124852),i=o.n(n),l=o(630294),a=o(171703),c=o(12838),u=o(22222),p=o(968203),d=o(131400),m=o(45697),h=o.n(m),g=o(949972),b=o.n(g),f=o(91175),y=o.n(f),v=o(466737),x=(o(319983),o(893379)),E=o.n(x),T=o(591875);function w(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}E()(T.Z,{insert:"head",singleton:!1}),T.Z.locals;class S extends i().Component{constructor(){super(...arguments),w(this,"state",{checkAction:{}}),w(this,"onTour",(t=>{if(this.props.steps.length>0&&t&&t.type){document.querySelector(t?.step?.selector)?.scrollIntoView(this.props.scrollIntoViewOptions);const e=t.type.split(":");("tooltip"!==e[0]&&"before"===e[1]||"start"===t.action||"target_not_found"===e[1]||"finished"===t.type)&&this.props.actions.onUpdate(t,this.props.steps)}}))}componentDidMount(){let t=this.props.presetList[this.props.preset]||[],e=this.props.showCheckbox?i().createElement("div",{id:"tutorial-intro-checkbox-container"},i().createElement("input",{type:"checkbox",id:"tutorial-intro-checkbox",className:"tutorial-tooltip-intro-checkbox",onChange:this.props.actions.onDisable}),i().createElement("span",null,i().createElement(d.ZP.Message,{msgId:"tutorial.checkbox"}))):i().createElement("div",{id:"tutorial-intro-checkbox-container"});this.props.actions.onSetup("default",t,this.props.introStyle,e,this.props.defaultStep,s()({},this.props.presetList,{default_tutorial:t}))}UNSAFE_componentWillUpdate(t,e){if(this.props.steps.length>0){if(!this.props.toggle&&t.toggle)this.props.actions.onStart(),this.setState({checkAction:{}});else if(!this.state.checkAction[t.stepIndex]&&("run"===this.props.status&&"error"===t.status||"error"===this.props.status&&"error"===t.status)){const e=t.steps&&y()(t.steps.filter(((e,o)=>o===t.stepIndex))),o=(e&&e.action&&!this.state.checkAction[t.stepIndex]?t.stepIndex:null)||this.checkFirstValidStep(t.stepIndex,t.tourAction);this.restartTour(o,{[o]:!0})}else"run"===this.props.status&&"close"===t.status&&(this.closeTour(),this.setState({checkAction:{}}));if(this.state.checkAction&&e.checkAction&&!this.state.checkAction[t.stepIndex]&&e.checkAction[t.stepIndex]){const e=y()(t.steps.filter(((e,o)=>o===t.stepIndex)));if(!(e&&e.selector&&document.querySelector(e.selector))){const e=this.checkFirstValidStep(t.stepIndex,t.tourAction);this.restartTour(e,{})}}}}componentWillUnmount(){this.props.actions.onClose(),this.props.actions.onReset()}render(){let t;return t=this.props.steps.length>0?i().createElement(b(),{ref:t=>this.joyride=t,steps:this.props.steps,stepIndex:this.props.stepIndex,run:this.props.run,autoStart:this.props.autoStart,keyboardNavigation:this.props.keyboardNavigation,locale:{back:i().createElement(d.ZP.Message,{msgId:"tutorial.back"}),close:i().createElement(d.ZP.Message,{msgId:"tutorial.close"}),last:i().createElement(d.ZP.Message,{msgId:"tutorial.last"}),next:i().createElement(d.ZP.Message,{msgId:"tutorial.next"}),skip:i().createElement(d.ZP.Message,{msgId:"tutorial.skip"})},resizeDebounce:this.props.resizeDebounce,resizeDebounceDelay:this.props.resizeDebounceDelay,holePadding:this.props.holePadding,scrollOffset:this.props.scrollOffset,scrollToSteps:this.props.scrollToSteps,scrollToFirstStep:this.props.scrollToFirstStep,showBackButton:this.props.showBackButton,showOverlay:this.props.showOverlay,allowClicksThruHole:this.props.allowClicksThruHole,showSkipButton:this.props.showSkipButton,showStepsProgress:this.props.showStepsProgress,tooltipOffset:this.props.tooltipOffset,disableOverlay:this.props.disableOverlay,type:"continuous",debug:!1,callback:this.onTour}):i().createElement("div",{className:"tutorial-joyride-placeholder"}),i().createElement(v.Z,null,i().createElement("div",null,t,i().createElement("div",{id:"intro-tutorial",className:"tutorial-presentation-position",style:{top:this.props.introPosition}})))}checkFirstValidStep(t,e){let o=[].concat(this.props.steps);return"back"===e?(o=o.slice(0,t),o.sort(((t,e)=>e.index-t.index))):(o=o.slice(t+1,this.props.steps.length),o.sort(((t,e)=>t.index-e.index))),o=o.filter((t=>document.querySelector(t.selector))).map((t=>t.index)),o&&o.length>0?o[0]:-1}closeTour(){const t=document.querySelector(this.props.steps[0].selector)?0:this.checkFirstValidStep(0,"next");-1===t?this.props.actions.onReset():this.joyride.setState({index:t,shouldRedraw:!0}),this.props.actions.onClose()}restartTour(t,e){-1===t?this.closeTour():(this.joyride.setState({index:t,isRunning:!0,shouldRedraw:!0,shouldRenderTooltip:!0}),this.props.actions.onStart(),this.setState({checkAction:e}))}}w(S,"propTypes",{actions:h().object,allowClicksThruHole:h().bool,autoStart:h().bool,defaultStep:h().object,disableOverlay:h().bool,holePadding:h().number,intro:h().bool,introPosition:h().number,introStyle:h().object,keyboardNavigation:h().bool,preset:h().string,presetList:h().object,run:h().bool,resizeDebounce:h().bool,resizeDebounceDelay:h().number,scrollIntoViewOptions:h().object,scrollOffset:h().number,scrollToFirstStep:h().bool,scrollToSteps:h().bool,showBackButton:h().bool,showCheckbox:h().bool,showOverlay:h().bool,showSkipButton:h().bool,showStepsProgress:h().bool,status:h().string,steps:h().array,stepIndex:h().number,toggle:h().bool,tooltipOffset:h().number,tourAction:h().string}),w(S,"defaultProps",{toggle:!1,status:"run",preset:"default_tutorial",presetList:{},introPosition:(window.innerHeight-348)/2,showCheckbox:!0,defaultStep:{title:"",text:"",position:"bottom",type:"click"},introStyle:{backgroundColor:"transparent",color:"#fff",mainColor:"#fff",textAlign:"center",header:{padding:5,fontFamily:"Georgia, serif",fontSize:"2.8em"},main:{fontSize:"1.0em",padding:5},footer:{padding:10},button:{color:"#fff"},close:{display:"none"},skip:{color:"#fff"}},tourAction:"next",stepIndex:0,steps:[],run:!0,autoStart:!0,keyboardNavigation:!0,resizeDebounce:!1,resizeDebounceDelay:200,holePadding:0,scrollOffset:20,scrollToSteps:!0,scrollToFirstStep:!0,showBackButton:!0,showOverlay:!0,allowClicksThruHole:!0,showSkipButton:!0,showStepsProgress:!1,tooltipOffset:10,disableOverlay:!1,actions:{onSetup:()=>{},onStart:()=>{},onUpdate:()=>{},onDisable:()=>{},onReset:()=>{},onClose:()=>{}},scrollIntoViewOptions:{block:"end"}});const M=S;var k=o(49977),I=o.n(k),L=o(345366),H=o(859518),C=o(371714),P=o(170694),Z=o(796205),O=o(219002),D=o(918805),_=o(622901),A=o(275982),B=o(441609),z=o.n(B),V=o(701469),j=o.n(V),N=o(513218),G=o.n(N),F=o(272124),R=o(274363),$=o(189615);const q={closeTutorialEpic:t=>t.ofType(p.nX).audit((()=>t.ofType(P.Jz))).switchMap((()=>I().Observable.of((0,p.yq)()))),switchTutorialEpic:(t,e)=>t.ofType(A.nk,$.J).filter((t=>{const o=e.getState();return t.type===A.nk&&o.router?.location?.pathname||t.type===$.J&&t.reducers.includes("tutorial")})).switchMap((()=>t.ofType(C.IL,H.pP,p.as).take(1).switchMap((()=>{const t=e.getState(),o=t.router.location;let r=(s=o.pathname).match(/\/(viewer)\/(\w+)\/(\d+)/)&&s.replace(/\/(viewer)\/(\w+)\/(\d+)/,"$2")||s.match(/\/(\w+)\/(\d+)/)&&s.replace(/\/(\w+)\/(\d+)/,"$1")||s.match(/\/(\w+)\//)&&s.replace(/\/(\w+)\//,"$1");var s;const n=t.tutorial&&t.tutorial.presetList||{},i=t.browser,l=i&&i.mobile?"_mobile":"",a=r?"default":o.pathname||"default",c=t.tutorial&&t.tutorial.id;let u=r+l+"_tutorial";if(-1!==a.indexOf("context")){const e=(0,D.F4)(t)||"general-settings",o=_.TH[e];return I().Observable.of((0,p.VD)(o,n[o],null,null,null,c===o))}return r&&-1!==r?.indexOf("geostory")&&!z()(n)?"edit"===(0,Z.eK)(t)||r&&-1!==r?.indexOf("newgeostory")?(r="geostory",u="geostory_edit_tutorial",I().Observable.from([(0,p.VD)(r,n[u],null,null,null,!1)])):(u="geostory_view_tutorial",I().Observable.of((0,p.VD)(r,n[u],null,null,null,!0))):z()(n)?I().Observable.empty():I().Observable.of(n[u]?(0,p.VD)(r+l,n[u],null,null,null,c===r+l):(0,p.VD)(a+l,n["default"+l+"_tutorial"],null,null,null,c===a+l))})))),getActionsFromStepEpic:t=>t.ofType(p.j$).filter((t=>t.tour&&t.tour.step&&t.tour.step.action&&t.tour.step.action[t.tour.action])).switchMap((t=>j()(t.tour.step.action[t.tour.action])&&I().Observable.of(...t.tour.step.action[t.tour.action])||G()(t.tour.step.action[t.tour.action])&&I().Observable.of(t.tour.step.action[t.tour.action])||I().Observable.empty())),changePresetEpic:(t,e)=>t.ofType(p.rq).switchMap((t=>{let{preset:o,presetGroup:r,ignoreDisabled:s}=t;const n=e.getState(),i=n.tutorial&&n.tutorial.presetList||{},l=n.tutorial&&n.tutorial.checkbox,a=i[o];return a?I().Observable.of((0,p.VD)(o,a,null,l,null,!1,r,s)):I().Observable.empty()})),switchGeostoryTutorialEpic:(t,e)=>t.ofType(O.vb).switchMap((t=>{let{mode:o}=t;const r="geostory",s=e.getState(),n=s.tutorial&&s.tutorial.presetList||{},i=`_${o}`,l=z()(n)?null:n[r+i+"_tutorial"];let a=!1;try{a="true"===(0,F.ac)().getItem("mapstore.plugin.tutorial.geostory.disabled")}catch(t){console.error(t)}return l?I().Observable.from([(0,p.VD)(r,l,null,null,null,"view"===o||a)]):I().Observable.empty()})),openDetailsPanelEpic:(t,e)=>t.ofType(p.$H).filter((()=>(0,R.Od)(e.getState())?.info?.detailsSettings?.showAtStartup)).switchMap((()=>I().Observable.of((0,L.UJ)())))};var U=o(54281);const W={default_tutorial:o(594589).Z,default_mobile_tutorial:o(659736).Z,home_tutorial:o(466565).Z,cesium_tutorial:o(701631).Z,cesium_mobile_tutorial:o(282871).Z,dashboard_tutorial:o(845504).Z,contextcreator_generalsettings_tutorial:o(801334).Z,contextcreator_configuremap_tutorial:o(470234).Z,contextcreator_configureplugins_tutorial:o(10316).Z,geostory_view_tutorial:o(601444).Z,geostory_edit_tutorial:o(939617).Z},J=(0,u.P1)([U.N],(t=>({toggle:t.enabled,steps:t.steps,run:t.run,autoStart:t.start,status:t.status,tourAction:t.tourAction,stepIndex:t.stepIndex}))),X=(0,a.connect)(J,(t=>({actions:(0,c.DE)({onSetup:p.Zj,onStart:p.cL,onUpdate:p.y6,onDisable:p.qD,onReset:p.Oi,onClose:p.yq},t)})),((t,e,o)=>({...t,...e,...o,presetList:{...W,...o.presetList}})))(M),K={TutorialPlugin:s()(X,{BurgerMenu:{name:"tutorial",position:1200,tooltip:"tutorial.title",text:i().createElement(d.ZP.Message,{msgId:"tutorial.title"}),icon:i().createElement(l.Glyphicon,{glyph:"book"}),action:p.HC,priority:2,doNotHide:!0},SidebarMenu:{name:"tutorial",position:1200,tooltip:"tutorial.title",text:i().createElement(d.ZP.Message,{msgId:"tutorial.title"}),icon:i().createElement(l.Glyphicon,{glyph:"book"}),action:p.HC,selector:t=>({bsStyle:t.tutorial.enabled?"primary":"tray",active:t.tutorial.enabled||!1}),priority:1,doNotHide:!0}}),reducers:{tutorial:o(290087).Z},epics:q}},282871:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var r=o(124852),s=o.n(r),n=o(131400),i=o(58062);const l=[{translation:"introCesium",selector:"#intro-tutorial"},{title:s().createElement(n.ZP.Message,{msgId:"tutorial.cesium.title"}),text:s().createElement(i.Z,{touch:!0}),selector:"#map .cesium-viewer"},{translation:"drawerMenu",selector:".ms-drawer-menu-button"},{translation:"home",selector:"#home-button"},{translation:"searchButton",selector:"#search-help"},{translation:"burgerMenu",selector:"#mapstore-burger-menu"}]},701631:(t,e,o)=>{"use strict";o.d(e,{Z:()=>l});var r=o(124852),s=o.n(r),n=o(131400),i=o(58062);const l=[{translation:"introCesium",selector:"#intro-tutorial"},{title:s().createElement(n.ZP.Message,{msgId:"tutorial.cesium.title"}),text:s().createElement(i.Z,null),selector:"#map .cesium-viewer",position:"bottom"},{translation:"cesiumCompass",selector:"#distanceLegendDiv .compass"},{translationHTML:"drawerMenu",selector:".ms-drawer-menu-button"},{translation:"searchBar",selector:"#map-search-bar"},{translation:"home",selector:"#home-button"},{translation:"burgerMenu",selector:"#mapstore-burger-menu"},{translation:"fullscreen",selector:"#fullscreen-btn",position:"top"},{translation:"identifyButton",selector:"#navigationBar-container .glyphicon.glyphicon-option-horizontal",position:"top"}]},470234:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translationHTML:"contextCreator.configureMap.intro",selector:"#intro-tutorial"},{translationHTML:"contextCreator.configureMap.reloadMap",selector:".ms2-stepper .footer-button-toolbar-extra > button:nth-child(2)",position:"top"}]},10316:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var r=o(622901);const s=[{translationHTML:"contextCreator.configurePlugins.intro",selector:"#intro-tutorial"},{translationHTML:"contextCreator.configurePlugins.availablePlugins",selector:".ms2-transfer-left",position:"right"},{translationHTML:"contextCreator.configurePlugins.pluginManipulation",selector:".btn-group-vertical",position:"right"},{translationHTML:"contextCreator.configurePlugins.enabledPlugins",selector:".ms2-transfer-right",position:"left"},{translationHTML:"contextCreator.configurePlugins.userPlugin",selector:".ms2-transfer-right .mapstore-side-card:nth-child(1) .btn-group > span > button:nth-child(1)",position:"left"},{translationHTML:"contextCreator.configurePlugins.userPluginCheckbox",selector:".ms2-transfer-right .mapstore-side-card:nth-child(1) .btn-group > span > button:nth-child(2)",position:"left",action:{back:(0,r.$T)()}},{translationHTML:"contextCreator.configurePlugins.cfgTool",selector:".ms2-transfer-right .mapstore-side-card:nth-child(1) .btn-group > span > button:nth-child(3)",position:"left",action:{back:(0,r.$T)("configureplugins-cfgeditor"),next:(0,r.$T)("configureplugins-cfgeditor")}},{translationHTML:"contextCreator.configurePlugins.cfgEditor",selector:".plugin-configuration-editor",position:"left"},{translationHTML:"contextCreator.configurePlugins.documentationTool",selector:".ms2-transfer-right .mapstore-side-card:nth-child(1) .btn-group > span > a > button",position:"left"},{translationHTML:"contextCreator.configurePlugins.mapTemplatesTool",selector:".ms2-transfer-right .mapstore-side-card:nth-child(2) .btn-group > span > button:nth-child(1)",position:"top"},{translationHTML:"contextCreator.configurePlugins.extensions",selector:".ms2-transfer-left .ms2-transfer-title-area button",position:"right"},{translationHTML:"contextCreator.configurePlugins.extensionsDelete",selector:".ms2-transfer-left .mapstore-side-card:nth-child(2) .btn-group > span > button:nth-child(1)",position:"right"}]},801334:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translation:"contextCreator.generalSettings.intro",selector:"#intro-tutorial"},{translationHTML:"contextCreator.generalSettings.stepsOverview",selector:".ms2-stepper .footer-step-bar",position:"top"},{translationHTML:"contextCreator.generalSettings.navigation.next",selector:".ms2-stepper .footer-button-toolbar button:nth-child(1)",position:"top"},{translationHTML:"contextCreator.generalSettings.navigation.back",selector:".ms2-stepper .footer-button-toolbar button:nth-child(2)",position:"top"},{translationHTML:"contextCreator.generalSettings.navigation.close",selector:".ms2-stepper .footer-button-toolbar button:nth-child(3)",position:"top"},{translationHTML:"contextCreator.generalSettings.fields",selector:".general-settings-step > div"},{translationHTML:"contextCreator.generalSettings.showTutorial",selector:".ms2-stepper .footer-button-toolbar-extra > button",position:"top"}]},845504:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translation:"dashboardIntro",selector:"#intro-tutorial"},{translationHTML:"dashboardContainer",selector:".ms2-border-layout-content"},{translation:"dashboardAddWidget",selector:"#ms-add-card-dashboard",position:"right",action:{back:{type:"DASHBOARD:SET_EDITING",editing:!1},next:{type:"DASHBOARD:SET_EDITING",editing:!1}}},{translation:"dashboardBuilder",selector:".dashboard-editor.de-builder",position:"right",action:{next:{type:"WIDGETS:NEW"}}},{translationHTML:"dashboardAddChart",selector:".ms-widget-selector-chart",position:"right"},{translationHTML:"dashboardAddText",selector:".ms-widget-selector-text",position:"right"},{translationHTML:"dashboardAddTable",selector:".ms-widget-selector-table",position:"right"},{translationHTML:"dashboardAddCounter",selector:".ms-widget-selector-counter",position:"right"},{translationHTML:"dashboardAddMap",selector:".ms-widget-selector-map",position:"right"},{translation:"dashboardNav",selector:"#mapstore-navbar",position:"bottom"}]},659736:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translation:"drawerMenu",selector:".ms-drawer-menu-button"},{translation:"home",selector:"#home-button"},{translation:"searchButton",selector:"#search-help"},{translation:"burgerMenu",selector:"#mapstore-burger-menu"}]},594589:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translationHTML:"drawerMenu",selector:".ms-drawer-menu-button"},{translation:"searchBar",selector:"#map-search-bar"},{translation:"home",selector:"#home-button"},{translation:"burgerMenu",selector:"#mapstore-burger-menu"},{translation:"zoomInButton",selector:"#zoomin-btn",position:"top"},{translation:"zoomOutButton",selector:"#zoomout-btn",position:"top"},{translation:"fullscreen",selector:"#fullscreen-btn",position:"top"},{translation:"identifyButton",selector:"#navigationBar-container .glyphicon.glyphicon-option-horizontal",position:"top"}]},939617:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translationHTML:"geostoryIntro",selector:"#intro-tutorial"},{translation:"geostoryViewHeader",selector:"#mapstore-navbar",position:"bottom"},{translationHTML:"geostoryEditSidebar",selector:".ms-geostory-builder",position:"right"},{translationHTML:"geostoryEditSidebarToolbar",selector:".ms-geostory-builder-header",position:"bottom"},{translationHTML:"geostoryEditSidebarSettings",selector:"#geostory-builder-settings-button",position:"right"},{translationHTML:"geostoryEditContainer",selector:".ms-geostory",position:"auto"},{translationHTML:"geostoryEditAddbar",selector:".ms-sections-container > section",position:"auto"},{translationHTML:"geostoryEditMediaEditor",selector:".ms-geostory .ms-sections-container .ms-content-toolbar > div > span > button[data-button=pencil]",position:"bottom"}]},601444:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translationHTML:"geostoryIntro",selector:"#intro-tutorial"},{translation:"geostoryViewHeader",selector:"#mapstore-navbar",position:"bottom"},{translation:"geostoryViewNavItems",selector:".ms-geostory-navigation-navigable-items",position:"bottom"},{translation:"geostoryViewNavTitle",selector:".ms-geostory-navigation-title",position:"bottom"},{translation:"geostoryViewNavLogo",selector:".ms-geostory-navigation-logo",position:"bottom"},{translation:"geostoryViewContent",selector:".ms-geostory",position:"auto"},{translation:"geostoryViewEditButton",selector:".ms-geostory-navigation-toolbar #edit-story",position:"bottom"}]},466565:(t,e,o)=>{"use strict";o.d(e,{Z:()=>r});const r=[{translation:"mapType",selector:"#mapstore-maptype",position:"top"},{translation:"mapsGrid",selector:"#mapstore-maps-grid",position:"top"},{translation:"examples",selector:"#mapstore-examples-applications",position:"top"}]},290087:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var r=o(968203),s=o(727418),n=o.n(s),i=o(124852),l=o.n(i),a=o(131400),c=o(272124);const u={run:!1,start:!1,steps:[],enabled:!1,disabled:!1,status:"close",stepIndex:0,tourAction:"next",id:"",presetList:{}},p=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.nX:return n()({},t,{run:!0,start:!0,status:"run"});case r.as:return n()({},t,{style:e.style,defaultStep:e.defaultStep,checkbox:e.checkbox,presetList:e.presetList});case r.dM:let o={};o.steps=[].concat(e.steps),o.id=e.id,o.checkbox=e.checkbox?e.checkbox:n()({},t.checkbox),o.style=e.style?e.style:n()({},t.style),o.defaultStep=e.defaultStep?e.defaultStep:n()({},t.defaultStep),o.disabled=!1,o.presetGroup=e.presetGroup;let s=!1;try{s="true"===(0,c.ac)().getItem("mapstore.plugin.tutorial."+e.id+".disabled")}catch(t){console.error(t)}o.steps=o.steps.filter((t=>"#"===t?.selector?.substring(0,1)||"."===t?.selector?.substring(0,1))).map(((t,e)=>{let r=t.title?t.title:"";r=t.translation?l().createElement(a.ZP.Message,{msgId:"tutorial."+t.translation+".title"}):r,r=t.translationHTML?l().createElement(a.ZP.HTML,{msgId:"tutorial."+t.translationHTML+".title"}):r;let i=t.text?t.text:"";i=t.translation?l().createElement(a.ZP.Message,{msgId:"tutorial."+t.translation+".text"}):i,i=t.translationHTML?l().createElement(a.ZP.HTML,{msgId:"tutorial."+t.translationHTML+".text"}):i,i="#intro-tutorial"!==t.selector||s?i:l().createElement("div",null,l().createElement("div",null,i),o.checkbox);let c="#intro-tutorial"===t.selector?o.style:{},u="#intro-tutorial"===t.selector||t.isFixed||!1;return n()(c,t.style),n()({},o.defaultStep,t,{index:e,title:r,text:i,style:c,isFixed:u})}));const i=s&&!e.ignoreDisabled;let u=!1;return o.steps.forEach((t=>{"#intro-tutorial"===t.selector&&(u=!0)})),o.run=!0,o.start=!0,o.status="run",(i||!u||e.stop)&&(o.steps=o.steps.filter((t=>"#intro-tutorial"!==t.selector)).map(((t,e)=>n()({},t,{index:e}))),o.run=!1,o.start=!1,o.status="close"),n()({},t,o);case r.j$:let p={};return p.steps=[].concat(e.steps),p.run=!0,p.start=!0,p.status="run",p.stepIndex=t.stepIndex,p.tourAction=t.tourAction,e.tour&&("close"===e.tour.action||"finished"===e.tour.type?(p.run=!1,p.start=!1,p.status="close",p.steps=p.steps.filter((t=>"#intro-tutorial"!==t.selector)).map(((t,e)=>n()({},t,{index:e})))):"error:target_not_found"===e.tour.type&&(p.status="error",p.stepIndex=e.tour.index,p.tourAction=e.tour.action)),n()({},t,p);case r.V$:let d=!t.disabled;return(t.presetGroup||[t.id]).forEach((t=>{try{(0,c.ac)().setItem("mapstore.plugin.tutorial."+t+".disabled",d)}catch(t){console.error(t)}})),n()({},t,{disabled:d});case r.xW:return n()({},t,{steps:[],run:!1,start:!1,status:"close",enabled:!1});case r.$H:return n()({},t,{run:!1,start:!1,status:"close",enabled:!1});case r.X6:return n()({},t,{enabled:!t.enabled});default:return t}}},591875:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var r=o(923645),s=o.n(r)()((function(t){return t[1]}));s.push([t.id,"/**\n * Copyright 2017, GeoSolutions Sas.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n.ms2 .joyride-hole {\n    box-shadow: 0 0 0 9999px rgba(0,0,0,.75), 0 0 15px rgba(0,0,0,.75);\n}\n\n.ms2 .joyride-tooltip__button--secondary{\n    color: #888;\n}\n\n.ms2 .joyride-tooltip__header {\n    font-family: Georgia, serif;\n    font-size: 1.5em;\n    border-bottom: 1px solid #ddd;\n}\n\n.ms2 .joyride-tooltip__main {\n    font-size: 0.9em;\n}\n\n.ms2 .tutorial-presentation-position{\n    position: fixed;\n    width: 100%;\n    left: 0;\n}\n\n.ms2 #tutorial-intro-checkbox-container {\n    overflow: hidden;\n    margin: 5px 0 5px 0;\n    border-top: 1px dashed #777;\n    font-size: 0.8em;\n    font-style: italic;\n}\n\n.ms2 #tutorial-intro-checkbox {\n    margin: 5px 10px 0 0;\n    width: 10px;\n    height: 10px;\n    cursor: pointer;\n}\n",""]);const n=s},810719:(t,e,o)=>{t.exports=o.p+"MouseLeft.svg"},830498:(t,e,o)=>{t.exports=o.p+"MouseMiddle.svg"},97501:(t,e,o)=>{t.exports=o.p+"MouseRight.svg"},568561:(t,e,o)=>{t.exports=o.p+"TouchDrag.svg"},393306:(t,e,o)=>{t.exports=o.p+"TouchRotate.svg"},784990:(t,e,o)=>{t.exports=o.p+"TouchTilt.svg"},517363:(t,e,o)=>{t.exports=o.p+"TouchZoom.svg"}}]);