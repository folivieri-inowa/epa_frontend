import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function HtmlText({ 
  text,
  children, 
  component = Typography,
  ...other 
}) {
  // Usa text se fornito, altrimenti children
  const content = text || children;
  
  // Converti <br /> e <br /><br /> in line breaks
  const processedText = content
    ?.replace(/<br\s*\/?><br\s*\/?>/gi, '\n\n')
    ?.replace(/<br\s*\/?>/gi, '\n');

  const Component = component;

  return (
    <Component
      {...other}
      sx={{
        whiteSpace: 'pre-line', // Questo fa sì che i \n vengano interpretati come line breaks
        ...other.sx,
      }}
    >
      {processedText}
    </Component>
  );
}

HtmlText.propTypes = {
  text: PropTypes.string,
  children: PropTypes.string,
  component: PropTypes.elementType,
};
