precision mediump float;
uniform float t;
uniform vec2 r;

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 / r) / min(r.x, r.y);
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}