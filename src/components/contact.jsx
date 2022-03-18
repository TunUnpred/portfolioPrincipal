import React from 'react';
import Mail from '../images/gmail.png';
import Phone from '../images/phone.png';
import Street from '../images/address.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


function Contact() {
    const refForm = useRef();
    const [done, setDone] = useState(false);
    function handleSubmit(e) {

        e.preventDefault();
        emailjs.sendForm('service_10rwr36', 'template_qrexuf9', refForm.current, 'c_JAqa-OaX5-gCmDF')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='contact-container'>
            <div className='green-bar'>
            </div>
            <div className='left-contact-container'>
                <h1 className='disc-title'>let's discuss your project</h1>
                <div className='infos'>
                    <img className='icons' src={Mail} alt='mail-img' />
                    sahlikhaled25@gmail.com
                </div>
                <div className='infos'>
                    <img className='icons' src={Phone} alt='phone-img' />
                    +21690118444
                </div>
                <div className='infos'>
                    <img className='icons' src={Street} alt='street-img' />
                    Rue abu dhabi Kharrouba Hammamet Nabeul
                </div>

            </div>
            <div className='right-contact-container'>
                <p className='par-contact'><span>What's your story?</span> Act in touch. Always available for freelancing if the right project comes along me.</p>
                <form ref={refForm} onSubmit={handleSubmit}>
                    <input className='info-contact' name='user_name' type="text" placeholder='Name' /><br />
                    <input className='info-contact' name='user_subject' type="text" placeholder='Subject' /><br />
                    <input className='info-contact' name='user_email' type="text" placeholder='Email' /><br />
                    <textarea className='info-contact-text' name='message' type="text" rows='10' cols='90' placeholder='Message' /><br />
                    <button class="button-3" role="button">Submit</button>
                    {done && " Thank you ..."}
                </form>

            </div>

        </div>
    )

}
export default Contact;