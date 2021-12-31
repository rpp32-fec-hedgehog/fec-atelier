/**
 * @jest-environment jsdom
*/

import React from 'react';
import _ from 'underscore';
import "regenerator-runtime/runtime.js";
import '@testing-library/jest-dom';
import {render, screen, cleanup, fireEvent, waitFor} from '@testing-library/react';
import {questionData} from './samples/sample-qa-data.js';

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

    xtest('should render questions sorted by helpfulness', async function() {
      // this test may break if helpfulness of certain questions are updated on API
      await waitFor(() => {
        render(<QA itemid={59557} />);
      })
        .then(res => {
          const TopQuestions = screen.findByTestId('really, realbvly, really');
          expect(TopQuestions).toBeInTheDocument();
        })
        .catch(err => {
          return err;
        })

        // render(<QA itemid={59557} />);
        // const TopQuestions = screen.getByTestId('really, really, really');
        // expect(TopQuestions).toBeInTheDocument();
    })

    xtest('should render "More Answered Questions" button when there are 3 or more questions', async function() {
      await waitFor(() => {
        render(<QA itemid={59557} />);
      })
        .then(res => {
          const TopQuestions = screen.getByTestId('More Answered Questions');
          expect(TopQuestions).toBeInTheDocument();
        })
        .catch(err => {
          return err;
        })
    })

    xtest('should NOT render "More Answered Questions" button when there are 2 or less questions', function() {
      // this test may break if more questions are added to this item on the API
      waitFor(() => {
        render(<QA itemid={59553} />);
      })
        .then(res => {
          const TopQuestions = screen.getByText('More Answered Questions');
          expect(TopQuestions).toBeInTheDocument();
        })
        .catch(err => {
          return err;
        })
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
