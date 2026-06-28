'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'
import type { Map } from 'leaflet'

const LAT = 50.0810
const LNG = 10.8072

export default function SchlossMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    async function init() {
      const L = (await import('leaflet')).default

      const map = L.map(containerRef.current!, {
        center: [LAT, LNG],
        zoom: 14,
        scrollWheelZoom: false,
      })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      const markerIcon = L.divIcon({
        html: `<div style="width:14px;height:14px;background:#ff5509;border-radius:50%;border:2.5px solid white;box-shadow:0 1px 5px rgba(0,0,0,0.4)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        className: '',
      })

      L.marker([LAT, LNG], { icon: markerIcon })
        .addTo(map)
        .bindPopup('<strong>Schloss Eyrichshof</strong><br>96126 Eyrichshof')
        .openPopup()
    }

    init()

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full min-h-[360px]" />
}
