import {useState} from "react"

function App() {

  const [usernameInfo, setUsernameInfo] = useState('');
  const [emailInfo, setEmailInfo] = useState('');
  const [firstInterestIsChecked, setFirstInterestIsChecked] = useState(false);
  const [secondInterestIsChecked, setSecondInterestIsChecked] = useState(false);
  const [thirdInterestIsChecked, setThirdInterestIsChecked] = useState(false);
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setFormIsSubmitted(true);
  }
  const toggleFirstInterest = (e) => setFirstInterestIsChecked(!firstInterestIsChecked);
  const toggleSecondInterest = (e) => setSecondInterestIsChecked(!secondInterestIsChecked);
  const toggleThirdInterest = (e) => setThirdInterestIsChecked(!thirdInterestIsChecked);
  const updateUsername = (e) => setUsernameInfo(e.target.value);
  const updateEmail = (e) => setEmailInfo(e.target.value);

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>



      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="username">Enter your username </label>
          <input 
          value={usernameInfo}
          alt="username"
          type="text"
          id="username"
          placeholder="username"
          onChange={updateUsername}
          />
          <div></div>
          <label htmlFor="email">Enter your Email Address </label>
          <input 
          value={emailInfo}
          type="text"
          alt="email"
          id="email"
          placeholder="email"
          onChange={updateEmail}
          />
          <div>
          
          <input
          type="checkbox"
          id="dogs"
          checked={firstInterestIsChecked}
          aria-checked={firstInterestIsChecked}
          onChange={toggleFirstInterest}
          />
          <label htmlFor="dogs">Dogs</label>
          </div>
          <div>
          
          <input 
          type="checkbox"
          id="horses"
          checked={secondInterestIsChecked}
          aria-checked={secondInterestIsChecked}
          onChange={toggleSecondInterest}
          />
          <label htmlFor="horses">Horses</label>
          </div>
          <div>
          
          <input 
          type="checkbox"
          id="cats"
          checked={thirdInterestIsChecked}
          aria-checked={thirdInterestIsChecked}
          onChange={toggleThirdInterest}
          />
          <label htmlFor="cats">Cats</label>
          
          </div>
          {formIsSubmitted ? <h1>Thank you!</h1> : null}
            <button type="submit">Submit Form</button>
        </form>
        
      </div>
    </main>
  );
}

export default App;
