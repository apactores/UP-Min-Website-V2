$(function(){   //loads jQuery when the webpage has finished loading

    //list of provinces in Mindanao
    var provinces = [
        "Agusan del Norte",
        "Agusan del Sur",
        "Basilan",
        "Bukidnon",
        "Camiguin",
        "Compostela Valley",
        "Cotabato (North Cotabato)",
        "Davao del Norte",
        "Davao del Sur",
        "Davao Occidental",
        "Davao Oriental",
        "Dinagat Islands",
        "Lanao del Norte",
        "Lanao del Sur",
        "Maguindanao",
        "Misamis Occidental",
        "Misamis Oriental",
        "Sarangani",
        "South Cotabato",
        "Sultan Kudarat",
        "Sulu",
        "Surigao del Norte",
        "Surigao del Sur",
        "Tawi-Tawi",
        "Zamboanga del Norte",
        "Zamboanga Sibugay",
    ];

    $('#date-of-birth').datepicker();    //jQuery UI datepicker
    
    $('#province').autocomplete({
        source: provinces           //jQuery UI autocomplete
    });

    $('#year-level').spinner();     //jQuery UI spinner

    //operation to validate form
    $('button[type="submit"]').click(// Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {    //if there are fields without input, warn user to input all fields
            event.preventDefault()
            event.stopPropagation()
            } else {        //when all fields have inputs, store the submitted information in a text file
                event.preventDefault();     //prevents the page from refreshing when submit button is clicked
                var toPrint = [];
                var idNames = [
                    'first-name', 
                    'middle-name', 
                    'last-name', 
                    'gender', 
                    'date-of-birth',
                    'province',
                    'year-level'
                ];

                //stores the information inputted in the form to the array named toPrint
                for (var i = 0; i < idNames.length; i++) {
                    if (idNames[i] == "gender") {
                        toPrint.push($('input[name=options]:checked').val());
                    } else {
                        toPrint.push($('#'+idNames[i]).val());
                    }
                }

                var infoCategories = [      //list of categories; used to organize stored information
                    'First name: ',
                    'Middle name: ',
                    'Last name: ',
                    'Gender: ',
                    'Date of Birth: ',
                    'Province: ',
                    'Year level: '
                ];

                var information = "";

                //concatenate stored information with its appropriate category to organize data
                for (var i = 0; i < toPrint.length; i++) {
                    information = information + infoCategories[i] + toPrint[i] + "\n";
                }

                //write the stored information in a downloadable .txt file 
                var blob = new Blob([information], 
                    {
                        type:"application/json;utf - 8"
                    });

                var link = document.createElement('a');
                link.setAttribute('download', "information.txt");
                link.setAttribute('href', window.URL.createObjectURL(blob));
                link.click();
            }
            form.classList.add('was-validated')
        }, false)
        })
    })());
});
