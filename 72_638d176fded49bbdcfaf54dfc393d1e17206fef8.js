webpackJsonp([72],{526:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(81);t.default={op:function(a,t){var e;return e=r.v(a),r.y(e,t.HOG.step,"visualize")},tick:function(a,t){var e=t.canvas,s=t.params,n=t.operation,p=t.output,o=t.session,u=n.shape[1],v=n.shape[0],i=s.HOG.step,c=s.HOG.step/2;o.runOp(n,a,p),r.m(e,"rgb(0, 0, 0)");for(var f=0;f<u/3;f+=1)for(var m=0;m<v/3;m+=1){for(var O=1/0,g=-1/0,h=0;h<9;h+=1){var l=~~(h/3),b=h-3*l,d=p.get(3*m+l,3*f+b,0);d<O&&(O=d),d>g&&(g=d)}for(var G=0;G<9;G+=1){var H=~~(G/3),M=G-3*H,k=(p.get(3*m+H,3*f+M,0)-O)/(g-O),y=p.get(3*m+H,3*f+M,1)+Math.PI/20,P=Math.sin(y),_=Math.cos(y),j=f*i+c,w=m*i+c,x=f*i-j,z=m*i+c-w,I=(f+1)*i-j,J=(m+1)*i-c-w,S=x*_-z*P+j,q=I*P+J*_+w,A=I*_-J*P+j,B=x*P+z*_+w;r.k(e,[A,B,S,q],"rgba(255, 255, 255, "+k/4+")")}}},params:{HOG:{step:{name:"Step",type:"constant",min:1,max:30,step:1,default:20}}}}}});