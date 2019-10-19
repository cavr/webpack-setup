import ReactDom from 'react-dom';
import React from 'react';

const App = React.lazy(() => import('./App'));

ReactDom.render(
    <React.Suspense fallback={<div>Loading</div>}>
        <App />
    </React.Suspense>,
    document.querySelector('#root')
);
