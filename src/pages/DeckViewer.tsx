import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const deckData: Record<string, { title: string; pdfUrl: string | null }> = {
  "retention-issues-in-microdramas": {
    title: "ShareChat / Moj Series : Retention issues in Microdramas",
    pdfUrl: "https://drive.google.com/file/d/1WSU3gm4XNq3DGUkwn8Qr_KtCbrCzmfHN/view?usp=sharing",
  },
  "2036-olympics-in-ahmedabad": {
    title: "2036 Olympics in Ahmedabad: The Right Choice? ",
    pdfUrl: "https://drive.google.com/file/d/1pU2HVZBTEPiY-FCM7tS6fpo3g5nDlg_C/view?usp=sharing",
  },
  "east-africa-financial-inclusion-gap": {
    title: "East Africa's Financial Inclusion Gap",
    pdfUrl: "https://drive.google.com/file/d/1Ya8U3uQXMJJM9Z_4dp6XVX5p_F3dHuJZ/view?usp=sharing",
  },
  "delhivery-ai-operational-core": {
    title: "Delhivery : AI based Operational Core to Improve On-Time Deliveries",
    pdfUrl: "https://drive.google.com/file/d/1gzLpRf-ZhEm_2UF03Dfh0LMEgY1LixoF/view?usp=sharing",
  },
};

const DeckViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const deck = slug ? deckData[slug] : null;

  if (!deck) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Deck not found</h1>
          <Link to="/" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 py-6 border-b border-border"
        >
          <div>
            <Link
              to="/#work"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </Link>
            <h1 className="text-lg font-semibold text-foreground mt-2">
              {deck.title}
            </h1>
          </div>
        </motion.header>

        {/* PDF Viewer Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto px-6 py-12"
        >
          {deck.pdfUrl ? (
            <div className="w-full rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                src={deck.pdfUrl}
                className="w-full"
                style={{ height: "calc(100vh - 200px)", minHeight: "600px" }}
                title={`${deck.title} Deck`}
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Deck coming soon
              </p>
              <p className="text-sm text-muted-foreground max-w-sm">
                The presentation deck for this project is being prepared and will be available here shortly.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DeckViewer;
