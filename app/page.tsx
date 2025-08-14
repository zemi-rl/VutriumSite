import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Rocket, Eye, MessageSquare, Bot, Cpu, HardDrive, Monitor, AlertTriangle, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FlowAnimation from "@/components/flow-animation"

export default function VutriumPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={28} height={28} className="rounded-sm" />
            <span className="text-sm font-semibold tracking-wider text-white/90">VUTRIUM</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
            <a href="https://github.com/tntgamer685347/TNTsTemplate" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Template</a>
            <a href="https://github.com/tntgamer685347/VutriumBot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Legacy</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
              <a href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" download>
                <Download className="mr-2 h-4 w-4" /> Download
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <Badge className="bg-purple-500/15 text-purple-200 border-purple-500/30">Beta in Development</Badge>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                Rocket League Aid, reimagined
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0">
                Advanced visuals, smart chat tools, and AI assistance built for a seamless, human-like experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                  <a href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" download>
                    <Download className="mr-2 h-5 w-5" /> Download Vutrium.exe
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10" asChild>
                  <a href="https://github.com/tntgamer685347/TNTsTemplate" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" /> RLSDK Template
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]">
                <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={220} height={220} className="drop-shadow-2xl" />
              </div>
            </div>
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">How it works</h2>

          <Card className="bg-white/[0.02] border-white/10 backdrop-blur mb-8">
            <CardContent className="p-8">
              <FlowAnimation />
            </CardContent>
          </Card>

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
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" download>
              <Download className="mr-3 h-6 w-6" />
              Download Vutrium.exe
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Image src={`${basePath}/vutrium-logo.png`} alt="Vutrium Logo" width={60} height={60} className="opacity-80" />
            </div>
            <p className="text-white/60">© 2024 Vutrium. Educational and experimental use only.</p>
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
