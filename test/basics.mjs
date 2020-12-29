// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
import equal from 'equal-pmb';

import yamlify from '..';


test('Basics', (t) => {
  t.plan(1);
  equal.lines(yamlify({
    coffee: true,
    sugar: false,
    cookie: 'sess=0',
    greeting: 'hello\nworld!\n',
  }), [
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














console.info('+OK basics test passed.');
