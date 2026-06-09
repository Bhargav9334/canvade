import React, { useState, useEffect, useRef } from 'react';
import { CalendarDays } from "lucide-react";
import Navbar from "../components/Navbar";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const SmileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const MoreVerticalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
  </svg>
);
const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const INITIAL_DATA = {
  Joined: {
    Groups: [
      {
        id: 1,
        name: "Amnec Studio (Animation group)",
        msg: "Today's class will be a theoretical test...",
        time: "1m",
        active: "3 Active",
        color: "#D1FAE5",
        textColor: "#065F46",
        messages: [
          { id: 1, text: "Today's class gonna be the theoretical test and everyone should be prepared.", type: "received", time: "11:45" },
          { id: 2, text: "All the students are requested to be present in the class.", type: "received", time: "11:52" },
          { id: 3, text: "Okay sir, I have a few doubts regarding today's topics. If possible, could you please give us a few minutes to clear them? It would really help us understand the concepts better and perform well in the test.", type: "sent", time: "12:05" },
          { id: 4, text: "Not today, but in the next class we will have a doubt-solving session.", type: "received", time: "12:10" },
        ],
      },
      {
        id: 2,
        name: "Ignou M.tech 1st year",
        msg: "Exam is going to be soon...",
        time: "25m",
        active: "5 Active",
        color: "#DBEAFE",
        textColor: "#1E40AF",
        messages: [
          { id: 1, text: "guys... Exam is going to be soon. does any one have idea which topic is really Im......", type: "received", time: "10:20" },
          { id: 2, text: "Bro same I have no clue ", type: "sent", time: "10:22" },
        ],
      },
      {
        id: 9,
        name: "Ignou M.tech Notes",
        msg: "Anyone interested in buying 1st sem notes...",
        time: "1h",
        active: "0 Active",
        color: "#F3E8FF",
        textColor: "#7E22CE",
        messages: [
          { id: 1, text: "Anyone interested in buying 1st sem notes it will make really easy for you to prepare.", type: "received", time: "09:00" },
        ],
      },
    ],
    Individuals: [
      {
        id: 3,
        name: "Sohail Bhati",
        msg: "Hey, did you check the portfolio?",
        time: "2h",
        active: "Online",
        color: "#E5E7EB",
        textColor: "#374151",
        messages: [
          { id: 1, text: "Hey, did you check the portfolio?", type: "received", time: "08:30" },
          { id: 2, text: "Yes! Looks amazing bro ", type: "sent", time: "08:35" },
        ],
      },
      {
        id: 4,
        name: "Komal Sharma",
        msg: "The chat UI looks great!",
        time: "5h",
        active: "Offline",
        color: "#FCE7F3",
        textColor: "#9D174D",
        messages: [
          { id: 1, text: "The chat UI looks great!", type: "received", time: "07:00" },
          { id: 2, text: "Thanks! Still polishing it ", type: "sent", time: "07:10" },
        ],
      },
    ],
  },
  Requests: {
    Groups: [
      {
        id: 5,
        name: "New Design Team",
        msg: "Request to join...",
        time: "1d",
        active: "Pending",
        color: "#FEF9C3",
        textColor: "#92400E",
        messages: [{ id: 1, text: "You have a pending join request for this group.", type: "received", time: "Yesterday" }],
      },
    ],
    Individuals: [
      {
        id: 6,
        name: "Rahul Verma",
        msg: "Wants to connect",
        time: "3d",
        active: "New",
        color: "#FEE2E2",
        textColor: "#991B1B",
        messages: [{ id: 1, text: "Hi! I'd like to connect with you.", type: "received", time: "3 days ago" }],
      },
    ],
  },
  Global: {
    Groups: [
      {
        id: 7,
        name: "Public Tech Forum",
        msg: "Welcome to global chat",
        time: "Now",
        active: "100+ Active",
        color: "#CFFAFE",
        textColor: "#155E75",
        messages: [
          { id: 1, text: "Welcome to the Public Tech Forum! Feel free to discuss anything tech-related.", type: "received", time: "Now" },
        ],
      },
    ],
    Individuals: [],
  },
};

