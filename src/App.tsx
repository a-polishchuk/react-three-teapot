import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export function App() {
  return (
    <div className="teapot-sales-page">
      <div className="content-container">
        <div className="product-info">
          <h1>The Revolutionary Quantum Teapot</h1>
          <p className="tagline">Where Science Meets Tea Time!</p>
          
          <div className="features">
            <h2>Features:</h2>
            <ul>
              <li>✨ Quantum-powered temperature control</li>
              <li>🌌 Zero-gravity pouring technology</li>
              <li>🎨 Customizable color-shifting finish</li>
              <li>🤖 AI-powered tea strength detection</li>
            </ul>
          </div>

          <div className="price-section">
            <p className="price">Only $999.99</p>
            <button className="buy-button">Add to Cart</button>
          </div>
        </div>

        <div className="teapot-viewer">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
            </mesh>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

