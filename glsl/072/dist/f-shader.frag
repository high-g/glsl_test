precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec2 tile(vec2 _st, float _zoom) {
    return fract(_st * _zoom);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st = tile(st, 3.0);

    vec3 color = vec3(0.0);
    gl_FragColor = vec4(color, 1.0);
}