/**
 * @jest-environment jsdom
*/

import axios from 'axios';
import React from 'react';
import 'regenerator-runtime/runtime.js';
import '@testing-library/jest-dom';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import Fetch from 'fetch'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';

jest.mock('axios');
// beforeAll((done) => {
//   done();
// })

// afterAll((done) => {
//   done();
// })

xdescribe('Related Products', function() {
  describe('SUB-SECTION EXAMPLE', function() {

    test('TEST EXAMPLE', function() {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})
