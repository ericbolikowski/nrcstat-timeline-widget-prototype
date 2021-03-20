import React from 'react';
import './styles.css';
import { Widget } from './Widget';

import { sampleTimelineWidgetObjects } from './sample-timeline-widgets';

export default function App() {
  return (
    <div className="App">
      {sampleTimelineWidgetObjects.map((w, key) => (
        <Widget key={key} {...w} />
      ))}
    </div>
  );
}
