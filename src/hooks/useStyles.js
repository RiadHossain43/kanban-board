import {makeStyles} from "@material-ui/core/styles"
const colors = {
    gray:'#ebecf0'
}
const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
    },
    boardColumnsContainer:{
        display:'flex',
        
    },
    boardColumn:{
        background:colors.gray,
        borderRadius:'5px',
        marginRight:'10px',
        // height:'600px',
        // overflowY:'scroll'
    },
    columnTitle:{
        margin:'10px 10px 0',
        display:'flex',
        justifyContent:'space-between'
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardRoot: {
        width: 275,
        margin:'10px'
    },
    cardTitle: {
        fontSize: 14,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding:'1rem',
        borderRadius:'6px'
    },
    navItemContainer:{
        marginLeft:'auto',
        color:'white'
    },
    link:{
        textDecoration:'none',
        color:'inherit'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default useStyles
