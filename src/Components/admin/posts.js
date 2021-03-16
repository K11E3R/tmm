import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Posts = (props) => {
	const { posts } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) return <p>Can not find any expeditions, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table" id="test-table">
							<TableHead>
							<TableRow>
									<TableCell colSpan={6} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="secondary"
										>
											Nouvelle Expedition
										</Button>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Id</TableCell>
									<TableCell align="left">Date d'envoi</TableCell>
									<TableCell align="left">Expéditeur:</TableCell>
                                    <TableCell align="left">Déstinataire:</TableCell>
                                    <TableCell align="left">Statut</TableCell>
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{posts.map((post) => {
									return (
										<TableRow>
											<TableCell component="th" scope="row">
												{20210000+post.id}
											</TableCell>
                                            <TableCell align="left">{post.published.split("T")[0]}</TableCell>
											<TableCell align="left">{post.noma}</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/post/' + post.nom}
													className={classes.link}
												>
													{post.nom}
												</Link>
											</TableCell>

                                            <TableCell align="left">{post.status}</TableCell>

											<TableCell align="left">
												<Link
													color="textPrimary"
													href={'/admin/edit/' + post.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link>
												<Link
													color="textPrimary"
													href={'/admin/delete/' + post.id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
