let pronombre =['the', 'those', 'they', 'she', 'he'];

let adjetivo =['meme', 'queen', 'Armin', 'Rick', 'Rachel'];

let objeto =['fromSherk', 'OfficeShow', 'freehim', 'Friends','TaylorSwift'];
function concatenar (pro, adj,obj){
for (count1 = 0; count1< pronombre.length;count1++){
for (count2 = 0; count2 < adjetivo.length; count2++){
for (count3 = 0; count3 < pronombre.length; count3++){
console.log(pronombre[count1]+ adjetivo [count2]+ objeto[count3] + '.com');
}
}
}
};
concatenar(pronombre,adjetivo,objeto);


