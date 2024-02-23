$(document).ready(function () {
    $('.inputCEP').mask('00.000-000');

    $("#addCEPBtn").click(function () {
        var totalCEPFields = $('.inputCepBox').length;
        if (totalCEPFields < 5) {
            var newFieldID = totalCEPFields + 1;
            var newCepInput = $(`<div class="inputCepBox" id="inputCepBox${newFieldID}">
                                <label for="inputCEP${newFieldID}">CEP</label>
                                <div class="inputAndremoveIcon">
                                    <input id="inputCEP${newFieldID}" type="text" placeholder="00.000-000" class="inputCEP">
                                    <img src="removeIcon.png" alt="Remover CEP" class="removeIcon" onclick="$('#inputCepBox${newFieldID}').remove();">
                                </div>
                            </div>`);
            $(".inputCepBox").last().after(newCepInput);
            $('.inputCEP').last().mask('00.000-000');
        }
    });

    $("#consultBtn").click(function () {
        $('.inputCEP').css('border', '');
        $("#resultsContainer").empty();

        $('.inputCEP').each(function () {
            var cep = $(this).val().replace(/\D/g, '');
            if (cep.length === 8) {
                consultCEP(cep, $(this));
            } else {
                $(this).css('border', '1px solid red');
            }
        });
    });

    function consultCEP(cep, inputElement) {
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            method: 'GET',
            success: function (data) {
                if (!data.erro) {
                    var resultData = {
                        cep: data.cep,
                        logradouro: `${data.logradouro} - ${data.complemento}`,
                        bairro: data.bairro,
                        localidade: `${data.localidade} - ${data.uf}`
                    };
                    renderResult(resultData);
                } else {
                    inputElement.css('border', '1px solid red');
                }
            }
        });
    }

    function renderResult(dataResult) {
        var html = `<details>
                        <summary><b>CEP</b>: ${dataResult.cep}</summary>
                        <p><b>Logradouro</b>: ${dataResult.logradouro}</p>
                        <p><b>Bairro</b>: ${dataResult.bairro}</p>
                        <p><b>Localidade</b>: ${dataResult.localidade}</p>
                    </details>`;
        $("#resultsContainer").append(html);
    }
});
