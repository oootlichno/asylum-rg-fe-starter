import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';

describe('CSS Style Tests for RenderLandingPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RenderLandingPage />
      </MemoryRouter>
    );
  });

  test('[1] header has correct background color', () => {
    const header = screen.getByTestId("header");
    expect(header).toHaveStyle('background-color: @main-color;');
  });

  test('[2] header text has correct font size and color', () => {
    const headerText = screen.getByTestId("header h1");
    expect(headerText).toHaveStyle('font-size: 3 rem; color: @white;');
  });


  test('[3] view more data button has correct styling', () => {
    const viewMoreButton = screen.getByRole('button', { name: /View the Data/i });
    expect(viewMoreButton).toHaveStyle('background-color: rgb(64, 76, 74); color: rgb(255, 255, 255);');
  });

  test('[4] download button data button has correct styling', () => {
    const viewMoreButton = screen.getByRole('button', { name: /Download the Data/i });
    expect(viewMoreButton).toHaveStyle('background-color: rgb(64, 76, 74); color: rgb(255, 255, 255);');
  });

  test('[5] read more data button has correct styling', () => {
    const viewMoreButton = screen.getByRole('button', { name: /Read More/i });
    expect(viewMoreButton).toHaveStyle('background-color: rgb(64, 76, 74); color: rgb(255, 255, 255);');
  });

}); 