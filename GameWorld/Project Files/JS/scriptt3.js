burger_blabla = document.querySelectorAll('.burger_menu');
containerrr = document.querySelectorAll('.burger_container');
header_text2 = document.querySelectorAll('.header_text2');

burger_blabla.forEach(element => {
    element.addEventListener('click', () => {
        containerrr[0].classList.toggle('a');
    })
});

box21 = document.querySelectorAll('.box2');

secondMenu = document.querySelectorAll('.second_menu');
box = document.querySelectorAll('.box2');


const names_array = [
    'Evil Dead: The Game',
    'Tomb Raider',
    'Spider-Man Remastered',
    'Battlefield V',
    'World War Z',
    'Dark Souls',
    'Half-Life 2',
    'Resident Evil 4',
    'Disco Elysium',
    'God of War',
    'Super Mario World',
    'Red Dead Redemption II',
    'Skyrim',
    'Mortal Kimbat 11'
]

const images_array = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'image7.jpg',
    'image8.jpeg',
    'image9.jpg',
    'image10.jpg',
    'image16.jpg',
    'image12.jpg',
    'image13.jpeg',
    'image14.jpeg',
    'image15.jpeg'
]

let num;
name_game = document.querySelectorAll('.name_game2');
blabla = document.querySelector('.blablabla');
neww = document.querySelector('.new');

// secondMenu.forEach(element => {
//     element.addEventListener('click', () => {
//         element.style.color = "#2AA5A0";
//         for (let i = 0; i < 4; i++) {
//             if (secondMenu[i] != element) {
//                 secondMenu[i].style.color = "black";
//             }
//         }

//         for (let i = 0; i < 5; i++) {
//             box[i].classList.add('delete');
//         }

//         if (secondMenu[0] == element) {
//             num = 0;

//         }

//         else if (secondMenu[1] == element) {
//             num = 3;
//         }

//         else if (secondMenu[2] == element) {
//             num = 7;
//         }

//         else if (secondMenu[3] == element) {
//             num = 9;
//         }

//         blabla.innerHTML = `
//             <div class="box2">
//             <div class="game_img7 gb2"><img class="img" src="IMG/${images_array[0 + num]}" alt=""></div>
//             <div class="main_name">
//                 <div class="name_game2">${names_array[0 + num]}</div>
//                 <div class="game_type2">
//                     <div class="steam_logo"></div>
//                     <div class="type_text">Экшен, Приключения</div>
//                 </div>
//             </div>

//             <div class="main_price mp3">
//                 <div class="box_sale2">-28%</div>
//                 <div class="box_price2">2895&#8381</div>
//                 <div class="box_favorites"><img class="favor_img" src="IMG/star_3.png" alt=""></div>
//             </div>
//             <!-- <div class="box_metacritica2">&#9733;9.8 <a href="https://www.metacritic.com/"
//                         target="_blank">Metacritic</a> rate</div> -->
//         </div>

//         <div class="box2">
//             <div class="game_img8 gb2"><img class="img" src="IMG/${images_array[1 + num]}" alt=""></div>
//             <div class="main_name">
//                 <div class="name_game2">${names_array[1 + num]}</div>
//                 <div class="game_type2">
//                     <div class="steam_logo"></div>
//                     <div class="type_text">Экшен</div>
//                 </div>
//             </div>

//             <div class="main_price mp4">
//                 <div class="box_sale2">-40%</div>
//                 <div class="box_price2">1495&#8381</div>
//                 <div class="box_favorites"><img class="favor_img" src="IMG/star_3.png" alt=""></div>
//             </div>
//             <!-- <div class="box_metacritica2">&#9733;9.8 <a href="https://www.metacritic.com/"
//                         target="_blank">Metacritic</a> rate</div> -->
//         </div>

//         <div class="box2">
//             <div class="game_img9 gb2"><img class="img" src="IMG/${images_array[2 + num]}" alt=""></div>
//             <div class="main_name">
//                 <div class="name_game2">${names_array[2 + num]}</div>
//                 <div class="game_type2">
//                     <div class="steam_logo"></div>
//                     <div class="type_text">Экшен</div>
//                 </div>
//             </div>

