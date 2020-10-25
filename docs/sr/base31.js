/* Copyright 2007 TRANSLIT.CC. All rights reserved. All materials and code are protected by international copyright law. */
var t={
txt:document.getElementById("txt"),
mAuto:true,
mBil:false,
mPril:true,
mLng1:"en",
mLng2:"bg",
mTag:false,iTag:false,mUp:true,mTa:3,
mTags:true,
mCaps:false,
mEx:new Date("January 1, 2010 00:00:00"),
mRt:3*20000,mSet:0,
mSets:[['Universal','Our own compilation','<div><a href="javascript:t.n(2)">а</a></div><div>a</div><div><a href="javascript:t.n(20)">й</a></div><div>j</div><div><a href="javascript:t.n(38)">т</a></div><div>t</div><div><a href="javascript:t.n(56)">ь</a></div><div>y</div><div><a href="javascript:t.n(4)">б</a></div><div>b</div><div><a href="javascript:t.n(22)">к</a></div><div>k</div><div><a href="javascript:t.n(40)">у</a></div><div>u</div><div><a href="javascript:t.n(58)">ю</a></div><div class="sm2"><strong>ju</strong>,<br/>yu,ü</div><div><a href="javascript:t.n(6)">в</a></div><div class="sm1"><strong>v</strong>,w</div><div><a href="javascript:t.n(24)">л</a></div><div>l</div><div><a href="javascript:t.n(42)">ф</a></div><div>f</div><div><a href="javascript:t.n(60)">я</a></div><div class="sm2"><strong>ja</strong>,<br/>ya,q</div><div><a href="javascript:t.n(8)">г</a></div><div>g</div><div><a href="javascript:t.n(26)">м</a></div><div>m</div><div><a href="javascript:t.n(44)">х</a></div><div class="sm1"><strong>h</strong>,x</div><div><a href="javascript:t.n(62)">ѣ</a></div><div></div><div><a href="javascript:t.n(10)">д</a></div><div>d</div><div><a href="javascript:t.n(28)">н</a></div><div>n</div><div><a href="javascript:t.n(46)">ц</a></div><div>c</div><div><a href="javascript:t.n(64)">ѫ</a></div><div></div><div><a href="javascript:t.n(12)">е</a></div><div>e</div><div><a href="javascript:t.n(30)">о</a></div><div>o</div><div><a href="javascript:t.n(48)">ч</a></div><div>ch</div><div><a href="javascript:t.c(&quot;№&quot;)">№</a></div><div>#</div><div><a href="javascript:t.n(14)">ж</a></div><div>zh</div><div><a href="javascript:t.n(32)">п</a></div><div>p</div><div><a href="javascript:t.n(50)">ш</a></div><div>sh</div><div><a href="javascript:t.c(%22§%22)">§</a></div><div></div><div><a href="javascript:t.n(16)">з</a></div><div>z</div><div><a href="javascript:t.n(34)">р</a></div><div>r</div><div><a href="javascript:t.n(52)">щ</a></div><div class="sm1">sht</div><div><a href="javascript:t.c(&quot;«&quot;)">«</a></div><div></div><div><a href="javascript:t.n(18)">и</a></div><div>i</div><div><a href="javascript:t.n(36)">с</a></div><div>s</div><div><a href="javascript:t.n(54)">ъ</a></div><div>&quot;</div><div><a href="javascript:t.c(&quot;»&quot;)">»</a></div><div></div>',{A:"А",a:"а",B:"Б",b:"б",V:"В",v:"в",W:"В",w:"в",G:"Г",g:"г",D:"Д",d:"д",E:"Е",e:"е","ЗХ":"Ж","Зх":"Ж","зх":"ж",Z:"З",z:"з",I:"И",i:"и",J:"Й",j:"й",K:"К",k:"к",L:"Л",l:"л",M:"М",m:"м",N:"Н",n:"н",O:"О",o:"о",P:"П",p:"п",R:"Р",r:"р",S:"С",s:"с",T:"Т",t:"т",U:"У",u:"у",F:"Ф",f:"ф",H:"Х",h:"х",X:"Х",x:"х",C:"Ц",c:"ц","ЦХ":"Ч","Цх":"Ч","цх":"ч","СХ":"Ш","Сх":"Ш","сх":"ш","ШТ":"Щ","Шт":"Щ","шт":"щ","ъъ":"Ъ","\u0022":"ъ",Y:"Ь",y:"ь",ЙУ:"Ю",Йу:"Ю",йу:"ю",ЬУ:"Ю",Ьу:"Ю",ьу:"ю",Ü:"Ю",ü:"ю",ЙА:"Я",Йа:"Я",йа:"я",ЬА:"Я",Ьа:"Я",ьа:"я",Q:"Я",q:"я",Ѫ:"Ѫ",ѫ:"ѫ","#":"№"},{А:"A",а:"a",Б:"B",б:"b",В:"V",в:"v",Г:"G",г:"g",Д:"D",д:"d",Е:"E",е:"e",Ж:"Zh",ж:"zh",З:"Z",з:"z",И:"I",и:"i",Й:"J",й:"j",К:"K",к:"k",Л:"L",л:"l",М:"M",м:"m",Н:"N",н:"n",О:"O",о:"o",П:"P",п:"p",Р:"R",р:"r",С:"S",с:"s",Т:"T",т:"t",У:"U",у:"u",Ф:"F",ф:"f",Х:"H",х:"h",Ц:"C",ц:"c",Ч:"Ch",ч:"ch",Ш:"Sh",ш:"sh",Щ:"Sht",щ:"sht",Ъ:"\"\"",ъ:"\"",Ь:"Y",ь:"y",Ю:"Ju",ю:"ju",Я:"Ja",я:"Ja",Ѣ:"E",ѣ:"ѣ",Ѫ:"Ѫ",ѫ:"ѫ","№":"#"}]],
tlng:function(){
t.mPril=!t.mPril;
t.sc("mode_primlang",t.mPril,t.mEx);
var lst = document.getElementsByTagName("div");
for (var i = 0; i < lst.length; i++) {
if ((lst[i].className == "en")&&t.mPril) lst[i].style.display="";
else if ((lst[i].className == "en")&&!t.mPril) lst[i].style.display="none";
if ((lst[i].className == "bg")&&t.mPril) lst[i].style.display="none";
else if ((lst[i].className == "bg")&&!t.mPril) lst[i].style.display="";
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
ldc:function(){document.write('')},
trans:function(d,q){document.getElementById("dir").value=d;document.getElementById("src").value=t.u2k(q);document.trans.submit();},
u2k:function(u){var k="",n,d=-848,t=128;for(i=0;i<u.length;i++){n=u.charCodeAt(i);if(n>t){n=n+d;k=k+"&#"+n+";";}else k=k+u.charAt(i);}return k;},
dmr:function(){
var advlist = document.getElementById("advlist");
if(advlist.selectedIndex==0)return;
var txt = document.getElementById("txt");
if(advlist.selectedIndex==1){var spl=new spellChecker(txt);spl.openChecker();advlist.selectedIndex=0;return;}
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
case 2:window.open("http://www.google.bg/custom?q="+encodeURI(query)+"&sa=Search&client=pub-0113441673686829&forid=1&channel=7766236690&ie=UTF-8&oe=UTF-8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A77%3BLW%3A176%3BL%3Ahttp%3A%2F%2Fwww.google.bg%2Fintl%2Fbg%2Fimages%2FLogo_60wht.gif%3BS%3Ahttp%3A%2F%2Fwww.google.bg%2F%3BLP%3A1%3BFORID%3A1&hl=bg");break;
}
advlist.selectedIndex = 0;
}
}