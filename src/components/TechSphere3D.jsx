import React, { useEffect, useRef, useState } from 'react';

const techTags = [
  { name: 'Next.js 14', color: '#ff8a4c', icon: '⚡' },
  { name: 'React.js', color: '#00f5ff', icon: '⚛' },
  { name: 'Node.js', color: '#22c55e', icon: '🟩' },
  { name: 'MongoDB', color: '#10b981', icon: '🍃' },
  { name: 'TypeScript', color: '#3b82f6', icon: 'TS' },
  { name: 'Express.js', color: '#cbd5e1', icon: 'EX' },
  { name: 'Tailwind CSS', color: '#38bdf8', icon: '🎨' },
  { name: 'Redux Toolkit', color: '#a855f7', icon: '🔮' },
  { name: 'JWT Auth', color: '#f59e0b', icon: '🔒' },
  { name: 'JavaScript', color: '#fbbf24', icon: 'JS' },
  { name: 'Python', color: '#60a5fa', icon: '🐍' },
  { name: 'REST APIs', color: '#ec4899', icon: '🔗' },
  { name: 'Technical SEO', color: '#f97316', icon: '📈' },
  { name: 'Cloudinary', color: '#06b6d4', icon: '☁' },
  { name: 'Nodemailer', color: '#ef4444', icon: '✉' },
  { name: 'Git & GitHub', color: '#f43f5e', icon: '🐙' },
  { name: 'JSON-LD Schema', color: '#eab308', icon: '📜' },
  { name: 'HTML5 & CSS3', color: '#fb923c', icon: '🌐' },
  { name: 'Postman', color: '#fb923c', icon: '🚀' },
  { name: 'Mongoose', color: '#14b8a6', icon: '🗄' },
  { name: 'VS Code', color: '#38bdf8', icon: '💻' }
];

