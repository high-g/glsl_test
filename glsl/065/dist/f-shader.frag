precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float line(vec2 _st, float boundary, float thin, bool vertical) {
    float _point = vertical ? _st.x : _st.y;
    return 1. - (step(_point, boundary) - step(_point+thin, boundary));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    float point1 = line(st, .4, .01, true);
    float point2 = line(st, .6, .01, true);
    float point3 = line(st, .5, .01, false);
    float point4 = line(st, .2, .01, false);

    vec3 color = vec3(point1)
                * vec3(point2)
                * vec3(point3)
                * vec3(point4);

    gl_FragColor = vec4(color, 1.);
}