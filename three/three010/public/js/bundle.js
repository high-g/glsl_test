(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
// threejs.org/license
(function(l,xa){"object"===typeof exports&&"undefined"!==typeof module?xa(exports):"function"===typeof define&&define.amd?define(["exports"],xa):xa(l.THREE={})})(this,function(l){function xa(){}function C(a,b){this.x=a||0;this.y=b||0}function P(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function ca(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function p(a,
b,c){this.x=a||0;this.y=b||0;this.z=c||0}function ta(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function aa(a,b,c,d,e,f,g,h,k,m){Object.defineProperty(this,"id",{value:xf++});this.uuid=S.generateUUID();this.name="";this.image=void 0!==a?a:aa.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:aa.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==
e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new C(0,0);this.repeat=new C(1,1);this.center=new C(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new ta;this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function X(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function jb(a,
b,c){this.uuid=S.generateUUID();this.width=a;this.height=b;this.scissor=new X(0,0,a,b);this.scissorTest=!1;this.viewport=new X(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new aa(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Gb(a,b,c){jb.call(this,
a,b,c);this.activeMipMapLevel=this.activeCubeFace=0}function kb(a,b,c,d,e,f,g,h,k,m,v,n){aa.call(this,null,f,g,h,k,m,d,e,v,n);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function bb(a,b,c,d,e,f,g,h,k,m){a=void 0!==a?a:[];aa.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,k,m);this.flipY=!1}function Hb(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=Ce[e];void 0===f&&(f=new Float32Array(e),
Ce[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function De(a,b){var c=Ee[b];void 0===c&&(c=new Int32Array(b),Ee[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function yf(a,b){a.uniform1f(this.addr,b)}function zf(a,b){a.uniform1i(this.addr,b)}function Af(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function Bf(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,
b)}function Cf(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function Df(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function Ef(a,b){void 0===b.elements?a.uniformMatrix3fv(this.addr,!1,b):(Fe.set(b.elements),a.uniformMatrix3fv(this.addr,!1,Fe))}function Ff(a,b){void 0===b.elements?a.uniformMatrix4fv(this.addr,!1,b):(Ge.set(b.elements),a.uniformMatrix4fv(this.addr,!1,Ge))}function Gf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||
He,d)}function Hf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTextureCube(b||Ie,d)}function Je(a,b){a.uniform2iv(this.addr,b)}function Ke(a,b){a.uniform3iv(this.addr,b)}function Le(a,b){a.uniform4iv(this.addr,b)}function If(a){switch(a){case 5126:return yf;case 35664:return Af;case 35665:return Bf;case 35666:return Cf;case 35674:return Df;case 35675:return Ef;case 35676:return Ff;case 35678:case 36198:return Gf;case 35680:return Hf;case 5124:case 35670:return zf;case 35667:case 35671:return Je;
case 35668:case 35672:return Ke;case 35669:case 35673:return Le}}function Jf(a,b){a.uniform1fv(this.addr,b)}function Kf(a,b){a.uniform1iv(this.addr,b)}function Lf(a,b){a.uniform2fv(this.addr,Hb(b,this.size,2))}function Mf(a,b){a.uniform3fv(this.addr,Hb(b,this.size,3))}function Nf(a,b){a.uniform4fv(this.addr,Hb(b,this.size,4))}function Of(a,b){a.uniformMatrix2fv(this.addr,!1,Hb(b,this.size,4))}function Pf(a,b){a.uniformMatrix3fv(this.addr,!1,Hb(b,this.size,9))}function Qf(a,b){a.uniformMatrix4fv(this.addr,
!1,Hb(b,this.size,16))}function Rf(a,b,c){var d=b.length,e=De(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||He,e[a])}function Sf(a,b,c){var d=b.length,e=De(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||Ie,e[a])}function Tf(a){switch(a){case 5126:return Jf;case 35664:return Lf;case 35665:return Mf;case 35666:return Nf;case 35674:return Of;case 35675:return Pf;case 35676:return Qf;case 35678:return Rf;case 35680:return Sf;case 5124:case 35670:return Kf;
case 35667:case 35671:return Je;case 35668:case 35672:return Ke;case 35669:case 35673:return Le}}function Uf(a,b,c){this.id=a;this.addr=c;this.setValue=If(b.type)}function Vf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=Tf(b.type)}function Me(a){this.id=a;this.seq=[];this.map={}}function cb(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=
h.length;for(Qd.lastIndex=0;;){var m=Qd.exec(h),v=Qd.lastIndex,n=m[1],u=m[3];"]"===m[2]&&(n|=0);if(void 0===u||"["===u&&v+2===k){h=g;e=void 0===u?new Uf(n,e,f):new Vf(n,e,f);h.seq.push(e);h.map[e.id]=e;break}else u=g.map[n],void 0===u&&(u=new Me(n),n=g,g=u,n.seq.push(g),n.map[g.id]=g),g=u}}}function H(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function qc(a,b,c,d,e,f,g,h,k){aa.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0}function Wf(a,b,c,d,e){var f,g,h,k,m,v,n,u,q,r,
l,x,B,w,A,G,N,Z;function F(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var ya,Rd,ia,Ne,Xf=new p,C=new ca,D=new p;this.render=function(t,p,kd){if(0!==t.length){if(void 0===ia){var ma=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),T=new Uint16Array([0,1,2,0,2,3]);ya=b.createBuffer();Rd=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,ya);b.bufferData(b.ARRAY_BUFFER,ma,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Rd);b.bufferData(b.ELEMENT_ARRAY_BUFFER,
T,b.STATIC_DRAW);ma=b.createProgram();T=b.createShader(b.VERTEX_SHADER);var y=b.createShader(b.FRAGMENT_SHADER);b.shaderSource(T,["precision "+e.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 center;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvUV = uvOffset + uv * uvScale;\n\tvec2 alignedPosition = ( position - center ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tvec4 mvPosition;\n\tmvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\tfogDepth = - mvPosition.z;\n}"].join("\n"));
b.shaderSource(y,["precision "+e.precision+" float;","#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvarying float fogDepth;\nvoid main() {\n\tvec4 texture = texture2D( map, vUV );\n\tgl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n\tif ( gl_FragColor.a < alphaTest ) discard;\n\tif ( fogType > 0 ) {\n\t\tfloat fogFactor = 0.0;\n\t\tif ( fogType == 1 ) {\n\t\t\tfogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t\t} else {\n\t\t\tconst float LOG2 = 1.442695;\n\t\t\tfogFactor = exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 );\n\t\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\t\t}\n\t\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\t}\n}"].join("\n"));
b.compileShader(T);b.compileShader(y);b.attachShader(ma,T);b.attachShader(ma,y);b.linkProgram(ma);ia=ma;N=b.getAttribLocation(ia,"position");Z=b.getAttribLocation(ia,"uv");f=b.getUniformLocation(ia,"uvOffset");g=b.getUniformLocation(ia,"uvScale");h=b.getUniformLocation(ia,"rotation");k=b.getUniformLocation(ia,"center");m=b.getUniformLocation(ia,"scale");v=b.getUniformLocation(ia,"color");n=b.getUniformLocation(ia,"map");u=b.getUniformLocation(ia,"opacity");q=b.getUniformLocation(ia,"modelViewMatrix");
r=b.getUniformLocation(ia,"projectionMatrix");l=b.getUniformLocation(ia,"fogType");x=b.getUniformLocation(ia,"fogDensity");B=b.getUniformLocation(ia,"fogNear");w=b.getUniformLocation(ia,"fogFar");A=b.getUniformLocation(ia,"fogColor");b.getUniformLocation(ia,"fogDepth");G=b.getUniformLocation(ia,"alphaTest");ma=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");ma.width=8;ma.height=8;T=ma.getContext("2d");T.fillStyle="white";T.fillRect(0,0,8,8);Ne=new qc(ma)}c.useProgram(ia);c.initAttributes();
c.enableAttribute(N);c.enableAttribute(Z);c.disableUnusedAttributes();c.disable(b.CULL_FACE);c.enable(b.BLEND);b.bindBuffer(b.ARRAY_BUFFER,ya);b.vertexAttribPointer(N,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(Z,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Rd);b.uniformMatrix4fv(r,!1,kd.projectionMatrix.elements);c.activeTexture(b.TEXTURE0);b.uniform1i(n,0);T=ma=0;(y=p.fog)?(b.uniform3f(A,y.color.r,y.color.g,y.color.b),y.isFog?(b.uniform1f(B,y.near),b.uniform1f(w,y.far),b.uniform1i(l,1),T=
ma=1):y.isFogExp2&&(b.uniform1f(x,y.density),b.uniform1i(l,2),T=ma=2)):(b.uniform1i(l,0),T=ma=0);y=0;for(var z=t.length;y<z;y++){var Fa=t[y];Fa.modelViewMatrix.multiplyMatrices(kd.matrixWorldInverse,Fa.matrixWorld);Fa.z=-Fa.modelViewMatrix.elements[14]}t.sort(F);var J=[],H=[];y=0;for(z=t.length;y<z;y++){Fa=t[y];var Q=Fa.material;if(!1!==Q.visible){Fa.onBeforeRender(a,p,kd,void 0,Q,void 0);b.uniform1f(G,Q.alphaTest);b.uniformMatrix4fv(q,!1,Fa.modelViewMatrix.elements);Fa.matrixWorld.decompose(Xf,C,
D);J[0]=D.x;J[1]=D.y;H[0]=Fa.center.x-.5;H[1]=Fa.center.y-.5;var I=0;p.fog&&Q.fog&&(I=T);ma!==I&&(b.uniform1i(l,I),ma=I);null!==Q.map?(b.uniform2f(f,Q.map.offset.x,Q.map.offset.y),b.uniform2f(g,Q.map.repeat.x,Q.map.repeat.y)):(b.uniform2f(f,0,0),b.uniform2f(g,1,1));b.uniform1f(u,Q.opacity);b.uniform3f(v,Q.color.r,Q.color.g,Q.color.b);b.uniform1f(h,Q.rotation);b.uniform2fv(k,H);b.uniform2fv(m,J);c.setBlending(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,
Q.premultipliedAlpha);c.buffers.depth.setTest(Q.depthTest);c.buffers.depth.setMask(Q.depthWrite);c.buffers.color.setMask(Q.colorWrite);d.setTexture2D(Q.map||Ne,0);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);Fa.onAfterRender(a,p,kd,void 0,Q,void 0)}}c.enable(b.CULL_FACE);c.reset()}}}function O(){Object.defineProperty(this,"id",{value:Yf++});this.uuid=S.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.flatShading=!1;this.vertexColors=0;this.opacity=
1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=!1;this.overdraw=0;this.visible=!0;this.userData=
{};this.needsUpdate=!0}function db(a){O.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function eb(a){O.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new p;this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=!1;this.displacementMap=
this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.lights=this.fog=!1;this.setValues(a)}function Va(a,b){this.min=void 0!==a?a:new p(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new p(-Infinity,-Infinity,-Infinity)}function Ca(a,b){this.center=void 0!==a?a:new p;this.radius=void 0!==b?b:0}function pa(a,b){this.normal=void 0!==a?a:new p(1,0,0);this.constant=void 0!==b?b:0}function ld(a,b,c,d,e,f){this.planes=[void 0!==a?a:new pa,void 0!==b?b:new pa,void 0!==c?c:
new pa,void 0!==d?d:new pa,void 0!==e?e:new pa,void 0!==f?f:new pa]}function Oe(a,b,c){function d(b,c,d,e,f,g){var h=b.geometry;var k=n;var m=b.customDepthMaterial;d&&(k=u,m=b.customDistanceMaterial);m?k=m:(m=!1,c.morphTargets&&(h&&h.isBufferGeometry?m=h.morphAttributes&&h.morphAttributes.position&&0<h.morphAttributes.position.length:h&&h.isGeometry&&(m=h.morphTargets&&0<h.morphTargets.length)),b.isSkinnedMesh&&!1===c.skinning&&console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",
b),b=b.isSkinnedMesh&&c.skinning,h=0,m&&(h|=1),b&&(h|=2),k=k[h]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(h=k.uuid,m=c.uuid,b=q[h],void 0===b&&(b={},q[h]=b),h=b[m],void 0===h&&(h=k.clone(),b[m]=h),k=h);k.visible=c.visible;k.wireframe=c.wireframe;k.side=null!=c.shadowSide?c.shadowSide:r[c.side];k.clipShadows=c.clipShadows;k.clippingPlanes=c.clippingPlanes;k.clipIntersection=c.clipIntersection;k.wireframeLinewidth=c.wireframeLinewidth;k.linewidth=c.linewidth;d&&k.isMeshDistanceMaterial&&
(k.referencePosition.copy(e),k.nearDistance=f,k.farDistance=g);return k}function e(c,g,h,k){if(!1!==c.visible){if(c.layers.test(g.layers)&&(c.isMesh||c.isLine||c.isPoints)&&c.castShadow&&(!c.frustumCulled||f.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,c.matrixWorld);var m=b.update(c),n=c.material;if(Array.isArray(n))for(var u=m.groups,r=0,q=u.length;r<q;r++){var l=u[r],t=n[l.materialIndex];t&&t.visible&&(t=d(c,t,k,v,h.near,h.far),a.renderBufferDirect(h,null,m,t,c,
l))}else n.visible&&(t=d(c,n,k,v,h.near,h.far),a.renderBufferDirect(h,null,m,t,c,null))}c=c.children;m=0;for(n=c.length;m<n;m++)e(c[m],g,h,k)}}var f=new ld,g=new P,h=new C,k=new C(c,c),m=new p,v=new p,n=Array(4),u=Array(4),q={},r={0:1,1:0,2:2},l=[new p(1,0,0),new p(-1,0,0),new p(0,0,1),new p(0,0,-1),new p(0,1,0),new p(0,-1,0)],x=[new p(0,1,0),new p(0,1,0),new p(0,1,0),new p(0,1,0),new p(0,0,1),new p(0,0,-1)],B=[new X,new X,new X,new X,new X,new X];for(c=0;4!==c;++c){var w=0!==(c&1),A=0!==(c&2),G=
new db({depthPacking:3201,morphTargets:w,skinning:A});n[c]=G;w=new eb({morphTargets:w,skinning:A});u[c]=w}var N=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(b,c,d){if(!1!==N.enabled&&(!1!==N.autoUpdate||!1!==N.needsUpdate)&&0!==b.length){var n=a.state;n.disable(a.context.BLEND);n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0);n.setScissorTest(!1);for(var u,r=0,q=b.length;r<q;r++){var t=b[r];u=t.shadow;var p=t&&t.isPointLight;if(void 0===
u)console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");else{var w=u.camera;h.copy(u.mapSize);h.min(k);if(p){var Z=h.x,F=h.y;B[0].set(2*Z,F,Z,F);B[1].set(0,F,Z,F);B[2].set(3*Z,F,Z,F);B[3].set(Z,F,Z,F);B[4].set(3*Z,0,Z,F);B[5].set(Z,0,Z,F);h.x*=4;h.y*=2}null===u.map&&(u.map=new jb(h.x,h.y,{minFilter:1003,magFilter:1003,format:1023}),u.map.texture.name=t.name+".shadowMap",w.updateProjectionMatrix());u.isSpotLightShadow&&u.update(t);Z=u.map;F=u.matrix;v.setFromMatrixPosition(t.matrixWorld);w.position.copy(v);
p?(u=6,F.makeTranslation(-v.x,-v.y,-v.z)):(u=1,m.setFromMatrixPosition(t.target.matrixWorld),w.lookAt(m),w.updateMatrixWorld(),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(w.projectionMatrix),F.multiply(w.matrixWorldInverse));a.setRenderTarget(Z);a.clear();for(t=0;t<u;t++)p&&(m.copy(w.position),m.add(l[t]),w.up.copy(x[t]),w.lookAt(m),w.updateMatrixWorld(),n.viewport(B[t])),g.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),f.setFromMatrix(g),e(c,d,w,p)}}N.needsUpdate=!1}}}function Zf(a){var b=
{};return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return b[a.uuid]},remove:function(c){c.isInterleavedBufferAttribute&&(c=c.data);var d=b[c.uuid];d&&(a.deleteBuffer(d.buffer),delete b[c.uuid])},update:function(c,d){c.isInterleavedBufferAttribute&&(c=c.data);var e=b[c.uuid];if(void 0===e){e=c.uuid;var f=c.array,g=c.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW,h=a.createBuffer();a.bindBuffer(d,h);a.bufferData(d,f,g);c.onUploadCallback();d=a.FLOAT;f instanceof Float32Array?d=a.FLOAT:f instanceof
Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?d=a.UNSIGNED_SHORT:f instanceof Int16Array?d=a.SHORT:f instanceof Uint32Array?d=a.UNSIGNED_INT:f instanceof Int32Array?d=a.INT:f instanceof Int8Array?d=a.BYTE:f instanceof Uint8Array&&(d=a.UNSIGNED_BYTE);b[e]={buffer:h,type:d,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}else e.version<c.version&&(f=c,h=f.array,g=f.updateRange,a.bindBuffer(d,e.buffer),!1===f.dynamic?
a.bufferData(d,h,a.STATIC_DRAW):-1===g.count?a.bufferSubData(d,0,h):0===g.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1),e.version=c.version)}}}function fb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||fb.DefaultOrder}function Sd(){this.mask=
1}function y(){Object.defineProperty(this,"id",{value:$f++});this.uuid=S.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=y.DefaultUp.clone();var a=new p,b=new fb,c=new ca,d=new p(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new P},
normalMatrix:{value:new ta}});this.matrix=new P;this.matrixWorld=new P;this.matrixAutoUpdate=y.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Sd;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}function Qa(){y.call(this);this.type="Camera";this.matrixWorldInverse=new P;this.projectionMatrix=new P}function Ib(a,b,c,d,e,f){Qa.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=
b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Wa(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new p;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new H;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function L(){Object.defineProperty(this,"id",{value:ag+=2});this.uuid=S.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=
[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function M(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.uuid=S.generateUUID();this.name="";this.array=
a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function rc(a,b,c){M.call(this,new Int8Array(a),b,c)}function sc(a,b,c){M.call(this,new Uint8Array(a),b,c)}function tc(a,b,c){M.call(this,new Uint8ClampedArray(a),b,c)}function uc(a,b,c){M.call(this,new Int16Array(a),b,c)}function lb(a,b,c){M.call(this,new Uint16Array(a),b,c)}function vc(a,b,c){M.call(this,new Int32Array(a),
b,c)}function mb(a,b,c){M.call(this,new Uint32Array(a),b,c)}function D(a,b,c){M.call(this,new Float32Array(a),b,c)}function wc(a,b,c){M.call(this,new Float64Array(a),b,c)}function Pe(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=
!1}function Td(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function z(){Object.defineProperty(this,"id",{value:bg+=2});this.uuid=S.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function Jb(a,b,c,d,e,f){L.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,
widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new nb(a,b,c,d,e,f));this.mergeVertices()}function nb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,l,Z,F,y){var r=f/Z,t=g/F,N=f/2,x=g/2,w=l/2;g=Z+1;var B=F+1,A=f=0,G,C,ya=new p;for(C=0;C<B;C++){var D=C*t-x;for(G=0;G<g;G++)ya[a]=(G*r-N)*d,ya[b]=D*e,ya[c]=w,m.push(ya.x,ya.y,ya.z),ya[a]=0,ya[b]=0,ya[c]=0<l?1:-1,v.push(ya.x,ya.y,ya.z),n.push(G/Z),n.push(1-C/F),f+=1}for(C=0;C<F;C++)for(G=0;G<Z;G++)a=u+G+g*(C+1),b=u+(G+1)+g*(C+1),c=u+(G+
1)+g*C,k.push(u+G+g*C,a,c),k.push(a,b,c),A+=6;h.addGroup(q,A,y);q+=A;u+=f}z.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;a=a||1;b=b||1;c=c||1;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=[],m=[],v=[],n=[],u=0,q=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y",
"z",-1,-1,a,b,-c,d,e,5);this.setIndex(k);this.addAttribute("position",new D(m,3));this.addAttribute("normal",new D(v,3));this.addAttribute("uv",new D(n,2))}function xc(a,b,c,d){L.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new ob(a,b,c,d));this.mergeVertices()}function ob(a,b,c,d){z.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;b=b||1;var e=a/
2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,m=b/d,v=[],n=[],u=[],q=[];for(a=0;a<h;a++){var r=a*m-f;for(b=0;b<g;b++)n.push(b*k-e,-r,0),u.push(0,0,1),q.push(b/c),q.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,v.push(b+g*a,e,h),v.push(e,f,h);this.setIndex(v);this.addAttribute("position",new D(n,3));this.addAttribute("normal",new D(u,3));this.addAttribute("uv",new D(q,2))}function za(a){O.call(this);this.type="MeshBasicMaterial";this.color=new H(16777215);
this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function Da(a){O.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
this.setValues(a))}function pb(a,b){this.origin=void 0!==a?a:new p;this.direction=void 0!==b?b:new p}function Kb(a,b){this.start=void 0!==a?a:new p;this.end=void 0!==b?b:new p}function Xa(a,b,c){this.a=void 0!==a?a:new p;this.b=void 0!==b?b:new p;this.c=void 0!==c?c:new p}function ua(a,b){y.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new z;this.material=void 0!==b?b:new za({color:16777215*Math.random()});this.drawMode=0;this.updateMorphTargets()}function cg(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,
a.g,a.b,c,d)}var f=new H(0),g=0,h,k,m;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,u,q){d=d.background;null===d?e(f,g):d&&d.isColor&&(e(d,1),q=!0);(a.autoClear||q)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);d&&d.isCubeTexture?(void 0===m&&(m=new ua(new nb(1,1,1),new Da({uniforms:qb.cube.uniforms,vertexShader:qb.cube.vertexShader,
fragmentShader:qb.cube.fragmentShader,side:1,depthTest:!0,depthWrite:!1,fog:!1})),m.geometry.removeAttribute("normal"),m.geometry.removeAttribute("uv"),m.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},c.update(m.geometry)),m.material.uniforms.tCube.value=d,b.push(m,m.geometry,m.material,0,null)):d&&d.isTexture&&(void 0===h&&(h=new Ib(-1,1,1,-1,0,1),k=new ua(new ob(2,2),new za({depthTest:!1,depthWrite:!1,fog:!1})),c.update(k.geometry)),k.material.map=d,a.renderBufferDirect(h,
null,k.geometry,k.material,k,null))}}}function dg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program&&b.program&&a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function eg(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function fg(){var a=[],b=0,c=[],d=[];return{opaque:c,transparent:d,init:function(){b=0;c.length=0;d.length=0},push:function(e,
f,g,h,k){var m=a[b];void 0===m?(m={id:e.id,object:e,geometry:f,material:g,program:g.program,renderOrder:e.renderOrder,z:h,group:k},a[b]=m):(m.id=e.id,m.object=e,m.geometry=f,m.material=g,m.program=g.program,m.renderOrder=e.renderOrder,m.z=h,m.group=k);(!0===g.transparent?d:c).push(m);b++},sort:function(){1<c.length&&c.sort(dg);1<d.length&&d.sort(eg)}}}function gg(){var a={};return{get:function(b,c){b=b.id+","+c.id;c=a[b];void 0===c&&(c=new fg,a[b]=c);return c},dispose:function(){a={}}}}function hg(a,
b){return Math.abs(b[1])-Math.abs(a[1])}function ig(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var h=d.morphTargetInfluences,k=h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<k;m++)d[m]=[m,0];b[e.id]=d}var v=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<k;m++){var n=d[m];0!==n[1]&&(v&&e.removeAttribute("morphTarget"+m),f&&e.removeAttribute("morphNormal"+m))}for(m=0;m<k;m++)n=d[m],n[0]=m,n[1]=h[m];d.sort(hg);for(m=0;8>m;m++){if(n=
d[m])if(h=n[0],k=n[1]){v&&e.addAttribute("morphTarget"+m,v[h]);f&&e.addAttribute("morphNormal"+m,f[h]);c[m]=k;continue}c[m]=0}g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function jg(a,b,c){var d,e,f;this.setMode=function(a){d=a};this.setIndex=function(a){e=a.type;f=a.bytesPerElement};this.render=function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES?c.faces+=h/3:d===a.POINTS&&(c.points+=h)};this.renderInstances=function(g,h,k){var m=b.get("ANGLE_instanced_arrays");
null===m?console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(m.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES?c.faces+=g.maxInstancedCount*k/3:d===a.POINTS&&(c.points+=g.maxInstancedCount*k))}}function kg(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES?
c.faces+=f/3:d===a.POINTS&&(c.points+=f)};this.renderInstances=function(e,f,g){var h=b.get("ANGLE_instanced_arrays");if(null===h)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var k=e.attributes.position;k.isInterleavedBufferAttribute?(g=k.data.count,h.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount)):h.drawArraysInstancedANGLE(d,f,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;
d===a.TRIANGLES?c.faces+=e.maxInstancedCount*g/3:d===a.POINTS&&(c.points+=e.maxInstancedCount*g)}}}function lg(a,b,c){function d(a){a=a.target;var g=e[a.id];null!==g.index&&b.remove(g.index);for(var k in g.attributes)b.remove(g.attributes[k]);a.removeEventListener("dispose",d);delete e[a.id];if(k=f[a.id])b.remove(k),delete f[a.id];if(k=f[g.id])b.remove(k),delete f[g.id];c.geometries--}var e={},f={};return{get:function(a,b){var f=e[b.id];if(f)return f;b.addEventListener("dispose",d);b.isBufferGeometry?
f=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new z).setFromObject(a)),f=b._bufferGeometry);e[b.id]=f;c.geometries++;return f},update:function(c){var d=c.index,e=c.attributes;null!==d&&b.update(d,a.ELEMENT_ARRAY_BUFFER);for(var f in e)b.update(e[f],a.ARRAY_BUFFER);c=c.morphAttributes;for(f in c){d=c[f];e=0;for(var g=d.length;e<g;e++)b.update(d[e],a.ARRAY_BUFFER)}},getWireframeAttribute:function(c){var d=f[c.id];if(d)return d;d=[];var e=c.index,g=c.attributes;if(null!==e){e=e.array;
g=0;for(var v=e.length;g<v;g+=3){var n=e[g+0],u=e[g+1],q=e[g+2];d.push(n,u,u,q,q,n)}}else for(e=g.position.array,g=0,v=e.length/3-1;g<v;g+=3)n=g+0,u=g+1,q=g+2,d.push(n,u,u,q,q,n);d=new (65535<Td(d)?mb:lb)(d,1);b.update(d,a.ELEMENT_ARRAY_BUFFER);return f[c.id]=d}}}function mg(a,b){var c={};return{update:function(d){var e=b.frame,f=d.geometry,g=a.get(d,f);c[g.id]!==e&&(f.isGeometry&&g.updateFromObject(d),a.update(g),c[g.id]=e);return g},dispose:function(){c={}}}}function ng(a){a=a.split("\n");for(var b=
0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function Qe(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),ng(c));return d}function Re(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];
case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Ud(a,b){b=Re(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+"ToLinear"+b[1]+"; }"}function og(a,b){b=Re(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function pg(a,b){switch(b){case 1:b="Linear";
break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function qg(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?
"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yc).join("\n")}function rg(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function yc(a){return""!==a}function Se(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,
b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Te(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}function Vd(a){return a.replace(/^[ \t]*#include +<([\w\d.]+)>/gm,function(a,c){a=R[c];if(void 0===a)throw Error("Can not resolve #include <"+c+">");return Vd(a)})}function Ue(a){return a.replace(/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
function(a,c,d,e){a="";for(c=parseInt(c);c<parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function sg(a,b,c,d,e,f){var g=a.context,h=d.defines,k=e.vertexShader,m=e.fragmentShader,v="SHADOWMAP_TYPE_BASIC";1===f.shadowMapType?v="SHADOWMAP_TYPE_PCF":2===f.shadowMapType&&(v="SHADOWMAP_TYPE_PCF_SOFT");var n="ENVMAP_TYPE_CUBE",u="ENVMAP_MODE_REFLECTION",q="ENVMAP_BLENDING_MULTIPLY";if(f.envMap){switch(d.envMap.mapping){case 301:case 302:n="ENVMAP_TYPE_CUBE";break;case 306:case 307:n="ENVMAP_TYPE_CUBE_UV";
break;case 303:case 304:n="ENVMAP_TYPE_EQUIREC";break;case 305:n="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case 302:case 304:u="ENVMAP_MODE_REFRACTION"}switch(d.combine){case 0:q="ENVMAP_BLENDING_MULTIPLY";break;case 1:q="ENVMAP_BLENDING_MIX";break;case 2:q="ENVMAP_BLENDING_ADD"}}var r=0<a.gammaFactor?a.gammaFactor:1,l=qg(d.extensions,f,b),x=rg(h),p=g.createProgram();d.isRawShaderMaterial?(h=[x].filter(yc).join("\n"),0<h.length&&(h+="\n"),b=[l,x].filter(yc).join("\n"),0<b.length&&(b+="\n")):(h=
["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,x,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+r,"#define MAX_BONES "+f.maxBones,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+u:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":
"",f.normalMap?"#define USE_NORMALMAP":"",f.displacementMap&&f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&
!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+v:"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;",
"uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;",
"\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(yc).join("\n"),b=[l,"precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+e.name,x,f.alphaTest?"#define ALPHATEST "+f.alphaTest:"","#define GAMMA_FACTOR "+r,f.useFog&&f.fog?"#define USE_FOG":
"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+n:"",f.envMap?"#define "+u:"",f.envMap?"#define "+q:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.roughnessMap?"#define USE_ROUGHNESSMAP":"",f.metalnessMap?"#define USE_METALNESSMAP":"",f.alphaMap?
"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.gradientMap?"#define USE_GRADIENTMAP":"",f.flatShading?"#define FLAT_SHADED":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+v:"",f.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",f.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&
b.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",f.envMap&&b.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==f.toneMapping?"#define TONE_MAPPING":"",0!==f.toneMapping?R.tonemapping_pars_fragment:"",0!==f.toneMapping?pg("toneMapping",f.toneMapping):"",f.dithering?"#define DITHERING":"",f.outputEncoding||f.mapEncoding||f.envMapEncoding||f.emissiveMapEncoding?R.encodings_pars_fragment:"",f.mapEncoding?Ud("mapTexelToLinear",
f.mapEncoding):"",f.envMapEncoding?Ud("envMapTexelToLinear",f.envMapEncoding):"",f.emissiveMapEncoding?Ud("emissiveMapTexelToLinear",f.emissiveMapEncoding):"",f.outputEncoding?og("linearToOutputTexel",f.outputEncoding):"",f.depthPacking?"#define DEPTH_PACKING "+d.depthPacking:"","\n"].filter(yc).join("\n"));k=Vd(k);k=Se(k,f);k=Te(k,f);m=Vd(m);m=Se(m,f);m=Te(m,f);k=Ue(k);m=Ue(m);m=b+m;k=Qe(g,g.VERTEX_SHADER,h+k);m=Qe(g,g.FRAGMENT_SHADER,m);g.attachShader(p,k);g.attachShader(p,m);void 0!==d.index0AttributeName?
g.bindAttribLocation(p,0,d.index0AttributeName):!0===f.morphTargets&&g.bindAttribLocation(p,0,"position");g.linkProgram(p);f=g.getProgramInfoLog(p).trim();e=g.getShaderInfoLog(k).trim();v=g.getShaderInfoLog(m).trim();u=n=!0;if(!1===g.getProgramParameter(p,g.LINK_STATUS))n=!1,console.error("THREE.WebGLProgram: shader error: ",g.getError(),"gl.VALIDATE_STATUS",g.getProgramParameter(p,g.VALIDATE_STATUS),"gl.getProgramInfoLog",f,e,v);else if(""!==f)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",
f);else if(""===e||""===v)u=!1;u&&(this.diagnostics={runnable:n,material:d,programLog:f,vertexShader:{log:e,prefix:h},fragmentShader:{log:v,prefix:b}});g.deleteShader(k);g.deleteShader(m);var w;this.getUniforms=function(){void 0===w&&(w=new cb(g,p,a));return w};var A;this.getAttributes=function(){if(void 0===A){for(var a={},b=g.getProgramParameter(p,g.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=g.getActiveAttrib(p,c).name;a[d]=g.getAttribLocation(p,d)}A=a}return A};this.destroy=function(){g.deleteProgram(p);
this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=tg++;this.code=c;this.usedTimes=1;this.program=p;this.vertexShader=k;this.fragmentShader=m;return this}function ug(a,b,c){function d(a,b){if(a)a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&
(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding);else var c=3E3;3E3===c&&b&&(c=3007);return c}var e=[],f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",
LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow"},g="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
this.getParameters=function(b,e,g,v,n,u,q){var h=f[b.type];if(q.isSkinnedMesh){var k=q.skeleton.bones;if(c.floatVertexTextures)k=1024;else{var m=Math.min(Math.floor((c.maxVertexUniforms-20)/4),k.length);m<k.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+k.length+" bones. This GPU supports "+m+"."),k=0):k=m}}else k=0;m=c.precision;null!==b.precision&&(m=c.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));
var l=a.getRenderTarget();return{shaderID:h,precision:m,supportsVertexTextures:c.vertexTextures,outputEncoding:d(l?l.texture:null,a.gammaOutput),map:!!b.map,mapEncoding:d(b.map,a.gammaInput),envMap:!!b.envMap,envMapMode:b.envMap&&b.envMap.mapping,envMapEncoding:d(b.envMap,a.gammaInput),envMapCubeUV:!!b.envMap&&(306===b.envMap.mapping||307===b.envMap.mapping),lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,emissiveMapEncoding:d(b.emissiveMap,a.gammaInput),bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,
displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,alphaMap:!!b.alphaMap,gradientMap:!!b.gradientMap,combine:b.combine,vertexColors:b.vertexColors,fog:!!v,useFog:b.fog,fogExp:v&&v.isFogExp2,flatShading:b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:c.logarithmicDepthBuffer,skinning:b.skinning&&0<k,maxBones:k,useVertexTexture:c.floatVertexTextures,morphTargets:b.morphTargets,morphNormals:b.morphNormals,
maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:e.directional.length,numPointLights:e.point.length,numSpotLights:e.spot.length,numRectAreaLights:e.rectArea.length,numHemiLights:e.hemi.length,numClippingPlanes:n,numClipIntersection:u,dithering:b.dithering,shadowMapEnabled:a.shadowMap.enabled&&q.receiveShadow&&0<g.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,
alphaTest:b.alphaTest,doubleSided:2===b.side,flipSided:1===b.side,depthPacking:void 0!==b.depthPacking?b.depthPacking:!1}};this.getProgramCode=function(b,c){var d=[];c.shaderID?d.push(c.shaderID):(d.push(b.fragmentShader),d.push(b.vertexShader));if(void 0!==b.defines)for(var e in b.defines)d.push(e),d.push(b.defines[e]);for(e=0;e<g.length;e++)d.push(c[g[e]]);d.push(b.onBeforeCompile.toString());d.push(a.gammaOutput);return d.join()};this.acquireProgram=function(c,d,f,g){for(var h,k=0,m=e.length;k<
m;k++){var v=e[k];if(v.code===g){h=v;++h.usedTimes;break}}void 0===h&&(h=new sg(a,b,g,c,d,f),e.push(h));return h};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function vg(a,b,c,d,e,f,g,h){function k(a,b){if(a.width>b||a.height>b){b/=Math.max(a.width,a.height);var c=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");c.width=Math.floor(a.width*b);c.height=Math.floor(a.height*b);c.getContext("2d").drawImage(a,
0,0,a.width,a.height,0,0,c.width,c.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+c.width+"x"+c.height,a);return c}return a}function m(a){return S.isPowerOfTwo(a.width)&&S.isPowerOfTwo(a.height)}function v(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function n(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function u(b){b=b.target;b.removeEventListener("dispose",u);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);
else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d.remove(b)}b.isVideoTexture&&delete A[b.id];g.textures--}function q(b){b=b.target;b.removeEventListener("dispose",q);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),
c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.remove(b.texture);d.remove(b)}g.textures--}function r(b,n){var r=d.get(b);if(b.isVideoTexture){var q=b.id,t=h.frame;A[q]!==t&&(A[q]=t,b.update())}if(0<b.version&&r.__version!==b.version)if(q=b.image,void 0===q)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===q.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===r.__webglInit&&
(r.__webglInit=!0,b.addEventListener("dispose",u),r.__webglTexture=a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+n);c.bindTexture(a.TEXTURE_2D,r.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=k(b.image,e.maxTextureSize);(1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===m(p)&&(n=p,n instanceof HTMLImageElement||n instanceof
HTMLCanvasElement||n instanceof ImageBitmap?(void 0===G&&(G=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),G.width=S.floorPowerOfTwo(n.width),G.height=S.floorPowerOfTwo(n.height),G.getContext("2d").drawImage(n,0,0,G.width,G.height),console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+G.width+"x"+G.height,n),p=G):p=n);n=m(p);q=f.convert(b.format);t=f.convert(b.type);l(a.TEXTURE_2D,b,n);var x=b.mipmaps;if(b.isDepthTexture){x=a.DEPTH_COMPONENT;
if(1015===b.type){if(!w)throw Error("Float Depth Texture only supported in WebGL2.0");x=a.DEPTH_COMPONENT32F}else w&&(x=a.DEPTH_COMPONENT16);1026===b.format&&x===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=1012,t=f.convert(b.type));1027===b.format&&(x=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
b.type=1020,t=f.convert(b.type)));c.texImage2D(a.TEXTURE_2D,0,x,p.width,p.height,0,q,t,null)}else if(b.isDataTexture)if(0<x.length&&n){for(var N=0,Z=x.length;N<Z;N++)p=x[N],c.texImage2D(a.TEXTURE_2D,N,q,p.width,p.height,0,q,t,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,q,p.width,p.height,0,q,t,p.data);else if(b.isCompressedTexture)for(N=0,Z=x.length;N<Z;N++)p=x[N],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(q)?c.compressedTexImage2D(a.TEXTURE_2D,N,
q,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,N,q,p.width,p.height,0,q,t,p.data);else if(0<x.length&&n){N=0;for(Z=x.length;N<Z;N++)p=x[N],c.texImage2D(a.TEXTURE_2D,N,q,q,t,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,q,q,t,p);v(b,n)&&a.generateMipmap(a.TEXTURE_2D);r.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}c.activeTexture(a.TEXTURE0+n);c.bindTexture(a.TEXTURE_2D,
r.__webglTexture)}function l(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f.convert(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f.convert(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f.convert(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f.convert(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",
g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,n(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,n(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||
(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function p(b,e,g,h){var k=f.convert(e.texture.format),m=f.convert(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function B(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,
a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var w="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext,A={},G;
this.setTexture2D=r;this.setTextureCube=function(b,h){var n=d.get(b);if(6===b.image.length)if(0<b.version&&n.__version!==b.version){n.__image__webglTextureCube||(b.addEventListener("dispose",u),n.__image__webglTextureCube=a.createTexture(),g.textures++);c.activeTexture(a.TEXTURE0+h);c.bindTexture(a.TEXTURE_CUBE_MAP,n.__image__webglTextureCube);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);h=b&&b.isCompressedTexture;for(var r=b.image[0]&&b.image[0].isDataTexture,q=[],t=0;6>t;t++)q[t]=h||r?r?b.image[t].image:
b.image[t]:k(b.image[t],e.maxCubemapSize);var p=m(q[0]),x=f.convert(b.format),w=f.convert(b.type);l(a.TEXTURE_CUBE_MAP,b,p);for(t=0;6>t;t++)if(h)for(var N,B=q[t].mipmaps,A=0,G=B.length;A<G;A++)N=B[A],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(x)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+t,A,x,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+
t,A,x,N.width,N.height,0,x,w,N.data);else r?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,q[t].width,q[t].height,0,x,w,q[t].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,x,w,q[t]);v(b,p)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);n.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+h),c.bindTexture(a.TEXTURE_CUBE_MAP,n.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};
this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",q);f.__webglTexture=a.createTexture();g.textures++;var h=!0===b.isWebGLRenderTargetCube,k=m(b);if(h){e.__webglFramebuffer=[];for(var n=0;6>n;n++)e.__webglFramebuffer[n]=a.createFramebuffer()}else e.__webglFramebuffer=a.createFramebuffer();if(h){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);l(a.TEXTURE_CUBE_MAP,b.texture,k);for(n=0;6>n;n++)p(e.__webglFramebuffer[n],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+
n);v(b.texture,k)&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),l(a.TEXTURE_2D,b.texture,k),p(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),v(b.texture,k)&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported");
a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);r(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,
a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),B(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),B(e.__webglDepthbuffer,
b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture,f=m(b);v(e,f)&&(b=b.isWebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function wg(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},remove:function(b){delete a[b.uuid]},update:function(b,c,d){a[b.uuid][c]=d},dispose:function(){a={}}}}function xg(a,b,c){function d(b,
c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==w[b]&&(a.enable(b),w[b]=!0)}function f(b){!1!==w[b]&&(a.disable(b),w[b]=!1)}function g(b,d,g,h,k,m,n,v){0!==b?e(a.BLEND):f(a.BLEND);if(5!==b){if(b!==N||v!==z)switch(b){case 2:v?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,
a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE));break;case 3:v?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR));break;case 4:v?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR));break;default:v?(a.blendEquationSeparate(a.FUNC_ADD,
a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA))}D=ia=y=C=F=Z=null}else{k=k||d;m=m||g;n=n||h;if(d!==Z||k!==y)a.blendEquationSeparate(c.convert(d),c.convert(k)),Z=d,y=k;if(g!==F||h!==C||m!==ia||n!==D)a.blendFuncSeparate(c.convert(g),c.convert(h),c.convert(m),c.convert(n)),F=g,C=h,ia=m,D=n}N=b;z=v}function h(b){I!==b&&(b?a.frontFace(a.CW):
a.frontFace(a.CCW),I=b)}function k(b){0!==b?(e(a.CULL_FACE),b!==H&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);H=b}function m(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),K!==c||L!==d)a.polygonOffset(c,d),K=c,L=d}else f(a.POLYGON_OFFSET_FILL)}function v(b){void 0===b&&(b=a.TEXTURE0+P-1);M!==b&&(a.activeTexture(b),M=b)}var n=new function(){var b=!1,c=new X,d=null,e=new X(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=
a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,0,0,0)}}},u=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);
break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},q=new function(){var b=!1,c=null,d=null,g=null,h=null,k=null,m=null,n=null,v=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||
(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(k!==b||m!==c||n!==d)a.stencilOp(b,c,d),k=b,m=c,n=d},setLocked:function(a){b=a},setClear:function(b){v!==b&&(a.clearStencil(b),v=b)},reset:function(){b=!1;v=n=m=k=h=g=d=c=null}}},r=a.getParameter(a.MAX_VERTEX_ATTRIBS),l=new Uint8Array(r),p=new Uint8Array(r),B=new Uint8Array(r),w={},A=null,G=null,N=null,Z=null,F=null,C=null,y=null,ia=null,D=null,z=!1,I=null,H=null,T=null,
K=null,L=null,P=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),S=!1;r=0;r=a.getParameter(a.VERSION);-1!==r.indexOf("WebGL")?(r=parseFloat(/^WebGL ([0-9])/.exec(r)[1]),S=1<=r):-1!==r.indexOf("OpenGL ES")&&(r=parseFloat(/^OpenGL ES ([0-9])/.exec(r)[1]),S=2<=r);var M=null,O={},R=new X,J=new X,V={};V[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);V[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);n.setClear(0,0,0,1);u.setClear(1);q.setClear(0);e(a.DEPTH_TEST);u.setFunc(3);h(!1);
k(1);e(a.CULL_FACE);e(a.BLEND);g(1);return{buffers:{color:n,depth:u,stencil:q},initAttributes:function(){for(var a=0,b=l.length;a<b;a++)l[a]=0},enableAttribute:function(c){l[c]=1;0===p[c]&&(a.enableVertexAttribArray(c),p[c]=1);0!==B[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),B[c]=0)},enableAttributeAndDivisor:function(c,d){l[c]=1;0===p[c]&&(a.enableVertexAttribArray(c),p[c]=1);B[c]!==d&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,d),B[c]=d)},disableUnusedAttributes:function(){for(var b=
0,c=p.length;b!==c;++b)p[b]!==l[b]&&(a.disableVertexAttribArray(b),p[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===A&&(A=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")||b.get("WEBGL_compressed_texture_astc")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)A.push(c[d]);return A},useProgram:function(b){return G!==b?(a.useProgram(b),G=b,!0):!1},setBlending:g,setMaterial:function(b,
c){2===b.side?f(a.CULL_FACE):e(a.CULL_FACE);var d=1===b.side;c&&(d=!d);h(d);!0===b.transparent?g(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha):g(0);u.setFunc(b.depthFunc);u.setTest(b.depthTest);u.setMask(b.depthWrite);n.setMask(b.colorWrite);m(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits)},setFlipSided:h,setCullFace:k,setLineWidth:function(b){b!==T&&(S&&a.lineWidth(b),T=b)},setPolygonOffset:m,setScissorTest:function(b){b?
e(a.SCISSOR_TEST):f(a.SCISSOR_TEST)},activeTexture:v,bindTexture:function(b,c){null===M&&v();var d=O[M];void 0===d&&(d={type:void 0,texture:void 0},O[M]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||V[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}},scissor:function(b){!1===R.equals(b)&&
(a.scissor(b.x,b.y,b.z,b.w),R.copy(b))},viewport:function(b){!1===J.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),J.copy(b))},reset:function(){for(var b=0;b<p.length;b++)1===p[b]&&(a.disableVertexAttribArray(b),p[b]=0);w={};M=A=null;O={};H=I=N=G=null;n.reset();u.reset();q.reset()}}}function yg(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===
b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer;g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);var h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),
v=a.getParameter(a.MAX_VERTEX_ATTRIBS),n=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),u=a.getParameter(a.MAX_VARYING_VECTORS),q=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),r=0<h,l=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:k,maxCubemapSize:m,
maxAttributes:v,maxVertexUniforms:n,maxVaryings:u,maxFragmentUniforms:q,vertexTextures:r,floatFragmentTextures:l,floatVertexTextures:r&&l}}function na(a,b,c,d){Qa.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function od(a){na.call(this);this.cameras=a||[]}function Ve(a){function b(){if(null!==
d&&d.isPresenting){var b=d.getEyeParameters("left"),e=b.renderWidth;b=b.renderHeight;q=a.getPixelRatio();u=a.getSize();a.setDrawingBufferSize(2*e,b,1)}else c.enabled&&a.setDrawingBufferSize(u.width,u.height,q)}var c=this,d=null,e=null,f=null,g=new P,h=new P;"undefined"!==typeof window&&"VRFrameData"in window&&(e=new window.VRFrameData);var k=new P,m=new na;m.bounds=new X(0,0,.5,1);m.layers.enable(1);var v=new na;v.bounds=new X(.5,0,.5,1);v.layers.enable(2);var n=new od([m,v]);n.layers.enable(1);n.layers.enable(2);
var u,q;"undefined"!==typeof window&&window.addEventListener("vrdisplaypresentchange",b,!1);this.enabled=!1;this.userHeight=1.6;this.getDevice=function(){return d};this.setDevice=function(a){void 0!==a&&(d=a)};this.setPoseTarget=function(a){void 0!==a&&(f=a)};this.getCamera=function(a){if(null===d)return a;d.depthNear=a.near;d.depthFar=a.far;d.getFrameData(e);var b=e.pose,u=null!==f?f:a;null!==b.position?u.position.fromArray(b.position):u.position.set(0,0,0);null!==b.orientation&&u.quaternion.fromArray(b.orientation);
(b=d.stageParameters)?g.fromArray(b.sittingToStandingTransform):g.makeTranslation(0,c.userHeight,0);u.position.applyMatrix4(g);u.updateMatrixWorld();if(!1===d.isPresenting)return a;m.near=a.near;v.near=a.near;m.far=a.far;v.far=a.far;n.matrixWorld.copy(a.matrixWorld);n.matrixWorldInverse.copy(a.matrixWorldInverse);m.matrixWorldInverse.fromArray(e.leftViewMatrix);v.matrixWorldInverse.fromArray(e.rightViewMatrix);h.getInverse(g);m.matrixWorldInverse.multiply(h);v.matrixWorldInverse.multiply(h);a=u.parent;
null!==a&&(k.getInverse(a.matrixWorld),m.matrixWorldInverse.multiply(k),v.matrixWorldInverse.multiply(k));m.matrixWorld.getInverse(m.matrixWorldInverse);v.matrixWorld.getInverse(v.matrixWorldInverse);m.projectionMatrix.fromArray(e.leftProjectionMatrix);v.projectionMatrix.fromArray(e.rightProjectionMatrix);n.projectionMatrix.copy(m.projectionMatrix);a=d.getLayers();a.length&&(a=a[0],null!==a.leftBounds&&4===a.leftBounds.length&&m.bounds.fromArray(a.leftBounds),null!==a.rightBounds&&4===a.rightBounds.length&&
v.bounds.fromArray(a.rightBounds));return n};this.getStandingMatrix=function(){return g};this.submitFrame=function(){d&&d.isPresenting&&d.submitFrame()};this.dispose=function(){"undefined"!==typeof window&&window.removeEventListener("vrdisplaypresentchange",b)}}function zg(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");
break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||
a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Ag(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;
k.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new pa,k=new ta,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=
!1;a()};this.setState=function(c,h,k,q,l,t){if(!f||null===c||0===c.length||g&&!k)g?b(null):a();else{k=g?0:e;var n=4*k,v=l.clippingState||null;m.value=v;v=b(c,q,n,t);for(c=0;c!==n;++c)v[c]=d[c];l.clippingState=v;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=k}}}function We(a,b){return{convert:function(c){if(1E3===c)return a.REPEAT;if(1001===c)return a.CLAMP_TO_EDGE;if(1002===c)return a.MIRRORED_REPEAT;if(1003===c)return a.NEAREST;if(1004===c)return a.NEAREST_MIPMAP_NEAREST;if(1005===c)return a.NEAREST_MIPMAP_LINEAR;
if(1006===c)return a.LINEAR;if(1007===c)return a.LINEAR_MIPMAP_NEAREST;if(1008===c)return a.LINEAR_MIPMAP_LINEAR;if(1009===c)return a.UNSIGNED_BYTE;if(1017===c)return a.UNSIGNED_SHORT_4_4_4_4;if(1018===c)return a.UNSIGNED_SHORT_5_5_5_1;if(1019===c)return a.UNSIGNED_SHORT_5_6_5;if(1010===c)return a.BYTE;if(1011===c)return a.SHORT;if(1012===c)return a.UNSIGNED_SHORT;if(1013===c)return a.INT;if(1014===c)return a.UNSIGNED_INT;if(1015===c)return a.FLOAT;if(1016===c){var d=b.get("OES_texture_half_float");
if(null!==d)return d.HALF_FLOAT_OES}if(1021===c)return a.ALPHA;if(1022===c)return a.RGB;if(1023===c)return a.RGBA;if(1024===c)return a.LUMINANCE;if(1025===c)return a.LUMINANCE_ALPHA;if(1026===c)return a.DEPTH_COMPONENT;if(1027===c)return a.DEPTH_STENCIL;if(100===c)return a.FUNC_ADD;if(101===c)return a.FUNC_SUBTRACT;if(102===c)return a.FUNC_REVERSE_SUBTRACT;if(200===c)return a.ZERO;if(201===c)return a.ONE;if(202===c)return a.SRC_COLOR;if(203===c)return a.ONE_MINUS_SRC_COLOR;if(204===c)return a.SRC_ALPHA;
if(205===c)return a.ONE_MINUS_SRC_ALPHA;if(206===c)return a.DST_ALPHA;if(207===c)return a.ONE_MINUS_DST_ALPHA;if(208===c)return a.DST_COLOR;if(209===c)return a.ONE_MINUS_DST_COLOR;if(210===c)return a.SRC_ALPHA_SATURATE;if(33776===c||33777===c||33778===c||33779===c)if(d=b.get("WEBGL_compressed_texture_s3tc"),null!==d){if(33776===c)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===c)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===c)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===c)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(35840===
c||35841===c||35842===c||35843===c)if(d=b.get("WEBGL_compressed_texture_pvrtc"),null!==d){if(35840===c)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(35841===c)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===c)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===c)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(36196===c&&(d=b.get("WEBGL_compressed_texture_etc1"),null!==d))return d.COMPRESSED_RGB_ETC1_WEBGL;if(37808===c||37809===c||37810===c||37811===c||37812===c||37813===c||37814===c||37815===c||37816===
c||37817===c||37818===c||37819===c||37820===c||37821===c)if(d=b.get("WEBGL_compressed_texture_astc"),null!==d)return c;if(103===c||104===c)if(d=b.get("EXT_blend_minmax"),null!==d){if(103===c)return d.MIN_EXT;if(104===c)return d.MAX_EXT}return 1020===c&&(d=b.get("WEBGL_depth_texture"),null!==d)?d.UNSIGNED_INT_24_8_WEBGL:0}}}function Bg(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new p,color:new H,shadow:!1,shadowBias:0,
shadowRadius:1,shadowMapSize:new C};break;case "SpotLight":c={position:new p,direction:new p,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new C};break;case "PointLight":c={position:new p,color:new H,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new C,shadowCameraNear:1,shadowCameraFar:1E3};break;case "HemisphereLight":c={direction:new p,skyColor:new H,groundColor:new H};break;case "RectAreaLight":c={color:new H,
position:new p,halfWidth:new p,halfHeight:new p}}return a[b.id]=c}}}function Cg(){var a=new Bg,b={id:Dg++,hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},c=new p,d=new P,e=new P;return{setup:function(f,g,h){var k=0,m=0,v=0,n=0,u=0,q=0,l=0,t=0;h=h.matrixWorldInverse;for(var p=0,B=f.length;p<B;p++){var w=f[p],A=w.color,G=w.intensity,N=w.distance,
Z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)k+=A.r*G,m+=A.g*G,v+=A.b*G;else if(w.isDirectionalLight){var F=a.get(w);F.color.copy(w.color).multiplyScalar(w.intensity);F.direction.setFromMatrixPosition(w.matrixWorld);c.setFromMatrixPosition(w.target.matrixWorld);F.direction.sub(c);F.direction.transformDirection(h);if(F.shadow=w.castShadow)A=w.shadow,F.shadowBias=A.bias,F.shadowRadius=A.radius,F.shadowMapSize=A.mapSize;b.directionalShadowMap[n]=Z;b.directionalShadowMatrix[n]=
w.shadow.matrix;b.directional[n]=F;n++}else if(w.isSpotLight){F=a.get(w);F.position.setFromMatrixPosition(w.matrixWorld);F.position.applyMatrix4(h);F.color.copy(A).multiplyScalar(G);F.distance=N;F.direction.setFromMatrixPosition(w.matrixWorld);c.setFromMatrixPosition(w.target.matrixWorld);F.direction.sub(c);F.direction.transformDirection(h);F.coneCos=Math.cos(w.angle);F.penumbraCos=Math.cos(w.angle*(1-w.penumbra));F.decay=0===w.distance?0:w.decay;if(F.shadow=w.castShadow)A=w.shadow,F.shadowBias=A.bias,
F.shadowRadius=A.radius,F.shadowMapSize=A.mapSize;b.spotShadowMap[q]=Z;b.spotShadowMatrix[q]=w.shadow.matrix;b.spot[q]=F;q++}else if(w.isRectAreaLight)F=a.get(w),F.color.copy(A).multiplyScalar(G),F.position.setFromMatrixPosition(w.matrixWorld),F.position.applyMatrix4(h),e.identity(),d.copy(w.matrixWorld),d.premultiply(h),e.extractRotation(d),F.halfWidth.set(.5*w.width,0,0),F.halfHeight.set(0,.5*w.height,0),F.halfWidth.applyMatrix4(e),F.halfHeight.applyMatrix4(e),b.rectArea[l]=F,l++;else if(w.isPointLight){F=
a.get(w);F.position.setFromMatrixPosition(w.matrixWorld);F.position.applyMatrix4(h);F.color.copy(w.color).multiplyScalar(w.intensity);F.distance=w.distance;F.decay=0===w.distance?0:w.decay;if(F.shadow=w.castShadow)A=w.shadow,F.shadowBias=A.bias,F.shadowRadius=A.radius,F.shadowMapSize=A.mapSize,F.shadowCameraNear=A.camera.near,F.shadowCameraFar=A.camera.far;b.pointShadowMap[u]=Z;b.pointShadowMatrix[u]=w.shadow.matrix;b.point[u]=F;u++}else w.isHemisphereLight&&(F=a.get(w),F.direction.setFromMatrixPosition(w.matrixWorld),
F.direction.transformDirection(h),F.direction.normalize(),F.skyColor.copy(w.color).multiplyScalar(G),F.groundColor.copy(w.groundColor).multiplyScalar(G),b.hemi[t]=F,t++)}b.ambient[0]=k;b.ambient[1]=m;b.ambient[2]=v;b.directional.length=n;b.spot.length=q;b.rectArea.length=l;b.point.length=u;b.hemi.length=t;b.hash=b.id+","+n+","+u+","+q+","+l+","+t+","+g.length},state:b}}function Eg(){var a=new Cg,b=[],c=[],d=[];return{init:function(){b.length=0;c.length=0;d.length=0},state:{lightsArray:b,shadowsArray:c,
spritesArray:d,lights:a},setupLights:function(d){a.setup(b,c,d)},pushLight:function(a){b.push(a)},pushShadow:function(a){c.push(a)},pushSprite:function(a){d.push(a)}}}function Fg(){var a={};return{get:function(b,c){b=b.id+","+c.id;c=a[b];void 0===c&&(c=new Eg,a[b]=c);return c},dispose:function(){a={}}}}function Xd(a){function b(){ja=new zg(E);ja.get("WEBGL_depth_texture");ja.get("OES_texture_float");ja.get("OES_texture_float_linear");ja.get("OES_texture_half_float");ja.get("OES_texture_half_float_linear");
ja.get("OES_standard_derivatives");ja.get("OES_element_index_uint");ja.get("ANGLE_instanced_arrays");oa=new We(E,ja);da=new yg(E,ja,a);ba=new xg(E,ja,oa);ba.scissor(Y.copy(ca).multiplyScalar(Q));ba.viewport(R.copy(ea).multiplyScalar(Q));W=new wg;fa=new vg(E,ja,ba,W,da,oa,Wd,Ra);sa=new Zf(E);ta=new lg(E,sa,Wd);ua=new mg(ta,Ra);xa=new ig(E);qa=new ug(z,ja,da);va=new gg;ra=new Fg;ka=new cg(z,ba,ta,Z);za=new kg(E,ja,Ra);Aa=new jg(E,ja,Ra);Ba=new Wf(z,E,ba,fa,da);z.info.programs=qa.programs;z.context=
E;z.capabilities=da;z.extensions=ja;z.properties=W;z.renderLists=va;z.state=ba}function c(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");H=!0}function d(){console.log("THREE.WebGLRenderer: Context Restored.");H=!1;b()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);W.remove(a)}function f(a){var b=W.get(a).program;a.program=void 0;void 0!==b&&qa.releaseProgram(b)}function g(a,b,c){a.render(function(a){z.renderBufferImmediate(a,b,c)})}function h(){var a=pa.getDevice();
a&&a.isPresenting?a.requestAnimationFrame(k):window.requestAnimationFrame(k)}function k(a){!1!==wa&&(Ca(a),h())}function m(a,b,c){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isLight)D.pushLight(a),a.castShadow&&D.pushShadow(a);else if(a.isSprite)a.frustumCulled&&!ha.intersectsSprite(a)||D.pushSprite(a);else if(a.isImmediateRenderObject)c&&Lb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(nd),y.push(a,null,a.material,Lb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),
!a.frustumCulled||ha.intersectsObject(a)){c&&Lb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(nd);var d=ua.update(a),e=a.material;if(Array.isArray(e))for(var f=d.groups,g=0,h=f.length;g<h;g++){var k=f[g],n=e[k.materialIndex];n&&n.visible&&y.push(a,d,n,Lb.z,k)}else e.visible&&y.push(a,d,e,Lb.z,null)}a=a.children;g=0;for(h=a.length;g<h;g++)m(a[g],b,c)}}function v(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,k=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){O=
c;for(var v=c.cameras,u=0,l=v.length;u<l;u++){var q=v[u];if(h.layers.test(q.layers)){var r=q.bounds;ba.viewport(R.set(r.x*J,r.y*V,r.z*J,r.w*V).multiplyScalar(Q));n(h,b,q,k,m,g)}}}else O=null,n(h,b,c,k,m,g)}}function n(a,b,c,d,e,f){a.onBeforeRender(z,b,c,d,e,f);D=ra.get(b,O||c);a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var h=a.isMesh&&0>a.matrixWorld.determinant();ba.setMaterial(e,h);h=q(c,
b.fog,e,a);ma="";g(a,h,e)}else z.renderBufferDirect(c,b.fog,d,e,a,f);a.onAfterRender(z,b,c,d,e,f);D=ra.get(b,O||c)}function u(a,b,c){var d=W.get(a),g=D.state.lights;c=qa.getParameters(a,g.state,D.state.shadowsArray,b,Ga.numPlanes,Ga.numIntersection,c);var h=qa.getProgramCode(a,c),k=d.program,m=!0;if(void 0===k)a.addEventListener("dispose",e);else if(k.code!==h)f(a);else{if(d.lightsHash!==g.state.hash)W.update(a,"lightsHash",g.state.hash);else if(void 0!==c.shaderID)return;m=!1}m&&(c.shaderID?(k=qb[c.shaderID],
d.shader={name:a.type,uniforms:Ea.clone(k.uniforms),vertexShader:k.vertexShader,fragmentShader:k.fragmentShader}):d.shader={name:a.type,uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader},a.onBeforeCompile(d.shader),k=qa.acquireProgram(a,d.shader,c,h),d.program=k,a.program=k);c=k.getAttributes();if(a.morphTargets)for(h=a.numSupportedMorphTargets=0;h<z.maxMorphTargets;h++)0<=c["morphTarget"+h]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(h=a.numSupportedMorphNormals=
0;h<z.maxMorphNormals;h++)0<=c["morphNormal"+h]&&a.numSupportedMorphNormals++;c=d.shader.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=Ga.numPlanes,d.numIntersection=Ga.numIntersection,c.clippingPlanes=Ga.uniform;d.fog=b;d.lightsHash=g.state.hash;a.lights&&(c.ambientLightColor.value=g.state.ambient,c.directionalLights.value=g.state.directional,c.spotLights.value=g.state.spot,c.rectAreaLights.value=g.state.rectArea,c.pointLights.value=g.state.point,c.hemisphereLights.value=
g.state.hemi,c.directionalShadowMap.value=g.state.directionalShadowMap,c.directionalShadowMatrix.value=g.state.directionalShadowMatrix,c.spotShadowMap.value=g.state.spotShadowMap,c.spotShadowMatrix.value=g.state.spotShadowMatrix,c.pointShadowMap.value=g.state.pointShadowMap,c.pointShadowMatrix.value=g.state.pointShadowMatrix);a=d.program.getUniforms();a=cb.seqWithValue(a.seq,c);d.uniformsList=a}function q(a,b,c,d){aa=0;var e=W.get(c),f=D.state.lights;md&&(la||a!==M)&&Ga.setState(c.clippingPlanes,
c.clipIntersection,c.clipShadows,a,e,a===M&&c.id===T);!1===c.needsUpdate&&(void 0===e.program?c.needsUpdate=!0:c.fog&&e.fog!==b?c.needsUpdate=!0:c.lights&&e.lightsHash!==f.state.hash?c.needsUpdate=!0:void 0===e.numClippingPlanes||e.numClippingPlanes===Ga.numPlanes&&e.numIntersection===Ga.numIntersection||(c.needsUpdate=!0));c.needsUpdate&&(u(c,b,d),c.needsUpdate=!1);var g=!1,h=!1,k=!1;f=e.program;var m=f.getUniforms(),n=e.shader.uniforms;ba.useProgram(f.program)&&(k=h=g=!0);c.id!==T&&(T=c.id,h=!0);
if(g||a!==M){m.setValue(E,"projectionMatrix",a.projectionMatrix);da.logarithmicDepthBuffer&&m.setValue(E,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));M!==(O||a)&&(M=O||a,k=h=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.envMap)g=m.map.cameraPosition,void 0!==g&&g.setValue(E,Lb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&m.setValue(E,"viewMatrix",
a.matrixWorldInverse)}if(c.skinning&&(m.setOptional(E,d,"bindMatrix"),m.setOptional(E,d,"bindMatrixInverse"),a=d.skeleton))if(g=a.bones,da.floatVertexTextures){if(void 0===a.boneTexture){g=Math.sqrt(4*g.length);g=S.ceilPowerOfTwo(g);g=Math.max(g,4);var v=new Float32Array(g*g*4);v.set(a.boneMatrices);var q=new kb(v,g,g,1023,1015);q.needsUpdate=!0;a.boneMatrices=v;a.boneTexture=q;a.boneTextureSize=g}m.setValue(E,"boneTexture",a.boneTexture);m.setValue(E,"boneTextureSize",a.boneTextureSize)}else m.setOptional(E,
a,"boneMatrices");h&&(m.setValue(E,"toneMappingExposure",z.toneMappingExposure),m.setValue(E,"toneMappingWhitePoint",z.toneMappingWhitePoint),c.lights&&(h=k,n.ambientLightColor.needsUpdate=h,n.directionalLights.needsUpdate=h,n.pointLights.needsUpdate=h,n.spotLights.needsUpdate=h,n.rectAreaLights.needsUpdate=h,n.hemisphereLights.needsUpdate=h),b&&c.fog&&(n.fogColor.value=b.color,b.isFog?(n.fogNear.value=b.near,n.fogFar.value=b.far):b.isFogExp2&&(n.fogDensity.value=b.density)),c.isMeshBasicMaterial?
l(n,c):c.isMeshLambertMaterial?(l(n,c),c.emissiveMap&&(n.emissiveMap.value=c.emissiveMap)):c.isMeshPhongMaterial?(l(n,c),c.isMeshToonMaterial?(t(n,c),c.gradientMap&&(n.gradientMap.value=c.gradientMap)):t(n,c)):c.isMeshStandardMaterial?(l(n,c),c.isMeshPhysicalMaterial&&(n.clearCoat.value=c.clearCoat,n.clearCoatRoughness.value=c.clearCoatRoughness),n.roughness.value=c.roughness,n.metalness.value=c.metalness,c.roughnessMap&&(n.roughnessMap.value=c.roughnessMap),c.metalnessMap&&(n.metalnessMap.value=
c.metalnessMap),c.emissiveMap&&(n.emissiveMap.value=c.emissiveMap),c.bumpMap&&(n.bumpMap.value=c.bumpMap,n.bumpScale.value=c.bumpScale),c.normalMap&&(n.normalMap.value=c.normalMap,n.normalScale.value.copy(c.normalScale)),c.displacementMap&&(n.displacementMap.value=c.displacementMap,n.displacementScale.value=c.displacementScale,n.displacementBias.value=c.displacementBias),c.envMap&&(n.envMapIntensity.value=c.envMapIntensity)):c.isMeshDepthMaterial?(l(n,c),c.displacementMap&&(n.displacementMap.value=
c.displacementMap,n.displacementScale.value=c.displacementScale,n.displacementBias.value=c.displacementBias)):c.isMeshDistanceMaterial?(l(n,c),c.displacementMap&&(n.displacementMap.value=c.displacementMap,n.displacementScale.value=c.displacementScale,n.displacementBias.value=c.displacementBias),n.referencePosition.value.copy(c.referencePosition),n.nearDistance.value=c.nearDistance,n.farDistance.value=c.farDistance):c.isMeshNormalMaterial?(l(n,c),c.bumpMap&&(n.bumpMap.value=c.bumpMap,n.bumpScale.value=
c.bumpScale),c.normalMap&&(n.normalMap.value=c.normalMap,n.normalScale.value.copy(c.normalScale)),c.displacementMap&&(n.displacementMap.value=c.displacementMap,n.displacementScale.value=c.displacementScale,n.displacementBias.value=c.displacementBias)):c.isLineBasicMaterial?(n.diffuse.value=c.color,n.opacity.value=c.opacity,c.isLineDashedMaterial&&(n.dashSize.value=c.dashSize,n.totalSize.value=c.dashSize+c.gapSize,n.scale.value=c.scale)):c.isPointsMaterial?(n.diffuse.value=c.color,n.opacity.value=
c.opacity,n.size.value=c.size*Q,n.scale.value=.5*V,n.map.value=c.map,null!==c.map&&(!0===c.map.matrixAutoUpdate&&(b=c.map.offset,h=c.map.repeat,k=c.map.center,c.map.matrix.setUvTransform(b.x,b.y,h.x,h.y,c.map.rotation,k.x,k.y)),n.uvTransform.value.copy(c.map.matrix))):c.isShadowMaterial&&(n.color.value=c.color,n.opacity.value=c.opacity),void 0!==n.ltc_1&&(n.ltc_1.value=I.LTC_1),void 0!==n.ltc_2&&(n.ltc_2.value=I.LTC_2),cb.upload(E,e.uniformsList,n,z));c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&
(cb.upload(E,e.uniformsList,n,z),c.uniformsNeedUpdate=!1);m.setValue(E,"modelViewMatrix",d.modelViewMatrix);m.setValue(E,"normalMatrix",d.normalMatrix);m.setValue(E,"modelMatrix",d.matrixWorld);return f}function l(a,b){a.opacity.value=b.opacity;b.color&&(a.diffuse.value=b.color);b.emissive&&a.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity);b.map&&(a.map.value=b.map);b.alphaMap&&(a.alphaMap.value=b.alphaMap);b.specularMap&&(a.specularMap.value=b.specularMap);b.envMap&&(a.envMap.value=
b.envMap,a.flipEnvMap.value=b.envMap&&b.envMap.isCubeTexture?-1:1,a.reflectivity.value=b.reflectivity,a.refractionRatio.value=b.refractionRatio);b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.aoMap&&(a.aoMap.value=b.aoMap,a.aoMapIntensity.value=b.aoMapIntensity);if(b.map)var c=b.map;else b.specularMap?c=b.specularMap:b.displacementMap?c=b.displacementMap:b.normalMap?c=b.normalMap:b.bumpMap?c=b.bumpMap:b.roughnessMap?c=b.roughnessMap:b.metalnessMap?c=b.metalnessMap:
b.alphaMap?c=b.alphaMap:b.emissiveMap&&(c=b.emissiveMap);if(void 0!==c){c.isWebGLRenderTarget&&(c=c.texture);if(!0===c.matrixAutoUpdate){b=c.offset;var d=c.repeat,e=c.center;c.matrix.setUvTransform(b.x,b.y,d.x,d.y,c.rotation,e.x,e.y)}a.uvTransform.value.copy(c.matrix)}}function t(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=
b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}console.log("THREE.WebGLRenderer","90");a=a||{};var x=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),B=void 0!==a.context?a.context:null,w=void 0!==a.alpha?a.alpha:!1,A=void 0!==a.depth?a.depth:!0,G=void 0!==a.stencil?a.stencil:!0,N=void 0!==a.antialias?
a.antialias:!1,Z=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,F=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,C=void 0!==a.powerPreference?a.powerPreference:"default",y=null,D=null;this.domElement=x;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=
this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var z=this,H=!1,K=null,L=null,T=-1,ma="",M=null,O=null,R=new X,Y=new X,U=null,aa=0,J=x.width,V=x.height,Q=1,ea=new X(0,0,J,V),ca=new X(0,0,J,V),na=!1,ha=new ld,Ga=new Ag,md=!1,la=!1,nd=new P,Lb=new p,Wd={geometries:0,textures:0},Ra={frame:0,calls:0,vertices:0,faces:0,points:0};this.info={render:Ra,memory:Wd,programs:null,autoReset:!0,reset:function(){Ra.frame++;Ra.calls=0;Ra.vertices=0;Ra.faces=0;Ra.points=0}};try{w={alpha:w,depth:A,
stencil:G,antialias:N,premultipliedAlpha:Z,preserveDrawingBuffer:F,powerPreference:C};x.addEventListener("webglcontextlost",c,!1);x.addEventListener("webglcontextrestored",d,!1);var E=B||x.getContext("webgl",w)||x.getContext("experimental-webgl",w);if(null===E){if(null!==x.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");throw Error("Error creating WebGL context.");}void 0===E.getShaderPrecisionFormat&&(E.getShaderPrecisionFormat=function(){return{rangeMin:1,
rangeMax:1,precision:1}})}catch(Gg){console.error("THREE.WebGLRenderer: "+Gg.message)}var ja,da,ba,W,fa,sa,ta,ua,qa,va,ra,ka,xa,za,Aa,Ba,oa;b();var pa=new Ve(z);this.vr=pa;var Da=new Oe(z,ua,da.maxTextureSize);this.shadowMap=Da;this.getContext=function(){return E};this.getContextAttributes=function(){return E.getContextAttributes()};this.forceContextLoss=function(){var a=ja.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=ja.get("WEBGL_lose_context");a&&a.restoreContext()};
this.getPixelRatio=function(){return Q};this.setPixelRatio=function(a){void 0!==a&&(Q=a,this.setSize(J,V,!1))};this.getSize=function(){return{width:J,height:V}};this.setSize=function(a,b,c){var d=pa.getDevice();d&&d.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(J=a,V=b,x.width=a*Q,x.height=b*Q,!1!==c&&(x.style.width=a+"px",x.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=function(){return{width:J*Q,height:V*Q}};this.setDrawingBufferSize=
function(a,b,c){J=a;V=b;Q=c;x.width=a*c;x.height=b*c;this.setViewport(0,0,a,b)};this.getCurrentViewport=function(){return R};this.setViewport=function(a,b,c,d){ea.set(a,V-b-d,c,d);ba.viewport(R.copy(ea).multiplyScalar(Q))};this.setScissor=function(a,b,c,d){ca.set(a,V-b-d,c,d);ba.scissor(Y.copy(ca).multiplyScalar(Q))};this.setScissorTest=function(a){ba.setScissorTest(na=a)};this.getClearColor=function(){return ka.getClearColor()};this.setClearColor=function(){ka.setClearColor.apply(ka,arguments)};
this.getClearAlpha=function(){return ka.getClearAlpha()};this.setClearAlpha=function(){ka.setClearAlpha.apply(ka,arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=E.COLOR_BUFFER_BIT;if(void 0===b||b)d|=E.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=E.STENCIL_BUFFER_BIT;E.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,
c,d)};this.dispose=function(){x.removeEventListener("webglcontextlost",c,!1);x.removeEventListener("webglcontextrestored",d,!1);va.dispose();ra.dispose();W.dispose();ua.dispose();pa.dispose();wa=!1};this.renderBufferImmediate=function(a,b,c){ba.initAttributes();var d=W.get(a);a.hasPositions&&!d.position&&(d.position=E.createBuffer());a.hasNormals&&!d.normal&&(d.normal=E.createBuffer());a.hasUvs&&!d.uv&&(d.uv=E.createBuffer());a.hasColors&&!d.color&&(d.color=E.createBuffer());b=b.getAttributes();a.hasPositions&&
(E.bindBuffer(E.ARRAY_BUFFER,d.position),E.bufferData(E.ARRAY_BUFFER,a.positionArray,E.DYNAMIC_DRAW),ba.enableAttribute(b.position),E.vertexAttribPointer(b.position,3,E.FLOAT,!1,0,0));if(a.hasNormals){E.bindBuffer(E.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&!0===c.flatShading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=m;g[e+
3]=h;g[e+4]=k;g[e+5]=m;g[e+6]=h;g[e+7]=k;g[e+8]=m}E.bufferData(E.ARRAY_BUFFER,a.normalArray,E.DYNAMIC_DRAW);ba.enableAttribute(b.normal);E.vertexAttribPointer(b.normal,3,E.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(E.bindBuffer(E.ARRAY_BUFFER,d.uv),E.bufferData(E.ARRAY_BUFFER,a.uvArray,E.DYNAMIC_DRAW),ba.enableAttribute(b.uv),E.vertexAttribPointer(b.uv,2,E.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(E.bindBuffer(E.ARRAY_BUFFER,d.color),E.bufferData(E.ARRAY_BUFFER,a.colorArray,E.DYNAMIC_DRAW),ba.enableAttribute(b.color),
E.vertexAttribPointer(b.color,3,E.FLOAT,!1,0,0));ba.disableUnusedAttributes();E.drawArrays(E.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){var g=e.isMesh&&0>e.matrixWorld.determinant();ba.setMaterial(d,g);var h=q(a,b,d,e);a=c.id+"_"+h.id+"_"+(!0===d.wireframe);var k=!1;a!==ma&&(ma=a,k=!0);e.morphTargetInfluences&&(xa.update(e,c,d,h),k=!0);g=c.index;var m=c.attributes.position;b=1;!0===d.wireframe&&(g=ta.getWireframeAttribute(c),b=2);a=za;if(null!==g){var n=sa.get(g);
a=Aa;a.setIndex(n)}if(k){k=void 0;if(c&&c.isInstancedBufferGeometry&&null===ja.get("ANGLE_instanced_arrays"))console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{void 0===k&&(k=0);ba.initAttributes();var v=c.attributes;h=h.getAttributes();var u=d.defaultAttributeValues;for(N in h){var l=h[N];if(0<=l){var r=v[N];if(void 0!==r){var t=r.normalized,p=r.itemSize,x=sa.get(r);if(void 0!==x){var w=
x.buffer,A=x.type;x=x.bytesPerElement;if(r.isInterleavedBufferAttribute){var B=r.data,G=B.stride;r=r.offset;B&&B.isInstancedInterleavedBuffer?(ba.enableAttributeAndDivisor(l,B.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=B.meshPerAttribute*B.count)):ba.enableAttribute(l);E.bindBuffer(E.ARRAY_BUFFER,w);E.vertexAttribPointer(l,p,A,t,G*x,(k*G+r)*x)}else r.isInstancedBufferAttribute?(ba.enableAttributeAndDivisor(l,r.meshPerAttribute),void 0===c.maxInstancedCount&&(c.maxInstancedCount=
r.meshPerAttribute*r.count)):ba.enableAttribute(l),E.bindBuffer(E.ARRAY_BUFFER,w),E.vertexAttribPointer(l,p,A,t,0,k*p*x)}}else if(void 0!==u&&(t=u[N],void 0!==t))switch(t.length){case 2:E.vertexAttrib2fv(l,t);break;case 3:E.vertexAttrib3fv(l,t);break;case 4:E.vertexAttrib4fv(l,t);break;default:E.vertexAttrib1fv(l,t)}}}ba.disableUnusedAttributes()}null!==g&&E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,n.buffer)}n=Infinity;null!==g?n=g.count:void 0!==m&&(n=m.count);g=c.drawRange.start*b;m=null!==f?f.start*b:
0;var N=Math.max(g,m);f=Math.max(0,Math.min(n,g+c.drawRange.count*b,m+(null!==f?f.count*b:Infinity))-1-N+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)ba.setLineWidth(d.wireframeLinewidth*(null===K?Q:1)),a.setMode(E.LINES);else switch(e.drawMode){case 0:a.setMode(E.TRIANGLES);break;case 1:a.setMode(E.TRIANGLE_STRIP);break;case 2:a.setMode(E.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===d&&(d=1),ba.setLineWidth(d*(null===K?Q:1)),e.isLineSegments?a.setMode(E.LINES):e.isLineLoop?a.setMode(E.LINE_LOOP):
a.setMode(E.LINE_STRIP)):e.isPoints&&a.setMode(E.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,N,f):a.render(N,f)}};this.compile=function(a,b){D=ra.get(a,b);D.init();a.traverse(function(a){a.isLight&&(D.pushLight(a),a.castShadow&&D.pushShadow(a))});D.setupLights(b);a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var c=0;c<b.material.length;c++)u(b.material[c],a.fog,b);else u(b.material,a.fog,b)})};var wa=!1,Ca=null;this.animate=function(a){Ca=
a;null!==Ca?wa||(h(),wa=!0):wa=!1};this.render=function(a,b,c,d){if(!b||!b.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else if(!H){ma="";T=-1;M=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();pa.enabled&&(b=pa.getCamera(b));D=ra.get(a,b);D.init();a.onBeforeRender(z,a,b,c);nd.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ha.setFromMatrix(nd);la=this.localClippingEnabled;md=Ga.init(this.clippingPlanes,
la,b);y=va.get(a,b);y.init();m(a,b,z.sortObjects);!0===z.sortObjects&&y.sort();md&&Ga.beginShadows();Da.render(D.state.shadowsArray,a,b);D.setupLights(b);md&&Ga.endShadows();this.info.autoReset&&this.info.reset();void 0===c&&(c=null);this.setRenderTarget(c);ka.render(y,a,b,d);d=y.opaque;var e=y.transparent;if(a.overrideMaterial){var f=a.overrideMaterial;d.length&&v(d,a,b,f);e.length&&v(e,a,b,f)}else d.length&&v(d,a,b),e.length&&v(e,a,b);Ba.render(D.state.spritesArray,a,b);c&&fa.updateRenderTargetMipmap(c);
ba.buffers.depth.setTest(!0);ba.buffers.depth.setMask(!0);ba.buffers.color.setMask(!0);ba.setPolygonOffset(!1);a.onAfterRender(z,a,b);pa.enabled&&pa.submitFrame();D=y=null}};this.allocTextureUnit=function(){var a=aa;a>=da.maxTextures&&console.warn("THREE.WebGLRenderer: Trying to use "+a+" texture units while this GPU supports only "+da.maxTextures);aa+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
a=!0),b=b.texture);fa.setTexture2D(b,c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);fa.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&
6===b.image.length?fa.setTextureCube(b,c):fa.setTextureCubeDynamic(b,c)}}();this.getRenderTarget=function(){return K};this.setRenderTarget=function(a){(K=a)&&void 0===W.get(a).__webglFramebuffer&&fa.setupRenderTarget(a);var b=null,c=!1;a?(b=W.get(a).__webglFramebuffer,a.isWebGLRenderTargetCube&&(b=b[a.activeCubeFace],c=!0),R.copy(a.viewport),Y.copy(a.scissor),U=a.scissorTest):(R.copy(ea).multiplyScalar(Q),Y.copy(ca).multiplyScalar(Q),U=na);L!==b&&(E.bindFramebuffer(E.FRAMEBUFFER,b),L=b);ba.viewport(R);
ba.scissor(Y);ba.setScissorTest(U);c&&(c=W.get(a.texture),E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,c.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(a&&a.isWebGLRenderTarget){var g=W.get(a).__webglFramebuffer;if(g){var h=!1;g!==L&&(E.bindFramebuffer(E.FRAMEBUFFER,g),h=!0);try{var k=a.texture,m=k.format,n=k.type;1023!==m&&oa.convert(m)!==E.getParameter(E.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):
1009===n||oa.convert(n)===E.getParameter(E.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ja.get("OES_texture_float")||ja.get("WEBGL_color_buffer_float"))||1016===n&&ja.get("EXT_color_buffer_half_float")?E.checkFramebufferStatus(E.FRAMEBUFFER)===E.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&E.readPixels(b,c,d,e,oa.convert(m),oa.convert(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&
E.bindFramebuffer(E.FRAMEBUFFER,L)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};this.copyFramebufferToTexture=function(a,b,c){var d=b.image.width,e=b.image.height,f=oa.convert(b.format);this.setTexture2D(b,0);E.copyTexImage2D(E.TEXTURE_2D,c||0,f,a.x,a.y,d,e,0)}}function Mb(a,b){this.name="";this.color=new H(a);this.density=void 0!==b?b:2.5E-4}function Nb(a,b,c){this.name="";this.color=new H(a);this.near=void 0!==b?b:1;this.far=void 0!==
c?c:1E3}function pd(){y.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function gb(a){O.call(this);this.type="SpriteMaterial";this.color=new H(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}function zc(a){y.call(this);this.type="Sprite";this.material=void 0!==a?a:new gb;this.center=new C(.5,.5)}function Ac(){y.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function Bc(a,
b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new P)}function qd(){y.call(this);this.type="Bone"}function rd(a,b){ua.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new P;
this.bindMatrixInverse=new P;a=this.initBones();a=new Bc(a);this.bind(a,this.matrixWorld);this.normalizeSkinWeights()}function Y(a){O.call(this);this.type="LineBasicMaterial";this.color=new H(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function qa(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new U(a,b);y.call(this);this.type="Line";this.geometry=void 0!==a?a:
new z;this.material=void 0!==b?b:new Y({color:16777215*Math.random()})}function U(a,b){qa.call(this,a,b);this.type="LineSegments"}function sd(a,b){qa.call(this,a,b);this.type="LineLoop"}function Ha(a){O.call(this);this.type="PointsMaterial";this.color=new H(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Ob(a,b){y.call(this);this.type="Points";this.geometry=void 0!==a?a:new z;this.material=void 0!==b?b:new Ha({color:16777215*Math.random()})}function td(){y.call(this);
this.type="Group"}function Yd(a,b,c,d,e,f,g,h,k){aa.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1}function Pb(a,b,c,d,e,f,g,h,k,m,v,n){aa.call(this,null,f,g,h,k,m,d,e,v,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Cc(a,b,c,d,e,f,g,h,k,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);aa.call(this,
null,d,e,f,g,h,m,c,k);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Qb(a){z.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&a.isGeometry){var k=a.faces;var m=0;for(d=k.length;m<d;m++){var v=k[m];for(c=0;3>c;c++){var n=v[h[c]];var u=v[h[(c+1)%3]];f[0]=Math.min(n,u);f[1]=Math.max(n,u);n=f[0]+","+f[1];void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]})}}for(n in g)m=g[n],
h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z)}else if(a&&a.isBufferGeometry)if(h=new p,null!==a.index){k=a.attributes.position;v=a.index;var l=a.groups;0===l.length&&(l=[{start:0,count:v.count,materialIndex:0}]);a=0;for(e=l.length;a<e;++a)for(m=l[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)n=v.getX(m+c),u=v.getX(m+(c+1)%3),f[0]=Math.min(n,u),f[1]=Math.max(n,u),n=f[0]+","+f[1],void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]});for(n in g)m=g[n],h.fromBufferAttribute(k,
m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(k,m.index2),b.push(h.x,h.y,h.z)}else for(k=a.attributes.position,m=0,d=k.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(k,g),b.push(h.x,h.y,h.z);this.addAttribute("position",new D(b,3))}function Dc(a,b,c){L.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Rb(a,b,c));this.mergeVertices()}function Rb(a,b,c){z.call(this);
this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new p,k=new p,m=new p,v=new p,n=new p,u,l,r=b+1;for(u=0;u<=c;u++){var t=u/c;for(l=0;l<=b;l++){var x=l/b;k=a(x,t,k);e.push(k.x,k.y,k.z);0<=x-1E-5?(m=a(x-1E-5,t,m),v.subVectors(k,m)):(m=a(x+1E-5,t,m),v.subVectors(m,k));0<=t-1E-5?(m=a(x,t-1E-5,m),n.subVectors(k,m)):(m=a(x,t+1E-5,m),n.subVectors(m,k));h.crossVectors(v,n).normalize();f.push(h.x,h.y,h.z);g.push(x,t)}}for(u=0;u<c;u++)for(l=0;l<b;l++)a=
u*r+l+1,h=(u+1)*r+l+1,k=(u+1)*r+l,d.push(u*r+l,a,k),d.push(a,h,k);this.setIndex(d);this.addAttribute("position",new D(e,3));this.addAttribute("normal",new D(f,3));this.addAttribute("uv",new D(g,2))}function Ec(a,b,c,d){L.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new va(a,b,c,d));this.mergeVertices()}function va(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2]}function g(a,
b,c,d){0>d&&1===a.x&&(k[b]=a.x-1);0===c.x&&0===c.z&&(k[b]=d/2/Math.PI+.5)}z.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],k=[];(function(a){for(var c=new p,d=new p,g=new p,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var k,m,l=c,B=d,w=g,A=Math.pow(2,a),G=[];for(m=0;m<=A;m++){G[m]=[];var N=l.clone().lerp(w,m/A),Z=B.clone().lerp(w,m/A),F=A-m;for(k=0;k<=F;k++)G[m][k]=0===k&&m===A?N:N.clone().lerp(Z,k/F)}for(m=
0;m<A;m++)for(k=0;k<2*(A-m)-1;k++)l=Math.floor(k/2),0===k%2?(e(G[m][l+1]),e(G[m+1][l]),e(G[m][l])):(e(G[m][l+1]),e(G[m+1][l+1]),e(G[m+1][l]))}})(d);(function(a){for(var b=new p,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new p,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],k.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new p;b=new p;for(var c=
new p,d=new p,e=new C,f=new C,l=new C,x=0,B=0;x<h.length;x+=9,B+=6){a.set(h[x+0],h[x+1],h[x+2]);b.set(h[x+3],h[x+4],h[x+5]);c.set(h[x+6],h[x+7],h[x+8]);e.set(k[B+0],k[B+1]);f.set(k[B+2],k[B+3]);l.set(k[B+4],k[B+5]);d.copy(a).add(b).add(c).divideScalar(3);var w=Math.atan2(d.z,-d.x);g(e,B+0,a,w);g(f,B+2,b,w);g(l,B+4,c,w)}for(a=0;a<k.length;a+=6)b=k[a+0],c=k[a+2],d=k[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(k[a+0]+=1),.2>c&&(k[a+2]+=1),.2>d&&(k[a+4]+=1))})();this.addAttribute("position",
new D(h,3));this.addAttribute("normal",new D(h.slice(),3));this.addAttribute("uv",new D(k,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Fc(a,b){L.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sb(a,b));this.mergeVertices()}function Sb(a,b){va.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Gc(a,b){L.call(this);
this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new rb(a,b));this.mergeVertices()}function rb(a,b){va.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Hc(a,b){L.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tb(a,b));this.mergeVertices()}function Tb(a,b){var c=
(1+Math.sqrt(5))/2;va.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Ic(a,b){L.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Ub(a,b));this.mergeVertices()}function Ub(a,b){var c=
(1+Math.sqrt(5))/2,d=1/c;va.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters=
{radius:a,detail:b}}function Jc(a,b,c,d,e,f){L.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Vb(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Vb(a,b,c,d,e){function f(e){v=a.getPointAt(e/b,v);var f=g.normals[e];e=g.binormals[e];for(l=0;l<=d;l++){var m=l/d*Math.PI*
2,n=Math.sin(m);m=-Math.cos(m);k.x=m*f.x+n*e.x;k.y=m*f.y+n*e.y;k.z=m*f.z+n*e.z;k.normalize();r.push(k.x,k.y,k.z);h.x=v.x+c*k.x;h.y=v.y+c*k.y;h.z=v.z+c*k.z;q.push(h.x,h.y,h.z)}}z.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new p,k=new p,m=new C,v=new p,n,l,q=[],r=[],t=[],x=[];for(n=
0;n<b;n++)f(n);f(!1===e?b:0);for(n=0;n<=b;n++)for(l=0;l<=d;l++)m.x=n/b,m.y=l/d,t.push(m.x,m.y);(function(){for(l=1;l<=b;l++)for(n=1;n<=d;n++){var a=(d+1)*l+(n-1),c=(d+1)*l+n,e=(d+1)*(l-1)+n;x.push((d+1)*(l-1)+(n-1),a,e);x.push(a,c,e)}})();this.setIndex(x);this.addAttribute("position",new D(q,3));this.addAttribute("normal",new D(r,3));this.addAttribute("uv",new D(t,2))}function Kc(a,b,c,d,e,f,g){L.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,
p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Wb(a,b,c,d,e,f));this.mergeVertices()}function Wb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}z.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||
64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],k=[],m=[],v=[],n,l=new p,q=new p,r=new p,t=new p,x=new p,B=new p,w=new p;for(n=0;n<=c;++n){var A=n/c*e*Math.PI*2;g(A,e,f,a,r);g(A+.01,e,f,a,t);B.subVectors(t,r);w.addVectors(t,r);x.crossVectors(B,w);w.crossVectors(x,B);x.normalize();w.normalize();for(A=0;A<=d;++A){var G=A/d*Math.PI*2,N=-b*Math.cos(G);G=b*Math.sin(G);l.x=r.x+(N*w.x+G*x.x);l.y=r.y+(N*w.y+G*x.y);l.z=r.z+(N*w.z+G*x.z);k.push(l.x,l.y,l.z);q.subVectors(l,r).normalize();m.push(q.x,q.y,q.z);v.push(n/
c);v.push(A/d)}}for(A=1;A<=c;A++)for(n=1;n<=d;n++)a=(d+1)*A+(n-1),b=(d+1)*A+n,e=(d+1)*(A-1)+n,h.push((d+1)*(A-1)+(n-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new D(k,3));this.addAttribute("normal",new D(m,3));this.addAttribute("uv",new D(v,2))}function Lc(a,b,c,d,e){L.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Xb(a,b,c,d,e));this.mergeVertices()}function Xb(a,b,c,d,e){z.call(this);
this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],k=[],m=new p,v=new p,n=new p,l,q;for(l=0;l<=c;l++)for(q=0;q<=d;q++){var r=q/d*e,t=l/c*Math.PI*2;v.x=(a+b*Math.cos(t))*Math.cos(r);v.y=(a+b*Math.cos(t))*Math.sin(r);v.z=b*Math.sin(t);g.push(v.x,v.y,v.z);m.x=a*Math.cos(r);m.y=a*Math.sin(r);n.subVectors(v,m).normalize();h.push(n.x,n.y,n.z);k.push(q/d);k.push(l/
c)}for(l=1;l<=c;l++)for(q=1;q<=d;q++)a=(d+1)*(l-1)+q-1,b=(d+1)*(l-1)+q,e=(d+1)*l+q,f.push((d+1)*l+q-1,a,e),f.push(a,b,e);this.setIndex(f);this.addAttribute("position",new D(g,3));this.addAttribute("normal",new D(h,3));this.addAttribute("uv",new D(k,2))}function Xe(a,b,c,d,e){for(var f,g=0,h=b,k=c-d;h<c;h+=d)g+=(a[k]-a[h])*(a[h+1]+a[k+1]),k=h;if(e===0<g)for(e=b;e<c;e+=d)f=Ye(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=Ye(e,a[e],a[e+1],f);f&&sb(f,f.next)&&(Mc(f),f=f.next);return f}function Nc(a,b){if(!a)return a;
b||(b=a);do{var c=!1;if(a.steiner||!sb(a,a.next)&&0!==sa(a.prev,a,a.next))a=a.next;else{Mc(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}function Oc(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,k=h;do null===k.z&&(k.z=Zd(k.x,k.y,d,e,f)),k.prevZ=k.prev,k=k.nextZ=k.next;while(k!==h);k.prevZ.nextZ=null;k.prevZ=null;h=k;var m,v,n,l,q=1;do{k=h;var r=h=null;for(v=0;k;){v++;var p=k;for(m=n=0;m<q&&(n++,p=p.nextZ,p);m++);for(l=q;0<n||0<l&&p;)0!==n&&(0===l||!p||k.z<=p.z)?(m=k,k=k.nextZ,n--):(m=
p,p=p.nextZ,l--),r?r.nextZ=m:h=m,m.prevZ=r,r=m;k=p}r.nextZ=null;q*=2}while(1<v)}for(h=a;a.prev!==a.next;){k=a.prev;p=a.next;if(f)a:{r=a;l=d;var x=e,B=f;v=r.prev;n=r;q=r.next;if(0<=sa(v,n,q))r=!1;else{var w=v.x>n.x?v.x>q.x?v.x:q.x:n.x>q.x?n.x:q.x,A=v.y>n.y?v.y>q.y?v.y:q.y:n.y>q.y?n.y:q.y;m=Zd(v.x<n.x?v.x<q.x?v.x:q.x:n.x<q.x?n.x:q.x,v.y<n.y?v.y<q.y?v.y:q.y:n.y<q.y?n.y:q.y,l,x,B);l=Zd(w,A,l,x,B);for(x=r.nextZ;x&&x.z<=l;){if(x!==r.prev&&x!==r.next&&ud(v.x,v.y,n.x,n.y,q.x,q.y,x.x,x.y)&&0<=sa(x.prev,x,
x.next)){r=!1;break a}x=x.nextZ}for(x=r.prevZ;x&&x.z>=m;){if(x!==r.prev&&x!==r.next&&ud(v.x,v.y,n.x,n.y,q.x,q.y,x.x,x.y)&&0<=sa(x.prev,x,x.next)){r=!1;break a}x=x.prevZ}r=!0}}else a:if(r=a,v=r.prev,n=r,q=r.next,0<=sa(v,n,q))r=!1;else{for(m=r.next.next;m!==r.prev;){if(ud(v.x,v.y,n.x,n.y,q.x,q.y,m.x,m.y)&&0<=sa(m.prev,m,m.next)){r=!1;break a}m=m.next}r=!0}if(r)b.push(k.i/c),b.push(a.i/c),b.push(p.i/c),Mc(a),h=a=p.next;else if(a=p,a===h){if(!g)Oc(Nc(a),b,c,d,e,f,1);else if(1===g){g=b;h=c;k=a;do p=k.prev,
r=k.next.next,!sb(p,r)&&Ze(p,k,k.next,r)&&Pc(p,r)&&Pc(r,p)&&(g.push(p.i/h),g.push(k.i/h),g.push(r.i/h),Mc(k),Mc(k.next),k=a=r),k=k.next;while(k!==a);a=k;Oc(a,b,c,d,e,f,2)}else if(2===g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(k=g.i!==h.i){k=g;p=h;if(r=k.next.i!==p.i&&k.prev.i!==p.i){b:{r=k;do{if(r.i!==k.i&&r.next.i!==k.i&&r.i!==p.i&&r.next.i!==p.i&&Ze(r,r.next,k,p)){r=!0;break b}r=r.next}while(r!==k);r=!1}r=!r}if(r=r&&Pc(k,p)&&Pc(p,k)){r=k;v=!1;n=(k.x+p.x)/2;p=(k.y+p.y)/2;do r.y>p!==r.next.y>p&&
r.next.y!==r.y&&n<(r.next.x-r.x)*(p-r.y)/(r.next.y-r.y)+r.x&&(v=!v),r=r.next;while(r!==k);r=v}k=r}if(k){a=$e(g,h);g=Nc(g,g.next);a=Nc(a,a.next);Oc(g,b,c,d,e,f);Oc(a,b,c,d,e,f);break a}h=h.next}g=g.next}while(g!==a)}break}}}}function Hg(a,b){return a.x-b.x}function Ig(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var h=c.x<c.next.x?c:c.next}}c=
c.next}while(c!==b);if(!h)return null;if(d===f)return h.prev;b=h;g=h.x;var k=h.y,m=Infinity;for(c=h.next;c!==b;){if(d>=c.x&&c.x>=g&&d!==c.x&&ud(e<k?d:f,e,g,k,e<k?f:d,e,c.x,c.y)){var v=Math.abs(e-c.y)/(d-c.x);(v<m||v===m&&c.x>h.x)&&Pc(c,a)&&(h=c,m=v)}c=c.next}return h}function Zd(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function Jg(a){var b=
a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function ud(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h)}function sa(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function sb(a,b){return a.x===b.x&&a.y===b.y}function Ze(a,b,c,d){return sb(a,b)&&sb(c,d)||sb(a,d)&&sb(c,b)?!0:0<sa(a,b,c)!==0<sa(a,b,d)&&0<sa(c,d,a)!==0<sa(c,d,b)}function Pc(a,b){return 0>sa(a.prev,a,a.next)?0<=sa(a,b,a.next)&&0<=sa(a,a.prev,b):0>sa(a,b,a.prev)||
0>sa(a,a.next,b)}function $e(a,b){var c=new $d(a.i,a.x,a.y),d=new $d(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function Ye(a,b,c,d){a=new $d(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function Mc(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function $d(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=
this.prev=null;this.steiner=!1}function af(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function bf(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function hb(a,b){L.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new Ia(a,b));this.mergeVertices()}function Ia(a,b){"undefined"!==typeof a&&(z.call(this),this.type="ExtrudeBufferGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeVertexNormals())}function Qc(a,
b){L.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Yb(a,b));this.mergeVertices()}function Yb(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new L;a=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=
!1);Ia.call(this,a,b);this.type="TextBufferGeometry"}function Rc(a,b,c,d,e,f,g){L.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new tb(a,b,c,d,e,f,g));this.mergeVertices()}function tb(a,b,c,d,e,f,g){z.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,
Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,k,m,v=0,n=[],l=new p,q=new p,r=[],t=[],x=[],B=[];for(m=0;m<=c;m++){var w=[],A=m/c;for(k=0;k<=b;k++){var G=k/b;l.x=-a*Math.cos(d+G*e)*Math.sin(f+A*g);l.y=a*Math.cos(f+A*g);l.z=a*Math.sin(d+G*e)*Math.sin(f+A*g);t.push(l.x,l.y,l.z);q.set(l.x,l.y,l.z).normalize();x.push(q.x,q.y,q.z);B.push(G,1-A);w.push(v++)}n.push(w)}for(m=0;m<c;m++)for(k=0;k<b;k++)a=n[m][k+1],
d=n[m][k],e=n[m+1][k],g=n[m+1][k+1],(0!==m||0<f)&&r.push(a,d,g),(m!==c-1||h<Math.PI)&&r.push(d,e,g);this.setIndex(r);this.addAttribute("position",new D(t,3));this.addAttribute("normal",new D(x,3));this.addAttribute("uv",new D(B,2))}function Sc(a,b,c,d,e,f){L.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Zb(a,b,c,d,e,f));this.mergeVertices()}function Zb(a,b,c,d,e,f){z.call(this);
this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],k=[],m=[],v=a,n=(b-a)/d,l=new p,q=new C,r,t;for(r=0;r<=d;r++){for(t=0;t<=c;t++)a=e+t/c*f,l.x=v*Math.cos(a),l.y=v*Math.sin(a),h.push(l.x,l.y,l.z),k.push(0,0,1),q.x=(l.x/b+1)/2,q.y=(l.y/b+1)/2,m.push(q.x,q.y);v+=n}for(r=0;r<d;r++)for(b=r*(c+
1),t=0;t<c;t++)a=t+b,e=a+c+1,f=a+c+2,v=a+1,g.push(a,e,v),g.push(e,f,v);this.setIndex(g);this.addAttribute("position",new D(h,3));this.addAttribute("normal",new D(k,3));this.addAttribute("uv",new D(m,2))}function Tc(a,b,c,d){L.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new $b(a,b,c,d));this.mergeVertices()}function $b(a,b,c,d){z.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};
b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=S.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,k=new p,m=new C,v;for(v=0;v<=b;v++){var n=c+v*h*d;var l=Math.sin(n),q=Math.cos(n);for(n=0;n<=a.length-1;n++)k.x=a[n].x*l,k.y=a[n].y,k.z=a[n].x*q,f.push(k.x,k.y,k.z),m.x=v/b,m.y=n/(a.length-1),g.push(m.x,m.y)}for(v=0;v<b;v++)for(n=0;n<a.length-1;n++)c=n+v*a.length,h=c+a.length,k=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,k,m);this.setIndex(e);this.addAttribute("position",new D(f,3));this.addAttribute("uv",new D(g,
2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new p,f=new p,g=new p,c=b*a.length*3,n=v=0;v<a.length;v++,n+=3)e.x=d[n+0],e.y=d[n+1],e.z=d[n+2],f.x=d[c+n+0],f.y=d[c+n+1],f.z=d[c+n+2],g.addVectors(e,f).normalize(),d[n+0]=d[c+n+0]=g.x,d[n+1]=d[c+n+1]=g.y,d[n+2]=d[c+n+2]=g.z}function ub(a,b){L.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,
curveSegments:b};this.fromBufferGeometry(new vb(a,b));this.mergeVertices()}function vb(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,l=a.holes;if(!1===Ya.isClockWise(m))for(m=m.reverse(),a=0,c=l.length;a<c;a++){var v=l[a];!0===Ya.isClockWise(v)&&(l[a]=v.reverse())}var p=Ya.triangulateShape(m,l);a=0;for(c=l.length;a<c;a++)v=l[a],m=m.concat(v);a=0;for(c=m.length;a<c;a++)v=m[a],e.push(v.x,v.y,0),f.push(0,0,1),g.push(v.x,v.y);a=0;for(c=p.length;a<c;a++)m=p[a],d.push(m[0]+h,
m[1]+h,m[2]+h),k+=3}z.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,k=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,k,m),h+=k,k=0;this.setIndex(d);this.addAttribute("position",new D(e,3));this.addAttribute("normal",new D(f,3));this.addAttribute("uv",new D(g,2))}function cf(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);
return b}function ac(a,b){z.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(S.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new L;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,k=g.length;h<k;h++)for(var m=g[h],l=0;3>l;l++){var n=m[f[l]];var u=m[f[(l+1)%3]];d[0]=Math.min(n,u);d[1]=Math.max(n,u);n=d[0]+","+d[1];void 0===e[n]?e[n]={index1:d[0],index2:d[1],
face1:h,face2:void 0}:e[n].face2=h}for(n in e)if(d=e[n],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.addAttribute("position",new D(c,3))}function wb(a,b,c,d,e,f,g,h){L.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Za(a,b,c,d,e,f,g,h));this.mergeVertices()}function Za(a,
b,c,d,e,f,g,h){function k(c){var e,f=new C,k=new p,v=0,t=!0===c?a:b,w=!0===c?1:-1;var y=r;for(e=1;e<=d;e++)n.push(0,x*w,0),u.push(0,w,0),q.push(.5,.5),r++;var D=r;for(e=0;e<=d;e++){var z=e/d*h+g,H=Math.cos(z);z=Math.sin(z);k.x=t*z;k.y=x*w;k.z=t*H;n.push(k.x,k.y,k.z);u.push(0,w,0);f.x=.5*H+.5;f.y=.5*z*w+.5;q.push(f.x,f.y);r++}for(e=0;e<d;e++)f=y+e,k=D+e,!0===c?l.push(k,k+1,f):l.push(k+1,k,f),v+=3;m.addGroup(B,v,!0===c?1:2);B+=v}z.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,
radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var l=[],n=[],u=[],q=[],r=0,t=[],x=c/2,B=0;(function(){var f,k,v=new p,N=new p,y=0,F=(b-a)/c;for(k=0;k<=e;k++){var C=[],D=k/e,z=D*(b-a)+a;for(f=0;f<=d;f++){var H=f/d,I=H*h+g,K=Math.sin(I);I=Math.cos(I);N.x=z*K;N.y=-D*c+x;N.z=z*I;n.push(N.x,N.y,N.z);v.set(K,
F,I).normalize();u.push(v.x,v.y,v.z);q.push(H,1-D);C.push(r++)}t.push(C)}for(f=0;f<d;f++)for(k=0;k<e;k++)v=t[k+1][f],N=t[k+1][f+1],F=t[k][f+1],l.push(t[k][f],v,F),l.push(v,N,F),y+=6;m.addGroup(B,y,0);B+=y})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(l);this.addAttribute("position",new D(n,3));this.addAttribute("normal",new D(u,3));this.addAttribute("uv",new D(q,2))}function Uc(a,b,c,d,e,f,g){wb.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,
heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Vc(a,b,c,d,e,f,g){Za.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Wc(a,b,c,d){L.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new bc(a,b,c,d));this.mergeVertices()}function bc(a,b,c,d){z.call(this);this.type="CircleBufferGeometry";
this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],k,m=new p,l=new C;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var n=0;for(k=3;n<=b;n++,k+=3){var u=c+n/b*d;m.x=a*Math.cos(u);m.y=a*Math.sin(u);f.push(m.x,m.y,m.z);g.push(0,0,1);l.x=(f[k]/a+1)/2;l.y=(f[k+1]/a+1)/2;h.push(l.x,l.y)}for(k=1;k<=b;k++)e.push(k,k+1,0);this.setIndex(e);this.addAttribute("position",new D(f,3));this.addAttribute("normal",
new D(g,3));this.addAttribute("uv",new D(h,2))}function cc(a){O.call(this);this.type="ShadowMaterial";this.color=new H(0);this.opacity=1;this.transparent=this.lights=!0;this.setValues(a)}function dc(a){Da.call(this,a);this.type="RawShaderMaterial"}function Sa(a){O.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new H(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=
new H(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function xb(a){Sa.call(this);
this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function Ja(a){O.call(this);this.type="MeshPhongMaterial";this.color=new H(16777215);this.specular=new H(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new H(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,
1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function yb(a){Ja.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.gradientMap=null;this.setValues(a)}function zb(a){O.call(this);
this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new C(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function Ab(a){O.call(this);this.type="MeshLambertMaterial";this.color=new H(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=
1;this.emissive=new H(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function Bb(a){Y.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function ae(a,b,c){var d=this,e=!1,f=
0,g=0,h=void 0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return h?h(a):a};this.setURLModifier=function(a){h=a;return this}}function Ka(a){this.manager=void 0!==a?a:ra}function df(a){this.manager=
void 0!==a?a:ra;this._parser=null}function be(a){this.manager=void 0!==a?a:ra;this._parser=null}function Xc(a){this.manager=void 0!==a?a:ra}function ce(a){this.manager=void 0!==a?a:ra}function vd(a){this.manager=void 0!==a?a:ra}function K(){this.type="Curve";this.arcLengthDivisions=200}function Aa(a,b,c,d,e,f,g,h){K.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=
h||0}function ec(a,b,c,d,e,f){Aa.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function de(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,k){e=k*(g-e);h=k*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,k,m,l){e=((f-e)/k-(g-e)/(k+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+l)+(h-g)/l)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function da(a,b,c,d){K.call(this);this.type="CatmullRomCurve3";this.points=a||
[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function ef(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function Yc(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function Zc(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function La(a,b,c,d){K.call(this);this.type="CubicBezierCurve";this.v0=a||new C;this.v1=b||new C;this.v2=c||new C;this.v3=d||new C}function Ta(a,b,c,d){K.call(this);this.type="CubicBezierCurve3";
this.v0=a||new p;this.v1=b||new p;this.v2=c||new p;this.v3=d||new p}function ka(a,b){K.call(this);this.type="LineCurve";this.v1=a||new C;this.v2=b||new C}function Ma(a,b){K.call(this);this.type="LineCurve3";this.v1=a||new p;this.v2=b||new p}function Na(a,b,c){K.call(this);this.type="QuadraticBezierCurve";this.v0=a||new C;this.v1=b||new C;this.v2=c||new C}function Ua(a,b,c){K.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new p;this.v1=b||new p;this.v2=c||new p}function Oa(a){K.call(this);
this.type="SplineCurve";this.points=a||[]}function $a(){K.call(this);this.type="CurvePath";this.curves=[];this.autoClose=!1}function Pa(a){$a.call(this);this.type="Path";this.currentPoint=new C;a&&this.setFromPoints(a)}function ib(a){Pa.call(this,a);this.uuid=S.generateUUID();this.type="Shape";this.holes=[]}function ea(a,b){y.call(this);this.type="Light";this.color=new H(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function wd(a,b,c){ea.call(this,a,c);this.type="HemisphereLight";this.castShadow=
void 0;this.position.copy(y.DefaultUp);this.updateMatrix();this.groundColor=new H(b)}function Cb(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new C(512,512);this.map=null;this.matrix=new P}function xd(){Cb.call(this,new na(50,1,.5,500))}function yd(a,b,c,d,e,f){ea.call(this,a,b);this.type="SpotLight";this.position.copy(y.DefaultUp);this.updateMatrix();this.target=new y;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});
this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new xd}function zd(a,b,c,d){ea.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new Cb(new na(90,1,.5,500))}function Ad(){Cb.call(this,new Ib(-5,5,5,-5,.5,500))}function Bd(a,b){ea.call(this,
a,b);this.type="DirectionalLight";this.position.copy(y.DefaultUp);this.updateMatrix();this.target=new y;this.shadow=new Ad}function Cd(a,b){ea.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function Dd(a,b,c,d){ea.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Ed(a,b,c,d){la.call(this,a,b,c,d)}function Fd(a,b,c){la.call(this,a,b,c)}function Ba(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==
d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Gd(a,b,c,d){Ba.call(this,a,b,c,d)}function $c(a,b,c,d){la.call(this,a,b,c,d)}function Hd(a,b,c,d){la.call(this,a,b,c,d)}function fc(a,b,c,d){la.call(this,a,b,c,d)}function Id(a,b,c,d){Ba.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function ad(a,b,c,d){Ba.call(this,a,b,c,d)}function Jd(a,b,c,d){Ba.call(this,a,b,c,d)}function la(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");
if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=W.convertArray(b,this.TimeBufferType);this.values=W.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function gc(a,b,c,d){la.call(this,a,b,c,d)}function wa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=S.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Kd(a){this.manager=
void 0!==a?a:ra;this.textures={}}function ee(a){this.manager=void 0!==a?a:ra}function hc(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}}function fe(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:ra;this.withCredentials=!1}function ff(a){this.manager=void 0!==a?a:ra;this.texturePath=""}function ge(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.manager=void 0!==a?a:ra;this.options=void 0}function he(){this.type="ShapePath";this.subPaths=[];this.currentPath=null}function ie(a){this.type="Font";this.data=a}function gf(a){this.manager=void 0!==a?a:ra}function je(a){this.manager=void 0!==a?a:ra}function hf(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new na;this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;
this.cameraR=new na;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function bd(a,b,c){y.call(this);this.type="CubeCamera";var d=new na(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new p(1,0,0));this.add(d);var e=new na(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new p(-1,0,0));this.add(e);var f=new na(90,1,a,b);f.up.set(0,0,1);f.lookAt(new p(0,1,0));this.add(f);var g=new na(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new p(0,-1,0));this.add(g);var h=new na(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new p(0,0,1));
this.add(h);var k=new na(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new p(0,0,-1));this.add(k);this.renderTarget=new Gb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.renderTarget.texture.name="CubeCamera";this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,m=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=
4;a.render(b,h,c);c.texture.generateMipmaps=m;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)};this.clear=function(a,b,c,d){for(var e=this.renderTarget,f=0;6>f;f++)e.activeCubeFace=f,a.setRenderTarget(e),a.clear(b,c,d);a.setRenderTarget(null)}}function ke(){y.call(this);this.type="AudioListener";this.context=le.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function ic(a){y.call(this);this.type="Audio";this.context=a.context;
this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=!1;this.offset=this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function me(a){ic.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function ne(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);
a.getOutput().connect(this.analyser)}function oe(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function jf(a,b,c){c=c||fa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)}function fa(a,b,c){this.path=b;this.parsedPath=c||fa.parseTrackName(b);
this.node=fa.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function kf(){this.uuid=S.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length},get inUse(){return this.total-d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}
function lf(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=
this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function pe(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Ld(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function qe(){z.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function re(a,b,c,d){this.uuid=S.generateUUID();
this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function jc(a,b){this.uuid=S.generateUUID();this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function se(a,b,c){jc.call(this,a,b);this.meshPerAttribute=c||1}function te(a,b,c){M.call(this,a,b);this.meshPerAttribute=c||1}function mf(a,b,c,d){this.ray=new pb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},
LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function nf(a,b){return a.distance-b.distance}function ue(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)ue(a[d],b,c,!0)}}function of(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function pf(a,
b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function qf(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function ve(a,b){this.min=void 0!==a?a:new C(Infinity,Infinity);this.max=void 0!==b?b:new C(-Infinity,-Infinity)}function cd(a){y.call(this);this.material=a;this.render=function(){}}function dd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&
c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);c=new z;b=new D(6*b,3);c.addAttribute("position",b);U.call(this,c,new Y({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function kc(a,b){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new z;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),
Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new D(b,3));b=new Y({fog:!1});this.cone=new U(a,b);this.add(this.cone);this.update()}function rf(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,rf(a.children[c]));return b}function lc(a){for(var b=rf(a),c=new z,d=[],e=[],f=new H(0,0,1),g=new H(0,1,0),h=0;h<b.length;h++){var k=b[h];k.parent&&k.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.addAttribute("position",
new D(d,3));c.addAttribute("color",new D(e,3));d=new Y({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});U.call(this,c,d);this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1}function mc(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new tb(b,4,2);b=new za({wireframe:!0,fog:!1});ua.call(this,a,b);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function nc(a,b){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=
a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new Y({fog:!1});b=new z;b.addAttribute("position",new M(new Float32Array(15),3));this.line=new qa(b,a);this.add(this.line);this.update()}function oc(a,b,c){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new rb(b);a.rotateY(.5*Math.PI);this.material=new za({wireframe:!0,fog:!1});void 0===this.color&&(this.material.vertexColors=2);b=a.getAttribute("position");b=new Float32Array(3*
b.count);a.addAttribute("color",new M(b,3));this.add(new ua(a,this.material));this.update()}function ed(a,b,c,d){a=a||10;b=b||10;c=new H(void 0!==c?c:4473924);d=new H(void 0!==d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],k=0,m=0,l=-g;k<=b;k++,l+=f){a.push(-g,0,l,g,0,l);a.push(l,0,-g,l,0,g);var n=k===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3}b=new z;b.addAttribute("position",new D(a,3));b.addAttribute("color",new D(h,3));c=new Y({vertexColors:2});
U.call(this,b,c)}function Md(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new H(void 0!==e?e:4473924);f=new H(void 0!==f?f:8947848);var g=[],h=[],k;for(k=0;k<=b;k++){var m=k/b*2*Math.PI;var l=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(l,0,m);var n=k&1?e:f;h.push(n.r,n.g,n.b);h.push(n.r,n.g,n.b)}for(k=0;k<=c;k++){n=k&1?e:f;var p=a-a/c*k;for(b=0;b<d;b++)m=b/d*2*Math.PI,l=Math.sin(m)*p,m=Math.cos(m)*p,g.push(l,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,l=Math.sin(m)*p,m=Math.cos(m)*p,g.push(l,
0,m),h.push(n.r,n.g,n.b)}a=new z;a.addAttribute("position",new D(g,3));a.addAttribute("color",new D(h,3));g=new Y({vertexColors:2});U.call(this,a,g)}function fd(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new z;b=new D(6*b,3);c.addAttribute("position",b);U.call(this,c,new Y({color:a,
linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function pc(a,b,c){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new z;a.addAttribute("position",new D([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new Y({fog:!1});this.lightPlane=new qa(a,b);this.add(this.lightPlane);a=new z;a.addAttribute("position",new D([0,0,0,0,0,1],3));this.targetLine=new qa(a,b);this.add(this.targetLine);this.update()}function gd(a){function b(a,
b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new z,e=new Y({color:16777215,vertexColors:1}),f=[],g=[],h={},k=new H(16755200),m=new H(16711680),l=new H(43775),n=new H(16777215),p=new H(3355443);b("n1","n2",k);b("n2","n4",k);b("n4","n3",k);b("n3","n1",k);b("f1","f2",k);b("f2","f4",k);b("f4","f3",k);b("f3","f1",k);b("n1","f1",k);b("n2","f2",k);b("n3","f3",k);b("n4","f4",k);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",
m);b("u1","u2",l);b("u2","u3",l);b("u3","u1",l);b("c","t",n);b("p","c",p);b("cn1","cn2",p);b("cn3","cn4",p);b("cf1","cf2",p);b("cf3","cf4",p);d.addAttribute("position",new D(f,3));d.addAttribute("color",new D(g,3));U.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function Db(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,
7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new z;d.setIndex(new M(a,1));d.addAttribute("position",new M(c,3));U.call(this,d,new Y({color:b}));this.matrixAutoUpdate=!1;this.update()}function hd(a,b){this.type="Box3Helper";this.box=a;a=void 0!==b?b:16776960;b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new z;c.setIndex(new M(b,1));c.addAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));U.call(this,c,new Y({color:a}));this.geometry.computeBoundingSphere()}
function id(a,b,c){this.type="PlaneHelper";this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new z;b.addAttribute("position",new D([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();qa.call(this,b,new Y({color:a}));b=new z;b.addAttribute("position",new D([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ua(b,new za({color:a,opacity:.2,transparent:!0,depthWrite:!1})))}function Eb(a,b,c,d,e,f){y.call(this);
void 0===d&&(d=16776960);void 0===c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Nd&&(Nd=new z,Nd.addAttribute("position",new D([0,0,0,0,1,0],3)),we=new Za(0,.5,1,5,1),we.translate(0,-.5,0));this.position.copy(b);this.line=new qa(Nd,new Y({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ua(we,new za({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function jd(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,
0,0,0,0,a];a=new z;a.addAttribute("position",new D(b,3));a.addAttribute("color",new D([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new Y({vertexColors:2});U.call(this,a,b)}function sf(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");da.call(this,a);this.type="catmullrom";this.closed=!0}function tf(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");da.call(this,a);this.type="catmullrom"}function xe(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
da.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===
a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();Object.assign(xa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;
var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});var S={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){for(var a=[],b=0;256>b;b++)a[b]=(16>b?"0":"")+b.toString(16).toUpperCase();
return function(){var b=4294967295*Math.random()|0,d=4294967295*Math.random()|0,e=4294967295*Math.random()|0,f=4294967295*Math.random()|0;return a[b&255]+a[b>>8&255]+a[b>>16&255]+a[b>>24&255]+"-"+a[d&255]+a[d>>8&255]+"-"+a[d>>16&15|64]+a[d>>24&255]+"-"+a[e&63|128]+a[e>>8&255]+"-"+a[e>>16&255]+a[e>>24&255]+a[f&255]+a[f>>8&255]+a[f>>16&255]+a[f>>24&255]}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-
b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*S.DEG2RAD},radToDeg:function(a){return a*
S.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}};Object.defineProperties(C.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(C.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=
this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=
a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a=new C,b=new C;return function(c,d){a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||
1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*
a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-
a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,
b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this}});Object.assign(P.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,k,m,l,n,p,q,r,t){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=m;v[10]=l;v[14]=n;v[3]=p;v[7]=q;v[11]=
r;v[15]=t;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new P).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,
b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new p;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;
c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,m=c*h,l=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+m*d;b[5]=a-l*d;b[9]=-c*g;b[2]=l-a*d;b[6]=m+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*
h,k=g*e,m=d*h,l=d*e,b[0]=a+l*c,b[4]=m*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-m,b[6]=l+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,m=d*h,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=m+k*c,b[1]=k+m*c,b[5]=f*h,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,m=c*h,l=c*e,b[0]=g*h,b[4]=m*d-k,b[8]=a*d+l,b[1]=g*e,b[5]=l*d+a,b[9]=k*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=l-a*e,b[8]=m*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+m,b[10]=a-l*
e):"XZY"===a.order&&(a=f*g,k=f*d,m=c*g,l=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+l,b[5]=f*h,b[9]=k*e-m,b[2]=m*e-k,b[6]=c*h,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a._x,d=a._y,e=a._z,f=a._w,g=c+c,h=d+d,k=e+e;a=c*g;var m=c*h;c*=k;var l=d*h;d*=k;e*=k;g*=f;h*=f;f*=k;b[0]=1-(l+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=
0;b[15]=1;return this},lookAt:function(){var a=new p,b=new p,c=new p;return function(d,e,f){var g=this.elements;c.subVectors(d,e);0===c.lengthSq()&&(c.z=1);c.normalize();a.crossVectors(f,c);0===a.lengthSq()&&(1===Math.abs(f.z)?c.x+=1E-4:c.z+=1E-4,c.normalize(),a.crossVectors(f,c));a.normalize();b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],k=c[5],m=c[9],l=c[13],n=c[2],p=c[6],q=c[10],r=c[14],t=c[3],x=c[7],B=c[11];c=c[15];var w=d[0],A=d[4],G=d[8],N=d[12],y=d[1],F=d[5],D=d[9],C=d[13],z=d[2],H=d[6],I=d[10],K=d[14],L=d[3],T=d[7],M=d[11];d=d[15];b[0]=a*w+e*y+f*z+g*L;b[4]=a*A+e*F+f*H+g*T;b[8]=a*G+e*D+f*I+
g*M;b[12]=a*N+e*C+f*K+g*d;b[1]=h*w+k*y+m*z+l*L;b[5]=h*A+k*F+m*H+l*T;b[9]=h*G+k*D+m*I+l*M;b[13]=h*N+k*C+m*K+l*d;b[2]=n*w+p*y+q*z+r*L;b[6]=n*A+p*F+q*H+r*T;b[10]=n*G+p*D+q*I+r*M;b[14]=n*N+p*C+q*K+r*d;b[3]=t*w+x*y+B*z+c*L;b[7]=t*A+x*F+B*H+c*T;b[11]=t*G+x*D+B*I+c*M;b[15]=t*N+x*C+B*K+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a=
new p;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],m=a[2],l=a[6],n=a[10],p=a[14];return a[3]*(+e*h*l-d*k*l-e*g*n+c*k*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*k*n+e*f*n-d*f*p+d*k*m-e*h*m)+a[11]*(+b*k*l-b*g*p-e*f*l+c*f*p+e*g*m-c*k*m)+a[15]*(-d*g*m-b*h*l+b*g*n+d*f*l-c*f*n+c*h*m)},transpose:function(){var a=this.elements;
var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements;a=d[0];var e=d[1],f=d[2],g=d[3],h=d[4],k=d[5],m=d[6],l=d[7],n=d[8],p=d[9],q=d[10],r=d[11],t=d[12],x=d[13],B=d[14];d=d[15];var w=p*B*l-x*q*l+x*m*r-k*B*r-p*m*d+k*q*d,A=t*q*l-n*B*l-t*m*r+h*B*
r+n*m*d-h*q*d,G=n*x*l-t*p*l+t*k*r-h*x*r-n*k*d+h*p*d,N=t*p*m-n*x*m-t*k*q+h*x*q+n*k*B-h*p*B,y=a*w+e*A+f*G+g*N;if(0===y){if(!0===b)throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");return this.identity()}b=1/y;c[0]=w*b;c[1]=(x*q*g-p*B*g-x*f*r+e*B*r+p*f*d-e*q*d)*b;c[2]=(k*B*g-x*m*g+x*f*l-e*B*l-k*f*d+e*m*d)*b;c[3]=(p*m*g-k*q*g-p*f*l+e*q*l+k*f*r-e*m*r)*b;c[4]=A*b;c[5]=(n*B*g-t*q*g+t*f*r-a*
B*r-n*f*d+a*q*d)*b;c[6]=(t*m*g-h*B*g-t*f*l+a*B*l+h*f*d-a*m*d)*b;c[7]=(h*q*g-n*m*g+n*f*l-a*q*l-h*f*r+a*m*r)*b;c[8]=G*b;c[9]=(t*p*g-n*x*g-t*e*r+a*x*r+n*e*d-a*p*d)*b;c[10]=(h*x*g-t*k*g+t*e*l-a*x*l-h*e*d+a*k*d)*b;c[11]=(n*k*g-h*p*g-n*e*l+a*p*l+h*e*r-a*k*r)*b;c[12]=N*b;c[13]=(n*x*f-t*p*f+t*e*q-a*x*q-n*e*B+a*p*B)*b;c[14]=(t*k*f-h*x*f-t*e*m+a*x*m+h*e*B-a*k*B)*b;c[15]=(h*p*f-n*k*f+n*e*m-a*p*m-h*e*q+a*k*q)*b;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=
c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);
this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,
c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new p,b=new P;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.copy(this);c=1/g;f=1/h;var m=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=
f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},
makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);
void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});Object.assign(ca,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var l=e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==l||m!==n){f=1-g;var p=h*d+k*l+m*n+c*e,q=0<=
p?1:-1,r=1-p*p;r>Number.EPSILON&&(r=Math.sqrt(r),p=Math.atan2(r,p*q),f=Math.sin(f*p)/r,g=Math.sin(g*p)/r);q*=g;h=h*f+d*q;k=k*f+l*q;m=m*f+n*q;c=c*f+e*q;f===1-g&&(g=1/Math.sqrt(h*h+k*k+m*m+c*c),h*=g,k*=g,m*=g,c*=g)}a[b]=h;a[b+1]=k;a[b+2]=m;a[b+3]=c}});Object.defineProperties(ca.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=
a;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this.onChangeCallback()}}});Object.assign(ca.prototype,{set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),k=f(d/2);f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);"XYZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"YXZ"===a?(this._x=c*k*f+h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"ZXY"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f-c*d*e):"ZYX"===a?(this._x=c*k*f-h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f+c*d*e):"YZX"===a?(this._x=
c*k*f+h*d*e,this._y=h*d*f+c*k*e,this._z=h*k*e-c*d*f,this._w=h*k*f-c*d*e):"XZY"===a&&(this._x=c*k*f-h*d*e,this._y=h*d*f-c*k*e,this._z=h*k*e+c*d*f,this._w=h*k*f+c*d*e);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6];b=b[10];var m=c+f+b;0<m?
(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a=new p,b;return function(c,d){void 0===a&&(a=new p);b=c.dot(d)+1;1E-6>b?
(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*
this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,
this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this.onChangeCallback();return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=
d,this._z=e,this;a=Math.sqrt(1-g*g);if(.001>Math.abs(a))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var h=Math.atan2(a,g);g=Math.sin((1-b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+
1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(p.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=
a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},
add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a=new ca;return function(b){b&&b.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new ca;return function(b,c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;
a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*
-e+k*-g-m*-f;this.y=k*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-k*-e;return this},project:function(){var a=new P;return function(b){a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a=new P;return function(b){a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+
a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,
this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a=new p,b=new p;return function(c,d){a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},
round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},
length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==
b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new p;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=
new p;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(S.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*
a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromCylindrical:function(a){this.x=a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=
c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this}});Object.assign(ta.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,k){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=
a[8];return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a=new p;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;
b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],k=c[7],m=c[2],l=c[5];c=c[8];var n=d[0],p=d[3],q=d[6],r=d[1],t=d[4],x=d[7],B=d[2],w=d[5];d=d[8];b[0]=a*n+e*r+f*B;b[3]=a*p+e*t+f*w;b[6]=a*q+e*x+f*d;b[1]=g*n+h*r+k*B;b[4]=g*p+h*t+k*w;b[7]=g*q+h*x+k*d;b[2]=m*n+l*r+c*B;b[5]=m*p+l*t+c*w;b[8]=m*q+l*x+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],
d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7];a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");var c=a.elements;a=this.elements;var d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],k=c[5],m=c[6],l=c[7];c=c[8];var n=c*h-k*l,p=k*m-c*g,q=l*g-h*m,r=d*n+e*p+f*q;if(0===r){if(!0===b)throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
return this.identity()}b=1/r;a[0]=n*b;a[1]=(f*l-c*e)*b;a[2]=(k*e-f*h)*b;a[3]=p*b;a[4]=(c*d-f*m)*b;a[5]=(f*g-k*d)*b;a[6]=q*b;a[7]=(e*m-l*d)*b;a[8]=(h*d-e*g)*b;return this},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],k=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*k;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*k;return this},translate:function(a,
b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];
return a}});var xf=0;aa.DEFAULT_IMAGE=void 0;aa.DEFAULT_MAPPING=300;aa.prototype=Object.assign(Object.create(xa.prototype),{constructor:aa,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);
this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},
uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=S.generateUUID());if(!b&&void 0===a.images[d.uuid]){var e=a.images,f=d.uuid,g=d.uuid;if(d instanceof HTMLCanvasElement)var h=d;
else{h=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");h.width=d.width;h.height=d.height;var k=h.getContext("2d");d instanceof ImageData?k.putImageData(d,0,0):k.drawImage(d,0,0,d.width,d.height)}h=2048<h.width||2048<h.height?h.toDataURL("image/jpeg",.6):h.toDataURL("image/png");e[f]={uuid:g,url:h}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.applyMatrix3(this.matrix);
if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}});Object.defineProperty(aa.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(X.prototype,
{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/
a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var k=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-k)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+k)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;
b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+k)/4;b>f&&b>m?.01>b?(k=0,c=h=.707106781):(k=Math.sqrt(b),h=c/k,c=d/k):f>m?.01>f?(k=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),k=c/h,c=g/h):.01>m?(h=k=.707106781,c=0):(c=Math.sqrt(m),k=d/c,h=g/c);this.set(k,h,c,a);return this}a=Math.sqrt((k-g)*(k-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(k-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,
a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new X,b=new X);a.set(c,
c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);
this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,
b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});jb.prototype=Object.assign(Object.create(xa.prototype),{constructor:jb,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();
this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Gb.prototype=Object.create(jb.prototype);Gb.prototype.constructor=Gb;Gb.prototype.isWebGLRenderTargetCube=!0;kb.prototype=Object.create(aa.prototype);kb.prototype.constructor=kb;kb.prototype.isDataTexture=!0;bb.prototype=Object.create(aa.prototype);bb.prototype.constructor=bb;bb.prototype.isCubeTexture=!0;Object.defineProperty(bb.prototype,
"images",{get:function(){return this.image},set:function(a){this.image=a}});var He=new aa,Ie=new bb,Ce=[],Ee=[],Ge=new Float32Array(16),Fe=new Float32Array(9);Me.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id])}};var Qd=/([\w\d_]+)(\])?(\[|\.)?/g;cb.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};cb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};cb.upload=function(a,
b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};cb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,
cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,
dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,
lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,
mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,
seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(H.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===
typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=S.euclideanModulo(b,1);c=S.clamp(c,0,1);d=S.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=
.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/
255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,
e,f)}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=Kg[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},
clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*
c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f;f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=
(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,
this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,
b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});var I={common:{diffuse:{value:new H(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ta},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},
emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new C(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},
directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},
shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new H(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},uvTransform:{value:new ta}}},Ea={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),
e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},R={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",dithering_fragment:"#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",dithering_pars_fragment:"#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}\n",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n"},
qb={basic:{uniforms:Ea.merge([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.fog]),vertexShader:R.meshbasic_vert,fragmentShader:R.meshbasic_frag},lambert:{uniforms:Ea.merge([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.fog,I.lights,{emissive:{value:new H(0)}}]),vertexShader:R.meshlambert_vert,fragmentShader:R.meshlambert_frag},phong:{uniforms:Ea.merge([I.common,I.specularmap,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.gradientmap,
I.fog,I.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30}}]),vertexShader:R.meshphong_vert,fragmentShader:R.meshphong_frag},standard:{uniforms:Ea.merge([I.common,I.envmap,I.aomap,I.lightmap,I.emissivemap,I.bumpmap,I.normalmap,I.displacementmap,I.roughnessmap,I.metalnessmap,I.fog,I.lights,{emissive:{value:new H(0)},roughness:{value:.5},metalness:{value:.5},envMapIntensity:{value:1}}]),vertexShader:R.meshphysical_vert,fragmentShader:R.meshphysical_frag},points:{uniforms:Ea.merge([I.points,
I.fog]),vertexShader:R.points_vert,fragmentShader:R.points_frag},dashed:{uniforms:Ea.merge([I.common,I.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:R.linedashed_vert,fragmentShader:R.linedashed_frag},depth:{uniforms:Ea.merge([I.common,I.displacementmap]),vertexShader:R.depth_vert,fragmentShader:R.depth_frag},normal:{uniforms:Ea.merge([I.common,I.bumpmap,I.normalmap,I.displacementmap,{opacity:{value:1}}]),vertexShader:R.normal_vert,fragmentShader:R.normal_frag},cube:{uniforms:{tCube:{value:null},
tFlip:{value:-1},opacity:{value:1}},vertexShader:R.cube_vert,fragmentShader:R.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:R.equirect_vert,fragmentShader:R.equirect_frag},distanceRGBA:{uniforms:Ea.merge([I.common,I.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:R.distanceRGBA_vert,fragmentShader:R.distanceRGBA_frag},shadow:{uniforms:Ea.merge([I.lights,I.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:R.shadow_vert,
fragmentShader:R.shadow_frag}};qb.physical={uniforms:Ea.merge([qb.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:R.meshphysical_vert,fragmentShader:R.meshphysical_frag};qc.prototype=Object.create(aa.prototype);qc.prototype.constructor=qc;var Yf=0;O.prototype=Object.assign(Object.create(xa.prototype),{constructor:O,isMaterial:!0,onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+
b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=
void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);
this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&
this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);
this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&
(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0!==this.rotation&&(d.rotation=this.rotation);
1!==this.linewidth&&(d.linewidth=this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&
(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;
this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=
a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.userData=JSON.parse(JSON.stringify(a.userData));this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=
b[e].clone()}this.clippingPlanes=c;this.shadowSide=a.shadowSide;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});db.prototype=Object.create(O.prototype);db.prototype.constructor=db;db.prototype.isMeshDepthMaterial=!0;db.prototype.copy=function(a){O.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;
this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};eb.prototype=Object.create(O.prototype);eb.prototype.constructor=eb;eb.prototype.isMeshDistanceMaterial=!0;eb.prototype.copy=function(a){O.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this};Object.assign(Va.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var m=a[h],l=a[h+1],n=a[h+2];m<b&&(b=m);l<c&&(c=l);n<d&&(d=n);m>e&&(e=m);l>f&&(f=l);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);
return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.count;h<k;h++){var m=a.getX(h),l=a.getY(h),n=a.getZ(h);m<b&&(b=m);l<c&&(c=l);n<d&&(d=n);m>e&&(e=m);l>f&&(f=l);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new p;return function(b,c){c=a.copy(c).multiplyScalar(.5);
this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=
a||new p;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new p;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(){function a(a){var f=a.geometry;if(void 0!==f)if(f.isGeometry)for(f=
f.vertices,c=0,d=f.length;c<d;c++)e.copy(f[c]),e.applyMatrix4(a.matrixWorld),b.expandByPoint(e);else if(f.isBufferGeometry&&(f=f.attributes.position,void 0!==f))for(c=0,d=f.count;c<d;c++)e.fromBufferAttribute(f,c).applyMatrix4(a.matrixWorld),b.expandByPoint(e)}var b,c,d,e=new p;return function(c){b=this;c.updateMatrixWorld(!0);c.traverse(a);return this}}(),containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=
a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new p).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a=new p;return function(b){this.clampPoint(b.center,
a);return a.distanceToSquared(b.center)<=b.radius*b.radius}}(),intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},intersectsTriangle:function(){function a(a){var e;
var f=0;for(e=a.length-3;f<=e;f+=3){h.fromArray(a,f);var g=m.x*Math.abs(h.x)+m.y*Math.abs(h.y)+m.z*Math.abs(h.z),k=b.dot(h),n=c.dot(h),l=d.dot(h);if(Math.max(-Math.max(k,n,l),Math.min(k,n,l))>g)return!1}return!0}var b=new p,c=new p,d=new p,e=new p,f=new p,g=new p,h=new p,k=new p,m=new p,l=new p;return function(h){if(this.isEmpty())return!1;this.getCenter(k);m.subVectors(this.max,k);b.subVectors(h.a,k);c.subVectors(h.b,k);d.subVectors(h.c,k);e.subVectors(c,b);f.subVectors(d,c);g.subVectors(b,d);h=
[0,-e.z,e.y,0,-f.z,f.y,0,-g.z,g.y,e.z,0,-e.x,f.z,0,-f.x,g.z,0,-g.x,-e.y,e.x,0,-f.y,f.x,0,-g.y,g.x,0];if(!a(h))return!1;h=[1,0,0,0,1,0,0,0,1];if(!a(h))return!1;l.crossVectors(e,f);h=[l.x,l.y,l.z];return a(h)}}(),clampPoint:function(a,b){return(b||new p).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new p;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new p;return function(b){b=b||new Ca;this.getCenter(b.center);
b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new p,new p,new p,new p,new p,new p,new p,new p];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,
this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});
Object.assign(Ca.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new Va;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=c=0,f=b.length;e<f;e++)c=Math.max(c,d.distanceToSquared(b[e]));this.radius=Math.sqrt(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},
containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);b=b||new p;b.copy(a);
c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){a=a||new Va;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});Object.assign(pa.prototype,{set:function(a,
b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new p,b=new p;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);
this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return(b||new p).copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(){var a=
new p;return function(b,c){c=c||new p;var d=b.delta(a),e=this.normal.dot(d);if(0===e){if(0===this.distanceToPoint(b.start))return c.copy(b.start)}else if(e=-(b.start.dot(this.normal)+this.constant)/e,!(0>e||1<e))return c.copy(d).multiplyScalar(e).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},
coplanarPoint:function(a){return(a||new p).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new p,b=new ta;return function(c,d){d=d||b.getNormalMatrix(c);c=this.coplanarPoint(a).applyMatrix4(c);d=this.normal.applyMatrix3(d).normalize();this.constant=-c.dot(d);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});Object.assign(ld.prototype,{set:function(a,
b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],m=c[7],l=c[8],n=c[9],p=c[10],q=c[11],r=c[12],t=c[13],x=c[14];c=c[15];b[0].setComponents(f-a,m-g,q-l,c-r).normalize();b[1].setComponents(f+
a,m+g,q+l,c+r).normalize();b[2].setComponents(f+d,m+h,q+n,c+t).normalize();b[3].setComponents(f-d,m-h,q-n,c-t).normalize();b[4].setComponents(f-e,m-k,q-p,c-x).normalize();b[5].setComponents(f+e,m+k,q+p,c+x).normalize();return this},intersectsObject:function(){var a=new Ca;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Ca;return function(b){a.center.set(0,
0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new p,b=new p;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:
c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a);f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});fb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");fb.DefaultOrder="XYZ";Object.defineProperties(fb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},
z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this.onChangeCallback()}}});Object.assign(fb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;
this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=S.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],m=e[9],l=e[2],n=e[6];e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-l,a),this._z=0)):"ZXY"===b?(this._x=
Math.asin(d(n,-1,1)),.99999>Math.abs(n)?(this._y=Math.atan2(-l,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-m,k),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(n,
k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a=new P;return function(b,c,d){a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new ca;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,
b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new p(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){}});Object.assign(Sd.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},test:function(a){return 0!==(this.mask&a.mask)}});var $f=0;y.DefaultUp=new p(0,1,0);y.DefaultMatrixAutoUpdate=!0;y.prototype=Object.assign(Object.create(xa.prototype),{constructor:y,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix:function(a){this.matrix.multiplyMatrices(a,
this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new ca;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateOnWorldAxis:function(){var a=new ca;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.premultiply(a);return this}}(),rotateX:function(){var a=new p(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new p(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new p(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new p;return function(b,
c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new p(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new p(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new p(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new P;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new P,b=new p;return function(c,d,e){c.isVector3?b.copy(c):b.set(c,d,e);this.isCamera?a.lookAt(this.position,b,this.up):a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=
this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1));return this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",
a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new p;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new p,b=new p;return function(c){c=c||new ca;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new ca;return function(b){b=
b||new fb;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new p,b=new ca;return function(c){c=c||new p;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new ca;return function(b){b=b||new p;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},
traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;
f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.matrix=this.matrix.toArray();if(void 0!==this.geometry){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=0,k=g.length;h<k;h++)b(a.shapes,g[h]);else b(a.shapes,g)}if(void 0!==
this.material)if(Array.isArray(this.material)){g=[];h=0;for(k=this.material.length;h<k;h++)g.push(b(a.materials,this.material[h]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);if(d){d=c(a.geometries);h=c(a.materials);k=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);0<h.length&&(e.materials=h);0<k.length&&(e.textures=k);0<m.length&&(e.images=
m);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=
a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});Qa.prototype=Object.assign(Object.create(y.prototype),{constructor:Qa,isCamera:!0,copy:function(a,b){y.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this},getWorldDirection:function(){var a=
new ca;return function(b){b=b||new p;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}(),updateMatrixWorld:function(a){y.prototype.updateMatrixWorld.call(this,a);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});Ib.prototype=Object.assign(Object.create(Qa.prototype),{constructor:Ib,isOrthographicCamera:!0,copy:function(a,b){Qa.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=
a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=
!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;if(null!==this.view&&this.view.enabled){c=this.zoom/(this.view.width/this.view.fullWidth);b=this.zoom/(this.view.height/this.view.fullHeight);var f=(this.right-this.left)/this.view.width;d=(this.top-this.bottom)/this.view.height;e+=this.view.offsetX/c*f;c=e+this.view.width/
c*f;a-=this.view.offsetY/b*d;b=a-this.view.height/b*d}this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far)},toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});Object.assign(Wa.prototype,{clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var ag=0;L.prototype=Object.assign(Object.create(xa.prototype),{constructor:L,isGeometry:!0,applyMatrix:function(a){for(var b=(new ta).getNormalMatrix(a),c=0,d=this.vertices.length;c<
d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a=new P;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=
new P;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new P;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new P;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new P;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new y;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),
fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[l[a].clone(),l[b].clone(),l[d].clone()]:[],p=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new Wa(a,b,d,f,p,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([n[a].clone(),n[b].clone(),n[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([u[a].clone(),u[b].clone(),u[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:
void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var l=[],n=[],u=[],q=e=0;e<f.length;e+=3,q+=2)c.vertices.push(new p(f[e],f[e+1],f[e+2])),void 0!==g&&l.push(new p(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new H(h[e],h[e+1],h[e+2])),void 0!==k&&n.push(new C(k[q],k[q+1])),void 0!==m&&u.push(new C(m[q],m[q+1]));var r=a.groups;if(0<r.length)for(e=0;e<r.length;e++){f=r[e];var t=f.start,x=
f.count;q=t;for(t+=x;q<t;q+=3)void 0!==d?b(d[q],d[q+1],d[q+2],f.materialIndex):b(q,q+1,q+2,f.materialIndex)}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,
a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new P;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new p,b=new p,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new p;if(a){var e=new p,f=new p;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var k=this.vertices[b.c];e.subVectors(k,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=
this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),
d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):
d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new L;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new p;var k={a:new p,b:new p,c:new p};d.push(h);g.push(k)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();
f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(d.normal),k.a.copy(d.vertexNormals[0]),k.b.copy(d.vertexNormals[1]),k.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Va);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new Ca);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,m=this.faceVertexUvs[0],l=a.faceVertexUvs[0],n=this.colors,p=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new ta).getNormalMatrix(b));a=0;for(var q=g.length;a<q;a++){var r=g[a].clone();void 0!==b&&r.applyMatrix4(b);f.push(r)}a=0;for(q=p.length;a<q;a++)n.push(p[a].clone());a=0;for(q=
k.length;a<q;a++){g=k[a];var t=g.vertexNormals;p=g.vertexColors;n=new Wa(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=t.length;b<f;b++)r=t[b].clone(),void 0!==d&&r.applyMatrix3(d).normalize(),n.vertexNormals.push(r);n.color.copy(g.color);b=0;for(f=p.length;b<f;b++)r=p[b],n.vertexColors.push(r.clone());n.materialIndex=g.materialIndex+c;h.push(n)}a=0;for(q=l.length;a<q;a++)if(c=l[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());
m.push(d)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?
(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=b;return f},setFromPoints:function(a){this.vertices=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];
this.vertices.push(new p(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=
a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=k.length/3;k.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==n[b])return n[b];n[b]=l.length;l.push(a.getHex());return n[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==q[b])return q[b];q[b]=p.length/2;p.push(a.x,a.y);return q[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&
(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}h=[];var k=[],m={},l=[],n={},p=[],q={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],t=void 0!==this.faceVertexUvs[0][g],x=0<r.normal.length(),B=0<r.vertexNormals.length,w=1!==r.color.r||1!==r.color.g||1!==r.color.b,A=0<r.vertexColors.length,G=0;G=a(G,0,0);G=a(G,1,!0);G=a(G,2,!1);G=a(G,3,t);
G=a(G,4,x);G=a(G,5,B);G=a(G,6,w);G=a(G,7,A);h.push(G);h.push(r.a,r.b,r.c);h.push(r.materialIndex);t&&(t=this.faceVertexUvs[0][g],h.push(d(t[0]),d(t[1]),d(t[2])));x&&h.push(b(r.normal));B&&(x=r.vertexNormals,h.push(b(x[0]),b(x[1]),b(x[2])));w&&h.push(c(r.color));A&&(r=r.vertexColors,h.push(c(r[0]),c(r[1]),c(r[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<l.length&&(e.data.colors=l);0<p.length&&(e.data.uvs=[p]);e.data.faces=h;return e},clone:function(){return(new L).copy(this)},copy:function(a){var b,
c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<b;f++){var g=
a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],k=[];var m=0;for(d=h.length;m<d;m++)k.push(h[m].clone());this.faceVertexUvs[f].push(k)}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++)d.vertices.push(m[f].vertices[e].clone());if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++)d.normals.push(m[f].normals[e].clone());
this.morphTargets.push(d)}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++)g=m[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++)d.faceNormals.push(m[f].faceNormals[e].clone());this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());
e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=
a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(M.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(M.prototype,{isBufferAttribute:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},
copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",
d),f=new H);b[c++]=f.r;b[c++]=f.g;b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new C);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=
a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new p);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new X);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)}});rc.prototype=Object.create(M.prototype);rc.prototype.constructor=rc;sc.prototype=Object.create(M.prototype);
sc.prototype.constructor=sc;tc.prototype=Object.create(M.prototype);tc.prototype.constructor=tc;uc.prototype=Object.create(M.prototype);uc.prototype.constructor=uc;lb.prototype=Object.create(M.prototype);lb.prototype.constructor=lb;vc.prototype=Object.create(M.prototype);vc.prototype.constructor=vc;mb.prototype=Object.create(M.prototype);mb.prototype.constructor=mb;D.prototype=Object.create(M.prototype);D.prototype.constructor=D;wc.prototype=Object.create(M.prototype);wc.prototype.constructor=wc;
Object.assign(Pe.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var k=[];for(var m=0;m<h;m++)k[m]=[];this.morphTargets.position=
k}var l=a.morphNormals,n=l.length;if(0<n){var p=[];for(m=0;m<n;m++)p[m]=[];this.morphTargets.normal=p}var q=a.skinIndices,r=a.skinWeights,t=q.length===c.length,x=r.length===c.length;for(m=0;m<b.length;m++){var B=b[m];this.vertices.push(c[B.a],c[B.b],c[B.c]);var w=B.vertexNormals;3===w.length?this.normals.push(w[0],w[1],w[2]):(w=B.normal,this.normals.push(w,w,w));w=B.vertexColors;3===w.length?this.colors.push(w[0],w[1],w[2]):(w=B.color,this.colors.push(w,w,w));!0===e&&(w=d[0][m],void 0!==w?this.uvs.push(w[0],
w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new C,new C,new C)));!0===f&&(w=d[1][m],void 0!==w?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new C,new C,new C)));for(w=0;w<h;w++){var A=g[w].vertices;k[w].push(A[B.a],A[B.b],A[B.c])}for(w=0;w<n;w++)A=l[w].vertexNormals[m],p[w].push(A.a,A.b,A.c);t&&this.skinIndices.push(q[B.a],q[B.b],q[B.c]);x&&this.skinWeights.push(r[B.a],
r[B.b],r[B.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var bg=1;z.prototype=Object.assign(Object.create(xa.prototype),{constructor:z,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<Td(a)?mb:lb)(a,1):this.index=a},addAttribute:function(a,
b,c){if(b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute)if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this;else console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new M(b,c))},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,
count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new ta).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(){var a=
new P;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new P;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new P;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new P;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new P;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),
lookAt:function(){var a=new y;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new D(3*b.vertices.length,3);var c=new D(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&
b.lineDistances.length===b.vertices.length&&(a=new D(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,e.y,e.z||0)}this.addAttribute("position",new D(b,3));return this},updateFromObject:function(a){var b=
a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,
void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&
(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Pe).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new M(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&
(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new M(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new M(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new M(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new M(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<
Td(a.indices)?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex((new M(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new D(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new D(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new D(4*a.skinWeights.length,4),this.addAttribute("skinWeight",
c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Va);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
this)},computeBoundingSphere:function(){var a=new Va,b=new p;return function(){null===this.boundingSphere&&(this.boundingSphere=new Ca);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new M(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;e=b.normal.array;var h=new p,k=new p,m=new p,l=new p,n=new p;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var u=0,q=c.length;u<q;++u){f=c[u];g=f.start;var r=f.count;f=g;for(g+=r;f<
g;f+=3){r=3*a[f+0];var t=3*a[f+1];var x=3*a[f+2];h.fromArray(d,r);k.fromArray(d,t);m.fromArray(d,x);l.subVectors(m,k);n.subVectors(h,k);l.cross(n);e[r]+=l.x;e[r+1]+=l.y;e[r+2]+=l.z;e[t]+=l.x;e[t+1]+=l.y;e[t+2]+=l.z;e[x]+=l.x;e[x+1]+=l.y;e[x+2]+=l.z}}}else for(f=0,g=d.length;f<g;f+=9)h.fromArray(d,f),k.fromArray(d,f+3),m.fromArray(d,f+6),l.subVectors(m,k),n.subVectors(h,k),l.cross(n),e[f]=l.x,e[f+1]=l.y,e[f+2]=l.z,e[f+3]=l.x,e[f+4]=l.y,e[f+5]=l.z,e[f+6]=l.x,e[f+7]=l.y,e[f+8]=l.z;this.normalizeNormals();
b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=0;for(f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){var a=new p;return function(){for(var b=this.attributes.normal,c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),
a.z=b.getZ(c),a.normalize(),b.setXYZ(c,a.x,a.y,a.z)}}(),toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new z,b=this.index.array,c=this.attributes,d;for(d in c){var e=c[d],f=e.array;e=e.itemSize;for(var g=new f.constructor(b.length*e),h,k=0,m=0,l=b.length;m<l;m++){h=b[m]*e;for(var n=0;n<e;n++)g[k++]=f[h++]}a.addAttribute(d,new M(g,e))}return a},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",
generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters;for(e in b)void 0!==b[e]&&(a[e]=b[e]);return a}a.data={attributes:{}};var c=this.index;null!==c&&(b=Array.prototype.slice.call(c.array),a.data.index={type:c.array.constructor.name,array:b});c=this.attributes;for(e in c){var d=c[e];b=Array.prototype.slice.call(d.array);a.data.attributes[e]={itemSize:d.itemSize,type:d.array.constructor.name,array:b,
normalized:d.normalized}}var e=this.groups;0<e.length&&(a.data.groups=JSON.parse(JSON.stringify(e)));e=this.boundingSphere;null!==e&&(a.data.boundingSphere={center:e.center.toArray(),radius:e.radius});return a},clone:function(){return(new z).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.addAttribute(g,
c[g].clone());var d=a.morphAttributes;for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e}var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
Jb.prototype=Object.create(L.prototype);Jb.prototype.constructor=Jb;nb.prototype=Object.create(z.prototype);nb.prototype.constructor=nb;xc.prototype=Object.create(L.prototype);xc.prototype.constructor=xc;ob.prototype=Object.create(z.prototype);ob.prototype.constructor=ob;za.prototype=Object.create(O.prototype);za.prototype.constructor=za;za.prototype.isMeshBasicMaterial=!0;za.prototype.copy=function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;
this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};Da.prototype=
Object.create(O.prototype);Da.prototype.constructor=Da;Da.prototype.isShaderMaterial=!0;Da.prototype.copy=function(a){O.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Ea.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=
a.extensions;return this};Da.prototype.toJSON=function(a){a=O.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};Object.assign(pb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new p).copy(this.direction).multiplyScalar(a).add(this.origin)},
lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(){var a=new p;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){b=b||new p;b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new p;return function(b){var c=
a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new p,b=new p,c=new p;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),m=c.dot(this.direction),l=-c.dot(b),n=c.lengthSq(),p=Math.abs(1-k*k);if(0<p){d=k*l-m;e=k*
m-l;var q=h*p;0<=d?e>=-q?e<=q?(h=1/p,d*=h,e*=h,k=d*(d+k*e+2*m)+e*(k*d+e+2*l)+n):(e=h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):(e=-h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n):e<=-q?(d=Math.max(0,-(-k*h+m)),e=0<d?-h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+n):e<=q?(d=0,e=Math.min(Math.max(-h,-l),h),k=e*(e+2*l)+n):(d=Math.max(0,-(k*h+m)),e=0<d?h:Math.min(Math.max(-h,-l),h),k=-d*d+e*(e+2*l)+n)}else e=0<k?-h:h,d=Math.max(0,-(k*e+m)),k=-d*d+e*(e+2*l)+n;f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);
g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),intersectSphere:function(){var a=new p;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d;b=b.radius*b.radius;if(e>b)return null;b=Math.sqrt(b-e);e=d-b;d+=b;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-
f.y)*d;d*=a.max.y-f.y}else h=(a.max.y-f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(){var a=new p;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new p,b=new p,c=new p,d=new p;return function(e,f,g,h,k){b.subVectors(f,
e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});
Object.assign(Kb.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new p).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new p).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},
at:function(a,b){b=b||new p;return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new p,b=new p;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);c=b.dot(b);c=b.dot(a)/c;d&&(c=S.clamp(c,0,1));return c}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new p;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);
return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});Object.assign(Xa,{normal:function(){var a=new p;return function(b,c,d,e){e=e||new p;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}(),barycoordFromPoint:function(){var a=new p,b=new p,c=new p;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var m=
d*k-e*e;h=h||new p;if(0===m)return h.set(-2,-1,-1);m=1/m;k=(k*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-k-d,d,k)}}(),containsPoint:function(){var a=new p;return function(b,c,d,e){b=Xa.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}()});Object.assign(Xa.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new p,b=new p;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new p).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Xa.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new pa).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Xa.barycoordFromPoint(a,
this.a,this.b,this.c,b)},containsPoint:function(a){return Xa.containsPoint(a,this.a,this.b,this.c)},intersectsBox:function(a){return a.intersectsTriangle(this)},closestPointToPoint:function(){var a=new pa,b=[new Kb,new Kb,new Kb],c=new p,d=new p;return function(e,f){f=f||new p;var g=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))f.copy(c);else for(b[0].set(this.a,this.b),b[1].set(this.b,this.c),b[2].set(this.c,this.a),e=0;e<b.length;e++){b[e].closestPointToPoint(c,
!0,d);var h=c.distanceToSquared(d);h<g&&(g=h,f.copy(d))}return f}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});ua.prototype=Object.assign(Object.create(y.prototype),{constructor:ua,isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){y.prototype.copy.call(this,a);this.drawMode=a.drawMode;void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=
Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else if(c=a.morphTargets,void 0!==c&&0<c.length)for(this.morphTargetInfluences=[],this.morphTargetDictionary=
{},a=0,b=c.length;a<b;a++)d=c[a].name||String(a),this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a},raycast:function(){function a(a,b,c,d,e,f,g){Xa.barycoordFromPoint(a,b,c,d,t);e.multiplyScalar(t.x);f.multiplyScalar(t.y);g.multiplyScalar(t.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;B.copy(h);B.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(B);return b<
c.near||b>c.far?null:{distance:b,point:B.clone(),object:a}}function c(c,d,e,f,m,l,n,p){g.fromBufferAttribute(f,l);h.fromBufferAttribute(f,n);k.fromBufferAttribute(f,p);if(c=b(c,c.material,d,e,g,h,k,x))m&&(u.fromBufferAttribute(m,l),q.fromBufferAttribute(m,n),r.fromBufferAttribute(m,p),c.uv=a(x,g,h,k,u,q,r)),c.face=new Wa(l,n,p,Xa.normal(g,h,k)),c.faceIndex=l;return c}var d=new P,e=new pb,f=new Ca,g=new p,h=new p,k=new p,m=new p,l=new p,n=new p,u=new C,q=new C,r=new C,t=new p,x=new p,B=new p;return function(p,
v){var t=this.geometry,w=this.material,B=this.matrixWorld;if(void 0!==w&&(null===t.boundingSphere&&t.computeBoundingSphere(),f.copy(t.boundingSphere),f.applyMatrix4(B),!1!==p.ray.intersectsSphere(f)&&(d.getInverse(B),e.copy(p.ray).applyMatrix4(d),null===t.boundingBox||!1!==e.intersectsBox(t.boundingBox)))){var A;if(t.isBufferGeometry){w=t.index;var y=t.attributes.position;B=t.attributes.uv;var D;if(null!==w){var C=0;for(D=w.count;C<D;C+=3){t=w.getX(C);var z=w.getX(C+1);var H=w.getX(C+2);if(A=c(this,
p,e,y,B,t,z,H))A.faceIndex=Math.floor(C/3),v.push(A)}}else if(void 0!==y)for(C=0,D=y.count;C<D;C+=3)if(t=C,z=C+1,H=C+2,A=c(this,p,e,y,B,t,z,H))A.index=t,v.push(A)}else if(t.isGeometry){B=Array.isArray(w);C=t.vertices;D=t.faces;z=t.faceVertexUvs[0];0<z.length&&(y=z);for(var I=0,K=D.length;I<K;I++){var L=D[I];A=B?w[L.materialIndex]:w;if(void 0!==A){z=C[L.a];H=C[L.b];var M=C[L.c];if(!0===A.morphTargets){var O=t.morphTargets,P=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var S=
0,R=O.length;S<R;S++){var Y=P[S];if(0!==Y){var W=O[S].vertices;g.addScaledVector(m.subVectors(W[L.a],z),Y);h.addScaledVector(l.subVectors(W[L.b],H),Y);k.addScaledVector(n.subVectors(W[L.c],M),Y)}}g.add(z);h.add(H);k.add(M);z=g;H=h;M=k}if(A=b(this,A,p,e,z,H,M,x))y&&y[I]&&(O=y[I],u.copy(O[0]),q.copy(O[1]),r.copy(O[2]),A.uv=a(x,z,H,M,u,q,r)),A.face=L,A.faceIndex=I,v.push(A)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var tg=0;na.prototype=Object.assign(Object.create(Qa.prototype),
{constructor:na,isPerspectiveCamera:!0,copy:function(a,b){Qa.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*S.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*S.DEG2RAD*this.fov);
return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*S.RAD2DEG*Math.atan(Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=
c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*S.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());
this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});od.prototype=Object.assign(Object.create(na.prototype),{constructor:od,isArrayCamera:!0});var Dg=
0;Mb.prototype.isFogExp2=!0;Mb.prototype.clone=function(){return new Mb(this.color.getHex(),this.density)};Mb.prototype.toJSON=function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}};Nb.prototype.isFog=!0;Nb.prototype.clone=function(){return new Nb(this.color.getHex(),this.near,this.far)};Nb.prototype.toJSON=function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};pd.prototype=Object.assign(Object.create(y.prototype),{constructor:pd,copy:function(a,
b){y.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=y.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b}});gb.prototype=Object.create(O.prototype);
gb.prototype.constructor=gb;gb.prototype.isSpriteMaterial=!0;gb.prototype.copy=function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};zc.prototype=Object.assign(Object.create(y.prototype),{constructor:zc,isSprite:!0,raycast:function(){var a=new p,b=new p,c=new p;return function(d,e){b.setFromMatrixPosition(this.matrixWorld);d.ray.closestPointToPoint(b,a);c.setFromMatrixScale(this.matrixWorld);var f=c.x*c.y/4;b.distanceToSquared(a)>f||
(f=d.ray.origin.distanceTo(a),f<d.near||f>d.far||e.push({distance:f,point:a.clone(),face:null,object:this}))}}(),clone:function(){return(new this.constructor(this.material)).copy(this)},copy:function(a){y.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});Ac.prototype=Object.assign(Object.create(y.prototype),{constructor:Ac,copy:function(a){y.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},
addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new p;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new p,b=new p;return function(c){var d=
this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});
Object.assign(Bc.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new P;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):
a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new P,b=new P;return function(){for(var c=this.bones,d=this.boneInverses,e=this.boneMatrices,f=this.boneTexture,g=0,h=c.length;g<h;g++)a.multiplyMatrices(c[g]?c[g].matrixWorld:b,d[g]),a.toArray(e,16*g);void 0!==f&&(f.needsUpdate=!0)}}(),clone:function(){return new Bc(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===
a)return d}}});qd.prototype=Object.assign(Object.create(y.prototype),{constructor:qd,isBone:!0});rd.prototype=Object.assign(Object.create(ua.prototype),{constructor:rd,isSkinnedMesh:!0,initBones:function(){var a=[],b;if(this.geometry&&void 0!==this.geometry.bones){var c=0;for(b=this.geometry.bones.length;c<b;c++){var d=this.geometry.bones[c];var e=new qd;a.push(e);e.name=d.name;e.position.fromArray(d.pos);e.quaternion.fromArray(d.rotq);void 0!==d.scl&&e.scale.fromArray(d.scl)}c=0;for(b=this.geometry.bones.length;c<
b;c++)d=this.geometry.bones[c],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[c]):this.add(a[c])}this.updateMatrixWorld(!0);return a},bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){var a;if(this.geometry&&this.geometry.isGeometry)for(a=0;a<this.geometry.skinWeights.length;a++){var b=
this.geometry.skinWeights[a];var c=1/b.manhattanLength();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry){b=new X;var d=this.geometry.attributes.skinWeight;for(a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.manhattanLength(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)}},updateMatrixWorld:function(a){ua.prototype.updateMatrixWorld.call(this,a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):
"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Y.prototype=Object.create(O.prototype);Y.prototype.constructor=Y;Y.prototype.isLineBasicMaterial=!0;Y.prototype.copy=function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this};
qa.prototype=Object.assign(Object.create(y.prototype),{constructor:qa,isLine:!0,computeLineDistances:function(){var a=new p,b=new p;return function(){var c=this.geometry;if(c.isBufferGeometry)if(null===c.index){for(var d=c.attributes.position,e=[0],f=1,g=d.count;f<g;f++)a.fromBufferAttribute(d,f-1),b.fromBufferAttribute(d,f),e[f]=e[f-1],e[f]+=a.distanceTo(b);c.addAttribute("lineDistance",new THREE.Float32BufferAttribute(e,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
else if(c.isGeometry)for(d=c.vertices,e=c.lineDistances,e[0]=0,f=1,g=d.length;f<g;f++)e[f]=e[f-1],e[f]+=d[f-1].distanceTo(d[f]);return this}}(),raycast:function(){var a=new P,b=new pb,c=new Ca;return function(d,e){var f=d.linePrecision;f*=f;var g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new p,m=new p;h=new p;var l=new p,n=this&&
this.isLineSegments?2:1;if(g.isBufferGeometry){var u=g.index,q=g.attributes.position.array;if(null!==u){u=u.array;g=0;for(var r=u.length-1;g<r;g+=n){var t=u[g+1];k.fromArray(q,3*u[g]);m.fromArray(q,3*t);t=b.distanceSqToSegment(k,m,l,h);t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}else for(g=0,r=q.length/3-1;g<r;g+=n)k.fromArray(q,3*g),m.fromArray(q,
3*g+3),t=b.distanceSqToSegment(k,m,l,h),t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(k=g.vertices,m=k.length,g=0;g<m-1;g+=n)t=b.distanceSqToSegment(k[g],k[g+1],l,h),t>f||(l.applyMatrix4(this.matrixWorld),t=d.ray.origin.distanceTo(l),t<d.near||t>d.far||e.push({distance:t,point:h.clone().applyMatrix4(this.matrixWorld),index:g,
face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});U.prototype=Object.assign(Object.create(qa.prototype),{constructor:U,isLineSegments:!0,computeLineDistances:function(){var a=new p,b=new p;return function(){var c=this.geometry;if(c.isBufferGeometry)if(null===c.index){for(var d=c.attributes.position,e=[],f=0,g=d.count;f<g;f+=2)a.fromBufferAttribute(d,f),b.fromBufferAttribute(d,f+1),e[f]=0===f?0:e[f-1],e[f+1]=e[f]+a.distanceTo(b);
c.addAttribute("lineDistance",new THREE.Float32BufferAttribute(e,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(c.isGeometry)for(d=c.vertices,e=c.lineDistances,f=0,g=d.length;f<g;f+=2)a.copy(d[f]),b.copy(d[f+1]),e[f]=0===f?0:e[f-1],e[f+1]=e[f]+a.distanceTo(b);return this}}()});sd.prototype=Object.assign(Object.create(qa.prototype),{constructor:sd,isLineLoop:!0});Ha.prototype=Object.create(O.prototype);Ha.prototype.constructor=
Ha;Ha.prototype.isPointsMaterial=!0;Ha.prototype.copy=function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Ob.prototype=Object.assign(Object.create(y.prototype),{constructor:Ob,isPoints:!0,raycast:function(){var a=new P,b=new pb,c=new Ca;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<l){a=b.closestPointToPoint(a);a.applyMatrix4(k);var h=d.ray.origin.distanceTo(a);h<d.near||h>d.far||
e.push({distance:h,distanceToRay:Math.sqrt(f),point:a.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,k=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);c.radius+=m;if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);m/=(this.scale.x+this.scale.y+this.scale.z)/3;var l=m*m;m=new p;if(h.isBufferGeometry){var n=h.index;h=h.attributes.position.array;if(null!==n){var u=
n.array;n=0;for(var q=u.length;n<q;n++){var r=u[n];m.fromArray(h,3*r);f(m,r)}}else for(n=0,u=h.length/3;n<u;n++)m.fromArray(h,3*n),f(m,n)}else for(m=h.vertices,n=0,u=m.length;n<u;n++)f(m[n],n)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});td.prototype=Object.assign(Object.create(y.prototype),{constructor:td,isGroup:!0});Yd.prototype=Object.assign(Object.create(aa.prototype),{constructor:Yd,isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=
a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Pb.prototype=Object.create(aa.prototype);Pb.prototype.constructor=Pb;Pb.prototype.isCompressedTexture=!0;Cc.prototype=Object.create(aa.prototype);Cc.prototype.constructor=Cc;Cc.prototype.isDepthTexture=!0;Qb.prototype=Object.create(z.prototype);Qb.prototype.constructor=Qb;Dc.prototype=Object.create(L.prototype);Dc.prototype.constructor=Dc;Rb.prototype=Object.create(z.prototype);Rb.prototype.constructor=Rb;Ec.prototype=Object.create(L.prototype);Ec.prototype.constructor=
Ec;va.prototype=Object.create(z.prototype);va.prototype.constructor=va;Fc.prototype=Object.create(L.prototype);Fc.prototype.constructor=Fc;Sb.prototype=Object.create(va.prototype);Sb.prototype.constructor=Sb;Gc.prototype=Object.create(L.prototype);Gc.prototype.constructor=Gc;rb.prototype=Object.create(va.prototype);rb.prototype.constructor=rb;Hc.prototype=Object.create(L.prototype);Hc.prototype.constructor=Hc;Tb.prototype=Object.create(va.prototype);Tb.prototype.constructor=Tb;Ic.prototype=Object.create(L.prototype);
Ic.prototype.constructor=Ic;Ub.prototype=Object.create(va.prototype);Ub.prototype.constructor=Ub;Jc.prototype=Object.create(L.prototype);Jc.prototype.constructor=Jc;Vb.prototype=Object.create(z.prototype);Vb.prototype.constructor=Vb;Kc.prototype=Object.create(L.prototype);Kc.prototype.constructor=Kc;Wb.prototype=Object.create(z.prototype);Wb.prototype.constructor=Wb;Lc.prototype=Object.create(L.prototype);Lc.prototype.constructor=Lc;Xb.prototype=Object.create(z.prototype);Xb.prototype.constructor=
Xb;var Lg={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Xe(a,0,e,c,!0),g=[];if(!f)return g;var h;if(d){var k=c;d=[];var m;var l=0;for(m=b.length;l<m;l++){var n=b[l]*k;var p=l<m-1?b[l+1]*k:a.length;n=Xe(a,n,p,k,!1);n===n.next&&(n.steiner=!0);d.push(Jg(n))}d.sort(Hg);for(l=0;l<d.length;l++){b=d[l];k=f;if(k=Ig(b,k))b=$e(k,b),Nc(b,b.next);f=Nc(f,f.next)}}if(a.length>80*c){var q=h=a[0];var r=d=a[1];for(k=c;k<e;k+=c)l=a[k],b=a[k+1],l<q&&(q=l),b<r&&(r=b),l>h&&(h=l),b>d&&(d=
b);h=Math.max(h-q,d-r);h=0!==h?1/h:0}Oc(f,g,c,q,r,h);return g}},Ya={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>Ya.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];af(a);bf(c,a);var f=a.length;b.forEach(af);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,bf(c,b[a]);b=Lg.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};hb.prototype=Object.create(L.prototype);hb.prototype.constructor=
hb;Ia.prototype=Object.create(z.prototype);Ia.prototype.constructor=Ia;Ia.prototype.getArrays=function(){var a=this.getAttribute("position");a=a?Array.prototype.slice.call(a.array):[];var b=this.getAttribute("uv");b=b?Array.prototype.slice.call(b.array):[];var c=this.index;c=c?Array.prototype.slice.call(c.array):[];return{position:a,uv:b,index:c}};Ia.prototype.addShapeList=function(a,b){var c=a.length;b.arrays=this.getArrays();for(var d=0;d<c;d++)this.addShape(a[d],b);this.setIndex(b.arrays.index);
this.addAttribute("position",new D(b.arrays.position,3));this.addAttribute("uv",new D(b.arrays.uv,2))};Ia.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var k=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/k;b=b.y+d/k;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*
g-a.y;e=f*f+d*d;if(2>=e)return new C(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new C(f/e,d/e)}function e(a,b){for(J=a.length;0<=--J;){var c=J;var d=J-1;0>d&&(d=a.length-1);var e,f=A+2*x;for(e=0;e<f;e++){var g=aa*e,m=aa*(e+1),n=b+d+g,p=b+d+m;m=b+c+m;h(b+c+g);h(n);h(m);h(n);h(p);h(m);g=l.length/3;g=H.generateSideWallUV(S,l,g-6,g-3,
g-2,g-1);k(g[0]);k(g[1]);k(g[3]);k(g[1]);k(g[2]);k(g[3])}}}function f(a,b,c){q.push(a);q.push(b);q.push(c)}function g(a,b,c){h(a);h(b);h(c);a=l.length/3;a=H.generateTopUV(S,l,a-3,a-2,a-1);k(a[0]);k(a[1]);k(a[2])}function h(a){n.push(l.length/3);l.push(q[3*a]);l.push(q[3*a+1]);l.push(q[3*a+2])}function k(a){u.push(a.x);u.push(a.y)}var m=b.arrays?b.arrays:this.getArrays(),l=m.position,n=m.index,u=m.uv,q=[];m=void 0!==b.amount?b.amount:100;var r=void 0!==b.bevelThickness?b.bevelThickness:6,t=void 0!==
b.bevelSize?b.bevelSize:r-2,x=void 0!==b.bevelSegments?b.bevelSegments:3,B=void 0!==b.bevelEnabled?b.bevelEnabled:!0,w=void 0!==b.curveSegments?b.curveSegments:12,A=void 0!==b.steps?b.steps:1,y=b.extrudePath,z=!1,H=void 0!==b.UVGenerator?b.UVGenerator:hb.WorldUVGenerator;if(y){var F=y.getSpacedPoints(A);z=!0;B=!1;var I=void 0!==b.frames?b.frames:y.computeFrenetFrames(A,!1);var K=new p;var L=new p;var M=new p}B||(t=r=x=0);var O,S=this;w=a.extractPoints(w);a=w.shape;var P=w.holes;if(!Ya.isClockWise(a)){a=
a.reverse();var T=0;for(O=P.length;T<O;T++){var R=P[T];Ya.isClockWise(R)&&(P[T]=R.reverse())}}var Y=Ya.triangulateShape(a,P),W=a;T=0;for(O=P.length;T<O;T++)R=P[T],a=a.concat(R);var U,aa=a.length,X,da=Y.length;w=[];var J=0;var V=W.length;var Q=V-1;for(U=J+1;J<V;J++,Q++,U++)Q===V&&(Q=0),U===V&&(U=0),w[J]=d(W[J],W[Q],W[U]);y=[];var ea=w.concat();T=0;for(O=P.length;T<O;T++){R=P[T];var ca=[];J=0;V=R.length;Q=V-1;for(U=J+1;J<V;J++,Q++,U++)Q===V&&(Q=0),U===V&&(U=0),ca[J]=d(R[J],R[Q],R[U]);y.push(ca);ea=
ea.concat(ca)}for(Q=0;Q<x;Q++){V=Q/x;var fa=r*Math.cos(V*Math.PI/2);U=t*Math.sin(V*Math.PI/2);J=0;for(V=W.length;J<V;J++){var ha=c(W[J],w[J],U);f(ha.x,ha.y,-fa)}T=0;for(O=P.length;T<O;T++)for(R=P[T],ca=y[T],J=0,V=R.length;J<V;J++)ha=c(R[J],ca[J],U),f(ha.x,ha.y,-fa)}U=t;for(J=0;J<aa;J++)ha=B?c(a[J],ea[J],U):a[J],z?(L.copy(I.normals[0]).multiplyScalar(ha.x),K.copy(I.binormals[0]).multiplyScalar(ha.y),M.copy(F[0]).add(L).add(K),f(M.x,M.y,M.z)):f(ha.x,ha.y,0);for(V=1;V<=A;V++)for(J=0;J<aa;J++)ha=B?c(a[J],
ea[J],U):a[J],z?(L.copy(I.normals[V]).multiplyScalar(ha.x),K.copy(I.binormals[V]).multiplyScalar(ha.y),M.copy(F[V]).add(L).add(K),f(M.x,M.y,M.z)):f(ha.x,ha.y,m/A*V);for(Q=x-1;0<=Q;Q--){V=Q/x;fa=r*Math.cos(V*Math.PI/2);U=t*Math.sin(V*Math.PI/2);J=0;for(V=W.length;J<V;J++)ha=c(W[J],w[J],U),f(ha.x,ha.y,m+fa);T=0;for(O=P.length;T<O;T++)for(R=P[T],ca=y[T],J=0,V=R.length;J<V;J++)ha=c(R[J],ca[J],U),z?f(ha.x,ha.y+F[A-1].y,F[A-1].x+fa):f(ha.x,ha.y,m+fa)}(function(){var a=l.length/3;if(B){var c=0*aa;for(J=
0;J<da;J++)X=Y[J],g(X[2]+c,X[1]+c,X[0]+c);c=aa*(A+2*x);for(J=0;J<da;J++)X=Y[J],g(X[0]+c,X[1]+c,X[2]+c)}else{for(J=0;J<da;J++)X=Y[J],g(X[2],X[1],X[0]);for(J=0;J<da;J++)X=Y[J],g(X[0]+aa*A,X[1]+aa*A,X[2]+aa*A)}S.addGroup(a,l.length/3-a,void 0!==b.material?b.material:0)})();(function(){var a=l.length/3,c=0;e(W,c);c+=W.length;T=0;for(O=P.length;T<O;T++)R=P[T],e(R,c),c+=R.length;S.addGroup(a,l.length/3-a,void 0!==b.extrudeMaterial?b.extrudeMaterial:1)})();b.arrays||(this.setIndex(n),this.addAttribute("position",
new D(l,3)),this.addAttribute("uv",new D(u,2)))};hb.WorldUVGenerator={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new C(b[3*c],b[3*c+1]),new C(a,d),new C(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],k=b[3*d+1];d=b[3*d+2];var m=b[3*e],l=b[3*e+1];e=b[3*e+2];var n=b[3*f],p=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-k)?[new C(a,1-c),new C(h,1-d),new C(m,1-e),new C(n,1-b)]:[new C(g,1-c),new C(k,1-d),new C(l,1-e),
new C(p,1-b)]}};Qc.prototype=Object.create(L.prototype);Qc.prototype.constructor=Qc;Yb.prototype=Object.create(Ia.prototype);Yb.prototype.constructor=Yb;Rc.prototype=Object.create(L.prototype);Rc.prototype.constructor=Rc;tb.prototype=Object.create(z.prototype);tb.prototype.constructor=tb;Sc.prototype=Object.create(L.prototype);Sc.prototype.constructor=Sc;Zb.prototype=Object.create(z.prototype);Zb.prototype.constructor=Zb;Tc.prototype=Object.create(L.prototype);Tc.prototype.constructor=Tc;$b.prototype=
Object.create(z.prototype);$b.prototype.constructor=$b;ub.prototype=Object.create(L.prototype);ub.prototype.constructor=ub;ub.prototype.toJSON=function(){var a=L.prototype.toJSON.call(this);return cf(this.parameters.shapes,a)};vb.prototype=Object.create(z.prototype);vb.prototype.constructor=vb;vb.prototype.toJSON=function(){var a=z.prototype.toJSON.call(this);return cf(this.parameters.shapes,a)};ac.prototype=Object.create(z.prototype);ac.prototype.constructor=ac;wb.prototype=Object.create(L.prototype);
wb.prototype.constructor=wb;Za.prototype=Object.create(z.prototype);Za.prototype.constructor=Za;Uc.prototype=Object.create(wb.prototype);Uc.prototype.constructor=Uc;Vc.prototype=Object.create(Za.prototype);Vc.prototype.constructor=Vc;Wc.prototype=Object.create(L.prototype);Wc.prototype.constructor=Wc;bc.prototype=Object.create(z.prototype);bc.prototype.constructor=bc;var oa=Object.freeze({WireframeGeometry:Qb,ParametricGeometry:Dc,ParametricBufferGeometry:Rb,TetrahedronGeometry:Fc,TetrahedronBufferGeometry:Sb,
OctahedronGeometry:Gc,OctahedronBufferGeometry:rb,IcosahedronGeometry:Hc,IcosahedronBufferGeometry:Tb,DodecahedronGeometry:Ic,DodecahedronBufferGeometry:Ub,PolyhedronGeometry:Ec,PolyhedronBufferGeometry:va,TubeGeometry:Jc,TubeBufferGeometry:Vb,TorusKnotGeometry:Kc,TorusKnotBufferGeometry:Wb,TorusGeometry:Lc,TorusBufferGeometry:Xb,TextGeometry:Qc,TextBufferGeometry:Yb,SphereGeometry:Rc,SphereBufferGeometry:tb,RingGeometry:Sc,RingBufferGeometry:Zb,PlaneGeometry:xc,PlaneBufferGeometry:ob,LatheGeometry:Tc,
LatheBufferGeometry:$b,ShapeGeometry:ub,ShapeBufferGeometry:vb,ExtrudeGeometry:hb,ExtrudeBufferGeometry:Ia,EdgesGeometry:ac,ConeGeometry:Uc,ConeBufferGeometry:Vc,CylinderGeometry:wb,CylinderBufferGeometry:Za,CircleGeometry:Wc,CircleBufferGeometry:bc,BoxGeometry:Jb,BoxBufferGeometry:nb});cc.prototype=Object.create(O.prototype);cc.prototype.constructor=cc;cc.prototype.isShadowMaterial=!0;dc.prototype=Object.create(Da.prototype);dc.prototype.constructor=dc;dc.prototype.isRawShaderMaterial=!0;Sa.prototype=
Object.create(O.prototype);Sa.prototype.constructor=Sa;Sa.prototype.isMeshStandardMaterial=!0;Sa.prototype.copy=function(a){O.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;
this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=
a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};xb.prototype=Object.create(Sa.prototype);xb.prototype.constructor=xb;xb.prototype.isMeshPhysicalMaterial=!0;xb.prototype.copy=function(a){Sa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this};Ja.prototype=Object.create(O.prototype);
Ja.prototype.constructor=Ja;Ja.prototype.isMeshPhongMaterial=!0;Ja.prototype.copy=function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;
this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};yb.prototype=Object.create(Ja.prototype);yb.prototype.constructor=yb;yb.prototype.isMeshToonMaterial=!0;yb.prototype.copy=function(a){Ja.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};zb.prototype=Object.create(O.prototype);zb.prototype.constructor=zb;zb.prototype.isMeshNormalMaterial=!0;zb.prototype.copy=function(a){O.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;
this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Ab.prototype=Object.create(O.prototype);Ab.prototype.constructor=Ab;Ab.prototype.isMeshLambertMaterial=!0;Ab.prototype.copy=
function(a){O.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;
this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};Bb.prototype=Object.create(Y.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isLineDashedMaterial=!0;Bb.prototype.copy=function(a){Y.prototype.copy.call(this,a);this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Mg=Object.freeze({ShadowMaterial:cc,
SpriteMaterial:gb,RawShaderMaterial:dc,ShaderMaterial:Da,PointsMaterial:Ha,MeshPhysicalMaterial:xb,MeshStandardMaterial:Sa,MeshPhongMaterial:Ja,MeshToonMaterial:yb,MeshNormalMaterial:zb,MeshLambertMaterial:Ab,MeshDepthMaterial:db,MeshDistanceMaterial:eb,MeshBasicMaterial:za,LineDashedMaterial:Bb,LineBasicMaterial:Y,Material:O}),Fb={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},
clear:function(){this.files={}}},ra=new ae,ab={};Object.assign(Ka.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==ab[a])ab[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=window.decodeURIComponent(g);h&&(g=window.atob(g));
try{var k=(this.responseType||"").toLowerCase();switch(k){case "arraybuffer":case "blob":var m=new Uint8Array(g.length);for(h=0;h<g.length;h++)m[h]=g.charCodeAt(h);var l="blob"===k?new Blob([m.buffer],{type:c}):m.buffer;break;case "document":l=(new DOMParser).parseFromString(g,c);break;case "json":l=JSON.parse(g);break;default:l=g}window.setTimeout(function(){b&&b(l);e.manager.itemEnd(a)},0)}catch(u){window.setTimeout(function(){d&&d(u);e.manager.itemEnd(a);e.manager.itemError(a)},0)}}else{ab[a]=
[];ab[a].push({onLoad:b,onProgress:c,onError:d});var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(b){var c=this.response;Fb.add(a,c);var d=ab[a];delete ab[a];if(200===this.status){for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c)}e.manager.itemEnd(a)}else if(0===this.status){console.warn("THREE.FileLoader: HTTP Status 0 received.");f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onLoad)h.onLoad(c);e.manager.itemEnd(a)}else{f=0;for(g=d.length;f<g;f++)if(h=d[f],
h.onError)h.onError(b);e.manager.itemEnd(a);e.manager.itemError(a)}},!1);n.addEventListener("progress",function(b){for(var c=ab[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);n.addEventListener("error",function(b){var c=ab[a];delete ab[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemEnd(a);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);
n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)n.setRequestHeader(h,this.requestHeader[h]);n.send(null)}e.manager.itemStart(a);return n}},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});Object.assign(df.prototype,
{load:function(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Pb;h.image=g;var k=new Ka(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,l=0,n=a.length;l<n;++l)e(l);else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/
a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign(be.prototype,{load:function(a,b,c,d){var e=this,f=new kb,g=new Ka(this.manager);g.setResponseType("arraybuffer");
g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===
a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Xc.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml","img");c.addEventListener("load",function(){Fb.add(a,this);b&&b(this);e.manager.itemEnd(a)},
!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemEnd(a);e.manager.itemError(a)},!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(ce.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,
d)}var f=new bb,g=new Xc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(vd.prototype,{crossOrigin:"Anonymous",load:function(a,b,c,d){var e=new aa,f=new Xc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data:image\/jpeg/);
e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(K.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===
a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=
!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,
b){var c=new p,d=[],e=[],f=[],g=new p,h=new P,k;for(k=0;k<=a;k++){var m=k/a;d[k]=this.getTangentAt(m);d[k].normalize()}e[0]=new p;f[0]=new p;k=Number.MAX_VALUE;m=Math.abs(d[0].x);var l=Math.abs(d[0].y),n=Math.abs(d[0].z);m<=k&&(k=m,c.set(1,0,0));l<=k&&(k=l,c.set(0,1,0));n<=k&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(k=1;k<=a;k++)e[k]=e[k-1].clone(),f[k]=f[k-1].clone(),g.crossVectors(d[k-1],d[k]),g.length()>Number.EPSILON&&(g.normalize(),
c=Math.acos(S.clamp(d[k-1].dot(d[k]),-1,1)),e[k].applyMatrix4(h.makeRotationAxis(g,c))),f[k].crossVectors(d[k],e[k]);if(!0===b)for(c=Math.acos(S.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),k=1;k<=a;k++)e[k].applyMatrix4(h.makeRotationAxis(d[k],c*k)),f[k].crossVectors(d[k],e[k]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this},toJSON:function(){var a=
{metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});Aa.prototype=Object.create(K.prototype);Aa.prototype.constructor=Aa;Aa.prototype.isEllipseCurve=!0;Aa.prototype.getPoint=function(a,b){b=b||new C;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==
this.aClockwise||e||(d=d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f)};Aa.prototype.copy=function(a){K.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;
this.aRotation=a.aRotation;return this};Aa.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a};Aa.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;
this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;return this};ec.prototype=Object.create(Aa.prototype);ec.prototype.constructor=ec;ec.prototype.isArcCurve=!0;var Od=new p,ye=new de,ze=new de,Ae=new de;da.prototype=Object.create(K.prototype);da.prototype.constructor=da;da.prototype.isCatmullRomCurve3=!0;da.prototype.getPoint=function(a,b){b=b||new p;var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/c.length)+1)*c.length:
0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||0<e)var f=c[(e-1)%d];else Od.subVectors(c[0],c[1]).add(c[0]),f=Od;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Od.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Od);if("centripetal"===this.curveType||"chordal"===this.curveType){var k="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),k);e=Math.pow(g.distanceToSquared(h),k);k=Math.pow(h.distanceToSquared(c),k);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>k&&(k=e);ye.initNonuniformCatmullRom(f.x,
g.x,h.x,c.x,d,e,k);ze.initNonuniformCatmullRom(f.y,g.y,h.y,c.y,d,e,k);Ae.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,k)}else"catmullrom"===this.curveType&&(ye.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),ze.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),Ae.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(ye.calc(a),ze.calc(a),Ae.calc(a));return b};da.prototype.copy=function(a){K.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());
this.closed=a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};da.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};da.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new p).fromArray(d))}this.closed=
a.closed;this.curveType=a.curveType;this.tension=a.tension;return this};La.prototype=Object.create(K.prototype);La.prototype.constructor=La;La.prototype.isCubicBezierCurve=!0;La.prototype.getPoint=function(a,b){b=b||new C;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(Zc(a,c.x,d.x,e.x,f.x),Zc(a,c.y,d.y,e.y,f.y));return b};La.prototype.copy=function(a){K.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};La.prototype.toJSON=function(){var a=
K.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};La.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};Ta.prototype=Object.create(K.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isCubicBezierCurve3=!0;Ta.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;
b.set(Zc(a,c.x,d.x,e.x,f.x),Zc(a,c.y,d.y,e.y,f.y),Zc(a,c.z,d.z,e.z,f.z));return b};Ta.prototype.copy=function(a){K.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ta.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ta.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);
this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};ka.prototype=Object.create(K.prototype);ka.prototype.constructor=ka;ka.prototype.isLineCurve=!0;ka.prototype.getPoint=function(a,b){b=b||new C;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};ka.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};ka.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};ka.prototype.copy=function(a){K.prototype.copy.call(this,
a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};ka.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};ka.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ma.prototype=Object.create(K.prototype);Ma.prototype.constructor=Ma;Ma.prototype.isLineCurve3=!0;Ma.prototype.getPoint=function(a,b){b=b||new p;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),
b.multiplyScalar(a).add(this.v1));return b};Ma.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ma.prototype.copy=function(a){K.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ma.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ma.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Na.prototype=Object.create(K.prototype);
Na.prototype.constructor=Na;Na.prototype.isQuadraticBezierCurve=!0;Na.prototype.getPoint=function(a,b){b=b||new C;var c=this.v0,d=this.v1,e=this.v2;b.set(Yc(a,c.x,d.x,e.x),Yc(a,c.y,d.y,e.y));return b};Na.prototype.copy=function(a){K.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Na.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Na.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,
a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Ua.prototype=Object.create(K.prototype);Ua.prototype.constructor=Ua;Ua.prototype.isQuadraticBezierCurve3=!0;Ua.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2;b.set(Yc(a,c.x,d.x,e.x),Yc(a,c.y,d.y,e.y),Yc(a,c.z,d.z,e.z));return b};Ua.prototype.copy=function(a){K.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Ua.prototype.toJSON=function(){var a=
K.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ua.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Oa.prototype=Object.create(K.prototype);Oa.prototype.constructor=Oa;Oa.prototype.isSplineCurve=!0;Oa.prototype.getPoint=function(a,b){b=b||new C;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-
2?c.length-1:a+1];c=c[a>c.length-3?c.length-1:a+2];b.set(ef(d,e.x,f.x,g.x,c.x),ef(d,e.y,f.y,g.y,c.y));return b};Oa.prototype.copy=function(a){K.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};Oa.prototype.toJSON=function(){var a=K.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a};Oa.prototype.fromJSON=function(a){K.prototype.fromJSON.call(this,
a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new C).fromArray(d))}return this};var Ng=Object.freeze({ArcCurve:ec,CatmullRomCurve3:da,CubicBezierCurve:La,CubicBezierCurve3:Ta,EllipseCurve:Aa,LineCurve:ka,LineCurve3:Ma,QuadraticBezierCurve:Na,QuadraticBezierCurve3:Ua,SplineCurve:Oa});$a.prototype=Object.assign(Object.create(K.prototype),{constructor:$a,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-
1].getPoint(1);a.equals(b)||this.curves.push(new ka(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;
for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),
c=h)}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){K.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},toJSON:function(){var a=K.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){K.prototype.fromJSON.call(this,a);
this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new Ng[d.type]).fromJSON(d))}return this}});Pa.prototype=Object.assign(Object.create($a.prototype),{constructor:Pa,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new ka(this.currentPoint.clone(),new C(a,b));this.curves.push(c);this.currentPoint.set(a,
b)},quadraticCurveTo:function(a,b,c,d){a=new Na(this.currentPoint.clone(),new C(a,b),new C(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,f){a=new La(this.currentPoint.clone(),new C(a,b),new C(c,d),new C(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new Oa(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,
c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Aa(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)},copy:function(a){$a.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=
$a.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){$a.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});ib.prototype=Object.assign(Object.create(Pa.prototype),{constructor:ib,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){Pa.prototype.copy.call(this,
a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=Pa.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a},fromJSON:function(a){Pa.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new Pa).fromJSON(d))}return this}});ea.prototype=Object.assign(Object.create(y.prototype),
{constructor:ea,isLight:!0,copy:function(a){y.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==
this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});wd.prototype=Object.assign(Object.create(ea.prototype),{constructor:wd,isHemisphereLight:!0,copy:function(a){ea.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(Cb.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},
toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});xd.prototype=Object.assign(Object.create(Cb.prototype),{constructor:xd,isSpotLightShadow:!0,update:function(a){var b=this.camera,c=2*S.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height;a=a.distance||b.far;if(c!==b.fov||d!==b.aspect||a!==b.far)b.fov=
c,b.aspect=d,b.far=a,b.updateProjectionMatrix()}});yd.prototype=Object.assign(Object.create(ea.prototype),{constructor:yd,isSpotLight:!0,copy:function(a){ea.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});zd.prototype=Object.assign(Object.create(ea.prototype),{constructor:zd,isPointLight:!0,copy:function(a){ea.prototype.copy.call(this,a);this.distance=a.distance;
this.decay=a.decay;this.shadow=a.shadow.clone();return this}});Ad.prototype=Object.assign(Object.create(Cb.prototype),{constructor:Ad});Bd.prototype=Object.assign(Object.create(ea.prototype),{constructor:Bd,isDirectionalLight:!0,copy:function(a){ea.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Cd.prototype=Object.assign(Object.create(ea.prototype),{constructor:Cd,isAmbientLight:!0});Dd.prototype=Object.assign(Object.create(ea.prototype),{constructor:Dd,
isRectAreaLight:!0,copy:function(a){ea.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=ea.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});Ed.prototype=Object.assign(Object.create(la.prototype),{constructor:Ed,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Fd.prototype=Object.assign(Object.create(la.prototype),
{constructor:Fd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Object.assign(Ba.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&
(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||
this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(Ba.prototype,{beforeStart_:Ba.prototype.copySampleValue_,afterEnd_:Ba.prototype.copySampleValue_});Gd.prototype=Object.assign(Object.create(Ba.prototype),{constructor:Gd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,
g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)ca.slerpFlat(e,0,f,a-g,f,a,b);return e}});$c.prototype=Object.assign(Object.create(la.prototype),{constructor:$c,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Gd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});Hd.prototype=Object.assign(Object.create(la.prototype),{constructor:Hd,ValueTypeName:"color"});fc.prototype=Object.assign(Object.create(la.prototype),
{constructor:fc,ValueTypeName:"number"});Id.prototype=Object.assign(Object.create(Ba.prototype),{constructor:Id,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];
break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,m=this._offsetNext,l=this._weightPrev,n=this._weightNext,p=(c-b)/(d-b);c=p*p;d=c*p;b=-l*d+2*l*c-l*p;l=(1+l)*d+(-1.5-2*l)*c+(-.5+l)*p+1;p=(-1-n)*d+(1.5+n)*c+.5*p;n=n*d-n*c;for(c=0;c!==g;++c)e[c]=b*f[k+c]+l*f[h+c]+p*f[a+c]+n*f[m+c];
return e}});ad.prototype=Object.assign(Object.create(Ba.prototype),{constructor:ad,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Jd.prototype=Object.assign(Object.create(Ba.prototype),{constructor:Jd,interpolate_:function(a){return this.copySampleValue_(a-1)}});var W={arraySlice:function(a,b,c){return W.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):
a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,k=0;k!==b;++k)e[g++]=a[h+k];return e},
flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};Object.assign(la,{parse:function(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");
var b=la._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];W.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,times:W.convertArray(a.times,Array),values:W.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return fc;
case "vector":case "vector2":case "vector3":case "vector4":return gc;case "color":return Hd;case "quaternion":return $c;case "bool":case "boolean":return Fd;case "string":return Ed}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}});Object.assign(la.prototype,{constructor:la,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Jd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new ad(this.times,
this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Id(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn("THREE.KeyframeTrack:",b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=
this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=W.arraySlice(c,e,f),this.values=W.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;b=this.values;
var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&W.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,
f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,k=a[g];if(k!==a[g+1]&&(1!==g||k!==k[0]))if(d)h=!0;else{var m=g*c,l=m-c,n=m+c;for(k=0;k!==c;++k){var p=b[m+k];if(p!==b[l+k]||p!==b[n+k]){h=!0;break}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,k=0;k!==c;++k)b[m+k]=b[h+k];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(k=0;k!==c;++k)b[m+k]=b[h+k];++e}e!==a.length&&(this.times=W.arraySlice(a,
0,e),this.values=W.arraySlice(b,0,e*c));return this}});gc.prototype=Object.assign(Object.create(la.prototype),{constructor:gc,ValueTypeName:"vector"});Object.assign(wa,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(la.parse(c[e]).scale(d));return new wa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d)b.push(la.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,
b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var m=W.getKeyframeOrder(h);h=W.sortedArray(h,1,m);k=W.sortedArray(k,1,m);d||0!==h[0]||(h.push(e),k.push(k[0]));f.push((new fc(".morphTargetInfluences["+b[g].name+"]",h,k)).scale(1/c))}return new wa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,
b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var m=k[1];(k=d[m])||(d[m]=k=[]);k.push(h)}}a=[];for(m in d)a.push(wa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];W.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||
-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var k=a[h].keys;if(k&&0!==k.length)if(k[0].morphTargets){f={};for(var m=0;m<k.length;m++)if(k[m].morphTargets)for(var l=0;l<k[m].morphTargets.length;l++)f[k[m].morphTargets[l]]=-1;for(var n in f){var p=[],q=[];for(l=0;l!==k[m].morphTargets.length;++l){var r=k[m];p.push(r.time);q.push(r.morphTarget===n?1:0)}d.push(new fc(".morphTargetInfluence["+n+"]",p,q))}f=f.length*(g||1)}else m=".bones["+b[h].name+"]",c(gc,m+".position",k,"pos",d),c($c,
m+".quaternion",k,"rot",d),c(gc,m+".scale",k,"scl",d)}return 0===d.length?null:new wa(e,f,d)}});Object.assign(wa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1])}this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}});Object.assign(Kd.prototype,
{load:function(a,b,c,d){var e=this;(new Ka(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Mg[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);
void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(d.vertexColors=a.vertexColors);void 0!==
a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==
a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=
a.morphTargets);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.userData&&(d.userData=a.userData);void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&
(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new C).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=
b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=
b(a.gradientMap));return d}});Object.assign(ee.prototype,{load:function(a,b,c,d){var e=this;(new Ka(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new z,c=a.data.index;void 0!==c&&(c=new uf[c.type](c.array),b.setIndex(new M(c,1)));var d=a.data.attributes;for(f in d){var e=d[f];c=new uf[e.type](e.array);b.addAttribute(f,new M(c,e.itemSize,e.normalized))}var f=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==f)for(c=0,d=f.length;c!==d;++c)e=f[c],b.addGroup(e.start,
e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==a&&(f=new p,void 0!==a.center&&f.fromArray(a.center),b.boundingSphere=new Ca(f,a.radius));return b}});var uf={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};hc.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,
b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(hc.prototype,{crossOrigin:void 0,initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b=new H,c=new vd,d=new Kd;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var m=hc.Handlers.get(a);
null!==m?a=m.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=S.generateUUID();k[b]=a;return b}var k={},m={uuid:S.generateUUID(),type:"MeshLambertMaterial"},l;for(l in e){var n=e[l];switch(l){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;
case "DbgName":m.name=n;break;case "blending":m.blending=a[n];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case "colorDiffuse":m.color=b.fromArray(n).getHex();break;case "colorSpecular":m.specular=b.fromArray(n).getHex();break;case "colorEmissive":m.emissive=b.fromArray(n).getHex();break;case "specularCoef":m.shininess=n;break;case "shading":"basic"===n.toLowerCase()&&(m.type="MeshBasicMaterial");"phong"===n.toLowerCase()&&
(m.type="MeshPhongMaterial");"standard"===n.toLowerCase()&&(m.type="MeshStandardMaterial");break;case "mapDiffuse":m.map=h(n,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":m.emissiveMap=h(n,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;
case "mapLight":m.lightMap=h(n,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;case "mapAO":m.aoMap=h(n,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":m.bumpMap=h(n,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":m.bumpScale=
n;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":m.normalMap=h(n,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);break;case "mapNormalFactor":m.normalScale=[n,n];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":m.specularMap=h(n,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;
case "mapMetalness":m.metalnessMap=h(n,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":m.roughnessMap=h(n,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":m.alphaMap=
h(n,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;case "flipSided":m.side=1;break;case "doubleSided":m.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");m.opacity=n;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":m[l]=
n;break;case "vertexColors":!0===n&&(m.vertexColors=2);"face"===n&&(m.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,n)}}"MeshBasicMaterial"===m.type&&delete m.emissive;"MeshPhongMaterial"!==m.type&&delete m.specular;1>m.opacity&&(m.transparent=!0);d.setTextures(k);return d.parse(m)}}()});var Be={decodeText:function(a){if("undefined"!==typeof TextDecoder)return(new TextDecoder).decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);return decodeURIComponent(escape(b))},
extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"}};Object.assign(fe.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:Be.extractUrlBase(a),g=new Ka(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");
return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(){return function(a,b){void 0!==a.data&&(a=a.data);a.scale=void 0!==a.scale?1/a.scale:1;var c=new L,d=a,e,f,g,h=d.faces;var k=d.vertices;var m=d.normals,l=d.colors;var n=d.scale;var u=0;if(void 0!==d.uvs){for(e=0;e<d.uvs.length;e++)d.uvs[e].length&&u++;for(e=
0;e<u;e++)c.faceVertexUvs[e]=[]}var q=0;for(g=k.length;q<g;)e=new p,e.x=k[q++]*n,e.y=k[q++]*n,e.z=k[q++]*n,c.vertices.push(e);q=0;for(g=h.length;q<g;){k=h[q++];var r=k&1;var t=k&2;e=k&8;var x=k&16;var B=k&32;n=k&64;k&=128;if(r){r=new Wa;r.a=h[q];r.b=h[q+1];r.c=h[q+3];var w=new Wa;w.a=h[q+1];w.b=h[q+2];w.c=h[q+3];q+=4;t&&(t=h[q++],r.materialIndex=t,w.materialIndex=t);t=c.faces.length;if(e)for(e=0;e<u;e++){var A=d.uvs[e];c.faceVertexUvs[e][t]=[];c.faceVertexUvs[e][t+1]=[];for(f=0;4>f;f++){var y=h[q++];
var z=A[2*y];y=A[2*y+1];z=new C(z,y);2!==f&&c.faceVertexUvs[e][t].push(z);0!==f&&c.faceVertexUvs[e][t+1].push(z)}}x&&(x=3*h[q++],r.normal.set(m[x++],m[x++],m[x]),w.normal.copy(r.normal));if(B)for(e=0;4>e;e++)x=3*h[q++],B=new p(m[x++],m[x++],m[x]),2!==e&&r.vertexNormals.push(B),0!==e&&w.vertexNormals.push(B);n&&(n=h[q++],n=l[n],r.color.setHex(n),w.color.setHex(n));if(k)for(e=0;4>e;e++)n=h[q++],n=l[n],2!==e&&r.vertexColors.push(new H(n)),0!==e&&w.vertexColors.push(new H(n));c.faces.push(r);c.faces.push(w)}else{r=
new Wa;r.a=h[q++];r.b=h[q++];r.c=h[q++];t&&(t=h[q++],r.materialIndex=t);t=c.faces.length;if(e)for(e=0;e<u;e++)for(A=d.uvs[e],c.faceVertexUvs[e][t]=[],f=0;3>f;f++)y=h[q++],z=A[2*y],y=A[2*y+1],z=new C(z,y),c.faceVertexUvs[e][t].push(z);x&&(x=3*h[q++],r.normal.set(m[x++],m[x++],m[x]));if(B)for(e=0;3>e;e++)x=3*h[q++],B=new p(m[x++],m[x++],m[x]),r.vertexNormals.push(B);n&&(n=h[q++],r.color.setHex(l[n]));if(k)for(e=0;3>e;e++)n=h[q++],r.vertexColors.push(new H(l[n]));c.faces.push(r)}}d=a;q=void 0!==d.influencesPerVertex?
d.influencesPerVertex:2;if(d.skinWeights)for(g=0,h=d.skinWeights.length;g<h;g+=q)c.skinWeights.push(new X(d.skinWeights[g],1<q?d.skinWeights[g+1]:0,2<q?d.skinWeights[g+2]:0,3<q?d.skinWeights[g+3]:0));if(d.skinIndices)for(g=0,h=d.skinIndices.length;g<h;g+=q)c.skinIndices.push(new X(d.skinIndices[g],1<q?d.skinIndices[g+1]:0,2<q?d.skinIndices[g+2]:0,3<q?d.skinIndices[g+3]:0));c.bones=d.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&
console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");g=a;h=g.scale;if(void 0!==g.morphTargets)for(d=0,q=g.morphTargets.length;d<q;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=g.morphTargets[d].name,c.morphTargets[d].vertices=[],m=c.morphTargets[d].vertices,l=g.morphTargets[d].vertices,u=0,k=l.length;u<k;u+=3)n=new p,n.x=l[u]*h,n.y=l[u+1]*h,n.z=l[u+2]*h,m.push(n);if(void 0!==
g.morphColors&&0<g.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),h=c.faces,g=g.morphColors[0].colors,d=0,q=h.length;d<q;d++)h[d].color.fromArray(g,3*d);g=a;d=[];q=[];void 0!==g.animation&&q.push(g.animation);void 0!==g.animations&&(g.animations.length?q=q.concat(g.animations):q.push(g.animations));for(g=0;g<q.length;g++)(h=wa.parseAnimation(q[g],c.bones))&&d.push(h);c.morphTargets&&(q=wa.CreateClipsFromMorphTargetSequences(c.morphTargets,
10),d=d.concat(q));0<d.length&&(c.animations=d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};a=hc.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:a}}}()});Object.assign(ff.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new Ka(e.manager)).load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(h){void 0!==d&&d(h);console.error("THREE:ObjectLoader: Can't parse "+
a+".",h.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a+". Use THREE.JSONLoader instead."):e.parse(f,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,function(){void 0!==b&&b(e)});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,
d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new ib).fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new fe,e=new ee,f=0,g=a.length;f<g;f++){var h=a[f];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":var k=new oa[h.type](h.width,
h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":k=new oa[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":k=new oa[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":k=new oa[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
break;case "ConeGeometry":case "ConeBufferGeometry":k=new oa[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":k=new oa[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":k=
new oa[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":k=new oa[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":k=new oa[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":k=new oa[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":k=
new oa[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":k=new oa[h.type](h.vertices,h.indices,h.radius,h.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":k=[];f=0;for(g=h.shapes.length;f<g;f++)k.push(b[h.shapes[f]]);k=new oa[h.type](k,h.curveSegments);break;case "BufferGeometry":k=e.parse(h);break;case "Geometry":k=d.parse(h,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+
h.type+'"');continue}k.uuid=h.uuid;void 0!==h.name&&(k.name=h.name);c[h.uuid]=k}return c},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new Kd;d.setTextures(b);b=0;for(var e=a.length;b<e;b++){var f=a[b];if("MultiMaterial"===f.type){for(var g=[],h=0;h<f.materials.length;h++)g.push(d.parse(f.materials[h]));c[f.uuid]=g}else c[f.uuid]=d.parse(f)}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=wa.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);
return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemEnd(a);d.manager.itemError(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new ae(b);var f=new Xc(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.texturePath+h.url;e[h.uuid]=c(k)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new aa(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Og));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);
void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],vf),h.wrapT=c(g.wrap[1],vf));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,wf));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,wf));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h}return d},parseObject:function(a,b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=
[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}switch(a.type){case "Scene":var f=new pd;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new H(a.background));void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Nb(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Mb(a.fog.color,a.fog.density)));break;
case "PerspectiveCamera":f=new na(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new Ib(a.left,a.right,a.top,a.bottom,a.near,a.far);break;case "AmbientLight":f=new Cd(a.color,a.intensity);break;case "DirectionalLight":f=new Bd(a.color,a.intensity);break;case "PointLight":f=
new zd(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new Dd(a.color,a.intensity,a.width,a.height);break;case "SpotLight":f=new yd(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new wd(a.color,a.groundColor,a.intensity);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":f=d(a.geometry);var g=e(a.material);f=f.bones&&0<f.bones.length?new rd(f,g):new ua(f,g);break;case "LOD":f=
new Ac;break;case "Line":f=new qa(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new sd(d(a.geometry),e(a.material));break;case "LineSegments":f=new U(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=new Ob(d(a.geometry),e(a.material));break;case "Sprite":f=new zc(e(a.material));break;case "Group":f=new td;break;default:f=new y}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),f.matrix.decompose(f.position,f.quaternion,
f.scale)):(void 0!==a.position&&f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),
void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.userData&&(f.userData=a.userData);if(void 0!==a.children){g=a.children;for(var h=0;h<g.length;h++)f.add(this.parseObject(g[h],b,c))}if("LOD"===a.type)for(a=a.levels,g=0;g<a.length;g++){h=a[g];var k=f.getObjectByProperty("uuid",h.object);void 0!==k&&f.addLevel(k,h.distance)}return f}});var Og={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,
EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},vf={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},wf={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008};ge.prototype={constructor:ge,setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&
(a=this.path+a);var e=this,f=Fb.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,e.options)}).then(function(c){Fb.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&d(b);e.manager.itemEnd(a);e.manager.itemError(a)})},setCrossOrigin:function(){return this},setPath:function(a){this.path=a;return this}};Object.assign(he.prototype,{moveTo:function(a,
b){this.currentPath=new Pa;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new ib;f.curves=e.curves;b.push(f)}return b}function d(a,
b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=Ya.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new ib;h.curves=g.curves;b.push(h);
return b}var k=!e(f[0].getPoints());k=a?!k:k;h=[];var l=[],p=[],n=0;l[n]=void 0;p[n]=[];for(var u=0,q=f.length;u<q;u++){g=f[u];var r=g.getPoints();var t=e(r);(t=a?!t:t)?(!k&&l[n]&&n++,l[n]={s:new ib,p:r},l[n].s.curves=g.curves,k&&n++,p[n]=[]):p[n].push({h:g,p:r[0]})}if(!l[0])return c(f);if(1<l.length){u=!1;a=[];e=0;for(f=l.length;e<f;e++)h[e]=[];e=0;for(f=l.length;e<f;e++)for(g=p[e],t=0;t<g.length;t++){k=g[t];n=!0;for(r=0;r<l.length;r++)d(k.p,l[r].p)&&(e!==r&&a.push({froms:e,tos:r,hole:t}),n?(n=!1,
h[r].push(k)):u=!0);n&&h[e].push(k)}0<a.length&&(u||(p=h))}u=0;for(e=l.length;u<e;u++)for(h=l[u].s,b.push(h),a=p[u],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(ie.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);c=[];var d=b;b=this.data;var e=String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,k=0;k<e.length;k++){var l=e[k];if("\n"===l)g=0,h-=f;else{var p=d;var n=g,u=h;if(l=b.glyphs[l]||
b.glyphs["?"]){var q=new he;if(l.o)for(var r=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),t=0,x=r.length;t<x;)switch(r[t++]){case "m":var y=r[t++]*p+n;var w=r[t++]*p+u;q.moveTo(y,w);break;case "l":y=r[t++]*p+n;w=r[t++]*p+u;q.lineTo(y,w);break;case "q":var A=r[t++]*p+n;var z=r[t++]*p+u;var C=r[t++]*p+n;var D=r[t++]*p+u;q.quadraticCurveTo(C,D,A,z);break;case "b":A=r[t++]*p+n,z=r[t++]*p+u,C=r[t++]*p+n,D=r[t++]*p+u,y=r[t++]*p+n,w=r[t++]*p+u,q.bezierCurveTo(C,D,y,w,A,z)}p={offsetX:l.ha*p,path:q}}else p=
void 0;g+=p.offsetX;a.push(p.path)}}b=0;for(e=a.length;b<e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});Object.assign(gf.prototype,{load:function(a,b,c,d){var e=this,f=new Ka(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(k){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new ie(a)},setPath:function(a){this.path=
a;return this}});var Pd,le={getContext:function(){void 0===Pd&&(Pd=new (window.AudioContext||window.webkitAudioContext));return Pd},setContext:function(a){Pd=a}};Object.assign(je.prototype,{load:function(a,b,c,d){var e=new Ka(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){le.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Object.assign(hf.prototype,{update:function(){var a,b,c,d,e,f,g,h,k=new P,l=new P;return function(m){if(a!==this||b!==m.focus||c!==m.fov||d!==m.aspect*
this.aspect||e!==m.near||f!==m.far||g!==m.zoom||h!==this.eyeSep){a=this;b=m.focus;c=m.fov;d=m.aspect*this.aspect;e=m.near;f=m.far;g=m.zoom;var n=m.projectionMatrix.clone();h=this.eyeSep/2;var p=h*e/b,q=e*Math.tan(S.DEG2RAD*c*.5)/g;l.elements[12]=-h;k.elements[12]=h;var r=-q*d+p;var t=q*d+p;n.elements[0]=2*e/(t-r);n.elements[8]=(t+r)/(t-r);this.cameraL.projectionMatrix.copy(n);r=-q*d-p;t=q*d-p;n.elements[0]=2*e/(t-r);n.elements[8]=(t+r)/(t-r);this.cameraR.projectionMatrix.copy(n)}this.cameraL.matrixWorld.copy(m.matrixWorld).multiply(l);
this.cameraR.matrixWorld.copy(m.matrixWorld).multiply(k)}}()});bd.prototype=Object.create(y.prototype);bd.prototype.constructor=bd;ke.prototype=Object.assign(Object.create(y.prototype),{constructor:ke,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?
(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new p,b=new ca,c=new p,d=new p;return function(e){y.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,
b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,
this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z))}}()});ic.prototype=Object.assign(Object.create(y.prototype),{constructor:ic,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");
else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,this.startTime);this.startTime=this.context.currentTime;a.start(this.startTime,this.offset);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return!0===this.isPlaying&&(this.source.stop(),this.offset+=(this.context.currentTime-this.startTime)*this.playbackRate,this.isPlaying=!1),this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.offset=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-
1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=
a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=
!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.value=a;return this}});me.prototype=Object.assign(Object.create(ic.prototype),
{constructor:me,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=
a},updateMatrixWorld:function(){var a=new p;return function(b){y.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(ne.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(oe.prototype,{accumulate:function(a,b){var c=this.buffer,d=
this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);d=b;for(var f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);
for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){ca.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});Object.assign(jf.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,
b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(fa,{Composite:jf,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new fa.Composite(a,b,c):new fa(a,b,c)},sanitizeNodeName:function(){var a=
/[\[\]\.:\/]/g;return function(b){return b.replace(/\s/g,"_").replace(a,"")}}(),parseTrackName:function(){var a="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",b=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]");a=/(WCOD+)?/.source.replace("WCOD",a);var c=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),d=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),e=new RegExp("^"+b+a+c+d+"$"),f=["material","materials","bones"];return function(a){var b=e.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+
a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==f.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+a);return b}}(),findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;
if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(fa.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,
b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=
!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,
b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,
d=b.propertyName,e=b.propertyIndex;a||(this.node=a=fa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}for(c=0;c<this.node.geometry.morphAttributes.position.length;c++)if(a.geometry.morphAttributes.position[c].name===e){e=c;break}}else{if(!a.geometry.morphTargets){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.",
this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+
this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});Object.assign(fa.prototype,{_getValue_unbound:fa.prototype.getValue,_setValue_unbound:fa.prototype.setValue});Object.assign(kf.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,k=void 0,l=0,p=arguments.length;l!==
p;++l){var n=arguments[l],u=n.uuid,q=d[u];if(void 0===q){q=b++;d[u]=q;a.push(n);u=0;for(var r=h;u!==r;++u)g[u].push(new fa(n,e[u],f[u]))}else if(q<c){k=a[q];var t=--c;r=a[t];d[r.uuid]=q;a[q]=r;d[u]=t;a[t]=n;u=0;for(r=h;u!==r;++u){var x=g[u],y=x[q];x[q]=x[t];void 0===y&&(y=new fa(n,e[u],f[u]));x[t]=y}}else a[q]!==k&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=
c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=arguments.length;f!==g;++f){var h=arguments[f],k=h.uuid,l=c[k];if(void 0!==l&&l>=b){var p=b++,n=a[p];c[n.uuid]=l;a[l]=n;c[k]=p;a[p]=h;h=0;for(k=e;h!==k;++h){n=d[h];var u=n[l];n[l]=n[p];n[p]=u}}}this.nCachedObjects_=b},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=
arguments[g].uuid,l=d[k];if(void 0!==l)if(delete d[k],l<c){k=--c;var p=a[k],n=--b,u=a[n];d[p.uuid]=l;a[l]=p;d[u.uuid]=k;a[k]=u;a.pop();p=0;for(u=f;p!==u;++p){var q=e[p],r=q[n];q[l]=q[k];q[k]=r;q.pop()}}else for(n=--b,u=a[n],d[u.uuid]=l,a[l]=u,a.pop(),p=0,u=f;p!==u;++p)q=e[p],q[l]=q[n],q.pop()}this.nCachedObjects_=c},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,
l=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c)l[c]=new fa(h[c],a,b);return l},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(lf.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},
reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;
this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;
null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,
0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||
this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;e=this._propertyBindings;for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];
b*=d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===
d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c);b-=c*f;e+=Math.abs(f);var g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<
a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,
b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});pe.prototype=Object.assign(Object.create(xa.prototype),{constructor:pe,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,k=h[g];void 0===k&&(k={},h[g]=k);for(h=0;h!==e;++h){var l=
d[h],p=l.name,n=k[p];if(void 0===n){n=f[h];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,g,p));continue}n=new oe(fa.create(c,p,b&&b._propertyBindings[h].binding.parsedPath),l.ValueTypeName,l.getValueSize());++n.referenceCount;this._addInactiveBinding(n,g,p)}f[h]=n;a[h].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,
d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip=
{};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;
return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;c=this._actionsByClip;d=c[b];var e=
d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=
d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;
g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new ad(new Float32Array(2),
new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid;c="string"===typeof a?wa.findByName(c,a):a;a=null!==c?c.uuid:a;var e=this._actionsByClip[a],f=null;if(void 0!==e){f=
e.actionByRoot[d];if(void 0!==f)return f;f=e.knownActions[0];null===c&&(c=f._clip)}if(null===c)return null;b=new lf(this,c,b);this._bindAction(b,f);this._addInactiveAction(b,a,d);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?wa.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=
this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;
for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),
this._removeInactiveBinding(a)},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});Ld.prototype.clone=function(){return new Ld(void 0===this.value.clone?this.value:this.value.clone())};qe.prototype=Object.assign(Object.create(z.prototype),{constructor:qe,isInstancedBufferGeometry:!0,copy:function(a){z.prototype.copy.call(this,a);this.maxInstancedCount=a.maxInstancedCount;return this},clone:function(){return(new this.constructor).copy(this)}});
Object.defineProperties(re.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(re.prototype,{isInterleavedBufferAttribute:!0,setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+
3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+
0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}});Object.defineProperty(jc.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(jc.prototype,{isInterleavedBuffer:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=
void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=
a;return this}});se.prototype=Object.assign(Object.create(jc.prototype),{constructor:se,isInstancedInterleavedBuffer:!0,copy:function(a){jc.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});te.prototype=Object.assign(Object.create(M.prototype),{constructor:te,isInstancedBufferAttribute:!0,copy:function(a){M.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this}});Object.assign(mf.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,
b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];ue(a,this,c,b);c.sort(nf);return c},intersectObjects:function(a,
b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)ue(a[d],this,c,b);c.sort(nf);return c}});Object.assign(of.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=
0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});Object.assign(pf.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-
1E-6,this.phi));return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(S.clamp(a.y/this.radius,-1,1)));return this}});Object.assign(qf.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*
a.x+a.z*a.z);this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}});Object.assign(ve.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new C;return function(b,c){c=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(c);this.max.copy(b).add(c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new C;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new C;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new C).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<
this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new C).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new C;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)}});cd.prototype=Object.create(y.prototype);cd.prototype.constructor=cd;cd.prototype.isImmediateRenderObject=!0;dd.prototype=Object.create(U.prototype);dd.prototype.constructor=dd;dd.prototype.update=function(){var a=new p,b=new p,c=new ta;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=g.vertices,
k=g.faces,l=g=0,p=k.length;l<p;l++)for(var n=k[l],u=0,q=n.vertexNormals.length;u<q;u++){var r=n.vertexNormals[u];a.copy(h[n[d[u]]]).applyMatrix4(e);b.copy(r).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,u=g=0,q=d.count;u<q;u++)a.set(d.getX(u),d.getY(u),d.getZ(u)).applyMatrix4(e),b.set(h.getX(u),h.getY(u),h.getZ(u)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0}}();kc.prototype=Object.create(y.prototype);kc.prototype.constructor=kc;kc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};kc.prototype.update=function(){var a=new p,b=new p;return function(){this.light.updateMatrixWorld();var c=this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);
this.cone.lookAt(b.sub(a));void 0!==this.color?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}();lc.prototype=Object.create(U.prototype);lc.prototype.constructor=lc;lc.prototype.updateMatrixWorld=function(){var a=new p,b=new P,c=new P;return function(d){var e=this.bones,f=this.geometry,g=f.getAttribute("position");c.getInverse(this.root.matrixWorld);for(var h=0,k=0;h<e.length;h++){var l=e[h];l.parent&&l.parent.isBone&&(b.multiplyMatrices(c,l.matrixWorld),
a.setFromMatrixPosition(b),g.setXYZ(k,a.x,a.y,a.z),b.multiplyMatrices(c,l.parent.matrixWorld),a.setFromMatrixPosition(b),g.setXYZ(k+1,a.x,a.y,a.z),k+=2)}f.getAttribute("position").needsUpdate=!0;y.prototype.updateMatrixWorld.call(this,d)}}();mc.prototype=Object.create(ua.prototype);mc.prototype.constructor=mc;mc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};mc.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};
nc.prototype=Object.create(y.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};nc.prototype.update=function(){var a=.5*this.light.width,b=.5*this.light.height,c=this.line.geometry.attributes.position,d=c.array;d[0]=a;d[1]=-b;d[2]=0;d[3]=a;d[4]=b;d[5]=0;d[6]=-a;d[7]=b;d[8]=0;d[9]=-a;d[10]=-b;d[11]=0;d[12]=a;d[13]=-b;d[14]=0;c.needsUpdate=!0;void 0!==this.color?this.line.material.color.set(this.color):this.line.material.color.copy(this.light.color)};
oc.prototype=Object.create(y.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};oc.prototype.update=function(){var a=new p,b=new H,c=new H;return function(){var d=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var e=d.geometry.getAttribute("color");b.copy(this.light.color);c.copy(this.light.groundColor);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}e.needsUpdate=
!0}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate())}}();ed.prototype=Object.create(U.prototype);ed.prototype.constructor=ed;Md.prototype=Object.create(U.prototype);Md.prototype.constructor=Md;fd.prototype=Object.create(U.prototype);fd.prototype.constructor=fd;fd.prototype.update=function(){var a=new p,b=new p,c=new ta;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=
this.object.geometry,g=f.vertices;f=f.faces;for(var h=0,k=0,l=f.length;k<l;k++){var p=f[k],n=p.normal;a.copy(g[p.a]).add(g[p.b]).add(g[p.c]).divideScalar(3).applyMatrix4(d);b.copy(n).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0}}();pc.prototype=Object.create(y.prototype);pc.prototype.constructor=pc;pc.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();
this.targetLine.material.dispose()};pc.prototype.update=function(){var a=new p,b=new p,c=new p;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(c);
this.targetLine.scale.z=c.length()}}();gd.prototype=Object.create(U.prototype);gd.prototype.constructor=gd;gd.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,k=a.length;h<k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new p,e=new Qa;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,
1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();Db.prototype=Object.create(U.prototype);Db.prototype.constructor=Db;Db.prototype.update=function(){var a=new Va;return function(b){void 0!==b&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");
void 0!==this.object&&a.setFromObject(this.object);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();Db.prototype.setFromObject=function(a){this.object=a;this.update();return this};
hd.prototype=Object.create(U.prototype);hd.prototype.constructor=hd;hd.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),y.prototype.updateMatrixWorld.call(this,a))};id.prototype=Object.create(qa.prototype);id.prototype.constructor=id;id.prototype.updateMatrixWorld=function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.lookAt(this.plane.normal);
y.prototype.updateMatrixWorld.call(this,a)};var Nd,we;Eb.prototype=Object.create(y.prototype);Eb.prototype.constructor=Eb;Eb.prototype.setDirection=function(){var a=new p,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Eb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();
this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Eb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};jd.prototype=Object.create(U.prototype);jd.prototype.constructor=jd;K.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(K.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Object.assign($a.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new L,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new p(e.x,
e.y,e.z||0))}return b}});Object.assign(Pa.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");this.setFromPoints(a)}});sf.prototype=Object.create(da.prototype);tf.prototype=Object.create(da.prototype);xe.prototype=Object.create(da.prototype);Object.assign(xe.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});ed.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};lc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(hc.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
return Be.extractUrlBase(a)}});Object.assign(ve.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");
return this.getSize(a)}});Object.assign(Va.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});Kb.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(S,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
return S.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return S.ceilPowerOfTwo(a)}});Object.assign(ta.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(P.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;return function(){void 0===a&&(a=new p);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},
rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},
rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
return this.makePerspective(a,b,d,c,e,f)}});pa.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};ca.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(pb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(ib.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");return this.extractPoints(a)},
extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new hb(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new ub(this,a)}});Object.assign(C.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(p.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
return this.manhattanLength()}});Object.assign(X.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(L.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")}});
Object.assign(y.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(y.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Ac.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");
return this.levels}}});Object.defineProperty(Bc.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Object.defineProperty(K.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
this.arcLengthDivisions=a}});na.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ea.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},
shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(M.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
return this.array.length}}});Object.assign(z.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(z.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});
Object.defineProperties(Ld.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.defineProperties(O.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},
wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new H}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}}});Object.defineProperties(Ja.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Da.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(Xd.prototype,
{getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},
supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},
setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")}});Object.defineProperties(Xd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},
shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Oe.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},
renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});
Object.defineProperties(jb.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},
set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.defineProperties(Ve.prototype,{standing:{set:function(){console.warn("THREE.WebVRManager: .standing has been removed.")}}});ic.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
var b=this;(new je).load(a,function(a){b.setBuffer(a)});return this};ne.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};bd.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};l.WebGLRenderTargetCube=Gb;l.WebGLRenderTarget=jb;l.WebGLRenderer=Xd;l.ShaderLib=qb;l.UniformsLib=I;l.UniformsUtils=Ea;l.ShaderChunk=R;l.FogExp2=Mb;l.Fog=Nb;
l.Scene=pd;l.Sprite=zc;l.LOD=Ac;l.SkinnedMesh=rd;l.Skeleton=Bc;l.Bone=qd;l.Mesh=ua;l.LineSegments=U;l.LineLoop=sd;l.Line=qa;l.Points=Ob;l.Group=td;l.VideoTexture=Yd;l.DataTexture=kb;l.CompressedTexture=Pb;l.CubeTexture=bb;l.CanvasTexture=qc;l.DepthTexture=Cc;l.Texture=aa;l.CompressedTextureLoader=df;l.DataTextureLoader=be;l.CubeTextureLoader=ce;l.TextureLoader=vd;l.ObjectLoader=ff;l.MaterialLoader=Kd;l.BufferGeometryLoader=ee;l.DefaultLoadingManager=ra;l.LoadingManager=ae;l.JSONLoader=fe;l.ImageLoader=
Xc;l.ImageBitmapLoader=ge;l.FontLoader=gf;l.FileLoader=Ka;l.Loader=hc;l.LoaderUtils=Be;l.Cache=Fb;l.AudioLoader=je;l.SpotLightShadow=xd;l.SpotLight=yd;l.PointLight=zd;l.RectAreaLight=Dd;l.HemisphereLight=wd;l.DirectionalLightShadow=Ad;l.DirectionalLight=Bd;l.AmbientLight=Cd;l.LightShadow=Cb;l.Light=ea;l.StereoCamera=hf;l.PerspectiveCamera=na;l.OrthographicCamera=Ib;l.CubeCamera=bd;l.ArrayCamera=od;l.Camera=Qa;l.AudioListener=ke;l.PositionalAudio=me;l.AudioContext=le;l.AudioAnalyser=ne;l.Audio=ic;
l.VectorKeyframeTrack=gc;l.StringKeyframeTrack=Ed;l.QuaternionKeyframeTrack=$c;l.NumberKeyframeTrack=fc;l.ColorKeyframeTrack=Hd;l.BooleanKeyframeTrack=Fd;l.PropertyMixer=oe;l.PropertyBinding=fa;l.KeyframeTrack=la;l.AnimationUtils=W;l.AnimationObjectGroup=kf;l.AnimationMixer=pe;l.AnimationClip=wa;l.Uniform=Ld;l.InstancedBufferGeometry=qe;l.BufferGeometry=z;l.Geometry=L;l.InterleavedBufferAttribute=re;l.InstancedInterleavedBuffer=se;l.InterleavedBuffer=jc;l.InstancedBufferAttribute=te;l.Face3=Wa;l.Object3D=
y;l.Raycaster=mf;l.Layers=Sd;l.EventDispatcher=xa;l.Clock=of;l.QuaternionLinearInterpolant=Gd;l.LinearInterpolant=ad;l.DiscreteInterpolant=Jd;l.CubicInterpolant=Id;l.Interpolant=Ba;l.Triangle=Xa;l.Math=S;l.Spherical=pf;l.Cylindrical=qf;l.Plane=pa;l.Frustum=ld;l.Sphere=Ca;l.Ray=pb;l.Matrix4=P;l.Matrix3=ta;l.Box3=Va;l.Box2=ve;l.Line3=Kb;l.Euler=fb;l.Vector4=X;l.Vector3=p;l.Vector2=C;l.Quaternion=ca;l.Color=H;l.ImmediateRenderObject=cd;l.VertexNormalsHelper=dd;l.SpotLightHelper=kc;l.SkeletonHelper=lc;
l.PointLightHelper=mc;l.RectAreaLightHelper=nc;l.HemisphereLightHelper=oc;l.GridHelper=ed;l.PolarGridHelper=Md;l.FaceNormalsHelper=fd;l.DirectionalLightHelper=pc;l.CameraHelper=gd;l.BoxHelper=Db;l.Box3Helper=hd;l.PlaneHelper=id;l.ArrowHelper=Eb;l.AxesHelper=jd;l.Shape=ib;l.Path=Pa;l.ShapePath=he;l.Font=ie;l.CurvePath=$a;l.Curve=K;l.ShapeUtils=Ya;l.WebGLUtils=We;l.WireframeGeometry=Qb;l.ParametricGeometry=Dc;l.ParametricBufferGeometry=Rb;l.TetrahedronGeometry=Fc;l.TetrahedronBufferGeometry=Sb;l.OctahedronGeometry=
Gc;l.OctahedronBufferGeometry=rb;l.IcosahedronGeometry=Hc;l.IcosahedronBufferGeometry=Tb;l.DodecahedronGeometry=Ic;l.DodecahedronBufferGeometry=Ub;l.PolyhedronGeometry=Ec;l.PolyhedronBufferGeometry=va;l.TubeGeometry=Jc;l.TubeBufferGeometry=Vb;l.TorusKnotGeometry=Kc;l.TorusKnotBufferGeometry=Wb;l.TorusGeometry=Lc;l.TorusBufferGeometry=Xb;l.TextGeometry=Qc;l.TextBufferGeometry=Yb;l.SphereGeometry=Rc;l.SphereBufferGeometry=tb;l.RingGeometry=Sc;l.RingBufferGeometry=Zb;l.PlaneGeometry=xc;l.PlaneBufferGeometry=
ob;l.LatheGeometry=Tc;l.LatheBufferGeometry=$b;l.ShapeGeometry=ub;l.ShapeBufferGeometry=vb;l.ExtrudeGeometry=hb;l.ExtrudeBufferGeometry=Ia;l.EdgesGeometry=ac;l.ConeGeometry=Uc;l.ConeBufferGeometry=Vc;l.CylinderGeometry=wb;l.CylinderBufferGeometry=Za;l.CircleGeometry=Wc;l.CircleBufferGeometry=bc;l.BoxGeometry=Jb;l.BoxBufferGeometry=nb;l.ShadowMaterial=cc;l.SpriteMaterial=gb;l.RawShaderMaterial=dc;l.ShaderMaterial=Da;l.PointsMaterial=Ha;l.MeshPhysicalMaterial=xb;l.MeshStandardMaterial=Sa;l.MeshPhongMaterial=
Ja;l.MeshToonMaterial=yb;l.MeshNormalMaterial=zb;l.MeshLambertMaterial=Ab;l.MeshDepthMaterial=db;l.MeshDistanceMaterial=eb;l.MeshBasicMaterial=za;l.LineDashedMaterial=Bb;l.LineBasicMaterial=Y;l.Material=O;l.Float64BufferAttribute=wc;l.Float32BufferAttribute=D;l.Uint32BufferAttribute=mb;l.Int32BufferAttribute=vc;l.Uint16BufferAttribute=lb;l.Int16BufferAttribute=uc;l.Uint8ClampedBufferAttribute=tc;l.Uint8BufferAttribute=sc;l.Int8BufferAttribute=rc;l.BufferAttribute=M;l.ArcCurve=ec;l.CatmullRomCurve3=
da;l.CubicBezierCurve=La;l.CubicBezierCurve3=Ta;l.EllipseCurve=Aa;l.LineCurve=ka;l.LineCurve3=Ma;l.QuadraticBezierCurve=Na;l.QuadraticBezierCurve3=Ua;l.SplineCurve=Oa;l.REVISION="90";l.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};l.CullFaceNone=0;l.CullFaceBack=1;l.CullFaceFront=2;l.CullFaceFrontBack=3;l.FrontFaceDirectionCW=0;l.FrontFaceDirectionCCW=1;l.BasicShadowMap=0;l.PCFShadowMap=1;l.PCFSoftShadowMap=2;l.FrontSide=0;l.BackSide=1;l.DoubleSide=2;l.FlatShading=1;l.SmoothShading=2;l.NoColors=0;l.FaceColors=
1;l.VertexColors=2;l.NoBlending=0;l.NormalBlending=1;l.AdditiveBlending=2;l.SubtractiveBlending=3;l.MultiplyBlending=4;l.CustomBlending=5;l.AddEquation=100;l.SubtractEquation=101;l.ReverseSubtractEquation=102;l.MinEquation=103;l.MaxEquation=104;l.ZeroFactor=200;l.OneFactor=201;l.SrcColorFactor=202;l.OneMinusSrcColorFactor=203;l.SrcAlphaFactor=204;l.OneMinusSrcAlphaFactor=205;l.DstAlphaFactor=206;l.OneMinusDstAlphaFactor=207;l.DstColorFactor=208;l.OneMinusDstColorFactor=209;l.SrcAlphaSaturateFactor=
210;l.NeverDepth=0;l.AlwaysDepth=1;l.LessDepth=2;l.LessEqualDepth=3;l.EqualDepth=4;l.GreaterEqualDepth=5;l.GreaterDepth=6;l.NotEqualDepth=7;l.MultiplyOperation=0;l.MixOperation=1;l.AddOperation=2;l.NoToneMapping=0;l.LinearToneMapping=1;l.ReinhardToneMapping=2;l.Uncharted2ToneMapping=3;l.CineonToneMapping=4;l.UVMapping=300;l.CubeReflectionMapping=301;l.CubeRefractionMapping=302;l.EquirectangularReflectionMapping=303;l.EquirectangularRefractionMapping=304;l.SphericalReflectionMapping=305;l.CubeUVReflectionMapping=
306;l.CubeUVRefractionMapping=307;l.RepeatWrapping=1E3;l.ClampToEdgeWrapping=1001;l.MirroredRepeatWrapping=1002;l.NearestFilter=1003;l.NearestMipMapNearestFilter=1004;l.NearestMipMapLinearFilter=1005;l.LinearFilter=1006;l.LinearMipMapNearestFilter=1007;l.LinearMipMapLinearFilter=1008;l.UnsignedByteType=1009;l.ByteType=1010;l.ShortType=1011;l.UnsignedShortType=1012;l.IntType=1013;l.UnsignedIntType=1014;l.FloatType=1015;l.HalfFloatType=1016;l.UnsignedShort4444Type=1017;l.UnsignedShort5551Type=1018;
l.UnsignedShort565Type=1019;l.UnsignedInt248Type=1020;l.AlphaFormat=1021;l.RGBFormat=1022;l.RGBAFormat=1023;l.LuminanceFormat=1024;l.LuminanceAlphaFormat=1025;l.RGBEFormat=1023;l.DepthFormat=1026;l.DepthStencilFormat=1027;l.RGB_S3TC_DXT1_Format=33776;l.RGBA_S3TC_DXT1_Format=33777;l.RGBA_S3TC_DXT3_Format=33778;l.RGBA_S3TC_DXT5_Format=33779;l.RGB_PVRTC_4BPPV1_Format=35840;l.RGB_PVRTC_2BPPV1_Format=35841;l.RGBA_PVRTC_4BPPV1_Format=35842;l.RGBA_PVRTC_2BPPV1_Format=35843;l.RGB_ETC1_Format=36196;l.RGBA_ASTC_4x4_Format=
37808;l.RGBA_ASTC_5x4_Format=37809;l.RGBA_ASTC_5x5_Format=37810;l.RGBA_ASTC_6x5_Format=37811;l.RGBA_ASTC_6x6_Format=37812;l.RGBA_ASTC_8x5_Format=37813;l.RGBA_ASTC_8x6_Format=37814;l.RGBA_ASTC_8x8_Format=37815;l.RGBA_ASTC_10x5_Format=37816;l.RGBA_ASTC_10x6_Format=37817;l.RGBA_ASTC_10x8_Format=37818;l.RGBA_ASTC_10x10_Format=37819;l.RGBA_ASTC_12x10_Format=37820;l.RGBA_ASTC_12x12_Format=37821;l.LoopOnce=2200;l.LoopRepeat=2201;l.LoopPingPong=2202;l.InterpolateDiscrete=2300;l.InterpolateLinear=2301;l.InterpolateSmooth=
2302;l.ZeroCurvatureEnding=2400;l.ZeroSlopeEnding=2401;l.WrapAroundEnding=2402;l.TrianglesDrawMode=0;l.TriangleStripDrawMode=1;l.TriangleFanDrawMode=2;l.LinearEncoding=3E3;l.sRGBEncoding=3001;l.GammaEncoding=3007;l.RGBEEncoding=3002;l.LogLuvEncoding=3003;l.RGBM7Encoding=3004;l.RGBM16Encoding=3005;l.RGBDEncoding=3006;l.BasicDepthPacking=3200;l.RGBADepthPacking=3201;l.CubeGeometry=Jb;l.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
return new Wa(a,b,c,e,f,g)};l.LineStrip=0;l.LinePieces=1;l.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};l.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};l.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Ob(a,b)};l.Particle=
function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new zc(a)};l.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Ob(a,b)};l.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};l.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};l.ParticleSystemMaterial=
function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};l.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new p(a,b,c)};l.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new M(a,b)).setDynamic(!0)};l.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
return new rc(a,b)};l.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new sc(a,b)};l.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new tc(a,b)};l.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new uc(a,b)};l.Uint16Attribute=
function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new lb(a,b)};l.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new vc(a,b)};l.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new mb(a,b)};l.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
return new D(a,b)};l.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new wc(a,b)};l.ClosedSplineCurve3=sf;l.SplineCurve3=tf;l.Spline=xe;l.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new jd(a)};l.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new Db(a,b)};l.EdgesHelper=
function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new U(new ac(a.geometry),new Y({color:void 0!==b?b:16777215}))};l.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new U(new Qb(a.geometry),new Y({color:void 0!==b?b:16777215}))};l.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new Ka(a)};l.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
return new be(a)};l.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};l.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
var e=new vd;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new ce;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
l.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};l.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};l.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js")}};
l.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js")};Object.defineProperty(l,"__esModule",{value:!0})});

},{}],2:[function(require,module,exports){
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;

	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.25;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy( scope.target );
		scope.position0.copy( scope.object.position );
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			spherical.theta += sphericalDelta.theta;
			spherical.phi += sphericalDelta.phi;

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location
			scope.target.add( panOffset );

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

			}

			scale = 1;
			panOffset.set( 0, 0, 0 );

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		window.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan( deltaX, deltaY ) {

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			if ( scope.object.isPerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we actually don't use screenWidth, since perspective camera is fixed to screen height
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object.isOrthographicCamera ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyIn( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale /= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyOut( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale *= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		//console.log( 'handleMouseDownRotate' );

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		//console.log( 'handleMouseDownDolly' );

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		//console.log( 'handleMouseDownPan' );

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		//console.log( 'handleMouseMoveRotate' );

		rotateEnd.set( event.clientX, event.clientY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		//console.log( 'handleMouseMoveDolly' );

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyIn( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyOut( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		//console.log( 'handleMouseMovePan' );

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( event ) {

		// console.log( 'handleMouseUp' );

	}

	function handleMouseWheel( event ) {

		// console.log( 'handleMouseWheel' );

		if ( event.deltaY < 0 ) {

			dollyOut( getZoomScale() );

		} else if ( event.deltaY > 0 ) {

			dollyIn( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		//console.log( 'handleKeyDown' );

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				scope.update();
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				scope.update();
				break;

		}

	}

	function handleTouchStartRotate( event ) {

		//console.log( 'handleTouchStartRotate' );

		rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchStartDolly( event ) {

		//console.log( 'handleTouchStartDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyStart.set( 0, distance );

	}

	function handleTouchStartPan( event ) {

		//console.log( 'handleTouchStartPan' );

		panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

	}

	function handleTouchMoveRotate( event ) {

		//console.log( 'handleTouchMoveRotate' );

		rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
		rotateDelta.subVectors( rotateEnd, rotateStart );

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		// rotating across whole screen goes 360 degrees around
		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

		// rotating up and down along whole screen attempts to go 360, but limited to 180
		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleTouchMoveDolly( event ) {

		//console.log( 'handleTouchMoveDolly' );

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyEnd.set( 0, distance );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyOut( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyIn( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleTouchMovePan( event ) {

		//console.log( 'handleTouchMovePan' );

		panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		panDelta.subVectors( panEnd, panStart );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleTouchEnd( event ) {

		//console.log( 'handleTouchEnd' );

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( event.button ) {

			case scope.mouseButtons.ORBIT:

				if ( scope.enableRotate === false ) return;

				handleMouseDownRotate( event );

				state = STATE.ROTATE;

				break;

			case scope.mouseButtons.ZOOM:

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

				break;

			case scope.mouseButtons.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseDownPan( event );

				state = STATE.PAN;

				break;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( state ) {

			case STATE.ROTATE:

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

				break;

			case STATE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

				break;

			case STATE.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

				break;

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

		event.preventDefault();
		event.stopPropagation();

		scope.dispatchEvent( startEvent );

		handleMouseWheel( event );

		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;

				handleTouchStartRotate( event );

				state = STATE.TOUCH_ROTATE;

				break;

			case 2:	// two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;

				handleTouchStartDolly( event );

				state = STATE.TOUCH_DOLLY;

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;

				handleTouchStartPan( event );

				state = STATE.TOUCH_PAN;

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate

				if ( scope.enableRotate === false ) return;
				if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

				handleTouchMoveRotate( event );

				break;

			case 2: // two-fingered touch: dolly

				if ( scope.enableZoom === false ) return;
				if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

				handleTouchMoveDolly( event );

				break;

			case 3: // three-fingered touch: pan

				if ( scope.enablePan === false ) return;
				if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

				handleTouchMovePan( event );

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	window.addEventListener( 'keydown', onKeyDown, false );

	// force an update at start

	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties( THREE.OrbitControls.prototype, {

	center: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
			return this.target;

		}

	},

	// backward compatibility

	noZoom: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			return ! this.enableZoom;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
			this.enableZoom = ! value;

		}

	},

	noRotate: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			return ! this.enableRotate;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
			this.enableRotate = ! value;

		}

	},

	noPan: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			return ! this.enablePan;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
			this.enablePan = ! value;

		}

	},

	noKeys: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			return ! this.enableKeys;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
			this.enableKeys = ! value;

		}

	},

	staticMoving: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			return ! this.enableDamping;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
			this.enableDamping = ! value;

		}

	},

	dynamicDampingFactor: {

		get: function () {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			return this.dampingFactor;

		},

		set: function ( value ) {

			console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
			this.dampingFactor = value;

		}

	}

} );

},{}],3:[function(require,module,exports){
/*
 * Autodesk 3DS threee.js file loader, based on lib3ds.
 *
 * Loads geometry with uv and materials basic properties with texture support.
 *
 * @author @tentone
 * @author @timknip
 * @class TDSLoader
 * @constructor
 */

'use strict';

THREE.TDSLoader = function ( manager ) {

	this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
	this.debug = false;

	this.group = null;
	this.position = 0;

	this.materials = [];
	this.meshes = [];

};

THREE.TDSLoader.prototype = {

	constructor: THREE.TDSLoader,

	/**
	 * Load 3ds file from url.
	 *
	 * @method load
	 * @param {[type]} url URL for the file.
	 * @param {Function} onLoad onLoad callback, receives group Object3D as argument.
	 * @param {Function} onProgress onProgress callback.
	 * @param {Function} onError onError callback.
	 */
	load: function ( url, onLoad, onProgress, onError ) {

		var scope = this;

		var path = this.path !== undefined ? this.path : THREE.LoaderUtils.extractUrlBase( url );

		var loader = new THREE.FileLoader( this.manager );

		loader.setResponseType( 'arraybuffer' );

		loader.load( url, function ( data ) {

			onLoad( scope.parse( data, path ) );

		}, onProgress, onError );

	},

	/**
	 * Parse arraybuffer data and load 3ds file.
	 *
	 * @method parse
	 * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
	 * @param {String} path Path for external resources.
	 * @return {Object3D} Group loaded from 3ds file.
	 */
	parse: function ( arraybuffer, path ) {

		this.group = new THREE.Group();
		this.position = 0;
		this.materials = [];
		this.meshes = [];

		this.readFile( arraybuffer, path );

		for ( var i = 0; i < this.meshes.length; i ++ ) {

			this.group.add( this.meshes[ i ] );

		}

		return this.group;

	},

	/**
	 * Decode file content to read 3ds data.
	 *
	 * @method readFile
	 * @param {ArrayBuffer} arraybuffer Arraybuffer data to be loaded.
	 */
	readFile: function ( arraybuffer, path ) {

		var data = new DataView( arraybuffer );
		var chunk = this.readChunk( data );

		if ( chunk.id === MLIBMAGIC || chunk.id === CMAGIC || chunk.id === M3DMAGIC ) {

			var next = this.nextChunk( data, chunk );

			while ( next !== 0 ) {

				if ( next === M3D_VERSION ) {

					var version = this.readDWord( data );
					this.debugMessage( '3DS file version: ' + version );

				} else if ( next === MDATA ) {

					this.resetPosition( data );
					this.readMeshData( data, path );

				} else {

					this.debugMessage( 'Unknown main chunk: ' + next.toString( 16 ) );

				}

				next = this.nextChunk( data, chunk );

			}

		}

		this.debugMessage( 'Parsed ' + this.meshes.length + ' meshes' );

	},

	/**
	 * Read mesh data chunk.
	 *
	 * @method readMeshData
	 * @param {Dataview} data Dataview in use.
	 */
	readMeshData: function ( data, path ) {

		var chunk = this.readChunk( data );
		var next = this.nextChunk( data, chunk );

		while ( next !== 0 ) {

			if ( next === MESH_VERSION ) {

				var version = + this.readDWord( data );
				this.debugMessage( 'Mesh Version: ' + version );

			} else if ( next === MASTER_SCALE ) {

				var scale = this.readFloat( data );
				this.debugMessage( 'Master scale: ' + scale );
				this.group.scale.set( scale, scale, scale );

			} else if ( next === NAMED_OBJECT ) {

				this.debugMessage( 'Named Object' );
				this.resetPosition( data );
				this.readNamedObject( data );

			} else if ( next === MAT_ENTRY ) {

				this.debugMessage( 'Material' );
				this.resetPosition( data );
				this.readMaterialEntry( data, path );

			} else {

				this.debugMessage( 'Unknown MDATA chunk: ' + next.toString( 16 ) );

			}

			next = this.nextChunk( data, chunk );

		}

	},

	/**
	 * Read named object chunk.
	 *
	 * @method readNamedObject
	 * @param {Dataview} data Dataview in use.
	 */
	readNamedObject: function ( data ) {

		var chunk = this.readChunk( data );
		var name = this.readString( data, 64 );
		chunk.cur = this.position;

		var next = this.nextChunk( data, chunk );
		while ( next !== 0 ) {

			if ( next === N_TRI_OBJECT ) {

				this.resetPosition( data );
				var mesh = this.readMesh( data );
				mesh.name = name;
				this.meshes.push( mesh );

			} else {

				this.debugMessage( 'Unknown named object chunk: ' + next.toString( 16 ) );

			}

			next = this.nextChunk( data, chunk );

		}

		this.endChunk( chunk );

	},

	/**
	 * Read material data chunk and add it to the material list.
	 *
	 * @method readMaterialEntry
	 * @param {Dataview} data Dataview in use.
	 */
	readMaterialEntry: function ( data, path ) {

		var chunk = this.readChunk( data );
		var next = this.nextChunk( data, chunk );
		var material = new THREE.MeshPhongMaterial();

		while ( next !== 0 ) {

			if ( next === MAT_NAME ) {

				material.name = this.readString( data, 64 );
				this.debugMessage( '   Name: ' + material.name );

			} else if ( next === MAT_WIRE ) {

				this.debugMessage( '   Wireframe' );
				material.wireframe = true;

			} else if ( next === MAT_WIRE_SIZE ) {

				var value = this.readByte( data );
				material.wireframeLinewidth = value;
				this.debugMessage( '   Wireframe Thickness: ' + value );

			} else if ( next === MAT_TWO_SIDE ) {

				material.side = THREE.DoubleSide;
				this.debugMessage( '   DoubleSided' );

			} else if ( next === MAT_ADDITIVE ) {

				this.debugMessage( '   Additive Blending' );
				material.blending = THREE.AdditiveBlending;

			} else if ( next === MAT_DIFFUSE ) {

				this.debugMessage( '   Diffuse Color' );
				material.color = this.readColor( data );

			} else if ( next === MAT_SPECULAR ) {

				this.debugMessage( '   Specular Color' );
				material.specular = this.readColor( data );

			} else if ( next === MAT_AMBIENT ) {

				this.debugMessage( '   Ambient color' );
				material.color = this.readColor( data );

			} else if ( next === MAT_SHININESS ) {

				var shininess = this.readWord( data );
				material.shininess = shininess;
				this.debugMessage( '   Shininess : ' + shininess );

			} else if ( next === MAT_TEXMAP ) {

				this.debugMessage( '   ColorMap' );
				this.resetPosition( data );
				material.map = this.readMap( data, path );

			} else if ( next === MAT_BUMPMAP ) {

				this.debugMessage( '   BumpMap' );
				this.resetPosition( data );
				material.bumpMap = this.readMap( data, path );

			} else if ( next === MAT_OPACMAP ) {

				this.debugMessage( '   OpacityMap' );
				this.resetPosition( data );
				material.alphaMap = this.readMap( data, path );

			} else if ( next === MAT_SPECMAP ) {

				this.debugMessage( '   SpecularMap' );
				this.resetPosition( data );
				material.specularMap = this.readMap( data, path );

			} else {

				this.debugMessage( '   Unknown material chunk: ' + next.toString( 16 ) );

			}

			next = this.nextChunk( data, chunk );

		}

		this.endChunk( chunk );

		this.materials[ material.name ] = material;

	},

	/**
	 * Read mesh data chunk.
	 *
	 * @method readMesh
	 * @param {Dataview} data Dataview in use.
	 */
	readMesh: function ( data ) {

		var chunk = this.readChunk( data );
		var next = this.nextChunk( data, chunk );

		var useBufferGeometry = false;
		var geometry = null;
		var uvs = [];

		if ( useBufferGeometry ) {

			geometry = new THREE.BufferGeometry();

		}	else {

			geometry = new THREE.Geometry();

		}

		var material = new THREE.MeshPhongMaterial();
		var mesh = new THREE.Mesh( geometry, material );
		mesh.name = 'mesh';

		while ( next !== 0 ) {

			if ( next === POINT_ARRAY ) {

				var points = this.readWord( data );

				this.debugMessage( '   Vertex: ' + points );

				//BufferGeometry

				if ( useBufferGeometry )	{

					var vertices = [];
					for ( var i = 0; i < points; i ++ )		{

						vertices.push( this.readFloat( data ) );
						vertices.push( this.readFloat( data ) );
						vertices.push( this.readFloat( data ) );

					}

					geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( vertices ), 3 ) );

				} else	{ //Geometry

					for ( var i = 0; i < points; i ++ )		{

						geometry.vertices.push( new THREE.Vector3( this.readFloat( data ), this.readFloat( data ), this.readFloat( data ) ) );

					}

				}

			} else if ( next === FACE_ARRAY ) {

				this.resetPosition( data );
				this.readFaceArray( data, mesh );

			} else if ( next === TEX_VERTS ) {

				var texels = this.readWord( data );

				this.debugMessage( '   UV: ' + texels );

				//BufferGeometry

				if ( useBufferGeometry )	{

					var uvs = [];
					for ( var i = 0; i < texels; i ++ )		{

						uvs.push( this.readFloat( data ) );
						uvs.push( this.readFloat( data ) );

					}
					geometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( uvs ), 2 ) );

				} else { //Geometry

					uvs = [];
					for ( var i = 0; i < texels; i ++ )		{

						uvs.push( new THREE.Vector2( this.readFloat( data ), this.readFloat( data ) ) );

					}

				}

			} else if ( next === MESH_MATRIX ) {

				this.debugMessage( '   Tranformation Matrix (TODO)' );

				var values = [];
				for ( var i = 0; i < 12; i ++ ) {

					values[ i ] = this.readFloat( data );

				}

				var matrix = new THREE.Matrix4();

				//X Line
				matrix.elements[ 0 ] = values[ 0 ];
				matrix.elements[ 1 ] = values[ 6 ];
				matrix.elements[ 2 ] = values[ 3 ];
				matrix.elements[ 3 ] = values[ 9 ];

				//Y Line
				matrix.elements[ 4 ] = values[ 2 ];
				matrix.elements[ 5 ] = values[ 8 ];
				matrix.elements[ 6 ] = values[ 5 ];
				matrix.elements[ 7 ] = values[ 11 ];

				//Z Line
				matrix.elements[ 8 ] = values[ 1 ];
				matrix.elements[ 9 ] = values[ 7 ];
				matrix.elements[ 10 ] = values[ 4 ];
				matrix.elements[ 11 ] = values[ 10 ];

				//W Line
				matrix.elements[ 12 ] = 0;
				matrix.elements[ 13 ] = 0;
				matrix.elements[ 14 ] = 0;
				matrix.elements[ 15 ] = 1;

				matrix.transpose();

				var inverse = new THREE.Matrix4();
				inverse.getInverse( matrix, true );
				geometry.applyMatrix( inverse );

				matrix.decompose( mesh.position, mesh.quaternion, mesh.scale );

			} else {

				this.debugMessage( '   Unknown mesh chunk: ' + next.toString( 16 ) );

			}

			next = this.nextChunk( data, chunk );

		}

		this.endChunk( chunk );

		if ( ! useBufferGeometry ) {

			//geometry.faceVertexUvs[0][faceIndex][vertexIndex]

			if ( uvs.length > 0 ) {

				var faceUV = [];

				for ( var i = 0; i < geometry.faces.length; i ++ ) {

					faceUV.push( [ uvs[ geometry.faces[ i ].a ], uvs[ geometry.faces[ i ].b ], uvs[ geometry.faces[ i ].c ] ] );

				}

				geometry.faceVertexUvs[ 0 ] = faceUV;

			}

			geometry.computeVertexNormals();

		}

		return mesh;

	},

	/**
	 * Read face array data chunk.
	 *
	 * @method readFaceArray
	 * @param {Dataview} data Dataview in use.
	 * @param {Mesh} mesh Mesh to be filled with the data read.
	 */
	readFaceArray: function ( data, mesh ) {

		var chunk = this.readChunk( data );
		var faces = this.readWord( data );

		this.debugMessage( '   Faces: ' + faces );

		for ( var i = 0; i < faces; ++ i ) {

			mesh.geometry.faces.push( new THREE.Face3( this.readWord( data ), this.readWord( data ), this.readWord( data ) ) );

			var visibility = this.readWord( data );

		}

		//The rest of the FACE_ARRAY chunk is subchunks

		while ( this.position < chunk.end ) {

			var chunk = this.readChunk( data );

			if ( chunk.id === MSH_MAT_GROUP ) {

				this.debugMessage( '      Material Group' );

				this.resetPosition( data );

				var group = this.readMaterialGroup( data );

				var material = this.materials[ group.name ];

				if ( material !== undefined )	{

					mesh.material = material;

					if ( material.name === '' )		{

						material.name = mesh.name;

					}

				}

			} else {

				this.debugMessage( '      Unknown face array chunk: ' + chunk.toString( 16 ) );

			}

			this.endChunk( chunk );

		}

		this.endChunk( chunk );

	},

	/**
	 * Read texture map data chunk.
	 *
	 * @method readMap
	 * @param {Dataview} data Dataview in use.
	 * @return {Texture} Texture read from this data chunk.
	 */
	readMap: function ( data, path ) {

		var chunk = this.readChunk( data );
		var next = this.nextChunk( data, chunk );
		var texture = {};

		var loader = new THREE.TextureLoader( this.manager );
		loader.setPath( path );

		while ( next !== 0 ) {

			if ( next === MAT_MAPNAME ) {

				var name = this.readString( data, 128 );
				texture = loader.load( name );

				this.debugMessage( '      File: ' + path + name );

			} else if ( next === MAT_MAP_UOFFSET ) {

				texture.offset.x = this.readFloat( data );
				this.debugMessage( '      OffsetX: ' + texture.offset.x );

			} else if ( next === MAT_MAP_VOFFSET ) {

				texture.offset.y = this.readFloat( data );
				this.debugMessage( '      OffsetY: ' + texture.offset.y );

			} else if ( next === MAT_MAP_USCALE ) {

				texture.repeat.x = this.readFloat( data );
				this.debugMessage( '      RepeatX: ' + texture.repeat.x );

			} else if ( next === MAT_MAP_VSCALE ) {

				texture.repeat.y = this.readFloat( data );
				this.debugMessage( '      RepeatY: ' + texture.repeat.y );

			} else {

				this.debugMessage( '      Unknown map chunk: ' + next.toString( 16 ) );

			}

			next = this.nextChunk( data, chunk );

		}

		this.endChunk( chunk );

		return texture;

	},

	/**
	 * Read material group data chunk.
	 *
	 * @method readMaterialGroup
	 * @param {Dataview} data Dataview in use.
	 * @return {Object} Object with name and index of the object.
	 */
	readMaterialGroup: function ( data ) {

		var chunk = this.readChunk( data );
		var name = this.readString( data, 64 );
		var numFaces = this.readWord( data );

		this.debugMessage( '         Name: ' + name );
		this.debugMessage( '         Faces: ' + numFaces );

		var index = [];
		for ( var i = 0; i < numFaces; ++ i ) {

			index.push( this.readWord( data ) );

		}

		return { name: name, index: index };

	},

	/**
	 * Read a color value.
	 *
	 * @method readColor
	 * @param {DataView} data Dataview.
	 * @return {Color} Color value read..
	 */
	readColor: function ( data ) {

		var chunk = this.readChunk( data );
		var color = new THREE.Color();

		if ( chunk.id === COLOR_24 || chunk.id === LIN_COLOR_24 ) {

			var r = this.readByte( data );
			var g = this.readByte( data );
			var b = this.readByte( data );

			color.setRGB( r / 255, g / 255, b / 255 );

			this.debugMessage( '      Color: ' + color.r + ', ' + color.g + ', ' + color.b );

		}	else if ( chunk.id === COLOR_F || chunk.id === LIN_COLOR_F ) {

			var r = this.readFloat( data );
			var g = this.readFloat( data );
			var b = this.readFloat( data );

			color.setRGB( r, g, b );

			this.debugMessage( '      Color: ' + color.r + ', ' + color.g + ', ' + color.b );

		}	else {

			this.debugMessage( '      Unknown color chunk: ' + chunk.toString( 16 ) );

		}

		this.endChunk( chunk );
		return color;

	},

	/**
	 * Read next chunk of data.
	 *
	 * @method readChunk
	 * @param {DataView} data Dataview.
	 * @return {Object} Chunk of data read.
	 */
	readChunk: function ( data ) {

		var chunk = {};

		chunk.cur = this.position;
		chunk.id = this.readWord( data );
		chunk.size = this.readDWord( data );
		chunk.end = chunk.cur + chunk.size;
		chunk.cur += 6;

		return chunk;

	},

	/**
	 * Set position to the end of the current chunk of data.
	 *
	 * @method endChunk
	 * @param {Object} chunk Data chunk.
	 */
	endChunk: function ( chunk ) {

		this.position = chunk.end;

	},

	/**
	 * Move to the next data chunk.
	 *
	 * @method nextChunk
	 * @param {DataView} data Dataview.
	 * @param {Object} chunk Data chunk.
	 */
	nextChunk: function ( data, chunk ) {

		if ( chunk.cur >= chunk.end ) {

			return 0;

		}

		this.position = chunk.cur;

		try {

			var next = this.readChunk( data );
			chunk.cur += next.size;
			return next.id;

		}	catch ( e ) {

			this.debugMessage( 'Unable to read chunk at ' + this.position );
			return 0;

		}

	},

	/**
	 * Reset dataview position.
	 *
	 * @method resetPosition
	 * @param {DataView} data Dataview.
	 */
	resetPosition: function () {

		this.position -= 6;

	},

	/**
	 * Read byte value.
	 *
	 * @method readByte
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readByte: function ( data ) {

		var v = data.getUint8( this.position, true );
		this.position += 1;
		return v;

	},

	/**
	 * Read 32 bit float value.
	 *
	 * @method readFloat
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readFloat: function ( data ) {

		try {

			var v = data.getFloat32( this.position, true );
			this.position += 4;
			return v;

		}	catch ( e ) {

			this.debugMessage( e + ' ' + this.position + ' ' + data.byteLength );

		}

	},

	/**
	 * Read 32 bit signed integer value.
	 *
	 * @method readInt
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readInt: function ( data ) {

		var v = data.getInt32( this.position, true );
		this.position += 4;
		return v;

	},

	/**
	 * Read 16 bit signed integer value.
	 *
	 * @method readShort
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readShort: function ( data ) {

		var v = data.getInt16( this.position, true );
		this.position += 2;
		return v;

	},

	/**
	 * Read 64 bit unsigned integer value.
	 *
	 * @method readDWord
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readDWord: function ( data ) {

		var v = data.getUint32( this.position, true );
		this.position += 4;
		return v;

	},

	/**
	 * Read 32 bit unsigned integer value.
	 *
	 * @method readWord
	 * @param {DataView} data Dataview to read data from.
	 * @return {Number} Data read from the dataview.
	 */
	readWord: function ( data ) {

		var v = data.getUint16( this.position, true );
		this.position += 2;
		return v;

	},

	/**
	 * Read string value.
	 *
	 * @method readString
	 * @param {DataView} data Dataview to read data from.
	 * @param {Number} maxLength Max size of the string to be read.
	 * @return {String} Data read from the dataview.
	 */
	readString: function ( data, maxLength ) {

		var s = '';

		for ( var i = 0; i < maxLength; i ++ ) {

			var c = this.readByte( data );
			if ( ! c ) {

				break;

			}

			s += String.fromCharCode( c );

		}

		return s;

	},

	/**
	 * Set resource path used to determine the file path to attached resources.
	 *
	 * @method setPath
	 * @param {String} path Path to resources.
	 * @return Self for chaining.
	 */
	setPath: function ( path ) {

		this.path = path;

		return this;

	},

	/**
	 * Print debug message to the console.
	 *
	 * Is controlled by a flag to show or hide debug messages.
	 *
	 * @method debugMessage
	 * @param {Object} message Debug message to print to the console.
	 */
	debugMessage: function ( message ) {

		if ( this.debug ) {

			console.log( message );

		}

	}
};

var NULL_CHUNK = 0x0000;
var M3DMAGIC = 0x4D4D;
var SMAGIC = 0x2D2D;
var LMAGIC = 0x2D3D;
var MLIBMAGIC = 0x3DAA;
var MATMAGIC = 0x3DFF;
var CMAGIC = 0xC23D;
var M3D_VERSION = 0x0002;
var M3D_KFVERSION = 0x0005;
var COLOR_F = 0x0010;
var COLOR_24 = 0x0011;
var LIN_COLOR_24 = 0x0012;
var LIN_COLOR_F = 0x0013;
var INT_PERCENTAGE = 0x0030;
var FLOAT_PERCENTAGE = 0x0031;
var MDATA = 0x3D3D;
var MESH_VERSION = 0x3D3E;
var MASTER_SCALE = 0x0100;
var LO_SHADOW_BIAS = 0x1400;
var HI_SHADOW_BIAS = 0x1410;
var SHADOW_MAP_SIZE = 0x1420;
var SHADOW_SAMPLES = 0x1430;
var SHADOW_RANGE = 0x1440;
var SHADOW_FILTER = 0x1450;
var RAY_BIAS = 0x1460;
var O_CONSTS = 0x1500;
var AMBIENT_LIGHT = 0x2100;
var BIT_MAP = 0x1100;
var SOLID_BGND = 0x1200;
var V_GRADIENT = 0x1300;
var USE_BIT_MAP = 0x1101;
var USE_SOLID_BGND = 0x1201;
var USE_V_GRADIENT = 0x1301;
var FOG = 0x2200;
var FOG_BGND = 0x2210;
var LAYER_FOG = 0x2302;
var DISTANCE_CUE = 0x2300;
var DCUE_BGND = 0x2310;
var USE_FOG = 0x2201;
var USE_LAYER_FOG = 0x2303;
var USE_DISTANCE_CUE = 0x2301;
var MAT_ENTRY = 0xAFFF;
var MAT_NAME = 0xA000;
var MAT_AMBIENT = 0xA010;
var MAT_DIFFUSE = 0xA020;
var MAT_SPECULAR = 0xA030;
var MAT_SHININESS = 0xA040;
var MAT_SHIN2PCT = 0xA041;
var MAT_TRANSPARENCY = 0xA050;
var MAT_XPFALL = 0xA052;
var MAT_USE_XPFALL = 0xA240;
var MAT_REFBLUR = 0xA053;
var MAT_SHADING = 0xA100;
var MAT_USE_REFBLUR = 0xA250;
var MAT_SELF_ILLUM = 0xA084;
var MAT_TWO_SIDE = 0xA081;
var MAT_DECAL = 0xA082;
var MAT_ADDITIVE = 0xA083;
var MAT_WIRE = 0xA085;
var MAT_FACEMAP = 0xA088;
var MAT_TRANSFALLOFF_IN = 0xA08A;
var MAT_PHONGSOFT = 0xA08C;
var MAT_WIREABS = 0xA08E;
var MAT_WIRE_SIZE = 0xA087;
var MAT_TEXMAP = 0xA200;
var MAT_SXP_TEXT_DATA = 0xA320;
var MAT_TEXMASK = 0xA33E;
var MAT_SXP_TEXTMASK_DATA = 0xA32A;
var MAT_TEX2MAP = 0xA33A;
var MAT_SXP_TEXT2_DATA = 0xA321;
var MAT_TEX2MASK = 0xA340;
var MAT_SXP_TEXT2MASK_DATA = 0xA32C;
var MAT_OPACMAP = 0xA210;
var MAT_SXP_OPAC_DATA = 0xA322;
var MAT_OPACMASK = 0xA342;
var MAT_SXP_OPACMASK_DATA = 0xA32E;
var MAT_BUMPMAP = 0xA230;
var MAT_SXP_BUMP_DATA = 0xA324;
var MAT_BUMPMASK = 0xA344;
var MAT_SXP_BUMPMASK_DATA = 0xA330;
var MAT_SPECMAP = 0xA204;
var MAT_SXP_SPEC_DATA = 0xA325;
var MAT_SPECMASK = 0xA348;
var MAT_SXP_SPECMASK_DATA = 0xA332;
var MAT_SHINMAP = 0xA33C;
var MAT_SXP_SHIN_DATA = 0xA326;
var MAT_SHINMASK = 0xA346;
var MAT_SXP_SHINMASK_DATA = 0xA334;
var MAT_SELFIMAP = 0xA33D;
var MAT_SXP_SELFI_DATA = 0xA328;
var MAT_SELFIMASK = 0xA34A;
var MAT_SXP_SELFIMASK_DATA = 0xA336;
var MAT_REFLMAP = 0xA220;
var MAT_REFLMASK = 0xA34C;
var MAT_SXP_REFLMASK_DATA = 0xA338;
var MAT_ACUBIC = 0xA310;
var MAT_MAPNAME = 0xA300;
var MAT_MAP_TILING = 0xA351;
var MAT_MAP_TEXBLUR = 0xA353;
var MAT_MAP_USCALE = 0xA354;
var MAT_MAP_VSCALE = 0xA356;
var MAT_MAP_UOFFSET = 0xA358;
var MAT_MAP_VOFFSET = 0xA35A;
var MAT_MAP_ANG = 0xA35C;
var MAT_MAP_COL1 = 0xA360;
var MAT_MAP_COL2 = 0xA362;
var MAT_MAP_RCOL = 0xA364;
var MAT_MAP_GCOL = 0xA366;
var MAT_MAP_BCOL = 0xA368;
var NAMED_OBJECT = 0x4000;
var N_DIRECT_LIGHT = 0x4600;
var DL_OFF = 0x4620;
var DL_OUTER_RANGE = 0x465A;
var DL_INNER_RANGE = 0x4659;
var DL_MULTIPLIER = 0x465B;
var DL_EXCLUDE = 0x4654;
var DL_ATTENUATE = 0x4625;
var DL_SPOTLIGHT = 0x4610;
var DL_SPOT_ROLL = 0x4656;
var DL_SHADOWED = 0x4630;
var DL_LOCAL_SHADOW2 = 0x4641;
var DL_SEE_CONE = 0x4650;
var DL_SPOT_RECTANGULAR = 0x4651;
var DL_SPOT_ASPECT = 0x4657;
var DL_SPOT_PROJECTOR = 0x4653;
var DL_SPOT_OVERSHOOT = 0x4652;
var DL_RAY_BIAS = 0x4658;
var DL_RAYSHAD = 0x4627;
var N_CAMERA = 0x4700;
var CAM_SEE_CONE = 0x4710;
var CAM_RANGES = 0x4720;
var OBJ_HIDDEN = 0x4010;
var OBJ_VIS_LOFTER = 0x4011;
var OBJ_DOESNT_CAST = 0x4012;
var OBJ_DONT_RECVSHADOW = 0x4017;
var OBJ_MATTE = 0x4013;
var OBJ_FAST = 0x4014;
var OBJ_PROCEDURAL = 0x4015;
var OBJ_FROZEN = 0x4016;
var N_TRI_OBJECT = 0x4100;
var POINT_ARRAY = 0x4110;
var POINT_FLAG_ARRAY = 0x4111;
var FACE_ARRAY = 0x4120;
var MSH_MAT_GROUP = 0x4130;
var SMOOTH_GROUP = 0x4150;
var MSH_BOXMAP = 0x4190;
var TEX_VERTS = 0x4140;
var MESH_MATRIX = 0x4160;
var MESH_COLOR = 0x4165;
var MESH_TEXTURE_INFO = 0x4170;
var KFDATA = 0xB000;
var KFHDR = 0xB00A;
var KFSEG = 0xB008;
var KFCURTIME = 0xB009;
var AMBIENT_NODE_TAG = 0xB001;
var OBJECT_NODE_TAG = 0xB002;
var CAMERA_NODE_TAG = 0xB003;
var TARGET_NODE_TAG = 0xB004;
var LIGHT_NODE_TAG = 0xB005;
var L_TARGET_NODE_TAG = 0xB006;
var SPOTLIGHT_NODE_TAG = 0xB007;
var NODE_ID = 0xB030;
var NODE_HDR = 0xB010;
var PIVOT = 0xB013;
var INSTANCE_NAME = 0xB011;
var MORPH_SMOOTH = 0xB015;
var BOUNDBOX = 0xB014;
var POS_TRACK_TAG = 0xB020;
var COL_TRACK_TAG = 0xB025;
var ROT_TRACK_TAG = 0xB021;
var SCL_TRACK_TAG = 0xB022;
var MORPH_TRACK_TAG = 0xB026;
var FOV_TRACK_TAG = 0xB023;
var ROLL_TRACK_TAG = 0xB024;
var HOT_TRACK_TAG = 0xB027;
var FALL_TRACK_TAG = 0xB028;
var HIDE_TRACK_TAG = 0xB029;
var POLY_2D = 0x5000;
var SHAPE_OK = 0x5010;
var SHAPE_NOT_OK = 0x5011;
var SHAPE_HOOK = 0x5020;
var PATH_3D = 0x6000;
var PATH_MATRIX = 0x6005;
var SHAPE_2D = 0x6010;
var M_SCALE = 0x6020;
var M_TWIST = 0x6030;
var M_TEETER = 0x6040;
var M_FIT = 0x6050;
var M_BEVEL = 0x6060;
var XZ_CURVE = 0x6070;
var YZ_CURVE = 0x6080;
var INTERPCT = 0x6090;
var DEFORM_LIMIT = 0x60A0;
var USE_CONTOUR = 0x6100;
var USE_TWEEN = 0x6110;
var USE_SCALE = 0x6120;
var USE_TWIST = 0x6130;
var USE_TEETER = 0x6140;
var USE_FIT = 0x6150;
var USE_BEVEL = 0x6160;
var DEFAULT_VIEW = 0x3000;
var VIEW_TOP = 0x3010;
var VIEW_BOTTOM = 0x3020;
var VIEW_LEFT = 0x3030;
var VIEW_RIGHT = 0x3040;
var VIEW_FRONT = 0x3050;
var VIEW_BACK = 0x3060;
var VIEW_USER = 0x3070;
var VIEW_CAMERA = 0x3080;
var VIEW_WINDOW = 0x3090;
var VIEWPORT_LAYOUT_OLD = 0x7000;
var VIEWPORT_DATA_OLD = 0x7010;
var VIEWPORT_LAYOUT = 0x7001;
var VIEWPORT_DATA = 0x7011;
var VIEWPORT_DATA_3 = 0x7012;
var VIEWPORT_SIZE = 0x7020;
var NETWORK_VIEW = 0x7030;

},{}],4:[function(require,module,exports){
THREE = require('three/build/three.min.js');
require('three/examples/js/controls/OrbitControls.js');
require('three/examples/js/loaders/TDSLoader.js');


},{"three/build/three.min.js":1,"three/examples/js/controls/OrbitControls.js":2,"three/examples/js/loaders/TDSLoader.js":3}]},{},[4]);
