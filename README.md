
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



### .header()

Returns a string that can be used as the file header of a YAML file.



### .footer()

Returns a string that can be used as the last part of a YAML file,
e.g. to confirm completeness of transmission.



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
