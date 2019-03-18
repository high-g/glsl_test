precision mediump float;

uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    float pct = 0.0;

    // easy
    pct = distance(st, vec2(0.5));

//    vec2 toCenter = vec2(0.5) - st;
//    pct = length(toCenter);


//    vec2 tc = vec2(0.5) - st;
//    pct = sqrt(tc.x * tc.x + tc.y * tc.y);

    float color = step(pct, 0.1);
    gl_FragColor = vec4(vec3(color), 1.0);
}