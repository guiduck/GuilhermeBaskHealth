"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import countries from "../../public/files/custom.geo.json";
import lines from "../../public/files/lines.json";
import map from "../../public/files/map.json";
import { useFrame } from "@react-three/fiber";
import { useWidgetsStore } from "@/stores/widgets";

export default function GlobeComponent() {
  const globeRef = useRef<any>(ThreeGlobe);

  const { displayItems } = useWidgetsStore();

  useEffect(() => {
    let globe: any = new ThreeGlobe({
      waitForGlobeReady: true,
      animateIn: true,
    });
    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(4)
      .hexPolygonMargin(0.4)
      .showAtmosphere(true)
      .atmosphereColor("#ff5100")
      .atmosphereAltitude(0.4);

    setTimeout(() => {
      globe
        .arcsData(lines.pulls)
        .arcColor((e: any) => {
          return e.status ? "#9cff00" : "#ff4000";
        })
        .arcAltitude((e: any) => {
          return e.arcAlt;
        })
        .arcStroke((e: any) => {
          return e.status ? 0.5 : 0.3;
        })
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e: any) => e.order * 1)
        .labelsData(map.maps)
        .labelColor(() => "#ffcb21")

        .labelDotRadius(0.7)
        .labelSize((e: any) => e.size)
        .labelText("city")
        .labelResolution(8)
        .labelAltitude(0.04)
        .pointsData(map.maps)
        .pointColor(() => "#ffdf53")
        .pointsMerge(true)
        .pointAltitude(0.03)
        .pointRadius(0.08);

      globe.rotateY(-Math.PI * (5 / 9));
      globe.rotateZ(-Math.PI / 6);
      globe.position.set(0, 0, -100);
      const globeMaterial = globe.globeMaterial();
      globeMaterial.color = new THREE.Color(0x3a228a);
      globeMaterial.emissive = new THREE.Color(0x220038);
      globeMaterial.emissiveIntensity = 0.1;
      globeMaterial.shininess = 0.7;

      globeRef.current = globe;
    }, 1000);
  }, [displayItems]);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.position.z += 0.001;
    }
  });

  return (
    <>{globeRef.current ? <primitive object={globeRef.current} /> : null}</>
  );
}
