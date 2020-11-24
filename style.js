let movies = [
    {
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Parasite",
        year: "2019",
        rating: "8.6",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        comments: [{
            name: "Michaell",
            comment: "So interesting, i was really exciting."
        }],
        id: "1"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Queen's Gambit ",
        year: "2020",
        rating: "8.8",
        description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
        comments: [{
            name: "John",
            comment: "So boring, i fall asleep to it and hibernated through whole winter"
        }],
        id: "2"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Joker ",
        year: "2019",
        rating: "8.5",
        description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
        comments: [
            {
                name: "Marry",
                comment: "Put on a happy face :)"
            },
            {
                name: "Batman",
                comment: "My parents was not impressed with this"
            },
        ],
        id: "3"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
        title: "The Godfather",
        year: "1972",
        rating: "9.2",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        comments: [{
            name: "Frod",
            comment: "That was probably the best film about mafia"
        }],
        id: "4"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
        title: "Pulp Fiction",
        year: "1994",
        rating: "8.9",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        comments: [{
            name: "Jake",
            comment: "So good film"
        }],
        id: "5"
    },
    {
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Shining",
        year: "1980",
        rating: "8.4",
        description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        comments: [{
            name: "Jane",
            comment: "Soundtrack is epic"
        }],
        id: "6"
    },
]

const gallery = document.querySelector('.gallery')
const singleFilm = document.querySelector('.singleFilm')
const input = document.querySelector('.input')
const newComment = document.getElementsByClassName('newComment')
const btnAdd = document.getElementsByClassName('btnAdd')
const modal = document.getElementsByClassName('modal')
const filmName = document.getElementById('filmName')

btnAdd[0].addEventListener("click", displayModal)

let filmSelected
let eventID

function generateProducts (){
    gallery.innerHTML = ""
    movies.map(x =>{
        gallery.innerHTML += `
        <div class="filmCard" id="${x.id}" onclick="openFilm(event)">
                <h1>${x.title}</h1>
                <h2>(${x.year})</h2>
                <img src="${x.image}" alt="">
                <h2>${x.rating}</h2>
            </div>
        `
    })
}
generateProducts ()

function openFilm (e){
    let id
    if (!!e.target.id){
        id = e.target.id
    }else {
        id = e.path[1].id
    }
    let filter= movies.filter(item => item.id === id)[0]
    filmSelected = {...filter}

    showSingleFilm ()

}
function showSingleFilm (){
    gallery.style.display = 'none'
    singleFilm.style.display = 'flex'
    appendSingleFilm ()
}
function backToGallery(){
    gallery.style.display = 'flex'
    singleFilm.style.display = 'none'
}
function appendSingleFilm (){

    singleFilm.innerHTML = ""

    singleFilm.innerHTML +=`
    
            <div class=" flexColumn d-flex film" id="${filmSelected.id}">
                <div class="d-flex ">
                    <div>
                        <img src="${filmSelected.image}" alt="">
                    </div>
                    <div class="article">
                        <h2 class="title">${filmSelected.title}</h2>
                        <h3 class="year">${filmSelected.year}</h3>
                        <h3 class="rating"><i class="fas fa-star"></i>${filmSelected.rating}</h3>
                        <h4 class="description">${filmSelected.description}</h4>
                        
                    </div>
                </div>
                <div class="comments">
                    
                    <h3>${filmSelected.comments[0].name}</h3>
                    <h4 class="comment">${filmSelected.comments[0].comment}</h4>
                    <h4 class="newComment"></h4>
                    <input id="inputId" class="input" type="text" onkeypress="writeComment(event)">
                    <button class="btn" onclick="addComment(event)">Submit Comment</button>
                   
                </div>
                <div>
                    <button class="backBtn"  onclick="backToGallery()">BACK</button>
                </div>
            </div>
    `

}
function writeComment(e){
    newComment.innerHTML = ""
    e.path[2].children[1].children[2].innerText = e.target.value
    let inputValue = e.target.value
    let myComment = {
        name: "Vytenis",
        comment: inputValue
    }
    if (e.keyCode === 13){
        filmSelected.comments.push(myComment)
        newComment.innerHTML = myComment.name

        newComment.innerText = filmSelected.comments[1].comment

        console.log(filmSelected.comments)
    }

}
function addComment(e) {
    writeComment()
let text = document.getElementById('inputId').value

}
function displayModal(event){
    modal[0].style.display = 'flex'
    console.log(event)
}