//             <div class="main_price mp5">
//                 <div class="box_sale2">-71%</div>
//                 <div class="box_price2">1595&#8381</div>
//                 <div class="box_favorites"><img class="favor_img" src="IMG/star_3.png" alt=""></div>
//             </div>
//             <!-- <div class="box_metacritica2">&#9733;9.8 <a href="https://www.metacritic.com/"
//                         target="_blank">Metacritic</a> rate</div> -->
//         </div>

//         <div class="box2">
//             <div class="game_img10 gb2"><img class="img" src="IMG/${images_array[3 + num]}" alt=""></div>
//             <!-- <div class="game_box2"> -->
//             <div class="main_name">
//                 <div class="name_game2">${names_array[3 + num]}</div>
//                 <div class="game_type2">
//                     <div class="steam_logo"></div>
//                     <div class="type_text">RPG</div>
//                 </div>
//             </div>

//             <div class="main_price mp6">
//                 <div class="box_sale2">-40%</div>
//                 <div class="box_price2">1999&#8381</div>
//                 <div class="box_favorites"><img class="favor_img" src="IMG/star_3.png" alt=""></div>
//             </div>
//             <!-- <div class="box_metacritica2">&#9733;9.8 <a href="https://www.metacritic.com/"
//                         target="_blank">Metacritic</a> rate</div> -->
//         </div>

//         <div class="box2">
//             <div class="game_img11 gb2"><img class="img" src="IMG/${images_array[4 + num]}" alt=""></div>
//             <!-- <div class="game_box2"> -->
//             <div class="main_name">
//                 <div class="name_game2">${names_array[4 + num]}</div>
//                 <div class="game_type2">
//                     <div class="steam_logo"></div>
//                     <div class="type_text">RPG</div>
//                 </div>
//             </div>

//             <div class="main_price mp6">
//                 <div class="box_sale2">-40%</div>
//                 <div class="box_price2">1999&#8381</div>
//                 <div class="box_favorites"><img class="favor_img" src="IMG/star_3.png" alt=""></div>
//             </div>
//             <!-- <div class="box_metacritica2">&#9733;9.8 <a href="https://www.metacritic.com/"
//                         target="_blank">Metacritic</a> rate</div> -->
//         </div>

//         <style>
//             .favor_img{
//                 width: 3vw;
//                 height: 3vw;
//             }

//             .img {
//                 width: 20vw;
//                 height: 10vw;
//             }
//         </style>

//         <script>

//         </script>
//             `
//     })
// });


slider_right = document.querySelectorAll('.slider_right');
slider_left = document.querySelectorAll('.slider_left');
menu = document.querySelectorAll('.menu');
gta = document.querySelector('.gta6_block');
witcher = document.querySelector('.witcher4_block');
farcry = document.querySelector('.farcry7_block');
const images = [
    'img2.jpg',
    'gta6.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'img6.jpg'
]

const images2 = [
    'pic1.jpg',
    'witcher4.jpg',
    'img1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic4.jpg'
]

const images3 = [
    'pic5.jpg',
    'farcry7.jpg',
    'pic6.jpg',
    'pic7.png',
    'pic8.webp',
    'pic9.jpg'
]

let i = 0;

menu[0].classList.add('active');
slider_right.forEach(element => {
    element.addEventListener('click', () => {
        i += 1;
        if (i == 6) i = 0;
        menu[i].classList.add('active');

        for (let x = 0; x < 6; x++) {
            if (x != i) {
                menu[x].classList.remove('active');
            }
        }
        console.log(images[i]);
        gta.style.backgroundImage = `url("./IMG/${images[i]}")`;
        witcher.style.backgroundImage = `url("./IMG/${images2[i]}")`;
        farcry.style.backgroundImage = `url("./IMG/${images3[i]}")`;
    })
});

slider_left.forEach(element => {
    element.addEventListener('click', () => {
        i -= 1;
        if (i == -1) i = 5;
        menu[i].classList.add('active');

        for (let x = 0; x < 6; x++) {
            if (x != i) {
                menu[x].classList.remove('active');
            }
        }
        gta.style.backgroundImage = `url("./IMG/${images[i]}")`;
        witcher.style.backgroundImage = `url("./IMG/${images2[i]}")`;
        farcry.style.backgroundImage = `url("./IMG/${images3[i]}")`;
    })
});

