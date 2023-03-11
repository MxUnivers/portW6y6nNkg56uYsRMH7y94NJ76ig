import React, { useState } from 'react'
import { CreateNewMessage } from '../../actions/api/message_action';
import { bgImg } from '../../configurations/localvalue';

const ContactForm = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [telephone, settelephone] = useState("");
    const [subject, setsubject] = useState("");
    const [content, setcontent] = useState("");

    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5 bg-cover rounded-3xl " style={{backgroundImage:`url('${bgImg.contact}')`}}>
                <div class="row justify-content-center bg-gradient-to-b from-white to-transparent">
                    <div class="col-lg-7 ">
                        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 class="position-relative d-inline text-primary ps-4"></h6>
                            <h2 class="mt-2 text-3xl ">Faite nous part de votre demande  </h2>
                        </div>
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <form 
                            onSubmit={(e)=>{
                                e.preventDefault();
                                CreateNewMessage(name,email,telephone,subject,content);
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
                                            <input value={telephone} onChange={(e)=>{settelephone(e.target.value)}} type="number" class="form-control" id="telephone" placeholder="Subject" />
                                            <label for="telephone">téléhpone</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input value={subject} onChange={(e)=>{setsubject(e.target.value)}} type="text" class="form-control" id="subject" placeholder="Subject" />
                                            <label for="subject">titre de votre demande ou sujet</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea value={content} onChange={(e)=>{setcontent(e.target.value)}} class="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Plus de details sur votre demande ... </label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary bg-blue-600 w-100 py-3" type="submit">Envoyer votre message</button>
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
