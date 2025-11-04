import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div>
            <h1>this is not found page</h1>
            <Link href='/'>Go back to home</Link>
        </div>
    );
};

export default notFound;