img_doc = document.querySelectorAll('.game_img1');
game_name = document.querySelectorAll('.name_game2');
type_text = document.querySelectorAll('.type_text');
sale_doc = document.querySelectorAll('.box_sale2');

let name_arr = [
    'Evil Dead: The Game',
    'Shadow of the Tomb Raider',
    'Marvel Spider-Man Remastered',
    'Battlefield V',
    'World War Z',
    'Cyberpunk 2077'
]

let type_arr = [
    'Экшен',
    'Экшен, Приключения',
    'Экшен, Приключения',
    'Экшен',
    'Экшен',
    'RPG'
]

let price_arr = [
    '2895',
    '1495',
    '1595',
    '1999',
    '1999'
]

let sale_arr = [
    '-28%',
    '-40%',
    '-71%',
    '-40%',
    '-40%'
]

let img_arr = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpeg',
    'img5.png',
    'cyberpunk.jpg'
]

test = document.querySelectorAll('.box_favorites');
container = document.querySelector('.none_fav');
musor = document.querySelectorAll('.musorniy_text');
let n1 = 0, n2 = 0, n3 = 0, n4 = 0, n5 = 0;
test.forEach(element => {
    element.addEventListener('click', () => {
        musor[0].classList.add('delete');
        foo(element);
        for (let i = 0; i < 5; i++) {
            test[i].onclick = function () {
                if (test[i] == test[0]) {
                    n1 += 1;

                    if (n1 < 2) {
                        let be = box21[i].cloneNode(true);
                        container.appendChild(be);
                        const block = document.createElement('div');
                        block.classList.add('cart-product');

                        for (let i = 0; i < 13; i++) {
                            if (test[i] == element) {
                                console.log(img_arr[i], name_arr[i], type_arr[i], price_arr[i]);
                                block.innerHTML = `
                        <div class="box2">
                        <div class="game_img5 gb2"><img class="img" src="IMG/${images_array[i]}" alt=""></div>
                        <div class="main_name">
                        <div class="name_game2">${name_arr[i]}</div>
                        <div class="game_type2">
                            <div class="steam_logo"></div>
                            <div class="type_text">${type_arr[i]}</div>
                        </div>
                        </div>
    
                        <div class="main_price mp5">
                        <div class="box_sale2">-40%</div>
                        <div class="box_price2">${price_arr[i]}&#8381</div>
                        <div class="box_favoritesss"><img class="favor_img" src="IMG/star_2.png" alt=""></div>
                        </div>
                        </div>
    
                        <style>
                        .img{
                        width: 20vw;
                        height: 10vw;
                        }
                        </style>
                        `
                            }
                        }
                    }
                }

                else if (test[i] == test[1]) {
                    n2 += 1;

                    if (n2 < 2) {
                        let be = box21[i].cloneNode(true);
                        container.appendChild(be);
                        const block = document.createElement('div');
                        block.classList.add('cart-product');

                        for (let i = 0; i < 13; i++) {
                            if (test[i] == element) {
                                console.log(img_arr[i], name_arr[i], type_arr[i], price_arr[i]);
                                block.innerHTML = `
                            <div class="box2">
                            <div class="game_img5 gb2"><img class="img" src="IMG/${images_array[i]}" alt=""></div>
                            <div class="main_name">
                                <div class="name_game2">${name_arr[i]}</div>
                                <div class="game_type2">
                            <div class="steam_logo"></div>
                            <div class="type_text">${type_arr[i]}</div>
                            </div>
                            </div>
    
                        <div class="main_price mp5">
                        <div class="box_sale2">-40%</div>
                        <div class="box_price2">${price_arr[i]}&#8381</div>
                        <div class="box_favoritesss"><img class="favor_img" src="IMG/star_2.png" alt=""></div>
                        </div>
                        </div>
    
                        <style>
                            .img{
                        width: 20vw;
                        height: 10vw;
                            }
                        </style>
                        `
                            }
                        }
                    }
                }

                else if (test[i] == test[2]) {
                    n3 += 1;

                    if (n3 < 2) {
                        let be = box21[i].cloneNode(true);
                        container.appendChild(be);
                        const block = document.createElement('div');
                        block.classList.add('cart-product');

                        for (let i = 0; i < 13; i++) {
                            if (test[i] == element) {
                                console.log(img_arr[i], name_arr[i], type_arr[i], price_arr[i]);
                                block.innerHTML = `
                    <div class="box2">
                    <div class="game_img5 gb2"><img class="img" src="IMG/${images_array[i]}" alt=""></div>
                    <div class="main_name">
                        <div class="name_game2">${name_arr[i]}</div>
                        <div class="game_type2">
                            <div class="steam_logo"></div>
                            <div class="type_text">${type_arr[i]}</div>
                        </div>
                    </div>
    
                    <div class="main_price mp5">
                        <div class="box_sale2">-40%</div>
                        <div class="box_price2">${price_arr[i]}&#8381</div>
                        <div class="box_favoritesss"><img class="favor_img" src="IMG/star_2.png" alt=""></div>
                    </div>
                </div>
    
                <style>
                    .img{
                        width: 20vw;
                        height: 10vw;
                    }
                </style>
                `
                            }
                        }
                    }
                }

                else if (test[i] == test[3]) {
                    n4 += 1;

                    if (n4 < 2) {
                        let be = box21[i].cloneNode(true);
                        container.appendChild(be);
                        const block = document.createElement('div');
                        block.classList.add('cart-product');

                        for (let i = 0; i < 13; i++) {
                            if (test[i] == element) {
                                console.log(img_arr[i], name_arr[i], type_arr[i], price_arr[i]);
                                block.innerHTML = `
                    <div class="box2">
                    <div class="game_img5 gb2"><img class="img" src="IMG/${images_array[i]}" alt=""></div>
                    <div class="main_name">
                        <div class="name_game2">${name_arr[i]}</div>
                        <div class="game_type2">
                            <div class="steam_logo"></div>
                            <div class="type_text">${type_arr[i]}</div>
                        </div>
                    </div>
    
                    <div class="main_price mp5">
                        <div class="box_sale2">-40%</div>
                        <div class="box_price2">${price_arr[i]}&#8381</div>
                        <div class="box_favoritesss"><img class="favor_img" src="IMG/star_2.png" alt=""></div>
                    </div>
                </div>
    
                <style>
                    .img{
                        width: 20vw;
                        height: 10vw;
                    }
                </style>
                `
                            }
                        }
                    }
                }

                else if (test[i] == test[4]) {
                    n5 += 1;
                    test[4].onclick = function () {
                        alert("aaecw");
                    }

                    if (n5 < 2) {
                        let be = box21[i].cloneNode(true);
                        container.appendChild(be);
                        const block = document.createElement('div');
                        block.classList.add('cart-product');

                        for (let i = 0; i < 13; i++) {
                            if (test[i] == element) {
                                console.log(img_arr[i], name_arr[i], type_arr[i], price_arr[i]);
                                block.innerHTML = `
                    <div class="box2">
                    <div class="game_img5 gb2"><img class="img" src="IMG/${images_array[i]}" alt=""></div>
                    <div class="main_name">
                        <div class="name_game2">${name_arr[i]}</div>
                        <div class="game_type2">
                            <div class="steam_logo"></div>
                            <div class="type_text">${type_arr[i]}</div>
                        </div>
                    </div>
    
                    <div class="main_price mp5">
                        <div class="box_sale2">-40%</div>
                        <div class="box_price2">${price_arr[i]}&#8381</div>
                        <div class="box_favoritesss"><img class="favor_img" src="IMG/star_2.png" alt=""></div>
                    </div>
                </div>
    
                <style>
                    .img{
                        width: 20vw;
                        height: 10vw;
                    }
                </style>
                `
                            }
                        }
                    }
                }


            }
        }

    })
});

for (let i = 1; i < 5; i++) {
    test[i].onclick = function () {
    }
}



function foo(el) {
    el.innerHTML = `
    <img class="fotka" src="IMG/star_2.png" alt="">
    <style>
    .fotka {
        width: 3vw;
        height: 3vw;
    }
    </style>
    `
}




