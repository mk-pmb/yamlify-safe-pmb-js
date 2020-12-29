// -*- coding: utf-8, tab-width: 2 -*-

import ersatzYamlify from 'jsonbased-yamlify-pmb/src/multiLineStringPipe';
import headFoot from 'yaml-head-foot-pmb';

const EX = function yamlify(x) { return ersatzYamlify(x); };

function copy(src, keys) { keys.forEach((k) => { EX[k] = src[k]; }); }
copy(headFoot, ['header', 'footer', 'wrapBody']);

export default EX;
