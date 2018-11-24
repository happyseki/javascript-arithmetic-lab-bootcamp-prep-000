var a,b;
function beforeEach(){
  a = Math.floor(Math.random()*1000);
  b = Math.floor(Math.random()*1000);
}

function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b;
}

function divide(a,b){
  return a/b;
}

function inc(a){
  return a+=1;
}

function dec(a){
  return a-=1;
}

function makeInt(a){
   if(parseInt('a')===a){
     return parseInt('a');
   }
 }

function makeInt(){ 
  var n = parseInt('0x2328',10);
  return n*=0;
}

function makeInt(){
  var n = parseInt('sldkjflksjf',10);
  if(isNaN(n)){
    return 'NaN as appropriate';
 }
}

function preserveDecimal(){
  var n = parseFloat('2.222');
 if(n==='2.222'){
   return n;
 }
}

function preserveDecimal(){
  var n = parseFloat('sldkjflksjf');
  if(isNaN(n)){
    return 'NaN as appropriate';
  }
}
