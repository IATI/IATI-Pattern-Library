import $ from 'jquery';

export default function mNav (trigger, target, targetActive, triggerClose) {
    $(trigger).on('click', function(e) {
		e.preventDefault();
		$(target).addClass(targetActive);
	});
    $(triggerClose).on('click', function(e) {
		e.preventDefault();
		$(target).removeClass(targetActive);
	});
}
