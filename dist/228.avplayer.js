"use strict";(self.webpackChunkAVPlayer=self.webpackChunkAVPlayer||[]).push([[228],{5947:(e,a,t)=>{t.d(a,{A:()=>s});var r=t(1026);class s{constructor(){(0,r.A)(this,"type",-1),(0,r.A)(this,"onStreamAdd",void 0)}destroy(e){}}},3228:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var r=t(1026),s=t(1499),i=t(932),c=t(4624),n=t(9705),o=t(5947),d=t(4686),u=t(7837),f=t(1517),h=t(3939);const l={1:65541,2:69638,3:65557,6:65543,7:65542,10:86052,16:69664,17:69633,23:69664,32:69646,34:86037,49:86046,50:86046,56:73728,66:86068,69:69643,20:69643,64:69643,97:69635,98:69634,100:69643,105:69633,117:86079,131:86069,255:86018,273:86068,5632:86018,5634:86065,8192:86019};function R(e,a,t,r){if(e<=0||e>64)return 0;if(a)switch(e){case 32:return t?65556:65557;case 64:return t?65558:65559;default:return 0}else if(e+=7,r&1<<(e>>>=3)-1)switch(e){case 1:return 65540;case 2:return t?65537:65536;case 3:return t?65549:65548;case 4:return t?65545:65544;case 8:return t?65568:65567;default:return 0}else switch(e){case 1:return 65541;case 2:return t?65539:65538;case 3:return t?65551:65550;case 4:return t?65547:65546;default:return 0}}function p(e){switch(e){case 69649:return 2;case 69648:return 3;case 69647:case 69633:case 69632:case 69645:case 69638:return 4;default:return function(e){switch(e){case 86070:case 86071:case 69674:case 69644:case 69678:case 69651:case 69661:case 69677:case 69655:case 69664:case 69636:case 69675:case 69660:case 69646:case 69670:return 4;case 86089:case 86090:case 86091:case 86092:case 65543:case 65542:case 65571:case 65540:case 65563:case 65572:case 65541:case 81924:case 81926:return 8;case 65537:case 65566:case 65536:case 65554:case 65539:case 65538:return 16;case 65552:case 65549:case 65548:case 65564:case 65551:case 65550:return 24;case 65545:case 65544:case 65565:case 65547:case 65546:case 65556:case 65557:case 65570:case 65569:return 32;case 65558:case 65559:case 65568:case 65567:return 64;default:return 0}}(e)}}function w(e){return h.f[2](e)}function m(e){return w(e)<<8|w(e+1)}var M="src/avformat/formats/riff/iriff.ts";async function g(e,a,t){if(t<14)return c.z3("wav format size < 14",M,36),n.LR;i.M[15](a,1);const r=await e.readUint16();let s=await e.readUint16();const o=await e.readUint32();let f=8*await e.readUint32();const p=await e.readUint16();if(i.M[15](a+108,o),i.M[15](a+112,p),14===t?i.M[15](a+32,8):i.M[15](a+32,await e.readUint16()),65534===r?i.M[8](a+8,0):(i.M[8](a+8,r),i.M[15](a+4,function(e,a){let t=l[e];return t?(65541===t?t=R(a,!1,!1,-2):65557===t&&(t=R(a,!0,!1,0)),69633===t&&8===a&&(t=69676),t):0}(r,h.f[15](a+32)))),t>=18&&357!==r){let s=await e.readUint16();t-=18,s=Math.min(t,s),s>=22&&65534===r&&(await e.skip(22),s-=22,t-=22),s>0&&(i.M[20](a+12,(0,u.sY)(s)),i.M[15](a+16,s),await e.readBuffer(s,(0,d.JW)(h.f[20](a+12),s)),t-=s),t>0&&await e.skip(t)}else if(357===r&&t>=32){t-=4,i.M[20](a+12,(0,u.sY)(t)),i.M[15](a+16,t),await e.readBuffer(t,(0,d.JW)(h.f[20](a+12),t));const r=m(h.f[20](a+12)+4);if(i.M[15](a+108,m(w=h.f[20](a+12)+12)<<16|m(w+2)),s=0,f=0,t<8+20*r)return n.LR;for(let e=0;e<r;e++)s+=h.f[2](h.f[20](a+12)+(8+20*e+17))}var w;return i.M[17](a+24,BigInt(f)),h.f[15](a+108)<0?(c.z3(`Invalid sample rate: ${h.f[15](a+108)}`,M,116),n.LR):(86065===h.f[15](a+4)&&(s=0,i.M[15](a+108,0)),69643==h.f[15](a+4)&&h.f[15](a+108)&&i.M[15](a+32,(0|Number(0xffffffffn&h.f[17](a+24)))/h.f[15](a+108)),s!=h.f[15](a+140)&&(i.M[15](a+136,0),i.M[15](a+140,s),i.M[15](a+104,s)),0)}var S="src/avformat/formats/IWavFormat.ts";class B extends o.A{constructor(){super(),(0,r.A)(this,"type",9),(0,r.A)(this,"dataSize",void 0),(0,r.A)(this,"sampleCount",void 0),(0,r.A)(this,"pcmStartPos",void 0),(0,r.A)(this,"currentPts",void 0)}init(e){e.ioReader.setEndian(!1)}async readHeader(e){const a=await e.ioReader.readString(4);switch(a){case"RIFF":case"RF64":case"BW64":break;case"RIFX":e.ioReader.setEndian(!0);break;default:return c.z3("the file format is not wav",S,73),n.LR}await e.ioReader.skip(4);const t=await e.ioReader.readString(4);if("WAVE"!==t)return c.z3(`invalid start code ${t} in RIFF header`,S,83),n.LR;if("RF64"===a||"BW64"===a){if("ds64"!==await e.ioReader.readString(4))return n.LR;const a=await e.ioReader.readUint32();if(a<24)return n.LR;if(await e.ioReader.skip(8),this.dataSize=await e.ioReader.readUint64(),this.sampleCount=await e.ioReader.readUint64(),this.dataSize<0||this.sampleCount<0)return c.z3("negative data_size and/or sample_count in ds64",S,103),n.LR;await e.ioReader.skip(a-24)}const r=e.createStream(),i=await e.ioReader.fileSize();for(;e.ioReader.getPos()<i;){const a=await e.ioReader.readString(4),t=await e.ioReader.readUint32();if("fmt "===a){let a=await g(e.ioReader,r.codecpar[s.o9],t);if(a<0)return a}else if("data"===a){if(this.pcmStartPos=e.ioReader.getPos(),this.dataSize||(this.dataSize=BigInt(Math.floor(t))),this.pcmStartPos+this.dataSize===i)break;await e.ioReader.seek(this.pcmStartPos+this.dataSize)}else{if(this.pcmStartPos+this.dataSize===i)break;await e.ioReader.seek(e.ioReader.getPos()+BigInt(Math.floor(t)))}}return this.sampleCount||(this.sampleCount=(this.dataSize<<BigInt(3))/BigInt(r.codecpar.chLayout.nbChannels*p(r.codecpar.codecId))),r.timeBase.den=r.codecpar.sampleRate,r.timeBase.num=1,this.sampleCount&&(r.duration=this.sampleCount),this.currentPts=BigInt(0),await e.ioReader.seek(this.pcmStartPos),0}async readAVPacket(e,a){const t=e.streams.find((e=>e.codecpar.codecType=1));try{const r=1024*t.codecpar.chLayout.nbChannels*p(t.codecpar.codecId)>>>3,s=(0,u.sY)(r);return(0,f.NX)(a,s,r),i.M[17](a+16,this.currentPts),i.M[17](a+8,this.currentPts),i.M[17](a+56,e.ioReader.getPos()),await e.ioReader.readBuffer(r,(0,d.JW)(s,r)),i.M[15](a+32,t.index),i.M[15](a+76,t.timeBase.den),i.M[15](a+72,t.timeBase.num),this.currentPts+=BigInt(1024),0}catch(a){return-1048576!==e.ioReader.error&&c.z3(a.message,S,191),e.ioReader.error}}async seek(e,a,t,r){const s=e.ioReader.getPos();if(2&r){const i=await e.ioReader.fileSize();return i<=BigInt(0)?BigInt(n.E$):(t<BigInt(0)?t=BigInt(0):t>i&&(t=i),await e.ioReader.seek(t),4&r||(this.currentPts=(t-this.pcmStartPos<<BigInt(3))/BigInt(a.codecpar.chLayout.nbChannels*p(a.codecpar.codecId))),s)}{const r=this.pcmStartPos+(t*BigInt(a.codecpar.chLayout.nbChannels*p(a.codecpar.codecId))>>BigInt(3));return await e.ioReader.seek(r),this.currentPts=t,s}}getAnalyzeStreamsCount(){return 1}}}}]);