<script lang="ts" setup>

</script>

<template>
  <div class="">
    <svg viewBox="0 0 1600 800" xmlns="http://www.w3.org/2000/svg">

      <!-- fondo -->
      <rect width="100%" height="100%" fill="#f4ead8" />

      <!-- MANDALA GRANDE -->
      <g transform="translate(800 380)" stroke="#2c1f17" fill="none">
        <circle r="180" stroke-width="6" />
        <circle r="130" stroke-width="4" />
        <circle r="80" stroke-width="3" />

        <!-- pétalos -->
        <g fill="#946A50" stroke="none">
          <ellipse cx="0" cy="-210" rx="30" ry="70" />
          <ellipse cx="150" cy="-150" rx="30" ry="70" transform="rotate(45 150 -150)" />
          <ellipse cx="210" cy="0" rx="30" ry="70" transform="rotate(90 210 0)" />
          <ellipse cx="150" cy="150" rx="30" ry="70" transform="rotate(135 150 150)" />
          <ellipse cx="0" cy="210" rx="30" ry="70" />
          <ellipse cx="-150" cy="150" rx="30" ry="70" transform="rotate(-135 -150 150)" />
          <ellipse cx="-210" cy="0" rx="30" ry="70" transform="rotate(-90 -210 0)" />
          <ellipse cx="-150" cy="-150" rx="30" ry="70" transform="rotate(-45 -150 -150)" />
        </g>
      </g>

      <!-- HOJAS AYURVÉDICAS -->
      <g fill="#B3896F" opacity="0.85">

        <path d="M120 160 C180 80 300 80 360 160 C300 240 180 240 120 160Z" />
        <path d="M240 360 C290 300 370 300 420 360 C370 420 290 420 240 360Z" />
        <path d="M1400 200 C1480 120 1560 150 1580 220 C1500 300 1420 260 1400 200Z" />
        <path d="M1350 520 C1420 460 1500 480 1540 560 C1480 620 1380 600 1350 520Z" />
        <path d="M1100 90 C1180 20 1300 40 1340 120 C1260 180 1140 160 1100 90Z" />
        <path d="M100 520 C180 450 260 470 300 540 C240 620 140 600 100 520Z" />

      </g>

      <!-- SEMILLAS / PÉTALOS -->
      <g fill="#2c1f17" opacity="0.7">

        <ellipse cx="500" cy="120" rx="30" ry="60" />
        <ellipse cx="600" cy="200" rx="20" ry="50" />
        <ellipse cx="1050" cy="650" rx="25" ry="60" />
        <ellipse cx="300" cy="650" rx="25" ry="60" />
        <ellipse cx="1450" cy="400" rx="20" ry="50" />
        <ellipse cx="750" cy="90" rx="20" ry="50" />

      </g>

      <!-- MINI MANDALAS -->
      <g stroke="#946A50" fill="none">

        <g transform="translate(200 650)">
          <circle r="50" stroke-width="3" />
          <circle r="25" stroke-width="2" />
        </g>

        <g transform="translate(1450 120)">
          <circle r="60" stroke-width="3" />
          <circle r="30" stroke-width="2" />
        </g>

        <g transform="translate(1200 350)">
          <circle r="40" stroke-width="3" />
          <circle r="18" stroke-width="2" />
        </g>

      </g>

    </svg>
  </div>
</template>

<style scoped></style>
