import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ idList, data, rawData }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const formatData = (rawData) => {
        // genreIndex maps the genre name to its index in the lineData
        const genreIndex = {};

        // Loop through the idList to add each id to the lineData array and fill the genreIndex object
        const lineData = idList.map(({ Genre }, index) => {
            genreIndex[Genre] = index;
            return { id: Genre, data: [] };
        });

        // Loop through the rawData and add the data to lineData
        rawData
            .filter(({ Genre }) => Genre in genreIndex)
            .forEach(({ YearMonth, Genre, UnitsSold }) => {
                lineData[genreIndex[Genre]]["data"].push({
                    x: YearMonth,
                    y: UnitsSold,
                });
            });

        console.log(lineData);

        return lineData;
    };

    return (
        <ResponsiveLine
            data={data ? data : formatData(rawData)}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.gray[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.gray[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.gray[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.gray[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.gray[100],
                    },
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    },
                },
            }}
            colors={{ scheme: "paired" }}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xFormat="time:%b %Y"
            xScale={{
                type: "time",
                format: "%b %Y",
                precision: "day",
                useUTC: false,
            }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: "%b %Y",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 30,
                legend: "Month",
                legendOffset: 45,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Tracks Sold",
                legendOffset: -40,
                legendPosition: "middle",
            }}
            pointSize={4}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1,
                            },
                        },
                    ],
                },
            ]}
        />
    );
};

export default LineChart;
