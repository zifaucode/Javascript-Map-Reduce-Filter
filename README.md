# Javascript-Map-Reduce-Filter

## map()
- merubah semua elemen di dalam suatu array menjadi elemen dengan nilai yang baru.
var bilanganDesimal = [1,2,3,4,5];

var bilanganBiner = bilanganDesimal.map( (element) => {
 	return element.toString(2);   
})

console.log(bilanganBiner); // ["1", "10", "11", "100", "101"]
## reduce()
- Mengakumulasikan atau mengurangi nilai berdasarkan elemen di dalam array.

## filter()
- Membuang elemen dalam array berdasarkan kondisi yang ditetapkan.

