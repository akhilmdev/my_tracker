import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import LinearProgress from "@mui/material/LinearProgress";
import { redirect } from "next/navigation";
import dayjs from "dayjs";

export interface TaskCardProps {
  title: string;
  taskId: string;
  dueDate?: dayjs.Dayjs;
}

export function TaskCard({ title, taskId, dueDate }: TaskCardProps) {
  const onEdit = () => {
    redirect(`/task/${taskId}`);
  };

  return (
    <Card className="w-full bg-cardBackground rounded-2xl">
      <CardContent className="flex flex-col">
        <Box className="flex justify-between">
          <Typography
            variant="h5"
            className="capitalize  text-xl font-semibold"
          >
            {title}
          </Typography>
          {/* <Box>
            <ModeEditIcon onClick={() => onEdit()} />
          </Box> */}
        </Box>
        <Box className="flex gap-2 flex-wrap text-[#0000007a]">
          <Typography className="w-full text-sm">
            {
              "This will help me in lifeThis will help me in lifeThis will help me in lifeThis will help me in lifeThis will help me in life"
            }
          </Typography>
          <Typography className="bg-dueDateBackground/40 border rounded-2xl px-4 py-1 text-sm leading-3">
            {"Today"}
          </Typography>
          <Typography className="bg-tagBackground/40 border rounded-2xl px-4 py-1 text-sm leading-3">
            {"Personal"}
          </Typography>
        </Box>
        <Box className="pt-4 text-black">
          <LinearProgress
            variant="buffer"
            color="inherit"
            value={50}
            valueBuffer={70}
            className="animate-none	"
          />
          <Box className="flex justify-between text-[#0000007a]">
            <Typography className="text-xs">Progress</Typography>
            <Typography className="text-xs">{"50% Completed"}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
