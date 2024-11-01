import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RenderLandingPage from '../components/pages/Landing/RenderLandingPage';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

beforeAll(() => {
  delete window.location;
  window.location = { href: '' }; 

  global.scrollTo = jest.fn(); 
});

beforeEach(() => {
  mockHistoryPush.mockClear();
  global.scrollTo.mockClear();
  window.location.href = ''; 
});

describe('landing page render', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RenderLandingPage />
      </MemoryRouter>
    );
  });

  test('[1] renders header text correctly', () => {
    expect(screen.getByRole('heading', { level: 1, name: /Asylum Office Grant Rate Tracker/i })).toBeInTheDocument();
    expect(screen.getByText(/The Asylum Office Grant Rate Tracker provides asylum seekers/i)).toBeInTheDocument();
  });

  test('[2] renders graph images with alt text', () => {
    expect(screen.getByAltText('Grant Rates By Office')).toBeInTheDocument();
    expect(screen.getByAltText('Grant Rates By Nationality')).toBeInTheDocument();
    expect(screen.getByAltText('Grant Rates Over Time')).toBeInTheDocument();
  });

  test('[3] renders buttons with correct functionality', () => {
    const viewDataButton = screen.getByRole('button', { name: /View the Data/i });
    const downloadDataButton = screen.getByRole('button', { name: /Download the Data/i });

    fireEvent.click(viewDataButton);
    expect(mockHistoryPush).toHaveBeenCalledWith('/graphs');

    fireEvent.click(downloadDataButton);
    expect(window.location.href).toBe(
      'https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv'
    );
  });

  test('[4] renders middle section text and image', () => {
    expect(screen.getByText(/Human Rights First has created a search tool/i)).toBeInTheDocument();
    expect(screen.getByAltText('Human Rights First')).toBeInTheDocument();
  });

  test('[5] renders headlines on section statistics', () => {
    expect(screen.getByText('36%')).toBeInTheDocument();
    expect(screen.getByText('5%')).toBeInTheDocument();
    expect(screen.getByText('6x Lower')).toBeInTheDocument();
  });

  test('[6] renders "Read More" button with correct link', () => {
    const readMoreButton = screen.getByRole('button', { name: /Read More/i });
    fireEvent.click(readMoreButton);
    expect(window.location.href).toBe(
      'https://humanrightsfirst.org/library/uscis-records-reveal-systemic-disparities-in-asylum-decisions/'
    );
  });
});