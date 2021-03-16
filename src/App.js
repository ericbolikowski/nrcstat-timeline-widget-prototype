import React from 'react';
import './styles.css';
import { Widget } from './Widget';

import { samplePictogramWidgetObjects } from './sample-widget-objects';

export default function App() {
  return (
    <div className="App">
      {samplePictogramWidgetObjects.map((w, key) => (
        <>
          <Widget key={key} {...w} />
        </>
      ))}
    </div>
  );
}
