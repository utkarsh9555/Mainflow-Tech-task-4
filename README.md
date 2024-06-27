# To-Do List Application

This is a simple to-do list application built with React. Users can add tasks, mark tasks as completed, and delete tasks. The application uses React state management with the `useState` hook and demonstrates basic event handling and conditional rendering.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Basic styling with CSS

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- To add a new task, type the task description in the input field and click the "Add" button.
- To mark a task as completed, click on the task description.
- To delete a task, click the "Delete" button next to the task.

## Project Structure

```
todo-list/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── ToDoList.js
│   ├── ToDoList.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
├── README.md
└── ...
```

- **public/**: Contains the HTML file for the React application.
- **src/**: Contains the React components and CSS files.
  - **ToDoList.js**: The main to-do list component.
  - **ToDoList.css**: Styles for the to-do list component.
  - **App.js**: The root component that includes the `ToDoList` component.
  - **App.css**: Global styles for the application.
  - **index.js**: Entry point for the React application.
- **package.json**: Contains project metadata and dependencies.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to suggest improvements or report bugs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
