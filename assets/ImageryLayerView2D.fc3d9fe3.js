import{aM as R,ac as s,ad as n,ae as x,aN as E,fJ as $,g,u8 as B,a8 as b,ke as D,gf as k,aH as q,b1 as I,u9 as T,a7 as z,qD as A,c as u,fQ as _,hc as U,ua as C,e5 as P,n as V,fG as F}from"./vendor.1dc52be5.js";import{_ as M,d as O}from"./RasterVFDisplayObject.a460387c.js";import{f as j}from"./LayerView2D.117f6ba5.js";import{r as J}from"./BaseGraphicContainer.875f1ac5.js";import{n as G}from"./HighlightGraphicContainer.ca09bc07.js";import{t as H}from"./BitmapContainer.ff87baf1.js";import{s as L}from"./Container.a479a20a.js";import{i as N}from"./Bitmap.2f97ffc8.js";import{S as W}from"./ExportStrategy.18610da5.js";import{B as Q}from"./rasterProjectionHelper.33d3a601.js";import{b as K}from"./brushes.576aab26.js";import{I as S}from"./Utils.25ecb0e0.js";import{a as X}from"./WGLContainer.5147bf48.js";import{u as Y}from"./ImageryLayerView.594720ba.js";import{i as Z}from"./RefreshableLayerView.3b33c0ca.js";import"./dataUtils.8a57b425.js";import"./CIMSymbolHelper.e5777d0e.js";import"./BidiEngine.b9926823.js";import"./enums.c01b5663.js";import"./alignmentUtils.03ee467b.js";import"./definitions.52b5fae8.js";import"./number.dc47462b.js";import"./GeometryUtils.e53da643.js";import"./normalizeUtilsSync.74de1b64.js";import"./FeatureContainer.183e9c44.js";import"./visualVariablesUtils.7fd15dde.js";import"./visualVariablesUtils.2f752113.js";import"./TileContainer.c6767449.js";import"./Matcher.28a7d10a.js";import"./tileUtils.85af3d89.js";import"./TileClipper.95bbf067.js";import"./Geometry.e891c191.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.4c6f010e.js";import"./cimAnalyzer.13178822.js";import"./ExpandedCIM.b5e8a891.js";import"./schemaUtils.64b2d47a.js";import"./createSymbolSchema.d85b2a0c.js";import"./MD5.67d7a872.js";import"./util.2009583e.js";import"./ComputedAttributeStorage.96ac9ebb.js";import"./GraphicsView.eb98715d.js";import"./EffectView.c4d390fc.js";import"./ProgramTemplate.baf6faf0.js";import"./StyleDefinition.57b891ae.js";import"./popupUtils.b61067f9.js";const ee=R.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let h=class extends E{constructor(){super(...arguments),this.attached=!1,this.container=new L,this.updateRequested=!1,this.type="imagery",this._bitmapView=new H}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(t=>{$(t)||ee.error(t)})}hitTest(e){return new g({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new W({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:i,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then(t=>{const i=e.source;i.pixelBlock=t.pixelBlock,i.filter=r=>this.layer.applyFilter(r),this.container.requestRender()})})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,i=e.map(a=>a.source).filter(a=>a.extent&&a.extent.intersects(t)).map(a=>({extent:a.extent,pixelBlock:a.originalPixelBlock})),r=B(i,t);return b(r)?{extent:r.extent,pixelBlock:r.pixelBlock}:null}return null}_fetchImage(e,t,i,r){return(r=r||{}).timeExtent=this.timeExtent,r.requestAsImageElement=!0,this.layer.fetchImage(e,t,i,r).then(a=>a.imageElement?a.imageElement:this.layer.applyRenderer(a.pixelData,{signal:r.signal}).then(o=>{const l=new N(o.pixelBlock,o.extent.clone(),a.pixelData.pixelBlock);return l.filter=y=>this.layer.applyFilter(y),l}))}};s([n()],h.prototype,"attached",void 0),s([n()],h.prototype,"container",void 0),s([n()],h.prototype,"layer",void 0),s([n()],h.prototype,"strategy",void 0),s([n()],h.prototype,"timeExtent",void 0),s([n()],h.prototype,"view",void 0),s([n()],h.prototype,"updateRequested",void 0),s([n()],h.prototype,"updating",null),s([n()],h.prototype,"type",void 0),h=s([x("esri.views.2d.layers.imagery.ImageryView2D")],h);const te=h;class ie extends X{constructor(){super(...arguments),this.symbolTypes=["triangle"]}get requiresDedicatedFBO(){return!1}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[K],target:()=>this.children,drawPhase:S.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===S.MAP&&this.symbolTypes.forEach(i=>{t.renderPass=i,super.doRender(t)})}}const re=R.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let p=class extends E{constructor(e){super(e),this.update=D((t,i)=>this._update(t,i).catch(r=>{$(r)||re.error(r)}))}get updating(){return!!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(e,t,i){if(!e.stationary)return;const{extent:r,spatialReference:a}=e.state,o=new k({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,y]=e.state.size;this._loading=this.fetchPixels(o,l,y,i);const w=await this._loading;this._addToDisplay(w,t,e.state),this._loading=null}_addToDisplay(e,t,i){if(q(e.pixelBlock))return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=e,o=new M(a);o.offset=[0,0],o.symbolizerParameters=t,o.rawPixelData=e,o.invalidateVAO(),o.x=r.xmin,o.y=r.ymax,o.pixelRatio=i.pixelRatio,o.rotation=i.rotation,o.resolution=i.resolution,o.width=a.width*t.symbolTileSize,o.height=a.height*t.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(o)}};s([n()],p.prototype,"fetchPixels",void 0),s([n()],p.prototype,"container",void 0),s([n()],p.prototype,"_loading",void 0),s([n()],p.prototype,"updating",null),p=s([x("esri.views.2d.layers.imagery.ImageryVFStrategy")],p);const se=p;let d=class extends I{constructor(){super(...arguments),this.attached=!1,this.container=new ie,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:o}=this.layer.renderer,{extent:l,width:y,height:w}=T(e,t,i,o,a);if(b(a)&&!a.intersects(e))return{extent:l,pixelBlock:null};const v={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:o,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(v)){const c=this.getPixelData();if(b(c)&&`${c.extent.xmin}, ${c.extent.ymin}, ${c.extent.xmax}, ${c.extent.ymax}`===v.bbox)return c}const{pixelData:f}=await this.layer.fetchImage(l,y,w,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});return this._dataParameters=v,q(f.pixelBlock)?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?z(A(f.pixelBlock,"vector-uv")):f.pixelBlock}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new se({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(u(()=>this.layer.renderer,e=>this._updateSymbolizerParams(e),_),"vector-field-view-update")}detach(){this._strategy.destroy(),this.container.children.forEach(e=>e.destroy()),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return{extent:e,pixelBlock:t}}hitTest(e){return new g({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams)}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams)}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,i=this._dataParameters.time===e.time,r=this._dataParameters.symbolTileSize===e.symbolTileSize,a=this._dataParameters.bbox===e.bbox;return t&&i&&r&&a}async _getProjectedFullExtent(e){try{return await Q(this.layer.fullExtent,e)}catch{try{const i=(await U(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?k.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(e){e.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};s([n()],d.prototype,"attached",void 0),s([n()],d.prototype,"container",void 0),s([n()],d.prototype,"layer",void 0),s([n()],d.prototype,"timeExtent",void 0),s([n()],d.prototype,"type",void 0),s([n()],d.prototype,"view",void 0),s([n()],d.prototype,"updating",null),d=s([x("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const ae=d;let m=class extends Y(Z(j(F))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new C,this.subview=null}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return!!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,t){return this.subview?[this.subview.hitTest(e)]:null}update(e){var t;(t=this.subview)==null||t.update(e)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new J({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new G(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([u(()=>{var e;return(e=this.layer.blendMode)!=null?e:"normal"},e=>this.subview.container.blendMode=e,_),u(()=>{var e;return(e=this.layer.effect)!=null?e:null},e=>this.subview.container.effect=e,_),u(()=>this.layer.exportImageServiceParameters.version,e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())},P),u(()=>this.timeExtent,e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch()},P),this.layer.on("redraw",()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch()}),u(()=>this.layer.renderer,()=>this._setSubView())],"imagerylayerview-update")}detach(){var e,t;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(e=this.subview)==null||e.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,(t=this._highlightView)==null||t.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e,t){if(!((Array.isArray(e)?e[0]:V.isCollection(e)?e.getItemAt(0):e)instanceof g))return{remove:()=>{}};let i=[];return Array.isArray(e)||V.isCollection(e)?i=e.map(r=>r.clone()):e instanceof g&&(i=[e.clone()]),this._highlightGraphics.addMany(i),{remove:()=>{this._highlightGraphics.removeMany(i)}}}async doRefresh(){this.requestUpdate()}isUpdating(){return!this.subview||this.subview.updating}_setSubView(){var e;if(!this.view)return;const t=(e=this.layer.renderer)==null?void 0:e.type;let i="imagery";if(t==="vector-field"&&this.layer.format==="lerc"?i="imageryVF":t==="flow"&&(i="flow"),this.subview){var r;if(this.subview.type===i)return this._attachSubview(this.subview),void(this.subview.type==="flow"&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=i==="imagery"?new te({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):i==="imageryVF"?new ae({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new O({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect)}_detachSubview(e){e!=null&&e.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1)}};s([n()],m.prototype,"pixelData",null),s([n({readOnly:!0})],m.prototype,"updating",null),s([n()],m.prototype,"subview",void 0),m=s([x("esri.views.2d.layers.ImageryLayerView2D")],m);const Ye=m;export{Ye as default};