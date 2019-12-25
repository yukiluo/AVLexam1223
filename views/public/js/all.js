// 現在時間
function clock() {
    var time = new Date(),
      year = time.getFullYear(),
      month = time.getMonth(),
      date = time.getDate(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
    
    var day = new Date();
    var weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
    var n = weekday[day.getDay()];
    
    document.querySelector('.clock').innerHTML = "現在時間是： "+n+" "+ harold(year)+"-"+ harold(month+1)+"-"+harold(date)+" "+harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    function harold(standIn) {
        if (standIn < 10) {
          standIn = '0' + standIn
        }
        return standIn;
      }
    }
    setInterval(clock, 1000);
    
    // javascript date picker: flatpicker
    // var example = flatpickr('#flatpickr');
    // flatpicker('#flatpickr',{
    //   dateFormat: '2019-12-24',
    // });
    
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
          // console.log(allData);
        } else {
            dataList.innerHTML = '<h2>資料取得錯誤</h2>';
          }
        };
    };
    getData();
    
    // 判斷秀出 index+1, 店家, 營業時間 
    var btn = document.querySelector('.btn');
    var tbody = document.querySelector('.tbody');
    
    function checkOpen(){
    //判斷日期
    var day = new Date();
    var weekday = new Array(7);
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
    var n = weekday[day.getDay()];
    // console.log(n);
    
    var array = [];
      for(i=0; i<allData.length; i++){
        // console.log(n);
        var str = Object.keys(allData[i]);
        // console.log(str);
        for(j=0; j<8; j++){
          if(n == str[j]){
            var num = str.indexOf(n);
          }
        }// console.log(Object.values(allData[i])[num]); // 取得星期的營業時間
    
    // 判斷時間
    var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();   
      // var now = hours+ ":"+ minutes;
      // console.log(now);
      var status =  Object.values(allData[i])[num];
      var newStatus = status.split(/-|:/); 
      // console.log(newStatus);
    
    function add() {
      array.push({
        name: allData[i].name,
        opentime: status    
      });
    } 
      if (newStatus[0] == hours && newStatus[1] <= minutes){
        add();
      } else if (newStatus[2] == hours && newStatus[3] >> minutes){
        add();
      } else if (newStatus[0] < hours && hours < newStatus[2] ){
        add();
      } else if ( newStatus[2]<10 ) {
        if(newStatus[0] < hours && hours < newStatus[2]+24){
        add();
        } else if(hours == newStatus[2] && minutes < newStatus[3]){
          add();
        } else if(hours < newStatus[2]){
          add();
        }
       } 
    
    };
    // console.log(array);
    
    var str = '';
    for(i=0; i<array.length; i++){
      str+=
      '<tr><th scope="row">'+(i+1)+'</th>'+
          '<td>'+array[i].name+'</td>'+
          '<td>'+array[i].opentime+'</td></tr>';
    }
    
    tbody.innerHTML = str;
    } 
    
    btn.addEventListener('click',checkOpen,false);
    