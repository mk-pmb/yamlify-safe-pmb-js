// -*- coding: utf-8, tab-width: 2 -*-

import test from 'tape';
import equal from 'equal-pmb';

import yamlify from '../src/yamlify.mjs';


test('Basics', (t) => {
  t.plan(1);
  const data = {
    coffee: true,
    sugar: false,
    cookie: 'sess=0',
    greeting: 'hello\nworld!\n',
  };
  const yaml = yamlify(data);
  console.debug(typeof yaml);
  equal.lines(yaml, [
    'coffee: yes',
    'sugar: no',
    'cookie: "sess=0"',
    'greeting: |',
    '  hello',
    '  world!',
    '',
  ]);
  t.ok(true);
});














// *scroll*
