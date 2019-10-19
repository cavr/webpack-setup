import React from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App: any = () => {
    const a: number = 9;
    return (
        <div>
            <span>Hello {a}</span>
            <React.Suspense fallback={<div>Waiting</div>}>
                <LazyComponent />
            </React.Suspense>
        </div>
    );
};

export default App;
