import React from 'react';
import {
  BackgroundColorKey,
  BackgroundColorToIconBaseColorMap,
  DataColor,
  IconBaseColor,
} from './config';
import {
  Camp,
  Education,
  Food,
  Legal,
  Shelter,
  WASH,
  PeopleFemale,
  PeopleMale,
  PeopleLittleBoy,
  PeopleLittleGirl,
  PeopleSchoolGirl,
  PeopleSchoolBoy,
  PeopleChildren,
  PeopleRefugeeFamily,
  PeopleRefugeeFamilyAlt,
  PeopleRefugeesRunning,
} from './icons/index.js';
import { isMobileDevice } from './isMobileDevice';
import './Widget.scss';

const WidgetIconMap = {
  PeopleFemale,
  PeopleMale,
  PeopleLittleBoy,
  PeopleLittleGirl,
  PeopleSchoolGirl,
  PeopleSchoolBoy,
  PeopleChildren,
  PeopleRefugeeFamily,
  PeopleRefugeeFamilyAlt,
  PeopleRefugeesRunning,
  Camp,
  Education,
  Food,
  Legal,
  Shelter,
  WASH,
};

const isMobile = isMobileDevice();

export function Widget({
  title,
  subtitle,
  source,
  backgroundColor = BackgroundColorKey.White,
  sections,
}) {
  const iconBaseColor = BackgroundColorToIconBaseColorMap[backgroundColor];

  return (
    <div
      className={`container ${isMobile ? 'mobile' : 'desktop'} ${
        sections?.length > 1 ? 'multiple-sections' : 'single-section'
      } background-${backgroundColor}`}
    >
      {title && <span className="title">{title}</span>}
      {subtitle && <span className="subtitle">{subtitle}</span>}
      {sections &&
        sections.map((section, key) => (
          <div className="section" key={key}>
            {section.title && <span className="section-title">{section.title}</span>}
            {section.icons?.map((icon, key) => {
              const Icon = WidgetIconMap[icon.icon];
              const fillColor = icon.overrideDataColor ? icon.overrideDataColor : section.dataColor;
              return (
                <Icon
                  key={key}
                  data={icon.data}
                  iconBaseColor={iconBaseColor}
                  fillColor={fillColor}
                />
              );
            })}
          </div>
        ))}
      <span className="source">{source}</span>
    </div>
  );
}
