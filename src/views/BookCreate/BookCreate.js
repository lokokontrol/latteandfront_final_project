import React,{useState, useEffect} from 'react';
import apiClient from 'utils/apiClient.js';
import {BACKEND} from 'consts/backend';
import {BOOKS, CATEGORIES} from 'config/router/paths';
import BookCreateView from './BookCreateView';
import convertToBase64 from 'utils/convertToBase64';



function BookCreate(){
  const [bookTitle, setBookTitle] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [categories, setCategories] = useState(null);
  const [currentCategoryId, setCurrentCategoryId] = useState(-1);
  const [error, setError] = useState(null);

  function isValidTitle(){
    return bookTitle.length > 0;
  }

  function getSelectedCategory(){
    if (currentCategoryId > -1){
      const categorySelectedToCreate = categories.filter((category) => category.id === parseInt(currentCategoryId));
      console.log(categorySelectedToCreate);
      const categoryWithOutId = {name : categorySelectedToCreate[0].name};
      var categoryArrayFormat = [];
      categoryArrayFormat.push(categoryWithOutId);
      return categoryArrayFormat;
    }
  }

  async function createBook(bookTitle){
    const bookImageBase64 = await convertToBase64(bookImage);
    const bookTitleObject = {
                              title : bookTitle,
                              base64Image : bookImageBase64,
                              categories : getSelectedCategory()
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

  function handleOnChangeCategory(event) {
    setCurrentCategoryId(event.target.value);
  };

  useEffect (() => {
    apiClient.get(BACKEND+CATEGORIES).then((data) => setCategories(data));
  }, [setCategories]);

  if (!categories) {
    return <div>Todavía no hay categorias</div>;
  }

  const imagePreview = bookImage ? URL.createObjectURL(bookImage) : '';

  return (
    <BookCreateView bookTitle={bookTitle} bookImage={bookImage} imagePreview={imagePreview} categories={categories} handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleImageChange={handleImageChange} handleOnChangeCategory={handleOnChangeCategory} error={error}/>
  );
}

export default BookCreate;