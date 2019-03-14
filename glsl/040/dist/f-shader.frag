precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float s = sin(st.y * u_time);
    float c = cos(st.x * u_time);
    gl_FragColor = vec4(s, c, 1.0, 1.0);
}