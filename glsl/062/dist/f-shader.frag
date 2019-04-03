precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float circle(in vec2 _st, in float _radius) {
    vec2 dist = _st - vec2(0.5);
    return smoothstep(
        _radius - (_radius * 0.01),
        _radius + (_radius * 0.01),
        dot(dist, dist)* 4.0
    );
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float pct = 0.0;
    vec3 color = vec3(0.0);

    // distance 2点間の距離
//    pct = distance(st, vec2(1.0));
//    color = vec3(pct);

    // dot 2点間の内積
    //color = vec3(circle(st, 0.5));

    vec2 dist = st - vec2(0.5);
    color = vec3(dot(dist, dist));

    gl_FragColor = vec4(color, 1.0);
}