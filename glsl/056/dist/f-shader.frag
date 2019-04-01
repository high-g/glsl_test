precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

vec3 rota(vec3 gg){
    return vec3(
        sin(gg.x * 10.) * cos(u_time * gg.y + u_time) + cos(u_time * cos(u_time * gg.y)),
        cos(u_time * 0.09 * gg.y) + cos(5.2 * u_time * gg.z + cos(3.27 * u_time * cos(0.027 * u_time * gg.y))),
        cos(gg.z * u_time * 0.005) + cos(0.0037 * u_time * sin(.47 * u_time * gg.y)) + cos(0.27 * u_time * gg.z)
    );
}
void main( void ) {
    vec2 position = gl_FragCoord.xy / u_resolution.xy;
    vec3 gg = vec3(position, u_time * 0.1);
    gg = rota(gg);
    gg = rota(gg.xyz);
    gg = rota(gg.yzx);
    gg = rota(gg.zyx);
    gg = rota(gg);
    gg = rota(gg);
    gg = rota(gg);
    gl_FragColor = vec4(gg, 1.0);
}