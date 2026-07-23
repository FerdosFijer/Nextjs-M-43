import BookCart from '@/components/BookCart';
import React from 'react';

const BooksPage =async () => {
    const res = await fetch ('http://localhost:5004/books', {cache: 'no-store'});
    const books = await res.json();
    return (
        <div>
            <h2>Books </h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book => <BookCart key={book.id} book={book}> </BookCart>)
                }
            </div>
        </div>
    );
};

export default BooksPage;