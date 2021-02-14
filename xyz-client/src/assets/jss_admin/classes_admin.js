import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
	paper: {
		width: "100%",
		marginBottom: theme.spacing(2),
	},
	paper_edit: {
		padding: theme.spacing(3)
	}
}))

export default useStyles