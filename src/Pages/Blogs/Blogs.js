import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blogs-container'>
                <h3 >1. How will you improve the performance of a React Application?</h3>

                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import</li>
                <li>Windowing or list virtualization in React</li>
                <li>Lazy loading images in React.</li>

            </div>
            <div className='blogs-container'>
                <h2>What are the different ways to manage a state in a React application?</h2>
                <h3>5 Types of Application State in React and How They Help in State Management</h3>
                <h4>1. Communication State</h4>
                <p>Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app.</p>
                <h4>2. Data State</h4>
                <p>Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things – project names, contacts, details about the clients, etc.</p>
                <h4>3. Control State</h4>
                <p>Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.</p>
                <h4>4. Session State</h4>
                <p>Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular user’s preferences.</p>
                <h4>5. Location State</h4>
                <p>Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them.</p>
            </div>
            <div className='blogs-container'>
                <h2>How does prototypical inheritance work?</h2>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.
                    Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
                    JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
                    Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
            </div>
            <div className='blogs-container'>
                <h3>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p>From the question we can see that, we have an array of products. So to find a product by name from an array of products we can use different JavaScrpit array methods like find() ,filter(),includes() etc.

                    We can simply solve the problem with find() method. For example, if the name of the array is products and the array has key,value pairs of different product.So, to find the products by name as a key, we can use products.find(0= &gt; 0.name==='name'). Here, 'name' is the name of each product to search for.</p>
            </div>
            <div className='blogs-container'>
                <h3>What is a unit test?</h3>
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                <h3>Why should write unit tests?</h3>
                <p>One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>

            </div>
        </div>
    );
};

export default Blogs;