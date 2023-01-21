$(document).ready(function(){

    var valor_selecionado;
        
    // Valores da avaliação
    $(".buttons_click button").on("click", function(){

        $(this).css("background-color", "#FF760C")
        $(this).css("color", "white")

        valor_selecionado = $(this).val()

        console.log(valor_selecionado)

        $(".buttons_click button").not($(this)).css("background-color", "#262F38")
        $(".buttons_click button").not($(this)).css("color", "#6D767F")

    })


        // Clique no botão "enviar"
        $(".envia_dados button").on("click", function(){

            if(valor_selecionado != undefined){
            $(".info_box").css("display", "none");
    
            $(".box_agradecimento").css("display", "block");

            $(".info_selecionado span").html(`Você selecionou a opção ${valor_selecionado} de 5`)
            }
            else{
                alert("Você deve selecionar um valor para prosseguir!")
            }
        })
})