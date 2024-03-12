import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import App from '../App';

const data = [
  {
    image: 'super1',
    series: "Gloop Series",
    title: "Purple Man",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: 'super2',
    series: "Gloop Series",
    title: "Beige",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: 'super3',
    series: "Gloop Series",
    title: "Red Man",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
  {
    image: 'super4',
    series: "Gloop Series",
    title: "Green",
    price: 2.99,
    tag: 12983,
    time: 1,
  },
];

function Editor({ imageSrc }) {
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const initializeCanvas = () => {
      const canvasInstance = new fabric.Canvas('canvas');
      fabric.Image.fromURL(imageSrc, (img) => {
        canvasInstance.add(img);
      });
      setCanvas(canvasInstance);
    };

    if (imageSrc) {
      initializeCanvas();
    }
  }, [imageSrc]);

  const addText = () => {
    const text = new fabric.Textbox('Your text here', {
      left: 50,
      top: 50,
      fontFamily: 'Arial',
      fill: 'black',
    });
    canvas.add(text);
  };

  const addIcon = () => {
    // Add icon handling logic here
  };

  const saveChanges = () => {
    canvas.renderAll();
  };

  return (
    <div className="EditorContainer">
      <button onClick={addText}>Add Text</button>
      <button onClick={addIcon}>Add Icon</button>
      <button onClick={saveChanges}>Save Changes</button>
      <canvas id="canvas" width={800} height={600} />
    </div>
  );
}

function Customize() {
  return (
    <div className="App">
      <h1>Image Editor</h1>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <Editor imageSrc={`/src/assets/${item.image}.png`} />
        </div>
      ))}
    </div>
  );
}

export default Customize;
