precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;


void main() {
    float col = floor(mod(gl_FragCoord.x, 64.0) / 32.0 + u_time * 1.2);
    gl_FragColor = col * vec4(
        sin(u_time),
        sin(u_time),
        sin(u_time),
        1.0
    );
}