import React from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App: any = () => {
    const a: number = 9;
    return (
        <div>
            <span>Hello {a}</span>
            <LazyComponent />
        </div>
    );
};

export default App;
