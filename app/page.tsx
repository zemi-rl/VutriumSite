"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Rocket, Eye, MessageSquare, Bot, Cpu, HardDrive, Monitor, AlertTriangle, Github, ExternalLink, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FlowAnimation from "@/components/flow-animation"
import { useState } from "react"

export default function VutriumPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen vutrium-theme">
      {/* Header adapted to the gpt5-high.html structure */}
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

      {/* Hero adapted to gpt5-high.html layout */}
      <section className="hero">
        <div className="heroGrid" aria-hidden="true"></div>
        <div className="wrap">
          <div>
            <div className="eyebrow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M3 16h10M7 8h10" stroke="currentColor" opacity="0.7" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Rocket League AI + SDK
            </div>
            <h1>
              Elevate your flow with
              {" "}
              <span className="grad">visuals, AI, and in‑process control.</span>
            </h1>
            <p className="sub">
              Vutrium blends a real‑time internal SDK with assistive overlays and bot integration. It can read game
              state and drive inputs through a DLL bridge — designed for experiments, training, and tooling.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" download>
                <Download className="h-4 w-4" />
                Download Vutrium.exe
              </a>
              <a className="btn" href={`${basePath}/#how`}>
                <Eye className="h-4 w-4" />
                Learn how it works
              </a>
            </div>
          </div>

          {/* Right panel aesthetic (uses your existing image content) */}
          <div className="panel grid place-items-center">
            <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={320} height={320} className="rounded-2xl drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 py-6">
        <Alert className="border-red-500/30 bg-red-900/20 text-red-200 max-w-4xl mx-auto">
          <AlertTriangle className="h-5 w-5 text-red-300" />
          <AlertDescription className="text-sm">
            Important: Educational and experimental use only. Usage online may result in a ban. Proceed at your own risk.
          </AlertDescription>
        </Alert>
      </section>

      {/* Quick links */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
            <CardContent className="p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">Developer resources</h3>
                <p className="text-white/60 text-sm">Explore an older version and a template for your own projects.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/tntgamer685347/TNTsTemplate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="mr-1 h-4 w-4" /> RLSDK Template <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                <a
                  href="https://github.com/tntgamer685347/VutriumBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="mr-1 h-4 w-4" /> Legacy Source <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Powerful features</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Enhance your gameplay with visuals, chat tools, and AI.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/[0.02] border-white/10 backdrop-blur hover:bg-white/[0.04] transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-7 w-7 text-purple-400" />
                <CardTitle className="text-xl text-white">Visuals</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-purple-300">Boost timers:</strong> See when pads reactivate in real-time</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-purple-300">Car ESP:</strong> Precise hitboxes for every player</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-purple-300">Controller overlay:</strong> Display bot and human inputs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.02] border-white/10 backdrop-blur hover:bg-white/[0.04] transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-7 w-7 text-pink-400" />
                <CardTitle className="text-xl text-white">Chat</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-pink-300">AI responder:</strong> Defend against bot accusations</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-pink-300">Toxicity guard:</strong> Auto responses to toxic behavior</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-pink-300">Human-like:</strong> Natural conversation patterns</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.02] border-white/10 backdrop-blur hover:bg-white/[0.04] transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bot className="h-7 w-7 text-cyan-400" />
                <CardTitle className="text-xl text-white">Bot</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-cyan-300">Nexto integration:</strong> Neural network processing</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-cyan-300">Auto queue:</strong> Automated matchmaking</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-cyan-300">Discord logs:</strong> Game stats via webhook</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p><strong className="text-cyan-300">Splitscreen:</strong> Multiple bots per instance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">How it works</h2>

          <div className="mb-8">
            <FlowAnimation />
          </div>

          <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
            <CardContent className="p-8">
              <p className="text-lg text-white/80 leading-relaxed">
                Vutrium operates by{" "}
                <span className="text-purple-400 font-semibold">injecting a DLL into Rocket League</span> to access and
                modify game memory in real-time, creating a bridge between the game and external AI systems. It captures
                game state (player positions, ball physics, boost pads) and feeds it to the{" "}
                <span className="text-cyan-400 font-semibold">Nexto bot</span>, which processes this data through a
                neural network to generate optimal control inputs. These inputs are then sent back to the game, enabling
                the bot to play with human-like precision while maintaining compatibility with the game's physics and
                mechanics.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Usage */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Usage</h2>
          <div className="space-y-6">
            <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Launch Vutrium</h3>
                    <p className="text-white/80">
                      Run <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">Vutrium.exe</code> - it will
                      automatically inject the custom Rocket League SDK and start the bot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Open Configuration</h3>
                    <p className="text-white/80">
                      Press <kbd className="bg-slate-800 px-3 py-1 rounded text-purple-300 font-mono">Insert</kbd> to
                      open the GUI/Menu inside Rocket League for configuration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Toggle Bot</h3>
                    <p className="text-white/80">
                      Bot toggle key is hardcoded to{" "}
                      <kbd className="bg-slate-800 px-3 py-1 rounded text-purple-300 font-mono">F1</kbd>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">System requirements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-purple-400" />
                  Dependencies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-white/80">
                  <div className="flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-purple-400" />
                    <span>Windows 10/11</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Rocket className="h-5 w-5 text-purple-400" />
                    <span>Rocket League on PC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-purple-400" />
                    <span>PC meeting minimum requirements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-purple-400 rounded-full" />
                    </div>
                    <span>Python 3.11 (may be needed)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/[0.02] border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-3">
                  <HardDrive className="h-6 w-6 text-cyan-400" />
                  Minimum Specs
                </CardTitle>
                <CardDescription className="text-yellow-300/90 font-medium">
                  ⚠️ These are for Vutrium only, not Rocket League
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span className="text-cyan-300">CPU:</span>
                    <span>Dual-core 2.0 GHz+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">RAM:</span>
                    <span>4GB system memory</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">OS:</span>
                    <span>Windows 10/11 64-bit</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">Storage:</span>
                    <span>1GB free space</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-300">GPU:</span>
                    <span>Integrated graphics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Download Vutrium and experience the next level of Rocket League gameplay assistance.
          </p>
          <a 
            href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" 
            download
            className="btn btn--primary inline-flex items-center gap-3 px-12 py-4 text-xl font-semibold"
          >
            <Download className="h-6 w-6" />
            Download Vutrium.exe
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={60} height={60} className="rounded-2xl opacity-80" />
            </div>
            <p className="text-white/60">© 2025 Vutrium. Educational and experimental use only.</p>
            <p className="text-sm text-white/40 max-w-2xl mx-auto">
              The developers are not responsible for any account bans or disciplinary actions taken by Psyonix or Epic
              Games. Use at your own risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
