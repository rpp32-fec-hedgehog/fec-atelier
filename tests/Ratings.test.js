/**
 * @jest-environment jsdom
*/

import axios from 'axios';
import React from 'react';
import _ from 'underscore';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import {questionData} from '../samples/sampleData.js';

describe('Ratings & Reviews', function() {
  describe('SUB-SECTION EXAMPLE', function() {

    test('TEST EXAMPLE', function() {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})
