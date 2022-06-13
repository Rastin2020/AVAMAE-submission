import { useState, useEffect } from 'react';
import SubmitIcon from "../images/Icon_Submit.svg";
import "./Contact.css";

function Contact() {

    var [numberOfPhoneInputs, setNumberOfPhoneInputs] = useState(1);
    var [phoneNumbersMarkup, setPhoneNumbersMarkup] = useState([
        <div className='input-area'>
            <label for="phoneOne">Phone number 1 <span className='hint-text'><i>- optional</i></span></label>
            <input type="tel" name="phoneOne"></input>
        </div>
    ]);

    var [phoneNumberArray, setPhoneNumberArray] = useState([]);
    var [addressCheckbox, setAddressCheckbox] = useState(false);

    function submitForm(event) {
        event.preventDefault();
    }

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
            <div className='input-area'>
                <label for="phoneOne">Phone number {numberOfPhoneInputs} <span className='hint-text'><i>- optional</i></span></label>
                <input type="tel" name="phoneOne"></input>
            </div>
            ]
        });
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
                                <input type="text" name="name"></input>
                            </div>
                            <div className='input-area'>
                                <label for="email">Email address</label>
                                <input type="email" name="email"></input>
                            </div>
                        </div>
                        <br></br>



                        {/* <div className='input-area'>
                            <label for="phoneOne">Phone number 01 <span className='hint-text'><i>- optional</i></span></label>
                            <input type="tel" name="phoneOne"></input>
                        </div> */}

                        {phoneNumbersMarkup}




                        <br></br><br></br>
                        <div className='input-area'>
                            <a className='new-phone-add general-padding' onClick={addNewPhoneNumber}><b>Add new phone number</b></a>
                        </div>
                        <br></br>
                        <div className='input-area'>
                            <label for="message">Message <span className='hint-text float-right'>Maximum text length is 500 characters</span></label>
                            <textarea name="message" rows="8" cols="50" maxLength="500"></textarea >
                        </div>
                        <br></br>
                        <div className='input-area inline-block'>
                            <input type="checkbox" name="addressCheckbox" onClick={changeAddressCheckboxValue}></input>
                            <label for="addressCheckbox">Add address details</label>
                        </div>
                        <br></br><br></br>
                        {addressCheckbox == true &&
                            <div>
                                <div className='grid-container'>
                                    <div className='input-area'>
                                        <label for="addressOne">Address line 1</label>
                                        <input type="text" name="addressOne"></input>
                                    </div>
                                    <div className='input-area'>
                                        <label for="addressTwo">Address line 2 - <span className='hint-text'><i>optional</i></span></label>
                                        <input type="email" name="addressTwo"></input>
                                    </div>
                                </div>
                                <br></br>
                                <div className='grid-container'>
                                    <div className='grid-container'>
                                        <div className='input-area'>
                                            <label for="cityOrTown">City/Town</label>
                                            <input type="text" name="cityOrTown"></input>
                                        </div>
                                        <div className='input-area'>
                                            <label for="">State/County</label>
                                            <input type="email" name=""></input>
                                        </div>
                                    </div>
                                    <div className='grid-container'>
                                        <div className='input-area'>
                                            <label for="">Postcode</label>
                                            <input type="text" name=""></input>
                                        </div>
                                        <div className='input-area'>
                                            <label for="">Country</label>
                                            <input type="email" name=""></input>
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