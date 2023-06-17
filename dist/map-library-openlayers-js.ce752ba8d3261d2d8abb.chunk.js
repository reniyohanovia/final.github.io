(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[6037],{397241:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>a});const a=()=>(l(532454).default,{Map:l(323113).Z,Layer:l(877758).Z,Feature:l(278426).Z,MeasurementSupport:l(36624).default,Overview:l(904101).Z,ScaleBar:l(37525).Z,DrawSupport:l(926202).Z,PopupSupport:l(993847).Z,BoxSelectionSupport:l(227556).Z})},492619:(e,t,l)=>{"use strict";l.r(t),l.d(t,{IDENTIFY_POPUP:()=>N,default:()=>g});var a=l(124852),n=l.n(a),m=l(554155),s=l(306637),r=l(867076),i=l(171703),u=l(22222),o=l(975872),d=l(917450),f=l(765963),q=l(701469),v=l.n(q),E=l(352353),p=l.n(E),I=l(105198),c=l(274363);const O=(0,r.compose)((0,i.connect)((0,u.P1)(o.Qf,(e=>({index:e}))),{setIndex:d.oO}),(0,r.defaultProps)({index:0,responses:[]})),h=(0,u.P1)([o.q7,o.o9,o.OK,o.us,o.x0,c.hp,o.vR],((e,t,l,a,n,m,s)=>({responses:e,validResponses:t,requests:l,format:a,showEmptyMessageGFI:n,missingResponses:(l||[]).length-(e||[]).length,renderValidOnly:m,loaded:s}))),_=(0,r.compose)((0,i.connect)(h),(0,r.defaultProps)({responses:[],container:e=>{let{index:t,children:l}=e;return n().createElement(n().Fragment,null,v()(l)&&l[t]||l)},header:I.Z}),O,s.Yy,s.mI,(0,m.Z)((e=>{let{loaded:t}=e;return p()(t)})))(f.Z),N="identify",g={identify:_}},556233:(e,t,l)=>{"use strict";l.d(t,{sW:()=>r,z$:()=>i,r2:()=>u,O$:()=>o,vq:()=>d,rp:()=>q,Ov:()=>p,wd:()=>I,L0:()=>c}),l(701469);var a=l(91175),n=l.n(a),m=l(807654),s=l.n(m);const r={LENGTH:"length",AREA:"area",POINT_COORDINATES:"POINT_COORDINATES",HEIGHT_FROM_TERRAIN:"HEIGHT_FROM_TERRAIN",POLYLINE_DISTANCE_3D:"POLYLINE_DISTANCE_3D",AREA_3D:"AREA_3D",SLOPE:"SLOPE",ANGLE_3D:"ANGLE_3D"},i={[r.LENGTH]:{unit:"m",label:"m",value:"m"},[r.AREA]:{unit:"sqm",label:"m²",value:"sqm"},[r.POLYLINE_DISTANCE_3D]:{unit:"m",label:"m",value:"m"},[r.AREA_3D]:{unit:"sqm",label:"m²",value:"sqm"},[r.POINT_COORDINATES]:{unit:"m",label:"m",value:"m"},[r.HEIGHT_FROM_TERRAIN]:{unit:"m",label:"m",value:"m"},[r.SLOPE]:{unit:"deg",label:"°",value:"deg"},[r.ANGLE_3D]:{unit:"deg",label:"°",value:"deg"}},u={[r.POLYLINE_DISTANCE_3D]:"polyline-3d",[r.AREA_3D]:"polygon-3d",[r.POINT_COORDINATES]:"point-coordinates",[r.HEIGHT_FROM_TERRAIN]:"height-from-terrain",[r.ANGLE_3D]:"angle",[r.SLOPE]:"slope"},o={[r.POLYLINE_DISTANCE_3D]:[{value:"ft",label:"ft"},{value:"m",label:"m"},{value:"km",label:"km"},{value:"mi",label:"mi"},{value:"nm",label:"nm"}],[r.AREA_3D]:[{value:"sqft",label:"ft²"},{value:"sqm",label:"m²"},{value:"sqkm",label:"km²"},{value:"sqmi",label:"mi²"},{value:"sqnm",label:"nm²"}],[r.HEIGHT_FROM_TERRAIN]:[{value:"ft",label:"ft"},{value:"m",label:"m"}],[r.ANGLE_3D]:[{value:"deg",label:"°"},{value:"rad",label:"rad"}],[r.SLOPE]:[{value:"deg",label:"°"},{value:"percentage",label:"%"}],[r.POINT_COORDINATES]:[{value:"ft",label:"ft"},{value:"m",label:"m"}]},d={sqft:{value:"ft",label:"ft"},sqm:{value:"m",label:"m"},sqkm:{value:"km",label:"km"},sqmi:{value:"mi",label:"mi"},sqnm:{value:"nm",label:"nm"}};function f(e){var t=Math.floor(e),l=60*(e-t),a=Math.floor(l),n=60*(l-a);return t+"° "+a+"' "+Math.floor(n)+"'' "}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,{measureTrueBearing:t=!1,fractionDigits:l=0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a="";if(t){let t="";e>=0&&e<10?t="00":e>10&&e<100&&(t="0"),a=t+(l>0?e.toFixed(l):Math.floor(e))+"°"}else e>=0&&e<90?a="N "+f(e)+"E":e>90&&e<=180?a="S "+f(180-e)+"E":e>180&&e<270?a="S "+f(e-180)+"W":e>=270&&e<=360&&(a="N "+f(360-e)+"W");return a}const v={yd:{ft:3,m:.9144,km:9144e-7,yd:1,mi:.00056818181818,nm:.00049373650107},ft:{ft:1,m:.3048,km:3048e-7,yd:.33333333333334,mi:.0001893932,nm:164579e-9},m:{ft:3.28084,m:1,km:.001,yd:1.0936132983377,mi:621371e-9,nm:.000539956803},km:{ft:3280.84,m:1e3,km:1,yd:1093.6132983377,mi:.62137121212121,nm:.5399568207343395},mi:{ft:5280.000168959982,m:1609.3440514990027,km:1.6093440514990027,yd:1760,mi:1,nm:.8689762697078849},nm:{ft:6076.115679999979,m:1852.0000592639938,km:1.8520000592639938,yd:2025.3718285214,mi:1.150779484848481,nm:1},sqft:{sqft:1,sqm:.09290304,sqkm:9.2903043596611e-8,sqmi:3.587e-8,sqnm:2.7051601137505e-8},sqyd:{sqft:8.9999247491639,sqm:.83612040133779,sqkm:8.3612040133779e-7,sqyd:1,sqmi:3.228278917579e-7,sqnm:2.4346237458194e-7},sqm:{sqft:10.76391,sqm:1,sqkm:1e-6,sqyd:1.196,sqmi:3.8610215854245e-7,sqnm:2.91181e-7},sqkm:{sqft:10763910,sqm:1e6,sqkm:1,sqyd:1196e3,sqmi:.38610215854245,sqnm:.291181},sqmi:{sqft:27878398.920726,sqm:2589988.110336,sqkm:2.589988110336,sqyd:27878398.920726,sqmi:1,sqnm:.75415532795574},sqnm:{sqft:36966388.603652,sqm:3434290.0120544,sqkm:3.4342900120544,sqyd:36966388.603652,sqmi:1.325986786715,sqnm:1}},E={deg:{rad:e=>e*Math.PI/180,percentage:e=>Math.round(100*Math.tan(e*Math.PI/180))},rad:{deg:e=>180*e/Math.PI,percentage:e=>Math.round(100*Math.tan(e))},percentage:{deg:e=>180*Math.atan(e/100)/Math.PI,rad:e=>Math.atan(e/100)}};function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"m",l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"m";return E[t]&&E[t][l]?E[t][l](e):v[t]&&v[t][l]?e*v[t][l]:e}const I=e=>!s()(parseFloat(e[0]))&&!s()(parseFloat(e[1])),c=function(){let{coordinates:e,type:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e;if("LineString"===t){if(l=e.filter(I),l.length<2)return[]}else if("Polygon"===t){if(l=n()(e).filter(I),l.length<3)return[[]];l=[l.concat([n()(l)])]}return l}},389179:(e,t,l)=>{var a=l(555639),n=l(640554),m=l(14841),s=l(479833),r=a.isFinite,i=Math.min;e.exports=function(e){var t=Math[e];return function(e,l){if(e=m(e),(l=null==l?0:i(n(l),292))&&r(e)){var a=(s(e)+"e").split("e"),u=t(a[0]+"e"+(+a[1]+l));return+((a=(s(u)+"e").split("e"))[0]+"e"+(+a[1]-l))}return t(e)}}},843624:(e,t,l)=>{var a=l(314259),n=l(640554);e.exports=function(e,t,l){var m=null==e?0:e.length;return m?(t=l||void 0===t?1:n(t),a(e,0,(t=m-t)<0?0:t)):[]}},59854:(e,t,l)=>{var a=l(389179)("round");e.exports=a}}]);