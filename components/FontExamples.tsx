/**
 * Font Examples Component
 * 
 * Demonstrates the three font families from the LaunchLink Design System:
 * - Inter (font-sans): Primary font for UI and body text
 * - Space Grotesk (font-display): Display font for hero headings
 * - JetBrains Mono (font-mono): Monospace font for code and wallet addresses
 */

export default function FontExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Inter - Primary Font */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Inter (Primary Font)</h2>
        <p className="font-sans text-base mb-2">
          This is Inter - the primary font for UI and body text.
        </p>
        <p className="font-sans text-base font-medium">
          Medium weight (500)
        </p>
        <p className="font-sans text-base font-semibold">
          Semi-bold weight (600)
        </p>
        <p className="font-sans text-base font-bold">
          Bold weight (700)
        </p>
      </section>

      {/* Space Grotesk - Display Font */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Space Grotesk (Display Font)</h2>
        <h1 className="font-display text-5xl font-bold mb-2">
          Hero Heading
        </h1>
        <h2 className="font-display text-4xl font-semibold mb-2">
          Section Title
        </h2>
        <p className="font-display text-lg">
          Use sparingly for large headings and hero sections
        </p>
      </section>

      {/* JetBrains Mono - Monospace Font */}
      <section>
        <h2 className="text-2xl font-bold mb-4">JetBrains Mono (Monospace Font)</h2>
        <code className="font-mono text-sm block bg-gray-100 p-4 rounded mb-2">
          const exampleCode = "Use for code snippets";
        </code>
        <code className="font-mono text-sm block bg-gray-100 p-4 rounded">
          const anotherExample = "Monospace font for technical content";
        </code>
      </section>
    </div>
  );
}

