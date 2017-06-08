/* Implement custom javascript here */

jQuery(document).ready(function ($) {

    // splitter in footer, hides last bar
    $('.footer .block-menu-menu-footer-menu .menu li.leaf:not(:last)').after('<li class="footer-divider">|</li>');
    $('.footer .block-block-4 .menu li.leaf:not(:last)').after('<li class="footer-divider">|</li>');

    // toggle function to show/hide
    $(document).ready(function () {
        $(".toggler").click(function () {
            $(this).next().slideToggle("fast");
            return false;
        }).next().hide();

        $(".toggler-show").click(function () {
            $(this).next().slideToggle("fast");
            return false;
        }).next().show();

    });


    jQuery(".abstract").hide();
    jQuery(".showhide").click(function (event) {
        event.preventDefault();
        jQuery(this).closest('tr').next().find('.abstract').toggle();
    });


    // antibody portal stats
    $.ajax({
        type: "GET",
        url: "https://antibodies.cancer.gov/apps/site/counts"
    }).done(function (result) {
        $("#antibody_portal_widget").html(result);
    });

    $('#sidr-button').sidr({
        name: 'sidr',
        source: '#sidr-menu',
        side: 'right'
    });

    
    // 508 issue fix
    $( ":hidden").attr( "aria-hidden", "true" );
    $(".menu li span").attr("aria-haspopup", "true");
    $(".menu li span").attr("tabindex", "0");
    $(".menu li span").attr("aria-controls", "true");
    $(".menu li span").attr("aria-expanded", "false");
    $(".menu li a").attr("tabindex", "0");
    $(".tp-bullets .bullet").attr("tabindex", "0");    

});


// shows all items at once
jQuery(function () {
    jQuery('.showall').click(function () {
        jQuery('.abstract').toggle();
    });

    jQuery("#antibody-portal-icon").attr('title', 'Antibody Portal');
    jQuery("#assay-portal-icon").attr('title', 'Assay Portal');
    jQuery("#data-portal-icon").attr('title', 'Data Portal');
});

