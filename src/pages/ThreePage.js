import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Map from '../assets/map.png';

const Three = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 建立場景
    const scene = new THREE.Scene();

    // 建立相機
    const camera = new THREE.PerspectiveCamera(
      10,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.set(1, 2, 7);

    // 建立渲染器
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    // 建立大樓 1
    const geometry1 = new THREE.BoxGeometry();
    const material1 = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // 使用Phong材質
    const cube1 = new THREE.Mesh(geometry1, material1);
    cube1.scale.set(0.05, 0.08, 0.02);
    scene.add(cube1);

    // 建立大樓 2
    const geometry2 = new THREE.BoxGeometry();
    const material2 = new THREE.MeshPhongMaterial({ color: '#4D32F0' }); // 使用Phong材質
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.scale.set(0.01, 0.06, 0.02);
    cube2.position.set(0.02, 0, 0.1);
    scene.add(cube2);

    // 建立燈光
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // 建立平面網格
    // const gridSize = 10;
    // const gridDivisions = 1000;
    // const gridHelper = new THREE.GridHelper(gridSize, gridDivisions);
    // scene.add(gridHelper);

    // 底圖紋理
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(Map); // 替換為實際的圖像路徑

    // 建立平面材質並應用底圖
    const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotateX(-Math.PI / 2);
    scene.add(plane);

    // 建立地圖控制器
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // 動畫更新函數
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // 更新地圖控制器
      renderer.render(scene, camera);
    };

    // 呼叫動畫函數
    animate();

    // 處理視窗大小變更
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // 清除事件監聽
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Three;
