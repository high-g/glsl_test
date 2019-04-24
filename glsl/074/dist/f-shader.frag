precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

const int complexity = 47;
const float mouse_factor = 56.0;
const float mouse_offset = 0.0;
const float fluid_speed = 108.0;
const float color_intensity = 0.8;

void main() {
    vec2 p = (2.0 * gl_FragCoord.xy - u_resolution.xy) / max(u_resolution.x, u_resolution.y);

    for(int i=1; i<complexity; i++) {
        vec2 newp = p + u_time * 0.001;
        newp.x += 0.2/float(i) * sin(float(i) * p.y + u_time / fluid_speed + 0.3 * float(i)) + 0.5;
        newp.y += 0.2/float(i) * sin(float(i) * p.x + u_time / fluid_speed + 0.3 * float(i+10)) + 0.5;
        p = newp;
    }
    vec3 col = vec3(
        color_intensity * sin(3.0 * p.x) + color_intensity,
        color_intensity * sin(3.0 * p.y) + color_intensity,
        color_intensity * sin(p.x + p.y) + color_intensity
    );

    col += vec3(0.01 * sin(p.x) * sin(p.y) + 0.4);

    gl_FragColor = vec4(col, 1.0);
}