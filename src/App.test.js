import { fireEvent, render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';

beforeEach(() => {
    render(<BrowserRouter><App /></BrowserRouter>);
});

afterEach(() => {
    cleanup();
});

test('Renders the Header heading', () => {
    const headingElement = screen.getByText("Reserve a table!");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button", {
        name: /On Click/i
    });
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date:");
    expect(headingElementNew).toBeInTheDocument();
})



test('Initialize/Update Times', () => {
    const testTime = "17:00"
    const selectElement = screen.getByLabelText('Choose Time:');
    userEvent.selectOptions(selectElement, testTime)
    expect(screen.getByRole('option', { name: testTime }).selected).toBe(true);
})