var f=Object.defineProperty,u=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var h=(i,e,t)=>e in i?f(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,p=(i,e)=>{for(var t in e||(e={}))b.call(e,t)&&h(i,t,e[t]);if(c)for(var t of c(e))R.call(e,t)&&h(i,t,e[t]);return i},l=(i,e)=>u(i,g(e));import{nJ as C,ac as F,ae as E}from"./vendor.1dc52be5.js";import{a as _}from"./WGLContainer.5147bf48.js";import{f as v}from"./LayerView2D.117f6ba5.js";import y from"./GroupLayerView.27d13916.js";import"./brushes.576aab26.js";import"./definitions.52b5fae8.js";import"./Utils.25ecb0e0.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./ProgramTemplate.baf6faf0.js";import"./StyleDefinition.57b891ae.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.4c6f010e.js";import"./alignmentUtils.03ee467b.js";import"./Container.a479a20a.js";import"./EffectView.c4d390fc.js";class w extends _{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const t=this.createRenderParams(e),{context:r,painter:o,profiler:s}=t;this._prevFBO=r.getBoundFramebufferObject(),s.recordContainerStart(this.name);const n=this._getFbo(t),m=o.getRenderTarget();r.bindFramebuffer(n),o.setRenderTarget(n),r.setDepthWriteEnabled(!0),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);for(const a of this.children)a.beforeRender(e);for(const a of this.children)a.processRender(t);for(const a of this.children)a.afterRender(e);o.setRenderTarget(m),o.releaseFbo(n),r.bindFramebuffer(this._prevFBO),o.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),r.setStencilTestEnabled(!1),r.setStencilWriteMask(0),o.blitTexture(r,n.colorTexture,C.NEAREST),o.compositeLayer(t,this.computedOpacity),s.recordContainerEnd()}createRenderParams(e){return l(p({},super.createRenderParams(e)),{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1})}_getFbo(e){const{context:t,painter:r}=e,{width:o,height:s}=t.getViewport();return r.acquireFbo(o,s)}}let d=class extends v(y){constructor(){super(...arguments),this.container=new w}attach(){this._updateStageChildren(),this.handles.add(this.layerViews.on("after-changes",()=>this._updateStageChildren()),"grouplayerview2d")}detach(){this.handles.remove("grouplayerview2d"),this.container.removeAllChildren()}update(i){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((i,e)=>this.container.addChildAt(i.container,e))}};d=F([E("esri.views.2d.layers.GroupLayerView2D")],d);const G=d;export{G as default};
