var Shader = Shader || {};

(function(){
var c = document.getElementById('canvas'),
    gl = c.getContext('webgl') || c.getContext('experimental-webgl');

c.width = 600;
c.height = 480;

if(gl) {
  console.log('supports webgl');
}

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clearDepth(1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

var v_shader = create_shader('vs');
var f_shader = create_shader('fs');

var prg = create_program(v_shader, f_shader);

var attLocation = gl.getAttribLocation(prg, 'position');

var attStride = 3;

var vertex_position = [
   0.0, 1.0, 0.0,
   1.0, 0.0, 0.0,
  -1.0, 0.0, 0.0
];

var vbo = create_vbo(vertex_position);
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.enableVertexAttribArray(attLocation);
gl.vertexAttribPointer(attLocation, attStride, gl.FLOAT, false, 0, 0);

// minmatrix
var m = new matIV();

var mMatrix = m.identity(m.create());
var vMatrix = m.identity(m.create());
var pMatrix = m.identity(m.create());
var mvpMatrix = m.identity(m.create());

// ビュー座標変換行列
m.lookAt([0.0, 1.0, 3.0], [0, 0, 0], [0, 1, 0], vMatrix);

// プロジェクション座標変換行列
m.perspective(90, c.width / c.height, 0.1, 100, pMatrix);

// 各行列をかけ合わせ座標変換行列を完成させる
m.multiply(pMatrix, vMatrix, mvpMatrix);
m.multiply(mvpMatrix, mMatrix, mvpMatrix);

// uniformLocation取得
var uniLocation = gl.getUniformLocation(prg, 'mvpMatrix');

// uniformLocationへ座標変換行列を登録
gl.uniformMatrix4fv(uniLocation, false, mvpMatrix);

// モデル描画
gl.drawArrays(gl.TRIANGLES, 0, 3);

// コンテキスト再描画
gl.flush();

function create_shader(id) {
  var shader, shader_language;

  switch(id) {
    case 'vs':
      shader = gl.createShader(gl.VERTEX_SHADER);
      shader_language = Shader.vertex;
      break;
    case 'fs':
      shader = gl.createShader(gl.FRAGMENT_SHADER);
      shader_language = Shader.flagment;
      break;
    default :
      return;
  }

  // ソース割当（登録）
  gl.shaderSource(shader, shader_language);
  
  // コンパイル
  gl.compileShader(shader);
  
  if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // 成功
    return shader;
  } else {
    // 失敗
    alert(gl.getShaderInfoLog(shader));
  }
}

function create_program(vs, fs) {
  // プログラムオブジェクトの生成
  var program = gl.createProgram();
  
  // プログラムオブジェクトにシェーダを割り当てる
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  
  // シェーダをリンク
  gl.linkProgram(program);
  
  if(gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.useProgram(program);
    return program;
  } else {
    alert(gl.getProgramInfoLog(program));
  }
}

function create_vbo(data) {
  var vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return vbo;
}

})();