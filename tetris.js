var field_w = 300;
var field_h = 600;
var cols = 10;
var rows = 20;
var block_w = field_w / cols;
var block_h = field_h / rows;
var canvas = document.getElementById('field');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';

for (var i = 0; i < cols; i++) {
  ctx.strokeRect(i * block_w, 0, block_w, block_h);
}
