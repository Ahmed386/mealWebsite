

let asidewidth = $('.black').innerWidth() ;

$('.dash ').click(function () {
    
    if ($('.black').css('left')== "0px") {
        $(".white").animate({left : "0"},600)
        $('.black').animate( {left : -asidewidth} , 600  )
        $('.fa-align-justify').removeClass('fa-times')
        $("li , .mediaicons , .copy").fadeOut( 100);



    }else{
        $(".white").animate({left : "220px"},600)
        $('.black').animate( {left : 0} , 600 ,function () {
            $("li , .mediaicons , .copy").fadeIn( 400);

        })
        $('.fa-align-justify').addClass('fa-times')



    }
    
})

let container =[];
async function foodApi() {
    let respond = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php ')
    let resault = await respond.json()
    container = resault.categories

    console.log(container);
    displayapi()

}
foodApi()

function displayapi() {
    
    let html = '' ; 
    for (let i = 0; i < container.length; i++) {
        
        html += `  <div class="col-lg-3">
        <div onclick="catApi('${container[i].strCategory}')"  class="item position-relative overflow-hidden rounded">
            
                <div class="overlay  position-absolute p-1 text-center text-black ">
                <h4>${container[i].strCategory}</h4>
                <p>${container[i].strCategoryDescription}</p>
                </div>
            
            <img class="w-100" src="${container[i].strCategoryThumb}" alt="">
        </div>
    </div>`
    }
    document.querySelector('.show').innerHTML = html ;

}






async function catApi(term) {
    let respond = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
    let resault = await respond.json()
    container = resault.meals

    console.log(container);
    displayapicat()

}

function displayapicat() {
    
    let html = '' ; 
    for (let i = 0; i < container.length; i++) {
        
        html += `  <div "  class="col-lg-3">
        <div onclick="giveId(${container[i].idMeal})" class="item  position-relative overflow-hidden rounded">
            
                <div class="overlay  position-absolute p-1 d-flex align-items-center text-black fs-4">${container[i].strMeal}</div>
            
            <img class="w-100" src="${container[i].strMealThumb}" alt="">
        </div>
    </div>`
    }
    document.querySelector('.show').innerHTML = html ;

}
async function giveId(term)  {
    let respond = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${term}`)
    let resault = await respond.json()
    container = resault.meals


    displayoneelment()

}
function displayoneelment() {
    
    let html = '' ; 
    for (let i = 0; i < container.length; i++) {
        
        html += `  <div class="col-md-5 mb-5">
        <div class="right text-center text-white">
            <img class="w-100" src="${container[i].strMealThumb}" alt="">
            <h2>${container[i].strMeal}</h2>
        </div>
    </div>
    <div class="col-md-7 mb-5">
        <div class="left text-white text-start">
            <h4 >Instructions </h4>
            <p>${container[i].strInstructions}</p>
            <p><b>Area : </b> ${container[i].strArea}</p>
            <p><b>Category : </b> ${container[i].strCategory} </p>
            <h3>Recipes :</h3>
            <ul class="d-flex flex-wrap w-100  list-unstyled">
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure1} ${container[i].strIngredient1}</li>
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure2} ${container[i].strIngredient2}</li>
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure3} ${container[i].strIngredient3}</li>
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure4} ${container[i].strIngredient4}</li>
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure5} ${container[i].strIngredient5}</li>
                <li class="alert alert-info p-1 rounded m-2">${container[i].strMeasure6} ${container[i].strIngredient6}</li>
                

            </ul>
            <h3>Tags : </h3>
            <div class="my-3">
                <span class="alert  p-2 alert-warning" role="alert">
                ${container[i].strTags}
                </span>
            </div>
            <div>
                <a class="btn text-white btn-success" target="_blank" href="${container[i].strSource}">Source</a>
            <a class="btn text-white btn-danger" target="_blank" href="${container[i].strYoutube}">Youtube</a>
            </div>
        </div>
    </div>`
    }
    document.querySelector('.show').innerHTML = html ;

}
$(document).ready(function () {
    $(".loading").fadeOut(1000,function () {
        $(document.body).css('overflowY','visible')
    })
})