/* function removeDuplicate(L, field,pab){
    console.log("开始去重");
    var list = [];
    var hash = {};
    var index = 1;
    var twice = [];
    // L.forEach(function (item) { })
    for (var i = 0; i < L.length; i++) {
      var item = L[i];
      var keyword = item[field];
      twice.push(keyword);
     /* 
      all = a
      if (hash[keyword] != true) {
        list.push(item);
        hash[keyword] = true;
      } else {
        // console.log(`第${index}次, ${field} ${keyword} 已存在`)
      }
      index += 1;
    }
    for(var j in twice){
      if(twice[i].radio=="编辑"){
          list.push(twice[i]);
          break;

      }else if(twice[i].radio=="浏览"){
          list.push(twice[i]);
          break;
      }
    }

    return list;
  }(#arr#, #par#, #pab#) 

id =1  编辑 
id =1  查看 
id =1  无 */
function arrManage() {
    var L = [{ "_id": "1", "radio": "编辑" }, { "_id": "1", "radio": "查看" }, { "_id": "1", "radio": "无" }, { "_id": "2", "radio": "查看" }, { "_id": "3", "radio": "查看" }];
    var result = [];
    for (var i in L) {
        var tempList = [];
        var id = L[i]._id;
        //console.log("ididid", id);
        for (var j in L) {
            //console.log("_id_id_id", L[j]._id);
            if (L[j]._id == id) {
                tempList.push(L[j]);
                //console.log("___",L[j]);
            }
        }
        console.log("temp", tempList);
        for (var k in tempList) {
            if (tempList[k].radio == "编辑") {
                result.push(tempList[k]);
                break;
            } else if (tempList[k].radio == "查看") {
                result.push(tempList[k]);
                break;
            }
        }

    }
    return result;
}
console.log("结果", arrManage());