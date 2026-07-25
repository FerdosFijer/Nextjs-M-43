//! Static params to make website more faster and it already loaded data before it is loading

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5004/books')
  const books =await res.json();

  return books.slice(0,3).map((book) => ({bookId: book.id})
    );
};

//! aikan the normal bookdetails load korsi but uporer onsho tuku static site toirir somoy kaje lage and data load hoyei thake

const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5004/books/${bookId}`);
  const { title, author, price } = await res.json();
  return (
    <div className="card  bg-base-100 card-md shadow-sm mt-6 container mx-auto text-center">
      <div className="card-body">
        <h2 className="text-3xl font-bold">Book details num is: {bookId}</h2>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
