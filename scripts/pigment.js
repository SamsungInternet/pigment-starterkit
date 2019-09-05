let currentColor = document.getElementsByClassName('current-color-text');
let irgb = document.getElementById('irgb');
let ihsl = document.getElementById('ihsl');
let icmyk = document.getElementById('icmyk');

 function convertColor(color){
      
       let rgb = hexaToRgb(color);
       let hsl = hexToHSL(color);
       let cmyk = hexToCMYK(color);

       irgb.value = rgb.r+', ' + rgb.g+',' + rgb.b;
       ihsl.value = hsl.h+'° ' + hsl.s+'% ' + hsl.l+'%';
       icmyk.value = cmyk.c+'% ' + cmyk.m+'% '+ cmyk.y+'% '+ cmyk.k+'%';
    
}

