import{gg as j,bQ as S,gQ as _,gq as D,gR as y,gS as R,gT as v,gU as T,ac as c,ad as g,ae as C,aN as I,u as E,aS as U,aZ as O,cP as B,a8 as b,gV as V,cR as x,eZ as f,fO as w,a9 as $}from"./vendor.1dc52be5.js";const z=.05;class A{constructor(){this._extents=new j({allocator:t=>t||S()}),this._tmpExtent=S(),this._dirty=!1}get empty(){return this._extents.length===0}get size(){return this._extents.length}clear(){this._extents.clear()}add(t){this._contains(t)||(this._removeContained(t),_(this._extents.pushNew(),t),this._dirty=!0)}pop(){return this._dirty&&this._mergeTight(),this._extents.pop()}merge(t){return this._mergeTight(t),t.hasProgressed}_mergeTight(t=D){const e=this._extents,s=new Set;let r=0;for(;r!==e.length;){e.sort((a,o)=>a[0]-o[0]),r=e.length,s.clear();for(let a=0;a<e.length;++a){if(t.done)return;const o=e.getItemAt(a);for(let n=a+1;n<e.length;++n){const p=e.getItemAt(n);if(p[0]>=o[2])break;s.add(p)}s.forEach(n=>{if(o===n)return;if(n[2]<=o[0])return void s.delete(n);const p=y(o),G=y(n),u=this._tmpExtent;R(o,n,u);const m=p+G;(y(u)-m)/m<z&&(_(o,u),s.delete(n),e.remove(n),t.madeProgress())}),s.add(o)}}this._dirty=!1}_contains(t){return this._extents.some(e=>v(e,t))}_removeContained(t){this._extents.filterInPlace(e=>!v(t,e))}get test(){const t=this;return{containsPoint:e=>t._extents.some(s=>T(s,e))}}}let d=class extends I{constructor(){super(...arguments),this.dirtyExtents=new A,this.globalDirty=!1,this.averageExtentUpdateSize=0,this.dirtyGraphicsSet=new Set,this.handles=new E,this.updateElevation=!1,this.graphicsCoreOwner=null,this.graphicsCore=null,this.events=new U}setup(i,t,e,s){this.graphicsCoreOwner=i,this.queryGraphicUIDsInExtent=t,this.graphicsCore=e,this.elevationProvider=s;const r=this.graphicsCoreOwner.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",a=>this._elevationChanged(a)),this.graphicsCoreOwner.watch("suspended",()=>this._suspendedChange()),r.registerTask(O.ELEVATION_ALIGNMENT,this)])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.graphicsCoreOwner=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}_suspendedChange(){this.graphicsCoreOwner.suspended===!0?this.updateElevation=!1:this.graphicsCoreOwner.suspended===!1&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}get updating(){return this.running}get running(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}get updatingRemaining(){return this.dirtyGraphicsSet.size+this.dirtyExtents.size*this.averageExtentUpdateSize}runTask(i){for(this.globalDirty&&(this._markAllGraphicsElevationDirty(),this.globalDirty=!1,i.madeProgress()),i.run(()=>this.dirtyExtents.merge(i));this.running&&!i.done;)this._updateDirtyGraphics(i),this._updateDirtyExtents(i);this.graphicsCoreOwner.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(i){const t=this.graphicsCoreOwner.view.renderCoordsHelper,e=this.graphicsCore.effectiveUpdatePolicy===B.ASYNC;for(const s of this.dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),b(r)&&(r.alignWithElevation(this.elevationProvider,t,e),i.madeProgress()),i.done)return}}_updateDirtyExtents(i){for(;!this.dirtyExtents.empty&&!i.done;){const t=this.dirtyExtents.pop(),e=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:t,spatialReference:e});const s=this.dirtyGraphicsSet.size;this.queryGraphicUIDsInExtent(t,e,r=>{const a=this.graphicsCore.getGraphics3DGraphicById(r);b(a)&&a.needsElevationUpdates()&&this.dirtyGraphicsSet.add(r)}),this.averageExtentUpdateSize=.1*(this.dirtyGraphicsSet.size-s)+.9*this.averageExtentUpdateSize,i.madeProgress()}}_markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((i,t)=>this.dirtyGraphicsSet.add(t))}_elevationChanged(i){if(i.context==="scene"&&(!this.graphicsCore.layer.elevationInfo||this.graphicsCore.layer.elevationInfo.mode!=="relative-to-scene"))return;const{extent:t,spatialReference:e}=i;if(this.graphicsCoreOwner.suspended){if(!this.updateElevation){const s=this.graphicsCore.computedExtent;s&&t[2]>s.xmin&&t[0]<s.xmax&&t[3]>s.ymin&&t[1]<s.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:e})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};c([g({readOnly:!0})],d.prototype,"updating",null),c([g({readOnly:!0})],d.prototype,"updatingRemaining",null),d=c([C("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],d);const q=d,P=1.2;let l=class extends I{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new E,this.graphicsCoreOwner=null,this.updating=!0}setup(i){this.graphicsCoreOwner=i,this.extentIntersection=new V({renderCoordsHelper:i.view.renderCoordsHelper});const t=i.view,e=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",()=>this._viewChange()),t.state.watch("camera",()=>this._viewChange(),!0),s.registerTask(O.FRUSTUM_VISIBILITY,this),e.on("elevation-bounds-change",()=>this._elevationBoundsChange())]),t.viewingMode==="local"?this.isVisibleBelowSurface=!0:this.handles.add([x(e,["opacity","wireframe"],()=>this._updateIsVisibleBelowSurface()),x(t,"map.ground.navigationConstraint.type",()=>this._updateIsVisibleBelowSurface())])}destroy(){this.graphicsCoreOwner=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(i){this.extent=i,this.extentIntersectionDirty=!0,this._setDirty()}_viewChange(){this._setDirty()}_elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(i){this._isVisibleBelowSurface=i,this._setDirty(),this.extentIntersectionDirty=!0}_updateIsVisibleBelowSurface(){const i=this.graphicsCoreOwner.view,t=i.basemapTerrain,e=i.viewingMode==="local",s=i.map.ground&&i.map.ground.navigationConstraint&&i.map.ground.navigationConstraint.type==="none";this.isVisibleBelowSurface=e||!t.opaque||s}_updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const i=this.graphicsCoreOwner.view;let t;if(this._isVisibleBelowSurface)t=-.3*f(i.spatialReference).radius;else{const{min:e,max:s}=i.basemapTerrain.elevationBounds;t=e-Math.max(1,(s-e)*(P-1))}this.extentIntersection.update(this.extent,i.spatialReference,t)}get running(){return this.updating}runTask(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this._updateExtentIntersection();const i=this.graphicsCoreOwner.view.frustum,t=f(this.graphicsCoreOwner.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(i,t))}};c([g({readOnly:!0})],l.prototype,"suspended",void 0),c([g({readOnly:!0})],l.prototype,"updating",void 0),l=c([C("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],l);const M=l;var h;(function(i){i[i.Object=0]="Object",i[i.RenderGeometry=1]="RenderGeometry",i[i.External=2]="External",i[i.COUNT=3]="COUNT"})(h||(h={}));class k{constructor(){this.items=[]}addObject(t,e){this.items.push({type:h.Object,objectStateId:e,object:t})}addRenderGeometry(t,e,s){this.items.push({type:h.RenderGeometry,objectStateId:e,renderGeometry:t,owner:s})}addExternal(t,e){this.items.push({type:h.External,objectStateId:e,remove:t})}remove(t){for(let e=this.items.length-1;e>=0;--e){const s=this.items[e];s.objectStateId===t&&(this._removeObjectStateItem(s),this.items.splice(e,1))}}removeObject(t){for(let e=this.items.length-1;e>=0;--e){const s=this.items[e];s.type===h.Object&&s.object===t&&(this._removeObjectStateItem(s),this.items.splice(e,1))}}removeRenderGeometry(t){for(let e=this.items.length-1;e>=0;--e){const s=this.items[e];s.type===h.RenderGeometry&&s.renderGeometry===t&&(this._removeObjectStateItem(s),this.items.splice(e,1))}}removeAll(){this.items.forEach(t=>{this._removeObjectStateItem(t)}),this.items=[]}_removeObjectStateItem(t){switch(t.type){case h.Object:t.objectStateId.channel===w.Highlight?t.object.removeHighlight(t.objectStateId):t.objectStateId.channel===w.MaskOccludee&&t.object.removeOcclude(t.objectStateId);break;case h.RenderGeometry:t.owner.removeRenderGeometryObjectState(t.renderGeometry,t.objectStateId);break;case h.External:t.remove(t.objectStateId)}}}class N{constructor(t,e){this.stateType=t,this.objectIdField=e,this.objectStateSet=new k,this.ids=new Set,this.paused=!1}hasGraphic(t){if(this.objectIdField){const e=t.graphic.attributes[this.objectIdField];return this.ids.has(e)}return this.ids.has(t.graphic.uid)}}class H{constructor(t){this._graphicsCore=t,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach(t=>t.objectStateSet.removeAll()),this._stateSets=null}acquireSet(t,e){const s=new N(t,e);this._stateSets.push(s);const r=$(()=>this.releaseSet(s));return{set:s,handle:r}}releaseSet(t){t.objectStateSet.removeAll();const e=this._stateSets?this._stateSets.indexOf(t):-1;e!==-1&&this._stateSets.splice(e,1)}_addObjectStateSet(t,e){t.addObjectStateSet(e.stateType,e.objectStateSet)}_removeObjectStateSet(t,e){t.removeObjectState(e.objectStateSet)}setUid(t,e){t.ids.add(e);const s=this._graphicsCore.graphics3DGraphics.get(e);s&&this._addObjectStateSet(s,t)}setUids(t,e){e.forEach(s=>this.setUid(t,s))}setObjectIds(t,e){e.forEach(s=>t.ids.add(s)),this._initializeSet(t)}addGraphic(t){this._stateSets.forEach(e=>{!e.paused&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)})}removeGraphic(t){this._stateSets.forEach(e=>{e.hasGraphic(t)&&this._removeObjectStateSet(t,e)})}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach(t=>t.objectStateSet.removeAll())}_initializeSet(t){const e=this._graphicsCore.graphics3DGraphics;t.objectIdField?e.forEach(s=>{s&&t.hasGraphic(s)&&this._addObjectStateSet(s,t)}):t.ids.forEach(s=>{const r=e.get(s);r&&this._addObjectStateSet(r,t)})}get test(){return{states:this._stateSets}}}export{q as d,M as l,H as s};
