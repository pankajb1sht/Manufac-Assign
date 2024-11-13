import React from 'react';
import { Paper, Title } from '@mantine/core';

interface TableCardProps {
  title: string;
  children: React.ReactNode;
}

export function TableCard({ title, children }: TableCardProps) {
  return (
    <Paper shadow="sm" p="md" radius="md" withBorder>
      <Title order={3} mb="md" c="blue.7">
        {title}
      </Title>
      {children}
    </Paper>
  );
}