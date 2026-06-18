'use client'

import dynamic from 'next/dynamic'

const SchlossMap = dynamic(() => import('./SchlossMap'), { ssr: false })

export default function SchlossMapWrapper() {
  return <SchlossMap />
}
