"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import countries from "../../public/files/custom.geo.json";
import lines from "../../public/files/lines.json";
import map from "../../public/files/map.json";
import { useFrame } from "@react-three/fiber";

function parseMapData(inputData) {
  const parsedData = inputData?.map((item) => ({
    size: 2.0,
    lat: item.latitude.toFixed(6),
    lng: item.longitude.toFixed(6),
    city: item.label,
  }));

  return { type: "Map", maps: parsedData || map.maps };
}

export default function GlobeComponent({
  mapData,
}) {
  const [globeLoaded, setGlobeLoaded] = useState(false);
  const globeRef = useRef(null);

  const parsedMapData = useMemo(
    () => parseMapData(mapData) || { type: "Map", maps: [] },
    [mapData]
  );
  console.log(parsedMapData);

  useEffect(() => {
    let globe = new ThreeGlobe({
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

    // setTimeout(() => {
      globe
        .arcsData(lines.pulls)
        .arcColor((e) => {
          return e.status ? "#9cff00" : "#ff4000";
        })
        .arcAltitude((e) => {
          return e.arcAlt;
        })
        .arcStroke((e) => {
          return e.status ? 0.5 : 0.3;
        })
        .arcDashLength(0.9)
        .arcDashGap(4)
        .arcDashAnimateTime(1000)
        .arcsTransitionDuration(1000)
        .arcDashInitialGap((e) => e.order * 1)
        .labelsData(parsedMapData.maps)
        .labelColor(() => "#ffcb21")

        .labelDotRadius(0.7)
        .labelSize((e) => e.size)
        .labelText("city")
        .labelResolution(8)
        .labelAltitude(0.04)
        .pointsData(parsedMapData.maps)
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
      setGlobeLoaded(true);
    // }, 1000);
  }, []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.position.z += 0.001;
    }
  });

  return <>{globeLoaded ? <primitive object={globeRef.current} /> : null}</>;
}
