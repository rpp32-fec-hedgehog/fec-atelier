/**
 * @jest-environment jsdom
 */

import axios from 'axios';
import React from 'react';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import {questionData} from '../samples/sampleData.js';

import Overview from '../client/src/components/Overview/Overview.jsx';
import AddToCart from '../client/src/components/Overview/components/AddToCart.jsx';
import ImageGallery from '../client/src/components/Overview/components/ImageGallery.jsx';
import ProductInfo from '../client/src/components/Overview/components/ProductInfo.jsx';
import StyleSelector from '../client/src/components/Overview/components/StyleSelector.jsx';

import QA from '../client/src/components/QA/QA.jsx';
import AnswerQuestion from '../client/src/components/QA/components/AnswerQuestion.jsx';
import Answers from '../client/src/components/QA/components/Answers.jsx';
import AskQuestion from '../client/src/components/QA/components/AskQuestion.jsx';
import Questions from '../client/src/components/QA/components/Questions.jsx';
import SearchQuestion from '../client/src/components/QA/components/SearchQuestion.jsx';

jest.mock('axios');
// beforeAll((done) => {
//   done();
// })

// afterAll((done) => {
//   done();
// })

// ========== Overview ========== //
describe('Overview', function() {

  xdescribe('Render Overview Widget', function() {

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

  describe('QA Component', function() {

    test('should render the QA component', function() {
      render(<QA itemid={59557} />);
      const QAElement = screen.getByTestId('qa');
      expect(QAElement).toBeInTheDocument();
    })

  })

  describe('AnswerQuestion Component', function() {

    test('should render the AnswerQuestion component', function() {
      render(<AnswerQuestion />);
      const AnswerQuestionElement = screen.getByTestId('answer-question');
      expect(AnswerQuestionElement).toBeInTheDocument();
    })

  })

  describe('Answers Component', function() {

    test('should render Answers components', function() {
      render(<Answers answers={Object.values(questionData[0]['answers'])} />);
      const AnswersElement = screen.getByTestId('answers');
      expect(AnswersElement).toBeInTheDocument();
    })

    test('should render answers sorted by helpfulness', function() {
      render(<Questions questions={questionData} />);
      const TopAnswers = screen.getByTestId('weewoo');
      expect(TopAnswers).toBeInTheDocument();
    })

    test('should render Seller answer at top of answer list', function() {
      render(<Questions questions={questionData} />);
      const SellerAnswer = screen.getByTestId(<b>Seller</b>);
      expect(SellerAnswer).toBeInTheDocument();
    })

  })

  describe('AskQuestion Component', function() {

    test('should render AskQuestion component', function() {
      render(<AskQuestion />);
      const AskQuestionElement = screen.getByTestId('ask-question');
      expect(AskQuestionElement).toBeInTheDocument();
    })

  })

  describe('Questions Component', function() {

    test('should render Questions components', function() {
      render(<Questions questions={questionData} />);
      const QuestionsElement = screen.getByTestId('questions');
      expect(QuestionsElement).toBeInTheDocument();
    })

    test('should render questions sorted by helpfulness', function() {
      render(<Questions questions={questionData} />);
      // render(<QA itemid={59557} />);
      const TopQuestions = screen.getByTestId('testtest');
      expect(TopQuestions).toBeInTheDocument();
    })

  })

  describe('SearchQuestion Component', function() {

    test('should render SearchQuestion component', function() {
      render(<SearchQuestion />);
      const SearchQuestionElement = screen.getByTestId('search-question');
      expect(SearchQuestionElement).toBeInTheDocument();
    })

    test('should render search bar with placeholder text', function() {
      render(<SearchQuestion />);
      const PlaceholderElement = screen.getByPlaceholderText('Search for answers...');
      expect(PlaceholderElement).toBeInTheDocument();
    })

  })

})

// ========== Ratings & Reviews ========== //
describe('Ratings & Reviews', function() {
  describe('SUB-SECTION EXAMPLE', function() {

    test('TEST EXAMPLE', function() {
      var testsWorking = true;

      expect(testsWorking).toBe(true);
    })

  })
})
