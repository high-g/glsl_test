precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 red = vec3(1.0, 0.0, 0.0);
    vec4 vector;
    vector[0] = red.x;
    vector[1] = red.y;
    vector[2] = red.z;
    vector[3] = 1.0;
    gl_FragColor = vector;
}