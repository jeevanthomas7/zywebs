"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";


export const SPHERE_PRIMARY_COLOR = "#059669";   // Main brand particle color (Emerald)
export const SPHERE_SECONDARY_COLOR = "#1f2937"; // Contrast/shadow particle color (Dark Slate)
export const SPHERE_DESKTOP_OPACITY = 0.95;     // Desktop sphere opacity (bolder)
export const SPHERE_MOBILE_OPACITY = 0.70;      // Mobile sphere opacity (lighter, prevents bold clumping)

const messages = [
  "Build the website you actually need?",
  "Get this done without the run around?",
  "Work with someone who's done this before?",
];

export function Hero() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  // Typewriter state
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle Typewriter effect
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(messages[0]);
      return;
    }

    const currentMsg = messages[messageIndex];
    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentMsg.length) {
      delay = 2200; // Pause when finished typing
    } else if (isDeleting && charIndex === 0) {
      delay = 450; // Pause before typing next message
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentMsg.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      } else {
        const nextChar = charIndex + (isDeleting ? -1 : 1);
        setCharIndex(nextChar);
        setText(currentMsg.substring(0, nextChar));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, messageIndex]);

  // Handle Three.js Interactive Particle Sphere
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
    } catch (e) {
      console.warn("Three.js WebGL unavailable:", e);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setClearColor(0x000000, 0);

    const canvas = renderer.domElement;
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.touchAction = "pan-y";
    canvas.style.cursor = "grab";
    const initialOpacity = mobile ? SPHERE_MOBILE_OPACITY : SPHERE_DESKTOP_OPACITY;
    canvas.style.opacity = mobile ? "0.95" : "0.95";

    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5;

    // Mobile uses fewer particles to prevent dense clumping on small screens
    const count = mobile ? 3600 : 12000;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = i * goldenAngle;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      seeds[i] = Math.random();
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

    const uniforms = {
      uTime: { value: 0 },
      uRadius: { value: 1.4 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uRotation: { value: new THREE.Vector2() },
      uPointer: { value: new THREE.Vector2(100, 100) },
      uHover: { value: 0 },
      uColor1: { value: new THREE.Color(SPHERE_PRIMARY_COLOR) },
      uColor2: { value: new THREE.Color(SPHERE_SECONDARY_COLOR) },
      uOpacity: { value: initialOpacity },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,

      vertexShader: `
        uniform float uTime;
        uniform float uRadius;
        uniform float uPixelRatio;
        uniform vec2 uRotation;
        uniform vec2 uPointer;
        uniform float uHover;

        attribute float aSeed;

        varying float vAlpha;
        varying float vSeed;

        void main() {
          vSeed = aSeed;
          vec3 n = normalize(position);

          float wave =
            sin(n.x * 12.0 + uTime * 0.65) *
            cos(n.y * 10.0 - uTime * 0.45) *
            sin(n.z * 11.0 + uTime * 0.35);

          vec3 p = n * uRadius * (1.0 + wave * 0.045);

          float cy = cos(uRotation.y);
          float sy = sin(uRotation.y);
          p.xz = mat2(cy, -sy, sy, cy) * p.xz;

          float cx = cos(uRotation.x);
          float sx = sin(uRotation.x);
          p.yz = mat2(cx, -sx, sx, cx) * p.yz;

          float rim = pow(
            1.0 - abs(p.z / max(length(p), 0.001)),
            2.5
          );

          vec4 viewPosition = modelViewMatrix * vec4(p, 1.0);
          vec4 clipPosition = projectionMatrix * viewPosition;

          vec2 screenPosition = clipPosition.xy / clipPosition.w;
          vec2 difference = screenPosition - uPointer;

          float distanceToMouse = length(difference);
          float influence = (1.0 - smoothstep(0.0, 0.38, distanceToMouse)) * uHover;

          vec2 direction = normalize(difference + vec2(0.0001));

          // Push particles outward near pointer
          viewPosition.xy += direction * influence * (0.2 + aSeed * 0.35);
          viewPosition.z += sin(aSeed * 70.0 + uTime * 2.0) * influence * 0.25;

          gl_Position = projectionMatrix * viewPosition;

          gl_PointSize = clamp(
            (1.4 + aSeed * 1.5 + influence)
            * uPixelRatio
            * (5.0 / -viewPosition.z),
            1.0,
            9.0
          );

          vAlpha = 0.12 + rim * 0.60 + influence * 0.25;
        }
      `,

      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform float uOpacity;

        varying float vAlpha;
        varying float vSeed;

        void main() {
          float distanceFromCenter = length(gl_PointCoord - 0.5);
          float shape = 1.0 - smoothstep(0.12, 0.48, distanceFromCenter);
          float alpha = shape * vAlpha;

          if (alpha < 0.015) discard;

          // Smooth gradient mix between Color 1 and Color 2
          vec3 col = mix(uColor1, uColor2, vSeed * 0.65);

          gl_FragColor = vec4(col, alpha * uOpacity);
        }
      `,
    });

    const sphere = new THREE.Points(geometry, material);
    sphere.frustumCulled = false;
    scene.add(sphere);

    function resize() {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const visibleHeight = 2 * Math.tan(THREE.MathUtils.degToRad(22.5)) * 5;
      const screenWidth = window.innerWidth;

      let sphereScale: number;
      if (screenWidth < 640) {
        sphereScale = 0.42;
      } else if (screenWidth < 768) {
        sphereScale = 0.38;
      } else if (screenWidth < 1024) {
        sphereScale = 0.40;
      } else if (screenWidth < 1280) {
        sphereScale = 0.43;
      } else if (screenWidth < 1536) {
        sphereScale = 0.45;
      } else {
        sphereScale = 0.46;
      }

      const isMobileNow = screenWidth < 768;
      uniforms.uOpacity.value = isMobileNow ? SPHERE_MOBILE_OPACITY : SPHERE_DESKTOP_OPACITY;
      canvas.style.opacity = isMobileNow ? "0.65" : "0.95";

      uniforms.uRadius.value =
        Math.min(visibleHeight, visibleHeight * camera.aspect) * sphereScale;

      if (reducedMotion) {
        renderer.render(scene, camera);
      }
    }

    const pointer = new THREE.Vector2(100, 100);
    const targetRotation = new THREE.Vector2(0.15, 0);

    let hoverTarget = 0;
    let dragging = false;
    let previousX = 0;
    let previousY = 0;
    let capturedPointer: number | null = null;

    function updatePointer(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      pointer.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
    }

    function onMove(event: PointerEvent) {
      if (reducedMotion) return;
      updatePointer(event);
      hoverTarget = 1;

      if (!dragging) return;
      targetRotation.y += (event.clientX - previousX) * 0.006;
      targetRotation.x += (event.clientY - previousY) * 0.006;
      targetRotation.x = THREE.MathUtils.clamp(targetRotation.x, -1.2, 1.2);

      previousX = event.clientX;
      previousY = event.clientY;
    }

    function onDown(event: PointerEvent) {
      if (reducedMotion || event.pointerType === "touch" || event.button !== 0) return;
      dragging = true;
      capturedPointer = event.pointerId;
      previousX = event.clientX;
      previousY = event.clientY;

      updatePointer(event);
      hoverTarget = 1;
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    }

    function onUp() {
      dragging = false;
      if (capturedPointer !== null && canvas.hasPointerCapture(capturedPointer)) {
        canvas.releasePointerCapture(capturedPointer);
      }
      capturedPointer = null;
      canvas.style.cursor = "grab";
      hoverTarget = 0;
    }

    function onLeave() {
      if (!dragging) hoverTarget = 0;
    }

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);
    canvas.addEventListener("pointerleave", onLeave);

    let frame: number | null = null;
    let lastTime = 0;
    let visible = true;
    let disposed = false;

    function render(time: number) {
      frame = null;
      if (disposed || !visible || document.hidden) return;

      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;

      if (!reducedMotion) {
        uniforms.uTime.value += delta;
        if (!dragging) {
  targetRotation.y += delta * (mobile ? 0.2 : 0.1);
}

        const easing = 1 - Math.exp(-delta * 7);
        uniforms.uRotation.value.lerp(targetRotation, easing);
        uniforms.uPointer.value.lerp(pointer, easing);
        uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * easing;
      }

      renderer.render(scene, camera);

      if (!reducedMotion) {
        frame = requestAnimationFrame(render);
      }
    }

    function resume() {
      if (!disposed && visible && !document.hidden && frame === null) {
        lastTime = 0;
        frame = requestAnimationFrame(render);
      }
    }

    function onVisibilityChange() {
      if (document.hidden) {
        if (frame !== null) {
          cancelAnimationFrame(frame);
          frame = null;
        }
      } else {
        resume();
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        resume();
      } else if (frame !== null) {
        cancelAnimationFrame(frame);
        frame = null;
      }
    });

    const resizeObserver = new ResizeObserver(resize);
    resize();
    observer.observe(mount);
    resizeObserver.observe(mount);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      disposed = true;
      if (frame !== null) cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);

      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("pointerleave", onLeave);

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(canvas)) {
        mount.removeChild(canvas);
      }
    };
  }, []);

  const handleContactClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-contact-modal"));
    }
  };

  return (
    <section
      id="hero"
      data-sphere-hero
      className="relative isolate z-10 flex min-h-[100svh] items-center justify-center overflow-hidden  bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Interactive 3D particle sphere background */}
      <div
        ref={mountRef}
        data-sphere-mount
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-auto"
      />

      {/* Hero Content Overlay */}
      <div className="pointer-events-none relative z-10 container mx-auto flex w-full max-w-5xl flex-col items-center px-3 sm:px-6 lg:px-10 text-center">
        {/* Eyebrow Badge */}
        <div className="mb-6 sm:mb-7 lg:mb-8 pointer-events-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-1 sm:py-1.5 text-[7px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#059669] backdrop-blur-sm shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            ZYWEBS DIGITAL STUDIO
          </span>
        </div>

        {/* Dynamic Typewriter Headline */}
        <h1 className="grid w-full max-w-[950px] text-[clamp(2.1rem,4.8vw,4.5rem)] font-normal leading-[1.15] tracking-tight text-neutral-900 px-1 sm:px-0">
          {/* Invisible layout reservations to prevent height jumping */}
          {messages.map((message) => (
            <span
              key={message}
              aria-hidden="true"
              className="invisible col-start-1 row-start-1 select-none pointer-events-none"
            >
              <span className="font-semibold text-[#059669]">ZYWEBS, </span>
              <span>{message}</span>
              <span className="ml-1 inline-block h-[0.85em] border-r-2" />
            </span>
          ))}

          {/* Active Animated Message */}
          <span className="col-start-1 row-start-1 self-center">
            <span className="font-semibold text-[#059669]">ZYWEBS, </span>
            <span>{text}</span>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-[0.85em] translate-y-[0.06em] border-r-2 border-[#059669] animate-pulse"
            />
          </span>
        </h1>

        {/* Description Paragraph (2 lines) */}
        <p className="mt-6 max-w-[800px] text-sm leading-relaxed text-black/65 sm:mt-7 sm:text-base lg:mt-8">
          We craft high-performing websites and digital experiences for ambitious businesses,
          <br className="hidden sm:inline" /> engineered to look sharp, load fast, and convert visitors into clients.
        </p>

        {/* CTAs with Signature Button Design */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10 md:mt-12 lg:mt-14 pointer-events-auto">
          {/* Primary CTA (Signature Brand Button with 45° Arrow) */}
          <button
            type="button"
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg bg-[#059669] pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-[#047857] hover:shadow-xl hover:shadow-[#059669]/25 active:scale-95 cursor-pointer shadow-lg shadow-[#059669]/20"
          >
            <span>Let&apos;s Connect</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-white text-black transition-transform duration-300 group-hover:scale-105">
              <svg
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <svg
                className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </button>

          {/* Secondary Button (Same design with transparent bg) */}
          <a
            href="#services"
            className="group inline-flex items-center gap-2.5 sm:gap-3 rounded-lg border border-black/20 bg-transparent pl-5 pr-2 py-2 sm:pl-6 sm:pr-2.5 sm:py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 transition-all duration-300  active:scale-95 cursor-pointer shadow-sm"
          >
            <span>View Services</span>
            <span className="relative flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center overflow-hidden rounded-md sm:rounded-lg bg-transparent text-black border border-black/20 transition-transform duration-300 group-hover:scale-105">
              <svg
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <svg
                className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 -translate-x-4 translate-y-4 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Trust Badge at Bottom Left (Mobile & Desktop) */}
      <div className="absolute bottom-8 lg:bottom-15 left-4 lg:left-10 z-20 pointer-events-auto flex items-center gap-2.5 sm:gap-3 select-none">
        <div className="h-8 sm:h-9 w-[2.5px] rounded-full bg-[#059669] shrink-0" />
        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-medium sm:font-semibold text-neutral-800 tracking-tight leading-tight">
            Trusted by <span className="text-[#059669] font-bold">10+</span> Clients
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mt-0.5 leading-tight">
            ACROSS VARIOUS INDUSTRIES
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
