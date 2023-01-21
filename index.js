$(document).ready(function () {

    var valor_selecionado;
    var largura_tela = window.screen.width;

    // Valores da avaliação
    $(".buttons_click button").on("click", function () {

        $(this).css("background-color", "#FF760C")
        $(this).css("color", "white")

        valor_selecionado = $(this).val()

        $(".buttons_click button").not($(this)).css("background-color", "#262F38")
        $(".buttons_click button").not($(this)).css("color", "#6D767F")



    })


    // Clique no botão "enviar"
    $(".envia_dados button").on("click", function () {

        if (valor_selecionado != undefined) {
            $(".info_box").css("display", "none");

            $(".box_agradecimento").css("display", "block");

            $(".info_selecionado span").html(`Você selecionou a opção ${valor_selecionado} de 5`)

            if (largura_tela <= 515) {
                $(".box_como_esta").css("height", "485px")
                $(".info_selecionado").css("width", "100%")
            }
        }
        else {
            alert("Você deve selecionar um valor para prosseguir!")
        }
    })
})