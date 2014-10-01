


/**
 * Execute before running tests.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var before = function(name, fn) {};


/**
 * Execute after running tests.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var after = function(name, fn) {};


/**
 * Execute before each test case.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var beforeEach = function(name, fn) {};


/**
 * Execute after each test case.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var afterEach = function(name, fn) {};

/**
 * Describe a "suite" with the given `title`
 * and callback `fn` containing nested suites
 * and/or tests.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var describe = function(title, fn) {};


/**
 * Describe a "suite" with the given `title`
 * and callback `fn` containing nested suites
 * and/or tests.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var context = function(title, fn) {};


/**
 * Pending describe.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var xdescribe = function(title, fn) {};


/**
 * Pending describe.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var xcontext = function(title, fn) {};


/**
 * Pending describe.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
describe.skip = function(title, fn) {};


/**
 * Exclusive suite.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
describe.only = function(title, fn) {};


/**
 * Describe a specification or test-case
 * with the given `title` and callback `fn`
 * acting as a thunk.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var it = context.specify = function(title, fn) {};


/**
 * Describe a specification or test-case
 * with the given `title` and callback `fn`
 * acting as a thunk.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var specify = function(title, fn) {};


/**
 * Exclusive test-case.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
it.only = function(title, fn) {};


/**
 * Pending test case.
 *
 * @param {string} title
 */
var xit = function(title) {};

/**
 * Pending test case.
 *
 * @param {string} title
 */
var xspecify = function(title) {};

/**
 * Pending test case.
 *
 * @param {string} title
 */
var skip = function(title) {};


/**
 * Execute before each test case.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var setup = function(name, fn) {};


/**
 * Execute after each test case.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var teardown = function(name, fn) {};


/**
 * Execute before the suite.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var suiteSetup = function(name, fn) {};


/**
 * Execute after the suite.
 *
 * @param {string} name
 * @param {function(function()=)} fn
 */
var suiteTeardown = function(name, fn) {};


/**
 * Describe a "suite" with the given `title`
 * and callback `fn` containing nested suites
 * and/or tests.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var suite = function(title, fn) {};


/**
 * Pending suite.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
suite.skip = function(title, fn) {};


/**
 * Exclusive test-case.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
suite.only = function(title, fn) {};


/**
 * Describe a specification or test-case
 * with the given `title` and callback `fn`
 * acting as a thunk.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
var test = function(title, fn) {};


/**
 * Exclusive test-case.
 *
 * @param {string} title
 * @param {function(function()=)} fn
 */
test.only = function(title, fn) {};

/**
 * Pending test case.
 *
 * @param {string} title
 */
test.skip = function(title) {};
