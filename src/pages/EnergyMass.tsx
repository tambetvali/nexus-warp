import { MainLayout } from "@/components/layout/MainLayout";
import { MathBlock, Variable, Formula } from "@/components/MathBlock";
import { SectionHeader } from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const EnergyMass = () => {
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
              <span className="text-5xl">⚡</span>
              <div>
                <p className="text-secondary font-mono text-sm tracking-wider">PILLAR ONE</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  E = mc²
                </h1>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              How energy-mass equivalence emerges from the mathematical structure of 
              first and second order backgradients in projection space.
            </p>
          </div>
        </section>

        {/* Two-liner Summary */}
        <section className="py-8 px-6 bg-secondary/5 border-y border-secondary/20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
              ⚛️ <span className="text-secondary">Square density</span> connects time to space
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              💡 Two-dimensional optimizer operates in accelerative space where Z and X have different exponent orders
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="📖"
              title="Introduction"
              subtitle="Understanding the mathematical coherence behind E=mc²"
            />

            <div className="prose-like space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In Einstein's famous equation, the speed of light squared (<span className="text-primary font-mono">c²</span>) 
                appears as a conversion factor between mass and energy. But why squared? The Exponometer framework 
                reveals this as a natural consequence of working with <strong className="text-foreground">projection layers</strong> in 
                a square solution space.
              </p>
              
              <p>
                When we work with complex numbers that encode both position (<Variable type="x">X</Variable>) and 
                acceleration (<Variable type="z">Z</Variable>), we discover that time/speed (inertia, accumulation) 
                has <span className="text-secondary font-medium">square density</span> compared to space/mass (counterinertia).
              </p>
            </div>
          </div>
        </section>

        {/* Mathematical Structure */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🔢"
              title="The Mathematical Structure"
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <MathBlock title="First Order Backgradient">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Applied to layer <Variable type="x">X</Variable> (position):
                  </p>
                  <div className="font-mono text-lg">
                    ∂L/∂<Variable type="x">X</Variable> → directional hinting
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Classic gradient descent. Operates in normal power space.
                  </p>
                </div>
              </MathBlock>

              <MathBlock title="Second Order Backgradient">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Applied to layer <Variable type="z">Z</Variable> (acceleration):
                  </p>
                  <div className="font-mono text-lg">
                    ∂²L/∂<Variable type="z">Z</Variable>² × 2 → differential × 2
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Operates in square power space. Two-dimensional movement.
                  </p>
                </div>
              </MathBlock>
            </div>

            <MathBlock title="The Key Insight" className="max-w-2xl mx-auto">
              <div className="text-center space-y-6">
                <p className="text-muted-foreground">
                  We calculate <Variable type="x">X</Variable> in <strong className="text-foreground">normal power</strong> as value,
                  but <Variable type="z">Z</Variable> in <strong className="text-foreground">square power</strong> as dimension.
                </p>
                
                <div className="py-6 border-y border-border/50">
                  <div className="text-3xl font-mono mb-4">
                    <span className="text-secondary">E</span> = <span className="text-foreground">m</span> · <span className="text-primary">c²</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Energy = Mass × (Speed of Light)²
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <div className="text-secondary font-medium">E (Energy)</div>
                    <div className="text-xs text-muted-foreground mt-1">Temporal accumulation</div>
                  </div>
                  <div className="p-3 rounded-lg bg-foreground/5">
                    <div className="text-foreground font-medium">m (Mass)</div>
                    <div className="text-xs text-muted-foreground mt-1">Spatial resistance</div>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <div className="text-primary font-medium">c² (Speed²)</div>
                    <div className="text-xs text-muted-foreground mt-1">Dimensional bridge</div>
                  </div>
                </div>
              </div>
            </MathBlock>
          </div>
        </section>

        {/* Theory */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="🔬"
              title="Theoretical Framework"
            />

            <div className="space-y-8 text-sm text-muted-foreground">
              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why "Square" Refers to Exponent
                </h3>
                <p className="leading-relaxed">
                  The exponent represents both <em>homogeneous growth</em> and <em>dimensional growth</em>. 
                  When we zoom in and out of the projection space, Z and X corrections do not map 
                  linearly in regards to scale — they can switch places. This is the theory of relativity 
                  manifesting in our complex number system.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  The Optimizer's Two-Dimensional Space
                </h3>
                <p className="leading-relaxed mb-4">
                  Accelerative numbers under exp and log do not meet in dimension/density — they appear 
                  as separate components. The optimizer operates in two-dimensional space where:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>X correction applies in value dimension</li>
                  <li>Z correction applies in acceleration dimension</li>
                  <li>Their order is not invariant to projection and scale</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Symmetrically Powerful Correction
                </h3>
                <p className="leading-relaxed">
                  We correct Z by first working in the "reverse-power-zone" — Y is much more powerful 
                  than Z, with X being the central axis. When we apply the correction with the same 
                  factor as for X, using Y-based correction applied to Z, the relative symmetries make 
                  it function as a backgradient in dimensionally coherent, "radioactive" zone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Code/Proof */}
        <section className="py-12 px-6 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon="💻"
              title="The Mechanism"
            />

            <MathBlock title="Backgradient for Z (Second Order)" className="font-mono text-sm">
              <pre className="overflow-x-auto text-muted-foreground">
{`# Pseudocode for second-order backgradient

def update_z_weights(Y, Z, learning_rate):
    # Second order differential
    d2L_dZ2 = compute_second_derivative(loss, Z)
    
    # Apply with factor 2 (dimensional scaling)
    correction = d2L_dZ2 * 2
    
    # The "E=mc²" operation:
    # Z operates in square power (acceleration)
    # while X operates in normal power (position)
    Z_weights -= learning_rate * correction
    
    # The exponent difference creates
    # square density relationship`}
              </pre>
            </MathBlock>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/light-speed" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span>Light Speed Boundary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default EnergyMass;
