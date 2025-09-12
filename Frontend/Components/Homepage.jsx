import React, { useState } from 'react'
import { Layers, TrendingUp, Users, Target, Zap, Shield, Award, Heart, Play, ChevronRight, Star, CheckCircle, Globe, MessageCircle, Camera } from 'lucide-react'
import { useNavigate } from 'react-router'

const CrowdfundXLanding = () => {
  const navigate = useNavigate()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const newcampaign = async () => {
    navigate("/new")
  }

  const explorecampaign = async () => {
    navigate("/explore")
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Tech Entrepreneur",
      image: "👩‍💻",
      text: "CrowdfundX helped me raise $150k for my AI startup in just 30 days. The platform's tools and community support were incredible!",
      amount: "$150,000",
      project: "AI Learning Assistant"
    },
    {
      name: "Miguel Rodriguez",
      role: "Artist & Designer",
      image: "🎨",
      text: "As an independent artist, I never thought I could fund my gallery exhibition. CrowdfundX made it possible!",
      amount: "$85,000",
      project: "Digital Art Exhibition"
    },
    {
      name: "Emma Chen",
      role: "Social Impact Leader",
      image: "🌱",
      text: "We funded our clean water project for 5 villages. The transparency and trust on this platform is unmatched.",
      amount: "$200,000",
      project: "Clean Water Initiative"
    }
  ]

  const featuredCampaigns = [
    {
      title: "Smart Garden Revolution",
      category: "Technology",
      raised: "$145,000",
      goal: "$100,000",
      percentage: 145,
      backers: "1,200",
      daysLeft: "15",
      image: "🌱",
      description: "Automated indoor gardening for everyone"
    },
    {
      title: "Ocean Cleanup Drone",
      category: "Environment",
      raised: "$89,000",
      goal: "$120,000",
      percentage: 74,
      backers: "850",
      daysLeft: "22",
      image: "🌊",
      description: "Autonomous drones to clean ocean plastic"
    },
    {
      title: "Indie Game: Starlight",
      category: "Gaming",
      raised: "$67,000",
      goal: "$80,000",
      percentage: 84,
      backers: "2,100",
      daysLeft: "8",
      image: "🎮",
      description: "Epic space exploration adventure game"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-50">
      
 
      {/* Hero Section */}
      <main className="relative flex-1">
        <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Text */}
              <div className="text-center lg:text-left space-y-6">
                <div className="inline-flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Join 500K+ creators worldwide</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                  Empower Ideas,
                  <span className="block text-indigo-600">Fund Dreams</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                  CrowdfundX helps bring creative projects to life. Join a global community of dreamers, innovators, and backers who believe in the power of ideas.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <button 
                    onClick={newcampaign}
                    className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    🚀 Start a Campaign
                  </button>
                  <button 
                    onClick={explorecampaign}
                    className="px-8 py-4 text-lg font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-2xl shadow hover:bg-indigo-50 hover:scale-105 transition-transform duration-300"
                  >
                    🔍 Explore Campaigns
                  </button>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">$50M+</div>
                    <div>Funds Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">25K+</div>
                    <div>Projects Funded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">180+</div>
                    <div>Countries</div>
                  </div>
                </div>
              </div>

              {/* Right Visual Element - Keep existing design */}
              <div className="relative">
                <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-800 p-8 transform hover:scale-105 transition-transform duration-500 h-96">
                  
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-5 animate-pulse"></div>
                    <div className="absolute top-4 right-8 w-24 h-24 border-2 border-white border-opacity-20 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                    <div className="absolute bottom-12 left-6 w-16 h-16 border border-white border-opacity-30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-white space-y-6">
                    <div className="w-full max-w-sm">
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold mb-2">Campaign Success</h3>
                        <div className="text-4xl font-extrabold text-green-300">$847K</div>
                        <div className="text-sm opacity-80">of $500K goal</div>
                      </div>
                      
                      <div className="relative w-full bg-white bg-opacity-20 rounded-full h-4 mb-4">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-green-400 to-emerald-500 h-4 rounded-full animate-pulse" style={{width: '85%'}}></div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full mt-0.5 mr-1 animate-bounce"></div>
                      </div>
                      
                      <div className="text-center text-lg font-semibold text-green-300">169% Funded!</div>
                    </div>

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

                    <div className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 bg-opacity-20 backdrop-blur-sm rounded-full py-2 px-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
                      </div>
                      <span className="text-sm font-medium">5 recent pledges</span>
                    </div>
                  </div>

                  <div className="absolute top-6 right-12 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💰</div>
                  <div className="absolute top-20 left-8 text-xl animate-pulse" style={{animationDelay: '1s'}}>🚀</div>
                  <div className="absolute bottom-16 right-6 text-lg animate-bounce" style={{animationDelay: '1.5s'}}>⭐</div>
                  <div className="absolute bottom-8 left-12 text-xl animate-pulse" style={{animationDelay: '2s'}}>💡</div>

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

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How CrowdfundX Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to turn your vision into reality and connect with supporters worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Create Your Campaign</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your story, set your funding goal, and showcase your project with compelling visuals and detailed descriptions. Our tools make it easy to build trust with potential backers.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Build Your Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with backers, share updates, and build momentum. Use our social tools to reach your network and attract new supporters who believe in your vision.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Achieve Your Goals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Reach your funding target and bring your project to life. With our secure payment processing and fulfillment tools, delivering rewards to backers is seamless.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <button 
                onClick={newcampaign}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Get Started Today
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Featured Campaigns */}
        <section id="campaigns" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Featured Campaigns
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover amazing projects from creators around the world that are making a difference
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCampaigns.map((campaign, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-6xl">{campaign.image}</div>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                      {campaign.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-gray-900">{campaign.raised}</span>
                        <span className="text-sm text-gray-500">of {campaign.goal}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{width: `${Math.min(campaign.percentage, 100)}%`}}
                        ></div>
                      </div>
                      <div className="text-sm text-indigo-600 font-medium mt-1">
                        {campaign.percentage}% funded
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600">
                      <span><strong>{campaign.backers}</strong> backers</span>
                      <span><strong>{campaign.daysLeft}</strong> days left</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={explorecampaign}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-700 bg-white border border-indigo-200 rounded-2xl shadow hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
              >
                View All Campaigns
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

      

      

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Bring Your Idea to Life?
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join thousands of successful creators who have turned their dreams into reality with CrowdfundX. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={newcampaign}
                className="px-10 py-4 text-lg font-semibold text-indigo-600 bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                🚀 Launch Your Campaign
              </button>
              <button 
                onClick={explorecampaign}
                className="px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Explore Projects
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-indigo-100">
              <div className="text-center">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">to Start</div>
              </div>
              <div className="w-px h-8 bg-indigo-400"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">5%</div>
                <div className="text-sm">Platform Fee</div>
              </div>
              <div className="w-px h-8 bg-indigo-400"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

 
    </div>
  )
}

export default CrowdfundXLanding