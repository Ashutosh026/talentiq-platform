import { getDifficultyColor } from "../lib/utils";


function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  const diffCol = getDifficultyColor(problem.difficulty);

  return (
    <div style={{ height: '100%', overflowY: 'auto', background: '#0A0C0F', padding: '24px' }}>
      <style>{`
        .pd-title { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: #EEF2FF; }
        .pd-diff-badge { font-size: 11px; padding: 4px 10px; border-radius: 4px; font-weight: 500; }
        .pd-label { font-size: 10px; color: #7A8499; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; margin: 20px 0 8px; }
        .pd-text { font-size: 13px; color: #7A8499; line-height: 1.6; font-weight: 300; }
        .pd-example-box { background: #0D1117; border: 1px solid #ffffff12; border-radius: 8px; padding: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; margin-bottom: 12px; }
        .pd-ex-in { color: #00E5A0; margin-bottom: 2px; }
        .pd-ex-val { color: #EEF2FF; margin-bottom: 6px; }
        .pd-ex-out { color: #8B7CF6; margin-bottom: 2px; }
        .pd-const-box { padding: 4px 0; }
        .pd-const-line { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #EEF2FF; background: #0D1117; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-bottom: 6px; border: 1px solid #ffffff08; }
        .pd-select { width: 100%; background: #111520; color: #EEF2FF; border: 1px solid #ffffff12; padding: 8px; border-radius: 6px; font-size: 12px; margin-top: 16px; outline: none; }
      `}</style>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <h1 className="pd-title">{problem.title}</h1>
        <span className="pd-diff-badge" style={{ background: diffCol.bg, color: diffCol.text, marginLeft: 'auto' }}>
          {problem.difficulty}
        </span>
      </div>

      <p className="pd-text" style={{ marginBottom: '16px' }}>{problem.description.text}</p>
      
      {problem.description.notes && problem.description.notes.map((note, idx) => (
        <p key={idx} className="pd-text" style={{ marginBottom: '16px' }}>{note}</p>
      ))}

      <div className="pd-label">EXAMPLES</div>
      {problem.examples.map((example, idx) => (
        <div key={idx} className="pd-example-box">
          <div className="pd-ex-in">Input:</div>
          <div className="pd-ex-val">{example.input}</div>
          <div className="pd-ex-out">Output:</div>
          <div className="pd-ex-val">{example.output}</div>
          {example.explanation && (
            <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #ffffff12', color: '#7A8499' }}>
              <span style={{ color: '#00E5A0' }}>Explanation:</span> {example.explanation}
            </div>
          )}
        </div>
      ))}

      <div className="pd-label">CONSTRAINTS</div>
      <div className="pd-const-box">
        {problem.constraints.map((constraint, idx) => (
          <div key={idx} className="pd-const-line">{constraint}</div>
        ))}
      </div>

      <select
        className="pd-select"
        value={currentProblemId}
        onChange={(e) => onProblemChange(e.target.value)}
      >
        {allProblems.map((p) => (
          <option key={p.id} value={p.id}>
            {p.title} - {p.difficulty}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProblemDescription;
