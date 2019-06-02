// Accordion
$(document).on('click', '.slds-accordion__summary-action', function(){
  $(this).closest(".slds-accordion__section").toggleClass("slds-is-open");
});

// Activity Timeline
$(document).on('click', '.slds-timeline__item_task .slds-button', function(){
  $(this).closest(".slds-timeline__item_expandable").toggleClass('slds-is-open');
});

// Alert
$(document).on('click', '.slds-notify__close', function(){
  $(this).closest(".slds-notify").remove();
});

// App Launcher 
$(document).on('click', '.slds-global-header_container .slds-icon-waffle_container', function(){
  $(".slds-app-launcher").toggleClass('slds-hide');
  $(".slds-backdrop").addClass('slds-backdrop_open');
});

// Carousel
$(document).on('click', '.slds-carousel__indicator-action', function(){
  var n = $(".slds-carousel__indicator-action").index(this);
  $(".slds-carousel__indicator-action").removeClass('slds-is-active');
  $(this).addClass('slds-is-active');
  $(this).closest(".slds-carousel").find(".slds-carousel__panels").css('transform', 'translateX(-' + n*100 + '%)');
});

// Chat
$(".slds-chat-list").find(".slds-chat-listitem").each(function() {
  var n = $(".slds-chat-listitem").index(this) + 2;
  var sel = '.slds-chat-listitem:nth-child(' + n + ')';
  if($(this).find(".slds-chat-message__meta").html() == $(sel).find(".slds-chat-message__meta").html()){
    $(this).find(".slds-chat-message__meta").toggleClass('slds-hide');
  }
});

// Color Picker
$(document).on('click', '.slds-color-picker .slds-swatch', function(){
  $(this).closest(".slds-color-picker").find(".slds-color-picker__selector").toggleClass('slds-hide');
});

$(document).on('click', '.slds-color-picker__swatch-trigger', function(){
  var color = $(this).find(".slds-swatch").css("background-color");
  $(this).closest(".slds-color-picker").find(".slds-color-picker__summary").find(".slds-swatch").css("background-color", color);
  $(this).closest(".slds-color-picker").find(".slds-color-picker__summary").find(".slds-input").val(rgb2hex(color));
  $(this).closest(".slds-color-picker__selector").addClass('slds-hide');
});

$(document).on('keyup', '.slds-color-picker__summary-input input', function(){
  var color = $(this).val();
  $(this).closest(".slds-color-picker").find(".slds-color-picker__summary").find(".slds-swatch").css("background-color", color);
  $(this).closest(".slds-color-picker").find(".slds-color-picker__selector").addClass('slds-hide');
});


// Combo Box
// Combo Box
// Combo Box

// Date Picker
$(document).on('click', '.hasDatepicker', function(){
  $(".ui-datepicker").addClass('slds-datepicker slds-dropdown slds-dropdown_medium slds-dropdown_left');
  // Header Section
  $(".ui-datepicker-header").addClass('slds-datepicker__filter slds-grid slds-p-left_xxx-small');
  $(".ui-datepicker-prev").addClass('slds-button slds-button_neutral slds-col slds-size_1-of-4');
  $(".ui-datepicker-next").addClass('slds-button slds-button_neutral  slds-col slds-size_1-of-4');
  $(".ui-datepicker-title").addClass('slds-text-heading_small slds-col slds-size_1-of-2 slds-align_absolute-center');
  // Calendar Section
  $(".ui-datepicker-calendar").addClass('slds-datepicker__month');
  $(".ui-state-default").addClass('slds-day');
  $(".ui-datepicker-current-day").addClass('slds-is-selected'); 
});
$(document).on('click', '.ui-datepicker-prev', function(){
  $(".ui-datepicker").addClass('slds-datepicker slds-dropdown slds-dropdown_medium slds-dropdown_left');
  // Header Section
  $(".ui-datepicker-header").addClass('slds-datepicker__filter slds-grid slds-p-left_xxx-small');
  $(".ui-datepicker-prev").addClass('slds-button slds-button_neutral slds-col slds-size_1-of-4');
  $(".ui-datepicker-next").addClass('slds-button slds-button_neutral  slds-col slds-size_1-of-4');
  $(".ui-datepicker-title").addClass('slds-text-heading_small slds-col slds-size_1-of-2 slds-align_absolute-center');
  // Calendar Section
  $(".ui-datepicker-calendar").addClass('slds-datepicker__month');
  $(".ui-state-default").addClass('slds-day');
  $(".ui-datepicker-current-day").addClass('slds-is-selected'); 
});
$(document).on('click', '.ui-datepicker-next', function(){
  $(".ui-datepicker").addClass('slds-datepicker slds-dropdown slds-dropdown_medium slds-dropdown_left');
  // Header Section
  $(".ui-datepicker-header").addClass('slds-datepicker__filter slds-grid slds-p-left_xxx-small');
  $(".ui-datepicker-prev").addClass('slds-button slds-button_neutral slds-col slds-size_1-of-4');
  $(".ui-datepicker-next").addClass('slds-button slds-button_neutral  slds-col slds-size_1-of-4');
  $(".ui-datepicker-title").addClass('slds-text-heading_small slds-col slds-size_1-of-2 slds-align_absolute-center');
  // Calendar Section
  $(".ui-datepicker-calendar").addClass('slds-datepicker__month');
  $(".ui-state-default").addClass('slds-day');
  $(".ui-datepicker-current-day").addClass('slds-is-selected'); 
});

