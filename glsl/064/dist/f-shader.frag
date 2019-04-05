precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 bl = smooothstep(vec2(0.1), st);
    vec2 bl2 = step(vec2(0.1), 1.0-st);
    float pct = bl.x * bl.y * bl2.x * bl2.y;
    vec3 color = vec3(pct);
    gl_FragColor = vec4(color, 1.0);
}