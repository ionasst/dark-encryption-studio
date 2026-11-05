import { useEffect, useState } from "react";
import { Activity, ArrowRight, Check, ChevronRight, Fingerprint, Layers3, LockKeyhole, Play, RotateCcw, Settings2, Shield, ShieldCheck, Terminal, Upload, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ratEmblem from "@/assets/rat-emblem.jpg";

const samples = [
  { name: "Select a sample file", size: "—" },
  { name: "project_alpha.demo", size: "2.4 MB" },
  { name: "archive_backup.demo", size: "8.1 MB" },
  { name: "sample_document.demo", size: "164 KB" },
];
const stages = ["Sample loaded into demo workspace", "Preparing visual simulation", "Generating sample block sequence", "Applying presentation settings", "Finalizing demonstration output", "Simulation completed successfully"];
const initialSettings = [true, true, false];

export function EncrypterWorkspace() {
  const [sample, setSample] = useState(0);
  const [output, setOutput] = useState("output_protected");
  const [settings, setSettings] = useState(initialSettings);
  const [step, setStep] = useState(-1);
  const [view, setView] = useState("workspace");
  const [history, setHistory] = useState<string[]>([]);
  const running = step >= 0 && step < 5;
  const complete = step === 5;
  const selected = samples[sample] ?? { name: "Select a sample file", size: "—" };

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setStep((current) => current + 1), 700);
    return () => window.clearTimeout(timer);
  }, [running, step]);

  useEffect(() => {
    if (complete) setHistory((current) => [selected.name, ...current].slice(0, 8));
  }, [complete, selected.name]);

  function reset() { setStep(-1); }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><Fingerprint className="brand-mark" strokeWidth={1.7} /><span className="brand-name">RAT<span className="text-primary">.</span></span></div>
        <p className="sidebar-caption">CONTROL CENTER</p>
        <nav className="sidebar-nav" aria-label="Main navigation">
          <Button variant="ghost" className={view === "workspace" ? "nav-active" : ""} onClick={() => setView("workspace")} title="Encrypter"><Layers3 /><span className="nav-label">Encrypter</span></Button>
          <Button variant="ghost" className={view === "history" ? "nav-active" : ""} onClick={() => setView("history")} title="Session activity"><Activity /><span className="nav-label">Session activity</span></Button>
        </nav>
        <div className="sidebar-bottom">
          <div className="version-box"><div className="flex items-center gap-2 font-medium"><span className="dot text-success" /> All systems operational</div><div className="mt-2 font-mono text-[9px] text-muted-foreground">LOCAL ENVIRONMENT</div></div>
          <div className="flex items-center gap-3 px-2"><div className="flex size-8 items-center justify-center rounded bg-secondary text-xs font-semibold">OP</div><div><div className="text-[11px] font-medium">Operator</div><div className="mt-1 text-[9px] text-muted-foreground">Personal workspace</div></div><ShieldCheck className="ml-auto size-4 text-muted-foreground" /></div>
        </div>
      </aside>
      <main className="main-area">
        <header className="topbar"><div className="flex items-center gap-3 text-muted-foreground"><span>Workspace</span><ChevronRight className="size-3" /><span className="text-foreground">{view === "workspace" ? "Encrypter" : "Session activity"}</span></div><div className="flex items-center gap-4"><span className="font-mono text-[9px] text-muted-foreground">v.2.4.0</span><span className="badge text-signal"><span className="dot" /> SIMULATION</span></div></header>
        <div className="workspace entrance">
          <div className="page-heading"><div><h1>{view === "workspace" ? "Encrypter" : "Session activity"}</h1><p>{view === "workspace" ? "Precision in every byte. Control in every detail." : "Your demonstration runs, all in one place."}</p></div><span className="badge text-muted-foreground"><LockKeyhole className="size-3" /> LOCAL SESSION</span></div>
          {view === "history" ? <section className="panel"><div className="panel-heading"><h2 className="panel-title"><Activity className="size-4 text-primary" /> Completed simulations</h2><span className="font-mono text-[10px] text-muted-foreground">{history.length} RUNS</span></div><div className="panel-content">{history.length ? history.map((name, i) => <div key={`${name}-${i}`} className="detail-row"><span className="font-mono">{name}</span><span className="flex items-center gap-2 text-success"><Check className="size-3" /> Simulated</span></div>) : <p className="py-12 text-center text-xs text-muted-foreground">No simulations completed this session.</p>}</div></section> : <>
          <section className="intro-band"><div className="intro-copy"><div className="flex items-center gap-2 font-mono text-[9px] text-primary"><span className="dot" /> THE NEXT GENERATION</div><h2>RAT ENCRYPTER<span className="text-primary">.</span></h2><p>A new level of precision.<br />Your workspace. Your configuration. Your control.</p><div className="intro-metadata"><span className="flex items-center gap-1.5"><Shield className="size-3 text-primary" /> PRIVATE BY DESIGN</span><span className="flex items-center gap-1.5"><Zap className="size-3 text-primary" /> BUILT FOR SPEED</span></div></div><img src={ratEmblem} alt="Faceted obsidian rat emblem with red illuminated eyes" className="emblem-art" width={1024} height={1024} /></section>
          <div className="workspace-grid">
            <section className="panel"><div className="panel-heading"><h2 className="panel-title"><Settings2 className="size-4 text-primary" /> Configuration</h2><span className="font-mono text-[9px] text-muted-foreground">01 / SETUP</span></div><div className="panel-content">
              <label className="field-label" htmlFor="sample-file">Input file</label><div className="file-zone"><Upload className="size-6 text-muted-foreground" strokeWidth={1.3} /><select id="sample-file" value={sample} disabled={running} onChange={(e) => { setSample(Number(e.target.value)); reset(); }}>{samples.map((file, index) => <option key={file.name} value={index}>{file.name}</option>)}</select><span className="font-mono text-[9px] text-muted-foreground">{sample ? `${selected.size} · DEMO FILE` : "SAMPLE FILES ONLY · NO UPLOAD"}</span></div>
              <div className="mt-5"><label className="field-label" htmlFor="output-name">Output name</label><div className="relative"><input id="output-name" value={output} onChange={(e) => setOutput(e.target.value)} disabled={running} className="field-input pr-16" maxLength={60} /><span className="absolute right-3 top-3 font-mono text-[10px] text-muted-foreground">.demo</span></div></div>
              <div className="mb-1 mt-6 flex items-center justify-between"><span className="field-label mb-0">Presentation options</span><span className="font-mono text-[8px] text-muted-foreground">DEMO ONLY</span></div>
              {[["Animated block sequence", "Visualize each stage of the simulation"], ["Detailed activity", "Display step-by-step sample events"], ["Compact output", "Use a minimal result presentation"]].map(([name, description], index) => <div className="setting-row" key={name}><div><label htmlFor={`setting-${index}`} className="setting-name block">{name}</label><p className="setting-description">{description}</p></div><Switch id={`setting-${index}`} checked={settings[index] ?? false} disabled={running} onCheckedChange={(checked) => setSettings((current) => current.map((value, i) => i === index ? checked : value))} /></div>)}
              <Button className="run-button mt-5" disabled={!sample || !output.trim() || running} onClick={() => setStep(0)}>{running ? <Activity className="animate-pulse" /> : <Play className="fill-current" />}{running ? "Simulation in progress" : complete ? "Run again" : "Run simulation"}<ArrowRight className="ml-auto" /></Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-[9px] text-muted-foreground"><ShieldCheck className="size-3" /> Visual demonstration. No files are processed.</p>
            </div></section>
            <div className="grid gap-5">
              <section className="panel"><div className="panel-heading"><h2 className="panel-title"><Activity className="size-4 text-primary" /> Process overview</h2><span className={`badge ${complete ? "text-success" : running ? "text-primary" : "text-muted-foreground"}`}><span className="dot" />{complete ? "COMPLETE" : running ? "RUNNING" : "STANDBY"}</span></div><div className="panel-content pt-0"><div className="status-visual"><div className={`status-ring ${running && settings[0] ? "running" : ""} ${complete ? "complete" : ""}`}>{complete ? <Check className="size-8" strokeWidth={1.3} /> : <Shield className="size-8" strokeWidth={1.3} />}</div></div><h3 className="status-title">{complete ? "Simulation complete" : running ? "Running your simulation" : "Ready when you are"}</h3><p className="status-description" role="status">{complete ? "Your demo result is ready." : running ? stages[step] : "Select a sample file to get started."}</p><div className="progress-track" role="progressbar" aria-label="Simulation progress" aria-valuenow={Math.max(0, step) * 20} aria-valuemin={0} aria-valuemax={100}>{Array.from({ length: Math.max(0, step) }, (_, i) => <span className="progress-segment" key={i} />)}</div><div className="mb-4 flex justify-between font-mono text-[9px] text-muted-foreground"><span>{complete ? "ALL STAGES COMPLETE" : running ? "SIMULATING" : "AWAITING INPUT"}</span><span>{Math.max(0, step) * 20}%</span></div><div className="border-t border-border pt-2"><div className={complete && settings[2] ? "hidden" : "detail-row"}><span className="text-muted-foreground">Input size</span><span className="font-mono">{selected.size}</span></div><div className="detail-row"><span className="text-muted-foreground">Output</span><span className="max-w-[65%] truncate font-mono">{complete ? `${output}.demo` : "—"}</span></div><div className="detail-row"><span className="text-muted-foreground">Environment</span><span className="font-mono text-success">Local / Simulation</span></div></div>{complete && <Button variant="outline" className="mt-3 w-full text-xs" onClick={reset}><RotateCcw /> Reset simulation</Button>}</div></section>
              <section className="panel"><div className="panel-heading"><h2 className="panel-title"><Terminal className="size-4 text-muted-foreground" /> Activity log</h2><span className="flex items-center gap-1.5 font-mono text-[8px] text-muted-foreground"><span className="dot text-success" /> LIVE</span></div><div className="terminal" aria-label="Activity log"><div className="terminal-line"><span className="terminal-time">00:00:00</span><span className="text-success">Workspace initialized.</span></div><div className="terminal-line"><span className="terminal-time">00:00:00</span><span className="text-muted-foreground">Simulation environment ready.</span></div>{step >= 0 && (settings[1] ? stages.slice(0, step + 1) : complete ? ["Simulation completed successfully"] : ["Simulation in progress…"]).map((line, i) => <div className="terminal-line" key={line}><span className="terminal-time">00:00:0{i + 1}</span><span className={line.includes("successfully") ? "text-success" : "text-foreground"}>{line}</span></div>)}{step < 0 && <div className="mt-2 text-primary">&gt; <span className="animate-pulse">_</span></div>}</div></section>
            </div>
          </div>
          </>}
          <footer className="workspace-footer"><span className="flex items-center gap-2"><LockKeyhole className="size-3" /> No uploads. No connections. Just a simulation.</span><span>RAT ENCRYPTER <span className="text-primary">/</span> 2026</span></footer>
        </div>
      </main>
    </div>
  );
}