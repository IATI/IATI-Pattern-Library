import $ from 'jquery';

export default function nestedNav (
    selector = '[data-nested-list]',
    activeClass = 'active',
    openClass = 'open',
    triggerSelector = '[data-nested-nav-toggle]',
    itemSelector = '[data-nested-nav-item]',
    listSelector = '[data-nested-nav-child-list]',
    ) {
    const nav = $(selector);
    if (!nav.length) {
        return;
    }

    const trigger = $(triggerSelector);
    trigger.on('click', e => {
        e.preventDefault();
        const target_trigger = $(e.target);
        const item = target_trigger.closest(itemSelector);
        const list = item.find(listSelector).first();

        // reset the active state of other items
        trigger
            .not(target_trigger)
            .closest(itemSelector)
            .removeClass(activeClass);

        // toggle the active state of this item
        item.toggleClass(activeClass);
        item.toggleClass(openClass);
        list.toggleClass(openClass);
    });

    // nav.on('click', '.js-menu-item', function(e) {
    //     const item = $(this);
    //     const isCountry = item.hasClass(countryItem);
    //     const isRegion = !isCountry;

    //     e.preventDefault();

    //     nav
    //         .find('a')
    //         .removeClass('active');

    //     if (isRegion) {
    //         if (item.hasClass(regionActive)) {
    //             item
    //                 .removeClass(regionActive)
    //                 .blur();

    //             if (item.data('has-children')) {
    //                 item
    //                     .nextAll('ul')
    //                     .first()
    //                     .removeClass(listActive)
    //                     .slideUp(200);
    //             }
    //         }
    //         else {
    //             item
    //                 .addClass(regionActive)
    //                 .addClass('active');

    //             if (item.data('has-children')) {
    //                 item
    //                     .nextAll('ul')
    //                     .first()
    //                     .addClass(listActive)
    //                     .slideUp(0)
    //                     .slideDown(200);
    //             }
    //         }
    //     }
    // });
}
