import React from 'react'

const AboutComponent = (props) => {

    const avantagesSolutions = [
        {
            title: "Développement d'application web et mobile",
            description: `Système de sécurité de haut niveau utilisant la Blockchain`,
            image: 'img/developpement_application.jpg',
        },
        {
            title: "Design",
            description: `Système de sécurité de haut niveau utilisant la Blockchain`,
            image: 'img/design.jpg',
        },
        {
            title: "Animation",
            description: `Traçabilité en temps réel et garantie de fonds`,
            image: 'img/annimation_2d.jpg',
        },
        {
            title: "Modélisation 3d",
            description: `Faibles coûts opérationnels et de liquidité`,
            image: 'img/modelisation_3d.jpg',
        },

    ];



    const stepsGepac = [
        {
            title: "Developpement d'application web et mobile",
            coverPicture: "img/developpement_application.jpg",
            description1: `Transformez vos idées en réalité numérique avec notre expertise en développement d'applications mobiles et web`,
            elements: [],
            description2: "",
            elements_first: []
        },
        {
            title: "Design",
            coverPicture: "img/design.jpg",
            description1: `Nous sommes passionnés par la création d'éléments visuels captivants et esthétiquement plaisants qui communiquent efficacement votre message`,
            elements: [],
            description2: "",
            elements_first: []
        },

        {
            title: "Animation ",
            coverPicture: "img/annimation_2d.jpg",
            description1: `Nous combinons notre sens artistique avec une compréhension approfondie . Ou qu'il s'agisse de donner vie à des personnages animés`,
            elements: [],
            description2: "",
            elements_first: []
        },

        {
            title: "Modélisation 3d",
            coverPicture: "img/modelisation_3d.jpg",
            description1: `Explorez un univers tridimensionnel fascinant avec notre expertise en modélisation 3D. Nous donnons vie à vos concepts et créons des représentations visuelles réalistes qui laissent une impression durable. `,
            elements: [],
            description2: "",
            elements_first: []
        }
    ];

    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="flex flex-col bg-gray-100 md:flex-row items-center">
                        <div class="md:w-1/2">
                            <img class="rounded-full w-full h-[200px] object-cover mx-auto mb-6" src="img/about.jpg" alt="Votre nom" />
                        </div>
                        <div class="md:w-1/2 md:pl-12">
                            <h2 class="text-3xl font-bold mb-4">Bonjour, je suis AYMAR BLY</h2>
                            <p class="text-base mb-6">Développeur passionné et créatif, je suis spécialisé dans la création d{"'"}applications web et mobiles.</p>
                            <p class="text-base mb-6">Avec une solide expérience en développement front-end et backend , je suis en mesure de créer des interfaces utilisateur attrayantes et intuitives qui offrent une expérience utilisateur exceptionnelle.</p>
                            <p class="text-base mb-6">Je suis constamment à l'affût des dernières tendances technologiques et je m'efforce d{"'"}apporter des solutions innovantes à chaque projet sur lequel je travaille.</p>
                            <p class="text-base mb-6">Je suis toujours ouvert aux nouvelles opportunités de collaboration et je serais ravi de discuter de votre projet avec vous. N{"'"}hésitez pas à me contacter pour en savoir plus. et je suis ouvert plusieur domaines d{"'"}activités </p>
                            <a href="mailto:mxunivers47@gmail.com" class="text-lg bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Contactez-moi
                            </a>
                        </div>
                    </div>

                </div>

                <div className="w-fullbg-white rounded-lg  p-6">
                    <h1 className="text-3xl w-full font-bold mb-6 text-center">Compétences</h1>
                    <div className="row justify-center item-center gap-3 w-full ">
                        {stepsGepac.map((benefit, index) => (
                            <div key={index} className="col-md-3   m-1 bg-white shadow-lg  flex flex-col items-center p-4 rounded-lg">
                                <img src={benefit.coverPicture} alt={benefit.title} className="h-[150px] w-[150px] border border-gray-100  rounded-full mb-4" />
                                <h2 className="text-2xl font-semibold mb-2 text-center">{benefit.title}</h2>
                                <p className="text-gray-600 text-center">{benefit.description1}</p>
                                <ul class="mt-4">
                                    {
                                        benefit.elements.map((item) => {
                                            return (
                                                <li class="font-mediumn font-normal text-amber-700 text-start my-1">
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default AboutComponent;