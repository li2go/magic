var path = require("path");
var fs   = require("fs");
var HtmlWebpackPlugin = require('html-webpack-plugin')

//pagesPath:path.resolve(__dirname, "../js/pages"),

var paths = {
  src: "src/js/pages/",
  dist: "dist"
};

var dirs  = fs.readdirSync(path.resolve(__dirname, paths.src));
var entry = {};
//1.读取入口文件
dirs.forEach(function (dir) {
  entry[dir] = path.resolve(paths.src,dir);
});

//2.清空dist目录
if(fs.existsSync(paths.dist)){
  cleanDir(paths.dist);
}else{
  fs.mkdir(paths.dist);
}

//3.创建dist目录结构


console.log(entry);
var newEntry={};
Object.keys(entry).forEach(function(key){
  var dir=key.split(".js")[0];
  dir=dir.replace(/\./g,"/");
  newEntry['./'+dir+"/js/index"]=entry[key];
});

//4.其它依赖文件
newEntry=Object.assign({},newEntry,{
  "./js/react":["react"]
});


//5. HtmlWebpackPlugin 处理html文件
module.exports = {
  entry: newEntry,
  output: {
    path: path.resolve(__dirname, paths.dist),
    filename: "[name].js",
    chunkFilename:"[name].js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};






function cleanDir(dirToClean,isLog){
  function deleteFiles(root) {
    //root=path.resolve(__dirname,root);
    var dirs = fs.readdirSync(root);
    dirs.forEach(function (dir, index) {
      var dic    = path.resolve(root, dir);
      var result = fs.statSync(dic);
      if (result.isDirectory()) {
        deleteFiles(dic);
      } else {
        isLog && console.log("删除文件:" , dic);
        fs.unlinkSync(dic)
      }
    });
  }

  var dics=[];
  function deleteDirs(root) {
    var dirs = fs.readdirSync(root);
    dirs.forEach(function (dir, index) {
      var dic    = path.resolve(root, dir);
      var result = fs.statSync(dic);
      if (result.isDirectory()) {
        dics.push(dic);
        deleteDirs(dic);
      }
    });
  }
  deleteFiles(dirToClean);
  deleteDirs(dirToClean);
  dics.reverse().forEach(fs.rmdirSync);
}