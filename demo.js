// 实际使用并未使用以上工具
// 只使用了xlsx工具即实现了数组转excel生成文件的下载
// 1.安装xlsx依赖：cnpm install --save xlsx;
// 2.如果想自定义样式还需要引入xlsx-style依赖：cnpm install xlsx-style --save;



// 数据参考
e = [{id:"id1",name:"name1"},{id:"id2",name:"name2"}];
filename = "test.xlsx";
// 简单实现下载工具
//e为传入数组对象 fileName为excel名称,sheetName为sheet名称
export function onExportExcel(e, filename) {
  //new一个工作薄
  let workbook = XLSX.utils.book_new()
  //将json数据转为sheet
  let workSheet = XLSX.utils.json_to_sheet(e)
  //把sheet插入工作薄中
  XLSX.utils.book_append_sheet(workbook, workSheet);
  XLSX.writeFile(workbook, filename); //导出Excel
}

// 自定义样式
