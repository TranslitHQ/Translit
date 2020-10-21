/* Copyright 2007 TRANSLIT.CC. All rights reserved. All materials and code are protected by international copyright law. */
var t={
txt:document.getElementById("txt"),
mAuto:true,
mBil:false,
mPril:true,
mLng1:"en",
mLng2:"hy",
mTag:false,iTag:false,mUp:true,mTa:2,
mTags:true,
mCaps:false,
mEx:new Date("January 1, 2010 00:00:00"),
mRt:4*20000,mSet:0,
mSets:[['&nbsp;Eastern&nbsp;','Eastern Armenian','<div><a href="javascript:t.n(2)">ա</a></div><div>a</div><div><a href="javascript:t.n(22)">ի</a></div><div>i</div><div><a href="javascript:t.n(42)">յ</a></div><div>y</div><div><a href="javascript:t.n(62)">տ</a></div><div>t</div><div><a href="javascript:t.n(4)">բ</a></div><div>b</div><div><a href="javascript:t.n(24)">լ</a></div><div>l</div><div><a href="javascript:t.n(44)">ն</a></div><div>n</div><div><a href="javascript:t.n(64)">ր</a></div><div>r</div><div><a href="javascript:t.n(6)">գ</a></div><div>g</div><div><a href="javascript:t.n(26)">խ</a></div><div>x</div><div><a href="javascript:t.n(46)">շ</a></div><div>sh</div><div><a href="javascript:t.n(66)">ց</a></div><div>c</div><div><a href="javascript:t.n(8)">դ</a></div><div>d</div><div><a href="javascript:t.n(28)">ծ</a></div><div>c&#39;</div><div><a href="javascript:t.n(48)">ո</a></div><div>o</div><div><a href="javascript:t.n(68)">ւ</a></div><div>w</div><div><a href="javascript:t.n(10)">ե</a></div><div>e</div><div><a href="javascript:t.n(30)">կ</a></div><div>k</div><div><a href="javascript:t.n(50)">չ</a></div><div>ch</div><div><a href="javascript:t.n(70)">փ</a></div><div>p&#39;</div><div><a href="javascript:t.n(12)">զ</a></div><div>z</div><div><a href="javascript:t.n(32)">հ</a></div><div>h</div><div><a href="javascript:t.n(52)">պ</a></div><div>p</div><div><a href="javascript:t.n(72)">ք</a></div><div>q</div><div><a href="javascript:t.n(14)">է</a></div><div>e&#39;</div><div><a href="javascript:t.n(34)">ձ</a></div><div>d&#39;</div><div><a href="javascript:t.n(54)">ջ</a></div><div>j</div><div><a href="javascript:t.n(74)">օ</a></div><div>o&#39;</div><div><a href="javascript:t.n(16)">ը</a></div><div>y&#39;</div><div><a href="javascript:t.n(36)">ղ</a></div><div>gh</div><div><a href="javascript:t.n(56)">ռ</a></div><div>r&#39;</div><div><a href="javascript:t.n(76)">ֆ</a></div><div>f</div><div><a href="javascript:t.n(18)">թ</a></div><div>t&#39;</div><div><a href="javascript:t.n(38)">ճ</a></div><div>tw</div><div><a href="javascript:t.n(58)">ս</a></div><div>s</div><div><a href="javascript:t.n(78)">ու</a></div><div>u</div><div><a href="javascript:t.n(20)">ժ</a></div><div>jh</div><div><a href="javascript:t.n(40)">մ</a></div><div>m</div><div><a href="javascript:t.n(60)">վ</a></div><div>v</div><div><a href="javascript:t.c(&quot;և&quot;)">և</a></div><div>&amp;</div>',{A:"Ա",a:"ա",B:"Բ",b:"բ",G:"Գ",g:"գ",D:"Դ",d:"դ",E:"Ե",e:"ե",Z:"Զ",z:"զ","Ե'":"Է","ե'":"է","Յ'":"Ը","յ'":"ը","Տ'":"Թ","տ'":"թ","ՋՀ":"Ժ","Ջհ":"Ժ","ջհ":"ժ",I:"Ի",i:"ի",L:"Լ",l:"լ",X:"Խ",x:"խ","Ց'":"Ծ","ց'":"ծ",K:"Կ",k:"կ",H:"Հ",h:"հ","Դ'":"Ձ","դ'":"ձ","ԳՀ":"Ղ","Գհ":"Ղ","գհ":"ղ","ՏՒ":"Ճ","Տւ":"Ճ","տւ":"ճ",M:"Մ",m:"մ",Y:"Յ",y:"յ",N:"Ն",n:"ն","ՍՀ":"Շ","Սհ":"Շ","սհ":"շ",O:"Ո",o:"ո","ՑՀ":"Չ","Ցհ":"Չ","ցհ":"չ",P:"Պ",p:"պ",J:"Ջ",j:"ջ","Ր'":"Ռ","ր'":"ռ",S:"Ս",s:"ս",V:"Վ",v:"վ",T:"Տ",t:"տ",R:"Ր",r:"ր",C:"Ց",c:"ց",W:"Ւ",w:"ւ","Պ'":"Փ","պ'":"փ",Q:"Ք",q:"ք","Ո'":"Օ","ո'":"օ",F:"Ֆ",f:"ֆ",U:"ՈՒ",u:"ու","&":"և"},{Ա:"A",ա:"a",Բ:"B",բ:"b",Գ:"G",գ:"g",Դ:"D",դ:"d",Ե:"E",ե:"e",Զ:"Z",զ:"z",Է:"E'",է:"e'",Ը:"Y'",ը:"y'",Թ:"T'",թ:"t'",Ժ:"Jh",ժ:"jh",Ի:"I",ի:"i",Լ:"L",լ:"l",Խ:"X",խ:"x",Ծ:"C'",ծ:"c'",Կ:"K",կ:"k",Հ:"H",հ:"h",Ձ:"D'",ձ:"d'",Ղ:"Gh",ղ:"gh",Ճ:"Tw",ճ:"tw",Մ:"M",մ:"m",Յ:"Y",յ:"y",Ն:"N",ն:"n",Շ:"Sh",շ:"sh",Ո:"O",ո:"o",Չ:"Ch",չ:"ch",Պ:"P",պ:"p",Ջ:"J",ջ:"j",Ռ:"R'",ռ:"r'",Ս:"S",ս:"s",Վ:"V",վ:"v",Տ:"T",տ:"t",Ր:"R",ր:"r",Ց:"C",ց:"c",Ւ:"W",ւ:"w",Փ:"P'",փ:"p'",Ք:"Q",ք:"q",Օ:"O'",օ:"o'",Ֆ:"F",ֆ:"f",ՈՒ:"U",ու:"u",և:"&"}],['&nbsp;Western&nbsp;','Western Armenian','<div><a href="javascript:t.n(2)">ա</a></div><div>a</div><div><a href="javascript:t.n(22)">ի</a></div><div>i</div><div><a href="javascript:t.n(42)">յ</a></div><div>h&#39;</div><div><a href="javascript:t.n(62)">տ</a></div><div>d</div><div><a href="javascript:t.n(4)">բ</a></div><div>p</div><div><a href="javascript:t.n(24)">լ</a></div><div>l</div><div><a href="javascript:t.n(44)">ն</a></div><div>n</div><div><a href="javascript:t.n(64)">ր</a></div><div>r</div><div><a href="javascript:t.n(6)">գ</a></div><div>k</div><div><a href="javascript:t.n(26)">խ</a></div><div>x</div><div><a href="javascript:t.n(46)">շ</a></div><div>sh</div><div><a href="javascript:t.n(66)">ց</a></div><div>c</div><div><a href="javascript:t.n(8)">դ</a></div><div>t</div><div><a href="javascript:t.n(28)">ծ</a></div><div>dz</div><div><a href="javascript:t.n(48)">ո</a></div><div>o&#39;</div><div><a href="javascript:t.n(68)">ւ</a></div><div>w</div><div><a href="javascript:t.n(10)">ե</a></div><div>e</div><div><a href="javascript:t.n(30)">կ</a></div><div>g</div><div><a href="javascript:t.n(50)">չ</a></div><div>ch</div><div><a href="javascript:t.n(70)">փ</a></div><div>p&#39;</div><div><a href="javascript:t.n(12)">զ</a></div><div>z</div><div><a href="javascript:t.n(32)">հ</a></div><div>h</div><div><a href="javascript:t.n(52)">պ</a></div><div>b</div><div><a href="javascript:t.n(72)">ք</a></div><div>q</div><div><a href="javascript:t.n(14)">է</a></div><div>e&#39;</div><div><a href="javascript:t.n(34)">ձ</a></div><div>tz</div><div><a href="javascript:t.n(54)">ջ</a></div><div>ch&#39;</div><div><a href="javascript:t.n(74)">օ</a></div><div>o</div><div><a href="javascript:t.n(16)">ը</a></div><div>y</div><div><a href="javascript:t.n(36)">ղ</a></div><div>gh</div><div><a href="javascript:t.n(56)">ռ</a></div><div>r&#39;</div><div><a href="javascript:t.n(76)">ֆ</a></div><div>f</div><div><a href="javascript:t.n(18)">թ</a></div><div>t&#39;</div><div><a href="javascript:t.n(38)">ճ</a></div><div>j</div><div><a href="javascript:t.n(58)">ս</a></div><div>s</div><div><a href="javascript:t.n(78)">ու</a></div><div>u</div><div><a href="javascript:t.n(20)">ժ</a></div><div>zh</div><div><a href="javascript:t.n(40)">մ</a></div><div>m</div><div><a href="javascript:t.n(60)">վ</a></div><div>v</div><div><a href="javascript:t.c(&quot;և&quot;)">և</a></div><div>&amp;</div>',{A:"Ա",a:"ա",P:"Բ",p:"բ",K:"Գ",k:"գ",T:"Դ",t:"դ",E:"Ե",e:"ե",Z:"Զ",z:"զ","Ե'":"Է","ե'":"է",Y:"Ը",y:"ը","Դ'":"Թ","դ'":"թ","ԶՀ":"Ժ","Զհ":"Ժ","զհ":"ժ",I:"Ի",i:"ի",L:"Լ",l:"լ",X:"Խ",x:"խ","ՏԶ":"Ծ","Տզ":"Ծ","տզ":"ծ",G:"Կ",g:"կ",H:"Հ",h:"հ","ԴԶ":"Ձ","Դզ":"Ձ","դզ":"ձ","ԿՀ":"Ղ","Կհ":"Ղ","կհ":"ղ",J:"Ճ",j:"ճ",M:"Մ",m:"մ","Հ'":"Յ","հ'":"յ",N:"Ն",n:"ն","ՍՀ":"Շ","Սհ":"Շ","սհ":"շ","Օ'":"Ո","օ'":"ո","ՑՀ":"Չ","Ցհ":"Չ","ցհ":"չ",B:"Պ",b:"պ","Չ'":"Ջ","չ'":"ջ","Ր'":"Ռ","ր'":"ռ",S:"Ս",s:"ս",V:"Վ",v:"վ",D:"Տ",d:"տ",R:"Ր",r:"ր",C:"Ց",c:"ց",W:"Ւ",w:"ւ","Բ'":"Փ","բ'":"փ",Q:"Ք",q:"ք",O:"Օ",o:"օ",F:"Ֆ",f:"ֆ",U:"ՈՒ",u:"ու","&":"և"},{Ա:"A",ա:"a",Բ:"P",բ:"p",Գ:"K",գ:"k",Դ:"T",դ:"t",Ե:"E",ե:"e",Զ:"Z",զ:"z",Է:"E'",է:"e'",Ը:"Y",ը:"y",Թ:"T'",թ:"t'",Ժ:"Zh",ժ:"zh",Ի:"I",ի:"i",Լ:"L",լ:"l",Խ:"X",խ:"x",Ծ:"Dz",ծ:"dz",Կ:"G",կ:"g",Հ:"H",հ:"h",Ձ:"Tz",ձ:"tz",Ղ:"Gh",ղ:"gh",Ճ:"J",ճ:"j",Մ:"M",մ:"m",Յ:"H'",յ:"h'",Ն:"N",ն:"n",Շ:"Sh",շ:"sh",Ո:"O'",ո:"o'",Չ:"Ch",չ:"ch",Պ:"B",պ:"b",Ջ:"Ch'",ջ:"ch'",Ռ:"R'",ռ:"r'",Ս:"S",ս:"s",Վ:"V",վ:"v",Տ:"D",տ:"d",Ր:"R",ր:"r",Ց:"C",ց:"c",Ւ:"W",ւ:"w",Փ:"P'",փ:"p'",Ք:"Q",ք:"q",Օ:"O",օ:"o",Ֆ:"F",ֆ:"f",ՈՒ:"U",ու:"u",և:"&"}],['&nbsp;H-M&nbsp;','Hübschmann-Meillet System','<div><a href="javascript:t.n(2)">ա</a></div><div>a</div><div><a href="javascript:t.n(22)">ի</a></div><div>i</div><div><a href="javascript:t.n(42)">յ</a></div><div>y</div><div><a href="javascript:t.n(62)">տ</a></div><div>t</div><div><a href="javascript:t.n(4)">բ</a></div><div>b</div><div><a href="javascript:t.n(24)">լ</a></div><div>l</div><div><a href="javascript:t.n(44)">ն</a></div><div>n</div><div><a href="javascript:t.n(64)">ր</a></div><div>r</div><div><a href="javascript:t.n(6)">գ</a></div><div>g</div><div><a href="javascript:t.n(26)">խ</a></div><div>x</div><div><a href="javascript:t.n(46)">շ</a></div><div>š</div><div><a href="javascript:t.n(66)">ց</a></div><div>c‘</div><div><a href="javascript:t.n(8)">դ</a></div><div>d</div><div><a href="javascript:t.n(28)">ծ</a></div><div>c</div><div><a href="javascript:t.n(48)">ո</a></div><div>o</div><div><a href="javascript:t.n(68)">ւ</a></div><div>w</div><div><a href="javascript:t.n(10)">ե</a></div><div>e</div><div><a href="javascript:t.n(30)">կ</a></div><div>k</div><div><a href="javascript:t.n(50)">չ</a></div><div>č‘</div><div><a href="javascript:t.n(70)">փ</a></div><div>p‘</div><div><a href="javascript:t.n(12)">զ</a></div><div>z</div><div><a href="javascript:t.n(32)">հ</a></div><div>h</div><div><a href="javascript:t.n(52)">պ</a></div><div>p</div><div><a href="javascript:t.n(72)">ք</a></div><div>k‘</div><div><a href="javascript:t.n(14)">է</a></div><div>ē</div><div><a href="javascript:t.n(34)">ձ</a></div><div>j</div><div><a href="javascript:t.n(54)">ջ</a></div><div>ǰ</div><div><a href="javascript:t.n(74)">օ</a></div><div>ō</div><div><a href="javascript:t.n(16)">ը</a></div><div>ǝ</div><div><a href="javascript:t.n(36)">ղ</a></div><div>ł</div><div><a href="javascript:t.n(56)">ռ</a></div><div>ṙ</div><div><a href="javascript:t.n(76)">ֆ</a></div><div>f</div><div><a href="javascript:t.n(18)">թ</a></div><div>t’</div><div><a href="javascript:t.n(38)">ճ</a></div><div>č</div><div><a href="javascript:t.n(58)">ս</a></div><div>s</div><div><a href="javascript:t.n(78)">ու</a></div><div>u</div><div><a href="javascript:t.n(20)">ժ</a></div><div>ž</div><div><a href="javascript:t.n(40)">մ</a></div><div>m</div><div><a href="javascript:t.n(60)">վ</a></div><div>v</div><div><a href="javascript:t.c(&quot;և&quot;)">և</a></div><div>ev</div>',{A:"Ա",a:"ա",B:"Բ",b:"բ",G:"Գ",g:"գ",D:"Դ",d:"դ",E:"Ե",e:"ե",Z:"Զ",z:"զ",Ē:"Է",ē:"է",Ǝ:"Ը",ǝ:"ը","Տ’":"Թ","տ’":"թ",Ž:"Ժ",ž:"ժ",I:"Ի",i:"ի",L:"Լ",l:"լ",X:"Խ",x:"խ",C:"Ծ",c:"ծ",K:"Կ",k:"կ",H:"Հ",h:"հ",J:"Ձ",j:"ձ",Ł:"Ղ",ł:"ղ",Č:"Ճ",č:"ճ",M:"Մ",m:"մ",Y:"Յ",y:"յ",N:"Ն",n:"ն",Š:"Շ",š:"շ",O:"Ո",o:"ո","Ճ‘":"Չ","ճ‘":"չ",P:"Պ",p:"պ","Ձˇ":"Ջ",ǰ:"ջ",Ṙ:"Ռ",ṙ:"ռ",S:"Ս",s:"ս",V:"Վ",v:"վ",T:"Տ",t:"տ",R:"Ր",r:"ր","Ծ‘":"Ց","ծ‘":"ց",W:"Ւ",w:"ւ","Պ‘":"Փ","պ‘":"փ","Կ‘":"Ք","կ‘":"ք",Ō:"Օ",ō:"օ",F:"Ֆ",f:"ֆ",U:"ՈՒ",u:"ու","եվ":"և"},{Ա:"A",ա:"a",Բ:"B",բ:"b",Գ:"G",գ:"g",Դ:"D",դ:"d",Ե:"E",ե:"e",Զ:"Z",զ:"z",Է:"Ē",է:"ē",Ը:"Ǝ",ը:"ǝ",Թ:"T’",թ:"t’",Ժ:"Ž",ժ:"ž",Ի:"I",ի:"i",Լ:"L",լ:"l",Խ:"X",խ:"x",Ծ:"C",ծ:"c",Կ:"K",կ:"k",Հ:"H",հ:"h",Ձ:"J",ձ:"j",Ղ:"Ł",ղ:"ł",Ճ:"Č",ճ:"č",Մ:"M",մ:"m",Յ:"Y",յ:"y",Ն:"N",ն:"n",Շ:"Š",շ:"š",Ո:"O",ո:"o",Չ:"Č‘",չ:"č‘",Պ:"P",պ:"p",Ջ:"Jˇ",ջ:"ǰ",Ռ:"Ṙ",ռ:"ṙ",Ս:"S",ս:"s",Վ:"V",վ:"v",Տ:"T",տ:"t",Ր:"R",ր:"r",Ց:"C‘",ց:"c‘",Ւ:"W",ւ:"w",Փ:"P‘",փ:"p‘",Ք:"K‘",ք:"k‘",Օ:"Ō",օ:"ō",Ֆ:"F",ֆ:"f",ՈՒ:"U",ու:"u",և:"ev"}]],
tlng:function(){
t.mPril=!t.mPril;
t.sc("mode_primlang",t.mPril,t.mEx);
var lst = document.getElementsByTagName("div");
for (var i = 0; i < lst.length; i++) {
if ((lst[i].className == "en")&&t.mPril) lst[i].style.display="";
else if ((lst[i].className == "en")&&!t.mPril) lst[i].style.display="none";
if ((lst[i].className == "hy")&&t.mPril) lst[i].style.display="none";
else if ((lst[i].className == "hy")&&!t.mPril) lst[i].style.display="";
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
sw:function(){var cdl=document.getElementById("codelist");if(t.mSet==cdl.selectedIndex)return;document.getElementById("work-right-body-content-am").innerHTML=t.mSets[cdl.selectedIndex][2];t.mSet=cdl.selectedIndex;t.sc("mode_charset",t.mSet,t.mEx);},
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
tcps:function(){if(t.mCaps){document.getElementById("work-right-body-content-am").style.textTransform="none";document.getElementById("togCaps").className="off";}else{document.getElementById("work-right-body-content-am").style.textTransform="uppercase";document.getElementById("togCaps").className="on";}t.mCaps=!t.mCaps;t.fc();},
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
case 2:window.open("http://www.google.am/custom?q="+encodeURI(query)+"&sa=Search&client=pub-0113441673686829&forid=1&channel=7766236690&ie=UTF-8&oe=UTF-8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A77%3BLW%3A176%3BL%3Ahttp%3A%2F%2Fwww.google.am%2Fintl%2Fhy%2Fimages%2FLogo_60wht.gif%3BS%3Ahttp%3A%2F%2Fwww.google.am%2F%3BLP%3A1%3BFORID%3A1&hl=hy");break;
case 3:window.open("http://www.nayiri.com/search?query="+encodeURI(query));break;
}
advlist.selectedIndex = 0;
}
}