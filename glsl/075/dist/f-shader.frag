precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(
        st.x * abs(0.9 * sin(u_time)),
        0.5 * u_mouse.y,
        st.y * abs(0.8 * cos(u_time)),
        1.0
    );
}
