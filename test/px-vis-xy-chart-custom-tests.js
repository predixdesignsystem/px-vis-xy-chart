/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here
  var hor = document.getElementById('horizontal'),
      vert = document.getElementById('vertical');

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('register position', function() {

    test('register horizontal position', function() {
        var svg = Polymer.dom(hor.root).querySelector('#svg'),
            register = Polymer.dom(hor.root).querySelector('px-vis-register'),
            toolbar = Polymer.dom(hor.root).querySelector('px-vis-toolbar'),
            toolbarRect = toolbar.getBoundingClientRect(),
            svgRect = svg.getBoundingClientRect(),
            regRect = register.getBoundingClientRect();

        assert.equal(regRect.bottom + toolbarRect.height, svgRect.top);

    });

    test('register vertical position', function() {
        var svg = Polymer.dom(vert.root).querySelector('#svg'),
            register = Polymer.dom(vert.root).querySelector('px-vis-register'),
            svgRect = svg.getBoundingClientRect(),
            regRect = register.getBoundingClientRect();

        assert.equal(regRect.left, svgRect.right);

    });

    test('get hide class', function() {

      assert.equal('hideAxis', hor._getHideClass(true));
      assert.equal('', hor._getHideClass(false));
    });


  });
};
