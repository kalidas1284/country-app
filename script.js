function search() {
    let cname = document.getElementById('cname').value
    fetch(`https://restcountries.com/v3.1/name/${cname}?fullText=true`)//by default get method
        .then(data => data.json())//object->array of data
        .then(data => countryDisplay(data))
        .catch(error => alert("Enter a valid Country name"));
    function countryDisplay(data) {
        for (let cntry of data) {
            console.log(cntry);
            htmlData = `<div class="card p-3 text-center shadow-lg p-3 bg-white rounded mt-5" style="width:700px;height:500px;margin-left:25%;">
                        <div class="card-body m-5">
                            <div class="main1 d-flex">
                                    <div class="img1">
                                        <img class="card-img-top" src="${cntry.flags.svg}" alt="Card image cap" style="width:200px;height:200px;">
                                        <div class="img2">
                                        <h5 class="card-title">${cntry.name.common}</h5>
                                        <p class="card-text">${cntry.flags.alt}</p>
                                        </div>
                                    </div>
                                <div class="main2">
                                <img class="card-img-top" src="${cntry.coatOfArms.svg}" alt="Card image cap" style="width:200px;height:200px;">
                                </div>
                            </div>    
                        </div>    
                    </div>`
            result.innerHTML = htmlData;
        }
    }
}