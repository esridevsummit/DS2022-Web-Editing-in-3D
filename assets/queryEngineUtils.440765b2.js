var a=Object.defineProperty,s=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))g.call(t,o)&&n(e,o,t[o]);return e},c=(e,t)=>s(e,d(t));import{ii as u,ij as j,ik as m}from"./vendor.1dc52be5.js";import{s as w}from"./PointSnappingHint.cb4dc597.js";class b extends u{constructor(t){super(c(i({},t),{constraint:new j(t.coordinateHelper,t.targetPoint)}))}get hints(){return[new w(this.targetPoint)]}}function T(e,t){switch(e.type){case"edge":return new m({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId});case"vertex":return new b({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId})}}export{T as o};
