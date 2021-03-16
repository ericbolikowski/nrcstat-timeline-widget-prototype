import { DataColor, BackgroundColorKey, Icon } from "./config";

export const samplePictogramWidgetObjects = [
  /* MULTIPLE SECTIONS (PAGE 2 OF SPEC) */
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN Hei Lars",
    subtitle: "Ongoing crisis further increases the gender gap.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Orange,
        icons: [
          {
            icon: Icon.PeopleSchoolGirl,
            data: 0.56,
            overrideDataColor: DataColor.Blue
          },
          { icon: Icon.PeopleSchoolBoy, data: 0.8 }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        dataColor: DataColor.Orange,
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05 },
          { icon: Icon.PeopleMale, data: 0.3 }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Orange,
        icons: [
          { icon: Icon.PeopleSchoolGirl, data: 0.5 },
          { icon: Icon.PeopleSchoolBoy, data: 0.8 }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        dataColor: DataColor.Blue,
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05 },
          { icon: Icon.PeopleMale, data: 0.3 }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Orange,
        icons: [
          { icon: Icon.PeopleSchoolGirl, data: 0.5 },
          { icon: Icon.PeopleSchoolBoy, data: 0.8 }
        ]
      },
      {
        title: "ENROLLED IN HIGHER EDUCATION",
        dataColor: DataColor.Blue,
        icons: [
          { icon: Icon.PeopleFemale, data: 0.05 },
          { icon: Icon.PeopleMale, data: 0.3 }
        ]
      }
    ]
  },

  /* ONE SECTION (PAGE 3 IN SPEC) */
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        dataColor: DataColor.Yellow,
        icons: [
          { icon: Icon.Food, data: 0.9 },
          { icon: Icon.WASH, data: 0.6 },
          { icon: Icon.Shelter, data: 0.8 }
        ]
      }
    ]
  },
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        dataColor: DataColor.Yellow,
        icons: [
          { icon: Icon.Food, data: 0.9 },
          { icon: Icon.WASH, data: 0.6 },
          { icon: Icon.Shelter, data: 0.8 }
        ]
      }
    ]
  },
  {
    title: "AVAILABLE RESOURCES IN XYZ",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines. This is a subtitle that is very long and should take up multiple lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        dataColor: DataColor.Yellow,
        icons: [
          { icon: Icon.Food, data: 0.9 },
          { icon: Icon.WASH, data: 0.2, overrideDataColor: DataColor.Red },
          { icon: Icon.Shelter, data: 0.8 }
        ]
      }
    ]
  },

  /* SINGLE ROW EXAMPLES (PAGE 3 IN SPEC) */
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        dataColor: DataColor.Orange,
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3 }]
      }
    ]
  },
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        dataColor: DataColor.Orange,
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3 }]
      }
    ]
  },
  {
    title: "REUNITED SYRIAN FAMILIES",
    subtitle: "This is an optional subtitle",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.White,
    sections: [
      {
        dataColor: DataColor.Orange,
        icons: [{ icon: Icon.PeopleRefugeeFamily, data: 0.3 }]
      }
    ]
  },

  /* CRAZY WIDGETS TESTING MANY MANY ICONS AT THE SAME TIME */
  {
    title: "EDUCATION GENDER INEQUALITY IN YEMEN",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.DarkGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Blue,
        icons: [
          { icon: "PeopleRefugeesRunning", data: 0.7 },
          {
            icon: "PeopleRefugeeFamilyAlt",
            data: 0.7,
            overrideDataColor: DataColor.Yellow
          },
          {
            icon: "PeopleRefugeeFamily",
            data: 0.75,
            overrideDataColor: DataColor.Red
          },
          { icon: "PeopleChildren", data: 0.5 },
          { icon: "PeopleSchoolBoy", data: 0.4 },
          { icon: "PeopleSchoolGirl", data: 0.3 },
          { icon: "PeopleLittleGirl", data: 0.2 },
          { icon: "PeopleLittleBoy", data: 0.1 },
          { icon: "PeopleFemale", data: 0.7 },
          { icon: "PeopleMale", data: 0.7 },
          { icon: "Camp", data: 0.7 }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Blue,
        icons: [
          { icon: "Legal", data: 0.25 },
          { icon: "Shelter", data: 0.3 }
        ]
      }
    ]
  },
  {
    title: "EDUCATION GENDER INEQUALITY IN NORWAY",
    subtitle:
      "Ongoing crisis further increases the gender gap. This is a subtitle that extends across two lines. This is a subtitle that extends across two lines. This is a subtitle that extends across two lines.",
    source: "Source: Norwegian Refugee Council, May, 2020",
    backgroundColor: BackgroundColorKey.LightGray,
    sections: [
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Orange,
        icons: [
          { icon: "Food", data: 0.21 },
          { icon: "Camp", data: 0.3 }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Blue,
        icons: [
          { icon: "Legal", data: 0.25 },
          { icon: "Shelter", data: 0.3 }
        ]
      },

      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Yellow,
        icons: [
          { icon: "Food", data: 0.5 },
          { icon: "Camp", data: 0.7 }
        ]
      },
      {
        title: "ENROLLED IN PRIMARY EDUCATION",
        dataColor: DataColor.Red,
        icons: [
          { icon: "Legal", data: 0.25 },
          { icon: "Shelter", data: 0.3 }
        ]
      }
    ]
  }
];

console.log(JSON.stringify(samplePictogramWidgetObjects, 0, 2));
