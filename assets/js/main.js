(function () {
    const btn = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-navigation');

    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        /**
         * @constant {boolean} expanded - Indicates whether the button is currently expanded.
         * This value is derived from the button's 'aria-expanded' attribute, which should be
         * a string representation of a boolean ('true' or 'false').
         */
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
            nav.hidden = true;
        } else {
            nav.hidden = false;
        }
    });

    // Close menu when focus moves outside or on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            btn.setAttribute('aria-expanded', 'false');
            nav.hidden = true;
            btn.focus();
        }
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !btn.contains(e.target) && window.getComputedStyle(btn).display !== 'none') {
            btn.setAttribute('aria-expanded', 'false');
            nav.hidden = true;
        }
    });
})();
