import React, { useState }from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_YqDIlJO6k0qYYuclQpLVf");


function Contact() {
    const [statusMessage, setStatusMessage ] = useState("");
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = (data) => {
        const form = document.querySelector('#formulaire');
        const button = document.querySelector('#send');
        const statusMessage = document.querySelector('.status-message');
        sendForm('default_service', 'template_r5vkp3a', '#formulaire') 
        .then(function (response) {
            form.reset();
            button.setAttribute('disabled', 'true')
            setStatusMessage("Message envoyé!");
            statusMessage.className = "status-message success";
            setTimeout(() => {
                statusMessage.className = 'status-message'
            }, 5000);
        }, function (error) {
            setStatusMessage("Failed to send message! Please try again later.");
            statusMessage.className = "status-message failure";
            setTimeout(() => {
                statusMessage.className = 'status-message'
            }, 5000)
        });
}

const message = watch('message') || "";
const messageCharsLeft = 1500 - message.length;
    
    return (
        <div className="mt-5 pt-5" id="contact">
            <h1 className="h2 text-center">Formulaire de contact</h1>
            <p className="text-center">{statusMessage}</p>
            <form className="d-flex justify-content-center" id="formulaire" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <div className="form-group">
                        <label for="email" className="form-label mt-4">Adresse email</label>
                        <input type="email" name="user_email" className="form-control" id="email" placeholder="Votre Email" {...register('user_email', { required : "Required"} )}/>
                    </div>
                    <div className="form-group">
                        <label for="subject" className="form-label mt-4">Sujet</label>
                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Sujet" {...register('subject', { required : "Required"} )}/>
                    </div>
                    <div className="form-group">
                        <label for="message" className="form-label mt-4">Message</label>
                        <textarea cols="60" rows="10" className="form-control" name="message" id="message" style={{resize: 'none'}} placeholder="Ecrivez votre message ici" {...register('message', { required : "Required"} )}/>
                        <p>{messageCharsLeft}</p>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <input type="submit" id="send" className="btn btn-lg btn-warning mt-3" value="Envoyer"/>
                    </div>
                </fieldset>

            </form>
        </div>
    )
}

export default Contact
