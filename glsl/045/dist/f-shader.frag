precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 st, vec2 r, float s1, float s2) {
    float pct = distance(st, r * abs(sin(u_time))) * abs(sin(u_time * 1.5));
    return smoothstep(s1, s2, pct);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float color = circle(st, vec2(0.2,0.4), 0.05, 0.15);
    float color2 = circle(st, vec2(0.8, 0.5), 0.25, 0.55);
    float color3 = circle(st, vec2(0.1, 0.3), 0.25, 0.35);
    float mixColor = color / color2 - color3;
    gl_FragColor = vec4(vec3(mixColor), 1.0);
}