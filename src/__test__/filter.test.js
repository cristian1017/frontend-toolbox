import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Filters } from '../components/filters/Filters';
import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../redux/features/filesSlice';

describe('Filters', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        files: filesReducer,
      },
      preloadedState: {
        files: {
          data: [{ lines: [{ text: 'Example', number: 123, hex: 'AB12' }] }],
          isLoading: false,
          filter: 'Test Filter'
        }
      }
    });
  });

  it('displays the badge when filter is active', () => {
    render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );

    expect(screen.getByText('Test Filter')).toBeInTheDocument();
  });
});
