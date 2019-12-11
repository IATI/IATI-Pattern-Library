import $ from 'jquery';

import skipLinks from './utils/skipLinks';
import iframer from './utils/iframer';
import mNav from './utils/mNav';
import sNav from './utils/mNav';
import searchTrigger from './utils/searchTrigger';
import nestedNav from './utils/nestedNav';
import './libs/accessible-mega-menu';
// import counter from './utils/counter';

function globals () {

    // iframe video in body content
    iframer();

    // Scroll animation
    // instance();

    // Small Screen Navigation
    mNav(
        '#navigation-primary-toggle',
        'navigation-primary-toggle--active',
        '#navigation-primary',
        'navigation-primary--active'
    );

    // Small Screen Navigation
    sNav(
        '#navigation-secondary-toggle',
        'navigation-secondary-toggle--active',
        '#navigation-secondary',
        'navigation-secondary--active'
    );

    // Search trigger
    searchTrigger(
        '.header-search__trigger',
        '.header-search',
        'header-search--active',
        '.header-search__close'
    );

    // accessible megamenu
    $('#navigation-primary').accessibleMegaMenu({
        // prefix for generated unique id attributes, which are required
        // to indicate aria-owns, aria-controls and aria-labelledby
        uuidPrefix: 'megamenu',

        // CSS class used to define the megamenu styling
        menuClass: 'navigation-primary__items',

        // CSS class for a top-level navigation item in the megamenu
        topNavItemClass: 'navigation-primary__item',

        // CSS class for a megamenu panel
        panelClass: 'navigation-megamenu',

        // CSS class for a group of items within a megamenu panel
        panelGroupClass: 'navigation-megamenu__col',

        // CSS class for the hover state
        hoverClass: 'hover',

        // CSS class for the focus state
        focusClass: 'focus',

        // CSS class for the open state
        openClass: 'open'
    });

    // nested nav
    nestedNav();

    // Load EventBrite if the window is larger than 500px, which is our $b-vp breakpoint
    if ($(window).width() > 500) {
        var targetID = 'eventbrite-widget-container';
        $.getScript("https://www.eventbrite.co.uk/static/widgets/eb_widgets.js", function( data, textStatus, jqxhr ) {
            var exampleCallback = function() {
                console.log('Registration complete!');
            };
            window.EBWidgets.createWidget({
                // Required
                widgetType: 'checkout',
                eventId: '33395177876',
                iframeContainerId: targetID,
                // Optional
                iframeContainerHeight: 285,  // Widget height in pixels
                onOrderComplete: exampleCallback  // Method called when an order has successfully completed
            });
        });
    }
    // Modify behaviour of Register button depending on window width
    $('#button-register').click(function(event) {
        if ($(window).width() > 500) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: $('#'+targetID).offset().top
            }, 300);
        }
    });

    $('.js-move').click(function(event) {
        event.preventDefault();
        var target = $(this).attr('data-target');
        $('#' + target).scrollView();
    });

    // counter for the homepage numbers
    // counter();
    // Moved to the template to stop erroring on anything but the homepage - see 0-home.html

    // Show / Hide {
    // Used on the codelist template 09-1a-codelist.html
    $('.show-hide-trigger').on('click', function(event) {
        event.preventDefault();
        $(this).text($(this).text() == 'Hide -' ? 'Expand +' : 'Hide -').prev().toggleClass('show-hide-target--hidden');
    });
}

$(function run () {
    console.log('ᕕ( ᐛ )ᕗ Running...');
    globals();
});

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 600);
  });
}
