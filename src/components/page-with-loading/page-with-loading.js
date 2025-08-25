'use client';

import PropTypes from 'prop-types';
import { usePageLoading } from 'src/hooks/use-page-loading';
import { SplashScreen } from 'src/components/loading-screen';

// Wrapper component per pagine con loading screen
export default function PageWithLoading({ children, loadingTime = 1500 }) {
  const isLoading = usePageLoading(loadingTime);

  if (isLoading) {
    return <SplashScreen />;
  }

  return children;
}

PageWithLoading.propTypes = {
  children: PropTypes.node.isRequired,
  loadingTime: PropTypes.number,
};
