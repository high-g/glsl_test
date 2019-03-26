precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct) {
    return smoothstep(pct-0.01, pct, st.y) - smoothstep(pct, pct+0.01, st.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    //float y = pow(st.x, 5.0);
    //float y = step(0.5, st.x);
    float y = sin(st.x);
    float pct = plot(st, y);
    vec3 color = vec3(y) * (1.0-pct) + pct * vec3(1.0, 0.0, 0.0);
    gl_FragColor = vec4(color, 1.0);
}