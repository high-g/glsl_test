precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

vec3 color1 = vec3(.149, .141, .912);
vec3 color2 = vec3(1., .833, .224);

float plot(vec2 st, float pct) {
    return smoothstep(pct-.01, pct, st.y) - smoothstep(pct, pct+.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);
    color = mix(color1, color2, st.x);
    color = mix(color, vec3(0.0, 0.0, 1.0), plot(st, st.x));
    gl_FragColor = vec4(color, 1.0);
}