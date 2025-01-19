"use client"; // Mark this component as a client component

import React from 'react';

const MannequinComponent: React.FC = () => {
    return (
        <iframe
            src="/mannequin.html" // Path to the HTML file
            style={{ width: '600px', height: '400px', border: 'none' }} // Adjust size as needed
            title="Mannequin Stage"
        />
    );
};

export default MannequinComponent;
