import React from 'react';

export default function DarkContrastBackground({medBg, children}) {
        return (<span key={'dark-contrast-bg'} className={medBg ? 'medium-dark-container' : 'dark-container'}>
            {children}
        </span>);
}