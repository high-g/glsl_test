precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 _mouse = u_mouse.xy / u_resolution;
    gl_FragColor = vec4(_mouse.x, _mouse.y, 0.0, 1.0);
}