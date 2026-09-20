"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 160;
const CONNECT_DISTANCE = 3.1;
const VOLUME = 9;

/**
 * Red de nodos abstracta: cada punto representa un sensor del entorno
 * (antena, etiqueta, cámara); las conexiones representan la integración
 * bajo un solo acompañamiento. Puramente decorativo, sin captura de eventos.
 */
export function NetworkScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / Math.max(container.clientHeight, 1),
      0.1,
      100,
    );
    camera.position.z = 11;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const positions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * VOLUME * 2,
          (Math.random() - 0.5) * VOLUME * 1.2,
          (Math.random() - 0.5) * VOLUME,
        ),
      );
    }

    const pointsGeometry = new THREE.BufferGeometry().setFromPoints(positions);
    const pointsMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#0080df"),
      size: 0.085,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const hubPositions = positions.filter((_, i) => i % 11 === 0);
    const hubGeometry = new THREE.BufferGeometry().setFromPoints(hubPositions);
    const hubMaterial = new THREE.PointsMaterial({
      color: new THREE.Color("#27d38c"),
      size: 0.16,
      transparent: true,
      opacity: 0.95,
    });
    const hubPoints = new THREE.Points(hubGeometry, hubMaterial);
    group.add(hubPoints);

    const linePositions: number[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < CONNECT_DISTANCE) {
          linePositions.push(
            positions[i].x,
            positions[i].y,
            positions[i].z,
            positions[j].x,
            positions[j].y,
            positions[j].z,
          );
        }
      }
    }
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3),
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#004b8e"),
      transparent: true,
      opacity: 0.35,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    let frameId = 0;
    let paused = false;
    let autoRotation = 0;
    const pointer = { x: 0, y: 0 };

    const onPointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };

    const animate = () => {
      if (!paused) {
        autoRotation += 0.0009;
        group.rotation.y = autoRotation + pointer.x * 0.25;
        group.rotation.x += (pointer.y * 0.15 - group.rotation.x) * 0.04;
        renderer.render(scene, camera);
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    const onVisibility = () => {
      paused = document.hidden;
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting || document.hidden;
      },
      { threshold: 0.05 },
    );

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    document.addEventListener("visibilitychange", onVisibility);
    io.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      hubGeometry.dispose();
      hubMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
