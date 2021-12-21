/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import React from 'react';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
import Overview from '../client/src/components/Overview/Overview.jsx';
import AddToCart from '../client/src/components/Overview/components/AddToCart.jsx';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

jest.mock('axios');
// beforeAll((done) => {
//   done();
// })

// afterAll((done) => {
//   done();
// })

// ========== Overview ========== //
describe('Overview', function() {

  describe('Render Overview Widget', function() {

    test('should Render the AddToCart Component', function() {
      render(<AddToCart />);
      const OverviewElement = screen.getByTestId('add-to-cart');
      expect(OverviewElement).toBeInTheDocument();
    })
  })

  describe('Gather API data', function() {
    test('should GET (ratings numbers) from Reviews API for StarRating component', function() {
      // logic to check if data is being recieved from reviews API
    })

    test('should GET (name, category and price data) from Products API for StarRating component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (thumbnails) from Products API for StyleSelector component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (image url) from Products API for ImageGallery component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should GET (size count and quantity) from Products API for AddToCart component', function() {
      // logic to check if data is being recieved from products API
    })

    test('should POST Cart data', function() {
      // logic to check if data is being posted to cart API
    })

  })
})

// ========== Related Products ========== //
describe('Related Products', function() {
  describe('SUB-SECTION EXAMPLE', function() {

    test('TEST EXAMPLE', function() {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})

// ========== Questions & Answers ========== //
describe('Questions & Answers', function() {
  describe('SUB-SECTION EXAMPLE', function () {

    test('TEST EXAMPLE', function () {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})

// ========== Ratings & Reviews ========== //
describe('Ratings & Reviews', function() {
  describe('SUB-SECTION EXAMPLE', function () {

    test('TEST EXAMPLE', function () {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})
