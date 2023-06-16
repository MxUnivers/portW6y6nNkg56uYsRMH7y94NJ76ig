import React from 'react'
import { bgImg } from '../../configurations/localvalue'

const AboutBg = () => {
    return (
        <div
            class="relative h- rounded-br-full rounded-b-3xl overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-[400px]"
            style={{backgroundImage: `url('${bgImg.landingBg1}')`}}>
            <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-gradient-to-t from-bg-blue-400 to-transparent"
                style={{backgroundColor: "rgba(0, 62, 175  ,0.5)"}}>
                <div class="flex h-full items-center justify-center">
                    <div class="text-white">
                        <h2 class="mb-4 text-4xl font-semibold text-white">
                            Qui somme sommes nous ?
                        </h2>
                        <h4 class="mb-6 text-xl font-semibold text-white">
                        </h4>
                        <button
                            type="button"
                            class="rounded border-2 border-neutral-50 px-7 pt-[10px] pb-[5px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            en savoir plus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBg