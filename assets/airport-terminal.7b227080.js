import"./modulepreload-polyfill.b7f2da20.js";/* empty css             */import{i,S as r,o}from"./utils.6c064a96.js";import{d as p,k as l,a as c,r as m,f,i as d,l as h,n as y}from"./vendor.1dc52be5.js";import{w as g}from"./utils.587ca644.js";const t=i(r,new p({position:{spatialReference:l.WebMercator,x:1.0999935949158794e6,y:5865684589934241e-9,z:1982.2895089341328},heading:300.363239318732,tilt:25.4903384824162}));let s=new c({elevationInfo:{mode:"absolute-height"}});t.map.add(s);let a=new m({view:t,layer:s});a.on("create",e=>{if(e.state==="complete"){const n=e.graphic;a.update(n),g(t,n)}});o("create",async()=>{a.polygonSymbol=new f({symbolLayers:[new d({size:10,material:{color:[255,255,255,1]},edges:new h({size:1,color:[0,0,0,1]})})]}),a.create("polygon")});o("enable-snapping",async()=>{const e=a.snappingOptions;e.enabled=!0,e.featureSources=new y([{layer:s}])});o("enable-edge-offset",async()=>{const e=a.defaultUpdateOptions.reshapeOptions;e.edgeOperation="offset"});
