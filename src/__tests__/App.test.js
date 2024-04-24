import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

import App from "../App";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />)

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App />);

  expect(screen.getByAltText(/username/i)).toBeInTheDocument();
  



});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App />);

  const threeCheckboxes =  screen.queryAllByRole("checkbox").length;
  expect(threeCheckboxes).toEqual(3)

  
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App />);

  const firstInterest =  screen.getByRole("checkbox", {name: /dogs/i, hidden: true});
  expect(firstInterest).not.toBeChecked();

  const secondInterest = screen.getByRole("checkbox", {name: /horses/i});
  expect(secondInterest).not.toBeChecked();

  const thirdInterest = screen.getByRole("checkbox", {name: /cats/i});
  expect(thirdInterest).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App />);

  const username = screen.getByLabelText(/enter your username/i);

  userEvent.type(username, "username1");

  expect(username).toHaveValue("username1");

  const email = screen.getByLabelText(/enter your email address/i);

  userEvent.type(email, "work-email@email.com");

  expect(email).toHaveValue("work-email@email.com");
});

test("checked status of checkboxes changes when user clicks them", async () => {
  // your test code here
  render(<App />);

  const firstInterest =  screen.getByRole("checkbox", {name: /dogs/i});
  expect(firstInterest).not.toBeChecked();
  userEvent.click(firstInterest);
  expect(firstInterest).toBeChecked();
  

  const secondInterest = screen.getByRole("checkbox", {name: /horses/i});
  expect(secondInterest).not.toBeChecked();
  userEvent.click(secondInterest);
  expect(secondInterest).toBeChecked();
  

  const thirdInterest = screen.getByRole("checkbox", {name: /cats/i});
  expect(thirdInterest).not.toBeChecked();
  userEvent.click(thirdInterest);
  expect(thirdInterest).toBeChecked();
});



test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App />);

  userEvent.click(screen.getByRole("button", {
    name: /submit form/i
  }));

  expect(screen.getByText(/thank you!/i)).toBeInTheDocument();
});
