import React from 'react';

const BookDetailsPage =async ({params}) => {
    const {bookId} = await params;
    return (
        <div>
            <h2>this is books details</h2>
        </div>
    );
};

export default BookDetailsPage;