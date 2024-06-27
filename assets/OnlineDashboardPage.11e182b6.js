import{_ as G,d as O,b7 as j,a as o,r as d,k as L,i as w,l as z,bf as M,o as c,e as D,g as t,t as l,n as b,F as N,aH as $,f as F}from"./index.a85485c5.js";const W=O({name:"DashboardPage",components:{},setup(){j(()=>({title:`${o.BUILD_WINDOW_TITLE} - Dashboard`}));const u=d(!0),{locale:a}=L({useScope:"global"}),p=d(),g=w(()=>`${o.RUNTIME_RADAR_WIDGET_STAGING}?url=${o.RUNTIME_RADAR_ONE_URL_STAGING}&lang=${a.value}`),T=w(()=>`${o.RUNTIME_RADAR_WIDGET_STAGING}?url=${o.RUNTIME_RADAR_TWO_URL_STAGING}&lang=${a.value}`),A=d(0),e=d("\u8EDF\u9AD4\u976D\u9AD4"),v=[{quadrant:"\u8EDF\u9AD4\u976D\u9AD4",blips:[]},{quadrant:"\u96FB\u5B50\u786C\u9AD4",blips:[]},{quadrant:"\u901A\u8A0A\u611F\u6E2C",blips:[]},{quadrant:"\u6C7D\u8ECA\u7522\u696D",blips:[]}],f=d([]),R=d([]),h=[{quadrant:"\u8EDF\u9AD4\u976D\u9AD4",blips:[]},{quadrant:"\u96FB\u5B50\u786C\u9AD4",blips:[]},{quadrant:"\u901A\u8A0A\u611F\u6E2C",blips:[]},{quadrant:"\u6C7D\u8ECA\u7522\u696D",blips:[]}],_=d([]),S=async s=>{const B=await(await fetch(s)).json();let m=0;B.forEach(n=>{v.forEach(i=>{const E=new Date(n.date),C=(Date.now()-E.getTime())/(1e3*3600*24);i.quadrant===n.quadrant&&C<90&&i.blips.push(n)})}),v.forEach(n=>{n.blips.forEach(i=>{i.id=(++m).toString()})}),a.value!=="zh"&&(e.value="\u8EDF\u9AD4\u976D\u9AD4"),f.value=v[0].blips},k=async s=>{(await(await fetch(s)).json()).forEach(n=>{h.forEach(i=>{const E=new Date(n.date),C=(Date.now()-E.getTime())/(1e3*3600*24);i.quadrant===n.quadrant&&C<90&&i.blips.push(n)})});let m=0;h.forEach(n=>{n.blips.forEach(i=>{i.id=(++m).toString(),R.value.push(i)})}),a.value!=="zh"&&(e.value="\u8EDF\u9AD4\u976D\u9AD4"),_.value=h[0].blips},q=s=>{s.origin==="http://portal.stg.kuku.succ.work"&&(s.data.blip&&(A.value=s.data.blip),s.data.quadrant&&(e.value=s.data.quadrant,a.value!=="zh"&&(s.data.quadrant==="Software & Firmware"||s.data.quadrant==="\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3068\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2"?e.value="\u8EDF\u9AD4\u976D\u9AD4":s.data.quadrant==="Hardware"||s.data.quadrant==="\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2"?e.value="\u96FB\u5B50\u786C\u9AD4":s.data.quadrant==="Communication & Sensor"||s.data.quadrant==="\u901A\u4FE1\u3068\u30BB\u30F3\u30B5\u30FC"?e.value="\u901A\u8A0A\u611F\u6E2C":(s.data.quadrant==="Vehicle"||s.data.quadrant==="\u81EA\u52D5\u8ECA\u7523\u696D")&&(e.value="\u6C7D\u8ECA\u7522\u696D"))),f.value=v.find(r=>r.quadrant===e.value)?.blips,f.value=f.value.map(r=>(r.active=Number(r.id)===Number(A.value),r)),_.value=h.find(r=>r.quadrant===e.value)?.blips,_.value=_.value.map(r=>(r.active=Number(r.id)===Number(A.value),r)))},y=s=>{u.value=s};z(async()=>{a.value==="zh"?e.value="\u8EDF\u9AD4\u976D\u9AD4":a.value==="ja"?e.value="\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3068\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2":e.value="Software & Firmware",S(o.RUNTIME_RADAR_ONE_URL_STAGING),k(o.RUNTIME_RADAR_TWO_URL_STAGING),p.value=!0,window.addEventListener("message",q,!1)});const I=w(()=>e.value==="\u8EDF\u9AD4\u976D\u9AD4"?a.value==="zh"?"\u8EDF\u9AD4\u976D\u9AD4":a.value==="ja"?"\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u3068\u30D5\u30A1\u30FC\u30E0\u30A6\u30A7\u30A2":"Software & Firmware":e.value==="\u96FB\u5B50\u786C\u9AD4"?a.value==="zh"?"\u96FB\u5B50\u786C\u9AD4":a.value==="ja"?"\u30CF\u30FC\u30C9\u30A6\u30A7\u30A2":"Hardware":e.value==="\u901A\u8A0A\u611F\u6E2C"?a.value==="zh"?"\u901A\u8A0A\u611F\u6E2C":a.value==="ja"?"\u901A\u4FE1\u3068\u30BB\u30F3\u30B5\u30FC":"Communication & Sensor":e.value==="\u6C7D\u8ECA\u7522\u696D"?a.value==="zh"?"\u6C7D\u8ECA\u7522\u696D":a.value==="ja"?"\u81EA\u52D5\u8ECA\u7523\u696D":"Vehicle":"Software & Firmware");return M(()=>{window.removeEventListener("message",q,!1)}),{isShowTabOne:u,nowBlip:A,nowQuadrant:e,jsonData2:R,renderedData:f,renderedData2:_,buildConfig:o,locale:a,isLoaded:p,radarUrlOne:g,radarUrlTwo:T,showQuadrant:I,toggleRadar:y}}}),P={key:0,class:"dashboard"},Q={class:"content-wrapper"},V={class:"pageTitle-tabs flex justify-between items-center"},H={class:"title"},J={class:"tabs flex"},K={key:0,class:"radar-block radar-block__first flex justify-between"},X={class:"radar",style:{overflow:"hidden"}},Y=["src"],Z={class:"info-list"},x={class:"list-title"},ee=["href"],ae={class:"item-name"},ue={class:"item-date"},se={key:1,class:"radar-block radar-block__second flex justify-between"},te={class:"radar",style:{overflow:"hidden"}},re=["src"],ne={class:"info-list"},ie={class:"list-title"},le=["href"],oe={class:"item-name"},de={class:"item-date"};function ce(u,a,p,g,T,A){return u.isLoaded?(c(),D("div",P,[t("div",Q,[t("div",V,[t("div",H,l(u.$t("$i18n_technologyThreat_$i18n")),1),t("div",J,[t("div",{class:b(["tab",{active:u.isShowTabOne}]),onClick:a[0]||(a[0]=e=>u.toggleRadar(!0))},l(u.$t("$i18n_datePublication_$i18n")),3),t("div",{class:b(["tab",{active:!u.isShowTabOne}]),onClick:a[1]||(a[1]=e=>u.toggleRadar(!1))},l(u.$t("$i18n_dateCollection_$i18n")),3)])]),u.isShowTabOne?(c(),D("div",K,[t("div",X,[t("iframe",{src:u.radarUrlOne,frameborder:"0"},null,8,Y)]),t("div",Z,[t("div",x,"["+l(u.showQuadrant)+"]",1),(c(!0),D(N,null,$(u.renderedData,e=>(c(),D("a",{href:e.url,target:"_blank",class:b(["list-item flex items-center cursor-pointer",{active:e.active}]),key:e.id},[t("div",ae,l(e.name),1),t("div",ue,l(e.date),1)],10,ee))),128))])])):F("",!0),u.isShowTabOne?F("",!0):(c(),D("div",se,[t("div",te,[t("iframe",{src:u.radarUrlTwo,frameborder:"0"},null,8,re)]),t("div",ne,[t("div",ie,"["+l(u.showQuadrant)+"]",1),(c(!0),D(N,null,$(u.renderedData2,e=>(c(),D("a",{href:e.url,target:"_blank",class:b(["list-item flex items-center cursor-pointer",{active:e.active}]),key:e.id},[t("div",oe,l(e.name),1),t("div",de,l(e.date),1)],10,le))),128))])]))])])):F("",!0)}var Ae=G(W,[["render",ce],["__scopeId","data-v-77e8285e"]]);export{Ae as default};
