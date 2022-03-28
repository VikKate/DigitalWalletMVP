import React from 'react';
import {Box, VStack} from 'native-base';
import {FadeInView} from '../components';
import {CardsCarousel, TransactionsList} from '../features';

const Dashboard = () => (
  <FadeInView>
    <VStack flex={1}>
      <Box flex={0.5}>
        <CardsCarousel />
      </Box>
      <Box flex={0.5}>
        <TransactionsList />
      </Box>
    </VStack>
  </FadeInView>
);

export default Dashboard;
