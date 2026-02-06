import { MainLayout } from "@/components/layout/MainLayout";
import { MathBlock, Variable, Formula } from "@/components/MathBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const LightSpeed = () => {
  return (
    <MainLayout>
      <div className="stars-bg">
        {/* Hero */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">💫</span>
              <div>
                <p className="text-primary font-mono text-sm tracking-wider">PILLAR TWO</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Light Speed Boundary
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              How the mathematical limit of c emerges from Z→X acceleration mappings 
              and why higher spaces require non-linear factors.
            </p>
          </div>
        </section>

        {/* Two-liner Summary */}
        <section className="py-8 px-6 bg-primary/5 border-y border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              💫 <span className="text-primary">Z→X acceleration</span> creates natural boundaries
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              🚀 Higher spaces demand factors larger than the linear c — exponential territories await
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="📖"
              title="Introduction"
              subtitle="Understanding why light speed is a natural mathematical boundary"
            />

            <div className="prose-like space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In special relativity, nothing can exceed the speed of light. This isn't arbitrary — 
                it emerges from the fundamental structure of spacetime. In the Exponometer framework, 
                we see this boundary appear naturally in the <Variable type="z">Z</Variable>→<Variable type="x">X</Variable> 
                projection mapping.
              </p>
              
              <p>
                Both <Variable type="z">Z</Variable> and <Variable type="x">X</Variable> are 
                <strong className="text-foreground"> bounded spaces with equal density</strong>. 
                The acceleration from Z to X reaches a natural limit — the speed of light — 
                which emerges mathematically from this accelerative system.
              </p>
            </div>
          </div>
        </section>

        {/* Mathematical Structure */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🔢"
              title="The Bounded Spaces"
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <MathBlock title="Z Space (Projection)">
                <div className="space-y-4">
                  <div className="text-4xl text-center text-math-z animate-pulse-glow">Z</div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Bounded acceleration space</li>
                    <li>• Equal density to X</li>
                    <li>• Imaginary component</li>
                    <li>• Source of projection</li>
                  </ul>
                </div>
              </MathBlock>

              <MathBlock title="X Space (Position)">
                <div className="space-y-4">
                  <div className="text-4xl text-center text-math-x animate-pulse-glow">X</div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Bounded position space</li>
                    <li>• Space bubble boundary appears</li>
                    <li>• Real component</li>
                    <li>• Target of projection</li>
                  </ul>
                </div>
              </MathBlock>
            </div>

            <MathBlock title="Z→X Acceleration Mapping" className="max-w-2xl mx-auto">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-math-z font-mono">Z</span>
                  <div className="flex flex-col items-center">
                    <span className="text-primary text-lg">acceleration</span>
                    <span className="text-2xl">→</span>
                  </div>
                  <span className="text-3xl text-math-x font-mono">X</span>
                </div>
                
                <p className="text-muted-foreground">
                  This mapping is bounded by <span className="text-primary font-mono">c</span> — 
                  the natural limit of projection velocity between these relativistically linear spaces.
                </p>

                <div className="font-mono text-lg py-4 border-t border-b border-border/50">
                  <span className="text-muted-foreground">velocity</span> ≤ <span className="text-primary">c</span>
                </div>
              </div>
            </MathBlock>
          </div>
        </section>

        {/* Higher Spaces */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🌌"
              title="Higher Spaces and Beyond c"
            />

            <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>🔮</span> The Hilbert Barrier
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Higher space exists where, by Hilbert's principles, Z and X <em>cannot be projected</em>. 
                Acceleration factors themselves cannot break out of this subspace. In these higher dimensions, 
                one would be interested in numbers <strong className="text-foreground">larger than the linear factor of c</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl mb-2">📏</div>
                <h4 className="font-medium text-foreground mb-1">Linear c</h4>
                <p className="text-xs text-muted-foreground">Standard light speed in 3+1 spacetime</p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-medium text-foreground mb-1">Exponential c</h4>
                <p className="text-xs text-muted-foreground">Higher space boundaries require c^n</p>
              </div>
              
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl mb-2">♾️</div>
                <h4 className="font-medium text-foreground mb-1">Infinite Limits</h4>
                <p className="text-xs text-muted-foreground">Unprojectable Hilbert regions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Theory */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🔬"
              title="Theoretical Framework"
            />

            <div className="space-y-8 text-sm text-muted-foreground">
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Relativistic Linearity
                </h3>
                <p className="leading-relaxed">
                  Z and X are <em>relativistically linear</em>, meaning they can map each other. 
                  This mutual mapability creates a consistent framework where the boundary c appears 
                  as a natural constant — not imposed, but emergent from the space structure itself.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  The Equal Density Principle
                </h3>
                <p className="leading-relaxed mb-4">
                  Both Z (acceleration/projection) and X (position/now) have equal density. This symmetry is crucial:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Equal density ensures consistent mapping</li>
                  <li>No information loss in Z→X projection</li>
                  <li>Boundary c emerges from density balance</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Higher Spaces Need Larger Factors
                </h3>
                <p className="leading-relaxed">
                  When working in dimensions beyond our standard 3+1 spacetime, the projection 
                  boundaries scale non-linearly. Higher dimensional mappings require exponential 
                  factors of c, creating territories that are fundamentally inaccessible from 
                  our linear perspective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Representation */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="📊"
              title="Boundary Visualization"
            />

            <MathBlock className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="text-center text-muted-foreground text-sm mb-4">
                  Velocity approaching light speed limit
                </div>
                
                {/* Simple visual bar representation */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-xs text-muted-foreground text-right">0.1c</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[10%] bg-primary/50 rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-xs text-muted-foreground text-right">0.5c</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[50%] bg-primary/70 rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-xs text-muted-foreground text-right">0.9c</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-primary rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-xs text-secondary font-medium text-right">c</span>
                    <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden relative">
                      <div className="h-full w-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-6 bg-secondary rounded-full shadow-glow" />
                    </div>
                  </div>
                </div>

                <div className="text-center text-xs text-muted-foreground pt-4 border-t border-border/50">
                  Energy required approaches infinity as velocity → c
                </div>
              </div>
            </MathBlock>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/energy-mass" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>E = mc²</span>
            </Link>
            <Link to="/space-bubble" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span>Space Bubble Boundary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default LightSpeed;
