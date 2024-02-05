import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ series, data, label, X, Y, isFormatted }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // This function formats the data for plotting, if the data isn't in the correct format
    const formatData = (data) => {
        // Loop through the series to add each label as an id to the lineData array
        const lineData = series.map((label) => {
            return { id: label, data: [] };
        });

        // Loop through the dataset and add the x and y to lineData
        data.filter((row) => series.includes(row[label])).forEach((row) => {
            lineData[series.indexOf(row[label])]["data"].push({
                x: row[X],
                y: row[Y],
            });
        });

        console.log(lineData);

        return lineData;
    };

    return (
        <ResponsiveLine
            data={isFormatted ? data : formatData(data)}
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
                        fontSize: 8,
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
                min: 0,
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
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 5,
                    itemDirection: "left-to-right",
                    itemWidth: 110,
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
