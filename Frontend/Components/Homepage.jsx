import React from 'react'
import { Layers } from 'lucide-react'
const Navbar = () => {
  return (
    // Navbar 
    <div>
     
      {/* Workspace */}
      <div className='bg-blue-200'>
        <main class="relative">
          <section class="pt-40 pb-24 sm:pt-48 sm:pb-32">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
              <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="text-center lg:text-left">
                  <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                    Empower Ideas,
                    <span class="block">Fund Dreams</span>
                  </h1>
                  <p class="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                    The premier platform to bring your creative projects to life. Join a community of innovators and backers who believe in the power of great ideas.
                  </p>
                  <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 border border-transparent rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all" href="#">
                      Start a Campaign
                    </a>
                    <a class="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-indigo-600 bg-white border-2 border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all" href="#">
                      Explore Campaigns
                    </a>
                  </div>
                </div>
                <div class="relative">
                  <div class="aspect-w-1 aspect-h-1">
                    <img alt="Abstract crowdfunding illustration" class="object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATkib8kS_8njB5B3VgaTOmmgC0zdytf9FZXPChxAkqqr35pGF3HeALJ3RkPOoHR4Haef-6WjgnRKXlPCD0XxRiTGjW1uwaIHp9Hs-v21Qu7ddQCo2oFxAVcCJTUeYAV219DP_ICn64G054zkGbtYQeXY3KA-I1VeRoiod9RatS7qBQ5C0DjjPSfld9Bibc-aYqBL04DP9CYhj8Hk6mHHN7BZjUJLVjfVkSNdB2VxLoGtjb8PHnXxCLknEW79a7d0dCduariIpcyVsc" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div>
        <footer class="bg-gray-900 text-white">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 class="text-lg font-semibold">CrowdfundX</h3>
                <p class="mt-2 text-gray-400 text-sm">Empowering ideas and funding dreams since 2023.</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold">Quick Links</h3>
                <ul class="mt-4 space-y-2 text-sm">
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">About Us</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">How It Works</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">FAQ</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold">Campaigns</h3>
                <ul class="mt-4 space-y-2 text-sm">
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">Explore</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">Start a Campaign</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">Success Stories</a></li>
                  <li><a class="text-gray-400 hover:text-white transition-colors" href="#">Trust &amp; Safety</a></li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold">Follow Us</h3>
                <div class="flex mt-4 space-x-4">
                  <a class="text-gray-400 hover:text-white transition-colors" href="#">
                    <span class="sr-only">Facebook</span>
                    <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
                  </a>
                  <a class="text-gray-400 hover:text-white transition-colors" href="#">
                    <span class="sr-only">Twitter</span>
                    <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                  </a>
                  <a class="text-gray-400 hover:text-white transition-colors" href="#">
                    <span class="sr-only">Instagram</span>
                    <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.146 0-3.882 1.736-3.882 3.882s1.736 3.882 3.882 3.882 3.882-1.736 3.882-3.882S14.146 8.118 12 8.118zM12 14.158c-1.196 0-2.158-.962-2.158-2.158s.962-2.158 2.158-2.158 2.158.962 2.158 2.158-.962 2.158-2.158 2.158zM16.953 6.577a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" fill-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
              <p>© 2025 CrowdfundX. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Navbar
