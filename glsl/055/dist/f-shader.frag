precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float plot(vec2 st, float pct) {
    return smoothstep(pct-0.05, pct, st.y) - smoothstep(pct, pct+0.05, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution * 20.0;
//    float y = sin(st.x) + 10.;
    float y = cos(st.x) + 10.;
    float pct = plot(st, y);
    vec3 color = vec3(y);
    gl_FragColor = vec4(vec3(pct), 1.0);
}