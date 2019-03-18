precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec3 color1 = vec3(1.0, 0.0, 0.0);
vec3 color2 = vec3(0.0, 0.0, 1.0);

float plot(vec2 st, float pct) {
    return smoothstep(pct-0.01, pct, st.y) - smoothstep(pct, pct+0.01, st.y);
}

void main () {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
//    float pct = abs(sin(u_time));
//    vec4 color = vec4(mix(color1, color2, pct), 1.0);
//    gl_FragColor = color;

    vec3 color = vec3(0.0);
    vec3 pct = vec3(st.x);

    color = mix(color1, color2, pct);
    color = mix(color, vec3(1.0, 0.0, 0.0), plot(st, pct.r));
    color = mix(color, vec3(0.0, 1.0, 0.0), plot(st, pct.g));
    color = mix(color, vec3(0.0, 0.0, 1.0), plot(st, pct.b));

    gl_FragColor = vec4(color, 1.0);
}