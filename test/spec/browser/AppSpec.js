/* global window: false */

var App = require('../../../src/browser/App.coffee');
var HelloWorld = require('../../../src/common/HelloWorld.coffee');

describe("HelloJQuery", function() {
    it("running App.main() should create an element with 'hello' id, with text set to helloUnderscore()", function() {
        App.main();
        var expected = HelloWorld.helloUnderscore();
        var actual = window.document.getElementById('hello').innerHTML;
        expect(actual).toEqual(expected);
    });
});
