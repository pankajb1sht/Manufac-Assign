# Indian Agriculture Analytics

## Overview
This project provides a comprehensive analysis of crop production and cultivation patterns in India. It uses Mantine v7 to implement responsive and interactive tables for data visualization.

## Features
- **Yearly Crop Production Analysis**: Displays the year-wise crop production statistics with maximum and minimum production values.
- **Historical Crop Statistics**: Presents the historical data of crop statistics from 1950 to 2020, including average yield and area.

## Screenshots
### Table 1: Yearly Crop Production Analysis  &  Table 2: Historical Crop Statistics
![Table](public/Screenshot 2024-11-13 195016.png.png)


## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/indian-agriculture-analytics.git
    cd indian-agriculture-analytics
    ```

2. Install dependencies:
    ```bash
    yarn install
    ```

3. Start the development server:
    ```bash
    yarn dev
    ```

## Build

To build the project, run:
    ```bash
    yarn build
    ```

## Folder Structure

```plaintext
indian-agriculture-analytics/
├── public/
│   └── screenshots/
│       └── table.png
├── src/
│   ├── components/
│   │   ├── TableCard.tsx
│   │   └── Table.tsx
│   ├── utils/
│   │   └── dataProcessor.ts
│   ├── App.tsx
│   ├── Data.json
│   └── main.tsx
├── .gitignore
├── package.json
├── README.md
└── yarn.lock


