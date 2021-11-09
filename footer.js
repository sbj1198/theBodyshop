document.querySelector("i").addEventListener("click", inpCheck);

// email checker function
function inpCheck() {
    var a=document.querySelector("#sinp").value;
    if(a==""){
        document.querySelector("#inftxt").textContent="This is a required field.";
    } else {
        emailCheck(a);
    }
}

function emailCheck(line) {
var name="";
var std="abcdefghijklmnopqrstuvwxyz1234567890_-.";
var std1="abcdefghijklmnopqrstuvwxyz@";
var domain="";
var tld="";
var ind=0;
var ind1=0;
var ind2=0;
var check1=true;
var check2=true;
var check3=false;

for(var i=0;i<line.length;i++) {
  if(line[i]=="@") {
    break;
  } else {
    name=name+line[i];
    ind++;
  }
}

var nm1="";
if(name!="") {
  for(var a=0;a<name.length;a++) {
    for(var b=0;b<std.length;b++) {
      if(name[a]==std[b]) {
        nm1=nm1+name[a];
      }
    }
  }
}

if(nm1!=name) {
  check1=false;
}



for(var j=ind;j<line.length;j++) {
  if(line[j]==".") {
    break;
  } else {
    domain=domain+line[j];
    ind1++;
  }
}

var dm1="";
if(domain!="") {
  for(var a=0;a<domain.length;a++) {
    for(var b=0;b<std1.length;b++) {
      if(domain[a]==std1[b]) {
        dm1=dm1+domain[a];
      }
    }
  }
}
if((dm1=="@")||(dm1!=domain)) {
  check2=false;
}


for(var k=ind1+ind;k<line.length;k++) {
  tld=tld+line[k];
}

if((tld==".com")||(tld==".net")||(tld==".org")) {
  check3=true;
}
var checker="";
if((check1==true)&&(check2==true)&&(check3==true)) {
} else {
  checker="Please enter a valid email address (Ex: johndoe@domain.com).";
}
document.querySelector("#inftxt").textContent=checker;
}

//   select function
function redirect(){
   var s=document.querySelector("select").value;
    console.log(s);
    if(s!="India"){
        document.querySelector("#drpdiv").textContent="Currently not available"
    }
}