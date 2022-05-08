$( function() { //loads jQuery when the webpage has finished loading
    $('#menu').menu(); //turns #menu into a jQuery menu widget
    $('#acad-units-dropdown').selectmenu({ //turns #acad-units-dropdown into a jQuery selectmenu widget

      //when selectmenu option has been changed, user is directed to the page associated with the selected option
      change: function() {
          if($(this).val() != '') {
              window.location = $(this).val();
          }
      },
      icons: { button: "ui-icon-blank" }
    });

    //implements Accordion widget to #accordion
    $( "#accordion" ).accordion({ 
      collapsible:true, //applies collapsible attribute to accordion
      event:"click", //accordion will function on click
      animate:350, //length of accordion animation
      active:0, //shows the information of the first tab on the accordion
      heightStyle:true //adjusts the height based on the content within the accordion tabs
    });

    //implements Accordion widget to #accordion1
    $( "#accordion1" ).accordion({
      collapsible:true, //applies collapsible attribute to accordion
      event:"click", //accordion will function on click
      animate:350, //length of accordion animation
      active:0, //shows the information of the first tab on the accordion
      heightStyle:true //adjusts the height based on the content within the accordion tabs
    });

    //implements Accordion widget to #accordion2
    $( "#accordion2" ).accordion({
      collapsible:true, //applies collapsible attribute to accordion
      event:"click", //accordion will function on click
      animate:350, //length of accordion animation
      active:0, //shows the information of the first tab on the accordion
      heightStyle:true //adjusts the height based on the content within the accordion tabs
    });
  } );