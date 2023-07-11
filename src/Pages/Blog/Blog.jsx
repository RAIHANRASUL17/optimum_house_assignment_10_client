import React from "react";

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import useTitleSet from "../../hooks/useTitleSet";

const ref = React.createRef();

const Blog = () => {



  // useTitleSet
  useTitleSet('BlogPage')
  return (
    <>
      <div className="container mx-auto p-3">
        <div
          ref={ref}
          className="border border-2 bg bg-light p-3 rounded mt-3"
        >
          <h3>
            Question-1: What is the differences between uncontrolled and
            controlled components?
          </h3>
          <p>
            {" "}
            Answer:- In React, controlled components refer to components that
            have their state and behavior controlled by the parent component.
            These components rely on props passed down from the parent component
            to update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally. Unlike the
            uncontrolled component, the input form element in the controlled
            component is handled by the component rather than the DOM.{" "}
          </p>
          <h3> Question-2: How to validate React props?</h3>
          <p>
            {" "}
            Answer:- When developing a React application, you’ll need to
            structure and define your props to avoid bugs and errors. Just like
            a function might have mandatory arguments, a React component might
            require a prop to be defined, otherwise, it will not render
            properly. Forgetting to pass a required prop into a component that
            needs it could cause your app to behave unexpectedly.
          </p>
          <h3>
            {" "}
            Question-3: What is the difference between nodejs and express js?
          </h3>
          <p>
            Answer:- js web application framework that provides a robust set of
            features for web and mobile applications. In other words, NodeJS is
            the package, which provides the JavaScript run-time environment,
            whereas Express is a framework that sits on top of NodeJS and helps
            us to handle requests and responses.{" "}
          </p>
          <h3>
            {" "}
            Question-4: What is a custom hook, and why will you create a custom
            hook?{" "}
          </h3>
          <p>
            Answer:- Custom React JS hooks are reusable functions that a React
            JS software developer can use to add special and unique
            functionality to the React applications. Usually, if there is a
            requirement to add a feature, one can install a third-party library
            and solve the problem.
          </p>
        </div>

        <div className="d-flex justify-content-center my-3">
          <Pdf targetRef={ref}>
            {({ toPdf }) => (
              <button onClick={toPdf} className="btn btn-danger p-2 text-white">
                Download Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>
    </>
  );
};

export default Blog;
