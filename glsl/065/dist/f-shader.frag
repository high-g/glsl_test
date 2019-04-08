precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float line(in vec2 _st, in float boundary, in float thin, in bool vertical) {
    float _point = vertical ? _st.x : _st.y;
    return 1.0 - (step(_point, boundary) - step(_point+thin, boundary));
}

vec3 fill(in vec2 _st, in vec2 _startPoint, in vec2 _endPoint, in vec3 _color) {
    if(step(_st, _startPoint)) {

    }
    vec3 color = vec3(0.0);
    return color;
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    vec3 line1 = vec3(line(st, .4, .01, true));
    vec3 line2 = vec3(line(st, .6, .01, true));
    vec3 line3 = vec3(line(st, .5, .01, false));
    vec3 line4 = vec3(line(st, .2, .01, false));



    vec3 color = line1
                * line2
                * line3
                * line4;

    gl_FragColor = vec4(color, 1.);
}