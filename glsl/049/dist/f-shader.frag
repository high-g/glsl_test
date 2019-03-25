precision mediump float;

#define PI 3.14159265358
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

vec3 makeFigure (vec2 st, int N) {
    float a = atan(st.x, st.y) + PI;
    float r = TWO_PI / float(N);
    float d = cos(floor(.5+a/r)*r-a)*length(st);
    return vec3(1.0-smoothstep(.4, .41, d));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution * 2. - 1.;
    vec3 color = makeFigure(st, 5);
    gl_FragColor = vec4(color, 1.0);
}