/**
 * Created by mahmoudreda on 4/9/17.
 */


/***
 * (-)
 * @param x
 * @param w
 * @returns {number}
 */
function subtraction (x,w) {
    return(x-w);
}
/**
 * (+)
 * @param x
 * @param w
 * @returns {*}
 */
function addition(x,w) {
    return(x+y);
}
/***
 * (*)
 * @param x
 * @param w
 * @returns {number}
 */
function multiplication(x,w) {
    return(x*y);
}
/***
 * ( / )
 * @param x
 * @param w
 * @returns {number}
 */
function division(x,w) {
    return(x/y);
}
/***
 * Exueut
 * @param w
 * @param t
 * @param r
 * @constructor
 */
function Sum(w,t,r) {
    debugger;
    try {
        if (t=='+') {
            document.writeln(addition(w, r));
        }else if (t=='-') {
            document.writeln(subtraction(w, r));
        }else if(t=='*') {
            document.writeln(multiplication(w, r));
        }else if (t=='/') {
            document.writeln(division(w, r));
        }else { console.log(t);
            alert("ERORR in Enter purametur");
        }
    }catch (er){
        //alert(er.message);
    }finally{
       // document.writeln("Bybay");
    }
}


//reqoust from server code juson
txtj='{"name":"Mahmoud","lastname":"Reda","Age":22,"job":["student","programar"]}';
//Conver txt to juson
opjuson=JSON.parse(txtj);
//document.writeln(opjuson.lastname);

//Array
var x =[22,"mahmoud",true,opjuson,Sum(2,'+',3)];


//Timer

var timer= setInterval(function () {printnum();},1000);

var x=0;

function printnum() {
    document.getElementById("").innerHTML=x;
    x++;
}
//show message and tack data from users
// method show data return [yse,on]
function reshowD()
{
    var x =confirm("Are you ser massege");
    if (x==true)
    {
        alert("True");
    }
}
// method tack data from users
function tckD()
{
    var c=prompt("Pleas Enter Your Name :","Mahmoud");
    alert("Welcom "+ c);
}

//
// var x =23;
// var m=2.5;
// var l=new Data();
// var s1 = "Mahmoud";
// ٍ//var strings= s1 + x.toString()+m.toString()+l.toString();
// var ints = x + parseInt(m)+parseInt(l)+parseInt(s1);
// var flots= m+parseFloat(x)+parseFloat(l)+parseFloat(s1);
// var da="2015-10-7";
// var data2=Data(da);
// var numper=Number(s1)+ Number(l)+Number(x)+Number(m);
// var b = Boolean(0);


                //Closures
   var mas=function (name) {
       return"helo ,"+name;
   }
   //document.write(mas("mahmoud"));


//Events

//window.onunload
//document.onclick
// window.onload=function () {
//     alert("Welcom To Site");
// }
//document.getElementById("");//.on[*]

//var v=document.getElementById();
//v.on[*]
//v.className="css>file"


        //validation
function Viledchar() {
var f=document.getElementById("").value;
        if(v.length()>5)
            return fales;
}
// onkeypress="return Viledchar()"

                                            //eventes
//document.getElementById("").addEventListener('onclick',function () {
    //exuecut over coding write her
   // document.getElementById("").innerHTML="";
//});

//eval(' alert("hi"); // Enter Eny code  exuecuting ');

//eval('var z = 23*43;document.write(z);');

//eval('man()')

function man() {
    alert("Eval");
}
document.write('<script src="js/oprtion.js"></script>');

document.writeln(mey());

var  are=["dsffgg",4,43.4];

var tr = function (name) {
    return "Hello"+name;
}

var exampel = tr;
exampel("mahmoud");

//Class in  java script


var Car=(function(){
    //this is constructor
    function Car(name,price) {
        this.name=name;
        this.price=price;
    }
    Car.prototype.getInfo=function () {
        console.log("Name: "+this.name+" Price : "+this.price);
    };
    //this is return constractor
    return Car;

}());

var mycar=new Car("Bmw",200);
mycar.getInfo();

/**
 * Class Creat Employes
 */
var Employes=(function(){
    /***
     * SetData in Opject
     * @param id
     * @param name
     * @param jobName
     * @param debart
     * @constructor
     */
    function Employes(id,name,jobName,debart) {
        this.id=id;
        this.name=name;
        this.jobName=jobName;
        this.debart=debart;
    }

    /**
     * Get Data From Object
     * @returns {[*,*,*,*]}
     * @constructor
     */
    Employes.prototype.GetDataEpy=function () {
        return [this.id,this.name,this.jobName,this.debart];
    };

    /**
     * Edit Data From OPject
     * @param id
     * @param name
     * @param jobName
     * @param debart
     */
    Employes.prototype.modfiy=function (id,name,jobName,debart) {
        this.id=id;
        this.name=name;
        this.jobName=jobName;
        this.debart=debart;
    };

    //return Opject From Class
    return Employes;
}());

var mahmoud= new Employes(20,"Mahmoud Reda","Program","ARP");
console.log(mahmoud.GetDataEpy());
mahmoud.modfiy(20,mahmoud.name,"AdminStrito System",mahmoud.debart);
console.log(mahmoud.GetDataEpy());









