import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Teapot } from './Teapot';

export function App() {
  return (
    <div className="teapot-sales-page">
      <div className="content-container">
        <div className="product-info">
          <h1>Чайник 3D</h1>
          <p className="tagline">На один вимір більше в порівнянні з 2D чайником</p>
          
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

        <div className="teapot-viewer">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[0, 10, 0]} 
              intensity={2}
            />
            <OrbitControls />
            <Teapot color="#a8cdf7" />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

