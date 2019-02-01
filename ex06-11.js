function hyoji2() { 
//表示する文字 
var str = "大野智、櫻井翔、相葉雅紀、二宮和也、松本潤"; 
//テキストボックスの文字数 
var cnt = document.timer2.moji2.value.length; 
//文字が全部表示されているか確認 
if ( cnt < 21 ) { 
//現在より1文字多く切り出して表示 
document.timer2.moji2.value = str.substr(0,cnt+1); } else { 
//全て表示されたら、空文字に戻す 
document.timer2.moji2.value = ""; } 
//setTimeout()を含む関数を呼び出す 
setTimeout("hyoji2()",1000); }