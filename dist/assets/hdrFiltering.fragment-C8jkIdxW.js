import{S as e}from"./index-C4TYHK2_.js";import"./helperFunctions-EIjJYcMB.js";import"./hdrFilteringFunctions-BBLzvpXY.js";import"./pbrBRDFFunctions-B5cZbgJQ.js";const r="hdrFilteringPixelShader",n=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=n);const u={name:r,shader:n};export{u as hdrFilteringPixelShaderWGSL};
