import { MainLayout } from "@/components/layout/MainLayout";
import { MathBlock, Variable, Formula } from "@/components/MathBlock";
import { TheoryCard } from "@/components/TheoryCard";
import { ResourceLink } from "@/components/ResourceLink";
import { SectionHeader } from "@/components/SectionHeader";
import { ArrowRight, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <MainLayout>
      <div className="stars-bg">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Main heading */}
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm mb-4 tracking-wider">
                ⚛️ COMPLEX RELATIVITY THEORY
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                The <span className="text-primary glow-text">Exponometer</span> Framework
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Understanding how <span className="text-secondary">E = mc²</span> emerges from 
                first and second order backgradients in projection space, where acceleration 
                meets relativity.
              </p>
            </div>

            {/* Quick access to Prezi */}
            <div className="flex justify-center mb-16">
              <a
                href="https://prezi.com/view/3CvBfjlKweyefV3sl1Iy/?referral_token=G4RyDElnB3FN"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/10 border border-secondary/30 hover:bg-secondary/20 transition-all"
              >
                <span className="text-2xl">🎯</span>
                <span className="text-secondary font-medium">View Prezi Presentation</span>
                <ExternalLink className="w-4 h-4 text-secondary/60 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Cheat Sheet - Core Concepts */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon="📋"
              title="Quick Reference: The Layer Logic"
              subtitle="Understanding Z, X, Y and the complex number derivation"
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Complex Number 1 */}
              <MathBlock title="Complex Integral 1: Z → X Projection">
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    Two vectors form a complex number:
                  </p>
                  <div className="text-xl font-mono">
                    <Variable type="z">Z</Variable> = imaginary part (projection space)
                  </div>
                  <div className="text-xl font-mono">
                    <Variable type="x">X</Variable> = real part (now, projective)
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">Octave calculation:</p>
                    <Formula highlight>
                      octave = log₂(<Variable type="x">X</Variable> / <Variable type="z">Z</Variable>)
                    </Formula>
                  </div>
                </div>
              </MathBlock>

              {/* Octave Examples */}
              <MathBlock title="Octave Encoding: Linearity Factors">
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                    <span><Variable type="z">Z</Variable>=0, <Variable type="x">X</Variable>=2</span>
                    <span className="text-muted-foreground">→ constant, octave 0</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-muted/30">
                    <span><Variable type="z">Z</Variable>=2, <Variable type="x">X</Variable>=√2</span>
                    <span className="text-muted-foreground">→ logarithmic, octave ½</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-primary/10">
                    <span><Variable type="z">Z</Variable>=2, <Variable type="x">X</Variable>=2</span>
                    <span className="text-primary">→ linear, octave 1</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-secondary/10">
                    <span><Variable type="z">Z</Variable>=2, <Variable type="x">X</Variable>=4</span>
                    <span className="text-secondary">→ exponential, octave 2</span>
                  </div>
                </div>
              </MathBlock>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Remapping */}
              <MathBlock title="Remapping: ZX → XY">
                <div className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Second complex from first:
                  </p>
                  <div className="font-mono text-lg space-y-2">
                    <div>cx₂.<Variable type="z">z</Variable> = cx₁.<Variable type="x">x</Variable></div>
                    <div>cx₂.<Variable type="octave">octave</Variable> = cx₁.<Variable type="octave">octave</Variable></div>
                    <div>W&B of <Variable type="y">Y</Variable> ← W&B of <Variable type="z">Z</Variable></div>
                  </div>
                </div>
              </MathBlock>

              {/* Backgradient */}
              <MathBlock title="Backgradient Orders">
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-math-x/10 border border-math-x/30">
                    <p className="text-sm font-medium text-foreground mb-1">First Order (X)</p>
                    <p className="text-xs text-muted-foreground">Classic directional hinting for position layer</p>
                  </div>
                  <div className="p-3 rounded-lg bg-math-z/10 border border-math-z/30">
                    <p className="text-sm font-medium text-foreground mb-1">Second Order (Z)</p>
                    <p className="text-xs text-muted-foreground">
                      Differentials × 2 — the <span className="text-secondary">E=mc²</span> of this calculation
                    </p>
                  </div>
                </div>
              </MathBlock>
            </div>
          </div>
        </section>

        {/* The Three Pillars */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon="🌌"
              title="The Three Pillars"
              subtitle="Core theoretical components connecting complex numbers to relativistic boundaries"
              align="center"
            />

            <div className="grid md:grid-cols-3 gap-6">
              <TheoryCard
                icon="⚡"
                title="E = mc²"
                subtitle="Energy-Mass Equivalence"
                description="How first and second order backgradients create square density relationships between time and space dimensions."
                to="/energy-mass"
                gradient="secondary"
              />

              <TheoryCard
                icon="💫"
                title="Light Speed Boundary"
                subtitle="Linear Acceleration Limit"
                description="The mathematical emergence of c as a boundary in Z→X acceleration mappings in higher dimensional spaces."
                to="/light-speed"
                gradient="primary"
              />

              <TheoryCard
                icon="🔮"
                title="Space Bubble Boundary"
                subtitle="Position Entanglement"
                description="How local and global infinity become entangled through quantitative math and symmetry measurements."
                to="/space-bubble"
                gradient="accent"
              />
            </div>
          </div>
        </section>

        {/* Layer Structure */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon="🧬"
              title="Three-Layer Processing"
              subtitle="How one perceptron layer becomes three sublayers in the Exponometer framework"
            />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-math-z/5 border border-math-z/30">
                <div className="text-3xl mb-3">📐</div>
                <h3 className="font-semibold text-math-z text-lg mb-2">Z — Space</h3>
                <p className="text-sm text-muted-foreground">
                  The projection layer. Imaginary component encoding acceleration and dimensional depth.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground">
                  W&B → Second order backgradient
                </div>
              </div>

              <div className="p-6 rounded-xl bg-math-x/5 border border-math-x/30">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-math-x text-lg mb-2">X — Now</h3>
                <p className="text-sm text-muted-foreground">
                  The projective layer. Real component representing current position and value.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground">
                  W&B → First order backgradient
                </div>
              </div>

              <div className="p-6 rounded-xl bg-math-y/5 border border-math-y/30">
                <div className="text-3xl mb-3">⏳</div>
                <h3 className="font-semibold text-math-y text-lg mb-2">Y — Time</h3>
                <p className="text-sm text-muted-foreground">
                  The activation layer. Output flowing to the next layer's input, encoding temporal accumulation.
                </p>
                <div className="mt-4 pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground">
                  Output → Next layer's input
                </div>
              </div>
            </div>

            <MathBlock title="The E=mc² Connection" className="max-w-3xl mx-auto">
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  We use <Variable type="x">X</Variable> in normal power as value, 
                  but <Variable type="z">Z</Variable> in square power as dimension.
                </p>
                <div className="text-2xl font-mono py-4">
                  <span className="text-secondary">E</span> = <span className="text-foreground">m</span> · <span className="text-primary">c²</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Square refers to exponent → homogeneous growth and dimensional growth.
                  Time has square density to space.
                </p>
              </div>
            </MathBlock>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              icon="📚"
              title="Source Materials"
              subtitle="Explore the full theoretical framework and implementations"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <ResourceLink
                href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/LabDepth.ai/ComplexRelativity.ai"
                title="Complex Relativity Theory"
                description="Main theoretical text and derivations"
                type="github"
              />
              <ResourceLink
                href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/LabDepth.ai/Exponometer.py"
                title="Exponometer Implementation"
                description="Core algorithm and SNIP reconstruction"
                type="github"
              />
              <ResourceLink
                href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/NewIdeas/SpeedupSlowdown"
                title="Speedup/Slowdown Dynamics"
                description="Molecule-field cognition diagrams"
                type="github"
              />
              <ResourceLink
                href="https://github.com/tambetvali/LaegnaAIBasics/tree/main/NewIdeas/SpeedupSlowdownEncoding.pro"
                title="Social Encoding"
                description="Grassroots vs hierarchical encoding"
                type="github"
              />
              <ResourceLink
                href="https://exponential-whispers.lovable.app/"
                title="Exponential Whispers"
                description="TOC page for the three core concepts"
                type="external"
              />
              <ResourceLink
                href="https://prezi.com/view/3CvBfjlKweyefV3sl1Iy/?referral_token=G4RyDElnB3FN"
                title="Prezi Presentation"
                description="Visual overview of the theory"
                type="prezi"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              Part of the <span className="text-primary">Laegna AI</span> research project
            </p>
            <div className="flex justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <a href="https://github.com/tambetvali/LaegnaAIBasics" target="_blank" className="hover:text-primary transition-colors">
                AI Basics
              </a>
              <span>•</span>
              <a href="https://github.com/tambetvali/LaegnaPracticalAI" target="_blank" className="hover:text-primary transition-colors">
                Practical AI
              </a>
              <span>•</span>
              <a href="https://github.com/tambetvali/LaegnaAITraining" target="_blank" className="hover:text-primary transition-colors">
                Training
              </a>
              <span>•</span>
              <a href="https://github.com/tambetvali/LaegnaAIExperiments" target="_blank" className="hover:text-primary transition-colors">
                Experiments
              </a>
            </div>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
};

export default Index;
