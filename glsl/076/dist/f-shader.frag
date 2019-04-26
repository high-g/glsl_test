precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec3 c = vec3(1.0);
    vec2 f = vec2(0.0);
    float light = 0.0;

    for(float i=1.0; i<6.0; i+= 1.0) {
        f = vec2(sin(u_time + uv.x * i * i * i * i));
        light += 0.03 / distance(uv, f);
    }

    c *= light;
    gl_FragColor = vec4(c, 1.0);
}