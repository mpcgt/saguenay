import { Users, Sparkles, ArrowRight } from "lucide-react";
import NavigationBar from "../features/navbar/navigation";

const Invite = () => {
  return (
    <>
      <NavigationBar />
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mt-10 mb-6">
              <Users className="h-16 w-16 text-purple-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Invite Your Loved Ones to Join
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join Saguenay's growing community and connect with your loved
              ones. Share special moments, discover new perspectives, and create
              authentic bonds that last.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
                <Sparkles className="h-10 w-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Shared Experiences
                </h3>
                <p className="text-gray-300">
                  Create unforgettable memories with your community
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
                <Users className="h-10 w-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Authentic Connections
                </h3>
                <p className="text-gray-300">
                  Develop meaningful relationships that last
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
                <ArrowRight className="h-10 w-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Continuous Growth
                </h3>
                <p className="text-gray-300">Expand your network day by day</p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 flex items-center mx-auto gap-2">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-20">
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=2000&q=80"
              alt="Family and Friends"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] opacity-90"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Invite;
