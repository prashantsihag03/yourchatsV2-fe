import { Box } from '@mui/system'
import Menu from '../Menu'
import logo from '../../assets/Logo.svg'
import { DisplayMode } from '../../Theme/types'
import { containerStyles } from './styles'
import { Grow } from '@mui/material'

interface IHeader {
  displayMode: DisplayMode
  toggleDisplayMode: () => void
}

export const Header: React.FC<IHeader> = ({
  displayMode,
  toggleDisplayMode,
}: IHeader) => {
  return (
    <Box sx={containerStyles}>
      <Grow appear in mountOnEnter unmountOnExit timeout={500}>
        <img src={logo} alt="YourChats Logo" style={{ cursor: 'pointer' }} />
      </Grow>
      <Menu displayMode={displayMode} toggleDisplayMode={toggleDisplayMode} />
    </Box>
  )
}
