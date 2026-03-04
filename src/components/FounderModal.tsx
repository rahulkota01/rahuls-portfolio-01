import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ExternalLink, Sparkles, Target, Brain, Database, Stethoscope, FlaskConical } from "lucide-react";

interface FounderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FounderModal = ({ open, onOpenChange }: FounderModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-500" />
            Founder & CEO — RO Ecosystem
          </DialogTitle>
          <DialogDescription className="text-base">
            Independent deep-tech and biomedical AI initiative
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Vision Statement */}
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
            <p className="text-sm text-foreground/80 leading-relaxed">
              RO Ecosystem is an independent deep-tech and biomedical AI initiative focused on building 
              domain-specialized intelligent systems for healthcare, research, and scientific reasoning.
            </p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Founded with the vision of integrating clinical knowledge, computational intelligence, 
            and research-driven architecture, RO Ecosystem develops scalable AI platforms tailored 
            for medicine and biomedical sciences.
          </p>

          {/* Flagship Initiatives */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" />
              Flagship Initiatives
            </h4>
            <div className="grid gap-3">
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <h5 className="font-medium text-sm text-foreground">MedNeXuS AI</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  An AI-powered biomedical research and clinical knowledge exploration platform designed 
                  to simplify research papers, enhance medical learning, and enable intelligent synthesis 
                  of scientific literature.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <h5 className="font-medium text-sm text-foreground">RO Nexus</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  A biology-focused domain-specialized AI system built using retrieval-augmented generation 
                  (RAG) architecture, optimized for research-grade reasoning and biomedical knowledge processing.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <h5 className="font-medium text-sm text-foreground">RO-Link</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  A structured research collaboration and governance workspace designed for controlled 
                  knowledge exchange, role-based access systems, and research coordination.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <h5 className="font-medium text-sm text-foreground">The RO Virtual Research Lab</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  A computational formulation and research simulation platform designed to integrate 
                  pharmaceutical logic with AI-assisted reasoning.
                </p>
              </div>
            </div>
          </div>

          {/* Core Focus Areas */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Brain className="w-4 h-4 text-blue-500" />
              Core Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Brain, label: "AI in Healthcare" },
                { icon: Database, label: "Biomedical Knowledge Systems" },
                { icon: FlaskConical, label: "Research Automation" },
                { icon: Stethoscope, label: "Clinical Decision Support" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-foreground"
                >
                  <Icon className="w-3 h-3 text-blue-500" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">
              Check the startup I'm building if you are interested...
            </p>
            <a
              href="https://www.roecosystem.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
            >
              Visit RO Ecosystem
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FounderModal;
