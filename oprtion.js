/**
 * Created by mahmoudreda on 4/10/17.
 */


//Creat Class Student in javaScript
var Students=(function(){
    /**
     * set Data From creat Opject
     * @param id
     * @param name
     * @param nclass
     * @constructor
     */
    function Students(id,name,nclass) {
        this.id=id;
        this.name=name;
        this.nclass=nclass;
    }
    Students.prototype.GetDataS=function () {
        return [this.id,this.name,this.nclass];
    };
    Students.prototype.modfiy=function (id,name,nclass) {
        this.id=id;
        this.name=name;
        this.nclass=nclass;
    };
return Students;
}());

var Ali=new Students(2,"ALi ","middle School");

console.log(Ali.GetDataS());
Ali.modfiy(Ali.id," ALi Reda",Ali.nclass);
console.log(Ali.GetDataS());

var Muhmmed=new Students(1,"Muhammeda","University");
console.log(Muhmmed.GetDataS());






document.write("<script src='../test.js'></script>");
// function mey() {
//     alert("Hi");
// }
//
// man();


//eval(' alert("hi"); // Enter Eny code  exuecuting ');
//eval('var z = 23*43;document.write(z);');

/*
 document.getElementById("m").addEventListener('onclick',function () {
 document.getElementById("mas").innerHTML="Hello Man";
 });
 document.getElementById("m").addEventListener('mouseover',function () {
 document.getElementById('mas').innerHTML="Hello man";
 });
 */

/*
 function fild() {
 var x = document.getElementById("name").value;
 if(x.length>5)
 return false;
 }*/
//    window.onload=function () {
//        alert("print onload");
//    }
//
//var addusr=document.getElementById("send");
//addusr.onclick=function () {
//    addusr.className="main";
//    alert("OK");
//}


/*
 //Closures
 var msg = function (name) {
 return"helo,"+name;
 }
 document.write(msg("mahmoud"))
 */
/*
 var x =23;
 var m=2.5;
 var l=new Data();
 var s1="mahmoud";
 ٍvar strings= s1 + x.toString()+m.toString()+l.toString();
 var ints = x + parseInt(m)+parseInt(l)+parseInt(s1);
 var flots= m+parseFloat(x)+parseFloat(l)+parseFloat(s1);
 var da="2015-10-7";
 var data2=Data(da);
 var numper=Number(s1)+ Number(l)+Number(x)+Number(m);
 var b = Boolean(0);
 */

/*
 function wdshowd()
 {
 var datare=prompt("Enter Name : ","Mahmoud");
 document.getElementById("re").innerHTML="Welcom "+datare;

 }

 function refirm()
 {
 var r = confirm("Are you sour data");
 if(r==true)
 {
 document.getElementById("re").innerHTML="WElcom";
 }
 }


 */

/*
 var myset = setInterval(function(){timener()},1000);
 function timener() {
 var da= new Data();
 document.getElementById("re").innerHTML=da.toLocaleString();
 }
 */

/*
 var textj='{name:"Mahmoud",job:["programar","adminstritor System",' +
 '"Eng network","eng EmbededdSystem"' +
 ',"CHE"],age:22}';
 var opjctjuson = JSON.parse(textj) ;

 alert(opjctjuson.name);
 alert(opjctjuson.job[0]);
 alert(opjctjuson.age);

 */
/*
 debugger;
 var z= 23*20;
 console.log(z)
 alert(z)

 */
/*
 function man() {

 try{
 man();
 alert(document.getElementById(tx).value);
 }catch (er){
 alert(er.message);
 }finally {
 document.write("OK");
 }

 }
 */