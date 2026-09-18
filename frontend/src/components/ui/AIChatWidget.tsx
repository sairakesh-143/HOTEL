import { useState } from 'react';
import { MessageSquare, X, Send, Building2, CheckCircle2 } from 'lucide-react';

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickQuestions = [
    'What rooms are available?',
    'What amenities do rooms have?',
    'Do you provide wedding services?',
    'What dining options are available?',
    'How far is the railway station?',
    'What event facilities are available?',
  ];

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-hotel-maroon text-white p-4 rounded-full shadow-chat hover:bg-hotel-maroon-dark transition-all duration-200 hover:scale-105 group"
          aria-label="Open SVN Assistant"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-hotel-charcoal text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask SVN Assistant
          </span>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-h-[560px] bg-white rounded-xl shadow-chat border border-gray-200 flex flex-col animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="bg-hotel-maroon px-4 py-3.5 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-white/15 rounded-full flex items-center justify-center mr-3">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-small">SVN Assistant</div>
                <div className="text-xs text-white/60">Verified Hotel Knowledge</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-1">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
            {/* Welcome Message */}
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-sm max-w-[85%] text-small">
                <p className="font-medium mb-1">Hello! I'm the SVN Hotel Assistant.</p>
                <p className="text-gray-600">I can help you with rooms, dining, events, facilities and hotel information.</p>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="space-y-2">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Suggested questions</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage(q)}
                    className="text-xs border border-gray-200 text-gray-600 px-2.5 py-1.5 rounded-full hover:border-hotel-maroon hover:text-hotel-maroon transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Source indicator */}
          <div className="px-4 py-1.5 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center text-[10px] text-gray-400 uppercase tracking-wider">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Answers based on verified hotel information
            </div>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-100 flex-shrink-0">
            <form
              onSubmit={(e) => { e.preventDefault(); /* TODO: wire to RAG backend */ }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about the hotel..."
                className="flex-1 input py-2 text-small"
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="bg-hotel-maroon text-white p-2 rounded-button hover:bg-hotel-maroon-dark disabled:opacity-30 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
