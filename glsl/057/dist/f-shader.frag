precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

vec3 color1 = vec3(.1, 1.0, .1);
vec3 color2 = vec3(1.0, .0, .1);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);
    float pct = abs(sin(u_time));
    color = mix(color1, color2, 1.0);
    gl_FragColor = vec4(color, 1.0);
}