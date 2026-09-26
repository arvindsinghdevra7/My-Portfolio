import React, { useState, useEffect, useRef } from 'react';

// Web Audio synthesizer for cute sci-fi robot beeps (zero external dependencies)
function playRobotSound(type, isMuted) {
  if (isMuted) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'greet') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === 'code') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.setValueAtTime(1174.66, now + 0.08); // D6
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'turbo') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
      osc.start(now);
      osc.stop(now + 0.38);
    }
  } catch {
    // Graceful fallback if audio is blocked by browser policy
  }
}

export default function RobotModel() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [mode, setMode] = useState('greet'); // 'greet', 'code', 'turbo'
  const [expression, setExpression] = useState('happy'); // 'happy', 'blink', 'wink', 'glasses'
  const [isMuted, setIsMuted] = useState(false);
  const robotRef = useRef(null);

  // Mouse tracking to make robot head look smoothly at the cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!robotRef.current) return;
      const rect = robotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      setMouseOffset({
        x: Math.max(-20, Math.min(20, deltaX * 18)),
        y: Math.max(-15, Math.min(15, deltaY * 14))
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Blinking loop for eyes when in greet mode
  useEffect(() => {
    if (mode !== 'greet') return;
    const blinkInterval = setInterval(() => {
      setExpression('blink');
      setTimeout(() => {
        setExpression('happy');
      }, 200);
    }, 3800);

    return () => clearInterval(blinkInterval);
  }, [mode]);

  // Click on robot directly to cycle modes
  const handleRobotClick = () => {
    if (mode === 'greet') {
      handleModeSwitch('code');
    } else if (mode === 'code') {
      handleModeSwitch('turbo');
    } else {
      handleModeSwitch('greet');
    }
  };

  const handleModeSwitch = (newMode) => {
    setMode(newMode);
    playRobotSound(newMode, isMuted);
    if (newMode === 'code') {
      setExpression('glasses');
    } else if (newMode === 'turbo') {
      setExpression('wink');
    } else {
      setExpression('happy');
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <div
      className={`robot-hero-stage mode-${mode}`}
      ref={robotRef}
      title="Click me or use the mode buttons below to interact!"
    >
      {/* Sleek Interactive Cyber Speech Pill */}
      <div className="robot-speech-bubble" onClick={handleRobotClick}>
        <span className="bot-status-dot"></span>
        {mode === 'greet' && (
          <>
            <span className="bubble-wave">👋</span>
            <span className="bubble-text">Hi, I'm Arvind's AI Bot!</span>
          </>
        )}
        {mode === 'code' && (
          <>
            <span className="bubble-wave">💻</span>
            <span className="bubble-text">Live Coding: Next.js & MERN</span>
          </>
        )}
        {mode === 'turbo' && (
          <>
            <span className="bubble-wave">⚡</span>
            <span className="bubble-text">Turbo Mode: 100% Performance!</span>
          </>
        )}

        {/* Audio Mute/Unmute Toggle */}
        <button
          className="bot-audio-toggle"
          onClick={toggleMute}
          title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
          type="button"
        >
          <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
        </button>
      </div>

      {/* Holographic Projection Platform Base */}
      <div className="holo-pedestal-platform">
        <div className="holo-ring holo-ring-outer"></div>
        <div className="holo-ring holo-ring-inner"></div>
        <div className="holo-light-pillar"></div>
        <div className="holo-cyber-grid"></div>
      </div>

      {/* Robot Main Chassis (Floating Body) */}
      <div className="robot-chassis" onClick={handleRobotClick}>
        {/* Back Cyber Thruster Aero-Fins / Wings */}
        <div className="cyber-wings-container">
          <div className="cyber-wing wing-left">
            <span className="wing-energy-edge"></span>
          </div>
          <div className="cyber-wing wing-right">
            <span className="wing-energy-edge"></span>
          </div>
        </div>

        {/* Top Antenna Beacon */}
        <div className="robot-antenna">
          <div className="antenna-light"></div>
          <div className="antenna-stem"></div>
        </div>

        {/* Robot Head (Curved Cyber Monitor Screen) */}
        <div
          className="robot-head"
          style={{
            transform: `rotateY(${mouseOffset.x}deg) rotateX(${-mouseOffset.y}deg)`
          }}
        >
          {/* Cyber Audio Ear Pods on Head Sides */}
          <div className="ear-pod ear-left">
            <span className="ear-glow"></span>
          </div>
          <div className="ear-pod ear-right">
            <span className="ear-glow"></span>
          </div>

          {/* Head Outer Frame & Glass Sheen */}
          <div className="monitor-frame">
            <div className="screen-bezel">
              <div className="monitor-screen">
                {/* Expressions */}
                {expression === 'happy' && (
                  <div className="face-expression happy-face">
                    <div className="eye eye-left">
                      <span className="pupil"></span>
                    </div>
                    <div className="robot-mouth"></div>
                    <div className="eye eye-right">
                      <span className="pupil"></span>
                    </div>
                  </div>
                )}
                {expression === 'blink' && (
                  <div className="face-expression blink-face">
                    <div className="eye-closed eye-left"></div>
                    <div className="robot-mouth"></div>
                    <div className="eye-closed eye-right"></div>
                  </div>
                )}
                {expression === 'wink' && (
                  <div className="face-expression wink-face">
                    <div className="eye eye-left">
                      <span className="pupil"></span>
                    </div>
                    <div className="robot-mouth open"></div>
                    <div className="eye-closed eye-right"></div>
                  </div>
                )}
                {expression === 'glasses' && (
                  <div className="face-expression glasses-face">
                    <div className="cyber-shades">
                      <div className="shades-lens lens-left">
                        <span className="matrix-spark"></span>
                      </div>
                      <div className="shades-bridge"></div>
                      <div className="shades-lens lens-right">
                        <span className="matrix-spark"></span>
                      </div>
                    </div>
                    <div className="robot-mouth smirk"></div>
                  </div>
                )}

                {/* CRT Scanline & Glass Glare Reflection */}
                <div className="screen-scanlines"></div>
                <div className="screen-glare"></div>
              </div>
            </div>
            {/* Monitor Stand / Hydraulic Neck */}
            <div className="monitor-base-neck">
              <span className="neck-joint"></span>
            </div>
          </div>
        </div>

        {/* Robot Torso / Chassis */}
        <div className="robot-torso">
          {/* Torso Shoulder Armor Caps */}
          <div className="armor-collar"></div>

          {/* Arc Reactor Chest Core */}
          <div className="chest-core">
            <div className="core-ring-spin"></div>
            <div className="core-glow"></div>
            <i className={`fa-solid ${mode === 'turbo' ? 'fa-fire' : 'fa-bolt'} core-icon`}></i>
          </div>

          {/* Tech Status Lights & Vents */}
          <div className="torso-tech-panel">
            <span className="tech-dot dot-cyan"></span>
            <span className="tech-dot dot-green"></span>
            <span className="tech-dot dot-purple"></span>
          </div>
          <div className="torso-vent vent-1"></div>
        </div>

        {/* Arms (Left & Right) */}
        {/* Right Arm */}
        <div className={`robot-arm arm-right ${mode === 'greet' ? 'waving-animation' : mode === 'code' ? 'typing-animation-right' : 'turbo-animation'}`}>
          <div className="shoulder">
            <span className="joint-pin"></span>
          </div>
          <div className="bicep"></div>
          <div className="forearm">
            <div className="hand">
              <span className="finger finger-1"></span>
              <span className="finger finger-2"></span>
              <span className="finger finger-3"></span>
            </div>
          </div>
        </div>

        {/* Left Arm */}
        <div className={`robot-arm arm-left ${mode === 'code' ? 'typing-animation-left' : 'swaying-animation'}`}>
          <div className="shoulder">
            <span className="joint-pin"></span>
          </div>
          <div className="bicep"></div>
          <div className="forearm">
            <div className="hand">
              <span className="finger finger-1"></span>
              <span className="finger finger-2"></span>
              <span className="finger finger-3"></span>
            </div>
          </div>
        </div>

        {/* Floating 3D Holographic IDE Screen (Only in Code Mode) */}
        {mode === 'code' && (
          <div className="holo-code-screen">
            <div className="holo-code-header">
              <span className="code-dot dot-red"></span>
              <span className="code-dot dot-yellow"></span>
              <span className="code-dot dot-green"></span>
              <span className="code-title">arvind_dev.js</span>
            </div>
            <div className="holo-code-body">
              <div><span className="kw">const</span> dev = <span className="str">"Arvind Singh Devra"</span>;</div>
              <div><span className="kw">const</span> stack = [<span className="str">"Next"</span>, <span className="str">"MERN"</span>];</div>
              <div><span className="fn">deploy</span>(<span className="str">"Success"</span>);<span className="cursor-blink">|</span></div>
            </div>
          </div>
        )}

        {/* Robot Moving Legs */}
        <div className="robot-legs-container">
          <div className="robot-leg leg-left">
            <div className="hip"></div>
            <div className="thigh"></div>
            <div className="calf"></div>
            <div className="foot">
              <div className="thruster-glow"></div>
              <div className="thruster-core-flame"></div>
            </div>
          </div>

          <div className="robot-leg leg-right">
            <div className="hip"></div>
            <div className="thigh"></div>
            <div className="calf"></div>
            <div className="foot">
              <div className="thruster-glow"></div>
              <div className="thruster-core-flame"></div>
            </div>
          </div>
        </div>

        {/* Ground Hover Shadow */}
        <div className="robot-ground-shadow"></div>
      </div>

      {/* Interactive Micro Mode Switcher Bar */}
      <div className="robot-mode-bar">
        <button
          className={`mode-btn ${mode === 'greet' ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); handleModeSwitch('greet'); }}
          type="button"
        >
          <span>👋</span> Greet
        </button>
        <button
          className={`mode-btn ${mode === 'code' ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); handleModeSwitch('code'); }}
          type="button"
        >
          <span>💻</span> Code
        </button>
        <button
          className={`mode-btn ${mode === 'turbo' ? 'active' : ''}`}
          onClick={(e) => { e.stopPropagation(); handleModeSwitch('turbo'); }}
          type="button"
        >
          <span>⚡</span> Turbo
        </button>
      </div>
    </div>
  );
}
