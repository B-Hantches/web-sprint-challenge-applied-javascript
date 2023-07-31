const Card = (article) => {
  
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const headlineElement = document.createElement('div');
  headlineElement.classList.add('headline');
  headlineElement.textContent = article.headline;
  
  const authorElement = document.createElement('div');
  authorElement.classList.add('author');
  
  const imgContainerElement = document.createElement('div');
  imgContainerElement.classList.add('img-container');
  
  const authorPhotoElement = document.createElement('img');
  authorPhotoElement.setAttribute('src', article.authorPhoto);

  const authorNameElement = document.createElement('span');
  authorNameElement.textContent = `By ${article.authorName}`;

  imgContainerElement.appendChild(authorPhotoElement);
  authorElement.appendChild(imgContainerElement);
  authorElement.appendChild(authorNameElement);

  cardElement.appendChild(headlineElement);
  cardElement.appendChild(authorElement);

  cardElement.addEventListener('click', () => {
    console.log(article.headline);
  });


  return cardElement;
};

// Now you can append cardElement to the desired location in the DOM.

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


 // ...

const cardAppender = (selector) => {
  fetch('http://localhost:5001/api/articles')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch articles from the API.');
      }
      return response.json();
    })
    .then((data) => {
      const articles = data.articles;

      const container = document.querySelector(selector);

      function processArticles(articlesArray) {
        articlesArray.forEach((article) => {
          const card = Card(article);
          container.appendChild(card);
        });
      }

      if (Array.isArray(articles)) {
        
        processArticles(articles);
      } else if (typeof articles === 'object') {
        
        Object.values(articles).forEach((articlesArray) => {
          processArticles(articlesArray);
        });
      }
    })
    .catch((error) => {
      console.error(error);
    });
 
    // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender }
