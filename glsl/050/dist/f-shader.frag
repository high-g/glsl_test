precision mediump float;

#define PI 3.14159265358
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

float box(in vec2 _st, in vec2 _size) {
    _size = vec2(0.5) - _size * .5;
    vec2 uv = smoothstep(_size, _size+vec2(0.001), _st);
    uv *= smoothstep(_size, _size+vec2(0.001), vec2(1.0)-_st);
    return uv.x * uv.y;
}

float cross(in vec2 _st, float _size) {
    return box(_st, vec2(_size, _size/4.));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    vec2 translate = vec2(cos(u_time), sin(u_time));
    st += translate * 0.35;

    color += vec3(cross(st, 0.25));
    gl_FragColor = vec4(color, 1.0);
}