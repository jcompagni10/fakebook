import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      gender: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGender = this.handleGender.bind(this);
  }
  
  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleGender(gender) {
    return (event) => {
      if (document.getElementById('gender-form-male').checked) {
        this.setState({ gender: "male" });
      }
      if (document.getElementById('gender-form-female').checked) {
        this.setState({ gender: "female" });
      }
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewUser(this.state)
      .then( () => this.props.history.push('/feed'));
  }
// TODO1 add validation messages on unsuccesful sign up
  render () {
    return (
      <div className="home-container">
        <div className="home-container-content">
          <div className="home-aside">
            <div className="home-aside-content">
              <h2 className="home-aside-title">Connect with friends and the <br /> world around you on Fakebook</h2>
              <div className="home-aside-content">
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851565_602269956474188_918638970_n.png?oh=27689fd23ad24387d0e51c5356396a30&oe=5AD5DBF5"
                    alt="icon" />
                  <p><strong>See photos and updates</strong> from friends in News Feed.</p>
                </div>
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851585_216271631855613_2121533625_n.png?oh=7df497332d05c12cb617e0e934da4734&oe=5A8D4620"
                    alt="icon" />
                  <p><strong>Share what's new</strong> in your life on your Timeline.</p>
                </div>
                <div className="home-aside-item">
                  <img
                    src="https://scontent-dft4-3.xx.fbcdn.net/v/t39.2365-6/851558_160351450817973_1678868765_n.png?oh=bf9859ce8b08c56e840c8894bf4584cd&oe=5A961CD8"
                    alt="icon" />
                  <p><strong>Find more</strong> of what you're looking for with Facebook Search.</p>
                </div>
              </div>
            </div>
          </div>


            <div className="sign-up-container">
              <h2>Sign Up</h2>
              {/* TODO3 decide if i want to include this */}
              {/* <div>It's free and always will be.</div> */}
                <input
                type="text"
                name="firstname"
                onChange={this.handleInput("first_name")}
                placeholder="First name"
                className="input-half-width"
                 />

              <input
                type="text"
                name="lastname"
                onChange={this.handleInput("last_name")}
                placeholder="Last name"
                className="input-half-width"
              />
              <br />

              <input
                type="text"
                name="email"
                onChange={this.handleInput("email")}
                placeholder="Email"
                className="input-full-width"
              />
              <br />

              <input
                type="password"
                name="password"
                onChange={this.handleInput("password")}
                placeholder="New password"
                className="input-full-width"
              />
              <br />
{/* TODO2 replace birhtday with dropdowns */}
              <label>Birthday
                <br />
                <input
                  type="date"
                  className="birthday-field"
                  onChange={this.handleInput("birthday")} />
              </label>
              <br />
{/* TODO3 add link with modal for why we need birthday (check FB) */}
              <div className="gender-form">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  id="gender-form-female"
                  onChange={this.handleGender("female")}
                  />
                <span>Female</span>

                <input
                  type="radio"
                  name="gender"
                  value="male"
                  id="gender-form-male"
                  onChange={this.handleGender("male")}
                  />
                <span>Male</span>
              </div>
              <br />
{/* TODO3 Increase button size and make more similar to FB */}
              <a
                className="uibutton large special"
                href="#button"
                onClick={this.handleSubmit}
                >Create Account</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Signup;