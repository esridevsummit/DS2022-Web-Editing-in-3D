var E=Object.defineProperty;var v=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,g=(t,e)=>{for(var i in e||(e={}))b.call(e,i)&&d(t,i,e[i]);if(v)for(var i of v(e))_.call(e,i)&&d(t,i,e[i]);return t};import{a4 as S,a5 as G,a6 as n,a7 as V,a8 as a,j as w,g as o,a9 as c,aa as h,ab as f,ac as l,ad as p,ae as x}from"./vendor.1dc52be5.js";import{g as L}from"./SnappingVisualizer2D.e4b6c44d.js";import{_ as O,b as C,G as M,c as R}from"./drawSurfaces.38df7384.js";import"./enums.c01b5663.js";import"./settings.e8b6f524.js";import"./SnappingContext.b304ea51.js";import"./PointSnappingHint.cb4dc597.js";import"./EditGeometryOperations.222ef9ca.js";import"./drawUtils.a0bb65f2.js";const T=new S({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),D=new G({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),$=new G({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let s=class extends O{constructor(t){super(t),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:n(t.activeLineSymbol,T),regularVertices:n(t.regularVerticesSymbol,D),activeVertex:n(t.activeVertexSymbol,$),fill:V(t.activeFillSymbol)}}normalizeCtorArgs(t){const e=g({},t);return delete e.activeFillSymbol,delete e.activeVertexSymbol,delete e.regularVerticesSymbol,delete e.activeLineSymbol,e}initializeGraphic(t){return a(this._visualElementSymbols.fill)&&(t.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const t=this.view;return new C({view:t,manipulators:this.manipulators,geometryType:M(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new R(t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new L(this.internalGraphicsLayer)})}onActiveVertexChanged(t){if(this.geometryType==="point")return null;const[e,i]=t,r=new w({x:e,y:i,spatialReference:this.drawOperation.spatialReference});return a(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=r,null):(this._visualElementGraphics.activeVertex=new o({geometry:r,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(u),c(()=>{a(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=h(this._visualElementGraphics.activeVertex))}))}onOutlineChanged(t){const e=t.clone();if(e.type==="polyline"){const i=e.paths[e.paths.length-1];i.splice(0,i.length-2)}return a(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=e,null):(this._visualElementGraphics.outline=new o({geometry:e,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(u),c(()=>{a(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=h(this._visualElementGraphics.outline))}))}onRegularVerticesChanged(t){const e=new f({points:t,spatialReference:this.drawOperation.spatialReference});return a(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=e,null):(this._visualElementGraphics.regularVertices=new o({geometry:e,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(u),c(()=>{a(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=h(this._visualElementGraphics.regularVertices))}))}};function u(t,e){var i,r,m,y;return((i=(r=t.attributes)==null?void 0:r.displayOrder)!=null?i:-1/0)-((m=(y=e.attributes)==null?void 0:y.displayOrder)!=null?m:-1/0)}l([p()],s.prototype,"activeFillSymbol",void 0),l([p({readOnly:!0})],s.prototype,"type",void 0),l([p({constructOnly:!0,nonNullable:!0})],s.prototype,"view",void 0),s=l([x("esri.views.2d.interactive.draw.DrawGraphicTool2D")],s);export{s as DrawGraphicTool2D};