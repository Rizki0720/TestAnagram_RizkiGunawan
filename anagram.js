
const anagram = (str) => {
    const arr = {}
    // membuat sebuah perulangan untuk mengecek setiap karakter
    for(const i of str) {
        const key = i.split('').sort().join('') // variabel key untuk mengurutkan setiap karakter
        if (arr[key]){ 
            arr[key].push(i) // jika karakter sudah ada pada variabel arr, tambahkan karakter i
        }else{
            arr[key] = [i] // jika karakter belum ada, array baru dengan karakter akan dibuat untuk key 
        }
    }
    return Object.values(arr)
}
const anagramOfArray= ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']
const result = anagram(anagramOfArray) // membuat variabel result untuk menampung fungsi anagram dan memasukkan argumen anagramGroup
console.log(result)
