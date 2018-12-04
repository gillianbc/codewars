# mochachai

Examples demonstrating mocha unit testing and chai assertions

A lot is from Jesse Warden's very useful playlist here 
https://www.youtube.com/playlist?list=PLZEZPz6HkCZk30XEdl0eGNhwvoR-XoWHS

For integration / server testing / async await testing, see Jesse's project here:
https://github.com/JesterXL/rest-api-integration-test-example

For that project, I used nyc rather than istanbul (it's related) and this is how I did the coverage
in the package.json.  There are two test files testing index.js but I didn't want either of those covered by the
coverage so they're in the exclude for nyc.  The coverage html file is created in a coverage folder below project root
```javascript 
"scripts": {
    "test": "mocha index.test.js",
    "integration": "mocha index.integrationtest.js",
    "start": "node index.js",
    "coverage": "nyc --reporter=html --reporter=text mocha index.*test.js || true --timeout=3000"
  },
  "nyc": {
    "exclude": [
      "*test.js",
      "build"
    ]
  },```

