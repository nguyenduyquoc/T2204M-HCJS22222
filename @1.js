
var x;
x = 10;//number
x = "hello world";//string
x = true;//boolean

var y;
y = 20;
y = y + 5;//number -> 25
y = y + "hello";//string -> 25hello
y = y + 10;//string -> 25hello10
y = y + "t2204m";//string -> 25hello10t2204m

if(x = true){
    y = y + "hello";
} else {
    y =y + "xin chao";
}
var q;
for(var i = 0; i < 10; i++){
     q = i + 1;
    console.log( "q = " , q  );
}
var arr = [];
arr[0] = 2;
arr[1] = "hello";
arr[2] = true;
arr[3] =[2,2,2,4];
arr[3][4] = ["hello","abc"];

var ary = [];
for(var i=0; i < 10; i++){
    ary[i] = 2*i + 1;
}
//muon them so 21, 23, 25 vao cuoi danh sach
ary.push(21);
ary.push(23);
ary.push(25);
for(var i=0; i < ary.length ; i++){
    console.log(ary[i]);
}

tinhtong(17,18)
function tinhtong(a,b){
    console.log(a+b);
    return a+b;
}
tinhtong(16,28)


alert("Đủ 18 tuổi mới có thể tham gia");

var kq1 = confirm("Bạn chắc chắn muồn nôp bài không");
console.log(kq1);

var kq2 = prompt("Vui lòng nhập têm của bạn");
console.log(kq2);

//Nhập tên 5 người, sau đó in ra danh sách năm người vừa nhập
// Trên màn hình console


var arrname = [];
for (var i = 0; i < 5; i++) {
    arrname[i] = prompt("Nhập tên vào");
    console.log(arrname[i]);
}

var str = prompt("vui long nhap ten");
str = parseInt(str);// string = number
console.log(str + 10);
// 18 -> 18
// 18abc -> 18
// 18abc2 -> 18
// abc18 -> NaN (not a number

// Viết chương trình yêu cầu nhập vào một số dương

var x;
do{
   x =prompt("Nhập vào số nguyên dương");
}while(x < 0)
console.log(x);



//setTimeout là thực hiện công việc sau 4000s nếu timeout là 4000
setTimeout(function () {
    alert("Mot con vit");
    alert("Hai con vịt");
},6000);

var t = 0;
var xyz = setInterval( function () {
    console.log("t="+t);
    t++;
    if(t >= 5){
        clearInterval(xyz);
    }
},4000);



//Viết đồng hồ đếm ngược mười phút
//10:00
//09:58
//09:57
//...
//00:00

var m = 10, s = 0;
var xyz = setInterval( function () {
    var mn = m>= 10?m:"0"+m;
    var sc = s>= 10?s:"0"+s;
    console.log(mn+":"+sc);
    s--;
    if(s < 0) {
     s= 59;
     m--;
    }
    if(m < 0) {
        clearInterval(xyz);
    }
},1000);

let sobatki;
function xacdinhchanle (sobatki) {
    if (sobatki % 2 == 0) {
        console.log(sobatki + ' la so chan');
    } else {
        console.log(sobatki + ' la so le');
    }
}
xacdinhchanle(45);
