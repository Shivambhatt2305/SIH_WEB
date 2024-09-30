import React, { useState, useEffect,useRef } from 'react'
import { GraduationCap, Home,BotMessageSquare, Info,Earth, Mail,TvMinimal, BookUser, MessageCircle, ChevronDown, ChevronUp,User,UserCircle2Icon,Star, BarChart, HelpCircle, Award, Book , X} from 'lucide-react'
import './App.css';
import { motion } from 'framer-motion';
import cover from './cover.png'

const Navigation = () =>{
  const [isGlass, setIsGlass] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsGlass(true);
    } else {
      setIsGlass(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`flex items-center  justify-between p-4  transition-all duration-300 ${isGlass ? 'navbar glass' : 'bg-white'}`}>
      <div className="flex items-center">
        <GraduationCap className="w-8 h-8 text-purple-600" />
        <span className="ml-2 text-2xl font-bold text-purple-600">CareerCrafter</span>
      </div>
      <div className="flex items-center space-x-4">

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <Home className="w-5 h-5 mr-1" />
          Home
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <TvMinimal className="w-5 h-5 mr-1" />
          Physical Counseling
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <GraduationCap className="w-5 h-5 mr-1" />
          Scholerships
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <Book className="w-5 h-5 mr-1" />
          Mini-Courses
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <Earth className="w-5 h-5 mr-1" />
          Explore
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <Info className="w-5 h-5 mr-1" />
          About Us
        </a>

        <a href="#" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300">
          <Mail className="w-5 h-5 mr-1" />
          Contact
        </a>

        <button className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

const Hero = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isOpen) {
    return null; // Hide the Hero section when chat is open
  }

  return (
    <div className="relative bg-gray-70 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className={`text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fadeInUp ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <span className="block xl:inline">Navigate Your</span>{' '}
                <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Career Journey</span>
              </h1>
              <p className={`mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fadeInUp delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                Discover your potential, explore opportunities, and chart your path to success with CareerCrafter.
              </p>
              <div className={`mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fadeInUp delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg px-8 py-3 rounded-full hover:shadow-lg transition duration-300"
                  >
                    Explore Careers
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-10 md:mt-40 element" // Add the 'element' class here
        >
          <img
            src={cover}
            alt="Career Exploration"
            width={640} // Adjust the width if necessary
            height="400px" // Adjust the height if necessary
            className="rounded-lg shadow-xl mx-auto ml-20 h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
// const CareerAssistant = () => {
  
// }

const CareerAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage("Hello! 🌟 I'm here to support you on your career journey. Let's start by getting to know you better!", false);
    }
    if (isOpen) {
      chatContainerRef.current.scrollTop = 0;
    }
  }, [isOpen, messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (message, isUser) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, isUser }]);
  };

  const handleSendMessage = () => {
    if (userInput.trim()) {
      addMessage(userInput, true);
      setUserInput('');
      setTimeout(() => {
        handleConversation(userInput.toLowerCase());
      }, 1000);
    }
  };

  const handleConversation = (userMessage) => {
    // Conversation logic remains the same
  };

  return (
    <>
      

      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 px-6 py-3 text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Chat with Your Buddy
      </button>

      <div
        className={`fixed inset-0 bg-white shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div ref={chatContainerRef} className="chat-container h-full flex flex-col">
          <div className="chat-header flex justify-between items-center">
            <h2 className="text-xl font-bold">YOUR-BUDDY</h2>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="chat-messages flex-grow overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage} disabled={!userInput.trim()}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const About = () => (
  <div className="p-12 bg-white">
    <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">About CareerCrafter</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="mb-4 text-2xl font-bold text-purple-600">Our Mission</h3>
        <p className="text-gray-600">
          At CareerCrafter, our mission is to empower students and recent graduates to navigate the complex world of
          career development with confidence and clarity. We believe that every individual has unique talents and
          potential, and we're dedicated to helping you uncover and leverage these strengths in your professional
          journey.
        </p>
        <h3 className="mt-8 mb-4 text-2xl font-bold text-purple-600">Our Approach</h3>
        <p className="text-gray-600">
          We take a holistic, personalized approach to career guidance. Our team of experienced career counselors and
          industry experts work closely with you to understand your aspirations, skills, and values. We then provide
          tailored advice, resources, and support to help you make informed decisions about your career path.
        </p>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-bold text-purple-600">What Sets Us Apart</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <BotMessageSquare className="w-6 h-6 mr-2 text-purple-600" />
            <div>
              <h4 className="font-bold">Expertise</h4>
              <p className="text-gray-600">
                Our AI-powered Career Assistant "YOUR BUDDY" is here to help you 24/7.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <Star className="w-6 h-6 mr-2 text-purple-600" />
            <div>
              <h4 className="font-bold">Personalization</h4>
              <p className="text-gray-600">
                We offer individualized guidance tailored to your unique needs and goals.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <BarChart className="w-6 h-6 mr-2 text-purple-600" />
            <div>
              <h4 className="font-bold">Data-Driven Insights</h4>
              <p className="text-gray-600">
                We use the latest labor market data and trends to inform our advice and strategies.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <HelpCircle className="w-6 h-6 mr-2 text-purple-600" />
            <div>
              <h4 className="font-bold">Comprehensive Support</h4>
              <p className="text-gray-600">
                From career exploration to job search strategies, we support you at every stage of your career journey.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

const SuccessStories = () => (
  <div className="p-12 bg-blue-50">
  <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Success Stories</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          {/* Replace this with the actual icon component */}
          <UserCircle2Icon className="w-8 h-8 text-purple-600 mr-2" />
          <p className="font-bold">Shreya Tala <span className='text-sm text-gray-500'>~Software Engineer at Tech Corp</span></p>
        </div>
        <p className="text-gray-600">
          "Your Buddy helped me discover my true passion and land my dream job. I'm forever grateful for their guidance."
        </p>
        
      </div>
    ))}
  </div>
</div>

)

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null)

  const questions = [
    {
      q: "What services does CareerCrafter offer?",
      a: "CareerCrafter offers a range of services including career assessments, one-on-one counseling, job search strategies, and various career development resources."
    },
    {
      q: "How can I schedule a career counseling session?",
      a: "You can schedule a career counseling session by visiting our website and clicking on the 'Physical Counseling' button, or by contacting us directly via phone or email."
    },
    {
      q: "Are your services confidential?",
      a: "Yes, all our services are completely confidential. We respect your privacy and adhere to strict confidentiality guidelines."
    },
    {
      q: "Do you offer services for alumni?",
      a: "Yes, we offer career services for alumni as well. We understand that career development is a lifelong process and we're here to support you at every stage."
    }
  ]

  return (
    <div className="p-12 bg-white">
    <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto">
      {questions.map((item, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
          >
            <span className="font-semibold text-lg">{item.q}</span>
            {openQuestion === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openQuestion === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }} 
              className="mt-2 text-gray-600"
            >
              <p>{item.a}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}
const GetInTouch = () => (
  <div className="p-12 bg-blue-50">
    <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Get in Touch</h2>
    <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"></textarea>
      </div>
      <button type="submit" className="w-full px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-300">Send Message</button>
    </form>
  </div>
)

const Footer = () => (
  <footer className="bg-gray-800 text-white p-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">CareerCrafter</h3>
        <p>Guiding students towards successful careers.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-purple-400">Home</a></li>
          <li><a href="F:\sih final\app\public" className="hover:text-purple-400">Physical Counceling</a></li>
          <li><a href="#" className="hover:text-purple-400">Scholerships</a></li>
          <li><a href="#" className="hover:text-purple-400">Mini-Coueses</a></li>
          <li><a href="#" className="hover:text-purple-400">About Us</a></li>
          <li><a href="#" className="hover:text-purple-400">Services</a></li>
          <li><a href="#" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-purple-400"><Mail /></a>
          <a href="#" className="hover:text-purple-400"><MessageCircle /></a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm">
      © 2024 CareerCrafter. All rights reserved.
    </div>
  </footer>
)
const CareerCompass = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="main-container"> {/* Ensure it has enough height */}
        <Hero />
        <CareerAssistant />
        <About />
        <SuccessStories />
        <FAQ />
        <GetInTouch />
      </div>
      <Footer />
    </div>
  );
};
export default CareerCompass;

