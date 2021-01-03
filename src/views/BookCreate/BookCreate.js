import React,{useState} from 'react';
import apiClient from 'utils/apiClient.js';
import {BACKEND} from 'consts/backend';
import {BOOKS} from 'config/router/paths';
import BookCreateView from './BookCreateView';
import convertToBase64 from 'utils/convertToBase64';



function BookCreate(){
  const [bookTitle, setBookTitle] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [error, setError] = useState(null);

  function isValidTitle(){
    return bookTitle.length > 0;
  }

  async function createBook(bookTitle){
    const bookImageBase64 = await convertToBase64(bookImage);
    const bookTitleObject = {
                              title : bookTitle,
                              base64Image : bookImageBase64
                            };
    apiClient.post(BACKEND+BOOKS,bookTitleObject);
  }

  function handleSubmit(event){
    event.preventDefault();
    isValidTitle() ? createBook(bookTitle) : setError("Debe introducir un título correcto.");
  }

  function handleInputChange(event){
    setBookTitle(event.target.value);
  }

  function handleImageChange(event){
    setBookImage(event.target.files[0]);
  }

  const imagePreview = bookImage ? URL.createObjectURL(bookImage) : '';

  return (
    <BookCreateView bookTitle={bookTitle} bookImage={bookImage} imagePreview={imagePreview} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleImageChange={handleImageChange} error={error}/>
  );
}

export default BookCreate;