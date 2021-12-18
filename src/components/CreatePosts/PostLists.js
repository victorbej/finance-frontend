import React from 'react';
import CountLikes from './CountLikes';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function PostLists(props) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (e) => {
        setExpanded(!expanded);
    };

    return (
        <ul>
            {props.posts.map((post, index) =>
                <li key={index}>
                    <Card sx={{ maxWidth: '100vh', margin: 'auto', marginBottom: '1em' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    A
                                </Avatar>
                            }
                            action={
                                <IconButton onClick={() => props.remove(post)} aria-label="settings">
                                    <DeleteIcon />
                                </IconButton>
                            }
                            title={post.title}
                            subheader="Сентябрь 21, 2021"
                        />
                        <CardMedia
                            component="img"
                            height="250"
                            image={post.url}
                            alt={post.title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Имя Автора
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <CountLikes />
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Collapse>
                    </Card>
                </li>
            )}
        </ul>
    )
}

export default PostLists;