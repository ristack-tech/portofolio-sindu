import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mdekekze");

  if (state.succeeded) {
      return <p className="text-white text-xl font-medium">Thanks for sending a message! I'll get back to you within 24 hours!</p>;
  }

  return (
    <form onSubmit={handleSubmit} id='contact' className="bg-gray-900 w-full px-10 py-10 rounded-md font-outfit flex flex-col items-center justify-center">

      <div className='flex flex-col gap-6 py-4 w-full'>
          <div className='grid md:grid-cols-2 w-full gap-6'>
            <div>
                <label htmlFor="name" className="block text-left font-semibold mb-2 main-gradient text-lg">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder='John Doe'
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block main-gradient text-lg text-left font-semibold mb-2">Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder='john@example.com'
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>
          </div>
                    
        <div>
            <label htmlFor="message" className="block main-gradient text-lg text-left font-semibold mb-2">Your Message</label>
            <textarea
                id="message"
                name="message"
                placeholder='Write your message here...'
                required
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
            />
        </div>

      </div>

      <button type='submit' disabled={state.submitting} className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-orange-500 rounded-md shadow-md group">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-orange-500 group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">{state.submitting ? 'Submitting...' : 'Submit'}</span>
        <span className="relative invisible">{state.submitting ? 'Submitting...' : 'Submit'}</span>
      </button>

    </form>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center">
      <ContactForm />
    </div>
  );
}

export default App;
