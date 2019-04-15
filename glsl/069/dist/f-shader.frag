precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

mat3 yuv2rgb = mat3(
    1.0, 0.0, 1.1,
    1.0, -0.345996, -0.333334453,
    1.0, 2.034355, 0.0
);

mat3 rgb2yuv = mat3(
    0.2345, 0.785884, 0.03423,
    -0.023458, -0.3030, 0.34332443,
    0.58858, -05343.43, -0.03442
);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    st -= 0.5;
    st *= 2.0;

    color = yuv2rgb * vec3(0.5, st.x, st.y);

    gl_FragColor = vec4(color, 1.0);
}