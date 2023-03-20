var Product = []

var httpReq = new XMLHttpRequest()
httpReq.open('GET', 'https://dummyjson.com/products')
httpReq.send()
httpReq.addEventListener('readystatechange', function () {
    if (httpReq.readyState == 4 && httpReq.status == 200) {
        var x = JSON.parse(httpReq.response).products
        Product = x
        // console.log(Product);
        display()
    }
})


function display() {
    var cols = ``
    for (var i = 0; i < Product.length; i++) {

        cols += ` <div class="col-md-3 my-5 mx-5 shadow border rounded-4">
                    <div class="pt-5">
                        <h3>${Product[i].title}</h3>
                        <h4> ${Product[i].brand} </h4>
                        <h4> ${Product[i].category}</h4>
                        <p> ${Product[i].description}</p>
                        <h4>Imgs For Proudect </h4>
                            <div class="img-in  m-auto">
                                <img src="${Product[i].images[0]}" class="w-100 h-100"  alt="..">
                            </div>

                            <div class="d-flex text-danger mt-4 justify-content-evenly" id="contant">
                                <p>price : ${Product[i].price} $</p>
                                <p>rateing : ${Product[i].rating}</p>

                            </div>
                                 <p>Discount Percentage : ${Product[i].discountPercentage} %</p>

                    </div>
            </div>
        `
    }

    document.getElementById('Data').innerHTML = cols
}



