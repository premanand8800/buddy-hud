(()=>{var cc=0,Xo=1,hc=2;var Zs=1,uc=2,cs=3,pi=0,$t=1,sn=2,Un=0,hs=1,qo=2,Yo=3,Zo=4,dc=5;var Ci=100,fc=101,pc=102,mc=103,gc=104,_c=200,xc=201,vc=202,yc=203,Jo=204,Qo=205,Mc=206,Sc=207,bc=208,Lc=209,wc=210,Ec=211,Tc=212,Ac=213,Rc=214,Dr=0,Nr=1,Ur=2,Ki=3,Fr=4,Or=5,Br=6,kr=7,$o=0,Cc=1,Ic=2,Sn=0,Ko=1,jo=2,el=3,tl=4,nl=5,il=6,sl=7;var rl=300,mi=301,Ii=302,da=303,fa=304,Js=306,zr=1e3,In=1001,Vr=1002,Bt=1003,Pc=1004;var Qs=1005;var Vt=1006,pa=1007;var gi=1008;var rn=1009,al=1010,ol=1011,us=1012,ma=1013,bn=1014,Ln=1015,wn=1016,ga=1017,_a=1018,ds=1020,ll=35902,cl=35899,hl=1021,ul=1022,pn=1023,Pn=1026,_i=1027,dl=1028,xa=1029,xi=1030,va=1031;var ya=1033,$s=33776,Ks=33777,js=33778,er=33779,Ma=35840,Sa=35841,ba=35842,La=35843,wa=36196,Ea=37492,Ta=37496,Aa=37488,Ra=37489,tr=37490,Ca=37491,Ia=37808,Pa=37809,Da=37810,Na=37811,Ua=37812,Fa=37813,Oa=37814,Ba=37815,ka=37816,za=37817,Va=37818,Ha=37819,Ga=37820,Wa=37821,Xa=36492,qa=36494,Ya=36495,Za=36283,Ja=36284,nr=36285,Qa=36286;var Cs=2300,Hr=2301,Ir=2302,Oo=2303,Bo=2400,ko=2401,zo=2402;var Dc=3200;var $a=0,Nc=1,Qn="",Ot="srgb",Is="srgb-linear",Ps="linear",ft="srgb";var Pr=7680;var Uc=519,Fc=512,Oc=513,Bc=514,Ka=515,kc=516,zc=517,ja=518,Vc=519,Hc=35044;var fl="300 es",Mn=2e3,ji=2001;function Ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gc(){let i=Ds("canvas");return i.style.display="block",i}var Hl={},es=null;function pl(...i){let e="THREE."+i.shift();es?es("log",e,...i):console.log(e,...i)}function Wc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Wc(i);let e="THREE."+i.shift();if(es)es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ke(...i){i=Wc(i);let e="THREE."+i.shift();if(es)es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ti(...i){let e=i.join(" ");e in Hl||(Hl[e]=!0,Be(...i))}function Xc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qc={[Dr]:Nr,[Ur]:Br,[Fr]:kr,[Ki]:Or,[Nr]:Dr,[Br]:Ur,[kr]:Fr,[Or]:Ki},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var po=Math.PI/180,Gr=180/Math.PI;function ir(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Ch(i,e){return(i%e+e)%e}function mo(i,e,t){return(1-t)*i+t*e}function ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ze=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],h=r[a+0],f=r[a+1],x=r[a+2],S=r[a+3];if(p!==S||c!==h||l!==f||d!==x){let m=c*h+l*f+d*x+p*S;m<0&&(h=-h,f=-f,x=-x,S=-S,m=-m);let u=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);u=Math.sin(u*M)/A,o=Math.sin(o*M)/A,c=c*u+h*o,l=l*u+f*o,d=d*u+x*o,p=p*u+S*o}else{c=c*u+h*o,l=l*u+f*o,d=d*u+x*o,p=p*u+S*o;let M=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=M,l*=M,d*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+d*p+c*f-l*h,e[t+1]=c*x+d*h+l*p-o*f,e[t+2]=l*x+d*f+o*h-c*p,e[t+3]=d*x-o*p-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),p=o(r/2),h=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*d*p+l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p-h*f*x;break;case"YXZ":this._x=h*d*p+l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p+h*f*x;break;case"ZXY":this._x=h*d*p-l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p-h*f*x;break;case"ZYX":this._x=h*d*p-l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p+h*f*x;break;case"YZX":this._x=h*d*p+l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p-h*f*x;break;case"XZY":this._x=h*d*p-l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p+h*f*x;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*d,this.y=n+c*d+o*l-r*p,this.z=s+c*p+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return go.copy(this).projectOnVector(e),this.sub(go)}reflect(e){return this.sub(go.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},go=new B,Gl=new Nn,He=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],p=n[7],h=n[2],f=n[5],x=n[8],S=s[0],m=s[3],u=s[6],M=s[1],A=s[4],y=s[7],L=s[2],b=s[5],T=s[8];return r[0]=a*S+o*M+c*L,r[3]=a*m+o*A+c*b,r[6]=a*u+o*y+c*T,r[1]=l*S+d*M+p*L,r[4]=l*m+d*A+p*b,r[7]=l*u+d*y+p*T,r[2]=h*S+f*M+x*L,r[5]=h*m+f*A+x*b,r[8]=h*u+f*y+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=d*a-o*l,h=o*c-d*r,f=l*r-a*c,x=t*p+n*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=p*S,e[1]=(s*l-d*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ti("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_o.makeScale(e,t)),this}rotate(e){return Ti("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_o.makeRotation(-e)),this}translate(e,t){return Ti("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_o=new He,Wl=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ih(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ti("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ti("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var nt=Ih();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,Wr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bi===void 0&&(Bi=Ds("canvas")),Bi.width=e.width,Bi.height=e.height;let s=Bi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ds("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ph=0,ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Dh=0,vo=new B,Jt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Vt,a=gi,o=pn,c=rn,l=i.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=ir(),this.name="",this.source=new ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=rl;Jt.DEFAULT_ANISOTROPY=1;var wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],p=c[8],h=c[1],f=c[5],x=c[9],S=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(p-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+S)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,y=(f+1)/2,L=(u+1)/2,b=(d+h)/4,T=(p+S)/4,_=(x+m)/4;return A>y&&A>L?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=T/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(p-S)*(p-S)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(p-S)/M,this.z=(h-d)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xr=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ts(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Xr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ns=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var qr=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Et=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m)}set(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=f+x*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*d,f=c*p,x=l*d,S=l*p;t[0]=h+S*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=f*o-x,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*d,f=c*p,x=l*d,S=l*p;t[0]=h-S*o,t[4]=-a*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*d,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*d,f=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=x*l-f,t[8]=h*l+S,t[1]=c*p,t[5]=S*l+h,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=S-h*p,t[8]=x*p+f,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*p+x,t[10]=h-S*p}else if(e.order==="XZY"){let h=a*c,f=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=h*p+S,t[5]=a*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=S*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Uh)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ei.crossVectors(n,on),ei.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ei.crossVectors(n,on)),ei.normalize(),dr.crossVectors(on,ei),s[0]=ei.x,s[4]=dr.x,s[8]=on.x,s[1]=ei.y,s[5]=dr.y,s[9]=on.y,s[2]=ei.z,s[6]=dr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],p=n[5],h=n[9],f=n[13],x=n[2],S=n[6],m=n[10],u=n[14],M=n[3],A=n[7],y=n[11],L=n[15],b=s[0],T=s[4],_=s[8],w=s[12],R=s[1],F=s[5],O=s[9],G=s[13],P=s[2],X=s[6],K=s[10],J=s[14],le=s[3],Q=s[7],se=s[11],re=s[15];return r[0]=a*b+o*R+c*P+l*le,r[4]=a*T+o*F+c*X+l*Q,r[8]=a*_+o*O+c*K+l*se,r[12]=a*w+o*G+c*J+l*re,r[1]=d*b+p*R+h*P+f*le,r[5]=d*T+p*F+h*X+f*Q,r[9]=d*_+p*O+h*K+f*se,r[13]=d*w+p*G+h*J+f*re,r[2]=x*b+S*R+m*P+u*le,r[6]=x*T+S*F+m*X+u*Q,r[10]=x*_+S*O+m*K+u*se,r[14]=x*w+S*G+m*J+u*re,r[3]=M*b+A*R+y*P+L*le,r[7]=M*T+A*F+y*X+L*Q,r[11]=M*_+A*O+y*K+L*se,r[15]=M*w+A*G+y*J+L*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],p=e[6],h=e[10],f=e[14],x=e[3],S=e[7],m=e[11],u=e[15],M=c*f-l*h,A=o*f-l*p,y=o*h-c*p,L=a*f-l*d,b=a*h-c*d,T=a*p-o*d;return t*(S*M-m*A+u*y)-n*(x*M-m*L+u*b)+s*(x*A-S*L+u*T)-r*(x*y-S*b+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=e[9],h=e[10],f=e[11],x=e[12],S=e[13],m=e[14],u=e[15],M=t*o-n*a,A=t*c-s*a,y=t*l-r*a,L=n*c-s*o,b=n*l-r*o,T=s*l-r*c,_=d*S-p*x,w=d*m-h*x,R=d*u-f*x,F=p*m-h*S,O=p*u-f*S,G=h*u-f*m,P=M*G-A*O+y*F+L*R-b*w+T*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*G-c*O+l*F)*X,e[1]=(s*O-n*G-r*F)*X,e[2]=(S*T-m*b+u*L)*X,e[3]=(h*b-p*T-f*L)*X,e[4]=(c*R-a*G-l*w)*X,e[5]=(t*G-s*R+r*w)*X,e[6]=(m*y-x*T-u*A)*X,e[7]=(d*T-h*y+f*A)*X,e[8]=(a*O-o*R+l*_)*X,e[9]=(n*R-t*O-r*_)*X,e[10]=(x*b-S*y+u*M)*X,e[11]=(p*y-d*b-f*M)*X,e[12]=(o*w-a*F-c*_)*X,e[13]=(t*F-n*w+s*_)*X,e[14]=(S*A-x*L-m*M)*X,e[15]=(d*L-p*A+h*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,p=o+o,h=r*l,f=r*d,x=r*p,S=a*d,m=a*p,u=o*p,M=c*l,A=c*d,y=c*p,L=n.x,b=n.y,T=n.z;return s[0]=(1-(S+u))*L,s[1]=(f+y)*L,s[2]=(x-A)*L,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+u))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(x+A)*T,s[9]=(m-M)*T,s[10]=(1-(h+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let l=1/a,d=1/o,p=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=d,_n.elements[5]*=d,_n.elements[6]*=d,_n.elements[8]*=p,_n.elements[9]*=p,_n.elements[10]*=p,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Mn,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===Mn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ji)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===Mn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===ji)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ki=new B,_n=new Et,Nh=new B(0,0,0),Uh=new B(1,1,1),ei=new B,dr=new B,on=new B,ql=new Et,Yl=new Nn,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-st(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(st(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fh=0,Zl=new B,zi=new Nn,Gn=new Et,fr=new B,Es=new B,Oh=new B,Bh=new Nn,Jl=new B(1,0,0),Ql=new B(0,1,0),$l=new B(0,0,1),Kl={type:"added"},kh={type:"removed"},Vi={type:"childadded",child:null},yo={type:"childremoved",child:null},Xt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new Jn,n=new Nn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new He}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Jl,e)}rotateY(e){return this.rotateOnAxis(Ql,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jl,e)}translateY(e){return this.translateOnAxis(Ql,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Es,fr,this.up):Gn.lookAt(fr,Es,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Gn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kh),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xt.DEFAULT_UP=new B(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},zh={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),u=this._getHandJoint(l,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,x=.005;l.inputState.pinching&&h>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Ch(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Mo(a,r,e+1/3),this.g=Mo(a,r,e),this.b=Mo(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.workingToColorSpace(Wt.copy(this),e),Math.round(st(Wt.r*255,0,255))*65536+Math.round(st(Wt.g*255,0,255))*256+Math.round(st(Wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ot){nt.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(pr);let n=mo(ti.h,pr.h,t),s=mo(ti.s,pr.s,t),r=mo(ti.l,pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Xe;Xe.NAMES=Yc;var Fs=class extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xn=new B,Wn=new B,So=new B,Xn=new B,Hi=new B,Gi=new B,jl=new B,bo=new B,Lo=new B,wo=new B,Eo=new wt,To=new wt,Ao=new wt,ri=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),xn.subVectors(e,t),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){xn.subVectors(s,t),Wn.subVectors(n,t),So.subVectors(e,t);let a=xn.dot(xn),o=xn.dot(Wn),c=xn.dot(So),l=Wn.dot(Wn),d=Wn.dot(So),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(l*c-o*d)*h,x=(a*d-o*c)*h;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Eo.setScalar(0),To.setScalar(0),Ao.setScalar(0),Eo.fromBufferAttribute(e,t),To.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Eo,r.x),a.addScaledVector(To,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(e,t,n,s){return xn.subVectors(n,t),Wn.subVectors(e,t),xn.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,n),Gi.subVectors(r,n),bo.subVectors(e,n);let c=Hi.dot(bo),l=Gi.dot(bo);if(c<=0&&l<=0)return t.copy(n);Lo.subVectors(e,s);let d=Hi.dot(Lo),p=Gi.dot(Lo);if(d>=0&&p<=d)return t.copy(s);let h=c*p-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Hi,a);wo.subVectors(e,r);let f=Hi.dot(wo),x=Gi.dot(wo);if(x>=0&&f<=x)return t.copy(r);let S=f*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Gi,o);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return jl.subVectors(r,s),o=(p-d)/(p-d+(f-x)),t.copy(s).addScaledVector(jl,o);let u=1/(m+S+h);return a=S*u,o=h*u,t.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),gr.subVectors(this.max,Ts),Wi.subVectors(e.a,Ts),Xi.subVectors(e.b,Ts),qi.subVectors(e.c,Ts),ni.subVectors(Xi,Wi),ii.subVectors(qi,Xi),bi.subVectors(Wi,qi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-bi.z,bi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,bi.z,0,-bi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-bi.y,bi.x,0];return!Ro(t,Wi,Xi,qi,gr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Wi,Xi,qi,gr))?!1:(_r.crossVectors(ni,ii),t=[_r.x,_r.y,_r.z],Ro(t,Wi,Xi,qi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,mr=new ai,Wi=new B,Xi=new B,qi=new B,ni=new B,ii=new B,bi=new B,Ts=new B,gr=new B,_r=new B,Li=new B;function Ro(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Li.fromArray(i,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=e.dot(Li),l=t.dot(Li),d=n.dot(Li);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var Ct=new B,xr=new Ze,Vh=0,dn=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),n=en(n,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bs=class extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hh=new ai,As=new B,Co=new B,is=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Co)),this.expandByPoint(As.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gh=0,un=new Et,Io=new Xt,Yi=new B,ln=new ai,Rs=new ai,Ft=new B,Qt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Bs:Os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Io.lookAt(e),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,Rs.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,Rs.max),ln.expandByPoint(Ft)):(ln.expandByPoint(Rs.min),ln.expandByPoint(Rs.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ft.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),Ft.add(Yi)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new B,c[_]=new B;let l=new B,d=new B,p=new B,h=new Ze,f=new Ze,x=new Ze,S=new B,m=new B;function u(_,w,R){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),p.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),d.sub(l),p.sub(l),f.sub(h),x.sub(h);let F=1/(f.x*x.y-x.x*f.y);isFinite(F)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(F),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(F),o[_].add(S),o[w].add(S),o[R].add(S),c[_].add(m),c[w].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,w=M.length;_<w;++_){let R=M[_],F=R.start,O=R.count;for(let G=F,P=F+O;G<P;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new B,y=new B,L=new B,b=new B;function T(_){L.fromBufferAttribute(s,_),b.copy(L);let w=o[_];A.copy(w),A.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(b,w);let F=y.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,F)}for(let _=0,w=M.length;_<w;++_){let R=M[_],F=R.start,O=R.count;for(let G=F,P=F+O;G<P;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,d=new B,p=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){let x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,p=o.normalized,h=new l.constructor(c.length*d),f=0,x=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*d;for(let u=0;u<d;u++)h[x++]=l[f++]}return new dn(h,d,p)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,p=l.length;d<p;d++){let h=l[d],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,h=l.length;p<h;p++){let f=l[p];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Po=new B,Wh=new B,Xh=new He,yn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Po.subVectors(n,t).cross(Wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xh.getNormalMatrix(e),s=this.coplanarPoint(Po).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},qh=0,oi=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=hs,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yn=new B,Do=new B,vr=new B,yr=new B,Yr=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Do.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),yr.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,a=-this.direction.dot(vr),o=yr.dot(this.direction),c=-yr.dot(vr),l=yr.lengthSq(),d=Math.abs(1-a*a),p,h,f,x;if(d>0)if(p=a*c-o,h=a*o-c,x=r*d,p>=0)if(h>=-x)if(h<=x){let S=1/d;p*=S,h*=S,f=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h<=-x?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l):h<=x?(p=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Do).addScaledVector(vr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,p=e.x-a.x,h=e.y-a.y,f=e.z-a.z,x=t.x-a.x,S=t.y-a.y,m=t.z-a.z,u=n.x-a.x,M=n.y-a.y,A=n.z-a.z,y=Math.abs(c),L=Math.abs(l),b=Math.abs(d),T,_,w,R,F,O,G,P,X,K,J,le;if(y>=L&&y>=b?(w=c,O=p,X=x,le=u,c>=0?(T=l,_=d,R=h,F=f,G=S,P=m,K=M,J=A):(T=d,_=l,R=f,F=h,G=m,P=S,K=A,J=M)):L>=b?(w=l,O=h,X=S,le=M,l>=0?(T=d,_=c,R=f,F=p,G=m,P=x,K=A,J=u):(T=c,_=d,R=p,F=f,G=x,P=m,K=u,J=A)):(w=d,O=f,X=m,le=A,d>=0?(T=c,_=l,R=p,F=h,G=x,P=S,K=u,J=M):(T=l,_=c,R=h,F=p,G=S,P=x,K=M,J=u)),w===0)return null;let Q=T/w,se=_/w,re=1/w,Ne=R-Q*O,Pe=F-se*O,dt=G-Q*X,et=P-se*X,at=K-Q*le,j=J-se*le,ne=at*et-j*dt,Ee=Ne*j-Pe*at,Fe=dt*Pe-et*Ne;if(s){if(ne<0||Ee<0||Fe<0)return null}else if((ne<0||Ee<0||Fe<0)&&(ne>0||Ee>0||Fe>0))return null;let Se=ne+Ee+Fe;if(Se===0)return null;let ze=re*(ne*O+Ee*X+Fe*le);return(Se>0?ze<0:ze>0)?null:this.at(ze/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ec=new Et,wi=new Yr,Mr=new is,tc=new B,Sr=new B,br=new B,Lr=new B,No=new B,wr=new B,nc=new B,Er=new B,qe=class extends Xt{constructor(e=new Qt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],p=r[c];d!==0&&(No.fromBufferAttribute(p,e),a?wr.addScaledVector(No,d):wr.addScaledVector(No.sub(t),d))}t.add(wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Mr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Mr,tc)===null||wi.origin.distanceToSquared(tc)>(e.far-e.near)**2))&&(ec.copy(r).invert(),wi.copy(e.ray).applyMatrix4(ec),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=A;y<L;y+=3){let b=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);s=Tr(this,u,e,n,l,d,p,b,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=x,u=S;m<u;m+=3){let M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Tr(this,a,e,n,l,d,p,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=A;y<L;y+=3){let b=y,T=y+1,_=y+2;s=Tr(this,u,e,n,l,d,p,b,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=x,u=S;m<u;m+=3){let M=m,A=m+1,y=m+2;s=Tr(this,a,e,n,l,d,p,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Yh(i,e,t,n,s,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===pi,o),c===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Er);return l<t.near||l>t.far?null:{distance:l,point:Er.clone(),object:i}}function Tr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Sr),i.getVertexPosition(c,br),i.getVertexPosition(l,Lr);let d=Yh(i,e,t,n,Sr,br,Lr,nc);if(d){let p=new B;ri.getBarycoord(nc,Sr,br,Lr,p),s&&(d.uv=ri.getInterpolatedAttribute(s,o,c,l,p,new Ze)),r&&(d.uv1=ri.getInterpolatedAttribute(r,o,c,l,p,new Ze)),a&&(d.normal=ri.getInterpolatedAttribute(a,o,c,l,p,new B),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new B,materialIndex:0};ri.getNormal(Sr,br,Lr,h.normal),d.face=h,d.barycoord=p}return d}var Zr=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,d=Bt,p,h){super(null,a,o,c,l,d,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=new is,Zh=new Ze(.5,.5),Ar=new B,ss=class{constructor(e=new yn,t=new yn,n=new yn,s=new yn,r=new yn,a=new yn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],p=r[5],h=r[6],f=r[7],x=r[8],S=r[9],m=r[10],u=r[11],M=r[12],A=r[13],y=r[14],L=r[15];if(s[0].setComponents(l-a,f-d,u-x,L-M).normalize(),s[1].setComponents(l+a,f+d,u+x,L+M).normalize(),s[2].setComponents(l+o,f+p,u+S,L+A).normalize(),s[3].setComponents(l-o,f-p,u-S,L-A).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,u-m,L-y).normalize();else if(s[4].setComponents(l-c,f-h,u-m,L-y).normalize(),t===Mn)s[5].setComponents(l+c,f+h,u+m,L+y).normalize();else if(t===ji)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=Zh.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends Jt{constructor(e=[],t=mi,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rs=class extends Jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends Jt{constructor(e,t,n=bn,s,r,a,o=Bt,c=Bt,l,d=Pn,p=1){if(d!==Pn&&d!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:p};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jr=class extends li{constructor(e,t=bn,n=mi,s,r,a=Bt,o=Bt,c,l=Pn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ci=class i extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],p=[],h=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function x(S,m,u,M,A,y,L,b,T,_,w){let R=y/T,F=L/_,O=y/2,G=L/2,P=b/2,X=T+1,K=_+1,J=0,le=0,Q=new B;for(let se=0;se<K;se++){let re=se*F-G;for(let Ne=0;Ne<X;Ne++){let Pe=Ne*R-O;Q[S]=Pe*M,Q[m]=re*A,Q[u]=P,l.push(Q.x,Q.y,Q.z),Q[S]=0,Q[m]=0,Q[u]=b>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(Ne/T),p.push(1-se/_),J+=1}}for(let se=0;se<_;se++)for(let re=0;re<T;re++){let Ne=h+re+X*se,Pe=h+re+X*(se+1),dt=h+(re+1)+X*(se+1),et=h+(re+1)+X*se;c.push(Ne,Pe,et),c.push(Pe,dt,et),le+=6}o.addGroup(f,le,w),f+=le,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ai=class i extends Qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new B,d=new Ze;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){let f=n+p/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},nn=class i extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],h=[],f=[],x=0,S=[],m=n/2,u=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function M(){let y=new B,L=new B,b=0,T=(t-e)/n;for(let _=0;_<=r;_++){let w=[],R=_/r,F=R*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,P=G*c+o,X=Math.sin(P),K=Math.cos(P);L.x=F*X,L.y=-R*n+m,L.z=F*K,p.push(L.x,L.y,L.z),y.set(X,T,K).normalize(),h.push(y.x,y.y,y.z),f.push(G,1-R),w.push(x++)}S.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=S[w][_],F=S[w+1][_],O=S[w+1][_+1],G=S[w][_+1];(e>0||w!==0)&&(d.push(R,F,G),b+=3),(t>0||w!==r-1)&&(d.push(F,O,G),b+=3)}l.addGroup(u,b,0),u+=b}function A(y){let L=x,b=new Ze,T=new B,_=0,w=y===!0?e:t,R=y===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),x++;let F=x;for(let O=0;O<=s;O++){let P=O/s*c+o,X=Math.cos(P),K=Math.sin(P);T.x=w*K,T.y=m*R,T.z=w*X,p.push(T.x,T.y,T.z),h.push(0,R,0),b.x=X*.5+.5,b.y=K*.5*R+.5,f.push(b.x,b.y),x++}for(let O=0;O<s;O++){let G=L+O,P=F+O;y===!0?d.push(P,P+1,G):d.push(P+1,P,G),_+=3}l.addGroup(u,_,y===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class i extends nn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qr=class i extends Qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),d(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new B,y=new B,L=new B;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],y),f(t[b+2],L),c(A,y,L,M)}function c(M,A,y,L){let b=L+1,T=[];for(let _=0;_<=b;_++){T[_]=[];let w=M.clone().lerp(y,_/b),R=A.clone().lerp(y,_/b),F=b-_;for(let O=0;O<=F;O++)O===0&&_===b?T[_][O]=w:T[_][O]=w.clone().lerp(R,O/F)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){let R=Math.floor(w/2);w%2===0?(h(T[_][R+1]),h(T[_+1][R]),h(T[_][R])):(h(T[_][R+1]),h(T[_+1][R+1]),h(T[_+1][R]))}}function l(M){let A=new B;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(M),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function d(){let M=new B;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let y=m(M)/2/Math.PI+.5,L=u(M)/Math.PI+.5;a.push(y,1-L)}x(),p()}function p(){for(let M=0;M<a.length;M+=6){let A=a[M+0],y=a[M+2],L=a[M+4],b=Math.max(A,y,L),T=Math.min(A,y,L);b>.9&&T<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,A){let y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function x(){let M=new B,A=new B,y=new B,L=new B,b=new Ze,T=new Ze,_=new Ze;for(let w=0,R=0;w<r.length;w+=9,R+=6){M.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),L.copy(M).add(A).add(y).divideScalar(3);let F=m(L);S(b,R+0,M,F),S(T,R+2,A,F),S(_,R+4,y,F)}}function S(M,A,y,L){L<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Vs=class i extends Qr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hi=class i extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,p=e/o,h=t/c,f=[],x=[],S=[],m=[];for(let u=0;u<d;u++){let M=u*h-a;for(let A=0;A<l;A++){let y=A*p-r;x.push(y,-M,0),S.push(0,0,1),m.push(A/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){let A=M+l*u,y=M+l*(u+1),L=M+1+l*(u+1),b=M+1+l*u;f.push(A,y,b),f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hs=class i extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],p=new B,h=new B,f=[],x=[],S=[],m=[];for(let u=0;u<=n;u++){let M=[],A=u/n,y=a+A*o,L=e*Math.cos(y),b=Math.sqrt(e*e-L*L),T=0;u===0&&a===0?T=.5/t:u===n&&c===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let w=_/t,R=s+w*r;p.x=-b*Math.cos(R),p.y=L,p.z=b*Math.sin(R),x.push(p.x,p.y,p.z),h.copy(p).normalize(),S.push(h.x,h.y,h.z),m.push(w+T,1-A),M.push(l++)}d.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let A=d[u][M+1],y=d[u][M],L=d[u+1][M],b=d[u+1][M+1];(u!==0||a>0)&&f.push(A,y,b),(u!==n-1||c<Math.PI)&&f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fn=class i extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],p=[],h=new B,f=new B,x=new B;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let u=0;u<=s;u++){let M=u/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),x.subVectors(f,h).normalize(),d.push(x.x,x.y,x.z),p.push(u/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let u=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,y=(s+1)*S+m;c.push(u,M,y),c.push(M,A,y)}this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Pi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(ic(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(ic(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Pi(i[t]);for(let s in n)e[s]=n[s]}return e}function ic(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jh(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ml(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Zc={clone:Pi,merge:qt},Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Jh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$r=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},it=class extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kr=class extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jr=class extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ea=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bo,endingEnd:Bo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ko:r=e,o=2*t-n;break;case zo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ko:a=e,c=2*n-t;break;case zo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),S=x*x,m=S*x,u=-h*m+2*h*S-h*x,M=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*x+1,A=(-1-f)*m+(1.5+f)*S+.5*x,y=f*m-f*S;for(let L=0;L!==o;++L)r[L]=u*a[d+L]+M*a[l+L]+A*a[c+L]+y*a[p+L];return r}},ta=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),p=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*d;return r}},na=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ia=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(s-t),S=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*x;return r}let h=o*2,f=e-1;for(let x=0;x!==o;++x){let S=a[l+x],m=a[c+x],u=f*h+x*2,M=p[u],A=p[u+1],y=e*h+x*2,L=d[y],b=d[y+1],T=jh(n,t,M,L,s);r[x]=Jc(T,S,A,b,m)}return r}};function Jc(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Kh(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function jh(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Jc(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Kh(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zi(t,this.TimeBufferType),this.values=Zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zi(e.times,Array),values:Zi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Uo(e.settings)&&(n.settings={inTangents:Zi(e.settings.inTangents,Array),outTangents:Zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ea(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ia(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Ir:t=this.InterpolantFactoryMethodSmooth;break;case Oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Ir;case this.InterpolantFactoryMethodBezier:return Oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Uo(this.settings)&&(sc(this.settings.inTangents,e),sc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Rh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ir,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,h=p-n,f=p+n;for(let x=0;x!==n;++x){let S=t[p+x];if(S!==t[h+x]||S!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Uo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function sc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Hr;var di=class extends hn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Cs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};sa.prototype.ValueTypeName="color";var ra=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="number";var aa=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)Nn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gs=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}};Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(e,t,n){super(e,t,n)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Cs;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends hn{constructor(e,t,n,s){super(e,t,n,s)}};oa.prototype.ValueTypeName="vector";var la=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=l.length;p<h;p+=2){let f=l[p],x=l[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qc=new la,ca=class{constructor(e){this.manager=e!==void 0?e:Qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ws=class extends as{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fo=new Et,rc=new B,ac=new B,Xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ss,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Fo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rr=new B,Cr=new Nn,Cn=new B,qs=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rr,Cr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rr,Cr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rr,Cr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},si=new B,oc=new Ze,lc=new Ze,zt=class extends qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,oc,lc),t.subVectors(lc,oc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vo=class extends Xs{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},Ys=class extends as{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Vo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},os=class extends qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ho=class extends Xs{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ji=-90,Qi=1,ha=class extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Ji,Qi,e,t);s.layers=this.layers,this.add(s);let r=new zt(Ji,Qi,e,t);r.layers=this.layers,this.add(r);let a=new zt(Ji,Qi,e,t);a.layers=this.layers,this.add(a);let o=new zt(Ji,Qi,e,t);o.layers=this.layers,this.add(o);let c=new zt(Ji,Qi,e,t);c.layers=this.layers,this.add(c);let l=new zt(Ji,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ua=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",eu=new RegExp("["+gl+"]","g"),_l="[^"+gl+"]",tu="[^"+gl.replace("\\.","")+"]",nu=/((?:WC+[\/:])*)/.source.replace("WC",_l),iu=/(WCOD+)?/.source.replace("WCOD",tu),su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),ru=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),au=new RegExp("^"+nu+iu+su+ru+"$"),ou=["material","materials","bones","map"],Go=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eu,"")}static parseTrackName(e){let t=au.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ou.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Go;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tm=new Float32Array(1);var Wo=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function xl(i,e,t,n){let s=lu(n);switch(t){case hl:return i*e;case dl:return i*e/s.components*s.byteLength;case xa:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case va:return i*e*2/s.components*s.byteLength;case ul:return i*e*3/s.components*s.byteLength;case pn:return i*e*4/s.components*s.byteLength;case ya:return i*e*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:case La:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case ba:return Math.max(i,8)*Math.max(e,8)/2;case wa:case Ea:case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case tr:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nr:case Qa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lu(i){switch(i){case rn:case al:return{byteLength:1,components:1};case us:case ol:case wn:return{byteLength:2,components:1};case ga:case _a:return{byteLength:2,components:4};case bn:case ma:case Ln:return{byteLength:4,components:1};case ll:case cl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hu(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<p.length;f++){let x=p[h],S=p[f];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,p[h]=S)}p.length=h+1;for(let f=0,x=p.length;f<x;f++){let S=p[f];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
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
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
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
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lu=`#ifdef USE_IRIDESCENCE
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
#endif`,wu=`#ifdef USE_BUMPMAP
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Du=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nu=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Uu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ou=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
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
}`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,cd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,of=`#ifdef USE_TRANSMISSION
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
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ff=`uniform sampler2D t2D;
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
}`,pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
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
}`,vf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yf=`#define DISTANCE
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
}`,Mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Af=`#define LAMBERT
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
}`,Rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Cf=`#define MATCAP
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
}`,If=`#define MATCAP
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
}`,Pf=`#define NORMAL
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
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
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
}`,Uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Ff=`#define STANDARD
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
}`,Of=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Bf=`#define TOON
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
}`,kf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,zf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Hf=`#include <common>
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
}`,Gf=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Wf=`uniform float rotation;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:uu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:_u,aomap_pars_fragment:xu,batching_pars_vertex:vu,batching_vertex:yu,begin_vertex:Mu,beginnormal_vertex:Su,bsdfs:bu,iridescence_fragment:Lu,bumpmap_pars_fragment:wu,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:Au,clipping_planes_vertex:Ru,color_fragment:Cu,color_pars_fragment:Iu,color_pars_vertex:Pu,color_vertex:Du,common:Nu,cube_uv_reflection_fragment:Uu,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Ou,displacementmap_vertex:Bu,emissivemap_fragment:ku,emissivemap_pars_fragment:zu,colorspace_fragment:Vu,colorspace_pars_fragment:Hu,envmap_fragment:Gu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:id,envmap_vertex:Yu,fog_vertex:Zu,fog_pars_vertex:Ju,fog_fragment:Qu,fog_pars_fragment:$u,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:ju,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,lightprobes_pars_fragment:fd,logdepthbuf_fragment:pd,logdepthbuf_pars_fragment:md,logdepthbuf_pars_vertex:gd,logdepthbuf_vertex:_d,map_fragment:xd,map_pars_fragment:vd,map_particle_fragment:yd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:bd,morphinstance_vertex:Ld,morphcolor_vertex:wd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:Ad,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Id,normal_pars_vertex:Pd,normal_vertex:Dd,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Fd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Bd,opaque_fragment:kd,packing:zd,premultiplied_alpha_fragment:Vd,project_vertex:Hd,dithering_fragment:Gd,dithering_pars_fragment:Wd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:qd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:Zd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:$d,skinning_pars_vertex:Kd,skinning_vertex:jd,skinnormal_vertex:ef,specularmap_fragment:tf,specularmap_pars_fragment:nf,tonemapping_fragment:sf,tonemapping_pars_fragment:rf,transmission_fragment:af,transmission_pars_fragment:of,uv_pars_fragment:lf,uv_pars_vertex:cf,uv_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:ff,backgroundCube_vert:pf,backgroundCube_frag:mf,cube_vert:gf,cube_frag:_f,depth_vert:xf,depth_frag:vf,distance_vert:yf,distance_frag:Mf,equirect_vert:Sf,equirect_frag:bf,linedashed_vert:Lf,linedashed_frag:wf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:Af,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:If,meshnormal_vert:Pf,meshnormal_frag:Df,meshphong_vert:Nf,meshphong_frag:Uf,meshphysical_vert:Ff,meshphysical_frag:Of,meshtoon_vert:Bf,meshtoon_frag:kf,points_vert:zf,points_frag:Vf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Wf,sprite_frag:Xf},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},On={basic:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:qt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:qt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:qt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:qt([ye.points,ye.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:qt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:qt([ye.common,ye.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:qt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:qt([ye.sprite,ye.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:qt([ye.common,ye.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:qt([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};On.physical={uniforms:qt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var eo={r:0,b:0,g:0},qf=new Et,vh=new He;vh.set(-1,0,0,0,1,0,0,0,1);function Yf(i,e,t,n,s,r){let a=new Xe(0),o=s===!0?0:1,c,l,d=null,p=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(M){let A=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===Js)?(l===void 0&&(l=new qe(new ci(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Pi(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(vh),l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ft,(d!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new qe(new hi(2,2),new cn({name:"BackgroundMaterial",uniforms:Pi(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(eo,ml(i)),t.buffers.color.setClear(eo.r,eo.g,eo.b,A,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:S,dispose:u}}function Zf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(F,O,G,P,X){let K=!1,J=p(F,P,G,O);r!==J&&(r=J,l(r.object)),K=f(F,P,G,X),K&&x(F,P,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(F,O,G,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function d(F){return i.deleteVertexArray(F)}function p(F,O,G,P){let X=P.wireframe===!0,K=n[O.id];K===void 0&&(K={},n[O.id]=K);let J=F.isInstancedMesh===!0?F.id:0,le=K[J];le===void 0&&(le={},K[J]=le);let Q=le[G.id];Q===void 0&&(Q={},le[G.id]=Q);let se=Q[X];return se===void 0&&(se=h(c()),Q[X]=se),se}function h(F){let O=[],G=[],P=[];for(let X=0;X<t;X++)O[X]=0,G[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:P,object:F,attributes:{},index:null}}function f(F,O,G,P){let X=r.attributes,K=O.attributes,J=0,le=G.getAttributes();for(let Q in le)if(le[Q].location>=0){let re=X[Q],Ne=K[Q];if(Ne===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(Ne=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(Ne=F.instanceColor)),re===void 0||re.attribute!==Ne||Ne&&re.data!==Ne.data)return!0;J++}return r.attributesNum!==J||r.index!==P}function x(F,O,G,P){let X={},K=O.attributes,J=0,le=G.getAttributes();for(let Q in le)if(le[Q].location>=0){let re=K[Q];re===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(re=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(re=F.instanceColor));let Ne={};Ne.attribute=re,re&&re.data&&(Ne.data=re.data),X[Q]=Ne,J++}r.attributes=X,r.attributesNum=J,r.index=P}function S(){let F=r.newAttributes;for(let O=0,G=F.length;O<G;O++)F[O]=0}function m(F){u(F,0)}function u(F,O){let G=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;G[F]=1,P[F]===0&&(i.enableVertexAttribArray(F),P[F]=1),X[F]!==O&&(i.vertexAttribDivisor(F,O),X[F]=O)}function M(){let F=r.newAttributes,O=r.enabledAttributes;for(let G=0,P=O.length;G<P;G++)O[G]!==F[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(F,O,G,P,X,K,J){J===!0?i.vertexAttribIPointer(F,O,G,X,K):i.vertexAttribPointer(F,O,G,P,X,K)}function y(F,O,G,P){S();let X=P.attributes,K=G.getAttributes(),J=O.defaultAttributeValues;for(let le in K){let Q=K[le];if(Q.location>=0){let se=X[le];if(se===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),se!==void 0){let re=se.normalized,Ne=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;let dt=Pe.buffer,et=Pe.type,at=Pe.bytesPerElement,j=et===i.INT||et===i.UNSIGNED_INT||se.gpuType===ma;if(se.isInterleavedBufferAttribute){let ne=se.data,Ee=ne.stride,Fe=se.offset;if(ne.isInstancedInterleavedBuffer){for(let Se=0;Se<Q.locationSize;Se++)u(Q.location+Se,ne.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Se=0;Se<Q.locationSize;Se++)m(Q.location+Se);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Se=0;Se<Q.locationSize;Se++)A(Q.location+Se,Ne/Q.locationSize,et,re,Ee*at,(Fe+Ne/Q.locationSize*Se)*at,j)}else{if(se.isInstancedBufferAttribute){for(let ne=0;ne<Q.locationSize;ne++)u(Q.location+ne,se.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ne=0;ne<Q.locationSize;ne++)m(Q.location+ne);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let ne=0;ne<Q.locationSize;ne++)A(Q.location+ne,Ne/Q.locationSize,et,re,Ne*at,Ne/Q.locationSize*ne*at,j)}}else if(J!==void 0){let re=J[le];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(Q.location,re);break;case 3:i.vertexAttrib3fv(Q.location,re);break;case 4:i.vertexAttrib4fv(Q.location,re);break;default:i.vertexAttrib1fv(Q.location,re)}}}}M()}function L(){w();for(let F in n){let O=n[F];for(let G in O){let P=O[G];for(let X in P){let K=P[X];for(let J in K)d(K[J].object),delete K[J];delete P[X]}}delete n[F]}}function b(F){if(n[F.id]===void 0)return;let O=n[F.id];for(let G in O){let P=O[G];for(let X in P){let K=P[X];for(let J in K)d(K[J].object),delete K[J];delete P[X]}}delete n[F.id]}function T(F){for(let O in n){let G=n[O];for(let P in G){let X=G[P];if(X[F.id]===void 0)continue;let K=X[F.id];for(let J in K)d(K[J].object),delete K[J];delete X[F.id]}}}function _(F){for(let O in n){let G=n[O],P=F.isInstancedMesh===!0?F.id:0,X=G[P];if(X!==void 0){for(let K in X){let J=X[K];for(let le in J)d(J[le].object),delete J[le];delete X[K]}delete G[P],Object.keys(G).length===0&&delete n[O]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function Jf(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==rn&&T!==Ln&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(Be("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:L,samples:b}}function $f(i){let e=this,t=null,n=0,s=!1,r=!1,a=new yn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||s;return s=h,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,f){let x=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||x===null||x.length===0||r&&!m)r?d(null):l();else{let M=r?0:n,A=M*4,y=u.clippingState||null;c.value=y,y=d(x,h,A,f);for(let L=0;L!==A;++L)y[L]=t[L];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,f,x){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=c.value,x!==!0||m===null){let u=f+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,y=f;A!==S;++A,y+=4)a.copy(p[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ps=4,Kf=6,jf=20,ep=256,sr=new os,$c=new Xe,vl=null,yl=0,Ml=0,Sl=!1,tp=new B,Di=new B,no=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=tp}=r;vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,yl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:wn,format:pn,colorSpace:Is,depthBuffer:!1},s=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=np(r)),this._blurMaterial=sp(r,e,t),this._ggxMaterial=ip(r,e,t)}return s}_compileMaterial(e){let t=new qe(new Qt,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,n,s,r){let c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor($c),p.toneMapping=Sn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new ci,new Ht({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,u=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,u=!0):(m.color.copy($c),u=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[A],r.y,r.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[A]));let L=this._cubeSize;fs(s,y*L,A>2?L:0,L,L),p.setRenderTarget(s),u&&p.render(S,c),p.render(e,c)}p.toneMapping=f,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mi||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;fs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,sr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),h=l*1.25,f=p*h,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-ps?n-x+ps:0),u=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,fs(r,m,u,3*S,2*S),s.setRenderTarget(r),s.render(o,sr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,fs(e,m,u,3*S,2*S),s.setRenderTarget(e),s.render(o,sr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-ps?s-this._lodMax+ps:0),h=4*(this._cubeSize-d);fs(t,p,h,3*d,2*d),a.setRenderTarget(t),a.render(c,sr)}};function np(i){let e=[],t=[],n=i,s=i-ps+1+Kf;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,f=3,x=new Float32Array(f*h*p),S=new Float32Array(f*h*p);for(let u=0;u<p;u++){let M=u%3*2/3-1,A=u>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(y,f*h*u);for(let L=0;L<h;L++){let b=d[L*2]*2-1,T=d[L*2+1]*2-1;u===0?Di.set(1,T,b):u===1?Di.set(-b,1,-T):u===2?Di.set(-b,T,1):u===3?Di.set(-1,T,-b):u===4?Di.set(-b,-1,T):Di.set(b,T,-1),Di.toArray(S,(u*h+L)*f)}}let m=new Qt;m.setAttribute("position",new dn(x,f)),m.setAttribute("outputDirection",new dn(S,f)),t.push(new qe(m,null)),n>ps&&n--}return{lodMeshes:t,sizeLods:e}}function Kc(i,e,t){let n=new tn(i,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ip(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ep,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function sp(i,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:jf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ro(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function jc(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function eh(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var io=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ks(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:Un});r.uniforms.tEquirect.value=t;let a=new qe(s,r),o=t.minFilter;return t.minFilter===gi&&(t.minFilter=Vt),new ha(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function rp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===da||f===fa)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let S=new io(x.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,x=f===da||f===fa,S=f===mi||f===Ii;if(x||S){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new no(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return x&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new no(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===da?h.mapping=mi:f===fa&&(h.mapping=Ii),h}function c(h){let f=0,x=6;for(let S=0;S<x;S++)h[S]!==void 0&&f++;return f===x}function l(h){let f=h.target;f.removeEventListener("dispose",l);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function ap(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ti("WebGLRenderer: "+n+" extension not supported."),s}}}function op(i,e,t,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(p){let h=p.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(p){let h=[],f=p.index,x=p.attributes.position,S=0;if(x===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let A=0,y=M.length;A<y;A+=3){let L=M[A+0],b=M[A+1],T=M[A+2];h.push(L,b,b,T,T,L)}}else{let M=x.array;S=x.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let L=A+0,b=A+1,T=A+2;h.push(L,b,b,T,T,L)}}let m=new(x.count>=65535?Bs:Os)(h,1);m.version=S;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function d(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function lp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function l(p,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,p*a,f),t.update(h,n,f))}function d(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function cp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hp(i,e,t){let n=new WeakMap,s=new wt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let y=o.attributes.position.count*A,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*L*4*p),T=new Ns(b,y,L,p);T.type=Ln,T.needsUpdate=!0;let _=A*4;for(let R=0;R<p;R++){let F=m[R],O=u[R],G=M[R],P=y*L*4*R;for(let X=0;X<F.count;X++){let K=X*_;f===!0&&(s.fromBufferAttribute(F,X),b[P+K+0]=s.x,b[P+K+1]=s.y,b[P+K+2]=s.z,b[P+K+3]=0),x===!0&&(s.fromBufferAttribute(O,X),b[P+K+4]=s.x,b[P+K+5]=s.y,b[P+K+6]=s.z,b[P+K+7]=0),S===!0&&(s.fromBufferAttribute(G,X),b[P+K+8]=s.x,b[P+K+9]=s.y,b[P+K+10]=s.z,b[P+K+11]=G.itemSize===4?s.w:1)}}h={count:p,texture:T,size:new Ze(y,L)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function up(i,e,t,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var dp={[Ko]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[el]:"CINEON_TONE_MAPPING",[tl]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function fp(i,e,t,n,s,r){let a=new tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qt;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new $r({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new qe(l,d),h=new os(-1,1,1,-1,0,1),f=null,x=null,S=!1,m,u=null,M=[],A=!1;this.setSize=function(y,L){a.setSize(y,L),o!==null&&o.setSize(y,L),c!==null&&c.setSize(y,L);for(let b=0;b<M.length;b++){let T=M[b];T.setSize&&T.setSize(y,L)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let L=a.width,b=a.height;M.length>0&&o===null&&(o=new tn(L,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new tn(L,b,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){let _=M[T];_.setSize&&_.setSize(L,b)}},this.begin=function(y,L){if(S||y.toneMapping===Sn&&M.length===0)return!1;if(u=L,L!==null){let b=L.width,T=L.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Sn,!0},this.hasRenderPass=function(){return A},this.end=function(y,L){y.toneMapping=m,S=!0;let b=a,T=o;for(let _=0;_<M.length;_++){let w=M[_];w.enabled!==!1&&(w.render(y,T,b,L),w.needsSwap!==!1&&(b=T,T=T===o?c:o))}if(f!==y.outputColorSpace||x!==y.toneMapping){f=y.outputColorSpace,x=y.toneMapping,d.defines={},nt.getTransfer(f)===ft&&(d.defines.SRGB_TRANSFER="");let _=dp[x];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(u),y.render(p,h),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var yh=new Jt,wl=new li(1,1),Mh=new Ns,Sh=new qr,bh=new ks,th=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=nh[e];t===void 0&&(t=new Int32Array(e),nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function gp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function _p(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function xp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Nt(t,n)}}function vp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Nt(t,n)}}function yp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Nt(t,n)}}function Mp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Lp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function wp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ep(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Rp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=t.isReversedDepthBuffer()?ja:Ka,r=wl):r=yh,t.setTexture2D(e||r,s)}function Cp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sh,s)}function Ip(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bh,s)}function Pp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mh,s)}function Dp(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return xp;case 35675:return vp;case 35676:return yp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return bp;case 35669:case 35673:return Lp;case 5125:return wp;case 36294:return Ep;case 36295:return Tp;case 36296:return Ap;case 35678:case 36198:case 36298:case 36306:case 35682:return Rp;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Pp}}function Np(i,e){i.uniform1fv(this.addr,e)}function Up(i,e){let t=gs(e,this.size,2);i.uniform2fv(this.addr,t)}function Fp(i,e){let t=gs(e,this.size,3);i.uniform3fv(this.addr,t)}function Op(i,e){let t=gs(e,this.size,4);i.uniform4fv(this.addr,t)}function Bp(i,e){let t=gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kp(i,e){let t=gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zp(i,e){let t=gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vp(i,e){i.uniform1iv(this.addr,e)}function Hp(i,e){i.uniform2iv(this.addr,e)}function Gp(i,e){i.uniform3iv(this.addr,e)}function Wp(i,e){i.uniform4iv(this.addr,e)}function Xp(i,e){i.uniform1uiv(this.addr,e)}function qp(i,e){i.uniform2uiv(this.addr,e)}function Yp(i,e){i.uniform3uiv(this.addr,e)}function Zp(i,e){i.uniform4uiv(this.addr,e)}function Jp(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=wl:a=yh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Qp(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Sh,r[a])}function $p(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||bh,r[a])}function Kp(i,e,t){let n=this.cache,s=e.length,r=ao(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Mh,r[a])}function jp(i){switch(i){case 5126:return Np;case 35664:return Up;case 35665:return Fp;case 35666:return Op;case 35674:return Bp;case 35675:return kp;case 35676:return zp;case 5124:case 35670:return Vp;case 35667:case 35671:return Hp;case 35668:case 35672:return Gp;case 35669:case 35673:return Wp;case 5125:return Xp;case 36294:return qp;case 36295:return Yp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Kp}}var El=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dp(t.type)}},Tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jp(t.type)}},Al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function e0(i,e,t){let n=i.name,s=n.length;for(bl.lastIndex=0;;){let r=bl.exec(n),a=bl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ah(t,l===void 0?new El(o,i,e):new Tl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Al(o),ah(t,p)),t=p}}}var ms=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);e0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function oh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var t0=37297,n0=0;function i0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var lh=new He;function s0(i){nt._getMatrix(lh,nt.workingColorSpace,i);let e=`mat3( ${lh.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ch(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+i0(i.getShaderSource(e),o)}else return r}function r0(i,e){let t=s0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var a0={[Ko]:"Linear",[jo]:"Reinhard",[el]:"Cineon",[tl]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function o0(i,e){let t=a0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var to=new B;function l0(){nt.getLuminanceCoefficients(to);let i=to.x.toFixed(4),e=to.y.toFixed(4),t=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function h0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ar(i){return i!==""}function hh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(d0,p0)}var f0=new Map;function p0(i,e){let t=Je[e];if(t===void 0){let n=f0.get(e);if(n!==void 0)t=Je[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Rl(t)}var m0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(i){return i.replace(m0,g0)}function g0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var _0={[Zs]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function x0(i){return _0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var v0={[mi]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE_UV"};function y0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":v0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var M0={[Ii]:"ENVMAP_MODE_REFRACTION"};function S0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":M0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b0={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Cc]:"ENVMAP_BLENDING_MIX",[Ic]:"ENVMAP_BLENDING_ADD"};function L0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":b0[i.combine]||"ENVMAP_BLENDING_NONE"}function w0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=x0(t),l=y0(t),d=S0(t),p=L0(t),h=w0(t),f=c0(t),x=h0(r),S=s.createProgram(),m,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),u.length>0&&(u+=`
`)):(m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),u=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Je.tonemapping_pars_fragment:"",t.toneMapping!==Sn?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,r0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Rl(a),a=hh(a,t),a=uh(a,t),o=Rl(o),o=hh(o,t),o=uh(o,t),a=dh(a),o=dh(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=M+m+a,y=M+u+o,L=oh(s,s.VERTEX_SHADER,A),b=oh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,L),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(F){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(L)||"",P=s.getShaderInfoLog(b)||"",X=O.trim(),K=G.trim(),J=P.trim(),le=!0,Q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,L,b);else{let se=ch(s,L,"vertex"),re=ch(s,b,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+se+`
`+re)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(K===""||J==="")&&(Q=!1);Q&&(F.diagnostics={runnable:le,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:J,prefix:u}})}s.deleteShader(L),s.deleteShader(b),_=new ms(s,S),w=u0(s,S)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,t0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=b,this}var T0=0,Cl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Il(e),t.set(e,n)),n}},Il=class{constructor(e){this.id=T0++,this.code=e,this.usedTimes=0}};function A0(i){return i===xi||i===tr||i===nr}function R0(i,e,t,n,s,r){let a=new Us,o=new Cl,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,w,R,F,O,G){let P=F.fog,X=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,le=e.get(_.envMap||K,J),Q=le&&le.mapping===Js?le.image.height:null,se=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=re!==void 0?re.length:0,Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let dt,et,at,j;if(se){let lt=On[se];dt=lt.vertexShader,et=lt.fragmentShader}else{dt=_.vertexShader,et=_.fragmentShader;let lt=o.getVertexShaderStage(_),$e=o.getFragmentShaderStage(_);o.update(_,lt,$e),at=lt.id,j=$e.id}let ne=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,ze=!!_.map,Tt=!!_.matcap,Ye=!!le,Qe=!!_.aoMap,ot=!!_.lightMap,We=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,yt=!!_.displacementMap,Rt=!!_.emissiveMap,Mt=!!_.metalnessMap,gt=!!_.roughnessMap,D=_.anisotropy>0,At=_.clearcoat>0,rt=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,k=_.sheen>0,W=_.transmission>0,Y=D&&!!_.anisotropyMap,ce=At&&!!_.clearcoatMap,ue=At&&!!_.clearcoatNormalMap,Z=At&&!!_.clearcoatRoughnessMap,te=g&&!!_.iridescenceMap,me=g&&!!_.iridescenceThicknessMap,Ie=k&&!!_.sheenColorMap,de=k&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Ce=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Ve=W&&!!_.transmissionMap,I=W&&!!_.thicknessMap,_e=!!_.gradientMap,ee=!!_.alphaMap,pe=_.alphaTest>0,Me=!!_.alphaHash,oe=!!_.extensions,De=Sn;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(De=i.toneMapping);let Ae={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:dt,fragmentShader:et,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Tt,envMap:Ye,envMapMode:Ye&&le.mapping,envMapCubeUVHeight:Q,aoMap:Qe,lightMap:ot,bumpMap:We,normalMap:vt,displacementMap:yt,emissiveMap:Rt,normalMapObjectSpace:vt&&_.normalMapType===Nc,normalMapTangentSpace:vt&&_.normalMapType===$a,packedNormalMap:vt&&_.normalMapType===$a&&A0(_.normalMap.format),metalnessMap:Mt,roughnessMap:gt,anisotropy:D,anisotropyMap:Y,clearcoat:At,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Z,dispersion:rt,retroreflection:E,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:me,sheen:k,sheenColorMap:Ie,sheenRoughnessMap:de,specularMap:ge,specularColorMap:Ce,specularIntensityMap:Ue,transmission:W,transmissionMap:Ve,thicknessMap:I,gradientMap:_e,opaque:_.transparent===!1&&_.blending===hs&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:Me,combine:_.combine,mapUv:ze&&x(_.map.channel),aoMapUv:Qe&&x(_.aoMap.channel),lightMapUv:ot&&x(_.lightMap.channel),bumpMapUv:We&&x(_.bumpMap.channel),normalMapUv:vt&&x(_.normalMap.channel),displacementMapUv:yt&&x(_.displacementMap.channel),emissiveMapUv:Rt&&x(_.emissiveMap.channel),metalnessMapUv:Mt&&x(_.metalnessMap.channel),roughnessMapUv:gt&&x(_.roughnessMap.channel),anisotropyMapUv:Y&&x(_.anisotropyMap.channel),clearcoatMapUv:ce&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(_.sheenRoughnessMap.channel),specularMapUv:ge&&x(_.specularMap.channel),specularColorMapUv:Ce&&x(_.specularColorMap.channel),specularIntensityMapUv:Ue&&x(_.specularIntensityMap.channel),transmissionMapUv:Ve&&x(_.transmissionMap.channel),thicknessMapUv:I&&x(_.thicknessMap.channel),alphaMapUv:ee&&x(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||D),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ze||ee),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ft,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===sn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(u(w,_),M(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function u(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let w=f[_.type],R;if(w){let F=On[w];R=Zc.clone(F.uniforms)}else R=_.uniforms;return R}function y(_,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new E0(i,w,_,s),l.push(R),d.set(w,R)),R}function L(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:L,releaseShaderCache:b,programs:l,dispose:T}}function C0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ph(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,S,m,u){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:u},i[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=x,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=u),e++,M}function c(h,f,x,S,m,u,M){M.reversedDepth===!0&&(m=-m);let A=o(h,f,x,S,m,u);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function l(h,f,x,S,m,u){let M=o(h,f,x,S,m,u);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function d(h,f){t.length>1&&t.sort(h||I0),n.length>1&&n.sort(f||ph),s.length>1&&s.sort(f||ph)}function p(){for(let h=e,f=i.length;h<f;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function P0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new mh,i.set(n,[a])):s>=r.length?(a=new mh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function D0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function N0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i){let e=new D0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new Et,a=new Et;function o(l){let d=0,p=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,x=0,S=0,m=0,u=0,M=0,A=0,y=0,L=0,b=0,T=0,_=0,w=0,R=0;l.sort(F0);for(let O=0,G=l.length;O<G;O++){let P=l[O],X=P.color,K=P.intensity,J=P.distance,le=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===xi?le=P.shadow.map.texture:le=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=X.r*K,p+=X.g*K,h+=X.b*K;else if(P.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(P.sh.coefficients[Q],K);R++}else if(P.isSunLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let se=P.shadow,re=t.get(P);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=le;let Ne=se.getViewportCount();for(let Pe=0;Pe<Ne;Pe++)n.sunShadowMatrix[S+Pe]=se.getMatrix(Pe),n.sunShadowCascade[S+Pe]=se._cascadeData[Pe];S+=Ne,x++}n.sun[f]=Q,f++}else if(P.isDirectionalLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let se=P.shadow,re=t.get(P);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=P.shadow.matrix,L++}n.directional[m]=Q,m++}else if(P.isSpotLight){let Q=e.get(P);Q.position.setFromMatrixPosition(P.matrixWorld),Q.color.copy(X).multiplyScalar(K),Q.distance=J,Q.coneCos=Math.cos(P.angle),Q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Q.decay=P.decay,n.spot[M]=Q;let se=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,se.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=se.matrix,P.castShadow){let re=t.get(P);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=le,T++}M++}else if(P.isRectAreaLight){let Q=e.get(P);Q.color.copy(X).multiplyScalar(K),Q.halfWidth.set(P.width*.5,0,0),Q.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=Q,A++}else if(P.isPointLight){let Q=e.get(P);if(Q.color.copy(P.color).multiplyScalar(P.intensity),Q.distance=P.distance,Q.decay=P.decay,P.castShadow){let se=P.shadow,re=t.get(P);re.shadowIntensity=se.intensity,re.shadowBias=se.bias,re.shadowNormalBias=se.normalBias,re.shadowRadius=se.radius,re.shadowMapSize=se.mapSize,re.shadowCameraNear=se.camera.near,re.shadowCameraFar=se.camera.far,n.pointShadow[u]=re,n.pointShadowMap[u]=le,n.pointShadowMatrix[u]=P.shadow.matrix,b++}n.point[u]=Q,u++}else if(P.isHemisphereLight){let Q=e.get(P);Q.skyColor.copy(P.color).multiplyScalar(K),Q.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[y]=Q,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==u||F.spotLength!==M||F.rectAreaLength!==A||F.hemiLength!==y||F.numSunShadows!==x||F.numDirectionalShadows!==L||F.numPointShadows!==b||F.numSpotShadows!==T||F.numSpotMaps!==_||F.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=u,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,F.sunLength=f,F.directionalLength=m,F.pointLength=u,F.spotLength=M,F.rectAreaLength=A,F.hemiLength=y,F.numSunShadows=x,F.numDirectionalShadows=L,F.numPointShadows=b,F.numSpotShadows=T,F.numSpotMaps=_,F.numLightProbes=R,n.version=U0++)}function c(l,d){let p=0,h=0,f=0,x=0,S=0,m=0,u=d.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let y=l[M];if(y.isSunLight){let L=n.sun[p];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(u),p++}else if(y.isDirectionalLight){let L=n.directional[h];L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(y.isSpotLight){let L=n.spot[x];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),x++}else if(y.isRectAreaLight){let L=n.rectArea[S];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let L=n.point[f];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),f++}else if(y.isHemisphereLight){let L=n.hemi[m];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function gh(i){let e=new O0(i),t=[],n=[],s=[];function r(h){p.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function B0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gh(i),e.set(s,[o])):r>=a.length?(o=new gh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,V0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],H0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],_h=new Et,rr=new B,Ll=new B;function G0(i,e,t){let n=new ss,s=new Ze,r=new Ze,a=new wt,o=new Kr,c=new jr,l={},d=t.maxTextureSize,p={[pi]:$t,[$t]:pi,[sn]:sn},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:k0,fragmentShader:z0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new Qt;x.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new qe(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zs;let u=this.type;this.render=function(b,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===uc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zs);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Un),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=u!==this.type;G&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=b.length;P<X;P++){let K=b[P],J=K.shadow;if(J===void 0){Be("WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let le=J.getFrameExtents();s.multiply(le),r.copy(J.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/le.x),s.x=r.x*le.x,J.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/le.y),s.y=r.y*le.y,J.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Q,J.map===null||G===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===cs){if(K.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new tn(s.x,s.y,{format:xi,type:wn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),J.map.texture.name=K.name+".shadowMap",J.map.depthTexture=new li(s.x,s.y,Ln),J.map.depthTexture.name=K.name+".shadowMapDepth",J.map.depthTexture.format=Pn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Bt,J.map.depthTexture.magFilter=Bt}else K.isPointLight?(J.map=new io(s.x),J.map.depthTexture=new Jr(s.x,bn)):(J.map=new tn(s.x,s.y),J.map.depthTexture=new li(s.x,s.y,bn)),J.map.depthTexture.name=K.name+".shadowMap",J.map.depthTexture.format=Pn,this.type===Zs?(J.map.depthTexture.compareFunction=Q?ja:Ka,J.map.depthTexture.minFilter=Vt,J.map.depthTexture.magFilter=Vt):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Bt,J.map.depthTexture.magFilter=Bt);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let se=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();K.isPointLight!==!0&&J.updateMatrices(K,_);for(let re=0;re<se;re++){let Ne=J.getCamera(re);if(K.isPointLight){let Pe=J.camera,dt=J.matrix,et=K.distance||Pe.far;et!==Pe.far&&(Pe.far=et,Pe.updateProjectionMatrix()),rr.setFromMatrixPosition(K.matrixWorld),Pe.position.copy(rr),Ll.copy(Pe.position),Ll.add(V0[re]),Pe.up.copy(H0[re]),Pe.lookAt(Ll),Pe.updateMatrixWorld(),dt.makeTranslation(-rr.x,-rr.y,-rr.z),_h.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),J._frustum.setFromProjectionMatrix(_h,Pe.coordinateSystem,Pe.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,re),i.clear();else{re===0&&(i.setRenderTarget(J.map),i.clear());let Pe=J.getViewport(re);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(a)}n=J.getFrustum(re),y(T,_,Ne,K,this.type)}J.isPointLightShadow!==!0&&this.type===cs&&M(J,_),J.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,F)};function M(b,T){let _=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new tn(s.x,s.y,{format:xi,type:wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,_,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,_,f,S,null)}function A(b,T,_,w){let R=null,F=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(F!==void 0)R=F;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let O=R.uuid,G=T.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let X=P[G];X===void 0&&(X=R.clone(),P[G]=X,T.addEventListener("dispose",L)),R=X}if(R.visible=T.visible,R.wireframe=T.wireframe,w===cs?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:p[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=_}return R}function y(b,T,_,w,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===cs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let G=e.update(b),P=b.material;if(Array.isArray(P)){let X=G.groups;for(let K=0,J=X.length;K<J;K++){let le=X[K],Q=P[le.materialIndex];if(Q&&Q.visible){let se=A(b,Q,w,R);b.onBeforeShadow(i,b,T,_,G,se,le),i.renderBufferDirect(_,null,G,se,b,le),b.onAfterShadow(i,b,T,_,G,se,le)}}}else if(P.visible){let X=A(b,P,w,R);b.onBeforeShadow(i,b,T,_,G,X,null),i.renderBufferDirect(_,null,G,X,b,null),b.onAfterShadow(i,b,T,_,G,X,null)}}let O=b.children;for(let G=0,P=O.length;G<P;G++)y(O[G],T,_,w,R)}function L(b){b.target.removeEventListener("dispose",L);for(let _ in l){let w=l[_],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function W0(i,e){function t(){let I=!1,_e=new wt,ee=null,pe=new wt(0,0,0,0);return{setMask:function(Me){ee!==Me&&!I&&(i.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){I=Me},setClear:function(Me,oe,De,Ae,lt){lt===!0&&(Me*=Ae,oe*=Ae,De*=Ae),_e.set(Me,oe,De,Ae),pe.equals(_e)===!1&&(i.clearColor(Me,oe,De,Ae),pe.copy(_e))},reset:function(){I=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,_e=!1,ee=null,pe=null,Me=null;return{setReversed:function(oe){if(_e!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),_e=oe;let Ae=Me;Me=null,this.setClear(Ae)}},getReversed:function(){return _e},setTest:function(oe){oe?ne(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(oe){ee!==oe&&!I&&(i.depthMask(oe),ee=oe)},setFunc:function(oe){if(_e&&(oe=qc[oe]),pe!==oe){switch(oe){case Dr:i.depthFunc(i.NEVER);break;case Nr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Fr:i.depthFunc(i.EQUAL);break;case Or:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=oe}},setLocked:function(oe){I=oe},setClear:function(oe){Me!==oe&&(Me=oe,_e&&(oe=1-oe),i.clearDepth(oe))},reset:function(){I=!1,ee=null,pe=null,Me=null,_e=!1}}}function s(){let I=!1,_e=null,ee=null,pe=null,Me=null,oe=null,De=null,Ae=null,lt=null;return{setTest:function($e){I||($e?ne(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function($e){_e!==$e&&!I&&(i.stencilMask($e),_e=$e)},setFunc:function($e,It,kt){(ee!==$e||pe!==It||Me!==kt)&&(i.stencilFunc($e,It,kt),ee=$e,pe=It,Me=kt)},setOp:function($e,It,kt){(oe!==$e||De!==It||Ae!==kt)&&(i.stencilOp($e,It,kt),oe=$e,De=It,Ae=kt)},setLocked:function($e){I=$e},setClear:function($e){lt!==$e&&(i.clearStencil($e),lt=$e)},reset:function(){I=!1,_e=null,ee=null,pe=null,Me=null,oe=null,De=null,Ae=null,lt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},p={},h={},f=new WeakMap,x=[],S=null,m=!1,u=null,M=null,A=null,y=null,L=null,b=null,T=null,_=new Xe(0,0,0),w=0,R=!1,F=null,O=null,G=null,P=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,le=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=le>=1):Q.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=le>=2);let se=null,re={},Ne=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),dt=new wt().fromArray(Ne),et=new wt().fromArray(Pe);function at(I,_e,ee,pe){let Me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(_e+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return oe}let j={};j[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Ki),We(!1),vt(Xo),ne(i.CULL_FACE),Qe(Un);function ne(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Ee(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Fe(I,_e){return h[I]!==_e?(i.bindFramebuffer(I,_e),h[I]=_e,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_e),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Se(I,_e){let ee=x,pe=!1;if(I){ee=f.get(_e),ee===void 0&&(ee=[],f.set(_e,ee));let Me=I.textures;if(ee.length!==Me.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,De=Me.length;oe<De;oe++)ee[oe]=i.COLOR_ATTACHMENT0+oe;ee.length=Me.length,pe=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ee)}function ze(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let Tt={[Ci]:i.FUNC_ADD,[fc]:i.FUNC_SUBTRACT,[pc]:i.FUNC_REVERSE_SUBTRACT};Tt[mc]=i.MIN,Tt[gc]=i.MAX;let Ye={[_c]:i.ZERO,[xc]:i.ONE,[vc]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[Mc]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Lc]:i.ONE_MINUS_DST_COLOR,[Sc]:i.ONE_MINUS_DST_ALPHA,[Ec]:i.CONSTANT_COLOR,[Tc]:i.ONE_MINUS_CONSTANT_COLOR,[Ac]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,_e,ee,pe,Me,oe,De,Ae,lt,$e){if(I===Un){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),I!==dc){if(I!==u||$e!==R){if((M!==Ci||L!==Ci)&&(i.blendEquation(i.FUNC_ADD),M=Ci,L=Ci),$e)switch(I){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",I);break}else switch(I){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yo:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",I);break}A=null,y=null,b=null,T=null,_.set(0,0,0),w=0,u=I,R=$e}return}Me=Me||_e,oe=oe||ee,De=De||pe,(_e!==M||Me!==L)&&(i.blendEquationSeparate(Tt[_e],Tt[Me]),M=_e,L=Me),(ee!==A||pe!==y||oe!==b||De!==T)&&(i.blendFuncSeparate(Ye[ee],Ye[pe],Ye[oe],Ye[De]),A=ee,y=pe,b=oe,T=De),(Ae.equals(_)===!1||lt!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,lt),_.copy(Ae),w=lt),u=I,R=!1}function ot(I,_e){I.side===sn?Ee(i.CULL_FACE):ne(i.CULL_FACE);let ee=I.side===$t;_e&&(ee=!ee),We(ee),I.blending===hs&&I.transparent===!1?Qe(Un):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){F!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),F=I)}function vt(I){I!==cc?(ne(i.CULL_FACE),I!==O&&(I===Xo?i.cullFace(i.BACK):I===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),O=I}function yt(I){I!==G&&(J&&i.lineWidth(I),G=I)}function Rt(I,_e,ee){I?(ne(i.POLYGON_OFFSET_FILL),(P!==_e||X!==ee)&&(P=_e,X=ee,a.getReversed()&&(_e=-_e),i.polygonOffset(_e,ee))):Ee(i.POLYGON_OFFSET_FILL)}function Mt(I){I?ne(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function gt(I){I===void 0&&(I=i.TEXTURE0+K-1),se!==I&&(i.activeTexture(I),se=I)}function D(I,_e,ee){ee===void 0&&(se===null?ee=i.TEXTURE0+K-1:ee=se);let pe=re[ee];pe===void 0&&(pe={type:void 0,texture:void 0},re[ee]=pe),(pe.type!==I||pe.texture!==_e)&&(se!==ee&&(i.activeTexture(ee),se=ee),i.bindTexture(I,_e||j[I]),pe.type=I,pe.texture=_e)}function At(){let I=re[se];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function k(){try{i.texSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function ue(){try{i.texStorage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function Z(){try{i.texImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function me(I){return p[I]!==void 0?p[I]:i.getParameter(I)}function Ie(I,_e){p[I]!==_e&&(i.pixelStorei(I,_e),p[I]=_e)}function de(I){dt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),dt.copy(I))}function ge(I){et.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),et.copy(I))}function Ce(I,_e){let ee=l.get(_e);ee===void 0&&(ee=new WeakMap,l.set(_e,ee));let pe=ee.get(I);pe===void 0&&(pe=i.getUniformBlockIndex(_e,I.name),ee.set(I,pe))}function Ue(I,_e){let pe=l.get(_e).get(I);c.get(_e)!==pe&&(i.uniformBlockBinding(_e,pe,I.__bindingPointIndex),c.set(_e,pe))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},se=null,re={},h={},f=new WeakMap,x=[],S=null,m=!1,u=null,M=null,A=null,y=null,L=null,b=null,T=null,_=new Xe(0,0,0),w=0,R=!1,F=null,O=null,G=null,P=null,X=null,dt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Ee,bindFramebuffer:Fe,drawBuffers:Se,useProgram:ze,setBlending:Qe,setMaterial:ot,setFlipSided:We,setCullFace:vt,setLineWidth:yt,setPolygonOffset:Rt,setScissorTest:Mt,activeTexture:gt,bindTexture:D,unbindTexture:At,compressedTexImage2D:rt,compressedTexImage3D:E,texImage2D:Z,texImage3D:te,pixelStorei:Ie,getParameter:me,updateUBOMapping:Ce,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:ue,texSubImage2D:g,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:de,viewport:ge,reset:Ve}}function X0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,d=new WeakMap,p=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return x?new OffscreenCanvas(E,g):Ds("canvas")}function m(E,g,k){let W=1,Y=rt(E);if((Y.width>k||Y.height>k)&&(W=k/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(W*Y.width),ue=Math.floor(W*Y.height);h===void 0&&(h=S(ce,ue));let Z=g?S(ce,ue):h;return Z.width=ce,Z.height=ue,Z.getContext("2d").drawImage(E,0,0,ce,ue),Be("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+ue+")."),Z}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function u(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,g,k,W,Y,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;W&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),k===i.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),g===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),g===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),k===i.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(k===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),k===i.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){let te=ce?Ps:nt.getTransfer(Y);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=te===ft?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),k===i.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function L(E,g){let k;return E?g===null||g===bn||g===ds?k=i.DEPTH24_STENCIL8:g===Ln?k=i.DEPTH32F_STENCIL8:g===us&&(k=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===bn||g===ds?k=i.DEPTH_COMPONENT24:g===Ln?k=i.DEPTH_COMPONENT32F:g===us&&(k=i.DEPTH_COMPONENT16),k}function b(E,g){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function T(E){let g=E.target;g.removeEventListener("dispose",T),w(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),F(g)}function w(E){let g=n.get(E);if(g.__webglInit===void 0)return;let k=E.source,W=f.get(k);if(W){let Y=W[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(E),Object.keys(W).length===0&&f.delete(k)}n.remove(E)}function R(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let k=E.source,W=f.get(k);delete W[g.__cacheKey],a.memory.textures--}function F(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Y=0;Y<g.__webglFramebuffer[W].length;Y++)i.deleteFramebuffer(g.__webglFramebuffer[W][Y]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let k=E.textures;for(let W=0,Y=k.length;W<Y;W++){let ce=n.get(k[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(E)}let O=0;function G(){O=0}function P(){return O}function X(E){O=E}function K(){let E=O;return E>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function J(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function le(E,g){let k=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let W=E.image;if(W===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(k,E,g);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+g)}function Q(E,g){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Ee(k,E,g);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+g)}function se(E,g){let k=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){Ee(k,E,g);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+g)}function re(E,g){let k=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Fe(k,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+g)}let Ne={[zr]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},Pe={[Bt]:i.NEAREST,[Pc]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[pa]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},dt={[Fc]:i.NEVER,[Vc]:i.ALWAYS,[Oc]:i.LESS,[Ka]:i.LEQUAL,[Bc]:i.EQUAL,[ja]:i.GEQUAL,[kc]:i.GREATER,[zc]:i.NOTEQUAL};function et(E,g){if(g.type===Ln&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===pa||g.magFilter===Qs||g.magFilter===gi||g.minFilter===Vt||g.minFilter===pa||g.minFilter===Qs||g.minFilter===gi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ne[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ne[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ne[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Pe[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Pe[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,dt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==Qs&&g.minFilter!==gi||g.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function at(E,g){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",T));let W=g.source,Y=f.get(W);Y===void 0&&(Y={},f.set(W,Y));let ce=J(g);if(ce!==E.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Y[ce].usedTimes++;let ue=Y[E.__cacheKey];ue!==void 0&&(Y[E.__cacheKey].usedTimes--,ue.usedTimes===0&&R(g)),E.__cacheKey=ce,E.__webglTexture=Y[ce].texture}return k}function j(E,g,k){return Math.floor(Math.floor(E/k)/g)}function ne(E,g,k,W){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,k,W,g.data);else{ce.sort((Ie,de)=>Ie.start-de.start);let ue=0;for(let Ie=1;Ie<ce.length;Ie++){let de=ce[ue],ge=ce[Ie],Ce=de.start+de.count,Ue=j(ge.start,g.width,4),Ve=j(de.start,g.width,4);ge.start<=Ce+1&&Ue===Ve&&j(ge.start+ge.count-1,g.width,4)===Ue?de.count=Math.max(de.count,ge.start+ge.count-de.start):(++ue,ce[ue]=ge)}ce.length=ue+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,de=ce.length;Ie<de;Ie++){let ge=ce[Ie],Ce=Math.floor(ge.start/4),Ue=Math.ceil(ge.count/4),Ve=Ce%g.width,I=Math.floor(Ce/g.width),_e=Ue,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ve,I,_e,ee,k,W,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function Ee(E,g,k){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Y=at(E,g),ce=g.source;t.bindTexture(W,E.__webglTexture,i.TEXTURE0+k);let ue=n.get(ce);if(ce.version!==ue.__version||Y===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ee=nt.getPrimaries(nt.workingColorSpace),pe=g.colorSpace===Qn?null:nt.getPrimaries(g.colorSpace),Me=g.colorSpace===Qn||ee===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let te=m(g.image,!1,s.maxTextureSize);te=At(g,te);let me=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),de=y(g.internalFormat,me,Ie,g.normalized,g.colorSpace,g.isVideoTexture);et(W,g);let ge,Ce=g.mipmaps,Ue=g.isVideoTexture!==!0,Ve=ue.__version===void 0||Y===!0,I=ce.dataReady,_e=b(g,te);if(g.isDepthTexture)de=L(g.format===_i,g.type),Ve&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,me,Ie,null));else if(g.isDataTexture)if(Ce.length>0){Ue&&Ve&&t.texStorage2D(i.TEXTURE_2D,_e,de,Ce[0].width,Ce[0].height);for(let ee=0,pe=Ce.length;ee<pe;ee++)ge=Ce[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,ee,de,ge.width,ge.height,0,me,Ie,ge.data);g.generateMipmaps=!1}else Ue?(Ve&&t.texStorage2D(i.TEXTURE_2D,_e,de,te.width,te.height),I&&ne(g,te,me,Ie)):t.texImage2D(i.TEXTURE_2D,0,de,te.width,te.height,0,me,Ie,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,de,Ce[0].width,Ce[0].height,te.depth);for(let ee=0,pe=Ce.length;ee<pe;ee++)if(ge=Ce[ee],g.format!==pn)if(me!==null)if(Ue){if(I)if(g.layerUpdates.size>0){let Me=xl(ge.width,ge.height,g.format,g.type);for(let oe of g.layerUpdates){let De=ge.data.subarray(oe*Me/ge.data.BYTES_PER_ELEMENT,(oe+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,oe,ge.width,ge.height,1,me,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,de,ge.width,ge.height,te.depth,0,ge.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ge.width,ge.height,te.depth,me,Ie,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,de,ge.width,ge.height,te.depth,0,me,Ie,ge.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ue&&Ve&&t.texStorage2D(i.TEXTURE_2D,_e,de,Ce[0].width,Ce[0].height);for(let ee=0,pe=Ce.length;ee<pe;ee++)ge=Ce[ee],g.format!==pn?me!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,de,ge.width,ge.height,0,ge.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ge.width,ge.height,me,Ie,ge.data):t.texImage2D(i.TEXTURE_2D,ee,de,ge.width,ge.height,0,me,Ie,ge.data)}else if(g.isDataArrayTexture)if(Ue){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,de,te.width,te.height,te.depth),I)if(g.layerUpdates.size>0){let ee=xl(te.width,te.height,g.format,g.type);for(let pe of g.layerUpdates){let Me=te.data.subarray(pe*ee/te.data.BYTES_PER_ELEMENT,(pe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,te.width,te.height,1,me,Ie,Me)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,me,Ie,te.data);else if(g.isData3DTexture)Ue?(Ve&&t.texStorage3D(i.TEXTURE_3D,_e,de,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,me,Ie,te.data);else if(g.isFramebufferTexture){if(Ve)if(Ue)t.texStorage2D(i.TEXTURE_2D,_e,de,te.width,te.height);else{let ee=te.width,pe=te.height;for(let Me=0;Me<_e;Me++)t.texImage2D(i.TEXTURE_2D,Me,de,ee,pe,0,me,Ie,null),ee>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(g),ee.onpaint=pe=>{let Me=pe.changedElements;for(let oe of p)Me.includes(oe.image)&&(oe.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let Me=i.RGBA,oe=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,oe,De,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ue&&Ve){let ee=rt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,_e,de,ee.width,ee.height)}for(let ee=0,pe=Ce.length;ee<pe;ee++)ge=Ce[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me,Ie,ge):t.texImage2D(i.TEXTURE_2D,ee,de,me,Ie,ge);g.generateMipmaps=!1}else if(Ue){if(Ve){let ee=rt(te);t.texStorage2D(i.TEXTURE_2D,_e,de,ee.width,ee.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,de,me,Ie,te);u(g)&&M(W),ue.__version=ce.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Fe(E,g,k){if(g.image.length!==6)return;let W=at(E,g),Y=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+k);let ce=n.get(Y);if(Y.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+k);let ue=nt.getPrimaries(nt.workingColorSpace),Z=g.colorSpace===Qn?null:nt.getPrimaries(g.colorSpace),te=g.colorSpace===Qn||ue===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let me=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,de=[];for(let oe=0;oe<6;oe++)!me&&!Ie?de[oe]=m(g.image[oe],!0,s.maxCubemapSize):de[oe]=Ie?g.image[oe].image:g.image[oe],de[oe]=At(g,de[oe]);let ge=de[0],Ce=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type),Ve=y(g.internalFormat,Ce,Ue,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,_e=ce.__version===void 0||W===!0,ee=Y.dataReady,pe=b(g,ge);et(i.TEXTURE_CUBE_MAP,g);let Me;if(me){I&&_e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,ge.width,ge.height);for(let oe=0;oe<6;oe++){Me=de[oe].mipmaps;for(let De=0;De<Me.length;De++){let Ae=Me[De];g.format!==pn?Ce!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ae.width,Ae.height,Ce,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,Ve,Ae.width,Ae.height,0,Ae.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ae.width,Ae.height,Ce,Ue,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,Ve,Ae.width,Ae.height,0,Ce,Ue,Ae.data)}}}else{if(Me=g.mipmaps,I&&_e){Me.length>0&&pe++;let oe=rt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Ve,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ie){I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,de[oe].width,de[oe].height,Ce,Ue,de[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,de[oe].width,de[oe].height,0,Ce,Ue,de[oe].data);for(let De=0;De<Me.length;De++){let lt=Me[De].image[oe].image;I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,lt.width,lt.height,Ce,Ue,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,Ve,lt.width,lt.height,0,Ce,Ue,lt.data)}}else{I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ce,Ue,de[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ve,Ce,Ue,de[oe]);for(let De=0;De<Me.length;De++){let Ae=Me[De];I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Ce,Ue,Ae.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,Ve,Ce,Ue,Ae.image[oe])}}}u(g)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Y.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Se(E,g,k,W,Y,ce){let ue=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),te=y(k.internalFormat,ue,Z,k.normalized,k.colorSpace),me=n.get(g),Ie=n.get(k);if(Ie.__renderTarget=g,!me.__hasExternalTextures){let de=Math.max(1,g.width>>ce),ge=Math.max(1,g.height>>ce);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,ce,te,de,ge,g.depth,0,ue,Z,null):t.texImage2D(Y,ce,te,de,ge,0,ue,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Y,Ie.__webglTexture,0,Mt(g)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Y,Ie.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,g,k){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let W=g.depthTexture,Y=W&&W.isDepthTexture?W.type:null,ce=L(g.stencilBuffer,Y),ue=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(g),ce,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,E)}else{let W=g.textures;for(let Y=0;Y<W.length;Y++){let ce=W[Y],ue=r.convert(ce.format,ce.colorSpace),Z=r.convert(ce.type),te=y(ce.internalFormat,ue,Z,ce.normalized,ce.colorSpace);gt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(g),te,g.width,g.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,g,k){let W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",T)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),et(i.TEXTURE_CUBE_MAP,g.depthTexture);let me=r.convert(g.depthTexture.format),Ie=r.convert(g.depthTexture.type),de;g.depthTexture.format===Pn?de=i.DEPTH_COMPONENT24:g.depthTexture.format===_i&&(de=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,de,g.width,g.height,0,me,Ie,null)}}else le(g.depthTexture,0);let ce=Y.__webglTexture,ue=Mt(g),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,te=g.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Pn)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,ce,0);else if(g.depthTexture.format===_i)gt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(E){let g=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=W}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Tt(g.__webglFramebuffer[W],E,W);else{let W=E.texture.mipmaps;W&&W.length>0?Tt(g.__webglFramebuffer[0],E,0):Tt(g.__webglFramebuffer,E,0)}else if(k){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),ze(g.__webglDepthbuffer[W],E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ze(g.__webglDepthbuffer,E,!1);else{let Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(E,g,k){let W=n.get(E);g!==void 0&&Se(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ye(E)}function ot(E){let g=E.texture,k=n.get(E),W=n.get(g);E.addEventListener("dispose",_);let Y=E.textures,ce=E.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let te=0;te<g.mipmaps.length;te++)k.__webglFramebuffer[Z][te]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ue)for(let Z=0,te=Y.length;Z<te;Z++){let me=n.get(Y[Z]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&gt(E)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let te=Y[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let me=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),de=y(te.internalFormat,me,Ie,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),ge=Mt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),et(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)Se(k.__webglFramebuffer[Z][te],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Se(k.__webglFramebuffer[Z],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);u(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let Z=0,te=Y.length;Z<te;Z++){let me=Y[Z],Ie=n.get(me),de=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ie.__webglTexture),et(de,me),Se(k.__webglFramebuffer,E,me,i.COLOR_ATTACHMENT0+Z,de,0),u(me)&&M(de)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),et(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)Se(k.__webglFramebuffer[te],E,g,i.COLOR_ATTACHMENT0,Z,te);else Se(k.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,Z,0);u(g)&&M(Z),t.unbindTexture()}E.depthBuffer&&Ye(E)}function We(E){let g=E.textures;for(let k=0,W=g.length;k<W;k++){let Y=g[k];if(u(Y)){let ce=A(E),ue=n.get(Y).__webglTexture;t.bindTexture(ce,ue),M(ce),t.unbindTexture()}}}let vt=[],yt=[];function Rt(E){if(E.samples>0){if(gt(E)===!1){let g=E.textures,k=E.width,W=E.height,Y=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(E),Z=g.length>1;if(Z)for(let me=0;me<g.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let me=0;me<g.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Ie=n.get(g[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,Y,i.NEAREST),c===!0&&(vt.length=0,yt.length=0,vt.push(i.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(vt.push(ce),yt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let me=0;me<g.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,ue.__webglColorRenderbuffer[me]);let Ie=n.get(g[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Mt(E){return Math.min(s.maxSamples,E.samples)}function gt(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){let g=a.render.frame;d.get(E)!==g&&(d.set(E,g),E.update())}function At(E,g){let k=E.colorSpace,W=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Is&&k!==Qn&&(nt.getTransfer(k)===ft?(W!==pn||Y!==rn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",k)),g}function rt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=X,this.setTexture2D=le,this.setTexture2DArray=Q,this.setTexture3D=se,this.setTextureCube=re,this.rebindTextures=Qe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q0(i,e){function t(n,s=Qn){let r,a=nt.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===cl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===al)return i.BYTE;if(n===ol)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ma)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===hl)return i.ALPHA;if(n===ul)return i.RGB;if(n===pn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===dl)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===va)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===js||n===er)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ba||n===La)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===tr||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===Ea)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Aa)return r.COMPRESSED_R11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_R11_EAC;if(n===tr)return r.COMPRESSED_RG11_EAC;if(n===Ca)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ia||n===Pa||n===Da||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ka)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===nr||n===Qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`,Pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,h=null,f=null,x=null,S=typeof XRWebGLBinding<"u",m=new Pl,u={},M=t.getContextAttributes(),A=null,y=null,L=[],b=[],T=new Ze,_=null,w=null,R=new zt;R.viewport=new wt;let F=new zt;F.viewport=new wt;let O=[R,F],G=new ua,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=L[j];return ne===void 0&&(ne=new ns,L[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=L[j];return ne===void 0&&(ne=new ns,L[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=L[j];return ne===void 0&&(ne=new ns,L[j]=ne),ne.getHandSpace()};function K(j){let ne=b.indexOf(j.inputSource);if(ne===-1)return;let Ee=L[ne];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,l||a),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",le);for(let j=0;j<L.length;j++){let ne=b[j];ne!==null&&(b[j]=null,L[j].disconnect(ne))}P=null,X=null,m.reset();for(let j in u)delete u[j];if(e.setRenderTarget(A),f=null,h=null,p=null,s=null,y=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",J),s.addEventListener("inputsourceschange",le),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Fe=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?_i:Pn,Fe=M.stencil?ds:bn);let ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new tn(h.textureWidth,h.textureHeight,{format:pn,type:rn,depthTexture:new li(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new tn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(j){for(let ne=0;ne<j.removed.length;ne++){let Ee=j.removed[ne],Fe=b.indexOf(Ee);Fe>=0&&(b[Fe]=null,L[Fe].disconnect(Ee))}for(let ne=0;ne<j.added.length;ne++){let Ee=j.added[ne],Fe=b.indexOf(Ee);if(Fe===-1){for(let ze=0;ze<L.length;ze++)if(ze>=b.length){b.push(Ee),Fe=ze;break}else if(b[ze]===null){b[ze]=Ee,Fe=ze;break}if(Fe===-1)break}let Se=L[Fe];Se&&Se.connect(Ee)}}let Q=new B,se=new B;function re(j,ne,Ee){Q.setFromMatrixPosition(ne.matrixWorld),se.setFromMatrixPosition(Ee.matrixWorld);let Fe=Q.distanceTo(se),Se=ne.projectionMatrix.elements,ze=Ee.projectionMatrix.elements,Tt=Se[14]/(Se[10]-1),Ye=Se[14]/(Se[10]+1),Qe=(Se[9]+1)/Se[5],ot=(Se[9]-1)/Se[5],We=(Se[8]-1)/Se[0],vt=(ze[8]+1)/ze[0],yt=Tt*We,Rt=Tt*vt,Mt=Fe/(-We+vt),gt=Mt*-We;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(gt),j.translateZ(Mt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Se[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let D=Tt+Mt,At=Ye+Mt,rt=yt-gt,E=Rt+(Fe-gt),g=Qe*Ye/At*D,k=ot*Ye/At*D;j.projectionMatrix.makePerspective(rt,E,g,k,D,At),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ne(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ne=j.near,Ee=j.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),G.near=F.near=R.near=ne,G.far=F.far=R.far=Ee,(P!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,X=G.far),G.layers.mask=j.layers.mask|6,R.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Fe=j.parent,Se=G.cameras;Ne(G,Fe);for(let ze=0;ze<Se.length;ze++)Ne(Se[ze],Fe);Se.length===2?re(G,R,F):G.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),Pe(j,G,Fe)};function Pe(j,ne,Ee){Ee===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Gr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return u[j]};let dt=null;function et(j,ne){if(d=ne.getViewerPose(l||a),x=ne,d!==null){let Ee=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Fe=!1;Ee.length!==G.cameras.length&&(G.cameras.length=0,Fe=!0);for(let Ye=0;Ye<Ee.length;Ye++){let Qe=Ee[Ye],ot=null;if(f!==null)ot=f.getViewport(Qe);else{let vt=p.getViewSubImage(h,Qe);ot=vt.viewport,Ye===0&&(e.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(y))}let We=O[Ye];We===void 0&&(We=new zt,We.layers.enable(Ye),We.viewport=new wt,O[Ye]=We),We.matrix.fromArray(Qe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Qe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(G.matrix.copy(We.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Fe===!0&&G.cameras.push(We)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Ye=p.getDepthInformation(Ee[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,s.renderState)}if(Se&&Se.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Ye=0;Ye<Ee.length;Ye++){let Qe=Ee[Ye].camera;if(Qe){let ot=u[Qe];ot||(ot=new zs,u[Qe]=ot);let We=p.getCameraImage(Qe);ot.sourceTexture=We}}}}for(let Ee=0;Ee<L.length;Ee++){let Fe=b[Ee],Se=L[Ee];Fe!==null&&Se!==void 0&&Se.update(Fe,ne,l||a)}dt&&dt(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}let at=new xh;at.setAnimationLoop(et),this.setAnimationLoop=function(j){dt=j},this.dispose=function(){}}},J0=new Et,Lh=new He;Lh.set(-1,0,0,0,1,0,0,0,1);function Q0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ml(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,A,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,M,A):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$t&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$t&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let M=e.get(u),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lh),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,M,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$t&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let M=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,L){let b=L.program;n.uniformBlockBinding(y,b)}function l(y,L){let b=s[y.id];b===void 0&&(m(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",M));let T=L.program;n.updateUBOMapping(y,T);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function d(y){let L=p();y.__bindingPointIndex=L;let b=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,b),b}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let L=s[y.id],b=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let _=0,w=b.length;_<w;_++){let R=b[_];if(Array.isArray(R))for(let F=0,O=R.length;F<O;F++)f(R[F],_,F,T);else f(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,L,b,T){if(S(y,L,b,T)===!0){let _=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let F=0;F<w.length;F++){let O=w[F],G=u(O);x(O,y.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,L,b){typeof y=="number"||typeof y=="boolean"?L[0]=y:y.isMatrix3?(L[0]=y.elements[0],L[1]=y.elements[1],L[2]=y.elements[2],L[3]=0,L[4]=y.elements[3],L[5]=y.elements[4],L[6]=y.elements[5],L[7]=0,L[8]=y.elements[6],L[9]=y.elements[7],L[10]=y.elements[8],L[11]=0):ArrayBuffer.isView(y)?L.set(new y.constructor(y.buffer,y.byteOffset,L.length)):y.toArray(L,b)}function S(y,L,b,T){let _=y.value,w=L+"_"+b;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let R=T[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let L=y.uniforms,b=0,T=16;for(let w=0,R=L.length;w<R;w++){let F=Array.isArray(L[w])?L[w]:[L[w]];for(let O=0,G=F.length;O<G;O++){let P=F[O],X=Array.isArray(P.value)?P.value:[P.value];for(let K=0,J=X.length;K<J;K++){let le=X[K],Q=u(le),se=b%T,re=se%Q.boundary,Ne=se+re;b+=re,Ne!==0&&T-Ne<Q.storage&&(b+=T-Ne),P.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=Q.storage}}}let _=b%T;return _>0&&(b+=T-_),y.__size=b,y.__cache={},this}function u(y){let L={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(L.boundary=4,L.storage=4):y.isVector2?(L.boundary=8,L.storage=8):y.isVector3||y.isColor?(L.boundary=16,L.storage=12):y.isVector4?(L.boundary=16,L.storage=16):y.isMatrix3?(L.boundary=48,L.storage=48):y.isMatrix4?(L.boundary=64,L.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(L.boundary=16,L.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),L}function M(y){let L=y.target;L.removeEventListener("dispose",M);let b=a.indexOf(L.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var K0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function j0(){return Fn===null&&(Fn=new Zr(K0,16,16,xi,wn),Fn.name="DFG_LUT",Fn.minFilter=Vt,Fn.magFilter=Vt,Fn.wrapS=In,Fn.wrapT=In,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var so=class{constructor(e={}){let{canvas:t=Gc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=rn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=f,m=new Set([ya,va,xa]),u=new Set([rn,bn,us,ds,ga,_a]),M=new Uint32Array(4),A=new Int32Array(4),y=new B,L=null,b=null,T=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,O=null,G=null,P=null,X=null;this._outputColorSpace=Ot;let K=0,J=0,le=null,Q=-1,se=null,re=new wt,Ne=new wt,Pe=null,dt=new Xe(0),et=0,at=t.width,j=t.height,ne=1,Ee=null,Fe=null,Se=new wt(0,0,at,j),ze=new wt(0,0,at,j),Tt=!1,Ye=new ss,Qe=!1,ot=!1,We=new Et,vt=new B,yt=new wt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mt=!1;function gt(){return le===null?ne:1}let D=n;function At(v,C){return t.getContext(v,C)}let rt,E,g,k,W,Y,ce,ue,Z,te,me,Ie,de,ge,Ce,Ue,Ve,I,_e,ee,pe,Me,oe;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",It,!1),D===null){let C="webgl2";if(D=At(C,v),D===null)throw At(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",It,!1),ke("WebGLRenderer: "+v.message),v}function De(){rt=new ap(D),rt.init(),pe=new q0(D,rt),E=new Qf(D,rt,e,pe),g=new W0(D,rt),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=D.createFramebuffer(),P=D.createFramebuffer(),X=D.createFramebuffer(),k=new cp(D),W=new C0,Y=new X0(D,rt,g,W,E,pe,k),ce=new rp(R),ue=new hu(D),Me=new Zf(D,ue),Z=new op(D,ue,k,Me),te=new up(D,Z,ue,Me,k),I=new hp(D,E,Y),Ce=new $f(W),me=new R0(R,ce,rt,E,Me,Ce),Ie=new Q0(R,W),de=new P0,ge=new B0(rt),Ve=new Yf(R,ce,g,te,x,c),Ue=new G0(R,te,E),oe=new $0(D,k,E,g),_e=new Jf(D,rt,k),ee=new lp(D,rt,k),k.programs=me.programs,R.capabilities=E,R.extensions=rt,R.properties=W,R.renderLists=de,R.shadowMap=Ue,R.state=g,R.info=k}S!==rn&&(w=new fp(S,t.width,t.height,o,s,r));let Ae=new Dl(R,D);this.xr=Ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=rt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=rt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(v){v!==void 0&&(ne=v,this.setSize(at,j,!1))},this.getSize=function(v){return v.set(at,j)},this.setSize=function(v,C,z=!0){if(Ae.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}at=v,j=C,t.width=Math.floor(v*ne),t.height=Math.floor(C*ne),z===!0&&(t.style.width=v+"px",t.style.height=C+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(at*ne,j*ne).floor()},this.setDrawingBufferSize=function(v,C,z){at=v,j=C,ne=z,t.width=Math.floor(v*z),t.height=Math.floor(C*z),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(S===rn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(re)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,C,z,H){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,C,z,H),g.viewport(re.copy(Se).multiplyScalar(ne).round())},this.getScissor=function(v){return v.copy(ze)},this.setScissor=function(v,C,z,H){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,C,z,H),g.scissor(Ne.copy(ze).multiplyScalar(ne).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(v){g.setScissorTest(Tt=v)},this.setOpaqueSort=function(v){Ee=v},this.setTransparentSort=function(v){Fe=v},this.getClearColor=function(v){return v.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,z=!0){let H=0;if(v){let V=!1;if(le!==null){let ve=le.texture.format;V=m.has(ve)}if(V){let ve=le.texture.type,Le=u.has(ve),xe=Ve.getClearColor(),we=Ve.getClearAlpha(),Te=xe.r,Ge=xe.g,N=xe.b;Le?(M[0]=Te,M[1]=Ge,M[2]=N,M[3]=we,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Te,A[1]=Ge,A[2]=N,A[3]=we,D.clearBufferiv(D.COLOR,0,A))}else H|=D.COLOR_BUFFER_BIT}C&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",It,!1),Ve.dispose(),de.dispose(),ge.dispose(),W.dispose(),ce.dispose(),te.dispose(),Me.dispose(),oe.dispose(),me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",xs),Ae.removeEventListener("sessionend",An),kn.stop()};function lt(v){v.preventDefault(),pl("WebGLRenderer: Context Lost."),F=!0}function $e(){pl("WebGLRenderer: Context Restored."),F=!1;let v=k.autoReset,C=Ue.enabled,z=Ue.autoUpdate,H=Ue.needsUpdate,V=Ue.type;De(),k.autoReset=v,Ue.enabled=C,Ue.autoUpdate=z,Ue.needsUpdate=H,Ue.type=V}function It(v){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function kt(v){let C=v.target;C.removeEventListener("dispose",kt),lo(C)}function lo(v){Yt(v),W.remove(v)}function Yt(v){let C=W.get(v).programs;C!==void 0&&(C.forEach(function(z){me.releaseProgram(z)}),v.isShaderMaterial&&me.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,z,H,V,ve){C===null&&(C=Rt);let Le=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=Ke(v,C,z,H,V);g.setMaterial(H,Le);let we=z.index,Te=1;if(H.wireframe===!0){if(we=Z.getWireframeAttribute(z),we===void 0)return;Te=2}let Ge=z.drawRange,N=z.attributes.position,U=Ge.start*Te,$=(Ge.start+Ge.count)*Te;ve!==null&&(U=Math.max(U,ve.start*Te),$=Math.min($,(ve.start+ve.count)*Te)),we!==null?(U=Math.max(U,0),$=Math.min($,we.count)):N!=null&&(U=Math.max(U,0),$=Math.min($,N.count));let q=$-U;if(q<0||q===1/0)return;Me.setup(V,H,xe,z,we);let ie,fe=_e;if(we!==null&&(ie=ue.get(we),fe=ee,fe.setIndex(ie)),V.isMesh)H.wireframe===!0?(g.setLineWidth(H.wireframeLinewidth*gt()),fe.setMode(D.LINES)):fe.setMode(D.TRIANGLES);else if(V.isLine){let be=H.linewidth;be===void 0&&(be=1),g.setLineWidth(be*gt()),V.isLineSegments?fe.setMode(D.LINES):V.isLineLoop?fe.setMode(D.LINE_LOOP):fe.setMode(D.LINE_STRIP)}else V.isPoints?fe.setMode(D.POINTS):V.isSprite&&fe.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let be=V._multiDrawStarts,ae=V._multiDrawCounts,he=V._multiDrawCount,Re=we?ue.get(we).bytesPerElement:1,pt=W.get(H).currentProgram.getUniforms();for(let Lt=0;Lt<he;Lt++)pt.setValue(D,"_gl_DrawID",Lt),fe.render(be[Lt]/Re,ae[Lt])}else if(V.isInstancedMesh)fe.renderInstances(U,q,V.count);else if(z.isInstancedBufferGeometry){let be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ae=Math.min(z.instanceCount,be);fe.renderInstances(U,q,ae)}else fe.render(U,q)};function Tn(v,C,z,H){O!==null&&v.isNodeMaterial&&O.setObject(H,v),Qe===!0&&Ce.setState(v,z,!1),v.transparent===!0&&v.side===sn&&v.forceSinglePass===!1?(v.side=$t,v.needsUpdate=!0,Vn(v,C,H),v.side=pi,v.needsUpdate=!0,Vn(v,C,H),v.side=sn):Vn(v,C,H)}this.compile=function(v,C,z=null){z===null&&(z=v),O!==null&&O.renderStart(v,C,z),b=ge.get(z),b.init(C),_.push(b),z.traverseVisible(function(V){V.isLight&&V.layers.test(C.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),v!==z&&v.traverseVisible(function(V){V.isLight&&V.layers.test(C.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),ot=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ot),Qe===!0&&Ce.setGlobalState(this.clippingPlanes,C),O!==null&&Ue.render(b.state.shadowsArray,z,C);let H=new Set;return v.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ve=V.material;if(ve)if(Array.isArray(ve))for(let Le=0;Le<ve.length;Le++){let xe=ve[Le];Tn(xe,z,C,V),H.add(xe)}else Tn(ve,z,C,V),H.add(ve)}),b=_.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(v,C,z=null){let H=this.compile(v,C,z);return new Promise(V=>{function ve(){if(H.forEach(function(Le){let we=W.get(Le).currentProgram;(we===void 0||we.isReady())&&H.delete(Le)}),H.size===0){V(v);return}setTimeout(ve,10)}rt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Bn=null;function Ni(v){Bn&&Bn(v)}function xs(){kn.stop()}function An(){kn.start()}let kn=new xh;kn.setAnimationLoop(Ni),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(v){Bn=v,Ae.setAnimationLoop(v),v===null?kn.stop():kn.start()},Ae.addEventListener("sessionstart",xs),Ae.addEventListener("sessionend",An),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(v,C);let z=Ae.enabled===!0&&Ae.isPresenting===!0,H=w!==null&&(le===null||z)&&w.begin(R,le);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(C),C=Ae.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,C,le),b=ge.get(v,_.length),b.init(C),b.state.textureUnits=Y.getTextureUnits(),_.push(b),We.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ye.setFromProjectionMatrix(We,Mn,C.reversedDepth),ot=this.localClippingEnabled,Qe=Ce.init(this.clippingPlanes,ot),L=de.get(v,T.length),L.init(),T.push(L),Ae.enabled===!0&&Ae.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&$n(Le,C,-1/0,R.sortObjects)}$n(v,C,0,R.sortObjects),L.finish(),O!==null&&O.updateLights(b.state.lightsArray),R.sortObjects===!0&&L.sort(Ee,Fe),Mt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Mt&&Ve.addToRenderList(L,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Ce.beginShadows();let V=b.state.shadowsArray;if(Ue.render(V,v,C),Qe===!0&&Ce.endShadows(),(H&&w.hasRenderPass())===!1){let Le=L.opaque,xe=L.transmissive;if(b.setupLights(),C.isArrayCamera){let we=C.cameras;if(xe.length>0)for(let Te=0,Ge=we.length;Te<Ge;Te++){let N=we[Te];vs(Le,xe,v,N)}Mt&&Ve.render(v);for(let Te=0,Ge=we.length;Te<Ge;Te++){let N=we[Te];vi(L,v,N,N.viewport)}}else xe.length>0&&vs(Le,xe,v,C),Mt&&Ve.render(v),vi(L,v,C)}le!==null&&J===0&&(Y.updateMultisampleRenderTarget(le),Y.updateRenderTargetMipmap(le)),H&&w.end(R),v.isScene===!0&&v.onAfterRender(R,v,C),Me.resetDefaultState(),Q=-1,se=null,_.pop(),_.length>0?(b=_[_.length-1],Y.setTextureUnits(b.state.textureUnits),Qe===!0&&Ce.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?L=T[T.length-1]:L=null,O!==null&&O.renderEnd()};function $n(v,C,z,H){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Ye)){H&&yt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(We);let Le=te.update(v),xe=v.material;xe.visible&&L.push(v,Le,xe,z,yt.z,null,C)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Ye))){let Le=te.update(v),xe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),yt.copy(v.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),yt.copy(Le.boundingSphere.center)),yt.applyMatrix4(v.matrixWorld).applyMatrix4(We)),Array.isArray(xe)){let we=Le.groups;for(let Te=0,Ge=we.length;Te<Ge;Te++){let N=we[Te],U=xe[N.materialIndex];U&&U.visible&&L.push(v,Le,U,z,yt.z,N,C)}}else xe.visible&&L.push(v,Le,xe,z,yt.z,null,C)}}let ve=v.children;for(let Le=0,xe=ve.length;Le<xe;Le++)$n(ve[Le],C,z,H)}function vi(v,C,z,H){let{opaque:V,transmissive:ve,transparent:Le}=v;b.setupLightsView(z),Qe===!0&&Ce.setGlobalState(R.clippingPlanes,z),H&&g.viewport(re.copy(H)),V.length>0&&zn(V,C,z),ve.length>0&&zn(ve,C,z),Le.length>0&&zn(Le,C,z),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function vs(v,C,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let U=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new tn(1,1,{generateMipmaps:!0,type:U?wn:rn,minFilter:gi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let ve=b.state.transmissionRenderTarget[H.id],Le=H.viewport||re;ve.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let xe=R.getRenderTarget(),we=R.getActiveCubeFace(),Te=R.getActiveMipmapLevel();R.setRenderTarget(ve),R.getClearColor(dt),et=R.getClearAlpha(),et<1&&R.setClearColor(16777215,.5),R.clear(),Mt&&Ve.render(z);let Ge=R.toneMapping;R.toneMapping=Sn;let N=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Qe===!0&&Ce.setGlobalState(R.clippingPlanes,H),zn(v,z,H),Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve),rt.has("WEBGL_multisampled_render_to_texture")===!1){let U=!1;for(let $=0,q=C.length;$<q;$++){let ie=C[$],{object:fe,geometry:be,material:ae,group:he}=ie;if(ae.side===sn&&fe.layers.test(H.layers)){let Re=ae.side;ae.side=$t,ae.needsUpdate=!0,Kt(fe,z,H,be,ae,he),ae.side=Re,ae.needsUpdate=!0,U=!0}}U===!0&&(Y.updateMultisampleRenderTarget(ve),Y.updateRenderTargetMipmap(ve))}R.setRenderTarget(xe,we,Te),R.setClearColor(dt,et),N!==void 0&&(H.viewport=N),R.toneMapping=Ge}function zn(v,C,z){let H=C.isScene===!0?C.overrideMaterial:null;for(let V=0,ve=v.length;V<ve;V++){let Le=v[V],{object:xe,geometry:we,group:Te}=Le,Ge=Le.material;Ge.allowOverride===!0&&H!==null&&(Ge=H),xe.layers.test(z.layers)&&Kt(xe,C,z,we,Ge,Te)}}function Kt(v,C,z,H,V,ve){O!==null&&V.isNodeMaterial&&O.setObject(v,V),v.onBeforeRender(R,C,z,H,V,ve),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),V.onBeforeRender(R,C,z,H,v,ve),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,R.renderBufferDirect(z,C,H,V,v,ve),V.side=pi,V.needsUpdate=!0,R.renderBufferDirect(z,C,H,V,v,ve),V.side=sn):R.renderBufferDirect(z,C,H,V,v,ve),v.onAfterRender(R,C,z,H,V,ve)}function Vn(v,C,z){C.isScene!==!0&&(C=Rt);let H=W.get(v),V=b.state.lights,ve=b.state.shadowsArray,Le=V.state.version,xe=me.getParameters(v,V.state,ve,C,z,b.state.lightProbeGridArray),we=me.getProgramCacheKey(xe),Te=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,H.fog=C.fog;let Ge=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=ce.get(v.envMap||H.environment,Ge),H.envMapRotation=H.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Te===void 0&&(v.addEventListener("dispose",kt),Te=new Map,H.programs=Te);let N=Te.get(we);if(N!==void 0){if(H.currentProgram===N&&H.lightsStateVersion===Le)return lr(v,xe),N}else xe.uniforms=me.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,z,xe),v.onBeforeCompile(xe,R),N=me.acquireProgram(xe,we),Te.set(we,N),H.uniforms=xe.uniforms;let U=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(U.clippingPlanes=Ce.uniform),lr(v,xe),H.needsLights=jt(v),H.lightsStateVersion=Le,H.needsLights&&(U.ambientLightColor.value=V.state.ambient,U.lightProbe.value=V.state.probe,U.sunLights.value=V.state.sun,U.sunLightShadows.value=V.state.sunShadow,U.directionalLights.value=V.state.directional,U.directionalLightShadows.value=V.state.directionalShadow,U.spotLights.value=V.state.spot,U.spotLightShadows.value=V.state.spotShadow,U.rectAreaLights.value=V.state.rectArea,U.ltc_1.value=V.state.rectAreaLTC1,U.ltc_2.value=V.state.rectAreaLTC2,U.pointLights.value=V.state.point,U.pointLightShadows.value=V.state.pointShadow,U.hemisphereLights.value=V.state.hemi,U.sunShadowMatrix.value=V.state.sunShadowMatrix,U.sunShadowCascade.value=V.state.sunShadowCascade,U.directionalShadowMatrix.value=V.state.directionalShadowMatrix,U.spotLightMatrix.value=V.state.spotLightMatrix,U.spotLightMap.value=V.state.spotLightMap,U.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=N,H.uniformsList=null,N}function Kn(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=ms.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function lr(v,C){let z=W.get(v);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function gn(v,C){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let z=0,H=v.length;z<H;z++){let V=v[z];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Ke(v,C,z,H,V){C.isScene!==!0&&(C=Rt),Y.resetTextureUnits();let ve=C.fog,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?C.environment:null,xe=le===null?R.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:nt.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=ce.get(H.envMap||Le,we),Ge=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,N=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),U=!!z.morphAttributes.position,$=!!z.morphAttributes.normal,q=!!z.morphAttributes.color,ie=Sn;H.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ie=R.toneMapping);let fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=fe!==void 0?fe.length:0,ae=W.get(H),he=b.state.lights;if(Qe===!0&&(ot===!0||v!==se)){let tt=v===se&&H.id===Q;Ce.setState(H,v,tt)}let Re=!1;H.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==he.state.version||ae.outputColorSpace!==xe||V.isBatchedMesh&&ae.batching===!1||!V.isBatchedMesh&&ae.batching===!0||V.isBatchedMesh&&ae.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ae.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ae.instancing===!1||!V.isInstancedMesh&&ae.instancing===!0||V.isSkinnedMesh&&ae.skinning===!1||!V.isSkinnedMesh&&ae.skinning===!0||V.isInstancedMesh&&ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ae.instancingMorph===!1&&V.morphTexture!==null||ae.envMap!==Te||H.fog===!0&&ae.fog!==ve||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ce.numPlanes||ae.numIntersection!==Ce.numIntersection)||ae.vertexAlphas!==Ge||ae.vertexTangents!==N||ae.morphTargets!==U||ae.morphNormals!==$||ae.morphColors!==q||ae.toneMapping!==ie||ae.morphTargetsCount!==be||!!ae.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,ae.__version=H.version);let pt=ae.currentProgram;Re===!0&&(pt=Vn(H,C,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,pt,ae));let Lt=!1,Pt=!1,Zt=!1,je=pt.getUniforms(),ct=ae.uniforms;if(g.useProgram(pt.program)&&(Lt=!0,Pt=!0,Zt=!0),H.id!==Q&&(Q=H.id,Pt=!0),ae.needsLights){let tt=gn(b.state.lightProbeGridArray,V);ae.lightProbeGrid!==tt&&(ae.lightProbeGrid=tt,Pt=!0)}if(Lt||se!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),je.setValue(D,"projectionMatrix",v.projectionMatrix),je.setValue(D,"viewMatrix",v.matrixWorldInverse);let St=je.map.cameraPosition;St!==void 0&&St.setValue(D,vt.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&je.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&je.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),se!==v&&(se=v,Pt=!0,Zt=!0)}if(ae.needsLights&&(he.state.sunShadowMap.length>0&&je.setValue(D,"sunShadowMap",he.state.sunShadowMap,Y),he.state.directionalShadowMap.length>0&&je.setValue(D,"directionalShadowMap",he.state.directionalShadowMap,Y),he.state.spotShadowMap.length>0&&je.setValue(D,"spotShadowMap",he.state.spotShadowMap,Y),he.state.pointShadowMap.length>0&&je.setValue(D,"pointShadowMap",he.state.pointShadowMap,Y)),V.isSkinnedMesh){je.setOptional(D,V,"bindMatrix"),je.setOptional(D,V,"bindMatrixInverse");let tt=V.skeleton;tt&&(tt.boneTexture===null&&tt.computeBoneTexture(),je.setValue(D,"boneTexture",tt.boneTexture,Y))}V.isBatchedMesh&&(je.setOptional(D,V,"batchingTexture"),je.setValue(D,"batchingTexture",V._matricesTexture,Y),je.setOptional(D,V,"batchingIdTexture"),je.setValue(D,"batchingIdTexture",V._indirectTexture,Y),je.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&je.setValue(D,"batchingColorTexture",V._colorsTexture,Y));let Ut=z.morphAttributes;if((Ut.position!==void 0||Ut.normal!==void 0||Ut.color!==void 0)&&I.update(V,z,pt),(Pt||ae.receiveShadow!==V.receiveShadow)&&(ae.receiveShadow=V.receiveShadow,je.setValue(D,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&C.environment!==null&&(ct.envMapIntensity.value=C.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=j0()),Pt){if(je.setValue(D,"toneMappingExposure",R.toneMappingExposure),ae.needsLights&&ys(ct,Zt),ve&&H.fog===!0&&Ie.refreshFogUniforms(ct,ve),Ie.refreshMaterialUniforms(ct,H,ne,j,b.state.transmissionRenderTarget[v.id]),ae.needsLights&&ae.lightProbeGrid){let tt=ae.lightProbeGrid;ct.probesSH.value=tt.texture,ct.probesMin.value.copy(tt.boundingBox.min),ct.probesMax.value.copy(tt.boundingBox.max),ct.probesResolution.value.copy(tt.resolution)}ms.upload(D,Kn(ae),ct,Y)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ms.upload(D,Kn(ae),ct,Y),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&je.setValue(D,"center",V.center),je.setValue(D,"modelViewMatrix",V.modelViewMatrix),je.setValue(D,"normalMatrix",V.normalMatrix),je.setValue(D,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let tt=H.uniformsGroups;for(let St=0,_t=tt.length;St<_t;St++){let mt=tt[St];oe.update(mt,pt),oe.bind(mt,pt)}}return pt}function ys(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function jt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(v,C,z){let H=W.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=C,W.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let z=W.get(v);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,z=0){le=v,K=C,J=z;let H=null,V=!1,ve=!1;if(v){let xe=W.get(v);if(xe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,xe.__webglFramebuffer),re.copy(v.viewport),Ne.copy(v.scissor),Pe=v.scissorTest,g.viewport(re),g.scissor(Ne),g.setScissorTest(Pe),Q=-1;return}else if(xe.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(xe.__hasExternalTextures)Y.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ge=v.depthTexture;if(xe.__boundDepthTexture!==Ge){if(Ge!==null&&W.has(Ge)&&(v.width!==Ge.image.width||v.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let we=v.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Te=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[C])?H=Te[C][z]:H=Te[C],V=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?H=W.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[z]:H=Te,re.copy(v.viewport),Ne.copy(v.scissor),Pe=v.scissorTest}else re.copy(Se).multiplyScalar(ne).floor(),Ne.copy(ze).multiplyScalar(ne).floor(),Pe=Tt;if(z!==0&&(H=G),g.bindFramebuffer(D.FRAMEBUFFER,H)&&g.drawBuffers(v,H),g.viewport(re),g.scissor(Ne),g.setScissorTest(Pe),V){let xe=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,xe.__webglTexture,z)}else if(ve){let xe=C;for(let we=0;we<v.textures.length;we++){let Te=W.get(v.textures[we]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+we,Te.__webglTexture,z,xe)}}else if(v!==null&&z!==0){let xe=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,z)}Q=-1};function Ms(v){let C=W.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=E.textureFormatReadable(v.format),C.__typeReadable=E.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,z,H,V,ve,Le,xe=0){if(!(v&&v.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le]),we){g.bindFramebuffer(D.FRAMEBUFFER,we);try{let Te=v.textures[xe],Ge=Te.format,N=Te.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe);let U=Ms(Te);if(U.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(U.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-H&&z>=0&&z<=v.height-V&&D.readPixels(C,z,H,V,pe.convert(Ge),pe.convert(N),ve)}finally{let Te=le!==null?W.get(le).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(v,C,z,H,V,ve,Le,xe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(we=we[Le]),we)if(C>=0&&C<=v.width-H&&z>=0&&z<=v.height-V){g.bindFramebuffer(D.FRAMEBUFFER,we);let Te=v.textures[xe],Ge=Te.format,N=Te.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe);let U=Ms(Te);if(U.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(U.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$),D.bufferData(D.PIXEL_PACK_BUFFER,ve.byteLength,D.STREAM_READ),D.readPixels(C,z,H,V,pe.convert(Ge),pe.convert(N),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let q=le!==null?W.get(le).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,q);let ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Xc(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ve),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer($),D.deleteSync(ie),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,z=0){let H=Math.pow(2,-z),V=Math.floor(v.image.width*H),ve=Math.floor(v.image.height*H),Le=C!==null?C.x:0,xe=C!==null?C.y:0;Y.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,Le,xe,V,ve),g.unbindTexture()},this.copyTextureToTexture=function(v,C,z=null,H=null,V=0,ve=0){let Le,xe,we,Te,Ge,N,U,$,q,ie=v.isCompressedTexture?v.mipmaps[ve]:v.image;if(z!==null)Le=z.max.x-z.min.x,xe=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,Te=z.min.x,Ge=z.min.y,N=z.isBox3?z.min.z:0;else{let ct=Math.pow(2,-V);Le=Math.floor(ie.width*ct),xe=Math.floor(ie.height*ct),v.isDataArrayTexture?we=ie.depth:v.isData3DTexture?we=Math.floor(ie.depth*ct):we=1,Te=0,Ge=0,N=0}H!==null?(U=H.x,$=H.y,q=H.z):(U=0,$=0,q=0);let fe=pe.convert(C.format),be=pe.convert(C.type),ae;C.isData3DTexture?(Y.setTexture3D(C,0),ae=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Y.setTexture2DArray(C,0),ae=D.TEXTURE_2D_ARRAY):(Y.setTexture2D(C,0),ae=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);let he=g.getParameter(D.UNPACK_ROW_LENGTH),Re=g.getParameter(D.UNPACK_IMAGE_HEIGHT),pt=g.getParameter(D.UNPACK_SKIP_PIXELS),Lt=g.getParameter(D.UNPACK_SKIP_ROWS),Pt=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,ie.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ie.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),g.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),g.pixelStorei(D.UNPACK_SKIP_IMAGES,N);let Zt=v.isDataArrayTexture||v.isData3DTexture,je=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let ct=W.get(v),Ut=W.get(C),tt=W.get(ct.__renderTarget),St=W.get(Ut.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,tt.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let _t=0;_t<we;_t++)Zt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(v).__webglTexture,V,N+_t),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(C).__webglTexture,ve,q+_t)),D.blitFramebuffer(Te,Ge,Le,xe,U,$,Le,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||v.isRenderTargetTexture||W.has(v)){let ct=W.get(v),Ut=W.get(C);g.bindFramebuffer(D.READ_FRAMEBUFFER,P),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let tt=0;tt<we;tt++)Zt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ct.__webglTexture,V,N+tt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ct.__webglTexture,V),je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ut.__webglTexture,ve,q+tt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ut.__webglTexture,ve),V!==0?D.blitFramebuffer(Te,Ge,Le,xe,U,$,Le,xe,D.COLOR_BUFFER_BIT,D.NEAREST):je?D.copyTexSubImage3D(ae,ve,U,$,q+tt,Te,Ge,Le,xe):D.copyTexSubImage2D(ae,ve,U,$,Te,Ge,Le,xe);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else je?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(ae,ve,U,$,q,Le,xe,we,fe,be,ie.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(ae,ve,U,$,q,Le,xe,we,fe,ie.data):D.texSubImage3D(ae,ve,U,$,q,Le,xe,we,fe,be,ie):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ve,U,$,Le,xe,fe,be,ie.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ve,U,$,ie.width,ie.height,fe,ie.data):D.texSubImage2D(D.TEXTURE_2D,ve,U,$,Le,xe,fe,be,ie);g.pixelStorei(D.UNPACK_ROW_LENGTH,he),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Re),g.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),g.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt),ve===0&&C.generateMipmaps&&D.generateMipmap(ae),g.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){K=0,J=0,le=null,g.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var or=new B;function mn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;or.copy(e),or[n]=0,or.normalize();let l=.5*a/(a+o),d=1-or.angleTo(i)/c;return Math.sign(or[t])===1?d*l:o/(a+o)+l+l*(1-d)}var oo=class i extends ci{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new B,l=new B,d=new B(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,x=p.length/6,S=new B,m=.5/a;for(let u=0,M=0;u<p.length;u+=3,M+=2)switch(c.fromArray(p,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[u+0]=d.x*Math.sign(c.x)+l.x*r,p[u+1]=d.y*Math.sign(c.y)+l.y*r,p[u+2]=d.z*Math.sign(c.z)+l.z*r,h[u+0]=l.x,h[u+1]=l.y,h[u+2]=l.z,Math.floor(u/x)){case 0:S.set(1,0,0),f[M+0]=mn(S,l,"z","y",r,n),f[M+1]=1-mn(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[M+0]=1-mn(S,l,"z","y",r,n),f[M+1]=1-mn(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[M+0]=1-mn(S,l,"x","z",r,e),f[M+1]=mn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[M+0]=1-mn(S,l,"x","z",r,e),f[M+1]=1-mn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[M+0]=1-mn(S,l,"x","y",r,e),f[M+1]=1-mn(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[M+0]=mn(S,l,"x","y",r,e),f[M+1]=1-mn(S,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var wh={nope:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,52,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,52,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 49.3 L42.7 46.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 49.3 l-6 -5 M19.0 48.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,52,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,52,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.3 46.7 L144.3 44.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.3 44.7 l6 -5 M140.3 43.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 28.8 L16.8 26.7 L19.1 24.9 L21.4 23.4 L23.7 22.1 L26.0 21.2 L28.3 20.6 L30.7 20.3 L33.1 20.2 L35.5 20.5 L38.0 21.1 L40.6 22.0 L43.2 23.3 L44.8 20.7 L42.1 19.0 L39.3 17.6 L36.5 16.5 L33.6 15.8 L30.7 15.4 L27.7 15.4 L24.7 15.8 L21.6 16.5 L18.6 17.6 L15.5 19.1 L12.5 21.0 L9.5 23.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.7 33.7 L119.2 33.1 L121.8 32.5 L124.3 32.0 L126.9 31.5 L129.5 31.2 L132.1 30.9 L134.7 30.6 L137.3 30.5 L139.9 30.4 L142.5 30.3 L145.2 30.4 L147.8 30.5 L148.2 27.5 L145.5 27.0 L142.8 26.6 L140.1 26.3 L137.4 26.0 L134.7 25.8 L131.9 25.6 L129.2 25.6 L126.4 25.6 L123.7 25.6 L120.9 25.8 L118.1 26.0 L115.3 26.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M62 88 Q82 98 102 83",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M100 80 Q106 82 104 88",s:"#17120f",w:2.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M162 14 Q170 4 180 2 M196 4 Q204 10 206 18",s:"#fff",w:3,lc:"round"}],point:[{k:"e",g:[29,50,14,19],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.6 Q29 70 40 56.6",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[31,50,7,7],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[31,50,4.3,4.3],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[33.5,47.2,2.2,2.2],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[28.6,52.5,1,1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 39.5 l-6 -6 M21 34.8 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,19],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.6 Q131 70 142 56.6",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[133,50,7,7],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[133,50,4.3,4.3],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[135.4,47.2,2.2,2.2],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[130.6,52.5,1,1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 39.5 l6 -6 M139 34.8 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 22.8 L16.8 20.7 L19.1 18.9 L21.4 17.4 L23.7 16.1 L26.0 15.2 L28.3 14.6 L30.7 14.3 L33.1 14.2 L35.5 14.5 L38.0 15.1 L40.6 16.0 L43.2 17.3 L44.8 14.7 L42.1 13.0 L39.3 11.6 L36.5 10.5 L33.6 9.8 L30.7 9.4 L27.7 9.4 L24.7 9.8 L21.6 10.5 L18.6 11.6 L15.5 13.1 L12.5 15.0 L9.5 17.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.0 19.2 L120.3 17.7 L122.5 16.5 L124.8 15.6 L127.0 15.0 L129.3 14.6 L131.7 14.6 L134.1 14.9 L136.5 15.4 L139.1 16.3 L141.7 17.6 L144.3 19.2 L147.0 21.1 L149.0 18.9 L146.3 16.5 L143.7 14.4 L140.9 12.7 L138.1 11.2 L135.3 10.1 L132.3 9.4 L129.3 9.0 L126.3 9.0 L123.2 9.4 L120.1 10.2 L117.1 11.3 L114.0 12.8Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 81 Q80 110 100 81 Q80 86 60 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"p",d:"M64 83 Q80 87.5 96 83 L95 87 Q80 91 65 87Z",f:"#fff",sd:"M"},{k:"p",d:"M69 98 Q80 91 91 98 Q86 104.5 80 104.5 Q74 104.5 69 98Z",f:"#ff6f8e",sd:"M"},{k:"p",d:"M80 96 V102",f:"#000",s:"#d94a6e",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1.2,0,0,1.2,-14,-10],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M-22 18 L-34 12 M-24 30 L-38 30 M-22 42 L-34 48",s:"#ffe27a",w:3,lc:"round"}],guns:[{k:"p",d:"M16 56 Q29 36 42 56",s:"#17120f",w:6,lc:"round",sd:"L"},{k:"p",d:"M16 56 l-6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[134,50,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[134,50,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[136.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[131.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M121.1 38.0 L140.9 38.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M140.9 38.0 l6 -5 M136.9 37.0 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.0 33.8 L14.6 33.6 L17.1 33.5 L19.7 33.5 L22.3 33.6 L24.9 33.8 L27.5 34.1 L30.1 34.4 L32.8 34.8 L35.4 35.4 L38.1 36.0 L40.8 36.6 L43.5 37.4 L44.5 34.6 L41.9 33.4 L39.2 32.4 L36.6 31.4 L33.9 30.5 L31.2 29.7 L28.5 28.9 L25.8 28.3 L23.0 27.7 L20.3 27.2 L17.5 26.8 L14.8 26.5 L12.0 26.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.2 25.0 L120.6 23.2 L122.8 21.7 L125.1 20.5 L127.4 19.6 L129.7 19.0 L132.0 18.6 L134.4 18.6 L136.8 18.8 L139.3 19.4 L141.8 20.3 L144.4 21.6 L147.1 23.2 L148.9 20.8 L146.2 18.7 L143.5 17.0 L140.7 15.6 L137.9 14.5 L135.0 13.7 L132.0 13.4 L129.0 13.4 L125.9 13.8 L122.9 14.5 L119.8 15.6 L116.8 17.1 L113.8 19.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M58 81 Q80 102 102 81 Q80 89 58 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"r",g:[66,83,28,5,3],f:"#fff",sd:"M"},{k:"p",d:"M71.6 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M77.2 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M82.8 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M88.4 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M56 79 Q54 84 58 86 M104 79 Q106 84 102 86",s:"#17120f",w:2.4,lc:"round",sd:"M"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.8,0,0,.8,8,22],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1,0,0,1,156,-4],f:"#ffe27a",s:"#c99a1f",w:1}],dab:[{k:"p",d:"M17 38 L39 50 L17 62",s:"#17120f",w:6,lc:"round",lj:"round",sd:"L"},{k:"p",d:"M143 38 L121 50 L143 62",s:"#17120f",w:6,lc:"round",lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M66 94 Q80 90 94 94",s:"#17120f",w:4,lc:"round",sd:"M"},{k:"p",d:"M184 2 L196 10 M176 14 L188 24",s:"#ffe27a",w:3.5,lc:"round"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1.1,0,0,1.1,-16,8],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.8,0,0,.8,176,80],f:"#ffe27a",s:"#c99a1f",w:1}],shrug:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,46,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,46,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,42.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,48.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M20.8 36.2 L37.2 36.2",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M20.8 36.2 l-6 -5 M24.8 35.2 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,46,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,46,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,42.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,48.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M122.8 36.2 L139.2 36.2",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M139.2 36.2 l6 -5 M135.2 35.2 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 24.8 L16.8 22.7 L19.1 20.9 L21.4 19.4 L23.7 18.1 L26.0 17.2 L28.3 16.6 L30.7 16.3 L33.1 16.2 L35.5 16.5 L38.0 17.1 L40.6 18.0 L43.2 19.3 L44.8 16.7 L42.1 15.0 L39.3 13.6 L36.5 12.5 L33.6 11.8 L30.7 11.4 L27.7 11.4 L24.7 11.8 L21.6 12.5 L18.6 13.6 L15.5 15.1 L12.5 17.0 L9.5 19.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.0 21.2 L120.3 19.7 L122.5 18.5 L124.8 17.6 L127.0 17.0 L129.3 16.6 L131.7 16.6 L134.1 16.9 L136.5 17.4 L139.1 18.3 L141.7 19.6 L144.3 21.2 L147.0 23.1 L149.0 20.9 L146.3 18.5 L143.7 16.4 L140.9 14.7 L138.1 13.2 L135.3 12.1 L132.3 11.4 L129.3 11.0 L126.3 11.0 L123.2 11.4 L120.1 12.2 L117.1 13.3 L114.0 14.8Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 90 Q66 84 72 90 T84 90 T96 90 T104 88",s:"#17120f",w:4.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1,0,0,1,150,18],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1,0,0,1,150,18],f:"#fff",o:.8}],vibe:[{k:"p",d:"M16 56 Q29 36 42 56",s:"#17120f",w:6,lc:"round",sd:"L"},{k:"p",d:"M16 56 l-6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"L"},{k:"p",d:"M118 56 Q131 36 144 56",s:"#17120f",w:6,lc:"round",sd:"R"},{k:"p",d:"M144 56 l6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"R"},{k:"p",d:"M13.3 26.7 L15.8 25.4 L18.3 24.3 L20.7 23.4 L23.2 22.7 L25.7 22.1 L28.1 21.7 L30.6 21.6 L33.2 21.5 L35.7 21.7 L38.3 22.1 L40.9 22.7 L43.5 23.4 L44.5 20.6 L41.8 19.5 L39.1 18.7 L36.3 18.0 L33.5 17.6 L30.7 17.3 L27.9 17.3 L25.0 17.4 L22.2 17.8 L19.3 18.3 L16.4 19.1 L13.5 20.1 L10.7 21.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M117.1 24.8 L119.5 23.8 L121.9 23.1 L124.4 22.5 L126.9 22.0 L129.4 21.8 L131.9 21.7 L134.4 21.9 L136.9 22.2 L139.5 22.7 L142.1 23.4 L144.7 24.3 L147.3 25.3 L148.7 22.7 L146.0 21.3 L143.3 20.1 L140.5 19.1 L137.7 18.3 L135.0 17.7 L132.1 17.3 L129.3 17.1 L126.5 17.1 L123.6 17.3 L120.7 17.7 L117.8 18.3 L114.9 19.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M15 82 l4 -6 M21 82 l4 -6 M27 82 l4 -6 M131 82 l4 -6 M137 82 l4 -6 M143 82 l4 -6",f:"#000",s:"#e8577f",w:1.8,lc:"round",sd:"M"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 81 Q80 110 100 81 Q80 86 60 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"p",d:"M64 83 Q80 87.5 96 83 L95 87 Q80 91 65 87Z",f:"#fff",sd:"M"},{k:"p",d:"M69 98 Q80 91 91 98 Q86 104.5 80 104.5 Q74 104.5 69 98Z",f:"#ff6f8e",sd:"M"},{k:"p",d:"M80 96 V102",f:"#000",s:"#d94a6e",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[1,0,0,1,-18,-30],s:"#fff",w:2.4,lc:"round",lj:"round"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[.8,0,0,.8,170,-40],s:"#fff",w:2.4,lc:"round",lj:"round"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[.7,0,0,.7,60,-48],s:"#fff",w:2.4,lc:"round",lj:"round"}],facepalm:[{k:"p",d:"M16 50 Q29 59 42 50",s:"#17120f",w:5,lc:"round",sd:"L"},{k:"p",d:"M16 50 l-5 4 M21 55 l-3 5",f:"#000",s:"#17120f",w:2.6,lc:"round",sd:"L"},{k:"p",d:"M12.9 37.6 L15.5 36.8 L18.2 35.9 L20.8 35.1 L23.4 34.2 L26.0 33.4 L28.6 32.5 L31.3 31.7 L33.9 30.8 L36.5 30.0 L39.1 29.2 L41.7 28.3 L44.4 27.5 L43.6 24.5 L40.9 25.0 L38.2 25.5 L35.5 26.0 L32.8 26.5 L30.1 27.0 L27.4 27.5 L24.7 27.9 L21.9 28.4 L19.2 28.9 L16.5 29.4 L13.8 29.9 L11.1 30.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 98 Q80 84 100 98",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M20 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M44 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M116 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M140 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"e",g:[40,104,6,6],f:"#d8d4e6",o:.8},{k:"e",g:[30,110,4.5,4.5],f:"#d8d4e6",o:.7},{k:"e",g:[22,115,3,3],f:"#d8d4e6",o:.6}],shh:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[25,53,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[25,53,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[27.8,49.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[22.2,55.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.3 53.3 L15.2 52.7 L15.1 52.0 L15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.3 53.3 L42.6 46.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.3 53.3 l-6 -5 M19.3 52.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"p",d:"M19 72 Q29 77 39 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[127,53,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[127,53,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[129.8,49.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[124.2,55.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3 L144.9 52.0 L144.8 52.7 L144.7 53.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.4 46.0 L144.7 53.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.7 53.3 l6 -5 M140.7 52.3 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M121 72 Q131 77 141 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M13.0 33.6 L15.4 32.7 L17.8 31.8 L20.3 30.8 L22.8 29.7 L25.3 28.6 L27.9 27.5 L30.6 26.2 L33.3 25.0 L36.0 23.7 L38.8 22.3 L41.7 20.9 L44.6 19.4 L43.4 16.6 L40.4 17.8 L37.4 18.8 L34.5 19.8 L31.6 20.8 L28.8 21.7 L26.1 22.5 L23.4 23.3 L20.8 24.1 L18.2 24.7 L15.8 25.3 L13.3 25.9 L11.0 26.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M114.5 21.4 L117.6 22.6 L120.6 23.7 L123.5 24.7 L126.4 25.7 L129.3 26.6 L132.1 27.5 L134.8 28.3 L137.5 29.0 L140.1 29.7 L142.7 30.3 L145.2 30.9 L147.6 31.4 L148.4 28.6 L146.1 27.7 L143.8 26.8 L141.4 25.8 L139.0 24.8 L136.5 23.7 L133.9 22.5 L131.3 21.3 L128.7 20.1 L126.0 18.8 L123.2 17.4 L120.4 16.0 L117.5 14.6Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M69 88 Q74 80 80 83 Q86 80 91 88 Q86 96 80 95 Q74 96 69 88Z",f:"#8a4fae",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M72 88 Q80 86 88 88",s:"#4d2167",w:2,lc:"round",sd:"M"},{k:"e",g:[76,91.5,3,1.3],f:"#fff",o:.5,sd:"M"},{k:"p",d:"M100 76 Q108 82 100 90 M108 72 Q120 82 108 94",s:"#fff",w:2.5,lc:"round"}],scheme:[{k:"r",g:[0,0,160,62,30],f:"rgba(20,0,40,.22)"},{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[33,51,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[33,51,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[35.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[30.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7 L43.0 51.3 L42.9 52.0 L42.8 52.7 L42.7 53.3 L42.6 54.0 L42.5 54.6 L42.3 55.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M16.3 42.9 L42.3 55.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M16.3 42.9 l-6 -5 M20.3 41.9 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[135,51,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[135,51,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[137.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[132.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.7 55.3 L117.5 54.6 L117.4 54.0 L117.3 53.3 L117.2 52.7 L117.1 52.0 L117.0 51.3 L117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.7 55.3 L143.7 42.9",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M143.7 42.9 l6 -5 M139.7 41.9 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M8.6 24.3 L11.6 25.1 L14.6 25.9 L17.6 26.9 L20.6 27.8 L23.6 28.9 L26.7 30.0 L29.7 31.1 L32.8 32.3 L35.8 33.6 L38.9 34.9 L42.0 36.3 L45.0 37.7 L47.0 34.3 L44.0 32.4 L41.1 30.6 L38.2 28.9 L35.2 27.2 L32.3 25.6 L29.3 24.0 L26.4 22.5 L23.4 21.0 L20.4 19.6 L17.4 18.3 L14.4 17.0 L11.4 15.7Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M148.6 15.7 L145.6 17.0 L142.6 18.3 L139.6 19.6 L136.6 21.0 L133.6 22.5 L130.7 24.0 L127.7 25.6 L124.8 27.2 L121.8 28.9 L118.9 30.6 L116.0 32.4 L113.0 34.3 L115.0 37.7 L118.0 36.3 L121.1 34.9 L124.2 33.6 L127.2 32.3 L130.3 31.1 L133.3 30.0 L136.4 28.9 L139.4 27.8 L142.4 26.9 L145.4 25.9 L148.4 25.1 L151.4 24.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M52 79 Q80 106 110 74 Q82 91 52 79Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"r",g:[64,80,34,4,3],f:"#fff",sd:"M"},{k:"p",d:"M69.7 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M75.3 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M81.0 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.7 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.3 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M50 77 L46 72 M112 72 L117 67",f:"#000",s:"#17120f",w:2.6,lc:"round",sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.6,0,0,.6,142,40],f:"#ffe27a",s:"#c99a1f",w:1}],perfect:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,51,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,51,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7 L43.0 51.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 51.3 L43.0 51.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 51.3 l-6 -5 M19.0 50.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"p",d:"M19 72 Q29 77 39 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,51,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,51,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 51.3 L117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 51.3 L145.0 51.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M145.0 51.3 l6 -5 M141.0 50.3 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M121 72 Q131 77 141 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.2 35.7 L14.9 35.4 L17.5 35.1 L20.1 34.8 L22.7 34.6 L25.4 34.3 L28.0 34.1 L30.6 34.0 L33.3 33.8 L35.9 33.7 L38.6 33.6 L41.2 33.5 L43.9 33.5 L44.1 30.5 L41.4 30.2 L38.7 29.8 L36.1 29.6 L33.4 29.3 L30.7 29.1 L28.0 28.9 L25.3 28.7 L22.6 28.6 L19.9 28.4 L17.2 28.4 L14.5 28.3 L11.8 28.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.2 23.0 L120.6 21.2 L122.8 19.7 L125.1 18.5 L127.4 17.6 L129.7 17.0 L132.0 16.6 L134.4 16.6 L136.8 16.8 L139.3 17.4 L141.8 18.3 L144.4 19.6 L147.1 21.2 L148.9 18.8 L146.2 16.7 L143.5 15.0 L140.7 13.6 L137.9 12.5 L135.0 11.7 L132.0 11.4 L129.0 11.4 L125.9 11.8 L122.9 12.5 L119.8 13.6 L116.8 15.1 L113.8 17.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M74 88 Q80 77 92 80 Q102 80 104 87 Q102 95 92 96 Q80 98 74 88Z",f:"#8a4fae",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M78 88 Q90 85 102 87",s:"#4d2167",w:2,sd:"M"},{k:"e",g:[92,92,5,1.6],f:"#fff",o:.5,sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.9,0,0,.9,-28,40],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.6,0,0,.6,-6,16],f:"#ffe27a",s:"#c99a1f",w:1}],pat:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,48,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,48,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,44.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,50.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.2 52.7 L15.1 52.0 L15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.2 52.7 L43.0 50.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.2 52.7 l-6 -5 M19.2 51.7 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,48,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,48,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,44.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,50.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3 L144.9 52.0 L144.8 52.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 50.0 L144.8 52.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.8 52.7 l6 -5 M140.8 51.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M13.3 33.5 L15.8 32.5 L18.2 31.5 L20.7 30.7 L23.2 30.1 L25.7 29.5 L28.2 29.1 L30.7 28.8 L33.2 28.7 L35.8 28.7 L38.4 28.8 L41.0 29.1 L43.6 29.5 L44.4 26.5 L41.7 25.7 L38.9 25.1 L36.2 24.6 L33.4 24.2 L30.6 24.0 L27.8 23.9 L25.0 23.9 L22.2 24.2 L19.3 24.5 L16.5 25.0 L13.6 25.7 L10.7 26.5Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.9 31.6 L119.4 30.9 L121.8 30.3 L124.3 29.8 L126.8 29.4 L129.3 29.2 L131.8 29.1 L134.4 29.2 L137.0 29.3 L139.6 29.6 L142.2 30.1 L144.8 30.7 L147.5 31.4 L148.5 28.6 L145.9 27.5 L143.2 26.5 L140.4 25.6 L137.7 24.9 L134.9 24.3 L132.2 23.9 L129.4 23.6 L126.5 23.4 L123.7 23.5 L120.8 23.6 L118.0 23.9 L115.1 24.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M15 82 l4 -6 M21 82 l4 -6 M27 82 l4 -6 M131 82 l4 -6 M137 82 l4 -6 M143 82 l4 -6",f:"#000",s:"#e8577f",w:1.8,lc:"round",sd:"M"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M56 83 Q62 72 72 75 Q78 76 80 80 Q82 76 88 75 Q98 72 104 83 Q108 90 100 92 Q94 84 86 86 Q82 87 80 85 Q78 87 74 86 Q66 84 60 92 Q52 90 56 83Z",f:"#e8b84a",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M62 84 Q70 79 77 82 M98 84 Q90 79 83 82 M64 88 Q70 84 76 85 M96 88 Q90 84 84 85",s:"#b07d17",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M70 97 Q80 102 90 97",s:"#17120f",w:3.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M128 -40 Q136 -48 146 -46 M132 -30 Q142 -34 150 -30",s:"#fff",w:2.5,lc:"round"}],sideeye:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,52,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,52,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 50.7 L43.0 50.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 50.7 l-6 -5 M19.0 49.7 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,52,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,52,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 50.7 L145.0 50.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M145.0 50.7 l6 -5 M141.0 49.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M8.9 36.9 L12.0 37.4 L15.1 37.9 L18.1 38.3 L21.2 38.7 L24.3 39.1 L27.3 39.4 L30.4 39.8 L33.5 40.1 L36.5 40.3 L39.6 40.6 L42.6 40.8 L45.7 41.0 L46.3 35.0 L43.4 34.5 L40.4 34.0 L37.5 33.4 L34.5 32.8 L31.6 32.2 L28.7 31.6 L25.7 30.9 L22.8 30.2 L19.9 29.5 L16.9 28.7 L14.0 27.9 L11.1 27.1Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.3 27.0 L119.0 24.8 L121.6 23.0 L124.3 21.4 L126.9 20.2 L129.6 19.2 L132.3 18.6 L135.0 18.3 L137.8 18.2 L140.6 18.5 L143.4 19.1 L146.3 20.0 L149.3 21.3 L150.7 18.7 L147.7 17.0 L144.6 15.6 L141.4 14.5 L138.2 13.8 L135.0 13.4 L131.7 13.4 L128.4 13.8 L125.1 14.5 L121.7 15.6 L118.4 17.0 L115.0 18.9 L111.7 21.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M18 70 Q26 74 36 72 M124 72 Q134 74 142 70",s:"rgba(20,8,40,.3)",w:2,lc:"round"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M64 92 Q80 90 98 93",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"e",g:[172,6,3.5,3.5],f:"#fff"},{k:"e",g:[184,0,3.5,3.5],f:"#fff"},{k:"e",g:[196,-6,3.5,3.5],f:"#fff"}],sweat:[{k:"e",g:[29,50,14,18],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.3 Q29 69 40 56.3",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[34,49,6,6],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[34,49,3.7,3.7],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[36.1,46.6,1.9,1.9],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[31.9,51.1,.8,.8],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 40.1 l-6 -6 M21 35.6 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,18],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.3 Q131 69 142 56.3",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[136,49,6,6],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[136,49,3.7,3.7],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[138.1,46.6,1.9,1.9],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[133.9,51.1,.8,.8],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 40.1 l6 -6 M139 35.6 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.5 27.7 L15.0 27.1 L17.5 26.5 L20.0 25.7 L22.5 24.9 L25.1 24.0 L27.8 23.0 L30.5 21.9 L33.2 20.8 L36.0 19.6 L38.8 18.2 L41.7 16.8 L44.6 15.4 L43.4 12.6 L40.4 13.7 L37.4 14.8 L34.5 15.7 L31.7 16.5 L28.9 17.3 L26.2 18.0 L23.6 18.6 L21.0 19.1 L18.5 19.5 L16.1 19.9 L13.7 20.1 L11.5 20.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M114.5 17.4 L117.6 18.6 L120.6 19.6 L123.6 20.6 L126.5 21.5 L129.4 22.3 L132.2 23.0 L135.0 23.6 L137.7 24.2 L140.3 24.6 L142.8 25.0 L145.3 25.3 L147.8 25.5 L148.2 22.5 L145.9 22.0 L143.6 21.3 L141.2 20.6 L138.8 19.8 L136.3 18.9 L133.8 18.0 L131.2 17.0 L128.6 15.8 L125.9 14.6 L123.2 13.4 L120.4 12.0 L117.5 10.6Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"r",g:[58,80,44,17,7],f:"#e86a8a",s:"#17120f",w:3,sd:"M"},{k:"r",g:[61,82,38,6,3],f:"#fff",sd:"M"},{k:"p",d:"M67.3 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M73.7 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M80.0 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.3 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.7 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"r",g:[61,89,38,6,3],f:"#fff",sd:"M"},{k:"p",d:"M67.3 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M73.7 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M80.0 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.3 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.7 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M58 88.5 H102",f:"#000",s:"#17120f",w:1.8,sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1.2,0,0,1.2,150,-6],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1.2,0,0,1.2,150,-6],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1,0,0,1,168,18],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1,0,0,1,168,18],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1.1,0,0,1.1,6,-2],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1.1,0,0,1.1,6,-2],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[.9,0,0,.9,-10,30],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[.9,0,0,.9,-10,30],f:"#fff",o:.8},{k:"p",d:"M30 -30 q5 -6 0 -12 q-5 -6 0 -12 M80 -40 q5 -6 0 -12 q-5 -6 0 -12 M130 -30 q5 -6 0 -12 q-5 -6 0 -12",s:"#ff9a6b",w:2.6,lc:"round"}],scuba:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,50,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,50,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 40.6 l-6 -6 M21 36.4 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,50,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,50,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 40.6 l6 -6 M139 36.4 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"e",g:[94,86,12,8],f:"#ff8a3d",s:"#17120f",w:2.5},{k:"p",d:"M86 86 H102 M88 82 V90 M94 81 V91 M100 82 V90",f:"#000",s:"#c4561b",w:1.6},{k:"p",d:"M70 92 Q78 96 84 92",s:"#17120f",w:3,lc:"round"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[172,-40,6,6],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[169.9,-42.1,1.5,1.5],f:"#fff"},{k:"e",g:[182,-58,4,4],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[180.6,-59.4,1,1],f:"#fff"},{k:"e",g:[166,-70,5,5],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[164.2,-71.8,1.2,1.2],f:"#fff"}]},Nl={spider:{gv:"#c1272d",gl:"#0d0d0d",gs:"#8f1d22",gk:"#0d0d0d",su:"#c1272d",ss:"#8f1d22",sl:"#0d0d0d",so:"#1d3f9e",lens:["#ffffff","#0d0d0d",5]},thor:{gv:"#9aa4b2",gl:"#2b3446",gs:"#6f7a88",gk:"#e8edf3",su:"#3b2a1e",ss:"#2a1d14",sl:"#e0b84a",so:"#e0b84a",lens:null,face:15,lid:"#e2b98c"},captain:{gv:"#c1272d",gl:"#5a0f12",gs:"#8f1d22",gk:"#f3d6d6",su:"#c1272d",ss:"#8f1d22",sl:"#ffffff",so:"#ffffff",lens:null,face:15,lid:"#e2b98c"},iron:{gv:"#e0b030",gl:"#6b4f0a",gs:"#9a7312",gk:"#fff3b0",su:"#e0b030",ss:"#9a7312",sl:"#b3202a",so:"#b3202a",lens:["#eaf8ff","#7ee8ff",3.5]},strange:{gv:"#5a3b1c",gl:"#2a1a0c",gs:"#3e2812",gk:"#e0b84a",su:"#5a3b1c",ss:"#3e2812",sl:"#e0b84a",so:"#e0b84a",lens:null,face:15,lid:"#dcb48c"},superman:{gv:"#1f5fd6",gl:"#0c2a66",gs:"#174aa8",gk:"#8fb4ff",su:"#c1272d",ss:"#8f1d22",sl:"#f1c40f",so:"#8f1d22",lens:null,face:15,lid:"#e4bb92"},batman:{gv:"#343a49",gl:"#0d0d0d",gs:"#22262f",gk:"#5a6276",su:"#3a4152",ss:"#22262f",sl:"#f1c40f",so:"#15171c",lens:["#ffffff","#0d0d0d",4]}};var _s=document.getElementById("mascot"),En;try{En=new so({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch(i){window.__buddy3d={ok:!1,error:String(i&&i.message||i)}}if(En){let lr=function(N){Vn=N;let U=window.COSTUME_ART&&window.COSTUME_ART[N];if(!U){Kt.visible=!1;return}for(let $ of["plain","emote"]){let ie=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 114" width="640" height="456">${$==="emote"?"<style>.cf{display:none}</style>":""}<defs>${window.COSTUME_DEFS}</defs><g clip-path="url(#bodyClip)">${U.under}${U.over}</g></svg>`,fe=new Image;fe.onload=()=>{if(Vn!==N)return;let be=document.createElement("canvas");be.width=640,be.height=456,be.getContext("2d").drawImage(fe,0,0,640,456);let ae=new rs(be);ae.colorSpace=Ot,ae.anisotropy=4,Kn[$]&&Kn[$].dispose(),Kn[$]=ae,Kt.material.map=null,Kt.visible=!0,we=!0,Te=12},fe.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(ie)}},Ge=function(){let N=Ke.act==="idle";if(setTimeout(Ge,N?250:Ke.act==="sit"?125:66),document.hidden||N&&!we&&Te<=0)return;N?Te--:Te=12,we=!1;let U=H(),$=Math.min(.1,(U-ve)/1e3);ve=U;let q=(U-Le)/1e3,ie=1-Math.pow(.001,$),fe=Ke.act,be=Math.sin(q*.6)*.32,ae=Math.sin(q*Math.PI*2/2.6)*.015,he=0,Re=0,pt=1,Lt=1,Pt=0,Zt=-.9,je=.76,ct=.9,Ut=.76,tt=0,St=0,_t=0,mt=0,Ui=0,jn=0,cr=0,Ul=0,Fl=1,Ss=0,co=!1,ho=!1,uo=!1,Ol=!1,Bl=!1,kl=!1,Fi=0,bs=0;switch(o.color.copy(Ke.costume!=="none"?v:jt),fe){case"walk":case"run":{let Oe=fe==="run"?14:8;be=Ke.dir*(fe==="run"?1.05:.85),ae=Math.abs(Math.sin(q*Oe))*(fe==="run"?.09:.05),cr=Math.sin(q*Oe)*(fe==="run"?.7:.45),tt=Math.sin(q*Oe)*.6,_t=-Math.sin(q*Oe)*.6,he=Ke.dir*-.04,Re=fe==="run"?.12:.04,fe==="run"&&(St=-2.5,mt=2.5);break}case"type":be=Math.sin(q*.8)*.08,Re=.08,tt=-1+Math.sin(q*28)*.12,_t=-1+Math.sin(q*28+1.6)*.12,St=.35,mt=-.35,Ui=jn=.15,Ol=!0,C(),Ul=Math.abs(Math.sin(q*12))*.02,bs=-.04;break;case"read":be=Math.sin(q*.5)*.1,Re=-.08,St=-2.3,mt=2.3,tt=-.3,_t=-.3,Bl=!0,Fi=Math.sin(q*2.6)*.05,bs=.04;break;case"search":be=Math.sin(q*1.4)*.6,mt=2+Math.sin(q*6)*.25,_t=-.6,kl=!0,Fi=Math.sin(q*3)*.06;break;case"think":be=-.25,bs=.06,Fi=-.03,he=Math.sin(q*.8)*.04,Ke.think==="chin"?(ct=.3,Ut=.5,jn=.5,_t=-1.25+Math.sin(q*5)*.08,mt=-.1,Zt=.05,je=.3,Ui=.5,tt=-1.5,St=0,C()):(mt=2.7,_t=-.4+Math.sin(q*9)*.1);break;case"wait":{be=0;let Oe=q%1.8/1.8;Pt=Oe<.35?Math.sin(Oe/.35*Math.PI)*.22:0,Lt=Oe<.08?.92:Oe>.33&&Oe<.42?.94:1,pt=2-Lt,mt=2.6+Math.sin(q*11)*.35,he=Math.sin(q*3.5)*.08;break}case"look":be=Math.sin(q*1.2)*.9,mt=2.2,_t=-.9,Fi=Math.sin(q*1.2)*.05;break;case"sit":Fl=.32,ae=-.3+Math.sin(q*1.5)*.01,be=Math.sin(q*.4)*.25,St=-.3,mt=.3;break;case"hero":{let Oe=Ke.costume;be=Math.sin(q*.6)*.3;let Hn=q*2,Vl=!0;if(Oe==="spider"){let ut=q%9/9;Ss=Yt(ut,[[0,-.7],[.14,-.7],[.28,-.2],[.4,.62],[.44,.7],[.52,.7],[.72,-.2],[.84,-.62],[.88,-.7],[1,-.7]]),Pt=Yt(ut,[[0,0],[.16,0],[.28,.5],[.4,.1],[.44,0],[.54,0],[.72,.5],[.84,.1],[.88,0],[1,0]]),he=Yt(ut,[[0,0],[.16,.2],[.28,-.7],[.4,-.25],[.44,0],[.54,-.2],[.72,.7],[.84,.25],[.88,0],[1,0]]),mt=2.9,_t=-.2,St=-.5;let an=ut>.16&&ut<.46,yi=ut>.54&&ut<.9;if(co=an||yi,co){let Mi=an?1.15:-1.15,Ls=1.9,Rn=Ss+.85*Math.cos(he),Si=Pt+.9;zn.set(Mi-Rn,Ls-Si,0);let ur=zn.length();gt.position.set((Mi+Rn)/2,(Ls+Si)/2,.3),gt.rotation.z=Math.atan2(zn.y,zn.x)-Math.PI/2,gt.scale.set(1,ur/1.4,1)}}else if(Oe==="thor"){let ut=q%7/7;Vl=ut>.14&&ut<.86;let an=Yt(ut,[[.14,1.3],[.19,1],[.82,1.05],[.86,.9]]);u.scale.setScalar(an),Bn.visible=ut>.13&&ut<.17||ut>.83&&ut<.86,Ni.intensity=Yt(ut,[[0,0],[.13,0],[.14,14],[.18,0],[.83,0],[.84,10],[.88,0],[1,0]]),mt=2.9+Math.sin(q*5)*.08,_t=-.3}else if(Oe==="strange"){let ut=q%8/8,an=Yt(ut,[[0,.01],[.12,1],[.38,1],[.46,.01],[1,.01]]),yi=Yt(ut,[[0,.01],[.4,.01],[.54,1],[.8,1],[.9,.01],[1,.01]]);Tn[0].visible=an>.02,Tn[0].scale.setScalar(an*.8),Tn[1].visible=yi>.02,Tn[1].scale.setScalar(yi*.8),Tn[0].rotation.z=q*1.5,Tn[1].rotation.z=-q*1.5,Ss=Yt(ut,[[0,0],[.12,0],[.34,-.78],[.35,.78],[.58,.78],[.78,0]]);let Mi=Yt(ut,[[0,1],[.12,1],[.34,.1],[.35,.1],[.58,.2],[.78,1]]);u.scale.setScalar(Mi),St=-1.2,mt=1.2,ho=ut<.2||ut>.78&&ut<.92}else if(Oe==="iron"){let ut=q%9/9;An.visible=!0;let an=(Rn,Si)=>Yt(ut,[[0,0],[Rn,0],[Si,1],[.9,1],[.96,0],[1,0]]);kn.forEach((Rn,Si)=>{let ur=an(.04+Si*.01,.12+Si*.01);Rn.visible=ur>.01,Rn.position.y=-.3-(1-ur)*.9});let yi=an(.18,.25);$n.visible=yi>.01,$n.position.y=.74+(1-yi)*1.2;let Mi=an(.26,.32);vi.visible=Mi>.01,vi.scale.setScalar(Math.max(.01,Mi));let Ls=an(.08,.18);Zt=-.9-(1-Ls)*1.2,ct=.9+(1-Ls)*1.2,Ss=Yt(ut,[[0,0],[.5,0],[.52,-.5],[.62,.9],[.7,.95],[.78,-.5],[.84,0],[1,0]]),Pt=Yt(ut,[[0,0],[.38,0],[.46,.35],[.62,.7],[.7,.5],[.78,.5],[.84,.3],[.88,0],[1,0]]),he=Yt(ut,[[0,0],[.46,0],[.52,1],[.62,1.3],[.7,-1.2],[.78,-1.2],[.84,0],[1,0]]),_t=-1.4,mt=.3,St=-.4,vs.forEach(Rn=>{Rn.visible=ut>.38&&ut<.86,Rn.scale.y=1+Math.sin(q*40)*.25})}else Oe==="superman"?(Pt=.3+Math.sin(Hn)*.1,he=-.55,Re=.15,mt=2.6,_t=-.4):Oe==="captain"?(St=-.6,tt=-1,Ui=.15,he=Math.sin(Hn)*.03):Oe==="batman"?(he=Math.sin(Hn*.7)*.05,mt=0,ae=0):ae=Math.sin(Hn)*.02;u.visible=Vl;break}case"farm":{let Oe=q*1.9;be=Math.sin(q*.55)*.35,he=Math.sin(Oe*.5)*.07,ae=Math.abs(Math.sin(Oe*.5))*.03-.02,uo=!0,mt=1.45+Math.sin(Oe)*.28,_t=-.2,St=-1.45+Math.sin(Oe+Math.PI)*.28,tt=-.2,C(),cr=0;break}case"emote-nope":ct=.75,Ut=1.2,mt=.25+Math.sin(q*14)*.35,he=Math.sin(q*3.9)*.06,be=Math.sin(q*3.9)*.3;break;case"emote-point":mt=.9,_t=-1.25+Math.sin(q*14)*.12,jn=.2,be=-.1;break;case"emote-guns":mt=1.57,St=-1.57,_t=-.5-(q%.6<.1?.4:0),tt=-.5-((q+.3)%.6<.1?.4:0);break;case"emote-dab":mt=2.4,St=-.6,tt=-1.3,Ui=.4,he=-.15,Re=.12;break;case"emote-shrug":mt=1,St=-1,Pt=Math.max(0,Math.sin(q*4.8))*.05;break;case"emote-vibe":he=Math.sin(q*7)*.12,be=Math.sin(q*7)*.25,mt=2.6+Math.sin(q*7)*.3,St=-2.6-Math.sin(q*7+1.5)*.3;break;case"emote-facepalm":ct=.25,Ut=.75,jn=.55,_t=-1.4,Re=.15,ae=-.04;break;case"emote-shh":ct=.1,Ut=.45,jn=.55,_t=-1.5,be=.1,he=Math.sin(q*2)*.03;break;case"emote-scheme":ct=.2,Ut=.4,jn=.5,Zt=-.2,je=.4,Ui=.5,_t=-1.4+Math.sin(q*22)*.12,tt=-1.4+Math.sin(q*22+1.6)*.12,Re=.1;break;case"emote-perfect":ct=.7,Ut=1,mt=.6+Math.sin(q*12)*.1,_t=-.4;break;case"emote-pat":ct=.8,Ut=.82,mt=-2.7+Math.abs(Math.sin(q*10))*.12,_t=-.15,he=-.05,be=-.3;break;case"emote-sideeye":be=.45,Fi=.06,ae=0;break;case"emote-sweat":ct=.3+Math.sin(q*12)*.25,Ut=1.05,jn=.45,_t=-1.5,bs=.03;break;case"emote-scuba":{let Oe=q*7;he=Math.sin(Oe)*.12,be=Math.sin(Oe)*.4,Pt=Math.abs(Math.sin(Oe))*.08,mt=1.3+Math.sin(Oe)*1.3,St=-1.3+Math.sin(Oe)*1.3,cr=Math.sin(Oe*2)*.4;break}default:ae=-.01,be=.22,Re=.05}Ke.act==="hero"&&["spider","thor","strange","iron"].includes(Ke.costume)||(u.visible=!0,u.scale.setScalar(1),An.visible=!1,Tn.forEach(Oe=>{Oe.visible=!1}),Bn.visible=!1,Ni.intensity=0,vs.forEach(Oe=>{Oe.visible=!1})),u.position.x=Ss,V=z(V,be,ie*.9),u.rotation.y=V,u.position.y=Pt,M.position.y=ae,M.rotation.z=z(M.rotation.z,he,ie),M.rotation.x=z(M.rotation.x,Re,ie),M.scale.set(z(M.scale.x,pt,ie),z(M.scale.y,Lt,ie),1),L.position.x=z(L.position.x,Zt,ie),L.position.y=z(L.position.y,je,ie),b.position.x=z(b.position.x,ct,ie),b.position.y=z(b.position.y,Ut,ie),L.rotation.x=z(L.rotation.x,tt,ie),L.rotation.z=z(L.rotation.z,St,ie),L.position.z=z(L.position.z,Ui,ie),b.rotation.x=z(b.rotation.x,_t,ie),b.rotation.z=z(b.rotation.z,mt,ie),b.position.z=z(b.position.z,jn,ie);for(let Oe of _)Oe.rotation.x=(Oe.userData.phase?1:-1)*cr,Oe.position.y=.02+(Oe.userData.phase?Ul:0),Oe.scale.y=z(Oe.scale.y,Fl,ie);let hr=Tt[Ke.costume];Qe.visible=!!(hr&&hr.cape),At.visible=Ke.costume==="batman",rt.visible=!1;let zl=fe.startsWith("emote-");ot.visible=Ke.costume==="thor"&&!zl,We.visible=Ke.costume==="captain"&&!zl,gt.visible=co,yt.visible=Rt.visible=ho,ho&&(yt.rotation.z=q*2,Rt.rotation.z=-q*2),hr&&hr.cape&&(Qe.rotation.x=.12+Math.sin(q*(Ke.costume==="superman"?9:2.5))*.1),gn.visible=uo,gn.rotation.z=uo?Math.sin(q*1.9*.5)*.03:0,K.visible=Ol,J.visible=Bl,re.visible=kl,Fe.visible=Ke.shades==="sunglasses"&&fe!=="emote-scuba",Se.visible=Ke.shades==="goggles"||fe==="emote-scuba";let Eh=["idle","sit","look","walk"].includes(fe);if(ze.visible=Ke.coffee&&Eh,ze.visible&&fe!=="walk"){let Oe=q%7/7;if(Oe>.58&&Oe<.82){let Hn=Math.sin((Oe-.58)/.24*Math.PI);b.rotation.z=1.1*Hn,b.rotation.x=-1.3*Hn}}J.position.y=1.62+Math.sin(q*2)*.03;let Oi=fe.startsWith("emote-")?fe.slice(6):"";Oi!==xe&&(xe=Oi,lo(Oi)),Oi&&(Fe.visible=!1);let fo=Oi&&Kn.emote||Kn.plain;Kt.visible&&fo&&Kt.material.map!==fo&&(Kt.material.map=fo,Kt.material.needsUpdate=!0);for(let[Oe,Hn]of Object.entries(F))Hn.visible=!Oi&&Oe===Ke.eyes&&Ke.shades!=="sunglasses"&&!["spider","iron","batman"].includes(Ke.costume);let Th=q%3.4>3.25?.1:1;for(let Oe of P.concat(X))Oe.scale.y=Th;w.position.x=z(w.position.x,Fi,ie),w.position.y=z(w.position.y,bs,ie),En.render(t,n)},i=_s.clientWidth||160,e=_s.clientHeight||150;En.setPixelRatio(Math.min((window.devicePixelRatio||1)*(window.__zoom3d||1),4)),En.setSize(i,e),En.setClearColor(0,0),En.outputColorSpace=Ot,En.domElement.id="buddy3d",En.domElement.style.display="",_s.appendChild(En.domElement);let t=new Fs,n=new zt(30,i/e,.1,50);n.position.set(0,1.05,5.1),n.lookAt(0,.5,0),t.add(new Ws(16774378,3811874,1.7));let s=new ls(16777215,2.1);s.position.set(3,5,4),t.add(s);let r=new ls(16765624,.9);r.position.set(-3,2.5,-3.5),t.add(r);let a=new it({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),o=new it({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),c=new it({color:1511951,roughness:.35}),l=new Ht({color:16777215}),d=new it({color:2762019,roughness:.6}),p=new it({color:16051944,roughness:.8}),h=new it({color:10474751,roughness:.1,metalness:.2,transparent:!0,opacity:.55}),f=(N,U,$,q,ie=.06)=>new qe(new oo(N,U,$,3,Math.min(ie,N/2,U/2,$/2)),q),x=.8,S=.01,m=(N,U)=>[(N-80)*S,(114-U)*S],u=new ht;t.add(u);let M=new ht;u.add(M);let A=f(1.6,1.14,x,a,.09);A.position.set(0,.57,0),M.add(A);let y=(N,U,$,q,ie,fe,be,ae=!0)=>{let he=new ht;he.position.set(ie,fe,be);let Re=f(N,U,$,q,.05);return Re.position.y=ae?-U/2:U/2,he.add(Re),he},L=y(.2,.38,.42,o,-.9,.76,0);M.add(L);let b=y(.2,.38,.42,o,.9,.76,0);M.add(b);let T=a.clone(),_=[-.72,-.36,.35,.72].map((N,U)=>{let $=y(.17,.46,.3,T,N,.02,0);return $.userData.phase=U%2,u.add($),$}),w=new ht;w.position.z=x/2+.012,M.add(w);let R=(N,U,$,q,ie,fe=6)=>{let[be,ae]=m(U,$),[he,Re]=m(q,ie),pt=Math.hypot(he-be,Re-ae)+fe*S,Lt=f(pt,fe*S,.04,c,.015);Lt.position.set((be+he)/2,(ae+Re)/2,0),Lt.rotation.z=Math.atan2(Re-ae,he-be),N.add(Lt)},F={},O=(N,U)=>{let $=new ht;return U($),$.visible=!1,w.add($),F[N]=$,$},G=(N,U,$,q,ie,fe=!0)=>{let[be,ae]=m(U,$),he=new ht;he.position.set(be,ae,0);let Re=f(q*S,ie*S,.05,c,Math.min(q,ie)*S*.45);if(he.add(Re),fe){let pt=new qe(new Hs(q*S*.22,12,12),l);pt.position.set(q*S*.2,ie*S*.22,.03),he.add(pt)}return N.add(he),he},P=[];O("open",N=>{P.push(G(N,29,50,16,28),G(N,131,50,16,28))});let X=[];O("wide",N=>{X.push(G(N,29,48,20,36),G(N,131,48,20,36))}),O("squint",N=>{R(N,17,37,41,51),R(N,41,51,17,65),R(N,143,37,119,51),R(N,119,51,143,65)}),O("happy",N=>{R(N,17,62,29,42),R(N,29,42,41,62),R(N,119,62,131,42),R(N,131,42,143,62)}),O("sleep",N=>{R(N,17,54,41,54),R(N,119,54,143,54)});let K=f(1.1,.07,.34,d,.03);K.position.set(0,.12,x/2+.32),u.add(K);let J=new ht,le=f(.42,.56,.04,p,.02);le.position.set(-.2,0,0),le.rotation.y=.28,J.add(le);let Q=f(.42,.56,.04,p,.02);Q.position.set(.2,0,0),Q.rotation.y=-.28,J.add(Q);let se=f(.06,.58,.08,d,.02);J.add(se),J.position.set(0,1.62,.35),u.add(J);let re=new ht,Ne=new qe(new fn(.17,.035,10,28),d);re.add(Ne);let Pe=new qe(new Ai(.16,24),h);re.add(Pe);let dt=f(.06,.3,.06,d,.02);dt.position.set(.14,-.27,0),dt.rotation.z=.5,re.add(dt),re.position.set(.3,-.42,.25),b.add(re);let et=new it({color:789516,roughness:.15,metalness:.3}),at=new it({color:10474751,roughness:.1,metalness:.1,transparent:!0,opacity:.4}),j=new it({color:3814963,roughness:.7}),ne=new it({color:16051944,roughness:.4}),Ee=new it({color:5911586,roughness:.5}),Fe=new ht;Fe.visible=!1,w.add(Fe);for(let N of[29,131]){let[U,$]=m(N,50),q=f(.44,.3,.07,et,.1);q.position.set(U,$,.03),Fe.add(q)}{let N=f(.62,.07,.07,et,.03);N.position.set(0,m(80,42)[1],.03),Fe.add(N)}let Se=new ht;Se.visible=!1,w.add(Se);for(let N of[29,131]){let[U,$]=m(N,50),q=new qe(new fn(.2,.045,10,24),j);q.position.set(U,$,.05),Se.add(q);let ie=new qe(new Ai(.2,24),at);ie.position.set(U,$,.06),Se.add(ie)}{let N=f(1.66,.1,x+.06,j,.03);N.position.set(0,m(80,50)[1],-x/2),Se.add(N)}let ze=new ht;ze.visible=!1;{let N=new qe(new nn(.1,.09,.2,18),ne);N.position.y=0,ze.add(N);let U=new qe(new nn(.085,.085,.02,18),Ee);U.position.y=.095,ze.add(U);let $=new qe(new fn(.06,.018,8,14),ne);$.position.set(.12,0,0),ze.add($),ze.position.set(.1,-.34,.26),b.add(ze)}let Tt={spider:{body:12658477,legs:1916830,hands:12658477,cape:null},thor:{body:4871790,legs:3883606,hands:9279139,cape:11739178},captain:{body:2312872,legs:2312872,hands:12658477,cape:null},iron:{body:11739178,legs:11739178,hands:14725168,cape:null},strange:{body:2903966,legs:2375552,hands:15255968,cape:11739178},superman:{body:2056150,legs:2056150,hands:2056150,cape:12658477},batman:{body:2764084,legs:2106154,hands:2106154,cape:1382172}},Ye=new it({color:12658477,roughness:.8,side:sn}),Qe=f(1.7,1.25,.05,Ye,.02);Qe.position.set(0,.5,-x/2-.04),Qe.visible=!1,M.add(Qe);let ot=new ht;ot.visible=!1;{let N=f(.07,.5,.07,new it({color:8014364}),.02);N.position.y=-.1,ot.add(N);let U=f(.4,.2,.2,new it({color:9279139,metalness:.6,roughness:.3}),.03);U.position.y=.2,ot.add(U),ot.position.set(.1,-.3,.2),b.add(ot)}let We=new ht;We.visible=!1;{for(let[N,U,$]of[[.36,12658477,0],[.28,16777215,.012],[.2,12658477,.024],[.12,2312872,.036]]){let q=new qe(new nn(N,N,.03,28),new it({color:U,roughness:.4,metalness:.2}));q.rotation.x=Math.PI/2,q.position.z=$,We.add(q)}We.position.set(-.12,-.34,.26),L.add(We)}let vt=new Ht({color:16757575}),yt=new qe(new fn(.3,.025,8,28),vt),Rt=yt.clone();yt.visible=Rt.visible=!1,yt.position.set(-.1,-.4,.2),Rt.position.set(.1,-.4,.2),L.add(yt),b.add(Rt);let Mt=new Ht({color:16053492}),gt=new qe(new nn(.012,.012,1.4,6),Mt);gt.visible=!1,gt.position.set(0,1.5,0),u.add(gt);let D=new it({color:2106154}),At=new ht;At.visible=!1;for(let N of[-.5,.5]){let U=new qe(new Ri(.16,.3,4),D);U.position.set(N,1.28,0),At.add(U)}M.add(At);let rt=new ht;rt.visible=!1,w.add(rt);for(let N of[29,131]){let[U,$]=m(N,50),q=f(.4,.2,.05,new Ht({color:16777215}),.05);q.position.set(U,$,.05),q.rotation.z=(N<80?-1:1)*.22,rt.add(q)}let E=-40,g=-60,k=240,W=184,Y=4,ce=new Ht({transparent:!0,depthWrite:!1}),ue=new qe(new hi(k*S,W*S),ce);{let[N,U]=m(E+k/2,g+W/2);ue.position.set(N,U,.002)}ue.visible=!1,w.add(ue);let Z=new Map,te=(N,U,$)=>{let q=document.createElement("canvas");q.width=k*Y,q.height=W*Y;let ie=q.getContext("2d"),fe=$&&$.lens,be=$&&$.face;for(let he of N){if(fe&&he.c==="pup")continue;let Re=he.m||[1,0,0,1,0,0];ie.setTransform(Y,0,0,Y,-E*Y,-g*Y),be&&he.sd==="L"?ie.translate(be,4):be&&he.sd==="R"?ie.translate(-be,4):be&&he.sd==="M"&&(ie.translate(80,49),ie.scale(.75,.75),ie.translate(-80,-63)),ie.transform(...Re);let pt=new Path2D;he.k==="p"?pt.addPath(new Path2D(he.d)):he.k==="e"?pt.ellipse(he.g[0],he.g[1],he.g[2],he.g[3],0,0,Math.PI*2):pt.roundRect(he.g[0],he.g[1],he.g[2],he.g[3],he.g[4]),ie.globalAlpha=he.o==null?1:he.o;let Lt=fe&&he.c==="ew";he.f&&(ie.fillStyle=Lt?fe[0]:he.f==="LIDF"?U:he.f,ie.fill(pt)),he.s&&(ie.strokeStyle=Lt?fe[1]:he.s,ie.lineWidth=Lt?fe[2]:he.w,ie.lineCap=he.lc||"butt",ie.lineJoin=he.lj||"miter",ie.setLineDash(he.da||[]),ie.stroke(pt))}let ae=new rs(q);return ae.colorSpace=Ot,ae.anisotropy=4,ae},me=new Xe,Ie=N=>{let U=wh[N];if(!U){ue.visible=!1;return}let $=Nl[Ke.costume];me.copy(a.color).multiplyScalar(.88);let q=$&&$.lid||"#"+me.getHexString(Ot),ie=N+q+Ke.costume;if(!Z.has(ie)){if(Z.size>=6){for(let fe of Z.values())fe.dispose();Z.clear()}Z.set(ie,te(U,q,$))}ce.map!==Z.get(ie)&&(ce.map=Z.get(ie),ce.needsUpdate=!0),ue.visible=!0},de=new it({color:16777215,roughness:.55,emissive:16777215,emissiveIntensity:.08}),ge=new it({color:14275558,roughness:.6}),Ce=(N,U)=>{let $=new ht;$.visible=!1;let q=f(.27,.08,.46,de,.035);q.position.y=-.36,$.add(q);let ie=f(.28,.02,.47,ge,.01);ie.position.y=-.345,$.add(ie);let fe=f(.28,.24,.32,de,.1);fe.position.y=-.52,$.add(fe);let be=(ae,he,Re,pt,Lt=0,Pt=0,Zt=.075)=>{let je=f(Zt,pt,Zt,de,Zt/2);return je.geometry.translate(0,-pt/2,0),je.position.set(ae,he,Re),je.rotation.set(Pt,0,Lt),$.add(je),je};if(N==="index"||N==="gun")be(.03*U,-.62,.06,.24),N==="gun"?be(.13*U,-.48,.04,.16,U*2.4):be(.13*U,-.5,.08,.1,U*.6);else if(N==="palm")[-.1,-.035,.035,.1].forEach((ae,he)=>be(ae*U,-.62,0,[.15,.19,.18,.13][he],U*ae*.9,0,.065)),be(.15*U,-.48,.03,.13,U*1.1,0,.07);else if(N==="ok"){[0,.07,.13].forEach((he,Re)=>be(he*U,-.62,0,[.17,.16,.12][Re],U*he,0,.065));let ae=new qe(new fn(.065,.032,8,18),de);ae.position.set(-.1*U,-.68,.06),ae.rotation.y=.4,$.add(ae)}else if(N==="pinch"){for(let[ae,he]of[[-.06,.25],[0,0],[.06,-.25]])be(ae*U,-.6,.02,.17,he*U,0,.07);be(.13*U,-.52,.06,.14,U*.5,.3,.07)}else{let ae=f(.26,.08,.26,de,.04);ae.position.set(0,-.66,.02),$.add(ae)}return $},Ue=["index","gun","palm","ok","pinch","fist"],Ve={},I={};for(let N of Ue)b.add(Ve[N]=Ce(N,1)),L.add(I[N]=Ce(N,-1));let _e={nope:["index","fist"],point:["index","fist"],guns:["gun","gun"],dab:["palm","palm"],shrug:["palm","palm"],vibe:["palm","palm"],facepalm:["palm","fist"],shh:["index","fist"],scheme:["pinch","pinch"],perfect:["ok","fist"],pat:["palm","fist"],sideeye:["fist","fist"],sweat:["palm","fist"],scuba:["palm","palm"]},ee=new it({color:16777215,roughness:.6}),pe=new it({color:16747069,roughness:.6}),Me=new it({color:14275558,roughness:.6}),oe=pe.clone(),De={gv:"#ffffff",gs:"#d9d3e6",su:"#ffffff",ss:"#d9d3e6",sl:"#ff8a3d",so:"#ff8a3d"},Ae=_.map(N=>{let U=new ht;U.visible=!1;let $=f(.23,.13,.38,ee,.05);$.position.set(0,-.43,.05),U.add($);let q=f(.22,.08,.12,Me,.035);q.position.set(0,-.44,.22),U.add(q);let ie=f(.16,.025,.04,oe,.01);ie.position.set(0,-.36,.12),ie.rotation.x=-.4,U.add(ie);let fe=f(.25,.04,.42,pe,.015);return fe.position.set(0,-.5,.05),U.add(fe),N.add(U),U}),lt=new ht;lt.visible=!1,M.add(lt);{let N=new it({color:2828083,roughness:.5}),U=new it({color:16735631,roughness:.45}),$=new qe(new fn(.88,.045,8,32,Math.PI),N);$.position.y=.62,$.scale.y=.72,lt.add($);for(let q of[-1,1]){let ie=f(.14,.36,.36,U,.06);ie.position.set(q*.86,.6,0),lt.add(ie);let fe=f(.04,.26,.26,N,.02);fe.position.set(q*.94,.6,0),lt.add(fe)}}let $e=new ht;$e.visible=!1,$e.position.set(0,1.2,0),M.add($e);{let N=new it({color:16763955,roughness:.3,metalness:.55,emissive:6965760,emissiveIntensity:.3}),U=new qe(new nn(.3,.27,.12,24,1,!0),N);U.material.side=sn,$e.add(U);for(let q=0;q<5;q++){let ie=q/5*Math.PI*2,fe=new qe(new Ri(.06,.16,4),N);fe.position.set(Math.sin(ie)*.28,.13,Math.cos(ie)*.28),$e.add(fe)}let $=new qe(new Vs(.045),new it({color:16731501,roughness:.2,metalness:.2}));$.position.set(0,0,.29),$e.add($)}let It=new ht;It.visible=!1,M.add(It);{let N=new it({color:16747069,roughness:.45}),U=new it({color:16777215,roughness:.5}),$=x/2+.06,[q,ie]=m(94,86),fe=new qe(new nn(.04,.04,.88-q,10),N);fe.rotation.z=Math.PI/2,fe.position.set((q+.88)/2,ie,$),It.add(fe);let be=new qe(new nn(.045,.045,1.15,10),N);be.position.set(.88,ie+.575,$),It.add(be);for(let he of[.55,.85]){let Re=new qe(new nn(.048,.048,.08,10),U);Re.position.set(.88,he,$),It.add(Re)}let ae=new qe(new nn(.06,.045,.1,10),N);ae.position.set(.88,ie+1.17,$),It.add(ae)}let kt=new ht;kt.visible=!1,kt.position.set(0,-.6,.24),kt.rotation.x=1.5,b.add(kt);{let N=new it({color:15986662,roughness:.9,side:sn}),U=new it({color:8177919,roughness:.9}),$=f(.5,.36,.04,N,.02);$.rotation.z=.25,kt.add($);for(let q of[-.06,.07]){let ie=f(.5,.035,.045,U,.01);ie.position.y=q,$.add(ie)}}let lo=N=>{let U=!!N,$=_e[N]||[],q=Nl[Ke.costume]||De;de.color.set(q.gv),de.emissive.set(q.gv),ge.color.set(q.gs),ee.color.set(q.su),Me.color.set(q.ss),oe.color.set(q.sl),pe.color.set(q.so),U?Ie(N):ue.visible=!1;for(let ie of Ue)Ve[ie].visible=U&&$[0]===ie,I[ie].visible=U&&$[1]===ie;for(let ie of Ae)ie.visible=U;lt.visible=N==="vibe",$e.visible=N==="pat",It.visible=N==="scuba",kt.visible=N==="sweat"},Yt=(N,U)=>{if(N<=U[0][0])return U[0][1];for(let $=1;$<U.length;$++)if(N<=U[$][0]){let[q,ie]=U[$-1],[fe,be]=U[$];return ie+(be-ie)*((N-q)/(fe-q||1))}return U[U.length-1][1]},Tn=[0,1].map(N=>{let U=new ht,$=new qe(new fn(.5,.045,10,36),new Ht({color:16754234})),q=new qe(new Ai(.46,32),new Ht({color:2757712,transparent:!0,opacity:.9}));return U.add(q,$),U.position.set(N?.85:-.85,.5,.2),U.scale.setScalar(.01),U.visible=!1,t.add(U),U}),Bn=f(.07,2.4,.05,new Ht({color:16775608}),.02);Bn.position.set(0,1.2,.3),Bn.visible=!1,t.add(Bn);let Ni=new Ys(13625087,0,6);Ni.position.set(0,1.2,2),t.add(Ni);let xs=new it({color:14725168,roughness:.35,metalness:.5}),An=new ht;An.visible=!1,u.add(An);let kn=[-.72,-.36,.35,.72].map(N=>{let U=f(.21,.2,.34,xs,.04);return U.position.set(N,-.3,0),An.add(U),U}),$n=f(1.35,.62,.06,xs,.1);$n.position.set(0,.74,x/2+.05),An.add($n);let vi=new qe(new fn(.12,.03,8,20),new Ht({color:8317183}));vi.position.set(0,.28,x/2+.06),An.add(vi);let vs=[-.72,.72].map(N=>{let U=new qe(new Ri(.1,.5,10),new Ht({color:8317183}));return U.rotation.x=Math.PI,U.position.set(N,-.75,0),U.visible=!1,u.add(U),U}),zn=new B,Kt=new qe(new hi(1.6,1.14),new Ht({transparent:!0,depthWrite:!1}));Kt.position.set(0,.57,x/2+.004),Kt.visible=!1,M.add(Kt);let Vn="",Kn={plain:null,emote:null},gn=new ht;gn.visible=!1,gn.scale.set(.7,.85,.85),gn.position.y=.12,u.add(gn);{let N=new it({color:7028522,roughness:.7}),U=new it({color:12597547,roughness:.6}),$=f(3,.2,.78,N,.09);$.position.set(0,-.58,0),gn.add($);let q=f(3.02,.05,.8,U,.02);q.position.set(0,-.47,0),gn.add(q);for(let ie of[-1,1]){let fe=f(.42,.16,.5,N,.06);fe.position.set(ie*1.6,-.5,0),fe.rotation.z=ie*.35,gn.add(fe)}}let Ke={costume:"none",act:"idle",eyes:"sleep",dir:1,item:"",shades:"none",coffee:!1,think:"scratch"},ys=document.createElement("div");ys.id="item3d",_s.appendChild(ys);let jt=new Xe,Ms=new Xe,v=new Xe,C=()=>o.color.copy(Ke.costume!=="none"?v:Ms),z=(N,U,$)=>N+(U-N)*$,H=()=>window.__vnow?window.__vnow():performance.now(),V=0,ve=0,Le=H(),xe="",we=!0,Te=0;Ge(),window.__buddy3d={ok:!0,update(N){if(we=!0,Te=12,N.act&&(Ke.act=N.act),N.eyes&&F[N.eyes]&&(Ke.eyes=N.eyes),N.dir&&(Ke.dir=N.dir>0?1:-1),(N.color||"costume"in N)&&(xe=null),N.color&&(jt.set(N.color),Ke.costume==="none"&&(a.color.copy(jt),a.emissive.copy(jt),o.emissive.copy(jt),T.color.copy(jt),T.emissive.copy(jt))),N.color2&&Ms.set(N.color2),"costume"in N){Ke.costume=N.costume,N.costume==="none"?(Kt.visible=!1,Vn=""):Vn!==N.costume&&lr(N.costume);let $=Tt[N.costume];$?(a.color.setHex($.body),a.emissive.setHex($.body),v.setHex($.hands),o.emissive.setHex($.hands),T.color.setHex($.legs),T.emissive.setHex($.legs),$.cape&&Ye.color.setHex($.cape)):(a.color.copy(jt),a.emissive.copy(jt),o.emissive.copy(jt),T.color.copy(jt),T.emissive.copy(jt))}"shades"in N&&(Ke.shades=N.shades),"coffee"in N&&(Ke.coffee=N.coffee),N.think&&(Ke.think=N.think);let U=["type","read","search","walk"].includes(Ke.act)?"":N.item||"";U!==Ke.item&&(Ke.item=U,ys.textContent=U)},resize(){we=!0;let N=_s.clientWidth,U=_s.clientHeight;En.setSize(N,U),n.aspect=N/U,n.updateProjectionMatrix()}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
