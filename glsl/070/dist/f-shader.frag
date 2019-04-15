precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float circle(in vec2 _st, in float _radius) {
    vec2 l = _st - vec2(0.5);
    return 1. - smoothstep(
        _radius-(_radius*0.01),
        _radius+(_radius*0.01),
        dot(l, l) * 4.0
    );
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);
    st *= 2.0;
    st = fract(st);
    //color = vec3(st, 0.0);
    color = vec3(circle(st, 0.5));
    gl_FragColor = vec4(color, 1.0);
}