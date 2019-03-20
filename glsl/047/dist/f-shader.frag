precision mediump float;

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float d = 0.0;
    d = length(st);
    gl_FragColor = vec4(vec3(fract(d*10.0)), 1.0);
}