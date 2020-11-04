// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import App from './App.svelte'

jest.setTimeout(30000);

test('shows proper heading when rendered', done => {
    setTimeout(() => {
        try {
            const {getByText} = render(App, { authenticated: true, name: 'World'})
            expect(getByText('Hello World!')).toBeInTheDocument()
            done();
        } catch (error) {
            done(error);
        }
    }, 5333);
})

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', async () => {
    const { getByText } = render(App, { authenticated: true, name: 'World'})
    const button = getByText('Button')

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)

    expect(button).toHaveTextContent('Button Clicked')
})
