import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import './App.css';

const App = () => {
  const [vapi, setVapi] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentAssistant, setCurrentAssistant] = useState(null);
  const [callStatus, setCallStatus] = useState('Bağlantı için hazır...');
  const [showModal, setShowModal] = useState(false);

  // Vapi instance'ını oluştur (environment variable'dan public key al)
  const VAPI_PUBLIC_KEY = process.env.REACT_APP_VAPI_PUBLIC_KEY || '54d8b8e4-20db-4ae0-a3fd-2e007a1ff483';
  
  // Environment variables'dan asistan bilgilerini al
  const ASSISTANTS = {
    customer_service: {
      id: process.env.REACT_APP_ASSISTANT1_ID || '4c765584-0bd2-4bf0-a59c-684d96166665',
      name: process.env.REACT_APP_ASSISTANT1_NAME || 'Villa Polikne Otel Asistanı',
      description: process.env.REACT_APP_ASSISTANT1_DESC || 'Rezervasyon, oda hizmetleri ve otel bilgileri',
      color: '#667eea',
      gradient: process.env.REACT_APP_ASSISTANT1_GRADIENT || 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    sales: {
      id: process.env.REACT_APP_ASSISTANT2_ID || 'cbb10968-bd56-4996-83b1-61c697eed549', 
      name: process.env.REACT_APP_ASSISTANT2_NAME || 'Hereke Balık Restoran',
      description: process.env.REACT_APP_ASSISTANT2_DESC || 'Menü, rezervasyon ve restoran bilgileri',
      color: '#f093fb',
      gradient: process.env.REACT_APP_ASSISTANT2_GRADIENT || 'linear-gradient(135deg, #f093fb, #f5576c)'
    }
  };

  // Site genel ayarları
  const SITE_CONFIG = {
    title: process.env.REACT_APP_SITE_TITLE || 'AsistPro.ai',
    subtitle: process.env.REACT_APP_SITE_SUBTITLE || 'Hangi asistanla konuşmak istersiniz?'
  };

  useEffect(() => {
    // Vapi instance'ını oluştur
    const vapiInstance = new Vapi(VAPI_PUBLIC_KEY);
    setVapi(vapiInstance);

    // Event listener'ları ekle
    vapiInstance.on('call-start', () => {
      setIsCallActive(true);
      setCallStatus('Bağlantı kuruldu, konuşabilirsiniz...');
    });

    vapiInstance.on('call-end', () => {
      setIsCallActive(false);
      setCurrentAssistant(null);
      setCallStatus('Çağrı sonlandı');
      setShowModal(false);
    });

    vapiInstance.on('speech-start', () => {
      setCallStatus('Asistan konuşuyor...');
    });

    vapiInstance.on('speech-end', () => {
      setCallStatus('Sizi dinliyorum...');
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
      setCallStatus('Bağlantı hatası oluştu');
      setIsCallActive(false);
      setCurrentAssistant(null);
      setShowModal(false);
    });

    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  const startAssistant = async (assistantKey) => {
    if (!vapi) return;

    try {
      if (isCallActive) {
        vapi.stop();
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      const assistant = ASSISTANTS[assistantKey];
      setCurrentAssistant(assistant);
      setShowModal(true);
      setCallStatus('Bağlanıyor...');
      
      await vapi.start(assistant.id);
      
    } catch (error) {
      console.error('Error starting assistant:', error);
      setCallStatus('Bağlantı hatası: ' + error.message);
      setCurrentAssistant(null);
      setShowModal(false);
    }
  };

  const endCall = () => {
    if (vapi && isCallActive) {
      vapi.stop();
    }
  };

  return (
    <div className="app">
      <div className="main-container">
        <header className="simple-header">
          <h1>{SITE_CONFIG.title}</h1>
          <p>{SITE_CONFIG.subtitle}</p>
        </header>

        <div className="voice-buttons">
          {Object.entries(ASSISTANTS).map(([key, assistant]) => (
            <div key={key} className="voice-button-container">
              <button
                className="voice-button"
                style={{ background: assistant.gradient }}
                onClick={() => startAssistant(key)}
                disabled={isCallActive}
              >
                <div className="microphone-icon">🎙️</div>
                <div className="pulse-ring"></div>
              </button>
              <h3 className="assistant-title">{assistant.name}</h3>
              <p className="assistant-desc">{assistant.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Konuşma Modal Penceresi */}
      {showModal && (
        <div className="call-modal-overlay">
          <div className="call-modal">
            <div className="modal-header">
              <h3>{currentAssistant?.name}</h3>
              <button className="close-button" onClick={endCall}>×</button>
            </div>
            
            <div className="conversation-area">
              <div className="avatar-section">
                <div 
                  className="robot-avatar"
                  style={{ background: currentAssistant?.gradient }}
                >
                  🤖
                </div>
                <p className="call-status-text">{callStatus}</p>
              </div>

              <div className="microphone-section">
                <div className={`mic-indicator ${isCallActive ? 'listening' : ''}`}>
                  🎤
                </div>
                
                {/* Audio Spektrum */}
                <div className={`audio-spectrum ${isCallActive ? 'active' : ''}`}>
                  <div className="spectrum-bar" style={{'--delay': '0s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.1s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.05s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.2s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.15s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.3s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.25s'}}></div>
                  <div className="spectrum-bar" style={{'--delay': '0.1s'}}></div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="end-call-btn" onClick={endCall}>
                <span className="btn-icon">📞</span>
                <span className="btn-text">Konuşmayı Sonlandır</span>
                <div className="btn-ripple"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;