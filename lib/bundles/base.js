/**
 * ---------------------------------------------------------------------
 * GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2015-2022 Teclib' and contributors.
 *
 * http://glpi-project.org
 *
 * based on GLPI - Gestionnaire Libre de Parc Informatique
 * Copyright (C) 2003-2014 by the INDEPNET Development Team.
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * GLPI is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * GLPI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with GLPI. If not, see <http://www.gnu.org/licenses/>.
 * ---------------------------------------------------------------------
 */

// Font-Awesome
require('@fortawesome/fontawesome-free/css/all.css');

// Animate.css
require('animate.css/animate.css');

// jQuery
// '$' and 'jQuery' objects have to be declared in global scope
window.$ = window.jQuery = require('jquery');

require('jquery-migrate');
window.$.migrateMute  = true;
window.$.migrateTrace = false;

// jQuery plugins
require('fittext.js');

// jQuery fancttree
require('jquery.fancytree');
require('jquery.fancytree/dist/modules/jquery.fancytree.grid');
require('jquery.fancytree/dist/modules/jquery.fancytree.filter');
require('jquery.fancytree/dist/modules/jquery.fancytree.glyph');
import 'jquery.fancytree/dist/skin-awesome/ui.fancytree.css';
import '../jqueryplugins/fancytree-plainscrollbar/plain-scrollbar';
import '../jqueryplugins/fancytree-plainscrollbar/plain-scrollbar.css';
window.PlainScrollbar = PlainScrollbar;


// jQuery UI widgets required by
// - jquery-file-upload (widget)
require('jquery-ui/ui/widget');

// Tabler
import '@tabler/core';
import PlainScrollbar from '../jqueryplugins/fancytree-plainscrollbar/plain-scrollbar';

// qTip2
require('qtip2');
require('qtip2/dist/jquery.qtip.css');

// color input
require('@eastdesire/jscolor');
jscolor.presets.default = {
   'alphaChannel': true,
   'palette': [
      '#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26',
      '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
      '#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d',
      '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
   ],
   'paletteCols': 15,
   'padding': 8,
   'borderRadius': getComputedStyle(document.documentElement).getPropertyValue('--input-border-radius').trim(),
   'backgroundColor': getComputedStyle(document.documentElement).getPropertyValue('--input-bg').trim(),
   'borderColor': getComputedStyle(document.documentElement).getPropertyValue('--input-border').trim(),
   'controlBorderColor': getComputedStyle(document.documentElement).getPropertyValue('--input-border').trim(),
};

// Select2
// use full for compat; see https://select2.org/upgrading/migrating-from-35
require('select2/dist/js/select2.full');
// Apply CSS classes to dropdown based on select tag classes
$.fn.select2.defaults.set(
   'adaptDropdownCssClass',
   function (cls) {
      return cls.replace('form-select', 'select-dropdown');
   }
);

//Loadash
//'_' object has to be declared in global scope
window._ = require('lodash');

// gettext.js
// add translation function into global scope
// signature is almost the same as for PHP functions, but accept extra arguments for string variables
window.i18n = require('gettext.js/lib/gettext').default({domain: 'glpi'});
window.__ = function (msgid, domain /* , extra */) {
    domain = typeof(domain) !== 'undefined' ? domain : 'glpi';
    var text = i18n.dcnpgettext.apply(
        i18n,
        [domain, undefined, msgid, undefined, undefined].concat(Array.prototype.slice.call(arguments, 2))
    );
    return _.escape(text);
};

window._n = function (msgid, msgid_plural, n, domain /* , extra */) {
    domain = typeof(domain) !== 'undefined' ? domain : 'glpi';
    var text = i18n.dcnpgettext.apply(
        i18n,
        [domain, undefined, msgid, msgid_plural, n].concat(Array.prototype.slice.call(arguments, 4))
    );
    return _.escape(text);
};
window._x = function (msgctxt, msgid, domain /* , extra */) {
    domain = typeof(domain) !== 'undefined' ? domain : 'glpi';
    var text = i18n.dcnpgettext.apply(
        i18n,
        [domain, msgctxt, msgid, undefined, undefined].concat(Array.prototype.slice.call(arguments, 3))
    );
    return _.escape(text);
};
window._nx = function (msgctxt, msgid, msgid_plural, n, domain /* , extra */) {
    domain = typeof(domain) !== 'undefined' ? domain : 'glpi';
    var text = i18n.dcnpgettext.apply(
        i18n,
        [domain, msgctxt, msgid, msgid_plural, n].concat(Array.prototype.slice.call(arguments, 5))
    );
    return _.escape(text);
};
