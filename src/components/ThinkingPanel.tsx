/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Brain, ChevronDown, ChevronUp } from "lucide-react";

interface ThinkingPanelProps {
  thinking: string;
  isThinking: boolean;
}

export function ThinkingPanel({ thinking, isThinking }: ThinkingPanelProps) {
  const [expanded, setExpanded] = useState(true);

  if (!thinking && !isThinking) return null;

  return (
    <div className="border border-amber-200 bg-amber-50 rounded-sm overflow-hidden mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div className="flex items-center gap-2">
          <Brain size={14} className={`text-amber-600 ${isThinking ? "animate-pulse" : ""}`} />
          <span className="text-[10px] font-sans font-black uppercase tracking-widest text-amber-700">
            {isThinking ? "Gemma 4 is reasoning..." : "Gemma 4 Thinking Process"}
          </span>
          <span className="text-[9px] font-sans bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full uppercase tracking-wider">
            WHO Guidelines Applied
          </span>
        </div>
        {expanded ? <ChevronUp size={14} className="text-amber-600" /> : <ChevronDown size={14} className="text-amber-600" />}
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-amber-200">
          {isThinking && !thinking ? (
            <div className="flex items-center gap-2 py-3">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-xs text-amber-600 italic">Analyzing clinical signals...</span>
            </div>
          ) : (
            <pre className="text-xs text-amber-800 font-mono whitespace-pre-wrap leading-relaxed pt-3 max-h-48 overflow-y-auto">
              {thinking}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
