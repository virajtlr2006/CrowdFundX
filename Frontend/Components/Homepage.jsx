import React from 'react'
import { Layers, TrendingUp, Users, Target, Zap } from 'lucide-react'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate = useNavigate()

  const newcampaign = async () => {
    navigate("/new")
  }

  const explorecampaign = async () => {
    navigate("/explore")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      
      {/* Hero Section */}
      <main className="relative flex-1">
        <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Text */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Empower Ideas,
                  <span className="block text-indigo-600">Fund Dreams</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  CrowdfundX helps bring creative projects to life. Join a global community of dreamers, innovators, and backers who believe in the power of ideas.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <a 
                  onClick={newcampaign}
                    href="#"
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    🚀 Start a Campaign
                  </a>
                  <a 
                  onClick={explorecampaign}
                    href="#"
                    className="px-8 py-4 text-lg font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-2xl shadow hover:bg-indigo-50 hover:scale-105 transition-transform duration-300"
                  >
                    🔍 Explore Campaigns
                  </a>
                </div>
              </div>

              {/* Right Visual Element */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 p-8 transform hover:scale-105 transition-transform duration-500 h-96">
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse"></div>
                    <div className="absolute top-4 right-8 w-24 h-24 border-2 border-white border-opacity-20 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                    <div className="absolute bottom-12 left-6 w-16 h-16 border border-white border-opacity-30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-white space-y-6">
                    
                    {/* Funding Progress Visualization */}
                    <div className="w-full max-w-sm">
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold mb-2">Campaign Success</h3>
                        <div className="text-4xl font-extrabold text-green-300">$847K</div>
                        <div className="text-sm opacity-80">of $500K goal</div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative w-full bg-white bg-opacity-20 rounded-full h-4 mb-4">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 h-4 rounded-full animate-pulse" style={{width: '85%'}}></div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full mt-0.5 mr-1 animate-bounce"></div>
                      </div>
                      
                      <div className="text-center text-lg font-semibold text-green-300">169% Funded!</div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                      <div className="text-center bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <Users className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                        <div className="text-xl font-bold text-gray-900">2.4K</div>
                        <div className="text-sm text-gray-600 font-medium">Backers</div>
                      </div>
                      
                      <div className="text-center bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                        <div className="text-xl font-bold text-gray-900">28</div>
                        <div className="text-sm text-gray-600 font-medium">Days Left</div>
                      </div>
                      
                      <div className="text-center bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <Target className="w-6 h-6 mx-auto mb-2 text-indigo-600" />
                        <div className="text-xl font-bold text-gray-900">$354</div>
                        <div className="text-sm text-gray-600 font-medium">Avg Pledge</div>
                      </div>
                    </div>

                    {/* Live Activity Indicator */}
                    <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 bg-opacity-20 backdrop-blur-sm rounded-full py-2 px-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="text-sm font-medium">5 recent pledges</span>
                    </div>

                  </div>

                  {/* Floating Money/Coin Elements */}
                  <div className="absolute top-6 right-12 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💰</div>
                  <div className="absolute top-20 left-8 text-xl animate-pulse" style={{animationDelay: '1s'}}>🚀</div>
                  <div className="absolute bottom-16 right-6 text-lg animate-bounce" style={{animationDelay: '1.5s'}}>⭐</div>
                  <div className="absolute bottom-8 left-12 text-xl animate-pulse" style={{animationDelay: '2s'}}>💡</div>

                  {/* Success Burst Effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="relative">
                      <div className="w-32 h-32 border border-yellow-300 border-opacity-30 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                      <div className="absolute inset-0 w-32 h-32 border border-green-300 border-opacity-30 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-auto">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            <div>
              <h3 className="text-xl font-bold text-white">CrowdfundX</h3>
              <p className="mt-3 text-sm text-gray-400">
                Empowering ideas & funding dreams since 2023.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-white transition-colors" href="#">How It Works</a></li>
                <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Campaigns</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="hover:text-white transition-colors" href="#">Explore</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Start a Campaign</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
                <li><a className="hover:text-white transition-colors" href="#">Trust & Safety</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex mt-4 space-x-5">
                <a href="#" className="hover:text-white">🌐</a>
                <a href="#" className="hover:text-white">🐦</a>
                <a href="#" className="hover:text-white">📸</a>
              </div>
            </div>

          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2025 CrowdfundX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Navbar