import { Routes, Route } from 'react-router-dom';

import DefaultLayout from '~/layouts/DefaultLayout';

import Index from '~/pages/Index/Index';
import Register from '~/pages/Register/Register';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<DefaultLayout />}>
                <Route index element={<Index />} />
                <Route path={'/register'} element={<Register />} />
            </Route>
        </Routes>
    );
}

export default App;
