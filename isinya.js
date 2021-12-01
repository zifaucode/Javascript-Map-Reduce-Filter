<script>
  //================ map() ======================
var bilanganDesimal = [1,2,3,4,5];

var bilanganBiner = bilanganDesimal.map( (element) => {
 	return element.toString(2);   
})

console.log(bilanganBiner); // ["1", "10", "11", "100", "101"]

// array.map( function(element, index, array) {
//     ...
//    }, thisArgument);

// Parameter :
// 1. element (nilai dari elemen)
// 2. index (index dari tiap lintasan, dari kiri ke kanan ( 0 ke N ) )
// 3. array (array semula yang memanggil fungsi ini)
// 4. thisArgument ( Opsional, object yang akan di arahkan sebagai this di dalam fungsi callback )

//================ reduce() ======================

var bali = [
	{ regency:'Jembrana', population:114863 },
	{ regency:'Tabanan', population:209308 },
	{ regency:'Badung', population:277536 },
	{ regency:'Gianyar', population:208443 },
	{ regency:'Klungkung', population:79233 },
	{ regency:'Bangli', population:106166 },
	{ regency:'Karangasem', population:193787 },
	{ regency:'Buleleng', population:294418 },
	{ regency:'Denpasar', population:403292 }
];

var sum = bali.reduce(function(val, element) {
	return val + element.population;
}, 0);

console.log(sum) // 1887046

// array.reduce(function(value, element, index, array) {
//  …
//  }, initialValue);

// Parameter :
// 1. value (nilai yang di akumulasikan pada tiap callback)
// 2. element (nilai dari element)
// 3. index (index dari tiap lintasan, dari kiri ke kanan ( 0 ke N ) )
// 4. array (array semula yang memanggil fungsi ini)
// 5. initialValue ( Opsional, nilai yang digunakan sebagai nilai awal di callback yang pertama (index 0) )


//================ filter() ======================

var arrayBaru = array.filter(function(element, i, array) {
	return (element % 2 === 0); 
});

// Kekurangan
// map, reduce, dan filter bukanlah silver bullet dalam melakukan perulangan, beberapa kekurangan nya adalah sebagai berikut.
// Performance
// Dari sisi performance , map, reduce, dan filter masih dibawah perulangan for. Disarankan untuk menggunakan for ketika kira harus memproses array dengan elemen yang cukup banyak (contoh : lebih dari 1000 elemen)
// Perulangan kompleks
// Masih lebih cocok menggunakan for dalam perulangan yang kompleks, misalkan harus menghentikan ( break ) proses perulangan ketika suatu kondisi tercapai.

</script>