// Docked Composer
$(document).on('click', '.slds-docked-composer .minimize', function(){
  $(this).closest("section").toggleClass('slds-is-open slds-is-closed');
});
$(document).on('click', '.slds-docked-composer .close', function(){
  $(this).closest(".slds-docked_container").toggleClass('slds-hide');
});

// Dueling Picklist
$( function() {
  $( ".slds-dueling-list__options ul" ).css('min-height','40px')
  $( ".slds-dueling-list__options ul" ).sortable({
    connectWith: ".slds-listbox",
    placeholder: "slds-drop-zone_drag__slot"
  });
  $(".slds-dueling-list__options ul").disableSelection();
});

// Expandable Section
$(document).on('click', '.slds-section .slds-section__title-action', function(){
  $(this).closest(".slds-section").toggleClass('slds-is-open');
});

// Global Header
$(document).on('click', '.slds-global-header__item_search button', function(){
  $(this).closest(".slds-global-header__item_search").find("input").val('');
});
$(document).on('keydown', '.slds-global-header__item_search input', function(){
  if (event.keyCode == 13) {
    this.form.submit();
    return false;
  }
});
$(document).on('click', '.slds-global-actions__notifications', function(){
  $(this).closest(".slds-global-actions__item").find(".slds-popover").toggleClass('slds-hide');
});

// Menus
$(document).on('mouseenter','.slds-dropdown-trigger_hover', function(){
  $(this).closest(".slds-dropdown-trigger").addClass('slds-is-open');
}).on('mouseleave','.slds-dropdown-trigger_hover', function(){
  $(this).closest(".slds-dropdown-trigger").removeClass('slds-is-open');
});
$(document).on('click','.slds-dropdown-trigger_click', function(){
  $(this).closest(".slds-dropdown-trigger").toggleClass('slds-is-open');
});

// Modal
$(document).on('click', '.slds-modal__close', function(){
  $(this).closest(".slds-modal").toggleClass('slds-hide');
  $(".slds-backdrop").removeClass('slds-backdrop_open');
});

// Notifications
$(document).on('click', '.slds-notification__close', function(){
  $(this).closest(".slds-notification").remove();
});

// Panel
$(document).on('click', '.slds-panel__close', function(){
  $(this).closest(".slds-panel").toggleClass('slds-is-open');
});

// Pills
$(document).on('click', '.slds-pill__remove', function(){
  $(this).closest(".slds-pill").remove();
});

// Popover
$(document).on('click', '.slds-popover__close', function(){
  $(this).closest(".slds-popover").toggleClass('slds-hide');
});

// Scoped Tabs
$(document).on('click', '.slds-tabs_scoped__item', function(){
  var n = $(".slds-tabs_scoped__item").index(this)
  $(".slds-tabs_scoped__item").removeClass('slds-is-active');
  $(this).addClass('slds-is-active');
  $(this).closest(".slds-tabs_scoped").find(".slds-tabs_scoped__content").each(function( index ) {
    $(this).removeClass('slds-show');
    $(this).removeClass('slds-hide');
    if(index==n){$(this).addClass('slds-show')} else {$(this).addClass('slds-hide')};
  });
});

// Tree
$(document).on('click', '.slds-tree__item > button', function(){
  var list = $(this).closest("li");
  var status = list.attr('aria-expanded');
  console.log(status);
  if(status==='true'){
    list.attr('aria-expanded','false');
  } else {
    list.attr('aria-expanded','true');
  } 
});


// Vertical Tabs
$(document).on('click', '.slds-vertical-tabs__nav-item', function(){
  var n = $(".slds-vertical-tabs__nav-item").index(this)
  $(".slds-vertical-tabs__nav-item").removeClass('slds-is-active');
  $(this).addClass('slds-is-active');
  $(this).closest(".slds-vertical-tabs").find(".slds-vertical-tabs__content").each(function( index ) {
    $(this).removeClass('slds-show');
    $(this).removeClass('slds-hide');
    if(index==n){$(this).addClass('slds-show')} else {$(this).addClass('slds-hide')};
  });
});