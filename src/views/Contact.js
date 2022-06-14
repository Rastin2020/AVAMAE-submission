import { useState } from 'react';
import SubmitIcon from "../images/Icon_Submit.svg";
import "./Contact.css";

function Contact() {

    var [numberOfPhoneInputs, setNumberOfPhoneInputs] = useState(1);
    var [phoneNumbersMarkup, setPhoneNumbersMarkup] = useState([
        <div className='input-area vertical-margin'>
            <label for="phone1">Phone number 1 <span className='hint-text'><i>- optional</i></span></label>
            <input type="tel" name="phone1"></input>
        </div>
    ]);

    var [phoneNumberArray, setPhoneNumberArray] = useState([]);
    var [fullNameValue, setFullNameValue] = useState("");
    var [fullNameError, setFullNameError] = useState("");
    var [emailValue, setEmailValue] = useState("");
    var [emailError, setEmailError] = useState("");
    var [messageValue, setMessageValue] = useState("");
    var [messageError, setMessageError] = useState("");
    var [addressCheckbox, setAddressCheckbox] = useState(false);
    var [addressCheckboxError, setAddressCheckboxError] = useState("");
    var [addressOneValue, setAddressOneValue] = useState("");
    var [addressOneError, setAddressOneError] = useState("");
    var [addressTwoValue, setAddressTwoValue] = useState("");
    var [addressTwoError, setAddressTwoError] = useState("");
    var [cityOrTownValue, setCityOrTownValue] = useState("");
    var [cityOrTownError, setCityOrTownError] = useState("");
    var [stateOrCountyValue, setStateOrCountyValue] = useState("");
    var [stateOrCountyError, setStateOrCountyError] = useState("");
    var [postCodeValue, setPostCodeValue] = useState("");
    var [postCodeError, setPostCodeError] = useState("");
    var [countryValue, setCountryValue] = useState("");
    var [countryError, setCountryError] = useState("");

    function changeAddressCheckboxValue() {
        if (addressCheckbox == true) {
            setAddressCheckbox(false);
        } else {
            setAddressCheckbox(true);
        }
    }

    function addNewPhoneNumber() {
        // React equivalent of array.push() ======> function(oldArray) { return [...oldArray, newValueToAdd] }
        // SHOWN BELOW:
        setPhoneNumbersMarkup(function (phoneNumbersMarkup) {
            setNumberOfPhoneInputs(numberOfPhoneInputs++);
            return [...phoneNumbersMarkup,
            <div className='input-area vertical-margin'>
                <label for={`phone` + numberOfPhoneInputs}>Phone number {numberOfPhoneInputs} <span className='hint-text'><i>- optional</i></span></label>
                <input type="tel" name={`phone` + numberOfPhoneInputs}></input>
            </div>
            ]
        });
    }

    function submitForm(event) {

        event.preventDefault();

        if (fullNameValue === "") {
            fullNameError = "This field is required";
        } else if (emailValue === "") {
            emailError = "This field is required";
        }

    }

    return (
        <div className="general-padding vertical-margin">
            <div className='grid-container general-padding'>
                <div>
                    <h1>Contact us</h1>
                    <p>
                        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</b>
                    </p>
                    <br></br>
                    <form onSubmit={submitForm}>
                        <div className='grid-container'>
                            <div className='input-area'>
                                <label for="name">Full name</label>
                                <input type="text" name="name" onChange={e => setFullNameValue(e.target.value)}></input>
                                <div className='no-height'>
                                    <p className='input-error'>{fullNameError}</p>
                                </div>
                            </div>
                            <div className='input-area'>
                                <label for="email">Email address</label>
                                <input type="email" name="email"></input>
                                <div className='no-height'>
                                    <p className='input-error'>{emailError}</p>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        {phoneNumbersMarkup}
                        <br></br><br></br>
                        <div className='input-area'>
                            <a className='new-phone-add general-padding' onClick={addNewPhoneNumber}><b>Add new phone number</b></a>
                        </div>
                        <br></br>
                        <div className='input-area'>
                            <label for="message">Message <span className='hint-text float-right'>Maximum text length is 500 characters</span></label>
                            <textarea name="message" rows="8" cols="50" maxLength="500" onChange={messageValue}></textarea>
                            <div className='no-height'>
                                <p className='input-error'>{messageError}</p>
                            </div>
                        </div>
                        <br></br>
                        <div className='input-area inline-block'>
                            <input type="checkbox" name="addressCheckbox" onClick={changeAddressCheckboxValue}></input>
                            <label for="addressCheckbox" onChange={addressCheckbox}>Add address details</label>
                            <div className='no-height'>
                                <p className='input-error'>{addressCheckboxError}</p>
                            </div>
                        </div>
                        <br></br><br></br>
                        {addressCheckbox == true &&
                            <div>
                                <div className='grid-container'>
                                    <div className='input-area'>
                                        <label for="addressOne">Address line 1</label>
                                        <input type="text" name="addressOne" onChange={addressOneValue}></input>
                                        <div className='no-height'>
                                            <p className='input-error'>{addressOneError}</p>
                                        </div>
                                    </div>
                                    <div className='input-area'>
                                        <label for="addressTwo">Address line 2 - <span className='hint-text'><i>optional</i></span></label>
                                        <input type="email" name="addressTwo" onChange={addressTwoValue}></input>
                                        <div className='no-height'>
                                            <p className='input-error'>{addressTwoError}</p>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                                <div className='grid-container'>
                                    <div className='grid-container'>
                                        <div className='input-area'>
                                            <label for="cityOrTown">City/Town</label>
                                            <input type="text" name="cityOrTown" onChange={cityOrTownValue}></input>
                                            <div className='no-height'>
                                                <p className='input-error'>{cityOrTownError}</p>
                                            </div>
                                        </div>
                                        <div className='input-area'>
                                            <label for="">State/County</label>
                                            <input type="email" name="" onChange={stateOrCountyValue}></input>
                                            <div className='no-height'>
                                                <p className='input-error'>{stateOrCountyError}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='grid-container'>
                                        <div className='input-area'>
                                            <label for="">Postcode</label>
                                            <input type="text" name="" onChange={postCodeValue}></input>
                                            <div className='no-height'>
                                                <p className='input-error'>{postCodeError}</p>
                                            </div>
                                        </div>
                                        <div className='input-area'>
                                            <label for="">Country</label>
                                            <input type="email" name="" onChange={countryValue}></input>
                                            <div className='no-height'>
                                                <p className='input-error'>{countryError}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        <br></br>
                        <button className='main-button submit-button'>
                            <span className='submit-icon'>
                                <img src={SubmitIcon} width="20px" height="auto"></img>
                            </span>
                            <b>Submit</b>
                        </button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Contact;