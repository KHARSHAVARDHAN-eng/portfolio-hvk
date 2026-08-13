import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { processCommand } from './terminalCommands';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onTriggerMatrix: () => void;
}

interface LogEntry {
  command: string;
  output: string;
}

export const TerminalOverlay: React.FC<TerminalOverlayProps> = ({
  isOpen,
  onClose,
  onTriggerMatrix
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    {
      command: 'welcome',
      output: `K. Harshavardhan Terminal Interface [v2.4.0-release]
Type 'help' to view available system commands. Try 'matrix' for an Easter egg.`
    }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    
    if (cmd) {
      setCmdHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);
    }

    const res = processCommand(cmd);

    if (res.type === 'clear') {
      setHistory([]);
    } else if (res.type === 'matrix') {
      onTriggerMatrix();
      setHistory((prev) => [...prev, { command: cmd, output: res.content }]);
    } else {
      setHistory((prev) => [...prev, { command: cmd, output: res.content }]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < cmdHistory.length) {
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="relative w-full max-w-3xl h-[520px] glass-modal rounded-2xl border border-cyan-500/40 shadow-[0_0_40px_rgba(0,242,254,0.2)] flex flex-col z-10 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-mono-tech text-xs text-slate-400 ml-3 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>harshavardhan@ai-lab:~$</span>
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 font-mono-tech text-xs sm:text-sm text-slate-200 overflow-y-auto scanlines space-y-3 cursor-text"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                {entry.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span>harshavardhan@ai-lab:~$</span>
                    <span className="text-white font-bold">{entry.command}</span>
                  </div>
                )}
                {entry.output && (
                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed font-mono-tech">
                    {entry.output}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Prompt */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-cyan-400 flex-shrink-0">harshavardhan@ai-lab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-white font-mono-tech caret-cyan-400"
                autoFocus
                spellCheck={false}
              />
              <button type="submit" className="text-slate-500 hover:text-cyan-400">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            <div ref={bottomRef} />
          </div>

          {/* Footer Bar */}
          <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
            <span>Press ESC or click X to close</span>
            <span>Shortcut: [~]</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
