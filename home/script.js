$(function(){   //loads jQuery when the webpage has finished loading
    $('#menu').menu();  //turns #menu into a jQuery menu widget
    $('#acad-units-dropdown').selectmenu({ //turns #acad-units-dropdown into a jQuery selectmenu widget

        //when selectmenu option has been changed, user is directed to the page associated with the selected option
        change: function() {
            if($(this).val() != '') {
                window.location = $(this).val();
            }
        },
        icons: { button: "ui-icon-blank" }
    });

    //jQuery Tab Panels
    $('#home-page').click(function(){
        $('#home-tabs').toggle();        //shows or hides the tabbed information when the home element is clicked
    });
});