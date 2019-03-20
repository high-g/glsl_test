precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec2 pos = vec2(0.5) - st;

    float r = length(pos)*2.0;
    float a = atan(pos.y, pos.x);
    float f = cos(a*(2.*u_time));

    //vec3 color = vec3(smoothstep(f, f, r));
    vec3 color = vec3(f);
    gl_FragColor = vec4(color, 1.0);
}