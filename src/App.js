import './App.css';
export default function App() {

  return (
    <model-viewer 
    id="glb"
    src="/assets/Handpaint_-_Girl_01.glb" 
    ios-src="/assets/Handpaint_-_Girl_01.usdz"
    shadow-intensity="1" 
    autoplay    
    ar camera-controls touch-action="pan-y" 
    >     
    </model-viewer>
  );
}
