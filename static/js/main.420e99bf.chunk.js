(this.webpackJsonpvideocallingweb=this.webpackJsonpvideocallingweb||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),i=n.n(o),r=n(4),a=n.n(r),s=(n(11),n(3)),l=n(5);var d={localVideoPlayer:{width:250,height:250,backgroundColor:"black"},remoteVideoPlayer:{width:350,height:350,backgroundColor:"yellow"}},u=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(""),a=Object(s.a)(r,2),u=a[0],j=a[1],b=Object(o.useRef)(null),f=Object(o.useRef)(null),O={video:!0},g=new RTCPeerConnection(null);return Object(o.useEffect)((function(){g.onicecandidate=function(e){e.candidate&&console.log(JSON.stringify(e.candidate))},g.oniceconnectionstatechange=function(e){console.log(e)},g.ontrack=function(e){Object(l.a)("remoteVideoRef"),f=e.streams[0],console.log(e.streams,"peer object on track")},navigator.mediaDevices.getUserMedia(O).then((function(e){b.current.srcObject=e,console.log(e),g.addTrack(e.getVideoTracks()[0])})).catch((function(e){return console.log(e,"error found")}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("video",{ref:b,autoPlay:!0,style:d.localVideoPlayer}),Object(c.jsx)("video",{ref:f,autoPlay:!0,style:d.remoteVideoPlayer}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){console.log("offer"),g.createOffer().then((function(e){console.log(JSON.stringify(e)),j(JSON.stringify(e)),g.setLocalDescription(e)}),(function(e){}))},children:"Offer"}),Object(c.jsx)("button",{onClick:function(){console.log("Answer"),g.createAnswer().then((function(e){console.log(JSON.stringify(e)),j(JSON.stringify(e)),g.setLocalDescription(e)}),(function(e){}))},children:"Answer"}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{onClick:function(){var e=JSON.parse(n);g.setRemoteDescription(new RTCSessionDescription(e))},children:"Set Remote Desc"}),Object(c.jsx)("button",{onClick:function(){var e=JSON.parse(n);g.addIceCandidate(new RTCIceCandidate(e))},children:"Add candidate"}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{children:u})]})};var j=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.420e99bf.chunk.js.map