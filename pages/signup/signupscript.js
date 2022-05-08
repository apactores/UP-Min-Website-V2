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

    $('input[type="radio"]').checkboxradio();     //jQuery UI radio

    $('#date-of-birth').datepicker();    //jQuery UI datepicker
    
    $('#province').autocomplete({
        source: provinces           //jQuery UI autocomplete
    });

    $('#year-level').spinner();     //jQuery UI spinner

    //operation to store the submitted information in a text file
    $('input[type="submit"]').click(function(event){
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
                 toPrint.push($('input[type="radio"]:checked').val());
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
      });
});