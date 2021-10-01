/*let w = () => {
    console.log("hello world")
}
*/
// index.html pickupページへの切り替え
let pickUp = () => {
    location.href = './product.html'
}

//contact.html用


let check=()=>{
    console.log("Yes, it is working!!!")
}

//
let thanks = () => {
    location.href = './thanks.html'
    console.log("hello")
}

//Flickity用のコード

//自動スクロール設定
let elem = document.getElementById("fs");
let autoFlickity = new Flickity(elem, {
    autoPlay: 2000

});
//Flickity用のコード終わり








//product用配列
/*let products = [
    { name: "ドイツパン", price: 300, img: "images/p1.jpeg" },
    { name: "ライ麦パン", price: 260, img: "images/p2.jpeg" },
    { name: "ショートフランスパン", price: 320, img: "images/p3.jpeg" },
    { name: "チュロス", price: 400, img: "images/p4.jpeg" },
    { name: "あんぱん", price: 380, img: "images/p5.webp" },
    { name: "カレーパン", price: 290, img: "images/p6.jpeg" },
    { name: "クロワッサン", price: 450, img: "images/p7.webp" },
    { name: "プレッツェル", price: 280, img: "images/p8.jpeg" },
    { name: "黒パン", price: 190, img: "images/p1.jpeg" },
    { name: "ライ麦パン", price: 320, img: "images/p2.jpeg" },
    { name: "かたいパン", price: 350, img: "images/p3.jpeg" },
    { name: "シュガーチュロス", price: 270, img: "images/p4.jpeg" },
    { name: "激辛カレーパン", price: 300, img: "images/p6.jpeg" }
]

let showProducts = () => {
    for (i = 0; i < products.length; i++) {
        document.write(
            `<img src="${products.name[i]}" >`)
    }


}
*/
