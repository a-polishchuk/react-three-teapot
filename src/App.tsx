import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Teapot } from './Teapot';
import { useState } from 'react';

const TEAPOT_COLORS = [
  { name: 'Синій', value: '#a8cdf7' },
  { name: 'Червоний', value: '#ff6b6b' },
  { name: 'Зелений', value: '#4ecdc4' },
  { name: 'Фіолетовий', value: '#a78bfa' },
  { name: 'Жовтий', value: '#fde047' },
];

export function App() {
  const [selectedColor, setSelectedColor] = useState(TEAPOT_COLORS[0].value);

  return (
    <div className="teapot-sales-page">
      <div className="content-container">
        <div className="product-card">
          <div className="teapot-viewer">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight 
                position={[0, 10, 0]} 
                intensity={2}
              />
              <OrbitControls />
              <Teapot color={selectedColor} />
            </Canvas>
          </div>

          <div className="product-info">
            <h1>Чайник 3D</h1>
            <p className="tagline">На один вимір більше в порівнянні з 2D чайником</p>
            
            <div className="color-selection">
              <h2>Наявні кольори:</h2>
              <div className="color-buttons">
                {TEAPOT_COLORS.map((color) => (
                  <button
                    key={color.value}
                    className={`color-button ${selectedColor === color.value ? 'selected' : ''}`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="features">
              <h2>Характеристики:</h2>
              <ul>
                <li>Красівий</li>
                <li>Можна вертіти в просторі</li>
                <li>Можна заварити тривимірний чай</li>
              </ul>
            </div>

            <div className="price-section">
              <p className="price">Всього лише 10⁵ гривень!</p>
              <button className="buy-button">Купити не роздумуючи</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

