import React, { useState } from 'react'
import { bgImg } from '../../configurations/localvalue'
import { Button, Modal } from 'react-bootstrap';

const LandinAbout = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (

        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn rounded-3xl" data-wow-delay="0.5s" src={`img/developper_web.png`} />
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="section-title position-relative mb-4 pb-2">
                            <h6 class="position-relative text-primary ps-4 text-3xl">Projets web, applications mobiles, design et illustration</h6>
                            <h2 class="mt-2 text-xl opacity-0">Nous sommes ravis de vous compter parmi nous </h2>
                        </div>
                        <p class="mb-4">
                            Si vous êtes à la recherche d{"'"}un professionnel talentueux pour concrétiser vos idées et donner vie à vos projets, ne cherchez pas plus loin. Mon portfolio regorge de réalisations impressionnantes dans les domaines du développement web,
                            des applications mobiles, du design et de l{"'"}illustration.
                        </p>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Statifaction</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Évolutivité</h6>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Innovation</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Qualité</h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-4">
                            <button onClick={openModal} class="btn btn-primary rounded-pill px-10 me-3" href="">Envoyer nous un message</button>
                            <a class="btn btn-outline-primary btn-square me-3" href=""><i class="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </div>
            </div>


            {/* modalde de conntact */}
            <Modal show={showModal} onHide={closeModal} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Infos Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form class="w-full max-w-lg">
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="nom complet" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="email" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="telelpone" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="pays" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3 mb-6 md:mb-0">
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Sujet" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full px-3 mb-6 md:mb-0">
                                <textarea rows={4} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="donner plus de details ici" />
                                <p class="text-gray-600 text-xs italic"></p>
                            </div>
                        </div>
                        <div class="w-full py-3 mt-5 flex justify-end items-center">
                            <div class="flex flew-row justify-center space-x-3">
                                <button onClick={closeModal} type='button' class="btn btn-outline-info rounded-pill px-10 me-3">retour</button>
                                <button type='submit' class="btn btn-outline-primary rounded-pill px-10 me-3">Envoyer </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default LandinAbout;
