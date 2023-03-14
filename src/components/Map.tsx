'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const styles = {
  height: '90vh',
  width: '100%',
};

export default function Map() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-122.3321, 47.6062],
      zoom: 10,
    });
  }, []);

  return <div id="map" ref={mapRef} style={styles} />;
}