export default function TechSphere3D() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });
  const mouseVelocityRef = useRef({ x: 0.003, y: 0.005 });
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = container.clientWidth || 600;
    let height = Math.min(580, Math.max(480, width * 0.75));
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      width = container.clientWidth || 600;
      height = Math.min(580, Math.max(480, width * 0.75));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate 3D Spherical Points for all Tech Tags using Fibonacci Spiral
    const radius = Math.min(width, height) * 0.36;
    const numTags = techTags.length;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    const sphereTags = techTags.map((tag, i) => {
      const y = 1 - (i / (numTags - 1)) * 2; // from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...tag,
        x: x * radius,
        y: y * radius,
        z: z * radius,
      };
    });

    // 3D Angles
    let rotX = 0.2;
    let rotY = 0.4;

    // Drag interactions
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMousePosRef.current.x;
      const deltaY = e.clientY - prevMousePosRef.current.y;

      rotY += deltaX * 0.007;
      rotX -= deltaY * 0.007;

      mouseVelocityRef.current = {
        x: -deltaY * 0.003,
        y: deltaX * 0.003
      };

      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch handlers
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePosRef.current.x;
      const deltaY = e.touches[0].clientY - prevMousePosRef.current.y;

      rotY += deltaX * 0.007;
      rotX -= deltaY * 0.007;

      mouseVelocityRef.current = {
        x: -deltaY * 0.003,
        y: deltaX * 0.003
      };

      prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // 3D Perspective Projection
    function project3D(point, rx, ry, cx, cy) {
      // Rotate around Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      let x1 = point.x * cosY + point.z * sinY;
      let y1 = point.y;
      let z1 = -point.x * sinY + point.z * cosY;

      // Rotate around X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      let x2 = x1;
      let y2 = y1 * cosX - z1 * sinX;
      let z2 = y1 * sinX + z1 * cosX;

      // Perspective
      const fov = 460;
      const scale = fov / (fov + z2);
      const projX = cx + x2 * scale;
      const projY = cy + y2 * scale;

      return { x: projX, y: projY, z: z2, scale };
    }

    // Animation Render Loop
    let time = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Auto rotation with inertia
      if (!isDraggingRef.current) {
        rotX += mouseVelocityRef.current.x;
        rotY += mouseVelocityRef.current.y;

        // Smooth cruise damping
        mouseVelocityRef.current.x += (0.002 - mouseVelocityRef.current.x) * 0.04;
        mouseVelocityRef.current.y += (0.0045 - mouseVelocityRef.current.y) * 0.04;
      }

      time += 0.02;

      // 1. Glowing Cyber Nucleus
      const nucleusRadius = radius * 0.55;
      const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, nucleusRadius);
      coreGradient.addColorStop(0, 'rgba(240, 110, 45, 0.35)');
      coreGradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.18)');
      coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(cx, cy, nucleusRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Project all Tech Tags and sort by Z-depth
      const projectedTags = sphereTags.map((tag) => {
        const proj = project3D(tag, rotX, rotY, cx, cy);
        return { ...tag, projX: proj.x, projY: proj.y, z: proj.z, scale: proj.scale };
      });

      projectedTags.sort((a, b) => a.z - b.z);

      // 3. Connect neighboring points with subtle constellation lines
      for (let i = 0; i < projectedTags.length; i++) {
        for (let j = i + 1; j < projectedTags.length; j++) {
          const p1 = projectedTags[i];
          const p2 = projectedTags[j];
          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100 && (p1.z > -radius * 0.4 || p2.z > -radius * 0.4)) {
            const alpha = (1 - dist / 100) * 0.18 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(240, 120, 50, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // 4. Render 3D Tech Badges
      projectedTags.forEach((tag) => {
        const isFront = tag.z > -radius * 0.2;
        const alpha = Math.max(0.2, Math.min(1, (tag.z + radius) / (radius * 1.8)));
        const tagScale = Math.max(0.65, Math.min(1.25, tag.scale));

        ctx.save();
        ctx.font = `700 ${Math.max(11, 13 * tagScale)}px "Plus Jakarta Sans", var(--font-main), sans-serif`;
        const labelText = `${tag.icon} ${tag.name}`;
        const metrics = ctx.measureText(labelText);
        const textWidth = metrics.width;
        const padX = 10 * tagScale;
        const padY = 6 * tagScale;
        const boxWidth = textWidth + padX * 2;
        const boxHeight = 26 * tagScale;
        const boxX = tag.projX - boxWidth / 2;
        const boxY = tag.projY - boxHeight / 2;

        // Shadow Glow for front tags
        if (isFront) {
          ctx.shadowColor = tag.color;
          ctx.shadowBlur = 16 * tagScale;
        }

        // Pill background
        ctx.fillStyle = isFront
          ? `rgba(16, 9, 7, ${0.92 * alpha})`
          : `rgba(12, 6, 5, ${0.6 * alpha})`;
        ctx.strokeStyle = isFront
          ? `${tag.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`
          : `rgba(255, 255, 255, ${0.12 * alpha})`;
        ctx.lineWidth = isFront ? 1.4 : 0.8;

        ctx.beginPath();
        ctx.roundRect(boxX, boxY, boxWidth, boxHeight, 14 * tagScale);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        // Pill text
        ctx.fillStyle = isFront ? '#ffffff' : `rgba(200, 200, 220, ${0.7 * alpha})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labelText, tag.projX, tag.projY + 0.5);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tech-3d-stage"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <canvas
        ref={canvasRef}
        className="tech-3d-canvas"
        style={{ cursor: 'grab', touchAction: 'none' }}
        onMouseDown={(e) => {
          isDraggingRef.current = true;
          prevMousePosRef.current = { x: e.clientX, y: e.clientY };
        }}
        onTouchStart={(e) => {
          if (e.touches.length === 1) {
            isDraggingRef.current = true;
            prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          }
        }}
      />
    </div>
  );
}
