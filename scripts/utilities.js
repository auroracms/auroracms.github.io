// Cookie Functions
function createCookie(cname,value,days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
      var expires = "; expires=" + date.toGMTString();
  } else {
      var expires = "";
  }
  document.cookie = cname + "=" + value + expires + "; path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function eraseCookie(cname) {
  createCookie(cname,"",-1);
}

// Global Autocomplete function 
function globalSearch(d,c){
  $(c).autocomplete({
    source: d,
    create: function( event, ui ) {
      $(".ui-menu").addClass('slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_large');
      $(".ui-menu-item").addClass('slds-listbox__item');
      $(".ui-menu-item-wrapper").addClass('slds-media slds-listbox__option slds-listbox__option_plain slds-media_small');
      $(".ui-helper-hidden-accessible").hide();
    },
    open: function( event, ui ) {
      $(".ui-menu").addClass('slds-listbox slds-listbox_vertical slds-dropdown slds-dropdown_large');
      $(".ui-menu-item").addClass('slds-listbox__item');
      $(".ui-menu-item-wrapper").addClass('slds-media slds-listbox__option slds-listbox__option_plain slds-media_small');
      $(".ui-helper-hidden-accessible").hide();
    }
  });
}

// Load Global Header - Email Builder
$.get( "/components/global-header-email.htm", function(data) {
  $("#global-header__email").html(data);
  $(".slds-global-header_container nav li").removeClass('slds-is-active');
  $('.slds-global-header_container nav li:nth-child(' + $("#global-header__email").attr('aria-label') + ')').addClass('slds-is-active');
  if(getCookie('sessionData')!="") {
    var obj = JSON.parse(getCookie('sessionData'));
    $(".slds-avatar img").attr('title', obj.Username);
    $(".slds-avatar img").attr('alt', obj.Username);
    $("#input__editor").val(obj.Username);
    $(".slds-avatar img").attr('src', obj.Avatar);
    $("#input__territory").val(obj.Territory);
    if(obj["AccountType"]=='Admin'){$(".slds-global-actions__setup").closest(".slds-global-actions__item").removeClass('slds-hide')}
  } else {
    window.location.replace('https://auroracms.github.io/');
  }
});
$(document).on('keypress', '#global-header__email .slds-global-header__item_search input', function(){
  var emailTags = [ "c++", "java", "Robin", "Rose"];
  globalSearch(emailTags,'.slds-global-header__item_search input');
});

// Load App Launcher 
$.get( "/components/app-launcher.htm", function(data) {
  $("#app-launcher").html(data);
});

// Load Color Picker
$(document).ready(function() {
  // 7 per row
  $.each( [ "#ff0000", "#00ff00", "#0000ff", "#00ff00", "#0000ff", "#0000ff" ], function( i, value ){
    var html = '<li class="slds-color-picker__swatch" role="presentation"><a class="slds-color-picker__swatch-trigger" href="#" role="option" tabindex="0"><span class="slds-swatch" style="background: ' + value + ';"><span class="slds-assistive-text">' + value + '</span></span></a></li>'
    $( ".slds-color-picker__swatches" ).append(html);
  });
});


// Function to convert colors
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// Function to determine campaign name
function nameCampaign(){

  var inputBrand = '_' + $('option:selected', "#input__brand-picker").attr('data-brand');
  var inputTerritory = $('option:selected', "#input__brand-picker").attr('data-territory');
  var inputDate = $("#input__date").val();
  var inputID = '_' + $("#input__id").val();

  var inputZero = $("#input__campaign_zero").val();
  var inputOne = $('option:selected', "#input__campaign_one").attr('aria-label');
  var inputTwo = $('option:selected', "#input__campaign_two").attr('aria-label');
  var inputThree = $('option:selected', "#input__campaign_three").attr('aria-label');

  var dt = inputDate.replace(/-/g,'');
  var day = '_' + $.datepicker.formatDate('D', new Date(inputDate));
  var name = inputOne + dt + inputTwo + inputBrand + day + inputThree + inputID;


  $("#input__campaign").val(name.toUpperCase());
  $("#input__territory").val(inputTerritory);
  $(".slds-box").html('<p>' + name.toUpperCase() + '</p>');
  var url = "https://pages.email.secretescapes.com/aurora/campaign/validate?c=" + name;
  $.getJSON(url, function(data) {
    if(data.length>0){
      $(".slds-box").css('border-color','#ff0000');
      $(".error__campaign").removeClass('slds-hide');
      $("#wrapper button").prop( "disabled", true );
      console.log('duplicate');
    } else {
      $(".slds-box").css('border-color','');
      $(".error__campaign").addClass('slds-hide');
      $("#wrapper button").prop( "disabled", false);
    }
  });
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

$.date = function(dateObject) {
  var d = new Date(dateObject);
  var day = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  var year = d.getFullYear();
  var hour = d.getHours();
  var minute = d.getMinutes();
  if (day < 10) {
      day = "0" + day;
  }
  if (month < 10) {
      month = "0" + month;
  }
  var date = day + "/" + month + "/" + year + " " + hour + ":" + minute ;

  return date;
};