//React
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//Material Ui
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
//Components
import Login from './Login'
//Context
import { useGlobalContext } from '../utils/context'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { user } = useGlobalContext()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/' className={classes.navLink}>
              GroupShop
            </Link>
          </Typography>

          <Button color='inherit'>
            <Link to='/' className={classes.navLink}>
              Home
            </Link>
          </Button>
          <Button color='inherit'>
            <Link to='/groups' className={classes.navLink}>
              Groups
            </Link>
          </Button>
          <Button color='inherit'>
            <Link to='/profile' className={classes.navLink}>
              Profile
            </Link>
          </Button>
          {user.loggedIn ? (
            <IconButton
              aria-label='account of current user'
              aria-controls='primary-search-account-menu'
              aria-haspopup='true'
              color='inherit'
              onClick={handleOpen}
            >
              <AccountCircle />
            </IconButton>
          ) : (
            <Button color='inherit' onClick={handleOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Login />
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Navbar
