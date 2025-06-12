import { useNavigate } from 'react-router';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8 text-center">
        <img 
            src="/homepage.JPG" 
            alt=""
            className="w-100 h-100 mb-6 object-contain" 
            />
      <h1 className="text-4xl font-bold mb-4">Thanks, Dad!</h1>
      <p className="text-base sm:text-lg mb-4 sm:mb-6 px-4 sm:px-0 text-center">Let's create a thank you card for <span className="text-green-600 font-semibold">pops.</span></p>
      <button
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer"
        onClick={() => navigate('/create')}
      >
        Get Started
      </button>
    </div>
  )
}

export default WelcomeScreen;