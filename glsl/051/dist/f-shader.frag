precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float random (vec2 st) {
    return abs(sin(u_time * fract(
        sin(dot(st.xy,
        vec2(12.,78.233))) * 43758.54123
    )));
}

void main () {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);
    //color = vec3(abs(sin(u_time*0.1)), 1.0, 1.0);
    //color = vec3(abs(sin(u_time*1000000000.)), 1.0, 1.0);
    color = vec3(random(st), random(st), random(st));
    gl_FragColor = vec4(color, 1.0);
}