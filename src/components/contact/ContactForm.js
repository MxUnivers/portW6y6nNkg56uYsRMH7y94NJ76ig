import React, { useState } from 'react'
import { CreateNewMessage } from '../../actions/api/message_action';

const ContactForm = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [content, setcontent] = useState("");

    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 class="position-relative d-inline text-primary ps-4">Contact Us</h6>
                            <h2 class="mt-2">Contact For Any Query</h2>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <form 
                            onSubmit={(e)=>{
                                e.preventDefault();
                                CreateNewMessage(name,email,subject,content);
                            }}
                            >
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" class="form-control" id="name" placeholder="Your Name" />
                                            <label for="name">Notre nom</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" class="form-control" id="email" placeholder="Your Email" />
                                            <label for="email">Address email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input value={subject} onChange={(e)=>{setsubject(e.target.value)}} type="text" class="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">sujet</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea value={content} onChange={(e)=>{setcontent(e.target.value)}} class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Avis </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Envoyer votre message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
