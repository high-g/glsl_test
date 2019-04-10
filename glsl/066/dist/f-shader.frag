precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265359
#define TWO_PI 6.28318530718

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;
    st = st * 2. - 1.;

    int N = 3;
    float a = atan(st.x, st.y) + PI;
    float r = TWO_PI / float(N);
    float d = cos(floor(.5 + a/r) * r - a) * length(st);
    vec3 color = vec3(1.0 - smoothstep(.4, .41, d));

    gl_FragColor = vec4(color, 1.0);
}