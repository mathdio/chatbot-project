import React from 'react';
import App from '../../App';
import renderWithRouterAndContext from '../helpers/renderWithRouterAndContext';
import { screen, waitFor } from '@testing-library/react';

describe('Chatbot page tests', () => {
  it('tests if "/" redirects to "/chatbot"', async () => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    renderWithRouterAndContext(<App />, '/');

    await waitFor(() => {
      const chatbotHeading = screen.getByText(/chatbot/i);
      expect(chatbotHeading).toBeInTheDocument();
    });
  });
});