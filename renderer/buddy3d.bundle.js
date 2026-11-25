(()=>{var pc=0,Qo=1,mc=2;var js=1,gc=2,ps=3,vi=0,$t=1,rn=2,kn=0,ms=1,$o=2,Ko=3,jo=4,_c=5;var Ui=100,xc=101,vc=102,yc=103,Mc=104,Sc=200,bc=201,Lc=202,wc=203,el=204,tl=205,Ec=206,Tc=207,Ac=208,Rc=209,Cc=210,Ic=211,Pc=212,Dc=213,Nc=214,Br=0,kr=1,zr=2,is=3,Vr=4,Hr=5,Gr=6,Wr=7,nl=0,Uc=1,Fc=2,Ln=0,il=1,sl=2,rl=3,al=4,ol=5,ll=6,cl=7;var hl=300,yi=301,Fi=302,_a=303,xa=304,er=306,Xr=1e3,Un=1001,qr=1002,Bt=1003,Oc=1004;var tr=1005;var Vt=1006,va=1007;var Mi=1008;var an=1009,ul=1010,dl=1011,gs=1012,ya=1013,wn=1014,En=1015,Tn=1016,Ma=1017,Sa=1018,_s=1020,fl=35902,pl=35899,ml=1021,gl=1022,gn=1023,Fn=1026,Si=1027,_l=1028,ba=1029,bi=1030,La=1031;var wa=1033,nr=33776,ir=33777,sr=33778,rr=33779,Ea=35840,Ta=35841,Aa=35842,Ra=35843,Ca=36196,Ia=37492,Pa=37496,Da=37488,Na=37489,ar=37490,Ua=37491,Fa=37808,Oa=37809,Ba=37810,ka=37811,za=37812,Va=37813,Ha=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,Za=37820,Ja=37821,Qa=36492,$a=36494,Ka=36495,ja=36283,eo=36284,or=36285,to=36286;var Us=2300,Yr=2301,Fr=2302,Ho=2303,Go=2400,Wo=2401,Xo=2402;var Bc=3200;var no=0,kc=1,ti="",Ot="srgb",Fs="srgb-linear",Os="linear",gt="srgb";var Or=7680;var zc=519,Vc=512,Hc=513,Gc=514,io=515,Wc=516,Xc=517,so=518,qc=519,Yc=35044;var xl="300 es",bn=2e3,ss=2001;function Dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zc(){let i=Bs("canvas");return i.style.display="block",i}var Yl={},rs=null;function vl(...i){let e="THREE."+i.shift();rs?rs("log",e,...i):console.log(e,...i)}function Jc(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ke(...i){i=Jc(i);let e="THREE."+i.shift();if(rs)rs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=Jc(i);let e="THREE."+i.shift();if(rs)rs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){let e=i.join(" ");e in Yl||(Yl[e]=!0,ke(...i))}function Qc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var $c={[Br]:kr,[zr]:Gr,[Vr]:Wr,[is]:Hr,[kr]:Br,[Gr]:zr,[Wr]:Vr,[Hr]:is},On=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vo=Math.PI/180,Zr=180/Math.PI;function lr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function Cs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $e=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],h=r[a+0],f=r[a+1],x=r[a+2],S=r[a+3];if(p!==S||c!==h||l!==f||d!==x){let m=c*h+l*f+d*x+p*S;m<0&&(h=-h,f=-f,x=-x,S=-S,m=-m);let u=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);u=Math.sin(u*M)/A,o=Math.sin(o*M)/A,c=c*u+h*o,l=l*u+f*o,d=d*u+x*o,p=p*u+S*o}else{c=c*u+h*o,l=l*u+f*o,d=d*u+x*o,p=p*u+S*o;let M=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=M,l*=M,d*=M,p*=M}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+d*p+c*f-l*h,e[t+1]=c*x+d*h+l*p-o*f,e[t+2]=l*x+d*f+o*h-c*p,e[t+3]=d*x-o*p-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(s/2),p=o(r/2),h=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*d*p+l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p-h*f*x;break;case"YXZ":this._x=h*d*p+l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p+h*f*x;break;case"ZXY":this._x=h*d*p-l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p-h*f*x;break;case"ZYX":this._x=h*d*p-l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p+h*f*x;break;case"YZX":this._x=h*d*p+l*f*x,this._y=l*f*p+h*d*x,this._z=l*d*x-h*f*p,this._w=l*d*p-h*f*x;break;case"XZY":this._x=h*d*p-l*f*x,this._y=l*f*p-h*d*x,this._z=l*d*x+h*f*p,this._w=l*d*p+h*f*x;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],p=t[10],h=n+o+p;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>p){let f=2*Math.sqrt(1+n-o-p);this._w=(d-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>p){let f=2*Math.sqrt(1+o-n-p);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+d)/f}else{let f=2*Math.sqrt(1+p-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+s*l-r*c,this._y=s*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-s*o,this._w=a*d-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);c=Math.sin(c*l)/d,t=Math.sin(t*l)/d,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),d=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*d,this.y=n+c*d+o*l-r*p,this.z=s+c*p+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Mo=new O,Zl=new Bn,Ge=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],p=n[7],h=n[2],f=n[5],x=n[8],S=s[0],m=s[3],u=s[6],M=s[1],A=s[4],y=s[7],L=s[2],b=s[5],T=s[8];return r[0]=a*S+o*M+c*L,r[3]=a*m+o*A+c*b,r[6]=a*u+o*y+c*T,r[1]=l*S+d*M+p*L,r[4]=l*m+d*A+p*b,r[7]=l*u+d*y+p*T,r[2]=h*S+f*M+x*L,r[5]=h*m+f*A+x*b,r[8]=h*u+f*y+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=d*a-o*l,h=o*c-d*r,f=l*r-a*c,x=t*p+n*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=p*S,e[1]=(s*l-d*n)*S,e[2]=(o*n-s*a)*S,e[3]=h*S,e[4]=(d*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-l*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},So=new Ge,Jl=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fh(){let i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===gt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:e,whitePoint:n,transfer:Os,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}var st=Fh();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gi,Jr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=Bs("canvas")),Gi.width=e.width,Gi.height=e.height;let s=Gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oh=0,as=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=lr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(bo(s[a].image)):r.push(bo(s[a]))}else r=bo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Jr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}var Bh=0,Lo=new O,Jt=class i extends On{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Un,s=Un,r=Vt,a=Mi,o=gn,c=an,l=i.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=lr(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=hl;Jt.DEFAULT_ANISOTROPY=1;var Lt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],d=c[4],p=c[8],h=c[1],f=c[5],x=c[9],S=c[2],m=c[6],u=c[10];if(Math.abs(d-h)<.01&&Math.abs(p-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+S)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,y=(f+1)/2,L=(u+1)/2,b=(d+h)/4,T=(p+S)/4,_=(x+m)/4;return A>y&&A>L?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=T/n):y>L?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=_/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=_/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-x)*(m-x)+(p-S)*(p-S)+(h-d)*(h-d));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(p-S)/M,this.z=(h-d)/M,this.w=Math.acos((l+f+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr=class extends On{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Jt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends Qr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ks=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Et=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m)}set(e,t,n,s,r,a,o,c,l,d,p,h,f,x,S,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=d,u[10]=p,u[14]=h,u[3]=f,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let h=a*d,f=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=-c*p,t[8]=l,t[1]=f+x*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*d,f=c*p,x=l*d,S=l*p;t[0]=h+S*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*p,t[5]=a*d,t[9]=-o,t[2]=f*o-x,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*d,f=c*p,x=l*d,S=l*p;t[0]=h-S*o,t[4]=-a*p,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*d,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*d,f=a*p,x=o*d,S=o*p;t[0]=c*d,t[4]=x*l-f,t[8]=h*l+S,t[1]=c*p,t[5]=S*l+h,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=S-h*p,t[8]=x*p+f,t[1]=p,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=f*p+x,t[10]=h-S*p}else if(e.order==="XZY"){let h=a*c,f=a*l,x=o*c,S=o*l;t[0]=c*d,t[4]=-p,t[8]=l*d,t[1]=h*p+S,t[5]=a*d,t[9]=f*p-x,t[2]=x*p-f,t[6]=o*d,t[10]=S*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kh,e,zh)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(n,cn),ri.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(n,cn)),ri.normalize(),_r.crossVectors(cn,ri),s[0]=ri.x,s[4]=_r.x,s[8]=cn.x,s[1]=ri.y,s[5]=_r.y,s[9]=cn.y,s[2]=ri.z,s[6]=_r.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],p=n[5],h=n[9],f=n[13],x=n[2],S=n[6],m=n[10],u=n[14],M=n[3],A=n[7],y=n[11],L=n[15],b=s[0],T=s[4],_=s[8],w=s[12],R=s[1],N=s[5],U=s[9],G=s[13],P=s[2],X=s[6],K=s[10],Q=s[14],oe=s[3],$=s[7],ie=s[11],re=s[15];return r[0]=a*b+o*R+c*P+l*oe,r[4]=a*T+o*N+c*X+l*$,r[8]=a*_+o*U+c*K+l*ie,r[12]=a*w+o*G+c*Q+l*re,r[1]=d*b+p*R+h*P+f*oe,r[5]=d*T+p*N+h*X+f*$,r[9]=d*_+p*U+h*K+f*ie,r[13]=d*w+p*G+h*Q+f*re,r[2]=x*b+S*R+m*P+u*oe,r[6]=x*T+S*N+m*X+u*$,r[10]=x*_+S*U+m*K+u*ie,r[14]=x*w+S*G+m*Q+u*re,r[3]=M*b+A*R+y*P+L*oe,r[7]=M*T+A*N+y*X+L*$,r[11]=M*_+A*U+y*K+L*ie,r[15]=M*w+A*G+y*Q+L*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],p=e[6],h=e[10],f=e[14],x=e[3],S=e[7],m=e[11],u=e[15],M=c*f-l*h,A=o*f-l*p,y=o*h-c*p,L=a*f-l*d,b=a*h-c*d,T=a*p-o*d;return t*(S*M-m*A+u*y)-n*(x*M-m*L+u*b)+s*(x*A-S*L+u*T)-r*(x*y-S*b+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],d=e[10];return t*(a*d-o*l)-n*(r*d-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],p=e[9],h=e[10],f=e[11],x=e[12],S=e[13],m=e[14],u=e[15],M=t*o-n*a,A=t*c-s*a,y=t*l-r*a,L=n*c-s*o,b=n*l-r*o,T=s*l-r*c,_=d*S-p*x,w=d*m-h*x,R=d*u-f*x,N=p*m-h*S,U=p*u-f*S,G=h*u-f*m,P=M*G-A*U+y*N+L*R-b*w+T*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/P;return e[0]=(o*G-c*U+l*N)*X,e[1]=(s*U-n*G-r*N)*X,e[2]=(S*T-m*b+u*L)*X,e[3]=(h*b-p*T-f*L)*X,e[4]=(c*R-a*G-l*w)*X,e[5]=(t*G-s*R+r*w)*X,e[6]=(m*y-x*T-u*A)*X,e[7]=(d*T-h*y+f*A)*X,e[8]=(a*U-o*R+l*_)*X,e[9]=(n*R-t*U-r*_)*X,e[10]=(x*b-S*y+u*M)*X,e[11]=(p*y-d*b-f*M)*X,e[12]=(o*w-a*N-c*_)*X,e[13]=(t*N-n*w+s*_)*X,e[14]=(S*A-x*L-m*M)*X,e[15]=(d*L-p*A+h*M)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,d*o+n,d*c-s*a,0,l*c-s*o,d*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,p=o+o,h=r*l,f=r*d,x=r*p,S=a*d,m=a*p,u=o*p,M=c*l,A=c*d,y=c*p,L=n.x,b=n.y,T=n.z;return s[0]=(1-(S+u))*L,s[1]=(f+y)*L,s[2]=(x-A)*L,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(h+u))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(x+A)*T,s[9]=(m-M)*T,s[10]=(1-(h+S))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Wi.set(s[0],s[1],s[2]).length(),o=Wi.set(s[4],s[5],s[6]).length(),c=Wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);let l=1/a,d=1/o,p=1/c;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=p,vn.elements[9]*=p,vn.elements[10]*=p,t.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=bn,c=!1){let l=this.elements,d=2*r/(t-e),p=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),x,S;if(c)x=r/(a-r),S=a*r/(a-r);else if(o===bn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ss)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn,c=!1){let l=this.elements,d=2/(t-e),p=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),x,S;if(c)x=1/(a-r),S=a/(a-r);else if(o===bn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===ss)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wi=new O,vn=new Et,kh=new O(0,0,0),zh=new O(1,1,1),ri=new O,_r=new O,cn=new O,$l=new Et,Kl=new Bn,ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],d=s[9],p=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $l.makeRotationFromQuaternion(e),this.setFromRotationMatrix($l,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kl.setFromEuler(this),this.setFromQuaternion(Kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vh=0,jl=new O,Xi=new Bn,Zn=new Et,xr=new O,Is=new O,Hh=new O,Gh=new Bn,ec=new O(1,0,0),tc=new O(0,1,0),nc=new O(0,0,1),ic={type:"added"},Wh={type:"removed"},qi={type:"childadded",child:null},wo={type:"childremoved",child:null},qt=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ei,n=new Bn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(ec,e)}rotateY(e){return this.rotateOnAxis(tc,e)}rotateZ(e){return this.rotateOnAxis(nc,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ec,e)}translateY(e){return this.translateOnAxis(tc,e)}translateZ(e){return this.translateOnAxis(nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Is,xr,this.up):Zn.lookAt(xr,Is,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Zn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ic),qi.child=e,this.dispatchEvent(qi),qi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ic),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Hh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),p=a(e.shapes),h=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new O(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xh={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),u=this._getHandJoint(l,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=d.position.distanceTo(p.position),f=.02,x=.005;l.inputState.pinching&&h>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Eo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Uh(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Eo(a,r,e+1/3),this.g=Eo(a,r,e),this.b=Eo(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=Kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return st.workingToColorSpace(Xt.copy(this),e),Math.round(at(Xt.r*255,0,255))*65536+Math.round(at(Xt.g*255,0,255))*256+Math.round(at(Xt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,d=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ot){st.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(vr);let n=yo(ai.h,vr.h,t),s=yo(ai.s,vr.s,t),r=yo(ai.l,vr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Ye;Ye.NAMES=Kc;var Vs=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new O,Jn=new O,To=new O,Qn=new O,Yi=new O,Zi=new O,sc=new O,Ao=new O,Ro=new O,Co=new O,Io=new Lt,Po=new Lt,Do=new Lt,hi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Jn.subVectors(n,t),To.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Jn),c=yn.dot(To),l=Jn.dot(Jn),d=Jn.dot(To),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,f=(l*c-o*d)*h,x=(a*d-o*c)*h;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Io.setScalar(0),Po.setScalar(0),Do.setScalar(0),Io.fromBufferAttribute(e,t),Po.fromBufferAttribute(e,n),Do.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Io,r.x),a.addScaledVector(Po,r.y),a.addScaledVector(Do,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Jn.subVectors(e,t),yn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),yn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,n),Zi.subVectors(r,n),Ao.subVectors(e,n);let c=Yi.dot(Ao),l=Zi.dot(Ao);if(c<=0&&l<=0)return t.copy(n);Ro.subVectors(e,s);let d=Yi.dot(Ro),p=Zi.dot(Ro);if(d>=0&&p<=d)return t.copy(s);let h=c*p-d*l;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Yi,a);Co.subVectors(e,r);let f=Yi.dot(Co),x=Zi.dot(Co);if(x>=0&&f<=x)return t.copy(r);let S=f*l-c*x;if(S<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Zi,o);let m=d*x-f*p;if(m<=0&&p-d>=0&&f-x>=0)return sc.subVectors(r,s),o=(p-d)/(p-d+(f-x)),t.copy(s).addScaledVector(sc,o);let u=1/(m+S+h);return a=S*u,o=h*u,t.copy(n).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ui=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Mr.subVectors(this.max,Ps),Ji.subVectors(e.a,Ps),Qi.subVectors(e.b,Ps),$i.subVectors(e.c,Ps),oi.subVectors(Qi,Ji),li.subVectors($i,Qi),Ai.subVectors(Ji,$i);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!No(t,Ji,Qi,$i,Mr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Ji,Qi,$i,Mr))?!1:(Sr.crossVectors(oi,li),t=[Sr.x,Sr.y,Sr.z],No(t,Ji,Qi,$i,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$n=[new O,new O,new O,new O,new O,new O,new O,new O],Mn=new O,yr=new ui,Ji=new O,Qi=new O,$i=new O,oi=new O,li=new O,Ai=new O,Ps=new O,Mr=new O,Sr=new O,Ri=new O;function No(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);let o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}var It=new O,br=new $e,qh=0,pn=class extends On{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Cs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gs=class extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yh=new ui,Ds=new O,Uo=new O,ls=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);let t=Ds.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Uo)),this.expandByPoint(Ds.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zh=0,fn=new Et,Fo=new qt,Ki=new O,hn=new ui,Ns=new ui,Ft=new O,Qt=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Gs:Hs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,Ns.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,Ns.max),hn.expandByPoint(Ft)):(hn.expandByPoint(Ns.min),hn.expandByPoint(Ns.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ft.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(e,l),Ft.add(Ki)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new O,c[_]=new O;let l=new O,d=new O,p=new O,h=new $e,f=new $e,x=new $e,S=new O,m=new O;function u(_,w,R){l.fromBufferAttribute(n,_),d.fromBufferAttribute(n,w),p.fromBufferAttribute(n,R),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),d.sub(l),p.sub(l),f.sub(h),x.sub(h);let N=1/(f.x*x.y-x.x*f.y);isFinite(N)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(p,-f.y).multiplyScalar(N),m.copy(p).multiplyScalar(f.x).addScaledVector(d,-x.x).multiplyScalar(N),o[_].add(S),o[w].add(S),o[R].add(S),c[_].add(m),c[w].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let _=0,w=M.length;_<w;++_){let R=M[_],N=R.start,U=R.count;for(let G=N,P=N+U;G<P;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let A=new O,y=new O,L=new O,b=new O;function T(_){L.fromBufferAttribute(s,_),b.copy(L);let w=o[_];A.copy(w),A.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(b,w);let N=y.dot(c[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,N)}for(let _=0,w=M.length;_<w;++_){let R=M[_],N=R.start,U=R.count;for(let G=N,P=N+U;G<P;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,d=new O,p=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){let x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,d=o.itemSize,p=o.normalized,h=new l.constructor(c.length*d),f=0,x=0;for(let S=0,m=c.length;S<m;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*d;for(let u=0;u<d;u++)h[x++]=l[f++]}return new pn(h,d,p)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let d=0,p=l.length;d<p;d++){let h=l[d],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],d=[];for(let p=0,h=l.length;p<h;p++){let f=l[p];d.push(f.toJSON(e.data))}d.length>0&&(s[c]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(t))}let r=e.morphAttributes;for(let l in r){let d=[],p=r[l];for(let h=0,f=p.length;h<f;h++)d.push(p[h].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,d=a.length;l<d;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Oo=new O,Jh=new O,Qh=new Ge,Sn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Oo.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qh.getNormalMatrix(e),s=this.coplanarPoint(Oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$h=0,di=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=ms,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new $e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Kn=new O,Bo=new O,Lr=new O,wr=new O,Kr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Bo.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Bo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=wr.dot(this.direction),c=-wr.dot(Lr),l=wr.lengthSq(),d=Math.abs(1-a*a),p,h,f,x;if(d>0)if(p=a*c-o,h=a*o-c,x=r*d,p>=0)if(h>=-x)if(h<=x){let S=1/d;p*=S,h*=S,f=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;else h<=-x?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l):h<=x?(p=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),f=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Bo).addScaledVector(Lr,h),f}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-h.z)*p,c=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,c=(e.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,d=o.z,p=e.x-a.x,h=e.y-a.y,f=e.z-a.z,x=t.x-a.x,S=t.y-a.y,m=t.z-a.z,u=n.x-a.x,M=n.y-a.y,A=n.z-a.z,y=Math.abs(c),L=Math.abs(l),b=Math.abs(d),T,_,w,R,N,U,G,P,X,K,Q,oe;if(y>=L&&y>=b?(w=c,U=p,X=x,oe=u,c>=0?(T=l,_=d,R=h,N=f,G=S,P=m,K=M,Q=A):(T=d,_=l,R=f,N=h,G=m,P=S,K=A,Q=M)):L>=b?(w=l,U=h,X=S,oe=M,l>=0?(T=d,_=c,R=f,N=p,G=m,P=x,K=A,Q=u):(T=c,_=d,R=p,N=f,G=x,P=m,K=u,Q=A)):(w=d,U=f,X=m,oe=A,d>=0?(T=c,_=l,R=p,N=h,G=x,P=S,K=u,Q=M):(T=l,_=c,R=h,N=p,G=S,P=x,K=M,Q=u)),w===0)return null;let $=T/w,ie=_/w,re=1/w,Ne=R-$*U,Pe=N-ie*U,mt=G-$*X,it=P-ie*X,ct=K-$*oe,j=Q-ie*oe,ne=ct*it-j*mt,Le=Ne*j-Pe*ct,Oe=mt*Pe-it*Ne;if(s){if(ne<0||Le<0||Oe<0)return null}else if((ne<0||Le<0||Oe<0)&&(ne>0||Le>0||Oe>0))return null;let ye=ne+Le+Oe;if(ye===0)return null;let Ve=re*(ne*U+Le*X+Oe*oe);return(ye>0?Ve<0:Ve>0)?null:this.at(Ve/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rc=new Et,Ci=new Kr,Er=new ls,ac=new O,Tr=new O,Ar=new O,Rr=new O,ko=new O,Cr=new O,oc=new O,Ir=new O,Ze=class extends qt{constructor(e=new Qt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let d=o[c],p=r[c];d!==0&&(ko.fromBufferAttribute(p,e),a?Cr.addScaledVector(ko,d):Cr.addScaledVector(ko.sub(t),d))}t.add(Cr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(Er.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Er,ac)===null||Ci.origin.distanceToSquared(ac)>(e.far-e.near)**2))&&(rc.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=A;y<L;y+=3){let b=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);s=Pr(this,u,e,n,l,d,p,b,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let m=x,u=S;m<u;m+=3){let M=o.getX(m),A=o.getX(m+1),y=o.getX(m+2);s=Pr(this,a,e,n,l,d,p,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,S=h.length;x<S;x++){let m=h[x],u=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=M,L=A;y<L;y+=3){let b=y,T=y+1,_=y+2;s=Pr(this,u,e,n,l,d,p,b,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let x=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let m=x,u=S;m<u;m+=3){let M=m,A=m+1,y=m+2;s=Pr(this,a,e,n,l,d,p,M,A,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Kh(i,e,t,n,s,r,a,o){let c;if(e.side===$t?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===vi,o),c===null)return null;Ir.copy(o),Ir.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ir);return l<t.near||l>t.far?null:{distance:l,point:Ir.clone(),object:i}}function Pr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Rr);let d=Kh(i,e,t,n,Tr,Ar,Rr,oc);if(d){let p=new O;hi.getBarycoord(oc,Tr,Ar,Rr,p),s&&(d.uv=hi.getInterpolatedAttribute(s,o,c,l,p,new $e)),r&&(d.uv1=hi.getInterpolatedAttribute(r,o,c,l,p,new $e)),a&&(d.normal=hi.getInterpolatedAttribute(a,o,c,l,p,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new O,materialIndex:0};hi.getNormal(Tr,Ar,Rr,h.normal),d.face=h,d.barycoord=p}return d}var jr=class extends Jt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Bt,d=Bt,p,h){super(null,a,o,c,l,d,s,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new ls,jh=new $e(.5,.5),Dr=new O,cs=class{constructor(e=new Sn,t=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],p=r[5],h=r[6],f=r[7],x=r[8],S=r[9],m=r[10],u=r[11],M=r[12],A=r[13],y=r[14],L=r[15];if(s[0].setComponents(l-a,f-d,u-x,L-M).normalize(),s[1].setComponents(l+a,f+d,u+x,L+M).normalize(),s[2].setComponents(l+o,f+p,u+S,L+A).normalize(),s[3].setComponents(l-o,f-p,u-S,L-A).normalize(),n)s[4].setComponents(c,h,m,y).normalize(),s[5].setComponents(l-c,f-h,u-m,L-y).normalize();else if(s[4].setComponents(l-c,f-h,u-m,L-y).normalize(),t===bn)s[5].setComponents(l+c,f+h,u+m,L+y).normalize();else if(t===ss)s[5].setComponents(c,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);let t=jh.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ws=class extends Jt{constructor(e=[],t=yi,n,s,r,a,o,c,l,d){super(e,t,n,s,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hs=class extends Jt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends Jt{constructor(e,t,n=wn,s,r,a,o=Bt,c=Bt,l,d=Fn,p=1){if(d!==Fn&&d!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:p};super(h,s,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends fi{constructor(e,t=wn,n=yi,s,r,a=Bt,o=Bt,c,l=Fn){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xs=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pi=class i extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],d=[],p=[],h=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2));function x(S,m,u,M,A,y,L,b,T,_,w){let R=y/T,N=L/_,U=y/2,G=L/2,P=b/2,X=T+1,K=_+1,Q=0,oe=0,$=new O;for(let ie=0;ie<K;ie++){let re=ie*N-G;for(let Ne=0;Ne<X;Ne++){let Pe=Ne*R-U;$[S]=Pe*M,$[m]=re*A,$[u]=P,l.push($.x,$.y,$.z),$[S]=0,$[m]=0,$[u]=b>0?1:-1,d.push($.x,$.y,$.z),p.push(Ne/T),p.push(1-ie/_),Q+=1}}for(let ie=0;ie<_;ie++)for(let re=0;re<T;re++){let Ne=h+re+X*ie,Pe=h+re+X*(ie+1),mt=h+(re+1)+X*(ie+1),it=h+(re+1)+X*ie;c.push(Ne,Pe,it),c.push(Pe,mt,it),oe+=6}o.addGroup(f,oe,w),f+=oe,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Di=class i extends Qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new O,d=new $e;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){let f=n+p/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,c.push(d.x,d.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},sn=class i extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],h=[],f=[],x=0,S=[],m=n/2,u=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function M(){let y=new O,L=new O,b=0,T=(t-e)/n;for(let _=0;_<=r;_++){let w=[],R=_/r,N=R*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,P=G*c+o,X=Math.sin(P),K=Math.cos(P);L.x=N*X,L.y=-R*n+m,L.z=N*K,p.push(L.x,L.y,L.z),y.set(X,T,K).normalize(),h.push(y.x,y.y,y.z),f.push(G,1-R),w.push(x++)}S.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let R=S[w][_],N=S[w+1][_],U=S[w+1][_+1],G=S[w][_+1];(e>0||w!==0)&&(d.push(R,N,G),b+=3),(t>0||w!==r-1)&&(d.push(N,U,G),b+=3)}l.addGroup(u,b,0),u+=b}function A(y){let L=x,b=new $e,T=new O,_=0,w=y===!0?e:t,R=y===!0?1:-1;for(let U=1;U<=s;U++)p.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),x++;let N=x;for(let U=0;U<=s;U++){let P=U/s*c+o,X=Math.cos(P),K=Math.sin(P);T.x=w*K,T.y=m*R,T.z=w*X,p.push(T.x,T.y,T.z),h.push(0,R,0),b.x=X*.5+.5,b.y=K*.5*R+.5,f.push(b.x,b.y),x++}for(let U=0;U<s;U++){let G=L+U,P=N+U;y===!0?d.push(P,P+1,G):d.push(P+1,P,G),_+=3}l.addGroup(u,_,y===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ni=class i extends sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class i extends Qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),d(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let A=new O,y=new O,L=new O;for(let b=0;b<t.length;b+=3)f(t[b+0],A),f(t[b+1],y),f(t[b+2],L),c(A,y,L,M)}function c(M,A,y,L){let b=L+1,T=[];for(let _=0;_<=b;_++){T[_]=[];let w=M.clone().lerp(y,_/b),R=A.clone().lerp(y,_/b),N=b-_;for(let U=0;U<=N;U++)U===0&&_===b?T[_][U]=w:T[_][U]=w.clone().lerp(R,U/N)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){let R=Math.floor(w/2);w%2===0?(h(T[_][R+1]),h(T[_+1][R]),h(T[_][R])):(h(T[_][R+1]),h(T[_+1][R+1]),h(T[_+1][R]))}}function l(M){let A=new O;for(let y=0;y<r.length;y+=3)A.x=r[y+0],A.y=r[y+1],A.z=r[y+2],A.normalize().multiplyScalar(M),r[y+0]=A.x,r[y+1]=A.y,r[y+2]=A.z}function d(){let M=new O;for(let A=0;A<r.length;A+=3){M.x=r[A+0],M.y=r[A+1],M.z=r[A+2];let y=m(M)/2/Math.PI+.5,L=u(M)/Math.PI+.5;a.push(y,1-L)}x(),p()}function p(){for(let M=0;M<a.length;M+=6){let A=a[M+0],y=a[M+2],L=a[M+4],b=Math.max(A,y,L),T=Math.min(A,y,L);b>.9&&T<.1&&(A<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function h(M){r.push(M.x,M.y,M.z)}function f(M,A){let y=M*3;A.x=e[y+0],A.y=e[y+1],A.z=e[y+2]}function x(){let M=new O,A=new O,y=new O,L=new O,b=new $e,T=new $e,_=new $e;for(let w=0,R=0;w<r.length;w+=9,R+=6){M.set(r[w+0],r[w+1],r[w+2]),A.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),T.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),L.copy(M).add(A).add(y).divideScalar(3);let N=m(L);S(b,R+0,M,N),S(T,R+2,A,N),S(_,R+4,y,N)}}function S(M,A,y,L){L<0&&M.x===1&&(a[A]=M.x-1),y.x===0&&y.z===0&&(a[A]=L/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var qs=class i extends ta{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},mi=class i extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,d=c+1,p=e/o,h=t/c,f=[],x=[],S=[],m=[];for(let u=0;u<d;u++){let M=u*h-a;for(let A=0;A<l;A++){let y=A*p-r;x.push(y,-M,0),S.push(0,0,1),m.push(A/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let M=0;M<o;M++){let A=M+l*u,y=M+l*(u+1),L=M+1+l*(u+1),b=M+1+l*u;f.push(A,y,b),f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ys=class i extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,d=[],p=new O,h=new O,f=[],x=[],S=[],m=[];for(let u=0;u<=n;u++){let M=[],A=u/n,y=a+A*o,L=e*Math.cos(y),b=Math.sqrt(e*e-L*L),T=0;u===0&&a===0?T=.5/t:u===n&&c===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let w=_/t,R=s+w*r;p.x=-b*Math.cos(R),p.y=L,p.z=b*Math.sin(R),x.push(p.x,p.y,p.z),h.copy(p).normalize(),S.push(h.x,h.y,h.z),m.push(w+T,1-A),M.push(l++)}d.push(M)}for(let u=0;u<n;u++)for(let M=0;M<t;M++){let A=d[u][M+1],y=d[u][M],L=d[u+1][M],b=d[u+1][M+1];(u!==0||a>0)&&f.push(A,y,b),(u!==n-1||c<Math.PI)&&f.push(y,L,b)}this.setIndex(f),this.setAttribute("position",new xt(x,3)),this.setAttribute("normal",new xt(S,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mn=class i extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],d=[],p=[],h=new O,f=new O,x=new O;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let u=0;u<=s;u++){let M=u/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),x.subVectors(f,h).normalize(),d.push(x.x,x.y,x.z),p.push(u/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let u=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,y=(s+1)*S+m;c.push(u,M,y),c.push(M,A,y)}this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Oi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lc(s))s.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Oi(i[t]);for(let s in n)e[s]=n[s]}return e}function lc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function eu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var jc={clone:Oi,merge:Yt},tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oi(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},na=class extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rt=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ia=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sa=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ra=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Go,endingEnd:Go}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wo:r=e,o=2*t-n;break;case Xo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wo:a=e,c=2*n-t;break;case Xo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),S=x*x,m=S*x,u=-h*m+2*h*S-h*x,M=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*x+1,A=(-1-f)*m+(1.5+f)*S+.5*x,y=f*m-f*S;for(let L=0;L!==o;++L)r[L]=u*a[d+L]+M*a[l+L]+A*a[c+L]+y*a[p+L];return r}},aa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(s-t),p=1-d;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*d;return r}},oa=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},la=class extends gi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let x=(n-t)/(s-t),S=1-x;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[c+m]*x;return r}let h=o*2,f=e-1;for(let x=0;x!==o;++x){let S=a[l+x],m=a[c+x],u=f*h+x*2,M=p[u],A=p[u+1],y=e*h+x*2,L=d[y],b=d[y+1],T=su(n,t,M,L,s);r[x]=eh(T,S,A,b,m)}return r}};function eh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function iu(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function su(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=eh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=iu(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),zo(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new la(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case Ho:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return Ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;zo(this.settings)&&(cc(this.settings.inTangents,e),cc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Nh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(s)c=!0;else{let p=o*n,h=p-n,f=p+n;for(let x=0;x!==n;++x){let S=t[p+x];if(S!==t[h+x]||S!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let p=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[p+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,zo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=Yr;var _i=class extends dn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Us;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};ca.prototype.ValueTypeName="color";var ha=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};ha.prototype.ValueTypeName="number";var ua=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let d=l+o;l!==d;l+=4)Bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zs=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends dn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Us;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends dn{constructor(e,t,n,s){super(e,t,n,s)}};da.prototype.ValueTypeName="vector";var fa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,h=l.length;p<h;p+=2){let f=l[p],x=l[p+1];if(f.global&&(f.lastIndex=0),f.test(d))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},th=new fa,pa=class{constructor(e){this.manager=e!==void 0?e:th,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var us=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Js=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Vo=new Et,hc=new O,uc=new O,Qs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nr=new O,Ur=new Bn,Nn=new O,$s=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nr,Ur,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Ur,Nn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Nr,Ur,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Ur,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new O,dc=new $e,fc=new $e,zt=class extends $s{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,dc,fc),t.subVectors(fc,dc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var qo=class extends Qs{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0}},Ks=class extends us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ds=class extends $s{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yo=class extends Qs{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Yo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var es=-90,ts=1,ma=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(es,ts,e,t);s.layers=this.layers,this.add(s);let r=new zt(es,ts,e,t);r.layers=this.layers,this.add(r);let a=new zt(es,ts,e,t);a.layers=this.layers,this.add(a);let o=new zt(es,ts,e,t);o.layers=this.layers,this.add(o);let c=new zt(es,ts,e,t);c.layers=this.layers,this.add(c);let l=new zt(es,ts,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,h,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ga=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ml="\\[\\]\\.:\\/",ru=new RegExp("["+Ml+"]","g"),Sl="[^"+Ml+"]",au="[^"+Ml.replace("\\.","")+"]",ou=/((?:WC+[\/:])*)/.source.replace("WC",Sl),lu=/(WCOD+)?/.source.replace("WCOD",au),cu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl),hu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl),uu=new RegExp("^"+ou+lu+cu+hu+"$"),du=["material","materials","bones","map"],Zo=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ru,"")}static parseTrackName(e){let t=uu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);du.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Zo;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var am=new Float32Array(1);var Jo=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function bl(i,e,t,n){let s=fu(n);switch(t){case ml:return i*e;case _l:return i*e/s.components*s.byteLength;case ba:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case La:return i*e*2/s.components*s.byteLength;case gl:return i*e*3/s.components*s.byteLength;case gn:return i*e*4/s.components*s.byteLength;case wa:return i*e*4/s.components*s.byteLength;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sr:case rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Ra:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ca:case Ia:case Da:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:case ar:case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Za:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qa:case $a:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ja:case eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case or:case to:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fu(i){switch(i){case an:case ul:return{byteLength:1,components:1};case gs:case dl:case Tn:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case wn:case ya:case En:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mu(i){let e=new WeakMap;function t(o,c){let l=o.array,d=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,d),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let d=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<p.length;f++){let x=p[h],S=p[f];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,p[h]=S)}p.length=h+1;for(let f=0,x=p.length;f<x;f++){let S=p[f];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_u=`#ifdef USE_ALPHAHASH
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
#endif`,xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
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
#endif`,bu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,wu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,Cu=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ku=`#define PI 3.141592653589793
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,ju=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,id=`#ifdef USE_GRADIENTMAP
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
}`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,pd=`uniform sampler2D dfgLUT;
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ed=`#if defined( USE_POINTS_UV )
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
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ef=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tf=`float getShadowMask() {
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
}`,nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,af=`#ifdef USE_SKINNING
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
#endif`,of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uf=`#ifdef USE_TRANSMISSION
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
#endif`,df=`#ifdef USE_TRANSMISSION
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xf=`uniform sampler2D t2D;
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`#include <common>
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
}`,Lf=`#if DEPTH_PACKING == 3200
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
}`,wf=`#define DISTANCE
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
}`,Ef=`#define DISTANCE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rf=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,If=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Df=`#define LAMBERT
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
}`,Nf=`#define LAMBERT
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
}`,Uf=`#define MATCAP
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
}`,Ff=`#define MATCAP
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
}`,Of=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,kf=`#define PHONG
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
}`,zf=`#define PHONG
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
}`,Vf=`#define STANDARD
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
}`,Hf=`#define STANDARD
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
}`,Gf=`#define TOON
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
}`,Wf=`#define TOON
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
}`,Xf=`uniform float size;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Zf=`uniform vec3 color;
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
}`,Jf=`uniform float rotation;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:gu,alphahash_pars_fragment:_u,alphamap_fragment:xu,alphamap_pars_fragment:vu,alphatest_fragment:yu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:bu,batching_pars_vertex:Lu,batching_vertex:wu,begin_vertex:Eu,beginnormal_vertex:Tu,bsdfs:Au,iridescence_fragment:Ru,bumpmap_pars_fragment:Cu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Pu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Nu,color_fragment:Uu,color_pars_fragment:Fu,color_pars_vertex:Ou,color_vertex:Bu,common:ku,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Vu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Gu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:qu,colorspace_pars_fragment:Yu,envmap_fragment:Zu,envmap_common_pars_fragment:Ju,envmap_pars_fragment:Qu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:ld,envmap_vertex:Ku,fog_vertex:ju,fog_pars_vertex:ed,fog_fragment:td,fog_pars_fragment:nd,gradientmap_pars_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:dd,lights_physical_fragment:fd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,lightprobes_pars_fragment:xd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:bd,map_pars_fragment:Ld,map_particle_fragment:wd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:Ad,morphinstance_vertex:Rd,morphcolor_vertex:Cd,morphnormal_vertex:Id,morphtarget_pars_vertex:Pd,morphtarget_vertex:Dd,normal_fragment_begin:Nd,normal_fragment_maps:Ud,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:Bd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Gd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:$d,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:jd,shadowmap_vertex:ef,shadowmask_pars_fragment:tf,skinbase_vertex:nf,skinning_pars_vertex:sf,skinning_vertex:rf,skinnormal_vertex:af,specularmap_fragment:of,specularmap_pars_fragment:lf,tonemapping_fragment:cf,tonemapping_pars_fragment:hf,transmission_fragment:uf,transmission_pars_fragment:df,uv_pars_fragment:ff,uv_pars_vertex:pf,uv_vertex:mf,worldpos_vertex:gf,background_vert:_f,background_frag:xf,backgroundCube_vert:vf,backgroundCube_frag:yf,cube_vert:Mf,cube_frag:Sf,depth_vert:bf,depth_frag:Lf,distance_vert:wf,distance_frag:Ef,equirect_vert:Tf,equirect_frag:Af,linedashed_vert:Rf,linedashed_frag:Cf,meshbasic_vert:If,meshbasic_frag:Pf,meshlambert_vert:Df,meshlambert_frag:Nf,meshmatcap_vert:Uf,meshmatcap_frag:Ff,meshnormal_vert:Of,meshnormal_frag:Bf,meshphong_vert:kf,meshphong_frag:zf,meshphysical_vert:Vf,meshphysical_frag:Hf,meshtoon_vert:Gf,meshtoon_frag:Wf,points_vert:Xf,points_frag:qf,shadow_vert:Yf,shadow_frag:Zf,sprite_vert:Jf,sprite_frag:Qf},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Vn={basic:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([xe.points,xe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([xe.common,xe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([xe.sprite,xe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Yt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Yt([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Vn.physical={uniforms:Yt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var ro={r:0,b:0,g:0},$f=new Et,Lh=new Ge;Lh.set(-1,0,0,0,1,0,0,0,1);function Kf(i,e,t,n,s,r){let a=new Ye(0),o=s===!0?0:1,c,l,d=null,p=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let y=M.backgroundBlurriness>0;A=e.get(A,y)}return A}function x(M){let A=!1,y=f(M);y===null?m(a,o):y&&y.isColor&&(m(y,1),A=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(M,A){let y=f(A);y&&(y.isCubeTexture||y.mapping===er)?(l===void 0&&(l=new Ze(new pi(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Oi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($f.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lh),l.material.toneMapped=st.getTransfer(y.colorSpace)!==gt,(d!==y||p!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ze(new mi(2,2),new un({name:"BackgroundMaterial",uniforms:Oi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==gt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,h=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(ro,yl(i)),t.buffers.color.setClear(ro.r,ro.g,ro.b,A,r)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:x,addToRenderList:S,dispose:u}}function jf(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(N,U,G,P,X){let K=!1,Q=p(N,P,G,U);r!==Q&&(r=Q,l(r.object)),K=f(N,P,G,X),K&&x(N,P,G,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(N,U,G,P),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function p(N,U,G,P){let X=P.wireframe===!0,K=n[U.id];K===void 0&&(K={},n[U.id]=K);let Q=N.isInstancedMesh===!0?N.id:0,oe=K[Q];oe===void 0&&(oe={},K[Q]=oe);let $=oe[G.id];$===void 0&&($={},oe[G.id]=$);let ie=$[X];return ie===void 0&&(ie=h(c()),$[X]=ie),ie}function h(N){let U=[],G=[],P=[];for(let X=0;X<t;X++)U[X]=0,G[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,U,G,P){let X=r.attributes,K=U.attributes,Q=0,oe=G.getAttributes();for(let $ in oe)if(oe[$].location>=0){let re=X[$],Ne=K[$];if(Ne===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(Ne=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(Ne=N.instanceColor)),re===void 0||re.attribute!==Ne||Ne&&re.data!==Ne.data)return!0;Q++}return r.attributesNum!==Q||r.index!==P}function x(N,U,G,P){let X={},K=U.attributes,Q=0,oe=G.getAttributes();for(let $ in oe)if(oe[$].location>=0){let re=K[$];re===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let Ne={};Ne.attribute=re,re&&re.data&&(Ne.data=re.data),X[$]=Ne,Q++}r.attributes=X,r.attributesNum=Q,r.index=P}function S(){let N=r.newAttributes;for(let U=0,G=N.length;U<G;U++)N[U]=0}function m(N){u(N,0)}function u(N,U){let G=r.newAttributes,P=r.enabledAttributes,X=r.attributeDivisors;G[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),X[N]!==U&&(i.vertexAttribDivisor(N,U),X[N]=U)}function M(){let N=r.newAttributes,U=r.enabledAttributes;for(let G=0,P=U.length;G<P;G++)U[G]!==N[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function A(N,U,G,P,X,K,Q){Q===!0?i.vertexAttribIPointer(N,U,G,X,K):i.vertexAttribPointer(N,U,G,P,X,K)}function y(N,U,G,P){S();let X=P.attributes,K=G.getAttributes(),Q=U.defaultAttributeValues;for(let oe in K){let $=K[oe];if($.location>=0){let ie=X[oe];if(ie===void 0&&(oe==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),oe==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){let re=ie.normalized,Ne=ie.itemSize,Pe=e.get(ie);if(Pe===void 0)continue;let mt=Pe.buffer,it=Pe.type,ct=Pe.bytesPerElement,j=it===i.INT||it===i.UNSIGNED_INT||ie.gpuType===ya;if(ie.isInterleavedBufferAttribute){let ne=ie.data,Le=ne.stride,Oe=ie.offset;if(ne.isInstancedInterleavedBuffer){for(let ye=0;ye<$.locationSize;ye++)u($.location+ye,ne.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<$.locationSize;ye++)m($.location+ye);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ye=0;ye<$.locationSize;ye++)A($.location+ye,Ne/$.locationSize,it,re,Le*ct,(Oe+Ne/$.locationSize*ye)*ct,j)}else{if(ie.isInstancedBufferAttribute){for(let ne=0;ne<$.locationSize;ne++)u($.location+ne,ie.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ne=0;ne<$.locationSize;ne++)m($.location+ne);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ne=0;ne<$.locationSize;ne++)A($.location+ne,Ne/$.locationSize,it,re,Ne*ct,Ne/$.locationSize*ne*ct,j)}}else if(Q!==void 0){let re=Q[oe];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}M()}function L(){w();for(let N in n){let U=n[N];for(let G in U){let P=U[G];for(let X in P){let K=P[X];for(let Q in K)d(K[Q].object),delete K[Q];delete P[X]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let G in U){let P=U[G];for(let X in P){let K=P[X];for(let Q in K)d(K[Q].object),delete K[Q];delete P[X]}}delete n[N.id]}function T(N){for(let U in n){let G=n[U];for(let P in G){let X=G[P];if(X[N.id]===void 0)continue;let K=X[N.id];for(let Q in K)d(K[Q].object),delete K[Q];delete X[N.id]}}}function _(N){for(let U in n){let G=n[U],P=N.isInstancedMesh===!0?N.id:0,X=G[P];if(X!==void 0){for(let K in X){let Q=X[K];for(let oe in Q)d(Q[oe].object),delete Q[oe];delete X[K]}delete G[P],Object.keys(G).length===0&&delete n[U]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function ep(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,d){d!==0&&(i.drawArraysInstanced(n,c,l,d),t.update(l,n,d))}function o(c,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,d);let h=0;for(let f=0;f<d;f++)h+=l[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function tp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==gn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==an&&T!==En&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=c(l);d!==l&&(ke("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:y,maxSamples:L,samples:b}}function np(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Sn,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let f=p.length!==0||h||n!==0||s;return s=h,n=p.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=d(p,h,0)},this.setState=function(p,h,f){let x=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||x===null||x.length===0||r&&!m)r?d(null):l();else{let M=r?0:n,A=M*4,y=u.clippingState||null;c.value=y,y=d(x,h,A,f);for(let L=0;L!==A;++L)y[L]=t[L];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,h,f,x){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=c.value,x!==!0||m===null){let u=f+S*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,y=f;A!==S;++A,y+=4)a.copy(p[A]).applyMatrix4(M,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var vs=4,ip=6,sp=20,rp=256,cr=new ds,nh=new Ye,Ll=null,wl=0,El=0,Tl=!1,ap=new O,Bi=new O,oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ap}=r;Ll=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll,wl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget(),wl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Tn,format:gn,colorSpace:Fs,depthBuffer:!1},s=ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=op(r)),this._blurMaterial=cp(r,e,t),this._ggxMaterial=lp(r,e,t)}return s}_compileMaterial(e){let t=new Ze(new Qt,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,n,s,r){let c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(nh),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new pi,new Ht({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,u=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,u=!0):(m.color.copy(nh),u=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[A],r.y,r.z)):y===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[A]));let L=this._cubeSize;xs(s,y*L,A>2?L:0,L,L),p.setRenderTarget(s),u&&p.render(S,c),p.render(e,c)}p.toneMapping=f,p.autoClear=h,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===yi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;xs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,cr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),h=l*1.25,f=p*h,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-vs?n-x+vs:0),u=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,xs(r,m,u,3*S,2*S),s.setRenderTarget(r),s.render(o,cr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,xs(e,m,u,3*S,2*S),s.setRenderTarget(e),s.render(o,cr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-vs?s-this._lodMax+vs:0),h=4*(this._cubeSize-d);xs(t,p,h,3*d,2*d),a.setRenderTarget(t),a.render(c,cr)}};function op(i){let e=[],t=[],n=i,s=i-vs+1+ip;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,d=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,f=3,x=new Float32Array(f*h*p),S=new Float32Array(f*h*p);for(let u=0;u<p;u++){let M=u%3*2/3-1,A=u>2?0:-1,y=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(y,f*h*u);for(let L=0;L<h;L++){let b=d[L*2]*2-1,T=d[L*2+1]*2-1;u===0?Bi.set(1,T,b):u===1?Bi.set(-b,1,-T):u===2?Bi.set(-b,T,1):u===3?Bi.set(-1,T,-b):u===4?Bi.set(-b,-1,T):Bi.set(b,T,-1),Bi.toArray(S,(u*h+L)*f)}}let m=new Qt;m.setAttribute("position",new pn(x,f)),m.setAttribute("outputDirection",new pn(S,f)),t.push(new Ze(m,null)),n>vs&&n--}return{lodMeshes:t,sizeLods:e}}function ih(i,e,t){let n=new nn(i,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function lp(i,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function cp(i,e,t){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:sp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function sh(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function rh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lo=class extends nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ws(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pi(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:kn});r.uniforms.tEquirect.value=t;let a=new Ze(s,r),o=t.minFilter;return t.minFilter===Mi&&(t.minFilter=Vt),new ma(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function hp(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===_a||f===xa)if(e.has(h)){let x=e.get(h).texture;return o(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let S=new lo(x.height);return S.fromEquirectangularTexture(i,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,x=f===_a||f===xa,S=f===yi||f===Fi;if(x||S){let m=t.get(h),u=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==u)return n===null&&(n=new oo(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let M=h.image;return x&&M&&M.height>0||S&&M&&c(M)?(n===null&&(n=new oo(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function o(h,f){return f===_a?h.mapping=yi:f===xa&&(h.mapping=Fi),h}function c(h){let f=0,x=6;for(let S=0;S<x;S++)h[S]!==void 0&&f++;return f===x}function l(h){let f=h.target;f.removeEventListener("dispose",l);let x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(h){let f=h.target;f.removeEventListener("dispose",d);let x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function up(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,e,t,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&e.remove(h.index);for(let x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(p){let h=p.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(p){let h=[],f=p.index,x=p.attributes.position,S=0;if(x===void 0)return;if(f!==null){let M=f.array;S=f.version;for(let A=0,y=M.length;A<y;A+=3){let L=M[A+0],b=M[A+1],T=M[A+2];h.push(L,b,b,T,T,L)}}else{let M=x.array;S=x.version;for(let A=0,y=M.length/3-1;A<y;A+=3){let L=A+0,b=A+1,T=A+2;h.push(L,b,b,T,T,L)}}let m=new(x.count>=65535?Gs:Hs)(h,1);m.version=S;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function d(p){let h=r.get(p);if(h){let f=p.index;f!==null&&h.version<f.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:d}}function fp(i,e,t){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),t.update(h,n,1)}function l(p,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,p*a,f),t.update(h,n,f))}function d(p,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,f);let S=0;for(let m=0;m<f;m++)S+=h[m];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d}function pp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mp(i,e,t){let n=new WeakMap,s=new Lt;function r(a,o,c){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,h=n.get(o);if(h===void 0||h.count!==p){let w=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),x===!0&&(A=2),S===!0&&(A=3);let y=o.attributes.position.count*A,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*L*4*p),T=new ks(b,y,L,p);T.type=En,T.needsUpdate=!0;let _=A*4;for(let R=0;R<p;R++){let N=m[R],U=u[R],G=M[R],P=y*L*4*R;for(let X=0;X<N.count;X++){let K=X*_;f===!0&&(s.fromBufferAttribute(N,X),b[P+K+0]=s.x,b[P+K+1]=s.y,b[P+K+2]=s.z,b[P+K+3]=0),x===!0&&(s.fromBufferAttribute(U,X),b[P+K+4]=s.x,b[P+K+5]=s.y,b[P+K+6]=s.z,b[P+K+7]=0),S===!0&&(s.fromBufferAttribute(G,X),b[P+K+8]=s.x,b[P+K+9]=s.y,b[P+K+10]=s.z,b[P+K+11]=G.itemSize===4?s.w:1)}}h={count:p,texture:T,size:new $e(y,L)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function gp(i,e,t,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,p=l.geometry,h=e.get(l,p);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function o(){r=new WeakMap}function c(l){let d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var _p={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[al]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function xp(i,e,t,n,s,r){let a=new nn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qt;l.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ze(l,d),h=new ds(-1,1,1,-1,0,1),f=null,x=null,S=!1,m,u=null,M=[],A=!1;this.setSize=function(y,L){a.setSize(y,L),o!==null&&o.setSize(y,L),c!==null&&c.setSize(y,L);for(let b=0;b<M.length;b++){let T=M[b];T.setSize&&T.setSize(y,L)}},this.setEffects=function(y){M=y,A=M.length>0&&M[0].isRenderPass===!0;let L=a.width,b=a.height;M.length>0&&o===null&&(o=new nn(L,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),c=new nn(L,b,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<M.length;T++){let _=M[T];_.setSize&&_.setSize(L,b)}},this.begin=function(y,L){if(S||y.toneMapping===Ln&&M.length===0)return!1;if(u=L,L!==null){let b=L.width,T=L.height;(a.width!==b||a.height!==T)&&this.setSize(b,T)}return A===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ln,!0},this.hasRenderPass=function(){return A},this.end=function(y,L){y.toneMapping=m,S=!0;let b=a,T=o;for(let _=0;_<M.length;_++){let w=M[_];w.enabled!==!1&&(w.render(y,T,b,L),w.needsSwap!==!1&&(b=T,T=T===o?c:o))}if(f!==y.outputColorSpace||x!==y.toneMapping){f=y.outputColorSpace,x=y.toneMapping,d.defines={},st.getTransfer(f)===gt&&(d.defines.SRGB_TRANSFER="");let _=_p[x];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(u),y.render(p,h),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),d.dispose()}}var wh=new Jt,Cl=new fi(1,1),Eh=new ks,Th=new $r,Ah=new Ws,ah=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),hh=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ah[s];if(r===void 0&&(r=new Float32Array(s),ah[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uo(i,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Mp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Sp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function bp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Ut(t,n)}}function Lp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),Ut(t,n)}}function wp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;lh.set(n),i.uniformMatrix4fv(this.addr,!1,lh),Ut(t,n)}}function Ep(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Cp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Pp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Np(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=t.isReversedDepthBuffer()?so:io,r=Cl):r=wh,t.setTexture2D(e||r,s)}function Up(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Th,s)}function Fp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ah,s)}function Op(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eh,s)}function Bp(i){switch(i){case 5126:return vp;case 35664:return yp;case 35665:return Mp;case 35666:return Sp;case 35674:return bp;case 35675:return Lp;case 35676:return wp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return Ap;case 35669:case 35673:return Rp;case 5125:return Cp;case 36294:return Ip;case 36295:return Pp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function kp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Vp(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Hp(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function Gp(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wp(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xp(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function Yp(i,e){i.uniform2iv(this.addr,e)}function Zp(i,e){i.uniform3iv(this.addr,e)}function Jp(i,e){i.uniform4iv(this.addr,e)}function Qp(i,e){i.uniform1uiv(this.addr,e)}function $p(i,e){i.uniform2uiv(this.addr,e)}function Kp(i,e){i.uniform3uiv(this.addr,e)}function jp(i,e){i.uniform4uiv(this.addr,e)}function e0(i,e,t){let n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cl:a=wh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function t0(i,e,t){let n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Th,r[a])}function n0(i,e,t){let n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ah,r[a])}function i0(i,e,t){let n=this.cache,s=e.length,r=uo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eh,r[a])}function s0(i){switch(i){case 5126:return kp;case 35664:return zp;case 35665:return Vp;case 35666:return Hp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Qp;case 36294:return $p;case 36295:return Kp;case 36296:return jp;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}},Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Al=/(\w+)(\])?(\[|\.)?/g;function uh(i,e){i.seq.push(e),i.map[e.id]=e}function r0(i,e,t){let n=i.name,s=n.length;for(Al.lastIndex=0;;){let r=Al.exec(n),a=Al.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){uh(t,l===void 0?new Il(o,i,e):new Pl(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Dl(o),uh(t,p)),t=p}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);r0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function dh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var a0=37297,o0=0;function l0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var fh=new Ge;function c0(i){st._getMatrix(fh,st.workingColorSpace,i);let e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Os:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ph(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+l0(i.getShaderSource(e),o)}else return r}function h0(i,e){let t=c0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var u0={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[al]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[ol]:"Custom"};function d0(i,e){let t=u0[e];return t===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ao=new O;function f0(){st.getLuminanceCoefficients(ao);let i=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function m0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ur(i){return i!==""}function mh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(_0,v0)}var x0=new Map;function v0(i,e){let t=Ke[e];if(t===void 0){let n=x0.get(e);if(n!==void 0)t=Ke[n],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nl(t)}var y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(i){return i.replace(y0,M0)}function M0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var S0={[js]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function b0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L0={[yi]:"ENVMAP_TYPE_CUBE",[Fi]:"ENVMAP_TYPE_CUBE",[er]:"ENVMAP_TYPE_CUBE_UV"};function w0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":L0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var E0={[Fi]:"ENVMAP_MODE_REFRACTION"};function T0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A0={[nl]:"ENVMAP_BLENDING_MULTIPLY",[Uc]:"ENVMAP_BLENDING_MIX",[Fc]:"ENVMAP_BLENDING_ADD"};function R0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A0[i.combine]||"ENVMAP_BLENDING_NONE"}function C0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=b0(t),l=w0(t),d=T0(t),p=R0(t),h=C0(t),f=p0(t),x=m0(r),S=s.createProgram(),m,u,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ur).join(`
`),u.length>0&&(u+=`
`)):(m=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),u=[xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ln?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),f0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=Nl(a),a=mh(a,t),a=gh(a,t),o=Nl(o),o=mh(o,t),o=gh(o,t),a=_h(a),o=_h(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=M+m+a,y=M+u+o,L=dh(s,s.VERTEX_SHADER,A),b=dh(s,s.FRAGMENT_SHADER,y);s.attachShader(S,L),s.attachShader(S,b),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function T(N){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(L)||"",P=s.getShaderInfoLog(b)||"",X=U.trim(),K=G.trim(),Q=P.trim(),oe=!0,$=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,L,b);else{let ie=ph(s,L,"vertex"),re=ph(s,b,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+X+`
`+ie+`
`+re)}else X!==""?ke("WebGLProgram: Program Info Log:",X):(K===""||Q==="")&&($=!1);$&&(N.diagnostics={runnable:oe,programLog:X,vertexShader:{log:K,prefix:m},fragmentShader:{log:Q,prefix:u}})}s.deleteShader(L),s.deleteShader(b),_=new ys(s,S),w=g0(s,S)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(S,a0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o0++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=L,this.fragmentShader=b,this}var P0=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=P0++,this.code=e,this.usedTimes=0}};function D0(i){return i===bi||i===ar||i===or}function N0(i,e,t,n,s,r){let a=new zs,o=new Ul,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,w,R,N,U,G){let P=N.fog,X=U.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=e.get(_.envMap||K,Q),$=oe&&oe.mapping===er?oe.image.height:null,ie=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ne=re!==void 0?re.length:0,Pe=0;X.morphAttributes.position!==void 0&&(Pe=1),X.morphAttributes.normal!==void 0&&(Pe=2),X.morphAttributes.color!==void 0&&(Pe=3);let mt,it,ct,j;if(ie){let ut=Vn[ie];mt=ut.vertexShader,it=ut.fragmentShader}else{mt=_.vertexShader,it=_.fragmentShader;let ut=o.getVertexShaderStage(_),nt=o.getFragmentShaderStage(_);o.update(_,ut,nt),ct=ut.id,j=nt.id}let ne=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,ye=U.isBatchedMesh===!0,Ve=!!_.map,Tt=!!_.matcap,Je=!!oe,tt=!!_.aoMap,ht=!!_.lightMap,Xe=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,Mt=!!_.displacementMap,Ct=!!_.emissiveMap,St=!!_.metalnessMap,_t=!!_.roughnessMap,D=_.anisotropy>0,At=_.clearcoat>0,ot=_.dispersion>0,E=_.retroreflectivity>0,g=_.iridescence>0,B=_.sheen>0,W=_.transmission>0,Z=D&&!!_.anisotropyMap,ce=At&&!!_.clearcoatMap,he=At&&!!_.clearcoatNormalMap,J=At&&!!_.clearcoatRoughnessMap,te=g&&!!_.iridescenceMap,fe=g&&!!_.iridescenceThicknessMap,Ie=B&&!!_.sheenColorMap,ue=B&&!!_.sheenRoughnessMap,pe=!!_.specularMap,Re=!!_.specularColorMap,Ue=!!_.specularIntensityMap,He=W&&!!_.transmissionMap,I=W&&!!_.thicknessMap,me=!!_.gradientMap,ee=!!_.alphaMap,de=_.alphaTest>0,ve=!!_.alphaHash,ae=!!_.extensions,De=Ln;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(De=i.toneMapping);let Ae={shaderID:ie,shaderType:_.type,shaderName:_.name,vertexShader:mt,fragmentShader:it,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ye,batchingColor:ye&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ve,matcap:Tt,envMap:Je,envMapMode:Je&&oe.mapping,envMapCubeUVHeight:$,aoMap:tt,lightMap:ht,bumpMap:Xe,normalMap:vt,displacementMap:Mt,emissiveMap:Ct,normalMapObjectSpace:vt&&_.normalMapType===kc,normalMapTangentSpace:vt&&_.normalMapType===no,packedNormalMap:vt&&_.normalMapType===no&&D0(_.normalMap.format),metalnessMap:St,roughnessMap:_t,anisotropy:D,anisotropyMap:Z,clearcoat:At,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:J,dispersion:ot,retroreflection:E,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:B,sheenColorMap:Ie,sheenRoughnessMap:ue,specularMap:pe,specularColorMap:Re,specularIntensityMap:Ue,transmission:W,transmissionMap:He,thicknessMap:I,gradientMap:me,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:ee,alphaTest:de,alphaHash:ve,combine:_.combine,mapUv:Ve&&x(_.map.channel),aoMapUv:tt&&x(_.aoMap.channel),lightMapUv:ht&&x(_.lightMap.channel),bumpMapUv:Xe&&x(_.bumpMap.channel),normalMapUv:vt&&x(_.normalMap.channel),displacementMapUv:Mt&&x(_.displacementMap.channel),emissiveMapUv:Ct&&x(_.emissiveMap.channel),metalnessMapUv:St&&x(_.metalnessMap.channel),roughnessMapUv:_t&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:ce&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&x(_.sheenRoughnessMap.channel),specularMapUv:pe&&x(_.specularMap.channel),specularColorMapUv:Re&&x(_.specularColorMap.channel),specularIntensityMapUv:Ue&&x(_.specularIntensityMap.channel),transmissionMapUv:He&&x(_.transmissionMap.channel),thicknessMapUv:I&&x(_.thicknessMap.channel),alphaMapUv:ee&&x(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||D),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(Ve||ee),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Le,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ve&&_.map.isVideoTexture===!0&&st.getTransfer(_.map.colorSpace)===gt,decodeVideoTextureEmissive:Ct&&_.emissiveMap.isVideoTexture===!0&&st.getTransfer(_.emissiveMap.colorSpace)===gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===rn,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(u(w,_),M(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function u(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function A(_){let w=f[_.type],R;if(w){let N=Vn[w];R=jc.clone(N.uniforms)}else R=_.uniforms;return R}function y(_,w){let R=d.get(w);return R!==void 0?++R.usedTimes:(R=new I0(i,w,_,s),l.push(R),d.set(w,R)),R}function L(_){if(--_.usedTimes===0){let w=l.indexOf(_);l[w]=l[l.length-1],l.pop(),d.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function T(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:L,releaseShaderCache:b,programs:l,dispose:T}}function U0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function F0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function vh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,S,m,u){let M=i[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:u},i[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=x,M.materialVariant=a(h),M.groupOrder=S,M.renderOrder=h.renderOrder,M.z=m,M.group=u),e++,M}function c(h,f,x,S,m,u,M){M.reversedDepth===!0&&(m=-m);let A=o(h,f,x,S,m,u);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function l(h,f,x,S,m,u){let M=o(h,f,x,S,m,u);x.transmission>0?n.unshift(M):x.transparent===!0?s.unshift(M):t.unshift(M)}function d(h,f){t.length>1&&t.sort(h||F0),n.length>1&&n.sort(f||vh),s.length>1&&s.sort(f||vh)}function p(){for(let h=e,f=i.length;h<f;h++){let x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function O0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yh,i.set(n,[a])):s>=r.length?(a=new yh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function B0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function k0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var z0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H0(i){let e=new B0,t=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new Et,a=new Et;function o(l){let d=0,p=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,x=0,S=0,m=0,u=0,M=0,A=0,y=0,L=0,b=0,T=0,_=0,w=0,R=0;l.sort(V0);for(let U=0,G=l.length;U<G;U++){let P=l[U],X=P.color,K=P.intensity,Q=P.distance,oe=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bi?oe=P.shadow.map.texture:oe=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=X.r*K,p+=X.g*K,h+=X.b*K;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],K);R++}else if(P.isSunLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,re=t.get(P);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize.copy(ie.mapSize).multiply(ie.getFrameExtents()),n.sunShadow[x]=re,n.sunShadowMap[x]=oe;let Ne=ie.getViewportCount();for(let Pe=0;Pe<Ne;Pe++)n.sunShadowMatrix[S+Pe]=ie.getMatrix(Pe),n.sunShadowCascade[S+Pe]=ie._cascadeData[Pe];S+=Ne,x++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,re=t.get(P);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=P.shadow.matrix,L++}n.directional[m]=$,m++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(X).multiplyScalar(K),$.distance=Q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[M]=$;let ie=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,ie.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[M]=ie.matrix,P.castShadow){let re=t.get(P);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,n.spotShadow[M]=re,n.spotShadowMap[M]=oe,T++}M++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(X).multiplyScalar(K),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[A]=$,A++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ie=P.shadow,re=t.get(P);re.shadowIntensity=ie.intensity,re.shadowBias=ie.bias,re.shadowNormalBias=ie.normalBias,re.shadowRadius=ie.radius,re.shadowMapSize=ie.mapSize,re.shadowCameraNear=ie.camera.near,re.shadowCameraFar=ie.camera.far,n.pointShadow[u]=re,n.pointShadowMap[u]=oe,n.pointShadowMatrix[u]=P.shadow.matrix,b++}n.point[u]=$,u++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(K),$.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[y]=$,y++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=h;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==u||N.spotLength!==M||N.rectAreaLength!==A||N.hemiLength!==y||N.numSunShadows!==x||N.numDirectionalShadows!==L||N.numPointShadows!==b||N.numSpotShadows!==T||N.numSpotMaps!==_||N.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=A,n.point.length=u,n.hemi.length=y,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.sunLength=f,N.directionalLength=m,N.pointLength=u,N.spotLength=M,N.rectAreaLength=A,N.hemiLength=y,N.numSunShadows=x,N.numDirectionalShadows=L,N.numPointShadows=b,N.numSpotShadows=T,N.numSpotMaps=_,N.numLightProbes=R,n.version=z0++)}function c(l,d){let p=0,h=0,f=0,x=0,S=0,m=0,u=d.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let y=l[M];if(y.isSunLight){let L=n.sun[p];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(u),p++}else if(y.isDirectionalLight){let L=n.directional[h];L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),h++}else if(y.isSpotLight){let L=n.spot[x];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(u),x++}else if(y.isRectAreaLight){let L=n.rectArea[S];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),S++}else if(y.isPointLight){let L=n.point[f];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(u),f++}else if(y.isHemisphereLight){let L=n.hemi[m];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function Mh(i){let e=new H0(i),t=[],n=[],s=[];function r(h){p.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function d(h){e.setupView(t,h)}let p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function G0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Mh(i),e.set(s,[o])):r>=a.length?(o=new Mh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`,q0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Y0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Sh=new Et,hr=new O,Rl=new O;function Z0(i,e,t){let n=new cs,s=new $e,r=new $e,a=new Lt,o=new ia,c=new sa,l={},d=t.maxTextureSize,p={[vi]:$t,[$t]:vi,[rn]:rn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new Qt;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ze(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let u=this.type;this.render=function(b,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===gc&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=js);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),U=i.state;U.setBlending(kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=u!==this.type;G&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=b.length;P<X;P++){let K=b[P],Q=K.shadow;if(Q===void 0){ke("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let oe=Q.getFrameExtents();s.multiply(oe),r.copy(Q.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/oe.x),s.x=r.x*oe.x,Q.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/oe.y),s.y=r.y*oe.y,Q.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=$,Q.map===null||G===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ps){if(K.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new nn(s.x,s.y,{format:bi,type:Tn,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new fi(s.x,s.y,En),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=Fn,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt}else K.isPointLight?(Q.map=new lo(s.x),Q.map.depthTexture=new ea(s.x,wn)):(Q.map=new nn(s.x,s.y),Q.map.depthTexture=new fi(s.x,s.y,wn)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=Fn,this.type===js?(Q.map.depthTexture.compareFunction=$?so:io,Q.map.depthTexture.minFilter=Vt,Q.map.depthTexture.magFilter=Vt):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Bt,Q.map.depthTexture.magFilter=Bt);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==s.x||Q.map.height!==s.y)&&Q.map.setSize(s.x,s.y);let ie=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,_);for(let re=0;re<ie;re++){let Ne=Q.getCamera(re);if(K.isPointLight){let Pe=Q.camera,mt=Q.matrix,it=K.distance||Pe.far;it!==Pe.far&&(Pe.far=it,Pe.updateProjectionMatrix()),hr.setFromMatrixPosition(K.matrixWorld),Pe.position.copy(hr),Rl.copy(Pe.position),Rl.add(q0[re]),Pe.up.copy(Y0[re]),Pe.lookAt(Rl),Pe.updateMatrixWorld(),mt.makeTranslation(-hr.x,-hr.y,-hr.z),Sh.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(Sh,Pe.coordinateSystem,Pe.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,re),i.clear();else{re===0&&(i.setRenderTarget(Q.map),i.clear());let Pe=Q.getViewport(re);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),U.viewport(a)}n=Q.getFrustum(re),y(T,_,Ne,K,this.type)}Q.isPointLightShadow!==!0&&this.type===ps&&M(Q,_),Q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,N)};function M(b,T){let _=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new nn(s.x,s.y,{format:bi,type:Tn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,_,h,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,_,f,S,null)}function A(b,T,_,w){let R=null,N=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=_.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let U=R.uuid,G=T.uuid,P=l[U];P===void 0&&(P={},l[U]=P);let X=P[G];X===void 0&&(X=R.clone(),P[G]=X,T.addEventListener("dispose",L)),R=X}if(R.visible=T.visible,R.wireframe=T.wireframe,w===ps?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:p[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=_}return R}function y(b,T,_,w,R){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ps)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let G=e.update(b),P=b.material;if(Array.isArray(P)){let X=G.groups;for(let K=0,Q=X.length;K<Q;K++){let oe=X[K],$=P[oe.materialIndex];if($&&$.visible){let ie=A(b,$,w,R);b.onBeforeShadow(i,b,T,_,G,ie,oe),i.renderBufferDirect(_,null,G,ie,b,oe),b.onAfterShadow(i,b,T,_,G,ie,oe)}}}else if(P.visible){let X=A(b,P,w,R);b.onBeforeShadow(i,b,T,_,G,X,null),i.renderBufferDirect(_,null,G,X,b,null),b.onAfterShadow(i,b,T,_,G,X,null)}}let U=b.children;for(let G=0,P=U.length;G<P;G++)y(U[G],T,_,w,R)}function L(b){b.target.removeEventListener("dispose",L);for(let _ in l){let w=l[_],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function J0(i,e){function t(){let I=!1,me=new Lt,ee=null,de=new Lt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!I&&(i.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){I=ve},setClear:function(ve,ae,De,Ae,ut){ut===!0&&(ve*=Ae,ae*=Ae,De*=Ae),me.set(ve,ae,De,Ae),de.equals(me)===!1&&(i.clearColor(ve,ae,De,Ae),de.copy(me))},reset:function(){I=!1,ee=null,de.set(-1,0,0,0)}}}function n(){let I=!1,me=!1,ee=null,de=null,ve=null;return{setReversed:function(ae){if(me!==ae){let De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),me=ae;let Ae=ve;ve=null,this.setClear(Ae)}},getReversed:function(){return me},setTest:function(ae){ae?ne(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ae){ee!==ae&&!I&&(i.depthMask(ae),ee=ae)},setFunc:function(ae){if(me&&(ae=$c[ae]),de!==ae){switch(ae){case Br:i.depthFunc(i.NEVER);break;case kr:i.depthFunc(i.ALWAYS);break;case zr:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case Vr:i.depthFunc(i.EQUAL);break;case Hr:i.depthFunc(i.GEQUAL);break;case Gr:i.depthFunc(i.GREATER);break;case Wr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=ae}},setLocked:function(ae){I=ae},setClear:function(ae){ve!==ae&&(ve=ae,me&&(ae=1-ae),i.clearDepth(ae))},reset:function(){I=!1,ee=null,de=null,ve=null,me=!1}}}function s(){let I=!1,me=null,ee=null,de=null,ve=null,ae=null,De=null,Ae=null,ut=null;return{setTest:function(nt){I||(nt?ne(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(nt){me!==nt&&!I&&(i.stencilMask(nt),me=nt)},setFunc:function(nt,Pt,kt){(ee!==nt||de!==Pt||ve!==kt)&&(i.stencilFunc(nt,Pt,kt),ee=nt,de=Pt,ve=kt)},setOp:function(nt,Pt,kt){(ae!==nt||De!==Pt||Ae!==kt)&&(i.stencilOp(nt,Pt,kt),ae=nt,De=Pt,Ae=kt)},setLocked:function(nt){I=nt},setClear:function(nt){ut!==nt&&(i.clearStencil(nt),ut=nt)},reset:function(){I=!1,me=null,ee=null,de=null,ve=null,ae=null,De=null,Ae=null,ut=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,d={},p={},h={},f=new WeakMap,x=[],S=null,m=!1,u=null,M=null,A=null,y=null,L=null,b=null,T=null,_=new Ye(0,0,0),w=0,R=!1,N=null,U=null,G=null,P=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,oe=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec($)[1]),Q=oe>=1):$.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Q=oe>=2);let ie=null,re={},Ne=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),mt=new Lt().fromArray(Ne),it=new Lt().fromArray(Pe);function ct(I,me,ee,de){let ve=new Uint8Array(4),ae=i.createTexture();i.bindTexture(I,ae),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ee;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(me+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return ae}let j={};j[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(is),Xe(!1),vt(Qo),ne(i.CULL_FACE),tt(kn);function ne(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Le(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Oe(I,me){return h[I]!==me?(i.bindFramebuffer(I,me),h[I]=me,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function ye(I,me){let ee=x,de=!1;if(I){ee=f.get(me),ee===void 0&&(ee=[],f.set(me,ee));let ve=I.textures;if(ee.length!==ve.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,De=ve.length;ae<De;ae++)ee[ae]=i.COLOR_ATTACHMENT0+ae;ee.length=ve.length,de=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,de=!0);de&&i.drawBuffers(ee)}function Ve(I){return S!==I?(i.useProgram(I),S=I,!0):!1}let Tt={[Ui]:i.FUNC_ADD,[xc]:i.FUNC_SUBTRACT,[vc]:i.FUNC_REVERSE_SUBTRACT};Tt[yc]=i.MIN,Tt[Mc]=i.MAX;let Je={[Sc]:i.ZERO,[bc]:i.ONE,[Lc]:i.SRC_COLOR,[el]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[Ac]:i.DST_COLOR,[Ec]:i.DST_ALPHA,[wc]:i.ONE_MINUS_SRC_COLOR,[tl]:i.ONE_MINUS_SRC_ALPHA,[Rc]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Ic]:i.CONSTANT_COLOR,[Pc]:i.ONE_MINUS_CONSTANT_COLOR,[Dc]:i.CONSTANT_ALPHA,[Nc]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(I,me,ee,de,ve,ae,De,Ae,ut,nt){if(I===kn){m===!0&&(Le(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),I!==_c){if(I!==u||nt!==R){if((M!==Ui||L!==Ui)&&(i.blendEquation(i.FUNC_ADD),M=Ui,L=Ui),nt)switch(I){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",I);break}else switch(I){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",I);break}A=null,y=null,b=null,T=null,_.set(0,0,0),w=0,u=I,R=nt}return}ve=ve||me,ae=ae||ee,De=De||de,(me!==M||ve!==L)&&(i.blendEquationSeparate(Tt[me],Tt[ve]),M=me,L=ve),(ee!==A||de!==y||ae!==b||De!==T)&&(i.blendFuncSeparate(Je[ee],Je[de],Je[ae],Je[De]),A=ee,y=de,b=ae,T=De),(Ae.equals(_)===!1||ut!==w)&&(i.blendColor(Ae.r,Ae.g,Ae.b,ut),_.copy(Ae),w=ut),u=I,R=!1}function ht(I,me){I.side===rn?Le(i.CULL_FACE):ne(i.CULL_FACE);let ee=I.side===$t;me&&(ee=!ee),Xe(ee),I.blending===ms&&I.transparent===!1?tt(kn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function vt(I){I!==pc?(ne(i.CULL_FACE),I!==U&&(I===Qo?i.cullFace(i.BACK):I===mc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),U=I}function Mt(I){I!==G&&(Q&&i.lineWidth(I),G=I)}function Ct(I,me,ee){I?(ne(i.POLYGON_OFFSET_FILL),(P!==me||X!==ee)&&(P=me,X=ee,a.getReversed()&&(me=-me),i.polygonOffset(me,ee))):Le(i.POLYGON_OFFSET_FILL)}function St(I){I?ne(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function _t(I){I===void 0&&(I=i.TEXTURE0+K-1),ie!==I&&(i.activeTexture(I),ie=I)}function D(I,me,ee){ee===void 0&&(ie===null?ee=i.TEXTURE0+K-1:ee=ie);let de=re[ee];de===void 0&&(de={type:void 0,texture:void 0},re[ee]=de),(de.type!==I||de.texture!==me)&&(ie!==ee&&(i.activeTexture(ee),ie=ee),i.bindTexture(I,me||j[I]),de.type=I,de.texture=me)}function At(){let I=re[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function g(){try{i.texSubImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function B(){try{i.texSubImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function ce(){try{i.texStorage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function he(){try{i.texStorage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function J(){try{i.texImage2D(...arguments)}catch(I){ze("WebGLState:",I)}}function te(){try{i.texImage3D(...arguments)}catch(I){ze("WebGLState:",I)}}function fe(I){return p[I]!==void 0?p[I]:i.getParameter(I)}function Ie(I,me){p[I]!==me&&(i.pixelStorei(I,me),p[I]=me)}function ue(I){mt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function pe(I){it.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),it.copy(I))}function Re(I,me){let ee=l.get(me);ee===void 0&&(ee=new WeakMap,l.set(me,ee));let de=ee.get(I);de===void 0&&(de=i.getUniformBlockIndex(me,I.name),ee.set(I,de))}function Ue(I,me){let de=l.get(me).get(I);c.get(me)!==de&&(i.uniformBlockBinding(me,de,I.__bindingPointIndex),c.set(me,de))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},ie=null,re={},h={},f=new WeakMap,x=[],S=null,m=!1,u=null,M=null,A=null,y=null,L=null,b=null,T=null,_=new Ye(0,0,0),w=0,R=!1,N=null,U=null,G=null,P=null,X=null,mt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Le,bindFramebuffer:Oe,drawBuffers:ye,useProgram:Ve,setBlending:tt,setMaterial:ht,setFlipSided:Xe,setCullFace:vt,setLineWidth:Mt,setPolygonOffset:Ct,setScissorTest:St,activeTexture:_t,bindTexture:D,unbindTexture:At,compressedTexImage2D:ot,compressedTexImage3D:E,texImage2D:J,texImage3D:te,pixelStorei:Ie,getParameter:fe,updateUBOMapping:Re,uniformBlockBinding:Ue,texStorage2D:ce,texStorage3D:he,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:ue,viewport:pe,reset:He}}function Q0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,d=new WeakMap,p=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,g){return x?new OffscreenCanvas(E,g):Bs("canvas")}function m(E,g,B){let W=1,Z=ot(E);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ce=Math.floor(W*Z.width),he=Math.floor(W*Z.height);h===void 0&&(h=S(ce,he));let J=g?S(ce,he):h;return J.width=ce,J.height=he,J.getContext("2d").drawImage(E,0,0,ce,he),ke("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ce+"x"+he+")."),J}else return"data"in E&&ke("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function u(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,g,B,W,Z,ce=!1){if(E!==null){if(i[E]!==void 0)return i[E];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;W&&(he=e.get("EXT_texture_norm16"),he||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=g;if(g===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),B===i.SHORT&&he&&(J=he.R16_SNORM_EXT)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),g===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),B===i.SHORT&&he&&(J=he.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),B===i.SHORT&&he&&(J=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),g===i.RGBA){let te=ce?Os:st.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=te===gt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),B===i.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function L(E,g){let B;return E?g===null||g===wn||g===_s?B=i.DEPTH24_STENCIL8:g===En?B=i.DEPTH32F_STENCIL8:g===gs&&(B=i.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wn||g===_s?B=i.DEPTH_COMPONENT24:g===En?B=i.DEPTH_COMPONENT32F:g===gs&&(B=i.DEPTH_COMPONENT16),B}function b(E,g){return u(E)===!0||E.isFramebufferTexture&&E.minFilter!==Bt&&E.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function T(E){let g=E.target;g.removeEventListener("dispose",T),w(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function _(E){let g=E.target;g.removeEventListener("dispose",_),N(g)}function w(E){let g=n.get(E);if(g.__webglInit===void 0)return;let B=E.source,W=f.get(B);if(W){let Z=W[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(E),Object.keys(W).length===0&&f.delete(B)}n.remove(E)}function R(E){let g=n.get(E);i.deleteTexture(g.__webglTexture);let B=E.source,W=f.get(B);delete W[g.__cacheKey],a.memory.textures--}function N(E){let g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Z=0;Z<g.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)i.deleteFramebuffer(g.__webglFramebuffer[W]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let B=E.textures;for(let W=0,Z=B.length;W<Z;W++){let ce=n.get(B[W]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(E)}let U=0;function G(){U=0}function P(){return U}function X(E){U=E}function K(){let E=U;return E>=s.maxTextures&&ke("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function Q(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function oe(E,g){let B=n.get(E);if(E.isVideoTexture&&D(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let W=E.image;if(W===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(B,E,g);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function $(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Le(B,E,g);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function ie(E,g){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Le(B,E,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function re(E,g){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Oe(B,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}let Ne={[Xr]:i.REPEAT,[Un]:i.CLAMP_TO_EDGE,[qr]:i.MIRRORED_REPEAT},Pe={[Bt]:i.NEAREST,[Oc]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},mt={[Vc]:i.NEVER,[qc]:i.ALWAYS,[Hc]:i.LESS,[io]:i.LEQUAL,[Gc]:i.EQUAL,[so]:i.GEQUAL,[Wc]:i.GREATER,[Xc]:i.NOTEQUAL};function it(E,g){if(g.type===En&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===va||g.magFilter===tr||g.magFilter===Mi||g.minFilter===Vt||g.minFilter===va||g.minFilter===tr||g.minFilter===Mi)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Ne[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Ne[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Ne[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Pe[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Pe[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,mt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Bt||g.minFilter!==tr&&g.minFilter!==Mi||g.type===En&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ct(E,g){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",T));let W=g.source,Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));let ce=Q(g);if(ce!==E.__cacheKey){Z[ce]===void 0&&(Z[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ce].usedTimes++;let he=Z[E.__cacheKey];he!==void 0&&(Z[E.__cacheKey].usedTimes--,he.usedTimes===0&&R(g)),E.__cacheKey=ce,E.__webglTexture=Z[ce].texture}return B}function j(E,g,B){return Math.floor(Math.floor(E/B)/g)}function ne(E,g,B,W){let ce=E.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,W,g.data);else{ce.sort((Ie,ue)=>Ie.start-ue.start);let he=0;for(let Ie=1;Ie<ce.length;Ie++){let ue=ce[he],pe=ce[Ie],Re=ue.start+ue.count,Ue=j(pe.start,g.width,4),He=j(ue.start,g.width,4);pe.start<=Re+1&&Ue===He&&j(pe.start+pe.count-1,g.width,4)===Ue?ue.count=Math.max(ue.count,pe.start+pe.count-ue.start):(++he,ce[he]=pe)}ce.length=he+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Ie=0,ue=ce.length;Ie<ue;Ie++){let pe=ce[Ie],Re=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),He=Re%g.width,I=Math.floor(Re/g.width),me=Ue,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,He,I,me,ee,B,W,g.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Le(E,g,B){let W=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=i.TEXTURE_3D);let Z=ct(E,g),ce=g.source;t.bindTexture(W,E.__webglTexture,i.TEXTURE0+B);let he=n.get(ce);if(ce.version!==he.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ee=st.getPrimaries(st.workingColorSpace),de=g.colorSpace===ti?null:st.getPrimaries(g.colorSpace),ve=g.colorSpace===ti||ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let te=m(g.image,!1,s.maxTextureSize);te=At(g,te);let fe=r.convert(g.format,g.colorSpace),Ie=r.convert(g.type),ue=y(g.internalFormat,fe,Ie,g.normalized,g.colorSpace,g.isVideoTexture);it(W,g);let pe,Re=g.mipmaps,Ue=g.isVideoTexture!==!0,He=he.__version===void 0||Z===!0,I=ce.dataReady,me=b(g,te);if(g.isDepthTexture)ue=L(g.format===Si,g.type),He&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ue,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ue,te.width,te.height,0,fe,Ie,null));else if(g.isDataTexture)if(Re.length>0){Ue&&He&&t.texStorage2D(i.TEXTURE_2D,me,ue,Re[0].width,Re[0].height);for(let ee=0,de=Re.length;ee<de;ee++)pe=Re[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,fe,Ie,pe.data):t.texImage2D(i.TEXTURE_2D,ee,ue,pe.width,pe.height,0,fe,Ie,pe.data);g.generateMipmaps=!1}else Ue?(He&&t.texStorage2D(i.TEXTURE_2D,me,ue,te.width,te.height),I&&ne(g,te,fe,Ie)):t.texImage2D(i.TEXTURE_2D,0,ue,te.width,te.height,0,fe,Ie,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ue,Re[0].width,Re[0].height,te.depth);for(let ee=0,de=Re.length;ee<de;ee++)if(pe=Re[ee],g.format!==gn)if(fe!==null)if(Ue){if(I)if(g.layerUpdates.size>0){let ve=bl(pe.width,pe.height,g.format,g.type);for(let ae of g.layerUpdates){let De=pe.data.subarray(ae*ve/pe.data.BYTES_PER_ELEMENT,(ae+1)*ve/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ae,pe.width,pe.height,1,fe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,te.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ue,pe.width,pe.height,te.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,pe.width,pe.height,te.depth,fe,Ie,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ue,pe.width,pe.height,te.depth,0,fe,Ie,pe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Ue&&He&&t.texStorage2D(i.TEXTURE_2D,me,ue,Re[0].width,Re[0].height);for(let ee=0,de=Re.length;ee<de;ee++)pe=Re[ee],g.format!==gn?fe!==null?Ue?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ue,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe.width,pe.height,fe,Ie,pe.data):t.texImage2D(i.TEXTURE_2D,ee,ue,pe.width,pe.height,0,fe,Ie,pe.data)}else if(g.isDataArrayTexture)if(Ue){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,ue,te.width,te.height,te.depth),I)if(g.layerUpdates.size>0){let ee=bl(te.width,te.height,g.format,g.type);for(let de of g.layerUpdates){let ve=te.data.subarray(de*ee/te.data.BYTES_PER_ELEMENT,(de+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,de,te.width,te.height,1,fe,Ie,ve)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Ie,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,te.width,te.height,te.depth,0,fe,Ie,te.data);else if(g.isData3DTexture)Ue?(He&&t.texStorage3D(i.TEXTURE_3D,me,ue,te.width,te.height,te.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Ie,te.data)):t.texImage3D(i.TEXTURE_3D,0,ue,te.width,te.height,te.depth,0,fe,Ie,te.data);else if(g.isFramebufferTexture){if(He)if(Ue)t.texStorage2D(i.TEXTURE_2D,me,ue,te.width,te.height);else{let ee=te.width,de=te.height;for(let ve=0;ve<me;ve++)t.texImage2D(i.TEXTURE_2D,ve,ue,ee,de,0,fe,Ie,null),ee>>=1,de>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),p.add(g),ee.onpaint=de=>{let ve=de.changedElements;for(let ae of p)ve.includes(ae.image)&&(ae.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let ve=i.RGBA,ae=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,ae,De,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ue&&He){let ee=ot(Re[0]);t.texStorage2D(i.TEXTURE_2D,me,ue,ee.width,ee.height)}for(let ee=0,de=Re.length;ee<de;ee++)pe=Re[ee],Ue?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,fe,Ie,pe):t.texImage2D(i.TEXTURE_2D,ee,ue,fe,Ie,pe);g.generateMipmaps=!1}else if(Ue){if(He){let ee=ot(te);t.texStorage2D(i.TEXTURE_2D,me,ue,ee.width,ee.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ie,te)}else t.texImage2D(i.TEXTURE_2D,0,ue,fe,Ie,te);u(g)&&M(W),he.__version=ce.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Oe(E,g,B){if(g.image.length!==6)return;let W=ct(E,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ce=n.get(Z);if(Z.version!==ce.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let he=st.getPrimaries(st.workingColorSpace),J=g.colorSpace===ti?null:st.getPrimaries(g.colorSpace),te=g.colorSpace===ti||he===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let fe=g.isCompressedTexture||g.image[0].isCompressedTexture,Ie=g.image[0]&&g.image[0].isDataTexture,ue=[];for(let ae=0;ae<6;ae++)!fe&&!Ie?ue[ae]=m(g.image[ae],!0,s.maxCubemapSize):ue[ae]=Ie?g.image[ae].image:g.image[ae],ue[ae]=At(g,ue[ae]);let pe=ue[0],Re=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type),He=y(g.internalFormat,Re,Ue,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,me=ce.__version===void 0||W===!0,ee=Z.dataReady,de=b(g,pe);it(i.TEXTURE_CUBE_MAP,g);let ve;if(fe){I&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,He,pe.width,pe.height);for(let ae=0;ae<6;ae++){ve=ue[ae].mipmaps;for(let De=0;De<ve.length;De++){let Ae=ve[De];g.format!==gn?Re!==null?I?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Ae.width,Ae.height,Re,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,He,Ae.width,Ae.height,0,Ae.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,Ae.width,Ae.height,Re,Ue,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,He,Ae.width,Ae.height,0,Re,Ue,Ae.data)}}}else{if(ve=g.mipmaps,I&&me){ve.length>0&&de++;let ae=ot(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,He,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ie){I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ue[ae].width,ue[ae].height,Re,Ue,ue[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,ue[ae].width,ue[ae].height,0,Re,Ue,ue[ae].data);for(let De=0;De<ve.length;De++){let ut=ve[De].image[ae].image;I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,ut.width,ut.height,Re,Ue,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,He,ut.width,ut.height,0,Re,Ue,ut.data)}}else{I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Re,Ue,ue[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,He,Re,Ue,ue[ae]);for(let De=0;De<ve.length;De++){let Ae=ve[De];I?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,Re,Ue,Ae.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,He,Re,Ue,Ae.image[ae])}}}u(g)&&M(i.TEXTURE_CUBE_MAP),ce.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ye(E,g,B,W,Z,ce){let he=r.convert(B.format,B.colorSpace),J=r.convert(B.type),te=y(B.internalFormat,he,J,B.normalized,B.colorSpace),fe=n.get(g),Ie=n.get(B);if(Ie.__renderTarget=g,!fe.__hasExternalTextures){let ue=Math.max(1,g.width>>ce),pe=Math.max(1,g.height>>ce);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ce,te,ue,pe,g.depth,0,he,J,null):t.texImage2D(Z,ce,te,ue,pe,0,he,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,Ie.__webglTexture,0,St(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,Ie.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(E,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){let W=g.depthTexture,Z=W&&W.isDepthTexture?W.type:null,ce=L(g.stencilBuffer,Z),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(g),ce,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let W=g.textures;for(let Z=0;Z<W.length;Z++){let ce=W[Z],he=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),te=y(ce.internalFormat,he,J,ce.normalized,ce.colorSpace);_t(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St(g),te,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,St(g),te,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,te,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(E,g,B){let W=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",T)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),it(i.TEXTURE_CUBE_MAP,g.depthTexture);let fe=r.convert(g.depthTexture.format),Ie=r.convert(g.depthTexture.type),ue;g.depthTexture.format===Fn?ue=i.DEPTH_COMPONENT24:g.depthTexture.format===Si&&(ue=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ue,g.width,g.height,0,fe,Ie,null)}}else oe(g.depthTexture,0);let ce=Z.__webglTexture,he=St(g),J=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,te=g.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Fn)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ce,0);else if(g.depthTexture.format===Si)_t(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,te,J,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Je(E){let g=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let W=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){let Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=W}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Tt(g.__webglFramebuffer[W],E,W);else{let W=E.texture.mipmaps;W&&W.length>0?Tt(g.__webglFramebuffer[0],E,0):Tt(g.__webglFramebuffer,E,0)}else if(B){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=i.createRenderbuffer(),Ve(g.__webglDepthbuffer[W],E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}else{let W=E.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ve(g.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(E,g,B){let W=n.get(E);g!==void 0&&ye(W.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Je(E)}function ht(E){let g=E.texture,B=n.get(E),W=n.get(g);E.addEventListener("dispose",_);let Z=E.textures,ce=E.isWebGLCubeRenderTarget===!0,he=Z.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=g.version,a.memory.textures++),ce){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let te=0;te<g.mipmaps.length;te++)B.__webglFramebuffer[J][te]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<g.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let J=0,te=Z.length;J<te;J++){let fe=n.get(Z[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&_t(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let te=Z[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let fe=r.convert(te.format,te.colorSpace),Ie=r.convert(te.type),ue=y(te.internalFormat,fe,Ie,te.normalized,te.colorSpace,E.isXRRenderTarget===!0),pe=St(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,ue,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,g);for(let J=0;J<6;J++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)ye(B.__webglFramebuffer[J][te],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,te);else ye(B.__webglFramebuffer[J],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);u(g)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let J=0,te=Z.length;J<te;J++){let fe=Z[J],Ie=n.get(fe),ue=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Ie.__webglTexture),it(ue,fe),ye(B.__webglFramebuffer,E,fe,i.COLOR_ATTACHMENT0+J,ue,0),u(fe)&&M(ue)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,W.__webglTexture),it(J,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)ye(B.__webglFramebuffer[te],E,g,i.COLOR_ATTACHMENT0,J,te);else ye(B.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,J,0);u(g)&&M(J),t.unbindTexture()}E.depthBuffer&&Je(E)}function Xe(E){let g=E.textures;for(let B=0,W=g.length;B<W;B++){let Z=g[B];if(u(Z)){let ce=A(E),he=n.get(Z).__webglTexture;t.bindTexture(ce,he),M(ce),t.unbindTexture()}}}let vt=[],Mt=[];function Ct(E){if(E.samples>0){if(_t(E)===!1){let g=E.textures,B=E.width,W=E.height,Z=i.COLOR_BUFFER_BIT,ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),J=g.length>1;if(J)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let te=E.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Ie=n.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Z,i.NEAREST),c===!0&&(vt.length=0,Mt.length=0,vt.push(i.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(vt.push(ce),Mt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Mt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Ie=n.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function St(E){return Math.min(s.maxSamples,E.samples)}function _t(E){let g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function D(E){let g=a.render.frame;d.get(E)!==g&&(d.set(E,g),E.update())}function At(E,g){let B=E.colorSpace,W=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Fs&&B!==ti&&(st.getTransfer(B)===gt?(W!==gn||Z!==an)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",B)),g}function ot(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=$,this.setTexture3D=ie,this.setTextureCube=re,this.rebindTextures=tt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $0(i,e){function t(n,s=ti){let r,a=st.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return i.BYTE;if(n===dl)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===ya)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Tn)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===gn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===_l)return i.RED;if(n===ba)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===La)return i.RG_INTEGER;if(n===wa)return i.RGBA_INTEGER;if(n===nr||n===ir||n===sr||n===rr)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ca||n===Ia||n===Pa||n===Da||n===Na||n===ar||n===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ca||n===Ia)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Da)return r.COMPRESSED_R11_EAC;if(n===Na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ar)return r.COMPRESSED_RG11_EAC;if(n===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ha)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ya)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Za)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ja)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qa||n===$a||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qa)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===eo||n===or||n===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var K0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
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

}`,Ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new un({vertexShader:K0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends On{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,p=null,h=null,f=null,x=null,S=typeof XRWebGLBinding<"u",m=new Ol,u={},M=t.getContextAttributes(),A=null,y=null,L=[],b=[],T=new $e,_=null,w=null,R=new zt;R.viewport=new Lt;let N=new zt;N.viewport=new Lt;let U=[R,N],G=new ga,P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=L[j];return ne===void 0&&(ne=new os,L[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=L[j];return ne===void 0&&(ne=new os,L[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=L[j];return ne===void 0&&(ne=new os,L[j]=ne),ne.getHandSpace()};function K(j){let ne=b.indexOf(j.inputSource);if(ne===-1)return;let Le=L[ne];Le!==void 0&&(Le.update(j.inputSource,j.frame,l||a),Le.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",oe);for(let j=0;j<L.length;j++){let ne=b[j];ne!==null&&(b[j]=null,L[j].disconnect(ne))}P=null,X=null,m.reset();for(let j in u)delete u[j];if(e.setRenderTarget(A),f=null,h=null,p=null,s=null,y=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),w!==null){let j=w.camera;j.fov=w.fov,j.zoom=w.zoom,j.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Oe=null,ye=null;M.depth&&(ye=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=M.stencil?Si:Fn,Oe=M.stencil?_s:wn);let Ve={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Ve),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new nn(h.textureWidth,h.textureHeight,{format:gn,type:an,depthTexture:new fi(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new nn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(j){for(let ne=0;ne<j.removed.length;ne++){let Le=j.removed[ne],Oe=b.indexOf(Le);Oe>=0&&(b[Oe]=null,L[Oe].disconnect(Le))}for(let ne=0;ne<j.added.length;ne++){let Le=j.added[ne],Oe=b.indexOf(Le);if(Oe===-1){for(let Ve=0;Ve<L.length;Ve++)if(Ve>=b.length){b.push(Le),Oe=Ve;break}else if(b[Ve]===null){b[Ve]=Le,Oe=Ve;break}if(Oe===-1)break}let ye=L[Oe];ye&&ye.connect(Le)}}let $=new O,ie=new O;function re(j,ne,Le){$.setFromMatrixPosition(ne.matrixWorld),ie.setFromMatrixPosition(Le.matrixWorld);let Oe=$.distanceTo(ie),ye=ne.projectionMatrix.elements,Ve=Le.projectionMatrix.elements,Tt=ye[14]/(ye[10]-1),Je=ye[14]/(ye[10]+1),tt=(ye[9]+1)/ye[5],ht=(ye[9]-1)/ye[5],Xe=(ye[8]-1)/ye[0],vt=(Ve[8]+1)/Ve[0],Mt=Tt*Xe,Ct=Tt*vt,St=Oe/(-Xe+vt),_t=St*-Xe;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(_t),j.translateZ(St),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let D=Tt+St,At=Je+St,ot=Mt-_t,E=Ct+(Oe-_t),g=tt*Je/At*D,B=ht*Je/At*D;j.projectionMatrix.makePerspective(ot,E,g,B,D,At),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ne(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ne=j.near,Le=j.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),G.near=N.near=R.near=ne,G.far=N.far=R.far=Le,(P!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,X=G.far),G.layers.mask=j.layers.mask|6,R.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let Oe=j.parent,ye=G.cameras;Ne(G,Oe);for(let Ve=0;Ve<ye.length;Ve++)Ne(ye[Ve],Oe);ye.length===2?re(G,R,N):G.projectionMatrix.copy(R.projectionMatrix),w===null&&j.isPerspectiveCamera&&(w={camera:j,fov:j.fov,zoom:j.zoom}),Pe(j,G,Oe)};function Pe(j,ne,Le){Le===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(Le.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return u[j]};let mt=null;function it(j,ne){if(d=ne.getViewerPose(l||a),x=ne,d!==null){let Le=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;Le.length!==G.cameras.length&&(G.cameras.length=0,Oe=!0);for(let Je=0;Je<Le.length;Je++){let tt=Le[Je],ht=null;if(f!==null)ht=f.getViewport(tt);else{let vt=p.getViewSubImage(h,tt);ht=vt.viewport,Je===0&&(e.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(y))}let Xe=U[Je];Xe===void 0&&(Xe=new zt,Xe.layers.enable(Je),Xe.viewport=new Lt,U[Je]=Xe),Xe.matrix.fromArray(tt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(tt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Je===0&&(G.matrix.copy(Xe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Oe===!0&&G.cameras.push(Xe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Je=p.getDepthInformation(Le[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,s.renderState)}if(ye&&ye.includes("camera-access")&&S){e.state.unbindTexture(),p=n.getBinding();for(let Je=0;Je<Le.length;Je++){let tt=Le[Je].camera;if(tt){let ht=u[tt];ht||(ht=new Xs,u[tt]=ht);let Xe=p.getCameraImage(tt);ht.sourceTexture=Xe}}}}for(let Le=0;Le<L.length;Le++){let Oe=b[Le],ye=L[Le];Oe!==null&&ye!==void 0&&ye.update(Oe,ne,l||a)}mt&&mt(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),x=null}let ct=new bh;ct.setAnimationLoop(it),this.setAnimationLoop=function(j){mt=j},this.dispose=function(){}}},em=new Et,Rh=new Ge;Rh.set(-1,0,0,0,1,0,0,0,1);function tm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,yl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,A,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&f(m,u,y)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,M,A):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===$t&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===$t&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let M=e.get(u),A=M.envMap,y=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rh),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,M,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=A*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$t&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let M=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nm(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,L){let b=L.program;n.uniformBlockBinding(y,b)}function l(y,L){let b=s[y.id];b===void 0&&(m(y),b=d(y),s[y.id]=b,y.addEventListener("dispose",M));let T=L.program;n.updateUBOMapping(y,T);let _=e.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function d(y){let L=p();y.__bindingPointIndex=L;let b=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,b),b}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let L=s[y.id],b=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let _=0,w=b.length;_<w;_++){let R=b[_];if(Array.isArray(R))for(let N=0,U=R.length;N<U;N++)f(R[N],_,N,T);else f(R,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,L,b,T){if(S(y,L,b,T)===!0){let _=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let U=w[N],G=u(U);x(U,y.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(w,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function x(y,L,b){typeof y=="number"||typeof y=="boolean"?L[0]=y:y.isMatrix3?(L[0]=y.elements[0],L[1]=y.elements[1],L[2]=y.elements[2],L[3]=0,L[4]=y.elements[3],L[5]=y.elements[4],L[6]=y.elements[5],L[7]=0,L[8]=y.elements[6],L[9]=y.elements[7],L[10]=y.elements[8],L[11]=0):ArrayBuffer.isView(y)?L.set(new y.constructor(y.buffer,y.byteOffset,L.length)):y.toArray(L,b)}function S(y,L,b,T){let _=y.value,w=L+"_"+b;if(T[w]===void 0)return typeof _=="number"||typeof _=="boolean"?T[w]=_:ArrayBuffer.isView(_)?T[w]=_.slice():T[w]=_.clone(),!0;{let R=T[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return T[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(y){let L=y.uniforms,b=0,T=16;for(let w=0,R=L.length;w<R;w++){let N=Array.isArray(L[w])?L[w]:[L[w]];for(let U=0,G=N.length;U<G;U++){let P=N[U],X=Array.isArray(P.value)?P.value:[P.value];for(let K=0,Q=X.length;K<Q;K++){let oe=X[K],$=u(oe),ie=b%T,re=ie%$.boundary,Ne=ie+re;b+=re,Ne!==0&&T-Ne<$.storage&&(b+=T-Ne),P.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=$.storage}}}let _=b%T;return _>0&&(b+=T-_),y.__size=b,y.__cache={},this}function u(y){let L={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(L.boundary=4,L.storage=4):y.isVector2?(L.boundary=8,L.storage=8):y.isVector3||y.isColor?(L.boundary=16,L.storage=12):y.isVector4?(L.boundary=16,L.storage=16):y.isMatrix3?(L.boundary=48,L.storage=48):y.isMatrix4?(L.boundary=64,L.storage=64):y.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(L.boundary=16,L.storage=y.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",y),L}function M(y){let L=y.target;L.removeEventListener("dispose",M);let b=a.indexOf(L.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function A(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var im=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function sm(){return zn===null&&(zn=new jr(im,16,16,bi,Tn),zn.name="DFG_LUT",zn.minFilter=Vt,zn.magFilter=Vt,zn.wrapS=Un,zn.wrapT=Un,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var co=class{constructor(e={}){let{canvas:t=Zc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=an}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=f,m=new Set([wa,La,ba]),u=new Set([an,wn,gs,_s,Ma,Sa]),M=new Uint32Array(4),A=new Int32Array(4),y=new O,L=null,b=null,T=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,U=null,G=null,P=null,X=null;this._outputColorSpace=Ot;let K=0,Q=0,oe=null,$=-1,ie=null,re=new Lt,Ne=new Lt,Pe=null,mt=new Ye(0),it=0,ct=t.width,j=t.height,ne=1,Le=null,Oe=null,ye=new Lt(0,0,ct,j),Ve=new Lt(0,0,ct,j),Tt=!1,Je=new cs,tt=!1,ht=!1,Xe=new Et,vt=new O,Mt=new Lt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function _t(){return oe===null?ne:1}let D=n;function At(v,C){return t.getContext(v,C)}let ot,E,g,B,W,Z,ce,he,J,te,fe,Ie,ue,pe,Re,Ue,He,I,me,ee,de,ve,ae;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),D===null){let C="webgl2";if(D=At(C,v),D===null)throw At(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),ze("WebGLRenderer: "+v.message),v}function De(){ot=new up(D),ot.init(),de=new $0(D,ot),E=new tp(D,ot,e,de),g=new J0(D,ot),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),G=D.createFramebuffer(),P=D.createFramebuffer(),X=D.createFramebuffer(),B=new pp(D),W=new U0,Z=new Q0(D,ot,g,W,E,de,B),ce=new hp(R),he=new mu(D),ve=new jf(D,he),J=new dp(D,he,B,ve),te=new gp(D,J,he,ve,B),I=new mp(D,E,Z),Re=new np(W),fe=new N0(R,ce,ot,E,ve,Re),Ie=new tm(R,W),ue=new O0,pe=new G0(ot),He=new Kf(R,ce,g,te,x,c),Ue=new Z0(R,te,E),ae=new nm(D,B,E,g),me=new ep(D,ot,B),ee=new fp(D,ot,B),B.programs=fe.programs,R.capabilities=E,R.extensions=ot,R.properties=W,R.renderLists=ue,R.shadowMap=Ue,R.state=g,R.info=B}S!==an&&(w=new xp(S,t.width,t.height,o,s,r));let Ae=new Bl(R,D);this.xr=Ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=ot.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ot.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(v){v!==void 0&&(ne=v,this.setSize(ct,j,!1))},this.getSize=function(v){return v.set(ct,j)},this.setSize=function(v,C,k=!0){if(Ae.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=v,j=C,t.width=Math.floor(v*ne),t.height=Math.floor(C*ne),k===!0&&(t.style.width=v+"px",t.style.height=C+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(ct*ne,j*ne).floor()},this.setDrawingBufferSize=function(v,C,k){ct=v,j=C,ne=k,t.width=Math.floor(v*k),t.height=Math.floor(C*k),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(S===an){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(re)},this.getViewport=function(v){return v.copy(ye)},this.setViewport=function(v,C,k,V){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,C,k,V),g.viewport(re.copy(ye).multiplyScalar(ne).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,C,k,V){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,C,k,V),g.scissor(Ne.copy(Ve).multiplyScalar(ne).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(v){g.setScissorTest(Tt=v)},this.setOpaqueSort=function(v){Le=v},this.setTransparentSort=function(v){Oe=v},this.getClearColor=function(v){return v.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,k=!0){let V=0;if(v){let z=!1;if(oe!==null){let _e=oe.texture.format;z=m.has(_e)}if(z){let _e=oe.texture.type,be=u.has(_e),ge=He.getClearColor(),Se=He.getClearAlpha(),we=ge.r,We=ge.g,je=ge.b;be?(M[0]=we,M[1]=We,M[2]=je,M[3]=Se,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=we,A[1]=We,A[2]=je,A[3]=Se,D.clearBufferiv(D.COLOR,0,A))}else V|=D.COLOR_BUFFER_BIT}C&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),He.dispose(),ue.dispose(),pe.dispose(),W.dispose(),ce.dispose(),te.dispose(),ve.dispose(),ae.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",bs),Ae.removeEventListener("sessionend",Cn),Gn.stop()};function ut(v){v.preventDefault(),vl("WebGLRenderer: Context Lost."),N=!0}function nt(){vl("WebGLRenderer: Context Restored."),N=!1;let v=B.autoReset,C=Ue.enabled,k=Ue.autoUpdate,V=Ue.needsUpdate,z=Ue.type;De(),B.autoReset=v,Ue.enabled=C,Ue.autoUpdate=k,Ue.needsUpdate=V,Ue.type=z}function Pt(v){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function kt(v){let C=v.target;C.removeEventListener("dispose",kt),po(C)}function po(v){Zt(v),W.remove(v)}function Zt(v){let C=W.get(v).programs;C!==void 0&&(C.forEach(function(k){fe.releaseProgram(k)}),v.isShaderMaterial&&fe.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,k,V,z,_e){C===null&&(C=Ct);let be=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=Qe(v,C,k,V,z);g.setMaterial(V,be);let Se=k.index,we=1;if(V.wireframe===!0){if(Se=J.getWireframeAttribute(k),Se===void 0)return;we=2}let We=k.drawRange,je=k.attributes.position,Ee=We.start*we,dt=(We.start+We.count)*we;_e!==null&&(Ee=Math.max(Ee,_e.start*we),dt=Math.min(dt,(_e.start+_e.count)*we)),Se!==null?(Ee=Math.max(Ee,0),dt=Math.min(dt,Se.count)):je!=null&&(Ee=Math.max(Ee,0),dt=Math.min(dt,je.count));let wt=dt-Ee;if(wt<0||wt===1/0)return;ve.setup(z,V,ge,k,Se);let F,q=me;if(Se!==null&&(F=he.get(Se),q=ee,q.setIndex(F)),z.isMesh)V.wireframe===!0?(g.setLineWidth(V.wireframeLinewidth*_t()),q.setMode(D.LINES)):q.setMode(D.TRIANGLES);else if(z.isLine){let se=V.linewidth;se===void 0&&(se=1),g.setLineWidth(se*_t()),z.isLineSegments?q.setMode(D.LINES):z.isLineLoop?q.setMode(D.LINE_LOOP):q.setMode(D.LINE_STRIP)}else z.isPoints?q.setMode(D.POINTS):z.isSprite&&q.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))q.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let se=z._multiDrawStarts,Y=z._multiDrawCounts,H=z._multiDrawCount,le=Se?he.get(Se).bytesPerElement:1,Ce=W.get(V).currentProgram.getUniforms();for(let Te=0;Te<H;Te++)Ce.setValue(D,"_gl_DrawID",Te),q.render(se[Te]/le,Y[Te])}else if(z.isInstancedMesh)q.renderInstances(Ee,wt,z.count);else if(k.isInstancedBufferGeometry){let se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Y=Math.min(k.instanceCount,se);q.renderInstances(Ee,wt,Y)}else q.render(Ee,wt)};function Rn(v,C,k,V){U!==null&&v.isNodeMaterial&&U.setObject(V,v),tt===!0&&Re.setState(v,k,!1),v.transparent===!0&&v.side===rn&&v.forceSinglePass===!1?(v.side=$t,v.needsUpdate=!0,Xn(v,C,V),v.side=vi,v.needsUpdate=!0,Xn(v,C,V),v.side=rn):Xn(v,C,V)}this.compile=function(v,C,k=null){k===null&&(k=v),U!==null&&U.renderStart(v,C,k),b=pe.get(k),b.init(C),_.push(b),k.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),v!==k&&v.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),ht=this.localClippingEnabled,tt=Re.init(this.clippingPlanes,ht),tt===!0&&Re.setGlobalState(this.clippingPlanes,C),U!==null&&Ue.render(b.state.shadowsArray,k,C);let V=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let _e=z.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){let ge=_e[be];Rn(ge,k,C,z),V.add(ge)}else Rn(_e,k,C,z),V.add(_e)}),b=_.pop(),U!==null&&U.renderEnd(),V},this.compileAsync=function(v,C,k=null){let V=this.compile(v,C,k);return new Promise(z=>{function _e(){if(V.forEach(function(be){let Se=W.get(be).currentProgram;(Se===void 0||Se.isReady())&&V.delete(be)}),V.size===0){z(v);return}setTimeout(_e,10)}ot.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Hn=null;function ki(v){Hn&&Hn(v)}function bs(){Gn.stop()}function Cn(){Gn.start()}let Gn=new bh;Gn.setAnimationLoop(ki),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(v){Hn=v,Ae.setAnimationLoop(v),v===null?Gn.stop():Gn.start()},Ae.addEventListener("sessionstart",bs),Ae.addEventListener("sessionend",Cn),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(v,C);let k=Ae.enabled===!0&&Ae.isPresenting===!0,V=w!==null&&(oe===null||k)&&w.begin(R,oe);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(C),C=Ae.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,C,oe),b=pe.get(v,_.length),b.init(C),b.state.textureUnits=Z.getTextureUnits(),_.push(b),Xe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Je.setFromProjectionMatrix(Xe,bn,C.reversedDepth),ht=this.localClippingEnabled,tt=Re.init(this.clippingPlanes,ht),L=ue.get(v,T.length),L.init(),T.push(L),Ae.enabled===!0&&Ae.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&ni(be,C,-1/0,R.sortObjects)}ni(v,C,0,R.sortObjects),L.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&L.sort(Le,Oe),St=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,St&&He.addToRenderList(L,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&Re.beginShadows();let z=b.state.shadowsArray;if(Ue.render(z,v,C),tt===!0&&Re.endShadows(),(V&&w.hasRenderPass())===!1){let be=L.opaque,ge=L.transmissive;if(b.setupLights(),C.isArrayCamera){let Se=C.cameras;if(ge.length>0)for(let we=0,We=Se.length;we<We;we++){let je=Se[we];Ls(be,ge,v,je)}St&&He.render(v);for(let we=0,We=Se.length;we<We;we++){let je=Se[we];Li(L,v,je,je.viewport)}}else ge.length>0&&Ls(be,ge,v,C),St&&He.render(v),Li(L,v,C)}oe!==null&&Q===0&&(Z.updateMultisampleRenderTarget(oe),Z.updateRenderTargetMipmap(oe)),V&&w.end(R),v.isScene===!0&&v.onAfterRender(R,v,C),ve.resetDefaultState(),$=-1,ie=null,_.pop(),_.length>0?(b=_[_.length-1],Z.setTextureUnits(b.state.textureUnits),tt===!0&&Re.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,T.pop(),T.length>0?L=T[T.length-1]:L=null,U!==null&&U.renderEnd()};function ni(v,C,k,V){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Je)){V&&Mt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Xe);let be=te.update(v),ge=v.material;ge.visible&&L.push(v,be,ge,k,Mt.z,null,C)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Je))){let be=te.update(v),ge=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Mt.copy(v.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Mt.copy(be.boundingSphere.center)),Mt.applyMatrix4(v.matrixWorld).applyMatrix4(Xe)),Array.isArray(ge)){let Se=be.groups;for(let we=0,We=Se.length;we<We;we++){let je=Se[we],Ee=ge[je.materialIndex];Ee&&Ee.visible&&L.push(v,be,Ee,k,Mt.z,je,C)}}else ge.visible&&L.push(v,be,ge,k,Mt.z,null,C)}}let _e=v.children;for(let be=0,ge=_e.length;be<ge;be++)ni(_e[be],C,k,V)}function Li(v,C,k,V){let{opaque:z,transmissive:_e,transparent:be}=v;b.setupLightsView(k),tt===!0&&Re.setGlobalState(R.clippingPlanes,k),V&&g.viewport(re.copy(V)),z.length>0&&Wn(z,C,k),_e.length>0&&Wn(_e,C,k),be.length>0&&Wn(be,C,k),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ls(v,C,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let Ee=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new nn(1,1,{generateMipmaps:!0,type:Ee?Tn:an,minFilter:Mi,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let _e=b.state.transmissionRenderTarget[V.id],be=V.viewport||re;_e.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let ge=R.getRenderTarget(),Se=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(_e),R.getClearColor(mt),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),St&&He.render(k);let We=R.toneMapping;R.toneMapping=Ln;let je=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),tt===!0&&Re.setGlobalState(R.clippingPlanes,V),Wn(v,k,V),Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let dt=0,wt=C.length;dt<wt;dt++){let F=C[dt],{object:q,geometry:se,material:Y,group:H}=F;if(Y.side===rn&&q.layers.test(V.layers)){let le=Y.side;Y.side=$t,Y.needsUpdate=!0,Kt(q,k,V,se,Y,H),Y.side=le,Y.needsUpdate=!0,Ee=!0}}Ee===!0&&(Z.updateMultisampleRenderTarget(_e),Z.updateRenderTargetMipmap(_e))}R.setRenderTarget(ge,Se,we),R.setClearColor(mt,it),je!==void 0&&(V.viewport=je),R.toneMapping=We}function Wn(v,C,k){let V=C.isScene===!0?C.overrideMaterial:null;for(let z=0,_e=v.length;z<_e;z++){let be=v[z],{object:ge,geometry:Se,group:we}=be,We=be.material;We.allowOverride===!0&&V!==null&&(We=V),ge.layers.test(k.layers)&&Kt(ge,C,k,Se,We,we)}}function Kt(v,C,k,V,z,_e){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(R,C,k,V,z,_e),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(R,C,k,V,v,_e),z.transparent===!0&&z.side===rn&&z.forceSinglePass===!1?(z.side=$t,z.needsUpdate=!0,R.renderBufferDirect(k,C,V,z,v,_e),z.side=vi,z.needsUpdate=!0,R.renderBufferDirect(k,C,V,z,v,_e),z.side=rn):R.renderBufferDirect(k,C,V,z,v,_e),v.onAfterRender(R,C,k,V,z,_e)}function Xn(v,C,k){C.isScene!==!0&&(C=Ct);let V=W.get(v),z=b.state.lights,_e=b.state.shadowsArray,be=z.state.version,ge=fe.getParameters(v,z.state,_e,C,k,b.state.lightProbeGridArray),Se=fe.getProgramCacheKey(ge),we=V.programs;V.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,V.fog=C.fog;let We=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;V.envMap=ce.get(v.envMap||V.environment,We),V.envMapRotation=V.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",kt),we=new Map,V.programs=we);let je=we.get(Se);if(je!==void 0){if(V.currentProgram===je&&V.lightsStateVersion===be)return fr(v,ge),je}else ge.uniforms=fe.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,k,ge),v.onBeforeCompile(ge,R),je=fe.acquireProgram(ge,Se),we.set(Se,je),V.uniforms=ge.uniforms;let Ee=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=Re.uniform),fr(v,ge),V.needsLights=jt(v),V.lightsStateVersion=be,V.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.sunLights.value=z.state.sun,Ee.sunLightShadows.value=z.state.sunShadow,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.sunShadowMatrix.value=z.state.sunShadowMatrix,Ee.sunShadowCascade.value=z.state.sunShadowCascade,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=je,V.uniformsList=null,je}function ii(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=ys.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function fr(v,C){let k=W.get(v);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.batchingColor=C.batchingColor,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function xn(v,C){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(C.matrixWorld);for(let k=0,V=v.length;k<V;k++){let z=v[k];if(z.texture!==null&&z.boundingBox.containsPoint(y))return z}return null}function Qe(v,C,k,V,z){C.isScene!==!0&&(C=Ct),Z.resetTextureUnits();let _e=C.fog,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?C.environment:null,ge=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:st.workingColorSpace,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=ce.get(V.envMap||be,Se),We=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,je=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,wt=!!k.morphAttributes.color,F=Ln;V.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(F=R.toneMapping);let q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=q!==void 0?q.length:0,Y=W.get(V),H=b.state.lights;if(tt===!0&&(ht===!0||v!==ie)){let et=v===ie&&V.id===$;Re.setState(V,v,et)}let le=!1;V.version===Y.__version?(Y.needsLights&&Y.lightsStateVersion!==H.state.version||Y.outputColorSpace!==ge||z.isBatchedMesh&&Y.batching===!1||!z.isBatchedMesh&&Y.batching===!0||z.isBatchedMesh&&Y.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Y.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Y.instancing===!1||!z.isInstancedMesh&&Y.instancing===!0||z.isSkinnedMesh&&Y.skinning===!1||!z.isSkinnedMesh&&Y.skinning===!0||z.isInstancedMesh&&Y.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Y.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Y.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Y.instancingMorph===!1&&z.morphTexture!==null||Y.envMap!==we||V.fog===!0&&Y.fog!==_e||Y.numClippingPlanes!==void 0&&(Y.numClippingPlanes!==Re.numPlanes||Y.numIntersection!==Re.numIntersection)||Y.vertexAlphas!==We||Y.vertexTangents!==je||Y.morphTargets!==Ee||Y.morphNormals!==dt||Y.morphColors!==wt||Y.toneMapping!==F||Y.morphTargetsCount!==se||!!Y.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Y.__version=V.version);let Ce=Y.currentProgram;le===!0&&(Ce=Xn(V,C,z),U&&V.isNodeMaterial&&U.onUpdateProgram(V,Ce,Y));let Te=!1,Me=!1,qe=!1,Fe=Ce.getUniforms(),lt=Y.uniforms;if(g.useProgram(Ce.program)&&(Te=!0,Me=!0,qe=!0),V.id!==$&&($=V.id,Me=!0),Y.needsLights){let et=xn(b.state.lightProbeGridArray,z);Y.lightProbeGrid!==et&&(Y.lightProbeGrid=et,Me=!0)}if(Te||ie!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Fe.setValue(D,"projectionMatrix",v.projectionMatrix),Fe.setValue(D,"viewMatrix",v.matrixWorldInverse);let Dt=Fe.map.cameraPosition;Dt!==void 0&&Dt.setValue(D,vt.setFromMatrixPosition(v.matrixWorld)),E.logarithmicDepthBuffer&&Fe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Fe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),ie!==v&&(ie=v,Me=!0,qe=!0)}if(Y.needsLights&&(H.state.sunShadowMap.length>0&&Fe.setValue(D,"sunShadowMap",H.state.sunShadowMap,Z),H.state.directionalShadowMap.length>0&&Fe.setValue(D,"directionalShadowMap",H.state.directionalShadowMap,Z),H.state.spotShadowMap.length>0&&Fe.setValue(D,"spotShadowMap",H.state.spotShadowMap,Z),H.state.pointShadowMap.length>0&&Fe.setValue(D,"pointShadowMap",H.state.pointShadowMap,Z)),z.isSkinnedMesh){Fe.setOptional(D,z,"bindMatrix"),Fe.setOptional(D,z,"bindMatrixInverse");let et=z.skeleton;et&&(et.boneTexture===null&&et.computeBoneTexture(),Fe.setValue(D,"boneTexture",et.boneTexture,Z))}z.isBatchedMesh&&(Fe.setOptional(D,z,"batchingTexture"),Fe.setValue(D,"batchingTexture",z._matricesTexture,Z),Fe.setOptional(D,z,"batchingIdTexture"),Fe.setValue(D,"batchingIdTexture",z._indirectTexture,Z),Fe.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Fe.setValue(D,"batchingColorTexture",z._colorsTexture,Z));let en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&I.update(z,k,Ce),(Me||Y.receiveShadow!==z.receiveShadow)&&(Y.receiveShadow=z.receiveShadow,Fe.setValue(D,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&C.environment!==null&&(lt.envMapIntensity.value=C.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=sm()),Me){if(Fe.setValue(D,"toneMappingExposure",R.toneMappingExposure),Y.needsLights&&ws(lt,qe),_e&&V.fog===!0&&Ie.refreshFogUniforms(lt,_e),Ie.refreshMaterialUniforms(lt,V,ne,j,b.state.transmissionRenderTarget[v.id]),Y.needsLights&&Y.lightProbeGrid){let et=Y.lightProbeGrid;lt.probesSH.value=et.texture,lt.probesMin.value.copy(et.boundingBox.min),lt.probesMax.value.copy(et.boundingBox.max),lt.probesResolution.value.copy(et.resolution)}ys.upload(D,ii(Y),lt,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ys.upload(D,ii(Y),lt,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Fe.setValue(D,"center",z.center),Fe.setValue(D,"modelViewMatrix",z.modelViewMatrix),Fe.setValue(D,"normalMatrix",z.normalMatrix),Fe.setValue(D,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){let et=V.uniformsGroups;for(let Dt=0,In=et.length;Dt<In;Dt++){let on=et[Dt];ae.update(on,Ce),ae.bind(on,Ce)}}return Ce}function ws(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function jt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(v,C,k){let V=W.get(v);V.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(v.texture).__webglTexture=C,W.get(v.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let k=W.get(v);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,k=0){oe=v,K=C,Q=k;let V=null,z=!1,_e=!1;if(v){let ge=W.get(v);if(ge.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),re.copy(v.viewport),Ne.copy(v.scissor),Pe=v.scissorTest,g.viewport(re),g.scissor(Ne),g.setScissorTest(Pe),$=-1;return}else if(ge.__webglFramebuffer===void 0)Z.setupRenderTarget(v);else if(ge.__hasExternalTextures)Z.rebindTextures(v,W.get(v.texture).__webglTexture,W.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let We=v.depthTexture;if(ge.__boundDepthTexture!==We){if(We!==null&&W.has(We)&&(v.width!==We.image.width||v.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(v)}}let Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(_e=!0);let we=W.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[C])?V=we[C][k]:V=we[C],z=!0):v.samples>0&&Z.useMultisampledRTT(v)===!1?V=W.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[k]:V=we,re.copy(v.viewport),Ne.copy(v.scissor),Pe=v.scissorTest}else re.copy(ye).multiplyScalar(ne).floor(),Ne.copy(Ve).multiplyScalar(ne).floor(),Pe=Tt;if(k!==0&&(V=G),g.bindFramebuffer(D.FRAMEBUFFER,V)&&g.drawBuffers(v,V),g.viewport(re),g.scissor(Ne),g.setScissorTest(Pe),z){let ge=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge.__webglTexture,k)}else if(_e){let ge=C;for(let Se=0;Se<v.textures.length;Se++){let we=W.get(v.textures[Se]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Se,we.__webglTexture,k,ge)}}else if(v!==null&&k!==0){let ge=W.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,k)}$=-1};function Es(v){let C=W.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=E.textureFormatReadable(v.format),C.__typeReadable=E.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,k,V,z,_e,be,ge=0){if(!(v&&v.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){g.bindFramebuffer(D.FRAMEBUFFER,Se);try{let we=v.textures[ge],We=we.format,je=we.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge);let Ee=Es(we);if(Ee.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-V&&k>=0&&k<=v.height-z&&D.readPixels(C,k,V,z,de.convert(We),de.convert(je),_e)}finally{let we=oe!==null?W.get(oe).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,C,k,V,z,_e,be,ge=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se)if(C>=0&&C<=v.width-V&&k>=0&&k<=v.height-z){g.bindFramebuffer(D.FRAMEBUFFER,Se);let we=v.textures[ge],We=we.format,je=we.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge);let Ee=Es(we);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,_e.byteLength,D.STREAM_READ),D.readPixels(C,k,V,z,de.convert(We),de.convert(je),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let wt=oe!==null?W.get(oe).__webglFramebuffer:null;g.bindFramebuffer(D.FRAMEBUFFER,wt);let F=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Qc(D,F,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,_e),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(dt),D.deleteSync(F),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,k=0){let V=Math.pow(2,-k),z=Math.floor(v.image.width*V),_e=Math.floor(v.image.height*V),be=C!==null?C.x:0,ge=C!==null?C.y:0;Z.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,be,ge,z,_e),g.unbindTexture()},this.copyTextureToTexture=function(v,C,k=null,V=null,z=0,_e=0){let be,ge,Se,we,We,je,Ee,dt,wt,F=v.isCompressedTexture?v.mipmaps[_e]:v.image;if(k!==null)be=k.max.x-k.min.x,ge=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,We=k.min.y,je=k.isBox3?k.min.z:0;else{let lt=Math.pow(2,-z);be=Math.floor(F.width*lt),ge=Math.floor(F.height*lt),v.isDataArrayTexture?Se=F.depth:v.isData3DTexture?Se=Math.floor(F.depth*lt):Se=1,we=0,We=0,je=0}V!==null?(Ee=V.x,dt=V.y,wt=V.z):(Ee=0,dt=0,wt=0);let q=de.convert(C.format),se=de.convert(C.type),Y;C.isData3DTexture?(Z.setTexture3D(C,0),Y=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Z.setTexture2DArray(C,0),Y=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(C,0),Y=D.TEXTURE_2D),g.activeTexture(D.TEXTURE0),g.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);let H=g.getParameter(D.UNPACK_ROW_LENGTH),le=g.getParameter(D.UNPACK_IMAGE_HEIGHT),Ce=g.getParameter(D.UNPACK_SKIP_PIXELS),Te=g.getParameter(D.UNPACK_SKIP_ROWS),Me=g.getParameter(D.UNPACK_SKIP_IMAGES);g.pixelStorei(D.UNPACK_ROW_LENGTH,F.width),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,F.height),g.pixelStorei(D.UNPACK_SKIP_PIXELS,we),g.pixelStorei(D.UNPACK_SKIP_ROWS,We),g.pixelStorei(D.UNPACK_SKIP_IMAGES,je);let qe=v.isDataArrayTexture||v.isData3DTexture,Fe=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let lt=W.get(v),en=W.get(C),et=W.get(lt.__renderTarget),Dt=W.get(en.__renderTarget);g.bindFramebuffer(D.READ_FRAMEBUFFER,et.__webglFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let In=0;In<Se;In++)qe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(v).__webglTexture,z,je+In),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(C).__webglTexture,_e,wt+In)),D.blitFramebuffer(we,We,be,ge,Ee,dt,be,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||W.has(v)){let lt=W.get(v),en=W.get(C);g.bindFramebuffer(D.READ_FRAMEBUFFER,P),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,X);for(let et=0;et<Se;et++)qe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,lt.__webglTexture,z,je+et):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,lt.__webglTexture,z),Fe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,_e,wt+et):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,_e),z!==0?D.blitFramebuffer(we,We,be,ge,Ee,dt,be,ge,D.COLOR_BUFFER_BIT,D.NEAREST):Fe?D.copyTexSubImage3D(Y,_e,Ee,dt,wt+et,we,We,be,ge):D.copyTexSubImage2D(Y,_e,Ee,dt,we,We,be,ge);g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Fe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Y,_e,Ee,dt,wt,be,ge,Se,q,se,F.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Y,_e,Ee,dt,wt,be,ge,Se,q,F.data):D.texSubImage3D(Y,_e,Ee,dt,wt,be,ge,Se,q,se,F):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,_e,Ee,dt,be,ge,q,se,F.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,_e,Ee,dt,F.width,F.height,q,F.data):D.texSubImage2D(D.TEXTURE_2D,_e,Ee,dt,be,ge,q,se,F);g.pixelStorei(D.UNPACK_ROW_LENGTH,H),g.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),g.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),g.pixelStorei(D.UNPACK_SKIP_ROWS,Te),g.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),_e===0&&C.generateMipmaps&&D.generateMipmap(Y),g.unbindTexture()},this.initRenderTarget=function(v){W.get(v).__webglFramebuffer===void 0&&Z.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Z.setTextureCube(v,0):v.isData3DTexture?Z.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Z.setTexture2DArray(v,0):Z.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){K=0,Q=0,oe=null,g.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var dr=new O;function _n(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;dr.copy(e),dr[n]=0,dr.normalize();let l=.5*a/(a+o),d=1-dr.angleTo(i)/c;return Math.sign(dr[t])===1?d*l:o/(a+o)+l+l*(1-d)}var fo=class i extends pi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new O,l=new O,d=new O(e,t,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,x=p.length/6,S=new O,m=.5/a;for(let u=0,M=0;u<p.length;u+=3,M+=2)switch(c.fromArray(p,u),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[u+0]=d.x*Math.sign(c.x)+l.x*r,p[u+1]=d.y*Math.sign(c.y)+l.y*r,p[u+2]=d.z*Math.sign(c.z)+l.z*r,h[u+0]=l.x,h[u+1]=l.y,h[u+2]=l.z,Math.floor(u/x)){case 0:S.set(1,0,0),f[M+0]=_n(S,l,"z","y",r,n),f[M+1]=1-_n(S,l,"y","z",r,t);break;case 1:S.set(-1,0,0),f[M+0]=1-_n(S,l,"z","y",r,n),f[M+1]=1-_n(S,l,"y","z",r,t);break;case 2:S.set(0,1,0),f[M+0]=1-_n(S,l,"x","z",r,e),f[M+1]=_n(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),f[M+0]=1-_n(S,l,"x","z",r,e),f[M+1]=1-_n(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),f[M+0]=1-_n(S,l,"x","y",r,e),f[M+1]=1-_n(S,l,"y","x",r,t);break;case 5:S.set(0,0,-1),f[M+0]=_n(S,l,"x","y",r,e),f[M+1]=1-_n(S,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Ch={nope:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,52,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,52,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 49.3 L42.7 46.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 49.3 l-6 -5 M19.0 48.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,52,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,52,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.3 46.7 L144.3 44.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.3 44.7 l6 -5 M140.3 43.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 28.8 L16.8 26.7 L19.1 24.9 L21.4 23.4 L23.7 22.1 L26.0 21.2 L28.3 20.6 L30.7 20.3 L33.1 20.2 L35.5 20.5 L38.0 21.1 L40.6 22.0 L43.2 23.3 L44.8 20.7 L42.1 19.0 L39.3 17.6 L36.5 16.5 L33.6 15.8 L30.7 15.4 L27.7 15.4 L24.7 15.8 L21.6 16.5 L18.6 17.6 L15.5 19.1 L12.5 21.0 L9.5 23.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.7 33.7 L119.2 33.1 L121.8 32.5 L124.3 32.0 L126.9 31.5 L129.5 31.2 L132.1 30.9 L134.7 30.6 L137.3 30.5 L139.9 30.4 L142.5 30.3 L145.2 30.4 L147.8 30.5 L148.2 27.5 L145.5 27.0 L142.8 26.6 L140.1 26.3 L137.4 26.0 L134.7 25.8 L131.9 25.6 L129.2 25.6 L126.4 25.6 L123.7 25.6 L120.9 25.8 L118.1 26.0 L115.3 26.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M62 88 Q82 98 102 83",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M100 80 Q106 82 104 88",s:"#17120f",w:2.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M162 14 Q170 4 180 2 M196 4 Q204 10 206 18",s:"#fff",w:3,lc:"round"}],point:[{k:"e",g:[29,50,14,19],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.6 Q29 70 40 56.6",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[31,50,7,7],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[31,50,4.3,4.3],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[33.5,47.2,2.2,2.2],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[28.6,52.5,1,1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 39.5 l-6 -6 M21 34.8 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,19],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.6 Q131 70 142 56.6",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[133,50,7,7],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[133,50,4.3,4.3],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[135.4,47.2,2.2,2.2],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[130.6,52.5,1,1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 39.5 l6 -6 M139 34.8 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 22.8 L16.8 20.7 L19.1 18.9 L21.4 17.4 L23.7 16.1 L26.0 15.2 L28.3 14.6 L30.7 14.3 L33.1 14.2 L35.5 14.5 L38.0 15.1 L40.6 16.0 L43.2 17.3 L44.8 14.7 L42.1 13.0 L39.3 11.6 L36.5 10.5 L33.6 9.8 L30.7 9.4 L27.7 9.4 L24.7 9.8 L21.6 10.5 L18.6 11.6 L15.5 13.1 L12.5 15.0 L9.5 17.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.0 19.2 L120.3 17.7 L122.5 16.5 L124.8 15.6 L127.0 15.0 L129.3 14.6 L131.7 14.6 L134.1 14.9 L136.5 15.4 L139.1 16.3 L141.7 17.6 L144.3 19.2 L147.0 21.1 L149.0 18.9 L146.3 16.5 L143.7 14.4 L140.9 12.7 L138.1 11.2 L135.3 10.1 L132.3 9.4 L129.3 9.0 L126.3 9.0 L123.2 9.4 L120.1 10.2 L117.1 11.3 L114.0 12.8Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 81 Q80 110 100 81 Q80 86 60 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"p",d:"M64 83 Q80 87.5 96 83 L95 87 Q80 91 65 87Z",f:"#fff",sd:"M"},{k:"p",d:"M69 98 Q80 91 91 98 Q86 104.5 80 104.5 Q74 104.5 69 98Z",f:"#ff6f8e",sd:"M"},{k:"p",d:"M80 96 V102",f:"#000",s:"#d94a6e",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1.2,0,0,1.2,-14,-10],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M-22 18 L-34 12 M-24 30 L-38 30 M-22 42 L-34 48",s:"#ffe27a",w:3,lc:"round"}],guns:[{k:"p",d:"M16 56 Q29 36 42 56",s:"#17120f",w:6,lc:"round",sd:"L"},{k:"p",d:"M16 56 l-6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[134,50,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[134,50,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[136.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[131.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M121.1 38.0 L140.9 38.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M140.9 38.0 l6 -5 M136.9 37.0 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.0 33.8 L14.6 33.6 L17.1 33.5 L19.7 33.5 L22.3 33.6 L24.9 33.8 L27.5 34.1 L30.1 34.4 L32.8 34.8 L35.4 35.4 L38.1 36.0 L40.8 36.6 L43.5 37.4 L44.5 34.6 L41.9 33.4 L39.2 32.4 L36.6 31.4 L33.9 30.5 L31.2 29.7 L28.5 28.9 L25.8 28.3 L23.0 27.7 L20.3 27.2 L17.5 26.8 L14.8 26.5 L12.0 26.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.2 25.0 L120.6 23.2 L122.8 21.7 L125.1 20.5 L127.4 19.6 L129.7 19.0 L132.0 18.6 L134.4 18.6 L136.8 18.8 L139.3 19.4 L141.8 20.3 L144.4 21.6 L147.1 23.2 L148.9 20.8 L146.2 18.7 L143.5 17.0 L140.7 15.6 L137.9 14.5 L135.0 13.7 L132.0 13.4 L129.0 13.4 L125.9 13.8 L122.9 14.5 L119.8 15.6 L116.8 17.1 L113.8 19.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M58 81 Q80 102 102 81 Q80 89 58 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"r",g:[66,83,28,5,3],f:"#fff",sd:"M"},{k:"p",d:"M71.6 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M77.2 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M82.8 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M88.4 83 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M56 79 Q54 84 58 86 M104 79 Q106 84 102 86",s:"#17120f",w:2.4,lc:"round",sd:"M"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.8,0,0,.8,8,22],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1,0,0,1,156,-4],f:"#ffe27a",s:"#c99a1f",w:1}],dab:[{k:"p",d:"M17 38 L39 50 L17 62",s:"#17120f",w:6,lc:"round",lj:"round",sd:"L"},{k:"p",d:"M143 38 L121 50 L143 62",s:"#17120f",w:6,lc:"round",lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M66 94 Q80 90 94 94",s:"#17120f",w:4,lc:"round",sd:"M"},{k:"p",d:"M184 2 L196 10 M176 14 L188 24",s:"#ffe27a",w:3.5,lc:"round"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[1.1,0,0,1.1,-16,8],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.8,0,0,.8,176,80],f:"#ffe27a",s:"#c99a1f",w:1}],shrug:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,46,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,46,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,42.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,48.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M20.8 36.2 L37.2 36.2",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M20.8 36.2 l-6 -5 M24.8 35.2 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,46,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,46,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,42.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,48.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M122.8 36.2 L139.2 36.2",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M139.2 36.2 l6 -5 M135.2 35.2 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M14.5 24.8 L16.8 22.7 L19.1 20.9 L21.4 19.4 L23.7 18.1 L26.0 17.2 L28.3 16.6 L30.7 16.3 L33.1 16.2 L35.5 16.5 L38.0 17.1 L40.6 18.0 L43.2 19.3 L44.8 16.7 L42.1 15.0 L39.3 13.6 L36.5 12.5 L33.6 11.8 L30.7 11.4 L27.7 11.4 L24.7 11.8 L21.6 12.5 L18.6 13.6 L15.5 15.1 L12.5 17.0 L9.5 19.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.0 21.2 L120.3 19.7 L122.5 18.5 L124.8 17.6 L127.0 17.0 L129.3 16.6 L131.7 16.6 L134.1 16.9 L136.5 17.4 L139.1 18.3 L141.7 19.6 L144.3 21.2 L147.0 23.1 L149.0 20.9 L146.3 18.5 L143.7 16.4 L140.9 14.7 L138.1 13.2 L135.3 12.1 L132.3 11.4 L129.3 11.0 L126.3 11.0 L123.2 11.4 L120.1 12.2 L117.1 13.3 L114.0 14.8Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 90 Q66 84 72 90 T84 90 T96 90 T104 88",s:"#17120f",w:4.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1,0,0,1,150,18],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1,0,0,1,150,18],f:"#fff",o:.8}],vibe:[{k:"p",d:"M16 56 Q29 36 42 56",s:"#17120f",w:6,lc:"round",sd:"L"},{k:"p",d:"M16 56 l-6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"L"},{k:"p",d:"M118 56 Q131 36 144 56",s:"#17120f",w:6,lc:"round",sd:"R"},{k:"p",d:"M144 56 l6 -4",f:"#000",s:"#17120f",w:3,lc:"round",sd:"R"},{k:"p",d:"M13.3 26.7 L15.8 25.4 L18.3 24.3 L20.7 23.4 L23.2 22.7 L25.7 22.1 L28.1 21.7 L30.6 21.6 L33.2 21.5 L35.7 21.7 L38.3 22.1 L40.9 22.7 L43.5 23.4 L44.5 20.6 L41.8 19.5 L39.1 18.7 L36.3 18.0 L33.5 17.6 L30.7 17.3 L27.9 17.3 L25.0 17.4 L22.2 17.8 L19.3 18.3 L16.4 19.1 L13.5 20.1 L10.7 21.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M117.1 24.8 L119.5 23.8 L121.9 23.1 L124.4 22.5 L126.9 22.0 L129.4 21.8 L131.9 21.7 L134.4 21.9 L136.9 22.2 L139.5 22.7 L142.1 23.4 L144.7 24.3 L147.3 25.3 L148.7 22.7 L146.0 21.3 L143.3 20.1 L140.5 19.1 L137.7 18.3 L135.0 17.7 L132.1 17.3 L129.3 17.1 L126.5 17.1 L123.6 17.3 L120.7 17.7 L117.8 18.3 L114.9 19.2Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M15 82 l4 -6 M21 82 l4 -6 M27 82 l4 -6 M131 82 l4 -6 M137 82 l4 -6 M143 82 l4 -6",f:"#000",s:"#e8577f",w:1.8,lc:"round",sd:"M"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 81 Q80 110 100 81 Q80 86 60 81Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"p",d:"M64 83 Q80 87.5 96 83 L95 87 Q80 91 65 87Z",f:"#fff",sd:"M"},{k:"p",d:"M69 98 Q80 91 91 98 Q86 104.5 80 104.5 Q74 104.5 69 98Z",f:"#ff6f8e",sd:"M"},{k:"p",d:"M80 96 V102",f:"#000",s:"#d94a6e",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[1,0,0,1,-18,-30],s:"#fff",w:2.4,lc:"round",lj:"round"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[.8,0,0,.8,170,-40],s:"#fff",w:2.4,lc:"round",lj:"round"},{k:"p",d:"M0 0 V-16 L10 -19 V-4 M0 0 a4 3 -20 1 1 -1 -1 M10 -4 a4 3 -20 1 1 -1 -1",m:[.7,0,0,.7,60,-48],s:"#fff",w:2.4,lc:"round",lj:"round"}],facepalm:[{k:"p",d:"M16 50 Q29 59 42 50",s:"#17120f",w:5,lc:"round",sd:"L"},{k:"p",d:"M16 50 l-5 4 M21 55 l-3 5",f:"#000",s:"#17120f",w:2.6,lc:"round",sd:"L"},{k:"p",d:"M12.9 37.6 L15.5 36.8 L18.2 35.9 L20.8 35.1 L23.4 34.2 L26.0 33.4 L28.6 32.5 L31.3 31.7 L33.9 30.8 L36.5 30.0 L39.1 29.2 L41.7 28.3 L44.4 27.5 L43.6 24.5 L40.9 25.0 L38.2 25.5 L35.5 26.0 L32.8 26.5 L30.1 27.0 L27.4 27.5 L24.7 27.9 L21.9 28.4 L19.2 28.9 L16.5 29.4 L13.8 29.9 L11.1 30.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M60 98 Q80 84 100 98",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M20 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M44 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M116 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"p",d:"M140 -40 V-20",f:"#000",s:"#6b6880",w:3,lc:"round",da:[5,5]},{k:"e",g:[40,104,6,6],f:"#d8d4e6",o:.8},{k:"e",g:[30,110,4.5,4.5],f:"#d8d4e6",o:.7},{k:"e",g:[22,115,3,3],f:"#d8d4e6",o:.6}],shh:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[25,53,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[25,53,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[27.8,49.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[22.2,55.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.3 53.3 L15.2 52.7 L15.1 52.0 L15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.3 53.3 L42.6 46.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.3 53.3 l-6 -5 M19.3 52.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"p",d:"M19 72 Q29 77 39 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[127,53,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[127,53,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[129.8,49.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[124.2,55.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3 L144.9 52.0 L144.8 52.7 L144.7 53.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.4 46.0 L144.7 53.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.7 53.3 l6 -5 M140.7 52.3 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M121 72 Q131 77 141 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M13.0 33.6 L15.4 32.7 L17.8 31.8 L20.3 30.8 L22.8 29.7 L25.3 28.6 L27.9 27.5 L30.6 26.2 L33.3 25.0 L36.0 23.7 L38.8 22.3 L41.7 20.9 L44.6 19.4 L43.4 16.6 L40.4 17.8 L37.4 18.8 L34.5 19.8 L31.6 20.8 L28.8 21.7 L26.1 22.5 L23.4 23.3 L20.8 24.1 L18.2 24.7 L15.8 25.3 L13.3 25.9 L11.0 26.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M114.5 21.4 L117.6 22.6 L120.6 23.7 L123.5 24.7 L126.4 25.7 L129.3 26.6 L132.1 27.5 L134.8 28.3 L137.5 29.0 L140.1 29.7 L142.7 30.3 L145.2 30.9 L147.6 31.4 L148.4 28.6 L146.1 27.7 L143.8 26.8 L141.4 25.8 L139.0 24.8 L136.5 23.7 L133.9 22.5 L131.3 21.3 L128.7 20.1 L126.0 18.8 L123.2 17.4 L120.4 16.0 L117.5 14.6Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M69 88 Q74 80 80 83 Q86 80 91 88 Q86 96 80 95 Q74 96 69 88Z",f:"#8a4fae",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M72 88 Q80 86 88 88",s:"#4d2167",w:2,lc:"round",sd:"M"},{k:"e",g:[76,91.5,3,1.3],f:"#fff",o:.5,sd:"M"},{k:"p",d:"M100 76 Q108 82 100 90 M108 72 Q120 82 108 94",s:"#fff",w:2.5,lc:"round"}],scheme:[{k:"r",g:[0,0,160,62,30],f:"rgba(20,0,40,.22)"},{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[33,51,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[33,51,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[35.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[30.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7 L43.0 51.3 L42.9 52.0 L42.8 52.7 L42.7 53.3 L42.6 54.0 L42.5 54.6 L42.3 55.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M16.3 42.9 L42.3 55.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M16.3 42.9 l-6 -5 M20.3 41.9 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[135,51,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[135,51,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[137.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[132.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.7 55.3 L117.5 54.6 L117.4 54.0 L117.3 53.3 L117.2 52.7 L117.1 52.0 L117.0 51.3 L117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.7 55.3 L143.7 42.9",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M143.7 42.9 l6 -5 M139.7 41.9 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M8.6 24.3 L11.6 25.1 L14.6 25.9 L17.6 26.9 L20.6 27.8 L23.6 28.9 L26.7 30.0 L29.7 31.1 L32.8 32.3 L35.8 33.6 L38.9 34.9 L42.0 36.3 L45.0 37.7 L47.0 34.3 L44.0 32.4 L41.1 30.6 L38.2 28.9 L35.2 27.2 L32.3 25.6 L29.3 24.0 L26.4 22.5 L23.4 21.0 L20.4 19.6 L17.4 18.3 L14.4 17.0 L11.4 15.7Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M148.6 15.7 L145.6 17.0 L142.6 18.3 L139.6 19.6 L136.6 21.0 L133.6 22.5 L130.7 24.0 L127.7 25.6 L124.8 27.2 L121.8 28.9 L118.9 30.6 L116.0 32.4 L113.0 34.3 L115.0 37.7 L118.0 36.3 L121.1 34.9 L124.2 33.6 L127.2 32.3 L130.3 31.1 L133.3 30.0 L136.4 28.9 L139.4 27.8 L142.4 26.9 L145.4 25.9 L148.4 25.1 L151.4 24.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M52 79 Q80 106 110 74 Q82 91 52 79Z",f:"#3a0d24",s:"#17120f",w:3,lj:"round",sd:"M"},{k:"r",g:[64,80,34,4,3],f:"#fff",sd:"M"},{k:"p",d:"M69.7 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M75.3 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M81.0 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.7 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.3 80 V84",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M50 77 L46 72 M112 72 L117 67",f:"#000",s:"#17120f",w:2.6,lc:"round",sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.6,0,0,.6,142,40],f:"#ffe27a",s:"#c99a1f",w:1}],perfect:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,51,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,51,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7 L43.0 51.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 51.3 L43.0 51.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 51.3 l-6 -5 M19.0 50.3 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"p",d:"M19 72 Q29 77 39 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,51,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,51,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,47.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,53.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 51.3 L117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 51.3 L145.0 51.3",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M145.0 51.3 l6 -5 M141.0 50.3 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M121 72 Q131 77 141 72",s:"#5b3fb0",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.2 35.7 L14.9 35.4 L17.5 35.1 L20.1 34.8 L22.7 34.6 L25.4 34.3 L28.0 34.1 L30.6 34.0 L33.3 33.8 L35.9 33.7 L38.6 33.6 L41.2 33.5 L43.9 33.5 L44.1 30.5 L41.4 30.2 L38.7 29.8 L36.1 29.6 L33.4 29.3 L30.7 29.1 L28.0 28.9 L25.3 28.7 L22.6 28.6 L19.9 28.4 L17.2 28.4 L14.5 28.3 L11.8 28.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M118.2 23.0 L120.6 21.2 L122.8 19.7 L125.1 18.5 L127.4 17.6 L129.7 17.0 L132.0 16.6 L134.4 16.6 L136.8 16.8 L139.3 17.4 L141.8 18.3 L144.4 19.6 L147.1 21.2 L148.9 18.8 L146.2 16.7 L143.5 15.0 L140.7 13.6 L137.9 12.5 L135.0 11.7 L132.0 11.4 L129.0 11.4 L125.9 11.8 L122.9 12.5 L119.8 13.6 L116.8 15.1 L113.8 17.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M74 88 Q80 77 92 80 Q102 80 104 87 Q102 95 92 96 Q80 98 74 88Z",f:"#8a4fae",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M78 88 Q90 85 102 87",s:"#4d2167",w:2,sd:"M"},{k:"e",g:[92,92,5,1.6],f:"#fff",o:.5,sd:"M"},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.9,0,0,.9,-28,40],f:"#ffe27a",s:"#c99a1f",w:1},{k:"p",d:"M0 -9 Q1.5 -1.5 9 0 Q1.5 1.5 0 9 Q-1.5 1.5 -9 0 Q-1.5 -1.5 0 -9Z",m:[.6,0,0,.6,-6,16],f:"#ffe27a",s:"#c99a1f",w:1}],pat:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[26,48,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[26,48,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[28.8,44.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[23.2,50.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.2 52.7 L15.1 52.0 L15.0 51.3 L15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.2 52.7 L43.0 50.0",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.2 52.7 l-6 -5 M19.2 51.7 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[128,48,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[128,48,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[130.8,44.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[125.2,50.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7 L145.0 51.3 L144.9 52.0 L144.8 52.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 50.0 L144.8 52.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M144.8 52.7 l6 -5 M140.8 51.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M13.3 33.5 L15.8 32.5 L18.2 31.5 L20.7 30.7 L23.2 30.1 L25.7 29.5 L28.2 29.1 L30.7 28.8 L33.2 28.7 L35.8 28.7 L38.4 28.8 L41.0 29.1 L43.6 29.5 L44.4 26.5 L41.7 25.7 L38.9 25.1 L36.2 24.6 L33.4 24.2 L30.6 24.0 L27.8 23.9 L25.0 23.9 L22.2 24.2 L19.3 24.5 L16.5 25.0 L13.6 25.7 L10.7 26.5Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.9 31.6 L119.4 30.9 L121.8 30.3 L124.3 29.8 L126.8 29.4 L129.3 29.2 L131.8 29.1 L134.4 29.2 L137.0 29.3 L139.6 29.6 L142.2 30.1 L144.8 30.7 L147.5 31.4 L148.5 28.6 L145.9 27.5 L143.2 26.5 L140.4 25.6 L137.7 24.9 L134.9 24.3 L132.2 23.9 L129.4 23.6 L126.5 23.4 L123.7 23.5 L120.8 23.6 L118.0 23.9 L115.1 24.4Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"p",d:"M15 82 l4 -6 M21 82 l4 -6 M27 82 l4 -6 M131 82 l4 -6 M137 82 l4 -6 M143 82 l4 -6",f:"#000",s:"#e8577f",w:1.8,lc:"round",sd:"M"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M56 83 Q62 72 72 75 Q78 76 80 80 Q82 76 88 75 Q98 72 104 83 Q108 90 100 92 Q94 84 86 86 Q82 87 80 85 Q78 87 74 86 Q66 84 60 92 Q52 90 56 83Z",f:"#e8b84a",s:"#17120f",w:2.6,lj:"round",sd:"M"},{k:"p",d:"M62 84 Q70 79 77 82 M98 84 Q90 79 83 82 M64 88 Q70 84 76 85 M96 88 Q90 84 84 85",s:"#b07d17",w:1.6,lc:"round",sd:"M"},{k:"p",d:"M70 97 Q80 102 90 97",s:"#17120f",w:3.5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M128 -40 Q136 -48 146 -46 M132 -30 Q142 -34 150 -30",s:"#fff",w:2.5,lc:"round"}],sideeye:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,52,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,52,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M15.0 50.7 L15.0 50.0 L15.0 49.3 L15.0 48.7 L15.1 48.0 L15.2 47.3 L15.3 46.7 L15.4 46.0 L15.5 45.4 L15.7 44.7 L15.9 44.1 L16.1 43.5 L16.3 42.9 L16.5 42.3 L16.8 41.7 L17.1 41.1 L17.4 40.6 L17.7 40.0 L18.0 39.5 L18.4 39.0 L18.7 38.5 L19.1 38.0 L19.5 37.5 L19.9 37.1 L20.3 36.6 L20.8 36.2 L21.2 35.9 L21.7 35.5 L22.2 35.2 L22.6 34.9 L23.1 34.6 L23.6 34.3 L24.2 34.1 L24.7 33.8 L25.2 33.6 L25.7 33.5 L26.3 33.3 L26.8 33.2 L27.4 33.1 L27.9 33.1 L28.5 33.0 L29.0 33.0 L29.5 33.0 L30.1 33.1 L30.6 33.1 L31.2 33.2 L31.7 33.3 L32.3 33.5 L32.8 33.6 L33.3 33.8 L33.8 34.1 L34.4 34.3 L34.9 34.6 L35.4 34.9 L35.8 35.2 L36.3 35.5 L36.8 35.9 L37.2 36.2 L37.7 36.6 L38.1 37.1 L38.5 37.5 L38.9 38.0 L39.3 38.5 L39.6 39.0 L40.0 39.5 L40.3 40.0 L40.6 40.6 L40.9 41.1 L41.2 41.7 L41.5 42.3 L41.7 42.9 L41.9 43.5 L42.1 44.1 L42.3 44.7 L42.5 45.4 L42.6 46.0 L42.7 46.7 L42.8 47.3 L42.9 48.0 L43.0 48.7 L43.0 49.3 L43.0 50.0 L43.0 50.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"L"},{k:"p",d:"M15.0 50.7 L43.0 50.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"L"},{k:"p",d:"M15.0 50.7 l-6 -5 M19.0 49.7 l-4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,52,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,52,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,48.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,54.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M117.0 50.7 L117.0 50.0 L117.0 49.3 L117.0 48.7 L117.1 48.0 L117.2 47.3 L117.3 46.7 L117.4 46.0 L117.5 45.4 L117.7 44.7 L117.9 44.1 L118.1 43.5 L118.3 42.9 L118.5 42.3 L118.8 41.7 L119.1 41.1 L119.4 40.6 L119.7 40.0 L120.0 39.5 L120.4 39.0 L120.7 38.5 L121.1 38.0 L121.5 37.5 L121.9 37.1 L122.3 36.6 L122.8 36.2 L123.2 35.9 L123.7 35.5 L124.2 35.2 L124.6 34.9 L125.1 34.6 L125.6 34.3 L126.2 34.1 L126.7 33.8 L127.2 33.6 L127.7 33.5 L128.3 33.3 L128.8 33.2 L129.4 33.1 L129.9 33.1 L130.5 33.0 L131.0 33.0 L131.5 33.0 L132.1 33.1 L132.6 33.1 L133.2 33.2 L133.7 33.3 L134.3 33.5 L134.8 33.6 L135.3 33.8 L135.8 34.1 L136.4 34.3 L136.9 34.6 L137.4 34.9 L137.8 35.2 L138.3 35.5 L138.8 35.9 L139.2 36.2 L139.7 36.6 L140.1 37.1 L140.5 37.5 L140.9 38.0 L141.3 38.5 L141.6 39.0 L142.0 39.5 L142.3 40.0 L142.6 40.6 L142.9 41.1 L143.2 41.7 L143.5 42.3 L143.7 42.9 L143.9 43.5 L144.1 44.1 L144.3 44.7 L144.5 45.4 L144.6 46.0 L144.7 46.7 L144.8 47.3 L144.9 48.0 L145.0 48.7 L145.0 49.3 L145.0 50.0 L145.0 50.7Z",f:"LIDF",s:"#17120f",w:3,lj:"round",sd:"R"},{k:"p",d:"M117.0 50.7 L145.0 50.7",f:"#000",s:"#17120f",w:4.5,lc:"round",sd:"R"},{k:"p",d:"M145.0 50.7 l6 -5 M141.0 49.7 l4 -6",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M8.9 36.9 L12.0 37.4 L15.1 37.9 L18.1 38.3 L21.2 38.7 L24.3 39.1 L27.3 39.4 L30.4 39.8 L33.5 40.1 L36.5 40.3 L39.6 40.6 L42.6 40.8 L45.7 41.0 L46.3 35.0 L43.4 34.5 L40.4 34.0 L37.5 33.4 L34.5 32.8 L31.6 32.2 L28.7 31.6 L25.7 30.9 L22.8 30.2 L19.9 29.5 L16.9 28.7 L14.0 27.9 L11.1 27.1Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M116.3 27.0 L119.0 24.8 L121.6 23.0 L124.3 21.4 L126.9 20.2 L129.6 19.2 L132.3 18.6 L135.0 18.3 L137.8 18.2 L140.6 18.5 L143.4 19.1 L146.3 20.0 L149.3 21.3 L150.7 18.7 L147.7 17.0 L144.6 15.6 L141.4 14.5 L138.2 13.8 L135.0 13.4 L131.7 13.4 L128.4 13.8 L125.1 14.5 L121.7 15.6 L118.4 17.0 L115.0 18.9 L111.7 21.0Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M18 70 Q26 74 36 72 M124 72 Q134 74 142 70",s:"rgba(20,8,40,.3)",w:2,lc:"round"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"p",d:"M64 92 Q80 90 98 93",s:"#17120f",w:5,lc:"round",sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"e",g:[172,6,3.5,3.5],f:"#fff"},{k:"e",g:[184,0,3.5,3.5],f:"#fff"},{k:"e",g:[196,-6,3.5,3.5],f:"#fff"}],sweat:[{k:"e",g:[29,50,14,18],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.3 Q29 69 40 56.3",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[34,49,6,6],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[34,49,3.7,3.7],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[36.1,46.6,1.9,1.9],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[31.9,51.1,.8,.8],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 40.1 l-6 -6 M21 35.6 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,18],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.3 Q131 69 142 56.3",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[136,49,6,6],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[136,49,3.7,3.7],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[138.1,46.6,1.9,1.9],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[133.9,51.1,.8,.8],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 40.1 l6 -6 M139 35.6 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"p",d:"M12.5 27.7 L15.0 27.1 L17.5 26.5 L20.0 25.7 L22.5 24.9 L25.1 24.0 L27.8 23.0 L30.5 21.9 L33.2 20.8 L36.0 19.6 L38.8 18.2 L41.7 16.8 L44.6 15.4 L43.4 12.6 L40.4 13.7 L37.4 14.8 L34.5 15.7 L31.7 16.5 L28.9 17.3 L26.2 18.0 L23.6 18.6 L21.0 19.1 L18.5 19.5 L16.1 19.9 L13.7 20.1 L11.5 20.3Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"L"},{k:"p",d:"M114.5 17.4 L117.6 18.6 L120.6 19.6 L123.6 20.6 L126.5 21.5 L129.4 22.3 L132.2 23.0 L135.0 23.6 L137.7 24.2 L140.3 24.6 L142.8 25.0 L145.3 25.3 L147.8 25.5 L148.2 22.5 L145.9 22.0 L143.6 21.3 L141.2 20.6 L138.8 19.8 L136.3 18.9 L133.8 18.0 L131.2 17.0 L128.6 15.8 L125.9 14.6 L123.2 13.4 L120.4 12.0 L117.5 10.6Z",f:"#17120f",s:"#17120f",w:1.5,lj:"round",sd:"R"},{k:"p",d:"M73 74 Q74 64 80 63 Q86 64 87 74 Q80 78 73 74Z",f:"rgba(20,8,40,.22)",sd:"M"},{k:"e",g:[78,66.5,2.6,1.6],f:"#fff",o:.45,sd:"M"},{k:"e",g:[76.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"e",g:[83.5,73,1.6,1.6],f:"rgba(20,8,40,.5)",sd:"M"},{k:"r",g:[58,80,44,17,7],f:"#e86a8a",s:"#17120f",w:3,sd:"M"},{k:"r",g:[61,82,38,6,3],f:"#fff",sd:"M"},{k:"p",d:"M67.3 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M73.7 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M80.0 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.3 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.7 82 V88",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"r",g:[61,89,38,6,3],f:"#fff",sd:"M"},{k:"p",d:"M67.3 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M73.7 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M80.0 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M86.3 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M92.7 89 V95",f:"#000",s:"#cfc8da",w:1.5,sd:"M"},{k:"p",d:"M58 88.5 H102",f:"#000",s:"#17120f",w:1.8,sd:"M"},{k:"p",d:"M74 106 Q80 109 86 106",s:"rgba(20,8,40,.3)",w:2,lc:"round",sd:"M"},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1.2,0,0,1.2,150,-6],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1.2,0,0,1.2,150,-6],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1,0,0,1,168,18],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1,0,0,1,168,18],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[1.1,0,0,1.1,6,-2],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[1.1,0,0,1.1,6,-2],f:"#fff",o:.8},{k:"p",d:"M0 -8 C4 -2 6 2 0 5 C-6 2 -4 -2 0 -8Z",m:[.9,0,0,.9,-10,30],f:"#7cc8ff",s:"#3d8fd1",w:1.2},{k:"e",g:[-1.5,0,1.2,2],m:[.9,0,0,.9,-10,30],f:"#fff",o:.8},{k:"p",d:"M30 -30 q5 -6 0 -12 q-5 -6 0 -12 M80 -40 q5 -6 0 -12 q-5 -6 0 -12 M130 -30 q5 -6 0 -12 q-5 -6 0 -12",s:"#ff9a6b",w:2.6,lc:"round"}],scuba:[{k:"e",g:[29,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"L"},{k:"p",d:"M18 56.0 Q29 68 40 56.0",s:"#d9d3e6",w:3,sd:"L"},{k:"e",g:[29,50,8,8],f:"#4b2d8f",c:"pup",sd:"L"},{k:"e",g:[29,50,5,5],f:"#0b0812",c:"pup",sd:"L"},{k:"e",g:[31.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"L"},{k:"e",g:[26.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"L"},{k:"p",d:"M17 40.6 l-6 -6 M21 36.4 l-4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"L"},{k:"e",g:[131,50,14,17],f:"#fff",s:"#17120f",w:3,c:"ew",sd:"R"},{k:"p",d:"M120 56.0 Q131 68 142 56.0",s:"#d9d3e6",w:3,sd:"R"},{k:"e",g:[131,50,8,8],f:"#4b2d8f",c:"pup",sd:"R"},{k:"e",g:[131,50,5,5],f:"#0b0812",c:"pup",sd:"R"},{k:"e",g:[133.8,46.8,2.6,2.6],f:"#fff",c:"pup",sd:"R"},{k:"e",g:[128.2,52.8,1.1,1.1],f:"#fff",c:"pup",sd:"R"},{k:"p",d:"M143 40.6 l6 -6 M139 36.4 l4 -7",f:"#000",s:"#17120f",w:2.4,lc:"round",sd:"R"},{k:"e",g:[94,86,12,8],f:"#ff8a3d",s:"#17120f",w:2.5},{k:"p",d:"M86 86 H102 M88 82 V90 M94 81 V91 M100 82 V90",f:"#000",s:"#c4561b",w:1.6},{k:"p",d:"M70 92 Q78 96 84 92",s:"#17120f",w:3,lc:"round"},{k:"e",g:[22,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[138,80,12,6.5],f:"#ff8fb1",o:.55,sd:"M"},{k:"e",g:[172,-40,6,6],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[169.9,-42.1,1.5,1.5],f:"#fff"},{k:"e",g:[182,-58,4,4],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[180.6,-59.4,1,1],f:"#fff"},{k:"e",g:[166,-70,5,5],f:"rgba(160,220,255,.25)",s:"#bfe8ff",w:2},{k:"e",g:[164.2,-71.8,1.2,1.2],f:"#fff"}]},kl={spider:{gv:"#c1272d",gl:"#0d0d0d",gs:"#8f1d22",gk:"#0d0d0d",su:"#c1272d",ss:"#8f1d22",sl:"#0d0d0d",so:"#1d3f9e",lens:["#ffffff","#0d0d0d",5]},thor:{gv:"#9aa4b2",gl:"#2b3446",gs:"#6f7a88",gk:"#e8edf3",su:"#3b2a1e",ss:"#2a1d14",sl:"#e0b84a",so:"#e0b84a",lens:null,face:15,lid:"#e2b98c"},captain:{gv:"#c1272d",gl:"#5a0f12",gs:"#8f1d22",gk:"#f3d6d6",su:"#c1272d",ss:"#8f1d22",sl:"#ffffff",so:"#ffffff",lens:null,face:15,lid:"#e2b98c"},iron:{gv:"#e0b030",gl:"#6b4f0a",gs:"#9a7312",gk:"#fff3b0",su:"#e0b030",ss:"#9a7312",sl:"#b3202a",so:"#b3202a",lens:["#eaf8ff","#7ee8ff",3.5]},strange:{gv:"#5a3b1c",gl:"#2a1a0c",gs:"#3e2812",gk:"#e0b84a",su:"#5a3b1c",ss:"#3e2812",sl:"#e0b84a",so:"#e0b84a",lens:null,face:15,lid:"#dcb48c"},superman:{gv:"#1f5fd6",gl:"#0c2a66",gs:"#174aa8",gk:"#8fb4ff",su:"#c1272d",ss:"#8f1d22",sl:"#f1c40f",so:"#8f1d22",lens:null,face:15,lid:"#e4bb92"},batman:{gv:"#343a49",gl:"#0d0d0d",gs:"#22262f",gk:"#5a6276",su:"#3a4152",ss:"#22262f",sl:"#f1c40f",so:"#15171c",lens:["#ffffff","#0d0d0d",4]}};var Ss=document.getElementById("mascot"),An;try{An=new co({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch(i){window.__buddy3d={ok:!1,error:String(i&&i.message||i)}}if(An){let fr=function(F){Xn=F;let q=window.COSTUME_ART&&window.COSTUME_ART[F];if(!q){Kt.visible=!1;return}for(let se of["plain","emote"]){let H=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 114" width="640" height="456">${se==="emote"?"<style>.cf{display:none}</style>":""}<defs>${window.COSTUME_DEFS}</defs><g clip-path="url(#bodyClip)">${q.under}${q.over}</g></svg>`,le=new Image;le.onload=()=>{if(Xn!==F)return;let Ce=document.createElement("canvas");Ce.width=640,Ce.height=456,Ce.getContext("2d").drawImage(le,0,0,640,456);let Te=new hs(Ce);Te.colorSpace=Ot,Te.anisotropy=4,ii[se]&&ii[se].dispose(),ii[se]=Te,Kt.material.map=null,Kt.visible=!0,Se=!0,we=12},le.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(H)}},Ee=function(){let F=document.hidden||!document.body.classList.contains("skin3d"),q=Qe.act==="idle"||Qe.rest;if(setTimeout(Ee,F?500:q?250:je.includes(Qe.act)?125:66),F){We=!0;return}if(We&&(We=!1,Se=!0),q&&!Se&&we<=0)return;q?we--:we=12,Se=!1;let se=V(),Y=Math.min(.1,(se-_e)/1e3);_e=se;let H=(se-be)/1e3,le=1-Math.pow(.001,Y),Ce=Qe.act,Te=Math.sin(H*.6)*.32,Me=Math.sin(H*Math.PI*2/2.6)*.015,qe=0,Fe=0,lt=1,en=1,et=0,Dt=-.9,In=.76,on=.9,qn=.76,Pn=0,Gt=0,Rt=0,yt=0,zi=0,si=0,pr=0,zl=0,Vl=1,Ts=0,mo=!1,go=!1,_o=!1,Hl=!1,Gl=!1,Wl=!1,Vi=0,As=0;switch(o.color.copy(Qe.costume!=="none"?v:jt),Ce){case"walk":case"run":{let Be=Ce==="run"?14:8;Te=Qe.dir*(Ce==="run"?1.05:.85),Me=Math.abs(Math.sin(H*Be))*(Ce==="run"?.09:.05),pr=Math.sin(H*Be)*(Ce==="run"?.7:.45),Pn=Math.sin(H*Be)*.6,Rt=-Math.sin(H*Be)*.6,qe=Qe.dir*-.04,Fe=Ce==="run"?.12:.04,Ce==="run"&&(Gt=-2.5,yt=2.5);break}case"type":Te=Math.sin(H*.8)*.08,Fe=.08,Pn=-1+Math.sin(H*28)*.12,Rt=-1+Math.sin(H*28+1.6)*.12,Gt=.35,yt=-.35,zi=si=.15,Hl=!0,C(),zl=Math.abs(Math.sin(H*12))*.02,As=-.04;break;case"read":Te=Math.sin(H*.5)*.1,Fe=-.08,Gt=-2.3,yt=2.3,Pn=-.3,Rt=-.3,Gl=!0,Vi=Math.sin(H*2.6)*.05,As=.04;break;case"search":Te=Math.sin(H*1.4)*.6,yt=2+Math.sin(H*6)*.25,Rt=-.6,Wl=!0,Vi=Math.sin(H*3)*.06;break;case"think":Te=-.25,As=.06,Vi=-.03,qe=Math.sin(H*.8)*.04,Qe.think==="chin"?(on=.3,qn=.5,si=.5,Rt=-1.25+Math.sin(H*5)*.08,yt=-.1,Dt=.05,In=.3,zi=.5,Pn=-1.5,Gt=0,C()):(yt=2.7,Rt=-.4+Math.sin(H*9)*.1);break;case"wait":{Te=0;let Be=H%1.8/1.8;et=Be<.35?Math.sin(Be/.35*Math.PI)*.22:0,en=Be<.08?.92:Be>.33&&Be<.42?.94:1,lt=2-en,yt=2.6+Math.sin(H*11)*.35,qe=Math.sin(H*3.5)*.08;break}case"look":Te=Math.sin(H*1.2)*.9,yt=2.2,Rt=-.9,Vi=Math.sin(H*1.2)*.05;break;case"sit":Vl=.32,Me=-.3+Math.sin(H*1.5)*.01,Te=Math.sin(H*.4)*.25,Gt=-.3,yt=.3;break;case"hero":{let Be=Qe.costume;Te=Math.sin(H*.6)*.3;let Yn=H*2,ql=!0;if(Be==="spider"){let pt=H%9/9;Ts=Zt(pt,[[0,-.7],[.14,-.7],[.28,-.2],[.4,.62],[.44,.7],[.52,.7],[.72,-.2],[.84,-.62],[.88,-.7],[1,-.7]]),et=Zt(pt,[[0,0],[.16,0],[.28,.5],[.4,.1],[.44,0],[.54,0],[.72,.5],[.84,.1],[.88,0],[1,0]]),qe=Zt(pt,[[0,0],[.16,.2],[.28,-.7],[.4,-.25],[.44,0],[.54,-.2],[.72,.7],[.84,.25],[.88,0],[1,0]]),yt=2.9,Rt=-.2,Gt=-.5;let ln=pt>.16&&pt<.46,wi=pt>.54&&pt<.9;if(mo=ln||wi,mo){let Ei=ln?1.15:-1.15,Rs=1.9,Dn=Ts+.85*Math.cos(qe),Ti=et+.9;Wn.set(Ei-Dn,Rs-Ti,0);let gr=Wn.length();_t.position.set((Ei+Dn)/2,(Rs+Ti)/2,.3),_t.rotation.z=Math.atan2(Wn.y,Wn.x)-Math.PI/2,_t.scale.set(1,gr/1.4,1)}}else if(Be==="thor"){let pt=H%7/7;ql=pt>.14&&pt<.86;let ln=Zt(pt,[[.14,1.3],[.19,1],[.82,1.05],[.86,.9]]);u.scale.setScalar(ln),Hn.visible=pt>.13&&pt<.17||pt>.83&&pt<.86,ki.intensity=Zt(pt,[[0,0],[.13,0],[.14,14],[.18,0],[.83,0],[.84,10],[.88,0],[1,0]]),yt=2.9+Math.sin(H*5)*.08,Rt=-.3}else if(Be==="strange"){let pt=H%8/8,ln=Zt(pt,[[0,.01],[.12,1],[.38,1],[.46,.01],[1,.01]]),wi=Zt(pt,[[0,.01],[.4,.01],[.54,1],[.8,1],[.9,.01],[1,.01]]);Rn[0].visible=ln>.02,Rn[0].scale.setScalar(ln*.8),Rn[1].visible=wi>.02,Rn[1].scale.setScalar(wi*.8),Rn[0].rotation.z=H*1.5,Rn[1].rotation.z=-H*1.5,Ts=Zt(pt,[[0,0],[.12,0],[.34,-.78],[.35,.78],[.58,.78],[.78,0]]);let Ei=Zt(pt,[[0,1],[.12,1],[.34,.1],[.35,.1],[.58,.2],[.78,1]]);u.scale.setScalar(Ei),Gt=-1.2,yt=1.2,go=pt<.2||pt>.78&&pt<.92}else if(Be==="iron"){let pt=H%9/9;Cn.visible=!0;let ln=(Dn,Ti)=>Zt(pt,[[0,0],[Dn,0],[Ti,1],[.9,1],[.96,0],[1,0]]);Gn.forEach((Dn,Ti)=>{let gr=ln(.04+Ti*.01,.12+Ti*.01);Dn.visible=gr>.01,Dn.position.y=-.3-(1-gr)*.9});let wi=ln(.18,.25);ni.visible=wi>.01,ni.position.y=.74+(1-wi)*1.2;let Ei=ln(.26,.32);Li.visible=Ei>.01,Li.scale.setScalar(Math.max(.01,Ei));let Rs=ln(.08,.18);Dt=-.9-(1-Rs)*1.2,on=.9+(1-Rs)*1.2,Ts=Zt(pt,[[0,0],[.5,0],[.52,-.5],[.62,.9],[.7,.95],[.78,-.5],[.84,0],[1,0]]),et=Zt(pt,[[0,0],[.38,0],[.46,.35],[.62,.7],[.7,.5],[.78,.5],[.84,.3],[.88,0],[1,0]]),qe=Zt(pt,[[0,0],[.46,0],[.52,1],[.62,1.3],[.7,-1.2],[.78,-1.2],[.84,0],[1,0]]),Rt=-1.4,yt=.3,Gt=-.4,Ls.forEach(Dn=>{Dn.visible=pt>.38&&pt<.86,Dn.scale.y=1+Math.sin(H*40)*.25})}else Be==="superman"?(et=.3+Math.sin(Yn)*.1,qe=-.55,Fe=.15,yt=2.6,Rt=-.4):Be==="captain"?(Gt=-.6,Pn=-1,zi=.15,qe=Math.sin(Yn)*.03):Be==="batman"?(qe=Math.sin(Yn*.7)*.05,yt=0,Me=0):Me=Math.sin(Yn)*.02;u.visible=ql;break}case"farm":{let Be=H*1.9;Te=Math.sin(H*.55)*.35,qe=Math.sin(Be*.5)*.07,Me=Math.abs(Math.sin(Be*.5))*.03-.02,_o=!0,yt=1.45+Math.sin(Be)*.28,Rt=-.2,Gt=-1.45+Math.sin(Be+Math.PI)*.28,Pn=-.2,C(),pr=0;break}case"emote-nope":on=.75,qn=1.2,yt=.25+Math.sin(H*14)*.35,qe=Math.sin(H*3.9)*.06,Te=Math.sin(H*3.9)*.3;break;case"emote-point":yt=.9,Rt=-1.25+Math.sin(H*14)*.12,si=.2,Te=-.1;break;case"emote-guns":yt=1.57,Gt=-1.57,Rt=-.5-(H%.6<.1?.4:0),Pn=-.5-((H+.3)%.6<.1?.4:0);break;case"emote-dab":yt=2.4,Gt=-.6,Pn=-1.3,zi=.4,qe=-.15,Fe=.12;break;case"emote-shrug":yt=1,Gt=-1,et=Math.max(0,Math.sin(H*4.8))*.05;break;case"emote-vibe":qe=Math.sin(H*7)*.12,Te=Math.sin(H*7)*.25,yt=2.6+Math.sin(H*7)*.3,Gt=-2.6-Math.sin(H*7+1.5)*.3;break;case"emote-facepalm":on=.25,qn=.75,si=.55,Rt=-1.4,Fe=.15,Me=-.04;break;case"emote-shh":on=.1,qn=.45,si=.55,Rt=-1.5,Te=.1,qe=Math.sin(H*2)*.03;break;case"emote-scheme":on=.2,qn=.4,si=.5,Dt=-.2,In=.4,zi=.5,Rt=-1.4+Math.sin(H*22)*.12,Pn=-1.4+Math.sin(H*22+1.6)*.12,Fe=.1;break;case"emote-perfect":on=.7,qn=1,yt=.6+Math.sin(H*12)*.1,Rt=-.4;break;case"emote-pat":on=.8,qn=.82,yt=-2.7+Math.abs(Math.sin(H*10))*.12,Rt=-.15,qe=-.05,Te=-.3;break;case"emote-sideeye":Te=.45,Vi=.06,Me=0;break;case"emote-sweat":on=.3+Math.sin(H*12)*.25,qn=1.05,si=.45,Rt=-1.5,As=.03;break;case"emote-scuba":{let Be=H*7;qe=Math.sin(Be)*.12,Te=Math.sin(Be)*.4,et=Math.abs(Math.sin(Be))*.08,yt=1.3+Math.sin(Be)*1.3,Gt=-1.3+Math.sin(Be)*1.3,pr=Math.sin(Be*2)*.4;break}default:Me=-.01,Te=.22,Fe=.05}Qe.act==="hero"&&["spider","thor","strange","iron"].includes(Qe.costume)||(u.visible=!0,u.scale.setScalar(1),Cn.visible=!1,Rn.forEach(Be=>{Be.visible=!1}),Hn.visible=!1,ki.intensity=0,Ls.forEach(Be=>{Be.visible=!1})),u.position.x=Ts,z=k(z,Te,le*.9),u.rotation.y=z,u.position.y=et,M.position.y=Me,M.rotation.z=k(M.rotation.z,qe,le),M.rotation.x=k(M.rotation.x,Fe,le),M.scale.set(k(M.scale.x,lt,le),k(M.scale.y,en,le),1),L.position.x=k(L.position.x,Dt,le),L.position.y=k(L.position.y,In,le),b.position.x=k(b.position.x,on,le),b.position.y=k(b.position.y,qn,le),L.rotation.x=k(L.rotation.x,Pn,le),L.rotation.z=k(L.rotation.z,Gt,le),L.position.z=k(L.position.z,zi,le),b.rotation.x=k(b.rotation.x,Rt,le),b.rotation.z=k(b.rotation.z,yt,le),b.position.z=k(b.position.z,si,le);for(let Be of _)Be.rotation.x=(Be.userData.phase?1:-1)*pr,Be.position.y=.02+(Be.userData.phase?zl:0),Be.scale.y=k(Be.scale.y,Vl,le);let mr=Tt[Qe.costume];tt.visible=!!(mr&&mr.cape),At.visible=Qe.costume==="batman",ot.visible=!1;let Xl=Ce.startsWith("emote-");ht.visible=Qe.costume==="thor"&&!Xl,Xe.visible=Qe.costume==="captain"&&!Xl,_t.visible=mo,Mt.visible=Ct.visible=go,go&&(Mt.rotation.z=H*2,Ct.rotation.z=-H*2),mr&&mr.cape&&(tt.rotation.x=.12+Math.sin(H*(Qe.costume==="superman"?9:2.5))*.1),xn.visible=_o,xn.rotation.z=_o?Math.sin(H*1.9*.5)*.03:0,K.visible=Hl,Q.visible=Gl,re.visible=Wl,Oe.visible=Qe.shades==="sunglasses"&&Ce!=="emote-scuba",ye.visible=Qe.shades==="goggles"||Ce==="emote-scuba";let Ih=["idle","sit","look","walk"].includes(Ce);if(Ve.visible=Qe.coffee&&Ih,Ve.visible&&Ce!=="walk"){let Be=H%7/7;if(Be>.58&&Be<.82){let Yn=Math.sin((Be-.58)/.24*Math.PI);b.rotation.z=1.1*Yn,b.rotation.x=-1.3*Yn}}Q.position.y=1.62+Math.sin(H*2)*.03;let Hi=Ce.startsWith("emote-")?Ce.slice(6):"";Hi!==ge&&(ge=Hi,po(Hi)),Hi&&(Oe.visible=!1);let xo=Hi&&ii.emote||ii.plain;Kt.visible&&xo&&Kt.material.map!==xo&&(Kt.material.map=xo,Kt.material.needsUpdate=!0);for(let[Be,Yn]of Object.entries(N))Yn.visible=!Hi&&Be===Qe.eyes&&Qe.shades!=="sunglasses"&&!["spider","iron","batman"].includes(Qe.costume);let Ph=H%3.4>3.25?.1:1;for(let Be of P.concat(X))Be.scale.y=Ph;w.position.x=k(w.position.x,Vi,le),w.position.y=k(w.position.y,As,le),An.render(t,n)},i=Ss.clientWidth||160,e=Ss.clientHeight||150;An.setPixelRatio(Math.min((window.devicePixelRatio||1)*(window.__zoom3d||1),4)),An.setSize(i,e),An.setClearColor(0,0),An.outputColorSpace=Ot,An.domElement.id="buddy3d",An.domElement.style.display="",Ss.appendChild(An.domElement);let t=new Vs,n=new zt(30,i/e,.1,50);n.position.set(0,1.05,5.1),n.lookAt(0,.5,0),t.add(new Js(16774378,3811874,1.7));let s=new fs(16777215,2.1);s.position.set(3,5,4),t.add(s);let r=new fs(16765624,.9);r.position.set(-3,2.5,-3.5),t.add(r);let a=new rt({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),o=new rt({color:14251863,roughness:.5,metalness:.02,emissive:14251863,emissiveIntensity:.12}),c=new rt({color:1511951,roughness:.35}),l=new Ht({color:16777215}),d=new rt({color:2762019,roughness:.6}),p=new rt({color:16051944,roughness:.8}),h=new rt({color:10474751,roughness:.1,metalness:.2,transparent:!0,opacity:.55}),f=(F,q,se,Y,H=.06)=>new Ze(new fo(F,q,se,3,Math.min(H,F/2,q/2,se/2)),Y),x=.8,S=.01,m=(F,q)=>[(F-80)*S,(114-q)*S],u=new ft;t.add(u);let M=new ft;u.add(M);let A=f(1.6,1.14,x,a,.09);A.position.set(0,.57,0),M.add(A);let y=(F,q,se,Y,H,le,Ce,Te=!0)=>{let Me=new ft;Me.position.set(H,le,Ce);let qe=f(F,q,se,Y,.05);return qe.position.y=Te?-q/2:q/2,Me.add(qe),Me},L=y(.2,.38,.42,o,-.9,.76,0);M.add(L);let b=y(.2,.38,.42,o,.9,.76,0);M.add(b);let T=a.clone(),_=[-.72,-.36,.35,.72].map((F,q)=>{let se=y(.17,.46,.3,T,F,.02,0);return se.userData.phase=q%2,u.add(se),se}),w=new ft;w.position.z=x/2+.012,M.add(w);let R=(F,q,se,Y,H,le=6)=>{let[Ce,Te]=m(q,se),[Me,qe]=m(Y,H),Fe=Math.hypot(Me-Ce,qe-Te)+le*S,lt=f(Fe,le*S,.04,c,.015);lt.position.set((Ce+Me)/2,(Te+qe)/2,0),lt.rotation.z=Math.atan2(qe-Te,Me-Ce),F.add(lt)},N={},U=(F,q)=>{let se=new ft;return q(se),se.visible=!1,w.add(se),N[F]=se,se},G=(F,q,se,Y,H,le=!0)=>{let[Ce,Te]=m(q,se),Me=new ft;Me.position.set(Ce,Te,0);let qe=f(Y*S,H*S,.05,c,Math.min(Y,H)*S*.45);if(Me.add(qe),le){let Fe=new Ze(new Ys(Y*S*.22,12,12),l);Fe.position.set(Y*S*.2,H*S*.22,.03),Me.add(Fe)}return F.add(Me),Me},P=[];U("open",F=>{P.push(G(F,29,50,16,28),G(F,131,50,16,28))});let X=[];U("wide",F=>{X.push(G(F,29,48,20,36),G(F,131,48,20,36))}),U("squint",F=>{R(F,17,37,41,51),R(F,41,51,17,65),R(F,143,37,119,51),R(F,119,51,143,65)}),U("happy",F=>{R(F,17,62,29,42),R(F,29,42,41,62),R(F,119,62,131,42),R(F,131,42,143,62)}),U("sleep",F=>{R(F,17,54,41,54),R(F,119,54,143,54)});let K=f(1.1,.07,.34,d,.03);K.position.set(0,.12,x/2+.32),u.add(K);let Q=new ft,oe=f(.42,.56,.04,p,.02);oe.position.set(-.2,0,0),oe.rotation.y=.28,Q.add(oe);let $=f(.42,.56,.04,p,.02);$.position.set(.2,0,0),$.rotation.y=-.28,Q.add($);let ie=f(.06,.58,.08,d,.02);Q.add(ie),Q.position.set(0,1.62,.35),u.add(Q);let re=new ft,Ne=new Ze(new mn(.17,.035,10,28),d);re.add(Ne);let Pe=new Ze(new Di(.16,24),h);re.add(Pe);let mt=f(.06,.3,.06,d,.02);mt.position.set(.14,-.27,0),mt.rotation.z=.5,re.add(mt),re.position.set(.3,-.42,.25),b.add(re);let it=new rt({color:789516,roughness:.15,metalness:.3}),ct=new rt({color:10474751,roughness:.1,metalness:.1,transparent:!0,opacity:.4}),j=new rt({color:3814963,roughness:.7}),ne=new rt({color:16051944,roughness:.4}),Le=new rt({color:5911586,roughness:.5}),Oe=new ft;Oe.visible=!1,w.add(Oe);for(let F of[29,131]){let[q,se]=m(F,50),Y=f(.44,.3,.07,it,.1);Y.position.set(q,se,.03),Oe.add(Y)}{let F=f(.62,.07,.07,it,.03);F.position.set(0,m(80,42)[1],.03),Oe.add(F)}let ye=new ft;ye.visible=!1,w.add(ye);for(let F of[29,131]){let[q,se]=m(F,50),Y=new Ze(new mn(.2,.045,10,24),j);Y.position.set(q,se,.05),ye.add(Y);let H=new Ze(new Di(.2,24),ct);H.position.set(q,se,.06),ye.add(H)}{let F=f(1.66,.1,x+.06,j,.03);F.position.set(0,m(80,50)[1],-x/2),ye.add(F)}let Ve=new ft;Ve.visible=!1;{let F=new Ze(new sn(.1,.09,.2,18),ne);F.position.y=0,Ve.add(F);let q=new Ze(new sn(.085,.085,.02,18),Le);q.position.y=.095,Ve.add(q);let se=new Ze(new mn(.06,.018,8,14),ne);se.position.set(.12,0,0),Ve.add(se),Ve.position.set(.1,-.34,.26),b.add(Ve)}let Tt={spider:{body:12658477,legs:1916830,hands:12658477,cape:null},thor:{body:4871790,legs:3883606,hands:9279139,cape:11739178},captain:{body:2312872,legs:2312872,hands:12658477,cape:null},iron:{body:11739178,legs:11739178,hands:14725168,cape:null},strange:{body:2903966,legs:2375552,hands:15255968,cape:11739178},superman:{body:2056150,legs:2056150,hands:2056150,cape:12658477},batman:{body:2764084,legs:2106154,hands:2106154,cape:1382172}},Je=new rt({color:12658477,roughness:.8,side:rn}),tt=f(1.7,1.25,.05,Je,.02);tt.position.set(0,.5,-x/2-.04),tt.visible=!1,M.add(tt);let ht=new ft;ht.visible=!1;{let F=f(.07,.5,.07,new rt({color:8014364}),.02);F.position.y=-.1,ht.add(F);let q=f(.4,.2,.2,new rt({color:9279139,metalness:.6,roughness:.3}),.03);q.position.y=.2,ht.add(q),ht.position.set(.1,-.3,.2),b.add(ht)}let Xe=new ft;Xe.visible=!1;{for(let[F,q,se]of[[.36,12658477,0],[.28,16777215,.012],[.2,12658477,.024],[.12,2312872,.036]]){let Y=new Ze(new sn(F,F,.03,28),new rt({color:q,roughness:.4,metalness:.2}));Y.rotation.x=Math.PI/2,Y.position.z=se,Xe.add(Y)}Xe.position.set(-.12,-.34,.26),L.add(Xe)}let vt=new Ht({color:16757575}),Mt=new Ze(new mn(.3,.025,8,28),vt),Ct=Mt.clone();Mt.visible=Ct.visible=!1,Mt.position.set(-.1,-.4,.2),Ct.position.set(.1,-.4,.2),L.add(Mt),b.add(Ct);let St=new Ht({color:16053492}),_t=new Ze(new sn(.012,.012,1.4,6),St);_t.visible=!1,_t.position.set(0,1.5,0),u.add(_t);let D=new rt({color:2106154}),At=new ft;At.visible=!1;for(let F of[-.5,.5]){let q=new Ze(new Ni(.16,.3,4),D);q.position.set(F,1.28,0),At.add(q)}M.add(At);let ot=new ft;ot.visible=!1,w.add(ot);for(let F of[29,131]){let[q,se]=m(F,50),Y=f(.4,.2,.05,new Ht({color:16777215}),.05);Y.position.set(q,se,.05),Y.rotation.z=(F<80?-1:1)*.22,ot.add(Y)}let E=-40,g=-60,B=240,W=184,Z=4,ce=new Ht({transparent:!0,depthWrite:!1}),he=new Ze(new mi(B*S,W*S),ce);{let[F,q]=m(E+B/2,g+W/2);he.position.set(F,q,.002)}he.visible=!1,w.add(he);let J=new Map,te=(F,q,se)=>{let Y=document.createElement("canvas");Y.width=B*Z,Y.height=W*Z;let H=Y.getContext("2d"),le=se&&se.lens,Ce=se&&se.face;for(let Me of F){if(le&&Me.c==="pup")continue;let qe=Me.m||[1,0,0,1,0,0];H.setTransform(Z,0,0,Z,-E*Z,-g*Z),Ce&&Me.sd==="L"?H.translate(Ce,4):Ce&&Me.sd==="R"?H.translate(-Ce,4):Ce&&Me.sd==="M"&&(H.translate(80,49),H.scale(.75,.75),H.translate(-80,-63)),H.transform(...qe);let Fe=new Path2D;Me.k==="p"?Fe.addPath(new Path2D(Me.d)):Me.k==="e"?Fe.ellipse(Me.g[0],Me.g[1],Me.g[2],Me.g[3],0,0,Math.PI*2):Fe.roundRect(Me.g[0],Me.g[1],Me.g[2],Me.g[3],Me.g[4]),H.globalAlpha=Me.o==null?1:Me.o;let lt=le&&Me.c==="ew";Me.f&&(H.fillStyle=lt?le[0]:Me.f==="LIDF"?q:Me.f,H.fill(Fe)),Me.s&&(H.strokeStyle=lt?le[1]:Me.s,H.lineWidth=lt?le[2]:Me.w,H.lineCap=Me.lc||"butt",H.lineJoin=Me.lj||"miter",H.setLineDash(Me.da||[]),H.stroke(Fe))}let Te=new hs(Y);return Te.colorSpace=Ot,Te.anisotropy=4,Te},fe=new Ye,Ie=F=>{let q=Ch[F];if(!q){he.visible=!1;return}let se=kl[Qe.costume];fe.copy(a.color).multiplyScalar(.88);let Y=se&&se.lid||"#"+fe.getHexString(Ot),H=F+Y+Qe.costume;if(!J.has(H)){if(J.size>=6){for(let le of J.values())le.dispose();J.clear()}J.set(H,te(q,Y,se))}ce.map!==J.get(H)&&(ce.map=J.get(H),ce.needsUpdate=!0),he.visible=!0},ue=new rt({color:16777215,roughness:.55,emissive:16777215,emissiveIntensity:.08}),pe=new rt({color:14275558,roughness:.6}),Re=(F,q)=>{let se=new ft;se.visible=!1;let Y=f(.27,.08,.46,ue,.035);Y.position.y=-.36,se.add(Y);let H=f(.28,.02,.47,pe,.01);H.position.y=-.345,se.add(H);let le=f(.28,.24,.32,ue,.1);le.position.y=-.52,se.add(le);let Ce=(Te,Me,qe,Fe,lt=0,en=0,et=.075)=>{let Dt=f(et,Fe,et,ue,et/2);return Dt.geometry.translate(0,-Fe/2,0),Dt.position.set(Te,Me,qe),Dt.rotation.set(en,0,lt),se.add(Dt),Dt};if(F==="index"||F==="gun")Ce(.03*q,-.62,.06,.24),F==="gun"?Ce(.13*q,-.48,.04,.16,q*2.4):Ce(.13*q,-.5,.08,.1,q*.6);else if(F==="palm")[-.1,-.035,.035,.1].forEach((Te,Me)=>Ce(Te*q,-.62,0,[.15,.19,.18,.13][Me],q*Te*.9,0,.065)),Ce(.15*q,-.48,.03,.13,q*1.1,0,.07);else if(F==="ok"){[0,.07,.13].forEach((Me,qe)=>Ce(Me*q,-.62,0,[.17,.16,.12][qe],q*Me,0,.065));let Te=new Ze(new mn(.065,.032,8,18),ue);Te.position.set(-.1*q,-.68,.06),Te.rotation.y=.4,se.add(Te)}else if(F==="pinch"){for(let[Te,Me]of[[-.06,.25],[0,0],[.06,-.25]])Ce(Te*q,-.6,.02,.17,Me*q,0,.07);Ce(.13*q,-.52,.06,.14,q*.5,.3,.07)}else{let Te=f(.26,.08,.26,ue,.04);Te.position.set(0,-.66,.02),se.add(Te)}return se},Ue=["index","gun","palm","ok","pinch","fist"],He={},I={};for(let F of Ue)b.add(He[F]=Re(F,1)),L.add(I[F]=Re(F,-1));let me={nope:["index","fist"],point:["index","fist"],guns:["gun","gun"],dab:["palm","palm"],shrug:["palm","palm"],vibe:["palm","palm"],facepalm:["palm","fist"],shh:["index","fist"],scheme:["pinch","pinch"],perfect:["ok","fist"],pat:["palm","fist"],sideeye:["fist","fist"],sweat:["palm","fist"],scuba:["palm","palm"]},ee=new rt({color:16777215,roughness:.6}),de=new rt({color:16747069,roughness:.6}),ve=new rt({color:14275558,roughness:.6}),ae=de.clone(),De={gv:"#ffffff",gs:"#d9d3e6",su:"#ffffff",ss:"#d9d3e6",sl:"#ff8a3d",so:"#ff8a3d"},Ae=_.map(F=>{let q=new ft;q.visible=!1;let se=f(.23,.13,.38,ee,.05);se.position.set(0,-.43,.05),q.add(se);let Y=f(.22,.08,.12,ve,.035);Y.position.set(0,-.44,.22),q.add(Y);let H=f(.16,.025,.04,ae,.01);H.position.set(0,-.36,.12),H.rotation.x=-.4,q.add(H);let le=f(.25,.04,.42,de,.015);return le.position.set(0,-.5,.05),q.add(le),F.add(q),q}),ut=new ft;ut.visible=!1,M.add(ut);{let F=new rt({color:2828083,roughness:.5}),q=new rt({color:16735631,roughness:.45}),se=new Ze(new mn(.88,.045,8,32,Math.PI),F);se.position.y=.62,se.scale.y=.72,ut.add(se);for(let Y of[-1,1]){let H=f(.14,.36,.36,q,.06);H.position.set(Y*.86,.6,0),ut.add(H);let le=f(.04,.26,.26,F,.02);le.position.set(Y*.94,.6,0),ut.add(le)}}let nt=new ft;nt.visible=!1,nt.position.set(0,1.2,0),M.add(nt);{let F=new rt({color:16763955,roughness:.3,metalness:.55,emissive:6965760,emissiveIntensity:.3}),q=new Ze(new sn(.3,.27,.12,24,1,!0),F);q.material.side=rn,nt.add(q);for(let Y=0;Y<5;Y++){let H=Y/5*Math.PI*2,le=new Ze(new Ni(.06,.16,4),F);le.position.set(Math.sin(H)*.28,.13,Math.cos(H)*.28),nt.add(le)}let se=new Ze(new qs(.045),new rt({color:16731501,roughness:.2,metalness:.2}));se.position.set(0,0,.29),nt.add(se)}let Pt=new ft;Pt.visible=!1,M.add(Pt);{let F=new rt({color:16747069,roughness:.45}),q=new rt({color:16777215,roughness:.5}),se=x/2+.06,[Y,H]=m(94,86),le=new Ze(new sn(.04,.04,.88-Y,10),F);le.rotation.z=Math.PI/2,le.position.set((Y+.88)/2,H,se),Pt.add(le);let Ce=new Ze(new sn(.045,.045,1.15,10),F);Ce.position.set(.88,H+.575,se),Pt.add(Ce);for(let Me of[.55,.85]){let qe=new Ze(new sn(.048,.048,.08,10),q);qe.position.set(.88,Me,se),Pt.add(qe)}let Te=new Ze(new sn(.06,.045,.1,10),F);Te.position.set(.88,H+1.17,se),Pt.add(Te)}let kt=new ft;kt.visible=!1,kt.position.set(0,-.6,.24),kt.rotation.x=1.5,b.add(kt);{let F=new rt({color:15986662,roughness:.9,side:rn}),q=new rt({color:8177919,roughness:.9}),se=f(.5,.36,.04,F,.02);se.rotation.z=.25,kt.add(se);for(let Y of[-.06,.07]){let H=f(.5,.035,.045,q,.01);H.position.y=Y,se.add(H)}}let po=F=>{let q=!!F,se=me[F]||[],Y=kl[Qe.costume]||De;ue.color.set(Y.gv),ue.emissive.set(Y.gv),pe.color.set(Y.gs),ee.color.set(Y.su),ve.color.set(Y.ss),ae.color.set(Y.sl),de.color.set(Y.so),q?Ie(F):he.visible=!1;for(let H of Ue)He[H].visible=q&&se[0]===H,I[H].visible=q&&se[1]===H;for(let H of Ae)H.visible=q;ut.visible=F==="vibe",nt.visible=F==="pat",Pt.visible=F==="scuba",kt.visible=F==="sweat"},Zt=(F,q)=>{if(F<=q[0][0])return q[0][1];for(let se=1;se<q.length;se++)if(F<=q[se][0]){let[Y,H]=q[se-1],[le,Ce]=q[se];return H+(Ce-H)*((F-Y)/(le-Y||1))}return q[q.length-1][1]},Rn=[0,1].map(F=>{let q=new ft,se=new Ze(new mn(.5,.045,10,36),new Ht({color:16754234})),Y=new Ze(new Di(.46,32),new Ht({color:2757712,transparent:!0,opacity:.9}));return q.add(Y,se),q.position.set(F?.85:-.85,.5,.2),q.scale.setScalar(.01),q.visible=!1,t.add(q),q}),Hn=f(.07,2.4,.05,new Ht({color:16775608}),.02);Hn.position.set(0,1.2,.3),Hn.visible=!1,t.add(Hn);let ki=new Ks(13625087,0,6);ki.position.set(0,1.2,2),t.add(ki);let bs=new rt({color:14725168,roughness:.35,metalness:.5}),Cn=new ft;Cn.visible=!1,u.add(Cn);let Gn=[-.72,-.36,.35,.72].map(F=>{let q=f(.21,.2,.34,bs,.04);return q.position.set(F,-.3,0),Cn.add(q),q}),ni=f(1.35,.62,.06,bs,.1);ni.position.set(0,.74,x/2+.05),Cn.add(ni);let Li=new Ze(new mn(.12,.03,8,20),new Ht({color:8317183}));Li.position.set(0,.28,x/2+.06),Cn.add(Li);let Ls=[-.72,.72].map(F=>{let q=new Ze(new Ni(.1,.5,10),new Ht({color:8317183}));return q.rotation.x=Math.PI,q.position.set(F,-.75,0),q.visible=!1,u.add(q),q}),Wn=new O,Kt=new Ze(new mi(1.6,1.14),new Ht({transparent:!0,depthWrite:!1}));Kt.position.set(0,.57,x/2+.004),Kt.visible=!1,M.add(Kt);let Xn="",ii={plain:null,emote:null},xn=new ft;xn.visible=!1,xn.scale.set(.7,.85,.85),xn.position.y=.12,u.add(xn);{let F=new rt({color:7028522,roughness:.7}),q=new rt({color:12597547,roughness:.6}),se=f(3,.2,.78,F,.09);se.position.set(0,-.58,0),xn.add(se);let Y=f(3.02,.05,.8,q,.02);Y.position.set(0,-.47,0),xn.add(Y);for(let H of[-1,1]){let le=f(.42,.16,.5,F,.06);le.position.set(H*1.6,-.5,0),le.rotation.z=H*.35,xn.add(le)}}let Qe={costume:"none",act:"idle",eyes:"sleep",dir:1,item:"",shades:"none",coffee:!1,think:"scratch"},ws=document.createElement("div");ws.id="item3d",Ss.appendChild(ws);let jt=new Ye,Es=new Ye,v=new Ye,C=()=>o.color.copy(Qe.costume!=="none"?v:Es),k=(F,q,se)=>F+(q-F)*se,V=()=>window.__vnow?window.__vnow():performance.now(),z=0,_e=0,be=V(),ge="",Se=!0,we=0,We=!1,je=["sit","look","hero","farm"];Ee();let dt="",wt={};window.__buddy3d={ok:!0,update(F){let q=JSON.stringify(F);if(q===dt)return;let se=wt;if(dt=q,wt=F,Se=!0,we=12,F.act&&(Qe.act=F.act),Qe.rest=!!F.rest,F.eyes&&N[F.eyes]&&(Qe.eyes=F.eyes),F.dir&&(Qe.dir=F.dir>0?1:-1),(F.color!==se.color||F.costume!==se.costume)&&(ge=null),F.color&&(jt.set(F.color),Qe.costume==="none"&&(a.color.copy(jt),a.emissive.copy(jt),o.emissive.copy(jt),T.color.copy(jt),T.emissive.copy(jt))),F.color2&&Es.set(F.color2),"costume"in F){Qe.costume=F.costume,F.costume==="none"?(Kt.visible=!1,Xn=""):Xn!==F.costume&&fr(F.costume);let H=Tt[F.costume];H?(a.color.setHex(H.body),a.emissive.setHex(H.body),v.setHex(H.hands),o.emissive.setHex(H.hands),T.color.setHex(H.legs),T.emissive.setHex(H.legs),H.cape&&Je.color.setHex(H.cape)):(a.color.copy(jt),a.emissive.copy(jt),o.emissive.copy(jt),T.color.copy(jt),T.emissive.copy(jt))}"shades"in F&&(Qe.shades=F.shades),"coffee"in F&&(Qe.coffee=F.coffee),F.think&&(Qe.think=F.think);let Y=["type","read","search","walk"].includes(Qe.act)?"":F.item||"";Y!==Qe.item&&(Qe.item=Y,ws.textContent=Y)},resize(){Se=!0;let F=Ss.clientWidth,q=Ss.clientHeight;An.setSize(F,q),n.aspect=F/q,n.updateProjectionMatrix()}}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
