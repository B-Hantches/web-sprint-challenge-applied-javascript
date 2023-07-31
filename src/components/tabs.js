const Tabs = (topics) => {

  const topicsContainer = document.createElement('div');
  topicsContainer.classList.add('topics');

  topics.forEach(topic => {
    const tabElement = document.createElement('div');
    tabElement.classList.add('tab');
    tabElement.textContent = topic;

    topicsContainer.appendChild(tabElement);
  });

  return topicsContainer;

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
}

const tabsAppender = (selector) => {
  
  fetch('http://localhost:5001/api/topics')
    .then(response => response.json())
    .then(data => {
  
      const topics = data.topics;
      
      const tabsElement = Tabs(topics);
      
      const targetElement = document.querySelector(selector);
      targetElement.appendChild(tabsElement);
    })
    .catch(error => console.error('Error fetching topics:', error));



  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender }
