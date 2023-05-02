import React from "react";

const BlogPage = () => {
  return (
    <div className="px-2 py-1 md:px-4 md:py-4 font-serif">
      <h1 className="text-center text-3xl my-3">
        Question's and Answers blog page
      </h1>
      <button className="flex mx-auto btn-common my-2">Download PDF</button>

      <div className="p-3 rounded-md my-4 bg-amber-200 text-black">
        <h1 className="text-xl font-bold">
          What is the differences between uncontrolled and controlled components
          ?
        </h1>
        <p>
          In software engineering, uncontrolled and controlled components are
          two different ways of managing state and behavior in a software
          application.Uncontrolled components manage their own state internally,
          while controlled components are controlled by their parent components
          through props and callbacks. Uncontrolled components are simpler to
          use but offer less control, while controlled components are more
          powerful and flexible but require more code. The choice between using
          a controlled or uncontrolled component largely depends on the specific
          needs of the application.
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-amber-200 text-black">
        <h1 className="text-xl font-bold">
          How to validate React props using PropTypes ?
        </h1>
        <p>
          To validate React props using PropTypes:
          <li>Import PropTypes at the top of your component file.</li>
          <li>
            Define the PropTypes for your component by creating a propTypes
            object.
          </li>
          <li>
            Within the propTypes object, define the name and type of each prop
            you want to validate.
          </li>
          <li>
            Pass the propTypes object as a static property to your component
            using the propTypes keyword.
          </li>
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-amber-200 text-black">
        <h1 className="text-xl font-bold">
          Tell me the difference between nodejs and express js ?
        </h1>
        <p>
          <strong>Node js :</strong> Node.js is built on top of the V8
          JavaScript engine from Google Chrome and provides an event-driven,
          non-blocking I/O model that makes it efficient and scalable. Node.js
          is used for server-side programming and can be used to build web
          servers, APIs, command-line tools, and more. It comes with a set of
          built-in modules that provide various functionalities, such as file
          system access, networking, and HTTP handling.
          <br />
          <strong>Express js :</strong> Express.js, on the other hand, is a web
          application framework that is built on top of Node.js. It provides a
          set of tools and utilities that make it easier to build web
          applications using Node.js. Express.js provides features like routing,
          middleware, and template rendering, which simplify the process of
          building web applications with Node.js. It also has a large ecosystem
          of plugins and middleware that can be used to add additional
          functionality to your application. Overall, Express.js is a great
          choice for building web applications with Node.js, as it provides a
          lot of functionality out of the box and makes it easy to get started
          with web development.
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-amber-200 text-black">
        <h1 className="text-xl font-bold">
          What is a custom hook, and why will you create a custom hook ?
        </h1>
        <p>
          Custom hooks are a way to reuse logic and stateful behavior across
          multiple components in a modular way. When you create a custom hook,
          you're essentially creating a new hook that can be used just like the
          built-in React hooks such as useState or useEffect. Custom hooks are
          typically created by combining one or more of the built-in React hooks
          to provide a specific piece of functionality. For example, you might
          create a custom hook that uses useState to manage the state of a form
          and useEffect to handle form validation and submission. One of the
          main benefits of using custom hooks is that they allow you to
          encapsulate complex logic and stateful behavior and reuse it across
          multiple components. This can help simplify your code, reduce
          duplication, and improve maintainability. Another benefit of custom
          hooks is that they can make your code more readable and easier to
          reason about. By abstracting away complex logic and state management
          into a custom hook, you can make your component code more focused on
          the specific UI concerns of that component. Overall, creating custom
          hooks can be a powerful way to improve the structure and
          maintainability of your React code.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
