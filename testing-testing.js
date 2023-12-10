const relevantBooks = booksArr.filter((title) => {
  if (title.includes(searchTerm)) {
    return true;
  } else {
    return false;
  }
})
return relevantBooks;