var field_w = 300;
var field_h = 600;
var cols = 10;
var rows = 20;
var block_w = field_w / cols;
var block_h = field_h / rows;
var canvas = document.getElementById('field');
var ctx = canvas.getContext('2d');
var current_x = 0,
  current_y = 0;

render();
setInterval(tick, 1000);

function render() {
  ctx.clearRect(0, 0, field_w, field_h);
  ctx.strokeStyle = 'black';
  for (var i = 0; i < cols; i++) {
    ctx.strokeRect(i * block_w, current_y * block_h, block_w, block_h);
  }
}

function tick() {
  current_y++; // 下に移動させてから
  render(); // 再描写
}
