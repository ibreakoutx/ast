var falafel = require('falafel');
var fs = require('fs');
var code = fs.readFileSync(process.argv[2]) + '';

code = falafel(code, function(node){

  if (node.type === 'ArrayExpression'){
    processArrayExpression(node);
  }


  if (node.type === 'ObjectExpression'){
      processObjectExpression(node);
  }


});

console.log(code);

function processArrayExpression(node){
  var src = node.source();
  if (src.match(/,\s*]$/)){
    node.update(src.replace(/,(\s*)]$/, '$1]'));
  }
}

function processObjectExpression(node){
  var src = node.source();
  if (src.match(/,\s*}$/)){
    node.update(src.replace(/,(\s*)}$/, '$1}'));
  }
}