const getNow = () => {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
};


const BP = { mobile: 640, tablet: 1024 };

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return {
    isMobile: w < BP.mobile,
    isTablet: w >= BP.mobile && w < BP.tablet,
    isDesktop: w >= BP.tablet,
    width: w,
  };
}


const ChatPage = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoint();
  const [activeSidebar, setActiveSidebar] = useState("Joined");
  const [activeTab, setActiveTab] = useState("Groups");
  const [selectedId, setSelectedId] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [chatData, setChatData] = useState(INITIAL_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileView, setMobileView] = useState("list");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedId, chatData]);

  const getAllChats = () =>
    Object.values(chatData).flatMap((s) => Object.values(s).flat());

  const getSelectedChat = () =>
    getAllChats().find((c) => c.id === selectedId) || null;

  const getCurrentList = () => {
    const list = chatData[activeSidebar]?.[activeTab] || [];
    if (!searchQuery) return list;
    return list.filter(
      (c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.msg.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const handleSelectChat = (id) => {
    setSelectedId(id);
    if (!isDesktop) setMobileView("chat");
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedId) return;
    const newMsg = { id: Date.now(), text: messageInput.trim(), type: "sent", time: getNow() };
    setChatData((prev) => {
      const updated = JSON.parse(JSON.stringify(prev));
      for (const sb of Object.keys(updated)) {
        for (const tab of Object.keys(updated[sb])) {
          const idx = updated[sb][tab].findIndex((c) => c.id === selectedId);
          if (idx !== -1) {
            updated[sb][tab][idx].messages.push(newMsg);
            updated[sb][tab][idx].msg = messageInput.trim();
            updated[sb][tab][idx].time = "Just now";
          }
        }
      }
      return updated;
    });
    setMessageInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendMessage(); }
  };

  const selectedChat = getSelectedChat();
  const currentList = getCurrentList();
  const groupCount = chatData[activeSidebar]?.Groups?.length || 0;
  const indvCount = chatData[activeSidebar]?.Individuals?.length || 0;

  const showSidebar = isDesktop;
  const showList = isDesktop || isTablet || mobileView === "list";
  const showChat = isDesktop || isTablet || mobileView === "chat";
  const listWidth = isDesktop ? 310 : isTablet ? 260 : "100%";

  const handleSidebarChange = (item) => {
    setActiveSidebar(item);
    setSelectedId(null);
    setMobileView("list");
  };

  return (
    <>
      <Navbar />
      <div className="chat-root">
        <div className="chat-outer-wrap">
        <div className="chat-inner">
          {showSidebar && (
            <div className="sidebar">
                {["Global", "Joined", "Requests"].map((item) => (
                <button
                  key={item}
                  className={`sidebar-btn ${activeSidebar === item ? 'active' : 'inactive'}`}
                  onClick={() => handleSidebarChange(item)}
                >
                  {item}
                  {item === "Joined" ? (
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', flexShrink: 0, display: 'inline-block' }} />
                  ) : (
                    <span className={`sidebar-badge ${activeSidebar === item ? 'active' : 'inactive'}`}>
                      {item === "Global" ? "3" : "12"}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {showList && (
            <div className="list-panel" style={{ width: listWidth }}>

              {isMobile && (
                <div className="mobile-nav">
                  {["Global", "Joined", "Requests"].map((item) => (
                    <button
                      key={item}
                      className={`mobile-nav-btn ${activeSidebar === item ? 'active' : 'inactive'}`}
                      onClick={() => handleSidebarChange(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}

              {isTablet && (
                <div className="tablet-nav">
                  {["Global", "Joined", "Requests"].map((item) => (
                    <button
                      key={item}
                      className={`tablet-nav-btn ${activeSidebar === item ? 'active' : 'inactive'}`}
                      onClick={() => handleSidebarChange(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}

              <div className="tabs-row">
                {["Groups", "Individuals"].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : 'inactive'}`}
                    onClick={() => { setActiveTab(tab); setSelectedId(null); }}
                  >
                    {tab}
                    <span style={{
                      marginLeft: 4, fontSize: 11, borderRadius: 20, padding: '2px 6px', fontWeight: 700,
                      background: activeTab === tab ? '#ECFDF5' : '#F3F4F6',
                      color: activeTab === tab ? '#10B981' : '#9CA3AF'
                    }}>{tab === "Groups" ? groupCount : indvCount}</span>
                    {activeTab === tab && <div className="tab-underline" />}
                  </button>
                ))}
              </div>

              <div className="search-wrap">
                <div className="search-inner">
                  <span style={{ color: '#9CA3AF', display: 'flex' }}><SearchIcon /></span>
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="chat-list">
                {currentList.length > 0 ? currentList.map((chat) => (
                  <div
                    key={chat.id}
                    className={`chat-item ${selectedId === chat.id ? 'active' : ''}`}
                    onClick={() => handleSelectChat(chat.id)}
                  >
                    <div className="chat-avatar" style={{ background: chat.color, color: chat.textColor }}>
                      {chat.name.charAt(0)}
                      <div className={`avatar-dot ${chat.active !== "Offline" ? 'online' : 'offline'}`} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#1F2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 155 }}>{chat.name}</span>
                        <span style={{ fontSize: 11, color: '#9CA3AF', flexShrink: 0 }}>{chat.time}</span>
                      </div>
                      <div style={{ fontSize: 12, color: '#6B7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginBottom: 4 }}>{chat.msg}</div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, fontWeight: 700, color: '#10B981' }}>
                        <span style={{ width: 8, height: 8, borderRadius: 2, background: '#10B981', display: 'inline-block' }} />
                        {chat.active}
                      </span>
                    </div>
                  </div>
                )) : (
                  <div style={{ padding: 40, textAlign: 'center', color: '#9CA3AF', fontSize: 13, fontStyle: 'italic' }}>
                    No {activeTab} in {activeSidebar}
                  </div>
                )}
              </div>
            </div>
          )}

          {showChat && (
            <div className="chat-area">
              {selectedChat ? (
                <>
                  <div className="chat-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      {!isDesktop && (
                        <button className="icon-btn" onClick={() => setMobileView("list")}>
                          <BackIcon />
                        </button>
                      )}
                      <div style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, flexShrink: 0, background: selectedChat.color, color: selectedChat.textColor }}>
                        {selectedChat.name.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#1F2937' }}>{selectedChat.name}</div>
                        <div style={{ fontSize: 11, color: '#10B981', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                          Online
                        </div>
                      </div>
                    </div>
                    <button className="icon-btn"><MoreVerticalIcon /></button>
                  </div>

                  <div className="chat-messages">
                    <div className="date-divider">
                      <div className="date-divider-line" />
                      <div className="date-chip">
                        <CalendarDays size={14} />
                        February 16th, 2021
                      </div>
                      <div className="date-divider-line" />
                    </div>

                    {selectedChat.messages.map((msg, i) => (
                      <div key={msg.id || i} className={`msg-row ${msg.type}`}>
                        <div className={`bubble ${msg.type}`}>{msg.text}</div>
                        <div className="msg-time">Today {msg.time}</div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="chat-input-wrap">
                    <div className="chat-input-inner">
                      <button className="icon-btn"><SmileIcon /></button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Send your message..."
                      />
                      <button className="icon-btn"><PlusIcon /></button>
                      <button className="send-btn" onClick={handleSendMessage}><SendIcon /></button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="empty-state">
                  <div style={{ fontSize: 48, opacity: 0.2 }}>💬</div>
                  <div>Select a chat to view messages</div>
                </div>
              )}
            </div>
          )}
  </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;