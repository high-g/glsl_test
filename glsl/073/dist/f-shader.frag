precision mediump float;

#define TILE_SIZE 101.

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 position = gl_FragCoord.xy;

    position.x += sin(u_time * 1.26142) * 32.; // x移動距離
    position.y += cos(u_time * 0.76142) * 32.; // y移動距離

    vec2 tile = vec2(floor(position.x / TILE_SIZE), floor(position.y / TILE_SIZE));
    if(mod(tile.y, 2.) == 0.) {
        position.x += TILE_SIZE * 0.5;
        tile = vec2(floor(position.x / TILE_SIZE), floor(position.y / TILE_SIZE));
    }

    vec2 tileCenterPos = tile * TILE_SIZE + (TILE_SIZE/2.);

    float color = 1. -distance(position, tileCenterPos) / (TILE_SIZE / 2.);

    gl_FragColor = vec4(vec3(color), 1.0);
}