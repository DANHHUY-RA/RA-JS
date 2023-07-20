// Bai 1 : tinh tong cac phan tu trong mang :
let array1 = [1,2,3,4,5,6];
console.log(array1);
let sumArray = array1[0];
// console.log(sumArray);
for (let i = 1; i < array1.length; i++) {
       sumArray += array1[i];
// console.log(sumArray);
}
console.log("bai 1 SUM:",sumArray);

//bai 2+3: tim phan tu Max, Min trong mang 

let array2 = [10,4,7,4,8,2];
console.log(array2); // before

array2.sort(function(a, b){return a - b}); // sap xep tang dan 
console.log(array2); // after

console.log("bai 2 Max: ",array2[array2.length-1]); // max
console.log("bai 3 Min: ",array2[0]); // min 

//bai 4: Kiểm tra xem phần tử có tồn tại trong mảng
// cach 1 :su dung ham co san 
let array4 = [1,2,3,4,5,6,7,8];
console.log("array4 :",array4);
let itemcheck = Number(prompt("bai 4: input item check"));
console.log("bai 4 :check phan tu " + itemcheck + " resuft:",array4.includes(itemcheck));

// cach 2 : khong su dung ham co san :

//bai 5 : Đảo ngược giá trị trong mảng
let array5 = [1,2,3,4,5];
array5.sort(function(a,b){return b-a}); // sap xep giam dan 
console.log("bai 5 dao nguoc gia tri :",array5);

//bai 6 : Lọc các phần tử chẵn trong mảng
let array6 = [1,2,3,4,5,6,7,8,10];
let fillter = array6.filter((i) => i % 2 == 0 );
console.log("bai 6 so chan trong mang :",fillter);

//bai 7: tim so lan xuat hien 
let array7 = [1,2,9,4,5,6,10,8,9,10];
let searchNumber = Number(prompt("bai 7 : input item check"));
let count = 0;
    for(let i=0;i<array7.length;i++){
      if(array7[i]==searchNumber) 
        count ++;
    }
    console.log( "bai 7 : Phan tu " +  searchNumber  + " xuat hien " + count +  " lan");



//bai 8 : sap xep tang dan 
let array8 = [4, 2, 9, 5, 1];
array8.sort(function(a,b){return a-b});
console.log("bai 8 sap xep tang dan :",array8);




