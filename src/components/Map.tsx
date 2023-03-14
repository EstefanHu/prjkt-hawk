'use client';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import beats from '@/lib/beats';

const styles = {
  height: '100%',
  width: '100%',
};

export default function Map() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-122.3321, 47.61],
      zoom: 11,
    });

    map.on('load', () => {
      map.addSource('beats', {
        type: 'geojson',
        data: beats as any,
      });

      map.addLayer({
        id: 'park-boundary',
        type: 'fill',
        source: 'beats',
        paint: {
          'fill-color': '#888888',
          'fill-opacity': 0.4,
        },
        filter: ['==', '$type', 'Polygon'],
      });
    });
  }, []);

  return <div id="map" ref={mapRef} style={styles} />;
}
