const  reverseString = (string) =>{
    let reversedVersion = '';
    let reversing = Array.from(string);
    reversing.reverse();
    reversing.forEach(element =>{
        reversedVersion += element;
    })
    return reversedVersion;
}
reverseString('fed');
module.exports = reverseString