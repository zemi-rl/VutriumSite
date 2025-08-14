import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Download,
  Rocket,
  Eye,
  MessageSquare,
  Bot,
  Cpu,
  HardDrive,
  Monitor,
  AlertTriangle,
  Github,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import FlowAnimation from "@/components/flow-animation"

export default function VutriumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center space-y-8">
            <div className="flex justify-center mb-8">
              <Image src="/vutrium-logo.png" alt="Vutrium Logo" width={200} height={200} className="drop-shadow-2xl" />
            </div>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-1">
              Beta in Development
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              VUTRIUM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate <span className="text-purple-400 font-semibold">Rocket League Aid</span> tool with advanced
              AI integration, visual enhancements, and automated gameplay assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/tntgamer685347/VutriumBot/releases/download/Current/vutrium.exe" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Vutrium.exe
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Alert */}
      <section className="container mx-auto px-4 py-8">
        <Alert className="border-red-500/50 bg-red-950/50 text-red-200 max-w-4xl mx-auto">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <AlertDescription className="text-base">
            <strong>Important Disclaimer:</strong> Vutrium is intended for educational and experimental purposes only.
            Using this tool in online or ranked matches may result in a ban. Use at your own risk.
          </AlertDescription>
        </Alert>
      </section>

      {/* Open Source Info */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Open Source Resources</h3>
                  <p className="text-gray-300 mb-4">
                    While the current version of Vutrium is not open source, we provide resources for developers:
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• An older version is available in the tntgamer vutriumbot repository</p>
                    <p>• RLSDK template for creating your own Rocket League projects</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/tntgamer685347/TNTsTemplate" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      RLSDK Template
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced tools to enhance your Rocket League experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Visuals Card */}
          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-purple-400" />
                <CardTitle className="text-2xl text-white">Visuals</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-purple-300">Boost Pad Timers:</strong> Real-time countdown showing when
                    boost pads reactivate
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-purple-300">Car ESP:</strong> Accurate hitboxes drawn around every player
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-purple-300">Controller Overlay:</strong> Display bot and human inputs
                    simultaneously
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Card */}
          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-pink-400" />
                <CardTitle className="text-2xl text-white">Chat</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-pink-300">AI Auto Responder:</strong> Intelligent chat defense against bot
                    accusations
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-pink-300">Toxicity Protection:</strong> Automated responses to toxic
                    opponents and teammates
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-pink-300">Human-like Behavior:</strong> Maintains natural conversation
                    patterns
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bot Card */}
          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <CardTitle className="text-2xl text-white">Bot</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-cyan-300">Nexto Integration:</strong> Advanced AI bot with neural network
                    processing
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-cyan-300">Auto Queue:</strong> Automated matchmaking for AFK gameplay
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-cyan-300">Discord Logging:</strong> Game statistics sent to Discord webhook
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <p>
                    <strong className="text-cyan-300">Splitscreen Support:</strong> Multiple bots in single game
                    instance
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">How It Works</h2>

          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <FlowAnimation />
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed">
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

      {/* Usage Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">Usage Instructions</h2>
          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Launch Vutrium</h3>
                    <p className="text-gray-300">
                      Run <code className="bg-slate-800 px-2 py-1 rounded text-purple-300">Vutrium.exe</code> - it will
                      automatically inject the custom Rocket League SDK and start the bot.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Open Configuration</h3>
                    <p className="text-gray-300">
                      Press <kbd className="bg-slate-800 px-3 py-1 rounded text-purple-300 font-mono">Insert</kbd> to
                      open the GUI/Menu inside Rocket League for configuration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Toggle Bot</h3>
                    <p className="text-gray-300">
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

      {/* Requirements Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">System Requirements</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dependencies */}
            <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-purple-400" />
                  Dependencies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-300">
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

            {/* Minimum Requirements */}
            <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-3">
                  <HardDrive className="h-6 w-6 text-cyan-400" />
                  Minimum Specs
                </CardTitle>
                <CardDescription className="text-yellow-400 font-medium">
                  ⚠️ These are for Vutrium only, not Rocket League
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-gray-300">
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

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Download Vutrium and experience the next level of Rocket League gameplay assistance.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
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
      <footer className="border-t border-purple-500/30 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Image src="/vutrium-logo.png" alt="Vutrium Logo" width={60} height={60} className="opacity-80" />
            </div>
            <p className="text-gray-400">© 2024 Vutrium. Educational and experimental use only.</p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              The developers are not responsible for any account bans or disciplinary actions taken by Psyonix or Epic
              Games. Use at your own risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
