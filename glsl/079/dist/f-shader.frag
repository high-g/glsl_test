precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform sampler2D backbuffer;

float snow(vec2 uv, float scale) {
  float time = 20.0 / 60.0;
  float w=smoothstep(1.,0.,-uv.y*(scale/10.));
  if(w<.1) {return 0.; }
  uv += time/scale;
  uv.y += time*2./scale;
  uv.x += sin(uv.y+time*.5)/scale;
  
  uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;
  p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);
  k=smoothstep(0.,k,sin(f.x+f.y)*0.01);
  return k*w;
}

void main() {
  vec2 position = ( gl_FragCoord.xy / u_resolution.xy );
  vec2 uv = position;
  float c = 0.;
      c+=snow(uv,30.*sin(u_time));
      c+=snow(uv,15.*cos(u_time));
      c+=snow(uv,10.*sin(u_time));
      c+=snow(uv,8.*cos(u_time));
      c+=snow(uv,6.*sin(u_time));
      c+=snow(uv,5.*cos(u_time)); 

  vec4 back = texture2D( backbuffer, fract(vec2(1,-1)/u_resolution + position+0.1*(5.-fract(u_time/256.+uv.x/2.))*snow(uv+snow(uv+snow(uv,5.),8.),30.)) );

  gl_FragColor = back*.98 - 1./256. +  vec4(c);
}