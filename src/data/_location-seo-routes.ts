import { Location } from "@/types";
import { locations } from "@/data/locations";

interface LocationSeoRoute {
  name: string;
  route: string;
}

const locationSeoRoutes: LocationSeoRoute[] = [
  {
    name: "Lake Tahoe",
    route: "/lake-tahoe",
  },
  {
    name: "Truckee",
    route: "/truckee",
  },
  {
    name: "Incline Village",
    route: "/incline-village",
  },
  {
    name: "Reno",
    route: "/reno",
  },
  {
    name: "Carson City",
    route: "/carson-city",
  },
  {
    name: "South Lake Tahoe",
    route: "/south-lake-tahoe",
  },
  {
    name: "Tahoe City",
    route: "/tahoe-city",
  },
  {
    name: "Olympic Valley",
    route: "/olympic-valley",
  },
  {
    name: "Kings Beach",
    route: "/kings-beach",
  },
  {
    name: "Glenbrook",
    route: "/glenbrook",
  },
  {
    name: "Zephyr Cove",
    route: "/zephyr-cove",
  },
  {
    name: "Stateline",
    route: "/stateline",
  },
  {
    name: "Crystal Bay",
    route: "/crystal-bay",
  },
  {
    name: "Homewood",
    route: "/homewood",
  },
  {
    name: "Tahoe Vista",
    route: "/tahoe-vista",
  },
  {
    name: "Sunnyside-Tahoe City",
    route: "/sunnyside-tahoe-city",
  },
  {
    name: "Dollar Point",
    route: "/dollar-point",
  },
  {
    name: "Carnelian Bay",
    route: "/carnelian-bay",
  },
  {
    name: "Meeks Bay",
    route: "/meeks-bay",
  },
  {
    name: "Rubicon Bay",
    route: "/rubicon-bay",
  },
  {
    name: "Tahoma",
    route: "/tahoma",
  },
  {
    name: "Minden",
    route: "/minden",
  },
  {
    name: "Gardnerville",
    route: "/gardnerville",
  },
  {
    name: "Sparks",
    route: "/sparks",
  },
  {
    name: "Verdi",
    route: "/verdi",
  },
  {
    name: "Spanish Springs",
    route: "/spanish-springs",
  },
  {
    name: "Lemmon Valley-Golden Valley",
    route: "/lemmon-valley-golden-valley",
  },
  {
    name: "Cold Springs",
    route: "/cold-springs",
  },
  {
    name: "Washoe Valley",
    route: "/washoe-valley",
  },
  {
    name: "Dayton",
    route: "/dayton",
  },
  {
    name: "Fernley",
    route: "/fernley",
  },
  {
    name: "Fallon",
    route: "/fallon",
  },
  {
    name: "Yerington",
    route: "/yerington",
  },
  {
    name: "Silver Springs",
    route: "/silver-springs",
  },
  {
    name: "Stagecoach",
    route: "/stagecoach",
  },
  {
    name: "Wellington",
    route: "/wellington",
  },
  {
    name: "Smith Valley",
    route: "/smith-valley",
  },
  {
    name: "Indian Hills",
    route: "/indian-hills",
  },
  {
    name: "Johnson Lane",
    route: "/johnson-lane",
  },
  {
    name: "Mogul",
    route: "/mogul",
  },
  {
    name: "Incline Village",
    route: "/incline-village",
  },
  {
    name: "Sun Valley",
    route: "/sun-valley",
  },
  {
    name: "Hidden Valley",
    route: "/hidden-valley",
  },
  {
    name: "Somersett",
    route: "/somersett",
  },
  {
    name: "Damonte Ranch",
    route: "/damonte-ranch",
  },
  {
    name: "Arrowcreek",
    route: "/arrowcreek",
  },
  {
    name: "Caughlin Ranch",
    route: "/caughlin-ranch",
  },
  {
    name: "Old Southwest Reno",
    route: "/old-southwest-reno",
  },
  {
    name: "Midtown Reno",
    route: "/midtown-reno",
  },
  {
    name: "Northwest Reno",
    route: "/northwest-reno",
  },
  {
    name: "Northeast Reno",
    route: "/northeast-reno",
  },
  {
    name: "Southeast Reno",
    route: "/southeast-reno",
  },
  {
    name: "South Reno",
    route: "/south-reno",
  },
  {
    name: "West Reno",
    route: "/west-reno",
  },
  {
    name: "North Valleys",
    route: "/north-valleys",
  },
  {
    name: "Spanish Springs",
    route: "/spanish-springs",
  },
  {
    name: "Wingfield Springs",
    route: "/wingfield-springs",
  },
  {
    name: " Sparks",
    route: "/ sparks",
  },
  {
    name: "Spanish Springs",
    route: "/spanish-springs",
  },
  {
    name: "Verdi",
    route: "/verdi",
  },
  {
    name: "Cold Springs",
    route: "/cold-springs",
  },
  {
    name: "Golden Valley",
    route: "/golden-valley",
  },
  {
    name: "Lemmon Valley",
    route: "/lemmon-valley",
  },
  {
    name: "Sun Valley",
    route: "/sun-valley",
  },
  {
    name: "Hidden Valley",
    route: "/hidden-valley",
  },
  {
    name: "Somersett",
    route: "/somersett",
  },
  {
    name: "Damonte Ranch",
    route: "/damonte-ranch",
  },
  {
    name: "Arrowcreek",
    route: "/arrowcreek",
  },
  {
    name: "Caughlin Ranch",
    route: "/caughlin-ranch",
  },
  {
    name: "Old Southwest Reno",
    route: "/old-southwest-reno",
  },
  {
    name: "Midtown Reno",
    route: "/midtown-reno",
  },
  {
    name: "Northwest Reno",
    route: "/northwest-reno",
  },
  {
    name: "Northeast Reno",
    route: "/northeast-reno",
  },
  {
    name: "Southeast Reno",
    route: "/southeast-reno",
  },
  {
    name: "South Reno",
    route: "/south-reno",
  },
  {
    name: "West Reno",
    route: "/west-reno",
  },
  {
    name: "North Valleys",
    route: "/north-valleys",
  },
  {
    name: "Wingfield Springs",
    route: "/wingfield-springs",
  },
  {
    name: "Carson City",
    route: "/carson-city",
  },
  {
    name: "Dayton",
    route: "/dayton",
  },
  {
    name: "Fernley",
    route: "/fernley",
  },
  {
    name: "Fallon",
    route: "/fallon",
  },
  {
    name: "Gardnerville",
    route: "/gardnerville",
  },
  {
    name: "Minden",
    route: "/minden",
  },
  {
    name: "Yerington",
    route: "/yerington",
  },
  {
    name: "Silver Springs",
    route: "/silver-springs",
  },
  {
    name: "Stagecoach",
    route: "/stagecoach",
  },
  {
    name: "Wellington",
    route: "/wellington",
  },
  {
    name: "Smith Valley",
    route: "/smith-valley",
  },
  {
    name: "Indian Hills",
    route: "/indian-hills",
  },
  {
    name: "Johnson Lane",
    route: "/johnson-lane",
  },
  {
    name: "Washoe Valley",
    route: "/washoe-valley",
  },
  {
    name: "Truckee",
    route: "/truckee",
  },
  {
    name: "South Lake Tahoe",
    route: "/south-lake-tahoe",
  },
  {
    name: "Tahoe City",
    route: "/tahoe-city",
  },
  {
    name: "Olympic Valley",
    route: "/olympic-valley",
  },
  {
    name: "Kings Beach",
    route: "/kings-beach",
  },
  {
    name: "Glenbrook",
    route: "/glenbrook",
  },
  {
    name: "Zephyr Cove",
    route: "/zephyr-cove",
  },
  {
    name: "Stateline",
    route: "/stateline",
  },
  {
    name: "Crystal Bay",
    route: "/crystal-bay",
  },
  {
    name: "Homewood",
    route: "/homewood",
  },
  {
    name: "Tahoe Vista",
    route: "/tahoe-vista",
  },
  {
    name: "Sunnyside-Tahoe City",
    route: "/sunnyside-tahoe-city",
  },
  {
    name: "Dollar Point",
    route: "/dollar-point",
  },
  {
    name: "Carnelian Bay",
    route: "/carnelian-bay",
  },
  {
    name: "Meeks Bay",
    route: "/meeks-bay",
  },
  {
    name: "Rubicon Bay",
    route: "/rubicon-bay",
  },
  {
    name: "Tahoma",
    route: "/tahoma",
  },
];

export default locationSeoRoutes;
