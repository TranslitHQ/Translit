/* Copyright 2007 TRANSLIT.CC. All rights reserved. All materials and code are protected by international copyright law. */
var t={
txt:document.getElementById("txt"),
mAuto:true,
mBil:false,
mPril:true,
mLng1:"en",
mLng2:"ka",
mTag:false,iTag:false,mUp:true,mTa:1,
mTags:true,
mCaps:false,
mEx:new Date("January 1, 2010 00:00:00"),
mRt:5*20000,mSet:0,
mSets:[['Universal','Our own compilation','<div><a href="javascript:t.n(1)">ა</a></div><div>a</div><div><a href="javascript:t.n(10)">კ</a></div><div>k&apos;</div><div><a href="javascript:t.n(19)">ტ</a></div><div>t&apos;</div><div><a href="javascript:t.n(28)">ძ</a></div><div>dz</div><div><a href="javascript:t.n(2)">ბ</a></div><div>b</div><div><a href="javascript:t.n(11)">ლ</a></div><div>l</div><div><a href="javascript:t.n(20)">უ</a></div><div>u</div><div><a href="javascript:t.n(29)">წ</a></div><div>ts&apos;</div><div><a href="javascript:t.n(3)">გ</a></div><div>g</div><div><a href="javascript:t.n(12)">მ</a></div><div>m</div><div><a href="javascript:t.n(21)">ფ</a></div><div>p,f</div><div><a href="javascript:t.n(30)">ჭ</a></div><div>ch&apos;</div><div><a href="javascript:t.n(4)">დ</a></div><div>d</div><div><a href="javascript:t.n(13)">ნ</a></div><div>n</div><div><a href="javascript:t.n(22)">ქ</a></div><div>k</div><div><a href="javascript:t.n(31)">ხ</a></div><div>kh,x</div><div><a href="javascript:t.n(5)">ე</a></div><div>e</div><div><a href="javascript:t.n(14)">ო</a></div><div>o</div><div><a href="javascript:t.n(23)">ღ</a></div><div>gh</div><div><a href="javascript:t.n(32)">ჯ</a></div><div>j</div><div><a href="javascript:t.n(6)">ვ</a></div><div>v,w</div><div><a href="javascript:t.n(15)">პ</a></div><div>p&apos;</div><div><a href="javascript:t.n(24)">ყ</a></div><div>q</div><div><a href="javascript:t.n(33)">ჰ</a></div><div>h</div><div><a href="javascript:t.n(7)">ზ</a></div><div>z</div><div><a href="javascript:t.n(16)">ჟ</a></div><div>zh</div><div><a href="javascript:t.n(25)">შ</a></div><div>sh</div><div><a href="javascript:t.c(%22—%22)">—</a></div><div>--</div><div><a href="javascript:t.n(8)">თ</a></div><div>t</div><div><a href="javascript:t.n(17)">რ</a></div><div>r</div><div><a href="javascript:t.n(26)">ჩ</a></div><div>ch</div><div><a href="javascript:t.c(&quot;«&quot;)">«</a></div><div></div><div><a href="javascript:t.n(9)">ი</a></div><div>i</div><div><a href="javascript:t.n(18)">ს</a></div><div>s</div><div><a href="javascript:t.n(27)">ც</a></div><div>ts,c</div><div><a href="javascript:t.c(&quot;»&quot;)">»</a></div><div></div>',{a:"ა",b:"ბ",g:"გ",d:"დ",e:"ე",v:"ვ",w:"ვ",z:"ზ",t:"თ",i:"ი","ქ\u0027":"კ",l:"ლ",m:"მ",n:"ნ",o:"ო","ფ\u0027":"პ","ზჰ":"ჟ",r:"რ",s:"ს","თ\u0027":"ტ",u:"უ",p:"ფ",f:"ფ",k:"ქ","გჰ":"ღ",q:"ყ","სჰ":"შ","ცჰ":"ჩ","თს":"ც",c:"ც","დზ":"ძ","ც\u0027":"წ","ჩ\u0027":"ჭ","ქჰ":"ხ",x:"ხ",j:"ჯ",h:"ჰ","--":"—"},{ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k'",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p'",ჟ:"zh",რ:"r",ს:"s",ტ:"t'",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts'",ჭ:"ch'",ხ:"kh",ჯ:"j",ჰ:"h"}]],
tlng:function(){
t.mPril=!t.mPril;
t.sc("mode_primlang",t.mPril,t.mEx);
var lst = document.getElementsByTagName("div");
for (var i = 0; i < lst.length; i++) {
if ((lst[i].className == "en")&&t.mPril) lst[i].style.display="";
else if ((lst[i].className == "en")&&!t.mPril) lst[i].style.display="none";
if ((lst[i].className == "ka")&&t.mPril) lst[i].style.display="none";
else if ((lst[i].className == "ka")&&!t.mPril) lst[i].style.display="";
}
t.fc();
},
c:function(x,n){
var txt = document.getElementById("txt");
if (txt.selectionStart>=0) {
var sTop=txt.scrollTop;
var pStart = txt.selectionStart;
var pEnd = txt.selectionEnd;
if(n>1) {
pStart = pStart - n + 1;
}
txt.value = txt.value.substring(0, pStart) + x + txt.value.substring(pEnd, txt.value.length);
txt.selectionStart = pStart + x.length;
txt.selectionEnd = txt.selectionStart;
txt.scrollTop=sTop;
} else if (document.selection) {
if(n>1){
txt.focus();
var sel = document.selection.createRange();
sel.moveStart('character', 1 - n);
sel.text = x;
sel.select();
} else {
txt.focus();
var range = document.selection.createRange();
range.text = x;
range.select();
}
} else {
txt.value += x;
}
txt.focus();
},
n:function(x){if (t.mCaps) {x--;} var cnt = 0;var chr;for (i in t.mSets[t.mSet][4]) {cnt++;if (cnt == x) chr = i;};
var txt = document.getElementById("txt");
if (document.selection) {
txt.focus();
var sel = document.selection.createRange();
sel.text = chr;
sel.select();
} else if (txt.selectionStart) {
var sTop=txt.scrollTop;
var pStart = txt.selectionStart;
var pEnd = txt.selectionEnd;
txt.value = txt.value.substring(0, pStart) + chr + txt.value.substring(pEnd, txt.value.length);
txt.selectionStart = pStart + 1;
txt.selectionEnd = pStart + 1;
txt.scrollTop=sTop;
} else {txt.value += chr;}
txt.focus();
},
fc:function(){document.getElementById("txt").focus();},
sw:function(){var cdl=document.getElementById("codelist");if(t.mSet==cdl.selectedIndex)return;document.getElementById("work-right-body-content").innerHTML=t.mSets[cdl.selectedIndex][2];t.mSet=cdl.selectedIndex;t.sc("mode_charset",t.mSet,t.mEx);},
sc:function(nm,vl,ex){document.cookie=nm+"="+escape(vl)+((ex)?";expires="+ex.toGMTString():"");},
tacf:function(){var tac=document.getElementById("togConv");if(t.mAuto){tac.className="off";tac.title="TURN ON automatic conversion (or press ESC)";}else{tac.className="on";tac.title="TURN OFF automatic conversion (or press ESC)";}t.mAuto=!t.mAuto;t.sc("mode_autoconvert",t.mAuto,t.mEx);t.fc();},
tstf:function(){var tst=document.getElementById("togTags");if(t.mTags){tst.className="off";tst.title="TURN ON detection of HTML and BB tags";}else{tst.className="on";tst.title="TURN OFF detection of HTML and BB tags";}t.mTags=!t.mTags;t.sc("mode_skiptags",t.mTags,t.mEx);t.fc();},
cntf:function(e){
if(!e)var e=window.event;
if(e.type=="keydown"&&e.keyCode==27){if(e.preventDefault){e.preventDefault();}else{e.returnValue = false;}t.tacf();}
if(e.type=="keyup"&&e.keyCode==27)t.fc();
var txt = document.getElementById("txt");
if(txt.value.length)txt.className="tx1";else txt.className="tx0";
document.getElementById("txtcount").innerHTML=document.getElementById("txt").value.length;},
tcps:function(){if(t.mCaps){document.getElementById("work-right-body-content").style.textTransform="none";document.getElementById("togCaps").className="off";}else{document.getElementById("work-right-body-content").style.textTransform="uppercase";document.getElementById("togCaps").className="on";}t.mCaps=!t.mCaps;t.fc();},
go:function(dir){var txt=document.getElementById("txt");if(txt.value=="")return;var text="";
if (txt.selectionStart >= 0) {
var sTop=txt.scrollTop;
var s = txt.selectionStart;
var e = txt.selectionEnd;
if (s != e) {
var l = txt.value.substring(0, s);
var r = txt.value.substring(e, txt.value.length);
text = (dir)?t._gob(txt.value.substring(s, e)):t._gof(txt.value.substring(s, e));
txt.value = l + text + r;
txt.selectionStart = s;
txt.selectionEnd = s + text.length;
} else {var l = txt.value.substring(0, s);l = (dir)?t._gob(l):t._gof(l);txt.value = (dir)?t._gob(txt.value):t._gof(txt.value);txt.selectionStart = txt.selectionEnd = l.length;}
txt.scrollTop=sTop;
} 
else if (document.selection) {
txt.focus();
var sel = document.selection.createRange();
if (sel.text) {sel.text = (dir)?t._gob(sel.text):t._gof(sel.text);}
else txt.value = (dir)?t._gob(txt.value):t._gof(txt.value);
} 
else txt.value = (dir)?t._gob(txt.value):t._gof(txt.value);
txt.focus();
},
_gof:function(text){
var cy = "";
var prev = "";
t.iTag=false;
var ctr=false;
if(t.mTags&&(text.search(/[\[\]<>]/)!=-1)) ctr = true;
for (i=0;i<text.length;i++){
if (ctr){
if (text.substr(i,1)=="["||text.substr(i,1)=="<") {t.iTag=true;cy += text.substr(i,1);prev = text.substr(i,1);continue;}
else if (text.substr(i,1)=="]"||text.substr(i,1)==">") {t.iTag=false;cy += text.substr(i,1);prev = text.substr(i,1);continue;}
if(t.iTag) {cy += text.substr(i,1);prev = text.substr(i,1);continue;}
}
var rusText = t.mSets[t.mSet][3][text.substr(i,1)];
if(!rusText)rusText=text.substr(i,1);
var rusDuo = t.mSets[t.mSet][3][prev + rusText];
if (rusDuo && prev) {cy = cy.substr(0,cy.length-1) + rusDuo;prev = rusDuo;}
else {cy += rusText;
prev = rusText;}}
return cy;},
_gob:function(text){
var tr = "";
for (i=0;i<text.length;i++)
{if (t.mSets[t.mSet][4][text.substr(i,1)]) tr += t.mSets[t.mSet][4][text.substr(i,1)];
else tr += text.substr(i,1);}
return tr;},
ini:function(){var txt=document.getElementById("txt");txt.onfocus=txt.onchange=txt.onkeyup=txt.onkeydown=t.cntf;txt.onkeypress=t.cnv;t.fc();t.ldc();},
cnv:function(e){if(!e)var e=window.event;if(!t.mAuto)return true;var k;
if(e.which)k=e.which;
else if(e.clientX)k=e.keyCode;
if(k<34||!k||e.altKey||e.ctrlKey)return true;
var keychar = String.fromCharCode(k);
if (t.mTags&&(keychar=="["||keychar=="<")) {t.mTag=true;return true;}
if (t.mTags&&(keychar=="]"||keychar==">")) {t.mTag=false;return true;}
if (t.mTags&&t.mTag)return true;
var pos = "", prev1 = "";
var txt = document.getElementById("txt");
if (txt.selectionStart>=0) {
pos = txt.selectionStart;
prev1 = txt.value.charAt(pos-1);
}else if (document.selection) {
txt.focus();
var sel = document.selection.createRange();
var oldl = sel.text.length;
sel.moveStart('character',-1);
if (sel.text.length > oldl) prev1 = sel.text.charAt(0);
}
var rusText = t.mSets[t.mSet][3][keychar];
if (!rusText) rusText = keychar;
var rusDuo = t.mSets[t.mSet][3][prev1 + rusText];
if (rusDuo && prev1) {
t.c(rusDuo,2);
return false;
} else if (rusText) {
t.c(rusText);
return false;
} else {
return true;
}
},
ldc:function(){document.write('<img src="http://whos.amung.us/widget/translit.png" width="0" height="0" border="0" alt=""/>')},
trans:function(d,q){document.getElementById("dir").value=d;document.getElementById("src").value=t.u2k(q);document.trans.submit();},
u2k:function(u){var k="",n,d=-848,t=128;for(i=0;i<u.length;i++){n=u.charCodeAt(i);if(n>t){n=n+d;k=k+"&#"+n+";";}else k=k+u.charAt(i);}return k;},
dmr:function(){
var advlist = document.getElementById("advlist");
if(advlist.selectedIndex==0)return;
var txt = document.getElementById("txt");
var query,big=false;
if (txt.selectionStart>=0) {
if (txt.selectionStart != txt.selectionEnd) {
query = txt.value.substring(txt.selectionStart, txt.selectionEnd);
} else query = txt.value;
} else if (document.selection) {
txt.focus();
var sel = document.selection.createRange();
if (sel.text != "") query = sel.text;
else query = txt.value;
} else query = txt.value;
query=query.replace(/^\s+|\s+$/g,"");
if(query.indexOf(" ")!=-1)big=true;
switch(advlist.selectedIndex){
case 1:window.open("http://www.google.ge/custom?q="+encodeURI(query)+"&sa=Search&client=pub-0113441673686829&forid=1&channel=7766236690&ie=UTF-8&oe=UTF-8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A77%3BLW%3A176%3BL%3Ahttp%3A%2F%2Fwww.google.ge%2Fintl%2Fka%2Fimages%2FLogo_60wht.gif%3BS%3Ahttp%3A%2F%2Fwww.google.ge%2F%3BLP%3A1%3BFORID%3A1&hl=ka");break;
}
advlist.selectedIndex = 0;
}
}