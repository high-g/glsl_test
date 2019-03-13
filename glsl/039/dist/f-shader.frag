precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct) {
    //return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
    return smoothstep(pct-0.02, pct, st.y) - smoothstep(pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
//    float y = smoothstep(0.1, 0.9, st.x);
//    vec3 color = vec3(y);
//    float pct = plot(st, y);
//    color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);
//    gl_FragColor = vec4(vec3(color), 1.0);
    float pct = smoothstep(0.0, 1.0, st.x);// - smoothstep(0.0, 1.0, st.y);
    //float pct = step(0.5, st.y);
    gl_FragColor = vec4(vec3(pct), 1.0);
}
