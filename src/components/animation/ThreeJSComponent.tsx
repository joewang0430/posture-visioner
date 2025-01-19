// Example in a React component
const ThreeJSComponent = () => {
    return (
        <iframe
            src="/threejs.html" // Path to the new HTML file
            style={{ width: '100%', height: '100%', border: 'none' }} // Use 100% for responsive width
            title="Three.js Scene"
        />
    );
};

export default ThreeJSComponent;