'use strict';

// don't rely on console displays for real apps! we would normally manipulate
// the content on the page with a success function.
//
// for our application, we'd probably call it "displayBooks"
// or something similar.
const onSuccess = function (data) {
  if (data.book) {
    console.log(data.book);
  } else {
    console.table(data.books);
  }
};

const onError = function (response) {
  console.error(response);
};

const onDelete = function () {
  console.log('Book was successfully deleted.');
};

const onUpdate = function(){
  console.log('Your book was successfully updated!');
};

module.exports = {
  onSuccess,
  onError,
  onDelete,
  onUpdate,
};
