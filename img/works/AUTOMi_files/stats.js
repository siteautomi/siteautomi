google.maps.__gjsload__('stats', function(_){var BY=function(){this.b=new _.Mk},CY=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.Fn;c+=a.en});return c?b/c:0},DY=function(a,b,c){var d=[];_.Gj(a,function(a,c){d.push(c+b+a)});return d.join(c)},EY=function(a){var b={};_.Gj(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return DY(b,":",",")},FY=function(){var a;_.Bf[35]?a=_.Q(_.uf(_.T),11):a=_.gr;var b=window.document;this.l=_.ui;this.f=a+"/maps/gen_204";this.j=b},GY=function(a,b,
c,d){var e={};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},HY=function(a,b,c,d){var e=_.P(_.T,0,1);this.m=a;this.B=b;this.l=e;this.f=c;this.j=d;this.b=new _.Mk;this.A=_.Ua()},JY=function(a,b,c,d,e){var f=_.P(_.T,23,500);var g=_.P(_.T,22,2);this.D=a;this.G=b;this.I=f;this.l=g;this.B=c;this.m=d;this.A=e;this.f=new _.Mk;this.b=0;this.j=_.Ua();IY(this)},IY=function(a){window.setTimeout(function(){KY(a);
IY(a)},Math.min(a.I*Math.pow(a.l,a.b),2147483647))},KY=function(a){var b=GY(a.G,a.B,a.m,a.A);b.t=a.b+"-"+(_.Ua()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Nl()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},LY=function(a,b,c,d,e){this.A=a;this.B=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},MY=function(a,b,c){var d=_.ii;this.j=a;_.M.bind(this.j,"set_at",this,this.l);_.M.bind(this.j,"insert_at",this,this.l);this.A=b;this.B=d;this.m=c;this.f=0;this.b={};this.l()},NY=
function(){this.j=_.Q(_.T,6);this.B=_.Q(_.T,16);this.b=new FY;_.hi&&new MY(_.hi,(0,_.y)(this.b.b,this.b),!!this.j);var a=_.Q(new _.pf(_.T.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.A={};this.m={};this.I={};this.aa=_.P(_.T,0,1);_.ti&&(this.l=new JY(this.b,this.D,this.aa,this.j,this.B))};BY.prototype.f=function(a,b,c){this.b.set(_.Oc(a),{Fn:b,en:c})};
FY.prototype.b=function(a,b){b=b||{};var c=_.Tj().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=EY(b);a=DY(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.w.__gm_captureCSI)&&b(a)};
HY.prototype.D=function(a,b){b=_.r(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.y)(function(){var a=GY(this.B,this.l,this.f,this.j);a.t=_.Ua()-this.A;var b=this.b;_.Nk(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.f[g]}_.cv(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};JY.prototype.register=function(a,b){this.f.set(a,b)};LY.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.zv(this,this.G,500))};
LY.prototype.G=function(){for(var a=GY(this.B,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.wl();this.b.length=0;this.A.b({ev:"api_mapft"},a)};MY.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.Jm;a=a.timestamp-this.B;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.A({ev:"api_services"},c)}}};NY.prototype.ma=function(a){a=_.Oc(a);this.G[a]||(this.G[a]=new LY(this.b,this.D,this.aa,this.j,this.B));return this.G[a]};NY.prototype.lb=function(a){a=_.Oc(a);this.A[a]||(this.A[a]=new HY(this.b,this.D,this.j,this.B));return this.A[a]};NY.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.Aw,this.l.register(a,function(){return b.pb()}));var b=this.m[a];return b}};
NY.prototype.da=function(a){if(this.l){this.I[a]||(this.I[a]=new BY,this.l.register(a,function(){return CY(b)}));var b=this.I[a];return b}};var OY=new NY;_.fe("stats",OY);});
