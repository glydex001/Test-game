(()=>{var du="170";var x0=0,Kd=1,v0=2;var Fo=1,_c=2,Ci=3,ui=0,an=1,Lt=2,hi=0,xr=1,Bn=2,Zd=3,$d=4,_0=5,Ls=100,y0=101,M0=102,b0=103,w0=104,S0=200,E0=201,T0=202,A0=203,Wl=204,Xl=205,R0=206,C0=207,I0=208,P0=209,L0=210,D0=211,N0=212,U0=213,F0=214,ql=0,Yl=1,Kl=2,Mr=3,Zl=4,$l=5,Jl=6,jl=7,_p=0,O0=1,z0=2,es=0,fu=1,pu=2,mu=3,Oo=4,B0=5,gu=6,xu=7,Jd="attached",k0="detached",yp=300,br=301,wr=302,Ql=303,eh=304,yc=306,Ni=1e3,Pi=1001,Us=1002,cn=1003,vu=1004;var pr=1005;var Mn=1006,vo=1007;var li=1008;var kn=1009,Mp=1010,bp=1011,So=1012,_u=1013,Fs=1014,Qn=1015,Pn=1016,yu=1017,Mu=1018,Sr=1020,wp=35902,Sp=1021,Ep=1022,On=1023,Tp=1024,Ap=1025,vr=1026,Er=1027,bu=1028,wu=1029,Rp=1030,Su=1031;var Eu=1033,za=33776,Ba=33777,ka=33778,Ha=33779,th=35840,nh=35841,ih=35842,sh=35843,rh=36196,oh=37492,ah=37496,ch=37808,lh=37809,hh=37810,uh=37811,dh=37812,fh=37813,ph=37814,mh=37815,gh=37816,xh=37817,vh=37818,_h=37819,yh=37820,Mh=37821,Ga=36492,bh=36494,wh=36495,Cp=36283,Sh=36284,Eh=36285,Th=36286;var Tr=2300,Ar=2301,ll=2302,jd=2400,Qd=2401,ef=2402,H0=2500;var Ip=0,Mc=1,zo=2,G0=3200,V0=3201;var Pp=0,W0=1,ji="",Tt="srgb",ln="srgb-linear",bc="linear",bt="srgb";var Qs=7680;var tf=519,X0=512,q0=513,Y0=514,Lp=515,K0=516,Z0=517,$0=518,J0=519,Ah=35044;var nf="300 es",Li=2e3,Va=2001,ns=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=1234567,_o=Math.PI/180,Rr=180/Math.PI;function zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function j0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Q0(i,e,t){return i!==e?(t-i)/(e-i):0}function yo(i,e,t){return(1-t)*i+t*e}function eg(i,e,t,n){return yo(i,e,1-Math.exp(-t*n))}function tg(i,e=1){return e-Math.abs(Tu(i,e*2)-e)}function ng(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ig(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rg(i,e){return i+Math.random()*(e-i)}function og(i){return i*(.5-Math.random())}function ag(i){i!==void 0&&(sf=i);let e=sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cg(i){return i*_o}function lg(i){return i*Rr}function hg(i){return(i&i-1)===0&&i!==0}function ug(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bo={DEG2RAD:_o,RAD2DEG:Rr,generateUUID:zn,clamp:on,euclideanModulo:Tu,mapLinear:j0,inverseLerp:Q0,lerp:yo,damp:eg,pingpong:tg,smoothstep:ng,smootherstep:ig,randInt:sg,randFloat:rg,randFloatSpread:og,seededRandom:ag,degToRad:cg,radToDeg:lg,isPowerOfTwo:hg,ceilPowerOfTwo:ug,floorPowerOfTwo:dg,setQuaternionFromProperEuler:fg,normalize:Et,denormalize:jn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],S=s[1],_=s[4],x=s[7],y=s[2],b=s[5],E=s[8];return r[0]=o*v+a*S+c*y,r[3]=o*g+a*_+c*b,r[6]=o*p+a*x+c*E,r[1]=l*v+h*S+u*y,r[4]=l*g+h*_+u*b,r[7]=l*p+h*x+u*E,r[2]=d*v+f*S+m*y,r[5]=d*g+f*_+m*b,r[8]=d*p+f*x+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hl=new tt;function Dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pg(){let i=Eo("canvas");return i.style.display="block",i}var rf={};function go(i){i in rf||(rf[i]=!0,console.warn(i))}function mg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function gg(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ot={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ji?bc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var of=[.64,.33,.3,.6,.15,.06],af=[.2126,.7152,.0722],cf=[.3127,.329],lf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[ln]:{primaries:of,whitePoint:cf,transfer:bc,toXYZ:lf,fromXYZ:hf,luminanceCoefficients:af,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:of,whitePoint:cf,transfer:bt,toXYZ:lf,fromXYZ:hf,luminanceCoefficients:af,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}});var er,Rh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{er===void 0&&(er=Eo("canvas")),er.width=e.width,er.height=e.height;let n=er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ul(s[o].image)):r.push(ul(s[o]))}else r=ul(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ul(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _g=0,Qt=class i extends ns{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Pi,s=Pi,r=Mn,o=li,a=On,c=kn,l=i.DEFAULT_ANISOTROPY,h=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=zn(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Us:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Us:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=yp;Qt.DEFAULT_ANISOTROPY=1;var dt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,x=(f+1)/2,y=(p+1)/2,b=(h+d)/4,E=(u+v)/4,A=(m+g)/4;return _>x&&_>y?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=E/n):x>y?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=A/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=E/r,s=A/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ch=class extends ns{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Ch{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xa=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ih=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let y=Math.sqrt(_),b=Math.atan2(y,p*S);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}let x=a*S;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-a){let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-a*f,e[t+2]=l*m+h*f+a*d-c*u,e[t+3]=h*m-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dl.copy(this).projectOnVector(e),this.sub(dl)}reflect(e){return this.sub(dl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new D,uf=new Jt,mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(e.matrixWorld),this.union(ca)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),la.subVectors(this.max,ao),tr.subVectors(e.a,ao),nr.subVectors(e.b,ao),ir.subVectors(e.c,ao),qi.subVectors(nr,tr),Yi.subVectors(ir,nr),Es.subVectors(tr,ir);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-Es.z,Es.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,Es.z,0,-Es.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-Es.y,Es.x,0];return!fl(t,tr,nr,ir,la)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,tr,nr,ir,la))?!1:(ha.crossVectors(qi,Yi),t=[ha.x,ha.y,ha.z],fl(t,tr,nr,ir,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},wi=[new D,new D,new D,new D,new D,new D,new D,new D],Zn=new D,ca=new mn,tr=new D,nr=new D,ir=new D,qi=new D,Yi=new D,Es=new D,ao=new D,la=new D,ha=new D,Ts=new D;function fl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),c=e.dot(Ts),l=t.dot(Ts),h=n.dot(Ts);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var yg=new mn,co=new D,pl=new D,Rn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;co.subVectors(e,this.center);let t=co.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(co,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(co.copy(e.center).add(pl)),this.expandByPoint(co.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new D,ml=new D,ua=new D,Ki=new D,gl=new D,da=new D,xl=new D,Cr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(ml);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ua),a=Ki.dot(this.direction),c=-Ki.dot(ua),l=Ki.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ml).addScaledVector(ua,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,s,r){gl.subVectors(t,e),da.subVectors(n,e),xl.crossVectors(gl,da);let o=this.direction.dot(xl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);let c=a*this.direction.dot(da.crossVectors(Ki,da));if(c<0)return null;let l=a*this.direction.dot(gl.cross(Ki));if(l<0||c+l>o)return null;let h=-a*Ki.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/sr.setFromMatrixColumn(e,0).length(),r=1/sr.setFromMatrixColumn(e,1).length(),o=1/sr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,bg)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Zi.crossVectors(n,Tn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Zi.crossVectors(n,Tn)),Zi.normalize(),fa.crossVectors(Tn,Zi),s[0]=Zi.x,s[4]=fa.x,s[8]=Tn.x,s[1]=Zi.y,s[5]=fa.y,s[9]=Tn.y,s[2]=Zi.z,s[6]=fa.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],_=n[7],x=n[11],y=n[15],b=s[0],E=s[4],A=s[8],M=s[12],w=s[1],T=s[5],C=s[9],L=s[13],U=s[2],H=s[6],F=s[10],V=s[14],B=s[3],ne=s[7],se=s[11],J=s[15];return r[0]=o*b+a*w+c*U+l*B,r[4]=o*E+a*T+c*H+l*ne,r[8]=o*A+a*C+c*F+l*se,r[12]=o*M+a*L+c*V+l*J,r[1]=h*b+u*w+d*U+f*B,r[5]=h*E+u*T+d*H+f*ne,r[9]=h*A+u*C+d*F+f*se,r[13]=h*M+u*L+d*V+f*J,r[2]=m*b+v*w+g*U+p*B,r[6]=m*E+v*T+g*H+p*ne,r[10]=m*A+v*C+g*F+p*se,r[14]=m*M+v*L+g*V+p*J,r[3]=S*b+_*w+x*U+y*B,r[7]=S*E+_*T+x*H+y*ne,r[11]=S*A+_*C+x*F+y*se,r[15]=S*M+_*L+x*V+y*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],S=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,y=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,b=t*S+n*_+s*x+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=S*E,e[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*p-n*d*p)*E,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*E,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,e[4]=_*E,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*E,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*E,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*E,e[8]=x*E,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*p-t*u*p)*E,e[10]=(o*v*r-m*a*r+m*n*l-t*v*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*E,e[12]=y*E,e[13]=(h*v*s-m*u*s+m*n*d-t*v*d-h*n*g+t*u*g)*E,e[14]=(m*a*s-o*v*s-m*n*c+t*v*c+o*n*g-t*a*g)*E,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,S=c*l,_=c*h,x=c*u,y=n.x,b=n.y,E=n.z;return s[0]=(1-(v+p))*y,s[1]=(f+x)*y,s[2]=(m-_)*y,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(d+p))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(m+_)*E,s[9]=(g-S)*E,s[10]=(1-(d+v))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=sr.set(s[0],s[1],s[2]).length(),o=sr.set(s[4],s[5],s[6]).length(),a=sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);let l=1/r,h=1/o,u=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,t.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Li){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,m;if(a===Li)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Va)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Li){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,m,v;if(a===Li)m=(o+r)*u,v=-2*u;else if(a===Va)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},sr=new D,$n=new We,Mg=new D(0,0,0),bg=new D(1,1,1),Zi=new D,fa=new D,Tn=new D,df=new We,ff=new Jt,en=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ff.setFromEuler(this),this.setFromQuaternion(ff,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var qa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wg=0,pf=new D,rr=new Jt,Ei=new We,pa=new D,lo=new D,Sg=new D,Eg=new Jt,mf=new D(1,0,0),gf=new D(0,1,0),xf=new D(0,0,1),vf={type:"added"},Tg={type:"removed"},or={type:"childadded",child:null},vl={type:"childremoved",child:null},Ft=class i extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new en,n=new Jt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new tt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.multiply(rr),this}rotateOnWorldAxis(e,t){return rr.setFromAxisAngle(e,t),this.quaternion.premultiply(rr),this}rotateX(e){return this.rotateOnAxis(mf,e)}rotateY(e){return this.rotateOnAxis(gf,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return pf.copy(e).applyQuaternion(this.quaternion),this.position.add(pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mf,e)}translateY(e){return this.translateOnAxis(gf,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pa.copy(e):pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(lo,pa,this.up):Ei.lookAt(pa,lo,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),rr.setFromRotationMatrix(Ei),this.quaternion.premultiply(rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vf),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tg),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vf),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,e,Sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new D(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new D,Ti=new D,_l=new D,Ai=new D,ar=new D,cr=new D,_f=new D,yl=new D,Ml=new D,bl=new D,wl=new dt,Sl=new dt,El=new dt,Ds=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),Ti.subVectors(n,t),_l.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Ti),c=Jn.dot(_l),l=Ti.dot(Ti),h=Ti.dot(_l),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ai.x),c.addScaledVector(o,Ai.y),c.addScaledVector(a,Ai.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return wl.setScalar(0),Sl.setScalar(0),El.setScalar(0),wl.fromBufferAttribute(e,t),Sl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Sl,r.y),o.addScaledVector(El,r.z),o}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),Ti.subVectors(e,t),Jn.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ar.subVectors(s,n),cr.subVectors(r,n),yl.subVectors(e,n);let c=ar.dot(yl),l=cr.dot(yl);if(c<=0&&l<=0)return t.copy(n);Ml.subVectors(e,s);let h=ar.dot(Ml),u=cr.dot(Ml);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ar,o);bl.subVectors(e,r);let f=ar.dot(bl),m=cr.dot(bl);if(m>=0&&f<=m)return t.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(cr,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return _f.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(_f,a);let p=1/(g+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(ar,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Tu(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Tl(o,r,e+1/3),this.g=Tl(o,r,e),this.b=Tl(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Np[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ot.fromWorkingColorSpace(pn.copy(this),e),Math.round(on(pn.r*255,0,255))*65536+Math.round(on(pn.g*255,0,255))*256+Math.round(on(pn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Tt){ot.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(ma);let n=yo($i.h,ma.h,t),s=yo($i.s,ma.s,t),r=yo($i.l,ma.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Re;Re.NAMES=Np;var Ag=0,Cn=class extends ns{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=zn(),this.name="",this.blending=xr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wl&&(n.blendSrc=this.blendSrc),this.blendDst!==Xl&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},kt=class extends Cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new D,ga=new ce,Ge=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ah,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ga.fromBufferAttribute(this,t),ga.applyMatrix3(e),this.setXY(t,ga.x,ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),e}};var Ya=class extends Ge{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ka=class extends Ge{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Ge{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rg=0,Fn=new We,Al=new Ft,lr=new D,An=new mn,ho=new mn,rn=new D,at=class i extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?Ka:Ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(An.min,ho.min),An.expandByPoint(rn),rn.addVectors(An.max,ho.max),An.expandByPoint(rn)):(An.expandByPoint(ho.min),An.expandByPoint(ho.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(lr.fromBufferAttribute(e,l),rn.add(lr)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new D,c[A]=new D;let l=new D,h=new D,u=new D,d=new ce,f=new ce,m=new ce,v=new D,g=new D;function p(A,M,w){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let T=1/(f.x*m.y-m.x*f.y);isFinite(T)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(T),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(T),a[A].add(v),a[M].add(v),a[w].add(v),c[A].add(g),c[M].add(g),c[w].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,M=S.length;A<M;++A){let w=S[A],T=w.start,C=w.count;for(let L=T,U=T+C;L<U;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new D,x=new D,y=new D,b=new D;function E(A){y.fromBufferAttribute(s,A),b.copy(y);let M=a[A];_.copy(M),_.sub(y.multiplyScalar(y.dot(M))).normalize(),x.crossVectors(b,M);let T=x.dot(c[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,T)}for(let A=0,M=S.length;A<M;++A){let w=S[A],T=w.start,C=w.count;for(let L=T,U=T+C;L<U;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ge(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yf=new We,As=new Cr,xa=new Rn,Mf=new D,va=new D,_a=new D,ya=new D,Rl=new D,Ma=new D,bf=new D,ba=new D,ue=class extends Ft{constructor(e=new at,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ma.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rl.fromBufferAttribute(u,e),o?Ma.addScaledVector(Rl,h):Ma.addScaledVector(Rl.sub(t),h))}t.add(Ma)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(xa.containsPoint(As.origin)===!1&&(As.intersectSphere(xa,Mf)===null||As.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(yf.copy(r).invert(),As.copy(e.ray).applyMatrix4(yf),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,y=_;x<y;x+=3){let b=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);s=wa(this,p,e,n,l,h,u,b,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let S=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);s=wa(this,o,e,n,l,h,u,S,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,y=_;x<y;x+=3){let b=x,E=x+1,A=x+2;s=wa(this,p,e,n,l,h,u,b,E,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let S=g,_=g+1,x=g+2;s=wa(this,o,e,n,l,h,u,S,_,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Cg(i,e,t,n,s,r,o,a){let c;if(e.side===an?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ui,a),c===null)return null;ba.copy(a),ba.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ba);return l<t.near||l>t.far?null:{distance:l,point:ba.clone(),object:i}}function wa(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,va),i.getVertexPosition(c,_a),i.getVertexPosition(l,ya);let h=Cg(i,e,t,n,va,_a,ya,bf);if(h){let u=new D;Ds.getBarycoord(bf,va,_a,ya,u),s&&(h.uv=Ds.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=Ds.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=Ds.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};Ds.getNormal(va,_a,ya,d.normal),h.face=d,h.barycoord=u}return h}var nt=class i extends at{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function m(v,g,p,S,_,x,y,b,E,A,M){let w=x/E,T=y/A,C=x/2,L=y/2,U=b/2,H=E+1,F=A+1,V=0,B=0,ne=new D;for(let se=0;se<F;se++){let J=se*T-L;for(let oe=0;oe<H;oe++){let _e=oe*w-C;ne[v]=_e*S,ne[g]=J*_,ne[p]=U,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[g]=0,ne[p]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(oe/E),u.push(1-se/A),V+=1}}for(let se=0;se<A;se++)for(let J=0;J<E;J++){let oe=d+J+H*se,_e=d+J+H*(se+1),q=d+(J+1)+H*(se+1),ae=d+(J+1)+H*se;c.push(oe,_e,ae),c.push(_e,q,ae),B+=6}a.addGroup(f,B,M),f+=B,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ir(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=Ir(i[t]);for(let s in n)e[s]=n[s]}return e}function Ig(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Up(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var di={clone:Ir,merge:_n},Pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Za=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ji=new D,wf=new ce,Sf=new ce,jt=class extends Za{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,wf,Sf),t.subVectors(Sf,wf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hr=-90,ur=1,Ph=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(hr,ur,e,t);s.layers=this.layers,this.add(s);let r=new jt(hr,ur,e,t);r.layers=this.layers,this.add(r);let o=new jt(hr,ur,e,t);o.layers=this.layers,this.add(o);let a=new jt(hr,ur,e,t);a.layers=this.layers,this.add(a);let c=new jt(hr,ur,e,t);c.layers=this.layers,this.add(c);let l=new jt(hr,ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},$a=class extends Qt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lh=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new $a(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nt(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:hi});r.uniforms.tEquirect.value=t;let o=new ue(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=Mn),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Cl=new D,Dg=new D,Ng=new tt,Ii=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cl.subVectors(n,t).cross(Dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ng.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Rn,Sa=new D,To=class{constructor(e=new Ii,t=new Ii,n=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Li){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],S=s[13],_=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+S).normalize(),n[3].setComponents(c-o,d-h,g-m,x-S).normalize(),n[4].setComponents(c-a,d-u,g-v,x-_).normalize(),t===Li)n[5].setComponents(c+a,d+u,g+v,x+_).normalize();else if(t===Va)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Fp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ug(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Wt=class i extends at{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let S=p*d-o;for(let _=0;_<l;_++){let x=_*u-r;m.push(x,-S,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let _=S+l*p,x=S+l*(p+1),y=S+1+l*(p+1),b=S+1+l*p;f.push(_,x,b),f.push(x,y,b)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Og=`#ifdef USE_ALPHAHASH
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
#endif`,zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gg=`#ifdef USE_AOMAP
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
#endif`,Vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wg=`#ifdef USE_BATCHING
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
#endif`,Xg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zg=`#ifdef USE_IRIDESCENCE
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
#endif`,$g=`#ifdef USE_BUMPMAP
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
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,ox=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dx="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,px=`#ifdef USE_ENVMAP
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
#endif`,mx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
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
#endif`,_x=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ex=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ax=`uniform bool receiveShadow;
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
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dx=`PhysicalMaterial material;
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
#endif`,Nx=`struct PhysicalMaterial {
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
}`,Ux=`
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sv=`#ifdef USE_NORMALMAP
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
#endif`,rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ov=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,av=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,Mv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
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
#endif`,wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sv=`#ifdef USE_SKINNING
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
#endif`,Ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Vv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,Kv=`uniform vec3 diffuse;
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
}`,Zv=`#include <common>
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
}`,$v=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,jv=`#define LAMBERT
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
}`,Qv=`#define MATCAP
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
}`,e_=`#define MATCAP
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
}`,t_=`#define NORMAL
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
}`,n_=`#define NORMAL
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
}`,i_=`#define PHONG
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
}`,s_=`#define PHONG
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
}`,r_=`#define STANDARD
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
}`,o_=`#define STANDARD
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
}`,a_=`#define TOON
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
}`,c_=`#define TOON
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
}`,l_=`uniform float size;
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
}`,h_=`uniform vec3 diffuse;
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
}`,u_=`#include <common>
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
}`,d_=`uniform vec3 color;
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
}`,f_=`uniform float rotation;
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
}`,p_=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Fg,alphahash_pars_fragment:Og,alphamap_fragment:zg,alphamap_pars_fragment:Bg,alphatest_fragment:kg,alphatest_pars_fragment:Hg,aomap_fragment:Gg,aomap_pars_fragment:Vg,batching_pars_vertex:Wg,batching_vertex:Xg,begin_vertex:qg,beginnormal_vertex:Yg,bsdfs:Kg,iridescence_fragment:Zg,bumpmap_pars_fragment:$g,clipping_planes_fragment:Jg,clipping_planes_pars_fragment:jg,clipping_planes_pars_vertex:Qg,clipping_planes_vertex:ex,color_fragment:tx,color_pars_fragment:nx,color_pars_vertex:ix,color_vertex:sx,common:rx,cube_uv_reflection_fragment:ox,defaultnormal_vertex:ax,displacementmap_pars_vertex:cx,displacementmap_vertex:lx,emissivemap_fragment:hx,emissivemap_pars_fragment:ux,colorspace_fragment:dx,colorspace_pars_fragment:fx,envmap_fragment:px,envmap_common_pars_fragment:mx,envmap_pars_fragment:gx,envmap_pars_vertex:xx,envmap_physical_pars_fragment:Rx,envmap_vertex:vx,fog_vertex:_x,fog_pars_vertex:yx,fog_fragment:Mx,fog_pars_fragment:bx,gradientmap_pars_fragment:wx,lightmap_pars_fragment:Sx,lights_lambert_fragment:Ex,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ax,lights_toon_fragment:Cx,lights_toon_pars_fragment:Ix,lights_phong_fragment:Px,lights_phong_pars_fragment:Lx,lights_physical_fragment:Dx,lights_physical_pars_fragment:Nx,lights_fragment_begin:Ux,lights_fragment_maps:Fx,lights_fragment_end:Ox,logdepthbuf_fragment:zx,logdepthbuf_pars_fragment:Bx,logdepthbuf_pars_vertex:kx,logdepthbuf_vertex:Hx,map_fragment:Gx,map_pars_fragment:Vx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:Kx,morphcolor_vertex:Zx,morphnormal_vertex:$x,morphtarget_pars_vertex:Jx,morphtarget_vertex:jx,normal_fragment_begin:Qx,normal_fragment_maps:ev,normal_pars_fragment:tv,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:sv,clearcoat_normal_fragment_begin:rv,clearcoat_normal_fragment_maps:ov,clearcoat_pars_fragment:av,iridescence_pars_fragment:cv,opaque_fragment:lv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:dv,dithering_fragment:fv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:xv,shadowmap_pars_vertex:vv,shadowmap_vertex:_v,shadowmask_pars_fragment:yv,skinbase_vertex:Mv,skinning_pars_vertex:bv,skinning_vertex:wv,skinnormal_vertex:Sv,specularmap_fragment:Ev,specularmap_pars_fragment:Tv,tonemapping_fragment:Av,tonemapping_pars_fragment:Rv,transmission_fragment:Cv,transmission_pars_fragment:Iv,uv_pars_fragment:Pv,uv_pars_vertex:Lv,uv_vertex:Dv,worldpos_vertex:Nv,background_vert:Uv,background_frag:Fv,backgroundCube_vert:Ov,backgroundCube_frag:zv,cube_vert:Bv,cube_frag:kv,depth_vert:Hv,depth_frag:Gv,distanceRGBA_vert:Vv,distanceRGBA_frag:Wv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:Kv,meshbasic_vert:Zv,meshbasic_frag:$v,meshlambert_vert:Jv,meshlambert_frag:jv,meshmatcap_vert:Qv,meshmatcap_frag:e_,meshnormal_vert:t_,meshnormal_frag:n_,meshphong_vert:i_,meshphong_frag:s_,meshphysical_vert:r_,meshphysical_frag:o_,meshtoon_vert:a_,meshtoon_frag:c_,points_vert:l_,points_frag:h_,shadow_vert:u_,shadow_frag:d_,sprite_vert:f_,sprite_frag:p_},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ci={basic:{uniforms:_n([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:_n([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:_n([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:_n([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:_n([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:_n([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:_n([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:_n([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:_n([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:_n([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:_n([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:_n([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:_n([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};ci.physical={uniforms:_n([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Ea={r:0,b:0,g:0},Cs=new en,m_=new We;function g_(i,e,t,n,s,r,o){let a=new Re(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function v(S){let _=!1,x=m(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,_){let x=m(_);x&&(x.isCubeTexture||x.mapping===yc)?(h===void 0&&(h=new ue(new nt(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Ir(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Cs.copy(_.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m_.makeRotationFromEuler(Cs)),h.material.toneMapped=ot.getTransfer(x.colorSpace)!==bt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ue(new Wt(2,2),new Ot({name:"BackgroundMaterial",uniforms:Ir(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ot.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,_){S.getRGB(Ea,Up(i)),n.buffers.color.setClear(Ea.r,Ea.g,Ea.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),c=_,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:g}}function x_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(w,T,C,L,U){let H=!1,F=u(L,C,T);r!==F&&(r=F,l(r.object)),H=f(w,L,C,U),H&&m(w,L,C,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(w,T,C,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,T,C){let L=C.wireframe===!0,U=n[w.id];U===void 0&&(U={},n[w.id]=U);let H=U[T.id];H===void 0&&(H={},U[T.id]=H);let F=H[L];return F===void 0&&(F=d(c()),H[L]=F),F}function d(w){let T=[],C=[],L=[];for(let U=0;U<t;U++)T[U]=0,C[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:C,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,T,C,L){let U=r.attributes,H=T.attributes,F=0,V=C.getAttributes();for(let B in V)if(V[B].location>=0){let se=U[B],J=H[B];if(J===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),se===void 0||se.attribute!==J||J&&se.data!==J.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function m(w,T,C,L){let U={},H=T.attributes,F=0,V=C.getAttributes();for(let B in V)if(V[B].location>=0){let se=H[B];se===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(se=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(se=w.instanceColor));let J={};J.attribute=se,se&&se.data&&(J.data=se.data),U[B]=J,F++}r.attributes=U,r.attributesNum=F,r.index=L}function v(){let w=r.newAttributes;for(let T=0,C=w.length;T<C;T++)w[T]=0}function g(w){p(w,0)}function p(w,T){let C=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;C[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),U[w]!==T&&(i.vertexAttribDivisor(w,T),U[w]=T)}function S(){let w=r.newAttributes,T=r.enabledAttributes;for(let C=0,L=T.length;C<L;C++)T[C]!==w[C]&&(i.disableVertexAttribArray(C),T[C]=0)}function _(w,T,C,L,U,H,F){F===!0?i.vertexAttribIPointer(w,T,C,U,H):i.vertexAttribPointer(w,T,C,L,U,H)}function x(w,T,C,L){v();let U=L.attributes,H=C.getAttributes(),F=T.defaultAttributeValues;for(let V in H){let B=H[V];if(B.location>=0){let ne=U[V];if(ne===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(ne=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(ne=w.instanceColor)),ne!==void 0){let se=ne.normalized,J=ne.itemSize,oe=e.get(ne);if(oe===void 0)continue;let _e=oe.buffer,q=oe.type,ae=oe.bytesPerElement,ye=q===i.INT||q===i.UNSIGNED_INT||ne.gpuType===_u;if(ne.isInterleavedBufferAttribute){let de=ne.data,Ne=de.stride,ke=ne.offset;if(de.isInstancedInterleavedBuffer){for(let Fe=0;Fe<B.locationSize;Fe++)p(B.location+Fe,de.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Fe=0;Fe<B.locationSize;Fe++)g(B.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let Fe=0;Fe<B.locationSize;Fe++)_(B.location+Fe,J/B.locationSize,q,se,Ne*ae,(ke+J/B.locationSize*Fe)*ae,ye)}else{if(ne.isInstancedBufferAttribute){for(let de=0;de<B.locationSize;de++)p(B.location+de,ne.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let de=0;de<B.locationSize;de++)g(B.location+de);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let de=0;de<B.locationSize;de++)_(B.location+de,J/B.locationSize,q,se,J*ae,J/B.locationSize*de*ae,ye)}}else if(F!==void 0){let se=F[V];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(B.location,se);break;case 3:i.vertexAttrib3fv(B.location,se);break;case 4:i.vertexAttrib4fv(B.location,se);break;default:i.vertexAttrib1fv(B.location,se)}}}}S()}function y(){A();for(let w in n){let T=n[w];for(let C in T){let L=T[C];for(let U in L)h(L[U].object),delete L[U];delete T[C]}delete n[w]}}function b(w){if(n[w.id]===void 0)return;let T=n[w.id];for(let C in T){let L=T[C];for(let U in L)h(L[U].object),delete L[U];delete T[C]}delete n[w.id]}function E(w){for(let T in n){let C=n[T];if(C[w.id]===void 0)continue;let L=C[w.id];for(let U in L)h(L[U].object),delete L[U];delete C[w.id]}}function A(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function v_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function __(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==On&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let A=E===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==kn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Qn&&!A)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:y,maxSamples:b}}function y_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ii,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,_=S*4,x=p.clippingState||null;c.value=x,x=h(m,d,_,f);for(let y=0;y!==_;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)o.copy(u[_]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function M_(i){let e=new WeakMap;function t(o,a){return a===Ql?o.mapping=br:a===eh&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ql||a===eh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var is=class extends Za{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mr=4,Ef=[.125,.215,.35,.446,.526,.582],Ns=20,Il=new is,Tf=new Re,Pl=null,Ll=0,Dl=0,Nl=!1,Ps=(1+Math.sqrt(5))/2,dr=1/Ps,Af=[new D(-Ps,dr,0),new D(Ps,dr,0),new D(-dr,0,Ps),new D(dr,0,Ps),new D(0,Ps,-dr),new D(0,Ps,dr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Dl),this._renderer.xr.enabled=Nl,e.scissorTest=!1,Ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Pn,format:On,colorSpace:ln,depthBuffer:!1},s=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(r)),this._blurMaterial=w_(r,e,t)}return s}_compileMaterial(e){let t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,s){let a=new jt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tf),h.toneMapping=es,h.autoClear=!1;let f=new kt({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),m=new ue(new nt,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Tf),v=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Ta(s,S*_,p>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===br||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ta(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Af[(s-r-1)%Af.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ue(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Ns;g>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ns}`);let p=[],S=0;for(let E=0;E<Ns;++E){let A=E/v,M=Math.exp(-A*A/2);p.push(M),E===0?S+=M:E<g&&(S+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let x=this._sizeLods[s],y=3*x*(s>_-mr?s-_+mr:0),b=4*(this._cubeSize-x);Ta(t,y,b,3*x,2*x),c.setRenderTarget(t),c.render(u,Il)}};function b_(i){let e=[],t=[],n=[],s=i,r=i-mr+1+Ef.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-mr?c=Ef[o-i+mr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,S=new Float32Array(v*m*f),_=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,A=b>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];S.set(M,v*m*b),_.set(d,g*m*b);let w=[b,b,b,b,b,b];x.set(w,p*m*b)}let y=new at;y.setAttribute("position",new Ge(S,v)),y.setAttribute("uv",new Ge(_,g)),y.setAttribute("faceIndex",new Ge(x,p)),e.push(y),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rf(i,e,t){let n=new hn(i,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ta(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function w_(i,e,t){let n=new Float32Array(Ns),s=new D(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Au(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Cf(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function If(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function S_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ql||c===eh,h=c===br||c===wr;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Pr(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Pr(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function E_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let S=f.array;v=f.version;for(let _=0,x=S.length;_<x;_+=3){let y=S[_+0],b=S[_+1],E=S[_+2];d.push(y,b,b,E,E,y)}}else if(m!==void 0){let S=m.array;v=m.version;for(let _=0,x=S.length/3-1;_<x;_+=3){let y=_+0,b=_+1,E=_+2;d.push(y,b,b,E,E,y)}}else return;let g=new(Dp(d)?Ka:Ya)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function A_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*v[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function R_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function C_(i,e,t){let n=new WeakMap,s=new dt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let x=a.attributes.position.count*_,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*y*4*u),E=new Xa(b,x,y,u);E.type=Qn,E.needsUpdate=!0;let A=_*4;for(let w=0;w<u;w++){let T=g[w],C=p[w],L=S[w],U=x*y*4*w;for(let H=0;H<T.count;H++){let F=H*A;f===!0&&(s.fromBufferAttribute(T,H),b[U+F+0]=s.x,b[U+F+1]=s.y,b[U+F+2]=s.z,b[U+F+3]=0),m===!0&&(s.fromBufferAttribute(C,H),b[U+F+4]=s.x,b[U+F+5]=s.y,b[U+F+6]=s.z,b[U+F+7]=0),v===!0&&(s.fromBufferAttribute(L,H),b[U+F+8]=s.x,b[U+F+9]=s.y,b[U+F+10]=s.z,b[U+F+11]=L.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new ce(x,y)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function I_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ja=class extends Qt{constructor(e,t,n,s,r,o,a,c,l,h=vr){if(h!==vr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vr&&(n=Fs),n===void 0&&h===Er&&(n=Sr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Op=new Qt,Pf=new Ja(1,1),zp=new Xa,Bp=new Ih,kp=new $a,Lf=[],Df=[],Nf=new Float32Array(16),Uf=new Float32Array(9),Ff=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Lf[s];if(r===void 0&&(r=new Float32Array(s),Lf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wc(i,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function U_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ff.set(n),i.uniformMatrix2fv(this.addr,!1,Ff),nn(t,n)}}function F_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Uf.set(n),i.uniformMatrix3fv(this.addr,!1,Uf),nn(t,n)}}function O_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Nf.set(n),i.uniformMatrix4fv(this.addr,!1,Nf),nn(t,n)}}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function G_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function W_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function X_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pf.compareFunction=Lp,r=Pf):r=Op,t.setTexture2D(e||r,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bp,s)}function K_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kp,s)}function Z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function $_(i){switch(i){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return z_;case 35667:case 35671:return B_;case 35668:case 35672:return k_;case 35669:case 35673:return H_;case 5125:return G_;case 36294:return V_;case 36295:return W_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return q_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(i,e){i.uniform1fv(this.addr,e)}function j_(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function Q_(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function ey(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function ty(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ny(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function iy(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sy(i,e){i.uniform1iv(this.addr,e)}function ry(i,e){i.uniform2iv(this.addr,e)}function oy(i,e){i.uniform3iv(this.addr,e)}function ay(i,e){i.uniform4iv(this.addr,e)}function cy(i,e){i.uniform1uiv(this.addr,e)}function ly(i,e){i.uniform2uiv(this.addr,e)}function hy(i,e){i.uniform3uiv(this.addr,e)}function uy(i,e){i.uniform4uiv(this.addr,e)}function dy(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Op,r[o])}function fy(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bp,r[o])}function py(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kp,r[o])}function my(i,e,t){let n=this.cache,s=e.length,r=wc(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function gy(i){switch(i){case 5126:return J_;case 35664:return j_;case 35665:return Q_;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return cy;case 36294:return ly;case 36295:return hy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}var Dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},Nh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}},Uh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function Of(i,e){i.seq.push(e),i.map[e.id]=e}function xy(i,e,t){let n=i.name,s=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),o=Ul.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Of(t,l===void 0?new Dh(a,i,e):new Nh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Uh(a),Of(t,u)),t=u}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xy(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function zf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vy=37297,_y=0;function yy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Bf=new tt;function My(i){ot._getMatrix(Bf,ot.workingColorSpace,i);let e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case bc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yy(i.getShaderSource(e),o)}else return s}function by(i,e){let t=My(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wy(i,e){let t;switch(e){case fu:t="Linear";break;case pu:t="Reinhard";break;case mu:t="Cineon";break;case Oo:t="ACESFilmic";break;case gu:t="AgX";break;case xu:t="Neutral";break;case B0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Aa=new D;function Sy(){ot.getLuminanceCoefficients(Aa);let i=Aa.x.toFixed(4),e=Aa.y.toFixed(4),t=Aa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xo).join(`
`)}function Ty(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ay(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xo(i){return i!==""}function Hf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fh(i){return i.replace(Ry,Iy)}var Cy=new Map;function Iy(i,e){let t=rt[e];if(t===void 0){let n=Cy.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}var Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(Py,Ly)}function Ly(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Dy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function Ny(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case yc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Fy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _p:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case z0:e="ENVMAP_BLENDING_ADD";break}return e}function Oy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zy(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Dy(t),l=Ny(t),h=Uy(t),u=Fy(t),d=Oy(t),f=Ey(t),m=Ty(r),v=s.createProgram(),g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(xo).join(`
`),p.length>0&&(p+=`
`)):(g=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xo).join(`
`),p=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?rt.tonemapping_pars_fragment:"",t.toneMapping!==es?wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,by("linearToOutputTexel",t.outputColorSpace),Sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xo).join(`
`)),o=Fh(o),o=Hf(o,t),o=Gf(o,t),a=Fh(a),a=Hf(a,t),a=Gf(a,t),o=Vf(o),a=Vf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===nf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=S+g+o,x=S+p+a,y=zf(s,s.VERTEX_SHADER,_),b=zf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function E(T){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(v).trim(),L=s.getShaderInfoLog(y).trim(),U=s.getShaderInfoLog(b).trim(),H=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,b);else{let V=kf(s,y,"vertex"),B=kf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+C+`
`+V+`
`+B)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||U==="")&&(F=!1);F&&(T.diagnostics={runnable:H,programLog:C,vertexShader:{log:L,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(y),s.deleteShader(b),A=new yr(s,v),M=Ay(s,v)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,vy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=b,this}var By=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new zh(e),t.set(e,n)),n}},zh=class{constructor(e){this.id=By++,this.code=e,this.usedTimes=0}};function ky(i,e,t,n,s,r,o){let a=new qa,c=new Oh,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,w,T,C,L){let U=C.fog,H=L.geometry,F=M.isMeshStandardMaterial?C.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),B=V&&V.mapping===yc?V.image.height:null,ne=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,J=se!==void 0?se.length:0,oe=0;H.morphAttributes.position!==void 0&&(oe=1),H.morphAttributes.normal!==void 0&&(oe=2),H.morphAttributes.color!==void 0&&(oe=3);let _e,q,ae,ye;if(ne){let St=ci[ne];_e=St.vertexShader,q=St.fragmentShader}else _e=M.vertexShader,q=M.fragmentShader,c.update(M),ae=c.getVertexShaderID(M),ye=c.getFragmentShaderID(M);let de=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),ke=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,Ze=!!M.map,te=!!M.matcap,fe=!!V,N=!!M.aoMap,Le=!!M.lightMap,he=!!M.bumpMap,ve=!!M.normalMap,pe=!!M.displacementMap,ie=!!M.emissiveMap,K=!!M.metalnessMap,I=!!M.roughnessMap,R=M.anisotropy>0,O=M.clearcoat>0,Y=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,Te=M.transmission>0,xe=R&&!!M.anisotropyMap,Ee=O&&!!M.clearcoatMap,qe=O&&!!M.clearcoatNormalMap,me=O&&!!M.clearcoatRoughnessMap,Ue=Q&&!!M.iridescenceMap,Ve=Q&&!!M.iridescenceThicknessMap,Xe=j&&!!M.sheenColorMap,De=j&&!!M.sheenRoughnessMap,ht=!!M.specularMap,st=!!M.specularColorMap,Ct=!!M.specularIntensityMap,G=Te&&!!M.transmissionMap,Ae=Te&&!!M.thicknessMap,ee=!!M.gradientMap,le=!!M.alphaMap,Pe=M.alphaTest>0,Ce=!!M.alphaHash,Qe=!!M.extensions,qt=es;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(qt=i.toneMapping);let dn={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:ke,instancingColor:ke&&L.instanceColor!==null,instancingMorph:ke&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ln,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:te,envMap:fe,envMapMode:fe&&V.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:Le,bumpMap:he,normalMap:ve,displacementMap:d&&pe,emissiveMap:ie,normalMapObjectSpace:ve&&M.normalMapType===W0,normalMapTangentSpace:ve&&M.normalMapType===Pp,metalnessMap:K,roughnessMap:I,anisotropy:R,anisotropyMap:xe,clearcoat:O,clearcoatMap:Ee,clearcoatNormalMap:qe,clearcoatRoughnessMap:me,dispersion:Y,iridescence:Q,iridescenceMap:Ue,iridescenceThicknessMap:Ve,sheen:j,sheenColorMap:Xe,sheenRoughnessMap:De,specularMap:ht,specularColorMap:st,specularIntensityMap:Ct,transmission:Te,transmissionMap:G,thicknessMap:Ae,gradientMap:ee,opaque:M.transparent===!1&&M.blending===xr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Pe,alphaHash:Ce,combine:M.combine,mapUv:Ze&&v(M.map.channel),aoMapUv:N&&v(M.aoMap.channel),lightMapUv:Le&&v(M.lightMap.channel),bumpMapUv:he&&v(M.bumpMap.channel),normalMapUv:ve&&v(M.normalMap.channel),displacementMapUv:pe&&v(M.displacementMap.channel),emissiveMapUv:ie&&v(M.emissiveMap.channel),metalnessMapUv:K&&v(M.metalnessMap.channel),roughnessMapUv:I&&v(M.roughnessMap.channel),anisotropyMapUv:xe&&v(M.anisotropyMap.channel),clearcoatMapUv:Ee&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(M.sheenRoughnessMap.channel),specularMapUv:ht&&v(M.specularMap.channel),specularColorMapUv:st&&v(M.specularColorMap.channel),specularIntensityMapUv:Ct&&v(M.specularIntensityMap.channel),transmissionMapUv:G&&v(M.transmissionMap.channel),thicknessMapUv:Ae&&v(M.thicknessMap.channel),alphaMapUv:le&&v(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ve||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(Ze||le),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:L.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===bt,decodeVideoTextureEmissive:ie&&M.emissiveMap.isVideoTexture===!0&&ot.getTransfer(M.emissiveMap.colorSpace)===bt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Lt,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dn.vertexUv1s=l.has(1),dn.vertexUv2s=l.has(2),dn.vertexUv3s=l.has(3),l.clear(),dn}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)w.push(T),w.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(S(w,M),_(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function S(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let w=m[M.type],T;if(w){let C=ci[w];T=di.clone(C.uniforms)}else T=M.uniforms;return T}function y(M,w){let T;for(let C=0,L=h.length;C<L;C++){let U=h[C];if(U.cacheKey===w){T=U,++T.usedTimes;break}}return T===void 0&&(T=new zy(i,w,M,r),h.push(T)),T}function b(M){if(--M.usedTimes===0){let w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function A(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:A}}function Hy(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function a(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Gy),n.length>1&&n.sort(d||Xf),s.length>1&&s.sort(d||Xf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Vy(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new qf,i.set(n,[o])):s>=r.length?(o=new qf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Xy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qy=0;function Yy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ky(i){let e=new Wy,t=Xy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new We,o=new We;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,S=0,_=0,x=0,y=0,b=0,E=0;l.sort(Yy);for(let M=0,w=l.length;M<w;M++){let T=l[M],C=T.color,L=T.intensity,U=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=C.r*L,u+=C.g*L,d+=C.b*L;else if(T.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(T.sh.coefficients[F],L);E++}else if(T.isDirectionalLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let V=T.shadow,B=t.get(T);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=T.shadow.matrix,S++}n.directional[f]=F,f++}else if(T.isSpotLight){let F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(C).multiplyScalar(L),F.distance=U,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,n.spot[v]=F;let V=T.shadow;if(T.map&&(n.spotLightMap[y]=T.map,y++,V.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[v]=V.matrix,T.castShadow){let B=t.get(T);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[v]=B,n.spotShadowMap[v]=H,x++}v++}else if(T.isRectAreaLight){let F=e.get(T);F.color.copy(C).multiplyScalar(L),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=F,g++}else if(T.isPointLight){let F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){let V=T.shadow,B=t.get(T);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=T.shadow.matrix,_++}n.point[m]=F,m++}else if(T.isHemisphereLight){let F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(L),F.groundColor.copy(T.groundColor).multiplyScalar(L),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==m||A.spotLength!==v||A.rectAreaLength!==g||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==_||A.numSpotShadows!==x||A.numSpotMaps!==y||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,A.directionalLength=f,A.pointLength=m,A.spotLength=v,A.rectAreaLength=g,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=_,A.numSpotShadows=x,A.numSpotMaps=y,A.numLightProbes=E,n.version=qy++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let _=l[p];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(_.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Yf(i){let e=new Ky(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Zy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Yf(i),e.set(s,[a])):r>=o.length?(a=new Yf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Bh=class extends Cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=G0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kh=class extends Cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`;function jy(i,e,t){let n=new To,s=new ce,r=new ce,o=new dt,a=new Bh({depthPacking:V0}),c=new kh,l={},h=t.maxTextureSize,u={[ui]:an,[an]:ui,[Lt]:Lt},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:$y,fragmentShader:Jy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new at;m.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ue(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let p=this.type;this.render=function(b,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(hi),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let L=p!==Ci&&this.type===Ci,U=p===Ci&&this.type!==Ci;for(let H=0,F=b.length;H<F;H++){let V=b[H],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let ne=B.getFrameExtents();if(s.multiply(ne),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,B.mapSize.y=r.y)),B.map===null||L===!0||U===!0){let J=this.type!==Ci?{minFilter:cn,magFilter:cn}:{};B.map!==null&&B.map.dispose(),B.map=new hn(s.x,s.y,J),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let se=B.getViewportCount();for(let J=0;J<se;J++){let oe=B.getViewport(J);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),C.viewport(o),B.updateMatrices(V,J),n=B.getFrustum(),x(E,A,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Ci&&S(B,A),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,w,T)};function S(b,E){let A=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,A,f,v,null)}function _(b,E,A,M){let w=null,T=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(T!==void 0)w=T;else if(w=A.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let C=w.uuid,L=E.uuid,U=l[C];U===void 0&&(U={},l[C]=U);let H=U[L];H===void 0&&(H=w.clone(),U[L]=H,E.addEventListener("dispose",y)),w=H}if(w.visible=E.visible,w.wireframe=E.wireframe,M===Ci?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let C=i.properties.get(w);C.light=A}return w}function x(b,E,A,M,w){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===Ci)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let L=e.update(b),U=b.material;if(Array.isArray(U)){let H=L.groups;for(let F=0,V=H.length;F<V;F++){let B=H[F],ne=U[B.materialIndex];if(ne&&ne.visible){let se=_(b,ne,M,w);b.onBeforeShadow(i,b,E,A,L,se,B),i.renderBufferDirect(A,null,L,se,b,B),b.onAfterShadow(i,b,E,A,L,se,B)}}}else if(U.visible){let H=_(b,U,M,w);b.onBeforeShadow(i,b,E,A,L,H,null),i.renderBufferDirect(A,null,L,H,b,null),b.onAfterShadow(i,b,E,A,L,H,null)}}let C=b.children;for(let L=0,U=C.length;L<U;L++)x(C[L],E,A,M,w)}function y(b){b.target.removeEventListener("dispose",y);for(let A in l){let M=l[A],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}var Qy={[ql]:Yl,[Kl]:Jl,[Zl]:jl,[Mr]:$l,[Yl]:ql,[Jl]:Kl,[jl]:Zl,[$l]:Mr};function eM(i,e){function t(){let G=!1,Ae=new dt,ee=null,le=new dt(0,0,0,0);return{setMask:function(Pe){ee!==Pe&&!G&&(i.colorMask(Pe,Pe,Pe,Pe),ee=Pe)},setLocked:function(Pe){G=Pe},setClear:function(Pe,Ce,Qe,qt,dn){dn===!0&&(Pe*=qt,Ce*=qt,Qe*=qt),Ae.set(Pe,Ce,Qe,qt),le.equals(Ae)===!1&&(i.clearColor(Pe,Ce,Qe,qt),le.copy(Ae))},reset:function(){G=!1,ee=null,le.set(-1,0,0,0)}}}function n(){let G=!1,Ae=!1,ee=null,le=null,Pe=null;return{setReversed:function(Ce){if(Ae!==Ce){let Qe=e.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);let qt=Pe;Pe=null,this.setClear(qt)}Ae=Ce},getReversed:function(){return Ae},setTest:function(Ce){Ce?de(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(Ce){ee!==Ce&&!G&&(i.depthMask(Ce),ee=Ce)},setFunc:function(Ce){if(Ae&&(Ce=Qy[Ce]),le!==Ce){switch(Ce){case ql:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Kl:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case Zl:i.depthFunc(i.EQUAL);break;case $l:i.depthFunc(i.GEQUAL);break;case Jl:i.depthFunc(i.GREATER);break;case jl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Ce}},setLocked:function(Ce){G=Ce},setClear:function(Ce){Pe!==Ce&&(Ae&&(Ce=1-Ce),i.clearDepth(Ce),Pe=Ce)},reset:function(){G=!1,ee=null,le=null,Pe=null,Ae=!1}}}function s(){let G=!1,Ae=null,ee=null,le=null,Pe=null,Ce=null,Qe=null,qt=null,dn=null;return{setTest:function(St){G||(St?de(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(St){Ae!==St&&!G&&(i.stencilMask(St),Ae=St)},setFunc:function(St,Yn,Mi){(ee!==St||le!==Yn||Pe!==Mi)&&(i.stencilFunc(St,Yn,Mi),ee=St,le=Yn,Pe=Mi)},setOp:function(St,Yn,Mi){(Ce!==St||Qe!==Yn||qt!==Mi)&&(i.stencilOp(St,Yn,Mi),Ce=St,Qe=Yn,qt=Mi)},setLocked:function(St){G=St},setClear:function(St){dn!==St&&(i.clearStencil(St),dn=St)},reset:function(){G=!1,Ae=null,ee=null,le=null,Pe=null,Ce=null,Qe=null,qt=null,dn=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,S=null,_=null,x=null,y=null,b=null,E=new Re(0,0,0),A=0,M=!1,w=null,T=null,C=null,L=null,U=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,V=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=V>=2);let ne=null,se={},J=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),_e=new dt().fromArray(J),q=new dt().fromArray(oe);function ae(G,Ae,ee,le){let Pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(G,Ce),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<ee;Qe++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Ae+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Ce}let ye={};ye[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Mr),he(!1),ve(Kd),de(i.CULL_FACE),N(hi);function de(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function Ne(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function ke(G,Ae){return u[G]!==Ae?(i.bindFramebuffer(G,Ae),u[G]=Ae,G===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ae),G===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Fe(G,Ae){let ee=f,le=!1;if(G){ee=d.get(Ae),ee===void 0&&(ee=[],d.set(Ae,ee));let Pe=G.textures;if(ee.length!==Pe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Qe=Pe.length;Ce<Qe;Ce++)ee[Ce]=i.COLOR_ATTACHMENT0+Ce;ee.length=Pe.length,le=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,le=!0);le&&i.drawBuffers(ee)}function Ze(G){return m!==G?(i.useProgram(G),m=G,!0):!1}let te={[Ls]:i.FUNC_ADD,[y0]:i.FUNC_SUBTRACT,[M0]:i.FUNC_REVERSE_SUBTRACT};te[b0]=i.MIN,te[w0]=i.MAX;let fe={[S0]:i.ZERO,[E0]:i.ONE,[T0]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[L0]:i.SRC_ALPHA_SATURATE,[I0]:i.DST_COLOR,[R0]:i.DST_ALPHA,[A0]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[P0]:i.ONE_MINUS_DST_COLOR,[C0]:i.ONE_MINUS_DST_ALPHA,[D0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[U0]:i.CONSTANT_ALPHA,[F0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(G,Ae,ee,le,Pe,Ce,Qe,qt,dn,St){if(G===hi){v===!0&&(Ne(i.BLEND),v=!1);return}if(v===!1&&(de(i.BLEND),v=!0),G!==_0){if(G!==g||St!==M){if((p!==Ls||x!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,x=Ls),St)switch(G){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $d:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Zd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $d:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}S=null,_=null,y=null,b=null,E.set(0,0,0),A=0,g=G,M=St}return}Pe=Pe||Ae,Ce=Ce||ee,Qe=Qe||le,(Ae!==p||Pe!==x)&&(i.blendEquationSeparate(te[Ae],te[Pe]),p=Ae,x=Pe),(ee!==S||le!==_||Ce!==y||Qe!==b)&&(i.blendFuncSeparate(fe[ee],fe[le],fe[Ce],fe[Qe]),S=ee,_=le,y=Ce,b=Qe),(qt.equals(E)===!1||dn!==A)&&(i.blendColor(qt.r,qt.g,qt.b,dn),E.copy(qt),A=dn),g=G,M=!1}function Le(G,Ae){G.side===Lt?Ne(i.CULL_FACE):de(i.CULL_FACE);let ee=G.side===an;Ae&&(ee=!ee),he(ee),G.blending===xr&&G.transparent===!1?N(hi):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);let le=G.stencilWrite;a.setTest(le),le&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function ve(G){G!==x0?(de(i.CULL_FACE),G!==T&&(G===Kd?i.cullFace(i.BACK):G===v0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),T=G}function pe(G){G!==C&&(F&&i.lineWidth(G),C=G)}function ie(G,Ae,ee){G?(de(i.POLYGON_OFFSET_FILL),(L!==Ae||U!==ee)&&(i.polygonOffset(Ae,ee),L=Ae,U=ee)):Ne(i.POLYGON_OFFSET_FILL)}function K(G){G?de(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function I(G){G===void 0&&(G=i.TEXTURE0+H-1),ne!==G&&(i.activeTexture(G),ne=G)}function R(G,Ae,ee){ee===void 0&&(ne===null?ee=i.TEXTURE0+H-1:ee=ne);let le=se[ee];le===void 0&&(le={type:void 0,texture:void 0},se[ee]=le),(le.type!==G||le.texture!==Ae)&&(ne!==ee&&(i.activeTexture(ee),ne=ee),i.bindTexture(G,Ae||ye[G]),le.type=G,le.texture=Ae)}function O(){let G=se[ne];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(G){_e.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),_e.copy(G))}function De(G){q.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function ht(G,Ae){let ee=l.get(Ae);ee===void 0&&(ee=new WeakMap,l.set(Ae,ee));let le=ee.get(G);le===void 0&&(le=i.getUniformBlockIndex(Ae,G.name),ee.set(G,le))}function st(G,Ae){let le=l.get(Ae).get(G);c.get(Ae)!==le&&(i.uniformBlockBinding(Ae,le,G.__bindingPointIndex),c.set(Ae,le))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,se={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,S=null,_=null,x=null,y=null,b=null,E=new Re(0,0,0),A=0,M=!1,w=null,T=null,C=null,L=null,U=null,_e.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ne,bindFramebuffer:ke,drawBuffers:Fe,useProgram:Ze,setBlending:N,setMaterial:Le,setFlipSided:he,setCullFace:ve,setLineWidth:pe,setPolygonOffset:ie,setScissorTest:K,activeTexture:I,bindTexture:R,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:Ue,texImage3D:Ve,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:qe,texStorage3D:me,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:xe,compressedTexSubImage3D:Ee,scissor:Xe,viewport:De,reset:Ct}}function Kf(i,e,t,n){let s=tM(n);switch(t){case Sp:return i*e;case Tp:return i*e;case Ap:return i*e*2;case bu:return i*e/s.components*s.byteLength;case wu:return i*e/s.components*s.byteLength;case Rp:return i*e*2/s.components*s.byteLength;case Su:return i*e*2/s.components*s.byteLength;case Ep:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Eu:return i*e*4/s.components*s.byteLength;case za:case Ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nh:case sh:return Math.max(i,16)*Math.max(e,8)/4;case th:case ih:return Math.max(i,8)*Math.max(e,8)/2;case rh:case oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case gh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case bh:case wh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cp:case Sh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Eh:case Th:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tM(i){switch(i){case kn:case Mp:return{byteLength:1,components:1};case So:case bp:case Pn:return{byteLength:2,components:1};case yu:case Mu:return{byteLength:2,components:4};case Fs:case _u:case Qn:return{byteLength:4,components:1};case wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function m(I,R){return f?new OffscreenCanvas(I,R):Eo("canvas")}function v(I,R,O){let Y=1,Q=K(I);if((Q.width>O||Q.height>O)&&(Y=O/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&I instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&I instanceof ImageBitmap||typeof VideoFrame!="undefined"&&I instanceof VideoFrame){let j=Math.floor(Y*Q.width),Te=Math.floor(Y*Q.height);u===void 0&&(u=m(j,Te));let xe=R?m(j,Te):u;return xe.width=j,xe.height=Te,xe.getContext("2d").drawImage(I,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Te+")."),xe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function S(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,R,O,Y,Q=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=R;if(R===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),R===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),R===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),R===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),R===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),R===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),R===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),R===i.RGBA){let Te=Q?bc:ot.getTransfer(Y);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=Te===bt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(I,R){let O;return I?R===null||R===Fs||R===Sr?O=i.DEPTH24_STENCIL8:R===Qn?O=i.DEPTH32F_STENCIL8:R===So&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Fs||R===Sr?O=i.DEPTH_COMPONENT24:R===Qn?O=i.DEPTH_COMPONENT32F:R===So&&(O=i.DEPTH_COMPONENT16),O}function y(I,R){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==cn&&I.minFilter!==Mn?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function b(I){let R=I.target;R.removeEventListener("dispose",b),A(R),R.isVideoTexture&&h.delete(R)}function E(I){let R=I.target;R.removeEventListener("dispose",E),w(R)}function A(I){let R=n.get(I);if(R.__webglInit===void 0)return;let O=I.source,Y=d.get(O);if(Y){let Q=Y[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(I),Object.keys(Y).length===0&&d.delete(O)}n.remove(I)}function M(I){let R=n.get(I);i.deleteTexture(R.__webglTexture);let O=I.source,Y=d.get(O);delete Y[R.__cacheKey],o.memory.textures--}function w(I){let R=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(R.__webglFramebuffer[Y]))for(let Q=0;Q<R.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(R.__webglFramebuffer[Y]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[Y])}else{if(Array.isArray(R.__webglFramebuffer))for(let Y=0;Y<R.__webglFramebuffer.length;Y++)i.deleteFramebuffer(R.__webglFramebuffer[Y]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Y=0;Y<R.__webglColorRenderbuffer.length;Y++)R.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[Y]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let O=I.textures;for(let Y=0,Q=O.length;Y<Q;Y++){let j=n.get(O[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[Y])}n.remove(I)}let T=0;function C(){T=0}function L(){let I=T;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),T+=1,I}function U(I){let R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function H(I,R){let O=n.get(I);if(I.isVideoTexture&&pe(I),I.isRenderTargetTexture===!1&&I.version>0&&O.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,I,R);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+R)}function F(I,R){let O=n.get(I);if(I.version>0&&O.__version!==I.version){q(O,I,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+R)}function V(I,R){let O=n.get(I);if(I.version>0&&O.__version!==I.version){q(O,I,R);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+R)}function B(I,R){let O=n.get(I);if(I.version>0&&O.__version!==I.version){ae(O,I,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+R)}let ne={[Ni]:i.REPEAT,[Pi]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},se={[cn]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},J={[X0]:i.NEVER,[J0]:i.ALWAYS,[q0]:i.LESS,[Lp]:i.LEQUAL,[Y0]:i.EQUAL,[$0]:i.GEQUAL,[K0]:i.GREATER,[Z0]:i.NOTEQUAL};function oe(I,R){if(R.type===Qn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Mn||R.magFilter===vo||R.magFilter===pr||R.magFilter===li||R.minFilter===Mn||R.minFilter===vo||R.minFilter===pr||R.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ne[R.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ne[R.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ne[R.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,se[R.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,se[R.minFilter]),R.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,J[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===cn||R.minFilter!==pr&&R.minFilter!==li||R.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function _e(I,R){let O=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",b));let Y=R.source,Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));let j=U(R);if(j!==I.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[j].usedTimes++;let Te=Q[I.__cacheKey];Te!==void 0&&(Q[I.__cacheKey].usedTimes--,Te.usedTimes===0&&M(R)),I.__cacheKey=j,I.__webglTexture=Q[j].texture}return O}function q(I,R,O){let Y=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Y=i.TEXTURE_3D);let Q=_e(I,R),j=R.source;t.bindTexture(Y,I.__webglTexture,i.TEXTURE0+O);let Te=n.get(j);if(j.version!==Te.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let xe=ot.getPrimaries(ot.workingColorSpace),Ee=R.colorSpace===ji?null:ot.getPrimaries(R.colorSpace),qe=R.colorSpace===ji||xe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let me=v(R.image,!1,s.maxTextureSize);me=ie(R,me);let Ue=r.convert(R.format,R.colorSpace),Ve=r.convert(R.type),Xe=_(R.internalFormat,Ue,Ve,R.colorSpace,R.isVideoTexture);oe(Y,R);let De,ht=R.mipmaps,st=R.isVideoTexture!==!0,Ct=Te.__version===void 0||Q===!0,G=j.dataReady,Ae=y(R,me);if(R.isDepthTexture)Xe=x(R.format===Er,R.type),Ct&&(st?t.texStorage2D(i.TEXTURE_2D,1,Xe,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Xe,me.width,me.height,0,Ue,Ve,null));else if(R.isDataTexture)if(ht.length>0){st&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ae,Xe,ht[0].width,ht[0].height);for(let ee=0,le=ht.length;ee<le;ee++)De=ht[ee],st?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Ue,Ve,De.data):t.texImage2D(i.TEXTURE_2D,ee,Xe,De.width,De.height,0,Ue,Ve,De.data);R.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(i.TEXTURE_2D,Ae,Xe,me.width,me.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,Ue,Ve,me.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,me.width,me.height,0,Ue,Ve,me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Xe,ht[0].width,ht[0].height,me.depth);for(let ee=0,le=ht.length;ee<le;ee++)if(De=ht[ee],R.format!==On)if(Ue!==null)if(st){if(G)if(R.layerUpdates.size>0){let Pe=Kf(De.width,De.height,R.format,R.type);for(let Ce of R.layerUpdates){let Qe=De.data.subarray(Ce*Pe/De.data.BYTES_PER_ELEMENT,(Ce+1)*Pe/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Ce,De.width,De.height,1,Ue,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,me.depth,Ue,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Xe,De.width,De.height,me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,De.width,De.height,me.depth,Ue,Ve,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Xe,De.width,De.height,me.depth,0,Ue,Ve,De.data)}else{st&&Ct&&t.texStorage2D(i.TEXTURE_2D,Ae,Xe,ht[0].width,ht[0].height);for(let ee=0,le=ht.length;ee<le;ee++)De=ht[ee],R.format!==On?Ue!==null?st?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Ue,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,De.width,De.height,Ue,Ve,De.data):t.texImage2D(i.TEXTURE_2D,ee,Xe,De.width,De.height,0,Ue,Ve,De.data)}else if(R.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Xe,me.width,me.height,me.depth),G)if(R.layerUpdates.size>0){let ee=Kf(me.width,me.height,R.format,R.type);for(let le of R.layerUpdates){let Pe=me.data.subarray(le*ee/me.data.BYTES_PER_ELEMENT,(le+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,Ue,Ve,Pe)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ue,Ve,me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,me.width,me.height,me.depth,0,Ue,Ve,me.data);else if(R.isData3DTexture)st?(Ct&&t.texStorage3D(i.TEXTURE_3D,Ae,Xe,me.width,me.height,me.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ue,Ve,me.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,me.width,me.height,me.depth,0,Ue,Ve,me.data);else if(R.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(i.TEXTURE_2D,Ae,Xe,me.width,me.height);else{let ee=me.width,le=me.height;for(let Pe=0;Pe<Ae;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Xe,ee,le,0,Ue,Ve,null),ee>>=1,le>>=1}}else if(ht.length>0){if(st&&Ct){let ee=K(ht[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Xe,ee.width,ee.height)}for(let ee=0,le=ht.length;ee<le;ee++)De=ht[ee],st?G&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ue,Ve,De):t.texImage2D(i.TEXTURE_2D,ee,Xe,Ue,Ve,De);R.generateMipmaps=!1}else if(st){if(Ct){let ee=K(me);t.texStorage2D(i.TEXTURE_2D,Ae,Xe,ee.width,ee.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Ve,me)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ue,Ve,me);g(R)&&p(Y),Te.__version=j.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ae(I,R,O){if(R.image.length!==6)return;let Y=_e(I,R),Q=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+O);let j=n.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);let Te=ot.getPrimaries(ot.workingColorSpace),xe=R.colorSpace===ji?null:ot.getPrimaries(R.colorSpace),Ee=R.colorSpace===ji||Te===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let qe=R.isCompressedTexture||R.image[0].isCompressedTexture,me=R.image[0]&&R.image[0].isDataTexture,Ue=[];for(let le=0;le<6;le++)!qe&&!me?Ue[le]=v(R.image[le],!0,s.maxCubemapSize):Ue[le]=me?R.image[le].image:R.image[le],Ue[le]=ie(R,Ue[le]);let Ve=Ue[0],Xe=r.convert(R.format,R.colorSpace),De=r.convert(R.type),ht=_(R.internalFormat,Xe,De,R.colorSpace),st=R.isVideoTexture!==!0,Ct=j.__version===void 0||Y===!0,G=Q.dataReady,Ae=y(R,Ve);oe(i.TEXTURE_CUBE_MAP,R);let ee;if(qe){st&&Ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ht,Ve.width,Ve.height);for(let le=0;le<6;le++){ee=Ue[le].mipmaps;for(let Pe=0;Pe<ee.length;Pe++){let Ce=ee[Pe];R.format!==On?Xe!==null?st?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ce.width,Ce.height,Xe,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,ht,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ce.width,Ce.height,Xe,De,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,ht,Ce.width,Ce.height,0,Xe,De,Ce.data)}}}else{if(ee=R.mipmaps,st&&Ct){ee.length>0&&Ae++;let le=K(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,ht,le.width,le.height)}for(let le=0;le<6;le++)if(me){st?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue[le].width,Ue[le].height,Xe,De,Ue[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ht,Ue[le].width,Ue[le].height,0,Xe,De,Ue[le].data);for(let Pe=0;Pe<ee.length;Pe++){let Qe=ee[Pe].image[le].image;st?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Qe.width,Qe.height,Xe,De,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,ht,Qe.width,Qe.height,0,Xe,De,Qe.data)}}else{st?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Xe,De,Ue[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ht,Xe,De,Ue[le]);for(let Pe=0;Pe<ee.length;Pe++){let Ce=ee[Pe];st?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Xe,De,Ce.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,ht,Xe,De,Ce.image[le])}}}g(R)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function ye(I,R,O,Y,Q,j){let Te=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),Ee=_(O.internalFormat,Te,xe,O.colorSpace),qe=n.get(R),me=n.get(O);if(me.__renderTarget=R,!qe.__hasExternalTextures){let Ue=Math.max(1,R.width>>j),Ve=Math.max(1,R.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Ee,Ue,Ve,R.depth,0,Te,xe,null):t.texImage2D(Q,j,Ee,Ue,Ve,0,Te,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ve(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,me.__webglTexture,0,he(R)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,me.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(I,R,O){if(i.bindRenderbuffer(i.RENDERBUFFER,I),R.depthBuffer){let Y=R.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=x(R.stencilBuffer,Q),Te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=he(R);ve(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,j,R.width,R.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,j,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,j,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{let Y=R.textures;for(let Q=0;Q<Y.length;Q++){let j=Y[Q],Te=r.convert(j.format,j.colorSpace),xe=r.convert(j.type),Ee=_(j.internalFormat,Te,xe,j.colorSpace),qe=he(R);O&&ve(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Ee,R.width,R.height):ve(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Ee,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(R.depthTexture);Y.__renderTarget=R,(!Y.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);let Q=Y.__webglTexture,j=he(R);if(R.depthTexture.format===vr)ve(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(R.depthTexture.format===Er)ve(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(I){let R=n.get(I),O=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Y){let Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=Y}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ne(R.__webglFramebuffer,I)}else if(O){R.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[Y]),R.__webglDepthbuffer[Y]===void 0)R.__webglDepthbuffer[Y]=i.createRenderbuffer(),de(R.__webglDepthbuffer[Y],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),de(R.__webglDepthbuffer,I,!1);else{let Y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(I,R,O){let Y=n.get(I);R!==void 0&&ye(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ke(I)}function Ze(I){let R=I.texture,O=n.get(I),Y=n.get(R);I.addEventListener("dispose",E);let Q=I.textures,j=I.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=R.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<R.mipmaps.length;Ee++)O.__webglFramebuffer[xe][Ee]=i.createFramebuffer()}else O.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)O.__webglFramebuffer[xe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Te)for(let xe=0,Ee=Q.length;xe<Ee;xe++){let qe=n.get(Q[xe]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&ve(I)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<Q.length;xe++){let Ee=Q[xe];O.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);let qe=r.convert(Ee.format,Ee.colorSpace),me=r.convert(Ee.type),Ue=_(Ee.internalFormat,qe,me,Ee.colorSpace,I.isXRRenderTarget===!0),Ve=he(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),de(O.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),oe(i.TEXTURE_CUBE_MAP,R);for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)ye(O.__webglFramebuffer[xe][Ee],I,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else ye(O.__webglFramebuffer[xe],I,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(R)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let xe=0,Ee=Q.length;xe<Ee;xe++){let qe=Q[xe],me=n.get(qe);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),oe(i.TEXTURE_2D,qe),ye(O.__webglFramebuffer,I,qe,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),g(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Y.__webglTexture),oe(xe,R),R.mipmaps&&R.mipmaps.length>0)for(let Ee=0;Ee<R.mipmaps.length;Ee++)ye(O.__webglFramebuffer[Ee],I,R,i.COLOR_ATTACHMENT0,xe,Ee);else ye(O.__webglFramebuffer,I,R,i.COLOR_ATTACHMENT0,xe,0);g(R)&&p(xe),t.unbindTexture()}I.depthBuffer&&ke(I)}function te(I){let R=I.textures;for(let O=0,Y=R.length;O<Y;O++){let Q=R[O];if(g(Q)){let j=S(I),Te=n.get(Q).__webglTexture;t.bindTexture(j,Te),p(j),t.unbindTexture()}}}let fe=[],N=[];function Le(I){if(I.samples>0){if(ve(I)===!1){let R=I.textures,O=I.width,Y=I.height,Q=i.COLOR_BUFFER_BIT,j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),xe=R.length>1;if(xe)for(let Ee=0;Ee<R.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<R.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let qe=n.get(R[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,Q,i.NEAREST),c===!0&&(fe.length=0,N.length=0,fe.push(i.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(fe.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ee=0;Ee<R.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);let qe=n.get(R[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let R=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function he(I){return Math.min(s.maxSamples,I.samples)}function ve(I){let R=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function pe(I){let R=o.render.frame;h.get(I)!==R&&(h.set(I,R),I.update())}function ie(I,R){let O=I.colorSpace,Y=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||O!==ln&&O!==ji&&(ot.getTransfer(O)===bt?(Y!==On||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),R}function K(I){return typeof HTMLImageElement!="undefined"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame!="undefined"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Fe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ve}function iM(i,e){function t(n,s=ji){let r,o=ot.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===yu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return i.BYTE;if(n===bp)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===_u)return i.INT;if(n===Fs)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Sp)return i.ALPHA;if(n===Ep)return i.RGB;if(n===On)return i.RGBA;if(n===Tp)return i.LUMINANCE;if(n===Ap)return i.LUMINANCE_ALPHA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===bu)return i.RED;if(n===wu)return i.RED_INTEGER;if(n===Rp)return i.RG;if(n===Su)return i.RG_INTEGER;if(n===Eu)return i.RGBA_INTEGER;if(n===za||n===Ba||n===ka||n===Ha)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===nh||n===ih||n===sh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===oh||n===ah)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rh||n===oh)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ah)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ch||n===lh||n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===xh||n===vh||n===_h||n===yh||n===Mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ch)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===bh||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cp||n===Sh||n===Eh||n===Th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Hh=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},sM={type:"move"},Mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oM=`
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

}`,Gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:rM,fragmentShader:oM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vh=class extends ns{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=new Gh,g=t.getContextAttributes(),p=null,S=null,_=[],x=[],y=new ce,b=null,E=new jt;E.viewport=new dt;let A=new jt;A.viewport=new dt;let M=[E,A],w=new Hh,T=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=_[q];return ae===void 0&&(ae=new Mo,_[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=_[q];return ae===void 0&&(ae=new Mo,_[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=_[q];return ae===void 0&&(ae=new Mo,_[q]=ae),ae.getHandSpace()};function L(q){let ae=x.indexOf(q.inputSource);if(ae===-1)return;let ye=_[ae];ye!==void 0&&(ye.update(q.inputSource,q.frame,l||o),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",H);for(let q=0;q<_.length;q++){let ae=x[q];ae!==null&&(x[q]=null,_[q].disconnect(ae))}T=null,C=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0){let ae={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hn(f.framebufferWidth,f.framebufferHeight,{format:On,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ae=null,ye=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=g.stencil?Er:vr,ye=g.stencil?Sr:Fs);let Ne={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ne),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new hn(d.textureWidth,d.textureHeight,{format:On,type:kn,depthTexture:new Ja(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(q){for(let ae=0;ae<q.removed.length;ae++){let ye=q.removed[ae],de=x.indexOf(ye);de>=0&&(x[de]=null,_[de].disconnect(ye))}for(let ae=0;ae<q.added.length;ae++){let ye=q.added[ae],de=x.indexOf(ye);if(de===-1){for(let ke=0;ke<_.length;ke++)if(ke>=x.length){x.push(ye),de=ke;break}else if(x[ke]===null){x[ke]=ye,de=ke;break}if(de===-1)break}let Ne=_[de];Ne&&Ne.connect(ye)}}let F=new D,V=new D;function B(q,ae,ye){F.setFromMatrixPosition(ae.matrixWorld),V.setFromMatrixPosition(ye.matrixWorld);let de=F.distanceTo(V),Ne=ae.projectionMatrix.elements,ke=ye.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),Ze=Ne[14]/(Ne[10]+1),te=(Ne[9]+1)/Ne[5],fe=(Ne[9]-1)/Ne[5],N=(Ne[8]-1)/Ne[0],Le=(ke[8]+1)/ke[0],he=Fe*N,ve=Fe*Le,pe=de/(-N+Le),ie=pe*-N;if(ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ie),q.translateZ(pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ne[10]===-1)q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let K=Fe+pe,I=Ze+pe,R=he-ie,O=ve+(de-ie),Y=te*Ze/I*K,Q=fe*Ze/I*K;q.projectionMatrix.makePerspective(R,O,Y,Q,K,I),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ae=q.near,ye=q.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),w.near=A.near=E.near=ae,w.far=A.far=E.far=ye,(T!==w.near||C!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),T=w.near,C=w.far),E.layers.mask=q.layers.mask|2,A.layers.mask=q.layers.mask|4,w.layers.mask=E.layers.mask|A.layers.mask;let de=q.parent,Ne=w.cameras;ne(w,de);for(let ke=0;ke<Ne.length;ke++)ne(Ne[ke],de);Ne.length===2?B(w,E,A):w.projectionMatrix.copy(E.projectionMatrix),se(q,w,de)};function se(q,ae,ye){ye===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Rr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let J=null;function oe(q,ae){if(h=ae.getViewerPose(l||o),m=ae,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let de=!1;ye.length!==w.cameras.length&&(w.cameras.length=0,de=!0);for(let ke=0;ke<ye.length;ke++){let Fe=ye[ke],Ze=null;if(f!==null)Ze=f.getViewport(Fe);else{let fe=u.getViewSubImage(d,Fe);Ze=fe.viewport,ke===0&&(e.setRenderTargetTextures(S,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(S))}let te=M[ke];te===void 0&&(te=new jt,te.layers.enable(ke),te.viewport=new dt,M[ke]=te),te.matrix.fromArray(Fe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Fe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ke===0&&(w.matrix.copy(te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),de===!0&&w.cameras.push(te)}let Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){let ke=u.getDepthInformation(ye[0]);ke&&ke.isValid&&ke.texture&&v.init(e,ke,s.renderState)}}for(let ye=0;ye<_.length;ye++){let de=x[ye],Ne=_[ye];de!==null&&Ne!==void 0&&Ne.update(de,ae,l||o)}J&&J(q,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),m=null}let _e=new Fp;_e.setAnimationLoop(oe),this.setAnimationLoop=function(q){J=q},this.dispose=function(){}}},Is=new en,aM=new We;function cM(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Up(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=e.get(p),_=S.envMap,x=S.envMapRotation;_&&(g.envMap.value=_,Is.copy(x),Is.x*=-1,Is.y*=-1,Is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),g.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(Is)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,_){let x=_.program;n.uniformBlockBinding(S,x)}function l(S,_){let x=s[S.id];x===void 0&&(m(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",g));let y=_.program;n.updateUBOMapping(S,y);let b=e.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){let _=u();S.__bindingPointIndex=_;let x=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let _=s[S.id],x=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,E=x.length;b<E;b++){let A=Array.isArray(x[b])?x[b]:[x[b]];for(let M=0,w=A.length;M<w;M++){let T=A[M];if(f(T,b,M,y)===!0){let C=T.__offset,L=Array.isArray(T.value)?T.value:[T.value],U=0;for(let H=0;H<L.length;H++){let F=L[H],V=v(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,C+U,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,_,x,y){let b=S.value,E=_+"_"+x;if(y[E]===void 0)return typeof b=="number"||typeof b=="boolean"?y[E]=b:y[E]=b.clone(),!0;{let A=y[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return y[E]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function m(S){let _=S.uniforms,x=0,y=16;for(let E=0,A=_.length;E<A;E++){let M=Array.isArray(_[E])?_[E]:[_[E]];for(let w=0,T=M.length;w<T;w++){let C=M[w],L=Array.isArray(C.value)?C.value:[C.value];for(let U=0,H=L.length;U<H;U++){let F=L[U],V=v(F),B=x%y,ne=B%V.boundary,se=B+ne;x+=ne,se!==0&&y-se<V.storage&&(x+=y-se),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=V.storage}}}let b=x%y;return b>0&&(x+=y-b),S.__size=x,S.__cache={},this}function v(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function g(S){let _=S.target;_.removeEventListener("dispose",g);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var ja=class{constructor(e={}){let{canvas:t=pg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,S=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=es,this.toneMappingExposure=1;let x=this,y=!1,b=0,E=0,A=null,M=-1,w=null,T=new dt,C=new dt,L=null,U=new Re(0),H=0,F=t.width,V=t.height,B=1,ne=null,se=null,J=new dt(0,0,F,V),oe=new dt(0,0,F,V),_e=!1,q=new To,ae=!1,ye=!1,de=new We,Ne=new We,ke=new D,Fe=new dt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function fe(){return A===null?B:1}let N=n;function Le(P,W){return t.getContext(P,W)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${du}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),N===null){let W="webgl2";if(N=Le(W,P),N===null)throw Le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let he,ve,pe,ie,K,I,R,O,Y,Q,j,Te,xe,Ee,qe,me,Ue,Ve,Xe,De,ht,st,Ct,G;function Ae(){he=new E_(N),he.init(),st=new iM(N,he),ve=new __(N,he,e,st),pe=new eM(N,he),ve.reverseDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),ie=new R_(N),K=new Hy,I=new nM(N,he,pe,K,ve,st,ie),R=new M_(x),O=new S_(x),Y=new Ug(N),Ct=new x_(N,Y),Q=new T_(N,Y,ie,Ct),j=new I_(N,Q,Y,ie),Xe=new C_(N,ve,I),me=new y_(K),Te=new ky(x,R,O,he,ve,Ct,me),xe=new cM(x,K),Ee=new Vy,qe=new Zy(he),Ve=new g_(x,R,O,pe,j,f,c),Ue=new jy(x,j,ve),G=new lM(N,ie,ve,pe),De=new v_(N,he,ie),ht=new A_(N,he,ie),ie.programs=Te.programs,x.capabilities=ve,x.extensions=he,x.properties=K,x.renderLists=Ee,x.shadowMap=Ue,x.state=pe,x.info=ie}Ae();let ee=new Vh(x,N);this.xr=ee,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let P=he.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=he.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(P){P!==void 0&&(B=P,this.setSize(F,V,!1))},this.getSize=function(P){return P.set(F,V)},this.setSize=function(P,W,Z=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,V=W,t.width=Math.floor(P*B),t.height=Math.floor(W*B),Z===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(F*B,V*B).floor()},this.setDrawingBufferSize=function(P,W,Z){F=P,V=W,B=Z,t.width=Math.floor(P*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,W,Z,$){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,W,Z,$),pe.viewport(T.copy(J).multiplyScalar(B).round())},this.getScissor=function(P){return P.copy(oe)},this.setScissor=function(P,W,Z,$){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,W,Z,$),pe.scissor(C.copy(oe).multiplyScalar(B).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(P){pe.setScissorTest(_e=P)},this.setOpaqueSort=function(P){ne=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(P=!0,W=!0,Z=!0){let $=0;if(P){let X=!1;if(A!==null){let Me=A.texture.format;X=Me===Eu||Me===Su||Me===wu}if(X){let Me=A.texture.type,Ie=Me===kn||Me===Fs||Me===So||Me===Sr||Me===yu||Me===Mu,Oe=Ve.getClearColor(),ze=Ve.getClearAlpha(),$e=Oe.r,et=Oe.g,Be=Oe.b;Ie?(m[0]=$e,m[1]=et,m[2]=Be,m[3]=ze,N.clearBufferuiv(N.COLOR,0,m)):(v[0]=$e,v[1]=et,v[2]=Be,v[3]=ze,N.clearBufferiv(N.COLOR,0,v))}else $|=N.COLOR_BUFFER_BIT}W&&($|=N.DEPTH_BUFFER_BIT),Z&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),Ee.dispose(),qe.dispose(),K.dispose(),R.dispose(),O.dispose(),j.dispose(),Ct.dispose(),G.dispose(),Te.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",kd),ee.removeEventListener("sessionend",Hd),Ss.stop()};function le(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let P=ie.autoReset,W=Ue.enabled,Z=Ue.autoUpdate,$=Ue.needsUpdate,X=Ue.type;Ae(),ie.autoReset=P,Ue.enabled=W,Ue.autoUpdate=Z,Ue.needsUpdate=$,Ue.type=X}function Ce(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){let W=P.target;W.removeEventListener("dispose",Qe),qt(W)}function qt(P){dn(P),K.remove(P)}function dn(P){let W=K.get(P).programs;W!==void 0&&(W.forEach(function(Z){Te.releaseProgram(Z)}),P.isShaderMaterial&&Te.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Z,$,X,Me){W===null&&(W=Ze);let Ie=X.isMesh&&X.matrixWorld.determinant()<0,Oe=p0(P,W,Z,$,X);pe.setMaterial($,Ie);let ze=Z.index,$e=1;if($.wireframe===!0){if(ze=Q.getWireframeAttribute(Z),ze===void 0)return;$e=2}let et=Z.drawRange,Be=Z.attributes.position,mt=et.start*$e,It=(et.start+et.count)*$e;Me!==null&&(mt=Math.max(mt,Me.start*$e),It=Math.min(It,(Me.start+Me.count)*$e)),ze!==null?(mt=Math.max(mt,0),It=Math.min(It,ze.count)):Be!=null&&(mt=Math.max(mt,0),It=Math.min(It,Be.count));let Nt=It-mt;if(Nt<0||Nt===1/0)return;Ct.setup(X,$,Oe,Z,ze);let yn,yt=De;if(ze!==null&&(yn=Y.get(ze),yt=ht,yt.setIndex(yn)),X.isMesh)$.wireframe===!0?(pe.setLineWidth($.wireframeLinewidth*fe()),yt.setMode(N.LINES)):yt.setMode(N.TRIANGLES);else if(X.isLine){let He=$.linewidth;He===void 0&&(He=1),pe.setLineWidth(He*fe()),X.isLineSegments?yt.setMode(N.LINES):X.isLineLoop?yt.setMode(N.LINE_LOOP):yt.setMode(N.LINE_STRIP)}else X.isPoints?yt.setMode(N.POINTS):X.isSprite&&yt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)yt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))yt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let He=X._multiDrawStarts,bi=X._multiDrawCounts,Mt=X._multiDrawCount,Kn=ze?Y.get(ze).bytesPerElement:1,js=K.get($).currentProgram.getUniforms();for(let En=0;En<Mt;En++)js.setValue(N,"_gl_DrawID",En),yt.render(He[En]/Kn,bi[En])}else if(X.isInstancedMesh)yt.renderInstances(mt,Nt,X.count);else if(Z.isInstancedBufferGeometry){let He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,bi=Math.min(Z.instanceCount,He);yt.renderInstances(mt,Nt,bi)}else yt.render(mt,Nt)};function St(P,W,Z){P.transparent===!0&&P.side===Lt&&P.forceSinglePass===!1?(P.side=an,P.needsUpdate=!0,aa(P,W,Z),P.side=ui,P.needsUpdate=!0,aa(P,W,Z),P.side=Lt):aa(P,W,Z)}this.compile=function(P,W,Z=null){Z===null&&(Z=P),p=qe.get(Z),p.init(W),_.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),P!==Z&&P.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let $=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Me=X.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){let Oe=Me[Ie];St(Oe,Z,X),$.add(Oe)}else St(Me,Z,X),$.add(Me)}),_.pop(),p=null,$},this.compileAsync=function(P,W,Z=null){let $=this.compile(P,W,Z);return new Promise(X=>{function Me(){if($.forEach(function(Ie){K.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){X(P);return}setTimeout(Me,10)}he.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Yn=null;function Mi(P){Yn&&Yn(P)}function kd(){Ss.stop()}function Hd(){Ss.start()}let Ss=new Fp;Ss.setAnimationLoop(Mi),typeof self!="undefined"&&Ss.setContext(self),this.setAnimationLoop=function(P){Yn=P,ee.setAnimationLoop(P),P===null?Ss.stop():Ss.start()},ee.addEventListener("sessionstart",kd),ee.addEventListener("sessionend",Hd),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,W,A),p=qe.get(P,_.length),p.init(W),_.push(p),Ne.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,ae=me.init(this.clippingPlanes,ye),g=Ee.get(P,S.length),g.init(),S.push(g),ee.enabled===!0&&ee.isPresenting===!0){let Me=x.xr.getDepthSensingMesh();Me!==null&&cl(Me,W,-1/0,x.sortObjects)}cl(P,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ne,se),te=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,te&&Ve.addToRenderList(g,P),this.info.render.frame++,ae===!0&&me.beginShadows();let Z=p.state.shadowsArray;Ue.render(Z,P,W),ae===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=g.opaque,X=g.transmissive;if(p.setupLights(),W.isArrayCamera){let Me=W.cameras;if(X.length>0)for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){let ze=Me[Ie];Vd($,X,P,ze)}te&&Ve.render(P);for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++){let ze=Me[Ie];Gd(g,P,ze,ze.viewport)}}else X.length>0&&Vd($,X,P,W),te&&Ve.render(P),Gd(g,P,W);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(x,P,W),Ct.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function cl(P,W,Z,$){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||q.intersectsSprite(P)){$&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ne);let Ie=j.update(P),Oe=P.material;Oe.visible&&g.push(P,Ie,Oe,Z,Fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||q.intersectsObject(P))){let Ie=j.update(P),Oe=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Fe.copy(Ie.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(Ne)),Array.isArray(Oe)){let ze=Ie.groups;for(let $e=0,et=ze.length;$e<et;$e++){let Be=ze[$e],mt=Oe[Be.materialIndex];mt&&mt.visible&&g.push(P,Ie,mt,Z,Fe.z,Be)}}else Oe.visible&&g.push(P,Ie,Oe,Z,Fe.z,null)}}let Me=P.children;for(let Ie=0,Oe=Me.length;Ie<Oe;Ie++)cl(Me[Ie],W,Z,$)}function Gd(P,W,Z,$){let X=P.opaque,Me=P.transmissive,Ie=P.transparent;p.setupLightsView(Z),ae===!0&&me.setGlobalState(x.clippingPlanes,Z),$&&pe.viewport(T.copy($)),X.length>0&&oa(X,W,Z),Me.length>0&&oa(Me,W,Z),Ie.length>0&&oa(Ie,W,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Vd(P,W,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new hn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Pn:kn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));let Me=p.state.transmissionRenderTarget[$.id],Ie=$.viewport||T;Me.setSize(Ie.z,Ie.w);let Oe=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(U),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),te&&Ve.render(Z);let ze=x.toneMapping;x.toneMapping=es;let $e=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ae===!0&&me.setGlobalState(x.clippingPlanes,$),oa(P,Z,$),I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me),he.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Be=0,mt=W.length;Be<mt;Be++){let It=W[Be],Nt=It.object,yn=It.geometry,yt=It.material,He=It.group;if(yt.side===Lt&&Nt.layers.test($.layers)){let bi=yt.side;yt.side=an,yt.needsUpdate=!0,Wd(Nt,Z,$,yn,yt,He),yt.side=bi,yt.needsUpdate=!0,et=!0}}et===!0&&(I.updateMultisampleRenderTarget(Me),I.updateRenderTargetMipmap(Me))}x.setRenderTarget(Oe),x.setClearColor(U,H),$e!==void 0&&($.viewport=$e),x.toneMapping=ze}function oa(P,W,Z){let $=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Me=P.length;X<Me;X++){let Ie=P[X],Oe=Ie.object,ze=Ie.geometry,$e=$===null?Ie.material:$,et=Ie.group;Oe.layers.test(Z.layers)&&Wd(Oe,W,Z,ze,$e,et)}}function Wd(P,W,Z,$,X,Me){P.onBeforeRender(x,W,Z,$,X,Me),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(x,W,Z,$,P,Me),X.transparent===!0&&X.side===Lt&&X.forceSinglePass===!1?(X.side=an,X.needsUpdate=!0,x.renderBufferDirect(Z,W,$,X,P,Me),X.side=ui,X.needsUpdate=!0,x.renderBufferDirect(Z,W,$,X,P,Me),X.side=Lt):x.renderBufferDirect(Z,W,$,X,P,Me),P.onAfterRender(x,W,Z,$,X,Me)}function aa(P,W,Z){W.isScene!==!0&&(W=Ze);let $=K.get(P),X=p.state.lights,Me=p.state.shadowsArray,Ie=X.state.version,Oe=Te.getParameters(P,X.state,Me,W,Z),ze=Te.getProgramCacheKey(Oe),$e=$.programs;$.environment=P.isMeshStandardMaterial?W.environment:null,$.fog=W.fog,$.envMap=(P.isMeshStandardMaterial?O:R).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,$e===void 0&&(P.addEventListener("dispose",Qe),$e=new Map,$.programs=$e);let et=$e.get(ze);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Ie)return qd(P,Oe),et}else Oe.uniforms=Te.getUniforms(P),P.onBeforeCompile(Oe,x),et=Te.acquireProgram(Oe,ze),$e.set(ze,et),$.uniforms=Oe.uniforms;let Be=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Be.clippingPlanes=me.uniform),qd(P,Oe),$.needsLights=g0(P),$.lightsStateVersion=Ie,$.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=et,$.uniformsList=null,et}function Xd(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=yr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function qd(P,W){let Z=K.get(P);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function p0(P,W,Z,$,X){W.isScene!==!0&&(W=Ze),I.resetTextureUnits();let Me=W.fog,Ie=$.isMeshStandardMaterial?W.environment:null,Oe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ln,ze=($.isMeshStandardMaterial?O:R).get($.envMap||Ie),$e=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,It=!!Z.morphAttributes.color,Nt=es;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Nt=x.toneMapping);let yn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=yn!==void 0?yn.length:0,He=K.get($),bi=p.state.lights;if(ae===!0&&(ye===!0||P!==w)){let Un=P===w&&$.id===M;me.setState($,P,Un)}let Mt=!1;$.version===He.__version?(He.needsLights&&He.lightsStateVersion!==bi.state.version||He.outputColorSpace!==Oe||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==ze||$.fog===!0&&He.fog!==Me||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==me.numPlanes||He.numIntersection!==me.numIntersection)||He.vertexAlphas!==$e||He.vertexTangents!==et||He.morphTargets!==Be||He.morphNormals!==mt||He.morphColors!==It||He.toneMapping!==Nt||He.morphTargetsCount!==yt)&&(Mt=!0):(Mt=!0,He.__version=$.version);let Kn=He.currentProgram;Mt===!0&&(Kn=aa($,W,X));let js=!1,En=!1,ro=!1,Ut=Kn.getUniforms(),ai=He.uniforms;if(pe.useProgram(Kn.program)&&(js=!0,En=!0,ro=!0),$.id!==M&&(M=$.id,En=!0),js||w!==P){pe.buffers.depth.getReversed()?(de.copy(P.projectionMatrix),gg(de),xg(de),Ut.setValue(N,"projectionMatrix",de)):Ut.setValue(N,"projectionMatrix",P.projectionMatrix),Ut.setValue(N,"viewMatrix",P.matrixWorldInverse);let Wi=Ut.map.cameraPosition;Wi!==void 0&&Wi.setValue(N,ke.setFromMatrixPosition(P.matrixWorld)),ve.logarithmicDepthBuffer&&Ut.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ut.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,En=!0,ro=!0)}if(X.isSkinnedMesh){Ut.setOptional(N,X,"bindMatrix"),Ut.setOptional(N,X,"bindMatrixInverse");let Un=X.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ut.setValue(N,"boneTexture",Un.boneTexture,I))}X.isBatchedMesh&&(Ut.setOptional(N,X,"batchingTexture"),Ut.setValue(N,"batchingTexture",X._matricesTexture,I),Ut.setOptional(N,X,"batchingIdTexture"),Ut.setValue(N,"batchingIdTexture",X._indirectTexture,I),Ut.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(N,"batchingColorTexture",X._colorsTexture,I));let oo=Z.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0)&&Xe.update(X,Z,Kn),(En||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,Ut.setValue(N,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ai.envMap.value=ze,ai.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&W.environment!==null&&(ai.envMapIntensity.value=W.environmentIntensity),En&&(Ut.setValue(N,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&m0(ai,ro),Me&&$.fog===!0&&xe.refreshFogUniforms(ai,Me),xe.refreshMaterialUniforms(ai,$,B,V,p.state.transmissionRenderTarget[P.id]),yr.upload(N,Xd(He),ai,I)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yr.upload(N,Xd(He),ai,I),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ut.setValue(N,"center",X.center),Ut.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(N,"normalMatrix",X.normalMatrix),Ut.setValue(N,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Un=$.uniformsGroups;for(let Wi=0,Xi=Un.length;Wi<Xi;Wi++){let Yd=Un[Wi];G.update(Yd,Kn),G.bind(Yd,Kn)}}return Kn}function m0(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function g0(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,W,Z){K.get(P.texture).__webglTexture=W,K.get(P.depthTexture).__webglTexture=Z;let $=K.get(P);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Z===void 0,$.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){let Z=K.get(P);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Z=0){A=P,b=W,E=Z;let $=!0,X=null,Me=!1,Ie=!1;if(P){let ze=K.get(P);if(ze.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(ze.__hasExternalTextures)I.rebindTextures(P,K.get(P.texture).__webglTexture,K.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Be=P.depthTexture;if(ze.__boundDepthTexture!==Be){if(Be!==null&&K.has(Be)&&(P.width!==Be.image.width||P.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}let $e=P.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);let et=K.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[W])?X=et[W][Z]:X=et[W],Me=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?X=K.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?X=et[Z]:X=et,T.copy(P.viewport),C.copy(P.scissor),L=P.scissorTest}else T.copy(J).multiplyScalar(B).floor(),C.copy(oe).multiplyScalar(B).floor(),L=_e;if(pe.bindFramebuffer(N.FRAMEBUFFER,X)&&$&&pe.drawBuffers(P,X),pe.viewport(T),pe.scissor(C),pe.setScissorTest(L),Me){let ze=K.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,Z)}else if(Ie){let ze=K.get(P.texture),$e=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,Z||0,$e)}M=-1},this.readRenderTargetPixels=function(P,W,Z,$,X,Me,Ie){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){pe.bindFramebuffer(N.FRAMEBUFFER,Oe);try{let ze=P.texture,$e=ze.format,et=ze.type;if(!ve.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-$&&Z>=0&&Z<=P.height-X&&N.readPixels(W,Z,$,X,st.convert($e),st.convert(et),Me)}finally{let ze=A!==null?K.get(A).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(P,W,Z,$,X,Me,Ie){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=K.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){let ze=P.texture,$e=ze.format,et=ze.type;if(!ve.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-$&&Z>=0&&Z<=P.height-X){pe.bindFramebuffer(N.FRAMEBUFFER,Oe);let Be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.bufferData(N.PIXEL_PACK_BUFFER,Me.byteLength,N.STREAM_READ),N.readPixels(W,Z,$,X,st.convert($e),st.convert(et),0);let mt=A!==null?K.get(A).__webglFramebuffer:null;pe.bindFramebuffer(N.FRAMEBUFFER,mt);let It=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mg(N,It,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Me),N.deleteBuffer(Be),N.deleteSync(It),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,Z=0){P.isTexture!==!0&&(go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);let $=Math.pow(2,-Z),X=Math.floor(P.image.width*$),Me=Math.floor(P.image.height*$),Ie=W!==null?W.x:0,Oe=W!==null?W.y:0;I.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Ie,Oe,X,Me),pe.unbindTexture()},this.copyTextureToTexture=function(P,W,Z=null,$=null,X=0){P.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1],W=arguments[2],X=arguments[3]||0,Z=null);let Me,Ie,Oe,ze,$e,et,Be,mt,It,Nt=P.isCompressedTexture?P.mipmaps[X]:P.image;Z!==null?(Me=Z.max.x-Z.min.x,Ie=Z.max.y-Z.min.y,Oe=Z.isBox3?Z.max.z-Z.min.z:1,ze=Z.min.x,$e=Z.min.y,et=Z.isBox3?Z.min.z:0):(Me=Nt.width,Ie=Nt.height,Oe=Nt.depth||1,ze=0,$e=0,et=0),$!==null?(Be=$.x,mt=$.y,It=$.z):(Be=0,mt=0,It=0);let yn=st.convert(W.format),yt=st.convert(W.type),He;W.isData3DTexture?(I.setTexture3D(W,0),He=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),He=N.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),He=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);let bi=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Kn=N.getParameter(N.UNPACK_SKIP_PIXELS),js=N.getParameter(N.UNPACK_SKIP_ROWS),En=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Nt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Nt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,$e),N.pixelStorei(N.UNPACK_SKIP_IMAGES,et);let ro=P.isDataArrayTexture||P.isData3DTexture,Ut=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let ai=K.get(P),oo=K.get(W),Un=K.get(ai.__renderTarget),Wi=K.get(oo.__renderTarget);pe.bindFramebuffer(N.READ_FRAMEBUFFER,Un.__webglFramebuffer),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Xi=0;Xi<Oe;Xi++)ro&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,K.get(P).__webglTexture,X,et+Xi),P.isDepthTexture?(Ut&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,K.get(W).__webglTexture,X,It+Xi),N.blitFramebuffer(ze,$e,Me,Ie,Be,mt,Me,Ie,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ut?N.copyTexSubImage3D(He,X,Be,mt,It+Xi,ze,$e,Me,Ie):N.copyTexSubImage2D(He,X,Be,mt,It+Xi,ze,$e,Me,Ie);pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ut?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(He,X,Be,mt,It,Me,Ie,Oe,yn,yt,Nt.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(He,X,Be,mt,It,Me,Ie,Oe,yn,Nt.data):N.texSubImage3D(He,X,Be,mt,It,Me,Ie,Oe,yn,yt,Nt):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,Be,mt,Me,Ie,yn,yt,Nt.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,Be,mt,Nt.width,Nt.height,yn,Nt.data):N.texSubImage2D(N.TEXTURE_2D,X,Be,mt,Me,Ie,yn,yt,Nt);N.pixelStorei(N.UNPACK_ROW_LENGTH,bi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Kn),N.pixelStorei(N.UNPACK_SKIP_ROWS,js),N.pixelStorei(N.UNPACK_SKIP_IMAGES,En),X===0&&W.generateMipmaps&&N.generateMipmap(He),pe.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Z=null,$=null,X=0){return P.isTexture!==!0&&(go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,$=arguments[1]||null,P=arguments[2],W=arguments[3],X=arguments[4]||0),go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,Z,$,X)},this.initRenderTarget=function(P){K.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),pe.unbindTexture()},this.resetState=function(){b=0,E=0,A=null,pe.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var Qa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new D,ss=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),s=Et(s,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ge(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Zf=new D,$f=new dt,Jf=new dt,hM=new D,jf=new We,Ra=new D,Fl=new Rn,Qf=new We,Ol=new Cr,ec=class extends ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jd,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(s),e.ray.intersectsSphere(Fl)!==!1&&(Qf.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Jf.fromBufferAttribute(s.attributes.skinWeight,e),Zf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Jf.getComponent(r);if(o!==0){let a=$f.getComponent(r);jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(hM.copy(Zf).applyMatrix4(jf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ao=class extends Ft{constructor(){super(),this.isBone=!0,this.type="Bone"}},tc=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=cn,h=cn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new We,uM=new We,nc=class i{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:uM;ep.multiplyMatrices(a,t[r]),ep.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new tc(t,e,e,On,Qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ao),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},zs=class extends Ge{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new We,tp=new We,Ca=[],np=new mn,dM=new We,uo=new ue,fo=new Rn,Je=class extends ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),np.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fr),fo.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),tp.multiplyMatrices(n,fr),uo.matrixWorld=tp,uo.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let c=Ca[o];c.instanceId=r,c.object=this,t.push(c)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tc(new Float32Array(s*this.count),s,this.count,bu,Qn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Bs=class extends Cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ic=new D,sc=new D,ip=new We,po=new Cr,Ia=new Rn,zl=new D,sp=new D,Dr=class extends Ft{constructor(e=new at,t=new Bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ic.fromBufferAttribute(t,s-1),sc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ic.distanceTo(sc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),Ia.radius+=r,e.ray.intersectsSphere(Ia)===!1)return;ip.copy(s).invert(),po.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){let p=h.getX(v),S=h.getX(v+1),_=Pa(this,e,po,c,p,S);_&&t.push(_)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=Pa(this,e,po,c,v,g);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){let p=Pa(this,e,po,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Pa(this,e,po,c,m-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pa(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(ic.fromBufferAttribute(o,s),sc.fromBufferAttribute(o,r),t.distanceSqToSegment(ic,sc,zl,sp)>n)return;zl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zl);if(!(c<e.near||c>e.far))return{distance:c,point:sp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var rp=new D,op=new D,Nr=class extends Dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rp.fromBufferAttribute(t,s),op.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rp.distanceTo(op);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},rc=class extends Dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ro=class extends Cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ap=new We,Wh=new Cr,La=new Rn,Da=new D,Ur=class extends Ft{constructor(e=new at,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;ap.copy(s).invert(),Wh.copy(e.ray).applyMatrix4(ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,v=f;m<v;m++){let g=l.getX(m);Da.fromBufferAttribute(u,g),cp(Da,g,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,v=f;m<v;m++)Da.fromBufferAttribute(u,m),cp(Da,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cp(i,e,t,n,s,r,o){let a=Wh.distanceSqToPoint(i);if(a<t){let c=new D;Wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Co=class extends Qt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=cn,this.minFilter=cn,this.generateMipmaps=!1,this.needsUpdate=!0}};var ei=class extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],o=[],a=new D,c=new We;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(on(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(on(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Io=class extends Hn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xh=class extends Io{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ru(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Na=new D,Bl=new Ru,kl=new Ru,Hl=new Ru,qh=class extends Hn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Na.subVectors(s[0],s[1]).add(s[0]),l=Na);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Na.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Na),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Bl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),kl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Hl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),kl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Hl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Bl.calc(c),kl.calc(c),Hl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function fM(i,e){let t=1-i;return t*t*e}function pM(i,e){return 2*(1-i)*i*e}function mM(i,e){return i*i*e}function bo(i,e,t,n){return fM(i,e)+pM(i,t)+mM(i,n)}function gM(i,e){let t=1-i;return t*t*t*e}function xM(i,e){let t=1-i;return 3*t*t*i*e}function vM(i,e){return 3*(1-i)*i*i*e}function _M(i,e){return i*i*i*e}function wo(i,e,t,n,s){return gM(i,e)+xM(i,t)+vM(i,n)+_M(i,s)}var oc=class extends Hn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,s.x,r.x,o.x,a.x),wo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yh=class extends Hn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,s.x,r.x,o.x,a.x),wo(e,s.y,r.y,o.y,a.y),wo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Hn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kh=class extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Hn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bo(e,s.x,r.x,o.x),bo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zh=class extends Hn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(bo(e,s.x,r.x,o.x),bo(e,s.y,r.y,o.y),bo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lp(a,c.x,l.x,h.x,u.x),lp(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},$h=Object.freeze({__proto__:null,ArcCurve:Xh,CatmullRomCurve3:qh,CubicBezierCurve:oc,CubicBezierCurve3:Yh,EllipseCurve:Io,LineCurve:ac,LineCurve3:Kh,QuadraticBezierCurve:cc,QuadraticBezierCurve3:Zh,SplineCurve:lc}),Jh=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new $h[s.type]().fromJSON(s))}return this}},hc=class extends Jh{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ac(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new cc(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new oc(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new lc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Io(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ks=class i extends at{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ht=class i extends at{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;S(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function S(){let x=new D,y=new D,b=0,E=(t-e)/n;for(let A=0;A<=r;A++){let M=[],w=A/r,T=w*(t-e)+e;for(let C=0;C<=s;C++){let L=C/s,U=L*c+a,H=Math.sin(U),F=Math.cos(U);y.x=T*H,y.y=-w*n+g,y.z=T*F,u.push(y.x,y.y,y.z),x.set(H,E,F).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-w),M.push(m++)}v.push(M)}for(let A=0;A<s;A++)for(let M=0;M<r;M++){let w=v[M][A],T=v[M+1][A],C=v[M+1][A+1],L=v[M][A+1];(e>0||M!==0)&&(h.push(w,T,L),b+=3),(t>0||M!==r-1)&&(h.push(T,C,L),b+=3)}l.addGroup(p,b,0),p+=b}function _(x){let y=m,b=new ce,E=new D,A=0,M=x===!0?e:t,w=x===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let T=m;for(let C=0;C<=s;C++){let U=C/s*c+a,H=Math.cos(U),F=Math.sin(U);E.x=M*F,E.y=g*w,E.z=M*H,u.push(E.x,E.y,E.z),d.push(0,w,0),b.x=H*.5+.5,b.y=F*.5*w+.5,f.push(b.x,b.y),m++}for(let C=0;C<s;C++){let L=y+C,U=T+C;x===!0?h.push(U,U+1,L):h.push(U+1,U,L),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Po=class i extends Ht{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jh=class i extends at{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new D,x=new D,y=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],_),f(t[b+1],x),f(t[b+2],y),c(_,x,y,S)}function c(S,_,x,y){let b=y+1,E=[];for(let A=0;A<=b;A++){E[A]=[];let M=S.clone().lerp(x,A/b),w=_.clone().lerp(x,A/b),T=b-A;for(let C=0;C<=T;C++)C===0&&A===b?E[A][C]=M:E[A][C]=M.clone().lerp(w,C/T)}for(let A=0;A<b;A++)for(let M=0;M<2*(b-A)-1;M++){let w=Math.floor(M/2);M%2===0?(d(E[A][w+1]),d(E[A+1][w]),d(E[A][w])):(d(E[A][w+1]),d(E[A+1][w+1]),d(E[A+1][w]))}}function l(S){let _=new D;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(S),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let S=new D;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let x=g(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;o.push(x,1-y)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){let _=o[S+0],x=o[S+2],y=o[S+4],b=Math.max(_,x,y),E=Math.min(_,x,y);b>.9&&E<.1&&(_<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),y<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,_){let x=S*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function m(){let S=new D,_=new D,x=new D,y=new D,b=new ce,E=new ce,A=new ce;for(let M=0,w=0;M<r.length;M+=9,w+=6){S.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),b.set(o[w+0],o[w+1]),E.set(o[w+2],o[w+3]),A.set(o[w+4],o[w+5]),y.copy(S).add(_).add(x).divideScalar(3);let T=g(y);v(b,w+0,S,T),v(E,w+2,_,T),v(A,w+4,x,T)}}function v(S,_,x,y){y<0&&S.x===1&&(o[_]=S.x-1),x.x===0&&x.z===0&&(o[_]=y/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},uc=class i extends jh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ti=class extends hc{constructor(e){super(e),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new hc().fromJSON(s))}return this}},yM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=EM(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Lo(r,o,t,a,c,f,0),o}};function Hp(i,e,t,n,s){let r,o;if(s===FM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hp(r,i[r],i[r+1],o);return o&&Sc(o,o.next)&&(No(o),o=o.next),o}function Hs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Sc(t,t.next)||Vt(t.prev,t,t.next)===0)){if(No(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&IM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?bM(i,n,s,r):MM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),No(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=wM(Hs(i),e,t),Lo(i,e,t,n,s,r,2)):o===2&&SM(i,e,t,n,s,r):Lo(Hs(i),e,t,n,s,r,1);break}}}function MM(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&gr(s,a,r,c,o,l,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function bM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Qh(f,m,e,t,n),S=Qh(v,g,e,t,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=S;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&gr(a,h,c,u,l,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&gr(a,h,c,u,l,d,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&gr(a,h,c,u,l,d,_.x,_.y)&&Vt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&gr(a,h,c,u,l,d,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Sc(s,r)&&Gp(s,n,n.next,r)&&Do(s,r)&&Do(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),No(n),No(n.next),n=i=r),n=n.next}while(n!==i);return Hs(n)}function SM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&DM(o,a)){let c=Vp(o,a);o=Hs(o,o.next),c=Hs(c,c.next),Lo(o,e,t,n,s,r,0),Lo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function EM(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Hp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(LM(l));for(s.sort(TM),r=0;r<s.length;r++)t=AM(s[r],t);return t}function TM(i,e){return i.x-e.x}function AM(i,e){let t=RM(i,e);if(!t)return e;let n=Vp(t,i);return Hs(n,n.next),Hs(t,t.next)}function RM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&gr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Do(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&CM(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function CM(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function IM(i,e,t,n){let s=i;do s.z===0&&(s.z=Qh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,PM(s)}function PM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Qh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function LM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function gr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function DM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!NM(i,e)&&(Do(i,e)&&Do(e,i)&&UM(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Sc(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Sc(i,e){return i.x===e.x&&i.y===e.y}function Gp(i,e,t,n){let s=Fa(Vt(i,e,t)),r=Fa(Vt(i,e,n)),o=Fa(Vt(t,n,i)),a=Fa(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ua(i,t,e)||r===0&&Ua(i,n,e)||o===0&&Ua(t,i,n)||a===0&&Ua(t,e,n))}function Ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fa(i){return i>0?1:i<0?-1:0}function NM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Gp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Do(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function UM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vp(i,e){let t=new eu(i.i,i.x,i.y),n=new eu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hp(i,e,t,n){let s=new eu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function No(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function eu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ts=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];up(e),dp(n,e);let o=e.length;t.forEach(up);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,dp(n,t[c]);let a=yM.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rs=class i extends at{constructor(e=new ti([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:OM,_,x=!1,y,b,E,A;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,y=p.computeFrenetFrames(h,!1),b=new D,E=new D,A=new D),d||(g=0,f=0,m=0,v=0);let M=a.extractPoints(l),w=M.shape,T=M.holes;if(!ts.isClockWise(w)){w=w.reverse();for(let te=0,fe=T.length;te<fe;te++){let N=T[te];ts.isClockWise(N)&&(T[te]=N.reverse())}}let L=ts.triangulateShape(w,T),U=w;for(let te=0,fe=T.length;te<fe;te++){let N=T[te];w=w.concat(N)}function H(te,fe,N){return fe||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(fe,N)}let F=w.length,V=L.length;function B(te,fe,N){let Le,he,ve,pe=te.x-fe.x,ie=te.y-fe.y,K=N.x-te.x,I=N.y-te.y,R=pe*pe+ie*ie,O=pe*I-ie*K;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(R),Q=Math.sqrt(K*K+I*I),j=fe.x-ie/Y,Te=fe.y+pe/Y,xe=N.x-I/Q,Ee=N.y+K/Q,qe=((xe-j)*I-(Ee-Te)*K)/(pe*I-ie*K);Le=j+pe*qe-te.x,he=Te+ie*qe-te.y;let me=Le*Le+he*he;if(me<=2)return new ce(Le,he);ve=Math.sqrt(me/2)}else{let Y=!1;pe>Number.EPSILON?K>Number.EPSILON&&(Y=!0):pe<-Number.EPSILON?K<-Number.EPSILON&&(Y=!0):Math.sign(ie)===Math.sign(I)&&(Y=!0),Y?(Le=-ie,he=pe,ve=Math.sqrt(R)):(Le=pe,he=ie,ve=Math.sqrt(R/2))}return new ce(Le/ve,he/ve)}let ne=[];for(let te=0,fe=U.length,N=fe-1,Le=te+1;te<fe;te++,N++,Le++)N===fe&&(N=0),Le===fe&&(Le=0),ne[te]=B(U[te],U[N],U[Le]);let se=[],J,oe=ne.concat();for(let te=0,fe=T.length;te<fe;te++){let N=T[te];J=[];for(let Le=0,he=N.length,ve=he-1,pe=Le+1;Le<he;Le++,ve++,pe++)ve===he&&(ve=0),pe===he&&(pe=0),J[Le]=B(N[Le],N[ve],N[pe]);se.push(J),oe=oe.concat(J)}for(let te=0;te<g;te++){let fe=te/g,N=f*Math.cos(fe*Math.PI/2),Le=m*Math.sin(fe*Math.PI/2)+v;for(let he=0,ve=U.length;he<ve;he++){let pe=H(U[he],ne[he],Le);de(pe.x,pe.y,-N)}for(let he=0,ve=T.length;he<ve;he++){let pe=T[he];J=se[he];for(let ie=0,K=pe.length;ie<K;ie++){let I=H(pe[ie],J[ie],Le);de(I.x,I.y,-N)}}}let _e=m+v;for(let te=0;te<F;te++){let fe=d?H(w[te],oe[te],_e):w[te];x?(E.copy(y.normals[0]).multiplyScalar(fe.x),b.copy(y.binormals[0]).multiplyScalar(fe.y),A.copy(_[0]).add(E).add(b),de(A.x,A.y,A.z)):de(fe.x,fe.y,0)}for(let te=1;te<=h;te++)for(let fe=0;fe<F;fe++){let N=d?H(w[fe],oe[fe],_e):w[fe];x?(E.copy(y.normals[te]).multiplyScalar(N.x),b.copy(y.binormals[te]).multiplyScalar(N.y),A.copy(_[te]).add(E).add(b),de(A.x,A.y,A.z)):de(N.x,N.y,u/h*te)}for(let te=g-1;te>=0;te--){let fe=te/g,N=f*Math.cos(fe*Math.PI/2),Le=m*Math.sin(fe*Math.PI/2)+v;for(let he=0,ve=U.length;he<ve;he++){let pe=H(U[he],ne[he],Le);de(pe.x,pe.y,u+N)}for(let he=0,ve=T.length;he<ve;he++){let pe=T[he];J=se[he];for(let ie=0,K=pe.length;ie<K;ie++){let I=H(pe[ie],J[ie],Le);x?de(I.x,I.y+_[h-1].y,_[h-1].x+N):de(I.x,I.y,u+N)}}}q(),ae();function q(){let te=s.length/3;if(d){let fe=0,N=F*fe;for(let Le=0;Le<V;Le++){let he=L[Le];Ne(he[2]+N,he[1]+N,he[0]+N)}fe=h+g*2,N=F*fe;for(let Le=0;Le<V;Le++){let he=L[Le];Ne(he[0]+N,he[1]+N,he[2]+N)}}else{for(let fe=0;fe<V;fe++){let N=L[fe];Ne(N[2],N[1],N[0])}for(let fe=0;fe<V;fe++){let N=L[fe];Ne(N[0]+F*h,N[1]+F*h,N[2]+F*h)}}n.addGroup(te,s.length/3-te,0)}function ae(){let te=s.length/3,fe=0;ye(U,fe),fe+=U.length;for(let N=0,Le=T.length;N<Le;N++){let he=T[N];ye(he,fe),fe+=he.length}n.addGroup(te,s.length/3-te,1)}function ye(te,fe){let N=te.length;for(;--N>=0;){let Le=N,he=N-1;he<0&&(he=te.length-1);for(let ve=0,pe=h+g*2;ve<pe;ve++){let ie=F*ve,K=F*(ve+1),I=fe+Le+ie,R=fe+he+ie,O=fe+he+K,Y=fe+Le+K;ke(I,R,O,Y)}}}function de(te,fe,N){c.push(te),c.push(fe),c.push(N)}function Ne(te,fe,N){Fe(te),Fe(fe),Fe(N);let Le=s.length/3,he=S.generateTopUV(n,s,Le-3,Le-2,Le-1);Ze(he[0]),Ze(he[1]),Ze(he[2])}function ke(te,fe,N,Le){Fe(te),Fe(fe),Fe(Le),Fe(fe),Fe(N),Fe(Le);let he=s.length/3,ve=S.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Ze(ve[0]),Ze(ve[1]),Ze(ve[3]),Ze(ve[1]),Ze(ve[2]),Ze(ve[3])}function Fe(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function Ze(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return zM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $h[s.type]().fromJSON(s)),new i(n,e.options)}},OM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(d,1-m),new ce(v,1-p)]:[new ce(a,1-c),new ce(h,1-u),new ce(f,1-m),new ce(g,1-p)]}};function zM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var dc=class i extends at{constructor(e=new ti([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;ts.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let S=m[g];ts.isClockWise(S)===!0&&(m[g]=S.reverse())}let v=ts.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let S=m[g];f=f.concat(S)}for(let g=0,p=f.length;g<p;g++){let S=f[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,p=v.length;g<p;g++){let S=v[g],_=S[0]+u,x=S[1]+u,y=S[2]+u;n.push(_,x,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return BM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function BM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ni=class i extends at{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let S=[],_=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){let b=y/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(b+x,1-_),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let _=h[p][S+1],x=h[p][S],y=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(_,x,b),(p!==n-1||c<Math.PI)&&f.push(x,y,b)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(v,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var os=class i extends at{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let v=m/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;o.push(v,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var as=class extends Ot{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},pt=class extends Cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pp,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends pt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Oa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function HM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function fp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Wp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var cs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tu=class extends cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jd,endingEnd:jd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qd:r=e,a=2*t-n;break;case ef:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qd:o=e,c=2*n-t;break;case ef:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,S=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,x=f*g-f*v;for(let y=0;y!==a;++y)r[y]=p*o[h+y]+S*o[l+y]+_*o[c+y]+x*o[u+y];return r}},nu=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},iu=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oa(t,this.TimeBufferType),this.values=Oa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oa(e.times,Array),values:Oa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&kM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Ar;var ls=class extends Gn{constructor(e,t,n){super(e,t,n)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Tr;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Gn{};fc.prototype.ValueTypeName="color";var Ui=class extends Gn{};Ui.prototype.ValueTypeName="number";var su=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Fi=class extends Gn{InterpolantFactoryMethodLinear(e){return new su(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Gn{constructor(e,t,n){super(e,t,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Tr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Gn{};Oi.prototype.ValueTypeName="vector";var pc=class{constructor(e="",t=-1,n=[],s=H0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(VM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=HM(c);c=fp(c,1,h),l=fp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,v){if(f.length!==0){let g=[],p=[];Wp(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let S=0;S!==d[m].morphTargets.length;++S){let _=d[m];g.push(_.time),p.push(_.morphTarget===v?1:0)}s.push(new Ui(".morphTargetInfluence["+v+"]",g,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(Oi,f+".position",d,"pos",s),n(Fi,f+".quaternion",d,"rot",s),n(Oi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function GM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Oi;case"color":return fc;case"quaternion":return Fi;case"bool":case"boolean":return ls;case"string":return hs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function VM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=GM(i.type);if(i.times===void 0){let t=[],n=[];Wp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Qi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ru=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},WM=new ru,ii=class{constructor(e){this.manager=e!==void 0?e:WM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri={},ou=class extends Error{constructor(e,t){super(e),this.response=t}},us=class extends ii{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Qi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:n,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ri[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){S();function S(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;let y=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let b=0,E=h.length;b<E;b++){let A=h[b];A.onProgress&&A.onProgress(y)}p.enqueue(x),S()}},_=>{p.error(_)})}}});return new Response(g)}else throw new ou(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Qi.add(e,l);let h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var au=class extends ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Eo("img");function c(){h(),Qi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Fr=class extends ii{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,o=new au(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Or=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},mc=class extends Or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gl=new We,pp=new D,mp=new D,Uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(pp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cu=class extends Uo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Rr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},zr=class extends Or{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},gp=new We,mo=new D,Vl=new D,lu=class extends Uo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(mo),Vl.copy(n.position),Vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vl),n.updateMatrixWorld(),s.makeTranslation(-mo.x,-mo.y,-mo.z),gp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gp)}},gc=class extends Or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hu=class extends Uo{constructor(){super(new is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ds=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch(n){return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var xc=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Qi.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Qi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Qi.add(e,c),r.manager.itemStart(e)}};var kr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=xp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function xp(){return performance.now()}var Cu="\\[\\]\\.:\\/",XM=new RegExp("["+Cu+"]","g"),Iu="[^"+Cu+"]",qM="[^"+Cu.replace("\\.","")+"]",YM=/((?:WC+[\/:])*)/.source.replace("WC",Iu),KM=/(WCOD+)?/.source.replace("WCOD",qM),ZM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),$M=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),JM=new RegExp("^"+YM+KM+ZM+$M+"$"),jM=["material","materials","bones","map"],uu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(XM,"")}static parseTrackName(e){let t=JM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=uu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var J1=new Float32Array(1);var vp=new ce,vc=class{constructor(e=new ce(1/0,1/0),t=new ce(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);function Pu(i,e){if(e===Ip)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===zo||e===Mc){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===zo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Vr=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ku(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new ju(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ds.extractUrlBase(e);o=ds.resolveURL(l,this.path)}else o=ds.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new us(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Zp){try{o[lt.KHR_BINARY_GLTF]=new Qu(e)}catch(u){s&&s(u);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new od(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:o[u]=new Fu;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[u]=new ed(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[u]=new td;break;case lt.KHR_MESH_QUANTIZATION:o[u]=new nd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function QM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Uu=class{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],ln);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Br(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new gc(h),l.distance=u;break;case"spot":l=new zr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Fu=class{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return kt}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},Ou=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},zu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},ku=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ln)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Vu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(a[0],a[1],a[2],ln),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Xu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(a[0],a[1],a[2],ln),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}},qu=class{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Yu=class{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Ku=class{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Zu=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},$u=class{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ju=class{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ju=class{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Vn.TRIANGLES&&l.mode!==Vn.TRIANGLE_STRIP&&l.mode!==Vn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let v=new We,g=new D,p=new Jt,S=new D(1,1,1),_=new Je(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,v.compose(g,p,S));for(let x in c)if(x==="_COLOR_0"){let y=c[x];_.instanceColor=new zs(y.array,y.itemSize,y.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Ft.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Zp="glTF",ko=12,Xp={JSON:1313821514,BIN:5130562},Qu=class{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ko,r=new DataView(e,ko),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===Xp.JSON){let l=new Uint8Array(e,ko+o,a);this.content=n.decode(l)}else if(c===Xp.BIN){let l=ko+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ed=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=sd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=sd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Gr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},a,l,ln,d)})})}},td=class{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},nd=class{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}},Ec=class extends cs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,v=m-l,g=-2*f+3*d,p=f-d,S=1-g,_=p-d+u;for(let x=0;x!==a;x++){let y=o[v+x+a],b=o[v+x+c]*h,E=o[m+x+a],A=o[m+x]*h;r[x]=S*y+_*b+g*E+p*A}return r}},e1=new Jt,id=class extends Ec{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return e1.fromArray(r).normalize().toArray(r),r}},Vn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qp={9728:cn,9729:Mn,9984:vu,9985:vo,9986:pr,9987:li},Yp={33071:Pi,33648:Us,10497:Ni},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},t1={CUBICSPLINE:void 0,LINEAR:Ar,STEP:Tr},Du={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function n1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),i.DefaultMaterial}function Gs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function i1(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function s1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function r1(i){let e,t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Nu(t.attributes):e=i.indices+":"+Nu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Nu(i.targets[n]);return e}function Nu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function o1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var a1=new We,od=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new QM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new Fr(this.options.manager):this.textureLoader=new xc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new us(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Gs(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ds.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Lu[s.type],a=Gr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ge(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Lu[s.type],l=Gr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),S="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(S);_||(v=new l(a,p*f,s.count*f/h),_=new Os(v,f/h),t.cache.add(S,_)),g=new ss(_,c,d%f/h,m)}else a===null?v=new l(s.count*c):v=new l(a,d,s.count*c),g=new Ge(v,c,m);if(s.sparse!==void 0){let p=Lu.SCALAR,S=Gr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,y=new S(o[1],_,s.sparse.count*p),b=new l(o[2],x,s.sparse.count*c);a!==null&&(g=new Ge(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,A=y.length;E<A;E++){let M=y[E];if(g.setX(M,b[E*c]),c>=2&&g.setY(M,b[E*c+1]),c>=3&&g.setZ(M,b[E*c+2]),c>=4&&g.setW(M,b[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=qp[d.magFilter]||Mn,h.minFilter=qp[d.minFilter]||li,h.wrapS=Yp[d.wrapS]||Ni,h.wrapT=Yp[d.wrapT]||Ni,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==Mn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let g=new Qt(v);g.needsUpdate=!0,d(g)}),t.load(ds.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zi(u,o),u.userData.mimeType=o.mimeType||o1(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ro,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Bs,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){let u=s[lt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Re(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ln),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Lt);let h=r.alphaMode||Du.OPAQUE;if(h===Du.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Du.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==kt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kt){let u=r.emissiveFactor;a.emissive=new Re().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&o!==kt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gs(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Kp(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=r1(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Kp(new at,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?n1(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=o[f],p,S=l[f];if(g.mode===Vn.TRIANGLES||g.mode===Vn.TRIANGLE_STRIP||g.mode===Vn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ec(v,S):new ue(v,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Vn.TRIANGLE_STRIP?p.geometry=Pu(p.geometry,Mc):g.mode===Vn.TRIANGLE_FAN&&(p.geometry=Pu(p.geometry,zo));else if(g.mode===Vn.LINES)p=new Nr(v,S);else if(g.mode===Vn.LINE_STRIP)p=new Dr(v,S);else if(g.mode===Vn.LINE_LOOP)p=new rc(v,S);else if(g.mode===Vn.POINTS)p=new Ur(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&s1(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zi(p,r),g.extensions&&Gs(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Gs(s,u[0],r),u[0];let d=new ft;r.extensions&&Gs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Bo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new is(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new We;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new nc(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],v=f.target,g=v.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,S=s.parameters!==void 0?s.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(m),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let S=0,_=d.length;S<_;S++){let x=d[S],y=f[S],b=m[S],E=v[S],A=g[S];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let M=n._createAnimationTracks(x,y,b,E,A);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}return new pc(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,a1)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Ao:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&Gs(n,h,r),r.matrix!==void 0){let u=new We;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&Gs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Cn||d instanceof Qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];ps[r.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ps[r.path]){case ps.weights:l=Ui;break;case ps.rotation:l=Fi;break;case ps.position:case ps.scale:l=Oi;break;default:switch(n.itemSize){case 1:l=Ui;break;case 2:case 3:default:l=Oi;break}break}let h=s.interpolation!==void 0?t1[s.interpolation]:Ar,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=rd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fi?id:Ec;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function c1(i,e,t){let n=e.attributes,s=new mn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=rd(Gr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=rd(Gr[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Kp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=sd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),zi(i,e),c1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?i1(i,e.targets,t):i})}var ad=new WeakMap,Wr=class extends ii{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){let r=new us(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Tt,n).catch(n)}decodeDracoFile(e,t,n,s,r=ln,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(ad.has(e)){let c=ad.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(s=c,new Promise((l,h)=>{s._callbacks[r]={resolve:l,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),ad.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new at;e.index&&t.setIndex(new Ge(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,c=new Ge(o,a);r==="color"&&(this._assignVertexColorSpace(c,s.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Tt)return;let n=new Re;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),ot.toWorkingColorSpace(n,Tt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new us(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=l1.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){let o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function l1(){let i,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(h=>{let u=h.draco,d=new u.Decoder;try{let f=t(u,d,new Int8Array(c),l),m=f.attributes.map(v=>v.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,c,l){let h=l.attributeIDs,u=l.attributeTypes,d,f,m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,d);else if(m===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());let v={index:null,attributes:[]};for(let g in h){let p=self[u[g]],S,_;if(l.useUniqueIDs)_=h[g],S=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[g]]),_===-1)continue;S=a.GetAttribute(d,_)}let x=s(o,a,d,g,p,S);g==="color"&&(x.vertexColorSpace=l.vertexColorSpace),v.attributes.push(x)}return m===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,c){let h=c.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(c,u,d);let f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,c,l,h,u){let d=u.num_components(),m=c.num_points()*d,v=m*h.BYTES_PER_ELEMENT,g=r(o,h),p=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,u,g,v,p);let S=new h(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:l,array:S,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var Gt=[{id:"ferrari458",name:"Ferrari 458",w:2.26,len:4.53,maxKmh:300,accel:13,handling:10},{id:"aventador",name:"Lamborghini Aventador",w:2.27,len:4.78,maxKmh:320,accel:14,handling:9.5},{id:"valhalla",name:"Aston Martin Valhalla",w:2.2,len:4.7,maxKmh:330,accel:15,handling:10.5},{id:"porsche911",name:"Porsche 911 Turbo",w:2.14,len:4.29,maxKmh:250,accel:11,handling:10},{id:"tesla3",name:"Tesla Model 3",w:2.18,len:4.69,maxKmh:240,accel:12,handling:9},{id:"urus",name:"Lamborghini Urus",w:2.26,len:5.11,maxKmh:280,accel:11,handling:8.5},{id:"peugeot3008",name:"Peugeot 3008",w:2.1,len:4.45,maxKmh:190,accel:8,handling:8},{id:"bolide",name:"Bugatti Bolide",w:2.12,len:4.76,maxKmh:500,accel:17,handling:10.5},{id:"roadster",name:"Tesla Roadster",w:1.88,len:4.6,maxKmh:400,accel:18,handling:9.5},{id:"ferrari599",name:"Ferrari 599 GTO",w:2.14,len:4.71,maxKmh:335,accel:14,handling:9.5},{id:"gt40",name:"Ford GT40",w:1.81,len:4.18,maxKmh:330,accel:13,handling:9},{id:"gtr",name:"Nissan GT-R",w:2.05,len:4.71,maxKmh:315,accel:14,handling:10},{id:"challenger",name:"Dodge Challenger",w:2.08,len:5.03,maxKmh:280,accel:11,handling:7.5},{id:"lancia037",name:"Lancia 037 Rally",w:1.88,len:3.92,maxKmh:220,accel:9,handling:9.5}],$p=new Wr;$p.setDecoderPath("draco/");var Jp=new Vr;Jp.setDRACOLoader($p);var si={},Xr={};function h1(i,e){let t=i.scene,n=[],s=[];return t.traverse(r=>{if(!r.isMesh)return;r.castShadow=!0,r.receiveShadow=!1,r.frustumCulled=!1;let o=Array.isArray(r.material)?r.material:[r.material];for(let a of o){if(!a)continue;a.transparent&&a.opacity<.99&&(a.depthWrite=!1),a.transmission>0&&(a.transmission=0,a.transparent=!0,a.opacity=Math.min(a.opacity,.45),a.depthWrite=!1,a.needsUpdate=!0);let c=(a.name||"").toLowerCase();/tail|brake|rear.?light|back.?light|lights_?glass_?back|stop|red_glass/.test(c)&&!/front/.test(c)?s.push(a):(/head|front.?light|light.*front|lights?front|led|lamp|phare|lights_red|lichter|projector|lightemissive|lighta_material|headlights/.test(c)||/^light/.test(c))&&n.push(a),a.envMapIntensity===void 0&&(a.envMapIntensity=1)}}),{scene:t,headMats:n,tailMats:s}}function Ho(i,e,t){let n=i+(e?"_lo":"");return si[n]?Promise.resolve(si[n]):(Xr[n]||(Xr[n]=new Promise((s,r)=>{Jp.load(`models/${n}.glb`,o=>{si[n]=h1(o,!e),delete Xr[n],s(si[n])},t,o=>{delete Xr[n],r(o)})})),Xr[n])}var Vs=(i,e)=>!!si[i+(e?"_lo":"")],Tc=null;function u1(){if(Tc)return Tc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,10,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.6,"rgba(0,0,0,0.3)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Tc=new ei(i),Tc}function qr(i,e,t){let n=si[i+(e?"_lo":"")]||si[i+"_lo"],s=Gt.find(u=>u.id===i),r=n.scene.clone(!0),o=new Map;r.traverse(u=>{if(!u.isMesh)return;let d=f=>{if(f&&/^BODY_PAINT/.test(f.name)){if(!o.has(f)){let m=f.clone();m.color.setHex(t),m.metalness=Math.max(m.metalness,.5),m.roughness=Math.min(m.roughness,.35),m.envMapIntensity=1.2,o.set(f,m)}return o.get(f)}return f};u.material=Array.isArray(u.material)?u.material.map(d):d(u.material)});let a=[],c=[];r.traverse(u=>{/^wheel_(FL|FR|RL|RR)$/.test(u.name)&&c.push(u)});for(let u of c){let d=new ft;d.position.copy(u.position),u.position.set(0,0,0),r.add(d),d.add(u);let f=new mn().setFromObject(u);d.userData.spin=u,d.userData.front=/F/.test(u.name),d.userData.radius=Math.max(.25,(f.max.y-f.min.y)/2),a.push(d)}let l=new ue(new Wt(s.w+.9,s.len+.9),new kt({map:u1(),transparent:!0,depthWrite:!1,opacity:.9}));l.rotation.x=-Math.PI/2,l.position.y=.06,l.renderOrder=1,l.userData.own=!0,r.add(l);let h=new ue(new ni(.3,10,8),new kt({color:5609983,transparent:!0,opacity:0,depthWrite:!1,blending:Bn}));return h.position.set(0,.38,s.len/2+.35),h.scale.set(1.6,.45,2.2),h.userData.own=!0,r.add(h),r.userData={spec:s,wheels:a,glow:h,paint:[...o.values()],proto:n},r}function jp(i){for(let e in si){let t=si[e];for(let n of t.headMats)n.emissive=n.emissive||new Re,n.emissive.setHex(16773840),n.emissiveIntensity=i?4:0;for(let n of t.tailMats)n.emissive=n.emissive||new Re,n.emissive.setHex(16722458),n.emissiveIntensity=i?2.5:0}}function Qp(i){for(let e in si)si[e].scene.traverse(t=>{if(t.isMesh){let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.envMapIntensity=i)}})}function Yr(i){if(i){for(let e of i.userData.paint||[])e.dispose();i.traverse(e=>{e.isMesh&&e.userData.own&&(e.geometry.dispose(),e.material&&e.material.dispose&&e.material.dispose())})}}var Go=class i extends ue{constructor(){let e=i.SkyShader,t=new Ot({name:e.name,uniforms:di.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:an,depthWrite:!1});super(new nt(1,1,1),t),this.isSky=!0}};Go.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},up:{value:new D(0,1,0)}},vertexShader:`
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

		}`};var Ac=i=>i[Math.floor(Math.random()*i.length)],lm="kidcars-progress-v1",be={stars:0,missions:0,deliveries:0,km:0,bestKmh:0,boosts:0,horns:0,worlds:{},cars:{},nightKm:0,photos:0,duas:0,masjids:0,goodStops:0,pads:0,stickers:{}};try{Object.assign(be,JSON.parse(localStorage.getItem(lm)||"{}"))}catch(i){}function ms(){try{localStorage.setItem(lm,JSON.stringify(be))}catch(i){}}var Cc=[{id:"star1",e:"\u2B50",n:"First Star",ok:()=>be.stars>=1},{id:"star50",e:"\u{1F31F}",n:"Star Collector",ok:()=>be.stars>=50},{id:"star200",e:"\u2728",n:"Star Hunter",ok:()=>be.stars>=200},{id:"star500",e:"\u{1F4AB}",n:"Star Master",ok:()=>be.stars>=500},{id:"star1000",e:"\u{1F320}",n:"Star Legend",ok:()=>be.stars>=1e3},{id:"m1",e:"\u{1F3AF}",n:"First Mission",ok:()=>be.missions>=1},{id:"m5",e:"\u{1F3C5}",n:"Five Missions",ok:()=>be.missions>=5},{id:"m20",e:"\u{1F3C6}",n:"Mission Champ",ok:()=>be.missions>=20},{id:"km5",e:"\u{1F6E3}\uFE0F",n:"5 km Driven",ok:()=>be.km>=5},{id:"km25",e:"\u{1F5FA}\uFE0F",n:"25 km Driven",ok:()=>be.km>=25},{id:"km100",e:"\u{1F30D}",n:"100 km Driven",ok:()=>be.km>=100},{id:"sp100",e:"\u{1F4A8}",n:"100 km/h",ok:()=>be.bestKmh>=100},{id:"sp200",e:"\u{1F680}",n:"200 km/h",ok:()=>be.bestKmh>=200},{id:"sp300",e:"\u26A1",n:"300 km/h",ok:()=>be.bestKmh>=300},{id:"wc",e:"\u{1F333}",n:"Country Driver",ok:()=>(be.worlds.country||0)>=1},{id:"wd",e:"\u{1F335}",n:"Desert Driver",ok:()=>(be.worlds.desert||0)>=1},{id:"wci",e:"\u{1F3D9}\uFE0F",n:"City Driver",ok:()=>(be.worlds.city||0)>=1},{id:"ws",e:"\u26C4",n:"Snow Driver",ok:()=>(be.worlds.snow||0)>=1},{id:"wl",e:"\u{1F3D8}\uFE0F",n:"Lenasia Driver",ok:()=>(be.worlds.lenasia||0)>=1},{id:"night",e:"\u{1F319}",n:"Night Owl",ok:()=>be.nightKm>=1},{id:"d1",e:"\u{1F6CB}\uFE0F",n:"Recliner Delivered",ok:()=>be.deliveries>=1},{id:"d10",e:"\u{1F69A}",n:"Delivery Pro",ok:()=>be.deliveries>=10},{id:"cars",e:"\u{1F697}",n:"Drove Every Car",ok:()=>Object.keys(be.cars).length>=14},{id:"fast",e:"\u{1F3CE}\uFE0F",n:"Speed Demon",ok:()=>be.bestKmh>=400},{id:"horn",e:"\u{1F4E3}",n:"Beep Beep",ok:()=>be.horns>=20},{id:"photo",e:"\u{1F4F8}",n:"Photographer",ok:()=>be.photos>=1},{id:"dua",e:"\u{1F932}",n:"Bismillah",ok:()=>(be.duas||0)>=5},{id:"masjid",e:"\u{1F54C}",n:"Masjid Visitor",ok:()=>(be.masjids||0)>=10},{id:"stop",e:"\u{1F6A6}",n:"Good Driver",ok:()=>(be.goodStops||0)>=5},{id:"pad",e:"\u26A1",n:"Zoom Zoom",ok:()=>(be.pads||0)>=10},{id:"jump",e:"\u{1FABD}",n:"High Flyer",ok:()=>(be.jumps||0)>=5},{id:"dash",e:"\u23F1\uFE0F",n:"Dash Champion",ok:()=>(be.dashes||0)>=3},{id:"snap",e:"\u{1F5BC}\uFE0F",n:"Snap Happy",ok:()=>(be.photoMissions||0)>=3}];function Vo(){let i=[];for(let e of Cc)!be.stickers[e.id]&&e.ok()&&(be.stickers[e.id]=1,i.push(e));return i.length&&ms(),i}var hm=400,ri=null,Ws=[],em=new We,tm=new D,nm=new Jt,d1=new D(1,1,1),im=new en;function um(i){let e=new ti;for(let s=0;s<10;s++){let r=s%2?.3:.7,o=s/10*Math.PI*2-Math.PI/2,a=Math.cos(o)*r,c=Math.sin(o)*r;s?e.lineTo(a,c):e.moveTo(a,c)}e.closePath();let t=new rs(e,{depth:.16,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});t.center();let n=new pt({color:16762940,emissive:16751104,emissiveIntensity:.8,roughness:.3,metalness:.4});return ri=new Je(t,n,hm),ri.frustumCulled=!1,ri.count=0,i.add(ri),ri}function Xs(i,e,t){Ws.length>=hm||Ws.push({x:i,z:e,g:t,alive:!0,ph:Math.random()*6.28})}function gs(i){for(let e=Ws.length-1;e>=0;e--)Ws[e].g===i&&Ws.splice(e,1)}function dm(){Ws.length=0,ri&&(ri.count=0)}var cd=0;function fm(i,e,t){if(!ri)return 0;cd+=i*2.2;let n=0,s=0;for(let r of Ws){if(!r.alive)continue;let o=!1;for(let[a,c]of e){let l=r.x-a,h=r.z-c;if(l*l+h*h<2.3*2.3){o=!0;break}}if(o){r.alive=!1,s++,t&&t(r.x,r.z);continue}tm.set(r.x,1.05+Math.sin(cd*1.4+r.ph)*.14,r.z),im.set(0,cd+r.ph,0),nm.setFromEuler(im),em.compose(tm,nm,d1),ri.setMatrixAt(n++,em)}return ri.count=n,ri.instanceMatrix.needsUpdate=!0,s}function pm(i){let e=new ft,t=new kt({color:16766282,transparent:!0,opacity:.32,depthWrite:!1,blending:Bn,side:Lt,fog:!1}),n=new ue(new Ht(1.6,2.2,60,16,1,!0),t);n.position.y=30,e.add(n);let s=new ue(new os(3.2,.25,8,32),new pt({color:16766282,emissive:16756736,emissiveIntensity:1.2,roughness:.3}));return s.rotation.x=Math.PI/2,s.position.y=.4,e.add(s),e.visible=!1,i.add(e),e.userData.tick=(r,o)=>{s.position.y=.5+Math.sin(o*2.5)*.3,s.rotation.z+=r,t.opacity=.26+Math.sin(o*3)*.08},e}function mm(){let i=new ft,e=new pt({color:5913382,roughness:.55,metalness:.05}),t=new pt({color:2825492,roughness:.7}),n=new pt({color:13677676,roughness:.35,metalness:.7}),s=(r,o,a,c,l,h,u,d=0)=>{let f=new ue(new nt(r,o,a),c);return f.position.set(l,h,u),f.rotation.x=d,f.castShadow=!0,i.add(f),f};return s(.95,.12,.9,t,0,.06,0),s(.8,.3,.8,e,0,.3,.05),s(.8,.85,.28,e,0,.78,-.42,-.22),s(.2,.42,.85,e,-.45,.42,0),s(.2,.42,.85,e,.45,.42,0),s(.7,.14,.42,e,0,.36,.62,.35),s(.5,.06,.06,n,0,1.18,-.5),i.scale.setScalar(.85),i}var ld=26,fi=null,sm=new We,rm=new D,om=new Jt,am=new D,cm=new en;function gm(i){let e=new ti;e.moveTo(0,.9),e.lineTo(.75,-.1),e.lineTo(.3,-.1),e.lineTo(.3,-.9),e.lineTo(-.3,-.9),e.lineTo(-.3,-.1),e.lineTo(-.75,-.1),e.closePath();let t=new rs(e,{depth:.14,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:1});t.rotateX(-Math.PI/2),t.rotateY(Math.PI),t.scale(2,1.6,2);let n=new pt({color:16766282,emissive:16752640,emissiveIntensity:.7,roughness:.35,metalness:.3,transparent:!0,opacity:.95});return fi=new Je(t,n,ld),fi.frustumCulled=!1,fi.count=0,i.add(fi),fi}function hd(i,e,t,n){if(!i||i.length<2)return null;let s={d:1/0,i:0,t:0};for(let u=0;u<i.length-1;u++){let d=i[u],f=i[u+1],m=f[0]-d[0],v=f[1]-d[1],g=m*m+v*v||1,p=((e-d[0])*m+(t-d[1])*v)/g;p=Math.max(0,Math.min(1,p));let S=Math.hypot(e-d[0]-m*p,t-d[1]-v*p);S<s.d&&(s={d:S,i:u,t:p})}let r=s.i,o=i[r],a=i[r+1],c=n,l=o[0]+(a[0]-o[0])*s.t,h=o[1]+(a[1]-o[1])*s.t;for(;r<i.length-1;){let u=i[r+1],d=Math.hypot(u[0]-l,u[1]-h);if(d>=c){l+=(u[0]-l)*c/(d||1),h+=(u[1]-h)*c/(d||1),c=0;break}c-=d,l=u[0],h=u[1],r++}return{d:s.d,x:l,z:h}}function Wo(i,e,t,n){if(!fi)return;if(!i||i.length<2){fi.count=0;return}let s=0,r=7,o=9,a=[];{let h={d:1/0,i:0,t:0};for(let f=0;f<i.length-1;f++){let m=i[f],v=i[f+1],g=v[0]-m[0],p=v[1]-m[1],S=g*g+p*p||1,_=((e-m[0])*g+(t-m[1])*p)/S;_=Math.max(0,Math.min(1,_));let x=Math.hypot(e-m[0]-g*_,t-m[1]-p*_);x<h.d&&(h={d:x,i:f,t:_})}let u=i[h.i],d=i[h.i+1];a.push([u[0]+(d[0]-u[0])*h.t,u[1]+(d[1]-u[1])*h.t]);for(let f=h.i+1;f<i.length;f++)a.push(i[f])}let c=0,l=r;for(let h=0;h<a.length-1&&s<ld;h++){let u=a[h],d=a[h+1],f=Math.hypot(d[0]-u[0],d[1]-u[1]);if(f<.01)continue;let m=(d[0]-u[0])/f,v=(d[1]-u[1])/f,g=Math.atan2(-m,-v);for(;l<=c+f&&s<ld;){let p=l-c;rm.set(u[0]+m*p,.75+Math.sin(n*4+s*.9)*.12,u[1]+v*p),cm.set(0,g,0),om.setFromEuler(cm);let S=1+Math.sin(n*4+s*.9)*.08;am.set(S,1,S),sm.compose(rm,om,am),fi.setMatrixAt(s++,sm),l+=o}c+=f}fi.count=s,fi.instanceMatrix.needsUpdate=!0}var f1=i=>{let e=(i.name||"").toLowerCase(),t=i.k;return/masjid|mosque|islam|sufi|jumma/.test(e)||t==="mosque"?"\u{1F54C}":/temple|koil|mandir|sai centre|hindu/.test(e)?"\u{1F6D5}":/church|catholic|chapel|kingdom hall/.test(e)||t==="place_of_worship"?"\u26EA":{mall:"\u{1F6CD}\uFE0F",school:"\u{1F3EB}",park:"\u{1F333}",supermarket:"\u{1F6D2}",hospital:"\u{1F3E5}",clinic:"\u{1F3E5}",library:"\u{1F4DA}",police:"\u{1F693}",fuel:"\u26FD",sports_centre:"\u26BD",community_centre:"\u{1F3DB}\uFE0F",childcare:"\u{1F9F8}",retail:"\u{1F3EA}",commercial:"\u{1F3EA}",chemist:"\u{1F48A}",butcher:"\u{1F969}",stationery:"\u270F\uFE0F"}[t]||"\u{1F4CD}"},p1=/cemetery|parking|residential/,Rc=class{constructor(){this.cur=null,this.seq=0,this.ownStars=0}next(e){let t=this.seq++,n=[()=>({kind:"stars",icon:"\u2B50",text:`Collect ${10+5*(t%3)} stars`,need:10+5*(t%3),have:0,reward:20}),()=>({kind:"km",icon:"\u{1F6E3}\uFE0F",text:`Drive ${t>6?2:1} km`,need:(t>6?2:1)*1e3,have:0,reward:20,unit:"km"}),()=>{let r=Math.round(e.maxKmh*(.5+Math.min(.3,t*.03))/10)*10;return{kind:"speed",icon:"\u{1F4A8}",text:`Reach ${r} km/h`,need:r,have:0,reward:20,unit:"kmh"}},()=>({kind:"clean",icon:"\u{1F6E1}\uFE0F",text:"Drive 600 m with no bumps",need:600,have:0,reward:25,unit:"m"}),()=>({kind:"boost",icon:"\u26A1",text:"Use boost 3 times",need:3,have:0,reward:15}),()=>({kind:"horn",icon:"\u{1F4E3}",text:"Honk the horn 5 times",need:5,have:0,reward:10})];e.traffic&&!e.isMap&&n.push(()=>({kind:"pass",icon:"\u{1F697}",text:`Pass ${3+t%2*2} cars`,need:3+t%2*2,have:0,reward:25}));let s=null;if(e.isMap){let r=t%6;if(r===0?s=this.gotoMission(e):r===1?s=this.deliverMission(e):r===2?s=this.photoMission(e):r===3?s=this.starStreetMission(e):r===4&&(s=this.gotoMission(e,!0)),!s&&t%12===11&&e.showroomAt){let o=this.snap(e.road,e.showroomAt[0],e.showroomAt[1],!0),a=o?Math.hypot(o[0]-e.x,o[1]-e.z):0;o&&a>300&&a<9e3&&(s={kind:"goto",icon:"\u{1F6CB}\uFE0F",text:"Big trip: drive to Glyde-X Recliners",target:[o[0],o[1]],poi:e.showroomAt,need:1,have:0,reward:80})}s||(s=Ac(n)())}else s=n[t%n.length]();return s.phase=0,this.cur=s,this.ownStars=0,s}snap(e,t,n,s){let r=e.nearest(t,n,{skipMinor:!0});return s&&(!r||r.d>60)&&(r=e.nearest(t,n)),!r||r.d>1e8||r.d>90?null:[r.px,r.pz,r.name]}nearPoi(e,t,n){let r=e.road.data.pois.filter(o=>o.name&&!p1.test(o.k)&&o.name.length<34).map(o=>({p:o,d:Math.hypot(o.c[0]-e.x,o.c[1]-e.z)})).filter(o=>o.d>t&&o.d<n);for(let o=0;o<12&&r.length;o++){let a=Ac(r),c=this.snap(e.road,a.p.c[0],a.p.c[1]);if(c)return{p:a.p,t:c,d:a.d}}return null}gotoMission(e,t){let n=this.nearPoi(e,150,t?500:650);if(!n)return null;let s={kind:"goto",icon:f1(n.p),text:`Drive to ${n.p.name}`,target:[n.t[0],n.t[1]],poi:n.p.c,need:1,have:0,reward:25};return t&&(s.text=`Dash to ${n.p.name}!`,s.timer=Math.round(Math.max(30,n.d/6)),s.timeLimit=s.timer,s.reward=50,s.icon="\u23F1\uFE0F"),s}photoMission(e){let t=this.nearPoi(e,150,600);return t?{kind:"photo",icon:"\u{1F4F8}",text:`Take a photo at ${t.p.name}`,target:[t.t[0],t.t[1]],poi:t.p.c,need:1,have:0,reward:30}:null}starStreetMission(e){let t=e.road.nodes,n=[];for(let u of e.road.roads){if(!u.name||!/residential|tertiary|secondary|unclassified/.test(u.t)||u.len<120)continue;let d=t[u.n[Math.floor(u.n.length/2)]],f=Math.hypot(d[0]-e.x,d[1]-e.z);f<150||f>600||n.push({r:u,p:d,d:f})}if(!n.length)return null;let{r:s,p:r}=Ac(n),o=s.n.map(u=>t[u]),a=0;for(let u of s.seg)a+=u;let c=a/2-30,l=0,h=[];for(let u=0;u<o.length-1&&h.length<10;u++){let d=o[u],f=o[u+1],m=s.seg[u],v=(f[0]-d[0])/m,g=(f[1]-d[1])/m;for(;c<l+m&&h.length<10;){if(c>=l){let p=c-l;h.push([d[0]+v*p-g*s.w/4,d[1]+g*p+v*s.w/4])}c+=6}l+=m}if(h.length<5)return null;for(let u of h)Xs(u[0],u[1],"mission");return{kind:"stars",icon:"\u2B50",text:`Collect ${h.length} stars on ${s.name}`,target:[h[Math.floor(h.length/2)][0],h[Math.floor(h.length/2)][1]],need:h.length,have:0,reward:30,placed:!0}}deliverMission(e){if(!e.showroomAt)return null;let t=null,n=!1,s="";if(Math.hypot(e.showroomAt[0]-e.x,e.showroomAt[1]-e.z)<900&&(t=this.snap(e.road,e.showroomAt[0],e.showroomAt[1],!0)),!t){let h=this.nearPoi(e,120,500);if(!h)return null;t=h.t,n=!0,s=h.p.name}let o=e.road.nodes,a=[];for(let h of e.road.roads){if(!h.name||!/residential|living_street|unclassified/.test(h.t)||h.len<80)continue;let u=o[h.n[Math.floor(h.n.length/2)]],d=Math.hypot(u[0]-t[0],u[1]-t[1]);d<200||d>(n?600:3200)||a.push({r:h,p:u})}if(!a.length)return null;a.sort((h,u)=>Math.hypot(h.p[0]-t[0],h.p[1]-t[1])-Math.hypot(u.p[0]-t[0],u.p[1]-t[1]));let{r:c,p:l}=Ac(a.slice(0,Math.max(6,Math.ceil(a.length/4))));return{kind:"deliver",icon:"\u{1F6CB}\uFE0F",text:n?`Fetch a recliner from the Glyde-X van at ${s}`:"Pick up a recliner at Glyde-X",text2:`Deliver it to a house on ${c.name}`,target:[t[0],t[1]],target2:[l[0],l[1]],need:2,have:0,reward:40,van:n}}event(e,t){let n=this.cur;if(!n||n.done)return!1;switch(n.kind){case"stars":e==="star"&&n.have++;break;case"km":e==="dist"&&(n.have+=t);break;case"speed":e==="speed"&&(n.have=Math.max(n.have,t));break;case"clean":e==="dist"&&(n.have+=t),e==="hit"&&(n.have=0);break;case"boost":e==="boost"&&n.have++;break;case"horn":e==="horn"&&n.have++;break;case"pass":e==="pass"&&n.have++;break;case"goto":e==="pos"&&(Math.hypot(t[0]-n.target[0],t[1]-n.target[1])<22||Math.hypot(t[0]-n.poi[0],t[1]-n.poi[1])<45)&&(n.have=1);break;case"photo":e==="photo"&&(Math.hypot(t[0]-n.target[0],t[1]-n.target[1])<40||Math.hypot(t[0]-n.poi[0],t[1]-n.poi[1])<60)&&(n.have=1);break;case"deliver":if(e==="pos"){let s=n.phase===0?n.target:n.target2;if(Math.hypot(t[0]-s[0],t[1]-s[1])<22){if(n.phase===0)return n.phase=1,n.have=1,"pickup";n.have=2}}break}return n.have>=n.need?(n.done=!0,"done"):!1}target(){let e=this.cur;return!e||e.done?null:e.kind==="goto"||e.kind==="photo"||e.kind==="stars"&&e.placed&&e.have===0?e.target:e.kind==="deliver"?e.phase===0?e.target:e.target2:null}tick(e){let t=this.cur;return!t||t.done||t.timer==null?null:(t.timer-=e,t.timer<=0?(t.timer=null,t.reward=25,t.text=t.text.replace(/^Dash to (.*)!$/,"Drive to $1"),t.icon="\u{1F4CD}","timeout"):null)}label(){let e=this.cur;if(!e)return{icon:"",text:"",prog:""};let t=e.kind==="deliver"&&e.phase===1?e.text2:e.text,n="";return e.unit==="km"?n=`${(Math.min(e.have,e.need)/1e3).toFixed(1)} / ${(e.need/1e3).toFixed(0)} km`:e.unit==="m"?n=`${Math.min(e.have,e.need).toFixed(0)} / ${e.need} m`:e.unit==="kmh"?n=`${Math.round(e.have)} / ${e.need}`:e.timer!=null?n=`${Math.floor(e.timer/60)}:${String(Math.ceil(e.timer%60)).padStart(2,"0")}`:e.kind==="goto"||e.kind==="deliver"||e.kind==="photo"?n="":n=`${e.have} / ${e.need}`,{icon:e.icon,text:t,prog:n}}};var pi=4,qs=64,Yt=13.5,oi=[-4.3,0,4.3],Kr=Yt/2+3.3,je=(i,e)=>i+Math.random()*(e-i);var mi=new Jt,gi=new D,xi=new D(1,1,1),Wn=new We,Xn=new en;function xs(i,e,t,n,s,r,o){gi.set(t,n,s),Xn.set(0,r,0),mi.setFromEuler(Xn),xi.set(o,o,o),Wn.compose(gi,mi,xi),i.setMatrixAt(e,Wn)}function xm(i,e){let t=new Je(i.trunk.geometry,i.trunk.material,e.length),n=new Je(i.cards.geometry,i.cards.material,e.length*i.cards.n),s=0;return e.forEach((r,o)=>{let{x:a,z:c,scale:l}=r;gi.set(a,0,c),Xn.set(0,r.rot||0,0),mi.setFromEuler(Xn),xi.set(l,i.trunk.h*l,l),Wn.compose(gi,mi,xi),t.setMatrixAt(o,Wn);let h=i.cards;for(let u=0;u<h.n;u++){let d=je(0,6.28),f=je(-1,1),m=Math.sqrt(1-f*f)*je(.35,1),v=h.yc+f*h.ry,g=h.rx;if(h.cone){let S=(u+.5)/h.n;v=h.yc-h.ry+S*h.ry*2,g=h.rx*(1.15-S)}gi.set(a+Math.cos(d)*m*g*l,v*l,c+Math.sin(d)*m*g*l),h.flat?Xn.set(Math.PI/2-je(.15,.45),je(0,6.28),0,"YXZ"):Xn.set(je(-h.tilt,h.tilt),je(0,6.28),je(-.3,.3),"YXZ"),mi.setFromEuler(Xn);let p=l*je(.8,1.15);xi.set(p,p,p),Wn.compose(gi,mi,xi),n.setMatrixAt(s++,Wn)}}),t.castShadow=!0,n.castShadow=!0,t.frustumCulled=!1,n.frustumCulled=!1,[t,n]}var Ic=class{constructor(e,t){this.scene=e,this.style=t,this.group=new ft,e.add(this.group),this.samples=[],this.chunks=new Map,this.gen={x:0,z:0,h:0,s:0,k:0,kTarget:0,left:0,rampLen:40},this.piece=null,this.piece={type:"straight",left:200},this.extend(1500)}nextPiece(){if(Math.random()<.35)return{type:"straight",left:je(80,260)};let t=je(140,480),n=je(12,65)*Math.PI/180;return{type:"curve",k:(Math.random()<.5?-1:1)/t,left:t*n,ramp:40}}extend(e){let t=this.gen;for(;t.s<e;){(!this.piece||this.piece.left<=0)&&(this.piece=this.nextPiece());let n=this.piece,s=n.type==="curve"?n.k:0;t.k+=(s-t.k)*Math.min(1,pi/35),t.h+=t.k*pi,t.x+=-Math.sin(t.h)*pi,t.z+=-Math.cos(t.h)*pi,t.s+=pi,n.left-=pi,this.samples.push({x:t.x,z:t.z,h:t.h,s:t.s,k:t.k})}}pointAt(e){let t=e/pi,n=Math.floor(t),s=t-n;n<0&&(n=0),n>=this.samples.length-1&&(n=this.samples.length-2);let r=this.samples[n],o=this.samples[n+1],a=o.h-r.h;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2);let c=r.h+a*s;return{x:r.x+(o.x-r.x)*s,z:r.z+(o.z-r.z)*s,h:c,rx:Math.cos(c),rz:-Math.sin(c),fx:-Math.sin(c),fz:-Math.cos(c)}}nearest(e,t,n){let s=this.samples.length,r=-1,o=1/0,a=Math.max(0,n-40),c=Math.min(s-1,n+40);for(let g=a;g<=c;g++){let p=this.samples[g],S=(p.x-e)**2+(p.z-t)**2;S<o&&(o=S,r=g)}let l=this.samples[r],h=Math.cos(l.h),u=-Math.sin(l.h),d=-Math.sin(l.h),f=-Math.cos(l.h),m=e-l.x,v=t-l.z;return{i:r,d:m*h+v*u,along:m*d+v*f,s:l.s+(m*d+v*f),h:l.h,fx:d,fz:f,rx:h,rz:u,k:l.k}}ensure(e){let t=Math.max(0,Math.floor((e-70)/qs)),n=Math.floor((e+330)/qs);this.extend((n+2)*qs*pi);for(let[s,r]of this.chunks)(s<t||s>n+1)&&(this.disposeChunk(r),this.chunks.delete(s));for(let s=t;s<=n;s++)this.chunks.has(s)||this.chunks.set(s,this.buildChunk(s))}disposeChunk(e){this.group.remove(e.group),gs("c"+e.ci),e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.isMesh&&!t.userData.shared&&t.geometry.dispose()})}obstaclesNear(e){let t=[],n=Math.floor((e-20)/qs),s=Math.floor((e+20)/qs);for(let r=n;r<=s;r++){let o=this.chunks.get(r);if(o)for(let a of o.obstacles)t.push(a)}return t}ribbon(e,t,n,s,r,o,a=!1){let c=t-e+1,l=new Float32Array(c*2*3),h=new Float32Array(c*2*2),u=[];for(let f=0;f<c;f++){let m=this.samples[e+f],v=Math.cos(m.h),g=-Math.sin(m.h);l.set([m.x+v*n,r,m.z+g*n,m.x+v*s,r,m.z+g*s],f*6);let p=m.s*o;if(h.set([0,p,1,p],f*4),f<c-1){let S=f*2;s>n?u.push(S,S+1,S+2,S+1,S+3,S+2):u.push(S,S+2,S+1,S+1,S+2,S+3)}}let d=new at;return d.setAttribute("position",new Ge(l,3)),d.setAttribute("uv",new Ge(h,2)),d.setIndex(u),d.computeVertexNormals(),d}shortRibbon(e,t,n,s,r){let a=new Float32Array(12),c=new Float32Array(8);[e,t].forEach((h,u)=>{let d=this.pointAt(h);a.set([d.x+d.rx*n,r,d.z+d.rz*n,d.x+d.rx*s,r,d.z+d.rz*s],u*6),c.set([0,u,1,u],u*4)});let l=new at;return l.setAttribute("position",new Ge(a,3)),l.setAttribute("uv",new Ge(c,2)),l.setIndex(s>n?[0,1,2,1,3,2]:[0,2,1,1,2,3]),l.computeVertexNormals(),l}buildChunk(e){let t=this.style,n=t.mats,s=e*qs,r=Math.min(this.samples.length-1,(e+1)*qs),o=new ft,a=[],c=this.samples[s].s,l=this.samples[r].s,h=new ue(this.ribbon(s,r,-Yt/2,Yt/2,.05,1/7),n.road);h.receiveShadow=!0,o.add(h);for(let m of[-1,1]){let v=new ue(this.ribbon(s,r,m*Yt/2,m*(Yt/2+3.2),.035,.14285714285714285),n.shoulder);v.receiveShadow=!0,o.add(v),o.add(new ue(this.ribbon(s,r,m*(Yt/2-.45),m*(Yt/2-.27),.07,1),n.line))}let u=[];for(let m=Math.ceil(c/9)*9;m<l;m+=9)for(let v of[-2.15,2.15])u.push(this.shortRibbon(m,m+3.2,v-.08,v+.08,.07));if(u.length){let m=m1(u);o.add(new ue(m,n.line))}if(t.guardrail){let m=(r-s+1)*2,v=new Je(n.railGeo,n.rail,m),g=new Je(n.postGeo,n.rail,m),p=0;for(let S=s;S<=r;S++)for(let _ of[-1,1]){let x=this.samples[S],y=Math.cos(x.h),b=-Math.sin(x.h);xs(v,p,x.x+y*_*Kr,.7,x.z+b*_*Kr,x.h,1),xs(g,p,x.x+y*_*(Kr+.05),.38,x.z+b*_*(Kr+.05),x.h,1),p++}v.frustumCulled=!1,g.frustumCulled=!1,o.add(v,g)}if(t.poles){let m=Math.floor((l-c)/10)*2,v=new Je(n.poleGeo,n.pole,m),g=0;for(let p=c;p<l-1&&g<m;p+=10)for(let S of[-1,1]){let _=this.pointAt(p);xs(v,g++,_.x+_.rx*S*(Yt/2+.9),.7,_.z+_.rz*S*(Yt/2+.9),_.h,1)}v.count=g,o.add(v)}for(let m of t.scatter){if(m.tree){let p=m.tree,S=m.perChunk,_=new Je(p.trunk.geometry,p.trunk.material,S),x=new Je(p.cards.geometry,p.cards.material,S*p.cards.n),y=0;for(let b=0;b<S;b++){let E=je(c,l),M=(Math.random()<.5?-1:1)*je(m.lat[0],m.lat[1]),w=this.pointAt(E),T=je(m.scale[0],m.scale[1]),C=w.x+w.rx*M,L=w.z+w.rz*M;gi.set(C,0,L),Xn.set(0,je(0,6.28),0),mi.setFromEuler(Xn),xi.set(T,p.trunk.h*T,T),Wn.compose(gi,mi,xi),_.setMatrixAt(b,Wn);let U=p.cards;for(let H=0;H<U.n;H++){let F=je(0,6.28),V=je(-1,1),B=Math.sqrt(1-V*V)*je(.35,1),ne=U.yc+V*U.ry,se=U.rx;if(U.cone){let q=(H+.5)/U.n;ne=U.yc-U.ry+q*U.ry*2,se=U.rx*(1.15-q)}let J=C+Math.cos(F)*B*se*T,oe=L+Math.sin(F)*B*se*T;gi.set(J,ne*T,oe),U.flat?Xn.set(Math.PI/2-je(.15,.45),je(0,6.28),0,"YXZ"):Xn.set(je(-U.tilt,U.tilt),je(0,6.28),je(-.3,.3),"YXZ"),mi.setFromEuler(Xn);let _e=T*je(.8,1.15);xi.set(_e,_e,_e),Wn.compose(gi,mi,xi),x.setMatrixAt(y++,Wn)}Math.abs(M)<45&&a.push({type:"circle",x:C,z:L,r:p.obstacle*T})}_.castShadow=!0,x.castShadow=!0,_.frustumCulled=!1,x.frustumCulled=!1,o.add(_,x);continue}if(m.grass){let p=m.perChunk,S=new Je(m.grass.geometry,m.grass.material,p);for(let _=0;_<p;_++){let x=je(c,l),b=(Math.random()<.5?-1:1)*je(m.lat[0],m.lat[1]),E=this.pointAt(x),A=je(m.scale[0],m.scale[1]);xs(S,_,E.x+E.rx*b,0,E.z+E.rz*b,je(0,6.28),A)}S.frustumCulled=!1,o.add(S);continue}let v=m.perChunk,g=m.parts.map(p=>new Je(p.geometry,p.material,v));for(let p=0;p<v;p++){let S=je(c,l),x=(Math.random()<.5?-1:1)*je(m.lat[0],m.lat[1]),y=this.pointAt(S),b=je(m.scale[0],m.scale[1]),E=m.billboard?(Math.random()<.5?0:.5)+y.h:je(0,6.28),A=y.x+y.rx*x,M=y.z+y.rz*x;g.forEach((w,T)=>{let C=m.parts[T];xs(w,p,A,(C.y||0)*b,M,E+(C.rotY||0),b*(C.scale||1))}),m.obstacle&&Math.abs(x)<45&&a.push({type:"circle",x:A,z:M,r:m.obstacle*b})}g.forEach((p,S)=>{p.frustumCulled=!1,p.castShadow=!!m.parts[S].shadow,o.add(p)})}if(e>0)for(let m=0;m<3;m++){let v=je(c+12,l-30),g=oi[Math.floor(je(0,3))];for(let p=0;p<5;p++){let S=this.pointAt(v+p*5);Xs(S.x+S.rx*g,S.z+S.rz*g,"c"+e)}}let d=[];if(e>0&&e%2===0&&n.padGeo){let m=je(c+40,l-40),v=oi[Math.floor(je(0,3))],g=this.pointAt(m),p=new ue(n.padGeo,n.pad);p.position.set(g.x+g.rx*v,.1,g.z+g.rz*v),p.rotation.y=g.h,p.userData.shared=!0,p.renderOrder=1,o.add(p),d.push({x:p.position.x,z:p.position.z,fx:g.fx,fz:g.fz})}let f=[];if(e>1&&e%4===3&&n.rampGeo){let m=je(c+50,l-50),v=oi[Math.floor(je(0,3))],g=this.pointAt(m),p=new ue(n.rampGeo,n.ramp);p.position.set(g.x+g.rx*v,.02,g.z+g.rz*v),p.rotation.y=g.h,p.castShadow=!0,p.userData.shared=!0,o.add(p),f.push({x:p.position.x,z:p.position.z,fx:g.fx,fz:g.fz})}if([[c+20,c+90],[c+100,c+170],[c+180,l-20]].forEach((v,g)=>{let p=je(v[0],v[1]),S=(e+g)%2===0?-1:1,_=this.pointAt(p),x=new ft,y=n.billboards[(e*3+g)%n.billboards.length],b=new ue(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,y,n.rail]);b.position.set(0,7.5,0),b.userData.shared=!0,x.add(b);for(let w of[-3.5,3.5]){let T=new ue(n.bbPostGeo,n.rail);T.position.set(w,2.25,0),T.userData.shared=!0,x.add(T)}let E=t.buildings?Yt/2+2.2:19;x.position.set(_.x+_.rx*S*E,0,_.z+_.rz*S*E),x.rotation.y=_.h-S*(t.buildings?.08:.55),o.add(x);let A=Math.cos(x.rotation.y),M=Math.sin(x.rotation.y);for(let w of[-3.5,3.5])a.push({type:"circle",x:x.position.x+w*A,z:x.position.z-w*M,r:.3})}),e%2===1){let v=(c+l)/2,g=this.pointAt(v),p=new ft;for(let x of[-1,1]){let y=new ue(n.gantryPostGeo,n.rail);y.position.set(x*(Yt/2+1.2),3.75,0),y.userData.shared=!0,p.add(y),a.push({type:"circle",x:g.x+g.rx*x*(Yt/2+1.2),z:g.z+g.rz*x*(Yt/2+1.2),r:.4})}let S=new ue(n.gantryBeamGeo,n.rail);S.position.set(0,7.5,0),S.userData.shared=!0,p.add(S);let _=new ue(n.gantrySignGeo,[n.rail,n.rail,n.rail,n.rail,n.sign,n.rail]);_.position.set(0,6,.2),_.userData.shared=!0,p.add(_),p.position.set(g.x,0,g.z),p.rotation.y=g.h,o.add(p)}if(t.buildings){let m=c+je(0,10),v=0;for(;m<l-8;){for(let b of[-1,1]){let E=(Math.floor(m/37)+b)%6===0,A=t.makeBuilding(E),M=this.pointAt(m+A.d/2),w=b*(Yt/2+4.5+A.w/2+A.gap);if(A.group.position.set(M.x+M.rx*w,0,M.z+M.rz*w),A.group.rotation.y=M.h+(E?b===-1?-Math.PI/2:Math.PI/2:0),!E&&v%3===0){let L=new ue(n.bbPanelGeo,[n.rail,n.rail,n.rail,n.rail,n.billboards[v%n.billboards.length],n.billboards[(v+1)%n.billboards.length]]),U=Math.min(1,A.d/13);L.scale.set(U,.7,1),L.position.set(b===-1?A.w/2-.3:-A.w/2+.3,A.h+2.3,0),L.rotation.y=b===-1?Math.PI/2:-Math.PI/2,L.userData.shared=!0,A.group.add(L);for(let H of[-3,3]){let F=new ue(n.bbPostGeo,n.rail);F.scale.set(.6,.5,.6),F.position.set(L.position.x,A.h+1.1,H*U),F.userData.shared=!0,A.group.add(F)}}o.add(A.group);let T=E?A.d/2:A.w/2,C=E?A.w/2:A.d/2;a.push({type:"box",x:A.group.position.x,z:A.group.position.z,hw:T,hl:C,h:A.group.rotation.y}),v++}m+=je(14,24)}let g=Math.floor((l-c)/26)*2,p=new Je(n.lampGeo,n.lamp,g),S=new Je(n.lampGlowGeo,n.lampGlow,g),_=new Je(n.poolGeo,n.pool,g),x=0;for(let b=c+5;b<l-5&&x<g;b+=26)for(let E of[-1,1]){let A=this.pointAt(b),M=A.x+A.rx*E*(Yt/2+1),w=A.z+A.rz*E*(Yt/2+1);xs(p,x,M,0,w,A.h+(E===1?Math.PI:0),1),xs(S,x,M,0,w,A.h+(E===1?Math.PI:0),1),xs(_,x,M,0,w,A.h+(E===1?Math.PI:0),1),x++,a.push({type:"circle",x:M,z:w,r:.2})}let y=new Je(n.bannerGeo,n.banner,g);for(let b=0;b<x;b++)p.getMatrixAt(b,Wn),y.setMatrixAt(b,Wn);y.count=x,y.frustumCulled=!1,p.count=x,S.count=x,_.count=x,_.renderOrder=2,o.add(p,S,_,y)}return this.group.add(o),{ci:e,i0:s,i1:r,group:o,obstacles:a,pads:d,ramps:f}}rampAt(e,t){for(let n of this.chunks.values())for(let s of n.ramps||[]){let r=e-s.x,o=t-s.z;if(r*r+o*o>64)continue;let a=r*s.fx+o*s.fz,c=r*s.fz-o*s.fx;if(a>-.5&&a<6.5&&Math.abs(c)<1.7)return{ramp:s,t:Math.max(0,Math.min(1,a/6))}}return null}padAt(e,t){for(let n of this.chunks.values())for(let s of n.pads||[]){let r=e-s.x,o=t-s.z;if(r*r+o*o>16)continue;let a=r*s.fx+o*s.fz,c=r*s.fz-o*s.fx;if(Math.abs(a)<2.4&&Math.abs(c)<1.9)return s}return null}dispose(){for(let e of this.chunks.values())this.disposeChunk(e);this.chunks.clear(),this.scene.remove(this.group)}};function m1(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new at;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("uv",new Ge(s,2)),l.setAttribute("normal",new Ge(r,3)),l.setIndex(new Ge(o,1)),l}var wm=new Wr;wm.setDecoderPath("draco/");var Sm=new Vr;Sm.setDRACOLoader(wm);var Zr={masjid:{w:1,h:.827,d:.944},mall:{w:1,h:.31,d:.602},house:{w:1,h:.618,d:.739},showroom:{w:1,h:.457,d:.98},school:{w:1,h:.27,d:.518},engen:{w:1,h:.552,d:1.017},temple:{w:1,h:1.101,d:1.112},church:{w:1,h:1.408,d:1.747},bigmall:{w:1,h:.236,d:.834}},Lc={},Pc=null,bn=i=>!!Lc[i];function Em(i){if(Pc)return Pc;let e=Object.keys(Zr);return Pc=Promise.all(e.map(t=>new Promise(n=>{Sm.load(`models/lm_${t}.glb`,s=>{let r=null,o=null;if(s.scene.traverse(a=>{a.isMesh&&!r&&(r=a.geometry,o=a.material)}),!r)return n();r.computeBoundingSphere(),o.roughness=.9,o.metalness=0,Lc[t]={geo:r,mat:o,...Zr[t]},n()},void 0,()=>n())}))).then(()=>{i&&i()}),Pc}var vm=new D,_m=new Jt,ym=new en,Mm=new D,bm=new We;function Tm(i,e){let t=Lc[i];if(!t||!e.length)return null;/test=1/.test(location.search)&&console.log("LM "+i+" "+JSON.stringify(e.map(s=>[s.x|0,s.z|0,+s.yaw.toFixed(2),+s.sx.toFixed(1),+s.sz.toFixed(1),+s.sy.toFixed(1)])));let n=new Je(t.geo,t.mat,e.length);return e.forEach((s,r)=>{vm.set(s.x,0,s.z),ym.set(0,s.yaw,0),_m.setFromEuler(ym),Mm.set(s.sx,s.sy,s.sz),bm.compose(vm,_m,Mm),n.setMatrixAt(r,bm)}),n.castShadow=!0,n.receiveShadow=!0,n.userData.shared=!0,n.computeBoundingSphere(),n}function Xo(i,e,t,n,s){let r=Zr[i];if(!Lc[i])return null;let o=t-e.x,a=n-e.z,c=null;for(let g=0;g<4;g++){let p=e.h+g*Math.PI/2,S=Math.sin(p)*o+Math.cos(p)*a;(!c||S>c.dot)&&(c={yaw:p,k:g,dot:S})}let l=c.k%2===0?e.hw:e.hl,h=c.k%2===0?e.hl:e.hw,u=2*l/r.w,d=2*h/r.d,f=Math.min(u,d);if(f<(s.min||0))return null;let m=s.stretch||1;u=Math.min(u,f*m),d=Math.min(d,f*m);let v=Math.min(f,(s.maxH||1e9)/r.h);return{id:i,x:e.x,z:e.z,yaw:c.yaw,sx:u,sy:v,sz:d,h:r.h*v}}var Ye=400,Dc=["arch","white","blue","brick","modern","white","arch"],Nc=["brick","grey","peach","brick","peach"],Am=(i,e)=>i+Math.random()*(e-i),g1=(i,e,t)=>Math.max(e,Math.min(t,i)),vt=new Jt,gt=new D,_t=new D(1,1,1),ut=new We,wt=new en;function it(i,e,t=0){let n=i*374761393+e*668265263+t*2147483647|0;return n=(n^n>>>13)*1274126177,n=n^n>>>16,(n>>>0)%1e5/1e5}var Rm={motorway:.09,trunk:.09,primary:.085,secondary:.08,tertiary:.075,residential:.07,unclassified:.07,living_street:.065,service:.06,track:.055},Cm={motorway:30,trunk:26,primary:20,secondary:17,tertiary:15,residential:11,unclassified:12,living_street:7,service:7,track:6},Oc=class{constructor(e,t,n){this.scene=e,this.style=t,this.data=n,this.M=t.mats,this.group=new ft,e.add(this.group),this.nodes=n.nodes,this.roads=n.roads,this.suburbs=n.suburbs||[],this.signs=n.signs||[],this.tlHeads=[],this.hasRails=!1,this.isMap=!0,this.tiles=new Map,this.roadMeshes=new Map,this.areaMeshes=new Map,this.signCache=new Map,this.signMats=[],this.buildIndex(),this.makeMaterials(),this.lm=[],Em(()=>{for(let[s,r]of this.tiles)this.disposeTile(r),this.tiles.delete(s)})}buildIndex(){let e=this.nodes;this.cell=60,this.hash=new Map,this.nodeRoads=new Map,this.roadTiles=new Map,this.tileRoads=new Map,this.tileBuildings=new Map,this.tileAreas=new Map,this.tileTrees=new Map,this.tilePois=new Map;let t=(s,r)=>s*100003+r;this.roads.forEach((s,r)=>{s.len=0,s.seg=[];for(let u=0;u<s.n.length-1;u++){let d=e[s.n[u]],f=e[s.n[u+1]],m=Math.hypot(f[0]-d[0],f[1]-d[1]);s.seg.push(m),s.len+=m;let v=Math.min(d[0],f[0]),g=Math.max(d[0],f[0]),p=Math.min(d[1],f[1]),S=Math.max(d[1],f[1]);for(let _=Math.floor(v/this.cell);_<=Math.floor(g/this.cell);_++)for(let x=Math.floor(p/this.cell);x<=Math.floor(S/this.cell);x++){let y=t(_,x),b=this.hash.get(y);b||(b=[],this.hash.set(y,b)),b.push(r*4096+u)}}s.n.forEach((u,d)=>{let f=this.nodeRoads.get(u);f||(f=[],this.nodeRoads.set(u,f)),f.push([r,d])});let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let u of s.n){let d=e[u];o=Math.min(o,d[0]),a=Math.max(a,d[0]),c=Math.min(c,d[1]),l=Math.max(l,d[1])}let h=[];for(let u=Math.floor(o/Ye);u<=Math.floor(a/Ye);u++)for(let d=Math.floor(c/Ye);d<=Math.floor(l/Ye);d++){let f=t(u,d);h.push(f);let m=this.tileRoads.get(f);m||(m=[],this.tileRoads.set(f,m)),m.push(r)}this.roadTiles.set(r,h)});let n=(s,r,o,a)=>{let c=t(Math.floor(r/Ye),Math.floor(o/Ye)),l=s.get(c);l||(l=[],s.set(c,l)),l.push(a)};this.data.buildings.forEach((s,r)=>{let o=Fc(s.p);s.c=o,n(this.tileBuildings,o[0],o[1],r)}),this.data.areas.forEach((s,r)=>{let o=1/0,a=-1/0,c=1/0,l=-1/0;for(let h of s.p)o=Math.min(o,h[0]),a=Math.max(a,h[0]),c=Math.min(c,h[1]),l=Math.max(l,h[1]);if(!((a-o)*(l-c)>4e6))for(let h=Math.floor(o/Ye);h<=Math.floor(a/Ye);h++)for(let u=Math.floor(c/Ye);u<=Math.floor(l/Ye);u++){let d=t(h,u),f=this.tileAreas.get(d);f||(f=[],this.tileAreas.set(d,f)),f.push(r)}}),this.data.trees.forEach(s=>n(this.tileTrees,s[0],s[1],s));for(let s of this.data.treeRows)for(let r=0;r<s.length-1;r++){let o=s[r],a=s[r+1],c=Math.hypot(a[0]-o[0],a[1]-o[1]);for(let l=0;l<c;l+=9){let h=l/c;n(this.tileTrees,o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h,[o[0]+(a[0]-o[0])*h,o[1]+(a[1]-o[1])*h])}}this.data.pois.forEach(s=>n(this.tilePois,s.c[0],s.c[1],s)),this.tileSigns=new Map,this.signs.forEach(s=>n(this.tileSigns,s[0],s[1],s)),this.tileGB=new Map,this.gb=this.data.gb&&this.data.gb.b||[],this.gb.forEach((s,r)=>{s.c=Fc(s.p),n(this.tileGB,s.c[0],s.c[1],r)}),this.key=t}nearest(e,t,n){let s=this.nodes,r=null,o=1/0,a=n&&n.skipMinor,c=n&&n.exclude,l=Math.floor(e/this.cell),h=Math.floor(t/this.cell);for(let d=-1;d<=1;d++)for(let f=-1;f<=1;f++){let m=this.hash.get(this.key(l+d,h+f));if(m)for(let v of m){let g=Math.floor(v/4096),p=v%4096,S=this.roads[g];if(a&&(S.t==="service"||S.t==="track")||c===g)continue;let _=s[S.n[p]],x=s[S.n[p+1]],y=x[0]-_[0],b=x[1]-_[1],E=y*y+b*b||1,A=((e-_[0])*y+(t-_[1])*b)/E;A=g1(A,0,1);let M=_[0]+y*A,w=_[1]+b*A,T=Math.hypot(e-M,t-w),C=T-S.w/2;C<o&&(o=C,r={d:T,w:S.w,r:g,i:p,t:A,ex:y,ez:b,px:M,pz:w})}}if(!r)return{d:1e9,w:0,onRoad:!1,h:0,name:"",type:""};let u=this.roads[r.r];return r.h=Math.atan2(-r.ex,-r.ez),r.onRoad=r.d<=u.w/2+.9,r.name=u.name,r.type=u.t,r}route(e,t,n,s){let r=this.nearest(e,t),o=this.nearest(n,s);if(r.d>1e8||o.d>1e8)return null;let a=this.nodes,c=this.roads[r.r],l=this.roads[o.r];if(r.r===o.r&&r.i===o.i)return[[r.px,r.pz],[o.px,o.pz]];let h=new Map;h.set(l.n[o.i+1],Math.hypot(a[l.n[o.i+1]][0]-o.px,a[l.n[o.i+1]][1]-o.pz)),l.one||h.set(l.n[o.i],Math.hypot(a[l.n[o.i]][0]-o.px,a[l.n[o.i]][1]-o.pz));let u=M=>Math.hypot(a[M][0]-o.px,a[M][1]-o.pz),d=new Map,f=new Map,m=[],v=(M,w)=>{let T=m.length;for(m.push([w+u(M),M,w]);T>0;){let C=T-1>>1;if(m[C][0]<=m[T][0])break;[m[C],m[T]]=[m[T],m[C]],T=C}},g=()=>{let M=m[0],w=m.pop();if(m.length){m[0]=w;let T=0;for(;;){let C=2*T+1,L=C+1,U=T;if(C<m.length&&m[C][0]<m[U][0]&&(U=C),L<m.length&&m[L][0]<m[U][0]&&(U=L),U===T)break;[m[U],m[T]]=[m[T],m[U]],T=U}}return M},p=(M,w,T)=>{let C=d.get(M)+T;C<(d.has(w)?d.get(w):1/0)&&(d.set(w,C),f.set(w,M),v(w,C))},S=(M,w)=>w*(M.t==="service"?1.8:M.t==="living_street"?1.2:1),_=c.n[r.i+1],x=c.n[r.i];d.set(_,Math.hypot(a[_][0]-r.px,a[_][1]-r.pz)),v(_,d.get(_)),c.one||(d.set(x,Math.hypot(a[x][0]-r.px,a[x][1]-r.pz)),v(x,d.get(x)));let y=new Set,b=null,E=0;for(;m.length&&E++<6e4;){let[,M,w]=g();if(!y.has(M)){if(y.add(M),h.has(M)){b=M;break}for(let[T,C]of this.nodeRoads.get(M)||[]){let L=this.roads[T];L.t!=="track"&&(C<L.n.length-1&&p(M,L.n[C+1],S(L,L.seg[C])),C>0&&!L.one&&p(M,L.n[C-1],S(L,L.seg[C-1])))}}}if(b==null)return null;let A=[[o.px,o.pz]];for(let M=b;M!=null;M=f.get(M))A.push([a[M][0],a[M][1]]);return A.push([r.px,r.pz]),A.reverse(),A}stopMaterial(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.fillStyle="#c8102e",t.beginPath();for(let s=0;s<8;s++){let r=Math.PI/8+s*Math.PI/4;t.lineTo(64+Math.cos(r)*62,64+Math.sin(r)*62)}t.closePath(),t.fill(),t.strokeStyle="#fff",t.lineWidth=5,t.stroke(),t.fillStyle="#fff",t.font="900 40px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("STOP",64,66);let n=new ei(e);return n.colorSpace=Tt,new pt({map:n,transparent:!0,alphaTest:.5,side:Lt,roughness:.5})}streetSignMaterial(e){let t="st:"+e;if(this.signCache.has(t))return this.signCache.get(t);let n=document.createElement("canvas");n.width=512,n.height=96;let s=n.getContext("2d");s.fillStyle="#1f6b3a",s.fillRect(0,0,512,96),s.strokeStyle="#fff",s.lineWidth=4,s.strokeRect(6,6,500,84),s.fillStyle="#fff",s.textAlign="center",s.textBaseline="middle";let r=44;for(s.font=`800 ${r}px Arial`;s.measureText(e.toUpperCase()).width>470&&r>20;)r-=3,s.font=`800 ${r}px Arial`;s.fillText(e.toUpperCase(),256,50);let o=new ei(n);o.colorSpace=Tt;let a=new pt({map:o,roughness:.5,side:Lt});return this.signCache.set(t,a),a}suburbAt(e,t){for(let n of this.suburbs)if(Yo(e,t,n.p))return n.name;return""}buildFurniture(e,t,n,s,r){var _;let o=this.nodes,a=e*Ye,c=t*Ye,l=[],h=[],u=[],d=[],f=[],m=[],v=[];for(let x of this.tileSigns.get(n)||[]){let[y,b,E]=x,A=this.nearest(y,b);if(A.d>1e8)continue;let M=A.h,w=-Math.sin(M),T=-Math.cos(M),C=Math.cos(M),L=-Math.sin(M),U=A.w;if(E==="tl"){let H=[];for(let V=-1;V<=1;V++)for(let B=-1;B<=1;B++){let ne=this.hash.get(this.key(Math.floor(y/this.cell)+V,Math.floor(b/this.cell)+B));if(ne)for(let se of ne){let J=Math.floor(se/4096),oe=se%4096,_e=this.roads[J];if(!(_e.t==="service"||_e.t==="track"))for(let[q,ae]of[[_e.n[oe],_e.n[oe+1]],[_e.n[oe+1],_e.n[oe]]]){let ye=o[q],de=o[ae];if(Math.hypot(ye[0]-y,ye[1]-b)>1.5)continue;let Ne=de[0]-ye[0],ke=de[1]-ye[1],Fe=Math.hypot(Ne,ke)||1;H.push({ux:Ne/Fe,uz:ke/Fe,w:_e.w})}}}let F=[];for(let V of H){if(F.some(oe=>oe.ux*V.ux+oe.uz*V.uz>.9))continue;F.push(V);let B=y+V.ux*(V.w/2+3)-V.uz*(V.w/2+1.2),ne=b+V.uz*(V.w/2+3)+V.ux*(V.w/2+1.2),se=Math.atan2(-V.ux,-V.uz),J=Math.abs(Math.atan2(V.uz,V.ux))%Math.PI<Math.PI/4||Math.abs(Math.atan2(V.uz,V.ux))%Math.PI>3*Math.PI/4?0:1;l.push({x:B,z:ne,h:4.2}),h.push({x:B,z:ne,yaw:se,axis:J,node:y*7+b*13,nx:y,nz:b,ux:V.ux,uz:V.uz}),r.push({type:"circle",x:B,z:ne,r:.15})}}else if(E==="stop"){let H=y-C*(U/2+.9),F=b-L*(U/2+.9);l.push({x:H,z:F,h:2.4}),d.push({x:H,z:F,yaw:M}),r.push({type:"circle",x:H,z:F,r:.12})}else if(E==="hump")f.push({x:A.px,z:A.pz,yaw:M,w:U});else if(E==="xing")for(let H=-2;H<=2;H++){let F=H*(U/6);m.push({x:A.px+C*F,z:A.pz+L*F,yaw:M,len:U/6*.55})}}let g=new Set,p=0;for(let x of this.tileRoads.get(n)||[]){let y=this.roads[x];if(!(!y.name||p>28))for(let b of y.n){if(g.has(b))continue;let E=o[b];if(E[0]<a||E[0]>=a+Ye||E[1]<c||E[1]>=c+Ye)continue;let A=(this.nodeRoads.get(b)||[]).map(([_e])=>this.roads[_e]).filter(_e=>_e.name&&_e.name!==y.name&&!/service|track/.test(_e.t));if(!A.length)continue;g.add(b);let M=A[0],w=o[y.n[Math.max(0,y.n.indexOf(b)-1)]],T=o[y.n[Math.min(y.n.length-1,y.n.indexOf(b)+1)]],C=T[0]-w[0],L=T[1]-w[1],U=Math.hypot(C,L)||1;C/=U,L/=U;let H=M.n.indexOf(b),F=o[M.n[Math.max(0,H-1)]],V=o[M.n[Math.min(M.n.length-1,H+1)]],B=V[0]-F[0],ne=V[1]-F[1],se=Math.hypot(B,ne)||1;B/=se,ne/=se;let J=E[0]+-L*(M.w/2+1.6)+-ne*(y.w/2+1.6),oe=E[1]+C*(M.w/2+1.6)+B*(y.w/2+1.6);this.nearest(J,oe).d<3.5||(l.push({x:J,z:oe,h:2.6}),v.push({x:J,z:oe,yaw:Math.atan2(-L,C),name:y.name,y:2.45}),v.push({x:J,z:oe,yaw:Math.atan2(-ne,B),name:M.name,y:2.15}),r.push({type:"circle",x:J,z:oe,r:.1}),p++)}}if(l.length){let x=new Je(this.poleGeo,this.mat.pole,l.length);l.forEach((y,b)=>{gt.set(y.x,0,y.z),wt.set(0,0,0),vt.setFromEuler(wt),_t.set(1,y.h,1),ut.compose(gt,vt,_t),x.setMatrixAt(b,ut)}),x.castShadow=!0,x.userData.shared=!0,s.add(x)}if(h.length){let x=new Je(this.tlHeadGeo,this.mat.tlHead,h.length),y=new Je(this.tlBulbGeo,this.mat.bulb,h.length*3);h.forEach((b,E)=>{gt.set(b.x,3.6,b.z),wt.set(0,b.yaw,0),vt.setFromEuler(wt),_t.set(1,1,1),ut.compose(gt,vt,_t),x.setMatrixAt(E,ut);let A=-Math.sin(b.yaw),M=-Math.cos(b.yaw);[.36,0,-.36].forEach((w,T)=>{gt.set(b.x+A*.16,3.6+w,b.z+M*.16),ut.compose(gt,vt,_t),y.setMatrixAt(E*3+T,ut),y.setColorAt(E*3+T,new Re(2236962))})}),x.userData.shared=!0,y.userData.shared=!0,s.add(x,y),this.tlHeads.push({tile:n,mesh:y,heads:h})}if(d.length){let x=new Wt(.75,.75),y=new Je(x,this.mat.stop,d.length);d.forEach((b,E)=>{gt.set(b.x,2.1,b.z),wt.set(0,b.yaw,0),vt.setFromEuler(wt),_t.set(1,1,1),ut.compose(gt,vt,_t),y.setMatrixAt(E,ut)}),s.add(y)}if(f.length){let x=new Je(this.humpGeo,this.mat.hump,f.length);f.forEach((y,b)=>{gt.set(y.x,.02,y.z),wt.set(0,y.yaw,0),vt.setFromEuler(wt),_t.set(y.w-.6,.24,.9),ut.compose(gt,vt,_t),x.setMatrixAt(b,ut)}),x.userData.shared=!0,s.add(x),this.humpList=this.humpList||[]}if(m.length){let x=new Wt(1,1);x.rotateX(-Math.PI/2);let y=new Je(x,this.mat.stripe,m.length);m.forEach((b,E)=>{gt.set(b.x,.1,b.z),wt.set(0,b.yaw,0),vt.setFromEuler(wt),_t.set(b.len,1,2.2),ut.compose(gt,vt,_t),y.setMatrixAt(E,ut)}),y.userData.shared=!0,s.add(y)}for(let x of v){let y=new ue(new Wt(1.3,.25),this.streetSignMaterial(x.name));y.position.set(x.x,x.y,x.z),y.rotation.y=x.yaw,s.add(y)}let S=[];for(let x of this.tileRoads.get(n)||[]){let y=this.roads[x];if(!/^(primary|secondary|tertiary|trunk)$/.test(y.t)||y.len<120)continue;let b=y.n.map(A=>this.nodes[A]),E=90+it(x,3,17)*200|0;for(let A=0;A<b.length-1;A++){let M=b[A],w=b[A+1],T=y.seg[A],C=(w[0]-M[0])/T,L=(w[1]-M[1])/T;for(;E<T;){let U=M[0]+C*E,H=M[1]+L*E;if(U>=e*Ye&&U<(e+1)*Ye&&H>=t*Ye&&H<(t+1)*Ye&&!((_=this.tileSigns.get(n))!=null&&_.some(F=>Math.hypot(F[0]-U,F[1]-H)<30)))for(let F of y.one?[1]:[1,-1]){let V=C*F,B=L*F,ne=B,se=-V,J=y.w/4;S.push({x:U+ne*J,z:H+se*J,yaw:Math.atan2(-V,-B),fx:V,fz:B})}E+=320}E-=T}}if(S.length){let x=this.M,y=new Je(x.padGeo,x.pad,S.length);S.forEach((b,E)=>{gt.set(b.x,.1,b.z),wt.set(0,b.yaw,0),vt.setFromEuler(wt),_t.set(1,1,1),ut.compose(gt,vt,_t),y.setMatrixAt(E,ut)}),y.userData.shared=!0,y.renderOrder=1,s.add(y)}return{humps:f,pads:S}}lightAhead(e,t,n,s){let r=performance.now()/1e3,o=null;for(let a of this.tlHeads)if(a.mesh.parent)for(let c of a.heads){let l=c.nx-e,h=c.nz-t,u=l*n+h*s;if(u<-3||u>40||Math.abs(l*s-h*n)>9||-(c.ux*n+c.uz*s)<.75)continue;let d=u-6;(!o||d<o.dist)&&(o={state:this.headState(c,r),dist:d,key:c.node+":"+c.axis})}return o}headState(e,t){let s=(t%24+e.node%7)%24,r=e.axis===0?s:(s+12)%24;return r<8?"g":r<10?"a":"r"}nearFuel(e,t,n){this.fuelPois||(this.fuelPois=this.data.pois.filter(s=>s.k==="fuel"));for(let s of this.fuelPois)if(Math.hypot(s.c[0]-e,s.c[1]-t)<n)return!0;return!1}inSchool(e,t){this.schoolAreas||(this.schoolAreas=this.data.areas.filter(n=>n.k==="school").map(n=>({p:n.p,bb:ud(n.p)})));for(let n of this.schoolAreas)if(!(e<n.bb[0]||e>n.bb[2]||t<n.bb[1]||t>n.bb[3])&&Yo(e,t,n.p))return!0;return!1}masjidNear(e,t,n){this.masjids||(this.masjids=this.data.buildings.filter(o=>o.rel==="muslim"||/masjid|mosque/i.test(o.name||"")).map(o=>({c:o.c,name:o.name&&!/place_of_worship/.test(o.name)?o.name:"Masjid"})));let s=null,r=n;for(let o of this.masjids){let a=Math.hypot(o.c[0]-e,o.c[1]-t);a<r&&(r=a,s=o)}return s}padAt(e,t){let n=this.tiles.get(this.key(Math.floor(e/Ye),Math.floor(t/Ye)));if(!n||!n.pads)return null;for(let s of n.pads){let r=e-s.x,o=t-s.z;if(r*r+o*o>16)continue;let a=r*s.fx+o*s.fz,c=r*s.fz-o*s.fx;if(Math.abs(a)<2.4&&Math.abs(c)<1.9)return s}return null}tickLights(e,t,n){let s=new Re;for(let r of this.tlHeads){if(!r.mesh.parent)continue;let o=r.heads[0];Math.abs(o.x-t)>300||Math.abs(o.z-n)>300||(r.heads.forEach((a,c)=>{let l=this.headState(a,e);r.mesh.setColorAt(c*3,s.setHex(l==="r"?16719904:3344392)),r.mesh.setColorAt(c*3+1,s.setHex(l==="a"?16756768:3350536)),r.mesh.setColorAt(c*3+2,s.setHex(l==="g"?2162528:537368))}),r.mesh.instanceColor.needsUpdate=!0)}}makeMaterials(){let e=this.style,t=this.M,n=a=>new pt(a);this.mat={road:t.road,roadDirt:n({map:e.tex("sand"),color:10127978,roughness:1}),line:t.line,rail:t.rail,house:e.fMatsHouse,wall:e.wallMat,roof:e.roofTileMat,roofFlat:n({color:5922406,roughness:1}),park:n({map:e.tex("grass"),color:9420650,roughness:1}),pitch:n({map:e.tex("grass"),color:7320666,roughness:1}),water:n({color:4161456,roughness:.1,metalness:.3,envMapIntensity:1.5}),farm:n({map:e.tex("sand"),color:12099696,roughness:1}),lot:n({map:e.tex("pavement"),color:11184810,roughness:1}),scrub:n({map:e.tex("grass"),color:10525802,roughness:1}),railbed:n({color:5591114,roughness:1}),railsteel:n({color:9080208,roughness:.4,metalness:.8}),pavement:n({map:e.tex("pavement"),color:12170925,roughness:1}),kerb:n({color:10131600,roughness:.9,side:Lt}),lineYellow:n({color:15254586,roughness:.7}),white:n({color:15921126,roughness:.8}),dome:n({color:4169082,roughness:.35,metalness:.2}),gold:n({color:13677676,roughness:.3,metalness:.7}),navy:n({color:1517628,roughness:.6})};for(let a of[this.mat.park,this.mat.pitch,this.mat.farm,this.mat.lot,this.mat.scrub])a.map=a.map.clone(),a.map.repeat.set(1/8,1/8),a.map.needsUpdate=!0;this.mat.pavement.map=this.mat.pavement.map.clone(),this.mat.pavement.map.repeat.set(1,1),this.mat.pavement.map.needsUpdate=!0,this.houseGeo=new nt(1,1,1),this.houseGeo.translate(0,.5,0);let s=this.houseGeo.attributes.uv;for(let a=0;a<s.count;a++)s.setXY(a,s.getX(a)*2.6,s.getY(a)*1);this.roofGeo=new Po(1,1,4),this.roofGeo.rotateY(Math.PI/4),this.roofGeo.translate(0,.5,0),this.wallGeo=new nt(1,1,1),this.wallGeo.translate(0,.5,0);let r=this.wallGeo.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)*3,r.getY(a)*.5);let o=this.houseGeo.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a),o.getY(a));this.fenceGeo=new Wt(1,1),this.fenceGeo.rotateY(Math.PI/2),this.fenceGeo.translate(0,.5,0);{let a=this.fenceGeo.attributes.uv;for(let c=0;c<a.count;c++)a.setXY(c,a.getX(c)*2,a.getY(c))}this.humpGeo=new Ht(.5,.5,1,10),this.humpGeo.rotateZ(Math.PI/2),this.poleGeo=new Ht(.07,.09,1,7),this.poleGeo.translate(0,.5,0),this.tlHeadGeo=new nt(.42,1.15,.3),this.tlBulbGeo=new ni(.13,8,6),this.mat.tlHead=new pt({color:1711394,roughness:.6}),this.mat.pole=new pt({color:9080208,roughness:.5,metalness:.7}),this.mat.bulb=new pt({color:16777215,emissive:16777215,emissiveIntensity:1,roughness:.4}),this.mat.stop=this.stopMaterial(),this.mat.hump=new pt({color:6974058,roughness:1}),this.mat.stripe=new pt({color:16053492,roughness:.7})}ensure(e,t,n){let s=Math.floor(e/Ye),r=Math.floor(t/Ye),o=2;for(let[d,f]of this.tiles)(Math.abs(f.tx-s)>o+1||Math.abs(f.tz-r)>o+1)&&(this.disposeTile(f),this.tiles.delete(d));let a=0;for(let d=-o;d<=o;d++)for(let f=-o;f<=o;f++){if(a>=1&&(Math.abs(d)>1||Math.abs(f)>1)&&!n)continue;let m=this.key(s+d,r+f);this.tiles.has(m)||(this.tiles.set(m,this.buildTile(s+d,r+f,m)),a++)}let c=[];for(let d of this.tiles.values())d.steps.length&&c.push(d);if(!c.length)return;c.sort((d,f)=>Math.abs(d.tx-s)+Math.abs(d.tz-r)-(Math.abs(f.tx-s)+Math.abs(f.tz-r)));let l=n?1e9:6,h=performance.now(),u=0;for(let d of c){for(;d.steps.length&&(u===0||performance.now()-h<l);){let f=d.steps.shift();this.lm=d.lm;let m=performance.now();f();let v=performance.now()-m;this.stepMax=Math.max(this.stepMax||0,v),this.stepBy=this.stepBy||{},this.stepBy[f.label||"?"]=Math.max(this.stepBy[f.label||"?"]||0,v),this.stepN=(this.stepN||0)+1,this.stepSum=(this.stepSum||0)+v,u++}if(u&&performance.now()-h>=l)break}}finishTiles(e,t){this.ensure(e,t,!0)}obstaclesNear(e,t){let n=[],s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){let c=this.tiles.get(this.key(s+o,r+a));if(c)for(let l of c.obstacles)Math.abs(l.x-e)<60&&Math.abs(l.z-t)<60&&n.push(l)}return n}disposeTile(e){this.group.remove(e.group),gs("t"+e.tx+"_"+e.tz),this.tlHeads=this.tlHeads.filter(t=>t.tile!==this.key(e.tx,e.tz));for(let t of e.parked||[])Yr(t);e.group.traverse(t=>{if(t.isInstancedMesh){t.dispose();return}t.geometry&&!t.userData.shared&&t.geometry.dispose()});for(let t of e.roads){let n=this.roadMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.traverse(s=>{s.geometry&&s.geometry.dispose()}),this.roadMeshes.delete(t))}for(let t of e.areas){let n=this.areaMeshes.get(t);n&&--n.refs<=0&&(this.group.remove(n.mesh),n.mesh.geometry.dispose(),this.areaMeshes.delete(t))}}buildTile(e,t,n){let s=new ft,r=[],o=this.nodes;this.lm=[];let a=e*Ye,c=t*Ye,l={tx:e,tz:t,group:s,obstacles:r,roads:null,areas:this.tileAreas.get(n)||[],humps:[],pads:[],parked:[],steps:[],lm:this.lm},h=this.tileRoads.get(n)||[];l.roads=h;for(let _ of h){let x=this.roadMeshes.get(_);x||(x={refs:0,mesh:this.buildRoad(_)},this.roadMeshes.set(_,x),this.group.add(x.mesh)),x.refs++}let u=[];for(let _ of h){let x=this.roads[_];for(let y of x.n){let b=o[y];if(b[0]<a||b[0]>=a+Ye||b[1]<c||b[1]>=c+Ye)continue;let E=this.nodeRoads.get(y);if(!E||E.length<2)continue;let A=0,M=0;for(let[w]of E)A=Math.max(A,this.roads[w].w),M=Math.max(M,Rm[this.roads[w].t]||.06);u.find(w=>w[0]===y)||u.push([y,b,A,M])}}if(u.length){let _=u.map(([,y,b,E])=>{let A=new ks(b/2,14);A.rotateX(-Math.PI/2),A.translate(y[0],E+.002,y[1]);let M=A.attributes.uv;for(let w=0;w<M.count;w++)M.setXY(w,M.getX(w)*b/7,M.getY(w)*b/7);return A}),x=new ue(Uc(_),this.mat.road);x.receiveShadow=!0,s.add(x)}for(let _ of this.tileAreas.get(n)||[]){let x=this.areaMeshes.get(_);if(!x){let y=this.buildArea(_);if(!y)continue;x={refs:0,mesh:y},this.areaMeshes.set(_,x),this.group.add(y)}x.refs++}let d=l.parked;for(let _ of this.tileAreas.get(n)||[])l.steps.push(Object.assign(()=>{let x=this.data.areas[_];if(x.k!=="park_lot")return;let y=Fc(x.p);if(y[0]<a||y[0]>=a+Ye||y[1]<c||y[1]>=c+Ye)return;let b=$r(x.p);if(b.hw<8||b.hl<6)return;let E=b.hw>=b.hl,A=Math.cos(b.h)*(E?1:0)+-Math.sin(b.h)*(E?0:1),M=-Math.sin(b.h)*(E?1:0)+-Math.cos(b.h)*(E?0:1),w=-M,T=A,C=E?b.hw:b.hl,L=E?b.hl:b.hw,U=Math.max(1,Math.min(4,Math.floor(L*2/16))),H=[],F=0;for(let V=0;V<U;V++){let B=-L+8+V*16-(U>1?0:L-8);for(let ne=-C+3;ne<C-3;ne+=2.6){let se=b.x+A*ne+w*B,J=b.z+M*ne+T*B;if(!(!Yo(se,J,x.p)||this.nearest(se,J).d<4)){for(let oe of[-1,1]){let _e=new Wt(.12,5);_e.rotateX(-Math.PI/2),_e.rotateY(Math.atan2(w,T)),_e.translate(se+w*oe*2.6,.03,J+T*oe*2.6),H.push(_e)}if(F<6&&it(se|0,J|0,8)<.22){let oe=it(se|0,J|0,9)<.5?-1:1,_e=Gt[Math.floor(it(se|0,J|0,10)*Gt.length)];if(Vs(_e.id,!0)){let q=qr(_e.id,!0,[13832735,1525449,15921906,1381914,10133670,7153881][Math.floor(it(se|0,J|0,11)*6)]);q.position.set(se+w*oe*2.6,0,J+T*oe*2.6),q.rotation.y=Math.atan2(-w*oe,-T*oe),q.traverse(ae=>{ae.userData.shared=!0}),s.add(q),d.push(q),F++,r.push({type:"box",x:q.position.x,z:q.position.z,hw:_e.w/2,hl:_e.len/2,h:q.rotation.y})}}}}}if(H.length){let V=new ue(Uc(H),this.mat.stripe);s.add(V)}},{label:"parks"}));l.steps.push(Object.assign(()=>{for(let _ of this.tilePois.get(n)||[])_.k==="fuel"&&(bn("engen")||!this.nearBuilding(_.c[0],_.c[1],6))&&this.buildFuel(_,s,r)},{label:"fuel"}));{let _=this.tileBuildings.get(n)||[];for(let x=0;x<_.length;x+=8){let y=_.slice(x,x+8);l.steps.push(Object.assign(()=>{for(let b of y){let E=this.data.buildings[b],A=this.buildBuilding(E);if(!A)continue;s.add(A);let M=$r(E.p);r.push({type:"box",...M})}},{label:"osm"}))}}let f=[],m=[],v=[],g=[],p=this.tileGB.get(n)||[],S=p.length>0;for(let _=0;_<p.length;_+=60){let x=p.slice(_,_+60);l.steps.push(Object.assign(()=>this.buildGB(x,s,r,f),{label:"gb"}))}for(let _ of h)l.steps.push(Object.assign(()=>{{let x=this.roads[_];if(!/residential|unclassified|living_street/.test(x.t))return;let y=21,b=10,E=0;for(let A=0;A<x.n.length-1;A++){let M=o[x.n[A]],w=o[x.n[A+1]],T=x.seg[A],C=(w[0]-M[0])/T,L=(w[1]-M[1])/T,U=-L,H=C;for(;b<T;b+=y){E++;let F=M[0]+C*b,V=M[1]+L*b;if(!(F<a||F>=a+Ye||V<c||V>=c+Ye))for(let B of[-1,1]){if(it(_,E,B+2)<.18)continue;if(S){let he=F+U*B*(x.w/2+10),ve=V+H*B*(x.w/2+10);if(!this.gbNear(he,ve,14))continue;let pe=x.w/2+2.2,ie=F+U*B*pe,K=V+H*B*pe,I=(it(_,E,23)-.5)*8,R=it(_,E,47)<.45;for(let O of[I-5.5,I+5.5]){let Y=ie+C*O,Q=K+L*O,j=!0;for(let Te of[-3.75,-1.9,0,1.9,3.75]){let xe=this.nearest(Y+C*Te,Q+L*Te);if(xe.d<xe.w/2+1.6){j=!1;break}}j&&(f.push({wall:!0,palisade:R,x:Y,z:Q,yaw:Math.atan2(-C,-L)+(B===1?Math.PI:0),len:7.5}),r.push({type:"box",x:Y,z:Q,hw:.15,hl:3.75,h:Math.atan2(-C,-L)+(B===1?Math.PI:0)}))}if(it(_,E,29)<.35){let O=F+U*B*(x.w/2+1.1)+C*6,Y=V+H*B*(x.w/2+1.1)+L*6;this.nearest(O,Y,{exclude:_}).d>3&&((it(_,E,53)<.5?v:m).push({x:O,z:Y,scale:.6+it(_,E,31)*.5,rot:it(_,E,37)*6.28}),r.push({type:"circle",x:O,z:Y,r:.4}))}continue}let se=x.w/2+8.5+it(_,E,B+7)*3,J=F+U*B*se,oe=V+H*B*se,_e=this.nearest(J,oe,{exclude:_});if(_e.d<_e.w/2+7||this.nearest(J+C*6,oe+L*6,{exclude:_}).d<6||this.nearest(J-C*6,oe-L*6,{exclude:_}).d<6||this.nearBuilding(J,oe,14))continue;let q=Math.atan2(-C,-L)+(B===1?Math.PI:0),ae=it(_,E,41),ye=it(_,E,43)<.5,de=ye?Nc[Math.floor(ae*Nc.length)]:Dc[Math.floor(ae*Dc.length)],Ne=5.5+it(_,E,11)*1.8,ke=4.5+it(_,E,13)*1.4,Fe=(ye?6.3:3.3)+it(_,E,17)*.4;f.push({x:J,z:oe,yaw:q,hw:Ne,hd:ke,hh:Fe,style:de,flat:de==="modern"||de==="grey"||de==="peach"}),r.push({type:"box",x:J,z:oe,hw:ke,hl:Ne,h:q});let Ze=x.w/2+2.2,te=F+U*B*Ze,fe=V+H*B*Ze,N=(it(_,E,23)-.5)*8,Le=it(_,E,47)<.45;for(let he of[N-5.5,N+5.5]){let ve=te+C*he,pe=fe+L*he,ie=!0;for(let K of[-3.75,-1.9,0,1.9,3.75]){let I=this.nearest(ve+C*K,pe+L*K);if(I.d<I.w/2+1.6){ie=!1;break}}ie&&(f.push({wall:!0,palisade:Le,x:ve,z:pe,yaw:q,len:7.5}),r.push({type:"box",x:ve,z:pe,hw:.15,hl:3.75,h:q}))}if(it(_,E,29)<.35){let he=F+U*B*(x.w/2+1.1)+C*6,ve=V+H*B*(x.w/2+1.1)+L*6;(it(_,E,53)<.5?v:m).push({x:he,z:ve,scale:.6+it(_,E,31)*.5,rot:it(_,E,37)*6.28}),r.push({type:"circle",x:he,z:ve,r:.4})}}}b-=T}}},{label:"houses"}));return l.steps.push(Object.assign(()=>{let _=f.filter(x=>x.wall);for(let x of["arch","brick","modern","white","blue","grey","peach"]){let y=f.filter(T=>!T.wall&&T.style===x);if(!y.length)continue;let b=new Je(this.houseGeo,this.style.lenMats[x],y.length),E=y.filter(T=>!T.flat),A=y.filter(T=>T.flat),M=E.length?new Je(this.roofGeo,this.mat.roof,E.length):null,w=A.length?new Je(this.wallGeo,this.mat.roofFlat,A.length):null;y.forEach((T,C)=>{gt.set(T.x,0,T.z),wt.set(0,T.yaw,0),vt.setFromEuler(wt),_t.set(T.hd*2,T.hh,T.hw*2),ut.compose(gt,vt,_t),b.setMatrixAt(C,ut)}),E.forEach((T,C)=>{gt.set(T.x,T.hh,T.z),wt.set(0,T.yaw,0),vt.setFromEuler(wt),_t.set((T.hd+.6)*2*Math.SQRT1_2,2+T.hd*.12,(T.hw+.6)*2*Math.SQRT1_2),ut.compose(gt,vt,_t),M.setMatrixAt(C,ut)}),A.forEach((T,C)=>{gt.set(T.x,T.hh,T.z),wt.set(0,T.yaw,0),vt.setFromEuler(wt),_t.set(T.hd*2+.3,.35,T.hw*2+.3),ut.compose(gt,vt,_t),w.setMatrixAt(C,ut)}),b.castShadow=!0,b.receiveShadow=!0,b.userData.shared=!0,s.add(b),M&&(M.castShadow=!0,M.userData.shared=!0,s.add(M)),w&&(w.userData.shared=!0,s.add(w))}for(let x of[!1,!0]){let y=_.filter(E=>!!E.palisade===x);if(!y.length)continue;let b=new Je(x?this.fenceGeo:this.wallGeo,x?this.style.palisadeMat:this.mat.wall,y.length);y.forEach((E,A)=>{gt.set(E.x,0,E.z),wt.set(0,E.yaw,0),vt.setFromEuler(wt),_t.set(x?1:.25,1.8,E.len),ut.compose(gt,vt,_t),b.setMatrixAt(A,ut)}),b.castShadow=!x,b.userData.shared=!0,s.add(b)}},{label:"housemesh"})),l.steps.push(Object.assign(()=>{let _=0,x=[];for(let y of h){let b=this.roads[y];if(!/primary|secondary|tertiary|trunk/.test(b.t)||/link/.test(b.t))continue;let E=12+it(y,3)*20,A=0;for(let M=0;M<b.n.length-1;M++){let w=o[b.n[M]],T=o[b.n[M+1]],C=b.seg[M],L=(T[0]-w[0])/C,U=(T[1]-w[1])/C,H=-U,F=L;for(;E<C-4;E+=34){A++;let V=w[0]+L*E,B=w[1]+U*E;if(V<a||V>=a+Ye||B<c||B>=c+Ye)continue;let ne=A%2?-1:1,se=ne*(b.w/2+1),J=V+H*se,oe=B+F*se;if(!(this.nearest(J,oe,{exclude:y}).d<4)){if(x.push({x:J,z:oe,h:Math.atan2(-L,-U)+(ne===1?Math.PI/2:-Math.PI/2)}),_++,r.push({type:"circle",x:J,z:oe,r:.2}),A%5===2){let _e=V+H*ne*(b.w/2+6.5),q=B+F*ne*(b.w/2+6.5);if(this.nearest(_e,q,{exclude:y}).d>7&&!this.nearBuilding(_e,q,12)&&!this.gbNear(_e,q,9)){let ae=this.M,ye=new ft,de=ae.billboards[(y+A)%ae.billboards.length],Ne=new ue(ae.bbPanelGeo,[ae.rail,ae.rail,ae.rail,ae.rail,de,de]);Ne.position.set(0,7.5,0),Ne.userData.shared=!0,ye.add(Ne);for(let Ze of[-3.5,3.5]){let te=new ue(ae.bbPostGeo,ae.rail);te.position.set(Ze,2.25,0),te.userData.shared=!0,ye.add(te)}ye.position.set(_e,0,q),ye.rotation.y=Math.atan2(-L,-U)-ne*.5,s.add(ye);let ke=Math.cos(ye.rotation.y),Fe=Math.sin(ye.rotation.y);for(let Ze of[-3.5,3.5])r.push({type:"circle",x:_e+Ze*ke,z:q-Ze*Fe,r:.3})}}if(A%3===0){let _e=V+H*-ne*(b.w/2+1.4),q=B+F*-ne*(b.w/2+1.4);this.nearest(_e,q,{exclude:y}).d>4&&!this.nearBuilding(_e,q,9)&&((it(y,A,61)<.5?g:v).push({x:_e,z:q,scale:.9+it(y,A,63)*.4,rot:it(y,A,67)*6.28}),r.push({type:"circle",x:_e,z:q,r:.45}))}}}E-=C}}if(_){let y=this.M,b=new Je(y.lampGeo,y.lamp,_),E=new Je(y.lampGlowGeo,y.lampGlow,_),A=new Je(y.poolGeo,y.pool,_);x.forEach((w,T)=>{gt.set(w.x,0,w.z),wt.set(0,w.h,0),vt.setFromEuler(wt),_t.set(1,1,1),ut.compose(gt,vt,_t),b.setMatrixAt(T,ut),E.setMatrixAt(T,ut),A.setMatrixAt(T,ut)});let M=new Je(y.bannerGeo,y.banner,_);for(let w=0;w<_;w++)b.getMatrixAt(w,ut),M.setMatrixAt(w,ut);b.castShadow=!0,A.renderOrder=2;for(let w of[b,E,A,M])w.userData.shared=!0,w.frustumCulled=!1,s.add(w)}},{label:"lamps"})),l.steps.push(Object.assign(()=>{let _=this.buildFurniture(e,t,n,s,r);l.humps=_.humps,l.pads=_.pads;for(let x of this.tileTrees.get(n)||[])m.push({x:x[0],z:x[1],scale:.8+it(x[0]|0,x[1]|0)*.5,rot:0}),r.push({type:"circle",x:x[0],z:x[1],r:.5});for(let x of this.tileAreas.get(n)||[]){let y=this.data.areas[x];if(y.k!=="park"&&y.k!=="grass")continue;let b=Fc(y.p);if(b[0]<a||b[0]>=a+Ye||b[1]<c||b[1]>=c+Ye)continue;let E=ud(y.p),A=Math.min(14,Math.floor((E[2]-E[0])*(E[3]-E[1])/2500));for(let M=0;M<A;M++){let w=E[0]+it(x,M,1)*(E[2]-E[0]),T=E[1]+it(x,M,2)*(E[3]-E[1]);Yo(w,T,y.p)&&(this.nearest(w,T).d<8||(m.push({x:w,z:T,scale:.9+it(x,M,3)*.5,rot:0}),r.push({type:"circle",x:w,z:T,r:.5})))}}if(m.length){let[x,y]=xm(this.style.treeStyles.oakTree,m);x.userData.shared=!0,y.userData.shared=!0,s.add(x,y)}for(let[x,y]of[[v,this.style.jacaranda],[g,this.style.palm]])if(!(!x.length||!y))for(let b of y){let E=new Je(b.geometry,b.material,x.length);x.forEach((A,M)=>{gt.set(A.x,0,A.z),wt.set(0,A.rot,0),vt.setFromEuler(wt),_t.set(A.scale,A.scale,A.scale),ut.compose(gt,vt,_t),E.setMatrixAt(M,ut)}),E.castShadow=!0,E.userData.shared=!0,E.frustumCulled=!1,s.add(E)}{let x=0;for(let y of h){let b=this.roads[y];if(b.t==="service"||b.t==="track"||b.len<60)continue;let E=30+it(y,1)*40,A=0;for(let M=0;M<b.n.length-1&&x<30;M++){let w=o[b.n[M]],T=o[b.n[M+1]],C=b.seg[M],L=(T[0]-w[0])/C,U=(T[1]-w[1])/C,H=-U,F=L;for(;E+12<C&&x<30;E+=90){A++;let V=w[0]+L*E,B=w[1]+U*E;if(V<a||V>=a+Ye||B<c||B>=c+Ye)continue;let se=(it(y,A,5)<.5?-1:1)*b.w/4;for(let J=0;J<3;J++)Xs(V+L*J*5+H*se,B+U*J*5+F*se,"t"+e+"_"+t);x+=3}E-=C}}}if(this.style.showroomAt&&Math.floor(this.style.showroomAt[0]/Ye)===e&&Math.floor(this.style.showroomAt[1]/Ye)===t){let[x,y,b]=this.style.showroomAt;if(bn("showroom")){let A=Zr.showroom;this.lm.push({id:"showroom",x,z:y,yaw:b,sx:18,sy:18,sz:18});let M=new ue(new Wt(6.4,1.6),this.M.sign);M.position.set(x+Math.sin(b)*(A.d*18/2+.06),A.h*18*.64,y+Math.cos(b)*(A.d*18/2+.06)),M.rotation.y=b,M.userData.shared=!0,s.add(M),r.push({type:"box",x,z:y,hw:18/2,hl:A.d*18/2,h:b})}else{let E=this.style.makeBuilding(!0);E.group.position.set(x,0,y),E.group.rotation.y=b,s.add(E.group),r.push({type:"box",x,z:y,hw:E.w/2,hl:E.d/2,h:b})}}{let x={};for(let y of this.lm)(x[y.id]=x[y.id]||[]).push(y);for(let y in x){let b=Tm(y,x[y]);b&&s.add(b)}this.lm=[]}},{label:"furniture"})),this.group.add(s),l}gbNear(e,t,n){let s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileGB.get(this.key(s+o,r+a))||[]){let l=this.gb[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildGB(e,t,n,s){let r=this.style.lenMats,o={arch:[],brick:[],modern:[],white:[],blue:[],grey:[],peach:[],flats:[]},a=[],c=[];for(let l of e){let h=this.gb[l],u=h.c;if(this.nearBuilding(u[0],u[1],9)||this.style.showroomAt&&Math.hypot(u[0]-this.style.showroomAt[0],u[1]-this.style.showroomAt[1])<26||bn("engen")&&this.nearFuel(u[0],u[1],24))continue;let d=this.nearest(u[0],u[1]);if(d.d<d.w/2+2.5)continue;let f=$r(h.p),m=h.a,v=it(u[0]|0,u[1]|0,3),g,p,S=!1;if(m>450)g="flats",p=m>1200?8:6.6,S=!0;else if(m<70)g=v<.5?"arch":v<.8?"white":"modern",p=3.2,S=g==="modern";else{let _=m>150?it(u[0]|0,u[1]|0,4)<.6:it(u[0]|0,u[1]|0,4)<.25;g=_?Nc[Math.floor(v*Nc.length)]:Dc[Math.floor(v*Dc.length)],p=_?6.3:3.4,S=g==="modern"||g==="grey"||g==="peach"}if(m>=220&&bn("school")&&m/(4*f.hw*f.hl)>.7&&Math.max(f.hw,f.hl)/Math.min(f.hw,f.hl)>1.6&&this.inSchool(u[0],u[1])){let _=Xo("school",f,d.px!=null?d.px:u[0]+1,d.px!=null?d.pz:u[1],{min:12,maxH:7.5,stretch:1.8});if(_){this.lm.push(_),n.push({type:"box",...f});continue}}if(m>=190&&m<=450&&bn("house")&&m/(4*f.hw*f.hl)>.78&&it(u[0]|0,u[1]|0,6)<.45){let _=Xo("house",f,d.px!=null?d.px:u[0]+1,d.px!=null?d.pz:u[1],{min:9,maxH:7.4,stretch:1.3});if(_){this.lm.push(_),n.push({type:"box",...f});continue}}if(m>450&&h.p.length>4){let _=new ti(h.p.map(E=>new ce(E[0],-E[1]))),x=new rs(_,{depth:p,bevelEnabled:!1});x.rotateX(-Math.PI/2);let y=x.attributes.uv;for(let E=0;E<y.count;E++)y.setXY(E,y.getX(E)/9,y.getY(E)/(p>7?p/2:p));let b=new ue(x,[this.mat.roofFlat,r.flats]);b.castShadow=!0,b.receiveShadow=!0,t.add(b),n.push({type:"box",...f});continue}o[g].push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}),S?c.push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}):a.push({x:f.x,z:f.z,yaw:f.h,hw:f.hw,hl:f.hl,h:p}),n.push({type:"box",...f})}for(let l in o){let h=o[l];if(!h.length)continue;let u=new Je(this.houseGeo,r[l],h.length);h.forEach((d,f)=>{gt.set(d.x,0,d.z),wt.set(0,d.yaw,0),vt.setFromEuler(wt),_t.set(d.hw*2,d.h,d.hl*2),ut.compose(gt,vt,_t),u.setMatrixAt(f,ut)}),u.castShadow=!0,u.receiveShadow=!0,u.userData.shared=!0,t.add(u)}if(a.length){let l=new Je(this.roofGeo,this.mat.roof,a.length);a.forEach((h,u)=>{gt.set(h.x,h.h,h.z),wt.set(0,h.yaw,0),vt.setFromEuler(wt),_t.set((h.hw+.5)*2*Math.SQRT1_2,1.6+Math.min(h.hw,h.hl)*.2,(h.hl+.5)*2*Math.SQRT1_2),ut.compose(gt,vt,_t),l.setMatrixAt(u,ut)}),l.castShadow=!0,l.userData.shared=!0,t.add(l)}if(c.length){let l=new Je(this.wallGeo,this.mat.roofFlat,c.length);c.forEach((h,u)=>{gt.set(h.x,h.h,h.z),wt.set(0,h.yaw,0),vt.setFromEuler(wt),_t.set(h.hw*2+.3,.35,h.hl*2+.3),ut.compose(gt,vt,_t),l.setMatrixAt(u,ut)}),l.userData.shared=!0,t.add(l)}}humpAt(e,t){let n=this.tiles.get(this.key(Math.floor(e/Ye),Math.floor(t/Ye)));if(!n||!n.humps)return null;for(let s of n.humps){let r=e-s.x,o=t-s.z;if(r*r+o*o>s.w*s.w)continue;let a=-Math.sin(s.yaw),c=-Math.cos(s.yaw),l=r*a+o*c;if(Math.abs(l)<.6)return s}return null}nearBuilding(e,t,n){let s=Math.floor(e/Ye),r=Math.floor(t/Ye);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)for(let c of this.tileBuildings.get(this.key(s+o,r+a))||[]){let l=this.data.buildings[c].c;if(Math.hypot(l[0]-e,l[1]-t)<n)return!0}return!1}buildRoad(e){let t=this.roads[e],n=this.nodes,s=t.n.map(u=>n[u]),r=t.w,o=Rm[t.t]||.06,a=new ft,c=t.t==="track"?this.mat.roadDirt:this.mat.road,l=new ue(qo(s,-r/2,r/2,o,1/7),c);l.receiveShadow=!0,a.add(l);let h=[s[0],s[s.length-1]].map(u=>{let d=new ks(r/2,12);return d.rotateX(-Math.PI/2),d.translate(u[0],o,u[1]),d});if(a.add(new ue(Uc(h),c)),/residential|tertiary|secondary|primary|unclassified|living_street/.test(t.t)&&!/link/.test(t.t))for(let u of[-1,1]){let d=new ue(qo(s,u*(r/2-.05),u*(r/2+1.9),o+.12,.25),this.mat.pavement);d.receiveShadow=!0,a.add(d),a.add(new ue(qo(s,u*(r/2-.08),u*(r/2-.05),o,1,o+.12),this.mat.kerb))}if(r>=8.4){for(let g of[-1,1])a.add(new ue(qo(s,g*(r/2-.45),g*(r/2-.3),o+.01,1),this.mat.lineYellow));let u=t.one?Math.max(2,t.lanes||Math.round(r/3.6)):2,d=[],f=[];if(t.one)for(let g=1;g<u;g++)f.push(-r/2+r/u*g);else f.push(0);let m=0,v=t.len;for(let g=0;g<s.length-1;g++){let p=s[g],S=s[g+1],_=t.seg[g],x=(S[0]-p[0])/_,y=(S[1]-p[1])/_,b=-y,E=x;for(let A=(9-m%9)%9;A+3<_;A+=9)for(let M of f){let w=[p[0]+x*A+b*M,p[1]+y*A+E*M],T=[p[0]+x*(A+3)+b*M,p[1]+y*(A+3)+E*M];d.push(qo([w,T],-.08,.08,o+.01,1))}m+=_}d.length&&a.add(new ue(Uc(d),this.mat.line))}return a}buildArea(e){let t=this.data.areas[e];if(t.p.length<3)return null;let n={park:this.mat.park,grass:this.mat.park,pitch:this.mat.pitch,water:this.mat.water,wet:this.mat.water,farm:this.mat.farm,ind:this.mat.lot,com:this.mat.lot,park_lot:this.mat.lot,scrub:this.mat.scrub,school:this.mat.park,quarry:this.mat.farm}[t.k];if(!n)return null;let s=new ti(t.p.map(c=>new ce(c[0],-c[1]))),r=new dc(s);r.rotateX(-Math.PI/2);let o={water:.03,wet:.025,park:.02,grass:.02,pitch:.022,farm:.015,scrub:.015,ind:.018,com:.018,park_lot:.019,school:.02,quarry:.015}[t.k]||.02;r.translate(0,o,0);let a=new ue(r,n);return a.receiveShadow=!0,a}buildBuilding(e){if(e.p.length<3)return null;let n=this.style.lenMats,s=e.k+" "+(e.am||"")+" "+(e.shop||"")+" "+(e.name||""),r=e.rel==="muslim"||/masjid|mosque|islam|jumma|sufi|musallah/i.test(s)||e.k==="mosque",o=e.rel==="hindu"||/temple|koil|mandir|sai centre|hindu/i.test(s),a=e.rel==="christian"||/church|chapel|catholic|kingdom hall/i.test(s),c=/mall|supermarket|plaza|shopping|centre|center|hyper|spar|pick n pay|checkers|shoprite/i.test(s)&&!/school|clinic|community|civic|sports|recreation|health/i.test(s),l=!c&&/retail|commercial|shop|kfc|mcdonald|hardware|station|store|pharmacy|chemist|butcher|cafe|restaurant|takeaway/i.test(s),h=/school|college|madressa|madrasah|academy/i.test(s),u=/hospital|clinic|police|library|court|civic|municipal|community|hall|post office|bank/i.test(s),d=/apartments|flats|residential;?apartments/i.test(e.k),f=ud(e.p),m=Math.min(f[2]-f[0],f[3]-f[1]),v=x1(e.p),g=e.c,p=e.lv?e.lv*3.3:e.h;e.lv||(r?p=Math.max(p,7.5):c?p=Math.max(p,v>2500?9:7):h||u?p=Math.max(p,6.6):d?p=Math.max(p,9.6):l?p=Math.max(p,5.5):(e.k==="house"||e.k==="residential"||e.k==="yes")&&(p=Math.max(p,it(e.c[0]|0,e.c[1]|0,5)<.45&&v>110?6.3:3.5)));let S=null,_=null;if(r&&bn("masjid")){let T=$r(e.p),C=this.nearest(g[0],g[1]);S=Xo("masjid",T,C.px!=null?C.px:g[0]+1,C.px!=null?C.pz:g[1],{min:13,maxH:34,stretch:1.25}),S&&(this.lm.push(S),p=v/(4*T.hw*T.hl)>.72?0:2.4)}else if(c&&bn("mall")&&v>1500){let T=this.entranceEdge(e);if(T){let C=v>6e3&&bn("bigmall"),L=C?"bigmall":"mall",U=Zr[L],H=C?Math.max(40,Math.min(64,T.L*.9)):Math.max(24,Math.min(36,T.L*.9)),F=Math.min(H,11/U.h);_={id:L,x:T.mx+T.nx*(.6-U.d*H/2),z:T.mz+T.nz*(.6-U.d*H/2),yaw:Math.atan2(T.nx,T.nz),sx:H,sy:F,sz:H},this.lm.push(_)}}else if(o&&bn("temple")||a&&bn("church")||h&&bn("school")&&v>350){let T=o?"temple":a?"church":"school",C=$r(e.p),L=this.nearest(g[0],g[1]),U=T==="temple"?{min:9,maxH:24,stretch:1.25}:T==="church"?{min:7,maxH:20,stretch:1.3}:{min:16,maxH:8,stretch:1.6};S=Xo(T,C,L.px!=null?L.px:g[0]+1,L.px!=null?L.pz:g[1],U),S&&(this.lm.push(S),p=v/(4*C.hw*C.hl)>.72?0:T==="school"?3.4:2.4)}let x=new ti(e.p.map(T=>new ce(T[0],-T[1]))),y=p>0?new rs(x,{depth:p,bevelEnabled:!1}):null;if(y&&y.rotateX(-Math.PI/2),y){let T=y.attributes.uv;for(let C=0;C<T.count;C++)T.setXY(C,T.getX(C)/9,T.getY(C)/(p>7?p/2:p))}let b=it(e.c[0]|0,e.c[1]|0,9),E=b<.4?n.arch:b<.75?n.brick:n.modern,A=r?n.mosque:o||a?this.mat.white:c?n.mall:l?n.shops:h||u||d||p>7.5?n.flats:E,M=new ft;if(y){let T=new ue(y,[this.mat.roofFlat,A]);T.castShadow=!0,T.receiveShadow=!0,M.add(T)}let w=e.c;if(!r&&!o&&!a&&!c&&!l&&!h&&!u&&!d&&p<=7&&e.p.length<=6&&m>5){let T=$r(e.p),C=new ue(this.roofGeo,this.mat.roof);C.position.set(T.x,p,T.z),C.rotation.y=T.h,C.scale.set((T.hw+.5)*2*Math.SQRT1_2,1.8+T.hw*.15,(T.hl+.5)*2*Math.SQRT1_2),C.castShadow=!0,C.userData.shared=!0,M.add(C)}if(r&&!S){let T=Math.min(7,Math.max(2.5,m*.26)),C=new ue(new ni(T,24,14,0,Math.PI*2,0,Math.PI/2),this.mat.dome);C.position.set(w[0],p,w[1]),C.castShadow=!0,M.add(C);let L=new ue(new Ht(T,T,1.2,24),this.mat.white);L.position.set(w[0],p+.6,w[1]),M.add(L),C.position.y=p+1.2;let U=new ue(new os(.55,.09,6,18,Math.PI*1.5),this.mat.gold);U.position.set(w[0],p+1.2+T+.8,w[1]),U.rotation.z=Math.PI*.25,M.add(U);let H=new ue(new Ht(.06,.06,1,6),this.mat.gold);H.position.set(w[0],p+1.2+T+.4,w[1]),M.add(H);let F=[[f[0]+2.2,f[1]+2.2],[f[2]-2.2,f[1]+2.2],[f[0]+2.2,f[3]-2.2],[f[2]-2.2,f[3]-2.2]].filter(([J,oe])=>Yo(J,oe,e.p));for(let[J,oe]of F){let _e=new ue(new ni(1.2,14,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);_e.position.set(J,p,oe),M.add(_e)}let V=p+8+Math.min(10,m*.45),B=m>18?[[f[0]+1.6,f[1]+1.6],[f[2]-1.6,f[1]+1.6]]:[[f[0]+1.6,f[1]+1.6]];for(let[J,oe]of B){let _e=new ue(new Ht(.85,1.05,V,12),this.mat.white);_e.position.set(J,V/2,oe),_e.castShadow=!0,M.add(_e);for(let ye of[.55,.8]){let de=new ue(new Ht(1.35,1.1,.5,12),this.mat.dome);de.position.set(J,V*ye,oe),M.add(de)}let q=new ue(new ni(1.2,12,8,0,Math.PI*2,0,Math.PI/2),this.mat.dome);q.position.set(J,V,oe),M.add(q);let ae=new ue(new Ht(.05,.05,1.2,6),this.mat.gold);ae.position.set(J,V+1.6,oe),M.add(ae)}let ne=this.nearest(w[0],w[1]),se=this.roadEdge(e,ne);if(se){let J=Math.min(10,se.L*.6),oe=new ue(new nt(J,Math.min(p,5.5),2.4),[n.mosque,n.mosque,this.mat.roofFlat,this.mat.roofFlat,n.mosque,n.mosque]);oe.position.set(se.mx+se.nx*1.3,Math.min(p,5.5)/2,se.mz+se.nz*1.3),oe.rotation.y=Math.atan2(se.nx,se.nz),oe.castShadow=!0,M.add(oe)}}else if(o&&!S)for(let T=0;T<3;T++){let C=new ue(new Ht(Math.max(.6,2.6-T*.8),Math.max(1,3.4-T*.8),2.2,4),T===2?this.mat.gold:this.mat.white);C.position.set(w[0],p+1.1+T*2.2,w[1]),C.rotation.y=Math.PI/4,C.castShadow=!0,M.add(C)}else if(a&&!S){let T=new ue(new nt(3.2,p+5,3.2),this.mat.white);T.position.set(f[0]+2,(p+5)/2,f[1]+2),T.castShadow=!0,M.add(T);let C=new ue(new Po(2.3,4.5,4),this.mat.roofFlat);C.position.set(f[0]+2,p+7.2,f[1]+2),C.rotation.y=Math.PI/4,M.add(C)}else if(c){let T=this.nearest(w[0],w[1]),C=this.roadEdge(e,T);if(C&&!_){let U=new ue(new nt(Math.min(16,C.L*.5),.5,5),this.mat.navy);U.position.set(C.mx+C.nx*2.5,4.2,C.mz+C.nz*2.5),U.rotation.y=Math.atan2(C.nx,C.nz),U.castShadow=!0,M.add(U);for(let H of[-1,1]){let F=new ue(new Ht(.15,.15,4,8),this.mat.pole),V=C.mx+C.nx*4.6+-C.nz*H*Math.min(7,C.L*.22),B=C.mz+C.nz*4.6+C.nx*H*Math.min(7,C.L*.22);F.position.set(V,2,B),M.add(F)}}let L=new ue(new nt(Math.max(4,m*.25),2,Math.max(4,m*.25)),this.mat.roofFlat);L.position.set(w[0],p+1,w[1]),M.add(L)}if((c||l||d||u)&&!S&&!o&&!a&&!r&&v>500&&it(w[0]|0,w[1]|0,21)<.6){let T=this.nearest(w[0],w[1]),C=this.roadEdge(e,T);if(C){let L=this.M,U=Math.min(1,C.L/14),H=new ue(L.bbPanelGeo,[L.rail,L.rail,L.rail,L.rail,L.billboards[(e.c[0]|0)%6<0?0:Math.abs(e.c[0]|0)%6],L.rail]);H.scale.set(U,.75,1),H.position.set(C.mx-C.nx*2.5,p+2.4,C.mz-C.nz*2.5),H.rotation.y=Math.atan2(C.nx,C.nz),H.userData.shared=!0,M.add(H);for(let F of[-3,3]){let V=new ue(L.bbPostGeo,L.rail);V.scale.set(.6,.55,.6),V.position.set(C.mx-C.nx*2.5+-C.nz*F*U,p+1.2,C.mz-C.nz*2.5+C.nx*F*U),V.userData.shared=!0,M.add(V)}}}if(e.name&&!/^(yes|house|residential)$/i.test(e.name)){let T=this.nearest(w[0],w[1]),C=this.roadEdge(e,T);if(C){let L=Math.min(c?22:16,Math.max(6,C.L*.8)),U=L*(c?.14:.16),H=this.nameTexture(e.name,r?"\u{1F54C}":o?"\u{1F6D5}":a?"\u26EA":h?"\u{1F3EB}":c?"\u{1F6CD}\uFE0F":u?"\u{1F3DB}\uFE0F":""),F=new ue(new nt(L,U,.25),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,H,H]),V=S?Math.min(p+U/2+.4,1.2):p+U/2+.4,B=S?1.2:.3;F.position.set(C.mx+C.nx*B,V,C.mz+C.nz*B),F.rotation.y=Math.atan2(C.nx,C.nz),M.add(F)}}return M}entranceEdge(e){let t=e.c,n=null,s=-1/0;for(let r=0;r<e.p.length;r++){let o=e.p[r],a=e.p[(r+1)%e.p.length],c=Math.hypot(a[0]-o[0],a[1]-o[1]);if(c<18)continue;let l=(o[0]+a[0])/2,h=(o[1]+a[1])/2,u=-(a[1]-o[1])/c,d=(a[0]-o[0])/c;(l-t[0])*u+(h-t[1])*d<0&&(u=-u,d=-d);let f=this.nearest(l+u*14,h+d*14,{skipMinor:!0}),m=f.px!=null?Math.hypot(l+u*14-f.px,h+d*14-f.pz):999,v=Math.min(c,60)-m*.8;v>s&&(s=v,n={a:o,q:a,mx:l,mz:h,L:c,nx:u,nz:d,d:m})}return n&&n.d<70?n:null}roadEdge(e,t){let n=e.c,s=null,r=1/0;for(let u=0;u<e.p.length;u++){let d=e.p[u],f=e.p[(u+1)%e.p.length],m=(d[0]+f[0])/2,v=(d[1]+f[1])/2,g=Math.hypot(f[0]-d[0],f[1]-d[1]);if(g<4)continue;let p=t.px!=null?Math.hypot(m-t.px,v-t.pz):0;p<r&&(r=p,s={a:d,q:f,mx:m,mz:v,L:g})}if(!s)return null;let o=s.q[0]-s.a[0],c=-(s.q[1]-s.a[1]),l=o,h=Math.hypot(c,l)||1;return c/=h,l/=h,(s.mx-n[0])*c+(s.mz-n[1])*l<0&&(c=-c,l=-l),s.nx=c,s.nz=l,s}nameTexture(e,t){let n=t+e;if(this.signCache.has(n))return this.signCache.get(n);let s=document.createElement("canvas");s.width=1024,s.height=160;let r=s.getContext("2d");r.fillStyle="#17283C",r.fillRect(0,0,1024,160),r.fillStyle="#D0B46C",r.fillRect(0,146,1024,14),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle";let o=84;r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;let a=(t?t+"  ":"")+e.toUpperCase();for(;r.measureText(a).width>960&&o>34;)o-=4,r.font=`900 ${o}px Poppins, "Segoe UI", Arial, sans-serif`;r.fillText(a,512,78);let c=new ei(s);c.colorSpace=Tt,c.anisotropy=4;let l=new pt({map:c,emissiveMap:c,emissive:16777215,emissiveIntensity:this.style.nightNow?.8:0,roughness:.6});return this.signCache.set(n,l),this.signMats.push(l),l}buildFuel(e,t,n){let s=this.nearest(e.c[0],e.c[1]);if(s.d>1e8)return;let r=s.h,o=new ft;o.position.set(e.c[0],0,e.c[1]),o.rotation.y=r;let a=(l,h)=>[e.c[0]+l*Math.cos(r)+h*Math.sin(r),e.c[1]-l*Math.sin(r)+h*Math.cos(r)];if(bn("engen")){let h=e.c[0],u=e.c[1],d=r;if(s.px!=null){let v=s.px-h,g=s.pz-u,p=Math.hypot(v,g)||1;d=Math.atan2(v,g);let S=Math.max(0,p-s.w/2-8.5);S>0&&this.nearBuilding(h,u,6)&&(h+=v/p*S,u+=g/p*S)}this.lm.push({id:"engen",x:h,z:u,yaw:d,sx:13,sy:13,sz:13}),o.position.set(h,0,u);let f=Math.cos(d),m=Math.sin(d);for(let[v,g]of[[-4.5,-4.5],[4.5,-4.5],[-4.5,4.5],[4.5,4.5],[-2.2,0],[2.2,0]])n.push({type:"circle",x:h+v*f+g*m,z:u-v*m+g*f,r:g===0?.6:.3})}else{let l=new ue(new nt(14,.6,9),this.mat.white);l.position.y=4.8,l.castShadow=!0,o.add(l);let h=new ue(new nt(14.2,.9,9.2),this.mat.navy);h.position.y=4.1,o.add(h);for(let[u,d]of[[-5,-3],[5,-3],[-5,3],[5,3]]){let f=new ue(new Ht(.2,.2,4,8),this.mat.white);f.position.set(u,2,d),o.add(f);let[m,v]=a(u,d);n.push({type:"circle",x:m,z:v,r:.25})}for(let u of[-2.5,2.5]){let d=new ue(new nt(.9,1.7,.5),this.mat.gold);d.position.set(u,.85,0),o.add(d);let[f,m]=a(u,0);n.push({type:"box",x:f,z:m,hw:.5,hl:.3,h:r})}}let c=new ue(new nt(3,1,.2),[this.mat.navy,this.mat.navy,this.mat.navy,this.mat.navy,this.nameTexture(e.name||"Petrol","\u26FD"),this.mat.navy]);c.position.set(0,bn("engen")?8.2:5.9,0),o.add(c),t.add(o)}spawnAgent(e,t,n){for(let s=0;s<30;s++){let r=Math.floor(Math.random()*this.roads.length),o=this.roads[r];if(o.t==="service"||o.t==="track"||o.len<40)continue;let a=Math.floor(Math.random()*(o.n.length-1)),c=this.nodes[o.n[a]],l=Math.hypot(c[0]-t,c[1]-n);if(!(l<60||l>350))return e.r=r,e.i=a,e.t=Math.random(),e.dir=o.one||Math.random()<.5?1:-1,e.speed=(Cm[o.t]||10)*Am(.8,1),!0}return!1}agentRed(e){let t=this.roads[e.r],n=t.seg[e.i],s=e.dir>0?(1-e.t)*n:e.t*n;if(s>9||s<.5)return!1;let r=this.nodes[t.n[e.dir>0?e.i+1:e.i]],o=performance.now()/1e3,a=this.nodes[t.n[e.i]],c=this.nodes[t.n[e.i+1]],l=(c[0]-a[0])/n*e.dir,h=(c[1]-a[1])/n*e.dir;for(let u of this.tlHeads)if(u.mesh.parent){for(let d of u.heads)if(!(Math.abs(d.nx-r[0])>2||Math.abs(d.nz-r[1])>2)&&!(-(d.ux*l+d.uz*h)<.75))return this.headState(d,o)!=="g"}return!1}advanceAgent(e,t){let n=this.roads[e.r],s=this.nodes,r=e.speed*t;for(;r>0;){let g=n.seg[e.i],p=e.t*g,S=e.dir>0?g-p:p;if(r<S){e.t+=e.dir*r/g,r=0;break}r-=S;let _=e.dir>0?e.i+1:e.i,x=n.n[_],y=[];for(let[T,C]of this.nodeRoads.get(x)||[]){let L=this.roads[T];L.t==="service"||L.t==="track"||(C<L.n.length-1&&!(T===e.r&&L.one===0&&C===e.i&&e.dir<0)&&y.push([T,C,1]),C>0&&!L.one&&!(T===e.r&&C-1===e.i&&e.dir>0)&&y.push([T,C-1,-1]))}let b=y.filter(([T])=>T===e.r),E=Math.random()<.7&&b.length?b:y;if(!E.length){e.dir=-e.dir;break}let[A,M,w]=E[Math.floor(Math.random()*E.length)];return e.r=A,e.i=M,e.dir=w,e.t=w>0?0:1,e.speed=(Cm[A===e.r?n.t:this.roads[A].t]||10)*Am(.8,1),this.advanceAgent(e,r/e.speed)}let o=this.roads[e.r],a=s[o.n[e.i]],c=s[o.n[e.i+1]],l=(c[0]-a[0])/o.seg[e.i],h=(c[1]-a[1])/o.seg[e.i],u=l*e.dir,d=h*e.dir,f=d,m=-u,v=o.one?o.w/4*(Math.random()<.5?1:-1)*0+o.w/4:o.w/4;e.x=a[0]+l*e.t*o.seg[e.i]+f*v,e.z=a[1]+h*e.t*o.seg[e.i]+m*v,e.h=Math.atan2(-u,-d)}startPose(){let[e,t]=this.style.start,n=null;for(let o=0;o<400&&!(n&&n.d<1e8);o+=40)for(let a=0;a<6.3&&!(n&&n.d<1e8);a+=.8){let c=this.nearest(e+Math.cos(a)*o,t+Math.sin(a)*o,{skipMinor:!0});c.d<1e8&&(n=c)}n||(n=this.nearest(e,t));let s=-Math.cos(n.h)*0+Math.cos(n.h),r=-Math.sin(n.h);return{x:n.px-s*n.w/4,z:n.pz-r*n.w/4,h:n.h}}dispose(){for(let e of this.tiles.values())this.disposeTile(e);this.tiles.clear(),this.scene.remove(this.group)}};function qo(i,e,t,n,s,r=n){let o=i.length,a=new Float32Array(o*6),c=new Float32Array(o*4),l=[],h=0;for(let f=0;f<o;f++){let m=i[f],v=i[Math.max(0,f-1)],g=i[Math.min(o-1,f+1)],p=m[0]-v[0],S=m[1]-v[1],_=g[0]-m[0],x=g[1]-m[1],y=Math.hypot(p,S)||1,b=Math.hypot(_,x)||1;p/=y,S/=y,_/=b,x/=b,f===0&&(p=_,S=x),f===o-1&&(_=p,x=S);let E=-(S+x),A=p+_,M=Math.hypot(E,A)||1;E/=M,A/=M;let T=1/Math.max(.5,E*-x+A*_);if(a.set([m[0]+E*e*T,n,m[1]+A*e*T,m[0]+E*t*T,r,m[1]+A*t*T],f*6),f>0&&(h+=Math.hypot(m[0]-v[0],m[1]-v[1])),c.set([0,h*s,1,h*s],f*4),f<o-1){let C=f*2;l.push(C,C+1,C+2,C+1,C+3,C+2)}}let u=new at;if(u.setAttribute("position",new Ge(a,3)),u.setAttribute("uv",new Ge(c,2)),u.setIndex(l),u.computeVertexNormals(),u.attributes.normal.getY(0)<0){let f=u.index.array;for(let m=0;m<f.length;m+=3){let v=f[m+1];f[m+1]=f[m+2],f[m+2]=v}u.computeVertexNormals()}return u}function Uc(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e*3),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),h.attributes.uv&&s.set(h.attributes.uv.array,a*2),r.set(h.attributes.normal.array,a*3);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length,h.dispose()}let l=new at;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("uv",new Ge(s,2)),l.setAttribute("normal",new Ge(r,3)),l.setIndex(new Ge(o,1)),l}function x1(i){let e=0;for(let t=0,n=i.length-1;t<i.length;n=t++)e+=(i[n][0]+i[t][0])*(i[n][1]-i[t][1]);return Math.abs(e/2)}function Fc(i){let e=0,t=0;for(let n of i)e+=n[0],t+=n[1];return[e/i.length,t/i.length]}function ud(i){let e=1/0,t=-1/0,n=1/0,s=-1/0;for(let r of i)e=Math.min(e,r[0]),t=Math.max(t,r[0]),n=Math.min(n,r[1]),s=Math.max(s,r[1]);return[e,n,t,s]}function Yo(i,e,t){let n=!1;for(let s=0,r=t.length-1;s<t.length;r=s++){let o=t[s],a=t[r];o[1]>e!=a[1]>e&&i<(a[0]-o[0])*(e-o[1])/(a[1]-o[1])+o[0]&&(n=!n)}return n}function $r(i){let e=0,t=-1;for(let f=0;f<i.length;f++){let m=i[f],v=i[(f+1)%i.length],g=Math.hypot(v[0]-m[0],v[1]-m[1]);g>t&&(t=g,e=Math.atan2(v[1]-m[1],v[0]-m[0]))}let n=Math.cos(-e),s=Math.sin(-e),r=1/0,o=-1/0,a=1/0,c=-1/0;for(let f of i){let m=f[0]*n-f[1]*s,v=f[0]*s+f[1]*n;r=Math.min(r,m),o=Math.max(o,m),a=Math.min(a,v),c=Math.max(c,v)}let l=(r+o)/2,h=(a+c)/2,u=l*Math.cos(e)-h*Math.sin(e),d=l*Math.sin(e)+h*Math.cos(e);return{x:u,z:d,hw:(o-r)/2,hl:(c-a)/2,h:-e}}var Ko=class i extends ue{constructor(){super(i.Geometry,new kt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;let e=new D,t=new D,n=new Co(16,16),s=new Co(16,16),r=kn,o=i.Geometry,a=new as({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new as({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new ue(o,a),h=[],u=vi.Shader,d=new as({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Re(16777215)},scale:{value:new ce},screenPosition:{value:new D}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bn,transparent:!0,depthWrite:!1}),f=new ue(o,d);this.addElement=function(S){h.push(S)};let m=new ce,v=new ce,g=new vc,p=new dt;this.onBeforeRender=function(S,_,x){S.getCurrentViewport(p);let y=S.getRenderTarget(),b=y!==null?y.texture.type:kn;r!==b&&(n.dispose(),s.dispose(),n.type=s.type=b,r=b);let E=p.w/p.z,A=p.z/2,M=p.w/2,w=16/p.w;if(m.set(w*E,w),g.min.set(p.x,p.y),g.max.set(p.x+(p.z-16),p.y+(p.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(x.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(x.projectionMatrix),v.x=p.x+e.x*A+A-8,v.y=p.y+e.y*M+M-8,g.containsPoint(v))){S.copyFramebufferToTexture(n,v);let T=a.uniforms;T.scale.value=m,T.screenPosition.value=e,S.renderBufferDirect(x,null,o,a,l,null),S.copyFramebufferToTexture(s,v),T=c.uniforms,T.scale.value=m,T.screenPosition.value=e,S.renderBufferDirect(x,null,o,c,l,null);let C=-e.x*2,L=-e.y*2;for(let U=0,H=h.length;U<H;U++){let F=h[U],V=d.uniforms;V.color.value.copy(F.color),V.map.value=F.texture,V.screenPosition.value.x=e.x+C*F.distance,V.screenPosition.value.y=e.y+L*F.distance,w=F.size/p.w;let B=p.w/p.z;V.scale.value.set(w*B,w),d.uniformsNeedUpdate=!0,S.renderBufferDirect(x,null,o,d,f,null)}}},this.dispose=function(){a.dispose(),c.dispose(),d.dispose(),n.dispose(),s.dispose();for(let S=0,_=h.length;S<_;S++)h[S].texture.dispose()}}},vi=class{constructor(e,t=1,n=0,s=new Re(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}};vi.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};Ko.Geometry=function(){let i=new at,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Os(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new ss(t,3,0,!1)),i.setAttribute("uv",new ss(t,2,3,!1)),i}();var zc=(i,e)=>i+Math.random()*(e-i),v1=new Fr,dd={};function Xt(i,{mirror:e=!0,srgb:t=!0}={}){if(dd[i])return dd[i];let n=v1.load(`tex/${i}.webp`);return n.wrapS=n.wrapT=e?Us:Ni,t&&(n.colorSpace=Tt),n.anisotropy=8,dd[i]=n,n}var zt=i=>new pt(i);function Jr(i,e,t,n={}){let s=Xt(i,{mirror:!1}),r=e*t,o=new Wt(r,e);o.translate(0,e/2-(n.sink||0),0);let a=zt({map:s,alphaTest:.45,side:Lt,roughness:1,metalness:0}),c=new Wt(r,e);return c.translate(0,e/2-(n.sink||0),0),c.rotateY(Math.PI/2),[{geometry:o,material:a},{geometry:c,material:a}]}function fd(i,e,t,n){let s=i.attributes.uv,r=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let o=0;o<6;o++)for(let a=0;a<4;a++){let c=o*4+a;s.setXY(c,s.getX(c)*r[o][0],s.getY(c)*r[o][1])}s.needsUpdate=!0}function Im(i,e){let t={scene:i,worlds:{},current:null,road:null},n=new Go;n.scale.setScalar(2e4),i.add(n);let s=new Br(16777215,2.2);s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-22,s.shadow.camera.right=22,s.shadow.camera.top=30,s.shadow.camera.bottom=-30,s.shadow.camera.near=1,s.shadow.camera.far=160,s.shadow.bias=-8e-4,s.shadow.normalBias=.02,i.add(s),i.add(s.target);let r=new mc(12574719,4876842,.5);i.add(r);let o=new Pr(e);t.sky=n,t.sun=s,t.hemi=r;let a=zt({roughness:1,metalness:0}),c=new ue(new Wt(1600,1600),a);c.rotation.x=-Math.PI/2,c.receiveShadow=!0,i.add(c);let l=new kt({transparent:!0,alphaTest:.2,side:an,fog:!1,depthWrite:!1}),h=new ue(new Ht(560,560,150,48,1,!0),l);h.renderOrder=-1,i.add(h);let u=Xt("asphalt");u.repeat.set(2,1);let d=Xt("asphalt_n",{srgb:!1});d.repeat.set(2,1);let f=Xt("asphalt_r",{srgb:!1});f.repeat.set(2,1);let m=[1,2,3,4,5,6].map(ie=>Xt("billboard"+ie,{mirror:!1})),v=Xt("banner",{mirror:!1}),g=Xt("shopsign",{mirror:!1}),p={road:zt({map:u,normalMap:d,normalScale:new ce(.45,.45),roughnessMap:f,roughness:1,metalness:0,envMapIntensity:.6}),shoulder:zt({roughness:1}),line:zt({color:16053492,roughness:.7}),rail:zt({color:12106946,roughness:.45,metalness:.8}),railGeo:new nt(.08,.32,4.1),postGeo:new nt(.1,.75,.1),pole:zt({color:16734774,roughness:.7}),poleGeo:new nt(.12,1.4,.12),billboards:m.map(ie=>zt({map:ie,emissiveMap:ie,emissive:16777215,emissiveIntensity:0,roughness:.6})),bbPanelGeo:new nt(12,6,.25),bbPostGeo:new Ht(.18,.22,4.5,8),sign:zt({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:0,roughness:.5}),gantryPostGeo:new nt(.5,7.5,.5),gantryBeamGeo:new nt(Yt+3,.5,.5),gantrySignGeo:new nt(12,3,.2),lamp:zt({color:10133670,roughness:.4,metalness:.8}),lampGlow:zt({color:16773824,emissive:16769184,emissiveIntensity:0}),banner:zt({map:v,emissiveMap:v,emissive:16777215,emissiveIntensity:0,side:Lt,roughness:.8}),bannerGeo:(()=>{let ie=new Wt(.7,2.1);return ie.translate(.65,4.4,0),ie})(),pool:new kt({color:16766346,transparent:!0,opacity:0,blending:Bn,depthWrite:!1,fog:!1})};p.poolGeo=new ks(5.5,20),p.poolGeo.rotateX(-Math.PI/2),p.poolGeo.translate(2,.06,0);{let ie=document.createElement("canvas");ie.width=128,ie.height=192;let K=ie.getContext("2d");K.clearRect(0,0,128,192);for(let R=0;R<3;R++){let O=150-R*52;K.fillStyle=R===2?"#fff6c8":"#ffd64a",K.beginPath(),K.moveTo(12,O),K.lineTo(64,O-42),K.lineTo(116,O),K.lineTo(116,O-22),K.lineTo(64,O-64),K.lineTo(12,O-22),K.closePath(),K.fill()}let I=new ei(ie);I.colorSpace=Tt,p.pad=new kt({map:I,transparent:!0,depthWrite:!1,fog:!1,opacity:.95}),p.padGeo=new Wt(3.2,4.8),p.padGeo.rotateX(-Math.PI/2)}{let R=[[-1.7,0,0],[1.7,0,0],[1.7,1.1,-6],[-1.7,1.1,-6],[-1.7,0,-6],[1.7,0,-6]],O=[],Y=(j,Te,xe)=>{for(let Ee of[j,Te,xe])O.push(...R[Ee])};Y(0,2,1),Y(0,3,2),Y(0,4,3),Y(1,2,5),Y(3,4,5),Y(3,5,2);let Q=new at;Q.setAttribute("position",new ct(O,3)),Q.computeVertexNormals(),p.rampGeo=Q,p.ramp=new pt({color:16106776,roughness:.5,metalness:.2,side:Lt})}{let ie=document.createElement("canvas");ie.width=ie.height=128;let K=ie.getContext("2d"),I=K.createRadialGradient(64,64,0,64,64,64);I.addColorStop(0,"rgba(255,255,255,1)"),I.addColorStop(1,"rgba(255,255,255,0)"),K.fillStyle=I,K.fillRect(0,0,128,128),p.pool.map=new ei(ie),p.pool.alphaMap=p.pool.map}{let ie=new Ht(.08,.12,7,6);ie.translate(0,3.5,0);let K=new nt(2,.1,.1);K.translate(1,6.95,0),p.lampGeo=_1([ie,K]),p.lampGlowGeo=new nt(.6,.15,.3),p.lampGlowGeo.translate(1.8,6.9,0)}t.M=p;let _=["facade_glass","facade_brick","facade_shops"].map(ie=>Xt(ie,{mirror:!1})).map(ie=>zt({map:ie,emissiveMap:ie,emissive:16777215,emissiveIntensity:0,roughness:.5,metalness:.1})),x=zt({color:4869717,roughness:1});function y(ie){let K=ie?18:zc(10,18),I=ie?9:zc(9,42),R=ie?12:zc(10,16),O=new ft;if(ie){let Y=new ue(new nt(K,5,R),[_[2],_[2],x,x,_[2],_[2]]);fd(Y.geometry,K/9,5/9,R/9),Y.position.y=2.5,O.add(Y);let Q=new ue(new nt(K,1.3,R+.2),[x,x,x,x,p.sign,x]);Q.position.y=5.65,O.add(Q);let j=new ue(new nt(K,2.7,R),[_[1],_[1],x,x,_[1],_[1]]);fd(j.geometry,K/12,2.7/12,R/12),j.position.y=7.65,O.add(j)}else{let Y=_[Math.random()<.5?0:1],Q=Y===_[0]?10:12,j=new ue(new nt(K,I,R),[Y,Y,x,x,Y,Y]);if(fd(j.geometry,K/Q,I/Q,R/Q),j.position.y=I/2,O.add(j),I>20){let Te=new ue(new nt(K*.5,2,R*.5),x);Te.position.y=I+1,O.add(Te)}}return{group:O,w:K,h:I,d:R,gap:zc(0,4)}}let b=Xt("clouds",{mirror:!0});b.repeat.set(3,3);let E=new kt({map:b,transparent:!0,depthWrite:!1,fog:!1,opacity:.95,side:Lt}),A=new ue(new Wt(3600,3600),E);A.rotation.x=-Math.PI/2,A.position.y=330,A.renderOrder=-2,i.add(A),t.clouds=A;let M=new Ko,w=Xt("lensflare0",{mirror:!1}),T=Xt("lensflare3",{mirror:!1});M.addElement(new vi(w,420,0,new Re(16773840))),M.addElement(new vi(T,60,.6)),M.addElement(new vi(T,70,.7)),M.addElement(new vi(T,120,.9)),M.addElement(new vi(T,70,1));let C=new Ft;C.add(M),i.add(C),t.flare=C;let L=zt({color:5915440,roughness:1}),U=ie=>zt({map:Xt(ie,{mirror:!1}),alphaTest:.5,side:Lt,roughness:.9,metalness:0}),H=(ie,K)=>new Wt(ie,K),F=new Ht(.22,.42,1,7);F.translate(0,.5,0);let V={trunk:{geometry:F,material:L,h:3.4},cards:{geometry:H(5.6,3.65),material:U("leaf_oak"),n:9,rx:3.6,ry:2.4,yc:5.6,tilt:.55,flat:!1},obstacle:.5},B={trunk:{geometry:F,material:L,h:6},cards:{geometry:H(4.2,2.8),material:U("leaf_pine"),n:11,rx:2.6,ry:4.6,yc:7.6,tilt:.35,flat:!0,cone:!0},obstacle:.45},ne=H(1.1,.75);ne.translate(0,.33,0);let se=zt({map:Xt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Lt,roughness:1,metalness:0}),J=zt({map:Xt("grass_tuft",{mirror:!1}),alphaTest:.5,side:Lt,roughness:1,metalness:0,color:13217914});t.treeStyles={oakTree:V,pineTree:B};let oe=Jr("tree_oak",11,768/670,{sink:.2}),_e=Jr("tree_pine",14,476/1045),q=Jr("cactus",6,362/1059),ae=Jr("tree_snowpine",12,599/1084),ye={geometry:new uc(1.2,0),material:zt({color:11043420,roughness:1}),y:.5,shadow:!0},de={geometry:new ni(1.5,8,6),material:zt({color:15791615,roughness:1}),y:.2};t.worlds={country:{ground:"grass",tile:7,shoulder:"sand",shoulderTint:9075290,backdrop:"hills_green",backdropH:70,guardrail:!0,scatter:[{tree:V,perChunk:12,lat:[12,60],scale:[.8,1.35]},{tree:B,perChunk:10,lat:[13,75],scale:[.8,1.3]},{parts:oe,perChunk:10,lat:[60,140],scale:[.9,1.4],billboard:!0},{parts:_e,perChunk:10,lat:[60,160],scale:[.9,1.4],billboard:!0},{grass:{geometry:ne,material:se},perChunk:220,lat:[10.2,26],scale:[.6,1.2]}],fog:{day:13229292,sunset:15316106,night:659230},fogFar:430,offroadGrip:.6},desert:{ground:"sand",tile:8,shoulder:"sand",shoulderTint:16777215,backdrop:"mesas_desert",backdropH:46,guardrail:!0,scatter:[{parts:q,perChunk:12,lat:[11,70],scale:[.8,1.6],billboard:!0,obstacle:.4},{parts:[ye],perChunk:16,lat:[9,90],scale:[.5,2.4],obstacle:1},{grass:{geometry:ne,material:J},perChunk:90,lat:[10.2,30],scale:[.5,1]}],fog:{day:15128253,sunset:15771242,night:1183522},fogFar:470,offroadGrip:.5},snow:{ground:"snow",tile:6,shoulder:"snow",shoulderTint:16777215,backdrop:"mountains_snow",backdropH:110,poles:!0,scatter:[{parts:ae,perChunk:18,lat:[11,80],scale:[.7,1.5],billboard:!0,obstacle:.5},{parts:[de],perChunk:12,lat:[8,30],scale:[.6,1.8]},{tree:B,perChunk:6,lat:[12,50],scale:[.8,1.2]}],fog:{day:14411506,sunset:15776144,night:857128},fogFar:340,offroadGrip:.35},city:{ground:"pavement",tile:4,shoulder:"pavement",shoulderTint:16777215,backdrop:"skyline_city",backdropH:90,buildings:!0,makeBuilding:y,scatter:[],fog:{day:13622248,sunset:15247480,night:724506},fogFar:400,offroadGrip:.9,fMats:_}};let Ne=Xt("house_front",{mirror:!0}),ke=Xt("precast_wall",{mirror:!0}),Fe=Xt("roof_tiles",{mirror:!0}),Ze=zt({map:Ne,roughness:.9,metalness:0}),te=(ie,K=.85)=>{let I=Xt(ie,{mirror:!0});return zt({map:I,emissiveMap:I,emissive:16777215,emissiveIntensity:0,roughness:K,metalness:0})},fe={brick:te("house_brick"),arch:te("house_arch"),modern:te("house_modern",.6),white:te("house_white"),blue:te("house_blue"),grey:te("house_grey",.6),peach:te("house_peach"),flats:te("flats_block"),shops:te("shops_row"),mall:te("mall_facade",.6),mosque:te("mosque_wall")},N=zt({map:Xt("palisade",{mirror:!0}),alphaTest:.5,side:Lt,roughness:.6,metalness:.6}),Le=Jr("tree_jacaranda",9,768/544,{sink:.1}),he=Jr("tree_palm",11,364/991),ve=zt({map:ke,roughness:1,metalness:0}),pe=zt({map:Fe,roughness:.9,metalness:0});Fe.repeat.set(2,2),t.worlds.lenasia={ground:"grass",tile:7,groundTint:12037496,shoulder:"sand",shoulderTint:16777215,backdrop:"hills_green",backdropH:38,map:"lenasia.json",fog:{day:14081510,sunset:15316106,night:659230},fogFar:520,offroadGrip:.55,scatter:[],tex:Xt,fMats:_,fMatsHouse:Ze,wallMat:ve,roofTileMat:pe,makeBuilding:y,treeStyles:null,start:[-3567,-4324],showroomReal:[3852,-967],showroomAt:null,lenMats:fe,palisadeMat:N,jacaranda:Le,palm:he};for(let ie in t.worlds)t.worlds[ie].mats=p;return t.worlds.lenasia.treeStyles={oakTree:V,pineTree:B},t.mapData={},t.setWorld=ie=>{let K=t.worlds[ie];t.current=K,t.currentName=ie;let I=Xt(K.ground);I.repeat.set(1600/K.tile,1600/K.tile),a.map=I,a.needsUpdate=!0;let R=Xt(K.shoulder);p.shoulder.map=R,p.shoulder.color.setHex(K.shoulderTint),p.shoulder.needsUpdate=!0;let O=Xt(K.backdrop,{mirror:!0});if(O.repeat.set(4,1),l.map=O,l.needsUpdate=!0,h.scale.y=K.backdropH/150,h.position.y=K.backdropH/2-2,a.color.setHex(K.groundTint||16777215),t.road&&t.road.dispose(),t.road=null,K.map){t.loading=!0;let Y=Q=>{let j=new Oc(i,K,Q),Te=j.startPose(),xe=j.nearest(Te.x,Te.z,{skipMinor:!0}),Ee=-Math.sin(xe.h),qe=-Math.cos(xe.h),me=qe,Ue=-Ee;if(K.showroomReal){let[Ve,Xe]=K.showroomReal,De=j.nearest(Ve,Xe),ht=De.px!=null?Math.atan2(De.px-Ve,De.pz-Xe):0;K.showroomAt=[Ve,Xe,ht]}else K.showroomAt=[xe.px+Ee*70+me*(xe.w/2+12),xe.pz+qe*70+Ue*(xe.w/2+12),xe.h+Math.PI/2];t.road=j,t.loading=!1};t.mapData[K.map]?Y(t.mapData[K.map]):Promise.all([fetch(K.map).then(Q=>Q.json()),fetch(K.map.replace(".json","-bld.json")).then(Q=>Q.ok?Q.json():null).catch(()=>null)]).then(([Q,j])=>{j&&(Q.gb=j),t.mapData[K.map]=Q,t.current===K&&Y(Q)})}else t.road=new Ic(i,K)},t.setTime=ie=>{let K=t.current,I=ie==="night",R=ie==="rain",O=n.material.uniforms,Y,Q;ie==="day"?(Y=48,Q=160,O.turbidity.value=2.2,O.rayleigh.value=1,O.mieCoefficient.value=.004,O.mieDirectionalG.value=.8):R?(Y=35,Q=160,O.turbidity.value=20,O.rayleigh.value=.2,O.mieCoefficient.value=.1,O.mieDirectionalG.value=.999):ie==="sunset"?(Y=4,Q=235,O.turbidity.value=10,O.rayleigh.value=3,O.mieCoefficient.value=.006,O.mieDirectionalG.value=.85):(Y=-4,Q=180,O.turbidity.value=2,O.rayleigh.value=.3,O.mieCoefficient.value=.002,O.mieDirectionalG.value=.7);let j=Bo.degToRad(90-Y),Te=Bo.degToRad(Q),xe=new D().setFromSphericalCoords(1,j,Te);O.sunPosition.value.copy(xe),t.envRT&&t.envRT.dispose();let Ee=new Lr;Ee.add(n),t.envRT=o.fromScene(Ee,0,.1,200),i.add(n),i.environment=t.envRT.texture,i.background=null,ie==="day"?(s.color.setHex(16774368),s.intensity=4.2,r.color.setHex(12572927),r.groundColor.setHex(7041116),r.intensity=1,i.environmentIntensity=1):R?(s.color.setHex(13620960),s.intensity=1.1,r.color.setHex(10135224),r.groundColor.setHex(3817284),r.intensity=1.6,i.environmentIntensity=.9):ie==="sunset"?(s.color.setHex(16754784),s.intensity=3.2,r.color.setHex(15906186),r.groundColor.setHex(4865846),r.intensity=.8,i.environmentIntensity=1):(s.color.setHex(9412824),s.intensity=1.3,r.color.setHex(3952256),r.groundColor.setHex(1315864),r.intensity=1.5,i.environmentIntensity=.7),t.sunDir=xe.clone().normalize(),I&&t.sunDir.set(.3,.8,-.2).normalize(),i.fog=new Qa(R?9345190:K.fog[ie],R?20:40,K.fogFar*(I?.7:R?.55:1)),l.color.setHex(I?2765648:ie==="sunset"?16765096:R?8226708:16777215),p.road.roughness=R?.3:1,p.road.envMapIntensity=R?1.6:.6,p.road.color.setHex(R?9079434:16777215),p.pool.opacity=I?.5:0,t.rain=R;for(let qe of p.billboards)qe.emissiveIntensity=I?.9:0;if(p.banner.emissiveIntensity=I?.6:0,p.sign.emissiveIntensity=I?.9:0,_.forEach(qe=>{qe.emissiveIntensity=I?.55:0,qe.emissive.setHex(I?16769968:16777215)}),p.lampGlow.emissiveIntensity=I?5:0,K.nightNow=I,t.road&&t.road.signMats)for(let qe of t.road.signMats)qe.emissiveIntensity=I?.8:0;for(let qe in fe)fe[qe].emissiveIntensity=I?.45:0;E.color.setHex(I?3818080:ie==="sunset"?16763296:R?7305092:16777215),E.opacity=I?.6:R?1:.95,C.visible=!I&&!R,t.night=I},t.follow=(ie,K,I,R)=>{let O=t.current;c.position.set(ie,0,K),a.map&&a.map.offset.set(ie/O.tile%2,-K/O.tile%2),h.position.x=ie,h.position.z=K,A.position.x=ie,A.position.z=K,b.offset.set(ie/1200%2+performance.now()*4e-6,-K/1200%2),C.position.set(ie+t.sunDir.x*900,t.sunDir.y*900,K+t.sunDir.z*900),s.target.position.set(ie+I*8,0,K+R*8),s.position.copy(t.sunDir).multiplyScalar(80).add(s.target.position)},t}function _1(i){let e=0,t=0;for(let h of i)e+=h.attributes.position.count,t+=h.index.count;let n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=new Uint32Array(t),a=0,c=0;for(let h of i){n.set(h.attributes.position.array,a*3),s.set(h.attributes.normal.array,a*3),r.set(h.attributes.uv.array,a*2);let u=h.index.array;for(let d=0;d<u.length;d++)o[c+d]=u[d]+a;a+=h.attributes.position.count,c+=u.length}let l=new at;return l.setAttribute("position",new Ge(n,3)),l.setAttribute("normal",new Ge(s,3)),l.setAttribute("uv",new Ge(r,2)),l.setIndex(new Ge(o,1)),l}var Zo=(i,e,t)=>Math.max(e,Math.min(t,i)),Ys=class{constructor(e){this.spec=e,this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.yawRate=0,this.throttle=0,this.brake=0,this.steer=0,this.offRoad=!1,this.surfaceGrip=1,this.steerAngle=0,this.vf=0,this.vl=0,this.halfW=e.w/2,this.halfL=e.len/2,this.mass=e.len>5?2.2:1.6}fwd(){return[-Math.sin(this.h),-Math.cos(this.h)]}right(){return[Math.cos(this.h),-Math.sin(this.h)]}speed(){return Math.hypot(this.vx,this.vz)}circles(){let[e,t]=this.fwd(),n=this.halfL*.55,s=this.halfW+.08;return[[this.x+e*n,this.z+t*n,s],[this.x-e*n,this.z-t*n,s]]}update(e,t,n,s,r){let[o,a]=this.fwd(),[c,l]=this.right(),h=this.vx*o+this.vz*a,u=this.vx*c+this.vz*l,d=t*(r?1.3:1)*(this.offRoad?.25:1);this.throttle>0&&(h+=this.throttle*n*(r?2:1)*Math.max(.12,1-.7*Zo(h/d,0,1))*e),this.brake>0&&(h>.5?h-=this.brake*16*e:h=Math.max(h-this.brake*4*e,-4)),h-=h*(this.offRoad?1.4:.12)*e,h-=.0018*h*Math.abs(h)*e,h>d&&(h+=(d-h)*Math.min(1,2*e)),Math.abs(h)<.05&&this.throttle===0&&this.brake===0&&(h=0);let f=Math.abs(h),m=s*.09,v=-this.steer*m*Zo(f/6,0,1)*(1/(1+f/28))*Math.sign(h||1);this.yawRate+=(v-this.yawRate)*Math.min(1,8*e),this.h+=this.yawRate*e,this.steerAngle+=(this.steer*.42-this.steerAngle)*Math.min(1,10*e);let g=(this.offRoad?2.2:7.5)*this.surfaceGrip;u-=u*Math.min(1,g*e);let p=this.yawRate*f*.08*(this.offRoad?2.5:1);u+=p*e,u=Zo(u,-12,12);let[S,_]=this.fwd(),[x,y]=this.right();this.vx=S*h+x*u,this.vz=_*h+y*u,this.x+=this.vx*e,this.z+=this.vz*e,this.vf=h,this.vl=u}};function Bc(i,e,t=.35){let n=0,s=i.circles(),r=e.circles();for(let[o,a,c]of s)for(let[l,h,u]of r){let d=l-o,f=h-a,m=Math.hypot(d,f),v=c+u;if(m>=v||m<1e-4)continue;let g=d/m,p=f/m,S=v-m,_=i.mass,x=e.mass,y=_+x;i.x-=g*S*(x/y),i.z-=p*S*(x/y),e.x+=g*S*(_/y),e.z+=p*S*(_/y);let b=e.vx-i.vx,E=e.vz-i.vz,A=b*g+E*p;if(A<0){let M=-(1+t)*A/(1/_+1/x);i.vx-=M*g/_,i.vz-=M*p/_,e.vx+=M*g/x,e.vz+=M*p/x;let[w,T]=i.right(),C=g*w+p*T;i.yawRate+=C*Math.min(2,-A*.08),e.yawRate-=C*Math.min(2,-A*.08),n=Math.max(n,-A)}}return n}function Pm(i,e,t,n,s=.25){let r=0;for(let[o,a,c]of i.circles()){let l=o-e,h=a-t,u=Math.hypot(l,h),d=c+n;if(u>=d||u<1e-4)continue;let f=l/u,m=h/u,v=d-u;i.x+=f*v,i.z+=m*v;let g=i.vx*f+i.vz*m;g<0&&(i.vx-=(1+s)*g*f,i.vz-=(1+s)*g*m,r=Math.max(r,-g),i.yawRate+=(Math.random()-.5)*Math.min(3,-g*.15))}return r}function Lm(i,e,t,n,s,r,o=.2){let a=0,c=Math.cos(r),l=Math.sin(r);for(let[h,u,d]of i.circles()){let f=h-e,m=u-t,v=f*c-m*l,g=-f*l-m*c,p=Zo(v,-n,n),S=Zo(g,-s,s),_=v-p,x=g-S,y=Math.hypot(_,x),b,E,A;if(y>1e-4){if(y>=d)continue;b=_/y,E=x/y,A=d-y}else{let C=n-Math.abs(v),L=s-Math.abs(g);C<L?(b=Math.sign(v)||1,E=0,A=C+d):(b=0,E=Math.sign(g)||1,A=L+d)}let M=b*c-E*l,w=-b*l-E*c;i.x+=M*A,i.z+=w*A;let T=i.vx*M+i.vz*w;T<0&&(i.vx-=(1+o)*T*M,i.vz-=(1+o)*T*w,a=Math.max(a,-T))}return a}var $o=(i,e,t)=>Math.max(e,Math.min(t,i)),Ke={ctx:null,on:!0,engine:null,wind:null,gear:0,shiftT:0,rpm:.2,rain:!1,init(){if(this.ctx)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;let e=this.ctx=new i,t=this.master=e.createGain();t.gain.value=0,t.connect(e.destination);let n=e.createGain();n.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=500,s.Q.value=2.5;let r=e.createOscillator();r.type="sawtooth",r.frequency.value=60;let o=e.createOscillator();o.type="sawtooth",o.frequency.value=61;let a=e.createGain();a.gain.value=.5;let c=e.createOscillator();c.type="square",c.frequency.value=30;let l=e.createGain();l.gain.value=.3;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=180,h.Q.value=1.2;let u=e.createGain();u.gain.value=.5,r.connect(s),o.connect(a),a.connect(s),c.connect(l),l.connect(s),s.connect(n),r.connect(h),h.connect(u),u.connect(n),n.connect(t),r.start(),c.start(),o.start(),this.engine={o1:r,o2:c,o3:o,lp:s,eg:n,ex:h};let d=e.createBuffer(1,e.sampleRate*2,e.sampleRate),f=d.getChannelData(0);for(let v=0;v<f.length;v++)f[v]=Math.random()*2-1;let m=(v,g,p)=>{let S=e.createBufferSource();S.buffer=d,S.loop=!0;let _=e.createBiquadFilter();_.type=v,_.frequency.value=g,p&&(_.Q.value=p);let x=e.createGain();return x.gain.value=0,S.connect(_),_.connect(x),x.connect(t),S.start(),{g:x,f:_}};this.wind={...m("lowpass",600),buf:d},this.squeal=m("bandpass",1900,6),this.gravel=m("lowpass",900),this.rainN=m("highpass",2600),this.setOn(this.on)},setOn(i){this.on=i,this.master&&(this.master.gain.value=i?.8:0)},resume(){this.ctx&&this.ctx.state==="suspended"&&!this.paused&&this.ctx.resume()},pause(){this.paused=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()},unpause(){this.paused=!1,this.resume()},quiet(){this.engine&&(this.engine.eg.gain.value=0,this.wind.g.gain.value=0,this.squeal.g.gain.value=0,this.gravel.g.gain.value=0,this.rpm=0)},update(i,e,t,n,s=0,r=!1,o=.016){if(!this.engine)return;let a=6,c=e/a,l=Math.min(a-1,Math.floor(i/c));l!==this.gear&&(this.shiftT=.14,this.gear=l),this.shiftT=Math.max(0,this.shiftT-o);let h=$o((i-l*c)/c,0,1),u=i<.5?t?.45:.15:.25+h*.7+(t?.05:0);this.rpm+=(u-this.rpm)*Math.min(1,(t?6:3)*o);let d=this.shiftT>0,f=d?this.rpm*.75:this.rpm,m=42+f*125+l*8+(n?35:0),v=(S,_,x)=>{S.value+=(_-S.value)*x};v(this.engine.o1.frequency,m,.3),v(this.engine.o3.frequency,m*1.012,.3),v(this.engine.o2.frequency,m/2,.3),v(this.engine.ex.frequency,120+f*500,.2),v(this.engine.lp.frequency,260+f*1500+(t?350:0),.15),v(this.engine.eg.gain,(t?.17:.07+f*.04)*(d?.55:1),.15);let g=Math.pow($o(i/60,0,1),2);v(this.wind.g.gain,g*.12,.08);let p=r?0:$o((Math.abs(s)-2.2)/5,0,1)*$o(i/12,0,1);v(this.squeal.g.gain,p*.16,.2),v(this.squeal.f.frequency,1700+p*500,.1),v(this.gravel.g.gain,r?$o(i/15,0,1)*.2:0,.15),v(this.rainN.g.gain,this.rain?.045:0,.05)},horn(i=1){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime;for(let t of[420*i,525*i]){let n=this.ctx.createOscillator();n.type="square",n.frequency.value=t;let s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=1200;let r=this.ctx.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(.18,e+.03),r.gain.setValueAtTime(.18,e+.45),r.gain.exponentialRampToValueAtTime(1e-4,e+.6),n.connect(s),s.connect(r),r.connect(this.master),n.start(e),n.stop(e+.65)}},bump(i){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.wind.buf;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=250+i*400;let s=this.ctx.createGain();if(s.gain.setValueAtTime(.55*i,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.22+i*.2),t.connect(n),n.connect(s),s.connect(this.master),t.start(e),t.stop(e+.5),i>.4){let r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(900,e),r.frequency.exponentialRampToValueAtTime(220,e+.15);let o=this.ctx.createGain();o.gain.setValueAtTime(.25*i,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.2),r.connect(o),o.connect(this.master),r.start(e),r.stop(e+.22)}},ping(i=0){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=880*Math.pow(2,Math.min(12,i)/12),n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(t*1.5,e+.08);let s=this.ctx.createGain();s.gain.setValueAtTime(1e-4,e),s.gain.exponentialRampToValueAtTime(.22,e+.01),s.gain.exponentialRampToValueAtTime(1e-4,e+.22),n.connect(s),s.connect(this.master),n.start(e),n.stop(e+.25)},fanfare(i=!1){if(!this.ctx||!this.on)return;let e=this.ctx.currentTime,t=i?[523,659,784,1047]:[659,784,1047];t.forEach((n,s)=>{let r=this.ctx.createOscillator();r.type="triangle",r.frequency.value=n;let o=this.ctx.createGain(),a=e+s*.11;o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(.25,a+.02),o.gain.exponentialRampToValueAtTime(1e-4,a+(s===t.length-1?.6:.25)),r.connect(o),o.connect(this.master),r.start(a),r.stop(a+.7)})},click(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="highpass",t.frequency.value=2500;let n=this.ctx.createGain();n.gain.setValueAtTime(.3,i),n.gain.exponentialRampToValueAtTime(1e-4,i+.05),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+.06)},whoosh(){if(!this.ctx||!this.on)return;let i=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.wind.buf;let t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.setValueAtTime(400,i),t.frequency.exponentialRampToValueAtTime(3e3,i+.6),t.Q.value=1.5;let n=this.ctx.createGain();n.gain.setValueAtTime(1e-4,i),n.gain.exponentialRampToValueAtTime(.3,i+.15),n.gain.exponentialRampToValueAtTime(1e-4,i+.9),e.connect(t),t.connect(n),n.connect(this.master),e.start(i),e.stop(i+1)}};var Bt={on:!0,lastT:0,lastText:"",can(i){try{if(window.Android&&window.Android.canSpeak)return window.Android.canSpeak(i||"en")}catch(e){}return!!window.speechSynthesis},say(i,e){let t=e||{};if(!this.on||!i)return!1;let n=performance.now();if(t.min&&n-this.lastT<t.min||t.once&&this.lastText===i)return!1;this.lastT=n,this.lastText=i;try{if(window.Android&&window.Android.speak)return window.Android.speak(i,t.lang||"en");if(window.speechSynthesis){let s=new SpeechSynthesisUtterance(i);return s.lang=t.lang==="ar"?"ar-SA":"en-GB",s.rate=.95,s.pitch=1.05,speechSynthesis.cancel(),speechSynthesis.speak(s),!0}}catch(s){}return!1},stop(){try{window.Android&&window.Android.stopSpeaking?window.Android.stopSpeaking():window.speechSynthesis&&speechSynthesis.cancel()}catch(i){}}},Dm=["Red","Blue","Yellow","Green","White","Black","Orange","Purple","Turquoise"];function Nm(i){if(!i)return null;if(i.kind==="goto"||i.kind==="deliver"){let s=(i.kind==="deliver"?"Recliner":i.text.replace(/^Drive to /,"")).replace(/^(the|al|a) /i,"").split(/\s+/)[0],r=s[0].toUpperCase();return/[A-Z]/.test(r)?{L:r,word:s}:null}let t={stars:"Stars",km:"Drive",speed:"Fast",clean:"Careful",boost:"Boost",horn:"Horn",pass:"Pass"}[i.kind];return t?{L:t[0],word:t}:null}var Um=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty"];var kc=class{constructor(e,t=1400){this.n=t,this.box={w:60,h:30,d:60};let n=new Float32Array(t*3*2);this.off=new Float32Array(t*3);for(let r=0;r<t;r++)this.off[r*3]=Math.random()*this.box.w-this.box.w/2,this.off[r*3+1]=Math.random()*this.box.h,this.off[r*3+2]=Math.random()*this.box.d-this.box.d/2;this.geo=new at,this.geo.setAttribute("position",new Ge(n,3));let s=new Bs({color:13623536,transparent:!0,opacity:.35,fog:!0});this.mesh=new Nr(this.geo,s),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh),this.t=0}set(e){this.mesh.visible=e}update(e,t,n,s,r){if(!this.mesh.visible)return;this.t+=e;let o=this.geo.attributes.position.array,{w:a,h:c,d:l}=this.box,h=28,u=-s*.05,d=-r*.05;for(let f=0;f<this.n;f++){let m=this.off[f*3],v=this.off[f*3+2],g=((this.off[f*3+1]-this.t*h)%c+c)%c,p=t+m,S=n+v;o[f*6]=p,o[f*6+1]=g,o[f*6+2]=S,o[f*6+3]=p+u,o[f*6+4]=g+1.1,o[f*6+5]=S+d}this.geo.attributes.position.needsUpdate=!0}},Hc=class{constructor(e,t=320){this.max=t,this.head=0;let n=new Float32Array(t*4*3),s=new Float32Array(t*4),r=new Uint16Array(t*6);for(let a=0;a<t;a++){let c=a*4;r.set([c,c+1,c+2,c,c+2,c+3],a*6)}this.geo=new at,this.geo.setAttribute("position",new Ge(n,3)),this.geo.setAttribute("aA",new Ge(s,1)),this.geo.setIndex(new Ge(r,1));let o=new Ot({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,uniforms:{},vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.05, 0.05, 0.05, vA * 0.55); }"});this.mesh=new ue(this.geo,o),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh),this.last=[null,null]}clear(){this.geo.attributes.aA.array.fill(0),this.geo.attributes.aA.needsUpdate=!0,this.last=[null,null]}update(e,t,n,s,r=.1){for(let o=0;o<2;o++){let a=t[o];if(e<=0){this.last[o]=null;continue}let c=this.last[o];if(!(c&&Math.hypot(a[0]-c[0],a[1]-c[1])<.35)){if(c){let l=this.head;this.head=(this.head+1)%this.max;let h=this.geo.attributes.position.array,u=this.geo.attributes.aA.array,d=.13;h.set([c[0]-n*d,r,c[1]-s*d,c[0]+n*d,r,c[1]+s*d,a[0]+n*d,r,a[1]+s*d,a[0]-n*d,r,a[1]-s*d],l*12),u.fill(e,l*4,l*4+4),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aA.needsUpdate=!0}this.last[o]=[a[0],a[1]]}}}};var Gc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ln=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},y1=new is(-1,1,1,-1,0,1),pd=class extends at{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},M1=new pd,vs=class{constructor(e){this._mesh=new ue(M1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,y1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var jr=class extends Ln{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=di.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Jo=class extends Ln{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vc=class extends Ln{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Wc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jr(Gc),this.copyPass.material.blending=hi,this.clock=new kr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jo!==void 0&&(o instanceof Jo?n=!0:o instanceof Vc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xc=class extends Ln{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Fm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Qr=class i extends Ln{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new hn(r,o,{type:Pn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new hn(r,o,{type:Pn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=Fm;this.highPassUniforms=di.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gc;this.copyUniforms=di.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new kt,this.fsQuad=new vs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Qr.BlurDirectionX=new ce(1,0);Qr.BlurDirectionY=new ce(0,1);var Om={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qc=class extends Ln{constructor(){super();let e=Om;this.uniforms=di.clone(e.uniforms),this.material=new as({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var re=i=>document.getElementById(i),_i=(i,e,t)=>Math.max(e,Math.min(t,i)),md=(i,e,t)=>i+(e-i)*t,qn=(i,e)=>i+Math.random()*(e-i),b1=(i,e)=>Math.floor(qn(i,e+1)),ea=i=>i[Math.floor(Math.random()*i.length)],Wm="kidcars-v3",we={car:0,color:0,world:"country",time:"day",traffic:!0,sound:!0,tilt:!1,cam:0,controls:"wheel",eco:!0,voice:!0};try{Object.assign(we,JSON.parse(localStorage.getItem(Wm)||"{}"))}catch(i){}Gt[we.car]||(we.car=0);function Sn(){try{localStorage.setItem(Wm,JSON.stringify(we))}catch(i){}}var Xm=re("c"),Zs=/[?&]test/.test(location.search),xn=new ja({canvas:Xm,antialias:!Zs,powerPreference:"high-performance"});xn.setPixelRatio(Zs?.35:Math.min(window.devicePixelRatio||1,we.eco?1:1.5));xn.shadowMap.enabled=!Zs;xn.shadowMap.type=we.eco?Fo:_c;xn.toneMapping=Oo;xn.toneMappingExposure=.5;var un=new Lr,Dt=new jt(60,1,.3,1400);function rl(){let i=window.innerWidth,e=window.innerHeight;xn.setSize(i,e,!1),Dt.aspect=i/e,Dt.updateProjectionMatrix(),yi&&(yi.setPixelRatio(xn.getPixelRatio()),yi.setSize(i,e))}window.addEventListener("resize",rl);var ge=Im(un,xn);um(un);var to=pm(un);gm(un);var Md=new kc(un),qm=new Hc(un),Ms=new ft;{let i=new ue(new Ht(4.6,4.9,.14,56),new pt({color:1778736,roughness:.25,metalness:.6,envMapIntensity:1.2}));i.position.y=.07,i.receiveShadow=!0,Ms.add(i);let e=new ue(new os(4.75,.07,8,64),new pt({color:13677676,roughness:.3,metalness:.8}));e.rotation.x=Math.PI/2,e.position.y=.14,Ms.add(e),Ms.visible=!1,un.add(Ms)}var sn=new Rc,bs=null,w1={uniforms:{tDiffuse:{value:null},uVig:{value:.35},uSat:{value:1.12}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVig; uniform float uSat; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.299,0.587,0.114)); c.rgb = mix(vec3(l), c.rgb, uSat);
      vec2 d = vUv - 0.5; float v = 1.0 - uVig * smoothstep(0.25, 0.75, dot(d, d) * 2.0); c.rgb *= v; gl_FragColor = c; }`},yi=null,zm=null,Ad=!Zs&&!we.eco;function S1(){let i=new hn(1,1,{type:Pn,samples:2});yi=new Wc(xn,i),yi.addPass(new Xc(un,Dt)),zm=new Qr(new ce(256,128),.18,.4,1.6),yi.addPass(zm),yi.addPass(new jr(w1)),yi.addPass(new qc)}S1();rl();var bd=0;function Ym(){let i=!!we.eco;Zs||(xn.setPixelRatio(Math.min(window.devicePixelRatio||1,i?1:1.5)),Ad=!i&&Qo>1),bd=i&&!Zs?1e3/30:0;let e=i?1024:2048;ge.sun.shadow.mapSize.x!==e&&(ge.sun.shadow.mapSize.set(e,e),ge.sun.shadow.map&&(ge.sun.shadow.map.dispose(),ge.sun.shadow.map=null)),xn.shadowMap.type=i?Fo:_c,xn.shadowMap.needsUpdate=!0,re("optEco").textContent=i?"\u{1F50B}":"\u2728",re("optEco").classList.toggle("off",!i),rl()}var sa=[13832735,1525449,16106776,1414215,15921906,1381914,16738835,7153881,2078920],E1=re("loading"),T1=re("loadfill"),Rd=re("loadtxt"),Bm=0,Km=0;function km(i){Bm++,T1.style.width=Math.round(Bm/Km*100)+"%",i&&(Rd.textContent=i)}async function A1(){let i=Gt[we.car].id;Km=Gt.length+1,await Ho(i,!1),km("Polishing the "+Gt[we.car].name+"\u2026");for(let e of Gt)await Ho(e.id,!0),km("Loading traffic\u2026");Rd.textContent="Ready!",setTimeout(()=>E1.classList.add("hidden"),350),(async()=>{for(let e of Gt)if(!Vs(e.id,!1)){try{await Ho(e.id,!1)}catch(t){console.warn(t)}xt==="menu"&&Gt[we.car].id===e.id&&ta()}})()}var Js=60,Gi=new at,Zc=new Float32Array(Js*3),Zm=new Float32Array(Js),$m=new Float32Array(Js),$c=new Float32Array(Js*3);Gi.setAttribute("position",new Ge(Zc,3));Gi.setAttribute("aSize",new Ge(Zm,1));Gi.setAttribute("aAlpha",new Ge($m,1));Gi.setAttribute("aCol",new Ge($c,3));var R1=new Ot({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Re(7829367)}},vertexShader:"attribute float aSize; attribute float aAlpha; attribute vec3 aCol; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aCol; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * 300.0 / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); if (d > 0.5) discard; float a = smoothstep(0.5, 0.1, d) * vA; gl_FragColor = vec4(vC, a); }"}),Jm=new Ur(Gi,R1);Jm.frustumCulled=!1;un.add(Jm);var Cd=[];for(let i=0;i<Js;i++)Cd.push({x:0,y:-10,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,r:.5,g:.5,b:.5});var gd=0;function Jc(i,e,t,n,s){let r=Cd[gd];gd=(gd+1)%Js,s?(r.r=s[0],r.g=s[1],r.b=s[2]):r.r=r.g=r.b=.45,r.x=i+qn(-.3,.3),r.y=e,r.z=t+qn(-.3,.3),r.vx=qn(-.4,.4),r.vy=qn(.8,1.6)*n,r.vz=qn(-.4,.4),r.life=0,r.max=qn(.9,1.8),r.size=qn(.5,1)*n}function C1(i){for(let e=0;e<Js;e++){let t=Cd[e];t.life<t.max&&(t.life+=i,t.x+=t.vx*i,t.y+=t.vy*i,t.z+=t.vz*i,t.vy*=.98);let n=t.life/t.max,s=t.life<t.max;Zc[e*3]=t.x,Zc[e*3+1]=t.y,Zc[e*3+2]=t.z,Zm[e]=s?t.size*(.6+n*2.2):0,$m[e]=s?(1-n)*.55:0,$c[e*3]=t.r,$c[e*3+1]=t.g,$c[e*3+2]=t.b}Gi.attributes.position.needsUpdate=!0,Gi.attributes.aSize.needsUpdate=!0,Gi.attributes.aAlpha.needsUpdate=!0,Gi.attributes.aCol.needsUpdate=!0}var Rt=null,Nn=Gt[0],z=null,jc=null,k={s:0,idx:0,damage:0,totaled:!1,boostFuel:1,boosting:!1,shake:0,dist:0,menuAngle:.7,lastHitT:0,spin:0,combo:0,lastStarT:-9,saveT:0,missionT:0};function ta(){Rt&&(un.remove(Rt),Yr(Rt)),Nn=Gt[we.car],Rt=qr(Nn.id,!Vs(Nn.id,!1),sa[we.color]),un.add(Rt),jc=new ft;for(let i of[-1,1]){let e=new zr(16774358,0,90,.55,.5,1);e.position.set(i*.65,.7,-Nn.len/2+.1),e.target.position.set(i*1.8,0,-45),jc.add(e,e.target)}Rt.add(jc),z=new Ys(Nn),Id(),ra()}var wn=[];for(let i=0;i<10;i++)wn.push({mesh:null,spec:Gt[0],body:null,lane:0,s:0,target:20,active:!1,idx:0});function jm(i,e){let t=b1(0,2),n=e?k.s+qn(120,420):k.s-qn(60,90);for(let r=0;r<10;r++){let o=!0;for(let a of wn)a!==i&&a.active&&a.lane===t&&Math.abs(a.s-n)<50&&(o=!1);if(o)break;n+=40}i.mesh&&(un.remove(i.mesh),Yr(i.mesh)),i.spec=ea(Gt),i.mesh=qr(i.spec.id,!0,ea(sa)),un.add(i.mesh),i.body=new Ys(i.spec),i.lane=t,i.s=n,i.target=e?qn(14,27):qn(30,40);let s=ge.road.pointAt(n);i.body.x=s.x+s.rx*oi[t],i.body.z=s.z+s.rz*oi[t],i.body.h=s.h,i.body.vx=s.fx*i.target,i.body.vz=s.fz*i.target,i.idx=Math.floor(n/pi),i.active=!0,i.mesh.visible=!0,i.ahead=n>k.s}function Hm(i){i.mesh.position.set(i.body.x,0,i.body.z),i.mesh.rotation.y=i.body.h}function Id(){ge.setTime(we.time),jp(ge.night||ge.rain),Qp(ge.night?.5:1),Md.set(!!ge.rain),Ke.rain=!!ge.rain,Rt&&(Rt.userData.paint.forEach(i=>i.envMapIntensity=ge.night?.6:1.25),jc.children.forEach(i=>{i.isSpotLight&&(i.intensity=ge.night?400:0)}))}var At={left:!1,right:!1,gas:!1,brake:!1,boost:!1,tilt:0,wheel:0},Qc=["btnLeft","btnRight","btnGas","btnBrake","btnBoost"],el={btnLeft:"left",btnRight:"right",btnGas:"gas",btnBrake:"brake",btnBoost:"boost"},$s=re("wheel"),Qm=re("wheelimg"),Bi=0,Kt=null,wd=120,Dn=new Map,no=new Map;function Pd(i,e){let t=$s.getBoundingClientRect();return Math.atan2(e-(t.top+t.height/2),i-(t.left+t.width/2))*180/Math.PI}function e0(i,e){let t=Pd(i,e),n=t-Kt.last;for(;n>180;)n-=360;for(;n<-180;)n+=360;Kt.last=t,!(Math.abs(n)>120)&&(Bi=_i(Bi+n,-wd,wd),Qm.style.transform=`rotate(${Bi}deg)`)}function Ks(i,e,t){let n=i.getBoundingClientRect();return e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom}function io(){let i={};for(let e of Qc)i[el[e]]=!1;for(let e of Dn.values())if(!e.wheel)for(let t of Qc)Ks(re(t),e.x,e.y)&&(i[el[t]]=!0);for(let e of Qc){let t=el[e],n=i[t]||no.has(t);At[t]=n,re(e).classList.toggle("pressed",n)}}function I1(i){i.cancelable&&i.preventDefault(),i.type==="touchstart"&&(Ke.init(),Ke.resume());let e=new Set(Array.from(i.touches).map(t=>t.identifier));for(let t of Array.from(Dn.keys()))if(!e.has(t)&&!Array.from(i.changedTouches).some(n=>n.identifier===t)){let n=Dn.get(t);Dn.delete(t),n&&n.wheel&&Kt&&Kt.id===t&&(Kt=null),n&&n.lock&&so("reconcile "+i.type)}for(let t of Array.from(i.changedTouches)){let n=t.identifier;if(i.type==="touchstart"){let s=we.controls==="wheel"&&xt==="drive"&&Ks($s,t.clientX,t.clientY)&&!Kt;Dn.set(n,{x:t.clientX,y:t.clientY,wheel:s,lock:xt==="menu"&&Ks(re("btnLock"),t.clientX,t.clientY)}),Dn.get(n).lock&&l0("touch"),s&&(Kt={id:n,last:Pd(t.clientX,t.clientY)}),xt==="drive"&&Ks(re("btnHorn"),t.clientX,t.clientY)&&(Ld(),re("btnHorn").classList.add("pressed"),setTimeout(()=>re("btnHorn").classList.remove("pressed"),200))}else if(i.type==="touchmove"){let s=Dn.get(n);if(!s)continue;s.x=t.clientX,s.y=t.clientY,s.wheel&&Kt&&Kt.id===n&&e0(t.clientX,t.clientY)}else{let s=Dn.get(n);Dn.delete(n),s&&s.wheel&&Kt&&Kt.id===n&&(Kt=null),s&&s.lock&&so("touchend "+i.type)}}io()}for(let i of["touchstart","touchmove","touchend","touchcancel"])document.addEventListener(i,I1,{passive:!1});function P1(i,e){let t=re(i);t.addEventListener("pointerdown",s=>{s.pointerType!=="touch"&&(s.preventDefault(),no.set(e,!0),io(),Ke.init(),Ke.resume())});let n=s=>{s&&s.pointerType==="touch"||(no.delete(e),io())};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n)}Qc.forEach(i=>P1(i,el[i]));window.addEventListener("blur",()=>{Dn.clear(),no.clear(),Kt=null,so("blur"),io()});$s.addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),$s.setPointerCapture(i.pointerId),Kt={id:"mouse",last:Pd(i.clientX,i.clientY)})});$s.addEventListener("pointermove",i=>{i.pointerType==="touch"||!Kt||Kt.id!=="mouse"||e0(i.clientX,i.clientY)});var t0=i=>{i.pointerType!=="touch"&&Kt&&Kt.id==="mouse"&&(Kt=null)};$s.addEventListener("pointerup",t0);$s.addEventListener("pointercancel",t0);function Ld(){if(Ke.horn(),be.horns++,ki("horn"),z){let[i,e]=z.fwd();for(let t of wn){if(!t.active||!t.body)continue;let n=t.body.x-z.x,s=t.body.z-z.z,r=n*i+s*e;r>0&&r<40&&Math.abs(n*e-s*i)<7&&(t.beepT=.45+Math.random()*.3,t.hurry=3.5)}}}re("btnHorn").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(i.preventDefault(),Ke.init(),Ke.resume(),Ld())});re("btnCam").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&(we.cam=(we.cam+1)%3,Sn())});re("btnFix").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Bd()});document.addEventListener("touchend",i=>{if(xt==="drive")for(let e of Array.from(i.changedTouches))Ks(re("btnCam"),e.clientX,e.clientY)&&(we.cam=(we.cam+1)%3,Sn()),Ks(re("btnPhoto"),e.clientX,e.clientY)&&Ud(),!re("totaled").classList.contains("hidden")&&Ks(re("btnFix"),e.clientX,e.clientY)&&Bd()},{passive:!1});function L1(i){Kt||(Bi+=(0-Bi)*Math.min(1,9*i),Math.abs(Bi)<.3&&(Bi=0),Qm.style.transform=`rotate(${Bi}deg)`),At.wheel=Bi/wd}function n0(){let i=we.controls==="wheel";re("leftpad").classList.toggle("hidden",i),re("wheel").classList.toggle("hidden",!i),re("rightpad").classList.toggle("pedals",i),re("optCtl").textContent=i?"\u{1F3A1}":"\u{1F579}\uFE0F"}window.addEventListener("keydown",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(At.left=!0),(i.code==="ArrowRight"||i.code==="KeyD")&&(At.right=!0),(i.code==="ArrowUp"||i.code==="KeyW")&&(At.gas=!0),(i.code==="ArrowDown"||i.code==="KeyS")&&(At.brake=!0),(i.code==="ShiftLeft"||i.code==="Space")&&(At.boost=!0),i.code==="KeyH"&&Ld(),i.code==="KeyC"&&(we.cam=(we.cam+1)%3,Sn()),i.code==="KeyF"&&Bd(),i.code==="KeyP"&&Ud(),i.code==="Escape"&&(xt==="drive"?na():xt==="pause"&&a0())});window.addEventListener("keyup",i=>{(i.code==="ArrowLeft"||i.code==="KeyA")&&(At.left=!1),(i.code==="ArrowRight"||i.code==="KeyD")&&(At.right=!1),(i.code==="ArrowUp"||i.code==="KeyW")&&(At.gas=!1),(i.code==="ArrowDown"||i.code==="KeyS")&&(At.brake=!1),(i.code==="ShiftLeft"||i.code==="Space")&&(At.boost=!1)});window.addEventListener("deviceorientation",i=>{if(i.beta==null)return;let e=i.beta/22,t=screen.orientation&&screen.orientation.angle||window.orientation||0;(t===270||t===-90)&&(e=-e),At.tilt=_i(e,-1,1)});var ol=re("menu"),i0=re("hud"),xt="menu";function Vi(){let i=Gt[we.car];re("carname").textContent=i.name,re("stSpeed").style.width=Math.round(100*i.maxKmh/500)+"%",re("stPower").style.width=Math.round(100*i.accel/18)+"%",re("stGrip").style.width=Math.round(100*i.handling/10.5)+"%",document.querySelectorAll("#worldRow .opt").forEach(e=>e.classList.toggle("on",e.dataset.world===we.world)),document.querySelectorAll("#timeRow .opt").forEach(e=>e.classList.toggle("on",e.dataset.time===we.time)),re("optTraffic").classList.toggle("off",!we.traffic),re("optSound").classList.toggle("off",!we.sound),re("optSound").textContent=we.sound?"\u{1F50A}":"\u{1F507}",re("optTilt").classList.toggle("off",!we.tilt),re("optVoice").classList.toggle("off",!we.voice),Bt.on=we.voice,document.querySelectorAll(".swatch").forEach((e,t)=>e.classList.toggle("on",t===we.color))}var D1=re("colors");sa.forEach((i,e)=>{let t=document.createElement("button");t.className="swatch",t.style.background="#"+i.toString(16).padStart(6,"0"),t.addEventListener("pointerdown",()=>{we.color=e,Sn(),ta(),Vi(),Bt.say(Dm[e],{min:300})}),D1.appendChild(t)});function s0(i){we.car=(we.car+i+Gt.length)%Gt.length,Sn(),ta(),Vi(),k.menuAngle=.7,Bt.say(Gt[we.car].name,{min:500}),Vs(Gt[we.car].id,!1)||Ho(Gt[we.car].id,!1).then(()=>{xt==="menu"&&Gt[we.car].id===Nn.id&&ta()})}re("prevCar").addEventListener("pointerdown",i=>{i.preventDefault(),s0(-1)});re("nextCar").addEventListener("pointerdown",i=>{i.preventDefault(),s0(1)});document.querySelectorAll("#worldRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{we.world=i.dataset.world,Sn(),ge.setWorld(we.world),dm(),Id(),Vi()}));function Dd(){re("bookstars").textContent="\u2B50 "+be.stars,re("starnum").textContent=be.stars;let i=Object.keys(be.stickers).length;re("bookstats").textContent=`${i} / ${Cc.length} stickers \xB7 ${be.km.toFixed(1)} km driven \xB7 ${be.missions} missions \xB7 ${be.deliveries} recliners delivered`;let e=re("bookgrid");e.innerHTML="";for(let t of Cc){let n=document.createElement("div");n.className="sticker"+(be.stickers[t.id]?"":" locked"),n.innerHTML=`<span class="e">${t.e}</span><span class="n">${t.n}</span>`,e.appendChild(n)}}re("btnBook").addEventListener("pointerdown",i=>{i.preventDefault(),Dd(),re("book").classList.remove("hidden")});re("btnBookClose").addEventListener("pointerdown",i=>{i.preventDefault(),re("book").classList.add("hidden")});var Sd=[],tl=!1;function gn(i,e,t){if(Sd.push({big:i,txt:e,confetti:t}),tl)return;let n=()=>{let s=Sd.shift();if(!s){tl=!1;return}tl=!0;let r=re("toast");if(r.classList.remove("hidden"),re("toastbig").textContent=s.big,re("toasttxt").textContent=s.txt,r.style.animation="none",r.offsetWidth,r.style.animation="",s.confetti){let o=re("confetti"),a=["#D0B46C","#ef4444","#3b82f6","#22c55e","#f59e0b","#ffffff"];for(let c=0;c<36;c++){let l=document.createElement("i");l.style.left=Math.random()*100+"%",l.style.background=ea(a),l.style.animationDelay=Math.random()*.6+"s",l.style.animationDuration=1.8+Math.random()*1.2+"s",o.appendChild(l),setTimeout(()=>l.remove(),3200)}}setTimeout(()=>{r.classList.add("hidden"),setTimeout(n,150)},2300)};n()}function ki(i,e){if(xt!=="drive")return;let t=sn.event(i,e);t==="pickup"?(O1(),al(),k.route=null,gn("GOT IT! \u{1F6CB}\uFE0F",sn.label().text),Ke.fanfare(),il(),Bt.say("Got the recliner! "+sn.label().text)):t==="done"&&F1()}var _s=null;function N1(){let i=ge.current.mats,e=new ft,t=new pt({color:1517628,roughness:.5,metalness:.2}),n=new pt({color:16053492,roughness:.5}),s=new pt({color:1381914,roughness:.9}),r=i&&i.billboards&&i.billboards[0]||t,o=new ue(new nt(2.2,2.3,4.2),[r,r,t,t,t,t]);o.position.set(0,1.55,.5),o.castShadow=!0,e.add(o);let a=new ue(new nt(2.2,1.7,1.7),n);a.position.set(0,1.25,-2.4),a.castShadow=!0,e.add(a);let c=new ue(new nt(2,.7,.1),new pt({color:9417689,roughness:.2,metalness:.4}));c.position.set(0,1.5,-3.26),e.add(c);for(let[h,u]of[[-1,-2.2],[1,-2.2],[-1,1.6],[1,1.6]]){let d=new ue(new Ht(.42,.42,.3,14),s);d.rotation.z=Math.PI/2,d.position.set(h,.42,u),e.add(d)}let l=new ue(new Wt(1.9,.5),i&&i.sign?i.sign:n);return l.position.set(0,2.45,.5),l.rotation.y=Math.PI,e.add(l),e}function U1(i,e){_s||(_s=N1(),un.add(_s));let t=ge.road.nearest(i,e),n=t.px!=null?t.h:0,s=Math.cos(n),r=-Math.sin(n);_s.position.set(i-s*(t.w/2+1.6),0,e-r*(t.w/2+1.6)),_s.rotation.y=n,_s.visible=!0}function al(){_s&&(_s.visible=!1)}function F1(){let i=sn.cur;be.stars+=i.reward,be.missions++,i.kind==="deliver"&&(be.deliveries++,Nd()),i.kind==="photo"&&(be.photoMissions=(be.photoMissions||0)+1),i.timer!=null&&(be.dashes=(be.dashes||0)+1),al(),gs("mission"),k.route=null,gn("GREAT JOB!",`Alhamdulillah \xB7 +${i.reward} \u2B50`,!0),Ke.fanfare(!0),re("starnum").textContent=be.stars,ms(),Bt.say("Alhamdulillah! Great job!");for(let e of Vo())gn("NEW STICKER!",`${e.e} ${e.n}`);k.missionT=3.5}function r0(){gs("mission"),al(),k.route=null,sn.next({isMap:!!ge.road.isMap,road:ge.road,x:z.x,z:z.z,maxKmh:Nn.maxKmh,traffic:we.traffic,showroomAt:ge.current.showroomAt});let i=sn.cur;i.van&&U1(i.target[0],i.target[1]),il(),gn(i.icon+" "+i.text,i.timer!=null?`Get there in ${i.timer} seconds!`:"New mission!");let e=Nm(sn.cur);e?(gn(`${e.L} is for ${e.word}`,sn.cur.icon+" "+e.word),Bt.say(`New mission! ${e.L} is for ${e.word}. ${sn.cur.text}`)):Bt.say("New mission! "+sn.cur.text)}var Gm="";function il(){let i=sn.label(),e=i.icon+i.text+i.prog;e!==Gm&&(Gm=e,re("micon").textContent=i.icon,re("mtext").textContent=i.text,sn.target()||(re("mprog").textContent=i.prog))}function O1(){bs||(bs=mm());let i=new mn().setFromObject(Rt);bs.position.set(0,i.max.y-.05,-.1),Rt.add(bs)}function Nd(){bs&&bs.parent&&bs.parent.remove(bs)}document.querySelectorAll("#timeRow .opt").forEach(i=>i.addEventListener("pointerdown",()=>{we.time=i.dataset.time,Sn(),Id(),Vi()}));re("optTraffic").addEventListener("pointerdown",()=>{we.traffic=!we.traffic,Sn(),Vi()});re("optVoice").addEventListener("pointerdown",()=>{we.voice=!we.voice,Sn(),Vi(),we.voice?Bt.say("Voice on!"):Bt.stop()});re("optSound").addEventListener("pointerdown",()=>{we.sound=!we.sound,Sn(),Ke.init(),Ke.setOn(we.sound),Vi()});re("optCtl").addEventListener("pointerdown",()=>{we.controls=we.controls==="wheel"?"buttons":"wheel",Sn(),n0()});re("optEco").addEventListener("pointerdown",()=>{we.eco=!we.eco,Sn(),Ym()});re("optTilt").addEventListener("pointerdown",()=>{we.tilt=!we.tilt,Sn(),Vi(),we.tilt&&typeof DeviceOrientationEvent!="undefined"&&DeviceOrientationEvent.requestPermission&&DeviceOrientationEvent.requestPermission().catch(()=>{})});re("btnPlay").addEventListener("pointerdown",i=>{i.preventDefault(),ge.road&&(Ke.init(),Ke.resume(),Ke.setOn(we.sound),Zs?h0():z1())});function z1(){xt="dua",ol.classList.add("hidden"),re("dua").classList.remove("hidden"),Bt.say("\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u0650",{lang:"ar"})||Bt.say("Bismillah")}function o0(){re("dua").classList.add("hidden")}re("btnBismillah").addEventListener("pointerdown",i=>{i.preventDefault(),xt==="dua"&&(o0(),be.duas=(be.duas||0)+1,Bt.say("Bismillah! Let's drive safely."),h0())});re("btnPause").addEventListener("pointerdown",i=>{i.preventDefault(),na()});re("btnResume").addEventListener("pointerdown",i=>{i.preventDefault(),a0()});re("btnGarage").addEventListener("pointerdown",i=>{i.preventDefault(),zd()});function na(){if(xt==="drive"){xt="pause",re("pauseov").classList.remove("hidden");for(let i in At)i!=="tilt"&&(At[i]=!1);Dn.clear(),no.clear(),Kt=null,io(),Ke.engine&&Ke.update(0,1,!1,!1),Ke.pause(),Bt.stop()}}function a0(){xt==="pause"&&(xt="drive",re("pauseov").classList.add("hidden"),ia.getDelta(),Ke.unpause())}var sl=!1;function Ud(){xt!=="drive"||sl||(sl=!0)}function B1(){sl=!1;try{let i=Xm.toDataURL("image/jpeg",.9);re("polaimg").src=i,re("polaroid").classList.remove("hidden"),setTimeout(()=>re("polaroid").classList.add("hidden"),2600);let e=re("flash");e.classList.remove("go"),e.offsetWidth,e.classList.add("go"),Ke.click(),Hi(20),be.photos++,ms(),ki("photo",[z.x,z.z]),window.Android&&window.Android.savePhoto&&window.Android.savePhoto(i.split(",")[1]);for(let t of Vo())gn("NEW STICKER!",`${t.e} ${t.n}`)}catch(i){console.warn("photo failed",i)}}re("btnPhoto").addEventListener("pointerdown",i=>{i.pointerType!=="touch"&&Ud()});var ws=!1,Fd=0;function c0(){we.lock=!1,re("options").classList.toggle("locked",!!we.lock),re("btnLock").querySelector("span").textContent=we.lock?"\u{1F512}":"\u{1F513}"}var Ed=0,nl=[],Od=i=>{nl.push(Math.round(performance.now())+" "+i),nl.length>40&&nl.shift()};function l0(i){Od("start "+i+(ws?" (ignored: held)":performance.now()<Ed?" (ignored: cool)":"")),!(ws||performance.now()<Ed)&&(ws=!0,Fd=performance.now(),re("btnLock").classList.add("holding"))}function so(i){ws&&Od("end "+i),ws=!1,re("btnLock").classList.remove("holding")}function k1(){ws&&performance.now()-Fd>=2e3&&(so("tick"),Od("toggle -> "+!we.lock),Ed=performance.now()+1500,we.lock=!we.lock,Sn(),c0(),Hi(40),Ke.ping(4))}re("btnLock").addEventListener("pointerdown",i=>{i.preventDefault();try{re("btnLock").setPointerCapture(i.pointerId)}catch(e){}l0("pointer "+i.pointerType)});for(let i of["pointerup","pointercancel","lostpointercapture"])re("btnLock").addEventListener(i,()=>so("pointer "+i));document.addEventListener("contextmenu",i=>i.preventDefault());re("options").addEventListener("pointerdown",()=>{we.lock&&(re("lockhint").classList.remove("hidden"),setTimeout(()=>re("lockhint").classList.add("hidden"),1800))});function h0(){xt="drive",ol.classList.add("hidden"),i0.classList.remove("hidden"),Ms.visible=!1,re("mapbox").classList.toggle("hidden",!ge.road.isMap),Td.textContent="",k.s=40,k.idx=10,k.dist=0,k.boostFuel=1,k.damage=0,k.totaled=!1,k.spin=0;let i=ge.road.isMap?ge.road.startPose():ge.road.pointAt(k.s);z=new Ys(Nn),z.x=i.x,z.z=i.z,z.h=i.h,ra(),re("totaled").classList.add("hidden"),wn.forEach((e,t)=>{we.traffic&&(ge.road.isMap||t<6)?ge.road.isMap?u0(e):jm(e,!0):(e.active=!1,e.mesh&&(e.mesh.visible=!1))}),be.cars[Nn.id]=1,re("starnum").textContent=be.stars,k.combo=0,k.missionT=0,k.starsRun=0,k.saidStreet="",k.lastMasjid=null,k.redStop=k.greenSaid=k.redRun=null,k.lastPad=null,k.padT=0,Nd(),qm.clear();for(let e of["roll","pitch","heave"])Zt[e].x=0,Zt[e].v=0;Zt.prevVf=0,Zt.wasOff=!1,ge.road.isMap?ge.road.ensure(z.x,z.z,!0):ge.road.ensure(k.idx),r0()}function u0(i){if(i.mesh&&(un.remove(i.mesh),Yr(i.mesh)),i.spec=ea(Gt),i.mesh=qr(i.spec.id,!0,ea(sa)),un.add(i.mesh),i.body=new Ys(i.spec),i.body.mass=60,i.agent={},!ge.road.spawnAgent(i.agent,z.x,z.z)){i.active=!1,i.mesh.visible=!1;return}ge.road.advanceAgent(i.agent,0),i.body.x=i.agent.x,i.body.z=i.agent.z,i.body.h=i.agent.h,i.active=!0,i.mesh.visible=!0,i.spd=null}function zd(){xt="menu",Ke.unpause(),i0.classList.add("hidden"),ol.classList.remove("hidden"),re("totaled").classList.add("hidden"),re("pauseov").classList.add("hidden"),re("polaroid").classList.add("hidden");for(let i in At)i!=="tilt"&&(At[i]=!1);Dn.clear(),no.clear(),Kt=null,so("menu"),io(),wn.forEach(i=>{i.active=!1,i.mesh&&(i.mesh.visible=!1)}),Rt.position.set(0,0,0),Rt.rotation.set(0,0,0),k.menuAngle=.7,k.damage=0,k.totaled=!1,ra(),Ke.engine&&(Ke.update(0,1,!1,!1),Ke.quiet()),Nd(),to.visible=!1,al(),gs("mission"),k.route=null,Wo(null),re("toast").classList.add("hidden"),Sd.length=0,tl=!1,ms(),Dd()}function Bd(){if(xt!=="drive")return;k.damage=0,k.totaled=!1,k.spin=0,re("totaled").classList.add("hidden");let i=ge.road.nearest(z.x,z.z,k.idx);if(ge.road.isMap)z.x=i.px,z.z=i.pz,z.h=i.h;else{let e=ge.road.pointAt(i.s+2);z.x=e.x+e.rx*oi[1],z.z=e.z+e.rz*oi[1],z.h=e.h}z.vx=z.vz=0,z.yawRate=0,ra(),Ke.whoosh()}function ra(){if(!Rt)return;let i=k.damage/100;Rt.userData.paint.forEach(e=>{e.color.setHex(sa[we.color]).lerp(new Re(3158064),i*.45),e.roughness=.32+i*.5}),re("dmgfill").style.width=(100-k.damage).toFixed(0)+"%",re("dmgfill").style.background=k.damage<40?"#22c55e":k.damage<75?"#f59e0b":"#ef4444"}function Yc(i){if(i<1.5)return;let e=(i-1.5)*4.2;k.damage=Math.min(100,k.damage+e),k.shake=Math.max(k.shake,Math.min(1.2,i*.08)),Ke.bump(Math.min(1,i/12)),Hi(Math.min(220,30+i*12)),Zt.heave.v-=Math.min(1.5,i*.08),Zt.pitch.v-=Math.min(.8,i*.05);for(let t=0;t<Math.min(12,i);t++)Jc(z.x,.9,z.z,.6);ra(),ki("hit"),k.damage>=100&&!k.totaled&&(k.totaled=!0,k.spin=(Math.random()<.5?-1:1)*2.5,re("totaled").classList.remove("hidden"))}var ia=new kr,eo=new D,jo=new D,H1=re("speedval"),G1=re("gaugearc"),V1=re("dist"),W1=re("boostfill"),X1=re("btnBoost"),Td=re("street"),d0=re("minimap"),q1=d0.getContext("2d"),Y1=0;function K1(){if(++Y1%3)return;let i=d0.width/2,e=i/210,t=q1,n=ge.road,s=n.nodes;t.clearRect(0,0,i*2,i*2),t.save(),t.beginPath(),t.arc(i,i,i-2,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,28,40,0.78)",t.fillRect(0,0,i*2,i*2),t.translate(i,i),t.rotate(z.h),t.scale(e,e),t.translate(-z.x,-z.z);let r=Math.floor(z.x/n.cell),o=Math.floor(z.z/n.cell),a=new Set;t.lineCap="round";for(let u=-4;u<=4;u++)for(let d=-4;d<=4;d++){let f=n.hash.get(n.key(r+u,o+d));if(f)for(let m of f){if(a.has(m))continue;a.add(m);let v=Math.floor(m/4096),g=m%4096,p=n.roads[v],S=s[p.n[g]],_=s[p.n[g+1]];t.strokeStyle=p.w>9?"#ffd58a":p.t==="service"||p.t==="track"?"#8a93a3":"#e8edf5",t.lineWidth=p.w*.9,t.beginPath(),t.moveTo(S[0],S[1]),t.lineTo(_[0],_[1]),t.stroke()}}let c=Math.floor(z.x/400),l=Math.floor(z.z/400);for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++)for(let f of n.tilePois.get(n.key(c+u,l+d))||[])t.fillStyle=/school/i.test(f.k)?"#60a5fa":/worship|mosque/i.test(f.k)?"#34d399":/fuel/i.test(f.k)?"#f97316":"#f472b6",t.beginPath(),t.arc(f.c[0],f.c[1],7,0,Math.PI*2),t.fill();if(ge.current.showroomAt&&(t.fillStyle="#D0B46C",t.beginPath(),t.arc(ge.current.showroomAt[0],ge.current.showroomAt[1],9,0,Math.PI*2),t.fill()),k.route&&k.route.length>1){t.strokeStyle="rgba(255,213,74,0.95)",t.lineWidth=4/e,t.lineJoin="round",t.beginPath(),t.moveTo(k.route[0][0],k.route[0][1]);for(let u=1;u<k.route.length;u++)t.lineTo(k.route[u][0],k.route[u][1]);t.stroke()}let h=sn.target();if(h){let u=(9+Math.sin(ys*5)*3)/e;t.strokeStyle="#ffd54a",t.lineWidth=3/e,t.beginPath(),t.arc(h[0],h[1],u,0,Math.PI*2),t.stroke(),t.fillStyle="#ffd54a",t.beginPath(),t.arc(h[0],h[1],4/e,0,Math.PI*2),t.fill()}t.restore(),t.save(),t.translate(i,i),t.fillStyle="#ef4444",t.beginPath(),t.moveTo(0,-9),t.lineTo(6,7),t.lineTo(-6,7),t.closePath(),t.fill(),t.restore()}var xd=0,vd=0,Zt={roll:{x:0,v:0},pitch:{x:0,v:0},heave:{x:0,v:0},prevVf:0,wasOff:!1};function _d(i,e,t,n=90,s=11){i.v+=((e-i.x)*n-i.v*s)*t,i.x+=i.v*t}function Hi(i){if(!(we.haptics===!1||!navigator.vibrate))try{navigator.vibrate(i)}catch(e){}}function Z1(i){let e=Nn,t=e.maxKmh/3.6;if(xt==="drive"){let n=At.boost&&k.boostFuel>.05&&!k.totaled;n&&!k.boosting&&(Ke.whoosh(),be.boosts++,ki("boost")),k.boosting=n||(k.padT||0)>0,k.boostFuel=k.boosting?Math.max(0,k.boostFuel-i/3):Math.min(1,k.boostFuel+i/9),W1.style.width=(k.boostFuel*100).toFixed(0)+"%",X1.classList.toggle("cooling",k.boostFuel<.05);let s=(At.right?1:0)-(At.left?1:0);we.controls==="wheel"&&(L1(i),s===0&&(s=Math.sign(At.wheel)*Math.pow(Math.abs(At.wheel),1.25))),we.tilt&&s===0&&(s=At.tilt),k.totaled?(z.throttle=0,z.brake=.4,z.steer=0,z.yawRate=k.spin,k.spin*=Math.pow(.4,i)):(z.throttle=At.gas?1:0,z.brake=At.brake?1:0,z.steer=k.air>0?0:s),k.air>0&&(z.surfaceGrip=.03,z.brake=0);let r=!!ge.road.isMap,o=ge.road.nearest(z.x,z.z,k.idx);r||(k.idx=o.i,k.s=o.s);let a=Math.abs(o.d);if(z.offRoad=r?!o.onRoad:a>Yt/2+.6,z.surfaceGrip=(z.offRoad?ge.current.offroadGrip:1)*(ge.rain?.7:1),r){(k.frameN=(k.frameN||0)+1)%20===0&&(k.suburb=ge.road.suburbAt(z.x,z.z));let y=o.onRoad&&o.name?o.name:"",b=y+(k.suburb?(y?" \xB7 ":"")+k.suburb:"");if(b!==Td.textContent&&(Td.textContent=b),y&&y!==k.saidStreet&&Math.abs(z.vf)>3&&(k.saidStreet=y,Bt.say(y,{min:7e3})),k.frameN%15===0){let E=ge.road.masjidNear(z.x,z.z,75);E&&E!==k.lastMasjid&&(k.lastMasjid=E,be.masjids=(be.masjids||0)+1,gn("\u{1F54C} Assalamu alaikum",E.name),Bt.say("Assalamu alaikum! "+E.name),Ke.ping(0))}{let[E,A]=z.fwd(),M=ge.road.lightAhead(z.x,z.z,E,A),w=Math.abs(z.vf);M&&M.state==="r"&&M.dist>2&&M.dist<26&&w<.6&&k.redStop!==M.key&&(k.redStop=M.key,be.goodStops=(be.goodStops||0)+1,be.stars+=5,re("starnum").textContent=be.stars,gn("GOOD STOP! \u{1F6D1}","Red means STOP \xB7 +5 \u2B50"),Ke.fanfare(),Bt.say("Good stop! Red means stop.")),M&&M.state==="g"&&k.redStop===M.key&&k.greenSaid!==M.key&&(k.greenSaid=M.key,gn("GREEN! \u{1F7E2}","Green means GO"),Bt.say("Green means go!")),M&&M.state==="r"&&M.dist<1.5&&w>5&&k.redRun!==M.key&&(k.redRun=M.key,gn("OOPS! \u{1F6A6}","Red means STOP"),Bt.say("Oops! Red means stop. Green means go."))}}{let y=ge.road.padAt?ge.road.padAt(z.x,z.z):null;if(y&&y!==k.lastPad){k.lastPad=y;let[b,E]=z.fwd();z.vx+=b*7,z.vz+=E*7,k.boostFuel=1,k.padT=1.4,be.pads=(be.pads||0)+1,gn("ZOOM! \u26A1","Boost pad!"),Ke.whoosh(),Hi(40),Bt.say("Zoom!",{min:4e3})}else y||(k.lastPad=null);k.padT=Math.max(0,(k.padT||0)-i)}{let y=!r&&ge.road.rampAt?ge.road.rampAt(z.x,z.z):null;if(y){if(k.rampY=y.t*1.1,y.t>.9&&!(k.air>0)&&Math.abs(z.vf)>7){let b=Math.abs(z.vf);k.air=1,k.jumpV=Math.min(8,2.5+b*.17),k.jumpY=1.1,be.jumps=(be.jumps||0)+1,gn("WHEEE! \u{1FABD}","Big jump!"),Ke.whoosh(),Hi(30),Bt.say("Wheee!",{min:3e3})}}else k.rampY=0;k.air>0&&(k.jumpY+=k.jumpV*i,k.jumpV-=16*i,k.jumpY<=0&&(k.jumpY=0,k.air=0,Zt.heave.v-=2.5,Zt.pitch.v+=.6,Ke.bump(.5),Hi(50),k.shake=Math.max(k.shake,.5)))}if(r){let y=ge.road.humpAt(z.x,z.z);if(y&&y!==k.lastHump){k.lastHump=y;let b=Math.abs(z.vf);b>4&&(Zt.heave.v+=Math.min(1.6,b*.09),Zt.pitch.v-=Math.min(.5,b*.02),Ke.bump(Math.min(.6,b/30)),Hi(Math.min(60,b*2)),b>12&&(z.vx*=.93,z.vz*=.93))}else y||(k.lastHump=null)}let c=k.damage/100;if(c>.5&&!k.totaled&&(z.steer+=Math.sin(ia.elapsedTime*7)*(c-.5)*.5),z.update(i,t*(1-c*.45),e.accel*(1-c*.5),e.handling,k.boosting),k.dist+=Math.max(0,z.vf)*i,!r&&(ge.current.guardrail||ge.current.poles)){let y=(ge.current.guardrail?Kr:Yt/2+.75)-.15,b=ge.road.nearest(z.x,z.z,k.idx);if(Math.abs(b.d)+z.halfW>y){let E=Math.sign(b.d),A=Math.abs(b.d)+z.halfW-y;z.x-=b.rx*E*A,z.z-=b.rz*E*A;let M=z.vx*b.rx*E+z.vz*b.rz*E;M>0&&(z.vx-=M*b.rx*E*1.3,z.vz-=M*b.rz*E*1.3,Yc(M),z.yawRate-=E*Math.min(1.5,M*.1)),z.vx*=1-.6*i,z.vz*=1-.6*i}}for(let y of r?ge.road.obstaclesNear(z.x,z.z):ge.road.obstaclesNear(k.idx)){if(Math.abs(y.x-z.x)>40||Math.abs(y.z-z.z)>40)continue;let b=y.type==="circle"?Pm(z,y.x,y.z,y.r):Lm(z,y.x,y.z,y.hw,y.hl,y.h);b>0&&Yc(b)}for(let y of wn){if(!y.active)continue;if(y.beepT!=null&&(y.beepT-=i,y.beepT<=0&&(y.beepT=null,Ke.horn(1.3))),y.hurry>0&&(y.hurry-=i),r){let J=y.agent,oe=y.body,_e=z.x-oe.x,q=z.z-oe.z,[ae,ye]=oe.fwd(),de=_e*ae+q*ye,Ne=Math.abs(_e*ye-q*ae),ke=de>0&&de<16&&Ne<3,Fe=!1;for(let ve of wn){if(ve===y||!ve.active||!ve.body)continue;let pe=ve.body.x-oe.x,ie=ve.body.z-oe.z,K=pe*ae+ie*ye;if(K>0&&K<12&&Math.abs(pe*ye-ie*ae)<2.6){Fe=!0;break}}let Ze=ge.road.agentRed(J),te=ke?Math.max(0,Math.abs(z.vf)-1):Fe||Ze?0:J.speed*(y.hurry>0?1.35:1);y.spd=(y.spd==null?J.speed:y.spd)+(te-(y.spd==null?J.speed:y.spd))*Math.min(1,(te<(y.spd||0)?5:1.6)*i);let fe=y.spd,N=J.speed;J.speed=fe,ge.road.advanceAgent(J,i),J.speed=N,oe.x+=(J.x-oe.x)*Math.min(1,10*i),oe.z+=(J.z-oe.z)*Math.min(1,10*i);let Le=J.h-oe.h;for(;Le>Math.PI;)Le-=Math.PI*2;for(;Le<-Math.PI;)Le+=Math.PI*2;if(oe.h+=Le*Math.min(1,10*i),oe.vx=ae*fe,oe.vz=ye*fe,oe.vf=fe,Math.hypot(_e,q)>420){u0(y);continue}Hm(y);for(let ve of y.mesh.userData.wheels)ve.userData.spin.rotation.x-=fe*i/ve.userData.radius;y.mesh.traverse(ve=>{ve.isMesh&&(ve.castShadow=Math.hypot(_e,q)<70)});let he=Bc(z,oe);he>0&&Yc(he);continue}let b=y.body,E=ge.road.nearest(b.x,b.z,y.idx);if(y.idx=E.i,y.s=E.s,y.s<k.s-120||y.s>k.s+520){jm(y,y.s<k.s);continue}let A=y.s>k.s;y.ahead&&!A&&z.vf>2&&ki("pass"),y.ahead=A;let M=ge.road.pointAt(y.s+14+b.vf*.6),w=M.x+M.rx*oi[y.lane],T=M.z+M.rz*oi[y.lane],C=w-b.x,L=T-b.z,H=Math.atan2(-C,-L)-b.h;for(;H>Math.PI;)H-=Math.PI*2;for(;H<-Math.PI;)H+=Math.PI*2;b.steer=_i(-H*2.2,-1,1);let F=1e9,V=Math.abs(o.d-oi[y.lane])<2.4?k.s-y.s:1e9;V>0&&V<F&&(F=V);for(let J of wn)if(J!==y&&J.active&&J.lane===y.lane){let oe=J.s-y.s;oe>0&&oe<F&&(F=oe)}let B=y.target*(y.hurry>0?1.4:1),ne=F<12?0:F<30?Math.min(B,F*.6):B;b.throttle=b.vf<ne?.7:0,b.brake=b.vf>ne+2?.6:0,b.offRoad=Math.abs(E.d)>Yt/2+.6,b.surfaceGrip=b.offRoad?.6:1,b.update(i,45,7,6,!1),Hm(y);for(let J of y.mesh.userData.wheels)J.userData.spin.rotation.x-=b.vf*i/J.userData.radius,J.userData.front&&(J.rotation.y=-b.steerAngle);y.mesh.traverse(J=>{J.isMesh&&(J.castShadow=Math.abs(y.s-k.s)<70)});let se=Bc(z,b);se>0&&Yc(se)}if(!r)for(let y=0;y<wn.length;y++)for(let b=y+1;b<wn.length;b++)wn[y].active&&wn[b].active&&Bc(wn[y].body,wn[b].body);let l=(z.vf-Zt.prevVf)/Math.max(i,.001);Zt.prevVf=z.vf;let h=z.yawRate*z.vf;if(_d(Zt.roll,_i(-h*.011,-.11,.11)-z.vl*.006,i),_d(Zt.pitch,_i(l*.0055,-.05,.05),i),_d(Zt.heave,0,i),z.offRoad!==Zt.wasOff&&(Zt.wasOff=z.offRoad,Math.abs(z.vf)>3&&(Zt.heave.v+=.5,k.shake=Math.max(k.shake,.2),Ke.bump(.25),Hi(25))),Rt.position.set(z.x,Math.max(-.02,Zt.heave.x)+(k.rampY||0)+(k.jumpY||0),z.z),Rt.rotation.y=z.h,Rt.rotation.z=Zt.roll.x,Rt.rotation.x=Zt.pitch.x,z.offRoad){Rt.position.y+=Math.abs(z.vf)>2?Math.sin(ia.elapsedTime*31)*.03:0,k.shake=Math.max(k.shake,_i(Math.abs(z.vf)/20,0,.35)),vd+=i*_i(Math.abs(z.vf)/3,0,10);let y=ge.currentName==="snow"?[.95,.97,1]:ge.currentName==="desert"?[.78,.66,.45]:[.55,.47,.32];for(;vd>=1;){vd-=1;let[b,E]=z.fwd();Jc(z.x-b*(e.len/2-.5),.3,z.z-E*(e.len/2-.5),.9,y)}}for(let y of Rt.userData.wheels)y.userData.spin.rotation.x-=z.vf*i/y.userData.radius,y.userData.front&&(y.rotation.y=-z.steerAngle);Rt.userData.glow.material.opacity=k.boosting?.8:0,xd+=i*(k.totaled?14:k.damage>40?(k.damage-40)/60*8:0);let[u,d]=z.fwd();for(;xd>=1;)xd-=1,Jc(z.x+u*(e.len/2-.6),.9,z.z+d*(e.len/2-.6),k.totaled?1.4:.8);{let y=Math.abs(z.vf),b=z.offRoad?0:Math.max(_i((Math.abs(z.vl)-2.2)/5,0,1),z.brake&&y>14&&!ge.rain?.45:0,k.totaled&&y>3?.6:0),[E,A]=z.right(),M=z.halfL*.62,w=z.halfW-.28;qm.update(b,[[z.x-u*M-E*w,z.z-d*M-A*w],[z.x-u*M+E*w,z.z-d*M+A*w]],E,A)}Md.update(i,Dt.position.x,Dt.position.z,z.vx,z.vz);let f=fm(i,[[z.x,z.z],[z.x+u*1.7,z.z+d*1.7]],(y,b)=>{for(let E=0;E<5;E++)Jc(y,1,b,.5,[1,.85,.3])});if(f){k.combo=ys-k.lastStarT<1.6?k.combo+f:0,k.lastStarT=ys,be.stars+=f,Ke.ping(k.combo),Hi(12),re("starnum").textContent=be.stars;let y=re("starcount");y.classList.remove("pop"),y.offsetWidth,y.classList.add("pop");for(let b=0;b<f;b++)ki("star");k.starsRun=(k.starsRun||0)+f,(k.starsRun%5===0||k.starsRun<5&&f===1)&&Bt.say(`${Um[k.starsRun]||k.starsRun} ${k.starsRun===1?"star":"stars"}!`,{min:1500});for(let b of Vo())gn("NEW STICKER!",`${b.e} ${b.n}`),Ke.fanfare()}let m=Math.max(0,z.vf)*i,v=Math.abs(z.vf)*3.6;if(be.km+=m/1e3,be.worlds[ge.currentName]=(be.worlds[ge.currentName]||0)+m/1e3,ge.night&&(be.nightKm+=m/1e3),v>be.bestKmh&&(be.bestKmh=v),ki("dist",m),ki("speed",v),ki("pos",[z.x,z.z]),k.missionT>0&&(k.missionT-=i,k.missionT<=0&&r0()),sn.cur&&!sn.cur.done){il();let y=sn.target();if(sn.tick(i)==="timeout"&&(gn("TIME'S UP \u23F1\uFE0F","No worries \u2014 just drive there"),Bt.say("Time's up! No worries, just drive there."),il()),y){to.visible=!0,to.position.set(y[0],0,y[1]),to.userData.tick(i,ys);let E=y[0]-z.x,A=y[1]-z.z,M=Math.hypot(E,A),w=y[0],T=y[1];if(r){k.routeT=(k.routeT||0)-i;let H=y[0]+","+y[1],F=k.route?hd(k.route,z.x,z.z,28):null;(k.routeKey!==H||!k.route||k.routeT<=0||F&&F.d>30)&&(k.route=M>25?ge.road.route(z.x,z.z,y[0],y[1]):null,k.routeKey=H,k.routeT=2.5);let V=k.route?hd(k.route,z.x,z.z,28):null;V&&M>30&&(w=V.x,T=V.z),Wo(M>25?k.route:null,z.x,z.z,ys)}let C=Math.atan2(-(w-z.x),-(T-z.z))-z.h;for(;C>Math.PI;)C-=Math.PI*2;for(;C<-Math.PI;)C+=Math.PI*2;let L=M<1e3?Math.round(M/10)*10+" m":(M/1e3).toFixed(1)+" km",U=sn.cur;re("marrow").classList.remove("off"),re("marrow").style.transform=`rotate(${-90-C*180/Math.PI}deg)`,re("mprog").textContent=U.timer!=null?`${Math.floor(U.timer/60)}:${String(Math.ceil(U.timer%60)).padStart(2,"0")} \xB7 ${L}`:L}else to.visible=!1,re("marrow").classList.add("off"),Wo(null)}else to.visible=!1,re("marrow").classList.add("off"),Wo(null);if(k.saveT+=i,k.saveT>10){k.saveT=0,ms();for(let y of Vo())gn("NEW STICKER!",`${y.e} ${y.n}`),Ke.fanfare()}r?(ge.road.ensure(z.x,z.z),K1(),ge.road.tickLights&&k.frameN%10===0&&ge.road.tickLights(ys,z.x,z.z)):ge.road.ensure(k.idx),ge.follow(z.x,z.z,u,d);let g=Math.round(v);H1.textContent=g,G1.style.strokeDashoffset=(258*(1-Math.min(1,g/(Nn.maxKmh||300)))).toFixed(1),V1.textContent=(k.dist/1e3).toFixed(1)+" km";let p=_i(Math.abs(z.vf)/t,0,1),[S,_]=z.right();if(we.cam===0){let y=7.2+p*1.8+e.len*.2;eo.set(z.x-u*y+S*z.vl*.08,2.7+p*.5,z.z-d*y+_*z.vl*.08),jo.set(z.x+u*10,1,z.z+d*10),Dt.position.lerp(eo,Math.min(1,6*i))}else if(we.cam===1){let y=4.8+p*.8+e.len*.15;eo.set(z.x-u*y,1.8+p*.2,z.z-d*y),jo.set(z.x+u*10,.9,z.z+d*10),Dt.position.lerp(eo,Math.min(1,8*i))}else eo.set(z.x+u*(e.len/2-.9),1.15,z.z+d*(e.len/2-.9)),jo.set(z.x+u*40,.9,z.z+d*40),Dt.position.copy(eo);Dt.fov=md(Dt.fov,60+p*14+(k.boosting?8:0),Math.min(1,4*i)),Dt.updateProjectionMatrix(),k.shake=Math.max(0,k.shake-i*1.8);let x=k.shake*.12+p*p*.01+(k.boosting?.02:0);Dt.position.x+=(Math.random()-.5)*x,Dt.position.y+=(Math.random()-.5)*x,k.lookAt&&(Dt.position.set(k.lookAt[2],k.lookAt[3],k.lookAt[4]),jo.set(k.lookAt[0],4,k.lookAt[1])),Dt.lookAt(jo),Dt.rotation.z+=-z.yawRate*.04*_i(Math.abs(z.vf)/20,0,1),Ke.update(Math.abs(z.vf),t,!!z.throttle,k.boosting,z.vl,z.offRoad,i)}else{if(k.menuAngle+=i*.3,!ge.road)return;let n=ge.road.isMap?ge.road.startPose():ge.road.pointAt(40);ge.road.isMap&&(n.fx=-Math.sin(n.h),n.fz=-Math.cos(n.h)),Rt.position.set(n.x,.14,n.z),Rt.rotation.y=n.h+k.menuAngle,Rt.rotation.x=Rt.rotation.z=0,Ms.visible=!0,Ms.position.set(n.x,0,n.z),Ms.rotation.y=n.h+k.menuAngle;let s=4.2+Nn.len*.5;Dt.position.set(n.x+Math.sin(.8)*s,1.7+Nn.len*.08,n.z+Math.cos(.8)*s),Dt.lookAt(n.x,.7,n.z),Dt.fov=md(Dt.fov,42,Math.min(1,4*i)),Dt.updateProjectionMatrix();for(let r of Rt.userData.wheels)r.userData.front&&(r.rotation.y=md(r.rotation.y,0,i*3));Rt.userData.glow.material.opacity=0,ge.road.isMap?ge.road.ensure(n.x,n.z):ge.road.ensure(10),ge.follow(n.x,n.z,n.fx,n.fz),Ke.engine&&Ke.update(0,t,!1,!1),Md.update(i,Dt.position.x,Dt.position.z,0,0)}C1(i)}var Kc=0,yd=0,Qo=3;function $1(i){if(xt!=="drive"||(Kc+=i,yd++,Kc<4))return;let e=yd/Kc;Kc=0,yd=0,e<26&&Qo>0&&(Qo--,Qo===2?Ad=!1:Qo===1?(xn.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),ge.sun.shadow.mapSize.set(1024,1024),ge.sun.shadow.map&&(ge.sun.shadow.map.dispose(),ge.sun.shadow.map=null)):(xn.setPixelRatio(.8),xn.shadowMap.enabled=!1),rl())}var ys=0,Vm=0;function f0(i){if(requestAnimationFrame(f0),bd&&i-Vm<bd-1)return;Vm=i;let e=Math.min(.05,ia.getDelta());xt!=="pause"&&(ys+=e),k1(),Rt&&(ge.road||xt==="menu")&&(xt!=="pause"&&(Z1(e),$1(e)),Ad&&yi?yi.render():xn.render(un,Dt),sl&&B1())}ge.setWorld(we.world);n0();Ym();A1().then(()=>{ta(),Vi(),zd(),Dd()}).catch(i=>{Rd.textContent="Something went wrong: "+i,console.error(i)});Dt.position.set(6,3,7);f0(0);document.addEventListener("visibilitychange",()=>{document.hidden?(At.gas=At.brake=At.boost=!1,na(),Ke.pause(),Bt.stop(),ms()):(xt!=="pause"&&Ke.unpause(),ia.getDelta())});c0();window.__kidcars={G:k,P:be,settings:we,missions:sn,state:()=>xt,hasCar:Vs,body:()=>z,simTime:()=>ys,roadReady:()=>!!ge.road,inputs:()=>({...At}),world:()=>ge,toast:gn,addStarAhead:i=>{let[e,t]=z.fwd();for(let n=0;n<i;n++)Xs(z.x+e*(8+n*4),z.z+t*(8+n*4),"test")},teleport:(i,e)=>{z.x=i,z.z=e,z.vx=z.vz=0,Dt.position.set(i+Math.sin(z.h)*8,2.7,e+Math.cos(z.h)*8)},sleep:()=>{xt==="drive"&&na(),Ke.pause(),Bt.stop(),ms()},lookAt:(i,e,t,n,s)=>{k.lookAt=i==null?null:[i,e,t,n,s]},lockDbg:()=>({held:ws,heldFor:ws?Math.round(performance.now()-Fd):0,state:xt,lock:we.lock,touches:Array.from(Dn.values()),log:nl.slice()}),back:()=>xt==="dua"?(o0(),xt="menu",ol.classList.remove("hidden"),"handled"):xt==="drive"?(na(),"handled"):xt==="pause"?(zd(),"handled"):re("book").classList.contains("hidden")?"exit":(re("book").classList.add("hidden"),"handled")};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
