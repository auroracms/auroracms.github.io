function loadForm() {
  $("#input__id").val(getUrlParameter('id'));
  var url = "https://pages.email.secretescapes.com/aurora/brand/theme?id=" + getUrlParameter('id');
  $.getJSON(url, function(data) {
    var data = data[0];
    $(".slds-page-header__title").html(data.ThemeName);
    $("#input__name").val(data.ThemeName);
    $("#input__logo").val(data.Logo);
    $("#input__width").val(data.LogoWidth);
    $("#input__icon").val(data.LogoIcon);
    $("#input__font").val(data.FontFamily);
    $("#input__title").val(data.FontFamilyTitle);
    $("#input__font_family").val(data.FontFamilyContent);

    $("#input__headercolour").val(data.HeaderColor);
    $("#input__headerfontcolor1").val(data.HeaderFontColor1);
    $("#input__headerfontcolor2").val(data.HeaderFontColor2);

    $("#input__bodycolor").val(data.BodyColor);
    $("#input__bodyfontcolor1").val(data.BodyFontColor1);
    $("#input__bodyfontcolor2").val(data.BodyFontColor2);
    $("#input__bodyfontcolor3").val(data.BodyFontColor3);

    $("#input__buttoncolor").val(data.PrimaryButtonColor);
    $("#input__buttonhover").val(data.PrimaryButtonHoverColor);
    $("#input__buttonfontcolor").val(data.PrimaryButtonFontColor1);
    $("#input__secondcolor").val(data.SecondButtonColor);
    $("#input__secondhover").val(data.SecondButtonHoverColor);
    $("#input__secondfontcolor").val(data.SecondButtonFontColor1);

    $("#input__articlecolor").val(data.ArticleColor);
    $("#input__articlefontcolor1").val(data.ArticleFontColor1);
    $("#input__articlefontcolor2").val(data.ArticleFontColor2);
    $("#input__articlefontcolor3").val(data.ArticleFontColor3);

    $("#input__cardcolor").val(data.SaleCardColor);
    $("#input__cardfontcolor1").val(data.SaleCardFontColor1);
    $("#input__cardfontcolor2").val(data.SaleCardFontColor2);
    $("#input__cardfontcolor3").val(data.SaleCardFontColor3);
    $("#input__cardfontcolor4").val(data.SaleCardFontColor4);   

    $("#input__signcolor").val(data.SignOffColor);
    $("#input__signfontcolor1").val(data.SignOffFontColor1);
    $("#input__signfontcolor2").val(data.SignOffFontColor2);

    $("#input__footercolor").val(data.FooterColor);
    $("#input__footerfontcolor1").val(data.FooterFontColor1);
    $("#input__footerfontcolor2").val(data.FooterFontColor2);
  });
}

function updatePreviews() {
  // Header Colors
  $("#ColorsHeader > div:nth-child(1)").css( "background-color", $("#input__headercolour").val());
  $("#ColorsHeader > div:nth-child(1)").css( "color", 'red');
  
}