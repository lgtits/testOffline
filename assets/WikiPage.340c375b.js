import{a as E,ab as M,d as R,j as $e,r as f,l as K,o as t,e as n,g as s,t as r,F as h,aH as I,f as u,n as L,q as V,x as P,aI as J,aJ as Y,_ as O,h as ue,b1 as N,b2 as he,b3 as Ee,p as $,w as F,aM as we,Q as Ie,b4 as W,m as z,b5 as be,b6 as Se,b7 as De,i as ee,k as Te,Y as Re,a$ as te,b0 as se,y as Oe}from"./index.125062c9.js";import{_ as Ae}from"./CommonModal.4832086d.js";import{D as Ne}from"./Dialog.75687676.js";import{N as re}from"./Notify.d826bef8.js";import{Q as _e}from"./QExpansionItem.e7bc8664.js";import{v as Be}from"./Validations.c5400c5d.js";import{z as Ce,j as Le,e as Me}from"./index.e3208ede.js";import"./ClosePopup.6c0c0609.js";import"./Format.45ca4c10.js";import"./QItemSection.574b5d90.js";import"./QItemLabel.e1e9f191.js";const Q=E.BUILD_ENABLE_CHATBOT_DUMMY_DATA_MODE,Z=window.location.origin,Ue=async()=>Q?await M.get(`${Z}/dummyData/bookcase/bookcaseDocumentsListSample.json`):await M.get("temp_bookcase"),Pe=async e=>(console.log(e),Q?await M.get(`${Z}/dummyData/bookcase/bookcaseAddNewBookcaseSample.json`):await M.post("/groups",e)),Fe=async e=>Q?await M.get(`${Z}/dummyData/bookcase/bookcaseDeleteDocumentSample.json`):await M.del(`temp_bookcase/${e}`),We=async e=>Q?await M.get(`${Z}/dummyData/bookcase/bookcaseAddTempBookcaseSample.json`):await M.post(`temp_bookcase/${e}`);var H={getTempBookcaseDocumentsList:Ue,addNewBookcase:Pe,deleteTempBookcaseDocument:Fe,addTempBookcase:We};const X=e=>(J("data-v-54d26872"),e=e(),Y(),e),je={key:0,class:"common-book-list-add-btn__book-list"},Ve={class:"list-head flex justify-between"},qe={class:"list-head__title"},Ge=X(()=>s("img",{src:"/images/icons/close.svg",alt:""},null,-1)),He=[Ge],Ke={class:"list-content customized-scrollbar"},Je={class:"document-info column justify-between"},Ye={class:"document-info__title cursor-pointer"},ze={class:"document-info__origin"},Qe={class:"date"},Ze={class:"document-info__committee"},Xe=["onClick"],xe=X(()=>s("img",{src:"/images/icons/delete.svg",alt:""},null,-1)),et=[xe],tt=X(()=>s("img",{src:"/images/icons/add_bookcase.svg",alt:""},null,-1)),st=X(()=>s("img",{src:"/images/icons/document_icon.svg",alt:""},null,-1)),ot=[st],nt=R({__name:"CommonBookListBtn",setup(e){const o=$e(),a=f(!1),d=g=>{a.value=g},v=f(),w=g=>{Ne.confirm({title:`\u522A\u9664\u6587\u4EF6(${g.name})\uFF1F`,message:"\u522A\u9664\u5F8C\u7121\u6CD5\u5FA9\u539F\u3002",onOk:async()=>{(await H.deleteTempBookcaseDocument(g.data_key)).success&&re.error("\u5DF2\u522A\u9664"),await b()}})},i=f(!1),c=async g=>{i.value=!1;const m={title:g,documents_list:v.value.map(p=>p.data_key)},y=await H.addNewBookcase(m);re.success(`\u5EFA\u7ACB\u6210\u529F: ${y.result.title}`),o.push({name:"BookcaseListPage"})},b=async()=>{const g=await H.getTempBookcaseDocumentsList();v.value=g.result};return K(async()=>{await b()}),(g,m)=>{const y=Ae;return t(),n(h,null,[s("div",{class:L(["common-book-list-add-btn center-img",{active:a.value}])},[a.value?(t(),n("div",je,[s("div",{class:"mask",onClick:m[0]||(m[0]=p=>d(!1))}),s("div",Ve,[s("div",qe,r(g.$t("$i18n_list_$i18n")),1),s("div",{class:"list-head__close cursor-pointer",onClick:m[1]||(m[1]=p=>d(!1))},He)]),s("div",Ke,[(t(!0),n(h,null,I(v.value,p=>(t(),n("div",{class:"document flex justify-between items-center",key:p.data_key},[s("div",Je,[s("div",Ye,r(p.name),1),s("div",ze,[P(" ["+r(g.$t("$i18n_source_$i18n"))+r(p.origin)+"] \u2014 ",1),s("span",Qe,r(p.date),1)]),s("div",Ze,r(g.$t("$i18n_conferenceName_$i18n"))+"\uFF1A"+r(p.conference),1)]),s("div",{class:"document-delete cursor-pointer",onClick:A=>w(p)},et,8,Xe)]))),128))]),s("div",{class:"list-btn",onClick:m[2]||(m[2]=p=>i.value=!i.value)},[tt,s("span",null,r(g.$t("$i18n_createBookcase_$i18n")),1)])])):u("",!0),s("div",{class:"common-book-list-add-btn__icon cursor-pointer",onClick:m[3]||(m[3]=p=>d(!0))},ot)],2),V(y,{modelValue:i.value,"onUpdate:modelValue":m[4]||(m[4]=p=>i.value=p),onSubmitInput:c,title:"\u66F8\u6AC3\u540D\u7A31",placeholder:"\u8ACB\u8F38\u5165\u66F8\u6AC3\u540D\u7A31"},null,8,["modelValue"])],64)}}});var it=O(nt,[["__scopeId","data-v-54d26872"]]);function rt(e){switch(e){case"../../../src/services/deprecated/DeprecatedSystemServices.ts":return N(()=>import("./DeprecatedSystemServices.e6148c1e.js"),["assets/DeprecatedSystemServices.e6148c1e.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);case"../../../src/services/Offline/OfflineSystemServices.ts":return N(()=>import("./OfflineSystemServices.294735a1.js"),["assets/OfflineSystemServices.294735a1.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);case"../../../src/services/Online/OnlineSystemServices.ts":return N(()=>import("./OnlineSystemServices.eaffe0da.js"),["assets/OnlineSystemServices.eaffe0da.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);default:return new Promise(function(o,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}let oe=E.BUILD_OFFLINE_MODE?"Offline":"Online";const de=oe==="Online"?await rt(`../../../src/services/${oe}/${oe}SystemServices.ts`):"",at=R({name:"SystemDrawer",props:{isShowDrawer:{type:Boolean,default:!1},devices:{type:Array,required:!0}},emits:["toggleDrawer"],setup(e,{emit:o}){const a=f(),d=f(!1),w=ue().params.id.toString(),i=()=>{o("toggleDrawer")},c=m=>{const y=e.devices.find(p=>p.deviceId===m);y&&(y.editingSystem=!y.editingSystem)};return{searchType:a,val:d,componentId:w,toggleDrawer:i,createSystem:async m=>{const y=e.devices.find(p=>p.deviceId===m);if(y&&y.editingInput){const p=await de.postSystems({deviceId:m,systemName:y.editingInput.toString()});y.systems.push({systemName:p.result.systemName,systemId:p.result.systemId,components:[],selected:!1,reports:[],reportStatus:"idle"}),y.editingInput=""}c(m)},addToSystem:async m=>{const y=[];e.devices.forEach(p=>{p.systems.forEach(A=>{A.selected&&y.push({systemId:A.systemId})})}),await de.postComponents(m,{systems:[...y]}),he.create({message:"\u52A0\u5165\u6210\u529F!",color:"primary",position:"top",timeout:2e3}),o("toggleDrawer")},toggleEdit:c}}}),ae=e=>(J("data-v-4b751936"),e=e(),Y(),e),lt={key:0,class:"system-drawer"},ct={class:"drawer flex column justify-between"},dt={class:"drawer__header flex justify-between"},ut=ae(()=>s("div",null,null,-1)),_t=ae(()=>s("img",{src:"/images/icons/close.svg",alt:""},null,-1)),mt=[_t],pt={class:"drawer__content"},kt={class:"systems flex column"},vt={class:""},yt=["onClick"],gt=ae(()=>s("img",{src:"/images/icons/addNumber.svg",alt:""},null,-1)),ft={key:1,class:"editing-system flex items-center"},$t=["onClick"],ht=["onClick"];function Et(e,o,a,d,v,w){return e.isShowDrawer?(t(),n("div",lt,[s("div",{class:"mask",onClick:o[0]||(o[0]=(...i)=>e.toggleDrawer&&e.toggleDrawer(...i)),onScroll:o[1]||(o[1]=Ee(()=>{},["prevent"]))},null,32),s("div",ct,[s("div",dt,[ut,s("div",null,r(e.$t("$i18n_addToSystemsList_$i18n")),1),s("div",{class:"close cursor-pointer",onClick:o[2]||(o[2]=(...i)=>e.toggleDrawer&&e.toggleDrawer(...i))},mt)]),s("div",pt,[(t(!0),n(h,null,I(e.devices,i=>(t(),$(_e,{label:i.deviceName,class:"device",key:i.deviceId},{default:F(()=>[s("div",kt,[(t(!0),n(h,null,I(i.systems,c=>(t(),n("div",{class:"system flex justify-between items-center",key:c.systemId},[s("div",vt,r(c.systemName),1),V(we,{modelValue:c.selected,"onUpdate:modelValue":b=>c.selected=b,color:"black"},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),i.editingSystem?u("",!0):(t(),n("div",{key:0,class:"add-system flex",onClick:c=>e.toggleEdit(i.deviceId)},[gt,s("div",null,r(e.$t("$i18n_addSystem_$i18n")),1)],8,yt)),i.editingSystem?(t(),n("div",ft,[V(Ie,{borderless:"",modelValue:i.editingInput,"onUpdate:modelValue":c=>i.editingInput=c,placeholder:e.$t("$i18n_enterSystemName_$i18n")},null,8,["modelValue","onUpdate:modelValue","placeholder"]),s("div",{class:"create cursor-pointer",onClick:c=>e.createSystem(i.deviceId)},r(e.$t("$i18n_create_$i18n")),9,$t),s("div",{class:"cancel cursor-pointer",onClick:c=>e.toggleEdit(i.deviceId)},r(e.$t("$i18n_cancel_$i18n")),9,ht)])):u("",!0)]),_:2},1032,["label"]))),128))]),s("div",{class:"drawer__submit cursor-pointer",onClick:o[3]||(o[3]=i=>e.addToSystem(e.componentId))},r(e.$t("$i18n_submit_$i18n")),1)])])):u("",!0)}var wt=O(at,[["render",Et],["__scopeId","data-v-4b751936"]]);const It=R({name:"ReportBlock",props:{reports:{type:Array,required:!0},limited:{type:Boolean,default:!1}},setup(){return{store:W(),config:E}}}),bt=e=>(J("data-v-7cf18d1a"),e=e(),Y(),e),St={id:"report-block",class:"report-block"},Dt={class:"report__list"},Tt=bt(()=>s("div",{class:"report-img"},[s("img",{src:"/images/icons/report.png",alt:""})],-1)),Rt={key:0,class:"report wiki__limited"},Ot={key:0,class:"text-red-7"};function At(e,o,a,d,v,w){return t(),n("div",St,[s("div",Dt,[(t(!0),n(h,null,I(e.reports,i=>(t(),n("div",{class:"report",key:i.report_key},[V(_e,{label:`${i.name}`,caption:"2024-01-16"},{default:F(()=>[Tt]),_:2},1032,["label"])]))),128)),e.limited?(t(),n("div",Rt,[e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",Ot,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0)])):u("",!0)])])}var Nt=O(It,[["render",At],["__scopeId","data-v-7cf18d1a"]]);const Bt=R({name:"DocumentCard",props:{document:{type:Object,required:!0}},setup(){return{}}}),Ct={class:"document-title"},Lt={class:"conference-name"},Mt={class:"document-source"},Ut={class:"date"};function Pt(e,o,a,d,v,w){const i=z("router-link");return t(),$(i,{to:`/${e.$i18n.locale}/document/${e.document.data_key}`,class:"related-document-card cursor-pointer"},{default:F(()=>[s("div",Ct,[P(r(e.document.file)+" ",1),s("div",Lt,r(e.$t("$i18n_conferenceName_$i18n"))+"\uFF1A"+r(e.document.conference),1)]),s("div",Mt,[s("span",Ut,r(e.document.date),1)])]),_:1},8,["to"])}var me=O(Bt,[["render",Pt]]);const Ft=R({name:"RelatedDocBlock",props:{title:{type:String,required:!0},documents:{type:Array,required:!1},limited:{type:Boolean,default:!1}},components:{DocumentLink:me},emits:["goPage"],setup(e,{emit:o}){return{store:W(),config:E,getPageResult:async v=>{o("goPage",v)}}}}),Wt={id:"doc-block",class:"doc-block"},jt={class:"block__title"},Vt={key:0,class:"wiki__limited text-red-7"};function qt(e,o,a,d,v,w){const i=me;return t(),n("div",Wt,[s("div",jt,r(e.$t(e.title)),1),e.limited&&e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",Vt,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0),(t(!0),n(h,null,I(e.documents,c=>(t(),$(i,{key:c.conference,document:c},null,8,["document"]))),128))])}var Gt=O(Ft,[["render",qt]]);const Ht=R({name:"IssueWiki",props:{title:{type:String,required:!0},issues:{type:Array,required:!1},limited:{type:Boolean,default:!1}},setup(){const e=W(),o=f(!0),a=f(),d=()=>{a.value.clientHeight>68&&(o.value=!1)},v=()=>{o.value=!0};return K(async()=>{d()}),{store:e,tagsWrapper:a,isShowAllTags:o,config:E,showAllTags:v}}}),Kt={id:"issues-tag-block",class:"issues-tag-block"},Jt={class:"tags__title"},Yt={class:"tags__block issue__tags__block"},zt={key:0,class:"text-red-7"};function Qt(e,o,a,d,v,w){const i=z("router-link");return t(),n("div",Kt,[s("div",Jt,r(e.$t(e.title)),1),s("div",Yt,[s("div",{class:L(["tags__wrapper issue__tags__wrapper",{fixedHeight:!e.isShowAllTags}]),ref:"tagsWrapper"},[e.limited&&e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",zt,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0),(t(!0),n(h,null,I(e.issues,c=>(t(),$(i,{class:"tag",key:c.name,to:c.data_key?`/${e.$i18n.locale}/issue/${c.data_key}`:""},{default:F(()=>[P(r(c.name),1)]),_:2},1032,["to"]))),128))],2),e.isShowAllTags?u("",!0):(t(),n("div",{key:0,class:"tag tag__more",onClick:o[0]||(o[0]=(...c)=>e.showAllTags&&e.showAllTags(...c))}," ... "))])])}var Zt=O(Ht,[["render",Qt]]);const Xt=R({name:"RelatedComponentBlock",props:{title:{type:String,required:!0},components:{type:Array,required:!1},limited:{type:Boolean,default:!1}},setup(){const e=W(),o=f(!0),a=f(),d=()=>{a.value.clientHeight>68&&(o.value=!1)},v=()=>{o.value=!0};return K(async()=>{d()}),{store:e,tagsWrapper:a,isShowAllTags:o,config:E,showAllTags:v}}}),xt={id:"components-tag-block",class:"components-tag-block"},es={class:"tags__title"},ts={class:"tags__block component__tags__block"},ss={key:0,class:"text-red-7"};function os(e,o,a,d,v,w){const i=z("router-link");return t(),n("div",xt,[s("div",es,r(e.$t(e.title)),1),s("div",ts,[s("div",{class:L(["tags__wrapper component__tags__wrapper",{fixedHeight:!e.isShowAllTags}]),ref:"tagsWrapper"},[e.limited&&e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",ss,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0),(t(!0),n(h,null,I(e.components,c=>(t(),$(i,{class:"tag",key:c.name,to:c.data_key?`/${e.$i18n.locale}/component/${c.data_key}`:""},{default:F(()=>[P(r(c.name),1)]),_:2},1032,["to"]))),128))],2),e.isShowAllTags?u("",!0):(t(),n("div",{key:0,class:"tag tag__more",onClick:o[0]||(o[0]=(...c)=>e.showAllTags&&e.showAllTags(...c))}," ... "))])])}var ns=O(Xt,[["render",os]]);const is=R({name:"DocumentsLinks",props:{title:{type:String,required:!0},attachments:{type:Array,required:!1},links:{type:Array,required:!1},limited:{type:Boolean,default:!1},type:{type:String,required:!0}},components:{},setup(){const e=W();return{config:E,store:e}}}),rs={key:0,id:"documents-links",class:"documents-links"},as={class:"block__title"},ls={class:"block__documents"},cs={key:0,class:"wiki_limited text-red-7"},ds={class:"title"},us=["href"],_s=s("span",{class:"material-symbols-outlined"},"description",-1),ms={key:1,id:"documents-links",class:"documents-links"},ps={class:"block__title"},ks={class:"block__links"},vs={key:0,class:"wiki_limited text-red-7"},ys={class:"title"},gs=["href"],fs=s("span",{class:"material-symbols-outlined"},"link",-1);function $s(e,o,a,d,v,w){return t(),n(h,null,[e.type==="attachments"?(t(),n("div",rs,[s("div",as,r(e.$t(e.title)),1),s("div",ls,[e.limited&&e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",cs,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0),(t(!0),n(h,null,I(e.attachments,i=>(t(),n("div",{class:"block__documents__document",key:i.name},[s("div",ds,r(i.name),1),s("a",{href:i.url,target:"_blank",class:"link"},[P(r(e.$t(i.title))+" ",1),_s],8,us)]))),128))])])):u("",!0),e.type==="links"?(t(),n("div",ms,[s("div",ps,r(e.$t(e.title)),1),s("div",ks,[e.limited&&e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",vs,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0),(t(!0),n(h,null,I(e.links,i=>(t(),n("div",{class:"block__links__link",key:i.name},[s("div",ys,r(i.name),1),s("a",{href:i.url,target:"_blank",class:"link"},[P(r(e.$t(i.title)),1),fs],8,gs)]))),128))])])):u("",!0)],64)}var hs=O(is,[["render",$s]]);const Es=R({name:"WikiBlock",props:{title:{type:String,required:!0},content:{type:String,required:!1,default:""},limited:{type:Boolean,default:!1}},setup(){const e=W();return{config:E,store:e}}}),ws={class:"wiki-block"},Is={class:"wiki__title"},bs={class:"wiki__infos"},Ss=s("div",{class:"wiki__infos__basics"},null,-1),Ds=["innerHTML"],Ts={key:1,class:"wiki__infos__content wiki__limited"},Rs={key:0,class:"text-red-7"};function Os(e,o,a,d,v,w){return t(),n("div",ws,[s("div",Is,r(e.$t(e.title)),1),s("div",bs,[Ss,e.limited?u("",!0):(t(),n("div",{key:0,class:"wiki__infos__content",innerHTML:e.content},null,8,Ds)),e.limited?(t(),n("div",Ts,[e.store.RUNTIME_SHOW_API_ERROR_MESSAGE?(t(),n("span",Rs,r(e.config.RUNTIME_API_ERROR_MESSAGE),1)):u("",!0)])):u("",!0)])])}var As=O(Es,[["render",Os]]);const Ns=R({name:"CommonGoogleBreadcrumb",setup(){return{}}});function Bs(e,o,a,d,v,w){return t(),$(Se,{to:"head"},[(t(),$(be("script"),{type:"application/ld+json"},{default:F(()=>[P(' [ { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Books", "item": "https://example.com/books" }, { "@type": "ListItem", "position": 2, "name": "Science Fiction", "item": "https://example.com/books/sciencefiction" }, { "@type": "ListItem", "position": 3, "name": "Award Winners" } ] }, { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Literature", "item": "https://example.com/literature" }, { "@type": "ListItem", "position": 2, "name": "Award Winners" } ] }, { "@context": "https://schema.org", "@type": "NewsArticle", "headline": "Title of a News Article", "image": [ "https://example.com/photos/1x1/photo.jpg", "https://example.com/photos/4x3/photo.jpg", "https://example.com/photos/16x9/photo.jpg" ], "datePublished": "2015-02-05T08:00:00+08:00", "dateModified": "2015-02-05T09:20:00+08:00", "author": [ { "@type": "Person", "name": "Jane Doe", "url": "https://example.com/profile/janedoe123" }, { "@type": "Person", "name": "John Doe", "url": "https://example.com/profile/johndoe123" } ] } ] ')]),_:1}))])}var Cs=O(Ns,[["render",Bs]]);const Ls=e=>{const o=Object.entries(Ce);let a=e;return o.forEach(d=>{a=a.replaceAll(d[0],d[1])}),a},Ms=e=>{const o=Object.entries(Le);let a=e;return o.forEach(d=>{a=a.replaceAll(d[0],d[1])}),a},Us=e=>{const o=Object.entries(Me);let a=e;return o.forEach(d=>{a=a.replaceAll(d[0],d[1])}),a};var ne={replaceI18nZh:Ls,replaceI18nJa:Ms,replaceI18nEn:Us};function Ps(e){switch(e){case"../services/deprecated/DeprecatedSystemServices.ts":return N(()=>import("./DeprecatedSystemServices.e6148c1e.js"),["assets/DeprecatedSystemServices.e6148c1e.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);case"../services/Offline/OfflineSystemServices.ts":return N(()=>import("./OfflineSystemServices.294735a1.js"),["assets/OfflineSystemServices.294735a1.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);case"../services/Online/OnlineSystemServices.ts":return N(()=>import("./OnlineSystemServices.eaffe0da.js"),["assets/OnlineSystemServices.eaffe0da.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);default:return new Promise(function(o,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Fs(e){switch(e){case"../services/deprecated/DeprecatedWikiServices.ts":return N(()=>import("./DeprecatedWikiServices.7f5441c9.js"),["assets/DeprecatedWikiServices.7f5441c9.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);case"../services/Offline/OfflineWikiServices.ts":return N(()=>import("./OfflineWikiServices.6b3d7dc3.js"),["assets/OfflineWikiServices.6b3d7dc3.js","assets/index.125062c9.js","assets/index.7bde52d4.css","assets/_commonjsHelpers.294d03c4.js"]);case"../services/Online/OnlineWikiServices.ts":return N(()=>import("./OnlineWikiServices.94cf6235.js"),["assets/OnlineWikiServices.94cf6235.js","assets/index.125062c9.js","assets/index.7bde52d4.css"]);default:return new Promise(function(o,a){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}let j=E.BUILD_OFFLINE_MODE&&E.BUILD_OFFLINE_SET_OFFLINE_MODE==="offline"?"Offline":"Online";const ie=await Fs(`../services/${j}/${j}WikiServices.ts`),Ws=j==="Online"?await Ps(`../services/${j}/${j}SystemServices.ts`):"",js=R({name:"WikiPage",setup(){De(()=>({title:`${E.BUILD_WINDOW_TITLE} - Document`}));const e=W(),o=ue(),a=ee(()=>o.name),d=f(o.params.id.toString()),v=f(),w=f(),{t:i,locale:c}=Te({useScope:"global"}),b=ee(()=>o.name==="wikiComponent"?"component":o.name==="wikiDocument"?"document":"tag"),g=ee(()=>b.value==="component"&&E.RUNTIME_SHOW_WIKI_COMPONENT_BUTTON_ADD),m=f([]),y=f(0),p=f(0),A=f(!1),q=f(!1),U=f(),D=async()=>{const k=await ie.getWiki(b.value,d.value);v.value=k.page_title,k.result&&m.value.push({name:k.result_title,templates:[...k.result]}),k.result2&&m.value.push({name:k.result2_title,templates:[...k.result2]}),k.result3&&m.value.push({name:k.result3_title,templates:[...k.result3]}),m.value.forEach(C=>{C.templates.forEach(async _=>{const T=await ie.getWikiTemplate(b.value,_.block_type,_.data_category,d.value,1);if(T.result===404){_.limited=!0;return}if(Be.isEncrypted(T)){_.limited=!0;return}_.block_type==="wiki"?c.value==="zh"?_.content=ne.replaceI18nZh(T.result):c.value==="ja"?_.content=ne.replaceI18nJa(T.result):_.content=ne.replaceI18nEn(T.result):_.block_type==="recommend"&&_.data_category==="documents"?_.content=T.result.documents:_.block_type==="recommend"&&_.data_category==="components"||_.block_type==="recommend"&&_.data_category==="issues"?_.content=T.result:_.block_type==="resource"&&_.data_category==="links"?_.content=T.result.links:_.block_type==="resource"&&_.data_category==="attachments"?_.content=T.result.attachments:_.block_type==="report"&&_.data_category==="report_list"&&(_.content=T.result)})})},S=async()=>{const k=await Ws.getDevices();U.value=k.result.devices,U.value&&(U.value=U.value.map(C=>({...C,systems:C.systems.map(_=>({..._,selected:!1}))})))},l=k=>{y.value=k};let B=[];const G=f(!1);let x;const ke=k=>{G.value=!0,x&&clearTimeout(x),k!==p.value&&B[k].scrollIntoView({behavior:"smooth"}),p.value=k,x=setTimeout(()=>{G.value=!1},1e3)},ve=k=>{k&&B.push(k)},le=()=>{G.value||B.forEach(k=>{window.scrollY>=k.offsetTop-150&&Number(k.getAttribute("index"))>-1&&(p.value=Number(k.getAttribute("index")))})},ye=()=>{A.value=!A.value},ce=async()=>{await D(),a.value==="wikiComponent"&&await S()},ge=async()=>{if(!E.RUNTIME_OFFLINE_USE_DECRYPT_JS_ON_FOOTER_STAGING)await ie.decryptWiki(m.value);else if(E.RUNTIME_OFFLINE_USE_DECRYPT_JS_ON_FOOTER_STAGING){let k=document.getElementById("load-script"),C=document.createElement("script");C.src="/crypto-js.min.js",k?.appendChild(C);let _=document.createElement("script");_.src="/ExternalDecrypt.js",k?.appendChild(_)}},fe=async()=>{(await H.addTempBookcase(d.value)).success&&re.success(`${i("addSuccess")}`)};return K(async()=>{w.value.innerText||await ce(),window.addEventListener("scroll",le),q.value=!0,E.BUILD_OFFLINE_MODE&&e.offlineMode==="offline"&&E.RUNTIME_OFFLINE_ENABLE_DECRYPT_WIKI&&ge()}),Re(()=>{window.removeEventListener("scroll",le)}),{wikiData:m,wikiType:b,nowPage:y,pageTitle:v,title:w,dataKey:d,nowSection:p,isShowDrawer:A,isLoaded:q,showComponentAddSystemButton:g,devices:U,routeName:a,buildConfig:E,pageInit:ce,switchPage:l,scrollTo:ke,setRef:ve,toggleDrawer:ye,addBookList:fe}}}),pe=e=>(J("data-v-4e7c0d92"),e=e(),Y(),e),Vs={class:"page-title-wrap"},qs={class:"title row items-center",id:"pageTitle",ref:"title"},Gs={class:"block__tabs"},Hs=["onClick"],Ks={key:1,class:"wiki-wrap"},Js={key:0,class:"sidebar"},Ys={class:"sidebar-title"},zs=["onClick"],Qs=pe(()=>s("img",{src:"/images/icons/add.svg",alt:""},null,-1)),Zs=pe(()=>s("img",{src:"/images/icons/post_add.svg",alt:""},null,-1)),Xs=["index"];function xs(e,o,a,d,v,w){const i=Cs,c=z("router-link"),b=As,g=hs,m=ns,y=Zt,p=Gt,A=Nt,q=wt,U=it;return t(),n(h,null,[e.isLoaded&&e.buildConfig.BUILD_OFFLINE_MODE&&e.buildConfig.RUNTIME_OFFLINE_USE_GOOGLE_BREADCRUMB_LIST?(t(),$(i,{key:0})):u("",!0),s("div",{class:L(["page-title",{"sidebar-style":e.nowPage!==0||!e.buildConfig.RUNTIME_SHOW_WIKI_COMPONENT_SIDEBAR}])},[s("div",Vs,[s("div",qs,[s("span",null,r(e.pageTitle),1)],512),te(s("div",Gs,[(t(!0),n(h,null,I(e.wikiData,(D,S)=>(t(),n("div",{class:L(["tab",{active:S===e.nowPage}]),key:S,onClick:l=>e.switchPage(S)},r(e.$t(D.name)),11,Hs))),128))],512),[[se,!e.buildConfig.BUILD_OFFLINE_MODE]])])],2),e.isLoaded?(t(),n("div",Ks,[e.buildConfig.RUNTIME_SHOW_WIKI_COMPONENT_SIDEBAR?te((t(),n("div",Js,[s("div",Ys,r(e.$t("$i18n_menu_$i18n")),1),(t(!0),n(h,null,I(e.wikiData,(D,S)=>(t(),n("div",{key:S},[(t(!0),n(h,null,I(D.templates,(l,B)=>(t(),n(h,{key:"side_"+l.block_id},[S===0?(t(),n("div",{key:0,class:L(["sidebar-item",{active:B===e.nowSection}]),onClick:G=>e.scrollTo(B)},r(e.$t(l.block_name)),11,zs)):u("",!0)],64))),128))]))),128)),e.showComponentAddSystemButton?(t(),n("div",{key:0,class:"add-system",onClick:o[0]||(o[0]=(...D)=>e.toggleDrawer&&e.toggleDrawer(...D))},[Qs,s("span",null,r(e.$t("$i18n_addToSystemsList_$i18n")),1)])):u("",!0),!e.buildConfig.BUILD_OFFLINE_MODE&&e.routeName==="wikiDocument"&&e.buildConfig.RUNTIME_ENABLE_WIKI_DOCUMENT_BOOKCASE?(t(),n("div",{key:1,class:"add-bookcase",onClick:o[1]||(o[1]=(...D)=>e.addBookList&&e.addBookList(...D))},[Zs,s("span",null,r(e.$t("$i18n_addToBookList_$i18n")),1)])):u("",!0),!e.buildConfig.BUILD_OFFLINE_MODE&&e.routeName==="wikiDocument"&&e.buildConfig.RUNTIME_ENABLE_WIKI_DOCUMENT_DIRECTORY?(t(),$(c,{key:2,to:`/${e.$i18n.locale}/dir/${e.dataKey}`,class:L(["rag-dir",{soloDir:!e.buildConfig.RUNTIME_ENABLE_WIKI_DOCUMENT_BOOKCASE}])},{default:F(()=>[V(Oe,{name:"sym_o_forum",size:""}),s("span",null,r(e.$t("$i18n_Data_scope_conversation_$i18n")),1)]),_:1},8,["to","class"])):u("",!0)],512)),[[se,e.nowPage===0]]):u("",!0),(t(!0),n(h,null,I(e.wikiData,(D,S)=>te((t(),n("div",{class:L(["content",{"sidebar-style":e.nowPage!==0||!e.buildConfig.RUNTIME_SHOW_WIKI_COMPONENT_SIDEBAR}]),key:S},[(t(!0),n(h,null,I(D.templates,(l,B)=>(t(),n("div",{class:"template",key:l.block_id,index:S===0?B:-1,ref_for:!0,ref:e.setRef},[l.block_type==="wiki"?(t(),$(b,{key:0,content:l.content,title:l.block_name,limited:l.limited},null,8,["content","title","limited"])):u("",!0),l.block_type==="resource"&&l.data_category==="attachments"?(t(),$(g,{key:1,attachments:l.content,title:l.block_name,limited:l.limited,type:"attachments"},null,8,["attachments","title","limited"])):u("",!0),l.block_type==="resource"&&l.data_category==="links"?(t(),$(g,{key:2,links:l.content,title:l.block_name,limited:l.limited,type:"links"},null,8,["links","title","limited"])):u("",!0),l.block_type==="recommend"&&l.data_category==="components"?(t(),$(m,{key:3,components:l.content,title:l.block_name,limited:l.limited},null,8,["components","title","limited"])):u("",!0),l.block_type==="recommend"&&l.data_category==="issues"?(t(),$(y,{key:4,issues:l.content,title:l.block_name,limited:l.limited},null,8,["issues","title","limited"])):u("",!0),l.block_type==="recommend"&&l.data_category==="documents"?(t(),$(p,{key:5,documents:l.content,title:l.block_name,limited:l.limited},null,8,["documents","title","limited"])):u("",!0),l.block_type==="report"&&l.data_category==="report_list"?(t(),$(A,{key:6,reports:l.content,limited:l.limited},null,8,["reports","limited"])):u("",!0)],8,Xs))),128))],2)),[[se,S===e.nowPage]])),128))])):u("",!0),e.routeName==="wikiComponent"?(t(),$(q,{key:2,isShowDrawer:e.isShowDrawer,devices:e.devices?e.devices:[],onToggleDrawer:e.toggleDrawer},null,8,["isShowDrawer","devices","onToggleDrawer"])):u("",!0),!e.buildConfig.BUILD_OFFLINE_MODE&&e.routeName==="wikiDocument"?(t(),$(U,{key:3})):u("",!0)],64)}var _o=O(js,[["render",xs],["__scopeId","data-v-4e7c0d92"]]);export{_o as default};
