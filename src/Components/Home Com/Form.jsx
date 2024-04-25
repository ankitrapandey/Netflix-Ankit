// import axios from 'axios';
import React, { useState } from 'react'

const Form = () => {
    const submit = (e) => {
        e.preventDefault()
        const formEle = document.querySelector("form");
        const formData = new FormData(formEle)
        fetch("https://script.google.com/macros/s/AKfycbxBoqB9G_qvnihM2XrycuaehwvcJyeA1uDFedGy9g3GcTmeXYTEJPhZApYNMuyphqP_/exec",
            {
                method: "POST",
                body: formData
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Success:', data);

        })
        .catch(error => {
            console.error('Error:', error);
        });
  
     }
    return (
        <>
            <section class="text-gray-600 body-font bg-yellow-100">
                <div class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section"
                    id="contact-form">
                    <div class="md:w-1/3 w-full">
                        <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Us</h1>
                        <p class="leading-relaxed text-xl text-gray-900">
                            We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
                            us.
                            <br /><br />
                            You can also email us. Click here to reveal email address
                            <a href="https://veilmail.io/e/FkKh7o" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">https://veilmail.io/e/FkKh7o</a>

                        </p>
                        <p class="leading-relaxed text-xl text-gray-900 mt-8">
                            We use VeilMail.io to protect your email address from spam.
                        </p>
                        <span class="inline-flex mt-6 justify-center sm:justify-start">


                        </span>
                    </div>
                    <div class="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
                        <h1 class="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">Contact Form</h1>
                        <form action="send-contact.php" method="post" id="submit-contact-form" onSubmit={submit}>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="name" class="leading-7 py-4 text-lg text-gray-900">Name*</label>
                                    <input type="text" id="Name" name="Name" required=""
                                        class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="email" class="leading-7 py-4 text-lg text-gray-900">Email*</label>
                                    <input type="email" id="Email" name="Email" required=""
                                        class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="number" class="leading-7 py-4 text-lg text-gray-900">Phone*</label>
                                    <input type="number" id="Phone" name="Phone" required=""
                                        class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out " />
                                </div>
                            </div>


                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 py-4 text-lg text-gray-900">Message*</label>
                                    <textarea id="Message" name="Message" required=""
                                        class="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button type="submit"
                                    class="flex text-white bg-gray-900 border-0 py-4 px-6 focus:outline-none hover:bg-blue-900 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Form;
