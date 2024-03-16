# Task Manager App

This is a simple Task Manager application built with React. It allows users to add, edit, delete, and filter tasks based on their priority.

## Features

- **Add Task**: Users can add a new task with a specific priority (low, medium, high).
- **Delete Task**: Users can delete a specific task or all tasks at once.
- **Edit Task**: Users can edit the text of a task.
- **Toggle Task Completion**: Users can mark a task as complete or incomplete.
- **Filter Tasks**: Users can filter tasks based on their priority.

## Implementation Details

The application uses React's `useState` and `useEffect` hooks and `Redux Toolkit` for state management and side effects respectively. The tasks are stored in the local storage, so they persist across browser sessions.

## How to Run

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.

## Code Structure

The main component is `App`. It maintains the state of the tasks and provides the functionality for the features mentioned above. The UI is built using JSX and styled with Ant design for UI library .
