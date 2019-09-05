/* Library to Convert Hexa colours into RGB, CMYK, HLS, HLV */

function hexaToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}


function hexToCMYK(hex) {
    let c = 0;
    let m = 0;
    let y = 0;
    let k = 0;
   
    hex = (hex.charAt(0)=="#") ? hex.substring(1,7) : hex;
   
      
    let r = parseInt(hex.substring(0,2),16); 
    let g = parseInt(hex.substring(2,4),16); 
    let b = parseInt(hex.substring(4,6),16); 
   
    // BLACK
    if (r==0 && g==0 && b==0) {
     k = 1;     
    }
   
    c = 1 - (r/255);
    m = 1 - (g/255);
    y = 1 - (b/255);
   
    var minCMY = Math.min(c,Math.min(m,y));
   
    c = parseInt(( (c - minCMY) / (1 - minCMY) ) *100) ;
    m = parseInt (( (m - minCMY) / (1 - minCMY) ) *100 );
    y = parseInt (((y - minCMY) / (1 - minCMY) ) *100);
    k = parseInt(minCMY*100);

    let CMYK = new Object;
    CMYK['c'] = c;
    CMYK['m'] = m;
    CMYK['y'] = y;
    CMYK['k'] = k;

    return CMYK;

   }



   function hexToHSL(hex){
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if(max == min){
      h = s = 0; // achromatic
    }else{
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    let HSL = new Object();
    HSL['h']=parseInt(h*360);
    HSL['s']=parseInt(s*100);
    HSL['l']=parseInt(l*100);
    return HSL;

   }


   function hexToHSV(hex){
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);
    
    r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if (max == min) { 
      h = s = 0; 
    }else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    }
			switch (max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			
			h /= 6;
		
		
		
    let HSV = new Object();
    HSV['h']=(h*360+0.5)|0;
    HSV['s']=(s*100+0.5)|0;
    HSV['v']=(l*100+0.5)|0;
    return HSV;
      
   }

