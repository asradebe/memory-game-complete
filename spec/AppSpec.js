describe('memory game tests',function () {
	const jsdom = require('jsdom')
	const {JSDOM} = jsdom;
	// let global.document;
	// beforeEach(function () {

	// })
	it("demo", function(){
		dom = new JSDOM(`<html><head><></head><body><div id="12345">Hello</div></body></html>`)
		global.document = dom.window.document;
		let game = require("../src/app")
	})
})