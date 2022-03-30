const capitalize = (string) =>{
    let capitalized = '';
    let lowerCases = '';
    for(let i=0;i<string.length;i += 1){
        if(i === 0){
            capitalized += string[0];
        }else{
            lowerCases += string[i];
        }
    }
    return capitalized.toUpperCase() + lowerCases;
}
module.exports = capitalize