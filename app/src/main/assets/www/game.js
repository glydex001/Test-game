(()=>{var qh="170";var Nm=0,Cf=1,Fm=2;var yo=1,ec=2,gi=3,jn=0,Yt=1,Ht=2,Jn=0,tr=1,Rn=2,If=3,Pf=4,Om=5,xs=100,Bm=101,zm=102,km=103,Hm=104,Vm=200,Gm=201,Wm=202,Xm=203,wl=204,El=205,qm=206,Ym=207,Km=208,Zm=209,$m=210,Jm=211,jm=212,Qm=213,eg=214,Tl=0,Al=1,Rl=2,rr=3,Cl=4,Il=5,Pl=6,Ll=7,Qd=0,tg=1,ng=2,Hi=0,Yh=1,Kh=2,Zh=3,Mo=4,ig=5,$h=6,Jh=7,Lf="attached",sg="detached",ep=300,or=301,ar=302,Dl=303,Ul=304,tc=306,Mi=1e3,_i=1001,ys=1002,Kt=1003,jh=1004;var js=1005;var fn=1006,no=1007;var $n=1008;var Cn=1009,tp=1010,np=1011,co=1012,Qh=1013,Ms=1014,Wn=1015,vn=1016,eu=1017,tu=1018,cr=1020,ip=35902,sp=1021,rp=1022,Tn=1023,op=1024,ap=1025,nr=1026,lr=1027,nu=1028,iu=1029,cp=1030,su=1031;var ru=1033,va=33776,ya=33777,Ma=33778,ba=33779,Nl=35840,Fl=35841,Ol=35842,Bl=35843,zl=36196,kl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,Xl=37811,ql=37812,Yl=37813,Kl=37814,Zl=37815,$l=37816,Jl=37817,jl=37818,Ql=37819,eh=37820,th=37821,Sa=36492,nh=36494,ih=36495,lp=36283,sh=36284,rh=36285,oh=36286;var hr=2300,ur=2301,Gc=2302,Df=2400,Uf=2401,Nf=2402,rg=2500;var hp=0,nc=1,bo=2,og=3200,ag=3201;var up=0,cg=1,zi="",bt="srgb",Zt="srgb-linear",ic="linear",dt="srgb";var Os=7680;var Ff=519,lg=512,hg=513,ug=514,fp=515,fg=516,dg=517,pg=518,mg=519,ah=35044;var Of="300 es",vi=2e3,wa=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bf=1234567,io=Math.PI/180,fr=180/Math.PI;function An(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function ou(i,e){return(i%e+e)%e}function gg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xg(i,e,t){return i!==e?(t-i)/(e-i):0}function so(i,e,t){return(1-t)*i+t*e}function _g(i,e,t,n){return so(i,e,1-Math.exp(-t*n))}function vg(i,e=1){return e-Math.abs(ou(i,e*2)-e)}function yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sg(i,e){return i+Math.random()*(e-i)}function wg(i){return i*(.5-Math.random())}function Eg(i){i!==void 0&&(Bf=i);let e=Bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Tg(i){return i*io}function Ag(i){return i*fr}function Rg(i){return(i&i-1)===0&&i!==0}function Cg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ig(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var So={DEG2RAD:io,RAD2DEG:fr,generateUUID:An,clamp:qt,euclideanModulo:ou,mapLinear:gg,inverseLerp:xg,lerp:so,damp:_g,pingpong:vg,smoothstep:yg,smootherstep:Mg,randInt:bg,randFloat:Sg,randFloatSpread:wg,seededRandom:Eg,degToRad:Tg,radToDeg:Ag,isPowerOfTwo:Rg,ceilPowerOfTwo:Cg,floorPowerOfTwo:Ig,setQuaternionFromProperEuler:Pg,normalize:mt,denormalize:Gn},ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],S=s[2],E=s[5],A=s[8];return r[0]=o*x+a*v+c*S,r[3]=o*m+a*y+c*E,r[6]=o*p+a*_+c*A,r[1]=l*x+h*v+f*S,r[4]=l*m+h*y+f*E,r[7]=l*p+h*_+f*A,r[2]=u*x+d*v+g*S,r[5]=u*m+d*y+g*E,r[8]=u*p+d*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new Ze;function dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lg(){let i=lo("canvas");return i.style.display="block",i}var zf={};function eo(i){i in zf||(zf[i]=!0,console.warn(i))}function Dg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ug(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ng(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===dt&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===dt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?ic:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kf=[.64,.33,.3,.6,.15,.06],Hf=[.2126,.7152,.0722],Vf=[.3127,.329],Gf=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[Zt]:{primaries:kf,whitePoint:Vf,transfer:ic,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:Hf,workingColorSpaceConfig:{unpackColorSpace:bt},outputColorSpaceConfig:{drawingBufferColorSpace:bt}},[bt]:{primaries:kf,whitePoint:Vf,transfer:dt,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:Hf,outputColorSpaceConfig:{drawingBufferColorSpace:bt}}});var Bs,ch=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=lo("canvas")),Bs.width=e.width,Bs.height=e.height;let n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fg=0,Ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xc(s[o].image)):r.push(Xc(s[o]))}else r=Xc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ch.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Og=0,Vt=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_i,s=_i,r=fn,o=$n,a=Tn,c=Cn,l=i.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=An(),this.name="",this.source=new Ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=ep;Vt.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(d+1)/2,S=(p+1)/2,E=(h+u)/4,A=(f+x)/4,R=(g+m)/4;return y>_&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=A/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=R/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=R/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lh=class extends Gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ta=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var hh=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==u||l!==d||h!==g){let m=1-a,p=c*u+l*d+h*g+f*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let S=Math.sqrt(y),E=Math.atan2(S,p*v);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}let _=a*v;if(c=c*m+u*_,l=l*m+d*_,h=h*m+g*_,f=f*m+x*_,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*d-l*u,e[t+1]=c*g+h*u+l*f-a*d,e[t+2]=l*g+h*d+a*u-c*f,e[t+3]=h*g-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qc=new L,Xf=new Jt,nn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(r,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Wo.subVectors(this.max,qr),zs.subVectors(e.a,qr),ks.subVectors(e.b,qr),Hs.subVectors(e.c,qr),Di.subVectors(ks,zs),Ui.subVectors(Hs,ks),hs.subVectors(zs,Hs);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-hs.z,hs.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,hs.z,0,-hs.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-hs.y,hs.x,0];return!Yc(t,zs,ks,Hs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!Yc(t,zs,ks,Hs,Wo))?!1:(Xo.crossVectors(Di,Ui),t=[Xo.x,Xo.y,Xo.z],Yc(t,zs,ks,Hs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,Go=new nn,zs=new L,ks=new L,Hs=new L,Di=new L,Ui=new L,hs=new L,qr=new L,Wo=new L,Xo=new L,us=new L;function Yc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){us.fromArray(i,r);let a=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=n.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Bg=new nn,Yr=new L,Kc=new L,gn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(Kc)),this.expandByPoint(Yr.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new L,Zc=new L,qo=new L,Ni=new L,$c=new L,Yo=new L,Jc=new L,dr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zc.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Zc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qo),a=Ni.dot(this.direction),c=-Ni.dot(qo),l=Ni.lengthSq(),h=Math.abs(1-o*o),f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Zc).addScaledVector(qo,u),d}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let n=ui.dot(this.direction),s=ui.dot(ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,s,r){$c.subVectors(t,e),Yo.subVectors(n,e),Jc.crossVectors($c,Yo);let o=this.direction.dot(Jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);let c=a*this.direction.dot(Yo.crossVectors(Ni,Yo));if(c<0)return null;let l=a*this.direction.dot($c.cross(Ni));if(l<0||c+l>o)return null;let h=-a*Ni.dot(Jc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,u,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,u,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,f,u,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,g=l*h,x=l*f;t[0]=u-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=u*l+x,t[1]=c*f,t[5]=x*l+u,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+x,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,kg)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Fi.crossVectors(n,pn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Fi.crossVectors(n,pn)),Fi.normalize(),Ko.crossVectors(pn,Fi),s[0]=Fi.x,s[4]=Ko.x,s[8]=pn.x,s[1]=Fi.y,s[5]=Ko.y,s[9]=pn.y,s[2]=Fi.z,s[6]=Ko.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],S=n[15],E=s[0],A=s[4],R=s[8],b=s[12],M=s[1],P=s[5],D=s[9],F=s[13],B=s[2],q=s[6],k=s[10],Q=s[14],V=s[3],ne=s[7],ce=s[11],me=s[15];return r[0]=o*E+a*M+c*B+l*V,r[4]=o*A+a*P+c*q+l*ne,r[8]=o*R+a*D+c*k+l*ce,r[12]=o*b+a*F+c*Q+l*me,r[1]=h*E+f*M+u*B+d*V,r[5]=h*A+f*P+u*q+d*ne,r[9]=h*R+f*D+u*k+d*ce,r[13]=h*b+f*F+u*Q+d*me,r[2]=g*E+x*M+m*B+p*V,r[6]=g*A+x*P+m*q+p*ne,r[10]=g*R+x*D+m*k+p*ce,r[14]=g*b+x*F+m*Q+p*me,r[3]=v*E+y*M+_*B+S*V,r[7]=v*A+y*P+_*q+S*ne,r[11]=v*R+y*D+_*k+S*ce,r[15]=v*b+y*F+_*Q+S*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*f-s*l*f-r*a*u+n*l*u+s*a*d-n*c*d)+x*(+t*c*d-t*l*u+r*o*u-s*o*d+s*l*h-r*c*h)+m*(+t*l*f-t*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*f+t*a*u+s*o*f-n*o*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=f*m*l-x*u*l+x*c*d-a*m*d-f*c*p+a*u*p,y=g*u*l-h*m*l-g*c*d+o*m*d+h*c*p-o*u*p,_=h*x*l-g*f*l+g*a*d-o*x*d-h*a*p+o*f*p,S=g*f*c-h*x*c-g*a*u+o*x*u+h*a*m-o*f*m,E=t*v+n*y+s*_+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=v*A,e[1]=(x*u*r-f*m*r-x*s*d+n*m*d+f*s*p-n*u*p)*A,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*A,e[3]=(f*c*r-a*u*r-f*s*l+n*u*l+a*s*d-n*c*d)*A,e[4]=y*A,e[5]=(h*m*r-g*u*r+g*s*d-t*m*d-h*s*p+t*u*p)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*d+t*c*d)*A,e[8]=_*A,e[9]=(g*f*r-h*x*r-g*n*d+t*x*d+h*n*p-t*f*p)*A,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*d-t*a*d)*A,e[12]=S*A,e[13]=(h*x*s-g*f*s+g*n*u-t*x*u-h*n*m+t*f*m)*A,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*A,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*u+t*a*u)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,v=c*l,y=c*h,_=c*f,S=n.x,E=n.y,A=n.z;return s[0]=(1-(x+p))*S,s[1]=(d+_)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+y)*A,s[9]=(m-v)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),a=Vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let l=1/r,h=1/o,f=1/a;return Hn.elements[0]*=l,Hn.elements[1]*=l,Hn.elements[2]*=l,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,t.setFromRotationMatrix(Hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=vi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s),d,g;if(a===vi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=vi){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),u=(t+e)*l,d=(n+s)*h,g,x;if(a===vi)g=(o+r)*f,x=-2*f;else if(a===wa)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new L,Hn=new Ge,zg=new L(0,0,0),kg=new L(1,1,1),Fi=new L,Ko=new L,pn=new L,qf=new Ge,Yf=new Jt,sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Aa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hg=0,Kf=new L,Gs=new Jt,fi=new Ge,Zo=new L,Kr=new L,Vg=new L,Gg=new Jt,Zf=new L(1,0,0),$f=new L(0,1,0),Jf=new L(0,0,1),jf={type:"added"},Wg={type:"removed"},Ws={type:"childadded",child:null},jc={type:"childremoved",child:null},Tt=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new sn,n=new Jt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Jf,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Kr,Zo,this.up):fi.lookAt(Zo,Kr,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(fi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wg),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,Vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,Gg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Tt.DEFAULT_UP=new L(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new L,di=new L,Qc=new L,pi=new L,Xs=new L,qs=new L,Qf=new L,el=new L,tl=new L,nl=new L,il=new at,sl=new at,rl=new at,_s=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),di.subVectors(n,t),Qc.subVectors(e,t);let o=Vn.dot(Vn),a=Vn.dot(di),c=Vn.dot(Qc),l=di.dot(di),h=di.dot(Qc),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(o,pi.y),c.addScaledVector(a,pi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return il.setScalar(0),sl.setScalar(0),rl.setScalar(0),il.fromBufferAttribute(e,t),sl.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(il,r.x),o.addScaledVector(sl,r.y),o.addScaledVector(rl,r.z),o}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),di.subVectors(e,t),Vn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Vn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),qs.subVectors(r,n),el.subVectors(e,n);let c=Xs.dot(el),l=qs.dot(el);if(c<=0&&l<=0)return t.copy(n);tl.subVectors(e,s);let h=Xs.dot(tl),f=qs.dot(tl);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Xs,o);nl.subVectors(e,r);let d=Xs.dot(nl),g=qs.dot(nl);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(qs,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Qf.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Qf,a);let p=1/(m+x+u);return o=x*p,a=u*p,t.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function ol(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=ou(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ol(o,r,e+1/3),this.g=ol(o,r,e),this.b=ol(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=bt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){let n=pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return je.fromWorkingColorSpace(tn.copy(this),e),Math.round(qt(tn.r*255,0,255))*65536+Math.round(qt(tn.g*255,0,255))*256+Math.round(qt(tn.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=bt){je.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL($o);let n=so(Oi.h,$o.h,t),s=so(Oi.s,$o.s,t),r=so(Oi.l,$o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Te;Te.NAMES=pp;var Xg=0,xn=class extends Gi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=An(),this.name="",this.blending=tr,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=El,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ff,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==xs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ff&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},It=class extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,Jo=new ee,He=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}};var Ra=class extends He{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ca=class extends He{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends He{constructor(e,t,n){super(new Float32Array(e),t,n)}},qg=0,En=new Ge,al=new Tt,Ys=new L,mn=new nn,Zr=new nn,Xt=new L,Qe=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dp(e)?Ca:Ra)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(mn.min,Zr.min),mn.expandByPoint(Xt),Xt.addVectors(mn.max,Zr.max),mn.expandByPoint(Xt)):(mn.expandByPoint(Zr.min),mn.expandByPoint(Zr.max))}mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xt.fromBufferAttribute(a,l),c&&(Ys.fromBufferAttribute(e,l),Xt.add(Ys)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;let l=new L,h=new L,f=new L,u=new ee,d=new ee,g=new ee,x=new L,m=new L;function p(R,b,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,R),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),f.sub(l),d.sub(u),g.sub(u);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(x),a[b].add(x),a[M].add(x),c[R].add(m),c[b].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,b=v.length;R<b;++R){let M=v[R],P=M.start,D=M.count;for(let F=P,B=P+D;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let y=new L,_=new L,S=new L,E=new L;function A(R){S.fromBufferAttribute(s,R),E.copy(S);let b=a[R];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),_.crossVectors(E,b);let P=_.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,b=v.length;R<b;++R){let M=v[R],P=M.start,D=M.count;for(let F=P,B=P+D;F<B;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new He(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ed=new Ge,fs=new dr,jo=new gn,td=new L,Qo=new L,ea=new L,ta=new L,cl=new L,na=new L,nd=new L,ia=new L,ge=class extends Tt{constructor(e=new Qe,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(cl.fromBufferAttribute(f,e),o?na.addScaledVector(cl,h):na.addScaledVector(cl.sub(t),h))}t.add(na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(jo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(jo,td)===null||fs.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),fs.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){let E=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);s=sa(this,p,e,n,l,h,f,E,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=sa(this,o,e,n,l,h,f,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,S=y;_<S;_+=3){let E=_,A=_+1,R=_+2;s=sa(this,p,e,n,l,h,f,E,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=sa(this,o,e,n,l,h,f,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Yg(i,e,t,n,s,r,o,a){let c;if(e.side===Yt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===jn,a),c===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ia);return l<t.near||l>t.far?null:{distance:l,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qo),i.getVertexPosition(c,ea),i.getVertexPosition(l,ta);let h=Yg(i,e,t,n,Qo,ea,ta,nd);if(h){let f=new L;_s.getBarycoord(nd,Qo,ea,ta,f),s&&(h.uv=_s.getInterpolatedAttribute(s,a,c,l,f,new ee)),r&&(h.uv1=_s.getInterpolatedAttribute(r,a,c,l,f,new ee)),o&&(h.normal=_s.getInterpolatedAttribute(o,a,c,l,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};_s.getNormal(Qo,ea,ta,u.normal),h.face=u,h.barycoord=f}return h}var ct=class i extends Qe{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function g(x,m,p,v,y,_,S,E,A,R,b){let M=_/A,P=S/R,D=_/2,F=S/2,B=E/2,q=A+1,k=R+1,Q=0,V=0,ne=new L;for(let ce=0;ce<k;ce++){let me=ce*P-F;for(let ze=0;ze<q;ze++){let et=ze*M-D;ne[x]=et*v,ne[m]=me*y,ne[p]=B,l.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(ze/A),f.push(1-ce/R),Q+=1}}for(let ce=0;ce<R;ce++)for(let me=0;me<A;me++){let ze=u+me+q*ce,et=u+me+q*(ce+1),Z=u+(me+1)+q*(ce+1),le=u+(me+1)+q*ce;c.push(ze,et,le),c.push(et,Z,le),V+=6}a.addGroup(d,V,b),d+=V,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function pr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=pr(i[t]);for(let s in n)e[s]=n[s]}return e}function Kg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var Qn={clone:pr,merge:cn},Zg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zg,this.fragmentShader=$g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ia=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new L,id=new ee,sd=new ee,kt=class extends Ia{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ks=-90,Zs=1,uh=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Ks,Zs,e,t);s.layers=this.layers,this.add(s);let r=new kt(Ks,Zs,e,t);r.layers=this.layers,this.add(r);let o=new kt(Ks,Zs,e,t);o.layers=this.layers,this.add(o);let a=new kt(Ks,Zs,e,t);a.layers=this.layers,this.add(a);let c=new kt(Ks,Zs,e,t);c.layers=this.layers,this.add(c);let l=new kt(Ks,Zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pa=class extends Vt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fh=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ct(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Jn});r.uniforms.tEquirect.value=t;let o=new ge(s,r),a=t.minFilter;return t.minFilter===$n&&(t.minFilter=fn),new uh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ll=new L,Jg=new L,jg=new Ze,xi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ll.subVectors(n,t).cross(Jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ll),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jg.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new gn,ra=new L,ho=class{constructor(e=new xi,t=new xi,n=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,u-l,m-d,_-p).normalize(),n[1].setComponents(c+r,u+l,m+d,_+p).normalize(),n[2].setComponents(c+o,u+h,m+g,_+v).normalize(),n[3].setComponents(c-o,u-h,m-g,_-v).normalize(),n[4].setComponents(c-a,u-f,m-x,_-y).normalize(),t===vi)n[5].setComponents(c+a,u+f,m+x,_+y).normalize();else if(t===wa)n[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qg(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var In=class i extends Qe{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let y=0;y<l;y++){let _=y*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let y=v+l*p,_=v+l*(p+1),S=v+1+l*(p+1),E=v+1+l*p;d.push(y,_,E),d.push(_,S,E)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,S0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
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
#endif`,j0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e_=`uniform sampler2D t2D;
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`#include <common>
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
}`,o_=`#if DEPTH_PACKING == 3200
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
}`,a_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,d_=`#include <common>
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
}`,p_=`uniform vec3 diffuse;
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
}`,m_=`#define LAMBERT
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define MATCAP
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
}`,__=`#define MATCAP
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
}`,v_=`#define NORMAL
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
}`,y_=`#define NORMAL
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
}`,M_=`#define PHONG
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
}`,b_=`#define PHONG
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
}`,S_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,E_=`#define TOON
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
}`,T_=`#define TOON
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
}`,A_=`uniform float size;
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,P_=`uniform float rotation;
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
}`,L_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:h0,beginnormal_vertex:u0,bsdfs:f0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:_0,color_fragment:v0,color_pars_fragment:y0,color_pars_vertex:M0,color_vertex:b0,common:S0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:I0,colorspace_pars_fragment:P0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:U0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:k0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:$0,lights_physical_fragment:J0,lights_physical_pars_fragment:j0,lights_fragment_begin:Q0,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:rx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:cx,map_particle_pars_fragment:lx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:fx,morphcolor_vertex:dx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:xx,normal_fragment_maps:_x,normal_pars_fragment:vx,normal_pars_vertex:yx,normal_vertex:Mx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:Tx,opaque_fragment:Ax,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Ix,dithering_fragment:Px,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Fx,shadowmap_vertex:Ox,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:kx,skinning_vertex:Hx,skinnormal_vertex:Vx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:qx,transmission_fragment:Yx,transmission_pars_fragment:Kx,uv_pars_fragment:Zx,uv_pars_vertex:$x,uv_vertex:Jx,worldpos_vertex:jx,background_vert:Qx,background_frag:e_,backgroundCube_vert:t_,backgroundCube_frag:n_,cube_vert:i_,cube_frag:s_,depth_vert:r_,depth_frag:o_,distanceRGBA_vert:a_,distanceRGBA_frag:c_,equirect_vert:l_,equirect_frag:h_,linedashed_vert:u_,linedashed_frag:f_,meshbasic_vert:d_,meshbasic_frag:p_,meshlambert_vert:m_,meshlambert_frag:g_,meshmatcap_vert:x_,meshmatcap_frag:__,meshnormal_vert:v_,meshnormal_frag:y_,meshphong_vert:M_,meshphong_frag:b_,meshphysical_vert:S_,meshphysical_frag:w_,meshtoon_vert:E_,meshtoon_frag:T_,points_vert:A_,points_frag:R_,shadow_vert:C_,shadow_frag:I_,sprite_vert:P_,sprite_frag:L_},xe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zn={basic:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:cn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:cn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:cn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:cn([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:cn([xe.lights,xe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zn.physical={uniforms:cn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var oa={r:0,b:0,g:0},ps=new sn,D_=new Ge;function U_(i,e,t,n,s,r,o){let a=new Te(0),c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1,_=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===tc)?(h===void 0&&(h=new ge(new ct(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:pr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(y.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(D_.makeRotationFromEuler(ps)),h.material.toneMapped=je.getTransfer(_.colorSpace)!==dt,(f!==_||u!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,u=_.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ge(new In(2,2),new At({name:"BackgroundMaterial",uniforms:pr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=je.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(oa,mp(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function N_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(M,P,D,F,B){let q=!1,k=f(F,D,P);r!==k&&(r=k,l(r.object)),q=d(M,F,D,B),q&&g(M,F,D,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(M,P,D,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,P,D){let F=D.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let q=B[P.id];q===void 0&&(q={},B[P.id]=q);let k=q[F];return k===void 0&&(k=u(c()),q[F]=k),k}function u(M){let P=[],D=[],F=[];for(let B=0;B<t;B++)P[B]=0,D[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,P,D,F){let B=r.attributes,q=P.attributes,k=0,Q=D.getAttributes();for(let V in Q)if(Q[V].location>=0){let ce=B[V],me=q[V];if(me===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(M,P,D,F){let B={},q=P.attributes,k=0,Q=D.getAttributes();for(let V in Q)if(Q[V].location>=0){let ce=q[V];ce===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));let me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),B[V]=me,k++}r.attributes=B,r.attributesNum=k,r.index=F}function x(){let M=r.newAttributes;for(let P=0,D=M.length;P<D;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){let D=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),B[M]!==P&&(i.vertexAttribDivisor(M,P),B[M]=P)}function v(){let M=r.newAttributes,P=r.enabledAttributes;for(let D=0,F=P.length;D<F;D++)P[D]!==M[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function y(M,P,D,F,B,q,k){k===!0?i.vertexAttribIPointer(M,P,D,B,q):i.vertexAttribPointer(M,P,D,F,B,q)}function _(M,P,D,F){x();let B=F.attributes,q=D.getAttributes(),k=P.defaultAttributeValues;for(let Q in q){let V=q[Q];if(V.location>=0){let ne=B[Q];if(ne===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){let ce=ne.normalized,me=ne.itemSize,ze=e.get(ne);if(ze===void 0)continue;let et=ze.buffer,Z=ze.type,le=ze.bytesPerElement,Ae=Z===i.INT||Z===i.UNSIGNED_INT||ne.gpuType===Qh;if(ne.isInterleavedBufferAttribute){let fe=ne.data,Re=fe.stride,Oe=ne.offset;if(fe.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)p(V.location+Le,fe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<V.locationSize;Le++)m(V.location+Le);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Le=0;Le<V.locationSize;Le++)y(V.location+Le,me/V.locationSize,Z,ce,Re*le,(Oe+me/V.locationSize*Le)*le,Ae)}else{if(ne.isInstancedBufferAttribute){for(let fe=0;fe<V.locationSize;fe++)p(V.location+fe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let fe=0;fe<V.locationSize;fe++)m(V.location+fe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let fe=0;fe<V.locationSize;fe++)y(V.location+fe,me/V.locationSize,Z,ce,me*le,me/V.locationSize*fe*le,Ae)}}else if(k!==void 0){let ce=k[Q];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(V.location,ce);break;case 3:i.vertexAttrib3fv(V.location,ce);break;case 4:i.vertexAttrib4fv(V.location,ce);break;default:i.vertexAttrib1fv(V.location,ce)}}}}v()}function S(){R();for(let M in n){let P=n[M];for(let D in P){let F=P[D];for(let B in F)h(F[B].object),delete F[B];delete P[D]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let D in P){let F=P[D];for(let B in F)h(F[B].object),delete F[B];delete P[D]}delete n[M.id]}function A(M){for(let P in n){let D=n[P];if(D[M.id]===void 0)continue;let F=D[M.id];for(let B in F)h(F[B].object),delete F[B];delete D[M.id]}}function R(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function F_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function c(l,h,f,u){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function O_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Tn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Wn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:S,maxSamples:E}}function B_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new xi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,_=p.clippingState||null;c.value=_,_=h(g,u,y,d);for(let S=0;S!==y;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function z_(i){let e=new WeakMap;function t(o,a){return a===Dl?o.mapping=or:a===Ul&&(o.mapping=ar),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dl||a===Ul)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new fh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wi=class extends Ia{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qs=4,rd=[.125,.215,.35,.446,.526,.582],vs=20,hl=new Wi,od=new Te,ul=null,fl=0,dl=0,pl=!1,gs=(1+Math.sqrt(5))/2,$s=1/gs,ad=[new L(-gs,$s,0),new L(gs,$s,0),new L(-$s,0,gs),new L($s,0,gs),new L(0,gs,-$s),new L(0,gs,$s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),this._renderer.xr.enabled=pl,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:vn,format:Tn,colorSpace:Zt,depthBuffer:!1},s=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k_(r)),this._blurMaterial=H_(r,e,t)}return s}_compileMaterial(e){let t=new ge(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,n,s){let a=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(od),h.toneMapping=Hi,h.autoClear=!1;let d=new It({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new ge(new ct,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(od),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;aa(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===or||e.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;aa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ad[(s-r-1)%ad.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ge(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):vs;m>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let p=[],v=0;for(let A=0;A<vs;++A){let R=A/x,b=Math.exp(-R*R/2);p.push(b),A===0?v+=b:A<m&&(v+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;let _=this._sizeLods[s],S=3*_*(s>y-Qs?s-y+Qs:0),E=4*(this._cubeSize-_);aa(t,S,E,3*_,2*_),c.setRenderTarget(t),c.render(f,hl)}};function k_(i){let e=[],t=[],n=[],s=i,r=i-Qs+1+rd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Qs?c=rd[o-i+Qs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let E=0;E<d;E++){let A=E%3*2/3-1,R=E>2?0:-1,b=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(b,x*g*E),y.set(u,m*g*E);let M=[E,E,E,E,E,E];_.set(M,p*g*E)}let S=new Qe;S.setAttribute("position",new He(v,x)),S.setAttribute("uv",new He(y,m)),S.setAttribute("faceIndex",new He(_,p)),e.push(S),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function H_(i,e,t){let n=new Float32Array(vs),s=new L(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:au(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ld(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function hd(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}function V_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Dl||c===Ul,h=c===or||c===ar;if(l||h){let f=e.get(a),u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new mr(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new mr(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function G_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function W_(i,e,t,n){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(f){let u=f.attributes;for(let g in u)e.update(u[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let S=v[y+0],E=v[y+1],A=v[y+2];u.push(S,E,E,A,A,S)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let S=y+0,E=y+1,A=y+2;u.push(S,E,E,A,A,S)}}else return;let m=new(dp(u)?Ca:Ra)(u,1);m.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function X_(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*o,g),t.update(d,n,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(u,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function q_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Y_(i,e,t){let n=new WeakMap,s=new at;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*S*4*f),A=new Ta(E,_,S,f);A.type=Wn,A.needsUpdate=!0;let R=y*4;for(let M=0;M<f;M++){let P=m[M],D=p[M],F=v[M],B=_*S*4*M;for(let q=0;q<P.count;q++){let k=q*R;d===!0&&(s.fromBufferAttribute(P,q),E[B+k+0]=s.x,E[B+k+1]=s.y,E[B+k+2]=s.z,E[B+k+3]=0),g===!0&&(s.fromBufferAttribute(D,q),E[B+k+4]=s.x,E[B+k+5]=s.y,E[B+k+6]=s.z,E[B+k+7]=0),x===!0&&(s.fromBufferAttribute(F,q),E[B+k+8]=s.x,E[B+k+9]=s.y,E[B+k+10]=s.z,E[B+k+11]=F.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new ee(_,S)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function K_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var La=class extends Vt{constructor(e,t,n,s,r,o,a,c,l,h=nr){if(h!==nr&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===nr&&(n=Ms),n===void 0&&h===lr&&(n=cr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xp=new Vt,ud=new La(1,1),_p=new Ta,vp=new hh,yp=new Pa,fd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sc(i,e){let t=dd[e];t===void 0&&(t=new Int32Array(e),dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function j_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Q_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Wt(t,n)}}function ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Wt(t,n)}}function tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Wt(t,n)}}function nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function hv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ud.compareFunction=fp,r=ud):r=xp,t.setTexture2D(e||r,s)}function uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vp,s)}function fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yp,s)}function dv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||_p,s)}function pv(i){switch(i){case 5126:return Z_;case 35664:return $_;case 35665:return J_;case 35666:return j_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(i,e){i.uniform1fv(this.addr,e)}function gv(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function xv(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function _v(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function vv(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yv(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mv(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bv(i,e){i.uniform1iv(this.addr,e)}function Sv(i,e){i.uniform2iv(this.addr,e)}function wv(i,e){i.uniform3iv(this.addr,e)}function Ev(i,e){i.uniform4iv(this.addr,e)}function Tv(i,e){i.uniform1uiv(this.addr,e)}function Av(i,e){i.uniform2uiv(this.addr,e)}function Rv(i,e){i.uniform3uiv(this.addr,e)}function Cv(i,e){i.uniform4uiv(this.addr,e)}function Iv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xp,r[o])}function Pv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vp,r[o])}function Lv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yp,r[o])}function Dv(i,e,t){let n=this.cache,s=e.length,r=sc(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||_p,r[o])}function Uv(i){switch(i){case 5126:return mv;case 35664:return gv;case 35665:return xv;case 35666:return _v;case 35674:return vv;case 35675:return yv;case 35676:return Mv;case 5124:case 35670:return bv;case 35667:case 35671:return Sv;case 35668:case 35672:return wv;case 35669:case 35673:return Ev;case 5125:return Tv;case 36294:return Av;case 36295:return Rv;case 36296:return Cv;case 35678:case 36198:case 36298:case 36306:case 35682:return Iv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Dv}}var dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function Nv(i,e,t){let n=i.name,s=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),o=ml.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){xd(t,l===void 0?new dh(a,i,e):new ph(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new mh(a),xd(t,f)),t=f}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Nv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function _d(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fv=37297,Ov=0;function Bv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var vd=new Ze;function zv(i){je._getMatrix(vd,je.workingColorSpace,i);let e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ic:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function yd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Bv(i.getShaderSource(e),o)}else return s}function kv(i,e){let t=zv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Hv(i,e){let t;switch(e){case Yh:t="Linear";break;case Kh:t="Reinhard";break;case Zh:t="Cineon";break;case Mo:t="ACESFilmic";break;case $h:t="AgX";break;case Jh:t="Neutral";break;case ig:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ca=new L;function Vv(){je.getLuminanceCoefficients(ca);let i=ca.x.toFixed(4),e=ca.y.toFixed(4),t=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function Wv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function to(i){return i!==""}function Md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(qv,Kv)}var Yv=new Map;function Kv(i,e){let t=Je[e];if(t===void 0){let n=Yv.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(Zv,$v)}function $v(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Jv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function jv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case ar:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qd:e="ENVMAP_BLENDING_MULTIPLY";break;case tg:e="ENVMAP_BLENDING_MIX";break;case ng:e="ENVMAP_BLENDING_ADD";break}return e}function ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ny(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Jv(t),l=jv(t),h=Qv(t),f=ey(t),u=ty(t),d=Gv(t),g=Wv(r),x=s.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(to).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Hi?Hv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),Vv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),o=gh(o),o=Md(o,t),o=bd(o,t),a=gh(a),a=Md(a,t),a=bd(a,t),o=Sd(o),a=Sd(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,S=_d(s,s.VERTEX_SHADER,y),E=_d(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(S).trim(),B=s.getShaderInfoLog(E).trim(),q=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,E);else{let Q=yd(s,S,"vertex"),V=yd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Q+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(F===""||B==="")&&(k=!1);k&&(P.diagnostics={runnable:q,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(S),s.deleteShader(E),R=new sr(s,x),b=Xv(s,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Fv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ov++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}var iy=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}};function sy(i,e,t,n,s,r,o){let a=new Aa,c=new xh,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,D,F){let B=D.fog,q=F.geometry,k=b.isMeshStandardMaterial?D.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),V=Q&&Q.mapping===tc?Q.image.height:null,ne=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=ce!==void 0?ce.length:0,ze=0;q.morphAttributes.position!==void 0&&(ze=1),q.morphAttributes.normal!==void 0&&(ze=2),q.morphAttributes.color!==void 0&&(ze=3);let et,Z,le,Ae;if(ne){let pt=Zn[ne];et=pt.vertexShader,Z=pt.fragmentShader}else et=b.vertexShader,Z=b.fragmentShader,c.update(b),le=c.getVertexShaderID(b),Ae=c.getFragmentShaderID(b);let fe=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,Le=F.isBatchedMesh===!0,qe=!!b.map,j=!!b.matcap,X=!!Q,C=!!b.aoMap,he=!!b.lightMap,$=!!b.bumpMap,oe=!!b.normalMap,re=!!b.displacementMap,Ee=!!b.emissiveMap,pe=!!b.metalnessMap,I=!!b.roughnessMap,w=b.anisotropy>0,z=b.clearcoat>0,Y=b.dispersion>0,se=b.iridescence>0,J=b.sheen>0,De=b.transmission>0,ve=w&&!!b.anisotropyMap,Ce=z&&!!b.clearcoatMap,it=z&&!!b.clearcoatNormalMap,ue=z&&!!b.clearcoatRoughnessMap,Ie=se&&!!b.iridescenceMap,Ve=se&&!!b.iridescenceThicknessMap,We=J&&!!b.sheenColorMap,Pe=J&&!!b.sheenRoughnessMap,rt=!!b.specularMap,$e=!!b.specularColorMap,vt=!!b.specularIntensityMap,U=De&&!!b.transmissionMap,ye=De&&!!b.thicknessMap,K=!!b.gradientMap,te=!!b.alphaMap,we=b.alphaTest>0,Me=!!b.alphaHash,Ye=!!b.extensions,Lt=Hi;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Qt={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:et,fragmentShader:Z,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Le,batchingColor:Le&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Zt,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:j,envMap:X,envMapMode:X&&Q.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:he,bumpMap:$,normalMap:oe,displacementMap:u&&re,emissiveMap:Ee,normalMapObjectSpace:oe&&b.normalMapType===cg,normalMapTangentSpace:oe&&b.normalMapType===up,metalnessMap:pe,roughnessMap:I,anisotropy:w,anisotropyMap:ve,clearcoat:z,clearcoatMap:Ce,clearcoatNormalMap:it,clearcoatRoughnessMap:ue,dispersion:Y,iridescence:se,iridescenceMap:Ie,iridescenceThicknessMap:Ve,sheen:J,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:rt,specularColorMap:$e,specularIntensityMap:vt,transmission:De,transmissionMap:U,thicknessMap:ye,gradientMap:K,opaque:b.transparent===!1&&b.blending===tr&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:we,alphaHash:Me,combine:b.combine,mapUv:qe&&x(b.map.channel),aoMapUv:C&&x(b.aoMap.channel),lightMapUv:he&&x(b.lightMap.channel),bumpMapUv:$&&x(b.bumpMap.channel),normalMapUv:oe&&x(b.normalMap.channel),displacementMapUv:re&&x(b.displacementMap.channel),emissiveMapUv:Ee&&x(b.emissiveMap.channel),metalnessMapUv:pe&&x(b.metalnessMap.channel),roughnessMapUv:I&&x(b.roughnessMap.channel),anisotropyMapUv:ve&&x(b.anisotropyMap.channel),clearcoatMapUv:Ce&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(b.sheenRoughnessMap.channel),specularMapUv:rt&&x(b.specularMap.channel),specularColorMapUv:$e&&x(b.specularColorMap.channel),specularIntensityMapUv:vt&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:ye&&x(b.thicknessMap.channel),alphaMapUv:te&&x(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(oe||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(qe||te),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Re,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&je.getTransfer(b.map.colorSpace)===dt,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&je.getTransfer(b.emissiveMap.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ht,flipSided:b.side===Yt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ye&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&b.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){let M=g[b.type],P;if(M){let D=Zn[M];P=Qn.clone(D.uniforms)}else P=b.uniforms;return P}function S(b,M){let P;for(let D=0,F=h.length;D<F;D++){let B=h[D];if(B.cacheKey===M){P=B,++P.usedTimes;break}}return P===void 0&&(P=new ny(i,M,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:R}}function ry(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,u,d,g,x,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(f,u,d,g,x,m){let p=o(f,u,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,u){t.length>1&&t.sort(f||oy),n.length>1&&n.sort(u||Ed),s.length>1&&s.sort(u||Ed)}function h(){for(let f=e,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ay(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Td,i.set(n,[o])):s>=r.length?(o=new Td,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hy=0;function uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fy(i){let e=new cy,t=ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ge,o=new Ge;function a(l){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,S=0,E=0,A=0;l.sort(uy);for(let b=0,M=l.length;b<M;b++){let P=l[b],D=P.color,F=P.intensity,B=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*F,f+=D.g*F,u+=D.b*F;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],F);A++}else if(P.isDirectionalLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=k,d++}else if(P.isSpotLight){let k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(F),k.distance=B,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;let Q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Q.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[x]=Q.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=q,_++}x++}else if(P.isRectAreaLight){let k=e.get(P);k.color.copy(D).multiplyScalar(F),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){let k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){let Q=P.shadow,V=t.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){let k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(F),k.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==S||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=S,R.numLightProbes=A,n.version=hy++)}function c(l,h){let f=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Ad(i){let e=new fy(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ad(i),e.set(s,[a])):r>=o.length?(a=new Ad(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vh=class extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yh=class extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function gy(i,e,t){let n=new ho,s=new ee,r=new ee,o=new at,a=new vh({depthPacking:ag}),c=new yh,l={},h=t.maxTextureSize,f={[jn]:Yt,[Yt]:jn,[Ht]:Ht},u=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:py,fragmentShader:my}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let p=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Jn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=p!==gi&&this.type===gi,B=p===gi&&this.type!==gi;for(let q=0,k=E.length;q<k;q++){let Q=E[q],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();if(s.multiply(ne),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y)),V.map===null||F===!0||B===!0){let me=this.type!==gi?{minFilter:Kt,magFilter:Kt}:{};V.map!==null&&V.map.dispose(),V.map=new $t(s.x,s.y,me),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let ce=V.getViewportCount();for(let me=0;me<ce;me++){let ze=V.getViewport(me);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),D.viewport(o),V.updateMatrices(Q,me),n=V.getFrustum(),_(A,R,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===gi&&v(V,R),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,P)};function v(E,A){let R=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $t(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,u,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,d,x,null)}function y(E,A,R,b){let M=null,P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let D=M.uuid,F=A.uuid,B=l[D];B===void 0&&(B={},l[D]=B);let q=B[F];q===void 0&&(q=M.clone(),B[F]=q,A.addEventListener("dispose",S)),M=q}if(M.visible=A.visible,M.wireframe=A.wireframe,b===gi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:f[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=i.properties.get(M);D.light=R}return M}function _(E,A,R,b,M){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let F=e.update(E),B=E.material;if(Array.isArray(B)){let q=F.groups;for(let k=0,Q=q.length;k<Q;k++){let V=q[k],ne=B[V.materialIndex];if(ne&&ne.visible){let ce=y(E,ne,b,M);E.onBeforeShadow(i,E,A,R,F,ce,V),i.renderBufferDirect(R,null,F,ce,E,V),E.onAfterShadow(i,E,A,R,F,ce,V)}}}else if(B.visible){let q=y(E,B,b,M);E.onBeforeShadow(i,E,A,R,F,q,null),i.renderBufferDirect(R,null,F,q,E,null),E.onAfterShadow(i,E,A,R,F,q,null)}}let D=E.children;for(let F=0,B=D.length;F<B;F++)_(D[F],A,R,b,M)}function S(E){E.target.removeEventListener("dispose",S);for(let R in l){let b=l[R],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var xy={[Tl]:Al,[Rl]:Pl,[Cl]:Ll,[rr]:Il,[Al]:Tl,[Pl]:Rl,[Ll]:Cl,[Il]:rr};function _y(i,e){function t(){let U=!1,ye=new at,K=null,te=new at(0,0,0,0);return{setMask:function(we){K!==we&&!U&&(i.colorMask(we,we,we,we),K=we)},setLocked:function(we){U=we},setClear:function(we,Me,Ye,Lt,Qt){Qt===!0&&(we*=Lt,Me*=Lt,Ye*=Lt),ye.set(we,Me,Ye,Lt),te.equals(ye)===!1&&(i.clearColor(we,Me,Ye,Lt),te.copy(ye))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ye=!1,K=null,te=null,we=null;return{setReversed:function(Me){if(ye!==Me){let Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT);let Lt=we;we=null,this.setClear(Lt)}ye=Me},getReversed:function(){return ye},setTest:function(Me){Me?fe(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Me){K!==Me&&!U&&(i.depthMask(Me),K=Me)},setFunc:function(Me){if(ye&&(Me=xy[Me]),te!==Me){switch(Me){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Pl:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=Me}},setLocked:function(Me){U=Me},setClear:function(Me){we!==Me&&(ye&&(Me=1-Me),i.clearDepth(Me),we=Me)},reset:function(){U=!1,K=null,te=null,we=null,ye=!1}}}function s(){let U=!1,ye=null,K=null,te=null,we=null,Me=null,Ye=null,Lt=null,Qt=null;return{setTest:function(pt){U||(pt?fe(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(pt){ye!==pt&&!U&&(i.stencilMask(pt),ye=pt)},setFunc:function(pt,Bn,ci){(K!==pt||te!==Bn||we!==ci)&&(i.stencilFunc(pt,Bn,ci),K=pt,te=Bn,we=ci)},setOp:function(pt,Bn,ci){(Me!==pt||Ye!==Bn||Lt!==ci)&&(i.stencilOp(pt,Bn,ci),Me=pt,Ye=Bn,Lt=ci)},setLocked:function(pt){U=pt},setClear:function(pt){Qt!==pt&&(i.clearStencil(pt),Qt=pt)},reset:function(){U=!1,ye=null,K=null,te=null,we=null,Me=null,Ye=null,Lt=null,Qt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,E=null,A=new Te(0,0,0),R=0,b=!1,M=null,P=null,D=null,F=null,B=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Q=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Q>=2);let ne=null,ce={},me=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),et=new at().fromArray(me),Z=new at().fromArray(ze);function le(U,ye,K,te){let we=new Uint8Array(4),Me=i.createTexture();i.bindTexture(U,Me),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<K;Ye++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ye+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Me}let Ae={};Ae[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(rr),$(!1),oe(Cf),fe(i.CULL_FACE),C(Jn);function fe(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Re(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Oe(U,ye){return f[U]!==ye?(i.bindFramebuffer(U,ye),f[U]=ye,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Le(U,ye){let K=d,te=!1;if(U){K=u.get(ye),K===void 0&&(K=[],u.set(ye,K));let we=U.textures;if(K.length!==we.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ye=we.length;Me<Ye;Me++)K[Me]=i.COLOR_ATTACHMENT0+Me;K.length=we.length,te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,te=!0);te&&i.drawBuffers(K)}function qe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let j={[xs]:i.FUNC_ADD,[Bm]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};j[km]=i.MIN,j[Hm]=i.MAX;let X={[Vm]:i.ZERO,[Gm]:i.ONE,[Wm]:i.SRC_COLOR,[wl]:i.SRC_ALPHA,[$m]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[qm]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[El]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[Ym]:i.ONE_MINUS_DST_ALPHA,[Jm]:i.CONSTANT_COLOR,[jm]:i.ONE_MINUS_CONSTANT_COLOR,[Qm]:i.CONSTANT_ALPHA,[eg]:i.ONE_MINUS_CONSTANT_ALPHA};function C(U,ye,K,te,we,Me,Ye,Lt,Qt,pt){if(U===Jn){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(fe(i.BLEND),x=!0),U!==Om){if(U!==m||pt!==b){if((p!==xs||_!==xs)&&(i.blendEquation(i.FUNC_ADD),p=xs,_=xs),pt)switch(U){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.ONE,i.ONE);break;case If:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case If:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,S=null,E=null,A.set(0,0,0),R=0,m=U,b=pt}return}we=we||ye,Me=Me||K,Ye=Ye||te,(ye!==p||we!==_)&&(i.blendEquationSeparate(j[ye],j[we]),p=ye,_=we),(K!==v||te!==y||Me!==S||Ye!==E)&&(i.blendFuncSeparate(X[K],X[te],X[Me],X[Ye]),v=K,y=te,S=Me,E=Ye),(Lt.equals(A)===!1||Qt!==R)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Qt),A.copy(Lt),R=Qt),m=U,b=!1}function he(U,ye){U.side===Ht?Re(i.CULL_FACE):fe(i.CULL_FACE);let K=U.side===Yt;ye&&(K=!K),$(K),U.blending===tr&&U.transparent===!1?C(Jn):C(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ee(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function oe(U){U!==Nm?(fe(i.CULL_FACE),U!==P&&(U===Cf?i.cullFace(i.BACK):U===Fm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),P=U}function re(U){U!==D&&(k&&i.lineWidth(U),D=U)}function Ee(U,ye,K){U?(fe(i.POLYGON_OFFSET_FILL),(F!==ye||B!==K)&&(i.polygonOffset(ye,K),F=ye,B=K)):Re(i.POLYGON_OFFSET_FILL)}function pe(U){U?fe(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function I(U){U===void 0&&(U=i.TEXTURE0+q-1),ne!==U&&(i.activeTexture(U),ne=U)}function w(U,ye,K){K===void 0&&(ne===null?K=i.TEXTURE0+q-1:K=ne);let te=ce[K];te===void 0&&(te={type:void 0,texture:void 0},ce[K]=te),(te.type!==U||te.texture!==ye)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(U,ye||Ae[U]),te.type=U,te.texture=ye)}function z(){let U=ce[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Pe(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function rt(U,ye){let K=l.get(ye);K===void 0&&(K=new WeakMap,l.set(ye,K));let te=K.get(U);te===void 0&&(te=i.getUniformBlockIndex(ye,U.name),K.set(U,te))}function $e(U,ye){let te=l.get(ye).get(U);c.get(ye)!==te&&(i.uniformBlockBinding(ye,te,U.__bindingPointIndex),c.set(ye,te))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,ce={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,S=null,E=null,A=new Te(0,0,0),R=0,b=!1,M=null,P=null,D=null,F=null,B=null,et.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Re,bindFramebuffer:Oe,drawBuffers:Le,useProgram:qe,setBlending:C,setMaterial:he,setFlipSided:$,setCullFace:oe,setLineWidth:re,setPolygonOffset:Ee,setScissorTest:pe,activeTexture:I,bindTexture:w,unbindTexture:z,compressedTexImage2D:Y,compressedTexImage3D:se,texImage2D:Ie,texImage3D:Ve,updateUBOMapping:rt,uniformBlockBinding:$e,texStorage2D:it,texStorage3D:ue,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ce,scissor:We,viewport:Pe,reset:vt}}function Rd(i,e,t,n){let s=vy(n);switch(t){case sp:return i*e;case op:return i*e;case ap:return i*e*2;case nu:return i*e/s.components*s.byteLength;case iu:return i*e/s.components*s.byteLength;case cp:return i*e*2/s.components*s.byteLength;case su:return i*e*2/s.components*s.byteLength;case rp:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case ru:return i*e*4/s.components*s.byteLength;case va:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Nl:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case zl:case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sa:case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lp:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rh:case oh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vy(i){switch(i){case Cn:case tp:return{byteLength:1,components:1};case co:case np:case vn:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Ms:case Qh:case Wn:return{byteLength:4,components:1};case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ee,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function g(I,w){return d?new OffscreenCanvas(I,w):lo("canvas")}function x(I,w,z){let Y=1,se=pe(I);if((se.width>z||se.height>z)&&(Y=z/Math.max(se.width,se.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let J=Math.floor(Y*se.width),De=Math.floor(Y*se.height);f===void 0&&(f=g(J,De));let ve=w?g(J,De):f;return ve.width=J,ve.height=De,ve.getContext("2d").drawImage(I,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+J+"x"+De+")."),ve}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,w,z,Y,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let J=w;if(w===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),w===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),w===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),w===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),w===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),w===i.RGBA){let De=se?ic:je.getTransfer(Y);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=De===dt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(I,w){let z;return I?w===null||w===Ms||w===cr?z=i.DEPTH24_STENCIL8:w===Wn?z=i.DEPTH32F_STENCIL8:w===co&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ms||w===cr?z=i.DEPTH_COMPONENT24:w===Wn?z=i.DEPTH_COMPONENT32F:w===co&&(z=i.DEPTH_COMPONENT16),z}function S(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Kt&&I.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){let w=I.target;w.removeEventListener("dispose",E),R(w),w.isVideoTexture&&h.delete(w)}function A(I){let w=I.target;w.removeEventListener("dispose",A),M(w)}function R(I){let w=n.get(I);if(w.__webglInit===void 0)return;let z=I.source,Y=u.get(z);if(Y){let se=Y[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(I),Object.keys(Y).length===0&&u.delete(z)}n.remove(I)}function b(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let z=I.source,Y=u.get(z);delete Y[w.__cacheKey],o.memory.textures--}function M(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(w.__webglFramebuffer[Y]))for(let se=0;se<w.__webglFramebuffer[Y].length;se++)i.deleteFramebuffer(w.__webglFramebuffer[Y][se]);else i.deleteFramebuffer(w.__webglFramebuffer[Y]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Y])}else{if(Array.isArray(w.__webglFramebuffer))for(let Y=0;Y<w.__webglFramebuffer.length;Y++)i.deleteFramebuffer(w.__webglFramebuffer[Y]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Y=0;Y<w.__webglColorRenderbuffer.length;Y++)w.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Y]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=I.textures;for(let Y=0,se=z.length;Y<se;Y++){let J=n.get(z[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(I)}let P=0;function D(){P=0}function F(){let I=P;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function B(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function q(I,w){let z=n.get(I);if(I.isVideoTexture&&re(I),I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,I,w);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+w)}function k(I,w){let z=n.get(I);if(I.version>0&&z.__version!==I.version){Z(z,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+w)}function Q(I,w){let z=n.get(I);if(I.version>0&&z.__version!==I.version){Z(z,I,w);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+w)}function V(I,w){let z=n.get(I);if(I.version>0&&z.__version!==I.version){le(z,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+w)}let ne={[Mi]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},ce={[Kt]:i.NEAREST,[jh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},me={[lg]:i.NEVER,[mg]:i.ALWAYS,[hg]:i.LESS,[fp]:i.LEQUAL,[ug]:i.EQUAL,[pg]:i.GEQUAL,[fg]:i.GREATER,[dg]:i.NOTEQUAL};function ze(I,w){if(w.type===Wn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fn||w.magFilter===no||w.magFilter===js||w.magFilter===$n||w.minFilter===fn||w.minFilter===no||w.minFilter===js||w.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ne[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ne[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ne[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,me[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Kt||w.minFilter!==js&&w.minFilter!==$n||w.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function et(I,w){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));let Y=w.source,se=u.get(Y);se===void 0&&(se={},u.set(Y,se));let J=B(w);if(J!==I.__cacheKey){se[J]===void 0&&(se[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),se[J].usedTimes++;let De=se[I.__cacheKey];De!==void 0&&(se[I.__cacheKey].usedTimes--,De.usedTimes===0&&b(w)),I.__cacheKey=J,I.__webglTexture=se[J].texture}return z}function Z(I,w,z){let Y=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Y=i.TEXTURE_3D);let se=et(I,w),J=w.source;t.bindTexture(Y,I.__webglTexture,i.TEXTURE0+z);let De=n.get(J);if(J.version!==De.__version||se===!0){t.activeTexture(i.TEXTURE0+z);let ve=je.getPrimaries(je.workingColorSpace),Ce=w.colorSpace===zi?null:je.getPrimaries(w.colorSpace),it=w.colorSpace===zi||ve===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ue=x(w.image,!1,s.maxTextureSize);ue=Ee(w,ue);let Ie=r.convert(w.format,w.colorSpace),Ve=r.convert(w.type),We=y(w.internalFormat,Ie,Ve,w.colorSpace,w.isVideoTexture);ze(Y,w);let Pe,rt=w.mipmaps,$e=w.isVideoTexture!==!0,vt=De.__version===void 0||se===!0,U=J.dataReady,ye=S(w,ue);if(w.isDepthTexture)We=_(w.format===lr,w.type),vt&&($e?t.texStorage2D(i.TEXTURE_2D,1,We,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,We,ue.width,ue.height,0,Ie,Ve,null));else if(w.isDataTexture)if(rt.length>0){$e&&vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,rt[0].width,rt[0].height);for(let K=0,te=rt.length;K<te;K++)Pe=rt[K],$e?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ie,Ve,Pe.data):t.texImage2D(i.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Ie,Ve,Pe.data);w.generateMipmaps=!1}else $e?(vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,ue.width,ue.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue.width,ue.height,Ie,Ve,ue.data)):t.texImage2D(i.TEXTURE_2D,0,We,ue.width,ue.height,0,Ie,Ve,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,rt[0].width,rt[0].height,ue.depth);for(let K=0,te=rt.length;K<te;K++)if(Pe=rt[K],w.format!==Tn)if(Ie!==null)if($e){if(U)if(w.layerUpdates.size>0){let we=Rd(Pe.width,Pe.height,w.format,w.type);for(let Me of w.layerUpdates){let Ye=Pe.data.subarray(Me*we/Pe.data.BYTES_PER_ELEMENT,(Me+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Me,Pe.width,Pe.height,1,Ie,Ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,ue.depth,Ie,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,We,Pe.width,Pe.height,ue.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,ue.depth,Ie,Ve,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,We,Pe.width,Pe.height,ue.depth,0,Ie,Ve,Pe.data)}else{$e&&vt&&t.texStorage2D(i.TEXTURE_2D,ye,We,rt[0].width,rt[0].height);for(let K=0,te=rt.length;K<te;K++)Pe=rt[K],w.format!==Tn?Ie!==null?$e?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ie,Ve,Pe.data):t.texImage2D(i.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Ie,Ve,Pe.data)}else if(w.isDataArrayTexture)if($e){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,We,ue.width,ue.height,ue.depth),U)if(w.layerUpdates.size>0){let K=Rd(ue.width,ue.height,w.format,w.type);for(let te of w.layerUpdates){let we=ue.data.subarray(te*K/ue.data.BYTES_PER_ELEMENT,(te+1)*K/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,Ie,Ve,we)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Ie,Ve,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,ue.width,ue.height,ue.depth,0,Ie,Ve,ue.data);else if(w.isData3DTexture)$e?(vt&&t.texStorage3D(i.TEXTURE_3D,ye,We,ue.width,ue.height,ue.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Ie,Ve,ue.data)):t.texImage3D(i.TEXTURE_3D,0,We,ue.width,ue.height,ue.depth,0,Ie,Ve,ue.data);else if(w.isFramebufferTexture){if(vt)if($e)t.texStorage2D(i.TEXTURE_2D,ye,We,ue.width,ue.height);else{let K=ue.width,te=ue.height;for(let we=0;we<ye;we++)t.texImage2D(i.TEXTURE_2D,we,We,K,te,0,Ie,Ve,null),K>>=1,te>>=1}}else if(rt.length>0){if($e&&vt){let K=pe(rt[0]);t.texStorage2D(i.TEXTURE_2D,ye,We,K.width,K.height)}for(let K=0,te=rt.length;K<te;K++)Pe=rt[K],$e?U&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ie,Ve,Pe):t.texImage2D(i.TEXTURE_2D,K,We,Ie,Ve,Pe);w.generateMipmaps=!1}else if($e){if(vt){let K=pe(ue);t.texStorage2D(i.TEXTURE_2D,ye,We,K.width,K.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ve,ue)}else t.texImage2D(i.TEXTURE_2D,0,We,Ie,Ve,ue);m(w)&&p(Y),De.__version=J.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function le(I,w,z){if(w.image.length!==6)return;let Y=et(I,w),se=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);let J=n.get(se);if(se.version!==J.__version||Y===!0){t.activeTexture(i.TEXTURE0+z);let De=je.getPrimaries(je.workingColorSpace),ve=w.colorSpace===zi?null:je.getPrimaries(w.colorSpace),Ce=w.colorSpace===zi||De===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let it=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let te=0;te<6;te++)!it&&!ue?Ie[te]=x(w.image[te],!0,s.maxCubemapSize):Ie[te]=ue?w.image[te].image:w.image[te],Ie[te]=Ee(w,Ie[te]);let Ve=Ie[0],We=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),rt=y(w.internalFormat,We,Pe,w.colorSpace),$e=w.isVideoTexture!==!0,vt=J.__version===void 0||Y===!0,U=se.dataReady,ye=S(w,Ve);ze(i.TEXTURE_CUBE_MAP,w);let K;if(it){$e&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,rt,Ve.width,Ve.height);for(let te=0;te<6;te++){K=Ie[te].mipmaps;for(let we=0;we<K.length;we++){let Me=K[we];w.format!==Tn?We!==null?$e?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Me.width,Me.height,We,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,rt,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Me.width,Me.height,We,Pe,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,rt,Me.width,Me.height,0,We,Pe,Me.data)}}}else{if(K=w.mipmaps,$e&&vt){K.length>0&&ye++;let te=pe(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,rt,te.width,te.height)}for(let te=0;te<6;te++)if(ue){$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie[te].width,Ie[te].height,We,Pe,Ie[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,Ie[te].width,Ie[te].height,0,We,Pe,Ie[te].data);for(let we=0;we<K.length;we++){let Ye=K[we].image[te].image;$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ye.width,Ye.height,We,Pe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,rt,Ye.width,Ye.height,0,We,Pe,Ye.data)}}else{$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,We,Pe,Ie[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,rt,We,Pe,Ie[te]);for(let we=0;we<K.length;we++){let Me=K[we];$e?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,We,Pe,Me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,rt,We,Pe,Me.image[te])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),J.__version=se.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ae(I,w,z,Y,se,J){let De=r.convert(z.format,z.colorSpace),ve=r.convert(z.type),Ce=y(z.internalFormat,De,ve,z.colorSpace),it=n.get(w),ue=n.get(z);if(ue.__renderTarget=w,!it.__hasExternalTextures){let Ie=Math.max(1,w.width>>J),Ve=Math.max(1,w.height>>J);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,J,Ce,Ie,Ve,w.depth,0,De,ve,null):t.texImage2D(se,J,Ce,Ie,Ve,0,De,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,se,ue.__webglTexture,0,$(w)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,se,ue.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(I,w,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let Y=w.depthTexture,se=Y&&Y.isDepthTexture?Y.type:null,J=_(w.stencilBuffer,se),De=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=$(w);oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,J,w.width,w.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,I)}else{let Y=w.textures;for(let se=0;se<Y.length;se++){let J=Y[se],De=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),Ce=y(J.internalFormat,De,ve,J.colorSpace),it=$(w);z&&oe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ce,w.width,w.height):oe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Ce,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(w.depthTexture);Y.__renderTarget=w,(!Y.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);let se=Y.__webglTexture,J=$(w);if(w.depthTexture.format===nr)oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(w.depthTexture.format===lr)oe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Oe(I){let w=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Y){let se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Y.removeEventListener("dispose",se)};Y.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=Y}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Re(w.__webglFramebuffer,I)}else if(z){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]===void 0)w.__webglDepthbuffer[Y]=i.createRenderbuffer(),fe(w.__webglDepthbuffer[Y],I,!1);else{let se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,J)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),fe(w.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(I,w,z){let Y=n.get(I);w!==void 0&&Ae(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Oe(I)}function qe(I){let w=I.texture,z=n.get(I),Y=n.get(w);I.addEventListener("dispose",A);let se=I.textures,J=I.isWebGLCubeRenderTarget===!0,De=se.length>1;if(De||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=w.version,o.memory.textures++),J){z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[ve]=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)z.__webglFramebuffer[ve][Ce]=i.createFramebuffer()}else z.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)z.__webglFramebuffer[ve]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(De)for(let ve=0,Ce=se.length;ve<Ce;ve++){let it=n.get(se[ve]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&oe(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){let Ce=se[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);let it=r.convert(Ce.format,Ce.colorSpace),ue=r.convert(Ce.type),Ie=y(Ce.internalFormat,it,ue,Ce.colorSpace,I.isXRRenderTarget===!0),Ve=$(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ie,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),ze(i.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)Ae(z.__webglFramebuffer[ve][Ce],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce);else Ae(z.__webglFramebuffer[ve],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ve=0,Ce=se.length;ve<Ce;ve++){let it=se[ve],ue=n.get(it);t.bindTexture(i.TEXTURE_2D,ue.__webglTexture),ze(i.TEXTURE_2D,it),Ae(z.__webglFramebuffer,I,it,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),m(it)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,Y.__webglTexture),ze(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let Ce=0;Ce<w.mipmaps.length;Ce++)Ae(z.__webglFramebuffer[Ce],I,w,i.COLOR_ATTACHMENT0,ve,Ce);else Ae(z.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ve,0);m(w)&&p(ve),t.unbindTexture()}I.depthBuffer&&Oe(I)}function j(I){let w=I.textures;for(let z=0,Y=w.length;z<Y;z++){let se=w[z];if(m(se)){let J=v(I),De=n.get(se).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}let X=[],C=[];function he(I){if(I.samples>0){if(oe(I)===!1){let w=I.textures,z=I.width,Y=I.height,se=i.COLOR_BUFFER_BIT,J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(I),ve=w.length>1;if(ve)for(let Ce=0;Ce<w.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ce=0;Ce<w.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);let it=n.get(w[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,se,i.NEAREST),c===!0&&(X.length=0,C.length=0,X.push(i.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.resolveDepthBuffer===!1&&(X.push(J),C.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<w.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ce]);let it=n.get(w[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function $(I){return Math.min(s.maxSamples,I.samples)}function oe(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function re(I){let w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Ee(I,w){let z=I.colorSpace,Y=I.format,se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Zt&&z!==zi&&(je.getTransfer(z)===dt?(Y!==Tn||se!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function pe(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=oe}function My(i,e){function t(n,s=zi){let r,o=je.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===eu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ip)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tp)return i.BYTE;if(n===np)return i.SHORT;if(n===co)return i.UNSIGNED_SHORT;if(n===Qh)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===sp)return i.ALPHA;if(n===rp)return i.RGB;if(n===Tn)return i.RGBA;if(n===op)return i.LUMINANCE;if(n===ap)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===iu)return i.RED_INTEGER;if(n===cp)return i.RG;if(n===su)return i.RG_INTEGER;if(n===ru)return i.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===ba)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Fl||n===Ol||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===kl||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===kl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===nh||n===ih)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lp||n===sh||n===rh||n===oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Mh=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(by)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Vt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:Sy,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ge(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null,x=new bh,m=t.getContextAttributes(),p=null,v=null,y=[],_=[],S=new ee,E=null,A=new kt;A.viewport=new at;let R=new kt;R.viewport=new at;let b=[A,R],M=new Mh,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=y[Z];return le===void 0&&(le=new ro,y[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=y[Z];return le===void 0&&(le=new ro,y[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=y[Z];return le===void 0&&(le=new ro,y[Z]=le),le.getHandSpace()};function F(Z){let le=_.indexOf(Z.inputSource);if(le===-1)return;let Ae=y[le];Ae!==void 0&&(Ae.update(Z.inputSource,Z.frame,l||o),Ae.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let Z=0;Z<y.length;Z++){let le=_[Z];le!==null&&(_[Z]=null,y[Z].disconnect(le))}P=null,D=null,x.reset(),e.setRenderTarget(p),d=null,u=null,f=null,s=null,v=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $t(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,Ae=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?lr:nr,Ae=m.stencil?cr:Ms);let Re={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(Re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new $t(u.textureWidth,u.textureHeight,{format:Tn,type:Cn,depthTexture:new La(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(Z){for(let le=0;le<Z.removed.length;le++){let Ae=Z.removed[le],fe=_.indexOf(Ae);fe>=0&&(_[fe]=null,y[fe].disconnect(Ae))}for(let le=0;le<Z.added.length;le++){let Ae=Z.added[le],fe=_.indexOf(Ae);if(fe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=_.length){_.push(Ae),fe=Oe;break}else if(_[Oe]===null){_[Oe]=Ae,fe=Oe;break}if(fe===-1)break}let Re=y[fe];Re&&Re.connect(Ae)}}let k=new L,Q=new L;function V(Z,le,Ae){k.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(Ae.matrixWorld);let fe=k.distanceTo(Q),Re=le.projectionMatrix.elements,Oe=Ae.projectionMatrix.elements,Le=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),j=(Re[9]+1)/Re[5],X=(Re[9]-1)/Re[5],C=(Re[8]-1)/Re[0],he=(Oe[8]+1)/Oe[0],$=Le*C,oe=Le*he,re=fe/(-C+he),Ee=re*-C;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ee),Z.translateZ(re),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let pe=Le+re,I=qe+re,w=$-Ee,z=oe+(fe-Ee),Y=j*qe/I*pe,se=X*qe/I*pe;Z.projectionMatrix.makePerspective(w,z,Y,se,pe,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ne(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let le=Z.near,Ae=Z.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),M.near=R.near=A.near=le,M.far=R.far=A.far=Ae,(P!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,D=M.far),A.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=A.layers.mask|R.layers.mask;let fe=Z.parent,Re=M.cameras;ne(M,fe);for(let Oe=0;Oe<Re.length;Oe++)ne(Re[Oe],fe);Re.length===2?V(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),ce(Z,M,fe)};function ce(Z,le,Ae){Ae===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Ae.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=fr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let me=null;function ze(Z,le){if(h=le.getViewerPose(l||o),g=le,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let fe=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Oe=0;Oe<Ae.length;Oe++){let Le=Ae[Oe],qe=null;if(d!==null)qe=d.getViewport(Le);else{let X=f.getViewSubImage(u,Le);qe=X.viewport,Oe===0&&(e.setRenderTargetTextures(v,X.colorTexture,u.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(v))}let j=b[Oe];j===void 0&&(j=new kt,j.layers.enable(Oe),j.viewport=new at,b[Oe]=j),j.matrix.fromArray(Le.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Le.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(qe.x,qe.y,qe.width,qe.height),Oe===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(j)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let Oe=f.getDepthInformation(Ae[0]);Oe&&Oe.isValid&&Oe.texture&&x.init(e,Oe,s.renderState)}}for(let Ae=0;Ae<y.length;Ae++){let fe=_[Ae],Re=y[Ae];fe!==null&&Re!==void 0&&Re.update(fe,le,l||o)}me&&me(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let et=new gp;et.setAnimationLoop(ze),this.setAnimationLoop=function(Z){me=Z},this.dispose=function(){}}},ms=new sn,Ey=new Ge;function Ty(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(ms)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ay(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(v,S);let E=e.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let y=f();v.__bindingPointIndex=y;let _=i.createBuffer(),S=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=s[v.id],_=v.uniforms,S=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,A=_.length;E<A;E++){let R=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=R.length;b<M;b++){let P=R[b];if(d(P,E,b,S)===!0){let D=P.__offset,F=Array.isArray(P.value)?P.value:[P.value],B=0;for(let q=0;q<F.length;q++){let k=F[q],Q=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,D+B,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,S){let E=v.value,A=y+"_"+_;if(S[A]===void 0)return typeof E=="number"||typeof E=="boolean"?S[A]=E:S[A]=E.clone(),!0;{let R=S[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return S[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(v){let y=v.uniforms,_=0,S=16;for(let A=0,R=y.length;A<R;A++){let b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,P=b.length;M<P;M++){let D=b[M],F=Array.isArray(D.value)?D.value:[D.value];for(let B=0,q=F.length;B<q;B++){let k=F[B],Q=x(k),V=_%S,ne=V%Q.boundary,ce=V+ne;_+=ne,ce!==0&&S-ce<Q.storage&&(_+=S-ce),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=Q.storage}}}let E=_%S;return E>0&&(_+=S-E),v.__size=_,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Da=class{constructor(e={}){let{canvas:t=Lg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this.toneMapping=Hi,this.toneMappingExposure=1;let _=this,S=!1,E=0,A=0,R=null,b=-1,M=null,P=new at,D=new at,F=null,B=new Te(0),q=0,k=t.width,Q=t.height,V=1,ne=null,ce=null,me=new at(0,0,k,Q),ze=new at(0,0,k,Q),et=!1,Z=new ho,le=!1,Ae=!1,fe=new Ge,Re=new Ge,Oe=new L,Le=new at,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function X(){return R===null?V:1}let C=n;function he(T,N){return t.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qh}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Me,!1),C===null){let N="webgl2";if(C=he(N,T),C===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,oe,re,Ee,pe,I,w,z,Y,se,J,De,ve,Ce,it,ue,Ie,Ve,We,Pe,rt,$e,vt,U;function ye(){$=new G_(C),$.init(),$e=new My(C,$),oe=new O_(C,$,e,$e),re=new _y(C,$),oe.reverseDepthBuffer&&u&&re.buffers.depth.setReversed(!0),Ee=new q_(C),pe=new ry,I=new yy(C,$,re,pe,oe,$e,Ee),w=new z_(_),z=new V_(_),Y=new Qg(C),vt=new N_(C,Y),se=new W_(C,Y,Ee,vt),J=new K_(C,se,Y,Ee),We=new Y_(C,oe,I),ue=new B_(pe),De=new sy(_,w,z,$,oe,vt,ue),ve=new Ty(_,pe),Ce=new ay,it=new dy($),Ve=new U_(_,w,z,re,J,d,c),Ie=new gy(_,J,oe),U=new Ay(C,Ee,oe,re),Pe=new F_(C,$,Ee),rt=new X_(C,$,Ee),Ee.programs=De.programs,_.capabilities=oe,_.extensions=$,_.properties=pe,_.renderLists=Ce,_.shadowMap=Ie,_.state=re,_.info=Ee}ye();let K=new Sh(_,C);this.xr=K,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(k,Q,!1))},this.getSize=function(T){return T.set(k,Q)},this.setSize=function(T,N,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,Q=N,t.width=Math.floor(T*V),t.height=Math.floor(N*V),G===!0&&(t.style.width=T+"px",t.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(k*V,Q*V).floor()},this.setDrawingBufferSize=function(T,N,G){k=T,Q=N,V=G,t.width=Math.floor(T*G),t.height=Math.floor(N*G),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,N,G,W){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,N,G,W),re.viewport(P.copy(me).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ze)},this.setScissor=function(T,N,G,W){T.isVector4?ze.set(T.x,T.y,T.z,T.w):ze.set(T,N,G,W),re.scissor(D.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){re.setScissorTest(et=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,N=!0,G=!0){let W=0;if(T){let O=!1;if(R!==null){let de=R.texture.format;O=de===ru||de===su||de===iu}if(O){let de=R.texture.type,be=de===Cn||de===Ms||de===co||de===cr||de===eu||de===tu,Ue=Ve.getClearColor(),Ne=Ve.getClearAlpha(),Xe=Ue.r,Ke=Ue.g,Fe=Ue.b;be?(g[0]=Xe,g[1]=Ke,g[2]=Fe,g[3]=Ne,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Xe,x[1]=Ke,x[2]=Fe,x[3]=Ne,C.clearBufferiv(C.COLOR,0,x))}else W|=C.COLOR_BUFFER_BIT}N&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ce.dispose(),it.dispose(),pe.dispose(),w.dispose(),z.dispose(),J.dispose(),vt.dispose(),U.dispose(),De.dispose(),K.dispose(),K.removeEventListener("sessionstart",Mf),K.removeEventListener("sessionend",bf),ls.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let T=Ee.autoReset,N=Ie.enabled,G=Ie.autoUpdate,W=Ie.needsUpdate,O=Ie.type;ye(),Ee.autoReset=T,Ie.enabled=N,Ie.autoUpdate=G,Ie.needsUpdate=W,Ie.type=O}function Me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){let N=T.target;N.removeEventListener("dispose",Ye),Lt(N)}function Lt(T){Qt(T),pe.remove(T)}function Qt(T){let N=pe.get(T).programs;N!==void 0&&(N.forEach(function(G){De.releaseProgram(G)}),T.isShaderMaterial&&De.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,G,W,O,de){N===null&&(N=qe);let be=O.isMesh&&O.matrixWorld.determinant()<0,Ue=Lm(T,N,G,W,O);re.setMaterial(W,be);let Ne=G.index,Xe=1;if(W.wireframe===!0){if(Ne=se.getWireframeAttribute(G),Ne===void 0)return;Xe=2}let Ke=G.drawRange,Fe=G.attributes.position,lt=Ke.start*Xe,yt=(Ke.start+Ke.count)*Xe;de!==null&&(lt=Math.max(lt,de.start*Xe),yt=Math.min(yt,(de.start+de.count)*Xe)),Ne!==null?(lt=Math.max(lt,0),yt=Math.min(yt,Ne.count)):Fe!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,Fe.count));let wt=yt-lt;if(wt<0||wt===1/0)return;vt.setup(O,W,Ue,G,Ne);let un,ut=Pe;if(Ne!==null&&(un=Y.get(Ne),ut=rt,ut.setIndex(un)),O.isMesh)W.wireframe===!0?(re.setLineWidth(W.wireframeLinewidth*X()),ut.setMode(C.LINES)):ut.setMode(C.TRIANGLES);else if(O.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),re.setLineWidth(Be*X()),O.isLineSegments?ut.setMode(C.LINES):O.isLineLoop?ut.setMode(C.LINE_LOOP):ut.setMode(C.LINE_STRIP)}else O.isPoints?ut.setMode(C.POINTS):O.isSprite&&ut.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Be=O._multiDrawStarts,li=O._multiDrawCounts,ft=O._multiDrawCount,zn=Ne?Y.get(Ne).bytesPerElement:1,Fs=pe.get(W).currentProgram.getUniforms();for(let dn=0;dn<ft;dn++)Fs.setValue(C,"_gl_DrawID",dn),ut.render(Be[dn]/zn,li[dn])}else if(O.isInstancedMesh)ut.renderInstances(lt,wt,O.count);else if(G.isInstancedBufferGeometry){let Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,li=Math.min(G.instanceCount,Be);ut.renderInstances(lt,wt,li)}else ut.render(lt,wt)};function pt(T,N,G){T.transparent===!0&&T.side===Ht&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,Vo(T,N,G),T.side=jn,T.needsUpdate=!0,Vo(T,N,G),T.side=Ht):Vo(T,N,G)}this.compile=function(T,N,G=null){G===null&&(G=T),p=it.get(G),p.init(N),y.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let de=O.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){let Ue=de[be];pt(Ue,G,O),W.add(Ue)}else pt(de,G,O),W.add(de)}),y.pop(),p=null,W},this.compileAsync=function(T,N,G=null){let W=this.compile(T,N,G);return new Promise(O=>{function de(){if(W.forEach(function(be){pe.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){O(T);return}setTimeout(de,10)}$.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Bn=null;function ci(T){Bn&&Bn(T)}function Mf(){ls.stop()}function bf(){ls.start()}let ls=new gp;ls.setAnimationLoop(ci),typeof self!="undefined"&&ls.setContext(self),this.setAnimationLoop=function(T){Bn=T,K.setAnimationLoop(T),T===null?ls.stop():ls.start()},K.addEventListener("sessionstart",Mf),K.addEventListener("sessionend",bf),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(N),N=K.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,N,R),p=it.get(T,y.length),p.init(N),y.push(p),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Re),Ae=this.localClippingEnabled,le=ue.init(this.clippingPlanes,Ae),m=Ce.get(T,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){let de=_.xr.getDepthSensingMesh();de!==null&&Vc(de,N,-1/0,_.sortObjects)}Vc(T,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,ce),j=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,j&&Ve.addToRenderList(m,T),this.info.render.frame++,le===!0&&ue.beginShadows();let G=p.state.shadowsArray;Ie.render(G,T,N),le===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(p.setupLights(),N.isArrayCamera){let de=N.cameras;if(O.length>0)for(let be=0,Ue=de.length;be<Ue;be++){let Ne=de[be];wf(W,O,T,Ne)}j&&Ve.render(T);for(let be=0,Ue=de.length;be<Ue;be++){let Ne=de[be];Sf(m,T,Ne,Ne.viewport)}}else O.length>0&&wf(W,O,T,N),j&&Ve.render(T),Sf(m,T,N);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,N),vt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],le===!0&&ue.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Vc(T,N,G,W){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){W&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Re);let be=J.update(T),Ue=T.material;Ue.visible&&m.push(T,be,Ue,G,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){let be=J.update(T),Ue=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Le.copy(be.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(Re)),Array.isArray(Ue)){let Ne=be.groups;for(let Xe=0,Ke=Ne.length;Xe<Ke;Xe++){let Fe=Ne[Xe],lt=Ue[Fe.materialIndex];lt&&lt.visible&&m.push(T,be,lt,G,Le.z,Fe)}}else Ue.visible&&m.push(T,be,Ue,G,Le.z,null)}}let de=T.children;for(let be=0,Ue=de.length;be<Ue;be++)Vc(de[be],N,G,W)}function Sf(T,N,G,W){let O=T.opaque,de=T.transmissive,be=T.transparent;p.setupLightsView(G),le===!0&&ue.setGlobalState(_.clippingPlanes,G),W&&re.viewport(P.copy(W)),O.length>0&&Ho(O,N,G),de.length>0&&Ho(de,N,G),be.length>0&&Ho(be,N,G),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function wf(T,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new $t(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?vn:Cn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let de=p.state.transmissionRenderTarget[W.id],be=W.viewport||P;de.setSize(be.z,be.w);let Ue=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(B),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),j&&Ve.render(G);let Ne=_.toneMapping;_.toneMapping=Hi;let Xe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),le===!0&&ue.setGlobalState(_.clippingPlanes,W),Ho(T,G,W),I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Fe=0,lt=N.length;Fe<lt;Fe++){let yt=N[Fe],wt=yt.object,un=yt.geometry,ut=yt.material,Be=yt.group;if(ut.side===Ht&&wt.layers.test(W.layers)){let li=ut.side;ut.side=Yt,ut.needsUpdate=!0,Ef(wt,G,W,un,ut,Be),ut.side=li,ut.needsUpdate=!0,Ke=!0}}Ke===!0&&(I.updateMultisampleRenderTarget(de),I.updateRenderTargetMipmap(de))}_.setRenderTarget(Ue),_.setClearColor(B,q),Xe!==void 0&&(W.viewport=Xe),_.toneMapping=Ne}function Ho(T,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,de=T.length;O<de;O++){let be=T[O],Ue=be.object,Ne=be.geometry,Xe=W===null?be.material:W,Ke=be.group;Ue.layers.test(G.layers)&&Ef(Ue,N,G,Ne,Xe,Ke)}}function Ef(T,N,G,W,O,de){T.onBeforeRender(_,N,G,W,O,de),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(_,N,G,W,T,de),O.transparent===!0&&O.side===Ht&&O.forceSinglePass===!1?(O.side=Yt,O.needsUpdate=!0,_.renderBufferDirect(G,N,W,O,T,de),O.side=jn,O.needsUpdate=!0,_.renderBufferDirect(G,N,W,O,T,de),O.side=Ht):_.renderBufferDirect(G,N,W,O,T,de),T.onAfterRender(_,N,G,W,O,de)}function Vo(T,N,G){N.isScene!==!0&&(N=qe);let W=pe.get(T),O=p.state.lights,de=p.state.shadowsArray,be=O.state.version,Ue=De.getParameters(T,O.state,de,N,G),Ne=De.getProgramCacheKey(Ue),Xe=W.programs;W.environment=T.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(T.isMeshStandardMaterial?z:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Ye),Xe=new Map,W.programs=Xe);let Ke=Xe.get(Ne);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===be)return Af(T,Ue),Ke}else Ue.uniforms=De.getUniforms(T),T.onBeforeCompile(Ue,_),Ke=De.acquireProgram(Ue,Ne),Xe.set(Ne,Ke),W.uniforms=Ue.uniforms;let Fe=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=ue.uniform),Af(T,Ue),W.needsLights=Um(T),W.lightsStateVersion=be,W.needsLights&&(Fe.ambientLightColor.value=O.state.ambient,Fe.lightProbe.value=O.state.probe,Fe.directionalLights.value=O.state.directional,Fe.directionalLightShadows.value=O.state.directionalShadow,Fe.spotLights.value=O.state.spot,Fe.spotLightShadows.value=O.state.spotShadow,Fe.rectAreaLights.value=O.state.rectArea,Fe.ltc_1.value=O.state.rectAreaLTC1,Fe.ltc_2.value=O.state.rectAreaLTC2,Fe.pointLights.value=O.state.point,Fe.pointLightShadows.value=O.state.pointShadow,Fe.hemisphereLights.value=O.state.hemi,Fe.directionalShadowMap.value=O.state.directionalShadowMap,Fe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Fe.spotShadowMap.value=O.state.spotShadowMap,Fe.spotLightMatrix.value=O.state.spotLightMatrix,Fe.spotLightMap.value=O.state.spotLightMap,Fe.pointShadowMap.value=O.state.pointShadowMap,Fe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function Tf(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=sr.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Af(T,N){let G=pe.get(T);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Lm(T,N,G,W,O){N.isScene!==!0&&(N=qe),I.resetTextureUnits();let de=N.fog,be=W.isMeshStandardMaterial?N.environment:null,Ue=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zt,Ne=(W.isMeshStandardMaterial?z:w).get(W.envMap||be),Xe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ke=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!G.morphAttributes.position,lt=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color,wt=Hi;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=_.toneMapping);let un=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=un!==void 0?un.length:0,Be=pe.get(W),li=p.state.lights;if(le===!0&&(Ae===!0||T!==M)){let wn=T===M&&W.id===b;ue.setState(W,T,wn)}let ft=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==li.state.version||Be.outputColorSpace!==Ue||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==Ne||W.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ue.numPlanes||Be.numIntersection!==ue.numIntersection)||Be.vertexAlphas!==Xe||Be.vertexTangents!==Ke||Be.morphTargets!==Fe||Be.morphNormals!==lt||Be.morphColors!==yt||Be.toneMapping!==wt||Be.morphTargetsCount!==ut)&&(ft=!0):(ft=!0,Be.__version=W.version);let zn=Be.currentProgram;ft===!0&&(zn=Vo(W,N,O));let Fs=!1,dn=!1,Wr=!1,Et=zn.getUniforms(),Kn=Be.uniforms;if(re.useProgram(zn.program)&&(Fs=!0,dn=!0,Wr=!0),W.id!==b&&(b=W.id,dn=!0),Fs||M!==T){re.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),Ug(fe),Ng(fe),Et.setValue(C,"projectionMatrix",fe)):Et.setValue(C,"projectionMatrix",T.projectionMatrix),Et.setValue(C,"viewMatrix",T.matrixWorldInverse);let Pi=Et.map.cameraPosition;Pi!==void 0&&Pi.setValue(C,Oe.setFromMatrixPosition(T.matrixWorld)),oe.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,dn=!0,Wr=!0)}if(O.isSkinnedMesh){Et.setOptional(C,O,"bindMatrix"),Et.setOptional(C,O,"bindMatrixInverse");let wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Et.setValue(C,"boneTexture",wn.boneTexture,I))}O.isBatchedMesh&&(Et.setOptional(C,O,"batchingTexture"),Et.setValue(C,"batchingTexture",O._matricesTexture,I),Et.setOptional(C,O,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",O._indirectTexture,I),Et.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",O._colorsTexture,I));let Xr=G.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&We.update(O,G,zn),(dn||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,Et.setValue(C,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Kn.envMap.value=Ne,Kn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Kn.envMapIntensity.value=N.environmentIntensity),dn&&(Et.setValue(C,"toneMappingExposure",_.toneMappingExposure),Be.needsLights&&Dm(Kn,Wr),de&&W.fog===!0&&ve.refreshFogUniforms(Kn,de),ve.refreshMaterialUniforms(Kn,W,V,Q,p.state.transmissionRenderTarget[T.id]),sr.upload(C,Tf(Be),Kn,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sr.upload(C,Tf(Be),Kn,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(C,"center",O.center),Et.setValue(C,"modelViewMatrix",O.modelViewMatrix),Et.setValue(C,"normalMatrix",O.normalMatrix),Et.setValue(C,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let wn=W.uniformsGroups;for(let Pi=0,Li=wn.length;Pi<Li;Pi++){let Rf=wn[Pi];U.update(Rf,zn),U.bind(Rf,zn)}}return zn}function Dm(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Um(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,N,G){pe.get(T.texture).__webglTexture=N,pe.get(T.depthTexture).__webglTexture=G;let W=pe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,N){let G=pe.get(T);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,G=0){R=T,E=N,A=G;let W=!0,O=null,de=!1,be=!1;if(T){let Ne=pe.get(T);if(Ne.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ne.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(Ne.__hasExternalTextures)I.rebindTextures(T,pe.get(T.texture).__webglTexture,pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Fe=T.depthTexture;if(Ne.__boundDepthTexture!==Fe){if(Fe!==null&&pe.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}let Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(be=!0);let Ke=pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[N])?O=Ke[N][G]:O=Ke[N],de=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?O=pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?O=Ke[G]:O=Ke,P.copy(T.viewport),D.copy(T.scissor),F=T.scissorTest}else P.copy(me).multiplyScalar(V).floor(),D.copy(ze).multiplyScalar(V).floor(),F=et;if(re.bindFramebuffer(C.FRAMEBUFFER,O)&&W&&re.drawBuffers(T,O),re.viewport(P),re.scissor(D),re.setScissorTest(F),de){let Ne=pe.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,G)}else if(be){let Ne=pe.get(T.texture),Xe=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,Xe)}b=-1},this.readRenderTargetPixels=function(T,N,G,W,O,de,be){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){re.bindFramebuffer(C.FRAMEBUFFER,Ue);try{let Ne=T.texture,Xe=Ne.format,Ke=Ne.type;if(!oe.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-W&&G>=0&&G<=T.height-O&&C.readPixels(N,G,W,O,$e.convert(Xe),$e.convert(Ke),de)}finally{let Ne=R!==null?pe.get(R).__webglFramebuffer:null;re.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,N,G,W,O,de,be){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){let Ne=T.texture,Xe=Ne.format,Ke=Ne.type;if(!oe.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=T.width-W&&G>=0&&G<=T.height-O){re.bindFramebuffer(C.FRAMEBUFFER,Ue);let Fe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.bufferData(C.PIXEL_PACK_BUFFER,de.byteLength,C.STREAM_READ),C.readPixels(N,G,W,O,$e.convert(Xe),$e.convert(Ke),0);let lt=R!==null?pe.get(R).__webglFramebuffer:null;re.bindFramebuffer(C.FRAMEBUFFER,lt);let yt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Dg(C,yt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Fe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,de),C.deleteBuffer(Fe),C.deleteSync(yt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,N=null,G=0){T.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,T=arguments[1]);let W=Math.pow(2,-G),O=Math.floor(T.image.width*W),de=Math.floor(T.image.height*W),be=N!==null?N.x:0,Ue=N!==null?N.y:0;I.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,be,Ue,O,de),re.unbindTexture()},this.copyTextureToTexture=function(T,N,G=null,W=null,O=0){T.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let de,be,Ue,Ne,Xe,Ke,Fe,lt,yt,wt=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(de=G.max.x-G.min.x,be=G.max.y-G.min.y,Ue=G.isBox3?G.max.z-G.min.z:1,Ne=G.min.x,Xe=G.min.y,Ke=G.isBox3?G.min.z:0):(de=wt.width,be=wt.height,Ue=wt.depth||1,Ne=0,Xe=0,Ke=0),W!==null?(Fe=W.x,lt=W.y,yt=W.z):(Fe=0,lt=0,yt=0);let un=$e.convert(N.format),ut=$e.convert(N.type),Be;N.isData3DTexture?(I.setTexture3D(N,0),Be=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),Be=C.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),Be=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let li=C.getParameter(C.UNPACK_ROW_LENGTH),ft=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zn=C.getParameter(C.UNPACK_SKIP_PIXELS),Fs=C.getParameter(C.UNPACK_SKIP_ROWS),dn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,wt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ne),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ke);let Wr=T.isDataArrayTexture||T.isData3DTexture,Et=N.isDataArrayTexture||N.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Kn=pe.get(T),Xr=pe.get(N),wn=pe.get(Kn.__renderTarget),Pi=pe.get(Xr.__renderTarget);re.bindFramebuffer(C.READ_FRAMEBUFFER,wn.__webglFramebuffer),re.bindFramebuffer(C.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Li=0;Li<Ue;Li++)Wr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,pe.get(T).__webglTexture,O,Ke+Li),T.isDepthTexture?(Et&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,pe.get(N).__webglTexture,O,yt+Li),C.blitFramebuffer(Ne,Xe,de,be,Fe,lt,de,be,C.DEPTH_BUFFER_BIT,C.NEAREST)):Et?C.copyTexSubImage3D(Be,O,Fe,lt,yt+Li,Ne,Xe,de,be):C.copyTexSubImage2D(Be,O,Fe,lt,yt+Li,Ne,Xe,de,be);re.bindFramebuffer(C.READ_FRAMEBUFFER,null),re.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Et?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Be,O,Fe,lt,yt,de,be,Ue,un,ut,wt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Be,O,Fe,lt,yt,de,be,Ue,un,wt.data):C.texSubImage3D(Be,O,Fe,lt,yt,de,be,Ue,un,ut,wt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Fe,lt,de,be,un,ut,wt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Fe,lt,wt.width,wt.height,un,wt.data):C.texSubImage2D(C.TEXTURE_2D,O,Fe,lt,de,be,un,ut,wt);C.pixelStorei(C.UNPACK_ROW_LENGTH,li),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ft),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dn),O===0&&N.generateMipmaps&&C.generateMipmap(Be),re.unbindTexture()},this.copyTextureToTexture3D=function(T,N,G=null,W=null,O=0){return T.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,T=arguments[2],N=arguments[3],O=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,N,G,W,O)},this.initRenderTarget=function(T){pe.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),re.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,re.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Ua=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new L,Xi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new He(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Cd=new L,Id=new at,Pd=new at,Ry=new L,Ld=new Ge,la=new L,gl=new gn,Dd=new Ge,xl=new dr,Na=class extends ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lf,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingBox.expandByPoint(la)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,la),this.boundingSphere.expandByPoint(la)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gl.copy(this.boundingSphere),gl.applyMatrix4(s),e.ray.intersectsSphere(gl)!==!1&&(Dd.copy(s).invert(),xl.copy(e.ray).applyMatrix4(Dd),!(this.boundingBox!==null&&xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Id.fromBufferAttribute(s.attributes.skinIndex,e),Pd.fromBufferAttribute(s.attributes.skinWeight,e),Cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Pd.getComponent(r);if(o!==0){let a=Id.getComponent(r);Ld.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ry.copy(Cd).applyMatrix4(Ld),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fa=class extends Vt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Kt,h=Kt,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ud=new Ge,Cy=new Ge,Oa=class i{constructor(e=[],t=[]){this.uuid=An(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Cy;Ud.multiplyMatrices(a,t[r]),Ud.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fa(t,e,e,Tn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new uo),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ss=class extends He{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new Ge,Nd=new Ge,ha=[],Fd=new nn,Iy=new Ge,$r=new ge,Jr=new gn,Pt=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Iy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Fd.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(Fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Jr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Nd.multiplyMatrices(n,Js),$r.matrixWorld=Nd,$r.raycast(e,ha);for(let o=0,a=ha.length;o<a;o++){let c=ha[o];c.instanceId=r,c.object=this,t.push(c)}ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fa(new Float32Array(s*this.count),s,this.count,nu,Wn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ws=class extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ba=new L,za=new L,Od=new Ge,jr=new dr,ua=new gn,_l=new L,Bd=new L,xr=class extends Tt{constructor(e=new Qe,t=new ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ba.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ba.distanceTo(za);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,e.ray.intersectsSphere(ua)===!1)return;Od.copy(s).invert(),jr.copy(e.ray).applyMatrix4(Od);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=h.getX(x),v=h.getX(x+1),y=fa(this,e,jr,c,p,v);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=fa(this,e,jr,c,x,m);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let p=fa(this,e,jr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=fa(this,e,jr,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Ba.fromBufferAttribute(o,s),za.fromBufferAttribute(o,r),t.distanceSqToSegment(Ba,za,_l,Bd)>n)return;_l.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_l);if(!(c<e.near||c>e.far))return{distance:c,point:Bd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var zd=new L,kd=new L,_r=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)zd.fromBufferAttribute(t,s),kd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zd.distanceTo(kd);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ka=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fo=class extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hd=new Ge,wh=new dr,da=new gn,pa=new L,vr=class extends Tt{constructor(e=new Qe,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,e.ray.intersectsSphere(da)===!1)return;Hd.copy(s).invert(),wh.copy(e.ray).applyMatrix4(Hd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,x=d;g<x;g++){let m=l.getX(g);pa.fromBufferAttribute(f,m),Vd(pa,m,c,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,x=d;g<x;g++)pa.fromBufferAttribute(f,g),Vd(pa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vd(i,e,t,n,s,r,o){let a=wh.distanceSqToPoint(i);if(a<t){let c=new L;wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends Vt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Kt,this.minFilter=Kt,this.generateMipmaps=!1,this.needsUpdate=!0}};var qi=class extends Vt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ee:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,c=new Ge;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(qt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mo=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ee){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eh=class extends mo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ma=new L,vl=new cu,yl=new cu,Ml=new cu,Th=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),l=ma);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),vl.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,x,m),yl.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,x,m),Ml.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),yl.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Ml.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(vl.calc(c),yl.calc(c),Ml.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gd(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Py(i,e){let t=1-i;return t*t*e}function Ly(i,e){return 2*(1-i)*i*e}function Dy(i,e){return i*i*e}function oo(i,e,t,n){return Py(i,e)+Ly(i,t)+Dy(i,n)}function Uy(i,e){let t=1-i;return t*t*t*e}function Ny(i,e){let t=1-i;return 3*t*t*i*e}function Fy(i,e){return 3*(1-i)*i*i*e}function Oy(i,e){return i*i*i*e}function ao(i,e,t,n,s){return Uy(i,e)+Ny(i,t)+Fy(i,n)+Oy(i,s)}var Ha=class extends Pn{constructor(e=new ee,t=new ee,n=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ah=class extends Pn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ao(e,s.x,r.x,o.x,a.x),ao(e,s.y,r.y,o.y,a.y),ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Pn{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rh=class extends Pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Pn{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ch=class extends Pn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(oo(e,s.x,r.x,o.x),oo(e,s.y,r.y,o.y),oo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Gd(a,c.x,l.x,h.x,f.x),Gd(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ee().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:Eh,CatmullRomCurve3:Th,CubicBezierCurve:Ha,CubicBezierCurve3:Ah,EllipseCurve:mo,LineCurve:Va,LineCurve3:Rh,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:Ch,SplineCurve:Wa}),Ph=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ih[s.type]().fromJSON(s))}return this}},Xa=class extends Ph{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ga(this.currentPoint.clone(),new ee(e,t),new ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Ha(this.currentPoint.clone(),new ee(e,t),new ee(n,s),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new mo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Es=class i extends Qe{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class i extends Qe{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function v(){let _=new L,S=new L,E=0,A=(t-e)/n;for(let R=0;R<=r;R++){let b=[],M=R/r,P=M*(t-e)+e;for(let D=0;D<=s;D++){let F=D/s,B=F*c+a,q=Math.sin(B),k=Math.cos(B);S.x=P*q,S.y=-M*n+m,S.z=P*k,f.push(S.x,S.y,S.z),_.set(q,A,k).normalize(),u.push(_.x,_.y,_.z),d.push(F,1-M),b.push(g++)}x.push(b)}for(let R=0;R<s;R++)for(let b=0;b<r;b++){let M=x[b][R],P=x[b+1][R],D=x[b+1][R+1],F=x[b][R+1];(e>0||b!==0)&&(h.push(M,P,F),E+=3),(t>0||b!==r-1)&&(h.push(P,D,F),E+=3)}l.addGroup(p,E,0),p+=E}function y(_){let S=g,E=new ee,A=new L,R=0,b=_===!0?e:t,M=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*M,0),u.push(0,M,0),d.push(.5,.5),g++;let P=g;for(let D=0;D<=s;D++){let B=D/s*c+a,q=Math.cos(B),k=Math.sin(B);A.x=b*k,A.y=m*M,A.z=b*q,f.push(A.x,A.y,A.z),u.push(0,M,0),E.x=q*.5+.5,E.y=k*.5*M+.5,d.push(E.x,E.y),g++}for(let D=0;D<s;D++){let F=S+D,B=P+D;_===!0?h.push(B,B+1,F):h.push(B+1,B,F),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yr=class i extends ln{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lh=class i extends Qe{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new L,_=new L,S=new L;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],S),c(y,_,S,v)}function c(v,y,_,S){let E=S+1,A=[];for(let R=0;R<=E;R++){A[R]=[];let b=v.clone().lerp(_,R/E),M=y.clone().lerp(_,R/E),P=E-R;for(let D=0;D<=P;D++)D===0&&R===E?A[R][D]=b:A[R][D]=b.clone().lerp(M,D/P)}for(let R=0;R<E;R++)for(let b=0;b<2*(E-R)-1;b++){let M=Math.floor(b/2);b%2===0?(u(A[R][M+1]),u(A[R+1][M]),u(A[R][M])):(u(A[R][M+1]),u(A[R+1][M+1]),u(A[R+1][M]))}}function l(v){let y=new L;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let v=new L;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let _=m(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(_,1-S)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let y=o[v+0],_=o[v+2],S=o[v+4],E=Math.max(y,_,S),A=Math.min(y,_,S);E>.9&&A<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,y){let _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let v=new L,y=new L,_=new L,S=new L,E=new ee,A=new ee,R=new ee;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),S.copy(v).add(y).add(_).divideScalar(3);let P=m(S);x(E,M+0,v,P),x(A,M+2,y,P),x(R,M+4,_,P)}}function x(v,y,_,S){S<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=S/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},qa=class i extends Lh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var bi=class extends Xa{constructor(e){super(e),this.uuid=An(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xa().fromJSON(s))}return this}},By={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Mp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,u,d;if(n&&(r=Gy(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)f=i[g],u=i[g+1],f<a&&(a=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return go(r,o,t,a,c,d,0),o}};function Mp(i,e,t,n,s){let r,o;if(s===eM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Wd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wd(r,i[r],i[r+1],o);return o&&rc(o,o.next)&&(_o(o),o=o.next),o}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(rc(t,t.next)||Ct(t.prev,t,t.next)===0)){if(_o(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ky(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ky(i,n,s,r):zy(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),_o(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Hy(Ts(i),e,t),go(i,e,t,n,s,r,2)):o===2&&Vy(i,e,t,n,s,r):go(Ts(i),e,t,n,s,r,1);break}}}function zy(i){let e=i.prev,t=i,n=i.next;if(Ct(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,u=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&er(s,a,r,c,o,l,g.x,g.y)&&Ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ky(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ct(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,x=a>c?a>l?a:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,p=Dh(d,g,e,t,n),v=Dh(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&er(a,h,c,f,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&er(a,h,c,f,l,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&er(a,h,c,f,l,u,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&er(a,h,c,f,l,u,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Hy(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!rc(s,r)&&bp(s,n,n.next,r)&&xo(s,r)&&xo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_o(n),_o(n.next),n=i=r),n=n.next}while(n!==i);return Ts(n)}function Vy(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Jy(o,a)){let c=Sp(o,a);o=Ts(o,o.next),c=Ts(c,c.next),go(o,e,t,n,s,r,0),go(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gy(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Mp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push($y(l));for(s.sort(Wy),r=0;r<s.length;r++)t=Xy(s[r],t);return t}function Wy(i,e){return i.x-e.x}function Xy(i,e){let t=qy(i,e);if(!t)return e;let n=Sp(t,i);return Ts(n,n.next),Ts(t,t.next)}function qy(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&er(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),xo(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&Yy(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function Yy(i,e){return Ct(i.prev,i,e.prev)<0&&Ct(e.next,i,i.next)<0}function Ky(i,e,t,n){let s=i;do s.z===0&&(s.z=Dh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zy(s)}function Zy(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Dh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $y(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function er(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Jy(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jy(i,e)&&(xo(i,e)&&xo(e,i)&&Qy(i,e)&&(Ct(i.prev,i,e.prev)||Ct(i,e.prev,e))||rc(i,e)&&Ct(i.prev,i,i.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function rc(i,e){return i.x===e.x&&i.y===e.y}function bp(i,e,t,n){let s=xa(Ct(i,e,t)),r=xa(Ct(i,e,n)),o=xa(Ct(t,n,i)),a=xa(Ct(t,n,e));return!!(s!==r&&o!==a||s===0&&ga(i,t,e)||r===0&&ga(i,n,e)||o===0&&ga(t,i,n)||a===0&&ga(t,e,n))}function ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xa(i){return i>0?1:i<0?-1:0}function jy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return Ct(i.prev,i,i.next)<0?Ct(i,e,i.next)>=0&&Ct(i,i.prev,e)>=0:Ct(i,e,i.prev)<0||Ct(i,i.next,e)<0}function Qy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sp(i,e){let t=new Uh(i.i,i.x,i.y),n=new Uh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wd(i,e,t,n){let s=new Uh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _o(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Xd(e),qd(n,e);let o=e.length;t.forEach(Xd);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,qd(n,t[c]);let a=By.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Mr=class i extends Qe{constructor(e=new bi([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:tM,y,_=!1,S,E,A,R;p&&(y=p.getSpacedPoints(h),_=!0,u=!1,S=p.computeFrenetFrames(h,!1),E=new L,A=new L,R=new L),u||(m=0,d=0,g=0,x=0);let b=a.extractPoints(l),M=b.shape,P=b.holes;if(!Vi.isClockWise(M)){M=M.reverse();for(let j=0,X=P.length;j<X;j++){let C=P[j];Vi.isClockWise(C)&&(P[j]=C.reverse())}}let F=Vi.triangulateShape(M,P),B=M;for(let j=0,X=P.length;j<X;j++){let C=P[j];M=M.concat(C)}function q(j,X,C){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(X,C)}let k=M.length,Q=F.length;function V(j,X,C){let he,$,oe,re=j.x-X.x,Ee=j.y-X.y,pe=C.x-j.x,I=C.y-j.y,w=re*re+Ee*Ee,z=re*I-Ee*pe;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(w),se=Math.sqrt(pe*pe+I*I),J=X.x-Ee/Y,De=X.y+re/Y,ve=C.x-I/se,Ce=C.y+pe/se,it=((ve-J)*I-(Ce-De)*pe)/(re*I-Ee*pe);he=J+re*it-j.x,$=De+Ee*it-j.y;let ue=he*he+$*$;if(ue<=2)return new ee(he,$);oe=Math.sqrt(ue/2)}else{let Y=!1;re>Number.EPSILON?pe>Number.EPSILON&&(Y=!0):re<-Number.EPSILON?pe<-Number.EPSILON&&(Y=!0):Math.sign(Ee)===Math.sign(I)&&(Y=!0),Y?(he=-Ee,$=re,oe=Math.sqrt(w)):(he=re,$=Ee,oe=Math.sqrt(w/2))}return new ee(he/oe,$/oe)}let ne=[];for(let j=0,X=B.length,C=X-1,he=j+1;j<X;j++,C++,he++)C===X&&(C=0),he===X&&(he=0),ne[j]=V(B[j],B[C],B[he]);let ce=[],me,ze=ne.concat();for(let j=0,X=P.length;j<X;j++){let C=P[j];me=[];for(let he=0,$=C.length,oe=$-1,re=he+1;he<$;he++,oe++,re++)oe===$&&(oe=0),re===$&&(re=0),me[he]=V(C[he],C[oe],C[re]);ce.push(me),ze=ze.concat(me)}for(let j=0;j<m;j++){let X=j/m,C=d*Math.cos(X*Math.PI/2),he=g*Math.sin(X*Math.PI/2)+x;for(let $=0,oe=B.length;$<oe;$++){let re=q(B[$],ne[$],he);fe(re.x,re.y,-C)}for(let $=0,oe=P.length;$<oe;$++){let re=P[$];me=ce[$];for(let Ee=0,pe=re.length;Ee<pe;Ee++){let I=q(re[Ee],me[Ee],he);fe(I.x,I.y,-C)}}}let et=g+x;for(let j=0;j<k;j++){let X=u?q(M[j],ze[j],et):M[j];_?(A.copy(S.normals[0]).multiplyScalar(X.x),E.copy(S.binormals[0]).multiplyScalar(X.y),R.copy(y[0]).add(A).add(E),fe(R.x,R.y,R.z)):fe(X.x,X.y,0)}for(let j=1;j<=h;j++)for(let X=0;X<k;X++){let C=u?q(M[X],ze[X],et):M[X];_?(A.copy(S.normals[j]).multiplyScalar(C.x),E.copy(S.binormals[j]).multiplyScalar(C.y),R.copy(y[j]).add(A).add(E),fe(R.x,R.y,R.z)):fe(C.x,C.y,f/h*j)}for(let j=m-1;j>=0;j--){let X=j/m,C=d*Math.cos(X*Math.PI/2),he=g*Math.sin(X*Math.PI/2)+x;for(let $=0,oe=B.length;$<oe;$++){let re=q(B[$],ne[$],he);fe(re.x,re.y,f+C)}for(let $=0,oe=P.length;$<oe;$++){let re=P[$];me=ce[$];for(let Ee=0,pe=re.length;Ee<pe;Ee++){let I=q(re[Ee],me[Ee],he);_?fe(I.x,I.y+y[h-1].y,y[h-1].x+C):fe(I.x,I.y,f+C)}}}Z(),le();function Z(){let j=s.length/3;if(u){let X=0,C=k*X;for(let he=0;he<Q;he++){let $=F[he];Re($[2]+C,$[1]+C,$[0]+C)}X=h+m*2,C=k*X;for(let he=0;he<Q;he++){let $=F[he];Re($[0]+C,$[1]+C,$[2]+C)}}else{for(let X=0;X<Q;X++){let C=F[X];Re(C[2],C[1],C[0])}for(let X=0;X<Q;X++){let C=F[X];Re(C[0]+k*h,C[1]+k*h,C[2]+k*h)}}n.addGroup(j,s.length/3-j,0)}function le(){let j=s.length/3,X=0;Ae(B,X),X+=B.length;for(let C=0,he=P.length;C<he;C++){let $=P[C];Ae($,X),X+=$.length}n.addGroup(j,s.length/3-j,1)}function Ae(j,X){let C=j.length;for(;--C>=0;){let he=C,$=C-1;$<0&&($=j.length-1);for(let oe=0,re=h+m*2;oe<re;oe++){let Ee=k*oe,pe=k*(oe+1),I=X+he+Ee,w=X+$+Ee,z=X+$+pe,Y=X+he+pe;Oe(I,w,z,Y)}}}function fe(j,X,C){c.push(j),c.push(X),c.push(C)}function Re(j,X,C){Le(j),Le(X),Le(C);let he=s.length/3,$=v.generateTopUV(n,s,he-3,he-2,he-1);qe($[0]),qe($[1]),qe($[2])}function Oe(j,X,C,he){Le(j),Le(X),Le(he),Le(X),Le(C),Le(he);let $=s.length/3,oe=v.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);qe(oe[0]),qe(oe[1]),qe(oe[3]),qe(oe[1]),qe(oe[2]),qe(oe[3])}function Le(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function qe(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ih[s.type]().fromJSON(s)),new i(n,e.options)}},tM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ee(r,o),new ee(a,c),new ee(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ee(o,1-c),new ee(l,1-f),new ee(u,1-g),new ee(x,1-p)]:[new ee(a,1-c),new ee(h,1-f),new ee(d,1-g),new ee(m,1-p)]}};function nM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ya=class i extends Qe{constructor(e=new bi([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(o,2));function l(h){let f=s.length/3,u=h.extractPoints(t),d=u.shape,g=u.holes;Vi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];Vi.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=Vi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){let v=x[m],y=v[0]+f,_=v[1]+f,S=v[2]+f;n.push(y,_,S),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return iM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function iM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Si=class i extends Qe{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new L,u=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let E=S/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(E+_,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let y=h[p][v+1],_=h[p][v],S=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&d.push(y,_,E),(p!==n-1||c<Math.PI)&&d.push(_,S,E)}this.setIndex(d),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yi=class i extends Qe{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,f=new L,u=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ki=class extends At{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Bt=class extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends Bt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function _a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function wp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Df,endingEnd:Df}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uf:r=e,a=2*t-n;break;case Nf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uf:o=e,c=2*n-t;break;case Nf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+v*o[l+S]+y*o[c+S]+_*o[f+S];return r}},Fh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Oh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case hr:t=this.InterpolantFactoryMethodDiscrete;break;case ur:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return hr;case this.InterpolantFactoryMethodLinear:return ur;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&sM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=ur;var $i=class extends Ln{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=hr;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Ln{};Ka.prototype.ValueTypeName="color";var wi=class extends Ln{};wi.prototype.ValueTypeName="number";var Bh=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ei=class extends Ln{InterpolantFactoryMethodLinear(e){return new Bh(this.times,this.values,this.getValueSize(),e)}};Ei.prototype.ValueTypeName="quaternion";Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ji=class extends Ln{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=hr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Ln{};Ti.prototype.ValueTypeName="vector";var Za=class{constructor(e="",t=-1,n=[],s=rg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(aM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=rM(c);c=Yd(c,1,h),l=Yd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new wi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let f=h[1],u=s[f];u||(s[f]=u=[]),u.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,u,d,g,x){if(d.length!==0){let m=[],p=[];wp(d,m,p,g),m.length!==0&&x.push(new f(u,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let f=0;f<l.length;f++){let u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let d={},g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)d[u[g].morphTargets[x]]=-1;for(let x in d){let m=[],p=[];for(let v=0;v!==u[g].morphTargets.length;++v){let y=u[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new wi(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{let d=".bones["+t[f].name+"]";n(Ti,d+".position",u,"pos",s),n(Ei,d+".quaternion",u,"rot",s),n(Ti,d+".scale",u,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function oM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return Ka;case"quaternion":return Ei;case"bool":case"boolean":return $i;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function aM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=oM(i.type);if(i.times===void 0){let t=[],n=[];wp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},cM=new zh,Xn=class{constructor(e){this.manager=e!==void 0?e:cM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},kh=class extends Error{constructor(e,t){super(e),this.response=t}},ji=class extends Xn{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=mi[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0,x=0,m=new ReadableStream({start(p){v();function v(){f.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let E=0,A=h.length;E<A;E++){let R=h[E];R.onProgress&&R.onProgress(S)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new kh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ki.add(e,l);let h=mi[e];delete mi[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=mi[e];if(h===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hh=class extends Xn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=lo("img");function c(){h(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var br=class extends Xn{constructor(e){super(e)}load(e,t,n,s){let r=new Vt,o=new Hh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Sr=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$a=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},bl=new Ge,Kd=new L,Zd=new L,vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zd),t.updateMatrixWorld(),bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vh=class extends vo{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wr=class extends Sr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$d=new Ge,Qr=new L,Sl=new L,Gh=class extends vo{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qr),Sl.copy(n.position),Sl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Sl),n.updateMatrixWorld(),s.makeTranslation(-Qr.x,-Qr.y,-Qr.z),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}},Ja=class extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wh=class extends vo{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Wh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ja=class extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ki.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,c),r.manager.itemStart(e)}};var Tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Jd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Jd(){return performance.now()}var lu="\\[\\]\\.:\\/",lM=new RegExp("["+lu+"]","g"),hu="[^"+lu+"]",hM="[^"+lu.replace("\\.","")+"]",uM=/((?:WC+[\/:])*)/.source.replace("WC",hu),fM=/(WCOD+)?/.source.replace("WCOD",hM),dM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),pM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),mM=new RegExp("^"+uM+fM+dM+pM+"$"),gM=["material","materials","bones","map"],Xh=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lM,"")}static parseTrackName(e){let t=mM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Xh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var jd=new ee,Qa=class{constructor(e=new ee(1/0,1/0),t=new ee(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=jd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);function uu(i,e){if(e===hp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===bo||e===nc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===bo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var oc=class extends Xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _u(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Qi.extractUrlBase(e);o=Qi.resolveURL(l,this.path)}else o=Qi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ji(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Cp){try{o[nt.KHR_BINARY_GLTF]=new Du(e)}catch(f){s&&s(f);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ku(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case nt.KHR_MATERIALS_UNLIT:o[f]=new gu;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[f]=new Uu(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[f]=new Nu;break;case nt.KHR_MESH_QUANTIZATION:o[f]=new Fu;break;default:u.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function xM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mu=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Zt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Er(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ja(h),l.distance=f;break;case"spot":l=new wr(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ai(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},gu=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let s=[];e.color=new Te(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,bt))}return Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},_u=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ee(a,a)}return Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,bt)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ru=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Cu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Iu=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Pu=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}},Lu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Dn.TRIANGLES&&l.mode!==Dn.TRIANGLE_STRIP&&l.mode!==Dn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(let g of f){let x=new Ge,m=new L,p=new Jt,v=new L(1,1,1),y=new Pt(g.geometry,g.material,u);for(let _=0;_<u;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(let _ in c)if(_==="_COLOR_0"){let S=c[_];y.instanceColor=new Ss(S.array,S.itemSize,S.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Tt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Cp="glTF",wo=12,Ep={JSON:1313821514,BIN:5130562},Du=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-wo,r=new DataView(e,wo),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Ep.JSON){let l=new Uint8Array(e,wo+o,a);this.content=n.decode(l)}else if(c===Ep.BIN){let l=wo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let f=Bu[h]||h.toLowerCase();a[f]=o[h]}for(let h in e.attributes){let f=Bu[h]||h.toLowerCase();if(o[h]!==void 0){let u=n.accessors[e.attributes[h]],d=Rr[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(let g in d.attributes){let x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}f(d)},a,l,Zt,u)})})}},Nu=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Fu=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},ac=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,f=(n-t)/h,u=f*f,d=u*f,g=e*l,x=g-l,m=-2*d+3*u,p=d-u,v=1-m,y=p-u+f;for(let _=0;_!==a;_++){let S=o[x+_+a],E=o[x+_+c]*h,A=o[g+_+a],R=o[g+_]*h;r[_]=v*S+y*E+m*A+p*R}return r}},_M=new Jt,Ou=class extends ac{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return _M.fromArray(r).normalize().toArray(r),r}},Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tp={9728:Kt,9729:fn,9984:jh,9985:no,9986:js,9987:$n},Ap={33071:_i,33648:ys,10497:Mi},fu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vM={CUBICSPLINE:void 0,LINEAR:ur,STEP:hr},du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Rs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ai(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function MM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let f=e[l];if(n){let u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(u)}if(s){let u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(u)}if(r){let u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function bM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function SM(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pu(t.attributes):e=i.indices+":"+pu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+pu(i.targets[n]);return e}function pu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var EM=new Ge,ku=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new br(this.options.manager):this.textureLoader=new ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ji(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Rs(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Qi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=fu[s.type],a=Rr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new He(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=fu[s.type],l=Rr[s.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(d&&d!==f){let p=Math.floor(u/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(v);y||(x=new l(a,p*d,s.count*d/h),y=new bs(x,d/h),t.cache.add(v,y)),m=new Xi(y,c,u%d/h,g)}else a===null?x=new l(s.count*c):x=new l(a,u,s.count*c),m=new He(x,c,g);if(s.sparse!==void 0){let p=fu.SCALAR,v=Rr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,S=new v(o[1],y,s.sparse.count*p),E=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new He(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,R=S.length;A<R;A++){let b=S[A];if(m.setX(b,E[A*c]),c>=2&&m.setY(b,E[A*c+1]),c>=3&&m.setZ(b,E[A*c+2]),c>=4&&m.setW(b,E[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let u=(r.samplers||{})[o.sampler]||{};return h.magFilter=Tp[u.magFilter]||fn,h.minFilter=Tp[u.minFilter]||$n,h.wrapS=Ap[u.wrapS]||Mi,h.wrapT=Ap[u.wrapT]||Mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Kt&&h.minFilter!==fn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let u=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(u),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Vt(x);m.needsUpdate=!0,u(m)}),t.load(Qi.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),Ai(f,o),f.userData.mimeType=o.mimeType||wM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new fo,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ws,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let f=s[nt.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Zt),a.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,bt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ht);let h=r.alphaMode||du.OPAQUE;if(h===du.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===du.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==It&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==It){let f=r.emissiveFactor;a.emissive=new Te().setRGB(f[0],f[1],f[2],Zt)}return r.emissiveTexture!==void 0&&o!==It&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,bt)),Promise.all(l).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Ai(f,r),t.associations.set(f,{materials:e}),r.extensions&&Rs(s,f,r),f})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Rp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=SM(l),f=s[h];if(f)o.push(f.promise);else{let u;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Rp(new Qe,l,t),s[h]={primitive:l,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?yM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,g=h.length;d<g;d++){let x=h[d],m=o[d],p,v=l[d];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Na(x,v):new ge(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?p.geometry=uu(p.geometry,nc):m.mode===Dn.TRIANGLE_FAN&&(p.geometry=uu(p.geometry,bo));else if(m.mode===Dn.LINES)p=new _r(x,v);else if(m.mode===Dn.LINE_STRIP)p=new xr(x,v);else if(m.mode===Dn.LINE_LOOP)p=new ka(x,v);else if(m.mode===Dn.POINTS)p=new vr(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&bM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ai(p,r),m.extensions&&Rs(s,p,m),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Rs(s,f[0],r),f[0];let u=new ht;r.extensions&&Rs(s,u,r),t.associations.set(u,{meshes:e});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(So.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ai(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let f=o[l];if(f){a.push(f);let u=new Ge;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Oa(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){let d=s.channels[f],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let u=f[0],d=f[1],g=f[2],x=f[3],m=f[4],p=[];for(let v=0,y=u.length;v<y;v++){let _=u[v],S=d[v],E=g[v],A=x[v],R=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let b=n._createAnimationTracks(_,S,E,A,R);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new Za(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,EM)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new uo:l.length>1?h=new ht:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){let f=new Ge;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ht;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&Rs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,f=c.length;h<f;h++)r.add(c[h]);let l=h=>{let f=new Map;for(let[u,d]of s.associations)(u instanceof xn||u instanceof Vt)&&f.set(u,d);return h.traverse(u=>{let d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];es[r.path]===es.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(a);let l;switch(es[r.path]){case es.weights:l=wi;break;case es.rotation:l=Ei;break;case es.position:case es.scale:l=Ti;break;default:switch(n.itemSize){case 1:l=wi;break;case 2:case 3:default:l=Ti;break}break}let h=s.interpolation!==void 0?vM[s.interpolation]:ur,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){let g=new l(c[u]+"."+es[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=zu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ei?Ou:ac;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function TM(i,e,t){let n=e.attributes,s=new nn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let h=zu(Rr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let f=r[l];if(f.POSITION!==void 0){let u=t.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){let x=zu(Rr[u.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Rp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Bu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Ai(i,e),TM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?MM(i,e.targets,t):i})}var Hu=new WeakMap,cc=class extends Xn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new ji(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,bt,n).catch(n)}decodeDracoFile(e,t,n,s,r=Zt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Hu.has(e)){let c=Hu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),Hu.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Qe;e.index&&t.setIndex(new He(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new He(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==bt)return;let n=new Te;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),je.toWorkingColorSpace(n,bt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ji(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=AM.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function AM(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(f){h({draco:f})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let f=h.draco,u=new f.Decoder;try{let d=t(f,u,new Int8Array(c),l),g=d.attributes.map(x=>x.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{f.destroy(u)}});break}};function t(o,a,c,l){let h=l.attributeIDs,f=l.attributeTypes,u,d,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)u=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,u);else if(g===o.POINT_CLOUD)u=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());let x={index:null,attributes:[]};for(let m in h){let p=self[f[m]],v,y;if(l.useUniqueIDs)y=h[m],v=a.GetAttributeByUniqueId(u,y);else{if(y=a.GetAttributeId(u,o[h[m]]),y===-1)continue;v=a.GetAttribute(u,y)}let _=s(o,a,u,m,p,v);m==="color"&&(_.vertexColorSpace=l.vertexColorSpace),x.attributes.push(_)}return g===o.TRIANGULAR_MESH&&(x.index=n(o,a,u)),o.destroy(u),x}function n(o,a,c){let h=c.num_faces()*3,f=h*4,u=o._malloc(f);a.GetTrianglesUInt32Array(c,f,u);let d=new Uint32Array(o.HEAPF32.buffer,u,h).slice();return o._free(u),{array:d,itemSize:1}}function s(o,a,c,l,h,f){let u=f.num_components(),g=c.num_points()*u,x=g*h.BYTES_PER_ELEMENT,m=r(o,h),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(c,f,m,x,p);let v=new h(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:l,array:v,itemSize:u}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var zt=[{id:"ferrari458",name:"Ferrari 458",w:2.26,len:4.53,maxKmh:300,accel:13,handling:10},{id:"aventador",name:"Lamborghini Aventador",w:2.27,len:4.78,maxKmh:320,accel:14,handling:9.5},{id:"valhalla",name:"Aston Martin Valhalla",w:2.2,len:4.7,maxKmh:330,accel:15,handling:10.5},{id:"porsche911",name:"Porsche 911 Turbo",w:2.14,len:4.29,maxKmh:250,accel:11,handling:10},{id:"tesla3",name:"Tesla Model 3",w:2.18,len:4.69,maxKmh:240,accel:12,handling:9},{id:"urus",name:"Lamborghini Urus",w:2.26,len:5.11,maxKmh:280,accel:11,handling:8.5},{id:"peugeot3008",name:"Peugeot 3008",w:2.1,len:4.45,maxKmh:190,accel:8,handling:8}],Ip=new cc;Ip.setDecoderPath("draco/");var Pp=new oc;Pp.setDRACOLoader(Ip);var qn={},Cr={};function RM(i,e){let t=i.scene,n=[],s=[];return t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!1;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o){if(!a)continue;a.transparent&&a.opacity<.99&&(a.depthWrite=!1);let c=(a.name||"").toLowerCase();/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop/.test(c)&&!/front/.test(c)?s.push(a):(/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector/.test(c)||/^light/.test(c))&&n.push(a),a.envMapIntensity===void 0&&(a.envMapIntensity=1)}}),{scene:t,headMats:n,tailMats:s}}function Eo(i,e,t){let n=i+(e?"_lo":"");return qn[n]?Promise.resolve(qn[n]):(Cr[n]||(Cr[n]=new Promise((s,r)=>{Pp.load(`models/${n}.glb`,o=>{qn[n]=RM(o,!e),delete Cr[n],s(qn[n])},t,o=>{delete Cr[n],r(o)})})),Cr[n])}var To=(i,e)=>!!qn[i+(e?"_lo":"")],lc=null;function CM(){if(lc)return lc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.3)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),lc=new qi(i),lc}function hc(i,e,t){let n=qn[i+(e?"_lo":"")]||qn[i+"_lo"],s=zt.find(f=>f.id===i),r=n.scene.clone(!0),o=new Map;r.traverse(f=>{if(!f.isMesh)return;let u=d=>{if(d&&/^BODY_PAINT/.test(d.name)){if(!o.has(d)){let g=d.clone();g.color.setHex(t),g.metalness=Math.max(g.metalness,.5),g.roughness=Math.min(g.roughness,.35),g.envMapIntensity=1.2,o.set(d,g)}return o.get(d)}return d};f.material=Array.isArray(f.material)?f.material.map(u):u(f.material)});let a=[],c=[];r.traverse(f=>{/^wheel_(FL|FR|RL|RR)$/.test(f.name)&&c.push(f)});for(let f of c){let u=new ht;u.position.copy(f.position),f.position.set(0,0,0),r.add(u),u.add(f);let d=new nn().setFromObject(f);u.userData.spin=f,u.userData.front=/F/.test(f.name),u.userData.radius=Math.max(.25,(d.max.y-d.min.y)/2),a.push(u)}let l=new ge(new In(s.w+.9,s.len+.9),new It({map:CM(),transparent:!0,depthWrite:!1,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.y=.06,l.renderOrder=1,l.userData.own=!0,r.add(l);let h=new ge(new Si(.3,10,8),new It({color:5609983,transparent:!0,opacity:0,depthWrite:!1,blending:Rn}));return h.position.set(0,.38,s.len/2+.35),h.scale.set(1.6,.45,2.2),h.userData.own=!0,r.add(h),r.userData={spec:s,wheels:a,glow:h,paint:[...o.values()],proto:n},r}function Lp(i){for(let e in qn){let t=qn[e];for(let n of t.headMats)n.emissive=n.emissive||new Te,n.emissive.setHex(16773840),n.emissiveIntensity=i?4:0;for(let n of t.tailMats)n.emissive=n.emissive||new Te,n.emissive.setHex(16722458),n.emissiveIntensity=i?2.5:0}}function Dp(i){for(let e in qn)qn[e].scene.traverse(t=>{if(t.isMesh){let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.envMapIntensity=i)}})}function uc(i){if(i){for(let e of i.userData.paint||[])e.dispose();i.traverse(e=>{e.isMesh&&e.userData.own&&(e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose())})}}var Ao=class i extends ge{constructor(){let e=i.SkyShader,t=new At({name:e.name,uniforms:Qn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Yt,depthWrite:!1});super(new ct(1,1,1),t),this.isSky=!0}};Ao.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};var Vu=i=>i[Math.floor(Math.random()*i.length)],Bp="kidcars-progress-v1",ke={stars:0,missions:0,deliveries:0,km:0,bestKmh:0,boosts:0,horns:0,worlds:{},cars:{},nightKm:0,photos:0,stickers:{}};try{Object.assign(ke,JSON.parse(localStorage.getItem(Bp)||"{}"))}catch(i){}function Is(){try{localStorage.setItem(Bp,JSON.stringify(ke))}catch(i){}}var dc=[{id:"star1",e:"\u2B50",n:"First Star",ok:()=>ke.stars>=1},{id:"star50",e:"\u{1F31F}",n:"Star Collector",ok:()=>ke.stars>=50},{id:"star200",e:"\u2728",n:"Star Hunter",ok:()=>ke.stars>=200},{id:"star500",e:"\u{1F4AB}",n:"Star Master",ok:()=>ke.stars>=500},{id:"star1000",e:"\u{1F320}",n:"Star Legend",ok:()=>ke.stars>=1e3},{id:"m1",e:"\u{1F3AF}",n:"First Mission",ok:()=>ke.missions>=1},{id:"m5",e:"\u{1F3C5}",n:"Five Missions",ok:()=>ke.missions>=5},{id:"m20",e:"\u{1F3C6}",n:"Mission Champ",ok:()=>ke.missions>=20},{id:"km5",e:"\u{1F6E3}\uFE0F",n:"5 km Driven",ok:()=>ke.km>=5},{id:"km25",e:"\u{1F5FA}\uFE0F",n:"25 km Driven",ok:()=>ke.km>=25},{id:"km100",e:"\u{1F30D}",n:"100 km Driven",ok:()=>ke.km>=100},{id:"sp100",e:"\u{1F4A8}",n:"100 km/h",ok:()=>ke.bestKmh>=100},{id:"sp200",e:"\u{1F680}",n:"200 km/h",ok:()=>ke.bestKmh>=200},{id:"sp300",e:"\u26A1",n:"300 km/h",ok:()=>ke.bestKmh>=300},{id:"wc",e:"\u{1F333}",n:"Country Driver",ok:()=>(ke.worlds.country||0)>=1},{id:"wd",e:"\u{1F335}",n:"Desert Driver",ok:()=>(ke.worlds.desert||0)>=1},{id:"wci",e:"\u{1F3D9}\uFE0F",n:"City Driver",ok:()=>(ke.worlds.city||0)>=1},{id:"ws",e:"\u26C4",n:"Snow Driver",ok:()=>(ke.worlds.snow||0)>=1},{id:"wl",e:"\u{1F3D8}\uFE0F",n:"Lenasia Driver",ok:()=>(ke.worlds.lenasia||0)>=1},{id:"night",e:"\u{1F319}",n:"Night Owl",ok:()=>ke.nightKm>=1},{id:"d1",e:"\u{1F6CB}\uFE0F",n:"Recliner Delivered",ok:()=>ke.deliveries>=1},{id:"d10",e:"\u{1F69A}",n:"Delivery Pro",ok:()=>ke.deliveries>=10},{id:"cars",e:"\u{1F697}",n:"Drove Every Car",ok:()=>Object.keys(ke.cars).length>=7},{id:"horn",e:"\u{1F4E3}",n:"Beep Beep",ok:()=>ke.horns>=20},{id:"photo",e:"\u{1F4F8}",n:"Photographer",ok:()=>ke.photos>=1}];function Ro(){let i=[];for(let e of dc)!ke.stickers[e.id]&&e.ok()&&(ke.stickers[e.id]=1,i.push(e));return i.length&&Is(),i}var zp=400,Yn=null,Cs=[],Up=new Ge,Np=new L,Fp=new Jt,IM=new L(1,1,1),Op=new sn;function kp(i){let e=new bi;for(let s=0;s<10;s++){let r=s%2?.3:.7,o=s/10*Math.PI*2-Math.PI/2,a=Math.cos(o)*r,c=Math.sin(o)*r;s?e.lineTo(a,c):e.moveTo(a,c)}e.closePath();let t=new Mr(e,{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});t.center();let n=new Bt({color:16762940,emissive:16751104,emissiveIntensity:.8,roughness:.3,metalness:.4});return Yn=new Pt(t,n,zp),Yn.frustumCulled=!1,Yn.count=0,i.add(Yn),Yn}function Ir(i,e,t){Cs.length>=zp||Cs.push({x:i,z:e,g:t,alive:!0,ph:Math.random()*6.28})}function pc(i){for(let e=Cs.length-1;e>=0;e--)Cs[e].g===i&&Cs.splice(e,1)}function Hp(){Cs.length=0,Yn&&(Yn.count=0)}var Gu=0;function Vp(i,e,t){if(!Yn)return 0;Gu+=i*2.2;let n=0,s=0;for(let r of Cs){if(!r.alive)continue;let o=!1;for(let[a,c]of e){let l=r.x-a,h=r.z-c;if(l*l+h*h<2.3*2.3){o=!0;break}}if(o){r.alive=!1,s++,t&&t(r.x,r.z);continue}Np.set(r.x,1.05+Math.sin(Gu*1.4+r.ph)*.14,r.z),Op.set(0,Gu+r.ph,0),Fp.setFromEuler(Op),Up.compose(Np,Fp,IM),Yn.setMatrixAt(n++,Up)}return Yn.count=n,Yn.instanceMatrix.needsUpdate=!0,s}function Gp(i){let e=new ht,t=new It({color:16766282,transparent:!0,opacity:.32,depthWrite:!1,blending:Rn,side:Ht,fog:!1}),n=new ge(new ln(1.6,2.2,60,16,1,!0),t);n.position.y=30,e.add(n);let s=new ge(new Yi(3.2,.25,8,32),new Bt({color:16766282,emissive:16756736,emissiveIntensity:1.2,roughness:.3}));return s.rotation.x=Math.PI/2,s.position.y=.4,e.add(s),e.visible=!1,i.add(e),e.userData.tick=(r,o)=>{s.position.y=.5+Math.sin(o*2.5)*.3,s.rotation.z+=r,t.opacity=.26+Math.sin(o*3)*.08},e}function Wp(){let i=new ht,e=new Bt({color:5913382,roughness:.55,metalness:.05}),t=new Bt({color:2825492,roughness:.7}),n=new Bt({color:13677676,roughness:.35,metalness:.7}),s=(r,o,a,c,l,h,f,u=0)=>{let d=new ge(new ct(r,o,a),c);return d.position.set(l,h,f),d.rotation.x=u,d.castShadow=!0,i.add(d),d};return s(.95,.12,.9,t,0,.06,0),s(.8,.3,.8,e,0,.3,.05),s(.8,.85,.28,e,0,.78,-.42,-.22),s(.2,.42,.85,e,-.45,.42,0),s(.2,.42,.85,e,.45,.42,0),s(.7,.14,.42,e,0,.36,.62,.35),s(.5,.06,.06,n,0,1.18,-.5),i.scale.setScalar(.85),i}var PM=i=>{let e=(i.name||"").toLowerCase(),t=i.k;return/masjid|mosque|islam|sufi|jumma/.test(e)||t==="mosque"?"\u{1F54C}":/temple|koil|mandir|sai centre|hindu/.test(e)?"\u{1F6D5}":/church|catholic|chapel|kingdom hall/.test(e)||t==="place_of_worship"?"\u26EA":{mall:"\u{1F6CD}\uFE0F",school:"\u{1F3EB}",park:"\u{1F333}",supermarket:"\u{1F6D2}",hospital:"\u{1F3E5}",clinic:"\u{1F3E5}",library:"\u{1F4DA}",police:"\u{1F693}",fuel:"\u26FD",sports_centre:"\u26BD",community_centre:"\u{1F3DB}\uFE0F",childcare:"\u{1F9F8}",retail:"\u{1F3EA}",commercial:"\u{1F3EA}",chemist:"\u{1F48A}",butcher:"\u{1F969}",stationery:"\u270F\uFE0F"}[t]||"\u{1F4CD}"},LM=/cemetery|parking|residential/,fc=class{constructor(){this.cur=null,this.seq=0,this.ownStars=0}next(e){let t=this.seq++,n=[()=>({kind:"stars",icon:"\u2B50",text:`Collect ${10+5*(t%3)} stars`,need:10+5*(t%3),have:0,reward:20}),()=>({kind:"km",icon:"\u{1F6E3}\uFE0F",text:`Drive ${t>6?2:1} km`,need:(t>6?2:1)*1e3,have:0,reward:20,unit:"km"}),()=>{let r=Math.round(e.maxKmh*(.5+Math.min(.3,t*.03))/10)*10;return{kind:"speed",icon:"\u{1F4A8}",text:`Reach ${r} km/h`,need:r,have:0,reward:20,unit:"kmh"}},()=>({kind:"clean",icon:"\u{1F6E1}\uFE0F",text:"Drive 600 m with no bumps",need:600,have:0,reward:25,unit:"m"}),()=>({kind:"boost",icon:"\u26A1",text:"Use boost 3 times",need:3,have:0,reward:15}),()=>({kind:"horn",icon:"\u{1F4E3}",text:"Honk the horn 5 times",need:5,have:0,reward:10})];e.traffic&&!e.isMap&&n.push(()=>({kind:"pass",icon:"\u{1F697}",text:`Pass ${3+t%2*2} cars`,need:3+t%2*2,have:0,reward:25}));let s=null;if(e.isMap){let r=t%3;r===0?s=this.gotoMission(e):r===1&&(s=this.deliverMission(e)),s||(s=Vu(n)())}else s=n[t%n.length]();return s.phase=0,this.cur=s,this.ownStars=0,s}snap(e,t,n){let s=e.nearest(t,n,{skipMinor:!0});return!s||s.d>1e8||s.d>90?null:[s.px,s.pz,s.name]}gotoMission(e){let n=e.road.data.pois.filter(s=>s.name&&!LM.test(s.k)&&s.name.length<34).map(s=>({p:s,d:Math.hypot(s.c[0]-e.x,s.c[1]-e.z)})).filter(s=>s.d>250&&s.d<950);for(let s=0;s<12&&n.length;s++){let r=Vu(n),o=this.snap(e.road,r.p.c[0],r.p.c[1]);if(o)return{kind:"goto",icon:PM(r.p),text:`Drive to ${r.p.name}`,target:[o[0],o[1]],poi:r.p.c,need:1,have:0,reward:25}}return null}deliverMission(e){if(!e.showroomAt)return null;let t=this.snap(e.road,e.showroomAt[0],e.showroomAt[1]);if(!t)return null;let n=e.road.nodes,s=[];for(let a of e.road.roads){if(!a.name||!/residential|living_street|unclassified/.test(a.t)||a.len<80)continue;let c=n[a.n[Math.floor(a.n.length/2)]],l=Math.hypot(c[0]-t[0],c[1]-t[1]);l<300||l>900||s.push({r:a,p:c})}if(!s.length)return null;let{r,p:o}=Vu(s);return{kind:"deliver",icon:"\u{1F6CB}\uFE0F",text:"Pick up a recliner at Glyde-X",text2:`Deliver it to a house on ${r.name}`,target:[t[0],t[1]],target2:[o[0],o[1]],need:2,have:0,reward:40}}event(e,t){let n=this.cur;if(!n||n.done)return!1;switch(n.kind){case"stars":e==="star"&&n.have++;break;case"km":e==="dist"&&(n.have+=t);break;case"speed":e==="speed"&&(n.have=Math.max(n.have,t));break;case"clean":e==="dist"&&(n.have+=t),e==="hit"&&(n.have=0);break;case"boost":e==="boost"&&n.have++;break;case"horn":e==="horn"&&n.have++;break;case"pass":e==="pass"&&n.have++;break;case"goto":e==="pos"&&(Math.hypot(t[0]-n.target[0],t[1]-n.target[1])<22||Math.hypot(t[0]-n.poi[0],t[1]-n.poi[1])<45)&&(n.have=1);break;case"deliver":if(e==="pos"){let s=n.phase===0?n.target:n.target2;if(Math.hypot(t[0]-s[0],t[1]-s[1])<22){if(n.phase===0)return n.phase=1,n.have=1,"pickup";n.have=2}}break}return n.have>=n.need?(n.done=!0,"done"):!1}target(){let e=this.cur;return!e||e.done?null:e.kind==="goto"?e.target:e.kind==="deliver"?e.phase===0?e.target:e.target2:null}label(){let e=this.cur;if(!e)return{icon:"",text:"",prog:""};let t=e.kind==="deliver"&&e.phase===1?e.text2:e.text,n="";return e.unit==="km"?n=`${(Math.min(e.have,e.need)/1e3).toFixed(1)} / ${(e.need/1e3).toFixed(0)} km`:e.unit==="m"?n=`${Math.min(e.have,e.need).toFixed(0)} / ${e.need} m`:e.unit==="kmh"?n=`${Math.round(e.have)} / ${e.need}`:e.kind==="goto"||e.kind==="deliver"?n="":n=`${e.have} / ${e.need}`,{icon:e.icon,text:t,prog:n}}};var ei=4,Ps=64,Nt=13.5,Ri=[-4.3,0,4.3],Pr=Nt/2+3.3,tt=(i,e)=>i+Math.random()*(e-i);var ti=new Jt,ni=new L,ii=new L(1,1,1),si=new Ge,Un=new sn;function ts(i,e,t,n,s,r,o){ni.set(t,n,s),Un.set(0,r,0),ti.setFromEuler(Un),ii.set(o,o,o),si.compose(ni,ti,ii),i.setMatrixAt(e,si)}function Xp(i,e){let t=new Pt(i.trunk.geometry,i.trunk.material,e.length),n=new Pt(i.cards.geometry,i.cards.material,e.length*i.cards.n),s=0;return e.forEach((r,o)=>{let{x:a,z:c,scale:l}=r;ni.set(a,0,c),Un.set(0,r.rot||0,0),ti.setFromEuler(Un),ii.set(l,i.trunk.h*l,l),si.compose(ni,ti,ii),t.setMatrixAt(o,si);let h=i.cards;for(let f=0;f<h.n;f++){let u=tt(0,6.28),d=tt(-1,1),g=Math.sqrt(1-d*d)*tt(.35,1),x=h.yc+d*h.ry,m=h.rx;if(h.cone){let v=(f+.5)/h.n;x=h.yc-h.ry+v*h.ry*2,m=h.rx*(1.15-v)}ni.set(a+Math.cos(u)*g*m*l,x*l,c+Math.sin(u)*g*m*l),h.flat?Un.set(Math.PI/2-tt(.15,.45),tt(0,6.28),0,"YXZ"):Un.set(tt(-h.tilt,h.tilt),tt(0,6.28),tt(-.3,.3),"YXZ"),ti.setFromEuler(Un);let p=l*tt(.8,1.15);ii.set(p,p,p),si.compose(ni,ti,ii),n.setMatrixAt(s++,si)}}),t.castShadow=!0,n.castShadow=!0,t.frustumCulled=!1,n.frustumCulled=!1,[t,n]}var mc=class{constructor(e,t){this.scene=e,this.style=t,this.group=new ht,e.add(this.group),this.samples=[],this.chunks=new Map,this.gen={x:0,z:0,h:0,s:0,k:0,kTarget:0,left:0,rampLen:40},this.piece=null,this.piece={type:"straight",left:200},this.extend(1500)}nextPiece(){if(Math.random()<.35)return{type:"straight",left:tt(80,260)};let t=tt(140,480),n=tt(12,65)*Math.PI/180;return{type:"curve",k:(Math.random()<.5?-1:1)/t,left:t*n,ramp:40}}extend(e){let t=this.gen;for(;t.s<e;){(!this.piece||this.piece.left<=0)&&(this.piece=this.nextPiece());let n=this.piece,s=n.type==="curve"?n.k:0;t.k+=(s-t.k)*Math.min(1,ei/35),t.h+=t.k*ei,t.x+=-Math.sin(t.h)*ei,t.z+=-Math.cos(t.h)*ei,t.s+=ei,n.left-=ei,this.samples.push({x:t.x,z:t.z,h:t.h,s:t.s,k:t.k})}}pointAt(e){let t=e/ei,n=Math.floor(t),s=t-n;n<0&&(n=0),n>=this.samples.length-1&&(n=this.samples.length-2);let r=this.samples[n],o=this.samples[n+1],a=o.h-r.h;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);let c=r.h+a*s;return{x:r.x+(o.x-r.x)*s,z:r.z+(o.z-r.z)*s,h:c,rx:Math.cos(c),rz:-Math.sin(c),fx:-Math.sin(c),fz:-Math.cos(c)}}nearest(e,t,n){let s=this.samples.length,r=-1,o=1/0,a=Math.max(0,n-40),c=Math.min(s-1,n+40);for(let m=a;m<=c;m++){let p=this.samples[m],v=(p.x-e)**2+(p.z-t)**2;v<o&&(o=v,r=m)}let l=this.samples[r],h=Math.cos(l.h),f=-Math.sin(l.h),u=-Math.sin(l.h),d=-Math.cos(l.h),g=e-l.x,x=t-l.z;return{i:r,d:g*h+x*f,along:g*u+x*d,s:l.s+(g*u+x*d),h:l.h,fx:u,fz:d,rx:h,rz:f,k:l.k}}ensure(e){let t=Math.max(0,Math.floor((e-70)/Ps)),n=Math.floor((e+330)/Ps);this.extend((n+2)*Ps*ei);for(let[s,r]of this.chunks)(s<t||s>n+1)&&(this.disposeChunk(r),this.chunks.delete(s));for(let s=t;s<=n;s++)this.chunks.has(s)||this.chunks.set(s,this.buildChunk(s))}disposeChunk(e){this.group.remove(e.group),pc("c"+e.ci),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.isMesh&&!t.userData.shared&&t.geometry.dispose()})}obstaclesNear(e){let t=[],n=Math.floor((e-20)/Ps),s=Math.floor((e+20)/Ps);for(let r=n;r<=s;r++){let o=this.chunks.get(r);if(o)for(let a of o.obstacles)t.push(a)}return t}ribbon(e,t,n,s,r,o,a=!1){let c=t-e+1,l=new Float32Array(c*2*3),h=new Float32Array(c*2*2),f=[];for(let d=0;d<c;d++){let g=this.samples[e+d],x=Math.cos(g.h),m=-Math.sin(g.h);l.set([g.x+x*n,r,g.z+m*n,g.x+x*s,r,g.z+m*s],d*6);let p=g.s*o;if(h.set([0,p,1,p],d*4),d<c-1){let v=d*2;s>n?f.push(v,v+1,v+2,v+1,v+3,v+2):f.push(v,v+2,v+1,v+1,v+2,v+3)}}let u=new Qe;return u.setAttribute("position",new He(l,3)),u.setAttribute("uv",new He(h,2)),u.setIndex(f),u.computeVertexNormals(),u}shortRibbon(e,t,n,s,r){let a=new Float32Array(12),c=new Float32Array(8);[e,t].forEach((h,f)=>{let u=this.pointAt(h);a.set([u.x+u.rx*n,r,u.z+u.rz*n,u.x+u.rx*s,r,u.z+u.rz*s],f*6),c.set([0,f,1,f],f*4)});let l=new Qe;return l.setAttribute("position",new He(a,3)),l.setAttribute("uv",new He(c,2)),l.setIndex(s>n?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),l}buildChunk(e){let t=this.style,n=t.mats,s=e*Ps,r=Math.min(this.samples.length-1,(e+1)*Ps),o=new ht,a=[],c=this.samples[s].s,l=this.samples[r].s,h=new ge(this.ribbon(s,r,-Nt/2,Nt/2,.05,1/7),n.road);h.receiveShadow=!0,o.add(h);for(let u of[-1,1]){let d=new ge(this.ribbon(s,r,u*Nt/2,u*(Nt/2+3.2),.035,.14285714285714285),n.shoulder);d.receiveShadow=!0,o.add(d),o.add(new ge(this.ribbon(s,r,u*(Nt/2-.45),u*(Nt/2-.27),.07,1),n.line))}let f=[];for(let u=Math.ceil(c/9)*9;u<l;u+=9)for(let d of[-2.15,2.15])f.push(this.shortRibbon(u,u+3.2,d-.08,d+.08,.07));if(f.length){let u=DM(f);o.add(new ge(u,n.line))}if(t.guardrail){let u=(r-s+1)*2,d=new Pt(n.railGeo,n.rail,u),g=new Pt(n.postGeo,n.rail,u),x=0;for(let m=s;m<=r;m++)for(let p of[-1,1]){let v=this.samples[m],y=Math.cos(v.h),_=-Math.sin(v.h);ts(d,x,v.x+y*p*Pr,.7,v.z+_*p*Pr,v.h,1),ts(g,x,v.x+y*p*(Pr+.05),.38,v.z+_*p*(Pr+.05),v.h,1),x++}d.frustumCulled=!1,g.frustumCulled=!1,o.add(d,g)}if(t.poles){let u=Math.floor((l-c)/10)*2,d=new Pt(n.poleGeo,n.pole,u),g=0;for(let x=c;x<l-1&&g<u;x+=10)for(let m of[-1,1]){let p=this.pointAt(x);ts(d,g++,p.x+p.rx*m*(Nt/2+.9),.7,p.z+p.rz*m*(Nt/2+.9),p.h,1)}d.count=g,o.add(d)}for(let u of t.scatter){if(u.tree){let x=u.tree,m=u.perChunk,p=new Pt(x.trunk.geometry,x.trunk.material,m),v=new Pt(x.cards.geometry,x.cards.material,m*x.cards.n),y=0;for(let _=0;_<m;_++){let S=tt(c,l),A=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),R=this.pointAt(S),b=tt(u.scale[0],u.scale[1]),M=R.x+R.rx*A,P=R.z+R.rz*A;ni.set(M,0,P),Un.set(0,tt(0,6.28),0),ti.setFromEuler(Un),ii.set(b,x.trunk.h*b,b),si.compose(ni,ti,ii),p.setMatrixAt(_,si);let D=x.cards;for(let F=0;F<D.n;F++){let B=tt(0,6.28),q=tt(-1,1),k=Math.sqrt(1-q*q)*tt(.35,1),Q=D.yc+q*D.ry,V=D.rx;if(D.cone){let ze=(F+.5)/D.n;Q=D.yc-D.ry+ze*D.ry*2,V=D.rx*(1.15-ze)}let ne=M+Math.cos(B)*k*V*b,ce=P+Math.sin(B)*k*V*b;ni.set(ne,Q*b,ce),D.flat?Un.set(Math.PI/2-tt(.15,.45),tt(0,6.28),0,"YXZ"):Un.set(tt(-D.tilt,D.tilt),tt(0,6.28),tt(-.3,.3),"YXZ"),ti.setFromEuler(Un);let me=b*tt(.8,1.15);ii.set(me,me,me),si.compose(ni,ti,ii),v.setMatrixAt(y++,si)}Math.abs(A)<45&&a.push({type:"circle",x:M,z:P,r:x.obstacle*b})}p.castShadow=!0,v.castShadow=!0,p.frustumCulled=!1,v.frustumCulled=!1,o.add(p,v);continue}if(u.grass){let x=u.perChunk,m=new Pt(u.grass.geometry,u.grass.material,x);for(let p=0;p<x;p++){let v=tt(c,l),_=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),S=this.pointAt(v),E=tt(u.scale[0],u.scale[1]);ts(m,p,S.x+S.rx*_,0,S.z+S.rz*_,tt(0,6.28),E)}m.frustumCulled=!1,o.add(m);continue}let d=u.perChunk,g=u.parts.map(x=>new Pt(x.geometry,x.material,d));for(let x=0;x<d;x++){let m=tt(c,l),v=(Math.random()<.5?-1:1)*tt(u.lat[0],u.lat[1]),y=this.pointAt(m),_=tt(u.scale[0],u.scale[1]),S=u.billboard?(Math.random()<.5?0:.5)+y.h:tt(0,6.28),E=y.x+y.rx*v,A=y.z+y.rz*v;g.forEach((R,b)=>{let M=u.parts[b];ts(R,x,E,(M.y||0)*_,A,S+(M.rotY||0),_*(M.scale||1))}),u.obstacle&&Math.abs(v)<45&&a.push({type:"circle",x:E,z:A,r:u.obstacle*_})}g.forEach((x,m)=>{x.frustumCulled=!1,x.castShadow=!!u.parts[m].shadow,o.add(x)})}if(e>0)for(let u=0;u<3;u++){let d=tt(c+12,l-30),g=Ri[Math.floor(tt(0,3))];for(let x=0;x<5;x++){let m=this.pointAt(d+x*5);Ir(m.x+m.rx*g,m.z+m.rz*g,"c"+e)}}{let u=tt(c+20,l-20),d=e%2===0?-1:1,g=this.pointAt(u),x=new ht,m=n.billboards[e%n.billboards.length],p=new ge(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,m,n.rail]);p.position.set(0,7.5,0),p.userData.shared=!0,x.add(p);for(let _ of[-3.5,3.5]){let S=new ge(n.bbPostGeo,n.rail);S.position.set(_,2.25,0),S.userData.shared=!0,x.add(S)}x.position.set(g.x+g.rx*d*19,0,g.z+g.rz*d*19),x.rotation.y=g.h-d*.55,o.add(x);let v=Math.cos(x.rotation.y),y=Math.sin(x.rotation.y);for(let _ of[-3.5,3.5])a.push({type:"circle",x:x.position.x+_*v,z:x.position.z-_*y,r:.3});if(e%3===1){let _=(c+l)/2,S=this.pointAt(_),E=new ht;for(let b of[-1,1]){let M=new ge(n.gantryPostGeo,n.rail);M.position.set(b*(Nt/2+1.2),3.75,0),M.userData.shared=!0,E.add(M),a.push({type:"circle",x:S.x+S.rx*b*(Nt/2+1.2),z:S.z+S.rz*b*(Nt/2+1.2),r:.4})}let A=new ge(n.gantryBeamGeo,n.rail);A.position.set(0,7.5,0),A.userData.shared=!0,E.add(A);let R=new ge(n.gantrySignGeo,[n.rail,n.rail,n.rail,n.rail,n.sign,n.rail]);R.position.set(0,6,.2),R.userData.shared=!0,E.add(R),E.position.set(S.x,0,S.z),E.rotation.y=S.h,o.add(E)}}if(t.buildings){let u=c+tt(0,10),d=0;for(;u<l-8;){for(let y of[-1,1]){let _=(Math.floor(u/37)+y)%6===0,S=t.makeBuilding(_),E=this.pointAt(u+S.d/2),A=y*(Nt/2+4.5+S.w/2+S.gap);S.group.position.set(E.x+E.rx*A,0,E.z+E.rz*A),S.group.rotation.y=E.h+(_?y===-1?-Math.PI/2:Math.PI/2:0),o.add(S.group);let R=_?S.d/2:S.w/2,b=_?S.w/2:S.d/2;a.push({type:"box",x:S.group.position.x,z:S.group.position.z,hw:R,hl:b,h:S.group.rotation.y}),d++}u+=tt(14,24)}let g=Math.floor((l-c)/26)*2,x=new Pt(n.lampGeo,n.lamp,g),m=new Pt(n.lampGlowGeo,n.lampGlow,g),p=new Pt(n.poolGeo,n.pool,g),v=0;for(let y=c+5;y<l-5&&v<g;y+=26)for(let _ of[-1,1]){let S=this.pointAt(y),E=S.x+S.rx*_*(Nt/2+1),A=S.z+S.rz*_*(Nt/2+1);ts(x,v,E,0,A,S.h+(_===1?Math.PI:0),1),ts(m,v,E,0,A,S.h+(_===1?Math.PI:0),1),ts(p,v,E,0,A,S.h+(_===1?Math.PI:0),1),v++,a.push({type:"circle",x:E,z:A,r:.2})}x.count=v,m.count=v,p.count=v,p.renderOrder=2,o.add(x,m,p)}return this.group.add(o),{ci:e,i0:s,i1:r,group:o,obstacles:a}}dispose(){for(let e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.scene.remove(this.group)}};function DM(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length,h.dispose()}let l=new Qe;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}var xt=400,qp=(i,e)=>i+Math.random()*(e-i),UM=(i,e,t)=>Math.max(e,Math.min(t,i)),Co=new Jt,Lr=new L,Dr=new L(1,1,1),Ur=new Ge,gc=new sn;function rn(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}var Yp={motorway:.09,trunk:.09,primary:.085,secondary:.08,tertiary:.075,residential:.07,unclassified:.07,living_street:.065,service:.06,track:.055},Kp={motorway:30,trunk:26,primary:20,secondary:17,tertiary:15,residential:11,unclassified:12,living_street:7,service:7,track:6},xc=class{constructor(e,t,n){this.scene=e,this.style=t,this.data=n,this.M=t.mats,this.group=new ht,e.add(this.group),this.nodes=n.nodes,this.roads=n.roads,this.hasRails=!1,this.isMap=!0,this.tiles=new Map,this.roadMeshes=new Map,this.areaMeshes=new Map,this.signCache=new Map,this.signMats=[],this.buildIndex(),this.makeMaterials()}buildIndex(){let e=this.nodes;this.cell=60,this.hash=new Map,this.nodeRoads=new Map,this.roadTiles=new Map,this.tileRoads=new Map,this.tileBuildings=new Map,this.tileAreas=new Map,this.tileTrees=new Map,this.tilePois=new Map;let t=(s,r)=>s*100003+r;this.roads.forEach((s,r)=>{s.len=0,s.seg=[];for(let f=0;f<s.n.length-1;f++){let u=e[s.n[f]],d=e[s.n[f+1]],g=Math.hypot(d[0]-u[0],d[1]-u[1]);s.seg.push(g),s.len+=g;let x=Math.min(u[0],d[0]),m=Math.max(u[0],d[0]),p=Math.min(u[1],d[1]),v=Math.max(u[1],d[1]);for(let y=Math.floor(x/this.cell);y<=Math.floor(m/this.cell);y++)for(let _=Math.floor(p/this.cell);_<=Math.floor(v/this.cell);_++){let S=t(y,_),E=this.hash.get(S);E||(E=[],this.hash.set(S,E)),E.push(r*4096+f)}}s.n.forEach((f,u)=>{let d=this.nodeRoads.get(f);d||(d=[],this.nodeRoads.set(f,d)),d.push([r,u])});let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let f of s.n){let u=e[f];o=Math.min(o,u[0]),a=Math.max(a,u[0]),c=Math.min(c,u[1]),l=Math.max(l,u[1])}let h=[];for(let f=Math.floor(o/xt);f<=Math.floor(a/xt);f++)for(let u=Math.floor(c/xt);u<=Math.floor(l/xt);u++){let d=t(f,u);h.push(d);let g=this.tileRoads.get(d);g||(g=[],this.tileRoads.set(d,g)),g.push(r)}this.roadTiles.set(r,h)});let n=(s,r,o,a)=>{let c=t(Math.floor(r/xt),Math.floor(o/xt)),l=s.get(c);l||(l=[],s.set(c,l)),l.push(a)};this.data.buildings.forEach((s,r)=>{let o=Zp(s.p);s.c=o,n(this.tileBuildings,o[0],o[1],r)}),this.data.areas.forEach((s,r)=>{let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h of s.p)o=Math.min(o,h[0]),a=Math.max(a,h[0]),c=Math.min(c,h[1]),l=Math.max(l,h[1]);if(!((a-o)*(l-c)>4e6))for(let h=Math.floor(o/xt);h<=Math.floor(a/xt);h++)for(let f=Math.floor(c/xt);f<=Math.floor(l/xt);f++){let u=t(h,f),d=this.tileAreas.get(u);d||(d=[],this.tileAreas.set(u,d)),d.push(r)}}),this.data.trees.forEach(s=>n(this.tileTrees,s[0],s[1],s));for(let s of this.data.treeRows)for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],c=Math.hypot(a[0]-o[0],a[1]-o[1]);for(let l=0;l<c;l+=9){let h=l/c;n(this.tileTrees,o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h,[o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h])}}this.data.pois.forEach(s=>n(this.tilePois,s.c[0],s.c[1],s)),this.key=t}nearest(e,t,n){let s=this.nodes,r=null,o=1/0,a=n&&n.skipMinor,c=n&&n.exclude,l=Math.floor(e/this.cell),h=Math.floor(t/this.cell);for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++){let g=this.hash.get(this.key(l+u,h+d));if(g)for(let x of g){let m=Math.floor(x/4096),p=x%4096,v=this.roads[m];if(a&&(v.t==="service"||v.t==="track")||c===m)continue;let y=s[v.n[p]],_=s[v.n[p+1]],S=_[0]-y[0],E=_[1]-y[1],A=S*S+E*E||1,R=((e-y[0])*S+(t-y[1])*E)/A;R=UM(R,0,1);let b=y[0]+S*R,M=y[1]+E*R,P=Math.hypot(e-b,t-M),D=P-v.w/2;D<o&&(o=D,r={d:P,w:v.w,r:m,i:p,t:R,ex:S,ez:E,px:b,pz:M})}}if(!r)return{d:1e9,w:0,onRoad:!1,h:0,name:"",type:""};let f=this.roads[r.r];return r.h=Math.atan2(-r.ex,-r.ez),r.onRoad=r.d<=f.w/2+.9,r.name=f.name,r.type=f.t,r}makeMaterials(){let e=this.style,t=this.M,n=a=>new Bt(a);this.mat={road:t.road,roadDirt:n({map:e.tex("sand"),color:10127978,roughness:1}),line:t.line,rail:t.rail,house:e.fMatsHouse,wall:e.wallMat,roof:e.roofTileMat,roofFlat:n({color:5922406,roughness:1}),park:n({map:e.tex("grass"),color:9420650,roughness:1}),pitch:n({map:e.tex("grass"),color:7320666,roughness:1}),water:n({color:4161456,roughness:.1,metalness:.3,envMapIntensity:1.5}),farm:n({map:e.tex("sand"),color:12099696,roughness:1}),lot:n({map:e.tex("pavement"),color:11184810,roughness:1}),scrub:n({map:e.tex("grass"),color:10525802,roughness:1}),railbed:n({color:5591114,roughness:1}),railsteel:n({color:9080208,roughness:.4,metalness:.8}),white:n({color:15921126,roughness:.8}),dome:n({color:4169082,roughness:.35,metalness:.2}),gold:n({color:13677676,roughness:.3,metalness:.7}),navy:n({color:1517628,roughness:.6})};for(let a of[this.mat.park,this.mat.pitch,this.mat.farm,this.mat.lot,this.mat.scrub])a.map=a.map.clone(),a.map.repeat.set(1/8,1/8),a.map.needsUpdate=!0;this.houseGeo=new ct(1,1,1),this.houseGeo.translate(0,.5,0);let s=this.houseGeo.attributes.uv;for(let a=0;a<s.count;a++)s.setXY(a,s.getX(a)*2.6,s.getY(a)*1);this.roofGeo=new yr(1,1,4),this.roofGeo.rotateY(Math.PI/4),this.roofGeo.translate(0,.5,0),this.wallGeo=new ct(1,1,1),this.wallGeo.translate(0,.5,0);let r=this.wallGeo.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*3,r.getY(a)*.5);let o=this.houseGeo.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a),o.getY(a))}ensure(e,t){let n=Math.floor(e/xt),s=Math.floor(t/xt),r=2;for(let[a,c]of this.tiles)(Math.abs(c.tx-n)>r+1||Math.abs(c.tz-s)>r+1)&&(this.disposeTile(c),this.tiles.delete(a));let o=0;for(let a=-r;a<=r;a++)for(let c=-r;c<=r;c++){if(o>=2&&(Math.abs(a)>1||Math.abs(c)>1))continue;let l=this.key(n+a,s+c);this.tiles.has(l)||(this.tiles.set(l,this.buildTile(n+a,s+c,l)),o++)}}obstaclesNear(e,t){let n=[],s=Math.floor(e/xt),r=Math.floor(t/xt);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let c=this.tiles.get(this.key(s+o,r+a));if(c)for(let l of c.obstacles)Math.abs(l.x-e)<60&&Math.abs(l.z-t)<60&&n.push(l)}return n}disposeTile(e){this.group.remove(e.group),pc("t"+e.tx+"_"+e.tz),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.geometry&&!t.userData.shared&&t.geometry.dispose()});for(let t of e.roads){let n=this.roadMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose()}),this.roadMeshes.delete(t))}for(let t of e.areas){let n=this.areaMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.areaMeshes.delete(t))}}buildTile(e,t,n){let s=new ht,r=[],o=this.nodes,a=e*xt,c=t*xt,l=this.tileRoads.get(n)||[];for(let x of l){let m=this.roadMeshes.get(x);m||(m={refs:0,mesh:this.buildRoad(x)},this.roadMeshes.set(x,m),this.group.add(m.mesh)),m.refs++}let h=[];for(let x of l){let m=this.roads[x];for(let p of m.n){let v=o[p];if(v[0]<a||v[0]>=a+xt||v[1]<c||v[1]>=c+xt)continue;let y=this.nodeRoads.get(p);if(!y||y.length<2)continue;let _=0,S=0;for(let[E]of y)_=Math.max(_,this.roads[E].w),S=Math.max(S,Yp[this.roads[E].t]||.06);h.find(E=>E[0]===p)||h.push([p,v,_,S])}}if(h.length){let x=h.map(([,p,v,y])=>{let _=new Es(v/2,14);_.rotateX(-Math.PI/2),_.translate(p[0],y+.002,p[1]);let S=_.attributes.uv;for(let E=0;E<S.count;E++)S.setXY(E,S.getX(E)*v/7,S.getY(E)*v/7);return _}),m=new ge(Xu(x),this.mat.road);m.receiveShadow=!0,s.add(m)}for(let x of this.tileAreas.get(n)||[]){let m=this.areaMeshes.get(x);if(!m){let p=this.buildArea(x);if(!p)continue;m={refs:0,mesh:p},this.areaMeshes.set(x,m),this.group.add(p)}m.refs++}for(let x of this.tilePois.get(n)||[])x.k==="fuel"&&!this.nearBuilding(x.c[0],x.c[1],6)&&this.buildFuel(x,s,r);for(let x of this.tileBuildings.get(n)||[]){let m=this.data.buildings[x],p=this.buildBuilding(m);if(!p)continue;s.add(p);let v=FM(m.p);r.push({type:"box",...v})}let f=[],u=[];for(let x of l){let m=this.roads[x];if(!/residential|unclassified|living_street/.test(m.t))continue;let p=21,v=10,y=0;for(let _=0;_<m.n.length-1;_++){let S=o[m.n[_]],E=o[m.n[_+1]],A=m.seg[_],R=(E[0]-S[0])/A,b=(E[1]-S[1])/A,M=-b,P=R;for(;v<A;v+=p){y++;let D=S[0]+R*v,F=S[1]+b*v;if(!(D<a||D>=a+xt||F<c||F>=c+xt))for(let B of[-1,1]){if(rn(x,y,B+2)<.18)continue;let k=m.w/2+8.5+rn(x,y,B+7)*3,Q=D+M*B*k,V=F+P*B*k,ne=this.nearest(Q,V,{exclude:x});if(ne.d<ne.w/2+7||this.nearest(Q+R*6,V+b*6,{exclude:x}).d<6||this.nearest(Q-R*6,V-b*6,{exclude:x}).d<6||this.nearBuilding(Q,V,14))continue;let ce=Math.atan2(-R,-b)+(B===1?Math.PI:0),me=5+rn(x,y,11)*1.6,ze=4+rn(x,y,13)*1.2,et=3.1+rn(x,y,17)*.5;f.push({x:Q,z:V,yaw:ce,hw:me,hd:ze,hh:et,tint:Math.floor(rn(x,y,19)*4)}),r.push({type:"box",x:Q,z:V,hw:ze,hl:me,h:ce});let Z=m.w/2+1.3,le=D+M*B*Z,Ae=F+P*B*Z,fe=(rn(x,y,23)-.5)*8;for(let Re of[fe-5.5,fe+5.5]){let Oe=le+R*Re,Le=Ae+b*Re,qe=!0;for(let j of[-3.75,0,3.75]){let X=this.nearest(Oe+R*j,Le+b*j,{exclude:x});if(X.d<X.w/2+2.5){qe=!1;break}}qe&&(f.push({wall:!0,x:Oe,z:Le,yaw:ce,len:7.5}),r.push({type:"box",x:Oe,z:Le,hw:.15,hl:3.75,h:ce}))}if(rn(x,y,29)<.3){let Re=D+M*B*(m.w/2+3.2)+R*6,Oe=F+P*B*(m.w/2+3.2)+b*6;u.push({x:Re,z:Oe,scale:.6+rn(x,y,31)*.5,rot:rn(x,y,37)*6.28}),r.push({type:"circle",x:Re,z:Oe,r:.4})}}}v-=A}}let d=f.filter(x=>!x.wall),g=f.filter(x=>x.wall);if(d.length){let x=new Pt(this.houseGeo,this.mat.house,d.length),m=new Pt(this.roofGeo,this.mat.roof,d.length);d.forEach((p,v)=>{Lr.set(p.x,0,p.z),gc.set(0,p.yaw,0),Co.setFromEuler(gc),Dr.set(p.hd*2,p.hh,p.hw*2),Ur.compose(Lr,Co,Dr),x.setMatrixAt(v,Ur),Lr.set(p.x,p.hh,p.z),Dr.set((p.hd+.6)*2*Math.SQRT1_2,2+p.hd*.12,(p.hw+.6)*2*Math.SQRT1_2),Ur.compose(Lr,Co,Dr),m.setMatrixAt(v,Ur)}),x.castShadow=!0,x.receiveShadow=!0,m.castShadow=!0,x.userData.shared=!0,m.userData.shared=!0,s.add(x,m)}if(g.length){let x=new Pt(this.wallGeo,this.mat.wall,g.length);g.forEach((m,p)=>{Lr.set(m.x,0,m.z),gc.set(0,m.yaw,0),Co.setFromEuler(gc),Dr.set(.25,1.8,m.len),Ur.compose(Lr,Co,Dr),x.setMatrixAt(p,Ur)}),x.castShadow=!0,x.userData.shared=!0,s.add(x)}for(let x of this.tileTrees.get(n)||[])u.push({x:x[0],z:x[1],scale:.8+rn(x[0]|0,x[1]|0)*.5,rot:0}),r.push({type:"circle",x:x[0],z:x[1],r:.5});for(let x of this.tileAreas.get(n)||[]){let m=this.data.areas[x];if(m.k!=="park"&&m.k!=="grass")continue;let p=Zp(m.p);if(p[0]<a||p[0]>=a+xt||p[1]<c||p[1]>=c+xt)continue;let v=$p(m.p),y=Math.min(14,Math.floor((v[2]-v[0])*(v[3]-v[1])/2500));for(let _=0;_<y;_++){let S=v[0]+rn(x,_,1)*(v[2]-v[0]),E=v[1]+rn(x,_,2)*(v[3]-v[1]);NM(S,E,m.p)&&(this.nearest(S,E).d<8||(u.push({x:S,z:E,scale:.9+rn(x,_,3)*.5,rot:0}),r.push({type:"circle",x:S,z:E,r:.5})))}}if(u.length){let[x,m]=Xp(this.style.treeStyles.oakTree,u);x.userData.shared=!0,m.userData.shared=!0,s.add(x,m)}{let x=0;for(let m of l){let p=this.roads[m];if(p.t==="service"||p.t==="track"||p.len<60)continue;let v=30+rn(m,1)*40,y=0;for(let _=0;_<p.n.length-1&&x<30;_++){let S=o[p.n[_]],E=o[p.n[_+1]],A=p.seg[_],R=(E[0]-S[0])/A,b=(E[1]-S[1])/A,M=-b,P=R;for(;v+12<A&&x<30;v+=90){y++;let D=S[0]+R*v,F=S[1]+b*v;if(D<a||D>=a+xt||F<c||F>=c+xt)continue;let q=(rn(m,y,5)<.5?-1:1)*p.w/4;for(let k=0;k<3;k++)Ir(D+R*k*5+M*q,F+b*k*5+P*q,"t"+e+"_"+t);x+=3}v-=A}}}if(this.style.showroomAt&&Math.floor(this.style.showroomAt[0]/xt)===e&&Math.floor(this.style.showroomAt[1]/xt)===t){let x=this.style.makeBuilding(!0),[m,p,v]=this.style.showroomAt;x.group.position.set(m,0,p),x.group.rotation.y=v,s.add(x.group),r.push({type:"box",x:m,z:p,hw:x.w/2,hl:x.d/2,h:v})}return this.group.add(s),{tx:e,tz:t,group:s,obstacles:r,roads:l,areas:this.tileAreas.get(n)||[]}}nearBuilding(e,t,n){let s=Math.floor(e/xt),r=Math.floor(t/xt);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileBuildings.get(this.key(s+o,r+a))||[]){let l=this.data.buildings[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildRoad(e){let t=this.roads[e],n=this.nodes,s=t.n.map(f=>n[f]),r=t.w,o=Yp[t.t]||.06,a=new ht,c=t.t==="track"?this.mat.roadDirt:this.mat.road,l=new ge(Wu(s,-r/2,r/2,o,1/7),c);l.receiveShadow=!0,a.add(l);let h=[s[0],s[s.length-1]].map(f=>{let u=new Es(r/2,12);return u.rotateX(-Math.PI/2),u.translate(f[0],o,f[1]),u});if(a.add(new ge(Xu(h),c)),r>=8.4){for(let m of[-1,1])a.add(new ge(Wu(s,m*(r/2-.4),m*(r/2-.25),o+.01,1),this.mat.line));let f=t.one?Math.max(2,t.lanes||Math.round(r/3.6)):2,u=[],d=[];if(t.one)for(let m=1;m<f;m++)d.push(-r/2+r/f*m);else d.push(0);let g=0,x=t.len;for(let m=0;m<s.length-1;m++){let p=s[m],v=s[m+1],y=t.seg[m],_=(v[0]-p[0])/y,S=(v[1]-p[1])/y,E=-S,A=_;for(let R=(9-g%9)%9;R+3<y;R+=9)for(let b of d){let M=[p[0]+_*R+E*b,p[1]+S*R+A*b],P=[p[0]+_*(R+3)+E*b,p[1]+S*(R+3)+A*b];u.push(Wu([M,P],-.08,.08,o+.01,1))}g+=y}u.length&&a.add(new ge(Xu(u),this.mat.line))}return a}buildArea(e){let t=this.data.areas[e];if(t.p.length<3)return null;let n={park:this.mat.park,grass:this.mat.park,pitch:this.mat.pitch,water:this.mat.water,wet:this.mat.water,farm:this.mat.farm,ind:this.mat.lot,com:this.mat.lot,park_lot:this.mat.lot,scrub:this.mat.scrub,school:this.mat.park,quarry:this.mat.farm}[t.k];if(!n)return null;let s=new bi(t.p.map(c=>new ee(c[0],-c[1]))),r=new Ya(s);r.rotateX(-Math.PI/2);let o={water:.03,wet:.025,park:.02,grass:.02,pitch:.022,farm:.015,scrub:.015,ind:.018,com:.018,park_lot:.019,school:.02,quarry:.015}[t.k]||.02;r.translate(0,o,0);let a=new ge(r,n);return a.receiveShadow=!0,a}buildBuilding(e){if(e.p.length<3)return null;let t=new bi(e.p.map(p=>new ee(p[0],-p[1]))),n=new Mr(t,{depth:e.h,bevelEnabled:!1});n.rotateX(-Math.PI/2);let s=this.style,r=e.h>5.5,o=e.k+" "+(e.name||""),a=/masjid|mosque|islam|jumma|sufi|musallah/i.test(o),c=/temple|koil|mandir|sai centre|hindu/i.test(o),l=/church|chapel|catholic|kingdom hall/i.test(o),h=/mall|retail|commercial|supermarket|shop|plaza|centre|center|kfc|mcdonald|hardware|station/i.test(o),f=a||c||l?this.mat.white:r?s.fMats[h?2:0]:this.mat.house,u=new ge(n,[this.mat.roofFlat,f]);if(u.castShadow=!0,u.receiveShadow=!0,!e.name&&!a)return u;let d=new ht;d.add(u);let g=e.c,x=$p(e.p),m=Math.min(x[2]-x[0],x[3]-x[1]);if(a){let p=new ge(new Si(Math.min(6,m*.3),20,12,0,Math.PI*2,0,Math.PI/2),this.mat.dome);p.position.set(g[0],e.h,g[1]),p.castShadow=!0,d.add(p);let v=Math.min(6,m*.3),y=new ge(new Yi(.5,.08,6,16,Math.PI*1.5),this.mat.gold);y.position.set(g[0],e.h+v+.7,g[1]),d.add(y);let _=e.h+9+Math.min(8,m*.4),S=x[0]+1.5,E=x[1]+1.5,A=new ge(new ln(.9,1.1,_,10),this.mat.white);A.position.set(S,_/2,E),A.castShadow=!0,d.add(A);let R=new ge(new Si(1.3,12,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);R.position.set(S,_,E),d.add(R)}else if(c){let p=new ge(new yr(Math.min(3,m*.2),5,4),this.mat.gold);p.position.set(g[0],e.h+2.5,g[1]),p.rotation.y=Math.PI/4,p.castShadow=!0,d.add(p)}else if(l){let p=new ge(new ct(3,e.h+4,3),this.mat.white);p.position.set(x[0]+2,(e.h+4)/2,x[1]+2),p.castShadow=!0,d.add(p);let v=new ge(new yr(2.2,4,4),this.mat.roofFlat);v.position.set(x[0]+2,e.h+6,x[1]+2),v.rotation.y=Math.PI/4,d.add(v)}if(e.name){let p=this.nearest(g[0],g[1]),v=null,y=1/0;for(let _=0;_<e.p.length;_++){let S=e.p[_],E=e.p[(_+1)%e.p.length],A=(S[0]+E[0])/2,R=(S[1]+E[1])/2,b=Math.hypot(E[0]-S[0],E[1]-S[1]);if(b<4)continue;let M=p.px!=null?Math.hypot(A-p.px,R-p.pz):0;M<y&&(y=M,v={a:S,q:E,mx:A,mz:R,L:b})}if(v){let _=Math.min(16,Math.max(6,v.L*.8)),S=_*.16,E=this.nameTexture(e.name,a?"\u{1F54C}":c?"\u{1F6D5}":l?"\u26EA":/school/i.test(o)?"\u{1F3EB}":h?"\u{1F6CD}\uFE0F":""),A=new ge(new ct(_,S,.25),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,E,E]),R=v.q[0]-v.a[0],M=-(v.q[1]-v.a[1]),P=R,D=Math.hypot(M,P)||1;M/=D,P/=D,(v.mx-g[0])*M+(v.mz-g[1])*P<0&&(M=-M,P=-P),A.position.set(v.mx+M*.3,e.h+S/2+.4,v.mz+P*.3),A.rotation.y=Math.atan2(M,P),d.add(A)}}return d}nameTexture(e,t){let n=t+e;if(this.signCache.has(n))return this.signCache.get(n);let s=document.createElement("canvas");s.width=1024,s.height=160;let r=s.getContext("2d");r.fillStyle="#17283C",r.fillRect(0,0,1024,160),r.fillStyle="#D0B46C",r.fillRect(0,146,1024,14),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let o=84;r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;let a=(t?t+"  ":"")+e.toUpperCase();for(;r.measureText(a).width>960&&o>34;)o-=4,r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;r.fillText(a,512,78);let c=new qi(s);c.colorSpace=bt,c.anisotropy=4;let l=new Bt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:this.style.nightNow?.8:0,roughness:.6});return this.signCache.set(n,l),this.signMats.push(l),l}buildFuel(e,t,n){let s=this.nearest(e.c[0],e.c[1]);if(s.d>1e8)return;let r=s.h,o=new ht;o.position.set(e.c[0],0,e.c[1]),o.rotation.y=r;let a=(f,u)=>[e.c[0]+f*Math.cos(r)+u*Math.sin(r),e.c[1]-f*Math.sin(r)+u*Math.cos(r)],c=new ge(new ct(14,.6,9),this.mat.white);c.position.y=4.8,c.castShadow=!0,o.add(c);let l=new ge(new ct(14.2,.9,9.2),this.mat.navy);l.position.y=4.1,o.add(l);for(let[f,u]of[[-5,-3],[5,-3],[-5,3],[5,3]]){let d=new ge(new ln(.2,.2,4,8),this.mat.white);d.position.set(f,2,u),o.add(d);let[g,x]=a(f,u);n.push({type:"circle",x:g,z:x,r:.25})}for(let f of[-2.5,2.5]){let u=new ge(new ct(.9,1.7,.5),this.mat.gold);u.position.set(f,.85,0),o.add(u);let[d,g]=a(f,0);n.push({type:"box",x:d,z:g,hw:.5,hl:.3,h:r})}let h=new ge(new ct(3,1,.2),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,this.nameTexture(e.name||"Petrol","\u26FD"),this.mat.navy]);h.position.set(0,5.9,0),o.add(h),t.add(o)}spawnAgent(e,t,n){for(let s=0;s<30;s++){let r=Math.floor(Math.random()*this.roads.length),o=this.roads[r];if(o.t==="service"||o.t==="track"||o.len<40)continue;let a=Math.floor(Math.random()*(o.n.length-1)),c=this.nodes[o.n[a]],l=Math.hypot(c[0]-t,c[1]-n);if(!(l<60||l>350))return e.r=r,e.i=a,e.t=Math.random(),e.dir=o.one||Math.random()<.5?1:-1,e.speed=(Kp[o.t]||10)*qp(.8,1),!0}return!1}advanceAgent(e,t){let n=this.roads[e.r],s=this.nodes,r=e.speed*t;for(;r>0;){let m=n.seg[e.i],p=e.t*m,v=e.dir>0?m-p:p;if(r<v){e.t+=e.dir*r/m,r=0;break}r-=v;let y=e.dir>0?e.i+1:e.i,_=n.n[y],S=[];for(let[P,D]of this.nodeRoads.get(_)||[]){let F=this.roads[P];F.t==="service"||F.t==="track"||(D<F.n.length-1&&!(P===e.r&&F.one===0&&D===e.i&&e.dir<0)&&S.push([P,D,1]),D>0&&!F.one&&!(P===e.r&&D-1===e.i&&e.dir>0)&&S.push([P,D-1,-1]))}let E=S.filter(([P])=>P===e.r),A=Math.random()<.7&&E.length?E:S;if(!A.length){e.dir=-e.dir;break}let[R,b,M]=A[Math.floor(Math.random()*A.length)];return e.r=R,e.i=b,e.dir=M,e.t=M>0?0:1,e.speed=(Kp[R===e.r?n.t:this.roads[R].t]||10)*qp(.8,1),this.advanceAgent(e,r/e.speed)}let o=this.roads[e.r],a=s[o.n[e.i]],c=s[o.n[e.i+1]],l=(c[0]-a[0])/o.seg[e.i],h=(c[1]-a[1])/o.seg[e.i],f=l*e.dir,u=h*e.dir,d=u,g=-f,x=o.one?o.w/4*(Math.random()<.5?1:-1)*0+o.w/4:o.w/4;e.x=a[0]+l*e.t*o.seg[e.i]+d*x,e.z=a[1]+h*e.t*o.seg[e.i]+g*x,e.h=Math.atan2(-f,-u)}startPose(){let[e,t]=this.style.start,n=null;for(let o=0;o<400&&!(n&&n.d<1e8);o+=40)for(let a=0;a<6.3&&!(n&&n.d<1e8);a+=.8){let c=this.nearest(e+Math.cos(a)*o,t+Math.sin(a)*o,{skipMinor:!0});c.d<1e8&&(n=c)}n||(n=this.nearest(e,t));let s=-Math.cos(n.h)*0+Math.cos(n.h),r=-Math.sin(n.h);return{x:n.px-s*n.w/4,z:n.pz-r*n.w/4,h:n.h}}dispose(){for(let e of this.tiles.values())this.disposeTile(e);this.tiles.clear(),this.scene.remove(this.group)}};function Wu(i,e,t,n,s){let r=i.length,o=new Float32Array(r*6),a=new Float32Array(r*4),c=[],l=0;for(let u=0;u<r;u++){let d=i[u],g=i[Math.max(0,u-1)],x=i[Math.min(r-1,u+1)],m=d[0]-g[0],p=d[1]-g[1],v=x[0]-d[0],y=x[1]-d[1],_=Math.hypot(m,p)||1,S=Math.hypot(v,y)||1;m/=_,p/=_,v/=S,y/=S,u===0&&(m=v,p=y),u===r-1&&(v=m,y=p);let E=-(p+y),A=m+v,R=Math.hypot(E,A)||1;E/=R,A/=R;let M=1/Math.max(.5,E*-y+A*v);if(o.set([d[0]+E*e*M,n,d[1]+A*e*M,d[0]+E*t*M,n,d[1]+A*t*M],u*6),u>0&&(l+=Math.hypot(d[0]-g[0],d[1]-g[1])),a.set([0,l*s,1,l*s],u*4),u<r-1){let P=u*2;c.push(P,P+1,P+2,P+1,P+3,P+2)}}let h=new Qe;if(h.setAttribute("position",new He(o,3)),h.setAttribute("uv",new He(a,2)),h.setIndex(c),h.computeVertexNormals(),h.attributes.normal.getY(0)<0){let u=h.index.array;for(let d=0;d<u.length;d+=3){let g=u[d+1];u[d+1]=u[d+2],u[d+2]=g}h.computeVertexNormals()}return h}function Xu(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),h.attributes.uv&&s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length,h.dispose()}let l=new Qe;return l.setAttribute("position",new He(n,3)),l.setAttribute("uv",new He(s,2)),l.setAttribute("normal",new He(r,3)),l.setIndex(new He(o,1)),l}function Zp(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function $p(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r of i)e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[e,n,t,s]}function NM(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function FM(i){let e=0,t=-1;for(let d=0;d<i.length;d++){let g=i[d],x=i[(d+1)%i.length],m=Math.hypot(x[0]-g[0],x[1]-g[1]);m>t&&(t=m,e=Math.atan2(x[1]-g[1],x[0]-g[0]))}let n=Math.cos(-e),s=Math.sin(-e),r=1/0,o=-1/0,a=1/0,c=-1/0;for(let d of i){let g=d[0]*n-d[1]*s,x=d[0]*s+d[1]*n;r=Math.min(r,g),o=Math.max(o,g),a=Math.min(a,x),c=Math.max(c,x)}let l=(r+o)/2,h=(a+c)/2,f=l*Math.cos(e)-h*Math.sin(e),u=l*Math.sin(e)+h*Math.cos(e);return{x:f,z:u,hw:(o-r)/2,hl:(c-a)/2,h:-e}}var Io=class i extends ge{constructor(){super(i.Geometry,new It({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new L,t=new L,n=new po(16,16),s=new po(16,16),r=Cn,o=i.Geometry,a=new Ki({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new Ki({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new ge(o,a),h=[],f=ri.Shader,u=new Ki({name:f.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Te(16777215)},scale:{value:new ee},screenPosition:{value:new L}},vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Rn,transparent:!0,depthWrite:!1}),d=new ge(o,u);this.addElement=function(v){h.push(v)};let g=new ee,x=new ee,m=new Qa,p=new at;this.onBeforeRender=function(v,y,_){v.getCurrentViewport(p);let S=v.getRenderTarget(),E=S!==null?S.texture.type:Cn;r!==E&&(n.dispose(),s.dispose(),n.type=s.type=E,r=E);let A=p.w/p.z,R=p.z/2,b=p.w/2,M=16/p.w;if(g.set(M*A,M),m.min.set(p.x,p.y),m.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(_.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(_.projectionMatrix),x.x=p.x+e.x*R+R-8,x.y=p.y+e.y*b+b-8,m.containsPoint(x))){v.copyFramebufferToTexture(n,x);let P=a.uniforms;P.scale.value=g,P.screenPosition.value=e,v.renderBufferDirect(_,null,o,a,l,null),v.copyFramebufferToTexture(s,x),P=c.uniforms,P.scale.value=g,P.screenPosition.value=e,v.renderBufferDirect(_,null,o,c,l,null);let D=-e.x*2,F=-e.y*2;for(let B=0,q=h.length;B<q;B++){let k=h[B],Q=u.uniforms;Q.color.value.copy(k.color),Q.map.value=k.texture,Q.screenPosition.value.x=e.x+D*k.distance,Q.screenPosition.value.y=e.y+F*k.distance,M=k.size/p.w;let V=p.w/p.z;Q.scale.value.set(M*V,M),u.uniformsNeedUpdate=!0,v.renderBufferDirect(_,null,o,u,d,null)}}},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),n.dispose(),s.dispose();for(let v=0,y=h.length;v<y;v++)h[v].texture.dispose()}}},ri=class{constructor(e,t=1,n=0,s=new Te(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}};ri.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Io.Geometry=function(){let i=new Qe,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new bs(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new Xi(t,3,0,!1)),i.setAttribute("uv",new Xi(t,2,3,!1)),i}();var _c=(i,e)=>i+Math.random()*(e-i),OM=new br,qu={};function Ft(i,{mirror:e=!0,srgb:t=!0}={}){if(qu[i])return qu[i];let n=OM.load(`tex/${i}.webp`);return n.wrapS=n.wrapT=e?ys:Mi,t&&(n.colorSpace=bt),n.anisotropy=8,qu[i]=n,n}var Dt=i=>new Bt(i);function vc(i,e,t,n={}){let s=Ft(i,{mirror:!1}),r=e*t,o=new In(r,e);o.translate(0,e/2-(n.sink||0),0);let a=Dt({map:s,alphaTest:.45,side:Ht,roughness:1,metalness:0}),c=new In(r,e);return c.translate(0,e/2-(n.sink||0),0),c.rotateY(Math.PI/2),[{geometry:o,material:a},{geometry:c,material:a}]}function Yu(i,e,t,n){let s=i.attributes.uv,r=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}s.needsUpdate=!0}function Jp(i,e){let t={scene:i,worlds:{},current:null,road:null},n=new Ao;n.scale.setScalar(2e4),i.add(n);let s=new Er(16777215,2.2);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-22,s.shadow.camera.right=22,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,s.shadow.camera.near=1,s.shadow.camera.far=160,s.shadow.bias=-8e-4,s.shadow.normalBias=.02,i.add(s),i.add(s.target);let r=new $a(12574719,4876842,.5);i.add(r);let o=new mr(e);t.sky=n,t.sun=s,t.hemi=r;let a=Dt({roughness:1,metalness:0}),c=new ge(new In(1600,1600),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let l=new It({transparent:!0,alphaTest:.2,side:Yt,fog:!1,depthWrite:!1}),h=new ge(new ln(560,560,150,48,1,!0),l);h.renderOrder=-1,i.add(h);let f=Ft("asphalt");f.repeat.set(2,1);let u=Ft("asphalt_n",{srgb:!1});u.repeat.set(2,1);let d=Ft("asphalt_r",{srgb:!1});d.repeat.set(2,1);let g=[Ft("billboard1",{mirror:!1}),Ft("billboard2",{mirror:!1})],x=Ft("shopsign",{mirror:!1}),m={road:Dt({map:f,normalMap:u,normalScale:new ee(.45,.45),roughnessMap:d,roughness:1,metalness:0,envMapIntensity:.6}),shoulder:Dt({roughness:1}),line:Dt({color:16053492,roughness:.7}),rail:Dt({color:12106946,roughness:.45,metalness:.8}),railGeo:new ct(.08,.32,4.1),postGeo:new ct(.1,.75,.1),pole:Dt({color:16734774,roughness:.7}),poleGeo:new ct(.12,1.4,.12),billboards:g.map(X=>Dt({map:X,emissiveMap:X,emissive:16777215,emissiveIntensity:0,roughness:.6})),bbPanelGeo:new ct(12,6,.25),bbPostGeo:new ln(.18,.22,4.5,8),sign:Dt({map:x,emissiveMap:x,emissive:16777215,emissiveIntensity:0,roughness:.5}),gantryPostGeo:new ct(.5,7.5,.5),gantryBeamGeo:new ct(Nt+3,.5,.5),gantrySignGeo:new ct(12,3,.2),lamp:Dt({color:10133670,roughness:.4,metalness:.8}),lampGlow:Dt({color:16773824,emissive:16769184,emissiveIntensity:0}),pool:new It({color:16766346,transparent:!0,opacity:0,blending:Rn,depthWrite:!1,fog:!1})};m.poolGeo=new Es(5.5,20),m.poolGeo.rotateX(-Math.PI/2),m.poolGeo.translate(2,.06,0);{let X=document.createElement("canvas");X.width=X.height=128;let C=X.getContext("2d"),he=C.createRadialGradient(64,64,0,64,64,64);he.addColorStop(0,"rgba(255,255,255,1)"),he.addColorStop(1,"rgba(255,255,255,0)"),C.fillStyle=he,C.fillRect(0,0,128,128),m.pool.map=new qi(X),m.pool.alphaMap=m.pool.map}{let X=new ln(.08,.12,7,6);X.translate(0,3.5,0);let C=new ct(2,.1,.1);C.translate(1,6.95,0),m.lampGeo=BM([X,C]),m.lampGlowGeo=new ct(.6,.15,.3),m.lampGlowGeo.translate(1.8,6.9,0)}t.M=m;let v=["facade_glass","facade_brick","facade_shops"].map(X=>Ft(X,{mirror:!1})).map(X=>Dt({map:X,emissiveMap:X,emissive:16777215,emissiveIntensity:0,roughness:.5,metalness:.1})),y=Dt({color:4869717,roughness:1});function _(X){let C=X?18:_c(10,18),he=X?9:_c(9,42),$=X?12:_c(10,16),oe=new ht;if(X){let re=new ge(new ct(C,5,$),[v[2],v[2],y,y,v[2],v[2]]);Yu(re.geometry,C/9,5/9,$/9),re.position.y=2.5,oe.add(re);let Ee=new ge(new ct(C,1.3,$+.2),[y,y,y,y,m.sign,y]);Ee.position.y=5.65,oe.add(Ee);let pe=new ge(new ct(C,2.7,$),[v[1],v[1],y,y,v[1],v[1]]);Yu(pe.geometry,C/12,2.7/12,$/12),pe.position.y=7.65,oe.add(pe)}else{let re=v[Math.random()<.5?0:1],Ee=re===v[0]?10:12,pe=new ge(new ct(C,he,$),[re,re,y,y,re,re]);if(Yu(pe.geometry,C/Ee,he/Ee,$/Ee),pe.position.y=he/2,oe.add(pe),he>20){let I=new ge(new ct(C*.5,2,$*.5),y);I.position.y=he+1,oe.add(I)}}return{group:oe,w:C,h:he,d:$,gap:_c(0,4)}}let S=Ft("clouds",{mirror:!0});S.repeat.set(3,3);let E=new It({map:S,transparent:!0,depthWrite:!1,fog:!1,opacity:.95,side:Ht}),A=new ge(new In(3600,3600),E);A.rotation.x=-Math.PI/2,A.position.y=330,A.renderOrder=-2,i.add(A),t.clouds=A;let R=new Io,b=Ft("lensflare0",{mirror:!1}),M=Ft("lensflare3",{mirror:!1});R.addElement(new ri(b,420,0,new Te(16773840))),R.addElement(new ri(M,60,.6)),R.addElement(new ri(M,70,.7)),R.addElement(new ri(M,120,.9)),R.addElement(new ri(M,70,1));let P=new Tt;P.add(R),i.add(P),t.flare=P;let D=Dt({color:5915440,roughness:1}),F=X=>Dt({map:Ft(X,{mirror:!1}),alphaTest:.5,side:Ht,roughness:.9,metalness:0}),B=(X,C)=>new In(X,C),q=new ln(.22,.42,1,7);q.translate(0,.5,0);let k={trunk:{geometry:q,material:D,h:3.4},cards:{geometry:B(5.6,3.65),material:F("leaf_oak"),n:9,rx:3.6,ry:2.4,yc:5.6,tilt:.55,flat:!1},obstacle:.5},Q={trunk:{geometry:q,material:D,h:6},cards:{geometry:B(4.2,2.8),material:F("leaf_pine"),n:11,rx:2.6,ry:4.6,yc:7.6,tilt:.35,flat:!0,cone:!0},obstacle:.45},V=B(1.1,.75);V.translate(0,.33,0);let ne=Dt({map:Ft("grass_tuft",{mirror:!1}),alphaTest:.5,side:Ht,roughness:1,metalness:0}),ce=Dt({map:Ft("grass_tuft",{mirror:!1}),alphaTest:.5,side:Ht,roughness:1,metalness:0,color:13217914});t.treeStyles={oakTree:k,pineTree:Q};let me=vc("tree_oak",11,768/670,{sink:.2}),ze=vc("tree_pine",14,476/1045),et=vc("cactus",6,362/1059),Z=vc("tree_snowpine",12,599/1084),le={geometry:new qa(1.2,0),material:Dt({color:11043420,roughness:1}),y:.5,shadow:!0},Ae={geometry:new Si(1.5,8,6),material:Dt({color:15791615,roughness:1}),y:.2};t.worlds={country:{ground:"grass",tile:7,shoulder:"sand",shoulderTint:9075290,backdrop:"hills_green",backdropH:70,guardrail:!0,scatter:[{tree:k,perChunk:12,lat:[12,60],scale:[.8,1.35]},{tree:Q,perChunk:10,lat:[13,75],scale:[.8,1.3]},{parts:me,perChunk:10,lat:[60,140],scale:[.9,1.4],billboard:!0},{parts:ze,perChunk:10,lat:[60,160],scale:[.9,1.4],billboard:!0},{grass:{geometry:V,material:ne},perChunk:220,lat:[10.2,26],scale:[.6,1.2]}],fog:{day:13229292,sunset:15316106,night:659230},fogFar:430,offroadGrip:.6},desert:{ground:"sand",tile:8,shoulder:"sand",shoulderTint:16777215,backdrop:"mesas_desert",backdropH:46,guardrail:!0,scatter:[{parts:et,perChunk:12,lat:[11,70],scale:[.8,1.6],billboard:!0,obstacle:.4},{parts:[le],perChunk:16,lat:[9,90],scale:[.5,2.4],obstacle:1},{grass:{geometry:V,material:ce},perChunk:90,lat:[10.2,30],scale:[.5,1]}],fog:{day:15128253,sunset:15771242,night:1183522},fogFar:470,offroadGrip:.5},snow:{ground:"snow",tile:6,shoulder:"snow",shoulderTint:16777215,backdrop:"mountains_snow",backdropH:110,poles:!0,scatter:[{parts:Z,perChunk:18,lat:[11,80],scale:[.7,1.5],billboard:!0,obstacle:.5},{parts:[Ae],perChunk:12,lat:[8,30],scale:[.6,1.8]},{tree:Q,perChunk:6,lat:[12,50],scale:[.8,1.2]}],fog:{day:14411506,sunset:15776144,night:857128},fogFar:340,offroadGrip:.35},city:{ground:"pavement",tile:4,shoulder:"pavement",shoulderTint:16777215,backdrop:"skyline_city",backdropH:90,buildings:!0,makeBuilding:_,scatter:[],fog:{day:13622248,sunset:15247480,night:724506},fogFar:400,offroadGrip:.9,fMats:v}};let fe=Ft("house_front",{mirror:!0}),Re=Ft("precast_wall",{mirror:!0}),Oe=Ft("roof_tiles",{mirror:!0}),Le=Dt({map:fe,roughness:.9,metalness:0}),qe=Dt({map:Re,roughness:1,metalness:0}),j=Dt({map:Oe,roughness:.9,metalness:0});Oe.repeat.set(2,2),t.worlds.lenasia={ground:"grass",tile:7,groundTint:12037496,shoulder:"sand",shoulderTint:16777215,backdrop:"hills_green",backdropH:38,map:"lenasia.json",fog:{day:14081510,sunset:15316106,night:659230},fogFar:520,offroadGrip:.55,scatter:[],tex:Ft,fMats:v,fMatsHouse:Le,wallMat:qe,roofTileMat:j,makeBuilding:_,treeStyles:null,start:[-743,-2581],showroomAt:null};for(let X in t.worlds)t.worlds[X].mats=m;return t.worlds.lenasia.treeStyles={oakTree:k,pineTree:Q},t.mapData={},t.setWorld=X=>{let C=t.worlds[X];t.current=C,t.currentName=X;let he=Ft(C.ground);he.repeat.set(1600/C.tile,1600/C.tile),a.map=he,a.needsUpdate=!0;let $=Ft(C.shoulder);m.shoulder.map=$,m.shoulder.color.setHex(C.shoulderTint),m.shoulder.needsUpdate=!0;let oe=Ft(C.backdrop,{mirror:!0});if(oe.repeat.set(4,1),l.map=oe,l.needsUpdate=!0,h.scale.y=C.backdropH/150,h.position.y=C.backdropH/2-2,a.color.setHex(C.groundTint||16777215),t.road&&t.road.dispose(),t.road=null,C.map){t.loading=!0;let re=Ee=>{let pe=new xc(i,C,Ee),I=pe.startPose(),w=pe.nearest(I.x,I.z,{skipMinor:!0}),z=-Math.sin(w.h),Y=-Math.cos(w.h),se=Y,J=-z;C.showroomAt=[w.px+z*70+se*(w.w/2+12),w.pz+Y*70+J*(w.w/2+12),w.h+Math.PI/2],t.road=pe,t.loading=!1};t.mapData[C.map]?re(t.mapData[C.map]):fetch(C.map).then(Ee=>Ee.json()).then(Ee=>{t.mapData[C.map]=Ee,t.current===C&&re(Ee)})}else t.road=new mc(i,C)},t.setTime=X=>{let C=t.current,he=X==="night",$=X==="rain",oe=n.material.uniforms,re,Ee;X==="day"?(re=48,Ee=160,oe.turbidity.value=2.2,oe.rayleigh.value=1,oe.mieCoefficient.value=.004,oe.mieDirectionalG.value=.8):$?(re=35,Ee=160,oe.turbidity.value=20,oe.rayleigh.value=.2,oe.mieCoefficient.value=.1,oe.mieDirectionalG.value=.999):X==="sunset"?(re=4,Ee=235,oe.turbidity.value=10,oe.rayleigh.value=3,oe.mieCoefficient.value=.006,oe.mieDirectionalG.value=.85):(re=-4,Ee=180,oe.turbidity.value=2,oe.rayleigh.value=.3,oe.mieCoefficient.value=.002,oe.mieDirectionalG.value=.7);let pe=So.degToRad(90-re),I=So.degToRad(Ee),w=new L().setFromSphericalCoords(1,pe,I);oe.sunPosition.value.copy(w),t.envRT&&t.envRT.dispose();let z=new gr;z.add(n),t.envRT=o.fromScene(z,0,.1,200),i.add(n),i.environment=t.envRT.texture,i.background=null,X==="day"?(s.color.setHex(16774368),s.intensity=4.2,r.color.setHex(12572927),r.groundColor.setHex(7041116),r.intensity=1,i.environmentIntensity=1):$?(s.color.setHex(13620960),s.intensity=1.1,r.color.setHex(10135224),r.groundColor.setHex(3817284),r.intensity=1.6,i.environmentIntensity=.9):X==="sunset"?(s.color.setHex(16754784),s.intensity=3.2,r.color.setHex(15906186),r.groundColor.setHex(4865846),r.intensity=.8,i.environmentIntensity=1):(s.color.setHex(9412824),s.intensity=1.3,r.color.setHex(3952256),r.groundColor.setHex(1315864),r.intensity=1.5,i.environmentIntensity=.7),t.sunDir=w.clone().normalize(),he&&t.sunDir.set(.3,.8,-.2).normalize(),i.fog=new Ua($?9345190:C.fog[X],$?20:40,C.fogFar*(he?.7:$?.55:1)),l.color.setHex(he?2765648:X==="sunset"?16765096:$?8226708:16777215),m.road.roughness=$?.3:1,m.road.envMapIntensity=$?1.6:.6,m.road.color.setHex($?9079434:16777215),m.pool.opacity=he?.5:0,t.rain=$;for(let Y of m.billboards)Y.emissiveIntensity=he?.9:0;if(m.sign.emissiveIntensity=he?.9:0,v.forEach(Y=>{Y.emissiveIntensity=he?.55:0,Y.emissive.setHex(he?16769968:16777215)}),m.lampGlow.emissiveIntensity=he?5:0,C.nightNow=he,t.road&&t.road.signMats)for(let Y of t.road.signMats)Y.emissiveIntensity=he?.8:0;E.color.setHex(he?3818080:X==="sunset"?16763296:$?7305092:16777215),E.opacity=he?.6:$?1:.95,P.visible=!he&&!$,t.night=he},t.follow=(X,C,he,$)=>{let oe=t.current;c.position.set(X,0,C),a.map&&a.map.offset.set(X/oe.tile%2,-C/oe.tile%2),h.position.x=X,h.position.z=C,A.position.x=X,A.position.z=C,S.offset.set(X/1200%2+performance.now()*4e-6,-C/1200%2),P.position.set(X+t.sunDir.x*900,t.sunDir.y*900,C+t.sunDir.z*900),s.target.position.set(X+he*8,0,C+$*8),s.position.copy(t.sunDir).multiplyScalar(80).add(s.target.position)},t}function BM(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);let f=h.index.array;for(let u=0;u<f.length;u++)o[c+u]=f[u]+a;a+=h.attributes.position.count,c+=f.length}let l=new Qe;return l.setAttribute("position",new He(n,3)),l.setAttribute("normal",new He(s,3)),l.setAttribute("uv",new He(r,2)),l.setIndex(new He(o,1)),l}var Po=(i,e,t)=>Math.max(e,Math.min(t,i)),Ls=class{constructor(e){this.spec=e,this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yawRate=0,this.throttle=0,this.brake=0,this.steer=0,this.offRoad=!1,this.surfaceGrip=1,this.steerAngle=0,this.vf=0,this.vl=0,this.halfW=e.w/2,this.halfL=e.len/2,this.mass=e.len>5?2.2:1.6}fwd(){return[-Math.sin(this.h),-Math.cos(this.h)]}right(){return[Math.cos(this.h),-Math.sin(this.h)]}speed(){return Math.hypot(this.vx,this.vz)}circles(){let[e,t]=this.fwd(),n=this.halfL*.55,s=this.halfW+.08;return[[this.x+e*n,this.z+t*n,s],[this.x-e*n,this.z-t*n,s]]}update(e,t,n,s,r){let[o,a]=this.fwd(),[c,l]=this.right(),h=this.vx*o+this.vz*a,f=this.vx*c+this.vz*l,u=t*(r?1.3:1)*(this.offRoad?.25:1);this.throttle>0&&(h+=this.throttle*n*(r?2:1)*Math.max(.12,1-.7*Po(h/u,0,1))*e),this.brake>0&&(h>.5?h-=this.brake*16*e:h=Math.max(h-this.brake*4*e,-4)),h-=h*(this.offRoad?1.4:.12)*e,h-=.0018*h*Math.abs(h)*e,h>u&&(h+=(u-h)*Math.min(1,2*e)),Math.abs(h)<.05&&this.throttle===0&&this.brake===0&&(h=0);let d=Math.abs(h),g=s*.09,x=-this.steer*g*Po(d/6,0,1)*(1/(1+d/28))*Math.sign(h||1);this.yawRate+=(x-this.yawRate)*Math.min(1,8*e),this.h+=this.yawRate*e,this.steerAngle+=(this.steer*.42-this.steerAngle)*Math.min(1,10*e);let m=(this.offRoad?2.2:7.5)*this.surfaceGrip;f-=f*Math.min(1,m*e);let p=this.yawRate*d*.08*(this.offRoad?2.5:1);f+=p*e,f=Po(f,-12,12);let[v,y]=this.fwd(),[_,S]=this.right();this.vx=v*h+_*f,this.vz=y*h+S*f,this.x+=this.vx*e,this.z+=this.vz*e,this.vf=h,this.vl=f}};function yc(i,e,t=.35){let n=0,s=i.circles(),r=e.circles();for(let[o,a,c]of s)for(let[l,h,f]of r){let u=l-o,d=h-a,g=Math.hypot(u,d),x=c+f;if(g>=x||g<1e-4)continue;let m=u/g,p=d/g,v=x-g,y=i.mass,_=e.mass,S=y+_;i.x-=m*v*(_/S),i.z-=p*v*(_/S),e.x+=m*v*(y/S),e.z+=p*v*(y/S);let E=e.vx-i.vx,A=e.vz-i.vz,R=E*m+A*p;if(R<0){let b=-(1+t)*R/(1/y+1/_);i.vx-=b*m/y,i.vz-=b*p/y,e.vx+=b*m/_,e.vz+=b*p/_;let[M,P]=i.right(),D=m*M+p*P;i.yawRate+=D*Math.min(2,-R*.08),e.yawRate-=D*Math.min(2,-R*.08),n=Math.max(n,-R)}}return n}function jp(i,e,t,n,s=.25){let r=0;for(let[o,a,c]of i.circles()){let l=o-e,h=a-t,f=Math.hypot(l,h),u=c+n;if(f>=u||f<1e-4)continue;let d=l/f,g=h/f,x=u-f;i.x+=d*x,i.z+=g*x;let m=i.vx*d+i.vz*g;m<0&&(i.vx-=(1+s)*m*d,i.vz-=(1+s)*m*g,r=Math.max(r,-m),i.yawRate+=(Math.random()-.5)*Math.min(3,-m*.15))}return r}function Qp(i,e,t,n,s,r,o=.2){let a=0,c=Math.cos(r),l=Math.sin(r);for(let[h,f,u]of i.circles()){let d=h-e,g=f-t,x=d*c-g*l,m=-d*l-g*c,p=Po(x,-n,n),v=Po(m,-s,s),y=x-p,_=m-v,S=Math.hypot(y,_),E,A,R;if(S>1e-4){if(S>=u)continue;E=y/S,A=_/S,R=u-S}else{let D=n-Math.abs(x),F=s-Math.abs(m);D<F?(E=Math.sign(x)||1,A=0,R=D+u):(E=0,A=Math.sign(m)||1,R=F+u)}let b=E*c-A*l,M=-E*l-A*c;i.x+=b*R,i.z+=M*R;let P=i.vx*b+i.vz*M;P<0&&(i.vx-=(1+o)*P*b,i.vz-=(1+o)*P*M,a=Math.max(a,-P))}return a}var Lo=(i,e,t)=>Math.max(e,Math.min(t,i)),ot={ctx:null,on:!0,engine:null,wind:null,gear:0,shiftT:0,rpm:.2,rain:!1,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i,t=this.master=e.createGain();t.gain.value=0,t.connect(e.destination);let n=e.createGain();n.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=2.5;let r=e.createOscillator();r.type="sawtooth",r.frequency.value=60;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=61;let a=e.createGain();a.gain.value=.5;let c=e.createOscillator();c.type="square",c.frequency.value=30;let l=e.createGain();l.gain.value=.3;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=180,h.Q.value=1.2;let f=e.createGain();f.gain.value=.5,r.connect(s),o.connect(a),a.connect(s),c.connect(l),l.connect(s),s.connect(n),r.connect(h),h.connect(f),f.connect(n),n.connect(t),r.start(),c.start(),o.start(),this.engine={o1:r,o2:c,o3:o,lp:s,eg:n,ex:h};let u=e.createBuffer(1,e.sampleRate*2,e.sampleRate),d=u.getChannelData(0);for(let x=0;x<d.length;x++)d[x]=Math.random()*2-1;let g=(x,m,p)=>{let v=e.createBufferSource();v.buffer=u,v.loop=!0;let y=e.createBiquadFilter();y.type=x,y.frequency.value=m,p&&(y.Q.value=p);let _=e.createGain();return _.gain.value=0,v.connect(y),y.connect(_),_.connect(t),v.start(),{g:_,f:y}};this.wind={...g("lowpass",600),buf:u},this.squeal=g("bandpass",1900,6),this.gravel=g("lowpass",900),this.rainN=g("highpass",2600),this.setOn(this.on)},setOn(i){this.on=i,this.master&&(this.master.gain.value=i?.8:0)},resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()},update(i,e,t,n,s=0,r=!1,o=.016){if(!this.engine)return;let a=6,c=e/a,l=Math.min(a-1,Math.floor(i/c));l!==this.gear&&(this.shiftT=.14,this.gear=l),this.shiftT=Math.max(0,this.shiftT-o);let h=Lo((i-l*c)/c,0,1),f=i<.5?t?.45:.15:.25+h*.7+(t?.05:0);this.rpm+=(f-this.rpm)*Math.min(1,(t?6:3)*o);let u=this.shiftT>0,d=u?this.rpm*.75:this.rpm,g=42+d*125+l*8+(n?35:0),x=(v,y,_)=>{v.value+=(y-v.value)*_};x(this.engine.o1.frequency,g,.3),x(this.engine.o3.frequency,g*1.012,.3),x(this.engine.o2.frequency,g/2,.3),x(this.engine.ex.frequency,120+d*500,.2),x(this.engine.lp.frequency,260+d*1500+(t?350:0),.15),x(this.engine.eg.gain,(t?.17:.07+d*.04)*(u?.55:1),.15);let m=Math.pow(Lo(i/60,0,1),2);x(this.wind.g.gain,m*.12,.08);let p=r?0:Lo((Math.abs(s)-2.2)/5,0,1)*Lo(i/12,0,1);x(this.squeal.g.gain,p*.16,.2),x(this.squeal.f.frequency,1700+p*500,.1),x(this.gravel.g.gain,r?Lo(i/15,0,1)*.2:0,.15),x(this.rainN.g.gain,this.rain?.045:0,.05)},horn(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime;for(let e of[420,525]){let t=this.ctx.createOscillator();t.type="square",t.frequency.value=e;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=1200;let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(.18,i+.03),s.gain.setValueAtTime(.18,i+.45),s.gain.exponentialRampToValueAtTime(1e-4,i+.6),t.connect(n),n.connect(s),s.connect(this.master),t.start(i),t.stop(i+.65)}},bump(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.wind.buf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=250+i*400;let s=this.ctx.createGain();if(s.gain.setValueAtTime(.55*i,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.22+i*.2),t.connect(n),n.connect(s),s.connect(this.master),t.start(e),t.stop(e+.5),i>.4){let r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(900,e),r.frequency.exponentialRampToValueAtTime(220,e+.15);let o=this.ctx.createGain();o.gain.setValueAtTime(.25*i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.2),r.connect(o),o.connect(this.master),r.start(e),r.stop(e+.22)}},ping(i=0){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=880*Math.pow(2,Math.min(12,i)/12),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(t*1.5,e+.08);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.22,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.25)},fanfare(i=!1){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=i?[523,659,784,1047]:[659,784,1047];t.forEach((n,s)=>{let r=this.ctx.createOscillator();r.type="triangle",r.frequency.value=n;let o=this.ctx.createGain(),a=e+s*.11;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+(s===t.length-1?.6:.25)),r.connect(o),o.connect(this.master),r.start(a),r.stop(a+.7)})},click(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="highpass",t.frequency.value=2500;let n=this.ctx.createGain();n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+.06)},whoosh(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(3e3,i+.6),t.Q.value=1.5;let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.3,i+.15),n.gain.exponentialRampToValueAtTime(1e-4,i+.9),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+1)}};var Mc=class{constructor(e,t=1400){this.n=t,this.box={w:60,h:30,d:60};let n=new Float32Array(t*3*2);this.off=new Float32Array(t*3);for(let r=0;r<t;r++)this.off[r*3]=Math.random()*this.box.w-this.box.w/2,this.off[r*3+1]=Math.random()*this.box.h,this.off[r*3+2]=Math.random()*this.box.d-this.box.d/2;this.geo=new Qe,this.geo.setAttribute("position",new He(n,3));let s=new ws({color:13623536,transparent:!0,opacity:.35,fog:!0});this.mesh=new _r(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh),this.t=0}set(e){this.mesh.visible=e}update(e,t,n,s,r){if(!this.mesh.visible)return;this.t+=e;let o=this.geo.attributes.position.array,{w:a,h:c,d:l}=this.box,h=28,f=-s*.05,u=-r*.05;for(let d=0;d<this.n;d++){let g=this.off[d*3],x=this.off[d*3+2],m=((this.off[d*3+1]-this.t*h)%c+c)%c,p=t+g,v=n+x;o[d*6]=p,o[d*6+1]=m,o[d*6+2]=v,o[d*6+3]=p+f,o[d*6+4]=m+1.1,o[d*6+5]=v+u}this.geo.attributes.position.needsUpdate=!0}},bc=class{constructor(e,t=320){this.max=t,this.head=0;let n=new Float32Array(t*4*3),s=new Float32Array(t*4),r=new Uint16Array(t*6);for(let a=0;a<t;a++){let c=a*4;r.set([c,c+1,c+2,c,c+2,c+3],a*6)}this.geo=new Qe,this.geo.setAttribute("position",new He(n,3)),this.geo.setAttribute("aA",new He(s,1)),this.geo.setIndex(new He(r,1));let o=new At({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{},vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.05, 0.05, 0.05, vA * 0.55); }"});this.mesh=new ge(this.geo,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.last=[null,null]}clear(){this.geo.attributes.aA.array.fill(0),this.geo.attributes.aA.needsUpdate=!0,this.last=[null,null]}update(e,t,n,s,r=.1){for(let o=0;o<2;o++){let a=t[o];if(e<=0){this.last[o]=null;continue}let c=this.last[o];if(!(c&&Math.hypot(a[0]-c[0],a[1]-c[1])<.35)){if(c){let l=this.head;this.head=(this.head+1)%this.max;let h=this.geo.attributes.position.array,f=this.geo.attributes.aA.array,u=.13;h.set([c[0]-n*u,r,c[1]-s*u,c[0]+n*u,r,c[1]+s*u,a[0]+n*u,r,a[1]+s*u,a[0]-n*u,r,a[1]-s*u],l*12),f.fill(e,l*4,l*4+4),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}this.last[o]=[a[0],a[1]]}}}};var Sc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zM=new Wi(-1,1,1,-1,0,1),Ku=class extends Qe{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},kM=new Ku,ns=class{constructor(e){this._mesh=new ge(kM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Nr=class extends yn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qn.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ns(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Do=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wc=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ec=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ee);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nr(Sc),this.copyPass.material.blending=Jn,this.clock=new Tr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Do!==void 0&&(o instanceof Do?n=!0:o instanceof wc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tc=class extends yn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var em={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Fr=class i extends yn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let u=new $t(r,o,{type:vn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new $t(r,o,{type:vn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=em;this.highPassUniforms=Qn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Sc;this.copyUniforms=Qn.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Rn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new It,this.fsQuad=new ns(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fr.BlurDirectionX=new ee(1,0);Fr.BlurDirectionY=new ee(0,1);var tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ac=class extends yn{constructor(){super();let e=tm;this.uniforms=Qn.clone(e.uniforms),this.material=new Ki({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ie=i=>document.getElementById(i),oi=(i,e,t)=>Math.max(e,Math.min(t,i)),Zu=(i,e,t)=>i+(e-i)*t,Fn=(i,e)=>i+Math.random()*(e-i),HM=(i,e)=>Math.floor(Fn(i,e+1)),No=i=>i[Math.floor(Math.random()*i.length)],cm="kidcars-v3",Se={car:0,color:0,world:"country",time:"day",traffic:!0,sound:!0,tilt:!1,cam:0,controls:"wheel",eco:!0};try{Object.assign(Se,JSON.parse(localStorage.getItem(cm)||"{}"))}catch(i){}zt[Se.car]||(Se.car=0);function Sn(){try{localStorage.setItem(cm,JSON.stringify(Se))}catch(i){}}var lm=ie("c"),kr=/[?&]test/.test(location.search),on=new Da({canvas:lm,antialias:!kr,powerPreference:"high-performance"});on.setPixelRatio(kr?.35:Math.min(window.devicePixelRatio||1,Se.eco?1:1.5));on.shadowMap.enabled=!kr;on.shadowMap.type=Se.eco?yo:ec;on.toneMapping=Mo;on.toneMappingExposure=.5;var hn=new gr,Rt=new kt(60,1,.3,1400);function kc(){let i=window.innerWidth,e=window.innerHeight;on.setSize(i,e,!1),Rt.aspect=i/e,Rt.updateProjectionMatrix(),ai&&(ai.setPixelRatio(on.getPixelRatio()),ai.setSize(i,e))}window.addEventListener("resize",kc);var _e=Jp(hn,on);kp(hn);var Br=Gp(hn),tf=new Mc(hn),hm=new bc(hn),ss=new ht;{let i=new ge(new ln(4.6,4.9,.14,56),new Bt({color:1778736,roughness:.25,metalness:.6,envMapIntensity:1.2}));i.position.y=.07,i.receiveShadow=!0,ss.add(i);let e=new ge(new Yi(4.75,.07,8,64),new Bt({color:13677676,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.y=.14,ss.add(e),ss.visible=!1,hn.add(ss)}var bn=new fc,rs=null,VM={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.12}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`},ai=null,nm=null,af=!kr&&!Se.eco;function GM(){let i=new $t(1,1,{type:vn,samples:2});ai=new Ec(on,i),ai.addPass(new Tc(hn,Rt)),nm=new Fr(new ee(256,128),.18,.4,1.6),ai.addPass(nm),ai.addPass(new Nr(VM)),ai.addPass(new Ac)}GM();kc();var nf=0;function um(){let i=!!Se.eco;kr||(on.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.5)),af=!i&&Uo>1),nf=i&&!kr?1e3/30:0;let e=i?1024:2048;_e.sun.shadow.mapSize.x!==e&&(_e.sun.shadow.mapSize.set(e,e),_e.sun.shadow.map&&(_e.sun.shadow.map.dispose(),_e.sun.shadow.map=null)),on.shadowMap.type=i?yo:ec,on.shadowMap.needsUpdate=!0,ie("optEco").textContent=i?"\u{1F50B}":"\u2728",ie("optEco").classList.toggle("off",!i),kc()}var zo=[13832735,1525449,16106776,1414215,15921906,1381914,16738835,7153881,2078920],WM=ie("loading"),XM=ie("loadfill"),cf=ie("loadtxt"),im=0,fm=0;function sm(i){im++,XM.style.width=Math.round(im/fm*100)+"%",i&&(cf.textContent=i)}async function qM(){let i=zt[Se.car].id;fm=zt.length+1,await Eo(i,!1),sm("Polishing the "+zt[Se.car].name+"\u2026");for(let e of zt)await Eo(e.id,!0),sm("Loading traffic\u2026");cf.textContent="Ready!",setTimeout(()=>WM.classList.add("hidden"),350),(async()=>{for(let e of zt)if(!To(e.id,!1)){try{await Eo(e.id,!1)}catch(t){console.warn(t)}St==="menu"&&zt[Se.car].id===e.id&&Fo()}})()}var Ns=60,Ii=new Qe,Pc=new Float32Array(Ns*3),dm=new Float32Array(Ns),pm=new Float32Array(Ns),Lc=new Float32Array(Ns*3);Ii.setAttribute("position",new He(Pc,3));Ii.setAttribute("aSize",new He(dm,1));Ii.setAttribute("aAlpha",new He(pm,1));Ii.setAttribute("aCol",new He(Lc,3));var YM=new At({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Te(7829367)}},vertexShader:"attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }"}),mm=new vr(Ii,YM);mm.frustumCulled=!1;hn.add(mm);var lf=[];for(let i=0;i<Ns;i++)lf.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,r:.5,g:.5,b:.5});var $u=0;function Dc(i,e,t,n,s){let r=lf[$u];$u=($u+1)%Ns,s?(r.r=s[0],r.g=s[1],r.b=s[2]):r.r=r.g=r.b=.45,r.x=i+Fn(-.3,.3),r.y=e,r.z=t+Fn(-.3,.3),r.vx=Fn(-.4,.4),r.vy=Fn(.8,1.6)*n,r.vz=Fn(-.4,.4),r.life=0,r.max=Fn(.9,1.8),r.size=Fn(.5,1)*n}function KM(i){for(let e=0;e<Ns;e++){let t=lf[e];t.life<t.max&&(t.life+=i,t.x+=t.vx*i,t.y+=t.vy*i,t.z+=t.vz*i,t.vy*=.98);let n=t.life/t.max,s=t.life<t.max;Pc[e*3]=t.x,Pc[e*3+1]=t.y,Pc[e*3+2]=t.z,dm[e]=s?t.size*(.6+n*2.2):0,pm[e]=s?(1-n)*.55:0,Lc[e*3]=t.r,Lc[e*3+1]=t.g,Lc[e*3+2]=t.b}Ii.attributes.position.needsUpdate=!0,Ii.attributes.aSize.needsUpdate=!0,Ii.attributes.aAlpha.needsUpdate=!0,Ii.attributes.aCol.needsUpdate=!0}var _t=null,On=zt[0],H=null,Uc=null,ae={s:0,idx:0,damage:0,totaled:!1,boostFuel:1,boosting:!1,shake:0,dist:0,menuAngle:.7,lastHitT:0,spin:0,combo:0,lastStarT:-9,saveT:0,missionT:0};function Fo(){_t&&(hn.remove(_t),uc(_t)),On=zt[Se.car],_t=hc(On.id,!To(On.id,!1),zo[Se.color]),hn.add(_t),Uc=new ht;for(let i of[-1,1]){let e=new wr(16774358,0,90,.55,.5,1);e.position.set(i*.65,.7,-On.len/2+.1),e.target.position.set(i*1.8,0,-45),Uc.add(e,e.target)}_t.add(Uc),H=new Ls(On),hf(),ko()}var Nn=[];for(let i=0;i<6;i++)Nn.push({mesh:null,spec:zt[0],body:null,lane:0,s:0,target:20,active:!1,idx:0});function gm(i,e){let t=HM(0,2),n=e?ae.s+Fn(120,420):ae.s-Fn(60,90);for(let r=0;r<10;r++){let o=!0;for(let a of Nn)a!==i&&a.active&&a.lane===t&&Math.abs(a.s-n)<50&&(o=!1);if(o)break;n+=40}i.mesh&&(hn.remove(i.mesh),uc(i.mesh)),i.spec=No(zt),i.mesh=hc(i.spec.id,!0,No(zo)),hn.add(i.mesh),i.body=new Ls(i.spec),i.lane=t,i.s=n,i.target=e?Fn(14,27):Fn(30,40);let s=_e.road.pointAt(n);i.body.x=s.x+s.rx*Ri[t],i.body.z=s.z+s.rz*Ri[t],i.body.h=s.h,i.body.vx=s.fx*i.target,i.body.vz=s.fz*i.target,i.idx=Math.floor(n/ei),i.active=!0,i.mesh.visible=!0,i.ahead=n>ae.s}function rm(i){i.mesh.position.set(i.body.x,0,i.body.z),i.mesh.rotation.y=i.body.h}function hf(){_e.setTime(Se.time),Lp(_e.night||_e.rain),Dp(_e.night?.5:1),tf.set(!!_e.rain),ot.rain=!!_e.rain,_t&&(_t.userData.paint.forEach(i=>i.envMapIntensity=_e.night?.6:1.25),Uc.children.forEach(i=>{i.isSpotLight&&(i.intensity=_e.night?400:0)}))}var gt={left:!1,right:!1,gas:!1,brake:!1,boost:!1,tilt:0,wheel:0},Nc=["btnLeft","btnRight","btnGas","btnBrake","btnBoost"],Fc={btnLeft:"left",btnRight:"right",btnGas:"gas",btnBrake:"brake",btnBoost:"boost"},Us=ie("wheel"),xm=ie("wheelimg"),Ci=0,Ut=null,sf=120,Mn=new Map,Hr=new Map;function uf(i,e){let t=Us.getBoundingClientRect();return Math.atan2(e-(t.top+t.height/2),i-(t.left+t.width/2))*180/Math.PI}function _m(i,e){let t=uf(i,e),n=t-Ut.last;for(;n>180;)n-=360;for(;n<-180;)n+=360;Ut.last=t,!(Math.abs(n)>120)&&(Ci=oi(Ci+n,-sf,sf),xm.style.transform=`rotate(${Ci}deg)`)}function Ds(i,e,t){let n=i.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}function Vr(){let i={};for(let e of Nc)i[Fc[e]]=!1;for(let e of Mn.values())if(!e.wheel)for(let t of Nc)Ds(ie(t),e.x,e.y)&&(i[Fc[t]]=!0);for(let e of Nc){let t=Fc[e],n=i[t]||Hr.has(t);gt[t]=n,ie(e).classList.toggle("pressed",n)}}function ZM(i){i.cancelable&&i.preventDefault(),i.type==="touchstart"&&(ot.init(),ot.resume());let e=new Set(Array.from(i.touches).map(t=>t.identifier));for(let t of Array.from(Mn.keys()))if(!e.has(t)&&!Array.from(i.changedTouches).some(n=>n.identifier===t)){let n=Mn.get(t);Mn.delete(t),n&&n.wheel&&Ut&&Ut.id===t&&(Ut=null),n&&n.lock&&Gr("reconcile "+i.type)}for(let t of Array.from(i.changedTouches)){let n=t.identifier;if(i.type==="touchstart"){let s=Se.controls==="wheel"&&St==="drive"&&Ds(Us,t.clientX,t.clientY)&&!Ut;Mn.set(n,{x:t.clientX,y:t.clientY,wheel:s,lock:St==="menu"&&Ds(ie("btnLock"),t.clientX,t.clientY)}),Mn.get(n).lock&&Am("touch"),s&&(Ut={id:n,last:uf(t.clientX,t.clientY)}),St==="drive"&&Ds(ie("btnHorn"),t.clientX,t.clientY)&&(ff(),ie("btnHorn").classList.add("pressed"),setTimeout(()=>ie("btnHorn").classList.remove("pressed"),200))}else if(i.type==="touchmove"){let s=Mn.get(n);if(!s)continue;s.x=t.clientX,s.y=t.clientY,s.wheel&&Ut&&Ut.id===n&&_m(t.clientX,t.clientY)}else{let s=Mn.get(n);Mn.delete(n),s&&s.wheel&&Ut&&Ut.id===n&&(Ut=null),s&&s.lock&&Gr("touchend "+i.type)}}Vr()}for(let i of["touchstart","touchmove","touchend","touchcancel"])document.addEventListener(i,ZM,{passive:!1});function $M(i,e){let t=ie(i);t.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.preventDefault(),Hr.set(e,!0),Vr(),ot.init(),ot.resume())});let n=s=>{s&&s.pointerType==="touch"||(Hr.delete(e),Vr())};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n)}Nc.forEach(i=>$M(i,Fc[i]));window.addEventListener("blur",()=>{Mn.clear(),Hr.clear(),Ut=null,Gr("blur"),Vr()});Us.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),Us.setPointerCapture(i.pointerId),Ut={id:"mouse",last:uf(i.clientX,i.clientY)})});Us.addEventListener("pointermove",i=>{i.pointerType==="touch"||!Ut||Ut.id!=="mouse"||_m(i.clientX,i.clientY)});var vm=i=>{i.pointerType!=="touch"&&Ut&&Ut.id==="mouse"&&(Ut=null)};Us.addEventListener("pointerup",vm);Us.addEventListener("pointercancel",vm);function ff(){ot.horn(),ke.horns++,is("horn")}ie("btnHorn").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),ot.init(),ot.resume(),ff())});ie("btnCam").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(Se.cam=(Se.cam+1)%3,Sn())});ie("btnFix").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&yf()});document.addEventListener("touchend",i=>{if(St==="drive")for(let e of Array.from(i.changedTouches))Ds(ie("btnCam"),e.clientX,e.clientY)&&(Se.cam=(Se.cam+1)%3,Sn()),Ds(ie("btnPhoto"),e.clientX,e.clientY)&&gf(),!ie("totaled").classList.contains("hidden")&&Ds(ie("btnFix"),e.clientX,e.clientY)&&yf()},{passive:!1});function JM(i){Ut||(Ci+=(0-Ci)*Math.min(1,9*i),Math.abs(Ci)<.3&&(Ci=0),xm.style.transform=`rotate(${Ci}deg)`),gt.wheel=Ci/sf}function ym(){let i=Se.controls==="wheel";ie("leftpad").classList.toggle("hidden",i),ie("wheel").classList.toggle("hidden",!i),ie("rightpad").classList.toggle("pedals",i),ie("optCtl").textContent=i?"\u{1F3A1}":"\u{1F579}\uFE0F"}window.addEventListener("keydown",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(gt.left=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(gt.right=!0),(i.code==="ArrowUp"||i.code==="KeyW")&&(gt.gas=!0),(i.code==="ArrowDown"||i.code==="KeyS")&&(gt.brake=!0),(i.code==="ShiftLeft"||i.code==="Space")&&(gt.boost=!0),i.code==="KeyH"&&ff(),i.code==="KeyC"&&(Se.cam=(Se.cam+1)%3,Sn()),i.code==="KeyF"&&yf(),i.code==="KeyP"&&gf(),i.code==="Escape"&&(St==="drive"?Hc():St==="pause"&&Em())});window.addEventListener("keyup",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(gt.left=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(gt.right=!1),(i.code==="ArrowUp"||i.code==="KeyW")&&(gt.gas=!1),(i.code==="ArrowDown"||i.code==="KeyS")&&(gt.brake=!1),(i.code==="ShiftLeft"||i.code==="Space")&&(gt.boost=!1)});window.addEventListener("deviceorientation",i=>{if(i.beta==null)return;let e=i.beta/22,t=screen.orientation&&screen.orientation.angle||window.orientation||0;(t===270||t===-90)&&(e=-e),gt.tilt=oi(e,-1,1)});var Mm=ie("menu"),bm=ie("hud"),St="menu";function cs(){ie("carname").textContent=zt[Se.car].name,document.querySelectorAll("#worldRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.world===Se.world)),document.querySelectorAll("#timeRow .opt").forEach(i=>i.classList.toggle("on",i.dataset.time===Se.time)),ie("optTraffic").classList.toggle("off",!Se.traffic),ie("optSound").classList.toggle("off",!Se.sound),ie("optSound").textContent=Se.sound?"\u{1F50A}":"\u{1F507}",ie("optTilt").classList.toggle("off",!Se.tilt),document.querySelectorAll(".swatch").forEach((i,e)=>i.classList.toggle("on",e===Se.color))}var jM=ie("colors");zo.forEach((i,e)=>{let t=document.createElement("button");t.className="swatch",t.style.background="#"+i.toString(16).padStart(6,"0"),t.addEventListener("pointerdown",()=>{Se.color=e,Sn(),Fo(),cs()}),jM.appendChild(t)});function Sm(i){Se.car=(Se.car+i+zt.length)%zt.length,Sn(),Fo(),cs(),ae.menuAngle=.7,To(zt[Se.car].id,!1)||Eo(zt[Se.car].id,!1).then(()=>{St==="menu"&&zt[Se.car].id===On.id&&Fo()})}ie("prevCar").addEventListener("pointerdown",i=>{i.preventDefault(),Sm(-1)});ie("nextCar").addEventListener("pointerdown",i=>{i.preventDefault(),Sm(1)});document.querySelectorAll("#worldRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Se.world=i.dataset.world,Sn(),_e.setWorld(Se.world),Hp(),hf(),cs()}));function df(){ie("bookstars").textContent="\u2B50 "+ke.stars,ie("starnum").textContent=ke.stars;let i=Object.keys(ke.stickers).length;ie("bookstats").textContent=`${i} / ${dc.length} stickers \xB7 ${ke.km.toFixed(1)} km driven \xB7 ${ke.missions} missions \xB7 ${ke.deliveries} recliners delivered`;let e=ie("bookgrid");e.innerHTML="";for(let t of dc){let n=document.createElement("div");n.className="sticker"+(ke.stickers[t.id]?"":" locked"),n.innerHTML=`<span class="e">${t.e}</span><span class="n">${t.n}</span>`,e.appendChild(n)}}ie("btnBook").addEventListener("pointerdown",i=>{i.preventDefault(),df(),ie("book").classList.remove("hidden")});ie("btnBookClose").addEventListener("pointerdown",i=>{i.preventDefault(),ie("book").classList.add("hidden")});var rf=[],Oc=!1;function as(i,e,t){if(rf.push({big:i,txt:e,confetti:t}),Oc)return;let n=()=>{let s=rf.shift();if(!s){Oc=!1;return}Oc=!0;let r=ie("toast");if(r.classList.remove("hidden"),ie("toastbig").textContent=s.big,ie("toasttxt").textContent=s.txt,r.style.animation="none",r.offsetWidth,r.style.animation="",s.confetti){let o=ie("confetti"),a=["#D0B46C","#ef4444","#3b82f6","#22c55e","#f59e0b","#ffffff"];for(let c=0;c<36;c++){let l=document.createElement("i");l.style.left=Math.random()*100+"%",l.style.background=No(a),l.style.animationDelay=Math.random()*.6+"s",l.style.animationDuration=1.8+Math.random()*1.2+"s",o.appendChild(l),setTimeout(()=>l.remove(),3200)}}setTimeout(()=>{r.classList.add("hidden"),setTimeout(n,150)},2300)};n()}function is(i,e){if(St!=="drive")return;let t=bn.event(i,e);t==="pickup"?(eb(),as("GOT IT! \u{1F6CB}\uFE0F",bn.label().text),ot.fanfare(),pf()):t==="done"&&QM()}function QM(){let i=bn.cur;ke.stars+=i.reward,ke.missions++,i.kind==="deliver"&&(ke.deliveries++,mf()),as("GREAT JOB!",`+${i.reward} \u2B50`,!0),ot.fanfare(!0),ie("starnum").textContent=ke.stars,Is();for(let e of Ro())as("NEW STICKER!",`${e.e} ${e.n}`);ae.missionT=3.5}function wm(){bn.next({isMap:!!_e.road.isMap,road:_e.road,x:H.x,z:H.z,maxKmh:On.maxKmh,traffic:Se.traffic,showroomAt:_e.current.showroomAt}),pf(),as(bn.cur.icon+" "+bn.cur.text,"New mission!")}var om="";function pf(){let i=bn.label(),e=i.icon+i.text+i.prog;e!==om&&(om=e,ie("micon").textContent=i.icon,ie("mtext").textContent=i.text,bn.target()||(ie("mprog").textContent=i.prog))}function eb(){rs||(rs=Wp());let i=new nn().setFromObject(_t);rs.position.set(0,i.max.y-.05,-.1),_t.add(rs)}function mf(){rs&&rs.parent&&rs.parent.remove(rs)}document.querySelectorAll("#timeRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{Se.time=i.dataset.time,Sn(),hf(),cs()}));ie("optTraffic").addEventListener("pointerdown",()=>{Se.traffic=!Se.traffic,Sn(),cs()});ie("optSound").addEventListener("pointerdown",()=>{Se.sound=!Se.sound,Sn(),ot.init(),ot.setOn(Se.sound),cs()});ie("optCtl").addEventListener("pointerdown",()=>{Se.controls=Se.controls==="wheel"?"buttons":"wheel",Sn(),ym()});ie("optEco").addEventListener("pointerdown",()=>{Se.eco=!Se.eco,Sn(),um()});ie("optTilt").addEventListener("pointerdown",()=>{Se.tilt=!Se.tilt,Sn(),cs(),Se.tilt&&typeof DeviceOrientationEvent!="undefined"&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})});ie("btnPlay").addEventListener("pointerdown",i=>{i.preventDefault(),_e.road&&(ot.init(),ot.resume(),ot.setOn(Se.sound),ib())});ie("btnPause").addEventListener("pointerdown",i=>{i.preventDefault(),Hc()});ie("btnResume").addEventListener("pointerdown",i=>{i.preventDefault(),Em()});ie("btnGarage").addEventListener("pointerdown",i=>{i.preventDefault(),vf()});function Hc(){if(St==="drive"){St="pause",ie("pauseov").classList.remove("hidden");for(let i in gt)i!=="tilt"&&(gt[i]=!1);Mn.clear(),Hr.clear(),Ut=null,Vr(),ot.engine&&ot.update(0,1,!1,!1)}}function Em(){St==="pause"&&(St="drive",ie("pauseov").classList.add("hidden"),Oo.getDelta(),ot.resume())}var zc=!1;function gf(){St!=="drive"||zc||(zc=!0)}function tb(){zc=!1;try{let i=lm.toDataURL("image/jpeg",.9);ie("polaimg").src=i,ie("polaroid").classList.remove("hidden"),setTimeout(()=>ie("polaroid").classList.add("hidden"),2600);let e=ie("flash");e.classList.remove("go"),e.offsetWidth,e.classList.add("go"),ot.click(),Bo(20),ke.photos++,Is(),window.Android&&window.Android.savePhoto&&window.Android.savePhoto(i.split(",")[1]);for(let t of Ro())as("NEW STICKER!",`${t.e} ${t.n}`)}catch(i){console.warn("photo failed",i)}}ie("btnPhoto").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&gf()});var os=!1,xf=0;function Tm(){Se.lock=!1,ie("options").classList.toggle("locked",!!Se.lock),ie("btnLock").querySelector("span").textContent=Se.lock?"\u{1F512}":"\u{1F513}"}var of=0,Bc=[],_f=i=>{Bc.push(Math.round(performance.now())+" "+i),Bc.length>40&&Bc.shift()};function Am(i){_f("start "+i+(os?" (ignored: held)":performance.now()<of?" (ignored: cool)":"")),!(os||performance.now()<of)&&(os=!0,xf=performance.now(),ie("btnLock").classList.add("holding"))}function Gr(i){os&&_f("end "+i),os=!1,ie("btnLock").classList.remove("holding")}function nb(){os&&performance.now()-xf>=2e3&&(Gr("tick"),_f("toggle -> "+!Se.lock),of=performance.now()+1500,Se.lock=!Se.lock,Sn(),Tm(),Bo(40),ot.ping(4))}ie("btnLock").addEventListener("pointerdown",i=>{i.preventDefault();try{ie("btnLock").setPointerCapture(i.pointerId)}catch(e){}Am("pointer "+i.pointerType)});for(let i of["pointerup","pointercancel","lostpointercapture"])ie("btnLock").addEventListener(i,()=>Gr("pointer "+i));document.addEventListener("contextmenu",i=>i.preventDefault());ie("options").addEventListener("pointerdown",()=>{Se.lock&&(ie("lockhint").classList.remove("hidden"),setTimeout(()=>ie("lockhint").classList.add("hidden"),1800))});function ib(){St="drive",Mm.classList.add("hidden"),bm.classList.remove("hidden"),ss.visible=!1,ie("mapbox").classList.toggle("hidden",!_e.road.isMap),Cm.textContent="",ae.s=40,ae.idx=10,ae.dist=0,ae.boostFuel=1,ae.damage=0,ae.totaled=!1,ae.spin=0;let i=_e.road.isMap?_e.road.startPose():_e.road.pointAt(ae.s);H=new Ls(On),H.x=i.x,H.z=i.z,H.h=i.h,ko(),ie("totaled").classList.add("hidden"),Nn.forEach(e=>{Se.traffic?_e.road.isMap?Rm(e):gm(e,!0):(e.active=!1,e.mesh&&(e.mesh.visible=!1))}),ke.cars[On.id]=1,ie("starnum").textContent=ke.stars,ae.combo=0,ae.missionT=0,mf(),hm.clear();for(let e of["roll","pitch","heave"])jt[e].x=0,jt[e].v=0;jt.prevVf=0,jt.wasOff=!1,_e.road.ensure(_e.road.isMap?H.x:ae.idx,H.z),wm()}function Rm(i){if(i.mesh&&(hn.remove(i.mesh),uc(i.mesh)),i.spec=No(zt),i.mesh=hc(i.spec.id,!0,No(zo)),hn.add(i.mesh),i.body=new Ls(i.spec),i.body.mass=60,i.agent={},!_e.road.spawnAgent(i.agent,H.x,H.z)){i.active=!1,i.mesh.visible=!1;return}_e.road.advanceAgent(i.agent,0),i.body.x=i.agent.x,i.body.z=i.agent.z,i.body.h=i.agent.h,i.active=!0,i.mesh.visible=!0}function vf(){St="menu",bm.classList.add("hidden"),Mm.classList.remove("hidden"),ie("totaled").classList.add("hidden"),ie("pauseov").classList.add("hidden"),ie("polaroid").classList.add("hidden");for(let i in gt)i!=="tilt"&&(gt[i]=!1);Mn.clear(),Hr.clear(),Ut=null,Gr("menu"),Vr(),Nn.forEach(i=>{i.active=!1,i.mesh&&(i.mesh.visible=!1)}),_t.position.set(0,0,0),_t.rotation.set(0,0,0),ae.menuAngle=.7,ae.damage=0,ae.totaled=!1,ko(),ot.engine&&ot.update(0,1,!1,!1),mf(),Br.visible=!1,ie("toast").classList.add("hidden"),rf.length=0,Oc=!1,Is(),df()}function yf(){if(St!=="drive")return;ae.damage=0,ae.totaled=!1,ae.spin=0,ie("totaled").classList.add("hidden");let i=_e.road.nearest(H.x,H.z,ae.idx);if(_e.road.isMap)H.x=i.px,H.z=i.pz,H.h=i.h;else{let e=_e.road.pointAt(i.s+2);H.x=e.x+e.rx*Ri[1],H.z=e.z+e.rz*Ri[1],H.h=e.h}H.vx=H.vz=0,H.yawRate=0,ko(),ot.whoosh()}function ko(){if(!_t)return;let i=ae.damage/100;_t.userData.paint.forEach(e=>{e.color.setHex(zo[Se.color]).lerp(new Te(3158064),i*.45),e.roughness=.32+i*.5}),ie("dmgfill").style.width=(100-ae.damage).toFixed(0)+"%",ie("dmgfill").style.background=ae.damage<40?"#22c55e":ae.damage<75?"#f59e0b":"#ef4444"}function Rc(i){if(i<1.5)return;let e=(i-1.5)*4.2;ae.damage=Math.min(100,ae.damage+e),ae.shake=Math.max(ae.shake,Math.min(1.2,i*.08)),ot.bump(Math.min(1,i/12)),Bo(Math.min(220,30+i*12)),jt.heave.v-=Math.min(1.5,i*.08),jt.pitch.v-=Math.min(.8,i*.05);for(let t=0;t<Math.min(12,i);t++)Dc(H.x,.9,H.z,.6);ko(),is("hit"),ae.damage>=100&&!ae.totaled&&(ae.totaled=!0,ae.spin=(Math.random()<.5?-1:1)*2.5,ie("totaled").classList.remove("hidden"))}var Oo=new Tr,Or=new L,Cc=new L,sb=ie("speedval"),rb=ie("dist"),ob=ie("boostfill"),ab=ie("btnBoost"),Cm=ie("street"),Im=ie("minimap"),cb=Im.getContext("2d"),lb=0;function hb(){if(++lb%3)return;let i=Im.width/2,e=i/210,t=cb,n=_e.road,s=n.nodes;t.clearRect(0,0,i*2,i*2),t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,28,40,0.78)",t.fillRect(0,0,i*2,i*2),t.translate(i,i),t.rotate(H.h),t.scale(e,e),t.translate(-H.x,-H.z);let r=Math.floor(H.x/n.cell),o=Math.floor(H.z/n.cell),a=new Set;t.lineCap="round";for(let f=-4;f<=4;f++)for(let u=-4;u<=4;u++){let d=n.hash.get(n.key(r+f,o+u));if(d)for(let g of d){if(a.has(g))continue;a.add(g);let x=Math.floor(g/4096),m=g%4096,p=n.roads[x],v=s[p.n[m]],y=s[p.n[m+1]];t.strokeStyle=p.w>9?"#ffd58a":p.t==="service"||p.t==="track"?"#8a93a3":"#e8edf5",t.lineWidth=p.w*.9,t.beginPath(),t.moveTo(v[0],v[1]),t.lineTo(y[0],y[1]),t.stroke()}}let c=Math.floor(H.x/400),l=Math.floor(H.z/400);for(let f=-1;f<=1;f++)for(let u=-1;u<=1;u++)for(let d of n.tilePois.get(n.key(c+f,l+u))||[])t.fillStyle=/school/i.test(d.k)?"#60a5fa":/worship|mosque/i.test(d.k)?"#34d399":/fuel/i.test(d.k)?"#f97316":"#f472b6",t.beginPath(),t.arc(d.c[0],d.c[1],7,0,Math.PI*2),t.fill();_e.current.showroomAt&&(t.fillStyle="#D0B46C",t.beginPath(),t.arc(_e.current.showroomAt[0],_e.current.showroomAt[1],9,0,Math.PI*2),t.fill());let h=bn.target();if(h){let f=(9+Math.sin(zr*5)*3)/e;t.strokeStyle="#ffd54a",t.lineWidth=3/e,t.beginPath(),t.arc(h[0],h[1],f,0,Math.PI*2),t.stroke(),t.fillStyle="#ffd54a",t.beginPath(),t.arc(h[0],h[1],4/e,0,Math.PI*2),t.fill()}t.restore(),t.save(),t.translate(i,i),t.fillStyle="#ef4444",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore()}var Ju=0,ju=0,jt={roll:{x:0,v:0},pitch:{x:0,v:0},heave:{x:0,v:0},prevVf:0,wasOff:!1};function Qu(i,e,t,n=90,s=11){i.v+=((e-i.x)*n-i.v*s)*t,i.x+=i.v*t}function Bo(i){if(!(Se.haptics===!1||!navigator.vibrate))try{navigator.vibrate(i)}catch(e){}}function ub(i){let e=On,t=e.maxKmh/3.6;if(St==="drive"){let n=gt.boost&&ae.boostFuel>.05&&!ae.totaled;n&&!ae.boosting&&(ot.whoosh(),ke.boosts++,is("boost")),ae.boosting=n,ae.boostFuel=ae.boosting?Math.max(0,ae.boostFuel-i/3):Math.min(1,ae.boostFuel+i/9),ob.style.width=(ae.boostFuel*100).toFixed(0)+"%",ab.classList.toggle("cooling",ae.boostFuel<.05);let s=(gt.right?1:0)-(gt.left?1:0);Se.controls==="wheel"&&(JM(i),s===0&&(s=Math.sign(gt.wheel)*Math.pow(Math.abs(gt.wheel),1.25))),Se.tilt&&s===0&&(s=gt.tilt),ae.totaled?(H.throttle=0,H.brake=.4,H.steer=0,H.yawRate=ae.spin,ae.spin*=Math.pow(.4,i)):(H.throttle=gt.gas?1:0,H.brake=gt.brake?1:0,H.steer=s);let r=!!_e.road.isMap,o=_e.road.nearest(H.x,H.z,ae.idx);r||(ae.idx=o.i,ae.s=o.s);let a=Math.abs(o.d);H.offRoad=r?!o.onRoad:a>Nt/2+.6,H.surfaceGrip=(H.offRoad?_e.current.offroadGrip:1)*(_e.rain?.7:1),r&&(Cm.textContent=o.onRoad&&o.name?o.name:"");let c=ae.damage/100;if(c>.5&&!ae.totaled&&(H.steer+=Math.sin(Oo.elapsedTime*7)*(c-.5)*.5),H.update(i,t*(1-c*.45),e.accel*(1-c*.5),e.handling,ae.boosting),ae.dist+=Math.max(0,H.vf)*i,!r&&(_e.current.guardrail||_e.current.poles)){let _=(_e.current.guardrail?Pr:Nt/2+.75)-.15,S=_e.road.nearest(H.x,H.z,ae.idx);if(Math.abs(S.d)+H.halfW>_){let E=Math.sign(S.d),A=Math.abs(S.d)+H.halfW-_;H.x-=S.rx*E*A,H.z-=S.rz*E*A;let R=H.vx*S.rx*E+H.vz*S.rz*E;R>0&&(H.vx-=R*S.rx*E*1.3,H.vz-=R*S.rz*E*1.3,Rc(R),H.yawRate-=E*Math.min(1.5,R*.1)),H.vx*=1-.6*i,H.vz*=1-.6*i}}for(let _ of r?_e.road.obstaclesNear(H.x,H.z):_e.road.obstaclesNear(ae.idx)){if(Math.abs(_.x-H.x)>40||Math.abs(_.z-H.z)>40)continue;let S=_.type==="circle"?jp(H,_.x,_.z,_.r):Qp(H,_.x,_.z,_.hw,_.hl,_.h);S>0&&Rc(S)}for(let _ of Nn){if(!_.active)continue;if(r){let ne=_.agent,ce=_.body,me=H.x-ce.x,ze=H.z-ce.z,[et,Z]=ce.fwd(),le=me*et+ze*Z,Ae=Math.abs(me*Z-ze*et),Re=le>0&&le<16&&Ae<3?Math.max(0,Math.abs(H.vf)-1):ne.speed,Oe=ne.speed;ne.speed=Re,_e.road.advanceAgent(ne,i),ne.speed=Oe,ce.x+=(ne.x-ce.x)*Math.min(1,10*i),ce.z+=(ne.z-ce.z)*Math.min(1,10*i);let Le=ne.h-ce.h;for(;Le>Math.PI;)Le-=Math.PI*2;for(;Le<-Math.PI;)Le+=Math.PI*2;if(ce.h+=Le*Math.min(1,10*i),ce.vx=et*Re,ce.vz=Z*Re,ce.vf=Re,Math.hypot(me,ze)>420){Rm(_);continue}rm(_);for(let j of _.mesh.userData.wheels)j.userData.spin.rotation.x-=Re*i/j.userData.radius;_.mesh.traverse(j=>{j.isMesh&&(j.castShadow=Math.hypot(me,ze)<70)});let qe=yc(H,ce);qe>0&&Rc(qe);continue}let S=_.body,E=_e.road.nearest(S.x,S.z,_.idx);if(_.idx=E.i,_.s=E.s,_.s<ae.s-120||_.s>ae.s+520){gm(_,_.s<ae.s);continue}let A=_.s>ae.s;_.ahead&&!A&&H.vf>2&&is("pass"),_.ahead=A;let R=_e.road.pointAt(_.s+14+S.vf*.6),b=R.x+R.rx*Ri[_.lane],M=R.z+R.rz*Ri[_.lane],P=b-S.x,D=M-S.z,B=Math.atan2(-P,-D)-S.h;for(;B>Math.PI;)B-=Math.PI*2;for(;B<-Math.PI;)B+=Math.PI*2;S.steer=oi(-B*2.2,-1,1);let q=1e9,k=Math.abs(o.d-Ri[_.lane])<2.4?ae.s-_.s:1e9;k>0&&k<q&&(q=k);for(let ne of Nn)if(ne!==_&&ne.active&&ne.lane===_.lane){let ce=ne.s-_.s;ce>0&&ce<q&&(q=ce)}let Q=q<12?0:q<30?Math.min(_.target,q*.6):_.target;S.throttle=S.vf<Q?.7:0,S.brake=S.vf>Q+2?.6:0,S.offRoad=Math.abs(E.d)>Nt/2+.6,S.surfaceGrip=S.offRoad?.6:1,S.update(i,45,7,6,!1),rm(_);for(let ne of _.mesh.userData.wheels)ne.userData.spin.rotation.x-=S.vf*i/ne.userData.radius,ne.userData.front&&(ne.rotation.y=-S.steerAngle);_.mesh.traverse(ne=>{ne.isMesh&&(ne.castShadow=Math.abs(_.s-ae.s)<70)});let V=yc(H,S);V>0&&Rc(V)}if(!r)for(let _=0;_<Nn.length;_++)for(let S=_+1;S<Nn.length;S++)Nn[_].active&&Nn[S].active&&yc(Nn[_].body,Nn[S].body);let l=(H.vf-jt.prevVf)/Math.max(i,.001);jt.prevVf=H.vf;let h=H.yawRate*H.vf;if(Qu(jt.roll,oi(-h*.011,-.11,.11)-H.vl*.006,i),Qu(jt.pitch,oi(l*.0055,-.05,.05),i),Qu(jt.heave,0,i),H.offRoad!==jt.wasOff&&(jt.wasOff=H.offRoad,Math.abs(H.vf)>3&&(jt.heave.v+=.5,ae.shake=Math.max(ae.shake,.2),ot.bump(.25),Bo(25))),_t.position.set(H.x,Math.max(-.02,jt.heave.x),H.z),_t.rotation.y=H.h,_t.rotation.z=jt.roll.x,_t.rotation.x=jt.pitch.x,H.offRoad){_t.position.y+=Math.abs(H.vf)>2?Math.sin(Oo.elapsedTime*31)*.03:0,ae.shake=Math.max(ae.shake,oi(Math.abs(H.vf)/20,0,.35)),ju+=i*oi(Math.abs(H.vf)/3,0,10);let _=_e.currentName==="snow"?[.95,.97,1]:_e.currentName==="desert"?[.78,.66,.45]:[.55,.47,.32];for(;ju>=1;){ju-=1;let[S,E]=H.fwd();Dc(H.x-S*(e.len/2-.5),.3,H.z-E*(e.len/2-.5),.9,_)}}for(let _ of _t.userData.wheels)_.userData.spin.rotation.x-=H.vf*i/_.userData.radius,_.userData.front&&(_.rotation.y=-H.steerAngle);_t.userData.glow.material.opacity=ae.boosting?.8:0,Ju+=i*(ae.totaled?14:ae.damage>40?(ae.damage-40)/60*8:0);let[f,u]=H.fwd();for(;Ju>=1;)Ju-=1,Dc(H.x+f*(e.len/2-.6),.9,H.z+u*(e.len/2-.6),ae.totaled?1.4:.8);{let _=Math.abs(H.vf),S=H.offRoad?0:Math.max(oi((Math.abs(H.vl)-2.2)/5,0,1),H.brake&&_>14&&!_e.rain?.45:0,ae.totaled&&_>3?.6:0),[E,A]=H.right(),R=H.halfL*.62,b=H.halfW-.28;hm.update(S,[[H.x-f*R-E*b,H.z-u*R-A*b],[H.x-f*R+E*b,H.z-u*R+A*b]],E,A)}tf.update(i,Rt.position.x,Rt.position.z,H.vx,H.vz);let d=Vp(i,[[H.x,H.z],[H.x+f*1.7,H.z+u*1.7]],(_,S)=>{for(let E=0;E<5;E++)Dc(_,1,S,.5,[1,.85,.3])});if(d){ae.combo=zr-ae.lastStarT<1.6?ae.combo+d:0,ae.lastStarT=zr,ke.stars+=d,ot.ping(ae.combo),Bo(12),ie("starnum").textContent=ke.stars;let _=ie("starcount");_.classList.remove("pop"),_.offsetWidth,_.classList.add("pop");for(let S=0;S<d;S++)is("star");for(let S of Ro())as("NEW STICKER!",`${S.e} ${S.n}`),ot.fanfare()}let g=Math.max(0,H.vf)*i,x=Math.abs(H.vf)*3.6;if(ke.km+=g/1e3,ke.worlds[_e.currentName]=(ke.worlds[_e.currentName]||0)+g/1e3,_e.night&&(ke.nightKm+=g/1e3),x>ke.bestKmh&&(ke.bestKmh=x),is("dist",g),is("speed",x),is("pos",[H.x,H.z]),ae.missionT>0&&(ae.missionT-=i,ae.missionT<=0&&wm()),bn.cur&&!bn.cur.done){pf();let _=bn.target();if(_){Br.visible=!0,Br.position.set(_[0],0,_[1]),Br.userData.tick(i,zr);let S=_[0]-H.x,E=_[1]-H.z,A=Math.hypot(S,E),R=Math.atan2(-S,-E)-H.h;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;ie("marrow").classList.remove("off"),ie("marrow").style.transform=`rotate(${-90-R*180/Math.PI}deg)`,ie("mprog").textContent=A<1e3?Math.round(A/10)*10+" m":(A/1e3).toFixed(1)+" km"}else Br.visible=!1,ie("marrow").classList.add("off")}else Br.visible=!1,ie("marrow").classList.add("off");if(ae.saveT+=i,ae.saveT>10){ae.saveT=0,Is();for(let _ of Ro())as("NEW STICKER!",`${_.e} ${_.n}`),ot.fanfare()}r?(_e.road.ensure(H.x,H.z),hb()):_e.road.ensure(ae.idx),_e.follow(H.x,H.z,f,u),sb.textContent=Math.round(Math.abs(H.vf)*3.6),rb.textContent=(ae.dist/1e3).toFixed(1)+" km";let m=oi(Math.abs(H.vf)/t,0,1),[p,v]=H.right();if(Se.cam===0){let _=7.2+m*1.8+e.len*.2;Or.set(H.x-f*_+p*H.vl*.08,2.7+m*.5,H.z-u*_+v*H.vl*.08),Cc.set(H.x+f*10,1,H.z+u*10),Rt.position.lerp(Or,Math.min(1,6*i))}else if(Se.cam===1){let _=4.8+m*.8+e.len*.15;Or.set(H.x-f*_,1.8+m*.2,H.z-u*_),Cc.set(H.x+f*10,.9,H.z+u*10),Rt.position.lerp(Or,Math.min(1,8*i))}else Or.set(H.x+f*(e.len/2-.9),1.15,H.z+u*(e.len/2-.9)),Cc.set(H.x+f*40,.9,H.z+u*40),Rt.position.copy(Or);Rt.fov=Zu(Rt.fov,60+m*14+(ae.boosting?8:0),Math.min(1,4*i)),Rt.updateProjectionMatrix(),ae.shake=Math.max(0,ae.shake-i*1.8);let y=ae.shake*.12+m*m*.01+(ae.boosting?.02:0);Rt.position.x+=(Math.random()-.5)*y,Rt.position.y+=(Math.random()-.5)*y,Rt.lookAt(Cc),Rt.rotation.z+=-H.yawRate*.04*oi(Math.abs(H.vf)/20,0,1),ot.update(Math.abs(H.vf),t,!!H.throttle,ae.boosting,H.vl,H.offRoad,i)}else{if(ae.menuAngle+=i*.3,!_e.road)return;let n=_e.road.isMap?_e.road.startPose():_e.road.pointAt(40);_e.road.isMap&&(n.fx=-Math.sin(n.h),n.fz=-Math.cos(n.h)),_t.position.set(n.x,.14,n.z),_t.rotation.y=n.h+ae.menuAngle,_t.rotation.x=_t.rotation.z=0,ss.visible=!0,ss.position.set(n.x,0,n.z),ss.rotation.y=n.h+ae.menuAngle;let s=4.2+On.len*.5;Rt.position.set(n.x+Math.sin(.8)*s,1.7+On.len*.08,n.z+Math.cos(.8)*s),Rt.lookAt(n.x,.7,n.z),Rt.fov=Zu(Rt.fov,42,Math.min(1,4*i)),Rt.updateProjectionMatrix();for(let r of _t.userData.wheels)r.userData.front&&(r.rotation.y=Zu(r.rotation.y,0,i*3));_t.userData.glow.material.opacity=0,_e.road.isMap?_e.road.ensure(n.x,n.z):_e.road.ensure(10),_e.follow(n.x,n.z,n.fx,n.fz),ot.engine&&ot.update(0,t,!1,!1),tf.update(i,Rt.position.x,Rt.position.z,0,0)}KM(i)}var Ic=0,ef=0,Uo=3;function fb(i){if(St!=="drive"||(Ic+=i,ef++,Ic<4))return;let e=ef/Ic;Ic=0,ef=0,e<26&&Uo>0&&(Uo--,Uo===2?af=!1:Uo===1?(on.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),_e.sun.shadow.mapSize.set(1024,1024),_e.sun.shadow.map&&(_e.sun.shadow.map.dispose(),_e.sun.shadow.map=null)):(on.setPixelRatio(.8),on.shadowMap.enabled=!1),kc())}var zr=0,am=0;function Pm(i){if(requestAnimationFrame(Pm),nf&&i-am<nf-1)return;am=i;let e=Math.min(.05,Oo.getDelta());St!=="pause"&&(zr+=e),nb(),_t&&(_e.road||St==="menu")&&(St!=="pause"&&(ub(e),fb(e)),af&&ai?ai.render():on.render(hn,Rt),zc&&tb())}_e.setWorld(Se.world);ym();um();qM().then(()=>{Fo(),cs(),vf(),df()}).catch(i=>{cf.textContent="Something went wrong: "+i,console.error(i)});Rt.position.set(6,3,7);Pm(0);document.addEventListener("visibilitychange",()=>{document.hidden?(gt.gas=gt.brake=gt.boost=!1,Hc(),Is()):(ot.resume(),Oo.getDelta())});Tm();window.__kidcars={G:ae,P:ke,settings:Se,missions:bn,state:()=>St,hasCar:To,body:()=>H,simTime:()=>zr,roadReady:()=>!!_e.road,inputs:()=>({...gt}),world:()=>_e,toast:as,addStarAhead:i=>{let[e,t]=H.fwd();for(let n=0;n<i;n++)Ir(H.x+e*(8+n*4),H.z+t*(8+n*4),"test")},teleport:(i,e)=>{H.x=i,H.z=e,H.vx=H.vz=0},lockDbg:()=>({held:os,heldFor:os?Math.round(performance.now()-xf):0,state:St,lock:Se.lock,touches:Array.from(Mn.values()),log:Bc.slice()}),back:()=>St==="drive"?(Hc(),"handled"):St==="pause"?(vf(),"handled"):ie("book").classList.contains("hidden")?"exit":(ie("book").classList.add("hidden"),"handled")};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
