precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main () {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float color = step(0.49, st.x);
    float color2 =  step(0.5, st.x);

    float total_color = color - color2;

    gl_FragColor = vec4(vec3(total_color), 1.0);
}