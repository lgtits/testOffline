import{a as i,ab as n}from"./index.125062c9.js";const c=i.BUILD_ENABLE_OSINT_DUMMY_DATA_MODE,a=window.location.origin,p=async(t,e)=>{if(!c)return await n.get(`/conference?year=${t}&confId=${e}`);if(t==="2024"&&e.toLocaleLowerCase()==="vehiclesec")return await n.get(`${a}/dummyData/conference/documentListSampleVehicleSec.json`);if(t==="2024"&&e.toLocaleLowerCase()==="bhasia")return await n.get(`${a}/dummyData/conference/documentListSampleBHASIA.json`);if(t==="2024"&&e.toLocaleLowerCase()==="ieee")return await n.get(`${a}/dummyData/conference/documentListSampleIEEE.json`)},m=async()=>c?await n.get(`${a}/dummyData/conference/conferenceListSample.json`):await n.get("/conference_list"),u=async()=>c?await n.get(`${a}/dummyData/conference/conferenceListSample.json`):await n.get("/news_list"),l=async(t,e,r)=>{if(console.log("get data: ",t,e,r),!c){const s=await n.get(`/conference?year=${t}&confId=${e}/${r}`);return o(s)}if(e==="bhasia")return await n.get(`${a}/dummyData/conference/conferenceDataSampleBHASIA.json`);if(e==="vehiclesec"){const s=await n.get(`${a}/dummyData/conference/conferenceDataSampleVehicleSec.json`);return o(s)}else{const s=await n.get(`${a}/dummyData/conference/conferenceDataSampleIEEE.json`);return o(s)}},o=t=>{const e=i.RUNTIME_CONFERENCE_DATA_LIST_RISK_EXPAND_ALL_BY_DEFAULT;return{...t,sections:t.sections.map(s=>({...s,expanded:e}))}};var D={getConference:p,getConferenceList:m,getNewsList:u,getData:l};export{D as C};
