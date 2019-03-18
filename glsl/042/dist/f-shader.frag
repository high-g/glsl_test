precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color1 = vec3(0.1234, 0.3456, 0.9);
vec3 color2 = vec3(0.9, 0.0098, 0.22788);

void main () {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float pct = abs(sin(u_time));
    vec4 color = vec4(mix(color1, color2, pct), 1.0);
    gl_FragColor = color;
}