precision mediump float;

uniform vec2 u_resolution;

float circle(vec2 st, vec2 r, float s1, float s2) {
    float pct = distance(st, r);
    return smoothstep(s1, s2, pct);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float color = circle(st, vec2(0.5), 0.05, 0.15);
    gl_FragColor = vec4(vec3(color), 1.0);
}