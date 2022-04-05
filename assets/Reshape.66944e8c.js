var D=Object.defineProperty,U=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var C=(e,t,i)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,V=(e,t)=>{for(var i in t||(t={}))L.call(t,i)&&C(e,i,t[i]);if(O)for(var i of O(t))P.call(t,i)&&C(e,i,t[i]);return e},M=(e,t)=>U(e,z(t));import{a5 as f,aM as j,aS as B,u as R,n as H,gy as K,h6 as k,aa as E,aH as w,ai as N,aX as q,a as J,a8 as b,aY as A,bP as S,g as u,j as x,gx as Q,h7 as T,a$ as W,h8 as X,V as Y,ac as v,ad as m,ae as Z,h1 as ee,h5 as te}from"./vendor.1dc52be5.js";import{g as ie}from"./SnappingVisualizer2D.e4b6c44d.js";import{s as se}from"./drawUtils.a0bb65f2.js";import{h as re,T as oe}from"./GraphicMover.9f0e19b3.js";import{h as ne}from"./settings.e8b6f524.js";import{S as ae}from"./EditGeometryOperations.222ef9ca.js";import{e as he}from"./SnappingContext.b304ea51.js";import"./enums.c01b5663.js";import"./GraphicManipulator.8bfda6fd.js";import"./PointSnappingHint.cb4dc597.js";class ce{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-start"}}class pe{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape"}}class le{constructor(t,i,s){this.graphic=t,this.mover=i,this.selected=s,this.type="reshape-stop"}}class de{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-start"}}class ve{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move"}}class me{constructor(t,i,s){this.mover=t,this.dx=i,this.dy=s,this.type="move-stop"}}class ye{constructor(t){this.added=t,this.type="vertex-select"}}class _e{constructor(t){this.removed=t,this.type="vertex-deselect"}}class ge{constructor(t,i,s,o){this.added=t,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-add"}}class ue{constructor(t,i,s,o){this.removed=t,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-remove"}}const y=ne.reshapeGraphics,I={vertices:{default:new f({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new f({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new f({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}},$="esri.views.draw.support.Reshape",xe=j.getLogger($);let d=class extends B.EventedAccessor{constructor(e){super(e),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new R,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._viewHandles=new R,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new H,this.midpointSymbol=new f({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.type="reshape",this.vertexGraphics=new H,this.view=null}initialize(){this._highlightHelper=new re({view:this.view}),this._setup(),this._handles.add([K(this,"view.ready",()=>{const{layer:e,view:t}=this;ee(t,e),this._viewHandles.add([t.on("key-down",i=>this._keyDownHandler(i),te.TOOL)])}),k(this,"graphic",()=>this.refresh()),k(this,"layer",(e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh()}),k(this,"enableMidpoints",()=>{this.refresh()})])}destroy(){var e;this._reset(),(e=this._mover)==null||e.destroy(),this._mover=null,this._handles=E(this._handles),this._viewHandles=E(this._viewHandles)}set highlightsEnabled(e){var t;(t=this._highlightHelper)==null||t.removeAll(),this._set("highlightsEnabled",e),this._setUpHighlights()}get state(){const e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"}set symbols(e){const{midpoints:t=I.midpoints,vertices:i=I.vertices}=e||{};this._set("symbols",{midpoints:t,vertices:i})}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:e,layer:t}=this;if(!t||!e||w(e.geometry))return;const i=e.geometry;i.type!=="mesh"&&i.type!=="extent"?(this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper.add(this.graphic)}_setUpGeometryHelper(){const e=this.graphic.geometry;if(w(e)||e.type==="mesh"||e.type==="extent")return void this._logGeometryTypeError();const t=e.type==="multipoint"?new N({paths:e.points,spatialReference:e.spatialReference}):e;this._editGeometryOperations=ae.fromGeometry(t,q.Local)}_saveSnappingContextForHandle(e,t){var i;this._snappingGraphicsLayer=new J({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new he({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((i=t.viewEvent)==null?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new ie(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._highlightHelper.removeAll(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){b(this.snappingManager)&&this.snappingManager.doneSnapping(),b(this._snappingGraphicsLayer)&&(this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=E(this._editGeometryOperations),this._snappingTask=A(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this._set("selectedVertices",[])}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(e){const t=S(e.clone());if(e.type==="polygon")for(const i of t){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return t}_setupGraphics(){const e=this.graphic.geometry;if(b(e)&&(e.type==="polyline"||e.type==="polygon")){const t=this._getCoordinatesForUI(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t)}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t)}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t)}_createVertexGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,o=[];return e==null||e.forEach((n,r)=>{n.forEach((h,c)=>{var a;const[p,l]=h;o.push(new u({geometry:new x({x:p,y:l,spatialReference:s}),symbol:i==null||(a=i.vertices)==null?void 0:a.default,attributes:M(V({},t),{pathIndex:r,pointIndex:c})}))})}),o}_createMidpointGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,o=[];return e==null||e.forEach((n,r)=>{n.forEach((h,c)=>{const[a,p]=h,l=n[c+1]?c+1:0;if(Q(this.graphic.geometry,"type")==="polygon"||l!==0){const[_,g]=n[l],[G,F]=T([a,p],[_,g]);o.push(new u({geometry:new x({x:G,y:F,spatialReference:s}),symbol:i.midpoints.default,attributes:M(V({},t),{pathIndex:r,pointIndexStart:c,pointIndexEnd:l})}))}})}),o}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<t.length;i++){const s=[];for(let o=0;o<t.length;o++){if(i===o)continue;const n=t[i],r=t[o];n.x===r.x&&n.y===r.y&&s.push(o)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:o}=this,n=s.concat(i).items;e&&n.push(t),this._mover=new oe({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:o,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(e.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else this._isVertex(t)&&(e.viewEvent.stopPropagation(),e.viewEvent.button===2?this._removeVertices(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,o=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(e){const t=e.graphic,{dx:i,dy:s}=e;if(t===this.graphic)return this._clearSelection(),this._resetGraphics(),this._setUpOperation(e),this._emitMoveStartEvent(i,s),void(this._editGeometryOperations.data.type==="point"&&this._onHandleMove(t,i,s,e,()=>this._emitMoveEvent(i,s)));if(!this.selectedVertices.includes(t)){if(this._clearSelection(),this._isMidpoint(t)){const o=this.graphic.clone(),n=this._createVertexFromMidpoint(t);this._emitVertexAddEvent([t],o,n)}this._addToSelection(t)}this._setUpOperation(e),this._emitReshapeStartEvent(t),this._onHandleMove(t,i,s,e,()=>this._emitReshapeEvent(t))}_onGraphicMoveCallback(e){const{graphic:t,dx:i,dy:s}=e;this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s;const{operationType:o}=this._activeOperationInfo;o==="move"?this._editGeometryOperations.data.type==="point"?this._onHandleMove(t,i,s,e,()=>this._emitMoveEvent(i,s)):this._emitMoveEvent(i,s):this._onHandleMove(t,i,s,e,()=>this._emitReshapeEvent(t))}_onGraphicMoveStopCallback(e){const{graphic:t,dx:i,dy:s}=e;this._activeOperationInfo.totalDx+=i,this._activeOperationInfo.totalDy+=s,t===this.graphic?(this._emitMoveStopEvent(),this.refresh()):(this._onHandleMove(t,i,s,e,()=>this._emitReshapeStopEvent(t)),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._isMidpoint(t)&&this.refresh())}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=t.attributes,[n,r]=e[i][s],[h,c]=e[i][o],[a,p]=T([n,r],[h,c]);t.geometry=new x({x:a,y:p,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:e}){return[(e==null?void 0:e.pathIndex)||0,(e==null?void 0:e.pointIndex)||0]}_getVertexFromEditGeometry(e){const[t,i]=this._getIndicesForVertexGraphic(e);return this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,i,s,o){if(A(this._snappingTask),!this._snappingContext)return;const n=e.geometry,r=s.type==="graphic-move-stop";if(b(this.snappingManager)&&this.selectedVertices.length<2&&!r){const h=this.snappingManager;this._stagedVertex=h.update(n,this._snappingContext),this._syncGeometryAfterVertexMove(e,new x(this._stagedVertex),t,i,r),o(),this._snappingTask=W(async c=>{const a=await h.snap(n,this._snappingContext,c);a.valid&&(this._stagedVertex=a.apply(),this._syncGeometryAfterVertexMove(e,new x(this._stagedVertex),t,i,r),o())})}else{const h=b(this._stagedVertex)?new x(this._stagedVertex):n;this._syncGeometryAfterVertexMove(e,h,t,i,r),o()}}async _syncGeometryAfterVertexMove(e,t,i,s,o=!1){const n=this._editGeometryOperations.data.geometry;if(n.type==="point")e.geometry=t;else{const{x:r,y:h}=t,[c,a]=this._getIndicesForVertexGraphic(e);let p=S(n);const l=p[c].length-1;p[c][a]=[r,h],n.type==="polygon"&&(a===0?p[c][l]=[r,h]:a===l&&(p[c][0]=[r,h])),this._isVertex(e)&&(p=this._moveRelatedCoordinates(p,e,r,h),p=this._moveSelectedHandleCoordinates(p,e,i,s,n.type==="polygon"),this._updateMidpointGraphicLocations(p)),this.graphic.geometry=n.clone();const _=this._getVertexFromEditGeometry(e),g=r-_.pos[0],G=h-_.pos[1];this._editGeometryOperations.moveVertices([_],g,G,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t)}}_moveRelatedCoordinates(e,t,i,s){const{relatedGraphicIndices:o}=t.attributes;for(const n of o){const r=this.vertexGraphics.getItemAt(n),{pathIndex:h,pointIndex:c}=r.attributes;e[h][c]=[i,s],r.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,o){for(const n of this.selectedVertices)if(n!==t){const{pathIndex:r,pointIndex:h,relatedGraphicIndices:c}=n.attributes,a=se(n.geometry,i,s,this.view),p=e[r].length-1;e[r][h]=[a.x,a.y],n.geometry=a,o&&(h===0?e[r][p]=[a.x,a.y]:h===p&&(e[r][0]=[a.x,a.y]));for(const l of c){const _=this.vertexGraphics.getItemAt(l),{pathIndex:g,pointIndex:G}=_.attributes;e[g][G]=[a.x,a.y],_.geometry=a}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default"}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(w(s)||s.type!=="polygon"&&s.type!=="polyline")return[];const o=s.clone(),n=[],{pathIndex:r,pointIndexStart:h,pointIndexEnd:c}=e.attributes,{x:a,y:p}=e.geometry,l=c===0?h+1:c,_=S(o);return _[r].splice(l,0,[a,p]),e.attributes=M(V({},t),{pathIndex:r,pointIndex:l,relatedGraphicIndices:[]}),n.push({coordinates:_[r][l],componentIndex:r,vertexIndex:l}),this.graphic.geometry=o,n}_addToSelection(e){e instanceof u&&(e=[e]);for(const t of e)t.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(e)),this._emitSelectEvent(e)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;e instanceof u&&(e=[e]);for(const o of e)this.selectedVertices.splice(this.selectedVertices.indexOf(o),1),this._set("selectedVertices",this.selectedVertices),o.set("symbol",s);this._emitDeselectEvent(e)}_clearSelection(){if(this.selectedVertices.length){const e=this.selectedVertices;for(const t of this.selectedVertices)t.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(e)}}_keyDownHandler(e){X.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(e){const t=this.graphic.geometry;if(w(t)||t.type!=="polygon"&&t.type!=="polyline"||t.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;e instanceof u&&(e=[e]);const i=this.graphic.clone(),s=t.clone();let o=S(s);const n=[];e instanceof u&&(e=[e]);for(const r of e){const{x:h,y:c}=r.geometry;for(let a=0;a<o.length;a++){const p=o[a];for(let l=0;l<p.length;l++){const[_,g]=p[l];h===_&&c===g&&(n.push({coordinates:o[a][l],componentIndex:a,vertexIndex:l}),o[a].splice(Number(l),1))}}}if(s.type==="polygon")o=o.filter(r=>{if(r.length<2)return!1;const[h,c]=r[0],[a,p]=r[r.length-1];return(r.length!==2||h!==a||c!==p)&&(h===a&&c===p||r.push(r[0]),!0)}),s.rings=o;else{for(const r of o)r.length===1&&o.splice(o.indexOf(r),1);s.paths=o}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(e,i,n)}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_emitMoveStartEvent(e,t){const i=new de(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(e,t){const i=new ve(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const{totalDx:e,totalDy:t}=this._activeOperationInfo,i=new me(this.graphic,e,t);this.emit("move-stop",i),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(i)}_emitReshapeStartEvent(e){const t=new ce(this.graphic,e,this.selectedVertices);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)}_emitReshapeEvent(e){const t=new pe(this.graphic,e,this.selectedVertices);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)}_emitReshapeStopEvent(e){const t=new le(this.graphic,e,this.selectedVertices);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)}_emitSelectEvent(e){const t=new ye(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)}_emitDeselectEvent(e){const t=new _e(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)}_emitVertexAddEvent(e,t,i){const s=new ge(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(e,t,i){const s=new ue(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){xe.error(new Y("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};v([m()],d.prototype,"callbacks",void 0),v([m()],d.prototype,"enableMidpoints",void 0),v([m()],d.prototype,"enableMovement",void 0),v([m()],d.prototype,"enableVertices",void 0),v([m()],d.prototype,"graphic",void 0),v([m({value:!0})],d.prototype,"highlightsEnabled",null),v([m()],d.prototype,"layer",void 0),v([m({readOnly:!0})],d.prototype,"midpointGraphics",void 0),v([m()],d.prototype,"midpointSymbol",void 0),v([m({readOnly:!0})],d.prototype,"selectedVertices",void 0),v([m()],d.prototype,"snappingManager",void 0),v([m({readOnly:!0})],d.prototype,"state",null),v([m({value:I})],d.prototype,"symbols",null),v([m({readOnly:!0})],d.prototype,"type",void 0),v([m({readOnly:!0})],d.prototype,"vertexGraphics",void 0),v([m()],d.prototype,"view",void 0),d=v([Z($)],d);const Ce=d;export{Ce as default};
