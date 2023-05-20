import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ElectronicPets from "./ElectronicPets/ElectronicPets";
import DanceMats from "./DanceMats/DanceMats";
import Robots from "./Robots/Robots";



const ShopCategory = () => {

  return (
    <div className="mb-16">
      <h1 className="text-center text-3xl md:text-5xl my-10 text-gray-800">
        Shop by category
      </h1>
      <Tabs>
        <TabList>
          <Tab>Electronic Pets</Tab>
          <Tab>Dance Mats</Tab>
          <Tab>Robots</Tab>
        </TabList>

        <TabPanel>
          <ElectronicPets></ElectronicPets>
        </TabPanel>

        <TabPanel>
          <DanceMats></DanceMats>
        </TabPanel>
        
        <TabPanel>
          <Robots></Robots>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategory;
