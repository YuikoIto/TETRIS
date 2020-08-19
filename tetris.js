var FIELD_W = 300,
  FIELD_H = 600;
var COLS = 10,
  ROWS = 20;
var BLOCK_W = FIELD_W / COLS,
  BLOCK_H = FIELD_H / ROWS;
var canvas = document.getElementById('field');
var ctx = canvas.getContext('2d');
var current_x = 3,
  current_y = 0;
var current_mino;

current_mino = newMino();
render();
setInterval(tick, 500);

function render() {
  ctx.clearRect(0, 0, FIELD_W, FIELD_H);
  ctx.strokeStyle = 'black';
  for (var y = 0; y < 2; y++) {
    for (var x = 0; x < 4; x++) {
      if (current_mino[y][x]) {
        ctx.strokeRect(
          (current_x + x) * BLOCK_W,
          (current_y + y) * BLOCK_H,
          BLOCK_W,
          BLOCK_H
        );
      }
    }
  }
}

function tick() {
  current_y++;
  render();
}

// var field_w = 300;
// var field_h = 600;
// var cols = 10;
// var rows = 20;
// var block_w = field_w / cols;
// var block_h = field_h / rows;
// var canvas = document.getElementById('field');
// var ctx = canvas.getContext('2d');
// var current_x = 0;
// var current_y = 0;
// const img = new Image();
// img.src = '121984.png';

// var current_mino; // 現在移動中のテトリミノ
// current_mino = newMino();
// render();
// setInterval(tick, 1000);

// function render() {
//   ctx.clearRect(0, 0, field_w, field_h);
//   img.onload = () => this.drawImage();
//   for (var y = 0; n < rows; y++) {
//     for (var x = 0; i < cols; x++) {
//       if (current_mino[y][x]) {
//         ctx.drawImage(
//           img,
//           x * block_w,
//           (current_y + y) * block_h,
//           block_w,
//           block_h
//         );
//       }
//     }
//   }
// }

// function tick() {
//   current_y++; // 下に移動させてから
//   render(); // 再描写
// }
