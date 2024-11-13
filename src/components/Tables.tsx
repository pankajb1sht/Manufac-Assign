import { Table, ScrollArea, Group, Text } from '@mantine/core';
import { TableCard } from './TableCard';
import { processDataForTable1, processDataForTable2 } from '../utils/dataProcessor';

export function Table1() {
  const data = processDataForTable1();

  return (
    <TableCard title="Yearly Crop Production Analysis">
      <ScrollArea h={400}>
        <Table stickyHeader highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={100}>Year</Table.Th>
              <Table.Th>Maximum Production</Table.Th>
              <Table.Th>Minimum Production</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((row) => (
              <Table.Tr key={row.year}>
                <Table.Td fw={500}>{row.year}</Table.Td>
                <Table.Td>
                  <Text c="green.7" fw={500}>
                    {row.maxCrop}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text c="red.7" fw={500}>
                    {row.minCrop}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </TableCard>
  );
}

export function Table2() {
  const data = processDataForTable2();

  return (
    <TableCard title="Historical Crop Statistics (1950-2020)">
      <ScrollArea h={400}>
        <Table stickyHeader highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={150}>Crop</Table.Th>
              <Table.Th>Average Yield</Table.Th>
              <Table.Th>Average Area</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data.map((row) => (
              <Table.Tr key={row.crop}>
                <Table.Td fw={500}>{row.crop}</Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Text fw={500}>{row.avgYield}</Text>
                    <Text size="sm" c="dimmed">
                      tons/hectare
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Text fw={500}>{row.avgArea}</Text>
                    <Text size="sm" c="dimmed">
                      hectares
                    </Text>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </TableCard>
  );
}