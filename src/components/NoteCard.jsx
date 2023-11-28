import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { blue, green, pink, yellow } from "@mui/material/colors";
export default function NoteCard({ note, handeDelete }) {
  return (
    <div>
      <Card
        sx={{
          border:
            note.category === "work"
              ? `1px solid ${yellow[700]}`
              : note.category === "Money"
              ? `1px solid ${green[500]}`
              : note.category === "todos"
              ? `1px solid ${pink[500]}`
              : `1px solid ${blue[500]}`,
        }}
        elevation={2}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                backgroundColor:
                  note.category === "work"
                    ? yellow[700]
                    : note.category === "Money"
                    ? green[500]
                    : note.category === "todos"
                    ? pink[500]
                    : blue[500],
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="delete"
              onClick={() => handeDelete(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
