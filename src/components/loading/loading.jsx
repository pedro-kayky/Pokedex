import React from 'react';
import { Ring } from '@uiball/loaders';

const LoadingIndicator = () => (
    <div className="loading-indicator">
        <Ring size={40} lineWeight={5} speed={2} color="black" />
    </div>
);

export default LoadingIndicator;
