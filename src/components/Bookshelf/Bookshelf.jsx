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
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleInputChange}   

        />
        {/* Add submit button here (optional) */}
      </div>
      {/* Book cards will display here */}
    </div>
  );
};


export default Bookshelf;
