import { MantineProvider, Container, Title, Text, SimpleGrid } from '@mantine/core';
import { Table1, Table2 } from './components/Tables';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '2rem' }}>
        <Container size="xl">
          <Title
            order={1}
            ta="center"
            mb="xs"
            c="blue.7"
          >
            Indian Agriculture Analytics
          </Title>
          <Text
            ta="center"
            size="lg"
            c="dimmed"
            mb="xl"
          >
            Comprehensive analysis of crop production and cultivation patterns
          </Text>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <Table1 />
            <Table2 />
          </SimpleGrid>
        </Container>
      </div>
    </MantineProvider>
  );
}

export default App;