<template>
  <TabGroup>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel><img src="../assets/aboutUs.png" alt="catra" class="max-w-full mx-auto" />
        <img src="../assets/aboutUs.png" alt="catra" class="max-w-full mx-auto" /></TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
  
  <script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>