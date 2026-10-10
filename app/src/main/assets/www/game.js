(()=>{var mh="170";var Ap=0,Bu=1,Rp=2;var ld=1,gh=2,ui=3,Gn=0,Gt=1,qt=2,Vn=0,Os=1,Ui=2,zu=3,ku=4,Cp=5,is=100,Ip=101,Pp=102,Lp=103,Dp=104,Up=200,Np=201,Fp=202,Op=203,Yc=204,Zc=205,Bp=206,zp=207,kp=208,Hp=209,Vp=210,Gp=211,Wp=212,Xp=213,qp=214,Kc=0,Jc=1,$c=2,Hs=3,jc=4,Qc=5,el=6,tl=7,hd=0,Yp=1,Zp=2,Li=0,xh=1,_h=2,vh=3,Zr=4,Kp=5,yh=6,Mh=7,Hu="attached",Jp="detached",ud=300,Vs=301,Gs=302,nl=303,il=304,Pa=306,gi=1e3,di=1001,os=1002,Wt=1003,bh=1004;var Us=1005;var tn=1006,Cr=1007;var Hn=1008;var vn=1009,fd=1010,dd=1011,Nr=1012,Sh=1013,as=1014,Nn=1015,fn=1016,wh=1017,Eh=1018,Ws=1020,pd=35902,md=1021,gd=1022,xn=1023,xd=1024,_d=1025,Bs=1026,Xs=1027,Th=1028,Ah=1029,vd=1030,Rh=1031;var Ch=1033,qo=33776,Yo=33777,Zo=33778,Ko=33779,sl=35840,rl=35841,ol=35842,al=35843,cl=36196,ll=37492,hl=37496,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,vl=37816,yl=37817,Ml=37818,bl=37819,Sl=37820,wl=37821,Jo=36492,El=36494,Tl=36495,yd=36283,Al=36284,Rl=36285,Cl=36286;var qs=2300,Ys=2301,fc=2302,Vu=2400,Gu=2401,Wu=2402,$p=2500;var Md=0,La=1,Kr=2,jp=3200,Qp=3201;var bd=0,em=1,Ii="",bt="srgb",Xt="srgb-linear",Da="linear",lt="srgb";var vs=7680;var Xu=519,tm=512,nm=513,im=514,Sd=515,sm=516,rm=517,om=518,am=519,Il=35044;var qu="300 es",pi=2e3,$o=2001,Ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,Ir=Math.PI/180,Zs=180/Math.PI;function _n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function Ih(i,e){return(i%e+e)%e}function cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lm(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function hm(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function um(i,e=1){return e-Math.abs(Ih(i,e*2)-e)}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mm(i,e){return i+Math.random()*(e-i)}function gm(i){return i*(.5-Math.random())}function xm(i){i!==void 0&&(Yu=i);let e=Yu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _m(i){return i*Ir}function vm(i){return i*Zs}function ym(i){return(i&i-1)===0&&i!==0}function Mm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Jr={DEG2RAD:Ir,RAD2DEG:Zs,generateUUID:_n,clamp:Vt,euclideanModulo:Ih,mapLinear:cm,inverseLerp:lm,lerp:Pr,damp:hm,pingpong:um,smoothstep:fm,smootherstep:dm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:xm,degToRad:_m,radToDeg:vm,isPowerOfTwo:ym,ceilPowerOfTwo:Mm,floorPowerOfTwo:bm,setQuaternionFromProperEuler:Sm,normalize:ut,denormalize:Un},Q=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],g=s[0],p=s[3],m=s[6],v=s[1],y=s[4],_=s[7],A=s[2],E=s[5],C=s[8];return r[0]=o*g+a*v+c*A,r[3]=o*p+a*y+c*E,r[6]=o*m+a*_+c*C,r[1]=l*g+h*v+f*A,r[4]=l*p+h*y+f*E,r[7]=l*m+h*_+f*C,r[2]=u*g+d*v+x*A,r[5]=u*p+d*y+x*E,r[8]=u*m+d*_+x*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=f*g,e[1]=(s*l-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=u*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dc=new Ye;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wm(){let i=Fr("canvas");return i.style.display="block",i}var Zu={};function Ar(i){i in Zu||(Zu[i]=!0,console.warn(i))}function Em(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Tm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Am(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=mi(i.r),i.g=mi(i.g),i.b=mi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=zs(i.r),i.g=zs(i.g),i.b=zs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ii?Da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ku=[.64,.33,.3,.6,.15,.06],Ju=[.2126,.7152,.0722],$u=[.3127,.329],ju=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Xt]:{primaries:Ku,whitePoint:$u,transfer:Da,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:Ju,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:Ku,whitePoint:$u,transfer:lt,toXYZ:ju,fromXYZ:Qu,luminanceCoefficients:Ju,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});var ys,Pl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Fr("canvas")),ys.width=e.width,ys.height=e.height;let n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rm=0,jo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=_n(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pc(s[o].image)):r.push(pc(s[o]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cm=0,Bt=class i extends Ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=tn,o=Hn,a=xn,c=vn,l=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=_n(),this.name="",this.source=new jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ud;Bt.DEFAULT_ANISOTROPY=1;var st=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],x=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(x+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(d+1)/2,A=(m+1)/2,E=(h+u)/4,C=(f+g)/4,I=(x+p)/4;return y>_&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=C/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=I/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=I/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-x)*(p-x)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-x)/v,this.y=(f-g)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new jo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qo=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dl=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=x,e[t+3]=g;return}if(f!==g||c!==u||l!==d||h!==x){let p=1-a,m=c*u+l*d+h*x+f*g,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){let A=Math.sqrt(y),E=Math.atan2(A,m*v);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A}let _=a*v;if(c=c*p+u*_,l=l*p+d*_,h=h*p+x*_,f=f*p+g*_,p===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=A,l*=A,h*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],x=r[o+3];return e[t]=a*x+h*f+c*d-l*u,e[t+1]=c*x+h*u+l*f-a*d,e[t+2]=l*x+h*d+a*u-c*f,e[t+3]=h*x-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f+u*d*x;break;case"YZX":this._x=u*h*f+l*d*x,this._y=l*d*f+u*h*x,this._z=l*h*x-u*d*f,this._w=l*h*f-u*d*x;break;case"XZY":this._x=u*h*f-l*d*x,this._y=l*d*f-u*h*x,this._z=l*h*x+u*d*f,this._w=l*h*f+u*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mc=new L,ef=new Qt,nn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(e.matrixWorld),this.union(go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),xo.subVectors(this.max,vr),Ms.subVectors(e.a,vr),bs.subVectors(e.b,vr),Ss.subVectors(e.c,vr),wi.subVectors(bs,Ms),Ei.subVectors(Ss,bs),Ji.subVectors(Ms,Ss);let t=[0,-wi.z,wi.y,0,-Ei.z,Ei.y,0,-Ji.z,Ji.y,wi.z,0,-wi.x,Ei.z,0,-Ei.x,Ji.z,0,-Ji.x,-wi.y,wi.x,0,-Ei.y,Ei.x,0,-Ji.y,Ji.x,0];return!gc(t,Ms,bs,Ss,xo)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Ms,bs,Ss,xo))?!1:(_o.crossVectors(wi,Ei),t=[_o.x,_o.y,_o.z],gc(t,Ms,bs,Ss,xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ri=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,go=new nn,Ms=new L,bs=new L,Ss=new L,wi=new L,Ei=new L,Ji=new L,vr=new L,xo=new L,_o=new L,$i=new L;function gc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$i.fromArray(i,r);let a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),h=n.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Im=new nn,yr=new L,xc=new L,ln=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(xc)),this.expandByPoint(yr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new L,_c=new L,vo=new L,Ti=new L,vc=new L,yo=new L,yc=new L,Ks=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_c.copy(e).add(t).multiplyScalar(.5),vo.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(_c);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vo),a=Ti.dot(this.direction),c=-Ti.dot(vo),l=Ti.lengthSq(),h=Math.abs(1-o*o),f,u,d,x;if(h>0)if(f=o*c-a,u=o*a-c,x=r*h,f>=0)if(u>=-x)if(u<=x){let g=1/h;f*=g,u*=g,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-x?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=x?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_c).addScaledVector(vo,u),d}intersectSphere(e,t){oi.subVectors(e.center,this.origin);let n=oi.dot(this.direction),s=oi.dot(oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,n,s,r){vc.subVectors(t,e),yo.subVectors(n,e),yc.crossVectors(vc,yo);let o=this.direction.dot(yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,e);let c=a*this.direction.dot(yo.crossVectors(Ti,yo));if(c<0)return null;let l=a*this.direction.dot(vc.cross(Ti));if(l<0||c+l>o)return null;let h=-a*Ti.dot(yc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,u,d,x,g,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,u,d,x,g,p)}set(e,t,n,s,r,o,a,c,l,h,f,u,d,x,g,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=x,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,x=a*h,g=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+x*l,t[5]=u-g*l,t[9]=-a*c,t[2]=g-u*l,t[6]=x+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,x=l*h,g=l*f;t[0]=u+g*a,t[4]=x*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-x,t[6]=g+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,x=l*h,g=l*f;t[0]=u-g*a,t[4]=-o*f,t[8]=x+d*a,t[1]=d+x*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,x=a*h,g=a*f;t[0]=c*h,t[4]=x*l-d,t[8]=u*l+g,t[1]=c*f,t[5]=g*l+u,t[9]=d*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*h,t[4]=g-u*f,t[8]=x*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+x,t[10]=u-g*f}else if(e.order==="XZY"){let u=o*c,d=o*l,x=a*c,g=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+g,t[5]=o*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=a*h,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pm,e,Lm)}lookAt(e,t,n){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Ai.crossVectors(n,an),Ai.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ai.crossVectors(n,an)),Ai.normalize(),Mo.crossVectors(an,Ai),s[0]=Ai.x,s[4]=Mo.x,s[8]=an.x,s[1]=Ai.y,s[5]=Mo.y,s[9]=an.y,s[2]=Ai.z,s[6]=Mo.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],g=n[6],p=n[10],m=n[14],v=n[3],y=n[7],_=n[11],A=n[15],E=s[0],C=s[4],I=s[8],b=s[12],M=s[1],P=s[5],N=s[9],D=s[13],B=s[2],Y=s[6],k=s[10],$=s[14],H=s[3],oe=s[7],fe=s[11],ge=s[15];return r[0]=o*E+a*M+c*B+l*H,r[4]=o*C+a*P+c*Y+l*oe,r[8]=o*I+a*N+c*k+l*fe,r[12]=o*b+a*D+c*$+l*ge,r[1]=h*E+f*M+u*B+d*H,r[5]=h*C+f*P+u*Y+d*oe,r[9]=h*I+f*N+u*k+d*fe,r[13]=h*b+f*D+u*$+d*ge,r[2]=x*E+g*M+p*B+m*H,r[6]=x*C+g*P+p*Y+m*oe,r[10]=x*I+g*N+p*k+m*fe,r[14]=x*b+g*D+p*$+m*ge,r[3]=v*E+y*M+_*B+A*H,r[7]=v*C+y*P+_*Y+A*oe,r[11]=v*I+y*N+_*k+A*fe,r[15]=v*b+y*D+_*$+A*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],g=e[7],p=e[11],m=e[15];return x*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+g*(+t*c*d-t*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+p*(+t*l*f-t*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-t*c*f+t*a*u+s*o*f-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],g=e[13],p=e[14],m=e[15],v=f*p*l-g*u*l+g*c*d-a*p*d-f*c*m+a*u*m,y=x*u*l-h*p*l-x*c*d+o*p*d+h*c*m-o*u*m,_=h*g*l-x*f*l+x*a*d-o*g*d-h*a*m+o*f*m,A=x*f*c-h*g*c-x*a*u+o*g*u+h*a*p-o*f*p,E=t*v+n*y+s*_+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return e[0]=v*C,e[1]=(g*u*r-f*p*r-g*s*d+n*p*d+f*s*m-n*u*m)*C,e[2]=(a*p*r-g*c*r+g*s*l-n*p*l-a*s*m+n*c*m)*C,e[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*C,e[4]=y*C,e[5]=(h*p*r-x*u*r+x*s*d-t*p*d-h*s*m+t*u*m)*C,e[6]=(x*c*r-o*p*r-x*s*l+t*p*l+o*s*m-t*c*m)*C,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*d+t*c*d)*C,e[8]=_*C,e[9]=(x*f*r-h*g*r-x*n*d+t*g*d+h*n*m-t*f*m)*C,e[10]=(o*g*r-x*a*r+x*n*l-t*g*l-o*n*m+t*a*m)*C,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*d-t*a*d)*C,e[12]=A*C,e[13]=(h*g*s-x*f*s+x*n*u-t*g*u-h*n*p+t*f*p)*C,e[14]=(x*a*s-o*g*s-x*n*c+t*g*c+o*n*p-t*a*p)*C,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*u+t*a*u)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,x=r*f,g=o*h,p=o*f,m=a*f,v=c*l,y=c*h,_=c*f,A=n.x,E=n.y,C=n.z;return s[0]=(1-(g+m))*A,s[1]=(d+_)*A,s[2]=(x-y)*A,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(x+y)*C,s[9]=(p-v)*C,s[10]=(1-(u+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ws.set(s[0],s[1],s[2]).length(),o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let l=1/r,h=1/o,f=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=pi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),d,x;if(a===pi)d=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$o)d=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=pi){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*l,d=(n+s)*h,x,g;if(a===pi)x=(o+r)*f,g=-2*f;else if(a===$o)x=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=g,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ws=new L,Ln=new Ve,Pm=new L(0,0,0),Lm=new L(1,1,1),Ai=new L,Mo=new L,an=new L,tf=new Ve,nf=new Qt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dm=0,sf=new L,Es=new Qt,ai=new Ve,bo=new L,Mr=new L,Um=new L,Nm=new Qt,rf=new L(1,0,0),of=new L(0,1,0),af=new L(0,0,1),cf={type:"added"},Fm={type:"removed"},Ts={type:"childadded",child:null},Mc={type:"childremoved",child:null},yt=class i extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new sn,n=new Qt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(rf,e)}rotateY(e){return this.rotateOnAxis(of,e)}rotateZ(e){return this.rotateOnAxis(af,e)}translateOnAxis(e,t){return sf.copy(e).applyQuaternion(this.quaternion),this.position.add(sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rf,e)}translateY(e){return this.translateOnAxis(of,e)}translateZ(e){return this.translateOnAxis(af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Mr,bo,this.up):ai.lookAt(bo,Mr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ai),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cf),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new L,ci=new L,bc=new L,li=new L,As=new L,Rs=new L,lf=new L,Sc=new L,wc=new L,Ec=new L,Tc=new st,Ac=new st,Rc=new st,ss=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ci.subVectors(n,t),bc.subVectors(e,t);let o=Dn.dot(Dn),a=Dn.dot(ci),c=Dn.dot(bc),l=ci.dot(ci),h=ci.dot(bc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,li)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,li.x),c.addScaledVector(o,li.y),c.addScaledVector(a,li.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Tc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),Tc.fromBufferAttribute(e,t),Ac.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(Ac,r.y),o.addScaledVector(Rc,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ci.subVectors(e,t),Dn.cross(ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Dn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),Sc.subVectors(e,n);let c=As.dot(Sc),l=Rs.dot(Sc);if(c<=0&&l<=0)return t.copy(n);wc.subVectors(e,s);let h=As.dot(wc),f=Rs.dot(wc);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(As,o);Ec.subVectors(e,r);let d=As.dot(Ec),x=Rs.dot(Ec);if(x>=0&&d<=x)return t.copy(r);let g=d*l-c*x;if(g<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(Rs,a);let p=h*x-d*f;if(p<=0&&f-h>=0&&d-x>=0)return lf.subVectors(r,s),a=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(lf,a);let m=1/(p+g+u);return o=g*m,a=u*m,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},So={h:0,s:0,l:0};function Cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Ih(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cc(o,r,e+1/3),this.g=Cc(o,r,e),this.b=Cc(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Je.fromWorkingColorSpace(Jt.copy(this),e),Math.round(Vt(Jt.r*255,0,255))*65536+Math.round(Vt(Jt.g*255,0,255))*256+Math.round(Vt(Jt.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=bt){Je.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(So);let n=Pr(Ri.h,So.h,t),s=Pr(Ri.s,So.s,t),r=Pr(Ri.l,So.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new be;be.NAMES=Ed;var Om=0,hn=class extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=_n(),this.name="",this.blending=Os,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yc,this.blendDst=Zc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Dt=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new L,wo=new Q,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Il,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}};var ta=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var na=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bm=0,gn=new Ve,Ic=new yt,Cs=new L,cn=new nn,br=new nn,Ht=new L,nt=class i extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?na:ta)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];br.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(cn.min,br.min),cn.expandByPoint(Ht),Ht.addVectors(cn.max,br.max),cn.expandByPoint(Ht)):(cn.expandByPoint(br.min),cn.expandByPoint(br.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(e,l),Ht.add(Cs)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;let l=new L,h=new L,f=new L,u=new Q,d=new Q,x=new Q,g=new L,p=new L;function m(I,b,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,I),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,M),h.sub(l),f.sub(l),d.sub(u),x.sub(u);let P=1/(d.x*x.y-x.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(P),a[I].add(g),a[b].add(g),a[M].add(g),c[I].add(p),c[b].add(p),c[M].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,b=v.length;I<b;++I){let M=v[I],P=M.start,N=M.count;for(let D=P,B=P+N;D<B;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new L,_=new L,A=new L,E=new L;function C(I){A.fromBufferAttribute(s,I),E.copy(A);let b=a[I];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(E,b);let P=_.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,b=v.length;I<b;++I){let M=v[I],P=M.start,N=M.count;for(let D=P,B=P+N;D<B;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),g=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,x=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*h;for(let m=0;m<h;m++)u[x++]=l[d++]}return new He(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hf=new Ve,ji=new Ks,Eo=new ln,uf=new L,To=new L,Ao=new L,Ro=new L,Pc=new L,Co=new L,ff=new L,Io=new L,Fe=class extends yt{constructor(e=new nt,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Pc.fromBufferAttribute(f,e),o?Co.addScaledVector(Pc,h):Co.addScaledVector(Pc.sub(t),h))}t.add(Co)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Eo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Eo,uf)===null||ji.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(r).invert(),ji.copy(e.ray).applyMatrix4(hf),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let p=u[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,A=y;_<A;_+=3){let E=a.getX(_),C=a.getX(_+1),I=a.getX(_+2);s=Po(this,m,e,n,l,h,f,E,C,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=x,m=g;p<m;p+=3){let v=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);s=Po(this,o,e,n,l,h,f,v,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let p=u[x],m=o[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,A=y;_<A;_+=3){let E=_,C=_+1,I=_+2;s=Po(this,m,e,n,l,h,f,E,C,I),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let p=x,m=g;p<m;p+=3){let v=p,y=p+1,_=p+2;s=Po(this,o,e,n,l,h,f,v,y,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function zm(i,e,t,n,s,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Gn,a),c===null)return null;Io.copy(a),Io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Io);return l<t.near||l>t.far?null:{distance:l,point:Io.clone(),object:i}}function Po(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,To),i.getVertexPosition(c,Ao),i.getVertexPosition(l,Ro);let h=zm(i,e,t,n,To,Ao,Ro,ff);if(h){let f=new L;ss.getBarycoord(ff,To,Ao,Ro,f),s&&(h.uv=ss.getInterpolatedAttribute(s,a,c,l,f,new Q)),r&&(h.uv1=ss.getInterpolatedAttribute(r,a,c,l,f,new Q)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};ss.getNormal(To,Ao,Ro,u.normal),h.face=u,h.barycoord=f}return h}var Mt=class i extends nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(f,2));function x(g,p,m,v,y,_,A,E,C,I,b){let M=_/C,P=A/I,N=_/2,D=A/2,B=E/2,Y=C+1,k=I+1,$=0,H=0,oe=new L;for(let fe=0;fe<k;fe++){let ge=fe*P-D;for(let Le=0;Le<Y;Le++){let Qe=Le*M-N;oe[g]=Qe*v,oe[p]=ge*y,oe[m]=B,l.push(oe.x,oe.y,oe.z),oe[g]=0,oe[p]=0,oe[m]=E>0?1:-1,h.push(oe.x,oe.y,oe.z),f.push(Le/C),f.push(1-fe/I),$+=1}}for(let fe=0;fe<I;fe++)for(let ge=0;ge<C;ge++){let Le=u+ge+Y*fe,Qe=u+ge+Y*(fe+1),q=u+(ge+1)+Y*(fe+1),se=u+(ge+1)+Y*fe;c.push(Le,Qe,se),c.push(Qe,q,se),H+=6}a.addGroup(d,H,b),d+=H,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Js(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Js(i[t]);for(let s in n)e[s]=n[s]}return e}function km(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Td(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Xn={clone:Js,merge:jt},Hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hm,this.fragmentShader=Vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=km(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ia=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ci=new L,df=new Q,pf=new Q,Ot=class extends ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,df,pf),t.subVectors(pf,df)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ps=1,Ul=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Is,Ps,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Is,Ps,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Is,Ps,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Is,Ps,e,t);a.layers=this.layers,this.add(a);let c=new Ot(Is,Ps,e,t);c.layers=this.layers,this.add(c);let l=new Ot(Is,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===pi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$o)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},sa=class extends Bt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nl=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new sa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:Js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Vn});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=tn),new Ul(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Lc=new L,Gm=new L,Wm=new Ye,fi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Lc.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wm.getNormalMatrix(e),s=this.coplanarPoint(Lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new ln,Lo=new L,Or=class{constructor(e=new fi,t=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],x=s[9],g=s[10],p=s[11],m=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,u-l,p-d,_-m).normalize(),n[1].setComponents(c+r,u+l,p+d,_+m).normalize(),n[2].setComponents(c+o,u+h,p+x,_+v).normalize(),n[3].setComponents(c-o,u-h,p-x,_-v).normalize(),n[4].setComponents(c-a,u-f,p-g,_-y).normalize(),t===pi)n[5].setComponents(c+a,u+f,p+g,_+y).normalize();else if(t===$o)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ad(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xm(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],g=f[d];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let g=f[d];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var yn=class i extends nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],x=[],g=[],p=[];for(let m=0;m<h;m++){let v=m*u-o;for(let y=0;y<l;y++){let _=y*f-r;x.push(_,-v,0),g.push(0,0,1),p.push(y/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){let y=v+l*m,_=v+l*(m+1),A=v+1+l*(m+1),E=v+1+l*m;d.push(y,_,E),d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,og=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,h0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,M0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:Zm,alphamap_pars_fragment:Km,alphatest_fragment:Jm,alphatest_pars_fragment:$m,aomap_fragment:jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:lg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:fg,color_pars_vertex:dg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:xg,displacementmap_pars_vertex:_g,displacementmap_vertex:vg,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:bg,colorspace_pars_fragment:Sg,envmap_fragment:wg,envmap_common_pars_fragment:Eg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Bg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Ig,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Fg,lights_pars_begin:Og,lights_toon_fragment:zg,lights_toon_pars_fragment:kg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:$g,map_fragment:jg,map_pars_fragment:Qg,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:h0,normal_pars_fragment:u0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:x0,iridescence_pars_fragment:_0,opaque_fragment:v0,packing:y0,premultiplied_alpha_fragment:M0,project_vertex:b0,dithering_fragment:S0,dithering_pars_fragment:w0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:T0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:I0,skinbase_vertex:P0,skinning_pars_vertex:L0,skinning_vertex:D0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:B0,transmission_fragment:z0,transmission_pars_fragment:k0,uv_pars_fragment:H0,uv_pars_vertex:V0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:K0,cube_frag:J0,depth_vert:$0,depth_frag:j0,distanceRGBA_vert:Q0,distanceRGBA_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ox,meshlambert_vert:ax,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:fx,meshphong_vert:dx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:_x,points_vert:vx,points_frag:yx,shadow_vert:Mx,shadow_frag:bx,sprite_vert:Sx,sprite_frag:wx},de={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},kn={basic:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new be(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:jt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:jt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:jt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:jt([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:jt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:jt([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:jt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:jt([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:jt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:jt([de.lights,de.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};kn.physical={uniforms:jt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Do={r:0,b:0,g:0},es=new sn,Ex=new Ve;function Tx(i,e,t,n,s,r,o){let a=new be(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1,_=x(v);_===null?m(a,c):_&&_.isColor&&(m(_,1),y=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,y){let _=x(y);_&&(_.isCubeTexture||_.mapping===Pa)?(h===void 0&&(h=new Fe(new Mt(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Js(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(es)),h.material.toneMapped=Je.getTransfer(_.colorSpace)!==lt,(f!==_||u!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,u=_.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Fe(new yn(2,2),new Tt({name:"BackgroundMaterial",uniforms:Js(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Do,Td(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:g,addToRenderList:p}}function Ax(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,P,N,D,B){let Y=!1,k=f(D,N,P);r!==k&&(r=k,l(r.object)),Y=d(M,D,N,B),Y&&x(M,D,N,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(M,P,N,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,P,N){let D=N.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let Y=B[P.id];Y===void 0&&(Y={},B[P.id]=Y);let k=Y[D];return k===void 0&&(k=u(c()),Y[D]=k),k}function u(M){let P=[],N=[],D=[];for(let B=0;B<t;B++)P[B]=0,N[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:M,attributes:{},index:null}}function d(M,P,N,D){let B=r.attributes,Y=P.attributes,k=0,$=N.getAttributes();for(let H in $)if($[H].location>=0){let fe=B[H],ge=Y[H];if(ge===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function x(M,P,N,D){let B={},Y=P.attributes,k=0,$=N.getAttributes();for(let H in $)if($[H].location>=0){let fe=Y[H];fe===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));let ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),B[H]=ge,k++}r.attributes=B,r.attributesNum=k,r.index=D}function g(){let M=r.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function p(M){m(M,0)}function m(M,P){let N=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;N[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),B[M]!==P&&(i.vertexAttribDivisor(M,P),B[M]=P)}function v(){let M=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==M[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function y(M,P,N,D,B,Y,k){k===!0?i.vertexAttribIPointer(M,P,N,B,Y):i.vertexAttribPointer(M,P,N,D,B,Y)}function _(M,P,N,D){g();let B=D.attributes,Y=N.getAttributes(),k=P.defaultAttributeValues;for(let $ in Y){let H=Y[$];if(H.location>=0){let oe=B[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){let fe=oe.normalized,ge=oe.itemSize,Le=e.get(oe);if(Le===void 0)continue;let Qe=Le.buffer,q=Le.type,se=Le.bytesPerElement,_e=q===i.INT||q===i.UNSIGNED_INT||oe.gpuType===Sh;if(oe.isInterleavedBufferAttribute){let ae=oe.data,Ae=ae.stride,Ne=oe.offset;if(ae.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be,ae.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Be=0;Be<H.locationSize;Be++)y(H.location+Be,ge/H.locationSize,q,fe,Ae*se,(Ne+ge/H.locationSize*Be)*se,_e)}else{if(oe.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae,oe.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ae=0;ae<H.locationSize;ae++)p(H.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ae=0;ae<H.locationSize;ae++)y(H.location+ae,ge/H.locationSize,q,fe,ge*se,ge/H.locationSize*ae*se,_e)}}else if(k!==void 0){let fe=k[$];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}v()}function A(){I();for(let M in n){let P=n[M];for(let N in P){let D=P[N];for(let B in D)h(D[B].object),delete D[B];delete P[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let N in P){let D=P[N];for(let B in D)h(D[B].object),delete D[B];delete P[N]}delete n[M.id]}function C(M){for(let P in n){let N=n[P];if(N[M.id]===void 0)continue;let D=N[M.id];for(let B in D)h(D[B].object),delete D[B];delete N[M.id]}}function I(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function Rx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let x=0;x<f;x++)d+=h[x];t.update(d,n,1)}function c(l,h,f,u){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<l.length;x++)o(l[x],h[x],u[x]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let x=0;for(let g=0;g<f;g++)x+=h[g]*u[g];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function Ix(i){let e=this,t=null,n=0,s=!1,r=!1,o=new fi,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,y=v*4,_=m.clippingState||null;c.value=_,_=h(x,u,y,d);for(let A=0;A!==y;++A)_[A]=t[A];m.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let g=f!==null?f.length:0,p=null;if(g!==0){if(p=c.value,x!==!0||p===null){let m=d+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,_=d;y!==g;++y,_+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(p,_),p[_+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Px(i){let e=new WeakMap;function t(o,a){return a===nl?o.mapping=Vs:a===il&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nl||a===il)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Nl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fi=class extends ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ns=4,mf=[.125,.215,.35,.446,.526,.582],rs=20,Dc=new Fi,gf=new be,Uc=null,Nc=0,Fc=0,Oc=!1,ns=(1+Math.sqrt(5))/2,Ls=1/ns,xf=[new L(-ns,Ls,0),new L(ns,Ls,0),new L(-Ls,0,ns),new L(Ls,0,ns),new L(0,ns,-Ls),new L(0,ns,Ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],$s=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Nc,Fc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Nc=this._renderer.getActiveCubeFace(),Fc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:fn,format:xn,colorSpace:Xt,depthBuffer:!1},s=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(r)),this._blurMaterial=Dx(r,e,t)}return s}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,s){let a=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(gf),h.toneMapping=Li,h.autoClear=!1;let d=new Dt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),x=new Fe(new Mt,d),g=!1,p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(gf),g=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));let y=this._cubeSize;Uo(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Vs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Uo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xf[(s-r-1)%xf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Fe(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),g=r/x,p=isFinite(r)?1+Math.floor(h*g):rs;p>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);let m=[],v=0;for(let C=0;C<rs;++C){let I=C/g,b=Math.exp(-I*I/2);m.push(b),C===0?v+=b:C<p&&(v+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=x,u.mipInt.value=y-n;let _=this._sizeLods[s],A=3*_*(s>y-Ns?s-y+Ns:0),E=4*(this._cubeSize-_);Uo(t,A,E,3*_,2*_),c.setRenderTarget(t),c.render(f,Dc)}};function Lx(i){let e=[],t=[],n=[],s=i,r=i-Ns+1+mf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ns?c=mf[o-i+Ns-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,g=3,p=2,m=1,v=new Float32Array(g*x*d),y=new Float32Array(p*x*d),_=new Float32Array(m*x*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,I=E>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(b,g*x*E),y.set(u,p*x*E);let M=[E,E,E,E,E,E];_.set(M,m*x*E)}let A=new nt;A.setAttribute("position",new He(v,g)),A.setAttribute("uv",new He(y,p)),A.setAttribute("faceIndex",new He(_,m)),e.push(A),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(i,e,t){let n=new Yt(i,e,t);return n.texture.mapping=Pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dx(i,e,t){let n=new Float32Array(rs),s=new L(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function vf(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function yf(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ux(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===nl||c===il,h=c===Vs||c===Gs;if(l||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new $s(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new $s(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Nx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fx(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);for(let x in u.morphAttributes){let g=u.morphAttributes[x];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let x in u)e.update(u[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let g=d[x];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,x=f.attributes.position,g=0;if(d!==null){let v=d.array;g=d.version;for(let y=0,_=v.length;y<_;y+=3){let A=v[y+0],E=v[y+1],C=v[y+2];u.push(A,E,E,C,C,A)}}else if(x!==void 0){let v=x.array;g=x.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let A=y+0,E=y+1,C=y+2;u.push(A,E,E,C,C,A)}}else return;let p=new(wd(u)?na:ta)(u,1);p.version=g;let m=r.get(f);m&&e.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Ox(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,u*o,x),t.update(d,n,x))}function h(u,d,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];t.update(p,n,1)}function f(u,d,x,g){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,g,0,x);let m=0;for(let v=0;v<x;v++)m+=d[v]*g[v];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Bx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function zx(i,e,t){let n=new WeakMap,s=new st;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let _=a.attributes.position.count*y,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*A*4*f),C=new Qo(E,_,A,f);C.type=Nn,C.needsUpdate=!0;let I=y*4;for(let M=0;M<f;M++){let P=p[M],N=m[M],D=v[M],B=_*A*4*M;for(let Y=0;Y<P.count;Y++){let k=Y*I;d===!0&&(s.fromBufferAttribute(P,Y),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),x===!0&&(s.fromBufferAttribute(N,Y),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),g===!0&&(s.fromBufferAttribute(D,Y),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=D.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new Q(_,A)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];let x=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kx(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ra=class extends Bt{constructor(e,t,n,s,r,o,a,c,l,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=as),n===void 0&&h===Xs&&(n=Ws),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Rd=new Bt,Mf=new ra(1,1),Cd=new Qo,Id=new Dl,Pd=new sa,bf=[],Sf=[],wf=new Float32Array(16),Ef=new Float32Array(9),Tf=new Float32Array(4);function ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ua(i,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Tf.set(n),i.uniformMatrix2fv(this.addr,!1,Tf),kt(t,n)}}function qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),kt(t,n)}}function Yx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),kt(t,n)}}function Zx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function jx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=Sd,r=Mf):r=Rd,t.setTexture2D(e||r,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Id,s)}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pd,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function o_(i){switch(i){case 5126:return Hx;case 35664:return Vx;case 35665:return Gx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Kx;case 35668:case 35672:return Jx;case 35669:case 35673:return $x;case 5125:return jx;case 36294:return Qx;case 36295:return e_;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}function a_(i,e){i.uniform1fv(this.addr,e)}function c_(i,e){let t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function l_(i,e){let t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function h_(i,e){let t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function u_(i,e){let t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function f_(i,e){let t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function d_(i,e){let t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p_(i,e){i.uniform1iv(this.addr,e)}function m_(i,e){i.uniform2iv(this.addr,e)}function g_(i,e){i.uniform3iv(this.addr,e)}function x_(i,e){i.uniform4iv(this.addr,e)}function __(i,e){i.uniform1uiv(this.addr,e)}function v_(i,e){i.uniform2uiv(this.addr,e)}function y_(i,e){i.uniform3uiv(this.addr,e)}function M_(i,e){i.uniform4uiv(this.addr,e)}function b_(i,e,t){let n=this.cache,s=e.length,r=Ua(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rd,r[o])}function S_(i,e,t){let n=this.cache,s=e.length,r=Ua(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Id,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=Ua(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pd,r[o])}function E_(i,e,t){let n=this.cache,s=e.length,r=Ua(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function T_(i){switch(i){case 5126:return a_;case 35664:return c_;case 35665:return l_;case 35666:return h_;case 35674:return u_;case 35675:return f_;case 35676:return d_;case 5124:case 35670:return p_;case 35667:case 35671:return m_;case 35668:case 35672:return g_;case 35669:case 35673:return x_;case 5125:return __;case 36294:return v_;case 36295:return y_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return S_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return E_}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o_(t.type)}},Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T_(t.type)}},Bl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function Af(i,e){i.seq.push(e),i.map[e.id]=e}function A_(i,e,t){let n=i.name,s=n.length;for(Bc.lastIndex=0;;){let r=Bc.exec(n),o=Bc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Af(t,l===void 0?new Fl(a,i,e):new Ol(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Bl(a),Af(t,f)),t=f}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);A_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R_=37297,C_=0;function I_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cf=new Ye;function P_(i){Je._getMatrix(Cf,Je.workingColorSpace,i);let e=`mat3( ${Cf.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Da:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function If(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+I_(i.getShaderSource(e),o)}else return s}function L_(i,e){let t=P_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function D_(i,e){let t;switch(e){case xh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="Cineon";break;case Zr:t="ACESFilmic";break;case yh:t="AgX";break;case Mh:t="Neutral";break;case Kp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var No=new L;function U_(){Je.getLuminanceCoefficients(No);let i=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function F_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rr(i){return i!==""}function Pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(i){return i.replace(B_,k_)}var z_=new Map;function k_(i,e){let t=Ke[e];if(t===void 0){let n=z_.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}var H_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(H_,V_)}function V_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function G_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===gh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function W_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function q_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function Y_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Z_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=G_(t),l=W_(t),h=X_(t),f=q_(t),u=Y_(t),d=N_(t),x=F_(r),g=s.createProgram(),p,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Rr).join(`
`),m.length>0&&(m+=`
`)):(p=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),m=[Uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Li?D_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,L_("linearToOutputTexel",t.outputColorSpace),U_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=zl(o),o=Pf(o,t),o=Lf(o,t),a=zl(a),a=Pf(a,t),a=Lf(a,t),o=Df(o),a=Df(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=v+p+o,_=v+m+a,A=Rf(s,s.VERTEX_SHADER,y),E=Rf(s,s.FRAGMENT_SHADER,_);s.attachShader(g,A),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(E).trim(),Y=!0,k=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,E);else{let $=If(s,A,"vertex"),H=If(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+$+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||B==="")&&(k=!1);k&&(P.diagnostics={runnable:Y,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(A),s.deleteShader(E),I=new ks(s,g),b=O_(s,g)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,R_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var K_=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=K_++,this.code=e,this.usedTimes=0}};function J_(i,e,t,n,s,r,o){let a=new ea,c=new kl,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function p(b,M,P,N,D){let B=N.fog,Y=D.geometry,k=b.isMeshStandardMaterial?N.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),H=$&&$.mapping===Pa?$.image.height:null,oe=x[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=fe!==void 0?fe.length:0,Le=0;Y.morphAttributes.position!==void 0&&(Le=1),Y.morphAttributes.normal!==void 0&&(Le=2),Y.morphAttributes.color!==void 0&&(Le=3);let Qe,q,se,_e;if(oe){let ht=kn[oe];Qe=ht.vertexShader,q=ht.fragmentShader}else Qe=b.vertexShader,q=b.fragmentShader,c.update(b),se=c.getVertexShaderID(b),_e=c.getFragmentShaderID(b);let ae=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,Be=D.isBatchedMesh===!0,$e=!!b.map,ee=!!b.matcap,W=!!$,R=!!b.aoMap,le=!!b.lightMap,Z=!!b.bumpMap,he=!!b.normalMap,ie=!!b.displacementMap,we=!!b.emissiveMap,ue=!!b.metalnessMap,T=!!b.roughnessMap,S=b.anisotropy>0,z=b.clearcoat>0,K=b.dispersion>0,ne=b.iridescence>0,J=b.sheen>0,Re=b.transmission>0,me=S&&!!b.anisotropyMap,Se=z&&!!b.clearcoatMap,et=z&&!!b.clearcoatNormalMap,re=z&&!!b.clearcoatRoughnessMap,Ee=ne&&!!b.iridescenceMap,ke=ne&&!!b.iridescenceThicknessMap,Ge=J&&!!b.sheenColorMap,Te=J&&!!b.sheenRoughnessMap,it=!!b.specularMap,Ze=!!b.specularColorMap,dt=!!b.specularIntensityMap,U=Re&&!!b.transmissionMap,xe=Re&&!!b.thicknessMap,X=!!b.gradientMap,te=!!b.alphaMap,Me=b.alphaTest>0,ve=!!b.alphaHash,Xe=!!b.extensions,Rt=Li;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let Zt={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:q,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Be,batchingColor:Be&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Xt,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:ee,envMap:W,envMapMode:W&&$.mapping,envMapCubeUVHeight:H,aoMap:R,lightMap:le,bumpMap:Z,normalMap:he,displacementMap:u&&ie,emissiveMap:we,normalMapObjectSpace:he&&b.normalMapType===em,normalMapTangentSpace:he&&b.normalMapType===bd,metalnessMap:ue,roughnessMap:T,anisotropy:S,anisotropyMap:me,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:et,clearcoatRoughnessMap:re,dispersion:K,iridescence:ne,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:Ge,sheenRoughnessMap:Te,specularMap:it,specularColorMap:Ze,specularIntensityMap:dt,transmission:Re,transmissionMap:U,thicknessMap:xe,gradientMap:X,opaque:b.transparent===!1&&b.blending===Os&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:ve,combine:b.combine,mapUv:$e&&g(b.map.channel),aoMapUv:R&&g(b.aoMap.channel),lightMapUv:le&&g(b.lightMap.channel),bumpMapUv:Z&&g(b.bumpMap.channel),normalMapUv:he&&g(b.normalMap.channel),displacementMapUv:ie&&g(b.displacementMap.channel),emissiveMapUv:we&&g(b.emissiveMap.channel),metalnessMapUv:ue&&g(b.metalnessMap.channel),roughnessMapUv:T&&g(b.roughnessMap.channel),anisotropyMapUv:me&&g(b.anisotropyMap.channel),clearcoatMapUv:Se&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(b.sheenRoughnessMap.channel),specularMapUv:it&&g(b.specularMap.channel),specularColorMapUv:Ze&&g(b.specularColorMap.channel),specularIntensityMapUv:dt&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:xe&&g(b.thicknessMap.channel),alphaMapUv:te&&g(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(he||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Y.attributes.uv&&($e||te),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:D.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:we&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qt,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function m(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=x[b.type],P;if(M){let N=kn[M];P=Xn.clone(N.uniforms)}else P=b.uniforms;return P}function A(b,M){let P;for(let N=0,D=h.length;N<D;N++){let B=h[N];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Z_(i,M,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function C(b){c.remove(b)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function $_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function j_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ff(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,d,x,g,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function a(f,u,d,x,g,p){let m=o(f,u,d,x,g,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(f,u,d,x,g,p){let m=o(f,u,d,x,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(f,u){t.length>1&&t.sort(f||j_),n.length>1&&n.sort(u||Nf),s.length>1&&s.sort(u||Nf)}function h(){for(let f=e,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Q_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ff,i.set(n,[o])):s>=r.length?(o=new Ff,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ev(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var nv=0;function iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sv(i){let e=new ev,t=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ve,o=new Ve;function a(l){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,x=0,g=0,p=0,m=0,v=0,y=0,_=0,A=0,E=0,C=0;l.sort(iv);for(let b=0,M=l.length;b<M;b++){let P=l[b],N=P.color,D=P.intensity,B=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*D,f+=N.g*D,u+=N.b*D;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],D);C++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(D),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;let $=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,$.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=$.matrix,P.castShadow){let H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=Y,_++}g++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(N).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=k,p++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let $=P.shadow,H=t.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[x]=H,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=P.shadow.matrix,y++}n.point[x]=k,x++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(D),k.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==d||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==v||I.numPointShadows!==y||I.numSpotShadows!==_||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=d,I.pointLength=x,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=v,I.numPointShadows=y,I.numSpotShadows=_,I.numSpotMaps=A,I.numLightProbes=C,n.version=nv++)}function c(l,h){let f=0,u=0,d=0,x=0,g=0,p=h.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){let y=l[m];if(y.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(y.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Of(i){let e=new sv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Of(i),e.set(s,[a])):r>=o.length?(a=new Of(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vl=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gl=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(i,e,t){let n=new Or,s=new Q,r=new Q,o=new st,a=new Vl({depthPacking:Qp}),c=new Gl,l={},h=t.maxTextureSize,f={[Gn]:Gt,[Gt]:Gn,[qt]:qt},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:ov,fragmentShader:av}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new nt;x.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Fe(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let m=this.type;this.render=function(E,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Vn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let D=m!==ui&&this.type===ui,B=m===ui&&this.type!==ui;for(let Y=0,k=E.length;Y<k;Y++){let $=E[Y],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let oe=H.getFrameExtents();if(s.multiply(oe),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,H.mapSize.y=r.y)),H.map===null||D===!0||B===!0){let ge=this.type!==ui?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new Yt(s.x,s.y,ge),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let fe=H.getViewportCount();for(let ge=0;ge<fe;ge++){let Le=H.getViewport(ge);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),N.viewport(o),H.updateMatrices($,ge),n=H.getFrustum(),_(C,I,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===ui&&v(H,I),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,M,P)};function v(E,C){let I=e.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yt(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,I,u,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,I,d,g,null)}function y(E,C,I,b){let M=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let N=M.uuid,D=C.uuid,B=l[N];B===void 0&&(B={},l[N]=B);let Y=B[D];Y===void 0&&(Y=M.clone(),B[D]=Y,C.addEventListener("dispose",A)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,b===ui?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let N=i.properties.get(M);N.light=I}return M}function _(E,C,I,b,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ui)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let D=e.update(E),B=E.material;if(Array.isArray(B)){let Y=D.groups;for(let k=0,$=Y.length;k<$;k++){let H=Y[k],oe=B[H.materialIndex];if(oe&&oe.visible){let fe=y(E,oe,b,M);E.onBeforeShadow(i,E,C,I,D,fe,H),i.renderBufferDirect(I,null,D,fe,E,H),E.onAfterShadow(i,E,C,I,D,fe,H)}}}else if(B.visible){let Y=y(E,B,b,M);E.onBeforeShadow(i,E,C,I,D,Y,null),i.renderBufferDirect(I,null,D,Y,E,null),E.onAfterShadow(i,E,C,I,D,Y,null)}}let N=E.children;for(let D=0,B=N.length;D<B;D++)_(N[D],C,I,b,M)}function A(E){E.target.removeEventListener("dispose",A);for(let I in l){let b=l[I],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var lv={[Kc]:Jc,[$c]:el,[jc]:tl,[Hs]:Qc,[Jc]:Kc,[el]:$c,[tl]:jc,[Qc]:Hs};function hv(i,e){function t(){let U=!1,xe=new st,X=null,te=new st(0,0,0,0);return{setMask:function(Me){X!==Me&&!U&&(i.colorMask(Me,Me,Me,Me),X=Me)},setLocked:function(Me){U=Me},setClear:function(Me,ve,Xe,Rt,Zt){Zt===!0&&(Me*=Rt,ve*=Rt,Xe*=Rt),xe.set(Me,ve,Xe,Rt),te.equals(xe)===!1&&(i.clearColor(Me,ve,Xe,Rt),te.copy(xe))},reset:function(){U=!1,X=null,te.set(-1,0,0,0)}}}function n(){let U=!1,xe=!1,X=null,te=null,Me=null;return{setReversed:function(ve){if(xe!==ve){let Xe=e.get("EXT_clip_control");xe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);let Rt=Me;Me=null,this.setClear(Rt)}xe=ve},getReversed:function(){return xe},setTest:function(ve){ve?ae(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(ve){X!==ve&&!U&&(i.depthMask(ve),X=ve)},setFunc:function(ve){if(xe&&(ve=lv[ve]),te!==ve){switch(ve){case Kc:i.depthFunc(i.NEVER);break;case Jc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case Qc:i.depthFunc(i.GEQUAL);break;case el:i.depthFunc(i.GREATER);break;case tl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=ve}},setLocked:function(ve){U=ve},setClear:function(ve){Me!==ve&&(xe&&(ve=1-ve),i.clearDepth(ve),Me=ve)},reset:function(){U=!1,X=null,te=null,Me=null,xe=!1}}}function s(){let U=!1,xe=null,X=null,te=null,Me=null,ve=null,Xe=null,Rt=null,Zt=null;return{setTest:function(ht){U||(ht?ae(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ht){xe!==ht&&!U&&(i.stencilMask(ht),xe=ht)},setFunc:function(ht,Cn,ii){(X!==ht||te!==Cn||Me!==ii)&&(i.stencilFunc(ht,Cn,ii),X=ht,te=Cn,Me=ii)},setOp:function(ht,Cn,ii){(ve!==ht||Xe!==Cn||Rt!==ii)&&(i.stencilOp(ht,Cn,ii),ve=ht,Xe=Cn,Rt=ii)},setLocked:function(ht){U=ht},setClear:function(ht){Zt!==ht&&(i.clearStencil(ht),Zt=ht)},reset:function(){U=!1,xe=null,X=null,te=null,Me=null,ve=null,Xe=null,Rt=null,Zt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],x=null,g=!1,p=null,m=null,v=null,y=null,_=null,A=null,E=null,C=new be(0,0,0),I=0,b=!1,M=null,P=null,N=null,D=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=$>=2);let oe=null,fe={},ge=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Qe=new st().fromArray(ge),q=new st().fromArray(Le);function se(U,xe,X,te){let Me=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<X;Xe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(xe+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return ve}let _e={};_e[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(Hs),Z(!1),he(Bu),ae(i.CULL_FACE),R(Vn);function ae(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ae(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ne(U,xe){return f[U]!==xe?(i.bindFramebuffer(U,xe),f[U]=xe,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Be(U,xe){let X=d,te=!1;if(U){X=u.get(xe),X===void 0&&(X=[],u.set(xe,X));let Me=U.textures;if(X.length!==Me.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Xe=Me.length;ve<Xe;ve++)X[ve]=i.COLOR_ATTACHMENT0+ve;X.length=Me.length,te=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,te=!0);te&&i.drawBuffers(X)}function $e(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let ee={[is]:i.FUNC_ADD,[Ip]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};ee[Lp]=i.MIN,ee[Dp]=i.MAX;let W={[Up]:i.ZERO,[Np]:i.ONE,[Fp]:i.SRC_COLOR,[Yc]:i.SRC_ALPHA,[Vp]:i.SRC_ALPHA_SATURATE,[kp]:i.DST_COLOR,[Bp]:i.DST_ALPHA,[Op]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[Hp]:i.ONE_MINUS_DST_COLOR,[zp]:i.ONE_MINUS_DST_ALPHA,[Gp]:i.CONSTANT_COLOR,[Wp]:i.ONE_MINUS_CONSTANT_COLOR,[Xp]:i.CONSTANT_ALPHA,[qp]:i.ONE_MINUS_CONSTANT_ALPHA};function R(U,xe,X,te,Me,ve,Xe,Rt,Zt,ht){if(U===Vn){g===!0&&(Ae(i.BLEND),g=!1);return}if(g===!1&&(ae(i.BLEND),g=!0),U!==Cp){if(U!==p||ht!==b){if((m!==is||_!==is)&&(i.blendEquation(i.FUNC_ADD),m=is,_=is),ht)switch(U){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,A=null,E=null,C.set(0,0,0),I=0,p=U,b=ht}return}Me=Me||xe,ve=ve||X,Xe=Xe||te,(xe!==m||Me!==_)&&(i.blendEquationSeparate(ee[xe],ee[Me]),m=xe,_=Me),(X!==v||te!==y||ve!==A||Xe!==E)&&(i.blendFuncSeparate(W[X],W[te],W[ve],W[Xe]),v=X,y=te,A=ve,E=Xe),(Rt.equals(C)===!1||Zt!==I)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Zt),C.copy(Rt),I=Zt),p=U,b=!1}function le(U,xe){U.side===qt?Ae(i.CULL_FACE):ae(i.CULL_FACE);let X=U.side===Gt;xe&&(X=!X),Z(X),U.blending===Os&&U.transparent===!1?R(Vn):R(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),we(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function he(U){U!==Ap?(ae(i.CULL_FACE),U!==P&&(U===Bu?i.cullFace(i.BACK):U===Rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),P=U}function ie(U){U!==N&&(k&&i.lineWidth(U),N=U)}function we(U,xe,X){U?(ae(i.POLYGON_OFFSET_FILL),(D!==xe||B!==X)&&(i.polygonOffset(xe,X),D=xe,B=X)):Ae(i.POLYGON_OFFSET_FILL)}function ue(U){U?ae(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function T(U){U===void 0&&(U=i.TEXTURE0+Y-1),oe!==U&&(i.activeTexture(U),oe=U)}function S(U,xe,X){X===void 0&&(oe===null?X=i.TEXTURE0+Y-1:X=oe);let te=fe[X];te===void 0&&(te={type:void 0,texture:void 0},fe[X]=te),(te.type!==U||te.texture!==xe)&&(oe!==X&&(i.activeTexture(X),oe=X),i.bindTexture(U,xe||_e[U]),te.type=U,te.texture=xe)}function z(){let U=fe[oe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(U){Qe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function Te(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function it(U,xe){let X=l.get(xe);X===void 0&&(X=new WeakMap,l.set(xe,X));let te=X.get(U);te===void 0&&(te=i.getUniformBlockIndex(xe,U.name),X.set(U,te))}function Ze(U,xe){let te=l.get(xe).get(U);c.get(xe)!==te&&(i.uniformBlockBinding(xe,te,U.__bindingPointIndex),c.set(xe,te))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},oe=null,fe={},f={},u=new WeakMap,d=[],x=null,g=!1,p=null,m=null,v=null,y=null,_=null,A=null,E=null,C=new be(0,0,0),I=0,b=!1,M=null,P=null,N=null,D=null,B=null,Qe.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:Ae,bindFramebuffer:Ne,drawBuffers:Be,useProgram:$e,setBlending:R,setMaterial:le,setFlipSided:Z,setCullFace:he,setLineWidth:ie,setPolygonOffset:we,setScissorTest:ue,activeTexture:T,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:ke,updateUBOMapping:it,uniformBlockBinding:Ze,texStorage2D:et,texStorage3D:re,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Ge,viewport:Te,reset:dt}}function Bf(i,e,t,n){let s=uv(n);switch(t){case md:return i*e;case xd:return i*e;case _d:return i*e*2;case Th:return i*e/s.components*s.byteLength;case Ah:return i*e/s.components*s.byteLength;case vd:return i*e*2/s.components*s.byteLength;case Rh:return i*e*2/s.components*s.byteLength;case gd:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Ch:return i*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case al:return Math.max(i,16)*Math.max(e,8)/4;case sl:case ol:return Math.max(i,8)*Math.max(e,8)/2;case cl:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jo:case El:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yd:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uv(i){switch(i){case vn:case fd:return{byteLength:1,components:1};case Nr:case dd:case fn:return{byteLength:2,components:1};case wh:case Eh:return{byteLength:2,components:4};case as:case Sh:case Nn:return{byteLength:4,components:1};case pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fv(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function x(T,S){return d?new OffscreenCanvas(T,S):Fr("canvas")}function g(T,S,z){let K=1,ne=ue(T);if((ne.width>z||ne.height>z)&&(K=z/Math.max(ne.width,ne.height)),K<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let J=Math.floor(K*ne.width),Re=Math.floor(K*ne.height);f===void 0&&(f=x(J,Re));let me=S?x(J,Re):f;return me.width=J,me.height=Re,me.getContext("2d").drawImage(T,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Re+")."),me}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function p(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,S,z,K,ne=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),S===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),S===i.RGBA){let Re=ne?Da:Je.getTransfer(K);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=Re===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(T,S){let z;return T?S===null||S===as||S===Ws?z=i.DEPTH24_STENCIL8:S===Nn?z=i.DEPTH32F_STENCIL8:S===Nr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===Ws?z=i.DEPTH_COMPONENT24:S===Nn?z=i.DEPTH_COMPONENT32F:S===Nr&&(z=i.DEPTH_COMPONENT16),z}function A(T,S){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function E(T){let S=T.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&h.delete(S)}function C(T){let S=T.target;S.removeEventListener("dispose",C),M(S)}function I(T){let S=n.get(T);if(S.__webglInit===void 0)return;let z=T.source,K=u.get(z);if(K){let ne=K[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(T),Object.keys(K).length===0&&u.delete(z)}n.remove(T)}function b(T){let S=n.get(T);i.deleteTexture(S.__webglTexture);let z=T.source,K=u.get(z);delete K[S.__cacheKey],o.memory.textures--}function M(T){let S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ne=0;ne<S.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=T.textures;for(let K=0,ne=z.length;K<ne;K++){let J=n.get(z[K]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(T)}let P=0;function N(){P=0}function D(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function B(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function Y(T,S){let z=n.get(T);if(T.isVideoTexture&&ie(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,T,S);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function k(T,S){let z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function $(T,S){let z=n.get(T);if(T.version>0&&z.__version!==T.version){q(z,T,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function H(T,S){let z=n.get(T);if(T.version>0&&z.__version!==T.version){se(z,T,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let oe={[gi]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[os]:i.MIRRORED_REPEAT},fe={[Wt]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},ge={[tm]:i.NEVER,[am]:i.ALWAYS,[nm]:i.LESS,[Sd]:i.LEQUAL,[im]:i.EQUAL,[om]:i.GEQUAL,[sm]:i.GREATER,[rm]:i.NOTEQUAL};function Le(T,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===Cr||S.magFilter===Us||S.magFilter===Hn||S.minFilter===tn||S.minFilter===Cr||S.minFilter===Us||S.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,oe[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,oe[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,oe[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==Us&&S.minFilter!==Hn||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",E));let K=S.source,ne=u.get(K);ne===void 0&&(ne={},u.set(K,ne));let J=B(S);if(J!==T.__cacheKey){ne[J]===void 0&&(ne[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ne[J].usedTimes++;let Re=ne[T.__cacheKey];Re!==void 0&&(ne[T.__cacheKey].usedTimes--,Re.usedTimes===0&&b(S)),T.__cacheKey=J,T.__webglTexture=ne[J].texture}return z}function q(T,S,z){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);let ne=Qe(T,S),J=S.source;t.bindTexture(K,T.__webglTexture,i.TEXTURE0+z);let Re=n.get(J);if(J.version!==Re.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let me=Je.getPrimaries(Je.workingColorSpace),Se=S.colorSpace===Ii?null:Je.getPrimaries(S.colorSpace),et=S.colorSpace===Ii||me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let re=g(S.image,!1,s.maxTextureSize);re=we(S,re);let Ee=r.convert(S.format,S.colorSpace),ke=r.convert(S.type),Ge=y(S.internalFormat,Ee,ke,S.colorSpace,S.isVideoTexture);Le(K,S);let Te,it=S.mipmaps,Ze=S.isVideoTexture!==!0,dt=Re.__version===void 0||ne===!0,U=J.dataReady,xe=A(S,re);if(S.isDepthTexture)Ge=_(S.format===Xs,S.type),dt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ge,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,ke,null));else if(S.isDataTexture)if(it.length>0){Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,Ge,it[0].width,it[0].height);for(let X=0,te=it.length;X<te;X++)Te=it[X],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Te.width,Te.height,Ee,ke,Te.data):t.texImage2D(i.TEXTURE_2D,X,Ge,Te.width,Te.height,0,Ee,ke,Te.data);S.generateMipmaps=!1}else Ze?(dt&&t.texStorage2D(i.TEXTURE_2D,xe,Ge,re.width,re.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Ee,ke,re.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,ke,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ze&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ge,it[0].width,it[0].height,re.depth);for(let X=0,te=it.length;X<te;X++)if(Te=it[X],S.format!==xn)if(Ee!==null)if(Ze){if(U)if(S.layerUpdates.size>0){let Me=Bf(Te.width,Te.height,S.format,S.type);for(let ve of S.layerUpdates){let Xe=Te.data.subarray(ve*Me/Te.data.BYTES_PER_ELEMENT,(ve+1)*Me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ve,Te.width,Te.height,1,Ee,Xe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,re.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ge,Te.width,Te.height,re.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Te.width,Te.height,re.depth,Ee,ke,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Ge,Te.width,Te.height,re.depth,0,Ee,ke,Te.data)}else{Ze&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,Ge,it[0].width,it[0].height);for(let X=0,te=it.length;X<te;X++)Te=it[X],S.format!==xn?Ee!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Ge,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?U&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Te.width,Te.height,Ee,ke,Te.data):t.texImage2D(i.TEXTURE_2D,X,Ge,Te.width,Te.height,0,Ee,ke,Te.data)}else if(S.isDataArrayTexture)if(Ze){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ge,re.width,re.height,re.depth),U)if(S.layerUpdates.size>0){let X=Bf(re.width,re.height,S.format,S.type);for(let te of S.layerUpdates){let Me=re.data.subarray(te*X/re.data.BYTES_PER_ELEMENT,(te+1)*X/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,Ee,ke,Me)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,ke,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,re.width,re.height,re.depth,0,Ee,ke,re.data);else if(S.isData3DTexture)Ze?(dt&&t.texStorage3D(i.TEXTURE_3D,xe,Ge,re.width,re.height,re.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,ke,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,re.width,re.height,re.depth,0,Ee,ke,re.data);else if(S.isFramebufferTexture){if(dt)if(Ze)t.texStorage2D(i.TEXTURE_2D,xe,Ge,re.width,re.height);else{let X=re.width,te=re.height;for(let Me=0;Me<xe;Me++)t.texImage2D(i.TEXTURE_2D,Me,Ge,X,te,0,Ee,ke,null),X>>=1,te>>=1}}else if(it.length>0){if(Ze&&dt){let X=ue(it[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ge,X.width,X.height)}for(let X=0,te=it.length;X<te;X++)Te=it[X],Ze?U&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ee,ke,Te):t.texImage2D(i.TEXTURE_2D,X,Ge,Ee,ke,Te);S.generateMipmaps=!1}else if(Ze){if(dt){let X=ue(re);t.texStorage2D(i.TEXTURE_2D,xe,Ge,X.width,X.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,ke,re)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Ee,ke,re);p(S)&&m(K),Re.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function se(T,S,z){if(S.image.length!==6)return;let K=Qe(T,S),ne=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let J=n.get(ne);if(ne.version!==J.__version||K===!0){t.activeTexture(i.TEXTURE0+z);let Re=Je.getPrimaries(Je.workingColorSpace),me=S.colorSpace===Ii?null:Je.getPrimaries(S.colorSpace),Se=S.colorSpace===Ii||Re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let et=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!et&&!re?Ee[te]=g(S.image[te],!0,s.maxCubemapSize):Ee[te]=re?S.image[te].image:S.image[te],Ee[te]=we(S,Ee[te]);let ke=Ee[0],Ge=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),it=y(S.internalFormat,Ge,Te,S.colorSpace),Ze=S.isVideoTexture!==!0,dt=J.__version===void 0||K===!0,U=ne.dataReady,xe=A(S,ke);Le(i.TEXTURE_CUBE_MAP,S);let X;if(et){Ze&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,it,ke.width,ke.height);for(let te=0;te<6;te++){X=Ee[te].mipmaps;for(let Me=0;Me<X.length;Me++){let ve=X[Me];S.format!==xn?Ge!==null?Ze?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ge,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,it,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,0,0,ve.width,ve.height,Ge,Te,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me,it,ve.width,ve.height,0,Ge,Te,ve.data)}}}else{if(X=S.mipmaps,Ze&&dt){X.length>0&&xe++;let te=ue(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,it,te.width,te.height)}for(let te=0;te<6;te++)if(re){Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,Ge,Te,Ee[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Ee[te].width,Ee[te].height,0,Ge,Te,Ee[te].data);for(let Me=0;Me<X.length;Me++){let Xe=X[Me].image[te].image;Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Xe.width,Xe.height,Ge,Te,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,it,Xe.width,Xe.height,0,Ge,Te,Xe.data)}}else{Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ge,Te,Ee[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,it,Ge,Te,Ee[te]);for(let Me=0;Me<X.length;Me++){let ve=X[Me];Ze?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,0,0,Ge,Te,ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Me+1,it,Ge,Te,ve.image[te])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),J.__version=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function _e(T,S,z,K,ne,J){let Re=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Se=y(z.internalFormat,Re,me,z.colorSpace),et=n.get(S),re=n.get(z);if(re.__renderTarget=S,!et.__hasExternalTextures){let Ee=Math.max(1,S.width>>J),ke=Math.max(1,S.height>>J);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,Se,Ee,ke,S.depth,0,Re,me,null):t.texImage2D(ne,J,Se,Ee,ke,0,Re,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ne,re.__webglTexture,0,Z(S)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ne,re.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){let K=S.depthTexture,ne=K&&K.isDepthTexture?K.type:null,J=_(S.stencilBuffer,ne),Re=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Z(S);he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,J,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,T)}else{let K=S.textures;for(let ne=0;ne<K.length;ne++){let J=K[ne],Re=r.convert(J.format,J.colorSpace),me=r.convert(J.type),Se=y(J.internalFormat,Re,me,J.colorSpace),et=Z(S);z&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Se,S.width,S.height):he(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let ne=K.__webglTexture,J=Z(S);if(S.depthTexture.format===Bs)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(S.depthTexture.format===Xs)he(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ne(T){let S=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let ne=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ne)};K.addEventListener("dispose",ne),S.__depthDisposeCallback=ne}S.__boundDepthTexture=K}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[K],T,!1);else{let ne=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,S,z){let K=n.get(T);S!==void 0&&_e(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ne(T)}function $e(T){let S=T.texture,z=n.get(T),K=n.get(S);T.addEventListener("dispose",C);let ne=T.textures,J=T.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Se=0;Se<S.mipmaps.length;Se++)z.__webglFramebuffer[me][Se]=i.createFramebuffer()}else z.__webglFramebuffer[me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)z.__webglFramebuffer[me]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let me=0,Se=ne.length;me<Se;me++){let et=n.get(ne[me]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&he(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ne.length;me++){let Se=ne[me];z.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[me]);let et=r.convert(Se.format,Se.colorSpace),re=r.convert(Se.type),Ee=y(Se.internalFormat,et,re,Se.colorSpace,T.isXRRenderTarget===!0),ke=Z(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ee,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,z.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Le(i.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)_e(z.__webglFramebuffer[me][Se],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else _e(z.__webglFramebuffer[me],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,Se=ne.length;me<Se;me++){let et=ne[me],re=n.get(et);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Le(i.TEXTURE_2D,et),_e(z.__webglFramebuffer,T,et,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),p(et)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,K.__webglTexture),Le(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)_e(z.__webglFramebuffer[Se],T,S,i.COLOR_ATTACHMENT0,me,Se);else _e(z.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,me,0);p(S)&&m(me),t.unbindTexture()}T.depthBuffer&&Ne(T)}function ee(T){let S=T.textures;for(let z=0,K=S.length;z<K;z++){let ne=S[z];if(p(ne)){let J=v(T),Re=n.get(ne).__webglTexture;t.bindTexture(J,Re),m(J),t.unbindTexture()}}}let W=[],R=[];function le(T){if(T.samples>0){if(he(T)===!1){let S=T.textures,z=T.width,K=T.height,ne=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(T),me=S.length>1;if(me)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);let et=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,ne,i.NEAREST),c===!0&&(W.length=0,R.length=0,W.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&T.resolveDepthBuffer===!1&&(W.push(J),R.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,W))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Se]);let et=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Z(T){return Math.min(s.maxSamples,T.samples)}function he(T){let S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ie(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function we(T,S){let z=T.colorSpace,K=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Xt&&z!==Ii&&(Je.getTransfer(z)===lt?(K!==xn||ne!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function ue(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=he}function dv(i,e){function t(n,s=Ii){let r,o=Je.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===wh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return i.BYTE;if(n===dd)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Sh)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===md)return i.ALPHA;if(n===gd)return i.RGB;if(n===xn)return i.RGBA;if(n===xd)return i.LUMINANCE;if(n===_d)return i.LUMINANCE_ALPHA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===Ah)return i.RED_INTEGER;if(n===vd)return i.RG;if(n===Rh)return i.RG_INTEGER;if(n===Ch)return i.RGBA_INTEGER;if(n===qo||n===Yo||n===Zo||n===Ko)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ll||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===cl||n===ll)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===Ml||n===bl||n===Sl||n===wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===El||n===Tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yd||n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wl=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pv={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;l.inputState.pinching&&u>d+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ql=class extends Ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,x=null,g=new Xl,p=t.getContextAttributes(),m=null,v=null,y=[],_=[],A=new Q,E=null,C=new Ot;C.viewport=new st;let I=new Ot;I.viewport=new st;let b=[C,I],M=new Wl,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=y[q];return se===void 0&&(se=new Lr,y[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=y[q];return se===void 0&&(se=new Lr,y[q]=se),se.getGripSpace()},this.getHand=function(q){let se=y[q];return se===void 0&&(se=new Lr,y[q]=se),se.getHandSpace()};function D(q){let se=_.indexOf(q.inputSource);if(se===-1)return;let _e=y[se];_e!==void 0&&(_e.update(q.inputSource,q.frame,l||o),_e.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<y.length;q++){let se=_[q];se!==null&&(_[q]=null,y[q].disconnect(se))}P=null,N=null,g.reset(),e.setRenderTarget(m),d=null,u=null,f=null,s=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){let se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Yt(d.framebufferWidth,d.framebufferHeight,{format:xn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,_e=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?Xs:Bs,_e=p.stencil?Ws:as);let Ae={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(Ae),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Yt(u.textureWidth,u.textureHeight,{format:xn,type:vn,depthTexture:new ra(u.textureWidth,u.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(q){for(let se=0;se<q.removed.length;se++){let _e=q.removed[se],ae=_.indexOf(_e);ae>=0&&(_[ae]=null,y[ae].disconnect(_e))}for(let se=0;se<q.added.length;se++){let _e=q.added[se],ae=_.indexOf(_e);if(ae===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=_.length){_.push(_e),ae=Ne;break}else if(_[Ne]===null){_[Ne]=_e,ae=Ne;break}if(ae===-1)break}let Ae=y[ae];Ae&&Ae.connect(_e)}}let k=new L,$=new L;function H(q,se,_e){k.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);let ae=k.distanceTo($),Ae=se.projectionMatrix.elements,Ne=_e.projectionMatrix.elements,Be=Ae[14]/(Ae[10]-1),$e=Ae[14]/(Ae[10]+1),ee=(Ae[9]+1)/Ae[5],W=(Ae[9]-1)/Ae[5],R=(Ae[8]-1)/Ae[0],le=(Ne[8]+1)/Ne[0],Z=Be*R,he=Be*le,ie=ae/(-R+le),we=ie*-R;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(ie),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ae[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let ue=Be+ie,T=$e+ie,S=Z-we,z=he+(ae-we),K=ee*$e/T*ue,ne=W*$e/T*ue;q.projectionMatrix.makePerspective(S,z,K,ne,ue,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function oe(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let se=q.near,_e=q.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),M.near=I.near=C.near=se,M.far=I.far=C.far=_e,(P!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),C.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;let ae=q.parent,Ae=M.cameras;oe(M,ae);for(let Ne=0;Ne<Ae.length;Ne++)oe(Ae[Ne],ae);Ae.length===2?H(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),fe(q,M,ae)};function fe(q,se,_e){_e===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(_e.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ge=null;function Le(q,se){if(h=se.getViewerPose(l||o),x=se,h!==null){let _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ae=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let Ne=0;Ne<_e.length;Ne++){let Be=_e[Ne],$e=null;if(d!==null)$e=d.getViewport(Be);else{let W=f.getViewSubImage(u,Be);$e=W.viewport,Ne===0&&(e.setRenderTargetTextures(v,W.colorTexture,u.ignoreDepthValues?void 0:W.depthStencilTexture),e.setRenderTarget(v))}let ee=b[Ne];ee===void 0&&(ee=new Ot,ee.layers.enable(Ne),ee.viewport=new st,b[Ne]=ee),ee.matrix.fromArray(Be.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Be.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set($e.x,$e.y,$e.width,$e.height),Ne===0&&(M.matrix.copy(ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(ee)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){let Ne=f.getDepthInformation(_e[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,s.renderState)}}for(let _e=0;_e<y.length;_e++){let ae=_[_e],Ae=y[_e];ae!==null&&Ae!==void 0&&Ae.update(ae,se,l||o)}ge&&ge(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),x=null}let Qe=new Ad;Qe.setAnimationLoop(Le),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}},ts=new sn,xv=new Ve;function _v(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Td(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,y,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,v,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),y=v.envMap,_=v.envMapRotation;y&&(p.envMap.value=y,ts.copy(_),ts.x*=-1,ts.y*=-1,ts.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(ts)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vv(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(x(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",p));let A=y.program;n.updateUBOMapping(v,A);let E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let y=f();v.__bindingPointIndex=y;let _=i.createBuffer(),A=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=s[v.id],_=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,C=_.length;E<C;E++){let I=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=I.length;b<M;b++){let P=I[b];if(d(P,E,b,A)===!0){let N=P.__offset,D=Array.isArray(P.value)?P.value:[P.value],B=0;for(let Y=0;Y<D.length;Y++){let k=D[Y],$=g(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+B,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,A){let E=v.value,C=y+"_"+_;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{let I=A[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function x(v){let y=v.uniforms,_=0,A=16;for(let C=0,I=y.length;C<I;C++){let b=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,P=b.length;M<P;M++){let N=b[M],D=Array.isArray(N.value)?N.value:[N.value];for(let B=0,Y=D.length;B<Y;B++){let k=D[B],$=g(k),H=_%A,oe=H%$.boundary,fe=H+oe;_+=oe,fe!==0&&A-fe<$.storage&&(_+=A-fe),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=$.storage}}}let E=_%A;return E>0&&(_+=A-E),v.__size=_,v.__cache={},this}function g(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){let y=v.target;y.removeEventListener("dispose",p);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var oa=class{constructor(e={}){let{canvas:t=wm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),g=new Int32Array(4),p=null,m=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=Li,this.toneMappingExposure=1;let _=this,A=!1,E=0,C=0,I=null,b=-1,M=null,P=new st,N=new st,D=null,B=new be(0),Y=0,k=t.width,$=t.height,H=1,oe=null,fe=null,ge=new st(0,0,k,$),Le=new st(0,0,k,$),Qe=!1,q=new Or,se=!1,_e=!1,ae=new Ve,Ae=new Ve,Ne=new L,Be=new st,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function W(){return I===null?H:1}let R=n;function le(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mh}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),R===null){let F="webgl2";if(R=le(F,w),R===null)throw le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,he,ie,we,ue,T,S,z,K,ne,J,Re,me,Se,et,re,Ee,ke,Ge,Te,it,Ze,dt,U;function xe(){Z=new Nx(R),Z.init(),Ze=new dv(R,Z),he=new Cx(R,Z,e,Ze),ie=new hv(R,Z),he.reverseDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),we=new Bx(R),ue=new $_,T=new fv(R,Z,ie,ue,he,Ze,we),S=new Px(_),z=new Ux(_),K=new Xm(R),dt=new Ax(R,K),ne=new Fx(R,K,we,dt),J=new kx(R,ne,K,we),Ge=new zx(R,he,T),re=new Ix(ue),Re=new J_(_,S,z,Z,he,dt,re),me=new _v(_,ue),Se=new Q_,et=new rv(Z),ke=new Tx(_,S,z,ie,J,d,c),Ee=new cv(_,J,he),U=new vv(R,we,he,ie),Te=new Rx(R,Z,we),it=new Ox(R,Z,we),we.programs=Re.programs,_.capabilities=he,_.extensions=Z,_.properties=ue,_.renderLists=Se,_.shadowMap=Ee,_.state=ie,_.info=we}xe();let X=new ql(_,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(k,$,!1))},this.getSize=function(w){return w.set(k,$)},this.setSize=function(w,F,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,$=F,t.width=Math.floor(w*H),t.height=Math.floor(F*H),V===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(k*H,$*H).floor()},this.setDrawingBufferSize=function(w,F,V){k=w,$=F,H=V,t.width=Math.floor(w*V),t.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ge)},this.setViewport=function(w,F,V,G){w.isVector4?ge.set(w.x,w.y,w.z,w.w):ge.set(w,F,V,G),ie.viewport(P.copy(ge).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,F,V,G){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,F,V,G),ie.scissor(N.copy(Le).multiplyScalar(H).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){ie.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){fe=w},this.getClearColor=function(w){return w.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(w=!0,F=!0,V=!0){let G=0;if(w){let O=!1;if(I!==null){let ce=I.texture.format;O=ce===Ch||ce===Rh||ce===Ah}if(O){let ce=I.texture.type,ye=ce===vn||ce===as||ce===Nr||ce===Ws||ce===wh||ce===Eh,Ce=ke.getClearColor(),Ie=ke.getClearAlpha(),We=Ce.r,qe=Ce.g,Pe=Ce.b;ye?(x[0]=We,x[1]=qe,x[2]=Pe,x[3]=Ie,R.clearBufferuiv(R.COLOR,0,x)):(g[0]=We,g[1]=qe,g[2]=Pe,g[3]=Ie,R.clearBufferiv(R.COLOR,0,g))}else G|=R.COLOR_BUFFER_BIT}F&&(G|=R.DEPTH_BUFFER_BIT),V&&(G|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),et.dispose(),ue.dispose(),S.dispose(),z.dispose(),J.dispose(),dt.dispose(),U.dispose(),Re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Iu),X.removeEventListener("sessionend",Pu),Ki.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let w=we.autoReset,F=Ee.enabled,V=Ee.autoUpdate,G=Ee.needsUpdate,O=Ee.type;xe(),we.autoReset=w,Ee.enabled=F,Ee.autoUpdate=V,Ee.needsUpdate=G,Ee.type=O}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xe(w){let F=w.target;F.removeEventListener("dispose",Xe),Rt(F)}function Rt(w){Zt(w),ue.remove(w)}function Zt(w){let F=ue.get(w).programs;F!==void 0&&(F.forEach(function(V){Re.releaseProgram(V)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,G,O,ce){F===null&&(F=$e);let ye=O.isMesh&&O.matrixWorld.determinant()<0,Ce=wp(w,F,V,G,O);ie.setMaterial(G,ye);let Ie=V.index,We=1;if(G.wireframe===!0){if(Ie=ne.getWireframeAttribute(V),Ie===void 0)return;We=2}let qe=V.drawRange,Pe=V.attributes.position,rt=qe.start*We,pt=(qe.start+qe.count)*We;ce!==null&&(rt=Math.max(rt,ce.start*We),pt=Math.min(pt,(ce.start+ce.count)*We)),Ie!==null?(rt=Math.max(rt,0),pt=Math.min(pt,Ie.count)):Pe!=null&&(rt=Math.max(rt,0),pt=Math.min(pt,Pe.count));let xt=pt-rt;if(xt<0||xt===1/0)return;dt.setup(O,G,Ce,V,Ie);let en,at=Te;if(Ie!==null&&(en=K.get(Ie),at=it,at.setIndex(en)),O.isMesh)G.wireframe===!0?(ie.setLineWidth(G.wireframeLinewidth*W()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(O.isLine){let De=G.linewidth;De===void 0&&(De=1),ie.setLineWidth(De*W()),O.isLineSegments?at.setMode(R.LINES):O.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else O.isPoints?at.setMode(R.POINTS):O.isSprite&&at.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)at.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))at.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let De=O._multiDrawStarts,si=O._multiDrawCounts,ct=O._multiDrawCount,In=Ie?K.get(Ie).bytesPerElement:1,_s=ue.get(G).currentProgram.getUniforms();for(let on=0;on<ct;on++)_s.setValue(R,"_gl_DrawID",on),at.render(De[on]/In,si[on])}else if(O.isInstancedMesh)at.renderInstances(rt,xt,O.count);else if(V.isInstancedBufferGeometry){let De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,si=Math.min(V.instanceCount,De);at.renderInstances(rt,xt,si)}else at.render(rt,xt)};function ht(w,F,V){w.transparent===!0&&w.side===qt&&w.forceSinglePass===!1?(w.side=Gt,w.needsUpdate=!0,mo(w,F,V),w.side=Gn,w.needsUpdate=!0,mo(w,F,V),w.side=qt):mo(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),m=et.get(V),m.init(F),y.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();let G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ce=O.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){let Ce=ce[ye];ht(Ce,V,O),G.add(Ce)}else ht(ce,V,O),G.add(ce)}),y.pop(),m=null,G},this.compileAsync=function(w,F,V=null){let G=this.compile(w,F,V);return new Promise(O=>{function ce(){if(G.forEach(function(ye){ue.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){O(w);return}setTimeout(ce,10)}Z.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Cn=null;function ii(w){Cn&&Cn(w)}function Iu(){Ki.stop()}function Pu(){Ki.start()}let Ki=new Ad;Ki.setAnimationLoop(ii),typeof self!="undefined"&&Ki.setContext(self),this.setAnimationLoop=function(w){Cn=w,X.setAnimationLoop(w),w===null?Ki.stop():Ki.start()},X.addEventListener("sessionstart",Iu),X.addEventListener("sessionend",Pu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,F,I),m=et.get(w,y.length),m.init(F),y.push(m),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,se=re.init(this.clippingPlanes,_e),p=Se.get(w,v.length),p.init(),v.push(p),X.enabled===!0&&X.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&uc(ce,F,-1/0,_.sortObjects)}uc(w,F,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(oe,fe),ee=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ee&&ke.addToRenderList(p,w),this.info.render.frame++,se===!0&&re.beginShadows();let V=m.state.shadowsArray;Ee.render(V,w,F),se===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=p.opaque,O=p.transmissive;if(m.setupLights(),F.isArrayCamera){let ce=F.cameras;if(O.length>0)for(let ye=0,Ce=ce.length;ye<Ce;ye++){let Ie=ce[ye];Du(G,O,w,Ie)}ee&&ke.render(w);for(let ye=0,Ce=ce.length;ye<Ce;ye++){let Ie=ce[ye];Lu(p,w,Ie,Ie.viewport)}}else O.length>0&&Du(G,O,w,F),ee&&ke.render(w),Lu(p,w,F);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,F),dt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(m=y[y.length-1],se===!0&&re.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function uc(w,F,V,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){G&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);let ye=J.update(w),Ce=w.material;Ce.visible&&p.push(w,ye,Ce,V,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let ye=J.update(w),Ce=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Be.copy(ye.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){let Ie=ye.groups;for(let We=0,qe=Ie.length;We<qe;We++){let Pe=Ie[We],rt=Ce[Pe.materialIndex];rt&&rt.visible&&p.push(w,ye,rt,V,Be.z,Pe)}}else Ce.visible&&p.push(w,ye,Ce,V,Be.z,null)}}let ce=w.children;for(let ye=0,Ce=ce.length;ye<Ce;ye++)uc(ce[ye],F,V,G)}function Lu(w,F,V,G){let O=w.opaque,ce=w.transmissive,ye=w.transparent;m.setupLightsView(V),se===!0&&re.setGlobalState(_.clippingPlanes,V),G&&ie.viewport(P.copy(G)),O.length>0&&po(O,F,V),ce.length>0&&po(ce,F,V),ye.length>0&&po(ye,F,V),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Du(w,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Yt(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?fn:vn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let ce=m.state.transmissionRenderTarget[G.id],ye=G.viewport||P;ce.setSize(ye.z,ye.w);let Ce=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(B),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),ee&&ke.render(V);let Ie=_.toneMapping;_.toneMapping=Li;let We=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),se===!0&&re.setGlobalState(_.clippingPlanes,G),po(w,V,G),T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce),Z.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Pe=0,rt=F.length;Pe<rt;Pe++){let pt=F[Pe],xt=pt.object,en=pt.geometry,at=pt.material,De=pt.group;if(at.side===qt&&xt.layers.test(G.layers)){let si=at.side;at.side=Gt,at.needsUpdate=!0,Uu(xt,V,G,en,at,De),at.side=si,at.needsUpdate=!0,qe=!0}}qe===!0&&(T.updateMultisampleRenderTarget(ce),T.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ce),_.setClearColor(B,Y),We!==void 0&&(G.viewport=We),_.toneMapping=Ie}function po(w,F,V){let G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ce=w.length;O<ce;O++){let ye=w[O],Ce=ye.object,Ie=ye.geometry,We=G===null?ye.material:G,qe=ye.group;Ce.layers.test(V.layers)&&Uu(Ce,F,V,Ie,We,qe)}}function Uu(w,F,V,G,O,ce){w.onBeforeRender(_,F,V,G,O,ce),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,F,V,G,w,ce),O.transparent===!0&&O.side===qt&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,_.renderBufferDirect(V,F,G,O,w,ce),O.side=Gn,O.needsUpdate=!0,_.renderBufferDirect(V,F,G,O,w,ce),O.side=qt):_.renderBufferDirect(V,F,G,O,w,ce),w.onAfterRender(_,F,V,G,O,ce)}function mo(w,F,V){F.isScene!==!0&&(F=$e);let G=ue.get(w),O=m.state.lights,ce=m.state.shadowsArray,ye=O.state.version,Ce=Re.getParameters(w,O.state,ce,F,V),Ie=Re.getProgramCacheKey(Ce),We=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,We===void 0&&(w.addEventListener("dispose",Xe),We=new Map,G.programs=We);let qe=We.get(Ie);if(qe!==void 0){if(G.currentProgram===qe&&G.lightsStateVersion===ye)return Fu(w,Ce),qe}else Ce.uniforms=Re.getUniforms(w),w.onBeforeCompile(Ce,_),qe=Re.acquireProgram(Ce,Ie),We.set(Ie,qe),G.uniforms=Ce.uniforms;let Pe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=re.uniform),Fu(w,Ce),G.needsLights=Tp(w),G.lightsStateVersion=ye,G.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=qe,G.uniformsList=null,qe}function Nu(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Fu(w,F){let V=ue.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function wp(w,F,V,G,O){F.isScene!==!0&&(F=$e),T.resetTextureUnits();let ce=F.fog,ye=G.isMeshStandardMaterial?F.environment:null,Ce=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Xt,Ie=(G.isMeshStandardMaterial?z:S).get(G.envMap||ye),We=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color,xt=Li;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=_.toneMapping);let en=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,at=en!==void 0?en.length:0,De=ue.get(G),si=m.state.lights;if(se===!0&&(_e===!0||w!==M)){let mn=w===M&&G.id===b;re.setState(G,w,mn)}let ct=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==si.state.version||De.outputColorSpace!==Ce||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Ie||G.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==re.numPlanes||De.numIntersection!==re.numIntersection)||De.vertexAlphas!==We||De.vertexTangents!==qe||De.morphTargets!==Pe||De.morphNormals!==rt||De.morphColors!==pt||De.toneMapping!==xt||De.morphTargetsCount!==at)&&(ct=!0):(ct=!0,De.__version=G.version);let In=De.currentProgram;ct===!0&&(In=mo(G,F,O));let _s=!1,on=!1,xr=!1,_t=In.getUniforms(),zn=De.uniforms;if(ie.useProgram(In.program)&&(_s=!0,on=!0,xr=!0),G.id!==b&&(b=G.id,on=!0),_s||M!==w){ie.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),Tm(ae),Am(ae),_t.setValue(R,"projectionMatrix",ae)):_t.setValue(R,"projectionMatrix",w.projectionMatrix),_t.setValue(R,"viewMatrix",w.matrixWorldInverse);let bi=_t.map.cameraPosition;bi!==void 0&&bi.setValue(R,Ne.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&_t.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_t.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,on=!0,xr=!0)}if(O.isSkinnedMesh){_t.setOptional(R,O,"bindMatrix"),_t.setOptional(R,O,"bindMatrixInverse");let mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),_t.setValue(R,"boneTexture",mn.boneTexture,T))}O.isBatchedMesh&&(_t.setOptional(R,O,"batchingTexture"),_t.setValue(R,"batchingTexture",O._matricesTexture,T),_t.setOptional(R,O,"batchingIdTexture"),_t.setValue(R,"batchingIdTexture",O._indirectTexture,T),_t.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(R,"batchingColorTexture",O._colorsTexture,T));let _r=V.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Ge.update(O,V,In),(on||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,_t.setValue(R,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(zn.envMap.value=Ie,zn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(zn.envMapIntensity.value=F.environmentIntensity),on&&(_t.setValue(R,"toneMappingExposure",_.toneMappingExposure),De.needsLights&&Ep(zn,xr),ce&&G.fog===!0&&me.refreshFogUniforms(zn,ce),me.refreshMaterialUniforms(zn,G,H,$,m.state.transmissionRenderTarget[w.id]),ks.upload(R,Nu(De),zn,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ks.upload(R,Nu(De),zn,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_t.setValue(R,"center",O.center),_t.setValue(R,"modelViewMatrix",O.modelViewMatrix),_t.setValue(R,"normalMatrix",O.normalMatrix),_t.setValue(R,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let mn=G.uniformsGroups;for(let bi=0,Si=mn.length;bi<Si;bi++){let Ou=mn[bi];U.update(Ou,In),U.bind(Ou,In)}}return In}function Ep(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Tp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,V){ue.get(w.texture).__webglTexture=F,ue.get(w.depthTexture).__webglTexture=V;let G=ue.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){let V=ue.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){I=w,E=F,C=V;let G=!0,O=null,ce=!1,ye=!1;if(w){let Ie=ue.get(w);if(Ie.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(R.FRAMEBUFFER,null),G=!1;else if(Ie.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Ie.__hasExternalTextures)T.rebindTextures(w,ue.get(w.texture).__webglTexture,ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Pe=w.depthTexture;if(Ie.__boundDepthTexture!==Pe){if(Pe!==null&&ue.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ye=!0);let qe=ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?O=qe[F][V]:O=qe[F],ce=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?O=ue.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[V]:O=qe,P.copy(w.viewport),N.copy(w.scissor),D=w.scissorTest}else P.copy(ge).multiplyScalar(H).floor(),N.copy(Le).multiplyScalar(H).floor(),D=Qe;if(ie.bindFramebuffer(R.FRAMEBUFFER,O)&&G&&ie.drawBuffers(w,O),ie.viewport(P),ie.scissor(N),ie.setScissorTest(D),ce){let Ie=ue.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,V)}else if(ye){let Ie=ue.get(w.texture),We=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ie.__webglTexture,V||0,We)}b=-1},this.readRenderTargetPixels=function(w,F,V,G,O,ce,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){ie.bindFramebuffer(R.FRAMEBUFFER,Ce);try{let Ie=w.texture,We=Ie.format,qe=Ie.type;if(!he.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&V>=0&&V<=w.height-O&&R.readPixels(F,V,G,O,Ze.convert(We),Ze.convert(qe),ce)}finally{let Ie=I!==null?ue.get(I).__webglFramebuffer:null;ie.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,G,O,ce,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ce=Ce[ye]),Ce){let Ie=w.texture,We=Ie.format,qe=Ie.type;if(!he.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&V>=0&&V<=w.height-O){ie.bindFramebuffer(R.FRAMEBUFFER,Ce);let Pe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.bufferData(R.PIXEL_PACK_BUFFER,ce.byteLength,R.STREAM_READ),R.readPixels(F,V,G,O,Ze.convert(We),Ze.convert(qe),0);let rt=I!==null?ue.get(I).__webglFramebuffer:null;ie.bindFramebuffer(R.FRAMEBUFFER,rt);let pt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Em(R,pt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Pe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ce),R.deleteBuffer(Pe),R.deleteSync(pt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,V=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);let G=Math.pow(2,-V),O=Math.floor(w.image.width*G),ce=Math.floor(w.image.height*G),ye=F!==null?F.x:0,Ce=F!==null?F.y:0;T.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,ye,Ce,O,ce),ie.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,G=null,O=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ce,ye,Ce,Ie,We,qe,Pe,rt,pt,xt=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ce=V.max.x-V.min.x,ye=V.max.y-V.min.y,Ce=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,We=V.min.y,qe=V.isBox3?V.min.z:0):(ce=xt.width,ye=xt.height,Ce=xt.depth||1,Ie=0,We=0,qe=0),G!==null?(Pe=G.x,rt=G.y,pt=G.z):(Pe=0,rt=0,pt=0);let en=Ze.convert(F.format),at=Ze.convert(F.type),De;F.isData3DTexture?(T.setTexture3D(F,0),De=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),De=R.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),De=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);let si=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),In=R.getParameter(R.UNPACK_SKIP_PIXELS),_s=R.getParameter(R.UNPACK_SKIP_ROWS),on=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,xt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,We),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qe);let xr=w.isDataArrayTexture||w.isData3DTexture,_t=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let zn=ue.get(w),_r=ue.get(F),mn=ue.get(zn.__renderTarget),bi=ue.get(_r.__renderTarget);ie.bindFramebuffer(R.READ_FRAMEBUFFER,mn.__webglFramebuffer),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Si=0;Si<Ce;Si++)xr&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,O,qe+Si),w.isDepthTexture?(_t&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ue.get(F).__webglTexture,O,pt+Si),R.blitFramebuffer(Ie,We,ce,ye,Pe,rt,ce,ye,R.DEPTH_BUFFER_BIT,R.NEAREST)):_t?R.copyTexSubImage3D(De,O,Pe,rt,pt+Si,Ie,We,ce,ye):R.copyTexSubImage2D(De,O,Pe,rt,pt+Si,Ie,We,ce,ye);ie.bindFramebuffer(R.READ_FRAMEBUFFER,null),ie.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else _t?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(De,O,Pe,rt,pt,ce,ye,Ce,en,at,xt.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(De,O,Pe,rt,pt,ce,ye,Ce,en,xt.data):R.texSubImage3D(De,O,Pe,rt,pt,ce,ye,Ce,en,at,xt):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,Pe,rt,ce,ye,en,at,xt.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,Pe,rt,xt.width,xt.height,en,xt.data):R.texSubImage2D(R.TEXTURE_2D,O,Pe,rt,ce,ye,en,at,xt);R.pixelStorei(R.UNPACK_ROW_LENGTH,si),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,In),R.pixelStorei(R.UNPACK_SKIP_ROWS,_s),R.pixelStorei(R.UNPACK_SKIP_IMAGES,on),O===0&&F.generateMipmaps&&R.generateMipmap(De),ie.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V=null,G=null,O=0){return w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,V,G,O)},this.initRenderTarget=function(w){ue.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){E=0,C=0,I=null,ie.reset(),dt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var aa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},js=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Il,this.updateRanges=[],this.version=0,this.uuid=_n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new L,Oi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var zf=new L,kf=new st,Hf=new st,yv=new L,Vf=new Ve,Fo=new L,zc=new ln,Gf=new Ve,kc=new Ks,ca=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fo),this.boundingBox.expandByPoint(Fo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fo),this.boundingSphere.expandByPoint(Fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(s),e.ray.intersectsSphere(zc)!==!1&&(Gf.copy(s).invert(),kc.copy(e.ray).applyMatrix4(Gf),!(this.boundingBox!==null&&kc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;kf.fromBufferAttribute(s.attributes.skinIndex,e),Hf.fromBufferAttribute(s.attributes.skinWeight,e),zf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Hf.getComponent(r);if(o!==0){let a=kf.getComponent(r);Vf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yv.copy(zf).applyMatrix4(Vf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Br=class extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}},la=class extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wt,h=Wt,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wf=new Ve,Mv=new Ve,ha=class i{constructor(e=[],t=[]){this.uuid=_n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Mv;Wf.multiplyMatrices(a,t[r]),Wf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new la(t,e,e,xn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Br),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ls=class extends He{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ds=new Ve,Xf=new Ve,Oo=[],qf=new nn,bv=new Ve,Sr=new Fe,wr=new ln,Ut=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),qf.copy(e.boundingBox).applyMatrix4(Ds),this.boundingBox.union(qf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ds),wr.copy(e.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wr.copy(this.boundingSphere),wr.applyMatrix4(n),e.ray.intersectsSphere(wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),Xf.multiplyMatrices(n,Ds),Sr.matrixWorld=Xf,Sr.raycast(e,Oo);for(let o=0,a=Oo.length;o<a;o++){let c=Oo[o];c.instanceId=r,c.object=this,t.push(c)}Oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(s*this.count),s,this.count,Th,Nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var zr=class extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ua=new L,fa=new L,Yf=new Ve,Er=new Ks,Bo=new ln,Hc=new L,Zf=new L,Qs=class extends yt{constructor(e=new nt,t=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ua.fromBufferAttribute(t,s-1),fa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ua.distanceTo(fa);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Yf.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Yf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let g=d,p=x-1;g<p;g+=l){let m=h.getX(g),v=h.getX(g+1),y=zo(this,e,Er,c,m,v);y&&t.push(y)}if(this.isLineLoop){let g=h.getX(x-1),p=h.getX(d),m=zo(this,e,Er,c,g,p);m&&t.push(m)}}else{let d=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let g=d,p=x-1;g<p;g+=l){let m=zo(this,e,Er,c,g,g+1);m&&t.push(m)}if(this.isLineLoop){let g=zo(this,e,Er,c,x-1,d);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zo(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),t.distanceSqToSegment(ua,fa,Hc,Zf)>n)return;Hc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Hc);if(!(c<e.near||c>e.far))return{distance:c,point:Zf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Kf=new L,Jf=new L,da=class extends Qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kf.fromBufferAttribute(t,s),Jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kf.distanceTo(Jf);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},pa=class extends Qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},kr=class extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$f=new Ve,Yl=new Ks,ko=new ln,Ho=new L,er=class extends yt{constructor(e=new nt,t=new kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;$f.copy(s).invert(),Yl.copy(e.ray).applyMatrix4($f);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let x=u,g=d;x<g;x++){let p=l.getX(x);Ho.fromBufferAttribute(f,p),jf(Ho,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let x=u,g=d;x<g;x++)Ho.fromBufferAttribute(f,x),jf(Ho,x,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jf(i,e,t,n,s,r,o){let a=Yl.distanceSqToPoint(i);if(a<t){let c=new L;Yl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Hr=class extends Bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Wt,this.minFilter=Wt,this.generateMipmaps=!1,this.needsUpdate=!0}};var ma=class extends Bt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Q:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new Ve;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Vt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,x))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Vt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],d*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vr=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zl=class extends Vr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Vo=new L,Vc=new Lh,Gc=new Lh,Wc=new Lh,Kl=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Vo.subVectors(s[0],s[1]).add(s[0]),l=Vo);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Vo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),x<1e-4&&(x=g),p<1e-4&&(p=g),Vc.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,x,g,p),Gc.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,x,g,p),Wc.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,x,g,p)}else this.curveType==="catmullrom"&&(Vc.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Gc.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Wc.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Vc.calc(c),Gc.calc(c),Wc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qf(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Sv(i,e){let t=1-i;return t*t*e}function wv(i,e){return 2*(1-i)*i*e}function Ev(i,e){return i*i*e}function Dr(i,e,t,n){return Sv(i,e)+wv(i,t)+Ev(i,n)}function Tv(i,e){let t=1-i;return t*t*t*e}function Av(i,e){let t=1-i;return 3*t*t*i*e}function Rv(i,e){return 3*(1-i)*i*i*e}function Cv(i,e){return i*i*i*e}function Ur(i,e,t,n,s){return Tv(i,e)+Av(i,t)+Rv(i,n)+Cv(i,s)}var ga=class extends Mn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends Mn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,s.x,r.x,o.x,a.x),Ur(e,s.y,r.y,o.y,a.y),Ur(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xa=class extends Mn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends Mn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Mn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(e,s.x,r.x,o.x),Dr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},jl=class extends Mn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Dr(e,s.x,r.x,o.x),Dr(e,s.y,r.y,o.y),Dr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Qf(a,c.x,l.x,h.x,f.x),Qf(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Kl,CubicBezierCurve:ga,CubicBezierCurve3:Jl,EllipseCurve:Vr,LineCurve:xa,LineCurve3:$l,QuadraticBezierCurve:_a,QuadraticBezierCurve3:jl,SplineCurve:va}),eh=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}},ya=class extends eh{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new xa(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new _a(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ga(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Vr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Gr=class i extends nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new Q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(a,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bi=class i extends nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,g=[],p=n/2,m=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function v(){let _=new L,A=new L,E=0,C=(t-e)/n;for(let I=0;I<=r;I++){let b=[],M=I/r,P=M*(t-e)+e;for(let N=0;N<=s;N++){let D=N/s,B=D*c+a,Y=Math.sin(B),k=Math.cos(B);A.x=P*Y,A.y=-M*n+p,A.z=P*k,f.push(A.x,A.y,A.z),_.set(Y,C,k).normalize(),u.push(_.x,_.y,_.z),d.push(D,1-M),b.push(x++)}g.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){let M=g[b][I],P=g[b+1][I],N=g[b+1][I+1],D=g[b][I+1];(e>0||b!==0)&&(h.push(M,P,D),E+=3),(t>0||b!==r-1)&&(h.push(P,N,D),E+=3)}l.addGroup(m,E,0),m+=E}function y(_){let A=x,E=new Q,C=new L,I=0,b=_===!0?e:t,M=_===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*M,0),u.push(0,M,0),d.push(.5,.5),x++;let P=x;for(let N=0;N<=s;N++){let B=N/s*c+a,Y=Math.cos(B),k=Math.sin(B);C.x=b*k,C.y=p*M,C.z=b*Y,f.push(C.x,C.y,C.z),u.push(0,M,0),E.x=Y*.5+.5,E.y=k*.5*M+.5,d.push(E.x,E.y),x++}for(let N=0;N<s;N++){let D=A+N,B=P+N;_===!0?h.push(B,B+1,D):h.push(B+1,B,D),I+=3}l.addGroup(m,I,_===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ma=class i extends Bi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},th=class i extends nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new L,_=new L,A=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],A),c(y,_,A,v)}function c(v,y,_,A){let E=A+1,C=[];for(let I=0;I<=E;I++){C[I]=[];let b=v.clone().lerp(_,I/E),M=y.clone().lerp(_,I/E),P=E-I;for(let N=0;N<=P;N++)N===0&&I===E?C[I][N]=b:C[I][N]=b.clone().lerp(M,N/P)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){let M=Math.floor(b/2);b%2===0?(u(C[I][M+1]),u(C[I+1][M]),u(C[I][M])):(u(C[I][M+1]),u(C[I+1][M+1]),u(C[I+1][M]))}}function l(v){let y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=p(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;o.push(_,1-A)}x(),f()}function f(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],A=o[v+4],E=Math.max(y,_,A),C=Math.min(y,_,A);E>.9&&C<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function x(){let v=new L,y=new L,_=new L,A=new L,E=new Q,C=new Q,I=new Q;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),A.copy(v).add(y).add(_).divideScalar(3);let P=p(A);g(E,M+0,v,P),g(C,M+2,y,P),g(I,M+4,_,P)}}function g(v,y,_,A){A<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ba=class i extends th{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var hs=class extends ya{constructor(e){super(e),this.uuid=_n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ya().fromJSON(s))}return this}},Iv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ld(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(n&&(r=Nv(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)f=i[x],u=i[x+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Wr(r,o,t,a,c,d,0),o}};function Ld(i,e,t,n,s){let r,o;if(s===qv(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ed(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ed(r,i[r],i[r+1],o);return o&&Na(o,o.next)&&(qr(o),o=o.next),o}function us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Na(t,t.next)||Et(t.prev,t,t.next)===0)){if(qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&kv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Lv(i,n,s,r):Pv(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),qr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Dv(us(i),e,t),Wr(i,e,t,n,s,r,2)):o===2&&Uv(i,e,t,n,s,r):Wr(us(i),e,t,n,s,r,1);break}}}function Pv(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Fs(s,a,r,c,o,l,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Lv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Et(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,x=h<f?h<u?h:u:f<u?f:u,g=a>c?a>l?a:l:c>l?c:l,p=h>f?h>u?h:u:f>u?f:u,m=nh(d,x,e,t,n),v=nh(g,p,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=m&&_&&_.z<=v;){if(y.x>=d&&y.x<=g&&y.y>=x&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,f,l,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=g&&_.y>=x&&_.y<=p&&_!==s&&_!==o&&Fs(a,h,c,f,l,u,_.x,_.y)&&Et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=g&&y.y>=x&&y.y<=p&&y!==s&&y!==o&&Fs(a,h,c,f,l,u,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=g&&_.y>=x&&_.y<=p&&_!==s&&_!==o&&Fs(a,h,c,f,l,u,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Na(s,r)&&Dd(s,n,n.next,r)&&Xr(s,r)&&Xr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),qr(n),qr(n.next),n=i=r),n=n.next}while(n!==i);return us(n)}function Uv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gv(o,a)){let c=Ud(o,a);o=us(o,o.next),c=us(c,c.next),Wr(o,e,t,n,s,r,0),Wr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nv(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ld(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Vv(l));for(s.sort(Fv),r=0;r<s.length;r++)t=Ov(s[r],t);return t}function Fv(i,e){return i.x-e.x}function Ov(i,e){let t=Bv(i,e);if(!t)return e;let n=Ud(t,i);return us(n,n.next),us(t,t.next)}function Bv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Fs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Xr(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&zv(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function zv(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function kv(i,e,t,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hv(s)}function Hv(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Gv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wv(i,e)&&(Xr(i,e)&&Xr(e,i)&&Xv(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Na(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Na(i,e){return i.x===e.x&&i.y===e.y}function Dd(i,e,t,n){let s=Wo(Et(i,e,t)),r=Wo(Et(i,e,n)),o=Wo(Et(t,n,i)),a=Wo(Et(t,n,e));return!!(s!==r&&o!==a||s===0&&Go(i,t,e)||r===0&&Go(i,n,e)||o===0&&Go(t,i,n)||a===0&&Go(t,e,n))}function Go(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Wo(i){return i>0?1:i<0?-1:0}function Wv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Dd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xr(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Xv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ud(i,e){let t=new ih(i.i,i.x,i.y),n=new ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ed(i,e,t,n){let s=new ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];td(e),nd(n,e);let o=e.length;t.forEach(td);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,nd(n,t[c]);let a=Iv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function nd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Sa=class i extends nt{constructor(e=new hs([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Yv,y,_=!1,A,E,C,I;m&&(y=m.getSpacedPoints(h),_=!0,u=!1,A=m.computeFrenetFrames(h,!1),E=new L,C=new L,I=new L),u||(p=0,d=0,x=0,g=0);let b=a.extractPoints(l),M=b.shape,P=b.holes;if(!Di.isClockWise(M)){M=M.reverse();for(let ee=0,W=P.length;ee<W;ee++){let R=P[ee];Di.isClockWise(R)&&(P[ee]=R.reverse())}}let D=Di.triangulateShape(M,P),B=M;for(let ee=0,W=P.length;ee<W;ee++){let R=P[ee];M=M.concat(R)}function Y(ee,W,R){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(W,R)}let k=M.length,$=D.length;function H(ee,W,R){let le,Z,he,ie=ee.x-W.x,we=ee.y-W.y,ue=R.x-ee.x,T=R.y-ee.y,S=ie*ie+we*we,z=ie*T-we*ue;if(Math.abs(z)>Number.EPSILON){let K=Math.sqrt(S),ne=Math.sqrt(ue*ue+T*T),J=W.x-we/K,Re=W.y+ie/K,me=R.x-T/ne,Se=R.y+ue/ne,et=((me-J)*T-(Se-Re)*ue)/(ie*T-we*ue);le=J+ie*et-ee.x,Z=Re+we*et-ee.y;let re=le*le+Z*Z;if(re<=2)return new Q(le,Z);he=Math.sqrt(re/2)}else{let K=!1;ie>Number.EPSILON?ue>Number.EPSILON&&(K=!0):ie<-Number.EPSILON?ue<-Number.EPSILON&&(K=!0):Math.sign(we)===Math.sign(T)&&(K=!0),K?(le=-we,Z=ie,he=Math.sqrt(S)):(le=ie,Z=we,he=Math.sqrt(S/2))}return new Q(le/he,Z/he)}let oe=[];for(let ee=0,W=B.length,R=W-1,le=ee+1;ee<W;ee++,R++,le++)R===W&&(R=0),le===W&&(le=0),oe[ee]=H(B[ee],B[R],B[le]);let fe=[],ge,Le=oe.concat();for(let ee=0,W=P.length;ee<W;ee++){let R=P[ee];ge=[];for(let le=0,Z=R.length,he=Z-1,ie=le+1;le<Z;le++,he++,ie++)he===Z&&(he=0),ie===Z&&(ie=0),ge[le]=H(R[le],R[he],R[ie]);fe.push(ge),Le=Le.concat(ge)}for(let ee=0;ee<p;ee++){let W=ee/p,R=d*Math.cos(W*Math.PI/2),le=x*Math.sin(W*Math.PI/2)+g;for(let Z=0,he=B.length;Z<he;Z++){let ie=Y(B[Z],oe[Z],le);ae(ie.x,ie.y,-R)}for(let Z=0,he=P.length;Z<he;Z++){let ie=P[Z];ge=fe[Z];for(let we=0,ue=ie.length;we<ue;we++){let T=Y(ie[we],ge[we],le);ae(T.x,T.y,-R)}}}let Qe=x+g;for(let ee=0;ee<k;ee++){let W=u?Y(M[ee],Le[ee],Qe):M[ee];_?(C.copy(A.normals[0]).multiplyScalar(W.x),E.copy(A.binormals[0]).multiplyScalar(W.y),I.copy(y[0]).add(C).add(E),ae(I.x,I.y,I.z)):ae(W.x,W.y,0)}for(let ee=1;ee<=h;ee++)for(let W=0;W<k;W++){let R=u?Y(M[W],Le[W],Qe):M[W];_?(C.copy(A.normals[ee]).multiplyScalar(R.x),E.copy(A.binormals[ee]).multiplyScalar(R.y),I.copy(y[ee]).add(C).add(E),ae(I.x,I.y,I.z)):ae(R.x,R.y,f/h*ee)}for(let ee=p-1;ee>=0;ee--){let W=ee/p,R=d*Math.cos(W*Math.PI/2),le=x*Math.sin(W*Math.PI/2)+g;for(let Z=0,he=B.length;Z<he;Z++){let ie=Y(B[Z],oe[Z],le);ae(ie.x,ie.y,f+R)}for(let Z=0,he=P.length;Z<he;Z++){let ie=P[Z];ge=fe[Z];for(let we=0,ue=ie.length;we<ue;we++){let T=Y(ie[we],ge[we],le);_?ae(T.x,T.y+y[h-1].y,y[h-1].x+R):ae(T.x,T.y,f+R)}}}q(),se();function q(){let ee=s.length/3;if(u){let W=0,R=k*W;for(let le=0;le<$;le++){let Z=D[le];Ae(Z[2]+R,Z[1]+R,Z[0]+R)}W=h+p*2,R=k*W;for(let le=0;le<$;le++){let Z=D[le];Ae(Z[0]+R,Z[1]+R,Z[2]+R)}}else{for(let W=0;W<$;W++){let R=D[W];Ae(R[2],R[1],R[0])}for(let W=0;W<$;W++){let R=D[W];Ae(R[0]+k*h,R[1]+k*h,R[2]+k*h)}}n.addGroup(ee,s.length/3-ee,0)}function se(){let ee=s.length/3,W=0;_e(B,W),W+=B.length;for(let R=0,le=P.length;R<le;R++){let Z=P[R];_e(Z,W),W+=Z.length}n.addGroup(ee,s.length/3-ee,1)}function _e(ee,W){let R=ee.length;for(;--R>=0;){let le=R,Z=R-1;Z<0&&(Z=ee.length-1);for(let he=0,ie=h+p*2;he<ie;he++){let we=k*he,ue=k*(he+1),T=W+le+we,S=W+Z+we,z=W+Z+ue,K=W+le+ue;Ne(T,S,z,K)}}}function ae(ee,W,R){c.push(ee),c.push(W),c.push(R)}function Ae(ee,W,R){Be(ee),Be(W),Be(R);let le=s.length/3,Z=v.generateTopUV(n,s,le-3,le-2,le-1);$e(Z[0]),$e(Z[1]),$e(Z[2])}function Ne(ee,W,R,le){Be(ee),Be(W),Be(le),Be(W),Be(R),Be(le);let Z=s.length/3,he=v.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);$e(he[0]),$e(he[1]),$e(he[3]),$e(he[1]),$e(he[2]),$e(he[3])}function Be(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function $e(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ql[s.type]().fromJSON(s)),new i(n,e.options)}},Yv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,c),new Q(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],x=e[s*3+2],g=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-f),new Q(u,1-x),new Q(g,1-m)]:[new Q(a,1-c),new Q(h,1-f),new Q(d,1-x),new Q(p,1-m)]}};function Zv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wa=class i extends nt{constructor(e=new hs([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(o,2));function l(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,x=u.holes;Di.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=x.length;p<m;p++){let v=x[p];Di.isClockWise(v)===!0&&(x[p]=v.reverse())}let g=Di.triangulateShape(d,x);for(let p=0,m=x.length;p<m;p++){let v=x[p];d=d.concat(v)}for(let p=0,m=d.length;p<m;p++){let v=d[p];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=g.length;p<m;p++){let v=g[p],y=v[0]+f,_=v[1]+f,A=v[2]+f;n.push(y,_,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Kv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Kv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var tr=class i extends nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new L,u=new L,d=[],x=[],g=[],p=[];for(let m=0;m<=n;m++){let v=[],y=m/n,_=0;m===0&&o===0?_=.5/t:m===n&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){let E=A/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),x.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),p.push(E+_,1-y),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let y=h[m][v+1],_=h[m][v],A=h[m+1][v],E=h[m+1][v+1];(m!==0||o>0)&&d.push(y,_,E),(m!==n-1||c<Math.PI)&&d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new ot(x,3)),this.setAttribute("normal",new ot(g,3)),this.setAttribute("uv",new ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zi=class extends Tt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Wn=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},un=class extends Wn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Xo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $v(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function id(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Nd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sh=class extends ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vu,endingEnd:Vu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:r=e,a=2*t-n;break;case Wu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gu:o=e,c=2*n-t;break;case Wu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),g=x*x,p=g*x,m=-u*p+2*u*g-u*x,v=(1+u)*p+(-1.5-2*u)*g+(-.5+u)*x+1,y=(-1-d)*p+(1.5+d)*g+.5*x,_=d*p-d*g;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+v*o[l+A]+y*o[c+A]+_*o[f+A];return r}},rh=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},oh=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xo(t,this.TimeBufferType),this.values=Xo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xo(e.times,Array),values:Xo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Ys:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Ys;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Jv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let g=t[f+x];if(g!==t[u+x]||g!==t[d+x]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ys;var Hi=class extends bn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=qs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends bn{};Ea.prototype.ValueTypeName="color";var xi=class extends bn{};xi.prototype.ValueTypeName="number";var ah=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Qt.slerpFlat(r,0,o,l-a,o,l,c);return r}},_i=class extends bn{InterpolantFactoryMethodLinear(e){return new ah(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends bn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=qs;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends bn{};vi.prototype.ValueTypeName="vector";var Ta=class{constructor(e="",t=-1,n=[],s=$p){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=_n(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Qv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=$v(c);c=id(c,1,h),l=id(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new xi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let f=h[1],u=s[f];u||(s[f]=u=[]),u.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,u,d,x,g){if(d.length!==0){let p=[],m=[];Nd(d,p,m,x),p.length!==0&&g.push(new f(u,p,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let f=0;f<l.length;f++){let u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let g=0;g<u[x].morphTargets.length;g++)d[u[x].morphTargets[g]]=-1;for(let g in d){let p=[],m=[];for(let v=0;v!==u[x].morphTargets.length;++v){let y=u[x];p.push(y.time),m.push(y.morphTarget===g?1:0)}s.push(new xi(".morphTargetInfluence["+g+"]",p,m))}c=d.length*o}else{let d=".bones["+t[f].name+"]";n(vi,d+".position",u,"pos",s),n(_i,d+".quaternion",u,"rot",s),n(vi,d+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function jv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return Ea;case"quaternion":return _i;case"bool":case"boolean":return Hi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=jv(i.type);if(i.times===void 0){let t=[],n=[];Nd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ch=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],x=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},ey=new ch,Fn=class{constructor(e){this.manager=e!==void 0?e:ey,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},Gi=class extends Fn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:s});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=hi[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,x=d!==0,g=0,p=new ReadableStream({start(m){v();function v(){f.read().then(({done:y,value:_})=>{if(y)m.close();else{g+=_.byteLength;let A=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:d});for(let E=0,C=h.length;E<C;E++){let I=h[E];I.onProgress&&I.onProgress(A)}m.enqueue(_),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new lh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(x=>d.decode(x))}}}).then(l=>{Pi.add(e,l);let h=hi[e];delete hi[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=hi[e];if(h===void 0)throw this.manager.itemError(e),l;delete hi[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hh=class extends Fn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Fr("img");function c(){h(),Pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var nr=class extends Fn{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,o=new hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ir=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Aa=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xc=new Ve,sd=new L,rd=new L,Yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(sd),rd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rd),t.updateMatrixWorld(),Xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uh=class extends Yr{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},sr=class extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},od=new Ve,Tr=new L,qc=new L,fh=class extends Yr{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),qc.copy(n.position),qc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qc),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}},Ra=class extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},dh=class extends Yr{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ca=class extends Fn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Pi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(e,c),r.manager.itemStart(e)}};var or=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ad(){return performance.now()}var Dh="\\[\\]\\.:\\/",ty=new RegExp("["+Dh+"]","g"),Uh="[^"+Dh+"]",ny="[^"+Dh.replace("\\.","")+"]",iy=/((?:WC+[\/:])*)/.source.replace("WC",Uh),sy=/(WCOD+)?/.source.replace("WCOD",ny),ry=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),ay=new RegExp("^"+iy+sy+ry+oy+"$"),cy=["material","materials","bones","map"],ph=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ty,"")}static parseTrackName(e){let t=ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);cy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=ph;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eM=new Float32Array(1);var cd=new Q,Ia=class{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Nh(i,e){if(e===Md)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kr||e===La){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Kr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Fa=class extends Fn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Wi.extractUrlBase(e);o=Wi.resolveURL(l,this.path)}else o=Wi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kd){try{o[je.KHR_BINARY_GLTF]=new iu(e)}catch(f){s&&s(f);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new hu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case je.KHR_MATERIALS_UNLIT:o[f]=new kh;break;case je.KHR_DRACO_MESH_COMPRESSION:o[f]=new su(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[f]=new ru;break;case je.KHR_MESH_QUANTIZATION:o[f]=new ou;break;default:u.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ly(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},zh=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ra(h),l.distance=f;break;case"spot":l=new sr(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},kh=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},Hh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(a,a)}return Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jh=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qh=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},eu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},tu=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}},nu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(let x of f){let g=new Ve,p=new L,m=new Qt,v=new L(1,1,1),y=new Ut(x.geometry,x.material,u);for(let _=0;_<u;_++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,g.compose(p,m,v));for(let _ in c)if(_==="_COLOR_0"){let A=c[_];y.instanceColor=new ls(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&x.geometry.setAttribute(_,c[_]);yt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},kd="glTF",jr=12,Fd={JSON:1313821514,BIN:5130562},iu=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-jr,r=new DataView(e,jr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Fd.JSON){let l=new Uint8Array(e,jr+o,a);this.content=n.decode(l)}else if(c===Fd.BIN){let l=jr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},su=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let f=cu[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=cu[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],d=cr[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(let x in d.attributes){let g=d.attributes[x],p=c[x];p!==void 0&&(g.normalized=p)}f(d)},a,l,Xt,u)})})}},ru=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ou=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},Oa=class extends ki{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,f=(n-t)/h,u=f*f,d=u*f,x=e*l,g=x-l,p=-2*d+3*u,m=d-u,v=1-p,y=m-u+f;for(let _=0;_!==a;_++){let A=o[g+_+a],E=o[g+_+c]*h,C=o[x+_+a],I=o[x+_]*h;r[_]=v*A+y*E+p*C+m*I}return r}},hy=new Qt,au=class extends Oa{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return hy.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Od={9728:Wt,9729:tn,9984:bh,9985:Cr,9986:Us,9987:Hn},Bd={33071:di,33648:os,10497:gi},Fh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uy={CUBICSPLINE:void 0,LINEAR:Ys,STEP:qs},Oh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Wn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),i.DefaultMaterial}function fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dy(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let f=e[l];if(n){let u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(u)}if(s){let u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function py(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(i){let e,t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bh(t.attributes):e=i.indices+":"+Bh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Bh(i.targets[n]);return e}function Bh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xy=new Ve,hu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ly,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new nr(this.options.manager):this.textureLoader=new Ca(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return fs(r,a,s),yi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Fh[s.type],a=cr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new He(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Fh[s.type],l=cr[s.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0,g,p;if(d&&d!==f){let m=Math.floor(u/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,y=t.cache.get(v);y||(g=new l(a,m*d,s.count*d/h),y=new cs(g,d/h),t.cache.add(v,y)),p=new Oi(y,c,u%d/h,x)}else a===null?g=new l(s.count*c):g=new l(a,u,s.count*c),p=new He(g,c,x);if(s.sparse!==void 0){let m=Fh.SCALAR,v=cr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,A=new v(o[1],y,s.sparse.count*m),E=new l(o[2],_,s.sparse.count*c);a!==null&&(p=new He(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,I=A.length;C<I;C++){let b=A[C];if(p.setX(b,E[C*c]),c>=2&&p.setY(b,E[C*c+1]),c>=3&&p.setZ(b,E[C*c+2]),c>=4&&p.setW(b,E[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Od[u.magFilter]||tn,h.minFilter=Od[u.minFilter]||Hn,h.wrapS=Bd[u.wrapS]||gi,h.wrapT=Bd[u.wrapT]||gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==tn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let x=u;t.isImageBitmapLoader===!0&&(x=function(g){let p=new Bt(g);p.needsUpdate=!0,u(p)}),t.load(Wi.resolveURL(f,r.path),x,void 0,d)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),yi(f,o),f.userData.mimeType=o.mimeType||gy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new kr,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new zr,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Wn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let f=s[je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Xt),a.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,bt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=qt);let h=r.alphaMode||Oh.OPAQUE;if(h===Oh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Oh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Dt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Dt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Dt){let f=r.emissiveFactor;a.emissive=new be().setRGB(f[0],f[1],f[2],Xt)}return r.emissiveTexture!==void 0&&o!==Dt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let f=new o(a);return r.name&&(f.name=r.name),yi(f,r),t.associations.set(f,{materials:e}),r.extensions&&fs(s,f,r),f})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return zd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=my(l),f=s[h];if(f)o.push(f.promise);else{let u;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=zd(new nt,l,t),s[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?fy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,x=h.length;d<x;d++){let g=h[d],p=o[d],m,v=l[d];if(p.mode===Sn.TRIANGLES||p.mode===Sn.TRIANGLE_STRIP||p.mode===Sn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ca(g,v):new Fe(g,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Sn.TRIANGLE_STRIP?m.geometry=Nh(m.geometry,La):p.mode===Sn.TRIANGLE_FAN&&(m.geometry=Nh(m.geometry,Kr));else if(p.mode===Sn.LINES)m=new da(g,v);else if(p.mode===Sn.LINE_STRIP)m=new Qs(g,v);else if(p.mode===Sn.LINE_LOOP)m=new pa(g,v);else if(p.mode===Sn.POINTS)m=new er(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&py(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),yi(m,r),p.extensions&&fs(s,m,p),t.assignFinalMaterial(m),f.push(m)}for(let d=0,x=f.length;d<x;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&fs(s,f[0],r),f[0];let u=new vt;r.extensions&&fs(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,x=f.length;d<x;d++)u.add(f[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Jr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let f=o[l];if(f){a.push(f);let u=new Ve;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ha(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){let d=s.channels[f],x=s.samplers[d.sampler],g=d.target,p=g.node,m=s.parameters!==void 0?s.parameters[x.input]:x.input,v=s.parameters!==void 0?s.parameters[x.output]:x.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",v)),l.push(x),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],x=f[2],g=f[3],p=f[4],m=[];for(let v=0,y=u.length;v<y;v++){let _=u[v],A=d[v],E=x[v],C=g[v],I=p[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,A,E,C,I);if(b)for(let M=0;M<b.length;M++)m.push(b[M])}return new Ta(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,xy)});for(let d=0,x=f.length;d<x;d++)h.add(f[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Br:l.length>1?h=new vt:l.length===1?h=l[0]:h=new yt,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=o),yi(h,r),r.extensions&&fs(n,h,r),r.matrix!==void 0){let f=new Ve;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new vt;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&fs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,f=c.length;h<f;h++)r.add(c[h]);let l=h=>{let f=new Map;for(let[u,d]of s.associations)(u instanceof hn||u instanceof Bt)&&f.set(u,d);return h.traverse(u=>{let d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Xi[r.path]===Xi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(Xi[r.path]){case Xi.weights:l=xi;break;case Xi.rotation:l=_i;break;case Xi.position:case Xi.scale:l=vi;break;default:switch(n.itemSize){case 1:l=xi;break;case 2:case 3:default:l=vi;break}break}let h=s.interpolation!==void 0?uy[s.interpolation]:Ys,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){let x=new l(c[u]+"."+Xi[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=lu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?au:Oa;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _y(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=lu(cr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let f=r[l];if(f.POSITION!==void 0){let u=t.json.accessors[f.POSITION],d=u.min,x=u.max;if(d!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(x[2]))),u.normalized){let g=lu(cr[u.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new ln;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function zd(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=cu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),yi(i,e),_y(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?dy(i,e.targets,t):i})}var uu=new WeakMap,Ba=class extends Fn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new Gi(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,bt,n).catch(n)}decodeDracoFile(e,t,n,s,r=Xt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(uu.has(e)){let c=uu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),uu.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new nt;e.index&&t.setIndex(new He(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new He(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==bt)return;let n=new be;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Je.toWorkingColorSpace(n,bt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new Gi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=vy.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function vy(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(f){h({draco:f})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let f=h.draco,u=new f.Decoder;try{let d=t(f,u,new Int8Array(c),l),x=d.attributes.map(g=>g.array.buffer);d.index&&x.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},x)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{f.destroy(u)}});break}};function t(o,a,c,l){let h=l.attributeIDs,f=l.attributeTypes,u,d,x=a.GetEncodedGeometryType(c);if(x===o.TRIANGULAR_MESH)u=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,u);else if(x===o.POINT_CLOUD)u=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let g={index:null,attributes:[]};for(let p in h){let m=self[f[p]],v,y;if(l.useUniqueIDs)y=h[p],v=a.GetAttributeByUniqueId(u,y);else{if(y=a.GetAttributeId(u,o[h[p]]),y===-1)continue;v=a.GetAttribute(u,y)}let _=s(o,a,u,p,m,v);p==="color"&&(_.vertexColorSpace=l.vertexColorSpace),g.attributes.push(_)}return x===o.TRIANGULAR_MESH&&(g.index=n(o,a,u)),o.destroy(u),g}function n(o,a,c){let h=c.num_faces()*3,f=h*4,u=o._malloc(f);a.GetTrianglesUInt32Array(c,f,u);let d=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:d,itemSize:1}}function s(o,a,c,l,h,f){let u=f.num_components(),x=c.num_points()*u,g=x*h.BYTES_PER_ELEMENT,p=r(o,h),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(c,f,p,g,m);let v=new h(o.HEAPF32.buffer,m,x).slice();return o._free(m),{name:l,array:v,itemSize:u}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Nt=[{id:"ferrari458",name:"Ferrari 458",w:2.26,len:4.53,maxKmh:300,accel:13,handling:10},{id:"aventador",name:"Lamborghini Aventador",w:2.27,len:4.78,maxKmh:320,accel:14,handling:9.5},{id:"valhalla",name:"Aston Martin Valhalla",w:2.2,len:4.7,maxKmh:330,accel:15,handling:10.5},{id:"porsche911",name:"Porsche 911 Turbo",w:2.14,len:4.29,maxKmh:250,accel:11,handling:10},{id:"tesla3",name:"Tesla Model 3",w:2.18,len:4.69,maxKmh:240,accel:12,handling:9},{id:"urus",name:"Lamborghini Urus",w:2.26,len:5.11,maxKmh:280,accel:11,handling:8.5},{id:"peugeot3008",name:"Peugeot 3008",w:2.1,len:4.45,maxKmh:190,accel:8,handling:8}],Hd=new Ba;Hd.setDecoderPath("draco/");var Vd=new Fa;Vd.setDRACOLoader(Hd);var On={},lr={};function yy(i,e){let t=i.scene,n=[],s=[];return t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!1;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o){if(!a)continue;a.transparent&&a.opacity<.99&&(a.depthWrite=!1);let c=(a.name||"").toLowerCase();/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop/.test(c)&&!/front/.test(c)?s.push(a):(/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector/.test(c)||/^light/.test(c))&&n.push(a),a.envMapIntensity===void 0&&(a.envMapIntensity=1)}}),{scene:t,headMats:n,tailMats:s}}function Qr(i,e,t){let n=i+(e?"_lo":"");return On[n]?Promise.resolve(On[n]):(lr[n]||(lr[n]=new Promise((s,r)=>{Vd.load(`models/${n}.glb`,o=>{On[n]=yy(o,!e),delete lr[n],s(On[n])},t,o=>{delete lr[n],r(o)})})),lr[n])}var eo=(i,e)=>!!On[i+(e?"_lo":"")],za=null;function My(){if(za)return za;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.3)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),za=new ma(i),za}function ka(i,e,t){let n=On[i+(e?"_lo":"")]||On[i+"_lo"],s=Nt.find(f=>f.id===i),r=n.scene.clone(!0),o=new Map;r.traverse(f=>{if(!f.isMesh)return;let u=d=>{if(d&&/^BODY_PAINT/.test(d.name)){if(!o.has(d)){let x=d.clone();x.color.setHex(t),x.metalness=Math.max(x.metalness,.5),x.roughness=Math.min(x.roughness,.35),x.envMapIntensity=1.2,o.set(d,x)}return o.get(d)}return d};f.material=Array.isArray(f.material)?f.material.map(u):u(f.material)});let a=[],c=[];r.traverse(f=>{/^wheel_(FL|FR|RL|RR)$/.test(f.name)&&c.push(f)});for(let f of c){let u=new vt;u.position.copy(f.position),f.position.set(0,0,0),r.add(u),u.add(f);let d=new nn().setFromObject(f);u.userData.spin=f,u.userData.front=/F/.test(f.name),u.userData.radius=Math.max(.25,(d.max.y-d.min.y)/2),a.push(u)}let l=new Fe(new yn(s.w+.9,s.len+.9),new Dt({map:My(),transparent:!0,depthWrite:!1,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.y=.06,l.renderOrder=1,l.userData.own=!0,r.add(l);let h=new Fe(new tr(.3,10,8),new Dt({color:5609983,transparent:!0,opacity:0,depthWrite:!1,blending:Ui}));return h.position.set(0,.38,s.len/2+.35),h.scale.set(1.6,.45,2.2),h.userData.own=!0,r.add(h),r.userData={spec:s,wheels:a,glow:h,paint:[...o.values()],proto:n},r}function Gd(i){for(let e in On){let t=On[e];for(let n of t.headMats)n.emissive=n.emissive||new be,n.emissive.setHex(16773840),n.emissiveIntensity=i?4:0;for(let n of t.tailMats)n.emissive=n.emissive||new be,n.emissive.setHex(16722458),n.emissiveIntensity=i?2.5:0}}function Wd(i){for(let e in On)On[e].scene.traverse(t=>{if(t.isMesh){let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.envMapIntensity=i)}})}function Ha(i){if(i){for(let e of i.userData.paint||[])e.dispose();i.traverse(e=>{e.isMesh&&e.userData.own&&(e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose())})}}var to=class i extends Fe{constructor(){let e=i.SkyShader,t=new Tt({name:e.name,uniforms:Xn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Gt,depthWrite:!1});super(new Mt(1,1,1),t),this.isSky=!0}};to.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var qn=4,ds=64,It=13.5,qi=[-4.3,0,4.3],hr=It/2+3.3,tt=(i,e)=>i+Math.random()*(e-i);var Yn=new Qt,Zn=new L,Kn=new L(1,1,1),Jn=new Ve,wn=new sn;function ps(i,e,t,n,s,r,o){Zn.set(t,n,s),wn.set(0,r,0),Yn.setFromEuler(wn),Kn.set(o,o,o),Jn.compose(Zn,Yn,Kn),i.setMatrixAt(e,Jn)}function Xd(i,e){let t=new Ut(i.trunk.geometry,i.trunk.material,e.length),n=new Ut(i.cards.geometry,i.cards.material,e.length*i.cards.n),s=0;return e.forEach((r,o)=>{let{x:a,z:c,scale:l}=r;Zn.set(a,0,c),wn.set(0,r.rot||0,0),Yn.setFromEuler(wn),Kn.set(l,i.trunk.h*l,l),Jn.compose(Zn,Yn,Kn),t.setMatrixAt(o,Jn);let h=i.cards;for(let f=0;f<h.n;f++){let u=tt(0,6.28),d=tt(-1,1),x=Math.sqrt(1-d*d)*tt(.35,1),g=h.yc+d*h.ry,p=h.rx;if(h.cone){let v=(f+.5)/h.n;g=h.yc-h.ry+v*h.ry*2,p=h.rx*(1.15-v)}Zn.set(a+Math.cos(u)*x*p*l,g*l,c+Math.sin(u)*x*p*l),h.flat?wn.set(Math.PI/2-tt(.15,.45),tt(0,6.28),0,"YXZ"):wn.set(tt(-h.tilt,h.tilt),tt(0,6.28),tt(-.3,.3),"YXZ"),Yn.setFromEuler(wn);let m=l*tt(.8,1.15);Kn.set(m,m,m),Jn.compose(Zn,Yn,Kn),n.setMatrixAt(s++,Jn)}}),t.castShadow=!0,n.castShadow=!0,t.frustumCulled=!1,n.frustumCulled=!1,[t,n]}var Va=class{constructor(e,t){this.scene=e,this.style=t,this.group=new vt,e.add(this.group),this.samples=[],this.chunks=new Map,this.gen={x:0,z:0,h:0,s:0,k:0,kTarget:0,left:0,rampLen:40},this.piece=null,this.piece={type:"straight",left:200},this.extend(1500)}nextPiece(){if(Math.random()<.35)return{type:"straight",left:tt(80,260)};let t=tt(140,480),n=tt(12,65)*Math.PI/180;return{type:"curve",k:(Math.random()<.5?-1:1)/t,left:t*n,ramp:40}}extend(e){let t=this.gen;for(;t.s<e;){(!this.piece||this.piece.left<=0)&&(this.piece=this.nextPiece());let n=this.piece,s=n.type==="curve"?n.k:0;t.k+=(s-t.k)*Math.min(1,qn/35),t.h+=t.k*qn,t.x+=-Math.sin(t.h)*qn,t.z+=-Math.cos(t.h)*qn,t.s+=qn,n.left-=qn,this.samples.push({x:t.x,z:t.z,h:t.h,s:t.s,k:t.k})}}pointAt(e){let t=e/qn,n=Math.floor(t),s=t-n;n<0&&(n=0),n>=this.samples.length-1&&(n=this.samples.length-2);let r=this.samples[n],o=this.samples[n+1],a=o.h-r.h;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);let c=r.h+a*s;return{x:r.x+(o.x-r.x)*s,z:r.z+(o.z-r.z)*s,h:c,rx:Math.cos(c),rz:-Math.sin(c),fx:-Math.sin(c),fz:-Math.cos(c)}}nearest(e,t,n){let s=this.samples.length,r=-1,o=1/0,a=Math.max(0,n-40),c=Math.min(s-1,n+40);for(let p=a;p<=c;p++){let m=this.samples[p],v=(m.x-e)**2+(m.z-t)**2;v<o&&(o=v,r=p)}let l=this.samples[r],h=Math.cos(l.h),f=-Math.sin(l.h),u=-Math.sin(l.h),d=-Math.cos(l.h),x=e-l.x,g=t-l.z;return{i:r,d:x*h+g*f,along:x*u+g*d,s:l.s+(x*u+g*d),h:l.h,fx:u,fz:d,rx:h,rz:f,k:l.k}}ensure(e){let t=Math.max(0,Math.floor((e-70)/ds)),n=Math.floor((e+330)/ds);this.extend((n+2)*ds*qn);for(let[s,r]of this.chunks)(s<t||s>n+1)&&(this.disposeChunk(r),this.chunks.delete(s));for(let s=t;s<=n;s++)this.chunks.has(s)||this.chunks.set(s,this.buildChunk(s))}disposeChunk(e){this.group.remove(e.group),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.isMesh&&!t.userData.shared&&t.geometry.dispose()})}obstaclesNear(e){let t=[],n=Math.floor((e-20)/ds),s=Math.floor((e+20)/ds);for(let r=n;r<=s;r++){let o=this.chunks.get(r);if(o)for(let a of o.obstacles)t.push(a)}return t}ribbon(e,t,n,s,r,o,a=!1){let c=t-e+1,l=new Float32Array(c*2*3),h=new Float32Array(c*2*2),f=[];for(let d=0;d<c;d++){let x=this.samples[e+d],g=Math.cos(x.h),p=-Math.sin(x.h);l.set([x.x+g*n,r,x.z+p*n,x.x+g*s,r,x.z+p*s],d*6);let m=x.s*o;if(h.set([0,m,1,m],d*4),d<c-1){let v=d*2;s>n?f.push(v,v+1,v+2,v+1,v+3,v+2):f.push(v,v+2,v+1,v+1,v+2,v+3)}}let u=new nt;return u.setAttribute("position",new He(l,3)),u.setAttribute("uv",new He(h,2)),u.setIndex(f),u.computeVertexNormals(),u}shortRibbon(e,t,n,s,r){let a=new Float32Array(12),c=new Float32Array(8);[e,t].forEach((h,f)=>{let u=this.pointAt(h);a.set([u.x+u.rx*n,r,u.z+u.rz*n,u.x+u.rx*s,r,u.z+u.rz*s],f*6),c.set([0,f,1,f],f*4)});let l=new nt;return l.setAttribute("position",new He(a,3)),l.setAttribute("uv",new He(c,2)),l.setIndex(s>n?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),l}buildChunk(e){let t=this.style,n=t.mats,s=e*ds,r=Math.min(this.samples.length-1,(e+1)*ds),o=new vt,a=[],c=this.samples[s].s,l=this.samples[r].s,h=new Fe(this.ribbon(s,r,-It/2,It/2,.05,1/7),n.road);h.receiveShadow=!0,o.add(h);for(let u of[-1,1]){let d=new Fe(this.ribbon(s,r,u*It/2,u*(It/2+3.2),.035,.14285714285714285),n.shoulder);d.receiveShadow=!0,o.add(d),o.add(new Fe(this.ribbon(s,r,u*(It/2-.45),u*(It/2-.27),.07,1),n.line))}let f=[];for(let u=Math.ceil(c/9)*9;u<l;u+=9)for(let d of[-2.15,2.15])f.push(this.shortRibbon(u,u+3.2,d-.08,d+.08,.07));if(f.length){let u=by(f);o.add(new Fe(u,n.line))}if(t.guardrail){let u=(r-s+1)*2,d=new Ut(n.railGeo,n.rail,u),x=new Ut(n.postGeo,n.rail,u),g=0;for(let p=s;p<=r;p++)for(let m of[-1,1]){let v=this.samples[p],y=Math.cos(v.h),_=-Math.sin(v.h);ps(d,g,v.x+y*m*hr,.7,v.z+_*m*hr,v.h,1),ps(x,g,v.x+y*m*(hr+.05),.38,v.z+_*m*(hr+.05),v.h,1),g++}d.frustumCulled=!1,x.frustumCulled=!1,o.add(d,x)}if(t.poles){let u=Math.floor((l-c)/10)*2,d=new Ut(n.poleGeo,n.pole,u),x=0;for(let g=c;g<l-1&&x<u;g+=10)for(let p of[-1,1]){let m=this.pointAt(g);ps(d,x++,m.x+m.rx*p*(It/2+.9),.7,m.z+m.rz*p*(It/2+.9),m.h,1)}d.count=x,o.add(d)}for(let u of t.scatter){if(u.tree){let g=u.tree,p=u.perChunk,m=new Ut(g.trunk.geometry,g.trunk.material,p),v=new Ut(g.cards.geometry,g.cards.material,p*g.cards.n),y=0;for(let _=0;_<p;_++){let A=tt(c,l),C=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),I=this.pointAt(A),b=tt(u.scale[0],u.scale[1]),M=I.x+I.rx*C,P=I.z+I.rz*C;Zn.set(M,0,P),wn.set(0,tt(0,6.28),0),Yn.setFromEuler(wn),Kn.set(b,g.trunk.h*b,b),Jn.compose(Zn,Yn,Kn),m.setMatrixAt(_,Jn);let N=g.cards;for(let D=0;D<N.n;D++){let B=tt(0,6.28),Y=tt(-1,1),k=Math.sqrt(1-Y*Y)*tt(.35,1),$=N.yc+Y*N.ry,H=N.rx;if(N.cone){let Le=(D+.5)/N.n;$=N.yc-N.ry+Le*N.ry*2,H=N.rx*(1.15-Le)}let oe=M+Math.cos(B)*k*H*b,fe=P+Math.sin(B)*k*H*b;Zn.set(oe,$*b,fe),N.flat?wn.set(Math.PI/2-tt(.15,.45),tt(0,6.28),0,"YXZ"):wn.set(tt(-N.tilt,N.tilt),tt(0,6.28),tt(-.3,.3),"YXZ"),Yn.setFromEuler(wn);let ge=b*tt(.8,1.15);Kn.set(ge,ge,ge),Jn.compose(Zn,Yn,Kn),v.setMatrixAt(y++,Jn)}Math.abs(C)<45&&a.push({type:"circle",x:M,z:P,r:g.obstacle*b})}m.castShadow=!0,v.castShadow=!0,m.frustumCulled=!1,v.frustumCulled=!1,o.add(m,v);continue}if(u.grass){let g=u.perChunk,p=new Ut(u.grass.geometry,u.grass.material,g);for(let m=0;m<g;m++){let v=tt(c,l),_=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),A=this.pointAt(v),E=tt(u.scale[0],u.scale[1]);ps(p,m,A.x+A.rx*_,0,A.z+A.rz*_,tt(0,6.28),E)}p.frustumCulled=!1,o.add(p);continue}let d=u.perChunk,x=u.parts.map(g=>new Ut(g.geometry,g.material,d));for(let g=0;g<d;g++){let p=tt(c,l),v=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),y=this.pointAt(p),_=tt(u.scale[0],u.scale[1]),A=u.billboard?(Math.random()<.5?0:.5)+y.h:tt(0,6.28),E=y.x+y.rx*v,C=y.z+y.rz*v;x.forEach((I,b)=>{let M=u.parts[b];ps(I,g,E,(M.y||0)*_,C,A+(M.rotY||0),_*(M.scale||1))}),u.obstacle&&Math.abs(v)<45&&a.push({type:"circle",x:E,z:C,r:u.obstacle*_})}x.forEach((g,p)=>{g.frustumCulled=!1,g.castShadow=!!u.parts[p].shadow,o.add(g)})}{let u=tt(c+20,l-20),d=e%2===0?-1:1,x=this.pointAt(u),g=new vt,p=n.billboards[e%n.billboards.length],m=new Fe(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,p,n.rail]);m.position.set(0,7.5,0),m.userData.shared=!0,g.add(m);for(let _ of[-3.5,3.5]){let A=new Fe(n.bbPostGeo,n.rail);A.position.set(_,2.25,0),A.userData.shared=!0,g.add(A)}g.position.set(x.x+x.rx*d*19,0,x.z+x.rz*d*19),g.rotation.y=x.h-d*.55,o.add(g);let v=Math.cos(g.rotation.y),y=Math.sin(g.rotation.y);for(let _ of[-3.5,3.5])a.push({type:"circle",x:g.position.x+_*v,z:g.position.z-_*y,r:.3});if(e%3===1){let _=(c+l)/2,A=this.pointAt(_),E=new vt;for(let b of[-1,1]){let M=new Fe(n.gantryPostGeo,n.rail);M.position.set(b*(It/2+1.2),3.75,0),M.userData.shared=!0,E.add(M),a.push({type:"circle",x:A.x+A.rx*b*(It/2+1.2),z:A.z+A.rz*b*(It/2+1.2),r:.4})}let C=new Fe(n.gantryBeamGeo,n.rail);C.position.set(0,7.5,0),C.userData.shared=!0,E.add(C);let I=new Fe(n.gantrySignGeo,[n.rail,n.rail,n.rail,n.rail,n.sign,n.rail]);I.position.set(0,6,.2),I.userData.shared=!0,E.add(I),E.position.set(A.x,0,A.z),E.rotation.y=A.h,o.add(E)}}if(t.buildings){let u=c+tt(0,10),d=0;for(;u<l-8;){for(let v of[-1,1]){let y=(Math.floor(u/37)+v)%6===0,_=t.makeBuilding(y),A=this.pointAt(u+_.d/2),E=v*(It/2+4.5+_.w/2+_.gap);_.group.position.set(A.x+A.rx*E,0,A.z+A.rz*E),_.group.rotation.y=A.h+(y?v===-1?-Math.PI/2:Math.PI/2:0),o.add(_.group);let C=y?_.d/2:_.w/2,I=y?_.w/2:_.d/2;a.push({type:"box",x:_.group.position.x,z:_.group.position.z,hw:C,hl:I,h:_.group.rotation.y}),d++}u+=tt(14,24)}let x=Math.floor((l-c)/26)*2,g=new Ut(n.lampGeo,n.lamp,x),p=new Ut(n.lampGlowGeo,n.lampGlow,x),m=0;for(let v=c+5;v<l-5&&m<x;v+=26)for(let y of[-1,1]){let _=this.pointAt(v),A=_.x+_.rx*y*(It/2+1),E=_.z+_.rz*y*(It/2+1);ps(g,m,A,0,E,_.h+(y===1?Math.PI:0),1),ps(p,m,A,0,E,_.h+(y===1?Math.PI:0),1),m++,a.push({type:"circle",x:A,z:E,r:.2})}g.count=m,p.count=m,o.add(g,p)}return this.group.add(o),{ci:e,i0:s,i1:r,group:o,obstacles:a}}dispose(){for(let e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.scene.remove(this.group)}};function by(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length,h.dispose()}let l=new nt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}var gt=400,qd=(i,e)=>i+Math.random()*(e-i),Sy=(i,e,t)=>Math.max(e,Math.min(t,i)),no=new Qt,ur=new L,fr=new L(1,1,1),dr=new Ve,Ga=new sn;function rn(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}var Yd={motorway:.09,trunk:.09,primary:.085,secondary:.08,tertiary:.075,residential:.07,unclassified:.07,living_street:.065,service:.06,track:.055},Zd={motorway:30,trunk:26,primary:20,secondary:17,tertiary:15,residential:11,unclassified:12,living_street:7,service:7,track:6},Wa=class{constructor(e,t,n){this.scene=e,this.style=t,this.data=n,this.M=t.mats,this.group=new vt,e.add(this.group),this.nodes=n.nodes,this.roads=n.roads,this.hasRails=!1,this.isMap=!0,this.tiles=new Map,this.roadMeshes=new Map,this.areaMeshes=new Map,this.buildIndex(),this.makeMaterials()}buildIndex(){let e=this.nodes;this.cell=60,this.hash=new Map,this.nodeRoads=new Map,this.roadTiles=new Map,this.tileRoads=new Map,this.tileBuildings=new Map,this.tileAreas=new Map,this.tileTrees=new Map,this.tilePois=new Map;let t=(s,r)=>s*100003+r;this.roads.forEach((s,r)=>{s.len=0,s.seg=[];for(let f=0;f<s.n.length-1;f++){let u=e[s.n[f]],d=e[s.n[f+1]],x=Math.hypot(d[0]-u[0],d[1]-u[1]);s.seg.push(x),s.len+=x;let g=Math.min(u[0],d[0]),p=Math.max(u[0],d[0]),m=Math.min(u[1],d[1]),v=Math.max(u[1],d[1]);for(let y=Math.floor(g/this.cell);y<=Math.floor(p/this.cell);y++)for(let _=Math.floor(m/this.cell);_<=Math.floor(v/this.cell);_++){let A=t(y,_),E=this.hash.get(A);E||(E=[],this.hash.set(A,E)),E.push(r*4096+f)}}s.n.forEach((f,u)=>{let d=this.nodeRoads.get(f);d||(d=[],this.nodeRoads.set(f,d)),d.push([r,u])});let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let f of s.n){let u=e[f];o=Math.min(o,u[0]),a=Math.max(a,u[0]),c=Math.min(c,u[1]),l=Math.max(l,u[1])}let h=[];for(let f=Math.floor(o/gt);f<=Math.floor(a/gt);f++)for(let u=Math.floor(c/gt);u<=Math.floor(l/gt);u++){let d=t(f,u);h.push(d);let x=this.tileRoads.get(d);x||(x=[],this.tileRoads.set(d,x)),x.push(r)}this.roadTiles.set(r,h)});let n=(s,r,o,a)=>{let c=t(Math.floor(r/gt),Math.floor(o/gt)),l=s.get(c);l||(l=[],s.set(c,l)),l.push(a)};this.data.buildings.forEach((s,r)=>{let o=Kd(s.p);s.c=o,n(this.tileBuildings,o[0],o[1],r)}),this.data.areas.forEach((s,r)=>{let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h of s.p)o=Math.min(o,h[0]),a=Math.max(a,h[0]),c=Math.min(c,h[1]),l=Math.max(l,h[1]);if(!((a-o)*(l-c)>4e6))for(let h=Math.floor(o/gt);h<=Math.floor(a/gt);h++)for(let f=Math.floor(c/gt);f<=Math.floor(l/gt);f++){let u=t(h,f),d=this.tileAreas.get(u);d||(d=[],this.tileAreas.set(u,d)),d.push(r)}}),this.data.trees.forEach(s=>n(this.tileTrees,s[0],s[1],s));for(let s of this.data.treeRows)for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],c=Math.hypot(a[0]-o[0],a[1]-o[1]);for(let l=0;l<c;l+=9){let h=l/c;n(this.tileTrees,o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h,[o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h])}}this.data.pois.forEach(s=>n(this.tilePois,s.c[0],s.c[1],s)),this.key=t}nearest(e,t,n){let s=this.nodes,r=null,o=1/0,a=n&&n.skipMinor,c=n&&n.exclude,l=Math.floor(e/this.cell),h=Math.floor(t/this.cell);for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++){let x=this.hash.get(this.key(l+u,h+d));if(x)for(let g of x){let p=Math.floor(g/4096),m=g%4096,v=this.roads[p];if(a&&(v.t==="service"||v.t==="track")||c===p)continue;let y=s[v.n[m]],_=s[v.n[m+1]],A=_[0]-y[0],E=_[1]-y[1],C=A*A+E*E||1,I=((e-y[0])*A+(t-y[1])*E)/C;I=Sy(I,0,1);let b=y[0]+A*I,M=y[1]+E*I,P=Math.hypot(e-b,t-M),N=P-v.w/2;N<o&&(o=N,r={d:P,w:v.w,r:p,i:m,t:I,ex:A,ez:E,px:b,pz:M})}}if(!r)return{d:1e9,w:0,onRoad:!1,h:0,name:"",type:""};let f=this.roads[r.r];return r.h=Math.atan2(-r.ex,-r.ez),r.onRoad=r.d<=f.w/2+.9,r.name=f.name,r.type=f.t,r}makeMaterials(){let e=this.style,t=this.M,n=a=>new Wn(a);this.mat={road:t.road,roadDirt:n({map:e.tex("sand"),color:10127978,roughness:1}),line:t.line,rail:t.rail,house:e.fMatsHouse,wall:e.wallMat,roof:e.roofTileMat,roofFlat:n({color:5922406,roughness:1}),park:n({map:e.tex("grass"),color:9420650,roughness:1}),pitch:n({map:e.tex("grass"),color:7320666,roughness:1}),water:n({color:4161456,roughness:.1,metalness:.3,envMapIntensity:1.5}),farm:n({map:e.tex("sand"),color:12099696,roughness:1}),lot:n({map:e.tex("pavement"),color:11184810,roughness:1}),scrub:n({map:e.tex("grass"),color:10525802,roughness:1}),railbed:n({color:5591114,roughness:1}),railsteel:n({color:9080208,roughness:.4,metalness:.8})};for(let a of[this.mat.park,this.mat.pitch,this.mat.farm,this.mat.lot,this.mat.scrub])a.map=a.map.clone(),a.map.repeat.set(1/8,1/8),a.map.needsUpdate=!0;this.houseGeo=new Mt(1,1,1),this.houseGeo.translate(0,.5,0);let s=this.houseGeo.attributes.uv;for(let a=0;a<s.count;a++)s.setXY(a,s.getX(a)*2.6,s.getY(a)*1);this.roofGeo=new Ma(1,1,4),this.roofGeo.rotateY(Math.PI/4),this.roofGeo.translate(0,.5,0),this.wallGeo=new Mt(1,1,1),this.wallGeo.translate(0,.5,0);let r=this.wallGeo.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*3,r.getY(a)*.5);let o=this.houseGeo.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a),o.getY(a))}ensure(e,t){let n=Math.floor(e/gt),s=Math.floor(t/gt),r=2;for(let[a,c]of this.tiles)(Math.abs(c.tx-n)>r+1||Math.abs(c.tz-s)>r+1)&&(this.disposeTile(c),this.tiles.delete(a));let o=0;for(let a=-r;a<=r;a++)for(let c=-r;c<=r;c++){if(o>=2&&(Math.abs(a)>1||Math.abs(c)>1))continue;let l=this.key(n+a,s+c);this.tiles.has(l)||(this.tiles.set(l,this.buildTile(n+a,s+c,l)),o++)}}obstaclesNear(e,t){let n=[],s=Math.floor(e/gt),r=Math.floor(t/gt);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let c=this.tiles.get(this.key(s+o,r+a));if(c)for(let l of c.obstacles)Math.abs(l.x-e)<60&&Math.abs(l.z-t)<60&&n.push(l)}return n}disposeTile(e){this.group.remove(e.group),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.geometry&&!t.userData.shared&&t.geometry.dispose()});for(let t of e.roads){let n=this.roadMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose()}),this.roadMeshes.delete(t))}for(let t of e.areas){let n=this.areaMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.areaMeshes.delete(t))}}buildTile(e,t,n){let s=new vt,r=[],o=this.nodes,a=e*gt,c=t*gt,l=this.tileRoads.get(n)||[];for(let g of l){let p=this.roadMeshes.get(g);p||(p={refs:0,mesh:this.buildRoad(g)},this.roadMeshes.set(g,p),this.group.add(p.mesh)),p.refs++}let h=[];for(let g of l){let p=this.roads[g];for(let m of p.n){let v=o[m];if(v[0]<a||v[0]>=a+gt||v[1]<c||v[1]>=c+gt)continue;let y=this.nodeRoads.get(m);if(!y||y.length<2)continue;let _=0,A=0;for(let[E]of y)_=Math.max(_,this.roads[E].w),A=Math.max(A,Yd[this.roads[E].t]||.06);h.find(E=>E[0]===m)||h.push([m,v,_,A])}}if(h.length){let g=h.map(([,m,v,y])=>{let _=new Gr(v/2,14);_.rotateX(-Math.PI/2),_.translate(m[0],y+.002,m[1]);let A=_.attributes.uv;for(let E=0;E<A.count;E++)A.setXY(E,A.getX(E)*v/7,A.getY(E)*v/7);return _}),p=new Fe(du(g),this.mat.road);p.receiveShadow=!0,s.add(p)}for(let g of this.tileAreas.get(n)||[]){let p=this.areaMeshes.get(g);if(!p){let m=this.buildArea(g);if(!m)continue;p={refs:0,mesh:m},this.areaMeshes.set(g,p),this.group.add(m)}p.refs++}for(let g of this.tileBuildings.get(n)||[]){let p=this.data.buildings[g],m=this.buildBuilding(p);if(!m)continue;s.add(m);let v=Ty(p.p);r.push({type:"box",...v})}let f=[],u=[];for(let g of l){let p=this.roads[g];if(!/residential|unclassified|living_street/.test(p.t))continue;let m=21,v=10,y=0;for(let _=0;_<p.n.length-1;_++){let A=o[p.n[_]],E=o[p.n[_+1]],C=p.seg[_],I=(E[0]-A[0])/C,b=(E[1]-A[1])/C,M=-b,P=I;for(;v<C;v+=m){y++;let N=A[0]+I*v,D=A[1]+b*v;if(!(N<a||N>=a+gt||D<c||D>=c+gt))for(let B of[-1,1]){if(rn(g,y,B+2)<.18)continue;let k=p.w/2+8.5+rn(g,y,B+7)*3,$=N+M*B*k,H=D+P*B*k,oe=this.nearest($,H,{exclude:g});if(oe.d<oe.w/2+7||this.nearest($+I*6,H+b*6,{exclude:g}).d<6||this.nearest($-I*6,H-b*6,{exclude:g}).d<6||this.nearBuilding($,H,14))continue;let fe=Math.atan2(-I,-b)+(B===1?Math.PI:0),ge=5+rn(g,y,11)*1.6,Le=4+rn(g,y,13)*1.2,Qe=3.1+rn(g,y,17)*.5;f.push({x:$,z:H,yaw:fe,hw:ge,hd:Le,hh:Qe,tint:Math.floor(rn(g,y,19)*4)}),r.push({type:"box",x:$,z:H,hw:Le,hl:ge,h:fe});let q=p.w/2+1.3,se=N+M*B*q,_e=D+P*B*q,ae=(rn(g,y,23)-.5)*8;for(let Ae of[ae-5.5,ae+5.5]){let Ne=se+I*Ae,Be=_e+b*Ae,$e=!0;for(let ee of[-3.75,0,3.75]){let W=this.nearest(Ne+I*ee,Be+b*ee,{exclude:g});if(W.d<W.w/2+2.5){$e=!1;break}}$e&&(f.push({wall:!0,x:Ne,z:Be,yaw:fe,len:7.5}),r.push({type:"box",x:Ne,z:Be,hw:.15,hl:3.75,h:fe}))}if(rn(g,y,29)<.3){let Ae=N+M*B*(p.w/2+3.2)+I*6,Ne=D+P*B*(p.w/2+3.2)+b*6;u.push({x:Ae,z:Ne,scale:.6+rn(g,y,31)*.5,rot:rn(g,y,37)*6.28}),r.push({type:"circle",x:Ae,z:Ne,r:.4})}}}v-=C}}let d=f.filter(g=>!g.wall),x=f.filter(g=>g.wall);if(d.length){let g=new Ut(this.houseGeo,this.mat.house,d.length),p=new Ut(this.roofGeo,this.mat.roof,d.length);d.forEach((m,v)=>{ur.set(m.x,0,m.z),Ga.set(0,m.yaw,0),no.setFromEuler(Ga),fr.set(m.hd*2,m.hh,m.hw*2),dr.compose(ur,no,fr),g.setMatrixAt(v,dr),ur.set(m.x,m.hh,m.z),fr.set((m.hd+.6)*2*Math.SQRT1_2,2+m.hd*.12,(m.hw+.6)*2*Math.SQRT1_2),dr.compose(ur,no,fr),p.setMatrixAt(v,dr)}),g.castShadow=!0,g.receiveShadow=!0,p.castShadow=!0,g.userData.shared=!0,p.userData.shared=!0,s.add(g,p)}if(x.length){let g=new Ut(this.wallGeo,this.mat.wall,x.length);x.forEach((p,m)=>{ur.set(p.x,0,p.z),Ga.set(0,p.yaw,0),no.setFromEuler(Ga),fr.set(.25,1.8,p.len),dr.compose(ur,no,fr),g.setMatrixAt(m,dr)}),g.castShadow=!0,g.userData.shared=!0,s.add(g)}for(let g of this.tileTrees.get(n)||[])u.push({x:g[0],z:g[1],scale:.8+rn(g[0]|0,g[1]|0)*.5,rot:0}),r.push({type:"circle",x:g[0],z:g[1],r:.5});for(let g of this.tileAreas.get(n)||[]){let p=this.data.areas[g];if(p.k!=="park"&&p.k!=="grass")continue;let m=Kd(p.p);if(m[0]<a||m[0]>=a+gt||m[1]<c||m[1]>=c+gt)continue;let v=wy(p.p),y=Math.min(14,Math.floor((v[2]-v[0])*(v[3]-v[1])/2500));for(let _=0;_<y;_++){let A=v[0]+rn(g,_,1)*(v[2]-v[0]),E=v[1]+rn(g,_,2)*(v[3]-v[1]);Ey(A,E,p.p)&&(this.nearest(A,E).d<8||(u.push({x:A,z:E,scale:.9+rn(g,_,3)*.5,rot:0}),r.push({type:"circle",x:A,z:E,r:.5})))}}if(u.length){let[g,p]=Xd(this.style.treeStyles.oakTree,u);g.userData.shared=!0,p.userData.shared=!0,s.add(g,p)}if(this.style.showroomAt&&Math.floor(this.style.showroomAt[0]/gt)===e&&Math.floor(this.style.showroomAt[1]/gt)===t){let g=this.style.makeBuilding(!0),[p,m,v]=this.style.showroomAt;g.group.position.set(p,0,m),g.group.rotation.y=v,s.add(g.group),r.push({type:"box",x:p,z:m,hw:g.w/2,hl:g.d/2,h:v})}return this.group.add(s),{tx:e,tz:t,group:s,obstacles:r,roads:l,areas:this.tileAreas.get(n)||[]}}nearBuilding(e,t,n){let s=Math.floor(e/gt),r=Math.floor(t/gt);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileBuildings.get(this.key(s+o,r+a))||[]){let l=this.data.buildings[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildRoad(e){let t=this.roads[e],n=this.nodes,s=t.n.map(f=>n[f]),r=t.w,o=Yd[t.t]||.06,a=new vt,c=t.t==="track"?this.mat.roadDirt:this.mat.road,l=new Fe(fu(s,-r/2,r/2,o,1/7),c);l.receiveShadow=!0,a.add(l);let h=[s[0],s[s.length-1]].map(f=>{let u=new Gr(r/2,12);return u.rotateX(-Math.PI/2),u.translate(f[0],o,f[1]),u});if(a.add(new Fe(du(h),c)),r>=8.4){for(let p of[-1,1])a.add(new Fe(fu(s,p*(r/2-.4),p*(r/2-.25),o+.01,1),this.mat.line));let f=t.one?Math.max(2,t.lanes||Math.round(r/3.6)):2,u=[],d=[];if(t.one)for(let p=1;p<f;p++)d.push(-r/2+r/f*p);else d.push(0);let x=0,g=t.len;for(let p=0;p<s.length-1;p++){let m=s[p],v=s[p+1],y=t.seg[p],_=(v[0]-m[0])/y,A=(v[1]-m[1])/y,E=-A,C=_;for(let I=(9-x%9)%9;I+3<y;I+=9)for(let b of d){let M=[m[0]+_*I+E*b,m[1]+A*I+C*b],P=[m[0]+_*(I+3)+E*b,m[1]+A*(I+3)+C*b];u.push(fu([M,P],-.08,.08,o+.01,1))}x+=y}u.length&&a.add(new Fe(du(u),this.mat.line))}return a}buildArea(e){let t=this.data.areas[e];if(t.p.length<3)return null;let n={park:this.mat.park,grass:this.mat.park,pitch:this.mat.pitch,water:this.mat.water,wet:this.mat.water,farm:this.mat.farm,ind:this.mat.lot,com:this.mat.lot,park_lot:this.mat.lot,scrub:this.mat.scrub,school:this.mat.park,quarry:this.mat.farm}[t.k];if(!n)return null;let s=new hs(t.p.map(c=>new Q(c[0],-c[1]))),r=new wa(s);r.rotateX(-Math.PI/2);let o={water:.03,wet:.025,park:.02,grass:.02,pitch:.022,farm:.015,scrub:.015,ind:.018,com:.018,park_lot:.019,school:.02,quarry:.015}[t.k]||.02;r.translate(0,o,0);let a=new Fe(r,n);return a.receiveShadow=!0,a}buildBuilding(e){if(e.p.length<3)return null;let t=new hs(e.p.map(c=>new Q(c[0],-c[1]))),n=new Sa(t,{depth:e.h,bevelEnabled:!1});n.rotateX(-Math.PI/2);let s=this.style,o=e.h>5.5?s.fMats[/mall|retail|commercial|supermarket/.test(e.k+e.name)?2:0]:this.mat.house,a=new Fe(n,[this.mat.roofFlat,o]);return a.castShadow=!0,a.receiveShadow=!0,a}spawnAgent(e,t,n){for(let s=0;s<30;s++){let r=Math.floor(Math.random()*this.roads.length),o=this.roads[r];if(o.t==="service"||o.t==="track"||o.len<40)continue;let a=Math.floor(Math.random()*(o.n.length-1)),c=this.nodes[o.n[a]],l=Math.hypot(c[0]-t,c[1]-n);if(!(l<60||l>350))return e.r=r,e.i=a,e.t=Math.random(),e.dir=o.one||Math.random()<.5?1:-1,e.speed=(Zd[o.t]||10)*qd(.8,1),!0}return!1}advanceAgent(e,t){let n=this.roads[e.r],s=this.nodes,r=e.speed*t;for(;r>0;){let p=n.seg[e.i],m=e.t*p,v=e.dir>0?p-m:m;if(r<v){e.t+=e.dir*r/p,r=0;break}r-=v;let y=e.dir>0?e.i+1:e.i,_=n.n[y],A=[];for(let[P,N]of this.nodeRoads.get(_)||[]){let D=this.roads[P];D.t==="service"||D.t==="track"||(N<D.n.length-1&&!(P===e.r&&D.one===0&&N===e.i&&e.dir<0)&&A.push([P,N,1]),N>0&&!D.one&&!(P===e.r&&N-1===e.i&&e.dir>0)&&A.push([P,N-1,-1]))}let E=A.filter(([P])=>P===e.r),C=Math.random()<.7&&E.length?E:A;if(!C.length){e.dir=-e.dir;break}let[I,b,M]=C[Math.floor(Math.random()*C.length)];return e.r=I,e.i=b,e.dir=M,e.t=M>0?0:1,e.speed=(Zd[I===e.r?n.t:this.roads[I].t]||10)*qd(.8,1),this.advanceAgent(e,r/e.speed)}let o=this.roads[e.r],a=s[o.n[e.i]],c=s[o.n[e.i+1]],l=(c[0]-a[0])/o.seg[e.i],h=(c[1]-a[1])/o.seg[e.i],f=l*e.dir,u=h*e.dir,d=u,x=-f,g=o.one?o.w/4*(Math.random()<.5?1:-1)*0+o.w/4:o.w/4;e.x=a[0]+l*e.t*o.seg[e.i]+d*g,e.z=a[1]+h*e.t*o.seg[e.i]+x*g,e.h=Math.atan2(-f,-u)}startPose(){let[e,t]=this.style.start,n=null;for(let o=0;o<400&&!(n&&n.d<1e8);o+=40)for(let a=0;a<6.3&&!(n&&n.d<1e8);a+=.8){let c=this.nearest(e+Math.cos(a)*o,t+Math.sin(a)*o,{skipMinor:!0});c.d<1e8&&(n=c)}n||(n=this.nearest(e,t));let s=-Math.cos(n.h)*0+Math.cos(n.h),r=-Math.sin(n.h);return{x:n.px-s*n.w/4,z:n.pz-r*n.w/4,h:n.h}}dispose(){for(let e of this.tiles.values())this.disposeTile(e);this.tiles.clear(),this.scene.remove(this.group)}};function fu(i,e,t,n,s){let r=i.length,o=new Float32Array(r*6),a=new Float32Array(r*4),c=[],l=0;for(let u=0;u<r;u++){let d=i[u],x=i[Math.max(0,u-1)],g=i[Math.min(r-1,u+1)],p=d[0]-x[0],m=d[1]-x[1],v=g[0]-d[0],y=g[1]-d[1],_=Math.hypot(p,m)||1,A=Math.hypot(v,y)||1;p/=_,m/=_,v/=A,y/=A,u===0&&(p=v,m=y),u===r-1&&(v=p,y=m);let E=-(m+y),C=p+v,I=Math.hypot(E,C)||1;E/=I,C/=I;let M=1/Math.max(.5,E*-y+C*v);if(o.set([d[0]+E*e*M,n,d[1]+C*e*M,d[0]+E*t*M,n,d[1]+C*t*M],u*6),u>0&&(l+=Math.hypot(d[0]-x[0],d[1]-x[1])),a.set([0,l*s,1,l*s],u*4),u<r-1){let P=u*2;c.push(P,P+1,P+2,P+1,P+3,P+2)}}let h=new nt;if(h.setAttribute("position",new He(o,3)),h.setAttribute("uv",new He(a,2)),h.setIndex(c),h.computeVertexNormals(),h.attributes.normal.getY(0)<0){let u=h.index.array;for(let d=0;d<u.length;d+=3){let x=u[d+1];u[d+1]=u[d+2],u[d+2]=x}h.computeVertexNormals()}return h}function du(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),h.attributes.uv&&s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length,h.dispose()}let l=new nt;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}function Kd(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function wy(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r of i)e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[e,n,t,s]}function Ey(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function Ty(i){let e=0,t=-1;for(let d=0;d<i.length;d++){let x=i[d],g=i[(d+1)%i.length],p=Math.hypot(g[0]-x[0],g[1]-x[1]);p>t&&(t=p,e=Math.atan2(g[1]-x[1],g[0]-x[0]))}let n=Math.cos(-e),s=Math.sin(-e),r=1/0,o=-1/0,a=1/0,c=-1/0;for(let d of i){let x=d[0]*n-d[1]*s,g=d[0]*s+d[1]*n;r=Math.min(r,x),o=Math.max(o,x),a=Math.min(a,g),c=Math.max(c,g)}let l=(r+o)/2,h=(a+c)/2,f=l*Math.cos(e)-h*Math.sin(e),u=l*Math.sin(e)+h*Math.cos(e);return{x:f,z:u,hw:(o-r)/2,hl:(c-a)/2,h:-e}}var io=class i extends Fe{constructor(){super(i.Geometry,new Dt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new L,t=new L,n=new Hr(16,16),s=new Hr(16,16),r=vn,o=i.Geometry,a=new zi({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new zi({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new Fe(o,a),h=[],f=$n.Shader,u=new zi({name:f.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new be(16777215)},scale:{value:new Q},screenPosition:{value:new L}},vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Ui,transparent:!0,depthWrite:!1}),d=new Fe(o,u);this.addElement=function(v){h.push(v)};let x=new Q,g=new Q,p=new Ia,m=new st;this.onBeforeRender=function(v,y,_){v.getCurrentViewport(m);let A=v.getRenderTarget(),E=A!==null?A.texture.type:vn;r!==E&&(n.dispose(),s.dispose(),n.type=s.type=E,r=E);let C=m.w/m.z,I=m.z/2,b=m.w/2,M=16/m.w;if(x.set(M*C,M),p.min.set(m.x,m.y),p.max.set(m.x+(m.z-16),m.y+(m.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(_.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(_.projectionMatrix),g.x=m.x+e.x*I+I-8,g.y=m.y+e.y*b+b-8,p.containsPoint(g))){v.copyFramebufferToTexture(n,g);let P=a.uniforms;P.scale.value=x,P.screenPosition.value=e,v.renderBufferDirect(_,null,o,a,l,null),v.copyFramebufferToTexture(s,g),P=c.uniforms,P.scale.value=x,P.screenPosition.value=e,v.renderBufferDirect(_,null,o,c,l,null);let N=-e.x*2,D=-e.y*2;for(let B=0,Y=h.length;B<Y;B++){let k=h[B],$=u.uniforms;$.color.value.copy(k.color),$.map.value=k.texture,$.screenPosition.value.x=e.x+N*k.distance,$.screenPosition.value.y=e.y+D*k.distance,M=k.size/m.w;let H=m.w/m.z;$.scale.value.set(M*H,M),u.uniformsNeedUpdate=!0,v.renderBufferDirect(_,null,o,u,d,null)}}},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),n.dispose(),s.dispose();for(let v=0,y=h.length;v<y;v++)h[v].texture.dispose()}}},$n=class{constructor(e,t=1,n=0,s=new be(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}};$n.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};io.Geometry=function(){let i=new nt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new cs(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new Oi(t,3,0,!1)),i.setAttribute("uv",new Oi(t,2,3,!1)),i}();var Xa=(i,e)=>i+Math.random()*(e-i),Ay=new nr,pu={};function Pt(i,{mirror:e=!0,srgb:t=!0}={}){if(pu[i])return pu[i];let n=Ay.load(`tex/${i}.webp`);return n.wrapS=n.wrapT=e?os:gi,t&&(n.colorSpace=bt),n.anisotropy=8,pu[i]=n,n}var Ct=i=>new Wn(i);function qa(i,e,t,n={}){let s=Pt(i,{mirror:!1}),r=e*t,o=new yn(r,e);o.translate(0,e/2-(n.sink||0),0);let a=Ct({map:s,alphaTest:.45,side:qt,roughness:1,metalness:0}),c=new yn(r,e);return c.translate(0,e/2-(n.sink||0),0),c.rotateY(Math.PI/2),[{geometry:o,material:a},{geometry:c,material:a}]}function mu(i,e,t,n){let s=i.attributes.uv,r=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}s.needsUpdate=!0}function Jd(i,e){let t={scene:i,worlds:{},current:null,road:null},n=new to;n.scale.setScalar(2e4),i.add(n);let s=new rr(16777215,2.2);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-22,s.shadow.camera.right=22,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,s.shadow.camera.near=1,s.shadow.camera.far=160,s.shadow.bias=-8e-4,s.shadow.normalBias=.02,i.add(s),i.add(s.target);let r=new Aa(12574719,4876842,.5);i.add(r);let o=new $s(e);t.sky=n,t.sun=s,t.hemi=r;let a=Ct({roughness:1,metalness:0}),c=new Fe(new yn(1600,1600),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let l=new Dt({transparent:!0,alphaTest:.2,side:Gt,fog:!1,depthWrite:!1}),h=new Fe(new Bi(560,560,150,48,1,!0),l);h.renderOrder=-1,i.add(h);let f=Pt("asphalt");f.repeat.set(2,1);let u=Pt("asphalt_n",{srgb:!1});u.repeat.set(2,1);let d=Pt("asphalt_r",{srgb:!1});d.repeat.set(2,1);let x=[Pt("billboard1",{mirror:!1}),Pt("billboard2",{mirror:!1})],g=Pt("shopsign",{mirror:!1}),p={road:Ct({map:f,normalMap:u,normalScale:new Q(.45,.45),roughnessMap:d,roughness:1,metalness:0,envMapIntensity:.6}),shoulder:Ct({roughness:1}),line:Ct({color:16053492,roughness:.7}),rail:Ct({color:12106946,roughness:.45,metalness:.8}),railGeo:new Mt(.08,.32,4.1),postGeo:new Mt(.1,.75,.1),pole:Ct({color:16734774,roughness:.7}),poleGeo:new Mt(.12,1.4,.12),billboards:x.map(W=>Ct({map:W,emissiveMap:W,emissive:16777215,emissiveIntensity:0,roughness:.6})),bbPanelGeo:new Mt(12,6,.25),bbPostGeo:new Bi(.18,.22,4.5,8),sign:Ct({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:0,roughness:.5}),gantryPostGeo:new Mt(.5,7.5,.5),gantryBeamGeo:new Mt(It+3,.5,.5),gantrySignGeo:new Mt(12,3,.2),lamp:Ct({color:10133670,roughness:.4,metalness:.8}),lampGlow:Ct({color:16773824,emissive:16769184,emissiveIntensity:0})};{let W=new Bi(.08,.12,7,6);W.translate(0,3.5,0);let R=new Mt(2,.1,.1);R.translate(1,6.95,0),p.lampGeo=Ry([W,R]),p.lampGlowGeo=new Mt(.6,.15,.3),p.lampGlowGeo.translate(1.8,6.9,0)}t.M=p;let v=["facade_glass","facade_brick","facade_shops"].map(W=>Pt(W,{mirror:!1})).map(W=>Ct({map:W,emissiveMap:W,emissive:16777215,emissiveIntensity:0,roughness:.5,metalness:.1})),y=Ct({color:4869717,roughness:1});function _(W){let R=W?18:Xa(10,18),le=W?9:Xa(9,42),Z=W?12:Xa(10,16),he=new vt;if(W){let ie=new Fe(new Mt(R,5,Z),[v[2],v[2],y,y,v[2],v[2]]);mu(ie.geometry,R/9,5/9,Z/9),ie.position.y=2.5,he.add(ie);let we=new Fe(new Mt(R,1.3,Z+.2),[y,y,y,y,p.sign,y]);we.position.y=5.65,he.add(we);let ue=new Fe(new Mt(R,2.7,Z),[v[1],v[1],y,y,v[1],v[1]]);mu(ue.geometry,R/12,2.7/12,Z/12),ue.position.y=7.65,he.add(ue)}else{let ie=v[Math.random()<.5?0:1],we=ie===v[0]?10:12,ue=new Fe(new Mt(R,le,Z),[ie,ie,y,y,ie,ie]);if(mu(ue.geometry,R/we,le/we,Z/we),ue.position.y=le/2,he.add(ue),le>20){let T=new Fe(new Mt(R*.5,2,Z*.5),y);T.position.y=le+1,he.add(T)}}return{group:he,w:R,h:le,d:Z,gap:Xa(0,4)}}let A=Pt("clouds",{mirror:!0});A.repeat.set(3,3);let E=new Dt({map:A,transparent:!0,depthWrite:!1,fog:!1,opacity:.95,side:qt}),C=new Fe(new yn(3600,3600),E);C.rotation.x=-Math.PI/2,C.position.y=330,C.renderOrder=-2,i.add(C),t.clouds=C;let I=new io,b=Pt("lensflare0",{mirror:!1}),M=Pt("lensflare3",{mirror:!1});I.addElement(new $n(b,420,0,new be(16773840))),I.addElement(new $n(M,60,.6)),I.addElement(new $n(M,70,.7)),I.addElement(new $n(M,120,.9)),I.addElement(new $n(M,70,1));let P=new yt;P.add(I),i.add(P),t.flare=P;let N=Ct({color:5915440,roughness:1}),D=W=>Ct({map:Pt(W,{mirror:!1}),alphaTest:.5,side:qt,roughness:.9,metalness:0}),B=(W,R)=>new yn(W,R),Y=new Bi(.22,.42,1,7);Y.translate(0,.5,0);let k={trunk:{geometry:Y,material:N,h:3.4},cards:{geometry:B(5.6,3.65),material:D("leaf_oak"),n:9,rx:3.6,ry:2.4,yc:5.6,tilt:.55,flat:!1},obstacle:.5},$={trunk:{geometry:Y,material:N,h:6},cards:{geometry:B(4.2,2.8),material:D("leaf_pine"),n:11,rx:2.6,ry:4.6,yc:7.6,tilt:.35,flat:!0,cone:!0},obstacle:.45},H=B(1.1,.75);H.translate(0,.33,0);let oe=Ct({map:Pt("grass_tuft",{mirror:!1}),alphaTest:.5,side:qt,roughness:1,metalness:0}),fe=Ct({map:Pt("grass_tuft",{mirror:!1}),alphaTest:.5,side:qt,roughness:1,metalness:0,color:13217914});t.treeStyles={oakTree:k,pineTree:$};let ge=qa("tree_oak",11,768/670,{sink:.2}),Le=qa("tree_pine",14,476/1045),Qe=qa("cactus",6,362/1059),q=qa("tree_snowpine",12,599/1084),se={geometry:new ba(1.2,0),material:Ct({color:11043420,roughness:1}),y:.5,shadow:!0},_e={geometry:new tr(1.5,8,6),material:Ct({color:15791615,roughness:1}),y:.2};t.worlds={country:{ground:"grass",tile:7,shoulder:"sand",shoulderTint:9075290,backdrop:"hills_green",backdropH:70,guardrail:!0,scatter:[{tree:k,perChunk:12,lat:[12,60],scale:[.8,1.35]},{tree:$,perChunk:10,lat:[13,75],scale:[.8,1.3]},{parts:ge,perChunk:10,lat:[60,140],scale:[.9,1.4],billboard:!0},{parts:Le,perChunk:10,lat:[60,160],scale:[.9,1.4],billboard:!0},{grass:{geometry:H,material:oe},perChunk:220,lat:[10.2,26],scale:[.6,1.2]}],fog:{day:13229292,sunset:15316106,night:659230},fogFar:430,offroadGrip:.6},desert:{ground:"sand",tile:8,shoulder:"sand",shoulderTint:16777215,backdrop:"mesas_desert",backdropH:46,guardrail:!0,scatter:[{parts:Qe,perChunk:12,lat:[11,70],scale:[.8,1.6],billboard:!0,obstacle:.4},{parts:[se],perChunk:16,lat:[9,90],scale:[.5,2.4],obstacle:1},{grass:{geometry:H,material:fe},perChunk:90,lat:[10.2,30],scale:[.5,1]}],fog:{day:15128253,sunset:15771242,night:1183522},fogFar:470,offroadGrip:.5},snow:{ground:"snow",tile:6,shoulder:"snow",shoulderTint:16777215,backdrop:"mountains_snow",backdropH:110,poles:!0,scatter:[{parts:q,perChunk:18,lat:[11,80],scale:[.7,1.5],billboard:!0,obstacle:.5},{parts:[_e],perChunk:12,lat:[8,30],scale:[.6,1.8]},{tree:$,perChunk:6,lat:[12,50],scale:[.8,1.2]}],fog:{day:14411506,sunset:15776144,night:857128},fogFar:340,offroadGrip:.35},city:{ground:"pavement",tile:4,shoulder:"pavement",shoulderTint:16777215,backdrop:"skyline_city",backdropH:90,buildings:!0,makeBuilding:_,scatter:[],fog:{day:13622248,sunset:15247480,night:724506},fogFar:400,offroadGrip:.9,fMats:v}};let ae=Pt("house_front",{mirror:!0}),Ae=Pt("precast_wall",{mirror:!0}),Ne=Pt("roof_tiles",{mirror:!0}),Be=Ct({map:ae,roughness:.9,metalness:0}),$e=Ct({map:Ae,roughness:1,metalness:0}),ee=Ct({map:Ne,roughness:.9,metalness:0});Ne.repeat.set(2,2),t.worlds.lenasia={ground:"grass",tile:7,groundTint:12037496,shoulder:"sand",shoulderTint:16777215,backdrop:"hills_green",backdropH:38,map:"lenasia.json",fog:{day:14081510,sunset:15316106,night:659230},fogFar:520,offroadGrip:.55,scatter:[],tex:Pt,fMats:v,fMatsHouse:Be,wallMat:$e,roofTileMat:ee,makeBuilding:_,treeStyles:null,start:[-743,-2581],showroomAt:null};for(let W in t.worlds)t.worlds[W].mats=p;return t.worlds.lenasia.treeStyles={oakTree:k,pineTree:$},t.mapData={},t.setWorld=W=>{let R=t.worlds[W];t.current=R,t.currentName=W;let le=Pt(R.ground);le.repeat.set(1600/R.tile,1600/R.tile),a.map=le,a.needsUpdate=!0;let Z=Pt(R.shoulder);p.shoulder.map=Z,p.shoulder.color.setHex(R.shoulderTint),p.shoulder.needsUpdate=!0;let he=Pt(R.backdrop,{mirror:!0});if(he.repeat.set(4,1),l.map=he,l.needsUpdate=!0,h.scale.y=R.backdropH/150,h.position.y=R.backdropH/2-2,a.color.setHex(R.groundTint||16777215),t.road&&t.road.dispose(),t.road=null,R.map){t.loading=!0;let ie=we=>{let ue=new Wa(i,R,we),T=ue.startPose(),S=ue.nearest(T.x,T.z,{skipMinor:!0}),z=-Math.sin(S.h),K=-Math.cos(S.h),ne=K,J=-z;R.showroomAt=[S.px+z*70+ne*(S.w/2+12),S.pz+K*70+J*(S.w/2+12),S.h+Math.PI/2],t.road=ue,t.loading=!1};t.mapData[R.map]?ie(t.mapData[R.map]):fetch(R.map).then(we=>we.json()).then(we=>{t.mapData[R.map]=we,t.current===R&&ie(we)})}else t.road=new Va(i,R)},t.setTime=W=>{let R=t.current,le=W==="night",Z=n.material.uniforms,he,ie;W==="day"?(he=48,ie=160,Z.turbidity.value=2.2,Z.rayleigh.value=1,Z.mieCoefficient.value=.004,Z.mieDirectionalG.value=.8):W==="sunset"?(he=4,ie=235,Z.turbidity.value=10,Z.rayleigh.value=3,Z.mieCoefficient.value=.006,Z.mieDirectionalG.value=.85):(he=-4,ie=180,Z.turbidity.value=2,Z.rayleigh.value=.3,Z.mieCoefficient.value=.002,Z.mieDirectionalG.value=.7);let we=Jr.degToRad(90-he),ue=Jr.degToRad(ie),T=new L().setFromSphericalCoords(1,we,ue);Z.sunPosition.value.copy(T),t.envRT&&t.envRT.dispose();let S=new js;S.add(n),t.envRT=o.fromScene(S,0,.1,200),i.add(n),i.environment=t.envRT.texture,i.background=null,W==="day"?(s.color.setHex(16774368),s.intensity=4.2,r.color.setHex(12572927),r.groundColor.setHex(7041116),r.intensity=1,i.environmentIntensity=1):W==="sunset"?(s.color.setHex(16754784),s.intensity=3.2,r.color.setHex(15906186),r.groundColor.setHex(4865846),r.intensity=.8,i.environmentIntensity=1):(s.color.setHex(9412824),s.intensity=1.3,r.color.setHex(3952256),r.groundColor.setHex(1315864),r.intensity=1.5,i.environmentIntensity=.7),t.sunDir=T.clone().normalize(),le&&t.sunDir.set(.3,.8,-.2).normalize(),i.fog=new aa(R.fog[W],40,R.fogFar*(le?.7:1)),l.color.setHex(le?2765648:W==="sunset"?16765096:16777215);for(let z of p.billboards)z.emissiveIntensity=le?.9:0;p.sign.emissiveIntensity=le?.9:0,v.forEach(z=>{z.emissiveIntensity=le?.55:0,z.emissive.setHex(le?16769968:16777215)}),p.lampGlow.emissiveIntensity=le?5:0,E.color.setHex(le?3818080:W==="sunset"?16763296:16777215),E.opacity=le?.6:.95,P.visible=!le,t.night=le},t.follow=(W,R,le,Z)=>{let he=t.current;c.position.set(W,0,R),a.map&&a.map.offset.set(W/he.tile%2,-R/he.tile%2),h.position.x=W,h.position.z=R,C.position.x=W,C.position.z=R,A.offset.set(W/1200%2+performance.now()*4e-6,-R/1200%2),P.position.set(W+t.sunDir.x*900,t.sunDir.y*900,R+t.sunDir.z*900),s.target.position.set(W+le*8,0,R+Z*8),s.position.copy(t.sunDir).multiplyScalar(80).add(s.target.position)},t}function Ry(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length}let l=new nt;return l.setAttribute("position",new He(n,3)),l.setAttribute("normal",new He(s,3)),l.setAttribute("uv",new He(r,2)),l.setIndex(new He(o,1)),l}var so=(i,e,t)=>Math.max(e,Math.min(t,i)),ms=class{constructor(e){this.spec=e,this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yawRate=0,this.throttle=0,this.brake=0,this.steer=0,this.offRoad=!1,this.surfaceGrip=1,this.steerAngle=0,this.vf=0,this.vl=0,this.halfW=e.w/2,this.halfL=e.len/2,this.mass=e.len>5?2.2:1.6}fwd(){return[-Math.sin(this.h),-Math.cos(this.h)]}right(){return[Math.cos(this.h),-Math.sin(this.h)]}speed(){return Math.hypot(this.vx,this.vz)}circles(){let[e,t]=this.fwd(),n=this.halfL*.55,s=this.halfW+.08;return[[this.x+e*n,this.z+t*n,s],[this.x-e*n,this.z-t*n,s]]}update(e,t,n,s,r){let[o,a]=this.fwd(),[c,l]=this.right(),h=this.vx*o+this.vz*a,f=this.vx*c+this.vz*l,u=t*(r?1.3:1)*(this.offRoad?.25:1);this.throttle>0&&(h+=this.throttle*n*(r?2:1)*Math.max(.12,1-.7*so(h/u,0,1))*e),this.brake>0&&(h>.5?h-=this.brake*16*e:h=Math.max(h-this.brake*4*e,-4)),h-=h*(this.offRoad?1.4:.12)*e,h-=.0018*h*Math.abs(h)*e,h>u&&(h+=(u-h)*Math.min(1,2*e)),Math.abs(h)<.05&&this.throttle===0&&this.brake===0&&(h=0);let d=Math.abs(h),x=s*.09,g=-this.steer*x*so(d/6,0,1)*(1/(1+d/28))*Math.sign(h||1);this.yawRate+=(g-this.yawRate)*Math.min(1,8*e),this.h+=this.yawRate*e,this.steerAngle+=(this.steer*.42-this.steerAngle)*Math.min(1,10*e);let p=(this.offRoad?2.2:7.5)*this.surfaceGrip;f-=f*Math.min(1,p*e);let m=this.yawRate*d*.08*(this.offRoad?2.5:1);f+=m*e,f=so(f,-12,12);let[v,y]=this.fwd(),[_,A]=this.right();this.vx=v*h+_*f,this.vz=y*h+A*f,this.x+=this.vx*e,this.z+=this.vz*e,this.vf=h,this.vl=f}};function Ya(i,e,t=.35){let n=0,s=i.circles(),r=e.circles();for(let[o,a,c]of s)for(let[l,h,f]of r){let u=l-o,d=h-a,x=Math.hypot(u,d),g=c+f;if(x>=g||x<1e-4)continue;let p=u/x,m=d/x,v=g-x,y=i.mass,_=e.mass,A=y+_;i.x-=p*v*(_/A),i.z-=m*v*(_/A),e.x+=p*v*(y/A),e.z+=m*v*(y/A);let E=e.vx-i.vx,C=e.vz-i.vz,I=E*p+C*m;if(I<0){let b=-(1+t)*I/(1/y+1/_);i.vx-=b*p/y,i.vz-=b*m/y,e.vx+=b*p/_,e.vz+=b*m/_;let[M,P]=i.right(),N=p*M+m*P;i.yawRate+=N*Math.min(2,-I*.08),e.yawRate-=N*Math.min(2,-I*.08),n=Math.max(n,-I)}}return n}function $d(i,e,t,n,s=.25){let r=0;for(let[o,a,c]of i.circles()){let l=o-e,h=a-t,f=Math.hypot(l,h),u=c+n;if(f>=u||f<1e-4)continue;let d=l/f,x=h/f,g=u-f;i.x+=d*g,i.z+=x*g;let p=i.vx*d+i.vz*x;p<0&&(i.vx-=(1+s)*p*d,i.vz-=(1+s)*p*x,r=Math.max(r,-p),i.yawRate+=(Math.random()-.5)*Math.min(3,-p*.15))}return r}function jd(i,e,t,n,s,r,o=.2){let a=0,c=Math.cos(r),l=Math.sin(r);for(let[h,f,u]of i.circles()){let d=h-e,x=f-t,g=d*c-x*l,p=-d*l-x*c,m=so(g,-n,n),v=so(p,-s,s),y=g-m,_=p-v,A=Math.hypot(y,_),E,C,I;if(A>1e-4){if(A>=u)continue;E=y/A,C=_/A,I=u-A}else{let N=n-Math.abs(g),D=s-Math.abs(p);N<D?(E=Math.sign(g)||1,C=0,I=N+u):(E=0,C=Math.sign(p)||1,I=D+u)}let b=E*c-C*l,M=-E*l-C*c;i.x+=b*I,i.z+=M*I;let P=i.vx*b+i.vz*M;P<0&&(i.vx-=(1+o)*P*b,i.vz-=(1+o)*P*M,a=Math.max(a,-P))}return a}var Qd=(i,e,t)=>Math.max(e,Math.min(t,i)),St={ctx:null,on:!0,engine:null,wind:null,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i,t=this.master=e.createGain();t.gain.value=0,t.connect(e.destination);let n=e.createGain();n.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=500;let r=e.createOscillator();r.type="sawtooth",r.frequency.value=60;let o=e.createOscillator();o.type="square",o.frequency.value=30;let a=e.createGain();a.gain.value=.35,r.connect(s),o.connect(a),a.connect(s),s.connect(n),n.connect(t),r.start(),o.start(),this.engine={o1:r,o2:o,lp:s,eg:n};let c=e.createBuffer(1,e.sampleRate*2,e.sampleRate),l=c.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=Math.random()*2-1;let h=e.createBufferSource();h.buffer=c,h.loop=!0;let f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=600;let u=e.createGain();u.gain.value=0,h.connect(f),f.connect(u),u.connect(t),h.start(),this.wind={ng:u,nlp:f,buf:c},this.setOn(this.on)},setOn(i){this.on=i,this.master&&(this.master.gain.value=i?.8:0)},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},update(i,e,t,n){if(!this.engine)return;let s=this.ctx.currentTime,r=5,o=e/r,a=Math.min(r-1,Math.floor(i/o)),l=.15+Qd((i-a*o)/o,0,1)*.85,h=45+l*110+a*10+(n?30:0),f=(d,x,g)=>{d.value+=(x-d.value)*g};f(this.engine.o1.frequency,h,.25),f(this.engine.o2.frequency,h/2,.25),f(this.engine.lp.frequency,300+l*1400+(t?300:0),.15),f(this.engine.eg.gain,t?.16:.08+l*.02,.12);let u=Math.pow(Qd(i/60,0,1),2);f(this.wind.ng.gain,u*.12,.08)},horn(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;for(let e of[420,525]){let t=this.ctx.createOscillator();t.type="square",t.frequency.value=e;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.03),s.gain.setValueAtTime(.18,i+.45),s.gain.exponentialRampToValueAtTime(1e-4,i+.6),t.connect(n),n.connect(s),s.connect(this.master),t.start(i),t.stop(i+.65)}},bump(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.wind.buf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=250;let s=this.ctx.createGain();s.gain.setValueAtTime(.5*i,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.25),t.connect(n),n.connect(s),s.connect(this.master),t.start(e),t.stop(e+.3)},whoosh(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(3e3,i+.6),t.Q.value=1.5;let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.3,i+.15),n.gain.exponentialRampToValueAtTime(1e-4,i+.9),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+1)}};var Za={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Cy=new Fi(-1,1,1,-1,0,1),gu=class extends nt{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}},Iy=new gu,Yi=class{constructor(e){this._mesh=new Fe(Iy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var pr=class extends dn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Xn.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ro=class extends dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ka=class extends dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ja=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pr(Za),this.copyPass.material.blending=Vn,this.clock=new or}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ro!==void 0&&(o instanceof ro?n=!0:o instanceof Ka&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $a=class extends dn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ep={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var mr=class i extends dn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Q(e.x,e.y):new Q(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Yt(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new Yt(r,o,{type:fn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Yt(r,o,{type:fn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ep;this.highPassUniforms=Xn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Za;this.copyUniforms=Xn.clone(h.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new Dt,this.fsQuad=new Yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};mr.BlurDirectionX=new Q(1,0);mr.BlurDirectionY=new Q(0,1);var tp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ja=class extends dn{constructor(){super();let e=tp;this.uniforms=Xn.clone(e.uniforms),this.material=new zi({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ze=i=>document.getElementById(i),jn=(i,e,t)=>Math.max(e,Math.min(t,i)),xu=(i,e,t)=>i+(e-i)*t,Tn=(i,e)=>i+Math.random()*(e-i),Py=(i,e)=>Math.floor(Tn(i,e+1)),cc=i=>i[Math.floor(Math.random()*i.length)],op="kidcars-v3",Oe={car:0,color:0,world:"country",time:"day",traffic:!0,sound:!0,tilt:!1,cam:0,controls:"wheel"};try{Object.assign(Oe,JSON.parse(localStorage.getItem(op)||"{}"))}catch(i){}Nt[Oe.car]||(Oe.car=0);function Bn(){try{localStorage.setItem(op,JSON.stringify(Oe))}catch(i){}}var Ly=ze("c"),hc=/[?&]test/.test(location.search),pn=new oa({canvas:Ly,antialias:!hc,powerPreference:"high-performance"});pn.setPixelRatio(hc?.35:Math.min(window.devicePixelRatio||1,1.5));pn.shadowMap.enabled=!hc;pn.shadowMap.type=gh;pn.toneMapping=Zr;pn.toneMappingExposure=.5;var ni=new js,Ft=new Ot(60,1,.3,1400);function wu(){let i=window.innerWidth,e=window.innerHeight;pn.setSize(i,e,!1),Ft.aspect=i/e,Ft.updateProjectionMatrix(),ei&&(ei.setPixelRatio(pn.getPixelRatio()),ei.setSize(i,e))}window.addEventListener("resize",wu);var Ue=Jd(ni,pn),Dy={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.12}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`},ei=null,np=null,ap=!hc;function Uy(){let i=new Yt(1,1,{type:fn,samples:4});ei=new Ja(pn,i),ei.addPass(new $a(ni,Ft)),np=new mr(new Q(256,128),.18,.4,1.6),ei.addPass(np),ei.addPass(new pr(Dy)),ei.addPass(new ja)}Uy();wu();var uo=[13832735,1525449,16106776,1414215,15921906,1381914,16738835,7153881,2078920],Ny=ze("loading"),Fy=ze("loadfill"),Eu=ze("loadtxt"),ip=0,cp=0;function sp(i){ip++,Fy.style.width=Math.round(ip/cp*100)+"%",i&&(Eu.textContent=i)}async function Oy(){let i=Nt[Oe.car].id;cp=Nt.length+1,await Qr(i,!1),sp("Polishing the "+Nt[Oe.car].name+"\u2026");for(let e of Nt)await Qr(e.id,!0),sp("Loading traffic\u2026");Eu.textContent="Ready!",setTimeout(()=>Ny.classList.add("hidden"),350),(async()=>{for(let e of Nt)if(!eo(e.id,!1)){try{await Qr(e.id,!1)}catch(t){console.warn(t)}Rn==="menu"&&Nt[Oe.car].id===e.id&&oo()}})()}var xs=60,Mi=new nt,ic=new Float32Array(xs*3),lp=new Float32Array(xs),hp=new Float32Array(xs),sc=new Float32Array(xs*3);Mi.setAttribute("position",new He(ic,3));Mi.setAttribute("aSize",new He(lp,1));Mi.setAttribute("aAlpha",new He(hp,1));Mi.setAttribute("aCol",new He(sc,3));var By=new Tt({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new be(7829367)}},vertexShader:"attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }"}),up=new er(Mi,By);up.frustumCulled=!1;ni.add(up);var Tu=[];for(let i=0;i<xs;i++)Tu.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,r:.5,g:.5,b:.5});var _u=0;function bu(i,e,t,n,s){let r=Tu[_u];_u=(_u+1)%xs,s?(r.r=s[0],r.g=s[1],r.b=s[2]):r.r=r.g=r.b=.45,r.x=i+Tn(-.3,.3),r.y=e,r.z=t+Tn(-.3,.3),r.vx=Tn(-.4,.4),r.vy=Tn(.8,1.6)*n,r.vz=Tn(-.4,.4),r.life=0,r.max=Tn(.9,1.8),r.size=Tn(.5,1)*n}function zy(i){for(let e=0;e<xs;e++){let t=Tu[e];t.life<t.max&&(t.life+=i,t.x+=t.vx*i,t.y+=t.vy*i,t.z+=t.vz*i,t.vy*=.98);let n=t.life/t.max,s=t.life<t.max;ic[e*3]=t.x,ic[e*3+1]=t.y,ic[e*3+2]=t.z,lp[e]=s?t.size*(.6+n*2.2):0,hp[e]=s?(1-n)*.55:0,sc[e*3]=t.r,sc[e*3+1]=t.g,sc[e*3+2]=t.b}Mi.attributes.position.needsUpdate=!0,Mi.attributes.aSize.needsUpdate=!0,Mi.attributes.aAlpha.needsUpdate=!0,Mi.attributes.aCol.needsUpdate=!0}var wt=null,ti=Nt[0],j=null,rc=null,pe={s:0,idx:0,damage:0,totaled:!1,boostFuel:1,boosting:!1,shake:0,dist:0,menuAngle:.7,lastHitT:0,spin:0};function oo(){wt&&(ni.remove(wt),Ha(wt)),ti=Nt[Oe.car],wt=ka(ti.id,!eo(ti.id,!1),uo[Oe.color]),ni.add(wt),rc=new vt;for(let i of[-1,1]){let e=new sr(16774358,0,90,.55,.5,1);e.position.set(i*.65,.7,-ti.len/2+.1),e.target.position.set(i*1.8,0,-45),rc.add(e,e.target)}wt.add(rc),j=new ms(ti),Au(),fo()}var En=[];for(let i=0;i<6;i++)En.push({mesh:null,spec:Nt[0],body:null,lane:0,s:0,target:20,active:!1,idx:0});function fp(i,e){let t=Py(0,2),n=e?pe.s+Tn(120,420):pe.s-Tn(60,90);for(let r=0;r<10;r++){let o=!0;for(let a of En)a!==i&&a.active&&a.lane===t&&Math.abs(a.s-n)<50&&(o=!1);if(o)break;n+=40}i.mesh&&(ni.remove(i.mesh),Ha(i.mesh)),i.spec=cc(Nt),i.mesh=ka(i.spec.id,!0,cc(uo)),ni.add(i.mesh),i.body=new ms(i.spec),i.lane=t,i.s=n,i.target=e?Tn(14,27):Tn(30,40);let s=Ue.road.pointAt(n);i.body.x=s.x+s.rx*qi[t],i.body.z=s.z+s.rz*qi[t],i.body.h=s.h,i.body.vx=s.fx*i.target,i.body.vz=s.fz*i.target,i.idx=Math.floor(n/qn),i.active=!0,i.mesh.visible=!0}function rp(i){i.mesh.position.set(i.body.x,0,i.body.z),i.mesh.rotation.y=i.body.h}function Au(){Ue.setTime(Oe.time),Gd(Ue.night),Wd(Ue.night?.5:1),wt&&(wt.userData.paint.forEach(i=>i.envMapIntensity=Ue.night?.6:1.25),rc.children.forEach(i=>{i.isSpotLight&&(i.intensity=Ue.night?400:0)}))}var ft={left:!1,right:!1,gas:!1,brake:!1,boost:!1,tilt:0,wheel:0},oc=["btnLeft","btnRight","btnGas","btnBrake","btnBoost"],ac={btnLeft:"left",btnRight:"right",btnGas:"gas",btnBrake:"brake",btnBoost:"boost"},gs=ze("wheel"),Ru=ze("wheelimg"),An=0,At=null,ao=140,Qn=new Map,co=new Map;function lc(i,e){let t=gs.getBoundingClientRect();return Math.atan2(e-(t.top+t.height/2),i-(t.left+t.width/2))*180/Math.PI}function lo(i,e,t){let n=i.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}function ho(){let i={};for(let e of oc)i[ac[e]]=!1;for(let e of Qn.values())if(!e.wheel)for(let t of oc)lo(ze(t),e.x,e.y)&&(i[ac[t]]=!0);for(let e of oc){let t=ac[e],n=i[t]||co.has(t);ft[t]=n,ze(e).classList.toggle("pressed",n)}}function ky(i){i.cancelable&&i.preventDefault(),i.type==="touchstart"&&(St.init(),St.resume());let e=new Set(Array.from(i.touches).map(t=>t.identifier));for(let t of Array.from(Qn.keys()))if(!e.has(t)&&!Array.from(i.changedTouches).some(n=>n.identifier===t)){let n=Qn.get(t);Qn.delete(t),n&&n.wheel&&At&&At.id===t&&(At=null)}for(let t of Array.from(i.changedTouches)){let n=t.identifier;if(i.type==="touchstart"){let s=Oe.controls==="wheel"&&Rn==="drive"&&lo(gs,t.clientX,t.clientY)&&!At;Qn.set(n,{x:t.clientX,y:t.clientY,wheel:s}),s&&(At={id:n,a0:lc(t.clientX,t.clientY),w0:An}),Rn==="drive"&&lo(ze("btnHorn"),t.clientX,t.clientY)&&(St.horn(),ze("btnHorn").classList.add("pressed"),setTimeout(()=>ze("btnHorn").classList.remove("pressed"),200))}else if(i.type==="touchmove"){let s=Qn.get(n);if(!s)continue;if(s.x=t.clientX,s.y=t.clientY,s.wheel&&At&&At.id===n){let r=lc(t.clientX,t.clientY)-At.a0;for(;r>180;)r-=360;for(;r<-180;)r+=360;An=jn(At.w0+r,-ao,ao),Ru.style.transform=`rotate(${An}deg)`}}else{let s=Qn.get(n);Qn.delete(n),s&&s.wheel&&At&&At.id===n&&(At=null)}}ho()}for(let i of["touchstart","touchmove","touchend","touchcancel"])document.addEventListener(i,ky,{passive:!1});function Hy(i,e){let t=ze(i);t.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.preventDefault(),co.set(e,!0),ho(),St.init(),St.resume())});let n=s=>{s&&s.pointerType==="touch"||(co.delete(e),ho())};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n)}oc.forEach(i=>Hy(i,ac[i]));window.addEventListener("blur",()=>{Qn.clear(),co.clear(),At=null,ho()});gs.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),gs.setPointerCapture(i.pointerId),At={id:"mouse",a0:lc(i.clientX,i.clientY),w0:An})});gs.addEventListener("pointermove",i=>{if(i.pointerType==="touch"||!At||At.id!=="mouse")return;let e=lc(i.clientX,i.clientY)-At.a0;for(;e>180;)e-=360;for(;e<-180;)e+=360;An=jn(At.w0+e,-ao,ao),Ru.style.transform=`rotate(${An}deg)`});var dp=i=>{i.pointerType!=="touch"&&At&&At.id==="mouse"&&(At=null)};gs.addEventListener("pointerup",dp);gs.addEventListener("pointercancel",dp);ze("btnHorn").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),St.init(),St.resume(),St.horn())});ze("btnCam").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(Oe.cam=(Oe.cam+1)%3,Bn())});ze("btnFix").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Cu()});document.addEventListener("touchend",i=>{if(Rn==="drive")for(let e of Array.from(i.changedTouches))lo(ze("btnCam"),e.clientX,e.clientY)&&(Oe.cam=(Oe.cam+1)%3,Bn()),!ze("totaled").classList.contains("hidden")&&lo(ze("btnFix"),e.clientX,e.clientY)&&Cu()},{passive:!1});function Vy(i){At||(An+=(0-An)*Math.min(1,9*i),Math.abs(An)<.3&&(An=0),Ru.style.transform=`rotate(${An}deg)`),ft.wheel=An/ao}function pp(){let i=Oe.controls==="wheel";ze("leftpad").classList.toggle("hidden",i),ze("wheel").classList.toggle("hidden",!i),ze("rightpad").classList.toggle("pedals",i),ze("optCtl").textContent=i?"\u{1F3A1}":"\u{1F579}\uFE0F"}window.addEventListener("keydown",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(ft.left=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(ft.right=!0),(i.code==="ArrowUp"||i.code==="KeyW")&&(ft.gas=!0),(i.code==="ArrowDown"||i.code==="KeyS")&&(ft.brake=!0),(i.code==="ShiftLeft"||i.code==="Space")&&(ft.boost=!0),i.code==="KeyH"&&St.horn(),i.code==="KeyC"&&(Oe.cam=(Oe.cam+1)%3,Bn()),i.code==="KeyF"&&Cu()});window.addEventListener("keyup",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(ft.left=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(ft.right=!1),(i.code==="ArrowUp"||i.code==="KeyW")&&(ft.gas=!1),(i.code==="ArrowDown"||i.code==="KeyS")&&(ft.brake=!1),(i.code==="ShiftLeft"||i.code==="Space")&&(ft.boost=!1)});window.addEventListener("deviceorientation",i=>{if(i.beta==null)return;let e=i.beta/22,t=screen.orientation&&screen.orientation.angle||window.orientation||0;(t===270||t===-90)&&(e=-e),ft.tilt=jn(e,-1,1)});var mp=ze("menu"),gp=ze("hud"),Rn="menu";function Zi(){ze("carname").textContent=Nt[Oe.car].name,document.querySelectorAll("#worldRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.world===Oe.world)),document.querySelectorAll("#timeRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.time===Oe.time)),ze("optTraffic").classList.toggle("off",!Oe.traffic),ze("optSound").classList.toggle("off",!Oe.sound),ze("optSound").textContent=Oe.sound?"\u{1F50A}":"\u{1F507}",ze("optTilt").classList.toggle("off",!Oe.tilt),document.querySelectorAll(".swatch").forEach((i,e)=>i.classList.toggle("on",e===Oe.color))}var Gy=ze("colors");uo.forEach((i,e)=>{let t=document.createElement("button");t.className="swatch",t.style.background="#"+i.toString(16).padStart(6,"0"),t.addEventListener("pointerdown",()=>{Oe.color=e,Bn(),oo(),Zi()}),Gy.appendChild(t)});function xp(i){Oe.car=(Oe.car+i+Nt.length)%Nt.length,Bn(),oo(),Zi(),pe.menuAngle=.7,eo(Nt[Oe.car].id,!1)||Qr(Nt[Oe.car].id,!1).then(()=>{Rn==="menu"&&Nt[Oe.car].id===ti.id&&oo()})}ze("prevCar").addEventListener("pointerdown",i=>{i.preventDefault(),xp(-1)});ze("nextCar").addEventListener("pointerdown",i=>{i.preventDefault(),xp(1)});document.querySelectorAll("#worldRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Oe.world=i.dataset.world,Bn(),Ue.setWorld(Oe.world),Au(),Zi()}));document.querySelectorAll("#timeRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Oe.time=i.dataset.time,Bn(),Au(),Zi()}));ze("optTraffic").addEventListener("pointerdown",()=>{Oe.traffic=!Oe.traffic,Bn(),Zi()});ze("optSound").addEventListener("pointerdown",()=>{Oe.sound=!Oe.sound,Bn(),St.init(),St.setOn(Oe.sound),Zi()});ze("optCtl").addEventListener("pointerdown",()=>{Oe.controls=Oe.controls==="wheel"?"buttons":"wheel",Bn(),pp()});ze("optTilt").addEventListener("pointerdown",()=>{Oe.tilt=!Oe.tilt,Bn(),Zi(),Oe.tilt&&typeof DeviceOrientationEvent!="undefined"&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})});ze("btnPlay").addEventListener("pointerdown",i=>{i.preventDefault(),Ue.road&&(St.init(),St.resume(),St.setOn(Oe.sound),Wy())});ze("btnPause").addEventListener("pointerdown",i=>{i.preventDefault(),vp()});function Wy(){Rn="drive",mp.classList.add("hidden"),gp.classList.remove("hidden"),ze("mapbox").classList.toggle("hidden",!Ue.road.isMap),yp.textContent="",pe.s=40,pe.idx=10,pe.dist=0,pe.boostFuel=1,pe.damage=0,pe.totaled=!1,pe.spin=0;let i=Ue.road.isMap?Ue.road.startPose():Ue.road.pointAt(pe.s);j=new ms(ti),j.x=i.x,j.z=i.z,j.h=i.h,fo(),ze("totaled").classList.add("hidden"),En.forEach(e=>{Oe.traffic?Ue.road.isMap?_p(e):fp(e,!0):(e.active=!1,e.mesh&&(e.mesh.visible=!1))})}function _p(i){if(i.mesh&&(ni.remove(i.mesh),Ha(i.mesh)),i.spec=cc(Nt),i.mesh=ka(i.spec.id,!0,cc(uo)),ni.add(i.mesh),i.body=new ms(i.spec),i.body.mass=60,i.agent={},!Ue.road.spawnAgent(i.agent,j.x,j.z)){i.active=!1,i.mesh.visible=!1;return}Ue.road.advanceAgent(i.agent,0),i.body.x=i.agent.x,i.body.z=i.agent.z,i.body.h=i.agent.h,i.active=!0,i.mesh.visible=!0}function vp(){Rn="menu",gp.classList.add("hidden"),mp.classList.remove("hidden"),ze("totaled").classList.add("hidden");for(let i in ft)i!=="tilt"&&(ft[i]=!1);Qn.clear(),co.clear(),At=null,ho(),En.forEach(i=>{i.active=!1,i.mesh&&(i.mesh.visible=!1)}),wt.position.set(0,0,0),wt.rotation.set(0,0,0),pe.menuAngle=.7,pe.damage=0,pe.totaled=!1,fo(),St.engine&&St.update(0,1,!1,!1)}function Cu(){if(Rn!=="drive")return;pe.damage=0,pe.totaled=!1,pe.spin=0,ze("totaled").classList.add("hidden");let i=Ue.road.nearest(j.x,j.z,pe.idx);if(Ue.road.isMap)j.x=i.px,j.z=i.pz,j.h=i.h;else{let e=Ue.road.pointAt(i.s+2);j.x=e.x+e.rx*qi[1],j.z=e.z+e.rz*qi[1],j.h=e.h}j.vx=j.vz=0,j.yawRate=0,fo(),St.whoosh()}function fo(){if(!wt)return;let i=pe.damage/100;wt.userData.paint.forEach(e=>{e.color.setHex(uo[Oe.color]).lerp(new be(3158064),i*.45),e.roughness=.32+i*.5}),ze("dmgfill").style.width=(100-pe.damage).toFixed(0)+"%",ze("dmgfill").style.background=pe.damage<40?"#22c55e":pe.damage<75?"#f59e0b":"#ef4444"}function Qa(i){if(i<1.5)return;let e=(i-1.5)*4.2;pe.damage=Math.min(100,pe.damage+e),pe.shake=Math.max(pe.shake,Math.min(1.2,i*.08)),St.bump(Math.min(1,i/12));for(let t=0;t<Math.min(12,i);t++)bu(j.x,.9,j.z,.6);fo(),pe.damage>=100&&!pe.totaled&&(pe.totaled=!0,pe.spin=(Math.random()<.5?-1:1)*2.5,ze("totaled").classList.remove("hidden"))}var Su=new or,gr=new L,ec=new L,Xy=ze("speedval"),qy=ze("dist"),Yy=ze("boostfill"),Zy=ze("btnBoost"),yp=ze("street"),Mp=ze("minimap"),Ky=Mp.getContext("2d"),Jy=0;function $y(){if(++Jy%3)return;let i=Mp.width/2,e=i/210,t=Ky,n=Ue.road,s=n.nodes;t.clearRect(0,0,i*2,i*2),t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,28,40,0.78)",t.fillRect(0,0,i*2,i*2),t.translate(i,i),t.rotate(j.h),t.scale(e,e),t.translate(-j.x,-j.z);let r=Math.floor(j.x/n.cell),o=Math.floor(j.z/n.cell),a=new Set;t.lineCap="round";for(let h=-4;h<=4;h++)for(let f=-4;f<=4;f++){let u=n.hash.get(n.key(r+h,o+f));if(u)for(let d of u){if(a.has(d))continue;a.add(d);let x=Math.floor(d/4096),g=d%4096,p=n.roads[x],m=s[p.n[g]],v=s[p.n[g+1]];t.strokeStyle=p.w>9?"#ffd58a":p.t==="service"||p.t==="track"?"#8a93a3":"#e8edf5",t.lineWidth=p.w*.9,t.beginPath(),t.moveTo(m[0],m[1]),t.lineTo(v[0],v[1]),t.stroke()}}let c=Math.floor(j.x/400),l=Math.floor(j.z/400);for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)for(let u of n.tilePois.get(n.key(c+h,l+f))||[])t.fillStyle=/school/i.test(u.k)?"#60a5fa":/worship|mosque/i.test(u.k)?"#34d399":/fuel/i.test(u.k)?"#f97316":"#f472b6",t.beginPath(),t.arc(u.c[0],u.c[1],7,0,Math.PI*2),t.fill();Ue.current.showroomAt&&(t.fillStyle="#D0B46C",t.beginPath(),t.arc(Ue.current.showroomAt[0],Ue.current.showroomAt[1],9,0,Math.PI*2),t.fill()),t.restore(),t.save(),t.translate(i,i),t.fillStyle="#ef4444",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore()}var vu=0,yu=0;function jy(i){let e=ti,t=e.maxKmh/3.6;if(Rn==="drive"){let n=ft.boost&&pe.boostFuel>.05&&!pe.totaled;n&&!pe.boosting&&St.whoosh(),pe.boosting=n,pe.boostFuel=pe.boosting?Math.max(0,pe.boostFuel-i/3):Math.min(1,pe.boostFuel+i/9),Yy.style.width=(pe.boostFuel*100).toFixed(0)+"%",Zy.classList.toggle("cooling",pe.boostFuel<.05);let s=(ft.right?1:0)-(ft.left?1:0);Oe.controls==="wheel"&&(Vy(i),s===0&&(s=Math.sign(ft.wheel)*Math.pow(Math.abs(ft.wheel),1.5))),Oe.tilt&&s===0&&(s=ft.tilt),pe.totaled?(j.throttle=0,j.brake=.4,j.steer=0,j.yawRate=pe.spin,pe.spin*=Math.pow(.4,i)):(j.throttle=ft.gas?1:0,j.brake=ft.brake?1:0,j.steer=s);let r=!!Ue.road.isMap,o=Ue.road.nearest(j.x,j.z,pe.idx);r||(pe.idx=o.i,pe.s=o.s);let a=Math.abs(o.d);j.offRoad=r?!o.onRoad:a>It/2+.6,j.surfaceGrip=j.offRoad?Ue.current.offroadGrip:1,r&&(yp.textContent=o.onRoad&&o.name?o.name:"");let c=pe.damage/100;if(c>.5&&!pe.totaled&&(j.steer+=Math.sin(Su.elapsedTime*7)*(c-.5)*.5),j.update(i,t*(1-c*.45),e.accel*(1-c*.5),e.handling,pe.boosting),pe.dist+=Math.max(0,j.vf)*i,!r&&(Ue.current.guardrail||Ue.current.poles)){let g=(Ue.current.guardrail?hr:It/2+.75)-.15,p=Ue.road.nearest(j.x,j.z,pe.idx);if(Math.abs(p.d)+j.halfW>g){let m=Math.sign(p.d),v=Math.abs(p.d)+j.halfW-g;j.x-=p.rx*m*v,j.z-=p.rz*m*v;let y=j.vx*p.rx*m+j.vz*p.rz*m;y>0&&(j.vx-=y*p.rx*m*1.3,j.vz-=y*p.rz*m*1.3,Qa(y),j.yawRate-=m*Math.min(1.5,y*.1)),j.vx*=1-.6*i,j.vz*=1-.6*i}}for(let g of r?Ue.road.obstaclesNear(j.x,j.z):Ue.road.obstaclesNear(pe.idx)){if(Math.abs(g.x-j.x)>40||Math.abs(g.z-j.z)>40)continue;let p=g.type==="circle"?$d(j,g.x,g.z,g.r):jd(j,g.x,g.z,g.hw,g.hl,g.h);p>0&&Qa(p)}for(let g of En){if(!g.active)continue;if(r){let D=g.agent,B=g.body,Y=j.x-B.x,k=j.z-B.z,[$,H]=B.fwd(),oe=Y*$+k*H,fe=Math.abs(Y*H-k*$),Le=oe>0&&oe<16&&fe<3?Math.max(0,Math.abs(j.vf)-1):D.speed,Qe=D.speed;D.speed=Le,Ue.road.advanceAgent(D,i),D.speed=Qe,B.x+=(D.x-B.x)*Math.min(1,10*i),B.z+=(D.z-B.z)*Math.min(1,10*i);let q=D.h-B.h;for(;q>Math.PI;)q-=Math.PI*2;for(;q<-Math.PI;)q+=Math.PI*2;if(B.h+=q*Math.min(1,10*i),B.vx=$*Le,B.vz=H*Le,B.vf=Le,Math.hypot(Y,k)>420){_p(g);continue}rp(g);for(let _e of g.mesh.userData.wheels)_e.userData.spin.rotation.x-=Le*i/_e.userData.radius;g.mesh.traverse(_e=>{_e.isMesh&&(_e.castShadow=Math.hypot(Y,k)<70)});let se=Ya(j,B);se>0&&Qa(se);continue}let p=g.body,m=Ue.road.nearest(p.x,p.z,g.idx);if(g.idx=m.i,g.s=m.s,g.s<pe.s-120||g.s>pe.s+520){fp(g,g.s<pe.s);continue}let v=Ue.road.pointAt(g.s+14+p.vf*.6),y=v.x+v.rx*qi[g.lane],_=v.z+v.rz*qi[g.lane],A=y-p.x,E=_-p.z,I=Math.atan2(-A,-E)-p.h;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;p.steer=jn(-I*2.2,-1,1);let b=1e9,M=Math.abs(o.d-qi[g.lane])<2.4?pe.s-g.s:1e9;M>0&&M<b&&(b=M);for(let D of En)if(D!==g&&D.active&&D.lane===g.lane){let B=D.s-g.s;B>0&&B<b&&(b=B)}let P=b<12?0:b<30?Math.min(g.target,b*.6):g.target;p.throttle=p.vf<P?.7:0,p.brake=p.vf>P+2?.6:0,p.offRoad=Math.abs(m.d)>It/2+.6,p.surfaceGrip=p.offRoad?.6:1,p.update(i,45,7,6,!1),rp(g);for(let D of g.mesh.userData.wheels)D.userData.spin.rotation.x-=p.vf*i/D.userData.radius,D.userData.front&&(D.rotation.y=-p.steerAngle);g.mesh.traverse(D=>{D.isMesh&&(D.castShadow=Math.abs(g.s-pe.s)<70)});let N=Ya(j,p);N>0&&Qa(N)}if(!r)for(let g=0;g<En.length;g++)for(let p=g+1;p<En.length;p++)En[g].active&&En[p].active&&Ya(En[g].body,En[p].body);if(wt.position.set(j.x,0,j.z),wt.rotation.y=j.h,wt.rotation.z=-j.steer*.03*jn(Math.abs(j.vf)/20,0,1)-j.vl*.01,wt.rotation.x=(j.throttle?-.012:j.brake?.025:0)*jn(Math.abs(j.vf)/15,0,1),j.offRoad){wt.position.y=Math.abs(j.vf)>2?Math.sin(Su.elapsedTime*31)*.03:0,pe.shake=Math.max(pe.shake,jn(Math.abs(j.vf)/20,0,.35)),yu+=i*jn(Math.abs(j.vf)/3,0,10);let g=Ue.currentName==="snow"?[.95,.97,1]:Ue.currentName==="desert"?[.78,.66,.45]:[.55,.47,.32];for(;yu>=1;){yu-=1;let[p,m]=j.fwd();bu(j.x-p*(e.len/2-.5),.3,j.z-m*(e.len/2-.5),.9,g)}}for(let g of wt.userData.wheels)g.userData.spin.rotation.x-=j.vf*i/g.userData.radius,g.userData.front&&(g.rotation.y=-j.steerAngle);wt.userData.glow.material.opacity=pe.boosting?.8:0,vu+=i*(pe.totaled?14:pe.damage>40?(pe.damage-40)/60*8:0);let[l,h]=j.fwd();for(;vu>=1;)vu-=1,bu(j.x+l*(e.len/2-.6),.9,j.z+h*(e.len/2-.6),pe.totaled?1.4:.8);r?(Ue.road.ensure(j.x,j.z),$y()):Ue.road.ensure(pe.idx),Ue.follow(j.x,j.z,l,h),Xy.textContent=Math.round(Math.abs(j.vf)*3.6),qy.textContent=(pe.dist/1e3).toFixed(1)+" km";let f=jn(Math.abs(j.vf)/t,0,1),[u,d]=j.right();if(Oe.cam===0){let g=7.2+f*1.8+e.len*.2;gr.set(j.x-l*g+u*j.vl*.08,2.7+f*.5,j.z-h*g+d*j.vl*.08),ec.set(j.x+l*10,1,j.z+h*10),Ft.position.lerp(gr,Math.min(1,6*i))}else if(Oe.cam===1){let g=4.8+f*.8+e.len*.15;gr.set(j.x-l*g,1.8+f*.2,j.z-h*g),ec.set(j.x+l*10,.9,j.z+h*10),Ft.position.lerp(gr,Math.min(1,8*i))}else gr.set(j.x+l*(e.len/2-.9),1.15,j.z+h*(e.len/2-.9)),ec.set(j.x+l*40,.9,j.z+h*40),Ft.position.copy(gr);Ft.fov=xu(Ft.fov,60+f*14+(pe.boosting?8:0),Math.min(1,4*i)),Ft.updateProjectionMatrix(),pe.shake=Math.max(0,pe.shake-i*1.8);let x=pe.shake*.12+f*f*.01+(pe.boosting?.02:0);Ft.position.x+=(Math.random()-.5)*x,Ft.position.y+=(Math.random()-.5)*x,Ft.lookAt(ec),Ft.rotation.z+=-j.yawRate*.04*jn(Math.abs(j.vf)/20,0,1),St.update(Math.abs(j.vf),t,!!j.throttle,pe.boosting)}else{if(pe.menuAngle+=i*.3,!Ue.road)return;let n=Ue.road.isMap?Ue.road.startPose():Ue.road.pointAt(40);Ue.road.isMap&&(n.fx=-Math.sin(n.h),n.fz=-Math.cos(n.h)),wt.position.set(n.x,0,n.z),wt.rotation.y=n.h+pe.menuAngle;let s=4.2+ti.len*.5;Ft.position.set(n.x+Math.sin(.8)*s,1.7+ti.len*.08,n.z+Math.cos(.8)*s),Ft.lookAt(n.x,.7,n.z),Ft.fov=xu(Ft.fov,42,Math.min(1,4*i)),Ft.updateProjectionMatrix();for(let r of wt.userData.wheels)r.userData.front&&(r.rotation.y=xu(r.rotation.y,0,i*3));wt.userData.glow.material.opacity=0,Ue.road.isMap?Ue.road.ensure(n.x,n.z):Ue.road.ensure(10),Ue.follow(n.x,n.z,n.fx,n.fz),St.engine&&St.update(0,t,!1,!1)}zy(i)}var tc=0,Mu=0,nc=3;function Qy(i){if(Rn!=="drive"||(tc+=i,Mu++,tc<4))return;let e=Mu/tc;tc=0,Mu=0,e<26&&nc>0&&(nc--,nc===2?ap=!1:nc===1?(pn.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),Ue.sun.shadow.mapSize.set(1024,1024),Ue.sun.shadow.map&&(Ue.sun.shadow.map.dispose(),Ue.sun.shadow.map=null)):(pn.setPixelRatio(.8),pn.shadowMap.enabled=!1),wu())}var bp=0;function Sp(){let i=Math.min(.05,Su.getDelta());bp+=i,wt&&(Ue.road||Rn==="menu")&&(jy(i),Qy(i),ap&&ei?ei.render():pn.render(ni,Ft)),requestAnimationFrame(Sp)}Ue.setWorld(Oe.world);pp();Oy().then(()=>{oo(),Zi(),vp()}).catch(i=>{Eu.textContent="Something went wrong: "+i,console.error(i)});Ft.position.set(6,3,7);Sp();document.addEventListener("visibilitychange",()=>{document.hidden?ft.gas=ft.brake=ft.boost=!1:St.resume()});window.__kidcars={G:pe,settings:Oe,state:()=>Rn,hasCar:eo,body:()=>j,simTime:()=>bp,roadReady:()=>!!Ue.road,inputs:()=>({...ft})};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
