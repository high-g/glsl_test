precision mediump float;

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
//    float s = sin(st.y * u_time);
//    float c = cos(st.x * u_time);
    float s = sin(u_time + st.x * PI);
    float y = mod(u_time, 0.5);
    gl_FragColor = vec4(y, 0.0, 0.0, 1.0);
}