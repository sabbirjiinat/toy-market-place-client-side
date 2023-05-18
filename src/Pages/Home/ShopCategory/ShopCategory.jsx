import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const ShopCategory = () => {
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl my-10 text-gray-800">Shop by category</h1>
            <Tabs>
    <TabList>
      <Tab>Electronic Pets</Tab>
      <Tab>Dance Mats</Tab>
      <Tab>Robots</Tab>
    </TabList>

    <TabPanel>
     lorem200
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ShopCategory;