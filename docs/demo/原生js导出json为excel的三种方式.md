# 原生js导出json为excel的三种方式

## 通过table标签转换excel

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style>
        /* 此样式仅用于浏览器页面效果，Excel不会分离表格边框，不需要此样式 */
        table {
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <!-- 设置border="1"以显示表格框线 -->
    <table border="1">
        <!-- caption元素可以生成表标题，其单元格列跨度为表格的列数 -->
        <caption>学生成绩表</caption>
        <tr>
            <!-- 可以使用rowspan和colspan来合并单元格 -->
            <th rowspan="2">编号</th>
            <th rowspan="2">学号</th>
            <th rowspan="2">姓名</th>
            <th rowspan="2">性别</th>
            <th rowspan="2">年龄</th>
            <th colspan="3">成绩</th>
        </tr>
        <tr>
            <th>语文</th>
            <th>数学</th>
            <th>英语</th>
        </tr>
        <tr>
            <td>1</td>
            <td>2016001</td>
            <td>张三</td>
            <td>男</td>
            <td>13</td>
            <td>85</td>
            <td>94</td>
            <td>77</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2016002</td>
            <td>李四</td>
            <td>女</td>
            <td>12</td>
            <td>96</td>
            <td>84</td>
            <td>89</td>
        </tr>
    </table>
 
    <a>导出表格</a>
 
    <script>
        // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
        var html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName("table")[0].outerHTML + "</body></html>";
        // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
        var blob = new Blob([html], { type: "application/vnd.ms-excel" });
        var a = document.getElementsByTagName("a")[0];
        // 利用URL.createObjectURL()方法为a元素生成blob URL
        a.href = URL.createObjectURL(blob);
        // 设置文件名，目前只有Chrome和FireFox支持此属性
        a.download = "学生成绩表.xls";
    </script>
</body>
</html>
```

## 导出json到excel

- 采用拼接table的HTML代码方式

封装生成excel函数

```js
function exportExcel(JSONData, FileName, title, filter) {
    if (!JSONData) return;
    //转化json为object
    var arrData = typeof JSONData != "object" ? JSON.parse(JSONData) : JSONData;
    var excel = "<table>";
    //设置表头
    var row = "<tr>";
    if (title) { //使用标题项
      for (var i in title) {
        row += "<th align='center'>" + title[i] + "</th>";
      }
    } else {//不使用标题项
      for (var i in arrData[0]) {
        row += "<th align='center'>" + i + "</th>";
      }
    }
    excel += row + "</tr>";
    //设置数据
    for (var i = 0; i < arrData.length; i++) {
      var row = "<tr>";
      for (var index in arrData[i]) {
        //判断是否有过滤行
        if (filter) {
          if (filter.indexOf(index) == -1) {
            var value = arrData[i][index] == null ? "" : arrData[i][index];
            row += "<td>" + value + "</td>";
          }
        } else {
          var value = arrData[i][index] == null ? "" : arrData[i][index];
          row += "<td align='center'>" + value + "</td>";
        }
      }
      excel += row + "</tr>";
    }
    excel += "</table>";
    var excelFile =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
    excelFile +=
      '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
    excelFile +=
      '<meta http-equiv="content-type" content="application/vnd.ms-excel';
    excelFile += '; charset=UTF-8">';
    excelFile += "<head>";
    excelFile += "<!--[if gte mso 9]>";
    excelFile += "<xml>";
    excelFile += "<x:ExcelWorkbook>";
    excelFile += "<x:ExcelWorksheets>";
    excelFile += "<x:ExcelWorksheet>";
    excelFile += "<x:Name>";
    excelFile += "{worksheet}";
    excelFile += "</x:Name>";
    excelFile += "<x:WorksheetOptions>";
    excelFile += "<x:DisplayGridlines/>";
    excelFile += "</x:WorksheetOptions>";
    excelFile += "</x:ExcelWorksheet>";
    excelFile += "</x:ExcelWorksheets>";
    excelFile += "</x:ExcelWorkbook>";
    excelFile += "</xml>";
    excelFile += "<![endif]-->";
    excelFile += "</head>";
    excelFile += "<body>";
    excelFile += excel;
    excelFile += "</body>";
    excelFile += "</html>";
    var uri =
      "data:application/vnd.ms-excel;charset=utf-8," +
      encodeURIComponent(excelFile);
    var link = document.createElement("a");
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = FileName + ".xls";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
```

## 使用封装函数生成excel

```js
<script src="./excelExport.js"></script>
<script>
	const jsonData = [
        {
            name:'路人甲',
            phone:'123456',
            email:'123@123456.com',
            bool:true
        },
        {
            name:'炮灰乙',
            phone:'123456',
            email:'123@123456.com',
            bool:false
        },
        {
            name:'土匪丙',
            phone:'123456',
            email:'123@123456.com',
            bool:true
        },
        {
            name:'流氓丁',
            phone:'123456',
            email:'123@123456.com',
            bool:false
        },
    ]
    function excelExportFn(){
        let title = ['姓名','电话','邮箱'];
        let filter = [];  // 不导出的字段
        exportExcel(jsonData,'测试excel',title,filter);
    }
</script>
```

## 导出csv文件

```js
function tableToExcel(){
    const jsonData = [
        {
            name:'路人甲',
            phone:'123456',
            email:'123@123456.com'
        },
        {
            name:'炮灰乙',
            phone:'123456',
            email:'123@123456.com'
        },
        {
            name:'土匪丙',
            phone:'123456',
            email:'123@123456.com'
        },
        {
            name:'流氓丁',
            phone:'123456',
            email:'123@123456.com'
        },
    ]
    //列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `姓名,电话,邮箱\n`;
    //增加\t为了不让表格显示科学计数法或者其他格式
    for(let i = 0 ; i < jsonData.length ; i++ ){
        for(let item in jsonData[i]){
            str+=`${jsonData[i][item] + '\t'},`;     
        }
        str+='\n';
    }
    //encodeURIComponent解决中文乱码
    let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    //通过创建a标签实现
    let link = document.createElement("a");
    link.href = uri;
    //对下载的文件命名
    link.download =  "json数据表.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
```

参考文章： [原生js导出json为excel的三种方式]('https://blog.csdn.net/liyi_mowu/article/details/90901675')