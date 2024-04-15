import { DateRange } from "@/components/common/dateRange";
import Box from "@mui/material/Box";
import dayjs from "dayjs";
import { TaskCard } from "./TaskCard";

export interface TaskListProps {}

export function TaskList({}: TaskListProps) {
  return (
    <div className="mx-4">
      <Box className="flex gap-2">
        <DateRange fromDate={dayjs().subtract(2, "hours")} toDate={dayjs()} />
        <TaskCard title="this is the first task" taskId="1" />
      </Box>
    </div>
  );
}
