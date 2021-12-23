/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import React from 'react';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
import Overview from '../client/src/components/Overview/Overview.jsx';
import AddToCart from '../client/src/components/Overview/components/AddToCart.jsx';
import ImageGallery from '../client/src/components/Overview/components/ImageGallery.jsx';
import ProductInfo from '../client/src/components/Overview/components/ProductInfo.jsx';
import StyleSelector from '../client/src/components/Overview/components/StyleSelector.jsx';
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

    test('should Render the Overview Component', function() {
      render(<Overview />);
      const OverviewElement = screen.getByTestId('overview-widget');
      expect(OverviewElement).toBeInTheDocument();
    })

    test('should Render the AddToCart Component', function() {
      render(<AddToCart />);
      const AddToCartElement = screen.getByTestId('add-to-cart');
      expect(AddToCartElement).toBeInTheDocument();
    })

    test('should Render the ImageGallery Component', function() {
      render(<ImageGallery />);
      const ImageGalleryElement = screen.getByTestId('image-gallery');
      expect(ImageGalleryElement).toBeInTheDocument();
    })

    test('should Render the ProductInfo Component', function() {
      render(<ProductInfo />);
      const ProductInfoElement = screen.getByTestId('product-info');
      expect(ProductInfoElement).toBeInTheDocument();
    })

    test('should Render the StyleSelector Component', function() {
      render(<StyleSelector />);
      const StyleSelectorElement = screen.getByTestId('style-selector');
      expect(StyleSelectorElement).toBeInTheDocument();
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
