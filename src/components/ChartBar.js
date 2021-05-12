import { studentData } from '../Utils';
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';

const ChartBar = () => {
    return (
            <VictoryChart
              theme={VictoryTheme.material}
              domainPadding={5}  
            >
            <VictoryAxis 
              tickValues={[1, 2, 3, 4, 5 ]}
              ticketFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis 
              dependentAxis
            />
            <VictoryStack
              colorScale={"cool"}
            >
              <VictoryBar
                data={studentData}
                x="project"
                y="niceness"
              />
              </VictoryStack>
            </VictoryChart>
        )
    }
 
export default ChartBar;