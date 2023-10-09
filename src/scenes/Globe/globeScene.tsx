"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { LocationsType } from "@/components/DashboardComponents/types";
import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("./globeComponent"), {
  ssr: false,
});

export default function GlobeScene({ mapData }: { mapData: LocationsType }) {
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  return (
    <Canvas className="w-full h-[600px]" shadows dpr={[1, 2]}>
      {domReady && (
        <>
          {/* <perspectiveCamera
            position={[0, 0, 1600]}
            aspect={1}
            fov={100}
            updateProjectionMatrix={() => {}}
          />  */}
          <OrthographicCamera
            position={[0, 0, 5700]}
            zoom={10}
            top={200}
            bottom={-200}
            left={200}
            right={-200}
          />
          {/* <OrthographicCamera
            makeDefault
            zoom={10}
            top={200}
            bottom={-200}
            left={200}
            right={-200}
            near={1}
            far={1200}
            position={[0, 0, 1200]}
          /> */}
          <ambientLight color={0xbbbbbb} intensity={0.5} />
          <directionalLight color="0xffffff" position={[0, 0, 5]} />
          <directionalLight
            color={0xffffff}
            position={[-800, 2000, 400]}
            intensity={0.8}
          />
          <directionalLight
            color="#fabfff"
            position={[-200, 500, 200]}
            intensity={1}
          />
          <directionalLight
            color={0x8566cc}
            position={[-200, 500, 200]}
            intensity={0.5}
          />
          <GlobeComponent mapData={mapData} />
          <fog attach="fog" args={["#5f002c", 300, 2000]} />
          <OrbitControls
            enableZoom
            enableDamping
            enablePan
            minDistance={100}
            maxDistance={100}
            rotateSpeed={0.5}
            zoomSpeed={1}
            autoRotate={false}
            minPolarAngle={Math.PI / 6} // 30 degrees up
            maxPolarAngle={(3 * Math.PI) / 60}
          />
        </>
      )}
    </Canvas>
  );
}
