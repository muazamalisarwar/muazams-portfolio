'use client';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const PREDEFINED_QUESTIONS = [
  "What are Muazam's core skills?",
  "Tell me about Muazam Ali's experience",
  "Is Muazam open to new roles?",
  "Can you summarize his projects?"
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, status, sendMessage, error } = useChat();
  const isLoading = status === 'submitted' || status === 'streaming';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    if (sendMessage) sendMessage({ text: input });
    setInput('');
  };

  const handleChipClick = (text: string) => {
    if (isLoading) return;
    if (sendMessage) sendMessage({ text });
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 left-5 sm:left-auto sm:right-8 z-50 w-[calc(100vw-40px)] sm:w-[420px] h-[500px] sm:h-[550px] max-h-[80vh] flex flex-col rounded-3xl bg-[#030303]/80 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_-15px_rgba(176,114,255,0.4)] overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute -top-[20%] -left-[20%] w-[60%] h-[60%] rounded-full bg-[#61bafb] opacity-[0.03] blur-[80px]"></div>
              <div className="absolute -bottom-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-[#b072ff] opacity-[0.03] blur-[80px]"></div>
            </div>
            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-4 border-b border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#61bafb] to-[#b072ff] shadow-[0_0_15px_rgba(176,114,255,0.5)]">
                  <Bot size={18} className="text-white relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white tracking-wide text-sm">Portfolio Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <p className="text-[11px] text-[#D7E2EA]/60 uppercase tracking-wider font-medium">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all active:scale-95"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div data-lenis-prevent="true" className="flex-1 overflow-y-auto overscroll-contain p-4 flex flex-col gap-5 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.length === 0 && (
                <div className="flex flex-col h-full items-center justify-center space-y-6 mt-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col items-center text-center space-y-3"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#61bafb]/20 to-[#b072ff]/20 flex items-center justify-center p-1 border border-white/10">
                      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#61bafb] to-[#b072ff] flex items-center justify-center shadow-[0_0_20px_rgba(176,114,255,0.5)]">
                        <Bot size={28} className="text-white" />
                      </div>
                    </div>
                    {messages.length === 0 && !error && (
                    <div className="flex h-full items-center justify-center p-4 text-center">
                      <p className="text-sm text-gray-400">
                        Hi! I'm Muazam's AI assistant. Ask me about his experience, skills, or projects!
                      </p>
                    </div>
                  )}
                  </motion.div>
                  
                  <div className="flex flex-wrap justify-center gap-2 w-full max-w-[95%]">
                    {PREDEFINED_QUESTIONS.map((q, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        onClick={() => handleChipClick(q)}
                        className="text-xs font-medium text-white/80 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#b072ff]/50 hover:shadow-[0_0_15px_rgba(176,114,255,0.2)] transition-all rounded-full px-4 py-2.5"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center p-3 my-2 mx-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center"
                >
                  {error.message || "You have exceeded your Gemini API quota limit. Please wait 1 minute and try again."}
                </motion.div>
              )}
              {messages.map((m) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-full shadow-lg ${
                    m.role === 'user' 
                      ? 'bg-gradient-to-tr from-[#61bafb]/20 to-[#b072ff]/20 border border-[#b072ff]/30' 
                      : 'bg-gradient-to-tr from-[#61bafb] to-[#b072ff]'
                  }`}>
                    {m.role === 'user' ? <User size={14} className="text-[#b072ff]" /> : <Bot size={14} className="text-white" />}
                  </div>
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm ${
                      m.role === 'user'
                        ? 'bg-gradient-to-tr from-[#61bafb]/10 to-[#b072ff]/10 border border-[#b072ff]/20 text-white rounded-tr-sm'
                        : 'bg-white/5 text-[#D7E2EA] border border-white/5 rounded-tl-sm backdrop-blur-md'
                    }`}
                  >
                    {(() => {
                      let text = '';
                      if (typeof m.content === 'string' && m.content.trim() !== '') {
                        text = m.content;
                      } else if (Array.isArray(m.content)) {
                        text = m.content.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('');
                      } else if (Array.isArray(m.parts)) {
                        text = m.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('');
                      } else if (typeof m.text === 'string') {
                        text = m.text;
                      }
                      
                      const displayText = text || JSON.stringify(m);

                      return m.role === 'user' ? (
                        <span className="break-words">{displayText}</span>
                      ) : (
                        <div className="space-y-3 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>h1]:font-semibold [&>h2]:font-semibold [&>h3]:font-semibold [&>h4]:font-semibold [&_strong]:font-semibold [&_strong]:text-white break-words">
                          {text ? (
                            <ReactMarkdown>{text}</ReactMarkdown>
                          ) : (
                            <span className="text-[10px] break-words">{displayText}</span>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </motion.div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex items-start gap-3">
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#61bafb] to-[#b072ff]">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-sm p-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/50 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <div className="relative z-10 p-4 border-t border-white/5 bg-[#030303]/50 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="flex gap-2 relative group">
                <input
                  type="text"
                  value={input || ''}
                  onChange={handleInputChange}
                  placeholder="Ask anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3.5 pr-14 text-sm text-white outline-none focus:border-[#b072ff]/50 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(176,114,255,0.15)] transition-all placeholder:text-white/30"
                />
                <button
                  type="submit"
                  disabled={isLoading || !(input || '').trim()}
                  className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square flex items-center justify-center rounded-full bg-gradient-to-tr from-[#61bafb] to-[#b072ff] text-white hover:shadow-[0_0_15px_rgba(176,114,255,0.5)] transition-all disabled:opacity-50 disabled:grayscale disabled:shadow-none"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} className="mr-0.5 mt-0.5" />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-5 sm:right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#61bafb] to-[#b072ff] text-white shadow-[0_8px_30px_rgba(176,114,255,0.5)] border border-white/20"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </motion.button>
    </>
  );
}
