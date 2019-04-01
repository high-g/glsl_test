precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 position = st - vec2(.5);
    gl_FragColor = vec4(position, 1., 1.);
    for(int i=0; i<7; i++) {
        gl_FragColor += vec4(sin(gl_FragColor.y * 3e1 / 50.0 * u_time), sin(gl_FragColor.x * 11.), 1.0, 1.0);
    }
}