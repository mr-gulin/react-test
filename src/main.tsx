import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '~/store';

import App from '~/App';

// styles
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter basename={'/react-test'}>
            <App />
        </BrowserRouter>
    </Provider>,
);
