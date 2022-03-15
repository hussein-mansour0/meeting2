


function show_cards(){
    products.forEach(p => {
        var cardbox = document.createElement('div')
        var h1 = document.createElement('h1')
        h1.innerText=p.name;
        var h2 = document.createElement('h2')
        h2.innerText=p.price;
        //put inside the cardbox 
        //then put the cardbox inside the body

        cardbox.appendChild(h1)
        cardbox.appendChild(h2)
        document.body.appendChild(cardbox)
        document.getElementById('mydiv').appendChild(cardbox)
        
    });
    
}
function add_card(){

}
show_cards();