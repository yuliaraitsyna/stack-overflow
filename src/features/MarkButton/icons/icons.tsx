import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';

export const icons = {
    'like': {
        'on': <ThumbUpAltIcon/>,
        'off': <ThumbUpOffAltIcon/>,
    },
    'dislike': {
        'on': <ThumbDownAltIcon/>,
        'off': <ThumbDownOffAltIcon/>,
    },
    'comment': {
        'on': <InsertCommentOutlinedIcon/>,
        'off': <InsertCommentOutlinedIcon/>
    }

}