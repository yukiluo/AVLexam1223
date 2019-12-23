// 現在時間
function clock() {
var time = new Date(),
    year = time.getFullYear(),
    month = time.getMonth(),
    day = time.getDate(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = "現在時間是： "+ harold(year)+"-"+ harold(month+1)+"-"+harold(day)+" "+harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }
}
setInterval(clock, 1000);

// data 取得
var dataList = document.querySelector('.list');

var allData = '';
function getData(){

    var xhr = new XMLHttpRequest();
    xhr.open('GET','data.json',true);
    xhr.send(null);
    // xhr事件onload 確定資料有回傳後才觸發 function
    xhr.onload = function(){
     if(xhr.status < 400){
      allData = JSON.parse(xhr.responseText);
      console.log(allData);
    } else {
        dataList.innerHTML = '<h2>資料取得錯誤</h2>';
      }
    };
};
getData();

// 判斷秀出 index+1, 店家, 營業時間 
var table = document.querySelector('.table')

function checkOpen(){
  
}
