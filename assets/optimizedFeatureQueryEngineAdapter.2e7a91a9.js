import{aH as o,gW as r,g0 as s,g1 as i}from"./vendor.1dc52be5.js";const g={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new i(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>(o(t.centroid)&&(t.centroid=r(new s,t.geometry,e.hasZ,e.hasM)),t.centroid)};export{g as i};
