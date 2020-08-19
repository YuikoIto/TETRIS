var FIELD_W = 300,
  FIELD_H = 600;
var COLS = 10,
  ROWS = 20;
var BLOCK_W = FIELD_W / COLS,
  BLOCK_H = FIELD_H / ROWS;
var canvas = document.getElementById('field');
var ctx = canvas.getContext('2d');
var current_mino;
var current_x = 3,
  current_y = 0;
var field = [];

for (var y = 0; y < ROWS; y++) {
  field[y] = [];
  for (var x = 0; x < COLS; x++) {
    field[y][x] = 0;
  }
}

current_mino = newMino();
render();
setInterval(tick, 500);

function render() {
  ctx.clearRect(0, 0, FIELD_W, FIELD_H);
  ctx.strokeStyle = 'black';
  for (var y = 0; y < ROWS; y++) {
    for (var x = 0; x < COLS; x++) {
      drawBlock(x, y, field[y][x]);
    }
  }
  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 4; x++) {
      drawBlock(current_x + x, current_y + y, current_mino[y][x]);
    }
  }
}

function drawBlock(x, y, block) {
  if (block) {
    ctx.fillStyle = COLORS[block - 1];
    ctx.fillRect(x * BLOCK_W, y * BLOCK_H, BLOCK_W - 1, BLOCK_H - 1);
    ctx.strokeRect(x * BLOCK_W, y * BLOCK_H, BLOCK_W - 1, BLOCK_H - 1);
  }
}

function tick() {
  if (canMove(0, 1)) {
    current_y++;
  } else {
    fix();
    clearRows();
    current_mino = newMino();
    current_x = 3;
    current_y = 0;
  }
  render();
}

function fix() {
  for (var y = 0; y < 4; ++y) {
    for (var x = 0; x < 4; ++x) {
      if (current_mino[y][x]) {
        field[current_y + y][current_x + x] = current_mino[y][x];
      }
    }
  }
}

function canMove(move_x, move_y, move_mino) {
  var next_x = current_x + move_x;
  var next_y = current_y + move_y;
  var next_mino = move_mino || current_mino;
  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 4; x++) {
      if (next_mino[y][x]) {
        if (
          next_y + y >= ROWS ||
          next_x + x < 0 ||
          next_x + x >= COLS ||
          field[next_y + y][next_x + x]
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

function clearRows() {
  for (var y = ROWS - 1; y >= 0; y--) {
    var fill = true;
    for (var x = 0; x < COLS; x++) {
      if (field[y][x] == 0) {
        fill = false;
        break;
      }
    }
    if (fill) {
      for (var v = y - 1; v >= 0; v--) {
        for (var x = 0; x < COLS; x++) {
          field[v + 1][x] = field[v][x];
        }
      }
      y++;
    }
  }
}

document.body.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37:
      if (canMove(-1, 0)) {
        current_x--;
      }
      break;
    case 39:
      if (canMove(1, 0)) {
        current_x++;
      }
      break;
    case 40:
      if (canMove(0, 1)) {
        current_y++;
      }
      break;
    case 38:
      rotated = rotate(current_mino);
      if (canMove(0, 0, rotated)) {
        current_mino = rotated;
      }
      break;
  }
  render();
};

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
