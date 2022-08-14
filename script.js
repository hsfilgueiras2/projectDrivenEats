function toggleSelected(product){
    if(product.classList.contains("prato")){
        let currentSelected = document.querySelector(".selectedPlate");
        if (currentSelected != null)
        {
            currentSelected.classList.toggle("prato");
            currentSelected.classList.toggle("selectedPlate");
        }
        product.classList.toggle("prato");
        product.classList.toggle("selectedPlate");

    }
    else if (product.classList.contains("bebida"))
    {
        let currentSelected = document.querySelector(".selectedDrink");
        if (currentSelected != null)
        {
            currentSelected.classList.toggle("bebida");
            currentSelected.classList.toggle("selectedDrink");
        }
        product.classList.toggle("bebida");
        product.classList.toggle("selectedDrink");
    }
    else{
    let currentSelected = document.querySelector(".selectedDessert");
    if (currentSelected != null)
    {
        currentSelected.classList.toggle("sobremesa");
        currentSelected.classList.toggle("selectedDessert");
    }
    product.classList.toggle("sobremesa");
    product.classList.toggle("selectedDessert");}
    let checkPlate = document.querySelector(".selectedPlate");
    let checkDrink = document.querySelector(".selectedDrink");
    let checkDessert =  document.querySelector(".selectedDessert");
    if (checkPlate != null & checkDrink != null & checkDessert != null){
        let button = document.querySelector(".bottomButton");
        let textButton = document.querySelector(".textButton");
        button.classList.replace("bottomButton","activeButton");
        textButton.innerHTML="Fechar pedido";
    }

}
function orderButton(button){
    if (button.classList.contains("activeButton"))
    {
        let encoded = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70");
        let link = "https://wa.me/5511976790037?text=" + encoded ;
        parent.open(link);
    }
}
