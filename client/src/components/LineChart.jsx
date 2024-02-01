import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ idList, data, rawData }) => {
    const formatData = (rawData) => {
        // genreIndex maps the genre name to its index in the formattedData
        const genreIndex = {};

        // Loop through the idList to add each id to the formattedData array and fill the genreIndex object
        const formattedData = idList.map(({ Name }, index) => {
            genreIndex[Name] = index;
            return { id: Name, data: [] };
        });

        // Loop through the rawData and add the data to formattedData
        rawData.forEach(({ YearMonth, Genre, UnitsSold }) => {
            formattedData[genreIndex[Genre]]["data"].push({
                x: YearMonth,
                y: UnitsSold,
            });
        });

        return formattedData;
    };

    // TODO: Debug ResponsiveLine not displaying
    return (
        <ResponsiveLine
            data={data ? data : formatData(rawData)}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
            }}
            pointSize={10}
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