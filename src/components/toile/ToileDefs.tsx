/**
 * Biblioteca de arte vectorial "Toile de Jouy Azul".
 * Se monta una única vez en el layout raíz. El resto de componentes
 * referencian estas piezas con <use href="#id" />.
 */
export function ToileDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        {/* Patrón Toile de Jouy: florecillas y ramitas azules sobre blanco */}
        <pattern id="toile" width="44" height="44" patternUnits="userSpaceOnUse">
          <rect width="44" height="44" fill="#FFFFFF" />
          <g fill="none" stroke="#7FA6CC" strokeWidth="1" strokeLinecap="round" opacity=".9">
            <g transform="translate(11,11)">
              <circle r="1.9" />
              <ellipse rx="2.4" ry="4.3" transform="rotate(0)   translate(0,-5.4)" />
              <ellipse rx="2.4" ry="4.3" transform="rotate(72)  translate(0,-5.4)" />
              <ellipse rx="2.4" ry="4.3" transform="rotate(144) translate(0,-5.4)" />
              <ellipse rx="2.4" ry="4.3" transform="rotate(216) translate(0,-5.4)" />
              <ellipse rx="2.4" ry="4.3" transform="rotate(288) translate(0,-5.4)" />
            </g>
            <g transform="translate(31,30) rotate(-24)">
              <path d="M0 9 C0 3 0 -3 0 -9" />
              <path d="M0 5 C-4 3 -5 -1 -4.5 -3" />
              <path d="M0 2 C4 0 5 -4 4.5 -6" />
              <path d="M0 -2 C-4 -4 -5 -8 -4.5 -10" />
            </g>
            <circle cx="37" cy="8" r="1.1" fill="#9DBFDC" stroke="none" />
            <circle cx="5" cy="34" r="1.1" fill="#9DBFDC" stroke="none" />
          </g>
        </pattern>

        <pattern id="toileSoft" width="44" height="44" patternUnits="userSpaceOnUse">
          <rect width="44" height="44" fill="#FFFFFF" />
          <g fill="none" stroke="#A8C6E0" strokeWidth=".9" opacity=".75">
            <g transform="translate(11,11)">
              <circle r="1.7" />
              <ellipse rx="2.2" ry="4" transform="rotate(0)   translate(0,-5)" />
              <ellipse rx="2.2" ry="4" transform="rotate(72)  translate(0,-5)" />
              <ellipse rx="2.2" ry="4" transform="rotate(144) translate(0,-5)" />
              <ellipse rx="2.2" ry="4" transform="rotate(216) translate(0,-5)" />
              <ellipse rx="2.2" ry="4" transform="rotate(288) translate(0,-5)" />
            </g>
            <path d="M31 39 C31 33 31 27 31 21" />
            <path d="M31 35 C27 33 26 29 26.5 27" />
            <path d="M31 32 C35 30 36 26 35.5 24" />
          </g>
        </pattern>

        {/* Jirafa: cabeza y cuello, recorte toile */}
        <symbol id="s-giraffe" viewBox="0 0 170 400">
          <g fill="url(#toile)" stroke="#2F5F94" strokeWidth="2.4" strokeLinejoin="round">
            <path
              d="M50 400
                 C52 300 56 212 62 152
                 C64 130 70 112 82 100
                 C86 86 90 74 98 68
                 C110 60 126 58 138 64
                 C150 70 156 80 152 90
                 C148 100 138 106 128 110
                 C120 114 112 118 106 124
                 C100 128 98 134 100 142
                 C104 154 106 166 104 182
                 C102 242 100 320 98 400 Z"
            />
            <path d="M92 76 C82 68 72 66 66 70 C62 73 64 80 70 84 C77 89 86 88 92 82 Z" />
            <path d="M132 58 C126 50 122 42 124 36 C126 31 132 32 134 37 C136 43 136 51 134 58 Z" />
            <path d="M112 62 C107 54 104 46 106 40 C108 35 114 36 116 41 C118 47 117 55 115 62 Z" />
          </g>
          <g fill="none" stroke="#2F5F94" strokeWidth="2.2" strokeLinecap="round">
            <path d="M62 152 C56 148 54 140 58 134" />
            <path d="M65 128 C59 124 57 116 61 110" />
            <path d="M70 106 C64 102 63 95 67 89" />
            <path d="M77 88 C72 84 71 78 75 73" />
            <circle cx="133" cy="34" r="4.4" fill="#DCE9F5" />
            <circle cx="115" cy="38" r="4.4" fill="#DCE9F5" />
          </g>
          <ellipse cx="129" cy="80" rx="4.2" ry="4.8" fill="#2C5282" />
          <circle cx="130.6" cy="78.2" r="1.4" fill="#fff" />
          <path d="M140 96 c4 1 7 1 10 0" fill="none" stroke="#2F5F94" strokeWidth="2" strokeLinecap="round" />
        </symbol>

        {/* Leopardito sentado, recorte toile */}
        <symbol id="s-leopard" viewBox="0 0 230 260">
          <g fill="url(#toile)" stroke="#2F5F94" strokeWidth="2.4" strokeLinejoin="round">
            <path
              d="M172 232 C202 226 214 198 206 172 C202 158 190 150 180 154 C172 157 170 166 175 172
                 C180 178 189 175 189 168"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M74 130 C60 148 52 180 54 210 C55 228 62 238 74 240 L156 240
                 C168 238 175 228 176 210 C178 180 170 148 156 130 Z"
            />
            <path d="M76 200 C72 216 74 232 80 240 L104 240 C108 230 108 214 104 200 Z" />
            <path d="M126 200 C122 214 122 230 126 240 L150 240 C156 232 158 216 154 200 Z" />
            <path d="M64 62 C56 40 58 24 68 20 C78 17 90 28 94 44 Z" />
            <path d="M166 62 C174 40 172 24 162 20 C152 17 140 28 136 44 Z" />
            <ellipse cx="115" cy="82" rx="59" ry="52" />
          </g>
          <g stroke="#2F5F94" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <path d="M104 104 C110 110 120 110 126 104" />
            <path d="M115 96 l0 8" />
            <path
              d="M62 96 l-24 -6 M62 104 l-24 4 M168 96 l24 -6 M168 104 l24 4"
              strokeWidth="1.8"
              opacity=".8"
            />
          </g>
          <g>
            <ellipse cx="92" cy="76" rx="9" ry="10.5" fill="#2C5282" />
            <ellipse cx="138" cy="76" rx="9" ry="10.5" fill="#2C5282" />
            <circle cx="95" cy="72.5" r="3" fill="#fff" />
            <circle cx="141" cy="72.5" r="3" fill="#fff" />
            <path d="M110 92 h10 l-5 6 z" fill="#6F9AC6" />
          </g>
        </symbol>

        {/* Monstera (costilla de Adán) grabada, de lóbulos */}
        <symbol id="s-monstera" viewBox="0 0 210 250">
          <g fill="url(#toileSoft)" stroke="#3A6BA5" strokeWidth="2.2" strokeLinejoin="round">
            <g transform="translate(105,186) rotate(10)  scale(.78)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,150) rotate(24)  scale(1.02)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,112) rotate(40)  scale(.98)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,78)  rotate(58)  scale(.78)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,186) scale(-1,1) rotate(10)  scale(.78)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,150) scale(-1,1) rotate(24)  scale(1.02)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,112) scale(-1,1) rotate(40)  scale(.98)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <g transform="translate(105,78)  scale(-1,1) rotate(58)  scale(.78)">
              <path d="M0 -9 C-24 -18 -58 -17 -84 -3 C-58 13 -24 15 0 7 Z" />
            </g>
            <path d="M105 74 C90 60 88 38 96 20 C100 12 105 8 105 8 C105 8 110 12 114 20 C122 38 120 60 105 74 Z" />
          </g>
          <path
            d="M105 246 C103 220 104 196 105 178 L105 30"
            fill="none"
            stroke="#3A6BA5"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </symbol>

        {/* Fronda de palma */}
        <symbol id="s-palm" viewBox="0 0 120 300">
          <path d="M60 298 C58 240 56 160 60 60" fill="none" stroke="#3A6BA5" strokeWidth="3" strokeLinecap="round" />
          <g fill="url(#toileSoft)" stroke="#3A6BA5" strokeWidth="1.9" strokeLinejoin="round">
            <path d="M60 62 C46 40 34 34 24 40 C34 52 46 62 60 68 Z" />
            <path d="M60 62 C74 40 86 34 96 40 C86 52 74 62 60 68 Z" />
            <path d="M60 96 C44 76 30 70 20 78 C32 90 46 100 60 104 Z" />
            <path d="M60 96 C76 76 90 70 100 78 C88 90 74 100 60 104 Z" />
            <path d="M60 132 C43 114 28 110 18 118 C31 130 46 138 60 140 Z" />
            <path d="M60 132 C77 114 92 110 102 118 C89 130 74 138 60 140 Z" />
            <path d="M60 168 C44 152 30 149 21 157 C33 168 47 174 60 176 Z" />
            <path d="M60 168 C76 152 90 149 99 157 C87 168 73 174 60 176 Z" />
            <path d="M60 204 C46 190 34 188 26 195 C37 205 49 210 60 212 Z" />
            <path d="M60 204 C74 190 86 188 94 195 C83 205 71 210 60 212 Z" />
            <path d="M60 22 C52 34 54 48 60 58 C66 48 68 34 60 22 Z" />
          </g>
        </symbol>

        {/* Helecho fino */}
        <symbol id="s-fern" viewBox="0 0 90 260">
          <path d="M45 258 C42 200 40 130 45 34" fill="none" stroke="#3A6BA5" strokeWidth="2.4" strokeLinecap="round" />
          <g fill="none" stroke="#3A6BA5" strokeWidth="1.8" strokeLinecap="round">
            <path d="M45 46 C34 36 26 34 20 38 M45 46 C56 36 64 34 70 38" />
            <path d="M45 74 C32 64 23 62 16 66 M45 74 C58 64 67 62 74 66" />
            <path d="M45 104 C31 94 21 92 14 97 M45 104 C59 94 69 92 76 97" />
            <path d="M45 134 C31 125 21 124 15 129 M45 134 C59 125 69 124 75 129" />
            <path d="M45 164 C33 156 24 155 18 160 M45 164 C57 156 66 155 72 160" />
            <path d="M45 194 C35 188 27 187 22 191 M45 194 C55 188 63 187 68 191" />
            <path d="M45 222 C37 218 31 217 27 220 M45 222 C53 218 59 217 63 220" />
            <path d="M45 34 C40 26 42 18 45 12 C48 18 50 26 45 34" />
          </g>
        </symbol>

        {/* Luna creciente con nubes */}
        <symbol id="s-moon" viewBox="0 0 200 220">
          <path
            d="M132 12 C74 26 40 74 48 130 C55 178 100 210 152 204
               C112 186 88 148 92 108 C96 66 116 32 132 12 Z"
            fill="url(#toileSoft)"
            stroke="#3A6BA5"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <g fill="#EAF1F9" stroke="#5F8FBE" strokeWidth="2.2">
            <path d="M18 206 C6 206 2 196 10 190 C10 178 24 174 32 182 C42 172 60 178 62 192 C72 192 76 206 62 206 Z" />
          </g>
        </symbol>

        {/* Moño de cinta azul */}
        <symbol id="s-bow" viewBox="0 0 200 120">
          <g fill="url(#toileSoft)" stroke="#3A6BA5" strokeWidth="2.4" strokeLinejoin="round">
            <path d="M96 44 C74 18 40 12 26 26 C12 40 22 62 50 66 C70 69 88 60 96 48 Z" />
            <path d="M104 44 C126 18 160 12 174 26 C188 40 178 62 150 66 C130 69 112 60 104 48 Z" />
            <path d="M92 46 C86 66 80 92 74 116 L98 100 L100 52 Z" />
            <path d="M108 46 C114 66 120 92 126 116 L102 100 L100 52 Z" />
            <ellipse cx="100" cy="47" rx="13" ry="11" />
          </g>
        </symbol>

        {/* Iconos de tarjetas */}
        <symbol id="ic-cal" viewBox="0 0 60 60">
          <g fill="none" stroke="#3A6BA5" strokeWidth="1.8" strokeLinecap="round">
            <rect x="8" y="14" width="44" height="38" rx="5" />
            <path d="M8 26h44M20 8v12M40 8v12" />
            <circle cx="30" cy="39" r="5" fill="#DCE9F5" stroke="none" />
          </g>
        </symbol>
        <symbol id="ic-pin" viewBox="0 0 60 60">
          <g fill="none" stroke="#3A6BA5" strokeWidth="1.8" strokeLinecap="round">
            <path d="M30 54c0 0-17-17-17-28a17 17 0 0134 0c0 11-17 28-17 28z" />
            <circle cx="30" cy="25" r="6.5" fill="#DCE9F5" stroke="none" />
          </g>
        </symbol>
        <symbol id="ic-gift" viewBox="0 0 60 60">
          <g fill="none" stroke="#3A6BA5" strokeWidth="1.8" strokeLinecap="round">
            <rect x="10" y="24" width="40" height="28" rx="4" />
            <path d="M8 24h44M30 24v28" />
            <path d="M30 24c-8 0-14-3-14-8s8-4 14 8c6-12 14-13 14-8s-6 8-14 8z" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
