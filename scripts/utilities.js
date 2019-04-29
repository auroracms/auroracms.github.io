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
  if(getCookie('sessionData')!="" && getCookie('sessionData')!=NULL) {
    var obj = JSON.parse(getCookie('sessionData'));
    $(".slds-avatar img").attr('title', obj.Username);
    $(".slds-avatar img").attr('alt', obj.Username);
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
  var a = $("#input_audience").val();
  var d = $("#input_send-date").val();
  var dt = d.replace(/-/g,'');
  var day = '_' + $.datepicker.formatDate('D', new Date(d)) + '_';
  var b = $("#input_brand").val();
  var s = $("#input_source").val() + '_';
  var t = $("#input_send-time").val();
  var o = $("#input_offer").val();
  var i = $("#input_id").val();
  if(b.indexOf('_')>-1 && i!=''){
    var name = 'PARTNERS_' + a + dt + s + b + day + o + i;
  } else if (i!=''){
    var name = a + dt + s + b + day + o + i;
  } 
  $("#input_campaign").val(name.toUpperCase());
  $(".slds-box").html('<p>' + name.toUpperCase() + '</p>');
  var url = "https://pages.email.secretescapes.com/emailbuilder/campaign-validation?id=" + name;
  $.getJSON(url, function(data) {
    if(data.length>0){
      $(".slds-box").css('border-color','#ff0000');
      $(".error__campaign").removeClass('slds-hide');
      $("#wrapper button").prop( "disabled", true );
    } else {
      $(".slds-box").css('border-color','');
      $(".error__campaign").addClass('slds-hide');
      $("#wrapper button").prop( "disabled", false);
    }
  });
}