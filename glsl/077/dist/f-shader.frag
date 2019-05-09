precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;


void main() {
    float col = floor(mod(gl_FragCoord.x, 64.0) / 32.0 + u_time * 1.2);
    col = mod(col + floor(mod(gl_FragCoord.y, 54.0) / 42.0 + u_time), 3.14159);

    gl_FragColor = col * vec4(
        sin(u_time),
        sin(u_time + (3.1426535 * 2.0 / 4.0)),
        sin(u_time + (3.1426535 * 4.0 / 2.0)),
        1.0
    );
}