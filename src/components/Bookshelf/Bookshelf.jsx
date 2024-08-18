import { useState } from 'react';





const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);




  const [newBook, setFormData] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedNewBook = { ...newBook, [name]: value };
    setNewBook(updatedNewBook);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const newBooksList = [...books, newBook];
    setBooks(newBooksList);
    setNewBook({ title: '', author: '' });
  };

  return (

    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
            />
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={newBook.author}   
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
      {books.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
      </div>
      ))}
    </div >
    </div>
  );
};

export default Bookshelf;
