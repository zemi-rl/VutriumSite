"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function ResellersPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="vutrium-theme">
      <header className="site-header">
        <div className="wrap nav">
          <div className="brand">
            <a href={`${basePath}/`} className="flex items-center gap-2">
              <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={40} height={40} className="rounded-2xl border border-white/10" />
            </a>
            <div className="brand__name">
              <span className="brand__title">Vutrium</span>
              <span className="badge">Beta • in development</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop navigation */}
          <nav className="nav__links !hidden md:!flex" aria-label="primary">
            <a href={`${basePath}/#features`}>Features</a>
            <a href={`${basePath}/#how`}>How it Works</a>
            <a href={`${basePath}/#download`} className="btn btn--ghost">Download</a>
            <a href="https://needlesspage819.github.io/VutriumSite/resellers/" className="btn border-b-2 border-white/30">Resellers</a>
            <a href="https://discord.gg/6qFa34HUqB" target="_blank" rel="noopener noreferrer" className="btn">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
            <a href="https://github.com/tntgamer685347/TNTsTemplate" target="_blank" rel="noopener noreferrer">Template</a>
            <a href="https://github.com/tntgamer685347/VutriumBot" target="_blank" rel="noopener noreferrer">Legacy</a>
          </nav>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
            <nav className="wrap py-4 space-y-3" aria-label="mobile primary">
              <a href={`${basePath}/#features`} className="block py-2 text-white/80 hover:text-white transition-colors">Features</a>
              <a href={`${basePath}/#how`} className="block py-2 text-white/80 hover:text-white transition-colors">How it Works</a>
              <a href={`${basePath}/#download`} className="block py-2 text-white/80 hover:text-white transition-colors">Download</a>
              <a href="https://needlesspage819.github.io/VutriumSite/resellers/" className="block py-2 text-white border-b border-white/30">Resellers</a>
              <a href="https://discord.gg/6qFa34HUqB" target="_blank" rel="noopener noreferrer" className="block py-2 text-white/80 hover:text-white transition-colors flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Discord
              </a>
              <a href="https://github.com/tntgamer685347/TNTsTemplate" target="_blank" rel="noopener noreferrer" className="block py-2 text-white/80 hover:text-white transition-colors">Template</a>
              <a href="https://github.com/tntgamer685347/VutriumBot" target="_blank" rel="noopener noreferrer" className="block py-2 text-white/80 hover:text-white transition-colors">Legacy</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div>
              <div className="eyebrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M3 16h10M7 8h10" stroke="currentColor" opacity="0.7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                For Ambitious Entrepreneurs
              </div>
              <h1>
                The Official Vutrium
                <span className="grad">Reseller's Roadmap</span>
              </h1>
              <p className="sub">
                Hello, aspiring entrepreneurs. It's come to my attention that some of you see this free, community-driven project and think, "I can make a quick buck off this." I admire the ambition. However, you seem to have mistaken a high-performance F1 car for a Hot Wheels toy you can just repackage.
              </p>
              <p className="sub">
                To save you from selling a broken product and getting charged back into oblivion, I've prepared a helpful little guide. If you can complete all these steps, you'll have successfully "cracked" this free software.
              </p>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur p-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)] h-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-white/40 font-mono ml-2">crack_vutrium.sh</span>
              </div>
              
              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">$ ./crack_vutrium.sh</div>
                <div className="text-red-400 animate-pulse">[ERROR] Multi-layer encryption detected</div>
                <div className="text-red-400 animate-pulse" style={{animationDelay: '0.5s'}}>[ERROR] C++ SDK missing</div>
                <div className="text-red-400 animate-pulse" style={{animationDelay: '1s'}}>[ERROR] Runtime watermark active</div>
                <div className="text-red-400 animate-pulse" style={{animationDelay: '1.5s'}}>[ERROR] Skill level insufficient</div>
                <div className="text-yellow-400 mt-4">
                  <span className="inline-block animate-pulse"> [INFO] </span> Estimated time to crack: ∞
                </div>
                <div className="text-purple-400 mt-4 text-xs">
                  <div className="animate-pulse" style={{animationDelay: '2s'}}>// Good luck with that</div>
                  <div className="animate-pulse" style={{animationDelay: '2.5s'}}>// You'll need it</div>
                </div>
              </div>
            </div>
          </div>
        </section>

                 <section id="prerequisites">
           <div className="wrap">
             <div className="section__head">
               <h2 className="section__title">Prerequisites (Choose Your Class)</h2>
               <div className="muted">Before you begin, you must be a master of the following. This is not optional.</div>
             </div>

                           <div className="grid-3-1">
                <div className="col-4">
                  <div className="card tilt">
                    <div className="icon lift">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="lift">The Cryptographer</h3>
                    <p>You find reversing multi-layered, key-derived permutation ciphers to be a trivial weekend task.</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card tilt">
                    <div className="icon lift">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M8 9l3 3-3 3m5 0h4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="lift">The C++ Wizard</h3>
                    <p>You can write a thread-safe, high-performance, asynchronous TCP server from scratch while blindfolded.</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card tilt">
                    <div className="icon lift">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="lift">The Reverse Engineer</h3>
                    <p>You live in IDA Pro and Ghidra. You find and patch compiled C++ binaries for fun.</p>
                  </div>
                </div>

                <div className="col-4-left">
                  <div className="card tilt">
                    <div className="icon lift">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" stroke="currentColor" strokeWidth="1.8"/>
                      </svg>
                    </div>
                    <h3 className="lift">The Game Dev</h3>
                    <p>You understand Unreal Engine's object and event model better than its own creators.</p>
                  </div>
                </div>
              </div>
           </div>
         </section>

         <section id="roadmap">
           <div className="wrap">
                         <div className="section__head">
              <div>
                <h2 className="section__title">The Roadmap to Failure</h2>
                <div className="muted">Got all that? Great. Let's begin.</div>
              </div>
            </div>

             <div className="markdown-content">
               <h3>Step 1: The Initial Heist</h3>
               <p>First, you'll need my <span className="text-purple-300">payload</span>. You can't just download it. You'll have to extract my <code className="kbd">PyInjector.dll</code> from the loader. Once you have it, you'll need to find the <span className="text-pink-300">encrypted Python script payload</span> within the binary. A little tip: it won't show up in a simple string search. Have fun with that.</p>

               <h3>Step 2: The Decryption Challenge</h3>
               <p>You've found the <span className="text-cyan-300">encrypted blob</span>? Cute. Now you just have to decrypt it. It's a fairly straightforward <span className="text-purple-300">multi-layered, key-derived, permutation-based encryption scheme</span>. I'm sure someone with your skills can figure out the correct order of operations to reverse it all.</p>

               <h3>Step 3: The Useless Victory</h3>
               <p>Congratulations! After all that work, you now have a <span className="text-pink-300">clean Python script</span> that will immediately crash. Why? Because it's trying to connect to a <span className="text-purple-300">custom C++ SDK</span> that you don't have. The script you just decrypted is the key to a car that doesn't exist yet.</p>
               <p>Time to build the car.</p>

               <h3>Step 4: The Great Reconstruction (The Fun Part)</h3>
               <p>This is where you'll spend the next few months. You need to build your own C++ SDK DLL from scratch that perfectly mimics mine.</p>
               <ol>
                 <li><strong>Get the Blueprints:</strong> You'll need to find the old, discontinued MarlBot <code className="kbd">rlsdk_python</code> to understand the basic logic.</li>
                 <li><strong>Generate the Parts:</strong> You'll need a C++ SDK for the current game version, likely from the CodeRed SDK Generator.</li>
                 <li><strong>Find the Offsets:</strong> To use the generator, you need the latest <code className="kbd">GNames</code> and <code className="kbd">GObjects</code> offsets. You can find these posted for free, every game update, in the #announcements channel on <strong>my Discord server</strong>. You're welcome.</li>
                 <li><strong>Assemble the Engine:</strong> Now, build your C++ DLL. A single mistake here means you'll be debugging corrupted data packets for weeks. Good luck.</li>
               </ol>
               <p><strong>A Pro-Tip For You:</strong> A generated SDK lets you use pointers directly to get data, like <code className="kbd">ball-&gt;Location</code>. Much easier than messing with offsets.</p>

               <h3>Step 5: The Foundational Hurdle</h3>
               <p>I almost forgot. Your C++ project needs to be a <code className="kbd">PyInjector</code> a DLL that can host an embedded Python interpreter and execute script code passed to it from memory. You'll need to build that part first. It's a simple prerequisite, really.</p>

               <h3>Step 6: The "Watermark" Problem</h3>
               <p>Let's assume you've done all of the above. But you were lazy and decided to just use my <span className="text-cyan-300">C++ SDK</span> instead of building your own. Bad move. Now you have to deal with my <span className="text-pink-300">watermark</span>.</p>
               <p>My SDK has a little surprise that tells your "customers" they've been scammed. A little hint: the <span className="text-purple-300">"you got scammed"</span> text isn't stored as a plain string in the <code className="kbd">.rdata</code> section. It's constructed at runtime from an <span className="text-cyan-300">encrypted byte array</span>.</p>
               <p>Think you can just find the <code className="kbd">MessageBoxW</code> call in IDA and patch it with <code className="kbd">NOP</code>s? Go ahead, try. <strong>You can't.</strong> To truly remove my message, you have to do it the hard way. You'll need to reverse-engineer my decryption routine, find the key, write your own message (maybe an empty one?), and then use <strong>my algorithm</strong> to create a brand new, valid encrypted byte array. Only then can you patch my original array in the binary. Good luck with that.</p>
             </div>
           </div>
         </section>

         <section id="help">
           <div className="wrap">
             <div className="section__head">
               <div>
                 <h2 className="section__title">A Little "Help" to Get You Started</h2>
                 <div className="muted">The Rabbit Hole</div>
               </div>
             </div>

             <div className="markdown-content">
               <p>I'm a nice guy. If you're struggling to build your own <span className="text-purple-300">C++ SDK</span>, you can check out this public <span className="text-cyan-300">RLSDK template</span> on UnknownCheats: <a href="https://www.unknowncheats.me/forum/other-fps-games/580873-rocket-league-mod-cheat-template.html" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 underline">https://www.unknowncheats.me/forum/other-fps-games/580873-rocket-league-mod-cheat-template.html</a>. It's a great starting point. <em>wink</em></p>
             </div>
           </div>
         </section>

         <section id="final">
           <div className="wrap">
             <div className="section__head">
               <h2 className="section__title">A Final Note</h2>
             </div>

             <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur p-8 shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)]">
               <div className="absolute top-4 right-4">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
                   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5"/>
                 </svg>
               </div>
               <div className="space-y-4 text-white/90">
                 <p>You might notice I don't use any <span className="text-red-300">anti-debug</span>, <span className="text-red-300">anti-dump</span>, or <span className="text-red-300">VM-protection</span>. I don't need to. My design is the defense.</p>
                 <p>If you somehow complete this entire roadmap, you'll have a resellable version of my free bot and will have proven yourself to be one of the most talented reverse engineers in this scene. At which point, you have to ask yourself: <strong>why would someone with your skills waste their time trying to make a few dollars getting blacklisted by the community, when you could have just built your own project from scratch?</strong></p>
               </div>
             </div>
           </div>
         </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center rounded-2xl">
              <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={60} height={60} className="opacity-80 rounded-2xl" />
            </div>
            <p className="text-white/60">© 2025 Vutrium. Educational and experimental use only.</p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto">
              Vutrium is a fan-made Rocket League tool. Not affiliated with Psyonix or Epic Games.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
