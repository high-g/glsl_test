precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

#define PI 3.1415926535

float sstep(float a, float x) {
    return smoothstep(a * 0.98, a * 1.02, x);
}

float flower(vec2 p) {
    float a = atan(p.x, p.y);
    float r = length(p);
    float arms = a * (5. + ceil(abs(sin(u_time * .5)) + 21.5) * 80.0);
    return sstep(.5, r + sin(arms) / 5.);
}

vec2 rot(vec2 p, float a) {
    return vec2(p.x * cos(a) - p.y * sin(a), p.y * cos(a) + p.x * sin(a));
}

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
    p = rot(p, u_time / 3.);

    vec2 p1 = mod(p * 5., 2.)- 1.;
    vec3 color = mix(
        vec3(.5, .2, .0),
        vec3(.9, .9, .1),
        flower(p1) - flower(.8 * p1)
    );

    color += mix(
        vec3(.5, .2, .0),
        vec3(.8, .7, .4),
        flower(p * .8)
    ) * .9;



    gl_FragColor = vec4(color, 1.0);
}