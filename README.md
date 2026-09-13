# Dev Stack

Dev Stack is a responsive React website where users can explore different development technologies and build their own technology stack. Users can view technology details, add technologies to their stack, and remove them whenever needed.

## Technologies Used

* React.js
* Tailwind CSS
* DaisyUI
* JavaScript (ES6+)
* React-Toastify
* JSON
* Vite

## Features

* Explore different technologies with their category, description, rating, difficulty, and badge.
* Add technologies to a personal stack and prevent duplicate selections.
* Remove individual technologies or clear the entire stack with toast notifications.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It is used in React to create UI elements in an easier and more readable way.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage state. In this project, it is used to store the technologies, loading state, and selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders. In this project, it is used to load the technology data from the JSON file and update the loading state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove items when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, the empty stack message is shown when no technology has been added.

For example:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    ...
  </div>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props. A child can send something back by calling a function that the parent passes to it as a prop.
