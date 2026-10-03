<script setup lang="ts">
// Faint knowledge-graph backdrop for cover slides: nodes and edges hug the
// slide edges so the centered title text stays clear. Coordinates are on the
// fixed 980×552 slide canvas.
interface GraphNode {
  x: number
  y: number
  r: number
  // 'resource' = filled node, 'literal' = hollow node, 'place' = yellow accent
  kind: 'resource' | 'literal' | 'place'
}

const nodes: Record<string, GraphNode> = {
  l1: { x: 60, y: 70, r: 6, kind: 'resource' },
  l2: { x: 150, y: 145, r: 7, kind: 'resource' },
  l3: { x: 45, y: 235, r: 5, kind: 'literal' },
  l4: { x: 135, y: 305, r: 7, kind: 'place' },
  l5: { x: 70, y: 400, r: 6, kind: 'resource' },
  l6: { x: 175, y: 465, r: 5, kind: 'literal' },
  l7: { x: 35, y: 510, r: 4, kind: 'resource' },
  t1: { x: 235, y: 55, r: 4, kind: 'literal' },
  t2: { x: 330, y: 28, r: 5, kind: 'resource' },
  t3: { x: 520, y: 34, r: 4, kind: 'literal' },
  t4: { x: 760, y: 42, r: 5, kind: 'resource' },
  r1: { x: 905, y: 65, r: 6, kind: 'resource' },
  r2: { x: 825, y: 135, r: 7, kind: 'resource' },
  r3: { x: 940, y: 215, r: 6, kind: 'place' },
  r4: { x: 850, y: 295, r: 7, kind: 'resource' },
  r5: { x: 935, y: 385, r: 5, kind: 'literal' },
  r6: { x: 800, y: 430, r: 6, kind: 'resource' },
  r7: { x: 690, y: 515, r: 4, kind: 'literal' },
  b1: { x: 380, y: 522, r: 5, kind: 'resource' },
  b2: { x: 560, y: 505, r: 4, kind: 'literal' },
}

const edges: [string, string][] = [
  ['l1', 'l2'], ['l1', 't1'], ['t1', 't2'], ['t2', 't3'], ['t3', 't4'], ['t4', 'r1'],
  ['l2', 'l3'], ['l2', 'l4'], ['l3', 'l4'], ['l4', 'l5'], ['l5', 'l6'], ['l5', 'l7'],
  ['l6', 'b1'], ['b1', 'b2'], ['b2', 'r7'], ['r7', 'r6'], ['r6', 'r4'], ['r4', 'r2'],
  ['r2', 'r1'], ['r2', 't4'], ['r2', 'r3'], ['r3', 'r4'], ['r4', 'r5'], ['r5', 'r6'],
]

// Dashed "within" regions around a few nodes, echoing geometry in the graph.
const regions = [
  '20,200 110,110 195,170 185,345 80,350',
  '790,250 900,175 975,240 965,350 870,345',
]
</script>

<template>
  <svg class="graph-motif" viewBox="0 0 980 552" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <polygon v-for="(points, i) in regions" :key="`region-${i}`" :points="points" class="region" />
    <line
      v-for="([a, b], i) in edges"
      :key="`edge-${i}`"
      :x1="nodes[a].x" :y1="nodes[a].y" :x2="nodes[b].x" :y2="nodes[b].y"
    />
    <circle
      v-for="(n, id) in nodes"
      :key="id"
      :cx="n.x" :cy="n.y" :r="n.r"
      :class="n.kind"
    />
  </svg>
</template>
