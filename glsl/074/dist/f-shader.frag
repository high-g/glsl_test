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
        newp.x += 0.2;
        newp.y += 0.2;
        p = newp;
    }
    vec3 col = vec3(color_intensity);



    gl_FragColor = vec4(col, 1.0);
}