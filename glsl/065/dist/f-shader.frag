precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float line(in vec2 _st, in float boundary, in float thin, in bool vertical) {
    float _point = vertical ? _st.x : _st.y;
    return 1.0 - (step(_point, boundary) - step(_point+thin, boundary));
}

vec3 fill(in vec2 _st, in vec2 _startPoint, in vec2 _endPoint, vec3 _color) {
    vec3 color = _color;// vec3(1.0);
    if(step(_st, _startPoint) == vec2(1.0) && step(_st, _endPoint) == vec2(0.0)) {
        color = _color;
    }
    return color;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 line1 = vec3(line(st, .4, .01, true));
    vec3 line2 = vec3(line(st, .6, .01, true));
    vec3 line3 = vec3(line(st, .5, .01, false));
    vec3 line4 = vec3(line(st, .2, .01, false));

    vec3 fill1 = fill(st, vec2(.0, .0), vec2(.2, .3), vec3(.32, .03, .98));

    vec3 color = line1
                * line2
                * line3
                * line4
                * fill1;

    gl_FragColor = vec4(color, 1.);
}