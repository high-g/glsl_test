precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 position = (gl_FragCoord.xy / u_resolution.xy) / 4.0;
    vec3 color = vec3(0.0);
    color.x = sin(position.x * u_time);
    color.y = sin(position.y * u_time);
    gl_FragColor = vec4(color, 1.0);
}