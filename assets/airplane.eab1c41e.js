import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{i as s,S as m,o as i}from"./utils.6c064a96.js";import{d as p,k as r,h as c,a as y,j as d,g as h,r as w}from"./vendor.1dc52be5.js";import{w as n}from"./utils.587ca644.js";const t=s(m,new p({position:{spatialReference:r.WebMercator,x:1.0995350699631039e6,y:5865057781588203e-9,z:1743.692554133013},heading:30.869375675742816,tilt:77.2140490547386})),f=new c({name:"Airplane_Propeller",styleName:"EsriRealisticTransportationStyle"}).fetchSymbol();let a,e,o;i("create",async()=>{a=new y({elevationInfo:{mode:"relative-to-ground"}}),t.map.add(a);const l=new d({spatialReference:r.WebMercator,x:1.0996065351002163e6,y:5865177810734176e-9,z:20});e=new h({geometry:l,symbol:await f}),a.add(e),o=new w({view:t,layer:a}),o.update(e),n(t,e)});i("set-absolute-height",()=>{a.elevationInfo={mode:"absolute-height"},e.geometry.z=1708,o.update(e),n(t,e)});
