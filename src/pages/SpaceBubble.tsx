import { MainLayout } from "@/components/layout/MainLayout";
import { MathBlock, Variable, Formula } from "@/components/MathBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SpaceBubble = () => {
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
              <span className="text-5xl">🔮</span>
              <div>
                <p className="text-accent font-mono text-sm tracking-wider">PILLAR THREE</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Space Bubble Boundary
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Exploring the mathematical entanglement of local and global infinity, and why 
              quantitative math cannot escape the space bubble.
            </p>
          </div>
        </section>

        {/* Two-liner Summary */}
        <section className="py-8 px-6 bg-accent/5 border-y border-accent/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              🔮 <span className="text-accent">Outside space exists</span> but remains unreachable
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              ∞ Local and global infinity are <em>entangled</em> — quantitative math stays inside the bubble
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="📖"
              title="Introduction"
              subtitle="The position layer (X) reveals spatial boundaries"
            />

            <div className="prose-like space-y-6 text-muted-foreground leading-relaxed">
              <p>
                While <Variable type="z">Z</Variable>→<Variable type="x">X</Variable> acceleration 
                is bounded by light speed, the position layer <Variable type="x">X</Variable> itself 
                reveals another boundary: the <strong className="text-foreground">space bubble</strong>.
              </p>
              
              <p>
                Outside space mathematically interacts with our observable universe, but the form of 
                numbers involved are <em>entangled</em> to provide local and global infinity. Even if 
                we change number types and try other approaches, <span className="text-accent">quantitative math 
                cannot escape</span> — only qualitative symmetry measurements can reach beyond.
              </p>
            </div>
          </div>
        </section>

        {/* The Entanglement */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🔗"
              title="Infinity Entanglement"
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <MathBlock title="Local Infinity">
                <div className="space-y-4 text-center">
                  <div className="text-4xl text-accent animate-pulse-glow">∞ₗ</div>
                  <p className="text-sm text-muted-foreground">
                    Infinity as experienced from within a reference frame. 
                    The boundary of what can be reached by continuous extension.
                  </p>
                  <div className="font-mono text-xs text-muted-foreground">
                    lim(n→∞) within space
                  </div>
                </div>
              </MathBlock>

              <MathBlock title="Global Infinity">
                <div className="space-y-4 text-center">
                  <div className="text-4xl text-accent animate-pulse-glow">∞ᵍ</div>
                  <p className="text-sm text-muted-foreground">
                    Infinity as the totality of all possible reference frames. 
                    The container that holds all local infinities.
                  </p>
                  <div className="font-mono text-xs text-muted-foreground">
                    ∪{"{"} all local ∞ {"}"}
                  </div>
                </div>
              </MathBlock>
            </div>

            <MathBlock title="The Entanglement Principle" className="max-w-2xl mx-auto">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-6">
                  <span className="text-2xl text-accent font-mono">∞ₗ</span>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">entangled</span>
                    <span className="text-2xl text-accent">⟷</span>
                  </div>
                  <span className="text-2xl text-accent font-mono">∞ᵍ</span>
                </div>
                
                <p className="text-muted-foreground">
                  These two infinities cannot be separated. Attempting to reach global infinity 
                  from local infinity creates a recursive loop — the space bubble boundary.
                </p>

                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="text-sm text-foreground">
                    💡 This is why we can <em>prove</em> outside space exists, but cannot <em>reach</em> it with quantities.
                  </p>
                </div>
              </div>
            </MathBlock>
          </div>
        </section>

        {/* Mathematical Proof */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="📐"
              title="Mathematical Interaction with Outside Space"
            />

            <div className="space-y-6">
              <MathBlock title="The Quantitative Trap">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Consider any attempt to extend beyond the space bubble using numbers:
                  </p>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">1.</span>
                      <span>Choose number type <Variable type="x">T</Variable></span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">2.</span>
                      <span>Extend toward infinity: <Variable type="x">T</Variable> → ∞</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">3.</span>
                      <span>Hit local infinity: ∞ₗ ∈ space bubble</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">4.</span>
                      <span className="text-accent">Cannot escape: ∞ₗ ⟷ ∞ᵍ entangled</span>
                    </div>
                  </div>
                </div>
              </MathBlock>

              <MathBlock title="The Qualitative Escape">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Qualitative measurement can access what quantitative cannot:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-medium text-foreground mb-2">Symmetry</h4>
                      <p className="text-xs text-muted-foreground">Pattern relations that transcend magnitude</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-medium text-foreground mb-2">Topology</h4>
                      <p className="text-xs text-muted-foreground">Shape properties independent of scale</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-medium text-foreground mb-2">Structure</h4>
                      <p className="text-xs text-muted-foreground">Relational organization beyond quantity</p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/30">
                      <h4 className="font-medium text-foreground mb-2">Invariants</h4>
                      <p className="text-xs text-muted-foreground">Properties preserved under transformation</p>
                    </div>
                  </div>
                </div>
              </MathBlock>
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
                  Proving Outside Space Exists
                </h3>
                <p className="leading-relaxed">
                  The mathematical structure of general relativity implies curvature requires 
                  an embedding space. Our 3+1 dimensional spacetime curves <em>into</em> something. 
                  The equations work; the destination is proven; but the path is forever blocked 
                  by the entanglement of infinities.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Number Types Don't Help
                </h3>
                <p className="leading-relaxed mb-4">
                  One might try:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Transfinite numbers (still bounded by local infinity)</li>
                  <li>Hyperreal numbers (infinitesimals stay inside)</li>
                  <li>Surreal numbers (complete but still quantitative)</li>
                  <li>p-adic numbers (different topology, same trap)</li>
                </ul>
                <p className="leading-relaxed">
                  All quantitative extensions hit the same wall: the entanglement of local 
                  and global infinity is a structural feature, not a numerical limitation.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-accent/30 bg-accent/5">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span>🔑</span> The Qualitative Key
                </h3>
                <p className="leading-relaxed">
                  With <strong className="text-foreground">qualitative measurement</strong>, 
                  we measure many symmetries. Symmetry properties don't require infinite extension — 
                  they can be observed in finite structures and relate to the global without 
                  traversing the quantitative path. This is how theoretical physics touches 
                  the unreachable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Representation */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🎨"
              title="The Space Bubble"
            />

            <MathBlock className="max-w-2xl mx-auto">
              <div className="relative h-64 flex items-center justify-center">
                {/* Outer space */}
                <div className="absolute inset-0 rounded-xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
                  <span className="absolute top-2 left-2 text-xs text-muted-foreground">Outside Space (proven to exist)</span>
                </div>
                
                {/* Space bubble */}
                <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-2 border-accent/50 flex items-center justify-center shadow-glow">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌌</div>
                    <p className="text-sm font-medium text-foreground">Observable Universe</p>
                    <p className="text-xs text-muted-foreground">Our Space Bubble</p>
                  </div>
                  
                  {/* Infinity entanglement indicators */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-accent">∞ₗ ⟷ ∞ᵍ</div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-accent">entangled</div>
                  <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-xs text-muted-foreground rotate-90">barrier</div>
                  <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-xs text-muted-foreground -rotate-90">barrier</div>
                </div>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                Quantitative math stays inside. Qualitative symmetries can observe beyond.
              </p>
            </MathBlock>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/light-speed" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Light Speed Boundary</span>
            </Link>
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default SpaceBubble;
