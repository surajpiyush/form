function myfunction(){
let a=document.myform.vname.value;
let mname=document.myform.mname.value;
let cnum=document.myform.mcontact.value;
let mpassword=document.myform.mpassword.value;
let uppercaseletter=/[A-z]/g;
let cpassword=document.myform.cpassword.value;
let date=new Date().getFullYear();
console.log(date)
let tdate=document.myform.mdate.value;
dobDate=new Date(tdate);

console.log(dobDate.getFullYear());
let age=date-dobDate.getFullYear();
let flag=1;
 console.log(mpassword);
 console.log(cpassword);
            

  if(age>18){
    document.getElementById('dmsg').innerHTML="";
    flag=1;
  }
  else{
    document.getElementById('dmsg').innerHTML="Can't fill the form";
    flag=0;
  }

            if (mpassword.match(/[a-z]/g) && str.match(
                    /[A-Z]/g) && str.match(
                    /[0-9]/g) && str.match(
                    /[^a-zA-Z\d]/g) && str.length >= 8){
                document.getElementById('pmsg').innerText=""
                        flag = 1;
                    }
            else{
                flag=0;
            document.getElementById("pmsg").innerText = 'Invalid passwaord';
            }

            if(cpassword===mpassword){
    document.getElementById('conmsg').innerText="";
    flag=1;
    console.log("correct")
 }
 else{
    document.getElementById('conmsg').innerText="Did not match";
    flag=0;
    console.log("incorrect");
 }



 if(mname===''){
     document.getElementById("nmsg").innerText="Empty name";
     flag=0;
     console.log("empty")
 }
if(cnum.length<10){
    document.getElementById("cmsg").innerText="number can't less than 10 digit";
    flag=0
}
console.log(a);
if(a.indexOf('@')<=0){
    document.getElementById('msg').innerHTML="Invalid";
    return false;
}
if(a.charAt(a.length-4)=="."){
    document.getElementById('msg').innerHTML="Invalid position of .";
   flag=0;
}
if(a.charAt(a.length-3)!="."){
    document.getElementById('msg').innerHTML="Invalid position of .";
     flag=0;
}
else{
    document.getElementById('msg').innerHTML=""
    flag=1;
}


if(flag==0){
return false;
}
else{
    return true;
}

}