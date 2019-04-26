precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
    vec2 st = (gl_FragCoord.xy/u_resolution) + u_mouse / 4.0;
    float color = 0.0;
    color += sin(st.x + u_time + st.y * st.y);
    color += color * cos(sin(st.x / 0.05));
    gl_FragColor = vec4(color, -color, color, 1.0);
}