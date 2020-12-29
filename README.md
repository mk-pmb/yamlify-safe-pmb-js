
<!--#echo json="package.json" key="name" underline="=" -->
yamlify-safe-pmb
================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
YAMLify your data with my favorite YAMLifier and YAMLification settings,
whatever those currently are.
<!--/#echo -->



API
---

This module exports one function, which holds some extras:

### yamlify(data)

Returns a YAMLified representation of data, as a string.



### .header(), .footer(), .wrapBody()

Those from [yaml-head-foot-pmb](http://npm.im/yaml-head-foot-pmb).



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
