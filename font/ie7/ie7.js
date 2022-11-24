/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'stix-21-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'stix21-Attack_Pattern': '&#xe900;',
		'stix21-Campaign': '&#xe901;',
		'stix21-Course_of_Action': '&#xe902;',
		'stix21-Grouping': '&#xe903;',
		'stix21-Identity': '&#xe904;',
		'stix21-Incident': '&#xe905;',
		'stix21-Indicator': '&#xe906;',
		'stix21-Infrastructure': '&#xe907;',
		'stix21-Intrusion_Set': '&#xe908;',
		'stix21-Location': '&#xe909;',
		'stix21-Malware_Analysis': '&#xe90a;',
		'stix21-Malware_Family': '&#xe90b;',
		'stix21-Malware': '&#xe90c;',
		'stix21-Note': '&#xe90d;',
		'stix21-Observed_Data': '&#xe90e;',
		'stix21-Opinion': '&#xe90f;',
		'stix21-Relationship': '&#xe910;',
		'stix21-Report': '&#xe911;',
		'stix21-Sighting': '&#xe912;',
		'stix21-Threat_Actor': '&#xe913;',
		'stix21-Tool': '&#xe914;',
		'stix21-Vulnerability': '&#xe915;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/stix21-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
