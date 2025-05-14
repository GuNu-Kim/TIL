 'use strict';

 //javascript is syncheronous
 //hoisting: var, function declaration 변수,함수같은 선언들이 제일위로 올라가고 실행되는 것
console.log('1');
setTimeout(function(){  //비동기
    console.log('2222');
}, 1000);
setTimeout(()=>console.log('2222'), 1000);  //비동기 위와 동일한 function
console.log('3');

//synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));   //동기

//asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);  //비동기

//let value=test;
//console.log(${value});

//List<datamap> list = dao.list("selectService.selectinfo",vo);
//map<String,Object> map = new hashMap<String,Object>();
//map.put("result",list); 


function innerFnc(){
    return false;
}

function outerFnc(){
    if(innerFnc()==false) 
        console.log("나가");
}
outerFnc();


intervaluep.ibcenter.kr/apps/sales/investment/cominfo/print/dox_cominfo_report_intervaluep.jsp
intervaluep.ibcenter.kr/apps/sales/investment/cominfo/comreport/print/dox_cominfo_report_intervaluep.jsp