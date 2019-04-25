precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    vec2 f = vec2(0.0);
    vec3 c = vec3(1.0);
    float light = 0.0;

    for(float x=0.1; x<6.0; x+=1.0) {
        f = vec2(
            sin(u_time)
        );
        light += distance(uv, f);
    }
    c *= light;
    gl_FragColor = vec4(c, 1.0);
}